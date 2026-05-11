require('dotenv').config();
const OpenAI = require('openai');
const fs = require('fs');
const path = require('path');

const animations = require('../training-data/animations');

const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });

// ─── Load training data ───────────────────────────────────────────────────────
function loadFooter() {
  const p = path.join(__dirname, '../training-data/footer.html');
  return fs.existsSync(p) ? fs.readFileSync(p, 'utf8') : null;
}

function loadDesignMemory() {
  const p = path.join(__dirname, '../training-data/design-memory.json');
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {};
}

function loadBrandOverrides() {
  const p = path.join(__dirname, '../training-data/brand-overrides.json');
  return fs.existsSync(p) ? JSON.parse(fs.readFileSync(p, 'utf8')) : {};
}

function loadTrainingTemplates(productType) {
  const dir = path.join(__dirname, '../training-data');
  if (!fs.existsSync(dir)) return [];

  const htmlFiles = fs.readdirSync(dir)
    .filter((f) => f.endsWith('.html') && f !== 'footer.html');

  if (!htmlFiles.length) return [];

  const lc = (productType || '').toLowerCase();

  const scored = htmlFiles.map((file) => {
    const lower = file.toLowerCase();
    let score = 0;
    lc.split(' ').forEach((word) => {
      if (word.length > 3 && lower.includes(word)) score += 2;
    });
    return { file, score, html: fs.readFileSync(path.join(dir, file), 'utf8') };
  });

  scored.sort((a, b) => b.score - a.score);
  return scored.slice(0, 3);
}

function loadTrainingExample(productType) {
  const templates = loadTrainingTemplates(productType);
  if (templates.length) return { file: templates[0].file, html: templates[0].html };

  const dir = path.join(__dirname, '../training-data');
  if (!fs.existsSync(dir)) return null;
  const htmlFiles = fs.readdirSync(dir).filter(f => f.endsWith('.html') && f !== 'footer.html');
  if (!htmlFiles.length) return null;
  return { file: htmlFiles[0], html: fs.readFileSync(path.join(dir, htmlFiles[0]), 'utf8') };
}

function extractClassNamesFromHtml(html) {
  if (!html || typeof html !== 'string') return [];
  const classMatches = [...html.matchAll(/class=["']([^"']+)["']/gi)];
  const classSet = new Set();
  for (const match of classMatches) {
    (match[1] || '').split(/\s+/).map(c => c.trim()).filter(Boolean).forEach(cls => classSet.add(cls));
  }
  return Array.from(classSet);
}

function buildTemplateLearningPrompt(productType) {
  const templates = loadTrainingTemplates(productType);

  if (!templates.length) {
    return `No training templates found. Create a premium Techjockey landing page using consistent, production-ready semantic class names.`;
  }

  const templateSummaries = templates.map((tpl, idx) => {
    const classNames = extractClassNamesFromHtml(tpl.html).slice(0, 120);
    return `
TEMPLATE ${idx + 1}: ${tpl.file}
REUSABLE CLASS NAMES: ${classNames.join(', ') || 'No classes found'}
REFERENCE HTML:
${tpl.html.substring(0, 6000)}
`;
  }).join('\n\n');

  return `
Learn the design language from these existing Techjockey training templates.
- Reuse HTML section architecture and class naming patterns.
- Prefer existing class naming conventions.
- Output should feel like an evolved version of these templates.

${templateSummaries}
`;
}

async function callGPT(system, user, maxTokens) {
  const tokenLimit = maxTokens || 2500;
  const model = tokenLimit >= 10000 ? 'gpt-5.4' : 'gpt-5.4-mini';

  const res = await client.chat.completions.create({
    model,
    max_completion_tokens: tokenLimit,
    messages: [
      { role: 'system', content: system },
      { role: 'user', content: user }
    ]
  });

  if (!res?.choices?.[0]) throw new Error('No response from OpenAI');

  const output = res.choices[0].message?.content;
  if (!output) throw new Error('Empty response from OpenAI');

  console.log('\n[GPT] type call | chars:', output.length);
  return output.trim();
}


// ─── Helpers ──────────────────────────────────────────────────────────────────
function extractJSON(text) {
  if (!text || typeof text !== 'string') throw new Error('Could not parse JSON from empty response');
  const trimmed = text.trimEnd();
  if (trimmed.length > 15000) {
    // Very long response — likely truncated. Find last complete top-level section
    const lastCompleteSection = trimmed.lastIndexOf('},\n    {');
    if (lastCompleteSection > 5000) {
      text = trimmed.substring(0, lastCompleteSection + 1) + ']}]}';
    }
  }

  // ── Auto-repair truncated JSON ─────────────────────────────────────────────
  if (text.includes('{') && !text.trim().endsWith('}')) {
    const openBraces  = (text.match(/{/g)  || []).length;
    const closeBraces = (text.match(/}/g)  || []).length;
    const openArrays  = (text.match(/\[/g) || []).length;
    const closeArrays = (text.match(/\]/g) || []).length;

    // Close any open string first
    const lastChar = text.trimEnd().slice(-1);
    if (lastChar !== '"' && lastChar !== ',' && lastChar !== '{' && lastChar !== '[') {
      // Find last complete key-value and truncate there
      const lastComma = text.lastIndexOf(',');
      const lastBrace = text.lastIndexOf('}');
      if (lastComma > lastBrace) {
        text = text.substring(0, lastComma);
      }
    }

    text = text
      + ']'.repeat(Math.max(0, openArrays  - closeArrays))
      + '}'.repeat(Math.max(0, openBraces  - closeBraces));
  }
  // ──────────────────────────────────────────────────────────────────────────

  text = text.replace(/,\s*([\}\]])/g, '$1');

  const s = text.indexOf('{');
  const e = text.lastIndexOf('}');

  if (s !== -1 && e !== -1 && e > s) {
    try { return JSON.parse(text.substring(s, e + 1)); }
    catch (e2) {
      console.error('[JSON ERROR]', text.substring(s, s + 1000));
      throw new Error('Could not parse JSON from response');
    }
  }

  console.error('[INVALID RESPONSE]', text.substring(0, 1000));
  throw new Error('Could not parse JSON from response');
}

function sanitizeJSX(text) {
  if (!text) return text;
  // Strip markdown code fences
  let cleaned = text.replace(/```jsx|```javascript|```js|```/g, '').trim();
  // Remove any accidental HTML doc wrappers GPT might add
  cleaned = cleaned.replace(/<!DOCTYPE html>/gi, '');
  cleaned = cleaned.replace(/<html[^>]*>/gi, '');
  cleaned = cleaned.replace(/<\/html>/gi, '');
  // Ensure it ends with the export
  if (!cleaned.includes('export default')) {
  // Detect which component name to use
  const componentName = cleaned.includes('HeroSection') ? 'HeroSection' : 'LandingPage';
  cleaned = cleaned + `\nexport default ${componentName};`;
}
  return cleaned;
}

function safeJsonStringify(value, fallback = '{}') {
  try { return JSON.stringify(value ?? {}, null, 2); }
  catch (err) { return fallback; }
}

// ─── Main pipeline ────────────────────────────────────────────────────────────
async function runGeneration(type, data, extra, extra2) {

  // ══════════════════════════════════════════════════════════════
  // CONTENT MAP
  // ══════════════════════════════════════════════════════════════
  if (type === 'content-map') {
    const text = await callGPT(
      `You are a senior UX writer and product marketer at Techjockey, India's leading B2B software marketplace.
Read raw landing page content and structure it precisely.
You NEVER invent content. You NEVER cut content.
Map everything into the right slot. Put leftover content in extras.
Return ONLY valid JSON. No explanation. No markdown.`,

      `Analyze this landing page content and extract every piece into structured JSON.

RAW CONTENT:
${String(data || '').substring(0, 6000)}

TECHJOCKEY SECTION STRUCTURE:
1. Hero Banner
2. Trust / Awards
3. Product Section 1
4. Product Section 2 (if present)
5. Why Techjockey (optional)
6. Pricing / Plans
7. Testimonials
8. Lead Form
9. Techjockey in News
10. Footer (handled separately)

Rules:
- Multiple products → separate productSections.
- Plan info only inside pricing.plans.
- Lead capture questions only inside form.fields.

Return this exact JSON shape:
{
  "productName": "",
  "productCategory": "",
  "targetAudience": "",
  "contentVolume": "short | medium | long",
  "hero": { "headline": "", "subheadline": "", "supportingLine": "", "primaryCTA": "", "secondaryCTA": "", "wordCount": 0 },
  "trust": { "badges": [""], "socialProof": "", "customerCount": "" },
  "productSections": [{
    "name": "", "label": "", "headline": "", "description": "", "primaryCTA": "",
    "features": [{ "title": "", "description": "", "hasIcon": false }]
  }],
  "whyTechjockey": { "include": false, "headline": "", "points": [""] },
  "pricing": {
    "headline": "",
    "plans": [{ "name": "", "price": "", "originalPrice": "", "discount": "", "includes": [""], "cta": "" }],
    "emiText": ""
  },
  "testimonials": [{ "quote": "", "author": "", "designation": "", "company": "" }],
  "form": { "headline": "", "fields": [""], "primaryCTA": "" },
  "news": [{ "publication": "", "headline": "" }],
  "extras": []
}`,
      5000
    );
    return extractJSON(text);
  }

  // ══════════════════════════════════════════════════════════════
  // REFERENCE MAP
  // ══════════════════════════════════════════════════════════════
  if (type === 'reference-map') {
    const productName = extra?.productName || '';
    const example = loadTrainingExample(productName) || loadTrainingExample('');

    const text = await callGPT(
      `You are a senior design systems engineer.
Extract reusable design patterns from a reference landing page.
Do NOT copy content. ONLY extract structural, visual, spacing, CTA, component, and interaction rules.
Return ONLY valid JSON.`,

      `Extract a reusable reference map.

CONTENT MAP JSON:
${String(data || '').substring(0, 3500)}

REFERENCE HTML:
${example ? example.html.substring(0, 9000) : 'No reference available'}

Detect: carousel, tabs, accordions, sticky CTA bars, animated counters, reveal-on-scroll, hover cards, split hero, media panels, glass cards, marquee logo strips, progressive disclosure, section contrast shifts, alternating surfaces.

Return:
{
  "heroPattern": "",
  "sectionRhythm": "",
  "cardStyle": "",
  "ctaPattern": "",
  "pricingPattern": "",
  "footerMode": "",
  "spacingScale": [""],
  "mediaPattern": "",
  "productSectionPattern": "",
  "formPattern": "",
  "interactionPatterns": {
    "usesCarousel": false, "usesTabs": false, "usesAccordion": false,
    "usesStickyCta": false, "usesRevealAnimations": false, "usesHoverCards": false,
    "usesCounters": false, "usesMarqueeLogos": false
  },
  "surfacePatterns": {
    "alternatesBackgrounds": false, "usesDarkBandSections": false,
    "usesTintedSections": false, "usesGlassPanels": false, "usesEditorialWhitespace": false
  },
  "animationStyle": "",
  "componentPatterns": [""],
  "designNotes": [""]
}`,
      3000
    );
    return extractJSON(text);
  }

  // ══════════════════════════════════════════════════════════════
  // PERSONALITY
  // ══════════════════════════════════════════════════════════════
  if (type === 'personality') {
    const designMemory   = loadDesignMemory();
    const brandOverrides = loadBrandOverrides();

    const text = await callGPT(
      `You are the lead designer at Techjockey with 8 years of B2B landing page experience.
Decide the complete visual language from scratch based on the product.
Return ONLY valid JSON.

PRODUCT CATEGORY → THEME RULES (detect category from product name/description and apply):

cybersecurity | firewall | antivirus | compliance | network security:
  → themeFamily: "compliance-trust"
  → dark navy or charcoal background (#0f1923 or #111827)
  → red or orange accent
  → headingFont: "Inter" or "Barlow"
  → surfaceStyle: "layered"

AI | machine learning | generative AI | LLM | image generation | video generation:
  → themeFamily: "cinematic-ai"
  → deep purple or near-black background (#0d0d1a or #0a0014)
  → violet/cyan gradient accent
  → headingFont: "Plus Jakarta Sans" or "Syne"
  → surfaceStyle: "glass"

gaming | entertainment | esports | streaming | media:
  → themeFamily: "futuristic-labs"
  → pure black background (#050505)
  → neon green or electric blue accent
  → headingFont: "Rajdhani" or "Orbitron"
  → surfaceStyle: "neon-glow"

healthcare | medical | wellness | pharma | mental health:
  → themeFamily: "compliance-trust"
  → clean white or very light blue background
  → calm blue or teal accent (#0077b6 or #0fa)
  → headingFont: "Nunito" or "DM Sans"
  → surfaceStyle: "flat"

finance | fintech | banking | insurance | investment:
  → themeFamily: "enterprise-grid"
  → dark navy or white background
  → green accent (#16a34a)
  → headingFont: "Inter" or "IBM Plex Sans"
  → surfaceStyle: "soft-shadow"

HR | productivity | project management | collaboration | CRM:
  → themeFamily: "editorial-b2b"
  → clean white background
  → blue or indigo accent (#4f46e5)
  → headingFont: "Plus Jakarta Sans"
  → surfaceStyle: "soft-shadow"

developer tools | DevOps | API | infrastructure | cloud:
  → themeFamily: "developer-minimal"
  → dark background (#0f0f0f or #1a1a1a)
  → green or cyan accent
  → headingFont: "JetBrains Mono" or "IBM Plex Mono"
  → surfaceStyle: "hard-shadow"

education | e-learning | training | courses | LMS:
  → themeFamily: "editorial-b2b"
  → bright white or warm background
  → orange or yellow accent
  → headingFont: "Nunito" or "Poppins"
  → surfaceStyle: "flat"

ecommerce | retail | marketplace | D2C | shopping:
  → themeFamily: "creative-studio"
  → white or warm background
  → orange accent (#ff6b00)
  → headingFont: "Montserrat"
  → surfaceStyle: "soft-shadow"

real estate | property | construction | architecture:
  → themeFamily: "editorial-b2b"
  → cream or white background
  → gold accent (#c9a96e)
  → headingFont: "Playfair Display"
  → surfaceStyle: "editorial-clean"

RULE: Detect which category above best matches the product.
Apply that theme exactly. Never default to purple gradient unless AI category.
Never use same theme for different categories.`,

      `Decide the complete visual personality from scratch.

PRODUCT CONTENT:
${String(data || '').substring(0, 3200)}

EXTRA INSTRUCTIONS: ${extra?.extraInstructions || 'None'}
PRODUCT NAME: ${extra?.productName || 'Not specified'}
TARGET AUDIENCE: ${extra?.audience || 'Not specified'}

TECHJOCKEY DESIGN MEMORY:
${safeJsonStringify(designMemory)}

BRAND DATA:
${safeJsonStringify(brandOverrides)}

Rules:
- Do not default all products to the same dark premium SaaS style.
- Create a visually distinct theme based on product character.
- Avoid repetitive purple-gradient defaults unless genuinely justified.

Return:
{
  "productType": "",
  "buyer": "",
  "emotion": "",
  "reasoning": "",
  "themeFamily": "enterprise-grid | cinematic-ai | developer-minimal | compliance-trust | creative-studio | futuristic-labs | editorial-b2b | operational-dashboard",
  "surfaceStyle": "flat | glass | layered | soft-shadow | hard-shadow | neon-glow | tinted-panels | editorial-clean",
  "visualMotif": "grid-lines | mesh-gradient | radial-glow | dashboard-panels | floating-orbs | data-stream | editorial-clean | abstract-shapes | precision-lines",
  "typography": {
    "headingFont": "", "bodyFont": "", "headingWeight": 700,
    "heroFontSize": "72px | 56px | 48px | 40px | 36px",
    "heroFontSizeReason": "", "letterSpacing": "tight | normal | wide", "lineHeight": "1.1 | 1.3 | 1.5"
  },
  "colours": {
    "primary": "#hex", "accent": "#hex", "accentHover": "#hex",
    "bodyBg": "#hex", "cardBg": "#hex", "textDark": "#hex",
    "textMid": "#hex", "textLight": "#hex", "border": "#hex", "colourReason": ""
  },
  "backgroundSystem": { "bodyBase": "", "hero": "", "section1": "", "section2": "", "section3": "" },
  "layout": {
    "heroStyle": "centered-text-only | split-left-text-right-image | split-left-image-right-text | full-bleed-with-overlay",
    "heroBackground": "", "heroReason": "",
    "featureStyle": "3-col-grid | 2-col-grid | icon-left-list | alternating-sections | tabbed-features | accordion-features | spotlight-plus-grid | split-panel-list",
    "featureReason": "", "sectionSpacing": "tight | normal | generous",
    "usesDarkSections": true, "darkSectionFor": "", "bannerFeatureChips": true, "heroFormPreferred": true
  },
  "ctaStyle": { "shape": "pill | rounded | sharp", "size": "large | medium", "style": "solid | gradient | outline", "primaryText": "" },
  "motionStrategy": {
    "allowAnimations": true, "style": "subtle | premium | bold",
    "heroEntrance": "fade-up | stagger | scale-in | none",
    "cardHover": "lift | glow | border-shift | none",
    "sectionReveal": "fade-up | stagger | slide-up | none"
  },
  "imageryDirection": "",
  "formatStrategy": { "hero": "jpeg | png", "logos": "svg", "ui": "png", "photos": "jpeg", "featureIcons": "svg | png" },
  "designPersonality": ""
}`,
      4000
    );
    return extractJSON(text);
  }
  // ══════════════════════════════════════════════════════════════
// DESIGN STRATEGY
// ══════════════════════════════════════════════════════════════
if (type === 'design-strategy') {
  const input = typeof data === 'string' ? data : safeJsonStringify(data || {});
  const context = extra || {};

  const text = await callGPT(
    `You are a senior conversion designer and landing page strategist at Techjockey.
Your job is to decide the strategic design direction before layout or HTML begins.
Do NOT generate HTML. Do NOT generate CSS. Return ONLY valid JSON.`,

    `Create the design strategy for this landing page.

INPUT:
${input.substring(0, 7000)}

CONTEXT:
${safeJsonStringify(context)}

Return this exact JSON:
{
  "primaryGoal": "lead-gen | awareness | comparison | purchase | demo-booking",
  "buyerStage": "cold | warm | solution-aware | decision-ready",
  "conversionPriority": "high | medium | low",
  "narrativeMode": "product-led | proof-led | pain-agitate-solve | comparison-led | editorial",
  "trustStrategy": "logos-first | stats-first | testimonial-first | badge-first",
  "emotionalTone": "confident | futuristic | safe | efficient | premium",
  "visualDominance": "hero-product | hero-message | hero-form | hero-proof",
  "ctaAggression": "soft | medium | strong",
  "sectionDensity": "airy | balanced | dense",
  "recommendedHeroStyle": "split | centered | editorial | immersive",
  "mustHaveMoments": [""],
  "avoidPatterns": [""],
  "reasoning": ""
}`,
    2200
  );

  return extractJSON(text);
}

    // ══════════════════════════════════════════════════════════════
  // DESIGN INTENT
  // ══════════════════════════════════════════════════════════════
  if (type === 'design-intent') {
    const input = typeof data === 'string' ? data : safeJsonStringify(data || {});
    const context = extra || {};
    const designMemory = loadDesignMemory();

    const text = await callGPT(
      `You are a senior product designer and UX strategist at Techjockey.
Your job is to convert structured landing page inputs into a clear design intent before any visual execution happens.
Do NOT generate HTML. Do NOT generate CSS. Do NOT jump into implementation.
Return ONLY valid JSON.`,

      `Create a design intent spec for this landing page.

INPUT:
${input.substring(0, 7000)}

CONTEXT:
${safeJsonStringify(context)}

TECHJOCKEY DESIGN MEMORY:
${safeJsonStringify(designMemory)}

FORM PLACEMENT RULE:
Read blueprint.formPlacement:
- "hero-right-column" → plan the lead form as the hero RIGHT column. Hero must be 2-column grid.
- "none" → do NOT plan any form section anywhere on the page.


Rules:
- This is a planning layer, not a code layer.
- Don't use any video/image/GIF/png
- use video in background if required
- Decide UX priority, section flow, component needs, layout direction, and design constraints.
- Keep the output deterministic and practical for later Figma planning.
- Use the actual available sections from the input.
- Do not invent pricing/testimonials/news if not present.
- Prefer design-system-first thinking over one-off custom layouts.

Return this exact JSON shape:
{
  "pageGoal": "lead-generation | product-discovery | demo-booking | comparison | awareness",
  "pageType": "single-product | category | mixed",
  "audience": "",
  "primaryUserIntent": "",
  "conversionPriority": "high | medium | low",
  "contentDensity": "light | medium | heavy",
  "brandDirection": {
    "tone": "",
    "visualStyle": "",
    "trustLevel": "high | medium | low",
    "motionLevel": "none | subtle | moderate"
  },
  "sectionOrder": [""],
  "sectionPurpose": [
    {
      "id": "",
      "purpose": "",
      "priority": "high | medium | low"
    }
  ],
  "componentNeeds": [
    {
      "sectionId": "",
      "componentType": "",
      "variantHint": "",
      "notes": ""
    }
  ],
  "layoutStrategy": {
    "hero": "",
    "features": "",
    "proof": "",
    "pricing": "",
    "form": ""
  },
  "designConstraints": {
    "mustUseDesignSystem": true,
    "preferFigmaFirst": true,
    "avoidDirectHtmlReasoning": true,
    "needsStrongAboveFold": true,
    "needsTrustSignalsEarly": true
  },
  "tokenProfileHint": "",
  "figmaReadySummary": ""
}`,
      3500
    );

    return extractJSON(text);
  }

  // ══════════════════════════════════════════════════════════════
  // FIGMA BUILD PLAN
  // ══════════════════════════════════════════════════════════════
  if (type === 'figma-build-plan') {
    const input = typeof data === 'string' ? data : safeJsonStringify(data || {});
    const context = extra || {};
    const designMemory = loadDesignMemory();

    const text = await callGPT(
      `You are a senior product designer and design systems architect at Techjockey.
Your job is to convert structured landing page strategy into a Figma-ready build plan.
Do NOT generate HTML. Do NOT generate CSS. Do NOT describe visuals vaguely.
Return ONLY valid JSON.`,

      `Create a Figma build plan for this landing page.

INPUT:
${input.substring(0, 3500)}

CONTEXT:
${safeJsonStringify(context)}

TECHJOCKEY DESIGN MEMORY:
${safeJsonStringify(designMemory)}

Rules:
- This is for Figma execution, not frontend code.
- Plan both desktop and mobile.
- Use section order from designIntent.
- Use actual content sections from contentMap.
- Prefer design-system-first composition over one-off freeform layouts.
- Each section must have a clear frame purpose, layout direction, and component strategy.
- Do not invent sections that are not supported by the input.
- Hero, trust, product/features, pricing, testimonials, form, and news should only appear if supported by content.
- Keep output deterministic and implementation-friendly.

Return this exact JSON shape (compact — desktop only):
{
  "fileName": "",
  "pageType": "single-product | category | mixed",
  "designSystemMode": "design-system-first",
  "tokenProfileHint": "",
  "pages": [
    {
      "name": "Desktop",
      "frame": { "name": "", "width": 1440, "heightHint": 5200, "grid": "12-col", "sectionSpacing": 96 },
      "sections": [
        {
          "id": "", "type": "", "frameName": "",
          "componentStrategy": "compose-from-design-system | mixed | custom-light",
          "layoutMode": "horizontal | vertical | grid | stacked",
          "variantHint": "", "priority": "high | medium | low", "notes": ""
        }
      ]
    }
  ],
  "buildSummary": {
    "desktopSectionCount": 0,
    "mobileSectionCount": 0,
    "sharedComponentFamilies": [""],
    "figmaExecutionNotes": [""]
  }
}`,
      6000
    );

    return extractJSON(text);
  }
  // ══════════════════════════════════════════════════════════════
  // BLUEPRINT
  // ══════════════════════════════════════════════════════════════
  if (type === 'blueprint') {
    const blueprintInput = typeof data === 'string' ? data : safeJsonStringify(data || {});
    const personality    = extra || {};

    const _brief = (typeof data === 'string' ? {} : data)?.designBrief || {};
const _bTemp = _brief.visitorTemperature || 'warm';
const _bCTA  = _brief.heroCTA || 'Get started';
const _bProof = _brief.proofType || 'logos';

let _convSeq = '';
if (_bTemp === 'cold') {
  _convSeq = 'COLD TRAFFIC SEQUENCE:\n1. NAV — logo + one CTA only\n2. HERO — outcome headline, 3-second read\n3. PROOF STRIP — 3 logos beats 8 logos\n4. FEATURES — 3 differentiators only\n5. TESTIMONIALS — job title matters more than quote length\n6. CTA — repeat hero CTA + softer option';
} else if (_bTemp === 'hot') {
  _convSeq = 'HOT TRAFFIC SEQUENCE:\n1. HERO — lead with proof: customer count or named win\n2. COMPARISON — vs top 2 alternatives\n3. PRICING — with ROI framing\n4. GUARANTEE — trial or refund policy\n5. CTA — immediate action';
} else {
  _convSeq = 'WARM TRAFFIC SEQUENCE:\n1. HERO — match the ad message. Visitor expects continuity.\n2. HOW IT WORKS — 3-step process, under 60 seconds to understand\n3. PROOF — industry-specific if available\n4. FEATURES — focus on 1-2 features that drove the click\n5. CTA — See it in action over Sign up now';
}

let _proofLine = '';
if (_bProof === 'logos') _proofLine = '3-6 recognisable logos. If fewer than 3, use metric strip instead.';
else if (_bProof === 'numbers') _proofLine = 'Lead with metrics strip: 3 bold stats (users, time saved, rating).';
else if (_bProof === 'quotes') _proofLine = '1 large hero testimonial above fold. Author photo + full name + title required.';
else _proofLine = 'Show certification badges and compliance marks near the hero CTA.';

const _convArch = '━━━━ CONVERSION ARCHITECTURE ━━━━\n' +
  'VISITOR TEMPERATURE: ' + _bTemp + '\n' + _convSeq + '\n\n' +
  'SINGLE CTA RULE: Every button = "' + _bCTA + '". No variations. No secondary CTAs.\n' +
  'CTA color = accent at 100% opacity. Never gray. Never outlined.\n' +
  'Mobile CTA = always full-width.\n\n' +
  'PROOF TYPE: ' + _bProof + ' → ' + _proofLine + '\n\n' +
  'HERO QUALITY CHECK:\n' +
  '✓ Answers: What is this? in the headline\n' +
  '✓ Answers: Who is it for? in the subheadline\n' +
  '✓ Answers: What do I do next? in the CTA\n' +
  '━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━\n';

// Pre-build conversion architecture block — no nested template literals
const brief = (typeof data === 'string' ? {} : data)?.designBrief || {};
const bTemp = brief.visitorTemperature || 'warm';
const bProof = brief.proofType || 'logos';
const bCTA = brief.heroCTA || 'Get started';

let conversionSequence = '';
if (bTemp === 'cold') {
  conversionSequence = 'COLD TRAFFIC SEQUENCE:\n1. NAV — logo + one CTA only\n2. HERO — outcome headline, 3-second read\n3. PROOF STRIP — 3 logos > 8 logos\n4. FEATURES — 3 differentiators only\n5. TESTIMONIALS — job title matters more than quote\n6. CTA — repeat hero CTA + softer option';
} else if (bTemp === 'hot') {
  conversionSequence = 'HOT TRAFFIC SEQUENCE:\n1. HERO — lead with proof: customer count or named win\n2. COMPARISON — vs top 2 alternatives\n3. PRICING — with ROI framing\n4. GUARANTEE — trial or refund policy\n5. CTA — immediate: Start free today';
} else {
  conversionSequence = 'WARM TRAFFIC SEQUENCE:\n1. HERO — match the ad message. Visitor expects continuity.\n2. HOW IT WORKS — 3-step process, under 60 seconds\n3. PROOF — industry-specific if available\n4. FEATURES — focus on 1-2 features that drove the click\n5. CTA — See it in action over Sign up now';
}

let proofInstruction = '';
if (bProof === 'logos') proofInstruction = '3-6 recognisable logos. If fewer than 3, use metric strip instead.';
else if (bProof === 'numbers') proofInstruction = 'Lead with metrics strip: 3 bold stats (users, time saved, rating).';
else if (bProof === 'quotes') proofInstruction = '1 large hero testimonial above fold. Author photo + full name + title required.';
else proofInstruction = 'Show certification badges and compliance marks near the hero CTA.';

const conversionArchBlock = '\n\u2501\u2501\u2501\u2501 CONVERSION ARCHITECTURE \u2501\u2501\u2501\u2501\nVISITOR TEMPERATURE: ' + bTemp + '\n' + conversionSequence + '\n\nSINGLE CTA RULE: Every button = "' + bCTA + '". No variations.\nCTA color = accent at 100% opacity. Never gray. Never outlined.\nMobile CTA = always full-width.\n\nPROOF TYPE: ' + bProof + '\n' + proofInstruction + '\n\nHERO QUALITY CHECK:\n- Answers: What is this? in the headline\n- Answers: Who is it for? in the subheadline\n- Answers: What do I do next? in the CTA\n\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\u2501\n';

    const text = await callGPT(
      `You are a senior UI/UX designer. The visual personality is already decided.
Design the page section by section. Return ONLY valid JSON.`,

      `Design a section-by-section blueprint.
      Use designStrategy as a hard decision layer.
The blueprint must reflect:
- primaryGoal
- narrativeMode
- trustStrategy
- visualDominance
- ctaAggression
- sectionDensity
- recommendedHeroStyle

Do not create a generic SaaS page structure.
Section order, emphasis, and rhythm must change based on strategy.
Adjacent sections should not all use the same visual pattern.

${conversionArchBlock}

INPUT JSON:
${blueprintInput.substring(0, 7000)}

VISUAL PERSONALITY:
${safeJsonStringify(personality)}

Rules:
- Multiple productSections → separate product blocks with alternating layouts.
- Stronger visual contrast between consecutive sections.
- If 5+ features → tabs, accordion, or spotlight-plus-grid.
  1. TABS with preview panel (interactive, good for complex features)
  2. Split alternating panels (visual-first, good when images exist)
  3.  Do NOT use horizontal marquee / auto-scrolling strip for product features.
     → Use this pattern: a horizontal auto-scrolling strip of feature boxes
     → Each box has: feature title (bold) + short description (muted)
     → CSS: display:flex, gap:24px, auto-scroll animation left
     → Duplicate boxes once for seamless loop
     → Box style: padding:24px 28px, border-radius:16px, border:1px solid rgba(255,255,255,0.08), min-width:280px, background:rgba(255,255,255,0.04)
     → Container: overflow:hidden, position:relative
     → Use this when: section has many small features, space is tight, or a scrolling rhythm fits the page energy
  4. NEVER use a flat static card grid when 5+ features exist
- If 4+ testimonials → carousel or grid.
- If many verified customer logos exist → use a static flex-wrap logo grid.
- Do NOT use logo marquee unless user explicitly asks for moving logo strip.
- If logos are weak, tiny, random, or not clearly customer logos → skip logo cards and use a clean metrics strip.
- At least 2 visually expressive sections.
- Hero must feel dynamic above the fold.
- No two consecutive sections same background.


Return:
{
  "rhythmPlan": {
    "opening": "loud | balanced | quiet",
    "middle": "modular | immersive | proof-led",
    "ending": "conversion | credibility | summary"
  },
  "repetitionBreakers": [""],

  Rules:
- Read designStrategy from the input JSON and obey it.
- If designStrategy.visualDominance is hero-message, make the hero content-first.
- If designStrategy.visualDominance is hero-product, make the hero visual-first.
- If designStrategy.trustStrategy is logos-first, place trust early and keep it prominent.
- If designStrategy.ctaAggression is soft, avoid over-repeating CTA blocks.
- If designStrategy.ctaAggression is strong, create a more conversion-led rhythm.
- Use different layout energy between opening, middle, and ending sections.

  "pageTitle": "",
  "metaDescription": "",
  "styles": {
    "accentColor": "${(personality?.colours?.accent) || (personality?.colours?.primary) || '#4F46E5'}",
    "bodyBg": "${personality?.colours?.bodyBg || '#ffffff'}",
    "headingFont": "${personality?.typography?.headingFont || 'Inter'}",
    "bodyFont": "${personality?.typography?.bodyFont || 'Inter'}",
    "themeFamily": "${personality.themeFamily || ''}",
    "surfaceStyle": "${personality.surfaceStyle || ''}",
    "visualMotif": "${personality.visualMotif || ''}",
    "googleFontsUrl": "https://fonts.googleapis.com/css2?family=...&display=swap"
  },
  "sections": [
    { "id": "hero", "type": "hero", "layout": "split-left | split-right | full-bleed | centered", "bgColor": "", "surfaceStyle": "", "backgroundTreatment": "", "heroComposition": { "mode": "text-left-media-right | background-overlay | css-visual-only" }, "renderMode": "layered | split-visual | static", "animationMode": "fade-up | stagger | none", "designNote": "" },
   { "id": "trust", "type": "trust-bar", "layout": "metrics-strip | static-logo-grid | proof-cards | none", "bgColor": "", "renderMode": "static | none", "designNote": "" }
    { "id": "products", "type": "product-sections", "layout": "stacked | alternating", "bgColor": "", "renderMode": "tabs-with-preview | spotlight-plus-grid | split-panel-list | accordion-with-visual", "featurePresentation": { "mode": "spotlight-plus-grid | tabs-with-preview | split-panel-list | accordion-with-visual | icon-grid | standard-grid", "primaryFeatureTitle": "", "visualPriority": "high", "useIcons": true, "usePreviewPanel": true }, "designNote": "" },
    { "id": "why-techjockey", "type": "why-techjockey", "layout": "grid | icon-list", "bgColor": "", "renderMode": "card-grid | counters", "designNote": "" },
    { "id": "pricing", "type": "pricing-cart", "layout": "card-center | comparison", "bgColor": "", "renderMode": "highlighted-card | comparison-table", "designNote": "" },
    { "id": "testimonials", "type": "testimonials", "layout": "3-card-grid | carousel-static", "bgColor": "", "renderMode": "slider | grid | spotlight", "designNote": "" },
    { "id": "form", "type": "lead-form", "layout": "split | centered-card", "bgColor": "", "renderMode": "floating-card | static", "designNote": "" },
    { "id": "news", "type": "media-logos", "layout": "marquee-strip | horizontal-logos", "bgColor": "", "renderMode": "marquee | logo-strip", "designNote": "" }
  ],
  "designPersonality": "${personality.designPersonality || ''}",
  "imageryDirection": "${personality.imageryDirection || ''}"
}`,
      5000
    );
    return extractJSON(text);
  }

  // ══════════════════════════════════════════════════════════════
  // IMAGE MAP
  // ══════════════════════════════════════════════════════════════
  if (type === 'image-map') {
    const media  = extra || {};
    const images = Array.isArray(media.images) ? media.images : [];
    const videos = Array.isArray(media.videos) ? media.videos : [];

    if (!images.length && !videos.length) {
      return { hero: null, heroVideo: null, product: [], features: [], testimonials: [], logos: [], demos: [] };
    }

    const text = await callGPT(
      `You are a senior UI designer. Assign media assets to landing page sections. Return ONLY valid JSON.`,
      `Classify and assign assets.

      PRODUCT CATEGORY → THEME RULES (follow strictly):
- cybersecurity / firewall / antivirus / compliance → dark enterprise theme, deep navy/charcoal bg, red/orange accent
- AI / machine learning / generative / creative tools → futuristic dark theme, purple/violet/cyan gradient, bold typography
- gaming / entertainment / media → cinematic dark theme, vibrant neon accents, high contrast
- healthcare / medical / wellness → clean light theme, blue/green palette, trust-first layout  
- finance / fintech / banking → professional light/dark, green accent, data-forward layout
- ecommerce / retail / marketplace → warm energetic theme, orange/yellow accent, product-forward
- HR / productivity / project management → friendly light theme, blue/purple, feature-grid layout
- developer tools / DevOps / API → minimal dark theme, monospace hints, technical aesthetic
- education / e-learning → bright friendly theme, multi-color accents, approachable layout
- real estate / property → luxury editorial theme, gold/cream palette, image-forward

VARIATION RULE — CRITICAL:
Every generation MUST vary at least 3 of these from previous pages:
- Hero layout direction (split-left vs split-right vs centered vs full-bleed)
- Background color sequence between sections
- Feature presentation style (tabs vs accordion vs spotlight vs grid)
- Typography pairing (heading font must change per category)
- Card style (glass vs flat vs layered vs outlined)
- CTA shape (pill vs rounded vs sharp)

ASSET RULES: ${typeof data === 'string' ? data : safeJsonStringify(data || {})}
IMAGES: ${safeJsonStringify(images, '[]')}
VIDEOS: ${safeJsonStringify(videos, '[]')}



- hero → single best wide hero image (NOT a QR code, icon, or logo)
- heroVideo → single best overview video or null
- product → UI screenshots, dashboards
- features → illustrations, diagrams
- testimonials → human faces
- logos → logos, badges (small square images)
- demos → walkthrough videos


Return:
{
  "hero": "single URL or null",
  "heroVideo": "single URL or null",
  "product": ["url"],
  "features": ["url"],
  "testimonials": ["url"],
  "logos": ["url"],
  "demos": ["url"]
}`
,


      3000
    );

    const result = extractJSON(text);
    if (Array.isArray(result.hero))      result.hero      = result.hero[0]      || null;
    if (Array.isArray(result.heroVideo)) result.heroVideo = result.heroVideo[0] || null;

    return {
      hero:         result.hero      || null,
      heroVideo:    result.heroVideo || null,
      product:      Array.isArray(result.product)      ? result.product      : [],
      features:     Array.isArray(result.features)     ? result.features     : [],
      testimonials: Array.isArray(result.testimonials) ? result.testimonials : [],
      logos:        Array.isArray(result.logos)        ? result.logos        : [],
      demos:        Array.isArray(result.demos)        ? result.demos        : []
    };
  }


  const REFERENCE_PAGES = {
  'hr':           'https://www.hibob.com',
  'crm':          'https://www.hubspot.com',
  'security':     'https://www.crowdstrike.com',
  'ai':           'https://www.runway.ml',
  'collaboration':'https://www.notion.so',
  'support':      'https://www.intercom.com',
  'video':        'https://www.loom.com',
  'design':       'https://www.figma.com',
  'marketing':    'https://www.mailchimp.com',
  'analytics':    'https://mixpanel.com'
};

// Pick reference based on product category
const category = '';
const referenceUrl = Object.keys(REFERENCE_PAGES)
  .find(key => category.includes(key));

let referenceScreenshot = null;
if (referenceUrl && REFERENCE_PAGES[referenceUrl]) {
referenceScreenshot = null;
}
  

  // ══════════════════════════════════════════════════════════════
  // CODE — single call, no chunking
  // ══════════════════════════════════════════════════════════════
  if (type === 'code') {
    const blueprint  = extra  || {};
    const imageMap   = extra2 || {};
    const payload = typeof data === 'string' ? extractJSON(data) : (data || {});
const contentMap = payload?.contentMap || payload || {};

    const productType    = blueprint.productType || blueprint.designPersonality || contentMap?.productName || '';
    const strictCta = payload?.strictCta || blueprint?.strictCta || null;
    const themeTokens = payload?.themeTokens || blueprint?.themeTokens || null;
    const sectionVisualStrategy =
  payload?.sectionVisualStrategy ||
  blueprint?.sectionVisualStrategy ||
  null;
    const brandSectionReference = payload?.brandSectionReference || blueprint?.brandSectionReference || '';
const brandDesignInstructions = payload?.brandDesignInstructions || blueprint?.brandDesignInstructions || '';
    const templatePrompt = buildTemplateLearningPrompt(productType);

    const isReplicate =
  contentMap?.generationMode === 'replicate-reference' ||
  blueprint?.source === 'reference-adapted';

       const referencePageHtml = contentMap?.referencePageHtml || '';

const replicateInstruction = isReplicate
  ? `

  ${themeTokens ? `
━━━━ LOCKED THEME TOKENS — MUST FOLLOW ━━━━
${safeJsonStringify(themeTokens)}

Rules:
- These tokens are the final color source of truth.
- Use themeTokens.accent for CTA buttons, icons, highlights and active states.
- Use themeTokens.bodyBg as body/page background.
- Use themeTokens.heroBg as hero background unless hero media requires overlay.
- Use themeTokens.cardBg for cards.
- Use themeTokens.textDark and themeTokens.textMid for text.
- Do not invent #ff6b00, purple gradients, neon colors, or random dark themes unless present in themeTokens.
- Do not override these colors with category defaults.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
` : ''}

  ${brandSectionReference ? `
━━━━ BRAND SECTION REFERENCE — HIGHEST DESIGN PRIORITY ━━━━
${brandSectionReference}

${brandDesignInstructions || ''}

ABSOLUTE RULES:
- Use this brand reference to decide section spacing, card style, CTA shape, visual rhythm and light/dark surface treatment.
- Do not fall back to generic orange/black SaaS theme when brand reference exists.
- Do not create excessive vertical gaps around feature images.
- Do not use unrelated scraped media.
- Techjockey nav/footer rules still win.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
` : ''}

━━━━ REPLICATE MODE — STRICT REFERENCE LOCK ━━━━
This is NOT a fresh design task.
This is a reference replication task.

You must imitate the REFERENCE PAGE'S styling language, layout rhythm, and component style.

REFERENCE PAGE HTML (trimmed):
${referencePageHtml.substring(0, 12000)}

Hard rules:
- Do NOT create a new premium SaaS design language
- Do NOT introduce dark gradient hero unless the reference uses it
- Do NOT introduce floating cards unless the reference uses them
- Do NOT introduce tabs, spotlight sections, glassmorphism, or animated premium blocks unless the reference uses them
- Follow the reference page's visual style closely:
  - same overall section rhythm
  - same header/navbar feel
  - same hero composition style
  - same trust-section style
  - same feature-section style
  - same pricing block style
  - same testimonial section style
  - same footer feel
- Prefer the reference page's class naming style and structural simplicity
- Keep styling closer to the reference than to any previously learned fancy template
- When in doubt, UNDER-DESIGN rather than invent

Allowed changes:
- replace content text
- replace images
- replace product labels
- adapt missing sections minimally

Forbidden:
- inventing a brand-new theme
- changing the reference’s visual personality
- changing the reference from light/simple into dark/premium
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
  : '';

  const strictCtaRulesBlock = (!isReplicate && strictCta?.enabled)
  ? `
━━━━ STRICT CTA CONTRACT — FRESH GENERATE ONLY ━━━━
You must follow this CTA config exactly:

${safeJsonStringify(strictCta)}

Definition of conversion CTA:
- Navbar CTA
- Hero CTA
- Product section CTA
- Feature section CTA
- Pricing CTA
- Sticky CTA
- Final CTA section button
- Any button/link asking the user to enquire, contact, buy, get quote, demo, start, consult, or talk to expert

Rules:
1. Generate exactly ${strictCta.count} conversion CTAs across the full page.
2. Use CTA items in exact order:
${safeJsonStringify(strictCta.items || [])}
3. CTA 1 must use items[0].text and items[0].href.
4. CTA 2 must use items[1].text and items[1].href.
5. Continue until CTA ${strictCta.count}.
6. Do not reuse the same CTA item for all buttons unless frontend provided same values.
7. Do not create phone CTAs.
8. Do not create WhatsApp CTAs.
9. Do not create random CTA links.
10. Do not create random CTA text.
11. Footer legal links, footer social links, email links, and logo links do not count as conversion CTAs.
12. If CTA count is 0, generate zero conversion CTAs.
13. Do not exceed the CTA count.

Mode-specific:
- If mode is "form", every conversion CTA must point to "#lead-form" and use fixed form CTA text from items.
- If mode is "external", every conversion CTA must use the matching frontend-provided item text and href.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`
  : '';

 const { buildAnimationBlock } = require('../training-data/animations');
const animBlock = buildAnimationBlock(
  blueprint.themeFamily || blueprint.styles?.themeFamily || 'default',
  blueprint.productCategory || contentMap?.productCategory || ''
);

// FIND the entire animationLibraryBlock const and replace with:
const animationLibraryBlock = `
━━━━ CINEMATIC ANIMATION SYSTEM — LOAD AND USE ━━━━

CDN LOADERS — paste these into your component's useEffect or as <script> tags in the style block:
${animBlock.cdnLoaders}

CSS — paste this entire block into your css template literal:
${animBlock.css}

JS — paste this entire initCinematic/initDramatic function into useEffect(() => { ... }, []):
${animBlock.js}

CLASS USAGE — apply these EXACT classes to the right elements:

HERO:
- .hero-cinematic-bg      → the hero background image/video div (gets slow zoom-out)
- .float-ambient          → floating decorative elements (stat cards, orbs)
- .float-drift            → slowly drifting background blobs
- .split-text             → hero H1 (chars animate in individually)
- .btn-magnetic           → primary CTA button (mouse follow effect)
- data-depth="0.15"       → hero foreground elements (parallax up slower)
- data-depth="0.4"        → hero background layer (parallax up faster)

IMAGES/MEDIA:
- .scene-expand           → product images that EXPAND from 75% to 100% width on scroll
- .zoom-reveal            → any image/video that zooms from scale(1.15) to scale(1) on enter
- .depth-foreground       → overlaid UI cards on top of product images
- .depth-background       → background image that moves slower than content

SECTIONS:
- .clip-reveal            → entire section revealed from bottom via clip-path
- .stagger-parent         → any grid/list where children stagger in sequentially
- .pin-scene              → section that stays pinned for 600px of scroll (cinematic hold)

TEXT:
- .text-reveal-mask + .text-reveal-inner  → line-by-line text reveal (wrap each line)
- .split-text             → character-by-character H1 animation

CARDS:
- .card-3d-stack          → 3 stacked cards with translateZ depth illusion
- .glass-card             → frosted glass card (dark sections)
- .hover-lift             → card hover state (translateY -6px + shadow)

COUNTERS:
- data-count="10000" data-suffix="+" data-prefix=""  → animated number counter

SCROLL SECTIONS:
- .h-scroll-track inside section  → horizontal scroll section (pinned, moves left)

INTENSITY: ${animBlock.intensity.toUpperCase()} for this product category
${animBlock.intensity === 'bold' ? `
USE THESE IN EVERY SECTION:
- Hero: .hero-cinematic-bg + .split-text on H1 + .btn-magnetic on CTA
- Every product image: .scene-expand wrapper + .zoom-reveal on inner img
- Every section: at least 1 element with data-depth for parallax
- Features grid: .stagger-parent on the grid
- One section: .pin-scene for cinematic hold effect
- Dark sections: .glass-card for all cards
- Stats: data-count on all numbers` : ''}
${animBlock.intensity === 'moderate' ? `
USE THESE PER SECTION:
- Hero: .float-ambient on decorative elements + .zoom-reveal on hero image
- Product images: .zoom-reveal wrapper
- Section entries: [data-depth] on background elements
- Grids: .stagger-parent` : ''}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;

     const sectionRules = `
     - Trust logos available: ${blueprint.trustLogosCount || 0}. If less than 2 → SKIP trust bar entirely, show metrics strip instead with real numbers from contentMap.
MANDATORY SECTION RULES — these are USER INSTRUCTIONS, follow exactly, no exceptions:
-- formPlacement: ${blueprint.formPlacement || 'none'} → ${
  blueprint.formPlacement === 'hero-right-column'
    ? `FORM HERO RULES — NON-NEGOTIABLE:
Hero layout: 2-column grid. LEFT = headline + subheadline + feature chips + ghost CTA. RIGHT = floating form card (name, email, phone, company + full-width CTA button).
HERO BACKGROUND: ${blueprint.heroMediaMode === 'background-only' ? 
  'Use best available image or video as FULL-BLEED background with dark overlay rgba(0,0,0,0.55). If no good media found, use dark gradient — NO placeholder or empty bg.' 
  : 'dark gradient background'}.
STRICT: The hero-visual div contains ONLY the form card. Nothing else.
STRICT: NO .hero-collage, NO mini-card, NO video thumbnail, NO image preview inside hero-visual.
STRICT: Do NOT add any media below the form inside hero-visual.
STRICT: The form card must be the ONLY child of hero-visual. Any other element inside hero-visual is a VIOLATION.
STRICT: No separate form section anywhere below the hero.
STRICT: On mobile, form stacks below hero text.
STRICT: If you are tempted to add mini-cards or a collage below the form — DO NOT. Remove them entirely.`
    : 'DO NOT render any form, input, textarea, or contact section anywhere on the page. Not in hero. Not at bottom. Nowhere.'
}
- includePricing: ${blueprint.includePricing !== false} → ${blueprint.includePricing !== false
      ? 'MUST INCLUDE a pricing section'
      : 'DO NOT render any pricing section or plan cards'}
- includeTestimonials: ${blueprint.includeTestimonials !== false} → ${blueprint.includeTestimonials !== false
      ? 'MUST INCLUDE a testimonials section'
      : 'DO NOT render any testimonials, reviews, or quotes section'}
- includeTrust: ${blueprint.includeTrust !== false} → ${blueprint.includeTrust !== false
      ? 'MUST INCLUDE a trust bar with logos'
      : 'DO NOT render any trust bar, logo strip, or partner logos section'}
`;

const additionalRules = blueprint.additionalInstructions
  ? `
ADDITIONAL USER INSTRUCTIONS — HIGHEST PRIORITY:
These come directly from the user and MUST be followed exactly.
They override any default design decisions.
Instructions: ${blueprint.additionalInstructions}
`
  : '';

    // Resolve image URLs — support both flat and nested mediaPlan shapes
    const heroImage = imageMap.hero?.primaryVisual
                   || imageMap.hero?.backgroundImage
                   || (typeof imageMap.hero === 'string' ? imageMap.hero : null);

                   // ── Image context — what each image actually looks like (from GPT Vision) ──
const rawImageContext = Array.isArray(imageMap.imageContext) ? imageMap.imageContext : [];

// Build a readable image guide for the code prompt
// Hard image assignments from pre-generation analysis
const sectionMap = blueprint?.sectionImageMap || {};

const imageContextGuide = `
━━━━ IMAGE ASSIGNMENTS — THESE ARE FINAL, NOT SUGGESTIONS ━━━━
Do NOT pick different images. Do NOT reorder. Use exactly these URLs.

HERO IMAGE: ${sectionMap.hero?.url || 'NONE — build CSS animated visual, no placeholder'}
${sectionMap.hero ? `  Dark background: ${sectionMap.hero.hasDarkBackground} — ${sectionMap.hero.hasDarkBackground ? 'use light text directly, no overlay needed' : 'add rgba(0,0,0,0.45) overlay if used as background'}
  Note: ${sectionMap.hero.note}` : '  CSS hero: use animated gradient + floating stat cards using accent color'}

FEATURE SECTIONS (assign in order, do not skip):
${Object.entries(sectionMap)
  .filter(([k]) => k.startsWith('feature_'))
  .map(([k, v]) => `  "${v.sectionName}": ${v.url}
    → ${v.wrapInFrame ? 'WRAP IN browser chrome frame div (.browser-frame)' : 'Use directly as img'}
    → Dark bg: ${v.hasDarkBackground}`)
  .join('\n') || '  None assigned — use CSS product mockups'}

TRUST LOGOS — strategy: ${sectionMap.trust?.strategy || 'metrics-strip'}
${sectionMap.trust?.strategy === 'logo-grid' && sectionMap.trust.logos.length > 0
  ? sectionMap.trust.logos.map((url, i) => `  Logo ${i+1}: ${url}`).join('\n')
  : '  No logos — show metrics strip with real numbers from contentMap.trust.customerCount and contentMap.trust.socialProof. NEVER invent company names.'}

TESTIMONIAL AVATARS:
${sectionMap.testimonials?.avatars?.length > 0
  ? sectionMap.testimonials.avatars.map((url, i) => `  Avatar ${i+1}: ${url}`).join('\n')
  : '  None — use initials circles with accent color background'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━`;

// Separate images by their actual properties for smarter placement
const darkBgImages  = rawImageContext.filter(i => i.hasDarkBackground);
const lightBgImages = rawImageContext.filter(i => !i.hasDarkBackground && !i.isTransparent);
const wideImages    = rawImageContext.filter(i => i.isWide);
const portraitImages = rawImageContext.filter(i => !i.isWide && i.role !== 'logo-or-icon');
const transparentImages = rawImageContext.filter(i => i.isTransparent);

const smartHeroImage = (
  wideImages.find(i => i.role === 'hero-visual') ||
  wideImages.find(i => i.role === 'ui-screenshot') ||
  rawImageContext.find(i => i.role === 'hero-visual') ||
  null
);

const smartProductImages = rawImageContext
  .filter(i => i.role === 'ui-screenshot')
  .sort((a, b) => b.confidence - a.confidence)
  .slice(0, 6)
  .map(i => i.url);

const smartFeatureImages = rawImageContext
  .filter(i => i.role === 'feature-illustration' || i.role === 'ui-screenshot')
  .sort((a, b) => b.confidence - a.confidence)
  .slice(0, 6)
  .map(i => i.url);

    const heroVideo = imageMap.hero?.backgroundVideo || imageMap.heroVideo || null;

    const productImages = [
      ...(Array.isArray(imageMap.productSections)
        ? imageMap.productSections.map(s => s?.primaryPreview).filter(Boolean) : []),
      ...(Array.isArray(imageMap.product) ? imageMap.product : [])
    ].filter(Boolean).slice(0, 8);

    const featureImages     = Array.isArray(imageMap.features) ? imageMap.features : [];
    const testimonialImages = Array.isArray(imageMap.testimonials?.avatars)
                            ? imageMap.testimonials.avatars
                            : (Array.isArray(imageMap.testimonials) ? imageMap.testimonials : []);
    const logoImages        = Array.isArray(imageMap.trust?.logos)
                            ? imageMap.trust.logos
                            : (Array.isArray(imageMap.logos) ? imageMap.logos : []);
    const demoVideos        = Array.isArray(imageMap.demos?.sectionDemos)
                            ? [imageMap.demos.heroDemo, ...imageMap.demos.sectionDemos].filter(Boolean)
                            : (Array.isArray(imageMap.demos) ? imageMap.demos : []);

                            // ── Extract blueprint decisions as hard rules ──────────────────────────────
const heroSection       = (blueprint.sections || []).find(s => s.id === 'hero')       || {};
const productsSection   = (blueprint.sections || []).find(s => s.id === 'products')   || {};
const pricingSection    = (blueprint.sections || []).find(s => s.id === 'pricing')    || {};
const testimonialsSection = (blueprint.sections || []).find(s => s.id === 'testimonials') || {};

const blueprintRules = `
━━━━ BLUEPRINT RULES — NON-NEGOTIABLE ━━━━
These were decided by the design system. Follow exactly. Never substitute.

HERO:
- Layout: ${heroSection.layout || 'split-left'}
- Background: ${heroSection.backgroundTreatment || heroSection.bgColor || 'dark gradient'}
- Animation: ${blueprint.motionStrategy?.heroEntrance || 'fade-up'}
- Render mode: ${heroSection.renderMode || 'layered'}

FEATURES / PRODUCT SECTIONS:
- Render mode: ${productsSection.renderMode || 'tabs-with-preview'}
- Layout: ${productsSection.layout || 'stacked'}
- If renderMode is "tabs-with-preview" → MUST use React useState tabs with a preview panel. NEVER use flat card grid.
- If renderMode is "accordion-with-visual" → MUST use accordion with useState. NEVER use flat card grid.
- If renderMode is "spotlight-plus-grid" → MUST use one large spotlight card + small grid below.
- If renderMode is "split-panel-list" → MUST use alternating left/right split panels.

PRICING:
- Render mode: ${pricingSection.renderMode || 'highlighted-card'}

TESTIMONIALS:
- Render mode: ${testimonialsSection.renderMode || 'carousel'}
- If renderMode is "slider" or "carousel" → MUST use prev/next buttons with useState index.

MOTION:
- Card hover: ${blueprint.motionStrategy?.cardHover || 'lift'}
- Section reveal: ${blueprint.motionStrategy?.sectionReveal || 'fade-up'}
- Animation style: ${blueprint.motionStrategy?.style || 'subtle'}
- Allow animations: ${blueprint.motionStrategy?.allowAnimations !== false ? 'YES' : 'NO'}

SURFACE STYLE: ${blueprint.surfaceStyle || 'soft-shadow'}
VISUAL MOTIF: ${blueprint.visualMotif || 'none'}
THEME FAMILY: ${blueprint.themeFamily || blueprint.styles?.themeFamily || ''}

SECTION BACKGROUND SEQUENCE (must alternate, no two same in a row):
${(blueprint.sections || []).map((s, i) => `  ${i + 1}. [${s.id}] → bg: ${s.bgColor || 'see backgroundSystem'}`).join('\n')}

BACKGROUND SYSTEM:
- Body base: ${blueprint.backgroundSystem?.bodyBase || '#ffffff'}
- Hero: ${blueprint.backgroundSystem?.hero || 'dark'}
- Section 1: ${blueprint.backgroundSystem?.section1 || '#ffffff'}
- Section 2: ${blueprint.backgroundSystem?.section2 || '#f8f9fa'}
- Section 3: ${blueprint.backgroundSystem?.section3 || '#1a1a2e'}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
`;
// Inject accent/primary as JS constants GPT can reference
const accentVal  = blueprint.styles?.accentColor  || blueprint.colours?.accent  || '#4F46E5';
const primaryVal = blueprint.styles?.primaryColor || blueprint.colours?.primary || '#1a1f36';
const bodyBgVal  = blueprint.styles?.bodyBg       || blueprint.colours?.bodyBg  || '#ffffff';

// ── Pre-built prompt blocks — no nested template literals ──────────────
const googleFontsUrl = blueprint.styles?.googleFontsUrl ||
  'https://fonts.googleapis.com/css2?family=' +
  encodeURIComponent(blueprint.styles?.headingFont || 'Inter') +
  ':wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap';

const usableLogoImages = logoImages.filter(url => {
  const u = String(url || '').toLowerCase();
  return (
    !u.includes('favicon') &&
    !u.includes('sprite') &&
    !u.includes('icon') &&
    !u.includes('apple') &&
    !u.includes('og') &&
    !u.includes('social')
  );
});

const logoTrustBlock = usableLogoImages.length >= 3
  ? `
${usableLogoImages.length} possible logo files are available.

STRICT TRUST LOGO RULE:
- Use logos only if they are clearly real customer/company logos.
- Do not place tiny logos inside huge empty cards.
- Logo card height must be max 72px.
- Logo image max-height must be 32px.
- If logo appears tiny, blurry, random, or product-owned, do not use it.
- Prefer a compact static logo grid, not large logo cards.
- Never use auto-scrolling logo marquee.

Available logo URLs:
${usableLogoImages.slice(0, 6).map((url, i) => `Logo ${i + 1}: ${url}`).join('\n')}
`
  : `
Do NOT create logo cards or logo strip.
Use a compact metrics strip instead using only real numbers from contentMap.trust.customerCount or socialProof.
Never use random scraped images as logos. Never invent company names.
`;


const heroDecisionBlock = smartHeroImage
  ? 'Best hero image found: ' + smartHeroImage.url +
    '\n  isWide: ' + smartHeroImage.isWide +
    ' | hasDarkBackground: ' + smartHeroImage.hasDarkBackground +
    '\n  ' + (smartHeroImage.isWide ? 'Use as full-bleed background or large split panel' : 'Use in right-side split panel, NOT full-bleed') +
    '\n  ' + (smartHeroImage.hasDarkBackground ? 'Dark image — use light text directly, minimal or no overlay' : 'Light image — add dark overlay if used as background')
  : 'No strong hero image — build CSS visual hero with gradient mesh and floating stat chips';

const darkBgBlock = darkBgImages.length > 0
  ? darkBgImages.map(function(i) { return '  ' + i.url + ' — use as dark section background'; }).join('\n')
  : '  None — create dark sections with CSS gradients';

const wideBgBlock = wideImages.length > 0
  ? wideImages.map(function(i) { return '  ' + i.url; }).join('\n')
  : '  None — avoid wide background placements';

const brandLogoBlock = blueprint.brandLogoUrl
  ? 'Logo URL found: ' + blueprint.brandLogoUrl + '\n   Use: <img src="' + blueprint.brandLogoUrl + '" alt="' + (blueprint.brandSiteName || contentMap?.productName || 'Product') + '" style={{height:"36px", objectFit:"contain", maxWidth:"160px"}} />'
  : blueprint.hasSvgLogo
    ? 'Site uses SVG logo (inline, not capturable as URL)\n   Use text logo: <span style={{fontWeight:800, fontSize:"20px"}}>' + (blueprint.brandSiteName || contentMap?.productName || 'Product') + '</span>'
    : 'No logo found\n   Use text logo: <span style={{fontWeight:800, fontSize:"20px", color:"' + accentVal + '"}}>' + (blueprint.brandSiteName || contentMap?.productName || 'Product') + '</span>';



    const text = await callGPT(
      `You are a senior React developer at Techjockey who has built 200+ landing pages as React components.

━━━━ ABSOLUTE REQUIREMENTS — FAILURE ON ANY = REJECTED OUTPUT ━━━━
1. NAV must have THREE parts:
   - LEFT: product/brand name or logo
   - RIGHT: Techjockey logo → <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28px" alt="Techjockey" />
   - FAR RIGHT: CTA button using animated-cta class
   NEVER skip the Techjockey logo. NEVER put it on the left.

2. FOOTER must be the last section before export default. It MUST contain:
   - Techjockey logo (same URL as nav)
   - support@techjockey.com
   - © 2024 Techjockey Infotech Pvt. Ltd.
   - Privacy Policy + Terms links
   - Social icons (Facebook, Instagram, Twitter, LinkedIn)

3. NEVER invent content. Use ONLY what is in the CONTENT section below.
   Stats, logos, quotes, prices — ONLY from contentMap. If not in contentMap, skip the section.

4. FORM GATE — ABSOLUTE RULE — CANNOT BE OVERRIDDEN BY ANY OTHER INSTRUCTION:
   includeForm = ${blueprint?.includeForm}
   ${blueprint?.includeForm
     ? `FORM = TRUE:
   - Hero MUST be 2-column grid: LEFT = headline/text, RIGHT = form card
   - Form card fields: name, email, phone, company + full-width CTA button
   - NO separate form section below hero — only one form on the entire page
   - Hero background = best available video/image as full-bleed with dark overlay
   - The hero-visual div contains ONLY the form card — nothing else`
     : `FORM = FALSE:
   - DO NOT render any form, input, textarea, or contact section ANYWHERE on the page
   - Not in hero. Not at bottom. Not in a modal. Nowhere.
   - Use CTA anchor buttons pointing to external URLs instead
   - This rule overrides ALL other instructions about forms`}

5. Complete the ENTIRE component. Never stop before export default LandingPage;
   If running low on tokens — shorten middle sections. NEVER cut nav or footer.

6. At the very top of your useEffect hooks, always set these CSS variables:
   document.documentElement.style.setProperty('--accent', accent);
   document.documentElement.style.setProperty('--primary', primary)
   This is required for hover animations and cursor glow to use the correct brand colors.

7. GSAP initGSAP() function MUST be wrapped in double requestAnimationFrame:
   const initGSAP = () => {
     if (!window.gsap || !window.ScrollTrigger) return;
     requestAnimationFrame(() => { requestAnimationFrame(() => {
       // all gsap calls here
     }); });
   };
   This ensures React DOM is fully committed before GSAP queries elements.
   Never call GSAP selectors outside this double RAF wrapper.  
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
USER ADDITIONAL INSTRUCTIONS — HIGHEST PRIORITY — BUILD THESE FIRST:
${blueprint.additionalInstructions
  ? blueprint.additionalInstructions + '\nThese are direct user requirements. Implement them exactly as described. Do not skip or summarise.'
  : 'None.'}

CRITICAL: You have limited tokens. Be concise with CSS. Never repeat styles.
Write JSX efficiently. Footer must always be included even if you must shorten earlier sections.
If you are running low on space, shorten middle sections but ALWAYS complete with export default LandingPage;

      You have been given GPT Vision analysis of every available image.
You MUST read the IMAGE INTELLIGENCE section before placing any image.
Your layout decisions (split vs centered, background vs panel, dark vs light section) must be driven by the actual image properties — not guesswork.
If an image has hasDarkBackground: true, never add a dark overlay on top of it.
If an image has isWide: false, never stretch it into a full-bleed background.
If no suitable image exists for a section, build a CSS visual — never leave empty space.

━━━━ BRAND COLOR CONSTANTS — USE THESE IN YOUR CODE ━━━━
const accent  = '${accentVal}';
const primary = '${primaryVal}';
const bodyBg  = '${bodyBgVal}';

Declare these 3 constants at the top of your component.
Use them EVERYWHERE instead of hardcoded hex values.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

CRITICAL OUTPUT RULES:
- Output ONE complete React functional component — nothing else.
- Start with: import React, { useState, useEffect, useRef } from 'react';
- Component name: LandingPage
- End with: export default LandingPage;
- ALL CSS goes inside a single template literal string injected via a <style> tag:
  const css = \`...all your CSS here...\`;
  // Then inside JSX: <style dangerouslySetInnerHTML={{ __html: css }} />
- Use className instead of class everywhere.
- Use htmlFor instead of for on labels.
- All event handlers as React syntax: onClick, onChange, onSubmit.
- Inline styles only when dynamic (e.g. brand color from a variable).
- Google Fonts loaded as: <link rel="stylesheet" href="https://fonts.googleapis.com/..." />
- JS behaviors (carousel, tabs, accordion, scroll reveal) implemented as React useState/useEffect hooks.
- Techjockey footer MUST be included as the last section inside the component — write it directly in JSX.
- NEVER output <!DOCTYPE html>, <html>, <head>, or <body> tags.
- NEVER reference external CSS or JS files except Google Fonts.
- Output the COMPLETE component in ONE response. Never stop early.

${sectionRules}
${additionalRules}
${animationLibraryBlock}
${strictCtaRulesBlock}

${sectionVisualStrategy ? `
━━━━ LOCKED SECTION VISUAL STRATEGY — MUST FOLLOW ━━━━
${safeJsonStringify(sectionVisualStrategy)}

STRICT ANIMATION RULES — NON NEGOTIABLE:
1. NEVER load SplitText.min.js under any circumstance — it is a premium GSAP plugin not available on CDN, it loads silently and causes the entire page to go blank after 3 seconds
2. GSAP scripts allowed: gsap.min.js and ScrollTrigger.min.js ONLY
3. For all data-count counter animations: use snap: { val: 0.1 } — never snap: { val: 1 }
4. Counters must always animate UP from 0 to the target value — never show 0% or go negative

HERO LAYOUT RULES:
5. .banner-title { word-break: normal; overflow-wrap: normal; hyphens: none; white-space: normal; } — hero heading must NEVER break mid-word
6. Hero heading must overlap the full hero width — never truncated or clipped
7. If a real image or video exists in hero, DO NOT add any generated CSS visual on top of it
8. If hero media is .mp4, use a <video> element with autoPlay muted loop playsInline — never convert mp4 to an image

FEATURE SECTION RULES:
9. Never use CSS Grid inside CSS Grid for feature sections — use flex or single-level grid only
10. No additional lead magnets beyond the main form — one form per page only

Rules:
- Do not use a real image just because it exists.
Use real media when sectionVisualStrategy.useRealMedia is true OR when sectionImageMap has a clearly relevant product/UI/brand image for that section.
If media is not relevant or creates empty space, use CSS/React visual treatment.
- If visualTreatment is integration-grid, create an app/integration grid with CSS/React.
- If visualTreatment is workflow-diagram, create connected workflow cards.
- If visualTreatment is metric-dashboard, create metric cards and mini chart panels.
- If visualTreatment is collaboration-ui-mockup, create inbox/chat/calendar/document UI mockup.
- If visualTreatment is comparison-panel, create before/after or side-by-side comparison.
- If visualTreatment is css-product-visual, create a custom visual from the section content.
- Never place a tiny image inside a huge empty browser frame.
- Never leave large blank areas around media.
- Never repeat the same image-left/text-right layout across all feature sections.
- Use the section content to create engaging visuals if media is weak.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
` : ''}
ANIMATION CLASS USAGE — apply these where they fit best:
- .reveal          → any card, heading, image — fades up on scroll
- .stagger-parent  → grid/list containers — children animate in sequence  
- .zoom-reveal     → image wrappers — image scales from 1.12 to 1 on scroll
- .slide-left      → feature text blocks entering from left
- .slide-right     → feature images entering from right
- .pop-in          → badges, chips, stat numbers, icons — scale pop
- .btn-magnetic    → ALL CTA buttons — subtle magnetic hover effect
- data-depth="0.2" → parallax layers in hero (0.1=subtle, 0.4=strong)
- data-count="125000" data-suffix="+" → animated stat counters
- .sticky-scroll-section → section where scroll changes displayed card
- .sticky-panel    → the panel that switches content on scroll
- .scroll-step     → each trigger point, add data-content="<html snippet>"
- .h-scroll-track  → horizontal scrolling card strip (auto-pinned)

ANIMATION PLACEMENT RULES:
- Hero headline → .reveal
- Hero subtext  → .reveal with style={{transitionDelay:'0.1s'}}
- Hero CTA      → .btn-magnetic .reveal
- Feature cards → wrap parent in .stagger-parent
- Feature images → wrap in .zoom-reveal
- Left text col  → .slide-left
- Right image col → .slide-right .zoom-reveal
- Stats numbers  → data-count="VALUE" data-suffix="+"
- Logo grid      → .stagger-parent
- Testimonial cards → .stagger-parent on wrapper
- Section headings → .reveal
- Pricing cards  → .stagger-parent on wrapper, .pop-in on badges

━━━━ MASTER DESIGN + MEDIA INTELLIGENCE LAYER ━━━━

You are a senior product designer + UI engineer building a real production-grade Techjockey landing page.
Follow ALL rules below strictly. These override any earlier instructions.

THEME SYSTEM — LOCKED:
- Use accent/primary/bodyBg from blueprint.styles ONLY
- NEVER invent colors like #ff6b00, purple gradients, or dark theme unless in blueprint tokens
- NEVER override blueprint colors with category defaults

SECTION VISUAL STRATEGY — CORE RULE:
Before placing any media, understand the section's intent first.

Allowed visual treatments per section type:
- Integration content → integration-grid (logo icons in CSS grid)
- Workflow/process → workflow-diagram (numbered steps with arrows)
- Analytics/performance → metric-dashboard (stat cards with numbers)
- Collaboration → UI mockup (inbox/chat/calendar CSS panels)
- Comparison → comparison-panel (side-by-side table)
- AI/generative → abstract-art-panel (gradient mesh + floating chips)
- Product features → real-product-media OR css-product-visual

MEDIA USAGE RULE — CRITICAL:
DO NOT think "section = image on the side"
Instead:
  IF strong relevant media exists AND it fills the space well → use it with UI overlay
  IF media is weak, irrelevant, tiny, or creates empty space → DO NOT use it → build CSS visual instead

STRICT MEDIA REJECTION — NEVER USE:
- Images that leave large empty whitespace around them
- Favicons, OG images, nav icons, tiny logos inside large cards
- Random stock photos that don't explain the section content
- Generic dashboards for non-dashboard sections
- .mock-shot divs with grey bar placeholders — these look like broken UI

EMPTY SPACE RULE — ZERO TOLERANCE:
- NEVER place a small image inside a large container
- NEVER create browser frames without meaningful content
- NEVER leave padding/margin that shows as blank area
- If no strong media → build visual from section CONTENT (cards, flows, panels, grids)

MEDIA BALANCE — PAGE-LEVEL RULE:
- At least 2 sections MUST use real images/videos if available
- Remaining sections use CSS-generated visuals (NOT grey placeholder bars)
- CSS visuals must use real content from contentMap — feature titles, metrics, names

LAYOUT INTELLIGENCE — AVOID REPETITION:
- NEVER repeat image-left text-right more than twice consecutively
- NEVER use identical card grid structure in more than 2 sections
- Alternate: split → full-width → tabs → split-reversed → full-width dark

MARQUEE / STRIP RULE:
- DO NOT use auto-scrolling strips between sections
- DO NOT use repeating ticker text rows as dividers
- Use clean spacing (padding) or a single 1px border separator instead

TRUST SECTION RULE:
- IF 3+ real logo URLs available → compact logo grid, grayscale, hover-to-color
- ELSE → metrics strip with REAL numbers from contentMap.trust only
- NEVER use large empty logo cards or stretch tiny logos

VIDEO / GIF RULE:
- IF relevant video exists → use as product demo panel or hero support visual
- autoPlay muted loop playsInline — always these 4 attributes together
- NEVER use video as background unless it has a dark overlay

FEEDBACK MEMORY — AVOID THESE PROVEN MISTAKES:
- auto-scroll-track with .mock-shot grey bars (looks like broken/loading state)
- tabs section right column showing CSS placeholder lines with no content
- feature section with one tiny image floating in a 500px container
- metrics strip showing same number 3 times (100,000+ repeated)
- trust logos section with just 1-2 images stretched to full width

FINAL EXPECTATION:
The page must feel Designed (not assembled), Structured (not templated),
Context-aware (not generic), Visually meaningful (not decorative).

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━




DESIGN RULES:

- If includeForm is true:
  Hero must be 2-column: LEFT = text, RIGHT = form card (NO image/video in right column)
  Hero background = best available image or video as full-bleed with dark overlay.
  If no good media → dark gradient background. Never white. Never empty.
  Form fields: name, email, phone, company
  Do NOT create a separate form section below the hero
  Do NOT place any product image, video, mini-card, collage, or any other element inside the form column.
The hero-visual div must contain EXACTLY ONE child: the form card div.
No exceptions. No decorative elements. No preview cards. Just the form.
  Form appears above the fold on desktop
  On mobile: form stacks below hero text

- 5+ features in a section → use JS tabs or accordion. NEVER flat card grid.
- HERO SKIP: If input JSON contains heroJSXContext with content, do NOT render a hero section. Start from trust bar or features only.
- CTA RULE: If STRICT CTA CONTRACT is present, it overrides contentMap.hero.primaryCTA and all CTA text/href decisions.
- If no STRICT CTA CONTRACT is present, use only contentMap.hero.primaryCTA for every button. Never invent alternative CTA copy.
- PRICING GATE: If input JSON visitorTemperature is "cold", skip the pricing section entirely.
- 4+ testimonials → CSS carousel with prev/next arrows and JS.
DARK THEME LAW — applies when themeFamily is cinematic-ai, creative-studio, futuristic-labs, compliance-trust, or developer-minimal:
NEVER use #ffffff, #f8f9fa, #f8fafc, #f4f4f4, or any near-white as a section background.
Dark section sequence MUST alternate between these only:
  bodyBg (from blueprint.styles.bodyBg)
  #0b0e13
  #111827  
  #161616
  #0d0f14
  #1a1a2e
Cards in dark theme: background rgba(255,255,255,0.05), border 1px solid rgba(255,255,255,0.1)
Text in dark theme: primary #ffffff, muted rgba(255,255,255,0.65)

LIGHT THEME LAW — applies when themeFamily is editorial-b2b or surfaceStyle is flat:
Section sequence alternates: #ffffff → #f8fafc → #ffffff → #f4f6f8
Cards: background #ffffff, border 1px solid #e5e7eb, shadow 0 4px 24px rgba(0,0,0,0.06)

NEVER MIX. If the page starts dark it stays dark end to end. If it starts light it stays light.
Detect from blueprint.styles.bodyBg — if bodyBg is dark (#0a, #06, #0b, #11, #1a prefix) → dark law applies.
That's it. This single change makes the system self-aware about theme consistency for every
- THEME LAW — detect from blueprint.styles.bodyBg first char:
  If bodyBg starts with #0, #1 (dark) → ALL sections use dark palette only:
  Alternate between #06080c, #0b0e13, #111827, #161616, #0d0f14. NEVER white.
  Cards: rgba(255,255,255,0.05) bg, rgba(255,255,255,0.1) border, white text.
  If bodyBg starts with #f, #e, #fff (light) → ALL sections use light palette only:
  Alternate between #ffffff, #f8fafc, #f4f6f8. NEVER dark.
  Cards: #ffffff bg, #e5e7eb border, #111827 text.
  NEVER mix dark and light sections on the same page.
- Hero background NEVER white — use brand primary color or dark gradient.
- Feature cards MUST have colored inline SVG icons.
- Pricing: plan name, strikethrough original price, bold discounted price, green badge, full-width CTA. NEVER invent prices.
- Testimonials: ★★★★★ gold, large ❝ accent color, bold author, grey designation. NEVER invent quotes.
- H1 minimum 48px. H2 minimum 32px.
- CTA buttons: hover transform translateY(-2px) + box-shadow.
- Scroll-reveal: class "reveal" + IntersectionObserver JS.
- Form: styled inputs, accent focus state, full-width CTA.
- Trust bar: grayscale logos hover-to-color. Skip entirely if no logos.
- important: Nav: sticky, product logo left, Techjockey logo right, CTA far right.

CTA BUTTON RULE — NON-NEGOTIABLE:
- NEVER use conic-gradient buttons.
- NEVER use rotating border buttons.
- NEVER create @keyframes borderRotate.
- NEVER set .animated-cta::before or .animated-cta::after as visible decorative layers.
- CTA hover should only use translateY(-2px), subtle shadow, and background change.

BEFORE FINAL OUTPUT — CHECK
□ Nav has product name/logo LEFT + Techjockey logo RIGHT + CTA FAR RIGHT
□ Hero background is dark/colored, never plain white
□ H1 is minimum 48px desktop
□ Feature cards have colored SVG icons
□ CTA buttons have hover transform + shadow
□ Sections alternate backgrounds
□ Footer exists
□ Last line is export default LandingPage;
If any item is missing, fix it before output.

- NEVER reference external CSS or JS files except Google Fonts.`,



      `Build the complete Techjockey landing page.

━━━━ REAL CONTENT — READ THIS FIRST BEFORE ANYTHING ELSE ━━━━
Product: ${contentMap?.productName || ''}
Category: ${contentMap?.productCategory || ''}
Audience: ${contentMap?.targetAudience || ''}

Hero headline: "${contentMap?.hero?.headline || ''}"
Hero subheadline: "${contentMap?.hero?.subheadline || ''}"
Primary CTA: "${contentMap?.hero?.primaryCTA || ''}"

Product sections:
${(contentMap?.productSections || []).map((s, i) => `
Section ${i+1}: ${s.name || s.label || ''}
Headline: ${s.headline || ''}
Description: ${s.description || ''}
Features: ${(s.features || []).map(f => `- ${f.title}: ${f.description}`).join('\n')}
`).join('\n')}

Testimonials:
${(contentMap?.testimonials || []).map(t => `- "${t.quote}" — ${t.author}, ${t.designation}`).join('\n')}

Pricing:
${(contentMap?.pricing?.plans || []).map(p => `- ${p.name}: ${p.price} (was ${p.originalPrice}) | Includes: ${(p.includes || []).join(', ')}`).join('\n')}

Trust: ${contentMap?.trust?.customerCount || ''} | ${contentMap?.trust?.socialProof || ''}

RULES — NON-NEGOTIABLE:
- Use ONLY the content above. Never invent product names, features, quotes, or prices.
- Every H1, H2, feature title, testimonial quote must come from above.
- If a section has no content, skip it entirely.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

      ${replicateInstruction}

CSS FALLBACK VISUAL RULES:


CSS FALLBACK VISUAL RULES:
When no hero image is available (heroMode: css-generated), 
create a PREMIUM CSS visual that matches the product category.
NEVER show a grey placeholder or empty space.

For AI/generative products:
  → Animated gradient mesh background
  → Floating UI cards with mock data
  → Glowing orbs with blur effects
  → CSS grid of generated image thumbnails (colored blocks)
  → Animated typing cursor effect

For cybersecurity products:
  → Dark background with animated grid lines
  → Scrolling log stream (CSS animation)  
  → Network node diagram (CSS circles + lines)
  → Real-time metric cards

For SaaS/productivity:
  → Dashboard mockup in CSS
  → Feature preview cards
  → Animated progress bars/charts

These CSS visuals must look DESIGNED, not like placeholders.
Use the product's accent color as the primary visual color.
Always include subtle animation (transform, opacity transitions).

━━━━ DESIGN SPEC ━━━━
HERO STRICT RULE:
- MUST use split layout (text left, visual right)
- MUST have large visual container (min-height 500px)
- MUST include floating cards or layered UI
- MUST NOT be plain text hero
- MUST feel like a product demo, not a blog

${blueprintRules}

FULL BLUEPRINT JSON (reference only — rules above take priority):
${safeJsonStringify(blueprint).substring(0, 2000)}

━━━━ FULL CONTENT — USE THIS EXACTLY, NEVER INVENT ━━━━
RULE: Every heading, feature title, testimonial quote, pricing detail, and CTA text
MUST come from this content. Do NOT invent product names, features, or quotes.
If a section has no content provided, skip it entirely. Never fill with generic placeholders.

${safeJsonStringify(contentMap).substring(0, 5000)}

CONTENT FAITHFULNESS CHECK:
- Product name from content: ${contentMap?.productName || 'use from content above'}
- Hero headline: must use actual product name, not generic "software"
- Features: use ONLY features listed in productSections above
- Testimonials: use ONLY quotes from testimonials array above
- Pricing: use ONLY plans from pricing object above
- NEVER write "Lorem ipsum" or generic enterprise filler
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
━━━━ TRUST BAR — REAL LOGO URLs — USE THESE EXACTLY ━━━━
${logoTrustBlock}
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

━━━━ IMAGES ━━━━
Hero image: ${smartHeroImage?.url || heroImage || 'none'}
Product images: ${safeJsonStringify(smartProductImages.length ? smartProductImages : productImages, '[]')}
Feature images: ${safeJsonStringify(smartFeatureImages.length ? smartFeatureImages : featureImages, '[]')}
Logo images: ${safeJsonStringify(logoImages, '[]')}
Testimonial images: ${safeJsonStringify(testimonialImages, '[]')}
Hero video: ${heroVideo || 'none'}
Demo videos: ${safeJsonStringify(demoVideos, '[]')}
GIF assets (animated — use in feature sections): ${safeJsonStringify(
  rawImageContext.filter(i => i.isAnimated).map(i => i.url), '[]'
)}

━━━━ IMAGE INTELLIGENCE — READ BEFORE PLACING ANY IMAGE ━━━━
You have GPT Vision analysis for each image. Use this to make smart layout decisions.
NEVER place an image without checking its properties below first.

${imageContextGuide}

SMART PLACEMENT RULES (derived from actual image analysis):
- Wide images (isWide: true): use in full-bleed hero, split panels, wide feature banners
- Portrait images (isWide: false): use in card layouts, right-side panels, circular crops
- Dark background images (hasDarkBackground: true): place on dark sections OR use directly as background — no extra overlay needed
- Light background images (hasDarkBackground: false): ALWAYS add a semi-transparent dark overlay (rgba(0,0,0,0.4)) if used as a section background
- Transparent images (isTransparent: true): safe on ANY background color — use freely
- UI screenshots (role: ui-screenshot): ALWAYS wrap in a browser chrome frame or device mockup
- Logo images (role: logo-or-icon): ALWAYS use in trust bar, start grayscale, color on hover

HERO DECISION:
${heroDecisionBlock}

DARK SECTION OPPORTUNITIES:
${darkBgImages.length > 0
  ? darkBgImages.map(i => `  • ${i.url} → "${i.description}" — use as dark section background`).join('\n')
  : '  None — create dark sections with CSS gradients'}

WIDE IMAGES AVAILABLE FOR LARGE PLACEMENTS:
${wideImages.length > 0
  ? wideImages.map(i => `  • ${i.url} → "${i.description}"`).join('\n')
  : '  None — avoid wide background placements'}

━━━━ KEY STYLES ━━━━
Accent: ${blueprint.styles?.accentColor || '#4F46E5'}
Primary: ${blueprint.styles?.primaryColor || blueprint.colours?.primary || '#1a1f36'}
Body bg: ${blueprint.styles?.bodyBg || '#ffffff'}
Heading font: ${blueprint.styles?.headingFont || 'Plus Jakarta Sans'}
Body font: ${blueprint.styles?.bodyFont || 'Inter'}
Theme: ${blueprint.styles?.themeFamily || 'enterprise-grid'}

PREMIUM VISUAL PATTERNS — IMPLEMENT ALL OF THESE:

━━━━ 1. GRADIENT TEXT ━━━━
/* Uses brand accent colors — NOT hardcoded */
.gradient-text {
  background: linear-gradient(135deg, ${blueprint.styles?.accentColor || blueprint.colours?.accent || '#4F46E5'} 0%, ${blueprint.colours?.primary || blueprint.styles?.primaryColor || '#7c3aed'} 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
Usage in JSX: <span className="gradient-text">product name</span>

━━━━ 2. INFINITE MARQUEE SCROLLER ━━━━
/* Use between sections as visual dividers */
CSS:
@keyframes marqueeScroll {
  0% { transform: translateX(0); }
  100% { transform: translateX(-50%); }
}
.marquee-track {
  display: flex;
  width: max-content;
  animation: marqueeScroll 20s linear infinite;
}
.marquee-wrapper {
  overflow: hidden;
  background: ${blueprint.backgroundSystem?.section3 || blueprint.colours?.primary || blueprint.styles?.bodyBg || '#0d0d1a'};
  padding: 20px 0;
  border-top: 1px solid ${blueprint.colours?.border || 'rgba(255,255,255,0.08)'};
  border-bottom: 1px solid ${blueprint.colours?.border || 'rgba(255,255,255,0.08)'};
}
JSX: Duplicate the list items twice for seamless loop.

━━━━ 3. ANIMATED BORDER BUTTON ━━━━
/* Primary CTA style */
CSS:
@keyframes borderRotate {
  from { transform: rotate(0deg); }
  to { transform: rotate(360deg); }
}
.animated-cta {
  position: relative;
  padding: 12px 32px;
  border-radius: 8px;
  overflow: hidden;
  background: transparent;
  color: white;
  font-weight: 700;
  cursor: pointer;
  z-index: 1;
}
.animated-cta::before {
  content: '';
  position: absolute;
  inset: -2px;
  background: conic-gradient(from 0deg, ${blueprint.styles?.accentColor || blueprint.colours?.accent || '#4F46E5'}, ${blueprint.colours?.primary || blueprint.styles?.primaryColor || '#7c3aed'}, ${blueprint.styles?.accentColor || blueprint.colours?.accent || '#4F46E5'});
  border-radius: inherit;
  animation: borderRotate 3s linear infinite;
  z-index: -2;
}
.animated-cta::after {
  content: '';
  position: absolute;
  inset: 1px;
  background: ${blueprint.backgroundSystem?.hero || blueprint.styles?.bodyBg || blueprint.colours?.bodyBg || '#0d0d1a'};
  border-radius: 6px;
  z-index: -1;
}

━━━━ 4. SCROLL REVEAL ANIMATION ━━━━
/* Apply to all section headlines */
CSS:
.reveal {
  opacity: 0;
  transform: translateY(40px);
  transition: opacity 0.7s ease, transform 0.7s ease;
}
.reveal.visible {
  opacity: 1;
  transform: translateY(0);
}
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }

React useEffect:
useEffect(() => {
  const observer = new IntersectionObserver(
    entries => entries.forEach(e => {
      if (e.isIntersecting) e.target.classList.add('visible');
    }),
    { threshold: 0.15 }
  );
  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
  return () => observer.disconnect();
}, []);

━━━━ 5. HERO FEATURE CHIPS ━━━━
/* Small feature tags below hero headline */
JSX Pattern:
<div style={{display:'flex', flexWrap:'wrap', gap:'12px', marginTop:'24px'}}>
  {['AI Image Generation', 'Text-to-Video', 'Enterprise Ready'].map((chip, i) => (
    <div key={i} style={{
      display: 'flex', alignItems: 'center', gap: '8px',
      padding: '8px 16px', borderRadius: '100px',
      border: \`1px solid \${accent}4D\`,
      background: \`\${accent}14\`,
      color: '#ccc', fontSize: '13px'
    }}>
      {/* inline SVG icon here */}
      <span>{chip}</span>
    </div>
  ))}
</div>

━━━━ 6. VIDEO SECTION ━━━━
/* For product demo sections */
JSX Pattern:
<video
  autoPlay muted loop playsInline preload="auto"
  style={{ width:'100%', borderRadius:'12px', display:'block' }}
>
  <source src={videoUrl} type="video/mp4" />
</video>
Always wrap in: <div style={{borderRadius:'12px', overflow:'hidden'}}>

━━━━ 7. ALTERNATING FEATURE SECTIONS ━━━━
/* image left text right, then text left image right */
Pattern for each product section:
<div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'60px', alignItems:'center'}}>
  <div>{/* image or video */}</div>
  <div>
    <span className="section-tag">{/* category badge */}</span>
    <h2 className="reveal">Section headline with <span className="gradient-text">accent</span></h2>
    <div style={{borderLeft:'2px solid rgba(255,255,255,0.15)', paddingLeft:'20px'}}>
      <p>{/* description */}</p>
    </div>
    {/* Animated scrolling feature list */}
    <div className="marquee-features">
      {features.map(f => (
        <div className="feature-box">
          <p className="feature-title">{f.title}</p>
          <p className="feature-desc">{f.description}</p>
        </div>
      ))}
    </div>
    <a className="animated-cta">Request Demo</a>
  </div>
</div>
/* Next section: flip the grid order using CSS order or reversed props */

━━━━ 8. SWIPER-STYLE TESTIMONIAL CAROUSEL ━━━━
/* Auto-rotating testimonial slider */
React implementation (NO external library needed):
const [activeSlide, setActiveSlide] = useState(0);
useEffect(() => {
  const timer = setInterval(() => {
    setActiveSlide(prev => (prev + 1) % testimonials.length);
  }, 4000);
  return () => clearInterval(timer);
}, [testimonials.length]);

JSX:
<div style={{overflow:'hidden', position:'relative'}}>
  <div style={{
    display:'flex',
    transform: translateX(-{activeSlide * 100}%),
    transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
  }}>
    {testimonials.map((t, i) => (
      <div key={i} style={{minWidth:'100%', padding:'40px'}}>
        <p style={{fontSize:'18px', lineHeight:'1.7'}}>{t.quote}</p>
        <div>{/* avatar + name + stars */}</div>
      </div>
    ))}
  </div>
  {/* dot indicators */}
  <div style={{display:'flex', justifyContent:'center', gap:'8px', marginTop:'24px'}}>
    {testimonials.map((_, i) => (
      <button key={i} onClick={() => setActiveSlide(i)} style={{
        width: i === activeSlide ? '24px' : '8px',
        height: '8px', borderRadius: '100px',
        background: i === activeSlide ? accent : 'rgba(255,255,255,0.3)',
        border: 'none', cursor: 'pointer',
        transition: 'all 0.3s ease'
      }} />
    ))}
  </div>
</div>

━━━━ 9. SECTION BACKGROUND SHAPES ━━━━
/* Decorative background for visual richness */
<div style={{position:'relative', overflow:'hidden'}}>
  {/* Decorative orbs */}
  <div style={{
    position:'absolute', top:'-100px', right:'-100px',
    width:'400px', height:'400px', borderRadius:'50%',
    background:\`radial-gradient(circle, \${accent}26 0%, transparent 70%)\`,
  }} />
  <div style={{
    position:'absolute', bottom:'-50px', left:'-50px',
    width:'300px', height:'300px', borderRadius:'50%',
    background:\`radial-gradient(circle, \${primary}1A 0%, transparent 70%)\`,
    pointerEvents:'none'
  }} />
  {/* actual section content */}
</div>

━━━━ 10. SECTION DIVIDER WITH TICKER TEXT ━━━━
/* Between major sections — scrolling text band */
<div style={{
  background:'${blueprint.backgroundSystem?.section3 || blueprint.backgroundSystem?.hero || blueprint.colours?.bodyBg || "#0d0d1a"}',
  padding:'24px 0', overflow:'hidden',
  borderTop:'1px solid ${blueprint.colours?.border || "rgba(255,255,255,0.05)"}',
  borderBottom:'1px solid ${blueprint.colours?.border || "rgba(255,255,255,0.05)"}'
}}>
  <div className="marquee-track">
    {[...Array(6)].map((_, i) => (
      <span key={i} style={{
        fontSize:'28px', fontWeight:'800', marginRight:'48px',
        whiteSpace:'nowrap', color:'rgba(255,255,255,0.8)'
      }}>
        {sectionName} <span className="gradient-text">★</span>
      </span>
    ))}
  </div>
</div>

━━━━ FONT PAIRING — FROM PERSONALITY ━━━━
Load these fonts (decided by personality engine based on product category):
headingFont: '${blueprint.styles?.headingFont || 'Inter'}' ← use for H1, H2, H3
bodyFont:    '${blueprint.styles?.bodyFont || 'Inter'}'    ← use for body text

Google Fonts URL: ${googleFontsUrl}

NEVER hardcode Bricolage Grotesque unless personality chose it.
An HR product might use Plus Jakarta Sans. A cybersecurity product might use Barlow. Use what personality decided.

━━━━ COLOUR SYSTEM — FROM PERSONALITY (NOT hardcoded) ━━━━
These colors were decided by the personality engine based on product category.
USE THESE EXACT VALUES — do not override with your own color judgment:
bodyBg:        ${blueprint.styles?.bodyBg || blueprint.colours?.bodyBg || '#ffffff'}
hero:          ${blueprint.backgroundSystem?.hero || blueprint.colours?.primary || '#1a1f36'}
section1:      ${blueprint.backgroundSystem?.section1 || blueprint.colours?.bodyBg || '#ffffff'}
section2:      ${blueprint.backgroundSystem?.section2 || blueprint.colours?.cardBg || '#f8f9fa'}
section3:      ${blueprint.backgroundSystem?.section3 || blueprint.colours?.primary || '#1a1f36'}
cardBg:        ${blueprint.colours?.cardBg || 'rgba(255,255,255,0.06)'}
border:        ${blueprint.colours?.border || 'rgba(0,0,0,0.1)'}
textPrimary:   ${blueprint.colours?.textDark || '#111827'}
textSecondary: ${blueprint.colours?.textMid || '#6b7280'}
accent:        ${blueprint.styles?.accentColor || blueprint.colours?.accent || '#4F46E5'}
accent2:       ${blueprint.colours?.primary || blueprint.styles?.primaryColor || '#7c3aed'}

A healthcare product will have teal/blue colors here.
An ecommerce product will have orange/warm colors here.
An HR product will have indigo/white colors here.
The patterns (marquee, animated button, chips) work with ANY color — trust the personality engine.

━━━━ MANDATORY SECTIONS ━━━━

━━━━ COMPLETION CONTRACT — NON-NEGOTIABLE ━━━━
You MUST output these in order and NEVER skip any:
1. important: STICKY NAV (position:sticky, top:0, z-index:50)
2. HERO
3. CONTENT SECTIONS
4. FOOTER — this is the last thing before export default
   The footer MUST contain:
   - Techjockey logo (img src from tj_logo.svg URL)
   - support@techjockey.com
   - Social icons (FB, Instagram, Twitter, LinkedIn)
   - Copyright line: "© 2024 Techjockey Infotech Pvt. Ltd."
   - Privacy Policy + Terms links

If you are running out of tokens, SHORTEN the middle sections.
NEVER sacrifice nav or footer.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
${brandLogoBlock}

RIGHT SIDE — Techjockey logo ALWAYS:
→ <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" alt="Techjockey" style={{height:'28px', opacity:0.9}} />
→ NEVER put Techjockey logo on the left
→ NEVER leave either side empty

FAR RIGHT — CTA button using animated-cta class
1. Trust bar:
   - Use static metrics strip or static logo grid only.
   - If logo quality is weak/tiny/random, do not render logo cards.
   - Show Trusted customer count + 2-3 credibility metrics instead.

2. Product features:
   - Use tabs, accordion, split-panel-list, or spotlight-plus-grid.
   - Do not use marquee, auto-scroll, duplicated loops, or moving strip.
3. Pricing — highlighted card, strikethrough price, bold discount, green badge, checklist, full-width CTA
4. Testimonials — carousel if 4+, gold stars, accent quote mark, bold author, Grid
5. Lead form — split card, styled name/email/phone inputs, full-width CTA
6. </body></html>

--------------------

━━━━ PAGE STRUCTURE — BUILD IN THIS EXACT ORDER ━━━━

1. STICKY NAV
   - Dark background with backdrop-filter: blur(20px) on scroll
   - LEFT: product logo (use brandLogoUrl img if available, else styled text with accent color)
   - RIGHT: Techjockey logo → <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28px" />
   - FAR RIGHT: animated-cta button

2. HERO SECTION
   - Full dark background with decorative radial glow shapes
   - Large headline: ${blueprint.styles?.headingFont || 'Inter'}, 64px+, with gradient-text on key words
   - Subheadline paragraph
   - Feature chips row (4-5 chips with inline SVGs)
   - TWO CTAs — animated-border primary + ghost secondary
   - Right side: product image or video in rounded container


4. PRODUCT SECTION 1 (image/video LEFT, text RIGHT)
   - Small category badge top
   - H2 with gradient text accent
   - Left border description paragraphs
   - Animated vertical feature list (marquee scroll)
   - CTA button

5. MARQUEE DIVIDER (different text)

6. PRODUCT SECTION 2 (text LEFT, image/video RIGHT — FLIPPED)
   - Same pattern, opposite layout

7. PRICING SECTION
   - Dark background
   - Two or three cards side by side
   - Highlighted card with gradient border
   - Feature checklist per card

8. TESTIMONIALS
   - Auto-rotating carousel with dot indicators
   - User avatar + name + role + 5 stars
   - Quote text large

9. TECHJOCKEY FOOTER
   - Logo + email + social icons
   - Dark background

━━━━ HERO IMAGE RULES ━━━━
Hero visual: position:relative; display:flex; align-items:center; justify-content:center;
Hero img: width:100%; max-height:480px; object-fit:contain; border-radius:12px; — NEVER position:absolute

━━━━ BROWSER FRAME IMAGE RULES ━━━━
- Browser frame (.browser-frame) inner image MUST always be: width:100%, height:420px, object-fit:cover, display:block
- NEVER use object-fit:contain inside a browser frame — it creates black bars above and below the image
- Browser frame CSS MUST include: display:flex; flex-direction:column; overflow:hidden
- Browser frame img CSS MUST include: flex:1; min-height:0; height:420px; width:100%; object-fit:cover; display:block
- Browser frame background color MUST match image tone:
  → Dark image (hasDarkBackground: true): background:#0a0a0a
  → Light image (hasDarkBackground: false): background:#f8f8f8
  → No image: build a CSS dashboard mockup inside the frame using real feature data from contentMap
- If the image has white/light padding baked in → set frame background:#ffffff so padding blends in
- ALWAYS set overflow:hidden on the browser frame so image fills completely with no gaps
- If no image exists for a product section → DO NOT render an empty browser frame. Build a CSS panel instead with gradient background + floating feature stat cards using accent color.

━━━━ NO-IMAGE FALLBACK ━━━━
No hero image → CSS gradient mesh panel with floating stat chips.
No product images → structured CSS UI shells with gradient cards.


━━━━ REFERENCE QUALITY ━━━━
${templatePrompt.substring(0, 3000)}

Start with: import React, { useState, useEffect, useRef } from 'react';
End with: export default LandingPage;
Output the complete React component.`,
      14000
    );

    let html = sanitizeJSX(text);


    return html;  }
// ══════════════════════════════════════════════════════════════
// HERO CODE — dedicated hero section generation
// ══════════════════════════════════════════════════════════════
if (type === 'hero-code') {
  const blueprint   = extra  || {};
  const imageMap    = extra2 || {};
  const payload     = typeof data === 'string' ? extractJSON(data) : (data || {});
  const contentMap  = payload?.contentMap || payload || {};
  const designBrief = payload?.designBrief || {};

  const accentVal = blueprint.styles?.accentColor || blueprint.colours?.accent || '#4F46E5';
  const primaryVal = blueprint.styles?.primaryColor || blueprint.colours?.primary || '#1a1f36';
  const bodyBgVal = blueprint.styles?.bodyBg || blueprint.colours?.bodyBg || '#ffffff';

  const heroMessages = [
{
role: 'system',
content: `You are a senior React developer specialising in conversion-optimised hero sections.
Build ONLY the hero section as a complete standalone React component called HeroSection.
Load GSAP + ScrollTrigger CDN in the component. Do NOT load or use Tailwind CSS.
Use .hero-cinematic-bg on background image, .split-text on H1, .btn-magnetic on CTA.
Use inline style={{}} props for all layout and styling. Do NOT use any Tailwind utility classes.
Add parallax data-depth attributes to decorative elements.
Start with: import React, { useState, useEffect } from 'react';
End with: export default HeroSection;`
},
{
role: 'user',
content: [
...(blueprint.competitorScreenshot ? [{
type: 'image_url',
image_url: {
url: `data:image/png;base64,${blueprint.competitorScreenshot}`,
detail: 'high'
}
}, {
type: 'text',
text: `This is the competitor/reference page. Match this level of visual quality.
Extract: layout style, color tone, typography scale, CTA style, hero image placement.
Do NOT copy content. Build our hero with this visual DNA.\n\n`
}] : []),
{
type: 'text',
text: `Build the HeroSection component.
EXACT HEADLINE: "${contentMap?.hero?.headline || ''}"
EXACT CTA TEXT: "${contentMap?.hero?.primaryCTA || designBrief.heroCTA || 'Get Started'}"
SUBHEADLINE: "${contentMap?.hero?.subheadline || ''}"
CINEMATIC REQUIREMENTS:
- Background: .hero-cinematic-bg on bg image (GSAP slow zoom-out)
- H1: .split-text (character-by-character animation)
- CTA: .btn-magnetic (magnetic mouse follow)
- Decorative: .float-ambient, .float-drift
- data-depth="0.2" on foreground, data-depth="0.5" on background layer
- Floating stat cards with real numbers from contentMap
- Load: GSAP + ScrollTrigger from CDN (no Tailwind)
COLORS: accent='${accentVal}', primary='${primaryVal}'`
}
]
}
];
const heroRes = await client.chat.completions.create({
model: 'gpt-4o',
max_completion_tokens: 8000,
messages: heroMessages
});
return sanitizeJSX(heroRes.choices[0].message?.content || '');
}

  // ══════════════════════════════════════════════════════════════
  // HERO STRATEGY
  // ══════════════════════════════════════════════════════════════
  if (type === 'hero-strategy') {
    const input       = typeof data === 'string' ? data : safeJsonStringify(data || {});
    const personality = extra || {};

    const text = await callGPT(
      `You are a senior visual designer at Techjockey specializing in hero sections.
Decide the exact hero composition, media usage, and visual treatment. Return ONLY valid JSON.`,

      `Design the hero section strategy.

INPUT: ${input.substring(0, 5000)}
PERSONALITY: ${safeJsonStringify(personality)}

CREATIVITY RULES:
- Hero must use an unexpected layout — NOT always text-left image-right
- At least ONE section must have a dark background with light text
- Feature sections must alternate: left/right, dark/light
- CTA buttons must use the brand accent color — never generic blue
- Typography size hierarchy must be dramatic: H1 at least 60px, H2 at least 36px
- At least 2 sections must have decorative CSS elements (orbs, grid lines, gradient meshes)
- The page must feel like it was designed by a senior designer, not generated

Rules:
- Strong images → decide exactly how to use (background, side panel, layered).
- Video → decide autoplay or preview card.
- No media → CSS-only hero treatment.
- Never default to centered-text-only unless editorial/minimal.


Return:
{
  "layout": "text-left-media-right | text-right-media-left | background-overlay | centered | css-visual-only",
  "primaryVisual": "url or null",
  "secondaryVisual": "url or null",
  "accentVisuals": [],
  "backgroundImage": "url or null",
  "backgroundVideo": "url or null",
  "backgroundTreatment": "solid | radial-gradient | mesh-gradient | grid-overlay | spotlight | noise-texture",
  "overlayStyle": "none | dark | light | gradient",
  "headline": "",
  "subheadline": "",
  "ctaText": "",
  "secondaryCtaText": "",
  "floatingChips": [],
  "animationStyle": "none | fade-up | stagger | scale-in",
  "designNote": ""
}`,
      2500
    );
    return extractJSON(text);
  }

  // ══════════════════════════════════════════════════════════════
// SECTION REGENERATE — feedback-based section revision
// ══════════════════════════════════════════════════════════════
if (type === 'section-regenerate') {
  const payload = typeof data === 'string' ? extractJSON(data) : (data || {});

  const originalJsx = payload.originalJsx || '';
  const targetSection = payload.targetSection || 'full-page';
  const feedbackType = payload.feedbackType || 'other';
  const feedbackText = payload.feedbackText || '';
  const feedbackMemory = extra?.feedbackMemory || '';

  const text = await callGPT(
    `You are a senior React landing page engineer and Techjockey design systems fixer.
You will receive a complete React JSX landing page and user feedback about one section.
Your job is to return the COMPLETE revised React JSX file, not only the section.
Do not break imports, exports, footer, nav, forms, CTAs, images, or existing React hooks.
Return ONLY JSX code. No markdown. No explanation.`,

    `
TARGET SECTION:
${targetSection}

FEEDBACK TYPE:
${feedbackType}

USER FEEDBACK:
${feedbackText}

${feedbackMemory || ''}

ORIGINAL JSX:
${originalJsx.substring(0, 22000)}

TASK:
- Fix only the target section if possible.
- If targetSection is "full-page", apply the feedback globally.
- Preserve all existing content unless feedback specifically asks to change it.
- Preserve Techjockey nav and footer rules.
- Preserve CTA href/text rules already present in the file.
- Preserve form placement if form exists.
- Preserve working React syntax.
- Do not remove export default LandingPage.
- Return the full revised JSX file.
`,
    14000
  );

  return sanitizeJSX(text);
}
  // ══════════════════════════════════════════════════════════════
// FIX — targeted fix pass on generated output
// ══════════════════════════════════════════════════════════════
if (type === 'fix') {
  const originalCode = typeof data === 'string' ? data : '';
  const fixContext   = extra || {};

  const issueList = (fixContext.issues || [])
    .map((issue, i) => `${i + 1}. ${typeof issue === 'string' ? issue : JSON.stringify(issue)}`)
    .join('\n');

  const text = await callGPT(
    `You are a senior React developer doing a targeted fix pass on a landing page component.
Fix ONLY the specific issues listed below.
Do NOT rewrite the entire component.
Do NOT change sections that are not mentioned in the issues.
Return the complete fixed React component from import to export default.

ABSOLUTE CONSTRAINTS — NEVER DO ANY OF THESE:
- Never rewrite or shorten the hero headline. It comes from the client and is final.
- Never invent logo names like "Adobe", "HubSpot", "Canva", "Salesforce" or any company name.
- Never add a trust bar or logo section if no real logo URLs are provided in the component.
- Never invent testimonial quotes, author names, stats, or pricing.
- Never add sections that were not in the original component.
- If a fix requires content that does not exist in the original component, SKIP that fix entirely.`,

    `Fix these specific issues:

ISSUES TO FIX:
${issueList}

DESIGN CONTEXT:
- Theme: ${fixContext.blueprint?.themeFamily || ''}
- Surface: ${fixContext.blueprint?.surfaceStyle || ''}
- Primary color: ${fixContext.personality?.colours?.primary || ''}

ORIGINAL COMPONENT (fix this):
${originalCode.substring(0, 12000)}

Return the complete fixed component starting with:
import React, { useState, useEffect, useRef } from 'react';`,
    16000
  );

  return sanitizeJSX(text);
}

  throw new Error(`Unsupported generation type: ${type}`);
}

module.exports = { runGeneration };