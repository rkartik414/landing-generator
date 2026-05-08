import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#1a1a1a';
  const bodyBg = '#1a1a1a';

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

  const productSections = [
    {
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      image: '/output/generated-assets/ds_1777876932783_1b526995/15-41ea7f7485.png',
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
      headline: 'AI Video Generation with Seedance 1.5 Pro by Bytedance',
      description:
        'Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.',
      image: '/output/generated-assets/ds_1777876932783_1b526995/16-fa9caa1249.png',
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

  const demoVideos = [
    'https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4',
    'https://cdn.web.imagine.art/imagine-one/cdge/sora2.mp4',
    'https://cdn.web.imagine.art/imagine-one/cdge/sora33.mp4',
    'https://cdn.web.imagine.art/remote-config/assets/video_effects/sd/podcast.mp4',
    'https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4',
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [openFeature, setOpenFeature] = useState({ 0: 0, 1: 0 });
  const formRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
  }, [accent, primary]);

  useEffect(() => {
    const els = document.querySelectorAll('.hero-headline, .hero-sub, .hero-chips, .hero-cta, .hero-visual');
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.9s ease';
      el.style.transitionDelay = i * 0.2 + 's';
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.opacity = '1';
        }, 50);
      });
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document
      .querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-parent')
      .forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll('.btn-magnetic');
    const handlers = [];
    btns.forEach(btn => {
      const move = e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + x * 0.25 + 'px, ' + y * 0.25 + 'px)';
      };
      const leave = () => {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      };
      btn.addEventListener('mousemove', move);
      btn.addEventListener('mouseleave', leave);
      handlers.push({ btn, move, leave });
    });
    return () => {
      handlers.forEach(({ btn, move, leave }) => {
        btn.removeEventListener('mousemove', move);
        btn.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const scrollToForm = () => formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'center' });

  const icon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12l5 5L20 7" stroke={accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const css = `
    :root{--accent:${accent};--primary:${primary}}
    *{box-sizing:border-box} html{scroll-behavior:smooth}
    body{margin:0;background:${bodyBg};font-family:Inter,sans-serif;color:#fff}
    a{text-decoration:none;color:inherit} button{font-family:inherit}
    .page-wrapper{animation:pageReveal .6s cubic-bezier(.16,1,.3,1) both;overflow:hidden;background:${bodyBg}}
    .container{width:min(1200px,92%);margin:0 auto;position:relative;z-index:2}
    .nav{position:sticky;top:0;z-index:50;background:rgba(26,26,26,.76);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:16px 0}
    .brand{font-weight:800;font-size:20px;color:#fff}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, #ffffff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .animated-cta{padding:12px 20px;border:none;border-radius:10px;background:var(--accent);color:#fff;font-weight:800;cursor:pointer;transition:.25s transform,.25s box-shadow,.25s background}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(255,107,0,.28);background:#ff7f26}
    .ghost-btn{padding:12px 20px;border-radius:10px;border:1px solid rgba(255,255,255,.2);background:transparent;color:#fff;font-weight:700;transition:.25s}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(0,0,0,.2);border-color:rgba(255,255,255,.4)}
    .hero{position:relative;min-height:100vh;background:#1a1a1a}
    .hero-bg,.hero-overlay{position:absolute;inset:0}
    .hero-bg video{width:100%;height:100%;object-fit:cover;display:block}
    .hero-overlay{background:linear-gradient(180deg,rgba(0,0,0,.45),rgba(0,0,0,.66)),radial-gradient(circle at 20% 20%,rgba(255,107,0,.18),transparent 35%),radial-gradient(circle at 80% 70%,rgba(255,107,0,.12),transparent 30%)}
    .precision-lines,.precision-lines:before,.precision-lines:after{position:absolute;inset:auto;content:"";pointer-events:none}
    .precision-lines:before{top:12%;left:4%;width:220px;height:220px;border:1px solid rgba(255,255,255,.08);border-radius:24px}
    .precision-lines:after{right:5%;bottom:10%;width:260px;height:260px;border:1px solid rgba(255,255,255,.07);border-radius:50%}
    .hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:42px;align-items:center;padding:88px 0 64px;position:relative;z-index:2;min-height:calc(100vh - 76px)}
    h1,h2,h3{font-family:"Plus Jakarta Sans",sans-serif;line-height:1.08;margin:0 0 16px}
    h1{font-size:clamp(48px,6vw,72px);max-width:760px}
    h2{font-size:clamp(32px,4vw,46px)}
    p{margin:0 0 14px;line-height:1.75;color:#d1d5db}
    .hero-copy{max-width:760px}
    .hero-chips{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(255,107,0,.35);background:rgba(255,107,0,.09);color:#f3f4f6;font-size:13px}
    .hero-cta{display:flex;gap:14px;flex-wrap:wrap;margin-top:10px}
    .hero-visual{display:block}
    .form-card{background:rgba(17,17,17,.88);border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(12px);border-radius:22px;padding:24px;box-shadow:0 30px 70px rgba(0,0,0,.35)}
    .form-card h3{font-size:28px;margin-bottom:8px}
    .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .field{display:flex;flex-direction:column;gap:8px}
    .field.full{grid-column:1/-1}
    label{font-size:13px;color:#e5e7eb}
    input{width:100%;padding:14px 15px;border-radius:12px;background:#0f0f0f;border:1px solid rgba(255,255,255,.12);color:#fff;outline:none}
    input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(255,107,0,.15)}
    .full-btn{width:100%;margin-top:16px}
    section{position:relative;transition:background-color .4s ease}
    .metrics{background:#f5f5f5;color:#111;padding:22px 0;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
    .metrics-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
    .metric{padding:16px 18px;border-radius:16px;background:#fff;border:1px solid #ececec;font-weight:700;text-align:center}
    .marquee-wrapper{overflow:hidden;background:#f5f5f5;padding:18px 0;border-top:1px solid #ddd;border-bottom:1px solid #ddd}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 28s linear infinite}
    .marquee-item{font-size:28px;font-weight:800;margin-right:48px;white-space:nowrap;color:#111}
    .product-dark{background:#111;padding:88px 0}
    .split{display:grid;grid-template-columns:1fr 1fr;gap:54px;align-items:center}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:22px;border:1px solid rgba(255,255,255,.08);background:#f8f8f8;box-shadow:0 18px 50px rgba(0,0,0,.24)}
    .browser-bar{display:flex;gap:8px;padding:14px;background:#ececec;border-bottom:1px solid #ddd}
    .dot{width:10px;height:10px;border-radius:50%;background:#d1d5db}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .section-tag{display:inline-block;padding:8px 12px;border-radius:999px;background:rgba(255,107,0,.12);border:1px solid rgba(255,107,0,.28);color:#ffb37f;font-size:12px;font-weight:700;margin-bottom:18px}
    .desc-border{border-left:2px solid rgba(255,255,255,.14);padding-left:18px;margin:18px 0 24px}
    .accordion{display:grid;gap:12px}
    .acc-item{border:1px solid rgba(255,255,255,.08);border-radius:16px;background:rgba(255,255,255,.03);overflow:hidden}
    .acc-head{width:100%;display:flex;justify-content:space-between;gap:12px;align-items:center;padding:16px 18px;background:none;border:none;color:#fff;text-align:left;font-weight:700;cursor:pointer}
    .acc-body{padding:0 18px 18px;color:#d1d5db}
    .gallery{background:#f5f5f5;color:#111;padding:84px 0}
    .gallery h2,.gallery p{color:#111}
    .video-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:28px}
    .video-card{background:#fff;border-radius:18px;overflow:hidden;border:1px solid #e7e7e7}
    .video-card video{width:100%;display:block;aspect-ratio:16/10;object-fit:cover}
    .video-card .cap{padding:12px 14px;font-weight:700;color:#111}
    .pricing{background:#111;padding:84px 0}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px;margin-top:28px}
    .price-card{background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.1);border-radius:22px;padding:24px}
    .price-card.featured{border-color:rgba(255,107,0,.45);box-shadow:0 20px 50px rgba(255,107,0,.12)}
    .price{font-size:30px;font-weight:800;font-family:"Plus Jakarta Sans",sans-serif;margin:14px 0 18px}
    .badge{display:inline-block;background:#123c1f;color:#8df0aa;border:1px solid #215c32;padding:6px 10px;border-radius:999px;font-size:12px;font-weight:700;margin-bottom:12px}
    .list{display:grid;gap:12px;margin:18px 0 24px}
    .li{display:flex;gap:10px;align-items:flex-start;color:#d1d5db}
    .testimonials{background:#f5f5f5;color:#111;padding:84px 0}
    .testimonials h2,.testimonials p{color:#111}
    .slider-wrap{overflow:hidden;position:relative;margin-top:28px}
    .slider{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .slide{min-width:100%;padding:4px}
    .t-card{background:#fff;border:1px solid #e7e7e7;border-radius:24px;padding:34px;min-height:300px;display:flex;flex-direction:column;justify-content:space-between}
    .quote-mark{font-size:46px;color:var(--accent);line-height:1}
    .stars{color:#f5b301;letter-spacing:2px;font-size:18px}
    .author{display:flex;gap:14px;align-items:center;margin-top:18px}
    .avatar{width:56px;height:56px;border-radius:50%;object-fit:cover}
    .role{color:#6b7280}
    .controls{display:flex;justify-content:space-between;align-items:center;margin-top:18px}
    .arrow{width:44px;height:44px;border-radius:50%;border:none;background:#111;color:#fff;cursor:pointer}
    .dots{display:flex;justify-content:center;gap:8px}
    .dot-btn{width:8px;height:8px;border-radius:999px;border:none;background:rgba(17,17,17,.2);cursor:pointer;transition:.3s}
    .dot-btn.active{width:24px;background:var(--accent)}
    .footer{background:#111;padding:36px 0 28px;border-top:1px solid rgba(255,255,255,.08)}
    .footer-grid{display:grid;grid-template-columns:1.2fr 1fr auto;gap:24px;align-items:start}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .social{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08)}
    .muted{color:#9ca3af;font-size:14px}
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal-left  { opacity: 0; transform: translateX(-50px); transition: opacity 0.7s ease, transform 0.7s ease; }
    .reveal-right { opacity: 0; transform: translateX(50px);  transition: opacity 0.7s ease, transform 0.7s ease; }
    .reveal-left.visible, .reveal-right.visible { opacity: 1; transform: translateX(0); }
    .reveal-scale { opacity: 0; transform: scale(0.92); transition: opacity 0.6s ease, transform 0.6s ease; }
    .reveal-scale.visible { opacity: 1; transform: scale(1); }
    .reveal-delay-1 { transition-delay: 0.1s; }
    .reveal-delay-2 { transition-delay: 0.2s; }
    .reveal-delay-3 { transition-delay: 0.3s; }
    .reveal-delay-4 { transition-delay: 0.4s; }
    .stagger-parent .stagger-child {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .stagger-parent.visible .stagger-child:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0s; }
    .stagger-parent.visible .stagger-child:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
    .stagger-parent.visible .stagger-child:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
    .stagger-parent.visible .stagger-child:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
    .stagger-parent.visible .stagger-child:nth-child(5) { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
    .stagger-parent.visible .stagger-child:nth-child(6) { opacity: 1; transform: translateY(0); transition-delay: 0.5s; }
    .hover-card { transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease; cursor: pointer; }
    .hover-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
    @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes marqueeScrollReverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
    .marquee-track-reverse { animation: marqueeScrollReverse 28s linear infinite; }
    .marquee-track-fast { animation-duration: 16s; }
    .marquee-track-slow { animation-duration: 40s; }
    @keyframes pageReveal { 0% { opacity: 0; transform: translateY(12px); } 100% { opacity: 1; transform: translateY(0); } }
    @media (max-width: 991px){
      .hero-grid,.split,.pricing-grid,.footer-grid,.metrics-grid{grid-template-columns:1fr}
      .video-grid{grid-template-columns:1fr 1fr}
      .nav-inner{grid-template-columns:1fr auto;gap:12px}
      .nav-cta{grid-column:1/-1}
    }
    @media (max-width: 767px){
      .hero-grid{padding:72px 0 48px}
      .form-grid,.video-grid{grid-template-columns:1fr}
      .brand{font-size:17px}
      .metric{font-size:14px}
      .marquee-item{font-size:20px}
      .browser-frame img{height:280px}
      .t-card{padding:24px;min-height:auto}
    }
  `;

  return (
    <div className="page-wrapper">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span>Seedream 4.5 and </span>
            <span className="gradient-text">Seedance 1.5 Pro</span>
          </div>
          <img
            src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
            height="28px"
            alt="Techjockey"
          />
          <div className="nav-cta">
            <button className="animated-cta btn-magnetic" onClick={scrollToForm}>
              Generate with AI
            </button>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg">
          <video autoPlay muted loop playsInline preload="auto" className="hero-parallax-bg">
            <source src="/output/generated-assets/ds_1777876932783_1b526995/08-8c93b9a6e6.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="precision-lines" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <h1 className="hero-headline">
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models
            </h1>
            <p className="hero-sub">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro
              (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content
              creation.
            </p>
            <div className="hero-chips">
              {[
                'AI Image Generation',
                'AI Video Generation with Audio',
                'Multimodal Content Creation',
                'Enterprise-ready AI infrastructure',
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  {icon}
                  <span>{chip}</span>
                </div>
              ))}
            </div>
            <div className="hero-cta">
              <button className="animated-cta btn-magnetic" onClick={scrollToForm}>
                Generate with AI
              </button>
              <button className="ghost-btn" onClick={scrollToForm}>
                Generate with AI
              </button>
            </div>
          </div>

          <div className="hero-visual" ref={formRef}>
            <div className="form-card">
              <h3>Generate with AI</h3>
              <p>Professionals creating visual content, including creative directors, video producers, art directors, marketing managers, and creative leads</p>
              <form onSubmit={e => e.preventDefault()}>
                <div className="form-grid">
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
                </div>
                <button className="animated-cta btn-magnetic full-btn" type="submit">
                  Generate with AI
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics">
        <div className="container">
          <div className="metrics-grid reveal stagger-parent">
            {[
              'AI Image Generation',
              'AI Video Generation with Audio',
              'Multimodal Content Creation',
              'Enterprise-ready AI infrastructure',
            ].map((item, i) => (
              <div className="metric stagger-child hover-card" key={i}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].flatMap(() =>
            ['Seedream 4.5 and Seedance 1.5 Pro', 'AI Image Generation and AI Video Generation', 'Generate with AI']
          ).map((text, i) => (
            <span className="marquee-item" key={i}>
              {text} <span className="gradient-text">★</span>
            </span>
          ))}
        </div>
      </div>

      {productSections.map((section, sIdx) => (
        <section className="product-dark" key={section.headline}>
          <div className="container">
            <div className="split">
              <div className={sIdx % 2 === 0 ? 'reveal-left' : 'reveal-right'} style={{ order: sIdx % 2 === 0 ? 1 : 2 }}>
                <div className="browser-frame">
                  <div className="browser-bar">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                  <img src={section.image} alt={section.headline} />
                </div>
              </div>
              <div className={sIdx % 2 === 0 ? 'reveal-right' : 'reveal-left'} style={{ order: sIdx % 2 === 0 ? 2 : 1 }}>
                <span className="section-tag">{section.headline}</span>
                <h2>{section.headline}</h2>
                <div className="desc-border">
                  <p>{section.description}</p>
                </div>
                <div className="accordion">
                  {section.features.map((feature, i) => {
                    const isOpen = openFeature[sIdx] === i;
                    return (
                      <div className="acc-item hover-card" key={feature.title}>
                        <button
                          className="acc-head"
                          onClick={() => setOpenFeature(prev => ({ ...prev, [sIdx]: prev[sIdx] === i ? -1 : i }))}
                        >
                          <span style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                            {icon}
                            {feature.title}
                          </span>
                          <span style={{ color: accent }}>{isOpen ? '−' : '+'}</span>
                        </button>
                        {isOpen && <div className="acc-body">{feature.description}</div>}
                      </div>
                    );
                  })}
                </div>
                <div style={{ marginTop: 22 }}>
                  <button className="animated-cta btn-magnetic" onClick={scrollToForm}>
                    Generate with AI
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="gallery">
        <div className="container">
          <div className="reveal">
            <span className="section-tag" style={{ color: accent, borderColor: `${accent}55`, background: `${accent}14` }}>
              AI Video Generation
            </span>
            <h2>
              Demo <span className="gradient-text">Video Gallery</span>
            </h2>
            <p>
              AI Image Generation and AI Video Generation for professionals creating visual content, including creative
              directors, video producers, art directors, marketing managers, and creative leads.
            </p>
          </div>
          <div className="video-grid stagger-parent visible">
            {demoVideos.map((video, i) => (
              <div className="video-card hover-card stagger-child" key={i}>
                <video autoPlay muted loop playsInline preload="auto">
                  <source src={video} type="video/mp4" />
                </video>
                <div className="cap">{i % 2 === 0 ? 'Seedance 1.5 Pro' : 'Seedream 4.5'}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <div className="reveal">
            <span className="section-tag">Pricing</span>
            <h2>
              Explore <span className="gradient-text">Pricing</span>
            </h2>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, i) => (
              <div className={`price-card reveal-scale hover-card ${i === 1 ? 'featured' : ''}`} key={plan.name}>
                {i === 1 && <div className="badge">Starting at $1,000/month/</div>}
                <h3 style={{ fontSize: 24 }}>{plan.name}</h3>
                <div className="price">{plan.price || 'Get Quote'}</div>
                <div className="list">
                  {plan.includes.map(item => (
                    <div className="li" key={item}>
                      {icon}
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <button className="animated-cta btn-magnetic full-btn" onClick={scrollToForm}>
                  Generate with AI
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="reveal">
            <span className="section-tag" style={{ color: accent, borderColor: `${accent}55`, background: `${accent}14` }}>
              Testimonials
            </span>
            <h2>
              What creative teams say about <span className="gradient-text">Seedream & Seedance</span>
            </h2>
          </div>
          <div className="slider-wrap">
            <div className="slider" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div className="slide" key={i}>
                  <div className="t-card hover-card">
                    <div>
                      <div className="quote-mark">❝</div>
                      <p style={{ fontSize: 20, lineHeight: 1.8, marginTop: 12 }}>{t.quote}</p>
                    </div>
                    <div>
                      <div className="stars">★★★★★</div>
                      <div className="author">
                        <img
                          className="avatar"
                          src="/output/generated-assets/ds_1777876932783_1b526995/03-6d75b26b02.webp"
                          alt={t.name}
                        />
                        <div>
                          <div style={{ fontWeight: 800 }}>{t.name}</div>
                          <div className="role">{t.role}</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="controls">
              <div style={{ display: 'flex', gap: 10 }}>
                <button className="arrow" onClick={() => setActiveSlide(prev => (prev - 1 + testimonials.length) % testimonials.length)}>
                  ‹
                </button>
                <button className="arrow" onClick={() => setActiveSlide(prev => (prev + 1) % testimonials.length)}>
                  ›
                </button>
              </div>
              <div className="dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`dot-btn ${i === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(i)}
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
            <p className="muted" style={{ marginTop: 14 }}>support@techjockey.com</p>
            <p className="muted">© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>

          <div>
            <div className="footer-links">
              <a href="/">Privacy Policy</a>
              <a href="/">Terms</a>
            </div>
          </div>

          <div className="socials">
            <a className="social" href="/" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>
            </a>
            <a className="social" href="/" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
            </a>
            <a className="social" href="/" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.4-5.4.4-.6.9-.8 2-.5 3C9.7 8.6 6.8 7 4.9 4.6c-1 1.7-.5 3.9 1.1 5-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.7 3.3 4.1-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 3.9 2.9A8.4 8.4 0 0 1 3 18c1.9 1.2 4.2 1.9 6.6 1.9 8 0 12.6-6.8 12.3-12.9.8-.5 1.5-1.2 2.1-2z"/></svg>
            </a>
            <a className="social" href="/" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.5H3.6V20h3.3V8.5zM5.3 3A1.9 1.9 0 1 0 5.3 6.8 1.9 1.9 0 0 0 5.3 3zM20.4 20v-6.3c0-3.4-1.8-5-4.3-5-2 0-2.9 1.1-3.4 1.9v-1.6H9.4c0 1 .1 11 0 11h3.3v-6.1c0-.3 0-.7.1-.9.3-.7 1-1.5 2.1-1.5 1.5 0 2.1 1.2 2.1 2.9V20h3.4z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;