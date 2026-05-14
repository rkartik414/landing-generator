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

    const cta_text = "Get Started";
  const accentColor = "#ff6b00";
  const primaryColor = "#ff6b00";
  const css = `
    :root {
      --accent: #ff6b00;
      --primary: #ff6b00;
      --accent-rgb: 255,107,0;
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
    

      .tlg        { padding:48px 0; background:#f8fafc;
                    border-top:1px solid #e5e7eb;
                    border-bottom:1px solid #e5e7eb; }
      .tlg-label  { text-align:center; font-size:13px; font-weight:600;
                    letter-spacing:0.06em; text-transform:uppercase;
                    color:#9ca3af; margin-bottom:28px; }
      .tlg-logos  { display:flex; justify-content:center; align-items:center;
                    flex-wrap:wrap; gap:36px; max-width:900px;
                    margin:0 auto; padding:0 24px; }
      .tlg-logo   { height:30px; opacity:0.45; filter:grayscale(1);
                    object-fit:contain;
                    transition:opacity 0.25s, filter 0.25s; }
      .tlg-logo:hover { opacity:0.85; filter:grayscale(0); }
    

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
    

      .pdv         { padding:96px 0; background:#f8fafc; }
      .pdv-head    { text-align:center; max-width:680px;
                     margin:0 auto 48px; }
      .pdv-head h2 { font-size:44px; font-weight:700;
                     letter-spacing:-0.04em; margin:14px 0 16px; }
      .pdv-head p  { font-size:17px; color:#4b5563; line-height:1.75; }
      .pdv-frame   { max-width:1000px; margin:0 auto; padding:0 24px; }
      .pdv-browser { border-radius:20px; overflow:hidden; background:#111827;
                     border:1px solid rgba(255,255,255,0.1);
                     box-shadow:0 40px 100px rgba(15,23,42,0.2); }
      .pdv-bar     { display:flex; gap:8px; align-items:center;
                     padding:14px 18px; background:#1f2937;
                     border-bottom:1px solid rgba(255,255,255,0.08); }
      .pdv-dot     { width:11px; height:11px; border-radius:50%;
                     background:#374151; }
      .pdv-video   { aspect-ratio:16/9; width:100%; display:block;
                     object-fit:cover; }
      .pdv-cta     { text-align:center; margin-top:40px; }
      .pdv-btn     { display:inline-flex; align-items:center; gap:8px;
                     padding:14px 32px; border-radius:12px;
                     background:var(--accent,#ff6b00); color:#fff;
                     border:none; font-size:15px; font-weight:700;
                     cursor:pointer; transition:transform .2s, box-shadow .2s; }
      .pdv-btn:hover { transform:translateY(-2px);
                       box-shadow:0 12px 28px rgba(0,0,0,0.2); }
    

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
    

      .plc         { padding:96px 0; background:#fff; }
      .plc-head    { text-align:center; max-width:680px;
                     margin:0 auto 60px; }
      .plc-head h2 { font-size:44px; font-weight:700;
                     letter-spacing:-0.04em; color:#111827; margin:14px 0; }
      .plc-grid    { display:grid;
                     grid-template-columns:repeat(auto-fit,minmax(280px,1fr));
                     gap:24px; max-width:1100px; margin:0 auto; padding:0 24px; }
      .plc-card    { padding:32px; border-radius:24px; background:#fff;
                     border:1px solid #e5e7eb;
                     box-shadow:0 12px 48px rgba(15,23,42,0.06);
                     position:relative; }
      .plc-card.featured { border-color:var(--accent,#ff6b00);
                           box-shadow:0 16px 60px rgba(var(--accent-rgb,255,107,0),0.15); }
      .plc-badge   { display:inline-block; padding:5px 14px; border-radius:100px;
                     background:#dcfce7; color:#15803d; font-size:12px;
                     font-weight:700; margin-bottom:16px; }
      .plc-plan    { font-size:20px; font-weight:700; color:#111827;
                     letter-spacing:-0.02em; margin:0 0 16px; }
      .plc-amount  { font-size:44px; font-weight:800; letter-spacing:-0.04em;
                     color:#111827; }
      .plc-old     { font-size:18px; color:#9ca3af;
                     text-decoration:line-through; margin-left:8px; }
      .plc-period  { font-size:14px; color:#6b7280;
                     display:block; margin-top:4px; }
      .plc-desc    { font-size:15px; color:#4b5563; line-height:1.7;
                     margin:12px 0 24px; }
      .plc-list    { list-style:none; padding:0; margin:0 0 28px;
                     display:grid; gap:12px; }
      .plc-list li { display:flex; gap:10px; align-items:start;
                     font-size:14px; color:#374151; line-height:1.55; }
      .plc-btn     { width:100%; padding:14px; border-radius:12px;
                     font-size:15px; font-weight:700; cursor:pointer; }
      .plc-btn.primary { background:var(--accent,#ff6b00); color:#fff;
                         border:none; }
      .plc-btn.outline { background:#fff; color:#111827;
                         border:1px solid #e5e7eb; }
      .plc-emi     { text-align:center; margin-top:28px; font-size:14px;
                     color:#6b7280; }
    

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
    

      .ctadb       { padding:80px 24px; background:#111827;
                     text-align:center; color:#fff; position:relative;
                     overflow:hidden; }
      .ctadb::before { content:''; position:absolute; top:50%; left:50%;
                       transform:translate(-50%,-50%);
                       width:600px; height:300px; border-radius:50%;
                       background:radial-gradient(ellipse,
                         rgba(var(--accent-rgb,255,107,0),0.15),transparent 70%);
                       pointer-events:none; }
      .ctadb-inner { max-width:700px; margin:0 auto;
                     position:relative; z-index:2; }
      .ctadb h2   { font-size:48px; font-weight:700; letter-spacing:-0.04em;
                    line-height:1.08; margin:0 0 18px; }
      .ctadb p    { font-size:18px; color:rgba(255,255,255,0.7);
                    line-height:1.7; margin:0 0 36px; }
      .ctadb-btns { display:flex; justify-content:center;
                    gap:14px; flex-wrap:wrap; }
      .ctadb-btn  { padding:16px 36px; border-radius:14px; font-size:16px;
                    font-weight:700; cursor:pointer;
                    background:var(--accent,#ff6b00); color:#fff; border:none;
                    transition:transform .2s, box-shadow .2s; }
      .ctadb-btn:hover { transform:translateY(-2px);
                         box-shadow:0 12px 32px rgba(var(--accent-rgb,255,107,0),0.4); }
      .ctadb-ghost { padding:16px 36px; border-radius:14px; font-size:16px;
                     font-weight:600; cursor:pointer; background:transparent;
                     color:#fff; border:1px solid rgba(255,255,255,0.25);
                     transition:background .2s; }
      .ctadb-ghost:hover { background:rgba(255,255,255,0.06); }
    `;

  return (
    <div>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />
     <nav style={{position:'sticky',top:0,zIndex:50,background:'rgba(15,23,42,0.92)',backdropFilter:'blur(16px)',borderBottom:'1px solid rgba(255,255,255,0.1)',padding:'12px 0'}}>
        <div className="container" style={{display:'flex',justifyContent:'space-between',alignItems:'center',gap:16}}>
          <span style={{fontWeight:800,fontSize:20,color:'#ff6b00'}}>Zoho Workplace</span>
          <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28" alt="Techjockey" style={{opacity:0.95}} />
          <a href="#lead-form" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',borderRadius:12,fontSize:13,fontWeight:600,padding:'10px 20px',background:'var(--accent)',color:'#fff',border:'none',cursor:'pointer',textDecoration:'none'}}>Get Free Consultation</a>
        </div>
      </nav>

   
<section className="hero-forced-form" style={{position:'relative',overflow:'hidden',background:'#05070d',color:'#fff',minHeight:'92vh',padding:'120px 24px 90px'}}>
  <video autoPlay muted loop playsInline style={{position:'absolute',inset:0,width:'100%',height:'100%',objectFit:'cover',opacity:.38}}>
        <source src="/output/generated-assets/zoho-workplace/16-7f9baae9a1.mp4" type="video/mp4" />
      </video>
  <div style={{position:'absolute',inset:0,background:'linear-gradient(90deg,rgba(5,7,13,.96) 0%,rgba(5,7,13,.84) 46%,rgba(5,7,13,.72) 100%)'}} />

  <div style={{position:'relative',zIndex:2,maxWidth:1180,margin:'0 auto',display:'grid',gridTemplateColumns:'minmax(0,1.05fr) minmax(340px,.75fr)',gap:56,alignItems:'center'}}>
    <div>
      <div style={{display:'inline-flex',padding:'7px 14px',borderRadius:999,background:'rgba(255,107,0,.12)',border:'1px solid rgba(255,107,0,.35)',color:'#ff6b00',fontSize:12,fontWeight:800,letterSpacing:'.08em',textTransform:'uppercase',marginBottom:22}}>
        Email & Collaboration Suite
      </div>

      <h1 style={{fontSize:'clamp(40px,5vw,64px)',lineHeight:1.02,letterSpacing:'-.055em',margin:'0 0 24px',maxWidth:760}}>
        Elevate Your Team’s Productivity with Zoho Workplace
      </h1>

      <p style={{fontSize:18,lineHeight:1.75,color:'rgba(255,255,255,.76)',maxWidth:680,margin:'0 0 32px'}}>
        A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
      </p>

      <a href="#lead-form" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',padding:'15px 24px',borderRadius:14,background:'#ff6b00',color:'#fff',fontWeight:800,textDecoration:'none',boxShadow:'0 18px 44px rgba(255,107,0,.28)'}}>
        Get Started
      </a>
    </div>

    <form id="lead-form" style={{background:'rgba(15,23,42,.88)',border:'1px solid rgba(255,255,255,.14)',borderRadius:28,padding:30,boxShadow:'0 28px 90px rgba(0,0,0,.42)',backdropFilter:'blur(14px)'}}>
      <h3 style={{fontSize:26,lineHeight:1.15,margin:'0 0 10px'}}>Get Free Consultation</h3>
      <p style={{fontSize:14,lineHeight:1.6,color:'rgba(255,255,255,.68)',margin:'0 0 22px'}}>Share your details and Techjockey experts will help with pricing, demo, and product guidance.</p>

      <input type="text" placeholder="Name" style={{width:'100%',height:48,marginBottom:14,borderRadius:12,border:'1px solid rgba(255,255,255,.12)',background:'rgba(255,255,255,.06)',color:'#fff',padding:'0 14px',outline:'none'}} />
      <input type="email" placeholder="Email" style={{width:'100%',height:48,marginBottom:14,borderRadius:12,border:'1px solid rgba(255,255,255,.12)',background:'rgba(255,255,255,.06)',color:'#fff',padding:'0 14px',outline:'none'}} />
      <input type="tel" placeholder="Phone" style={{width:'100%',height:48,marginBottom:14,borderRadius:12,border:'1px solid rgba(255,255,255,.12)',background:'rgba(255,255,255,.06)',color:'#fff',padding:'0 14px',outline:'none'}} />
      <input type="text" placeholder="Company" style={{width:'100%',height:48,marginBottom:18,borderRadius:12,border:'1px solid rgba(255,255,255,.12)',background:'rgba(255,255,255,.06)',color:'#fff',padding:'0 14px',outline:'none'}} />

      <button type="submit" style={{width:'100%',height:50,border:0,borderRadius:12,background:'#ff6b00',color:'#fff',fontWeight:800,cursor:'pointer'}}>
        Get Started
      </button>
    </form>
  </div>
</section>

<section className="tlg" style={{backgroundColor: '#f8fafc', padding: '40px 0'}}>
  <div className="tlg-label" style={{textAlign: 'center', marginBottom: '20px', fontSize: '18px', color: '#333'}}>
    Trusted by 100,000+ Businesses Globally
  </div>
  <div className="tlg-logos" style={{display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap'}}>
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/03-8da7f26504.svg" alt="Partner" style={{width: '120px', height: 'auto'}} />
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/05-ae76f0c421.svg" alt="Partner" style={{width: '120px', height: 'auto'}} />
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/04-84d4bfdd99.svg" alt="Partner" style={{width: '120px', height: 'auto'}} />
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/02-975eb13e3f.svg" alt="Partner" style={{width: '120px', height: 'auto'}} />
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/06-d38fc0a4cb.svg" alt="Partner" style={{width: '120px', height: 'auto'}} />
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/08-428c7ca4a9.svg" alt="Partner" style={{width: '120px', height: 'auto'}} />
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/09-3c4d2f8415.svg" alt="Partner" style={{width: '120px', height: 'auto'}} />
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/07-401f045b7d.svg" alt="Partner" style={{width: '120px', height: 'auto'}} />
  </div>
</section>

<section className="falt" style={{ background: '#f8fafc' }}>
  <div className="container">
    <div className="falt-head anim d0" style={{ textAlign: 'center', padding: '40px 0' }}>
      <h2 style={{ fontFamily: 'Inter, sans-serif', fontSize: 'clamp(32px, 5vw, 60px)', color: '#ff6b00', wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none', lineHeight: '1.2', marginBottom: '20px' }}>
        Elevate Your Team’s Productivity with Zoho Workplace
      </h2>
    </div>
    <div className="reveal stagger-parent">
      {[
        {
          num: "01",
          title: "Why Choose Zoho Workplace?",
          description: "Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.",
          features: ["All-in-One Unified Workspace", "Seamless Collaboration in Real Time", "Work from Anywhere, Anytime", "AI-Powered Productivity (Zia)"],
          image_url: "/output/generated-assets/zoho-workplace/18-473c14de05.jpg",
        },
        {
          num: "02",
          title: "Unlock Your Business Growth with Zoho Workplace",
          description: "Zoho Workplace unifies email, collaboration, and productivity tools to streamline your business operations. Enable smarter teamwork and drive growth with a single platform.",
          features: ["Ideal For Your Business Size", "Communicate Effectively", "Integrated Business Apps", "Customizable Workspace"],
          image_url: "/output/generated-assets/zoho-workplace/12-cc95c2320b.png",
        },
        {
          num: "03",
          title: "Integrate with Popular Apps",
          description: "Connect your Zoho Workplace with other business apps to ensure higher productivity and growth - all within a unified workspace.",
          features: ["Zoho Apps", "Analytics", "Accounting & Finance", "Automation", "Business Suites"],
          image_url: "/output/generated-assets/zoho-workplace/17-8ee9780f0b.jpg"
        },
        {
          num: "04",
          title: "Performance Beyond Limits with Zoho Workplace",
          description: "",
          features: ["Secure", "Anywhere Access", "Intuitive", "Collaborative"],
          image_url: "/output/generated-assets/zoho-workplace/28-9026080137.png",
        }
      ].map((section, index) => (
        <div key={index} className={`falt-block reveal d${index + 1} ${(index % 2 === 1) ? 'flip' : ''}`} style={{ padding: '20px 0', display: 'flex', alignItems: 'center', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse' }}>
          <div className="falt-num" style={{ fontSize: '24px', fontWeight: 'bold', color: '#ff6b00', marginRight: '20px' }}>
            {section.num}
          </div>
          <div className="falt-copy" style={{ flex: '1', marginRight: '20px', maxWidth: '600px' }}>
            <h3 style={{ fontFamily: 'Inter, sans-serif', color: '#333', marginBottom: '10px' }}>{section.title}</h3>
            <p style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: '#555', marginBottom: '20px' }}>{section.description}</p>
            <div className="falt-chips" style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
              {section.features.map((feature, featureIndex) => (
                <span key={featureIndex} className="falt-chip" style={{ background: '#ff6b00', color: '#fff', padding: '5px 10px', borderRadius: '5px' }}>{feature}</span>
              ))}
            </div>
          </div>
          <div className="falt-visual" style={{ flex: '1', position: 'relative' }}>
            <img src={section.image_url} alt={`Feature ${index + 1}`} style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="fig" style={{ background: '#ffffff', padding: '60px 0' }}>
  <div className="container">
    <header className="fig-head" style={{ textAlign: 'center', marginBottom: '40px' }}>
      <p className="eyebrow" style={{ color: '#ff6b00', fontWeight: 'bold' }}>Features</p>
      <h2 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontFamily: 'Inter', margin: '10px 0' }}>Elevate Your Team’s Productivity with Zoho Workplace</h2>
      <p style={{ maxWidth: '600px', margin: '0 auto' }}>
        A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
      </p>
    </header>
    <div className="fig-grid stagger-parent" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px' }}>
      <div className="fig-card" style={{ flex: '1 1 calc(33.333% - 40px)', marginBottom: '20px' }}>
        <div className="fig-icon" style={{ marginBottom: '10px' }}>
          <svg width="16" height="16" fill="var(--accent)"><circle cx="8" cy="8" r="8" /></svg>
        </div>
        <h4 style={{ fontFamily: 'Inter' }}>All-in-One Unified Workspace</h4>
        <p>Access email, chat, documents, meetings, and storage in a single integrated platform. Reduce app switching and boost pro.</p>
      </div>
      <div className="fig-card" style={{ flex: '1 1 calc(33.333% - 40px)', marginBottom: '20px' }}>
        <div className="fig-icon" style={{ marginBottom: '10px' }}>
          <svg width="16" height="16" fill="var(--accent)"><rect width="16" height="16" /></svg>
        </div>
        <h4 style={{ fontFamily: 'Inter' }}>Seamless Collaboration in Real Time</h4>
        <p>Work together on documents, spreadsheets, and presentations with live editing, comments, and built-in communication tools.</p>
      </div>
      <div className="fig-card" style={{ flex: '1 1 calc(33.333% - 40px)', marginBottom: '20px' }}>
        <div className="fig-icon" style={{ marginBottom: '10px' }}>
          <svg width="16" height="16" fill="var(--accent)"><polygon points="8,0 16,8 8,16 0,8" /></svg>
        </div>
        <h4 style={{ fontFamily: 'Inter' }}>Work from Anywhere, Anytime</h4>
        <p>Stay productive on the go. Reply to emails, access presentations, or host a video conference from anywhere effortlessly.</p>
      </div>
      <div className="fig-card" style={{ flex: '1 1 calc(33.333% - 40px)', marginBottom: '20px' }}>
        <div className="fig-icon" style={{ marginBottom: '10px' }}>
          <svg width="16" height="16" fill="var(--accent)"><path d="M8 0 L16 16 L0 16 Z" /></svg>
        </div>
        <h4 style={{ fontFamily: 'Inter' }}>AI-Powered Productivity (Zia)</h4>
        <p>Leverage built-in AI for writing assistance in terms of grammar, readability and writing style while you work on Writer.</p>
      </div>
      <div className="fig-card" style={{ flex: '1 1 calc(33.333% - 40px)', marginBottom: '20px' }}>
        <div className="fig-icon" style={{ marginBottom: '10px' }}>
          <svg width="16" height="16" fill="var(--accent)"><line x1="0" y1="0" x2="16" y2="16" /></svg>
        </div>
        <h4 style={{ fontFamily: 'Inter' }}>Ideal For Your Business Size</h4>
        <p>Designed for any organization, Zoho Workplace enhances efficiency and teamwork at every scale.</p>
      </div>
      <div className="fig-card" style={{ flex: '1 1 calc(33.333% - 40px)', marginBottom: '20px' }}>
        <div className="fig-icon" style={{ marginBottom: '10px' }}>
          <svg width="16" height="16" fill="var(--accent)"><ellipse cx="8" cy="8" rx="8" ry="4" /></svg>
        </div>
        <h4 style={{ fontFamily: 'Inter' }}>Communicate Effectively</h4>
        <p>Go beyond email and chat, and connect teams with a social intranet using channels, feeds, and groups.</p>
      </div>
    </div>
    <div style={{ position: 'relative', marginTop: '40px' }}>
      <img src="/output/generated-assets/zoho-workplace/27-2846b683d4.png" alt="Zoho Workplace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
    </div>
  </div>
</section>

<section className="mns" style={{backgroundColor:'#ffffff',padding:'40px 20px',position:'relative'}}>
  <div className="mns-head" style={{position:'relative',zIndex:1,paddingBottom:'20px'}}>
    <h2 className="mns-label" style={{color:'#ff6b00',fontFamily:'Inter',fontSize:'24px',margin:'0 0 20px'}}>FEATURES</h2>
    <div className="mns-grid stagger-parent" style={{display:'flex',gap:'20px',flexWrap:'wrap'}}>
      <div className="mns-card reveal" style={{backgroundColor:'#f8fafc',borderRadius:'8px',padding:'20px',flex:'1 1 calc(33.333% - 13.333px)',boxShadow:'0 4px 6px rgba(0,0,0,0.1)'}}>
        <div className="mns-pub" style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',fontSize:'16px',color:'#333'}}>TechCrunch</div>
        <div className="mns-text" style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',fontSize:'14px',color:'#555',marginTop:'10px'}}>"Zoho Workplace redefines how teams collaborate."</div>
      </div>
      <div className="mns-card reveal" style={{backgroundColor:'#f8fafc',borderRadius:'8px',padding:'20px',flex:'1 1 calc(33.333% - 13.333px)',boxShadow:'0 4px 6px rgba(0,0,0,0.1)'}}>
        <div className="mns-pub" style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',fontSize:'16px',color:'#333'}}>Forbes</div>
        <div className="mns-text" style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',fontSize:'14px',color:'#555',marginTop:'10px'}}>"A comprehensive solution for enterprise needs."</div>
      </div>
      <div className="mns-card reveal" style={{backgroundColor:'#f8fafc',borderRadius:'8px',padding:'20px',flex:'1 1 calc(33.333% - 13.333px)',boxShadow:'0 4px 6px rgba(0,0,0,0.1)'}}>
        <div className="mns-pub" style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',fontSize:'16px',color:'#333'}}>Mashable</div>
        <div className="mns-text" style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',fontSize:'14px',color:'#555',marginTop:'10px'}}>"Elevate productivity with seamless integration."</div>
      </div>
    </div>
  </div>
  <div style={{position:'absolute',top:0,left:0,width:'100%',height:'100%',zIndex:0,overflow:'hidden'}}>
    <img src="/output/generated-assets/zoho-workplace/27-2846b683d4.png" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
</section>

<section className="pdv" style={{background:'#f8fafc',padding:'60px 0'}}>
    <div className="container">
        <div className="pdv-head anim d0" style={{textAlign:'center',marginBottom:'40px'}}>
            <p className="eyebrow" style={{color:'#ff6b00',textTransform:'uppercase',fontWeight:'500'}}>Product Demo</p>
            <h2 style={{fontSize:'clamp(32px, 5vw, 60px)',fontFamily:'Inter',letterSpacing:'-0.5px',color:'#333',marginBottom:'20px'}}>Elevate Your Team’s Productivity with Zoho Workplace</h2>
            <p style={{fontSize:'18px',color:'#555',fontFamily:'Zoho_Puvi_Regular, sans-serif'}}>A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.</p>
        </div>
        <div className="pdv-frame anim-scale d2" style={{position:'relative',width:'100%',maxWidth:'900px',margin:'0 auto'}}>
            <div className="pdv-browser" style={{position:'relative',borderRadius:'12px',overflow:'hidden',boxShadow:'0 4px 14px rgba(0,0,0,0.1)'}}>
                <div className="pdv-bar" style={{display:'flex',alignItems:'center',padding:'8px 16px',background:'#eeeeee'}}>
                    <span className="pdv-dot" style={{width:'12px',height:'12px',borderRadius:'50%',background:'#ff6b00',marginRight:'8px'}}></span>
                    <span className="pdv-dot" style={{width:'12px',height:'12px',borderRadius:'50%',background:'#ff6b00',marginRight:'8px'}}></span>
                    <span className="pdv-dot" style={{width:'12px',height:'12px',borderRadius:'50%',background:'#ff6b00'}}></span>
                </div>
                <video className="pdv-video" autoPlay muted loop playsInline style={{width:'100%',display:'block'}}>
                    <source src="https://www.zohowebstatic.com/sites/zweb/images/workplace/homepage/banner-video.mp4" type="video/mp4"/>
                </video>
            </div>
        </div>
        <div className="pdv-cta" style={{marginTop:'40px',textAlign:'center'}}>
            <button className="pdv-btn" style={{padding:'12px 24px',fontSize:'18px',border:'none',background:'#ff6b00',color:'#fff',borderRadius:'8px',cursor:'pointer'}}>
                Get Started
            </button>
        </div>
    </div>
</section>

<section className="wtj" style={{backgroundColor:'#ffffff',padding:'50px 0'}}>
  <div className="wtj-inner" style={{maxWidth:'1200px',margin:'0 auto',padding:'20px'}}>
    <div className="wtj-top" style={{textAlign:'center', marginBottom:'40px'}}>
      <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" className="wtj-logo" style={{marginBottom:'10px'}} />
      <img src="/output/generated-assets/zoho-workplace/27-2846b683d4.png" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
      <p className="wtj-tagline" style={{fontSize:'18px',color:'#333'}}>India's #1 B2B Software Marketplace</p>
      <div className="wtj-divider" style={{width:'60px',height:'3px',backgroundColor:'#ff6b00',margin:'20px auto'}}></div>
    </div>
    <div className="wtj-grid stagger-parent" style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between',gap:'20px'}}>
      <div className="wtj-card" style={{flex:'1',minWidth:'200px',backgroundColor:'#f8fafc',padding:'20px',borderRadius:'8px',boxShadow:'0 2px 4px rgba(0,0,0,0.1)'}}>
        <div className="wtj-icon" style={{width:'40px',height:'40px',background:'#ff6b00',borderRadius:'50%',marginBottom:'10px'}}></div>
        <h4 style={{fontSize:'16px',color:'#333'}}>Free Expert Consultation</h4>
        <p style={{color:'#555'}}>Get matched with the right software.</p>
      </div>
      <div className="wtj-card" style={{flex:'1',minWidth:'200px',backgroundColor:'#f8fafc',padding:'20px',borderRadius:'8px',boxShadow:'0 2px 4px rgba(0,0,0,0.1)'}}>
        <div className="wtj-icon" style={{width:'40px',height:'40px',background:'#ff6b00',borderRadius:'50%',marginBottom:'10px'}}></div>
        <h4 style={{fontSize:'16px',color:'#333'}}>Verified Reviews</h4>
        <p style={{color:'#555'}}>1000+ genuine customer reviews.</p>
      </div>
      <div className="wtj-card" style={{flex:'1',minWidth:'200px',backgroundColor:'#f8fafc',padding:'20px',borderRadius:'8px',boxShadow:'0 2px 4px rgba(0,0,0,0.1)'}}>
        <div className="wtj-icon" style={{width:'40px',height:'40px',background:'#ff6b00',borderRadius:'50%',marginBottom:'10px'}}></div>
        <h4 style={{fontSize:'16px',color:'#333'}}>Best Price Guarantee</h4>
        <p style={{color:'#555'}}>Competitive pricing assured.</p>
      </div>
      <div className="wtj-card" style={{flex:'1',minWidth:'200px',backgroundColor:'#f8fafc',padding:'20px',borderRadius:'8px',boxShadow:'0 2px 4px rgba(0,0,0,0.1)'}}>
        <div className="wtj-icon" style={{width:'40px',height:'40px',background:'#ff6b00',borderRadius:'50%',marginBottom:'10px'}}></div>
        <h4 style={{fontSize:'16px',color:'#333'}}>Dedicated Support</h4>
        <p style={{color:'#555'}}>Post-sale onboarding assistance.</p>
      </div>
    </div>
  </div>
</section>

<section className="plc" style={{ background: '#ffffff', padding: '60px 20px' }}>
  <div className="plc-head anim d0" style={{ textAlign: 'center', marginBottom: '40px' }}>
    <div className="eyebrow" style={{ color: '#ff6b00', fontWeight: 'bold', letterSpacing: '0.5px' }}>Pricing</div>
    <h2 style={{ color: '#333', fontFamily: 'Inter', fontSize: 'clamp(32px, 5vw, 60px)', margin: '10px 0', wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none' }}>Elevate Your Team’s Productivity with Zoho Workplace</h2>
  </div>
  <div className="plc-grid stagger-parent" style={{ display: 'flex', gap: '20px', flexWrap: 'wrap', justifyContent: 'center' }}>
    <div className="plc-card featured" style={{ flex: '1 1 300px', background: '#f8fafc', borderRadius: '12px', padding: '20px', boxSizing: 'border-box', position: 'relative', overflow: 'hidden' }}>
      <img src="/output/generated-assets/zoho-workplace/27-2846b683d4.png" alt="Zoho Workplace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0, zIndex: -1 }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <div className="plc-badge" style={{ color: '#ff6b00', fontWeight: 'bold', marginBottom: '10px' }}>Best Value</div>
        <div className="plc-plan" style={{ fontSize: '1.25em', fontWeight: 'bold', color: '#333' }}>Zoho Workplace</div>
        <div className="plc-amount" style={{ fontSize: '1.5em', fontWeight: 'bold', color: '#333', margin: '10px 0' }}>$0</div>
        <div className="plc-period" style={{ color: '#888', fontSize: '0.875em', marginBottom: '15px' }}>per user/month</div>
        <ul className="plc-list" style={{ color: '#555', lineHeight: '1.6', marginBottom: '20px' }}>
          <li>Enterprise-Grade Custom Email</li>
          <li>Migration Assistance</li>
          <li>Collaborative Office Suite</li>
          <li>30-GB Mail Storage Per User</li>
          <li>File Storage Starts at 100 GB Per Team</li>
          <li>File Sharing & Permissions</li>
          <li>Team Chat</li>
          <li>Document Management</li>
          <li>Supported Device: Android, iOS, Windows, Mac</li>
        </ul>
        <button className="plc-btn primary" style={{ background: '#ff6b00', color: '#fff', border: 'none', borderRadius: '5px', padding: '10px 20px', cursor: 'pointer' }}>Get Started</button>
      </div>
    </div>
  </div>
</section>

<section className="tcar" style={{ backgroundColor: '#ffffff', padding: '60px 0' }}>
  <div className="container">
    <h2 className="tcar-head anim d0" style={{ textAlign: 'center', color: '#ff6b00' }}>
      Elevate Your Team’s Productivity with Zoho Workplace
    </h2>
    <p style={{ textAlign: 'center', margin: '20px 0', color: '#333' }}>
      A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
    </p>
    <div className="tcar-layout" style={{ display: 'flex', overflow: 'hidden', position: 'relative' }}>
      <div className="tcar-rail" style={{ flex: '0 0 auto', display: 'flex', width: '300px' }}>
        {[
          {
            quote: "Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.",
            author: "Amit Kapoor",
            role: "IT Manager",
            avatar: "/output/generated-assets/zoho-workplace/15-01fc6c95c0.jpg"
          },
          {
            quote: "The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.",
            author: "Saurav Singh",
            role: "Head of Operations",
            avatar: "/output/generated-assets/zoho-workplace/13-a1af876bc5.png"
          },
          {
            quote: "Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.",
            author: "Shrimi Manchanda",
            role: "Operations Manager",
            avatar: "/output/generated-assets/zoho-workplace/33-e3c4bcd1a9.png"
          }
        ].map((testimonial, index) => (
          <div key={index} className="tcar-mini" style={{ flex: '0 0 100px', padding: '10px', boxShadow: '0px 4px 8px rgba(0, 0, 0, 0.1)', marginRight: '20px' }}>
            <p className="tcar-mini-stars" style={{ color: '#ff6b00' }}>★★★★★</p>
            <p style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{testimonial.quote}</p>
          </div>
        ))}
      </div>
      <div className="tcar-stage anim-scale d1" style={{ position: 'relative', height: '200px', flex: '1', overflow: 'hidden' }}>
        <div className="tcar-track" style={{ display: 'flex', transform: `translateX(${-0 * 100}%)`, transition: 'transform 0.4s ease-in-out' }}>
          {[
            {
              quote: "Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.",
              author: "Amit Kapoor",
              role: "IT Manager",
              avatar: "/output/generated-assets/zoho-workplace/15-01fc6c95c0.jpg"
            },
            {
              quote: "The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.",
              author: "Saurav Singh",
              role: "Head of Operations",
              avatar: "/output/generated-assets/zoho-workplace/13-a1af876bc5.png"
            },
            {
              quote: "Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.",
              author: "Shrimi Manchanda",
              role: "Operations Manager",
              avatar: "/output/generated-assets/zoho-workplace/33-e3c4bcd1a9.png"
            },
            {
              quote: "The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.",
              author: "Shweta Thakur",
              role: "Senior System Administrator",
              avatar: "/output/generated-assets/zoho-workplace/34-00ee58a5d0.jpg"
            },
            {
              quote: "Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.",
              author: "Narinder Sahni",
              role: "IT Head",
              avatar: ""
            }
          ].map((testimonial, index) => (
            <div key={index} className="tcar-0" style={{ flex: '1 0 100%', boxSizing: 'border-box', padding: '20px' }}>
              <div className="tcar-quote" style={{ background: '#f8fafc', padding: '20px', borderRadius: '12px', boxShadow: '0px 2px 4px rgba(0, 0, 0, 0.1)' }}>
                <p className="tcar-stars" style={{ color: '#ff6b00' }}>★★★★★</p>
                <p className="tcar-text">{testimonial.quote}</p>
                <div className="tcar-author" style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
                  <img src={testimonial.avatar} alt={testimonial.author} className="tcar-avatar" style={{ width: '50px', height: '50px', borderRadius: '50%', marginRight: '10px' }} />
                  <div>
                    <p className="tcar-name" style={{ fontWeight: 'bold' }}>{testimonial.author}</p>
                    <p className="tcar-role">{testimonial.role}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    <img src="/output/generated-assets/zoho-workplace/27-2846b683d4.png" alt="Zoho Workplace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0, top: '100px' }} />
    <div className="tcar-dots" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
      {Array(5).fill().map((_, index) => (
        <button key={index} className={`tcar-dot ${index === 0 ? 'active' : ''}`} style={{ width: '10px', height: '10px', borderRadius: '5px', margin: '0 5px', backgroundColor: index === 0 ? '#ff6b00' : '#ccc', border: 'none' }} />
      ))}
    </div>
  </div>
</section>

<section className="ctadb" style={{backgroundColor:'#ffffff',padding:'60px 0',position:'relative'}}>
  <div className="ctadb-inner" style={{maxWidth:'1080px',margin:'0 auto',padding:'0 20px',textAlign:'center'}}>
    <h2 className="anim d0" style={{color:'#333',fontSize:'clamp(32px, 5vw, 60px)',fontFamily:'Inter, sans-serif',fontWeight:'700',marginBottom:'20px'}}>
      Elevate Your Team’s Productivity with Zoho Workplace
    </h2>
    <p className="anim d1" style={{color:'#555',fontSize:'18px',fontFamily:'Zoho_Puvi_Regular, sans-serif',marginBottom:'40px'}}>
      A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
    </p>
    <div className="ctadb-btns anim d2" style={{display:'inline-flex',gap:'20px'}}>
      <a href="#lead-form" className="ctadb-btn" style={{backgroundColor:'#ff6b00',color:'#fff',padding:'12px 24px',borderRadius:'30px',fontFamily:'Inter, sans-serif',fontWeight:'500',textDecoration:'none'}}>
        Get Started
      </a>
      <a href="#lead-form" className="ctadb-ghost" style={{color:'#ff6b00',padding:'12px 24px',borderRadius:'30px',fontFamily:'Inter, sans-serif',fontWeight:'500',textDecoration:'none',border:'2px solid #ff6b00'}}>
        Get Your Free Trial
      </a>
    </div>
    <div style={{position:'relative',marginTop:'60px',borderRadius:'12px',overflow:'hidden',height:'400px'}}>
      <img src="/output/generated-assets/zoho-workplace/27-2846b683d4.png" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
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
