'use strict';
// ─────────────────────────────────────────────────────────────────────────────
// SECTION LIBRARY
// Every section has:
//   id         — unique key
//   category   — product types that trigger this section (use 'all' for universal)
//   slots      — what AI fills (content only — never layout/CSS)
//   lockedCSS  — exact pixel values, shadows, fonts — NEVER changes
//   prompt     — instruction for GPT to fill slots only
// ─────────────────────────────────────────────────────────────────────────────

const BASE_CSS = `
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
`;

const SECTION_LIBRARY = {

  // ═══════════════════════════════════════════════════════════════
  // HERO SECTIONS (4 variants)
  // ═══════════════════════════════════════════════════════════════

  'hero-video-form': {
    id: 'hero-video-form',
    label: 'Hero — Video BG + Form',
    category: ['AI', 'video', 'generative', 'creative', 'media', 'image', 'animation'],
    slots: ['headline', 'accent_word', 'description', 'cta_text',
            'video_url', 'chips', 'review_count'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="hvf"> JSX element. No imports, no exports, no full component.

USE THESE EXACT CLASSES — DO NOT change any CSS values:
hvf, hvf-video, hvf-overlay, hvf-content, hvf-inner, hvf-h1, hvf-accent,
hvf-desc, hvf-chips, hvf-chip, hvf-pill, hvf-input, hvf-btn, hvf-proof,
hvf-avatars, hvf-av, hvf-stars, hvf-rcount

ABSOLUTE LAYOUT RULE FOR THIS SECTION:
This is a 2-COLUMN hero. LEFT column = headline + description + chips + CTA button. RIGHT column = FORM CARD ONLY.
The right column must contain ONLY the lead form card. No images. No videos. No decorative elements.
Form fields: Name, Email, Phone, Company. One full-width submit button.
DO NOT add images to the right column. DO NOT add a video to the right column.
The form IS the visual for this hero. That is the entire point of this layout.

SLOT VALUES TO FILL:
headline (split around the accent_word): "{{headline}}"
accent_word (wrap this word in <span class="hvf-accent">): "{{accent_word}}"
description: "{{description}}"
cta_text: "{{cta_text}}"
video_url: "{{video_url}}"
chips (array): {{chips}}
review_count: "{{review_count}}"

ANIMATION: add class="anim d0" on h1, "anim d1" on description, "anim d2" on input block.

AVATARS: hardcode 4 initials circles with different bg colors inside .hvf-avatars.
STARS: 5 gold SVG stars inside .hvf-stars.

If video_url is empty, use a dark gradient background instead of video.`
  },

  'hero-cinematic-layered': {
    id: 'hero-cinematic-layered',
    label: 'Cinematic Layered Hero',
    lockedCSS: `
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
    `,
    prompt: `Generate a cinematic layered hero for {{product_name}}.

USE THESE EXACT IMAGE URLS — DO NOT IGNORE THEM:
BG layer:      {{hero_bg}}
FG layer:      {{hero_fg}}
Product panel: {{hero_product}}

EXACT JSX STRUCTURE:
<section style={{position:'relative',minHeight:'92vh',overflow:'hidden',display:'flex',alignItems:'center'}}>

  {/* BG — full cover */}
  {{{hero_bg}}} && <div style={{position:'absolute',inset:0,zIndex:0}}>
    <img src="{{hero_bg}}" style={{width:'100%',height:'100%',objectFit:'cover'}} alt=""/>
  </div>}

  {/* Gradient overlay */}
  <div style={{position:'absolute',inset:0,zIndex:1,
    background:'linear-gradient(to right,rgba(0,0,0,0.72) 45%,rgba(0,0,0,0.15) 100%)'}}/>

  {/* FG — person/agent right side */}
  {{{hero_fg}}} && <div style={{position:'absolute',bottom:0,right:'6%',zIndex:2,height:'85%'}}>
    <img src="{{hero_fg}}" style={{height:'100%',width:'auto',objectFit:'contain'}} alt=""/>
  </div>}

  {/* Content — left */}
  <div style={{position:'relative',zIndex:4,maxWidth:'1180px',margin:'0 auto',padding:'0 24px',width:'100%'}}>
    <div style={{maxWidth:'580px'}}>
      <h1 style={{color:'#fff',fontSize:'clamp(36px,5.5vw,60px)',fontWeight:800,
        lineHeight:1.05,margin:'0 0 18px',wordBreak:'normal',overflowWrap:'normal'}}>
        {{headline}}
      </h1>
      <p style={{color:'rgba(255,255,255,0.82)',fontSize:'18px',lineHeight:1.7,margin:'0 0 28px'}}>
        {{description}}
      </p>
      <a href="{{cta_url}}" target="_blank" rel="noreferrer"
        style={{display:'inline-flex',padding:'14px 28px',borderRadius:'10px',
          background:'var(--accent)',color:'#fff',fontWeight:700,textDecoration:'none'}}>
        {{cta_text}}
      </a>
    </div>
  </div>

  {/* Product panel — bottom right */}
  {{{hero_product}}} && <div style={{position:'absolute',bottom:'40px',right:'60px',
    zIndex:5,width:'400px',borderRadius:'18px',overflow:'hidden',
    boxShadow:'0 30px 80px rgba(0,0,0,0.5)',border:'1px solid rgba(255,255,255,0.12)'}}>
    <img src="{{hero_product}}" style={{width:'100%',display:'block'}} alt="{{product_name}}"/>
  </div>}

</section>

Fill {{headline}} {{description}} {{cta_text}} {{cta_url}} with real product data.
If hero_bg is NONE: use background:linear-gradient(135deg,#0f172a,#1e293b).
Min 2000 chars. No markdown. JSX only.

LAYOUT — 2 LAYERS:
Layer 1 (background): Full-viewport image or dark gradient behind everything
Layer 2 (content): LEFT-aligned headline + description + CTA chips + CTA button
Floating panel: RIGHT side, position:absolute bottom-right, product video or screenshot

COPY:
Headline: "{{headline}}"
Description: "{{description}}"  
CTA button text: "{{cta_text}}"
Feature chips: {{chips}}

BACKGROUND IMAGE — USE THIS EXACTLY:
{{product_image}}
Place as: <div className="hero-layer hero-layer-bg"><img src="{{product_image}}" alt="{{product_name}}"/></div>

FLOATING PANEL VIDEO — USE THIS EXACTLY:
{{video_url}}
Place as: <div className="hero-floating-panel"><video autoPlay muted loop playsInline><source src="{{video_url}}" type="video/mp4"/></video></div>
If no video, use the product_image in the floating panel instead.

If no background image exists: use background:linear-gradient(135deg,#0f172a 0%,#1e293b 50%,#0f172a 100%)

Output ONE complete JSX section element. Use className not class. Min 2500 chars.`
  },

  'hero-dark-split': {
    id: 'hero-dark-split',
    label: 'Hero — Dark Split (Text Left, Product Right)',
    category: ['cybersecurity', 'enterprise', 'compliance', 'network',
                'developer', 'devops', 'API', 'infrastructure', 'cloud'],
    slots: ['headline', 'description', 'cta_text', 'secondary_cta',
            'product_image', 'stat_1_value', 'stat_1_label',
            'stat_2_value', 'stat_2_label', 'stat_3_value', 'stat_3_label']
            ,
    lockedCSS: `
      .hds        { min-height:100vh; background:var(--bodyBg,#06080c);
                    display:flex; align-items:center; padding:80px 0;
                    color:#fff; position:relative; overflow:hidden; }
      .hds::before { content:''; position:absolute; top:-200px; right:-200px;
                     width:600px; height:600px; border-radius:50%;
                     background:radial-gradient(circle,
                       rgba(var(--accent-rgb,255,107,0),0.12),transparent 70%);
                     pointer-events:none; }
      .hds-grid   { display:grid; grid-template-columns:1fr 1fr;
                    gap:60px; align-items:center;
                    max-width:1200px; margin:0 auto; padding:0 24px;
                    width:100%; }
      .hds-copy h1 { font-size:60px; font-weight:700;
                     letter-spacing:-0.04em; line-height:1.05;
                     margin:20px 0 24px; }
      .hds-copy p  { font-size:18px; line-height:1.7;
                     color:rgba(255,255,255,0.7); max-width:480px; }
      .hds-actions { display:flex; gap:14px; flex-wrap:wrap; margin-top:36px; }
      .hds-btn-primary { padding:14px 28px; border-radius:12px;
                         background:var(--accent,#ff6b00); color:#fff;
                         border:none; font-size:15px; font-weight:700;
                         cursor:pointer; transition:transform .2s,box-shadow .2s; }
      .hds-btn-primary:hover { transform:translateY(-2px);
                               box-shadow:0 12px 32px rgba(0,0,0,0.3); }
      .hds-btn-ghost { padding:14px 28px; border-radius:12px;
                       background:transparent; color:#fff;
                       border:1px solid rgba(255,255,255,0.2);
                       font-size:15px; font-weight:600; cursor:pointer;
                       transition:background .2s; }
      .hds-btn-ghost:hover { background:rgba(255,255,255,0.06); }
      .hds-img    { border-radius:24px; overflow:hidden;
                    box-shadow:0 40px 80px rgba(0,0,0,0.5); }
      .hds-img img { width:100%; display:block; }
      .hds-stats  { display:grid; grid-template-columns:repeat(3,1fr);
                    gap:16px; margin-top:48px; }
      .hds-stat   { background:rgba(255,255,255,0.05);
                    border:1px solid rgba(255,255,255,0.09);
                    border-radius:16px; padding:20px; }
      .hds-stat-val { font-size:32px; font-weight:700;
                      color:var(--accent,#ff6b00); letter-spacing:-0.03em; }
                      .banner-title, .hvf-h1, h1 { 
  word-break: normal !important; 
  overflow-wrap: normal !important; 
  hyphens: none !important; 
  white-space: normal !important;
}
      .hds-stat-lbl { font-size:13px; color:rgba(255,255,255,0.6);
                      margin-top:4px; }
    `,
    prompt: `Return ONLY a single <section class="hds"> JSX element. No imports, no exports.

USE EXACT CLASSES: hds, hds-grid, hds-copy, hds-actions, hds-btn-primary,
hds-btn-ghost, hds-img, hds-stats, hds-stat, hds-stat-val, hds-stat-lbl

FILL SLOTS:
headline: "{{headline}}"
description: "{{description}}"
cta_text: "{{cta_text}}"
secondary_cta: "{{secondary_cta}}"
product_image: "{{product_image}}" — use in <img> inside .hds-img (use CSS visual if empty)
stat_1_value/label, stat_2_value/label, stat_3_value/label — fill 3 .hds-stat cards

ANIMATION: eyebrow badge above h1, then anim d0 on h1, d1 on p, d2 on actions, d3 on stats.
Add data-count attribute on .hds-stat-val for number animation.
If product_image empty: build a CSS dark panel with floating metric cards using accent color.`
  },

  'hero-light-editorial': {
    id: 'hero-light-editorial',
    label: 'Hero — Light Editorial (HR/Productivity/Education)',
    category: ['HR', 'productivity', 'project management', 'collaboration',
                'CRM', 'education', 'LMS', 'ecommerce', 'retail'],
    slots: ['headline', 'description', 'cta_text', 'secondary_cta',
            'product_image', 'customer_logos'],
    lockedCSS: `
      .hle        { min-height:100vh; background:#fff; padding:100px 0 0;
                    overflow:hidden; position:relative; }
      .hle-inner  { max-width:1200px; margin:0 auto; padding:0 24px;
                    text-align:center; }
      .hle h1     { font-size:72px; font-weight:700; letter-spacing:-0.04em;
                    line-height:1.05; color:#0f0f0f;
                    max-width:900px; margin:20px auto 28px; }
      .hle p      { font-size:19px; line-height:1.7; color:#4b5563;
                    max-width:560px; margin:0 auto; }
      .hle-actions { display:flex; justify-content:center; gap:14px;
                     margin-top:36px; flex-wrap:wrap; }
      .hle-btn    { padding:15px 32px; border-radius:14px; font-size:15px;
                    font-weight:700; cursor:pointer;
                    background:var(--accent,#4f46e5); color:#fff;
                    border:none; transition:transform .2s,box-shadow .2s; }
      .hle-btn:hover { transform:translateY(-2px);
                       box-shadow:0 12px 30px rgba(0,0,0,0.18); }
      .hle-btn-ghost { padding:15px 32px; border-radius:14px; font-size:15px;
                       font-weight:600; cursor:pointer; background:#fff;
                       color:#111827; border:1px solid #e5e7eb;
                       transition:border-color .2s; }
      .hle-btn-ghost:hover { border-color:#9ca3af; }
      .hle-product { margin:60px auto 0; max-width:1000px;
                     border-radius:24px 24px 0 0; overflow:hidden;
                     box-shadow:0 -8px 60px rgba(15,23,42,0.12);
                     border:1px solid #e5e7eb; }
      .hle-product img { width:100%; display:block; }
      .hle-logos  { padding:32px 0; background:#f8fafc;
                    border-top:1px solid #e5e7eb; }
      .hle-logos-inner { display:flex; justify-content:center;
                          align-items:center; gap:40px; flex-wrap:wrap;
                          max-width:800px; margin:0 auto; }
      .hle-logo   { height:28px; opacity:0.45; filter:grayscale(1);
                    transition:opacity .2s, filter .2s; }
      .hle-logo:hover { opacity:0.8; filter:grayscale(0); }
    `,
    prompt: `Return ONLY a single <section class="hle"> JSX element. No imports, no exports.

EXACT CLASSES: hle, hle-inner, hle-actions, hle-btn, hle-btn-ghost,
hle-product, hle-logos, hle-logos-inner, hle-logo

FILL SLOTS:
headline: "{{headline}}"
description: "{{description}}"
cta_text: "{{cta_text}}"
secondary_cta: "{{secondary_cta}}"
product_image: "{{product_image}}" — inside .hle-product (CSS dashboard mockup if empty)
customer_logos: {{customer_logos}} — array of URLs for .hle-logo imgs (skip if empty)

ANIMATION: anim d0 on eyebrow badge, d1 on h1, d2 on p, d3 on actions.
Product image gets anim-scale d4.`
  },

  'hero-centered-dark': {
    id: 'hero-centered-dark',
    label: 'Hero — Centered Dark (AI/Generative/Futuristic)',
    category: ['gaming', 'entertainment', 'streaming', 'fintech', 'blockchain', 'web3'],
    slots: ['headline', 'description', 'cta_text', 'video_url', 'product_image'],
    lockedCSS: `
      .hcd        { min-height:100vh; background:var(--bodyBg,#050505);
                    display:flex; flex-direction:column;
                    align-items:center; justify-content:center;
                    text-align:center; padding:80px 24px;
                    overflow:hidden; position:relative; color:#fff; }
      .hcd::before { content:''; position:absolute; top:50%; left:50%;
                     transform:translate(-50%,-50%);
                     width:700px; height:700px; border-radius:50%;
                     background:radial-gradient(circle,
                       rgba(var(--accent-rgb,255,107,0),0.15),transparent 65%);
                     pointer-events:none; }
      .hcd h1     { font-size:80px; font-weight:800; letter-spacing:-0.04em;
                    line-height:1.0; position:relative; z-index:2;
                    max-width:900px; }
      .hcd p      { font-size:19px; line-height:1.7;
                    color:rgba(255,255,255,0.65); max-width:540px;
                    margin:24px 0 36px; position:relative; z-index:2; }
      .hcd-btn    { position:relative; z-index:2; padding:16px 36px;
                    border-radius:100px; font-size:16px; font-weight:700;
                    border:none; cursor:pointer; color:#fff;
                    background:linear-gradient(135deg,
                      var(--accent,#ff6b00), var(--primary,#1a1a2e));
                    box-shadow:0 0 40px rgba(var(--accent-rgb,255,107,0),0.35);
                    transition:transform .2s, box-shadow .2s; }
      .hcd-btn:hover { transform:translateY(-2px) scale(1.02);
                       box-shadow:0 0 60px rgba(var(--accent-rgb,255,107,0),0.5); }
      .hcd-visual { position:relative; z-index:2; margin-top:64px;
                    max-width:900px; width:100%;
                    border-radius:20px; overflow:hidden;
                    box-shadow:0 40px 100px rgba(0,0,0,0.6); }
      .hcd-visual video, .hcd-visual img { width:100%; display:block; }
      .hcd-grid-bg { position:absolute; inset:0; z-index:1;
                     background-image:
                       linear-gradient(rgba(255,255,255,0.03) 1px,transparent 1px),
                       linear-gradient(90deg,rgba(255,255,255,0.03) 1px,transparent 1px);
                     background-size:60px 60px; }
    `,
    prompt: `Return ONLY a single <section class="hcd"> JSX element. No imports, no exports.

EXACT CLASSES: hcd, hcd-btn, hcd-visual, hcd-grid-bg

FILL SLOTS:
headline: "{{headline}}"
description: "{{description}}"
cta_text: "{{cta_text}}"
video_url: "{{video_url}}" — autoPlay muted loop playsInline in .hcd-visual (img fallback if empty)
product_image: "{{product_image}}" — fallback if no video

ORDER: hcd-grid-bg first (absolute layer), then eyebrow, h1, p, button, hcd-visual.
ANIMATION: anim d0 on h1, d1 on p, d2 on button, anim-scale d3 on visual.`
  },

  // ═══════════════════════════════════════════════════════════════
  // TRUST / PROOF SECTIONS (2 variants)
  // ═══════════════════════════════════════════════════════════════

  'trust-metrics-strip': {
    id: 'trust-metrics-strip',
    label: 'Trust — Animated Metrics Strip',
    category: ['all'],
    slots: ['stat_1_value', 'stat_1_label', 'stat_1_note',
            'stat_2_value', 'stat_2_label', 'stat_2_note',
            'stat_3_value', 'stat_3_label', 'stat_3_note'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="tms"> JSX element.

EXACT CLASSES: tms, tms-grid, tms-cell, tms-val, tms-label, tms-note

3 cells, each with:
.tms-val (add data-count="NUMBER" for animation — strip non-numeric chars from value for data-count)
.tms-label
.tms-note

FILL: {{stat_1_value}}/{{stat_1_label}}/{{stat_1_note}},
      {{stat_2_value}}/{{stat_2_label}}/{{stat_2_note}},
      {{stat_3_value}}/{{stat_3_label}}/{{stat_3_note}}

Add stagger reveal class on each .tms-cell.`
  },

  'trust-logo-grid': {
    id: 'trust-logo-grid',
    label: 'Trust — Customer Logo Grid',
    category: ['all'],
    slots: ['proof_text', 'logos'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="tlg"> JSX element.

EXACT CLASSES: tlg, tlg-label, tlg-logos, tlg-logo

FILL:
proof_text: "{{proof_text}}" → inside .tlg-label
logos: {{logos}} — array of URLs, each as <img class="tlg-logo" src=... alt="Partner">

If logos array is empty or fewer than 3: skip this section entirely, return null.`
  },

  // ═══════════════════════════════════════════════════════════════
  // FEATURE SECTIONS (5 variants)
  // ═══════════════════════════════════════════════════════════════

  'features-expand-scroll': {
    id: 'features-expand-scroll',
    label: 'Features — Expanding Image + Feature List (Split)',
    category: ['all'],
    slots: ['section_label', 'headline', 'description', 'features',
            'product_image', 'cta_text', 'flip'],
    lockedCSS: `
      .fes         { padding:96px 0; }
      .fes-split   { display:grid; grid-template-columns:1fr 1fr;
                     gap:60px; align-items:center;
                     max-width:1200px; margin:0 auto; padding:0 24px; }
      .fes-split.flip { direction:rtl; }
      .fes-split.flip > * { direction:ltr; }
      .fes-visual  { position:relative; }
      .fes-expand  { width:100%; border-radius:24px; overflow:hidden;
                     transition:border-radius 0.6s ease;
                     box-shadow:0 24px 60px rgba(15,23,42,0.12); }
      .fes-expand:hover { border-radius:8px; }
      .fes-expand img { width:100%; display:block; }
      .fes-browser { border-radius:20px; overflow:hidden;
                     background:#fff; border:1px solid #e5e7eb;
                     box-shadow:0 20px 60px rgba(15,23,42,0.1); }
      .fes-browser-bar { display:flex; gap:7px; align-items:center;
                         padding:12px 14px; background:#f8fafc;
                         border-bottom:1px solid #e5e7eb; }
      .fes-dot     { width:10px; height:10px; border-radius:50%;
                     background:#d1d5db; }
      .fes-browser-body img { width:100%; display:block; }
      .fes-desc-bar { border-left:3px solid var(--accent,#ff6b00);
                      padding-left:18px; margin:18px 0 24px; }
      .fes-desc-bar p { font-size:17px; line-height:1.8; color:#4b5563; }
      .fes-list    { display:grid; gap:14px; }
      .fes-item    { display:grid; grid-template-columns:auto 1fr;
                     gap:14px; padding:16px; border-radius:16px;
                     background:#fff; border:1px solid #e5e7eb;
                     transition:transform 0.25s, box-shadow 0.25s; }
      .fes-item:hover { transform:translateY(-4px);
                        box-shadow:0 12px 32px rgba(15,23,42,0.09); }
      .fes-icon    { width:36px; height:36px; border-radius:10px;
                     background:rgba(var(--accent-rgb,255,107,0),0.1);
                     display:flex; align-items:center;
                     justify-content:center; flex-shrink:0; }
      .fes-item h4 { font-size:16px; font-weight:700; margin:0 0 5px;
                     letter-spacing:-0.02em; }
      .fes-item p  { font-size:14px; color:#6b7280; line-height:1.65; margin:0; }
      .fes-cta     { display:inline-flex; align-items:center; gap:8px;
                     margin-top:24px; padding:13px 24px; border-radius:12px;
                     background:var(--accent,#ff6b00); color:#fff;
                     border:none; font-size:15px; font-weight:700;
                     cursor:pointer; transition:transform .2s,box-shadow .2s; }
      .fes-cta:hover { transform:translateY(-2px);
                       box-shadow:0 10px 28px rgba(0,0,0,0.18); }
    `,
    prompt: `Return ONLY a single <section class="fes"> JSX element.

EXACT CLASSES: fes, fes-split (add "flip" class if flip slot is true),
fes-visual, fes-expand, fes-browser, fes-browser-bar, fes-dot (×3), fes-browser-body,
fes-desc-bar, fes-list, fes-item, fes-icon, fes-cta

FILL SLOTS:
section_label: "{{section_label}}" → .eyebrow above h2
headline: "{{headline}}" → h2 with letter-spacing:-0.04em, font-size:40px
description: "{{description}}" → inside .fes-desc-bar p
features: {{features}} — array of {title,description} → each as .fes-item with inline SVG icon
product_image: "{{product_image}}" → img inside .fes-browser-body (CSS visual if empty)
cta_text: "{{cta_text}}" → .fes-cta button
flip: {{flip}} — if true, add "flip" class to .fes-split

ANIMATIONS: anim d0 on eyebrow, d1 on h2, d2 on desc, stagger-parent on .fes-list.
Product visual gets anim-scale class.`
  },

  'features-tabs-dark': {
    id: 'features-tabs-dark',
    label: 'Features — Interactive Tabs (Dark, Left Nav + Right Preview)',
    category: ['all'],
    slots: ['section_label', 'headline', 'description', 'tabs', 'bg_dark'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="ftd"> JSX element WITH useState for active tab.

Include: const [active, setActive] = useState(0); at the top of the JSX expression.

EXACT CLASSES: ftd, ftd-head, ftd-layout, ftd-tabs, ftd-tab (active class when index===active),
ftd-preview, ftd-panel (active class when index===active), ftd-features, ftd-feat

FILL SLOTS:
section_label → .eyebrow in ftd-head
headline: "{{headline}}" → h2
description: "{{description}}" → p
tabs: {{tabs}} — array of {title, summary, description, features:[], image_url}
bg_dark: {{bg_dark}} — if true use --bg:var(--bodyBg), else use --bg:#111827

Each tab: .ftd-tab with onClick={() => setActive(index)}, h4=title, p=summary
Each panel: .ftd-panel with h3=title, p=description, image (CSS panel if no image_url),
feature list in .ftd-features

ANIMATIONS: anim d0 on head, anim-scale d1 on preview panel.`
  },

  'features-alternating': {
    id: 'features-alternating',
    label: 'Features — Alternating Split Panels (Multi-product)',
    category: ['all'],
    slots: ['section_label', 'headline', 'sections'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="falt"> JSX element.

EXACT CLASSES: falt, falt-head, falt-block (add "flip" if index is odd),
falt-num, falt-copy, falt-chips, falt-chip, falt-visual

FILL SLOTS:
section_label → .eyebrow
headline: "{{headline}}" → h2
sections: {{sections}} — array of {num, title, description, features:[], image_url, video_url}

Each section → .falt-block:
  .falt-num = "0" + (index+1)
  h3 = title
  p = description
  .falt-chips = features array as chips
  .falt-visual → img (or video if video_url), or .falt-visual-dark CSS panel

ANIMATION: anim d0 on head. Each .falt-block elements stagger on scroll with reveal class.`
  },

  'features-icon-grid': {
    id: 'features-icon-grid',
    label: 'Features — Icon Card Grid (3×2 or 2×3)',
    category: ['all'],
    slots: ['section_label', 'headline', 'description', 'features', 'dark_bg'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="fig"> JSX element.
Add class "dark" to .fig if dark_bg is true.

EXACT CLASSES: fig, fig-head, fig-grid, fig-card, fig-icon, and inline h4/p

FILL SLOTS:
section_label → .eyebrow
headline: "{{headline}}" → h2
description: "{{description}}" → p
features: {{features}} — array of {title, description} → each as .fig-card
  Each .fig-icon should contain a unique, relevant SVG icon (16×16, colored var(--accent))
dark_bg: {{dark_bg}} — add "dark" class if true

ANIMATION: stagger-parent on .fig-grid, children get opacity/translateY stagger.`
  },

  // ═══════════════════════════════════════════════════════════════
  // GALLERY / VIDEO SECTIONS (2 variants)
  // ═══════════════════════════════════════════════════════════════

  'gallery-video-wall': {
    id: 'gallery-video-wall',
    label: 'Gallery — 2×2 Auto-play Video Wall',
    category: ['AI', 'video', 'creative', 'media', 'generative', 'animation'],
    slots: ['section_label', 'headline', 'description', 'videos'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="gvw"> JSX element.

EXACT CLASSES: gvw, gvw-head, gvw-grid, gvw-card, gvw-video, gvw-caption

FILL SLOTS:
section_label → .eyebrow
headline: "{{headline}}" → h2
description: "{{description}}" → p
videos: {{videos}} — array of {url, caption}
  Each: .gvw-card > .gvw-video (video autoPlay muted loop playsInline) + .gvw-caption
  Max 4 videos. If fewer than 4, repeat or omit.

ANIMATION: anim-scale with stagger on each .gvw-card.`
  },

  'product-demo-video': {
    id: 'product-demo-video',
    label: 'Product — Full-width Demo Video Section',
    category: ['all'],
    slots: ['section_label', 'headline', 'description', 'video_url', 'cta_text'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="pdv"> JSX element.

EXACT CLASSES: pdv, pdv-head, pdv-frame, pdv-browser, pdv-bar, pdv-dot (×3), pdv-video, pdv-cta, pdv-btn

FILL SLOTS:
section_label → .eyebrow
headline: "{{headline}}" → h2
description: "{{description}}" → p
video_url: "{{video_url}}" → <video class="pdv-video" autoPlay muted loop playsInline>
  If empty: render a dark CSS panel with animated gradient instead
cta_text: "{{cta_text}}" → .pdv-btn

ANIMATION: anim d0 on head, anim-scale d2 on browser.`
  },

  // ═══════════════════════════════════════════════════════════════
  // WHY TECHJOCKEY SECTION
  // ═══════════════════════════════════════════════════════════════

  'why-techjockey': {
    id: 'why-techjockey',
    label: 'Why Techjockey — 4 Benefit Cards',
    category: ['all'],
    slots: ['points'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="wtj"> JSX element.

EXACT CLASSES: wtj, wtj-inner, wtj-top, wtj-logo, wtj-divider, wtj-tagline,
wtj-grid, wtj-card, wtj-icon

FILL:
.wtj-logo: <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" class="wtj-logo">
.wtj-tagline: "India's #1 B2B Software Marketplace"
points: {{points}} — array of {title, description} → each .wtj-card with SVG icon, h4, p

Hardcode 4 points if array has fewer than 4:
1. "Free Expert Consultation" — get matched with right software
2. "Verified Reviews" — 1000+ genuine customer reviews
3. "Best Price Guarantee" — competitive pricing assured
4. "Dedicated Support" — post-sale onboarding assistance

ANIMATION: stagger on .wtj-grid children.`
  },

  // ═══════════════════════════════════════════════════════════════
  // PRICING SECTIONS (2 variants)
  // ═══════════════════════════════════════════════════════════════

  'pricing-dark-cards': {
    id: 'pricing-dark-cards',
    label: 'Pricing — Dark Highlighted Cards',
    category: ['all'],
    slots: ['section_label', 'headline', 'plans'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="pdc"> JSX element.

EXACT CLASSES: pdc, pdc-head, pdc-grid, pdc-card (add "featured" to highlighted plan),
pdc-badge, pdc-plan, pdc-price, pdc-amount, pdc-old, pdc-period, pdc-desc,
pdc-list, pdc-check, pdc-btn

FILL:
section_label → .eyebrow
headline: "{{headline}}" → h2
plans: {{plans}} — array of {name, price, originalPrice, discount, period, description, includes, highlighted}
  - highlighted plan gets "featured" class + .pdc-badge with discount text
  - price → .pdc-amount (if "Contact for pricing" or empty: show "Contact for Pricing" as text)
  - originalPrice → .pdc-old (skip if empty)
  - period → .pdc-period
  - includes → .pdc-list li items with check SVG icon

ANIMATION: anim d0 on head, stagger on pdc-grid children.`
  },

  'pricing-light-cards': {
    id: 'pricing-light-cards',
    label: 'Pricing — Light Cards with Gradient Highlight',
    category: ['HR', 'productivity', 'education', 'ecommerce', 'healthcare'],
    slots: ['section_label', 'headline', 'plans', 'emi_text'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="plc"> JSX element.

EXACT CLASSES: plc, plc-head, plc-grid, plc-card (add "featured" to highlighted plan),
plc-badge, plc-plan, plc-amount, plc-old, plc-period, plc-desc, plc-list,
plc-btn primary/outline, plc-emi

FILL:
section_label → .eyebrow
headline: "{{headline}}" → h2
plans: {{plans}} — same structure as pricing-dark-cards
  - featured plan gets .plc-btn.primary, others get .plc-btn.outline
emi_text: "{{emi_text}}" → .plc-emi (skip if empty)

ANIMATION: anim d0 head, stagger on grid.`
  },

  // ═══════════════════════════════════════════════════════════════
  // TESTIMONIAL SECTIONS (2 variants)
  // ═══════════════════════════════════════════════════════════════

  'testimonials-carousel': {
    id: 'testimonials-carousel',
    label: 'Testimonials — Carousel (Rail + Stage)',
    category: ['all'],
    slots: ['section_label', 'headline', 'description', 'testimonials'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="tcar"> JSX element WITH useState.

Add: const [slide, setSlide] = useState(0); at top.
Auto-rotate: useEffect(() => { const t = setInterval(() => setSlide(p => (p+1) % testimonials.length), 4000); return () => clearInterval(t); }, []);

EXACT CLASSES: tcar, tcar-head, tcar-layout, tcar-rail, tcar-mini, tcar-mini-stars,
tcar-stage, tcar-track (translateX based on slide), tcar-slide, tcar-quote,
tcar-stars, tcar-text, tcar-author, tcar-avatar, tcar-name, tcar-role,
tcar-dots, tcar-dot (active class when index===slide)

FILL:
section_label → .eyebrow
headline: "{{headline}}"
description: "{{description}}"
testimonials: {{testimonials}} — array of {quote, author, role, company}
  Rail: first 3 as .tcar-mini cards (truncated to 2 lines)
  Stage: all as .tcar-slide
  Avatar: initials from author name, different bg color per item
  Stars: 5 ★ in each

ANIMATION: anim d0 head, anim-scale d1 on stage.`
  },

  'testimonials-grid': {
    id: 'testimonials-grid',
    label: 'Testimonials — 3-Column Card Grid',
    category: ['all'],
    slots: ['section_label', 'headline', 'testimonials'],
    lockedCSS: `
      .tgrd        { padding:96px 0; }
      .tgrd-head   { text-align:center; max-width:680px;
                     margin:0 auto 60px; }
      .tgrd-head h2 { font-size:44px; font-weight:700;
                      letter-spacing:-0.04em; margin:14px 0; }
      .tgrd-grid   { display:grid; grid-template-columns:repeat(3,1fr);
                     gap:20px; max-width:1200px; margin:0 auto;
                     padding:0 24px; align-items:start; }
      .tgrd-card   { padding:28px; border-radius:22px; background:#fff;
                     border:1px solid #e5e7eb;
                     box-shadow:0 8px 30px rgba(15,23,42,0.06); }
      .tgrd-stars  { color:#f59e0b; font-size:14px;
                     letter-spacing:2px; margin-bottom:14px; }
      .tgrd-quote  { font-size:24px; color:var(--accent,#ff6b00);
                     font-family:Georgia,serif; margin-bottom:8px; }
      .tgrd-text   { font-size:15px; line-height:1.75; color:#374151;
                     margin:0 0 20px; }
      .tgrd-author { display:flex; align-items:center; gap:12px;
                     padding-top:18px;
                     border-top:1px solid #f3f4f6; }
      .tgrd-avatar { width:40px; height:40px; border-radius:50%;
                     display:flex; align-items:center; justify-content:center;
                     font-size:13px; font-weight:700; color:#fff;
                     background:var(--accent,#ff6b00); flex-shrink:0; }
      .tgrd-name   { font-size:14px; font-weight:700; }
      .tgrd-role   { font-size:13px; color:#9ca3af; margin-top:2px; }
    `,
    prompt: `Return ONLY a single <section class="tgrd"> JSX element.

EXACT CLASSES: tgrd, tgrd-head, tgrd-grid, tgrd-card, tgrd-stars,
tgrd-quote, tgrd-text, tgrd-author, tgrd-avatar, tgrd-name, tgrd-role

FILL:
section_label → .eyebrow
headline: "{{headline}}"
testimonials: {{testimonials}} — each as .tgrd-card, avatar with initials
Max 6 cards. If fewer testimonials, duplicate or skip extras.

ANIMATION: stagger on .tgrd-grid children.`
  },

  // ═══════════════════════════════════════════════════════════════
  // LEAD FORM SECTIONS
  // ═══════════════════════════════════════════════════════════════

  'form-split-dark': {
    id: 'form-split-dark',
    label: 'Lead Form — Split Dark (Left Benefits, Right Form)',
    category: ['all'],
    slots: ['headline', 'description', 'benefits', 'cta_text', 'product_name'],
    lockedCSS: `
      .fsd         { padding:96px 0; background:var(--bodyBg,#06080c);
                     color:#fff; }
      .fsd-grid    { display:grid; grid-template-columns:1fr 1fr;
                     gap:60px; max-width:1200px; margin:0 auto;
                     padding:0 24px; align-items:center; }
      .fsd-copy h2 { font-size:44px; font-weight:700;
                     letter-spacing:-0.04em; line-height:1.08;
                     margin:20px 0 18px; }
      .fsd-copy p  { font-size:17px; color:rgba(255,255,255,0.7);
                     line-height:1.75; margin-bottom:32px; }
      .fsd-benefits { display:grid; gap:16px; }
      .fsd-benefit  { display:flex; gap:14px; align-items:start; }
      .fsd-check   { width:22px; height:22px; border-radius:6px;
                     background:rgba(var(--accent-rgb,255,107,0),0.15);
                     display:flex; align-items:center; justify-content:center;
                     flex-shrink:0; margin-top:2px; }
      .fsd-benefit h4 { font-size:15px; font-weight:700; margin:0 0 4px; }
      .fsd-benefit p  { font-size:14px; color:rgba(255,255,255,0.6);
                        margin:0; line-height:1.6; }
      .fsd-card    { background:rgba(255,255,255,0.06);
                     backdrop-filter:blur(20px);
                     border:1px solid rgba(255,255,255,0.12);
                     border-radius:24px; padding:36px;
                     box-shadow:0 24px 64px rgba(0,0,0,0.3); }
      .fsd-card h3 { font-size:26px; font-weight:700;
                     letter-spacing:-0.03em; margin:0 0 8px; }
      .fsd-card > p { font-size:14px; color:rgba(255,255,255,0.65);
                      margin:0 0 24px; line-height:1.6; }
      .fsd-fields  { display:grid; grid-template-columns:1fr 1fr;
                     gap:14px; margin-bottom:14px; }
      .fsd-field   { display:flex; flex-direction:column; gap:7px; }
      .fsd-field.full { grid-column:1/-1; }
      .fsd-field label { font-size:13px; color:rgba(255,255,255,0.8);
                         font-weight:600; }
      .fsd-field input { padding:13px 16px; border-radius:12px;
                         border:1px solid rgba(255,255,255,0.14);
                         background:rgba(255,255,255,0.07); color:#fff;
                         font-size:15px; outline:none; width:100%;
                         transition:border-color 0.2s; }
      .fsd-field input:focus { border-color:var(--accent,#ff6b00); }
      .fsd-field input::placeholder { color:rgba(255,255,255,0.35); }
      .fsd-submit  { width:100%; padding:15px; border-radius:14px;
                     font-size:16px; font-weight:700; cursor:pointer;
                     border:none; background:var(--accent,#ff6b00); color:#fff;
                     margin-top:4px;
                     transition:transform .2s, box-shadow .2s; }
      .fsd-submit:hover { transform:translateY(-2px);
                          box-shadow:0 12px 30px rgba(var(--accent-rgb,255,107,0),0.35); }
    `,
    prompt: `Return ONLY a single <section class="fsd" id="lead-form"> JSX element WITH useState.

Add: const [form, setForm] = useState({name:'',email:'',phone:'',company:''});
onChange: e => setForm({...form, [e.target.name]: e.target.value})
onSubmit: e => e.preventDefault()

EXACT CLASSES: fsd, fsd-grid, fsd-copy, fsd-benefits, fsd-benefit, fsd-check,
fsd-card, fsd-fields, fsd-field (add "full" for full-width fields), fsd-submit

FILL:
headline: "{{headline}}" → h2
description: "{{description}}" → p in fsd-copy
benefits: {{benefits}} — array of {title, description} → .fsd-benefit items with check icon
cta_text: "{{cta_text}}" → .fsd-submit text
product_name: "{{product_name}}" → in fsd-card h3 ("Get Free Demo of {{product_name}}")

4 fields: Name, Email, Phone (full-width), Company
ANIMATION: anim d0 on copy, anim-scale d1 on card.`
  },

  // ═══════════════════════════════════════════════════════════════
  // CTA SECTIONS (2 variants)
  // ═══════════════════════════════════════════════════════════════

  'cta-dark-banner': {
    id: 'cta-dark-banner',
    label: 'CTA — Dark Full-Width Banner',
    category: ['all'],
    slots: ['headline', 'description', 'cta_text', 'secondary_cta'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="ctadb"> JSX element.

EXACT CLASSES: ctadb, ctadb-inner, ctadb-btns, ctadb-btn, ctadb-ghost

FILL:
headline: "{{headline}}"
description: "{{description}}"
cta_text: "{{cta_text}}" → .ctadb-btn (href="#lead-form")
secondary_cta: "{{secondary_cta}}" → .ctadb-ghost (skip if empty)

ANIMATION: anim d0 on h2, d1 on p, d2 on buttons.`
  },

  'cta-video-banner': {
    id: 'cta-video-banner',
    label: 'CTA — Video Background Banner',
    category: ['AI', 'video', 'creative', 'media'],
    slots: ['headline', 'description', 'cta_text', 'video_url'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="ctavb"> JSX element.

EXACT CLASSES: ctavb, ctavb-bg, ctavb-overlay, ctavb-inner, ctavb-btn

FILL:
video_url: "{{video_url}}" → <video autoPlay muted loop playsInline> inside .ctavb-bg
  If empty: use dark gradient background, skip video element
headline: "{{headline}}"
description: "{{description}}"
cta_text: "{{cta_text}}" → .ctavb-btn href="#lead-form"

ANIMATION: anim d0 on h2, d1 on p, d2 on btn.`
  },

  // ═══════════════════════════════════════════════════════════════
  // NEWS / PRESS SECTION
  // ═══════════════════════════════════════════════════════════════

  'media-news-strip': {
    id: 'media-news-strip',
    label: 'Media — Press / News Coverage Strip',
    category: ['all'],
    slots: ['section_label', 'news_items'],
    lockedCSS: `
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
    `,
    prompt: `Return ONLY a single <section class="mns"> JSX element.

EXACT CLASSES: mns, mns-head, mns-label, mns-grid, mns-card, mns-pub, mns-text

FILL:
section_label: "{{section_label}}" → .mns-label
news_items: {{news_items}} — array of {publication, headline} → each as .mns-card
  .mns-pub = publication name
  .mns-text = headline (in quotes)

Max 3 cards. If fewer, skip extras.
ANIMATION: stagger on .mns-grid children.`
  },
  

};

// ─────────────────────────────────────────────────────────────────────────────
// SECTION PICKER — decides which sections to use for this product
// ─────────────────────────────────────────────────────────────────────────────
function pickSections(contentMap, requestIntent, mediaPlan) {
  const cat        = (contentMap.productCategory || '').toLowerCase();
  const hasVideos  = (mediaPlan?.demos?.sectionDemos?.length || 0) > 0
                  || (mediaPlan?.demos?.heroDemo)
                  || (mediaPlan?.hero?.backgroundVideo);
  const hasLogos   = (mediaPlan?.trust?.logos?.length || 0) >= 3;
  const hasNews    = (contentMap.news || []).length > 0;
  const numSections = (contentMap.productSections || []).length;
  const numTestimonials = (contentMap.testimonials || []).length;

  const isAI     = /\b(ai|ml|generative|llm|image gen|video gen|creative|media|animation)\b/.test(cat);
  const isDark   = /\b(cyber|security|firewall|compliance|devops|api|cloud|infra|network)\b/.test(cat);
  const isLight  = /\b(hr|crm|educ|lms|ecommerce|retail|health|medical|wellness|finance)\b/.test(cat);
  const isGaming = /\b(gaming|entertainment|stream|esport|blockchain)\b/.test(cat);

  const picked = [];

  // ── HERO ──────────────────────────────────────────────────────
const wantForm  = requestIntent?.includeForm === true;
  const hasRealHeroImage   = !!(blueprint?.sectionImageMap?.hero?.url);
  const hasLayeredAssets   = hasRealHeroImage && !!(
    blueprint?.sectionImageMap?.heroFg?.url ||
    blueprint?.sectionImageMap?.heroProduct?.url ||
    mediaPlan?.demos?.heroDemo
  );

  if (wantForm && isAI && hasVideos) {
    picked.push('hero-video-form');
  } else if (wantForm && !isDark && !isGaming && !isLight) {
    picked.push('hero-video-form');
    } else if (hasLayeredAssets) {
    picked.push('hero-cinematic-layered');  
  } else if (isDark) {
    picked.push('hero-dark-split');
  } else if (isGaming) {
    picked.push('hero-centered-dark');
  } else if (isLight) {
    picked.push('hero-light-editorial');
  } else {
    picked.push('hero-dark-split');
  }

  // ── TRUST / PROOF ─────────────────────────────────────────────
  if (hasLogos) {
    picked.push('trust-logo-grid');
  } else {
    picked.push('trust-metrics-strip');
  }

  // ── FEATURES ──────────────────────────────────────────────────
  // ── FEATURES ──────────────────────────────────────────────────
  // Count total features across all sections to detect density
  const totalFeatures = (contentMap.productSections || [])
    .reduce((sum, s) => sum + (s.features || []).length, 0);
  const avgFeaturesPerSection = numSections > 0 ? totalFeatures / numSections : 0;
  const isDenseContent = avgFeaturesPerSection > 5 || totalFeatures > 16;

  if (numSections === 0) {
    picked.push('features-icon-grid');
  } else if (isDenseContent && numSections >= 2) {
    // Too many features per section — use marquee to avoid wall of text
    picked.push('features-alternating');   // first product — visual split
    if (numSections >= 3) {
      picked.push('features-icon-grid');   // remaining — compact icon grid, no long text
    }
  } else if (numSections === 1) {
    picked.push('features-expand-scroll');
  } else if (numSections === 2) {
    picked.push('features-alternating');
  } else if (numSections >= 3) {
    picked.push('features-tabs-dark');
  }

    if (isDenseContent && numSections >= 2) {
    picked.push('media-news-strip'); // repurposed as a feature marquee divider
  }

  // ── SECOND FEATURE BLOCK ──────────────────────────────────────
  if (numSections >= 2) {
    picked.push('features-icon-grid');
  }

  // ── VIDEO GALLERY ─────────────────────────────────────────────
    const userWantsGallery = (requestIntent?.additionalInstructions || '')
    .toLowerCase().includes('gallery');
  
  if (hasVideos && (userWantsGallery || isAI)) {
    picked.push('gallery-video-wall');
  } else if (hasVideos) {
    picked.push('product-demo-video');
  }

  // ── WHY TECHJOCKEY ────────────────────────────────────────────
  picked.push('why-techjockey');

  // ── PRICING ───────────────────────────────────────────────────
  if (requestIntent.includePricing !== false &&
      (contentMap.pricing?.plans || []).length > 0) {
    if (isDark || isAI) {
      picked.push('pricing-dark-cards');
    } else {
      picked.push('pricing-light-cards');
    }
  }

  // ── TESTIMONIALS ──────────────────────────────────────────────
  if (requestIntent.includeTestimonials !== false &&
      numTestimonials > 0) {
    if (numTestimonials >= 4) {
      picked.push('testimonials-carousel');
    } else {
      picked.push('testimonials-grid');
    }
  }

  // ── LEAD FORM (standalone, if not in hero) ────────────────────
  if (requestIntent.includeForm &&
      picked[0] !== 'hero-video-form') {
    picked.push('form-split-dark');
  }

  // ── NEWS ──────────────────────────────────────────────────────
  if (hasNews) {
    picked.push('media-news-strip');
  }

  // ── CTA BANNER ────────────────────────────────────────────────
  if (hasVideos && isAI) {
    picked.push('cta-video-banner');
  } else {
    picked.push('cta-dark-banner');
  }

  return picked
    .filter((id, index, arr) => arr.indexOf(id) === index) // deduplicate
    .map(id => SECTION_LIBRARY[id])
    .filter(Boolean);
}

module.exports = { SECTION_LIBRARY, pickSections };