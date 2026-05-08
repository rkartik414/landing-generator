import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const accent = '#9d84db';
  const primary = '#9d84db';
  const bodyBg = '#ffffff';
  const [testimonialIndex, setTestimonialIndex] = useState(0);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--accent-rgb', '157,132,219');
    document.documentElement.style.setProperty('--bodyBg', bodyBg);

    const elements = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.12 }
    );

    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [accent, primary, bodyBg]);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % 3);
    }, 3500);
    return () => clearInterval(timer);
  }, []);

  const testimonials = [
    {
      quote:
        'The buying journey felt faster, clearer, and more reliable. We were able to compare software, understand fit, and move ahead with confidence.',
      name: 'Operations Lead',
      role: 'Mid-size Business',
    },
    {
      quote:
        'From discovery to final shortlist, the experience stayed simple and professional. The structure helps teams make decisions without extra friction.',
      name: 'Finance Manager',
      role: 'Growing Enterprise',
    },
    {
      quote:
        'It is easy to navigate, informative, and conversion-ready. The page communicates value quickly while keeping the overall experience trustworthy.',
      name: 'Business Head',
      role: 'SME Buyer',
    },
  ];

  return (
    <div style={{ background: bodyBg, fontFamily: "'Inter', ui-sans-serif, sans-serif", color: '#111827' }}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&family=Instrument+Serif:ital@1&display=swap"
      />
      <style
        dangerouslySetInnerHTML={{
          __html: `
            :root {
              --accent: #9d84db;
              --accent-rgb: 157,132,219;
              --primary: #9d84db;
              --bodyBg: #ffffff;
            }

            * { box-sizing: border-box; margin: 0; padding: 0; }
            html { scroll-behavior: smooth; }
            body { overflow-x: hidden; background: #ffffff; }
            a { text-decoration: none; color: inherit; }
            img, video { max-width: 100%; display: block; }

            h1, h2, h3, h4, h5 {
              font-family: 'Plus Jakarta Sans', ui-sans-serif, sans-serif;
            }

            .container { max-width: 1200px; margin: 0 auto; padding: 0 24px; }
            .section { padding: 88px 0; position: relative; }
            .eyebrow {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 6px 14px;
              border-radius: 100px;
              background: rgba(var(--accent-rgb), 0.1);
              border: 1px solid rgba(var(--accent-rgb), 0.22);
              color: var(--accent);
              font-size: 12px;
              font-weight: 700;
              letter-spacing: 0.08em;
              text-transform: uppercase;
            }
            .sec-head { text-align: center; max-width: 760px; margin: 0 auto 56px; }
            .sec-head h2 {
              font-size: 44px;
              font-weight: 700;
              letter-spacing: -0.04em;
              line-height: 1.08;
              margin: 14px 0 16px;
            }
            .sec-head p {
              font-size: 17px;
              line-height: 1.75;
              opacity: 0.78;
              color: #4b5563;
            }

            .reveal {
              opacity: 0;
              transform: translateY(28px);
              transition: opacity 0.7s ease, transform 0.7s ease;
            }
            .reveal.visible {
              opacity: 1;
              transform: translateY(0);
            }

            .anim {
              opacity: 0;
              animation: fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards;
            }
            .anim-scale {
              opacity: 0;
              animation: scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards;
            }
            .d0 { animation-delay: 0.05s; }
            .d1 { animation-delay: 0.2s; }
            .d2 { animation-delay: 0.35s; }
            .d3 { animation-delay: 0.5s; }
            .d4 { animation-delay: 0.65s; }
            .d5 { animation-delay: 0.8s; }

            @keyframes fadeUp {
              from { opacity: 0; transform: translateY(28px); }
              to { opacity: 1; transform: translateY(0); }
            }
            @keyframes scaleIn {
              from { opacity: 0; transform: scale(0.96); }
              to { opacity: 1; transform: scale(1); }
            }
            @keyframes floatY {
              0%, 100% { transform: translateY(0px); }
              50% { transform: translateY(-10px); }
            }

            .nav {
              position: sticky;
              top: 0;
              z-index: 50;
              background: rgba(255,255,255,0.86);
              backdrop-filter: blur(14px);
              border-bottom: 1px solid rgba(17,24,39,0.06);
            }
            .nav-inner {
              max-width: 1200px;
              margin: 0 auto;
              padding: 16px 24px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 16px;
            }
            .nav-logo {
              display: flex;
              align-items: center;
              gap: 10px;
              font-weight: 800;
              font-size: 18px;
              color: #111827;
            }
            .nav-links {
              display: flex;
              align-items: center;
              gap: 24px;
              color: #4b5563;
              font-size: 14px;
              font-weight: 600;
            }
            .nav-cta {
              padding: 12px 18px;
              border-radius: 999px;
              background: linear-gradient(180deg, #323232, #111111);
              color: #ffffff;
              border: none;
              font-weight: 700;
              font-size: 14px;
              box-shadow: 0 12px 24px rgba(17,17,17,0.18);
            }

            .hero {
              position: relative;
              min-height: calc(100vh - 72px);
              overflow: hidden;
              background:
                radial-gradient(circle at 15% 20%, rgba(var(--accent-rgb), 0.18), transparent 32%),
                radial-gradient(circle at 85% 15%, rgba(var(--accent-rgb), 0.12), transparent 28%),
                linear-gradient(180deg, #faf8ff 0%, #ffffff 58%, #ffffff 100%);
            }
            .hero-bg {
              position: absolute;
              inset: 0;
              pointer-events: none;
            }
            .hero-grid {
              position: relative;
              z-index: 2;
              display: grid;
              grid-template-columns: 1.1fr 0.9fr;
              gap: 42px;
              align-items: center;
              min-height: calc(100vh - 72px);
              padding: 72px 24px 56px;
              max-width: 1200px;
              margin: 0 auto;
            }
            .hero-copy h1 {
              font-size: clamp(44px, 7vw, 88px);
              line-height: 0.98;
              letter-spacing: -0.05em;
              color: #0f172a;
              max-width: 820px;
            }
            .hero-copy h1 .accent-serif {
              font-family: 'Instrument Serif', Georgia, serif;
              font-style: italic;
              font-weight: 400;
              color: var(--accent);
            }
            .hero-copy p {
              margin-top: 22px;
              font-size: 18px;
              line-height: 1.75;
              color: #4b5563;
              max-width: 610px;
            }
            .hero-chips {
              display: flex;
              flex-wrap: wrap;
              gap: 10px;
              margin-top: 24px;
            }
            .hero-chip {
              display: inline-flex;
              align-items: center;
              gap: 8px;
              padding: 9px 14px;
              border-radius: 999px;
              background: rgba(var(--accent-rgb), 0.08);
              border: 1px solid rgba(var(--accent-rgb), 0.22);
              color: #374151;
              font-size: 13px;
              font-weight: 600;
            }
            .hero-form-wrap {
              margin-top: 28px;
              max-width: 560px;
              background: rgba(255,255,255,0.92);
              border: 1px solid rgba(17,24,39,0.08);
              border-radius: 28px;
              padding: 8px;
              box-shadow: 0 24px 60px rgba(15,23,42,0.08);
            }
            .hero-form {
              display: flex;
              align-items: center;
              gap: 10px;
            }
            .hero-input {
              flex: 1;
              min-width: 0;
              border: none;
              outline: none;
              background: transparent;
              padding: 14px 16px;
              font-size: 15px;
              color: #111827;
            }
            .hero-input::placeholder { color: #9ca3af; }
            .hero-submit {
              white-space: nowrap;
              border: none;
              cursor: pointer;
              padding: 14px 22px;
              border-radius: 999px;
              background: linear-gradient(180deg, #323232, #111111);
              color: #ffffff;
              font-weight: 700;
              font-size: 14px;
            }
            .hero-proof {
              display: flex;
              align-items: center;
              gap: 12px;
              margin-top: 18px;
              color: #4b5563;
              font-size: 13px;
              font-weight: 600;
            }
            .hero-avatars { display: flex; }
            .hero-avatar {
              width: 28px;
              height: 28px;
              border-radius: 50%;
              margin-left: -8px;
              border: 2px solid #ffffff;
              display: flex;
              align-items: center;
              justify-content: center;
              font-size: 9px;
              font-weight: 800;
              color: #111827;
            }
            .hero-avatar:first-child { margin-left: 0; }

            .hero-card {
              position: relative;
              border-radius: 28px;
              overflow: hidden;
              border: 1px solid rgba(17,24,39,0.08);
              background: linear-gradient(180deg, #ffffff, #f8f7ff);
              box-shadow: 0 30px 80px rgba(15,23,42,0.12);
              min-height: 620px;
            }
            .hero-card-top {
              padding: 18px 18px 0;
              display: flex;
              justify-content: space-between;
              align-items: center;
            }
            .hero-card-dots {
              display: flex;
              gap: 6px;
            }
            .hero-card-dots span {
              width: 10px;
              height: 10px;
              border-radius: 999px;
              background: #e5e7eb;
            }
            .hero-card-tag {
              font-size: 12px;
              font-weight: 700;
              color: var(--accent);
              background: rgba(var(--accent-rgb), 0.1);
              border: 1px solid rgba(var(--accent-rgb), 0.2);
              border-radius: 999px;
              padding: 7px 10px;
            }
            .hero-card-body {
              position: relative;
              padding: 18px;
              height: calc(100% - 56px);
              display: flex;
              align-items: flex-end;
              justify-content: center;
            }
            .hero-human {
              position: absolute;
              left: 50%;
              bottom: 0;
              transform: translateX(-50%);
              width: min(88%, 460px);
              border-radius: 24px;
              overflow: hidden;
              animation: floatY 5s ease-in-out infinite;
              box-shadow: 0 24px 48px rgba(17,24,39,0.12);
            }
            .hero-human img {
              width: 100%;
              height: auto;
              object-fit: cover;
            }
            .hero-float {
              position: absolute;
              background: rgba(255,255,255,0.92);
              border: 1px solid rgba(17,24,39,0.08);
              border-radius: 18px;
              box-shadow: 0 18px 44px rgba(15,23,42,0.12);
              padding: 14px 16px;
            }
            .hero-float.small {
              font-size: 13px;
              color: #374151;
              font-weight: 700;
            }
            .hero-float strong {
              display: block;
              font-size: 24px;
              line-height: 1;
              margin-bottom: 4px;
              color: #111827;
            }
            .hero-float.top-left { top: 90px; left: 20px; }
            .hero-float.mid-right { top: 180px; right: 18px; }
            .hero-float.bottom-left { bottom: 22px; left: 20px; }

            .stats {
              padding: 30px 0 24px;
              background: #ffffff;
              border-top: 1px solid rgba(17,24,39,0.06);
              border-bottom: 1px solid rgba(17,24,39,0.06);
            }
            .stats-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 2px;
            }
            .stats-item {
              text-align: center;
              padding: 28px 18px;
              position: relative;
            }
            .stats-item:not(:last-child)::after {
              content: '';
              position: absolute;
              right: 0;
              top: 18%;
              width: 1px;
              height: 64%;
              background: rgba(17,24,39,0.08);
            }
            .stats-value {
              font-size: 48px;
              line-height: 1;
              font-weight: 800;
              color: var(--accent);
              letter-spacing: -0.04em;
            }
            .stats-label {
              margin-top: 8px;
              font-size: 15px;
              font-weight: 700;
              color: #111827;
            }
            .stats-note {
              margin-top: 6px;
              font-size: 13px;
              color: #6b7280;
              line-height: 1.6;
            }

            .features-alt { padding: 96px 0; }
            .feature-row {
              display: grid;
              grid-template-columns: 1fr 1fr;
              gap: 64px;
              align-items: center;
              margin-bottom: 88px;
            }
            .feature-row:last-child { margin-bottom: 0; }
            .feature-row.flip { direction: rtl; }
            .feature-row.flip > * { direction: ltr; }
            .feature-num {
              font-size: 13px;
              color: var(--accent);
              font-weight: 800;
              letter-spacing: 0.12em;
              text-transform: uppercase;
              margin-bottom: 16px;
            }
            .feature-copy h3 {
              font-size: 36px;
              line-height: 1.08;
              letter-spacing: -0.04em;
              margin-bottom: 16px;
              color: #111827;
            }
            .feature-copy p {
              font-size: 17px;
              line-height: 1.8;
              color: #4b5563;
              margin-bottom: 24px;
            }
            .feature-chips {
              display: flex;
              flex-wrap: wrap;
              gap: 8px;
            }
            .feature-chip {
              padding: 8px 14px;
              border-radius: 999px;
              background: rgba(var(--accent-rgb), 0.08);
              border: 1px solid rgba(var(--accent-rgb), 0.2);
              font-size: 13px;
              font-weight: 700;
              color: #374151;
            }
            .feature-visual {
              border-radius: 24px;
              overflow: hidden;
              border: 1px solid #e5e7eb;
              background: #ffffff;
              box-shadow: 0 24px 60px rgba(15,23,42,0.1);
            }
            .feature-visual img {
              width: 100%;
              height: auto;
              object-fit: cover;
            }

            .cards-grid {
              display: grid;
              grid-template-columns: repeat(3, 1fr);
              gap: 20px;
            }
            .card {
              padding: 28px;
              border-radius: 20px;
              background: #ffffff;
              border: 1px solid rgba(17,24,39,0.08);
              transition: transform 0.25s ease, box-shadow 0.25s ease;
              box-shadow: 0 10px 30px rgba(15,23,42,0.04);
            }
            .card:hover {
              transform: translateY(-6px);
              box-shadow: 0 22px 48px rgba(15,23,42,0.1);
            }
            .card-icon {
              width: 48px;
              height: 48px;
              border-radius: 14px;
              display: flex;
              align-items: center;
              justify-content: center;
              background: rgba(var(--accent-rgb), 0.1);
              color: var(--accent);
              margin-bottom: 18px;
            }
            .card h4 {
              font-size: 18px;
              line-height: 1.3;
              margin-bottom: 10px;
              color: #111827;
            }
            .card p {
              font-size: 14px;
              line-height: 1.75;
              color: #6b7280;
            }

            .media-grid {
              display: grid;
              grid-template-columns: repeat(2, 1fr);
              gap: 20px;
            }
            .media-card {
              border-radius: 22px;
              overflow: hidden;
              background: #ffffff;
              border: 1px solid #e5e7eb;
              box-shadow: 0 16px 40px rgba(15,23,42,0.08);
              transition: transform 0.3s ease, box-shadow 0.3s ease;
            }
            .media-card:hover {
              transform: translateY(-6px);
              box-shadow: 0 28px 64px rgba(15,23,42,0.14);
            }
            .media-frame {
              aspect-ratio: 16 / 9;
              overflow: hidden;
              background: #f3f4f6;
            }
            .media-frame video,
            .media-frame img {
              width: 100%;
              height: 100%;
              object-fit: cover;
            }
            .media-caption {
              padding: 16px 18px;
              font-size: 14px;
              font-weight: 700;
              color: #111827;
            }

            .dark-section {
              background: #111827;
              color: #ffffff;
            }
            .dark-section .sec-head p { color: rgba(255,255,255,0.72); }
            .dark-section .card {
              background: rgba(255,255,255,0.04);
              border-color: rgba(255,255,255,0.08);
              box-shadow: none;
            }
            .dark-section .card h4 { color: #ffffff; }
            .dark-section .card p { color: rgba(255,255,255,0.68); }

            .testimonial-wrap {
              max-width: 820px;
              margin: 0 auto;
              position: relative;
            }
            .testimonial-card {
              padding: 34px;
              border-radius: 24px;
              background: #ffffff;
              border: 1px solid rgba(17,24,39,0.08);
              box-shadow: 0 24px 60px rgba(15,23,42,0.08);
              min-height: 240px;
              display: flex;
              flex-direction: column;
              justify-content: space-between;
            }
            .testimonial-quote {
              font-size: 22px;
              line-height: 1.6;
              color: #111827;
              letter-spacing: -0.02em;
            }
            .testimonial-meta {
              margin-top: 22px;
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 16px;
            }
            .testimonial-author {
              font-size: 15px;
              font-weight: 800;
              color: #111827;
            }
            .testimonial-role {
              font-size: 13px;
              color: #6b7280;
              margin-top: 4px;
            }
            .testimonial-dots {
              margin-top: 20px;
              display: flex;
              justify-content: center;
              gap: 8px;
            }
            .testimonial-dot {
              width: 9px;
              height: 9px;
              border-radius: 999px;
              background: #d1d5db;
              border: none;
              cursor: pointer;
            }
            .testimonial-dot.active {
              background: var(--accent);
            }

            .cta-box {
              padding: 36px;
              border-radius: 28px;
              background: linear-gradient(135deg, rgba(var(--accent-rgb), 0.12), rgba(255,255,255,1) 62%);
              border: 1px solid rgba(var(--accent-rgb), 0.18);
              display: flex;
              align-items: center;
              justify-content: space-between;
              gap: 22px;
            }
            .cta-box h3 {
              font-size: 34px;
              line-height: 1.1;
              letter-spacing: -0.04em;
              margin-bottom: 10px;
            }
            .cta-box p {
              font-size: 16px;
              line-height: 1.75;
              color: #4b5563;
              max-width: 700px;
            }
            .cta-actions {
              display: flex;
              align-items: center;
              gap: 12px;
              flex-shrink: 0;
            }
            .btn-primary,
            .btn-secondary {
              display: inline-flex;
              align-items: center;
              justify-content: center;
              padding: 14px 20px;
              border-radius: 999px;
              font-size: 14px;
              font-weight: 800;
            }
            .btn-primary {
              background: linear-gradient(180deg, #323232, #111111);
              color: #ffffff;
            }
            .btn-secondary {
              background: #ffffff;
              color: #111827;
              border: 1px solid rgba(17,24,39,0.1);
            }

            .footer {
              background: #0f172a;
              color: rgba(255,255,255,0.82);
              padding: 56px 0 28px;
            }
            .footer-top {
              display: grid;
              grid-template-columns: 1.2fr 1fr 1fr 1fr;
              gap: 28px;
              padding-bottom: 28px;
              border-bottom: 1px solid rgba(255,255,255,0.08);
            }
            .footer h4 {
              color: #ffffff;
              margin-bottom: 14px;
              font-size: 15px;
            }
            .footer p,
            .footer a {
              font-size: 14px;
              line-height: 1.8;
              color: rgba(255,255,255,0.72);
            }
            .footer-links {
              display: flex;
              flex-direction: column;
              gap: 8px;
            }
            .footer-bottom {
              padding-top: 18px;
              display: flex;
              justify-content: space-between;
              align-items: center;
              gap: 14px;
              flex-wrap: wrap;
            }
            .socials {
              display: flex;
              align-items: center;
              gap: 12px;
            }
            .socials a {
              width: 36px;
              height: 36px;
              border-radius: 999px;
              display: inline-flex;
              align-items: center;
              justify-content: center;
              background: rgba(255,255,255,0.08);
              color: #ffffff;
            }

            @media (max-width: 1024px) {
              .hero-grid,
              .feature-row,
              .footer-top,
              .cta-box {
                grid-template-columns: 1fr;
                display: grid;
              }
              .hero {
                min-height: auto;
              }
              .hero-grid {
                min-height: auto;
                padding-top: 56px;
              }
              .hero-card {
                min-height: 560px;
              }
              .cards-grid {
                grid-template-columns: 1fr 1fr;
              }
            }

            @media (max-width: 768px) {
              .section { padding: 72px 0; }
              .sec-head h2,
              .feature-copy h3,
              .cta-box h3 {
                font-size: 32px;
              }
              .hero-copy h1 {
                font-size: 46px;
              }
              .hero-form {
                flex-direction: column;
                align-items: stretch;
              }
              .hero-submit {
                width: 100%;
              }
              .stats-grid,
              .cards-grid,
              .media-grid {
                grid-template-columns: 1fr;
              }
              .stats-item:not(:last-child)::after {
                display: none;
              }
              .feature-row.flip {
                direction: ltr;
              }
              .nav-links {
                display: none;
              }
              .hero-card {
                min-height: 500px;
              }
              .hero-float.top-left {
                top: 76px;
                left: 12px;
              }
              .hero-float.mid-right {
                top: 154px;
                right: 12px;
              }
              .hero-float.bottom-left {
                left: 12px;
                bottom: 14px;
              }
              .cta-actions {
                flex-wrap: wrap;
              }
            }
          `,
        }}
      />

      <header className="nav">
        <div className="nav-inner">
          <a href="https://www.techjockey.com/" className="nav-logo">
            <img
              src="https://static.techjockey.com/web/assets/images/techjockey-logo.svg"
              alt="Techjockey"
              style={{ height: 28, width: 'auto' }}
            />
          </a>

          <nav className="nav-links">
            <a href="#features">Features</a>
            <a href="#highlights">Highlights</a>
            <a href="#stories">Stories</a>
            <a href="#contact">Contact</a>
          </nav>

          <a href="#contact" className="nav-cta">
            Get Free Consultation
          </a>
        </div>
      </header>

      <section className="hero">
        <div className="hero-bg" />
        <div className="hero-grid">
          <div className="hero-copy">
            <div className="eyebrow anim d0">Software discovery made easier</div>
            <h1 className="anim d1">
              Find business software with a more <span className="accent-serif">confident</span> buying journey
            </h1>
            <p className="anim d2">
              Explore trusted software options, compare solutions faster, and move from research to decision with a clear,
              modern, and conversion-ready experience designed for professional buyers.
            </p>

            <div className="hero-chips anim d3">
              <div className="hero-chip">Verified software categories</div>
              <div className="hero-chip">Faster buyer decisioning</div>
              <div className="hero-chip">Better comparison flow</div>
            </div>

            <div className="hero-form-wrap anim d4" id="contact">
              <form className="hero-form">
                <input className="hero-input" type="text" placeholder="Enter your work email or phone number" />
                <button type="submit" className="hero-submit">
                  Talk to an Expert
                </button>
              </form>
            </div>

            <div className="hero-proof anim d5">
              <div className="hero-avatars">
                <div className="hero-avatar" style={{ background: '#fde68a' }}>AJ</div>
                <div className="hero-avatar" style={{ background: '#bfdbfe' }}>RK</div>
                <div className="hero-avatar" style={{ background: '#c7d2fe' }}>SM</div>
              </div>
              <span>Trusted by thousands of businesses evaluating software every month</span>
            </div>
          </div>

          <div className="hero-card anim-scale d2">
            <div className="hero-card-top">
              <div className="hero-card-dots">
                <span />
                <span />
                <span />
              </div>
              <div className="hero-card-tag">Tech-led buying experience</div>
            </div>

            <div className="hero-card-body">
              <div className="hero-float top-left small">
                <strong>50+</strong>
                categories explored daily
              </div>
              <div className="hero-float mid-right small">
                <strong>Smart</strong>
                comparison flow
              </div>
              <div className="hero-float bottom-left small">
                <strong>Quick</strong>
                shortlist support
              </div>

              <div className="hero-human">
                <img
                  src="https://images.unsplash.com/photo-1573496799652-408c2ac9fe98?auto=format&fit=crop&w=900&q=80"
                  alt="Professional consultant helping businesses choose software"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="stats">
        <div className="container">
          <div className="stats-grid reveal">
            <div className="stats-item">
              <div className="stats-value">10k+</div>
              <div className="stats-label">Business buyers engaged</div>
              <div className="stats-note">Decision makers exploring solutions with more clarity and confidence.</div>
            </div>
            <div className="stats-item">
              <div className="stats-value">50+</div>
              <div className="stats-label">High-intent categories</div>
              <div className="stats-note">Popular software segments showcased with strong discovery pathways.</div>
            </div>
            <div className="stats-item">
              <div className="stats-value">24/7</div>
              <div className="stats-label">Always-on visibility</div>
              <div className="stats-note">A polished landing experience that stays conversion-focused at every hour.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="features-alt section" id="features">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Why it works</div>
            <h2>A cleaner path from software research to final shortlist</h2>
            <p>
              The structure below is built to improve readability, strengthen trust, and help professional users move
              through key decision moments without distraction.
            </p>
          </div>

          <div className="feature-row reveal">
            <div className="feature-copy">
              <div className="feature-num">01 / Guided discovery</div>
              <h3>Help buyers understand value quickly with focused messaging</h3>
              <p>
                Clear positioning, strong hierarchy, and concise supporting details reduce friction at the top of the
                funnel and make the initial visit feel intentional rather than overwhelming.
              </p>
              <div className="feature-chips">
                <span className="feature-chip">Clear headline hierarchy</span>
                <span className="feature-chip">Professional visual trust</span>
                <span className="feature-chip">Action-oriented layout</span>
              </div>
            </div>
            <div className="feature-visual">
              <img
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&fit=crop&w=1200&q=80"
                alt="Team discussing software discovery and comparison"
              />
            </div>
          </div>

          <div className="feature-row flip reveal">
            <div className="feature-copy">
              <div className="feature-num">02 / Better comparison</div>
              <h3>Present decision-making information in a format that feels easier to scan</h3>
              <p>
                Buyers should be able to move from awareness to evaluation with less effort. A strong content rhythm,
                concise cards, and supportive visual cues improve comprehension across the page.
              </p>
              <div className="feature-chips">
                <span className="feature-chip">Readable feature summaries</span>
                <span className="feature-chip">Less visual clutter</span>
                <span className="feature-chip">Improved conversion intent</span>
              </div>
            </div>
            <div className="feature-visual">
              <img
                src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1200&q=80"
                alt="Professional team reviewing business software options"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="highlights">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Highlights</div>
            <h2>Built for clarity, trust, and stronger conversion intent</h2>
            <p>
              Every block is organized to make the experience simpler to understand while keeping the page visually strong
              and easy to navigate.
            </p>
          </div>

          <div className="cards-grid">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" stroke="currentColor" strokeWidth="1.8" />
                  <path d="M8.5 12l2.3 2.3L15.8 9.3" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4>Trust-first presentation</h4>
              <p>
                A professional visual system with clean spacing and supportive proof points helps the page feel credible
                from the first scroll.
              </p>
            </div>

            <div className="card reveal">
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M4 7h16M7 4v6M17 4v6M5 10h14v9H5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4>Readable information flow</h4>
              <p>
                Sections are sequenced to support understanding, so users can discover, evaluate, and act without feeling
                lost inside dense layouts.
              </p>
            </div>

            <div className="card reveal">
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <h4>Conversion-ready CTA structure</h4>
              <p>
                Key actions remain visible and natural within the journey, helping buyers request guidance without extra
                confusion or intrusive friction.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="stories">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Stories in motion</div>
            <h2>Use media blocks to reinforce quality and buyer confidence</h2>
            <p>
              These visuals support the rest of the page and show a polished, modern business experience without crowding
              the hero where the form needs priority.
            </p>
          </div>

          <div className="media-grid">
            <div className="media-card reveal">
              <div className="media-frame">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?auto=format&fit=crop&w=1200&q=80"
                >
                  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="media-caption">Consultative buyer conversations that feel professional and reassuring</div>
            </div>

            <div className="media-card reveal">
              <div className="media-frame">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?auto=format&fit=crop&w=1200&q=80"
                  alt="Professionals reviewing software options in a modern workspace"
                />
              </div>
              <div className="media-caption">Clear product evaluation moments supported by stronger visual communication</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">What stands out</div>
            <h2>Professional product storytelling without unnecessary complexity</h2>
            <p>
              The page keeps the experience premium while remaining practical. That balance makes it easier for serious
              buyers to keep moving.
            </p>
          </div>

          <div className="cards-grid">
            <div className="card reveal">
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 4l7 4v8l-7 4-7-4V8l7-4z" stroke="currentColor" strokeWidth="1.8" />
                </svg>
              </div>
              <h4>Consistent decision support</h4>
              <p>
                Messaging and visuals work together so users understand the benefit quickly and keep progressing through the
                page.
              </p>
            </div>

            <div className="card reveal">
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M6 12h12M12 6v12" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
                </svg>
              </div>
              <h4>Stronger hierarchy</h4>
              <p>
                Reduced clutter and sharper section framing help visitors recognize the most important content at a glance.
              </p>
            </div>

            <div className="card reveal">
              <div className="card-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M5 19l5.5-5.5 3 3L19 11" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                  <path d="M15 11h4v4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </div>
              <h4>Higher intent action flow</h4>
              <p>
                A simple path to expert consultation encourages engagement without pulling attention away from the message.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="sec-head reveal">
            <div className="eyebrow">Testimonials</div>
            <h2>What business users appreciate most</h2>
            <p>
              A lightweight slider keeps this section smooth and readable while still adding social proof in a controlled
              way.
            </p>
          </div>

          <div className="testimonial-wrap reveal">
            <div className="testimonial-card">
              <div className="testimonial-quote">“{testimonials[testimonialIndex].quote}”</div>
              <div className="testimonial-meta">
                <div>
                  <div className="testimonial-author">{testimonials[testimonialIndex].name}</div>
                  <div className="testimonial-role">{testimonials[testimonialIndex].role}</div>
                </div>
                <div className="hero-chip">Trusted experience</div>
              </div>
            </div>

            <div className="testimonial-dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  type="button"
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`testimonial-dot ${testimonialIndex === idx ? 'active' : ''}`}
                  onClick={() => setTestimonialIndex(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="cta-box reveal">
            <div>
              <h3>Start your software discovery with more confidence</h3>
              <p>
                Whether you are comparing options, validating fit, or looking for expert guidance, a cleaner decision
                journey can improve how fast your team moves.
              </p>
            </div>
            <div className="cta-actions">
              <a href="#contact" className="btn-primary">
                Request Callback
              </a>
              <a href="https://www.techjockey.com/" className="btn-secondary">
                Explore Techjockey
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <a href="https://www.techjockey.com/" className="nav-logo" style={{ color: '#ffffff', marginBottom: 14 }}>
                <img
                  src="https://static.techjockey.com/web/assets/images/techjockey-logo.svg"
                  alt="Techjockey"
                  style={{ height: 28, width: 'auto', filter: 'brightness(0) invert(1)' }}
                />
              </a>
              <p>
                Techjockey helps businesses discover, compare, and choose the right software with a more guided and
                trustworthy evaluation experience.
              </p>
            </div>

            <div>
              <h4>Platform</h4>
              <div className="footer-links">
                <a href="#features">Features</a>
                <a href="#highlights">Highlights</a>
                <a href="#stories">Stories</a>
              </div>
            </div>

            <div>
              <h4>Company</h4>
              <div className="footer-links">
                <a href="https://www.techjockey.com/about-us" target="_blank" rel="noreferrer">
                  About Us
                </a>
                <a href="https://www.techjockey.com/contact-us" target="_blank" rel="noreferrer">
                  Contact
                </a>
                <a href="https://www.techjockey.com/privacy-policy" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>
              </div>
            </div>

            <div>
              <h4>Support</h4>
              <div className="footer-links">
                <a href="tel:+919999999999">+91 99999 99999</a>
                <a href="mailto:support@techjockey.com">support@techjockey.com</a>
                <a href="https://www.techjockey.com/" target="_blank" rel="noreferrer">
                  Visit Website
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>© 2026 Techjockey. All rights reserved.</p>
            <div className="socials">
              <a href="https://www.facebook.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-.1 0-2.2-.1-2.2 0-3.8 1.3-3.8 3.8V11H8v3h3v8h2.5z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/techjockeyinfotech/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 12.68c0-3.46-1.85-5.06-4.32-5.06-1.99 0-2.88 1.09-3.38 1.86V8.5H9.37c.04.65 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.13-.92.27-.67.88-1.37 1.9-1.37 1.34 0 1.88 1.03 1.88 2.55V20H20V13.4c0-.35.44-.72.44-.72z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
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