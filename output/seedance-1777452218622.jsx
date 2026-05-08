import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#ff6b00';
  const bodyBg = '#f5f5f5';

  const [openAccordions, setOpenAccordions] = useState({
    seedream: 0,
    seedance: 0,
  });
  const [activeSlide, setActiveSlide] = useState(0);
  const formRef = useRef(null);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      author: 'Vaishali Saxena',
      role: 'Creative Director',
      avatar: '/output/generated-assets/ds_1777451994228_8df74f81/07-8cf7df2e52.png',
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      author: 'Vihaan Pandey',
      role: 'Video Producer',
      avatar: '/output/generated-assets/ds_1777451994228_8df74f81/10-e8e4bbc7f5.jpg',
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      author: 'Anurag Malhotra',
      role: 'Art Director',
      avatar: '/output/generated-assets/ds_1777451994228_8df74f81/07-8cf7df2e52.png',
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      author: 'Ashutosh Singh',
      role: 'Marketing Manager',
      avatar: '/output/generated-assets/ds_1777451994228_8df74f81/10-e8e4bbc7f5.jpg',
    },
    {
      quote:
        'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.',
      author: 'Shrimmi Saxena',
      role: 'Creative Lead',
      avatar: '/output/generated-assets/ds_1777451994228_8df74f81/07-8cf7df2e52.png',
    },
  ];

  const trustLogos = [
    '/output/generated-assets/ds_1777451994228_8df74f81/03-7e88a6f9c4.svg',
    '/output/generated-assets/ds_1777451994228_8df74f81/02-b49ede77a2.png',
    '/output/generated-assets/ds_1777451994228_8df74f81/04-0583796109.svg',
    '/output/generated-assets/ds_1777451994228_8df74f81/05-9156b45743.svg',
  ];

  const seedreamFeatures = [
    {
      title: 'Advanced Text–Image Alignment',
      description:
        'Accurately translates prompts into visuals with improved semantic understanding.',
    },
    {
      title: 'High-Resolution Output',
      description:
        'Generate native images up to 1K–4K resolution with strong visual fidelity.',
    },
    {
      title: 'Superior Typographic Rendering',
      description:
        'Optimized for posters, ads, and text-heavy visual designs.',
    },
    {
      title: 'Multi-Image Composition with Identity Preservation',
      description:
        'Combines multiple inputs while accurately maintaining subject consistency.',
    },
    {
      title: 'Strong Structural Fidelity',
      description:
        'Maintains composition, layout, and scene structure with high precision.',
    },
  ];

  const seedanceFeatures = [
    {
      title: 'Text-to-Video Generation',
      description: 'Create videos directly from text prompts.',
    },
    {
      title: 'Audio-Visual Synchronization',
      description:
        'Generate video and audio simultaneously with strong multimodal alignment.',
    },
    {
      title: 'Multilingual Lip-Sync',
      description:
        'Supports multilingual and dialect-level lip synchronization.',
    },
    {
      title: 'Cinematic Camera Control',
      description:
        'Generate videos with dynamic camera movement and cinematic storytelling.',
    },
    {
      title: '10× Faster Inference',
      description:
        'Optimized inference pipeline significantly improves generation speed.',
    },
  ];

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
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const toggleAccordion = (group, index) => {
    setOpenAccordions((prev) => ({ ...prev, [group]: prev[group] === index ? -1 : index }));
  };

  const handleChange = (e) => {
    setFormData((p) => ({ ...p, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const icon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="10" fill={accent} opacity="0.18" />
      <path d="M8 12.5l2.5 2.5L16 9.5" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const css = `
    *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;font-family:Inter,sans-serif;background:${bodyBg};color:#1a1a1a}
    h1,h2,h3,h4{font-family:'Plus Jakarta Sans',sans-serif;margin:0 0 14px}
    p{margin:0 0 16px;color:#5f6368;line-height:1.7}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .lp{overflow:hidden;background:${bodyBg}}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:88px 0;position:relative}
    .nav{position:sticky;top:0;z-index:50;background:rgba(14,14,14,.78);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand{font-weight:800;font-size:20px;color:#fff}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .animated-cta{position:relative;padding:12px 24px;border-radius:10px;overflow:hidden;background:transparent;color:#fff;font-weight:700;cursor:pointer;z-index:1;border:none;display:inline-flex;align-items:center;justify-content:center;transition:transform .25s ease,box-shadow .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(0,0,0,.18)}
    @keyframes borderRotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    .animated-cta:before{content:'';position:absolute;inset:-2px;background:conic-gradient(from 0deg, ${accent}, ${primary}, ${accent});border-radius:inherit;animation:borderRotate 3s linear infinite;z-index:-2}
    .animated-cta:after{content:'';position:absolute;inset:1px;background:${accent};border-radius:8px;z-index:-1}
    .ghost-btn{padding:12px 24px;border:1px solid rgba(255,255,255,.24);border-radius:10px;color:#fff;font-weight:700;background:rgba(255,255,255,.08);transition:.25s}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(0,0,0,.18)}
    .hero{background:${primary};color:#fff;padding:110px 0 80px;overflow:hidden}
    .hero:before,.hero:after{content:'';position:absolute;border-radius:50%;filter:blur(40px);pointer-events:none}
    .hero:before{width:320px;height:320px;right:-80px;top:-60px;background:radial-gradient(circle, rgba(255,255,255,.18), transparent 70%)}
    .hero:after{width:240px;height:240px;left:-40px;bottom:-40px;background:radial-gradient(circle, rgba(255,255,255,.14), transparent 70%)}
    .mesh{position:absolute;inset:0;background:
      radial-gradient(circle at 20% 20%, rgba(255,255,255,.12), transparent 28%),
      radial-gradient(circle at 80% 30%, rgba(255,255,255,.09), transparent 25%),
      radial-gradient(circle at 50% 80%, rgba(255,255,255,.08), transparent 22%);
      animation:floatMesh 10s ease-in-out infinite alternate}
    @keyframes floatMesh{from{transform:translateY(0)}to{transform:translateY(-16px)}}
    .hero-grid,.product-grid,.pricing-grid,.form-grid,.footer-grid{display:grid;gap:36px;align-items:center}
    .hero-grid{grid-template-columns:1.05fr .95fr;position:relative;z-index:1}
    .hero h1{font-size:clamp(48px,7vw,68px);line-height:1.05;letter-spacing:-.03em}
    .hero p{color:rgba(255,255,255,.88);font-size:18px}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0 30px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.22);background:rgba(255,255,255,.1);color:#fff;font-size:13px}
    .hero-cta{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{position:relative;border-radius:22px;overflow:hidden;background:rgba(255,255,255,.12);backdrop-filter:blur(10px);border:1px solid rgba(255,255,255,.2);padding:14px}
    .hero-visual video{width:100%;display:block;border-radius:16px;max-height:480px;object-fit:cover}
    .floating-card{position:absolute;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.2);backdrop-filter:blur(12px);padding:12px 14px;border-radius:14px;color:#fff;font-size:13px;animation:floatCard 4s ease-in-out infinite}
    .floating-card.one{top:16px;left:16px}.floating-card.two{bottom:18px;right:16px;animation-delay:1s}.floating-card.three{top:42%;right:12px;animation-delay:1.8s}
    @keyframes floatCard{50%{transform:translateY(-8px)}}
    .marquee-wrapper{overflow:hidden;background:#fff;padding:18px 0;border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    .marquee-item{font-size:28px;font-weight:800;margin-right:48px;white-space:nowrap;color:#1a1a1a;font-family:'Plus Jakarta Sans',sans-serif}
    .trust{background:#fff}
    .section-title{font-size:clamp(32px,4vw,44px);line-height:1.1}
    .trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:28px}
    .trust-box{border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px;min-height:72px;display:flex;align-items:center;justify-content:center;background:#fff}
    .trust-box img{max-height:36px;object-fit:contain;filter:grayscale(1);transition:.3s}
    .trust-box:hover img{filter:grayscale(0)}
    .products{background:${bodyBg}}
    .product-wrap{display:flex;flex-direction:column;gap:36px}
    .product-grid{grid-template-columns:1fr 1fr}
    .visual-card{border-radius:22px;overflow:hidden;border:1px solid #e7e7e7;background:#fff;box-shadow:0 20px 50px rgba(0,0,0,.06)}
    .visual-card.dark{background:#111;border-color:rgba(255,255,255,.08)}
    .visual-card img{display:block;width:100%}
    .text-panel{padding:4px 0}
    .tag{display:inline-flex;padding:8px 14px;border-radius:999px;background:rgba(255,107,0,.1);color:${accent};border:1px solid rgba(255,107,0,.2);font-weight:700;font-size:13px;margin-bottom:14px}
    .desc-box{border-left:3px solid rgba(255,107,0,.25);padding-left:18px;margin:16px 0 18px}
    .accordion{display:flex;flex-direction:column;gap:12px}
    .acc-item{background:#fff;border:1px solid #e7e7e7;border-radius:16px;overflow:hidden;transition:.25s;box-shadow:0 12px 30px rgba(0,0,0,.04)}
    .acc-head{width:100%;background:none;border:none;padding:18px 18px;display:flex;justify-content:space-between;align-items:center;text-align:left;font:inherit;cursor:pointer}
    .acc-title{display:flex;gap:12px;align-items:flex-start;font-weight:700;color:#1a1a1a}
    .acc-body{padding:0 18px 18px 18px;color:#5f6368}
    .acc-sign{font-size:22px;color:${accent};font-weight:700}
    .pricing{background:#111;color:#fff}
    .pricing p{color:rgba(255,255,255,.74)}
    .pricing-grid{grid-template-columns:repeat(2,1fr);margin-top:28px}
    .price-card{position:relative;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:22px;padding:28px;backdrop-filter:blur(12px)}
    .price-card.highlight{box-shadow:0 0 0 1px rgba(255,107,0,.35), 0 20px 60px rgba(255,107,0,.16)}
    .badge{display:inline-block;background:#1f9d55;color:#fff;font-size:12px;font-weight:700;padding:7px 10px;border-radius:999px;margin-bottom:16px}
    .price-name{font-size:24px;line-height:1.2;margin-bottom:10px}
    .price{font-size:34px;font-weight:800;color:#fff;margin:8px 0 18px}
    .price-muted{text-decoration:line-through;color:rgba(255,255,255,.38);font-size:14px}
    .checklist{display:flex;flex-direction:column;gap:12px;margin:18px 0 24px}
    .check{display:flex;gap:10px;align-items:flex-start;color:rgba(255,255,255,.84)}
    .full-btn{width:100%}
    .testimonials{background:#fff}
    .slider{overflow:hidden;position:relative;margin-top:26px}
    .slides{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .slide{min-width:100%;padding:8px}
    .testimonial-card{background:#fff;border:1px solid #e7e7e7;border-radius:22px;padding:34px;box-shadow:0 18px 40px rgba(0,0,0,.05)}
    .quote-mark{font-size:52px;line-height:1;color:${accent};font-weight:800}
    .stars{color:#f4b400;font-size:20px;letter-spacing:2px;margin:8px 0 16px}
    .testimonial-text{font-size:22px;color:#1a1a1a;line-height:1.6}
    .user{display:flex;align-items:center;gap:14px;margin-top:22px}
    .user img{width:58px;height:58px;border-radius:50%;object-fit:cover}
    .user strong{display:block;font-family:'Plus Jakarta Sans',sans-serif}
    .user span{color:#7a7f86}
    .nav-arrows{display:flex;gap:10px;justify-content:flex-end;margin-bottom:14px}
    .arrow{width:42px;height:42px;border-radius:50%;border:1px solid #e7e7e7;background:#fff;cursor:pointer;font-size:18px}
    .dots{display:flex;justify-content:center;gap:8px;margin-top:18px}
    .dot{width:8px;height:8px;border-radius:999px;background:#d0d4d9;border:none;cursor:pointer;transition:.3s}
    .dot.active{width:24px;background:${accent}}
    .form-section{background:${bodyBg}}
    .form-grid{grid-template-columns:1fr 1fr}
    .form-card,.info-card{background:#fff;border:1px solid #e7e7e7;border-radius:22px;padding:28px;box-shadow:0 18px 40px rgba(0,0,0,.05)}
    .info-card{background:linear-gradient(180deg, rgba(255,107,0,.08), rgba(255,107,0,.02))}
    .field{display:flex;flex-direction:column;gap:8px;margin-bottom:16px}
    .field label{font-weight:600;color:#1a1a1a}
    .field input{height:50px;border-radius:12px;border:1px solid #d9dde1;padding:0 14px;font:inherit;outline:none;transition:.25s;background:#fff}
    .field input:focus{border-color:${accent};box-shadow:0 0 0 4px rgba(255,107,0,.12)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}
    .footer{background:#0f0f10;color:#fff;padding:34px 0}
    .footer-grid{grid-template-columns:1.3fr 1fr 1fr;align-items:start}
    .footer p,.footer a{color:rgba(255,255,255,.72)}
    .socials{display:flex;gap:10px;margin-top:12px}
    .social{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1)}
    .footer-links{display:flex;gap:16px;flex-wrap:wrap}
    @media (max-width: 991px){
      .hero-grid,.product-grid,.pricing-grid,.form-grid,.footer-grid{grid-template-columns:1fr}
      .nav-inner{grid-template-columns:1fr auto auto}
      .trust-grid{grid-template-columns:repeat(2,1fr)}
      .hero{padding-top:88px}
    }
    @media (max-width: 640px){
      .container{width:min(100% - 24px,1180px)}
      .nav-inner{grid-template-columns:1fr auto;row-gap:12px}
      .nav .animated-cta{grid-column:1/-1;width:100%}
      .trust-grid{grid-template-columns:1fr 1fr}
      .hero-cta{flex-direction:column}
      .hero-cta a,.hero-cta button{width:100%}
      .marquee-item{font-size:22px}
      .testimonial-text{font-size:18px}
    }
  `;

  return (
    <div className="lp">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span>Seedream 4.5 and Seedance 1.5 Pro</span>
          </div>
          <img
            src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
            height="28px"
            alt="Techjockey"
          />
          <button className="animated-cta" onClick={scrollToForm}>
            Generate with AI
          </button>
        </div>
      </nav>

      <section className="section hero">
        <div className="mesh" />
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
                'AI Image Generation',
                'AI Video Generation',
                'Text-to-Video',
                'High-Resolution Output',
                'Audio-Visual Synchronization',
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  {icon}
                  <span>{chip}</span>
                </div>
              ))}
            </div>
            <div className="hero-cta reveal reveal-delay-3">
              <button className="animated-cta" onClick={scrollToForm}>
                Generate with AI
              </button>
              <button className="ghost-btn" onClick={scrollToForm}>
                Generate with AI
              </button>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-2">
            <video autoPlay muted loop playsInline preload="auto">
              <source
                src="/output/generated-assets/ds_1777451994228_8df74f81/12-498114b8de.mp4"
                type="video/mp4"
              />
            </video>
            <div className="floating-card one">Seedream 4.5</div>
            <div className="floating-card two">Seedance 1.5 Pro</div>
            <div className="floating-card three">Generate with AI</div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[
            'Seedream 4.5 and Seedance 1.5 Pro',
            'AI Image Generation and AI Video Generation',
            'Generate with AI',
            'Seedream 4.5 and Seedance 1.5 Pro',
            'AI Image Generation and AI Video Generation',
            'Generate with AI',
          ].map((item, i) => (
            <span className="marquee-item" key={i}>
              {item} <span className="gradient-text">★</span>
            </span>
          ))}
        </div>
      </div>

      <section className="section trust">
        <div className="container">
          <h2 className="section-title reveal">
            Trusted visuals start with <span className="gradient-text">real proof</span>
          </h2>
          <div className="trust-grid reveal reveal-delay-1">
            {trustLogos.map((logo, i) => (
              <div className="trust-box" key={i}>
                <img src={logo} alt={`Trust logo ${i + 1}`} style={{ maxHeight: '36px', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section products">
        <div className="container product-wrap">
          <div className="product-grid">
            <div className="visual-card reveal">
              <img
                src="/output/generated-assets/ds_1777451994228_8df74f81/18-41ea7f7485.png"
                alt="Seedream 4.5"
              />
            </div>
            <div className="text-panel">
              <span className="tag reveal">Seedream 4.5</span>
              <h2 className="section-title reveal">
                AI Image Generation with <span className="gradient-text">Seedream 4.5</span>
              </h2>
              <div className="desc-box reveal reveal-delay-1">
                <p>
                  Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.
                </p>
              </div>
              <div className="accordion reveal reveal-delay-2">
                {seedreamFeatures.map((feature, i) => (
                  <div className="acc-item" key={i}>
                    <button className="acc-head" onClick={() => toggleAccordion('seedream', i)}>
                      <div className="acc-title">
                        {icon}
                        <span>{feature.title}</span>
                      </div>
                      <span className="acc-sign">{openAccordions.seedream === i ? '−' : '+'}</span>
                    </button>
                    {openAccordions.seedream === i && (
                      <div className="acc-body">
                        <p>{feature.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button className="animated-cta" onClick={scrollToForm} style={{ marginTop: '18px' }}>
                Generate with AI
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[
            'AI Video Generation',
            'Audio-Visual Synchronization',
            'Multilingual Lip-Sync',
            'Cinematic Camera Control',
            'AI Video Generation',
            'Audio-Visual Synchronization',
          ].map((item, i) => (
            <span className="marquee-item" key={i}>
              {item} <span className="gradient-text">★</span>
            </span>
          ))}
        </div>
      </div>

      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container product-wrap">
          <div className="product-grid">
            <div className="text-panel">
              <span className="tag reveal">Seedance 1.5 Pro</span>
              <h2 className="section-title reveal">
                AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro by Bytedance</span>
              </h2>
              <div className="desc-box reveal reveal-delay-1">
                <p>
                  Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.
                </p>
              </div>
              <div className="accordion reveal reveal-delay-2">
                {seedanceFeatures.map((feature, i) => (
                  <div className="acc-item" key={i}>
                    <button className="acc-head" onClick={() => toggleAccordion('seedance', i)}>
                      <div className="acc-title">
                        {icon}
                        <span>{feature.title}</span>
                      </div>
                      <span className="acc-sign">{openAccordions.seedance === i ? '−' : '+'}</span>
                    </button>
                    {openAccordions.seedance === i && (
                      <div className="acc-body">
                        <p>{feature.description}</p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
              <button className="animated-cta" onClick={scrollToForm} style={{ marginTop: '18px' }}>
                Generate with AI
              </button>
            </div>
            <div className="visual-card dark reveal">
              <img
                src="/output/generated-assets/ds_1777451994228_8df74f81/15-eee26760f0.png"
                alt="Seedance 1.5 Pro"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing">
        <div className="container">
          <h2 className="section-title reveal">
            <span className="gradient-text">Pricing</span>
          </h2>
          <div className="pricing-grid reveal reveal-delay-1">
            <div className="price-card">
              <div className="badge">Get Quote</div>
              <div className="price-name">Seedream 4.5 (AI Image Generation)</div>
              <div className="price">
                <span className="price-muted"></span>
              </div>
              <div className="checklist">
                {[
                  'High-resolution image generation (up to 4K quality)',
                  'Text-to-image & multimodal image editing',
                  'Multi-image composition for complex visuals',
                  'Enhanced typographic rendering for posters, ads & text-heavy designs',
                ].map((item, i) => (
                  <div className="check" key={i}>
                    {icon}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button className="animated-cta full-btn" onClick={scrollToForm}>
                Generate with AI
              </button>
            </div>

            <div className="price-card highlight">
              <div className="badge">Starting at $1,000/month/</div>
              <div className="price-name">Seedance 1.5 Pro (AI Video Generation)</div>
              <div className="price">Starting at $1,000/month/</div>
              <div className="checklist">
                {[
                  'Text-to-video generation with cinematic output',
                  'Native audio + video generation (synchronized)',
                  'Multilingual lip-sync capabilities',
                  'Fast inference for quicker video production',
                ].map((item, i) => (
                  <div className="check" key={i}>
                    {icon}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button className="animated-cta full-btn" onClick={scrollToForm}>
                Generate with AI
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="nav-arrows">
            <button className="arrow" onClick={() => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>
              ‹
            </button>
            <button className="arrow" onClick={() => setActiveSlide((prev) => (prev + 1) % testimonials.length)}>
              ›
            </button>
          </div>
          <h2 className="section-title reveal">
            What creative teams say about <span className="gradient-text">Seedream and Seedance</span>
          </h2>
          <div className="slider reveal reveal-delay-1">
            <div className="slides" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div className="slide" key={i}>
                  <div className="testimonial-card">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <div className="testimonial-text">{t.quote}</div>
                    <div className="user">
                      <img src={t.avatar} alt={t.author} />
                      <div>
                        <strong>{t.author}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
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
      </section>

      <section className="section form-section" ref={formRef}>
        <div className="container form-grid">
          <div className="info-card reveal">
            <span className="tag">Generate with AI</span>
            <h2 className="section-title">
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models
            </h2>
            <p>
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>
            <div className="checklist" style={{ marginTop: '22px' }}>
              {[
                'AI Image Generation with Seedream 4.5',
                'AI Video Generation with Seedance 1.5 Pro by Bytedance',
                'High-Resolution Output',
                'Audio-Visual Synchronization',
              ].map((item, i) => (
                <div className="check" key={i} style={{ color: '#1a1a1a' }}>
                  {icon}
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <form className="form-card reveal reveal-delay-1" onSubmit={handleSubmit}>
            <div className="field">
              <label htmlFor="name">Name</label>
              <input id="name" name="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="email">Email</label>
              <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="phone">Phone</label>
              <input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
            </div>
            <div className="field">
              <label htmlFor="company">Company</label>
              <input id="company" name="company" value={formData.company} onChange={handleChange} />
            </div>
            <button type="submit" className="animated-cta full-btn">
              Generate with AI
            </button>
          </form>
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
            <p style={{ marginTop: '14px' }}>support@techjockey.com</p>
            <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>

          <div>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>

          <div>
            <div className="socials">
              <a className="social" href="#facebook" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 21v-7h2.3l.4-3h-2.7V9.1c0-.9.3-1.6 1.6-1.6H16V4.8c-.2 0-.9-.1-1.8-.1-1.8 0-3.1 1.1-3.1 3.3V11H9v3h2.3v7h2.2z"/></svg>
              </a>
              <a className="social" href="#instagram" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2C5.3 4 4 5.3 4 7v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3H7zm5 3.5A4.5 4.5 0 1112 21a4.5 4.5 0 010-9zm0 2A2.5 2.5 0 1012 17a2.5 2.5 0 000-5zm5.2-3.3a1.1 1.1 0 110 2.2 1.1 1.1 0 010-2.2z"/></svg>
              </a>
              <a className="social" href="#twitter" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.3-5.4.6-.6.9-.8 2-.5 3.1-3.3-.2-6.3-1.8-8.3-4.3-1.1 1.8-.5 4.2 1.3 5.3-.6 0-1.2-.2-1.7-.5 0 2 1.4 3.7 3.4 4.1-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 3.9 2.9A7.9 7.9 0 012 18.6 11.2 11.2 0 008.1 20c7.4 0 11.7-6.3 11.4-12 .8-.5 1.5-1.2 2-2.2z"/></svg>
              </a>
              <a className="social" href="#linkedin" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.5H3.8V20h3.1V8.5zM5.3 3A1.8 1.8 0 103.5 4.8 1.8 1.8 0 005.3 3zM20.5 13c0-3-1.6-4.7-4.3-4.7-1.8 0-2.7 1-3.1 1.7V8.5H10V20h3.1v-6.2c0-1.6.3-3.1 2.3-3.1s2 1.8 2 3.2V20h3.1z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;