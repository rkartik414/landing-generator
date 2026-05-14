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
    

      .ftd         { padding:96px 0;
                     background:var(--bg, #111827); color:#fff; }
      .ftd-head    { text-align:center; max-width:720px;
                     margin:0 auto 60px; }
      .ftd-head h2 { font-size:44px; font-weight:700;
                     letter-spacing:-0.04em; line-height:1.08;
                     margin:14px 0 16px; }
      .ftd-head p  { opacity:0.7; font-size:17px; line-height:1.75; }
      .ftd-layout  { display:grid; grid-template-columns:300px 1fr;
                     gap:32px; max-width:1200px; margin:0 auto;
                     padding:0 24px; align-items:start; }
      .ftd-tabs    { display:grid; gap:8px; }
      .ftd-tab     { padding:16px 20px; border-radius:14px;
                     background:rgba(255,255,255,0.04);
                     border:1px solid rgba(255,255,255,0.08);
                     cursor:pointer; transition:all 0.25s;
                     text-align:left; color:#fff; }
      .ftd-tab.active { background:rgba(var(--accent-rgb,255,107,0),0.12);
                        border-color:rgba(var(--accent-rgb,255,107,0),0.35); }
      .ftd-tab h4  { font-size:15px; font-weight:700; margin:0 0 5px;
                     letter-spacing:-0.02em; }
      .ftd-tab p   { font-size:13px; color:rgba(255,255,255,0.6);
                     margin:0; line-height:1.5; }
      .ftd-preview { border-radius:20px; overflow:hidden;
                     background:rgba(255,255,255,0.04);
                     border:1px solid rgba(255,255,255,0.1);
                     min-height:480px; position:relative; }
      .ftd-panel   { display:none; padding:32px; }
      .ftd-panel.active { display:block; }
      .ftd-panel img { width:100%; border-radius:12px; display:block; }
      .ftd-panel h3 { font-size:28px; font-weight:700;
                      letter-spacing:-0.03em; margin:0 0 14px; }
      .ftd-panel p  { font-size:16px; color:rgba(255,255,255,0.7);
                      line-height:1.75; }
      .ftd-features { display:grid; grid-template-columns:1fr 1fr;
                      gap:12px; margin-top:24px; }
      .ftd-feat    { display:flex; gap:10px; align-items:start; }
      .ftd-feat-icon { width:20px; height:20px; flex-shrink:0;
                       color:var(--accent,#ff6b00); margin-top:2px; }
      .ftd-feat p  { font-size:14px; color:rgba(255,255,255,0.75);
                     margin:0; line-height:1.5; }
    

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

   <section style={{position: 'relative', backgroundColor: '#f8fafc', overflow: 'hidden', paddingBottom: '4rem'}}>
  {/* Background Layer */}
  <div className="hero-layer hero-layer-bg" style={{position: 'absolute', inset: 0, zIndex: 0, overflow: 'hidden'}}>
    <img src="/output/generated-assets/zoho-workplace/32-3921942fc4.jpeg" alt="Zoho Workplace" style={{width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0}} />
  </div>

  {/* Gradient Overlay */}
  <div style={{position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(15, 23, 42, 0.7), rgba(30, 41, 59, 0.7))', zIndex: 1}}></div>

  {/* Content Layer */}
  <div style={{position: 'relative', maxWidth: '1200px', margin: '0 auto', padding: '2rem', zIndex: 2, display: 'flex', flexDirection: 'column', alignItems: 'flex-start'}}>
    <h1 style={{fontFamily: 'Inter', color: '#ffffff', fontSize: 'clamp(32px, 5vw, 60px)', lineHeight: '1.2', marginBottom: '1rem', zIndex: 3}}>
      Elevate Your Team’s Productivity with Zoho Workplace
    </h1>
    <p style={{fontFamily: 'Zoho_Puvi_Regular, sans-serif', color: '#d1d5db', fontSize: '1.125rem', marginBottom: '2rem', maxWidth: '600px', zIndex: 3}}>
      A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
    </p>
    <div style={{display: 'flex', gap: '1rem', marginBottom: '2rem', zIndex: 3}}>
      <div style={{padding: '0.5rem 1rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#ffffff', fontFamily: 'Zoho_Puvi_Regular, sans-serif'}}>
        Why Choose Zoho Workplace?
      </div>
      <div style={{padding: '0.5rem 1rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#ffffff', fontFamily: 'Zoho_Puvi_Regular, sans-serif'}}>
        Unlock Your Business Growth with Zoho Workplace
      </div>
      <div style={{padding: '0.5rem 1rem', backgroundColor: 'rgba(255, 255, 255, 0.1)', borderRadius: '8px', color: '#ffffff', fontFamily: 'Zoho_Puvi_Regular, sans-serif'}}>
        Integrate with Popular Apps
      </div>
    </div> 
    <a href="#" target="_blank" rel="noreferrer" style={{padding: '1rem 2rem', backgroundColor: '#ff6b00', color: '#ffffff', borderRadius: '50px', textDecoration: 'none', fontWeight: 'bold', fontFamily: 'Inter', zIndex: 3}}>
      Get Started
    </a>
  </div>

  {/* Floating Panel */}
  <div className="hero-floating-panel" style={{position: 'absolute', bottom: '1.5rem', right: '1.5rem', width: '300px', boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)', borderRadius: '12px', overflow: 'hidden', zIndex: 4}}>
    <video autoPlay muted loop playsInline style={{width: '100%', display: 'block', borderRadius: '12px'}}>
      <source src="https://www.zohowebstatic.com/sites/zweb/images/workplace/homepage/banner-video.mp4" type="video/mp4" />
    </video>
  </div>
</section>

<section className="tlg" style={{backgroundColor:'#ffffff',padding:'50px 0',position:'relative'}}>
  <div className="tlg-label" style={{textAlign:'center',marginBottom:'30px',color:'#1a1a1a',fontSize:'24px',fontWeight:'bold'}}>
    Trusted by 100,000+
  </div>
  <div className="tlg-logos" style={{display:'flex',justifyContent:'center',alignItems:'center',flexWrap:'wrap',maxWidth:'1000px',margin:'0 auto'}}>
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/02-975eb13e3f.svg" alt="Partner" style={{width:'120px',margin:'15px'}}/>
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/05-ae76f0c421.svg" alt="Partner" style={{width:'120px',margin:'15px'}}/>
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/04-84d4bfdd99.svg" alt="Partner" style={{width:'120px',margin:'15px'}}/>
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/03-8da7f26504.svg" alt="Partner" style={{width:'120px',margin:'15px'}}/>
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/09-3c4d2f8415.svg" alt="Partner" style={{width:'120px',margin:'15px'}}/>
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/07-401f045b7d.svg" alt="Partner" style={{width:'120px',margin:'15px'}}/>
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/06-d38fc0a4cb.svg" alt="Partner" style={{width:'120px',margin:'15px'}}/>
    <img className="tlg-logo" src="/output/generated-assets/zoho-workplace/08-428c7ca4a9.svg" alt="Partner" style={{width:'120px',margin:'15px'}}/>
  </div>
  <div style={{position:'relative',width:'100%',maxWidth:'1200px',height:'400px',margin:'50px auto 0',overflow:'hidden',borderRadius:'12px'}}>
    <img src="/output/generated-assets/zoho-workplace/32-3921942fc4.jpeg" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}} />
  </div>
</section>

<section className="ftd" style={{ '--bg': '#ffffff' }}>
  <div className="ftd-head anim d0">
    <span className="eyebrow">Elevate Productivity</span>
    <h2>Elevate Your Team’s Productivity with Zoho Workplace</h2>
    <p>A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.</p>
  </div>
  <div className="ftd-layout">
    <div className="ftd-tabs">
      {["Why Choose Zoho Workplace?", "Unlock Your Business Growth with Zoho Workplace", "Integrate with Popular Apps"].map((title, index) => (
        <div key={index} className={`ftd-tab ${index === active ? 'active' : ''}`} onClick={() => setActive(index)}>
          <h4>{title}</h4>
          <p>{["All-in-One Unified Workspace", "Ideal For Your Business Size", "Zoho Apps"][index]}</p>
        </div>
      ))}
    </div>
    <div className="ftd-preview anim-scale d1">
      {["/output/generated-assets/zoho-workplace/11-113610f4ed.png", "/output/generated-assets/zoho-workplace/12-cc95c2320b.png", "/output/generated-assets/zoho-workplace/18-473c14de05.jpg"].map((image_url, index) => (
        <div key={index} className={`ftd-panel ${index === active ? 'active' : ''}`}>
          <h3>{["Why Choose Zoho Workplace?", "Unlock Your Business Growth with Zoho Workplace", "Integrate with Popular Apps"][index]}</h3>
          <p>{["Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.",
            "Zoho Workplace unifies email, collaboration, and productivity tools to streamline your business operations. Enable smarter teamwork and drive growth with a single platform.",
            "Connect your Zoho Workplace with other business apps to ensure higher productivity and growth - all within a unified workspace."][index]}</p>
          <img src={image_url} alt={`Feature ${index + 1}`} style={{ width: '100%', borderRadius: '12px', display: 'block' }} />
          <ul className="ftd-features">
            {[
              ["All-in-One Unified Workspace", "Seamless Collaboration in Real Time", "Work from Anywhere, Anytime", "AI-Powered Productivity (Zia)"],
              ["Ideal For Your Business Size", "Communicate Effectively", "Integrated Business Apps", "Customizable Workspace"],
              ["Zoho Apps", "Analytics", "Accounting & Finance", "Automation", "Business Suites"]
            ][index].map((feature, fIndex) => (
              <li key={fIndex} className="ftd-feat">{feature}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="fig" style={{ background: '#ffffff', padding: '40px 20px', position: 'relative' }}>
  <div className="fig-head" style={{ marginBottom: '40px' }}>
    <h2 style={{ fontFamily: 'Inter', fontSize: 'clamp(32px, 5vw, 60px)', fontWeight: 'bold', lineHeight: 1.2, color: '#1a1a1a' }}>
      Elevate Your Team’s Productivity with Zoho Workplace
    </h2>
    <p style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', fontSize: '18px', lineHeight: 1.6, color: '#1a1a1a', marginTop: '16px' }}>
      A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
    </p>
  </div>
  <div className="fig-grid stagger-parent" style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', marginTop: '20px' }}>
    {[
      {
        title: 'All-in-One Unified Workspace',
        description: 'Access email, chat, documents, meetings, and storage in a single integrated platform. Reduce app switching and boost productivity.',
      },
      {
        title: 'Seamless Collaboration in Real Time',
        description: 'Work together on documents, spreadsheets, and presentations with live editing, comments, and built-in communication tools.',
      },
      {
        title: 'Work from Anywhere, Anytime',
        description: 'Stay productive on the go. Reply to emails, access presentations, or host a video conference from anywhere effortlessly.',
      },
      {
        title: 'AI-Powered Productivity (Zia)',
        description: 'Leverage built-in AI for writing assistance in terms of grammar, readability and writing style while you work on Writer.',
      },
      {
        title: 'Ideal For Your Business Size',
        description: 'Designed for any organization, Zoho Workplace enhances efficiency and teamwork at every scale.',
      },
      {
        title: 'Communicate Effectively',
        description: 'Go beyond email and chat, and connect teams with a social intranet using channels, feeds, and groups.',
      },
    ].map((feature, index) => (
      <div key={index} className="fig-card" style={{
        flex: '1 1 calc(33.33% - 20px)',
        background: '#f8fafc',
        padding: '20px',
        borderRadius: '12px',
        boxShadow: '0 2px 4px rgba(0,0,0,0.1)',
        transition: 'transform 0.3s ease',
        opacity: 0,
        transform: 'translateY(20px)',
      }}>
        <div className="fig-icon" style={{ marginBottom: '16px', width: '16px', height: '16px', background: 'var(--accent)' }}>
          {/* Place an SVG icon here relevant to the feature */}
          <svg style={{ fill: '#1a1a1a', width: '16px', height: '16px' }}><circle cx="8" cy="8" r="8" /></svg>
        </div>
        <h4 style={{ fontFamily: 'Inter', fontSize: '20px', color: '#1a1a1a', marginBottom: '8px' }}>{feature.title}</h4>
        <p style={{ fontFamily: 'Zoho_Puvi_Regular, sans-serif', fontSize: '16px', color: '#1a1a1a', lineHeight: 1.5 }}>{feature.description}</p>
      </div>
    ))}
  </div>
  <div style={{ width: '100%', height: '300px', overflow: 'hidden', borderRadius: '12px', marginTop: '40px' }}>
    <img src="/output/generated-assets/zoho-workplace/32-3921942fc4.jpeg" alt="Zoho Workplace" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
  </div>
</section>

<section className="pdv" style={{background:'#fff',padding:'60px 20px'}}>
  <div className="container">
    <div className="pdv-head anim d0" style={{textAlign:'center',marginBottom:'40px'}}>
      <p className="eyebrow" style={{color:'#1a1a1a',fontSize:'18px',marginBottom:'10px'}}>Product Demo Video</p>
      <h2 style={{color:'#1a1a1a',fontSize:'clamp(32px, 5vw, 60px)',marginBottom:'20px'}}>Elevate Your Team’s Productivity with Zoho Workplace</h2>
      <p style={{color:'#666',fontSize:'16px'}}>A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.</p>
    </div>
    <div className="pdv-frame anim-scale d2" style={{position:'relative',borderRadius:'12px',overflow:'hidden',boxShadow:'0 4px 20px rgba(0,0,0,0.1)'}}>
      <div className="pdv-browser" style={{background:'#f8fafc',padding:'10px',display:'flex',alignItems:'center',borderBottom:'1px solid #ddd'}}>
        <div className="pdv-bar" style={{display:'flex'}}>
          <span className="pdv-dot" style={{width:'10px',height:'10px',borderRadius:'50%',background:'#ff6b00',marginRight:'5px'}}></span>
          <span className="pdv-dot" style={{width:'10px',height:'10px',borderRadius:'50%',background:'#f0f0f0',marginRight:'5px'}}></span>
          <span className="pdv-dot" style={{width:'10px',height:'10px',borderRadius:'50%',background:'#f0f0f0'}}></span>
        </div>
      </div>
      <video className="pdv-video" autoPlay muted loop playsInline style={{width:'100%',display:'block'}}>
        <source src="https://www.zohowebstatic.com/sites/zweb/images/workplace/homepage/banner-video.mp4" type="video/mp4" />
      </video>
    </div>
    <div className="pdv-cta" style={{textAlign:'center',marginTop:'40px'}}>
      <button className="pdv-btn" style={{background:'#ff6b00',color:'#fff',padding:'10px 20px',border:'none',borderRadius:'4px',cursor:'pointer'}}>Get Started</button>
    </div>
  </div>
</section>

<section className="wtj" style={{backgroundColor: '#ffffff', padding: '40px 0', borderRadius: '8px'}}>
  <div className="wtj-inner" style={{maxWidth: '1200px', margin: '0 auto', padding: '0 20px'}}>
    <div className="wtj-top" style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '40px'}}>
      <div style={{display: 'flex', alignItems: 'center'}}>
        <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" className="wtj-logo" style={{width: '150px', height: 'auto', marginRight: '20px'}} />
        <span className="wtj-tagline" style={{fontSize: '18px', fontWeight: '600', color: '#1a1a1a'}}>India's #1 B2B Software Marketplace</span>
      </div>
      <div style={{position: 'relative', width: '200px', height: '120px', overflow: 'hidden', borderRadius: '12px'}}>
        <img src="/output/generated-assets/zoho-workplace/32-3921942fc4.jpeg" alt="Zoho Workplace" style={{width:'100%', height:'100%', objectFit:'cover', display:'block', position:'absolute', inset:0}} />
      </div>
    </div>
    <div className="wtj-divider" style={{borderTop: '1px solid #e6e6e6', marginBottom: '40px'}}></div>
    <div className="wtj-grid" style={{display: 'flex', justifyContent: 'space-between', flexWrap: 'wrap'}} >
      <div className="wtj-card" style={{flex: '1 1 calc(25% - 20px)', margin: '10px', backgroundColor: '#f8fafc', borderRadius: '8px', padding: '20px', boxShadow: '0px 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s'}}>
        <div className="wtj-icon" style={{marginBottom: '15px'}}>
          <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L1.8 7v10l10.2 5 10.2-5V7L12 2zm0 10.5L6.7 18l1.7-5.1L4 9.3l5.4-.4L12 4l2.6 5 5.4.4-4.4 3.6L17.3 18 12 12.5z"></path></svg>
        </div>
        <h4 style={{margin: '0 0 10px', fontSize: '18px', fontWeight: '600', color: '#1a1a1a'}}>Free Expert Consultation</h4>
        <p style={{margin: '0', fontSize: '14px', color: '#333'}}>Get matched with the right software.</p>
      </div>
      <div className="wtj-card" style={{flex: '1 1 calc(25% - 20px)', margin: '10px', backgroundColor: '#f8fafc', borderRadius: '8px', padding: '20px', boxShadow: '0px 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s'}}>
        <div className="wtj-icon" style={{marginBottom: '15px'}}>
          <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L1.8 7v10l10.2 5 10.2-5V7L12 2zm0 10.5L6.7 18l1.7-5.1L4 9.3l5.4-.4L12 4l2.6 5 5.4.4-4.4 3.6L17.3 18 12 12.5z"></path></svg>
        </div>
        <h4 style={{margin: '0 0 10px', fontSize: '18px', fontWeight: '600', color: '#1a1a1a'}}>Verified Reviews</h4>
        <p style={{margin: '0', fontSize: '14px', color: '#333'}}>1000+ genuine customer reviews.</p>
      </div>
      <div className="wtj-card" style={{flex: '1 1 calc(25% - 20px)', margin: '10px', backgroundColor: '#f8fafc', borderRadius: '8px', padding: '20px', boxShadow: '0px 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s'}}>
        <div className="wtj-icon" style={{marginBottom: '15px'}}>
          <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L1.8 7v10l10.2 5 10.2-5V7L12 2zm0 10.5L6.7 18l1.7-5.1L4 9.3l5.4-.4L12 4l2.6 5 5.4.4-4.4 3.6L17.3 18 12 12.5z"></path></svg>
        </div>
        <h4 style={{margin: '0 0 10px', fontSize: '18px', fontWeight: '600', color: '#1a1a1a'}}>Best Price Guarantee</h4>
        <p style={{margin: '0', fontSize: '14px', color: '#333'}}>Competitive pricing assured.</p>
      </div>
      <div className="wtj-card" style={{flex: '1 1 calc(25% - 20px)', margin: '10px', backgroundColor: '#f8fafc', borderRadius: '8px', padding: '20px', boxShadow: '0px 4px 8px rgba(0,0,0,0.1)', transition: 'transform 0.3s'}}>
        <div className="wtj-icon" style={{marginBottom: '15px'}}>
          <svg width="24" height="24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L1.8 7v10l10.2 5 10.2-5V7L12 2zm0 10.5L6.7 18l1.7-5.1L4 9.3l5.4-.4L12 4l2.6 5 5.4.4-4.4 3.6L17.3 18 12 12.5z"></path></svg>
        </div>
        <h4 style={{margin: '0 0 10px', fontSize: '18px', fontWeight: '600', color: '#1a1a1a'}}>Dedicated Support</h4>
        <p style={{margin: '0', fontSize: '14px', color: '#333'}}>Post-sale onboarding assistance.</p>
      </div>
    </div>
  </div>
</section>

<section className="plc" style={{background:'#ffffff',padding:'60px 0',position:'relative'}}>
  <div className="container">
    <header className="plc-head anim d0" style={{textAlign:'center',marginBottom:'40px'}}>
      <h2 style={{fontFamily:'Inter',fontWeight:'600',fontSize:'clamp(32px,5vw,60px)',color:'#1a1a1a',marginBottom:'0',wordBreak:'normal',overflowWrap:'normal',hyphens:'none'}}>
        Elevate Your Team’s Productivity with Zoho Workplace
      </h2>
    </header>
    <div className="plc-grid stagger-parent" style={{display:'grid',gap:'30px'}}>
      <div className="plc-card featured" style={{border:'1px solid #eee',padding:'20px',borderRadius:'12px',boxShadow:'0 4px 6px rgba(0,0,0,0.1)',background:'#fff',position:'relative'}}>
        <header className="plc-badge" style={{position:'absolute',top:'20px',left:'20px',background:'#ff6b00',color:'#fff',padding:'5px 10px',borderRadius:'4px'}}>
          Featured
        </header>
        <h3 className="plc-plan" style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',color:'#1a1a1a',fontSize:'24px',marginBottom:'15px'}}>Zoho Workplace</h3>
        <div className="plc-amount" style={{display:'flex',alignItems:'baseline',marginBottom:'15px'}}>
          <span style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',fontSize:'32px',color:'#ff6b00',fontWeight:'bold',marginRight:'10px'}}>Price upon request</span>
          <span className="plc-period" style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',color:'#1a1a1a',fontSize:'16px'}}>per user/month</span>
        </div>
        <ul className="plc-list" style={{listStyle:'none',padding:'0',margin:'0 0 20px 0'}}>
          <li style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',color:'#1a1a1a',fontSize:'16px',marginBottom:'10px'}}>Enterprise-Grade Custom Email</li>
          <li style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',color:'#1a1a1a',fontSize:'16px',marginBottom:'10px'}}>Migration Assistance</li>
          <li style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',color:'#1a1a1a',fontSize:'16px',marginBottom:'10px'}}>Collaborative Office Suite</li>
          <li style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',color:'#1a1a1a',fontSize:'16px',marginBottom:'10px'}}>30-GB Mail Storage Per User</li>
          <li style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',color:'#1a1a1a',fontSize:'16px',marginBottom:'10px'}}>File Storage Starts at 100 GB Per Team</li>
          <li style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',color:'#1a1a1a',fontSize:'16px',marginBottom:'10px'}}>File Sharing & Permissions</li>
          <li style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',color:'#1a1a1a',fontSize:'16px',marginBottom:'10px'}}>Team Chat</li>
          <li style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',color:'#1a1a1a',fontSize:'16px',marginBottom:'10px'}}>Document Management</li>
          <li style={{fontFamily:'Zoho_Puvi_Regular,sans-serif',color:'#1a1a1a',fontSize:'16px',marginBottom:'10px'}}>Supported Device: Android, iOS, Windows, Mac</li>
        </ul>
        <a className="plc-btn primary" style={{display:'inline-block',background:'#ff6b00',color:'#fff',padding:'10px 20px',borderRadius:'4px',textAlign:'center',textDecoration:'none',fontFamily:'Zoho_Puvi_Regular,sans-serif',fontSize:'16px'}} href="#">
          Get Started
        </a>
        <div style={{position:'relative',width:'100%',paddingTop:'56.25%',overflow:'hidden',borderRadius:'12px',marginTop:'20px'}}>
          <img src="/output/generated-assets/zoho-workplace/32-3921942fc4.jpeg" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="tcar" style={{background:'#ffffff',padding:'40px 0'}}>
  <div className="container">
    <div className="tcar-head">
      <h2 style={{fontFamily:'Inter',color:'#1a1a1a',fontSize:'clamp(32px,5vw,60px)',wordBreak:'normal',overflowWrap:'normal',hyphens:'none'}} className="anim d0">Elevate Your Team’s Productivity with Zoho Workplace</h2>
      <p style={{fontFamily:'Zoho_Puvi_Regular, sans-serif',color:'#1a1a1a',marginTop:'16px'}}>A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.</p>
    </div>
    
    <div className="tcar-layout" style={{display:'flex',flexDirection:'row',marginTop:'40px'}}>
      
      <div className="tcar-rail" style={{flex:'1',paddingRight:'15px'}}>
        {[
          {quote:"Zoho Workplace has streamlined ...", author:"Amit Kapoor"},
          {quote:"The platform is easy to use ...", author:"Saurav Singh"},
          {quote:"Techjockey helped us identify ...", author:"Shrimi Manchanda"}
        ].map((testimonial, index) => (
          <div key={index} className="tcar-mini" style={{marginBottom:'12px',background:'#f8fafc',padding:'20px',borderRadius:'10px'}}>
            <p className="tcar-mini-stars" style={{marginBottom:'8px'}}>★★★★★</p>
            <p>{testimonial.quote}</p>
            <p className="tcar-author" style={{marginTop:'10px',fontWeight:'bold'}}>{testimonial.author}</p>
          </div>
        ))}
      </div>
      
      <div className="tcar-stage" style={{flex:'2',overflow:'hidden',position:'relative'}}>
        <div className="tcar-track anim-scale d1" style={{display:'flex',transform:`translateX(-${0*100}%)`,transition:'transform 0.5s ease'}}>
          {[
            {"quote":"Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.","author":"Amit Kapoor","role":"IT Manager","avatar":"/output/generated-assets/zoho-workplace/13-a1af876bc5.png"},
            {"quote":"The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.","author":"Saurav Singh","role":"Head of Operations","avatar":"/output/generated-assets/zoho-workplace/34-e3c4bcd1a9.png"},
            {"quote":"Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.","author":"Shrimi Manchanda","role":"Operations Manager","avatar":"/output/generated-assets/zoho-workplace/15-01fc6c95c0.jpg"},
            {"quote":"The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.","author":"Shweta Thakur","role":"Senior System Administrator","avatar":"/output/generated-assets/zoho-workplace/35-00ee58a5d0.jpg"},
            {"quote":"Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.","author":"Narinder Sahni","role":"IT Head"}
          ].map((testimonial, index) => (
            <div key={index} className="tcar-0" style={{flex:'0 0 100%',padding:'25px',boxSizing:'border-box'}}>
              <div className="tcar-avatar" style={{marginBottom:'16px',width:'60px',height:'60px',borderRadius:'50%',background:`#${Math.floor(Math.random()*16777215).toString(16)}`}}>
                <img src={testimonial.avatar} alt={testimonial.author} style={{width: '100%', height: '100%', objectFit: 'cover'}} />
              </div>
              <p className="tcar-quote" style={{marginBottom:'16px',fontFamily:'Zoho_Puvi_Regular, sans-serif'}}>
                {testimonial.quote}
              </p>
              <p className="tcar-stars" style={{marginBottom:'8px'}}>★★★★★</p>
              <div className="tcar-text">
                <p className="tcar-name" style={{fontWeight:'bold'}}>{testimonial.author}</p>
                <p className="tcar-role" style={{fontSize:'14px',color:'#6b6b6b'}}>{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="tcar-dots" style={{display:'flex',justifyContent:'center',marginTop:'20px'}}>
      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className={`tcar-dot ${index === 0 ? 'active' : ''}`} style={{width:'10px',height:'10px',background:index === 0 ? '#ff6b00' : '#ccc',borderRadius:'50%',margin:'0 5px',cursor:'pointer'}} />
      ))}
    </div>
  </div>
</section>

<section className="ctadb" style={{backgroundColor:'#ffffff',padding:'50px 0',position:'relative'}}>
    <div className="ctadb-inner container" style={{position:'relative',zIndex:1}}>
        <h2 className="anim d0" style={{fontFamily:'Inter',fontWeight:700,fontSize:'clamp(32px,5vw,60px)',color:'#1a1a1a',marginBottom:'20px'}}>
            Elevate Your Team’s Productivity with Zoho Workplace
        </h2>
        <p className="anim d1" style={{fontFamily:'Zoho_Puvi_Regular, sans-serif',fontSize:'18px',color:'#1a1a1a',maxWidth:'600px',margin:'0 auto 40px'}}>
            A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
        </p>
        <div className="ctadb-btns anim d2" style={{display:'flex',justifyContent:'center',gap:'20px'}}>
            <a href="#lead-form" className="ctadb-btn" style={{padding:'12px 30px',background:'#ff6b00',color:'#ffffff',textDecoration:'none',borderRadius:'8px',fontFamily:'Inter',fontWeight:600}}>
                Get Started
            </a>
            <a href="#pricing" className="ctadb-ghost" style={{padding:'12px 30px',border:'2px solid #ff6b00',color:'#ff6b00',textDecoration:'none',borderRadius:'8px',fontFamily:'Inter',fontWeight:600}}>
                See Pricing
            </a>
        </div>
    </div>
    <img src="/output/generated-assets/zoho-workplace/32-3921942fc4.jpeg" alt="Zoho Workplace" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
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
