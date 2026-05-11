'use strict';

const fs   = require('fs');
const path = require('path');

const INDEX_PATH    = path.join(__dirname, '../output/asset-index.json');
const LOCK_PATH     = INDEX_PATH + '.lock';
const LOCK_TIMEOUT  = 5000; // ms

// ── Roles that are safe to reuse across brands ─────────────────────────────
const REUSABLE_ROLES = new Set(['ui-screenshot', 'feature-illustration', 'generic-stock']);
// These roles carry brand identity — never reuse across products
const NEVER_REUSE    = new Set(['logo-or-icon', 'person-or-team', 'hero-visual']);

// ── File-lock (spin-wait) for concurrent write safety ─────────────────────

function acquireLock() {
  const deadline = Date.now() + LOCK_TIMEOUT;
  while (Date.now() < deadline) {
    try {
      fs.writeFileSync(LOCK_PATH, String(process.pid), { flag: 'wx' });
      return true;
    } catch {
      // Lock held — busy-wait 50 ms then retry
      const t = Date.now() + 50;
      while (Date.now() < t) { /* spin */ }
    }
  }
  return false;
}

function releaseLock() {
  try { fs.unlinkSync(LOCK_PATH); } catch { /* already gone */ }
}

// ── Low-level read / write ─────────────────────────────────────────────────

function readIndex() {
  try {
    if (!fs.existsSync(INDEX_PATH)) return [];
    const parsed = JSON.parse(fs.readFileSync(INDEX_PATH, 'utf8'));
    return Array.isArray(parsed) ? parsed : [];
  } catch {
    return [];
  }
}

function writeIndex(entries) {
  const dir = path.dirname(INDEX_PATH);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  const tmp = INDEX_PATH + '.tmp';
  fs.writeFileSync(tmp, JSON.stringify(entries, null, 2), 'utf8');
  fs.renameSync(tmp, INDEX_PATH); // atomic on POSIX, best-effort on Windows
}

// ── Stale-entry cleanup ────────────────────────────────────────────────────

function resolveLocalPath(localUrl) {
  // /output/generated-assets/... → absolute path
  return path.join(__dirname, '..', localUrl.replace(/^\//, ''));
}

function isAlive(entry) {
  if (!entry.localUrl) return false;
  try { return fs.existsSync(resolveLocalPath(entry.localUrl)); }
  catch { return false; }
}

function cleanStale(entries) {
  return entries.filter(isAlive);
}

// ── Persist analyzed images to the index ──────────────────────────────────

function appendAnalyzedImages(analyzedImages, { productName, productCategory, sessionId }) {
  if (!Array.isArray(analyzedImages) || analyzedImages.length === 0) return;

  const acquired = acquireLock();
  try {
    const existing = cleanStale(readIndex());
    const now      = Date.now();

    const fresh = analyzedImages
      .filter(img =>
        img &&
        !img._reused &&           // skip already-reused entries
        !img.reject &&
        img.url &&
        (img.confidence || 0) > 0.4
      )
      .map(img => ({
        localUrl:          img.url,
        originalUrl:       img.originalUrl || '',
        role:              img.role || 'generic-stock',
        description:       img.description || '',
        confidence:        img.confidence || 0,
        isWide:            img.isWide            || false,
        hasDarkBackground: img.hasDarkBackground || false,
        isTransparent:     img.isTransparent     || false,
        sectionFit:        img.sectionFit        || {},
        productCategory:   productCategory || '',
        productName:       productName     || '',
        sessionId:         sessionId       || '',
        analyzedAt:        now
      }));

    // Upsert by localUrl — re-analysis updates existing entry
    const byUrl = new Map(existing.map(e => [e.localUrl, e]));
    for (const entry of fresh) byUrl.set(entry.localUrl, entry);

    writeIndex([...byUrl.values()]);

    if (fresh.length > 0) {
      console.log(`[AssetIndex] Indexed ${fresh.length} images for "${productName}" (${productCategory})`);
    }
  } finally {
    if (acquired) releaseLock();
  }
}

// ── Category similarity (Jaccard on words) ────────────────────────────────

function categorySim(a, b) {
  if (!a || !b) return 0;
  const na = a.toLowerCase().trim();
  const nb = b.toLowerCase().trim();
  if (na === nb) return 1.0;
  const wa = new Set(na.split(/\W+/).filter(Boolean));
  const wb = new Set(nb.split(/\W+/).filter(Boolean));
  const shared = [...wa].filter(w => wb.has(w)).length;
  const total  = new Set([...wa, ...wb]).size;
  return total > 0 ? shared / total : 0;
}

// ── Find reusable assets for an upcoming generation ───────────────────────

function findReusableAssets(contentMap, currentSessionId, requestedCount = 6) {
  const category = (contentMap?.productCategory || '').toLowerCase().trim();
  if (!category) return [];

  let entries;
  try { entries = cleanStale(readIndex()); }
  catch { return []; }

  const scored = entries
    .filter(e => REUSABLE_ROLES.has(e.role))
    .filter(e => !NEVER_REUSE.has(e.role))
    .filter(e => (e.confidence || 0) >= 0.6)
    .filter(e => e.sessionId !== currentSessionId)
    .map(e => ({ ...e, _sim: categorySim(e.productCategory, category) }))
    .filter(e => e._sim >= 0.3)
    .sort((a, b) => (b._sim * b.confidence) - (a._sim * a.confidence))
    .slice(0, requestedCount);

  if (scored.length > 0) {
    console.log(`[AssetReuse] Found ${scored.length} reusable assets from previous sessions for category "${category}"`);
    scored.forEach(e =>
      console.log(`[AssetReuse] Reusing: ${path.basename(e.localUrl)} from session ${e.sessionId} for category ${e.productCategory}`)
    );
  }

  return scored.map(e => ({
    url:               e.localUrl,
    originalUrl:       e.originalUrl || '',
    role:              e.role,
    confidence:        e.confidence,
    description:       e.description || '',
    isWide:            e.isWide            || false,
    hasDarkBackground: e.hasDarkBackground || false,
    isTransparent:     e.isTransparent     || false,
    sectionFit:        e.sectionFit        || {},
    source:            'asset-reuse',
    _reused:           true
  }));
}

module.exports = { appendAnalyzedImages, findReusableAssets };
