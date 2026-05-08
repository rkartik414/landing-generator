import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#1a1a1a';
  const primary = '#1a1a1a';
  const bodyBg = '#ffffff';

  const [activeProduct, setActiveProduct] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const galleryRef = useRef(null);

  const primaryCTA = 'Generate with AI';

  const products = [
    {
      name: 'Seedream 4.5',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      cta: 'Request Demo',
      image: '/output/generated-assets/ds_1777535358729_f9ffec23/22-41ea7f7485.png',
      features: [
        ['Advanced Text–Image Alignment', 'Accurately translates prompts into visuals with improved semantic understanding.'],
        ['High-Resolution Output', 'Generate native images up to 1K–4K resolution with strong visual fidelity.'],
        ['Superior Typographic Rendering', 'Optimized for posters, ads, and text-heavy visual designs.'],
        ['Multi-Image Composition with Identity Preservation', 'Combines multiple inputs while accurately maintaining subject consistency.'],
        ['Strong Structural Fidelity', 'Maintains composition, layout, and scene structure with high precision.'],
      ],
    },
    {
      name: 'Seedance 1.5 Pro',
      headline: 'AI Video Generation with Seedance 1.5 Pro by Bytedance',
      description:
        'Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.',
      cta: '',
      image: '/output/generated-assets/ds_1777535358729_f9ffec23/19-336c55c5a0.png',
      features: [
        ['Key Capabilities of Seedance 1.5 Pro', 'Seedance enables professional-grade AI video production with narrative coherence and realistic motion.'],
        ['Text-to-Video Generation', 'Create videos directly from text prompts.'],
        ['Audio-Visual Synchronization', 'Generate video and audio simultaneously with strong multimodal alignment.'],
        ['Multilingual Lip-Sync', 'Supports multilingual and dialect-level lip synchronization.'],
        ['Cinematic Camera Control', 'Generate videos with dynamic camera movement and cinematic storytelling.'],
        ['10× Faster Inference', 'Optimized inference pipeline significantly improves generation speed.'],
      ],
    },
  ];

  const pricing = [
    {
      name: 'Seedream 4.5 (AI Image Generation)',
      price: '',
      originalPrice: '',
      discount: '',
      includes: [
        'High-resolution image generation (up to 4K quality)',
        'Text-to-image & multimodal image editing',
        'Multi-image composition for complex visuals',
        'Enhanced typographic rendering for posters, ads & text-heavy designs',
      ],
      cta: 'Get Quote',
    },
    {
      name: 'Seedance 1.5 Pro (AI Video Generation)',
      price: 'Starting at $1,000/month/',
      originalPrice: '',
      discount: '',
      includes: [
        'Text-to-video generation with cinematic output',
        'Native audio + video generation (synchronized)',
        'Multilingual lip-sync capabilities',
        'Fast inference for quicker video production',
      ],
      cta: 'Get Quote',
    },
  ];

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      name: 'Vaishali Saxena',
      role: 'Creative Director',
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      name: 'Vihaan Pandey',
      role: 'Video Producer',
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      name: 'Anurag Malhotra',
      role: 'Art Director',
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      name: 'Ashutosh Singh',
      role: 'Marketing Manager',
    },
    {
      quote:
        'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.',
      name: 'Shrimmi Saxena',
      role: 'Creative Lead',
    },
  ];

  const trustLogos = [
    '/output/generated-assets/ds_1777535358729_f9ffec23/03-4c3a78453d.svg',
    '/output/generated-assets/ds_1777535358729_f9ffec23/02-fdb52a99cb.svg',
    '/output/generated-assets/ds_1777535358729_f9ffec23/04-b220e1ecff.svg',
    '/output/generated-assets/ds_1777535358729_f9ffec23/05-2f1bf4991a.svg',
    '/output/generated-assets/ds_1777535358729_f9ffec23/06-390297f625.svg',
    '/output/generated-assets/ds_1777535358729_f9ffec23/08-c591ba77ce.svg',
  ];

  const galleryVideos = [
    'https://assets.leonardo.ai/aZXkFcFoBIGEghys_Hero1.mp4',
    'https://assets.leonardo.ai/aaGwTsFoBIGEg7aH_Hero3.mp4',
    'https://assets.leonardo.ai/aaGwXMFoBIGEg7aP_Hero5.mp4',
    'https://assets.leonardo.ai/aaGwZ8FoBIGEg7aQ_Hero2.mp4',
  ];

  const galleryImages = [
    '/output/generated-assets/ds_1777535358729_f9ffec23/22-41ea7f7485.png',
    '/output/generated-assets/ds_1777535358729_f9ffec23/19-336c55c5a0.png',
    '/output/generated-assets/ds_1777535358729_f9ffec23/21-e1b1bc05a8.jpeg',
    '/output/generated-assets/ds_1777535358729_f9ffec23/23-fa9caa1249.png',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -80px 0px' }
    );
    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-parent')
      .forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};--hero:#ff6b00;--muted:#5f6368;--line:#e5e7eb;--soft:#f5f5f5;--dark:#111111;}
    *{box-sizing:border-box} html{scroll-behavior:smooth}
    body{margin:0;background:var(--bodyBg);font-family:Inter,sans-serif;color:var(--accent)}
    a{text-decoration:none;color:inherit}
    img{max-width:100%;display:block}
    .lp{overflow:hidden;background:var(--bodyBg)}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:88px 0;position:relative}
    .nav{position:sticky;top:0;z-index:50;background:rgba(17,17,17,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand{font-weight:800;font-size:20px;color:#fff;line-height:1.2;max-width:420px}
    .tj-wrap{display:flex;align-items:center;justify-content:center}
    .nav .animated-cta{white-space:nowrap}
    .hero{background:#ff6b00;color:#fff;padding:64px 0 72px;position:relative;overflow:hidden}
    .hero:before,.hero:after{content:"";position:absolute;inset:auto;pointer-events:none}
    .hero:before{top:-10%;left:-10%;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.16),transparent 70%)}
    .hero:after{right:-80px;bottom:-120px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(26,26,26,.18),transparent 70%)}
    .precision{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px);background-size:44px 44px;opacity:.2}
    .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:36px;align-items:center;position:relative;z-index:2}
    .hero h1{font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(48px,6vw,68px);line-height:1.05;margin:0 0 18px;font-weight:800}
    .hero p{font-size:18px;line-height:1.7;max-width:640px;margin:0 0 22px;color:rgba(255,255,255,.9)}
    .hero-chips{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 28px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border:1px solid rgba(255,255,255,.28);border-radius:999px;background:rgba(255,255,255,.12);font-size:13px}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
    .ghost-btn{padding:12px 24px;border-radius:10px;border:1px solid rgba(255,255,255,.32);color:#fff;font-weight:700;background:transparent}
    .hero-visual{min-height:500px;border-radius:24px;padding:20px;display:flex;align-items:center;justify-content:center;position:relative}
    .mesh-panel{width:100%;min-height:500px;border-radius:24px;padding:22px;position:relative;overflow:hidden;background:linear-gradient(135deg,rgba(17,17,17,.94),rgba(26,26,26,.88));box-shadow:0 28px 80px rgba(0,0,0,.28);border:1px solid rgba(255,255,255,.14)}
    .mesh-panel:before{content:"";position:absolute;inset:-20%;background:
      radial-gradient(circle at 18% 24%, rgba(255,255,255,.12), transparent 22%),
      radial-gradient(circle at 78% 18%, rgba(255,255,255,.1), transparent 20%),
      radial-gradient(circle at 66% 76%, rgba(255,107,0,.26), transparent 24%),
      radial-gradient(circle at 28% 82%, rgba(255,255,255,.08), transparent 22%);
      animation:gradientShift 10s ease infinite}
    .ui-top{display:grid;grid-template-columns:1.15fr .85fr;gap:16px;position:relative;z-index:1}
    .big-media{border-radius:18px;overflow:hidden;min-height:285px;background:#000}
    .big-media video{width:100%;height:100%;object-fit:cover}
    .stack{display:grid;gap:16px}
    .mini-card,.stat-float{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(10px);border-radius:18px;color:#fff}
    .mini-card{padding:16px}
    .mini-card h4{margin:0 0 8px;font-size:14px;font-weight:700}
    .mini-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:10px;margin-top:10px}
    .thumb{aspect-ratio:1/1;border-radius:12px;background:linear-gradient(135deg,#ffb16f,#fff1e2 55%,#ff6b00)}
    .thumb:nth-child(2){background:linear-gradient(135deg,#2d2d2d,#8c8c8c)}
    .thumb:nth-child(3){background:linear-gradient(135deg,#ffd8b8,#ff8b33)}
    .thumb:nth-child(4){background:linear-gradient(135deg,#383838,#1a1a1a)}
    .thumb:nth-child(5){background:linear-gradient(135deg,#ff6b00,#ffd3b0)}
    .thumb:nth-child(6){background:linear-gradient(135deg,#4a4a4a,#b0b0b0)}
    .floating-pills{position:absolute;inset:0;pointer-events:none}
    .stat-float{position:absolute;padding:12px 14px;font-size:13px;font-weight:700}
    .f1{top:18px;left:18px}.f2{top:28px;right:18px}.f3{bottom:22px;left:24px}.f4{bottom:18px;right:26px}
    .marquee-wrapper{overflow:hidden;background:#f5f5f5;padding:18px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
    .marquee-dark{background:#111111;border-color:rgba(255,255,255,.08)}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    .marquee-item{font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;font-weight:800;margin-right:48px;white-space:nowrap;color:rgba(26,26,26,.9)}
    .marquee-dark .marquee-item{color:rgba(255,255,255,.92)}
    .trust{background:#111111;color:#fff;padding:32px 0 42px}
    .trust-top{display:flex;justify-content:space-between;gap:20px;align-items:end;flex-wrap:wrap;margin-bottom:24px}
    .trust h2,.section h2{font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(32px,4vw,44px);line-height:1.15;margin:0 0 10px}
    .trust p{margin:0;color:rgba(255,255,255,.72)}
    .logo-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:14px}
    .logo-box{border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px;min-height:72px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.03)}
    .logo-box img{max-height:36px;object-fit:contain;filter:grayscale(1);transition:.3s}
    .logo-box:hover img{filter:grayscale(0)}
    .products{background:#ffffff}
    .tabs{display:flex;gap:12px;flex-wrap:wrap;margin:0 0 34px}
    .tab-btn{padding:12px 18px;border-radius:999px;border:1px solid var(--line);background:#fff;font-weight:700;cursor:pointer}
    .tab-btn.active{background:var(--accent);color:#fff;border-color:var(--accent)}
    .product-panel{display:grid;grid-template-columns:1fr 1fr;gap:42px;align-items:center}
    .media-card{border-radius:22px;overflow:hidden;box-shadow:0 24px 70px rgba(0,0,0,.12);border:1px solid var(--line);background:#fff}
    .media-card.dark{background:#111111;border-color:rgba(255,255,255,.08)}
    .media-card img,.media-card video{width:100%;display:block}
    .text-col .eyebrow{display:inline-block;padding:7px 12px;border-radius:999px;background:#f5f5f5;border:1px solid var(--line);font-size:12px;font-weight:700;margin-bottom:16px}
    .text-col p{color:var(--muted);font-size:17px;line-height:1.75}
    .desc-bar{border-left:3px solid var(--accent);padding-left:18px;margin:18px 0 24px}
    .feature-list{display:grid;gap:14px}
    .feature-item{display:grid;grid-template-columns:40px 1fr;gap:14px;padding:16px;border:1px solid var(--line);border-radius:16px;background:#fff}
    .icon-wrap{width:40px;height:40px;border-radius:12px;background:#f5f5f5;display:flex;align-items:center;justify-content:center}
    .feature-item h4{margin:0 0 4px;font-family:'Plus Jakarta Sans',sans-serif;font-size:17px}
    .feature-item p{margin:0;font-size:14px;line-height:1.6}
    .gallery{background:#f5f5f5}
    .gallery-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:18px}
    .video-wall{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
    .video-card,.image-card{border-radius:18px;overflow:hidden;background:#111111;box-shadow:0 18px 60px rgba(0,0,0,.1)}
    .video-card video,.image-card img{width:100%;height:100%;display:block;object-fit:cover}
    .side-images{display:grid;grid-template-columns:1fr 1fr;gap:18px}
    .side-images .image-card{min-height:210px;background:#fff}
    .pricing{background:#ffffff}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
    .price-card{border:1px solid var(--line);border-radius:22px;padding:28px;background:#fff;box-shadow:0 20px 60px rgba(0,0,0,.08)}
    .price-card.featured{border-color:var(--accent);position:relative}
    .price-card h3{margin:0 0 12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:24px}
    .price-row{display:flex;align-items:center;gap:10px;flex-wrap:wrap;margin-bottom:20px}
    .price{font-size:32px;font-weight:800}
    .empty-price{font-size:16px;color:var(--muted);font-weight:700}
    .badge{display:inline-flex;padding:6px 10px;border-radius:999px;background:#e8f7ea;color:#15803d;font-size:12px;font-weight:700}
    .checklist{display:grid;gap:12px;margin:18px 0 24px}
    .check{display:grid;grid-template-columns:24px 1fr;gap:10px;color:var(--muted);font-size:15px;line-height:1.6}
    .testimonials{background:#111111;color:#fff}
    .slider-shell{position:relative;overflow:hidden;border:1px solid rgba(255,255,255,.08);border-radius:24px;background:rgba(255,255,255,.03)}
    .slider-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .slide{min-width:100%;padding:42px}
    .quote-mark{font-size:54px;line-height:1;color:#ff6b00;margin-bottom:10px;font-weight:800}
    .slide p{font-size:22px;line-height:1.7;margin:0 0 26px;color:rgba(255,255,255,.92)}
    .author{display:flex;align-items:center;gap:14px}
    .avatar{width:56px;height:56px;border-radius:50%;overflow:hidden;flex:0 0 auto;border:2px solid rgba(255,255,255,.1)}
    .author b{display:block;font-size:17px}
    .author span{color:rgba(255,255,255,.68);font-size:14px}
    .stars{color:#fbbf24;font-size:18px;letter-spacing:2px;margin-bottom:6px}
    .slider-nav{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:20px}
    .dots{display:flex;gap:8px}
    .slider-dot{width:10px;height:10px;border-radius:999px;background:rgba(255,255,255,.25);border:none;cursor:pointer}
    .slider-dot.active{width:26px;background:#ff6b00}
    .arrow-btn{width:44px;height:44px;border-radius:50%;border:1px solid rgba(255,255,255,.14);background:transparent;color:#fff;cursor:pointer}
    .footer{background:#0d0d0d;color:#fff;padding:34px 0}
    .footer-grid{display:grid;grid-template-columns:1fr auto;gap:24px;align-items:center}
    .footer-links{display:flex;flex-wrap:wrap;gap:18px;color:rgba(255,255,255,.72);font-size:14px;margin-top:14px}
    .socials{display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap}
    .social{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;color:#fff}
    .gradient-text{-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text;background:linear-gradient(135deg,var(--accent),var(--primary))}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    @keyframes fadeInUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeInLeft{from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:translateX(0)}}
    @keyframes fadeInRight{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
    @keyframes gradientShift{0%,100%{transform:translate(0,0) scale(1)}50%{transform:translate(2%,-2%) scale(1.05)}}
    @keyframes borderRotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    .hero-fade-left{animation:fadeInLeft .8s cubic-bezier(.16,1,.3,1) both}
    .hero-fade-right{animation:fadeInRight .8s cubic-bezier(.16,1,.3,1) both}
    .reveal{opacity:0;transform:translateY(42px);transition:opacity .75s cubic-bezier(.16,1,.3,1),transform .75s cubic-bezier(.16,1,.3,1)}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .animated-cta,.btn-magnetic{position:relative;overflow:hidden;transition:transform .25s cubic-bezier(.34,1.56,.64,1),box-shadow .25s ease}
    .animated-cta:hover,.btn-magnetic:hover{transform:translateY(-3px);box-shadow:0 18px 42px rgba(0,0,0,.22)}
    .animated-cta{padding:12px 28px;border-radius:10px;background:transparent;color:#fff;font-weight:700;cursor:pointer;border:none;z-index:1}
    .animated-cta::before{content:"";position:absolute;inset:-2px;background:conic-gradient(from 0deg,var(--accent),var(--primary),var(--accent));border-radius:inherit;animation:borderRotate 3s linear infinite;z-index:-2}
    .animated-cta::after{content:"";position:absolute;inset:1px;background:#ff6b00;border-radius:8px;z-index:-1}
    .animated-cta.dark-fill::after{background:var(--accent)}
    .hover-card{transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s ease,border-color .3s ease}
    .hover-card:hover{transform:translateY(-8px) scale(1.015);box-shadow:0 24px 70px rgba(0,0,0,.16)}
    @media (max-width: 991px){
      .nav-inner,.hero-grid,.product-panel,.gallery-grid,.pricing-grid,.footer-grid{grid-template-columns:1fr}
      .logo-grid{grid-template-columns:repeat(3,1fr)}
      .hero-visual,.mesh-panel{min-height:420px}
      .footer-grid,.socials{text-align:left;justify-content:flex-start}
    }
    @media (max-width: 640px){
      .container{width:min(100% - 24px,1180px)}
      .logo-grid,.video-wall,.side-images{grid-template-columns:1fr 1fr}
      .slide{padding:26px}
      .slide p{font-size:18px}
      .marquee-item{font-size:22px}
      .logo-grid{grid-template-columns:repeat(2,1fr)}
      .video-wall,.side-images{grid-template-columns:1fr}
      .brand{font-size:16px}
      .nav-inner{grid-template-columns:1fr auto;grid-template-areas:"brand tj" "cta cta"}
      .brand{grid-area:brand}.tj-wrap{grid-area:tj;justify-content:flex-end}.nav-cta{grid-area:cta}
    }
  `;

  const Icon = ({ type }) => {
    const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: primary, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (type === 'image') {
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2" /><circle cx="8.5" cy="10" r="1.5" /><path d="M21 16l-5-5-8 8" /></svg>;
    }
    if (type === 'video') {
      return <svg {...common}><rect x="3" y="5" width="15" height="14" rx="2" /><path d="M18 10l3-2v8l-3-2z" /></svg>;
    }
    if (type === 'sync') {
      return <svg {...common}><path d="M21 12a9 9 0 0 1-15.5 6.36" /><path d="M3 12A9 9 0 0 1 18.5 5.64" /><path d="M3 17v-5h5" /><path d="M21 7v5h-5" /></svg>;
    }
    return <svg {...common}><path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" /><path d="M12 7v10" /><path d="M8 9l8 6" /><path d="M16 9l-8 6" /></svg>;
  };

  return (
    <div className="lp">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</div>
          <div className="tj-wrap">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <div className="nav-cta">
            <a href="#pricing" className="animated-cta">{primaryCTA}</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="precision" />
        <div className="container hero-grid">
          <div className="hero-fade-left">
            <h1>
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models
            </h1>
            <p>
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro
              (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>
            <div className="hero-chips">
              {[
                ['AI Image Generation', 'image'],
                ['Text-to-Video', 'video'],
                ['Audio-Visual Synchronization', 'sync'],
                ['High-Resolution Output', 'stack'],
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  <Icon type={chip[1]} />
                  <span>{chip[0]}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <a href="#pricing" className="animated-cta">{primaryCTA}</a>
              <a href="#products" className="ghost-btn">Seedream 4.5</a>
            </div>
          </div>

          <div className="hero-visual hero-fade-right">
            <div className="mesh-panel">
              <div className="ui-top">
                <div className="big-media">
                  <video autoPlay muted loop playsInline preload="auto">
                    <source src="https://assets.leonardo.ai/aZXkFcFoBIGEghys_Hero1.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="stack">
                  <div className="mini-card hover-card">
                    <h4>Seedream 4.5</h4>
                    <div className="mini-grid">
                      <div className="thumb" /><div className="thumb" /><div className="thumb" />
                      <div className="thumb" /><div className="thumb" /><div className="thumb" />
                    </div>
                  </div>
                  <div className="mini-card hover-card">
                    <h4>Seedance 1.5 Pro</h4>
                    <p style={{ margin: 0, color: 'rgba(255,255,255,.78)', fontSize: 13, lineHeight: 1.6 }}>
                      Native audio-visual generation, multilingual lip-sync, and cinematic camera control.
                    </p>
                  </div>
                </div>
              </div>
              <div className="floating-pills">
                <div className="stat-float f1 float-1">4K output</div>
                <div className="stat-float f2 float-2">Audio-visual sync</div>
                <div className="stat-float f3 float-3">Multimodal creation</div>
                <div className="stat-float f4 float-1">Text-to-Video</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper marquee-dark">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="marquee-item" key={i}>
              Seedream 4.5 and Seedance 1.5 Pro by ByteDance <span className="gradient-text">★</span> AI image generation and AI video generation
            </div>
          ))}
        </div>
      </div>

      <section className="trust">
        <div className="container">
          <div className="trust-top reveal">
            <div>
              <h2>Trust built through visual proof</h2>
              <p>Logos are the dominant trust signal on this page.</p>
            </div>
          </div>
          <div className="logo-grid stagger-parent">
            {trustLogos.map((logo, i) => (
              <div className="logo-box hover-card" key={i}>
                <img src={logo} alt={`Trust logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section products" id="products">
        <div className="container">
          <h2 className="reveal">
            Explore the <span className="gradient-text">ByteDance generative models</span>
          </h2>
          <div className="tabs reveal">
            {products.map((item, idx) => (
              <button
                key={item.name}
                className={`tab-btn ${activeProduct === idx ? 'active' : ''}`}
                onClick={() => setActiveProduct(idx)}
              >
                {item.name}
              </button>
            ))}
          </div>

          <div className="product-panel reveal">
            <div className={`media-card hover-card ${activeProduct === 1 ? 'dark' : ''}`}>
              <img src={products[activeProduct].image} alt={products[activeProduct].name} />
            </div>
            <div className="text-col">
              <span className="eyebrow">{products[activeProduct].name}</span>
              <h2>{products[activeProduct].headline}</h2>
              <div className="desc-bar">
                <p>{products[activeProduct].description}</p>
              </div>
              <div className="feature-list">
                {products[activeProduct].features.map((feature, i) => (
                  <div className="feature-item hover-card" key={i}>
                    <div className="icon-wrap">
                      <Icon type={activeProduct === 0 ? 'image' : 'video'} />
                    </div>
                    <div>
                      <h4>{feature[0]}</h4>
                      <p>{feature[1]}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 22 }}>
                <a href="#pricing" className="animated-cta dark-fill">
                  {primaryCTA}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="marquee-item" key={i}>
              AI Image Generation <span className="gradient-text">★</span> AI Video Generation <span className="gradient-text">★</span> High-Quality Visual Content
            </div>
          ))}
        </div>
      </div>

      <section className="section gallery" ref={galleryRef}>
        <div className="container">
          <h2 className="reveal">
            Gallery section containing <span className="gradient-text">videos and images</span>
          </h2>
          <div className="gallery-grid reveal">
            <div className="video-wall">
              {galleryVideos.map((src, i) => (
                <div className="video-card hover-card" key={i}>
                  <video autoPlay muted loop playsInline preload="auto">
                    <source src={src} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
            <div className="side-images">
              {galleryImages.map((src, i) => (
                <div className="image-card hover-card" key={i}>
                  <img src={src} alt={`Gallery ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing" id="pricing">
        <div className="container">
          <h2 className="reveal">
            Pricing for <span className="gradient-text">Seedream 4.5 and Seedance 1.5 Pro</span>
          </h2>
          <div className="pricing-grid reveal">
            {pricing.map((plan, i) => (
              <div className={`price-card hover-card ${i === 1 ? 'featured' : ''}`} key={plan.name}>
                <h3>{plan.name}</h3>
                <div className="price-row">
                  {plan.price ? <div className="price">{plan.price}</div> : <div className="empty-price">(was )</div>}
                  {i === 1 && <span className="badge">Starting at</span>}
                </div>
                <div className="checklist">
                  {plan.includes.map((item, idx) => (
                    <div className="check" key={idx}>
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#testimonials" className="animated-cta dark-fill" style={{ display: 'block', textAlign: 'center' }}>
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials" id="testimonials">
        <div className="container">
          <h2 className="reveal">
            What creative professionals say about <span className="gradient-text">Seedream and Seedance</span>
          </h2>
          <div className="slider-shell reveal">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div className="slide" key={i}>
                  <div className="quote-mark">❝</div>
                  <p>{t.quote}</p>
                  <div className="author">
                    <div className="avatar">
                      <img src="/output/generated-assets/ds_1777535358729_f9ffec23/25-211a05c01a.png" alt={t.name} />
                    </div>
                    <div>
                      <div className="stars">★★★★★</div>
                      <b>{t.name}</b>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-nav">
            <div style={{ display: 'flex', gap: 10 }}>
              <button className="arrow-btn" onClick={() => setActiveSlide((activeSlide - 1 + testimonials.length) % testimonials.length)}>‹</button>
              <button className="arrow-btn" onClick={() => setActiveSlide((activeSlide + 1) % testimonials.length)}>›</button>
            </div>
            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot ${i === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(i)}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <div className="footer-links">
              <span>support@techjockey.com</span>
              <span>© 2024 Techjockey Infotech Pvt. Ltd.</span>
              <a href="/">Privacy Policy</a>
              <a href="/">Terms</a>
            </div>
          </div>
          <div className="socials">
            <a className="social" href="/" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>
            </a>
            <a className="social" href="/" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
            </a>
            <a className="social" href="/" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.7-5.8-.1-1 1-1.4 2.4-1 3.8-3.3-.2-6.3-1.8-8.3-4.4-1.1 1.9-.5 4.4 1.3 5.6-.6 0-1.2-.2-1.8-.5 0 2.1 1.5 3.9 3.5 4.3-.6.2-1.2.2-1.8.1.5 1.8 2.2 3.1 4.1 3.2A8.5 8.5 0 0 1 2 19.5 12 12 0 0 0 8.5 21c7.8 0 12.3-6.8 12-12.8.8-.5 1.5-1.3 2-2.3z"/></svg>
            </a>
            <a className="social" href="/" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 12.53c0-2.99-1.6-4.38-3.73-4.38-1.72 0-2.49.95-2.92 1.61V8.5h-3.38V20h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.02 1.88 2.52V20H21v-7.47z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;