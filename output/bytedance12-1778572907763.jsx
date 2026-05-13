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
  const accentColor = "#1a1a1a";
  const primaryColor = "#ff6b00";
  const css = `
    :root {
      --accent: #1a1a1a;
      --primary: #ff6b00;
      --accent-rgb: 26,26,26;
      --bodyBg: #f5f5f5;
      --section-alt: #f8fafc;
      --section-deeper: #f1f5f9;
      --card-bg: #ffffff;
      --card-border: #e5e7eb;
      --text-primary: #111827;
      --text-muted: #6b7280
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
          <span style={{fontWeight:800,fontSize:20,color:'#1a1a1a'}}>Seedream 4.5 and Seedance 1.5 Pro</span>
          <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28" alt="Techjockey" style={{opacity:0.95}} />
          <a href="#lead-form" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:12,fontSize:13,fontWeight:600,padding:'10px 20px',background:'var(--accent)',color:'#fff',border:'none',cursor:'pointer',textDecoration:'none'}}>Get Free Consultation</a>
        </div>
      </nav>

      
<section className="hero-forced-form" style={{position:'relative',overflow:'hidden',background:'#05070d',color:'#fff',minHeight:'92vh',padding:'120px 24px 90px'}}>
  <video autoPlay muted loop playsInline style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:.38}}>
        <source src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/08-8c93b9a6e6.mp4" type="video/mp4" />
      </video>
  <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(5,7,13,.96) 0%,rgba(5,7,13,.84) 46%,rgba(5,7,13,.72) 100%)'}} />

  <div style={{position:'relative',zIndex:2,maxWidth:1180,margin:'0 auto',display:'grid',gridTemplateColumns:'minmax(0,1.05fr) minmax(340px,.75fr)',gap:56,alignItems:'center'}}>
    <div>
      <div style={{display:'inline-flex',padding:'7px 14px',borderRadius:999,background:'rgba(255,107,0,.12)',border:'1px solid rgba(255,107,0,.35)',color:'#1a1a1a',fontSize:12,fontWeight:800,letterSpacing:'.08em',textTransform:'uppercase',marginBottom:22}}>
        AI Image Generation and AI Video Generation
      </div>

      <h1 style={{fontSize:'clamp(40px,5vw,64px)',lineHeight:1.02,letterSpacing:'-.055em',margin:'0 0 24px',maxWidth:760}}>
        Create High-Quality AI Images & Videos with ByteDance Generative Models
      </h1>

      <p style={{fontSize:18,lineHeight:1.75,color:'rgba(255,255,255,.76)',maxWidth:680,margin:'0 0 32px'}}>
        Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
      </p>

      <a href="#lead-form" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',padding:'15px 24px',borderRadius:14,background:'#1a1a1a',color:'#fff',fontWeight:800,textDecoration:'none',boxShadow:'0 18px 44px rgba(255,107,0,.28)'}}>
        Generate with AI
      </a>
    </div>

    <form id="lead-form" style={{background:'rgba(15,23,42,.88)',border:'1px solid rgba(255,255,255,.14)',borderRadius:28,padding:30,boxShadow:'0 28px 90px rgba(0,0,0,.42)',backdropFilter:'blur(14px)'}}>
      <h3 style={{fontSize:26,lineHeight:1.15,margin:'0 0 10px'}}>Get Free Consultation</h3>
      <p style={{fontSize:14,lineHeight:1.6,color:'rgba(255,255,255,.68)',margin:'0 0 22px'}}>Share your details and Techjockey experts will help with pricing, demo, and product guidance.</p>

      <input type="text" placeholder="Name" style={{width:'100%',height:48,marginBottom:14,borderRadius:12,border:'1px solid rgba(255,255,255,.12)',background:'rgba(255,255,255,.06)',color:'#fff',padding:'0 14px',outline:'none'}} />
      <input type="email" placeholder="Email" style={{width:'100%',height:48,marginBottom:14,borderRadius:12,border:'1px solid rgba(255,255,255,.12)',background:'rgba(255,255,255,.06)',color:'#fff',padding:'0 14px',outline:'none'}} />
      <input type="tel" placeholder="Phone" style={{width:'100%',height:48,marginBottom:14,borderRadius:12,border:'1px solid rgba(255,255,255,.12)',background:'rgba(255,255,255,.06)',color:'#fff',padding:'0 14px',outline:'none'}} />
      <input type="text" placeholder="Company" style={{width:'100%',height:48,marginBottom:18,borderRadius:12,border:'1px solid rgba(255,255,255,.12)',background:'rgba(255,255,255,.06)',color:'#fff',padding:'0 14px',outline:'none'}} />

      <button type="submit" style={{width:'100%',height:50,border:0,borderRadius:12,background:'#1a1a1a',color:'#fff',fontWeight:800,cursor:'pointer'}}>
        Generate with AI
      </button>
    </form>
  </div>
</section>

<section className="tms" style={{backgroundColor:'#ffffff',padding:'40px 0'}}>
  <div className="tms-grid" style={{display:'flex',justifyContent:'space-around',alignItems:'center',maxWidth:'1200px',margin:'0 auto'}}>
    <div className="tms-cell reveal stagger-parent" style={{textAlign:'center',flex:'1',padding:'20px'}}>
      <div className="tms-val" data-count="250000" style={{fontSize:'2.5rem',fontWeight:'bold',color:'#1a1a1a'}}>250K+</div>
      <div className="tms-label" style={{marginTop:'10px',fontSize:'1rem',color:'#1a1a1a'}}>AI Images Created</div>
      <div className="tms-note" style={{marginTop:'5px',fontSize:'0.875rem',color:'#333'}}>Using Seedream 4.5</div>
    </div>
    <div className="tms-cell reveal stagger-parent" style={{textAlign:'center',flex:'1',padding:'20px'}}>
      <div className="tms-val" data-count="50000" style={{fontSize:'2.5rem',fontWeight:'bold',color:'#1a1a1a'}}>50K+</div>
      <div className="tms-label" style={{marginTop:'10px',fontSize:'1rem',color:'#1a1a1a'}}>AI Videos Generated</div>
      <div className="tms-note" style={{marginTop:'5px',fontSize:'0.875rem',color:'#333'}}>With Seedance 1.5 Pro</div>
    </div>
    <div className="tms-cell reveal stagger-parent" style={{textAlign:'center',flex:'1',padding:'20px'}}>
      <div className="tms-val" data-count="35000" style={{fontSize:'2.5rem',fontWeight:'bold',color:'#1a1a1a'}}>35K+</div>
      <div className="tms-label" style={{marginTop:'10px',fontSize:'1rem',color:'#1a1a1a'}}>Satisfied Users</div>
      <div className="tms-note" style={{marginTop:'5px',fontSize:'0.875rem',color:'#333'}}>Across Creatives Globally</div>
    </div>
  </div>
  <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/15-41ea7f7485.png" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
</section>

<section className="falt" style={{background:'#f8fafc',padding:'60px 20px'}}>
    <div className="falt-head anim d0" style={{textAlign:'center',marginBottom:'40px'}}>
        <div className="eyebrow" style={{color:'#ff6b00',fontWeight:'bold',marginBottom:'10px'}}>Features Overview</div>
        <h2 style={{fontFamily:'Inter',color:'#1a1a1a',fontSize:'clamp(32px, 5vw, 60px)',wordBreak:'normal',overflowWrap:'normal',hyphens:'none'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
        <div style={{position:'relative',height:'400px',borderRadius:'12px',overflow:'hidden'}}>
            <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/15-41ea7f7485.png" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
        </div>
    </div>
    {[{"num":"01","title":"AI Image Generation with Seedream 4.5","description":"Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.","features":["Advanced Text–Image Alignment","High-Resolution Output","Superior Typographic Rendering","Multi-Image Composition with Identity Preservation","Strong Structural Fidelity"],"image_url":"/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/09-5d90f4cffc.png","video_url":""},{"num":"02","title":"AI Video Generation with Seedance 1.5 Pro by Bytedance","description":"Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.","features":["Text-to-Video Generation","Audio-Visual Synchronization","Multilingual Lip-Sync","Cinematic Camera Control","10× Faster Inference"],"image_url":"/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/12-5d90f4cffc.png","video_url":""}].map((section, index) => (
        <div className={`falt-block reveal ${index % 2 !== 0 ? 'flip' : ''}`} key={index} style={{display:'flex',alignItems:'center',marginBottom:'40px'}}>
            <div style={{flex:'1',padding:'20px'}}>
                <div className="falt-num" style={{color:'#ff6b00',fontSize:'24px',fontWeight:'bold'}}>0{section.num}</div>
                <h3 style={{fontFamily:'Inter',marginTop:'10px',color:'#1a1a1a'}}>{section.title}</h3>
                <p className="falt-copy" style={{fontFamily:'googleSansFlex, "googleSansFlex Fallback"',color:'#1a1a1a',marginTop:'10px'}}>{section.description}</p>
                <div className="falt-chips" style={{marginTop:'20px',display:'flex',flexWrap:'wrap'}}>
                    {section.features.map((feature, i) => (
                        <div className="falt-chip" key={i} style={{background:'#fff',border:'1px solid #ff6b00',borderRadius:'20px',padding:'5px 10px',margin:'5px',color:'#1a1a1a'}}>{feature}</div>
                    ))}
                </div>
            </div>
            <div className="falt-visual" style={{flex:'1',padding:'20px'}}>
                <img src={section.image_url} alt={`Feature ${section.num}`} style={{width:'100%',borderRadius:'12px',display:'block'}}/>
            </div>
        </div>
    ))}
</section>

<section className="fig">
  <div className="fig-head" style={{position:'relative',overflow:'hidden',padding:'32px',textAlign:'center'}}>
    <span className="eyebrow" style={{color:'#ff6b00',fontWeight:'600'}}>Product</span>
    <h2 style={{color:'var(--accent)',fontSize:'clamp(32px, 5vw, 60px)',margin:'16px 0',fontFamily:'Inter',wordBreak:'normal',overflowWrap:'normal',hyphens:'none'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <p style={{color:'#1a1a1a',fontFamily:'googleSansFlex, "googleSansFlex Fallback"',fontSize:'18px',maxWidth:'600px',margin:'0 auto'}}>Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
    <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/15-41ea7f7485.png" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
  <div className="fig-grid" style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'32px',padding:'32px'}}>

    {[{"title":"Advanced Text–Image Alignment","description":"Accurately translates prompts into visuals with improved semantic understanding."},{"title":"High-Resolution Output","description":"Generate native images up to 1K–4K resolution with strong visual fidelity."},{"title":"Superior Typographic Rendering","description":"Optimized for posters, ads, and text-heavy visual designs."},{"title":"Multi-Image Composition with Identity Preservation","description":"Combines multiple inputs while accurately maintaining subject consistency."},{"title":"Strong Structural Fidelity","description":"Maintains composition, layout, and scene structure with high precision."},{"title":"Text-to-Video Generation","description":"Create videos directly from text prompts."}].map((feature, index) => (
      <div className="fig-card reveal" key={index} style={{flex:'1 1 300px',padding:'16px',background:'#fff',borderRadius:'12px',boxShadow:'0 4px 12px rgba(0,0,0,0.1)',transition:'transform 0.3s ease'}}>
        <div className="fig-icon" style={{width:'16px',height:'16px',backgroundColor:'#1a1a1a',borderRadius:'50%',marginBottom:'16px'}}></div>
        <h4 style={{color:'#ff6b00',marginBottom:'8px'}}>{feature.title}</h4>
        <p style={{color:'#1a1a1a'}}>{feature.description}</p>
      </div>
    ))}
  </div>
</section>

<section className="gvw" style={{backgroundColor:'#ffffff', padding:'40px 20px'}}>
  <div className="gvw-head">
    <p className="eyebrow" style={{color:'#ff6b00', marginBottom:'10px'}}>Gallery Video Wall</p>
    <h2 style={{fontFamily:'Inter', fontSize:'clamp(32px, 5vw, 60px)', color:'#1a1a1a', margin:'0 0 20px', wordBreak:'normal'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <p style={{fontFamily:'googleSansFlex, googleSansFlex Fallback', fontSize:'18px', color:'#1a1a1a', lineHeight:1.5}}>Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
  </div>
  <div className="gvw-grid" style={{display:'flex', flexWrap:'wrap', gap:'20px', marginTop:'30px'}}>
    {[{"url":"https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4","caption":"Seedream 4.5"},{"url":"https://cdn.web.imagine.art/imagine-one/cdge/sora2.mp4","caption":"Seedance 1.5 Pro"},{"url":"https://cdn.web.imagine.art/imagine-one/cdge/sora33.mp4","caption":"Demo 3"},{"url":"https://cdn.web.imagine.art/remote-config/assets/video_effects/sd/podcast.mp4","caption":"Demo 4"}].map((video, index) => (
      <div key={index} className={`gvw-card reveal anim-scale`} style={{flex:'1 1 calc(25% - 20px)', borderRadius:'12px', overflow:'hidden', position:'relative'}}>
        <video className="gvw-video" style={{width:'100%', display:'block'}} autoPlay muted loop playsInline>
          <source src={video.url} type="video/mp4"/>
        </video>
        <div className="gvw-caption" style={{position:'absolute', bottom:'0', backgroundColor:'rgba(0, 0, 0, 0.7)', color:'#ffffff', width:'100%', textAlign:'center', padding:'10px'}}>{video.caption}</div>
      </div>
    ))}
  </div>
</section>

<section className="wtj" style={{background:'#ffffff',padding:'60px 20px',position:'relative'}}>
  <div className="wtj-inner" style={{maxWidth:'1200px',margin:'0 auto',position:'relative',zIndex:1}}>
    <div className="wtj-top" style={{display:'flex',alignItems:'center',justifyContent:'space-between',marginBottom:'40px'}}>
      <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" className="wtj-logo" style={{height:'40px'}} />
      <div className="wtj-tagline" style={{fontSize:'18px',fontWeight:600,color:'#1a1a1a'}}>India's #1 B2B Software Marketplace</div>
    </div>
    <div className="wtj-divider" style={{background:'#f8fafc',height:'2px',marginBottom:'40px'}}></div>
    <div className="wtj-grid reveal" style={{display:'flex',flexWrap:'wrap',gap:'20px'}} data-anim="stagger">
      {[{title:'Free Expert Consultation',description:'Get matched with the right software'},
        {title:'Verified Reviews',description:'1000+ genuine customer reviews'},
        {title:'Best Price Guarantee',description:'Competitive pricing assured'},
        {title:'Dedicated Support',description:'Post-sale onboarding assistance'}
      ].map((point, index) => (
        <div key={index} className="wtj-card" style={{flex:'1 1 calc(25% - 20px)',background:'#f8fafc',borderRadius:'12px',padding:'20px',boxShadow:'0 2px 10px rgba(0,0,0,0.05)',transition:'transform 0.3s ease'}}>
          <div className="wtj-icon" style={{width:'40px',height:'40px',background:'#ff6b00',borderRadius:'50%',marginBottom:'16px'}}></div>
          <h4 style={{fontFamily:'Inter',marginBottom:'8px',color:'#1a1a1a',fontSize:'18px'}}>{point.title}</h4>
          <p style={{fontFamily:'googleSansFlex, "googleSansFlex Fallback"',color:'#1a1a1a'}}>{point.description}</p>
        </div>
      ))}
    </div>
  </div>
  <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/15-41ea7f7485.png" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}} />
</section>

<section className="pdc" style={{padding:'60px 20px',background:'#f8fafc'}}>
  <div className="pdc-head anim d0" style={{textAlign:'center',marginBottom:'40px'}}>
    <h2 style={{fontFamily:'Inter',fontSize:'clamp(32px, 5vw, 60px)',color:'#1a1a1a',margin:'0 0 20px'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <p className="eyebrow" style={{color:'#ff6b00',fontWeight:'bold'}}>Plans to Elevate Your Creativity</p>
  </div>
  <div className="pdc-grid" style={{display:'flex',gap:'20px',justifyContent:'center',textAlign:'left'}}>
    {[{"name":"Seedream 4.5 (AI Image Generation)","price":"","originalPrice":"","discount":"20% OFF","period":"per user/month","description":"","includes":["High-resolution image generation (up to 4K quality)","Text-to-image & multimodal image editing","Multi-image composition for complex visuals","Enhanced typographic rendering for posters, ads & text-heavy designs"],"highlighted":true},{"name":"Seedance 1.5 Pro (AI Video Generation)","price":"Starting at $1,000/month/","originalPrice":"","discount":"","period":"per user/month","description":"","includes":["Text-to-video generation with cinematic output","Native audio + video generation (synchronized)","Multilingual lip-sync capabilities","Fast inference for quicker video production"],"highlighted":false}].map((plan, index) => (
      <div key={index} className={`pdc-card ${plan.highlighted ? 'featured' : ''}`} style={{flex:'1 1 45%',padding:'20px',border:'1px solid #ddd',borderRadius:'12px',background:'#fff',position:'relative'}}>
        {plan.highlighted && <div className="pdc-badge" style={{position:'absolute',top:'-10px',right:'-10px',background:'var(--primary)',padding:'5px 10px',borderRadius:'10px',color:'#fff'}}>{plan.discount}</div>}
        <h3 className="pdc-plan" style={{color:'#1a1a1a',fontFamily:'Inter',marginBottom:'10px'}}>{plan.name}</h3>
        <p className="pdc-price" style={{fontSize:'24px',marginBottom:'10px'}}><span className="pdc-amount" style={{color:'#ff6b00',fontWeight:'bold'}}>{plan.price || 'Contact for Pricing'}</span> <span className="pdc-period" style={{color:'#1a1a1a'}}>{plan.period}</span></p>
        {plan.originalPrice && <p className="pdc-old" style={{textDecoration:'line-through',color:'#888'}}>{plan.originalPrice}</p>}
        <p className="pdc-desc" style={{marginBottom:'20px',color:'#555'}}>{plan.description}</p>
        <ul className="pdc-list" style={{listStyle:'none',padding:'0',margin:'0 0 20px'}}>
          {plan.includes.map((item, idx) => (
            <li key={idx} className="pdc-check" style={{display:'flex',alignItems:'center',marginBottom:'10px'}}>
              <svg xmlns="http://www.w3.org/2000/svg" style={{width:'16px',height:'16px',marginRight:'8px',flexShrink:'0'}} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
              </svg>
              <span style={{color:'#1a1a1a'}}>{item}</span>
            </li>
          ))}
        </ul>
        <button className="pdc-btn" style={{backgroundColor:'#ff6b00',color:'#fff',padding:'10px 20px',border:'none',borderRadius:'8px',cursor:'pointer'}}>Generate with AI</button>
      </div>
    ))}
  </div>
  <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/15-41ea7f7485.png" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
</section>

<section className="tcar" style={{ background: '#ffffff', padding: '50px 0', position: 'relative' }}>
  const [slide, setSlide] = React.useState(0);

   
  
  <div className="tcar-head anim d0" style={{ textAlign: 'center', marginBottom: '30px' }}>
    <h2 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontFamily: 'Inter, sans-serif', color: '#1a1a1a' }}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <p style={{ fontFamily: 'googleSansFlex, "googleSansFlex Fallback"', color: '#1a1a1a', maxWidth: '800px', margin: '0 auto' }}>
      Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
    </p>
  </div>
 
  <div className="tcar-layout" style={{ display: 'flex', gap: '20px', overflow: 'hidden', padding: '0 20px'}}>
    {[{"quote":"Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.","author":"Vaishali Saxena","role":"Creative Director","company":"","avatar":"/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/17-761b0d7272.webp"},{"quote":"Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.","author":"Vihaan Pandey","role":"Video Producer","company":"","avatar":"/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/06-6d75b26b02.webp"},{"quote":"The multimodal editing capabilities in Seedream make it easy to refine images with precision.","author":"Anurag Malhotra","role":"Art Director","company":"","avatar":"/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/10-8f0cd584bb.webp"}].map((testimonial, index) => (
      <div key={index} className="tcar-mini" style={{ flex: '1', background: '#f8fafc', padding: '15px', borderRadius: '8px' }}>
        <img src={testimonial.avatar} alt={`${testimonial.author}`} className="tcar-mini-avatar" style={{ width: '40px', height: '40px', borderRadius: '50%' }} />
        <p className="tcar-mini-quote" style={{ color: '#1a1a1a', fontFamily: 'googleSansFlex, "googleSansFlex Fallback"', overflow: 'hidden', textOverflow: 'ellipsis', height: '2.5em', lineHeight: '1.25em' }}>
          {testimonial.quote}
        </p>
        <p className="tcar-mini-author" style={{ color: '#1a1a1a', opacity: '0.6' }}>{testimonial.author}, <span style={{ fontStyle: 'italic' }}>{testimonial.role}</span></p>
      </div>
    ))}
  </div>
  
  <div className="tcar-stage anim-scale d1" style={{ position: 'relative', overflow: 'hidden', marginTop: '40px' }}>
    <div className="tcar-track" style={{ display: 'flex', transform: `translateX(-${slide * 100}%)`, transition: 'transform 0.5s ease-in-out' }}>
      {[{"quote":"Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.","author":"Vaishali Saxena","role":"Creative Director","company":"","avatar":"/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/17-761b0d7272.webp"},{"quote":"Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.","author":"Vihaan Pandey","role":"Video Producer","company":"","avatar":"/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/06-6d75b26b02.webp"},{"quote":"The multimodal editing capabilities in Seedream make it easy to refine images with precision.","author":"Anurag Malhotra","role":"Art Director","company":"","avatar":"/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/10-8f0cd584bb.webp"},{"quote":"Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.","author":"Ashutosh Singh","role":"Marketing Manager","company":"","avatar":"/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/18-67afb8c98a.webp"},{"quote":"From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.","author":"Shrimmi Saxena","role":"Creative Lead","company":"","avatar":""}].map((testimonial, index) => (
        <div key={index} className="tcar-slide" style={{ minWidth: '100%', padding: '20px', boxSizing: 'border-box' }}>
          <div className="tcar-quote" style={{ fontSize: '24px', fontFamily: 'googleSansFlex, "googleSansFlex Fallback"', color: '#1a1a1a' }}>
            “{testimonial.quote}”
          </div>
          <div className="tcar-author" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
            <img src={testimonial.avatar} alt={testimonial.author} className="tcar-avatar" style={{ width: '60px', height: '60px', borderRadius: '50%', marginRight: '15px' }} />
            <div>
              <div className="tcar-name" style={{ fontFamily: 'Inter, sans-serif', fontSize: '18px', color: '#1a1a1a' }}>{testimonial.author}</div>
              <div className="tcar-role" style={{ fontFamily: 'googleSansFlex, "googleSansFlex Fallback"', color: '#1a1a1a', opacity: '0.7' }}>{testimonial.role}</div>
            </div>
          </div>
          <div className="tcar-stars" style={{ marginTop: '10px', color: '#ff6b00' }}>
            {'★★★★★'}
          </div>
        </div>
      ))}
    </div>
  </div>
  
  <div className="tcar-dots" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
    {Array.from({ length: 5 }).map((_, index) => (
      <span key={index} className={`tcar-dot${index === slide ? ' active' : ''}`} style={{ width: '10px', height: '10px', borderRadius: '50%', margin: '0 5px', background: index === slide ? '#ff6b00' : '#dddddd' }} />
    ))}
  </div>

  <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/15-41ea7f7485.png" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{ width: '100%', height: '100%', objectFit: 'cover', display:'block', position: 'absolute', inset: 0 }} />
</section>

<section className="ctavb" style={{position:'relative',overflow:'hidden',background:'#f8fafc',padding:'80px 0',textAlign:'center'}}>
  <div className="ctavb-bg" style={{position:'relative',height:'100vh',overflow:'hidden'}}>
    <video autoPlay muted loop playsInline style={{width:'100%',height:'100%',objectFit:'cover',position:'absolute',inset:0}}>
      <source src="https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4" type="video/mp4"/>
    </video>
    <div className="ctavb-overlay" style={{position:'absolute',inset:0,background:'rgba(255,255,255,0.8)'}}></div>
  </div>
  <div className="ctavb-inner" style={{position:'relative',zIndex:10,maxWidth:'800px',margin:'0 auto',padding:'32px',boxSizing:'border-box'}}>
    <h2 className="anim d0" style={{color:'#1a1a1a',marginBottom:'16px',fontSize:'clamp(32px,5vw,60px)',fontFamily:'Inter',wordBreak:'normal',overflowWrap:'normal',hyphens:'none'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <p className="anim d1" style={{color:'#1a1a1a',marginBottom:'32px',fontSize:'18px',lineHeight:1.5,fontFamily:'googleSansFlex, "googleSansFlex Fallback"'}}>Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
    <a href="#lead-form" className="ctavb-btn anim d2" style={{display:'inline-block',padding:'12px 24px',borderRadius:'8px',background:'#ff6b00',color:'#ffffff',textDecoration:'none',fontSize:'18px',fontFamily:'googleSansFlex, "googleSansFlex Fallback"'}}>{'Generate with AI'}</a>
  </div>
  <img src="/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/15-41ea7f7485.png" alt="Seedream 4.5 and Seedance 1.5 Pro" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
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
