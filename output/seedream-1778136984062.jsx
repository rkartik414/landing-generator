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
      --accent: #b3713f;
      --primary: #b3713f;
      --accent-rgb: 179,113,63;
      --bodyBg: #ffffff;
    }
    * { box-sizing: border-box; margin: 0; padding: 0; }
    html { scroll-behavior: smooth; }
    body { font-family: 'Inter', ui-sans-serif, sans-serif; background: var(--bodyBg); color: #111827; }
    a { text-decoration: none; color: inherit; }
    img { max-width: 100%; }
    button { font-family: inherit; }
  
@keyframes fadeUp { from { opacity:0; transform:translateY(28px); } to { opacity:1; transform:translateY(0); } }
     @keyframes scaleIn { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
     .anim { opacity:0; animation:fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
     .anim-scale { opacity:0; animation:scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards; }
     .d0{animation-delay:0.05s}.d1{animation-delay:0.2s}.d2{animation-delay:0.35s}
     .d3{animation-delay:0.5s}.d4{animation-delay:0.65s}.d5{animation-delay:0.8s}
     .container{max-width:1200px;margin:0 auto;padding:0 24px}
     .section{padding:96px 0;position:relative}
     .eyebrow{display:inline-flex;align-items:center;gap:8px;padding:6px 14px;border-radius:100px;background:rgba(var(--accent-rgb),0.1);border:1px solid rgba(var(--accent-rgb),0.25);color:var(--accent);font-size:12px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase}
     .reveal{opacity:0;transform:translateY(32px);transition:opacity 0.7s ease,transform 0.7s ease}
     .reveal.visible{opacity:1;transform:none}

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
     <nav className="sticky top-0 z-50 bg-gray-900/90 backdrop-blur-xl border-b border-white/10 py-3.5">
        <div className="max-w-6xl mx-auto px-6 flex justify-between items-center gap-4">
          <span className="font-extrabold text-xl text-[#b3713f]">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span>
          <img src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg" height="28" alt="Techjockey" className="h-7 opacity-95" />
          <a href="#lead-form" className="bg-[#b3713f] text-white font-bold px-6 py-3 rounded-xl hover:-translate-y-0.5 transition-transform cursor-pointer border-none text-sm">Get Free Consultation</a>
        </div>
      </nav>

      <section className="hvf">
  <div className="hvf-video" style={{ backgroundImage: video_url ? `url(${video_url})` : 'linear-gradient(to bottom right, #1a202c, #2d3748)' }}></div>
  <div className="hvf-overlay"></div>
  <div className="hvf-content">
    <div className="hvf-inner">
      <h1 className="hvf-h1 anim d0">Create High-Quality AI Images &amp; Videos with <span className="hvf-accent">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span></h1>
      <p className="hvf-desc anim d1">Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
      <div className="hvf-chips">
        {["Seedream 4.5", "Seedance 1.5 Pro"].map((chip, index) => (
          <div key={index} className="hvf-chip">{chip}</div>
        ))}
      </div>
      <div className="hvf-pill anim d2">
        <input type="text" placeholder="Enter your idea..." className="hvf-input" />
        <button className="hvf-btn">{cta_text}</button>
      </div>
      <div className="hvf-proof">
        <div className="hvf-avatars">
          <div className="hvf-av" style={{ backgroundColor: '#f6ad55' }}>AB</div>
          <div className="hvf-av" style={{ backgroundColor: '#fc8181' }}>CD</div>
          <div className="hvf-av" style={{ backgroundColor: '#68d391' }}>EF</div>
          <div className="hvf-av" style={{ backgroundColor: '#63b3ed' }}>GH</div>
        </div>
        <div className="hvf-stars">
          {[...Array(5)].map((_, i) => (
            <svg key={i} width="20" height="20" fill="gold">
              <polygon points="9.9,1.1 6.6,15.1 19.8,5.8 0.2,5.8 13.4,15.1 " />
            </svg>
          ))}
        </div>
        <div className="hvf-rcount">{review_count}</div>
      </div>
    </div>
  </div>
</section>

<section className="tms">
  <div className="tms-grid">
    <div className="tms-cell reveal">
      <div className="tms-val" data-count="10000">10,000+</div>
      <div className="tms-label">Businesses</div>
      <div className="tms-note">Active customers worldwide</div>
    </div>
    <div className="tms-cell reveal">
      <div className="tms-val" data-count="99.9">99.9%</div>
      <div className="tms-label">Uptime</div>
      <div className="tms-note">Enterprise-grade reliability</div>
    </div>
    <div className="tms-cell reveal">
      <div className="tms-val" data-count="4.8">4.8★</div>
      <div className="tms-label">Rating</div>
      <div className="tms-note">Across 1,000+ reviews</div>
    </div>
  </div>
</section>

<section className="falt">
  <div className="falt-head anim d0">
    <span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#b3713f]/10 border border-[#b3713f]/25 text-[#b3713f]">
      section_label
    </span>
    <h2 className="text-4xl font-bold tracking-tight leading-tight">
      Create High-Quality AI Images & Videos with ByteDance Generative Models
    </h2>
  </div>
  {[
    {
      num: "01",
      title: "AI Image Generation with Seedream 4.5",
      description:
        "Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs.\nThe model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.",
      features: [
        "Advanced Capabilities of Seedream 4.5 by ByteDance",
        "Advanced Text–Image Alignment",
        "High-Resolution Output",
        "Superior Typographic Rendering",
        "Multi-Image Composition with Identity Preservation",
        "Strong Structural Fidelity"
      ],
      image_url: "/output/generated-assets/ds_1778136760020_89ba34a0/15-41ea7f7485.png",
      video_url: ""
    },
    {
      num: "02",
      title: "AI Video Generation with Seedance 1.5 Pro by Bytedance",
      description:
        "Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together.\nBuilt on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.",
      features: [
        "Key Capabilities of Seedance 1.5 Pro",
        "Text-to-Video Generation",
        "Audio-Visual Synchronization",
        "Multilingual Lip-Sync",
        "Cinematic Camera Control",
        "10× Faster Inference"
      ],
      image_url: "/output/generated-assets/ds_1778136760020_89ba34a0/14-e1b1bc05a8.jpeg",
      video_url: ""
    }
  ].map((section, index) => (
    <div className={`falt-block${index % 2 !== 0 ? " flip" : ""} reveal`} key={section.num}>
      <div className="falt-num">{section.num}</div>
      <h3 className="text-4xl font-bold tracking-tight leading-tight">{section.title}</h3>
      <p className="text-lg leading-relaxed text-gray-500">{section.description}</p>
      <div className="falt-chips">
        {section.features.map((feature, featureIndex) => (
          <span
            className="inline-flex items-center gap-1.5 rounded-full bg-[#b3713f]/10 border border-[#b3713f]/25 text-[#b3713f] px-3 py-1 text-xs font-bold tracking-wider uppercase"
            key={featureIndex}
          >
            {feature}
          </span>
        ))}
      </div>
      <div className="falt-visual">
        {section.image_url ? (
          <img src={section.image_url} alt={section.title} />
        ) : section.video_url ? (
          <video src={section.video_url} controls />
        ) : (
          <div className="falt-visual-dark" />
        )}
      </div>
    </div>
  ))}
</section>

<section className="fig py-24 bg-white">
  <div className="container">
    <div className="fig-head mb-12 text-center">
      <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#b3713f]/10 border border-[#b3713f]/25 text-[#b3713f]">section_label</div>
      <h2 className="h2 mt-4">Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
      <p className="body-text mt-4">Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
    </div>
    <div className="fig-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 stagger-parent">
      {features.map((feature, index) => (
        <div key={index} className="fig-card p-7 bg-white border border-[#e5e7eb] rounded-2xl shadow-sm hover:-translate-y-1.5 hover:shadow-md transition-transform opacity-0 translate-y-4">
          {feature.hasIcon && <div className="fig-icon mb-4"><svg width="16" height="16" fill="var(--accent)"><path d="M...Z" /></svg></div>}
          <h4 className="font-bold text-lg mb-2">{feature.title}</h4>
          <p className="text-sm text-gray-500">{feature.description}</p>
        </div>
      ))}
    </div>
  </div>
</section>

<section className="gvw py-24 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <div className="text-center mb-12">
      <span className="eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#b3713f]/10 border border-[#b3713f]/25 text-[#b3713f]">section_label</span>
      <h2 className="gvw-head text-4xl font-bold tracking-tight leading-tight mt-2">
        Create High-Quality AI Images & Videos with ByteDance Generative Models
      </h2>
      <p className="text-lg leading-relaxed text-gray-500 mt-4">
        Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
      </p>
    </div>
    <div className="gvw-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      <div className="gvw-card rounded-2xl border border-gray-200 bg-white shadow-sm p-6 anim d0">
        <video className="gvw-video w-full h-auto rounded-lg" src="https://cdn.web.imagine.art/imagine-one/cdge/sora2.mp4" autoPlay muted loop playsInline></video>
        <div className="gvw-caption mt-3 text-center text-sm font-semibold text-gray-700">Seedream 4.5</div>
      </div>
      <div className="gvw-card rounded-2xl border border-gray-200 bg-white shadow-sm p-6 anim d0">
        <video className="gvw-video w-full h-auto rounded-lg" src="https://cdn.web.imagine.art/imagine-one/cdge/sora33.mp4" autoPlay muted loop playsInline></video>
        <div className="gvw-caption mt-3 text-center text-sm font-semibold text-gray-700">Seedance 1.5 Pro</div>
      </div>
      <div className="gvw-card rounded-2xl border border-gray-200 bg-white shadow-sm p-6 anim d0">
        <video className="gvw-video w-full h-auto rounded-lg" src="https://cdn.web.imagine.art/remote-config/assets/video_effects/sd/podcast.mp4" autoPlay muted loop playsInline></video>
        <div className="gvw-caption mt-3 text-center text-sm font-semibold text-gray-700">Demo 3</div>
      </div>
      <div className="gvw-card rounded-2xl border border-gray-200 bg-white shadow-sm p-6 anim d0">
        <video className="gvw-video w-full h-auto rounded-lg" src="https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4" autoPlay muted loop playsInline></video>
        <div className="gvw-caption mt-3 text-center text-sm font-semibold text-gray-700">Demo 4</div>
      </div>
    </div>
  </div>
</section>

<section className="wtj">
  <div className="wtj-inner">
    <div className="wtj-top">
      <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" className="wtj-logo" />
      <hr className="wtj-divider" />
      <p className="wtj-tagline">India's #1 B2B Software Marketplace</p>
    </div>
    <div className="wtj-grid">
      <div className="wtj-card anim d0">
        <svg className="wtj-icon" viewBox="0 0 24 24">
          <!-- Add SVG path here -->
        </svg>
        <h4>Free Expert Consultation</h4>
        <p>Get matched with right software</p>
      </div>
      <div className="wtj-card anim d1">
        <svg className="wtj-icon" viewBox="0 0 24 24">
          <!-- Add SVG path here -->
        </svg>
        <h4>Verified Reviews</h4>
        <p>1000+ genuine customer reviews</p>
      </div>
      <div className="wtj-card anim d2">
        <svg className="wtj-icon" viewBox="0 0 24 24">
          <!-- Add SVG path here -->
        </svg>
        <h4>Best Price Guarantee</h4>
        <p>Competitive pricing assured</p>
      </div>
      <div className="wtj-card anim d3">
        <svg className="wtj-icon" viewBox="0 0 24 24">
          <!-- Add SVG path here -->
        </svg>
        <h4>Dedicated Support</h4>
        <p>Post-sale onboarding assistance</p>
      </div>
    </div>
  </div>
</section>

<section className="pdc bg-gray-50 py-24">
  <div className="container max-w-6xl mx-auto px-6">
    <header className="pdc-head text-center mb-16 anim d0">
      <span className="eyebrow inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-bold tracking-wider uppercase bg-[#b3713f]/10 border border-[#b3713f]/25 text-[#b3713f]">
        section_label
      </span>
      <h2 className="text-4xl font-bold tracking-tight leading-tight mt-4">Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
    </header>
    <div className="pdc-grid grid gap-10 md:grid-cols-2">
      <div className="pdc-card featured rounded-2xl border border-gray-200 bg-white shadow-sm p-6 transform transition-all duration-300 hover:-translate-y-1">
        <span className="pdc-badge inline-flex items-center gap-1.5 rounded-full bg-[#b3713f]/10 border border-[#b3713f]/25 text-[#b3713f] px-3 py-1 text-xs font-bold tracking-wider uppercase">Discount</span>
        <h3 className="pdc-plan mt-6 text-xl font-semibold">Seedream 4.5 (AI Image Generation)</h3>
        <div className="pdc-price mt-4">
          <span className="pdc-amount text-2xl font-bold">Contact for Pricing</span>
        </div>
        <p className="pdc-period mt-2 text-xs font-medium text-gray-500">per user/month</p>
        <p className="pdc-desc mt-4 text-gray-600"></p>
        <ul className="pdc-list mt-6 space-y-3">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-[#b3713f] pdc-check mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            High-resolution image generation (up to 4K quality)
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-[#b3713f] pdc-check mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Text-to-image & multimodal image editing
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-[#b3713f] pdc-check mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Multi-image composition for complex visuals
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-[#b3713f] pdc-check mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Enhanced typographic rendering for posters, ads & text-heavy designs
          </li>
        </ul>
        <button className="pdc-btn mt-8 inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#b3713f] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none">Choose Plan</button>
      </div>
      <div className="pdc-card rounded-2xl border border-gray-200 bg-white shadow-sm p-6 transform transition-all duration-300 hover:-translate-y-1">
        <h3 className="pdc-plan mt-6 text-xl font-semibold">Seedance 1.5 Pro (AI Video Generation)</h3>
        <div className="pdc-price mt-4">
          <span className="pdc-amount text-2xl font-bold">Starting at $1,000/month/</span>
        </div>
        <p className="pdc-period mt-2 text-xs font-medium text-gray-500">per user/month</p>
        <p className="pdc-desc mt-4 text-gray-600"></p>
        <ul className="pdc-list mt-6 space-y-3">
          <li className="flex items-start">
            <svg className="h-5 w-5 text-[#b3713f] pdc-check mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Text-to-video generation with cinematic output
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-[#b3713f] pdc-check mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Native audio + video generation (synchronized)
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-[#b3713f] pdc-check mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Multilingual lip-sync capabilities
          </li>
          <li className="flex items-start">
            <svg className="h-5 w-5 text-[#b3713f] pdc-check mr-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" /></svg>
            Fast inference for quicker video production
          </li>
        </ul>
        <button className="pdc-btn mt-8 inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#b3713f] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none">Choose Plan</button>
      </div>
    </div>
  </div>
</section>

const [slide, setSlide] = React.useState(0);
React.useEffect(() => {
  const t = setInterval(() => setSlide(p => (p + 1) % testimonials.length), 4000);
  return () => clearInterval(t);
}, []);

<section className="tcar">
  <div className="container">
    <div className="tcar-head anim d0">
      <span className="eyebrow">section_label</span>
      <h1 className="h1">Create High-Quality AI Images & Videos with ByteDance Generative Models</h1>
      <p className="body-text">Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
    </div>
    
    <div className="tcar-layout">
      <div className="tcar-rail">
        {testimonials.slice(0, 3).map((testimonial, index) => (
          <div key={index} className="tcar-mini">
            <div className="tcar-mini-stars">★★★★★</div>
            <p className="truncate">{testimonial.quote}</p>
            <p className="tcar-author">{testimonial.author}</p>
          </div>
        ))}
      </div>
      
      <div className="tcar-stage anim-scale d1">
        <div className="tcar-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
          {testimonials.map((testimonial, index) => (
            <div key={index} className="tcar-slide">
              <div className="tcar-quote">{testimonial.quote}</div>
              <div className="tcar-stars">★★★★★</div>
              <div className="tcar-text">
                <div className="tcar-avatar">{testimonial.author.split(' ').map(name => name[0]).join('')}</div>
                <div className="tcar-name">{testimonial.author}</div>
                <div className="tcar-role">{testimonial.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    
    <div className="tcar-dots">
      {testimonials.map((_, index) => (
        <button key={index} className={`tcar-dot ${index === slide ? 'active' : ''}`} onClick={() => setSlide(index)}></button>
      ))}
    </div>
  </div>
</section>

<section className="ctavb">
  <div className="ctavb-bg">
    <video autoPlay muted loop playsInline>
      <source src="/output/generated-assets/ds_1778136760020_89ba34a0/08-8c93b9a6e6.mp4" type="video/mp4" />
    </video>
  </div>
  <div className="ctavb-overlay"></div>
  <div className="ctavb-inner max-w-6xl mx-auto px-6 py-24">
    <h2 className="text-4xl font-bold tracking-tight leading-tight text-white anim d0">
      Create High-Quality AI Images & Videos with ByteDance Generative Models
    </h2>
    <p className="text-lg leading-relaxed text-white/80 anim d1 mt-4">
      Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
    </p>
    <a href="#lead-form" className="ctavb-btn inline-flex items-center justify-center rounded-xl text-sm font-semibold h-11 px-6 bg-[#b3713f] text-white shadow hover:-translate-y-0.5 hover:opacity-90 transition-all focus-visible:outline-none anim d2 mt-8">
      Generate with AI
    </a>
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