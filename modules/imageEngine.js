// modules/imageEngine.js
// Scrapes brand + competitor pages for images and videos.
// Primary: fast axios+cheerio scrape
// Fallback: Puppeteer (real Chrome) for JS-rendered pages like Freepik, ByteDance, etc.
// Also supports: ScraperAPI as a cloud-based JS rendering alternative
// v2 — Added: GIF detection, script-tag video scan, data-attr scan,
//             QR/junk penalties, smart product relevance filter

require('dotenv').config();
const axios   = require('axios');
const cheerio = require('cheerio');
const path    = require('path');
const fs      = require('fs');

// ───────────────────────────────────────────────────────────────
// Helpers
// ───────────────────────────────────────────────────────────────
function safeArray(v) {
  return Array.isArray(v) ? v : (v ? [v] : []);
}

function normalizeText(v) {
  return String(v || '').toLowerCase().replace(/\s+/g, ' ').trim();
}

function cleanUrl(url) {
  return String(url || '').split('#')[0].trim();
}

function detectImageFormat(url) {
  const u = cleanUrl(url).split('?')[0].toLowerCase();
  if (u.endsWith('.svg'))  return 'svg';
  if (u.endsWith('.png'))  return 'png';
  if (u.endsWith('.jpg') || u.endsWith('.jpeg')) return 'jpeg';
  if (u.endsWith('.webp')) return 'webp';
  if (u.endsWith('.gif'))  return 'gif';
  return 'unknown';
}

function detectVideoFormat(url) {
  const u = cleanUrl(url).split('?')[0].toLowerCase();
  if (u.endsWith('.mp4'))  return 'mp4';
  if (u.endsWith('.webm')) return 'webm';
  if (u.endsWith('.mov'))  return 'mov';
  if (u.includes('youtube.com') || u.includes('youtu.be')) return 'youtube';
  if (u.includes('vimeo.com')) return 'vimeo';
  return 'unknown';
}

function absoluteUrl(raw, baseUrl) {
  if (!raw) return null;
  try {
    if (raw.startsWith('data:')) return null;
    return new URL(raw, baseUrl).href;
  } catch(e) { return null; }
}

function extractDomain(url) {
  try { return new URL(url).hostname.replace(/^www\./, ''); }
  catch(e) { return ''; }
}

function uniqueByUrl(items) {
  const seen = new Set();
  return (items || []).filter(item => {
    if (!item || !item.url) return false;
    const key = cleanUrl(item.url);
    if (seen.has(key)) return false;
    seen.add(key);
    return true;
  });
}

function pickLargestSrcFromSrcset(srcset, baseUrl) {
  if (!srcset) return null;
  const candidates = srcset
    .split(',')
    .map(part => part.trim().split(/\s+/)[0])
    .filter(Boolean)
    .map(u => absoluteUrl(u, baseUrl))
    .filter(Boolean);
  return candidates[candidates.length - 1] || null;
}

function guessImageRole(asset) {
  const alt    = normalizeText(asset.alt || '');
  const url    = normalizeText(asset.url || '');
  const format = asset.format || detectImageFormat(asset.url || '');

  if (format === 'gif') return 'feature-illustration';

  if (format === 'svg' || alt.includes('logo') || url.includes('logo') ||
      alt.includes('icon') || url.includes('icon') || alt.includes('badge') || url.includes('badge'))
    return 'logo-or-icon';

  if (alt.includes('dashboard') || alt.includes('interface') || alt.includes('screen') ||
      alt.includes('screenshot') || alt.includes('platform') || alt.includes('console') ||
      format === 'png')
    return 'ui';

  if (alt.includes('hero') || alt.includes('banner') || alt.includes('cover') ||
      format === 'jpeg' || format === 'webp')
    return 'hero-or-photo';

  return 'generic';
}

function guessVideoRole(asset) {
  const title = normalizeText(asset.title || '');
  const url   = normalizeText(asset.url   || '');
  if (title.includes('demo') || title.includes('walkthrough') || url.includes('demo')) return 'product-demo';
  if (title.includes('hero') || title.includes('overview') || title.includes('launch'))  return 'hero-video';
  return 'brand-video';
}

function buildKeywordSet({ productName, keywords, brandName }) {
  return safeArray([brandName, productName, ...safeArray(keywords)])
    .map(normalizeText)
    .filter(Boolean);
}

// ───────────────────────────────────────────────────────────────
// JUNK URL DETECTION
// ───────────────────────────────────────────────────────────────
const JUNK_URL_PATTERNS = [
  'qr_code', 'qr-code', 'qrcode',
  'favicon', 'favicon.ico',
  'sprite', 'spritesheet',
  'icon-font', 'iconfont',
  'placeholder', 'blank.gif', 'blank.png',
  '1x1', 'pixel.gif', 'tracking',
  'analytics', 'beacon',
  'captcha', 'recaptcha',
  'avatar/default', 'user-placeholder',
  'loading.gif', 'spinner',
  'ad.doubleclick', 'googletagmanager',
  'cookie-consent', 'gdpr',
  '.ico',
];

function isJunkUrl(url) {
  const u = normalizeText(url || '');
  return JUNK_URL_PATTERNS.some(pattern => u.includes(pattern));
}

// ───────────────────────────────────────────────────────────────
// PRODUCT RELEVANCE FILTER
// ───────────────────────────────────────────────────────────────
const CATEGORY_VISUAL_KEYWORDS = {
  'ai':            ['ai', 'neural', 'generate', 'model', 'image', 'video', 'prompt', 'diffusion', 'output', 'generated', 'creative', 'canvas'],
  'video':         ['video', 'frame', 'clip', 'render', 'timeline', 'animation', 'motion', 'scene', 'reel'],
  'image':         ['image', 'photo', 'picture', 'visual', 'artwork', 'illustration', 'design', 'canvas', 'resolution'],
  'cybersecurity': ['security', 'shield', 'firewall', 'threat', 'protection', 'network', 'compliance', 'lock', 'encrypt'],
  'crm':           ['crm', 'customer', 'pipeline', 'contact', 'deal', 'sales', 'lead', 'dashboard'],
  'hr':            ['hr', 'employee', 'payroll', 'attendance', 'leave', 'recruitment', 'team', 'onboard'],
  'lms':           ['course', 'learning', 'student', 'lesson', 'quiz', 'training', 'certificate', 'classroom'],
  'ecommerce':     ['product', 'cart', 'order', 'shop', 'inventory', 'catalog', 'checkout', 'store'],
  'analytics':     ['chart', 'graph', 'dashboard', 'metric', 'report', 'data', 'insight', 'trend'],
  'devtools':      ['code', 'terminal', 'api', 'deploy', 'pipeline', 'repository', 'debug', 'monitor'],
  'healthcare':    ['health', 'patient', 'doctor', 'medical', 'clinic', 'prescription', 'record', 'appointment'],
  'finance':       ['finance', 'invoice', 'payment', 'transaction', 'budget', 'accounting', 'tax', 'bank'],
  'productivity':  ['task', 'project', 'calendar', 'workflow', 'collaborate', 'note', 'board', 'schedule'],
  'marketing':     ['campaign', 'email', 'social', 'ad', 'audience', 'conversion', 'funnel', 'landing'],
};

const UI_SIGNALS = [
  'dashboard', 'interface', 'screenshot', 'screen', 'app', 'platform',
  'console', 'panel', 'monitor', 'software', 'saas', 'tool', 'feature',
  'window', 'modal', 'sidebar', 'navbar', 'card', 'widget'
];

const IRRELEVANT_SIGNALS = [
  'stock photo', 'getty', 'shutterstock', 'istock', 'depositphotos',
  'random person', 'handshake', 'meeting room', 'coffee cup', 'laptop on desk',
  'smiling person', 'team photo', 'office background', 'abstract texture',
  'wallpaper', 'background pattern', 'decorative', 'filler'
];

function scoreProductRelevance(asset, context) {
  const { productName = '', productCategory = '', keywords = [] } = context || {};

  const url      = normalizeText(asset.url || '');
  const alt      = normalizeText(asset.alt || '');
  const combined = `${url} ${alt}`;
  const fmt      = asset.format || detectImageFormat(asset.url || '');

  let score = 0;

  // Hard disqualifiers
  if (isJunkUrl(asset.url)) return -999;
  if (fmt === 'svg' && (url.includes('icon') || url.includes('logo'))) return 5;

  // Product name match
  const productWords = normalizeText(productName).split(' ').filter(w => w.length > 2);
  productWords.forEach(word => {
    if (url.includes(word)) score += 25;
    if (alt.includes(word)) score += 20;
  });

  // Keyword match
  const allKeywords = [
    ...safeArray(keywords).map(normalizeText),
    normalizeText(productCategory)
  ].filter(Boolean);
  allKeywords.forEach(kw => {
    if (combined.includes(kw)) score += 15;
  });

  // Category visual keyword match
  const catKey = normalizeText(productCategory || '');
  let categoryMatched = false;
  for (const [cat, terms] of Object.entries(CATEGORY_VISUAL_KEYWORDS)) {
    if (catKey.includes(cat) || terms.some(t => catKey.includes(t))) {
      terms.forEach(term => {
        if (combined.includes(term)) {
          score += 18;
          categoryMatched = true;
        }
      });
      break;
    }
  }
  if (!categoryMatched) {
    for (const terms of Object.values(CATEGORY_VISUAL_KEYWORDS)) {
      terms.forEach(term => {
        if (combined.includes(term)) score += 8;
      });
    }
  }

  // UI screenshot signals
  UI_SIGNALS.forEach(signal => {
    if (combined.includes(signal)) score += 12;
  });

  // Handle extensionless CDN URLs (e.g. ByteDance hash URLs like abc123~tplv-xxx)
  const hasNoExtension = fmt === 'unknown' && !url.includes('.');
  const isCdnHash      = /^[a-f0-9]{20,}[~\-]/i.test(url.split('/').pop() || '');
  if (hasNoExtension || isCdnHash) {
    score += 5; // neutral — let GPT Vision decide later
  }

  // Format bonuses
  if (fmt === 'png')                   score += 10;
  if (fmt === 'gif')                   score += 15;
  if (fmt === 'webp')                  score += 8;
  if (fmt === 'jpeg' || fmt === 'jpg') score += 5;

  // Role bonuses
  if (asset.role === 'ui')                   score += 20;
  if (asset.role === 'feature-illustration') score += 15;
  if (asset.role === 'hero-or-photo')        score += 10;
  if (asset.role === 'logo-or-icon')         score += 5;

  // Irrelevant image penalties
  IRRELEVANT_SIGNALS.forEach(signal => {
    if (combined.includes(signal)) score -= 25;
  });

  // Domain penalty for truly external images
  const brandDomain      = context?.brandDomain || '';
  const competitorDomain = context?.competitorDomain || '';
  if (brandDomain || competitorDomain) {
    const imageDomain       = extractDomain(asset.url || '');
    const isFromKnownDomain = (brandDomain && imageDomain.includes(brandDomain)) ||
                              (competitorDomain && imageDomain.includes(competitorDomain));
    const isBrandCdn        = url.includes('cdn')    || url.includes('assets') ||
                              url.includes('static') || url.includes('media')  ||
                              url.includes('images') || url.includes('img');
    if (!isFromKnownDomain && !isBrandCdn) score -= 15;
  }

  // Size signal
  const w = asset.width  || 0;
  const h = asset.height || 0;
  if (w >= 800 && h >= 400) score += 15;
  if (w >= 400 && h >= 200) score += 8;
  if (w < 100 && h < 100 && w > 0 && h > 0) score -= 20;

  return score;
}

function filterRelevantImages(images, context) {
  if (!images || !images.length) return [];

  const scored = images.map(img => {
    const relevanceScore = scoreProductRelevance(img, context);
    return { ...img, relevanceScore, finalScore: (img.brandScore || 0) + relevanceScore };
  });

  const RELEVANCE_THRESHOLD = -20;
  const filtered = scored.filter(img => img.relevanceScore >= RELEVANCE_THRESHOLD);

  console.log(`[relevanceFilter] ${images.length} → ${filtered.length} images after relevance filter`);

  const rejected = scored.filter(img => img.relevanceScore < RELEVANCE_THRESHOLD);
  if (rejected.length > 0) {
    console.log('[relevanceFilter] Rejected:', rejected.map(img =>
      `${img.url?.split('/').pop()?.substring(0, 40)} (score: ${img.relevanceScore})`
    ).slice(0, 5));
  }

  return filtered.sort((a, b) => (b.finalScore || 0) - (a.finalScore || 0));
}

// ───────────────────────────────────────────────────────────────
// Scoring functions
// ───────────────────────────────────────────────────────────────
function scoreBrandAsset(asset, ctx) {
  ctx = ctx || {};
  const { brandDomain = '', brandName = '', productName = '', keywords = [] } = ctx;
  let score = 0;
  const url  = normalizeText(asset.url  || '');
  const alt  = normalizeText(asset.alt  || '');
  const role = asset.role   || '';
  const fmt  = asset.format || 'unknown';

  if (brandDomain && url.includes(brandDomain)) score += 40;
  if (asset.source === 'brand-og')   score += 22;
  if (asset.source === 'brand-page') score += 18;

  for (const term of buildKeywordSet({ productName, keywords, brandName })) {
    if (!term) continue;
    if (alt.includes(term)) score += 14;
    if (url.includes(term.replace(/\s+/g, '-'))) score += 10;
  }

  if (role === 'ui')            score += 14;
  if (role === 'hero-or-photo') score += 10;
  if (role === 'logo-or-icon')  score += 8;
  if (fmt  === 'gif')   score += 12;
  if (fmt  === 'png')   score += 8;
  if (fmt  === 'jpeg' || fmt === 'webp') score += 6;
  if (fmt  === 'svg')   score += 5;

  if (url.includes('favicon'))                                                       score -= 40;
  if (url.includes('sprite'))                                                        score -= 20;
  if (url.includes('thumbnail'))                                                     score -= 8;
  if (url.includes('qr_code') || url.includes('qr-code') || url.includes('qrcode')) score -= 100;
  if (url.includes('icon-font') || url.includes('iconfont'))                        score -= 60;
  if (url.includes('placeholder'))                                                   score -= 50;
  if (url.includes('pixel') || url.includes('1x1'))                                 score -= 80;
  if (url.includes('tracking') || url.includes('beacon'))                           score -= 80;
  if (url.includes('captcha'))                                                       score -= 100;

  return score;
}

function scoreCompetitorAsset(asset, ctx) {
  ctx = ctx || {};
  const { competitorDomain = '', brandName = '', productName = '', keywords = [] } = ctx;
  let score = 0;
  const url  = normalizeText(asset.url  || '');
  const alt  = normalizeText(asset.alt  || '');
  const role = asset.role   || '';
  const fmt  = asset.format || 'unknown';

  if (competitorDomain && url.includes(competitorDomain)) score += 26;
  if (asset.source === 'competitor-og')   score += 16;
  if (asset.source === 'competitor-page') score += 12;

  for (const term of buildKeywordSet({ productName, keywords, brandName })) {
    if (!term) continue;
    if (alt.includes(term)) score += 12;
    if (url.includes(term.replace(/\s+/g, '-'))) score += 8;
  }

  if (role === 'ui')            score += 14;
  if (role === 'hero-or-photo') score += 8;
  if (fmt  === 'gif')   score += 12;
  if (fmt  === 'png')   score += 8;
  if (fmt  === 'jpeg' || fmt === 'webp') score += 6;

  if (url.includes('favicon'))                                                       score -= 40;
  if (url.includes('sprite'))                                                        score -= 20;
  if (url.includes('thumbnail'))                                                     score -= 8;
  if (url.includes('qr_code') || url.includes('qr-code') || url.includes('qrcode')) score -= 100;
  if (url.includes('icon-font') || url.includes('iconfont'))                        score -= 60;
  if (url.includes('placeholder'))                                                   score -= 50;
  if (url.includes('pixel') || url.includes('1x1'))                                 score -= 80;
  if (url.includes('tracking') || url.includes('beacon'))                           score -= 80;
  if (url.includes('captcha'))                                                       score -= 100;

  return score;
}

function scoreVideoAsset(asset, ctx) {
  ctx = ctx || {};
  const { brandDomain = '', brandName = '', productName = '', keywords = [] } = ctx;
  let score = 0;
  const url   = normalizeText(asset.url   || '');
  const title = normalizeText(asset.title || '');
  const role  = asset.role   || '';
  const fmt   = asset.format || 'unknown';

  if (brandDomain && url.includes(brandDomain))  score += 40;
  if (asset.source === 'brand-video')     score += 18;
  if (asset.source === 'script-detected') score += 12;
  if (asset.source === 'data-attr')       score += 10;

  for (const term of buildKeywordSet({ productName, keywords, brandName })) {
    if (!term) continue;
    if (title.includes(term)) score += 16;
    if (url.includes(term.replace(/\s+/g, '-'))) score += 10;
  }

  if (role === 'product-demo') score += 18;
  if (role === 'hero-video')   score += 14;
  if (fmt === 'youtube' || fmt === 'vimeo') score += 8;
  if (fmt === 'mp4'     || fmt === 'webm')  score += 10;

  return score;
}

// ───────────────────────────────────────────────────────────────
// Fast axios+cheerio scrape
// ───────────────────────────────────────────────────────────────
async function scrapePageFast(pageURL, context) {
  context = context || {};
  try {
    const res = await axios.get(pageURL, {
      headers: {
        'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0 Safari/537.36'
      },
      timeout: 12000,
      maxRedirects: 5
    });

    const $          = cheerio.load(res.data);
    const images     = [];
    const videos     = [];
    const pageType   = context.pageType || 'brand';
    const pageDomain = extractDomain(pageURL);
    const imgSource  = pageType === 'competitor' ? 'competitor-page' : 'brand-page';
    const ogSource   = pageType === 'competitor' ? 'competitor-og'   : 'brand-og';
    const vidSource  = pageType === 'competitor' ? 'competitor-video' : 'brand-video';
    const scoreCtx   = { ...context, brandDomain: pageDomain, competitorDomain: pageDomain };
    const scoreFn    = pageType === 'competitor' ? scoreCompetitorAsset : scoreBrandAsset;

    // og:image / twitter:image
    const ogImage = $('meta[property="og:image"]').attr('content') ||
                    $('meta[name="twitter:image"]').attr('content');
    if (ogImage) {
      const url = absoluteUrl(ogImage, pageURL);
      if (url && !isJunkUrl(url)) {
        const a = { source: ogSource, url, alt: 'og image', format: detectImageFormat(url) };
        a.role = guessImageRole(a);
        a.brandScore = scoreFn(a, scoreCtx);
        images.push(a);
      }
    }

    // og:video
    const ogVideo = $('meta[property="og:video"]').attr('content') ||
                    $('meta[property="og:video:url"]').attr('content');
    if (ogVideo) {
      const url = absoluteUrl(ogVideo, pageURL);
      if (url) {
        const a = {
          source: vidSource, url, title: 'og video',
          format: detectVideoFormat(url),
          poster: ogImage ? absoluteUrl(ogImage, pageURL) : null
        };
        a.role = guessVideoRole(a);
        a.brandScore = scoreVideoAsset(a, scoreCtx);
        videos.push(a);
      }
    }

    // img tags
    $('img').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src') || $(el).attr('data-lazy-src') ||
                  $(el).attr('data-original') ||
                  pickLargestSrcFromSrcset($(el).attr('srcset'), pageURL);
      const url = absoluteUrl(src, pageURL);
      if (!url) return;
      if (isJunkUrl(url)) return;

      const w = parseInt($(el).attr('width')  || '0', 10);
      const h = parseInt($(el).attr('height') || '0', 10);
      if (w && w < 48 && h && h < 48) return;

      const fmt   = detectImageFormat(url);
      const isGif = fmt === 'gif';

      const a = {
        source: imgSource, url,
        alt: (($(el).attr('alt') || '') + ' ' + ($(el).attr('class') || '')).trim(),
        width: w, height: h,
        format: fmt,
        isGif
      };
      a.role = guessImageRole(a);
      a.brandScore = scoreFn(a, scoreCtx);
      if (isGif) a.brandScore += 20;
      images.push(a);
    });

    // video tags
    $('video').each((_, el) => {
      const poster = absoluteUrl($(el).attr('poster'), pageURL);
      const src    = absoluteUrl(
        $(el).attr('src') || $(el).find('source').first().attr('src'),
        pageURL
      );
      if (!src) return;
      const a = {
        source: vidSource, url: src,
        title: ($(el).attr('title') || $(el).attr('aria-label') || '').trim(),
        poster, format: detectVideoFormat(src)
      };
      a.role = guessVideoRole(a);
      a.brandScore = scoreVideoAsset(a, scoreCtx);
      videos.push(a);
    });

    // iframes (YouTube/Vimeo)
    $('iframe').each((_, el) => {
      const src = absoluteUrl($(el).attr('src'), pageURL);
      if (!src || !/youtube|youtu\.be|vimeo/.test(src)) return;
      const a = {
        source: vidSource, url: src,
        title: ($(el).attr('title') || '').trim(),
        poster: null, format: detectVideoFormat(src)
      };
      a.role = guessVideoRole(a);
      a.brandScore = scoreVideoAsset(a, scoreCtx);
      videos.push(a);
    });

    // Script tag scan — catches CDN videos/GIFs on JS-heavy sites (ByteDance, etc.)
    $('script').each((_, el) => {
      const content = $(el).html() || '';
      if (!content.includes('.mp4') && !content.includes('.webm') &&
          !content.includes('.gif') && !content.includes('.mov')) return;

      const mp4Matches  = content.match(/https?:\/\/[^\s"'\\,\)]+\.mp4[^\s"'\\,\)]*/g)  || [];
      const webmMatches = content.match(/https?:\/\/[^\s"'\\,\)]+\.webm[^\s"'\\,\)]*/g) || [];
      const movMatches  = content.match(/https?:\/\/[^\s"'\\,\)]+\.mov[^\s"'\\,\)]*/g)  || [];
      const gifMatches  = content.match(/https?:\/\/[^\s"'\\,\)]+\.gif[^\s"'\\,\)]*/g)  || [];

      [...mp4Matches, ...webmMatches, ...movMatches].forEach(rawUrl => {
        const cleanedUrl = rawUrl.split('"')[0].split("'")[0].split('\\')[0];
        const url = absoluteUrl(cleanedUrl, pageURL);
        if (!url || isJunkUrl(url)) return;
        const a = {
          source: 'script-detected',
          url, title: 'script-detected-video',
          poster: null, format: detectVideoFormat(url)
        };
        a.role = guessVideoRole(a);
        a.brandScore = scoreVideoAsset(a, scoreCtx) + 10;
        videos.push(a);
      });

      gifMatches.forEach(rawUrl => {
        const cleanedUrl = rawUrl.split('"')[0].split("'")[0].split('\\')[0];
        const url = absoluteUrl(cleanedUrl, pageURL);
        if (!url || isJunkUrl(url)) return;
        const a = {
          source: imgSource,
          url, alt: 'script-detected-gif',
          format: 'gif', isGif: true
        };
        a.role = 'feature-illustration';
        a.brandScore = scoreFn(a, scoreCtx) + 20;
        images.push(a);
      });
    });

    // Data attribute scan — catches lazy-loaded videos/GIFs
    $('[data-src],[data-video],[data-url],[data-lazy],[data-original],[data-background]').each((_, el) => {
      const val = $(el).attr('data-src')        ||
                  $(el).attr('data-video')      ||
                  $(el).attr('data-url')        ||
                  $(el).attr('data-lazy')       ||
                  $(el).attr('data-original')   ||
                  $(el).attr('data-background') || '';
      if (!val || val.startsWith('data:')) return;

      const isVideo = val.includes('.mp4') || val.includes('.webm') || val.includes('.mov');
      const isGif   = val.includes('.gif');
      const isImage = !isVideo && (val.includes('.jpg') || val.includes('.jpeg') ||
                                   val.includes('.png') || val.includes('.webp'));

      if (isVideo) {
        const url = absoluteUrl(val, pageURL);
        if (!url || isJunkUrl(url)) return;
        const a = { source: 'data-attr', url, title: 'data-attr-video', poster: null, format: detectVideoFormat(url) };
        a.role = guessVideoRole(a);
        a.brandScore = scoreVideoAsset(a, scoreCtx) + 8;
        videos.push(a);
      }

      if (isGif) {
        const url = absoluteUrl(val, pageURL);
        if (!url || isJunkUrl(url)) return;
        const a = { source: imgSource, url, alt: 'data-attr-gif', format: 'gif', isGif: true };
        a.role = 'feature-illustration';
        a.brandScore = scoreFn(a, scoreCtx) + 15;
        images.push(a);
      }

      if (isImage) {
        const url = absoluteUrl(val, pageURL);
        if (!url || isJunkUrl(url)) return;
        const w = parseInt($(el).attr('width') || '0', 10);
        if (w && w < 48) return;
        const a = { source: imgSource, url, alt: $(el).attr('alt') || 'lazy-image', format: detectImageFormat(url) };
        a.role = guessImageRole(a);
        a.brandScore = scoreFn(a, scoreCtx);
        images.push(a);
      }
    });

    return {
      images: uniqueByUrl(images).sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0)).slice(0, 24),
      videos: uniqueByUrl(videos).sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0)).slice(0, 12)
    };
  } catch(e) {
    console.warn('[scrape:fast] failed:', e.message);
    return { images: [], videos: [] };
  }
}

// ───────────────────────────────────────────────────────────────
// Puppeteer scrape (full Chrome rendering)
// Requires puppeteer@21 — CommonJS compatible
// Install: npm install puppeteer@21
// ───────────────────────────────────────────────────────────────
async function scrapePageWithPuppeteer(pageURL, context) {
  context = context || {};
  let puppeteer;
  try {
    puppeteer = require('puppeteer');
  } catch(e) {
    console.warn('[scrape:puppeteer] puppeteer not installed — run: npm install puppeteer@21');
    return { images: [], videos: [] };
  }

  let browser;
  try {
    console.log('[scrape:puppeteer] Launching Chrome for:', pageURL);
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });

    const page = await browser.newPage();
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0 Safari/537.36');
    await page.setViewport({ width: 1440, height: 900 });

    // Stealth — must be BEFORE page.goto
    await page.evaluateOnNewDocument(() => {
      Object.defineProperty(navigator, 'webdriver', { get: () => false });
      Object.defineProperty(navigator, 'plugins',   { get: () => [1, 2, 3] });
    });

    // Headers — must be BEFORE page.goto
    await page.setExtraHTTPHeaders({
      'Accept-Language': 'en-US,en;q=0.9',
      'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,image/webp,*/*;q=0.8'
    });

    // Intercept network requests to catch video URLs
    const networkVideos = [];
    await page.setRequestInterception(true);
    page.on('request', req => {
      const url = req.url();
      if (url.match(/\.(mp4|webm|mov|gif)(\?|$)/i)) {
        networkVideos.push(url);
      }
      req.continue();
    });

    // domcontentloaded is faster than networkidle2
    await page.goto(pageURL, { waitUntil: 'domcontentloaded', timeout: 40000 });
    await new Promise(r => setTimeout(r, 2000));

    // Scroll to trigger lazy loading
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight / 2));
    await new Promise(r => setTimeout(r, 1500));
    await page.evaluate(() => window.scrollTo(0, document.body.scrollHeight));
    await new Promise(r => setTimeout(r, 1000));

    const rawAssets = await page.evaluate(() => {
      const images = [];
      const videos = [];

      const og = document.querySelector('meta[property="og:image"]');
      if (og && og.content) images.push({ src: og.content, alt: 'og image', width: 1200, height: 630, isOg: true });

      document.querySelectorAll('img').forEach(img => {
        const src = img.currentSrc || img.src ||
                    img.dataset.src || img.dataset.lazySrc ||
                    img.getAttribute('data-original');
        if (!src || src.startsWith('data:')) return;
        images.push({
          src,
          alt:    img.alt || img.title || '',
          width:  img.naturalWidth  || img.width  || 0,
          height: img.naturalHeight || img.height || 0,
          cls:    img.className || ''
        });
      });

      document.querySelectorAll('*').forEach(el => {
        const style = window.getComputedStyle(el);
        const bg = style.backgroundImage;
        if (bg && bg !== 'none' && bg.includes('url(')) {
          const match = bg.match(/url\(['"]?([^'")\s]+)['"]?\)/);
          if (match && match[1] && !match[1].startsWith('data:')) {
            const rect = el.getBoundingClientRect();
            if (rect.width > 200 && rect.height > 150) {
              images.push({ src: match[1], alt: 'background', width: rect.width, height: rect.height, isBg: true });
            }
          }
        }
      });

      document.querySelectorAll('video').forEach(v => {
        const src = v.currentSrc || v.src || (v.querySelector('source') || {}).src;
        if (src && !src.startsWith('data:')) {
          videos.push({ src, title: v.title || v.getAttribute('aria-label') || '', poster: v.poster || '' });
        }
      });

      document.querySelectorAll('iframe').forEach(f => {
        const src = f.src;
        if (src && /youtube|youtu\.be|vimeo/.test(src)) {
          videos.push({ src, title: f.title || '', poster: '' });
        }
      });

      return { images, videos };
    });

    console.log('[scrape:puppeteer] Raw assets found:', rawAssets.images.length, 'images,', rawAssets.videos.length, 'videos,', networkVideos.length, 'network videos');

    const pageType   = context.pageType || 'brand';
    const pageDomain = extractDomain(pageURL);
    const imgSource  = pageType === 'competitor' ? 'competitor-page' : 'brand-page';
    const ogSource   = pageType === 'competitor' ? 'competitor-og'   : 'brand-og';
    const vidSource  = pageType === 'competitor' ? 'competitor-video' : 'brand-video';
    const scoreCtx   = { ...context, brandDomain: pageDomain, competitorDomain: pageDomain };
    const scoreFn    = pageType === 'competitor' ? scoreCompetitorAsset : scoreBrandAsset;

    const images = rawAssets.images
      .filter(img => img.src && !isJunkUrl(img.src) && (img.width === 0 || img.width >= 100))
      .map(img => {
        const url = absoluteUrl(img.src, pageURL);
        if (!url) return null;
        const fmt = detectImageFormat(url);
        const a = {
          source: img.isOg ? ogSource : imgSource,
          url, alt: img.alt || '', width: img.width, height: img.height,
          format: fmt, isGif: fmt === 'gif'
        };
        a.role = guessImageRole(a);
        a.brandScore = scoreFn(a, scoreCtx);
        if (a.isGif) a.brandScore += 20;
        return a;
      })
      .filter(Boolean);

    const allVideoUrls = [
      ...rawAssets.videos.map(v => ({ src: v.src, title: v.title, poster: v.poster })),
      ...networkVideos.map(url => ({ src: url, title: 'network-intercepted', poster: null }))
    ];

    const videos = allVideoUrls
      .map(v => {
        const url = absoluteUrl(v.src, pageURL);
        if (!url || isJunkUrl(url)) return null;
        const a = {
          source: vidSource, url, title: v.title || '',
          poster: v.poster ? absoluteUrl(v.poster, pageURL) : null,
          format: detectVideoFormat(url)
        };
        a.role = guessVideoRole(a);
        a.brandScore = scoreVideoAsset(a, scoreCtx);
        return a;
      })
      .filter(Boolean);

    return {
      images: uniqueByUrl(images).sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0)).slice(0, 24),
      videos: uniqueByUrl(videos).sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0)).slice(0, 12)
    };

  } catch(e) {
    console.warn('[scrape:puppeteer] failed:', e.message);
    return { images: [], videos: [] };
  } finally {
    if (browser) await browser.close().catch(() => {});
  }
}

// ───────────────────────────────────────────────────────────────
// ScraperAPI fallback
// ───────────────────────────────────────────────────────────────
async function scrapePageViaScraperAPI(pageURL, context) {
  if (!process.env.SCRAPER_API_KEY) return null;
  try {
    console.log('[scrape:scraperapi] Fetching rendered HTML for:', pageURL);
    const scraperUrl = 'http://api.scraperapi.com?api_key=' + process.env.SCRAPER_API_KEY +
                       '&url=' + encodeURIComponent(pageURL) + '&render=true';
    const res = await axios.get(scraperUrl, { timeout: 30000 });

    const $        = cheerio.load(res.data);
    const images   = [];
    const pageType   = context.pageType || 'brand';
    const pageDomain = extractDomain(pageURL);
    const imgSource  = pageType === 'competitor' ? 'competitor-page' : 'brand-page';
    const ogSource   = pageType === 'competitor' ? 'competitor-og'   : 'brand-og';
    const scoreCtx   = { ...context, brandDomain: pageDomain, competitorDomain: pageDomain };
    const scoreFn    = pageType === 'competitor' ? scoreCompetitorAsset : scoreBrandAsset;

    const ogImage = $('meta[property="og:image"]').attr('content');
    if (ogImage) {
      const url = absoluteUrl(ogImage, pageURL);
      if (url && !isJunkUrl(url)) {
        const a = { source: ogSource, url, alt: 'og image', format: detectImageFormat(url) };
        a.role = guessImageRole(a);
        a.brandScore = scoreFn(a, scoreCtx);
        images.push(a);
      }
    }

    $('img').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src');
      const url = absoluteUrl(src, pageURL);
      if (!url || isJunkUrl(url)) return;
      const w = parseInt($(el).attr('width') || '0', 10);
      if (w && w < 100) return;
      const fmt = detectImageFormat(url);
      const a = {
        source: imgSource, url, alt: $(el).attr('alt') || '',
        width: w, format: fmt, isGif: fmt === 'gif'
      };
      a.role = guessImageRole(a);
      a.brandScore = scoreFn(a, scoreCtx);
      if (a.isGif) a.brandScore += 20;
      images.push(a);
    });

    console.log('[scrape:scraperapi] Found:', images.length, 'images');
    return {
      images: uniqueByUrl(images).sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0)).slice(0, 24),
      videos: []
    };
  } catch(e) {
    console.warn('[scrape:scraperapi] failed:', e.message);
    return null;
  }
}

// ───────────────────────────────────────────────────────────────
// Smart scraper — tries fast first, then Puppeteer for videos
// Always tries Puppeteer when videos are missing
// ───────────────────────────────────────────────────────────────
async function scrapePageAssets(pageURL, context) {
  if (!pageURL) return { images: [], videos: [] };

  // Step 1: Fast axios scrape
  const fastResult = await scrapePageFast(pageURL, context);

  const meaningfulImages = fastResult.images.filter(img =>
    img.source !== 'brand-og' && img.source !== 'competitor-og' &&
    (img.width === 0 || img.width >= 200)
  );

  const hasEnoughImages = meaningfulImages.length >= 3;
  const hasVideos       = fastResult.videos.length > 0;

  // If we have both images AND videos — fast scrape is sufficient
  if (hasEnoughImages && hasVideos) {
    console.log('[scrape] Fast scrape sufficient:', fastResult.images.length, 'images,', fastResult.videos.length, 'videos from', pageURL);
    return fastResult;
  }

  if (hasEnoughImages && !hasVideos) {
    console.log('[scrape] Images OK but no videos — trying Puppeteer for videos...');
  } else {
    console.log('[scrape] JS-rendered page detected — fast scrape found only', fastResult.images.length, 'images');
    console.log('[scrape] Trying full render for:', pageURL);
  }

  // Step 2: Try ScraperAPI (only if not enough images)
  if (!hasEnoughImages && process.env.SCRAPER_API_KEY) {
    const scraperResult = await scrapePageViaScraperAPI(pageURL, context);
    if (scraperResult && scraperResult.images.length > fastResult.images.length) {
      console.log('[scrape] ScraperAPI found:', scraperResult.images.length, 'images');
      return {
        images: uniqueByUrl([...scraperResult.images, ...fastResult.images])
          .sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0))
          .slice(0, 24),
        videos: scraperResult.videos
      };
    }
  }

  // Step 3: Puppeteer — always run when videos are missing
  try {
    require('puppeteer'); // just checks if available
    const puppeteerResult = await scrapePageWithPuppeteer(pageURL, context);

    if (puppeteerResult.images.length > 0 || puppeteerResult.videos.length > 0) {
      console.log('[scrape] Puppeteer found:', puppeteerResult.images.length, 'images,', puppeteerResult.videos.length, 'videos');
      return {
        images: uniqueByUrl([...fastResult.images, ...puppeteerResult.images])
          .sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0))
          .slice(0, 24),
        videos: uniqueByUrl([...puppeteerResult.videos, ...fastResult.videos])
          .sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0))
          .slice(0, 12)
      };
    }
  } catch(e) {
    console.log('[scrape] Puppeteer not available — install with: npm install puppeteer@21');
  }

  // Final fallback
  console.log('[scrape] Using fast scrape results only:', fastResult.images.length, 'images');
  return fastResult;
}

// ── Local designer uploads ──────────────────────────────────────────────────
function formatLocalUploads(uploadedFiles) {
  return (uploadedFiles || []).map(file => {
    const asset = {
      source: 'designer-upload',
      url:    '/uploads/' + file.filename,
      thumb:  '/uploads/' + file.filename,
      alt:    (file.originalname || 'upload').replace(/\.[^.]+$/, '').replace(/[-_]/g, ' '),
      format: detectImageFormat(file.originalname || file.filename || '')
    };
    asset.role       = guessImageRole(asset);
    asset.brandScore = 100;
    return asset;
  });
}

// ───────────────────────────────────────────────────────────────
// Asset selection helpers
// ───────────────────────────────────────────────────────────────
function selectTopAssets(images) {
  images = images || [];
  const logos   = images.filter(a => a.role === 'logo-or-icon').sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0));
  const ui      = images.filter(a => a.role === 'ui').sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0));
  const hero    = images.filter(a => a.role === 'hero-or-photo' || a.role === 'ui').sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0));
  const generic = [...images].sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0));
  return {
    hero:     hero[0] || null,
    logos:    logos.slice(0, 8),
    ui:       ui.slice(0, 8),
    features: generic.filter(a => a.role !== 'logo-or-icon').slice(0, 8)
  };
}

function selectTopVideos(videos) {
  const sorted = [...(videos || [])].sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0));
  return {
    heroVideo: sorted.find(v => ['hero-video', 'product-demo', 'brand-video'].includes(v.role)) || null,
    demos:     sorted.filter(v => v.role === 'product-demo').slice(0, 4),
    all:       sorted.slice(0, 6)
  };
}

// ───────────────────────────────────────────────────────────────
// Main gather function
// ───────────────────────────────────────────────────────────────
async function gatherImages({ keywords, uploadedFiles, productName, brandName, brandURL, competitorURL, productCategory }) {
  console.log('[imageEngine] keywords:', keywords);
  console.log('[imageEngine] Discovering brand + competitor assets...');
  console.log('[imageEngine] Brand URL:', brandURL || 'none');
  console.log('[imageEngine] Competitor URL:', competitorURL || 'none');

  const localImages = formatLocalUploads(uploadedFiles || []);

  const relevanceContext = {
    productName:     productName     || '',
    productCategory: productCategory || keywords?.[0] || '',
    keywords:        keywords        || [],
    brandName:       brandName       || ''
  };

  const [brandDiscovered, competitorDiscovered] = await Promise.all([
    brandURL
      ? scrapePageAssets(brandURL,      { keywords, productName, brandName, productCategory, pageType: 'brand' })
      : Promise.resolve({ images: [], videos: [] }),
    competitorURL
      ? scrapePageAssets(competitorURL, { keywords, productName, brandName, productCategory, pageType: 'competitor' })
      : Promise.resolve({ images: [], videos: [] })
  ]);

  const brandImages      = brandDiscovered.images      || [];
  const competitorImages = competitorDiscovered.images || [];
  const brandVideos      = brandDiscovered.videos      || [];
  const competitorVideos = competitorDiscovered.videos || [];

  const mergedImages = uniqueByUrl([...localImages, ...brandImages, ...competitorImages])
    .sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0));

  // Local uploads skip the filter — user uploaded them intentionally
  const localOnly       = mergedImages.filter(img => img.source === 'designer-upload');
  const scraped         = mergedImages.filter(img => img.source !== 'designer-upload');
  const filteredScraped = filterRelevantImages(scraped, relevanceContext);

  const allImages = uniqueByUrl([...localOnly, ...filteredScraped])
    .sort((a, b) => ((b.finalScore || b.brandScore) || 0) - ((a.finalScore || a.brandScore) || 0));

  const allVideos = uniqueByUrl([...brandVideos, ...competitorVideos])
    .sort((a, b) => (b.brandScore || 0) - (a.brandScore || 0));

  const selectedImages = selectTopAssets(allImages);
  const selectedVideos = selectTopVideos(allVideos);

  console.log('[imageEngine] Final:', {
    local:        localImages.length,
    brand:        brandImages.length,
    competitor:   competitorImages.length,
    afterFilter:  allImages.length,
    brandVideos:  brandVideos.length,
    compVideos:   competitorVideos.length,
    heroSelected: selectedImages.hero ? selectedImages.hero.url.split('/').pop()?.substring(0, 50) : 'none',
    videosFound:  allVideos.length,
    gifsFound:    allImages.filter(img => img.isGif).length
  });

  const assetRules = {
    hero:     selectedImages.hero ? [selectedImages.hero] : [],
    logos:    selectedImages.logos,
    ui:       selectedImages.ui,
    features: selectedImages.features,
    videos:   selectedVideos.all,
    generic:  allImages
  };

  return {
    uploaded:         localImages,
    brand:            brandImages,
    competitor:       competitorImages,
    brandVideos,
    competitorVideos,

    // Backward compatibility
    designer_uploads: localImages,
    brand_images:     brandImages,
    brand_videos:     brandVideos,
    stock:            allImages,
    videos:           allVideos,

    selected: {
      hero:      selectedImages.hero,
      logos:     selectedImages.logos,
      ui:        selectedImages.ui,
      features:  selectedImages.features,
      heroVideo: selectedVideos.heroVideo,
      demos:     selectedVideos.demos
    },

    assetRules: {
      ...assetRules,
      preferredOrder: ['uploaded', 'brand', 'competitor', 'stock']
    }
  };
}

module.exports = {
  gatherImages,
  scrapePageAssets,
  filterRelevantImages,
  scoreProductRelevance,
  scrapeBrandAssets: scrapePageAssets,
  scrapeFromURL: (url) => scrapePageAssets(url, {}).then(r => r.images),
  formatLocalUploads,
  detectImageFormat,
  detectVideoFormat,
  guessImageRole,
  guessVideoRole
};