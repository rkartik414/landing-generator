import React from 'react';

function LandingPage() {
  return (
    <main className="safe-page">
      <style>{`
        :root {
          --accent: #ff6b00;
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
      `}</style>

      <nav className="safe-nav">
        <div className="safe-brand">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</div>
        <div className="safe-nav-right">
          <img className="safe-logo" src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" alt="Techjockey" />
          <a className="safe-nav-cta" href="#lead-form">Generate with AI</a>
        </div>
      </nav>

      <section className="safe-hero">
        <div>
          <p className="safe-eyebrow">AI Image Generation and AI Video Generation</p>
          <h1>Create High-Quality AI Images & Videos with ByteDance Generative Models</h1>
          <p className="safe-sub">Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
          <a className="safe-cta" href="#lead-form">Generate with AI</a>
        </div>

        <div className="safe-visual" aria-hidden="true">
          <div className="safe-window">
            <p className="safe-eyebrow">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</p>
            <div className="safe-bars">
              <span></span>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
        </div>
      </section>

      
        <section className="safe-section ">
          <div className="safe-container">
            <p className="safe-eyebrow">AI Image Generation and AI Video Generation</p>
            <h2>AI Image Generation with Seedream 4.5</h2>
            <p className="safe-desc">Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.</p>
            <ul className="safe-feature-list">
              <li>
                <strong>Advanced Text–Image Alignment</strong>
                <span>Accurately translates prompts into visuals with improved semantic understanding.</span>
              </li>
    
              <li>
                <strong>High-Resolution Output</strong>
                <span>Generate native images up to 1K–4K resolution with strong visual fidelity.</span>
              </li>
    
              <li>
                <strong>Superior Typographic Rendering</strong>
                <span>Optimized for posters, ads, and text-heavy visual designs.</span>
              </li>
    
              <li>
                <strong>Multi-Image Composition with Identity Preservation</strong>
                <span>Combines multiple inputs while accurately maintaining subject consistency.</span>
              </li>
    
              <li>
                <strong>Strong Structural Fidelity</strong>
                <span>Maintains composition, layout, and scene structure with high precision.</span>
              </li>
    </ul>
          </div>
        </section>
    

        <section className="safe-section safe-section-alt">
          <div className="safe-container">
            <p className="safe-eyebrow">AI Image Generation and AI Video Generation</p>
            <h2>AI Video Generation with Seedance 1.5 Pro by Bytedance</h2>
            <p className="safe-desc">Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.</p>
            <ul className="safe-feature-list">
              <li>
                <strong>Key Capabilities of Seedance 1.5 Pro</strong>
                <span>Seedance enables professional-grade AI video production with narrative coherence and realistic motion.</span>
              </li>
    
              <li>
                <strong>Text-to-Video Generation</strong>
                <span>Create videos directly from text prompts.</span>
              </li>
    
              <li>
                <strong>Audio-Visual Synchronization</strong>
                <span>Generate video and audio simultaneously with strong multimodal alignment.</span>
              </li>
    
              <li>
                <strong>Multilingual Lip-Sync</strong>
                <span>Supports multilingual and dialect-level lip synchronization.</span>
              </li>
    
              <li>
                <strong>Cinematic Camera Control</strong>
                <span>Generate videos with dynamic camera movement and cinematic storytelling.</span>
              </li>
    
              <li>
                <strong>10× Faster Inference</strong>
                <span>Optimized inference pipeline significantly improves generation speed.</span>
              </li>
    </ul>
          </div>
        </section>
    

      <section id="lead-form" className="safe-section safe-section-alt">
        <div className="safe-container">
          <p className="safe-eyebrow">Talk to Techjockey</p>
          <h2>Get expert help choosing Seedream 4.5 and Seedance 1.5 Pro by ByteDance</h2>
          <p className="safe-desc">Connect with Techjockey experts for pricing, demos, and product guidance.</p>
          <a className="safe-cta" href="mailto:support@techjockey.com">Generate with AI</a>
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
