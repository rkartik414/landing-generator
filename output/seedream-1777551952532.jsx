import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ffffff';
  const primary = '#ff6b00';
  const bodyBg = '#1a1a1a';

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      name: 'Vaishali Saxena',
      role: 'Creative Director',
      avatar: '/output/generated-assets/ds_1777551690396_18bc2fd8/02-6d75b26b02.webp',
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      name: 'Vihaan Pandey',
      role: 'Video Producer',
      avatar: '/output/generated-assets/ds_1777551690396_18bc2fd8/06-e339995f6f.webp',
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      name: 'Anurag Malhotra',
      role: 'Art Director',
      avatar: '/output/generated-assets/ds_1777551690396_18bc2fd8/02-6d75b26b02.webp',
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      name: 'Ashutosh Singh',
      role: 'Marketing Manager',
      avatar: '/output/generated-assets/ds_1777551690396_18bc2fd8/06-e339995f6f.webp',
    },
    {
      quote:
        'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.',
      name: 'Shrimmi Saxena',
      role: 'Creative Lead',
      avatar: '/output/generated-assets/ds_1777551690396_18bc2fd8/02-6d75b26b02.webp',
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

  const [activeSlide, setActiveSlide] = useState(0);
  const [form, setForm] = useState({ name: '', email: '', phone: '', company: '' });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

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

  const handleChange = e => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = e => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2500);
  };

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth' });

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};--light:#f5f5f5;--muted:#d1d5db;--border:rgba(255,255,255,.12)}
    *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;background:var(--bodyBg);font-family:Inter,sans-serif;color:var(--accent)}
    a{text-decoration:none;color:inherit} img{max-width:100%;display:block} button{font-family:inherit}
    .lp{background:var(--bodyBg);overflow:hidden}
    .container{width:min(1180px,92%);margin:0 auto}
    .section{padding:88px 0;position:relative}
    .section-light{background:#f5f5f5;color:#111}
    .section-dark{background:var(--bodyBg);color:var(--accent)}
    .section-orange{background:var(--primary);color:var(--accent)}
    .grid-2{display:grid;grid-template-columns:1.05fr .95fr;gap:42px;align-items:center}
    .nav{position:sticky;top:0;z-index:50;background:rgba(26,26,26,.82);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:16px 0}
    .brand{font:700 20px 'IBM Plex Mono',monospace;color:var(--accent);line-height:1.2}
    .hero{min-height:calc(100vh - 76px);display:flex;align-items:center}
    h1,h2,h3{font-family:'IBM Plex Mono',monospace;margin:0 0 16px}
    h1{font-size:clamp(48px,6vw,68px);line-height:1.05;letter-spacing:-.02em}
    h2{font-size:clamp(32px,4vw,44px);line-height:1.1}
    h3{font-size:22px}
    p{margin:0 0 14px;line-height:1.7}
    .sub{font-size:18px;max-width:660px;color:rgba(255,255,255,.92)}
    .hero-copy .sub{color:#fff}
    .hero-support{color:rgba(255,255,255,.92)}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0 28px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.3);background:rgba(255,255,255,.12);font-size:13px}
    .btn-row{display:flex;gap:14px;flex-wrap:wrap}
    .animated-cta,.ghost-btn{padding:13px 22px;border-radius:10px;border:none;font-weight:700;cursor:pointer;display:inline-flex;align-items:center;justify-content:center}
    .animated-cta{background:var(--accent);color:var(--primary)}
    .ghost-btn{background:transparent;color:var(--accent);border:1px solid rgba(255,255,255,.35)}
    .hero-visual{position:relative;min-height:520px;display:flex;align-items:center;justify-content:center}
    .hero-card{position:relative;width:100%;min-height:520px;border-radius:24px;overflow:hidden;border:1px solid rgba(255,255,255,.18);box-shadow:12px 12px 0 rgba(0,0,0,.22);background:#111}
    .hero-media{width:100%;height:100%;object-fit:cover;min-height:520px}
    .overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.45))}
    .float-card{position:absolute;background:rgba(17,17,17,.88);border:1px solid rgba(255,255,255,.14);color:#fff;border-radius:16px;padding:14px 16px;box-shadow:10px 10px 0 rgba(0,0,0,.16);max-width:240px}
    .fc1{top:18px;left:18px}.fc2{bottom:18px;right:18px}.fc3{top:50%;right:-10px;transform:translateY(-50%)}
    .tag{display:inline-block;padding:7px 12px;border-radius:999px;background:rgba(255,107,0,.12);border:1px solid rgba(255,107,0,.25);color:var(--primary);font-size:13px;font-weight:700;margin-bottom:18px}
    .desc-bar{border-left:3px solid rgba(255,107,0,.4);padding-left:18px;margin:18px 0 26px;color:#333}
    .spotlight{background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:22px;padding:18px;box-shadow:12px 12px 0 rgba(255,107,0,.08)}
    .spotlight img{border-radius:16px;width:100%;height:360px;object-fit:cover}
    .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:16px}
    .feature-card{background:#fff;border:1px solid rgba(0,0,0,.08);padding:16px;border-radius:16px;box-shadow:6px 6px 0 rgba(0,0,0,.04)}
    .feature-card svg{width:18px;height:18px;flex:0 0 18px}
    .feature-head{display:flex;gap:10px;align-items:flex-start;margin-bottom:8px}
    .feature-card p{color:#555;margin:0}
    .media-shell{background:#0f0f0f;border-radius:24px;padding:18px;border:1px solid rgba(255,255,255,.08);box-shadow:12px 12px 0 rgba(0,0,0,.2)}
    .auto-scroll-media{height:500px;border-radius:18px}
    .marquee-wrapper{overflow:hidden;background:#f5f5f5;padding:18px 0;border-top:1px solid rgba(0,0,0,.08);border-bottom:1px solid rgba(0,0,0,.08)}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    .marquee-item{font:700 24px 'IBM Plex Mono',monospace;margin-right:42px;color:#111;white-space:nowrap}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    .metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .metric{padding:22px;border:1px solid rgba(255,255,255,.1);border-radius:18px;background:rgba(255,255,255,.03)}
    .metric .stat-number{font:700 36px 'IBM Plex Mono',monospace;color:var(--accent)}
    .gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .video-card{background:#111;border:1px solid rgba(255,255,255,.08);border-radius:18px;overflow:hidden;box-shadow:10px 10px 0 rgba(0,0,0,.16)}
    .video-card video{aspect-ratio:16/10;width:100%;object-fit:cover}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
    .price-card{background:#fff;color:#111;border-radius:22px;padding:26px;border:1px solid rgba(0,0,0,.08);box-shadow:12px 12px 0 rgba(0,0,0,.08);display:flex;flex-direction:column}
    .price-card.highlight{outline:2px solid var(--primary)}
    .price{font:700 34px 'IBM Plex Mono',monospace;margin:12px 0 16px}
    .price-muted{color:#6b7280}
    .badge{display:inline-block;background:#16a34a;color:#fff;padding:6px 10px;border-radius:999px;font-size:12px;font-weight:700;margin-bottom:12px}
    .list{display:grid;gap:12px;margin:14px 0 22px}
    .list-item{display:flex;gap:10px;align-items:flex-start;color:#333}
    .testi-wrap{position:relative;overflow:hidden}
    .testi-card{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:28px}
    .quote-mark{font-size:44px;color:var(--primary);line-height:1}
    .stars{color:#fbbf24;letter-spacing:2px;margin:12px 0}
    .author{display:flex;gap:14px;align-items:center;margin-top:18px}
    .author img{width:58px;height:58px;border-radius:50%;object-fit:cover}
    .role{color:#9ca3af}
    .slider-controls{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-top:18px}
    .dots{display:flex;gap:8px}
    .slider-dot{width:10px;height:10px;border-radius:999px;border:none;background:rgba(255,255,255,.25);cursor:pointer}
    .slider-dot.active{width:26px}
    .arrow-btn{background:transparent;border:1px solid rgba(255,255,255,.18);color:#fff;width:44px;height:44px;border-radius:50%;cursor:pointer}
    .form-wrap{background:#fff;border-radius:24px;padding:28px;border:1px solid rgba(0,0,0,.08);box-shadow:12px 12px 0 rgba(0,0,0,.08)}
    .form-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .field label{display:block;font-weight:600;margin-bottom:8px;color:#111}
    .field input{width:100%;padding:14px 14px;border:1px solid #ddd;border-radius:12px;font-size:15px}
    .field.full{grid-column:1/-1}
    .footer{padding:44px 0;background:#111;border-top:1px solid rgba(255,255,255,.08)}
    .footer-grid{display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center}
    .footer-meta{display:flex;flex-wrap:wrap;gap:16px;color:#d1d5db;font-size:14px;margin-top:14px}
    .socials{display:flex;gap:10px}
    .socials a{width:40px;height:40px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08)}
    .sticky-cta .animated-cta{background:var(--primary);color:#fff}
    .gradient-text{background:linear-gradient(135deg,var(--accent),var(--primary));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
    .mesh-bg{background-color:#0d0d1a;background-image:radial-gradient(ellipse 80% 50% at 20% 40%, rgba(120,40,200,.28), transparent 50%),radial-gradient(ellipse 60% 60% at 80% 20%, rgba(0,200,150,.14), transparent 50%),radial-gradient(ellipse 40% 40% at 50% 80%, rgba(255,120,50,.16), transparent 50%)}
    @keyframes fadeInUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeInLeft{from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:translateX(0)}}
    @keyframes fadeInRight{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
    @keyframes zoomIn{from{opacity:0;transform:scale(.92)}to{opacity:1;transform:scale(1)}}
    .hero-fade-up{animation:fadeInUp .8s cubic-bezier(.16,1,.3,1) both}
    .hero-fade-left{animation:fadeInLeft .8s cubic-bezier(.16,1,.3,1) both}
    .hero-fade-right{animation:fadeInRight .8s cubic-bezier(.16,1,.3,1) both}
    .hero-zoom{animation:zoomIn .75s cubic-bezier(.16,1,.3,1) both}
    .reveal{opacity:0;transform:translateY(42px);transition:opacity .75s cubic-bezier(.16,1,.3,1),transform .75s cubic-bezier(.16,1,.3,1)}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .stagger-parent>*{opacity:0;transform:translateY(28px);transition:.65s cubic-bezier(.16,1,.3,1)}
    .stagger-parent.visible>*{opacity:1;transform:translateY(0)}
    .stagger-parent.visible>*:nth-child(2){transition-delay:.08s}.stagger-parent.visible>*:nth-child(3){transition-delay:.16s}.stagger-parent.visible>*:nth-child(4){transition-delay:.24s}
    .animated-cta,.btn-magnetic{position:relative;overflow:hidden;background:var(--accent);color:#fff;transition:transform .22s ease,box-shadow .22s ease,background .22s ease}
    .animated-cta:hover,.btn-magnetic:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(0,0,0,.18)}
    .animated-cta::before,.animated-cta::after{display:none!important;content:none!important}
    .auto-scroll-media{max-height:520px;overflow:hidden;position:relative}
    .auto-scroll-track{display:flex;flex-direction:column;gap:16px;animation:autoScrollY 18s linear infinite}
    .auto-scroll-media:hover .auto-scroll-track{animation-play-state:paused}
    @keyframes autoScrollY{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
    .auto-scroll-track img,.auto-scroll-track video{width:100%;border-radius:18px;object-fit:cover}
    .input-focus-glow:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 4px rgba(255,107,0,.12)}
    .sticky-cta{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:999}
    @media (max-width:991px){
      .grid-2,.pricing-grid,.gallery-grid,.metrics,.footer-grid{grid-template-columns:1fr}
      .nav-inner{grid-template-columns:1fr auto;gap:12px}
      .nav-inner .nav-cta{grid-column:1/-1}
      .feature-grid,.form-grid{grid-template-columns:1fr}
      .hero-card,.hero-media,.hero-visual{min-height:420px}
      .fc3{display:none}
    }
    @media (max-width:640px){
      .section{padding:68px 0}
      .chip-row,.btn-row{gap:10px}
      .sticky-cta{left:16px;right:16px;transform:none;bottom:16px}
      .sticky-cta .animated-cta{width:100%}
    }
  `;

  const Icon = ({ type }) => {
    const common = { stroke: primary, fill: 'none', strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (type === 'image')
      return (
        <svg viewBox="0 0 24 24"><rect x="3" y="5" width="18" height="14" rx="2" {...common} /><circle cx="9" cy="10" r="2" {...common} /><path d="M21 16l-5-5-8 8" {...common} /></svg>
      );
    if (type === 'video')
      return (
        <svg viewBox="0 0 24 24"><rect x="3" y="6" width="13" height="12" rx="2" {...common} /><path d="M16 10l5-3v10l-5-3z" {...common} /></svg>
      );
    if (type === 'sync')
      return (
        <svg viewBox="0 0 24 24"><path d="M21 12a9 9 0 0 1-15.5 6.4M3 12A9 9 0 0 1 18.5 5.6" {...common} /><path d="M3 17v-5h5M16 7h5v5" {...common} /></svg>
      );
    return (
      <svg viewBox="0 0 24 24"><path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" {...common} /><path d="M12 7v10M8 9l8 6M16 9l-8 6" {...common} /></svg>
    );
  };

  return (
    <div className="lp">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">Seedream 4.5 and Seedance 1.5 Pro</div>
          <img
            src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
            height="28px"
            alt="Techjockey"
          />
          <button className="animated-cta nav-cta" onClick={scrollToForm} style={{ color: primary }}>
            Generate with AI
          </button>
        </div>
      </nav>

      <section className="section section-orange hero mesh-bg">
        <div className="container grid-2">
          <div className="hero-copy hero-fade-left stagger-parent">
            <h1>
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models
            </h1>
            <p className="sub">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>
            <p className="hero-support">
              From text prompts, images, or scripts, generate professional visuals and videos with powerful multimodal AI systems.
            </p>

            <div className="chip-row">
              {[
                ['AI Image Generation', 'image'],
                ['AI Video Generation', 'video'],
                ['Audio-Visual Synchronization', 'sync'],
                ['High-Resolution Output', 'image'],
                ['Text-to-Video Generation', 'video'],
              ].map(([label, type], i) => (
                <div className="chip" key={i}>
                  <Icon type={type} />
                  <span>{label}</span>
                </div>
              ))}
            </div>

            <div className="btn-row">
              <button className="animated-cta" onClick={scrollToForm} style={{ color: primary }}>
                Generate with AI
              </button>
              <button className="ghost-btn" onClick={scrollToForm}>Generate with AI</button>
            </div>
          </div>

          <div className="hero-visual hero-fade-right">
            <div className="hero-card">
              <img
                src="/output/generated-assets/ds_1777551690396_18bc2fd8/01-9bba47fa7e.png"
                alt="Seedream 4.5 and Seedance 1.5 Pro"
                className="hero-media"
              />
              <div className="overlay" />
              <div className="float-card fc1 float-1">
                <strong>Seedream 4.5</strong>
                <div style={{ marginTop: 8, color: '#d1d5db', fontSize: 14 }}>AI Image Generation</div>
              </div>
              <div className="float-card fc2 float-2">
                <strong>Seedance 1.5 Pro</strong>
                <div style={{ marginTop: 8, color: '#d1d5db', fontSize: 14 }}>AI Video Generation</div>
              </div>
              <div className="float-card fc3 float-3">
                <div style={{ color: '#d1d5db', fontSize: 13 }}>Generate with AI</div>
                <video autoPlay muted loop playsInline preload="auto" style={{ width: '100%', borderRadius: 12, marginTop: 10 }}>
                  <source src="/output/generated-assets/ds_1777551690396_18bc2fd8/08-8c93b9a6e6.mp4" type="video/mp4" />
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="marquee-item">
              Seedream 4.5 and Seedance 1.5 Pro <span className="gradient-text">★</span> AI Image Generation and AI Video Generation
            </span>
          ))}
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 28 }}>
            <span className="tag" style={{ color: accent, borderColor: 'rgba(255,255,255,.2)', background: 'rgba(255,255,255,.05)' }}>
              Professionals creating high-quality visual content, including creative directors, video producers, art directors, marketing managers, and creative leads
            </span>
            <h2>AI Image Generation and AI Video Generation</h2>
          </div>
          <div className="metrics">
            <div className="metric reveal">
              <div className="stat-number">4K</div>
              <p>High-resolution image generation (up to 4K quality)</p>
            </div>
            <div className="metric reveal">
              <div className="stat-number">10×</div>
              <p>Optimized inference pipeline significantly improves generation speed.</p>
            </div>
            <div className="metric reveal">
              <div className="stat-number">1K–4K</div>
              <p>Generate native images up to 1K–4K resolution with strong visual fidelity.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container grid-2">
          <div className="reveal-left">
            <div className="spotlight">
              <img src="/output/generated-assets/ds_1777551690396_18bc2fd8/15-41ea7f7485.png" alt="Seedream 4.5" />
              <div className="feature-grid">
                {[
                  ['/output/generated-assets/ds_1777551690396_18bc2fd8/03-c4e1793d4f.webp', 'Generated visual'],
                  ['/output/generated-assets/ds_1777551690396_18bc2fd8/02-6d75b26b02.webp', 'Creative output'],
                  ['/output/generated-assets/ds_1777551690396_18bc2fd8/04-32b015d440.webp', 'Image generation'],
                  ['/output/generated-assets/ds_1777551690396_18bc2fd8/05-82ab1c05ef.webp', 'High-fidelity result'],
                ].map((item, i) => (
                  <img key={i} src={item[0]} alt={item[1]} style={{ height: 110, objectFit: 'cover', borderRadius: 14 }} />
                ))}
              </div>
            </div>
          </div>
          <div className="reveal-right">
            <span className="tag">AI Image Generation</span>
            <h2>AI Image Generation with <span className="gradient-text">Seedream 4.5</span></h2>
            <div className="desc-bar">
              <p>
                Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.
              </p>
            </div>
            <div className="feature-grid">
              {[
                ['Advanced Text–Image Alignment', 'Accurately translates prompts into visuals with improved semantic understanding.', 'image'],
                ['High-Resolution Output', 'Generate native images up to 1K–4K resolution with strong visual fidelity.', 'image'],
                ['Superior Typographic Rendering', 'Optimized for posters, ads, and text-heavy visual designs.', 'node'],
                ['Multi-Image Composition with Identity Preservation', 'Combines multiple inputs while accurately maintaining subject consistency.', 'sync'],
                ['Strong Structural Fidelity', 'Maintains composition, layout, and scene structure with high precision.', 'node'],
              ].map((f, i) => (
                <div className="feature-card" key={i}>
                  <div className="feature-head">
                    <Icon type={f[2]} />
                    <strong>{f[0]}</strong>
                  </div>
                  <p>{f[1]}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 22 }}>
              <button className="animated-cta" onClick={scrollToForm} style={{ color: primary }}>Generate with AI</button>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="marquee-item">
              Seedance 1.5 Pro <span className="gradient-text">★</span> Native audio-visual generation
            </span>
          ))}
        </div>
      </div>

      <section className="section section-dark">
        <div className="container grid-2">
          <div className="reveal-left">
            <span className="tag" style={{ color: accent, borderColor: 'rgba(255,255,255,.2)', background: 'rgba(255,255,255,.05)' }}>
              AI Video Generation
            </span>
            <h2>AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro by Bytedance</span></h2>
            <div className="desc-bar" style={{ color: '#d1d5db', borderLeftColor: 'rgba(255,255,255,.22)' }}>
              <p>
                Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.
              </p>
            </div>
            <div className="feature-grid">
              {[
                ['Text-to-Video Generation', 'Create videos directly from text prompts.', 'video'],
                ['Audio-Visual Synchronization', 'Generate video and audio simultaneously with strong multimodal alignment.', 'sync'],
                ['Multilingual Lip-Sync', 'Supports multilingual and dialect-level lip synchronization.', 'sync'],
                ['Cinematic Camera Control', 'Generate videos with dynamic camera movement and cinematic storytelling.', 'video'],
                ['10× Faster Inference', 'Optimized inference pipeline significantly improves generation speed.', 'node'],
              ].map((f, i) => (
                <div className="feature-card" key={i} style={{ background: 'rgba(255,255,255,.04)', color: '#fff', borderColor: 'rgba(255,255,255,.08)' }}>
                  <div className="feature-head">
                    <Icon type={f[2]} />
                    <strong>{f[0]}</strong>
                  </div>
                  <p style={{ color: '#d1d5db' }}>{f[1]}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 22 }}>
              <button className="animated-cta" onClick={scrollToForm} style={{ color: primary }}>Generate with AI</button>
            </div>
          </div>

          <div className="reveal-right">
            <div className="media-shell">
              <img
                src="/output/generated-assets/ds_1777551690396_18bc2fd8/14-e1b1bc05a8.jpeg"
                alt="Seedance 1.5 Pro"
                style={{ width: '100%', height: 220, objectFit: 'cover', borderRadius: 18, marginBottom: 16 }}
              />
              <div className="auto-scroll-media">
                <div className="auto-scroll-track">
                  {[
                    'https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4',
                    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiModalInput_1.mp4',
                    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ConsistentCharacters.mp4',
                    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ReferenceControl.mp4',
                    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4',
                    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiShot.mp4',
                    'https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4',
                    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiModalInput_1.mp4',
                    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ConsistentCharacters.mp4',
                    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ReferenceControl.mp4',
                    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4',
                    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiShot.mp4',
                  ].map((src, i) => (
                    <video key={i} autoPlay muted loop playsInline preload="auto">
                      <source src={src} type="video/mp4" />
                    </video>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 30 }}>
            <span className="tag">Gallery</span>
            <h2>Generate with AI</h2>
          </div>
          <div className="gallery-grid">
            {galleryVideos.map((src, i) => (
              <div className="video-card reveal" key={i}>
                <video autoPlay muted loop playsInline preload="auto">
                  <source src={src} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 28 }}>
            <h2>Pricing</h2>
          </div>
          <div className="pricing-grid">
            <div className="price-card reveal">
              <h3>Seedream 4.5 (AI Image Generation)</h3>
              <div className="price price-muted"> </div>
              <div className="list">
                {[
                  'High-resolution image generation (up to 4K quality)',
                  'Text-to-image & multimodal image editing',
                  'Multi-image composition for complex visuals',
                  'Enhanced typographic rendering for posters, ads & text-heavy designs',
                ].map((item, i) => (
                  <div className="list-item" key={i}>
                    <Icon type="node" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button className="animated-cta" onClick={scrollToForm} style={{ width: '100%', marginTop: 'auto', color: primary }}>
                Generate with AI
              </button>
            </div>

            <div className="price-card highlight reveal">
              <span className="badge">Starting at $1,000/month/</span>
              <h3>Seedance 1.5 Pro (AI Video Generation)</h3>
              <div className="price">Starting at $1,000/month/</div>
              <div className="list">
                {[
                  'Text-to-video generation with cinematic output',
                  'Native audio + video generation (synchronized)',
                  'Multilingual lip-sync capabilities',
                  'Fast inference for quicker video production',
                ].map((item, i) => (
                  <div className="list-item" key={i}>
                    <Icon type="video" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <button className="animated-cta" onClick={scrollToForm} style={{ width: '100%', marginTop: 'auto', color: primary }}>
                Generate with AI
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 28 }}>
            <h2>Testimonials</h2>
          </div>
          <div className="testi-wrap reveal">
            <div className="testi-card">
              <div className="quote-mark">❝</div>
              <p style={{ fontSize: 22, lineHeight: 1.75, marginTop: 10 }}>{testimonials[activeSlide].quote}</p>
              <div className="stars">★★★★★</div>
              <div className="author">
                <img src={testimonials[activeSlide].avatar} alt={testimonials[activeSlide].name} />
                <div>
                  <div style={{ fontWeight: 700 }}>{testimonials[activeSlide].name}</div>
                  <div className="role">{testimonials[activeSlide].role}</div>
                </div>
              </div>
            </div>
            <div className="slider-controls">
              <div>
                <button
                  className="arrow-btn"
                  onClick={() => setActiveSlide((activeSlide - 1 + testimonials.length) % testimonials.length)}
                  aria-label="Previous testimonial"
                >
                  ←
                </button>{' '}
                <button
                  className="arrow-btn"
                  onClick={() => setActiveSlide((activeSlide + 1) % testimonials.length)}
                  aria-label="Next testimonial"
                >
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

      <section className="section section-light" ref={formRef}>
        <div className="container grid-2">
          <div className="reveal-left">
            <span className="tag">Generate with AI</span>
            <h2>Create High-Quality AI Images & Videos with <span className="gradient-text">ByteDance Generative Models</span></h2>
            <p style={{ color: '#333' }}>
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>
          </div>
          <div className="reveal-right">
            <form className="form-wrap" onSubmit={handleSubmit}>
              <div className="form-grid">
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" value={form.name} onChange={handleChange} className="input-focus-glow" required />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" type="email" name="email" value={form.email} onChange={handleChange} className="input-focus-glow" required />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" value={form.phone} onChange={handleChange} className="input-focus-glow" required />
                </div>
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" value={form.company} onChange={handleChange} className="input-focus-glow" />
                </div>
                <div className="field full">
                  <button className="animated-cta" type="submit" style={{ width: '100%', color: primary }}>
                    Generate with AI
                  </button>
                </div>
              </div>
              {submitted && <div className="success-check" style={{ marginTop: 14, color: '#16a34a', fontWeight: 700 }}>Generate with AI</div>}
            </form>
          </div>
        </div>
      </section>

      <div className="sticky-cta">
        <button className="animated-cta" onClick={scrollToForm}>Generate with AI</button>
      </div>

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
              <a href="/">Privacy Policy</a>
              <a href="/">Terms</a>
            </div>
          </div>
          <div className="socials">
            <a href="/" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z" fill={accent}/></svg>
            </a>
            <a href="/" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke={accent} strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke={accent} strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill={accent}/></svg>
            </a>
            <a href="/" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.2-5.2.8-.5.9-.4 1.9-.2 2.8-3.2-.2-6.1-1.7-8.1-4.2-1 1.8-.5 4 1.1 5.2-.6 0-1.2-.2-1.7-.5 0 2 1.4 3.8 3.4 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.2 2.9 4 3-1.7 1.3-3.8 1.9-6 1.6 1.9 1.2 4.2 1.9 6.6 1.9 7.9 0 12.4-6.8 12.1-12.8.8-.6 1.5-1.3 2-2.1z" fill={accent}/></svg>
            </a>
            <a href="/" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6.5 8.5h-4v12h4v-12zm-2-6a2.3 2.3 0 100 4.6 2.3 2.3 0 000-4.6zM21.5 20.5v-6.7c0-3.6-1.9-5.3-4.5-5.3-2.1 0-3 .9-3.6 1.7v-1.5h-4v11.8h4v-6.6c0-1.7.3-3.3 2.4-3.3 2.1 0 2.1 1.9 2.1 3.4v6.5h3.6z" fill={accent}/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;