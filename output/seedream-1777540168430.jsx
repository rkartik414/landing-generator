import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#ff6b00';
  const bodyBg = '#ffffff';

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeSeedream, setActiveSeedream] = useState(0);
  const [activeSeedance, setActiveSeedance] = useState(0);
  const pageRef = useRef(null);

  const heroCTA = 'Generate with AI';

  const trustBadges = [
    'AI Image Generation',
    'AI Video Generation with Audio',
    'Multimodal Content Creation',
    'Enterprise-ready AI infrastructure',
  ];

  const seedreamFeatures = [
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
  ];

  const seedanceFeatures = [
    {
      title: 'Key Capabilities of Seedance 1.5 Pro',
      description: 'Seedance enables professional-grade AI video production with narrative coherence and realistic motion.',
    },
    {
      title: 'Text-to-Video Generation',
      description: 'Create videos directly from text prompts.',
    },
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
  ];

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      name: 'Vaishali Saxena',
      role: 'Creative Director',
      avatar: '/output/generated-assets/ds_1777539913055_efc5afae/13-3ffecc6582.webp',
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      name: 'Vihaan Pandey',
      role: 'Video Producer',
      avatar: '/output/generated-assets/ds_1777539913055_efc5afae/20-ade76de250.webp',
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      name: 'Anurag Malhotra',
      role: 'Art Director',
      avatar: '/output/generated-assets/ds_1777539913055_efc5afae/17-f7b4d87d78.webp',
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      name: 'Ashutosh Singh',
      role: 'Marketing Manager',
      avatar: '/output/generated-assets/ds_1777539913055_efc5afae/13-3ffecc6582.webp',
    },
    {
      quote:
        'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.',
      name: 'Shrimmi Saxena',
      role: 'Creative Lead',
      avatar: '/output/generated-assets/ds_1777539913055_efc5afae/20-ade76de250.webp',
    },
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

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        });
      },
      { threshold: 0.14, rootMargin: '0px 0px -80px 0px' }
    );

    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-parent')
      .forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  const Icon = ({ type = 'spark' }) => {
    const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: accent, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (type === 'video') {
      return (
        <svg {...common}><path d="M3 7a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2Z"/><path d="m15 10 6-3v10l-6-3Z"/></svg>
      );
    }
    if (type === 'image') {
      return (
        <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.5"/><path d="m21 15-4.5-4.5L7 20"/></svg>
      );
    }
    if (type === 'audio') {
      return (
        <svg {...common}><path d="M12 6v12"/><path d="M8 9v6"/><path d="M16 9v6"/><path d="M4 11v2"/><path d="M20 11v2"/></svg>
      );
    }
    return (
      <svg {...common}><path d="M12 3l1.9 5.1L19 10l-5.1 1.9L12 17l-1.9-5.1L5 10l5.1-1.9Z"/></svg>
    );
  };

  const css = `
    :root{
      --accent:${accent};
      --primary:${primary};
      --bodyBg:${bodyBg};
      --dark:#1a1a1a;
      --muted:#5f5f5f;
      --light:#f5f5f5;
      --border:#e5e7eb;
      --white:#fff;
    }
    *{box-sizing:border-box}
    html,body,#root{margin:0;padding:0;background:var(--bodyBg);font-family:'Inter',sans-serif;color:#1a1a1a}
    body{background:var(--bodyBg)}
    a{text-decoration:none;color:inherit}
    button{font-family:inherit}
    img,video{max-width:100%}
    .lp{background:var(--bodyBg);overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto;position:relative;z-index:2}
    .section{padding:88px 0;position:relative}
    .section-dark{background:#1a1a1a;color:#fff}
    .section-light{background:#f5f5f5}
    .section-white{background:#fff}
    .grid-2{display:grid;grid-template-columns:1.05fr .95fr;gap:56px;align-items:center}
    .grid-2.reverse{grid-template-columns:.95fr 1.05fr}
    .tag{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;font-size:13px;font-weight:700;letter-spacing:.02em;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);color:#fff}
    .tag.light{background:rgba(255,107,0,.08);color:var(--accent);border-color:rgba(255,107,0,.2)}
    h1,h2,h3,p{margin:0}
    h1{font-size:clamp(48px,6vw,68px);line-height:1.02;font-weight:800;letter-spacing:-.03em}
    h2{font-size:clamp(32px,4vw,46px);line-height:1.08;font-weight:800;letter-spacing:-.02em}
    h3{font-size:22px;line-height:1.2;font-weight:700}
    .lead{font-size:18px;line-height:1.72;color:rgba(255,255,255,.88);max-width:700px}
    .muted{color:var(--muted);line-height:1.75;font-size:17px}
    .muted-dark{color:rgba(255,255,255,.76);line-height:1.75;font-size:17px}
    .gradient-text{background:linear-gradient(135deg,var(--accent) 0%,var(--primary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .nav{position:sticky;top:0;z-index:50;background:rgba(26,26,26,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand-text{font-weight:800;font-size:20px;color:var(--accent)}
    .nav-right{display:flex;align-items:center;gap:18px}
    .animated-cta,.ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 24px;border-radius:10px;font-weight:800;border:none;cursor:pointer}
    .animated-cta{background:var(--accent);color:#fff;box-shadow:0 12px 30px rgba(255,107,0,.22)}
    .ghost-btn{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.28)}
    .hero{background:#ff6b00;min-height:100vh;display:flex;align-items:center;position:relative}
    .hero:before,.hero:after{content:"";position:absolute;inset:auto}
    .hero:before{top:-120px;right:-100px;width:420px;height:420px;border-radius:50%;background:radial-gradient(circle,rgba(255,255,255,.18),transparent 65%)}
    .hero:after{bottom:-100px;left:-80px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(0,0,0,.16),transparent 68%)}
    .precision-lines,.precision-lines-dark{position:absolute;inset:0;pointer-events:none;opacity:.22;background-image:linear-gradient(rgba(255,255,255,.18) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.18) 1px,transparent 1px);background-size:46px 46px}
    .precision-lines-dark{opacity:.08;background-image:linear-gradient(rgba(255,255,255,.12) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.12) 1px,transparent 1px)}
    .hero-inner{padding:48px 0}
    .hero-copy{color:#fff}
    .hero-copy .support{font-size:18px;line-height:1.65;color:rgba(255,255,255,.9);margin-top:18px}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
    .chip{display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.12);color:#fff;font-size:13px;font-weight:600}
    .hero-visual{min-height:520px;display:flex;align-items:center;justify-content:center;position:relative}
    .hero-panel{position:relative;width:100%;max-width:580px;padding:16px;border-radius:24px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);box-shadow:0 32px 70px rgba(0,0,0,.25);backdrop-filter:blur(12px)}
    .hero-media{border-radius:18px;overflow:hidden;background:#111}
    .hero-media img{width:100%;max-height:480px;object-fit:contain;display:block}
    .floating-card{position:absolute;background:#fff;color:#111;border-radius:16px;padding:14px 16px;box-shadow:0 20px 40px rgba(0,0,0,.2);min-width:180px}
    .floating-card small{display:block;color:#666;font-weight:600;font-size:12px;margin-bottom:6px}
    .floating-card strong{display:block;font-size:14px;line-height:1.45}
    .f1{top:12px;right:-10px}
    .f2{bottom:24px;left:-10px}
    .f3{top:54%;right:-34px;background:#1a1a1a;color:#fff}
    .metrics-strip{background:#1a1a1a;color:#fff;border-top:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1)}
    .metrics-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
    .metric-card{padding:26px 20px;border-right:1px solid rgba(255,255,255,.08);text-align:center}
    .metric-card:last-child{border-right:none}
    .metric-card span{display:block;font-size:13px;color:rgba(255,255,255,.68);margin-bottom:8px}
    .metric-card strong{font-size:18px;line-height:1.4}
    .marquee-wrapper{overflow:hidden;background:#1a1a1a;padding:18px 0;border-top:1px solid #2b2b2b;border-bottom:1px solid #2b2b2b}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    .marquee-item{font-size:28px;font-weight:800;margin-right:48px;white-space:nowrap;color:rgba(255,255,255,.86)}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    .spotlight{padding:30px;border-radius:24px;background:#fff;box-shadow:0 18px 50px rgba(0,0,0,.08);border:1px solid var(--border)}
    .spotlight.dark{background:#121212;border-color:rgba(255,255,255,.08);box-shadow:0 20px 60px rgba(0,0,0,.26)}
    .browser-frame{border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.08);background:#0f0f0f}
    .browser-bar{display:flex;align-items:center;gap:8px;padding:12px 14px;background:#191919;border-bottom:1px solid rgba(255,255,255,.08)}
    .dot{width:10px;height:10px;border-radius:50%;background:#3a3a3a}
    .browser-body img{display:block;width:100%;height:auto}
    .feature-tabs{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:26px 0 20px}
    .feature-tab{padding:16px;border-radius:16px;border:1px solid var(--border);background:#fff;cursor:pointer;text-align:left}
    .feature-tab.active{border-color:rgba(255,107,0,.4);box-shadow:0 12px 24px rgba(255,107,0,.08)}
    .feature-tab.dark{background:#1d1d1d;border-color:rgba(255,255,255,.09);color:#fff}
    .feature-tab.dark.active{border-color:rgba(255,107,0,.5);box-shadow:0 16px 34px rgba(0,0,0,.24)}
    .feature-tab h4{font-size:15px;line-height:1.35;margin:0 0 6px;font-weight:700}
    .feature-tab p{font-size:13px;line-height:1.5;color:#666}
    .feature-tab.dark p{color:rgba(255,255,255,.66)}
    .feature-preview{padding:20px;border-radius:18px;background:#fff7f2;border:1px solid rgba(255,107,0,.14)}
    .feature-preview.dark{background:rgba(255,107,0,.08);border-color:rgba(255,107,0,.18)}
    .feature-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:18px}
    .mini-card{padding:16px;border-radius:16px;border:1px solid var(--border);background:#fff}
    .mini-card.dark{background:#181818;border-color:rgba(255,255,255,.08)}
    .mini-card h5{margin:10px 0 6px;font-size:15px}
    .mini-card p{font-size:13px;line-height:1.55;color:#666}
    .mini-card.dark p,.mini-card.dark h5{color:#fff}
    .desc-bar{border-left:3px solid var(--accent);padding-left:18px;margin:18px 0 0}
    .gallery-grid{display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:18px;align-items:stretch}
    .gallery-card{border-radius:20px;overflow:hidden;background:#111;border:1px solid rgba(255,255,255,.08);min-height:220px;position:relative}
    .gallery-card video,.gallery-card img{width:100%;height:100%;object-fit:cover;display:block}
    .gallery-caption{position:absolute;left:14px;bottom:14px;background:rgba(0,0,0,.58);color:#fff;padding:10px 12px;border-radius:12px;font-size:13px}
    .pricing-wrap{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px;margin-top:30px}
    .price-card{background:#fff;border:1px solid var(--border);border-radius:24px;padding:30px;box-shadow:0 18px 40px rgba(0,0,0,.06);display:flex;flex-direction:column}
    .price-card.highlight{border:2px solid rgba(255,107,0,.4);box-shadow:0 20px 48px rgba(255,107,0,.12)}
    .price-top{margin-bottom:18px}
    .price-top h3{font-size:24px}
    .price-value{font-size:34px;font-weight:800;margin:14px 0 6px}
    .price-empty{font-size:18px;font-weight:700;color:#5f5f5f;margin:14px 0 6px}
    .badge-green{display:inline-flex;align-items:center;padding:7px 12px;border-radius:999px;background:#eaf8ee;color:#13803b;font-size:12px;font-weight:800}
    .checklist{display:grid;gap:12px;margin:18px 0 24px}
    .check{display:flex;gap:10px;align-items:flex-start;font-size:15px;line-height:1.6;color:#333}
    .check svg{margin-top:3px;flex:0 0 auto}
    .full-btn{width:100%}
    .testimonial-wrap{position:relative;max-width:900px;margin:28px auto 0}
    .testimonial-card{background:#fff;border:1px solid var(--border);border-radius:26px;padding:36px;box-shadow:0 18px 44px rgba(0,0,0,.06)}
    .quote-mark{font-size:54px;line-height:1;color:var(--accent);font-weight:800}
    .testimonial-text{font-size:22px;line-height:1.65;color:#222;margin:10px 0 26px}
    .person{display:flex;align-items:center;gap:14px}
    .person img{width:58px;height:58px;border-radius:50%;object-fit:cover}
    .person strong{display:block;font-size:17px}
    .person span{display:block;color:#7a7a7a;font-size:14px;margin-top:4px}
    .stars{color:#d4a017;font-size:18px;letter-spacing:2px;margin-bottom:10px}
    .slider-controls{display:flex;justify-content:space-between;align-items:center;margin-top:22px}
    .dots{display:flex;gap:8px;justify-content:center}
    .slider-dot{width:10px;height:10px;border-radius:999px;background:#ddd;border:none;cursor:pointer}
    .slider-dot.active{transform:scale(1.25);background:var(--accent)}
    .nav-btn{width:42px;height:42px;border-radius:50%;border:1px solid var(--border);background:#fff;cursor:pointer;font-size:18px}
    .footer{background:#1a1a1a;color:#fff;padding:42px 0}
    .footer-grid{display:grid;grid-template-columns:1fr auto;gap:18px;align-items:start}
    .footer-meta{display:flex;flex-direction:column;gap:12px}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .footer-links a{color:rgba(255,255,255,.8)}
    .socials a{width:38px;height:38px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08)}
    .soft-note{font-size:14px;color:rgba(255,255,255,.74)}
    .hover-card{transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s ease,border-color .3s ease}
    .hover-card:hover{transform:translateY(-8px) scale(1.015);box-shadow:0 24px 70px rgba(0,0,0,.16)}
    @keyframes fadeInUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeInLeft{from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:translateX(0)}}
    @keyframes fadeInRight{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
    .hero-fade-up{animation:fadeInUp .8s cubic-bezier(.16,1,.3,1) both}
    .hero-fade-left{animation:fadeInLeft .8s cubic-bezier(.16,1,.3,1) both}
    .hero-fade-right{animation:fadeInRight .8s cubic-bezier(.16,1,.3,1) both}
    .reveal{opacity:0;transform:translateY(42px);transition:opacity .75s cubic-bezier(.16,1,.3,1),transform .75s cubic-bezier(.16,1,.3,1)}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .stagger-parent>*{opacity:0;transform:translateY(28px);transition:.65s cubic-bezier(.16,1,.3,1)}
    .stagger-parent.visible>*{opacity:1;transform:translateY(0)}
    .stagger-parent.visible>*:nth-child(2){transition-delay:.08s}
    .stagger-parent.visible>*:nth-child(3){transition-delay:.16s}
    .stagger-parent.visible>*:nth-child(4){transition-delay:.24s}
    .animated-cta,.btn-magnetic{position:relative;overflow:hidden;transition:transform .22s ease,box-shadow .22s ease,background .22s ease}
    .animated-cta:hover,.btn-magnetic:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(0,0,0,.18)}
    .animated-cta::after{display:none!important}
    .animated-cta::before{display:none!important}
    @media (max-width: 991px){
      .grid-2,.grid-2.reverse,.gallery-grid,.pricing-wrap,.footer-grid,.metrics-grid{grid-template-columns:1fr}
      .nav-inner{grid-template-columns:1fr auto;row-gap:12px}
      .nav-right{justify-content:flex-end;grid-column:1 / -1}
      .hero{min-height:auto}
      .hero-visual{min-height:420px}
      .floating-card{position:static;margin-top:12px}
      .feature-tabs,.feature-grid{grid-template-columns:1fr}
      .metric-card{border-right:none;border-bottom:1px solid rgba(255,255,255,.08)}
      .metric-card:last-child{border-bottom:none}
    }
    @media (max-width: 640px){
      .section{padding:68px 0}
      .container{width:min(100% - 24px,1180px)}
      .hero-actions{flex-direction:column;align-items:flex-start}
      .animated-cta,.ghost-btn{width:100%}
      .testimonial-card{padding:26px}
      .testimonial-text{font-size:18px}
      .marquee-item{font-size:22px}
    }
  `;

  const repeatedMarquee = (text) =>
    [...Array(8)].map((_, i) => (
      <span key={i} className="marquee-item">
        {text} <span className="gradient-text">★</span>
      </span>
    ));

  return (
    <div className="lp" ref={pageRef}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
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
            <button className="animated-cta" onClick={scrollTop}>
              {heroCTA}
            </button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="precision-lines" />
        <div className="container hero-inner">
          <div className="grid-2">
            <div className="hero-copy hero-fade-left">
              <div className="tag">AI Image Generation and AI Video Generation</div>
              <h1 style={{ marginTop: 18 }}>
                Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models
              </h1>
              <p className="lead" style={{ marginTop: 20 }}>
                Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
              </p>
              <p className="support">
                From text prompts, images, or scripts, generate professional visuals and videos with powerful multimodal AI systems.
              </p>

              <div className="chip-row">
                {trustBadges.map((chip, i) => (
                  <div className="chip" key={i}>
                    <Icon type={i === 0 ? 'image' : i === 1 ? 'video' : i === 2 ? 'spark' : 'audio'} />
                    <span>{chip}</span>
                  </div>
                ))}
              </div>

              <div className="hero-actions">
                <button className="animated-cta">{heroCTA}</button>
                <button className="ghost-btn">{heroCTA}</button>
              </div>
            </div>

            <div className="hero-visual hero-fade-right">
              <div className="hero-panel">
                <div className="hero-media">
                  <img
                    src="/output/generated-assets/ds_1777539913055_efc5afae/16-35f493b066.webp"
                    alt="Seedream 4.5 and Seedance 1.5 Pro"
                  />
                </div>
                <div className="floating-card f1 hover-card">
                  <small>Seedream 4.5</small>
                  <strong>AI Image Generation with high-resolution, high-fidelity output</strong>
                </div>
                <div className="floating-card f2 hover-card">
                  <small>Seedance 1.5 Pro</small>
                  <strong>Generate synchronized video and sound together</strong>
                </div>
                <div className="floating-card f3 hover-card">
                  <small>Workflow</small>
                  <strong>Text prompts, images, or scripts → professional visuals and videos</strong>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-strip">
        <div className="container">
          <div className="metrics-grid">
            {trustBadges.map((item, i) => (
              <div className="metric-card" key={i}>
                <span>Capability</span>
                <strong>{item}</strong>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {repeatedMarquee('Seedream 4.5 and Seedance 1.5 Pro')}
          {repeatedMarquee('AI Image Generation and AI Video Generation')}
        </div>
      </div>

      <section className="section section-white">
        <div className="precision-lines-dark" />
        <div className="container">
          <div className="reveal" style={{ maxWidth: 780, marginBottom: 28 }}>
            <div className="tag light">Gallery</div>
            <h2 style={{ marginTop: 16 }}>
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models
            </h2>
          </div>

          <div className="gallery-grid stagger-parent reveal">
            <div className="gallery-card hover-card">
              <video autoPlay muted loop playsInline preload="auto">
                <source src="/output/generated-assets/ds_1777539913055_efc5afae/08-4b95c6ee7f.webm" type="video/webm" />
              </video>
              <div className="gallery-caption">Seedance 1.5 Pro</div>
            </div>
            <div className="gallery-card hover-card">
              <video autoPlay muted loop playsInline preload="auto">
                <source src="https://media.magnific.com/landings/ai/video-generator/video/magnific/video-generator-intro.webm" type="video/webm" />
              </video>
              <div className="gallery-caption">AI Video Generation with Audio</div>
            </div>
            <div className="gallery-card hover-card">
              <img src="/output/generated-assets/ds_1777539913055_efc5afae/01-3965757185.jpeg" alt="Seedream 4.5" />
              <div className="gallery-caption">AI Image Generation</div>
            </div>
            <div className="gallery-card hover-card">
              <img src="/output/generated-assets/ds_1777539913055_efc5afae/02-7f64cfae87.jpeg" alt="Seedance 1.5 Pro" />
              <div className="gallery-caption">Text-to-Video Generation</div>
            </div>
            <div className="gallery-card hover-card">
              <img src="/output/generated-assets/ds_1777539913055_efc5afae/09-1e5ff9f843.png" alt="AI content creation" />
              <div className="gallery-caption">Multimodal Content Creation</div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {repeatedMarquee('Seedream 4.5')}
          {repeatedMarquee('High-Resolution Output')}
        </div>
      </div>

      <section className="section section-white">
        <div className="container">
          <div className="grid-2">
            <div className="reveal-left">
              <div className="spotlight hover-card">
                <div className="browser-frame">
                  <div className="browser-bar">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                  <div className="browser-body">
                    <img
                      src="/output/generated-assets/ds_1777539913055_efc5afae/01-3965757185.jpeg"
                      alt="AI Image Generation with Seedream 4.5"
                    />
                  </div>
                </div>
                <div className="feature-grid">
                  {seedreamFeatures.slice(0, 2).map((feature, i) => (
                    <div className="mini-card" key={i}>
                      <Icon type={i === 0 ? 'spark' : 'image'} />
                      <h5>{feature.title}</h5>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="reveal-right">
              <div className="tag light">Feature 1</div>
              <h2 style={{ marginTop: 16 }}>
                AI Image Generation with <span className="gradient-text">Seedream 4.5</span>
              </h2>
              <div className="desc-bar">
                <p className="muted">
                  Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.
                </p>
              </div>

              <div className="feature-tabs">
                {seedreamFeatures.map((feature, i) => (
                  <button
                    key={i}
                    className={`feature-tab ${activeSeedream === i ? 'active' : ''}`}
                    onClick={() => setActiveSeedream(i)}
                  >
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </button>
                ))}
              </div>

              <div className="feature-preview hover-card">
                <h3>{seedreamFeatures[activeSeedream].title}</h3>
                <p className="muted" style={{ marginTop: 10 }}>
                  {seedreamFeatures[activeSeedream].description}
                </p>
              </div>

              <div style={{ marginTop: 24 }}>
                <button className="animated-cta">{heroCTA}</button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {repeatedMarquee('Seedance 1.5 Pro')}
          {repeatedMarquee('Audio-Visual Synchronization')}
        </div>
      </div>

      <section className="section section-dark">
        <div className="precision-lines-dark" />
        <div className="container">
          <div className="grid-2 reverse">
            <div className="reveal-left">
              <div className="tag">Additional Feature</div>
              <h2 style={{ marginTop: 16 }}>
                AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro</span> by Bytedance
              </h2>
              <div className="desc-bar" style={{ borderLeftColor: accent }}>
                <p className="muted-dark">
                  Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.
                </p>
              </div>

              <div className="feature-tabs">
                {seedanceFeatures.map((feature, i) => (
                  <button
                    key={i}
                    className={`feature-tab dark ${activeSeedance === i ? 'active' : ''}`}
                    onClick={() => setActiveSeedance(i)}
                  >
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </button>
                ))}
              </div>

              <div className="feature-preview dark hover-card">
                <h3 style={{ color: '#fff' }}>{seedanceFeatures[activeSeedance].title}</h3>
                <p className="muted-dark" style={{ marginTop: 10 }}>
                  {seedanceFeatures[activeSeedance].description}
                </p>
              </div>

              <div style={{ marginTop: 24 }}>
                <button className="animated-cta">{heroCTA}</button>
              </div>
            </div>

            <div className="reveal-right">
              <div className="spotlight dark hover-card">
                <div className="browser-frame">
                  <div className="browser-bar">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                  <div className="browser-body">
                    <img
                      src="/output/generated-assets/ds_1777539913055_efc5afae/02-7f64cfae87.jpeg"
                      alt="AI Video Generation with Seedance 1.5 Pro by Bytedance"
                    />
                  </div>
                </div>
                <div className="feature-grid">
                  {seedanceFeatures.slice(1, 3).map((feature, i) => (
                    <div className="mini-card dark" key={i}>
                      <Icon type={i === 0 ? 'video' : 'audio'} />
                      <h5>{feature.title}</h5>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <div className="tag light">Pricing</div>
            <h2 style={{ marginTop: 16 }}>
              Seedream 4.5 and <span className="gradient-text">Seedance 1.5 Pro</span>
            </h2>
          </div>

          <div className="pricing-wrap">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`price-card hover-card ${i === 1 ? 'highlight' : ''}`}>
                <div className="price-top">
                  <h3>{plan.name}</h3>
                  {plan.price ? (
                    <div className="price-value">{plan.price}</div>
                  ) : (
                    <div className="price-empty">(was )</div>
                  )}
                  <div className="badge-green">Get Quote</div>
                </div>

                <div className="checklist">
                  {plan.includes.map((item, idx) => (
                    <div className="check" key={idx}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6 9 17l-5-5" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <button className="animated-cta full-btn" style={{ marginTop: 'auto' }}>
                  {heroCTA}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', maxWidth: 760, margin: '0 auto' }}>
            <div className="tag light">Testimonials</div>
            <h2 style={{ marginTop: 16 }}>
              What professionals say about <span className="gradient-text">Seedream and Seedance</span>
            </h2>
          </div>

          <div className="testimonial-wrap reveal">
            <div className="testimonial-card">
              <div className="stars">★★★★★</div>
              <div className="quote-mark">❝</div>
              <p className="testimonial-text">{testimonials[activeSlide].quote}</p>
              <div className="person">
                <img src={testimonials[activeSlide].avatar} alt={testimonials[activeSlide].name} />
                <div>
                  <strong>{testimonials[activeSlide].name}</strong>
                  <span>{testimonials[activeSlide].role}</span>
                </div>
              </div>
            </div>

            <div className="slider-controls">
              <button
                className="nav-btn"
                onClick={() => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
              >
                ←
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

              <button
                className="nav-btn"
                onClick={() => setActiveSlide((prev) => (prev + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-meta">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
              style={{ width: 'auto' }}
            />
            <div className="soft-note">support@techjockey.com</div>
            <div className="soft-note">© 2024 Techjockey Infotech Pvt. Ltd.</div>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>

          <div className="socials">
            <a href="#facebook" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="#instagram" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><path d="M17.5 6.5h.01"/></svg>
            </a>
            <a href="#twitter" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c.2 1.3.2 2.7-.1 4A10 10 0 0 1 4 19c7 1 11-3 12-7-2 1-5 1-7-1-1-1-2-3-2-5 2 1 4 1 5 0 0-2 1-4 3-5 2 2 4 3 7 3z"/></svg>
            </a>
            <a href="#linkedin" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;