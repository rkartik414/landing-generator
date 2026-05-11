'use strict';
// ─────────────────────────────────────────────────────────────────────────────
// SECTION GENERATOR
// One focused AI call per section — fills slots only, never designs layout
// ─────────────────────────────────────────────────────────────────────────────
const { SECTION_LIBRARY } = require('../sections/section-library');
const { OpenAI } = require('openai');
const client = new OpenAI({ apiKey: process.env.OPENAI_API_KEY });
const babel = require('@babel/core');
// Fill slot placeholders in prompt template
function fillSlots(template, slots) {
  let filled = template;
  for (const [key, value] of Object.entries(slots)) {
    const serialized = value === null || value === undefined
      ? ''
      : typeof value === 'object'
        ? JSON.stringify(value)
        : String(value);
    filled = filled.replace(new RegExp(`\\{\\{${key}\\}\\}`, 'g'), serialized);
  }
  return filled;
}

// Inject brand colors as CSS variables at top of locked CSS
function injectBrandColors(css, colors) {
  const accentHex = colors.accent || '#ff6b00';
  // Parse hex to RGB for rgba() usage
  const r = parseInt(accentHex.slice(1, 3), 16) || 255;
  const g = parseInt(accentHex.slice(3, 5), 16) || 107;
  const b = parseInt(accentHex.slice(5, 7), 16) || 0;

  return `
:root {
  --accent: ${accentHex};
  --accent-rgb: ${r},${g},${b};
  --primary: ${colors.primary || '#1a1a2e'};
  --bodyBg: ${colors.bodyBg || '#06080c'};
}
${css}`;
}

// Generate a single section — returns { sectionId, css, jsx }
async function generateSection(sectionId, slots, colors) {
  const spec = SECTION_LIBRARY[sectionId];
  if (!spec) {
    console.warn('[SectionGen] Unknown section:', sectionId);
    return null;
  }

  const filledPrompt = fillSlots(spec.prompt, slots);
  const coloredCSS   = injectBrandColors(spec.lockedCSS, colors);

  try {
    const res = await client.chat.completions.create({
      model: 'gpt-4o-mini',
      max_completion_tokens: 2800,
      messages: [
        {
          role: 'system',
          content: `You are a React developer filling content into locked section templates.
RULES — violation = rejected output:
1. Return ONLY a single JSX section element — no imports, no exports, no full component wrapper.
2. Use ONLY the CSS class names defined in the LOCKED CSS. Never invent new classes.
3. Never change spacing, font sizes, shadows, or border-radius values.
4. Fill only the content slots. Never redesign layout.
5. For useState/useEffect hooks: include them as const declarations at the very top of your JSX expression using an IIFE pattern:
   {(() => { const [x, setX] = useState(0); return (<section>...</section>); })()}
   OR wrap in a named inner component if hooks are needed.
6. If a slot value is empty/null — use a sensible fallback or skip that element.
7. SVG icons must be inline, 20×20 or 24×24.
   SVG COLOR RULES — CRITICAL:
   - CORRECT: fill="var(--accent)" — string attribute, works in browser
   - CORRECT: fill="#ff6b00" — hardcoded hex
   - WRONG:   fill={var(--accent)} — invalid JSX, never do this
   - WRONG:   fill={"var(--accent)"} — unnecessary wrapping
   For stars: always use fill="#f59e0b" (gold hardcoded — stars are never brand-colored)
   For icons: always use fill="var(--accent)" (string, not expression)
   For SVG style prop: style={{fill: 'var(--accent)'}} is also valid but unnecessary`
        },
        {
          role: 'user',
          content: `LOCKED CSS (use ONLY these classes):\n${coloredCSS}\n\n${filledPrompt}`
        }
      ]
    });

   const raw = res.choices[0]?.message?.content || '';
    let jsx = raw
      .replace(/```jsx|```javascript|```js|```/g, '')
      .trim();

    // ── Auto-repair common GPT JSX mistakes ──────────────────────────────
    jsx = jsx
      .replace(/fill=\{var\(([^)]+)\)\}/g, 'fill="var($1)"')
      .replace(/stroke=\{var\(([^)]+)\)\}/g, 'stroke="var($1)"')
      .replace(/color=\{var\(([^)]+)\)\}/g, 'color="var($1)"')
      .replace(/stopColor=\{var\(([^)]+)\)\}/g, 'stopColor="var($1)"')
      .replace(/fill=\{"(var\([^)]+\))"\}/g, 'fill="$1"')
      .replace(/className=\{`([^`]*)`\}/g, (match, inner) => {
        if (!inner.includes('${')) return `className="${inner}"`;
        return match;
      })
      .replace(/=\{(var\([^)]+\))\}/g, '="$1"');
replace(/(?<!=)\bclass="/g, 'className="')
      .replace(/(?<!=)\bclass={/g, 'className={')
      .replace(/\bfor="/g, 'htmlFor="')
      .replace(/testimonials\.length/g, () => {
        const slideCount = (jsx.match(/tcar-slide/g) || []).length;
        return slideCount > 0 ? String(slideCount) : '5';
      })
      .replace(/%\s*testimonials\b/g, '% 5');

    console.log(`[SectionGen] ${sectionId} → ${jsx.length} chars`);
    return { sectionId, css: coloredCSS, jsx };

  } catch (e) {
    console.warn(`[SectionGen] ${sectionId} failed:`, e.message);
    return null;
  }
}

// Generate all sections in parallel — returns array of results
async function generateAllSections(selectedSections, slotMap, colors) {
  console.log('[SectionGen] Generating', selectedSections.length,
    'sections in parallel...');

  const results = await Promise.all(
    selectedSections.map(spec =>
      generateSection(spec.id, slotMap[spec.id] || {}, colors)
    )
  );

  const valid = results.filter(Boolean);

console.log('[SectionGen] Done:', valid.length, '/', selectedSections.length, 'succeeded');

if (valid.length === 0) {
  throw new Error('All generated sections failed JSX validation.');
}

if (valid.length < Math.ceil(selectedSections.length * 0.5)) {
  throw new Error(
    `Too many sections failed JSX validation: ${valid.length}/${selectedSections.length} succeeded.`
  );
}

return valid;
}

// Assemble all sections into a full React component
// FIND this function in sectionGenerator.js and REPLACE entirely:

function assembleFullPage(sections, contentMap, blueprint) {
  const productName = contentMap?.productName || 'Product';
  const headingFont = blueprint?.styles?.headingFont || 'Inter';
  const bodyFont    = blueprint?.styles?.bodyFont    || 'Inter';
  const accent      = blueprint?.styles?.accentColor || '#ff6b00';
  const primary     = blueprint?.styles?.primaryColor || '#1a1a2e';
  const bodyBg      = blueprint?.styles?.bodyBg      || '#ffffff';
  const googleFonts = `https://fonts.googleapis.com/css2?family=${
    encodeURIComponent(headingFont)
  }:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=Instrument+Serif:ital@1&display=swap`;

  // ── Each section becomes a named React component ──────────────
  // This fixes useState/useEffect working inside sections
  const componentDefs = sections.map((s, i) => {
    const compName = `Section${i}_${s.sectionId.replace(/[^a-zA-Z0-9]/g, '_')}`;

    // Clean up the JSX — GPT sometimes returns markdown fences
    const cleanJsx = s.jsx
      .replace(/```jsx|```javascript|```js|```/g, '')
      .trim()
      // Remove any accidental import/export statements
      .replace(/^import\s+.*?from\s+['"].*?['"];?\s*/gm, '')
      .replace(/^export\s+default\s+\w+;?\s*$/gm, '');

    return `
// ── Section ${i + 1}: ${s.sectionId} ──────────────────────────────────────
const ${compName} = () => {
  ${cleanJsx.startsWith('<') ? `return (${cleanJsx});` : cleanJsx}
};`;
  }).join('\n\n');

  // ── Component usage tags ──────────────────────────────────────
  const componentTags = sections.map((s, i) => {
    const compName = `Section${i}_${s.sectionId.replace(/[^a-zA-Z0-9]/g, '_')}`;
    return `      <${compName} />`;
  }).join('\n');

  const accentClean = String(accent || '#ff6b00').replace('#', '');
const r = parseInt(accentClean.substring(0, 2), 16) || 255;
const g = parseInt(accentClean.substring(2, 4), 16) || 107;
const b = parseInt(accentClean.substring(4, 6), 16) || 0;

  // ── All locked CSS merged ─────────────────────────────────────
const brandRoot = `
:root {
  --accent: ${accent};
  --accent-rgb: ${r},${g},${b};
  --primary: ${primary};
  --bodyBg: ${bodyBg};
}`;

  const BASE_ONCE = `
  @keyframes fadeUp { from{opacity:0;transform:translateY(28px)} to{opacity:1;transform:translateY(0)} }
  @keyframes scaleIn { from{opacity:0;transform:scale(0.94)} to{opacity:1;transform:scale(1)} }
  .anim{opacity:0;animation:fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards}
  .anim-scale{opacity:0;animation:scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards}
  .d0{animation-delay:0.05s}.d1{animation-delay:0.2s}.d2{animation-delay:0.35s}
  .d3{animation-delay:0.5s}.d4{animation-delay:0.65s}.d5{animation-delay:0.8s}
  .container{max-width:1200px;margin:0 auto;padding:0 24px}
  .section{padding:96px 0;position:relative}
  .eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;
    border-radius:100px;background:rgba(var(--accent-rgb),0.1);
    border:1px solid rgba(var(--accent-rgb),0.25);color:var(--accent);
    font-size:12px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase}
  .sec-head{text-align:center;max-width:760px;margin:0 auto 56px}
  .sec-head h2{font-size:44px;font-weight:700;letter-spacing:-0.04em;line-height:1.08;margin:14px 0 16px}
  .sec-head p{font-size:17px;line-height:1.75;opacity:0.72}
  .reveal{opacity:0;transform:translateY(32px);transition:opacity 0.7s ease,transform 0.7s ease}
  .reveal.visible{opacity:1;transform:none}`;

  // Each section's css = brandRoot + BASE_ONCE + section-specific
  // Extract only section-specific part (after .reveal.visible block)
  const sectionOnlyCSS = sections.map(s => {
    const css = s.css || '';
    const marker = '.reveal.visible';
    const idx = css.lastIndexOf(marker);
    if (idx === -1) return css;
    const end = css.indexOf('}', idx);
    return end !== -1 ? css.slice(end + 1).trim() : '';
  }).filter(Boolean).join('\n\n');

  const allCSS = brandRoot + BASE_ONCE + '\n\n' + sectionOnlyCSS;

  // ── Responsive overrides ──────────────────────────────────────
  const responsiveCSS = `
@media (max-width: 768px) {
  .fes-split, .falt-block, .ftd-layout, .fsd-grid,
  .hds-grid, .tcar-layout { grid-template-columns: 1fr !important; }
  .fig-grid, .tgrd-grid, .mns-grid, .pdc-grid,
  .plc-grid { grid-template-columns: 1fr !important; }
  .falt-block.flip { direction: ltr !important; }
  .hds-stats, .tms-grid { grid-template-columns: 1fr !important; }
  .hvf-h1 { font-size: 48px !important; }
  .hvf-accent { font-size: 64px !important; }
  .hvf-content { padding-top: 120px !important; }
  .hds-copy h1 { font-size: 40px !important; }
  .hle h1 { font-size: 48px !important; }
  .hcd h1 { font-size: 48px !important; }
  .sec-head h2 { font-size: 34px !important; }
}`;

  return `import React, { useState, useEffect, useRef } from 'react';

// ════════════════════════════════════════════════════════════════
// GLOBAL STYLES — locked CSS for all sections
// ════════════════════════════════════════════════════════════════
const GLOBAL_CSS = \`
  * { box-sizing: border-box; margin: 0; padding: 0; }
  body { overflow-x: hidden; }
  a { text-decoration: none; color: inherit; }
  img, video { max-width: 100%; display: block; }
  h1,h2,h3,h4,h5 {
    font-family: '${headingFont}', ui-sans-serif, sans-serif;
  }
  :root {
    --accent: ${accent};
    --primary: ${primary};
    --bodyBg: ${bodyBg};
  }
  ${allCSS}
  ${responsiveCSS}
\`;

// ════════════════════════════════════════════════════════════════
// SECTION COMPONENTS
// Each section is isolated — hooks work correctly
// ════════════════════════════════════════════════════════════════
${componentDefs}

// ════════════════════════════════════════════════════════════════
// NAV COMPONENT
// ════════════════════════════════════════════════════════════════
const Nav = () => {
  const accent = '${accent}';
  return (
    <nav style={{
      position: 'sticky', top: 0, zIndex: 100,
      background: 'rgba(6,8,12,0.88)',
      backdropFilter: 'blur(20px)',
      WebkitBackdropFilter: 'blur(20px)',
      borderBottom: '1px solid rgba(255,255,255,0.08)'
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', height: '68px'
      }}>
        <div style={{
          fontWeight: 800, fontSize: '18px', color: '#fff',
          letterSpacing: '-0.03em',
          fontFamily: "'${headingFont}', ui-sans-serif, sans-serif"
        }}>
          ${productName}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
          <img
            src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
            height="28" alt="Techjockey"
            style={{ height: '28px', opacity: 0.95 }}
          />
          
            href="#lead-form"
            style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '11px 22px', borderRadius: '12px',
              background: accent, color: '#fff', fontSize: '14px',
              fontWeight: 700, cursor: 'pointer',
              letterSpacing: '-0.01em',
              transition: 'transform 0.2s, box-shadow 0.2s'
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 8px 20px rgba(0,0,0,0.25)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'none';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            Get Free Consultation
          </a>
        </div>
      </div>
    </nav>
  );
};

// ════════════════════════════════════════════════════════════════
// FOOTER COMPONENT
// ════════════════════════════════════════════════════════════════
const Footer = () => {
  const socials = [
    { href: 'https://www.facebook.com/techjockey/', label: 'Facebook',
      path: 'M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.3V11H7.5v3h2.7v8h3.3z' },
    { href: 'https://www.instagram.com/techjockey/', label: 'Instagram',
      path: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A4.5 4.5 0 1012 16.5 4.5 4.5 0 0012 7.5zM12 9a3 3 0 11-3 3 3 3 0 013-3zm4.5-1.5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5z' },
    { href: 'https://x.com/TechjockeyInfo', label: 'Twitter',
      path: 'M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.2l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z' },
    { href: 'https://www.linkedin.com/company/techjockey-infotech-pvt-ltd', label: 'LinkedIn',
      path: 'M6.94 8.5A1.56 1.56 0 105.38 6.94 1.56 1.56 0 006.94 8.5zM5.5 9.75h2.88V18H5.5zm4.69 0h2.76v1.13h.04a3 3 0 012.69-1.48c2.88 0 3.41 1.89 3.41 4.35V18h-2.88v-3.79c0-.9 0-2.06-1.26-2.06s-1.45.98-1.45 1.99V18h-2.88z' }
  ];

  return (
    <footer style={{
      background: '#0f0f0f', color: '#fff',
      padding: '48px 0',
      borderTop: '1px solid rgba(255,255,255,0.08)'
    }}>
      <div style={{
        maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
        display: 'flex', justifyContent: 'space-between',
        alignItems: 'flex-start', flexWrap: 'wrap', gap: '32px'
      }}>
        <div>
          <img
            src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
            height="28" alt="Techjockey"
          />
          <p style={{ marginTop: '14px', fontSize: '14px',
                      color: 'rgba(255,255,255,0.65)', lineHeight: '1.6' }}>
            support@techjockey.com
          </p>
          <p style={{ fontSize: '13px', color: 'rgba(255,255,255,0.4)',
                      marginTop: '6px' }}>
            © 2024 Techjockey Infotech Pvt. Ltd.
          </p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#fff',
                      letterSpacing: '0.04em', textTransform: 'uppercase' }}>
            Legal
          </p>
          {[['Privacy Policy','/privacy-policy'],['Terms of Use','/terms-of-use'],
            ['Contact Expert','/contact']].map(([label, href]) => (
            <a key={label} href={href}
               style={{ fontSize: '14px', color: 'rgba(255,255,255,0.65)' }}>
              {label}
            </a>
          ))}
        </div>
        <div>
          <p style={{ fontSize: '13px', fontWeight: 700, color: '#fff',
                      letterSpacing: '0.04em', textTransform: 'uppercase',
                      marginBottom: '14px' }}>
            Connect
          </p>
          <div style={{ display: 'flex', gap: '10px' }}>
            {socials.map(s => (
              <a key={s.label} href={s.href} aria-label={s.label}
                 style={{
                   width: '38px', height: '38px', borderRadius: '50%',
                   border: '1px solid rgba(255,255,255,0.12)',
                   display: 'flex', alignItems: 'center',
                   justifyContent: 'center', color: 'rgba(255,255,255,0.7)',
                   transition: 'background 0.2s, border-color 0.2s'
                 }}
                 onMouseEnter={e => {
                   e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
                   e.currentTarget.style.borderColor = 'rgba(255,255,255,0.3)';
                 }}
                 onMouseLeave={e => {
                   e.currentTarget.style.background = 'transparent';
                   e.currentTarget.style.borderColor = 'rgba(255,255,255,0.12)';
                 }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d={s.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

// ════════════════════════════════════════════════════════════════
// MAIN LANDING PAGE COMPONENT
// ════════════════════════════════════════════════════════════════
const LandingPage = () => {
  useEffect(() => {
    // Load Google Fonts
    const link = document.createElement('link');
    link.rel = 'stylesheet';
    link.href = '${googleFonts}';
    document.head.appendChild(link);

    // Set CSS variables
    document.documentElement.style.setProperty('--accent', '${accent}');
    document.documentElement.style.setProperty('--primary', '${primary}');
    document.documentElement.style.setProperty('--bodyBg', '${bodyBg}');

    // Scroll reveal
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.1 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));

    // GSAP loader
    const loadScript = src => new Promise(resolve => {
      if (document.querySelector(\`script[src="\${src}"]\`)) return resolve();
      const s = document.createElement('script');
      s.src = src; s.async = true; s.onload = resolve;
      document.body.appendChild(s);
    });

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js')
    ]).then(() => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => requestAnimationFrame(() => {
        const { gsap, ScrollTrigger } = window;
        gsap.registerPlugin(ScrollTrigger);

        // Animate count-up numbers
        document.querySelectorAll('[data-count]').forEach(el => {
          const target = parseFloat(el.dataset.count);
          if (isNaN(target)) return;
          const suffix = el.dataset.suffix || '';
          const prefix = el.dataset.prefix || '';
          gsap.from({ val: 0 }, {
            val: target, duration: 2, ease: 'power2.out',
            snap: { val: 0.1 },
            scrollTrigger: { trigger: el, start: 'top 80%', once: true },
            onUpdate() {
              el.textContent = prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
            }
          });
        });

        // Scene expand on scroll
        gsap.utils.toArray('.fes-expand, .scene-expand').forEach(el => {
          gsap.to(el, {
            borderRadius: '0px',
            ease: 'none',
            scrollTrigger: {
              trigger: el, start: 'top 80%',
              end: 'top 20%', scrub: 1.2
            }
          });
        });

        // Parallax depth layers
        gsap.utils.toArray('[data-depth]').forEach(el => {
          const depth = parseFloat(el.dataset.depth) || 0.3;
          gsap.to(el, {
            y: () => -(window.innerHeight * depth * 0.5),
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top bottom', end: 'bottom top', scrub: true
            }
          });
        });

        // Stagger parents
        gsap.utils.toArray('.stagger-parent').forEach(parent => {
          gsap.to(parent.children, {
            opacity: 1, y: 0, duration: 0.7, stagger: 0.1,
            ease: 'power3.out',
            scrollTrigger: { trigger: parent, start: 'top 80%' }
          });
        });
      }));
    });

    return () => obs.disconnect();
  }, []);

  return (
    <div style={{
      background: '${bodyBg}',
      fontFamily: "'${bodyFont}', ui-sans-serif, sans-serif",
      overflowX: 'hidden'
    }}>
      <style dangerouslySetInnerHTML={{ __html: GLOBAL_CSS }} />

      <Nav />

${componentTags}

      <Footer />
    </div>
  );
};

export default LandingPage;`;
}

module.exports = { generateSection, generateAllSections, assembleFullPage };