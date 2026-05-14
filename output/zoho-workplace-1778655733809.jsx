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

      .hero-layered{position:relative;min-height:92vh;overflow:hidden;display:flex;align-items:center}
      .hero-layer{position:absolute;inset:0;z-index:0}
      .hero-layer img,.hero-layer video{width:100%;height:100%;object-fit:cover;display:block}
      .hero-layer-overlay{z-index:1;background:linear-gradient(to right,rgba(0,0,0,0.7) 45%,transparent 85%)}
      .hero-layered-content{position:relative;z-index:4;max-width:1200px;margin:0 auto;padding:0 24px;width:100%}
      .hero-layered h1{font-size:clamp(36px,5.5vw,60px)!important;font-weight:800;color:#fff;line-height:1.05;letter-spacing:-0.03em;max-width:600px;word-break:normal!important;overflow-wrap:normal!important;hyphens:none!important}
      .hero-layered p{font-size:18px;color:rgba(255,255,255,0.82);max-width:500px;line-height:1.7;margin:18px 0 28px}
      .hero-floating-panel{position:absolute;bottom:48px;right:60px;z-index:5;width:420px;border-radius:20px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,0.45);border:1px solid rgba(255,255,255,0.12)}
      .hero-floating-panel video,.hero-floating-panel img{width:100%;display:block}
      @media(max-width:991px){.hero-floating-panel{display:none}}
    

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

   <section style={{ position: 'relative', height: '100vh', overflow: 'hidden', background: '#ffffff' }}>
  {/* BG — full cover */}
  <div style={{ position: 'absolute', inset: 0 }}>
    <img src="/output/generated-assets/zoho-workplace/17-8ee9780f0b.jpg" alt="Zoho Workplace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }}/>
  </div>

  {/* Gradient overlay */}
  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15,23,42,0.7), rgba(30,41,59,0.7))' }}></div>

  {/* Content — left */}
  <div style={{ position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'flex-start', height: '100%', paddingLeft: '40px', zIndex: 1 }}>
    <div style={{ maxWidth: '600px', color: '#ffffff' }}>
      <h1 style={{ fontFamily: 'Inter', color: '#ffffff', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: '700', lineHeight: '1.2', marginBottom: '20px' }}>
        Elevate Your Team’s Productivity with Zoho Workplace
      </h1>
      <p style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: '#f3f4f6', fontSize: '18px', lineHeight: '1.6', marginBottom: '30px' }}>
        A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
      </p>
      <a href="https://www.zoho.com/workplace/" target="_blank" rel="noreferrer" 
         style={{ display: 'inline-block', padding: '12px 24px', backgroundColor: '#ff6b00', color: '#ffffff', borderRadius: '6px', textDecoration: 'none', fontFamily: 'Inter', fontWeight: '600', marginBottom: '20px' }}>
        Get Started
      </a>
      <div style={{ marginTop: '20px' }}>
        <div style={{ marginBottom: '10px', display: 'inline-block', padding: '6px 12px', borderRadius: '50px', backgroundColor: 'rgba(255, 255, 255, 0.1)', fontFamily: 'Zoho_Puvi_Regular, sans-serif', fontSize: '14px', color:'#ffffff' }}>
          Why Choose Zoho Workplace?
        </div>
        <div style={{ marginBottom: '10px', display: 'inline-block', padding: '6px 12px', borderRadius: '50px', backgroundColor: 'rgba(255, 255, 255, 0.1)', fontFamily: 'Zoho_Puvi_Regular, sans-serif', fontSize: '14px', color:'#ffffff' }}>
          Unlock Your Business Growth with Zoho Workplace
        </div>
        <div style={{ marginBottom: '10px', display: 'inline-block', padding: '6px 12px', borderRadius: '50px', backgroundColor: 'rgba(255, 255, 255, 0.1)', fontFamily: 'Zoho_Puvi_Regular, sans-serif', fontSize: '14px', color:'#ffffff' }}>
          Integrate with Popular Apps
        </div>
        <div style={{ marginBottom: '10px', display: 'inline-block', padding: '6px 12px', borderRadius: '50px', backgroundColor: 'rgba(255, 255, 255, 0.1)', fontFamily: 'Zoho_Puvi_Regular, sans-serif', fontSize: '14px', color:'#ffffff' }}>
          Performance Beyond Limits with Zoho Workplace
        </div>
      </div>
    </div>
  </div>

  {/* Floating panel — bottom right */}
  <div style={{ position: 'absolute', right: '20px', bottom: '20px', zIndex: 1, width: '320px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)', borderRadius: '12px', overflow: 'hidden' }}>
     <video autoPlay muted loop playsInline style={{ width: '100%' }}>
       <source src="https://www.zohowebstatic.com/sites/zweb/images/workplace/homepage/banner-video.mp4" type="video/mp4" />
     </video>
  </div>
</section>

<section className="tlg" style={{backgroundColor: '#ffffff', padding: '40px 0'}}>
  <div className="container" style={{position: 'relative', maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
    <div className="tlg-label" style={{marginBottom: '20px', fontSize: '24px', fontWeight: 'bold', color: '#333'}}>
      Trusted by 100,000+ Businesses
    </div>
    <div className="tlg-logos" style={{display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '20px'}}>
      <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/03-a1d419253b.svg" alt="Partner" style={{maxWidth: '120px', margin: '10px'}} />
      <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/05-84d4bfdd99.svg" alt="Partner" style={{maxWidth: '120px', margin: '10px'}} />
      <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/04-8da7f26504.svg" alt="Partner" style={{maxWidth: '120px', margin: '10px'}} />
      <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/02-975eb13e3f.svg" alt="Partner" style={{maxWidth: '120px', margin: '10px'}} />
      <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/07-d38fc0a4cb.svg" alt="Partner" style={{maxWidth: '120px', margin: '10px'}} />
      <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/06-ae76f0c421.svg" alt="Partner" style={{maxWidth: '120px', margin: '10px'}} />
      <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/08-401f045b7d.svg" alt="Partner" style={{maxWidth: '120px', margin: '10px'}} />
      <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/09-428c7ca4a9.svg" alt="Partner" style={{maxWidth: '120px', margin: '10px'}} />
    </div>
  </div>
</section>

<section className="falt" style={{backgroundColor:'#f8fafc',padding:'60px 0'}}>
  <div className="container">
    <header className="falt-head anim d0" style={{textAlign:'center',marginBottom:'40px'}}>
      <span className="eyebrow" style={{color:'#ff6b00'}}>Features</span>
      <h2 style={{fontSize:'clamp(32px,5vw,60px)',fontWeight:'bold',lineHeight:1.2,color:'#333'}}>Elevate Your Team’s Productivity with Zoho Workplace</h2>
    </header>
    <div className="reveal" style={{display:'flex',flexDirection:'column',gap:'40px'}}>
      <div className="falt-block" style={{display:'flex',alignItems:'center',gap:'20px'}}>
        <div className="falt-num" style={{fontSize:'20px',color:'#ff6b00'}}>01</div>
        <div style={{flex:1}}>
          <h3 style={{fontSize:'24px',margin:'0 0 10px'}}>Why Choose Zoho Workplace?</h3>
          <p style={{marginBottom:'20px'}}>Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.</p>
          <div className="falt-chips" style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
            {["All-in-One Unified Workspace","Seamless Collaboration in Real Time","Work from Anywhere, Anytime","AI-Powered Productivity (Zia)"].map((feature, index) => (
              <span key={index} className="falt-chip" style={{background:'#ff6b00',color:'#fff',padding:'5px 10px',borderRadius:'12px',fontSize:'14px'}}>{feature}</span>
            ))}
          </div>
        </div>
        <div className="falt-visual" style={{flexBasis:'300px',flexShrink:0}}>
          <img src="/output/generated-assets/zoho-workplace/11-113610f4ed.png" alt="Feature 1" style={{width:'100%',borderRadius:'12px',display:'block'}}/>
        </div>
      </div>
      <div className="falt-block flip" style={{display:'flex',alignItems:'center',gap:'20px'}}>
        <div className="falt-num" style={{fontSize:'20px',color:'#ff6b00'}}>02</div>
        <div style={{flex:1}}>
          <h3 style={{fontSize:'24px',margin:'0 0 10px'}}>Unlock Your Business Growth with Zoho Workplace</h3>
          <p style={{marginBottom:'20px'}}>Zoho Workplace unifies email, collaboration, and productivity tools to streamline your business operations. Enable smarter teamwork and drive growth with a single platform.</p>
          <div className="falt-chips" style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
            {["Ideal For Your Business Size","Communicate Effectively","Integrated Business Apps","Customizable Workspace"].map((feature, index) => (
              <span key={index} className="falt-chip" style={{background:'#ff6b00',color:'#fff',padding:'5px 10px',borderRadius:'12px',fontSize:'14px'}}>{feature}</span>
            ))}
          </div>
        </div>
        <div className="falt-visual" style={{flexBasis:'300px',flexShrink:0}}>
          <img src="/output/generated-assets/zoho-workplace/12-cc95c2320b.png" alt="Feature 2" style={{width:'100%',borderRadius:'12px',display:'block'}}/>
        </div>
      </div>
      <div className="falt-block" style={{display:'flex',alignItems:'center',gap:'20px'}}>
        <div className="falt-num" style={{fontSize:'20px',color:'#ff6b00'}}>03</div>
        <div style={{flex:1}}>
          <h3 style={{fontSize:'24px',margin:'0 0 10px'}}>Integrate with Popular Apps</h3>
          <p style={{marginBottom:'20px'}}>Connect your Zoho Workplace with other business apps to ensure higher productivity and growth - all within a unified workspace.</p>
          <div className="falt-chips" style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
            {["Zoho Apps","Analytics","Accounting & Finance","Automation","Business Suites"].map((feature, index) => (
              <span key={index} className="falt-chip" style={{background:'#ff6b00',color:'#fff',padding:'5px 10px',borderRadius:'12px',fontSize:'14px'}}>{feature}</span>
            ))}
          </div>
        </div>
        <div className="falt-visual" style={{flexBasis:'300px',flexShrink:0}}>
          <img src="/output/generated-assets/zoho-workplace/30-c755824a64.jpeg" alt="Feature 3" style={{width:'100%',borderRadius:'12px',display:'block'}}/>
        </div>
      </div>
      <div className="falt-block flip" style={{display:'flex',alignItems:'center',gap:'20px'}}>
        <div className="falt-num" style={{fontSize:'20px',color:'#ff6b00'}}>04</div>
        <div style={{flex:1}}>
          <h3 style={{fontSize:'24px',margin:'0 0 10px'}}>Performance Beyond Limits with Zoho Workplace</h3>
          <p style={{marginBottom:'20px'}}>Experience unmatched productivity with Zoho Workplace, designed for secure and collaborative work from anywhere.</p>
          <div className="falt-chips" style={{display:'flex',gap:'10px',flexWrap:'wrap'}}>
            {["Secure","Anywhere Access","Intuitive","Collaborative"].map((feature, index) => (
              <span key={index} className="falt-chip" style={{background:'#ff6b00',color:'#fff',padding:'5px 10px',borderRadius:'12px',fontSize:'14px'}}>{feature}</span>
            ))}
          </div>
        </div>
        <div className="falt-visual" style={{flexBasis:'300px',flexShrink:0}}>
          <img src="/output/generated-assets/zoho-workplace/18-473c14de05.jpg" alt="Feature 4" style={{width:'100%',borderRadius:'12px',display:'block'}}/>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="fig" style={{backgroundColor:'#f8fafc',padding:'40px',borderRadius:'12px',position:'relative',overflow:'hidden'}}>
  <div style={{position:'relative',zIndex:2}}>
    <span className="eyebrow" style={{color:'#ff6b00',fontSize:'18px',fontWeight:'bold'}}>Features</span>
    <h2 style={{fontFamily:'Inter',margin:'20px 0',fontSize:'clamp(32px,5vw,60px)',lineHeight:1.2}}>Elevate Your Team’s Productivity with Zoho Workplace</h2>
    <p style={{fontFamily:'Zoho_Puvi_Regular, sans-serif',fontSize:'18px',color:'#333333',marginBottom:'40px'}}>A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.</p>
    <div className="fig-grid stagger-parent" style={{display:'grid',gap:'20px'}}>
      {[
        {
          title: "All-in-One Unified Workspace",
          description: "Access email, chat, documents, meetings, and storage in a single integrated platform. Reduce app switching and boost productivity."
        },
        {
          title: "Seamless Collaboration in Real Time",
          description: "Work together on documents, spreadsheets, and presentations with live editing, comments, and built-in communication tools."
        },
        {
          title: "Work from Anywhere, Anytime",
          description: "Stay productive on the go. Reply to emails, access presentations, or host a video conference from anywhere effortlessly."
        },
        {
          title: "AI-Powered Productivity (Zia)",
          description: "Leverage built-in AI for writing assistance in terms of grammar, readability and writing style while you work on Writer."
        },
        {
          title: "Ideal For Your Business Size",
          description: "Designed for any organization, Zoho Workplace enhances efficiency and teamwork at every scale."
        },
        {
          title: "Communicate Effectively",
          description: "Go beyond email and chat, and connect teams with a social intranet using channels, feeds, and groups."
        }
      ].map((feature, index) => (
        <div key={index} className="fig-card" style={{background:'#ffffff',borderRadius:'12px',padding:'20px',transition:'transform 0.3s, opacity 0.3s',opacity:0,transform:'translateY(20px)'}}>
          <div className="fig-icon" style={{marginBottom:'15px'}}>
            <svg width="16" height="16" style={{fill:'#ff6b00'}}><circle cx="8" cy="8" r="8"/></svg>
          </div>
          <h4 style={{fontFamily:'Inter',fontSize:'20px',marginBottom:'10px'}}>{feature.title}</h4>
          <p style={{fontFamily:'Zoho_Puvi_Regular, sans-serif',fontSize:'16px',color:'#666666'}}>{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
  <img src="/output/generated-assets/zoho-workplace/17-8ee9780f0b.jpg" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
</section>

<section className="mns" style={{ backgroundColor: '#ffffff', position: 'relative', padding: '40px 0' }}>
  <div className="container" style={{ position: 'relative', zIndex: 1 }}>
    <div className="mns-head" style={{ textAlign: 'center', marginBottom: '20px' }}>
      <p className="mns-label" style={{ color: '#ff6b00', fontWeight: 'bold', fontSize: '18px' }}>FEATURES</p>
      <h2 style={{ fontFamily: 'Inter', fontSize: 'clamp(32px, 5vw, 60px)', color: '#333', margin: '0', lineHeight: '1.2' }}>
        Elevate Your Team’s Productivity with Zoho Workplace
      </h2>
    </div>
    <div className="mns-grid stagger-parent" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', justifyContent: 'center' }}>
      <div className="mns-card reveal" style={{ flex: '1 1 calc(33.333% - 20px)', maxWidth: '300px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#f8fafc', padding: '15px', boxSizing: 'border-box' }}>
        <div className="mns-pub" style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>TechCrunch</div>
        <div className="mns-text" style={{ fontSize: '14px', color: '#666' }}>"Zoho Workplace streamlines enterprise communication seamlessly."</div>
      </div>
      <div className="mns-card reveal" style={{ flex: '1 1 calc(33.333% - 20px)', maxWidth: '300px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#f8fafc', padding: '15px', boxSizing: 'border-box' }}>
        <div className="mns-pub" style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>Forbes</div>
        <div className="mns-text" style={{ fontSize: '14px', color: '#666' }}>"Revolutionizing team productivity with unified communication tools."</div>
      </div>
      <div className="mns-card reveal" style={{ flex: '1 1 calc(33.333% - 20px)', maxWidth: '300px', borderRadius: '12px', overflow: 'hidden', backgroundColor: '#f8fafc', padding: '15px', boxSizing: 'border-box' }}>
        <div className="mns-pub" style={{ fontSize: '16px', fontWeight: 'bold', color: '#333', marginBottom: '10px' }}>The Verge</div>
        <div className="mns-text" style={{ fontSize: '14px', color: '#666' }}>"A complete suite for modern enterprises aiming to enhance collaboration."</div>
      </div>
    </div>
  </div>
  <img src="/output/generated-assets/zoho-workplace/17-8ee9780f0b.jpg" alt="Zoho Workplace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
</section>

<section className="pdv" style={{background: '#f8fafc', padding: '60px 20px'}}>
  <div className="pdv-head anim d0" style={{maxWidth: '1200px', margin: '0 auto', textAlign: 'center'}}>
    <p className="eyebrow" style={{color: '#ff6b00'}}>Product Demo Video</p>
    <h2 style={{fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: '600', color: '#333', marginBottom: '20px', fontFamily: "'Inter', sans-serif"}}>
      Elevate Your Team’s Productivity with Zoho Workplace
    </h2>
    <p style={{fontSize: '18px', color: '#555', marginBottom: '30px', fontFamily: "Zoho_Puvi_Regular, sans-serif"}}>
      A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
    </p>
  </div>
  <div className="pdv-frame anim-scale d2" style={{maxWidth: '960px', margin: '0 auto', position: 'relative'}}>
    <div className="pdv-browser" style={{borderRadius: '12px', overflow: 'hidden', border: '1px solid #ddd', position: 'relative'}}>
      <div className="pdv-bar" style={{display: 'flex', alignItems: 'center', padding: '10px', background: '#f0f0f0'}}>
        <div className="pdv-dot" style={{width: '12px', height: '12px', backgroundColor: '#ff6b00', borderRadius: '50%', marginRight: '5px'}}></div>
        <div className="pdv-dot" style={{width: '12px', height: '12px', backgroundColor: '#ff6b00', borderRadius: '50%', marginRight: '5px'}}></div>
        <div className="pdv-dot" style={{width: '12px', height: '12px', backgroundColor: '#ff6b00', borderRadius: '50%'}}></div>
      </div>
      <div style={{overflow: 'hidden', position: 'relative', paddingTop: '56.25%'}}>
        <video className="pdv-video" style={{width: '100%', height: '100%', position: 'absolute', inset: '0'}} autoPlay muted loop playsInline>
          <source src="https://www.zohowebstatic.com/sites/zweb/images/workplace/homepage/banner-video.mp4" type="video/mp4" />
        </video>
      </div>
    </div>
    <div className="pdv-cta" style={{textAlign: 'center', marginTop: '20px'}}>
      <button className="pdv-btn" style={{background: '#ff6b00', color: '#ffffff', padding: '10px 20px', borderRadius: '6px', border: 'none', cursor: 'pointer', fontFamily: "'Inter', sans-serif"}}>
        Get Started
      </button>
    </div>
  </div>
</section>

<section className="wtj" style={{background:'#ffffff',color:'#000'}}>
  <div className="wtj-inner" style={{maxWidth:'1200px',margin:'0 auto',padding:'60px 15px'}}>
    <div className="wtj-top" style={{display:'flex',justifyContent:'space-between',alignItems:'center',marginBottom:'40px'}}>
      <div>
        <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" className="wtj-logo" style={{width:'150px'}}/>
        <p className="wtj-tagline" style={{fontSize:'18px',color:'#555'}}>India's #1 B2B Software Marketplace</p>
      </div>
      <div style={{position:'relative',width:'480px',height:'270px'}}>
        <img src="/output/generated-assets/zoho-workplace/17-8ee9780f0b.jpg" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}} />
      </div>
    </div>
    <div className="wtj-divider" style={{height:'2px',background:'#eee',margin:'40px 0'}}></div>
    <div className="wtj-grid stagger-parent" style={{display:'flex',flexWrap:'wrap',gap:'20px'}}>
      <div className="wtj-card" style={{flex:'1 1 calc(25% - 20px)',background:'#f8fafc',borderRadius:'12px',padding:'20px',boxShadow:'0 2px 8px rgba(0,0,0,0.05)'}}>
        <div className="wtj-icon" style={{height:'40px',width:'40px',marginBottom:'10px',background:'#ff6b00',borderRadius:'50%'}}></div>
        <h4 style={{fontSize:'20px',marginBottom:'10px'}}>Free Expert Consultation</h4>
        <p style={{fontSize:'16px',color:'#555'}}>Get matched with right software</p>
      </div>
      <div className="wtj-card" style={{flex:'1 1 calc(25% - 20px)',background:'#f8fafc',borderRadius:'12px',padding:'20px',boxShadow:'0 2px 8px rgba(0,0,0,0.05)'}}>
        <div className="wtj-icon" style={{height:'40px',width:'40px',marginBottom:'10px',background:'#ff6b00',borderRadius:'50%'}}></div>
        <h4 style={{fontSize:'20px',marginBottom:'10px'}}>Verified Reviews</h4>
        <p style={{fontSize:'16px',color:'#555'}}>1000+ genuine customer reviews</p>
      </div>
      <div className="wtj-card" style={{flex:'1 1 calc(25% - 20px)',background:'#f8fafc',borderRadius:'12px',padding:'20px',boxShadow:'0 2px 8px rgba(0,0,0,0.05)'}}>
        <div className="wtj-icon" style={{height:'40px',width:'40px',marginBottom:'10px',background:'#ff6b00',borderRadius:'50%'}}></div>
        <h4 style={{fontSize:'20px',marginBottom:'10px'}}>Best Price Guarantee</h4>
        <p style={{fontSize:'16px',color:'#555'}}>Competitive pricing assured</p>
      </div>
      <div className="wtj-card" style={{flex:'1 1 calc(25% - 20px)',background:'#f8fafc',borderRadius:'12px',padding:'20px',boxShadow:'0 2px 8px rgba(0,0,0,0.05)'}}>
        <div className="wtj-icon" style={{height:'40px',width:'40px',marginBottom:'10px',background:'#ff6b00',borderRadius:'50%'}}></div>
        <h4 style={{fontSize:'20px',marginBottom:'10px'}}>Dedicated Support</h4>
        <p style={{fontSize:'16px',color:'#555'}}>Post-sale onboarding assistance</p>
      </div>
    </div>
  </div>
</section>

<section className="plc" style={{background:'#f8fafc',marginBottom:'2rem',padding:'2rem',position:'relative',overflow:'hidden'}}>
  <div className="anim d0" style={{position:'relative',zIndex:1}}>
    <div className="plc-head" style={{marginBottom:'2rem'}}>
      <h2 style={{fontSize:'clamp(32px,5vw,60px)',fontFamily:'Inter',color:'#ff6b00'}}>Elevate Your Team’s Productivity with Zoho Workplace</h2>
    </div>
  </div>
  <img src="/output/generated-assets/zoho-workplace/17-8ee9780f0b.jpg" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0,zIndex:0}}/>
  <div className="plc-grid stagger-parent" style={{display:'flex',flexWrap:'wrap',justifyContent:'center',gap:'1rem',position:'relative',zIndex:1}}>
    <div className={`plc-card ${"highlighted" ? "featured" : ""}`} style={{flex:'1 1 calc(33.333% - 1rem)',background:'#ffffff',padding:'1.5rem',borderRadius:'12px',maxWidth:'350px',boxSizing:'border-box'}}>
      <div className="plc-plan" style={{fontSize:'1.25rem',fontWeight:'bold',marginBottom:'1rem'}}>Zoho Workplace</div>
      <div className="plc-amount" style={{display:'flex',alignItems:'baseline',marginBottom:'1rem'}}>
        <span style={{fontSize:'2rem',fontWeight:'bold',lineHeight:'1'}}>$</span>
        <span style={{fontSize:'2.5rem',fontFamily:'Zoho_Puvi_Regular',marginRight:'0.5rem'}}></span>
        <span className="plc-period" style={{fontSize:'1rem'}}>per user/month</span>
      </div>
      <ul className="plc-list" style={{listStyleType:'none',paddingLeft:'0',marginBottom:'1rem'}}>
        <li style={{marginBottom:'0.5rem'}}>Enterprise-Grade Custom Email</li>
        <li style={{marginBottom:'0.5rem'}}>Migration Assistance</li>
        <li style={{marginBottom:'0.5rem'}}>Collaborative Office Suite</li>
        <li style={{marginBottom:'0.5rem'}}>30-GB Mail Storage Per User</li>
        <li style={{marginBottom:'0.5rem'}}>File Storage Starts at 100 GB Per Team</li>
        <li style={{marginBottom:'0.5rem'}}>File Sharing & Permissions</li>
        <li style={{marginBottom:'0.5rem'}}>Team Chat</li>
        <li style={{marginBottom:'0.5rem'}}>Document Management</li>
        <li style={{marginBottom:'0.5rem'}}>Supported Device: Android, iOS, Windows, Mac</li>
      </ul>
      <button className="plc-btn primary" style={{background:'#ff6b00',color:'#fff',padding:'0.75rem 1.5rem',border:'none',borderRadius:'6px',cursor:'pointer'}}>Get Started</button>
    </div>
  </div>
</section>

<section className="tcar" style={{background:'#f8fafc',padding:'50px 0'}}>
  <div className="tcar-head anim d0" style={{textAlign:'center',marginBottom:'40px'}}>
    <h2 style={{fontSize:'clamp(32px,5vw,60px)',fontFamily:'Inter, sans-serif',color:'#333'}}>Elevate Your Team’s Productivity with Zoho Workplace</h2>
    <p style={{fontSize:'18px',fontFamily:'Zoho_Puvi_Regular, sans-serif',color:'#666',maxWidth:'800px',margin:'0 auto'}}>A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.</p>
  </div>
  <div className="tcar-layout" style={{maxWidth:'1200px',margin:'0 auto',position:'relative',padding:'0 20px'}}>
    <div className="tcar-rail" style={{display:'flex',justifyContent:'space-between',marginBottom:'40px'}}>
      {testimonials.slice(0,3).map((testimonial, index) => (
        <div key={index} className="tcar-mini" style={{flex:'0 0 32%',padding:'10px',border:'1px solid #ddd',borderRadius:'8px',background:'#fff'}}>
          <div className="tcar-mini-text" style={{color:'#333',fontSize:'16px',lineHeight:'1.5',display:'-webkit-box',WebkitLineClamp:2,WebkitBoxOrient:'vertical',overflow:'hidden'}}>
            {testimonial.quote}
          </div>
        </div>
      ))}
    </div>
    <div className="tcar-stage anim-scale d1" style={{overflow:'hidden',position:'relative'}}>
      <div className="tcar-track" style={{display:'flex',transition:'transform 0.5s',transform:`translateX(-${0 * 100}%)`}}>
        {testimonials.map((testimonial, index) => (
          <div key={index} className="tcar-0" style={{minWidth:'100%',padding:'20px',boxSizing:'border-box'}}>
            <div className="tcar-quote" style={{marginBottom:'30px',fontSize:'16px',lineHeight:'1.5',color:'#444'}}>
              "{testimonial.quote}"
            </div>
            <div className="tcar-author" style={{display:'flex',alignItems:'center'}}>
              <img className="tcar-avatar" src={testimonial.avatar} alt={testimonial.author} style={{width:'50px',height:'50px',borderRadius:'50%',marginRight:'15px'}}/>
              <div>
                <div className="tcar-name" style={{fontSize:'16px',fontWeight:'bold',color:'#333'}}>{testimonial.author}</div>
                <div className="tcar-role" style={{fontSize:'14px',color:'#999'}}>{testimonial.role}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="tcar-dots" style={{textAlign:'center',marginTop:'20px'}}>
      {testimonials.map((_, index) => (
        <span key={index} className={`tcar-dot ${0 === index ? 'active' : ''}`} style={{display:'inline-block',width:'10px',height:'10px',borderRadius:'50%',background:0 === index ? '#ff6b00' : '#ccc',margin:'0 5px'}}></span>
      ))}
    </div>
  </div>
</section>

<section className="ctadb" style={{backgroundColor: '#ffffff', padding: '80px 0', position: 'relative'}}>
  <div className="ctadb-inner" style={{maxWidth: '1100px', margin: '0 auto', position: 'relative', zIndex: 1, textAlign: 'center', padding: '50px 20px'}}>
    <h2 className="anim d0" style={{fontFamily: 'Inter', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 'bold', color: '#333', margin: '0 0 20px', wordBreak: 'normal', overflowWrap: 'normal', hyphens: 'none'}}>Elevate Your Team’s Productivity with Zoho Workplace</h2>
    <p className="anim d1" style={{fontFamily: 'Zoho_Puvi_Regular, sans-serif', fontSize: '18px', color: '#555', lineHeight: '1.6', margin: '0 0 40px'}}>A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.</p>
    <div className="ctadb-btns anim d2" style={{display: 'flex', justifyContent: 'center', gap: '20px'}}>
      <a href="#lead-form" className="ctadb-btn" style={{backgroundColor: '#ff6b00', padding: '15px 30px', borderRadius: '8px', color: '#fff', textDecoration: 'none', fontSize: '16px', fontWeight: 'bold'}}>Get Started</a>
      <a href="#lead-form" className="ctadb-ghost" style={{border: '2px solid #ff6b00', padding: '13px 28px', borderRadius: '8px', color: '#ff6b00', textDecoration: 'none', fontSize: '16px'}}>Get Your Free Trial</a>
    </div>
  </div>
  <img src="/output/generated-assets/zoho-workplace/17-8ee9780f0b.jpg" alt="Zoho Workplace" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0}} />
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
