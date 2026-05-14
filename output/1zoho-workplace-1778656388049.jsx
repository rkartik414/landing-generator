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
          <span style={{fontWeight:800,fontSize:20,color:'#1a1a1a'}}>Zoho Workplace</span>
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
      <div style={{display:'inline-flex',padding:'7px 14px',borderRadius:999,background:'rgba(255,107,0,.12)',border:'1px solid rgba(255,107,0,.35)',color:'#1a1a1a',fontSize:12,fontWeight:800,letterSpacing:'.08em',textTransform:'uppercase',marginBottom:22}}>
        Email & Collaboration Suite
      </div>

      <h1 style={{fontSize:'clamp(40px,5vw,64px)',lineHeight:1.02,letterSpacing:'-.055em',margin:'0 0 24px',maxWidth:760}}>
        Elevate Your Team’s Productivity with Zoho Workplace
      </h1>

      <p style={{fontSize:18,lineHeight:1.75,color:'rgba(255,255,255,.76)',maxWidth:680,margin:'0 0 32px'}}>
        A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
      </p>

      <a href="#lead-form" style={{display:'inline-flex',alignItems:'center',justifyContent:'center',padding:'15px 24px',borderRadius:14,background:'#1a1a1a',color:'#fff',fontWeight:800,textDecoration:'none',boxShadow:'0 18px 44px rgba(255,107,0,.28)'}}>
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

      <button type="submit" style={{width:'100%',height:50,border:0,borderRadius:12,background:'#1a1a1a',color:'#fff',fontWeight:800,cursor:'pointer'}}>
        Get Started
      </button>
    </form>
  </div>
</section>

<section className="tlg" style={{background:'#ffffff',padding:'60px 20px',textAlign:'center'}}>
  <div className="tlg-label" style={{marginBottom:'20px',fontSize:'20px',color:'#1a1a1a',fontFamily:'Zoho_Puvi_Regular, sans-serif'}}>
    Trusted by 100,000+ Businesses Globally
  </div>
  <div className="tlg-logos" style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'20px'}}>
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/05-84d4bfdd99.svg" alt="Partner" style={{width:'120px',height:'auto'}} />
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/04-8da7f26504.svg" alt="Partner" style={{width:'120px',height:'auto'}} />
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/03-a1d419253b.svg" alt="Partner" style={{width:'120px',height:'auto'}} />
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/02-975eb13e3f.svg" alt="Partner" style={{width:'120px',height:'auto'}} />
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/08-401f045b7d.svg" alt="Partner" style={{width:'120px',height:'auto'}} />
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/09-428c7ca4a9.svg" alt="Partner" style={{width:'120px',height:'auto'}} />
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/06-ae76f0c421.svg" alt="Partner" style={{width:'120px',height:'auto'}} />
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/07-d38fc0a4cb.svg" alt="Partner" style={{width:'120px',height:'auto'}} />
  </div>
  <img src="/output/generated-assets/zoho-workplace/29-6dbf35ac46.png" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
</section>

<section className="falt" style={{backgroundColor: '#ffffff', padding: '40px 0'}}>
  <div className="falt-head anim d0" style={{textAlign: 'center', paddingBottom: '20px'}}>
    <p className="eyebrow" style={{color: '#1a1a1a', fontWeight: 'bold'}}>Productivity Suite</p>
    <h2 style={{fontFamily: 'Inter, sans-serif', color: '#1a1a1a', fontSize: 'clamp(32px, 5vw, 60px)', wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none'}}>
      Elevate Your Team’s Productivity with Zoho Workplace
    </h2>
  </div>
  {[{"num":"01","title":"Why Choose Zoho Workplace?","description":"Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.","features":["All-in-One Unified Workspace","Seamless Collaboration in Real Time","Work from Anywhere, Anytime","AI-Powered Productivity (Zia)"],"image_url":"/output/generated-assets/zoho-workplace/34-2125ebe57d.jpg","video_url":""},{"num":"02","title":"Unlock Your Business Growth with Zoho Workplace","description":"Zoho Workplace unifies email, collaboration, and productivity tools to streamline your business operations. Enable smarter teamwork and drive growth with a single platform.","features":["Ideal For Your Business Size","Communicate Effectively","Integrated Business Apps","Customizable Workspace"],"image_url":"/output/generated-assets/zoho-workplace/18-473c14de05.jpg","video_url":""},{"num":"03","title":"Integrate with Popular Apps","description":"Connect your Zoho Workplace with other business apps to ensure higher productivity and growth - all within a unified workspace.","features":["Zoho Apps","Analytics","Accounting & Finance","Automation","Business Suites"],"image_url":"/output/generated-assets/zoho-workplace/17-8ee9780f0b.jpg","video_url":""},{"num":"04","title":"Performance Beyond Limits with Zoho Workplace","description":"","features":["Secure","Anywhere Access","Intuitive","Collaborative"],"image_url":"/output/generated-assets/zoho-workplace/30-b3de3a2d24.png","video_url":""},{"num":"05","title":"Create a Secure Digital Workspace","description":"Enjoy privacy-first, enterprise-grade cloud capabilities with strong spam protection, SSO, Directory, MFA, and a secure password manager.","features":["Zoho Workplace Price Plan Includes:"],"image_url":"/output/generated-assets/zoho-workplace/01-27e04915d6.png","video_url":""}].map((section, index) => (
    <div className={`falt-block ${index % 2 !== 0 ? 'flip' : ''} reveal`} style={{display: 'flex', alignItems: 'center', flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', padding: '20px 0'}}>
      <div style={{flex: '1', paddingRight: index % 2 === 0 ? '20px' : '0', paddingLeft: index % 2 !== 0 ? '20px' : '0'}}>
        <div className="falt-num" style={{color: '#ff6b00', fontWeight: 'bold', fontSize: '20px'}}>{section.num}</div>
        <h3 style={{color: '#1a1a1a', fontSize: '28px', margin: '10px 0', fontFamily: 'Inter, sans-serif'}}>{section.title}</h3>
        <p className="falt-copy" style={{color: '#1a1a1a', fontFamily: 'Zoho_Puvi_Regular, sans-serif', marginBottom: '15px'}}>{section.description}</p>
        <div className="falt-chips" style={{display: 'flex', flexWrap: 'wrap', gap: '10px'}}>
          {section.features.map(feature => (
            <span className="falt-chip" style={{backgroundColor: '#f8fafc', borderRadius: '6px', padding: '5px 10px', fontFamily: 'Zoho_Puvi_Regular, sans-serif'}}>{feature}</span>
          ))}
        </div>
      </div>
      <div className="falt-visual" style={{flex: '1', borderRadius: '12px', overflow: 'hidden'}}>
        <img src={section.image_url} alt={`Feature ${index + 1}`} style={{width: '100%', borderRadius: '12px', display: 'block'}} />
      </div>
    </div>
  ))}
  <div style={{position: 'relative', padding: '20px 0'}}>
    <img src="/output/generated-assets/zoho-workplace/29-6dbf35ac46.png" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
</section>

<section className="fig" style={{backgroundColor:'#ffffff',padding:'60px 0',position:'relative'}}>
  <div className="container" style={{maxWidth:'1200px',margin:'0 auto',padding:'0 20px',position:'relative'}}>
    <div className="fig-head" style={{textAlign:'center',marginBottom:'40px'}}>
      <span className="eyebrow" style={{fontSize:'14px',textTransform:'uppercase', letterSpacing:'1px',color:'#ff6b00',display:'block',marginBottom:'10px'}}>Zoho Workplace Features</span>
      <h2 style={{fontFamily:'Inter',color:'#1a1a1a',fontWeight:'700',fontSize:'clamp(32px, 5vw, 60px)', marginBottom:'20px'}}>Elevate Your Team’s Productivity with Zoho Workplace</h2>
      <p style={{fontFamily:'Zoho_Puvi_Regular, sans-serif',color:'#1a1a1a',maxWidth:'600px',margin:'0 auto',lineHeight:'1.6'}}>A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.</p>
    </div>
    <div className="fig-grid stagger-parent" style={{display:'flex',flexWrap:'wrap',justifyContent:'space-between'}}>
      {[
        {
          title: "All-in-One Unified Workspace",
          description: "Access email, chat, documents, meetings, and storage in a single integrated platform. Reduce app switching and boost pro",
          image: "/output/generated-assets/zoho-workplace/34-2125ebe57d.jpg"
        },
        {
          title: "Seamless Collaboration in Real Time",
          description: "Work together on documents, spreadsheets, and presentations with live editing, comments, and built-in communication tool",
          image: "/output/generated-assets/zoho-workplace/18-473c14de05.jpg"
        },
        {
          title: "Work from Anywhere, Anytime",
          description: "Stay productive on the go. Reply to emails, access presentations, or host a video conference from anywhere effortlessly.",
          image: "/output/generated-assets/zoho-workplace/17-8ee9780f0b.jpg"
        },
        {
          title: "AI-Powered Productivity (Zia)",
          description: "Leverage built-in AI for writing assistance in terms of grammar, readability and writing style while you work on Writer ",
          image: "/output/generated-assets/zoho-workplace/30-b3de3a2d24.png"
        },
        {
          title: "Ideal For Your Business Size",
          description: "Designed for any organization, Zoho Workplace enhances efficiency and teamwork at every scale.",
          image: "/output/generated-assets/zoho-workplace/01-27e04915d6.png"
        }
      ].map((feature, index) => (
        <div key={index} className="fig-card" style={{flex:'1 1 calc(33.333% - 20px)',boxSizing:'border-box',marginBottom:'20px',padding:'20px',background:'#f8fafc',borderRadius:'12px',position:'relative',overflow:'hidden'}}>
          <div className="fig-icon" style={{marginBottom:'10px',width:'16px',height:'16px',backgroundColor:'var(--accent)',borderRadius:'50%'}}></div>
          <h4 style={{fontFamily:'Inter',fontSize:'18px',fontWeight:'600',color:'#1a1a1a',marginBottom:'10px'}}>{feature.title}</h4>
          <p style={{fontFamily:'Zoho_Puvi_Regular, sans-serif',color:'#1a1a1a',lineHeight:'1.5'}}>{feature.description}</p>
          <img src={feature.image} alt={feature.title} style={{width:'100%',borderRadius:'12px',display:'block',marginTop:'20px'}}/>
        </div>
      ))}
    </div>
    <img src="/output/generated-assets/zoho-workplace/29-6dbf35ac46.png" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
</section>

<section className="mns" style={{background:'#ffffff',padding:'60px 20px',position:'relative'}}>
  <img src="/output/generated-assets/zoho-workplace/29-6dbf35ac46.png" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  <div style={{position:'relative',zIndex:1,maxWidth:'1200px',margin:'0 auto'}}>
    <div className="mns-head" style={{textAlign:'center',marginBottom:'40px'}}>
      <div className="mns-label" style={{fontSize:'24px',color:'#1a1a1a',fontFamily:'Inter',fontWeight:'bold'}}>
        Create a Secure Digital Workspace
      </div>
    </div>
    <div className="mns-grid" style={{display:'flex',gap:'20px',flexWrap:'wrap',justifyContent:'center'}}>
      <div className="mns-card" style={{flex:'1 1 30%',backgroundColor:'#f8fafc',borderRadius:'12px',padding:'20px',boxShadow:'0 4px 6px rgba(0,0,0,0.1)'}}>
        <div className="mns-pub" style={{paddingBottom:'12px',color:'#1a1a1a',fontFamily:'Zoho_Puvi_Regular, sans-serif',fontSize:'18px',fontWeight:'bold'}}>Tech Magazine</div>
        <div className="mns-text" style={{color:'#1a1a1a',fontFamily:'Zoho_Puvi_Regular, sans-serif',fontSize:'16px',fontStyle:'italic'}}>"Zoho Workplace sets a new standard for unified digital workspaces."</div>
      </div>
      <div className="mns-card" style={{flex:'1 1 30%',backgroundColor:'#f8fafc',borderRadius:'12px',padding:'20px',boxShadow:'0 4px 6px rgba(0,0,0,0.1)'}}>
        <div className="mns-pub" style={{paddingBottom:'12px',color:'#1a1a1a',fontFamily:'Zoho_Puvi_Regular, sans-serif',fontSize:'18px',fontWeight:'bold'}}>Enterprise Weekly</div>
        <div className="mns-text" style={{color:'#1a1a1a',fontFamily:'Zoho_Puvi_Regular, sans-serif',fontSize:'16px',fontStyle:'italic'}}>"Revolutionizes team collaboration with its seamless suite."</div>
      </div>
      <div className="mns-card" style={{flex:'1 1 30%',backgroundColor:'#f8fafc',borderRadius:'12px',padding:'20px',boxShadow:'0 4px 6px rgba(0,0,0,0.1)'}}>
        <div className="mns-pub" style={{paddingBottom:'12px',color:'#1a1a1a',fontFamily:'Zoho_Puvi_Regular, sans-serif',fontSize:'18px',fontWeight:'bold'}}>The Tech Journal</div>
        <div className="mns-text" style={{color:'#1a1a1a',fontFamily:'Zoho_Puvi_Regular, sans-serif',fontSize:'16px',fontStyle:'italic'}}>"Effortlessly synchronizes communication tools for businesses."</div>
      </div>
    </div>
  </div>
</section>

<section className="pdv" style={{background:'#ffffff',padding:'60px 0'}}>
  <div className="container">
    <div className="pdv-head anim d0" style={{textAlign:'center',marginBottom:'40px'}}>
      <div className="eyebrow" style={{color:'#1a1a1a',fontWeight:'bold',marginBottom:'8px'}}>Product Demo</div>
      <h2 style={{color:'#1a1a1a',fontSize:'clamp(32px,5vw,60px)',fontFamily:'Inter',marginBottom:'20px'}}>Elevate Your Team’s Productivity with Zoho Workplace</h2>
      <p style={{color:'#1a1a1a',fontFamily:'Zoho_Puvi_Regular, sans-serif',fontSize:'18px'}}>A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.</p>
    </div>
    <div className="pdv-frame anim-scale d2" style={{position:'relative',maxWidth:'900px',margin:'0 auto',borderRadius:'12px',overflow:'hidden',boxShadow:'0 10px 30px rgba(0,0,0,0.1)'}}>
      <div className="pdv-browser" style={{background:'#f5f5f5',padding:'10px',position:'relative',zIndex:2}}>
        <div className="pdv-bar" style={{display:'flex',justifyContent:'center',marginBottom:'10px'}}>
          <div className="pdv-dot" style={{width:'12px',height:'12px',background:'#ff6b00',borderRadius:'50%',margin:'0 4px'}}></div>
          <div className="pdv-dot" style={{width:'12px',height:'12px',background:'#ff6b00',borderRadius:'50%',margin:'0 4px'}}></div>
          <div className="pdv-dot" style={{width:'12px',height:'12px',background:'#ff6b00',borderRadius:'50%',margin:'0 4px'}}></div>
        </div>
        <video className="pdv-video" autoPlay muted loop playsInline style={{width:'100%',display:'block',borderRadius:'12px'}}>
          <source src="https://www.zohowebstatic.com/sites/zweb/images/workplace/homepage/banner-video.mp4" type="video/mp4"/>
        </video>
      </div>
    </div>
    <div className="pdv-cta" style={{textAlign:'center',marginTop:'40px'}}>
      <button className="pdv-btn" style={{padding:'15px 30px',background:'#ff6b00',color:'#fff',fontSize:'18px',border:'none',borderRadius:'8px',cursor:'pointer'}}>Get Started</button>
    </div>
  </div>
</section>

<section className="wtj" style={{background:'#ffffff',padding:'60px 20px'}}>
  <div className="wtj-inner" style={{maxWidth:'1200px',margin:'0 auto',position:'relative'}}>
    <div className="wtj-top" style={{textAlign:'center',paddingBottom:'30px'}}>
      <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" className="wtj-logo" style={{width:'150px',marginBottom:'16px'}}/>
      <div className="wtj-tagline" style={{fontSize:'18px',color:'#1a1a1a'}}>India's #1 B2B Software Marketplace</div>
    </div>
    <div className="wtj-divider" style={{borderTop:'1px solid #ddd',margin:'30px 0'}}></div>
    <div className="wtj-grid reveal stagger-parent" style={{display:'flex',justifyContent:'space-between',gap:'20px',flexWrap:'wrap'}}>
      <div className="wtj-card" style={{flex:'1 1 calc(25% - 20px)',minWidth:'250px',padding:'20px',boxShadow:'0 4px 16px rgba(0,0,0,0.1)',borderRadius:'12px',background:'#f8fafc'}}>
        <div className="wtj-icon" style={{marginBottom:'12px'}}>
          <img src="/output/generated-assets/zoho-workplace/34-2125ebe57d.jpg" alt="Feature 1" style={{width:'100%',borderRadius:'12px',display:'block'}}/>
        </div>
        <h4 style={{fontSize:'18px',marginBottom:'12px',color:'#1a1a1a'}}>Free Expert Consultation</h4>
        <p style={{fontSize:'16px',color:'#4a4a4a'}}>Get matched with the right software.</p>
      </div>
      <div className="wtj-card" style={{flex:'1 1 calc(25% - 20px)',minWidth:'250px',padding:'20px',boxShadow:'0 4px 16px rgba(0,0,0,0.1)',borderRadius:'12px',background:'#f8fafc'}}>
        <div className="wtj-icon" style={{marginBottom:'12px'}}>
          <img src="/output/generated-assets/zoho-workplace/18-473c14de05.jpg" alt="Feature 2" style={{width:'100%',borderRadius:'12px',display:'block'}}/>
        </div>
        <h4 style={{fontSize:'18px',marginBottom:'12px',color:'#1a1a1a'}}>Verified Reviews</h4>
        <p style={{fontSize:'16px',color:'#4a4a4a'}}>1000+ genuine customer reviews.</p>
      </div>
      <div className="wtj-card" style={{flex:'1 1 calc(25% - 20px)',minWidth:'250px',padding:'20px',boxShadow:'0 4px 16px rgba(0,0,0,0.1)',borderRadius:'12px',background:'#f8fafc'}}>
        <div className="wtj-icon" style={{marginBottom:'12px'}}>
          <img src="/output/generated-assets/zoho-workplace/17-8ee9780f0b.jpg" alt="Feature 3" style={{width:'100%',borderRadius:'12px',display:'block'}}/>
        </div>
        <h4 style={{fontSize:'18px',marginBottom:'12px',color:'#1a1a1a'}}>Best Price Guarantee</h4>
        <p style={{fontSize:'16px',color:'#4a4a4a'}}>Competitive pricing assured.</p>
      </div>
      <div className="wtj-card" style={{flex:'1 1 calc(25% - 20px)',minWidth:'250px',padding:'20px',boxShadow:'0 4px 16px rgba(0,0,0,0.1)',borderRadius:'12px',background:'#f8fafc'}}>
        <div className="wtj-icon" style={{marginBottom:'12px'}}>
          <img src="/output/generated-assets/zoho-workplace/30-b3de3a2d24.png" alt="Feature 4" style={{width:'100%',borderRadius:'12px',display:'block'}}/>
        </div>
        <h4 style={{fontSize:'18px',marginBottom:'12px',color:'#1a1a1a'}}>Dedicated Support</h4>
        <p style={{fontSize:'16px',color:'#4a4a4a'}}>Post-sale onboarding assistance.</p>
      </div>
    </div>
    <img src="/output/generated-assets/zoho-workplace/29-6dbf35ac46.png" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
</section>

<section className="plc" style={{ background: '#f8fafc', padding: '60px 0' }}>
  <div className="container">
    <div className="plc-head anim d0" style={{ textAlign: 'center', marginBottom: '40px' }}>
      <h2 style={{ fontSize: 'clamp(32px, 5vw, 60px)', fontFamily: 'Inter', color: 'var(--accent)', wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none' }}>
        Elevate Your Team’s Productivity with Zoho Workplace
      </h2>
      <img src="/output/generated-assets/zoho-workplace/29-6dbf35ac46.png" alt="Zoho Workplace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
    </div>
    <div className="plc-grid stagger-parent" style={{ display: 'flex', gap: '20px', justifyContent: 'center', alignItems: 'flex-start' }}>
      <div className="plc-card featured" style={{ background: '#fff', padding: '20px', borderRadius: '12px', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', maxWidth: '320px', flex: '1' }}>
        <div className="plc-badge" style={{ background: 'var(--primary)', color: '#fff', padding: '5px 10px', borderRadius: '5px', display: 'inline-block', fontWeight: 'bold' }}>
          Featured
        </div>
        <h3 className="plc-plan" style={{ fontSize: '24px', fontFamily: 'Inter', color: 'var(--accent)', marginBottom: '20px' }}>
          Zoho Workplace
        </h3>
        <div className="plc-amount" style={{ fontSize: '28px', fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: 'var(--accent)', marginBottom: '10px' }}>
          $6.00
        </div>
        <div className="plc-period" style={{ color: 'var(--accent)', fontFamily: 'Zoho_Puvi_Regular, sans-serif', marginBottom: '20px' }}>
          per user/month
        </div>
        <p className="plc-desc" style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: 'var(--accent)', marginBottom: '20px' }}>
          Access a full suite of productivity tools to maximize team efficiency.
        </p>
        <ul className="plc-list" style={{ listStyleType: 'none', padding: 0, marginBottom: '20px' }}>
          <li style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: 'var(--accent)', marginBottom: '10px' }}>Enterprise-Grade Custom Email</li>
          <li style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: 'var(--accent)', marginBottom: '10px' }}>Migration Assistance</li>
          <li style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: 'var(--accent)', marginBottom: '10px' }}>Collaborative Office Suite</li>
          <li style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: 'var(--accent)', marginBottom: '10px' }}>30-GB Mail Storage Per User</li>
          <li style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: 'var(--accent)', marginBottom: '10px' }}>File Storage Starts at 100 GB Per Team</li>
          <li style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: 'var(--accent)', marginBottom: '10px' }}>File Sharing & Permissions</li>
          <li style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: 'var(--accent)', marginBottom: '10px' }}>Team Chat</li>
          <li style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: 'var(--accent)', marginBottom: '10px' }}>Document Management</li>
          <li style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: 'var(--accent)', marginBottom: '10px' }}>Supported Device: Android, iOS, Windows, Mac</li>
        </ul>
        <div className="plc-btn primary" style={{ background: 'var(--primary)', color: '#fff', textAlign: 'center', width: '100%', padding: '10px 0', borderRadius: '5px', cursor: 'pointer', fontFamily: 'Inter', fontWeight: 'bold' }}>
          Get Started
        </div>
      </div>
    </div>
  </div>
</section>

<section className="tcar" style={{ background: '#ffffff', padding: '40px 0' }}>
  <div className="container">
    <header className="tcar-head anim d0">
      <h2 style={{ fontSize: 'clamp(32px,5vw,60px)', fontFamily: 'Inter', color: 'var(--accent)', marginBottom: '16px' }}>
        Elevate Your Team’s Productivity with Zoho Workplace
      </h2>
      <p style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: '#1a1a1a', marginBottom: '32px' }}>
        A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
      </p>
    </header>
    <div className="tcar-layout">
      <div className="tcar-rail" style={{ display: 'flex', overflowX: 'auto', marginBottom: '40px' }}>
        <div className="tcar-mini" style={{ flex: '0 0 auto', width: '30%', padding: '12px', border: '1px solid #e1e1e1', borderRadius: '8px', marginRight: '12px' }}>
          <p className="tcar-mini-stars" style={{ color: '#ff6b00', marginBottom: '8px' }}>★★★★★</p>
          <p style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            Zoho Workplace has streamlined our communication and collaboration...
          </p>
        </div>
        <div className="tcar-mini" style={{ flex: '0 0 auto', width: '30%', padding: '12px', border: '1px solid #e1e1e1', borderRadius: '8px', marginRight: '12px' }}>
          <p className="tcar-mini-stars" style={{ color: '#ff6b00', marginBottom: '8px' }}>★★★★★</p>
          <p style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            The platform is easy to use and has significantly improved team productivity...
          </p>
        </div>
        <div className="tcar-mini" style={{ flex: '0 0 auto', width: '30%', padding: '12px', border: '1px solid #e1e1e1', borderRadius: '8px' }}>
          <p className="tcar-mini-stars" style={{ color: '#ff6b00', marginBottom: '8px' }}>★★★★★</p>
          <p style={{ overflow: 'hidden', display: '-webkit-box', WebkitLineClamp: 2, WebkitBoxOrient: 'vertical' }}>
            Techjockey helped us identify the right Zoho Workplace plan based on our requirements...
          </p>
        </div>
      </div>
      <div className="tcar-stage anim-scale d1" style={{ position: 'relative' }}>
        <div className="tcar-track" style={{ display: 'flex', transition: 'transform 0.4s ease', transform: `translateX(${0 * -100}%)` }}>
          {[
            {
              quote: "Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.",
              author: "Amit Kapoor",
              role: "IT Manager",
              avatar: "/output/generated-assets/zoho-workplace/13-a1af876bc5.png",
            },
            {
              quote: "The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.",
              author: "Saurav Singh",
              role: "Head of Operations",
              avatar: "/output/generated-assets/zoho-workplace/35-e3c4bcd1a9.png",
            },
            {
              quote: "Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.",
              author: "Shrimi Manchanda",
              role: "Operations Manager",
              avatar: "/output/generated-assets/zoho-workplace/15-01fc6c95c0.jpg",
            },
            {
              quote: "The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.",
              author: "Shweta Thakur",
              role: "Senior System Administrator",
              avatar: "",
            },
            {
              quote: "Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.",
              author: "Narinder Sahni",
              role: "IT Head",
              avatar: "",
            },
          ].map((testimonial, index) => (
            <div key={index} className="tcar-0" style={{ flex: '0 0 100%', padding: '20px', boxSizing: 'border-box' }}>
              <blockquote className="tcar-quote" style={{ fontStyle: 'italic', marginBottom: '12px' }}>
                "{testimonial.quote}"
              </blockquote>
              <p className="tcar-stars" style={{ color: '#ff6b00', marginBottom: '12px' }}>★★★★★</p>
              <div className="tcar-text" style={{ display: 'flex', alignItems: 'center' }}>
                <div className="tcar-avatar" style={{ width: '48px', height: '48px', borderRadius: '50%', backgroundImage: `url(${testimonial.avatar})`, backgroundSize: 'cover', marginRight: '12px' }}></div>
                <div>
                  <p className="tcar-author" style={{ fontWeight: 'bold', marginBottom: '4px', color: '#1a1a1a' }}>{testimonial.author}</p>
                  <p className="tcar-role" style={{ color: '#1a1a1a', opacity: 0.7 }}>{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
        <nav className="tcar-dots" style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          {[...Array(5).keys()].map(index => (
            <button key={index} className={`tcar-dot ${0 === index ? 'active' : ''}`} style={{ width: '10px', height: '10px', borderRadius: '50%', margin: '0 4px', backgroundColor: 0 === index ? '#ff6b00' : '#e1e1e1' }}></button>
          ))}
        </nav>
      </div>
      <img src="/output/generated-assets/zoho-workplace/29-6dbf35ac46.png" alt="Zoho Workplace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
    </div>
  </div>
</section>

<section className="ctadb" style={{background:'#f8fafc', padding:'40px 20px', position: 'relative', textAlign: 'center', overflow: 'hidden'}}>
    <div className="ctadb-inner" style={{maxWidth: '800px', margin: '0 auto', position: 'relative', zIndex: 1}}>
        <h2 className="anim d0" style={{color: '#1a1a1a', fontFamily: 'Inter', fontSize: 'clamp(32px, 5vw, 60px)', marginBottom: '20px'}}>
            Elevate Your Team’s Productivity with Zoho Workplace
        </h2>
        <p className="anim d1" style={{color: '#1a1a1a', fontFamily: 'Zoho_Puvi_Regular, sans-serif', fontSize: '16px', marginBottom: '40px'}}>
            A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
        </p>
        <div className="ctadb-btns anim d2" style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
            <a href="#lead-form" className="ctadb-btn" style={{background: '#ff6b00', color: '#fff', padding: '12px 24px', textDecoration: 'none', borderRadius: '8px', transition: 'background 0.3s'}}>
                Get Started
            </a>
            <a href="#pricing" className="ctadb-ghost" style={{background: 'transparent', color: '#ff6b00', padding: '12px 24px', textDecoration: 'none', border: '2px solid #ff6b00', borderRadius: '8px', transition: 'background 0.3s'}}>
                See Pricing
            </a>
        </div>
    </div>
    <img src="/output/generated-assets/zoho-workplace/29-6dbf35ac46.png" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
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
