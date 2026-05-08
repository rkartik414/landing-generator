import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#FFFFFF';
  const primary = '#FFFFFF';
  const bodyBg = '#f5f5f5';

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeProduct, setActiveProduct] = useState(0);
  const formRef = useRef(null);

  const primaryCTA = 'Generate with AI';

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      author: 'Vaishali Saxena',
      role: 'Creative Director',
      avatar: '/output/generated-assets/ds_1777446610390_4fddc4d7/08-54eb4b4f8f.png',
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      author: 'Vihaan Pandey',
      role: 'Video Producer',
      avatar: '/output/generated-assets/ds_1777446610390_4fddc4d7/07-8cf7df2e52.png',
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      author: 'Anurag Malhotra',
      role: 'Art Director',
      avatar: '/output/generated-assets/ds_1777446610390_4fddc4d7/08-54eb4b4f8f.png',
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      author: 'Ashutosh Singh',
      role: 'Marketing Manager',
      avatar: '/output/generated-assets/ds_1777446610390_4fddc4d7/07-8cf7df2e52.png',
    },
    {
      quote:
        'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.',
      author: 'Shrimmi Saxena',
      role: 'Creative Lead',
      avatar: '/output/generated-assets/ds_1777446610390_4fddc4d7/08-54eb4b4f8f.png',
    },
  ];

  const products = [
    {
      name: 'Seedream 4.5',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      image: '/output/generated-assets/ds_1777446610390_4fddc4d7/15-7f64cfae87.jpeg',
      features: [
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
      ],
    },
    {
      name: 'Seedance 1.5 Pro',
      headline: 'AI Video Generation with Seedance 1.5 Pro by Bytedance',
      description:
        'Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.',
      image: '/output/generated-assets/ds_1777446610390_4fddc4d7/16-a025b6ba4f.jpeg',
      features: [
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
      ],
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

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth' });

  const css = `
    *{box-sizing:border-box} html{scroll-behavior:smooth}
    body{margin:0;background:${bodyBg};font-family:'Inter',sans-serif;color:#1a1a1a}
    a{text-decoration:none;color:inherit}
    img{max-width:100%;display:block}
    .lp{background:${bodyBg};overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:88px 0;position:relative}
    .section-dark{background:#1a1a1a;color:#fff}
    .section-white{background:#fff}
    .section-off{background:#fafafa}
    .nav{position:sticky;top:0;z-index:50;background:rgba(26,26,26,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand-text{font-weight:800;font-size:20px;color:${accent};line-height:1.2}
    .nav-right{display:flex;align-items:center;gap:16px}
    .hero{background:#ff6b00;color:#fff;padding:92px 0 70px;position:relative;overflow:hidden}
    .hero:before,.hero:after{content:'';position:absolute;border-radius:50%;pointer-events:none}
    .hero:before{width:420px;height:420px;right:-120px;top:-120px;background:radial-gradient(circle,rgba(255,255,255,.18),transparent 70%)}
    .hero:after{width:300px;height:300px;left:-80px;bottom:-80px;background:radial-gradient(circle,rgba(255,255,255,.12),transparent 70%)}
    .grid-lines{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);background-size:40px 40px;mask-image:linear-gradient(to bottom,rgba(0,0,0,.8),transparent)}
    .hero-grid,.product-grid,.pricing-grid,.form-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center;position:relative;z-index:2}
    h1,h2,h3{font-family:'Plus Jakarta Sans',sans-serif;margin:0 0 16px}
    h1{font-size:clamp(48px,6vw,68px);line-height:1.02;letter-spacing:-.03em}
    h2{font-size:clamp(32px,4vw,44px);line-height:1.08;letter-spacing:-.02em}
    h3{font-size:22px}
    p{margin:0 0 14px;color:inherit}
    .sub{font-size:18px;line-height:1.7;max-width:720px;color:rgba(255,255,255,.9)}
    .desc{font-size:17px;line-height:1.75;color:#5b5b5b}
    .gradient-text{background:linear-gradient(135deg,#FFFFFF 0%,#FFFFFF 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
    .chip{display:flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.08);font-size:13px;color:#fff}
    .hero-ctas{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
    @keyframes borderRotate{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    .animated-cta{position:relative;padding:12px 24px;border-radius:10px;overflow:hidden;background:transparent;color:#fff;font-weight:700;cursor:pointer;z-index:1;border:none;transition:transform .25s ease,box-shadow .25s ease;white-space:nowrap}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(0,0,0,.2)}
    .animated-cta::before{content:'';position:absolute;inset:-2px;background:conic-gradient(from 0deg,#FFFFFF,#FFFFFF,#FFFFFF);border-radius:inherit;animation:borderRotate 3s linear infinite;z-index:-2}
    .animated-cta::after{content:'';position:absolute;inset:1px;background:#ff6b00;border-radius:8px;z-index:-1}
    .ghost-btn{padding:12px 24px;border-radius:10px;border:1px solid rgba(255,255,255,.35);background:rgba(255,255,255,.08);color:#fff;font-weight:700;cursor:pointer;transition:.25s}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(0,0,0,.12)}
    .hero-visual{position:relative}
    .browser-frame{background:#101010;border:1px solid rgba(255,255,255,.1);border-radius:18px;box-shadow:0 30px 80px rgba(0,0,0,.3);overflow:hidden}
    .browser-top{display:flex;gap:8px;align-items:center;padding:12px 14px;border-bottom:1px solid rgba(255,255,255,.08);background:#151515}
    .dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.35)}
    .browser-frame img,.browser-frame video{width:100%;max-height:480px;object-fit:contain;background:#111}
    .floating-card{position:absolute;padding:12px 14px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.08);backdrop-filter:blur(10px);border-radius:14px;color:#fff;font-size:13px}
    .fc1{top:16px;left:-12px}.fc2{right:-12px;bottom:24px}
    .marquee-wrapper{overflow:hidden;background:#fafafa;padding:18px 0;border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    .marquee-item{font:800 26px 'Plus Jakarta Sans',sans-serif;white-space:nowrap;margin-right:42px;color:#1a1a1a}
    .trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:28px}
    .logo-box{border:1px solid rgba(255,255,255,0.08);border-radius:12px;padding:16px;min-height:72px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.02)}
    .logo-box img{max-height:36px;object-fit:contain;filter:grayscale(1);transition:.3s}
    .logo-box:hover img{filter:grayscale(0)}
    .section-tag{display:inline-block;padding:8px 12px;border-radius:999px;background:rgba(255,107,0,.08);border:1px solid rgba(255,107,0,.15);color:#ff6b00;font-weight:700;font-size:12px;letter-spacing:.04em;text-transform:uppercase;margin-bottom:16px}
    .spotlight{background:#fff;border:1px solid #e7e7e7;border-radius:24px;padding:24px;box-shadow:0 12px 40px rgba(0,0,0,.06)}
    .left-border{border-left:3px solid rgba(255,107,0,.2);padding-left:18px;margin:18px 0 24px}
    .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .feature-card{background:#fafafa;border:1px solid #e7e7e7;border-radius:18px;padding:16px;transition:.25s}
    .feature-card:hover{transform:translateY(-2px);box-shadow:0 14px 28px rgba(0,0,0,.06)}
    .feature-head{display:flex;gap:12px;align-items:flex-start}
    .icon{width:40px;height:40px;flex:0 0 40px;border-radius:12px;background:linear-gradient(135deg,#ff6b00,#ff8a33);display:grid;place-items:center;color:#fff}
    .feature-card h4{margin:0 0 6px;font:700 16px 'Plus Jakarta Sans',sans-serif;color:#1a1a1a}
    .feature-card p{margin:0;color:#5b5b5b;font-size:14px;line-height:1.6}
    .tabs{display:flex;gap:10px;flex-wrap:wrap;margin:24px 0}
    .tab-btn{padding:12px 16px;border-radius:12px;border:1px solid #e7e7e7;background:#fff;font-weight:700;cursor:pointer}
    .tab-btn.active{background:#1a1a1a;color:#fff;border-color:#1a1a1a}
    .pricing-wrap{background:#fff;border-radius:24px;padding:28px;border:1px solid #e7e7e7;box-shadow:0 16px 40px rgba(0,0,0,.05);height:100%}
    .pricing-wrap.highlight{position:relative;border-color:#ff6b00}
    .badge{display:inline-block;background:#eaf8ee;color:#1f8b4d;font-weight:700;font-size:12px;padding:7px 10px;border-radius:999px;margin-bottom:14px}
    .price{font:800 30px 'Plus Jakarta Sans',sans-serif;color:#1a1a1a;margin:10px 0 16px}
    .price.muted{font-size:22px;color:#5b5b5b}
    .strike{text-decoration:line-through;color:#8c8c8c;font-size:15px}
    .plan-list{list-style:none;padding:0;margin:18px 0 22px}
    .plan-list li{display:flex;gap:10px;align-items:flex-start;margin-bottom:12px;color:#5b5b5b;line-height:1.6}
    .check{width:18px;height:18px;margin-top:3px;flex:0 0 18px;color:#1f8b4d}
    .full-btn{width:100%;display:inline-flex;justify-content:center}
    .testimonial-shell{position:relative;overflow:hidden}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-card{min-width:100%;background:#fff;border:1px solid #e7e7e7;border-radius:24px;padding:34px;box-shadow:0 16px 40px rgba(0,0,0,.05)}
    .quote-mark{font-size:52px;line-height:1;color:#ff6b00;font-weight:800}
    .stars{color:#f2b01e;font-size:18px;letter-spacing:2px;margin:6px 0 16px}
    .author{display:flex;align-items:center;gap:14px;margin-top:20px}
    .author img{width:56px;height:56px;border-radius:50%;object-fit:cover}
    .author-name{font-weight:800}
    .author-role{color:#7a7a7a;font-size:14px}
    .slider-controls{display:flex;align-items:center;justify-content:center;gap:10px;margin-top:22px}
    .arrow{width:42px;height:42px;border-radius:999px;border:1px solid #e7e7e7;background:#fff;cursor:pointer}
    .dot-btn{width:8px;height:8px;border-radius:999px;border:none;background:#d0d0d0;cursor:pointer;transition:.3s}
    .dot-btn.active{width:24px;background:#ff6b00}
    .form-card{background:#fff;border:1px solid #e7e7e7;border-radius:24px;padding:28px;box-shadow:0 16px 40px rgba(0,0,0,.05)}
    .fields{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .field.full{grid-column:1/-1}
    label{display:block;font-weight:700;margin-bottom:8px}
    input{width:100%;padding:14px 16px;border-radius:12px;border:1px solid #dcdcdc;outline:none;font:500 15px 'Inter',sans-serif;transition:.2s;background:#fff}
    input:focus{border-color:${accent};box-shadow:0 0 0 3px rgba(255,107,0,.16)}
    .form-card .animated-cta::after{background:#1a1a1a}
    .footer{background:#1a1a1a;color:#fff;padding:34px 0}
    .footer-grid{display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center}
    .footer-links,.socials{display:flex;gap:16px;flex-wrap:wrap;align-items:center}
    .social{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08)}
    .muted{color:#bcbcbc}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}
    @media (max-width: 991px){
      .hero-grid,.product-grid,.pricing-grid,.form-grid,.footer-grid{grid-template-columns:1fr}
      .nav-inner{grid-template-columns:1fr auto auto}
      .trust-grid{grid-template-columns:repeat(2,1fr)}
      .fields,.feature-grid{grid-template-columns:1fr}
    }
    @media (max-width: 640px){
      .nav-inner{grid-template-columns:1fr;justify-items:start}
      .nav-right{width:100%;justify-content:space-between}
      .hero{padding-top:72px}
      .section{padding:64px 0}
      .trust-grid{grid-template-columns:1fr 1fr}
    }
  `;

  const iconSvg = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l2.4 4.86L20 10l-4 3.9.94 5.6L12 17l-4.94 2.5L8 13.9 4 10l5.6-2.14L12 3z" fill="currentColor"/>
    </svg>
  );

  return (
    <div className="lp">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand-text">Seedream 4.5 and Seedance 1.5 Pro</div>
          <div className="nav-right">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <button className="animated-cta" onClick={scrollToForm}>{primaryCTA}</button>
        </div>
      </nav>

      <section className="hero">
        <div className="grid-lines" />
        <div className="container hero-grid">
          <div>
            <h1 className="reveal">
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models
            </h1>
            <p className="sub reveal reveal-delay-1">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>

            <div className="hero-chips reveal reveal-delay-2">
              {[
                'AI Image Generation',
                'AI Video Generation',
                'High-Resolution Output',
                'Audio-Visual Synchronization',
                'Multilingual Lip-Sync',
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  {iconSvg}
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-ctas reveal reveal-delay-3">
              <button className="animated-cta" onClick={scrollToForm}>{primaryCTA}</button>
              <button className="ghost-btn" onClick={scrollToForm}>{primaryCTA}</button>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-2">
            <div className="browser-frame">
              <div className="browser-top">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <img
                src="/output/generated-assets/ds_1777446610390_4fddc4d7/14-3965757185.jpeg"
                alt="Create High-Quality AI Images & Videos with ByteDance Generative Models"
              />
            </div>
            <div className="floating-card fc1">Seedream 4.5</div>
            <div className="floating-card fc2">Seedance 1.5 Pro</div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, i) =>
            [
              'Seedream 4.5 and Seedance 1.5 Pro',
              'AI Image Generation and AI Video Generation',
              'Generate with AI',
            ].map((item, idx) => (
              <span className="marquee-item" key={`${i}-${idx}`}>
                {item} <span className="gradient-text">★</span>
              </span>
            ))
          )}
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          <div className="reveal">
            <span className="section-tag" style={{ background: 'rgba(255,255,255,.08)', borderColor: 'rgba(255,255,255,.12)', color: '#fff' }}>
              Trusted Visual Stack
            </span>
            <h2>Trusted proof through <span className="gradient-text">logos</span></h2>
          </div>
          <div className="trust-grid reveal reveal-delay-1">
            {[
              '/output/generated-assets/ds_1777446610390_4fddc4d7/02-b49ede77a2.png',
              '/output/generated-assets/ds_1777446610390_4fddc4d7/03-7e88a6f9c4.svg',
              '/output/generated-assets/ds_1777446610390_4fddc4d7/04-0583796109.svg',
              '/output/generated-assets/ds_1777446610390_4fddc4d7/05-9156b45743.svg',
            ].map((src, i) => (
              <div className="logo-box" key={i}>
                <img src={src} alt={`Trust logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container product-grid">
          <div className="spotlight reveal">
            <div className="browser-frame">
              <div className="browser-top">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <img src={products[0].image} alt={products[0].name} />
            </div>
          </div>
          <div>
            <span className="section-tag reveal">Seedream 4.5</span>
            <h2 className="reveal reveal-delay-1">
              AI Image Generation with <span className="gradient-text">Seedream 4.5</span>
            </h2>
            <div className="left-border reveal reveal-delay-1">
              <p className="desc">{products[0].description}</p>
            </div>
            <div className="feature-grid reveal reveal-delay-2">
              {products[0].features.map((f, i) => (
                <div className="feature-card" key={i}>
                  <div className="feature-head">
                    <div className="icon">{iconSvg}</div>
                    <div>
                      <h4>{f.title}</h4>
                      <p>{f.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 22 }}>
              <button className="animated-cta" onClick={scrollToForm}>{primaryCTA}</button>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, i) =>
            ['Seedream 4.5', 'Seedance 1.5 Pro', 'ByteDance Generative Models'].map((item, idx) => (
              <span className="marquee-item" key={`${i}-${idx}`}>
                {item} <span className="gradient-text">★</span>
              </span>
            ))
          )}
        </div>
      </div>

      <section className="section" style={{ background: bodyBg }}>
        <div className="container">
          <div className="tabs reveal">
            {products.map((p, i) => (
              <button
                key={i}
                className={`tab-btn ${activeProduct === i ? 'active' : ''}`}
                onClick={() => setActiveProduct(i)}
              >
                {p.name}
              </button>
            ))}
          </div>

          <div className="product-grid">
            <div>
              <span className="section-tag reveal">{products[activeProduct].name}</span>
              <h2 className="reveal reveal-delay-1">
                {activeProduct === 1 ? (
                  <>AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro by Bytedance</span></>
                ) : (
                  <>AI Image Generation with <span className="gradient-text">Seedream 4.5</span></>
                )}
              </h2>
              <div className="left-border reveal reveal-delay-1">
                <p className="desc">{products[activeProduct].description}</p>
              </div>
              <div className="feature-grid reveal reveal-delay-2">
                {products[activeProduct].features.map((f, i) => (
                  <div className="feature-card" key={i}>
                    <div className="feature-head">
                      <div className="icon">{iconSvg}</div>
                      <div>
                        <h4>{f.title}</h4>
                        <p>{f.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 22 }}>
                <button className="animated-cta" onClick={scrollToForm}>{primaryCTA}</button>
              </div>
            </div>

            <div className="spotlight reveal">
              <div className="browser-frame">
                <div className="browser-top">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <img src={products[activeProduct].image} alt={products[activeProduct].name} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 28 }}>
            <span className="section-tag">Pricing</span>
            <h2>Pricing for <span className="gradient-text">Seedream 4.5 and Seedance 1.5 Pro</span></h2>
          </div>
          <div className="pricing-grid" style={{ gridTemplateColumns: '1fr 1fr' }}>
            <div className="pricing-wrap reveal">
              <div className="badge">Get Quote</div>
              <h3>Seedream 4.5 (AI Image Generation)</h3>
              <div className="price muted">Get Quote</div>
              <div className="strike"></div>
              <ul className="plan-list">
                {[
                  'High-resolution image generation (up to 4K quality)',
                  'Text-to-image & multimodal image editing',
                  'Multi-image composition for complex visuals',
                  'Enhanced typographic rendering for posters, ads & text-heavy designs',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="check">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="animated-cta full-btn" onClick={scrollToForm}>{primaryCTA}</button>
            </div>

            <div className="pricing-wrap highlight reveal reveal-delay-1">
              <div className="badge">Starting at $1,000/month/</div>
              <h3>Seedance 1.5 Pro (AI Video Generation)</h3>
              <div className="price">Starting at $1,000/month/</div>
              <div className="strike"></div>
              <ul className="plan-list">
                {[
                  'Text-to-video generation with cinematic output',
                  'Native audio + video generation (synchronized)',
                  'Multilingual lip-sync capabilities',
                  'Fast inference for quicker video production',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="check">
                      <svg viewBox="0 0 24 24" fill="none"><path d="M20 6L9 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="animated-cta full-btn" onClick={scrollToForm}>{primaryCTA}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-off">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 28 }}>
            <span className="section-tag">Testimonials</span>
            <h2>What professionals say about <span className="gradient-text">Seedream and Seedance</span></h2>
          </div>

          <div className="testimonial-shell reveal reveal-delay-1">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div className="testimonial-card" key={i}>
                  <div className="quote-mark">❝</div>
                  <div className="stars">★★★★★</div>
                  <p style={{ fontSize: 20, lineHeight: 1.8, color: '#1a1a1a' }}>{t.quote}</p>
                  <div className="author">
                    <img src={t.avatar} alt={t.author} />
                    <div>
                      <div className="author-name">{t.author}</div>
                      <div className="author-role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-controls">
              <button
                className="arrow"
                onClick={() => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
              >
                ←
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot-btn ${i === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
              <button
                className="arrow"
                onClick={() => setActiveSlide((prev) => (prev + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" ref={formRef}>
        <div className="container form-grid">
          <div className="reveal">
            <span className="section-tag">Generate with AI</span>
            <h2>Explore Seedream 4.5 and <span className="gradient-text">Seedance 1.5 Pro</span></h2>
            <p className="desc">
              Professionals and businesses creating high-quality visual content, including creative teams, marketers, video producers, art directors, and marketing managers
            </p>
          </div>
          <div className="form-card reveal reveal-delay-1">
            <form onSubmit={(e) => e.preventDefault()}>
              <div className="fields">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" type="text" placeholder="Enter your name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" placeholder="Enter your email" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" type="tel" placeholder="Enter your phone" />
                </div>
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input id="company" type="text" placeholder="Enter your company" />
                </div>
                <div className="field full">
                  <button type="submit" className="animated-cta full-btn">{primaryCTA}</button>
                </div>
              </div>
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
              style={{ marginBottom: 14 }}
            />
            <div className="muted" style={{ marginBottom: 10 }}>support@techjockey.com</div>
            <div className="muted">© 2024 Techjockey Infotech Pvt. Ltd.</div>
          </div>

          <div style={{ display: 'grid', gap: 14, justifyItems: 'end' }}>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms</a>
            </div>
            <div className="socials">
              <a className="social" href="#facebook" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z"/></svg>
              </a>
              <a className="social" href="#instagram" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
              </a>
              <a className="social" href="#twitter" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.7-5.8-.1-1 1-1.5 2.5-1.2 3.9-3.2-.2-6.2-1.8-8.2-4.3-1.1 1.9-.5 4.3 1.3 5.5-.6 0-1.2-.2-1.7-.5 0 2 1.4 3.8 3.4 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 3.9 2.9A8.5 8.5 0 0 1 2 19.5 12 12 0 0 0 8.5 21c7.8 0 12.2-6.8 11.9-12.8.8-.6 1.5-1.4 1.6-2.4z"/></svg>
              </a>
              <a className="social" href="#linkedin" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2.01 2.01 0 0 0 3.2 5c0 1.1.9 2 2.02 2a2 2 0 1 0 .03-4zM20.44 12.58c0-2.9-1.55-4.25-3.62-4.25-1.67 0-2.42.92-2.84 1.56V8.5h-3.38V20h3.38v-6.42c0-.34.03-.68.13-.92.27-.68.89-1.39 1.93-1.39 1.36 0 1.9 1.05 1.9 2.59V20H21v-7.42z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;