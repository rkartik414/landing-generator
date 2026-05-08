const axios = require('axios');
const cheerio = require('cheerio');

async function fetchReferencePage(url) {
  if (!url || !url.startsWith('http')) {
    throw new Error('Invalid reference landing page URL');
  }

  const res = await axios.get(url, {
    timeout: 15000,
    headers: {
      'User-Agent': 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_15_7) AppleWebKit/537.36 Chrome/120.0 Safari/537.36'
    }
  });

  return absolutizeReferenceAssets(res.data, url);
}

function absolutizeUrl(assetUrl, pageUrl) {
  if (!assetUrl) return assetUrl;

  const trimmed = String(assetUrl).trim();

  if (
    trimmed.startsWith('http://') ||
    trimmed.startsWith('https://') ||
    trimmed.startsWith('data:') ||
    trimmed.startsWith('mailto:') ||
    trimmed.startsWith('tel:') ||
    trimmed.startsWith('javascript:') ||
    trimmed.startsWith('#')
  ) {
    return trimmed;
  }

  try {
    return new URL(trimmed, pageUrl).href;
  } catch (e) {
    return trimmed;
  }
}

function absolutizeReferenceAssets(html, pageUrl) {
  const $ = cheerio.load(html || '');

  $('img[src]').each((_, el) => {
    const src = $(el).attr('src');
    $(el).attr('src', absolutizeUrl(src, pageUrl));
  });

  $('source[src]').each((_, el) => {
    const src = $(el).attr('src');
    $(el).attr('src', absolutizeUrl(src, pageUrl));
  });

  $('video[src]').each((_, el) => {
    const src = $(el).attr('src');
    $(el).attr('src', absolutizeUrl(src, pageUrl));
  });

  $('script[src]').each((_, el) => {
    const src = $(el).attr('src');
    $(el).attr('src', absolutizeUrl(src, pageUrl));
  });

  $('link[href]').each((_, el) => {
    const href = $(el).attr('href');
    $(el).attr('href', absolutizeUrl(href, pageUrl));
  });

  $('a[href]').each((_, el) => {
    const href = $(el).attr('href');
    $(el).attr('href', absolutizeUrl(href, pageUrl));
  });

  $('[style]').each((_, el) => {
    const style = $(el).attr('style');
    if (!style) return;

    const updated = style.replace(
      /url\((['"]?)(.*?)\1\)/gi,
      (_, quote, assetPath) => {
        const abs = absolutizeUrl(assetPath, pageUrl);
        return `url(${quote || ''}${abs}${quote || ''})`;
      }
    );

    $(el).attr('style', updated);
  });

  return $.html();
}

function guessSectionType(text, className = '', id = '') {
  const hay = `${text} ${className} ${id}`.toLowerCase();

  if (hay.includes('hero') || hay.includes('banner')) return 'hero';
  if (hay.includes('trust') || hay.includes('logo') || hay.includes('client')) return 'trust';
  if (hay.includes('feature') || hay.includes('capabilities')) return 'features';
  if (hay.includes('pricing') || hay.includes('plan')) return 'pricing';
  if (hay.includes('testimonial') || hay.includes('review')) return 'testimonials';
  if (hay.includes('faq')) return 'faq';
  if (hay.includes('form') || hay.includes('demo') || hay.includes('lead')) return 'form';
  if (hay.includes('footer')) return 'footer';

  return 'generic';
}

function buildReferenceLayoutMap(html) {
  const $ = cheerio.load(html || '');
  const sections = [];

  $('section, header, footer, main > div').each((i, el) => {
    const id = $(el).attr('id') || '';
    const className = $(el).attr('class') || '';
    const text = $(el).text().replace(/\s+/g, ' ').trim().slice(0, 300);

    const images = $(el).find('img').length;
    const videos = $(el).find('video, iframe').length;
    const buttons = $(el).find('a, button').length;
    const forms = $(el).find('form').length;
    const headings = $(el).find('h1, h2, h3').length;

    const type = guessSectionType(text, className, id);

    if (!text && !images && !videos && !forms) return;

    sections.push({
      index: i,
      id,
      className,
      type,
      headings,
      images,
      videos,
      buttons,
      forms,
      textSample: text.slice(0, 120)
    });
  });

  const hero = sections.find(s => s.type === 'hero') || null;
  const trust = sections.find(s => s.type === 'trust') || null;
  const form = sections.find(s => s.type === 'form') || null;

  return {
    sectionOrder: sections.map(s => s.type),
    sections,
    heroType: hero ? {
      hasImages: hero.images > 0,
      hasVideos: hero.videos > 0,
      hasButtons: hero.buttons > 0
    } : null,
    hasTrustBand: !!trust,
    hasFormSection: !!form,
    ctaHeavySections: sections
      .filter(s => s.buttons >= 2)
      .map(s => ({ index: s.index, type: s.type })),
    mediaHeavySections: sections
      .filter(s => (s.images + s.videos) >= 2)
      .map(s => ({ index: s.index, type: s.type }))
  };
}

async function adaptBlueprintFromReference({
  referenceLayoutMap,
  contentMap,
  designStrategy,
  designIntent,
  preserveMode = 'structure-styling',
  strictLayoutMatch = false,
  requestIntent = {}
}) {
  const sectionOrder = Array.isArray(referenceLayoutMap?.sectionOrder)
    ? referenceLayoutMap.sectionOrder
    : ['hero', 'trust', 'features', 'testimonials', 'pricing', 'footer'];

  return {
    source: 'reference-adapted',
    preserveMode,
    strictLayoutMatch,
    sectionOrder,
    sections: sectionOrder.map((type, i) => ({
      id: `${type}-${i + 1}`,
      type,
      layout:
        preserveMode === 'structure-only'
          ? 'auto'
          : type === 'hero'
            ? 'reference-preserved-hero'
            : 'reference-preserved-section',
      renderMode:
        preserveMode === 'structure-styling-cta'
          ? 'strict-reference'
          : 'adaptive-reference'
    })),
    strategy: designStrategy || {},
    intent: designIntent || {},
    contentMap: contentMap || {},
    includeForm: !!requestIntent.includeForm,
    includePricing: requestIntent.includePricing !== false,
    includeTestimonials: requestIntent.includeTestimonials !== false,
    includeTrust: requestIntent.includeTrust !== false
  };
}

module.exports = {
  fetchReferencePage,
  buildReferenceLayoutMap,
  adaptBlueprintFromReference
};