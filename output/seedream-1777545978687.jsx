import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#ff6b00';
  const bodyBg = '#1a1a1a';

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      author: 'Vaishali Saxena',
      role: 'Creative Director',
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      author: 'Vihaan Pandey',
      role: 'Video Producer',
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      author: 'Anurag Malhotra',
      role: 'Art Director',
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      author: 'Ashutosh Singh',
      role: 'Marketing Manager',
    },
    {
      quote:
        'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.',
      author: 'Shrimmi Saxena',
      role: 'Creative Lead',
    },
  ];

  const productSections = [
    {
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      image: '/output/generated-assets/ds_1777545712554_babee663/14-41ea7f7485.png',
      features: [
        {
          title: 'Advanced Text–Image Alignment',
          description: 'Accurately translates prompts into visuals with improved semantic understanding.',
        },
        {
          title: 'High-Resolution Output',
          description: 'Generate native images up to 1K–4K resolution with strong visual fidelity.',
        },
        {
          title: 'Superior Typographic Rendering',
          description: 'Optimized for posters, ads, and text-heavy visual designs.',
        },
        {
          title: 'Multi-Image Composition with Identity Preservation',
          description: 'Combines multiple inputs while accurately maintaining subject consistency.',
        },
        {
          title: 'Strong Structural Fidelity',
          description: 'Maintains composition, layout, and scene structure with high precision.',
        },
      ],
    },
    {
      headline: 'AI Video Generation with Seedance 1.5 Pro by Bytedance',
      description:
        'Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.',
      image: '/output/generated-assets/ds_1777545712554_babee663/13-e1b1bc05a8.jpeg',
      features: [
        {
          title: 'Key Capabilities of Seedance 1.5 Pro',
          description:
            'Seedance enables professional-grade AI video production with narrative coherence and realistic motion.',
        },
        { title: 'Text-to-Video Generation', description: 'Create videos directly from text prompts.' },
        {
          title: 'Audio-Visual Synchronization',
          description: 'Generate video and audio simultaneously with strong multimodal alignment.',
        },
        {
          title: 'Multilingual Lip-Sync',
          description: 'Supports multilingual and dialect-level lip synchronization.',
        },
        {
          title: 'Cinematic Camera Control',
          description: 'Generate videos with dynamic camera movement and cinematic storytelling.',
        },
        {
          title: '10× Faster Inference',
          description: 'Optimized inference pipeline significantly improves generation speed.',
        },
      ],
    },
  ];

  const mediaGallery = [
    '/output/generated-assets/ds_1777545712554_babee663/01-8108d24ee9.png',
    '/output/generated-assets/ds_1777545712554_babee663/10-83844cc166.png',
    '/output/generated-assets/ds_1777545712554_babee663/12-52eb36665e.png',
    '/output/generated-assets/ds_1777545712554_babee663/14-41ea7f7485.png',
    '/output/generated-assets/ds_1777545712554_babee663/13-e1b1bc05a8.jpeg',
    '/output/generated-assets/ds_1777545712554_babee663/15-fa9caa1249.png',
  ];

  const pricingPlans = [
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
      cta: 'Generate with AI',
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
      cta: 'Generate with AI',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const testimonialTimer = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -80px 0px' }
    );

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-parent').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    testimonialTimer.current = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialTimer.current);
  }, [testimonials.length]);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const getInitials = (name) =>
    name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('');

  const Icon = ({ type = 'spark' }) => {
    const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: accent, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (type === 'video')
      return (
        <svg {...common}>
          <rect x="3" y="6" width="13" height="12" rx="2" />
          <path d="M16 10l5-3v10l-5-3z" />
        </svg>
      );
    if (type === 'audio')
      return (
        <svg {...common}>
          <path d="M11 5L6 9H3v6h3l5 4V5z" />
          <path d="M15.5 8.5a5 5 0 010 7" />
          <path d="M18 6a8 8 0 010 12" />
        </svg>
      );
    if (type === 'grid')
      return (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="3" y="14" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
        </svg>
      );
    return (
      <svg {...common}>
        <path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9L12 3z" />
      </svg>
    );
  };

  const css = `
    :root{
      --accent:${accent};
      --primary:${primary};
      --bodyBg:${bodyBg};
      --text:#f5f5f5;
      --muted:#b8b8b8;
      --line:rgba(255,255,255,.1);
      --card:rgba(255,255,255,.05);
      --white:#fff;
    }
    *{box-sizing:border-box}
    html,body,#root{margin:0;padding:0;background:var(--bodyBg);font-family:'Inter',sans-serif;color:var(--text);scroll-behavior:smooth}
    a{text-decoration:none;color:inherit}
    button{font-family:inherit}
    img{max-width:100%;display:block}
    .lp{background:var(--bodyBg);overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{position:relative;padding:88px 0}
    .section-light{background:#f5f5f5;color:#1a1a1a}
    .section-white{background:#fff;color:#1a1a1a}
    .section-dark{background:#111}
    .muted{color:var(--muted)}
    .section-light .muted,.section-white .muted{color:#6b7280}
    .tag{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border:1px solid rgba(255,107,0,.35);background:rgba(255,107,0,.08);border-radius:999px;font-size:13px;font-weight:600}
    .nav{position:sticky;top:0;z-index:50;background:rgba(26,26,26,.78);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand{font-weight:800;font-size:20px;line-height:1.2;color:#fff}
    .brand .gradient-text{display:inline}
    .tj-logo{display:flex;align-items:center;justify-content:center}
    .animated-cta,.ghost-btn,.nav-btn{
      border:none;border-radius:12px;padding:13px 20px;font-weight:700;cursor:pointer;font-size:15px;white-space:nowrap
    }
    .animated-cta, .btn-magnetic {
      position: relative;
      overflow: hidden;
      background: var(--accent);
      color: #fff;
      transition: transform .22s ease, box-shadow .22s ease, background .22s ease;
    }
    .animated-cta:hover, .btn-magnetic:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 32px rgba(0,0,0,.18);
    }
    .animated-cta::before,.animated-cta::after {display:none !important;content:none !important;}
    .ghost-btn{background:transparent;border:1px solid rgba(255,255,255,.16);color:#fff;transition:.22s ease}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(0,0,0,.18);border-color:rgba(255,255,255,.3)}
    .hero{background:#1a1a1a;min-height:100vh;padding:44px 0 72px;position:relative}
    .precision-lines:before,.precision-lines:after{content:"";position:absolute;inset:0;pointer-events:none}
    .precision-lines:before{
      background:
      linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
      background-size:48px 48px;
      mask-image:radial-gradient(circle at center, #000 45%, transparent 95%);
      opacity:.35
    }
    .precision-lines:after{
      background:
        radial-gradient(circle at 20% 20%, rgba(255,107,0,.22), transparent 28%),
        radial-gradient(circle at 82% 28%, rgba(255,107,0,.12), transparent 20%),
        radial-gradient(circle at 70% 80%, rgba(255,107,0,.12), transparent 22%);
      filter:blur(16px)
    }
    .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:46px;align-items:center}
    .hero h1{font-size:clamp(48px,6vw,68px);line-height:1.04;letter-spacing:-.03em;margin:18px 0 16px}
    .hero p{font-size:18px;line-height:1.75;max-width:720px}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:26px}
    .chip{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(255,107,0,.3);background:rgba(255,107,0,.09);color:#ddd;font-size:13px}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
    .hero-visual{min-height:520px;border-radius:28px;padding:24px;position:relative;border:1px solid rgba(255,255,255,.1);background:
      radial-gradient(circle at 30% 30%, rgba(255,107,0,.18), transparent 28%),
      radial-gradient(circle at 80% 20%, rgba(255,255,255,.08), transparent 22%),
      linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.03));
      box-shadow:0 24px 60px rgba(0,0,0,.38)
    }
    .hero-shell{height:100%;border-radius:22px;padding:18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);position:relative;overflow:hidden}
    .hero-shell:before{
      content:"";position:absolute;inset:0;
      background:
        linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
      background-size:24px 24px;opacity:.4
    }
    .floating-card{position:absolute;background:rgba(17,17,17,.8);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:14px 16px;box-shadow:0 16px 40px rgba(0,0,0,.28)}
    .card-a{top:18px;right:14px;width:180px}
    .card-b{left:16px;bottom:20px;width:200px}
    .card-c{right:24px;bottom:80px;width:160px}
    .mini-label{font-size:12px;color:#cfcfcf;margin-bottom:8px}
    .mini-value{font-size:18px;font-weight:700}
    .thumb-grid{position:absolute;inset:86px 24px 24px 24px;display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
    .thumb{border-radius:18px;min-height:110px;background:
      linear-gradient(135deg, rgba(255,107,0,.25), rgba(255,255,255,.06)),
      linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02));
      border:1px solid rgba(255,255,255,.1);position:relative;overflow:hidden
    }
    .thumb:before{content:"";position:absolute;inset:auto 12px 12px 12px;height:10px;border-radius:999px;background:rgba(255,255,255,.12)}
    .thumb:nth-child(2),.thumb:nth-child(5){transform:translateY(18px)}
    .thumb:nth-child(3){background:
      linear-gradient(135deg, rgba(255,255,255,.1), rgba(255,107,0,.18)),
      linear-gradient(180deg, rgba(255,255,255,.08), rgba(255,255,255,.02))}
    .gradient-text{background:linear-gradient(135deg, var(--accent), var(--primary));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    @keyframes fadeInUp { from { opacity:0; transform:translateY(32px); } to { opacity:1; transform:translateY(0); } }
    @keyframes fadeInLeft { from { opacity:0; transform:translateX(-40px); } to { opacity:1; transform:translateX(0); } }
    @keyframes fadeInRight { from { opacity:0; transform:translateX(40px); } to { opacity:1; transform:translateX(0); } }
    @keyframes zoomIn { from { opacity:0; transform:scale(.92); } to { opacity:1; transform:scale(1); } }
    .hero-fade-up { animation: fadeInUp .8s cubic-bezier(.16,1,.3,1) both; }
    .hero-fade-left { animation: fadeInLeft .8s cubic-bezier(.16,1,.3,1) both; }
    .hero-fade-right { animation: fadeInRight .8s cubic-bezier(.16,1,.3,1) both; }
    .hero-zoom { animation: zoomIn .75s cubic-bezier(.16,1,.3,1) both; }
    .reveal { opacity:0; transform:translateY(42px); transition:opacity .75s cubic-bezier(.16,1,.3,1), transform .75s cubic-bezier(.16,1,.3,1); }
    .reveal.visible { opacity:1; transform:translateY(0); }
    .reveal-left { opacity:0; transform:translateX(-42px); transition:.75s cubic-bezier(.16,1,.3,1); }
    .reveal-right { opacity:0; transform:translateX(42px); transition:.75s cubic-bezier(.16,1,.3,1); }
    .reveal-left.visible, .reveal-right.visible { opacity:1; transform:translateX(0); }
    .stagger-parent > * { opacity:0; transform:translateY(28px); transition:.65s cubic-bezier(.16,1,.3,1); }
    .stagger-parent.visible > * { opacity:1; transform:translateY(0); }
    .stagger-parent.visible > *:nth-child(2){ transition-delay:.08s; }
    .stagger-parent.visible > *:nth-child(3){ transition-delay:.16s; }
    .stagger-parent.visible > *:nth-child(4){ transition-delay:.24s; }
    .stagger-parent.visible > *:nth-child(5){ transition-delay:.32s; }
    .metrics-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
    .metric-card{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:20px;box-shadow:0 10px 30px rgba(0,0,0,.06)}
    .metric-title{font-size:14px;font-weight:700;color:#1a1a1a}
    .metric-sub{margin-top:8px;color:#6b7280;font-size:14px}
    .marquee-wrapper{overflow:hidden;background:#111;padding:20px 0;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08)}
    @keyframes marqueeScroll {0% { transform: translateX(0);}100% { transform: translateX(-50%);} }
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    .marquee-item{font-size:28px;font-weight:800;margin-right:48px;white-space:nowrap;color:rgba(255,255,255,.82)}
    .split{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
    .spotlight{background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:18px;box-shadow:0 18px 45px rgba(0,0,0,.08)}
    .browser{border-radius:18px;overflow:hidden;background:#fff;border:1px solid #e5e7eb}
    .browser-top{display:flex;gap:8px;padding:12px 14px;background:#f5f5f5;border-bottom:1px solid #e5e7eb}
    .dot{width:10px;height:10px;border-radius:50%;background:#ddd}
    .spotlight img{width:100%;border-radius:14px}
    h2{font-size:clamp(32px,4vw,44px);line-height:1.08;letter-spacing:-.02em;margin:14px 0 14px}
    .desc-bar{border-left:3px solid rgba(255,107,0,.35);padding-left:18px}
    .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:24px}
    .feature-card{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:18px;box-shadow:0 10px 25px rgba(0,0,0,.05);transition:.22s ease}
    .feature-card:hover{transform:translateY(-4px)}
    .section-dark .feature-card{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.1);box-shadow:none}
    .section-dark .feature-card p{color:#c9c9c9}
    .feature-title{display:flex;gap:10px;align-items:flex-start;font-weight:700;margin-bottom:8px}
    .feature-title span{flex:1}
    .auto-scroll-media {max-height:520px;overflow:hidden;position:relative;border-radius:24px}
    .auto-scroll-track {display:flex;flex-direction:column;gap:16px;animation:autoScrollY 18s linear infinite}
    .auto-scroll-media:hover .auto-scroll-track {animation-play-state:paused}
    @keyframes autoScrollY {0% { transform: translateY(0);}100% { transform: translateY(-50%);} }
    .auto-scroll-track img,.auto-scroll-track video {width:100%;border-radius:18px;object-fit:cover;border:1px solid rgba(255,255,255,.08)}
    .video-shell{border-radius:24px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:#0f0f0f;box-shadow:0 18px 45px rgba(0,0,0,.3)}
    .video-fallback{aspect-ratio:16/9;position:relative;background:
      radial-gradient(circle at 30% 30%, rgba(255,107,0,.3), transparent 20%),
      radial-gradient(circle at 70% 35%, rgba(255,255,255,.08), transparent 16%),
      linear-gradient(135deg, #141414, #1f1f1f 60%, #111)}
    .play{position:absolute;inset:0;display:flex;align-items:center;justify-content:center}
    .play span{width:88px;height:88px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,107,0,.9);box-shadow:0 18px 45px rgba(255,107,0,.25)}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
    .price-card{background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:26px;box-shadow:0 18px 40px rgba(0,0,0,.06);display:flex;flex-direction:column}
    .price-top{display:flex;justify-content:space-between;gap:12px;align-items:flex-start;margin-bottom:14px}
    .price-card.highlight{border:2px solid var(--accent)}
    .price{font-size:28px;font-weight:800;color:#1a1a1a}
    .empty-price{font-size:16px;color:#6b7280;font-weight:600}
    .badge-green{background:#e7f8ee;color:#128a44;border-radius:999px;padding:7px 10px;font-size:12px;font-weight:700}
    .list{display:flex;flex-direction:column;gap:12px;margin:18px 0 22px}
    .list-item{display:flex;gap:10px;color:#4b5563;font-size:15px;line-height:1.55}
    .list-item svg{flex:0 0 auto;margin-top:2px}
    .full-btn{width:100%;text-align:center}
    .testimonial-wrap{position:relative;overflow:hidden}
    .testimonial-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:26px;padding:34px;min-height:320px}
    .quote-mark{font-size:64px;color:var(--accent);line-height:1;font-weight:800}
    .testimonial-text{font-size:22px;line-height:1.65;margin:8px 0 24px;color:#f3f3f3}
    .author-row{display:flex;align-items:center;gap:14px}
    .avatar{width:54px;height:54px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--accent);color:#fff;font-weight:800}
    .author-name{font-weight:800}
    .author-role{color:#9ca3af;font-size:14px}
    .stars{color:#f5b301;letter-spacing:2px;font-size:16px;margin-bottom:8px}
    .slider-controls{display:flex;justify-content:space-between;align-items:center;margin-top:22px;gap:12px}
    .arrow-btn{width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#fff;cursor:pointer}
    .dots{display:flex;gap:8px;align-items:center;justify-content:center}
    .slider-dot{width:8px;height:8px;border-radius:999px;background:rgba(255,255,255,.3);border:none;cursor:pointer}
    .slider-dot.active{width:24px;background:var(--accent)}
    .footer{padding:36px 0;background:#0f0f0f;border-top:1px solid rgba(255,255,255,.08)}
    .footer-grid{display:grid;grid-template-columns:1fr auto auto;gap:20px;align-items:center}
    .footer-left{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
    .footer-text{color:#c9c9c9;font-size:14px}
    .footer-links,.socials{display:flex;align-items:center;gap:14px;flex-wrap:wrap}
    .footer-links a,.socials a{color:#fff;opacity:.88}
    .social-icon{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.03)}
    @media (max-width: 992px){
      .hero-grid,.split,.pricing-grid,.footer-grid,.metrics-strip{grid-template-columns:1fr}
      .nav-inner{grid-template-columns:1fr auto;gap:12px}
      .nav-inner .animated-cta{grid-column:1/-1;justify-self:start}
      .feature-grid{grid-template-columns:1fr}
      .hero-visual{min-height:460px}
    }
    @media (max-width: 640px){
      .section{padding:68px 0}
      .hero{padding-top:28px}
      .brand{font-size:16px}
      .hero h1{font-size:48px}
      .hero p{font-size:16px}
      .testimonial-text{font-size:18px}
      .thumb-grid{grid-template-columns:repeat(2,1fr);inset:90px 16px 16px 16px}
      .card-a,.card-b,.card-c{position:absolute;width:auto;max-width:180px}
    }
  `;

  return (
    <div className="lp">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span className="gradient-text">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span>
          </div>
          <div className="tj-logo">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <a href="#pricing" className="animated-cta nav-btn">
            Generate with AI
          </a>
        </div>
      </nav>

      <section className="hero precision-lines">
        <div className="container hero-grid">
          <div className="stagger-parent hero-fade-left">
            <div className="tag">AI Image Generation and AI Video Generation</div>
            <h1>
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative
              Models
            </h1>
            <p className="muted">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5
              Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content
              creation.
            </p>
            <div className="chip-row">
              {[
                'AI Image Generation',
                'AI Video Generation with Audio',
                'Multimodal Content Creation',
                'Enterprise-ready AI infrastructure',
              ].map((chip, i) => (
                <div className="chip" key={chip + i}>
                  <Icon type={i === 1 ? 'video' : i === 2 ? 'audio' : i === 3 ? 'grid' : 'spark'} />
                  <span>{chip}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <a href="#pricing" className="animated-cta">
                Generate with AI
              </a>
              <a href="#testimonials" className="ghost-btn">
                Generate with AI
              </a>
            </div>
          </div>

          <div className="hero-visual hero-fade-right">
            <div className="hero-shell">
              <div className="floating-card card-a">
                <div className="mini-label">Seedream 4.5</div>
                <div className="mini-value">1K–4K resolution</div>
              </div>
              <div className="floating-card card-b">
                <div className="mini-label">Seedance 1.5 Pro</div>
                <div className="mini-value">Audio + video generation</div>
              </div>
              <div className="floating-card card-c">
                <div className="mini-label">Performance</div>
                <div className="mini-value">10× Faster Inference</div>
              </div>
              <div className="thumb-grid">
                <div className="thumb hero-zoom"></div>
                <div className="thumb hero-zoom"></div>
                <div className="thumb hero-zoom"></div>
                <div className="thumb hero-zoom"></div>
                <div className="thumb hero-zoom"></div>
                <div className="thumb hero-zoom"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="metrics-strip reveal">
            {[
              'AI Image Generation',
              'AI Video Generation with Audio',
              'Multimodal Content Creation',
              'Enterprise-ready AI infrastructure',
            ].map((item, i) => (
              <div className="metric-card" key={item + i}>
                <div className="metric-title">{item}</div>
                <div className="metric-sub">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="marquee-item" key={i}>
              Seedream 4.5 and Seedance 1.5 Pro by ByteDance <span className="gradient-text">★</span> AI Image
              Generation and AI Video Generation
            </div>
          ))}
        </div>
      </div>

      <section className="section section-white">
        <div className="container split">
          <div className="reveal-left">
            <div className="spotlight">
              <div className="browser">
                <div className="browser-top">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <img src={productSections[0].image} alt={productSections[0].headline} />
              </div>
            </div>
          </div>
          <div className="reveal-right">
            <div className="tag">AI Image Generation</div>
            <h2>
              AI Image Generation with <span className="gradient-text">Seedream 4.5</span>
            </h2>
            <div className="desc-bar">
              <p className="muted">{productSections[0].description}</p>
            </div>
            <div className="feature-grid">
              {productSections[0].features.map((f, idx) => (
                <div className="feature-card" key={f.title + idx}>
                  <div className="feature-title">
                    <Icon type={idx % 2 === 0 ? 'spark' : 'grid'} />
                    <span>{f.title}</span>
                  </div>
                  <p className="muted">{f.description}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <a href="#pricing" className="animated-cta">
                Generate with AI
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <div className="marquee-item" key={i}>
              AI Video Generation with Seedance 1.5 Pro by Bytedance <span className="gradient-text">★</span> Generate
              with AI
            </div>
          ))}
        </div>
      </div>

      <section className="section section-dark">
        <div className="container split">
          <div className="reveal-left">
            <div className="tag">AI Video Generation</div>
            <h2>
              AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro</span> by Bytedance
            </h2>
            <div className="desc-bar">
              <p className="muted">{productSections[1].description}</p>
            </div>
            <div className="feature-grid">
              {productSections[1].features.map((f, idx) => (
                <div className="feature-card" key={f.title + idx}>
                  <div className="feature-title">
                    <Icon type={idx % 3 === 0 ? 'video' : idx % 3 === 1 ? 'audio' : 'spark'} />
                    <span>{f.title}</span>
                  </div>
                  <p>{f.description}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <a href="#pricing" className="animated-cta">
                Generate with AI
              </a>
            </div>
          </div>
          <div className="reveal-right">
            <div className="spotlight" style={{ background: 'rgba(255,255,255,.04)', borderColor: 'rgba(255,255,255,.1)' }}>
              <div className="browser" style={{ background: '#151515', borderColor: 'rgba(255,255,255,.08)' }}>
                <div className="browser-top" style={{ background: '#111', borderColor: 'rgba(255,255,255,.08)' }}>
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <img src={productSections[1].image} alt={productSections[1].headline} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container split">
          <div className="reveal-left">
            <div className="tag">Gallery</div>
            <h2>
              <span className="gradient-text">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span>
            </h2>
            <p className="muted">
              Professionals creating high-quality visual content, creative teams, marketers, designers, video
              producers, art directors, and enterprises
            </p>
            <div className="video-shell" style={{ marginTop: 24 }}>
              <div style={{ borderRadius: '12px', overflow: 'hidden' }}>
                <video autoPlay muted loop playsInline preload="auto" style={{ width: '100%', borderRadius: '12px', display: 'block' }}>
                  <source src="" type="video/mp4" />
                </video>
                <div className="video-fallback">
                  <div className="play">
                    <span>
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="#fff">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="reveal-right">
            <div className="auto-scroll-media" style={{ height: 520, background: '#111', padding: 10, border: '1px solid rgba(255,255,255,.08)' }}>
              <div className="auto-scroll-track">
                {[...mediaGallery, ...mediaGallery].map((src, i) => (
                  <img src={src} alt={`Gallery ${i + 1}`} key={src + i} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" id="pricing">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 760, marginBottom: 30 }}>
            <div className="tag">Pricing</div>
            <h2>
              Choose <span className="gradient-text">ByteDance Generative Models</span>
            </h2>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, i) => (
              <div className={`price-card ${i === 1 ? 'highlight' : ''}`} key={plan.name}>
                <div className="price-top">
                  <div>
                    <h3 style={{ margin: 0, color: '#1a1a1a', fontSize: 24 }}>{plan.name}</h3>
                    <div style={{ marginTop: 14 }}>
                      {plan.price ? <div className="price">{plan.price}</div> : <div className="empty-price">(was )</div>}
                    </div>
                  </div>
                  <div className="badge-green">Includes</div>
                </div>
                <div className="list">
                  {plan.includes.map((item, idx) => (
                    <div className="list-item" key={item + idx}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M20 6L9 17l-5-5" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#testimonials" className="animated-cta full-btn">
                  Generate with AI
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="testimonials">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 760, marginBottom: 26 }}>
            <div className="tag">Testimonials</div>
            <h2>
              What teams say about <span className="gradient-text">Seedream and Seedance</span>
            </h2>
          </div>

          <div className="testimonial-wrap reveal">
            <div className="testimonial-card">
              <div className="quote-mark">❝</div>
              <div className="stars">★★★★★</div>
              <div className="testimonial-text">{testimonials[activeSlide].quote}</div>
              <div className="author-row">
                <div className="avatar">{getInitials(testimonials[activeSlide].author)}</div>
                <div>
                  <div className="author-name">{testimonials[activeSlide].author}</div>
                  <div className="author-role">{testimonials[activeSlide].role}</div>
                </div>
              </div>
            </div>

            <div className="slider-controls">
              <button className="arrow-btn" onClick={prevSlide} aria-label="Previous testimonial">
                ‹
              </button>
              <div className="dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`slider-dot ${i === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button className="arrow-btn" onClick={nextSlide} aria-label="Next testimonial">
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-left">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <div className="footer-text">support@techjockey.com</div>
            <div className="footer-text">© 2024 Techjockey Infotech Pvt. Ltd.</div>
          </div>

          <div className="footer-links">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms</a>
          </div>

          <div className="socials">
            <a href="#" className="social-icon" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1012 16.5 3.5 3.5 0 0012 9.5zm6.25-3.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.7-5.8-.1-1 1-1.4 2.4-1.1 3.7-3.2-.2-6.1-1.7-8-4.1-1 1.8-.5 4 1.1 5.2-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.8 3.4 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 3.9 3-1.5 1.2-3.3 1.8-5.2 1.8H2c1.9 1.2 4.2 1.9 6.5 1.9 7.8 0 12.4-6.6 12.1-12.5.8-.6 1.5-1.3 2-2.1z"/></svg>
            </a>
            <a href="#" className="social-icon" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2.02 2.02 0 103 5.02 2.02 2.02 0 005.25 3zm15.19 9.88c0-3.02-1.61-4.43-3.76-4.43a3.25 3.25 0 00-2.94 1.62V8.5H10.4c.04 1.03 0 11.5 0 11.5h3.34v-6.42c0-.34 0-.68.12-.93a1.82 1.82 0 011.71-1.22c1.21 0 1.69.93 1.69 2.3V20H20.6z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;