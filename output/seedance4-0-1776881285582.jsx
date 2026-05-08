import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const primary = '#ff6b00';
  const accent = '#1a1a1a';
  const bodyBg = '#0f0f0f';
  const sectionDark = '#151515';
  const border = '#2a2a2a';
  const textPrimary = '#ffffff';
  const textSecondary = '#c9c9c9';

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      author: 'Vaishali Saxena',
      designation: 'Creative Director',
      image: '/output/generated-assets/ds_1776881061775_9d7dd198/09-89305946db.png'
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      author: 'Vihaan Pandey',
      designation: 'Video Producer',
      image: '/output/generated-assets/ds_1776881061775_9d7dd198/11-d78ef9355c.png'
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      author: 'Anurag Malhotra',
      designation: 'Art Director',
      image: '/output/generated-assets/ds_1776881061775_9d7dd198/09-89305946db.png'
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      author: 'Ashutosh Singh',
      designation: 'Marketing Manager',
      image: '/output/generated-assets/ds_1776881061775_9d7dd198/11-d78ef9355c.png'
    }
  ];

  const products = [
    {
      name: 'Seedream 4.5',
      label: 'Feature 1',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      cta: 'Request Demo',
      image: '/output/generated-assets/ds_1776881061775_9d7dd198/02-7657e57cf0.png',
      visual: '/output/generated-assets/ds_1776881061775_9d7dd198/01-54e1a1a0f5.png',
      features: [
        {
          title: 'Advanced Text–Image Alignment',
          description: 'Accurately translates prompts into visuals with improved semantic understanding.'
        },
        {
          title: 'High-Resolution Output',
          description: 'Generate native images up to 1K–4K resolution with strong visual fidelity.'
        },
        {
          title: 'Superior Typographic Rendering',
          description: 'Optimized for posters, ads, and text-heavy visual designs.'
        },
        {
          title: 'Multi-Image Composition with Identity Preservation',
          description: 'Combines multiple inputs while accurately maintaining subject consistency.'
        },
        {
          title: 'Strong Structural Fidelity',
          description: 'Maintains composition, layout, and scene structure with high precision.'
        }
      ]
    },
    {
      name: 'Seedance 1.5 Pro',
      label: 'Additional Feature:-',
      headline: 'AI Video Generation with Seedance 1.5 Pro by Bytedance',
      description:
        'Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.',
      cta: 'Explore Capabilities',
      image: '/output/generated-assets/ds_1776881061775_9d7dd198/07-981354fb00.png',
      visual: '/output/generated-assets/ds_1776881061775_9d7dd198/08-c4820434cc.png',
      features: [
        {
          title: 'Text-to-Video Generation',
          description: 'Create videos directly from text prompts.'
        },
        {
          title: 'Audio-Visual Synchronization',
          description: 'Generate video and audio simultaneously with strong multimodal alignment.'
        },
        {
          title: 'Multilingual Lip-Sync',
          description: 'Supports multilingual and dialect-level lip synchronization.'
        },
        {
          title: 'Cinematic Camera Control',
          description: 'Generate videos with dynamic camera movement and cinematic storytelling.'
        },
        {
          title: '10× Faster Inference',
          description: 'Optimized inference pipeline significantly improves generation speed.'
        }
      ]
    }
  ];

  const pricingPlans = [
    {
      name: 'Seedream 4.5 (AI Image Generation)',
      originalPrice: '',
      price: '',
      discount: '',
      includes: [
        'High-resolution image generation (up to 4K quality)',
        'Text-to-image & multimodal image editing',
        'Multi-image composition for complex visuals',
        'Enhanced typographic rendering for posters, ads & text-heavy designs'
      ],
      cta: 'Get Quote'
    },
    {
      name: 'Seedance 1.5 Pro (AI Video Generation)',
      originalPrice: '',
      price: 'Starting at $1,000/month/',
      discount: '',
      includes: [
        'Text-to-video generation with cinematic output',
        'Native audio + video generation (synchronized)',
        'Multilingual lip-sync capabilities',
        'Fast inference for quicker video production'
      ],
      cta: 'Get Quote'
    }
  ];

  const [openAccordions, setOpenAccordions] = useState({
    '0-0': true,
    '1-0': true
  });
  const [activeSlide, setActiveSlide] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);
  const testimonialTimer = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 12);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    testimonialTimer.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialTimer.current);
  }, [testimonials.length]);

  const toggleAccordion = (productIdx, featureIdx) => {
    const key = `${productIdx}-${featureIdx}`;
    setOpenAccordions((prev) => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const IconSpark = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2L14.7 9.3L22 12L14.7 14.7L12 22L9.3 14.7L2 12L9.3 9.3L12 2Z" fill={primary} />
    </svg>
  );

  const IconVideo = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M4 6C4 4.9 4.9 4 6 4H14C15.1 4 16 4.9 16 6V18C16 19.1 15.1 20 14 20H6C4.9 20 4 19.1 4 18V6Z" stroke={primary} strokeWidth="2"/>
      <path d="M16 10L21 7V17L16 14V10Z" fill={primary}/>
    </svg>
  );

  const IconShield = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3L19 6V11C19 16 15.8 20.4 12 21C8.2 20.4 5 16 5 11V6L12 3Z" fill={primary} />
    </svg>
  );

  const IconLayers = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3L2 8L12 13L22 8L12 3Z" fill={primary}/>
      <path d="M2 12L12 17L22 12" stroke={primary} strokeWidth="2"/>
      <path d="M2 16L12 21L22 16" stroke={primary} strokeWidth="2"/>
    </svg>
  );

  const featureIcon = (idx) => {
    const icons = [<IconSpark key="a" />, <IconVideo key="b" />, <IconShield key="c" />, <IconLayers key="d" />, <IconSpark key="e" />];
    return icons[idx % icons.length];
  };

  const css = `
    :root{
      --primary:${primary};
      --accent:${accent};
      --bodyBg:${bodyBg};
      --sectionDark:${sectionDark};
      --cardBg:#1a1a1a;
      --border:${border};
      --textPrimary:${textPrimary};
      --textSecondary:${textSecondary};
      --heading-font:'IBM Plex Mono', monospace;
      --body-font:'Inter', sans-serif;
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      background:var(--bodyBg);
      color:var(--textPrimary);
      font-family:var(--body-font);
    }
    a{text-decoration:none;color:inherit}
    img{max-width:100%;display:block}
    .landing-page{
      background:var(--bodyBg);
      color:var(--textPrimary);
      overflow:hidden;
    }
    .container{
      width:min(1200px, calc(100% - 40px));
      margin:0 auto;
      position:relative;
      z-index:2;
    }
    .section{
      position:relative;
      padding:88px 0;
      overflow:hidden;
    }
    .section-dark{background:#0f0f0f}
    .section-darker{background:#151515}
    .section-hero{background:#ff6b00}
    .heading-font,h1,h2,h3{
      font-family:var(--heading-font);
      letter-spacing:-0.03em;
    }
    h1{
      font-size:clamp(48px, 6vw, 72px);
      line-height:1.04;
      margin:0 0 20px;
      color:#fff;
    }
    h2{
      font-size:clamp(32px, 4vw, 48px);
      line-height:1.1;
      margin:0 0 18px;
      color:#fff;
    }
    h3{
      font-size:20px;
      margin:0;
    }
    p{
      color:var(--textSecondary);
      font-size:16px;
      line-height:1.75;
      margin:0;
    }
    .gradient-text{
      background:linear-gradient(135deg, #1a1a1a 0%, #ff6b00 100%);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      background-clip:text;
    }
    .nav{
      position:sticky;
      top:0;
      z-index:50;
      transition:all .3s ease;
      border-bottom:1px solid rgba(255,255,255,0.08);
      background:rgba(15,15,15,0.78);
      backdrop-filter:blur(10px);
    }
    .nav.scrolled{
      background:rgba(15,15,15,0.92);
      backdrop-filter:blur(20px);
    }
    .nav-inner{
      min-height:78px;
      display:grid;
      grid-template-columns:1fr auto auto;
      align-items:center;
      gap:20px;
    }
    .product-logo{
      color:#fff;
      font-family:var(--heading-font);
      font-weight:700;
      font-size:20px;
      display:flex;
      align-items:center;
      gap:12px;
    }
    .product-logo-dot{
      width:12px;
      height:12px;
      border-radius:50%;
      background:var(--primary);
      box-shadow:0 0 0 6px rgba(255,107,0,.15);
      flex:0 0 auto;
    }
    .nav-right{
      display:flex;
      align-items:center;
      gap:18px;
    }
    @keyframes borderRotate {
      from { transform: rotate(0deg); }
      to { transform: rotate(360deg); }
    }
    .animated-cta{
      position:relative;
      padding:14px 28px;
      border-radius:10px;
      overflow:hidden;
      background:transparent;
      color:white;
      font-weight:700;
      cursor:pointer;
      z-index:1;
      border:none;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      transition:transform .25s ease, box-shadow .25s ease, opacity .25s ease;
      box-shadow:0 12px 30px rgba(0,0,0,.22);
      min-height:50px;
    }
    .animated-cta::before{
      content:'';
      position:absolute;
      inset:-2px;
      background:conic-gradient(from 0deg, #1a1a1a, #ff6b00, #1a1a1a);
      border-radius:inherit;
      animation:borderRotate 3s linear infinite;
      z-index:-2;
    }
    .animated-cta::after{
      content:'';
      position:absolute;
      inset:1px;
      background:#ff6b00;
      border-radius:8px;
      z-index:-1;
    }
    .animated-cta:hover,
    .ghost-btn:hover,
    .cta-full:hover,
    .slider-arrow:hover{
      transform:translateY(-2px);
      box-shadow:0 16px 36px rgba(0,0,0,.28);
    }
    .ghost-btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      min-height:50px;
      padding:14px 24px;
      border-radius:10px;
      border:1px solid rgba(255,255,255,.24);
      color:#fff;
      background:rgba(255,255,255,.08);
      transition:transform .25s ease, box-shadow .25s ease, background .25s ease;
      font-weight:700;
    }
    .hero-grid{
      display:grid;
      grid-template-columns:1.05fr .95fr;
      gap:56px;
      align-items:center;
      min-height:calc(100vh - 78px);
      padding:48px 0 32px;
    }
    .hero-copy{
      position:relative;
      z-index:2;
    }
    .hero-sub{
      max-width:640px;
      color:#fff;
      opacity:.92;
      font-size:18px;
    }
    .hero-support{
      margin-top:18px;
      color:#fff;
      opacity:.86;
    }
    .hero-cta-row{
      display:flex;
      gap:14px;
      flex-wrap:wrap;
      margin-top:28px;
    }
    .chip-row{
      display:flex;
      flex-wrap:wrap;
      gap:12px;
      margin-top:24px;
    }
    .chip{
      display:flex;
      align-items:center;
      gap:8px;
      padding:9px 16px;
      border-radius:999px;
      border:1px solid rgba(26,26,26,.3);
      background:rgba(26,26,26,.12);
      color:#fff;
      font-size:13px;
      white-space:nowrap;
      backdrop-filter:blur(6px);
    }
    .hero-visual{
      position:relative;
      display:flex;
      align-items:center;
      justify-content:center;
      min-height:520px;
    }
    .hero-card{
      position:relative;
      width:100%;
      max-width:560px;
      border-radius:20px;
      overflow:hidden;
      border:1px solid rgba(255,255,255,.14);
      box-shadow:14px 14px 0 rgba(0,0,0,.28);
      background:#111;
    }
    .hero-card img{
      width:100%;
      max-height:480px;
      object-fit:contain;
    }
    .hero-card::after{
      content:'';
      position:absolute;
      inset:0;
      background:linear-gradient(180deg, rgba(0,0,0,.12), rgba(0,0,0,.4));
      pointer-events:none;
    }
    .floating-panel{
      position:absolute;
      background:rgba(15,15,15,.88);
      border:1px solid rgba(255,255,255,.12);
      box-shadow:10px 10px 0 rgba(0,0,0,.2);
      border-radius:14px;
      padding:14px 16px;
      backdrop-filter:blur(10px);
      animation:floatY 5s ease-in-out infinite;
    }
    .floating-panel.one{top:38px; left:-18px;}
    .floating-panel.two{bottom:44px; right:-12px; animation-delay:1.2s;}
    .floating-panel.three{top:210px; right:-28px; animation-delay:2s;}
    .floating-panel .panel-label{
      font-size:11px;
      color:#8f8f8f;
      text-transform:uppercase;
      letter-spacing:.1em;
      margin-bottom:6px;
    }
    .floating-panel .panel-value{
      font-family:var(--heading-font);
      font-size:18px;
      color:#fff;
    }
    .precision-lines::before,
    .precision-lines::after{
      content:'';
      position:absolute;
      inset:auto;
      pointer-events:none;
      opacity:.35;
    }
    .section-hero.precision-lines::before{
      top:0; left:0; right:0; bottom:0;
      background:
        linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);
      background-size:40px 40px;
      mask-image:linear-gradient(180deg, rgba(0,0,0,.4), transparent 80%);
    }
    .section-orb{
      position:absolute;
      border-radius:50%;
      pointer-events:none;
      filter:blur(4px);
    }
    .section-orb.orb-1{
      top:-120px; left:-80px; width:340px; height:340px;
      background:radial-gradient(circle, rgba(26,26,26,.32) 0%, transparent 68%);
    }
    .section-orb.orb-2{
      bottom:-120px; right:-60px; width:420px; height:420px;
      background:radial-gradient(circle, rgba(255,255,255,.14) 0%, transparent 72%);
    }
    @keyframes floatY{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(-10px)}
    }
    @keyframes marqueeScroll{
      0%{transform:translateX(0)}
      100%{transform:translateX(-50%)}
    }
    .marquee-wrapper{
      overflow:hidden;
      background:#0f0f0f;
      padding:20px 0;
      border-top:1px solid #2a2a2a;
      border-bottom:1px solid #2a2a2a;
    }
    .marquee-track{
      display:flex;
      width:max-content;
      animation:marqueeScroll 20s linear infinite;
    }
    .marquee-item{
      font-size:28px;
      font-weight:800;
      margin-right:48px;
      white-space:nowrap;
      color:rgba(255,255,255,.82);
      font-family:var(--heading-font);
    }
    .metrics-strip{
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:18px;
    }
    .metric-card{
      background:#111;
      border:1px solid #2a2a2a;
      border-radius:16px;
      padding:22px;
      box-shadow:10px 10px 0 rgba(0,0,0,.18);
    }
    .metric-value{
      font-family:var(--heading-font);
      font-size:28px;
      color:#fff;
      margin-bottom:8px;
    }
    .metric-label{
      color:#bcbcbc;
      font-size:14px;
    }
    .section-header{
      max-width:820px;
      margin-bottom:42px;
    }
    .section-tag{
      display:inline-flex;
      align-items:center;
      gap:8px;
      border:1px solid rgba(255,255,255,.12);
      color:#d8d8d8;
      background:rgba(255,255,255,.03);
      padding:8px 14px;
      border-radius:999px;
      font-size:12px;
      letter-spacing:.08em;
      text-transform:uppercase;
      margin-bottom:18px;
    }
    .product-layout{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:56px;
      align-items:center;
    }
    .product-layout.reverse .product-visual-col{order:2}
    .product-layout.reverse .product-content-col{order:1}
    .visual-shell{
      position:relative;
      border-radius:22px;
      overflow:hidden;
      border:1px solid #2a2a2a;
      box-shadow:14px 14px 0 rgba(0,0,0,.22);
      background:#111;
      min-height:520px;
      display:flex;
      align-items:center;
      justify-content:center;
    }
    .visual-shell.wide-dark{
      background-image:url('/output/generated-assets/ds_1776881061775_9d7dd198/07-981354fb00.png');
      background-size:cover;
      background-position:center;
    }
    .visual-shell img.feature-banner{
      position:absolute;
      inset:0;
      width:100%;
      height:100%;
      object-fit:cover;
      opacity:.38;
    }
    .browser-frame{
      position:relative;
      width:88%;
      max-width:480px;
      background:#f4f4f4;
      border-radius:18px;
      overflow:hidden;
      box-shadow:0 20px 60px rgba(0,0,0,.45);
      border:1px solid rgba(255,255,255,.1);
      z-index:2;
    }
    .browser-top{
      height:40px;
      background:#e6e6e6;
      display:flex;
      align-items:center;
      padding:0 14px;
      gap:8px;
      border-bottom:1px solid #d6d6d6;
    }
    .browser-dot{
      width:10px;
      height:10px;
      border-radius:50%;
      background:#ccc;
    }
    .browser-dot.red{background:#ff5f57}
    .browser-dot.yellow{background:#febc2e}
    .browser-dot.green{background:#28c840}
    .browser-body img{
      width:100%;
      object-fit:contain;
      background:#fff;
    }
    .css-ai-grid{
      position:absolute;
      inset:0;
      padding:30px;
      display:grid;
      grid-template-columns:repeat(3, 1fr);
      gap:14px;
      align-content:end;
      opacity:.84;
    }
    .css-thumb{
      aspect-ratio:1/1;
      border-radius:14px;
      background:linear-gradient(135deg, rgba(255,107,0,.5), rgba(255,255,255,.08));
      border:1px solid rgba(255,255,255,.08);
      position:relative;
      overflow:hidden;
    }
    .css-thumb::after{
      content:'';
      position:absolute;
      inset:0;
      background:
        radial-gradient(circle at 30% 30%, rgba(255,255,255,.24), transparent 34%),
        linear-gradient(135deg, transparent, rgba(0,0,0,.28));
    }
    .visual-stat{
      position:absolute;
      top:28px;
      right:24px;
      background:rgba(15,15,15,.92);
      border:1px solid rgba(255,255,255,.1);
      border-radius:14px;
      padding:14px 16px;
      z-index:3;
      min-width:160px;
      box-shadow:8px 8px 0 rgba(0,0,0,.2);
    }
    .visual-stat strong{
      display:block;
      font-size:24px;
      color:#fff;
      font-family:var(--heading-font);
      margin-bottom:4px;
    }
    .description-bar{
      border-left:2px solid rgba(255,255,255,.15);
      padding-left:20px;
      margin-bottom:26px;
    }
    .accordion-list{
      display:flex;
      flex-direction:column;
      gap:14px;
      margin-top:18px;
    }
    .accordion-item{
      border:1px solid #2a2a2a;
      border-radius:16px;
      overflow:hidden;
      background:#111;
      box-shadow:10px 10px 0 rgba(0,0,0,.16);
      transition:transform .25s ease, border-color .25s ease;
    }
    .accordion-item:hover{
      transform:translateY(-2px);
      border-color:rgba(255,107,0,.5);
    }
    .accordion-trigger{
      width:100%;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:16px;
      padding:18px 20px;
      border:none;
      background:transparent;
      color:#fff;
      cursor:pointer;
      text-align:left;
    }
    .accordion-left{
      display:flex;
      align-items:flex-start;
      gap:14px;
    }
    .feature-icon{
      width:42px;
      height:42px;
      border-radius:12px;
      background:rgba(255,107,0,.1);
      border:1px solid rgba(255,107,0,.22);
      display:flex;
      align-items:center;
      justify-content:center;
      flex:0 0 auto;
    }
    .accordion-title{
      font-weight:700;
      color:#fff;
      font-size:16px;
      margin-bottom:4px;
    }
    .accordion-content{
      max-height:0;
      overflow:hidden;
      transition:max-height .35s ease;
    }
    .accordion-content.open{
      max-height:240px;
    }
    .accordion-content-inner{
      padding:0 20px 20px 76px;
      color:#bdbdbd;
      line-height:1.7;
    }
    .accordion-plus{
      color:var(--primary);
      font-size:22px;
      font-weight:700;
      line-height:1;
    }
    .product-actions{
      margin-top:28px;
      display:flex;
      gap:12px;
      flex-wrap:wrap;
    }
    .pricing-table{
      display:grid;
      grid-template-columns:repeat(2, 1fr);
      gap:24px;
      align-items:stretch;
    }
    .pricing-card{
      position:relative;
      border-radius:22px;
      padding:28px;
      background:#111;
      border:1px solid #2a2a2a;
      box-shadow:14px 14px 0 rgba(0,0,0,.2);
      display:flex;
      flex-direction:column;
      min-height:100%;
    }
    .pricing-card.highlight{
      border-color:transparent;
    }
    .pricing-card.highlight::before{
      content:'';
      position:absolute;
      inset:-1px;
      border-radius:22px;
      padding:1px;
      background:linear-gradient(135deg, #ff6b00, rgba(255,255,255,.3), #ff6b00);
      -webkit-mask:
        linear-gradient(#fff 0 0) content-box,
        linear-gradient(#fff 0 0);
      -webkit-mask-composite:xor;
      mask-composite:exclude;
      pointer-events:none;
    }
    .price-head{
      margin-bottom:18px;
    }
    .price-name{
      font-family:var(--heading-font);
      font-size:22px;
      margin-bottom:12px;
      color:#fff;
    }
    .price-original{
      color:#8f8f8f;
      text-decoration:line-through;
      min-height:22px;
      display:block;
      margin-bottom:4px;
    }
    .price-current{
      font-size:34px;
      font-family:var(--heading-font);
      color:#fff;
      margin-bottom:10px;
      word-break:break-word;
    }
    .price-badge{
      display:inline-flex;
      align-items:center;
      padding:7px 12px;
      border-radius:999px;
      background:rgba(52,199,89,.14);
      color:#6be28f;
      border:1px solid rgba(52,199,89,.35);
      font-size:12px;
      font-weight:700;
      min-height:34px;
      margin-bottom:18px;
    }
    .price-badge.muted{
      background:rgba(255,255,255,.06);
      color:#d3d3d3;
      border:1px solid rgba(255,255,255,.12);
    }
    .compare-table{
      width:100%;
      border-collapse:collapse;
      margin:12px 0 24px;
      border:1px solid #2a2a2a;
      border-radius:14px;
      overflow:hidden;
    }
    .compare-table tr:not(:last-child) td{
      border-bottom:1px solid #252525;
    }
    .compare-table td{
      padding:14px 14px;
      vertical-align:top;
      color:#d0d0d0;
      font-size:14px;
      background:rgba(255,255,255,.015);
    }
    .compare-table td:first-child{
      width:40px;
      color:#6be28f;
      font-weight:700;
    }
    .cta-full{
      margin-top:auto;
      width:100%;
      border:none;
      border-radius:12px;
      background:#ff6b00;
      color:#fff;
      font-weight:700;
      min-height:52px;
      cursor:pointer;
      transition:transform .25s ease, box-shadow .25s ease;
      box-shadow:0 14px 34px rgba(255,107,0,.2);
    }
    .testimonials-wrap{
      position:relative;
      overflow:hidden;
    }
    .slider-shell{
      overflow:hidden;
      position:relative;
      border-radius:24px;
      border:1px solid #2a2a2a;
      background:#111;
      box-shadow:14px 14px 0 rgba(0,0,0,.18);
    }
    .slider-track{
      display:flex;
      transition:transform .6s cubic-bezier(0.4,0,0.2,1);
    }
    .testimonial-slide{
      min-width:100%;
      padding:42px;
      display:grid;
      grid-template-columns:240px 1fr;
      gap:32px;
      align-items:center;
    }
    .testimonial-media{
      position:relative;
      border-radius:20px;
      overflow:hidden;
      min-height:280px;
      background:#181818;
      border:1px solid rgba(255,255,255,.08);
    }
    .testimonial-media img{
      width:100%;
      height:100%;
      object-fit:cover;
    }
    .testimonial-content{
      position:relative;
    }
    .quote-mark{
      font-size:80px;
      line-height:.8;
      color:#ff6b00;
      font-family:serif;
      margin-bottom:14px;
      opacity:.9;
    }
    .stars{
      color:#ffbf47;
      letter-spacing:3px;
      font-size:18px;
      margin-bottom:16px;
    }
    .testimonial-quote{
      font-size:24px;
      line-height:1.65;
      color:#f4f4f4;
      margin-bottom:22px;
    }
    .author{
      font-weight:700;
      font-size:18px;
      color:#fff;
    }
    .designation{
      color:#9f9f9f;
      margin-top:6px;
    }
    .slider-controls{
      display:flex;
      justify-content:space-between;
      align-items:center;
      margin-top:24px;
      gap:20px;
    }
    .slider-arrows{
      display:flex;
      gap:10px;
    }
    .slider-arrow{
      width:48px;
      height:48px;
      border-radius:12px;
      border:1px solid rgba(255,255,255,.14);
      background:rgba(255,255,255,.06);
      color:#fff;
      cursor:pointer;
      transition:transform .25s ease, box-shadow .25s ease, background .25s ease;
    }
    .dots{
      display:flex;
      justify-content:center;
      gap:8px;
      margin-left:auto;
    }
    .dot{
      width:8px;
      height:8px;
      border-radius:999px;
      background:rgba(255,255,255,.28);
      border:none;
      cursor:pointer;
      transition:all .3s ease;
      padding:0;
    }
    .dot.active{
      width:26px;
      background:#ff6b00;
    }
    .footer{
      background:#090909;
      border-top:1px solid #1f1f1f;
      padding:34px 0;
    }
    .footer-inner{
      display:grid;
      grid-template-columns:1.2fr auto auto;
      gap:20px;
      align-items:center;
    }
    .footer-brand{
      display:flex;
      flex-direction:column;
      gap:8px;
    }
    .footer-brand p{
      font-size:14px;
      color:#9a9a9a;
    }
    .footer-contact{
      color:#d4d4d4;
      font-size:14px;
    }
    .footer-social{
      display:flex;
      gap:10px;
      align-items:center;
    }
    .social-icon{
      width:40px;
      height:40px;
      border-radius:12px;
      border:1px solid rgba(255,255,255,.12);
      display:flex;
      align-items:center;
      justify-content:center;
      color:#fff;
      background:rgba(255,255,255,.04);
    }
    .reveal{
      opacity:0;
      transform:translateY(40px);
      transition:opacity .7s ease, transform .7s ease;
    }
    .reveal.visible{
      opacity:1;
      transform:translateY(0);
    }
    .reveal-delay-1{transition-delay:.1s}
    .reveal-delay-2{transition-delay:.2s}
    .reveal-delay-3{transition-delay:.3s}
    @media (max-width: 1024px){
      .hero-grid,
      .product-layout,
      .testimonial-slide,
      .pricing-table,
      .footer-inner,
      .metrics-strip{
        grid-template-columns:1fr;
      }
      .product-layout.reverse .product-visual-col,
      .product-layout.reverse .product-content-col{
        order:initial;
      }
      .hero-grid{min-height:auto;padding:42px 0 10px}
      .hero-visual{min-height:420px}
      .testimonial-slide{padding:28px}
      .nav-inner{grid-template-columns:1fr auto;gap:14px}
      .nav-right{justify-self:end}
      .nav .animated-cta{display:none}
    }
    @media (max-width: 767px){
      .container{width:min(100% - 24px, 1200px)}
      .section{padding:68px 0}
      .nav-inner{min-height:70px}
      .product-logo{font-size:16px}
      .hero-sub{font-size:16px}
      .hero-card{max-width:100%}
      .floating-panel{display:none}
      .chip-row{gap:10px}
      .chip{font-size:12px;padding:8px 12px}
      .visual-shell{min-height:420px}
      .browser-frame{width:92%}
      .accordion-trigger{padding:16px}
      .accordion-content-inner{padding:0 16px 18px 16px}
      .accordion-left{gap:12px}
      .testimonial-quote{font-size:20px}
      .slider-controls{flex-wrap:wrap}
      .footer-inner{grid-template-columns:1fr}
    }
  `;

  const marqueeItems = [
    'Seedream 4.5',
    'Seedance 1.5 Pro',
    'AI Image Generation',
    'AI Video Generation',
    'ByteDance Models',
    'Multimodal Creation'
  ];

  return (
    <div className="landing-page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className={`nav ${isScrolled ? 'scrolled' : ''}`}>
        <div className="container nav-inner">
          <div className="product-logo">
            <span className="product-logo-dot" />
            <span>Seedream 4.5 and Seedance 1.5 Pro</span>
          </div>

          <div className="nav-right">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              alt="Techjockey"
              style={{ height: '28px', opacity: 0.9 }}
            />
          </div>

          <a href="#pricing" className="animated-cta">
            Get Quote
          </a>
        </div>
      </nav>

      <section className="section section-hero precision-lines">
        <div className="section-orb orb-1" />
        <div className="section-orb orb-2" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="section-tag reveal">AI Image Generation & AI Video Generation</div>
            <h1 className="reveal reveal-delay-1">
              Create High-Quality AI Images & Videos with{' '}
              <span className="gradient-text">ByteDance Generative Models</span>
            </h1>
            <p className="hero-sub reveal reveal-delay-2">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation)
              and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by
              ByteDance for high-quality visual content creation.
            </p>
            <p className="hero-support reveal reveal-delay-3">
              From text prompts, images, or scripts, generate professional visuals and videos with
              powerful multimodal AI systems.
            </p>

            <div className="chip-row reveal reveal-delay-3">
              {[
                { label: 'AI Image Generation', icon: <IconSpark /> },
                { label: 'Text-to-Video', icon: <IconVideo /> },
                { label: 'Enterprise Ready', icon: <IconShield /> },
                { label: 'Multimodal Workflows', icon: <IconLayers /> }
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  {chip.icon}
                  <span>{chip.label}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta-row reveal reveal-delay-3">
              <a href="#products" className="animated-cta">
                Generate with AI
              </a>
              <a href="#testimonials" className="ghost-btn">
                See Success Stories
              </a>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-2">
            <div className="hero-card">
              <img
                src="/output/generated-assets/ds_1776881061775_9d7dd198/05-10455211a0.png"
                alt="Seedream and Seedance visual"
              />
            </div>
            <div className="floating-panel one">
              <div className="panel-label">Output Quality</div>
              <div className="panel-value">Up to 4K</div>
            </div>
            <div className="floating-panel two">
              <div className="panel-label">Generation Mode</div>
              <div className="panel-value">Image + Video</div>
            </div>
            <div className="floating-panel three">
              <div className="panel-label">Workflow</div>
              <div className="panel-value">Prompt → Asset</div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <span className="gradient-text">★</span>
            </span>
          ))}
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          <div className="metrics-strip reveal">
            <div className="metric-card">
              <div className="metric-value">2</div>
              <div className="metric-label">Advanced ByteDance generative models</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">4K</div>
              <div className="metric-label">High-resolution image generation support</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">10×</div>
              <div className="metric-label">Faster inference for video workflows</div>
            </div>
            <div className="metric-card">
              <div className="metric-value">Multi</div>
              <div className="metric-label">Text, image, script, audio-visual generation modes</div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section section-darker">
        <div className="section-orb orb-1" />
        <div className="container">
          {products.map((product, productIdx) => (
            <div key={productIdx} style={{ marginBottom: productIdx !== products.length - 1 ? '88px' : 0 }}>
              <div className={`product-layout ${productIdx % 2 === 1 ? 'reverse' : ''}`}>
                <div className="product-visual-col reveal">
                  <div className="visual-shell">
                    {productIdx === 0 ? (
                      <>
                        <img
                          src={product.visual}
                          alt={product.name}
                          className="feature-banner"
                          style={{ objectFit: 'cover' }}
                        />
                        <div className="browser-frame">
                          <div className="browser-top">
                            <span className="browser-dot red" />
                            <span className="browser-dot yellow" />
                            <span className="browser-dot green" />
                          </div>
                          <div className="browser-body">
                            <img src={product.image} alt={`${product.name} interface`} />
                          </div>
                        </div>
                        <div className="visual-stat">
                          <strong>1K–4K</strong>
                          <span style={{ color: '#bcbcbc', fontSize: '13px' }}>Native output range</span>
                        </div>
                        <div className="css-ai-grid">
                          {[...Array(6)].map((_, i) => (
                            <div className="css-thumb" key={i} />
                          ))}
                        </div>
                      </>
                    ) : (
                      <>
                        <img
                          src={product.image}
                          alt={product.name}
                          className="feature-banner"
                          style={{ opacity: 1, objectFit: 'cover' }}
                        />
                        <div className="visual-stat">
                          <strong>Sync AI</strong>
                          <span style={{ color: '#bcbcbc', fontSize: '13px' }}>Video + audio together</span>
                        </div>
                        <div
                          style={{
                            position: 'absolute',
                            left: '24px',
                            right: '24px',
                            bottom: '24px',
                            background: 'rgba(15,15,15,.84)',
                            border: '1px solid rgba(255,255,255,.1)',
                            borderRadius: '16px',
                            padding: '18px',
                            boxShadow: '10px 10px 0 rgba(0,0,0,.18)'
                          }}
                        >
                          <div
                            style={{
                              display: 'grid',
                              gridTemplateColumns: 'repeat(3,1fr)',
                              gap: '10px'
                            }}
                          >
                            {['Scene Build', 'Lip Sync', 'Camera Move'].map((t, i) => (
                              <div
                                key={i}
                                style={{
                                  padding: '12px',
                                  borderRadius: '12px',
                                  background: 'rgba(255,255,255,.05)',
                                  border: '1px solid rgba(255,255,255,.08)',
                                  color: '#fff',
                                  fontSize: '13px',
                                  textAlign: 'center'
                                }}
                              >
                                {t}
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>

                <div className="product-content-col">
                  <div className="section-tag reveal">{product.label}</div>
                  <h2 className="reveal reveal-delay-1">
                    {product.headline.split(product.name).length > 1 ? (
                      <>
                        {product.headline.split(product.name)[0]}
                        <span className="gradient-text">{product.name}</span>
                        {product.headline.split(product.name)[1]}
                      </>
                    ) : (
                      product.headline
                    )}
                  </h2>
                  <div className="description-bar reveal reveal-delay-2">
                    <p>{product.description}</p>
                  </div>

                  <div className="accordion-list">
                    {product.features.map((feature, featureIdx) => {
                      const key = `${productIdx}-${featureIdx}`;
                      const isOpen = !!openAccordions[key];
                      return (
                        <div className="accordion-item reveal" key={featureIdx}>
                          <button
                            className="accordion-trigger"
                            onClick={() => toggleAccordion(productIdx, featureIdx)}
                            aria-expanded={isOpen}
                          >
                            <div className="accordion-left">
                              <div className="feature-icon">{featureIcon(featureIdx)}</div>
                              <div>
                                <div className="accordion-title">{feature.title}</div>
                              </div>
                            </div>
                            <span className="accordion-plus">{isOpen ? '−' : '+'}</span>
                          </button>
                          <div className={`accordion-content ${isOpen ? 'open' : ''}`}>
                            <div className="accordion-content-inner">{feature.description}</div>
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  <div className="product-actions reveal reveal-delay-3">
                    <a href="#pricing" className="animated-cta">
                      {product.cta}
                    </a>
                    <a href="#testimonials" className="ghost-btn">
                      View Reviews
                    </a>
                  </div>
                </div>
              </div>

              {productIdx !== products.length - 1 && (
                <div style={{ marginTop: '56px' }}>
                  <div className="marquee-wrapper">
                    <div className="marquee-track">
                      {[...Array(6)].map((_, i) => (
                        <span key={i} className="marquee-item">
                          {productIdx === 0 ? 'IMAGE GENERATION' : 'VIDEO GENERATION'}{' '}
                          <span className="gradient-text">★</span>
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      <section id="pricing" className="section section-darker">
        <div className="section-orb orb-2" />
        <div className="container">
          <div className="section-header">
            <div className="section-tag reveal">Pricing</div>
            <h2 className="reveal reveal-delay-1">
              Compare plans for <span className="gradient-text">image and video generation</span>
            </h2>
            <p className="reveal reveal-delay-2">
              Choose the right generative model based on your output needs, production style, and
              workflow scale.
            </p>
          </div>

          <div className="pricing-table">
            {pricingPlans.map((plan, i) => (
              <div className={`pricing-card ${i === 1 ? 'highlight' : ''} reveal`} key={i}>
                <div className="price-head">
                  <div className="price-name">{plan.name}</div>
                  <span className="price-original">
                    {plan.originalPrice || 'Custom enterprise quotation'}
                  </span>
                  <div className="price-current">{plan.price || 'Contact for Pricing'}</div>
                  <div className={`price-badge ${plan.discount ? '' : 'muted'}`}>
                    {plan.discount || (i === 1 ? 'Popular for video teams' : 'Custom quote available')}
                  </div>
                </div>

                <table className="compare-table">
                  <tbody>
                    {plan.includes.map((item, idx) => (
                      <tr key={idx}>
                        <td>✓</td>
                        <td>{item}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <button className="cta-full">{plan.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="testimonials" className="section section-dark">
        <div className="container">
          <div className="section-header">
            <div className="section-tag reveal">Testimonials</div>
            <h2 className="reveal reveal-delay-1">
              What teams say about <span className="gradient-text">Seedream & Seedance</span>
            </h2>
            <p className="reveal reveal-delay-2">
              Creative and marketing professionals use these models to accelerate visual production
              without sacrificing quality.
            </p>
          </div>

          <div className="testimonials-wrap reveal reveal-delay-2">
            <div className="slider-shell">
              <div
                className="slider-track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div className="testimonial-slide" key={i}>
                    <div className="testimonial-media">
                      <img src={t.image} alt={t.author} />
                    </div>
                    <div className="testimonial-content">
                      <div className="quote-mark">❝</div>
                      <div className="stars">★★★★★</div>
                      <div className="testimonial-quote">{t.quote}</div>
                      <div className="author">{t.author}</div>
                      <div className="designation">{t.designation}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="slider-controls">
              <div className="slider-arrows">
                <button className="slider-arrow" onClick={prevSlide} aria-label="Previous testimonial">
                  ←
                </button>
                <button className="slider-arrow" onClick={nextSlide} aria-label="Next testimonial">
                  →
                </button>
              </div>

              <div className="dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div className="footer-brand">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              alt="Techjockey"
              style={{ height: '30px', width: 'auto' }}
            />
            <p>
              Discover, compare, and evaluate enterprise software solutions with Techjockey.
            </p>
          </div>

          <div className="footer-contact">Email: sales@techjockey.com</div>

          <div className="footer-social">
            <a href="/" className="social-icon" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M13.5 8H16V4.5H13.5C10.7 4.5 9 6.2 9 9.3V11H6V14.5H9V21H12.8V14.5H15.8L16.3 11H12.8V9.8C12.8 8.7 13.1 8 13.5 8Z" />
              </svg>
            </a>
            <a href="/" className="social-icon" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M6.94 8.5A1.94 1.94 0 1 0 6.94 4.62A1.94 1.94 0 1 0 6.94 8.5ZM5.3 9.98H8.58V19.5H5.3V9.98ZM10.63 9.98H13.78V11.28H13.83C14.27 10.45 15.33 9.58 16.94 9.58C20.28 9.58 20.9 11.78 20.9 14.64V19.5H17.62V15.2C17.62 14.18 17.6 12.87 16.2 12.87C14.78 12.87 14.56 13.98 14.56 15.12V19.5H10.63V9.98Z" />
              </svg>
            </a>
            <a href="/" className="social-icon" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M7 2H17C19.76 2 22 4.24 22 7V17C22 19.76 19.76 22 17 22H7C4.24 22 2 19.76 2 17V7C2 4.24 4.24 2 7 2ZM16.75 4A1.25 1.25 0 1 0 16.75 6.5A1.25 1.25 0 1 0 16.75 4ZM12 7C9.24 7 7 9.24 7 12C7 14.76 9.24 17 12 17C14.76 17 17 14.76 17 12C17 9.24 14.76 7 12 7ZM12 9C13.66 9 15 10.34 15 12C15 13.66 13.66 15 12 15C10.34 15 9 13.66 9 12C9 10.34 10.34 9 12 9Z" />
              </svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;