import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#000000';
  const primary = '#000000';
  const bodyBg = '#f5f5f5';

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

  const logos = [
    '/output/generated-assets/ds_1777534074970_fc2a9a40/03-4c3a78453d.svg',
    '/output/generated-assets/ds_1777534074970_fc2a9a40/02-fdb52a99cb.svg',
    '/output/generated-assets/ds_1777534074970_fc2a9a40/05-2f1bf4991a.svg',
    '/output/generated-assets/ds_1777534074970_fc2a9a40/04-b220e1ecff.svg',
    '/output/generated-assets/ds_1777534074970_fc2a9a40/08-1105638fee.svg',
    '/output/generated-assets/ds_1777534074970_fc2a9a40/06-390297f625.svg',
  ];

  const galleryVideos = [
    'https://assets.leonardo.ai/aZXkFcFoBIGEghys_Hero1.mp4',
    'https://assets.leonardo.ai/aaGwTsFoBIGEg7aH_Hero3.mp4',
    'https://assets.leonardo.ai/aaGwXMFoBIGEg7aP_Hero5.mp4',
    'https://assets.leonardo.ai/aaGwZ8FoBIGEg7aQ_Hero2.mp4',
  ];

  const galleryImages = [
    '/output/generated-assets/ds_1777534074970_fc2a9a40/19-336c55c5a0.png',
    '/output/generated-assets/ds_1777534074970_fc2a9a40/21-e1b1bc05a8.jpeg',
    '/output/generated-assets/ds_1777534074970_fc2a9a40/23-fa9caa1249.png',
    '/output/generated-assets/ds_1777534074970_fc2a9a40/22-41ea7f7485.png',
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [seedreamOpen, setSeedreamOpen] = useState(0);
  const [seedanceOpen, setSeedanceOpen] = useState(0);
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
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};}
    *{box-sizing:border-box} html{scroll-behavior:smooth}
    body{margin:0;font-family:'Inter',sans-serif;background:var(--bodyBg);color:#1a1a1a}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .lp{background:var(--bodyBg);overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:84px 0;position:relative}
    .section-dark{background:#1a1a1a;color:#fff}
    .section-light{background:#fff}
    .section-muted{background:#f5f5f5}
    .section-hero{background:#ff6b00;color:#fff;padding:110px 0 80px;overflow:hidden}
    .section-title,h1,h2,h3{font-family:'Montserrat',sans-serif;margin:0 0 16px}
    h1{font-size:clamp(48px,6vw,68px);line-height:1.05;letter-spacing:-.02em}
    h2{font-size:clamp(32px,4.3vw,46px);line-height:1.1;letter-spacing:-.02em}
    h3{font-size:20px}
    p{margin:0 0 14px;color:inherit;line-height:1.75}
    .subtle{color:#5f6368}
    .section-dark .subtle{color:rgba(255,255,255,.78)}
    .badge{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.16);background:rgba(255,255,255,.1);font-size:13px;font-weight:700}
    .light-badge{border-color:#e5e7eb;background:#fff;color:#1a1a1a}
    .nav{position:sticky;top:0;z-index:50;background:rgba(17,17,17,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand-text{font-weight:800;font-size:20px;color:#fff;font-family:'Montserrat',sans-serif}
    .nav-right{display:flex;align-items:center;gap:18px}
    .btn,.animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:14px 24px;border-radius:10px;font-weight:800;border:none;cursor:pointer}
    @keyframes borderRotate {from{transform:rotate(0deg)}to{transform:rotate(360deg)}}
    .animated-cta{position:relative;overflow:hidden;background:transparent;color:#fff;z-index:1}
    .animated-cta::before{content:'';position:absolute;inset:-2px;background:conic-gradient(from 0deg,var(--accent),var(--primary),var(--accent));border-radius:inherit;animation:borderRotate 3s linear infinite;z-index:-2}
    .animated-cta::after{content:'';position:absolute;inset:1px;background:#ff6b00;border-radius:8px;z-index:-1}
    .animated-cta:hover{transform:translateY(-3px);box-shadow:0 18px 42px rgba(0,0,0,.22)}
    .animated-cta::after{transition:transform .6s ease}
    .ghost-btn{padding:14px 24px;border:1px solid rgba(255,255,255,.28);border-radius:10px;font-weight:700;color:#fff;background:transparent}
    .hero-grid,.split-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center}
    .hero-copy{position:relative;z-index:2}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:26px}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.28);background:rgba(0,0,0,.12);font-size:13px;color:#fff}
    .hero-visual{position:relative;min-height:520px;display:flex;align-items:center;justify-content:center}
    .orb{position:absolute;border-radius:50%;filter:blur(18px);opacity:.55}
    .orb.one{width:240px;height:240px;background:rgba(0,0,0,.22);top:10%;right:8%}
    .orb.two{width:180px;height:180px;background:rgba(255,255,255,.18);bottom:12%;left:8%}
    .mock-stage{position:relative;width:100%;max-width:560px}
    .hero-panel{position:relative;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);backdrop-filter:blur(18px);border-radius:24px;padding:18px;box-shadow:0 24px 70px rgba(0,0,0,.18)}
    .hero-media{border-radius:18px;overflow:hidden;background:#111}
    .hero-media img{width:100%;display:block;object-fit:cover}
    .float-card{position:absolute;background:#fff;color:#111;border-radius:16px;padding:12px 14px;box-shadow:0 18px 40px rgba(0,0,0,.18);font-weight:700;font-size:13px}
    .f1{top:-12px;left:-10px}.f2{right:-8px;top:20%}.f3{left:8%;bottom:-10px}
    .thumbnail-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:10px;margin-top:14px}
    .thumb{height:74px;border-radius:14px;overflow:hidden;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.14)}
    .thumb img{width:100%;height:100%;object-fit:cover;display:block}
    @keyframes marqueeScroll {0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    .marquee-wrapper{overflow:hidden;background:#1a1a1a;padding:20px 0;border-top:1px solid #2e2e2e;border-bottom:1px solid #2e2e2e}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    .marquee-item{font-size:28px;font-weight:800;margin-right:48px;white-space:nowrap;color:rgba(255,255,255,.85);font-family:'Montserrat',sans-serif}
    .gradient-text{background:linear-gradient(135deg,var(--accent),var(--primary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .trust-grid{display:grid;grid-template-columns:repeat(6,1fr);gap:16px;margin-top:26px}
    .logo-box{border:1px solid rgba(0,0,0,.08);border-radius:12px;padding:16px;min-height:72px;display:flex;align-items:center;justify-content:center;background:#fff;transition:.3s}
    .logo-box img{max-height:36px;object-fit:contain;filter:grayscale(1);transition:.3s}
    .logo-box:hover img{filter:grayscale(0)}
    .spotlight{display:grid;grid-template-columns:.95fr 1.05fr;gap:36px;align-items:center;margin-top:22px}
    .spotlight.reverse{grid-template-columns:1.05fr .95fr}
    .media-card,.content-card,.price-card,.testimonial-card,.gallery-item{background:#fff;border:1px solid #e5e7eb;border-radius:22px;box-shadow:0 16px 44px rgba(0,0,0,.08)}
    .media-card{overflow:hidden}
    .media-card.dark{background:#111;border-color:rgba(255,255,255,.08)}
    .media-card img{width:100%;display:block}
    .content-card{padding:28px}
    .desc-bar{border-left:3px solid rgba(0,0,0,.12);padding-left:18px;margin:18px 0 24px}
    .feature-list{display:grid;grid-template-columns:1fr;gap:12px}
    .accordion-item{border:1px solid #e5e7eb;border-radius:16px;background:#fff;overflow:hidden}
    .accordion-btn{width:100%;display:flex;align-items:center;justify-content:space-between;padding:16px 18px;background:#fff;border:none;text-align:left;font-weight:800;font-family:'Montserrat',sans-serif;cursor:pointer}
    .accordion-body{padding:0 18px 18px;color:#5f6368}
    .icon-svg{width:20px;height:20px;flex:0 0 20px}
    .feature-head{display:flex;align-items:center;gap:12px}
    .proof-note{margin-top:10px;font-weight:700}
    .gallery-grid{display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:18px;margin-top:28px}
    .gallery-item{overflow:hidden}
    .gallery-item video,.gallery-item img{width:100%;height:100%;display:block;object-fit:cover}
    .gallery-tall{min-height:420px}
    .gallery-small{min-height:200px}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;margin-top:28px}
    .price-card{padding:28px;position:relative}
    .price-card.highlight{outline:2px solid #111}
    .price-tag{font-size:30px;font-weight:800;font-family:'Montserrat',sans-serif;margin:8px 0 12px}
    .price-empty{font-size:16px;color:#5f6368;font-weight:600}
    .green-badge{display:inline-block;padding:7px 12px;border-radius:999px;background:#e8f7ec;color:#18794e;font-size:12px;font-weight:800}
    .checklist{display:grid;gap:12px;margin:18px 0 24px}
    .check{display:flex;gap:10px;align-items:flex-start;color:#1a1a1a}
    .check svg{margin-top:3px;flex:0 0 18px}
    .price-card .btn-full{width:100%}
    .testimonial-wrap{position:relative;overflow:hidden;margin-top:28px}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-slide{min-width:100%}
    .testimonial-card{padding:34px;background:#fff}
    .quote-mark{font-size:56px;line-height:1;color:var(--accent);font-family:'Montserrat',sans-serif}
    .stars{color:#d4a017;font-size:18px;letter-spacing:2px;margin-bottom:14px}
    .author{display:flex;align-items:center;gap:14px;margin-top:22px}
    .avatar{width:56px;height:56px;border-radius:50%;overflow:hidden;flex:0 0 56px}
    .avatar img{width:100%;height:100%;object-fit:cover}
    .slider-controls{display:flex;align-items:center;justify-content:space-between;margin-top:20px}
    .dots{display:flex;gap:8px}
    .slider-dot{width:10px;height:10px;border-radius:999px;border:none;background:rgba(0,0,0,.18);cursor:pointer}
    .slider-dot.active{transform:scale(1.25);background:var(--accent)}
    .arrow-btn{width:42px;height:42px;border-radius:50%;border:1px solid #d9d9d9;background:#fff;cursor:pointer;font-size:18px}
    .footer{background:#111;color:#fff;padding:42px 0}
    .footer-grid{display:grid;grid-template-columns:1fr auto;gap:20px;align-items:flex-start}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .social{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.16);display:flex;align-items:center;justify-content:center}
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
    @keyframes fadeInUp {from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeInLeft {from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:translateX(0)}}
    @keyframes fadeInRight {from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
    @keyframes zoomIn {from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
    .hero-fade-up{animation:fadeInUp .8s cubic-bezier(.16,1,.3,1) both}
    .hero-fade-left{animation:fadeInLeft .8s cubic-bezier(.16,1,.3,1) both}
    .hero-fade-right{animation:fadeInRight .8s cubic-bezier(.16,1,.3,1) both}
    .hero-zoom{animation:zoomIn .75s cubic-bezier(.16,1,.3,1) both}
    @media (max-width: 991px){
      .hero-grid,.split-grid,.spotlight,.spotlight.reverse,.footer-grid,.pricing-grid,.gallery-grid{grid-template-columns:1fr}
      .trust-grid{grid-template-columns:repeat(3,1fr)}
      .hero-visual{min-height:auto}
      .nav-inner{grid-template-columns:1fr auto;gap:12px}
      .nav-right .animated-cta{display:none}
    }
    @media (max-width: 640px){
      .section{padding:64px 0}
      .section-hero{padding:90px 0 64px}
      .trust-grid{grid-template-columns:repeat(2,1fr)}
      .thumbnail-grid{grid-template-columns:repeat(2,1fr)}
      .marquee-item{font-size:22px}
      .float-card{position:static;margin-top:10px;display:inline-block}
      .hero-actions{flex-direction:column;align-items:flex-start}
    }
  `;

  const FeatureIcon = () => (
    <svg className="icon-svg" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="12" r="10" fill={accent} opacity="0.12" />
      <path d="M7 12.5l3.2 3.2L17 9" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const SocialIcon = ({ type }) => {
    const paths = {
      facebook: 'M14 8h2V4h-2c-2.2 0-4 1.8-4 4v2H8v4h2v6h4v-6h2.5l.5-4H14V8z',
      instagram:
        'M12 7.2A4.8 4.8 0 1 0 12 16.8 4.8 4.8 0 0 0 12 7.2zm0 8A3.2 3.2 0 1 1 12 8.8a3.2 3.2 0 0 1 0 6.4zm6.1-8.2a1.12 1.12 0 1 1-2.24 0 1.12 1.12 0 0 1 2.24 0zM20 8.2c-.05-1.1-.3-2.07-1.1-2.87-.8-.8-1.77-1.05-2.87-1.1C14.88 4.17 9.12 4.17 7.97 4.23c-1.1.05-2.07.3-2.87 1.1-.8.8-1.05 1.77-1.1 2.87-.06 1.15-.06 6.91 0 8.06.05 1.1.3 2.07 1.1 2.87.8.8 1.77 1.05 2.87 1.1 1.15.06 6.91.06 8.06 0 1.1-.05 2.07-.3 2.87-1.1.8-.8 1.05-1.77 1.1-2.87.06-1.15.06-6.91 0-8.06z',
      twitter:
        'M21 7.2c-.67.3-1.38.5-2.14.6a3.74 3.74 0 0 0 1.64-2.06 7.48 7.48 0 0 1-2.37.9A3.73 3.73 0 0 0 11.8 10a10.58 10.58 0 0 1-7.68-3.9 3.73 3.73 0 0 0 1.15 4.98 3.69 3.69 0 0 1-1.69-.47v.05c0 1.8 1.28 3.29 2.98 3.63-.31.09-.64.13-.98.13-.24 0-.47-.02-.7-.06.47 1.47 1.84 2.55 3.46 2.58A7.49 7.49 0 0 1 3 18.5 10.57 10.57 0 0 0 8.73 20c6.87 0 10.63-5.69 10.63-10.63l-.01-.48A7.6 7.6 0 0 0 21 7.2z',
      linkedin:
        'M6.5 8.5A1.5 1.5 0 1 1 6.5 5a1.5 1.5 0 0 1 0 3.5zM5 10h3v9H5v-9zm5 0h2.87v1.23h.04c.4-.76 1.37-1.56 2.82-1.56 3.01 0 3.57 1.98 3.57 4.56V19h-3v-4.04c0-.96-.02-2.2-1.34-2.2-1.34 0-1.55 1.05-1.55 2.13V19h-3v-9z',
    };
    return (
      <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor">
        <path d={paths[type]} />
      </svg>
    );
  };

  return (
    <div className="lp">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
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
          </div>
          <div className="nav-right" style={{ justifyContent: 'flex-end' }}>
            <a href="#pricing" className="animated-cta">Generate with AI</a>
          </div>
        </div>
      </nav>

      <section className="section-hero" ref={heroRef}>
        <div className="container hero-grid">
          <div className="hero-copy stagger-parent visible">
            <div className="badge hero-fade-left">AI Image Generation and AI Video Generation</div>
            <h1 className="hero-fade-up">
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models
            </h1>
            <p className="hero-fade-up">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro
              (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>
            <p className="hero-fade-up">
              From text prompts, images, or scripts, generate professional visuals and videos with powerful multimodal AI systems.
            </p>

            <div className="chips hero-fade-up">
              {[
                'AI Image Generation',
                'AI Video Generation',
                'High-Resolution Output',
                'Audio-Visual Synchronization',
                'Multilingual Lip-Sync',
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  <FeatureIcon />
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions hero-fade-up">
              <a href="#pricing" className="animated-cta">Generate with AI</a>
              <a href="#gallery" className="ghost-btn">Generate with AI</a>
            </div>
          </div>

          <div className="hero-visual hero-fade-right">
            <div className="orb one float-1" />
            <div className="orb two float-2" />
            <div className="mock-stage">
              <div className="hero-panel hero-zoom">
                <div className="hero-media">
                  <video autoPlay muted loop playsInline preload="auto" style={{ width: '100%', display: 'block' }}>
                    <source src="https://assets.leonardo.ai/aZXkFcFoBIGEghys_Hero1.mp4" type="video/mp4" />
                  </video>
                </div>
                <div className="thumbnail-grid">
                  {galleryImages.map((img, i) => (
                    <div className="thumb" key={i}>
                      <img src={img} alt={`AI visual ${i + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
              <div className="float-card f1">Seedream 4.5</div>
              <div className="float-card f2">Seedance 1.5 Pro</div>
              <div className="float-card f3">Professionals creating high-quality visual content</div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].flatMap(() =>
            [...Array(6)].map((_, i) => (
              <span className="marquee-item" key={`m1-${i}`}>
                Seedream 4.5 and Seedance 1.5 Pro <span className="gradient-text">★</span> AI Image Generation and AI Video Generation
              </span>
            ))
          )}
        </div>
      </div>

      <section className="section section-light">
        <div className="container">
          <div className="reveal">
            <div className="badge light-badge">Trust</div>
            <h2 className="section-title">Proof through <span className="gradient-text">logos</span></h2>
            <p className="subtle">The visitor trusts logos most. This trust bar is the dominant trust signal on the page.</p>
          </div>
          <div className="trust-grid reveal">
            {logos.map((logo, i) => (
              <div className="logo-box" key={i}>
                <img src={logo} alt={`Trust logo ${i + 1}`} style={{ maxHeight: '36px', objectFit: 'contain' }} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-muted">
        <div className="container">
          <div className="spotlight">
            <div className="media-card dark reveal-left">
              <img src="/output/generated-assets/ds_1777534074970_fc2a9a40/19-336c55c5a0.png" alt="Seedream 4.5" />
            </div>
            <div className="content-card reveal-right">
              <div className="badge light-badge">AI Image Generation</div>
              <h2>AI Image Generation with <span className="gradient-text">Seedream 4.5</span></h2>
              <div className="desc-bar">
                <p className="subtle">
                  Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution,
                  high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image
                  editing, and multi-image composition within a single framework.
                </p>
              </div>
              <div className="feature-list">
                {[
                  ['Advanced Text–Image Alignment', 'Accurately translates prompts into visuals with improved semantic understanding.'],
                  ['High-Resolution Output', 'Generate native images up to 1K–4K resolution with strong visual fidelity.'],
                  ['Superior Typographic Rendering', 'Optimized for posters, ads, and text-heavy visual designs.'],
                  ['Multi-Image Composition with Identity Preservation', 'Combines multiple inputs while accurately maintaining subject consistency.'],
                  ['Strong Structural Fidelity', 'Maintains composition, layout, and scene structure with high precision.'],
                ].map((item, idx) => (
                  <div className="accordion-item" key={idx}>
                    <button className="accordion-btn" onClick={() => setSeedreamOpen(seedreamOpen === idx ? -1 : idx)}>
                      <span className="feature-head"><FeatureIcon />{item[0]}</span>
                      <span>{seedreamOpen === idx ? '−' : '+'}</span>
                    </button>
                    {seedreamOpen === idx && <div className="accordion-body">{item[1]}</div>}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20 }}>
                <a href="#pricing" className="animated-cta">Generate with AI</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].flatMap(() =>
            [...Array(6)].map((_, i) => (
              <span className="marquee-item" key={`m2-${i}`}>
                Seedance 1.5 Pro by Bytedance <span className="gradient-text">★</span> Text-to-Video Generation
              </span>
            ))
          )}
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          <div className="spotlight reverse">
            <div className="content-card reveal-left" style={{ background: '#fff', color: '#1a1a1a' }}>
              <div className="badge light-badge">AI Video Generation</div>
              <h2>AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro</span> by Bytedance</h2>
              <div className="desc-bar">
                <p className="subtle">
                  Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation,
                  enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer
                  architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.
                </p>
              </div>
              <div className="feature-list">
                {[
                  ['Text-to-Video Generation', 'Create videos directly from text prompts.'],
                  ['Audio-Visual Synchronization', 'Generate video and audio simultaneously with strong multimodal alignment.'],
                  ['Multilingual Lip-Sync', 'Supports multilingual and dialect-level lip synchronization.'],
                  ['Cinematic Camera Control', 'Generate videos with dynamic camera movement and cinematic storytelling.'],
                  ['10× Faster Inference', 'Optimized inference pipeline significantly improves generation speed.'],
                ].map((item, idx) => (
                  <div className="accordion-item" key={idx}>
                    <button className="accordion-btn" onClick={() => setSeedanceOpen(seedanceOpen === idx ? -1 : idx)}>
                      <span className="feature-head"><FeatureIcon />{item[0]}</span>
                      <span>{seedanceOpen === idx ? '−' : '+'}</span>
                    </button>
                    {seedanceOpen === idx && <div className="accordion-body">{item[1]}</div>}
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 20 }}>
                <a href="#pricing" className="animated-cta">Generate with AI</a>
              </div>
            </div>
            <div className="media-card reveal-right">
              <img src="/output/generated-assets/ds_1777534074970_fc2a9a40/21-e1b1bc05a8.jpeg" alt="Seedance 1.5 Pro" />
            </div>
          </div>
        </div>
      </section>

      <section id="gallery" className="section section-light">
        <div className="container">
          <div className="reveal">
            <div className="badge light-badge">Gallery</div>
            <h2>A gallery section containing <span className="gradient-text">videos and images</span></h2>
            <p className="subtle">Explore visual outputs and motion previews for AI image generation and AI video generation.</p>
          </div>
          <div className="gallery-grid reveal">
            <div className="gallery-item gallery-tall">
              <video autoPlay muted loop playsInline preload="auto">
                <source src={galleryVideos[0]} type="video/mp4" />
              </video>
            </div>
            <div style={{ display: 'grid', gap: '18px' }}>
              <div className="gallery-item gallery-small">
                <img src={galleryImages[0]} alt="Gallery image 1" />
              </div>
              <div className="gallery-item gallery-small">
                <video autoPlay muted loop playsInline preload="auto">
                  <source src={galleryVideos[1]} type="video/mp4" />
                </video>
              </div>
            </div>
            <div style={{ display: 'grid', gap: '18px' }}>
              <div className="gallery-item gallery-small">
                <img src={galleryImages[1]} alt="Gallery image 2" />
              </div>
              <div className="gallery-item gallery-small">
                <img src={galleryImages[2]} alt="Gallery image 3" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section section-light">
        <div className="container">
          <div className="reveal">
            <div className="badge light-badge">Pricing</div>
            <h2>Pricing for <span className="gradient-text">Seedream 4.5 and Seedance 1.5 Pro</span></h2>
          </div>
          <div className="pricing-grid reveal">
            <div className="price-card">
              <div className="green-badge">Pricing</div>
              <h3 style={{ marginTop: 14 }}>Seedream 4.5 (AI Image Generation)</h3>
              <div className="price-empty">(was )</div>
              <div className="checklist">
                {[
                  'High-resolution image generation (up to 4K quality)',
                  'Text-to-image & multimodal image editing',
                  'Multi-image composition for complex visuals',
                  'Enhanced typographic rendering for posters, ads & text-heavy designs',
                ].map((item, i) => (
                  <div className="check" key={i}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a href="#testimonials" className="animated-cta btn-full">Generate with AI</a>
            </div>

            <div className="price-card highlight">
              <div className="green-badge">Pricing</div>
              <h3 style={{ marginTop: 14 }}>Seedance 1.5 Pro (AI Video Generation)</h3>
              <div className="price-tag">Starting at $1,000/month/</div>
              <div className="price-empty">(was )</div>
              <div className="checklist">
                {[
                  'Text-to-video generation with cinematic output',
                  'Native audio + video generation (synchronized)',
                  'Multilingual lip-sync capabilities',
                  'Fast inference for quicker video production',
                ].map((item, i) => (
                  <div className="check" key={i}>
                    <svg viewBox="0 0 24 24" width="18" height="18" fill="none">
                      <path d="M20 6L9 17l-5-5" stroke="#16a34a" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a href="#testimonials" className="animated-cta btn-full">Generate with AI</a>
            </div>
          </div>
        </div>
      </section>

      <section id="testimonials" className="section section-muted">
        <div className="container">
          <div className="reveal">
            <div className="badge light-badge">Testimonials</div>
            <h2>What creative professionals are saying</h2>
          </div>

          <div className="testimonial-wrap reveal">
            <div className="testimonial-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div className="testimonial-slide" key={i}>
                  <div className="testimonial-card">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p style={{ fontSize: '22px', lineHeight: 1.7 }}>{t.quote}</p>
                    <div className="author">
                      <div className="avatar">
                        <img src="/output/generated-assets/ds_1777534074970_fc2a9a40/25-211a05c01a.png" alt={t.name} />
                      </div>
                      <div>
                        <div style={{ fontWeight: 800 }}>{t.name}</div>
                        <div className="subtle">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-controls">
              <div>
                <button className="arrow-btn" onClick={() => setActiveSlide((activeSlide - 1 + testimonials.length) % testimonials.length)}>‹</button>
                <button className="arrow-btn" style={{ marginLeft: 10 }} onClick={() => setActiveSlide((activeSlide + 1) % testimonials.length)}>›</button>
              </div>
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
            <p style={{ marginTop: 16 }}>support@techjockey.com</p>
            <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
            <div className="footer-links">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms</a>
            </div>
          </div>

          <div className="socials">
            <a className="social" href="/" aria-label="Facebook"><SocialIcon type="facebook" /></a>
            <a className="social" href="/" aria-label="Instagram"><SocialIcon type="instagram" /></a>
            <a className="social" href="/" aria-label="Twitter"><SocialIcon type="twitter" /></a>
            <a className="social" href="/" aria-label="LinkedIn"><SocialIcon type="linkedin" /></a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;