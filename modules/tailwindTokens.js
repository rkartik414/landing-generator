'use strict';

// Converts brand hex colors to Tailwind arbitrary value classes
// Usage: tw.bg(accent) → "bg-[#F15623]"
function tw(hex) {
  return hex ? hex.replace('#', '') : null;
}

function buildTailwindTokens(blueprint) {
  const accent  = blueprint?.colours?.accent  || blueprint?.styles?.accentColor  || '#ff6b00';
  const primary = blueprint?.colours?.primary || blueprint?.styles?.primaryColor || '#1a1f36';
  const bodyBg  = blueprint?.colours?.bodyBg  || '#ffffff';
  const textDark = blueprint?.colours?.textDark || '#111827';
  const textMid  = blueprint?.colours?.textMid  || '#6b7280';
  const border   = blueprint?.colours?.border   || '#e5e7eb';
  const section2 = blueprint?.backgroundSystem?.section2 || '#f8fafc';

  return {
    accent,
    primary,
    bodyBg,
    textDark,
    textMid,
    border,
    section2,

    // Pre-built Tailwind class strings using arbitrary values
    btnPrimary:  `bg-[${accent}] text-white font-bold px-6 py-3 rounded-xl hover:-translate-y-0.5 transition-transform cursor-pointer border-none`,
    btnGhost:    `bg-transparent text-white font-semibold px-6 py-3 rounded-xl border border-white/30 hover:bg-white/10 transition cursor-pointer`,
    card:        `bg-white border border-[${border}] rounded-2xl p-7 shadow-sm hover:-translate-y-1.5 hover:shadow-md transition-transform`,
    cardDark:    `bg-white/5 border border-white/10 rounded-2xl p-7 hover:bg-white/8 transition`,
    eyebrow:     `inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[${accent}]/10 border border-[${accent}]/25 text-[${accent}]`,
    sectionLight: `py-24 bg-white`,
    sectionSoft:  `py-24 bg-[${section2}]`,
    sectionDark:  `py-24 bg-[${primary}] text-white`,
    h1: `text-5xl lg:text-6xl font-bold tracking-tight leading-tight text-[${textDark}]`,
    h2: `text-4xl font-bold tracking-tight leading-tight text-[${textDark}]`,
    h2white: `text-4xl font-bold tracking-tight leading-tight text-white`,
    body: `text-lg leading-relaxed text-[${textMid}]`,
    container: `max-w-6xl mx-auto px-6`,
    logoImg: `h-8 grayscale opacity-60 hover:grayscale-0 hover:opacity-100 transition object-contain`,
    featureIcon: `w-11 h-11 rounded-xl flex items-center justify-center shrink-0`,
    featureIconBg: `bg-[${accent}]/10`,
    revealClass: `opacity-0 translate-y-8 transition-all duration-700 ease-out`,
  };
}

module.exports = { buildTailwindTokens };