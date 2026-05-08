import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#1a1a1a';
  const bodyBg = '#f5f5f5';

  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const pageRef = useRef(null);

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

  const products = [
    {
      name: 'Seedream 4.5',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      image: '/output/generated-assets/ds_1777818904972_cb264924/06-e35cdce728.png',
      darkImage: true,
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
      image: '/output/generated-assets/ds_1777818904972_cb264924/10-41ea7f7485.png',
      darkImage: false,
      features: [
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
      cta: 'Generate with AI',
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
      cta: 'Generate with AI',
    },
  ];

  const videos = [
    'https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4',
    'https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4',
    'https://cdn.web.imagine.art/imagine-one/onboarding-videos/text-to-image.mp4',
  ];

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    const els = document.querySelectorAll('.hero-headline, .hero-sub, .hero-chips, .hero-cta, .hero-visual');
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      el.style.transitionDelay = i * 0.15 + 's';
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 50);
      });
    });
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-parent').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 2000;
        const start = performance.now();
        const isDecimal = target % 1 !== 0;
        const animate = now => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = eased * target;
          el.textContent = prefix + (isDecimal ? value.toFixed(1) : Math.floor(value).toLocaleString()) + suffix;
          if (progress < 1) requestAnimationFrame(animate);
          else el.textContent = prefix + (isDecimal ? target.toFixed(1) : target.toLocaleString()) + suffix;
        };
        requestAnimationFrame(animate);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    const btns = document.querySelectorAll('.btn-magnetic');
    const cleanups = [];
    btns.forEach(btn => {
      const move = e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.25) + 'px, ' + (y * 0.25) + 'px)';
      };
      const leave = () => {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      };
      btn.addEventListener('mousemove', move);
      btn.addEventListener('mouseleave', leave);
      cleanups.push(() => {
        btn.removeEventListener('mousemove', move);
        btn.removeEventListener('mouseleave', leave);
      });
    });
    return () => cleanups.forEach(fn => fn());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => e.preventDefault();

  const icon = (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l2.7 5.47L21 9.4l-4.5 4.39L17.56 21 12 18.08 6.44 21 7.5 13.79 3 9.4l6.3-.93L12 3z" fill={accent} />
    </svg>
  );

  const css = `
    *{box-sizing:border-box} body{margin:0;font-family:Inter,sans-serif;background:${bodyBg};color:#111}
    a{text-decoration:none;color:inherit} img{max-width:100%}
    .page-wrapper{animation:pageReveal .6s cubic-bezier(.16,1,.3,1) both;background:${bodyBg}}
    .container{width:min(1200px,92%);margin:auto}
    .nav{position:sticky;top:0;z-index:50;background:rgba(17,17,17,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand{font-weight:800;font-size:20px;color:#fff;line-height:1.2}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, #fff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:10px;background:${accent};color:#fff;font-weight:700;border:1px solid ${accent};transition:.25s transform,.25s box-shadow,.25s background}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(255,107,0,.28);background:#ff7b20}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:10px;border:1px solid rgba(255,255,255,.18);color:#fff;background:transparent;transition:.25s}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.22);border-color:rgba(255,255,255,.35)}
    .hero{position:relative;background:#1a1a1a;color:#fff;overflow:hidden}
    .hero-bg{position:absolute;inset:0}
    .hero-bg img{width:100%;height:100%;object-fit:cover}
    .hero-bg:after{content:'';position:absolute;inset:0;background:linear-gradient(90deg,rgba(0,0,0,.72),rgba(0,0,0,.58)),radial-gradient(circle at 80% 20%,rgba(255,107,0,.16),transparent 30%)}
    .hero-orb,.hero-orb2{position:absolute;border-radius:50%;filter:blur(50px);pointer-events:none}
    .hero-orb{width:260px;height:260px;background:rgba(255,107,0,.18);top:-40px;right:10%}
    .hero-orb2{width:220px;height:220px;background:rgba(255,255,255,.08);bottom:20px;left:6%}
    .hero-inner{position:relative;display:grid;grid-template-columns:1.1fr .9fr;gap:36px;align-items:center;min-height:calc(100vh - 76px);padding:72px 0}
    h1{font-size:clamp(48px,6vw,72px);line-height:1.05;margin:0 0 18px;font-weight:800}
    h2{font-size:clamp(32px,4vw,46px);line-height:1.12;margin:0 0 16px;font-weight:800}
    h3{margin:0 0 10px;font-size:20px}
    p{margin:0 0 14px;line-height:1.7}
    .hero-sub{font-size:18px;color:#d0d0d0;max-width:720px}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(255,107,0,.35);background:rgba(255,107,0,.1);color:#ddd;font-size:13px}
    .hero-cta{display:flex;gap:14px;flex-wrap:wrap;margin-top:10px}
    .form-card,.visual-card,.panel,.price-card,.testimonial-card,.video-card{border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.06);backdrop-filter:blur(14px);border-radius:20px}
    .form-card{padding:24px;box-shadow:0 20px 60px rgba(0,0,0,.35)}
    .form-card h3,.form-card p{color:#fff}
    .field{margin-bottom:14px}
    .field label{display:block;color:#ddd;font-size:13px;margin-bottom:7px}
    .field input{width:100%;padding:14px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);color:#fff;outline:none}
    .field input:focus{border-color:${accent};box-shadow:0 0 0 3px rgba(255,107,0,.16)}
    .hero-visual{display:grid;gap:16px}
    .visual-card{padding:14px;min-height:500px;position:relative;overflow:hidden}
    .visual-main{border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,.1)}
    .visual-main video,.visual-main img{width:100%;height:300px;object-fit:cover;display:block}
    .floating-ui{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:12px}
    .mini{padding:14px;border-radius:14px;background:rgba(0,0,0,.3);border:1px solid rgba(255,255,255,.08);color:#fff}
    .wave{height:42px;border-radius:12px;background:linear-gradient(90deg,rgba(255,107,0,.18),rgba(255,255,255,.06));position:relative;overflow:hidden}
    .wave:after{content:'';position:absolute;inset:0;background:repeating-linear-gradient(90deg,transparent 0 8px,rgba(255,255,255,.16) 8px 10px);animation:marqueeScroll 10s linear infinite}
    .section-dark{background:#111;color:#fff}
    .section-light{background:#f5f5f5;color:#111}
    .section{position:relative;padding:84px 0;transition:background-color .4s ease}
    .section-tag{display:inline-block;padding:8px 12px;border-radius:999px;font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;background:rgba(255,107,0,.12);border:1px solid rgba(255,107,0,.28);color:${accent};margin-bottom:18px}
    .metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .metric{padding:26px;border-radius:18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);text-align:center}
    .metric .num{font-size:40px;font-weight:800;color:#fff}
    .metric .lbl{color:#bbb}
    .product-grid{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center}
    .browser-frame{border-radius:20px;overflow:hidden;border:1px solid rgba(0,0,0,.08);background:#0f0f0f;box-shadow:0 18px 40px rgba(0,0,0,.12)}
    .browser-top{display:flex;gap:8px;padding:12px 14px;background:#191919}
    .dot{width:10px;height:10px;border-radius:50%;background:#555}
    .browser-body{position:relative}
    .browser-body img{display:block;width:100%;height:420px;object-fit:cover}
    .overlay-dark{position:absolute;inset:0;background:rgba(0,0,0,.4)}
    .feature-spotlight{padding:24px;border-radius:20px;background:#fff;border:1px solid #e5e7eb}
    .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:18px}
    .feature-card{padding:18px;border-radius:16px;background:#fff;border:1px solid #e5e7eb}
    .feature-card p{color:#5b5b5b}
    .divider{background:#111;padding:18px 0;overflow:hidden;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08)}
    .ticker-item{font-size:28px;font-weight:800;color:#fff;white-space:nowrap;margin-right:48px}
    .gallery-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
    .video-card{padding:10px;background:rgba(255,255,255,.05)}
    .video-card video{width:100%;display:block;border-radius:14px}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
    .price-card{padding:26px;background:#fff;border:1px solid #e5e7eb;color:#111}
    .price-card.featured{border-color:${accent};box-shadow:0 20px 50px rgba(255,107,0,.12)}
    .badge{display:inline-block;padding:6px 10px;border-radius:999px;background:#e8f7ec;color:#12833a;font-size:12px;font-weight:700;margin-bottom:14px}
    .price{font-size:34px;font-weight:800;margin:10px 0 16px}
    .muted{color:#5b5b5b}
    .checklist{display:grid;gap:10px;margin:18px 0 0;padding:0;list-style:none}
    .checklist li{display:flex;gap:10px;align-items:flex-start}
    .testimonials-wrap{position:relative;overflow:hidden}
    .slider{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .slide{min-width:100%;padding:6px}
    .testimonial-card{padding:34px;background:rgba(255,255,255,.05)}
    .quote-mark{font-size:48px;line-height:1;color:${accent};font-weight:800}
    .stars{color:#ffb800;letter-spacing:2px;margin:10px 0 16px}
    .author{display:flex;gap:14px;align-items:center;margin-top:20px}
    .author img{width:58px;height:58px;border-radius:50%;object-fit:cover}
    .author strong{display:block;color:#fff}
    .author span{color:#a9a9a9}
    .controls{display:flex;justify-content:center;gap:10px;margin-top:24px}
    .ctrl,.dot-btn{border:none;cursor:pointer}
    .ctrl{width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,.08);color:#fff}
    .dots{display:flex;justify-content:center;gap:8px;margin-top:18px}
    .dot-btn{height:8px;border-radius:999px;background:rgba(255,255,255,.24);width:8px;transition:.3s}
    .dot-btn.active{width:26px;background:${accent}}
    .footer{background:#0d0d0d;color:#fff;padding:34px 0;border-top:1px solid rgba(255,255,255,.08)}
    .footer-top,.footer-bottom{display:flex;justify-content:space-between;gap:20px;align-items:center;flex-wrap:wrap}
    .footer-top{margin-bottom:20px}
    .footer-links,.socials{display:flex;gap:16px;align-items:center;flex-wrap:wrap}
    .social{width:36px;height:36px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08)}
    .social:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.25)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-left{opacity:0;transform:translateX(-50px);transition:opacity 0.7s ease, transform 0.7s ease}
    .reveal-right{opacity:0;transform:translateX(50px);transition:opacity 0.7s ease, transform 0.7s ease}
    .reveal-left.visible,.reveal-right.visible{opacity:1;transform:translateX(0)}
    .reveal-scale{opacity:0;transform:scale(0.92);transition:opacity 0.6s ease, transform 0.6s ease}
    .reveal-scale.visible{opacity:1;transform:scale(1)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}.reveal-delay-4{transition-delay:.4s}
    .stagger-parent .stagger-child{opacity:0;transform:translateY(30px);transition:opacity .5s ease,transform .5s ease}
    .stagger-parent.visible .stagger-child:nth-child(1){opacity:1;transform:translateY(0);transition-delay:0s}
    .stagger-parent.visible .stagger-child:nth-child(2){opacity:1;transform:translateY(0);transition-delay:.1s}
    .stagger-parent.visible .stagger-child:nth-child(3){opacity:1;transform:translateY(0);transition-delay:.2s}
    .stagger-parent.visible .stagger-child:nth-child(4){opacity:1;transform:translateY(0);transition-delay:.3s}
    .stagger-parent.visible .stagger-child:nth-child(5){opacity:1;transform:translateY(0);transition-delay:.4s}
    .stagger-parent.visible .stagger-child:nth-child(6){opacity:1;transform:translateY(0);transition-delay:.5s}
    .hover-card{transition:transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease;cursor:pointer}
    .hover-card:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(0,0,0,.15)}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    @keyframes marqueeScrollReverse{0% { transform: translateX(-50%); } 100% { transform: translateX(0); }}
    .marquee-wrapper{overflow:hidden}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 28s linear infinite}
    .marquee-track:hover{animation-play-state:paused}
    .marquee-track-reverse{animation:marqueeScrollReverse 28s linear infinite}
    .marquee-track-fast{animation-duration:16s}
    .marquee-track-slow{animation-duration:40s}
    @keyframes pageReveal{0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:translateY(0)}}
    @media (max-width: 980px){
      .hero-inner,.product-grid,.pricing-grid,.gallery-grid{grid-template-columns:1fr}
      .metrics{grid-template-columns:1fr}
      .feature-grid{grid-template-columns:1fr}
      .visual-card{min-height:auto}
      .browser-body img{height:320px}
      .nav-inner{grid-template-columns:1fr auto;gap:12px}
      .nav-cta{grid-column:1/-1}
    }
  `;

  return (
    <div className="page-wrapper" ref={pageRef}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span className="gradient-text">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span>
          </div>
          <img
            src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
            height="28px"
            alt="Techjockey"
          />
          <div className="nav-cta">
            <a href="#lead-form" className="animated-cta btn-magnetic">Generate with AI</a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg hero-parallax-bg">
          <img src="/output/generated-assets/ds_1777818904972_cb264924/21-e0c578a71f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro by ByteDance" />
        </div>
        <div className="hero-orb" />
        <div className="hero-orb2" />
        <div className="container hero-inner">
          <div>
            <h1 className="hero-headline">Create High-Quality AI Images &amp; Videos with <span className="gradient-text">ByteDance Generative Models</span></h1>
            <p className="hero-sub">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>
            <div className="chips hero-chips">
              {[
                'AI Image Generation',
                'AI Video Generation',
                'High-Resolution Output',
                'Audio-Visual Synchronization',
                'Multilingual Lip-Sync',
              ].map((chip, i) => (
                <div className="chip" key={i}>{icon}<span>{chip}</span></div>
              ))}
            </div>
            <div className="hero-cta">
              <a href="#lead-form" className="animated-cta btn-magnetic">Generate with AI</a>
              <a href="#products" className="ghost-btn">Generate with AI</a>
            </div>
          </div>

          <div className="hero-visual">
            <form id="lead-form" className="form-card hero-visual" onSubmit={handleSubmit}>
              <h3>Generate with AI</h3>
              <p>Professionals and teams creating high-quality visual content, including creative directors, video producers, art directors, marketing managers, and creative leads</p>
              <div className="field">
                <label htmlFor="name">Name</label>
                <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
              </div>
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" />
              </div>
              <div className="field">
                <label htmlFor="company">Company</label>
                <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Enter your company" />
              </div>
              <button type="submit" className="animated-cta btn-magnetic" style={{ width: '100%' }}>Generate with AI</button>
            </form>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container reveal">
          <div className="metrics">
            <div className="metric hover-card">
              <div className="num" data-count="4" data-suffix="K">0</div>
              <div className="lbl">High-Resolution Output up to 1K–4K resolution</div>
            </div>
            <div className="metric hover-card">
              <div className="num" data-count="10" data-suffix="×">0</div>
              <div className="lbl">10× Faster Inference</div>
            </div>
            <div className="metric hover-card">
              <div className="num" data-count="2" data-suffix="">0</div>
              <div className="lbl">AI Image Generation and AI Video Generation</div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider">
        <div className="marquee-wrapper">
          <div className="marquee-track marquee-track-fast">
            {[...Array(8)].map((_, i) => (
              <span className="ticker-item" key={i}>
                Seedream 4.5 and Seedance 1.5 Pro by ByteDance <span className="gradient-text">★</span> AI Image Generation and AI Video Generation
              </span>
            ))}
          </div>
        </div>
      </div>

      <section id="products" className="section section-light">
        <div className="container">
          {products.map((product, idx) => (
            <div className="product-grid" key={product.name} style={{ marginBottom: idx === products.length - 1 ? 0 : 84 }}>
              <div className={idx % 2 === 0 ? 'reveal-left' : 'reveal-right'} style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                <div className="browser-frame hover-card">
                  <div className="browser-top">
                    <span className="dot" /><span className="dot" /><span className="dot" />
                  </div>
                  <div className="browser-body">
                    <img src={product.image} alt={product.name} />
                    {!product.darkImage && <div className="overlay-dark" />}
                  </div>
                </div>
              </div>

              <div className={idx % 2 === 0 ? 'reveal-right' : 'reveal-left'} style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                <span className="section-tag">{product.name}</span>
                <h2>{product.headline.split(product.name)[0]}<span className="gradient-text">{product.name}</span>{product.headline.includes(product.name) ? '' : ''}</h2>
                <div style={{ borderLeft: `3px solid ${accent}`, paddingLeft: 18, marginBottom: 22 }}>
                  <p className="muted">{product.description}</p>
                </div>
                <div className="feature-spotlight reveal-scale hover-card">
                  <h3>{product.features[0].title}</h3>
                  <p>{product.features[0].description}</p>
                </div>
                <div className="feature-grid stagger-parent reveal">
                  {product.features.slice(1).map((feature, i) => (
                    <div className="feature-card hover-card stagger-child" key={i}>
                      <div style={{ display: 'flex', gap: 10, alignItems: 'center', marginBottom: 8 }}>{icon}<strong>{feature.title}</strong></div>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 22 }}>
                  <a href="#lead-form" className="animated-cta btn-magnetic">Generate with AI</a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <div className="divider" style={{ background: '#f5f5f5', borderTop: '1px solid #e5e7eb', borderBottom: '1px solid #e5e7eb' }}>
        <div className="marquee-wrapper">
          <div className="marquee-track marquee-track-slow">
            {[...Array(8)].map((_, i) => (
              <span className="ticker-item" style={{ color: '#111' }} key={i}>
                Generate with AI <span style={{ color: accent }}>★</span> Seedream 4.5 <span style={{ color: accent }}>★</span> Seedance 1.5 Pro
              </span>
            ))}
          </div>
        </div>
      </div>

      <section className="section section-dark">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 28 }}>
            <span className="section-tag">Gallery</span>
            <h2 style={{ color: '#fff' }}>AI Image Generation and <span className="gradient-text">AI Video Generation</span></h2>
          </div>
          <div className="gallery-grid stagger-parent reveal">
            {videos.map((video, i) => (
              <div className="video-card hover-card stagger-child" key={i}>
                <video autoPlay muted loop playsInline preload="auto">
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 26 }}>
            <span className="section-tag">Pricing</span>
            <h2>Seedream 4.5 and Seedance 1.5 Pro by <span className="gradient-text">ByteDance</span></h2>
          </div>
          <div className="pricing-grid stagger-parent reveal">
            {pricingPlans.map((plan, i) => (
              <div className={`price-card hover-card stagger-child ${i === 1 ? 'featured' : ''}`} key={i}>
                {i === 1 && <span className="badge">Starting at $1,000/month/</span>}
                <h3>{plan.name}</h3>
                <div className="price">{plan.price || 'Get Quote'}</div>
                <ul className="checklist">
                  {plan.includes.map((item, idx) => (
                    <li key={idx}>
                      <span style={{ marginTop: 2 }}>{icon}</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div style={{ marginTop: 22 }}>
                  <a href="#lead-form" className="animated-cta btn-magnetic" style={{ width: '100%' }}>{plan.cta}</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 28 }}>
            <span className="section-tag">Testimonials</span>
            <h2 style={{ color: '#fff' }}>What creative teams say</h2>
          </div>
          <div className="testimonials-wrap reveal">
            <div className="slider" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div className="slide" key={i}>
                  <div className="testimonial-card hover-card">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p style={{ color: '#efefef', fontSize: 20 }}>{t.quote}</p>
                    <div className="author">
                      <img src="/output/generated-assets/ds_1777818904972_cb264924/02-6d75b26b02.webp" alt={t.author} />
                      <div>
                        <strong>{t.author}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="controls">
              <button className="ctrl" onClick={() => setActiveSlide((activeSlide - 1 + testimonials.length) % testimonials.length)}>‹</button>
              <button className="ctrl" onClick={() => setActiveSlide((activeSlide + 1) % testimonials.length)}>›</button>
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
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, flexWrap: 'wrap' }}>
              <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" height="28px" alt="Techjockey" />
              <span>support@techjockey.com</span>
            </div>
            <div className="socials">
              <a className="social" href="#" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.6V4.8c-.8-.1-1.6-.2-2.4-.2-2.4 0-4.1 1.4-4.1 4.2V11H8v3h2.3v8h3.2z"/></svg>
              </a>
              <a className="social" href="#" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1012 16.5 3.5 3.5 0 0012 9.5zm6-3.2a1.3 1.3 0 11-2.6 0 1.3 1.3 0 012.6 0z"/></svg>
              </a>
              <a className="social" href="#" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.3-8.4L1 2h6.3l4.3 5.8L18.9 2z"/></svg>
              </a>
              <a className="social" href="#" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 103 4.97 1.99 1.99 0 005.25 3zM20.44 12.74c0-3.38-1.8-4.95-4.2-4.95a3.63 3.63 0 00-3.28 1.8V8.5H9.58c.04.72 0 11.5 0 11.5h3.38v-6.42c0-.34 0-.68.12-.92a2.22 2.22 0 012.08-1.48c1.47 0 2.06 1.12 2.06 2.76V20h3.38z"/></svg>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2024 Techjockey Infotech Pvt. Ltd.</div>
            <div className="footer-links">
              <a href="#">Privacy Policy</a>
              <a href="#">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;