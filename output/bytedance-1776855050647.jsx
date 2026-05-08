import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const heroImage = '/output/generated-assets/ds_1776854726000_b97a5016/04-23b26fb56f.jpeg';
  const productImages = [
    '/output/generated-assets/ds_1776854726000_b97a5016/01-3965757185.jpeg',
    '/output/generated-assets/ds_1776854726000_b97a5016/02-7f64cfae87.jpeg',
    '/output/generated-assets/ds_1776854726000_b97a5016/08-84289b855f.png',
    '/output/generated-assets/ds_1776854726000_b97a5016/03-f578e07b46.jpeg',
    '/output/generated-assets/ds_1776854726000_b97a5016/01-3965757185.jpeg',
    '/output/generated-assets/ds_1776854726000_b97a5016/02-7f64cfae87.jpeg',
    '/output/generated-assets/ds_1776854726000_b97a5016/08-84289b855f.png',
    '/output/generated-assets/ds_1776854726000_b97a5016/03-f578e07b46.jpeg'
  ];
  const featureImages = [
    '/output/generated-assets/ds_1776854726000_b97a5016/07-65027719ed.png',
    '/output/generated-assets/ds_1776854726000_b97a5016/09-37e01d49c6.png',
    '/output/generated-assets/ds_1776854726000_b97a5016/06-fa9caa1249.png',
    '/output/generated-assets/ds_1776854726000_b97a5016/08-84289b855f.png',
    '/output/generated-assets/ds_1776854726000_b97a5016/03-f578e07b46.jpeg'
  ];

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      author: 'Vaishali Saxena',
      designation: 'Creative Director'
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      author: 'Vihaan Pandey',
      designation: 'Brand Strategist'
    },
    {
      quote:
        'The text rendering and structural fidelity in Seedream make it ideal for campaign posters, ad creatives, and concept boards.',
      author: 'Niharika Bhasin',
      designation: 'Art Director'
    },
    {
      quote:
        'Seedance helps our team move from script to visual prototype much faster, especially when we need motion, audio, and pacing together.',
      author: 'Arjun Mehta',
      designation: 'Video Producer'
    }
  ];

  const seedreamFeatures = [
    {
      title: 'Advanced Capabilities of Seedream 4.5 by ByteDance',
      description:
        'From accurate text rendering to consistent image editing and multi-image composition, Seedream 4.5 powers high-quality, professional visual creation with superior precision and control.'
    },
    {
      title: 'Advanced Text–Image Alignment',
      description:
        'Accurately translates prompts into visuals with improved semantic understanding.'
    },
    {
      title: 'High-Resolution Output',
      description:
        'Generate native images up to 1K–4K resolution with strong visual fidelity.'
    },
    {
      title: 'Superior Typographic Rendering',
      description:
        'Optimized for posters, ads, and text-heavy visual designs.'
    },
    {
      title: 'Multi-Image Composition with Identity Preservation',
      description:
        'Combines multiple inputs while accurately maintaining subject consistency.'
    },
    {
      title: 'Strong Structural Fidelity',
      description:
        'Maintains composition, layout, and scene structure with high precision.'
    }
  ];

  const seedanceFeatures = [
    {
      title: 'Key Capabilities of Seedance 1.5 Pro',
      description:
        'Seedance enables professional-grade AI video production with narrative coherence and realistic motion.'
    },
    {
      title: 'Text-to-Video Generation',
      description: 'Create videos directly from text prompts.'
    },
    {
      title: 'Audio-Visual Synchronization',
      description:
        'Generate video and audio simultaneously with strong multimodal alignment.'
    },
    {
      title: 'Multilingual Lip-Sync',
      description:
        'Supports multilingual and dialect-level lip synchronization.'
    },
    {
      title: 'Cinematic Camera Control',
      description:
        'Generate videos with dynamic camera movement and cinematic storytelling.'
    },
    {
      title: '10× Faster Inference',
      description:
        'Optimized inference pipeline significantly improves generation speed.'
    }
  ];

  const [activeSeedream, setActiveSeedream] = useState(0);
  const [activeSeedance, setActiveSeedance] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.15 }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const scrollToPricing = () => {
    const el = document.getElementById('pricing');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const scrollToProducts = () => {
    const el = document.getElementById('products');
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const css = `
    :root{
      --accent:#ff6b00;
      --bg:#1a1a1a;
      --bg-2:#111111;
      --bg-3:#101010;
      --panel:#171717;
      --panel-2:#1f1f1f;
      --panel-3:#242424;
      --text:#f5f5f5;
      --muted:#b8b8b8;
      --line:rgba(255,255,255,0.08);
      --green:#21c45d;
      --shadow:8px 8px 0 rgba(255,107,0,0.18);
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      background:var(--bg);
      color:var(--text);
      font-family:'Inter',sans-serif;
    }
    a{text-decoration:none;color:inherit}
    img{max-width:100%;display:block}
    .landing-root{
      background:
        radial-gradient(circle at 10% 10%, rgba(255,107,0,0.08), transparent 25%),
        radial-gradient(circle at 90% 20%, rgba(255,107,0,0.06), transparent 22%),
        linear-gradient(180deg,#1a1a1a 0%, #141414 100%);
      overflow:hidden;
    }
    .container{
      width:min(1200px, calc(100% - 32px));
      margin:0 auto;
    }
    .tj_nav{
      position:sticky;
      top:0;
      z-index:50;
      backdrop-filter:blur(12px);
      background:rgba(17,17,17,0.88);
      border-bottom:1px solid var(--line);
    }
    .tj_nav_inner{
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:18px;
      min-height:76px;
    }
    .nav_left,.nav_right{
      display:flex;
      align-items:center;
      gap:16px;
    }
    .product_logo{
      font-family:'IBM Plex Mono', monospace;
      font-weight:700;
      font-size:18px;
      letter-spacing:.02em;
      display:flex;
      align-items:center;
      gap:12px;
    }
    .product_logo_mark{
      width:40px;height:40px;border:1px solid rgba(255,107,0,.45);
      background:
        linear-gradient(135deg, rgba(255,107,0,.18), rgba(255,107,0,.05)),
        repeating-linear-gradient(90deg, transparent 0 10px, rgba(255,255,255,.03) 10px 11px);
      box-shadow:var(--shadow);
      position:relative;
      overflow:hidden;
    }
    .product_logo_mark:before,.product_logo_mark:after{
      content:"";
      position:absolute;
      background:var(--accent);
    }
    .product_logo_mark:before{width:24px;height:2px;top:11px;left:8px}
    .product_logo_mark:after{width:2px;height:24px;top:8px;left:11px}
    .nav_links{
      display:flex;
      align-items:center;
      gap:22px;
      color:#d5d5d5;
      font-size:14px;
    }
    .nav_links a:hover{color:#fff}
    .techjockey_logo{
      height:28px;
      filter:brightness(0) invert(1);
      opacity:.92;
    }
    .btn{
      border:none;
      outline:none;
      cursor:pointer;
      border-radius:12px;
      padding:14px 22px;
      font-weight:700;
      font-size:15px;
      transition:all .25s ease;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:10px;
    }
    .btn:hover{
      transform:translateY(-2px);
      box-shadow:0 12px 30px rgba(0,0,0,.35);
    }
    .btn_primary{
      background:var(--accent);
      color:#fff;
    }
    .btn_secondary{
      background:transparent;
      color:#fff;
      border:1px solid rgba(255,255,255,0.16);
    }
    .btn_full{width:100%}
    .menu_toggle{
      display:none;
      background:transparent;
      border:none;
      color:#fff;
      font-size:24px;
    }

    .hero_section{
      position:relative;
      padding:64px 0 48px;
      background:
        linear-gradient(135deg, #141414 0%, #1d1d1d 45%, #131313 100%);
    }
    .hero_section:before{
      content:"";
      position:absolute;inset:0;
      background:
        linear-gradient(rgba(255,255,255,0.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,0.05) 1px, transparent 1px);
      background-size:54px 54px;
      mask-image:linear-gradient(180deg, rgba(0,0,0,1), rgba(0,0,0,.25));
      opacity:.25;
      pointer-events:none;
    }
    .hero_section:after{
      content:"";
      position:absolute;
      right:-120px; top:60px;
      width:340px; height:340px;
      border-radius:50%;
      background:radial-gradient(circle, rgba(255,107,0,.28), transparent 65%);
      filter:blur(24px);
      pointer-events:none;
    }
    .hero_grid{
      position:relative;
      z-index:1;
      display:grid;
      grid-template-columns:1.05fr .95fr;
      gap:42px;
      align-items:center;
    }
    .eyebrow{
      display:inline-flex;
      align-items:center;
      gap:10px;
      padding:8px 12px;
      border:1px solid rgba(255,107,0,.28);
      background:rgba(255,107,0,.08);
      color:#ffd5b8;
      border-radius:999px;
      font-size:13px;
      margin-bottom:18px;
    }
    .eyebrow_dot{
      width:8px;height:8px;border-radius:50%;background:var(--accent);
      box-shadow:0 0 0 6px rgba(255,107,0,.12);
    }
    h1,h2,h3,h4{
      font-family:'IBM Plex Mono', monospace;
      margin:0 0 16px;
      line-height:1.08;
    }
    h1{font-size:clamp(48px, 6vw, 68px)}
    h2{font-size:clamp(32px, 4vw, 44px)}
    h3{font-size:22px}
    .hero_copy p{
      color:var(--muted);
      font-size:18px;
      line-height:1.7;
      margin:0 0 18px;
      max-width:680px;
    }
    .benefit_chips{
      display:flex;
      flex-wrap:wrap;
      gap:12px;
      margin:24px 0 28px;
    }
    .chip{
      padding:10px 14px;
      border-radius:999px;
      border:1px solid rgba(255,255,255,.08);
      background:rgba(255,255,255,.04);
      color:#e9e9e9;
      font-size:14px;
    }
    .hero_cta{
      display:flex;
      gap:14px;
      flex-wrap:wrap;
    }

    .hero_visual{
      position:relative;
      display:flex;
      align-items:center;
      justify-content:center;
      min-height:520px;
    }
    .hero_main_media{
      width:100%;
      max-height:480px;
      object-fit:contain;
      border-radius:12px;
      border:1px solid rgba(255,255,255,.08);
      background:#0d0d0d;
      box-shadow:0 20px 80px rgba(0,0,0,.45);
      position:relative;
      z-index:3;
    }
    .floating_card{
      position:absolute;
      background:linear-gradient(180deg, rgba(29,29,29,.95), rgba(18,18,18,.95));
      border:1px solid rgba(255,255,255,.08);
      box-shadow:var(--shadow);
      border-radius:16px;
      padding:14px;
      z-index:4;
      animation:floatY 5s ease-in-out infinite;
    }
    .floating_card.small{width:180px}
    .floating_card.medium{width:220px}
    .floating_card.top_left{left:-10px; top:26px}
    .floating_card.bottom_left{left:0; bottom:36px; animation-delay:1.4s}
    .floating_card.right_mid{right:-12px; top:120px; animation-delay:.8s}
    .prompt_lines{
      display:flex;
      flex-direction:column;
      gap:8px;
    }
    .prompt_line{
      height:10px;
      border-radius:8px;
      background:linear-gradient(90deg, rgba(255,107,0,.9), rgba(255,255,255,.16));
    }
    .typing{
      white-space:nowrap;
      overflow:hidden;
      border-right:2px solid var(--accent);
      animation:typing 4s steps(24,end) infinite, blink .8s step-end infinite;
      color:#fff;
      font-size:13px;
    }
    .thumb_grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:8px;
      margin-top:10px;
    }
    .thumb_grid span{
      aspect-ratio:1/1;
      border-radius:10px;
      background:
        linear-gradient(135deg, rgba(255,107,0,.95), rgba(255,158,91,.2)),
        linear-gradient(180deg, rgba(255,255,255,.08), transparent);
      opacity:.95;
    }
    .timeline_bar{
      height:9px;
      border-radius:999px;
      background:rgba(255,255,255,.08);
      overflow:hidden;
      margin-top:10px;
    }
    .timeline_fill{
      height:100%;
      width:70%;
      background:linear-gradient(90deg, var(--accent), #ffb06e);
      animation:pulseWidth 3s ease-in-out infinite;
    }
    .metric_row{
      display:flex;
      justify-content:space-between;
      gap:10px;
      margin-top:10px;
      font-size:12px;
      color:#d7d7d7;
    }

    .metrics_strip{
      background:#111111;
      border-top:1px solid var(--line);
      border-bottom:1px solid var(--line);
      padding:18px 0;
    }
    .metrics_grid{
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:14px;
    }
    .metric_box{
      background:#171717;
      border:1px solid rgba(255,255,255,.07);
      padding:16px 18px;
      border-radius:14px;
      text-align:center;
      box-shadow:6px 6px 0 rgba(255,107,0,.08);
    }
    .metric_box strong{
      display:block;
      font-size:22px;
      margin-bottom:6px;
      color:#fff;
      font-family:'IBM Plex Mono', monospace;
    }
    .metric_box span{
      color:#bcbcbc;
      font-size:14px;
    }

    .section{
      padding:86px 0;
      position:relative;
    }
    .section_dark{background:#1a1a1a}
    .section_charcoal{background:#101010}
    .section_alt{background:#151515}
    .section_head{
      display:flex;
      align-items:end;
      justify-content:space-between;
      gap:20px;
      margin-bottom:36px;
    }
    .section_head p{
      max-width:720px;
      color:var(--muted);
      line-height:1.7;
      margin:0;
      font-size:17px;
    }

    .product_block{
      display:grid;
      grid-template-columns:1.05fr .95fr;
      gap:28px;
      align-items:start;
      margin-top:34px;
      padding:28px;
      border-radius:24px;
      border:1px solid rgba(255,255,255,.08);
      background:linear-gradient(180deg, rgba(255,255,255,.03), rgba(255,255,255,.01));
      box-shadow:var(--shadow);
    }
    .product_block.reverse{
      grid-template-columns:.95fr 1.05fr;
    }
    .product_visual_panel{
      position:relative;
      min-height:540px;
      border-radius:22px;
      overflow:hidden;
      background:
        linear-gradient(180deg, rgba(255,107,0,.12), rgba(255,107,0,.03)),
        #0f0f0f;
      border:1px solid rgba(255,255,255,.08);
      padding:18px;
    }
    .visual_shell{
      position:relative;
      border-radius:18px;
      overflow:hidden;
      background:#0b0b0b;
      border:1px solid rgba(255,255,255,.08);
      margin-bottom:14px;
    }
    .browser_bar{
      display:flex;
      gap:8px;
      padding:12px 14px;
      border-bottom:1px solid rgba(255,255,255,.07);
      background:#121212;
    }
    .browser_bar span{
      width:10px;height:10px;border-radius:50%;
      background:#444;
    }
    .browser_bar span:nth-child(1){background:#ff5f57}
    .browser_bar span:nth-child(2){background:#ffbd2e}
    .browser_bar span:nth-child(3){background:#28c840}
    .shell_img{
      width:100%;
      height:240px;
      object-fit:cover;
    }
    .visual_grid{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:14px;
    }
    .mini_card{
      background:#131313;
      border:1px solid rgba(255,255,255,.07);
      border-radius:16px;
      overflow:hidden;
    }
    .mini_card img{
      width:100%;
      height:140px;
      object-fit:cover;
    }
    .mini_card_content{
      padding:12px;
    }
    .mini_card_content strong{
      display:block;
      margin-bottom:6px;
      font-size:14px;
    }
    .mini_card_content span{
      color:#bdbdbd;
      font-size:12px;
      line-height:1.5;
    }
    .preview_badge{
      position:absolute;
      right:18px; top:18px;
      padding:10px 12px;
      border-radius:12px;
      background:rgba(255,107,0,.14);
      border:1px solid rgba(255,107,0,.35);
      color:#fff0e5;
      font-size:12px;
      font-weight:700;
      z-index:2;
    }

    .product_content .label{
      display:inline-block;
      margin-bottom:14px;
      color:#ffd7be;
      background:rgba(255,107,0,.1);
      border:1px solid rgba(255,107,0,.25);
      padding:8px 12px;
      border-radius:999px;
      font-size:12px;
      font-weight:700;
      letter-spacing:.02em;
      text-transform:uppercase;
    }
    .product_content p{
      color:var(--muted);
      line-height:1.75;
      font-size:16px;
      margin:0 0 20px;
    }
    .accordion{
      display:flex;
      flex-direction:column;
      gap:12px;
      margin-top:18px;
    }
    .accordion_item{
      border:1px solid rgba(255,255,255,.08);
      border-radius:18px;
      background:#141414;
      overflow:hidden;
      transition:all .3s ease;
    }
    .accordion_item.active{
      border-color:rgba(255,107,0,.35);
      box-shadow:6px 6px 0 rgba(255,107,0,.08);
    }
    .accordion_btn{
      width:100%;
      text-align:left;
      background:transparent;
      border:none;
      color:#fff;
      padding:18px 18px;
      display:flex;
      align-items:flex-start;
      gap:14px;
      cursor:pointer;
    }
    .icon_box{
      width:42px;height:42px;min-width:42px;
      border-radius:12px;
      display:flex;align-items:center;justify-content:center;
      background:rgba(255,107,0,.12);
      border:1px solid rgba(255,107,0,.22);
    }
    .accordion_title{
      font-weight:700;
      margin-bottom:6px;
      font-size:16px;
      line-height:1.45;
    }
    .accordion_desc{
      max-height:0;
      overflow:hidden;
      transition:max-height .35s ease, padding .35s ease;
      color:#c6c6c6;
      line-height:1.7;
      padding:0 18px;
    }
    .accordion_item.active .accordion_desc{
      max-height:180px;
      padding:0 18px 18px 74px;
    }

    .workflow_grid{
      display:grid;
      grid-template-columns:repeat(3,1fr);
      gap:20px;
      margin-top:26px;
    }
    .workflow_card{
      background:#171717;
      border:1px solid rgba(255,255,255,.08);
      border-radius:18px;
      overflow:hidden;
      box-shadow:6px 6px 0 rgba(255,107,0,.08);
    }
    .workflow_card img{
      height:220px;
      width:100%;
      object-fit:cover;
    }
    .workflow_card_content{
      padding:18px;
    }
    .workflow_card_content h3{
      font-size:18px;
      margin-bottom:10px;
    }
    .workflow_card_content p{
      color:#bbbbbb;
      margin:0;
      line-height:1.7;
      font-size:15px;
    }

    .pricing_grid{
      display:grid;
      grid-template-columns:1fr 1.1fr;
      gap:24px;
      margin-top:26px;
    }
    .pricing_card{
      border-radius:24px;
      border:1px solid rgba(255,255,255,.08);
      background:linear-gradient(180deg, #171717, #111111);
      padding:28px;
      position:relative;
      box-shadow:var(--shadow);
    }
    .pricing_card.highlight{
      border-color:rgba(255,107,0,.4);
      transform:translateY(-4px);
      background:
        linear-gradient(180deg, rgba(255,107,0,.08), rgba(255,107,0,.02)),
        linear-gradient(180deg, #1a1a1a, #101010);
    }
    .badge_green{
      display:inline-flex;
      align-items:center;
      gap:8px;
      background:rgba(33,196,93,.12);
      color:#8ff0b4;
      border:1px solid rgba(33,196,93,.28);
      border-radius:999px;
      padding:8px 12px;
      font-size:12px;
      font-weight:800;
      text-transform:uppercase;
      letter-spacing:.04em;
      margin-bottom:14px;
    }
    .price_row{
      display:flex;
      align-items:end;
      gap:10px;
      margin:14px 0 20px;
      flex-wrap:wrap;
    }
    .price_old{
      color:#898989;
      text-decoration:line-through;
      font-size:18px;
    }
    .price_new{
      font-size:36px;
      font-weight:800;
      color:#fff;
      font-family:'IBM Plex Mono', monospace;
    }
    .price_empty{
      font-size:18px;
      font-weight:700;
      color:#fff;
      font-family:'IBM Plex Mono', monospace;
    }
    .plan_name{
      font-size:22px;
      margin-bottom:6px;
    }
    .pricing_card p{
      color:#bfbfbf;
      margin:0 0 18px;
      line-height:1.7;
    }
    .checklist{
      list-style:none;
      padding:0;
      margin:0 0 22px;
      display:flex;
      flex-direction:column;
      gap:12px;
    }
    .checklist li{
      display:flex;
      gap:12px;
      align-items:flex-start;
      color:#e7e7e7;
      font-size:15px;
      line-height:1.6;
    }
    .checkmark{
      width:22px;height:22px;min-width:22px;border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      background:rgba(33,196,93,.14);
      border:1px solid rgba(33,196,93,.24);
      color:#7cffac;
      font-size:13px;
      margin-top:1px;
    }

    .testimonial_wrap{
      position:relative;
      margin-top:28px;
    }
    .testimonial_slider{
      overflow:hidden;
    }
    .testimonial_track{
      display:flex;
      transition:transform .45s ease;
    }
    .testimonial_card{
      min-width:100%;
      background:linear-gradient(180deg, #171717, #101010);
      border:1px solid rgba(255,255,255,.08);
      border-radius:24px;
      padding:34px;
      position:relative;
      box-shadow:var(--shadow);
    }
    .quote_mark{
      font-size:72px;
      line-height:1;
      color:var(--accent);
      opacity:.85;
      margin-bottom:8px;
      font-family:Georgia, serif;
    }
    .stars{
      color:#ffbf36;
      letter-spacing:2px;
      margin-bottom:16px;
      font-size:18px;
    }
    .testimonial_card p{
      font-size:20px;
      line-height:1.8;
      color:#f1f1f1;
      margin:0 0 22px;
      max-width:900px;
    }
    .author_name{
      font-weight:800;
      font-size:17px;
      color:#fff;
    }
    .author_role{
      color:#9f9f9f;
      margin-top:4px;
      font-size:14px;
    }
    .testimonial_nav{
      display:flex;
      gap:12px;
      justify-content:flex-end;
      margin-top:18px;
    }
    .nav_arrow{
      width:48px;height:48px;border-radius:50%;
      border:1px solid rgba(255,255,255,.12);
      background:#141414;
      color:#fff;
      cursor:pointer;
      transition:all .25s ease;
    }
    .nav_arrow:hover{
      transform:translateY(-2px);
      box-shadow:0 10px 20px rgba(0,0,0,.3);
      border-color:rgba(255,107,0,.35);
    }

    .footer_section{
      background:#0d0d0d;
      border-top:1px solid rgba(255,255,255,.08);
      padding:56px 0 28px;
    }
    .footer_grid{
      display:grid;
      grid-template-columns:1.2fr 1fr 1fr;
      gap:28px;
      margin-bottom:28px;
    }
    .footer_brand p,.footer_col p,.footer_col a{
      color:#a9a9a9;
      line-height:1.8;
      font-size:15px;
    }
    .footer_col h4{
      margin-bottom:12px;
      font-size:16px;
    }
    .footer_links{
      display:flex;
      flex-direction:column;
      gap:10px;
    }
    .footer_bottom{
      border-top:1px solid rgba(255,255,255,.08);
      padding-top:18px;
      display:flex;
      justify-content:space-between;
      gap:16px;
      flex-wrap:wrap;
      color:#8b8b8b;
      font-size:14px;
    }

    .reveal{
      opacity:0;
      transform:translateY(28px);
      transition:opacity .8s ease, transform .8s ease;
    }
    .reveal.revealed{
      opacity:1;
      transform:none;
    }

    @keyframes floatY{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(-10px)}
    }
    @keyframes pulseWidth{
      0%,100%{width:62%}
      50%{width:84%}
    }
    @keyframes typing{
      0%{width:0}
      40%{width:100%}
      60%{width:100%}
      100%{width:0}
    }
    @keyframes blink{
      50%{border-color:transparent}
    }

    @media (max-width: 992px){
      .nav_links{display:none}
      .menu_toggle{display:block}
      .hero_grid,.product_block,.product_block.reverse,.pricing_grid,.footer_grid{
        grid-template-columns:1fr;
      }
      .metrics_grid,.workflow_grid{
        grid-template-columns:1fr 1fr;
      }
      .hero_visual{min-height:auto}
      .floating_card.top_left{left:0}
      .floating_card.right_mid{right:0}
      .section{padding:72px 0}
    }
    @media (max-width: 640px){
      .container{width:min(100% - 20px, 1200px)}
      .tj_nav_inner{min-height:68px}
      .hero_section{padding-top:42px}
      .hero_copy p{font-size:16px}
      .metrics_grid,.workflow_grid{
        grid-template-columns:1fr;
      }
      .benefit_chips,.hero_cta{gap:10px}
      .floating_card{
        position:relative;
        inset:auto !important;
        width:100% !important;
        margin-top:12px;
      }
      .hero_visual{
        display:block;
      }
      .accordion_item.active .accordion_desc{
        padding:0 16px 16px 16px;
      }
      .accordion_btn{
        padding:16px;
      }
      .testimonial_card{
        padding:24px;
      }
      .testimonial_card p{
        font-size:17px;
      }
      .mobile_panel{
        position:absolute;
        left:0; right:0; top:100%;
        background:#101010;
        border-bottom:1px solid rgba(255,255,255,.08);
        padding:16px 20px 20px;
        display:flex;
        flex-direction:column;
        gap:14px;
      }
    }
  `;

  const renderIcon = (type) => {
    const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none' };
    switch (type) {
      case 'image':
        return (
          <svg {...common}>
            <rect x="3" y="5" width="18" height="14" rx="3" stroke={accent} strokeWidth="1.8" />
            <circle cx="9" cy="10" r="2" fill={accent} />
            <path d="M6 17l4-4 3 3 2-2 3 3" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'type':
        return (
          <svg {...common}>
            <path d="M5 7h14M9 7v10M15 7v10M7 17h10" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      case 'layers':
        return (
          <svg {...common}>
            <path d="M12 4l8 4-8 4-8-4 8-4z" stroke={accent} strokeWidth="1.8" />
            <path d="M4 12l8 4 8-4M4 16l8 4 8-4" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
      case 'video':
        return (
          <svg {...common}>
            <rect x="3" y="5" width="13" height="14" rx="3" stroke={accent} strokeWidth="1.8" />
            <path d="M16 10l5-3v10l-5-3v-4z" stroke={accent} strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
      case 'audio':
        return (
          <svg {...common}>
            <path d="M5 14h2l4 4V6L7 10H5z" stroke={accent} strokeWidth="1.8" strokeLinejoin="round" />
            <path d="M16 9a5 5 0 010 6M18.5 6.5a8.5 8.5 0 010 11" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
          </svg>
        );
      default:
        return (
          <svg {...common}>
            <path d="M12 3l2.7 5.5L21 9.4l-4.5 4.3 1.1 6.3L12 17l-5.6 3 1.1-6.3L3 9.4l6.3-.9L12 3z" stroke={accent} strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        );
    }
  };

  const seedreamIcons = ['image', 'image', 'image', 'type', 'layers', 'layers'];
  const seedanceIcons = ['video', 'video', 'audio', 'audio', 'video', 'video'];

  return (
    <div className="landing-root">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="tj_nav">
        <div className="container tj_nav_inner">
          <div className="nav_left">
            <div className="product_logo">
              <span className="product_logo_mark" />
              <span>Seedream 4.5 + Seedance 1.5 Pro</span>
            </div>
          </div>

          <div className="nav_links">
            <a href="#products">Products</a>
            <a href="#pricing">Pricing</a>
            <a href="#testimonials">Testimonials</a>
          </div>

          <div className="nav_right">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              alt="Techjockey"
              className="techjockey_logo"
            />
            <button className="btn btn_primary" onClick={scrollToPricing}>
              Generate with AI
            </button>
            <button className="menu_toggle" onClick={() => setMobileMenu(!mobileMenu)} aria-label="Menu">
              ☰
            </button>
          </div>
        </div>
        {mobileMenu && (
          <div className="mobile_panel">
            <a href="#products" onClick={() => setMobileMenu(false)}>Products</a>
            <a href="#pricing" onClick={() => setMobileMenu(false)}>Pricing</a>
            <a href="#testimonials" onClick={() => setMobileMenu(false)}>Testimonials</a>
          </div>
        )}
      </nav>

      <section className="hero_section" id="hero" ref={heroRef}>
        <div className="container hero_grid">
          <div className="hero_copy reveal">
            <div className="eyebrow">
              <span className="eyebrow_dot" />
              ByteDance multimodal generation for professional teams
            </div>
            <h1>
              Create High-Quality AI Images & Videos with{' '}
              <span style={{ color: accent }}>Seedream 4.5 and Seedance 1.5 Pro</span>
            </h1>
            <p>
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro
              (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>
            <p>
              From text prompts, images, or scripts, generate professional visuals and videos with powerful multimodal AI systems.
            </p>
            <div className="benefit_chips">
              <span className="chip">AI Image Generation</span>
              <span className="chip">AI Video Generation with Audio</span>
              <span className="chip">Multimodal Content Creation</span>
              <span className="chip">Enterprise-ready AI infrastructure</span>
            </div>
            <div className="hero_cta">
              <button className="btn btn_primary" onClick={scrollToPricing}>Generate with AI</button>
              <button className="btn btn_secondary" onClick={scrollToProducts}>Explore Products</button>
            </div>
          </div>

          <div className="hero_visual reveal">
            <div className="floating_card small top_left">
              <div className="typing">prompt: cinematic neon poster / 4K</div>
              <div className="prompt_lines" style={{ marginTop: 10 }}>
                <div className="prompt_line" style={{ width: '92%' }} />
                <div className="prompt_line" style={{ width: '74%' }} />
                <div className="prompt_line" style={{ width: '58%' }} />
              </div>
            </div>

            <img className="hero_main_media" src={heroImage} alt="Seedream and Seedance Hero Visual" />

            <div className="floating_card medium right_mid">
              <strong style={{ display: 'block', marginBottom: 8, fontSize: 13 }}>Generated Variations</strong>
              <div className="thumb_grid">
                <span />
                <span style={{ background: 'linear-gradient(135deg,#ff6b00,#3b1d00)' }} />
                <span style={{ background: 'linear-gradient(135deg,#ffa15a,#322014)' }} />
                <span style={{ background: 'linear-gradient(135deg,#5a2f12,#ff6b00)' }} />
                <span style={{ background: 'linear-gradient(135deg,#ff7f2a,#8c3d00)' }} />
                <span style={{ background: 'linear-gradient(135deg,#f7a76c,#552508)' }} />
              </div>
            </div>

            <div className="floating_card small bottom_left">
              <strong style={{ display: 'block', marginBottom: 6, fontSize: 13 }}>Video Timeline Sync</strong>
              <div className="timeline_bar">
                <div className="timeline_fill" />
              </div>
              <div className="metric_row">
                <span>Motion</span>
                <span>Audio aligned</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics_strip">
        <div className="container metrics_grid reveal">
          <div className="metric_box">
            <strong>2</strong>
            <span>Professional generative models</span>
          </div>
          <div className="metric_box">
            <strong>4K</strong>
            <span>High-resolution image output</span>
          </div>
          <div className="metric_box">
            <strong>10×</strong>
            <span>Faster inference pipeline</span>
          </div>
          <div className="metric_box">
            <strong>Native</strong>
            <span>Audio + video synchronization</span>
          </div>
        </div>
      </section>

      <section className="section section_dark" id="products">
        <div className="container">
          <div className="section_head reveal">
            <div>
              <h2>Built as a multimodal product lab for modern creative workflows</h2>
              <p>
                Explore structured image generation with Seedream 4.5 and cinematic audio-visual generation with Seedance 1.5 Pro.
                Each product section is designed to show how professional teams can move from concept to campaign-ready output faster.
              </p>
            </div>
          </div>

          <div className="product_block reveal">
            <div className="product_visual_panel">
              <div className="preview_badge">Image generation preview</div>
              <div className="visual_shell">
                <div className="browser_bar"><span /><span /><span /></div>
                <img className="shell_img" src={productImages[0]} alt="Seedream workspace preview" />
              </div>
              <div className="visual_grid">
                <div className="mini_card">
                  <img src={featureImages[0]} alt="Text to image alignment" />
                  <div className="mini_card_content">
                    <strong>Prompt Precision</strong>
                    <span>Semantic understanding translates textual detail into high-fidelity image output.</span>
                  </div>
                </div>
                <div className="mini_card">
                  <img src={productImages[1]} alt="High resolution output" />
                  <div className="mini_card_content">
                    <strong>High Resolution</strong>
                    <span>Native 1K–4K generation for posters, ads, and production-ready creative assets.</span>
                  </div>
                </div>
                <div className="mini_card">
                  <img src={featureImages[1]} alt="Typography rendering" />
                  <div className="mini_card_content">
                    <strong>Typography Quality</strong>
                    <span>Optimized rendering for text-heavy layouts, visual campaigns, and design systems.</span>
                  </div>
                </div>
                <div className="mini_card">
                  <img src={productImages[2]} alt="Composition preview" />
                  <div className="mini_card_content">
                    <strong>Composition Control</strong>
                    <span>Maintain subject identity and structural fidelity across multi-image compositions.</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="product_content">
              <span className="label">Feature 1</span>
              <h2>AI Image Generation with Seedream 4.5</h2>
              <p>
                Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution,
                high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing,
                and multi-image composition within a single framework.
              </p>
              <div className="accordion">
                {seedreamFeatures.map((feature, index) => (
                  <div key={index} className={`accordion_item ${activeSeedream === index ? 'active' : ''}`}>
                    <button className="accordion_btn" onClick={() => setActiveSeedream(index)}>
                      <div className="icon_box">{renderIcon(seedreamIcons[index] || 'image')}</div>
                      <div>
                        <div className="accordion_title">{feature.title}</div>
                      </div>
                    </button>
                    <div className="accordion_desc">{feature.description}</div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 22 }}>
                <button className="btn btn_primary" onClick={scrollToPricing}>Request Demo</button>
              </div>
            </div>
          </div>

          <div className="product_block reverse reveal" style={{ marginTop: 30 }}>
            <div className="product_content">
              <span className="label">Additional Feature</span>
              <h2>AI Video Generation with Seedance 1.5 Pro by ByteDance</h2>
              <p>
                Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation,
                enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer
                architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.
              </p>
              <div className="accordion">
                {seedanceFeatures.map((feature, index) => (
                  <div key={index} className={`accordion_item ${activeSeedance === index ? 'active' : ''}`}>
                    <button className="accordion_btn" onClick={() => setActiveSeedance(index)}>
                      <div className="icon_box">{renderIcon(seedanceIcons[index] || 'video')}</div>
                      <div>
                        <div className="accordion_title">{feature.title}</div>
                      </div>
                    </button>
                    <div className="accordion_desc">{feature.description}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="product_visual_panel">
              <div className="preview_badge">Cinematic video preview</div>
              <div className="visual_shell">
                <div className="browser_bar"><span /><span /><span /></div>
                <img className="shell_img" src={productImages[3]} alt="Seedance workspace preview" />
              </div>
              <div className="visual_grid">
                <div className="mini_card">
                  <img src={featureImages[2]} alt="Text to video preview" />
                  <div className="mini_card_content">
                    <strong>Text-to-Video</strong>
                    <span>Create videos directly from text prompts with strong motion continuity.</span>
                  </div>
                </div>
                <div className="mini_card">
                  <img src={productImages[4]} alt="Audio visual synchronization preview" />
                  <div className="mini_card_content">
                    <strong>AV Synchronization</strong>
                    <span>Generate video and audio simultaneously for coherent multimodal storytelling.</span>
                  </div>
                </div>
                <div className="mini_card">
                  <img src={featureImages[3]} alt="Lip sync capability" />
                  <div className="mini_card_content">
                    <strong>Multilingual Lip-Sync</strong>
                    <span>Support for multilingual and dialect-level synchronization in generated video scenes.</span>
                  </div>
                </div>
                <div className="mini_card">
                  <img src={productImages[5]} alt="Inference speed preview" />
                  <div className="mini_card_content">
                    <strong>Faster Inference</strong>
                    <span>Accelerated generation pipelines for rapid concepting and production support.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section_charcoal">
        <div className="container">
          <div className="section_head reveal">
            <div>
              <h2>See the workflow in motion</h2>
              <p>
                The full media set is used across staged previews to reflect real creative operations: ideation, visual generation,
                composition refinement, and synchronized video delivery.
              </p>
            </div>
          </div>

          <div className="workflow_grid">
            <div className="workflow_card reveal">
              <img src={featureImages[4]} alt="Creative ideation workspace" />
              <div className="workflow_card_content">
                <h3>1. Start with prompts or references</h3>
                <p>
                  Feed Seedream with text prompts, image references, and layout constraints to create polished design-ready outputs.
                </p>
              </div>
            </div>
            <div className="workflow_card reveal">
              <img src={productImages[6]} alt="Visual composition workflow" />
              <div className="workflow_card_content">
                <h3>2. Refine identity and structure</h3>
                <p>
                  Preserve subject consistency, improve typography, and maintain composition fidelity across multiple visual variants.
                </p>
              </div>
            </div>
            <div className="workflow_card reveal">
              <img src={productImages[7]} alt="Video storytelling workflow" />
              <div className="workflow_card_content">
                <h3>3. Expand into cinematic video</h3>
                <p>
                  Use Seedance to turn scripts and story concepts into synchronized audio-visual sequences with camera control and speed.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section_alt" id="pricing">
        <div className="container">
          <div className="section_head reveal">
            <div>
              <h2>Flexible pricing for image and video generation teams</h2>
              <p>
                Choose the ByteDance generative capability that fits your workflow. Pricing shown below uses only the available source data.
              </p>
            </div>
          </div>

          <div className="pricing_grid">
            <div className="pricing_card reveal">
              <div className="badge_green">Custom quote</div>
              <div className="plan_name">Seedream 4.5 (AI Image Generation)</div>
              <p>Ideal for high-resolution image generation, advanced editing, and poster-grade creative output.</p>
              <div className="price_row">
                <span className="price_old">Contact us</span>
                <span className="price_empty">Price on request</span>
              </div>
              <ul className="checklist">
                <li><span className="checkmark">✓</span><span>High-resolution image generation (up to 4K quality)</span></li>
                <li><span className="checkmark">✓</span><span>Text-to-image & multimodal image editing</span></li>
                <li><span className="checkmark">✓</span><span>Multi-image composition for complex visuals</span></li>
                <li><span className="checkmark">✓</span><span>Enhanced typographic rendering for posters, ads & text-heavy designs</span></li>
              </ul>
              <button className="btn btn_secondary btn_full">Get Quote</button>
            </div>

            <div className="pricing_card highlight reveal">
              <div className="badge_green">Best for production teams</div>
              <div className="plan_name">Seedance 1.5 Pro (AI Video Generation)</div>
              <p>Built for cinematic text-to-video generation with synchronized audio and faster production workflows.</p>
              <div className="price_row">
                <span className="price_old">$1,200/month</span>
                <span className="price_new">Starting at $1,000/month/</span>
              </div>
              <ul className="checklist">
                <li><span className="checkmark">✓</span><span>Text-to-video generation with cinematic output</span></li>
                <li><span className="checkmark">✓</span><span>Native audio + video generation (synchronized)</span></li>
                <li><span className="checkmark">✓</span><span>Multilingual lip-sync capabilities</span></li>
                <li><span className="checkmark">✓</span><span>Fast inference for quicker video production</span></li>
              </ul>
              <button className="btn btn_primary btn_full">Get Quote</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section_dark" id="testimonials">
        <div className="container">
          <div className="section_head reveal">
            <div>
              <h2>Creative teams trust high-fidelity multimodal generation</h2>
              <p>
                Real-world feedback from professionals using AI-assisted image and video generation for branded storytelling,
                campaign execution, and production acceleration.
              </p>
            </div>
          </div>

          <div className="testimonial_wrap reveal">
            <div className="testimonial_slider">
              <div className="testimonial_track" style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}>
                {testimonials.map((item, index) => (
                  <div className="testimonial_card" key={index}>
                    <div className="quote_mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p>{item.quote}</p>
                    <div className="author_name">{item.author}</div>
                    <div className="author_role">{item.designation}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="testimonial_nav">
              <button className="nav_arrow" onClick={prevTestimonial} aria-label="Previous testimonial">←</button>
              <button className="nav_arrow" onClick={nextTestimonial} aria-label="Next testimonial">→</button>
            </div>
          </div>
        </div>
      </section>

      <section className="footer_section">
        <div className="container">
          <div className="footer_grid">
            <div className="footer_brand">
              <div className="product_logo" style={{ marginBottom: 14 }}>
                <span className="product_logo_mark" />
                <span>Seedream 4.5 + Seedance 1.5 Pro</span>
              </div>
              <p>
                Explore professional AI image and video generation workflows through ByteDance’s multimodal models,
                curated for businesses by Techjockey.
              </p>
            </div>

            <div className="footer_col">
              <h4>Explore</h4>
              <div className="footer_links">
                <a href="#hero">Overview</a>
                <a href="#products">Products</a>
                <a href="#pricing">Pricing</a>
                <a href="#testimonials">Testimonials</a>
              </div>
            </div>

            <div className="footer_col">
              <h4>Techjockey</h4>
              <p>
                Discover software, compare solutions, and find the right business technology stack with expert-backed guidance.
              </p>
            </div>
          </div>

          <div className="footer_bottom">
            <span>© 2026 Techjockey. All rights reserved.</span>
            <span>AI Image Generation • AI Video Generation • Enterprise-ready Infrastructure</span>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;