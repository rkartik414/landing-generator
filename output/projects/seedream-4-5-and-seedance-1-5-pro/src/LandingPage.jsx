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
  const accentColor = "#ff6b00";
  const primaryColor = "#ff6b00";
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
     <nav style={{position:'sticky',top:0,zIndex:50,background:'rgba(15,23,42,0.92)',backdropFilter:'blur(16px)',borderBottom:'1px solid rgba(255,255,255,0.1)',padding:'12px 0'}}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16}}>
          <span style={{fontWeight:800,fontSize:20,color:'#ff6b00'}}>Seedream 4.5 and Seedance 1.5 Pro</span>
          <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28" alt="Techjockey" style={{opacity:0.95}} />
          <a href="#lead-form" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:12,fontSize:13,fontWeight:600,padding:'10px 20px',background:'var(--accent)',color:'#fff',border:'none',cursor:'pointer',textDecoration:'none'}}>Get Free Consultation</a>
        </div>
      </nav>

      <section className="hvf" style={{display: 'flex', flexDirection: 'row', position: 'relative', backgroundColor: '#0f172a'}}>
  <div className="hvf-video">
    <video autoPlay muted loop playsInline style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0}}>
      <source src="https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4" type="video/mp4"/>
    </video>
    <div className="hvf-overlay" style={{position: 'absolute', inset: 0, backgroundColor: 'rgba(0, 0, 0, 0.5)'}}></div>
  </div>
  <div className="hvf-content" style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '2rem', width: '50%', zIndex: 1}}>
    <div className="hvf-inner">
      <h1 className="hvf-h1 anim d0" style={{color: '#fff', fontFamily: 'Plus Jakarta Sans', fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: 1.2}}>
        Create High-Quality AI Images & Videos with <span className="hvf-accent" style={{color: '#ff6b00'}}>Seedream 4.5 and Seedance 1.5 Pro</span>
      </h1>
      <p className="hvf-desc anim d1" style={{fontFamily: 'googleSansFlex', color: '#ddd', margin: '1rem 0'}}>
        Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
      </p>
      <div className="hvf-chips" style={{display: 'flex', gap: '0.5rem', marginBottom: '1rem'}}>
        {["Feature 1", "Additional Feature"].map((chip, index) => (
          <span key={index} className="hvf-chip" style={{backgroundColor: '#1a1a1a', padding: '0.5rem', borderRadius: '16px', color: '#fff', fontFamily: 'googleSansFlex'}}>
            {chip}
          </span>
        ))}
      </div>
      <button className="hvf-btn" style={{backgroundColor: '#ff6b00', color: '#fff', padding: '1rem 2rem', borderRadius: '8px', fontFamily: 'Plus Jakarta Sans', cursor: 'pointer'}}>
        Generate with AI
      </button>
    </div>
  </div>
  <div style={{width: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center', backgroundColor: '#111827', zIndex: 1}}>
    <form className="hvf-proof" style={{display: 'flex', flexDirection: 'column', gap: '1rem', width: '80%'}}>
      {['Name', 'Email', 'Phone', 'Company'].map((placeholder, index) => (
        <input key={index} type="text" placeholder={placeholder} className="hvf-input anim d2" style={{padding: '0.75rem', borderRadius: '8px', border: 'none', outline: 'none', fontFamily: 'googleSansFlex'}}/>
      ))}
      <button type="submit" className="hvf-btn anim d2" style={{backgroundColor: '#ff6b00', color: '#fff', padding: '1rem', borderRadius: '8px', fontFamily: 'Plus Jakarta Sans', cursor: 'pointer'}}>
        Submit
      </button>
    </form>
  </div>
</section>

<section className="tms" style={{background:'#111827',padding:'60px 0',position:'relative'}}>
  <div className="tms-grid" style={{display:'flex',justifyContent:'space-around',alignItems:'center',maxWidth:'1200px',margin:'0 auto'}}>
    <div className={`tms-cell reveal`} style={{textAlign:'center',flex:'1',margin:'0 10px'}}>
      <div className="tms-val" data-count="4500" style={{fontSize:'2.5em',fontWeight:'bold',color:'#ff6b00'}}>4,500+</div>
      <div className="tms-label" style={{marginTop:'10px',fontSize:'1.1em',color:'#ffffff'}}>Users Worldwide</div>
      <div className="tms-note" style={{marginTop:'5px',fontSize:'0.9em',color:'#9ca3af'}}>//</div>
    </div>
    <div className={`tms-cell reveal`} style={{textAlign:'center',flex:'1',margin:'0 10px'}}>
      <div className="tms-val" data-count="98" style={{fontSize:'2.5em',fontWeight:'bold',color:'#ff6b00'}}>98%</div>
      <div className="tms-label" style={{marginTop:'10px',fontSize:'1.1em',color:'#ffffff'}}>Satisfaction Rate</div>
      <div className="tms-note" style={{marginTop:'5px',fontSize:'0.9em',color:'#9ca3af'}}>//</div>
    </div>
    <div className={`tms-cell reveal`} style={{textAlign:'center',flex:'1',margin:'0 10px'}}>
      <div className="tms-val" data-count="300" style={{fontSize:'2.5em',fontWeight:'bold',color:'#ff6b00'}}>300+</div>
      <div className="tms-label" style={{marginTop:'10px',fontSize:'1.1em',color:'#ffffff'}}>Projects Completed</div>
      <div className="tms-note" style={{marginTop:'5px',fontSize:'0.9em',color:'#9ca3af'}}>//</div>
    </div>
  </div>
  <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0,zIndex:'-1'}}/>
</section>

<section className="falt" style={{backgroundColor: '#111827', color: '#ffffff', padding: '60px 0', position: 'relative'}}>
  <div className="falt-head anim d0" style={{textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
    <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
    <div className="eyebrow" style={{color: '#ff6b00', fontWeight: 'bold', marginBottom: '20px'}}>Features</div>
    <h2 style={{fontFamily: 'Plus Jakarta Sans', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: '600', margin: '0', wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
  </div>
  {[{"num":"01","title":"AI Image Generation with Seedream 4.5","description":"Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.","features":["Advanced Text–Image Alignment","High-Resolution Output","Superior Typographic Rendering","Multi-Image Composition with Identity Preservation","Strong Structural Fidelity"],"image_url":"/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/09-5d90f4cffc.png","video_url":""},{"num":"02","title":"AI Video Generation with Seedance 1.5 Pro by Bytedance","description":"Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.","features":["Key Capabilities of Seedance 1.5 Pro","Text-to-Video Generation","Audio-Visual Synchronization","Multilingual Lip-Sync","Cinematic Camera Control","10× Faster Inference"],"image_url":"/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/05-c4e1793d4f.webp","video_url":""}].map((section, index) => (
    <div className={`falt-block ${index % 2 !== 0 ? 'flip' : ''} reveal`} key={index} style={{display: 'flex', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', alignItems: 'center', padding: '40px 0'}}>
      <div className="falt-copy" style={{flex: '1', padding: '20px'}}>
        <div className="falt-num" style={{color: '#ff6b00', fontSize: '24px', fontWeight: 'bold'}}>0{section.num}</div>
        <h3 style={{fontFamily: 'Plus Jakarta Sans', fontSize: '24px', fontWeight: '600', margin: '20px 0'}}>{section.title}</h3>
        <p style={{fontFamily: 'googleSansFlex, googleSansFlex Fallback', fontSize: '16px', lineHeight: '1.6'}}>{section.description}</p>
        <div className="falt-chips" style={{marginTop: '20px', display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
          {section.features.map((feature, i) => (
            <span key={i} className="falt-chip" style={{backgroundColor: '#1a1a1a', padding: '8px 12px', borderRadius: '8px', color: '#ffffff'}}>{feature}</span>
          ))}
        </div>
      </div>
      <div className="falt-visual" style={{flex: '1', padding: '20px'}}>
        {section.image_url ? (
          <img src={section.image_url} alt={`Feature ${section.num}`} style={{width:'100%',borderRadius:'12px',display:'block'}}/>
        ) : (
          <div className="falt-visual-dark" style={{backgroundColor: '#0f172a', borderRadius: '12px', height: '300px'}}/>
        )}
      </div>
    </div>
  ))}
</section>

<section className="mns" style={{backgroundColor:'#111827',color:'#ffffff',padding:'60px 0',position:'relative'}}>
  <div className="mns-head" style={{textAlign:'center',position:'relative',zIndex:1,paddingBottom:'40px'}}>
    <h2 className="mns-label" style={{fontFamily:'Plus Jakarta Sans',fontSize:'clamp(32px,5vw,48px)',color:'#ff6b00',marginBottom:'20px'}}>FEATURES</h2>
    <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
  <div className="mns-grid" style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap',gap:'20px'}}>

    {[{"publication":"TechCrunch","headline":"\"Seedream redefines creative workflows with its AI imagery capabilities.\""},
      {"publication":"Forbes","headline":"\"Seedance is a game-changer for video production professionals.\""},
      {"publication":"The Verge","headline":"\"ByteDance's generative models set a new standard in AI content creation.\""}]
    .map((item, index) => (
      <div key={index} className="mns-card reveal" style={{maxWidth:'300px',padding:'20px',backgroundColor:'#1a1a1a',borderRadius:'8px',boxShadow:'0 4px 12px rgba(0,0,0,0.1)',transform:'scale(1)',transition:'transform 0.3s ease-in-out',cursor:'default'}}>

        <div className="mns-pub" style={{fontFamily:'googleSansFlex',fontSize:'18px',fontWeight:'bold',color:'#ff6b00',marginBottom:'10px'}}>
          {item.publication}
        </div>
        <div className="mns-text" style={{fontFamily:'googleSansFlex',fontSize:'16px',color:'#ffffff'}}>
          {item.headline}
        </div>

      </div>
    ))}
  </div>
</section>

<section className={`fig ${false ? 'dark' : ''}`} style={{position:'relative',background:'#0f172a',padding:'48px 0'}}>
  <div style={{position:'relative',zIndex:1}}>
    <div className="fig-head" style={{textAlign:'center',marginBottom:'24px'}}>
      <span className="eyebrow" style={{color:'#ff6b00',fontSize:'14px',fontWeight:'600'}}>Explore Our Features</span>
      <h2 style={{color:'#fff',fontSize:'clamp(32px,5vw,60px)',fontFamily:'Plus Jakarta Sans, sans-serif',lineHeight:1.2,wordBreak:'normal',overflowWrap:'normal',hyphens:'none'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
      <p style={{color:'#ccc',marginTop:'16px',fontSize:'16px',lineHeight:1.6,fontFamily:'googleSansFlex, sans-serif'}}>Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
    </div>
    <div className={`fig-grid stagger-parent`} style={{display:'flex',flexWrap:'wrap',gap:'24px',justifyContent:'center'}}>
      {[{"title":"Advanced Text–Image Alignment","description":"Accurately translates prompts into visuals with improved semantic understanding."},{"title":"High-Resolution Output","description":"Generate native images up to 1K–4K resolution with strong visual fidelity."},{"title":"Superior Typographic Rendering","description":"Optimized for posters, ads, and text-heavy visual designs."},{"title":"Multi-Image Composition with Identity Preservation","description":"Combines multiple inputs while accurately maintaining subject consistency."},{"title":"Strong Structural Fidelity","description":"Maintains composition, layout, and scene structure with high precision."},{"title":"Key Capabilities of Seedance 1.5 Pro","description":"Seedance enables professional-grade AI video production with narrative coherence and realistic motion."}].map((feature, i) => (
        <div key={i} className="fig-card" style={{background:'#111827',borderRadius:'12px',padding:'20px',flex:'1 1 calc(33% - 24px)',minWidth:'280px',color:'#fff',position:'relative',transition:'transform 0.3s ease',willChange:'transform'}}>
          <div style={{display:'flex',alignItems:'center',marginBottom:'12px'}}>
            <span className="fig-icon" style={{width:'16px',height:'16px',display:'inline-block',background:'#ff6b00',borderRadius:'8px',marginRight:'8px'}}></span>
            <h4 style={{fontSize:'18px',fontWeight:'600',margin:0}}>{feature.title}</h4>
          </div>
          <p style={{fontSize:'14px',lineHeight:1.5}}>{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
  <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}} />
</section>

<section className="gvw" style={{background:'#0f172a',color:'#fff',padding:'60px 0',position:'relative',zIndex:1}}>
  <div className="container" style={{position:'relative', zIndex:2}}>
    <header className="gvw-head" style={{textAlign:'center',marginBottom:'40px'}}>
      <h2 style={{fontFamily:'Plus Jakarta Sans',fontSize:'clamp(32px, 5vw, 60px)',color:'#ff6b00'}}>
        Create High-Quality AI Images & Videos with ByteDance Generative Models
      </h2>
      <p style={{fontFamily:'googleSansFlex, "googleSansFlex Fallback"',fontSize:'18px',lineHeight:1.7,maxWidth:'800px',margin:'0 auto'}}>
        Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
      </p>
    </header>
    <div className="gvw-grid" style={{display:'flex',flexWrap:'wrap',gap:'20px',justifyContent:'center'}}>
      {[{"url":"https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4","caption":"Feature 1"},{"url":"https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiModalInput_1.mp4","caption":"Additional Feature"},{"url":"https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ConsistentCharacters.mp4","caption":"Demo 3"},{"url":"https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ReferenceControl.mp4","caption":"Demo 4"}].map((video, i) => (
        <div className="gvw-card anim-scale" key={i} style={{flex:'1 1 calc(25% - 20px)',borderRadius:'12px',overflow:'hidden',position:'relative',background:'#111827'}}>
          <video className="gvw-video" autoPlay muted loop playsInline style={{width:'100%',borderRadius:'12px',display:'block'}}>
            <source src={video.url} type="video/mp4"/>
          </video>
          <div className="gvw-caption" style={{padding:'10px',background:'#0f172a',color:'#fff',textAlign:'center',position:'absolute',bottom:0,width:'100%'}}>
            {video.caption}
          </div>
        </div>
      ))}
    </div>
    <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
</section>

<section className="wtj" style={{background:'#111827',padding:'60px 20px',position:'relative'}}>
  <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0,zIndex:-1}}/>
  <div className="wtj-inner" style={{maxWidth:'1100px',margin:'0 auto',position:'relative',zIndex:1}}>
    <div className="wtj-top" style={{textAlign:'center',marginBottom:'40px'}}>
      <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" className="wtj-logo" style={{width:'180px',marginBottom:'10px'}} />
      <div className="wtj-divider" style={{height:'1px',background:'#ff6b00',margin:'20px 0'}}></div>
      <h2 className="wtj-tagline" style={{color:'#fff',fontSize:'1.5rem',fontFamily:'Plus Jakarta Sans', marginBottom:'20px'}}>India's #1 B2B Software Marketplace</h2>
    </div>
    <div className="wtj-grid" style={{display:'grid',gridTemplateColumns:'repeat(auto-fit,minmax(250px,1fr))',gap:'20px',animation:'stagger 600ms ease-out'}}>
      {[
        {title: "Free Expert Consultation", description: "Get matched with the right software."},
        {title: "Verified Reviews", description: "1000+ genuine customer reviews."},
        {title: "Best Price Guarantee", description: "Competitive pricing assured."},
        {title: "Dedicated Support", description: "Post-sale onboarding assistance."}
      ].map((point, i) => (
        <div key={i} className="wtj-card" style={{background:'#1a1a1a',padding:'20px',borderRadius:'12px',boxShadow:'0 2px 4px rgba(0,0,0,0.2)'}}>
          <svg className="wtj-icon" width="24" height="24" fill="currentColor" style={{marginBottom:'10px',color:'#ff6b00'}} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18a8 8 0 110-16 8 8 0 010 16zm1-13h-2v6h2V7zm0 8h-2v2h2v-2z"/></svg>
          <h4 style={{color:'#ff6b00',fontSize:'1.2rem',marginBottom:'10px'}}>{point.title}</h4>
          <p style={{color:'#fff',fontSize:'1rem',lineHeight:'1.5'}}>{point.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="pdc" style={{background:'#0f172a',padding:'50px 0',position:'relative',color:'#fff'}}>
  <div className="pdc-head anim d0" style={{textAlign:'center',position:'relative',paddingBottom:'20px'}}>
    <h2 style={{fontSize:'clamp(32px, 5vw, 60px)',fontFamily:'Plus Jakarta Sans',marginBottom:'20px',wordBreak:'normal',overflowWrap:'normal',hyphens:'none'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
  <div className="pdc-grid" style={{display:'flex',justifyContent:'center',gap:'20px',flexWrap:'wrap',marginTop:'40px',position:'relative'}}>
    {[{"name":"Seedream 4.5 (AI Image Generation)","price":"","originalPrice":"","discount":"","period":"per user/month","description":"","includes":["High-resolution image generation (up to 4K quality)","Text-to-image & multimodal image editing","Multi-image composition for complex visuals","Enhanced typographic rendering for posters, ads & text-heavy designs"],"highlighted":true},{"name":"Seedance 1.5 Pro (AI Video Generation)","price":"Starting at $1,000/month/","originalPrice":"","discount":"","period":"per user/month","description":"","includes":["Text-to-video generation with cinematic output","Native audio + video generation (synchronized)","Multilingual lip-sync capabilities","Fast inference for quicker video production"],"highlighted":false}].map((plan, i) => (
      <div key={i} className={`pdc-card ${plan.highlighted ? 'featured' : ''}`} style={{background:'#111827',padding:'20px',borderRadius:'12px',width:'300px',position:'relative'}}>
        {plan.highlighted && <span className="pdc-badge" style={{position:'absolute',top:'20px',right:'20px',background:'#ff6b00',color:'#fff',borderRadius:'8px',padding:'4px 8px'}}>Best Value</span>}
        <h3 className="pdc-plan" style={{fontFamily:'Plus Jakarta Sans',fontSize:'24px',marginBottom:'12px'}}>{plan.name}</h3>
        <div className="pdc-price" style={{marginBottom:'20px'}}>
          <span className="pdc-amount" style={{fontSize:'28px',fontWeight:'bold'}}>{plan.price || 'Contact for Pricing'}</span>
          {plan.originalPrice && <span className="pdc-old" style={{marginLeft:'8px',textDecoration:'line-through',color:'#ccc'}}>{plan.originalPrice}</span>}
          <span className="pdc-period" style={{display:'block',marginTop:'5px',color:'#ccc'}}>{plan.period}</span>
        </div>
        <p className="pdc-desc" style={{fontFamily:'googleSansFlex, googleSansFlex Fallback',marginBottom:'20px'}}>{plan.description}</p>
        <ul className="pdc-list" style={{listStyleType:'none',padding:0,margin:'20px 0'}}>
          {plan.includes.map((feature, j) => (
            <li key={j} className="pdc-check" style={{marginBottom:'10px',display:'flex',alignItems:'center'}}>
              <svg width="16" height="16" fill="#ff6b00" style={{marginRight:'8px'}} xmlns="http://www.w3.org/2000/svg"><path d="M6.173 11.243l1.414-1.414 3.536 3.536 1.415-1.415-4.95-4.95-4.95 4.95 1.414 1.415z"/></svg>
              <span>{feature}</span>
            </li>
          ))}
        </ul>
        <button className="pdc-btn" style={{background:'#ff6b00',color:'#fff',padding:'12px 24px',borderRadius:'6px',border:'none',cursor:'pointer'}}>Generate with AI</button>
      </div>
    ))}
  </div>
</section>

const { useState, useEffect } = React;

function LandingPage() {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % 5), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="tcar" style={{ background: "#111827", color: "#ffffff", fontFamily: "googleSansFlex, 'googleSansFlex Fallback'", margin: "0", padding: "2rem" }}>
      <div className="tcar-head anim d0" style={{ textAlign: "center", paddingBottom: "1rem" }}>
        <h2 style={{ margin: "0", fontSize: "clamp(32px, 5vw, 60px)", fontFamily: "Plus Jakarta Sans", color: "#ff6b00" }}>
          Create High-Quality AI Images & Videos with ByteDance Generative Models
        </h2>
        <p style={{ margin: "0.5rem 0", opacity: "0.7" }}>
          Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
        </p>
      </div>
      <div className="tcar-layout">
        <div className="tcar-rail" style={{ display: "flex", overflow: "hidden", paddingBottom: "1rem", justifyContent: "space-around" }}>
          {[{quote: "Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.", author: "Vaishali Saxena", role: "Creative Director", avatar: "/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/19-761b0d7272.webp"}, {quote: "Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.", author: "Vihaan Pandey", role: "Video Producer", avatar: "/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/04-6d75b26b02.webp"}, {quote: "The multimodal editing capabilities in Seedream make it easy to refine images with precision.", author: "Anurag Malhotra", role: "Art Director", avatar: ""}].map((testimonial, i) => (
            <div className="tcar-mini" key={i} style={{ flex: "0 0 auto", width: "30%", background: "#0f172a", borderRadius: "12px", padding: "1rem", color: "white" }}>
              <img src={testimonial.avatar} alt={testimonial.author} style={{ borderRadius: "50%", width: "60px", height: "60px" }} />
              <div className="tcar-mini-stars" style={{ color: "#ff6b00", margin: "0.5rem 0" }}>★★★★★</div>
              <p style={{ margin: "0", lineHeight: "1.5" }}>{testimonial.quote.split(' ').slice(0, 20).join(' ')}...</p>
            </div>
          ))}
        </div>
        <div className="tcar-stage anim-scale d1" style={{ width: "100%", overflow: "hidden", position: "relative" }}>
          <div className="tcar-track" style={{ display: "flex", transition: "transform 0.5s ease", transform: `translateX(-${slide * 100}%)` }}>
            {[{quote: "Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.", author: "Vaishali Saxena", role: "Creative Director", avatar: "/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/19-761b0d7272.webp"}, {quote: "Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.", author: "Vihaan Pandey", role: "Video Producer", avatar: "/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/04-6d75b26b02.webp"}, {quote: "The multimodal editing capabilities in Seedream make it easy to refine images with precision.", author: "Anurag Malhotra", role: "Art Director", avatar: ""}, {quote: "Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.", author: "Ashutosh Singh", role: "Marketing Manager", avatar: ""}, {quote: "From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.", author: "Shrimmi Saxena", role: "Creative Lead", avatar: ""}].map((testimonial, i) => (
              <div className="tcar-slide" key={i} style={{ flex: "0 0 100%", boxSizing: "border-box", padding: "2rem", textAlign: "center" }}>
                <div className="tcar-quote" style={{ fontSize: "1.25rem", marginBottom: "0.5rem" }}>{testimonial.quote}</div>
                <div className="tcar-stars" style={{ color: "#ff6b00", marginBottom: "0.5rem" }}>★★★★★</div>
                <div className="tcar-text" style={{ opacity: "0.7" }}>
                  <p className="tcar-author" style={{ margin: "0" }}>
                    <img src={testimonial.avatar} alt={`${testimonial.author} avatar`} className="tcar-avatar" style={{ borderRadius: "50%", width: "60px", height: "60px", marginBottom: "0.5rem" }} />
                  </p>
                  <div className="tcar-name" style={{ fontWeight: "bold" }}>{testimonial.author}</div>
                  <div className="tcar-role" style={{ fontStyle: "italic" }}>{testimonial.role}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tcar-dots" style={{ display: "flex", justifyContent: "center", marginTop: "1rem" }}>
          {[...Array(5)].map((_, i) => (
            <span 
              key={i} 
              className={`tcar-dot ${i === slide ? 'active' : ''}`} 
              style={{margin: '0 8px', cursor: 'pointer', width: "10px", height: "10px", backgroundColor: i === slide ? '#ff6b00' : '#ffffff', borderRadius: '50%', display: 'inline-block' }}
              onClick={() => setSlide(i)}
            ></span>
          ))}
        </div>
      </div>
    </section>
  );
}

<section className="ctavb" style={{position:'relative',background:'#0f172a',padding:'60px 0'}}>
  <div className="ctavb-bg" style={{position:'absolute',inset:0,overflow:'hidden'}}>
    <video autoPlay muted loop playsInline style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}>
      <source src="https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4" type="video/mp4"/>
    </video>
    <div className="ctavb-overlay" style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',background:'rgba(0,0,0,0.4)'}}></div>
  </div>
  <div className="ctavb-inner" style={{position:'relative',zIndex:2,display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',textAlign:'center',color:'#fff'}}>
    <h2 className="anim d0" style={{fontSize:'clamp(32px,5vw,60px)',fontFamily:'Plus Jakarta Sans, sans-serif',marginBottom:'20px'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <p className="anim d1" style={{fontFamily:'googleSansFlex, "googleSansFlex Fallback"',maxWidth:'600px',marginBottom:'40px'}}>Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
    <a href="#lead-form" className="ctavb-btn anim d2" style={{padding:'15px 30px',background:'#ff6b00',borderRadius:'50px',color:'#fff',textDecoration:'none',fontFamily:'Plus Jakarta Sans, sans-serif'}}>Generate with AI</a>
  </div>
  <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/20-be63fbe21f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
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
