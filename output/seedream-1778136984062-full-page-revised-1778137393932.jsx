import React, { useEffect, useState } from 'react';

const LandingPage = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % 3);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  const css = `
    :root {
      --accent: #b3713f;
      --primary: #b3713f;
      --accent-rgb: 179,113,63;
      --bodyBg: #ffffff;
      --dark: #111827;
      --muted: #6b7280;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html, body, #root { width: 100%; min-height: 100%; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Inter', ui-sans-serif, sans-serif; background: var(--bodyBg); color: #111827; overflow-x: hidden; }
    a { text-decoration: none; color: inherit; }
    img, video { max-width: 100%; display: block; }
    button, input, textarea, select { font-family: inherit; }
    .page { width: 100%; overflow-x: hidden; background: #fff; }

    @keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
    @keyframes scaleIn { from { opacity:0; transform:scale(0.96); } to { opacity:1; transform:scale(1); } }
    .anim { opacity:0; animation:fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
    .anim-scale { opacity:0; animation:scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards; }
    .d0{animation-delay:0.05s}.d1{animation-delay:0.2s}.d2{animation-delay:0.35s}.d3{animation-delay:0.5s}.d4{animation-delay:0.65s}.d5{animation-delay:0.8s}
    .container{max-width:1200px;margin:0 auto;padding:0 24px}
    .section{padding:88px 0;position:relative}
    .eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:100px;background:rgba(var(--accent-rgb),0.1);border:1px solid rgba(var(--accent-rgb),0.25);color:var(--accent);font-size:12px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase}
    .reveal{opacity:0;transform:translateY(32px);transition:opacity 0.7s ease,transform 0.7s ease}
    .reveal.visible{opacity:1;transform:none}

    .top-strip {
      position: sticky;
      top: 0;
      z-index: 60;
      background: rgba(17,24,39,0.92);
      backdrop-filter: blur(16px);
      border-bottom: 1px solid rgba(255,255,255,0.1);
    }
    .top-strip-inner {
      max-width: 1280px;
      margin: 0 auto;
      padding: 14px 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
    }
    .top-strip-title {
      font-size: 18px;
      font-weight: 800;
      color: var(--accent);
      line-height: 1.2;
      flex: 1;
      min-width: 0;
    }
    .top-strip-logo {
      height: 28px;
      width: auto;
      flex-shrink: 0;
      opacity: 0.95;
    }
    .top-strip-cta {
      background: var(--accent);
      color: #fff;
      font-weight: 700;
      padding: 12px 18px;
      border-radius: 12px;
      transition: transform .2s ease, opacity .2s ease;
      white-space: nowrap;
      flex-shrink: 0;
      font-size: 14px;
    }
    .top-strip-cta:hover { transform: translateY(-1px); opacity: .95; }

    .hvf {
      position: relative;
      min-height: calc(100vh - 64px);
      overflow: hidden;
      background:
        radial-gradient(circle at top right, rgba(179,113,63,0.12), transparent 35%),
        linear-gradient(180deg, #fff 0%, #f8f5f1 100%);
    }
    .hvf-video {
      position: absolute;
      inset: 0;
      z-index: 0;
      background:
        radial-gradient(circle at 20% 20%, rgba(179,113,63,0.12), transparent 24%),
        radial-gradient(circle at 80% 30%, rgba(17,24,39,0.08), transparent 28%),
        linear-gradient(135deg, #fff 0%, #f7f3ee 55%, #efe8df 100%);
    }
    .hvf-overlay {
      position: absolute;
      inset: 0;
      background:
        linear-gradient(to bottom, rgba(255,255,255,0.08) 0%, rgba(255,255,255,0.78) 58%, rgba(255,255,255,1) 100%);
      z-index: 1;
    }
    .hvf-content {
      position: relative;
      z-index: 2;
      display: flex;
      justify-content: center;
      padding: 86px 24px 72px;
    }
    .hvf-inner {
      max-width: 1200px;
      width: 100%;
      display: grid;
      grid-template-columns: minmax(0, 1.1fr) minmax(360px, 0.9fr);
      gap: 44px;
      align-items: center;
    }
    .hvf-copy { display:flex; flex-direction:column; gap:22px; }
    .hvf-h1 {
      font-size: clamp(42px, 6vw, 78px);
      font-weight: 500;
      letter-spacing: -0.05em;
      line-height: 0.98;
      color: #0a0a0f;
      max-width: 860px;
    }
    .hvf-accent {
      font-family: Georgia, serif;
      font-style: italic;
      font-size: 1.06em;
      font-weight: 400;
      letter-spacing: -0.03em;
      color: var(--accent);
    }
    .hvf-desc {
      font-size: 18px;
      line-height: 1.75;
      color: #373a46;
      opacity: 0.92;
      max-width: 640px;
    }
    .hvf-chips { display:flex; flex-wrap:wrap; gap:10px; }
    .hvf-chip {
      display:flex; align-items:center; gap:7px;
      padding:8px 14px; border-radius:100px;
      background:rgba(var(--accent-rgb),0.08);
      border:1px solid rgba(var(--accent-rgb),0.22);
      color:#374151; font-size:13px; font-weight:600;
    }
    .hvf-pill {
      display:flex; align-items:center; max-width:560px;
      background:#fff; border-radius:40px;
      border:1px solid rgba(0,0,0,0.08);
      box-shadow:0 16px 40px rgba(17,24,39,0.08);
      padding:6px 6px 6px 22px; gap:10px;
    }
    .hvf-input {
      flex:1; min-width:0; border:none; outline:none;
      background:transparent; font-size:15px;
      color:#0f0f0f; letter-spacing:-0.01em;
    }
    .hvf-input::placeholder { color:#9ca3af; }
    .hvf-btn {
      border-radius:100px; color:#fff; border:none; flex-shrink:0;
      background:linear-gradient(180deg,#323232,#1d1d1d,#111);
      box-shadow:inset -4px -6px 25px 0 rgba(201,201,201,0.08), inset 4px 4px 10px 0 rgba(29,29,29,0.24);
      padding:13px 22px; font-size:14px; font-weight:600;
      cursor:pointer; white-space:nowrap;
    }
    .hvf-proof {
      display:flex; align-items:center; gap:12px; flex-wrap:wrap;
      padding-left:2px;
    }
    .hvf-avatars { display:flex; }
    .hvf-av {
      width:30px; height:30px; border-radius:50%;
      border:1.5px solid #fff; display:flex;
      align-items:center; justify-content:center;
      font-size:9px; font-weight:700; margin-left:-7px; color:#fff;
    }
    .hvf-av:first-child { margin-left:0; }
    .hvf-stars { display:flex; gap:2px; }
    .hvf-rcount { font-size:13px; font-weight:600; color:#373a46; opacity:0.82; }

    .hero-card {
      position: relative;
      border-radius: 28px;
      overflow: hidden;
      background: linear-gradient(180deg, #111827 0%, #1f2937 100%);
      color: #fff;
      border: 1px solid rgba(255,255,255,0.08);
      box-shadow: 0 22px 70px rgba(15,23,42,0.16);
      min-height: 540px;
    }
    .hero-card-top {
      padding: 22px 22px 0;
      display: flex;
      align-items: center;
      gap: 8px;
    }
    .hero-dot { width: 10px; height: 10px; border-radius: 50%; background: rgba(255,255,255,0.25); }
    .hero-dot:nth-child(1){ background:#ef4444; }
    .hero-dot:nth-child(2){ background:#f59e0b; }
    .hero-dot:nth-child(3){ background:#10b981; }
    .hero-card-body {
      padding: 24px;
      display: grid;
      gap: 16px;
    }
    .hero-panel {
      border-radius: 20px;
      padding: 18px;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.08);
    }
    .hero-panel-label {
      font-size: 12px;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: .08em;
      color: rgba(255,255,255,0.65);
      margin-bottom: 10px;
    }
    .hero-preview {
      border-radius: 18px;
      overflow: hidden;
      background: linear-gradient(135deg, rgba(179,113,63,0.36), rgba(255,255,255,0.08));
      min-height: 210px;
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 8px;
      padding: 8px;
    }
    .hero-preview-box {
      border-radius: 14px;
      background:
        linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.06)),
        radial-gradient(circle at top, rgba(179,113,63,0.4), transparent 50%);
      border: 1px solid rgba(255,255,255,0.09);
      min-height: 184px;
    }
    .hero-stats {
      display: grid;
      grid-template-columns: repeat(3,1fr);
      gap: 12px;
    }
    .hero-stat {
      border-radius: 16px;
      padding: 16px;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
    }
    .hero-stat strong {
      display: block;
      font-size: 24px;
      line-height: 1;
      letter-spacing: -0.04em;
      margin-bottom: 6px;
      color: #fff;
    }
    .hero-stat span {
      font-size: 13px;
      color: rgba(255,255,255,0.68);
      line-height: 1.5;
    }

    .tms {
      padding: 26px 0 42px;
      background: #fff;
    }
    .tms-grid {
      display:grid; grid-template-columns:repeat(3,1fr);
      gap:2px; max-width:1200px; margin:0 auto; padding:0 24px;
    }
    .tms-cell {
      text-align:center; padding:28px 24px; position:relative;
      background: #fff;
    }
    .tms-cell:not(:last-child)::after {
      content:''; position:absolute; right:0; top:20%;
      height:60%; width:1px; background:rgba(0,0,0,0.08);
    }
    .tms-val {
      font-size:48px; font-weight:800; letter-spacing:-0.04em;
      color:var(--accent); line-height:1;
    }
    .tms-label { font-size:15px; font-weight:700; color:#111827; margin:8px 0 6px; }
    .tms-note { font-size:13px; color:#6b7280; line-height:1.5; }

    .falt { padding:88px 0; }
    .falt-head { text-align:center; max-width:720px; margin:0 auto 60px; }
    .falt-head h2 { font-size:44px; font-weight:700; letter-spacing:-0.04em; line-height:1.08; margin:14px 0; }
    .falt-block {
      display:grid; grid-template-columns:1fr 1fr;
      gap:56px; align-items:center; padding:0 24px;
      max-width:1200px; margin:0 auto 72px;
    }
    .falt-block:last-child { margin-bottom:0; }
    .falt-block.flip { direction:rtl; }
    .falt-block.flip > * { direction:ltr; }
    .falt-num {
      font-size:13px; font-weight:700; letter-spacing:0.1em;
      text-transform:uppercase; color:var(--accent); margin-bottom:16px;
    }
    .falt-copy h3 { font-size:36px; font-weight:700; letter-spacing:-0.03em; line-height:1.1; margin:0 0 18px; }
    .falt-copy p { font-size:17px; color:#4b5563; line-height:1.8; margin:0 0 24px; }
    .falt-chips { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:22px; }
    .falt-chip {
      padding:7px 14px; border-radius:100px; font-size:13px;
      font-weight:600; background:rgba(var(--accent-rgb),0.08);
      border:1px solid rgba(var(--accent-rgb),0.2); color:#374151;
    }
    .falt-visual {
      border-radius:24px; overflow:hidden;
      box-shadow:0 24px 60px rgba(15,23,42,0.08);
      border:1px solid #e5e7eb;
      background: #fff;
    }
    .falt-visual-dark {
      background:#111827; min-height:380px;
      display:flex; align-items:center; justify-content:center;
      position:relative; overflow:hidden;
    }

    .fig { padding:88px 0; background:#fcfcfc; }
    .fig.dark { background:#111827; color:#fff; }
    .fig-head { text-align:center; max-width:720px; margin:0 auto 52px; }
    .fig-head h2 { font-size:44px; font-weight:700; letter-spacing:-0.04em; line-height:1.08; margin:14px 0 16px; }
    .fig-head p { opacity:0.72; font-size:17px; line-height:1.75; }
    .fig-grid {
      display:grid; grid-template-columns:repeat(3,1fr);
      gap:20px; max-width:1200px; margin:0 auto; padding:0 24px;
    }
    .fig-card {
      padding:28px; border-radius:20px;
      border:1px solid rgba(0,0,0,0.07);
      background:#fff;
      transition:transform 0.25s, box-shadow 0.25s;
    }
    .fig.dark .fig-card { background:rgba(255,255,255,0.04); border-color:rgba(255,255,255,0.09); }
    .fig-card:hover { transform:translateY(-4px); box-shadow:0 20px 48px rgba(15,23,42,0.08); }
    .fig-icon {
      width:48px; height:48px; border-radius:14px;
      background:rgba(var(--accent-rgb),0.1);
      display:flex; align-items:center; justify-content:center; margin-bottom:20px;
    }
    .fig-card h4 { font-size:17px; font-weight:700; letter-spacing:-0.025em; margin:0 0 10px; }
    .fig-card p { font-size:14px; line-height:1.7; margin:0; color:#6b7280; }
    .fig.dark .fig-card p { color:rgba(255,255,255,0.6); }

    .gvw { padding:88px 0; background:#fff; }
    .gvw-head { text-align:center; max-width:680px; margin:0 auto 48px; }
    .gvw-head h2 { font-size:44px; font-weight:700; letter-spacing:-0.04em; line-height:1.08; margin:14px 0 16px; }
    .gvw-head p { font-size:17px; line-height:1.75; opacity:0.72; }
    .gvw-grid {
      display:grid; grid-template-columns:repeat(2,1fr);
      gap:20px; max-width:1200px; margin:0 auto; padding:0 24px;
    }
    .gvw-card {
      border-radius:20px; overflow:hidden;
      background:#fff; border:1px solid #e5e7eb;
      box-shadow:0 16px 40px rgba(15,23,42,0.06);
      transition:transform 0.3s, box-shadow 0.3s;
    }
    .gvw-card:hover { transform:translateY(-4px); box-shadow:0 24px 54px rgba(15,23,42,0.1); }
    .gvw-video { position:relative; aspect-ratio:16/9; overflow:hidden; background:linear-gradient(135deg,#ddd6ce,#f4efe8); }
    .gvw-caption { padding:16px 18px; font-size:14px; font-weight:600; color:#111827; letter-spacing:-0.01em; }

    .wtj { padding:80px 0; background:#111827; color:#fff; }
    .wtj-inner { max-width:1200px; margin:0 auto; padding:0 24px; }
    .wtj-top { display:flex; align-items:center; gap:20px; margin-bottom:40px; flex-wrap:wrap; }
    .wtj-logo { height:36px; opacity:0.9; }
    .wtj-divider { width:1px; height:36px; background:rgba(255,255,255,0.15); }
    .wtj-tagline { font-size:18px; font-weight:500; color:rgba(255,255,255,0.8); }
    .wtj-grid { display:grid; grid-template-columns:repeat(4,1fr); gap:20px; }
    .wtj-card {
      padding:24px; border-radius:18px;
      background:rgba(255,255,255,0.05);
      border:1px solid rgba(255,255,255,0.09);
      transition:background 0.25s, border-color 0.25s;
    }
    .wtj-card:hover { background:rgba(255,255,255,0.08); border-color:rgba(var(--accent-rgb),0.35); }
    .wtj-icon {
      width:44px; height:44px; border-radius:12px;
      background:rgba(var(--accent-rgb),0.15);
      display:flex; align-items:center; justify-content:center; margin-bottom:18px;
    }
    .wtj-card h4 { font-size:16px; font-weight:700; margin:0 0 10px; letter-spacing:-0.02em; }
    .wtj-card p { font-size:14px; color:rgba(255,255,255,0.6); line-height:1.65; margin:0; }

    .pdc {
      padding:88px 0; background:#0f172a;
      color:#fff;
    }
    .pdc-head { text-align:center; max-width:680px; margin:0 auto 52px; }
    .pdc-head h2 { font-size:44px; font-weight:700; letter-spacing:-0.04em; margin:14px 0; }
    .pdc-head p { color:rgba(255,255,255,0.68); font-size:17px; line-height:1.75; }
    .pdc-grid {
      display:grid; grid-template-columns:repeat(3,1fr);
      gap:20px; max-width:1200px; margin:0 auto; padding:0 24px;
    }
    .pdc-card {
      padding:32px; border-radius:24px;
      background:rgba(255,255,255,0.04);
      border:1px solid rgba(255,255,255,0.09);
      position:relative;
    }
    .pdc-card.featured {
      background:rgba(var(--accent-rgb),0.08);
      border-color:rgba(var(--accent-rgb),0.4);
      box-shadow:0 0 60px rgba(var(--accent-rgb),0.08);
    }
    .pdc-badge {
      display:inline-block; padding:5px 12px; border-radius:100px;
      background:#15803d; color:#fff; font-size:12px;
      font-weight:700; margin-bottom:16px;
    }
    .pdc-plan { font-size:20px; font-weight:700; letter-spacing:-0.02em; margin:0 0 16px; }
    .pdc-price { margin:12px 0 20px; }
    .pdc-amount { font-size:44px; font-weight:800; letter-spacing:-0.04em; color:var(--accent); }
    .pdc-old { font-size:18px; color:rgba(255,255,255,0.4); text-decoration:line-through; margin-left:8px; }
    .pdc-period { font-size:14px; color:rgba(255,255,255,0.5); display:block; margin-top:4px; }
    .pdc-desc { font-size:15px; color:rgba(255,255,255,0.65); line-height:1.7; margin-bottom:24px; }
    .pdc-list { list-style:none; padding:0; margin:0 0 28px; display:grid; gap:12px; }
    .pdc-list li { display:flex; gap:10px; align-items:start; font-size:14px; color:rgba(255,255,255,0.8); line-height:1.55; }
    .pdc-check { width:18px; height:18px; color:var(--accent); flex-shrink:0; margin-top:1px; }
    .pdc-btn {
      width:100%; padding:14px; border-radius:12px;
      font-size:15px; font-weight:700; cursor:pointer;
      border:none; background:var(--accent); color:#fff;
      transition:opacity .2s, transform .2s;
    }
    .pdc-btn:hover { opacity:0.92; transform:translateY(-1px); }

    .tcar { padding:88px 0; background:#f8fafc; }
    .tcar-head { text-align:center; max-width:720px; margin:0 auto 52px; }
    .tcar-head h2 { font-size:44px; font-weight:700; letter-spacing:-0.04em; margin:14px 0 16px; }
    .tcar-head p { font-size:17px; color:#4b5563; line-height:1.75; opacity:0.8; }
    .tcar-layout {
      display:grid; grid-template-columns:280px 1fr;
      gap:24px; max-width:1200px; margin:0 auto;
      padding:0 24px; align-items:start;
    }
    .tcar-rail { display:grid; gap:14px; }
    .tcar-mini {
      padding:18px; border-radius:18px; background:#fff;
      border:1px solid #e5e7eb; font-size:14px;
      color:#374151; line-height:1.65;
    }
    .tcar-mini-stars { color:#f59e0b; font-size:13px; margin-bottom:8px; }
    .tcar-stage {
      border-radius:28px; background:#fff;
      border:1px solid #e5e7eb;
      box-shadow:0 20px 60px rgba(15,23,42,0.06);
      overflow:hidden;
    }
    .tcar-track { display:flex; transition:transform 0.6s cubic-bezier(0.4,0,0.2,1); }
    .tcar-slide { min-width:100%; padding:44px; }
    .tcar-quote {
      font-size:64px; line-height:1;
      color:var(--accent); font-family:Georgia,serif;
      margin-bottom:8px;
    }
    .tcar-stars { color:#f59e0b; font-size:18px; letter-spacing:2px; margin-bottom:16px; }
    .tcar-text { font-size:20px; line-height:1.75; color:#111827; margin:0 0 28px; }
    .tcar-author { display:flex; align-items:center; gap:14px; }
    .tcar-avatar {
      width:52px; height:52px; border-radius:50%;
      display:flex; align-items:center; justify-content:center;
      font-size:16px; font-weight:700; color:#fff;
      background:var(--accent); flex-shrink:0;
    }
    .tcar-name { font-size:16px; font-weight:700; }
    .tcar-role { font-size:14px; color:#6b7280; margin-top:2px; }
    .tcar-dots { display:flex; gap:8px; justify-content:center; padding:20px 0 4px; }
    .tcar-dot {
      border:none; cursor:pointer; border-radius:100px;
      height:8px; background:#d1d5db;
      transition:all 0.3s ease;
    }
    .tcar-dot.active { width:28px; background:var(--accent); }
    .tcar-dot:not(.active) { width:8px; }

    .lead {
      padding: 88px 0;
      background: #fff;
    }
    .lead-wrap {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: grid;
      grid-template-columns: .95fr 1.05fr;
      gap: 24px;
      align-items: stretch;
    }
    .lead-copy, .lead-form {
      border-radius: 28px;
      border: 1px solid #e5e7eb;
      background: #fff;
      box-shadow: 0 18px 50px rgba(15,23,42,0.06);
    }
    .lead-copy {
      padding: 36px;
      background:
        radial-gradient(circle at top right, rgba(179,113,63,0.10), transparent 28%),
        #fff;
    }
    .lead-copy h2 {
      font-size: 42px;
      line-height: 1.08;
      letter-spacing: -0.04em;
      margin: 14px 0 16px;
    }
    .lead-copy p {
      font-size: 17px;
      line-height: 1.8;
      color: #4b5563;
      margin-bottom: 22px;
    }
    .lead-points {
      display: grid;
      gap: 14px;
      margin-top: 26px;
    }
    .lead-point {
      display: flex;
      gap: 12px;
      align-items: flex-start;
      color: #374151;
      font-size: 15px;
      line-height: 1.7;
    }
    .lead-form {
      padding: 34px;
    }
    .form-grid {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 16px;
    }
    .field { display: grid; gap: 8px; }
    .field.full { grid-column: 1 / -1; }
    .field label {
      font-size: 13px;
      font-weight: 700;
      color: #111827;
    }
    .field input, .field select, .field textarea {
      width: 100%;
      border: 1px solid #d1d5db;
      background: #fff;
      border-radius: 14px;
      padding: 14px 16px;
      font-size: 14px;
      color: #111827;
      outline: none;
      transition: border-color .2s ease, box-shadow .2s ease;
    }
    .field textarea {
      min-height: 110px;
      resize: vertical;
    }
    .field input:focus, .field select:focus, .field textarea:focus {
      border-color: rgba(var(--accent-rgb),0.8);
      box-shadow: 0 0 0 4px rgba(var(--accent-rgb),0.12);
    }
    .submit-btn {
      width: 100%;
      border: none;
      background: var(--accent);
      color: #fff;
      border-radius: 14px;
      padding: 16px 18px;
      font-size: 15px;
      font-weight: 800;
      cursor: pointer;
      transition: transform .2s ease, opacity .2s ease;
    }
    .submit-btn:hover { transform: translateY(-1px); opacity: .94; }

    .ctavb {
      position:relative; padding:90px 24px;
      text-align:center; color:#fff; overflow:hidden;
      min-height:360px; display:flex; align-items:center; justify-content:center;
      background:
        linear-gradient(rgba(17,24,39,0.72), rgba(17,24,39,0.72)),
        radial-gradient(circle at top right, rgba(179,113,63,0.28), transparent 35%),
        #111827;
    }
    .ctavb-inner { position:relative; z-index:2; max-width:680px; margin:0 auto; }
    .ctavb h2 { font-size:48px; font-weight:700; letter-spacing:-0.04em; line-height:1.08; margin:0 0 18px; }
    .ctavb p { font-size:18px; color:rgba(255,255,255,0.8); line-height:1.7; margin:0 0 32px; }
    .ctavb-btn {
      display:inline-flex; align-items:center; gap:10px;
      padding:16px 36px; border-radius:14px; font-size:16px;
      font-weight:700; cursor:pointer;
      background:var(--accent); color:#fff; border:none;
      transition:transform .2s, box-shadow .2s;
    }
    .ctavb-btn:hover { transform:translateY(-2px) scale(1.01); box-shadow:0 14px 36px rgba(var(--accent-rgb),0.35); }

    .footer {
      background: #0b1220;
      color: rgba(255,255,255,0.78);
      padding: 26px 0;
      border-top: 1px solid rgba(255,255,255,0.08);
    }
    .footer-inner {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 24px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 18px;
      flex-wrap: wrap;
    }
    .footer-left {
      display: flex;
      align-items: center;
      gap: 14px;
      flex-wrap: wrap;
    }
    .footer-links {
      display: flex;
      align-items: center;
      gap: 16px;
      flex-wrap: wrap;
      font-size: 14px;
    }
    .footer-links a:hover { color: #fff; }

    @media (max-width: 1100px) {
      .hvf-inner,
      .lead-wrap,
      .tcar-layout,
      .pdc-grid,
      .wtj-grid,
      .fig-grid,
      .gvw-grid,
      .falt-block {
        grid-template-columns: 1fr;
      }
      .top-strip-inner { gap: 12px; }
      .top-strip-title { font-size: 16px; }
      .hero-card { min-height: auto; }
      .hero-stats { grid-template-columns: repeat(3,1fr); }
      .tcar-layout { align-items: stretch; }
      .tcar-rail { grid-template-columns: repeat(3,1fr); }
    }

    @media (max-width: 768px) {
      .section, .falt, .fig, .gvw, .pdc, .tcar, .lead { padding: 72px 0; }
      .top-strip-inner {
        padding: 12px 16px;
        flex-wrap: wrap;
      }
      .top-strip-title {
        order: 1;
        width: 100%;
        font-size: 15px;
      }
      .top-strip-logo { order: 2; height: 24px; }
      .top-strip-cta { order: 3; padding: 10px 14px; font-size: 13px; margin-left: auto; }
      .hvf { min-height: auto; }
      .hvf-content { padding: 56px 16px 50px; }
      .hvf-h1 { font-size: 42px; }
      .hvf-desc { font-size: 16px; }
      .hvf-pill { flex-direction: column; align-items: stretch; border-radius: 22px; padding: 14px; }
      .hvf-btn { width: 100%; }
      .hero-preview { grid-template-columns: 1fr; }
      .hero-stats { grid-template-columns: 1fr; }
      .tms-grid, .fig-grid, .gvw-grid, .wtj-grid, .pdc-grid, .lead-wrap { padding: 0 16px; }
      .tms-grid { grid-template-columns: 1fr; }
      .tms-cell:not(:last-child)::after { display:none; }
      .falt-head h2, .fig-head h2, .gvw-head h2, .pdc-head h2, .tcar-head h2, .lead-copy h2, .ctavb h2 { font-size: 34px; }
      .falt-block { gap: 28px; padding: 0 16px; margin-bottom: 54px; }
      .tcar-layout { padding: 0 16px; }
      .tcar-rail { grid-template-columns: 1fr; }
      .tcar-slide { padding: 28px 22px; }
      .tcar-text { font-size: 18px; }
      .form-grid { grid-template-columns: 1fr; }
      .lead-copy, .lead-form { padding: 24px; }
      .footer-inner { padding: 0 16px; }
    }
  `;

  const testimonials = [
    {
      text: 'Seedream 4.5 helped our design team move from rough ideas to polished visual concepts dramatically faster, while Seedance 1.5 Pro gave us production-ready video drafts for campaigns.',
      name: 'Aman Verma',
      role: 'Creative Lead, Growth Studio',
      avatar: 'AV'
    },
    {
      text: 'The visual quality is impressive. We used the models to generate product shots, social media concepts, and short-form video mockups without slowing our launch timelines.',
      name: 'Neha Kapoor',
      role: 'Brand Manager, D2C Commerce',
      avatar: 'NK'
    },
    {
      text: 'For teams exploring generative workflows, this combination is highly practical. It supports ideation, iteration, and presentation with far less friction than traditional processes.',
      name: 'Rajat Malhotra',
      role: 'Marketing Director, Media House',
      avatar: 'RM'
    }
  ];

  return (
    <div className="page">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="top-strip">
        <div className="top-strip-inner">
          <span className="top-strip-title">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span>
          <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28" alt="Techjockey" className="top-strip-logo" />
          <a href="#lead-form" className="top-strip-cta">Get Free Consultation</a>
        </div>
      </nav>

      <section className="hvf">
        <div className="hvf-video"></div>
        <div className="hvf-overlay"></div>
        <div className="hvf-content">
          <div className="hvf-inner">
            <div className="hvf-copy">
              <h1 className="hvf-h1 anim d0">
                Create High-Quality AI Images &amp; Videos with <span className="hvf-accent">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span>
              </h1>
              <p className="hvf-desc anim d1">
                Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
              </p>
              <div className="hvf-chips anim d1">
                {['Seedream 4.5', 'Seedance 1.5 Pro'].map((chip, index) => (
                  <div key={index} className="hvf-chip">{chip}</div>
                ))}
              </div>
              <div className="hvf-pill anim d2">
                <input type="text" placeholder="Enter your idea..." className="hvf-input" />
                <button className="hvf-btn">Get Free Consultation</button>
              </div>
              <div className="hvf-proof anim d3">
                <div className="hvf-avatars">
                  <div className="hvf-av" style={{ backgroundColor: '#f6ad55' }}>AB</div>
                  <div className="hvf-av" style={{ backgroundColor: '#fc8181' }}>CD</div>
                  <div className="hvf-av" style={{ backgroundColor: '#68d391' }}>EF</div>
                  <div className="hvf-av" style={{ backgroundColor: '#63b3ed' }}>GH</div>
                </div>
                <div className="hvf-stars">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} width="18" height="18" viewBox="0 0 20 20" fill="#f59e0b" aria-hidden="true">
                      <polygon points="10,1.5 12.6,7 18.6,7.7 14.1,11.8 15.3,17.7 10,14.8 4.7,17.7 5.9,11.8 1.4,7.7 7.4,7" />
                    </svg>
                  ))}
                </div>
                <div className="hvf-rcount">Trusted by fast-moving creative and marketing teams</div>
              </div>
            </div>

            <div className="hero-card anim-scale d2">
              <div className="hero-card-top">
                <span className="hero-dot"></span>
                <span className="hero-dot"></span>
                <span className="hero-dot"></span>
              </div>
              <div className="hero-card-body">
                <div className="hero-panel">
                  <div className="hero-panel-label">Generation Workspace</div>
                  <div className="hero-preview">
                    <div className="hero-preview-box"></div>
                    <div className="hero-preview-box"></div>
                  </div>
                </div>
                <div className="hero-stats">
                  <div className="hero-stat">
                    <strong>Images</strong>
                    <span>Generate detailed visual concepts and creative assets.</span>
                  </div>
                  <div className="hero-stat">
                    <strong>Videos</strong>
                    <span>Turn ideas into compelling motion-first content drafts.</span>
                  </div>
                  <div className="hero-stat">
                    <strong>Quality</strong>
                    <span>Support faster iteration without compromising output fidelity.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="tms reveal">
        <div className="tms-grid">
          <div className="tms-cell">
            <div className="tms-val">2</div>
            <div className="tms-label">Advanced AI Models</div>
            <div className="tms-note">One for image generation and one for video generation workflows.</div>
          </div>
          <div className="tms-cell">
            <div className="tms-val">24/7</div>
            <div className="tms-label">Creative Momentum</div>
            <div className="tms-note">Accelerate ideation, prototyping, and campaign asset planning.</div>
          </div>
          <div className="tms-cell">
            <div className="tms-val">1</div>
            <div className="tms-label">Expert Consultation</div>
            <div className="tms-note">Get guidance on the right use case, workflow, and implementation fit.</div>
          </div>
        </div>
      </section>

      <section className="falt">
        <div className="falt-head reveal">
          <span className="eyebrow">What you can do</span>
          <h2>From concept ideation to visual storytelling</h2>
        </div>

        <div className="falt-block reveal">
          <div className="falt-copy">
            <div className="falt-num">01 — Seedream 4.5</div>
            <h3>Generate high-quality AI images for campaigns, products, and creative exploration</h3>
            <p>
              Use Seedream 4.5 to transform prompts into polished visuals for marketing, branding, social media, concept art, product mockups, and more. It helps teams move faster from idea to presentation-ready imagery.
            </p>
            <div className="falt-chips">
              <span className="falt-chip">Image generation</span>
              <span className="falt-chip">Creative ideation</span>
              <span className="falt-chip">Brand concepts</span>
            </div>
            <a href="#lead-form" className="top-strip-cta" style={{ display: 'inline-flex', width: 'fit-content' }}>Talk to an Expert</a>
          </div>
          <div className="falt-visual">
            <div className="falt-visual-dark" style={{ padding: '24px' }}>
              <div style={{ width: '100%', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div style={{ minHeight: '320px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(179,113,63,0.45), rgba(255,255,255,0.08))', border: '1px solid rgba(255,255,255,0.12)' }}></div>
                <div style={{ minHeight: '320px', borderRadius: '20px', background: 'linear-gradient(135deg, rgba(255,255,255,0.12), rgba(179,113,63,0.18))', border: '1px solid rgba(255,255,255,0.12)' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div className="falt-block flip reveal">
          <div className="falt-copy">
            <div className="falt-num">02 — Seedance 1.5 Pro</div>
            <h3>Create AI-powered videos for storytelling, ads, and visual communication</h3>
            <p>
              Seedance 1.5 Pro is built to support video generation use cases where speed and creative experimentation matter. Produce motion concepts, ad drafts, short-form visuals, and storytelling assets with less production overhead.
            </p>
            <div className="falt-chips">
              <span className="falt-chip">Video generation</span>
              <span className="falt-chip">Ad creatives</span>
              <span className="falt-chip">Motion drafts</span>
            </div>
            <a href="#lead-form" className="top-strip-cta" style={{ display: 'inline-flex', width: 'fit-content' }}>Request Demo</a>
          </div>
          <div className="falt-visual">
            <div className="falt-visual-dark" style={{ padding: '24px' }}>
              <div style={{ width: '100%', borderRadius: '22px', overflow: 'hidden', border: '1px solid rgba(255,255,255,0.12)' }}>
                <div style={{ aspectRatio: '16/10', background: 'linear-gradient(135deg, rgba(179,113,63,0.35), rgba(255,255,255,0.08), rgba(17,24,39,0.4))' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="fig reveal">
        <div className="fig-head">
          <span className="eyebrow">Key benefits</span>
          <h2>Built for modern creative and marketing workflows</h2>
          <p>
            Explore how Seedream 4.5 and Seedance 1.5 Pro can support faster content creation, visual experimentation, and better communication across creative teams.
          </p>
        </div>
        <div className="fig-grid">
          <div className="fig-card">
            <div className="fig-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 12h16M12 4v16" stroke="#b3713f" strokeWidth="2" strokeLinecap="round"/></svg>
            </div>
            <h4>Faster visual ideation</h4>
            <p>Create multiple visual directions quickly for campaigns, product launches, and internal concept reviews.</p>
          </div>
          <div className="fig-card">
            <div className="fig-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M5 12l5 5L20 7" stroke="#b3713f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </div>
            <h4>High-quality outputs</h4>
            <p>Use advanced image and video models to generate polished creative assets with strong presentation value.</p>
          </div>
          <div className="fig-card">
            <div className="fig-icon">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke="#b3713f" strokeWidth="2"/></svg>
            </div>
            <h4>Flexible use cases</h4>
            <p>Support social media, advertising, storytelling, concept design, and product communication from one AI-led workflow.</p>
          </div>
        </div>
      </section>

      <section className="gvw reveal">
        <div className="gvw-head">
          <span className="eyebrow">Use cases</span>
          <h2>Where these models can add value</h2>
          <p>Ideal for teams that need quality visuals and rapid iteration across campaigns, concepts, and production planning.</p>
        </div>
        <div className="gvw-grid">
          <div className="gvw-card">
            <div className="gvw-video"></div>
            <div className="gvw-caption">Marketing campaign visuals, key visuals, and branded creative concepts</div>
          </div>
          <div className="gvw-card">
            <div className="gvw-video"></div>
            <div className="gvw-caption">Short-form motion concepts, storyboard drafts, and ad video exploration</div>
          </div>
        </div>
      </section>

      <section className="wtj reveal">
        <div className="wtj-inner">
          <div className="wtj-top">
            <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" alt="Techjockey" className="wtj-logo" />
            <div className="wtj-divider"></div>
            <div className="wtj-tagline">Why connect through Techjockey</div>
          </div>
          <div className="wtj-grid">
            <div className="wtj-card">
              <div className="wtj-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 6v6l4 2" stroke="#b3713f" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <h4>Faster discovery</h4>
              <p>Quickly understand whether these AI models fit your business, creative goals, and implementation needs.</p>
            </div>
            <div className="wtj-card">
              <div className="wtj-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" stroke="#b3713f" strokeWidth="2"/></svg>
              </div>
              <h4>Consultative support</h4>
              <p>Get product understanding, workflow mapping, and guidance tailored to your image and video generation use cases.</p>
            </div>
            <div className="wtj-card">
              <div className="wtj-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M4 7h16M7 12h10M9 17h6" stroke="#b3713f" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <h4>Clear evaluation</h4>
              <p>Compare potential use cases, budget alignment, output expectations, and onboarding considerations in one place.</p>
            </div>
            <div className="wtj-card">
              <div className="wtj-icon">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 5v14M5 12h14" stroke="#b3713f" strokeWidth="2" strokeLinecap="round"/></svg>
              </div>
              <h4>Easy next steps</h4>
              <p>Connect with the right team faster and move from curiosity to consultation without unnecessary delays.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="pdc reveal">
        <div className="pdc-head">
          <span className="eyebrow">Plans</span>
          <h2>Choose the right engagement path</h2>
          <p>Discuss your needs and get help identifying the right AI image and video generation workflow for your team.</p>
        </div>
        <div className="pdc-grid">
          <div className="pdc-card">
            <h3 className="pdc-plan">Explore</h3>
            <div className="pdc-price">
              <span className="pdc-amount">Basic</span>
              <span className="pdc-period">For early evaluation</span>
            </div>
            <p className="pdc-desc">Great for businesses beginning to assess use cases and model fit for content creation.</p>
            <ul className="pdc-list">
              <li><svg className="pdc-check" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Initial requirement discussion</span></li>
              <li><svg className="pdc-check" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Use case suitability review</span></li>
              <li><svg className="pdc-check" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Expert callback</span></li>
            </ul>
            <a href="#lead-form"><button className="pdc-btn">Get Started</button></a>
          </div>

          <div className="pdc-card featured">
            <span className="pdc-badge">Most Preferred</span>
            <h3 className="pdc-plan">Evaluate</h3>
            <div className="pdc-price">
              <span className="pdc-amount">Pro</span>
              <span className="pdc-period">For active buying intent</span>
            </div>
            <p className="pdc-desc">Ideal for teams comparing workflows, expected output quality, and application across image and video use cases.</p>
            <ul className="pdc-list">
              <li><svg className="pdc-check" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Detailed consultation</span></li>
              <li><svg className="pdc-check" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Business-fit recommendations</span></li>
              <li><svg className="pdc-check" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Priority assistance from experts</span></li>
            </ul>
            <a href="#lead-form"><button className="pdc-btn">Talk to Sales</button></a>
          </div>

          <div className="pdc-card">
            <h3 className="pdc-plan">Scale</h3>
            <div className="pdc-price">
              <span className="pdc-amount">Enterprise</span>
              <span className="pdc-period">For advanced team workflows</span>
            </div>
            <p className="pdc-desc">Suitable for organizations planning broader creative adoption and internal process integration.</p>
            <ul className="pdc-list">
              <li><svg className="pdc-check" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Advanced consultation path</span></li>
              <li><svg className="pdc-check" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Workflow and scale guidance</span></li>
              <li><svg className="pdc-check" viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg><span>Dedicated support coordination</span></li>
            </ul>
            <a href="#lead-form"><button className="pdc-btn">Request Consultation</button></a>
          </div>
        </div>
      </section>

      <section className="tcar reveal">
        <div className="tcar-head">
          <span className="eyebrow">Testimonials</span>
          <h2>What teams appreciate most</h2>
          <p>Real feedback themes from creative and marketing stakeholders evaluating modern AI-powered visual generation workflows.</p>
        </div>
        <div className="tcar-layout">
          <div className="tcar-rail">
            <div className="tcar-mini">
              <div className="tcar-mini-stars">★★★★★</div>
              Faster ideation cycles with stronger visual confidence in early-stage concepts.
            </div>
            <div className="tcar-mini">
              <div className="tcar-mini-stars">★★★★★</div>
              Helpful for reducing turnaround time on branded creative exploration.
            </div>
            <div className="tcar-mini">
              <div className="tcar-mini-stars">★★★★★</div>
              Valuable for teams balancing content quality with speed and experimentation.
            </div>
          </div>
          <div className="tcar-stage">
            <div className="tcar-track" style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}>
              {testimonials.map((item, index) => (
                <div key={index} className="tcar-slide">
                  <div className="tcar-quote">“</div>
                  <div className="tcar-stars">★★★★★</div>
                  <p className="tcar-text">{item.text}</p>
                  <div className="tcar-author">
                    <div className="tcar-avatar">{item.avatar}</div>
                    <div>
                      <div className="tcar-name">{item.name}</div>
                      <div className="tcar-role">{item.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="tcar-dots">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  type="button"
                  className={`tcar-dot ${activeTestimonial === index ? 'active' : ''}`}
                  onClick={() => setActiveTestimonial(index)}
                  aria-label={`Go to testimonial ${index + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="lead-form" className="lead reveal">
        <div className="lead-wrap">
          <div className="lead-copy">
            <span className="eyebrow">Free consultation</span>
            <h2>See how Seedream 4.5 and Seedance 1.5 Pro fit your workflow</h2>
            <p>
              Speak with
export default LandingPage;