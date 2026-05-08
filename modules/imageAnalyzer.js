require('dotenv').config();
const OpenAI = require('openai');
const fs   = require('fs');
const path = require('path');

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

async function analyzeImage(imageUrl, productName, assetType) {
  try {
    const isLocalhost = imageUrl.startsWith('http://localhost')
                     || imageUrl.startsWith('http://127.0.0.1');
    const isLocalPath = imageUrl.startsWith('/output')
                     || imageUrl.startsWith('/uploads')
                     || imageUrl.includes('/generated-assets/');
    const isLocal = isLocalhost || isLocalPath;

    const isVideo = assetType === 'video'
                 || imageUrl.endsWith('.mp4')
                 || imageUrl.endsWith('.webm')
                 || imageUrl.endsWith('.mov');
    const isGif   = assetType === 'gif'
                 || imageUrl.endsWith('.gif');

    // Videos cannot be sent to vision API — classify by URL heuristic
    if (isVideo) {
      return {
        url:               imageUrl,
        role:              'video-demo',
        confidence:        0.85,
        isUsable:          true,
        isAnimated:        true,
        isWide:            true,
        hasDarkBackground: true,
        isTransparent:     false,
        description:       'Video asset — suitable for demo sections, hero background, or feature walkthrough'
      };
    }

    let imageContent;

    if (isLocal) {
      try {
        let filePath = imageUrl;
        if (isLocalhost) {
          filePath = imageUrl.replace(/^https?:\/\/[^/]+/, '');
        }
        const absPath = path.join(__dirname, '..', filePath);
        const buffer  = fs.readFileSync(absPath);
        const base64  = buffer.toString('base64');
        const ext     = path.extname(absPath).toLowerCase().replace('.', '');
        const mime    = ext === 'png'  ? 'image/png'
                      : ext === 'webp' ? 'image/webp'
                      : ext === 'gif'  ? 'image/gif'
                      : 'image/jpeg';

        imageContent = {
          type: 'image_url',
          image_url: { url: 'data:' + mime + ';base64,' + base64, detail: 'low' }
        };
      } catch (readErr) {
        console.warn('[imageAnalyzer] Could not read local file:', imageUrl, readErr.message);
        return null;
      }
    } else {
      imageContent = {
        type: 'image_url',
        image_url: { url: imageUrl, detail: 'low' }
      };
    }

    const assetLabel = isGif ? 'ANIMATED GIF' : 'IMAGE';

    const res = await client.chat.completions.create({
      model: 'gpt-4o',
      max_completion_tokens: 300,
      messages: [{
        role: 'user',
        content: [
          imageContent,
          {
            type: 'text',
            text: 'You are a senior UX designer classifying a ' + assetLabel + ' for a landing page about "' + productName + '".\n\n' +
              'STEP 1 — Reject check. Return reject:true if this image is ANY of:\n' +
              '- A cookie consent banner or popup\n' +
              '- A navigation bar or header UI chrome\n' +
              '- A favicon or icon smaller than 32x32\n' +
              '- A QR code\n' +
              '- A CAPTCHA or security widget\n' +
              '- A loading spinner or progress bar\n' +
              '- A social share button strip\n\n' +
              'STEP 2 — If not rejected, classify into ONE role:\n' +
              '- hero-visual: wide lifestyle or product hero shot, good for large hero areas\n' +
              '- ui-screenshot: software dashboard, app screen, or product interface\n' +
              '- logo-or-icon: company logo, badge, certification mark, or partner logo\n' +
              '- person-or-team: human face, team photo, headshot, or portrait\n' +
              '- feature-illustration: diagram, illustration, or graphic explaining a feature\n' +
              '- video-demo: video thumbnail or frame showing product in action\n' +
              '- generic-stock: generic stock photo, background texture, or unclear content\n\n' +
              'STEP 3 — Score how well this image fits each section (0-10):\n' +
              '- hero: 10 if wide and has a clear subject, 0 if it is a logo or portrait\n' +
              '- features: 10 if it shows software UI or a product feature\n' +
              '- trust: 10 if it is a company logo or certification badge only, 0 otherwise\n' +
              '- testimonials: 10 if it shows a human face, 0 otherwise\n\n' +
              'Return ONLY valid JSON, no explanation:\n' +
              '{\n' +
              '  "reject": false,\n' +
              '  "rejectReason": null,\n' +
              '  "role": "one of the roles above",\n' +
              '  "confidence": 0.0,\n' +
              '  "isUsable": true,\n' +
              '  "hasDarkBackground": false,\n' +
              '  "isTransparent": false,\n' +
              '  "isWide": false,\n' +
              '  "isAnimated": ' + (isGif ? 'true' : 'false') + ',\n' +
              '  "sectionFit": { "hero": 0, "features": 0, "trust": 0, "testimonials": 0 },\n' +
              '  "description": "one sentence describing exactly what this image shows"\n' +
              '}'
          }
        ]
      }]
    });

    const text = (res.choices[0].message.content || '').replace(/```json|```/g, '').trim();
    const s = text.indexOf('{');
    const e = text.lastIndexOf('}');
    if (s === -1 || e === -1) return null;

    const result = JSON.parse(text.substring(s, e + 1));

    if (!result.sectionFit || typeof result.sectionFit !== 'object') {
      result.sectionFit = {
        hero:         result.role === 'hero-visual'   ? 8 : result.isWide ? 5 : 2,
        features:     result.role === 'ui-screenshot' ? 9 : result.role === 'feature-illustration' ? 7 : 3,
        trust:        result.role === 'logo-or-icon'  ? 10 : 0,
        testimonials: result.role === 'person-or-team' ? 10 : 0
      };
    }

    if (typeof result.reject !== 'boolean') {
      result.reject = false;
    }

    return { url: imageUrl, isAnimated: isGif, ...result };

  } catch (err) {
    console.warn('[imageAnalyzer] Failed to analyze:', imageUrl, '|', err.message);
    return {
      url:               imageUrl,
      role:              'generic-stock',
      confidence:        0.3,
      isUsable:          true,
      isAnimated:        false,
      hasDarkBackground: false,
      isTransparent:     false,
      isWide:            false,
      bestPlacement:     'feature-section',
      description:       'Could not analyze'
    };
  }
}

async function analyzeImages(images, productName) {
  if (!images || !images.length) return [];

  const inputs = images.map(img => {
    if (typeof img === 'string') return { url: img, type: 'image' };
    return {
      url:  img?.localUrl || img?.url,
      type: img?.type || 'image'
    };
  }).filter(i => i.url);

  console.log('[imageAnalyzer] Analyzing ' + inputs.length + ' assets with GPT-4o Vision...');

  const batchSize = 4;
  const results   = [];

  for (let i = 0; i < inputs.length; i += batchSize) {
    const batch = inputs.slice(i, i + batchSize);
    const batchResults = await Promise.all(
      batch.map(input => analyzeImage(input.url, productName, input.type))
    );
    results.push(...batchResults.filter(Boolean));

    if (i + batchSize < inputs.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  console.log('[imageAnalyzer] Analyzed ' + results.length + ' assets successfully');
  return results;
}

function assignImagesToSections(analyzedImages, contentMap) {
  const empty = {
    hero:            { primaryVisual: null, secondaryVisual: null, backgroundImage: null, backgroundVideo: null, accentVisuals: [] },
    trust:           { logos: [], badges: [] },
    productSections: [],
    testimonials:    { avatars: [] },
    demos:           { heroDemo: null, sectionDemos: [] },
    product:         [],
    features:        [],
    logos:           [],
    videos:          [],
    gifs:            [],
    fallbackStrategy: { heroMode: 'css-generated', productMode: 'css-shell' }
  };

  if (!analyzedImages || !analyzedImages.length) return empty;

  // ── HARD FILTER — remove anything Vision flagged as reject ──────────────────
  const valid = analyzedImages.filter(img => {
    if (!img || !img.url) return false;

    // Vision said reject
    if (img.reject === true) {
      console.log('[assignImages] Rejected by Vision:', img.url, '→', img.rejectReason || 'unknown');
      return false;
    }

    // URL-based safety net — catches what Vision misses
    const url = (img.url || '').toLowerCase();
    if (url.includes('cookie'))    { console.log('[assignImages] URL-rejected (cookie):', img.url); return false; }
    if (url.includes('favicon'))   { console.log('[assignImages] URL-rejected (favicon):', img.url); return false; }
    if (url.includes('qr-code'))   { console.log('[assignImages] URL-rejected (qr-code):', img.url); return false; }
    if (url.includes('qr_code'))   { console.log('[assignImages] URL-rejected (qr_code):', img.url); return false; }
    if (url.includes('captcha'))   { console.log('[assignImages] URL-rejected (captcha):', img.url); return false; }
    if (url.includes('sprite'))    { console.log('[assignImages] URL-rejected (sprite):', img.url); return false; }
    if (url.includes('icon-font')) { console.log('[assignImages] URL-rejected (icon-font):', img.url); return false; }

    // Too low confidence
    if ((img.confidence || 0) < 0.3) return false;

    return true;
  });

  console.log('[assignImages] Valid after filter:', valid.length, '/', analyzedImages.length);

  const used = new Set();

  // Helper — pick best image for a role using sectionFit scores
  function pickBest(sectionKey, allowedRoles, options = {}) {
    return valid
      .filter(img => !used.has(img.url))
      .filter(img => !options.mustBeWide || img.isWide === true)
      .filter(img => !options.mustBePerson || img.role === 'person-or-team')
      .filter(img => !options.mustBeLogo || img.role === 'logo-or-icon')
      .filter(img => allowedRoles.includes(img.role))
      .sort((a, b) => {
        const fitA = (a.sectionFit?.[sectionKey] || 0) + ((a.confidence || 0) * 3);
        const fitB = (b.sectionFit?.[sectionKey] || 0) + ((b.confidence || 0) * 3);
        return fitB - fitA;
      })[0] || null;
  }

  // ── HERO — wide image, not a logo, not a person ──────────────────────────────
  const heroImg = valid
    .filter(img => !used.has(img.url))
    .filter(img => img.role !== 'logo-or-icon' && img.role !== 'person-or-team')
    .filter(img => img.isWide === true)
    .sort((a, b) => {
      const scoreA = (a.sectionFit?.hero || 0) + (a.role === 'hero-visual' ? 5 : a.role === 'ui-screenshot' ? 3 : 1) + ((a.confidence || 0) * 3);
      const scoreB = (b.sectionFit?.hero || 0) + (b.role === 'hero-visual' ? 5 : b.role === 'ui-screenshot' ? 3 : 1) + ((b.confidence || 0) * 3);
      return scoreB - scoreA;
    })[0] || null;

  if (heroImg) {
    used.add(heroImg.url);
    console.log('[assignImages] Hero:', heroImg.url, '| role:', heroImg.role, '| wide:', heroImg.isWide);
  } else {
    console.log('[assignImages] No hero image found — CSS visual will be used');
  }

  // ── FEATURE SECTIONS — ui-screenshots and illustrations, one per product section ──
  const contentSections = contentMap?.productSections || [];
  const productSections = [];

  contentSections.forEach((section, i) => {
    const primary = pickBest('features',
      ['ui-screenshot', 'feature-illustration', 'hero-visual', 'generic-stock']
    );
    const secondary = primary
      ? pickBest('features', ['ui-screenshot', 'feature-illustration', 'hero-visual', 'generic-stock'])
      : null;

    if (primary) {
      used.add(primary.url);
      console.log('[assignImages] Feature', i + 1, '("' + (section.name || '') + '"):', primary.url);
    }
    if (secondary) used.add(secondary.url);

    productSections.push({
      sectionId:        String(i + 1),
      primaryPreview:   primary?.url   || null,
      secondaryPreview: secondary?.url || null,
      wrapInFrame:      primary?.role === 'ui-screenshot',
      hasDarkBg:        primary?.hasDarkBackground || false,
      icons:            []
    });
  });

  // ── TRUST LOGOS — ONLY logo-or-icon, never product screenshots ──────────────
  const logos = valid
    .filter(img => img.role === 'logo-or-icon')
    .filter(img => !used.has(img.url))
    .sort((a, b) => (b.sectionFit?.trust || 0) - (a.sectionFit?.trust || 0))
    .slice(0, 8);

  logos.forEach(img => used.add(img.url));
  console.log('[assignImages] Trust logos:', logos.length);

  // ── TESTIMONIAL AVATARS — ONLY person-or-team ───────────────────────────────
  const avatars = valid
    .filter(img => img.role === 'person-or-team')
    .filter(img => !used.has(img.url))
    .sort((a, b) => (b.sectionFit?.testimonials || 0) - (a.sectionFit?.testimonials || 0))
    .slice(0, 5);

  avatars.forEach(img => used.add(img.url));

  // ── VIDEOS and GIFs ─────────────────────────────────────────────────────────
  const videos = valid.filter(img => img.role === 'video-demo');
  const gifs   = valid.filter(img => img.isAnimated === true);

  // ── PRODUCT + FEATURES fallback pools ───────────────────────────────────────
  const productPool = valid
    .filter(img => ['ui-screenshot', 'feature-illustration', 'generic-stock'].includes(img.role))
    .filter(img => !used.has(img.url))
    .map(img => img.url);

  return {
    hero: {
      primaryVisual:   heroImg?.url  || null,
      secondaryVisual: null,
      backgroundImage: heroImg?.isWide ? heroImg.url : null,
      backgroundVideo: videos[0]?.url || null,
      accentVisuals:   [],
      hasDarkBackground: heroImg?.hasDarkBackground || false,
      overlayNeeded:   heroImg ? !heroImg.hasDarkBackground : false
    },
    trust:           { logos: logos.map(i => i.url), badges: [] },
    productSections,
    testimonials:    { avatars: avatars.map(i => i.url) },
    demos:           { heroDemo: videos[0]?.url || null, sectionDemos: videos.slice(1).map(i => i.url) },
    product:         productPool.slice(0, 8),
    features:        productPool.slice(0, 12),
    logos:           logos.map(i => i.url),
    videos:          videos.map(i => i.url),
    gifs:            gifs.map(i => i.url),
    fallbackStrategy: {
      heroMode:    heroImg ? 'split-visual' : 'css-generated',
      productMode: productPool.length > 0 ? 'preview-panel' : 'css-shell'
    }
  };
}

module.exports = { analyzeImages, analyzeImage, assignImagesToSections };