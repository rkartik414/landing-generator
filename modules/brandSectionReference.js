const puppeteer = require('puppeteer');

async function extractBrandSectionReference(url) {
  if (!url) return null;

  let browser;

  try {
    browser = await puppeteer.launch({
      headless: 'new',
      args: ['--no-sandbox', '--disable-setuid-sandbox']
    });

    const page = await browser.newPage();
    await page.setViewport({ width: 1440, height: 1400 });
    await page.goto(url, { waitUntil: 'domcontentloaded', timeout: 25000 });
    await new Promise(r => setTimeout(r, 2500));

    const data = await page.evaluate(() => {
      const clean = (v) => String(v || '').replace(/\s+/g, ' ').trim();

      const getStyle = (el) => {
        const s = window.getComputedStyle(el);
        return {
          display: s.display,
          gridTemplateColumns: s.gridTemplateColumns,
          flexDirection: s.flexDirection,
          backgroundColor: s.backgroundColor,
          color: s.color,
          fontFamily: s.fontFamily,
          borderRadius: s.borderRadius,
          boxShadow: s.boxShadow,
          padding: s.padding,
          gap: s.gap
        };
      };

      const sectionEls = Array.from(document.querySelectorAll(
        'header, nav, main section, section, [class*="hero"], [class*="feature"], [class*="pricing"], [class*="testimonial"], [class*="trust"]'
      )).slice(0, 14);

      const sections = sectionEls.map((el, index) => {
        const rect = el.getBoundingClientRect();
        const text = clean(el.innerText).slice(0, 500);
        const className = clean(el.className);
        const id = clean(el.id);

        const imgs = Array.from(el.querySelectorAll('img')).slice(0, 5).map(img => ({
          src: img.currentSrc || img.src || '',
          alt: img.alt || '',
          width: img.naturalWidth || img.width || 0,
          height: img.naturalHeight || img.height || 0
        }));

        const buttons = Array.from(el.querySelectorAll('a, button')).slice(0, 6).map(btn => ({
          text: clean(btn.innerText).slice(0, 80),
          className: clean(btn.className),
          href: btn.href || '',
          style: getStyle(btn)
        }));

        const cards = Array.from(el.querySelectorAll('[class*="card"], [class*="box"], [class*="item"], li'))
          .slice(0, 8)
          .map(card => ({
            text: clean(card.innerText).slice(0, 180),
            className: clean(card.className),
            style: getStyle(card)
          }));

        return {
          index,
          tag: el.tagName.toLowerCase(),
          id,
          className,
          width: Math.round(rect.width),
          height: Math.round(rect.height),
          top: Math.round(rect.top + window.scrollY),
          text,
          style: getStyle(el),
          images: imgs,
          buttons,
          cards
        };
      }).filter(s => s.height > 80 || s.text.length > 30);

      const rootStyle = window.getComputedStyle(document.body);

      return {
        title: document.title,
        bodyFont: rootStyle.fontFamily,
        bodyBg: rootStyle.backgroundColor,
        sections
      };
    });

    await browser.close();
    browser = null;

    return data;

  } catch (e) {
    if (browser) await browser.close().catch(() => {});
    console.warn('[BrandSectionReference] Failed:', e.message);
    return null;
  }
}

function summarizeBrandSectionReference(ref) {
  if (!ref || !Array.isArray(ref.sections)) return '';

  const sectionSummary = ref.sections.slice(0, 10).map((s) => {
    return `
SECTION ${s.index}
class/id: ${s.className || s.id || s.tag}
size: ${s.width}x${s.height}
bg: ${s.style?.backgroundColor}
font: ${s.style?.fontFamily}
layout: display=${s.style?.display}, columns=${s.style?.gridTemplateColumns}, flex=${s.style?.flexDirection}, gap=${s.style?.gap}
radius: ${s.style?.borderRadius}
shadow: ${s.style?.boxShadow}
text sample: ${s.text?.slice(0, 220)}
buttons: ${(s.buttons || []).map(b => b.text).filter(Boolean).join(' | ') || 'none'}
cards found: ${(s.cards || []).length}
images found: ${(s.images || []).length}
`;
  }).join('\n');

  return `
BRAND SECTION DESIGN REFERENCE:
Brand page title: ${ref.title || ''}
Brand body font: ${ref.bodyFont || ''}
Brand body background: ${ref.bodyBg || ''}

Use the brand URL as a section-level design reference.
Learn visual rhythm, section spacing, card shape, CTA style, feature layout, hero structure, and background treatment.
Do NOT copy exact brand content.
Do NOT copy full page HTML.
Only adapt design patterns that fit Techjockey landing page.

${sectionSummary}
`;
}

module.exports = {
  extractBrandSectionReference,
  summarizeBrandSectionReference
};