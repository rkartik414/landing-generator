const fs     = require('fs');
const path   = require('path');
const axios  = require('axios');
const crypto = require('crypto');

const ALLOWED_VIDEO_EXTENSIONS = new Set(['.mp4', '.webm', '.mov']);

function ensureDir(dirPath) {
  if (!fs.existsSync(dirPath)) fs.mkdirSync(dirPath, { recursive: true });
}

function getAssetOutputDir(sessionId) {
  return path.join(__dirname, '../output/generated-assets', sessionId);
}

function getPublicAssetBase(sessionId) {
  return `/output/generated-assets/${sessionId}`;
}

function safeExtFromUrl(url, fallback = '.png') {
  try {
    const pathname = new URL(url).pathname || '';
    const ext = path.extname(pathname).toLowerCase();
    return ext || fallback;
  } catch {
    return fallback;
  }
}

function guessTypeFromExt(ext) {
  if (ALLOWED_VIDEO_EXTENSIONS.has(ext)) return 'video';
  return 'image';
}

function makeFilename(url, index) {
  const ext  = safeExtFromUrl(url, '.png');
  const hash = crypto.createHash('md5').update(url).digest('hex').slice(0, 10);
  return `${String(index).padStart(2, '0')}-${hash}${ext}`;
}

async function downloadFile(url, outputPath) {
  const response = await axios.get(url, {
    responseType: 'arraybuffer',
    timeout: 8000,
    headers: { 'User-Agent': 'Mozilla/5.0', 'Referer': url },
    maxRedirects: 5,
    validateStatus: s => s >= 200 && s < 400
  });
  fs.writeFileSync(outputPath, response.data);
  return outputPath;
}

function collectUrlsFromAssetRules(assetRules = {}) {
  const found = new Set();
  const addUrl = value => {
    if (!value) return;
    if (typeof value === 'string' && /^https?:\/\//i.test(value)) found.add(value);
    else if (Array.isArray(value)) value.forEach(addUrl);
    else if (typeof value === 'object') Object.values(value).forEach(addUrl);
  };
  addUrl(assetRules);
  return Array.from(found);
}

function collectUrlsFromMediaPlan(mediaPlan = {}) {
  const found = new Set();
  const walk = node => {
    if (!node) return;
    if (typeof node === 'string' && /^https?:\/\//i.test(node)) { found.add(node); return; }
    if (Array.isArray(node)) { node.forEach(walk); return; }
    if (typeof node === 'object') Object.values(node).forEach(walk);
  };
  walk(mediaPlan);
  return Array.from(found);
}

function replaceUrlsDeep(node, urlMap) {
  if (!node) return node;
  if (typeof node === 'string') return urlMap[node] || node;
  if (Array.isArray(node)) return node.map(item => replaceUrlsDeep(item, urlMap));
  if (typeof node === 'object') {
    const out = {};
    for (const [key, value] of Object.entries(node)) out[key] = replaceUrlsDeep(value, urlMap);
    return out;
  }
  return node;
}

function optimizeImage(imagePath) {
    // Use 'sharp' to resize/compress images
    const sharp = require('sharp');
    sharp(imagePath)
        .resize(1200, 800)  // Example: Resize to a standard size
        .jpeg({ quality: 80 }) // Compress to reduce size
        .toFile(`optimized/${path.basename(imagePath)}`, (err, info) => {
            if (err) console.error("Image optimization failed:", err);
        });
}

async function localizeAssets({ sessionId, mediaPlan = {}, assetRules = {}, extraUrls = [] }) {
  if (!sessionId) throw new Error('sessionId is required for asset localization');

  const outputDir  = getAssetOutputDir(sessionId);
  const publicBase = getPublicAssetBase(sessionId);
  ensureDir(outputDir);

  const urls = Array.from(new Set([
    ...collectUrlsFromMediaPlan(mediaPlan),
    ...collectUrlsFromAssetRules(assetRules),
    ...(Array.isArray(extraUrls) ? extraUrls.filter(Boolean) : [])
  ]));

  const urlMap     = {};
  const downloaded = [];
  const failed     = [];
  const BATCH_SIZE = 5;

  for (let i = 0; i < urls.length; i += BATCH_SIZE) {
    const batch = urls.slice(i, i + BATCH_SIZE);

    await Promise.all(batch.map(async url => {
      try {
        const ext      = safeExtFromUrl(url, '.png');
        const filename = makeFilename(url, urls.indexOf(url) + 1);
        const absPath  = path.join(outputDir, filename);

        await downloadFile(url, absPath);

        // Convert AVIF → JPEG — GPT Vision doesn't support AVIF
        let finalPath     = absPath;
        let finalFilename = filename;
        if (ext === '.avif') {
          try {
            const sharp        = require('sharp');
            const jpegFilename = filename.replace('.avif', '.jpg');
            const jpegPath     = path.join(outputDir, jpegFilename);
            await sharp(absPath).jpeg({ quality: 85 }).toFile(jpegPath);
            fs.unlinkSync(absPath);
            finalPath     = jpegPath;
            finalFilename = jpegFilename;
          } catch(e) {
            console.warn('[avif→jpg] Conversion failed:', e.message);
          }
        }

        urlMap[url] = `${publicBase}/${finalFilename}`;
        downloaded.push({
          originalUrl: url,
          localUrl:    urlMap[url],
          ext:         finalPath.endsWith('.jpg') ? '.jpg' : ext,
          type:        guessTypeFromExt(ext)
        });

      } catch(err) {
        failed.push({ originalUrl: url, error: err.message });
      }
    })); // ← closes Promise.all + batch.map
  } // ← closes for loop

  return {
    localizedMediaPlan:  replaceUrlsDeep(mediaPlan,    urlMap),
    localizedAssetRules: replaceUrlsDeep(assetRules,   urlMap),
    urlMap,
    downloaded,
    failed,
    outputDir,
    publicBase
  };
} // ← closes localizeAssets function

module.exports = { localizeAssets };