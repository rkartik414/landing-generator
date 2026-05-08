import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#1a1a1a';
  const bodyBg = '#1a1a1a';

  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [submitted, setSubmitted] = useState(false);
  const formRef = useRef(null);

  const primaryCTA = 'Generate with AI';

  const testimonials = [
    {
      quote: 'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      author: 'Vaishali Saxena',
      role: 'Creative Director',
      avatar: '/output/generated-assets/ds_1777542953967_9b4fb523/04-2770603589.png'
    },
    {
      quote: 'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      author: 'Vihaan Pandey',
      role: 'Video Producer',
      avatar: '/output/generated-assets/ds_1777542953967_9b4fb523/05-fd8403a48b.png'
    },
    {
      quote: 'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      author: 'Anurag Malhotra',
      role: 'Art Director',
      avatar: '/output/generated-assets/ds_1777542953967_9b4fb523/07-2f95c6a6c6.png'
    },
    {
      quote: 'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      author: 'Ashutosh Singh',
      role: 'Marketing Manager',
      avatar: '/output/generated-assets/ds_1777542953967_9b4fb523/06-ea188ac20a.png'
    },
    {
      quote: 'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.',
      author: 'Shrimmi Saxena',
      role: 'Creative Lead',
      avatar: '/output/generated-assets/ds_1777542953967_9b4fb523/08-26297278f3.png'
    }
  ];

  const mediaGallery = [
    { type: 'image', src: '/output/generated-assets/ds_1777542953967_9b4fb523/11-f578e07b46.jpeg' },
    { type: 'video', src: 'https://assets-static.invideo.io/files/Invideo_Demo_HP_18_10_2024_V001_8d82de6d4a.mp4' },
    { type: 'image', src: '/output/generated-assets/ds_1777542953967_9b4fb523/13-577dd50cc7.jpeg' },
    { type: 'video', src: 'https://assets-static.invideo.io/files/Generative_v30_b53e1e8491.mp4' },
    { type: 'image', src: '/output/generated-assets/ds_1777542953967_9b4fb523/14-fa9caa1249.png' },
    { type: 'video', src: 'https://assets-static.invideo.io/files/Stock_Footage2x_V2_78c7e1c798.mp4' }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      });
    }, { threshold: 0.14, rootMargin: '0px 0px -80px 0px' });

    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .stagger-parent').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => setSubmitted(false), 2200);
  };

  const scrollToForm = () => {
    if (formRef.current) formRef.current.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const css = `
    :root{
      --accent:${accent};
      --primary:${primary};
      --bodyBg:${bodyBg};
      --text:#ffffff;
      --muted:#c9c9c9;
      --card:rgba(255,255,255,0.06);
      --border:rgba(255,255,255,0.1);
      --light:#f5f5f5;
      --dark2:#111111;
      --dark3:#151515;
    }
    *{box-sizing:border-box}
    body{margin:0;background:var(--bodyBg);font-family:'Inter',sans-serif;color:var(--text)}
    a{text-decoration:none;color:inherit}
    img{max-width:100%;display:block}
    .lp{background:var(--bodyBg);overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:88px 0;position:relative}
    .dark{color:#fff}
    .light{background:var(--light);color:#161616}
    .light p,.light li,.light .muted{color:#4d4d4d}
    .muted{color:var(--muted)}
    h1,h2,h3,h4{font-family:'Plus Jakarta Sans',sans-serif;margin:0 0 16px}
    h1{font-size:clamp(48px,6vw,68px);line-height:1.04;letter-spacing:-.03em}
    h2{font-size:clamp(32px,4vw,46px);line-height:1.12;letter-spacing:-.02em}
    h3{font-size:22px}
    p{margin:0 0 14px;line-height:1.7}
    .tag{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border:1px solid rgba(255,107,0,.3);background:rgba(255,107,0,.12);border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
    .btn,.animated-cta{display:inline-flex;align-items:center;justify-content:center;gap:10px;padding:14px 24px;border-radius:12px;border:none;font-weight:700;cursor:pointer}
    .animated-cta,.btn-magnetic{position:relative;overflow:hidden;background:var(--accent);color:#fff;transition:transform .22s ease,box-shadow .22s ease,background .22s ease}
    .animated-cta:hover,.btn-magnetic:hover{transform:translateY(-2px);box-shadow:0 14px 32px rgba(0,0,0,.18)}
    .animated-cta::before,.animated-cta::after{display:none!important;content:none!important}
    .ghost-btn{border:1px solid var(--border);color:#fff;background:transparent}
    .nav{position:sticky;top:0;z-index:50;background:rgba(17,17,17,.78);backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:16px 0}
    .brand{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:20px;color:var(--accent);line-height:1.2}
    .nav-right{display:flex;align-items:center;gap:18px}
    .hero{background:var(--primary);position:relative}
    .mesh-bg{background-color:#0d0d1a;background-image:radial-gradient(ellipse 80% 50% at 20% 40%, rgba(120,40,200,.28), transparent 50%),radial-gradient(ellipse 60% 60% at 80% 20%, rgba(0,200,150,.14), transparent 50%),radial-gradient(ellipse 40% 40% at 50% 80%, rgba(255,120,50,.16), transparent 50%)}
    .hero-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:36px;align-items:center;min-height:calc(100vh - 78px);padding:44px 0}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 28px}
    .chip{display:flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;border:1px solid rgba(255,107,0,.3);background:rgba(255,107,0,.08);font-size:13px;color:#ddd}
    .cta-row{display:flex;flex-wrap:wrap;gap:14px}
    .hero-visual{position:relative;min-height:520px;display:flex;align-items:center;justify-content:center}
    .hero-media-card,.form-card,.glass{background:rgba(255,255,255,.06);border:1px solid var(--border);box-shadow:0 20px 60px rgba(0,0,0,.28);backdrop-filter:blur(14px);border-radius:24px}
    .hero-stack{position:relative;width:100%;max-width:560px}
    .hero-preview{padding:14px}
    .hero-preview img{width:100%;max-height:480px;object-fit:contain;border-radius:16px}
    .float-card{position:absolute;background:rgba(17,17,17,.88);border:1px solid rgba(255,255,255,.12);border-radius:16px;padding:14px 16px;max-width:220px}
    .float-a{top:24px;left:-8px}
    .float-b{right:-8px;bottom:36px}
    .float-c{top:110px;right:-22px}
    .gradient-text{background:linear-gradient(135deg,var(--accent),var(--primary));-webkit-background-clip:text;-webkit-text-fill-color:transparent}
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
    .sticky-cta{position:fixed;left:50%;bottom:24px;transform:translateX(-50%);z-index:999;animation:stickyEnter .45s cubic-bezier(.16,1,.3,1) both}
    .metrics-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .metric{padding:22px;border-radius:18px;background:rgba(255,255,255,.04);border:1px solid var(--border);text-align:center}
    .metric strong{display:block;font-size:18px;font-family:'Plus Jakarta Sans',sans-serif}
    .marquee-wrapper{overflow:hidden;background:#151515;padding:20px 0;border-top:1px solid rgba(255,255,255,.1);border-bottom:1px solid rgba(255,255,255,.1)}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    .marquee-item{font-size:28px;font-weight:800;margin-right:48px;white-space:nowrap;color:rgba(255,255,255,.8);font-family:'Plus Jakarta Sans',sans-serif}
    .product-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
    .spotlight{padding:18px}
    .browser-frame{background:#0b0b0b;border:1px solid rgba(255,255,255,.12);border-radius:22px;overflow:hidden;box-shadow:0 20px 50px rgba(0,0,0,.2)}
    .browser-top{display:flex;gap:8px;padding:14px 16px;background:#171717;border-bottom:1px solid rgba(255,255,255,.08)}
    .dot{width:10px;height:10px;border-radius:50%}
    .dot:nth-child(1){background:#ff5f57}.dot:nth-child(2){background:#febc2e}.dot:nth-child(3){background:#28c840}
    .browser-frame img{width:100%;height:100%;object-fit:cover}
    .spot-main{margin-bottom:16px}
    .mini-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
    .mini-grid .glass{padding:18px}
    .feature-list{display:grid;gap:14px;margin-top:22px}
    .feature-item{display:flex;gap:14px;padding:16px;border-radius:16px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)}
    .light .feature-item,.light .gallery-card,.light .price-card{background:#fff;border-color:rgba(0,0,0,.08)}
    .icon{min-width:40px;width:40px;height:40px;border-radius:12px;background:rgba(255,107,0,.12);display:grid;place-items:center;color:var(--accent)}
    .desc-border{border-left:2px solid rgba(255,255,255,.15);padding-left:20px;margin:16px 0 24px}
    .light .desc-border{border-left-color:rgba(0,0,0,.12)}
    .gallery-wrap{display:grid;grid-template-columns:1fr 1fr;gap:22px}
    .gallery-card{padding:14px;border-radius:22px;background:rgba(255,255,255,.06);border:1px solid var(--border)}
    .auto-scroll-media{max-height:520px;overflow:hidden;position:relative}
    .auto-scroll-track{display:flex;flex-direction:column;gap:16px;animation:autoScrollY 18s linear infinite}
    .auto-scroll-media:hover .auto-scroll-track{animation-play-state:paused}
    .auto-scroll-track img,.auto-scroll-track video{width:100%;border-radius:18px;object-fit:cover}
    .auto-scroll-track video{height:220px}
    .auto-scroll-track img{height:220px}
    .pricing-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
    .price-card{padding:28px;border-radius:24px;border:1px solid rgba(0,0,0,.08);background:#fff;position:relative}
    .highlighted{outline:2px solid rgba(255,107,0,.5);box-shadow:0 18px 50px rgba(255,107,0,.12)}
    .badge-green{display:inline-flex;padding:6px 10px;border-radius:999px;background:#e8f8ee;color:#0f8a45;font-size:12px;font-weight:700;margin-bottom:14px}
    .price{font-size:32px;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif}
    .price-muted{color:#999;text-decoration:line-through;margin-left:8px}
    .list{display:grid;gap:10px;padding:0;margin:18px 0 22px;list-style:none}
    .list li{display:flex;gap:10px;align-items:flex-start}
    .testimonials{background:#111}
    .testimonial-shell{display:grid;grid-template-columns:120px 1fr;gap:24px;align-items:center;padding:34px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid var(--border)}
    .testimonial-avatar{width:96px;height:96px;border-radius:50%;object-fit:cover;border:3px solid rgba(255,107,0,.35)}
    .quote-mark{font-size:56px;color:var(--accent);line-height:1}
    .stars{color:#f5b301;letter-spacing:2px;margin-bottom:12px}
    .testimonial-nav{display:flex;justify-content:space-between;align-items:center;margin-top:22px}
    .arrow-btn{width:46px;height:46px;border-radius:50%;border:1px solid var(--border);background:transparent;color:#fff;cursor:pointer}
    .dots{display:flex;gap:8px;justify-content:center}
    .slider-dot{width:10px;height:10px;border-radius:999px;background:rgba(255,255,255,.25);border:none;cursor:pointer;transition:.25s ease}
    .slider-dot.active{transform:scale(1.25);background:var(--accent)}
    .form-card{padding:26px}
    .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .field{display:grid;gap:8px}
    .field.full{grid-column:1/-1}
    input{width:100%;padding:14px 16px;border-radius:12px;background:rgba(255,255,255,.04);border:1px solid var(--border);color:#fff}
    .input-focus-glow:focus{outline:none;border-color:var(--accent);box-shadow:0 0 0 4px rgba(255,107,0,.12)}
    .submit-full{width:100%}
    .success-note{margin-top:14px;color:#fff;background:rgba(34,197,94,.16);border:1px solid rgba(34,197,94,.32);padding:12px 14px;border-radius:12px}
    .footer{background:#0f0f0f;border-top:1px solid rgba(255,255,255,.08);padding:34px 0}
    .footer-inner{display:flex;flex-wrap:wrap;justify-content:space-between;gap:18px;align-items:center}
    .footer-links,.socials{display:flex;gap:16px;flex-wrap:wrap;align-items:center}
    .social{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;border:1px solid rgba(255,255,255,.12);color:#fff}
    @keyframes fadeInUp{from{opacity:0;transform:translateY(32px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeInLeft{from{opacity:0;transform:translateX(-40px)}to{opacity:1;transform:translateX(0)}}
    @keyframes fadeInRight{from{opacity:0;transform:translateX(40px)}to{opacity:1;transform:translateX(0)}}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    @keyframes autoScrollY{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
    @keyframes stickyEnter{from{opacity:0;transform:translate(-50%,20px)}to{opacity:1;transform:translate(-50%,0)}}
    @media (max-width: 980px){
      .hero-grid,.product-grid,.gallery-wrap,.pricing-grid,.testimonial-shell{grid-template-columns:1fr}
      .nav-inner{grid-template-columns:1fr auto auto}
      .hero-visual{min-height:auto}
      .metrics-strip{grid-template-columns:1fr}
      .form-grid{grid-template-columns:1fr}
      .float-a,.float-b,.float-c{position:relative;inset:auto;margin-top:12px}
    }
    @media (max-width: 640px){
      .nav-inner{grid-template-columns:1fr;justify-items:start}
      .nav-right{width:100%;justify-content:space-between}
      .sticky-cta{left:16px;right:16px;transform:none}
      .sticky-cta .animated-cta{width:100%}
      .section{padding:72px 0}
    }
  `;

  const Icon = ({ children }) => (
    <div className="icon">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        {children}
      </svg>
    </div>
  );

  return (
    <div className="lp">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">Seedream 4.5 and Seedance 1.5 Pro</div>
          <div className="nav-right">
            <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" height="28px" alt="Techjockey" />
          </div>
          <button className="animated-cta" onClick={scrollToForm}>{primaryCTA}</button>
        </div>
      </nav>

      <section className="hero mesh-bg dark">
        <div className="container hero-grid">
          <div className="stagger-parent hero-fade-left">
            <div className="tag">Generative AI / Image Generation / Video Generation</div>
            <h1>
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models
            </h1>
            <p className="muted">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>
            <p className="muted">
              From text prompts, images, or scripts, generate professional visuals and videos with powerful multimodal AI systems.
            </p>

            <div className="chip-row">
              {['AI Image Generation', 'AI Video Generation', 'High-Resolution Output', 'Audio-Visual Synchronization'].map((chip, i) => (
                <div className="chip" key={i}>
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={accent} strokeWidth="2"><path d="M20 6 9 17l-5-5"/></svg>
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="cta-row">
              <button className="animated-cta" onClick={scrollToForm}>{primaryCTA}</button>
              <button className="btn ghost-btn" onClick={scrollToForm}>{primaryCTA}</button>
            </div>
          </div>

          <div className="hero-visual hero-fade-right">
            <div className="hero-stack">
              <div className="hero-media-card hero-preview">
                <img src="/output/generated-assets/ds_1777542953967_9b4fb523/24-de3fcc8d6b.webp" alt="Seedream 4.5 and Seedance 1.5 Pro visual" />
              </div>
              <div className="float-card float-a">
                <strong>Seedream 4.5</strong>
                <p className="muted">AI Image Generation</p>
              </div>
              <div className="float-card float-b">
                <strong>Seedance 1.5 Pro</strong>
                <p className="muted">AI Video Generation</p>
              </div>
              <div className="float-card float-c">
                <strong>{primaryCTA}</strong>
                <p className="muted">For creative directors, video producers, art directors, marketing managers, and creative leads</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark" style={{ background: '#111111', paddingTop: 32, paddingBottom: 32 }}>
        <div className="container reveal">
          <div className="metrics-strip">
            <div className="metric"><strong>Seedream 4.5</strong><span className="muted">AI Image Generation</span></div>
            <div className="metric"><strong>Seedance 1.5 Pro</strong><span className="muted">AI Video Generation</span></div>
            <div className="metric"><strong>{primaryCTA}</strong><span className="muted">Techjockey free demo journey</span></div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span className="marquee-item" key={i}>Seedream 4.5 and Seedance 1.5 Pro <span className="gradient-text">★</span> Generative AI / Image Generation / Video Generation</span>
          ))}
        </div>
      </div>

      <section className="section light">
        <div className="container product-grid">
          <div className="reveal">
            <div className="spotlight">
              <div className="browser-frame spot-main">
                <div className="browser-top"><span className="dot" /><span className="dot" /><span className="dot" /></div>
                <img src="/output/generated-assets/ds_1777542953967_9b4fb523/01-3965757185.jpeg" alt="AI Image Generation with Seedream 4.5" />
              </div>
              <div className="mini-grid">
                <div className="glass">
                  <strong>High-Resolution Output</strong>
                  <p>Generate native images up to 1K–4K resolution with strong visual fidelity.</p>
                </div>
                <div className="glass">
                  <strong>Superior Typographic Rendering</strong>
                  <p>Optimized for posters, ads, and text-heavy visual designs.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="tag">AI Image Generation</div>
            <h2>AI Image Generation with <span className="gradient-text">Seedream 4.5</span></h2>
            <div className="desc-border">
              <p>Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.</p>
            </div>
            <div className="feature-list">
              <div className="feature-item">
                <Icon><path d="M12 3v18M3 12h18"/></Icon>
                <div><strong>Advanced Text–Image Alignment</strong><p>Accurately translates prompts into visuals with improved semantic understanding.</p></div>
              </div>
              <div className="feature-item">
                <Icon><rect x="4" y="4" width="16" height="16" rx="2"/><path d="M9 9h6v6H9z"/></Icon>
                <div><strong>High-Resolution Output</strong><p>Generate native images up to 1K–4K resolution with strong visual fidelity.</p></div>
              </div>
              <div className="feature-item">
                <Icon><path d="M4 7h16M4 12h12M4 17h10"/></Icon>
                <div><strong>Superior Typographic Rendering</strong><p>Optimized for posters, ads, and text-heavy visual designs.</p></div>
              </div>
              <div className="feature-item">
                <Icon><path d="M7 7h4v4H7zM13 13h4v4h-4z"/><path d="M11 9h2M9 11v2"/></Icon>
                <div><strong>Multi-Image Composition with Identity Preservation</strong><p>Combines multiple inputs while accurately maintaining subject consistency.</p></div>
              </div>
              <div className="feature-item">
                <Icon><path d="M5 19 19 5"/><path d="M9 5h10v10"/></Icon>
                <div><strong>Strong Structural Fidelity</strong><p>Maintains composition, layout, and scene structure with high precision.</p></div>
              </div>
            </div>
            <div style={{ marginTop: 24 }}>
              <button className="animated-cta" onClick={scrollToForm}>{primaryCTA}</button>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {Array.from({ length: 8 }).map((_, i) => (
            <span className="marquee-item" key={i}>AI Video Generation <span className="gradient-text">★</span> Seedance 1.5 Pro by Bytedance</span>
          ))}
        </div>
      </div>

      <section className="section dark" style={{ background: '#151515' }}>
        <div className="container product-grid">
          <div className="reveal">
            <div className="tag">AI Video Generation</div>
            <h2>AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro</span> by Bytedance</h2>
            <div className="desc-border">
              <p>Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.</p>
            </div>
            <div className="feature-list">
              <div className="feature-item">
                <Icon><path d="m10 8 6 4-6 4V8Z"/><rect x="3" y="5" width="18" height="14" rx="2"/></Icon>
                <div><strong>Text-to-Video Generation</strong><p>Create videos directly from text prompts.</p></div>
              </div>
              <div className="feature-item">
                <Icon><path d="M4 12a8 8 0 0 1 8-8"/><path d="M20 12a8 8 0 0 1-8 8"/><path d="M8 12h8"/></Icon>
                <div><strong>Audio-Visual Synchronization</strong><p>Generate video and audio simultaneously with strong multimodal alignment.</p></div>
              </div>
              <div className="feature-item">
                <Icon><path d="M4 12c3-6 13-6 16 0"/><path d="M8 16c2-3 6-3 8 0"/></Icon>
                <div><strong>Multilingual Lip-Sync</strong><p>Supports multilingual and dialect-level lip synchronization.</p></div>
              </div>
              <div className="feature-item">
                <Icon><path d="M4 19c6-1 10-5 16-14"/><circle cx="7" cy="17" r="2"/></Icon>
                <div><strong>Cinematic Camera Control</strong><p>Generate videos with dynamic camera movement and cinematic storytelling.</p></div>
              </div>
              <div className="feature-item">
                <Icon><path d="M13 5l7 7-7 7"/><path d="M4 12h16"/></Icon>
                <div><strong>10× Faster Inference</strong><p>Optimized inference pipeline significantly improves generation speed.</p></div>
              </div>
            </div>
            <div style={{ marginTop: 24 }}>
              <button className="animated-cta" onClick={scrollToForm}>{primaryCTA}</button>
            </div>
          </div>

          <div className="reveal">
            <div className="spotlight">
              <div className="browser-frame spot-main">
                <div className="browser-top"><span className="dot" /><span className="dot" /><span className="dot" /></div>
                <img src="/output/generated-assets/ds_1777542953967_9b4fb523/10-7f64cfae87.jpeg" alt="AI Video Generation with Seedance 1.5 Pro by Bytedance" />
              </div>
              <div className="mini-grid">
                <div className="glass">
                  <strong>Audio-Visual Synchronization</strong>
                  <p>Generate video and audio simultaneously with strong multimodal alignment.</p>
                </div>
                <div className="glass">
                  <strong>10× Faster Inference</strong>
                  <p>Optimized inference pipeline significantly improves generation speed.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark" style={{ background: '#1a1a1a' }}>
        <div className="container">
          <div className="reveal" style={{ maxWidth: 760, marginBottom: 30 }}>
            <div className="tag">Gallery</div>
            <h2>Seedream 4.5 and Seedance 1.5 Pro <span className="gradient-text">Gallery</span></h2>
            <p className="muted">Explore images and videos in one continuous showcase for high-quality visual content creation.</p>
          </div>
          <div className="gallery-wrap reveal">
            <div className="gallery-card auto-scroll-media">
              <div className="auto-scroll-track">
                {mediaGallery.concat(mediaGallery).map((item, i) => (
                  item.type === 'image' ? (
                    <img key={i} src={item.src} alt={`Gallery ${i}`} />
                  ) : (
                    <video key={i} autoPlay muted loop playsInline preload="auto">
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )
                ))}
              </div>
            </div>
            <div className="gallery-card auto-scroll-media">
              <div className="auto-scroll-track">
                {[
                  { type: 'video', src: 'https://assets-static.invideo.io/files/Landing_Page_V001_30_10_2024_1b17e50c44.mp4' },
                  { type: 'image', src: '/output/generated-assets/ds_1777542953967_9b4fb523/17-1e5ff9f843.png' },
                  { type: 'video', src: 'https://assets-static.invideo.io/files/Main_Video_Mobile_86fb6cc44f.mp4' },
                  { type: 'image', src: '/output/generated-assets/ds_1777542953967_9b4fb523/29-447ebcaa7d.webp' },
                  { type: 'image', src: '/output/generated-assets/ds_1777542953967_9b4fb523/15-e807037a13.png' }
                ].concat([
                  { type: 'video', src: 'https://assets-static.invideo.io/files/Landing_Page_V001_30_10_2024_1b17e50c44.mp4' },
                  { type: 'image', src: '/output/generated-assets/ds_1777542953967_9b4fb523/17-1e5ff9f843.png' },
                  { type: 'video', src: 'https://assets-static.invideo.io/files/Main_Video_Mobile_86fb6cc44f.mp4' },
                  { type: 'image', src: '/output/generated-assets/ds_1777542953967_9b4fb523/29-447ebcaa7d.webp' },
                  { type: 'image', src: '/output/generated-assets/ds_1777542953967_9b4fb523/15-e807037a13.png' }
                ]).map((item, i) => (
                  item.type === 'image' ? (
                    <img key={i} src={item.src} alt={`Gallery media ${i}`} />
                  ) : (
                    <video key={i} autoPlay muted loop playsInline preload="auto">
                      <source src={item.src} type="video/mp4" />
                    </video>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 760, marginBottom: 28 }}>
            <div className="tag">Pricing</div>
            <h2><span className="gradient-text">Pricing</span></h2>
          </div>
          <div className="pricing-grid reveal">
            <div className="price-card">
              <div className="badge-green">Get Quote</div>
              <h3>Seedream 4.5 (AI Image Generation)</h3>
              <div className="price">Get Quote <span className="price-muted"></span></div>
              <ul className="list">
                <li><span style={{ color: accent }}>✓</span><span>High-resolution image generation (up to 4K quality)</span></li>
                <li><span style={{ color: accent }}>✓</span><span>Text-to-image & multimodal image editing</span></li>
                <li><span style={{ color: accent }}>✓</span><span>Multi-image composition for complex visuals</span></li>
                <li><span style={{ color: accent }}>✓</span><span>Enhanced typographic rendering for posters, ads & text-heavy designs</span></li>
              </ul>
              <button className="animated-cta submit-full" onClick={scrollToForm}>{primaryCTA}</button>
            </div>

            <div className="price-card highlighted">
              <div className="badge-green">Starting at $1,000/month/</div>
              <h3>Seedance 1.5 Pro (AI Video Generation)</h3>
              <div className="price">Starting at $1,000/month/ <span className="price-muted"></span></div>
              <ul className="list">
                <li><span style={{ color: accent }}>✓</span><span>Text-to-video generation with cinematic output</span></li>
                <li><span style={{ color: accent }}>✓</span><span>Native audio + video generation (synchronized)</span></li>
                <li><span style={{ color: accent }}>✓</span><span>Multilingual lip-sync capabilities</span></li>
                <li><span style={{ color: accent }}>✓</span><span>Fast inference for quicker video production</span></li>
              </ul>
              <button className="animated-cta submit-full" onClick={scrollToForm}>{primaryCTA}</button>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials dark">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 780, marginBottom: 28 }}>
            <div className="tag">Testimonials</div>
            <h2>What professionals say about <span className="gradient-text">Seedream and Seedance</span></h2>
          </div>

          <div className="testimonial-shell reveal">
            <div>
              <img className="testimonial-avatar" src={testimonials[activeSlide].avatar} alt={testimonials[activeSlide].author} />
            </div>
            <div>
              <div className="quote-mark">❝</div>
              <div className="stars">★★★★★</div>
              <p style={{ fontSize: '20px', lineHeight: 1.8 }}>{testimonials[activeSlide].quote}</p>
              <div style={{ marginTop: 18 }}>
                <strong>{testimonials[activeSlide].author}</strong>
                <div className="muted">{testimonials[activeSlide].role}</div>
              </div>
            </div>
          </div>

          <div className="testimonial-nav">
            <button className="arrow-btn" onClick={() => setActiveSlide((activeSlide - 1 + testimonials.length) % testimonials.length)}>‹</button>
            <div className="dots">
              {testimonials.map((_, i) => (
                <button key={i} className={`slider-dot ${i === activeSlide ? 'active' : ''}`} onClick={() => setActiveSlide(i)} />
              ))}
            </div>
            <button className="arrow-btn" onClick={() => setActiveSlide((activeSlide + 1) % testimonials.length)}>›</button>
          </div>
        </div>
      </section>

      <section className="section dark" style={{ background: '#1a1a1a' }} ref={formRef}>
        <div className="container">
          <div className="product-grid">
            <div className="reveal">
              <div className="tag">Generate with AI</div>
              <h2>Create High-Quality AI Images & Videos with <span className="gradient-text">ByteDance Generative Models</span></h2>
              <p className="muted">Professionals and businesses creating high-quality visual content, including creative directors, video producers, art directors, marketing managers, and creative leads.</p>
              <p className="muted">Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
            </div>

            <div className="form-card reveal">
              <h3 style={{ marginBottom: 18 }}>Generate with AI</h3>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" className="input-focus-glow" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" className="input-focus-glow" name="email" type="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" className="input-focus-glow" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input id="company" className="input-focus-glow" name="company" value={formData.company} onChange={handleChange} required />
                  </div>
                  <div className="field full">
                    <button type="submit" className="animated-cta submit-full">{primaryCTA}</button>
                  </div>
                </div>
              </form>
              {submitted && <div className="success-note success-check">Thank you. Your request has been submitted.</div>}
            </div>
          </div>
        </div>
      </section>

      <div className="sticky-cta">
        <button className="animated-cta" onClick={scrollToForm}>{primaryCTA}</button>
      </div>

      <footer className="footer">
        <div className="container footer-inner">
          <div style={{ display: 'grid', gap: 10 }}>
            <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" height="28px" alt="Techjockey" style={{ width: 'auto' }} />
            <div>support@techjockey.com</div>
            <div>© 2024 Techjockey Infotech Pvt. Ltd.</div>
          </div>

          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms</a>
          </div>

          <div className="socials">
            <a className="social" href="#facebook" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V8c0-1.2.4-2 2-2h2V2.2C16.6 2.1 15.5 2 14.3 2 11.7 2 10 3.6 10 6.6V10H7v4h3v8z"/></svg>
            </a>
            <a className="social" href="#instagram" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
            </a>
            <a className="social" href="#twitter" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1-1.5-1.6-4.1-1.7-5.7-.2-1 .9-1.5 2.3-1.2 3.6-3.3-.2-6.2-1.8-8.2-4.3-1.1 1.9-.5 4.3 1.2 5.5-.6 0-1.2-.2-1.7-.5 0 2 1.4 3.8 3.4 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 3.9 3-1.5 1.2-3.3 1.8-5.2 1.8H2c1.9 1.2 4.1 1.9 6.4 1.9 7.7 0 12-6.6 11.7-12.5.8-.6 1.5-1.3 1.9-2.1z"/></svg>
            </a>
            <a className="social" href="#linkedin" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 7 1.97 1.97 0 0 0 5.25 3ZM20.44 12.4c0-3.3-1.76-4.83-4.1-4.83-1.9 0-2.75 1.05-3.22 1.78V8.5H9.75c.05.56 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.03 1.88 2.55V20H20.4v-7.6Z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;