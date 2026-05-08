import React, { useEffect } from 'react';

const LandingPage = () => {
  const accent = '#b3713f';
  const primary = '#b3713f';
  const bodyBg = '#ffffff';

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--accent-rgb', '179,113,63');

    const revealElements = Array.from(document.querySelectorAll('.reveal'));

    if (!('IntersectionObserver' in window)) {
      revealElements.forEach((el) => el.classList.add('visible'));
      return undefined;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
    );

    revealElements.forEach((el) => {
      el.classList.add('visible-init');
      observer.observe(el);
    });

    const fallbackTimer = window.setTimeout(() => {
      revealElements.forEach((el) => el.classList.add('visible'));
    }, 1200);

    return () => {
      window.clearTimeout(fallbackTimer);
      observer.disconnect();
    };
  }, [accent, primary]);

  return (
    <div style={{ background: bodyBg, fontFamily: "'Inter', ui-sans-serif, sans-serif", color: '#111827' }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=Instrument+Serif:ital@1&display=swap"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              --accent: #b3713f;
              --accent-rgb: 179,113,63;
              --primary: #b3713f;
              --bodyBg: #ffffff;
            }

            * { box-sizing: border-box; margin: 0; padding: 0; }
            html, body, #root { width: 100%; min-height: 100%; background: #ffffff; }
            body { overflow-x: hidden; color: #111827; }
            a { text-decoration: none; color: inherit; }
            img, video { max-width: 100%; display: block; }
            h1, h2, h3, h4, h5 {
              font-family: 'Plus Jakarta Sans', ui-sans-serif, sans-serif;
            }

            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(28px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes scaleIn {
              from { opacity: 0; transform: scale(0.96); }
              to { opacity: 1; transform: scale(1); }
            }

            .anim { opacity: 1; animation: fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) both; }
            .anim-scale { opacity: 1; animation: scaleIn 1s cubic-bezier(0.22,1,0.36,1) both; }
            .d0 { animation-delay: 0.05s; }
            .d1 { animation-delay: 0.2s; }
            .d2 { animation-delay: 0.35s; }
            .d3 { animation-delay: 0.5s; }
            .d4 { animation-delay: 0.65s; }
            .d5 { animation-delay: 0.8s; }

            .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
            .section { padding: 96px 0; position: relative; }
            .eyebrow {
              display: inline-flex; align-items: center; gap: 8px;
              padding: 6px 14px; border-radius: 100px;
              background: rgba(var(--accent-rgb), 0.1);
              border: 1px solid rgba(var(--accent-rgb), 0.25);
              color: var(--accent); font-size: 12px;
              font-weight: 700; letter-spacing: 0.07em; text-transform: uppercase;
            }
            .sec-head { text-align: center; max-width: 760px; margin: 0 auto 56px; }
            .sec-head h2 {
              font-size: 44px; font-weight: 700; letter-spacing: -0.04em;
              line-height: 1.08; margin: 14px 0 16px;
            }
            .sec-head p { font-size: 17px; line-height: 1.75; opacity: 0.72; }

            .reveal {
              opacity: 1;
              transform: none;
              transition: opacity 0.7s ease, transform 0.7s ease;
            }
            .visible-init.reveal {
              opacity: 0;
              transform: translateY(32px);
            }
            .reveal.visible {
              opacity: 1 !important;
              transform: none !important;
            }

            .topnav {
              position: sticky; top: 0; z-index: 50; background: rgba(255,255,255,0.9);
              backdrop-filter: blur(12px); border-bottom: 1px solid rgba(17,24,39,0.06);
            }
            .topnav-inner {
              max-width: 1200px; margin: 0 auto; padding: 16px 24px;
              display: flex; align-items: center; justify-content: space-between; gap: 16px;
            }
            .brand {
              display: flex; align-items: center; gap: 12px; font-weight: 800;
              letter-spacing: -0.03em; color: #111827;
            }
            .brand-badge {
              width: 36px; height: 36px; border-radius: 12px;
              background: linear-gradient(135deg, rgba(var(--accent-rgb),0.95), rgba(var(--accent-rgb),0.7));
              display: inline-flex; align-items: center; justify-content: center;
              color: #fff; font-size: 14px; box-shadow: 0 10px 24px rgba(var(--accent-rgb),0.25);
            }
            .nav-cta {
              padding: 12px 18px; border-radius: 999px; background: #111827; color: #fff;
              font-size: 14px; font-weight: 600; border: none; display: inline-flex; align-items: center; justify-content: center;
            }

            .hvf {
              position: relative; min-height: 100vh; overflow: hidden;
              background: #fff;
            }
            .hvf-video { position: absolute; inset: 0; z-index: 0; }
            .hvf-video video {
              width: 100%; height: 100%; object-fit: cover; transform: scaleY(-1);
            }
            .hvf-overlay {
              position: absolute; inset: 0;
              background:
                linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.25) 30%, rgba(255,255,255,0.8) 62%, rgba(255,255,255,1) 100%);
            }
            .hvf-content {
              position: relative; z-index: 2; display: flex; justify-content: center;
              padding: 140px 24px 80px;
            }
            .hvf-inner {
              max-width: 1200px; width: 100%;
              display: flex; flex-direction: column; gap: 28px;
            }
            .hvf-h1 {
              font-size: 80px; font-weight: 500;
              letter-spacing: -0.04em; line-height: 1.02;
              color: #0a0a0f; max-width: 900px;
            }
            .hvf-accent {
              font-family: 'Instrument Serif', Georgia, serif;
              font-style: italic; font-size: 100px;
              font-weight: 400; letter-spacing: -0.03em;
            }
            .hvf-desc {
              font-size: 18px; line-height: 1.65; color: #373a46;
              opacity: 0.84; max-width: 554px;
            }
            .hvf-chips { display: flex; flex-wrap: wrap; gap: 10px; }
            .hvf-chip {
              display: flex; align-items: center; gap: 7px;
              padding: 8px 14px; border-radius: 100px;
              background: rgba(var(--accent-rgb),0.08);
              border: 1px solid rgba(var(--accent-rgb),0.22);
              color: #374151; font-size: 13px; font-weight: 500;
            }
            .hvf-pill {
              display: flex; align-items: center; max-width: 510px;
              background: #fcfcfc; border-radius: 40px;
              border: 1px solid rgba(0,0,0,0.065);
              box-shadow: 0px 10px 40px 5px rgba(194,194,194,0.25);
              padding: 5px 5px 5px 22px; gap: 8px;
            }
            .hvf-input {
              flex: 1; min-width: 0; border: none; outline: none;
              background: transparent; font-size: 15px;
              color: #0f0f0f; letter-spacing: -0.01em;
            }
            .hvf-input::placeholder { color: #b8bcc8; }
            .hvf-btn {
              border-radius: 100px; color: #fff; border: none; flex-shrink: 0;
              background: linear-gradient(180deg,#323232,#1d1d1d,#111);
              box-shadow: inset -4px -6px 25px 0px rgba(201,201,201,0.08), inset 4px 4px 10px 0px rgba(29,29,29,0.24);
              padding: 13px 22px; font-size: 14px; font-weight: 500;
              cursor: pointer; white-space: nowrap;
            }
            .hvf-proof { display: flex; align-items: center; gap: 10px; padding-left: 4px; }
            .hvf-avatars { display: flex; }
            .hvf-av {
              width: 26px; height: 26px; border-radius: 50%;
              border: 1.5px solid #fff; display: flex;
              align-items: center; justify-content: center;
              font-size: 8px; font-weight: 700; margin-left: -7px;
            }
            .hvf-av:first-child { margin-left: 0; }
            .hvf-stars { display: flex; gap: 2px; }
            .hvf-rcount { font-size: 13px; font-weight: 500; color: #373a46; opacity: 0.72; }

            .tms {
              padding: 60px 0; background: var(--bodyBg);
              border-top: 1px solid rgba(0,0,0,0.06);
              border-bottom: 1px solid rgba(0,0,0,0.06);
            }
            .tms-grid {
              display: grid; grid-template-columns: repeat(3,1fr);
              gap: 2px; max-width: 1200px; margin: 0 auto; padding: 0 24px;
            }
            .tms-cell { text-align: center; padding: 32px 24px; position: relative; }
            .tms-cell:not(:last-child)::after {
              content: ''; position: absolute; right: 0; top: 20%;
              height: 60%; width: 1px; background: rgba(0,0,0,0.08);
            }
            .tms-val {
              font-size: 48px; font-weight: 800; letter-spacing: -0.04em;
              color: var(--accent); line-height: 1;
            }
            .tms-label { font-size: 15px; font-weight: 600; color: #111827; margin: 8px 0 6px; }
            .tms-note { font-size: 13px; color: #6b7280; line-height: 1.5; }

            .falt { padding: 96px 0; background: #fff; }
            .falt-head { text-align: center; max-width: 720px; margin: 0 auto 80px; }
            .falt-head h2 {
              font-size: 44px; font-weight: 700;
              letter-spacing: -0.04em; line-height: 1.08; margin: 14px 0;
            }
            .falt-block {
              display: grid; grid-template-columns: 1fr 1fr;
              gap: 80px; align-items: center; padding: 0 24px;
              max-width: 1200px; margin: 0 auto 100px;
            }
            .falt-block:last-child { margin-bottom: 0; }
            .falt-block.flip { direction: rtl; }
            .falt-block.flip > * { direction: ltr; }
            .falt-num {
              font-size: 13px; font-weight: 700; letter-spacing: 0.1em;
              text-transform: uppercase; color: var(--accent); margin-bottom: 16px;
            }
            .falt-copy h3 {
              font-size: 36px; font-weight: 700;
              letter-spacing: -0.03em; line-height: 1.1; margin: 0 0 18px;
            }
            .falt-copy p {
              font-size: 17px; color: #4b5563; line-height: 1.8; margin: 0 0 28px;
            }
            .falt-chips { display: flex; flex-wrap: wrap; gap: 8px; margin-bottom: 28px; }
            .falt-chip {
              padding: 7px 14px; border-radius: 100px; font-size: 13px;
              font-weight: 600; background: rgba(var(--accent-rgb),0.08);
              border: 1px solid rgba(var(--accent-rgb),0.2); color: #374151;
            }
            .falt-visual {
              border-radius: 24px; overflow: hidden; background: #fff;
              box-shadow: 0 24px 60px rgba(15,23,42,0.1);
              border: 1px solid #e5e7eb;
            }
            .falt-visual img, .falt-visual video { width: 100%; display: block; }
            .falt-visual-dark {
              background: #111827; min-height: 380px; display: flex;
              align-items: center; justify-content: center; position: relative; overflow: hidden;
            }

            .fig { padding: 96px 0; background: #fff; }
            .fig.dark { background: #111827; color: #fff; }
            .fig-head { text-align: center; max-width: 720px; margin: 0 auto 60px; }
            .fig-head h2 {
              font-size: 44px; font-weight: 700;
              letter-spacing: -0.04em; line-height: 1.08; margin: 14px 0 16px;
            }
            .fig-head p { opacity: 0.72; font-size: 17px; line-height: 1.75; }
            .fig-grid {
              display: grid; grid-template-columns: repeat(3,1fr);
              gap: 20px; max-width: 1200px; margin: 0 auto; padding: 0 24px;
            }
            .fig-card {
              padding: 28px; border-radius: 20px;
              border: 1px solid rgba(0,0,0,0.07);
              background: #fff; transition: transform 0.25s, box-shadow 0.25s;
            }
            .fig.dark .fig-card {
              background: rgba(255,255,255,0.04);
              border-color: rgba(255,255,255,0.09);
            }
            .fig-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 20px 48px rgba(15,23,42,0.1);
            }
            .fig-icon {
              width: 48px; height: 48px; border-radius: 14px;
              background: rgba(var(--accent-rgb),0.1);
              display: flex; align-items: center; justify-content: center; margin-bottom: 20px;
            }
            .fig-card h4 {
              font-size: 17px; font-weight: 700; letter-spacing: -0.025em; margin: 0 0 10px;
            }
            .fig-card p { font-size: 14px; line-height: 1.7; margin: 0; color: #6b7280; }
            .fig.dark .fig-card p { color: rgba(255,255,255,0.7); }

            .gvw { padding: 96px 0; background: var(--bodyBg); }
            .gvw-head { text-align: center; max-width: 680px; margin: 0 auto 56px; }
            .gvw-head h2 {
              font-size: 44px; font-weight: 700;
              letter-spacing: -0.04em; line-height: 1.08; margin: 14px 0 16px;
            }
            .gvw-head p { font-size: 17px; line-height: 1.75; opacity: 0.72; }
            .gvw-grid {
              display: grid; grid-template-columns: repeat(2,1fr);
              gap: 20px; max-width: 1200px; margin: 0 auto; padding: 0 24px;
            }
            .gvw-card {
              border-radius: 20px; overflow: hidden;
              background: #fff; border: 1px solid #e5e7eb;
              box-shadow: 0 16px 40px rgba(15,23,42,0.08);
              transition: transform 0.3s, box-shadow 0.3s;
            }
            .gvw-card:hover {
              transform: translateY(-6px) scale(1.01);
              box-shadow: 0 28px 64px rgba(15,23,42,0.14);
            }
            .gvw-video { position: relative; aspect-ratio: 16/9; overflow: hidden; }
            .gvw-video video { width: 100%; height: 100%; object-fit: cover; display: block; }
            .gvw-caption {
              padding: 16px 18px; font-size: 14px; font-weight: 600;
              color: #111827; letter-spacing: -0.01em;
            }

            .wtj { padding: 80px 0; background: #111827; color: #fff; }
            .wtj-inner { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
            .wtj-top {
              display: flex; align-items: center; gap: 20px;
              margin-bottom: 48px; flex-wrap: wrap;
            }
            .wtj-logo {
              display: inline-flex; align-items: center; gap: 12px;
              font-size: 28px; font-weight: 800; letter-spacing: -0.03em;
            }
            .wtj-logo-mark {
              width: 42px; height: 42px; border-radius: 14px;
              background: linear-gradient(135deg, rgba(var(--accent-rgb),0.95), rgba(var(--accent-rgb),0.72));
              display: inline-flex; align-items: center; justify-content: center;
              color: #fff;
            }
            .wtj-divider {
              width: 1px; height: 40px; background: rgba(255,255,255,0.16);
            }
            .wtj-copy {
              max-width: 720px; color: rgba(255,255,255,0.74);
              line-height: 1.8; font-size: 15px;
            }
            .wtj-grid {
              display: grid; grid-template-columns: 2fr 1fr 1fr;
              gap: 32px; margin-top: 32px;
            }
            .wtj-col h4 {
              font-size: 16px; font-weight: 700; margin-bottom: 16px; letter-spacing: -0.02em;
            }
            .wtj-links { display: flex; flex-direction: column; gap: 12px; }
            .wtj-links a { color: rgba(255,255,255,0.72); font-size: 14px; }
            .wtj-bottom {
              margin-top: 48px; padding-top: 24px; border-top: 1px solid rgba(255,255,255,0.1);
              display: flex; align-items: center; justify-content: space-between; gap: 16px; flex-wrap: wrap;
            }
            .wtj-socials { display: flex; align-items: center; gap: 12px; }
            .wtj-social {
              width: 38px; height: 38px; border-radius: 999px;
              border: 1px solid rgba(255,255,255,0.12);
              display: inline-flex; align-items: center; justify-content: center;
              color: #fff; background: rgba(255,255,255,0.04);
            }
            .wtj-note { color: rgba(255,255,255,0.58); font-size: 13px; }

            @media (max-width: 992px) {
              .hvf-content { padding-top: 120px; }
              .hvf-h1 { font-size: 58px; max-width: 100%; }
              .hvf-accent { font-size: 68px; }
              .wtj-grid { grid-template-columns: 1fr 1fr; }
            }

            @media (max-width: 768px) {
              .fig-grid, .gvw-grid, .tms-grid, .wtj-grid, .falt-block { grid-template-columns: 1fr !important; }
              .falt-block.flip { direction: ltr !important; }
              .tms-cell:not(:last-child)::after { display: none; }
              .sec-head h2, .fig-head h2, .gvw-head h2, .falt-head h2 { font-size: 34px; }
              .hvf-content { padding: 110px 20px 64px; }
              .hvf-h1 { font-size: 42px; line-height: 1.04; }
              .hvf-accent { font-size: 48px; }
              .hvf-desc { font-size: 16px; }
              .hvf-pill { flex-direction: column; align-items: stretch; border-radius: 24px; padding: 14px; }
              .hvf-btn { width: 100%; }
              .wtj-divider { display: none; }
            }
          `,
        }}
      />

      <header className="topnav">
        <div className="topnav-inner">
          <div className="brand">
            <span className="brand-badge">TJ</span>
            <span>Techjockey</span>
          </div>
          <a href="#contact" className="nav-cta">
            Get Started
          </a>
        </div>
      </header>

      <section className="hvf">
        <div className="hvf-video" aria-hidden="true">
          <video
            autoPlay
            muted
            loop
            playsInline
            preload="auto"
            poster="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1400&q=80"
          >
            <source src="https://cdn.coverr.co/videos/coverr-team-meeting-at-office-1560917826540?download=1080p" type="video/mp4" />
          </video>
        </div>
        <div className="hvf-overlay" />
        <div className="hvf-content">
          <div className="hvf-inner">
            <div className="eyebrow anim d0">Trusted business software guidance</div>

            <h1 className="hvf-h1 anim d1">
              Find the right software for your business,
              <span className="hvf-accent"> faster</span>
            </h1>

            <p className="hvf-desc anim d2">
              Compare, evaluate, and shortlist software solutions with expert support from Techjockey. Save time, reduce risk, and make confident buying decisions.
            </p>

            <div className="hvf-chips anim d2">
              <div className="hvf-chip">Verified software listings</div>
              <div className="hvf-chip">Expert consultation</div>
              <div className="hvf-chip">Quick vendor connect</div>
            </div>

            <form className="hvf-pill anim d3" id="contact" onSubmit={(e) => e.preventDefault()}>
              <input className="hvf-input" type="text" placeholder="Enter your work email" aria-label="Work email" />
              <button className="hvf-btn" type="submit">
                Book Free Consultation
              </button>
            </form>

            <div className="hvf-proof anim d4">
              <div className="hvf-avatars" aria-hidden="true">
                <div className="hvf-av" style={{ background: '#fde68a', color: '#111827' }}>A</div>
                <div className="hvf-av" style={{ background: '#bfdbfe', color: '#111827' }}>R</div>
                <div className="hvf-av" style={{ background: '#fecdd3', color: '#111827' }}>S</div>
              </div>
              <div className="hvf-stars" aria-hidden="true">
                <span style={{ color: '#f59e0b' }}>★</span>
                <span style={{ color: '#f59e0b' }}>★</span>
                <span style={{ color: '#f59e0b' }}>★</span>
                <span style={{ color: '#f59e0b' }}>★</span>
                <span style={{ color: '#f59e0b' }}>★</span>
              </div>
              <div className="hvf-rcount">Thousands of businesses trust Techjockey to discover the right tools.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="tms reveal">
        <div className="tms-grid">
          <div className="tms-cell">
            <div className="tms-val">25K+</div>
            <div className="tms-label">Software options</div>
            <div className="tms-note">Explore leading business solutions across categories.</div>
          </div>
          <div className="tms-cell">
            <div className="tms-val">1M+</div>
            <div className="tms-label">Buyer interactions</div>
            <div className="tms-note">Helping teams compare and buy with more confidence.</div>
          </div>
          <div className="tms-cell">
            <div className="tms-val">4.8/5</div>
            <div className="tms-label">Customer satisfaction</div>
            <div className="tms-note">Consistent support from search to final shortlist.</div>
          </div>
        </div>
      </section>

      <section className="falt">
        <div className="falt-head reveal">
          <span className="eyebrow">How it works</span>
          <h2>Make software buying simple and transparent</h2>
        </div>

        <div className="falt-block reveal">
          <div className="falt-copy">
            <div className="falt-num">Step 01</div>
            <h3>Tell us what your business needs</h3>
            <p>
              Share your use case, team size, industry, and budget so our experts can narrow down software options that genuinely fit your workflow.
            </p>
            <div className="falt-chips">
              <span className="falt-chip">Requirement mapping</span>
              <span className="falt-chip">Budget matching</span>
              <span className="falt-chip">Category shortlisting</span>
            </div>
            <a href="#contact" className="nav-cta">Talk to an Expert</a>
          </div>
          <div className="falt-visual">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="Business team discussing software options"
            />
          </div>
        </div>

        <div className="falt-block flip reveal">
          <div className="falt-copy">
            <div className="falt-num">Step 02</div>
            <h3>Compare top-fit products side by side</h3>
            <p>
              Review features, pricing, deployment models, and support quality in one place to move faster from research to decision.
            </p>
            <div className="falt-chips">
              <span className="falt-chip">Feature comparison</span>
              <span className="falt-chip">Pricing visibility</span>
              <span className="falt-chip">Vendor discovery</span>
            </div>
            <a href="#contact" className="nav-cta">Compare Solutions</a>
          </div>
          <div className="falt-visual">
            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
              alt="Professionals comparing shortlisted software"
            />
          </div>
        </div>

        <div className="falt-block reveal">
          <div className="falt-copy">
            <div className="falt-num">Step 03</div>
            <h3>Connect with vendors and close with confidence</h3>
            <p>
              Get introduced to the right vendors, schedule demos quickly, and move toward purchase with guidance at every stage.
            </p>
            <div className="falt-chips">
              <span className="falt-chip">Demo coordination</span>
              <span className="falt-chip">Fast follow-up</span>
              <span className="falt-chip">Decision support</span>
            </div>
            <a href="#contact" className="nav-cta">Book a Demo</a>
          </div>
          <div className="falt-visual">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
              alt="Team finalizing software purchase decision"
            />
          </div>
        </div>
      </section>

      <section className="fig reveal">
        <div className="fig-head">
          <span className="eyebrow">Why Techjockey</span>
          <h2>Built to reduce the friction in software discovery</h2>
          <p>
            Everything is designed to help businesses make better decisions without wasting weeks on scattered research and sales follow-ups.
          </p>
        </div>

        <div className="fig-grid">
          <div className="fig-card">
            <div className="fig-icon">✓</div>
            <h4>Expert-led recommendations</h4>
            <p>Get suggestions based on actual business fit, not just popularity.</p>
          </div>
          <div className="fig-card">
            <div className="fig-icon">◉</div>
            <h4>Wide category coverage</h4>
            <p>Explore software across HR, CRM, ERP, accounting, security, and more.</p>
          </div>
          <div className="fig-card">
            <div className="fig-icon">↗</div>
            <h4>Faster buying journey</h4>
            <p>Move from problem statement to shortlist and vendor connection quickly.</p>
          </div>
        </div>
      </section>

      <section className="fig dark reveal">
        <div className="fig-head">
          <span className="eyebrow">Business outcomes</span>
          <h2>What teams improve with the right software match</h2>
          <p>
            Better fit leads to faster adoption, stronger ROI, and fewer decision regrets across stakeholders.
          </p>
        </div>

        <div className="fig-grid">
          <div className="fig-card">
            <div className="fig-icon">⚙</div>
            <h4>Operational efficiency</h4>
            <p>Replace manual work with tools that align to your process maturity.</p>
          </div>
          <div className="fig-card">
            <div className="fig-icon">₹</div>
            <h4>Controlled software spend</h4>
            <p>Choose products that fit your budget and avoid overspending on unused capabilities.</p>
          </div>
          <div className="fig-card">
            <div className="fig-icon">☁</div>
            <h4>Scalable tech decisions</h4>
            <p>Select solutions that can support future growth without forcing constant platform changes.</p>
          </div>
        </div>
      </section>

      <section className="gvw reveal">
        <div className="gvw-head">
          <span className="eyebrow">Inside the experience</span>
          <h2>See the modern buying journey in motion</h2>
          <p>Short visual snapshots of how teams research, compare, and move faster with guided software discovery.</p>
        </div>

        <div className="gvw-grid">
          <div className="gvw-card">
            <div className="gvw-video">
              <video autoPlay muted loop playsInline preload="metadata">
                <source src="https://cdn.coverr.co/videos/coverr-people-working-in-an-office-5176/1080p.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="gvw-caption">Evaluate options with clarity and stakeholder alignment.</div>
          </div>

          <div className="gvw-card">
            <div className="gvw-video">
              <video autoPlay muted loop playsInline preload="metadata">
                <source src="https://cdn.coverr.co/videos/coverr-business-people-discussing-1560088122468/1080p.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="gvw-caption">Connect with the right vendors without the usual back-and-forth delay.</div>
          </div>
        </div>
      </section>

      <footer className="wtj">
        <div className="wtj-inner">
          <div className="wtj-top">
            <div className="wtj-logo">
              <span className="wtj-logo-mark">TJ</span>
              <span>Techjockey</span>
            </div>
            <div className="wtj-divider" />
            <p className="wtj-copy">
              Techjockey helps businesses discover, compare, and buy software with confidence. From requirement mapping to vendor connection, the process is made simpler, faster, and more transparent.
            </p>
          </div>

          <div className="wtj-grid">
            <div className="wtj-col">
              <h4>About</h4>
              <div className="wtj-links">
                <a href="#contact">Book Consultation</a>
                <a href="#contact">Get Recommendations</a>
                <a href="#contact">Request a Callback</a>
              </div>
            </div>
            <div className="wtj-col">
              <h4>Solutions</h4>
              <div className="wtj-links">
                <a href="#contact">CRM Software</a>
                <a href="#contact">HR Software</a>
                <a href="#contact">Accounting Software</a>
              </div>
            </div>
            <div className="wtj-col">
              <h4>Support</h4>
              <div className="wtj-links">
                <a href="https://www.techjockey.com/" target="_blank" rel="noreferrer">Visit Website</a>
                <a href="mailto:info@techjockey.com">info@techjockey.com</a>
                <a href="tel:+911204850000">+91 120 485 0000</a>
              </div>
            </div>
          </div>

          <div className="wtj-bottom">
            <div className="wtj-note">© 2026 Techjockey. All rights reserved.</div>
            <div className="wtj-socials">
              <a className="wtj-social" href="https://www.facebook.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13 22v-8h3l1-4h-4V8c0-1.2.4-2 2-2h2V2.3c-.4-.1-1.8-.3-3.3-.3-3.3 0-5.7 2-5.7 5.8V10H5v4h3v8h5z" />
                </svg>
              </a>
              <a className="wtj-social" href="https://www.linkedin.com/company/techjockeyinfotech/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2.01 2.01 0 1 0 5.3 7.02 2.01 2.01 0 0 0 5.25 3zM20.44 13.04c0-3.13-1.67-4.58-3.9-4.58-1.8 0-2.61.99-3.06 1.68V8.5h-3.38c.04 1.08 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.93.27-.68.87-1.39 1.89-1.39 1.33 0 1.86 1.05 1.86 2.58V20h3.38v-6.96z" />
                </svg>
              </a>
              <a className="wtj-social" href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm4.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;