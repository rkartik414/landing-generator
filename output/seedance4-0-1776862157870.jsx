import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const [activeAccordion, setActiveAccordion] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const sectionRefs = useRef([]);

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      author: 'Vaishali Saxena',
      designation: 'Creative Director',
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      author: 'Vihaan Pandey',
      designation: 'Video Producer',
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      author: 'Anurag Malhotra',
      designation: 'Art Director',
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream and Seedance. The free demo helped us clearly understand the capabilities before moving forward.',
      author: 'Ritika Mehra',
      designation: 'Marketing Manager',
    },
  ];

  const products = [
    {
      name: 'Seedream 4.5',
      label: 'AI Image Generation',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'A high-performance multimodal image generation system built to create high-resolution, high-fidelity images from text prompts and visual inputs. It unifies text-to-image synthesis, image editing, and multi-image composition in one framework.',
      cta: 'Request Demo',
      image: '/output/generated-assets/ds_1776861874049_501413e2/02-3965757185.jpeg',
      features: [
        'Advanced Text–Image Alignment',
        'High-Resolution Output up to 1K–4K',
        'Superior Typographic Rendering',
        'Multi-Image Composition with Identity Preservation',
        'Strong Structural Fidelity',
      ],
    },
    {
      name: 'Seedance 1.5 Pro',
      label: 'AI Video Generation',
      headline: 'AI Video Generation with Seedance 1.5 Pro',
      description:
        'A next-generation native audio-visual generation model that creates video and sound together. Built on a dual-branch diffusion transformer architecture for coherent video, synchronized audio, and cinematic output.',
      cta: 'Explore Capabilities',
      image: '/output/generated-assets/ds_1776861874049_501413e2/03-2c9cc1df82.jpeg',
      features: [
        'Text-to-Video Generation',
        'Audio-Visual Synchronization',
        'Multilingual Lip-Sync',
        'Cinematic Camera Control',
        '10× Faster Inference',
        'Narrative Coherence for Pro Storytelling',
      ],
    },
  ];

  useEffect(() => {
    const revealEls = document.querySelectorAll('.reveal');
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.12 }
    );

    revealEls.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const nextTestimonial = () =>
    setTestimonialIndex((prev) => (prev + 1) % testimonials.length);

  const prevTestimonial = () =>
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  const IconSpark = () => (
    <svg viewBox="0 0 24 24" className="feature-icon" aria-hidden="true">
      <path
        fill={accent}
        d="M12 2l1.9 5.2L19 9l-5.1 1.8L12 16l-1.9-5.2L5 9l5.1-1.8L12 2zm6.5 12l.9 2.6L22 17.5l-2.6.9-.9 2.6-.9-2.6-2.6-.9 2.6-.9.9-2.6zM6 14l1.2 3.1L10.3 18l-3.1.9L6 22l-1.2-3.1L1.7 18l3.1-.9L6 14z"
      />
    </svg>
  );

  const css = `
    :root{
      --accent:${accent};
      --bg:#1a1a1a;
      --bg-deep:#111111;
      --bg-mid:#151515;
      --text:#f5f7fb;
      --muted:#b9c0cc;
      --line:rgba(255,255,255,0.1);
      --glass:rgba(255,255,255,0.08);
      --glass-strong:rgba(255,255,255,0.12);
      --success:#22c55e;
      --shadow:0 18px 50px rgba(0,0,0,0.35);
      --radius:22px;
      --radius-sm:16px;
      --container:1200px;
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:var(--bg);color:var(--text);font-family:'Inter',sans-serif}
    a{text-decoration:none;color:inherit}
    img{max-width:100%;display:block}
    .landing-page{
      background:
        radial-gradient(circle at 20% 10%, rgba(255,107,0,0.16), transparent 24%),
        radial-gradient(circle at 80% 20%, rgba(255,107,0,0.08), transparent 20%),
        linear-gradient(180deg,#1a1a1a 0%, #111111 100%);
      overflow:hidden;
    }
    .container{
      width:min(var(--container), calc(100% - 32px));
      margin:0 auto;
      position:relative;
      z-index:2;
    }
    .section{padding:88px 0; position:relative}
    .section::before{
      content:"";
      position:absolute;
      inset:0;
      pointer-events:none;
      background-image: radial-gradient(rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 18px 18px;
      opacity:.18;
    }
    .hero{background:linear-gradient(180deg,#1a1a1a 0%, #111111 100%)}
    .trust{background:#151515}
    .products{background:#111111}
    .why-techjockey{background:#f5f5f5; color:#111}
    .pricing{background:#111111}
    .testimonials{background:#151515}
    .news{background:#1a1a1a}
    .navbar{
      position:sticky;
      top:0;
      z-index:50;
      backdrop-filter:blur(18px);
      background:rgba(15,15,15,0.78);
      border-bottom:1px solid rgba(255,255,255,0.08);
    }
    .nav-inner{
      min-height:78px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:16px;
    }
    .nav-left{display:flex; align-items:center; gap:14px;}
    .product-badge{
      width:44px;height:44px;border-radius:14px;
      background:linear-gradient(135deg, rgba(255,107,0,.22), rgba(255,107,0,.08));
      border:1px solid rgba(255,107,0,.35);
      display:grid;place-items:center;
      box-shadow:0 0 0 6px rgba(255,107,0,.06);
      flex-shrink:0;
    }
    .brand-stack{display:flex; flex-direction:column; line-height:1.1}
    .brand-stack strong{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:15px; font-weight:800; color:#fff;
    }
    .brand-stack span{
      font-size:12px; color:var(--muted);
    }
    .nav-right{
      display:flex; align-items:center; gap:14px; margin-left:auto;
    }
    .techjockey-logo{
      height:34px; width:auto; opacity:.95;
      filter:brightness(1.2);
    }
    .btn{
      display:inline-flex; align-items:center; justify-content:center;
      gap:10px; border:none; cursor:pointer;
      padding:14px 22px; border-radius:14px; font-weight:700;
      transition:transform .25s ease, box-shadow .25s ease, background .25s ease, color .25s ease;
      font-size:15px;
    }
    .btn:hover{transform:translateY(-2px); box-shadow:0 14px 28px rgba(0,0,0,0.24)}
    .btn-primary{
      background:linear-gradient(135deg,var(--accent), #ff8c3a);
      color:#fff;
      box-shadow:0 10px 24px rgba(255,107,0,.25);
    }
    .btn-secondary{
      background:rgba(255,255,255,0.08); color:#fff; border:1px solid rgba(255,255,255,.12);
    }
    .btn-dark{
      background:#111; color:#fff;
    }
    .hero-grid{
      display:grid; grid-template-columns:1.1fr .95fr; gap:42px; align-items:center;
      min-height:calc(100vh - 78px);
      padding:42px 0 24px;
    }
    .hero-copy h1{
      margin:0 0 20px;
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:clamp(48px, 6vw, 68px);
      line-height:1.03;
      letter-spacing:-0.03em;
      color:#fff;
    }
    .hero-copy p{
      margin:0 0 18px;
      color:#d2d8e2;
      font-size:18px; line-height:1.75;
      max-width:680px;
    }
    .hero-support{
      color:#aeb6c3;
      font-size:16px;
      margin-bottom:28px;
    }
    .hero-cta{display:flex; gap:14px; flex-wrap:wrap; margin-bottom:26px}
    .hero-points{
      display:grid; grid-template-columns:repeat(3,minmax(0,1fr)); gap:14px;
      margin-top:8px;
    }
    .hero-point{
      background:var(--glass);
      border:1px solid rgba(255,255,255,0.1);
      border-radius:16px;
      padding:14px 16px;
      backdrop-filter:blur(12px);
    }
    .hero-point strong{display:block; font-size:15px; color:#fff; margin-bottom:6px}
    .hero-point span{font-size:13px; color:var(--muted); line-height:1.5}
    .hero-visual{
      position:relative;
      display:flex;
      align-items:center;
      justify-content:center;
      min-height:520px;
    }
    .hero-orb,
    .hero-orb.two{
      position:absolute; border-radius:999px; filter:blur(50px); opacity:.65;
      pointer-events:none;
    }
    .hero-orb{
      width:220px;height:220px;background:rgba(255,107,0,.24); top:4%; right:10%;
      animation:floatOrb 8s ease-in-out infinite;
    }
    .hero-orb.two{
      width:180px;height:180px;background:rgba(255,160,80,.18); left:0; bottom:10%;
      animation:floatOrb 10s ease-in-out infinite reverse;
    }
    .visual-shell{
      width:100%;
      border-radius:24px;
      background:linear-gradient(180deg, rgba(255,255,255,0.08), rgba(255,255,255,0.04));
      border:1px solid rgba(255,255,255,0.12);
      backdrop-filter:blur(16px);
      padding:14px;
      box-shadow:var(--shadow);
      position:relative;
      overflow:hidden;
    }
    .browser-bar{
      display:flex; align-items:center; gap:8px; padding:4px 6px 14px;
    }
    .dot{width:10px;height:10px;border-radius:50%}
    .dot.red{background:#ff5f57}
    .dot.yellow{background:#ffbd2f}
    .dot.green{background:#28ca42}
    .hero-img{
      width:100%;
      max-height:480px;
      object-fit:contain;
      border-radius:12px;
      border:1px solid rgba(255,255,255,0.06);
    }
    .floating-chip{
      position:absolute; padding:12px 14px; border-radius:14px;
      background:rgba(17,17,17,0.82);
      border:1px solid rgba(255,255,255,0.1);
      color:#fff; font-size:13px; line-height:1.4;
      box-shadow:0 12px 24px rgba(0,0,0,.24);
      backdrop-filter:blur(10px);
      animation:floatCard 7s ease-in-out infinite;
    }
    .chip-1{top:34px; left:-12px}
    .chip-2{right:-12px; bottom:72px; animation-delay:1.4s}
    .chip-3{left:32px; bottom:8px; animation-delay:2.2s}
    .metrics-strip{
      display:grid; grid-template-columns:repeat(4,minmax(0,1fr)); gap:18px;
      margin-top:10px;
    }
    .metric-card{
      background:rgba(255,255,255,0.05);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:18px; padding:20px;
      text-align:center;
      backdrop-filter:blur(10px);
      transition:transform .25s ease, box-shadow .25s ease;
    }
    .metric-card:hover{
      transform:translateY(-4px);
      box-shadow:0 18px 36px rgba(0,0,0,.28), 0 0 0 1px rgba(255,107,0,.18) inset;
    }
    .metric-number{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:30px; font-weight:800; color:#fff;
      margin-bottom:6px;
    }
    .metric-label{color:#bfc6d3; font-size:14px}
    .section-header{
      max-width:760px;
      margin:0 auto 42px;
      text-align:center;
    }
    .section-header.left{text-align:left; margin-left:0}
    .section-header h2{
      margin:0 0 14px;
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:clamp(32px,4vw,46px);
      line-height:1.1;
      letter-spacing:-0.03em;
    }
    .section-header p{
      margin:0;
      font-size:17px;
      line-height:1.75;
      color:inherit;
      opacity:.82;
    }
    .products-layout{
      display:grid; grid-template-columns:420px 1fr; gap:28px; align-items:start;
    }
    .accordion-list{
      display:flex; flex-direction:column; gap:14px;
    }
    .accordion-item{
      background:rgba(255,255,255,0.05);
      border:1px solid rgba(255,255,255,0.09);
      border-radius:20px;
      overflow:hidden;
      transition:all .3s ease, box-shadow .3s ease;
      box-shadow:0 0 0 rgba(0,0,0,0);
    }
    .accordion-item.active{
      border-color:rgba(255,107,0,.36);
      box-shadow:0 18px 45px rgba(0,0,0,.22), 0 0 0 1px rgba(255,107,0,.12) inset;
    }
    .accordion-head{
      width:100%;
      background:none;
      color:#fff;
      border:none;
      padding:22px 22px 18px;
      text-align:left;
      display:flex;
      justify-content:space-between;
      gap:14px;
      cursor:pointer;
    }
    .accordion-head-main small{
      display:inline-block;
      color:var(--accent);
      font-weight:700;
      text-transform:uppercase;
      letter-spacing:.08em;
      margin-bottom:8px;
    }
    .accordion-head-main h3{
      margin:0;
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:25px;
    }
    .accordion-head-main p{
      margin:10px 0 0;
      color:#bcc4cf;
      line-height:1.7;
      font-size:15px;
    }
    .accordion-toggle{
      width:42px;height:42px;border-radius:12px;
      background:rgba(255,255,255,.08);
      display:grid;place-items:center; flex-shrink:0;
      font-size:24px; color:var(--accent);
    }
    .accordion-body{
      max-height:0; overflow:hidden; transition:max-height .4s ease, padding .4s ease;
      padding:0 22px;
    }
    .accordion-item.active .accordion-body{
      max-height:420px; padding:0 22px 22px;
    }
    .feature-list{display:grid; gap:12px; margin-top:8px}
    .feature-row{
      display:flex; align-items:flex-start; gap:12px;
      color:#eef2f7; font-size:15px; line-height:1.6;
      background:rgba(255,255,255,0.04);
      border:1px solid rgba(255,255,255,0.06);
      border-radius:14px; padding:12px 14px;
    }
    .feature-icon{width:20px; height:20px; margin-top:2px; flex-shrink:0}
    .product-visual-panel{
      position:sticky;
      top:104px;
    }
    .visual-card{
      background:linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.04));
      border:1px solid rgba(255,255,255,0.1);
      border-radius:24px;
      padding:16px;
      box-shadow:var(--shadow);
      backdrop-filter:blur(16px);
      overflow:hidden;
      transition:box-shadow .3s ease, transform .3s ease;
    }
    .visual-card:hover{
      transform:translateY(-3px);
      box-shadow:0 24px 60px rgba(0,0,0,.32), 0 0 30px rgba(255,107,0,.08);
    }
    .visual-meta{
      display:flex; justify-content:space-between; align-items:center; gap:12px;
      margin:6px 2px 16px;
    }
    .pill{
      display:inline-flex; align-items:center; gap:8px;
      padding:8px 12px; border-radius:999px;
      background:rgba(255,107,0,.12);
      color:#ffd8bf; border:1px solid rgba(255,107,0,.22);
      font-size:13px; font-weight:700;
    }
    .visual-meta span{color:#b8bfca; font-size:14px}
    .browser-frame{
      border-radius:18px; overflow:hidden;
      border:1px solid rgba(255,255,255,0.09);
      background:#0f0f0f;
    }
    .browser-frame.light{background:#fff}
    .panel-insights{
      display:grid; grid-template-columns:repeat(3,1fr); gap:14px; margin-top:16px;
    }
    .insight{
      background:rgba(255,255,255,0.05);
      border:1px solid rgba(255,255,255,.08);
      border-radius:16px;
      padding:16px;
    }
    .insight strong{
      display:block; font-family:'Plus Jakarta Sans',sans-serif; font-size:22px; margin-bottom:6px;
    }
    .insight span{
      color:#b9c0cb; font-size:13px; line-height:1.5;
    }
    .light-grid{
      display:grid;
      grid-template-columns:repeat(4,1fr);
      gap:18px;
      margin-top:24px;
    }
    .light-card{
      background:#fff;
      border:1px solid rgba(0,0,0,0.08);
      border-radius:18px;
      padding:22px;
      box-shadow:0 12px 30px rgba(0,0,0,0.08);
      transition:transform .25s ease, box-shadow .25s ease;
    }
    .light-card:hover{
      transform:translateY(-4px);
      box-shadow:0 16px 34px rgba(0,0,0,0.12);
    }
    .light-card h4{
      margin:14px 0 10px;
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:18px;
      color:#111;
    }
    .light-card p{
      margin:0;
      color:#555;
      line-height:1.7;
      font-size:14px;
    }
    .pricing-grid{
      display:grid;
      grid-template-columns:repeat(2,1fr);
      gap:24px;
      align-items:stretch;
    }
    .pricing-card{
      position:relative;
      background:linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.04));
      border:1px solid rgba(255,255,255,0.1);
      border-radius:26px;
      padding:28px;
      box-shadow:var(--shadow);
      backdrop-filter:blur(14px);
      display:flex;
      flex-direction:column;
      min-height:100%;
    }
    .pricing-card.featured{
      border-color:rgba(255,107,0,.42);
      box-shadow:0 22px 56px rgba(0,0,0,.32), 0 0 0 1px rgba(255,107,0,.18) inset;
    }
    .badge-green{
      position:absolute;
      top:20px; right:20px;
      background:rgba(34,197,94,0.16);
      color:#89f0ab;
      border:1px solid rgba(34,197,94,0.32);
      font-weight:800;
      padding:8px 12px;
      border-radius:999px;
      font-size:12px;
      text-transform:uppercase;
      letter-spacing:.06em;
    }
    .pricing-card h3{
      margin:0 0 12px;
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:28px;
    }
    .pricing-sub{
      color:#bac2cd;
      font-size:15px;
      line-height:1.7;
      margin-bottom:18px;
    }
    .price-wrap{
      margin:8px 0 18px;
      display:flex;
      align-items:flex-end;
      gap:12px;
      flex-wrap:wrap;
    }
    .old-price{
      color:#7f8896;
      text-decoration:line-through;
      font-size:18px;
    }
    .new-price{
      font-family:'Plus Jakarta Sans',sans-serif;
      font-size:40px;
      line-height:1;
      font-weight:800;
      color:#fff;
    }
    .price-note{
      color:#9ea7b4; font-size:14px;
    }
    .check-list{
      display:grid; gap:12px;
      margin:18px 0 24px;
    }
    .check-item{
      display:flex; gap:12px; align-items:flex-start;
      padding:12px 14px;
      background:rgba(255,255,255,0.04);
      border:1px solid rgba(255,255,255,0.07);
      border-radius:14px;
      color:#eef3f8;
      line-height:1.6;
      font-size:15px;
    }
    .check-icon{
      width:22px;height:22px; flex-shrink:0;
      color:var(--success);
    }
    .btn-full{width:100%; margin-top:auto}
    .testimonial-wrap{
      max-width:930px; margin:0 auto;
      position:relative;
    }
    .testimonial-card{
      background:linear-gradient(180deg, rgba(255,255,255,0.07), rgba(255,255,255,0.04));
      border:1px solid rgba(255,255,255,0.1);
      border-radius:28px;
      padding:34px;
      box-shadow:var(--shadow);
      min-height:320px;
      display:flex;
      flex-direction:column;
      justify-content:space-between;
    }
    .quote-mark{
      font-size:60px;
      line-height:1;
      color:var(--accent);
      font-family:'Plus Jakarta Sans',sans-serif;
      margin-bottom:8px;
    }
    .stars{
      color:#f7c948;
      letter-spacing:2px;
      font-size:20px;
      margin-bottom:16px;
    }
    .testimonial-text{
      font-size:22px;
      line-height:1.8;
      color:#edf1f5;
      margin:0 0 22px;
    }
    .author{
      font-weight:800;
      font-size:18px;
      color:#fff;
      margin-bottom:4px;
    }
    .designation{
      color:#9fa8b6;
      font-size:15px;
    }
    .testimonial-nav{
      display:flex; justify-content:center; gap:12px; margin-top:22px;
    }
    .nav-btn{
      width:48px;height:48px;border-radius:14px;
      background:rgba(255,255,255,0.08);
      border:1px solid rgba(255,255,255,0.12);
      color:#fff; cursor:pointer;
      transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
      font-size:20px;
    }
    .nav-btn:hover{
      transform:translateY(-2px);
      box-shadow:0 12px 28px rgba(0,0,0,.2);
      border-color:rgba(255,107,0,.35);
    }
    .dots-row{
      display:flex; justify-content:center; gap:8px; margin-top:14px;
    }
    .dots-row span{
      width:10px;height:10px;border-radius:999px;background:rgba(255,255,255,.18);
      transition:all .25s ease;
    }
    .dots-row span.active{width:30px; background:var(--accent)}
    .reveal{
      opacity:0;
      transform:translateY(34px);
      transition:opacity .75s ease, transform .75s ease;
    }
    .reveal.revealed{
      opacity:1;
      transform:translateY(0);
    }
    .stagger > *{
      opacity:0;
      transform:translateY(20px);
      animation:staggerIn .7s ease forwards;
    }
    .stagger > *:nth-child(2){animation-delay:.1s}
    .stagger > *:nth-child(3){animation-delay:.2s}
    .stagger > *:nth-child(4){animation-delay:.3s}
    .stagger > *:nth-child(5){animation-delay:.4s}
    .footer{
      background:#0e0e0e;
      border-top:1px solid rgba(255,255,255,0.08);
      padding:34px 0;
    }
    .footer-grid{
      display:flex; justify-content:space-between; gap:18px; align-items:center; flex-wrap:wrap;
    }
    .footer-left{
      display:flex; align-items:center; gap:14px;
    }
    .footer-copy{
      color:#b3bcc7; font-size:14px; line-height:1.7;
    }
    .footer-links{
      display:flex; gap:16px; flex-wrap:wrap; color:#d8dee7; font-size:14px;
    }
    .footer-links a{opacity:.85}
    .footer-links a:hover{opacity:1; color:var(--accent)}
    @keyframes floatOrb{
      0%,100%{transform:translateY(0) scale(1)}
      50%{transform:translateY(-12px) scale(1.05)}
    }
    @keyframes floatCard{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(-10px)}
    }
    @keyframes staggerIn{
      to{opacity:1; transform:translateY(0)}
    }
    @media (max-width: 1100px){
      .hero-grid, .products-layout, .pricing-grid{grid-template-columns:1fr}
      .product-visual-panel{position:relative; top:0}
      .hero-points, .metrics-strip, .light-grid, .panel-insights{grid-template-columns:repeat(2,1fr)}
    }
    @media (max-width: 767px){
      .section{padding:72px 0}
      .nav-inner{min-height:72px}
      .brand-stack span{display:none}
      .nav-right{gap:10px}
      .techjockey-logo{height:28px}
      .btn{padding:13px 18px}
      .hero-grid{min-height:auto; padding:28px 0 12px}
      .hero-copy p{font-size:16px}
      .hero-points, .metrics-strip, .light-grid, .panel-insights{grid-template-columns:1fr}
      .floating-chip{display:none}
      .accordion-head{padding:18px}
      .accordion-item.active .accordion-body{padding:0 18px 18px}
      .testimonial-card{padding:24px; min-height:auto}
      .testimonial-text{font-size:18px}
      .new-price{font-size:34px}
      .footer-grid{align-items:flex-start}
    }
  `;

  return (
    <div className="landing-page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=Inter:wght@400;500;600&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="navbar">
        <div className="container nav-inner">
          <div className="nav-left">
            <div className="product-badge">
              <svg viewBox="0 0 24 24" width="24" height="24" aria-hidden="true">
                <path
                  fill={accent}
                  d="M12 2l2.2 5.8L20 10l-5.8 2.2L12 18l-2.2-5.8L4 10l5.8-2.2L12 2z"
                />
              </svg>
            </div>
            <div className="brand-stack">
              <strong>Seedream 4.5 &amp; Seedance 1.5 Pro</strong>
              <span>ByteDance Generative AI for image and video creation</span>
            </div>
          </div>

          <div className="nav-right">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              alt="Techjockey"
              className="techjockey-logo"
            />
            <button className="btn btn-primary" onClick={() => scrollToSection('pricing')}>
              Generate with AI
            </button>
          </div>
        </div>
      </nav>

      <section className="section hero" id="hero">
        <div className="container hero-grid">
          <div className="hero-copy stagger reveal">
            <h1>
              Create High-Quality AI Images &amp; Videos with{' '}
              <span style={{ color: accent }}>Seedream 4.5 and Seedance 1.5 Pro</span>
            </h1>
            <p>
              Unlock the power of next-generation generative AI with ByteDance foundation
              models built for premium visual content creation. Generate professional image
              and video outputs from prompts, images, and scripts.
            </p>
            <div className="hero-support">
              From concept art and posters to cinematic video storytelling with synchronized
              audio, these multimodal models are built for modern creative teams.
            </div>

            <div className="hero-cta">
              <button className="btn btn-primary" onClick={() => scrollToSection('pricing')}>
                Generate with AI
              </button>
              <button className="btn btn-secondary" onClick={() => scrollToSection('products')}>
                Explore Features
              </button>
            </div>

            <div className="hero-points">
              <div className="hero-point">
                <strong>4K-ready outputs</strong>
                <span>High-fidelity image generation with strong structural precision.</span>
              </div>
              <div className="hero-point">
                <strong>Audio + video sync</strong>
                <span>Native multimodal generation for immersive storytelling.</span>
              </div>
              <div className="hero-point">
                <strong>Built for pros</strong>
                <span>Ideal for creative teams, producers, marketers, and enterprises.</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-orb" />
            <div className="hero-orb two" />
            <div className="visual-shell">
              <div className="browser-bar">
                <span className="dot red" />
                <span className="dot yellow" />
                <span className="dot green" />
              </div>
              <img
                src="/output/generated-assets/ds_1776861874049_501413e2/02-3965757185.jpeg"
                alt="Seedream and Seedance interface preview"
                className="hero-img"
              />
            </div>
            <div className="floating-chip chip-1">
              <strong style={{ display: 'block', marginBottom: 4 }}>Seedream 4.5</strong>
              1K–4K image generation
            </div>
            <div className="floating-chip chip-2">
              <strong style={{ display: 'block', marginBottom: 4 }}>Seedance 1.5 Pro</strong>
              Synchronized audio-visual output
            </div>
            <div className="floating-chip chip-3">
              <strong style={{ display: 'block', marginBottom: 4 }}>10× Faster</strong>
              Optimized inference pipeline
            </div>
          </div>
        </div>
      </section>

      <section className="section trust" id="trust">
        <div className="container">
          <div className="section-header reveal">
            <h2>Performance metrics that matter for AI-first creative teams</h2>
            <p>
              No logo library is available for this product set, so we highlight the measurable
              capabilities directly from the offering.
            </p>
          </div>

          <div className="metrics-strip reveal">
            <div className="metric-card">
              <div className="metric-number">4K</div>
              <div className="metric-label">Image generation quality support</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">10×</div>
              <div className="metric-label">Faster inference for video generation</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">2</div>
              <div className="metric-label">Specialized ByteDance generative models</div>
            </div>
            <div className="metric-card">
              <div className="metric-number">Multi</div>
              <div className="metric-label">Text, image, script, audio-visual workflows</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section products" id="products">
        <div className="container">
          <div className="section-header reveal">
            <h2>Purpose-built generative AI products for image and video workflows</h2>
            <p>
              Explore ByteDance’s two advanced models through an accordion-led experience with
              live visual previews, capability highlights, and production-ready use cases.
            </p>
          </div>

          <div className="products-layout">
            <div className="accordion-list reveal">
              {products.map((item, index) => (
                <div
                  key={item.name}
                  className={`accordion-item ${activeAccordion === index ? 'active' : ''}`}
                >
                  <button
                    className="accordion-head"
                    onClick={() => setActiveAccordion(index)}
                    aria-expanded={activeAccordion === index}
                  >
                    <div className="accordion-head-main">
                      <small>{item.label}</small>
                      <h3>{item.name}</h3>
                      <p>{item.description}</p>
                    </div>
                    <div className="accordion-toggle">
                      {activeAccordion === index ? '−' : '+'}
                    </div>
                  </button>

                  <div className="accordion-body">
                    <div className="feature-list">
                      {item.features.map((feature) => (
                        <div className="feature-row" key={feature}>
                          <IconSpark />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>
                    <div style={{ marginTop: 18 }}>
                      <button className="btn btn-primary">{item.cta}</button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="product-visual-panel reveal">
              <div className="visual-card">
                <div className="visual-meta">
                  <div className="pill">{products[activeAccordion].label}</div>
                  <span>{products[activeAccordion].headline}</span>
                </div>

                <div className="browser-frame">
                  <div className="browser-bar">
                    <span className="dot red" />
                    <span className="dot yellow" />
                    <span className="dot green" />
                  </div>
                  <img
                    src={products[activeAccordion].image}
                    alt={products[activeAccordion].headline}
                    className="hero-img"
                  />
                </div>

                <div className="panel-insights">
                  <div className="insight">
                    <strong>{activeAccordion === 0 ? '4K' : '10×'}</strong>
                    <span>
                      {activeAccordion === 0
                        ? 'Native high-resolution image creation with visual fidelity.'
                        : 'Significantly faster optimized inference for production speed.'}
                    </span>
                  </div>
                  <div className="insight">
                    <strong>{activeAccordion === 0 ? 'Multi' : 'Sync'}</strong>
                    <span>
                      {activeAccordion === 0
                        ? 'Text-to-image, editing, and composition in one workflow.'
                        : 'Audio and video generated together with strong alignment.'}
                    </span>
                  </div>
                  <div className="insight">
                    <strong>{activeAccordion === 0 ? 'Type' : 'Cinema'}</strong>
                    <span>
                      {activeAccordion === 0
                        ? 'Enhanced text rendering for posters, ads, and branded creatives.'
                        : 'Camera movement, lip-sync, and narrative motion control.'}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section why-techjockey" id="why-techjockey">
        <div className="container">
          <div className="section-header reveal">
            <h2>Why buy and evaluate through Techjockey</h2>
            <p>
              Choosing advanced AI creation software is easier when you have guided product
              discovery, implementation support, and expert assistance through the evaluation
              journey.
            </p>
          </div>

          <div className="light-grid reveal">
            <div className="light-card">
              <IconSpark />
              <h4>Expert-led product discovery</h4>
              <p>
                Compare the right image and video generation capabilities for your business,
                team size, and output quality requirements.
              </p>
            </div>
            <div className="light-card">
              <IconSpark />
              <h4>Free demo assistance</h4>
              <p>
                Understand Seedream and Seedance capabilities clearly before making a buying
                decision for enterprise or team-level use.
              </p>
            </div>
            <div className="light-card">
              <IconSpark />
              <h4>Faster evaluation cycle</h4>
              <p>
                Reduce friction in shortlisting AI products by getting relevant information,
                guidance, and commercial clarity in one place.
              </p>
            </div>
            <div className="light-card">
              <IconSpark />
              <h4>Business-ready buying support</h4>
              <p>
                Get help with quote discovery, feature fitment, and practical deployment
                conversations aligned to professional creative workflows.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="container">
          <div className="section-header reveal">
            <h2>Pricing built around your AI image and video needs</h2>
            <p>
              Transparent product packaging with capability-led inclusions. Where an original
              price is not provided, we retain the official available pricing only.
            </p>
          </div>

          <div className="pricing-grid reveal">
            <div className="pricing-card">
              <div className="badge-green">Get Quote</div>
              <h3>Seedream 4.5</h3>
              <div className="pricing-sub">AI Image Generation</div>

              <div className="price-wrap">
                <span className="old-price">Original price on request</span>
                <span className="new-price">Custom Quote</span>
                <span className="price-note">Pricing available via Techjockey</span>
              </div>

              <div className="check-list">
                {[
                  'High-resolution image generation up to 4K quality',
                  'Text-to-image and multimodal image editing',
                  'Multi-image composition for complex visuals',
                  'Enhanced typographic rendering for posters, ads, and text-heavy designs',
                ].map((item) => (
                  <div className="check-item" key={item}>
                    <svg viewBox="0 0 24 24" className="check-icon" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M9.55 18.2L3.85 12.5l1.4-1.4 4.3 4.3 9-9 1.4 1.4-10.4 10.4z"
                      />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="btn btn-primary btn-full">Get Quote</button>
            </div>

            <div className="pricing-card featured">
              <div className="badge-green">Starting Plan</div>
              <h3>Seedance 1.5 Pro</h3>
              <div className="pricing-sub">AI Video Generation</div>

              <div className="price-wrap">
                <span className="old-price">Standard pricing varies</span>
                <span className="new-price">$1,000/month</span>
                <span className="price-note">Starting at officially provided pricing</span>
              </div>

              <div className="check-list">
                {[
                  'Text-to-video generation with cinematic output',
                  'Native audio + video generation with synchronization',
                  'Multilingual lip-sync capabilities',
                  'Fast inference for quicker video production',
                ].map((item) => (
                  <div className="check-item" key={item}>
                    <svg viewBox="0 0 24 24" className="check-icon" aria-hidden="true">
                      <path
                        fill="currentColor"
                        d="M9.55 18.2L3.85 12.5l1.4-1.4 4.3 4.3 9-9 1.4 1.4-10.4 10.4z"
                      />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <button className="btn btn-primary btn-full">Get Quote</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials" id="testimonials">
        <div className="container">
          <div className="section-header reveal">
            <h2>What professionals say about these AI creative workflows</h2>
            <p>
              Real feedback focused on speed, precision, storytelling power, and evaluation
              clarity through Techjockey.
            </p>
          </div>

          <div className="testimonial-wrap reveal">
            <div className="testimonial-card">
              <div>
                <div className="quote-mark">❝</div>
                <div className="stars">★★★★★</div>
                <p className="testimonial-text">{testimonials[testimonialIndex].quote}</p>
              </div>
              <div>
                <div className="author">{testimonials[testimonialIndex].author}</div>
                <div className="designation">{testimonials[testimonialIndex].designation}</div>
              </div>
            </div>

            <div className="testimonial-nav">
              <button className="nav-btn" onClick={prevTestimonial} aria-label="Previous testimonial">
                ←
              </button>
              <button className="nav-btn" onClick={nextTestimonial} aria-label="Next testimonial">
                →
              </button>
            </div>

            <div className="dots-row">
              {testimonials.map((_, i) => (
                <span key={i} className={i === testimonialIndex ? 'active' : ''} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-left">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              alt="Techjockey"
              className="techjockey-logo"
            />
            <div className="footer-copy">
              Techjockey helps businesses discover, compare, and buy the right software with
              expert assistance and guided evaluation support.
            </div>
          </div>

          <div className="footer-links">
            <a href="https://www.techjockey.com/" target="_blank" rel="noreferrer">
              Home
            </a>
            <a href="https://www.techjockey.com/about-us" target="_blank" rel="noreferrer">
              About
            </a>
            <a href="https://www.techjockey.com/contact-us" target="_blank" rel="noreferrer">
              Contact
            </a>
            <a href="https://www.techjockey.com/privacy-policy" target="_blank" rel="noreferrer">
              Privacy Policy
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;