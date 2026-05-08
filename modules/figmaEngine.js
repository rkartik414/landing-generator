// modules/figmaEngine.js
require('dotenv').config();
const FIGMA_PROVIDER = process.env.FIGMA_PROVIDER || 'placeholder';
const axios = require('axios');
const fs = require('fs');
const path = require('path');

const FIGMA_BASE = 'https://api.figma.com/v1';
const CACHE_PATH = path.join(__dirname, '../training-data/figma-cache.json');

// ─── Low-level fetch ──────────────────────────────────────────────────────────
async function figmaGet(endpoint) {
  const res = await axios.get(`${FIGMA_BASE}${endpoint}`, {
    headers: { 'X-Figma-Token': process.env.FIGMA_TOKEN },
    timeout: 15000
  });
  return res.data;
}

// ─── Extract real design tokens from a node ───────────────────────────────────
function extractTokens(node, tokens = { colors: [], fonts: [], spacing: [], radii: [] }) {
  // Colors from fills
  if (node.fills) {
    node.fills.forEach(f => {
      if (f.type === 'SOLID' && f.color) {
        const r = Math.round(f.color.r * 255).toString(16).padStart(2, '0');
        const g = Math.round(f.color.g * 255).toString(16).padStart(2, '0');
        const b = Math.round(f.color.b * 255).toString(16).padStart(2, '0');
        tokens.colors.push(`#${r}${g}${b}`);
      }
    });
  }

  // Typography
  if (node.style) {
    if (node.style.fontFamily) {
      tokens.fonts.push({
        family: node.style.fontFamily,
        weight: node.style.fontWeight,
        size: node.style.fontSize
      });
    }
  }

  // Spacing / padding
  if (node.paddingLeft !== undefined) tokens.spacing.push(node.paddingLeft);
  if (node.paddingTop  !== undefined) tokens.spacing.push(node.paddingTop);

  // Border radius
  if (node.cornerRadius) tokens.radii.push(node.cornerRadius);

  // Walk children
  if (node.children) {
    node.children.forEach(child => extractTokens(child, tokens));
  }

  return tokens;
}

// ─── Get all pages from the memory file ───────────────────────────────────────
async function getMemoryFilePages() {
  const fileId = process.env.FIGMA_FILE_ID;
  if (!fileId || fileId === 'the_id_from_your_figma_file_url') {
    console.warn('[figmaEngine] No FIGMA_FILE_ID set — skipping Figma context');
    return null;
  }
  const data = await figmaGet(`/files/${fileId}`);
  return data.document.children; // array of pages
}

// ─── Get tokens for a specific product type ───────────────────────────────────
// Reads the page matching productType from your LP-Design-Memory file
async function getTokensForType(productType) {

  // Return cached if fresh (cache for 30 mins)
  if (fs.existsSync(CACHE_PATH)) {
    const cache = JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'));
    const age = Date.now() - (cache.timestamp || 0);
    if (age < 30 * 60 * 1000 && cache[productType]) {
      console.log('[figmaEngine] Using cached tokens for:', productType);
      return cache[productType];
    }
  }

  try {
    const pages = await getMemoryFilePages();
    if (!pages) return getDefaultTokens(productType);

    // Find page matching product type
    // e.g. productType = 'enterprise' matches page named 'Enterprise'
    const matchingPage = pages.find(p =>
      p.name.toLowerCase().includes(productType.toLowerCase())
    ) || pages[0]; // fallback to first page

    console.log(`[figmaEngine] Reading page: "${matchingPage.name}" for type: ${productType}`);

    // Extract tokens from all frames on this page
    const rawTokens = { colors: [], fonts: [], spacing: [], radii: [] };
    matchingPage.children?.forEach(frame => {
      extractTokens(frame, rawTokens);
    });

    // Deduplicate and clean
    const tokens = {
      productType,
      pageName: matchingPage.name,
      frameCount: matchingPage.children?.length || 0,
      frameNames: matchingPage.children?.map(f => f.name) || [],
      colors: [...new Set(rawTokens.colors)].slice(0, 10),
      fonts: dedupeByKey(rawTokens.fonts, 'family').slice(0, 4),
      spacing: [...new Set(rawTokens.spacing)].filter(Boolean).sort((a, b) => a - b).slice(0, 8),
      borderRadii: [...new Set(rawTokens.radii)].slice(0, 4)
    };

    // Save to cache
    const existing = fs.existsSync(CACHE_PATH)
      ? JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8'))
      : {};
    existing[productType] = tokens;
    existing.timestamp = Date.now();
    fs.writeFileSync(CACHE_PATH, JSON.stringify(existing, null, 2));

    console.log(`[figmaEngine] Tokens extracted — ${tokens.colors.length} colors, ${tokens.fonts.length} fonts`);
    return tokens;

  } catch (e) {
    console.warn('[figmaEngine] Failed to fetch Figma tokens:', e.message);
    return getDefaultTokens(productType);
  }
}

// ─── Get all frame names across all pages (for overview) ─────────────────────
async function getAllFrameNames() {
  try {
    const pages = await getMemoryFilePages();
    if (!pages) return {};
    const result = {};
    pages.forEach(page => {
      result[page.name] = page.children?.map(f => f.name) || [];
    });
    return result;
  } catch (e) {
    console.warn('[figmaEngine] Could not list frames:', e.message);
    return {};
  }
}

// ─── Fallback tokens when Figma is not connected ──────────────────────────────
function getDefaultTokens(productType) {
  const defaults = {
    enterprise: {
      colors: ['#0A0A0A', '#1A1A2E', '#16213E', '#0F3460', '#E94560', '#FFFFFF', '#F5F5F5'],
      fonts: [{ family: 'Inter', weight: 700 }, { family: 'Inter', weight: 400 }],
      spacing: [16, 24, 32, 48, 64, 80],
      borderRadii: [4, 8]
    },
    startup: {
      colors: ['#6C63FF', '#FF6584', '#43E97B', '#FFFFFF', '#F8F9FA', '#212529'],
      fonts: [{ family: 'Poppins', weight: 700 }, { family: 'Inter', weight: 400 }],
      spacing: [16, 24, 40, 64, 96],
      borderRadii: [8, 16, 24]
    },
    ecommerce: {
      colors: ['#FF6B00', '#FFF3E0', '#212121', '#FFFFFF', '#F5F5F5', '#4CAF50'],
      fonts: [{ family: 'Montserrat', weight: 700 }, { family: 'Open Sans', weight: 400 }],
      spacing: [12, 16, 24, 32, 48],
      borderRadii: [4, 8]
    },
    service: {
      colors: ['#2D3748', '#4A5568', '#ED8936', '#FFFFFF', '#F7FAFC'],
      fonts: [{ family: 'Raleway', weight: 700 }, { family: 'Source Sans Pro', weight: 400 }],
      spacing: [16, 24, 40, 64, 80],
      borderRadii: [6, 12]
    },
    healthcare: {
      colors: ['#0077B6', '#00B4D8', '#90E0EF', '#FFFFFF', '#F8FFFE', '#2D6A4F'],
      fonts: [{ family: 'Nunito', weight: 700 }, { family: 'Nunito', weight: 400 }],
      spacing: [16, 24, 32, 48, 64],
      borderRadii: [8, 16]
    },
    'real-estate': {
      colors: ['#1A1A1A', '#C9A96E', '#FFFFFF', '#F5F0EB', '#2C3E50'],
      fonts: [{ family: 'Playfair Display', weight: 700 }, { family: 'Lato', weight: 400 }],
      spacing: [16, 24, 40, 60, 80],
      borderRadii: [2, 4]
    }
  };
  return { productType, source: 'default', ...defaults[productType] || defaults.enterprise };
}

function rgbToHex(r, g, b) {
  const toHex = v => Math.round(v * 255).toString(16).padStart(2, '0');
  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function dedupeByKey(arr, key) {
  const seen = new Set();
  return arr.filter(item => {
    if (seen.has(item[key])) return false;
    seen.add(item[key]);
    return true;
  });
}

// ─── Design session / adapter helpers ────────────────────────────────────────
function createDesignSessionShell(input = {}) {
  return {
    sessionId:        input.sessionId || null,
    productName:      input.productName || '',
    pageType:         input.pageType || 'single',
    tokenProfileHint: input.tokenProfileHint || '',
    figma: {
      fileId:     null,
      fileName:   input.fileName || '',
      fileUrl:    null,
      pages:      [],
      frames:     [],
      nodes:      {},
      syncStatus: 'not-started',
      lastSyncAt: null
    }
  };
}

function buildFigmaContextFromPlan(figmaBuildPlan = {}) {
  const pages = Array.isArray(figmaBuildPlan.pages) ? figmaBuildPlan.pages : [];
  return {
    fileName:          figmaBuildPlan.fileName || '',
    pageType:          figmaBuildPlan.pageType || 'single-product',
    designSystemMode:  figmaBuildPlan.designSystemMode || 'design-system-first',
    tokenProfileHint:  figmaBuildPlan.tokenProfileHint || '',
    pages: pages.map((page) => ({
      name:           page?.name || '',
      frameName:      page?.frame?.name || '',
      width:          page?.frame?.width || null,
      heightHint:     page?.frame?.heightHint || null,
      grid:           page?.frame?.grid || '',
      sectionSpacing: page?.frame?.sectionSpacing || null,
      sectionCount:   Array.isArray(page?.sections) ? page.sections.length : 0,
      sections: Array.isArray(page?.sections)
        ? page.sections.map((section) => ({
            id:                section?.id || '',
            type:              section?.type || '',
            frameName:         section?.frameName || '',
            componentStrategy: section?.componentStrategy || '',
            layoutMode:        section?.layoutMode || '',
            variantHint:       section?.variantHint || '',
            priority:          section?.priority || 'medium'
          }))
        : []
    }))
  };
}

function normalizeFigmaFileName(rawName = '') {
  const cleaned = String(rawName || '')
    .replace(/\.figjam$/i, '')
    .replace(/\.fig$/i, '')
    .replace(/[^a-z0-9\-_\s]/gi, '')
    .trim()
    .replace(/\s+/g, '-')
    .toLowerCase();
  return cleaned || 'landing-page-design';
}

function normalizeFigmaBuildPlan(figmaBuildPlan = {}) {
  const rawPages = Array.isArray(figmaBuildPlan.pages) ? figmaBuildPlan.pages : [];

  const pages = rawPages.map((page, index) => {
    const safeSections = Array.isArray(page?.sections) ? page.sections : [];
    const safeFrame    = page?.frame || {};
    return {
      name: page?.name || (index === 0 ? 'Desktop' : index === 1 ? 'Mobile' : `Page ${index + 1}`),
      frame: {
        name:           safeFrame.name || `${page?.name || 'Page'} Frame`,
        width:          safeFrame.width || (index === 0 ? 1440 : 390),
        heightHint:     safeFrame.heightHint || (index === 0 ? 5200 : 7000),
        grid:           safeFrame.grid || (index === 0 ? '12-col' : '4-col'),
        sectionSpacing: safeFrame.sectionSpacing || (index === 0 ? 96 : 64)
      },
      sections: safeSections.map((section, sectionIndex) => ({
        id:                section?.id || `section_${sectionIndex + 1}`,
        type:              section?.type || 'content-section',
        frameName:         section?.frameName || `${section?.type || 'Section'} ${sectionIndex + 1}`,
        componentStrategy: section?.componentStrategy || 'compose-from-design-system',
        layoutMode:        section?.layoutMode || 'stacked',
        variantHint:       section?.variantHint || '',
        contentSource:     section?.contentSource || '',
        priority:          section?.priority || 'medium',
        notes:             section?.notes || '',
        needs: {
          headline:      !!section?.needs?.headline,
          subheadline:   !!section?.needs?.subheadline,
          primaryCta:    !!section?.needs?.primaryCta,
          secondaryCta:  !!section?.needs?.secondaryCta,
          media:         !!section?.needs?.media,
          logos:         !!section?.needs?.logos,
          features:      !!section?.needs?.features,
          pricing:       !!section?.needs?.pricing,
          testimonials:  !!section?.needs?.testimonials,
          form:          !!section?.needs?.form
        }
      }))
    };
  });

  const desktopPage          = pages.find(p => String(p.name).toLowerCase() === 'desktop') || pages[0] || null;
  const mobilePage           = pages.find(p => String(p.name).toLowerCase() === 'mobile')  || pages[1] || null;
  const derivedDesktopCount  = desktopPage?.sections?.length || 0;
  const derivedMobileCount   = mobilePage?.sections?.length  || 0;
  const sharedComponentFamilies = [...new Set(
    pages.flatMap(page =>
      (page.sections || []).map(s => s.componentStrategy).filter(Boolean)
    )
  )];

  return {
    ...figmaBuildPlan,
    fileName:          normalizeFigmaFileName(figmaBuildPlan?.fileName || ''),
    pageType:          figmaBuildPlan?.pageType || 'single-product',
    designSystemMode:  figmaBuildPlan?.designSystemMode || 'design-system-first',
    tokenProfileHint:  figmaBuildPlan?.tokenProfileHint || '',
    pages,
    buildSummary: {
      desktopSectionCount:      derivedDesktopCount,
      mobileSectionCount:       derivedMobileCount,
      sharedComponentFamilies,
      figmaExecutionNotes: Array.isArray(figmaBuildPlan?.buildSummary?.figmaExecutionNotes)
        ? figmaBuildPlan.buildSummary.figmaExecutionNotes
        : []
    }
  };
}

// ── Single saveFigmaPlanSnapshot (removed duplicate) ─────────────────────────
function saveFigmaPlanSnapshot(session, figmaBuildPlan = {}) {
  const shell = session?.figma || {};
  const ctx   = buildFigmaContextFromPlan(figmaBuildPlan);
  return {
    ...shell,
    fileName:   ctx.fileName || shell.fileName || '',
    pages: ctx.pages.map(p => ({
      name:           p.name,
      frameName:      p.frameName,
      width:          p.width,
      heightHint:     p.heightHint,
      grid:           p.grid,
      sectionSpacing: p.sectionSpacing,
      sectionCount:   p.sectionCount
    })),
    syncStatus: shell.syncStatus || 'planned',
    lastSyncAt: shell.lastSyncAt || null
  };
}

function getFigmaExecutionSummary(figma = {}) {
  return {
    fileId:     figma?.fileId || null,
    fileName:   figma?.fileName || '',
    fileUrl:    figma?.fileUrl || null,
    syncStatus: figma?.syncStatus || 'not-started',
    pageCount:  Array.isArray(figma?.pages)  ? figma.pages.length  : 0,
    frameCount: Array.isArray(figma?.frames) ? figma.frames.length : 0
  };
}

function createPlaceholderFigmaFile(session = {}, figmaBuildPlan = {}) {
  const normalizedName = normalizeFigmaFileName(
    figmaBuildPlan?.fileName || session?.figma?.fileName || session?.productName || 'landing-page-design'
  );
  const fileId  = session?.figma?.fileId || `figma_file_${session.sessionId}`;
  const fileUrl = `https://www.figma.com/file/${fileId}`;
  const pages   = Array.isArray(figmaBuildPlan?.pages)
    ? figmaBuildPlan.pages.map((page, idx) => ({
        pageId:       `page_${idx + 1}`,
        name:         page?.name || `Page ${idx + 1}`,
        frameName:    page?.frame?.name || '',
        width:        page?.frame?.width || null,
        heightHint:   page?.frame?.heightHint || null,
        grid:         page?.frame?.grid || '',
        sectionCount: Array.isArray(page?.sections) ? page.sections.length : 0
      }))
    : [];
  return {
    fileId,
    fileName:   normalizedName,
    fileUrl,
    syncStatus: 'file-created',
    lastSyncAt: new Date().toISOString(),
    pages
  };
}

function prepareSectionExecutionPlan(targetPage = {}) {
  const sections  = Array.isArray(targetPage?.sections) ? targetPage.sections : [];
  const pageName  = targetPage?.name || 'Unknown';
  const frameName = targetPage?.frame?.name || '';
  const builtSections = sections.map((section, idx) => ({
    nodeId:            `node_${pageName.toLowerCase()}_${idx + 1}`,
    id:                section?.id || '',
    type:              section?.type || '',
    frameName:         section?.frameName || '',
    componentStrategy: section?.componentStrategy || '',
    layoutMode:        section?.layoutMode || '',
    variantHint:       section?.variantHint || '',
    priority:          section?.priority || 'medium',
    contentSource:     section?.contentSource || '',
    notes:             section?.notes || ''
  }));
  return { pageName, frameName, builtSectionCount: builtSections.length, builtSections };
}

function executeFigmaFileCreation(session, figmaBuildPlan) {
  if (FIGMA_PROVIDER === 'placeholder') return createPlaceholderFigmaFile(session, figmaBuildPlan);
  throw new Error(`FIGMA_PROVIDER "${FIGMA_PROVIDER}" not implemented`);
}

function executeSectionBuild(targetPage) {
  if (FIGMA_PROVIDER === 'placeholder') return prepareSectionExecutionPlan(targetPage);
  throw new Error(`FIGMA_PROVIDER "${FIGMA_PROVIDER}" not implemented`);
}

function buildFigmaAdapterResult(session = {}, figmaBuildPlan = {}) {
  const placeholderFile = executeFigmaFileCreation(session, figmaBuildPlan);
  return {
    adapter:        'figma-placeholder-adapter',
    sessionId:      session?.sessionId || null,
    file:           placeholderFile,
    executionMode:  'placeholder',
    readyForRealFigma: true
  };
}

// ─── Extract real design tokens from Figma file ───────────────────────────────
async function extractDesignTokensFromFile(productType) {
  try {
    const fileId = process.env.FIGMA_FILE_ID;
    if (!fileId) return getDefaultTokens(productType);

    const fileData    = await figmaGet(`/files/${fileId}`);
    const pages       = fileData.document.children;
    console.log('[figmaEngine] Pages:', pages.map(p => p.name));

    const lc          = (productType || '').toLowerCase();
    const matchedPage = pages.find(p => p.name.toLowerCase().includes(lc)) || pages[0];
    console.log('[figmaEngine] Using page:', matchedPage.name);

    const rawTokens = { colors: [], fonts: [], spacing: [], radii: [] };
    (matchedPage.children || []).forEach(frame => extractTokens(frame, rawTokens));

    let semantic = {};
    try {
      const varData = await figmaGet(`/files/${fileId}/variables/local`);
      const vars    = varData.meta?.variables || {};
      Object.values(vars).forEach(v => {
        const mode  = Object.keys(v.valuesByMode || {})[0];
        const value = v.valuesByMode?.[mode];
        const name  = (v.name || '').toLowerCase();
        if (v.resolvedType === 'COLOR' && value?.r !== undefined) {
          const hex = rgbToHex(value.r, value.g, value.b);
          rawTokens.colors.push(hex);
          if (name.includes('primary') || name.includes('brand'))      semantic.primary  = hex;
          if (name.includes('accent')  || name.includes('cta'))        semantic.accent   = hex;
          if (name.includes('bg')      || name.includes('background')) semantic.bodyBg   = hex;
          if (name.includes('text')    || name.includes('foreground')) semantic.textDark = hex;
        }
        if (v.resolvedType === 'STRING' && name.includes('font')) semantic.headingFont = value;
      });
    } catch(e) {
      console.warn('[figmaEngine] Variables API failed:', e.message);
    }

    const uniqueColors = [...new Set(rawTokens.colors)].slice(0, 12);
    const uniqueFonts  = dedupeByKey(rawTokens.fonts, 'family').slice(0, 3);

    const tokens = {
      productType,
      source:      'figma-file',
      pageName:    matchedPage.name,
      frameCount:  matchedPage.children?.length || 0,
      frameNames:  matchedPage.children?.map(f => f.name) || [],
      colors:      uniqueColors,
      fonts:       uniqueFonts,
      spacing:     [...new Set(rawTokens.spacing)].sort((a,b) => a-b).slice(0, 8),
      borderRadii: [...new Set(rawTokens.radii)].slice(0, 4),
      semantic: {
        primary:     semantic.primary     || uniqueColors[0] || null,
        accent:      semantic.accent      || uniqueColors[1] || null,
        bodyBg:      semantic.bodyBg      || '#ffffff',
        textDark:    semantic.textDark    || '#111111',
        headingFont: semantic.headingFont || uniqueFonts[0]?.family || 'Inter',
        bodyFont:    uniqueFonts[1]?.family || 'Inter'
      }
    };

    console.log('[figmaEngine] Tokens extracted:', {
      source:   tokens.source,
      page:     tokens.pageName,
      colors:   tokens.colors.length,
      semantic: tokens.semantic
    });

    const existing    = fs.existsSync(CACHE_PATH)
      ? JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8')) : {};
    existing[productType] = tokens;
    existing.timestamp    = Date.now();
    fs.writeFileSync(CACHE_PATH, JSON.stringify(existing, null, 2));

    return tokens;

  } catch(e) {
    console.warn('[figmaEngine] Token extraction failed:', e.message);
    return getDefaultTokens(productType);
  }
}

// ─── SINGLE module.exports ────────────────────────────────────────────────────
module.exports = {
  getTokensForType,
  getAllFrameNames,
  extractDesignTokensFromFile,
  createDesignSessionShell,
  buildFigmaContextFromPlan,
  saveFigmaPlanSnapshot,
  getFigmaExecutionSummary,
  normalizeFigmaFileName,
  normalizeFigmaBuildPlan,
  createPlaceholderFigmaFile,
  prepareSectionExecutionPlan,
  buildFigmaAdapterResult,
};