require('dotenv').config();
const express = require('express');
const multer  = require('multer');
const path    = require('path');
const fs      = require('fs');
const axios   = require('axios');
const cheerio = require('cheerio');
const babel = require('@babel/core');

function isUsableBrandColor(hex) {
  if (!hex) return false;

  const c = String(hex).toLowerCase().trim();

  const bad = [
    '#000', '#000000',
    '#111', '#111111',
    '#1a1a1a',
    '#fff', '#ffffff',
    'black', 'white'
  ];

  return !bad.includes(c);
}

function validateDesignBrief(brief) {
  const required = [
    'heroHeadline', 'heroCTA', 'brandColorHex',
    'personalityWords', 'visitorTemperature', 'proofType', 'singleGoal'
  ];
  const missing = required.filter(k => !brief[k] || brief[k].trim() === '');
  if (missing.length > 0) {
    throw new Error(`Design brief incomplete. Missing: ${missing.join(', ')}`);
  }
  if (brief.heroHeadline.split(' ').length > 12) {
    throw new Error('Hero headline must be 12 words or fewer.');
  }
}

function replaceUrlsDeep(obj, urlMap) {
  if (!obj) return obj;

  if (typeof obj === 'string') {
    return urlMap[obj] || obj; // Replace the URL if it matches the map
  }

  if (Array.isArray(obj)) {
    return obj.map((item) => replaceUrlsDeep(item, urlMap)); // Recursive for arrays
  }

  if (typeof obj === 'object') {
    const out = {};
    for (const [key, value] of Object.entries(obj)) {
      out[key] = replaceUrlsDeep(value, urlMap); // Recursive for objects
    }
    return out;
  }

  return obj; // Return the original object if no match is found
}

function isTrue(value) {
  return value === true || value === 'true' || value === 1 || value === '1';
}

function clampNumber(value, min, max, fallback) {
  const n = Number(value);
  if (!Number.isFinite(n)) return fallback;
  return Math.max(min, Math.min(max, Math.floor(n)));
}

function isValidHttpUrl(value = '') {
  try {
    const url = new URL(String(value).trim());
    return ['http:', 'https:'].includes(url.protocol);
  } catch {
    return false;
  }
}

// ── Screenshot competitor page for visual DNA ────────────────────────────────
async function screenshotPageBase64(pageURL) {
  if (!pageURL) return null;
  let puppeteer;
  try { puppeteer = require('puppeteer'); } 
  catch(e) { console.warn('[Screenshot] puppeteer not installed'); return null; }
  
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-dev-shm-usage']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.setUserAgent('Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0 Safari/537.36');
    await page.goto(pageURL, { waitUntil: 'networkidle2', timeout: 20000 });
    await new Promise(r => setTimeout(r, 2000)); // let animations settle
    const screenshot = await page.screenshot({ 
      encoding: 'base64', 
      clip: { x: 0, y: 0, width: 1440, height: 2400 } // capture top 2400px
    });
    await browser.close();
    console.log('[Screenshot] Captured competitor page:', pageURL);
    return screenshot;
  } catch(e) {
    if (browser) await browser.close().catch(() => {});
    console.warn('[Screenshot] Failed:', e.message);
    return null;
  }
}

function parseCtaItems(value) {
  if (!value) return [];

  try {
    if (Array.isArray(value)) return value;
    return JSON.parse(value);
  } catch {
    return [];
  }
}

function stripRevisionSuffix(filename) {
  return String(filename || '')
    .replace(/\.jsx$/i, '')
    .replace(/-(full-page|nav|hero|trust|features|pricing|testimonials|form|news|footer)-revised-\d+/gi, '');
}

function safeFilename(name, maxLength = 170) {
  const ext = path.extname(name);
  const base = name.slice(0, -ext.length);

  if (name.length <= maxLength) return name;

  return base.slice(0, maxLength - ext.length) + ext;
}


function buildStrictCtaConfig({
  includeForm,
  ctaCount,
  ctaItems,
  generationMode
}) {
  const count = clampNumber(ctaCount, 0, 8, 4);
  const hasForm = isTrue(includeForm);

  // IMPORTANT: Replicate mode must remain untouched.
  if (generationMode === 'replicate-reference') {
    return null;
  }

  if (hasForm) {
    return {
      enabled: true,
      mode: 'form',
      count,
      items: Array.from({ length: count }).map(() => ({
        text: 'Get Free Consultation',
        href: '#lead-form'
      })),
      rule: 'EXACT_CTA_COUNT_FORM_ONLY'
    };
  }

  const parsedItems = parseCtaItems(ctaItems);


  if (count > 0 && parsedItems.length !== count) {
    throw new Error(`CTA count mismatch. You selected ${count}, but provided ${parsedItems.length} CTA items.`);
  }

  const cleanedItems = parsedItems.slice(0, count).map((item, index) => {
    const text = String(item?.text || '').trim();
    const href = String(item?.href || '').trim();

    if (!text) {
      throw new Error(`CTA ${index + 1} name is required when Lead Capture Form is disabled.`);
    }

    if (!isValidHttpUrl(href)) {
      throw new Error(`CTA ${index + 1} must have a valid http/https link.`);
    }

    return { text, href };
  });

  return {
    enabled: true,
    mode: 'external',
    count,
    items: cleanedItems,
    rule: 'EXACT_CTA_COUNT_FRONTEND_ITEMS_ONLY'
  };
}


function buildReactPreviewWrapper(jsxCode, filename) {

  if (!jsxCode.includes('support@techjockey.com')) {
    jsxCode = jsxCode.replace(
      /export default LandingPage;?\s*$/,
      '' // remove export temporarily
    );
    jsxCode = jsxCode.replace(
      /\)\s*;\s*}\s*$/, // closes the return() and function
      `),
    React.createElement('footer', {style:{background:'#0f0f0f',padding:'28px 0',borderTop:'1px solid rgba(255,255,255,.08)'}},
      React.createElement('div', {style:{maxWidth:1200,margin:'0 auto',padding:'0 20px',display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:16,color:'#fff'}},
        React.createElement('div', null,
          React.createElement('img', {src:'https://cdn.techjockey.com/web/assets/V5/img/logo.svg',height:'28',alt:'Techjockey',style:{marginBottom:8}}),
          React.createElement('div', {style:{fontSize:14,opacity:.7}}, 'support@techjockey.com'),
          React.createElement('div', {style:{fontSize:13,opacity:.5}}, '© 2024 Techjockey Infotech Pvt. Ltd.')
        )
      )
    )
  );
}
export default LandingPage;`
    );
  }
  // Pre-compile JSX to plain JS server-side — no Babel needed in browser
  let compiledJs;
  try {
    const result = babel.transformSync(jsxCode, {
      presets: ['@babel/preset-react'],
      filename: filename
    });
    compiledJs = result.code
      // Remove all ES module import statements — browser UMD context has no module loader
      .replace(/^import\s+.*?\s+from\s+['"][^'"]+['"];?\n?/gm, '')
      .replace(/^import\s+['"][^'"]+['"];?\n?/gm, '')
      // Remove export default — we call it directly
      .replace(/export default LandingPage;?\s*$/, '');
  } catch(e) {
    console.warn('[Preview] Babel compile failed:', e.message);
    // Fallback — use Babel standalone
    compiledJs = null;
  }

  if (compiledJs) {
    // Fast path — pre-compiled, no Babel needed in browser
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${filename}</title>
  <script src="https://unpkg.com/react@18/umd/react.production.min.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.production.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <script>
    tailwind.config = {
      theme: {
        extend: {
          colors: {
            accent: 'var(--accent)',
            primary: 'var(--primary)'
          }
        }
      }
    }
  </script>
  <style>* { box-sizing: border-box; } body { font-family: 'Inter', sans-serif; }</style>
</head>
<body>
  <div id="root"></div>
  <script>
    const { useState, useEffect, useRef, useCallback, useMemo, useContext, useReducer, useId } = React;
    ${compiledJs}
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(React.createElement(LandingPage));
  </script>
</body>
</html>`;
  } else {
    // Slow fallback — Babel in browser
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${filename}</title>
  <script src="https://unpkg.com/react@18/umd/react.development.js"></script>
  <script src="https://unpkg.com/react-dom@18/umd/react-dom.development.js"></script>
  <script src="https://unpkg.com/@babel/standalone/babel.min.js"></script>
  <script src="https://cdn.tailwindcss.com"></script>
  <style>* { box-sizing: border-box; } body { font-family: 'Inter', sans-serif; }</style>
</head>
<body>
  <div id="root"></div>
  <script type="text/babel">
    ${jsxCode}
    const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(<LandingPage />);
  </script>
</body>
</html>`;
  }
}

function validateGeneratedJsxOrThrow(jsxCode, filename = 'generated.jsx') {
  if (!jsxCode || jsxCode.length < 500) {
    throw new Error('Generated JSX is empty or too short');
  }

  try {
    babel.transformSync(jsxCode, {
      presets: ['@babel/preset-react'],
      filename
    });
    return true;
  } catch (e) {
    throw new Error('Invalid JSX generated: ' + e.message);
  }
}

async function repairInvalidJsx({ claudeEngine, jsxCode, errorMessage, blueprint, contentMap }) {
  console.log('[JSXRepair] Running repair pass because JSX is invalid:', errorMessage);

  return await claudeEngine.runGeneration('fix', jsxCode, {
    issues: [
      'Generated JSX has syntax errors or unclosed tags.',
      errorMessage,
      'Return one complete valid React JSX component only.',
      'Do not truncate output.',
      'Close every section, div, p, ul, li, button, form and fragment.'
    ],
    blueprint,
    contentMap
  });
}

// ── Pattern variation helpers (no external module needed) ──────────────────

function loadPatternHistory() {
  const p = path.join(__dirname, 'training-data/pattern-history.json');
  try {
    return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : [];
  } catch(e) { return []; }
}

function savePatternToHistory({ productCategory, themeFamily, heroLayout, featureStyle, colours }) {
  const p       = path.join(__dirname, 'training-data/pattern-history.json');
  const history = loadPatternHistory();
  history.push({
    productCategory,
    themeFamily,
    heroLayout,
    featureStyle,
    primaryColor: colours?.primary || null,
    timestamp:    Date.now()
  });
  // Keep only last 20 entries
  const trimmed = history.slice(-20);
  fs.writeFileSync(p, JSON.stringify(trimmed, null, 2));
}

function buildVariationContext(productCategory) {
  const history = loadPatternHistory();
  if (!history.length) return '';

  // Get last 3 entries for same category
  const recent = history
    .filter(h => h.productCategory === productCategory)
    .slice(-3);

  if (!recent.length) return '';

  const recentThemes   = [...new Set(recent.map(h => h.themeFamily).filter(Boolean))];
  const recentLayouts  = [...new Set(recent.map(h => h.heroLayout).filter(Boolean))];
  const recentFeatures = [...new Set(recent.map(h => h.featureStyle).filter(Boolean))];

  return `
VARIATION REQUIRED — recently used patterns for "${productCategory}":
- Themes used: ${recentThemes.join(', ')} → pick a DIFFERENT theme family
- Hero layouts used: ${recentLayouts.join(', ')} → pick a DIFFERENT hero layout
- Feature styles used: ${recentFeatures.join(', ')} → pick a DIFFERENT feature style
Do NOT repeat any of these. Force a fresh visual direction.
`;
}


function buildSectionImageMap(analyzedImages, blueprint, contentMap) {
  const bodyIsDark = /^#0|^#1/.test(blueprint?.colours?.bodyBg || '#fff');

  const empty = {
    hero: null,
    trust: { logos: [], strategy: 'metrics-strip' },
    testimonials: { avatars: [] }
  };
  try {
    if (!analyzedImages || !analyzedImages.length) {
      console.log('[SectionImageMap] No analyzed images — returning empty map');
      return empty;
    }
    const used = new Set();
    const assignment = { ...empty };
    const valid = analyzedImages.filter(img => {
      if (!img || !img.url) return false;
      if (img.reject === true) return false;
      if ((img.confidence || 0) < 0.3) return false;
      const url = (img.url || '').toLowerCase();
      const blocked = ['cookie', 'favicon', 'qr-code', 'qr_code', 'captcha', 'sprite', 'icon-font'];
      if (blocked.some(word => url.includes(word))) return false;
      return true;
    });
    if (!valid.length) {
      console.log('[SectionImageMap] All images filtered out — returning empty map');
      return empty;
    }
   const productName = (contentMap?.productName || '').toLowerCase();
    const productCategory = (contentMap?.productCategory || '').toLowerCase();

    // Score each image for hero suitability
    const heroImg = valid
      .filter(img => img.role !== 'logo-or-icon' && img.role !== 'person-or-team')
      .filter(img => {
        const url = (img.url || '').toLowerCase();
        return !url.includes('og.') && !url.includes('og-') && !url.includes('-og')
            && !url.includes('opengraph') && !url.includes('social-share')
            && !url.includes('meta-image') && !url.includes('apple-icon')
            && !url.includes('favicon') && !url.includes('cookie');
      })
      .map(img => {
        let score = 0;
        const url = (img.url || '').toLowerCase();
        const desc = (img.description || '').toLowerCase();

        // Role score
        if (img.role === 'hero-visual')          score += 20;
        if (img.role === 'ui-screenshot')        score += 15;
        if (img.role === 'feature-illustration') score += 10;

        // Size score
        if (img.isWide === true) score += 15;

        // Vision confidence
        score += (img.confidence || 0) * 10;

        // sectionFit score from Vision
        score += (img.sectionFit?.hero || 0) * 2;

        // Product relevance — does image URL or description mention the product?
        if (productName.split(' ').some(w => w.length > 3 && url.includes(w))) score += 10;
        if (productName.split(' ').some(w => w.length > 3 && desc.includes(w))) score += 8;
        if (productCategory.split(' ').some(w => w.length > 3 && desc.includes(w))) score += 5;

        // Penalize stock-looking images
        if (url.includes('unsplash') || url.includes('pexels')) score -= 5;
        if (url.includes('abstract') || url.includes('background')) score -= 8;

        return { ...img, heroScore: score };
      })
      .sort((a, b) => b.heroScore - a.heroScore)[0] || null;

    if (heroImg) {
      assignment.hero = {
        url: heroImg.url,
        hasDarkBackground: heroImg.hasDarkBackground || false,
        overlayNeeded: !heroImg.hasDarkBackground,
        note: heroImg.description || ''
      };
      
      used.add(heroImg.url);
      console.log('[SectionImageMap] Hero:', heroImg.url);
    }
    const contentSections = contentMap?.productSections || [];
    contentSections.forEach((section, i) => {
      const sectionName = (section.name || section.label || section.headline || '').toLowerCase();
      const sectionFeatures = (section.features || [])
        .map(f => (f.title || '').toLowerCase()).join(' ');
      const sectionKeywords = (sectionName + ' ' + sectionFeatures)
        .split(/\s+/)
        .filter(w => w.length > 3);

        

      const img = valid
        .filter(img => !used.has(img.url))
        .filter(img => {
          const desc = (img.description || '').toLowerCase();
          const url  = (img.url || '').toLowerCase();
          const blocked = ['cartoon', 'robot', 'clipart', 'mascot',
                           'character', 'avatar', 'emoji', 'icon-set', 'vector',
                           'cookie', 'og.', 'favicon', 'grass', 'ground'];
          return !blocked.some(b => desc.includes(b) || url.includes(b));
        })
        .filter(img => ['ui-screenshot','feature-illustration','hero-visual','generic-stock'].includes(img.role))
        .map(img => {
          let score = img.sectionFit?.features || 0;
          const desc = (img.description || '').toLowerCase();
          const url = (img.url || '').toLowerCase();

          // Boost if image description matches section content
          sectionKeywords.forEach(kw => {
            if (desc.includes(kw)) score += 3;
            if (url.includes(kw))  score += 2;
          });

          // Prefer UI screenshots over generic stock for product sections
          if (img.role === 'ui-screenshot')        score += 8;
          if (img.role === 'feature-illustration') score += 5;
          if (img.role === 'generic-stock')        score -= 3;

          // Prefer images not yet used
          if (img.hasDarkBackground && bodyIsDark) score += 3;

          return { ...img, featureScore: score };
        })
        .sort((a, b) => b.featureScore - a.featureScore)[0] || null;
      if (img) {
        assignment['feature_' + i] = {
          url: img.url,
          sectionName: section.name || section.label || ('Section ' + (i + 1)),
          wrapInFrame: img.role === 'ui-screenshot',
          hasDarkBackground: img.hasDarkBackground || false
        };
        used.add(img.url);
      }
    });
    const logos = valid
      .filter(img => img.role === 'logo-or-icon' && !used.has(img.url))
      .slice(0, 8);
    assignment.trust = {
      logos: logos.map(img => img.url),
      strategy: logos.length >= 3 ? 'logo-grid' : 'metrics-strip'
    };
    const avatars = valid
      .filter(img => img.role === 'person-or-team' && !used.has(img.url))
      .slice(0, 5);
    assignment.testimonials = { avatars: avatars.map(img => img.url) };
    console.log('[SectionImageMap]', {
      hero: !!assignment.hero,
      features: Object.keys(assignment).filter(k => k.startsWith('feature_')).length,
      trustLogos: assignment.trust.logos.length,
      avatars: assignment.testimonials.avatars.length
    });
    return assignment;
  } catch(e) {
    console.warn('[SectionImageMap] Failed — returning empty map:', e.message);
    return empty;
  }
}
// ── Section Library slot filler — fixes "replace is not defined" ──────────
function fillSlots(template, values) {
  let result = String(template || '');
  Object.entries(values || {}).forEach(([key, val]) => {
    const safe = val === null || val === undefined
      ? ''
      : typeof val === 'object'
        ? JSON.stringify(val)
        : String(val);
    result = result.split('{{' + key + '}}').join(safe);
  });
  // Remove any unfilled slots so GPT doesn't see raw {{tokens}}
  result = result.replace(/\{\{[^}]+\}\}/g, '');
  return result;
}

function hexToRgb(hex) {
  try {
    const h = hex.replace('#', '');
    const r = parseInt(h.substring(0,2), 16);
    const g = parseInt(h.substring(2,4), 16);
    const b = parseInt(h.substring(4,6), 16);
    return r + ',' + g + ',' + b;
  } catch(e) { return '255,107,0'; }
}

function buildSlotValues(sectionId, contentMap, mediaPlan, blueprint, sectionIndex) {
  const hero          = contentMap?.hero         || {};
  const trust         = contentMap?.trust        || {};
  const pricing       = contentMap?.pricing      || {};
  const testimonials  = contentMap?.testimonials || [];
  const productSections = contentMap?.productSections || [];
  const news          = contentMap?.news         || [];
  const sectionMap    = blueprint?.sectionImageMap || {};

  const ctaText       = hero.primaryCTA || 'Get Free Consultation';
  const productName   = contentMap?.productName || '';
  const heroImage     = sectionMap?.hero?.url || mediaPlan?.hero?.primaryVisual || '';
  const heroVideo     = mediaPlan?.hero?.backgroundVideo || mediaPlan?.demos?.heroDemo || '';
  const logoUrls      = mediaPlan?.trust?.logos || [];

  // Feature image for this section index
  const featureImage  = sectionMap?.['feature_' + sectionIndex]?.url
                     || (mediaPlan?.productSections?.[sectionIndex]?.primaryPreview)
                     || '';

  const base = {
    headline:      hero.headline     || productName,
    accent_word:   productName,
    description:   hero.subheadline  || hero.supportingLine || '',
    cta_text:      ctaText,
    secondary_cta: hero.secondaryCTA || 'See Pricing',
    product_name:  productName,
    video_url:     heroVideo,
    product_image: heroImage || featureImage,
    customer_logos: JSON.stringify(logoUrls.slice(0, 6)),
    logos:          JSON.stringify(logoUrls.slice(0, 8)),
    proof_text:    trust.customerCount
                 ? 'Trusted by ' + trust.customerCount
                 : trust.socialProof || '',
    review_count:  trust.customerCount ? trust.customerCount + ' reviews' : '',

    chips:         JSON.stringify(
                     productSections.slice(0, 4).map(s => s.name || s.label).filter(Boolean)
                   ),

    // Stats from trust or product sections
    stat_1_value: trust.customerCount || '',
stat_1_label: trust.customerCount ? 'Businesses' : '',
stat_1_note:  trust.socialProof   || '',
stat_2_value: '',
stat_2_label: '',
stat_2_note:  '',
stat_3_value: '',
stat_3_label: '',
stat_3_note:  '',
product_image:  blueprint?.sectionImageMap?.hero?.url        || '',
hero_bg:        blueprint?.sectionImageMap?.hero?.url        || '',
hero_fg:        blueprint?.sectionImageMap?.heroFg?.url      || '',
hero_product:   blueprint?.sectionImageMap?.heroProduct?.url || '',

    // Features from product sections
    section_label: productSections[sectionIndex]?.label
                || productSections[sectionIndex]?.name
                || 'FEATURES',
    features: JSON.stringify(
      productSections.flatMap(s => s.features || [])
        .slice(0, 6)
        .map(f => ({
          title: f.title || '',
          description: (f.description || '').substring(0, 120) // cap at 120 chars per feature
        }))
    ),

    sections: JSON.stringify(
      productSections.map((s, i) => ({
        num:        String(i + 1).padStart(2, '0'),
        title:      s.headline || s.name || '',
        description: (s.description || '').substring(0, 200), // cap section description
        features:   (s.features || []).slice(0, 5).map(f => f.title || ''), // max 5 features shown as titles only
        image_url:  sectionMap?.['feature_' + i]?.url || '',
        video_url:  ''
      }))
    ),

    flip: String(sectionIndex % 2 !== 0),
    dark_bg: 'false',
    bg_dark: 'false',

    // Multi-section features
    sections: JSON.stringify(
      productSections.map((s, i) => ({
        num:        String(i + 1).padStart(2, '0'),
        title:      s.headline || s.name || '',
        description: s.description || '',
        features:   (s.features || []).map(f => f.title || ''),
        image_url:  sectionMap?.['feature_' + i]?.url || '',
        video_url:  ''
      }))
    ),

    // Tabs for features-tabs-dark
    tabs: JSON.stringify(
      productSections.map((s, i) => ({
        title:       s.name || s.label || ('Tab ' + (i + 1)),
        summary:     (s.features?.[0]?.title) || '',
        description: s.description || '',
        features:    (s.features || []).map(f => f.title),
        image_url:   sectionMap?.['feature_' + i]?.url || ''
      }))
    ),

    // Pricing
    plans: JSON.stringify(
      (pricing.plans || []).map((p, i) => ({
        name:         p.name || ('Plan ' + (i + 1)),
        price:        p.price || '',
        originalPrice: p.originalPrice || '',
        discount:     p.discount || '',
        period:       p.emiText || pricing.emiText || 'per user/month',
        description:  '',
        includes:     p.includes || [],
        highlighted:  i === 0
      }))
    ),
    emi_text: pricing.emiText || '',

    // Testimonials
    testimonials: JSON.stringify(
      testimonials.map((t, i) => ({
        quote:   t.quote || '',
        author:  t.author || '',
        role:    t.designation || t.role || '',
        company: t.company || '',
        avatar:  mediaPlan?.testimonials?.avatars?.[i] || ''
      }))
    ),

    // Why Techjockey
    points: JSON.stringify(
      (contentMap?.whyTechjockey?.points || []).map(p => ({
        title:       p,
        description: ''
      }))
    ),

    // News
    news_items: JSON.stringify(
      news.map(n => ({ publication: n.publication, headline: n.headline }))
    ),
    section_label_news: 'As Seen In',

    // Form
    benefits: JSON.stringify(
  contentMap?.whyTechjockey?.points?.length > 0
    ? contentMap.whyTechjockey.points.map(p => ({ title: p, description: '' }))
    : []
),

    // Videos
    videos: JSON.stringify(
  [
    ...(mediaPlan?.demos?.heroDemo ? [mediaPlan.demos.heroDemo] : []),
    ...(mediaPlan?.demos?.sectionDemos || [])
  ]
  .filter(Boolean)
  .slice(0, 6)
  .map((url, i) => ({
    url,
    caption: (productSections[i]?.name) || ('Demo ' + (i + 1))
  }))
),
video_url: mediaPlan?.demos?.heroDemo
        || mediaPlan?.hero?.backgroundVideo
        || (mediaPlan?.demos?.sectionDemos?.[0] || ''),
  };

  return base;
}
const ANIMATION_SYSTEM = `
    // ═══ CINEMATIC ANIMATION SYSTEM ═══
    const initAnimations = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      const gsap = window.gsap;
      gsap.registerPlugin(window.ScrollTrigger);

      // 1 — Fade up
      gsap.utils.toArray('.reveal').forEach(el => {
        gsap.fromTo(el,
          { opacity:0, y:32 },
          { opacity:1, y:0, duration:0.75, ease:'power3.out',
            scrollTrigger:{ trigger:el, start:'top 88%', toggleActions:'play none none reverse' }
          }
        );
      });

      // 2 — Stagger children
      gsap.utils.toArray('.stagger-parent').forEach(p => {
        gsap.fromTo(p.children,
          { opacity:0, y:28 },
          { opacity:1, y:0, duration:0.6, stagger:0.1, ease:'power3.out',
            scrollTrigger:{ trigger:p, start:'top 82%' }
          }
        );
      });

      // 3 — Zoom reveal on images
      gsap.utils.toArray('.zoom-reveal').forEach(el => {
        const child = el.querySelector('img,video');
        if (!child) return;
        gsap.fromTo(child,
          { scale:1.12 },
          { scale:1, duration:1.4, ease:'power2.out',
            scrollTrigger:{ trigger:el, start:'top 85%' }
          }
        );
      });

      // 4 — Parallax depth layers
      gsap.utils.toArray('[data-depth]').forEach(el => {
        gsap.to(el, {
          y: () => -(window.innerHeight * parseFloat(el.dataset.depth||'0.2') * 0.5),
          ease:'none',
          scrollTrigger:{
            trigger: el.closest('section') || el,
            start:'top bottom', end:'bottom top', scrub:true
          }
        });
      });

      // 5 — Sticky scroll — panel changes on scroll
      gsap.utils.toArray('.sticky-scroll-section').forEach(section => {
        const panel  = section.querySelector('.sticky-panel');
        const steps  = section.querySelectorAll('.scroll-step');
        if (!panel || !steps.length) return;
        steps.forEach((step, i) => {
          ScrollTrigger.create({
            trigger: step, start:'top center', end:'bottom center',
            onEnter:     () => activateStep(panel, steps, i),
            onEnterBack: () => activateStep(panel, steps, i)
          });
        });
      });

      // 6 — Counter animation
      gsap.utils.toArray('[data-count]').forEach(el => {
        const obj = { val:0 };
        gsap.to(obj, {
          val: parseFloat(el.dataset.count||'0'),
          duration:2.2, ease:'power2.out', snap:{ val:0.1 },
          scrollTrigger:{ trigger:el, start:'top 88%' },
          onUpdate: () => {
            el.textContent = (el.dataset.prefix||'')
              + (obj.val >= 1000
                  ? Math.round(obj.val).toLocaleString()
                  : obj.val.toFixed(0))
              + (el.dataset.suffix||'');
          }
        });
      });

      // 7 — Horizontal card strip (pinned)
      gsap.utils.toArray('.h-scroll-track').forEach(track => {
        const dist = track.scrollWidth - track.parentElement.offsetWidth;
        if (dist <= 0) return;
        gsap.to(track, {
          x: -dist, ease:'none',
          scrollTrigger:{
            trigger: track.parentElement,
            start:'top top', end:'+='+dist,
            scrub:1, pin:true
          }
        });
      });

      // 8 — Slide from sides
      gsap.utils.toArray('.slide-left').forEach(el => {
        gsap.fromTo(el,
          { x:-60, opacity:0 },
          { x:0, opacity:1, duration:0.9, ease:'power3.out',
            scrollTrigger:{ trigger:el, start:'top 85%' }
          }
        );
      });
      gsap.utils.toArray('.slide-right').forEach(el => {
        gsap.fromTo(el,
          { x:60, opacity:0 },
          { x:0, opacity:1, duration:0.9, ease:'power3.out',
            scrollTrigger:{ trigger:el, start:'top 85%' }
          }
        );
      });

      // 9 — Pop in (badges, chips, icons)
      gsap.utils.toArray('.pop-in').forEach(el => {
        gsap.fromTo(el,
          { scale:0.7, opacity:0 },
          { scale:1, opacity:1, duration:0.5, ease:'back.out(1.7)',
            scrollTrigger:{ trigger:el, start:'top 88%' }
          }
        );
      });

      // 10 — Magnetic hover on CTA buttons
      document.querySelectorAll('.btn-magnetic').forEach(btn => {
        btn.addEventListener('mousemove', e => {
          const r = btn.getBoundingClientRect();
          gsap.to(btn, {
            x: (e.clientX - r.left - r.width/2)  * 0.18,
            y: (e.clientY - r.top  - r.height/2) * 0.18,
            duration:0.3, ease:'power2.out'
          });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { x:0, y:0, duration:0.5, ease:'elastic.out(1,0.5)' });
        });
      });
    };

    // Sticky scroll panel switcher
    function activateStep(panel, steps, idx) {
      steps.forEach((s,i) => s.classList.toggle('active', i===idx));
      const content = steps[idx]?.dataset?.content;
      if (!content || !panel) return;
      gsap.to(panel, { opacity:0, y:10, duration:0.2, ease:'power2.in',
        onComplete: () => {
          panel.innerHTML = content;
          gsap.to(panel, { opacity:1, y:0, duration:0.35, ease:'power2.out' });
        }
      });
    }

    // Load GSAP then init
    const loadScript = src => new Promise(resolve => {
      if (document.querySelector('script[src="'+src+'"]')) return resolve();
      const s = document.createElement('script');
      s.src = src; s.async = true; s.onload = resolve;
      document.body.appendChild(s);
    });

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js')
    ]).then(() => requestAnimationFrame(() => requestAnimationFrame(initAnimations)));
  `;

async function generateSectionLibraryPage(
  contentMap, blueprint, mediaPlan, requestIntent, accentVal, primaryVal
) {
   const babel = require('@babel/core');
  const { pickSections, SECTION_LIBRARY } = require('./sections/section-Library');
  const { BASE_CSS } = SECTION_LIBRARY
    ? { BASE_CSS: '' }
    : { BASE_CSS: '' };

  const pickedSections = pickSections(contentMap, requestIntent, mediaPlan);
  console.log('[7/7] Selected sections:', pickedSections.map(s => s.id));

  const rgbVal = hexToRgb(accentVal);

  const { buildTailwindTokens } = require('./modules/tailwindTokens');
  const tw = buildTailwindTokens(blueprint);

  const { buildShadcnComponents } = require('./modules/shadcn');
  const shadcn = buildShadcnComponents(accentVal, primaryVal);

  // Shared CSS injected once at the top of the component
const bodyIsDark = /^#0|^#1/.test(blueprint?.colours?.bodyBg || '#fff');

  const sharedCss = `
    :root {
      --accent: ${accentVal};
      --primary: ${primaryVal};
      --accent-rgb: ${rgbVal};
      --bodyBg: ${blueprint?.colours?.bodyBg || '#ffffff'};
      --section-alt: ${bodyIsDark ? '#111827' : '#f8fafc'};
      --section-deeper: ${bodyIsDark ? '#020617' : '#f1f5f9'};
      --card-bg: ${bodyIsDark ? 'rgba(255,255,255,0.05)' : '#ffffff'};
      --card-border: ${bodyIsDark ? 'rgba(255,255,255,0.08)' : '#e5e7eb'};
      --text-primary: ${bodyIsDark ? '#f9fafb' : '#111827'};
      --text-muted: ${bodyIsDark ? 'rgba(255,255,255,0.65)' : '#6b7280'}
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Inter', ui-sans-serif, sans-serif; background: var(--bodyBg); color: var(--text-primary); }
    a { text-decoration: none; color: inherit; }
    img { max-width: 100%; }
    button { font-family: inherit; }
    h1, h2, h3 { word-break: normal !important; overflow-wrap: normal !important; hyphens: none !important; }
    h1, [class*="h1"], [class*="hero-title"], [class*="banner-title"], [class*="hvf-h1"] {
      font-size: clamp(32px, 5vw, 60px) !important;
      line-height: 1.1 !important;
    }
      .reveal { opacity:0; transform:translateY(28px); transition:opacity .7s ease,transform .7s ease; }
    .reveal.visible { opacity:1; transform:none; }
    .stagger-parent > * { opacity:0; transform:translateY(24px); }
    .zoom-reveal { overflow:hidden; }
    .zoom-reveal img, .zoom-reveal video { transform:scale(1.12); will-change:transform; }
    .slide-left { opacity:0; transform:translateX(-60px); }
    .slide-right { opacity:0; transform:translateX(60px); }
    .pop-in { opacity:0; transform:scale(0.7); }
    .btn-magnetic { will-change:transform; }
    .h-scroll-track { display:flex; gap:24px; will-change:transform; }
    .sticky-scroll-section { display:grid; grid-template-columns:1fr 1fr; gap:48px; }
    .sticky-panel { position:sticky; top:120px; height:fit-content; }
    .scroll-step { min-height:280px; padding:32px 0; opacity:0.4; transition:opacity .3s; }
    .scroll-step.active { opacity:1; }
  `;


  const designDNA = {
    isDark:       bodyIsDark,
    accentHex:    accentVal,
    primaryHex:   primaryVal,
    headingFont:  blueprint?.typography?.headingFont || 'Plus Jakarta Sans',
    bodyFont:     blueprint?.typography?.bodyFont    || 'Inter',
    radius:       shadcn?.radius || { btn: 'rounded-xl', card: 'rounded-2xl' },
    sectionIds:   pickedSections.map(s => s.id),
    totalSections: pickedSections.length
  };

  console.log('[DesignDNA]', {
    isDark: designDNA.isDark,
    accent: designDNA.accentHex,
    sections: designDNA.sectionIds
  });

  function extractSectionJSX(jsx) {
    jsx = jsx.replace(/^const\s*\{[^}]*\}\s*=\s*React\s*;?\s*\n/gm, '');
    jsx = jsx.replace(/^import\s+.*?;\s*\n/gm, '');
    jsx = jsx.replace(/export\s+default\s+\w+\s*;?\s*$/gm, '');
    const returnMatch = jsx.match(/return\s*\(\s*([\s\S]+?)\s*\);\s*\}?\s*$/);
    if (returnMatch && (jsx.includes('function LandingPage') || jsx.includes('const LandingPage'))) {
      return returnMatch[1].trim();
    }
    return jsx.trim();
  }

  // Generate all sections in parallel
  function extractSectionJSX(jsx) {
    jsx = jsx.replace(/export\s+default\s+\w+\s*;?\s*\n?/g, '');
    jsx = jsx.replace(/\bclass=/g, 'className=');
    jsx = jsx.replace(/\bstyle="([^"]*)"/g, (_, css) => {
      const obj = css.split(';').filter(Boolean).map(rule => {
        const [prop, ...rest] = rule.split(':');
        if (!prop || !rest.length) return null;
        const camel = prop.trim().replace(/-([a-z])/g, (_, c) => c.toUpperCase());
        return `${camel}:'${rest.join(':').trim()}'`;
      }).filter(Boolean).join(',');
      return `style={{${obj}}}`;
    });

    jsx = jsx.replace(/^import\s+.*?;\s*\n?/gm, '');
    jsx = jsx.replace(/^const\s*\{[^}]*\}\s*=\s*React\s*;?\s*\n?/gm, '');
    jsx = jsx.replace(/export\s+default\s+\w+\s*;?\s*\n?/g, '');
    if (jsx.includes('const LandingPage') || jsx.includes('function LandingPage')) {
      const returnIdx = jsx.lastIndexOf('return (');
      if (returnIdx !== -1) {
        let depth = 0;
        let start = returnIdx + 'return ('.length - 1;
        let end = start;
        for (let i = start; i < jsx.length; i++) {
          if (jsx[i] === '(') depth++;
          else if (jsx[i] === ')') {
            depth--;
            if (depth === 0) { end = i; break; }
          }
        }
        return jsx.slice(start + 1, end).trim();
      }
    }
    return jsx.trim();
  }

  console.log('[SectionGen] Generating', pickedSections.length, 'sections in parallel...');

  const OpenAI = require('openai');
  const oai = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

  const results = await Promise.allSettled(
    pickedSections.map(async (section, idx) => {
      try {
        const slotValues = buildSlotValues(
          section.id, contentMap, mediaPlan, blueprint, idx
        );
        // Pre-build media JSX — must come BEFORE filledPrompt
        const heroUrl = slotValues.product_image || slotValues.video_url || '';
        const isVideo = heroUrl.endsWith('.mp4') || heroUrl.endsWith('.webm');

        const prebuiltMediaJSX = heroUrl ? (
          isVideo
            ? `<video autoPlay muted loop playsInline style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}><source src="${heroUrl}" type="video/mp4"/></video>`
            : `<img src="${heroUrl}" alt="${contentMap?.productName || ''}" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>`
        ) : '';

        const prevSection = idx > 0 ? pickedSections[idx - 1]?.id : 'nav-dark';
        const nextSection = idx < pickedSections.length - 1 ? pickedSections[idx + 1]?.id : 'footer-dark';

        const featureMediaJSX = (() => {
          const imgs = [];
          for (let i = 0; i < 5; i++) {
            const url = blueprint?.sectionImageMap?.['feature_' + i]?.url;
            if (url) {
              const isVid = url.endsWith('.mp4');
              imgs.push({
                index: i,
                jsx: isVid
                  ? `<video autoPlay muted loop playsInline style={{width:'100%',borderRadius:'12px',display:'block'}}><source src="${url}" type="video/mp4"/></video>`
                  : `<img src="${url}" alt="Feature ${i+1}" style={{width:'100%',borderRadius:'12px',display:'block'}}/>`
              });
            }
          }
          return imgs;
        })();

        const mediaBlock = prebuiltMediaJSX
          ? 'HERO MEDIA — COPY THIS JSX EXACTLY:\n' + prebuiltMediaJSX
            + '\nDO NOT replace with CSS gradients.'
          : 'No hero media — build CSS gradient using accent color.';

        const featureBlock = featureMediaJSX.length > 0
          ? 'FEATURE MEDIA:\n' + featureMediaJSX.map(m => 'Panel ' + m.index + ': ' + m.jsx).join('\n')
          : '';

        const filledPrompt = fillSlots(section.prompt, slotValues) + `

${mediaBlock}

${featureBlock}

PRODUCT CONTEXT:
Product: ${contentMap?.productName || ''}
Headline: ${contentMap?.hero?.headline || ''}
CTA: ${slotValues.cta_text}

DESIGN DNA:
Theme: ${bodyIsDark ? 'DARK — never use white backgrounds' : 'LIGHT — never use black backgrounds'}
Accent: ${accentVal}

SECTION CONTEXT:
Position: ${idx + 1} of ${designDNA.totalSections}
Above: ${prevSection}
Below: ${nextSection}
`;

        const systemPrompt = `

        HARD JSX RULES — VIOLATION BREAKS THE PAGE:
1. NEVER use class= — always use className=
2. NEVER use style="color:#hex" — always use style={{color:'#hex'}}
3. NEVER write export default LandingPage; anywhere in your output
4. NEVER define variables before the JSX — no const x = [...] before <section>
5. NEVER define sub-components — no const X = () => {}, no function X() {}
6. NEVER use if() statements at top level — use ternary inside JSX only
7. ALL data arrays must be inline inside .map() — never stored in const first
8. Output must START with a JSX element — <section or <div only

        TOP-LEVEL JS RULE — ABSOLUTE:
- Output must START with a JSX element: <section or <div
- NEVER declare: const testimonials = [...] before the JSX
- NEVER declare: const logos = [...] before the JSX
- NEVER declare: const plans = [...] before the JSX
- ALL arrays must be INLINE inside the JSX .map() call
- WRONG:
  const testimonials = [{quote:"...", author:"..."}];
  return <section>{testimonials.map(t => <div>{t.quote}</div>)}</section>
- RIGHT:
  <section>
    {[{quote:"...", author:"..."},{quote:"...", author:"..."}].map((t,i) => (
      <div key={i}>{t.quote}</div>
    ))}
  </section>
- For carousel state: const [slide, setSlide] = React.useState(0); is allowed ONLY if it appears AFTER the opening <section tag using a wrapping pattern
- if statements at top level are FORBIDDEN — use ternary inside JSX only

CONTENT LAW — ABSOLUTE PRIORITY:
Product name: ${contentMap?.productName}
Hero headline MUST BE: "${contentMap?.hero?.headline}"
CTA text MUST BE: "${slotValues.cta_text}"
DO NOT invent headlines, taglines or feature names
DO NOT write generic B2B/SaaS copy
USE ONLY the product data provided in this prompt
VIOLATION = wrong output that will be rejected

SUB-COMPONENT RULE — ABSOLUTE — VIOLATION = COMPILE FAILURE:
- NEVER write: const AnyName = () => {
- NEVER write: const AnyName = ({ props }) => {
- NEVER write: function AnyName() {
- These patterns cause ReferenceError and break the page completely
- TestimonialsCarousel, TrustLogoGrid, FeatureCard, PricingCard — ALL FORBIDDEN
- Instead write everything inline inside the main JSX return statement
- For carousel/slider state: use React.useState at the TOP of the section JSX, not inside a sub-component
- CORRECT carousel pattern:
  const [slide, setSlide] = React.useState(0);
  React.useEffect(() => { const t = setInterval(...); return () => clearInterval(t); }, []);
  return <section>...<div>{items[slide]}</div>...</section>;
- The ONLY function in your output is the section's own JSX block — nothing else

${featureMediaJSX.length > 0 ? `
PRE-BUILT FEATURE MEDIA — USE THESE FOR EACH SECTION:
${featureMediaJSX.map(m => `Section ${m.index}: ${m.jsx}`).join('\n')}
` : ''}

PRODUCT CONTEXT (use this exact data, do not invent)
Product: ${contentMap?.productName || ''}
Headline: ${contentMap?.hero?.headline || ''}
Description: ${contentMap?.hero?.subheadline || ''}
CTA: ${slotValues.cta_text}
Features: ${slotValues.features}
Testimonials: ${slotValues.testimonials}

DESIGN DNA — SAME FOR ALL ${designDNA.totalSections} SECTIONS:
Theme: ${designDNA.isDark ? 'DARK PAGE — body is #0f172a — NEVER use white or light backgrounds in any section' : 'LIGHT PAGE — NEVER use black or dark backgrounds in any section'}
Accent color: ${designDNA.accentHex}
Primary color: ${designDNA.primaryHex}
Heading font: ${designDNA.headingFont}
Body font: ${designDNA.bodyFont}

SECTION CONTEXT:
This section: ${section.id} (position ${idx + 1} of ${designDNA.totalSections})
Section above: ${prevSection} — alternate background from it
Section below: ${nextSection}
${bodyIsDark 
  ? 'DARK ALTERNATION: Use #0f172a or #111827 or #020617 — alternate between them'
  : 'LIGHT ALTERNATION: Use #ffffff or #f8fafc — alternate between them'}

  TRUST LOGOS — USE ONLY THESE URLS, DO NOT USE WIKIPEDIA OR EXTERNAL LOGO URLS:
${mediaPlan?.trust?.logos?.length > 0
  ? mediaPlan.trust.logos.slice(0,6).map((url,i) => `Logo ${i+1}: ${url}`).join('\n')
  : 'No logos available — show metrics strip instead, never invent logo URLs'}

IMAGE ENFORCEMENT — MANDATORY:
${slotValues.product_image && !slotValues.product_image.includes('undefined')
  ? `MUST USE: <img src="${slotValues.product_image}" alt="${contentMap?.productName || ''}" style={{width:'100%',display:'block',borderRadius:'12px'}} />
     If this is an MP4 URL, use: <video autoPlay muted loop playsInline style={{width:'100%',display:'block',borderRadius:'12px'}}><source src="${slotValues.product_image}" type="video/mp4"/></video>`
  : 'No image — build a CSS visual panel using accent color gradient and feature icons'}
${slotValues.video_url && !slotValues.video_url.includes('undefined')
  ? `VIDEO AVAILABLE: ${slotValues.video_url} — use as autoPlay muted loop playsInline video element`
  : ''}
  

GRID RULE — ABSOLUTE:
Never use CSS Grid inside CSS Grid
Never use display:grid as a child of display:grid
Feature lists must use flex column or a single-level grid



JSX VALIDITY HARD RULE:
- Return ONE complete React component.
- Never stop mid-section.
- Never output partial JSX.
- Never leave any p, div, section, form, ul, li, button, a, span, video, nav, footer, main or fragment unclosed.
- Every opened tag must be closed.
- If output becomes too large, simplify sections instead of truncating output.
- Do not cut off code mid-sentence.
- Final line MUST be:
export default LandingPage;

USE TAILWIND CLASSES — these are loaded via CDN. Use utility classes directly on elements.
DO NOT write any <style> tags. DO NOT use className with custom CSS class names.
Use inline Tailwind arbitrary values like bg-[#F15623] for brand colors.

BRAND TOKENS (use these as Tailwind arbitrary values):
accent color:  ${accentVal}  → bg-[${accentVal}] text-[${accentVal}] border-[${accentVal}]
primary color: ${primaryVal} → bg-[${primaryVal}]
body bg:       ${blueprint?.colours?.bodyBg || '#ffffff'}


USE THE CSS CLASSES already defined in the section's lockedCSS.
Use Tailwind arbitrary values for brand colors: bg-[${accentVal}] text-[${accentVal}]

STILL VALID (keep using):
- className="reveal" for scroll animations
- className="anim d0" etc for entrance animations
- React.useState, React.useEffect
- onClick, onChange handlers

COLOR TOKENS (use as CSS variables in style props):
--accent: ${accentVal}
--primary: ${primaryVal}
--accent-rgb: ${rgbVal}

RULES:
- Use className not class
- Use htmlFor not for
- Use onClick, onChange (React syntax)
- Inline styles only for dynamic values
JSX CLASSNAME RULES — ANY VIOLATION = BABEL COMPILE FAILURE:
- Static classes only: className="class-one class-two"
- Dynamic classes: wrap in curly braces with backtick template literal
- NEVER put dollar-sign variable expressions inside double-quoted className strings
- NEVER call .replace() or any method on a className string
- NEVER use string concatenation for classNames
- CORRECT pattern: opening curly brace + backtick + base + space + dollar expression + backtick + closing curly brace

ANIMATION RULES — NON NEGOTIABLE:
- NEVER load SplitText.min.js — blanks the page after 3 seconds, premium plugin not on CDN
- Load ONLY: gsap.min.js and ScrollTrigger.min.js from cdnjs
- Counter animations: snap val must be 0.1 — never 1 — counters go negative with val:1
- Hero heading CSS: word-break:normal; overflow-wrap:normal; hyphens:none; font-size:clamp(32px,5vw,60px) !important — never exceeds 60px, never breaks mid-word
- Hero H1 must NEVER exceed 60px font size on desktop — use clamp(32px, 5vw, 60px) always
- GSAP initGSAP() MUST use double requestAnimationFrame wrapper — already shown in component below
- Never output <style> tags — all CSS is already loaded
- Never output import or export statements
- useState must be declared as: const [x, setX] = React.useState(...)
- useEffect must be: React.useEffect(...)
- All JSX must be valid — close every tag
- JSX CLASSNAME: static classes use className="a b c" — dynamic classes use className={\`base \${condition ? 'active' : ''}\`}
- NEVER put dollar-sign expressions inside double-quoted className strings — that is invalid JSX
- NEVER call .replace() or any method on a className value
- MINIMUM OUTPUT: Each section must produce at least 2000 characters — skeleton output is a failure
- CONTENT RULE: Use ONLY the product data in the prompt — never invent placeholder features or quotes
- MEDIA RULE: If video_url is provided and not empty, render it as a video element — never leave src empty`;

        const res = await oai.chat.completions.create
        ({
          model: 'gpt-4o',
          max_completion_tokens: 6000,
          messages: [
            { role: 'system', content: systemPrompt },
            { role: 'user',   content: filledPrompt }
          ]
        });

        let jsx = (res?.choices?.[0]?.message?.content || '').trim();
        jsx = jsx.replace(/```jsx|```javascript|```js|```/g, '').trim();

        // Force inject media if GPT left src empty
        if (slotValues.product_image && slotValues.product_image.trim()) {
          const imgUrl = slotValues.product_image.trim();
          // Replace empty video src
          jsx = jsx.replace(
            /<source\s+src=""\s+type="video\/mp4"/g,
            `<source src="${imgUrl}" type="video/mp4"`
          );
          // Replace empty img src with hero alt
          jsx = jsx.replace(
            /src=""\s+alt="[^"]*"/g,
            `src="${imgUrl}" alt="${contentMap?.productName || 'Product'}"`
          );
          // Warn if image URL never made it in
          if (!jsx.includes(imgUrl)) {
            console.warn('[MediaEnforce]', section.id, '— real image not in output, GPT ignored it');
          }
        }

        // Retry once if output is too small
        if (jsx.length < 1500) {
          console.warn('[SectionGen]', section.id, 'too small (', jsx.length, 'chars) — retrying...');
          const retryRes = await oai.chat.completions.create({
            model: 'gpt-4o',
            max_completion_tokens: 6000,
            messages: [
              { role: 'system', content: systemPrompt + '\n\nPREVIOUS ATTEMPT WAS TOO SHORT. You MUST generate at least 2000 characters of rich JSX. Every element must have proper styling, real content, and visual depth.' },
              { role: 'user', content: filledPrompt }
            ]
          });
          const retryJsx = (retryRes?.choices?.[0]?.message?.content || '').trim()
            .replace(/```jsx|```javascript|```js|```/g, '').trim();
          if (retryJsx.length > jsx.length) {
            jsx = retryJsx;
            console.log('[SectionGen]', section.id, 'retry OK —', jsx.length, 'chars');
          }
        }

        console.log('[SectionGen]', section.id, 'OK —', jsx.length, 'chars');
        // Validate JSX compiles before accepting
        try {
          babel.transformSync(jsx, {
            presets: ['@babel/preset-react'],
            filename: section.id + '.jsx'
          });
        } catch(babelErr) {
          console.warn('[SectionGen]', section.id, 'Babel error — retrying:', babelErr.message.split('\n')[0]);
          const fixRes = await oai.chat.completions.create({
            model: 'gpt-4o',
            max_completion_tokens: 6000,
            messages: [
              { role: 'system', content: systemPrompt + `\n\nPREVIOUS OUTPUT HAD BABEL ERROR: ${babelErr.message.split('\n')[0]}\nFix this error and return valid JSX. Do not define sub-components with const X = () => {}` },
              { role: 'user', content: filledPrompt }
            ]
          });
          jsx = (fixRes?.choices?.[0]?.message?.content || '').trim()
            .replace(/```jsx|```javascript|```js|```/g, '').trim();
        }
        return { id: section.id, css: section.lockedCSS, jsx };

      } catch(e) {
        console.warn('[SectionGen]', section.id, 'failed:', e.message);
        return null;
      }
    })
  );

  const succeeded = results
    .filter(r => r.status === 'fulfilled' && r.value)
    .map(r => r.value);

  console.log('[SectionGen] Done:', succeeded.length, '/', pickedSections.length, 'succeeded');

  if (succeeded.length === 0) {
    throw new Error('All sections failed');
  }

  // Combine all locked CSS blocks
  function deduplicateCss(css) {
    const blocks = css.split(/\n(?=[^\s])/);
    const seen = new Set();
    return blocks.filter(block => {
      const key = block.trim().split('{')[0].trim();
      if (!key || seen.has(key)) return !seen.has(key);
      seen.add(key);
      return true;
    }).join('\n');
  }
    // Base animations CSS from sectionLibrary
    const rawAllCss = [
    sharedCss,
    `@keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
     @keyframes scaleIn { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
     .anim { opacity:0; animation:fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
     .anim-scale { opacity:0; animation:scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards; }
     .d0{animation-delay:0.05s}.d1{animation-delay:0.2s}.d2{animation-delay:0.35s}
     .d3{animation-delay:0.5s}.d4{animation-delay:0.65s}.d5{animation-delay:0.8s}
     .container{max-width:1200px;margin:0 auto;padding:0 24px}
     .section{padding:96px 0;position:relative}`,
    ...succeeded.map(s => s.css)
  ].join('\n');

  const allCss = deduplicateCss(rawAllCss);

  // Assemble final React component
  const sectionsJSX = succeeded.map(s => s.jsx).join('\n\n');

  const component = `import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

    const cta_text = "${contentMap?.hero?.primaryCTA || 'Get Free Consultation'}";
  const accentColor = "${accentVal}";
  const primaryColor = "${primaryVal}";
  const css = \`${allCss.replace(/`/g, '\\`')}\`;

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />
     <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-xl border-b border-white/10 py-3.5">
        <div className="${tw.container} flex justify-between items-center gap-4">
          ${blueprint?.brandLogoUrl
  ? `<img src="${blueprint.brandLogoUrl}" alt="${contentMap?.productName || 'Product'}" style="height:32px;display:block;object-fit:contain" />`
  : `<span className="font-extrabold text-xl" style={{color:'${accentVal}'}}>${contentMap?.productName || 'Product'}</span>`
}
          <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28" alt="Techjockey" className="h-7 opacity-95" />
          <a href="#lead-form" className="${shadcn.Button.default} text-sm" style={{textDecoration:'none'}}>Get Free Consultation</a>
        </div>
      </nav>

      ${sectionsJSX}

      <footer style={{background:'#0f172a',color:'#fff',padding:'42px 0'}}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:24}}>
          <div>
            <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28" alt="Techjockey" style={{marginBottom:14,display:'block'}} />
            <div style={{display:'flex',flexWrap:'wrap',gap:'10px 20px',fontSize:14,color:'rgba(255,255,255,0.75)'}}>
              <a href="mailto:support@techjockey.com" style={{color:'rgba(255,255,255,0.85)'}}>support@techjockey.com</a>
              <span>© 2024 Techjockey Infotech Pvt. Ltd.</span>
              <a href="/privacy-policy" style={{color:'rgba(255,255,255,0.85)'}}>Privacy Policy</a>
              <a href="/terms-condition" style={{color:'rgba(255,255,255,0.85)'}}>Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;`;

const navJSX = `
  React.createElement('header', {
    style: {
      position: 'fixed', top: 0, left: 0, right: 0, zIndex: 9999,
      background: '${bodyIsDark ? "rgba(15,23,42,0.95)" : "rgba(255,255,255,0.95)"}',
      backdropFilter: 'blur(20px)',
      borderBottom: '1px solid ${bodyIsDark ? "rgba(255,255,255,0.08)" : "#e5e7eb"}',
      padding: '0'
    }
  },
    React.createElement('div', {
      style: { maxWidth: '1180px', margin: '0 auto', padding: '0 24px',
               display: 'flex', alignItems: 'center', justifyContent: 'space-between',
               height: '68px' }
    },
      React.createElement('span', {
        style: { fontWeight: 800, fontSize: '20px', color: '${accentVal}',
                 fontFamily: '"Plus Jakarta Sans", sans-serif' }
      }, '${contentMap?.productName || "Product"}'),
      React.createElement('div', { style: { display: 'flex', alignItems: 'center', gap: '16px' } },
        React.createElement('img', { src: 'https://cdn.techjockey.com/web/assets/V5/img/logo.svg',
                                      height: '28px', alt: 'Techjockey' }),
        React.createElement('a', {
          href: '${contentMap?.productUrl || "#"}',
          target: '_blank', rel: 'noreferrer',
          style: { background: '${accentVal}', color: '#fff', padding: '10px 20px',
                   borderRadius: '10px', fontWeight: 700, fontSize: '14px',
                   textDecoration: 'none', display: 'inline-flex' }
        }, 'Get Started')
      )
    )
  ),
`;

const ctaStripJSX = `
  React.createElement('section', {
    style: { background: '${accentVal}', padding: '28px 0' }
  },
    React.createElement('div', {
      style: { maxWidth: '1180px', margin: '0 auto', padding: '0 24px',
               display: 'flex', alignItems: 'center', justifyContent: 'space-between',
               flexWrap: 'wrap', gap: '16px' }
    },
      React.createElement('h3', {
        style: { margin: 0, color: '#fff', fontSize: '24px', fontWeight: 800,
                 fontFamily: '"Plus Jakarta Sans", sans-serif' }
      }, '${contentMap?.hero?.headline?.substring(0, 60) || contentMap?.productName}'),
      React.createElement('a', {
        href: '${contentMap?.productUrl || "#"}',
        target: '_blank', rel: 'noreferrer',
        style: { background: '#fff', color: '${accentVal}', padding: '14px 28px',
                 borderRadius: '10px', fontWeight: 800, fontSize: '15px',
                 textDecoration: 'none' }
      }, 'Get Started')
    )
  ),
`;

const footerJSX = `
  React.createElement('footer', {
    style: { background: '#0f172a', color: '#fff', padding: '48px 0 24px' }
  },
    React.createElement('div', {
      style: { maxWidth: '1180px', margin: '0 auto', padding: '0 24px' }
    },
      React.createElement('div', {
        style: { display: 'flex', justifyContent: 'space-between', alignItems: 'center',
                 flexWrap: 'wrap', gap: '16px', paddingBottom: '24px',
                 borderBottom: '1px solid rgba(255,255,255,0.1)' }
      },
        React.createElement('img', { src: 'https://cdn.techjockey.com/web/assets/V5/img/logo.svg',
                                      height: '28px', alt: 'Techjockey' }),
        React.createElement('div', { style: { display: 'flex', gap: '24px' } },
          React.createElement('a', { href: '/privacy-policy', style: { color: '#94a3b8', fontSize: '14px' } }, 'Privacy Policy'),
          React.createElement('a', { href: '/terms', style: { color: '#94a3b8', fontSize: '14px' } }, 'Terms')
        )
      ),
      React.createElement('div', {
        style: { paddingTop: '20px', color: '#64748b', fontSize: '14px' }
      }, '© 2024 Techjockey Infotech Pvt. Ltd.')
    )
  )
`;
  const componentBody = `return React.createElement(React.Fragment, null,
  ${navJSX}
  React.createElement('div', { style: { paddingTop: '68px' } },
    ${sectionsJSX}
  ),
  ${ctaStripJSX}
  ${footerJSX}
);`;
  
  return component;
}

function generateReactProjectFolder(jsxCode, productName) {
  const folderName = productName.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '');
  const projectPath = path.join(__dirname, 'output', 'projects', folderName);
  fs.mkdirSync(path.join(projectPath, 'src'), { recursive: true });
  fs.mkdirSync(path.join(projectPath, 'public'), { recursive: true });

  fs.writeFileSync(path.join(projectPath, 'package.json'), JSON.stringify({
    name: folderName, version: '1.0.0', private: true, type: 'module',
    dependencies: { react: '^18.2.0', 'react-dom': '^18.2.0' },
    devDependencies: { '@vitejs/plugin-react': '^4.0.0', vite: '^4.4.0', tailwindcss: '^3.3.0', autoprefixer: '^10.4.14', postcss: '^8.4.27' },
    scripts: { dev: 'vite', build: 'vite build', preview: 'vite preview' }
  }, null, 2));

  fs.writeFileSync(path.join(projectPath, 'vite.config.js'),
`import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/output': 'http://localhost:3000'
    }
  }
});`);

  fs.writeFileSync(path.join(projectPath, 'tailwind.config.js'),
    `export default { content: ['./src/**/*.{js,jsx}'], theme: { extend: {} }, plugins: [] };`);

  fs.writeFileSync(path.join(projectPath, 'postcss.config.js'),
    `export default { plugins: { tailwindcss: {}, autoprefixer: {} } };`);

  fs.writeFileSync(path.join(projectPath, 'public', 'index.html'),
    `<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8" />\n  <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n  <title>${productName}</title>\n</head>\n<body>\n  <div id="root"></div>\n  <script type="module" src="/src/main.jsx"></script>\n</body>\n</html>`);

  fs.writeFileSync(path.join(projectPath, 'src', 'main.jsx'),
    `import React from 'react';\nimport ReactDOM from 'react-dom/client';\nimport './index.css';\nimport LandingPage from './LandingPage';\n\nReactDOM.createRoot(document.getElementById('root')).render(\n  <React.StrictMode><LandingPage /></React.StrictMode>\n);`);

  fs.writeFileSync(path.join(projectPath, 'src', 'index.css'),
    `@tailwind base;\n@tailwind components;\n@tailwind utilities;`);

// Clean JSX before writing — remove duplicate exports
  let cleanJsx = jsxCode.replace(/export\s+default\s+LandingPage\s*;?\s*\n?/g, '');
  cleanJsx = cleanJsx.trimEnd() + '\nexport default LandingPage;\n';
  fs.writeFileSync(path.join(projectPath, 'src', 'LandingPage.jsx'), cleanJsx);
  fs.writeFileSync(path.join(projectPath, 'README.md'),
    `# ${productName}\n\nGenerated landing page.\n\n## Run\n\`\`\`\nnpm install\nnpm run dev\n\`\`\``);

  console.log('[ProjectGen] Created:', projectPath);
  return folderName;
}

function uniqueByUrl(items) {
  const seen = new Set();
  return (items || []).filter(item => {
    if (!item?.url) return false;
    if (seen.has(item.url)) return false;
    seen.add(item.url);
    return true;
  });
}

const { proxyImage } = require('./modules/imageProxy');

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use('/output',  express.static(path.join(__dirname, 'output')));
app.use('/',        express.static(path.join(__dirname, 'ui')));

// ── Image Quality Gate ─────────────────────────────────────────────────────
// Evaluates scraped images and decides if we need better sources
function evaluateImagePoolQuality(images, productCategory) {
  if (!images || images.length === 0) {
    return { quality: 'empty', score: 0, needsStock: true, needsSearch: true };
  }

  // Score each image's usefulness
  const scored = images.map(img => {
    let q = 0;

    // Format quality
    const fmt = img.format || '';
    if (fmt === 'gif')  q += 30; // GIFs are gold
    if (fmt === 'png')  q += 20; // PNGs = likely UI screenshots
    if (fmt === 'webp') q += 15;
    if (fmt === 'jpeg') q += 10;
    if (fmt === 'svg')  q += 5;  // SVGs = logos, less useful for hero

    // Role quality
    if (img.role === 'ui')                   q += 30;
    if (img.role === 'feature-illustration') q += 25;
    if (img.role === 'hero-or-photo')        q += 20;
    if (img.role === 'logo-or-icon')         q += 5; // logos alone aren't useful

    // Size quality
    const w = img.width || 0;
    const h = img.height || 0;
    if (w >= 1200 && h >= 600) q += 25; // large = hero quality
    if (w >= 600  && h >= 300) q += 15;
    if (w >= 300  && h >= 150) q += 5;
    if (w > 0 && w < 200)     q -= 20; // small = icon/junk

    // Relevance score bonus
    const rel = img.relevanceScore || img.finalScore || img.brandScore || 0;
    if (rel >= 50) q += 20;
    if (rel >= 30) q += 10;
    if (rel < 0)   q -= 20; // already flagged as irrelevant

    return { ...img, qualityScore: q };
  });

  // Filter out clearly bad images
  const usable = scored.filter(img => img.qualityScore >= 20);

  // Check role diversity — good pool has multiple roles
  const hasUi      = usable.some(img => img.role === 'ui');
  const hasHero    = usable.some(img => img.role === 'hero-or-photo');
  const hasFeature = usable.some(img => img.role === 'feature-illustration');
  const hasGif     = usable.some(img => img.isGif);

  const roleDiversity = [hasUi, hasHero, hasFeature, hasGif].filter(Boolean).length;

  // Average quality of usable images
  const avgScore = usable.length
    ? usable.reduce((sum, img) => sum + img.qualityScore, 0) / usable.length
    : 0;

  // Determine quality tier
  let quality, needsStock, needsSearch;

  if (usable.length === 0 || avgScore < 20) {
    quality     = 'empty';
    needsStock  = true;
    needsSearch = true;
  } else if (usable.length < 3 || avgScore < 35 || roleDiversity < 2) {
    quality     = 'weak';
    needsStock  = true;
    needsSearch = true;
  } else if (usable.length < 6 || avgScore < 50 || roleDiversity < 3) {
    quality     = 'moderate';
    needsStock  = true;   // supplement with stock
    needsSearch = false;  // don't need a full search
  } else {
    quality     = 'strong';
    needsStock  = false;
    needsSearch = false;
  }

  console.log('[ImageQuality]', {
    total:         images.length,
    usable:        usable.length,
    avgScore:      Math.round(avgScore),
    roleDiversity,
    quality,
    needsStock,
    needsSearch,
    hasGif
  });

  return { quality, score: avgScore, needsStock, needsSearch, usable };
}

// ── Multer ─────────────────────────────────────────────────────────────────────
const storage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, 'uploads')),
  filename:    (req, file, cb) => cb(null, Date.now() + '-' + file.originalname)
});
const upload = multer({ storage });

const feedbackStorage = multer.diskStorage({
  destination: (req, file, cb) => cb(null, path.join(__dirname, 'uploads', 'feedback')),
  filename: (req, file, cb) => {
    const safeName = file.originalname.replace(/[^a-z0-9.\-_]/gi, '-').toLowerCase();
    cb(null, Date.now() + '-' + safeName);
  }
});

const feedbackUpload = multer({ storage: feedbackStorage });

// ── Ensure folders ──────────────────────────────────────────────────────────────
['uploads', 'output', 'training-data', 'feedback-store', 'uploads/feedback'].forEach(dir => {
  const full = path.join(__dirname, dir);
  if (!fs.existsSync(full)) fs.mkdirSync(full, { recursive: true });
});

function feedbackStorePath() {
  return path.join(__dirname, 'feedback-store', 'feedback-memory.json');
}

function readFeedbackMemory() {
  const p = feedbackStorePath();
  try {
    if (!fs.existsSync(p)) return [];
    return JSON.parse(fs.readFileSync(p, 'utf8'));
  } catch (e) {
    console.warn('[FeedbackMemory] Read failed:', e.message);
    return [];
  }
}

function writeFeedbackMemory(items) {
  const p = feedbackStorePath();
  try {
    fs.writeFileSync(p, JSON.stringify(items.slice(-300), null, 2), 'utf8');
  } catch (e) {
    console.warn('[FeedbackMemory] Write failed:', e.message);
  }
}

function normalizeFeedbackType(value = '') {
  const allowed = [
    'design', 'development', 'layout', 'content', 'image',
    'cta', 'form', 'animation', 'performance', 'other'
  ];
  const clean = String(value || '').trim().toLowerCase();
  return allowed.includes(clean) ? clean : 'other';
}

function normalizeSection(value = '') {
  const allowed = [
    'full-page', 'nav', 'hero', 'trust', 'features',
    'pricing', 'testimonials', 'form', 'news', 'footer'
  ];
  const clean = String(value || '').trim().toLowerCase();
  return allowed.includes(clean) ? clean : 'full-page';
}

function summarizeFeedbackForPrompt(limit = 12) {
  const memory = readFeedbackMemory();

  const useful = memory
    .filter(x => x && x.feedbackText)
    .slice(-limit)
    .map((item, index) => {
      return `${index + 1}. [${item.feedbackType}/${item.section}] ${item.feedbackText}`;
    });

  if (!useful.length) return '';

  return `
PAST USER FEEDBACK MEMORY — AVOID REPEATING THESE MISTAKES:
${useful.join('\n')}

Rules:
- Treat this as design/development memory.
- Do not repeat these mistakes in new landing pages.
- Apply only when relevant to the current product/page.
- Do not copy feedback text into the landing page.
`;
}

// ── Helper: extract brand logo from a page URL ──────────────────────────────
async function extractLogoFromPage(pageURL) {
  if (!pageURL) return { logoUrl: null, siteName: null, hasSvgLogo: false };
  try {
    const pageRes = await axios.get(pageURL, {
      timeout: 8000,
      headers: { 'User-Agent': 'Mozilla/5.0 Chrome/120.0' }
    });
    const $ = cheerio.load(pageRes.data);

    // Strategy 1: img inside header/nav with logo signals
    let headerLogo = null;
    $('header img, nav img, .header img, .navbar img, .nav img, .logo img').each((_, el) => {
      const src = $(el).attr('src') || $(el).attr('data-src') || '';
      const alt = $(el).attr('alt') || '';
      const cls = $(el).attr('class') || '';
      const id  = $(el).attr('id')    || '';
      const combined = `${src} ${alt} ${cls} ${id}`.toLowerCase();
      if (
        combined.includes('logo') || combined.includes('brand') ||
        combined.includes('mark') || combined.includes('icon')
      ) {
        try {
          const abs = new URL(src, pageURL).href;
          if (abs && !headerLogo) headerLogo = abs;
        } catch(e) {}
      }
    });

    /// Strategy 2: large favicon only (192x192 or 180x180)
    const appleTouchIcon = null; // disabled
    const largeFavicon = $('link[rel="icon"][sizes="192x192"]').attr('href') ||
                         $('link[rel="icon"][sizes="180x180"]').attr('href')  ||
                         null;

    // Strategy 4: SVG logo in header (most modern sites use inline SVG)
    let hasSvgLogo = false;
    $('header svg, nav svg, .header svg, .navbar svg, a.logo svg').each((_, el) => {
      const w = parseInt($(el).attr('width') || '0');
      const h = parseInt($(el).attr('height') || '0');
      if (w > 40 || h > 20) hasSvgLogo = true; // meaningful size = likely a logo
    });

    // Strategy 5: og:site_name or application-name for text fallback
    const siteName = $('meta[property="og:site_name"]').attr('content') ||
                     $('meta[name="application-name"]').attr('content')  ||
                     null;

    // Build absolute URLs
    let largeFaviconUrl = null;
    if (largeFavicon) {
      try { largeFaviconUrl = new URL(largeFavicon, pageURL).href; } catch(e) {}
    }

    const logoUrl = headerLogo || largeFaviconUrl || null;

    console.log('[BrandLogo]', {
      headerLogo:     !!headerLogo,
      appleTouchIcon: !!appleTouchIcon,
      largeFavicon:   !!largeFavicon,
      hasSvgLogo,
      siteName,
      finalLogo: logoUrl?.split('/').pop()?.substring(0, 50) || 'none'
    });

    return { logoUrl, siteName, hasSvgLogo };

  } catch(e) {
    console.warn('[BrandLogo] Extraction failed:', e.message);
    return { logoUrl: null, siteName: null, hasSvgLogo: false };
  }
}

// ── Helper: extract brand colors from a page URL ────────────────────────────────
async function extractBrandColors(pageURL) {
  if (!pageURL) return { primary: null, accent: null };
  try {
    const pageRes = await axios.get(pageURL, {
      timeout: 8000,
      headers: { 'User-Agent': 'Mozilla/5.0 Chrome/120.0' }
    });
    const $ = cheerio.load(pageRes.data);
    const metaTheme = $('meta[name="theme-color"]').attr('content');
    const styleContent = $('style').text();
    const primaryMatch = styleContent.match(/--(?:primary|brand|main)[^:]*:\s*(#[0-9a-fA-F]{3,8})/i);
    const accentMatch  = styleContent.match(/--(?:accent|highlight|cta)[^:]*:\s*(#[0-9a-fA-F]{3,8})/i);
    let ctaColor = null;
    const ctaStyle = $('a[href], button').first().attr('style') || '';
    const ctaMatch = ctaStyle.match(/background(?:-color)?:\s*(#[0-9a-fA-F]{3,8})/i);
    if (ctaMatch) ctaColor = ctaMatch[1];
    const primary = metaTheme || (primaryMatch && primaryMatch[1]) || ctaColor;
    const accent  = (accentMatch && accentMatch[1]) || ctaColor || primary;
    if (primary) console.log('[brandColor] Extracted from page:', primary, accent);
    return { primary, accent };
  } catch(e) {
    console.warn('[brandColor] Extraction failed:', e.message);
    return { primary: null, accent: null };
  }
}

async function extractBrandColorsVision(pageURL) {
  if (!pageURL) return { primary: null, accent: null };
  const puppeteer = require('puppeteer');
  let browser;
  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });
    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 900 });
    await page.goto(pageURL, { waitUntil: 'networkidle2', timeout: 15000 });
    await new Promise(r => setTimeout(r, 2000));
    const screenshot = await page.screenshot({
      encoding: 'base64',
      clip: { x: 0, y: 0, width: 1440, height: 900 }
    });
    await browser.close();
    browser = null;
    const OpenAI = require('openai');
    const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
    const response = await client.chat.completions.create({
      model: 'gpt-4o',
      max_tokens: 300,
      messages: [{
        role: 'user',
        content: [
          {
            type: 'image_url',
            image_url: { url: 'data:image/png;base64,' + screenshot, detail: 'low' }
          },
          {
            type: 'text',
            text: 'Look at this website screenshot. Extract the brand color identity.\nReturn ONLY valid JSON, nothing else:\n{\n  "primary": "#hex of the dominant hero or nav background color",\n  "accent": "#hex of the most prominent CTA button color",\n  "surface": "dark or light",\n  "ctaColor": "#hex of the biggest call-to-action button",\n  "confidence": 0.0\n}'
          }
        ]
      }]
    });
    const text = response.choices[0].message.content || '{}';
    const s = text.indexOf('{');
    const e = text.lastIndexOf('}');
    const result = JSON.parse(text.substring(s, e + 1));
    console.log('[BrandColorVision] Extracted:', result.primary, '| CTA:', result.ctaColor, '| Confidence:', result.confidence);
    return {
      primary: result.ctaColor || result.accent || result.primary || null,
      accent:  result.ctaColor || result.accent || null,
      surface: result.surface || 'light'
    };
  } catch(e) {
    if (browser) await browser.close().catch(() => {});
    console.warn('[BrandColorVision] Failed:', e.message, '— falling back to CSS parse');
    return extractBrandColors(pageURL);
  }
}



// ── PARSE DOC ──────────────────────────────────────────────────────────────────
app.post('/parse-doc', upload.single('doc'), async (req, res) => {
  try {
    const parser = require('./modules/docParser');
    let parsed;

    if (req.body.type === 'gdoc') {
      const url = req.body.url;
      if (!url) return res.status(400).json({ success: false, error: 'No URL provided' });
      console.log('[parse-doc] Fetching Google Doc:', url);
      parsed = await parser.parseGoogleDoc(url);
    } else if (req.body.type === 'word' && req.file) {
      console.log('[parse-doc] Parsing Word doc:', req.file.originalname);
      parsed = await parser.parseWordDoc(req.file.path);
    } else {
      return res.status(400).json({ success: false, error: 'Invalid request' });
    }

    console.log('[parse-doc] Found ' + parsed.sectionCount + ' sections:', parsed.sectionNames);
    res.json({ success: true, parsed });
  } catch(e) {
    console.error('[parse-doc] Error:', e.message);
    res.status(500).json({ success: false, error: e.message });
  }
});

// ── PREVIEW BRAND ──────────────────────────────────────────────────────────────
app.post('/preview-brand', async (req, res) => {
  try {
    const brandEngine = require('./modules/brandEngine');
    const data = await brandEngine.scrapeBrandPage(req.body.url);
    res.json({
      success:    !!data,
      colorCount: data ? data.colors.length : 0,
      fontCount:  data ? data.fonts.length  : 0,
      logoFound:  data ? !!data.logoURL     : false
    });
  } catch(e) {
    res.json({ success: false, colorCount: 0, fontCount: 0, logoFound: false });
  }
});

// ── PREVIEW COMPETITOR URL ─────────────────────────────────────────────────────
app.post('/preview-url', async (req, res) => {
  try {
    const imageEngine = require('./modules/imageEngine');
    if (typeof imageEngine.scrapeBrandAssets === 'function') {
      const media = await imageEngine.scrapeBrandAssets(req.body.url, {});
      return res.json({ imageCount: media.images.length, videoCount: media.videos.length, images: media.images.slice(0, 3), videos: media.videos.slice(0, 2) });
    }
    if (typeof imageEngine.scrapeFromURL === 'function') {
      const images = await imageEngine.scrapeFromURL(req.body.url);
      return res.json({ imageCount: images.length, videoCount: 0, images: images.slice(0, 3), videos: [] });
    }
    res.json({ imageCount: 0, videoCount: 0, images: [], videos: [] });
  } catch(e) {
    res.json({ imageCount: 0, videoCount: 0, images: [], videos: [] });
  }
});

// ── GENERATE BRIEF — Steps 1-6, returns image candidates for user review ──
app.post('/generate-brief', upload.fields([{ name: 'images', maxCount: 20 }]), async (req, res) => {
  try {
    const claudeEngine  = require('./modules/claudeEngine');
    const imageEngine   = require('./modules/imageEngine');
    const { buildSectionVisualStrategy } = require('./modules/sectionVisualStrategyEngine');
    const brandEngine   = require('./modules/brandEngine');
    const imageAnalyzer = require('./modules/imageAnalyzer');
    const { localizeAssets } = require('./modules/assetLocalizer');
    const { createDesignSession, updateDesignSession } = require('./modules/designStateStore');
    const { searchRelevantImages } = require('./modules/imageSearch');
    const { buildThemeTokens } = require('./modules/themeEngine');
    
     let blueprint = null;   
    let mediaPlan  = null;  


    const parsedContent = JSON.parse(req.body.parsedContent || '{}');
    const products      = JSON.parse(req.body.products      || '[]');
    const competitorURL = req.body.competitorURL || req.body.referenceUrl || '';
    const brandURL      = req.body.brandUrl      || req.body.referenceUrl || '';
    const uploadedImages = req.files?.images || [];
    const imageKeywords  = (req.body.imageKeywords || '').split(',').map(k => k.trim()).filter(Boolean);
    const pageGoal = req.body.pageGoal || 'single-product';
    const pageType = req.body.pageType || 'single';

    const designBrief = {
      heroHeadline:       (req.body.heroHeadline       || '').trim() || null,
      heroCTA:            (req.body.heroCTA             || '').trim() || null,
      brandColorHex:      (req.body.brandColorHex       || '').trim() || null,
      personalityWords:   (req.body.personalityWords    || '').trim() || null,
      visitorRole:        (req.body.visitorRole         || '').trim() || null,
      visitorTemperature: (req.body.visitorTemperature  || 'warm'),
      proofType:          (req.body.proofType           || 'logos'),
      avoidConstraint:    (req.body.avoidConstraint     || '').trim() || null,
      singleGoal:         (req.body.singleGoal          || '').trim() || null,
    };

    const rawContentText = (parsedContent.sections || [])
      .map(s => `[${s.name}]\n${s.content}`).join('\n\n');

    if (!rawContentText || rawContentText.length < 50)
      throw new Error('Content is empty');

    const designSession = createDesignSession({
      productName: parsedContent?.productName || products[0]?.name || '',
      pageType, brandURL, competitorURL,
      parsedSectionCount: (parsedContent.sections || []).length
    });

    console.log('[generate-brief] Session:', designSession.sessionId);

    // Steps 1-2: Brand + Images + Content map
    const [brandLogoData, brandResult, imageData, extractedBrandColors, relevantImages] = await Promise.all([
      extractLogoFromPage(brandURL || competitorURL).catch(() => ({ logoUrl: null, siteName: null, hasSvgLogo: false })),
      brandEngine.scrapeBrandPage(brandURL || competitorURL).catch(() => null),
      imageEngine.gatherImages({
        keywords: imageKeywords.length ? imageKeywords : [products[0]?.name || 'software'],
        uploadedFiles: uploadedImages,
        productName: products[0]?.name || '',
        brandURL: brandURL || competitorURL,
        competitorURL
      }),
      extractBrandColorsVision(competitorURL || brandURL),
      searchRelevantImages(imageKeywords[0] || products[0]?.name || 'software', products[0]?.name || '', 12).catch(() => [])
    ]);

    if (designBrief.brandColorHex) {
      extractedBrandColors.primary = designBrief.brandColorHex;
      extractedBrandColors.accent  = designBrief.brandColorHex;
    }

    const contentMap = await claudeEngine.runGeneration('content-map', rawContentText);

    if (designBrief.heroHeadline) {
      contentMap.hero = contentMap.hero || {};
      contentMap.hero.headline   = designBrief.heroHeadline;
      contentMap.hero.primaryCTA = designBrief.heroCTA || contentMap.hero.primaryCTA;
    }

    // Steps 3-5: Personality + Blueprint
    const personality = await claudeEngine.runGeneration('personality', rawContentText, {
      productName: contentMap?.productName || '',
      audience: contentMap?.targetAudience || '',
      brandColors: extractedBrandColors,
      brandTheme: brandResult?.theme || {},
      extraInstructions: designBrief.personalityWords
        ? `PERSONALITY: This brand feels ${designBrief.personalityWords}.` : ''
    });

    // Localize + Vision
    const allImages = [
      ...(imageData?.brand || []), ...(imageData?.competitor || []),
      ...(imageData?.stock || []), ...relevantImages
    ].filter(i => i?.url);

    const topImages = [...new Set(allImages.slice(0, 12).map(i => i.url))];

    const localized = await localizeAssets({
      sessionId: designSession.sessionId,
      mediaPlan: { hero: {}, trust: { logos: [] }, product: [], features: [] },
      assetRules: {},
      extraUrls: topImages
    });

    const analyzedImages = await imageAnalyzer.analyzeImages(
      localized.downloaded.filter(d => d.type === 'image').map(d => ({ url: d.localUrl, originalUrl: d.originalUrl })),
      contentMap?.productName || ''
    );

    const imageContext = analyzedImages.map(img => ({
      url: img.url, role: img.role, isWide: img.isWide,
      hasDarkBackground: img.hasDarkBackground, confidence: Math.round((img.confidence || 0) * 100),
      description: img.description || ''
    }));

    // Save session state for /generate-page
    updateDesignSession(designSession.sessionId, {
      status: 'brief-generated',
      workflow: { contentMap, personality, designBrief, extractedBrandColors, imageContext, localized }
    });

    res.json({
      success:      true,
      filename:     previewFilename,
      jsxFilename:  jsxFilename,
      projectFolder: projectFolder,
      sessionId:    designSession.sessionId,

      imageCandidates: {
        heroOptions:    imageContext.filter(i => i.role === 'hero-visual').slice(0, 3),
        productOptions: imageContext.filter(i => i.role === 'ui-screenshot').slice(0, 6),
        logoOptions:    imageContext.filter(i => i.role === 'logo-or-icon').slice(0, 8),
        peopleOptions:  imageContext.filter(i => i.role === 'person-or-team').slice(0, 4),
      },

      designPreview: {
        themeFamily:  personality.themeFamily,
        primaryColor: personality.colours?.primary,
        accentColor:  personality.colours?.accent,
        headingFont:  personality.typography?.headingFont,
      },

      contentPreview: {
        productName:  contentMap?.productName,
        heroHeadline: contentMap?.hero?.headline,
        heroCTA:      contentMap?.hero?.primaryCTA,
      }
    });

  } catch(e) {
    console.error('[generate-brief] Error:', e.message);
    res.status(500).json({ success: false, error: e.message });
  }
});

// ── GENERATE ───────────────────────────────────────────────────────────────────
app.post('/generate', upload.fields([{ name: 'images', maxCount: 20 }]), async (req, res) => {

  // ── Capture all front-end fields up front ──────────────────────────────────
  const pageGoal = req.body.pageGoal || 'single-product';
  const pageType = req.body.pageType || 'single';
  // ── Design Brief — user-defined conversion decisions ──────────────────────
const designBrief = {
  heroHeadline:        (req.body.heroHeadline        || '').trim() || null,
  heroCTA:             (req.body.heroCTA              || '').trim() || null,
  brandColorHex:       (req.body.brandColorHex        || '').trim() || null,
  personalityWords:    (req.body.personalityWords     || '').trim() || null,
  visitorRole:         (req.body.visitorRole          || '').trim() || null,
  visitorTemperature:  (req.body.visitorTemperature   || 'warm').trim(),
  proofType:           (req.body.proofType            || 'logos').trim(),
  competitorUrl:       (req.body.competitorUrl        || '').trim() || null,
  avoidConstraint:     (req.body.avoidConstraint      || '').trim() || null,
  singleGoal:          (req.body.singleGoal           || '').trim() || null,
};
  const generationMode      = req.body.generationMode || 'fresh-generate';
const referenceLandingUrl = (req.body.referenceLandingUrl || '').trim();
const preserveMode        = req.body.preserveMode || 'structure-styling';
const replaceImages       = req.body.replaceImages !== 'false';
const replaceVideos       = req.body.replaceVideos !== 'false';
const strictLayoutMatch   = req.body.strictLayoutMatch === 'true';

  // FIX 3: additionalInstructions captured and threaded into EVERY relevant step

 let additionalInstructions = (req.body.additionalInstructions || '').trim() || null; 

if (additionalInstructions) {
  console.log('[AdditionalInstructions] Received:', additionalInstructions);
}

  // FIX 1: requestIntent tracks pageGoal — used to gate form rendering everywhere
  // AFTER — User decides via checkbox
const requestIntent = {
  pageGoal,
  pageType,
  additionalInstructions,
  generationMode,
  referenceLandingUrl,
  preserveMode,
  replaceImages,
  replaceVideos,
  strictLayoutMatch,
  includeForm:         req.body.includeForm === 'true',
  includePricing:      req.body.includePricing !== 'false',
  includeTestimonials: req.body.includeTestimonials !== 'false',
  includeTrust:        req.body.includeTrust !== 'false',
};

  try {
    // ── Validate design brief ────────────────────────────────────────────────
// Comment this out if you want brief to be optional during development:
// validateDesignBrief(designBrief);

// ── Map brief fields into pipeline ───────────────────────────────────────
const tempToNarrative = {
  cold: 'pain-agitate-solve',
  warm: 'product-led',
  hot:  'proof-led'
};
const forcedNarrativeMode = tempToNarrative[designBrief.visitorTemperature] || 'product-led';

// Build brief instructions string — merged into additionalInstructions
const briefInstructions = [
  designBrief.personalityWords
    ? `PERSONALITY: This brand feels ${designBrief.personalityWords}. Let this override category defaults for color and typography.`
    : '',
  designBrief.avoidConstraint
    ? `HARD CONSTRAINT — NEVER DO THIS: ${designBrief.avoidConstraint}`
    : '',
  designBrief.proofType
    ? `PROOF STRATEGY: The visitor trusts ${designBrief.proofType} most. Make this the dominant trust signal.`
    : '',
  designBrief.heroCTA
    ? `SINGLE CONVERSION GOAL: Every CTA on this page must say "${designBrief.heroCTA}". No secondary CTAs with different text.`
    : '',
].filter(Boolean).join('\n\n');

// Merge with existing additionalInstructions
const feedbackMemoryInstructions = summarizeFeedbackForPrompt(12);

additionalInstructions = [
  briefInstructions,
  feedbackMemoryInstructions,
  (req.body.additionalInstructions || '').trim()
].filter(Boolean).join('\n\n') || null;

if (additionalInstructions) {
  console.log('[DesignBrief] Instructions built:', additionalInstructions.substring(0, 200));
}
    const claudeEngine   = require('./modules/claudeEngine');
    const imageEngine    = require('./modules/imageEngine');
    const brandEngine    = require('./modules/brandEngine');
    const imageAnalyzer  = require('./modules/imageAnalyzer');
    const figmaEngine    = require('./modules/figmaEngine');
    const { buildSectionVisualStrategy } = require('./modules/sectionVisualStrategyEngine');
    const { localizeAssets } = require('./modules/assetLocalizer');
    const designCritic   = require('./modules/designCritic');
        const { pickSections } = require('./sections/section-Library');
    const {
      createDesignSession,
      updateDesignSession,
      appendSessionLog
    } = require('./modules/designStateStore');

    
    const { createLandingFile }     = require('./mcp-server/tools/createLandingFile');
    const { buildSectionsFromPlan } = require('./mcp-server/tools/buildSectionsFromPlan');
    const { getSessionSummary }     = require('./mcp-server/tools/getSessionSummary');

    const parsedContent  = JSON.parse(req.body.parsedContent || '{}');
    const products       = JSON.parse(req.body.products      || '[]');
    const competitorURL  = req.body.competitorURL || req.body.referenceUrl || '';
    const brandURL       = req.body.brandUrl      || req.body.referenceUrl || '';
    const uploadedImages = req.files?.images || [];
    const imageKeywords  = (req.body.imageKeywords || '').split(',').map(k => k.trim()).filter(Boolean);
    let strictCtaConfig = null;

try {
  strictCtaConfig = buildStrictCtaConfig({
    includeForm: requestIntent.includeForm,
    ctaCount: req.body.ctaCount,
    ctaItems: req.body.ctaItems,
    generationMode
  });
} catch (err) {
  return res.status(400).json({
    success: false,
    error: err.message
  });
}

if (strictCtaConfig) {
  console.log('[StrictCTA]', strictCtaConfig);
}

    let assetRules = {
  lockReferenceStructure: generationMode === 'replicate-reference',
  replaceImages,
  replaceVideos,
  preserveMode,
  strictLayoutMatch,
  userSuppliedImagesOnly:
    generationMode === 'replicate-reference' && uploadedImages.length > 0
};

    if (!req.body.parsedContent) throw new Error('No content received from frontend');

    console.log('\n=== GENERATE START ===');
    console.log('[Config] pageGoal:', pageGoal, '| pageType:', pageType, '| includeForm:', requestIntent.includeForm);
    if (additionalInstructions) console.log('[Config] additionalInstructions:', additionalInstructions);

    const rawContentText = (parsedContent.sections || [])
      .map(s => `[${s.name}]\n${s.content}`)
      .join('\n\n');

    const designSession = createDesignSession({
      productName:        parsedContent?.productName || products[0]?.name || '',
      pageType,
      brandURL,
      competitorURL,
      parsedSectionCount: (parsedContent.sections || []).length
    });

    console.log('[DesignSession] Created:', designSession.sessionId);

    appendSessionLog(designSession.sessionId, {
      type: 'workflow',
      step: 'session-created',
      message: 'Design session initialized'
    });

    if (!rawContentText || rawContentText.length < 50)
      throw new Error('Content is empty — check Google Doc / parsing');

    const { fetchReferencePage, buildReferenceLayoutMap, adaptBlueprintFromReference } = require('./modules/referencePageAdapter');

let referencePageHtml = '';
let referenceLayoutMap = null;

if (generationMode === 'replicate-reference') {
  if (!referenceLandingUrl) {
    throw new Error('referenceLandingUrl is required for replicate mode');
  }

  console.log('[ReferenceMode] Fetching reference landing page...');
referencePageHtml = await fetchReferencePage(referenceLandingUrl);
console.log('[ReferenceMode] Reference page fetched with absolute asset URLs');

  referenceLayoutMap = buildReferenceLayoutMap(referencePageHtml);

  console.log('[ReferenceLayoutMap]', {
    sectionOrder: referenceLayoutMap?.sectionOrder || [],
    hasTrustBand: referenceLayoutMap?.hasTrustBand || false,
    hasFormSection: referenceLayoutMap?.hasFormSection || false,
    sectionCount: referenceLayoutMap?.sections?.length || 0
  });
}

    // ── STEP 1: Brand scrape + image gather + brand color extraction (parallel) ──
    console.log('[1/7] Brand + Images + Colors...');
    let competitorScreenshot = null;

if (competitorURL) {
  console.log('[Screenshot] Capturing competitor page...');
  competitorScreenshot = await screenshotPageBase64(competitorURL);
}

    const { searchRelevantImages } = require('./modules/imageSearch');
    const { buildThemeTokens } = require('./modules/themeEngine');

const {
  extractBrandSectionReference,
  summarizeBrandSectionReference
} = require('./modules/brandSectionReference');

let brandResult = null;
let imageData = { uploaded: [], stock: [], brand: [], competitor: [], videos: [] };
let extractedBrandColors = { primary: null, accent: null };
let relevantImages = [];
let brandLogoData = { logoUrl: null, siteName: null, hasSvgLogo: false }
let themeTokens = null;
let brandSectionReference = null;
let brandSectionReferencePrompt = '';
let brandDesignInstructions = '';
let sectionVisualStrategy = null;

if (generationMode === 'replicate-reference') {
  console.log('[ReplicateMode] Scraping images from reference URL...');

  // Still scrape images from the reference URL
  [brandLogoData, imageData, extractedBrandColors] = await Promise.all([
    extractLogoFromPage(referenceLandingUrl || competitorURL).catch(() => ({
      logoUrl: null, siteName: null, hasSvgLogo: false
    })),
    imageEngine.gatherImages({
      keywords:      imageKeywords.length ? imageKeywords : [products[0]?.name || 'software'],
      uploadedFiles: uploadedImages,
      productName:   products[0]?.name || '',
      brandURL:      referenceLandingUrl || competitorURL,
      competitorURL: referenceLandingUrl || competitorURL
    }),
    extractBrandColors(referenceLandingUrl || competitorURL)
  ]);

    relevantImages = [];
  let brandDesignInstructions = '';
  brandSectionReferencePrompt = '';

}
   
  else {
  // Run logo extraction + everything else in parallel
// Run logo extraction in parallel with everything else
  [
  brandLogoData,
  brandResult,
  imageData,
  extractedBrandColors,
  relevantImages
] = await Promise.all([
  extractLogoFromPage(brandURL || competitorURL).catch(() => ({
    logoUrl: null, siteName: null, hasSvgLogo: false
  })),
  brandEngine.scrapeBrandPage(brandURL || competitorURL).catch(() => null),
  imageEngine.gatherImages({
    keywords: imageKeywords.length ? imageKeywords : [products[0]?.name || 'software'],
    uploadedFiles: uploadedImages,
    productName: products[0]?.name || '',
    brandName: products[0]?.name || '',
    brandURL: brandURL || competitorURL,
    competitorURL
  }),
  extractBrandColorsVision(competitorURL || brandURL),
  searchRelevantImages(
    imageKeywords[0] || products[0]?.name || 'software',
    products[0]?.name || '',
    12
  ).catch(() => [])
]);

brandSectionReference = await extractBrandSectionReference(brandURL || competitorURL).catch(() => null);
brandSectionReferencePrompt = summarizeBrandSectionReference(brandSectionReference);

let brandDesignInstructions = brandSectionReferencePrompt
  ? `
${brandSectionReferencePrompt}

HARD BRAND DESIGN RULES:
- Use brand URL section patterns for layout inspiration.
- Match brand-like spacing rhythm, CTA shape, card style, and section composition.
- If user requested light theme, prefer brand page light surfaces and avoid forced dark/orange theme.
- Do not use unrelated category default colors if brand reference shows a clear visual style.
- Do not use irrelevant scraped media just because it is available.
`
  : '';

console.log('[BrandSectionReference]', {
  found: !!brandSectionReference,
  sections: brandSectionReference?.sections?.length || 0
});

console.log('[BrandLogoData]', brandLogoData);

console.log('[RelevantImages]', relevantImages.length, 'category-matched images found');

    console.log('[BrandResult]', !!brandResult, '| ExtractedColors:', extractedBrandColors.primary || 'none');

    const allImages = (imageData?.stock || []).filter(img => img && img.url);
    const allVideos = (imageData?.videos || []).filter(vid => vid && vid.url);
    console.log('[Images]', allImages.length, '[Videos]', allVideos.length);
}

    

    // ── STEP 2: Content map ────────────────────────────────────────────────────
    console.log('[2/7] Content map...');
    const contentMap = await claudeEngine.runGeneration('content-map', rawContentText);
contentMap.generationMode      = generationMode;
contentMap.referenceLandingUrl = referenceLandingUrl || '';
console.log('[ContentMap]', contentMap?.productName, '| mode:', generationMode);
// ── Override content-map with design brief ─────────────────────────────
if (designBrief.heroHeadline) {
  contentMap.hero = contentMap.hero || {};
  contentMap.hero.headline   = designBrief.heroHeadline;
  contentMap.hero.primaryCTA = designBrief.heroCTA || contentMap.hero.primaryCTA;
  console.log('[DesignBrief] Hero headline overridden:', designBrief.heroHeadline);
}

// Override brand color with user-provided hex
if (designBrief.brandColorHex) {
  extractedBrandColors.primary = designBrief.brandColorHex;
  extractedBrandColors.accent  = designBrief.brandColorHex;
  console.log('[DesignBrief] Brand color forced:', designBrief.brandColorHex);
}

console.log('[ThemeEngine]', themeTokens);
   // ── STEP 3: Reference map ──────────────────────────────────────────────────
console.log('[3/7] Reference map...');
let referenceMap = {};

if (generationMode === 'replicate-reference') {
  console.log('[ReplicateMode] Skipping GPT reference-map; using parsed reference layout');
  referenceMap = {
    source: 'reference-layout-map',
    sectionOrder: referenceLayoutMap?.sectionOrder || [],
    sections: referenceLayoutMap?.sections || [],
    heroType: referenceLayoutMap?.heroType || null,
    hasTrustBand: referenceLayoutMap?.hasTrustBand || false,
    hasFormSection: referenceLayoutMap?.hasFormSection || false
  };
} else {
  referenceMap = await claudeEngine.runGeneration(
    'reference-map',
    JSON.stringify(contentMap),
    { productName: contentMap?.productName || products[0]?.name || '' }
  );
}

    // ── Dynamic image re-fetch with better keywords ────────────────────────────
    const dynamicKeywords = [
      contentMap?.productName || '',
      contentMap?.productCategory || '',
      ...((contentMap?.productSections || [])
        .flatMap(s => (s.features || []).map(f => f.title || ''))
        .slice(0, 6))
    ].filter(Boolean);

    // ── Only re-scrape if we have better keywords AND different URL ─────────────
const needsRescrape = dynamicKeywords.length > 0 && 
  (brandResult?.brandUrl || brandURL) !== (brandURL || competitorURL);

const betterImages = needsRescrape
  ? await imageEngine.gatherImages({
      keywords:        dynamicKeywords,
      uploadedFiles:   uploadedImages,
      productName:     contentMap?.productName || '',
      brandName:       brandResult?.brandName  || contentMap?.productName || '',
      brandURL:        brandResult?.brandUrl   || brandURL || '',
      competitorURL,
      productCategory: contentMap?.productCategory || ''  // ← ADD THIS
    })
  : imageData;// ✅ Reuse Step 1 results — no duplicate scrape

// ── Merge ALL images — never overwrite Step 1 results ─────────────────────
// ── Merge images — replicate mode uses uploads only if provided ────────────
let finalVideos = replaceVideos
  ? [...(imageData?.videos || [])].filter(x => x?.url)
  : [];

let finalImages = [];

if (generationMode === 'replicate-reference') {
  if (uploadedImages.length > 0) {
    finalImages = uniqueByUrl([
      ...(imageData?.uploaded || [])
    ]).filter(x => x?.url);

    console.log(`[ImageMode] Replicate — ${finalImages.length} uploaded images only`);
  } else {
    finalImages = [];
    console.log('[ImageMode] Replicate — keeping reference page images');
  }
}
else {
  // ── Evaluate scraped image quality ─────────────────────────────────────────
const scrapedPool = uniqueByUrl([
  ...(betterImages?.uploaded   || []),
  ...(betterImages?.brand      || []),
  ...(betterImages?.competitor || []),
]).filter(x => x?.url);

const qualityReport = evaluateImagePoolQuality(
  scrapedPool,
  contentMap?.productCategory || ''
);

// ── Smart source selection based on quality ────────────────────────────────
let stockBoost   = [];
let searchBoost  = [];

if (qualityReport.needsSearch) {
  // Quality is empty or weak — actively search for better images
  console.log('[ImageStrategy] Quality:', qualityReport.quality, '→ Running targeted image search...');

  const searchTerms = [
    contentMap?.productName || '',
    contentMap?.productCategory || '',
    ...(contentMap?.productSections || [])
      .flatMap(s => (s.features || []).map(f => f.title || ''))
      .slice(0, 3)
  ].filter(Boolean);

  // Search multiple targeted queries
  const searchResults = await Promise.all(
    searchTerms.slice(0, 3).map(term =>
      searchRelevantImages(term, contentMap?.productName || '', 8).catch(() => [])
    )
  );
  searchBoost = uniqueByUrl(searchResults.flat()).filter(x => x?.url);
  console.log('[ImageStrategy] Search boost:', searchBoost.length, 'images from', searchTerms.slice(0, 3));
}

if (qualityReport.needsStock) {
  stockBoost = uniqueByUrl([
    ...(imageData?.stock    || []),
    ...(betterImages?.stock || [])
  ]).filter(x => x?.url);
}

// ── Merge with smart weighting ─────────────────────────────────────────────
// Priority order changes based on quality:
// Strong scraped → scraped first, stock as supplement
// Weak scraped   → search/stock first, scraped as supplement

finalImages = undefined;

if (qualityReport.quality === 'strong') {
  // Scraped images are great — use them, add stock lightly
  finalImages = uniqueByUrl([
    ...(betterImages?.uploaded || []),    // user uploads always first
    ...scrapedPool,                        // strong scraped images
    ...relevantImages,                     // relevant stock as supplement
    ...stockBoost
  ]).filter(x => x?.url);

  console.log('[ImageStrategy] Strong scraped pool — scraped images prioritized');

} else if (qualityReport.quality === 'moderate') {
  // Mix scraped + stock equally
  finalImages = uniqueByUrl([
    ...(betterImages?.uploaded || []),
    ...scrapedPool,
    ...relevantImages,
    ...stockBoost,
    ...searchBoost
  ]).filter(x => x?.url);

  console.log('[ImageStrategy] Moderate quality — mixed scraped + stock');

} else {
  // Weak or empty — search/stock images get priority over scraped
  finalImages = uniqueByUrl([
    ...(betterImages?.uploaded || []),    // user uploads always first
    ...searchBoost,                        // targeted search first
    ...relevantImages,                     // relevant stock second
    ...stockBoost,                         // all stock third
    ...scrapedPool                         // scraped last (they're weak)
  ]).filter(x => x?.url);

  console.log('[ImageStrategy] Weak scraped pool — search/stock prioritized over scraped');
}

console.log('[ImageStrategy] Final pool:', finalImages.length, 'images | Quality was:', qualityReport.quality);

  console.log(`[ImageMode] Fresh — ${finalImages.length} merged images`);
}

    console.log('[Images Improved]', finalImages.length, '[Videos]', finalVideos.length);

    // ── STEP 4: Personality ────────────────────────────────────────────────────
    // FIX 2: brand colors + uniqueness instruction passed here
    // FIX 3: additionalInstructions passed here
    console.log('[4/7] Personality...');

let personality;
let variationContext = '';

if (generationMode === 'replicate-reference') {
  console.log('[ReplicateMode] Using reference-preserved personality');

  const primary = extractedBrandColors.primary || '#111827';
  const accent  = extractedBrandColors.accent || primary;

  personality = {
    productType: contentMap?.productCategory || '',
    themeFamily: 'reference-preserved',
    surfaceStyle: 'reference-preserved',
    visualMotif: 'reference-preserved',
    typography: {
      headingFont: 'Inter',
      bodyFont: 'Inter',
      headingWeight: 700,
      heroFontSize: '56px',
      letterSpacing: 'normal',
      lineHeight: '1.1'
    },
    colours: {
      primary,
      accent,
      accentHover: accent,
      bodyBg: '#ffffff',
      cardBg: '#ffffff',
      textDark: '#111827',
      textMid: '#4b5563',
      textLight: '#ffffff',
      border: '#e5e7eb',
      colourReason: 'Taken from reference/brand colors for replicate mode'
    },
    backgroundSystem: {
      bodyBase: '#ffffff',
      hero: primary,
      section1: '#ffffff',
      section2: '#f8fafc',
      section3: '#ffffff'
    },
    motionStrategy: {
      allowAnimations: false,
      style: 'subtle',
      heroEntrance: 'none',
      cardHover: 'none',
      sectionReveal: 'none'
    },
    designPersonality: 'reference-preserved'
  };
} else {
  variationContext = buildVariationContext(
    contentMap?.productCategory || products[0]?.name || 'general'
  );

  console.log('[PatternVariation]',
    variationContext ? 'Forcing variation from recent patterns' : 'No history — fresh design'
  );

  personality = await claudeEngine.runGeneration(
    'personality',
    rawContentText,
    {
      productName:  contentMap?.productName || products[0]?.name || '',
      audience:     contentMap?.targetAudience || '',
      brandColors:  extractedBrandColors,
      themeTokens,
      brandTheme:   brandResult?.theme || {},
      extraInstructions: `
${variationContext}

${brandDesignInstructions}

THEME TOKENS — MUST FOLLOW:
${JSON.stringify(themeTokens, null, 2)}

Use these theme tokens as the locked source of truth for colors.
Do not invent another primary/accent color.
Do not fall back to generic orange/black if themeTokens.source is not category-fallback.

CRITICAL COLOR RULE: Derive the color palette EXCLUSIVELY from the brand colors provided in brandColors and brandTheme.
If brandColors.primary is set, use it as the hero background and primary CTA color.
Never fall back to a generic palette (e.g. orange #f5a623, blue #0066cc, purple gradients) unless
the brand itself uses those exact values.
Every landing page MUST have a visually distinct color identity tied to its specific brand.

Use separate sections for each product. Create stronger contrast between consecutive sections.
The page must feel premium, interactive, and visually intelligent.
Prefer asymmetrical compositions, layered product shots, floating chips, proof bars, interactive tabs,
split panels, spotlight cards, marquee logo bands, hover states, reveal animations.
Use SVG for logos/icons, PNG for UI/product visuals, JPEG for hero or large visual areas.
If strong media is missing, create CSS-based visual richness — abstract UI shells, gradient meshes,
metric cards, decorative panels.
${additionalInstructions ? `\nUSER ADDITIONAL INSTRUCTIONS — must be followed:\n${additionalInstructions}` : ''}
`
    }
  );
}

    // ── STEP 4.2: Design strategy ───────────────────────────────────────────────
// ── STEPS 4.2 → 4.5: Skip if replicate mode ───────────────────────────────
let designStrategy    = {};
let designIntent      = {};
let rawFigmaBuildPlan = {};
let heroStrategy      = {};

if (generationMode === 'replicate-reference') {
  console.log('[ReplicateMode] Skipping design-strategy, design-intent, figma-plan, hero-strategy');

  designStrategy = {
    primaryGoal:          'replicate',
    narrativeMode:        'reference-preserved',
    visualDominance:      'reference-preserved',
    trustStrategy:        referenceLayoutMap?.hasTrustBand ? 'logos-first' : 'stats-first',
    ctaAggression:        'medium',
    recommendedHeroStyle: referenceLayoutMap?.heroType?.hasImages ? 'split' : 'centered'
  };

  designIntent = {
    pageGoal:     pageGoal,
    pageType:     pageType,
    sectionOrder: referenceLayoutMap?.sectionOrder || 
                  ['hero','features','pricing','testimonials']
  };

  rawFigmaBuildPlan = { 
    pages: [], 
    buildSummary: { desktopSectionCount: 0, mobileSectionCount: 0 } 
  };

  heroStrategy = { layout: 'reference-preserved' };

} else {
  // ── STEP 4.2: Design strategy ──────────────────────────────────────────────
  console.log('[4.2/7] Design strategy...');
  designStrategy = await claudeEngine.runGeneration(
  'design-strategy',
  JSON.stringify({
    contentMap,
    referenceMap,
    personality,
    products,
    pageType,
    pageGoal,
    requestIntent,
    designBrief,
    forcedNarrativeMode,
    brandTheme:             brandResult?.theme || {},
    themeTokens,
    additionalInstructions: additionalInstructions || ''
  }),
  {
    productName:            contentMap?.productName || products[0]?.name || '',
    audience:               contentMap?.targetAudience || '',
    pageType,
    pageGoal,
    additionalInstructions: additionalInstructions || ''
  }
  );

  console.log('[DesignStrategy]', {
    primaryGoal:     designStrategy?.primaryGoal     || '',
    narrativeMode:   designStrategy?.narrativeMode   || '',
    visualDominance: designStrategy?.visualDominance || '',
    trustStrategy:   designStrategy?.trustStrategy   || '',
    ctaAggression:   designStrategy?.ctaAggression   || ''
  });

  // ── STEP 4.25: Design intent ────────────────────────────────────────────────
  console.log('[4.25/7] Design intent...');
  designIntent = await claudeEngine.runGeneration(
    'design-intent',
    JSON.stringify({
      contentMap,
      referenceMap,
      personality,
      themeTokens,
      designStrategy,
      products,
      pageType,
      pageGoal,
      requestIntent
    }),
    {
      productName:            contentMap?.productName || products[0]?.name || '',
      audience:               contentMap?.targetAudience || '',
      pageType,
      pageGoal,
      includeForm:            requestIntent.includeForm,
      additionalInstructions: additionalInstructions || ''
    }
  );

  console.log('[DesignIntent]', {
    pageGoal:    designIntent?.pageGoal || pageGoal,
    pageType:    designIntent?.pageType || pageType,
    includeForm: requestIntent.includeForm,
    sections:    Array.isArray(designIntent?.sectionOrder) 
                   ? designIntent.sectionOrder.length : 0,
    components:  Array.isArray(designIntent?.componentNeeds) 
                   ? designIntent.componentNeeds.length : 0
  });

  // ── STEP 4.35: Figma build plan ─────────────────────────────────────────────
  console.log('[4.35/7] Figma build plan...');
  rawFigmaBuildPlan = await claudeEngine.runGeneration(
    'figma-build-plan',
    JSON.stringify({
      contentMap,
      referenceMap,
      assetRules,
      designStrategy,
      designIntent,
      pageGoal,
      themeTokens,
      includeForm:            requestIntent.includeForm,
      includePricing:         requestIntent.includePricing,
      includeTestimonials:    requestIntent.includeTestimonials,
      includeTrust:           requestIntent.includeTrust,
      additionalInstructions: additionalInstructions || ''
    }),
    {
      productName:            contentMap?.productName || products[0]?.name || '',
      audience:               contentMap?.targetAudience || '',
      pageType,
      additionalInstructions: additionalInstructions || ''
    }
  );

  // ── STEP 4.5: Hero strategy ──────────────────────────────────────────────────
  console.log('[4.5/7] Hero strategy...');
  heroStrategy = await claudeEngine.runGeneration(
    'hero-strategy',
    JSON.stringify({
      contentMap,
      referenceMap,
      brandTheme:      brandResult?.theme || {},
      availableImages: finalImages.slice(0, 12),
      availableVideos: finalVideos.slice(0, 6)
    }),
    personality
  );
}

const figmaBuildPlan = figmaEngine.normalizeFigmaBuildPlan(rawFigmaBuildPlan);

console.log('[FigmaBuildPlan]', {
  fileName:        figmaBuildPlan?.fileName        || 'n/a',
  pages:           Array.isArray(figmaBuildPlan?.pages) ? figmaBuildPlan.pages.length : 0,
  desktopSections: figmaBuildPlan?.buildSummary?.desktopSectionCount || 0,
  mobileSections:  figmaBuildPlan?.buildSummary?.mobileSectionCount  || 0
});

    // ── STEP 5: Blueprint ──────────────────────────────────────────────────────
    // FIX 1: includeForm + pageGoal passed to blueprint
    // FIX 2: personality (with brand colors) flows in automatically
    // FIX 3: additionalInstructions passed through

if (generationMode === 'replicate-reference') {
  console.log('[5/7] Adapting blueprint from reference...');

  blueprint = await adaptBlueprintFromReference({
    referenceLayoutMap,
    contentMap,
    designStrategy,
    designIntent,
    preserveMode,
    strictLayoutMatch,
    requestIntent
  });
} else {
  console.log('[5/7] Blueprint...');
  blueprint = await claudeEngine.runGeneration(
    'blueprint',
    JSON.stringify({
      contentMap,
      referenceMap,
      assetRules,
      heroStrategy,
      themeTokens,
      designStrategy,
      designIntent,
      figmaBuildPlan,
      pageGoal,
      includeForm: requestIntent.includeForm,
      additionalInstructions: additionalInstructions || ''
    }),
    personality
  );
}

const userWantsLight = (additionalInstructions || '').toLowerCase().includes('light');
const userWantsDark  = (additionalInstructions || '').toLowerCase().includes('dark');

if (userWantsLight && blueprint?.colours) {
  blueprint.colours.mode    = 'light';
  blueprint.colours.bodyBg  = '#ffffff';
  blueprint.colours.heroBg  = '#ffffff';
  blueprint.colours.cardBg  = '#ffffff';
  blueprint.colours.textDark  = '#111827';
  blueprint.colours.textMid   = '#4b5563';
  blueprint.colours.border    = '#e5e7eb';
  blueprint.colours.section1  = '#ffffff';
  blueprint.colours.section2  = '#f8fafc';
  blueprint.colours.section3  = '#ffffff';
  console.log('[ThemeEngine] LIGHT FORCED from user instruction');
}

if (userWantsDark && blueprint?.colours) {
  blueprint.colours.mode    = 'dark';
  blueprint.colours.bodyBg  = '#0f172a';
  blueprint.colours.heroBg  = '#0f172a';
  blueprint.colours.cardBg  = '#111827';
  blueprint.colours.textDark  = '#ffffff';
  blueprint.colours.textMid   = '#cbd5e1';
  blueprint.colours.border    = 'rgba(255,255,255,.14)';
  blueprint.colours.section1  = '#0f172a';
  blueprint.colours.section2  = '#111827';
  blueprint.colours.section3  = '#020617';
  console.log('[ThemeEngine] DARK FORCED from user instruction');
}

// ── Strict CTA contract — Fresh Generate only ─────────────────
if (generationMode !== 'replicate-reference' && strictCtaConfig) {
  blueprint.strictCta = strictCtaConfig;

  blueprint.additionalInstructions = [
    blueprint.additionalInstructions || '',
    `
STRICT CTA CONTRACT:
- Generate exactly ${strictCtaConfig.count} conversion CTAs.
- CTA mode: ${strictCtaConfig.mode}.
- Use these CTA items in exact order:
${JSON.stringify(strictCtaConfig.items, null, 2)}
- CTA 1 must use item 1.
- CTA 2 must use item 2.
- CTA 3 must use item 3.
- Continue until all ${strictCtaConfig.count} CTAs are used.
- Do not invent CTA text.
- Do not invent CTA links.
- Do not create phone CTA.
- Do not create WhatsApp CTA.
- Footer legal/social links do not count as conversion CTAs.
`
  ].filter(Boolean).join('\n\n');
}

    // Merge personality tokens into blueprint
    if (blueprint && personality) {
      blueprint.typography       = personality.typography;
      blueprint.colours          = personality.colours;
      blueprint.themeFamily      = personality.themeFamily;
      blueprint.surfaceStyle     = personality.surfaceStyle;
      blueprint.visualMotif      = personality.visualMotif;
      blueprint.backgroundSystem = personality.backgroundSystem;
      blueprint.motionStrategy   = personality.motionStrategy;
    }

    // Merge brand engine colors into blueprint
    // ── Color priority: Brand colors > Category colors > Default ───────────────
blueprint.styles  = blueprint.styles  || {};
blueprint.colours = blueprint.colours || {};

const rawPrimary = extractedBrandColors.primary || brandResult?.theme?.primaryColor || null;
const rawAccent  = extractedBrandColors.accent  || brandResult?.theme?.accentColor || rawPrimary;

const badBrandColors = ['#000000', '#ffffff', '#fff', '#000', 'black', 'white'];

const isBadBrandColor = !rawPrimary || badBrandColors.includes(String(rawPrimary).toLowerCase());

const hasStrongTheme = false;



if (!isBadBrandColor && !hasStrongTheme) {
  blueprint.styles.primaryColor = rawPrimary;
  blueprint.styles.accentColor  = rawAccent;
  blueprint.colours.primary     = rawPrimary;
  blueprint.colours.accent      = rawAccent;

  console.log('[Color] Brand color applied:', rawPrimary);
} else {
  blueprint.styles.primaryColor = personality?.colours?.primary || blueprint.styles.primaryColor || '#7c3aed';
  blueprint.styles.accentColor  = personality?.colours?.accent  || blueprint.styles.accentColor  || '#22c55e';
  blueprint.colours.primary     = personality?.colours?.primary || blueprint.colours.primary || '#7c3aed';
  blueprint.colours.accent      = personality?.colours?.accent  || blueprint.colours.accent  || '#22c55e';

  console.log('[Color] Brand color skipped — using dynamic personality/category theme:', {
    rawPrimary,
    themeFamily: personality?.themeFamily,
    primary: blueprint.colours.primary,
    accent: blueprint.colours.accent
  });
}


   if (blueprint) {
  blueprint.referenceMap           = referenceMap || {};
  
  blueprint.assetRules             = assetRules   || {};
   blueprint.brandLogoUrl  = brandLogoData?.logoUrl  || null;
  blueprint.brandSiteName = brandLogoData?.siteName || contentMap?.productName || '';
  blueprint.hasSvgLogo    = brandLogoData?.hasSvgLogo || false;
  blueprint.pageGoal               = pageGoal;
  blueprint.trustLogos             = [];
  blueprint.includeForm            = requestIntent.includeForm;
  blueprint.formPlacement  = requestIntent.includeForm ? 'hero-right-column' : 'none';
  blueprint.heroMediaMode  = requestIntent.includeForm ? 'background-only' : 'split-visual';

// When form in hero, assign best video as forced background
 blueprint.heroBackgroundVideo = finalVideos[0]?.url || null;

blueprint.heroBackgroundImage = null;

blueprint.heroFormBgRule = blueprint.heroBackgroundVideo
  ? 'MANDATORY: Use heroBackgroundVideo as full-bleed autoplay muted loop video behind everything'
  : blueprint.heroBackgroundImage
  ? 'MANDATORY: Use heroBackgroundImage as full-bleed background-image with rgba(0,0,0,0.55) overlay'
  : 'MANDATORY: Use dark mesh gradient — radial-gradient(ellipse at 20% 50%, #1a0a4a, transparent), radial-gradient(ellipse at 80% 20%, #0a2a1a, transparent), #05070a';
  blueprint.includePricing         = requestIntent.includePricing;
  blueprint.includeTestimonials    = requestIntent.includeTestimonials;
  blueprint.includeTrust           = requestIntent.includeTrust;
  blueprint.additionalInstructions = additionalInstructions || '';
    blueprint.designStrategy         = designStrategy || {};
    blueprint.designBrief            = designBrief || {};
blueprint.forcedNarrativeMode    = forcedNarrativeMode || 'product-led';

blueprint.brandSectionReference = brandSectionReferencePrompt || '';
blueprint.brandDesignInstructions = brandDesignInstructions || '';
blueprint.competitorScreenshot = competitorScreenshot || null;
blueprint.competitorURL = competitorURL || '';
blueprint.themeTokens = themeTokens || null;

if (themeTokens) {
  blueprint.colours = {
    ...(blueprint.colours || {}),
    primary: themeTokens.primary,
    accent: themeTokens.accent,
    accentHover: themeTokens.accentHover,
    bodyBg: themeTokens.bodyBg,
    cardBg: themeTokens.cardBg,
    textDark: themeTokens.textDark,
    textMid: themeTokens.textMid,
    textLight: themeTokens.textLight,
    border: themeTokens.border
  };

  blueprint.backgroundSystem = {
    ...(blueprint.backgroundSystem || {}),
    bodyBase: themeTokens.bodyBg,
    hero: themeTokens.heroBg,
    section1: themeTokens.section1,
    section2: themeTokens.section2,
    section3: themeTokens.section3
  };

  console.log('[ThemeEngine] Locked into blueprint:', {
    source: themeTokens.source,
    accent: themeTokens.accent,
    mode: themeTokens.mode,
    confidence: themeTokens.confidence
  });
}

if (brandSectionReference?.bodyFont) {
  blueprint.typography = blueprint.typography || {};
  blueprint.typography.bodyFont = brandSectionReference.bodyFont;
}

if (brandSectionReference?.bodyBg) {
  blueprint.backgroundSystem = blueprint.backgroundSystem || {};
  blueprint.backgroundSystem.bodyBase = brandSectionReference.bodyBg;
}

    console.log('[Blueprint Strategy Check]', blueprint?.designStrategy?.primaryGoal);
}

let designReview;

if (generationMode === 'replicate-reference') {
  console.log('[ReplicateMode] Skipping design critic');
  designReview = {
    score: 100,
    verdict: 'reference-preserved',
    issues: [],
    strengths: ['Reference structure preserved by design']
  };
} else {
  console.log('[5.2/7] Design critic deferred — will run on actual output');

  designReview = {
    score: 85,
    verdict: 'planned',
    issues: [],
    strengths: ['Design planned from strategy and intent layers']
  };

  console.log('[PatternHistory] Saved pattern for future variation');
}

if (blueprint) {
  blueprint.designReview = designReview;
}
// ── FINAL THEME LOCK (CRITICAL FIX) ─────────────────────────
if (themeTokens) {
  console.log('[ThemeEngine] FORCE APPLYING THEME TOKENS');

  blueprint.colours = {
    primary: themeTokens.primary,
    accent: themeTokens.accent,
    accentHover: themeTokens.accentHover,
    bodyBg: themeTokens.bodyBg,
    cardBg: themeTokens.cardBg,
    textDark: themeTokens.textDark,
    textMid: themeTokens.textMid,
    textLight: themeTokens.textLight,
    border: themeTokens.border
  };

  blueprint.backgroundSystem = {
    bodyBase: themeTokens.bodyBg,
    hero: themeTokens.heroBg,
    section1: themeTokens.section1,
    section2: themeTokens.section2,
    section3: themeTokens.section3
  };

  // 🔴 THIS LINE IS CRITICAL
  blueprint.__themeLocked = true;
}

   // ── STEP 6: Build initial mediaPlan from scored images ─────────────────
    console.log('[6/8] Building initial mediaPlan...');
    const heroUrl0    = finalImages[0]?.url || null;
    const remaining0  = finalImages.slice(1).map(img => img.url).filter(Boolean);
    const logoImages0 = finalImages
      .filter(img => img.role === 'logo-or-icon')
      .map(img => img.url);

    mediaPlan = {
      hero: {
        primaryVisual:   heroUrl0,
        secondaryVisual: null,
        backgroundImage: null,
        backgroundVideo: null,
        accentVisuals:   []
      },
      trust:           { logos: logoImages0.slice(0, 8), badges: [] },
      productSections: remaining0.slice(0, 6).map((url, i) => ({
        sectionId: String(i + 1), primaryPreview: url, secondaryPreview: null, icons: []
      })),
      testimonials: { avatars: [] },
      demos:        { heroDemo: finalVideos[0]?.url || null, sectionDemos: [] },
      product:      remaining0.slice(0, 8),
      features:     [],
      logos:        logoImages0,
      fallbackStrategy: {
        heroMode:    heroUrl0          ? 'split-visual'  : 'css-generated',
        productMode: remaining0.length ? 'preview-panel' : 'css-shell'
      }
    };

    // ── STEP 6.5: Localize assets FIRST ────────────────────────────────────
    // ── STEP 6.5: Localizing external assets FIRST ────────────────────────────────────
console.log('[6.5/8] Localizing external assets...');

let localized = {
  downloaded: [],
  failed: [],
  publicBase: '',
  localizedMediaPlan: null,
  localizedAssetRules: null,
  urlMap: {} 
};

let localizedAssetRules = assetRules;

if (generationMode === 'replicate-reference') {
  console.log('[ReplicateMode] Localizing reference page assets...');
  // Use the same localization as fresh mode — just skip the quality evaluation
  const refImages = finalImages.filter(img =>
    img?.url && !img.url.includes('favicon') && !img.url.includes('qr')
  ).slice(0, 15).map(img => img.url);

  if (refImages.length > 0) {
    localized = await localizeAssets({
      sessionId: designSession.sessionId,
      mediaPlan,
      assetRules: {},
      extraUrls: refImages
    });
    mediaPlan  = localized.localizedMediaPlan  || mediaPlan;
    localizedAssetRules = localized.localizedAssetRules || assetRules;
    console.log('[ReplicateMode] Localized', localized.downloaded.length, 'assets');
  }
}

else {
  // ── Smart image selection — pick best by role + score + URL hints ──────────
  const allFiltered = finalImages.filter(img =>
    img?.url &&
    !img.url.includes('favicon') &&
    !img.url.includes('qr_code') &&
    !img.url.includes('qr-code') &&
    !img.url.includes('sprite') &&
    !img.url.includes('icon-font')
  );

  const relevantUrls = allFiltered
    .filter(img => img.source === 'unsplash' || img.source === 'pexels')
    .slice(0, 6)
    .map(img => img.url);
     const scrapedImages = allFiltered
    .filter(img => img.source !== 'unsplash' && img.source !== 'pexels')
    .filter(img => {
      const u = (img.url || '').toLowerCase();
      // Block garbage images before they reach Vision
      const blocked = [
        'cookie', 'favicon', 'sprite', 'icon-font', 'captcha',
        'og.png', 'og.jpg', 'og-image', 'opengraph', 'social-share',
        'meta-image', 'apple-icon', 'apple-touch',
        'pixel', 'beacon', 'tracking',
        'qr-code', 'qr_code', 'qrcode',
        'placeholder', 'blank', 'spacer', 'loader',
        'avatar-default', 'user-default', 'profile-default'
      ];
      if (blocked.some(b => u.includes(b))) return false;
      // Block very small images by URL pattern
      if (u.match(/[_-](16|32|48|64)x\1\./)) return false;
      return true;
    })
    .sort((a, b) => {
      const roleBoost = (img) => {
        if (img.role === 'ui') return 30;
        if (img.role === 'hero-or-photo') return 25;
        if (img.role === 'feature-illustration') return 20;
        if (img.role === 'person-or-team') return 15;
        if (img.role === 'logo-or-icon') return 10;
        const u = (img.url || '').toLowerCase();
        if (u.includes('dashboard') || u.includes('screenshot')) return 20;
        if (u.includes('hero') || u.includes('banner')) return 18;
        if (u.includes('logo') || u.includes('icon')) return 8;
        if (u.includes('qr') || u.includes('favicon')) return -50;
        return 0;
      };
      return (((b.brandScore || 0) + roleBoost(b)) - ((a.brandScore || 0) + roleBoost(a)));
    })
    .slice(0, 12)
    .map(img => img.url);

  const videoUrls = finalVideos
  .map(v => v.url)
  .filter(Boolean)
  .slice(0, 8);

const topImages = [...new Set([...relevantUrls, ...scrapedImages, ...videoUrls])];

  console.log('[SmartSelection]', {
    totalAvailable: allFiltered.length,
    relevantSearched: relevantUrls.length,
    scrapedSelected: scrapedImages.length,
    selectedForDownload: topImages.length
  });

    localized = await localizeAssets({
    sessionId: designSession.sessionId,
    mediaPlan,
    assetRules: {},
    extraUrls: topImages
  });

  mediaPlan = localized.localizedMediaPlan || mediaPlan;
  localizedAssetRules = localized.localizedAssetRules || assetRules;

  console.log('[AssetLocalization]', {
    downloaded: localized.downloaded.length,
    failed: localized.failed.length,
    publicBase: localized.publicBase,
    mediaPlanUpdated: !!localized.localizedMediaPlan,
    assetRulesUpdated: !!localized.localizedAssetRules
  });

  const downloadSuccessRate = localized.downloaded.length / Math.max(topImages.length, 1);
  const useCSsFallback = downloadSuccessRate < 0.5;

  if (useCSsFallback) {
    console.log('[ImageFallback] CDN blocked most images — switching to CSS visuals');

    mediaPlan.hero.primaryVisual = null;
    mediaPlan.hero.backgroundImage = null;
    mediaPlan.productSections = [];
    mediaPlan.product = [];
    mediaPlan.features = [];
    mediaPlan.logos = [];
    mediaPlan.fallbackStrategy = {
      heroMode: 'css-generated',
      productMode: 'css-shell'
    };
  }
}

    // ── STEP 7: Vision analysis on LOCAL files ──────────────────────────────
    console.log('[7/8] Analyzing images with GPT Vision (local paths)...');
    let imageContext   = [];
let placementHints = [];
let videoImgs      = finalVideos.map(v => v.url).filter(Boolean).slice(0, 6);

try {

  // ── Part 2: Analyze ALL downloaded images ────────────────────────────────
  const allDownloaded = localized.downloaded
    .filter(d => d.type === 'image' || d.type === 'gif' || d.type === 'video')
    .filter(d => !d.localUrl.endsWith('.svg'))
    .filter(d => {
      const orig = (d.originalUrl || '').toLowerCase();
      const blocked = ['cookie', 'og.', '-og.', 'opengraph', 'social', 'favicon',
                       'apple-icon', 'apple-touch', 'sprite', 'captcha', 'qr', 'pixel'];
      return !blocked.some(b => orig.includes(b));
    })
    .filter(d => {
      // Skip if file size suggests it's tiny (< 5KB usually means icon/sprite)
      try {
        const fs = require('fs');
        const stats = fs.statSync(d.localUrl.replace('/output/', 
          require('path').join(__dirname, 'output') + '/'));
        return stats.size > 5000; // skip files under 5KB
      } catch(e) {
        return true; // if can't check, keep it
      }
    }); // SVGs have no pixel content to analyze

 const localVisionInputs = allDownloaded
  .map(d => ({
    url:         d.localUrl,
    originalUrl: d.originalUrl,
    type:        d.type || 'image'
  }));

  const visionInputs = localVisionInputs.length > 0
    ? localVisionInputs
    : finalImages

  console.log('[Vision] Analyzing', visionInputs.length, 'images...');

  const analyzedImages = await imageAnalyzer.analyzeImages(
    visionInputs,
    contentMap?.productName || products[0]?.name || 'software'
  );

  // ── Part 3: Pick best per role from ALL analyzed images ──────────────────
  const byRole = {
  hero:    analyzedImages.filter(i => i.role === 'hero-visual'          && i.confidence > 0.5).sort((a,b) => b.confidence - a.confidence),
  ui:      analyzedImages.filter(i => i.role === 'ui-screenshot'        && i.confidence > 0.4).sort((a,b) => b.confidence - a.confidence),
  logo:    analyzedImages.filter(i => i.role === 'logo-or-icon'         && i.confidence > 0.4).sort((a,b) => b.confidence - a.confidence),
  person:  analyzedImages.filter(i => i.role === 'person-or-team'       && i.confidence > 0.4).sort((a,b) => b.confidence - a.confidence),
  feature: analyzedImages.filter(i => i.role === 'feature-illustration' && i.confidence > 0.4).sort((a,b) => b.confidence - a.confidence),
  video:   analyzedImages.filter(i => i.role === 'video-demo'           && i.confidence > 0.4).sort((a,b) => b.confidence - a.confidence),
};

imageContext = analyzedImages
  .filter(img => (img.confidence || 0) > 0.4 && img.isUsable !== false)
  .map(img => ({
    url:               img.url,
    role:              img.role,
    isWide:            img.isWide            || false,
    hasDarkBackground: img.hasDarkBackground || false,
    isTransparent:     img.isTransparent     || false,
    confidence:        Math.round((img.confidence || 0) * 100),
    description:       img.description       || ''
  }));

// Derive smart placement hints from image properties
placementHints = imageContext.map(img => {
  const hints = [];

  if (img.role === 'hero-visual' && img.isWide) {
    hints.push('BEST FOR: full-bleed hero background or large split panel');
  } else if (img.role === 'hero-visual' && !img.isWide) {
    hints.push('BEST FOR: hero right-side panel, avoid full-bleed');
  } else if (img.role === 'ui-screenshot') {
    hints.push('BEST FOR: product feature section, wrap in browser/device frame');
  } else if (img.role === 'feature-illustration') {
    hints.push('BEST FOR: feature card image or section background with overlay');
  } else if (img.role === 'logo-or-icon') {
    hints.push('BEST FOR: trust bar or partner logo strip, grayscale by default');
  } else if (img.role === 'person-or-team') {
    hints.push('BEST FOR: testimonial avatar or team section');
  }

  if (img.hasDarkBackground) {
    hints.push('HAS DARK BG: pair with dark sections OR use directly without overlay');
  } else {
    hints.push('HAS LIGHT BG: add dark overlay if used as background');
  }

  if (img.isTransparent) {
    hints.push('TRANSPARENT: safe to place on any background color');
  }

  return { ...img, placementHints: hints };
});

console.log('[ImageContext] Built context for', imageContext.length, 'images with placement hints');
sectionVisualStrategy = buildSectionVisualStrategy({
  contentMap,
  analyzedImages
});

console.log('[SectionVisualStrategy]', {
  hero: sectionVisualStrategy?.hero?.visualTreatment,
  sections: sectionVisualStrategy?.sections?.map(s => ({
    id: s.sectionId,
    visual: s.visualTreatment,
    realMedia: s.useRealMedia
  }))
});
try {
  if (blueprint && analyzedImages && analyzedImages.length > 0) {
    blueprint.sectionImageMap = buildSectionImageMap(analyzedImages, blueprint, contentMap);
  } else {
    if (blueprint) {
      blueprint.sectionImageMap = {
        hero: null,
        trust: { logos: [], strategy: 'metrics-strip' },
        testimonials: { avatars: [] }
      };
    }
    console.log('[SectionImageMap] Skipped — no images or no blueprint');
  }
} catch(e) {
  console.warn('[SectionImageMap] Wire-up failed:', e.message);
  if (blueprint) {
    blueprint.sectionImageMap = {
      hero: null,
      trust: { logos: [], strategy: 'metrics-strip' },
      testimonials: { avatars: [] }
    };
  }
}

// Build hard section-image assignment map
const sectionImageMap = buildSectionImageMap(analyzedImages, blueprint, contentMap);
blueprint.sectionImageMap = sectionImageMap;
console.log('[SectionImageMap] Built and injected into blueprint');

  // ── Build mediaPlan from best per role ────────────────────────────────────
  const heroImage   = byRole.hero[0]?.url || byRole.ui[0]?.url || null;
  const productImgs = byRole.ui.slice(0, 6).map(i => i.url);
  const featureImgs = [
  ...byRole.feature.map(i => i.url),
  ...byRole.ui.slice(2).map(i => i.url)
].slice(0, 12);

  const logoImgs    = byRole.logo.slice(0, 8).map(i => i.url);
  const personImgs  = byRole.person.slice(0, 4).map(i => i.url);
  videoImgs = [
  ...(byRole.video || []).map(i => i.url),
  ...finalVideos.map(v => v.url).filter(Boolean)
].filter(Boolean).slice(0, 6);

  const toLocal = (url) => url ? (localized.urlMap[url] || url) : null;

  mediaPlan = {
  hero: {
    primaryVisual:   toLocal(heroImage),
    secondaryVisual: toLocal(byRole.ui[1]?.url || null),
    backgroundImage: null,
    backgroundVideo: toLocal(videoImgs[0] || null),
    accentVisuals:   featureImgs.slice(0, 3).map(toLocal)
  },
    trust: {
      logos:  logoImgs.map(toLocal).filter(Boolean),
      badges: []
    },
    productSections: productImgs.map((url, i) => ({
      sectionId:        String(i + 1),
      primaryPreview:   toLocal(url),
      secondaryPreview: toLocal(productImgs[i + 1] || null),
      icons:            logoImgs.slice(0, 3).map(toLocal)
    })),
    testimonials: { avatars: personImgs.map(toLocal).filter(Boolean) },
    demos: {
  heroDemo:     toLocal(videoImgs[0] || null),
  sectionDemos: videoImgs.slice(1).map(toLocal).filter(Boolean)
},
    product:      productImgs.map(toLocal).filter(Boolean),
    features:     featureImgs.map(toLocal).filter(Boolean),
    logos:        logoImgs.map(toLocal).filter(Boolean),
    fallbackStrategy: {
      heroMode:    heroImage        ? 'split-visual'  : 'css-generated',
      productMode: productImgs.length ? 'preview-panel' : 'css-shell'
    }
  };

  if (finalVideos.length > 0) {
    mediaPlan.demos = {
      heroDemo:     finalVideos[0]?.url || null,
      sectionDemos: finalVideos.slice(1).map(v => v.url).filter(Boolean)
    };
  }

} catch(e) {
  console.warn('[7/8] Vision failed — using localized mediaPlan:', e.message);
  // mediaPlan already set from step 6 — continue safely
}

    // ── Ensure product sections always have images ──────────────────────────
    const heroUrl       = mediaPlan.hero?.primaryVisual || null;
    const remainingUrls = localized.downloaded
      .filter(d => d.type === 'image' && d.localUrl !== heroUrl)
      .map(d => d.localUrl)
      .filter(Boolean);

    if (!mediaPlan.productSections || mediaPlan.productSections.length === 0) {
      mediaPlan.productSections = remainingUrls.slice(0, 6).map((url, i) => ({
        sectionId: String(i + 1), primaryPreview: url, secondaryPreview: null, icons: []
      }));
    }
    if (!mediaPlan.product || mediaPlan.product.length < 3) {
      mediaPlan.product = remainingUrls.slice(0, 8);
    }

    

    // ── Logo filter — only real logos not product screenshots ───────────────
    // Use Vision results if available, else use URL hints + SVG files
const realLogoUrls = localized.downloaded
  .filter(d => {
    const u   = (d.originalUrl || '').toLowerCase();
    const ext = (d.ext || '').toLowerCase();
    // SVGs are almost always logos/icons
    if (ext === '.svg') return true;
    // URL pattern matching
    return u.includes('logo')    || u.includes('badge')  ||
           u.includes('partner') || u.includes('icon')   ||
           u.includes('fav')     || u.includes('brand');
  })
  .map(d => d.localUrl)
  .filter(Boolean);

    mediaPlan.trust = {
      logos:  realLogoUrls.length >= 2 ? realLogoUrls.slice(0, 8) : [],
      badges: []
    };

    // ── Brand colors into mediaPlan ─────────────────────────────────────────
    if (brandResult?.colors) {
      mediaPlan.hero       = mediaPlan.hero || {};
      mediaPlan.hero.color = brandResult.colors.vibrant
        || extractedBrandColors.primary
        || '#1a1a2e';
    }

    // ── Form gate ───────────────────────────────────────────────────────────
    if (!requestIntent.includeForm) {
      mediaPlan.form = null;
      console.log('[Form] Removed — includeForm is false');
    } else {
      mediaPlan.form = mediaPlan.form || {
        fields: ['name', 'email', 'phone', 'company'],
        cta: 'Request Trial'
      };
      console.log('[Form] Included — includeForm is true');
    }

    mediaPlan.additionalInstructions = additionalInstructions || null;
    mediaPlan.imageContext = placementHints || [];

    console.log('[MediaPlan]', {
      heroPrimary:     mediaPlan.hero?.primaryVisual   ? 'yes' : 'no',
      heroVideo:       mediaPlan.hero?.backgroundVideo ? 'yes' : 'no',
      productSections: mediaPlan.productSections?.length || 0,
      trustLogos:      mediaPlan.trust?.logos?.length  || 0,
      demoVideos:      mediaPlan.demos?.sectionDemos?.length || 0,
      form:            mediaPlan.form ? 'yes' : 'no'
    });

    // ── Enrich sections with all available media ───────────────────────────────
// Feature images → use in feature cards if product sections are empty
if (mediaPlan.features?.length > 0 && mediaPlan.productSections?.length < 2) {
  mediaPlan.productSections = mediaPlan.features.slice(0, 6).map((url, i) => ({
    sectionId:       String(i + 1),
    primaryPreview:  url,
    secondaryPreview: mediaPlan.features[i + 1] || null,
    icons:           []
  }));
  console.log('[MediaEnrich] Used feature images for product sections');
}

// Videos → use anywhere they fit, not just "demos"
const enrichedVideos = finalVideos.map(v => v.url).filter(Boolean);

if (enrichedVideos.length > 0) {
  // First video → hero background if no hero image
  if (!mediaPlan.hero?.primaryVisual && enrichedVideos[0]) {
    mediaPlan.hero.backgroundVideo = enrichedVideos[0];
    console.log('[MediaEnrich] Video used as hero background');
  }

  mediaPlan.demos = mediaPlan.demos || {};
  mediaPlan.demos.heroDemo = mediaPlan.demos.heroDemo || enrichedVideos[0] || null;
  mediaPlan.demos.sectionDemos = [
    ...(mediaPlan.demos.sectionDemos || []),
    ...enrichedVideos.slice(1)
  ].filter(Boolean);
}

// person images → also use in "team" or "about" sections not just testimonials
if (mediaPlan.testimonials?.avatars?.length > 3) {
  mediaPlan.teamPhotos = mediaPlan.testimonials.avatars.slice(2);
  console.log('[MediaEnrich] Team photos available:', mediaPlan.teamPhotos.length);
}

console.log('[MediaEnrich] Final media inventory:', {
  heroImage:     mediaPlan.hero?.primaryVisual    ? 'yes' : 'no',
  heroVideo:     mediaPlan.hero?.backgroundVideo  ? 'yes' : 'no',
  productImages: mediaPlan.productSections?.length || 0,
  featureImages: mediaPlan.features?.length        || 0,
  featureVideos: mediaPlan.featureVideos?.length   || 0,
  logos:         mediaPlan.logos?.length           || 0,
  people:        mediaPlan.testimonials?.avatars?.length || 0
});



// ── NOW build the string ──────────────────────────────────────────
const forcedImageInstruction = `
━━━━ IMAGE ASSIGNMENTS — ABSOLUTE LAW — READ FIRST ━━━━
HERO BG LAYER:      ${blueprint.sectionImageMap?.hero?.url        || 'NONE — CSS gradient'}
HERO FG LAYER:      ${blueprint.sectionImageMap?.heroFg?.url      || 'NONE — skip layer'}
HERO PRODUCT PANEL: ${blueprint.sectionImageMap?.heroProduct?.url || 'NONE — skip panel'}
${blueprint.sectionImageMap?.hero
  ? `hasDarkBg: ${blueprint.sectionImageMap.hero.hasDarkBackground} — ${blueprint.sectionImageMap.hero.hasDarkBackground ? 'no overlay needed' : 'add rgba(0,0,0,0.45) overlay'}`
  : ''}

${Object.entries(blueprint.sectionImageMap || {})
  .filter(([k]) => k.startsWith('feature_'))
  .map(([k,v]) => `FEATURE "${v.sectionName}": ${v.url}\n  → ${v.wrapInFrame ? 'wrap in browser-frame div' : 'use as img directly'}`)
  .join('\n')}

TRUST LOGOS: ${blueprint.sectionImageMap?.trust?.strategy === 'logo-grid'
  ? blueprint.sectionImageMap.trust.logos.slice(0,5).join(', ')
  : 'NONE — show metrics strip with real numbers only'}

TESTIMONIAL AVATARS: ${(blueprint.sectionImageMap?.testimonials?.avatars||[]).join(', ') || 'NONE — use initials circles'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`.trim();

    // ── STEP 7: Generate HTML ──────────────────────────────────────────────────
    // FIX 1: pageGoal + includeForm sent directly to code generation step
    // FIX 3: additionalInstructions sent directly to code generation step
    // The claudeEngine 'code' prompt MUST check includeForm before rendering any form
    console.log('[7/7] Generating ReactJS....');

let html;

if (generationMode === 'replicate-reference') {
  console.log('[ReplicateMode] Direct HTML copy with content replacement...');

  const cheerioLib = require('cheerio');
  const $ = cheerioLib.load(referencePageHtml);

  // Remove tracking scripts
  $('script').each((_, el) => {
    const src = $(el).attr('src') || '';
    const content = $(el).html() || '';
    if (
      src.includes('google') || src.includes('facebook') || src.includes('analytics') ||
      src.includes('pixel') || src.includes('gtm') || src.includes('reddit') ||
      src.includes('linkedin') || src.includes('twitter') ||
      content.includes('fbq') || content.includes('gtag') || content.includes('dataLayer') ||
      content.includes('reddit') || content.includes('pixel')
    ) {
      $(el).remove();
    }
  });

  // Remove tracking pixels and noscript
  $('img[src*="pixel"], img[src*="beacon"], img[width="1"], img[height="1"]').remove();
  $('noscript').remove();

  // Remove external backlinks — keep internal and anchor links
  $('a[href]').each((_, el) => {
    const href = $(el).attr('href') || '';
    if (
      href.startsWith('http') &&
      !href.includes('techjockey') &&
      !href.startsWith('#') &&
      !href.startsWith('mailto') &&
      !href.startsWith('tel')
    ) {
      $(el).attr('href', '#');
    }
  });

  // Replace page title
  const productName = contentMap?.productName || '';
  $('title').text(productName + ' | Techjockey');

  // Replace hero headline (largest h1)
  if ($('h1').length > 0) {
    $('h1').first().text(contentMap?.hero?.headline || productName);
  }

  // Replace hero subheadline
  const firstP = $('h1').first().nextAll('p').first();
  if (firstP.length) firstP.text(contentMap?.hero?.subheadline || '');

  // Replace CTA button texts
  $('a[class*="btn"], button[class*="btn"], a[class*="cta"], button[class*="cta"]').each((_, el) => {
    const text = $(el).text().trim();
    if (text && text.length > 0 && text.length < 60) {
      $(el).text(contentMap?.hero?.primaryCTA || 'Get Started');
    }
  });

  // Inject Techjockey logo in nav if not present
  const tjLogoHtml = '<img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28" alt="Techjockey" style="height:28px;opacity:.95;margin-left:12px" />';
  const navEl = $('header, nav').first();
  if (navEl.length && !navEl.html().includes('tj_logo')) {
    navEl.append(tjLogoHtml);
  }

  // Replace testimonials if available
  if ((contentMap?.testimonials || []).length > 0) {
    $('[class*="testimonial"], [class*="review"]').each((i, el) => {
      const t = contentMap.testimonials[i];
      if (!t) return;
      $(el).find('p, blockquote').first().text(t.quote || '');
      $(el).find('[class*="author"], [class*="name"], strong').first()
        .text(t.author + (t.designation ? ', ' + t.designation : ''));
    });
  }

  // ── Inject uploaded images into replicate page ──────────────────────
  if (uploadedImages && uploadedImages.length > 0) {
    const uploadedLocalPaths = uploadedImages.map(f => '/uploads/' + f.filename);

    // Replace hero image first
    const heroSection = $('section').first();
    const heroImg = heroSection.find('img').filter((_, el) => {
      const w = parseInt($(el).attr('width') || '0');
      const h = parseInt($(el).attr('height') || '0');
      const src = $(el).attr('src') || '';
      // Skip tiny images (icons, avatars) and tracking pixels
      return (w === 0 || w > 100) && (h === 0 || h > 100) && !src.includes('icon');
    }).first();

    if (heroImg.length) {
      heroImg.attr('src', uploadedLocalPaths[0]);
      heroImg.removeAttr('srcset');  // prevent browser overriding with srcset
      heroImg.removeAttr('data-src');
    }

    // Replace subsequent product/feature images
    if (uploadedLocalPaths.length > 1) {
      $('section img').each((i, el) => {
        const imgIdx = i + 1;
        if (imgIdx < uploadedLocalPaths.length) {
          const src = $(el).attr('src') || '';
          // Only replace meaningful images, not icons/logos
          const w = parseInt($(el).attr('width') || '0');
          const h = parseInt($(el).attr('height') || '0');
          if ((w === 0 || w > 150) && (h === 0 || h > 100) && !src.includes('logo') && !src.includes('icon')) {
            $(el).attr('src', uploadedLocalPaths[imgIdx]);
            $(el).removeAttr('srcset');
          }
        }
      });
    }

      $('a').each((_, el) => {
    const href = $(el).attr('href') || '';
    if (
      href.startsWith('http') &&
      !href.includes('techjockey.com')
    ) {
      $(el).attr('href', '#');
    }
  });

    console.log('[ReplicateMode] Injected', uploadedLocalPaths.length, 'uploaded images into HTML');
  }


  html = $.html();
  if (!html.includes('<!DOCTYPE')) {
    html = '<!DOCTYPE html>\n<html lang="en">\n<head><meta charset="UTF-8"><meta name="viewport" content="width=device-width, initial-scale=1.0"></head>\n<body>' + html + '</body></html>';
  }

  console.log('[ReplicateMode] HTML copied and cleaned, length:', html.length);
}
else {
  try {
    const accentVal  = blueprint?.styles?.accentColor  || blueprint?.colours?.accent  || '#ff6b00';
    const primaryVal = blueprint?.styles?.primaryColor || blueprint?.colours?.primary || '#1a1a2e';

    html = await generateSectionLibraryPage(
      contentMap, blueprint, mediaPlan, requestIntent, accentVal, primaryVal
    );
    console.log('[7/7] Section-library succeeded —', html.length, 'chars');
    
    // Content drift check
    const expectedName = contentMap?.productName || '';
    const expectedHeadline = (contentMap?.hero?.headline || '').substring(0, 25);
    if (expectedName && !html.includes(expectedName)) {
      console.warn('[ContentCheck] ⚠️ Product name NOT found in output:', expectedName);
    } else {
      console.log('[ContentCheck] ✓ Product name verified:', expectedName);
    }
    if (expectedHeadline && !html.includes(expectedHeadline)) {
      console.warn('[ContentCheck] ⚠️ Hero headline may be drifted');
    }
  } catch(sectionErr) {
    console.warn('[7/7] Section-library failed:', sectionErr.message, '— falling back to claudeEngine');
    html = await claudeEngine.runGeneration(
      'code',
      JSON.stringify({
        contentMap, designBrief,
        assetRules: localizedAssetRules,
        pageGoal, generationMode, themeTokens,
        sectionVisualStrategy,
        brandSectionReference: brandSectionReferencePrompt,
        brandDesignInstructions,
        strictCta: strictCtaConfig,
        includeForm: requestIntent.includeForm,
        additionalInstructions: additionalInstructions || ''
      }),
      blueprint,
      mediaPlan
    );
  }
}

    const jsxFilename = (products[0]?.name || 'page')
  .replace(/[^a-z0-9]/gi, '-').toLowerCase() + '-' + Date.now() + '.jsx';

fs.writeFileSync(path.join(__dirname, 'output', jsxFilename), html, 'utf8');

// ── JSX Completion Validator ────────────────────────────────────────────
function isJsxComplete(jsx) {
  if (!jsx || jsx.length < 2000) return false;
  const hasExport   = jsx.includes('export default LandingPage');
  const hasFooter   = jsx.toLowerCase().includes('footer') || jsx.includes('Techjockey');
  const openBraces  = (jsx.match(/{/g)  || []).length;
  const closeBraces = (jsx.match(/}/g)  || []).length;
  const balanced    = Math.abs(openBraces - closeBraces) < 30;
  return hasExport && hasFooter && balanced;
}

if (generationMode !== 'replicate-reference' && !isJsxComplete(html)) {
  console.warn('[JSX Validator] Output incomplete — running completion pass...');
  try {
    const completionFix = await claudeEngine.runGeneration('fix', html, {
      issues: [{
        area: 'completion',
        problem: 'Component is truncated. Footer missing. Techjockey logo missing from nav right side. Export statement missing or incomplete.',
        severity: 'high',
        fix: `Complete the component. Add:
1. Techjockey footer with: logo img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg", support@techjockey.com, social icons, copyright "© 2024 Techjockey Infotech Pvt. Ltd.", Privacy Policy + Terms links
2. Nav RIGHT side must have: <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28px" />
3. End with: export default LandingPage;`
      }],
      blueprint,
      personality
    });
    if (completionFix && completionFix.length > 1000) {
      html = completionFix;
      fs.writeFileSync(path.join(__dirname, 'output', jsxFilename), html, 'utf8');
      console.log('[JSX Validator] Completion pass applied and saved');
    }
  } catch(e) {
    console.warn('[JSX Validator] Completion pass failed:', e.message);
  }
}


// ── POST-GENERATION DESIGN CRITIQUE ──────────────────────────────────────
// Now running on actual generated output — gives real scores
let postGenReview = null;
if (generationMode !== 'replicate-reference') {
  console.log('[PostGenCritic] Running critique on actual generated output...');

  try {
     postGenReview = await designCritic.critiquePage({
      html:    html.substring(0, 16000),
      contentMap,
      blueprint,
      designDirection: {
        personality,
        designStrategy,
        designIntent
      }
    });

    console.log('[PostGenCritic]', {
      score:   postGenReview?.score   || 0,
      verdict: postGenReview?.verdict || '',
      issues:  Array.isArray(postGenReview?.issues) ? postGenReview.issues.length : 0
    });

    // If score is low — run a targeted fix pass
    const realLogoCount = mediaPlan?.trust?.logos?.length || 0;

// Filter out issues that would cause content invention
const hasTestimonials = (contentMap?.testimonials || []).length > 0;
const hasStats = !!(contentMap?.trust?.customerCount || contentMap?.trust?.socialProof);

const fixableIssues = (postGenReview?.issues || []).filter(issue => {
  const text = (issue.problem + ' ' + issue.fix + ' ' + issue.area).toLowerCase();

  // Skip logo issues when no logos available but testimonials/stats exist as alternative trust
  if (realLogoCount < 2 && (text.includes('logo') || text.includes('trust bar') || text.includes('trust signal'))) {
    if (hasTestimonials || hasStats) {
      console.log('[PostGenCritic] Skipping logo issue — testimonials/stats cover trust signal');
      return false;
    }
  }

  // Skip headline rewrite suggestions
  if (text.includes('headline') && (text.includes('rewrite') || text.includes('shorter') || text.includes('simplif'))) {
    return false;
  }

  // Skip issues that require invented content
  if (text.includes('invent') || text.includes('create logos') || text.includes('add customer')) {
    return false;
  }

  return true;
});

if ((postGenReview?.score || 0) < 0 &&
    fixableIssues.length > 0 &&
    fixableIssues.some(i => !['trust', 'logo'].some(w => (i.area || '').toLowerCase().includes(w)))) {

      console.log('[PostGenCritic] Score below 65 — running fix pass on these issues:');
      console.log(fixableIssues);

// ADD BLOCK 1 HERE:
const fixPrompt = `HARD RULES — NEVER VIOLATE:
- includeForm is ${requestIntent?.includeForm ? 'TRUE — a form is required' : 'FALSE — NEVER add a form anywhere on the page'}
- Do NOT add any form, input fields, or submit buttons if includeForm is false
- Return the COMPLETE page — ALL sections must be preserved
- Do NOT reduce section count or simplify the page
- Output must be at least as long as the input HTML
- Only fix the specific issues listed below

Issues to fix:
${JSON.stringify(fixableIssues, null, 2)}`;
      console.log(postGenReview.issues.slice(0, 3));

      try {
        const fixedHtml = await claudeEngine.runGeneration('fix', html, {
  issues:    fixableIssues,
  blueprint,
  personality,
  hardRules: [
    'NEVER remove the sticky nav at the top of the page',
    'NEVER change product name or hero headline',
    'NEVER invent new content — only fix the listed issues',
    'NEVER rewrite sections that are not listed in issues',
    'PRESERVE all existing sections exactly as they are'
  ]
});

        if (fixedHtml && fixedHtml.length > 1000) {
          html = fixedHtml;
          console.log('[PostGenCritic] Fix pass applied successfully');
        }
        if (!requestIntent?.includeForm) {
  const beforeLen = html.length;
  html = html.replace(/<form[\s\S]*?<\/form>/gi, '');
  html = html.replace(/<input[^>]*type=["']?(text|email|tel|number|password)["']?[^>]*>/gi, '');
  html = html.replace(/<button[^>]*type=["']?submit["']?[^>]*>[\s\S]*?<\/button>/gi, '');
  if (html.length < beforeLen) {
    console.log('[FormGate] ✓ Stripped form elements — includeForm is false');
  }
}
      } catch(fixErr) {
        console.warn('[PostGenCritic] Fix pass failed:', fixErr.message);
        // Keep original html — do not crash
      }
    }

  } catch(criticErr) {
    console.warn('[PostGenCritic] Critique failed:', criticErr.message);
    // Non-fatal — continue with original html
  }
}

// Also create a preview HTML wrapper
let previewHtml;
let previewFilename;
if (generationMode === 'replicate-reference') {
  // Replicate mode outputs plain HTML — no React wrapping needed
  previewFilename = jsxFilename.replace('.jsx', '-preview.html');
  previewHtml     = html;
} else {
  previewHtml     = buildReactPreviewWrapper(html, jsxFilename);
  previewFilename = jsxFilename.replace('.jsx', '-preview.html');
}
fs.writeFileSync(path.join(__dirname, 'output', previewFilename), previewHtml, 'utf8');

const filename = previewFilename; // for the response

    console.log('=== DONE ===', filename);

    let projectFolder = null;
    try {
      const folderName = generateReactProjectFolder(html, contentMap?.productName || 'landing-page');
      projectFolder = folderName;
    } catch(e) {
      console.warn('[ProjectGen] Failed:', e.message);
    }

    updateDesignSession(designSession.sessionId, {
  status: 'html-generated',
  workflow: {
    heroStrategy,
    blueprint,
    mediaPlan,
    figmaBuildPlan  // ← ADD THIS
  },
      outputs: {
        htmlFilename: filename,
        localizedAssetsBase: `/output/generated-assets/${designSession.sessionId}`
      }
    });

    appendSessionLog(designSession.sessionId, {
      type: 'workflow',
      step: 'html-generated',
      message: `HTML output generated: ${filename}`
    });

    // ── STEP 8: Auto-run MCP execution layer ──────────────────────────────────
    console.log('[8/8] Auto-running MCP execution layer...');

    let mcpExecution = {
      file:    null,
      desktop: null,
      mobile:  null,
      session: null,
      error:   null
    };

    try {
      const landingFileResult = await createLandingFile({
        sessionId: designSession.sessionId
      });

      const desktopBuildResult = await buildSectionsFromPlan({
        sessionId: designSession.sessionId,
        pageName: 'Desktop'
      });

      const mobileBuildResult = await buildSectionsFromPlan({
        sessionId: designSession.sessionId,
        pageName: 'Mobile'
      });

      const sessionSummary = await getSessionSummary({
        sessionId: designSession.sessionId
      });

      mcpExecution = {
        file:    landingFileResult,
        desktop: desktopBuildResult,
        mobile:  mobileBuildResult,
        session: sessionSummary,
        error:   null
      };

      appendSessionLog(designSession.sessionId, {
        type: 'workflow',
        step: 'mcp-auto-run',
        message: 'MCP execution layer completed successfully'
      });

      console.log('[MCP]', {
        fileId:          landingFileResult?.fileId || null,
        desktopSections: desktopBuildResult?.builtSectionCount || 0,
        mobileSections:  mobileBuildResult?.builtSectionCount  || 0,
        syncStatus:      sessionSummary?.figma?.syncStatus || 'unknown'
      });
    } catch (mcpError) {
      mcpExecution.error = mcpError.message;

      appendSessionLog(designSession.sessionId, {
        type: 'workflow',
        step: 'mcp-auto-run-failed',
        message: `MCP execution failed: ${mcpError.message}`
      });

      console.warn('[MCP] Auto-run failed:', mcpError.message);
    }

    

    const figmaSummary = figmaEngine.getFigmaExecutionSummary(
      figmaEngine.saveFigmaPlanSnapshot(
        figmaEngine.createDesignSessionShell({
          sessionId:        designSession.sessionId,
          productName:      contentMap?.productName || products[0]?.name || '',
          pageType,
          tokenProfileHint: designIntent?.tokenProfileHint || '',
          fileName:         figmaBuildPlan?.fileName || ''
        }),
        figmaBuildPlan
      )
    );

    res.json({
  success:     true,
  filename:    previewFilename,
  projectFolder: projectFolder,
  jsxFilename: jsxFilename,
  sessionId:   designSession.sessionId,

  designCritique: {
    score:          postGenReview?.score    || null,
    verdict:        postGenReview?.verdict  || null,
    issues:         postGenReview?.issues   || [],
    strengths:      postGenReview?.strengths || [],
    fixesAvailable: (postGenReview?.score || 100) < 70,
  },

  debug: {
    requestIntent, designIntent,
    figmaBuildPlan, figmaSummary, mcpExecution
  }
});

  } catch(e) {
    console.error('[generate] Error:', e.message);
    res.status(500).json({ success: false, error: e.message });
  }
});

// ── FEEDBACK: SAVE ONLY ───────────────────────────────────────────────────────
app.post('/feedback', feedbackUpload.single('screenshot'), async (req, res) => {
  try {
    const {
      sessionId,
      filename,
      jsxFilename,
      section,
      feedbackType,
      feedbackText,
      action
    } = req.body;

    if (!feedbackText || feedbackText.trim().length < 3) {
      return res.status(400).json({
        success: false,
        error: 'Feedback text is required.'
      });
    }

    const item = {
      id: 'fb_' + Date.now(),
      createdAt: new Date().toISOString(),
      sessionId: sessionId || null,
      filename: filename || null,
      jsxFilename: jsxFilename || null,
      section: normalizeSection(section),
      feedbackType: normalizeFeedbackType(feedbackType),
      feedbackText: feedbackText.trim(),
      action: action || 'save-only',
      screenshot: req.file ? `/uploads/feedback/${req.file.filename}` : null,
      status: 'stored'
    };

    const memory = readFeedbackMemory();
    memory.push(item);
    writeFeedbackMemory(memory);

    console.log('[Feedback] Stored:', {
      id: item.id,
      section: item.section,
      type: item.feedbackType,
      action: item.action,
      hasScreenshot: !!item.screenshot
    });

    res.json({
      success: true,
      feedbackId: item.id,
      stored: true,
      item
    });

  } catch (e) {
    console.error('[Feedback] Error:', e.message);
    res.status(500).json({
      success: false,
      error: e.message
    });
  }
});


// ── FEEDBACK: SAVE + REGENERATE SECTION ──────────────────────────────────────
app.post('/feedback/regenerate-section', feedbackUpload.single('screenshot'), async (req, res) => {
  try {
    const claudeEngine = require('./modules/claudeEngine');

    const {
      sessionId,
      filename,
      jsxFilename,
      section,
      feedbackType,
      feedbackText
    } = req.body;

    if (!jsxFilename) {
      return res.status(400).json({
        success: false,
        error: 'jsxFilename is required for section regeneration.'
      });
    }

    if (!feedbackText || feedbackText.trim().length < 3) {
      return res.status(400).json({
        success: false,
        error: 'Feedback text is required.'
      });
    }

    const targetSection = normalizeSection(section);
    const cleanFeedbackType = normalizeFeedbackType(feedbackType);

    const jsxPath = path.join(__dirname, 'output', jsxFilename);

    if (!fs.existsSync(jsxPath)) {
      return res.status(404).json({
        success: false,
        error: 'Original JSX file not found.'
      });
    }

    const originalJsx = fs.readFileSync(jsxPath, 'utf8');

    const feedbackItem = {
      id: 'fb_' + Date.now(),
      createdAt: new Date().toISOString(),
      sessionId: sessionId || null,
      filename: filename || null,
      jsxFilename: jsxFilename || null,
      section: targetSection,
      feedbackType: cleanFeedbackType,
      feedbackText: feedbackText.trim(),
      action: 'regenerate-section',
      screenshot: req.file ? `/uploads/feedback/${req.file.filename}` : null,
      status: 'stored-and-regenerating'
    };

    const memory = readFeedbackMemory();
    memory.push(feedbackItem);
    writeFeedbackMemory(memory);

    let revisedJsx = await claudeEngine.runGeneration(
      'section-regenerate',
      JSON.stringify({
        originalJsx,
        targetSection,
        feedbackType: cleanFeedbackType,
        feedbackText: feedbackText.trim(),
        screenshotPath: feedbackItem.screenshot || null
      }),
      {
        feedbackMemory: summarizeFeedbackForPrompt(20)
      }
    );

    if (!revisedJsx || revisedJsx.length < 1000) {
      throw new Error('Section regeneration returned invalid JSX.');
    }

    const revisionId = Date.now();

// STEP 1: clean old filename (VERY IMPORTANT)
const baseFilename = stripRevisionSuffix(jsxFilename);

// STEP 2: build clean new filenames
const revisedJsxFilename = safeFilename(
  `${baseFilename}-${targetSection}-revised-${revisionId}.jsx`
);

const revisedPreviewFilename = safeFilename(
  `${baseFilename}-${targetSection}-revised-${revisionId}-preview.html`
);

    try {
  validateGeneratedJsxOrThrow(html, jsxFilename);
} catch (err) {
  html = await repairInvalidJsx({
    claudeEngine,
    jsxCode: html,
    errorMessage: err.message,
    blueprint,
    contentMap
  });

  validateGeneratedJsxOrThrow(html, jsxFilename);
}

fs.writeFileSync(path.join(__dirname, 'output', jsxFilename), html, 'utf8');

const previewHtml = buildReactPreviewWrapper(html, jsxFilename);
fs.writeFileSync(path.join(__dirname, 'output', previewFilename), previewHtml, 'utf8');

    feedbackItem.status = 'regenerated';
    feedbackItem.revisedJsxFilename = revisedJsxFilename;
    feedbackItem.revisedPreviewFilename = revisedPreviewFilename;

    const latestMemory = readFeedbackMemory();
    const updatedMemory = latestMemory.map(item =>
      item.id === feedbackItem.id ? feedbackItem : item
    );
    writeFeedbackMemory(updatedMemory);

    console.log('[FeedbackRegenerate] Done:', {
      section: targetSection,
      revisedPreviewFilename
    });

    res.json({
      success: true,
      feedbackId: feedbackItem.id,
      revisedJsxFilename,
      revisedPreviewFilename,
      previewUrl: `/output/${revisedPreviewFilename}`,
      jsxUrl: `/output/${revisedJsxFilename}`
    });

  } catch (e) {
    console.error('[FeedbackRegenerate] Error:', e.message);
    res.status(500).json({
      success: false,
      error: e.message
    });
  }
});

app.get('/projects', (req, res) => {
  const projectFolders = fs.existsSync(path.join(__dirname, 'output', 'projects'))
    ? fs.readdirSync(path.join(__dirname, 'output', 'projects'))
    : [];

  const html = `<!DOCTYPE html>
<html>
<head>
  <title>Landing Pages</title>
  <style>
    body { font-family: Inter, sans-serif; background: #0f172a; color: #fff; padding: 40px; }
    h1 { margin-bottom: 32px; font-size: 28px; }
    .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(280px, 1fr)); gap: 16px; }
    .card { background: rgba(255,255,255,0.05); border: 1px solid rgba(255,255,255,0.1); 
            border-radius: 16px; padding: 24px; }
    .card h3 { margin-bottom: 12px; font-size: 16px; text-transform: capitalize; }
    .card a { display: inline-block; padding: 8px 18px; background: #ff6b00; 
              color: #fff; border-radius: 8px; text-decoration: none; font-size: 14px; }
  </style>
</head>
<body>
  <h1>Generated Landing Pages</h1>
  <div class="grid">
    ${projectFolders.map(name => `
      <div class="card">
        <h3>${name.replace(/-/g, ' ')}</h3>
        <a href="/projects/${name}" target="_blank">View Page</a>
      </div>
    `).join('')}
  </div>
</body>
</html>`;

  res.send(html);
});

app.get('/projects/:projectname', (req, res) => {
  const previewFiles = fs.readdirSync(path.join(__dirname, 'output'))
    .filter(f => f.startsWith(req.params.projectname) && f.endsWith('-preview.html'))
    .sort()
    .reverse();

  if (previewFiles.length === 0) {
    return res.status(404).send('Project not found');
  }

  res.sendFile(path.join(__dirname, 'output', previewFiles[0]));
});


// ── DOWNLOAD ───────────────────────────────────────────────────────────────────
app.get('/download/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'output', req.params.filename);
  if (fs.existsSync(filePath)) res.download(filePath);
  else res.status(404).json({ error: 'File not found' });
});

app.get('/download-project/:foldername', (req, res) => {
  const folderPath = path.join(__dirname, 'output', 'projects', req.params.foldername);
  if (!fs.existsSync(folderPath)) return res.status(404).json({ error: 'Project not found' });

  const archiver = require('archiver');
  const archive = archiver('zip', { zlib: { level: 9 } });
  res.setHeader('Content-Type', 'application/zip');
  res.setHeader('Content-Disposition', `attachment; filename="${req.params.foldername}.zip"`);
  archive.pipe(res);
  archive.directory(folderPath, req.params.foldername);
  archive.finalize();
});

// ── DOWNLOAD JSX ───────────────────────────────────────────────────────────────  ← ADD HERE
app.get('/download-jsx/:filename', (req, res) => {
  const filePath = path.join(__dirname, 'output', req.params.filename);
  if (fs.existsSync(filePath)) {
    res.setHeader('Content-Type', 'text/plain');
    res.download(filePath);
  } else {
    res.status(404).json({ error: 'JSX file not found' });
  }
});

// ── APPLY FIXES ────────────────────────────────────────────────────────────
app.post('/apply-fixes', async (req, res) => {
  try {
    const claudeEngine = require('./modules/claudeEngine');
    const { getDesignSession } = require('./modules/designStateStore');

    const { sessionId, selectedIssues } = req.body;
    if (!sessionId) throw new Error('sessionId required');

    const session = getDesignSession(sessionId);
    if (!session) throw new Error('Session not found: ' + sessionId);

    const jsxFilename = session.outputs?.htmlFilename?.replace('-preview.html', '.jsx');
    if (!jsxFilename) throw new Error('No JSX filename in session');

    const jsxPath = path.join(__dirname, 'output', jsxFilename);
    if (!fs.existsSync(jsxPath)) throw new Error('JSX file not found: ' + jsxFilename);

    const originalJSX = fs.readFileSync(jsxPath, 'utf8');

    const fixedJSX = await claudeEngine.runGeneration('fix', originalJSX, {
      issues:      selectedIssues || session.workflow?.blueprint?.designReview?.issues || [],
      blueprint:   session.workflow?.blueprint,
      personality: session.workflow?.personality,
      designBrief: session.workflow?.designBrief || {},
    });

    if (!fixedJSX || fixedJSX.length < 500) {
      throw new Error('Fix pass returned empty output');
    }

    const fixedFilename   = jsxFilename.replace('.jsx', '-v2.jsx');
    const previewFilename = fixedFilename.replace('.jsx', '-preview.html');

    fs.writeFileSync(path.join(__dirname, 'output', fixedFilename), fixedJSX);

    const previewHtml = buildReactPreviewWrapper(fixedJSX, fixedFilename);
    fs.writeFileSync(path.join(__dirname, 'output', previewFilename), previewHtml);

    console.log('[apply-fixes] Fixed version saved:', previewFilename);

    res.json({ success: true, filename: previewFilename, jsxFilename: fixedFilename });

  } catch(e) {
    console.error('[apply-fixes] Error:', e.message);
    res.status(500).json({ success: false, error: e.message });
  }
});
// ── START ───────────────────────────────────────────────────────────────────────
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log('\nServer running at http://localhost:' + PORT + '\n'));

process.on('uncaughtException',  err    => { console.error('UNCAUGHT:', err.message); console.error(err.stack); });
process.on('unhandledRejection', reason => { console.error('UNHANDLED:', reason); });
