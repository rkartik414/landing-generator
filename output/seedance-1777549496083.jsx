import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#ff6b00';
  const bodyBg = '#0f0f0f';

  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const primaryCTA = 'Generate with AI';

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
  };

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};--cardBg:#1a1a1a;--border:#2a2a2a;--text:#fff;--muted:#c9c9c9}
    *{box-sizing:border-box} html{scroll-behavior:smooth}
    body{margin:0;font-family:Inter,sans-serif;background:var(--bodyBg);color:var(--text)}
    a{text-decoration:none;color:inherit} img,video{max-width:100%}
    .container{width:min(1200px,calc(100% - 32px));margin:auto}
    .section{padding:84px 0;position:relative;overflow:hidden}
    .nav{position:sticky;top:0;z-index:50;background:rgba(15,15,15,.82);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand{font-weight:800;font-size:20px;line-height:1.2}
    .tj-logo{height:28px;opacity:.95}
    .btn,.animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:13px 22px;border-radius:12px;border:none;font-weight:700;cursor:pointer}
    .animated-cta,.btn-magnetic{position:relative;overflow:hidden;background:var(--accent);color:#fff;transition:transform .22s ease,box-shadow .22s ease,background .22s ease}
    .animated-cta:hover,.btn-magnetic:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(0,0,0,.18)}
    .animated-cta::before,.animated-cta::after{display:none!important;content:none!important}
    .btn-ghost{background:transparent;border:1px solid #3a3a3a;color:#fff}
    .hero{background:#1a1a1a}
    .hero-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:34px;align-items:center;min-height:calc(100vh - 72px)}
    .hero h1{font-size:clamp(48px,6vw,68px);line-height:1.02;margin:0 0 18px;font-weight:800}
    .hero p{font-size:18px;line-height:1.7;color:var(--muted);margin:0}
    .eyebrow{display:inline-flex;gap:8px;align-items:center;padding:8px 14px;border:1px solid rgba(255,107,0,.32);background:rgba(255,107,0,.10);border-radius:999px;color:#f3d1bb;font-size:13px;margin-bottom:18px}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 28px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(255,107,0,.25);background:rgba(255,107,0,.08);color:#ddd;font-size:13px}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{min-height:500px;border-radius:24px;border:1px solid var(--border);background:linear-gradient(180deg,rgba(255,107,0,.08),rgba(255,107,0,.02));box-shadow:0 18px 60px rgba(0,0,0,.45);padding:18px;position:relative}
    .hero-shell{height:100%;display:grid;grid-template-rows:auto 1fr auto;gap:16px}
    .panel-top{display:flex;justify-content:space-between;align-items:center;background:#121212;border:1px solid var(--border);border-radius:16px;padding:12px 14px}
    .dots{display:flex;gap:8px}.dot{width:10px;height:10px;border-radius:50%;background:#333}.dot:nth-child(1){background:#ff5f57}.dot:nth-child(2){background:#febc2e}.dot:nth-child(3){background:#28c840}
    .hero-media{position:relative;border-radius:20px;overflow:hidden;border:1px solid var(--border);background:#0b0b0b}
    .hero-media video,.hero-media img{width:100%;height:100%;min-height:320px;object-fit:cover;display:block}
    .floating-card{position:absolute;background:rgba(18,18,18,.88);border:1px solid var(--border);border-radius:16px;padding:14px 16px;box-shadow:0 18px 40px rgba(0,0,0,.35)}
    .fc-1{top:24px;left:-12px}.fc-2{right:-10px;bottom:28px}.fc-3{left:22px;bottom:20px}
    .metric-title{font-size:12px;color:#aaa;margin-bottom:4px}.metric-value{font-weight:800;font-size:18px}
    .orbs:before,.orbs:after{content:"";position:absolute;border-radius:50%;filter:blur(22px);pointer-events:none}
    .orbs:before{width:320px;height:320px;right:-70px;top:-70px;background:radial-gradient(circle,rgba(255,107,0,.18),transparent 68%)}
    .orbs:after{width:240px;height:240px;left:-60px;bottom:-70px;background:radial-gradient(circle,rgba(255,107,0,.11),transparent 68%)}
    .form-card{background:#141414;border:1px solid var(--border);border-radius:22px;padding:22px;box-shadow:0 16px 48px rgba(0,0,0,.38)}
    .form-card h3{margin:0 0 12px;font-size:24px}
    .form-grid{display:grid;gap:12px}
    .input{width:100%;background:#101010;border:1px solid #2e2e2e;color:#fff;border-radius:12px;padding:14px 14px;font-size:15px}
    .input-focus-glow:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 4px rgba(255,107,0,.12)}
    .full-btn{width:100%;margin-top:6px}
    .success{margin-top:12px;color:#9ae6b4;font-size:14px}
    .marquee-wrapper{overflow:hidden;background:#101010;padding:18px 0;border-top:1px solid #2a2a2a;border-bottom:1px solid #2a2a2a}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    .marquee-item{font-size:28px;font-weight:800;margin-right:48px;white-space:nowrap;color:rgba(255,255,255,.82)}
    .product-section{background:#181818}
    .product-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
    .product-grid.reverse .text-col{order:1}.product-grid.reverse .media-col{order:2}
    .tag{display:inline-block;padding:8px 14px;border-radius:999px;background:rgba(255,107,0,.08);border:1px solid rgba(255,107,0,.24);font-size:13px;color:#f0c4a7;margin-bottom:16px}
    h2{font-size:clamp(32px,4vw,44px);line-height:1.1;margin:0 0 14px;font-weight:800}
    .desc-wrap{border-left:2px solid rgba(255,255,255,.14);padding-left:18px;margin-bottom:26px}
    .desc-wrap p{color:var(--muted);font-size:17px;line-height:1.75;margin:0}
    .spotlight{border-radius:24px;overflow:hidden;border:1px solid var(--border);background:#111;box-shadow:0 18px 50px rgba(0,0,0,.35)}
    .spotlight img{display:block;width:100%;height:320px;object-fit:cover}
    .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:16px}
    .feature-card{background:#141414;border:1px solid var(--border);border-radius:18px;padding:16px;transition:transform .25s ease,box-shadow .25s ease}
    .feature-card:hover{transform:translateY(-4px);box-shadow:0 12px 28px rgba(0,0,0,.25)}
    .feature-head{display:flex;gap:12px;align-items:flex-start;margin-bottom:8px}
    .icon{width:40px;height:40px;border-radius:12px;display:grid;place-items:center;background:rgba(255,107,0,.12);border:1px solid rgba(255,107,0,.22);flex:0 0 40px}
    .feature-card h4{margin:0;font-size:16px}
    .feature-card p{margin:0;color:var(--muted);font-size:14px;line-height:1.6}
    .gallery{background:#111}
    .gallery-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:20px;align-items:start}
    .video-wall{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
    .video-card{border-radius:18px;overflow:hidden;border:1px solid var(--border);background:#0c0c0c}
    .video-card video{width:100%;height:220px;object-fit:cover;display:block}
    .auto-scroll-media{max-height:520px;overflow:hidden;position:relative}
    .auto-scroll-track{display:flex;flex-direction:column;gap:16px;animation:autoScrollY 18s linear infinite}
    .auto-scroll-media:hover .auto-scroll-track{animation-play-state:paused}
    @keyframes autoScrollY{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
    .pricing{background:#181818}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
    .price-card{background:#141414;border:1px solid var(--border);border-radius:22px;padding:24px;box-shadow:0 14px 42px rgba(0,0,0,.28)}
    .price-card.highlight{border-color:rgba(255,107,0,.55);box-shadow:0 0 0 1px rgba(255,107,0,.18),0 20px 55px rgba(0,0,0,.35)}
    .badge-green{display:inline-block;background:#163b26;color:#98f5be;padding:7px 12px;border-radius:999px;font-size:12px;margin-bottom:12px}
    .price-card h3{margin:0 0 10px;font-size:24px}
    .price{font-size:34px;font-weight:800;margin:10px 0 14px}
    .price.muted{color:#cfcfcf;font-size:26px}
    .list{display:grid;gap:10px;padding:0;margin:0;list-style:none}
    .list li{display:flex;gap:10px;color:var(--muted);line-height:1.55}
    .tick{width:18px;height:18px;border-radius:50%;background:rgba(255,107,0,.14);border:1px solid rgba(255,107,0,.3);display:grid;place-items:center;flex:0 0 18px;margin-top:2px}
    .testimonials{background:#111}
    .slider-wrap{position:relative;overflow:hidden}
    .slider-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .slide{min-width:100%}
    .quote-card{background:#141414;border:1px solid var(--border);border-radius:24px;padding:28px}
    .quote-mark{font-size:56px;line-height:1;color:var(--accent);font-weight:800}
    .quote-card p{font-size:20px;line-height:1.75;color:#f1f1f1;margin:8px 0 22px}
    .author{display:flex;align-items:center;gap:14px}
    .avatar{width:56px;height:56px;border-radius:50%;object-fit:cover;border:1px solid var(--border)}
    .author-name{font-weight:800}.author-role{color:#aaa;font-size:14px}
    .stars{color:#f5c451;letter-spacing:2px;margin-bottom:6px}
    .slider-controls{display:flex;justify-content:space-between;align-items:center;gap:12px;margin-top:18px}
    .dots-row{display:flex;justify-content:center;gap:8px}
    .slider-dot{width:8px;height:8px;border-radius:999px;background:rgba(255,255,255,.28);border:none;cursor:pointer;transition:.25s ease}
    .slider-dot.active{transform:scale(1.25);background:var(--accent);width:24px}
    .arrow{background:#161616;border:1px solid var(--border);color:#fff;width:44px;height:44px;border-radius:12px;cursor:pointer}
    .sticky-cta{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:999;animation:stickyEnter .45s cubic-bezier(.16,1,.3,1) both}
    @keyframes stickyEnter{from{opacity:0;transform:translate(-50%,20px)}to{opacity:1;transform:translate(-50%,0)}}
    footer{background:#0f0f0f;border-top:1px solid var(--border);padding:32px 0}
    .footer-grid{display:grid;grid-template-columns:1.2fr 1fr auto;gap:20px;align-items:center}
    .footer-links,.socials{display:flex;gap:16px;flex-wrap:wrap}
    .social{width:38px;height:38px;border-radius:10px;border:1px solid var(--border);display:grid;place-items:center;background:#151515}
    .muted{color:var(--muted)}
    .gradient-text{background:linear-gradient(135deg,var(--accent),var(--primary));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
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
    .stagger-parent.visible>*:nth-child(2){transition-delay:.08s}.stagger-parent.visible>*:nth-child(3){transition-delay:.16s}.stagger-parent.visible>*:nth-child(4){transition-delay:.24s}.stagger-parent.visible>*:nth-child(5){transition-delay:.32s}
    @media (max-width:991px){
      .hero-grid,.product-grid,.gallery-grid,.pricing-grid,.footer-grid{grid-template-columns:1fr}
      .nav-inner{grid-template-columns:1fr auto;gap:12px}
      .nav-actions{grid-column:1/-1;display:flex;justify-content:flex-end}
      .hero-visual{min-height:auto}.video-wall{grid-template-columns:1fr}.feature-grid{grid-template-columns:1fr}
    }
    @media (max-width:640px){
      .section{padding:62px 0}.hero p,.desc-wrap p,.quote-card p{font-size:16px}
      .marquee-item{font-size:22px}.hero-actions{flex-direction:column}.btn,.animated-cta{width:100%}
      .sticky-cta{width:calc(100% - 24px)}
    }
  `;

  const renderIcon = (i) => {
    const icons = [
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={accent} strokeWidth="2"><path d="M4 7h16M7 4v16M17 10c-2 0-3 1-3 3s1 3 3 3 3-1 3-3-1-3-3-3Z"/></svg>,
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={accent} strokeWidth="2"><path d="m5 12 4 4L19 6"/></svg>,
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={accent} strokeWidth="2"><path d="M12 3l8 4v5c0 5-3.5 7.5-8 9-4.5-1.5-8-4-8-9V7l8-4Z"/></svg>,
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={accent} strokeWidth="2"><path d="M3 12h18M12 3v18"/></svg>,
      <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke={accent} strokeWidth="2"><path d="M4 19 20 5M6 5h14v14"/></svg>,
    ];
    return icons[i % icons.length];
  };

  const galleryVideos = [
    'https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiModalInput_1.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ConsistentCharacters.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ReferenceControl.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiShot.mp4',
  ];

  const marqueeItems = [
    'Seedream 4.5 and Seedance 1.5 Pro',
    'AI Image Generation and AI Video Generation',
    'Generate with AI',
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span style={{ color: accent }}>Seedream 4.5 and Seedance 1.5 Pro</span>
          </div>
          <div>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <div className="nav-actions">
            <button className="animated-cta" onClick={scrollToForm}>
              {primaryCTA}
            </button>
          </div>
        </div>
      </nav>

      <section className="section hero orbs">
        <div className="container hero-grid">
          <div className="hero-fade-left stagger-parent">
            <div className="eyebrow">AI Image Generation and AI Video Generation</div>
            <h1>
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with
              ByteDance Generative Models
            </h1>
            <p>
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image
              Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models
              developed by ByteDance for high-quality visual content creation.
            </p>
            <div className="chips">
              {[
                'AI Image Generation',
                'AI Video Generation with Audio',
                'Multimodal Content Creation',
                'Enterprise-ready AI infrastructure',
              ].map((chip, i) => (
                <div className="chip" key={chip}>
                  {renderIcon(i)}
                  <span>{chip}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions">
              <button className="animated-cta" onClick={scrollToForm}>
                {primaryCTA}
              </button>
              <button className="btn btn-ghost" onClick={scrollToForm}>
                {primaryCTA}
              </button>
            </div>
          </div>

          <div className="hero-fade-right" ref={formRef}>
            <div className="hero-visual">
              <div className="hero-shell">
                <div className="panel-top">
                  <div className="dots">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                  <div className="muted" style={{ fontSize: 13 }}>
                    Professionals creating high-quality visual content
                  </div>
                </div>

                <div className="hero-media">
                  <video autoPlay muted loop playsInline preload="auto">
                    <source
                      src="/output/generated-assets/ds_1777549184861_469dcb7a/08-53f60cc861.mp4"
                      type="video/mp4"
                    />
                  </video>
                  <div className="floating-card fc-1 float-1">
                    <div className="metric-title">Seedream 4.5</div>
                    <div className="metric-value">AI Image Generation</div>
                  </div>
                  <div className="floating-card fc-2 float-2">
                    <div className="metric-title">Seedance 1.5 Pro</div>
                    <div className="metric-value">AI Video Generation</div>
                  </div>
                  <div className="floating-card fc-3 float-3">
                    <div className="metric-title">Output</div>
                    <div className="metric-value">1K–4K + Audio-Visual</div>
                  </div>
                </div>

                <form className="form-card" onSubmit={handleSubmit}>
                  <h3>Generate with AI</h3>
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
                      type="email"
                      name="email"
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
                    />
                    <button type="submit" className="animated-cta full-btn">
                      {primaryCTA}
                    </button>
                  </div>
                  {submitted && <div className="success success-check">Thanks for your interest.</div>}
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems, ...marqueeItems, ...marqueeItems].map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <span className="gradient-text">★</span>
            </span>
          ))}
        </div>
      </div>

      <section className="section gallery">
        <div className="container gallery-grid">
          <div className="reveal">
            <span className="tag">Video Gallery</span>
            <h2>
              Explore <span className="gradient-text">AI Video</span> outputs
            </h2>
            <div className="desc-wrap">
              <p>
                Unlock the power of next-generation generative AI with Seedream 4.5 (Image
                Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models
                developed by ByteDance for high-quality visual content creation.
              </p>
            </div>
            <div className="video-wall">
              {galleryVideos.slice(0, 4).map((video, idx) => (
                <div className="video-card" key={idx}>
                  <video autoPlay muted loop playsInline preload="auto">
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>
          <div className="auto-scroll-media reveal">
            <div className="auto-scroll-track">
              {[...galleryVideos, ...galleryVideos].map((video, idx) => (
                <div className="video-card" key={idx}>
                  <video autoPlay muted loop playsInline preload="auto">
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section product-section">
        <div className="container product-grid">
          <div className="media-col reveal-left">
            <div className="spotlight">
              <img
                src="/output/generated-assets/ds_1777549184861_469dcb7a/06-336c55c5a0.png"
                alt="Seedream 4.5"
              />
            </div>
            <div className="feature-grid">
              {[
                ['Advanced Text–Image Alignment', 'Accurately translates prompts into visuals with improved semantic understanding.'],
                ['High-Resolution Output', 'Generate native images up to 1K–4K resolution with strong visual fidelity.'],
                ['Superior Typographic Rendering', 'Optimized for posters, ads, and text-heavy visual designs.'],
                ['Strong Structural Fidelity', 'Maintains composition, layout, and scene structure with high precision.'],
              ].map((item, i) => (
                <div className="feature-card" key={i}>
                  <div className="feature-head">
                    <div className="icon">{renderIcon(i)}</div>
                    <h4>{item[0]}</h4>
                  </div>
                  <p>{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="text-col reveal-right">
            <span className="tag">AI Image Generation</span>
            <h2>
              AI Image Generation with <span className="gradient-text">Seedream 4.5</span>
            </h2>
            <div className="desc-wrap">
              <p>
                Seedream 4.5 is a high-performance multimodal image generation system designed to
                produce high-resolution, high-fidelity images from text prompts and visual inputs.
                The model unifies text-to-image synthesis, image editing, and multi-image
                composition within a single framework.
              </p>
            </div>
            <div className="feature-grid">
              {[
                ['Multi-Image Composition with Identity Preservation', 'Combines multiple inputs while accurately maintaining subject consistency.'],
                ['Advanced Text–Image Alignment', 'Accurately translates prompts into visuals with improved semantic understanding.'],
                ['High-Resolution Output', 'Generate native images up to 1K–4K resolution with strong visual fidelity.'],
                ['Superior Typographic Rendering', 'Optimized for posters, ads, and text-heavy visual designs.'],
              ].map((item, i) => (
                <div className="feature-card" key={i}>
                  <div className="feature-head">
                    <div className="icon">{renderIcon(i + 1)}</div>
                    <h4>{item[0]}</h4>
                  </div>
                  <p>{item[1]}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <button className="animated-cta" onClick={scrollToForm}>
                {primaryCTA}
              </button>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[
            'Seedance 1.5 Pro',
            'Text-to-Video Generation',
            'Audio-Visual Synchronization',
            'Multilingual Lip-Sync',
            'Cinematic Camera Control',
            '10× Faster Inference',
            'Seedance 1.5 Pro',
            'Text-to-Video Generation',
            'Audio-Visual Synchronization',
          ].map((item, i) => (
            <span key={i} className="marquee-item">
              {item} <span className="gradient-text">★</span>
            </span>
          ))}
        </div>
      </div>

      <section className="section" style={{ background: '#101010' }}>
        <div className="container product-grid reverse">
          <div className="text-col reveal-left">
            <span className="tag">AI Video Generation</span>
            <h2>
              AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro</span> by
              Bytedance
            </h2>
            <div className="desc-wrap">
              <p>
                Seedance 1.5 Pro is a next-generation generative model designed for native
                audio-visual generation, enabling synchronized creation of video and sound together.
                Built on a dual-branch diffusion transformer architecture, the model integrates
                cross-modal learning to produce coherent visual and audio outputs.
              </p>
            </div>
            <div className="feature-grid">
              {[
                ['Text-to-Video Generation', 'Create videos directly from text prompts.'],
                ['Audio-Visual Synchronization', 'Generate video and audio simultaneously with strong multimodal alignment.'],
                ['Multilingual Lip-Sync', 'Supports multilingual and dialect-level lip synchronization.'],
                ['Cinematic Camera Control', 'Generate videos with dynamic camera movement and cinematic storytelling.'],
                ['10× Faster Inference', 'Optimized inference pipeline significantly improves generation speed.'],
              ].slice(0, 4).map((item, i) => (
                <div className="feature-card" key={i}>
                  <div className="feature-head">
                    <div className="icon">{renderIcon(i + 2)}</div>
                    <h4>{item[0]}</h4>
                  </div>
                  <p>{item[1]}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <button className="animated-cta" onClick={scrollToForm}>
                {primaryCTA}
              </button>
            </div>
          </div>
          <div className="media-col reveal-right">
            <div className="spotlight">
              <img
                src="/output/generated-assets/ds_1777549184861_469dcb7a/09-e1b1bc05a8.jpeg"
                alt="Seedance 1.5 Pro"
              />
            </div>
            <div className="auto-scroll-media" style={{ marginTop: 16, height: 450 }}>
              <div className="auto-scroll-track">
                {[
                  'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiModalInput_1.mp4',
                  'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ConsistentCharacters.mp4',
                  'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ReferenceControl.mp4',
                  'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4',
                  'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiShot.mp4',
                  'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiModalInput_1.mp4',
                ].map((video, idx) => (
                  <div className="video-card" key={idx}>
                    <video autoPlay muted loop playsInline preload="auto">
                      <source src={video} type="video/mp4" />
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
          <div className="reveal" style={{ marginBottom: 28 }}>
            <span className="tag">Pricing</span>
            <h2>
              Compare <span className="gradient-text">plans</span>
            </h2>
          </div>
          <div className="pricing-grid">
            <div className="price-card reveal">
              <div className="badge-green">Get Quote</div>
              <h3>Seedream 4.5 (AI Image Generation)</h3>
              <div className="price muted">Get Quote</div>
              <ul className="list">
                {[
                  'High-resolution image generation (up to 4K quality)',
                  'Text-to-image & multimodal image editing',
                  'Multi-image composition for complex visuals',
                  'Enhanced typographic rendering for posters, ads & text-heavy designs',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="tick">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke={accent} strokeWidth="3">
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="animated-cta full-btn" onClick={scrollToForm} style={{ marginTop: 18 }}>
                {primaryCTA}
              </button>
            </div>

            <div className="price-card highlight reveal">
              <div className="badge-green">Get Quote</div>
              <h3>Seedance 1.5 Pro (AI Video Generation)</h3>
              <div className="price">Starting at $1,000/month/</div>
              <ul className="list">
                {[
                  'Text-to-video generation with cinematic output',
                  'Native audio + video generation (synchronized)',
                  'Multilingual lip-sync capabilities',
                  'Fast inference for quicker video production',
                ].map((item, i) => (
                  <li key={i}>
                    <span className="tick">
                      <svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke={accent} strokeWidth="3">
                        <path d="m5 12 4 4L19 6" />
                      </svg>
                    </span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <button className="animated-cta full-btn" onClick={scrollToForm} style={{ marginTop: 18 }}>
                {primaryCTA}
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 26 }}>
            <span className="tag">Testimonials</span>
            <h2>
              What creative teams say about <span className="gradient-text">Seedream & Seedance</span>
            </h2>
          </div>

          <div className="slider-wrap reveal">
            <div
              className="slider-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <div className="slide" key={i}>
                  <div className="quote-card">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p>{item.quote}</p>
                    <div className="author">
                      <img
                        className="avatar"
                        src="/output/generated-assets/ds_1777549184861_469dcb7a/02-6d75b26b02.webp"
                        alt={item.author}
                      />
                      <div>
                        <div className="author-name">{item.author}</div>
                        <div className="author-role">{item.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-controls">
              <button
                className="arrow"
                onClick={() => setActiveSlide((activeSlide - 1 + testimonials.length) % testimonials.length)}
              >
                ‹
              </button>
              <div className="dots-row">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`slider-dot ${i === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(i)}
                  />
                ))}
              </div>
              <button
                className="arrow"
                onClick={() => setActiveSlide((activeSlide + 1) % testimonials.length)}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <a className="animated-cta sticky-cta" onClick={scrollToForm}>
        {primaryCTA}
      </a>

      <footer>
        <div className="container footer-grid">
          <div>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <div className="muted" style={{ marginTop: 12 }}>support@techjockey.com</div>
            <div className="muted" style={{ marginTop: 6 }}>© 2024 Techjockey Infotech Pvt. Ltd.</div>
          </div>

          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms</a>
          </div>

          <div className="socials">
            <a className="social" href="#facebook" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13.5 21v-8h2.7l.4-3h-3.1V8.1c0-.9.3-1.6 1.7-1.6H17V3.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V10H7.5v3h2.8v8h3.2Z"/></svg>
            </a>
            <a className="social" href="#instagram" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
            </a>
            <a className="social" href="#twitter" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M18.9 7.2c.8-.1 1.5-.5 2.1-1-.3.9-.9 1.6-1.7 2.1v.5c0 5.1-3.9 11-11 11-2.2 0-4.2-.6-5.9-1.8h.9c1.8 0 3.5-.6 4.8-1.7-1.7 0-3.1-1.1-3.6-2.7h.7c.3 0 .7 0 1-.1-1.8-.4-3.1-2-3.1-3.9v-.1c.5.3 1.1.5 1.7.5-1.1-.7-1.8-1.9-1.8-3.3 0-.7.2-1.4.6-2 2 2.5 5 4.1 8.4 4.3-.1-.3-.1-.6-.1-.9 0-2.2 1.8-4 4-4 1.2 0 2.2.5 2.9 1.3.9-.2 1.7-.5 2.4-.9-.3.9-.9 1.7-1.7 2.2Z"/></svg>
            </a>
            <a className="social" href="#linkedin" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.9 8.4a1.8 1.8 0 1 1 0-3.6 1.8 1.8 0 0 1 0 3.6ZM5.3 9.8h3.1V19H5.3V9.8Zm5 0h3v1.3h.1c.4-.8 1.5-1.6 3.1-1.6 3.3 0 3.9 2.2 3.9 5V19h-3.1v-4c0-1 0-2.3-1.4-2.3s-1.6 1.1-1.6 2.2V19h-3.1V9.8Z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
};

export default LandingPage;