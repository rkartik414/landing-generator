import React, { useEffect } from 'react';

const LandingPage = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        }),
      { threshold: 0.12 }
    );

    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  const cta_text = "Generate with AI";

  const css = `
    :root {
      --accent: #ff6b00;
      --primary: #ff6b00;
      --accent-rgb: 255,107,0;
      --bodyBg: #ffffff;
      --section-alt: #f8fafc;
      --section-deeper: #111827;
      --card-bg: rgba(255,255,255,0.7);
      --card-border: rgba(15,23,42,0.08);
      --text-primary: #0f172a;
      --text-muted: #475569;
      --white: #ffffff;
      --dark: #0f172a;
      --success: #15803d;
    }

    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body {
      font-family: 'Inter', ui-sans-serif, system-ui, sans-serif;
      background: var(--bodyBg);
      color: var(--text-primary);
      overflow-x: hidden;
    }
    a { text-decoration: none; color: inherit; }
    img, video { max-width: 100%; display: block; }
    button, input, textarea, select { font-family: inherit; }
    h1, h2, h3 { word-break: normal; overflow-wrap: normal; hyphens: none; }

    .reveal {
      opacity: 0;
      transform: translateY(28px);
      transition: opacity .7s ease, transform .7s ease;
    }
    .reveal.visible {
      opacity: 1;
      transform: none;
    }

    .container {
      width: 100%;
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
    }

    .section {
      position: relative;
      padding: 88px 0;
    }

    .eyebrow {
      display: inline-flex;
      align-items: center;
      gap: 8px;
      padding: 8px 14px;
      border-radius: 999px;
      background: rgba(var(--accent-rgb), 0.08);
      color: var(--accent);
      border: 1px solid rgba(var(--accent-rgb), 0.18);
      font-size: 12px;
      font-weight: 700;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .top-strip {
      position: sticky;
      top: 0;
      z-index: 120;
      background: linear-gradient(90deg, #111827, #0f172a);
      color: #fff;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }

    .top-strip-inner {
      min-height: 44px;
      display: flex;
      align-items: center;
      justify-content: center;
      gap: 10px;
      text-align: center;
      font-size: 13px;
      font-weight: 600;
      padding: 8px 16px;
    }

    .top-strip-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 4px 10px;
      border-radius: 999px;
      background: rgba(var(--accent-rgb), 0.18);
      color: #fff;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
    }

    .navbar {
      position: sticky;
      top: 44px;
      z-index: 110;
      background: rgba(255,255,255,0.92);
      backdrop-filter: blur(14px);
      border-bottom: 1px solid rgba(15,23,42,0.08);
    }

    .navbar-inner {
      min-height: 72px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 20px;
    }

    .brand {
      display: flex;
      align-items: center;
      gap: 12px;
      min-width: 0;
    }

    .brand-mark {
      width: 42px;
      height: 42px;
      border-radius: 12px;
      background: linear-gradient(135deg, var(--accent), #ff8b3d);
      color: #fff;
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-weight: 800;
      font-size: 16px;
      box-shadow: 0 12px 24px rgba(var(--accent-rgb), 0.22);
      flex-shrink: 0;
    }

    .brand-text {
      display: flex;
      flex-direction: column;
      gap: 2px;
    }

    .brand-title {
      font-size: 16px;
      font-weight: 800;
      color: var(--dark);
      line-height: 1.1;
    }

    .brand-subtitle {
      font-size: 12px;
      color: #64748b;
      line-height: 1.2;
    }

    .nav-links {
      display: flex;
      align-items: center;
      gap: 22px;
      color: #334155;
      font-size: 14px;
      font-weight: 600;
    }

    .nav-links a:hover {
      color: var(--accent);
    }

    .nav-cta {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      border: none;
      border-radius: 12px;
      background: var(--accent);
      color: #fff;
      padding: 12px 18px;
      font-size: 14px;
      font-weight: 700;
      cursor: pointer;
      box-shadow: 0 12px 24px rgba(var(--accent-rgb), 0.2);
      transition: transform .2s ease, opacity .2s ease;
    }

    .nav-cta:hover {
      transform: translateY(-1px);
      opacity: 0.95;
    }

    .hero {
      position: relative;
      min-height: calc(100vh - 116px);
      display: flex;
      align-items: center;
      overflow: hidden;
      background:
        radial-gradient(circle at top left, rgba(var(--accent-rgb), 0.16), transparent 32%),
        radial-gradient(circle at bottom right, rgba(59,130,246,0.12), transparent 28%),
        linear-gradient(180deg, #fff 0%, #fff7f2 45%, #ffffff 100%);
      padding: 90px 0 80px;
    }

    .hero-grid {
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(380px, 0.9fr);
      gap: 42px;
      align-items: center;
    }

    .hero-copy {
      position: relative;
      z-index: 2;
    }

    .hero-title {
      font-size: clamp(38px, 6vw, 76px);
      line-height: 1.02;
      letter-spacing: -0.05em;
      font-weight: 800;
      color: #0f172a;
      margin: 20px 0 18px;
      max-width: 860px;
    }

    .hero-accent {
      color: var(--accent);
    }

    .hero-desc {
      max-width: 620px;
      font-size: 18px;
      line-height: 1.75;
      color: #475569;
      margin-bottom: 28px;
    }

    .hero-chips {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
      margin-bottom: 28px;
    }

    .hero-chip {
      padding: 9px 14px;
      border-radius: 999px;
      background: #fff;
      border: 1px solid rgba(15,23,42,0.08);
      color: #334155;
      font-size: 13px;
      font-weight: 600;
      box-shadow: 0 8px 18px rgba(15,23,42,0.04);
    }

    .hero-actions {
      display: flex;
      flex-wrap: wrap;
      gap: 14px;
      margin-bottom: 24px;
    }

    .btn-primary,
    .btn-secondary {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      min-height: 52px;
      padding: 0 22px;
      border-radius: 14px;
      font-size: 15px;
      font-weight: 700;
      cursor: pointer;
      transition: transform .2s ease, box-shadow .2s ease, background .2s ease;
    }

    .btn-primary {
      background: var(--accent);
      color: #fff;
      border: none;
      box-shadow: 0 14px 30px rgba(var(--accent-rgb), 0.24);
    }

    .btn-secondary {
      background: #fff;
      color: #0f172a;
      border: 1px solid rgba(15,23,42,0.1);
    }

    .btn-primary:hover,
    .btn-secondary:hover {
      transform: translateY(-2px);
    }

    .hero-proof {
      display: flex;
      align-items: center;
      gap: 12px;
      color: #475569;
      font-size: 14px;
      font-weight: 600;
      flex-wrap: wrap;
    }

    .hero-stars {
      color: #f59e0b;
      letter-spacing: 1px;
      font-size: 14px;
    }

    .hero-card {
      position: relative;
      z-index: 2;
      background: rgba(255,255,255,0.86);
      border: 1px solid rgba(15,23,42,0.08);
      border-radius: 24px;
      box-shadow: 0 30px 70px rgba(15,23,42,0.12);
      padding: 28px;
      backdrop-filter: blur(14px);
    }

    .hero-card h3 {
      font-size: 24px;
      line-height: 1.2;
      margin-bottom: 10px;
      color: #0f172a;
    }

    .hero-card p {
      color: #64748b;
      font-size: 15px;
      line-height: 1.7;
      margin-bottom: 20px;
    }

    .prompt-box {
      border-radius: 18px;
      border: 1px solid rgba(15,23,42,0.08);
      background: #fff;
      padding: 18px;
      margin-bottom: 18px;
    }

    .prompt-label {
      font-size: 12px;
      font-weight: 700;
      color: #94a3b8;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 8px;
    }

    .prompt-text {
      font-size: 15px;
      line-height: 1.65;
      color: #0f172a;
    }

    .hero-list {
      list-style: none;
      display: grid;
      gap: 12px;
      margin: 0 0 22px;
    }

    .hero-list li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      color: #334155;
      font-size: 14px;
      line-height: 1.6;
    }

    .check {
      width: 18px;
      height: 18px;
      border-radius: 999px;
      background: rgba(var(--accent-rgb), 0.12);
      color: var(--accent);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 12px;
      font-weight: 800;
      flex-shrink: 0;
      margin-top: 2px;
    }

    .stats-strip {
      background: #fff;
      border-top: 1px solid rgba(15,23,42,0.06);
      border-bottom: 1px solid rgba(15,23,42,0.06);
    }

    .stats-grid {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      gap: 0;
    }

    .stat-item {
      padding: 28px 20px;
      text-align: center;
      border-right: 1px solid rgba(15,23,42,0.06);
    }

    .stat-item:last-child {
      border-right: none;
    }

    .stat-value {
      font-size: 40px;
      line-height: 1;
      letter-spacing: -0.04em;
      font-weight: 800;
      color: var(--accent);
      margin-bottom: 8px;
    }

    .stat-label {
      font-size: 15px;
      color: #0f172a;
      font-weight: 700;
      margin-bottom: 6px;
    }

    .stat-note {
      font-size: 13px;
      color: #64748b;
      line-height: 1.5;
    }

    .features {
      background: var(--section-alt);
    }

    .section-head {
      text-align: center;
      max-width: 760px;
      margin: 0 auto 56px;
    }

    .section-head h2 {
      font-size: clamp(30px, 4vw, 48px);
      line-height: 1.08;
      letter-spacing: -0.04em;
      color: #0f172a;
      margin: 16px 0 14px;
      font-weight: 800;
    }

    .section-head p {
      font-size: 17px;
      line-height: 1.75;
      color: #475569;
    }

    .feature-rows {
      display: flex;
      flex-direction: column;
      gap: 26px;
    }

    .feature-row {
      display: grid;
      grid-template-columns: minmax(0, 1fr) minmax(0, 1fr);
      gap: 28px;
      align-items: center;
      background: #fff;
      border: 1px solid rgba(15,23,42,0.06);
      border-radius: 26px;
      padding: 28px;
      box-shadow: 0 18px 40px rgba(15,23,42,0.05);
    }

    .feature-row:nth-child(even) .feature-media {
      order: -1;
    }

    .feature-copy h3 {
      font-size: 32px;
      line-height: 1.12;
      letter-spacing: -0.03em;
      color: #0f172a;
      margin-bottom: 14px;
      font-weight: 800;
    }

    .feature-copy p {
      font-size: 16px;
      line-height: 1.8;
      color: #475569;
      margin-bottom: 18px;
    }

    .feature-tags {
      display: flex;
      flex-wrap: wrap;
      gap: 10px;
    }

    .feature-tag {
      padding: 8px 12px;
      border-radius: 999px;
      background: rgba(var(--accent-rgb), 0.08);
      color: #9a4b12;
      border: 1px solid rgba(var(--accent-rgb), 0.14);
      font-size: 13px;
      font-weight: 700;
    }

    .feature-media {
      border-radius: 22px;
      border: 1px solid rgba(15,23,42,0.08);
      background:
        linear-gradient(180deg, #fff, #fff7f2);
      padding: 24px;
      min-height: 280px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .media-frame {
      width: 100%;
      border-radius: 18px;
      background: #0f172a;
      color: #fff;
      padding: 22px;
      box-shadow: 0 20px 40px rgba(15,23,42,0.18);
    }

    .media-bar {
      display: flex;
      gap: 8px;
      margin-bottom: 18px;
    }

    .media-dot {
      width: 10px;
      height: 10px;
      border-radius: 999px;
      background: rgba(255,255,255,0.35);
    }

    .media-card {
      padding: 16px;
      border-radius: 14px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
      margin-bottom: 12px;
    }

    .media-card:last-child {
      margin-bottom: 0;
    }

    .media-title {
      font-size: 14px;
      font-weight: 700;
      margin-bottom: 8px;
    }

    .media-copy {
      font-size: 13px;
      color: rgba(255,255,255,0.7);
      line-height: 1.6;
    }

    .benefits-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .benefit-card {
      border-radius: 22px;
      background: #fff;
      border: 1px solid rgba(15,23,42,0.07);
      padding: 26px;
      box-shadow: 0 16px 32px rgba(15,23,42,0.05);
      transition: transform .2s ease, box-shadow .2s ease;
    }

    .benefit-card:hover {
      transform: translateY(-4px);
      box-shadow: 0 24px 44px rgba(15,23,42,0.08);
    }

    .benefit-icon {
      width: 48px;
      height: 48px;
      border-radius: 14px;
      background: rgba(var(--accent-rgb), 0.1);
      color: var(--accent);
      display: inline-flex;
      align-items: center;
      justify-content: center;
      font-size: 22px;
      margin-bottom: 18px;
    }

    .benefit-card h4 {
      font-size: 18px;
      color: #0f172a;
      margin-bottom: 10px;
      font-weight: 800;
      letter-spacing: -0.02em;
    }

    .benefit-card p {
      font-size: 14px;
      line-height: 1.75;
      color: #475569;
    }

    .reviews {
      background: #fff;
    }

    .reviews-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .review-card {
      border-radius: 22px;
      background: #fff;
      border: 1px solid rgba(15,23,42,0.08);
      padding: 24px;
      box-shadow: 0 14px 28px rgba(15,23,42,0.04);
    }

    .review-stars {
      color: #f59e0b;
      font-size: 15px;
      margin-bottom: 12px;
      letter-spacing: 1px;
    }

    .review-text {
      color: #334155;
      font-size: 15px;
      line-height: 1.8;
      margin-bottom: 18px;
    }

    .review-user {
      color: #0f172a;
      font-size: 14px;
      font-weight: 800;
    }

    .review-role {
      color: #64748b;
      font-size: 13px;
      margin-top: 4px;
    }

    .pricing {
      background: #111827;
      color: #fff;
    }

    .pricing .section-head h2,
    .pricing .section-head p {
      color: #fff;
    }

    .pricing .section-head p {
      color: rgba(255,255,255,0.72);
    }

    .pricing-grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 20px;
    }

    .price-card {
      border-radius: 24px;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      padding: 30px;
      box-shadow: 0 18px 40px rgba(0,0,0,0.18);
    }

    .price-card.featured {
      background: rgba(var(--accent-rgb), 0.1);
      border-color: rgba(var(--accent-rgb), 0.4);
      box-shadow: 0 24px 50px rgba(var(--accent-rgb), 0.12);
    }

    .price-badge {
      display: inline-flex;
      align-items: center;
      justify-content: center;
      padding: 6px 12px;
      border-radius: 999px;
      background: var(--success);
      color: #fff;
      font-size: 11px;
      font-weight: 800;
      letter-spacing: 0.08em;
      text-transform: uppercase;
      margin-bottom: 16px;
    }

    .price-name {
      font-size: 22px;
      font-weight: 800;
      margin-bottom: 12px;
      letter-spacing: -0.02em;
    }

    .price-amount {
      font-size: 44px;
      line-height: 1;
      font-weight: 800;
      letter-spacing: -0.04em;
      color: #fff;
      margin-bottom: 8px;
    }

    .price-period {
      color: rgba(255,255,255,0.65);
      font-size: 14px;
      margin-bottom: 18px;
    }

    .price-desc {
      color: rgba(255,255,255,0.72);
      font-size: 15px;
      line-height: 1.75;
      margin-bottom: 22px;
    }

    .price-list {
      list-style: none;
      display: grid;
      gap: 12px;
      margin-bottom: 24px;
    }

    .price-list li {
      display: flex;
      align-items: flex-start;
      gap: 10px;
      color: rgba(255,255,255,0.88);
      font-size: 14px;
      line-height: 1.65;
    }

    .price-btn {
      width: 100%;
      min-height: 50px;
      border: none;
      border-radius: 14px;
      background: var(--accent);
      color: #fff;
      font-size: 15px;
      font-weight: 800;
      cursor: pointer;
      transition: transform .2s ease, opacity .2s ease;
    }

    .price-btn:hover {
      transform: translateY(-1px);
      opacity: 0.96;
    }

    .cta-strip {
      position: relative;
      overflow: hidden;
      background: linear-gradient(135deg, #ff6b00, #ff8b3d);
      color: #fff;
      padding: 72px 0;
    }

    .cta-strip::before {
      content: '';
      position: absolute;
      inset: 0;
      background:
        radial-gradient(circle at 20% 20%, rgba(255,255,255,0.18), transparent 24%),
        radial-gradient(circle at 80% 70%, rgba(255,255,255,0.14), transparent 28%);
      pointer-events: none;
    }

    .cta-strip-inner {
      position: relative;
      z-index: 1;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 24px;
    }

    .cta-strip-copy h2 {
      font-size: clamp(30px, 4vw, 46px);
      line-height: 1.08;
      letter-spacing: -0.04em;
      font-weight: 800;
      margin-bottom: 10px;
    }

    .cta-strip-copy p {
      font-size: 17px;
      line-height: 1.7;
      color: rgba(255,255,255,0.88);
      max-width: 680px;
    }

    .cta-strip-btn {
      flex-shrink: 0;
      min-height: 54px;
      padding: 0 24px;
      border-radius: 14px;
      border: none;
      background: #fff;
      color: var(--accent);
      font-size: 15px;
      font-weight: 800;
      cursor: pointer;
      box-shadow: 0 16px 34px rgba(0,0,0,0.14);
      transition: transform .2s ease;
    }

    .cta-strip-btn:hover {
      transform: translateY(-2px);
    }

    .footer {
      background: #0f172a;
      color: #fff;
      padding: 56px 0 28px;
    }

    .footer-top {
      display: grid;
      grid-template-columns: 1.2fr 1fr 1fr 1fr;
      gap: 28px;
      padding-bottom: 32px;
      border-bottom: 1px solid rgba(255,255,255,0.08);
    }

    .footer-brand p {
      color: rgba(255,255,255,0.7);
      font-size: 14px;
      line-height: 1.75;
      margin-top: 14px;
      max-width: 360px;
    }

    .footer-col h4 {
      font-size: 14px;
      font-weight: 800;
      margin-bottom: 14px;
      color: #fff;
    }

    .footer-col a,
    .footer-col span {
      display: block;
      font-size: 14px;
      color: rgba(255,255,255,0.7);
      margin-bottom: 10px;
      line-height: 1.6;
    }

    .footer-bottom {
      padding-top: 20px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 16px;
      flex-wrap: wrap;
      color: rgba(255,255,255,0.6);
      font-size: 13px;
    }

    @media (max-width: 1080px) {
      .hero-grid,
      .feature-row,
      .cta-strip-inner,
      .footer-top {
        grid-template-columns: 1fr;
        display: grid;
      }

      .feature-row:nth-child(even) .feature-media {
        order: 0;
      }

      .benefits-grid,
      .reviews-grid,
      .pricing-grid {
        grid-template-columns: 1fr;
      }

      .stats-grid {
        grid-template-columns: repeat(2, 1fr);
      }

      .stat-item:nth-child(2) {
        border-right: none;
      }

      .cta-strip-inner {
        gap: 18px;
      }
    }

    @media (max-width: 820px) {
      .navbar {
        top: 44px;
      }

      .nav-links {
        display: none;
      }

      .hero {
        padding: 72px 0 60px;
        min-height: auto;
      }

      .hero-grid {
        grid-template-columns: 1fr;
        gap: 26px;
      }

      .section {
        padding: 72px 0;
      }

      .stats-grid {
        grid-template-columns: 1fr;
      }

      .stat-item {
        border-right: none;
        border-bottom: 1px solid rgba(15,23,42,0.06);
      }

      .stat-item:last-child {
        border-bottom: none;
      }

      .top-strip-inner {
        font-size: 12px;
      }

      .cta-strip {
        padding: 56px 0;
      }

      .cta-strip-btn {
        width: 100%;
      }
    }

    @media (max-width: 560px) {
      .container {
        padding: 0 18px;
      }

      .navbar-inner {
        min-height: 66px;
      }

      .brand-mark {
        width: 38px;
        height: 38px;
      }

      .hero-card,
      .feature-row,
      .benefit-card,
      .review-card,
      .price-card {
        padding: 20px;
      }

      .hero-title {
        font-size: clamp(34px, 10vw, 52px);
      }

      .feature-copy h3 {
        font-size: 28px;
      }

      .section-head h2,
      .cta-strip-copy h2 {
        font-size: clamp(28px, 8vw, 38px);
      }

      .hero-actions {
        flex-direction: column;
      }

      .btn-primary,
      .btn-secondary,
      .nav-cta {
        width: 100%;
      }
    }
  `;

  return (
    <div>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="top-strip">
        <div className="container top-strip-inner">
          <span className="top-strip-badge">AI Launch</span>
          <span>Build product-ready content, campaigns, and copy faster with one simple workflow.</span>
        </div>
      </div>

      <nav className="navbar">
        <div className="container navbar-inner">
          <div className="brand">
            <div className="brand-mark">AI</div>
            <div className="brand-text">
              <span className="brand-title">Techjockey AI Suite</span>
              <span className="brand-subtitle">Smarter content creation for modern teams</span>
            </div>
          </div>

          <div className="nav-links">
            <a href="#features">Features</a>
            <a href="#benefits">Benefits</a>
            <a href="#reviews">Reviews</a>
            <a href="#pricing">Pricing</a>
          </div>

          <button className="nav-cta">{cta_text}</button>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy reveal visible">
            <span className="eyebrow">AI Content Platform</span>
            <h1 className="hero-title">
              Create better marketing content in minutes with <span className="hero-accent">AI-powered workflows</span>
            </h1>
            <p className="hero-desc">
              Generate campaign ideas, product descriptions, ad copy, social posts, and landing page content with a clean,
              simple interface built for speed and clarity.
            </p>

            <div className="hero-chips">
              <span className="hero-chip">Ad copy generation</span>
              <span className="hero-chip">Product content</span>
              <span className="hero-chip">SEO-friendly outputs</span>
              <span className="hero-chip">Team-ready drafts</span>
            </div>

            <div className="hero-actions">
              <button className="btn-primary">{cta_text}</button>
              <button className="btn-secondary">Book a Demo</button>
            </div>

            <div className="hero-proof">
              <span className="hero-stars">★★★★★</span>
              <span>Trusted by marketing, growth, and content teams</span>
            </div>
          </div>

          <div className="hero-card reveal visible">
            <h3>Turn a simple prompt into polished content</h3>
            <p>
              Start with a brief idea and get structured, high-quality output that is easier to review, refine, and publish.
            </p>

            <div className="prompt-box">
              <div className="prompt-label">Sample prompt</div>
              <div className="prompt-text">
                “Write a product launch email and three ad variations for a new AI content tool focused on SMB growth teams.”
              </div>
            </div>

            <ul className="hero-list">
              <li><span className="check">✓</span><span>Generate long-form and short-form marketing content instantly</span></li>
              <li><span className="check">✓</span><span>Maintain consistency across campaigns, channels, and teams</span></li>
              <li><span className="check">✓</span><span>Reduce manual effort and speed up approval-ready drafts</span></li>
            </ul>

            <button className="btn-primary" style={{ width: '100%' }}>{cta_text}</button>
          </div>
        </div>
      </section>

      <section className="stats-strip">
        <div className="container stats-grid">
          <div className="stat-item reveal">
            <div className="stat-value">10x</div>
            <div className="stat-label">Faster Drafting</div>
            <div className="stat-note">Move from blank page to first draft in minutes.</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-value">85%</div>
            <div className="stat-label">Less Rework</div>
            <div className="stat-note">Use cleaner outputs with better structure and intent.</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-value">24/7</div>
            <div className="stat-label">Always Available</div>
            <div className="stat-note">Create content whenever your team needs momentum.</div>
          </div>
          <div className="stat-item reveal">
            <div className="stat-value">100+</div>
            <div className="stat-label">Use Cases</div>
            <div className="stat-note">From product descriptions to full-funnel campaign assets.</div>
          </div>
        </div>
      </section>

      <section className="section features" id="features">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Core Features</span>
            <h2>Everything your team needs to create clear, effective content</h2>
            <p>
              Designed for practical marketing execution with a clean structure, useful outputs, and a workflow that stays easy to use.
            </p>
          </div>

          <div className="feature-rows">
            <div className="feature-row reveal">
              <div className="feature-copy">
                <h3>Generate campaign-ready content without the clutter</h3>
                <p>
                  Create email sequences, ad variations, landing page copy, product messaging, and social captions from a single input.
                  Keep the process simple while improving speed and consistency across your content pipeline.
                </p>
                <div className="feature-tags">
                  <span className="feature-tag">Email copy</span>
                  <span className="feature-tag">Ads</span>
                  <span className="feature-tag">Social media</span>
                  <span className="feature-tag">Landing pages</span>
                </div>
              </div>

              <div className="feature-media">
                <div className="media-frame">
                  <div className="media-bar">
                    <span className="media-dot"></span>
                    <span className="media-dot"></span>
                    <span className="media-dot"></span>
                  </div>
                  <div className="media-card">
                    <div className="media-title">Input brief</div>
                    <div className="media-copy">Target audience, product goal, tone, and campaign objective.</div>
                  </div>
                  <div className="media-card">
                    <div className="media-title">Generated output</div>
                    <div className="media-copy">Headline, supporting copy, CTA options, and variant suggestions.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-row reveal">
              <div className="feature-copy">
                <h3>Stay consistent across every channel and content type</h3>
                <p>
                  Produce aligned messaging for web, ads, and CRM flows so your brand voice remains recognizable. Teams can iterate
                  faster without losing clarity or rewriting the same points repeatedly.
                </p>
                <div className="feature-tags">
                  <span className="feature-tag">Brand voice</span>
                  <span className="feature-tag">Multi-channel</span>
                  <span className="feature-tag">Structured outputs</span>
                </div>
              </div>

              <div className="feature-media">
                <div className="media-frame">
                  <div className="media-bar">
                    <span className="media-dot"></span>
                    <span className="media-dot"></span>
                    <span className="media-dot"></span>
                  </div>
                  <div className="media-card">
                    <div className="media-title">One message, many formats</div>
                    <div className="media-copy">Transform a product proposition into a headline, ad set, and email body.</div>
                  </div>
                  <div className="media-card">
                    <div className="media-title">Clean workflow</div>
                    <div className="media-copy">Simplify ideation, review, editing, and publishing for every contributor.</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="feature-row reveal">
              <div className="feature-copy">
                <h3>Speed up review cycles with better first drafts</h3>
                <p>
                  Start with stronger content so stakeholders spend less time correcting structure and more time refining strategic details.
                  Better drafts mean fewer revisions and faster go-live timelines.
                </p>
                <div className="feature-tags">
                  <span className="feature-tag">Fewer revisions</span>
                  <span className="feature-tag">Approval-ready</span>
                  <span className="feature-tag">Team collaboration</span>
                </div>
              </div>

              <div className="feature-media">
                <div className="media-frame">
                  <div className="media-bar">
                    <span className="media-dot"></span>
                    <span className="media-dot"></span>
                    <span className="media-dot"></span>
                  </div>
                  <div className="media-card">
                    <div className="media-title">Draft quality</div>
                    <div className="media-copy">Clear sections, sharper messaging, and stronger CTA recommendations.</div>
                  </div>
                  <div className="media-card">
                    <div className="media-title">Publishing confidence</div>
                    <div className="media-copy">Move faster from planning to launch with cleaner campaign assets.</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="benefits">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Why Teams Choose It</span>
            <h2>Built to make content work simpler, faster, and more reliable</h2>
            <p>
              Focus on outcomes, not complexity. The platform helps your team create high-volume content while keeping quality and clarity in place.
            </p>
          </div>

          <div className="benefits-grid">
            <div className="benefit-card reveal">
              <div className="benefit-icon">⚡</div>
              <h4>Faster execution</h4>
              <p>Cut time spent on ideation and drafting so your team can launch more campaigns without overloading internal resources.</p>
            </div>
            <div className="benefit-card reveal">
              <div className="benefit-icon">🎯</div>
              <h4>More relevant outputs</h4>
              <p>Generate content aligned to audience intent, business goals, and channel-specific needs with less manual restructuring.</p>
            </div>
            <div className="benefit-card reveal">
              <div className="benefit-icon">🧩</div>
              <h4>Cleaner collaboration</h4>
              <p>Use a streamlined workflow that helps writers, marketers, and reviewers work from the same clear starting point.</p>
            </div>
            <div className="benefit-card reveal">
              <div className="benefit-icon">📈</div>
              <h4>Improved productivity</h4>
              <p>Free up team bandwidth for strategy, optimization, and experimentation instead of repetitive first-draft writing tasks.</p>
            </div>
            <div className="benefit-card reveal">
              <div className="benefit-icon">🛠️</div>
              <h4>Flexible use cases</h4>
              <p>Support product launches, demand generation, retention campaigns, and always-on marketing from one system.</p>
            </div>
            <div className="benefit-card reveal">
              <div className="benefit-icon">✅</div>
              <h4>Ready for scale</h4>
              <p>Maintain consistency as volume grows, whether you are running weekly campaigns or managing large content operations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section reviews" id="reviews">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Customer Feedback</span>
            <h2>Teams appreciate the clarity, speed, and consistency</h2>
            <p>
              Real value comes from reducing friction. That is why users highlight better first drafts, smoother reviews, and faster launches.
            </p>
          </div>

          <div className="reviews-grid">
            <div className="review-card reveal">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                The clean workflow helped us go from scattered briefs to publishable campaign drafts much faster. It removed unnecessary back-and-forth.
              </p>
              <div className="review-user">Ritika Sharma</div>
              <div className="review-role">Growth Marketing Manager</div>
            </div>

            <div className="review-card reveal">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                We use it for landing page sections, ad copy, and product messaging. The output structure is simple and easy for the team to refine.
              </p>
              <div className="review-user">Aman Verma</div>
              <div className="review-role">Performance Marketing Lead</div>
            </div>

            <div className="review-card reveal">
              <div className="review-stars">★★★★★</div>
              <p className="review-text">
                It saves time where it matters most—creating better starting drafts. That alone has improved turnaround across multiple campaigns.
              </p>
              <div className="review-user">Neha Kapoor</div>
              <div className="review-role">Content Strategy Head</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">Simple Pricing</span>
            <h2>Choose a plan that fits your content velocity</h2>
            <p>
              Straightforward plans for growing teams that want faster output, cleaner workflows, and better consistency across channels.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="price-card reveal">
              <div className="price-name">Starter</div>
              <div className="price-amount">₹999</div>
              <div className="price-period">per month</div>
              <div className="price-desc">Best for individual marketers and small teams getting started with AI-assisted content workflows.</div>
              <ul className="price-list">
                <li><span className="check">✓</span><span>Core content generation tools</span></li>
                <li><span className="check">✓</span><span>Basic campaign copy support</span></li>
                <li><span className="check">✓</span><span>Standard templates</span></li>
              </ul>
              <button className="price-btn">{cta_text}</button>
            </div>

            <div className="price-card featured reveal">
              <div className="price-badge">Most Popular</div>
              <div className="price-name">Growth</div>
              <div className="price-amount">₹2,499</div>
              <div className="price-period">per month</div>
              <div className="price-desc">Ideal for growth teams managing multiple campaigns, channels, and ongoing performance content needs.</div>
              <ul className="price-list">
                <li><span className="check">✓</span><span>Everything in Starter</span></li>
                <li><span className="check">✓</span><span>Higher content volume</span></li>
                <li><span className="check">✓</span><span>Advanced prompt workflows</span></li>
                <li><span className="check">✓</span><span>Priority support</span></li>
              </ul>
              <button className="price-btn">{cta_text}</button>
            </div>

            <div className="price-card reveal">
              <div className="price-name">Scale</div>
              <div className="price-amount">Custom</div>
              <div className="price-period">for larger teams</div>
              <div className="price-desc">Built for organizations that need broader collaboration, tailored usage, and scalable content operations.</div>
              <ul className="price-list">
                <li><span className="check">✓</span><span>Custom usage plans</span></li>
                <li><span className="check">✓</span><span>Team onboarding support</span></li>
                <li><span className="check">✓</span><span>Workflow consultation</span></li>
              </ul>
              <button className="price-btn">Talk to Sales</button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-strip-inner">
          <div className="cta-strip-copy reveal visible">
            <h2>Start creating smarter content with less effort</h2>
            <p>
              Replace slow, messy drafting with a cleaner workflow that helps your team move from idea to launch-ready content much faster.
            </p>
          </div>
          <button className="cta-strip-btn">{cta_text}</button>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <div className="brand">
                <div className="brand-mark">AI</div>
                <div className="brand-text">
                  <span className="brand-title" style={{ color: '#fff' }}>Techjockey AI Suite</span>
                  <span className="brand-subtitle" style={{ color: 'rgba(255,255,255,0.6)' }}>Smarter content creation for modern teams</span>
                </div>
              </div>
              <p>
                Clean, reliable AI-assisted content generation for teams that want better speed, consistency, and campaign execution.
              </p>
            </div>

            <div className="footer-col">
              <h4>Product</h4>
              <a href="#features">Features</a>
              <a href="#benefits">Benefits</a>
              <a href="#pricing">Pricing</a>
            </div>

            <div className="footer-col">
              <h4>Resources</h4>
              <span>Use Cases</span>
              <span>Documentation</span>
              <span>Support</span>
            </div>

            <div className="footer-col">
              <h4>Company</h4>
              <span>About</span>
              <span>Privacy</span>
              <span>Terms</span>
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Techjockey AI Suite. All rights reserved.</span>
            <span>Built for fast-moving marketing and growth teams.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
