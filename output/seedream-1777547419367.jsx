import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#3b82f6';
  const primary = '#3b82f6';
  const bodyBg = '#1a1a1a';

  const productName = 'Seedream 4.5 and Seedance 1.5 Pro';
  const category = 'AI Image Generation and AI Video Generation';
  const primaryCTA = 'Generate with AI';

  const heroImage = '/output/generated-assets/ds_1777546927467_e7dc967d/24-de3fcc8d6b.webp';
  const heroPoster = '/output/generated-assets/ds_1777546927467_e7dc967d/25-7d3fc51982.webp';

  const productSections = [
    {
      name: 'Seedream 4.5',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      image: '/output/generated-assets/ds_1777546927467_e7dc967d/01-3965757185.jpeg',
      features: [
        {
          title: 'Advanced Capabilities of Seedream 4.5 by ByteDance',
          description:
            'From accurate text rendering to consistent image editing and multi-image composition, Seedream 4.5 powers high-quality, professional visual creation with superior precision and control.',
        },
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
      image: '/output/generated-assets/ds_1777546927467_e7dc967d/10-7f64cfae87.jpeg',
      features: [
        {
          title: 'Key Capabilities of Seedance 1.5 Pro',
          description:
            'Seedance enables professional-grade AI video production with narrative coherence and realistic motion.',
        },
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

  const galleryMedia = [
    '/output/generated-assets/ds_1777546927467_e7dc967d/01-3965757185.jpeg',
    '/output/generated-assets/ds_1777546927467_e7dc967d/10-7f64cfae87.jpeg',
    '/output/generated-assets/ds_1777546927467_e7dc967d/11-f578e07b46.jpeg',
    '/output/generated-assets/ds_1777546927467_e7dc967d/13-577dd50cc7.jpeg',
    'https://assets-static.invideo.io/files/Invideo_Demo_HP_18_10_2024_V001_8d82de6d4a.mp4',
    'https://assets-static.invideo.io/files/Generative_v30_b53e1e8491.mp4',
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
    },
  ];

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      author: 'Vaishali Saxena',
      role: 'Creative Director',
      avatar: '/output/generated-assets/ds_1777546927467_e7dc967d/04-2770603589.png',
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      author: 'Vihaan Pandey',
      role: 'Video Producer',
      avatar: '/output/generated-assets/ds_1777546927467_e7dc967d/05-fd8403a48b.png',
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      author: 'Anurag Malhotra',
      role: 'Art Director',
      avatar: '/output/generated-assets/ds_1777546927467_e7dc967d/06-ea188ac20a.png',
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      author: 'Ashutosh Singh',
      role: 'Marketing Manager',
      avatar: '/output/generated-assets/ds_1777546927467_e7dc967d/08-26297278f3.png',
    },
    {
      quote:
        'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.',
      author: 'Shrimmi Saxena',
      role: 'Creative Lead',
      avatar: '/output/generated-assets/ds_1777546927467_e7dc967d/07-2f95c6a6c6.png',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const pageRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible')),
      { threshold: 0.14, rootMargin: '0px 0px -80px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-parent').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};--border:#2a2a2a;--muted:#cfcfcf;--dark:#111111;--light:#f5f5f5;--hero:#ff6b00}
    *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;background:var(--bodyBg);font-family:Inter,sans-serif;color:#fff}
    a{text-decoration:none;color:inherit} img{max-width:100%;display:block} button{font-family:inherit}
    .lp{background:var(--bodyBg);overflow:hidden}
    .container{width:min(1200px,92%);margin:0 auto;position:relative;z-index:2}
    .nav{position:sticky;top:0;z-index:50;background:rgba(17,17,17,.82);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:16px 0}
    .brand{font:700 20px "IBM Plex Mono",monospace;color:var(--accent)}
    .nav-right{display:flex;align-items:center;gap:18px}
    .animated-cta,.ghost-btn,.nav-btn{border:none;padding:12px 20px;border-radius:12px;font-weight:700;cursor:pointer}
    .animated-cta,.btn-magnetic{position:relative;overflow:hidden;background:var(--accent);color:#fff;transition:transform .22s ease,box-shadow .22s ease,background .22s ease}
    .animated-cta:hover,.btn-magnetic:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(0,0,0,.18)}
    .animated-cta::before,.animated-cta::after{display:none!important;content:none!important}
    .ghost-btn{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.22)}
    .hero{background:var(--hero);position:relative;padding:72px 0 56px}
    .precision:before,.precision:after{content:"";position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,.09) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:80px 80px;mask-image:linear-gradient(to bottom,rgba(0,0,0,.55),transparent)}
    .hero-grid,.split{display:grid;grid-template-columns:1.02fr .98fr;gap:52px;align-items:center}
    .tag{display:inline-flex;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.18);font-size:13px;color:#fff;margin-bottom:18px}
    h1,h2,h3{font-family:"IBM Plex Mono",monospace;margin:0 0 16px}
    h1{font-size:clamp(48px,6vw,72px);line-height:1.02;max-width:720px}
    h2{font-size:clamp(32px,4vw,44px);line-height:1.12}
    h3{font-size:22px}
    .muted{color:#f3f3f3;opacity:.92;line-height:1.7;font-size:18px}
    .hero-text .muted{max-width:660px}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 28px}
    .chip{display:flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;border:1px solid rgba(59,130,246,.3);background:rgba(59,130,246,.12);color:#eef6ff;font-size:13px}
    .chip svg,.icon svg{width:16px;height:16px;fill:none;stroke:var(--accent);stroke-width:2}
    .cta-row{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{min-height:520px;position:relative;display:flex;align-items:center;justify-content:center}
    .media-shell{position:relative;width:100%;min-height:520px;background:#0b0b0b;border:1px solid rgba(255,255,255,.1);border-radius:28px;box-shadow:14px 14px 0 rgba(0,0,0,.34);overflow:hidden}
    .hero-bg{position:absolute;inset:0;background:url(${heroImage}) center/cover no-repeat}
    .hero-bg:after{content:"";position:absolute;inset:0;background:rgba(0,0,0,.45)}
    .float-card,.mini-card,.hero-preview{position:absolute;border:1px solid rgba(255,255,255,.12);background:rgba(15,15,20,.86);backdrop-filter:blur(10px);border-radius:18px}
    .hero-preview{left:24px;right:24px;bottom:24px;padding:14px}
    .hero-preview video,.hero-preview img{width:100%;height:210px;object-fit:cover;border-radius:14px}
    .float-card{top:24px;left:24px;padding:14px 16px;min-width:190px}
    .mini-card{top:70px;right:24px;padding:14px;width:180px}
    .wave{display:flex;gap:6px;align-items:flex-end;height:36px;margin-top:10px}
    .wave span{width:8px;background:var(--accent);border-radius:999px;animation:float 2.2s ease-in-out infinite}
    .wave span:nth-child(2){height:28px;animation-delay:.2s}.wave span:nth-child(3){height:16px;animation-delay:.4s}.wave span:nth-child(4){height:30px;animation-delay:.6s}.wave span:nth-child(5){height:20px;animation-delay:.8s}
    .thumb-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px}
    .thumb-grid div{height:48px;border-radius:10px;background:linear-gradient(135deg,rgba(59,130,246,.8),rgba(255,255,255,.18))}
    .section{padding:84px 0;position:relative}
    .bg-dark{background:#111}.bg-body{background:var(--bodyBg)}.bg-light{background:#f5f5f5;color:#111}
    .bg-light .muted{color:#555}.bg-light .feature-card,.bg-light .price-card,.bg-light .testimonial-wrap,.bg-light .gallery-card,.bg-light .spotlight{background:#fff;color:#111;border-color:#e5e5e5}
    .section-top{display:flex;justify-content:space-between;align-items:end;gap:20px;margin-bottom:28px}
    .browser-frame{background:#0f1014;border:1px solid rgba(255,255,255,.08);border-radius:20px;overflow:hidden;box-shadow:14px 14px 0 rgba(0,0,0,.28)}
    .browser-bar{display:flex;gap:8px;padding:12px 14px;background:#16181f;border-bottom:1px solid rgba(255,255,255,.06)}
    .dot{width:10px;height:10px;border-radius:50%;background:#3c404b}
    .dot:nth-child(1){background:#ff5f57}.dot:nth-child(2){background:#febc2e}.dot:nth-child(3){background:#28c840}
    .browser-frame img{width:100%;height:100%;object-fit:cover}
    .spotlight{padding:26px;border:1px solid rgba(255,255,255,.1);border-radius:24px;background:#141414}
    .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:18px}
    .feature-card{padding:18px;border:1px solid rgba(255,255,255,.1);border-radius:18px;background:#0f0f0f}
    .feature-card p{margin:8px 0 0;color:#cfcfcf;line-height:1.6}
    .feature-title{display:flex;gap:12px;align-items:flex-start;font-weight:700}
    .split-visual{height:470px}
    .auto-scroll-media{max-height:520px;overflow:hidden;position:relative;height:470px}
    .auto-scroll-track{display:flex;flex-direction:column;gap:16px;animation:autoScrollY 18s linear infinite}
    .auto-scroll-media:hover .auto-scroll-track{animation-play-state:paused}
    @keyframes autoScrollY{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
    .auto-scroll-track img,.auto-scroll-track video{width:100%;border-radius:18px;object-fit:cover;height:220px}
    .gallery-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:26px;align-items:start}
    .gallery-card{padding:18px;border:1px solid rgba(255,255,255,.1);border-radius:24px;background:#111}
    .gallery-main{border-radius:18px;overflow:hidden}
    .gallery-main video,.gallery-main img{width:100%;height:420px;object-fit:cover}
    .metrics-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .metric{padding:22px;border:1px solid rgba(255,255,255,.08);border-radius:18px;background:#181818;text-align:center}
    .metric .stat-number{font:700 34px "IBM Plex Mono",monospace}
    .marquee-wrapper{overflow:hidden;background:#f5f5f5;padding:18px 0;border-top:1px solid #2a2a2a;border-bottom:1px solid #2a2a2a}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    .marquee-item{font:700 26px "IBM Plex Mono",monospace;margin-right:42px;white-space:nowrap;color:#111}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
    .price-card{padding:26px;border-radius:24px;background:#111;border:1px solid rgba(255,255,255,.1);box-shadow:10px 10px 0 rgba(0,0,0,.28)}
    .price-card.highlight{border-color:rgba(59,130,246,.5)}
    .price{font:700 34px "IBM Plex Mono",monospace;margin:12px 0 18px}
    .price-muted{color:#9aa0aa;text-decoration:line-through;min-height:22px}
    .badge-green{display:inline-flex;padding:6px 10px;border-radius:999px;background:rgba(34,197,94,.15);border:1px solid rgba(34,197,94,.35);color:#86efac;font-size:12px;margin-bottom:10px;min-height:30px}
    .checklist{display:grid;gap:12px;margin:18px 0 24px}
    .check{display:flex;gap:10px;align-items:flex-start;color:#d8d8d8}
    .check svg{width:18px;height:18px;stroke:#22c55e;flex:none;margin-top:2px}
    .full-btn{width:100%;text-align:center;display:inline-block}
    .testimonial-wrap{background:#fff;border-radius:24px;color:#111;padding:16px;border:1px solid #e7e7e7;box-shadow:14px 14px 0 rgba(0,0,0,.08)}
    .testimonial-shell{overflow:hidden}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-slide{min-width:100%;display:block}
    .testimonial-inner{padding:30px}
    .quote-mark{font-size:58px;line-height:1;color:var(--accent);margin-bottom:10px}
    .stars{color:#fbbf24;letter-spacing:2px;font-size:18px;margin:10px 0 18px}
    .author{display:flex;gap:14px;align-items:center;margin-top:22px}
    .author img{width:58px;height:58px;border-radius:50%;object-fit:cover}
    .role{color:#666}
    .slider-controls{display:flex;justify-content:space-between;align-items:center;margin-top:18px}
    .arrow-btn{width:42px;height:42px;border-radius:50%;border:1px solid #ddd;background:#fff;cursor:pointer}
    .dots{display:flex;gap:8px}
    .slider-dot{width:8px;height:8px;border-radius:999px;background:#cbd5e1;border:none;cursor:pointer;transition:.25s ease}
    .slider-dot.active{transform:scale(1.25);background:var(--accent)}
    .final-cta{padding:84px 0;background:#111}
    .final-box{padding:34px;border:1px solid rgba(255,255,255,.1);border-radius:28px;background:linear-gradient(180deg,rgba(59,130,246,.08),rgba(255,255,255,.02));text-align:center;box-shadow:14px 14px 0 rgba(0,0,0,.22)}
    .footer{padding:34px 0;background:#0d0d0d;border-top:1px solid rgba(255,255,255,.08)}
    .footer-grid{display:grid;grid-template-columns:1.3fr 1fr auto;gap:24px;align-items:center}
    .footer-links,.socials{display:flex;gap:16px;flex-wrap:wrap;align-items:center}
    .socials a{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(255,255,255,.12);color:#fff}
    .gradient-text{background:linear-gradient(135deg,var(--accent),var(--primary));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .hero-fade-left{animation:fadeInLeft .8s cubic-bezier(.16,1,.3,1) both}.hero-fade-right{animation:fadeInRight .8s cubic-bezier(.16,1,.3,1) both}.hero-fade-up{animation:fadeInUp .8s cubic-bezier(.16,1,.3,1) both}
    .reveal{opacity:0;transform:translateY(42px);transition:opacity .75s cubic-bezier(.16,1,.3,1),transform .75s cubic-bezier(.16,1,.3,1)}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .stagger-parent>*{opacity:0;transform:translateY(28px);transition:.65s cubic-bezier(.16,1,.3,1)}
    .stagger-parent.visible>*{opacity:1;transform:translateY(0)}
    .stagger-parent.visible>*:nth-child(2){transition-delay:.08s}.stagger-parent.visible>*:nth-child(3){transition-delay:.16s}.stagger-parent.visible>*:nth-child(4){transition-delay:.24s}.stagger-parent.visible>*:nth-child(5){transition-delay:.32s}
    @keyframes fadeInUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeInLeft{from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:translateX(0)}}
    @keyframes fadeInRight{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
    @keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
    @media (max-width: 980px){
      .hero-grid,.split,.gallery-grid,.pricing-grid,.footer-grid{grid-template-columns:1fr}
      .metrics-strip{grid-template-columns:1fr}
      .nav-inner{grid-template-columns:1fr auto auto}
      .feature-grid{grid-template-columns:1fr}
      .hero-visual,.media-shell{min-height:420px}
      .gallery-main video,.gallery-main img{height:280px}
    }
    @media (max-width: 640px){
      h1{font-size:48px}.nav-inner{gap:10px}.brand{font-size:16px}.nav-right img{height:24px}.animated-cta,.ghost-btn{padding:10px 14px}
      .hero{padding-top:48px}.section{padding:66px 0}.testimonial-inner,.price-card,.gallery-card,.spotlight{padding:20px}
      .marquee-item{font-size:20px}
    }
  `;

  const icon = (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
  );

  const renderFeatureCards = (features) => (
    <div className="feature-grid reveal">
      {features.map((f, i) => (
        <div className="feature-card" key={i}>
          <div className="feature-title">
            <span className="icon">{icon}</span>
            <span>{f.title}</span>
          </div>
          <p>{f.description}</p>
        </div>
      ))}
    </div>
  );

  return (
    <div className="lp" ref={pageRef}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">Seedream 4.5 and Seedance 1.5 Pro</div>
          <div className="nav-right">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <a href="#pricing" className="animated-cta nav-btn">
            {primaryCTA}
          </a>
        </div>
      </nav>

      <section className="hero precision">
        <div className="container hero-grid">
          <div className="hero-text stagger-parent hero-fade-left">
            <div className="tag">{category}</div>
            <h1>
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models
            </h1>
            <p className="muted">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
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
            <div className="cta-row">
              <a href="#pricing" className="animated-cta">
                {primaryCTA}
              </a>
              <a href="#testimonials" className="ghost-btn">
                Generate with AI
              </a>
            </div>
          </div>

          <div className="hero-visual hero-fade-right">
            <div className="media-shell">
              <div className="hero-bg" />
              <div className="float-card float-1">
                <div style={{ fontWeight: 700 }}>Seedream 4.5</div>
                <div style={{ color: '#cfcfcf', fontSize: 13, marginTop: 4 }}>AI Image Generation</div>
                <div className="thumb-grid">
                  <div />
                  <div />
                  <div />
                </div>
              </div>
              <div className="mini-card float-2">
                <div style={{ fontWeight: 700 }}>Seedance 1.5 Pro</div>
                <div style={{ color: '#cfcfcf', fontSize: 13, marginTop: 4 }}>AI Video Generation</div>
                <div className="wave">
                  <span style={{ height: 18 }} />
                  <span />
                  <span />
                  <span />
                  <span />
                </div>
              </div>
              <div className="hero-preview float-3">
                <img src={heroPoster} alt="Seedream 4.5 and Seedance 1.5 Pro" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <div className="section-top reveal">
            <div>
              <div className="tag">Trust</div>
              <h2>Proof-first buying experience</h2>
            </div>
          </div>
          <div className="metrics-strip reveal">
            <div className="metric">
              <div className="stat-number">2</div>
              <div className="muted">ByteDance generative models</div>
            </div>
            <div className="metric">
              <div className="stat-number">4K</div>
              <div className="muted">High-resolution image generation</div>
            </div>
            <div className="metric">
              <div className="stat-number">10×</div>
              <div className="muted">Faster inference</div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, group) =>
            [
              `${productName} ★ ${category}`,
              `Seedream 4.5 ★ AI Image Generation`,
              `Seedance 1.5 Pro ★ AI Video Generation`,
            ].map((item, i) => (
              <div className="marquee-item" key={`${group}-${i}`}>
                {item}
              </div>
            ))
          )}
        </div>
      </div>

      <section className="section bg-body">
        <div className="container split">
          <div className="reveal">
            <div className="browser-frame split-visual">
              <div className="browser-bar">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <img src={productSections[0].image} alt={productSections[0].name} />
            </div>
          </div>
          <div className="reveal">
            <div className="tag">{productSections[0].name}</div>
            <h2>
              AI Image Generation with <span className="gradient-text">Seedream 4.5</span>
            </h2>
            <div style={{ borderLeft: '2px solid rgba(255,255,255,0.15)', paddingLeft: 18 }}>
              <p className="muted">{productSections[0].description}</p>
            </div>
            <div className="spotlight" style={{ marginTop: 22 }}>
              <h3>{productSections[0].features[0].title}</h3>
              <p className="muted" style={{ margin: 0 }}>
                {productSections[0].features[0].description}
              </p>
            </div>
            {renderFeatureCards(productSections[0].features.slice(1))}
            <div style={{ marginTop: 24 }}>
              <a href="#pricing" className="animated-cta">
                {primaryCTA}
              </a>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, group) =>
            [
              'Text-to-Video Generation ★ Audio-Visual Synchronization',
              'Multilingual Lip-Sync ★ Cinematic Camera Control',
              '10× Faster Inference ★ Native audio + video generation',
            ].map((item, i) => (
              <div className="marquee-item" key={`m2-${group}-${i}`}>
                {item}
              </div>
            ))
          )}
        </div>
      </div>

      <section className="section bg-dark">
        <div className="container split">
          <div className="reveal">
            <div className="tag">{productSections[1].name}</div>
            <h2>
              AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro</span> by Bytedance
            </h2>
            <div style={{ borderLeft: '2px solid rgba(255,255,255,0.15)', paddingLeft: 18 }}>
              <p className="muted">{productSections[1].description}</p>
            </div>
            <div className="spotlight" style={{ marginTop: 22 }}>
              <h3>{productSections[1].features[0].title}</h3>
              <p className="muted" style={{ margin: 0 }}>
                {productSections[1].features[0].description}
              </p>
            </div>
            {renderFeatureCards(productSections[1].features.slice(1))}
            <div style={{ marginTop: 24 }}>
              <a href="#pricing" className="animated-cta">
                {primaryCTA}
              </a>
            </div>
          </div>
          <div className="reveal">
            <div className="browser-frame split-visual">
              <div className="browser-bar">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <img src={productSections[1].image} alt={productSections[1].name} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-light">
        <div className="container">
          <div className="section-top reveal">
            <div>
              <div className="tag" style={{ color: '#111', borderColor: '#d7d7d7', background: '#fff' }}>Gallery</div>
              <h2>
                Image and <span className="gradient-text">video</span> showcase
              </h2>
            </div>
          </div>
          <div className="gallery-grid">
            <div className="gallery-card reveal">
              <div className="gallery-main">
                <video autoPlay muted loop playsInline preload="auto" poster={heroPoster}>
                  <source src="https://assets-static.invideo.io/files/Invideo_Demo_HP_18_10_2024_V001_8d82de6d4a.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
            <div className="gallery-card reveal">
              <div className="auto-scroll-media">
                <div className="auto-scroll-track">
                  {galleryMedia.concat(galleryMedia).map((item, i) =>
                    item.endsWith('.mp4') ? (
                      <video key={i} autoPlay muted loop playsInline preload="auto">
                        <source src={item} type="video/mp4" />
                      </video>
                    ) : (
                      <img key={i} src={item} alt={`Gallery ${i + 1}`} />
                    )
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-body" id="pricing">
        <div className="container">
          <div className="section-top reveal">
            <div>
              <div className="tag">Pricing</div>
              <h2>
                Choose the right <span className="gradient-text">generative model</span>
              </h2>
            </div>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, i) => (
              <div className={`price-card reveal ${i === 1 ? 'highlight' : ''}`} key={i}>
                <div className="badge-green">{plan.discount || 'Available plan'}</div>
                <h3>{plan.name}</h3>
                <div className="price-muted">{plan.originalPrice || ' '}</div>
                <div className="price">{plan.price || 'Contact for pricing'}</div>
                <div className="checklist">
                  {plan.includes.map((item, idx) => (
                    <div className="check" key={idx}>
                      <svg viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l5 5L20 7" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#final-cta" className="animated-cta full-btn">
                  {primaryCTA}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-light" id="testimonials">
        <div className="container">
          <div className="section-top reveal">
            <div>
              <div className="tag" style={{ color: '#111', borderColor: '#d7d7d7', background: '#fff' }}>Testimonials</div>
              <h2>
                What creative teams say about <span className="gradient-text">Seedream and Seedance</span>
              </h2>
            </div>
          </div>

          <div className="testimonial-wrap reveal">
            <div className="testimonial-shell">
              <div className="testimonial-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {testimonials.map((t, i) => (
                  <div className={`testimonial-slide ${i === activeSlide ? 'active' : ''}`} key={i}>
                    <div className="testimonial-inner">
                      <div className="quote-mark">❝</div>
                      <div className="stars">★★★★★</div>
                      <p style={{ fontSize: 21, lineHeight: 1.8, margin: 0 }}>{t.quote}</p>
                      <div className="author">
                        <img src={t.avatar} alt={t.author} />
                        <div>
                          <div style={{ fontWeight: 700 }}>{t.author}</div>
                          <div className="role">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="slider-controls">
              <div style={{ display: 'flex', gap: 10 }}>
                <button className="arrow-btn" onClick={() => setActiveSlide((activeSlide - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">
                  ←
                </button>
                <button className="arrow-btn" onClick={() => setActiveSlide((activeSlide + 1) % testimonials.length)} aria-label="Next testimonial">
                  →
                </button>
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

      <section className="final-cta" id="final-cta">
        <div className="container">
          <div className="final-box reveal">
            <div className="tag">Generate with AI</div>
            <h2>
              Explore <span className="gradient-text">Seedream 4.5 and Seedance 1.5 Pro</span>
            </h2>
            <p className="muted" style={{ maxWidth: 800, margin: '0 auto 24px' }}>
              Professionals creating high-quality visual content, including creative directors, video producers, art directors, marketing managers, and creative leads
            </p>
            <a href="#pricing" className="animated-cta">
              {primaryCTA}
            </a>
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
            <div style={{ color: '#cfcfcf', marginBottom: 8 }}>support@techjockey.com</div>
            <div style={{ color: '#9ca3af' }}>© 2024 Techjockey Infotech Pvt. Ltd.</div>
          </div>

          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms</a>
          </div>

          <div className="socials">
            <a href="#facebook" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7.5v3h2.8v8h3.2Z"/></svg>
            </a>
            <a href="#instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5Zm6.25-.88a1.12 1.12 0 1 0 1.13 1.13 1.13 1.13 0 0 0-1.13-1.13Z"/></svg>
            </a>
            <a href="#twitter" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.3-8.3L1 2h6.2l4.3 5.8L18.9 2Z"/></svg>
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 12.73c0-3.45-1.84-5.05-4.3-5.05a3.72 3.72 0 0 0-3.35 1.84h-.05V8.5H9.5c.04.67 0 11.5 0 11.5h3.24v-6.42c0-.34.02-.67.12-.91a2.12 2.12 0 0 1 1.98-1.42c1.4 0 1.96 1.08 1.96 2.66V20h3.24Z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;