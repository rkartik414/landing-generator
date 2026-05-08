'use strict';
// ─────────────────────────────────────────────────────────────────────────────
// SLOT MAPPER
// Maps contentMap + mediaPlan → slot values for every section
// Rule-based — zero AI calls needed
// ─────────────────────────────────────────────────────────────────────────────

// REPLACE the entire buildSlotMap function with this:

function buildSlotMap(contentMap, mediaPlan, blueprint, selectedSections) {
  // ── Pull everything from contentMap — no hardcoded product references ──
  const productName    = contentMap?.productName    || 'Product';
  const productCat     = contentMap?.productCategory || '';
  const hero           = contentMap?.hero           || {};
  const trust          = contentMap?.trust          || {};
  const pricing        = contentMap?.pricing        || {};
  const testimonials   = contentMap?.testimonials   || [];
  const news           = contentMap?.news           || [];
  const sections       = contentMap?.productSections || [];
  const extras         = contentMap?.extras         || [];

  // ── Media — from mediaPlan ────────────────────────────────────────────
  const heroVideo   = mediaPlan?.demos?.heroDemo
                   || mediaPlan?.hero?.backgroundVideo || '';
  const heroImage   = mediaPlan?.hero?.primaryVisual  || '';
  const logoUrls    = mediaPlan?.trust?.logos         || [];
  const sectionImgs = (mediaPlan?.productSections || []).map(s => s.primaryPreview || '');
  const demoVideos  = [
    mediaPlan?.demos?.heroDemo,
    ...(mediaPlan?.demos?.sectionDemos || [])
  ].filter(Boolean);

  const ctaText = hero.primaryCTA || 'Get Free Consultation';

  // ── Accent word — pick the most distinctive noun from headline ────────
  function extractAccentWord(headline) {
    if (!headline) return '';
    const skip = new Set([
      'simple','the','for','your','with','from','and','our','all','get',
      'how','why','what','make','let','use','new','best','top','free',
      'fast','easy','smart','next','just','that','this','their','its',
      'are','you','can','will','more','into'
    ]);
    const words = headline.toLowerCase().replace(/[^a-z\s]/g, '').split(/\s+/);
    return words.find(w => w.length > 5 && !skip.has(w)) || words[1] || '';
  }

  // ── Stats — extract real numbers from contentMap, never invent ────────
  function buildStats() {
    const raw       = trust.customerCount || trust.socialProof || '';
    const numMatch  = raw.match(/([\d,]+\+?)/);
    const count     = numMatch ? numMatch[0] : null;
    const rating    = raw.match(/(\d+\.?\d*)\s*(?:star|\/\s*5|rating)/i)?.[1];
    const speed     = raw.match(/(\d+)x?\s*(?:faster|speed|quick)/i)?.[1];

    return {
      // Only include stats we can derive from real content
      s1v: count        || (sections.length > 0 ? sections.length + ' modules' : null),
      s1l: count        ? 'Happy Customers' : (sections.length > 0 ? 'Product Modules' : null),
      s1n: trust.socialProof || '',
      s2v: rating       ? rating + '/5' : (pricing.plans?.length ? pricing.plans.length + ' Plans' : null),
      s2l: rating       ? 'Average Rating' : (pricing.plans?.length ? 'Pricing Options' : null),
      s2n: rating       ? 'Based on verified reviews' : '',
      s3v: speed        ? speed + '×' : (testimonials.length ? testimonials.length + '+' : null),
      s3l: speed        ? 'Faster Performance' : (testimonials.length ? 'Customer Reviews' : null),
      s3n: speed        ? 'Benchmark results' : '',
    };
  }

  const stats = buildStats();

  // ── Feature chips — from hero or first section ────────────────────────
  function buildChips() {
    // Try hero supporting line first
    if (hero.supportingLine) {
      const fromLine = hero.supportingLine.split(/[,·•|]/).map(c => c.trim()).filter(Boolean);
      if (fromLine.length >= 2) return fromLine.slice(0, 5);
    }
    // Fall back to first features of each section
    return sections
      .slice(0, 4)
      .map(s => s.name || s.label || (s.features?.[0]?.title) || '')
      .filter(Boolean);
  }

  // ── Section descriptions — use actual content ─────────────────────────
  function getSectionDesc(index) {
    return sections[index]?.description
        || sections[index]?.features?.[0]?.description
        || hero.subheadline
        || '';
  }

  // ── Pricing plans — pass through exactly as-is from contentMap ────────
  const pricingPlans = (pricing.plans || []).map((p, i) => ({
    ...p,
    highlighted: p.discount
      ? true
      : i === 1 && (pricing.plans || []).length > 1, // middle plan highlighted
  }));

  // ── Why Techjockey benefits — always 4, always relevant ───────────────
  const whyBenefits = [
    { title: 'Free Expert Consultation',
      description: `Get matched with the right ${productCat || 'software'} by our B2B experts.` },
    { title: 'Verified Reviews',
      description: `Real feedback from businesses using ${productName}.` },
    { title: 'Best Price Guarantee',
      description: 'Competitive pricing with EMI options available.' },
    { title: 'Dedicated Support',
      description: 'Onboarding, training, and post-sale assistance included.' },
  ];

  // ── BUILD MAP — one entry per section type ────────────────────────────
  const MAP = {

    'hero-video-form': {
      headline:    hero.headline    || productName,
      accent_word: extractAccentWord(hero.headline),
      description: hero.subheadline || '',
      cta_text:    ctaText,
      video_url:   heroVideo,
      chips:       buildChips(),
      review_count: trust.customerCount ? trust.customerCount.match(/([\d,]+\+?)/)?.[0] + ' Reviews' : '1,000+ Reviews',
    },

    'hero-dark-split': {
      headline:      hero.headline    || productName,
      description:   hero.subheadline || '',
      cta_text:      ctaText,
      secondary_cta: hero.secondaryCTA || 'See how it works',
      product_image: heroImage || sectionImgs[0] || '',
      stat_1_value:  stats.s1v || '', stat_1_label: stats.s1l || '',
      stat_2_value:  stats.s2v || '', stat_2_label: stats.s2l || '',
      stat_3_value:  stats.s3v || '', stat_3_label: stats.s3l || '',
    },

    'hero-light-editorial': {
      headline:      hero.headline    || productName,
      description:   hero.subheadline || '',
      cta_text:      ctaText,
      secondary_cta: hero.secondaryCTA || 'Watch demo',
      product_image: heroImage || sectionImgs[0] || '',
      customer_logos: logoUrls.slice(0, 6),
    },

    'hero-centered-dark': {
      headline:      hero.headline    || productName,
      description:   hero.subheadline || '',
      cta_text:      ctaText,
      video_url:     heroVideo,
      product_image: heroImage,
    },

    'trust-metrics-strip': {
      stat_1_value: stats.s1v || '', stat_1_label: stats.s1l || '', stat_1_note: stats.s1n,
      stat_2_value: stats.s2v || '', stat_2_label: stats.s2l || '', stat_2_note: stats.s2n,
      stat_3_value: stats.s3v || '', stat_3_label: stats.s3l || '', stat_3_note: stats.s3n,
    },

    'trust-logo-grid': {
      proof_text: trust.socialProof
        ? `Trusted by: ${trust.socialProof}`
        : `Trusted by businesses using ${productName}`,
      logos: logoUrls.slice(0, 6),
    },

    'features-expand-scroll': {
      section_label: sections[0]?.label || sections[0]?.name || productCat || 'Core Features',
      headline:      sections[0]?.headline || `What makes ${productName} powerful`,
      description:   getSectionDesc(0),
      features:      (sections[0]?.features || []).slice(0, 5),
      product_image: sectionImgs[0] || heroImage,
      cta_text:      ctaText,
      flip:          false,
    },

    'features-tabs-dark': {
      section_label: 'Everything included',
      headline:      hero.supportingLine || `All the tools ${productName} offers`,
      description:   hero.subheadline || '',
      tabs: sections.slice(0, 4).map((s, i) => ({
        title:       s.name || s.label || `Module ${i + 1}`,
        summary:     s.features?.[0]?.title || s.headline || '',
        description: s.description || s.headline || '',
        features:    (s.features || []).slice(0, 4).map(f => f.title).filter(Boolean),
        image_url:   sectionImgs[i] || '',
      })),
      bg_dark: true,
    },

    'features-alternating': {
      section_label: productCat || 'Product Modules',
      headline:      `Built for every workflow`,
      sections: sections.slice(0, 3).map((s, i) => ({
        num:         String(i + 1).padStart(2, '0'),
        title:       s.headline || s.name || '',
        description: s.description || '',
        features:    (s.features || []).slice(0, 4).map(f => f.title).filter(Boolean),
        image_url:   sectionImgs[i] || '',
        video_url:   i === 0 ? (heroVideo || '') : '',
      })),
    },

    'features-icon-grid': {
      section_label: sections[1]?.label || sections[1]?.name || 'Key Capabilities',
      headline:      sections[1]?.headline
                  || sections[0]?.headline
                  || `More from ${productName}`,
      description:   getSectionDesc(1) || getSectionDesc(0),
      // Use whichever section has more features
      features: (
        (sections[1]?.features || []).length >= (sections[0]?.features || []).length
          ? sections[1]?.features
          : sections[0]?.features
        || []
      ).slice(0, 6),
      dark_bg: false,
    },

    'gallery-video-wall': {
      section_label: 'See it in action',
      headline:      `${productName} — live outputs`,
      description:   hero.supportingLine || hero.subheadline || '',
      videos: demoVideos.slice(0, 4).map((url, i) => ({
        url,
        // Use actual feature names as captions, not generic labels
        caption: sections[i]?.name
               || sections[i]?.label
               || (sections[0]?.features?.[i]?.title)
               || `Demo ${i + 1}`,
      })),
    },

    'product-demo-video': {
      section_label: sections[0]?.label || 'Live Demo',
      headline:      sections[0]?.headline || `See ${productName} in action`,
      description:   getSectionDesc(0),
      video_url:     heroVideo || demoVideos[0] || '',
      cta_text:      ctaText,
    },

    'why-techjockey': {
      points: whyBenefits,
    },

    'pricing-dark-cards': {
      section_label: pricing.headline ? '' : 'Pricing',
      headline:      pricing.headline || `${productName} Pricing`,
      plans:         pricingPlans,
    },

    'pricing-light-cards': {
      section_label: 'Pricing',
      headline:      pricing.headline || `${productName} Plans`,
      plans:         pricingPlans,
      emi_text:      pricing.emiText || '',
    },

    'testimonials-carousel': {
      section_label: 'What customers say',
      headline:      `Loved by teams using ${productName}`,
      description:   trust.socialProof || '',
      testimonials,
    },

    'testimonials-grid': {
      section_label: 'Customer reviews',
      headline:      `What businesses say about ${productName}`,
      testimonials:  testimonials.slice(0, 6),
    },

    'form-split-dark': {
      headline:    `Get started with ${productName}`,
      description: `Talk to our experts and get a free demo tailored to your team.`,
      benefits: [
        { title: 'Free 30-min consultation',
          description: `Understand if ${productName} fits your needs.` },
        { title: `Custom ${productCat || 'product'} demo`,
          description: 'See exactly the features relevant to you.' },
        { title: 'No commitment required',
          description: 'Explore at your own pace, no pressure.' },
        { title: 'Expert onboarding support',
          description: 'We help you get up and running fast.' },
      ],
      cta_text:     ctaText,
      product_name: productName,
    },

    'media-news-strip': {
      section_label: 'As seen in',
      news_items:    news.slice(0, 3),
    },

    'cta-dark-banner': {
      headline:      `Ready to get started with ${productName}?`,
      description:   trust.socialProof
                  || hero.supportingLine
                  || `Join businesses using ${productName} to work smarter.`,
      cta_text:      ctaText,
      secondary_cta: 'See Pricing',
    },

    'cta-video-banner': {
      headline:   `Experience ${productName} today`,
      description: hero.supportingLine || hero.subheadline || '',
      cta_text:   ctaText,
      video_url:  heroVideo || demoVideos[0] || '',
    },
  };

  // Return only slots for sections that were actually picked
  const result = {};
  for (const spec of selectedSections) {
    result[spec.id] = MAP[spec.id] || {};
  }
  return result;
}

module.exports = { buildSlotMap };