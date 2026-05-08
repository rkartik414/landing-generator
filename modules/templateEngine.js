// modules/templateEngine.js
// Extracts real designer CSS and section shells from training HTML files.
// Instead of passing training HTML as "inspiration" to GPT,
// this engine extracts the actual CSS and HTML structure so it can be
// used directly — GPT only replaces text content and image URLs.

const fs      = require('fs');
const path    = require('path');
const cheerio = require('cheerio');

const TRAINING_DIR = path.join(__dirname, '../training-data');

// ─── Product → Training file mapping ─────────────────────────────────────────
// Each entry maps keywords to a training file.
// The engine scores each file and picks the best match.
const TRAINING_MAP = {
  'allantivirus': [
    'antivirus', 'security', 'firewall', 'malware', 'protection', 'endpoint',
    'threat', 'cyber', 'ransomware', 'kaspersky', 'norton', 'bitdefender'
  ],
  'Cisco': [
    'network', 'networking', 'infrastructure', 'router', 'switch', 'cisco',
    'enterprise', 'IT', 'server', 'cloud', 'devops', 'monitoring', 'manageengine',
    'applications manager', 'performance'
  ],
  'filmora': [
    'video', 'media', 'creative', 'editing', 'animation', 'design', 'graphic',
    'filmora', 'AI video', 'image generation', 'AI image', 'seedream', 'seedance',
    'generative', 'content creation', 'photo', 'visual'
  ],
  'HRsoftware': [
    'HR', 'human resource', 'payroll', 'attendance', 'employee', 'HRMS', 'HCM',
    'recruitment', 'onboarding', 'leave management', 'workforce', 'people'
  ],
  'lmssoftware': [
    'LMS', 'learning', 'training', 'course', 'education', 'e-learning', 'elearning',
    'academy', 'skill', 'certification', 'knowledge', 'tutorial'
  ],
  'customersupport': [
    'helpdesk', 'help desk', 'support', 'customer service', 'ticket', 'CRM',
    'customer', 'zoho desk', 'freshdesk', 'zendesk', 'omnichannel', 'service desk',
    'collaboration', 'workplace', 'email', 'productivity'
  ]
};

// ─── Find best matching training file ────────────────────────────────────────
function findBestTrainingFile(productName, productCategory) {
  const search = (productName + ' ' + (productCategory || '')).toLowerCase();

  let bestFile  = null;
  let bestScore = -1;

  for (const [filename, keywords] of Object.entries(TRAINING_MAP)) {
    let score = 0;
    for (const keyword of keywords) {
      if (search.includes(keyword.toLowerCase())) {
        // Longer keyword = more specific match = higher score
        score += keyword.length;
      }
    }
    if (score > bestScore) {
      bestScore = score;
      bestFile  = filename;
    }
  }

  // Find actual file (case-insensitive, handles .html extension)
  if (!fs.existsSync(TRAINING_DIR)) return null;

  const files = fs.readdirSync(TRAINING_DIR).filter(f =>
    f.endsWith('.html') && f !== 'footer.html'
  );

  // Try exact match first
  const exactMatch = files.find(f =>
    f.toLowerCase().replace('.html', '') === bestFile?.toLowerCase()
  );

  if (exactMatch) {
    console.log('[templateEngine] Matched:', exactMatch, '(score:', bestScore, ')');
    return path.join(TRAINING_DIR, exactMatch);
  }

  // Fallback: partial name match
  const partialMatch = files.find(f =>
    bestFile && f.toLowerCase().includes(bestFile.toLowerCase().substring(0, 5))
  );

  if (partialMatch) {
    console.log('[templateEngine] Partial match:', partialMatch);
    return path.join(TRAINING_DIR, partialMatch);
  }

  // Final fallback: first available file
  if (files.length) {
    console.log('[templateEngine] Fallback to first file:', files[0]);
    return path.join(TRAINING_DIR, files[0]);
  }

  return null;
}

// ─── Extract <style> block from HTML ─────────────────────────────────────────
function extractFullCSS(html) {
  const match = html.match(/<style[^>]*>([\s\S]*?)<\/style>/i);
  return match ? match[1].trim() : '';
}

// ─── Extract CSS rules relevant to a section ─────────────────────────────────
// Pulls only CSS rules that reference the section ID or its direct children
function extractSectionCSS(fullCSS, sectionId) {
  if (!fullCSS || !sectionId) return '';

  const lines   = fullCSS.split('\n');
  const result  = [];
  let   depth   = 0;
  let   capture = false;

  for (const line of lines) {
    const trimmed = line.trim();

    // Detect if this rule references our section
    const referencesSection =
      trimmed.includes(`#${sectionId}`) ||
      trimmed.includes(`.${sectionId}`) ||
      trimmed.includes(`[data-section="${sectionId}"]`);

    if (referencesSection && !capture) {
      capture = true;
    }

    if (capture) {
      result.push(line);
      // Track brace depth to know when rule ends
      for (const char of line) {
        if (char === '{') depth++;
        if (char === '}') depth--;
      }
      if (depth <= 0 && trimmed.endsWith('}')) {
        capture = false;
        depth   = 0;
      }
    }
  }

  return result.join('\n');
}

// ─── Extract a section's HTML shell ──────────────────────────────────────────
// Returns the raw section HTML with content removed — only structure preserved
function extractSectionShell(html, sectionId) {
  const $ = cheerio.load(html);

  // Try ID selector first
  let section = $(`#${sectionId}`).first();

  // Try data-section attribute
  if (!section.length) {
    section = $(`[data-section="${sectionId}"]`).first();
  }

  // Try class name
  if (!section.length) {
    section = $(`.${sectionId}`).first();
  }

  if (!section.length) return null;

  return {
    outerHTML:  $.html(section),
    tagName:    section.prop('tagName') || 'section',
    id:         section.attr('id') || sectionId,
    classes:    section.attr('class') || '',
    childCount: section.children().length
  };
}

// ─── Extract all class names from an HTML string ─────────────────────────────
function extractClassNames(html) {
  if (!html) return [];
  const classes = new Set();
  const matches = html.matchAll(/class=["']([^"']+)["']/g);
  for (const m of matches) {
    (m[1] || '').split(/\s+/).map(c => c.trim()).filter(Boolean).forEach(c => classes.add(c));
  }
  return [...classes];
}

// ─── Extract CSS custom properties (:root variables) ─────────────────────────
function extractCSSTokens(css) {
  const match = css.match(/:root\s*\{([^}]+)\}/);
  if (!match) return {};

  const tokens = {};
  const lines  = match[1].split('\n');
  for (const line of lines) {
    const varMatch = line.match(/--([^:]+):\s*([^;]+);/);
    if (varMatch) {
      tokens['--' + varMatch[1].trim()] = varMatch[2].trim();
    }
  }
  return tokens;
}

// ─── Replace CSS token values with brand colors ──────────────────────────────
function injectBrandColors(css, brandColors) {
  if (!brandColors || !css) return css;

  let result = css;

  // Replace primary color
  if (brandColors.primaryColor) {
    // Replace the value of --color-primary or similar
    result = result.replace(
      /(--(?:color-primary|primary-color|brand-color|main-color)\s*:\s*)[^;]+;/gi,
      `$1${brandColors.primaryColor};`
    );
  }

  // Replace accent color
  if (brandColors.accentColor) {
    result = result.replace(
      /(--(?:color-accent|accent-color|cta-color|highlight-color)\s*:\s*)[^;]+;/gi,
      `$1${brandColors.accentColor};`
    );
  }

  return result;
}

// ─── Build the complete template context ─────────────────────────────────────
function getTemplateContext(productName, productCategory) {
  const filePath = findBestTrainingFile(productName, productCategory);
  if (!filePath || !fs.existsSync(filePath)) {
    console.warn('[templateEngine] No training file found for:', productName);
    return null;
  }

  const html      = fs.readFileSync(filePath, 'utf8');
  const filename  = path.basename(filePath);
  const fullCSS   = extractFullCSS(html);
  const cssTokens = extractCSSTokens(fullCSS);
  const allClasses = extractClassNames(html);

  // Extract each major section
  // These are the section IDs used in your training files
  const SECTION_IDS = ['hero', 'awards', 'trust', 'features', 'products', 'cart', 'pricing', 'testimonials', 'news', 'form', 'cta'];

  const sections = {};
  for (const id of SECTION_IDS) {
    const shell = extractSectionShell(html, id);
    if (shell) {
      sections[id] = {
        ...shell,
        css: extractSectionCSS(fullCSS, id),
        classes: extractClassNames(shell.outerHTML)
      };
    }
  }

  console.log('[templateEngine] Loaded:', filename, '| CSS:', fullCSS.length, 'chars | Sections found:', Object.keys(sections).join(', '));

  return {
    filename,
    filePath,
    fullHTML:   html,
    fullCSS,
    cssTokens,
    allClasses,
    sections
  };
}

// ─── Format template context for code generation prompt ──────────────────────
// This is what gets injected into claudeEngine's code prompt
function formatForCodePrompt(context, brandColors) {
  if (!context) {
    return 'No training template available — generate clean HTML using Techjockey design standards.';
  }

  // Inject brand colors into CSS
  let css = injectBrandColors(context.fullCSS, brandColors);

  // Build section class mapping
  const sectionMap = Object.entries(context.sections)
    .map(([id, s]) => `  #${id} → classes: [${s.classes.slice(0, 10).join(', ')}]`)
    .join('\n');

  // Build section HTML reference (stripped of content for brevity)
  const sectionHTMLRef = Object.entries(context.sections)
    .map(([id, s]) => {
      // Show first 400 chars of each section shell
      const preview = s.outerHTML.substring(0, 400).replace(/\s+/g, ' ');
      return `--- SECTION #${id} SHELL ---\n${preview}...`;
    })
    .join('\n\n');

  return `
━━━━ DESIGNER TEMPLATE: ${context.filename} ━━━━

CRITICAL RULES — NON-NEGOTIABLE:
1. Copy the FULL CSS below into your <style> block FIRST
2. Use the EXACT same HTML section structure and class names shown below
3. Only change: text content, image src URLs, and color values
4. Do NOT invent new class names for things that already exist in the CSS
5. Do NOT change the HTML structure — only inject real content into the existing shells

SECTION → CLASS MAPPING (use these class names exactly):
${sectionMap}

ALL AVAILABLE CSS CLASSES:
${context.allClasses.join(' ')}

━━━━ FULL DESIGNER CSS — COPY THIS INTO YOUR <style> BLOCK ━━━━
${css.substring(0, 8000)}
━━━━ END CSS ━━━━

━━━━ SECTION HTML SHELLS — FOLLOW THESE STRUCTURES ━━━━
${sectionHTMLRef}
━━━━ END SHELLS ━━━━

CONTENT INJECTION RULES:
- Replace all text nodes with real content from contentMap
- Replace all img src="" with real image URLs from mediaPlan
- Keep all CSS class names exactly as shown
- Keep all data attributes exactly as shown
- The layout structure must remain identical to the shells above
`.trim();
}

// ─── Direct content injection into a section shell ───────────────────────────
// For precise injection: takes a section shell and swaps content
// Returns modified HTML string
function injectContentIntoShell(sectionShell, contentData, imageUrl, accentColor) {
  if (!sectionShell || !contentData) return sectionShell;

  const $ = cheerio.load(sectionShell);

  // Inject headline
  if (contentData.headline) {
    const headlineEl = $('h1, h2').first();
    if (headlineEl.length) headlineEl.text(contentData.headline);
  }

  // Inject subheadline
  if (contentData.subheadline || contentData.description) {
    const subEl = $('p').first();
    if (subEl.length) subEl.text(contentData.subheadline || contentData.description);
  }

  // Inject primary image
  if (imageUrl) {
    const imgEl = $('img').first();
    if (imgEl.length) {
      imgEl.attr('src', imageUrl);
      imgEl.attr('alt', contentData.headline || '');
    }
  }

  // Inject CTA text
  if (contentData.primaryCTA) {
    $('a.btn-primary, button.btn-primary, .cta-btn').first().text(contentData.primaryCTA);
  }

  // Inject accent color (replace hardcoded colors)
  if (accentColor) {
    let html = $.html();
    // This is a rough replacement — for precise control use CSS variables
    html = html.replace(/color:\s*#[0-9a-fA-F]{6}/g, (match) => {
      // Only replace accent-like colors (saturated, not grey)
      return match; // Keep as-is — let CSS variables handle it
    });
    return html;
  }

  return $.html();
}

// ─── Quick utility: get just the CSS for a product ───────────────────────────
// Used when you only need the CSS, not the full context
function getCSSForProduct(productName, productCategory, brandColors) {
  const context = getTemplateContext(productName, productCategory);
  if (!context) return '';
  return injectBrandColors(context.fullCSS, brandColors);
}

// ─── List all available training files ───────────────────────────────────────
function listTrainingFiles() {
  if (!fs.existsSync(TRAINING_DIR)) return [];
  return fs.readdirSync(TRAINING_DIR)
    .filter(f => f.endsWith('.html') && f !== 'footer.html')
    .map(f => ({
      name:     f.replace('.html', ''),
      filename: f,
      path:     path.join(TRAINING_DIR, f),
      size:     fs.statSync(path.join(TRAINING_DIR, f)).size
    }));
}


// ─── Debug: print what the engine found for a product ────────────────────────
function debugForProduct(productName, productCategory) {
  const context = getTemplateContext(productName, productCategory);
  if (!context) {
    console.log('[templateEngine] DEBUG: No match found');
    return;
  }

  console.log('[templateEngine] DEBUG for:', productName);
  console.log('  Matched file:', context.filename);
  console.log('  CSS length:', context.fullCSS.length, 'chars');
  console.log('  CSS tokens:', Object.keys(context.cssTokens).length);
  console.log('  All classes:', context.allClasses.length);
  console.log('  Sections found:', Object.keys(context.sections));

  for (const [id, section] of Object.entries(context.sections)) {
    console.log(`  Section #${id}: ${section.childCount} children, ${section.classes.length} classes, ${section.outerHTML.length} chars`);
  }
}

module.exports = {
  getTemplateContext,
  formatForCodePrompt,
  injectContentIntoShell,
  getCSSForProduct,
  findBestTrainingFile,
  extractFullCSS,
  extractSectionShell,
  extractClassNames,
  extractCSSTokens,
  injectBrandColors,
  listTrainingFiles,
  debugForProduct,
  TRAINING_MAP
};