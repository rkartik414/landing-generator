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
      --accent: #ea5637;
      --primary: #ea5637;
      --accent-rgb: 234,86,55;
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
          <span className="font-extrabold text-xl text-[#ea5637]">Zoho Desk</span>
          <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28" alt="Techjockey" className="h-7 opacity-95" />
          <a href="#lead-form" className="inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#ea5637] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none disabled:opacity-50 text-sm" style={{textDecoration:'none'}}>Get Free Consultation</a>
        </div>
      </nav>

      <section className="relative h-screen overflow-hidden bg-white">

  {/* Background Layer */}
  <div className="w-full h-full absolute inset-0">
    <img src="/output/generated-assets/ds_1778229673952_03ccda43/12-bd4c399912.jpeg" alt="Zoho Desk" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>

  {/* Gradient Overlay */}
  <div className="absolute inset-0" style={{background:'linear-gradient(135deg, rgba(233,245,248,0.7), rgba(255,255,255,0.9))'}}></div>

  {/* Content Layer */}
  <div className="relative z-10 flex justify-start items-center h-full">
    <div className="max-w-xl mx-auto px-6 py-24">
      <h1 className="text-5xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-[#ea5637] mb-6 reveal">
        Deliver Exceptional Customer Support with Zoho Desk
      </h1>
      <p className="text-lg leading-relaxed text-gray-500 mb-8 reveal">
        Streamline customer service, manage tickets efficiently, and deliver seamless support experiences across every channel.
      </p>
      <a href="#" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#ea5637] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none disabled:opacity-50 reveal">
        Get Your Free Trial
      </a>
    </div>
  </div>

  {/* Floating Panel with Video */}
  <div className="absolute right-0 bottom-0 w-[30%] h-[30%] z-20">
    <video autoPlay muted loop playsInline style={{width:'100%',height:'100%',borderRadius:'12px',display:'block'}}>
      <source src="https://www.zohowebstatic.com/sites/zweb/images/desk/zd-hp-banner-video.mp4" type="video/mp4"/>
    </video>
  </div>

</section>

<section className="tlg py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <span className="tlg-label inline-flex items-center gap-1.5 rounded-full bg-[#ea5637]/10 border border-[#ea5637]/25 text-[#ea5637] px-3 py-1 text-xs font-bold tracking-wider uppercase">
      Trusted by 100,000+ Businesses
    </span>
    <div className="tlg-logos grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6 mt-8">
      <img className="tlg-logo" src="/output/generated-assets/ds_1778229673952_03ccda43/04-0a90587985.svg" alt="Partner 1" />
      <img className="tlg-logo" src="/output/generated-assets/ds_1778229673952_03ccda43/02-6713903685.png" alt="Partner 2" />
      <img className="tlg-logo" src="/output/generated-assets/ds_1778229673952_03ccda43/03-5dd9b65c19.svg" alt="Partner 3" />
      <img className="tlg-logo" src="/output/generated-assets/ds_1778229673952_03ccda43/05-2b26697695.svg" alt="Partner 4" />
      <img className="tlg-logo" src="/output/generated-assets/ds_1778229673952_03ccda43/09-8841e6d25c.svg" alt="Partner 5" />
      <img className="tlg-logo" src="/output/generated-assets/ds_1778229673952_03ccda43/07-e77c692795.svg" alt="Partner 6" />
      <img className="tlg-logo" src="/output/generated-assets/ds_1778229673952_03ccda43/08-fc44aea2a2.svg" alt="Partner 7" />
      <img className="tlg-logo" src="/output/generated-assets/ds_1778229673952_03ccda43/06-ee5f78318d.svg" alt="Partner 8" />
    </div>
  </div>
</section>

<section className="falt">
  <div className="falt-head anim d0">
    <span className="eyebrow bg-[#ea5637]/10 border border-[#ea5637]/25 text-[#ea5637] px-3 py-1 text-xs font-bold tracking-wider uppercase inline-flex items-center gap-1.5 rounded-full">Solution</span>
    <h2 className="text-4xl font-bold tracking-tight leading-tight mt-4">Deliver Exceptional Customer Support with Zoho Desk</h2>
    <img src="/output/generated-assets/ds_1778229673952_03ccda43/12-bd4c399912.jpeg" alt="Zoho Desk" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
  </div>
  {[
    {
      num: "01",
      title: "Why Choose Zoho Desk?",
      description: "With powerful automation and contextual AI, Zoho Desk helps businesses deliver faster, smarter, and more personalized customer support.",
      features: ["Omnichannel Support", "Ticket Management", "AI Assistance (Zia)", "Workflow Automation"],
      image_url: "/output/generated-assets/ds_1778229673952_03ccda43/18-7f64cfae87.jpeg",
    },
    {
      num: "02",
      title: "Make Smarter Support Decisions with Zia AI",
      description: "Zoho Desk includes Zia, an AI-powered assistant that helps support teams improve response quality and resolution speed.",
      features: ["AI-Powered Responses", "Sentiment Analysis", "Auto Tagging & Insights", "Conversation Intelligence"],
      image_url: "/output/generated-assets/ds_1778229673952_03ccda43/17-3965757185.jpeg",
    },
    {
      num: "03",
      title: "Integrate with popular apps and Zoho ecosystem",
      description: "Connect your help desk with your favorite apps across CRM, communication, and business tools with ease.",
      features: ["CRM Integration", "Collaboration Tools", "Telephony", "E-commerce Platforms", "Automation Tools"],
      image_url: "/output/generated-assets/ds_1778229673952_03ccda43/19-b36bdf959c.jpeg",
    },
    {
      num: "04",
      title: "Customization Beyond Limits",
      description: "Zoho Desk is built to adapt to your support workflows and business needs.",
      features: ["Layouts", "Blueprints", "Extensions", "Help Center"],
      image_url: "/output/generated-assets/ds_1778229673952_03ccda43/21-5411ff2828.png",
    },
  ].map((section, index) => (
    <div key={index} className={`falt-block reveal ${index % 2 !== 0 ? "flip" : ""}`}>
      <div className="falt-num">0{index + 1}</div>
      <h3 className="text-3xl font-semibold">{section.title}</h3>
      <p className="mt-2 text-lg text-gray-500">{section.description}</p>
      <div className="falt-chips mt-4 flex flex-wrap gap-2">
        {section.features.map((feature, idx) => (
          <span key={idx} className="falt-chip bg-[#ea5637]/10 text-[#ea5637] px-2 py-1 rounded-full text-sm">{feature}</span>
        ))}
      </div>
      <div className="falt-visual mt-6">
        <img src={section.image_url} alt={`Feature ${index + 1}`} style={{width:'100%', borderRadius:'12px',display:'block'}} />
      </div>
    </div>
  ))}
</section>

<section className="fig py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="fig-head text-center">
      <span className="inline-flex items-center gap-1.5 rounded-full bg-[#ea5637]/10 border border-[#ea5637]/25 text-[#ea5637] px-3 py-1 text-xs font-bold tracking-wider uppercase">
        Features
      </span>
      <h2 className="text-4xl font-bold tracking-tight leading-tight mt-4">
        Deliver Exceptional Customer Support with Zoho Desk
      </h2>
      <p className="text-lg leading-relaxed text-gray-500 mt-6">
        Streamline customer service, manage tickets efficiently, and deliver seamless support experiences across every channel.
      </p>
      <div className="relative mt-8">
        <img src="/output/generated-assets/ds_1778229673952_03ccda43/12-bd4c399912.jpeg" alt="Zoho Desk" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
      </div>
    </div>
    <div className="fig-grid grid gap-6 mt-12 reveal stagger-parent">
      {[
        {"title":"Omnichannel Support","description":"Manage customer conversations across email, chat, phone, and social media from a single platform."},
        {"title":"Ticket Management","description":"Organize, prioritize, and resolve tickets efficiently with automation and smart workflows."},
        {"title":"AI Assistance (Zia)","description":"Get intelligent suggestions, auto-tag tickets, detect sentiment, and respond faster with AI-powered insights."},
        {"title":"Workflow Automation","description":"Automate repetitive support tasks, assign tickets, and streamline processes for faster resolutions."},
        {"title":"AI-Powered Responses","description":"Generate accurate replies, suggest solutions, and assist agents in real time."},
        {"title":"Sentiment Analysis","description":"Understand customer emotions and prioritize critical issues for better service."}
      ].map((feature, index) => (
        <div className="fig-card flex flex-col items-start p-6 border border-gray-100 bg-white shadow-sm rounded-2xl hover:-translate-y-1 hover:shadow-md transition-all duration-300 anim d0" key={index}>
          <div className="fig-icon mb-4">
            {/* Example SVG icon, replace with relevant icons */}
            <svg fill="#ea5637" width="16" height="16" viewBox="0 0 16 16">
              <circle cx="8" cy="8" r="8"/>
            </svg>
          </div>
          <h4 className="text-xl font-bold mb-2">{feature.title}</h4>
          <p className="text-base text-gray-500">{feature.description}</p>
          {index === 0 && <img src="/output/generated-assets/ds_1778229673952_03ccda43/18-7f64cfae87.jpeg" alt="Feature 1" style={{width:'100%',borderRadius:'12px',display:'block'}}/>}
          {index === 1 && <img src="/output/generated-assets/ds_1778229673952_03ccda43/17-3965757185.jpeg" alt="Feature 2" style={{width:'100%',borderRadius:'12px',display:'block'}}/>}
          {index === 2 && <img src="/output/generated-assets/ds_1778229673952_03ccda43/19-b36bdf959c.jpeg" alt="Feature 3" style={{width:'100%',borderRadius:'12px',display:'block'}}/>}
          {index === 3 && <img src="/output/generated-assets/ds_1778229673952_03ccda43/21-5411ff2828.png" alt="Feature 4" style={{width:'100%',borderRadius:'12px',display:'block'}}/>}
        </div>
      ))}
    </div>
  </div>
</section>

<section className="mns bg-white py-24">
  <div className="max-w-6xl mx-auto px-6">
    <div className="flex flex-col-reverse lg:flex-row items-center gap-12">
      <div className="space-y-4 max-w-xl">
        <h2 className="mns-head text-4xl font-bold tracking-tight leading-tight">Deliver Exceptional Customer Support with Zoho Desk</h2>
        <div className="mns-label inline-flex items-center gap-1.5 rounded-full bg-[#ea5637]/10 border border-[#ea5637]/25 text-[#ea5637] px-3 py-1 text-xs font-bold tracking-wider uppercase">FEATURES</div>
        <div className="mns-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" style={{animation: 'stagger 0.2s both'}}>
          {[
            {publication: 'TechTimes', headline: 'Streamlining Customer Support with Zoho Desk'},
            {publication: 'ServiceWorld', headline: 'Zoho Desk Revolutionizes Ticket Management'},
            {publication: 'AI Insights', headline: 'Zoho Desk’s Zia Transforms AI Assistance'}
          ].map((item, index) => (
            <div key={index} className="mns-card rounded-2xl border border-gray-200 bg-white shadow-sm p-6">
              <div className="mns-pub text-sm font-semibold text-gray-700">{item.publication}</div>
              <div className="mns-text text-lg font-medium text-gray-900 mt-2">"{item.headline}"</div>
            </div>
          ))}
        </div>
      </div>
      <div className="relative aspect-video w-full max-w-md lg:max-w-lg">
        <img src="/output/generated-assets/ds_1778229673952_03ccda43/12-bd4c399912.jpeg" alt="Zoho Desk" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}} />
      </div>
    </div>
  </div>
</section>

<section className="pdv">
  <div className="max-w-6xl mx-auto px-6">
    <div className="anim d0 pdv-head">
      <span className="eyebrow">Product Demo Video</span>
      <h2 className="text-4xl font-bold tracking-tight leading-tight">Deliver Exceptional Customer Support with Zoho Desk</h2>
      <p className="text-lg leading-relaxed text-gray-500">
        Streamline customer service, manage tickets efficiently, and deliver seamless support experiences across every channel.
      </p>
    </div>
    <div className="anim-scale d2 pdv-browser mt-8 overflow-hidden rounded-2xl shadow-lg">
      <div className="flex items-center justify-between px-4 py-2 bg-[#ea5637] pdv-bar">
        <span className="pdv-dot" style={{backgroundColor: '#FF605C'}}></span>
        <span className="pdv-dot" style={{backgroundColor: '#FFBD44'}}></span>
        <span className="pdv-dot" style={{backgroundColor: '#00CA4E'}}></span>
      </div>
      <div className="relative pdv-frame">
        <video className="pdv-video" autoPlay muted loop playsInline>
          <source src="https://www.zohowebstatic.com/sites/zweb/images/desk/zd-hp-banner-video.mp4" type="video/mp4" />
        </video>
        <img src="/output/generated-assets/ds_1778229673952_03ccda43/12-bd4c399912.jpeg" alt="Zoho Desk" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
      </div>
    </div>
    <div className="mt-10 flex justify-center">
      <a href="#" className="pdv-btn inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#ea5637] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all">
        Get Your Free Trial
      </a>
    </div>
  </div>
</section>

<section className="wtj py-24 bg-white">
  <div className="wtj-inner max-w-6xl mx-auto px-6">
    <div className="wtj-top text-center mb-16">
      <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" className="wtj-logo mx-auto mb-4" />
      <h2 className="wtj-tagline text-4xl font-bold tracking-tight leading-tight text-[#ea5637]">
        India's #1 B2B Software Marketplace
      </h2>
      <div className="wtj-divider mt-6 h-px bg-gray-200"></div>
    </div>
    <div className="wtj-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 reveal anim d0">
      <div className="wtj-card rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
        <div className="wtj-icon mb-4">
          <svg className="w-8 h-8 text-[#ea5637]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7"></path>
          </svg>
        </div>
        <h4 className="font-bold mb-2">Free Expert Consultation</h4>
        <p className="text-gray-500">Get matched with the right software for your needs.</p>
      </div>
      <div className="wtj-card rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
        <div className="wtj-icon mb-4">
          <svg className="w-8 h-8 text-[#ea5637]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
          </svg>
        </div>
        <h4 className="font-bold mb-2">Verified Reviews</h4>
        <p className="text-gray-500">1000+ genuine customer reviews to help you decide.</p>
      </div>
      <div className="wtj-card rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
        <div className="wtj-icon mb-4">
          <svg className="w-8 h-8 text-[#ea5637]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v8m-4-4h8"></path>
          </svg>
        </div>
        <h4 className="font-bold mb-2">Best Price Guarantee</h4>
        <p className="text-gray-500">Competitive pricing assured for all software.</p>
      </div>
      <div className="wtj-card rounded-2xl border border-gray-100 bg-white p-7 shadow-sm hover:-translate-y-1 hover:shadow-md transition-all duration-300">
        <div className="wtj-icon mb-4">
          <svg className="w-8 h-8 text-[#ea5637]" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3 3v12h12M21 21L3 3"></path>
          </svg>
        </div>
        <h4 className="font-bold mb-2">Dedicated Support</h4>
        <p className="text-gray-500">Post-sale onboarding assistance for smooth transitions.</p>
      </div>
    </div>
  </div>
  <img src="/output/generated-assets/ds_1778229673952_03ccda43/12-bd4c399912.jpeg" alt="Zoho Desk" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}} />
</section>

<section className="plc py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <div className="eyebrow inline-flex items-center gap-1.5 rounded-full bg-[#ea5637]/10 border border-[#ea5637]/25 text-[#ea5637] px-3 py-1 text-xs font-bold tracking-wider uppercase">
        Pricing
      </div>
      <h2 className="plc-head text-4xl font-bold tracking-tight leading-tight anim d0">
        Deliver Exceptional Customer Support with Zoho Desk
      </h2>
    </div>
    <div className="plc-grid grid gap-8 md:grid-cols-2 lg:grid-cols-3 items-end justify-center anim">
      <div className="plc-card featured rounded-2xl border border-gray-200 bg-white shadow-sm p-6 hover:-translate-y-1 hover:shadow-md transition-transform">
        <div className="plc-badge inline-flex items-center gap-1.5 rounded-full bg-[#ea5637]/10 border border-[#ea5637]/25 text-[#ea5637] px-3 py-1 text-xs font-bold tracking-wider uppercase">
          Best Value
        </div>
        <span className="plc-plan text-2xl font-bold text-gray-800 block mt-4">Zoho Desk</span>
        <div className="mt-3">
          <span className="plc-amount text-4xl font-bold text-[#ea5637] tracking-tight"></span>
          <span className="plc-period text-lg text-gray-500">per user/month</span>
        </div>
        <p className="plc-desc text-gray-500 mt-4">Streamline customer service with a full suite of support tools.</p>
        <ul className="plc-list mt-6 space-y-2 text-sm text-gray-600">
          <li>Ticket Management</li>
          <li>Omnichannel Support</li>
          <li>Workflow Automation</li>
          <li>AI-Powered Assistance</li>
          <li>Knowledge Base</li>
          <li>Reporting & Analytics</li>
          <li>Integrations</li>
          <li>Alerts & Notifications</li>
          <li>Supported Device: Android, iOS, Windows, Mac</li>
        </ul>
        <button className="plc-btn primary mt-6 w-full inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#ea5637] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none disabled:opacity-50">
          Get Your Free Trial
        </button>
		<img src="/output/generated-assets/ds_1778229673952_03ccda43/12-bd4c399912.jpeg" alt="Zoho Desk" style={{width:'100%',height:'100%',objectFit:'cover',display:'block',position:'absolute',inset:0}}/>
      </div>
    </div>
  </div>
</section>

const { useState, useEffect } = React;

const LandingPage = () => {
  const [slide, setSlide] = useState(0);
  const testimonials = [
    {
      quote: "Zoho Desk helped us streamline our support tickets and respond faster to customer queries. Our team now handles requests more efficiently with better visibility.",
      author: "Sanjay Bhatnagar",
      role: "Customer Support Lead",
      company: "",
    },
    {
      quote: "Managing customer conversations across multiple channels became effortless with Zoho Desk. It significantly improved our response time and customer satisfaction.",
      author: "Arjun Mishra",
      role: "Operations Manager",
      company: "",
    },
    {
      quote: "Automation in Zoho Desk reduced manual work for our support team. We can now focus more on solving issues rather than managing tickets.",
      author: "Vanshika Malhotra",
      role: "Head of Support",
      company: "",
    },
    {
      quote: "The knowledge base and self-service portal helped reduce our ticket volume while improving customer experience.",
      author: "Nitin Singh",
      role: "Founder",
      company: "D2C Brand",
    },
    {
      quote: "Zoho Desk’s reporting and dashboards give us clear insights into support performance and customer issues.",
      author: "Akashdeep Sirkar",
      role: "Customer Experience Manager",
      company: "Fintech Company",
    },
  ];

  useEffect(() => {
    const t = setInterval(() => setSlide((p) => (p + 1) % testimonials.length), 4000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="tcar bg-white py-24">
      <div className="container max-w-6xl mx-auto px-6">
        <div className="reveal anim d0 tcar-head text-center mb-12">
          <span className="eyebrow inline-flex items-center gap-2 px-3 py-1 bg-[#ea5637]/10 border border-[#ea5637]/25 text-[#ea5637] text-xs font-bold tracking-wider uppercase">
            TESTIMONIALS
          </span>
          <h2 className="text-4xl font-bold tracking-tight leading-tight mt-4">
            Deliver Exceptional Customer Support with Zoho Desk
          </h2>
        </div>
        <div className="tcar-layout flex gap-12 items-start">
          <div className="tcar-rail flex-none w-[28rem] space-y-4">
            {testimonials.slice(0, 3).map((testimonial, index) => (
              <div key={index} className="tcar-mini card bg-white p-6 shadow-sm rounded-2xl border border-gray-200 hover:-translate-y-1 transition-transform">
                <div className="tcar-mini-stars inline-flex mb-3">{"★".repeat(5)}</div>
                <p className="anim d0">{testimonial.quote.slice(0, 70)}...</p>
                <p className="font-bold mt-4">{testimonial.author}</p>
              </div>
            ))}
          </div>
          <div className="tcar-stage flex-1 overflow-hidden relative">
            <div className="tcar-track flex transition-transform" style={{ transform: `translateX(-${slide * 100}%)` }}>
              {testimonials.map((testimonial, index) => (
                <div key={index} className="tcar-slide flex-none w-full px-4">
                  <div className="tcar-quote card bg-white p-7 shadow-sm rounded-2xl border border-gray-200">
                    <div className="tcar-stars mb-6">{"★".repeat(5)}</div>
                    <p className="lead">{testimonial.quote}</p>
                    <div className="tcar-author mt-6 flex items-center">
                      <div className="tcar-avatar rounded-full bg-[#ea5637] text-white flex items-center justify-center mr-4" style={{ width: 40, height: 40 }}>
                        {testimonial.author.split(' ').map(name => name[0]).join('')}
                      </div>
                      <div>
                        <p className="tcar-name font-bold">{testimonial.author}</p>
                        <p className="tcar-role text-sm text-gray-500">{testimonial.role}{testimonial.company && `, ${testimonial.company}`}</p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="tcar-dots flex justify-center mt-8 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              className={`tcar-dot w-3 h-3 rounded-full bg-gray-400 ${slide === index ? 'bg-[#ea5637]' : ''}`}
              onClick={() => setSlide(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LandingPage;

<section className="ctadb" style={{ backgroundColor: '#f8fafc', position: 'relative', overflow: 'hidden' }}>
  <img src="/output/generated-assets/ds_1778229673952_03ccda43/12-bd4c399912.jpeg" alt="Zoho Desk" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', position: 'absolute', inset: 0 }} />
  <div className="ctadb-inner max-w-6xl mx-auto px-6 relative z-10">
    <h2 className="text-4xl font-bold tracking-tight leading-tight anim d0" style={{ color: '#ea5637' }}>Deliver Exceptional Customer Support with Zoho Desk</h2>
    <p className="text-lg leading-relaxed text-[#5b6472] mt-4 anim d1">Streamline customer service, manage tickets efficiently, and deliver seamless support experiences across every channel.</p>
    <div className="ctadb-btns flex mt-8 space-x-3 anim d2">
      <a href="#lead-form" className="ctadb-btn inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#ea5637] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all">Get Your Free Trial</a>
      <a href="#lead-form" className="ctadb-ghost inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 border border-[#ea5637] text-[#ea5637] bg-transparent hover:bg-[#ea5637]/10 transition-all">Get Started</a>
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