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
      --primary: #ff6b00;
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
  <video src="https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4" autoPlay muted loop playsInline className="hvf-video" style={{ position: 'absolute', inset: 0 }}></video>
  <div className="hvf-overlay"></div>
  <div className="hvf-content">
    <div className="hvf-inner">
      <h1 className="hvf-h1 anim d0">Create High-Quality AI Images & Videos with <span className="hvf-accent">Seedream 4.5 and Seedance 1.5 Pro</span> by ByteDance</h1>
      <p className="hvf-desc anim d1">Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
      <div className="hvf-chips">
        {["Seedream 4.5", "Seedance 1.5 Pro"].map((chip, index) => (
          <div key={index} className="hvf-chip">{chip}</div>
        ))}
      </div>
      <button className="hvf-btn">{cta_text}</button>
    </div>
    <div className="hvf-proof">
      <div className="hvf-avatars">
        <div className="hvf-av" style={{ backgroundColor: '#ff6b00' }}>VS</div>
        <div className="hvf-av" style={{ backgroundColor: '#ff8100' }}>VP</div>
        <div className="hvf-av" style={{ backgroundColor: '#ff9722' }}>AM</div>
        <div className="hvf-av" style={{ backgroundColor: '#ffaa44' }}>AS</div>
      </div>
      <div className="hvf-stars">
        {Array.from({ length: 5 }, (_, index) => (
          <svg key={index} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="gold" className="w-5 h-5">
            <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.065 3.384a1 1 0 00.95.69h3.59c.967 0 1.371 1.24.588 1.81l-2.906 2.11a1 1 0 00-.364 1.118l1.064 3.384c.3.921-.755 1.688-1.54 1.118l-2.906-2.11a1 1 0 00-1.175 0l-2.906 2.11c-.785.57-1.84-.197-1.54-1.118l1.064-3.384a1 1 0 00-.364-1.118l-2.906-2.11c-.783-.57-.379-1.81.588-1.81h3.59a1 1 0 00.95-.69l1.065-3.384z"/>
          </svg>
        ))}
      </div>
      <div className="hvf-rcount"></div>
    </div>
  </div>
  <div className="hvf-form">
    <div className="hvf-inner anim d2">
      <input type="text" className="hvf-input" placeholder="Name" />
      <input type="email" className="hvf-input" placeholder="Email" />
      <input type="tel" className="hvf-input" placeholder="Phone" />
      <input type="text" className="hvf-input" placeholder="Company" />
      <button className="hvf-btn w-full">Sign Up</button>
    </div>
  </div>
</section>

<section className="tms" style={{backgroundColor: '#111827', padding: '40px 0', position: 'relative'}}>
  <img src="/output/generated-assets/ds_1778237598095_2f0aeecc/19-c60952591b.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" 
       style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  <div className="tms-grid" style={{display: 'flex', justifyContent: 'space-around', alignItems: 'center', position: 'relative'}}>
    {[{val: "120K", label: "Users Worldwide", note: "Trusted globally"},
      {val: "98%", label: "Customer Satisfaction", note: "High satisfaction rate"},
      {val: "50+", label: "Countries Served", note: "Expanding reach"}].map((item, index) => (
      <div key={index} className="tms-cell reveal anim d0" style={{textAlign: 'center', padding: '20px'}}>
        <div className="tms-val" data-count={item.val.replace(/\D/g, '')} style={{fontSize: '2rem', color: '#ff6b00'}}>
          {item.val}
        </div>
        <div className="tms-label" style={{fontSize: '1.25rem', color: '#ffffff'}}>
          {item.label}
        </div>
        <div className="tms-note" style={{fontSize: '1rem', color: '#d1d5db'}}>
          {item.note}
        </div>
      </div>
    ))}
  </div>
</section>

<section className="falt bg-[#0f172a] text-white p-8 relative">
  <div className="absolute inset-0 overflow-hidden">
    <img 
      src="/output/generated-assets/ds_1778237598095_2f0aeecc/19-c60952591b.webp" 
      alt="Seedream 4.5 and Seedance 1.5 Pro" 
      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} 
    />
  </div>
  <div className="relative z-10">
    <div className="falt-head py-16 anim d0">
      <h2 className="text-center text-4xl font-bold italic text-white">
        Create High-Quality AI Images & Videos with ByteDance Generative Models
      </h2>
    </div>
    {[
      {
        num: "01",
        title: "AI Image Generation with Seedream 4.5",
        description: "Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs.\nThe model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.",
        features: [
          "Advanced Capabilities of Seedream 4.5 by ByteDance",
          "Advanced Text–Image Alignment",
          "High-Resolution Output",
          "Superior Typographic Rendering",
          "Multi-Image Composition with Identity Preservation",
          "Strong Structural Fidelity"
        ],
        image_url: "/output/generated-assets/ds_1778237598095_2f0aeecc/12-581339b7d2.png",
        video_url: ""
      },
      {
        num: "02",
        title: "AI Video Generation with Seedance 1.5 Pro by Bytedance",
        description: "Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together.\nBuilt on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.",
        features: [
          "Key Capabilities of Seedance 1.5 Pro",
          "Text-to-Video Generation",
          "Audio-Visual Synchronization",
          "Multilingual Lip-Sync",
          "Cinematic Camera Control",
          "10× Faster Inference"
        ],
        image_url: "/output/generated-assets/ds_1778237598095_2f0aeecc/14-e1b1bc05a8.jpeg",
        video_url: ""
      }
    ].map((section, index) => (
      <div key={index} className={`falt-block ${index % 2 === 0 ? "" : "flip"} reveal mb-16`}>
        <div className="falt-num text-[#ff6b00] text-2xl font-bold mb-4">{"0" + (index + 1)}</div>
        <h3 className="text-3xl font-semibold mb-4">{section.title}</h3>
        <p className="text-lg mb-4">{section.description}</p>
        <div className="falt-chips flex flex-wrap gap-2 mb-4">
          {section.features.map((feature, i) => (
            <span key={i} className="falt-chip bg-[#ff6b00] text-white px-4 py-1 rounded-full">{feature}</span>
          ))}
        </div>
        <div className="falt-visual">
          {section.video_url ? (
            <video autoPlay muted loop playsInline style={{ width: '100%', borderRadius: '12px' }}>
              <source src={section.video_url} type="video/mp4" />
            </video>
          ) : (
            <img src={section.image_url} alt={`Feature ${index + 1}`} style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
          )}
        </div>
      </div>
    ))}
  </div>
</section>

export default LandingPage;

<section class="mns" style={{position:'relative', padding:'40px', backgroundColor:'#111827'}}>
  <img src="/output/generated-assets/ds_1778237598095_2f0aeecc/19-c60952591b.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  <div style={{position:'relative', zIndex:1}}>
    <h2 className="mns-head text-white">Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <p className="mns-label text-[#ff6b00]">FEATURES</p>
    <div className="mns-grid grid gap-8 mt-8">
      {[
        {
          publication: "TechCrunch",
          headline: "Seedream 4.5: Revolutionizing Image Creation with AI",
        },
        {
          publication: "The Verge",
          headline: "Discover the Power of Seedance 1.5 Pro for Video Generation",
        },
        {
          publication: "Wired",
          headline: "ByteDance Sets New Standards in AI Content Creation",
        },
      ].map((item, index) => (
        <div key={index} className="mns-card bg-[#1a1a1a] p-4 rounded-xl reveal anim" style={{animationDelay: `${index * 0.1}s`}}>
          <p className="mns-pub text-white font-bold">{item.publication}</p>
          <p className="mns-text text-gray-300">"{item.headline}"</p>
        </div>
      ))}
    </div>
    <div className="mt-8">
      {[<img src="/output/generated-assets/ds_1778237598095_2f0aeecc/12-581339b7d2.png" alt="Feature 1" style={{width:'100%',borderRadius:'12px',display:'block'}}/>, <img src="/output/generated-assets/ds_1778237598095_2f0aeecc/14-e1b1bc05a8.jpeg" alt="Feature 2" style={{width:'100%',borderRadius:'12px',display:'block'}}/>].map((img, idx) => 
        <div key={idx} className={`reveal anim d${idx + 1}`}>
          {img}
        </div>
      )}
    </div>
  </div>
</section>
export default LandingPage;

<section className="fig">
  <div className="fig-head">
    <span className="eyebrow">Features</span>
    <h2>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <p>Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
  </div>
  <div className="fig-grid stagger-parent">
    {[{title:"Advanced Capabilities of Seedream 4.5 by ByteDance", description:"From accurate text rendering to consistent image editing and multi-image composition, Seedream 4.5 powers high-quality, "},
      {title:"Advanced Text–Image Alignment", description:"Accurately translates prompts into visuals with improved semantic understanding."},
      {title:"High-Resolution Output", description:"Generate native images up to 1K–4K resolution with strong visual fidelity."},
      {title:"Superior Typographic Rendering", description:"Optimized for posters, ads, and text-heavy visual designs."},
      {title:"Multi-Image Composition with Identity Preservation", description:"Combines multiple inputs while accurately maintaining subject consistency."},
      {title:"Strong Structural Fidelity", description:"Maintains composition, layout, and scene structure with high precision."}
    ].map((feature, index) => (
      <div key={index} className="fig-card">
        <div className="fig-icon">
          <svg width="16" height="16" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            {/* Replace with relevant icon paths */}
            <circle cx="12" cy="12" r="10"/>
          </svg>
        </div>
        <h4>{feature.title}</h4>
        <p>{feature.description}</p>
      </div>
    ))}
  </div>
  <img src="/output/generated-assets/ds_1778237598095_2f0aeecc/19-c60952591b.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
</section>

<section className="gvw bg-[#111827] py-16 px-8">
  <div className="gvw-head text-center mb-12">
    <h2 className="text-5xl font-bold text-[#ff6b00] mb-4">Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <p className="text-lg text-gray-300">Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
  </div>
  <div className="gvw-grid grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-4 anim-stagger">
    {[{"url":"https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4","caption":"Seedream 4.5"},{"url":"https://cdn.web.imagine.art/imagine-one/cdge/sora2.mp4","caption":"Seedance 1.5 Pro"},{"url":"https://cdn.web.imagine.art/imagine-one/cdge/sora33.mp4","caption":"Demo 3"},{"url":"https://cdn.web.imagine.art/remote-config/assets/video_effects/sd/podcast.mp4","caption":"Demo 4"}].map((video, i) => (
      <div key={i} className="gvw-card p-4 bg-[#0f172a] rounded-lg anim-scale">
        <video className="gvw-video" autoPlay muted loop playsInline style={{width:'100%',borderRadius:'12px'}}>
          <source src={video.url} type="video/mp4"/>
        </video>
        <div className="gvw-caption mt-2 text-center text-sm text-gray-300">{video.caption}</div>
      </div>
    ))}
  </div>
  <div className="relative mt-12" style={{height: '400px'}}>
    <img src="/output/generated-assets/ds_1778237598095_2f0aeecc/19-c60952591b.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
</section>

`export default LandingPage;`

<section className="wtj bg-[#111827] text-white py-16 px-8">
  <div className="wtj-inner max-w-6xl mx-auto">
    <div className="wtj-top flex flex-col items-center mb-12">
      <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" className="wtj-logo mb-4" />
      <p className="wtj-tagline text-lg tracking-wide">India's #1 B2B Software Marketplace</p>
    </div>
    <div className="relative w-full h-80 mb-12">
      <img src="/output/generated-assets/ds_1778237598095_2f0aeecc/19-c60952591b.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
    </div>
    <div className="wtj-divider h-px bg-gray-700 mb-12"></div>
    <div className="wtj-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 reveal">
      {[
        {title: "Free Expert Consultation", description: "Get matched with the right software"},
        {title: "Verified Reviews", description: "1000+ genuine customer reviews"},
        {title: "Best Price Guarantee", description: "Competitive pricing assured"},
        {title: "Dedicated Support", description: "Post-sale onboarding assistance"}
      ].map((point, index) => (
        <div key={index} className="wtj-card bg-[#020617] p-6 flex flex-col items-start justify-start reveal">
          <div className="wtj-icon mb-4">
            {/* SVG placeholder for icon */}
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-[#ff6b00]" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 11h4m4 0h-4m0 0V5m0 12v-6"/></svg>
          </div>
          <h4 className="text-xl font-semibold mb-2">{point.title}</h4>
          <p className="text-gray-400">{point.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

export default LandingPage;

<section className="pdc bg-[#111827] relative">
  <div className="absolute inset-0">
    <img src="/output/generated-assets/ds_1778237598095_2f0aeecc/19-c60952591b.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
  <div className="relative z-10 p-8">
    <div className="pdc-head">
      <span className="eyebrow text-[#ff6b00]">Pricing</span>
      <h2 className="anim d0 text-white">Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    </div>
    <div className="pdc-grid grid gap-6 mt-8">
      {[{"name":"Seedream 4.5 (AI Image Generation)","price":"","originalPrice":"","discount":"","period":"per user/month","description":"","includes":["High-resolution image generation (up to 4K quality)","Text-to-image & multimodal image editing","Multi-image composition for complex visuals","Enhanced typographic rendering for posters, ads & text-heavy designs"],"highlighted":true},{"name":"Seedance 1.5 Pro (AI Video Generation)","price":"Starting at $1,000/month/","originalPrice":"","discount":"","period":"per user/month","description":"","includes":["Text-to-video generation with cinematic output","Native audio + video generation (synchronized)","Multilingual lip-sync capabilities","Fast inference for quicker video production"],"highlighted":false}].map((plan, i) => (
        <div key={i} className={`pdc-card ${plan.highlighted ? 'featured' : ''} bg-[#0f172a] text-white p-6 rounded-lg shadow-lg reveal`}>
          {plan.highlighted && <div className="pdc-badge bg-[#ff6b00] text-white p-1 rounded">Best Value</div>}
          <h3 className="pdc-plan text-xl font-bold">{plan.name}</h3>
          <div className="flex items-baseline space-x-2 mt-4">
            <span className="pdc-price text-3xl font-bold">{plan.price || 'Contact for Pricing'}</span>
            {plan.originalPrice && <span className="pdc-old line-through text-gray-500">{plan.originalPrice}</span>}
            <span className="pdc-period text-sm text-gray-400">{plan.period}</span>
          </div>
          <p className="pdc-desc mt-4 text-sm">{plan.description}</p>
          <ul className="pdc-list mt-4 space-y-2">
            {plan.includes.map((item, idx) => (
              <li key={idx} className="pdc-check text-sm flex items-center">
                <svg className="w-4 h-4 fill-current text-[#ff6b00] mr-2" xmlns="http://www.w3.org/2000/svg"><path d="M10 15.27L16.18 9.09l1.41 1.41L10 18.09 4.41 12.5l1.41-1.41z"/></svg>
                {item}
              </li>
            ))}
          </ul>
          <button className="pdc-btn mt-6 w-full py-2 bg-[#ff6b00] text-white font-semibold rounded">Generate with AI</button>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="tcar" style={{backgroundColor: '#111827', color: '#ffffff', padding: '3rem 0', position: 'relative'}}>
  {(() => {
    const [slide, setSlide] = React.useState(0);
    const testimonials = [
      {quote: "Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.", author: "Vaishali Saxena", role: "Creative Director", company: "", avatar: "/output/generated-assets/ds_1778237598095_2f0aeecc/06-0518458b81.webp"},
      {quote: "Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.", author: "Vihaan Pandey", role: "Video Producer", company: "", avatar: ""},
      {quote: "The multimodal editing capabilities in Seedream make it easy to refine images with precision.", author: "Anurag Malhotra", role: "Art Director", company: "", avatar: ""},
      {quote: "Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.", author: "Ashutosh Singh", role: "Marketing Manager", company: "", avatar: ""},
      {quote: "From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.", author: "Shrimmi Saxena", role: "Creative Lead", company: "", avatar: ""}
    ];

    React.useEffect(() => {
      const t = setInterval(() => setSlide(p => (p + 1) % testimonials.length), 4000);
      return () => clearInterval(t);
    }, [testimonials.length]);

    return (
      <>
        <div className="tcar-head text-center">
          <div className="eyebrow text-[#ff6b00]">Testimonials</div>
          <h2 className="tcar-head anim d0" style={{fontSize: 'clamp(32px, 5vw, 60px)'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
          <p className="tcar-text">Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
        </div>
        
        <div className="tcar-layout flex justify-between mt-8 space-x-8">
          <div className="tcar-rail space-y-4">
            {testimonials.slice(0, 3).map((t, index) => (
              <div className="tcar-mini bg-[#0f172a] p-4 rounded-lg shadow-md" key={index}>
                <p className="tcar-mini-stars">★★★★★</p>
                <p className="truncate">{t.quote}</p>
                <p className="tcar-author mt-2">- {t.author}</p>
              </div>
            ))}
          </div>

          <div className="tcar-stage relative overflow-hidden w-full flex-1 bg-[#0f172a] p-8 rounded-lg shadow-lg">
            <div className="tcar-track flex transition-transform duration-500" style={{transform: `translateX(-${slide * 100}%)`}}>
              {testimonials.map((t, i) => (
                <div className="tcar-slide flex-none w-full" key={i}>
                  <p className="tcar-quote anim-scale d1">{t.quote}</p>
                  <div className="tcar-author flex items-center mt-6">
                    <div className="tcar-avatar w-12 h-12 bg-[#ff6b00] rounded-full flex items-center justify-center text-white font-bold">
                      {t.avatar ? <img src={t.avatar} alt={t.author} className="rounded-full" style={{width: '100%', height: '100%'}} /> : t.author.match(/\b\w/g).join('')}
                    </div>
                    <div className="ml-4">
                      <div className="tcar-name">{t.author}</div>
                      <div className="tcar-role text-sm text-gray-400">{t.role}</div>
                    </div>
                  </div>
                  <div className="tcar-stars mt-2">★★★★★</div>
                </div>
              ))}
            </div>
          </div>

          <div className="tcar-dots flex mt-4 justify-center">
            {testimonials.map((_, i) => (
              <div key={i} className={`tcar-dot w-3 h-3 m-1 rounded-full ${slide === i ? 'bg-[#ff6b00]' : 'bg-gray-400'}`} onClick={() => setSlide(i)}></div>
            ))}
          </div>
        </div>

        <img src="/output/generated-assets/ds_1778237598095_2f0aeecc/19-c60952591b.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}} />
      </>
    );
  })()}
</section>

export default LandingPage;

<section className="ctavb">
  <div className="ctavb-bg">
    <video autoPlay muted loop playsInline style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0}}>
      <source src="https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4" type="video/mp4" />
    </video>
    <img src="/output/generated-assets/ds_1778237598095_2f0aeecc/19-c60952591b.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0}} />
    <div className="ctavb-overlay"></div>
  </div>
  <div className="ctavb-inner">
    <h2 className="anim d0" style={{color: '#fff', fontSize: 'clamp(32px, 5vw, 60px) !important', fontFamily: 'Plus Jakarta Sans', wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none'}}>
      Create High-Quality AI Images & Videos with ByteDance Generative Models
    </h2>
    <p className="anim d1" style={{color: '#fff', fontFamily: 'googleSansFlex, "googleSansFlex Fallback"'}}>
      Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
    </p>
    <a href="#lead-form" className="ctavb-btn anim d2" style={{backgroundColor: '#ff6b00', color: '#fff', padding: '12px 24px', borderRadius: '8px', textDecoration: 'none', fontFamily: 'googleSansFlex, "googleSansFlex Fallback"'}}>
      Generate with AI
    </a>
  </div>
</section>

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