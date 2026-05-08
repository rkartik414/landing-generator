const fs   = require('fs');
const path = require('path');

const SECTIONS_DIR = path.join(__dirname, '../sections');

// ── Pick which sections to use ───────────────────────────────────────
function pickSections(contentMap, requestIntent) {
  const sections = [];

  // Hero — always first
  const heroTemplate = requestIntent.includeForm
    ? 'hero-video-bg.html'        // form floats over video background
    : 'hero-split-product.html';  // left text, right product panel
  sections.push(heroTemplate);

  // Features — always
  sections.push('features-expand-scroll.html');

  // Video gallery — if videos available
  if (contentMap._hasVideos) sections.push('gallery-video-wall.html');

  // Second product section — if 2+ products
  if ((contentMap.productSections || []).length > 1) {
    sections.push('features-tabs-dark.html');
  }

  // Pricing — if requested
  if (requestIntent.includePricing !== false) {
    sections.push('pricing-dark-cards.html');
  }

  // Testimonials — if requested
  if (requestIntent.includeTestimonials !== false) {
    sections.push('testimonials-reel.html');
  }

  // CTA banner — always last before footer
  sections.push('cta-video-banner.html');

  return sections;
}

// ── Fill slots in a template ─────────────────────────────────────────
function fillSlots(templateHtml, slotMap) {
  let html = templateHtml;
  for (const [key, value] of Object.entries(slotMap)) {
    const regex = new RegExp(`\\{\\{${key}\\}\\}`, 'g');
    html = html.replace(regex, value || '');
  }
  return html;
}

// ── Inject brand colors via CSS variables ────────────────────────────
function injectBrandColors(html, colors) {
  const cssVars = `
<style id="brand-tokens">
  :root {
    --accent:   ${colors.accent   || '#ff6b00'};
    --primary:  ${colors.primary  || '#1a1a2e'};
    --bodyBg:   ${colors.bodyBg   || '#06080c'};
    --cardBg:   ${colors.cardBg   || 'rgba(255,255,255,0.05)'};
    --textDark: ${colors.textDark || '#ffffff'};
    --textMid:  ${colors.textMid  || 'rgba(255,255,255,0.65)'};
    --border:   ${colors.border   || 'rgba(255,255,255,0.1)'};
  }
</style>`;
  return html.replace('</head>', cssVars + '\n</head>');
}

// ── Always inject cinematic.js ───────────────────────────────────────
function injectCinematicScript(html) {
  const tag = `<script src="/public/cinematic.js" defer></script>`;
  return html.replace('</body>', tag + '\n</body>');
}

// ── Main assembler ───────────────────────────────────────────────────
async function assemblePage({ sections, slotMap, colors, mediaMap }) {
  // Load base shell
  const shell = fs.readFileSync(
    path.join(SECTIONS_DIR, '_shell.html'), 'utf8'
  );

  // Load and fill each section
  const filledSections = sections.map(sectionFile => {
    const templatePath = path.join(SECTIONS_DIR, sectionFile);
    if (!fs.existsSync(templatePath)) {
      console.warn('[templateAssembler] Missing section:', sectionFile);
      return '';
    }
    let html = fs.readFileSync(templatePath, 'utf8');

    // Inject media into section-specific slots
    const sectionName = sectionFile.replace('.html', '');
    if (mediaMap[sectionName]) {
      html = html.replace('{{section_video}}', mediaMap[sectionName].video || '');
      html = html.replace('{{section_image}}', mediaMap[sectionName].image || '');
    }

    return fillSlots(html, slotMap);
  });

  // Stitch into shell
  let page = shell.replace('{{sections}}', filledSections.join('\n'));

  // Inject brand + animation
  page = injectBrandColors(page, colors);
  page = injectCinematicScript(page);

  return page;
}

module.exports = { assemblePage, pickSections, fillSlots };