const fs = require('fs');
const path = require('path');

function getTrainingDir() {
  return path.join(__dirname, '../training-data');
}

function getHtmlFiles() {
  const dir = getTrainingDir();
  if (!fs.existsSync(dir)) return [];

  return fs.readdirSync(dir)
    .filter((f) => f.endsWith('.html') && f !== 'footer.html');
}

function safeRead(filePath) {
  try {
    return fs.readFileSync(filePath, 'utf8');
  } catch (e) {
    return '';
  }
}

function extractClassNames(html) {
  if (!html) return [];

  const matches = [...html.matchAll(/class=["']([^"']+)["']/gi)];
  const classSet = new Set();

  for (const match of matches) {
    const cls = (match[1] || '')
      .split(/\s+/)
      .map((x) => x.trim())
      .filter(Boolean);

    cls.forEach((c) => classSet.add(c));
  }

  return Array.from(classSet);
}

function detectSectionPatterns(html) {
  const lower = (html || '').toLowerCase();

  return {
    hasHero: /hero/.test(lower),
    hasTrust: /logo|trust|brand|customer/.test(lower),
    hasPricing: /pricing|plan/.test(lower),
    hasTestimonials: /testimonial|review|quote/.test(lower),
    hasForm: /form|lead|contact/.test(lower),
    hasNews: /news|media/.test(lower),
    usesTabs: /tab/.test(lower),
    usesAccordion: /accordion/.test(lower),
    usesSlider: /slider|carousel|swiper/.test(lower),
    usesDarkSections: /background:\s*#0|#111|#121212|dark/.test(lower)
  };
}

function scoreTemplate(file, productType = '') {
  const lowerFile = file.toLowerCase();
  const lc = (productType || '').toLowerCase();
  let score = 0;

  lc.split(/\s+/).forEach((word) => {
    if (word.length > 3 && lowerFile.includes(word)) score += 2;
  });

  return score;
}

function indexTemplates(productType = '') {
  const dir = getTrainingDir();
  const files = getHtmlFiles();

  const indexed = files.map((file) => {
    const fullPath = path.join(dir, file);
    const html = safeRead(fullPath);

    return {
      file,
      score: scoreTemplate(file, productType),
      classNames: extractClassNames(html),
      patterns: detectSectionPatterns(html),
      html
    };
  });

  indexed.sort((a, b) => b.score - a.score);
  return indexed;
}

function getTopTemplates(productType = '', limit = 3) {
  return indexTemplates(productType).slice(0, limit);
}

function getBestTemplate(productType = '') {
  const templates = getTopTemplates(productType, 1);
  return templates.length ? templates[0] : null;
}

function buildTemplateLearningPrompt(productType = '') {
  const templates = getTopTemplates(productType, 3);

  if (!templates.length) {
    return 'No training templates found. Use clean, production-ready HTML class naming and premium section structure.';
  }

  const summary = templates.map((tpl, idx) => `
TEMPLATE ${idx + 1}: ${tpl.file}

SECTION PATTERNS:
${JSON.stringify(tpl.patterns, null, 2)}

REUSABLE CLASS NAMES:
${tpl.classNames.slice(0, 150).join(', ')}

REFERENCE HTML:
${tpl.html.substring(0, 8000)}
`).join('\n\n');

  return `
Learn only from the provided Techjockey training templates.

Rules:
- Reuse class naming style from these templates.
- Reuse wrapper, section, card, CTA, hero, proof, pricing, form, and testimonial naming conventions where possible.
- Do not invent a completely unrelated CSS grammar.
- You may create new classes, but they must feel consistent with these templates.
- Preserve premium landing-page structure and Techjockey style memory.

${summary}
`;
}

module.exports = {
  indexTemplates,
  getTopTemplates,
  getBestTemplate,
  buildTemplateLearningPrompt
};