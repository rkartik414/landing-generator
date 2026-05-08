function textOfSection(section = {}) {
  return [
    section.id,
    section.name,
    section.label,
    section.headline,
    section.description,
    section.primaryCTA,
    ...(section.features || []).map(f => `${f.title || ''} ${f.description || ''}`)
  ].filter(Boolean).join(' ').toLowerCase();
}

function hasStrongMediaForSection(sectionText, analyzedImages = []) {
  return (analyzedImages || []).find(img => {
    if (!img?.url) return false;
    if (img.reject === true) return false;
    if ((img.confidence || 0) < 0.4) return false;

    const roleOk = [
      'ui-screenshot',
      'feature-illustration',
      'video-demo',
      'product-photo'
    ].includes(img.role);

    if (!roleOk) return false;

    const desc = [
      img.url,
      img.originalUrl,
      img.description,
      img.alt
    ].join(' ').toLowerCase();

    const wrongForWorkplace =
      /workplace|email|collaboration|productivity|office|suite/.test(sectionText) &&
      /password|security|firewall|vpn|antivirus|malware|cyber/.test(desc);

    if (wrongForWorkplace) return false;

    return true;
  }) || null;
}

function decideVisualTreatment(section = {}, analyzedImages = [], index = 0) {
  const text = textOfSection(section);
  const strongMedia = hasStrongMediaForSection(text, analyzedImages);

  if (/integration|connect|apps|api|marketplace|plugin|zoho|google|microsoft|slack|teams/.test(text)) {
    return {
      sectionId: section.id || section.name || `feature_${index}`,
      visualTreatment: 'integration-grid',
      useRealMedia: false,
      mediaUrl: null,
      visualBrief: 'Create a clean app integration grid with connected app tiles, subtle lines and branded accent highlights.',
      reason: 'Integration/app ecosystem content is clearer as an app grid than as a random image.'
    };
  }

  if (/workflow|process|automate|approval|journey|steps|flow/.test(text)) {
    return {
      sectionId: section.id || section.name || `feature_${index}`,
      visualTreatment: 'workflow-diagram',
      useRealMedia: false,
      mediaUrl: null,
      visualBrief: 'Create a simple workflow diagram with 3-4 connected steps using content from this section.',
      reason: 'Workflow/process content is best shown as a diagram.'
    };
  }

  if (/analytics|report|dashboard|insight|performance|tracking|monitor|visibility/.test(text)) {
    return {
      sectionId: section.id || section.name || `feature_${index}`,
      visualTreatment: 'metric-dashboard',
      useRealMedia: false,
      mediaUrl: null,
      visualBrief: 'Create a dashboard-style visual with metric cards, tiny chart lines and status panels.',
      reason: 'Analytics/performance content is best shown as dashboard cards.'
    };
  }

  if (/email|mail|chat|calendar|document|meeting|communication|collaborate|team/.test(text)) {
  if (strongMedia) {
    return {
      sectionId: section.id || section.name || `feature_${index}`,
      visualTreatment: 'real-media-enhanced',
      useRealMedia: true,
      mediaUrl: strongMedia.url,
      mediaRole: strongMedia.role,
      visualBrief: 'Use this approved media, but enhance it with surrounding UI cards, chips, metrics or product context. Do not leave it alone in a huge empty frame.',
      reason: 'Relevant media exists, so use it with a designed visual wrapper.'
    };
  }

  return {
    sectionId: section.id || section.name || `feature_${index}`,
    visualTreatment: 'collaboration-ui-mockup',
    useRealMedia: false,
      mediaUrl: null,
      visualBrief: 'Create a product-style mockup showing inbox, chat thread, calendar and document cards.',
      reason: 'Collaboration content needs a contextual UI mockup, not a generic side image.'
    };
  }

  if (/compare|alternative|versus|vs|before|after/.test(text)) {
    return {
      sectionId: section.id || section.name || `feature_${index}`,
      visualTreatment: 'comparison-panel',
      useRealMedia: false,
      mediaUrl: null,
      visualBrief: 'Create a before/after or side-by-side comparison panel.',
      reason: 'Comparison content is clearer as a structured panel.'
    };
  }

  if (strongMedia) {
    return {
      sectionId: section.id || section.name || `feature_${index}`,
      visualTreatment: 'real-product-media',
      useRealMedia: true,
      mediaUrl: strongMedia.url,
      mediaRole: strongMedia.role,
      visualBrief: 'Use approved relevant media with tight crop and no oversized empty frame.',
      reason: 'Strong relevant media exists for this section.'
    };
  }

  return {
    sectionId: section.id || section.name || `feature_${index}`,
    visualTreatment: 'css-product-visual',
    useRealMedia: false,
    mediaUrl: null,
    visualBrief: 'Create an engaging CSS/React visual from the section content: cards, chips, mini UI panels, icons or metrics.',
    reason: 'No strong relevant media found. Avoid random image placement.'
  };
}

function buildSectionVisualStrategy({ contentMap, analyzedImages }) {
  const productSections = contentMap?.productSections || [];

  const sections = productSections.map((section, index) =>
    decideVisualTreatment(section, analyzedImages, index)
  );

  const heroText = [
    contentMap?.productName,
    contentMap?.productCategory,
    contentMap?.hero?.headline,
    contentMap?.hero?.subheadline
  ].filter(Boolean).join(' ').toLowerCase();

  const heroMedia = hasStrongMediaForSection(heroText, analyzedImages);

  const hero = heroMedia
    ? {
        visualTreatment: 'approved-hero-media',
        useRealMedia: true,
        mediaUrl: heroMedia.url,
        visualBrief: 'Use approved hero media as a background, device mockup, floating panel, or visual card. Combine it with CSS UI elements if needed. Do not replace it fully with generated visuals.',
        reason: 'Relevant hero media found.'
      }
    : {
        visualTreatment: 'css-hero-visual',
        useRealMedia: false,
        mediaUrl: null,
        visualBrief: 'Create a premium hero visual using CSS/React: product UI shell, floating cards, metrics and collaboration elements.',
        reason: 'No strong hero media found.'
      };

  return {
    hero,
    sections,
    globalRules: [
      'Do not use a real image just because it exists.',
      'Use real media only when it is relevant, high-confidence and section-fit.',
      'Never place a tiny image inside a large empty frame.',
      'Never repeat image-left/text-right layout across all sections.',
      'Use CSS/React visuals when they explain the section better than media.',
      'Use integration grids, workflow diagrams, dashboards, comparison panels and UI mockups where relevant.'
    ]
  };
}

module.exports = {
  buildSectionVisualStrategy
};