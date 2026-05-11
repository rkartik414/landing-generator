'use strict';

function esc(value = '') {
  return String(value)
    .replace(/\\/g, '\\\\')
    .replace(/`/g, '\\`')
    .replace(/\$/g, '\\$');
}

function buildSafeLandingPage(contentMap = {}, themeTokens = {}) {
  const productName = esc(contentMap?.productName || 'Product');
  const category = esc(contentMap?.productCategory || '');
  const hero = contentMap?.hero || {};
  const sections = Array.isArray(contentMap?.productSections)
    ? contentMap.productSections
    : [];

  const headline = esc(hero.headline || productName);
  const subheadline = esc(hero.subheadline || hero.supportingLine || '');
  const cta = esc(hero.primaryCTA || 'Get Free Consultation');

  const accent = esc(
    themeTokens?.accent ||
    themeTokens?.accentColor ||
    themeTokens?.colours?.accent ||
    '#ff6b00'
  );

  const sectionMarkup = sections.map((s, i) => {
    const title = esc(s.headline || s.name || s.label || `Section ${i + 1}`);
    const desc = esc(s.description || '');
    const features = Array.isArray(s.features) ? s.features : [];

    const featureMarkup = features.slice(0, 6).map(f => `
              <li>
                <strong>${esc(f.title || '')}</strong>
                <span>${esc(f.description || '')}</span>
              </li>
    `).join('');

    return `
        <section className="safe-section ${i % 2 ? 'safe-section-alt' : ''}">
          <div className="safe-container">
            <p className="safe-eyebrow">${category || 'Software Solution'}</p>
            <h2>${title}</h2>
            <p className="safe-desc">${desc}</p>
            ${featureMarkup ? `<ul className="safe-feature-list">${featureMarkup}</ul>` : ''}
          </div>
        </section>
    `;
  }).join('\n');

  return `
import React from 'react';

function LandingPage() {
  return (
    <main className="safe-page">
      <style>{\`
        :root {
          --accent: ${accent};
          --bg: #070707;
          --surface: #111827;
          --surface2: #0f172a;
          --text: #ffffff;
          --muted: #cbd5e1;
        }

        * { box-sizing: border-box; }

        body {
          margin: 0;
          font-family: Inter, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", sans-serif;
          background: var(--bg);
          color: var(--text);
        }

        .safe-page {
          background:
            radial-gradient(circle at top right, rgba(255,107,0,.22), transparent 34%),
            linear-gradient(180deg, #050505 0%, #111827 48%, #050505 100%);
          min-height: 100vh;
          color: var(--text);
        }

        .safe-nav {
          max-width: 1200px;
          margin: 0 auto;
          padding: 22px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
        }

        .safe-brand {
          font-size: 18px;
          font-weight: 800;
          letter-spacing: -0.02em;
        }

        .safe-nav-right {
          display: flex;
          align-items: center;
          gap: 20px;
        }

        .safe-logo {
          height: 28px;
          filter: brightness(1.1);
        }

        .safe-nav-cta,
        .safe-cta {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          background: var(--accent);
          color: #fff;
          text-decoration: none;
          font-weight: 800;
          box-shadow: 0 14px 36px rgba(255,107,0,.25);
          transition: transform .2s ease, box-shadow .2s ease;
        }

        .safe-nav-cta {
          padding: 10px 18px;
          font-size: 14px;
        }

        .safe-cta {
          padding: 16px 26px;
          font-size: 16px;
          margin-top: 30px;
        }

        .safe-nav-cta:hover,
        .safe-cta:hover {
          transform: translateY(-2px);
          box-shadow: 0 18px 48px rgba(255,107,0,.34);
        }

        .safe-hero {
          max-width: 1200px;
          margin: 0 auto;
          padding: 96px 24px 120px;
          display: grid;
          grid-template-columns: minmax(0, 1.1fr) minmax(320px, .9fr);
          gap: 56px;
          align-items: center;
        }

        .safe-eyebrow {
          display: inline-flex;
          color: var(--accent);
          background: rgba(255,107,0,.1);
          border: 1px solid rgba(255,107,0,.28);
          padding: 7px 14px;
          border-radius: 999px;
          font-size: 12px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: .08em;
          margin: 0 0 20px;
        }

        h1 {
          font-size: clamp(44px, 6vw, 76px);
          line-height: .98;
          letter-spacing: -.06em;
          margin: 0;
          max-width: 900px;
        }

        .safe-sub {
          font-size: 20px;
          line-height: 1.7;
          color: var(--muted);
          max-width: 720px;
          margin: 26px 0 0;
        }

        .safe-visual {
          min-height: 420px;
          border-radius: 32px;
          background:
            linear-gradient(135deg, rgba(255,255,255,.14), rgba(255,255,255,.02)),
            radial-gradient(circle at 30% 20%, rgba(255,107,0,.42), transparent 26%),
            #0f172a;
          border: 1px solid rgba(255,255,255,.12);
          box-shadow: 0 28px 90px rgba(0,0,0,.38);
          padding: 24px;
          position: relative;
          overflow: hidden;
        }

        .safe-window {
          background: rgba(15,23,42,.86);
          border: 1px solid rgba(255,255,255,.12);
          border-radius: 22px;
          padding: 20px;
          position: absolute;
          inset: 42px 28px auto 28px;
        }

        .safe-bars span {
          display: block;
          height: 13px;
          border-radius: 999px;
          background: rgba(255,255,255,.14);
          margin: 14px 0;
        }

        .safe-bars span:nth-child(1) { width: 82%; background: rgba(255,107,0,.68); }
        .safe-bars span:nth-child(2) { width: 64%; }
        .safe-bars span:nth-child(3) { width: 92%; }
        .safe-bars span:nth-child(4) { width: 52%; background: rgba(255,107,0,.42); }

        .safe-container {
          max-width: 1120px;
          margin: 0 auto;
          padding: 0 24px;
        }

        .safe-section {
          padding: 88px 0;
          background: #0b0f19;
        }

        .safe-section-alt {
          background: #111827;
        }

        .safe-section h2 {
          font-size: clamp(34px, 4vw, 54px);
          line-height: 1.05;
          letter-spacing: -.04em;
          margin: 0 0 18px;
        }

        .safe-desc {
          color: var(--muted);
          font-size: 18px;
          line-height: 1.7;
          max-width: 760px;
        }

        .safe-feature-list {
          list-style: none;
          padding: 0;
          margin: 36px 0 0;
          display: grid;
          grid-template-columns: repeat(3, minmax(0, 1fr));
          gap: 18px;
        }

        .safe-feature-list li {
          padding: 22px;
          border-radius: 22px;
          background: rgba(255,255,255,.055);
          border: 1px solid rgba(255,255,255,.1);
        }

        .safe-feature-list strong {
          display: block;
          margin-bottom: 8px;
          font-size: 16px;
        }

        .safe-feature-list span {
          color: var(--muted);
          font-size: 14px;
          line-height: 1.6;
        }

        .safe-footer {
          border-top: 1px solid rgba(255,255,255,.1);
          padding: 36px 24px;
          background: #050505;
        }

        .safe-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 20px;
          flex-wrap: wrap;
        }

        .safe-footer p {
          margin: 6px 0 0;
          color: #94a3b8;
          font-size: 14px;
        }

        @media (max-width: 900px) {
          .safe-hero {
            grid-template-columns: 1fr;
            padding-top: 64px;
          }

          .safe-feature-list {
            grid-template-columns: 1fr;
          }

          .safe-nav {
            align-items: flex-start;
          }

          .safe-nav-right {
            flex-direction: column;
            align-items: flex-end;
          }
        }
      \`}</style>

      <nav className="safe-nav">
        <div className="safe-brand">${productName}</div>
        <div className="safe-nav-right">
          <img className="safe-logo" src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" alt="Techjockey" />
          <a className="safe-nav-cta" href="#lead-form">${cta}</a>
        </div>
      </nav>

      <section className="safe-hero">
        <div>
          <p className="safe-eyebrow">${category || 'Software Solution'}</p>
          <h1>${headline}</h1>
          <p className="safe-sub">${subheadline}</p>
          <a className="safe-cta" href="#lead-form">${cta}</a>
        </div>

        <div className="safe-visual" aria-hidden="true">
          <div className="safe-window">
            <p className="safe-eyebrow">${productName}</p>
            <div className="safe-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      ${sectionMarkup}

      <section id="lead-form" className="safe-section safe-section-alt">
        <div className="safe-container">
          <p className="safe-eyebrow">Talk to Techjockey</p>
          <h2>Get expert help choosing ${productName}</h2>
          <p className="safe-desc">Connect with Techjockey experts for pricing, demos, and product guidance.</p>
          <a className="safe-cta" href="mailto:support@techjockey.com">${cta}</a>
        </div>
      </section>

      <footer className="safe-footer">
        <div className="safe-footer-inner">
          <div>
            <img className="safe-logo" src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" alt="Techjockey" />
            <p>support@techjockey.com</p>
            <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>
        </div>
      </footer>
    </main>
  );
}

export default LandingPage;
`;
}

module.exports = { buildSafeLandingPage };