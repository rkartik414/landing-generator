import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent  = '#b3713f';
  const primary = '#b3713f';
  const bodyBg  = '#ffffff';

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    // Scroll reveal
    const obs = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.12 }
    );
    document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
    return () => obs.disconnect();
  }, []);

  return (
    <div style={{ background: bodyBg, fontFamily: "'Inter', ui-sans-serif, sans-serif" }}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus%20Jakarta%20Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600&family=Instrument+Serif:ital@1&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: `
        * { box-sizing: border-box; margin: 0; padding: 0; }
        body { overflow-x: hidden; }
        a { text-decoration: none; color: inherit; }
        img, video { max-width: 100%; display: block; }
        h1,h2,h3,h4,h5 {
          font-family: 'Plus Jakarta Sans', ui-sans-serif, sans-serif;
        }
        @media (max-width: 768px) {
          .fes-split, .falt-block, .ftd-layout, .fsd-grid,
          .hds-grid, .tcar-layout { grid-template-columns: 1fr !important; }
          .fig-grid, .tgrd-grid, .mns-grid, .pdc-grid,
          .plc-grid { grid-template-columns: 1fr !important; }
          .falt-block.flip { direction: ltr !important; }
          .hds-stats, .tms-grid { grid-template-columns: 1fr !important; }
          .hds-stat:not(:last-child)::after { display: none; }
        }
        
:root {
  --accent: #b3713f;
  --accent-rgb: 179,113,63;
  --primary: #b3713f;
  --bodyBg: #ffffff;
}

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes scaleIn { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
  @keyframes countUp { from { opacity:0; } to { opacity:1; } }
  .anim   { opacity:0; animation:fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
  .anim-scale { opacity:0; animation:scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards; }
  .d0 { animation-delay:0.05s; } .d1 { animation-delay:0.2s; }
  .d2 { animation-delay:0.35s; } .d3 { animation-delay:0.5s; }
  .d4 { animation-delay:0.65s; } .d5 { animation-delay:0.8s; }
  .container { max-width:1200px; margin:0 auto; padding:0 24px; }
  .section   { padding:96px 0; position:relative; }
  .eyebrow   { display:inline-flex; align-items:center; gap:8px;
               padding:6px 14px; border-radius:100px;
               background:rgba(var(--accent-rgb,255,107,0),0.1);
               border:1px solid rgba(var(--accent-rgb,255,107,0),0.25);
               color:var(--accent,#ff6b00); font-size:12px;
               font-weight:700; letter-spacing:0.07em; text-transform:uppercase; }
  .sec-head  { text-align:center; max-width:760px; margin:0 auto 56px; }
  .sec-head h2 { font-size:44px; font-weight:700; letter-spacing:-0.04em;
                 line-height:1.08; margin:14px 0 16px; }
  .sec-head p  { font-size:17px; line-height:1.75; opacity:0.72; }
  .reveal { opacity:0; transform:translateY(32px);
            transition:opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity:1; transform:none; }

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
    

:root {
  --accent: #b3713f;
  --accent-rgb: 179,113,63;
  --primary: #b3713f;
  --bodyBg: #ffffff;
}

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes scaleIn { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
  @keyframes countUp { from { opacity:0; } to { opacity:1; } }
  .anim   { opacity:0; animation:fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
  .anim-scale { opacity:0; animation:scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards; }
  .d0 { animation-delay:0.05s; } .d1 { animation-delay:0.2s; }
  .d2 { animation-delay:0.35s; } .d3 { animation-delay:0.5s; }
  .d4 { animation-delay:0.65s; } .d5 { animation-delay:0.8s; }
  .container { max-width:1200px; margin:0 auto; padding:0 24px; }
  .section   { padding:96px 0; position:relative; }
  .eyebrow   { display:inline-flex; align-items:center; gap:8px;
               padding:6px 14px; border-radius:100px;
               background:rgba(var(--accent-rgb,255,107,0),0.1);
               border:1px solid rgba(var(--accent-rgb,255,107,0),0.25);
               color:var(--accent,#ff6b00); font-size:12px;
               font-weight:700; letter-spacing:0.07em; text-transform:uppercase; }
  .sec-head  { text-align:center; max-width:760px; margin:0 auto 56px; }
  .sec-head h2 { font-size:44px; font-weight:700; letter-spacing:-0.04em;
                 line-height:1.08; margin:14px 0 16px; }
  .sec-head p  { font-size:17px; line-height:1.75; opacity:0.72; }
  .reveal { opacity:0; transform:translateY(32px);
            transition:opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity:1; transform:none; }

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
    

:root {
  --accent: #b3713f;
  --accent-rgb: 179,113,63;
  --primary: #b3713f;
  --bodyBg: #ffffff;
}

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes scaleIn { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
  @keyframes countUp { from { opacity:0; } to { opacity:1; } }
  .anim   { opacity:0; animation:fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
  .anim-scale { opacity:0; animation:scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards; }
  .d0 { animation-delay:0.05s; } .d1 { animation-delay:0.2s; }
  .d2 { animation-delay:0.35s; } .d3 { animation-delay:0.5s; }
  .d4 { animation-delay:0.65s; } .d5 { animation-delay:0.8s; }
  .container { max-width:1200px; margin:0 auto; padding:0 24px; }
  .section   { padding:96px 0; position:relative; }
  .eyebrow   { display:inline-flex; align-items:center; gap:8px;
               padding:6px 14px; border-radius:100px;
               background:rgba(var(--accent-rgb,255,107,0),0.1);
               border:1px solid rgba(var(--accent-rgb,255,107,0),0.25);
               color:var(--accent,#ff6b00); font-size:12px;
               font-weight:700; letter-spacing:0.07em; text-transform:uppercase; }
  .sec-head  { text-align:center; max-width:760px; margin:0 auto 56px; }
  .sec-head h2 { font-size:44px; font-weight:700; letter-spacing:-0.04em;
                 line-height:1.08; margin:14px 0 16px; }
  .sec-head p  { font-size:17px; line-height:1.75; opacity:0.72; }
  .reveal { opacity:0; transform:translateY(32px);
            transition:opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity:1; transform:none; }

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
    

:root {
  --accent: #b3713f;
  --accent-rgb: 179,113,63;
  --primary: #b3713f;
  --bodyBg: #ffffff;
}

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes scaleIn { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
  @keyframes countUp { from { opacity:0; } to { opacity:1; } }
  .anim   { opacity:0; animation:fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
  .anim-scale { opacity:0; animation:scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards; }
  .d0 { animation-delay:0.05s; } .d1 { animation-delay:0.2s; }
  .d2 { animation-delay:0.35s; } .d3 { animation-delay:0.5s; }
  .d4 { animation-delay:0.65s; } .d5 { animation-delay:0.8s; }
  .container { max-width:1200px; margin:0 auto; padding:0 24px; }
  .section   { padding:96px 0; position:relative; }
  .eyebrow   { display:inline-flex; align-items:center; gap:8px;
               padding:6px 14px; border-radius:100px;
               background:rgba(var(--accent-rgb,255,107,0),0.1);
               border:1px solid rgba(var(--accent-rgb,255,107,0),0.25);
               color:var(--accent,#ff6b00); font-size:12px;
               font-weight:700; letter-spacing:0.07em; text-transform:uppercase; }
  .sec-head  { text-align:center; max-width:760px; margin:0 auto 56px; }
  .sec-head h2 { font-size:44px; font-weight:700; letter-spacing:-0.04em;
                 line-height:1.08; margin:14px 0 16px; }
  .sec-head p  { font-size:17px; line-height:1.75; opacity:0.72; }
  .reveal { opacity:0; transform:translateY(32px);
            transition:opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity:1; transform:none; }

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
    

:root {
  --accent: #b3713f;
  --accent-rgb: 179,113,63;
  --primary: #b3713f;
  --bodyBg: #ffffff;
}

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes scaleIn { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
  @keyframes countUp { from { opacity:0; } to { opacity:1; } }
  .anim   { opacity:0; animation:fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
  .anim-scale { opacity:0; animation:scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards; }
  .d0 { animation-delay:0.05s; } .d1 { animation-delay:0.2s; }
  .d2 { animation-delay:0.35s; } .d3 { animation-delay:0.5s; }
  .d4 { animation-delay:0.65s; } .d5 { animation-delay:0.8s; }
  .container { max-width:1200px; margin:0 auto; padding:0 24px; }
  .section   { padding:96px 0; position:relative; }
  .eyebrow   { display:inline-flex; align-items:center; gap:8px;
               padding:6px 14px; border-radius:100px;
               background:rgba(var(--accent-rgb,255,107,0),0.1);
               border:1px solid rgba(var(--accent-rgb,255,107,0),0.25);
               color:var(--accent,#ff6b00); font-size:12px;
               font-weight:700; letter-spacing:0.07em; text-transform:uppercase; }
  .sec-head  { text-align:center; max-width:760px; margin:0 auto 56px; }
  .sec-head h2 { font-size:44px; font-weight:700; letter-spacing:-0.04em;
                 line-height:1.08; margin:14px 0 16px; }
  .sec-head p  { font-size:17px; line-height:1.75; opacity:0.72; }
  .reveal { opacity:0; transform:translateY(32px);
            transition:opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity:1; transform:none; }

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
    

:root {
  --accent: #b3713f;
  --accent-rgb: 179,113,63;
  --primary: #b3713f;
  --bodyBg: #ffffff;
}

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes scaleIn { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
  @keyframes countUp { from { opacity:0; } to { opacity:1; } }
  .anim   { opacity:0; animation:fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
  .anim-scale { opacity:0; animation:scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards; }
  .d0 { animation-delay:0.05s; } .d1 { animation-delay:0.2s; }
  .d2 { animation-delay:0.35s; } .d3 { animation-delay:0.5s; }
  .d4 { animation-delay:0.65s; } .d5 { animation-delay:0.8s; }
  .container { max-width:1200px; margin:0 auto; padding:0 24px; }
  .section   { padding:96px 0; position:relative; }
  .eyebrow   { display:inline-flex; align-items:center; gap:8px;
               padding:6px 14px; border-radius:100px;
               background:rgba(var(--accent-rgb,255,107,0),0.1);
               border:1px solid rgba(var(--accent-rgb,255,107,0),0.25);
               color:var(--accent,#ff6b00); font-size:12px;
               font-weight:700; letter-spacing:0.07em; text-transform:uppercase; }
  .sec-head  { text-align:center; max-width:760px; margin:0 auto 56px; }
  .sec-head h2 { font-size:44px; font-weight:700; letter-spacing:-0.04em;
                 line-height:1.08; margin:14px 0 16px; }
  .sec-head p  { font-size:17px; line-height:1.75; opacity:0.72; }
  .reveal { opacity:0; transform:translateY(32px);
            transition:opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity:1; transform:none; }

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
    

:root {
  --accent: #b3713f;
  --accent-rgb: 179,113,63;
  --primary: #b3713f;
  --bodyBg: #ffffff;
}

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes scaleIn { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
  @keyframes countUp { from { opacity:0; } to { opacity:1; } }
  .anim   { opacity:0; animation:fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
  .anim-scale { opacity:0; animation:scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards; }
  .d0 { animation-delay:0.05s; } .d1 { animation-delay:0.2s; }
  .d2 { animation-delay:0.35s; } .d3 { animation-delay:0.5s; }
  .d4 { animation-delay:0.65s; } .d5 { animation-delay:0.8s; }
  .container { max-width:1200px; margin:0 auto; padding:0 24px; }
  .section   { padding:96px 0; position:relative; }
  .eyebrow   { display:inline-flex; align-items:center; gap:8px;
               padding:6px 14px; border-radius:100px;
               background:rgba(var(--accent-rgb,255,107,0),0.1);
               border:1px solid rgba(var(--accent-rgb,255,107,0),0.25);
               color:var(--accent,#ff6b00); font-size:12px;
               font-weight:700; letter-spacing:0.07em; text-transform:uppercase; }
  .sec-head  { text-align:center; max-width:760px; margin:0 auto 56px; }
  .sec-head h2 { font-size:44px; font-weight:700; letter-spacing:-0.04em;
                 line-height:1.08; margin:14px 0 16px; }
  .sec-head p  { font-size:17px; line-height:1.75; opacity:0.72; }
  .reveal { opacity:0; transform:translateY(32px);
            transition:opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity:1; transform:none; }

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
    

:root {
  --accent: #b3713f;
  --accent-rgb: 179,113,63;
  --primary: #b3713f;
  --bodyBg: #ffffff;
}

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes scaleIn { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
  @keyframes countUp { from { opacity:0; } to { opacity:1; } }
  .anim   { opacity:0; animation:fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
  .anim-scale { opacity:0; animation:scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards; }
  .d0 { animation-delay:0.05s; } .d1 { animation-delay:0.2s; }
  .d2 { animation-delay:0.35s; } .d3 { animation-delay:0.5s; }
  .d4 { animation-delay:0.65s; } .d5 { animation-delay:0.8s; }
  .container { max-width:1200px; margin:0 auto; padding:0 24px; }
  .section   { padding:96px 0; position:relative; }
  .eyebrow   { display:inline-flex; align-items:center; gap:8px;
               padding:6px 14px; border-radius:100px;
               background:rgba(var(--accent-rgb,255,107,0),0.1);
               border:1px solid rgba(var(--accent-rgb,255,107,0),0.25);
               color:var(--accent,#ff6b00); font-size:12px;
               font-weight:700; letter-spacing:0.07em; text-transform:uppercase; }
  .sec-head  { text-align:center; max-width:760px; margin:0 auto 56px; }
  .sec-head h2 { font-size:44px; font-weight:700; letter-spacing:-0.04em;
                 line-height:1.08; margin:14px 0 16px; }
  .sec-head p  { font-size:17px; line-height:1.75; opacity:0.72; }
  .reveal { opacity:0; transform:translateY(32px);
            transition:opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity:1; transform:none; }

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
    

:root {
  --accent: #b3713f;
  --accent-rgb: 179,113,63;
  --primary: #b3713f;
  --bodyBg: #ffffff;
}

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(28px); }
    to   { opacity:1; transform:translateY(0); }
  }
  @keyframes fadeIn { from { opacity:0; } to { opacity:1; } }
  @keyframes scaleIn { from { opacity:0; transform:scale(0.94); } to { opacity:1; transform:scale(1); } }
  @keyframes countUp { from { opacity:0; } to { opacity:1; } }
  .anim   { opacity:0; animation:fadeUp 0.85s cubic-bezier(0.22,1,0.36,1) forwards; }
  .anim-scale { opacity:0; animation:scaleIn 1s cubic-bezier(0.22,1,0.36,1) forwards; }
  .d0 { animation-delay:0.05s; } .d1 { animation-delay:0.2s; }
  .d2 { animation-delay:0.35s; } .d3 { animation-delay:0.5s; }
  .d4 { animation-delay:0.65s; } .d5 { animation-delay:0.8s; }
  .container { max-width:1200px; margin:0 auto; padding:0 24px; }
  .section   { padding:96px 0; position:relative; }
  .eyebrow   { display:inline-flex; align-items:center; gap:8px;
               padding:6px 14px; border-radius:100px;
               background:rgba(var(--accent-rgb,255,107,0),0.1);
               border:1px solid rgba(var(--accent-rgb,255,107,0),0.25);
               color:var(--accent,#ff6b00); font-size:12px;
               font-weight:700; letter-spacing:0.07em; text-transform:uppercase; }
  .sec-head  { text-align:center; max-width:760px; margin:0 auto 56px; }
  .sec-head h2 { font-size:44px; font-weight:700; letter-spacing:-0.04em;
                 line-height:1.08; margin:14px 0 16px; }
  .sec-head p  { font-size:17px; line-height:1.75; opacity:0.72; }
  .reveal { opacity:0; transform:translateY(32px);
            transition:opacity 0.7s ease, transform 0.7s ease; }
  .reveal.visible { opacity:1; transform:none; }

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
    
      `}} />

      {/* NAVIGATION */}
      <nav style={{
        position: 'sticky', top: 0, zIndex: 100,
        background: 'rgba(6,8,12,0.88)',
        backdropFilter: 'blur(20px)',
        borderBottom: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'center', height: '68px'
        }}>
          <div style={{
            fontWeight: 800, fontSize: '18px', color: '#fff',
            letterSpacing: '-0.03em'
          }}>
            Seedream 4.5 and Seedance 1.5 Pro by ByteDance
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28" alt="Techjockey"
              style={{ height: '28px', opacity: 0.95 }}
            />
            <a href="#lead-form" style={{
              display: 'inline-flex', alignItems: 'center',
              padding: '11px 22px', borderRadius: '12px',
              background: accent, color: '#fff', fontSize: '14px',
              fontWeight: 700, border: 'none', cursor: 'pointer',
              transition: 'transform .2s, box-shadow .2s'
            }}>
              Get Free Consultation
            </a>
          </div>
        </div>
      </nav>

      {/* SECTIONS */}
      {(() => { 
  const [x, setX] = useState(0); 
  return (
    <section className="hvf">
      <div className="hvf-video">
        <video autoPlay muted loop src="https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4" />
      </div>
      <div className="hvf-overlay" />
      <div className="hvf-content">
        <div className="hvf-inner">
          <h1 className="hvf-h1 anim d0">High-Quality AI Images & Videos with <span className="hvf-accent">create</span></h1>
          <p className="hvf-desc anim d1">Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
          <div className="hvf-chips">
            <div className="hvf-chip">Seedream 4.5</div>
            <div className="hvf-chip">Seedance 1.5 Pro</div>
          </div>
          <div className="hvf-pill anim d2">
            <input className="hvf-input" type="text" placeholder="Input your text here..." />
            <button className="hvf-btn">Generate with AI</button>
          </div>
          <div className="hvf-proof">
            <div className="hvf-avatars">
              <div className="hvf-av" style={{ backgroundColor: '#ffcc00' }}>A</div>
              <div className="hvf-av" style={{ backgroundColor: '#ff6666' }}>B</div>
              <div className="hvf-av" style={{ backgroundColor: '#66ccff' }}>C</div>
              <div className="hvf-av" style={{ backgroundColor: '#cc66ff' }}>D</div>
            </div>
            <div className="hvf-stars">
              <svg width="20" height="20" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg"><polygon points="10 1.5 12.3 7.6 19 7.6 13.3 11.5 15.6 17.6 10 13.6 4.4 17.6 6.7 11.5 1 7.6 7.7 7.6  " /></svg>
              <svg width="20" height="20" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg"><polygon points="10 1.5 12.3 7.6 19 7.6 13.3 11.5 15.6 17.6 10 13.6 4.4 17.6 6.7 11.5 1 7.6 7.7 7.6  " /></svg>
              <svg width="20" height="20" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg"><polygon points="10 1.5 12.3 7.6 19 7.6 13.3 11.5 15.6 17.6 10 13.6 4.4 17.6 6.7 11.5 1 7.6 7.7 7.6  " /></svg>
              <svg width="20" height="20" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg"><polygon points="10 1.5 12.3 7.6 19 7.6 13.3 11.5 15.6 17.6 10 13.6 4.4 17.6 6.7 11.5 1 7.6 7.7 7.6  " /></svg>
              <svg width="20" height="20" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg"><polygon points="10 1.5 12.3 7.6 19 7.6 13.3 11.5 15.6 17.6 10 13.6 4.4 17.6 6.7 11.5 1 7.6 7.7 7.6  " /></svg>
            </div>
            <span className="hvf-rcount">{`1,020+`}</span>
          </div>
        </div>
      </div>
    </section>
  ); 
})()}

<section class="tms">
  <div class="tms-grid">
    <div class="tms-cell reveal">
      <div class="tms-val" data-count="10000">10,000</div>
      <div class="tms-label">Happy Customers</div>
      <div class="tms-note"></div>
    </div>
    <div class="tms-cell reveal d1">
      <div class="tms-val" data-count="98">98%</div>
      <div class="tms-label">Satisfaction Rate</div>
      <div class="tms-note">Based on verified reviews</div>
    </div>
    <div class="tms-cell reveal d2">
      <div class="tms-val" data-count="4.8">4.8</div>
      <div class="tms-label">Average Rating</div>
      <div class="tms-note">1,020+ verified reviews</div>
    </div>
  </div>
</section>

{(() => { const [x, setX] = useState(0); return (
<section className="falt">
  <div className="falt-head anim d0">
    <h2>Built for every workflow</h2>
  </div>
  <div className="falt-block reveal">
    <span className="falt-num">01</span>
    <div className="falt-copy">
      <h3>AI Image Generation with Seedream 4.5</h3>
      <p>Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.</p>
      <div className="falt-chips">
        <span className="falt-chip">Advanced Capabilities of Seedream 4.5 by ByteDance</span>
        <span className="falt-chip">Advanced Text–Image Alignment</span>
        <span className="falt-chip">High-Resolution Output</span>
        <span className="falt-chip">Superior Typographic Rendering</span>
      </div>
    </div>
    <div className="falt-visual">
      <img src="/output/generated-assets/ds_1778069839142_41e1f235/02-6d75b26b02.webp" alt="AI Image Generation" />
    </div>
  </div>
  <div className="falt-block reveal">
    <span className="falt-num">02</span>
    <div className="falt-copy">
      <h3>AI Video Generation with Seedance 1.5 Pro by Bytedance</h3>
      <p>Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.</p>
      <div className="falt-chips">
        <span className="falt-chip">Key Capabilities of Seedance 1.5 Pro</span>
        <span className="falt-chip">Text-to-Video Generation</span>
        <span className="falt-chip">Audio-Visual Synchronization</span>
        <span className="falt-chip">Multilingual Lip-Sync</span>
      </div>
    </div>
    <div className="falt-visual">
      <img src="/output/generated-assets/ds_1778069839142_41e1f235/03-c4e1793d4f.webp" alt="AI Video Generation" />
    </div>
  </div>
</section>
); })()}

{(() => { 
  const [x, setX] = useState(0); 
  return (
    <section className="fig">
      <div className="fig-head">
        <span className="eyebrow">Innovative Technology</span>
        <h2>AI Video Generation with Seedance 1.5 Pro by Bytedance</h2>
        <p>Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.</p>
      </div>
      <div className="fig-grid anim">
        {[
          {title: "Key Capabilities of Seedance 1.5 Pro", description: "Seedance enables professional-grade AI video production with narrative coherence and realistic motion."},
          {title: "Text-to-Video Generation", description: "Create videos directly from text prompts."},
          {title: "Audio-Visual Synchronization", description: "Generate video and audio simultaneously with strong multimodal alignment."},
          {title: "Multilingual Lip-Sync", description: "Supports multilingual and dialect-level lip synchronization."},
          {title: "Cinematic Camera Control", description: "Generate videos with dynamic camera movement and cinematic storytelling."},
          {title: "10× Faster Inference", description: "Optimized inference pipeline significantly improves generation speed."}
        ].map((feature, index) => (
          <div className="fig-card anim d" key={index}>
            <div className="fig-icon">
              <svg width="16" height="16" fill="var(--accent)" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8" r="8"/></svg>
            </div>
            <h4>{feature.title}</h4>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  ); 
})()}

<section className="gvw">
  <div className="gvw-head">
    <div className="eyebrow">Live</div>
    <h2>AI-generated outputs, live</h2>
    <p>Watch what the model produces in real time.</p>
  </div>
  <div className="gvw-grid">
    {[
      { url: "https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4", caption: "Text-to-Video" },
      { url: "https://cdn.web.imagine.art/imagine-one/cdge/sora2.mp4", caption: "Audio-Visual Sync" },
      { url: "https://cdn.web.imagine.art/imagine-one/cdge/sora33.mp4", caption: "Reference Control" },
      { url: "https://cdn.web.imagine.art/remote-config/assets/video_effects/sd/podcast.mp4", caption: "Cinematic Camera" }
    ].map((videoData, index) => (
      <div className={`gvw-card anim-scale d${index}`} key={index}>
        <div className="gvw-video">
          <video autoPlay muted loop playsInline src={videoData.url}></video>
        </div>
        <div className="gvw-caption">{videoData.caption}</div>
      </div>
    ))}
  </div>
</section>

{(() => { const [x, setX] = useState(0); return (
<section className="wtj">
  <div className="wtj-inner">
    <div className="wtj-top">
      <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" className="wtj-logo" />
      <div className="wtj-divider"></div>
      <span className="wtj-tagline">India's #1 B2B Software Marketplace</span>
    </div>
    <div className="wtj-grid">
      <div className="wtj-card anim d0">
        <div className="wtj-icon">
          <svg width="20" height="20" fill="var(--accent)"><circle cx="10" cy="10" r="8" /></svg>
        </div>
        <h4>Free Expert Consultation</h4>
        <p>Get matched with the right software by our B2B experts.</p>
      </div>
      <div className="wtj-card anim d1">
        <div className="wtj-icon">
          <svg width="20" height="20" fill="var(--accent)"><rect width="16" height="16" x="2" y="2" /></svg>
        </div>
        <h4>1,020+ Verified Reviews</h4>
        <p>Real feedback from genuine customers across India.</p>
      </div>
      <div className="wtj-card anim d2">
        <div className="wtj-icon">
          <svg width="20" height="20" fill="var(--accent)"><path d="M10 1L1 19h18L10 1z" /></svg>
        </div>
        <h4>Best Price Guarantee</h4>
        <p>Competitive pricing with EMI options available.</p>
      </div>
      <div className="wtj-card anim d3">
        <div className="wtj-icon">
          <svg width="20" height="20" fill="var(--accent)"><path d="M10 1L1 19h18L10 1z" /></svg>
        </div>
        <h4>Dedicated Post-Sale Support</h4>
        <p>Onboarding, training, and ongoing assistance.</p>
      </div>
    </div>
  </div>
</section>
); })()}

{(() => { const [x, setX] = useState(0); return (
<section className="pdc">
  <div className="pdc-head anim d0">
    <span className="eyebrow">Seedream 4.5 and Seedance 1.5 Pro by ByteDance Plans</span>
    <h2>Seedream 4.5 and Seedance 1.5 Pro by ByteDance Plans</h2>
  </div>
  <div className="pdc-grid">
    <div className="pdc-card">
      <h3 className="pdc-plan">Seedream 4.5 (AI Image Generation)</h3>
      <div className="pdc-price">
        <span className="pdc-amount">Contact for Pricing</span>
      </div>
      <ul className="pdc-list">
        <li><svg className="pdc-check" width="20" height="20" fill="currentColor"><path d="M7.629 15.32l-4.96-4.96a1 1 0 011.414-1.414l3.541 3.54 7.083-7.083a1 1 0 011.415 1.415l-8.663 8.663a1 1 0 01-1.414 0z" /></svg>High-resolution image generation (up to 4K quality)</li>
        <li><svg className="pdc-check" width="20" height="20" fill="currentColor"><path d="M7.629 15.32l-4.96-4.96a1 1 0 011.414-1.414l3.541 3.54 7.083-7.083a1 1 0 011.415 1.415l-8.663 8.663a1 1 0 01-1.414 0z" /></svg>Text-to-image & multimodal image editing</li>
        <li><svg className="pdc-check" width="20" height="20" fill="currentColor"><path d="M7.629 15.32l-4.96-4.96a1 1 0 011.414-1.414l3.541 3.54 7.083-7.083a1 1 0 011.415 1.415l-8.663 8.663a1 1 0 01-1.414 0z" /></svg>Multi-image composition for complex visuals</li>
        <li><svg className="pdc-check" width="20" height="20" fill="currentColor"><path d="M7.629 15.32l-4.96-4.96a1 1 0 011.414-1.414l3.541 3.54 7.083-7.083a1 1 0 011.415 1.415l-8.663 8.663a1 1 0 01-1.414 0z" /></svg>Enhanced typographic rendering for posters, ads & text-heavy designs</li>
      </ul>
    </div>
    <div className="pdc-card featured">
      <span className="pdc-badge">Discount</span>
      <h3 className="pdc-plan">Seedance 1.5 Pro (AI Video Generation)</h3>
      <div className="pdc-price">
        <span className="pdc-amount">Starting at $1,000/month/</span>
      </div>
      <ul className="pdc-list">
        <li><svg className="pdc-check" width="20" height="20" fill="currentColor"><path d="M7.629 15.32l-4.96-4.96a1 1 0 011.414-1.414l3.541 3.54 7.083-7.083a1 1 0 011.415 1.415l-8.663 8.663a1 1 0 01-1.414 0z" /></svg>Text-to-video generation with cinematic output</li>
        <li><svg className="pdc-check" width="20" height="20" fill="currentColor"><path d="M7.629 15.32l-4.96-4.96a1 1 0 011.414-1.414l3.541 3.54 7.083-7.083a1 1 0 011.415 1.415l-8.663 8.663a1 1 0 01-1.414 0z" /></svg>Native audio + video generation (synchronized)</li>
        <li><svg className="pdc-check" width="20" height="20" fill="currentColor"><path d="M7.629 15.32l-4.96-4.96a1 1 0 011.414-1.414l3.541 3.54 7.083-7.083a1 1 0 011.415 1.415l-8.663 8.663a1 1 0 01-1.414 0z" /></svg>Multilingual lip-sync capabilities</li>
        <li><svg className="pdc-check" width="20" height="20" fill="currentColor"><path d="M7.629 15.32l-4.96-4.96a1 1 0 011.414-1.414l3.541 3.54 7.083-7.083a1 1 0 011.415 1.415l-8.663 8.663a1 1 0 01-1.414 0z" /></svg>Fast inference for quicker video production</li>
      </ul>
    </div>
  </div>
</section>
); })()}

{(() => { const [slide, setSlide] = useState(0); useEffect(() => { const t = setInterval(() => setSlide(p => (p+1) % testimonials.length), 4000); return () => clearInterval(t); }, []); return (
<section className="tcar">
  <div className="tcar-head anim d0">
    <div className="eyebrow">Loved by teams using Seedream 4.5 and Seedance 1.5 Pro by ByteDance</div>
    <h2>Real feedback from real users.</h2>
  </div>
  <div className="tcar-layout">
    <div className="tcar-rail">
      {[
        {"quote":"Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.","author":"Vaishali Saxena","designation":"Creative Director"},
        {"quote":"Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.","author":"Vihaan Pandey","designation":"Video Producer"},
        {"quote":"The multimodal editing capabilities in Seedream make it easy to refine images with precision.","author":"Anurag Malhotra","designation":"Art Director"}
      ].map((testimonial, index) => (
        <div className="tcar-mini" key={index}>
          <div className="tcar-mini-stars">★★★★★</div>
          <p className="tcar-quote">{testimonial.quote}</p>
          <div className="tcar-author">
            <div className="tcar-avatar" style={{ background: `hsl(${index * 60}, 70%, 50%)` }}>{testimonial.author.split(' ').map(name => name[0]).join('')}</div>
            <div>
              <div className="tcar-name">{testimonial.author}</div>
              <div className="tcar-role">{testimonial.designation}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
    <div className="tcar-stage">
      <div className="tcar-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
        {[
          {"quote":"Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.","author":"Vaishali Saxena","designation":"Creative Director"},
          {"quote":"Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.","author":"Vihaan Pandey","designation":"Video Producer"},
          {"quote":"The multimodal editing capabilities in Seedream make it easy to refine images with precision.","author":"Anurag Malhotra","designation":"Art Director"},
          {"quote":"Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.","author":"Ashutosh Singh","designation":"Marketing Manager"},
          {"quote":"From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.","author":"Shrimmi Saxena","designation":"Creative Lead"}
        ].map((testimonial, index) => (
          <div className="tcar-slide anim-scale d1" key={index}>
            <div className="tcar-quote">{testimonial.quote}</div>
            <div className="tcar-stars">★★★★★</div>
            <div className="tcar-author">
              <div className="tcar-avatar" style={{ background: `hsl(${index * 60}, 70%, 50%)` }}>{testimonial.author.split(' ').map(name => name[0]).join('')}</div>
              <div>
                <div className="tcar-name">{testimonial.author}</div>
                <div className="tcar-role">{testimonial.designation}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
    <div className="tcar-dots">
      {Array.from({ length: 5 }, (_, index) => (
        <button key={index} className={`tcar-dot ${index === slide ? 'active' : ''}`} />
      ))}
    </div>
  </div>
</section>
); })()}

{(() => { const [x, setX] = useState(0); return (
<section className="ctavb anim">
  <div className="ctavb-bg">
    <video autoPlay muted loop playsInline>
      <source src="https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4" type="video/mp4" />
    </video>
  </div>
  <div className="ctavb-overlay"></div>
  <div className="ctavb-inner">
    <h2 className="d0">Experience Seedream 4.5 and Seedance 1.5 Pro by ByteDance today</h2>
    <p className="d1">Start generating in minutes. No setup required.</p>
    <a href="#lead-form" className="ctavb-btn d2">Generate with AI</a>
  </div>
</section>
); })}

      {/* FOOTER */}
      <footer style={{
        background: '#0f0f0f', color: '#fff',
        padding: '40px 0',
        borderTop: '1px solid rgba(255,255,255,0.08)'
      }}>
        <div style={{
          maxWidth: '1200px', margin: '0 auto', padding: '0 24px',
          display: 'flex', justifyContent: 'space-between',
          alignItems: 'flex-start', flexWrap: 'wrap', gap: '24px'
        }}>
          <div>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28" alt="Techjockey"
            />
            <p style={{ marginTop: '12px', fontSize: '14px', opacity: 0.65 }}>
              support@techjockey.com
            </p>
            <p style={{ fontSize: '13px', opacity: 0.45, marginTop: '4px' }}>
              © 2024 Techjockey Infotech Pvt. Ltd.
            </p>
          </div>
          <div style={{ display: 'flex', gap: '24px' }}>
            <a href="/privacy-policy" style={{ fontSize: '14px', opacity: 0.65 }}>
              Privacy Policy
            </a>
            <a href="/terms-of-use" style={{ fontSize: '14px', opacity: 0.65 }}>
              Terms
            </a>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            {[
              { href: 'https://www.facebook.com/techjockey/', label: 'Facebook',
                path: 'M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.3V11H7.5v3h2.7v8h3.3z' },
              { href: 'https://www.instagram.com/techjockey/', label: 'Instagram',
                path: 'M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A4.5 4.5 0 1012 16.5 4.5 4.5 0 0012 7.5zM12 9a3 3 0 11-3 3 3 3 0 013-3zm4.5-1.5a1.5 1.5 0 11-1.5 1.5 1.5 1.5 0 011.5-1.5z' },
              { href: 'https://x.com/TechjockeyInfo', label: 'Twitter',
                path: 'M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.2l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z' },
              { href: 'https://www.linkedin.com/company/techjockey-infotech-pvt-ltd', label: 'LinkedIn',
                path: 'M6.94 8.5A1.56 1.56 0 105.38 6.94 1.56 1.56 0 006.94 8.5zM5.5 9.75h2.88V18H5.5zm4.69 0h2.76v1.13h.04a3 3 0 012.69-1.48c2.88 0 3.41 1.89 3.41 4.35V18h-2.88v-3.79c0-.9 0-2.06-1.26-2.06s-1.45.98-1.45 1.99V18h-2.88z' }
            ].map(social => (
              <a key={social.label} href={social.href} aria-label={social.label} style={{
                width: '36px', height: '36px', borderRadius: '50%',
                border: '1px solid rgba(255,255,255,0.12)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                transition: 'background .2s'
              }}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d={social.path} />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;