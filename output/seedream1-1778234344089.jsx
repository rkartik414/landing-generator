import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  const css = `
    :root {
      --accent: #ff6b00;
      --primary: #1a1a1a;
      --accent-rgb: 255,107,0;
      --bodyBg: #1a1a1a;
      --section-alt: #111827;
      --section-deeper: #020617;
      --card-bg: rgba(255,255,255,0.05);
      --card-border: rgba(255,255,255,0.08);
      --text-primary: #f9fafb;
      --text-muted: rgba(255,255,255,0.65)
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Inter', ui-sans-serif, sans-serif; background: var(--bodyBg); color: var(--text-primary); }
    a { text-decoration: none; color: inherit; }
    img { max-width: 100%; }
    button { font-family: inherit; }
    h1, h2, h3 { word-break: normal !important; overflow-wrap: normal !important; hyphens: none !important; }
    h1, [class*="h1"], [class*="hero-title"], [class*="banner-title"], [class*="hvf-h1"] {
      font-size: clamp(32px, 5vw, 60px) !important;
      line-height: 1.1 !important;
    }
      .reveal { opacity:0; transform:translateY(28px); transition:opacity .7s ease,transform .7s ease; }
    .reveal.visible { opacity:1; transform:none; }
    .stagger-parent > * { opacity:0; transform:translateY(24px); }
    .zoom-reveal { overflow:hidden; }
    .zoom-reveal img, .zoom-reveal video { transform:scale(1.12); will-change:transform; }
    .slide-left { opacity:0; transform:translateX(-60px); }
    .slide-right { opacity:0; transform:translateX(60px); }
    .pop-in { opacity:0; transform:scale(0.7); }
    .btn-magnetic { will-change:transform; }
    .h-scroll-track { display:flex; gap:24px; will-change:transform; }
    .sticky-scroll-section { display:grid; grid-template-columns:1fr 1fr; gap:48px; }
    .sticky-panel { position:sticky; top:120px; height:fit-content; }
    .scroll-step { min-height:280px; padding:32px 0; opacity:0.4; transition:opacity .3s; }
    .scroll-step.active { opacity:1; }
  
@keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
     @keyframes scaleIn { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
     .anim { opacity:0; animation:fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
     .anim-scale { opacity:0; animation:scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards; }
     .d0{animation-delay:0.05s}.d1{animation-delay:0.2s}.d2{animation-delay:0.35s}
     .d3{animation-delay:0.5s}.d4{animation-delay:0.65s}.d5{animation-delay:0.8s}
     .container{max-width:1200px;margin:0 auto;padding:0 24px}
     .section{padding:96px 0;position:relative}

      .hvf         { position:relative; min-height:100vh; overflow:hidden;
                     font-family:'Geist',ui-sans-serif,sans-serif;
                     background:#fff; }
      .hvf-video   { position:absolute; inset:0; z-index:0; }
      .hvf-video video { width:100%; height:100%; object-fit:cover;
                         transform:scaleY(-1); }
      .hvf-overlay { position:absolute; inset:0;
                     background:linear-gradient(to bottom,
                       rgba(255,255,255,0) 26.416%,
                       rgba(255,255,255,1) 66.943%); }
                       .hero-right-col > *:not(form):not(.form-card) { display: none !important; }
      .hvf-content { position:relative; z-index:10;
                     display:flex; justify-content:center;
                     padding:290px 24px 80px; }
      .hvf-inner   { max-width:1200px; width:100%;
                     display:flex; flex-direction:column; gap:32px; }
      .hvf-h1      { font-size:80px; font-weight:500;
                     letter-spacing:-0.04em; line-height:1.02;
                     color:#0a0a0f; max-width:900px; }
      .hvf-accent  { font-family:'Instrument Serif',Georgia,serif;
                     font-style:italic; font-size:100px;
                     font-weight:400; letter-spacing:-0.03em; }
      .hvf-desc    { font-size:18px; line-height:1.65; color:#373a46;
                     opacity:0.8; max-width:554px; }
      .hvf-chips   { display:flex; flex-wrap:wrap; gap:10px; }
      .hvf-chip    { display:flex; align-items:center; gap:7px;
                     padding:8px 14px; border-radius:100px;
                     background:rgba(var(--accent-rgb,255,107,0),0.08);
                     border:1px solid rgba(var(--accent-rgb,255,107,0),0.22);
                     color:#374151; font-size:13px; font-weight:500; }
      .hvf-pill    { display:flex; align-items:center; max-width:510px;
                     background:#fcfcfc; border-radius:40px;
                     border:1px solid rgba(0,0,0,0.065);
                     box-shadow:0px 10px 40px 5px rgba(194,194,194,0.25);
                     padding:5px 5px 5px 22px; gap:8px; }
      .hvf-input   { flex:1; min-width:0; border:none; outline:none;
                     background:transparent; font-size:15px;
                     color:#0f0f0f; letter-spacing:-0.01em; }
      .hvf-input::placeholder { color:#b8bcc8; }
      .hvf-btn     { border-radius:100px; color:#fff; border:none; flex-shrink:0;
                     background:linear-gradient(180deg,#323232,#1d1d1d,#111);
                     box-shadow:inset -4px -6px 25px 0px rgba(201,201,201,0.08),
                                inset 4px 4px 10px 0px rgba(29,29,29,0.24);
                     padding:13px 22px; font-size:14px; font-weight:500;
                     cursor:pointer; white-space:nowrap; }
      .hvf-proof   { display:flex; align-items:center; gap:10px;
                     padding-left:4px; }
      .hvf-avatars { display:flex; }
      .hvf-av      { width:26px; height:26px; border-radius:50%;
                     border:1.5px solid #fff; display:flex;
                     align-items:center; justify-content:center;
                     font-size:8px; font-weight:700; margin-left:-7px; }
      .hvf-av:first-child { margin-left:0; }
      .hvf-stars   { display:flex; gap:2px; }
      .hvf-rcount  { font-size:13px; font-weight:500; color:#373a46;
                     opacity:0.72; }
    

      .tms        { padding:60px 0; background:var(--bodyBg,#fff);
                    border-top:1px solid rgba(0,0,0,0.06);
                    border-bottom:1px solid rgba(0,0,0,0.06); }
      .tms-grid   { display:grid; grid-template-columns:repeat(3,1fr);
                    gap:2px; max-width:1200px; margin:0 auto; padding:0 24px; }
      .tms-cell   { text-align:center; padding:32px 24px;
                    position:relative; }
      .tms-cell:not(:last-child)::after {
                    content:''; position:absolute; right:0; top:20%;
                    height:60%; width:1px;
                    background:rgba(0,0,0,0.08); }
      .tms-val    { font-size:48px; font-weight:800; letter-spacing:-0.04em;
                    color:var(--accent,#ff6b00); line-height:1; }
      .tms-label  { font-size:15px; font-weight:600; color:#111827;
                    margin:8px 0 6px; }
      .tms-note   { font-size:13px; color:#6b7280; line-height:1.5; }
    

      .falt        { padding:96px 0; }
      .falt-head   { text-align:center; max-width:720px;
                     margin:0 auto 80px; }
      .falt-head h2 { font-size:44px; font-weight:700;
                      letter-spacing:-0.04em; line-height:1.08;
                      margin:14px 0; }
      .falt-block  { display:grid; grid-template-columns:1fr 1fr;
                     gap:80px; align-items:center; padding:0 24px;
                     max-width:1200px; margin:0 auto 100px; }
      .falt-block:last-child { margin-bottom:0; }
      .falt-block.flip { direction:rtl; }
      .falt-block.flip > * { direction:ltr; }
      .falt-num    { font-size:13px; font-weight:700; letter-spacing:0.1em;
                     text-transform:uppercase;
                     color:var(--accent,#ff6b00); margin-bottom:16px; }
      .falt-copy h3 { font-size:36px; font-weight:700;
                      letter-spacing:-0.03em; line-height:1.1;
                      margin:0 0 18px; }
      .falt-copy p  { font-size:17px; color:#4b5563; line-height:1.8;
                      margin:0 0 28px; }
      .falt-chips  { display:flex; flex-wrap:wrap; gap:8px; margin-bottom:28px; }
      .falt-chip   { padding:7px 14px; border-radius:100px; font-size:13px;
                     font-weight:600; background:rgba(var(--accent-rgb,255,107,0),0.08);
                     border:1px solid rgba(var(--accent-rgb,255,107,0),0.2);
                     color:#374151; }
      .falt-visual { border-radius:24px; overflow:hidden;
                     box-shadow:0 24px 60px rgba(15,23,42,0.1);
                     border:1px solid #e5e7eb; }
      .falt-visual img, .falt-visual video { width:100%; display:block; }
      .falt-visual-dark { background:#111827; min-height:380px;
                          display:flex; align-items:center;
                          justify-content:center; position:relative;
                          overflow:hidden; }
    

      .mns         { padding:80px 0; background:#fff;
                     border-top:1px solid #f3f4f6; }
      .mns-head    { text-align:center; margin-bottom:48px; }
      .mns-label   { font-size:13px; font-weight:700; letter-spacing:0.08em;
                     text-transform:uppercase; color:#9ca3af; }
      .mns-grid    { display:grid; grid-template-columns:repeat(3,1fr);
                     gap:20px; max-width:900px; margin:0 auto; padding:0 24px; }
      .mns-card    { padding:24px; border-radius:16px; background:#f8fafc;
                     border:1px solid #f3f4f6;
                     transition:transform .25s, box-shadow .25s; }
      .mns-card:hover { transform:translateY(-4px);
                        box-shadow:0 12px 32px rgba(15,23,42,0.08); }
      .mns-pub     { font-size:13px; font-weight:700;
                     color:var(--accent,#ff6b00); margin-bottom:10px; }
      .mns-text    { font-size:14px; color:#374151; line-height:1.65;
                     font-style:italic; }
    

      .fig         { padding:96px 0; }
      .fig.dark    { background:var(--bodyBg,#111827); color:#fff; }
      .fig-head    { text-align:center; max-width:720px;
                     margin:0 auto 60px; }
      .fig-head h2 { font-size:44px; font-weight:700;
                     letter-spacing:-0.04em; line-height:1.08;
                     margin:14px 0 16px; }
      .fig-head p  { opacity:0.72; font-size:17px; line-height:1.75; }
      .fig-grid    { display:grid; grid-template-columns:repeat(3,1fr);
                     gap:20px; max-width:1200px; margin:0 auto; padding:0 24px; }
      .fig-card    { padding:28px; border-radius:20px;
                     border:1px solid rgba(0,0,0,0.07);
                     background:#fff;
                     transition:transform 0.25s, box-shadow 0.25s; }
      .fig.dark .fig-card { background:rgba(255,255,255,0.04);
                            border-color:rgba(255,255,255,0.09); }
      .fig-card:hover { transform:translateY(-6px);
                        box-shadow:0 20px 48px rgba(15,23,42,0.1); }
      .fig-icon    { width:48px; height:48px; border-radius:14px;
                     background:rgba(var(--accent-rgb,255,107,0),0.1);
                     display:flex; align-items:center;
                     justify-content:center; margin-bottom:20px; }
      .fig-card h4 { font-size:17px; font-weight:700; letter-spacing:-0.025em;
                     margin:0 0 10px; }
      .fig-card p  { font-size:14px; line-height:1.7; margin:0;
                     color:#6b7280; }
      .fig.dark .fig-card p { color:rgba(255,255,255,0.6); }
    

      .gvw         { padding:96px 0; background:var(--bodyBg,#fff); }
      .gvw-head    { text-align:center; max-width:680px;
                     margin:0 auto 56px; }
      .gvw-head h2 { font-size:44px; font-weight:700;
                     letter-spacing:-0.04em; line-height:1.08;
                     margin:14px 0 16px; }
      .gvw-head p  { font-size:17px; line-height:1.75; opacity:0.72; }
      .gvw-grid    { display:grid; grid-template-columns:repeat(2,1fr);
                     gap:20px; max-width:1200px; margin:0 auto; padding:0 24px; }
      .gvw-card    { border-radius:20px; overflow:hidden;
                     background:#fff; border:1px solid #e5e7eb;
                     box-shadow:0 16px 40px rgba(15,23,42,0.08);
                     transition:transform 0.3s, box-shadow 0.3s; }
      .gvw-card:hover { transform:translateY(-6px) scale(1.01);
                        box-shadow:0 28px 64px rgba(15,23,42,0.14); }
      .gvw-video   { position:relative; aspect-ratio:16/9; overflow:hidden; }
      .gvw-video video { width:100%; height:100%; object-fit:cover;
                         display:block; }
      .gvw-caption { padding:16px 18px; font-size:14px; font-weight:600;
                     color:#111827; letter-spacing:-0.01em; }
    

      .wtj         { padding:80px 0; background:#111827; color:#fff; }
      .wtj-inner   { max-width:1200px; margin:0 auto; padding:0 24px; }
      .wtj-top     { display:flex; align-items:center; gap:20px;
                     margin-bottom:48px; }
      .wtj-logo    { height:36px; opacity:0.9; }
      .wtj-divider { width:1px; height:36px; background:rgba(255,255,255,0.15); }
      .wtj-tagline { font-size:18px; font-weight:500;
                     color:rgba(255,255,255,0.8); }
      .wtj-grid    { display:grid; grid-template-columns:repeat(4,1fr);
                     gap:20px; }
      .wtj-card    { padding:24px; border-radius:18px;
                     background:rgba(255,255,255,0.05);
                     border:1px solid rgba(255,255,255,0.09);
                     transition:background 0.25s, border-color 0.25s; }
      .wtj-card:hover { background:rgba(255,255,255,0.08);
                        border-color:rgba(var(--accent-rgb,255,107,0),0.35); }
      .wtj-icon    { width:44px; height:44px; border-radius:12px;
                     background:rgba(var(--accent-rgb,255,107,0),0.15);
                     display:flex; align-items:center; justify-content:center;
                     margin-bottom:18px; }
      .wtj-card h4 { font-size:16px; font-weight:700; margin:0 0 10px;
                     letter-spacing:-0.02em; }
      .wtj-card p  { font-size:14px; color:rgba(255,255,255,0.6);
                     line-height:1.65; margin:0; }
    

      .pdc         { padding:96px 0; background:var(--bodyBg,#06080c);
                     color:#fff; }
      .pdc-head    { text-align:center; max-width:680px;
                     margin:0 auto 60px; }
      .pdc-head h2 { font-size:44px; font-weight:700;
                     letter-spacing:-0.04em; margin:14px 0; }
      .pdc-grid    { display:grid;
                     grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
                     gap:20px; max-width:1200px; margin:0 auto; padding:0 24px; }
      .pdc-card    { padding:32px; border-radius:24px;
                     background:rgba(255,255,255,0.04);
                     border:1px solid rgba(255,255,255,0.09);
                     position:relative; }
      .pdc-card.featured { background:rgba(var(--accent-rgb,255,107,0),0.08);
                           border-color:rgba(var(--accent-rgb,255,107,0),0.4);
                           box-shadow:0 0 60px rgba(var(--accent-rgb,255,107,0),0.1); }
      .pdc-badge   { display:inline-block; padding:5px 12px; border-radius:100px;
                     background:#15803d; color:#fff; font-size:12px;
                     font-weight:700; margin-bottom:16px; }
      .pdc-plan    { font-size:20px; font-weight:700;
                     letter-spacing:-0.02em; margin:0 0 16px; }
      .pdc-price   { margin:12px 0 20px; }
      .pdc-amount  { font-size:44px; font-weight:800; letter-spacing:-0.04em;
                     color:var(--accent,#ff6b00); }
      .pdc-old     { font-size:18px; color:rgba(255,255,255,0.4);
                     text-decoration:line-through; margin-left:8px; }
      .pdc-period  { font-size:14px; color:rgba(255,255,255,0.5);
                     display:block; margin-top:4px; }
      .pdc-desc    { font-size:15px; color:rgba(255,255,255,0.65);
                     line-height:1.7; margin-bottom:24px; }
      .pdc-list    { list-style:none; padding:0; margin:0 0 28px;
                     display:grid; gap:12px; }
      .pdc-list li { display:flex; gap:10px; align-items:start;
                     font-size:14px; color:rgba(255,255,255,0.8);
                     line-height:1.55; }
      .pdc-check   { width:18px; height:18px; color:var(--accent,#ff6b00);
                     flex-shrink:0; margin-top:1px; }
      .pdc-btn     { width:100%; padding:14px; border-radius:12px;
                     font-size:15px; font-weight:700; cursor:pointer;
                     border:none; background:var(--accent,#ff6b00); color:#fff;
                     transition:opacity .2s, transform .2s; }
      .pdc-btn:hover { opacity:0.9; transform:translateY(-1px); }
    

      .tcar        { padding:96px 0; background:#f8fafc; }
      .tcar-head   { text-align:center; max-width:720px;
                     margin:0 auto 60px; }
      .tcar-head h2 { font-size:44px; font-weight:700;
                      letter-spacing:-0.04em; margin:14px 0 16px; }
      .tcar-head p  { font-size:17px; color:#4b5563; line-height:1.75;
                      opacity:0.8; }
      .tcar-layout { display:grid; grid-template-columns:300px 1fr;
                     gap:24px; max-width:1200px; margin:0 auto;
                     padding:0 24px; align-items:start; }
      .tcar-rail   { display:grid; gap:14px; }
      .tcar-mini   { padding:18px; border-radius:18px; background:#fff;
                     border:1px solid #e5e7eb; font-size:14px;
                     color:#374151; line-height:1.65; }
      .tcar-mini-stars { color:#f59e0b; font-size:13px;
                         margin-bottom:8px; }
      .tcar-stage  { border-radius:28px; background:#fff;
                     border:1px solid #e5e7eb;
                     box-shadow:0 20px 60px rgba(15,23,42,0.08);
                     overflow:hidden; }
      .tcar-track  { display:flex; transition:transform 0.6s cubic-bezier(0.4,0,0.2,1); }
      .tcar-slide  { min-width:100%; padding:44px; }
      .tcar-quote  { font-size:64px; line-height:1;
                     color:var(--accent,#ff6b00); font-family:Georgia,serif;
                     margin-bottom:8px; }
      .tcar-stars  { color:#f59e0b; font-size:18px;
                     letter-spacing:2px; margin-bottom:16px; }
      .tcar-text   { font-size:20px; line-height:1.75; color:#111827;
                     margin:0 0 28px; }
      .tcar-author { display:flex; align-items:center; gap:14px; }
      .tcar-avatar { width:52px; height:52px; border-radius:50%;
                     display:flex; align-items:center; justify-content:center;
                     font-size:16px; font-weight:700; color:#fff;
                     background:var(--accent,#ff6b00); flex-shrink:0; }
      .tcar-name   { font-size:16px; font-weight:700; }
      .tcar-role   { font-size:14px; color:#6b7280; margin-top:2px; }
      .tcar-dots   { display:flex; gap:8px; justify-content:center;
                     padding:20px 0; }
      .tcar-dot    { border:none; cursor:pointer; border-radius:100px;
                     height:8px; background:#d1d5db;
                     transition:all 0.3s ease; }
      .tcar-dot.active { width:28px; background:var(--accent,#ff6b00); }
      .tcar-dot:not(.active) { width:8px; }
    

      .ctavb       { position:relative; padding:100px 24px;
                     text-align:center; color:#fff; overflow:hidden;
                     min-height:420px; display:flex; align-items:center;
                     justify-content:center; }
      .ctavb-bg    { position:absolute; inset:0; z-index:0; }
      .ctavb-bg video { width:100%; height:100%; object-fit:cover; }
      .ctavb-overlay { position:absolute; inset:0;
                       background:rgba(0,0,0,0.6); z-index:1; }
      .ctavb-inner { position:relative; z-index:2;
                     max-width:680px; margin:0 auto; }
      .ctavb h2   { font-size:48px; font-weight:700; letter-spacing:-0.04em;
                    line-height:1.08; margin:0 0 18px; }
      .ctavb p    { font-size:18px; color:rgba(255,255,255,0.8);
                    line-height:1.7; margin:0 0 36px; }
      .ctavb-btn  { display:inline-flex; align-items:center; gap:10px;
                    padding:16px 36px; border-radius:14px; font-size:16px;
                    font-weight:700; cursor:pointer;
                    background:var(--accent,#ff6b00); color:#fff; border:none;
                    transition:transform .2s, box-shadow .2s; }
      .ctavb-btn:hover { transform:translateY(-2px) scale(1.02);
                         box-shadow:0 14px 36px rgba(var(--accent-rgb,255,107,0),0.45); }
    `;

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />
     <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-xl border-b border-white/10 py-3.5">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center gap-4">
          <span class="font-extrabold text-xl" style="color:#ff6b00">Seedream 4.5 and Seedance 1.5 Pro</span>
          <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28" alt="Techjockey" className="h-7 opacity-95" />
          <a href="#lead-form" className="inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#ff6b00] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none disabled:opacity-50 text-sm" style={{textDecoration:'none'}}>Get Free Consultation</a>
        </div>
      </nav>

      <section className="hvf">
  <video autoPlay muted loop playsInline className="hvf-video">
    <source src="https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4" type="video/mp4" />
  </video>
  <div className="hvf-overlay"></div>
  <div className="hvf-content">
    <div className="hvf-inner">
      <h1 className="hvf-h1 anim d0">Create High-Quality AI Images & Videos with <span className="hvf-accent">Seedream 4.5 and Seedance 1.5 Pro</span> by ByteDance Generative Models</h1>
      <p className="hvf-desc anim d1">Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
      <div className="hvf-chips">
        {["Seedream 4.5", "Seedance 1.5 Pro"].map((chip, index) => (
          <span key={index} className="hvf-chip">{chip}</span>
        ))}
      </div>
      <button className="hvf-btn">Generate with AI</button>
    </div>
    <div className="hvf-inner">
      <div className="hvf-pill anim d2">
        <div className="hvf-form">
          <input type="text" placeholder="Name" className="hvf-input" />
          <input type="email" placeholder="Email" className="hvf-input" />
          <input type="tel" placeholder="Phone" className="hvf-input" />
          <input type="text" placeholder="Company" className="hvf-input" />
          <button type="submit" className="hvf-btn">Submit</button>
        </div>
      </div>
    </div>
  </div>
</section>

<section class="tms bg-[#0f172a] py-24 text-white relative">
  <img src="/output/generated-assets/ds_1778234051972_99df8a00/06-c4e1793d4f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  <div className="max-w-6xl mx-auto px-6 tms-grid grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">
    <div className="tms-cell flex flex-col items-start reveal anim d0">
      <div className="tms-val text-4xl font-bold" data-count="100">100+</div>
      <div className="tms-label text-lg mt-2">Global Clients</div>
      <div className="tms-note text-sm text-gray-400">//</div>
    </div>
    <div className="tms-cell flex flex-col items-start reveal anim d0">
      <div className="tms-val text-4xl font-bold" data-count="5000">5000+</div>
      <div className="tms-label text-lg mt-2">AI Models Deployed</div>
      <div className="tms-note text-sm text-gray-400">//</div>
    </div>
    <div className="tms-cell flex flex-col items-start reveal anim d0">
      <div className="tms-val text-4xl font-bold" data-count="24">24/7</div>
      <div className="tms-label text-lg mt-2">Support Available</div>
      <div className="tms-note text-sm text-gray-400">//</div>
    </div>
  </div>
</section>

<section className="falt">
  <div className="falt-head anim d0">
    <span className="eyebrow">Create High-Quality AI Images & Videos with ByteDance Generative Models</span>
    <img src="/output/generated-assets/ds_1778234051972_99df8a00/06-c4e1793d4f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
  </div>
  {[
    {
      num: "01",
      title: "AI Image Generation with Seedream 4.5",
      description:
        "Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs.\nThe model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.",
      features: [
        "Advanced Capabilities of Seedream 4.5 by ByteDance",
        "Advanced Text–Image Alignment",
        "High-Resolution Output",
        "Superior Typographic Rendering",
        "Multi-Image Composition with Identity Preservation",
        "Strong Structural Fidelity",
      ],
      image_url:
        "/output/generated-assets/ds_1778234051972_99df8a00/12-581339b7d2.png",
      video_url: "",
    },
    {
      num: "02",
      title: "AI Video Generation with Seedance 1.5 Pro by Bytedance",
      description:
        "Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together.\nBuilt on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.",
      features: [
        "Key Capabilities of Seedance 1.5 Pro",
        "Text-to-Video Generation",
        "Audio-Visual Synchronization",
        "Multilingual Lip-Sync",
        "Cinematic Camera Control",
        "10× Faster Inference",
      ],
      image_url:
        "/output/generated-assets/ds_1778234051972_99df8a00/15-41ea7f7485.png",
      video_url: "",
    },
  ].map((section, index) => (
    <div
      className={`falt-block anim d${index + 1}${index % 2 ? " flip" : ""}`}
      key={index}
    >
      <span className="falt-num">{section.num}</span>
      <h3>{section.title}</h3>
      <p>{section.description}</p>
      <div className="falt-chips">
        {section.features.map((feature, i) => (
          <span className="falt-chip" key={i}>
            {feature}
          </span>
        ))}
      </div>
      <div className="falt-visual">
        <img
          src={section.image_url}
          alt={`Feature ${section.num}`}
          style={{ width: "100%", borderRadius: "12px", display: "block" }}
        />
      </div>
    </div>
  ))}
</section>

export default LandingPage;

<section className="mns">
  <div className="mns-head">
    <h2 className="mns-label">FEATURES</h2>
  </div>
  <div className="mns-grid" style={{ display: 'flex', gap: '20px', flexDirection: 'row', opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.3s ease, transform 0.3s ease', stagger: 0.1 }}>
    {[{ publication: "TechCrunch", headline: "Seedream 4.5 revolutionizes image generation" }, { publication: "The Verge", headline: "Seedance 1.5 Pro sets a new standard in video" }, { publication: "Wired", headline: "Experience the future with ByteDance's generative models" }].map((news, index) => (
      <div key={index} className="mns-card" style={{ backgroundColor: '#111827', borderRadius: '12px', padding: '16px', transition: 'transform 0.3s ease, box-shadow 0.3s ease' }}>
        <div className="mns-pub" style={{ color: '#ff6b00', fontWeight: 'bold' }}>{news.publication}</div>
        <div className="mns-text" style={{ color: '#fff', marginTop: '8px' }}>"{news.headline}"</div>
      </div>
    ))}
  </div>
  <img src="/output/generated-assets/ds_1778234051972_99df8a00/06-c4e1793d4f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
  <div style={{ position: 'relative', paddingTop: '56.25%' }}>
    <img src="/output/generated-assets/ds_1778234051972_99df8a00/12-581339b7d2.png" alt="Feature 1" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
    <img src="/output/generated-assets/ds_1778234051972_99df8a00/15-41ea7f7485.png" alt="Feature 2" style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
  </div>
</section>

<section className="fig">
  <div className="relative overflow-hidden w-full h-[500px]">
    <img src="/output/generated-assets/ds_1778234051972_99df8a00/06-c4e1793d4f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
  
  <div className="container max-w-6xl mx-auto px-6">
    <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/25 text-[#ff6b00] px-3 py-1 text-xs font-bold tracking-wider uppercase">Features</span>
    <h2 className="fig-head text-4xl font-bold tracking-tight leading-tight my-8 text-white">Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <p className="body-text text-lg leading-relaxed text-gray-500">Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
    
    <div className="fig-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-12 stagger-parent">
      {[
        {"title":"Advanced Capabilities of Seedream 4.5 by ByteDance","description":"From accurate text rendering to consistent image editing and multi-image composition, Seedream 4.5 powers high-quality, "},
        {"title":"Advanced Text–Image Alignment","description":"Accurately translates prompts into visuals with improved semantic understanding."},
        {"title":"High-Resolution Output","description":"Generate native images up to 1K–4K resolution with strong visual fidelity."},
        {"title":"Superior Typographic Rendering","description":"Optimized for posters, ads, and text-heavy visual designs."},
        {"title":"Multi-Image Composition with Identity Preservation","description":"Combines multiple inputs while accurately maintaining subject consistency."},
        {"title":"Strong Structural Fidelity","description":"Maintains composition, layout, and scene structure with high precision."}
      ].map((feature, index) => (
        <div key={index} className="fig-card bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 opacity-0 translate-y-6" style={{animationDelay: `${index * 0.1}s`}}>
          <div className="fig-icon mb-4">
            <svg width="16" height="16" fill="var(--accent)" className="inline">
              <circle cx="8" cy="8" r="8"/>
            </svg>
          </div>
          <h4 className="text-xl font-semibold mb-2">{feature.title}</h4>
          <p className="text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>

    <div className="mt-12 flex gap-6">
      <img src="/output/generated-assets/ds_1778234051972_99df8a00/12-581339b7d2.png" alt="Feature 1" style={{width:'100%',borderRadius:'12px',display:'block'}} />
      <img src="/output/generated-assets/ds_1778234051972_99df8a00/15-41ea7f7485.png" alt="Feature 2" style={{width:'100%',borderRadius:'12px',display:'block'}} />
    </div>
  </div>
</section>

<section className="gvw py-24 bg-[#111827] text-white relative">
  <div className="container max-w-6xl mx-auto px-6">
    <div className="gvw-head text-center mb-12">
      <div className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-[#ff6b00]/10 border border-[#ff6b00]/25 text-[#ff6b00] px-3 py-1 text-xs font-bold tracking-wider uppercase">
        Gallery Video Wall
      </div>
      <h2 className="text-4xl font-bold tracking-tight leading-tight text-white mt-5">
        Create High-Quality AI Images & Videos with ByteDance Generative Models
      </h2>
      <p className="text-lg leading-relaxed text-gray-400 mt-4">
        Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
      </p>
    </div>
    
    <div className="gvw-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
      {[{"url":"https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4","caption":"Seedream 4.5"},{"url":"https://cdn.web.imagine.art/imagine-one/cdge/sora2.mp4","caption":"Seedance 1.5 Pro"},{"url":"https://cdn.web.imagine.art/imagine-one/cdge/sora33.mp4","caption":"Demo 3"},{"url":"https://cdn.web.imagine.art/remote-config/assets/video_effects/sd/podcast.mp4","caption":"Demo 4"}].map((video, index) => (
        <div key={index} className="gvw-card bg-[#1a1a1a] rounded-xl overflow-hidden shadow-md hover:-translate-y-1 hover:shadow-lg transition-transform anim-scale">
          <video
            className="gvw-video w-full"
            autoPlay
            muted
            loop
            playsInline
            style={{ display: 'block', borderRadius: '12px' }}
          >
            <source src={video.url} type="video/mp4" />
          </video>
          <div className="gvw-caption bg-[#0f172a] p-3 text-center">{video.caption}</div>
        </div>
      ))}
    </div>
    <img src="/output/generated-assets/ds_1778234051972_99df8a00/06-c4e1793d4f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
</section>

<section className="wtj bg-[#0f172a] text-white">
  <div className="wtj-inner max-w-6xl mx-auto px-6 py-24">
    <div className="wtj-top flex items-center justify-between mb-12">
      <div className="flex items-center space-x-4">
        <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" className="wtj-logo"/>
        <span className="wtj-tagline text-xl">India's #1 B2B Software Marketplace</span>
      </div>
      <img src="/output/generated-assets/ds_1778234051972_99df8a00/06-c4e1793d4f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
    </div>
    <div className="wtj-divider h-0.5 bg-gray-700 mb-12"></div>
    <div className="wtj-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal">
      {[
        {title: "Free Expert Consultation", description: "Get matched with the right software"},
        {title: "Verified Reviews", description: "1000+ genuine customer reviews"},
        {title: "Best Price Guarantee", description: "Competitive pricing assured"},
        {title: "Dedicated Support", description: "Post-sale onboarding assistance"}
      ].map((point, index) => (
        <div key={index} className="wtj-card flex flex-col items-start bg-white/5 p-5 rounded-lg shadow-lg transition transform hover:scale-105 anim d0">
          <svg className="wtj-icon w-10 h-10 mb-4 text-[#ff6b00]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8V12M12 16h.01M21 12.74v-1.48C21 6.76 18.24 4 14.74 4h-5.48C5.76 4 3 6.76 3 10.26v1.48C3 17.24 5.76 20 9.26 20h5.48C18.24 20 21 17.24 21 13.74z"></path>
          </svg>
          <h4 className="text-lg font-semibold mb-2">{point.title}</h4>
          <p className="body-text">{point.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="pdc py-24 bg-[#0f172a] text-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="pdc-head anim d0">
      <span className="pdc-badge">Pricing</span>
      <h2 className="text-4xl font-bold tracking-tight leading-tight text-white">Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    </div>
    <div className="pdc-grid mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {[
        {
          name: "Seedream 4.5 (AI Image Generation)",
          price: "",
          originalPrice: "",
          discount: "",
          period: "per user/month",
          description: "",
          includes: [
            "High-resolution image generation (up to 4K quality)",
            "Text-to-image & multimodal image editing",
            "Multi-image composition for complex visuals",
            "Enhanced typographic rendering for posters, ads & text-heavy designs"
          ],
          highlighted: true
        },
        {
          name: "Seedance 1.5 Pro (AI Video Generation)",
          price: "Starting at $1,000/month/",
          originalPrice: "",
          discount: "",
          period: "per user/month",
          description: "",
          includes: [
            "Text-to-video generation with cinematic output",
            "Native audio + video generation (synchronized)",
            "Multilingual lip-sync capabilities",
            "Fast inference for quicker video production"
          ],
          highlighted: false
        }
      ].map((plan, index) => (
        <div className={`pdc-card ${plan.highlighted ? "featured" : ""} ${index % 2 && "anim d0"}`} key={index}>
          {plan.highlighted && <span className="pdc-badge bg-[#ff6b00]/10 border border-[#ff6b00]/25 text-[#ff6b00]">SPECIAL OFFER</span>}
          <div className="pdc-plan">{plan.name}</div>
          <div className="pdc-price flex items-baseline">
            <span className="pdc-amount text-lg font-semibold">{plan.price ? plan.price : "Contact for Pricing"}</span>
            {plan.originalPrice && <span className="pdc-old ml-2 line-through">{plan.originalPrice}</span>}
            <span className="pdc-period ml-auto">{plan.period}</span>
          </div>
          <div className="pdc-desc mt-4 text-sm">{plan.description}</div>
          <ul className="pdc-list mt-6 space-y-2">
            {plan.includes.map((feature, idx) => (
              <li key={idx}>
                <svg className="inline-block w-5 h-5 text-[#ff6b00]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.707a1 1 0 01-1.414 0L8 14l-3-3a1 1 0 00-1.414 1.414l3.707 3.707a1 1 0 001.414 0l8-8a1 1 0 010 1.414z" clipRule="evenodd" /></svg>
                <span className="ml-3">{feature}</span>
              </li>
            ))}
          </ul>
          <button className="pdc-btn inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#ff6b00] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none disabled:opacity-50">Learn More</button>
        </div>
      ))}
    </div>
  </div>
  <img src="/output/generated-assets/ds_1778234051972_99df8a00/06-c4e1793d4f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
</section>

function LandingPage() {
  const [slide, setSlide] = React.useState(0);

  React.useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % 5), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="tcar py-24 bg-[#111827] text-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="tcar-head text-center anim d0">
          <h2 className="text-4xl font-bold tracking-tight leading-tight text-white mb-6">
            Create High-Quality AI Images & Videos with ByteDance Generative Models
          </h2>
          <p className="text-lg leading-relaxed text-gray-300">
            Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
          </p>
        </div>
        <div className="tcar-layout flex flex-col lg:flex-row lg:gap-8 mt-16">
          <div className="tcar-rail flex lg:flex-col gap-4 flex-shrink-0 w-full lg:w-[30%]">
            {[{"quote":"Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.","author":"Vaishali Saxena","role":"Creative Director","avatar":"/output/generated-assets/ds_1778234051972_99df8a00/05-6d75b26b02.webp"},{"quote":"Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.","author":"Vihaan Pandey","role":"Video Producer","avatar":"/output/generated-assets/ds_1778234051972_99df8a00/10-0518458b81.webp"},{"quote":"The multimodal editing capabilities in Seedream make it easy to refine images with precision.","author":"Anurag Malhotra","role":"Art Director","avatar":""}].map((t, index) => (
              <div key={index} className="tcar-mini border border-white/10 bg-white/5 p-4 rounded-lg">
                <p className="tcar-mini-stars mb-2">★★★★★</p>
                <p className="tcar-text text-sm line-clamp-2">{t.quote}</p>
              </div>
            ))}
          </div>
          <div className="tcar-stage flex-grow anim-scale d1 relative overflow-hidden mt-8 lg:mt-0">
            <div className="tcar-track flex transition-transform" style={{ transform: `translateX(-${slide * 100}%)` }}>
              {[{"quote":"Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.","author":"Vaishali Saxena","role":"Creative Director","avatar":"/output/generated-assets/ds_1778234051972_99df8a00/05-6d75b26b02.webp"},{"quote":"Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.","author":"Vihaan Pandey","role":"Video Producer","avatar":"/output/generated-assets/ds_1778234051972_99df8a00/10-0518458b81.webp"},{"quote":"The multimodal editing capabilities in Seedream make it easy to refine images with precision.","author":"Anurag Malhotra","role":"Art Director","avatar":""},{"quote":"Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.","author":"Ashutosh Singh","role":"Marketing Manager","avatar":""},{"quote":"From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.","author":"Shrimmi Saxena","role":"Creative Lead","avatar":""}].map((t, index) => (
                <div key={index} className="tcar-slide min-w-full px-6 py-8">
                  <div className="bg-white/5 p-6 rounded-2xl backdrop-blur-sm border border-white/10">
                    <p className="tcar-stars text-sm mb-4">★★★★★</p>
                    <p className="tcar-quote text-lg mb-6 font-medium">{t.quote}</p>
                    <div className="flex items-center mt-4">
                      <img src={t.avatar} alt={t.author} className="tcar-avatar w-12 h-12 rounded-full mr-4" style={{ backgroundColor: `#444444` }} />
                      <div>
                        <p className="tcar-name text-sm font-bold">{t.author}</p>
                        <p className="tcar-role text-xs">{t.role}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tcar-dots flex justify-center mt-8 gap-2">
          {[...Array(5)].map((_, index) => (
            <span key={index} className={`tcar-dot bg-white/20 w-3 h-3 rounded-full ${index === slide ? "bg-[#ff6b00]" : ""}`}></span>
          ))}
        </div>
      </div>
    </section>
  );
}

export default LandingPage;

<section className="ctavb relative">
  <div className="ctavb-bg">
    <video autoPlay muted loop playsInline style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0}}>
      <source src="https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4" type="video/mp4"/>
    </video>
    <img src="/output/generated-assets/ds_1778234051972_99df8a00/06-c4e1793d4f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
  <div className="ctavb-overlay absolute inset-0 bg-black opacity-50"></div>
  <div className="ctavb-inner relative z-10 max-w-6xl mx-auto px-6 py-24 text-center text-white">
    <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] anim d0">
      Create High-Quality AI Images & Videos with ByteDance Generative Models
    </h2>
    <p className="text-lg leading-relaxed mt-4 mb-8 anim d1">
      Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
    </p>
    <a href="#lead-form" className="ctavb-btn inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#ff6b00] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none disabled:opacity-50 anim d2">
      Generate with AI
    </a>
  </div>
</section>

export default LandingPage;

      <footer style={{background:'#0f172a',color:'#fff',padding:'42px 0'}}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',flexWrap:'wrap',gap:24}}>
          <div>
            <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28" alt="Techjockey" style={{marginBottom:14,display:'block'}} />
            <div style={{display:'flex',flexWrap:'wrap',gap:'10px 20px',fontSize:14,color:'rgba(255,255,255,0.75)'}}>
              <a href="mailto:support@techjockey.com" style={{color:'rgba(255,255,255,0.85)'}}>support@techjockey.com</a>
              <span>© 2024 Techjockey Infotech Pvt. Ltd.</span>
              <a href="/privacy-policy" style={{color:'rgba(255,255,255,0.85)'}}>Privacy Policy</a>
              <a href="/terms-condition" style={{color:'rgba(255,255,255,0.85)'}}>Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;