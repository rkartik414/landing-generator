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
      --bodyBg: #ffffff;
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
     <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-xl border-b border-white/10 py-3.5">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center gap-4">
          <span class="font-extrabold text-xl" style="color:#ff6b00">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span>
          <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28" alt="Techjockey" className="h-7 opacity-95" />
          <a href="#lead-form" className="inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#ff6b00] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none disabled:opacity-50 text-sm" style={{textDecoration:'none'}}>Get Free Consultation</a>
        </div>
      </nav>

      <section className="hvf" style={{backgroundColor:'#ffffff',position:'relative',padding:'40px'}}>
  <img src="/output/generated-assets/ds_1778480092908_5c4a609b/08-ad010afc08.png" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0,opacity:0.2}}/>
  <div className="hvf-overlay"></div>
  <div className="hvf-content reveal" style={{position: 'relative', display: 'flex', justifyContent: 'space-between'}}>
    <div className="hvf-inner" style={{maxWidth:'50%',zIndex:1}}>
      <h1 className="hvf-h1 anim d0" style={{wordBreak:'normal',overflowWrap:'normal',hyphens:'none',fontSize:'clamp(32px,5vw,60px) !important',marginBottom:'1rem'}}>Create High-Quality AI Images & Videos with <span className="hvf-accent">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span> Generative Models</h1>
      <p className="hvf-desc anim d1" style={{marginBottom:'1rem'}}>Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
      <div className="hvf-chips" style={{marginBottom:'2rem'}}>
        {["Seedream 4.5","Seedance 1.5 Pro"].map((chip, index) => (
          <span key={index} className="hvf-chip" style={{padding:'0.5rem 1rem',background:'#f8fafc',borderRadius:'8px',marginRight:'0.5rem'}}>{chip}</span>
        ))}
      </div>
      <button className="hvf-btn" style={{padding:'1rem 2rem',background:'#ff6b00',color:'#fff',borderRadius:'8px',border:'none',cursor:'pointer'}}>Generate with AI</button>
    </div>
    <div className="hvf-inner" style={{background:'#f8fafc',padding:'2rem',borderRadius:'12px',maxWidth:'40%',zIndex:1}}>
      <form className="hvf-form">
        <div className="anim d2">
          <input type="text" placeholder="Name" className="hvf-input" style={{width:'100%',padding:'0.75rem',marginBottom:'1rem'}}/>
          <input type="email" placeholder="Email" className="hvf-input" style={{width:'100%',padding:'0.75rem',marginBottom:'1rem'}}/>
          <input type="tel" placeholder="Phone" className="hvf-input" style={{width:'100%',padding:'0.75rem',marginBottom:'1rem'}}/>
          <input type="text" placeholder="Company" className="hvf-input" style={{width:'100%',padding:'0.75rem',marginBottom:'1rem'}}/>
          <button type="submit" className="hvf-btn" style={{width:'100%',padding:'1rem',background:'#ff6b00',color:'#fff',borderRadius:'8px',border:'none',cursor:'pointer'}}>Submit</button>
        </div>
      </form>
    </div>
  </div>
  <div className="hvf-proof" style={{marginTop:'2rem',display:'flex',alignItems:'center',zIndex:1,position:'relative'}}>
    <div className="hvf-avatars" style={{display:'flex',marginRight:'1rem'}}>
      {['AB', 'CD', 'EF', 'GH'].map((initials, index) => (
        <div key={index} className="hvf-av" style={{backgroundColor:['#ffc107','#17a2b8','#28a745','#dc3545'][index],width:'40px',height:'40px',borderRadius:'50%',display:'flex',alignItems:'center',justifyContent:'center',color:'#fff',fontWeight:'bold',marginRight:'0.5rem'}}>{initials}</div>
      ))}
    </div>
    <div className="hvf-stars" style={{display:'flex'}}>
      {new Array(5).fill(0).map((_,i) => (
        <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="#ffd700" style={{width:'20px',height:'20px',marginRight:'0.25rem'}}>
          <path d="M12 .587l3.668 7.84 8.18 1.246-6.113 6.174 1.44 8.407L12 18.056l-7.176 4.198L6.263 15.8.15 9.627l8.18-1.246L12 .587z" />
        </svg>
      ))}
    </div>
    <span className="hvf-rcount" style={{marginLeft:'0.5rem',color:'#333'}}>Trusted by Many</span>
  </div>
</section>

<section className="tms bg-[#f8fafc] p-8">
  <div className="tms-grid grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="tms-cell reveal anim d0 flex flex-col items-center text-center">
      <span className="tms-val text-4xl font-bold text-[#ff6b00]" data-count="450">
// 450+
      </span>
      <span className="tms-label text-lg font-medium mt-2">
        High-Quality AI Models
      </span>
      <span className="tms-note text-sm text-gray-600 mt-1">
        Powered by ByteDance technology
      </span>
    </div>
    <div className="tms-cell reveal anim d0-50 flex flex-col items-center text-center">
      <span className="tms-val text-4xl font-bold text-[#ff6b00]" data-count="120">
// 120
      </span>
      <span className="tms-label text-lg font-medium mt-2">
        Image & Video Projects
      </span>
      <span className="tms-note text-sm text-gray-600 mt-1">
        Created with Seedream and Seedance
      </span>
    </div>
    <div className="tms-cell reveal anim d0-75 flex flex-col items-center text-center">
      <span className="tms-val text-4xl font-bold text-[#ff6b00]" data-count="98">
// 98%
      </span>
      <span className="tms-label text-lg font-medium mt-2">
        User Satisfaction Rate
      </span>
      <span className="tms-note text-sm text-gray-600 mt-1">
        Based on feedback from creators
      </span>
    </div>
  </div>
  <div className="relative mt-10">
    <img src="/output/generated-assets/ds_1778480092908_5c4a609b/08-ad010afc08.png" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{ width:'100%', height:'100%', objectFit:'cover', display:'block', position:'absolute', inset:0 }}/>
  </div>
</section>

<section className="falt bg-[#f8fafc] py-12">
  <header className="falt-head anim d0">
    <div className="falt-num eyebrow">0{3}</div>
    <h2 className="reveal text-3xl font-bold mb-4">Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <div style={{position:'relative',paddingBottom:'56.25%'}}>
      <img src="/output/generated-assets/ds_1778480092908_5c4a609b/08-ad010afc08.png" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
    </div>
  </header>
  {[
    {
      num: "01",
      title: "AI Image Generation with Seedream 4.5",
      description: "Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.",
      features: [
        "Advanced Text–Image Alignment",
        "High-Resolution Output",
        "Superior Typographic Rendering",
        "Multi-Image Composition with Identity Preservation",
        "Strong Structural Fidelity"
      ],
      image_url: "/output/generated-assets/ds_1778480092908_5c4a609b/03-68d577147c.jpeg",
      video_url: ""
    },
    {
      num: "02",
      title: "AI Video Generation with Seedance 1.5 Pro by Bytedance",
      description: "Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.",
      features: [
        "Key Capabilities of Seedance 1.5 Pro",
        "Text-to-Video Generation",
        "Audio-Visual Synchronization",
        "Multilingual Lip-Sync",
        "Cinematic Camera Control",
        "10× Faster Inference"
      ],
      image_url: "/output/generated-assets/ds_1778480092908_5c4a609b/02-0fc092f7f9.jpeg",
      video_url: ""
    }
  ].map((block, index) => (
    <div key={index} className={`falt-block reveal ${index % 2 !== 0 ? 'flip' : ''}`}>
      <div className="falt-num">{block.num}</div>
      <h3 className="text-xl font-semibold mb-2">{block.title}</h3>
      <p className="falt-copy mb-4">{block.description}</p>
      <div className="falt-chips flex gap-2 mb-4">
        {block.features.map((feature, i) => (
          <span key={i} className="falt-chip bg-[#ff6b00] text-white px-2 py-1 rounded">{feature}</span>
        ))}
      </div>
      <div className="falt-visual">
        {block.video_url ? (
          <video autoPlay muted loop playsInline style={{width:'100%',borderRadius:'12px'}}><source src={block.video_url} type="video/mp4"/></video>
        ) : (
          <img src={block.image_url} alt={`Feature ${index + 1}`} style={{width:'100%',borderRadius:'12px',display:'block'}}/>
        )}
      </div>
    </div>
  ))}
</section>

export default LandingPage;

<section className="mns bg-[#ffffff] py-20 px-6 md:px-12 lg:px-20 relative">
  <img src="/output/generated-assets/ds_1778480092908_5c4a609b/08-ad010afc08.png" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  <div className="mns-head text-center relative z-10">
    <span className="mns-label text-[#ff6b00] font-bold text-lg reveal">FEATURES</span>
    <h2 className="font-['Plus Jakarta Sans'] text-2xl md:text-3xl lg:text-4xl font-extrabold mt-4 text-[#222222] reveal">Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <p className="text-base md:text-lg mt-2 text-[#444444] font-['Inter'] reveal">Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation. Generate with AI today!</p>
  </div>
  <div className="mns-grid mt-12 md:mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
    {[{publication: "Tech Daily", headline: "Experience next-level AI with Seedream and Seedance."}, 
      {publication: "AI Innovations", headline: "Revolutionary AI video production with Seedance 1.5 Pro."}, 
      {publication: "Design World", headline: "Stunning image generation achieved effortlessly using Seedream 4.5."}
    ].map((news, index) => (
      <div key={index} className={`mns-card pb-10 bg-[#f8fafc] rounded-lg p-6 shadow-lg reveal anim d${index * 100}`}>
        <span className="mns-pub font-bold text-md text-[#222222]">Publication: {news.publication}</span>
        <p className="mns-text mt-3 text-sm text-[#333333]">"{news.headline}"</p>
        {
          index === 0 ? <img src="/output/generated-assets/ds_1778480092908_5c4a609b/03-68d577147c.jpeg" alt="Feature 1" style={{width:'100%',borderRadius:'12px',display:'block'}}/> : 
          <img src="/output/generated-assets/ds_1778480092908_5c4a609b/02-0fc092f7f9.jpeg" alt={`Feature ${index + 1}`} style={{width:'100%',borderRadius:'12px',display:'block'}}/>
        }
      </div>
    ))}
  </div>
</section>

<section className="fig">
  <div className="fig-head">
    <div className="eyebrow">Features</div>
    <h2 className="text-4xl font-bold mb-4" style={{fontFamily: 'Plus Jakarta Sans'}}>Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    <p className="text-lg mb-6" style={{fontFamily: 'Inter'}}>Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
  </div>
  <div className="fig-grid">
    {[{"title":"Advanced Text–Image Alignment","description":"Accurately translates prompts into visuals with improved semantic understanding."},{"title":"High-Resolution Output","description":"Generate native images up to 1K–4K resolution with strong visual fidelity."},{"title":"Superior Typographic Rendering","description":"Optimized for posters, ads, and text-heavy visual designs."},{"title":"Multi-Image Composition with Identity Preservation","description":"Combines multiple inputs while accurately maintaining subject consistency."},{"title":"Strong Structural Fidelity","description":"Maintains composition, layout, and scene structure with high precision."},{"title":"Key Capabilities of Seedance 1.5 Pro","description":"Seedance enables professional-grade AI video production with narrative coherence and realistic motion."}].map((feature, index) => (
      <div className="fig-card relative" key={index}>
        <div className="fig-icon absolute" style={{width: '16px', height: '16px', backgroundColor: 'var(--accent)'}}></div>
        <h4 className="font-bold mt-4 text-lg" style={{fontFamily: 'Inter'}}>{feature.title}</h4>
        <p className="mt-2">{feature.description}</p>
      </div>
    ))}
  </div>
  <img src="/output/generated-assets/ds_1778480092908_5c4a609b/08-ad010afc08.png" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
</section>

<section className="wtj bg-[#ffffff]">
  <div className="wtj-inner max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
    <div className="wtj-top mb-8">
      <div className="wtj-logo mb-4">
        <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" className="wtj-logo" />
      </div>
      <div className="wtj-tagline text-2xl font-bold text-center">
        India's #1 B2B Software Marketplace
      </div>
    </div>
    <div className="wtj-divider border-t border-gray-200 mb-12"></div>
    <div className="wtj-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
      {[
        {title:"Free Expert Consultation", description:"Get matched with the right software"},
        {title:"Verified Reviews", description:"1000+ genuine customer reviews"},
        {title:"Best Price Guarantee", description:"Competitive pricing assured"},
        {title:"Dedicated Support", description:"Post-sale onboarding assistance"}
      ].map((point, index) => (
        <div key={index} className="wtj-card flex items-start space-x-4 reveal">
          <div className="wtj-icon w-12 h-12 bg-[#ff6b00] rounded-full flex items-center justify-center text-white text-lg font-bold">
            {index + 1}
          </div>
          <div>
            <h4 className="text-lg font-semibold text-gray-900">{point.title}</h4>
            <p className="mt-1 text-sm text-gray-600">{point.description}</p>
          </div>
        </div>
      ))}
    </div>
    <div className="mt-12 relative h-72">
      <img src="/output/generated-assets/ds_1778480092908_5c4a609b/08-ad010afc08.png" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
    </div>
  </div>
</section>

<section className="pdc bg-[#ffffff] relative overflow-hidden py-16 px-8">
  <img src="/output/generated-assets/ds_1778480092908_5c4a609b/08-ad010afc08.png" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
  <div className="relative z-10 max-w-6xl mx-auto">
    <header className="pdc-head reveal anim d0">
      <p className="eyebrow text-lg font-semibold tracking-wide text-gray-500">Pricing & Plans</p>
      <h2 className="text-3xl md:text-4xl font-bold text-black mt-2">Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    </header>
    <div className="pdc-grid mt-10 grid md:grid-cols-2 gap-6 reveal">
      {[{
        "name": "Seedream 4.5 (AI Image Generation)",
        "price": "",
        "originalPrice": "",
        "discount": "Save 20%",
        "period": "per user/month",
        "description": "",
        "includes": [
          "High-resolution image generation (up to 4K quality)",
          "Text-to-image & multimodal image editing",
          "Multi-image composition for complex visuals",
          "Enhanced typographic rendering for posters, ads & text-heavy designs"
        ],
        "highlighted": true
      }, {
        "name": "Seedance 1.5 Pro (AI Video Generation)",
        "price": "Starting at $1,000/month/",
        "originalPrice": "",
        "discount": "",
        "period": "per user/month",
        "description": "",
        "includes": [
          "Text-to-video generation with cinematic output",
          "Native audio + video generation (synchronized)",
          "Multilingual lip-sync capabilities",
          "Fast inference for quicker video production"
        ],
        "highlighted": false
      }].map((plan, index) => (
        <div key={index} className={`pdc-card ${plan.highlighted ? "featured" : ""} flex flex-col bg-white p-8 rounded-lg shadow-md`}>
          {plan.highlighted && <span className="pdc-badge bg-[#ff6b00] text-white text-sm font-semibold py-1 px-4 rounded-full mb-4">{plan.discount}</span>}
          <h3 className="pdc-plan text-xl font-semibold text-black mb-4">{plan.name}</h3>
          <div className="pdc-price text-3xl font-bold text-black mb-2">
            <span className="pdc-amount">{plan.price || "Contact for Pricing"}</span>
            {plan.originalPrice && <span className="pdc-old line-through text-gray-500 ml-2">{plan.originalPrice}</span>}
          </div>
          <p className="pdc-period text-gray-600 mb-4">{plan.period}</p>
          <ul className="pdc-list space-y-2 mb-6">
            {plan.includes.map((item, idx) => (
              <li key={idx} className="flex items-start">
                <svg className="pdc-check w-5 h-5 text-[#ff6b00] mr-2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                  <path fillRule="evenodd" d="M16.704 5.293a1 1 0 011.32.083l.094.094a1 1 0 01.083 1.32l-.094.094-10 10a1 1 0 01-1.32.083l-.094-.083-5-5a1 1 0 011.32-1.498l.094.083L7 14.586.586 9.908a1 1 0 01-.083-1.32l.094-.094a1 1 0 011.32-.083l.094.083L7 12.414l9.293-9.293.094-.094-.094.094zM2 9l6 6 11-11.122L22 4H15L10 9z" clipRule="evenodd" />
                </svg>
                <span>{item}</span>
              </li>
            ))}
          </ul>
          <button className="pdc-btn w-full py-3 bg-[#ff6b00] text-white font-medium rounded-lg">Generate with AI</button>
        </div>
      ))}
    </div>
  </div>
</section>

export default LandingPage;

<section className="tcar bg-[#f8fafc] py-12">
  {(() => {
    const [slide, setSlide] = React.useState(0);
    React.useEffect(() => {
      const t = setInterval(() => setSlide((p) => (p + 1) % 5), 4000);
      return () => clearInterval(t);
    }, []);

    return (
      <>
        <div className="tcar-head text-center anim d0">
          <h1 className="text-2xl font-bold Plus Jakarta Sans">
            Create High-Quality AI Images & Videos with ByteDance Generative Models
          </h1>
          <p className="mt-4 text-lg Inter">
            Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
          </p>
        </div>
        <div className="tcar-layout flex justify-center items-start mt-8">
          <div className="tcar-rail flex space-x-4">
            {[{quote:"Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.","author":"Vaishali Saxena","role":"Creative Director","company":"","avatar":""},{quote:"Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.","author":"Vihaan Pandey","role":"Video Producer","company":"","avatar":""},{quote:"The multimodal editing capabilities in Seedream make it easy to refine images with precision.","author":"Anurag Malhotra","role":"Art Director","company":"","avatar":""}].map((t, i) => (
              <div key={i} className="tcar-mini bg-white p-4 rounded shadow anim d0">
                <div className="tcar-mini-stars text-[#ff6b00] mb-2">
                  ★★★★★
                </div>
                <div className="tcar-quote text-sm mb-1" style={{ WebkitLineClamp: 2, display: '-webkit-box', WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>{t.quote}</div>
                <div className="tcar-author text-xs text-gray-500">{t.author}</div>
              </div>
            ))}
          </div>
        </div>
        <div className="tcar-stage anim-scale d1 mt-8">
          <div className={`tcar-track transform translate-x-${slide * -100}%`}>
            {[{quote:"Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.","author":"Vaishali Saxena","role":"Creative Director","company":"","avatar":""},{quote:"Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.","author":"Vihaan Pandey","role":"Video Producer","company":"","avatar":""},{quote:"The multimodal editing capabilities in Seedream make it easy to refine images with precision.","author":"Anurag Malhotra","role":"Art Director","company":"","avatar":""},{quote:"Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.","author":"Ashutosh Singh","role":"Marketing Manager","company":"","avatar":""},{quote:"From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.","author":"Shrimmi Saxena","role":"Creative Lead","company":"","avatar":""}].map((t, i) => (
              <div key={i} className="tcar-slide bg-white p-6 rounded shadow flex space-x-4">
                <div className="tcar-avatar bg-[#ff6b00] text-white w-12 h-12 flex items-center justify-center rounded-full uppercase">
                  {t.author.split(' ').map(word => word[0]).join('')}
                </div>
                <div className="tcar-text">
                  <div className="tcar-quote text-[#ff6b00] mb-2">★★★★★</div>
                  <p className="mb-2">{t.quote}</p>
                  <div className="tcar-author">
                    <span className="tcar-name font-bold">{t.author}</span>, <span className="tcar-role text-sm text-gray-500">{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tcar-dots flex justify-center mt-6">
          {[0, 1, 2, 3, 4].map((_, i) => (
            <div
              key={i}
              className={`tcar-dot w-2 h-2 rounded-full mx-1 ${i === slide ? 'bg-[#ff6b00]' : 'bg-gray-400'}`}
              onClick={() => setSlide(i)}
            ></div>
          ))}
        </div>
      </>
    );
  })()}
</section>

export default LandingPage;

<section className="ctadb" style={{position: 'relative', overflow: 'hidden', background: '#ffffff', padding: '60px 20px'}}>
  <img src="/output/generated-assets/ds_1778480092908_5c4a609b/08-ad010afc08.png" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  <div className="ctadb-inner" style={{position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: '800px', margin: '0 auto'}}>
    <h2 className="anim d0" style={{color: '#ff6b00', fontFamily: 'Plus Jakarta Sans', fontSize: 'clamp(32px, 5vw, 60px)', marginBottom: '24px'}}>
      Create High-Quality AI Images & Videos with ByteDance Generative Models
    </h2>
    <p className="anim d1" style={{color: '#333', fontFamily: 'Inter', fontSize: '18px', lineHeight: '1.6', marginBottom: '40px'}}>
      Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
    </p>
    <div className="ctadb-btns anim d2">
      <a href="#lead-form" className="ctadb-btn" style={{padding: '12px 24px', backgroundColor: '#ff6b00', color: '#fff', borderRadius: '6px', display: 'inline-block', marginRight: '16px', textDecoration: 'none'}}>
        Generate with AI
      </a>
      <a href="#pricing" className="ctadb-ghost" style={{padding: '12px 24px', backgroundColor: 'transparent', color: '#ff6b00', borderRadius: '6px', border: '2px solid #ff6b00', display: 'inline-block', textDecoration: 'none'}}>
        See Pricing
      </a>
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