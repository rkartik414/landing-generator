const cheerio = require('cheerio');

function setText($root, selector, value) {
  if (!value) return;
  const el = $root.find(selector).first();
  if (el.length) el.text(value);
}

function setTextsByIndex($root, selector, values = []) {
  if (!Array.isArray(values) || !values.length) return;
  const els = $root.find(selector);
  els.each((i, el) => {
    if (values[i]) {
      $root.find(el).text(values[i]);
    }
  });
}

function setAttr($root, selector, attr, value) {
  if (!value) return;
  const el = $root.find(selector).first();
  if (el.length) el.attr(attr, value);
}

function removeNode($root, selector) {
  $root.find(selector).remove();
}

function setTextMulti($root, selectors = [], value) {
  if (!value || !Array.isArray(selectors)) return;

  for (const selector of selectors) {
    const el = $root.find(selector).first();
    if (el.length) {
      el.text(value);
      return;
    }
  }
}

function replaceTopImages($root, selectors = [], images = []) {
  if (!Array.isArray(selectors) || !Array.isArray(images) || !images.length) return;

  let imageIndex = 0;

  for (const selector of selectors) {
    const els = $root.find(selector);

    for (let i = 0; i < els.length; i += 1) {
      const img = images[imageIndex];
      if (!img?.url) return;

      const el = els.eq(i);
      const tagName = (el.get(0)?.tagName || '').toLowerCase();

      if (tagName === 'img' || tagName === 'source' || tagName === 'video') {
        el.attr('src', img.url);
      }

      imageIndex += 1;
    }
  }
}

function replaceListItems($root, listSelector, itemSelector, items = []) {
  if (!Array.isArray(items) || !items.length) return;

  const list = $root.find(listSelector).first();
  if (!list.length) return;

  const existing = list.find(itemSelector);
  if (!existing.length) return;

  const template = existing.first().clone();
  existing.remove();

  items.forEach(item => {
    const clone = template.clone();

    const textTargets = clone.find('.include-text, .support-text, p, span');
    if (textTargets.length) {
      textTargets.last().text(item);
    } else {
      clone.text(item);
    }

    list.append(clone);
  });
}

function replaceFeatureBoxes($root, sectionSelector, features = []) {
  if (!Array.isArray(features) || !features.length) return;

  const section = $root.find(sectionSelector).first();
  if (!section.length) return;

  const boxes = section.find('.feature-box');
  if (!boxes.length) return;

  const template = boxes.first().clone();
  boxes.remove();

  features.forEach(feature => {
    const clone = template.clone();

    const title = feature?.title || feature?.headline || '';
    const desc = feature?.description || feature?.text || '';

    const h3 = clone.find('h3').first();
    const p = clone.find('p').first();

    if (h3.length && title) h3.text(title);
    if (p.length && desc) p.text(desc);

    section.find('.marquee-content').append(clone);
  });
}

function replaceBusyBoxes($root, features = [], productName = '') {
  if (!Array.isArray(features) || !features.length) return;

  const heading = $root.find('section.section3 .busy-heading').first();
  if (heading.length && productName) {
    heading.html(`Why Choose<br class="web_br"><span class="hightligt-ct">${productName}</span>`);
  }

  const introText = $root.find('section.section3 .busy_text').first();
  if (introText.length) {
    const firstFeature = features[0];
    const intro =
      firstFeature?.description ||
      `${productName} helps teams work better with powerful collaboration and productivity tools.`;

    introText.text(intro);
  }

  const allBusyBoxes = $root.find('section.section3 .busy-box.box2');
  if (!allBusyBoxes.length) return;

  allBusyBoxes.each((i, el) => {
    const feature = features[i];
    if (!feature) return;

    const box = $root.find(el);
    const title = feature?.title || feature?.headline || '';
    const desc = feature?.description || feature?.text || '';

    const titleEl = box.find('.busy-title').first();
    const descEl = box.find('.busy-sub').first();

    if (titleEl.length && title) titleEl.text(title);
    if (descEl.length && desc) descEl.text(desc);
  });
}

function replaceTestimonials($root, testimonials = []) {
  if (!Array.isArray(testimonials) || !testimonials.length) return;

  const row = $root.find('.testimonial_wrap .testimonial-row').first();
  if (!row.length) return;

  const boxes = row.find('.testimonial-box');
  if (!boxes.length) return;

  const template = boxes.first().clone();
  boxes.remove();

  testimonials.slice(0, 3).forEach(t => {
    const clone = template.clone();

    const quote = t?.quote || '';
    const author = t?.author || 'Customer';
    const designation =
      [t?.designation, t?.company].filter(Boolean).join(' | ') || 'Verified User';

    const quoteP = clone.find('.testimonial-content p').first();
    const authorP = clone.find('.user_name').first();
    const designationSpan = clone.find('.user-designation').first();

    if (quoteP.length && quote) quoteP.text(quote);
    if (authorP.length && author) authorP.text(author);
    if (designationSpan.length && designation) designationSpan.text(`(${designation})`);

    row.append(clone);
  });
}

function replaceTrustedHeading($root, trust = {}) {
  const customerCount = trust?.customerCount || '';
  const socialProof = trust?.socialProof || '';

  const h2 = $root.find('section.section2 .section-title h2').first();
  if (!h2.length) return;

  if (customerCount) {
    h2.html(`Trusted by <span class="hightligt-ct">${customerCount}</span> <br class="mweb_br"> Businesses Globally`);
  } else if (socialProof) {
    h2.text(socialProof);
  }
}

async function replicateFromReferenceHtml({
  referenceHtml,
  contentMap,
  mediaPlan,
  requestIntent
}) {
  const $ = cheerio.load(referenceHtml || '');
  const body = $('body');

  const heroHeadline = contentMap?.hero?.headline || '';
  const heroSubheadline = contentMap?.hero?.subheadline || '';
  const heroPrimaryCTA = contentMap?.hero?.primaryCTA || '';

  const allFeatures = (contentMap?.productSections || [])
    .flatMap(s => (s.features || []));

  const featureTitles = allFeatures
    .map(f => f.title)
    .filter(Boolean)
    .slice(0, 3);

  const featureObjects = allFeatures.slice(0, 8);

  const pricingItems = contentMap?.pricing?.plans?.[0]?.includes || [];
  const productName = contentMap?.productName || '';

  if (productName) {
    $('title').text(productName);
  }

  setTextMulti(body, [
    'header .btn a',
    '.main_header .btn a'
  ], heroPrimaryCTA || 'Get Started');

  setTextMulti(body, [
    'section.section1 h1',
    '.hero h1',
    '.banner h1',
    'header h1',
    'main h1',
    'h1'
  ], heroHeadline);

  setTextMulti(body, [
    'section.section1 p.text_1',
    'section.section1 p',
    '.hero p',
    '.banner p',
    'header p',
    'main p'
  ], heroSubheadline);

  setTextMulti(body, [
    'section.section1 .banner-btn',
    'section.section1 a.primary_btn',
    'section.section1 a',
    'section.section1 button',
    '.hero a',
    '.hero button',
    '.banner a',
    '.banner button'
  ], heroPrimaryCTA);

  if (featureTitles.length) {
    replaceListItems(body, 'section.section1 .banner_list', 'li', featureTitles);
  }

  if (requestIntent?.includeTrust === false) {
    removeNode(body, 'section.section2');
  } else {
    replaceTrustedHeading(body, contentMap?.trust || {});
  }

  if (featureObjects.length) {
    replaceBusyBoxes(body, featureObjects, productName);
  }

  if (featureObjects.length) {
    replaceFeatureBoxes(body, 'section.section5', featureObjects);
  }

  setTextMulti(body, [
    'section.section8 .price-title',
    '.price-title',
    '.pricing h2',
    '.pricing-title'
  ], contentMap?.pricing?.headline || '');

  setTextMulti(body, [
    'section.section8 .product-name',
    '.product-name',
    '.pricing .product-title'
  ], productName);

  if (pricingItems.length) {
    const includeLists = body.find('section.section8 .include-list ul, .include-list ul');
    includeLists.each((i, ul) => {
      const scoped = $(ul);
      const chunk = pricingItems.slice(i * 4, (i + 1) * 4);
      if (!chunk.length) return;
      replaceListItems(scoped, 'ul', 'li', chunk);
    });
  }

  if (requestIntent?.includeTestimonials === false) {
    removeNode(body, '.testimonial_wrap');
  } else {
    setTextMulti(body, [
      '.testimonial_wrap .section-title h2',
      '.testimonial_wrap h2',
      '.testimonials h2'
    ], 'What Customers Say About ' + (productName || 'This Product') + '?');

    replaceTestimonials(body, contentMap?.testimonials || []);
  }

  if (requestIntent?.includeForm === false) {
    removeNode(body, '#popup1');
    removeNode(body, '.fixedcta');
  }

  if (Array.isArray(mediaPlan?.uploaded) && mediaPlan.uploaded.length) {
    replaceTopImages(body, [
      'section.section1 img',
      '.hero img',
      '.banner img',
      'section.section3 img',
      'section.section5 img',
      'section.section8 img',
      '.testimonial_wrap img'
    ], mediaPlan.uploaded);
  }

  return $.html();
}

module.exports = {
  replicateFromReferenceHtml
};