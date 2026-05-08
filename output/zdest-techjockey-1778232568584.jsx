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
      --accent: #ff424d;
      --primary: #ff424d;
      --accent-rgb: 255,66,77;
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
     <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-xl border-b border-white/10 py-3.5">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center gap-4">
          <span className="font-extrabold text-xl text-[#ff424d]">Zoho Desk</span>
          <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28" alt="Techjockey" className="h-7 opacity-95" />
          <a href="#lead-form" className="inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#ff424d] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none disabled:opacity-50 text-sm" style={{textDecoration:'none'}}>Get Free Consultation</a>
        </div>
      </nav>

      <section style={{ position: 'relative', overflow: 'hidden', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', backgroundColor: '#f8fafc' }} className="py-24">
  
  {/* Background Image */}
  <div className="hero-layer hero-layer-bg" style={{ position: 'absolute', inset: 0, zIndex: 0 }}>
    <img src="/output/generated-assets/ds_1778232449090_e3b3ee4b/01-917cb856ac.png" alt="Zoho Desk" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
  </div>

  {/* Gradient Overlay */}
  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #ffffff 0%, rgba(255,255,255,0.9) 100%)', zIndex: 1 }}></div>

  {/* Foreground Content */}
  <div style={{ position: 'relative', zIndex: 2 }} className="max-w-6xl mx-auto px-6 flex flex-col-reverse lg:flex-row items-center justify-between">
    
    {/* Text Content Left */}
    <div style={{ maxWidth: '570px' }} className="text-center lg:text-left mb-12 lg:mb-0">
      <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-[#ff424d] mb-6">Deliver Exceptional Customer Support with Zoho Desk</h1>
      <p className="text-lg leading-relaxed text-gray-500 mb-10">Streamline customer service, manage tickets efficiently, and deliver seamless support experiences across every channel.</p>
      <a href="#" className="inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#ff424d] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none">Get Your Free Trial</a>
    </div>

    {/* Floating Panel Video */}
    <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', width: '400px', maxWidth: '90%', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 4px 6px rgba(0,0,0,0.1)' }} className="hero-floating-panel">
      <video autoPlay muted loop playsInline style={{ width: '100%', display: 'block', borderRadius: '12px' }}>
        <source src="https://www.zohowebstatic.com/sites/zweb/images/desk/zd-hp-banner-video.mp4" type="video/mp4" />
      </video>
    </div>
    
  </div>

</section>

<section className="tlg" style={{ backgroundColor: '#f8fafc', padding: '4rem 0' }}>
  <div className="max-w-6xl mx-auto px-6">
    <div className="tlg-label text-center mb-10">
      <span className="text-lg font-semibold text-gray-700">
        Trusted by 100,000+ Businesses Globally
      </span>
    </div>
    <div className="tlg-logos grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 justify-items-center">
      <img
        className="tlg-logo"
        src="/output/generated-assets/ds_1778232449090_e3b3ee4b/04-0a90587985.svg"
        alt="Partner 1"
      />
      <img
        className="tlg-logo"
        src="/output/generated-assets/ds_1778232449090_e3b3ee4b/02-6713903685.png"
        alt="Partner 2"
      />
      <img
        className="tlg-logo"
        src="/output/generated-assets/ds_1778232449090_e3b3ee4b/03-5dd9b65c19.svg"
        alt="Partner 3"
      />
      <img
        className="tlg-logo"
        src="/output/generated-assets/ds_1778232449090_e3b3ee4b/05-2b26697695.svg"
        alt="Partner 4"
      />
      <img
        className="tlg-logo"
        src="/output/generated-assets/ds_1778232449090_e3b3ee4b/07-e77c692795.svg"
        alt="Partner 5"
      />
      <img
        className="tlg-logo"
        src="/output/generated-assets/ds_1778232449090_e3b3ee4b/09-8841e6d25c.svg"
        alt="Partner 6"
      />
      <img
        className="tlg-logo"
        src="/output/generated-assets/ds_1778232449090_e3b3ee4b/06-ee5f78318d.svg"
        alt="Partner 7"
      />
      <img
        className="tlg-logo"
        src="/output/generated-assets/ds_1778232449090_e3b3ee4b/08-fc44aea2a2.svg"
        alt="Partner 8"
      />
    </div>
  </div>
</section>

<section className="falt py-24 bg-gray-50 text-[#111827]">
  <div className="max-w-6xl mx-auto px-6">
    <div className="mb-12">
      <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-[#ff424d]/10 border border-[#ff424d]/25 text-[#ff424d] px-3 py-1 text-xs font-bold tracking-wider uppercase">Act Now</span>
      <h2 className="falt-head text-4xl font-bold tracking-tight leading-tight anim d0 mt-4">Deliver Exceptional Customer Support with Zoho Desk</h2>
    </div>
    {[
      {"num":"01","title":"Why Choose Zoho Desk?","description":"With powerful automation and contextual AI, Zoho Desk helps businesses deliver faster, smarter, and more personalized customer support.","features":["Omnichannel Support","Ticket Management","AI Assistance (Zia)","Workflow Automation"],"image_url":"/output/generated-assets/ds_1778232449090_e3b3ee4b/19-b36bdf959c.jpeg","video_url":""},
      {"num":"02","title":"Make Smarter Support Decisions with Zia AI","description":"Zoho Desk includes Zia, an AI-powered assistant that helps support teams improve response quality and resolution speed.","features":["AI-Powered Responses","Sentiment Analysis","Auto Tagging & Insights","Conversation Intelligence"],"image_url":"/output/generated-assets/ds_1778232449090_e3b3ee4b/17-3965757185.jpeg","video_url":""},
      {"num":"03","title":"Integrate with popular apps and Zoho ecosystem","description":"Connect your help desk with your favorite apps across CRM, communication, and business tools with ease.","features":["CRM Integration","Collaboration Tools","Telephony","E-commerce Platforms","Automation Tools","Layouts","Blueprints","Extensions","Help Center"],"image_url":"/output/generated-assets/ds_1778232449090_e3b3ee4b/18-7f64cfae87.jpeg","video_url":""}
    ].map((section, index) => (
      <div key={section.num} className={`falt-block ${index % 2 !== 0 ? 'flip' : ''} reveal flex flex-col md:flex-row items-center gap-6 mb-12`}>
        <div className="flex-1">
          <span className="falt-num text-lg font-semibold text-[#ff424d]">0{index + 1}</span>
          <h3 className="text-xl font-bold mt-4">{section.title}</h3>
          <p className="falt-copy text-lg leading-relaxed text-gray-500 mt-2">{section.description}</p>
          <div className="falt-chips flex flex-wrap gap-2 mt-4">
            {section.features.map((feature, idx) => (
              <span key={idx} className="falt-chip inline-flex items-center gap-1.5 rounded-full bg-[#ff424d]/10 border border-[#ff424d]/25 text-[#ff424d] px-3 py-1 text-xs font-bold tracking-wider uppercase">{feature}</span>
            ))}
          </div>
        </div>
        <div className="falt-visual flex-1">
          {section.video_url ? (
            <video autoPlay muted loop playsInline style={{ width: '100%', borderRadius: '12px', display: 'block' }}>
              <source src={section.video_url} type="video/mp4" />
            </video>
          ) : (
            <img src={section.image_url} alt={`Feature ${section.num}`} style={{width:'100%',borderRadius:'12px',display:'block'}} />
          )}
        </div>
      </div>
    ))}
    <img src="/output/generated-assets/ds_1778232449090_e3b3ee4b/01-917cb856ac.png" alt="Zoho Desk" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}} />
  </div>
</section>

<section className="fig py-24 bg-[#f8fafc]">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col items-center text-center mb-12">
      <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-[#ff424d]/10 border border-[#ff424d]/25 text-[#ff424d] px-3 py-1 text-xs font-bold tracking-wider uppercase">Featured</span>
      <h2 className="fig-head text-4xl font-bold tracking-tight leading-tight mt-4">Deliver Exceptional Customer Support with Zoho Desk</h2>
      <p className="text-lg leading-relaxed text-gray-500 mt-4">Streamline customer service, manage tickets efficiently, and deliver seamless support experiences across every channel.</p>
    </div>
    <div className="fig-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 opacity-0 translate-y-10 stagger-parent">
      {[
        {"title":"Omnichannel Support","description":"Manage customer conversations across email, chat, phone, and social media from a single platform."},
        {"title":"Ticket Management","description":"Organize, prioritize, and resolve tickets efficiently with automation and smart workflows."},
        {"title":"AI Assistance (Zia)","description":"Get intelligent suggestions, auto-tag tickets, detect sentiment, and respond faster with AI-powered insights."},
        {"title":"Workflow Automation","description":"Automate repetitive support tasks, assign tickets, and streamline processes for faster resolutions."},
        {"title":"AI-Powered Responses","description":"Generate accurate replies, suggest solutions, and assist agents in real time."},
        {"title":"Sentiment Analysis","description":"Understand customer emotions and prioritize critical issues for better service."}
      ].map((feature, index) => (
        <div key={index} className="fig-card bg-white p-7 rounded-2xl border border-gray-100 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300 opacity-0 translate-y-10">
          <div className="fig-icon w-4 h-4 mb-4">
            <svg width="16" height="16" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"><path d="M7 0L5.5 1.5 8 4l4-4-1-1-4 4-1-1L4 5.5 3 8l13 13 1-1-5.5-5L2 7l5-5.5z"/></svg>
          </div>
          <h4 className="text-xl font-semibold">{feature.title}</h4>
          <p className="mt-2 text-sm leading-relaxed text-gray-600">{feature.description}</p>
        </div>
      ))}
    </div>
    <div className="relative mt-16">
      <img src="/output/generated-assets/ds_1778232449090_e3b3ee4b/01-917cb856ac.png" alt="Zoho Desk" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
    </div>
  </div>
</section>

<section className="mns py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6 relative">
    <img src="/output/generated-assets/ds_1778232449090_e3b3ee4b/01-917cb856ac.png" alt="Zoho Desk" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
    <div className="relative z-10">
      <div className="mns-head mb-10">
        <h2 className="text-4xl font-bold tracking-tight leading-tight text-center">Deliver Exceptional Customer Support with Zoho Desk</h2>
        <p className="text-lg leading-relaxed text-center text-gray-500 mt-4">Streamline customer service, manage tickets efficiently, and deliver seamless support experiences across every channel.</p>
      </div>
      <div className="mns-label text-center bg-[#ff424d]/10 border border-[#ff424d]/25 text-[#ff424d] px-3 py-1 text-xs font-bold tracking-wider uppercase inline-block mb-6">FEATURES</div>
      <div className="mns-grid grid gap-6 md:grid-cols-3 reveal" data-animation-stagger>
        <div className="mns-card bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="mns-pub text-sm font-semibold text-gray-700">TechCrunch</div>
          <div className="mns-text text-lg leading-relaxed text-gray-800 mt-2">"Zoho Desk sets a new benchmark in customer ticket management"</div>
        </div>
        <div className="mns-card bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="mns-pub text-sm font-semibold text-gray-700">Forbes</div>
          <div className="mns-text text-lg leading-relaxed text-gray-800 mt-2">"Enhance customer service with Zoho Desk's omnichannel platform"</div>
        </div>
        <div className="mns-card bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all">
          <div className="mns-pub text-sm font-semibold text-gray-700">Inc.</div>
          <div className="mns-text text-lg leading-relaxed text-gray-800 mt-2">"Zoho Desk AI assistance transforms support operations"</div>
        </div>
      </div>
    </div>
  </div>
</section>

<section className="pdv py-24 bg-[#f8fafc]">
  <div className="container max-w-6xl mx-auto px-6">
    <div className="pdv-head anim d0 mb-12">
      <span className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-[#ff424d]/10 border border-[#ff424d]/25 text-[#ff424d] px-3 py-1 text-xs font-bold tracking-wider uppercase">Product Demo</span>
      <h2 className="text-4xl font-bold tracking-tight leading-tight mt-4">Deliver Exceptional Customer Support with Zoho Desk</h2>
      <p className="text-lg leading-relaxed text-gray-500 mt-4">Streamline customer service, manage tickets efficiently, and deliver seamless support experiences across every channel.</p>
    </div>
    <div className="pdv-frame anim-scale d2 relative overflow-hidden rounded-xl shadow-lg bg-white">
      <div className="pdv-browser flex items-center justify-between px-4 py-2 bg-gray-200 border-b border-gray-300">
        <div className="flex space-x-1">
          <span className="pdv-dot w-3 h-3 bg-gray-500 rounded-full"></span>
          <span className="pdv-dot w-3 h-3 bg-gray-500 rounded-full"></span>
          <span className="pdv-dot w-3 h-3 bg-gray-500 rounded-full"></span>
        </div>
      </div>
      <video className="pdv-video w-full h-full" autoPlay muted loop playsInline>
        <source src="https://www.zohowebstatic.com/sites/zweb/images/desk/zd-hp-banner-video.mp4" type="video/mp4"/>
      </video>
      <img src="/output/generated-assets/ds_1778232449090_e3b3ee4b/01-917cb856ac.png" alt="Zoho Desk" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}} />
    </div>
    <div className="text-center mt-12">
      <a href="#" className="pdv-cta pdv-btn inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#ff424d] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none">Get Your Free Trial</a>
    </div>
  </div>
  <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
    <div className="pdv-0">
      <img src="/output/generated-assets/ds_1778232449090_e3b3ee4b/19-b36bdf959c.jpeg" alt="Feature 1" style={{width:'100%',borderRadius:'12px',display:'block'}}/>
    </div>
    <div className="pdv-1">
      <img src="/output/generated-assets/ds_1778232449090_e3b3ee4b/17-3965757185.jpeg" alt="Feature 2" style={{width:'100%',borderRadius:'12px',display:'block'}}/>
    </div>
    <div className="pdv-2">
      <img src="/output/generated-assets/ds_1778232449090_e3b3ee4b/18-7f64cfae87.jpeg" alt="Feature 3" style={{width:'100%',borderRadius:'12px',display:'block'}}/>
    </div>
  </div>
</section>

<section className="wtj">
  <div className="wtj-inner">
    <div className="wtj-top">
      <div className="wtj-logo">
        <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" />
      </div>
      <div className="wtj-tagline">
        India’s #1 B2B Software Marketplace
      </div>
    </div>
    <div className="wtj-divider"></div>
    <div className="wtj-grid">
      <div className="wtj-card">
        <div className="wtj-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="..." fill="#ff424d"></path></svg>
        </div>
        <h4>Free Expert Consultation</h4>
        <p>Get matched with the right software</p>
      </div>
      <div className="wtj-card">
        <div className="wtj-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="..." fill="#ff424d"></path></svg>
        </div>
        <h4>Verified Reviews</h4>
        <p>1000+ genuine customer reviews</p>
      </div>
      <div className="wtj-card">
        <div className="wtj-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="..." fill="#ff424d"></path></svg>
        </div>
        <h4>Best Price Guarantee</h4>
        <p>Competitive pricing assured</p>
      </div>
      <div className="wtj-card">
        <div className="wtj-icon">
          <svg viewBox="0 0 24 24" fill="none"><path d="..." fill="#ff424d"></path></svg>
        </div>
        <h4>Dedicated Support</h4>
        <p>Post-sale onboarding assistance</p>
      </div>
    </div>
    <div className="wtj-feature-media">
      <img src="/output/generated-assets/ds_1778232449090_e3b3ee4b/01-917cb856ac.png" alt="Zoho Desk" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
    </div>
  </div>
</section>

export default LandingPage;

<section className="plc py-24 bg-gray-50" style={{position:'relative'}}>
  <div className="max-w-6xl mx-auto px-6">
    <div className="plc-head text-center mb-12">
      <span className="plc-badge inline-flex items-center gap-1.5 rounded-full bg-[#ff424d]/10 border border-[#ff424d]/25 text-[#ff424d] px-3 py-1 text-xs font-bold tracking-wider uppercase anim d0">section_label</span>
      <h2 className="plc-head anim d0 text-4xl font-bold tracking-tight leading-tight mt-4">Deliver Exceptional Customer Support with Zoho Desk</h2>
      <p className="plc-desc text-lg leading-relaxed text-gray-500 mt-6">Streamline customer service, manage tickets efficiently, and deliver seamless support experiences across every channel.</p>
    </div>
    <div className="plc-grid grid gap-6 md:grid-cols-3 mt-10 anim d0">
      <div className="plc-card featured shadow-md p-6 rounded-xl border border-gray-200 bg-white hover:shadow-lg transition-all duration-300">
        <div className="plc-plan font-semibold text-xl leading-tight mb-3">Zoho Desk</div>
        <p className="plc-amount flex items-baseline text-3xl font-bold mb-1">
          {'' ? `$${''}` : 'Contact for Pricing'}
          <span className="text-sm text-gray-500 ml-1">{'per user/month'}</span>
        </p>
        {'' && <del className="plc-old text-gray-400 text-sm">{''}</del>}
        <p className="plc-desc text-gray-500 mt-4">{''}</p>
        <ul className="plc-list mt-4">
          {["Ticket Management","Omnichannel Support","Workflow Automation","AI-Powered Assistance","Knowledge Base","Reporting & Analytics","Integrations","Alerts & Notifications","Supported Device: Android, iOS, Windows, Mac"].map((feature, index) => (
            <li key={index} className="flex items-start mb-2">
              <span className="material-icons text-[#ff424d]">check_circle</span>
              <span className="ml-2">{feature}</span>
            </li>
          ))}
        </ul>
        <div className="flex justify-center mt-6">
          <button className={`plc-btn primary inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#ff424d] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none`}>Get Your Free Trial</button>
        </div>
      </div>
    </div>
  </div>
  <img src="/output/generated-assets/ds_1778232449090_e3b3ee4b/01-917cb856ac.png" alt="Zoho Desk" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
</section>

export default LandingPage;

const { useState, useEffect } = React;

const testimonials = [
  {
    quote: "Zoho Desk helped us streamline our support tickets and respond faster to customer queries. Our team now handles requests more efficiently with better visibility.",
    author: "Sanjay Bhatnagar",
    role: "Customer Support Lead",
    company: "",
    avatar: ""
  },
  {
    quote: "Managing customer conversations across multiple channels became effortless with Zoho Desk. It significantly improved our response time and customer satisfaction.",
    author: "Arjun Mishra",
    role: "Operations Manager",
    company: "",
    avatar: ""
  },
  {
    quote: "Automation in Zoho Desk reduced manual work for our support team. We can now focus more on solving issues rather than managing tickets.",
    author: "Vanshika Malhotra",
    role: "Head of Support",
    company: "",
    avatar: ""
  },
  {
    quote: "The knowledge base and self-service portal helped reduce our ticket volume while improving customer experience.",
    author: "Nitin Singh",
    role: "Founder",
    company: "D2C Brand",
    avatar: ""
  },
  {
    quote: "Zoho Desk’s reporting and dashboards give us clear insights into support performance and customer issues.",
    author: "Akashdeep Sirkar",
    role: "Customer Experience Manager",
    company: "Fintech Company",
    avatar: ""
  }
];

const Section = () => {
  const [slide, setSlide] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setSlide(p => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="tcar py-24 bg-gray-50">
      <div className="tcar-layout max-w-6xl mx-auto px-6">
        <div className="tcar-head text-center mb-12">
          <span className="eyebrow text-sm font-bold tracking-wider mb-4 inline-block">Testimonials</span>
          <h2 className="h1">Deliver Exceptional Customer Support with Zoho Desk</h2>
        </div>
        <div className="tcar-rail flex gap-4 overflow-x-auto mb-8">
          {testimonials.slice(0, 3).map((testimonial, index) => (
            <div key={index} className="tcar-mini card shadow-sm">
              <div className="tcar-mini-stars">★★★★★</div>
              <p className="tcar-text line-clamp-2">{testimonial.quote}</p>
            </div>
          ))}
        </div>
        <div className="tcar-stage anim-scale d1 relative">
          <div
            className="tcar-track transition-transform"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="tcar-slide flex flex-col items-center p-6 bg-white shadow rounded-2xl">
                <div className="tcar-avatar bg-[#ff424d] w-16 h-16 rounded-full flex items-center justify-center text-white text-xl mb-4">
                  {testimonial.author.split(" ").map(n => n[0]).join("")}
                </div>
                <div className="tcar-stars mb-4">★★★★★</div>
                <p className="tcar-quote text-center mb-4">"{testimonial.quote}"</p>
                <div className="tcar-author">
                  <span className="tcar-name font-bold">{testimonial.author}</span>
                  <span className="tcar-role">{` — ${testimonial.role}, ${testimonial.company}`}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="tcar-dots flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={`tcar-dot w-2 h-2 rounded-full ${index === slide ? "bg-[#ff424d]" : "bg-gray-300"}`}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Section;

<section className="ctadb bg-white py-24">
  <div className="ctadb-inner max-w-6xl mx-auto px-6 text-center relative">
    <img src="/output/generated-assets/ds_1778232449090_e3b3ee4b/01-917cb856ac.png" alt="Zoho Desk" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
    <div className="relative z-[1]">
      <h2 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-[#ff424d]" style={{animation: "anim d0"}}>Deliver Exceptional Customer Support with Zoho Desk</h2>
      <p className="text-lg leading-relaxed text-gray-500 mt-6" style={{animation: "anim d1"}}>
        Streamline customer service, manage tickets efficiently, and deliver seamless support experiences across every channel.
      </p>
      <div className="ctadb-btns mt-8 flex justify-center gap-4" style={{animation: "anim d2"}}>
        <a href="#lead-form" className="ctadb-btn inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#ff424d] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none disabled:opacity-50">
          Get Your Free Trial
        </a>
        <a href="#features" className="ctadb-ghost inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 border border-[#ff424d] text-[#ff424d] bg-transparent hover:bg-[#ff424d]/10 transition-all">
          Get Started
        </a>
      </div>
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