import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#ff6b00';
  const bodyBg = '#f5f5f5';

  const [activeSlide, setActiveSlide] = useState(0);
  const [openAccordions, setOpenAccordions] = useState({ 0: 0, 1: 0 });
  const formRef = useRef(null);

  const primaryCTA = 'Generate with AI';

  const trustLogos = [
    '/output/generated-assets/ds_1777455256610_dfbe62bc/03-c0af4a3166.svg',
    '/output/generated-assets/ds_1777455256610_dfbe62bc/02-292df74865.svg',
    '/output/generated-assets/ds_1777455256610_dfbe62bc/05-99a9a4a2f0.svg',
    '/output/generated-assets/ds_1777455256610_dfbe62bc/04-f640e1efbc.svg',
    '/output/generated-assets/ds_1777455256610_dfbe62bc/07-05a7583ce2.svg',
    '/output/generated-assets/ds_1777455256610_dfbe62bc/09-c64ed70e95.svg'
  ];

  const products = [
    {
      name: 'Seedream 4.5',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      image: '/output/generated-assets/ds_1777455256610_dfbe62bc/14-2d4c082b75.png',
      features: [
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
          description: 'Generate native images up to 1K–4K resolution with strong visual fidelity.'
        },
        {
          title: 'Superior Typographic Rendering',
          description: 'Optimized for posters, ads, and text-heavy visual designs.'
        },
        {
          title: 'Multi-Image Composition with Identity Preservation',
          description:
            'Combines multiple inputs while accurately maintaining subject consistency.'
        },
        {
          title: 'Strong Structural Fidelity',
          description: 'Maintains composition, layout, and scene structure with high precision.'
        }
      ]
    },
    {
      name: 'Seedance 1.5 Pro',
      headline: 'AI Video Generation with Seedance 1.5 Pro by Bytedance',
      description:
        'Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.',
      image: '/output/generated-assets/ds_1777455256610_dfbe62bc/19-eee26760f0.png',
      features: [
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
          description: 'Supports multilingual and dialect-level lip synchronization.'
        },
        {
          title: 'Cinematic Camera Control',
          description:
            'Generate videos with dynamic camera movement and cinematic storytelling.'
        },
        {
          title: '10× Faster Inference',
          description: 'Optimized inference pipeline significantly improves generation speed.'
        }
      ]
    }
  ];

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      name: 'Vaishali Saxena',
      role: 'Creative Director'
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      name: 'Vihaan Pandey',
      role: 'Video Producer'
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      name: 'Anurag Malhotra',
      role: 'Art Director'
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      name: 'Ashutosh Singh',
      role: 'Marketing Manager'
    },
    {
      quote:
        'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.',
      name: 'Shrimmi Saxena',
      role: 'Creative Lead'
    }
  ];

  const pricingPlans = [
    {
      name: 'Seedream 4.5 (AI Image Generation)',
      price: '',
      originalPrice: '',
      includes: [
        'High-resolution image generation (up to 4K quality)',
        'Text-to-image & multimodal image editing',
        'Multi-image composition for complex visuals',
        'Enhanced typographic rendering for posters, ads & text-heavy designs'
      ]
    },
    {
      name: 'Seedance 1.5 Pro (AI Video Generation)',
      price: 'Starting at $1,000/month/',
      originalPrice: '',
      includes: [
        'Text-to-video generation with cinematic output',
        'Native audio + video generation (synchronized)',
        'Multilingual lip-sync capabilities',
        'Fast inference for quicker video production'
      ]
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const toggleAccordion = (sectionIndex, itemIndex) => {
    setOpenAccordions(prev => ({
      ...prev,
      [sectionIndex]: prev[sectionIndex] === itemIndex ? -1 : itemIndex
    }));
  };

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth' });

  const handleSubmit = e => e.preventDefault();

  const initials = name =>
    name
      .split(' ')
      .map(n => n[0])
      .join('')
      .slice(0, 2);

  const Icon = ({ type = 'spark' }) => {
    const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none' };
    if (type === 'video')
      return (
        <svg {...common}>
          <path d="M4 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V7Z" stroke={accent} strokeWidth="2"/>
          <path d="m16 10 4-2v8l-4-2v-4Z" stroke={accent} strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      );
    if (type === 'image')
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="2" stroke={accent} strokeWidth="2"/>
          <circle cx="9" cy="10" r="1.5" fill={accent}/>
          <path d="m21 16-5-5-7 7" stroke={accent} strokeWidth="2" strokeLinejoin="round"/>
        </svg>
      );
    if (type === 'audio')
      return (
        <svg {...common}>
          <path d="M5 14h2m2-4h2m2 8h2m2-12h2" stroke={accent} strokeWidth="2" strokeLinecap="round"/>
          <path d="M14 8v8l4-3V11l-4-3Z" fill={accent}/>
        </svg>
      );
    return (
      <svg {...common}>
        <path d="M12 2l1.8 5.2L19 9l-5.2 1.8L12 16l-1.8-5.2L5 9l5.2-1.8L12 2Z" fill={accent}/>
      </svg>
    );
  };

  const css = `
    *{box-sizing:border-box} html,body{margin:0;padding:0;background:${bodyBg};color:#1a1a1a;font-family:Inter,sans-serif;scroll-behavior:smooth}
    h1,h2,h3,h4{font-family:"Plus Jakarta Sans",sans-serif;margin:0 0 16px}
    p{margin:0 0 16px;color:#5f5f5f;line-height:1.7}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .lp{overflow:hidden}
    .container{width:min(1200px,calc(100% - 32px));margin:0 auto;position:relative;z-index:2}
    .section{padding:90px 0;position:relative;overflow:hidden}
    .nav{position:sticky;top:0;z-index:50;background:rgba(26,26,26,.82);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:16px;align-items:center;padding:14px 0}
    .brand-text{font-weight:800;font-size:20px;color:${accent};font-family:"Plus Jakarta Sans",sans-serif}
    .nav-right{display:flex;align-items:center;gap:16px}
    .animated-cta{position:relative;padding:12px 24px;border-radius:10px;overflow:hidden;background:transparent;color:#fff;font-weight:700;cursor:pointer;z-index:1;border:none;white-space:nowrap;transition:transform .25s ease,box-shadow .25s ease}
    .animated-cta::before{content:'';position:absolute;inset:-2px;background:conic-gradient(from 0deg, ${accent}, ${primary}, ${accent});border-radius:inherit;animation:borderRotate 3s linear infinite;z-index:-2}
    .animated-cta::after{content:'';position:absolute;inset:1px;background:${accent};border-radius:9px;z-index:-1}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(255,107,0,.25)}
    .hero{background:${primary};color:#fff;padding:96px 0 80px}
    .hero-grid,.product-grid,.form-grid,.footer-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}
    .hero h1{font-size:clamp(48px,6vw,68px);line-height:1.05;letter-spacing:-1.5px}
    .hero p{color:rgba(255,255,255,.86);font-size:18px}
    .gradient-text{background:linear-gradient(135deg,#fff3eb 0%, #ffd2b3 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-card,.glass-card{background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);backdrop-filter:blur(16px);border-radius:24px;box-shadow:0 20px 60px rgba(0,0,0,.18)}
    .hero-visual{padding:18px}
    .hero-visual img{width:100%;max-height:480px;object-fit:contain;border-radius:16px;display:block}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin:28px 0}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.12);font-size:13px;color:#fff}
    .hero-cta-row{display:flex;gap:14px;flex-wrap:wrap;margin-top:10px}
    .ghost-btn{padding:12px 24px;border-radius:10px;border:1px solid rgba(255,255,255,.28);color:#fff;background:transparent;font-weight:700;cursor:pointer;transition:.25s}
    .ghost-btn:hover{transform:translateY(-2px);background:rgba(255,255,255,.08)}
    .orb,.orb2{position:absolute;border-radius:50%;pointer-events:none;filter:blur(8px)}
    .orb{top:-60px;right:-60px;width:280px;height:280px;background:radial-gradient(circle,rgba(255,255,255,.22) 0%,transparent 70%)}
    .orb2{bottom:-80px;left:-40px;width:220px;height:220px;background:radial-gradient(circle,rgba(255,255,255,.14) 0%,transparent 70%)}
    .marquee-wrapper{overflow:hidden;background:${bodyBg};padding:18px 0;border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    .marquee-item{font-size:28px;font-weight:800;margin-right:48px;white-space:nowrap;color:#1a1a1a;font-family:"Plus Jakarta Sans",sans-serif}
    .trust{background:#1a1a1a;color:#fff}
    .trust h2,.testimonials h2,.pricing h2{font-size:clamp(32px,4vw,42px);color:#fff}
    .trust-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:14px;margin-top:28px}
    .logo-box{border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px;min-height:72px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.03)}
    .logo-box img{max-height:36px;object-fit:contain;filter:grayscale(1);transition:.3s}
    .logo-box:hover img{filter:grayscale(0)}
    .section-white{background:#fff}
    .section-muted{background:${bodyBg}}
    .tag{display:inline-block;padding:8px 12px;border-radius:999px;background:${accent}14;border:1px solid ${accent}33;color:${accent};font-size:13px;font-weight:700;margin-bottom:16px}
    .section h2{font-size:clamp(32px,4vw,44px);line-height:1.12;letter-spacing:-.8px}
    .spotlight{padding:16px;background:#fff;border:1px solid #e7e7e7;border-radius:24px;box-shadow:0 16px 40px rgba(0,0,0,.06)}
    .spotlight.dark{background:#111;border-color:rgba(255,255,255,.08)}
    .spotlight img{width:100%;border-radius:18px;display:block}
    .desc-bar{border-left:3px solid ${accent};padding-left:18px;margin:20px 0 24px}
    .feature-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:18px}
    .feature-card{border:1px solid #e7e7e7;border-radius:18px;padding:16px;background:#fff;transition:.25s}
    .feature-card:hover{transform:translateY(-4px);box-shadow:0 12px 28px rgba(0,0,0,.08)}
    .feature-top{display:flex;gap:12px;align-items:flex-start}
    .feature-icon{width:42px;height:42px;border-radius:12px;background:${accent}14;display:flex;align-items:center;justify-content:center;flex:0 0 42px}
    .feature-card h4{font-size:16px;line-height:1.35;margin-bottom:6px}
    .accordion{display:none}
    .pricing{background:#fff}
    .pricing-table{display:grid;grid-template-columns:1fr 1fr;gap:20px;margin-top:34px}
    .price-card{background:#fff;border:1px solid #e7e7e7;border-radius:22px;padding:24px;box-shadow:0 14px 34px rgba(0,0,0,.05)}
    .price-badge{display:inline-block;padding:6px 10px;border-radius:999px;background:#e9f8ef;color:#198754;font-size:12px;font-weight:700;margin-bottom:14px}
    .price{font-size:32px;font-weight:800;color:#1a1a1a;font-family:"Plus Jakarta Sans",sans-serif;margin:8px 0 16px}
    .strike{text-decoration:line-through;color:#999;font-size:14px}
    .price-card ul{list-style:none;padding:0;margin:18px 0 20px}
    .price-card li{display:flex;gap:10px;align-items:flex-start;margin:0 0 12px;color:#4f4f4f}
    .check{width:18px;height:18px;border-radius:50%;background:#e9f8ef;color:#198754;display:inline-flex;align-items:center;justify-content:center;font-size:12px;flex:0 0 18px;margin-top:2px}
    .full-btn{width:100%}
    .testimonials{background:#1a1a1a;color:#fff}
    .slider-wrap{overflow:hidden;position:relative;margin-top:28px}
    .slider-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .slide{min-width:100%}
    .testimonial-card{background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);border-radius:24px;padding:34px}
    .quote-mark{font-size:54px;line-height:1;color:${accent};font-family:"Plus Jakarta Sans",sans-serif}
    .stars{color:#f4b400;letter-spacing:2px;margin:12px 0 18px;font-size:18px}
    .author{display:flex;align-items:center;gap:14px;margin-top:18px}
    .avatar{width:50px;height:50px;border-radius:50%;background:${accent};display:flex;align-items:center;justify-content:center;color:#fff;font-weight:800}
    .author-name{font-weight:800;color:#fff}
    .author-role{color:#aaa;font-size:14px}
    .slider-nav{display:flex;justify-content:space-between;align-items:center;gap:14px;margin-top:20px}
    .nav-btns{display:flex;gap:10px}
    .icon-btn,.dot{border:none;cursor:pointer}
    .icon-btn{width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.08);color:#fff}
    .dots{display:flex;gap:8px}
    .dot{width:8px;height:8px;border-radius:999px;background:rgba(255,255,255,.28);transition:.3s}
    .dot.active{width:24px;background:${accent}}
    .form-section{background:${bodyBg}}
    .form-card{background:#fff;border:1px solid #e7e7e7;border-radius:24px;padding:28px;box-shadow:0 16px 40px rgba(0,0,0,.06)}
    .lead_form .field{margin-bottom:16px}
    .lead_form label{display:block;font-size:14px;font-weight:600;margin-bottom:8px;color:#1a1a1a}
    .form-control{width:100%;padding:14px 16px;border:1px solid #dcdcdc;border-radius:12px;font-size:15px;outline:none;transition:.25s;background:#fff}
    .form-control:focus{border-color:${accent};box-shadow:0 0 0 4px rgba(255,107,0,.12)}
    .footer{background:#111;color:#fff;padding:34px 0}
    .footer-grid{grid-template-columns:1.2fr 1fr}
    .footer a,.footer p{color:rgba(255,255,255,.82)}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .social{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);transition:.25s}
    .social:hover{transform:translateY(-2px);background:${accent}}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}
    @keyframes borderRotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    @media (max-width: 991px){
      .hero-grid,.product-grid,.form-grid,.footer-grid,.pricing-table{grid-template-columns:1fr}
      .nav-inner{grid-template-columns:1fr auto}
      .nav-right .animated-cta{display:none}
      .trust-grid{grid-template-columns:repeat(3,1fr)}
      .feature-grid{display:none}
      .accordion{display:block;margin-top:18px}
      .feature-acc{border:1px solid #e7e7e7;border-radius:16px;overflow:hidden;background:#fff;margin-bottom:12px}
      .acc-head{display:flex;justify-content:space-between;gap:12px;padding:16px;cursor:pointer;font-weight:700}
      .acc-body{padding:0 16px 16px;color:#5f5f5f}
      .section{padding:72px 0}
    }
    @media (max-width: 640px){
      .hero h1{font-size:48px}
      .trust-grid{grid-template-columns:repeat(2,1fr)}
      .chip-row,.hero-cta-row{flex-direction:column;align-items:stretch}
      .animated-cta,.ghost-btn{width:100%;text-align:center}
      .marquee-item{font-size:22px}
    }
  `;

  return (
    <div className="lp">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div>
            <span className="brand-text">Seedream 4.5 and Seedance 1.5 Pro</span>
          </div>
          <div className="nav-right">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <button className="animated-cta" onClick={scrollToForm}>
              {primaryCTA}
            </button>
          </div>
        </div>
      </nav>

      <section className="section hero">
        <div className="orb" />
        <div className="orb2" />
        <div className="container hero-grid">
          <div>
            <h1 className="reveal">
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models
            </h1>
            <p className="reveal reveal-delay-1">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>

            <div className="chip-row reveal reveal-delay-2">
              {[
                ['AI Image Generation', 'image'],
                ['AI Video Generation with Audio', 'video'],
                ['Multimodal Content Creation', 'spark'],
                ['Enterprise-ready AI infrastructure', 'audio']
              ].map(([label, icon], i) => (
                <div className="chip" key={i}>
                  <Icon type={icon} />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta-row reveal reveal-delay-3">
              <button className="animated-cta" onClick={scrollToForm}>
                {primaryCTA}
              </button>
              <button className="ghost-btn" onClick={scrollToForm}>
                {primaryCTA}
              </button>
            </div>
          </div>

          <div className="hero-card hero-visual reveal reveal-delay-2">
            <img
              src="/output/generated-assets/ds_1777455256610_dfbe62bc/13-cf094a8d0d.png"
              alt="Create High-Quality AI Images & Videos with ByteDance Generative Models"
            />
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span className="marquee-item" key={i}>
              Seedream 4.5 and Seedance 1.5 Pro <span style={{ color: accent }}>★</span> AI Image Generation and AI Video Generation
            </span>
          ))}
        </div>
      </div>

      <section className="section trust">
        <div className="container">
          <h2 className="reveal">Trusted visual proof</h2>
          <p className="reveal reveal-delay-1" style={{ color: 'rgba(255,255,255,.72)', maxWidth: 760 }}>
            The visitor trusts logos most. Make this the dominant trust signal.
          </p>
          <div className="trust-grid reveal reveal-delay-2">
            {trustLogos.map((logo, i) => (
              <div className="logo-box" key={i}>
                <img src={logo} alt={`Trust logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {products.map((product, sectionIndex) => (
        <React.Fragment key={product.name}>
          <section className={`section ${sectionIndex === 0 ? 'section-white' : 'section-muted'}`}>
            <div className="container product-grid">
              <div className={sectionIndex % 2 !== 0 ? 'reveal reveal-delay-2' : 'reveal'} style={{ order: sectionIndex % 2 !== 0 ? 2 : 1 }}>
                <div className={`spotlight ${sectionIndex === 1 ? 'dark' : ''}`}>
                  <img src={product.image} alt={product.headline} />
                </div>
              </div>

              <div style={{ order: sectionIndex % 2 !== 0 ? 1 : 2 }}>
                <span className="tag reveal">{product.name}</span>
                <h2 className="reveal reveal-delay-1">
                  {product.headline.includes(product.name) ? (
                    <>
                      {product.headline.replace(product.name, '')}
                      <span className="gradient-text">{product.name}</span>
                    </>
                  ) : (
                    product.headline
                  )}
                </h2>
                <div className="desc-bar reveal reveal-delay-1">
                  <p>{product.description}</p>
                </div>

                <div className="feature-grid">
                  {product.features.map((feature, i) => (
                    <div className="feature-card reveal" key={i}>
                      <div className="feature-top">
                        <div className="feature-icon">
                          <Icon type={sectionIndex === 0 ? 'image' : 'video'} />
                        </div>
                        <div>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="accordion">
                  {product.features.map((feature, i) => (
                    <div className="feature-acc" key={i}>
                      <div className="acc-head" onClick={() => toggleAccordion(sectionIndex, i)}>
                        <span>{feature.title}</span>
                        <span style={{ color: accent }}>{openAccordions[sectionIndex] === i ? '−' : '+'}</span>
                      </div>
                      {openAccordions[sectionIndex] === i && <div className="acc-body">{feature.description}</div>}
                    </div>
                  ))}
                </div>

                <div className="reveal reveal-delay-2" style={{ marginTop: 24 }}>
                  <button className="animated-cta" onClick={scrollToForm}>
                    {primaryCTA}
                  </button>
                </div>
              </div>
            </div>
          </section>

          {sectionIndex === 0 && (
            <div className="marquee-wrapper">
              <div className="marquee-track">
                {Array.from({ length: 8 }).map((_, i) => (
                  <span className="marquee-item" key={i}>
                    AI Image Generation <span style={{ color: accent }}>★</span> AI Video Generation
                  </span>
                ))}
              </div>
            </div>
          )}
        </React.Fragment>
      ))}

      <section className="section pricing">
        <div className="container">
          <h2 className="reveal" style={{ color: '#1a1a1a' }}>
            Pricing
          </h2>
          <p className="reveal reveal-delay-1">
            Explore the available plan details for Seedream 4.5 and Seedance 1.5 Pro.
          </p>
          <div className="pricing-table">
            {pricingPlans.map((plan, i) => (
              <div className="price-card reveal" key={i}>
                <div className="price-badge">Available</div>
                <h3 style={{ fontSize: 24, marginBottom: 10 }}>{plan.name}</h3>
                {plan.originalPrice ? <div className="strike">{plan.originalPrice}</div> : <div className="strike">&nbsp;</div>}
                <div className="price">{plan.price || 'Contact for pricing'}</div>
                <ul>
                  {plan.includes.map((item, idx) => (
                    <li key={idx}>
                      <span className="check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="animated-cta full-btn" onClick={scrollToForm}>
                  {primaryCTA}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <h2 className="reveal">Testimonials</h2>
          <div className="slider-wrap reveal reveal-delay-1">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div className="slide" key={i}>
                  <div className="testimonial-card">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p style={{ color: '#fff', fontSize: 20, lineHeight: 1.8 }}>{t.quote}</p>
                    <div className="author">
                      <div className="avatar">{initials(t.name)}</div>
                      <div>
                        <div className="author-name">{t.name}</div>
                        <div className="author-role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-nav">
              <div className="nav-btns">
                <button
                  className="icon-btn"
                  onClick={() => setActiveSlide(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                >
                  ←
                </button>
                <button
                  className="icon-btn"
                  onClick={() => setActiveSlide(prev => (prev + 1) % testimonials.length)}
                >
                  →
                </button>
              </div>
              <div className="dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(i)}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section form-section" ref={formRef}>
        <div className="container form-grid">
          <div>
            <span className="tag reveal">Generate with AI</span>
            <h2 className="reveal reveal-delay-1">Create High-Quality AI Images & Videos with ByteDance Generative Models</h2>
            <p className="reveal reveal-delay-2">
              Professionals and businesses creating high-quality visual content, including creative teams, marketers, video producers, art directors, and marketing managers can explore Seedream 4.5 and Seedance 1.5 Pro with Techjockey.
            </p>
          </div>
          <div className="form-card reveal reveal-delay-2">
            <form className="lead_form" onSubmit={handleSubmit}>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" className="form-control" type="text" placeholder="Enter your name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" className="form-control" type="email" placeholder="Enter your email" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" className="form-control" type="tel" placeholder="Enter your phone" />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" className="form-control" type="text" placeholder="Enter your company" />
              </div>
              <button type="submit" className="animated-cta full-btn">
                {primaryCTA}
              </button>
            </form>
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
            <p style={{ marginTop: 16 }}>support@techjockey.com</p>
            <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: 16, alignItems: 'flex-start' }}>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms</a>
            </div>
            <div className="socials">
              <a className="social" href="#facebook" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-2.8 0-5 2.2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z"/></svg>
              </a>
              <a className="social" href="#instagram" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
              </a>
              <a className="social" href="#twitter" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 7.1c.8-.1 1.6-.5 2.1-1.1-.3.8-.9 1.5-1.7 1.9.8 4.9-2.8 10.2-9.4 10.2-1.9 0-3.6-.5-5-1.5 1.8.2 3.6-.3 5-1.4-1.5 0-2.8-1-3.3-2.4.5.1 1 .1 1.5-.1-1.7-.3-3-1.8-3-3.6.5.3 1 .4 1.6.4-1.6-1.1-2.1-3.2-1.2-4.9 1.8 2.3 4.6 3.8 7.6 3.9-.5-2.1 1.1-4.1 3.3-4.1 1 0 1.9.4 2.5 1.1Z"/></svg>
              </a>
              <a className="social" href="#linkedin" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 12.58c0-2.9-1.55-4.25-3.62-4.25-1.67 0-2.42.92-2.84 1.57V8.5h-3.38V20h3.38v-6.41c0-.34.03-.67.13-.91.27-.67.88-1.37 1.9-1.37 1.34 0 1.88 1.03 1.88 2.53V20H21V12.58h-.56Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;