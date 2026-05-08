'use strict';

// shadcn-style component class builder
// Used in GPT system prompts to give exact class strings for each component

function cn(...classes) {
  return classes.filter(Boolean).join(' ');
}

function buildShadcnComponents(accent, primary) {
  const a = accent  || '#ff6b00';
  const p = primary || '#1a1f36';

  return {
    // Button variants
    Button: {
      default:   `inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[${a}] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none disabled:opacity-50`,
      outline:   `inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 border border-[${a}] text-[${a}] bg-transparent hover:bg-[${a}]/10 transition-all`,
      ghost:     `inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 text-white/80 border border-white/20 hover:bg-white/10 transition-all`,
      secondary: `inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-gray-100 text-gray-900 hover:bg-gray-200 transition-all`
    },

    // Card variants
    Card: {
      default: `rounded-2xl border border-gray-200 bg-white shadow-sm p-6`,
      dark:    `rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm`,
      feature: `rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300`
    },

    // Input
    Input: `flex h-11 w-full rounded-xl border border-gray-200 bg-white px-4 py-2 text-sm outline-none focus:border-[${a}] focus:ring-2 focus:ring-[${a}]/20 transition-all placeholder:text-gray-400`,

    // Label
    Label: `text-sm font-semibold text-gray-700 mb-1.5 block`,

    // Badge / Eyebrow
    Badge: {
      default: `inline-flex items-center gap-1.5 rounded-full border px-3 py-1 text-xs font-bold tracking-wider uppercase`,
      accent:  `inline-flex items-center gap-1.5 rounded-full bg-[${a}]/10 border border-[${a}]/25 text-[${a}] px-3 py-1 text-xs font-bold tracking-wider uppercase`,
      success: `inline-flex items-center gap-1.5 rounded-full bg-green-50 border border-green-200 text-green-700 px-3 py-1 text-xs font-bold tracking-wider uppercase`
    },

    // Section wrappers
    Section: {
      light: `py-24 bg-white`,
      soft:  `py-24 bg-gray-50`,
      dark:  `py-24 bg-[${p}] text-white`,
      accent: `py-24 bg-[${a}] text-white`
    },

    // Typography
    H1:    `text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05]`,
    H2:    `text-4xl font-bold tracking-tight leading-tight`,
    H3:    `text-2xl font-bold tracking-tight`,
    Lead:  `text-lg leading-relaxed text-gray-500`,
    Small: `text-sm text-gray-500`,

    // Container
    Container: `max-w-6xl mx-auto px-6`,

    // Separator
    Separator: `border-t border-gray-200`,

    // Avatar
    Avatar: `relative flex h-12 w-12 shrink-0 overflow-hidden rounded-full border-2 border-gray-100`,

    // Skeleton (loading placeholder)
    Skeleton: `animate-pulse rounded-xl bg-gray-100`
  };
}

module.exports = { buildShadcnComponents };