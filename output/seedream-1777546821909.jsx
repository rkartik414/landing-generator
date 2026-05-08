import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#3a2ef8';
  const primary = '#3a2ef8';
  const bodyBg = '#1a1a1a';

  const testimonials = [
    {
      quote:
        "Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.",
      author: 'Vaishali Saxena',
      role: 'Creative Director',
      avatar: '/output/generated-assets/ds_1777546555572_e56ff0ce/04-2770603589.png',
    },
    {
      quote:
        "Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.",
      author: 'Vihaan Pandey',
      role: 'Video Producer',
      avatar: '/output/generated-assets/ds_1777546555572_e56ff0ce/05-fd8403a48b.png',
    },
    {
      quote:
        "The multimodal editing capabilities in Seedream make it easy to refine images with precision.",
      author: 'Anurag Malhotra',
      role: 'Art Director',
      avatar: '/output/generated-assets/ds_1777546555572_e56ff0ce/07-2f95c6a6c6.png',
    },
    {
      quote:
        "Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.",
      author: 'Ashutosh Singh',
      role: 'Marketing Manager',
      avatar: '/output/generated-assets/ds_1777546555572_e56ff0ce/06-ea188ac20a.png',
    },
    {
      quote:
        "From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.",
      author: 'Shrimmi Saxena',
      role: 'Creative Lead',
      avatar: '/output/generated-assets/ds_1777546555572_e56ff0ce/08-26297278f3.png',
    },
  ];

  const galleryMedia = [
    '/output/generated-assets/ds_1777546555572_e56ff0ce/11-f578e07b46.jpeg',
    '/output/generated-assets/ds_1777546555572_e56ff0ce/13-577dd50cc7.jpeg',
    '/output/generated-assets/ds_1777546555572_e56ff0ce/17-1e5ff9f843.png',
    '/output/generated-assets/ds_1777546555572_e56ff0ce/29-447ebcaa7d.webp',
    'https://assets-static.invideo.io/files/Invideo_Demo_HP_18_10_2024_V001_8d82de6d4a.mp4',
    'https://assets-static.invideo.io/files/Generative_v30_b53e1e8491.mp4',
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const heroRef = useRef(null);

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
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};--text:#fff;--muted:#c7c7c7;--line:#2a2a2a}
    *{box-sizing:border-box} html{scroll-behavior:smooth}
    body{margin:0;font-family:Inter,sans-serif;background:var(--bodyBg);color:var(--text)}
    h1,h2,h3,h4{font-family:"Plus Jakarta Sans",sans-serif;margin:0 0 16px}
    p{margin:0 0 14px;line-height:1.7}
    a{text-decoration:none;color:inherit}
    img,video{max-width:100%;display:block}
    .container{width:min(1200px,calc(100% - 32px));margin:auto}
    .section{padding:88px 0;position:relative;overflow:hidden}
    .light{background:#f5f5f5;color:#121212}
    .dark{background:#111}
    .deep{background:#1a1a1a}
    .heroBg{background:#ff6b00}
    .muted{color:var(--muted)}
    .light .muted{color:#5f6368}
    .tag{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border:1px solid rgba(255,255,255,.2);border-radius:999px;background:rgba(255,255,255,.1);font-size:12px;font-weight:700;letter-spacing:.02em}
    .light .tag{border-color:rgba(0,0,0,.08);background:rgba(58,46,248,.07);color:#222}
    .btn{border:0;padding:14px 22px;border-radius:12px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:10px}
    .animated-cta,.btn-magnetic{position:relative;overflow:hidden;background:var(--accent);color:#fff;transition:transform .22s ease,box-shadow .22s ease,background .22s ease}
    .animated-cta:hover,.btn-magnetic:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(0,0,0,.18)}
    .animated-cta::before,.animated-cta::after{display:none!important;content:none!important}
    .ghost-btn{background:transparent;border:1px solid rgba(255,255,255,.22);color:#fff}
    .light .ghost-btn{border-color:rgba(0,0,0,.14);color:#121212}
    .nav{position:sticky;top:0;z-index:50;background:rgba(10,10,10,.78);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-bar{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:16px 0}
    .brand-left{font-family:"Plus Jakarta Sans",sans-serif;font-weight:800;font-size:20px;color:var(--accent)}
    .nav-right{display:flex;align-items:center;justify-content:flex-end}
    .hero-grid,.split-grid{display:grid;grid-template-columns:1.03fr .97fr;gap:48px;align-items:center}
    .banner-title{font-size:clamp(48px,6vw,70px);line-height:1.02;letter-spacing:-.03em}
    .hero-copy{max-width:640px}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 28px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.26);background:rgba(255,255,255,.12);font-size:13px;color:#fff}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{position:relative;min-height:500px;display:flex;align-items:center;justify-content:center}
    .visual-shell{position:relative;width:100%;max-width:560px;padding:18px;border-radius:28px;background:rgba(255,255,255,.11);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.22);box-shadow:0 30px 80px rgba(0,0,0,.22)}
    .hero-main-media{border-radius:20px;overflow:hidden}
    .hero-main-media img{width:100%;max-height:480px;object-fit:cover}
    .float-card{position:absolute;background:rgba(255,255,255,.13);border:1px solid rgba(255,255,255,.22);backdrop-filter:blur(14px);border-radius:18px;padding:14px 16px;box-shadow:0 18px 42px rgba(0,0,0,.18)}
    .float-a{top:16px;left:-18px}.float-b{right:-10px;bottom:26px}.float-c{left:40px;bottom:-12px}
    .float-card strong{display:block;font-family:"Plus Jakarta Sans",sans-serif}
    .orb{position:absolute;border-radius:50%;filter:blur(12px);pointer-events:none}
    .orb1{width:280px;height:280px;right:-90px;top:-40px;background:radial-gradient(circle, rgba(58,46,248,.38), transparent 68%)}
    .orb2{width:240px;height:240px;left:-80px;bottom:-50px;background:radial-gradient(circle, rgba(255,255,255,.18), transparent 70%)}
    .gradient-text{background:linear-gradient(135deg,var(--accent),var(--primary));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    @keyframes fadeInUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeInLeft{from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:translateX(0)}}
    @keyframes fadeInRight{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
    @keyframes zoomIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
    @keyframes popIn{0%{opacity:0;transform:scale(.85)}70%{transform:scale(1.04)}100%{opacity:1;transform:scale(1)}}
    .hero-fade-up{animation:fadeInUp .8s cubic-bezier(.16,1,.3,1) both}
    .hero-fade-left{animation:fadeInLeft .8s cubic-bezier(.16,1,.3,1) both}
    .hero-fade-right{animation:fadeInRight .8s cubic-bezier(.16,1,.3,1) both}
    .hero-zoom{animation:zoomIn .75s cubic-bezier(.16,1,.3,1) both}
    .pop-in{animation:popIn .55s cubic-bezier(.16,1,.3,1) both}
    .reveal{opacity:0;transform:translateY(42px);transition:opacity .75s cubic-bezier(.16,1,.3,1),transform .75s cubic-bezier(.16,1,.3,1)}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-left{opacity:0;transform:translateX(-42px);transition:.75s cubic-bezier(.16,1,.3,1)}
    .reveal-right{opacity:0;transform:translateX(42px);transition:.75s cubic-bezier(.16,1,.3,1)}
    .reveal-left.visible,.reveal-right.visible{opacity:1;transform:translateX(0)}
    .stagger-parent>*{opacity:0;transform:translateY(28px);transition:.65s cubic-bezier(.16,1,.3,1)}
    .stagger-parent.visible>*{opacity:1;transform:translateY(0)}
    .stagger-parent.visible>*:nth-child(2){transition-delay:.08s}
    .stagger-parent.visible>*:nth-child(3){transition-delay:.16s}
    .stagger-parent.visible>*:nth-child(4){transition-delay:.24s}
    .stagger-parent.visible>*:nth-child(5){transition-delay:.32s}
    .metrics-strip{display:grid;grid-template-columns:repeat(7,1fr);gap:18px;margin-top:26px}
    .metric-logo{height:74px;border:1px solid rgba(255,255,255,.08);border-radius:18px;background:rgba(255,255,255,.04);display:flex;align-items:center;justify-content:center;padding:16px;filter:grayscale(1);transition:.25s ease}
    .metric-logo:hover{filter:grayscale(0);transform:translateY(-2px)}
    .metric-logo img{max-height:30px;max-width:100%;opacity:.9}
    .trust-copy{margin-bottom:28px;max-width:720px}
    .marquee-wrapper{overflow:hidden;background:#1a1a1a;padding:20px 0;border-top:1px solid #2a2a2a;border-bottom:1px solid #2a2a2a}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    .marquee-item{font-size:28px;font-weight:800;margin-right:48px;white-space:nowrap;color:rgba(255,255,255,.8);font-family:"Plus Jakarta Sans",sans-serif}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    .browser-frame{background:#0d0d0d;border:1px solid rgba(255,255,255,.1);border-radius:22px;overflow:hidden;box-shadow:0 24px 60px rgba(0,0,0,.2)}
    .browser-top{display:flex;align-items:center;gap:8px;padding:14px 16px;background:#161616;border-bottom:1px solid rgba(255,255,255,.08)}
    .dot{width:10px;height:10px;border-radius:50%;background:#666}.dot:nth-child(1){background:#ff5f57}.dot:nth-child(2){background:#febc2e}.dot:nth-child(3){background:#28c840}
    .browser-frame img,.browser-frame video{width:100%;height:420px;object-fit:cover}
    .spotlight-card{padding:22px;border-radius:28px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08)}
    .light .spotlight-card{background:#fff;border-color:#ececec}
    .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:18px}
    .feature-box{padding:18px;border-radius:18px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08)}
    .light .feature-box{background:#fff;border-color:#e8e8e8}
    .feature-top{display:flex;gap:12px;align-items:flex-start}
    .feature-icon{width:42px;height:42px;min-width:42px;border-radius:12px;display:grid;place-items:center;background:rgba(58,46,248,.15);color:var(--accent)}
    .feature-title{font-family:"Plus Jakarta Sans",sans-serif;font-size:16px;font-weight:700;margin-bottom:6px}
    .left-bar{border-left:2px solid rgba(255,255,255,.15);padding-left:20px}
    .light .left-bar{border-left-color:rgba(0,0,0,.12)}
    .auto-scroll-media{max-height:520px;overflow:hidden;position:relative;border-radius:26px}
    .auto-scroll-track{display:flex;flex-direction:column;gap:16px;animation:autoScrollY 18s linear infinite}
    .auto-scroll-media:hover .auto-scroll-track{animation-play-state:paused}
    @keyframes autoScrollY{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
    .auto-scroll-track img,.auto-scroll-track video{width:100%;border-radius:18px;object-fit:cover;height:220px}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
    .price-card{position:relative;background:#fff;border:1px solid #e8e8e8;border-radius:24px;padding:26px;color:#101010;display:flex;flex-direction:column}
    .price-card.highlight{box-shadow:0 18px 40px rgba(58,46,248,.16);border-color:rgba(58,46,248,.45)}
    .price-name{font-family:"Plus Jakarta Sans",sans-serif;font-size:24px;font-weight:800}
    .price-now{font-size:34px;font-weight:800;font-family:"Plus Jakarta Sans",sans-serif;margin:8px 0 14px}
    .price-empty{font-size:18px;font-weight:700;color:#4b5563;margin:8px 0 14px}
    .badge-green{display:inline-block;padding:6px 10px;border-radius:999px;background:#e8f8ee;color:#117a37;font-size:12px;font-weight:800;margin-bottom:14px}
    .price-list{list-style:none;padding:0;margin:12px 0 22px;display:grid;gap:12px}
    .price-list li{display:flex;gap:10px;align-items:flex-start}
    .testimonials-wrap{display:grid;grid-template-columns:1.2fr .8fr;gap:26px;align-items:center}
    .testimonial-stage{position:relative;overflow:hidden;border-radius:28px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)}
    .testimonial-slide{display:none;animation:fadeSlide .6s ease;padding:34px}
    .testimonial-slide.active{display:block}
    @keyframes fadeSlide{from{opacity:0;transform:translateX(24px)}to{opacity:1;transform:translateX(0)}}
    .quote-mark{font-size:56px;line-height:1;color:var(--accent);font-family:"Plus Jakarta Sans",sans-serif}
    .stars{color:#f5c451;font-size:18px;letter-spacing:2px}
    .author-row{display:flex;align-items:center;gap:14px;margin-top:24px}
    .author-row img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.1)}
    .slider-dots{display:flex;gap:10px;justify-content:center;margin-top:20px}
    .slider-dot{width:10px;height:10px;border-radius:999px;border:0;background:rgba(255,255,255,.28);cursor:pointer;transition:.25s ease}
    .slider-dot.active{transform:scale(1.25);background:var(--accent)}
    .avatar-stack{display:grid;gap:14px}
    .mini-card{display:flex;gap:12px;align-items:center;padding:14px 16px;border-radius:18px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)}
    .mini-card img{width:48px;height:48px;border-radius:50%;object-fit:cover}
    .footer{padding:40px 0;background:#0d0d0d;border-top:1px solid rgba(255,255,255,.08)}
    .footer-grid{display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center}
    .footer-meta{display:flex;flex-wrap:wrap;gap:16px;color:#c7c7c7;font-size:14px;margin-top:14px}
    .socials{display:flex;gap:10px;flex-wrap:wrap}
    .social-btn{width:40px;height:40px;border-radius:12px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);display:grid;place-items:center;color:#fff}
    @media(max-width:991px){
      .hero-grid,.split-grid,.testimonials-wrap,.pricing-grid,.footer-grid{grid-template-columns:1fr}
      .metrics-strip{grid-template-columns:repeat(3,1fr)}
      .feature-grid{grid-template-columns:1fr}
      .hero-visual{min-height:auto}
    }
    @media(max-width:640px){
      .nav-bar{grid-template-columns:1fr auto;gap:12px}
      .nav-bar .nav-right:last-child{grid-column:1/-1;justify-content:flex-start}
      .metrics-strip{grid-template-columns:repeat(2,1fr)}
      .section{padding:68px 0}
      .banner-title{font-size:48px}
      .marquee-item{font-size:22px}
      .browser-frame img,.browser-frame video{height:280px}
    }
  `;

  const icon = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l2.6 5.27L20 9.04l-4 3.9.94 5.5L12 15.77 7.06 18.44 8 12.94l-4-3.9 5.4-.77L12 3z" fill={accent}/>
    </svg>
  );

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-bar">
          <div className="brand-left">Seedream 4.5 and Seedance 1.5 Pro</div>
          <div className="nav-right">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <div className="nav-right">
            <a href="#pricing" className="btn animated-cta">Generate with AI</a>
          </div>
        </div>
      </nav>

      <section className="section heroBg" ref={heroRef}>
        <div className="orb orb1 float-1" />
        <div className="orb orb2 float-2" />
        <div className="container hero-grid">
          <div className="hero-copy stagger-parent visible hero-fade-left">
            <div className="tag">AI Image Generation and AI Video Generation</div>
            <h1 className="banner-title">
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models
            </h1>
            <p className="muted" style={{ color: '#fff' }}>
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>
            <p style={{ color: 'rgba(255,255,255,.9)' }}>
              From text prompts, images, or scripts, generate professional visuals and videos with powerful multimodal AI systems.
            </p>
            <div className="chip-row">
              {[
                'AI Image Generation',
                'AI Video Generation',
                'High-Resolution Output',
                'Audio-Visual Synchronization',
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  {icon}
                  <span>{chip}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <a href="#pricing" className="btn animated-cta">Generate with AI</a>
              <a href="#products" className="btn ghost-btn">Generate with AI</a>
            </div>
          </div>

          <div className="hero-visual hero-fade-right">
            <div className="visual-shell hero-zoom">
              <div className="hero-main-media">
                <img
                  src="/output/generated-assets/ds_1777546555572_e56ff0ce/24-de3fcc8d6b.webp"
                  alt="Create High-Quality AI Images & Videos with ByteDance Generative Models"
                />
              </div>
              <div className="float-card float-a pop-in">
                <strong>Seedream 4.5</strong>
                <span>AI Image Generation</span>
              </div>
              <div className="float-card float-b pop-in">
                <strong>Seedance 1.5 Pro</strong>
                <span>AI Video Generation</span>
              </div>
              <div className="float-card float-c pop-in">
                <strong>Generate with AI</strong>
                <span>Professionals looking to create high-quality AI images and videos</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark">
        <div className="container">
          <div className="trust-copy reveal visible">
            <div className="tag">Trust</div>
            <h2 style={{ fontSize: 'clamp(32px,4vw,44px)', marginTop: 16 }}>
              Proof strategy built around <span className="gradient-text">logos</span>
            </h2>
            <p className="muted">
              Professionals looking to create high-quality AI images and videos, including creative, marketing, design, and video production teams
            </p>
          </div>
          <div className="metrics-strip stagger-parent visible">
            {[
              '/output/generated-assets/ds_1777546555572_e56ff0ce/02-a9efd7e3bb.svg',
              '/output/generated-assets/ds_1777546555572_e56ff0ce/03-345ab2caaa.svg',
              '/output/generated-assets/ds_1777546555572_e56ff0ce/09-297e82c0c2.svg',
              '/output/generated-assets/ds_1777546555572_e56ff0ce/20-e518cfbc13.svg',
              '/output/generated-assets/ds_1777546555572_e56ff0ce/19-887bbba58b.svg',
              '/output/generated-assets/ds_1777546555572_e56ff0ce/22-668846f689.svg',
              '/output/generated-assets/ds_1777546555572_e56ff0ce/21-ffdbc376bc.svg',
            ].map((src, i) => (
              <div className="metric-logo" key={i}>
                <img src={src} alt={`Trust logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span className="marquee-item" key={i}>
              Seedream 4.5 and Seedance 1.5 Pro <span className="gradient-text">★</span> AI Image Generation and AI Video Generation
            </span>
          ))}
        </div>
      </div>

      <section className="section light" id="products">
        <div className="container split-grid">
          <div className="reveal-left visible">
            <div className="spotlight-card">
              <div className="browser-frame">
                <div className="browser-top"><span className="dot" /><span className="dot" /><span className="dot" /></div>
                <img
                  src="/output/generated-assets/ds_1777546555572_e56ff0ce/01-3965757185.jpeg"
                  alt="AI Image Generation with Seedream 4.5"
                />
              </div>
              <div className="feature-grid">
                {[
                  {
                    title: 'Advanced Text–Image Alignment',
                    desc: 'Accurately translates prompts into visuals with improved semantic understanding.',
                  },
                  {
                    title: 'High-Resolution Output',
                    desc: 'Generate native images up to 1K–4K resolution with strong visual fidelity.',
                  },
                  {
                    title: 'Superior Typographic Rendering',
                    desc: 'Optimized for posters, ads, and text-heavy visual designs.',
                  },
                  {
                    title: 'Strong Structural Fidelity',
                    desc: 'Maintains composition, layout, and scene structure with high precision.',
                  },
                ].map((item, i) => (
                  <div className="feature-box" key={i}>
                    <div className="feature-top">
                      <div className="feature-icon">{icon}</div>
                      <div>
                        <div className="feature-title">{item.title}</div>
                        <p className="muted">{item.desc}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="reveal-right visible">
            <div className="tag">Seedream 4.5</div>
            <h2 style={{ fontSize: 'clamp(32px,4vw,44px)', marginTop: 16 }}>
              AI Image Generation with <span className="gradient-text">Seedream 4.5</span>
            </h2>
            <div className="left-bar">
              <p>
                Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs.
              </p>
              <p>
                The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.
              </p>
            </div>
            <div className="feature-grid" style={{ marginTop: 24 }}>
              {[
                ['Multi-Image Composition with Identity Preservation', 'Combines multiple inputs while accurately maintaining subject consistency.'],
                ['Strong Structural Fidelity', 'Maintains composition, layout, and scene structure with high precision.'],
              ].map((f, i) => (
                <div className="feature-box" key={i}>
                  <div className="feature-top">
                    <div className="feature-icon">{icon}</div>
                    <div>
                      <div className="feature-title">{f[0]}</div>
                      <p className="muted">{f[1]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <a href="#pricing" className="btn animated-cta">Generate with AI</a>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span className="marquee-item" key={i}>
              Seedance 1.5 Pro <span className="gradient-text">★</span> Generate with AI
            </span>
          ))}
        </div>
      </div>

      <section className="section dark">
        <div className="container split-grid">
          <div className="reveal-left visible">
            <div className="tag">Seedance 1.5 Pro</div>
            <h2 style={{ fontSize: 'clamp(32px,4vw,44px)', marginTop: 16 }}>
              AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro by Bytedance</span>
            </h2>
            <div className="left-bar">
              <p className="muted">
                Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together.
              </p>
              <p className="muted">
                Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.
              </p>
            </div>
            <div className="feature-grid" style={{ marginTop: 24 }}>
              {[
                ['Text-to-Video Generation', 'Create videos directly from text prompts.'],
                ['Audio-Visual Synchronization', 'Generate video and audio simultaneously with strong multimodal alignment.'],
                ['Multilingual Lip-Sync', 'Supports multilingual and dialect-level lip synchronization.'],
                ['Cinematic Camera Control', 'Generate videos with dynamic camera movement and cinematic storytelling.'],
                ['10× Faster Inference', 'Optimized inference pipeline significantly improves generation speed.'],
              ].map((item, i) => (
                <div className="feature-box" key={i}>
                  <div className="feature-top">
                    <div className="feature-icon">{icon}</div>
                    <div>
                      <div className="feature-title">{item[0]}</div>
                      <p className="muted">{item[1]}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <a href="#pricing" className="btn animated-cta">Generate with AI</a>
            </div>
          </div>

          <div className="reveal-right visible">
            <div className="spotlight-card">
              <div className="browser-frame">
                <div className="browser-top"><span className="dot" /><span className="dot" /><span className="dot" /></div>
                <img
                  src="/output/generated-assets/ds_1777546555572_e56ff0ce/10-7f64cfae87.jpeg"
                  alt="AI Video Generation with Seedance 1.5 Pro by Bytedance"
                />
              </div>
              <div style={{ marginTop: 18, borderRadius: 18, overflow: 'hidden' }}>
                <video autoPlay muted loop playsInline preload="auto">
                  <source src="https://assets-static.invideo.io/files/Landing_Page_V001_30_10_2024_1b17e50c44.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container split-grid">
          <div className="reveal-left visible">
            <div className="tag">Gallery</div>
            <h2 style={{ fontSize: 'clamp(32px,4vw,44px)', marginTop: 16 }}>
              Images and videos for <span className="gradient-text">AI visual workflows</span>
            </h2>
            <p className="muted">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>
          </div>
          <div className="reveal-right visible">
            <div className="auto-scroll-media" style={{ height: 520 }}>
              <div className="auto-scroll-track">
                {[...galleryMedia, ...galleryMedia].map((item, i) =>
                  item.endsWith('.mp4') ? (
                    <video key={i} autoPlay muted loop playsInline preload="auto">
                      <source src={item} type="video/mp4" />
                    </video>
                  ) : (
                    <img key={i} src={item} alt={`Gallery media ${i + 1}`} />
                  )
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section light" id="pricing">
        <div className="container">
          <div className="reveal visible" style={{ maxWidth: 760, marginBottom: 34 }}>
            <div className="tag">Pricing</div>
            <h2 style={{ fontSize: 'clamp(32px,4vw,44px)', marginTop: 16 }}>
              Explore <span className="gradient-text">pricing</span>
            </h2>
          </div>

          <div className="pricing-grid">
            <div className="price-card">
              <div className="price-name">Seedream 4.5 (AI Image Generation)</div>
              <div className="price-empty">Get Quote</div>
              <ul className="price-list">
                {[
                  'High-resolution image generation (up to 4K quality)',
                  'Text-to-image & multimodal image editing',
                  'Multi-image composition for complex visuals',
                  'Enhanced typographic rendering for posters, ads & text-heavy designs',
                ].map((item, i) => (
                  <li key={i}>
                    <span style={{ color: accent, fontWeight: 900 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#testimonials" className="btn animated-cta" style={{ width: '100%', marginTop: 'auto' }}>
                Generate with AI
              </a>
            </div>

            <div className="price-card highlight">
              <div className="badge-green">Starting at $1,000/month/</div>
              <div className="price-name">Seedance 1.5 Pro (AI Video Generation)</div>
              <div className="price-now">Starting at $1,000/month/</div>
              <ul className="price-list">
                {[
                  'Text-to-video generation with cinematic output',
                  'Native audio + video generation (synchronized)',
                  'Multilingual lip-sync capabilities',
                  'Fast inference for quicker video production',
                ].map((item, i) => (
                  <li key={i}>
                    <span style={{ color: accent, fontWeight: 900 }}>✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a href="#testimonials" className="btn animated-cta" style={{ width: '100%', marginTop: 'auto' }}>
                Generate with AI
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section deep" id="testimonials">
        <div className="container testimonials-wrap">
          <div className="reveal-left visible">
            <div className="testimonial-stage">
              {testimonials.map((t, i) => (
                <div key={i} className={`testimonial-slide ${i === activeSlide ? 'active' : ''}`}>
                  <div className="quote-mark">❝</div>
                  <div className="stars">★★★★★</div>
                  <p style={{ fontSize: 22, marginTop: 16 }}>{t.quote}</p>
                  <div className="author-row">
                    <img src={t.avatar} alt={t.author} />
                    <div>
                      <div style={{ fontWeight: 800 }}>{t.author}</div>
                      <div className="muted">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`slider-dot ${i === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>

          <div className="reveal-right visible">
            <div className="tag">Testimonials</div>
            <h2 style={{ fontSize: 'clamp(32px,4vw,44px)', marginTop: 16 }}>
              What teams say about <span className="gradient-text">Seedream and Seedance</span>
            </h2>
            <div className="avatar-stack" style={{ marginTop: 24 }}>
              {testimonials.slice(0, 4).map((t, i) => (
                <div className="mini-card" key={i}>
                  <img src={t.avatar} alt={t.author} />
                  <div>
                    <div style={{ fontWeight: 800 }}>{t.author}</div>
                    <div className="muted">{t.role}</div>
                  </div>
                </div>
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
            <div className="footer-meta">
              <span>support@techjockey.com</span>
              <span>© 2024 Techjockey Infotech Pvt. Ltd.</span>
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>

          <div className="socials">
            <a className="social-btn" href="#facebook" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 8H16V4.5h-2.5C10.5 4.5 9 6.2 9 9.2V11H6v3.5h3V21h3.5v-6.5H16L16.5 11h-4V9.6c0-.9.2-1.6 1-1.6z"/></svg>
            </a>
            <a className="social-btn" href="#instagram" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2.5A2.5 2.5 0 004.5 7v10A2.5 2.5 0 007 19.5h10a2.5 2.5 0 002.5-2.5V7A2.5 2.5 0 0017 4.5H7zm5 3A4.5 4.5 0 1112 16a4.5 4.5 0 010-9zm0 2.5A2 2 0 1012 14a2 2 0 000-4zm5.25-3.38a1.13 1.13 0 11-2.25 0 1.13 1.13 0 012.25 0z"/></svg>
            </a>
            <a className="social-btn" href="#twitter" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.77 7.74L23 22h-6.1l-4.78-6.25L6.65 22H3.53l7.24-8.28L1 2h6.25l4.32 5.7L18.9 2z"/></svg>
            </a>
            <a className="social-btn" href="#linkedin" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 103 4.97 1.98 1.98 0 005.25 3zM20.44 12.55c0-3.03-1.61-4.44-3.76-4.44a3.25 3.25 0 00-2.93 1.61h-.05V8.5h-3.24V20h3.38v-6.04c0-1.59.3-3.12 2.27-3.12 1.94 0 1.97 1.81 1.97 3.22V20H21V12.55z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;