function normalizeHex(hex) {
  if (!hex) return null;
  const value = String(hex).trim();

  if (/^#[0-9a-fA-F]{6}$/.test(value)) return value.toLowerCase();

  if (/^#[0-9a-fA-F]{3}$/.test(value)) {
    return '#' + value.slice(1).split('').map(c => c + c).join('').toLowerCase();
  }

  return null;
}

function isBadColor(hex) {
  const c = normalizeHex(hex);
  if (!c) return true;

  return [
    '#000000',
    '#111111',
    '#1a1a1a',
    '#ffffff',
    '#f5f5f5',
    '#f8f8f8'
  ].includes(c);
}

function hexToRgb(hex) {
  const c = normalizeHex(hex);
  if (!c) return null;

  return {
    r: parseInt(c.slice(1, 3), 16),
    g: parseInt(c.slice(3, 5), 16),
    b: parseInt(c.slice(5, 7), 16)
  };
}

function rgbToHex({ r, g, b }) {
  const toHex = n => Math.max(0, Math.min(255, Math.round(n)))
    .toString(16)
    .padStart(2, '0');

  return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
}

function darkenColor(hex, percent = 12) {
  const rgb = hexToRgb(hex);
  if (!rgb) return hex;

  const factor = 1 - percent / 100;

  return rgbToHex({
    r: rgb.r * factor,
    g: rgb.g * factor,
    b: rgb.b * factor
  });
}

function getCategoryFallback(category = '') {
  const text = String(category || '').toLowerCase();

  if (/cyber|security|firewall|antivirus|network/.test(text)) return '#dc2626';
  if (/ai|machine|generative|llm/.test(text)) return '#7c3aed';
  if (/finance|accounting|invoice|billing/.test(text)) return '#16a34a';
  if (/hr|crm|productivity|collaboration|workspace|email/.test(text)) return '#2563eb';
  if (/education|lms|learning/.test(text)) return '#f97316';
  if (/developer|api|cloud|devops|infra/.test(text)) return '#0891b2';

  return '#2563eb';
}

function detectSurfaceMode(brandSectionReference) {
  const bodyBg = String(brandSectionReference?.bodyBg || '').toLowerCase();

  if (
    bodyBg.includes('0, 0, 0') ||
    bodyBg.includes('17, 24, 39') ||
    bodyBg.includes('15, 23, 42')
  ) {
    return 'dark';
  }

  return 'light';
}

function buildThemeTokens({
  designBrief,
  extractedBrandColors,
  brandResult,
  brandSectionReference,
  productCategory
}) {
  const candidates = [];

  const push = (color, source, score) => {
    const normalized = normalizeHex(color);
    if (!normalized || isBadColor(normalized)) return;
    candidates.push({ color: normalized, source, score });
  };

  push(designBrief?.brandColorHex, 'user-brand-color', 100);

  push(extractedBrandColors?.ctaColor, 'vision-cta-color', 95);
  push(extractedBrandColors?.accent, 'vision-accent', 90);
  push(extractedBrandColors?.primary, 'vision-primary', 80);

  push(brandResult?.logoColors?.vibrant, 'logo-vibrant', 78);
  push(brandResult?.logoColors?.lightVibrant, 'logo-light-vibrant', 72);
  push(brandResult?.logoColors?.muted, 'logo-muted', 65);

  const picked = candidates.sort((a, b) => b.score - a.score)[0] || {
    color: getCategoryFallback(productCategory),
    source: 'category-fallback',
    score: 40
  };

  const mode = detectSurfaceMode(brandSectionReference);
  const accent = picked.color;

  return {
    primary: accent,
    accent,
    accentHover: darkenColor(accent, 12),

    mode,
    source: picked.source,
    confidence: picked.score,

    bodyBg: mode === 'dark' ? '#0f172a' : '#ffffff',
    heroBg: mode === 'dark' ? '#0f172a' : '#ffffff',
    cardBg: mode === 'dark' ? '#111827' : '#ffffff',

    textDark: mode === 'dark' ? '#ffffff' : '#111827',
    textMid: mode === 'dark' ? '#cbd5e1' : '#4b5563',
    textLight: '#ffffff',

    border: mode === 'dark' ? 'rgba(255,255,255,.14)' : '#e5e7eb',

    section1: mode === 'dark' ? '#0f172a' : '#ffffff',
    section2: mode === 'dark' ? '#111827' : '#f8fafc',
    section3: mode === 'dark' ? '#020617' : '#ffffff'
  };
}

module.exports = {
  buildThemeTokens
};