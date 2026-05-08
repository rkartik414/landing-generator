import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#ff6b00';
  const bodyBg = '#0f0f0f';

  const [activeTab, setActiveTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [submitted, setSubmitted] = useState(false);
  const heroRef = useRef(null);

  const productName = 'Seedream 4.5 and Seedance 1.5 Pro by ByteDance';
  const primaryCTA = 'Generate with AI';

  const products = [
    {
      name: 'Seedream 4.5',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      image: '/output/generated-assets/ds_1777553662121_96ba6242/14-e1b1bc05a8.jpeg',
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
      name: 'Seedance 1.5 Pro',
      headline: 'AI Video Generation with Seedance 1.5 Pro by Bytedance',
      description:
        'Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.',
      image: '/output/generated-assets/ds_1777553662121_96ba6242/12-336c55c5a0.png',
      features: [
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
      ],
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

  const plans = [
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
      cta: primaryCTA,
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
      cta: primaryCTA,
    },
  ];

  const galleryVideos = [
    'https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4',
    'https://cdn.web.imagine.art/imagine-one/cdge/sora2.mp4',
    'https://cdn.web.imagine.art/imagine-one/cdge/sora33.mp4',
    'https://cdn.web.imagine.art/remote-config/assets/video_effects/sd/podcast.mp4',
    'https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4',
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add('visible'));
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

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  const Icon = ({ type }) => {
    const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: accent, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (type === 'spark')
      return <svg {...common}><path d="M12 3l1.7 5.3L19 10l-5.3 1.7L12 17l-1.7-5.3L5 10l5.3-1.7L12 3z"/></svg>;
    if (type === 'video')
      return <svg {...common}><polygon points="23 7 16 12 23 17 23 7"/><rect x="1" y="5" width="15" height="14" rx="2"/></svg>;
    if (type === 'image')
      return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="M21 15l-5-5L5 21"/></svg>;
    if (type === 'audio')
      return <svg {...common}><path d="M12 6v12"/><path d="M8 9v6"/><path d="M16 9v6"/><path d="M4 11v2"/><path d="M20 11v2"/></svg>;
    return <svg {...common}><path d="M20 6L9 17l-5-5"/></svg>;
  };

  const css = `
    :root{--accent:${accent};--primary:${primary};--bg:${bodyBg};--card:#1a1a1a;--border:#2a2a2a;--text:#fff;--muted:#c9c9c9;}
    *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;background:var(--bg);color:var(--text);font-family:'Inter',sans-serif}
    a{text-decoration:none;color:inherit} img{max-width:100%;display:block}
    .lp{background:var(--bg);color:var(--text);overflow:hidden}
    .container{width:min(1180px,92%);margin:0 auto}
    .section{padding:88px 0;position:relative}
    .nav{position:sticky;top:0;z-index:50;background:rgba(15,15,15,.84);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand{font:700 18px 'IBM Plex Mono',monospace;color:#fff;line-height:1.3}
    .tj-logo{height:28px;opacity:.95}
    .animated-cta,.ghost-btn,.tab-btn,.nav-btn{border:none;border-radius:10px;padding:12px 18px;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;justify-content:center;gap:8px}
    .animated-cta,.btn-magnetic{position:relative;overflow:hidden;background:var(--accent);color:#fff;transition:transform .22s ease,box-shadow .22s ease,background .22s ease}
    .animated-cta:hover,.btn-magnetic:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(0,0,0,.18)}
    .animated-cta::before,.animated-cta::after{display:none!important;content:none!important}
    .ghost-btn{background:transparent;border:1px solid #3b3b3b;color:#fff}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(0,0,0,.18)}
    .hero{background:#1a1a1a;padding:70px 0 40px;position:relative}
    .hero:before,.hero:after{content:"";position:absolute;border-radius:50%;filter:blur(70px);pointer-events:none}
    .hero:before{width:340px;height:340px;background:rgba(255,107,0,.18);top:-80px;left:-80px}
    .hero:after{width:380px;height:380px;background:rgba(255,107,0,.1);right:-120px;bottom:-80px}
    .hero-grid{display:grid;grid-template-columns:1.12fr .88fr;gap:34px;align-items:center}
    .eyebrow{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border:1px solid rgba(255,107,0,.28);background:rgba(255,107,0,.08);border-radius:999px;color:#e8e8e8;font-size:13px;margin-bottom:18px}
    h1,h2,h3{font-family:'IBM Plex Mono',monospace;margin:0 0 16px}
    h1{font-size:clamp(48px,6vw,68px);line-height:1.05;letter-spacing:-1.4px}
    h2{font-size:clamp(32px,4vw,42px);line-height:1.14}
    h3{font-size:20px}
    p{margin:0 0 14px;color:var(--muted);font-size:16px;line-height:1.75}
    .gradient-text{background:linear-gradient(135deg,var(--accent),var(--primary));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .hero-copy p{max-width:680px}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 28px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(255,107,0,.28);background:rgba(255,107,0,.08);color:#ddd;font-size:13px}
    .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
    .form-card{background:linear-gradient(180deg,#1b1b1b,#141414);border:1px solid var(--border);border-radius:22px;padding:24px;box-shadow:10px 10px 0 rgba(0,0,0,.28);position:relative;overflow:hidden;min-height:500px;display:flex;flex-direction:column;justify-content:space-between}
    .form-card:before{content:"";position:absolute;inset:auto -40px -40px auto;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle,rgba(255,107,0,.2),transparent 70%)}
    .hero-visual{position:relative;display:flex;flex-direction:column;gap:16px}
    .hero-media{border-radius:18px;overflow:hidden;border:1px solid #333;min-height:210px;background:#111}
    .hero-media video,.hero-media img{width:100%;height:100%;object-fit:cover}
    .float-card{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .mini-card{background:#121212;border:1px solid #2b2b2b;border-radius:16px;padding:14px}
    .mini-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px;margin-top:10px}
    .mini-thumb{aspect-ratio:1;border-radius:10px;background:linear-gradient(135deg,rgba(255,107,0,.75),rgba(255,107,0,.15))}
    .line{height:8px;border-radius:999px;background:linear-gradient(90deg,rgba(255,107,0,.95),rgba(255,107,0,.15));margin:8px 0}
    .input,.textarea{width:100%;padding:14px 14px;background:#101010;border:1px solid #313131;border-radius:12px;color:#fff;font:inherit}
    .input-focus-glow:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 4px rgba(255,107,0,.12)}
    .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .success{margin-top:12px;color:#fff;background:rgba(34,197,94,.14);border:1px solid rgba(34,197,94,.32);padding:12px 14px;border-radius:12px}
    .marquee-wrapper{overflow:hidden;background:#101010;padding:18px 0;border-top:1px solid #2a2a2a;border-bottom:1px solid #2a2a2a}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    .marquee-item{font:700 24px 'IBM Plex Mono',monospace;margin-right:44px;white-space:nowrap;color:rgba(255,255,255,.84)}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
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
    .stagger-parent.visible>*:nth-child(2){transition-delay:.08s}.stagger-parent.visible>*:nth-child(3){transition-delay:.16s}.stagger-parent.visible>*:nth-child(4){transition-delay:.24s}
    .metrics{background:#141414}
    .metrics-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .metric{background:#1a1a1a;border:1px solid var(--border);border-radius:18px;padding:22px;box-shadow:8px 8px 0 rgba(0,0,0,.22)}
    .metric .label{font-size:13px;color:#8f8f8f;text-transform:uppercase;letter-spacing:.08em;margin-bottom:8px}
    .metric .value{font:700 26px 'IBM Plex Mono',monospace}
    .products{background:#1a1a1a}
    .tabs-wrap{display:grid;grid-template-columns:280px 1fr;gap:24px;align-items:start}
    .tabs-nav{display:flex;flex-direction:column;gap:12px;position:sticky;top:92px}
    .tab-btn{background:#121212;border:1px solid #2f2f2f;color:#ddd;text-align:left;justify-content:flex-start;padding:16px}
    .tab-btn.active{background:rgba(255,107,0,.12);border-color:rgba(255,107,0,.4);color:#fff}
    .preview-card{background:#141414;border:1px solid var(--border);border-radius:24px;padding:24px;box-shadow:10px 10px 0 rgba(0,0,0,.24)}
    .product-layout{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:center}
    .media-panel{background:#111;border:1px solid #2e2e2e;border-radius:20px;overflow:hidden;min-height:480px;position:relative}
    .media-panel img{width:100%;height:100%;object-fit:cover}
    .media-panel.dark img{object-fit:cover}
    .badge{display:inline-flex;padding:8px 12px;border-radius:999px;border:1px solid rgba(255,107,0,.28);background:rgba(255,107,0,.08);font-size:12px;color:#ededed;margin-bottom:16px}
    .desc-box{border-left:2px solid rgba(255,255,255,.15);padding-left:18px;margin-bottom:20px}
    .feature-list{display:grid;gap:12px;max-height:420px;overflow:auto;padding-right:6px}
    .feature-item{display:flex;gap:12px;background:#111;border:1px solid #2a2a2a;border-radius:16px;padding:14px}
    .feature-item p{font-size:14px;line-height:1.6;margin:4px 0 0}
    .feature-item h3{font-size:16px;margin:0;color:#fff}
    .gallery{background:#141414}
    .gallery-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:22px}
    .video-wall{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .video-card{background:#111;border:1px solid #2a2a2a;border-radius:18px;overflow:hidden}
    .video-card video{width:100%;height:220px;object-fit:cover;display:block}
    .auto-scroll-media{max-height:520px;overflow:hidden;position:relative}
    .auto-scroll-track{display:flex;flex-direction:column;gap:16px;animation:autoScrollY 18s linear infinite}
    .auto-scroll-media:hover .auto-scroll-track{animation-play-state:paused}
    @keyframes autoScrollY{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
    .pricing{background:#101010}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
    .price-card{background:#1a1a1a;border:1px solid var(--border);border-radius:22px;padding:24px;box-shadow:10px 10px 0 rgba(0,0,0,.24);display:flex;flex-direction:column}
    .price-card.featured{border-color:rgba(255,107,0,.5);box-shadow:0 0 0 1px rgba(255,107,0,.25),10px 10px 0 rgba(0,0,0,.24)}
    .price-top{display:flex;justify-content:space-between;gap:10px;align-items:flex-start;margin-bottom:16px}
    .badge-green{padding:8px 12px;border-radius:999px;background:rgba(34,197,94,.12);border:1px solid rgba(34,197,94,.34);color:#9cf0b4;font-size:12px}
    .price{font:700 32px 'IBM Plex Mono',monospace;margin:14px 0 2px}
    .muted{color:#8f8f8f}
    .includes{display:grid;gap:10px;margin:16px 0 22px}
    .includes li{list-style:none;display:flex;gap:10px;color:#ddd;line-height:1.55}
    .testimonials{background:#1a1a1a}
    .testimonial-shell{background:#141414;border:1px solid var(--border);border-radius:24px;padding:24px;box-shadow:10px 10px 0 rgba(0,0,0,.24)}
    .testimonial-stage{overflow:hidden;position:relative}
    .testimonial-row{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-card{min-width:100%;padding:10px 6px}
    .quote-mark{font-size:64px;color:var(--accent);line-height:1}
    .quote{font-size:20px;line-height:1.8;color:#f1f1f1;margin:0 0 18px}
    .author{display:flex;gap:14px;align-items:center}
    .avatar{width:60px;height:60px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,107,0,.3)}
    .stars{color:#fbbf24;letter-spacing:2px;margin-bottom:8px}
    .slider-controls{display:flex;align-items:center;justify-content:space-between;gap:12px;margin-top:16px}
    .arrow{width:42px;height:42px;border-radius:50%;border:1px solid #363636;background:#111;color:#fff;cursor:pointer}
    .dots{display:flex;gap:8px}
    .slider-dot{width:10px;height:10px;border-radius:999px;border:none;background:rgba(255,255,255,.25);cursor:pointer;transition:.25s ease}
    .slider-dot.active{transform:scale(1.25);background:var(--accent)}
    .footer{background:#0d0d0d;border-top:1px solid #242424;padding:34px 0}
    .footer-grid{display:grid;grid-template-columns:1.3fr 1fr auto;gap:18px;align-items:center}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .social{width:38px;height:38px;border:1px solid #2f2f2f;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#121212}
    .sticky-cta{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:999;animation:stickyEnter .45s cubic-bezier(.16,1,.3,1) both}
    @keyframes stickyEnter{from{opacity:0;transform:translate(-50%,20px)}to{opacity:1;transform:translate(-50%,0)}}
    @media (max-width: 991px){
      .hero-grid,.product-layout,.gallery-grid,.tabs-wrap,.pricing-grid,.footer-grid{grid-template-columns:1fr}
      .form-grid,.metrics-grid{grid-template-columns:1fr}
      .tabs-nav{position:static;flex-direction:row;overflow:auto}
      .nav-inner{grid-template-columns:1fr auto auto}
      .media-panel{min-height:340px}
      .form-card{min-height:auto}
    }
    @media (max-width: 640px){
      .section{padding:68px 0}
      .nav-inner{grid-template-columns:1fr auto;gap:12px}
      .nav-inner .animated-cta{grid-column:1/-1;width:100%}
      .brand{font-size:15px}
      .chips{gap:10px}
      .hero-actions{flex-direction:column}
      .video-wall{grid-template-columns:1fr}
      .quote{font-size:17px}
    }
  `;

  return (
    <div className="lp">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;700&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">{productName}</div>
          <img
            src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
            height="28px"
            alt="Techjockey"
            className="tj-logo"
          />
          <button className="animated-cta">{primaryCTA}</button>
        </div>
      </nav>

      <section className="hero" ref={heroRef}>
        <div className="container hero-grid">
          <div className="hero-copy hero-fade-left">
            <div className="eyebrow">
              <Icon type="spark" />
              <span>AI Image Generation and AI Video Generation</span>
            </div>
            <h1>
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with
              ByteDance Generative Models
            </h1>
            <p>
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image
              Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models
              developed by ByteDance for high-quality visual content creation.
            </p>
            <p>
              From text prompts, images, or scripts, generate professional visuals and videos with
              powerful multimodal AI systems.
            </p>

            <div className="chips">
              {[
                ['AI Image Generation', 'image'],
                ['AI Video Generation', 'video'],
                ['Audio-Visual Synchronization', 'audio'],
                ['High-Resolution Output', 'spark'],
                ['Text-to-Video Generation', 'video'],
              ].map(([label, icon], i) => (
                <div className="chip" key={i}>
                  <Icon type={icon} />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <button className="animated-cta">{primaryCTA}</button>
              <button className="ghost-btn">{primaryCTA}</button>
            </div>
          </div>

          <div className="form-card hero-fade-right">
            <div className="hero-visual">
              <div className="hero-media">
                <video autoPlay muted loop playsInline preload="auto">
                  <source
                    src="/output/generated-assets/ds_1777553662121_96ba6242/08-8c93b9a6e6.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
              <div className="float-card">
                <div className="mini-card">
                  <h3 style={{ marginBottom: 8 }}>Seedream 4.5</h3>
                  <div className="line" style={{ width: '88%' }} />
                  <div className="line" style={{ width: '66%' }} />
                  <div className="mini-grid">
                    <div className="mini-thumb" />
                    <div className="mini-thumb" />
                    <div className="mini-thumb" />
                  </div>
                </div>
                <div className="mini-card">
                  <h3 style={{ marginBottom: 8 }}>Seedance 1.5 Pro</h3>
                  <div className="line" style={{ width: '92%' }} />
                  <div className="line" style={{ width: '58%' }} />
                  <div className="mini-grid">
                    <div className="mini-thumb" />
                    <div className="mini-thumb" />
                    <div className="mini-thumb" />
                  </div>
                </div>
              </div>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="form-grid">
                <input
                  className="input input-focus-glow"
                  name="name"
                  placeholder="Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="input input-focus-glow"
                  name="email"
                  type="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <input
                  className="input input-focus-glow"
                  name="phone"
                  placeholder="Phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  className="input input-focus-glow"
                  name="company"
                  placeholder="Company"
                  value={formData.company}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="animated-cta" style={{ width: '100%', marginTop: 14 }}>
                {primaryCTA}
              </button>
              {submitted && <div className="success success-check">Submitted successfully.</div>}
            </form>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <div className="marquee-item" key={i}>
              {productName} <span className="gradient-text">★</span> AI Image Generation and AI Video
              Generation
            </div>
          ))}
        </div>
      </div>

      <section className="section metrics">
        <div className="container">
          <div className="metrics-grid reveal">
            <div className="metric">
              <div className="label">Audience</div>
              <div className="value">Professionals and businesses</div>
            </div>
            <div className="metric">
              <div className="label">Category</div>
              <div className="value">AI Image Generation</div>
            </div>
            <div className="metric">
              <div className="label">Category</div>
              <div className="value">AI Video Generation</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section products">
        <div className="container">
          <div className="tabs-wrap">
            <div className="tabs-nav reveal">
              {products.map((item, idx) => (
                <button
                  key={item.name}
                  className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <Icon type={idx === 0 ? 'image' : 'video'} />
                  <span>{item.name}</span>
                </button>
              ))}
            </div>

            <div className="preview-card reveal">
              <div className="product-layout">
                {activeTab === 0 ? (
                  <>
                    <div className="media-panel">
                      <img src={products[0].image} alt={products[0].name} />
                    </div>
                    <div>
                      <div className="badge">{products[0].name}</div>
                      <h2>
                        AI Image Generation with <span className="gradient-text">Seedream 4.5</span>
                      </h2>
                      <div className="desc-box">
                        <p>{products[0].description}</p>
                      </div>
                      <div className="feature-list">
                        {products[0].features.map((f, i) => (
                          <div className="feature-item" key={i}>
                            <Icon type="spark" />
                            <div>
                              <h3>{f.title}</h3>
                              <p>{f.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button className="animated-cta" style={{ marginTop: 18 }}>{primaryCTA}</button>
                    </div>
                  </>
                ) : (
                  <>
                    <div>
                      <div className="badge">{products[1].name}</div>
                      <h2>
                        AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro</span>{' '}
                        by Bytedance
                      </h2>
                      <div className="desc-box">
                        <p>{products[1].description}</p>
                      </div>
                      <div className="feature-list">
                        {products[1].features.map((f, i) => (
                          <div className="feature-item" key={i}>
                            <Icon type="video" />
                            <div>
                              <h3>{f.title}</h3>
                              <p>{f.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                      <button className="animated-cta" style={{ marginTop: 18 }}>{primaryCTA}</button>
                    </div>
                    <div className="media-panel dark">
                      <img src={products[1].image} alt={products[1].name} />
                    </div>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <div className="marquee-item" key={i}>
              Seedream 4.5 <span className="gradient-text">★</span> Seedance 1.5 Pro
            </div>
          ))}
        </div>
      </div>

      <section className="section gallery">
        <div className="container">
          <div className="gallery-grid">
            <div className="reveal">
              <div className="badge">Gallery</div>
              <h2>
                Gallery section containing <span className="gradient-text">Videos</span>
              </h2>
              <p>
                Explore visual outputs and motion-rich demo clips aligned to AI image generation and
                AI video generation workflows.
              </p>
              <div className="video-wall" style={{ marginTop: 18 }}>
                {galleryVideos.slice(0, 4).map((src, i) => (
                  <div className="video-card" key={i}>
                    <video autoPlay muted loop playsInline preload="auto">
                      <source src={src} type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            </div>
            <div className="auto-scroll-media reveal">
              <div className="auto-scroll-track">
                {[...galleryVideos, ...galleryVideos].map((src, i) => (
                  <div className="video-card" key={i}>
                    <video autoPlay muted loop playsInline preload="auto">
                      <source src={src} type="video/mp4" />
                    </video>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 26 }}>
            <div className="badge">Pricing</div>
            <h2>
              Explore <span className="gradient-text">Pricing</span>
            </h2>
          </div>
          <div className="pricing-grid">
            {plans.map((plan, i) => (
              <div className={`price-card reveal ${i === 1 ? 'featured' : ''}`} key={plan.name}>
                <div className="price-top">
                  <h3 style={{ margin: 0 }}>{plan.name}</h3>
                  <div className="badge-green">Includes</div>
                </div>
                <div className="price">{plan.price || ' '}</div>
                <div className="muted">{plan.originalPrice ? `was ${plan.originalPrice}` : ''}</div>
                <ul className="includes">
                  {plan.includes.map((item, idx) => (
                    <li key={idx}>
                      <Icon type="check" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <button className="animated-cta" style={{ width: '100%', marginTop: 'auto' }}>
                  {primaryCTA}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 24 }}>
            <div className="badge">Testimonials</div>
            <h2>
              What teams say about <span className="gradient-text">Seedream and Seedance</span>
            </h2>
          </div>

          <div className="testimonial-shell reveal">
            <div className="testimonial-stage">
              <div
                className="testimonial-row"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div className="testimonial-card" key={i}>
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p className="quote">{t.quote}</p>
                    <div className="author">
                      <img
                        className="avatar"
                        src="/output/generated-assets/ds_1777553662121_96ba6242/02-6d75b26b02.webp"
                        alt={t.name}
                      />
                      <div>
                        <div style={{ fontWeight: 700 }}>{t.name}</div>
                        <div className="muted">{t.role}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="slider-controls">
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  className="arrow"
                  onClick={() =>
                    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                  }
                >
                  ‹
                </button>
                <button
                  className="arrow"
                  onClick={() => setActiveSlide((prev) => (prev + 1) % testimonials.length)}
                >
                  ›
                </button>
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
        </div>
      </section>

      <div className="sticky-cta">
        <button className="animated-cta">{primaryCTA}</button>
      </div>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
              style={{ marginBottom: 12 }}
            />
            <div style={{ color: '#d6d6d6', marginBottom: 8 }}>support@techjockey.com</div>
            <div className="muted">© 2024 Techjockey Infotech Pvt. Ltd.</div>
          </div>

          <div className="footer-links">
            <a href="/">Privacy Policy</a>
            <a href="/">Terms</a>
          </div>

          <div className="socials">
            <a className="social" href="/" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a className="social" href="/" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>
            </a>
            <a className="social" href="/" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 7.5v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"/></svg>
            </a>
            <a className="social" href="/" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;