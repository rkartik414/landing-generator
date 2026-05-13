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

    const cta_text = "Generate with AI";
  const accentColor = "#ffffff";
  const primaryColor = "#ff6b00";
  const css = `
    :root {
      --accent: #ffffff;
      --primary: #ff6b00;
      --accent-rgb: 255,255,255;
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
     <nav style={{position:'sticky',top:0,zIndex:50,background:'rgba(15,23,42,0.92)',backdropFilter:'blur(16px)',borderBottom:'1px solid rgba(255,255,255,0.1)',padding:'12px 0'}}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16}}>
          <span style={{fontWeight:800,fontSize:20,color:'#ffffff'}}>Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span>
          <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28" alt="Techjockey" style={{opacity:0.95}} />
          <a href="#lead-form" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:12,fontSize:13,fontWeight:600,padding:'10px 20px',background:'var(--accent)',color:'#fff',border:'none',cursor:'pointer',textDecoration:'none'}}>Get Free Consultation</a>
        </div>
      </nav>

      <section className="hvf" style={{position:'relative', background:'#0f172a', padding:'60px 0', display:'flex', justifyContent:'space-between', alignItems:'center', color:'#ffffff'}}>
  <video autoPlay muted loop playsInline className="hvf-video" style={{position:'absolute', width:'100%', height:'100%', objectFit:'cover', inset:0}}>
    <source src="https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4" type="video/mp4"/>
  </video>
  <div className="hvf-overlay" style={{position:'absolute', inset:0, background:'rgba(0,0,0,0.5)'}}></div>
  <div className="hvf-content" style={{position:'relative', zIndex:2, width:'50%'}}>
    <div className="hvf-inner" style={{padding:'0 40px'}}>
      <h1 className="hvf-h1 anim d0" style={{fontSize:'clamp(32px, 5vw, 60px)', marginBottom:'20px', lineHeight:'1.2', fontFamily:'Plus Jakarta Sans, sans-serif'}}>
        Create High-Quality AI Images & Videos with <span className="hvf-accent">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span>
      </h1>
      <p className="hvf-desc anim d1" style={{marginBottom:'20px', fontSize:'18px', lineHeight:'1.6', fontFamily:'googleSansFlex, "googleSansFlex Fallback", sans-serif'}}>
        Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
      </p>
      <div className="hvf-chips" style={{display:'flex', gap:'10px', marginBottom:'30px'}}>
        {["Seedream 4.5","Seedance 1.5 Pro"].map((chip, index) => (
          <span key={index} className="hvf-chip" style={{background:'#ff6b00', padding:'5px 10px', borderRadius:'20px', fontFamily:'googleSansFlex, "googleSansFlex Fallback", sans-serif'}}>{chip}</span>
        ))}
      </div>
      <button className="hvf-btn" style={{background:'#ff6b00', color:'#ffffff', padding:'15px 30px', border:'none', borderRadius:'30px', cursor:'pointer', fontFamily: 'Plus Jakarta Sans, sans-serif'}}>
        Generate with AI
      </button>
    </div>
  </div>
  <div className="hvf-form" style={{position:'relative', zIndex:2, width:'30%', padding:'0 40px'}}>
    <div className="hvf-inputs anim d2" style={{display:'flex', flexDirection:'column', gap:'15px'}}>
      <input type="text" placeholder="Name" className="hvf-input" style={{padding:'10px', borderRadius:'5px', border:'1px solid #ffffff'}}/>
      <input type="email" placeholder="Email" className="hvf-input" style={{padding:'10px', borderRadius:'5px', border:'1px solid #ffffff'}}/>
      <input type="tel" placeholder="Phone" className="hvf-input" style={{padding:'10px', borderRadius:'5px', border:'1px solid #ffffff'}}/>
      <input type="text" placeholder="Company" className="hvf-input" style={{padding:'10px', borderRadius:'5px', border:'1px solid #ffffff'}}/>
      <button className="hvf-btn" style={{background:'#ff6b00', color:'#ffffff', padding:'10px', border:'none', borderRadius:'5px', cursor:'pointer'}}>Submit</button>
    </div>
  </div>
</section>

<section className="tms" style={{backgroundColor:'#111827',padding:'40px 0',position:'relative'}}>
  <div className="tms-grid" style={{maxWidth:'1200px',margin:'0 auto',display:'flex',justifyContent:'space-between'}}>
    <div className="tms-cell reveal" style={{flex:'1',textAlign:'center',margin:'0 10px'}}>
      <div className="tms-val" data-count="500" style={{color:'#ffffff',fontSize:'2em',fontWeight:'bold'}}>500+</div>
      <div className="tms-label" style={{color:'#ffffff',fontSize:'1.2em',marginTop:'10px'}}>Global Clients</div>
      <div className="tms-note" style={{color:'#ffffff',fontSize:'1em',marginTop:'5px'}}>Trusted worldwide</div>
    </div>
    <div className="tms-cell reveal" style={{flex:'1',textAlign:'center',margin:'0 10px'}}>
      <div className="tms-val" data-count="99" style={{color:'#ffffff',fontSize:'2em',fontWeight:'bold'}}>99%</div>
      <div className="tms-label" style={{color:'#ffffff',fontSize:'1.2em',marginTop:'10px'}}>Satisfaction Rate</div>
      <div className="tms-note" style={{color:'#ffffff',fontSize:'1em',marginTop:'5px'}}>High client satisfaction</div>
    </div>
    <div className="tms-cell reveal" style={{flex:'1',textAlign:'center',margin:'0 10px'}}>
      <div className="tms-val" data-count="24" style={{color:'#ffffff',fontSize:'2em',fontWeight:'bold'}}>24/7</div>
      <div className="tms-label" style={{color:'#ffffff',fontSize:'1.2em',marginTop:'10px'}}>Support</div>
      <div className="tms-note" style={{color:'#ffffff',fontSize:'1em',marginTop:'5px'}}>Always available</div>
    </div>
  </div>
  <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro-by-bytedance/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
</section>

<section className="falt" style={{backgroundColor: '#111827'}}>
  <div className="falt-head anim d0">
    <div className="eyebrow" style={{color: '#ff6b00'}}>Features</div>
    <h2 style={{color: '#ffffff', fontFamily: 'Plus Jakarta Sans', fontSize: 'clamp(32px, 5vw, 60px)', wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro-by-bytedance/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
  {[
    {
      num: "01",
      title: "AI Image Generation with Seedream 4.5",
      description: "Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs.\nThe model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.",
      features: ["Advanced Text–Image Alignment", "High-Resolution Output", "Superior Typographic Rendering", "Multi-Image Composition with Identity Preservation", "Strong Structural Fidelity"],
      image_url: "/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/09-5d90f4cffc.png",
      video_url: ""
    },
    {
      num: "02",
      title: "AI Video Generation with Seedance 1.5 Pro by Bytedance",
      description: "Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together.\nBuilt on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.",
      features: ["Key Capabilities of Seedance 1.5 Pro", "Text-to-Video Generation", "Audio-Visual Synchronization", "Multilingual Lip-Sync", "Cinematic Camera Control", "10× Faster Inference"],
      image_url: "/output/generated-assets/seedream-4-5-and-seedance-1-5-pro-by-bytedance/11-e1b1bc05a8.jpeg",
      video_url: ""
    }
  ].map((section, index) => (
    <div key={index} className={`falt-block ${index % 2 === 1 ? 'flip' : ''} reveal`} style={{display: 'flex', gap: '20px', marginBottom: '40px', flexDirection: index % 2 === 1 ? 'row-reverse' : 'row'}}>
      <div className="falt-copy" style={{flex: '1', color: '#ffffff'}}>
        <div className="falt-num" style={{color: '#ff6b00', fontSize: '1.5rem'}}>0{index + 1}</div>
        <h3 style={{fontFamily: 'Plus Jakarta Sans', fontSize: '1.75rem', marginBottom: '10px'}}>{section.title}</h3>
        <p style={{fontFamily: 'googleSansFlex, googleSansFlex Fallback', lineHeight: '1.5'}}>{section.description}</p>
        <div className="falt-chips" style={{marginTop: '10px', display: 'flex', gap: '5px', flexWrap: 'wrap'}}>
          {section.features.map((feature, i) => (
            <div key={i} className="falt-chip" style={{background: '#ff6b00', padding: '5px 10px', borderRadius: '16px', color: '#ffffff', fontSize: '0.875rem'}}>{feature}</div>
          ))}
        </div>
      </div>
      <div className="falt-visual" style={{flex: '1'}}>
        {section.video_url ? (
          <video autoPlay muted loop playsInline style={{width: '100%', borderRadius: '12px'}}>
            <source src={section.video_url} type="video/mp4" />
          </video>
        ) : (
          <img src={section.image_url} alt={`Feature ${section.num}`} style={{width: '100%', borderRadius: '12px', display: 'block'}} />
        )}
      </div>
    </div>
  ))}
</section>

<section className="mns" style={{backgroundColor:'#0f172a',padding:'60px 0',position:'relative'}}>
  <div style={{position:'relative',overflow:'hidden',maxHeight:'500px'}}>
    <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro-by-bytedance/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
  <div style={{maxWidth:'1200px',margin:'0 auto',textAlign:'center',padding:'20px'}}>
    <h2 className="mns-head" style={{color:'#ffffff',fontFamily:'Plus Jakarta Sans',marginBottom:'20px',fontSize:'clamp(32px, 4vw, 48px)'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <p className="mns-label" style={{color:'#ffffff',fontFamily:'googleSansFlex, "googleSansFlex Fallback"',marginBottom:'40px',fontSize:'18px'}}>FEATURES</p>
    <div className="mns-grid" style={{display:'flex',justifyContent:'space-around',gap:'20px',flexWrap:'wrap'}}>

      {[{publication:"TechCrunch",headline:"\"ByteDance's new AI models revolutionize creative industries\""},{publication:"The Verge",headline:"\"Seedream and Seedance set benchmarks in AI visual creations\""}].map((item, index) => (
        <div key={index} className="mns-card" style={{backgroundColor:'#111827',padding:'20px',borderRadius:'12px',flex:'1 1 calc(33.333% - 20px)',minWidth:'260px',maxWidth:'360px',animation:'fadeIn 0.3s ease-out',color:'#ffffff'}}>
          <p className="mns-pub" style={{fontFamily:'googleSansFlex, "googleSansFlex Fallback"',fontSize:'16px',fontWeight:'bold',marginBottom:'10px'}}>{item.publication}</p>
          <p className="mns-text" style={{fontFamily:'googleSansFlex, "googleSansFlex Fallback"',fontSize:'14px',fontStyle:'italic'}}>{item.headline}</p>
        </div>
      ))}

    </div>
  </div>
</section>

<section className="fig">
  <div className="fig-head" style={{position:'relative', padding:'2rem', backgroundColor:'#111827', color:'var(--accent)'}}>
    <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro-by-bytedance/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
    <div style={{position:'relative',zIndex:1}}>
      <span className="eyebrow" style={{fontSize:'14px',textTransform:'uppercase',color:'#ff6b00'}}>Section Label</span>
      <h2 style={{fontSize:'clamp(32px,5vw,60px)',fontFamily:'Plus Jakarta Sans',color:'var(--accent)',margin:'16px 0'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
      <p style={{fontFamily:'googleSansFlex, "googleSansFlex Fallback"',fontSize:'16px',lineHeight:1.5}}>Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
    </div>
  </div>
  <div className="fig-grid stagger-parent" style={{display:'flex',flexWrap:'wrap',gap:'16px',padding:'2rem',marginTop:'-100px',position:'relative',zIndex:1}}>
    {[
      {title:"Advanced Text–Image Alignment",description:"Accurately translates prompts into visuals with improved semantic understanding."},
      {title:"High-Resolution Output",description:"Generate native images up to 1K–4K resolution with strong visual fidelity."},
      {title:"Superior Typographic Rendering",description:"Optimized for posters, ads, and text-heavy visual designs."},
      {title:"Multi-Image Composition with Identity Preservation",description:"Combines multiple inputs while accurately maintaining subject consistency."},
      {title:"Strong Structural Fidelity",description:"Maintains composition, layout, and scene structure with high precision."},
      {title:"Key Capabilities of Seedance 1.5 Pro",description:"Seedance enables professional-grade AI video production with narrative coherence and realistic motion."}
    ].map((feature, index) => (
      <div className="fig-card" key={index} style={{backgroundColor:'#0f172a',borderRadius:'12px',flex:'1 1 calc(33.333% - 16px)',display:'flex',flexDirection:'column',alignItems:'center',textAlign:'center',padding:'16px',color:'var(--accent)',transform:'translateY(20px)',opacity:0}}>
        <div className="fig-icon" style={{marginBottom:'8px',color:'var(--accent)'}}>
          <svg width="24" height="24" fill="currentColor"><circle cx="12" cy="12" r="8"/></svg>
        </div>
        <h4 className="inline" style={{fontSize:'18px',marginBottom:'8px',fontWeight:'bold'}}>{feature.title}</h4>
        <p className="inline" style={{fontSize:'14px',lineHeight:'1.4'}}>{feature.description}</p>
      </div>
    ))}
  </div>
</section>

<section className="gvw" style={{ backgroundColor: '#111827', padding: '60px 0', position: 'relative' }}>
  <div style={{ position: 'relative', overflow: 'hidden', borderRadius: '12px', maxHeight: '400px' }}>
    <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro-by-bytedance/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}/>
  </div>
  <div className="gvw-head" style={{ textAlign: 'center', marginTop: '40px', color: '#ffffff' }}>
    <h2 style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontSize: 'clamp(32px, 5vw, 60px)', margin: '0 0 10px', color: '#ffffff' }}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <p style={{ fontFamily: 'googleSansFlex, sans-serif', color: '#bbb', maxWidth: '600px', margin: '0 auto' }}>Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
  </div>
  <div className="gvw-grid" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-between', marginTop: '40px' }}>
    {[{"url":"https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4","caption":"Seedream 4.5"},{"url":"https://cdn.web.imagine.art/imagine-one/cdge/sora2.mp4","caption":"Seedance 1.5 Pro"},{"url":"https://cdn.web.imagine.art/imagine-one/cdge/sora33.mp4","caption":"Demo 3"},{"url":"https://cdn.web.imagine.art/remote-config/assets/video_effects/sd/podcast.mp4","caption":"Demo 4"}].map((video, index) => (
      <div key={index} className="gvw-card anim-scale" style={{ width: 'calc(50% - 10px)', marginBottom: '20px' }}>
        <video className="gvw-video" autoPlay muted loop playsInline style={{ width: '100%', borderRadius: '12px' }}>
          <source src={video.url} type="video/mp4"/>
        </video>
        <div className="gvw-caption" style={{ textAlign: 'center', marginTop: '10px', color: '#ffffff', fontFamily: 'googleSansFlex, sans-serif' }}>{video.caption}</div>
      </div>
    ))}
  </div>
</section>

<section className="wtj" style={{ background: '#111827', color: '#ffffff', fontFamily: 'googleSansFlex, "googleSansFlex Fallback"' }}>
  <div className="wtj-inner" style={{ padding: '40px', maxWidth: '1200px', margin: 'auto', position: 'relative', overflow: 'hidden' }}>
    <div className="wtj-top" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
      <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" className="wtj-logo" style={{ width: '150px' }} />
      <div className="wtj-tagline" style={{ fontSize: '18px' }}>India's #1 B2B Software Marketplace</div>
    </div>
    <div style={{ position: 'relative', height: '400px' }}>
      <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro-by-bytedance/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
    </div>
    <div className="wtj-divider" style={{ height: '2px', background: '#ffffff', margin: '40px 0' }}></div>
    <div className="wtj-grid" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      {[
        { title: "Free Expert Consultation", description: "Get matched with right software" },
        { title: "Verified Reviews", description: "1000+ genuine customer reviews" },
        { title: "Best Price Guarantee", description: "Competitive pricing assured" },
        { title: "Dedicated Support", description: "Post-sale onboarding assistance" }
      ].map((point, index) => (
        <div key={index} className="wtj-card" style={{ flex: '1 1 calc(25% - 20px)', padding: '20px', background: '#1a1a1a', borderRadius: '8px', boxSizing: 'border-box', transition: 'transform 0.3s', animation: `stagger 0.${index + 1}s ease-out` }}>
          <div className="wtj-icon" style={{ marginBottom: '20px', color: '#ff6b00' }}>
            <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
              <circle cx="12" cy="12" r="12" />
            </svg>
          </div>
          <h4 style={{ fontSize: '18px', margin: '0 0 10px 0' }}>{point.title}</h4>
          <p style={{ fontSize: '16px', lineHeight: '1.5' }}>{point.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="pdc" style={{background:'#111827',color:'#ffffff',padding:'40px 20px',position:'relative'}}>
  <div className="pdc-head anim d0" style={{marginBottom:'20px',textAlign:'center'}}>
    <div className="eyebrow" style={{color:'#ff6b00',marginBottom:'10px'}}>Pricing & Plans</div>
    <h2 style={{fontFamily:'Plus Jakarta Sans',fontSize:'clamp(32px,5vw,60px)',fontWeight:'700',lineHeight:'1.2'}}>
      Create High-Quality AI Images & Videos with ByteDance Generative Models
    </h2>
  </div>
  <div className="pdc-grid" style={{display:'flex',gap:'20px',justifyContent:'center',flexWrap:'wrap'}}>
    {[{"name":"Seedream 4.5 (AI Image Generation)","price":"","originalPrice":"","discount":"20% Off","period":"per user/month","description":"","includes":["High-resolution image generation (up to 4K quality)","Text-to-image & multimodal image editing","Multi-image composition for complex visuals","Enhanced typographic rendering for posters, ads & text-heavy designs"],"highlighted":true},{"name":"Seedance 1.5 Pro (AI Video Generation)","price":"Starting at $1,000/month/","originalPrice":"","discount":"","period":"per user/month","description":"","includes":["Text-to-video generation with cinematic output","Native audio + video generation (synchronized)","Multilingual lip-sync capabilities","Fast inference for quicker video production"],"highlighted":false}]
      .map((plan, i) => (
        <div key={i} className={`pdc-card ${plan.highlighted ? 'featured' : ''}`} style={{background:'#020617',padding:'20px',borderRadius:'12px',flex:'1 0 300px',boxSizing:'border-box'}}>
          {plan.highlighted && <div className="pdc-badge" style={{position:'absolute',top:'10px',right:'10px',background:'#ff6b00',color:'#ffffff',padding:'5px 10px',borderRadius:'12px'}}>{plan.discount}</div>}
          <div className="pdc-plan" style={{fontWeight:'bold',fontSize:'18px',marginBottom:'10px'}}>{plan.name}</div>
          <div className="pdc-price" style={{marginBottom:'10px'}}>
            <span className="pdc-amount" style={{fontSize:'24px',color:'#ff6b00'}}>{plan.price || "Contact for Pricing"}</span>
            {plan.originalPrice && <span className="pdc-old" style={{textDecoration:'line-through',marginLeft:'10px',color:'#bbbbbb'}}>{plan.originalPrice}</span>}
          </div>
          <div className="pdc-period" style={{color:'#aaaaaa',marginBottom:'20px'}}>{plan.period}</div>
          <div className="pdc-desc" style={{marginBottom:'15px',color:'#cccccc'}}>{plan.description}</div>
          <ul className="pdc-list" style={{listStyle:'none',padding:'0',margin:'0 0 15px 0'}}>
            {plan.includes.map((include, j) => (
              <li key={j} style={{display:'flex',alignItems:'center',marginBottom:'8px'}}>
                <svg style={{width:'16px',height:'16px',marginRight:'10px',fill:'#ff6b00'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M20.29 5.71a1 1 0 0 0-1.41 0L10 14.59l-3.29-3.3A1 1 0 0 0 5.29 12.71l4 4a1 1 0 0 0 1.41 0l10-10a1 1 0 0 0 0-1.41z"></path></svg>
                <span>{include}</span>
              </li>
            ))}
          </ul>
          <button className="pdc-btn" style={{background:'#ff6b00',color:'#ffffff',padding:'10px 20px',border:'none',borderRadius:'8px',cursor:'pointer'}}>Generate with AI</button>
        </div>
      ))}
  </div>
  <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro-by-bytedance/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
</section>

<section className="tcar" style={{backgroundColor:'#0f172a',color:'#ffffff',padding:'80px 0',position:'relative'}}>
  <div style={{position:'relative',height:'100vh',overflow:'hidden'}}>
    <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro-by-bytedance/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
  {(() => {
    const [slide, setSlide] = React.useState(0);
    React.useEffect(() => {
      const t = setInterval(() => setSlide((p) => (p + 1) % testimonials.length), 4000);
      return () => clearInterval(t);
    }, []);
    
    return (
      <div className="container">
        <header className={`tcar-head anim d0`} style={{textAlign:'center', marginBottom: '40px'}}>
          <p className="eyebrow" style={{opacity:0.7,fontWeight:'500',fontSize:'1rem'}}>Testimonials</p>
          <h2 style={{fontSize:'clamp(32px, 5vw, 60px)',fontWeight:'700',lineHeight:'1.2'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
        </header>
        <div className="tcar-layout" style={{display:'flex',gap:'40px',flexDirection:'column',justifyContent:'center',alignItems:'center'}}>
          <div className="tcar-rail" style={{display:'flex',gap:'20px',overflowX:'auto',padding:'20px'}}>
            {[
              {quote:"Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.", author:"Vaishali Saxena", avatar:"/output/generated-assets/seedream-4-5-and-seedance-1-5-pro-by-bytedance/04-6d75b26b02.webp"},
              {quote:"Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling.", author:"Vihaan Pandey", avatar:"/output/generated-assets/seedream-4-5-and-seedance-1-5-pro-by-bytedance/19-761b0d7272.webp"},
              {quote:"The multimodal editing capabilities in Seedream make it easy to refine images with precision.", author:"Anurag Malhotra", avatar:"/output/generated-assets/seedream-4-5-and-seedance-1-5-pro-by-bytedance/23-0518458b81.webp"}
            ].map((testimonial, index) => (
              <div className="tcar-mini" key={index} style={{flex:'0 0 auto',width:'240px'}}>
                <div className="tcar-mini-stars" style={{display:'flex',color:'#ff6b00',marginBottom:'10px'}}>{'★★★★★'}</div>
                <p style={{fontSize:'0.875rem',lineHeight:'1.5',marginBottom:'10px'}}>“{testimonial.quote.substr(0, 60)}...”</p>
                <div style={{display:'flex',alignItems:'center',gap:'10px'}}>
                  <img className="tcar-avatar" src={testimonial.avatar} alt={testimonial.author} style={{width:'40px',height:'40px',borderRadius:'50%'}}/>
                  <div>
                    <span className="tcar-name" style={{display:'block',fontWeight:'600'}}>{testimonial.author}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className={`tcar-stage anim-scale d1`} style={{width:'100%',maxWidth:'600px',overflow:'hidden'}}>
            <div className="tcar-track" style={{display:'flex',transform:`translateX(${-slide * 100}%)`,transition:'transform 0.5s ease-in-out'}}>
              {[
                {quote:"Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.", author:"Vaishali Saxena", role:"Creative Director", company:""},
                {quote:"Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.", author:"Vihaan Pandey", role:"Video Producer", company:""},
                {quote:"The multimodal editing capabilities in Seedream make it easy to refine images with precision.", author:"Anurag Malhotra", role:"Art Director", company:""},
                {quote:"Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation).", author:"Ashutosh Singh", role:"Marketing Manager", company:""},
                {quote:"From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey.", author:"Shrimmi Saxena", role:"Creative Lead", company:""}
              ].map((testimonial, index) => (
                <div className="tcar-slide" key={index} style={{flex:'0 0 100%',padding:'20px',boxSizing:'border-box'}}>
                  <div className="tcar-quote" style={{marginBottom:'20px'}}>
                    <p style={{fontSize:'1rem',lineHeight:'1.6',marginBottom:'20px'}}>“{testimonial.quote}”</p>
                    <div className="tcar-stars" style={{display:'flex',color:'#ff6b00'}}>{'★★★★★'}</div>
                  </div>
                  <div className="tcar-text" style={{display:'flex',alignItems:'center',gap:'15px'}}>
                    {testimonial.avatar ? <img className="tcar-avatar" src={testimonial.avatar} alt={testimonial.author} style={{width:'50px',height:'50px',borderRadius:'50%'}}/> : <div className="tcar-avatar" style={{width:'50px',height:'50px',borderRadius:'50%',backgroundColor:'#111827',display:'flex',justifyContent:'center',alignItems:'center',fontSize:'16px'}}>{testimonial.author.split(' ').map(n => n[0]).join('')}</div>}
                    <div>
                      <strong className="tcar-name" style={{display:'block',fontSize:'0.875rem',fontWeight:'600'}}>{testimonial.author}</strong>
                      <span className="tcar-role" style={{display:'block',fontSize:'0.75rem',opacity:0.75}}>{testimonial.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="tcar-dots" style={{marginTop:'20px',display:'flex',justifyContent:'center',gap:'10px'}}>
            {new Array(5).fill().map((_, index) => (
              <button key={index} onClick={() => setSlide(index)} className={`tcar-dot ${index === slide ? 'active' : ''}`} style={{width:'10px',height:'10px',borderRadius:'50%',backgroundColor:index === slide ? '#ff6b00' : '#555'}}></button>
            ))}
          </div>
        </div>
      </div>
    );
  })()}
</section>

<section className="ctavb" style={{position:'relative',background:'#0f172a',padding:'60px 0',color:'#ffffff',textAlign:'center'}}>
  <div className="ctavb-bg" style={{position:'absolute',inset:0,zIndex:0,overflow:'hidden'}}>
    <video autoPlay muted loop playsInline style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}>
      <source src="https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4" type="video/mp4"/>
      <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro-by-bytedance/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
    </video>
  </div>
  <div className="ctavb-overlay" style={{position:'relative',padding:'60px',zIndex:1,backgroundColor:'rgba(15,23,42,0.8)',borderRadius:'12px',maxWidth:'800px',margin:'0 auto'}}>
    <div className="ctavb-inner">
      <h2 className="anim d0" style={{fontSize:'clamp(32px, 5vw, 60px)',marginBottom:'20px',fontFamily:'Plus Jakarta Sans'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
      <p className="anim d1" style={{fontFamily:'googleSansFlex, googleSansFlex Fallback',marginBottom:'40px'}}>Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
      <a href="#lead-form" className="ctavb-btn anim d2" style={{display:'inline-block',padding:'15px 30px',backgroundColor:'#ff6b00',color:'#ffffff',borderRadius:'8px',textDecoration:'none',fontWeight:'600'}} >Generate with AI</a>
    </div>
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
