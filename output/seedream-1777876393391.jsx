import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#ff6b00';
  const bodyBg = '#1a1a1a';

  const [activeTab, setActiveTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const heroRef = useRef(null);

  const productSections = [
    {
      name: 'Seedream 4.5',
      label: 'AI Image Generation',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      image: '/output/generated-assets/ds_1777876152704_a177d85b/12-e35cdce728.png',
      darkImage: true,
      features: [
        { title: 'Advanced Text–Image Alignment', description: 'Accurately translates prompts into visuals with improved semantic understanding.' },
        { title: 'High-Resolution Output', description: 'Generate native images up to 1K–4K resolution with strong visual fidelity.' },
        { title: 'Superior Typographic Rendering', description: 'Optimized for posters, ads, and text-heavy visual designs.' },
        { title: 'Multi-Image Composition with Identity Preservation', description: 'Combines multiple inputs while accurately maintaining subject consistency.' },
        { title: 'Strong Structural Fidelity', description: 'Maintains composition, layout, and scene structure with high precision.' }
      ]
    },
    {
      name: 'Seedance 1.5 Pro',
      label: 'AI Video Generation',
      headline: 'AI Video Generation with Seedance 1.5 Pro by Bytedance',
      description:
        'Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.',
      image: '/output/generated-assets/ds_1777876152704_a177d85b/15-41ea7f7485.png',
      darkImage: false,
      features: [
        { title: 'Text-to-Video Generation', description: 'Create videos directly from text prompts.' },
        { title: 'Audio-Visual Synchronization', description: 'Generate video and audio simultaneously with strong multimodal alignment.' },
        { title: 'Multilingual Lip-Sync', description: 'Supports multilingual and dialect-level lip synchronization.' },
        { title: 'Cinematic Camera Control', description: 'Generate videos with dynamic camera movement and cinematic storytelling.' },
        { title: '10× Faster Inference', description: 'Optimized inference pipeline significantly improves generation speed.' }
      ]
    }
  ];

  const testimonials = [
    { quote: 'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.', name: 'Vaishali Saxena', role: 'Creative Director' },
    { quote: 'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.', name: 'Vihaan Pandey', role: 'Video Producer' },
    { quote: 'The multimodal editing capabilities in Seedream make it easy to refine images with precision.', name: 'Anurag Malhotra', role: 'Art Director' },
    { quote: 'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.', name: 'Ashutosh Singh', role: 'Marketing Manager' },
    { quote: 'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.', name: 'Shrimmi Saxena', role: 'Creative Lead' }
  ];

  const pricing = [
    {
      name: 'Seedream 4.5 (AI Image Generation)',
      price: '',
      originalPrice: '',
      discount: '',
      includes: [
        'High-resolution image generation (up to 4K quality)',
        'Text-to-image & multimodal image editing',
        'Multi-image composition for complex visuals',
        'Enhanced typographic rendering for posters, ads & text-heavy designs'
      ]
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
        'Fast inference for quicker video production'
      ]
    }
  ];

  const demoVideos = [
    'https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4',
    'https://cdn.web.imagine.art/imagine-one/cdge/sora2.mp4',
    'https://cdn.web.imagine.art/imagine-one/cdge/sora33.mp4',
    'https://cdn.web.imagine.art/remote-config/assets/video_effects/sd/podcast.mp4',
    'https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4'
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
    return () => handlers.forEach(({ btn, move, leave }) => {
      btn.removeEventListener('mousemove', move);
      btn.removeEventListener('mouseleave', leave);
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => e.preventDefault();

  const Icon = ({ type }) => {
    const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: accent, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (type === 'image') return <svg {...common}><rect x="3" y="3" width="18" height="18" rx="2" /><circle cx="8.5" cy="8.5" r="1.5" /><path d="M21 15l-5-5L5 21" /></svg>;
    if (type === 'video') return <svg {...common}><rect x="3" y="5" width="15" height="14" rx="2" /><path d="M18 10l3-2v8l-3-2z" /></svg>;
    if (type === 'audio') return <svg {...common}><path d="M11 5L6 9H3v6h3l5 4V5z" /><path d="M15.5 8.5a5 5 0 010 7" /><path d="M18 6a8 8 0 010 12" /></svg>;
    return <svg {...common}><path d="M12 2l3 7h7l-5.5 4.2L18.5 21 12 16.8 5.5 21l2-7.8L2 9h7z" /></svg>;
  };

  const css = `
    :root{--accent:${accent};--primary:${primary}}
    *{box-sizing:border-box} html{scroll-behavior:smooth}
    body{margin:0;font-family:Inter,sans-serif;background:${bodyBg};color:#fff}
    a{text-decoration:none;color:inherit} img,video{max-width:100%}
    .page-wrapper{animation:pageReveal .6s cubic-bezier(.16,1,.3,1) both;overflow:hidden;background:${bodyBg}}
    .container{width:min(1200px,92%);margin:0 auto;position:relative;z-index:2}
    .nav{position:sticky;top:0;z-index:50;background:rgba(18,18,18,.78);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand{font-weight:800;font-size:20px;line-height:1.2;color:#fff;max-width:460px}
    .brand .gradient-text{display:inline}
    .nav-right{display:flex;align-items:center;gap:18px}
    .animated-cta{padding:12px 20px;border-radius:10px;background:var(--accent);color:#fff;font-weight:700;border:1px solid transparent;transition:.3s ease;display:inline-flex;align-items:center;justify-content:center}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(255,107,0,.28);background:#ff7d22}
    .ghost-btn{padding:12px 20px;border-radius:10px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.04);color:#fff;font-weight:600;transition:.3s ease}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(0,0,0,.2);border-color:rgba(255,255,255,.28)}
    .hero{position:relative;background:#1a1a1a;min-height:100vh;display:flex;align-items:center}
    .hero-bg-media,.hero-bg-overlay,.hero-bg-glow{position:absolute;inset:0}
    .hero-bg-media img,.hero-bg-media video{width:100%;height:100%;object-fit:cover}
    .hero-bg-overlay{background:linear-gradient(90deg,rgba(0,0,0,.78) 0%,rgba(0,0,0,.62) 45%,rgba(0,0,0,.55) 100%)}
    .hero-bg-glow:before,.hero-bg-glow:after{content:"";position:absolute;border-radius:50%;filter:blur(70px)}
    .hero-bg-glow:before{width:320px;height:320px;background:rgba(255,107,0,.18);top:8%;left:4%}
    .hero-bg-glow:after{width:420px;height:420px;background:rgba(255,107,0,.12);right:5%;bottom:6%}
    .hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:42px;align-items:center;padding:72px 0}
    .hero h1{font-size:clamp(48px,7vw,68px);line-height:1.03;margin:0 0 18px;font-weight:800;letter-spacing:-.03em}
    .hero p{color:#cfcfcf;font-size:18px;line-height:1.7;margin:0}
    .gradient-text{background:linear-gradient(135deg,var(--accent) 0%,var(--primary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-chips{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0}
    .chip{display:flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;border:1px solid rgba(255,107,0,.3);background:rgba(255,107,0,.08);color:#ddd;font-size:13px}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:8px}
    .hero-visual{position:relative}
    .form-card{background:rgba(27,27,27,.86);border:1px solid rgba(255,255,255,.1);border-radius:22px;padding:24px;box-shadow:0 30px 60px rgba(0,0,0,.35);backdrop-filter:blur(10px)}
    .form-card h3{margin:0 0 8px;font-size:24px}
    .form-card p{margin:0 0 18px;color:#bdbdbd;font-size:14px}
    .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .field-wrap{display:flex;flex-direction:column;gap:6px}
    .field-wrap.full{grid-column:1/-1}
    label{font-size:13px;color:#d9d9d9}
    input{width:100%;padding:14px 14px;border-radius:12px;border:1px solid #333;background:#111;color:#fff;outline:none;transition:.25s}
    input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(255,107,0,.14)}
    .hero-collage{margin-top:18px;display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
    .mini-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:16px;padding:12px}
    .mini-card video,.mini-card img{width:100%;height:110px;object-fit:cover;border-radius:12px;display:block}
    .mini-card span{display:block;margin-top:8px;font-size:12px;color:#d7d7d7}
    .marquee-wrapper{overflow:hidden;background:#202020;padding:20px 0;border-top:1px solid #333;border-bottom:1px solid #333}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 28s linear infinite}
    .marquee-track:hover{animation-play-state:paused}
    .marquee-item{font-size:26px;font-weight:800;margin-right:46px;white-space:nowrap;color:rgba(255,255,255,.82)}
    .metrics{background:#f5f5f5;color:#151515}
    .metrics-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;padding:26px 0}
    .metric-card{background:#fff;border:1px solid #e5e5e5;border-radius:18px;padding:22px}
    .metric-card h3{margin:0 0 8px;font-size:16px}
    .metric-card p{margin:0;color:#555;line-height:1.6}
    .products{background:#151515;padding:88px 0}
    .section-head{margin-bottom:30px}
    .section-head h2{font-size:clamp(32px,4vw,44px);margin:0 0 10px}
    .section-head p{margin:0;color:#bfbfbf;max-width:780px;line-height:1.7}
    .tabs{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:26px}
    .tab-btn{padding:12px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#d6d6d6;font-weight:600;cursor:pointer;transition:.25s}
    .tab-btn.active{background:rgba(255,107,0,.14);border-color:rgba(255,107,0,.34);color:#fff}
    .product-panel{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:22px;border:1px solid rgba(255,255,255,.09);box-shadow:0 22px 60px rgba(0,0,0,.28)}
    .browser-top{display:flex;gap:8px;padding:12px 14px;border-bottom:1px solid rgba(255,255,255,.06)}
    .browser-top i{width:10px;height:10px;border-radius:50%;background:#666;display:block}
    .browser-frame.dark{background:#0a0a0a}
    .browser-frame.light{background:#f8f8f8}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .panel-copy{padding:6px 0}
    .badge{display:inline-flex;padding:8px 12px;border-radius:999px;background:rgba(255,107,0,.1);border:1px solid rgba(255,107,0,.26);color:#ffb07a;font-size:12px;font-weight:700;margin-bottom:16px}
    .panel-copy h3{font-size:36px;line-height:1.15;margin:0 0 14px}
    .desc-box{border-left:2px solid rgba(255,255,255,.14);padding-left:18px;margin-bottom:20px}
    .desc-box p{margin:0;color:#cfcfcf;line-height:1.8}
    .feature-list{display:grid;gap:12px}
    .feature-item{display:flex;gap:12px;padding:14px;border-radius:16px;background:#1f1f1f;border:1px solid rgba(255,255,255,.08)}
    .feature-item h4{margin:0 0 4px;font-size:16px}
    .feature-item p{margin:0;color:#bababa;font-size:14px;line-height:1.6}
    .video-gallery{background:#202020;padding:88px 0}
    .video-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .video-card{background:#252525;border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:12px}
    .video-card video{width:100%;height:220px;object-fit:cover;border-radius:14px;display:block}
    .pricing{background:#202020;padding:88px 0}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
    .price-card{background:#232323;border:1px solid #333;border-radius:22px;padding:24px;position:relative}
    .price-card.featured{border-color:rgba(255,107,0,.5);box-shadow:0 0 0 1px rgba(255,107,0,.18),0 20px 50px rgba(0,0,0,.25)}
    .green-badge{display:inline-flex;padding:7px 12px;border-radius:999px;background:rgba(28,173,88,.14);color:#77e3a2;border:1px solid rgba(28,173,88,.26);font-size:12px;font-weight:700;margin-bottom:14px}
    .price-card h3{font-size:24px;margin:0 0 12px}
    .price{font-size:34px;font-weight:800;margin:0 0 18px}
    .price.muted{font-size:18px;color:#d5d5d5;font-weight:600}
    .list{display:grid;gap:10px;margin:0 0 20px;padding:0;list-style:none}
    .list li{display:flex;gap:10px;color:#d0d0d0;line-height:1.6}
    .testimonials{background:#f5f5f5;color:#151515;padding:88px 0}
    .slider-wrap{overflow:hidden;position:relative}
    .slider-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .slide{min-width:100%;padding:10px}
    .testimonial-card{background:#fff;border:1px solid #e7e7e7;border-radius:24px;padding:30px}
    .quote-mark{font-size:44px;color:var(--accent);line-height:1}
    .testimonial-card p{font-size:20px;line-height:1.8;color:#333;margin:10px 0 18px}
    .author{display:flex;align-items:center;gap:14px}
    .author img{width:56px;height:56px;border-radius:50%;object-fit:cover}
    .author strong{display:block;font-size:16px}
    .author span{color:#777;font-size:14px}
    .stars{color:#d8a300;font-size:18px;letter-spacing:2px;margin-bottom:6px}
    .slider-controls{display:flex;justify-content:center;align-items:center;gap:10px;margin-top:20px}
    .ctrl{width:42px;height:42px;border-radius:50%;border:none;background:#151515;color:#fff;cursor:pointer}
    .dot{width:9px;height:9px;border-radius:999px;background:#bbb;border:none;cursor:pointer;transition:.3s}
    .dot.active{width:26px;background:var(--accent)}
    .footer{background:#111;padding:34px 0 26px;border-top:1px solid rgba(255,255,255,.08)}
    .footer-grid{display:grid;grid-template-columns:1.3fr 1fr auto;gap:18px;align-items:center}
    .footer p,.footer a{color:#cfcfcf;font-size:14px}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .social{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:#1d1d1d;border:1px solid #333;transition:.25s}
    .social:hover{transform:translateY(-2px);border-color:rgba(255,107,0,.35);color:var(--accent)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-left{opacity:0;transform:translateX(-50px);transition:opacity .7s ease,transform .7s ease}
    .reveal-right{opacity:0;transform:translateX(50px);transition:opacity .7s ease,transform .7s ease}
    .reveal-left.visible,.reveal-right.visible{opacity:1;transform:translateX(0)}
    .reveal-scale{opacity:0;transform:scale(.92);transition:opacity .6s ease,transform .6s ease}
    .reveal-scale.visible{opacity:1;transform:scale(1)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}.reveal-delay-4{transition-delay:.4s}
    .stagger-parent .stagger-child{opacity:0;transform:translateY(30px);transition:opacity .5s ease,transform .5s ease}
    .stagger-parent.visible .stagger-child:nth-child(1){opacity:1;transform:translateY(0);transition-delay:0s}
    .stagger-parent.visible .stagger-child:nth-child(2){opacity:1;transform:translateY(0);transition-delay:.1s}
    .stagger-parent.visible .stagger-child:nth-child(3){opacity:1;transform:translateY(0);transition-delay:.2s}
    .stagger-parent.visible .stagger-child:nth-child(4){opacity:1;transform:translateY(0);transition-delay:.3s}
    .stagger-parent.visible .stagger-child:nth-child(5){opacity:1;transform:translateY(0);transition-delay:.4s}
    .stagger-parent.visible .stagger-child:nth-child(6){opacity:1;transform:translateY(0);transition-delay:.5s}
    .hover-card{transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s ease;cursor:pointer}
    .hover-card:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(0,0,0,.15)}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    @keyframes marqueeScrollReverse{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}
    @keyframes pageReveal{0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:translateY(0)}}
    section{transition:background-color .4s ease}
    @media (max-width: 991px){
      .nav-inner,.hero-grid,.product-panel,.pricing-grid,.footer-grid,.video-grid,.metrics-grid{grid-template-columns:1fr}
      .hero{min-height:auto}
      .hero-grid{padding:54px 0}
      .form-grid{grid-template-columns:1fr}
      .hero-collage{grid-template-columns:1fr 1fr}
      .footer-grid{align-items:flex-start}
    }
    @media (max-width: 640px){
      .brand{font-size:17px}
      .nav-inner{grid-template-columns:1fr;justify-items:start}
      .nav-right{flex-wrap:wrap}
      .hero p{font-size:16px}
      .hero-collage{grid-template-columns:1fr}
      .video-card video{height:200px}
      .testimonial-card p{font-size:17px}
      .marquee-item{font-size:20px}
    }
  `;

  return (
    <div className="page-wrapper">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span className="gradient-text">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span>
          </div>
          <div className="nav-right">
            <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" height="28px" alt="Techjockey" />
          </div>
          <a href="#lead-form" className="animated-cta btn-magnetic">Generate with AI</a>
        </div>
      </nav>

      <section className="hero" ref={heroRef}>
        <div className="hero-bg-media hero-parallax-bg">
          <img src="/output/generated-assets/ds_1777876152704_a177d85b/01-9bba47fa7e.png" alt="Create High-Quality AI Images & Videos with ByteDance Generative Models" />
        </div>
        <div className="hero-bg-overlay" />
        <div className="hero-bg-glow" />
        <div className="container hero-grid">
          <div>
            <h1 className="hero-headline">Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models</h1>
            <p className="hero-sub">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>

            <div className="hero-chips">
              {['AI Image Generation', 'AI Video Generation', 'High-Resolution Output', 'Audio-Visual Synchronization'].map((chip, i) => (
                <div className="chip" key={i}>
                  <Icon type={i === 0 ? 'image' : i === 1 ? 'video' : i === 2 ? 'star' : 'audio'} />
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta hero-actions">
              <a href="#lead-form" className="animated-cta btn-magnetic">Generate with AI</a>
              <a href="#products" className="ghost-btn">Generate with AI</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="form-card hover-card" id="lead-form">
              <h3>Generate with AI</h3>
              <p>Professionals seeking high-quality AI-generated visuals, videos, and multimodal content creation</p>
              <form onSubmit={handleSubmit}>
                <div className="form-grid">
                  <div className="field-wrap">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                  </div>
                  <div className="field-wrap">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                  </div>
                  <div className="field-wrap">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" />
                  </div>
                  <div className="field-wrap">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Enter your company" />
                  </div>
                  <div className="field-wrap full">
                    <button type="submit" className="animated-cta btn-magnetic" style={{ width: '100%' }}>Generate with AI</button>
                  </div>
                </div>
              </form>

              <div className="hero-collage">
                <div className="mini-card">
                  <video autoPlay muted loop playsInline preload="auto">
                    <source src="/output/generated-assets/ds_1777876152704_a177d85b/08-8c93b9a6e6.mp4" type="video/mp4" />
                  </video>
                  <span>Seedance 1.5 Pro</span>
                </div>
                <div className="mini-card">
                  <img src="/output/generated-assets/ds_1777876152704_a177d85b/12-e35cdce728.png" alt="Seedream 4.5" />
                  <span>Seedream 4.5</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, idx) => [
            <span className="marquee-item" key={`a${idx}`}>Seedream 4.5 and Seedance 1.5 Pro by ByteDance <span className="gradient-text">★</span></span>,
            <span className="marquee-item" key={`b${idx}`}>AI Image and Video Generation <span className="gradient-text">★</span></span>,
            <span className="marquee-item" key={`c${idx}`}>Generate with AI <span className="gradient-text">★</span></span>
          ])}
        </div>
      </div>

      <section className="metrics">
        <div className="container metrics-grid">
          <div className="metric-card reveal hover-card">
            <h3>Product</h3>
            <p>Seedream 4.5 and Seedance 1.5 Pro by ByteDance</p>
          </div>
          <div className="metric-card reveal reveal-delay-1 hover-card">
            <h3>Category</h3>
            <p>AI Image and Video Generation</p>
          </div>
          <div className="metric-card reveal reveal-delay-2 hover-card">
            <h3>Audience</h3>
            <p>Professionals seeking high-quality AI-generated visuals, videos, and multimodal content creation</p>
          </div>
        </div>
      </section>

      <section className="products" id="products">
        <div className="container">
          <div className="section-head reveal">
            <h2>Explore <span className="gradient-text">ByteDance</span> generative models</h2>
            <p>Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.</p>
          </div>

          <div className="tabs reveal">
            {productSections.map((tab, i) => (
              <button key={tab.name} className={`tab-btn ${activeTab === i ? 'active' : ''}`} onClick={() => setActiveTab(i)}>
                {tab.name}
              </button>
            ))}
          </div>

          <div className="product-panel">
            <div className="reveal-left">
              <div className={`browser-frame ${productSections[activeTab].darkImage ? 'dark' : 'light'}`}>
                <div className="browser-top">
                  <i /><i /><i />
                </div>
                <img src={productSections[activeTab].image} alt={productSections[activeTab].headline} />
              </div>
            </div>

            <div className="panel-copy reveal-right">
              <span className="badge">{productSections[activeTab].label}</span>
              <h3>{productSections[activeTab].headline}</h3>
              <div className="desc-box">
                <p>{productSections[activeTab].description}</p>
              </div>

              <div className="feature-list stagger-parent">
                {productSections[activeTab].features.map((feature, i) => (
                  <div className="feature-item stagger-child hover-card" key={i}>
                    <div><Icon type={activeTab === 0 ? 'image' : 'video'} /></div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 20 }}>
                <a href="#lead-form" className="animated-cta btn-magnetic">Generate with AI</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track marquee-track-reverse">
          {[...Array(2)].flatMap((_, idx) => [
            <span className="marquee-item" key={`p1${idx}`}>AI Image Generation <span className="gradient-text">★</span></span>,
            <span className="marquee-item" key={`p2${idx}`}>AI Video Generation <span className="gradient-text">★</span></span>,
            <span className="marquee-item" key={`p3${idx}`}>Multimodal content creation <span className="gradient-text">★</span></span>
          ])}
        </div>
      </div>

      <section className="video-gallery">
        <div className="container">
          <div className="section-head reveal">
            <h2>Video <span className="gradient-text">gallery</span></h2>
            <p>AI Image and Video Generation</p>
          </div>
          <div className="video-grid stagger-parent">
            {demoVideos.map((video, i) => (
              <div className="video-card stagger-child hover-card" key={i}>
                <video autoPlay muted loop playsInline preload="auto">
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <div className="section-head reveal">
            <h2>Pricing</h2>
            <p>AI Image and Video Generation</p>
          </div>
          <div className="pricing-grid">
            {pricing.map((plan, i) => (
              <div className={`price-card reveal-scale hover-card ${i === 1 ? 'featured' : ''}`} key={plan.name}>
                {i === 1 && <span className="green-badge">Highlighted</span>}
                <h3>{plan.name}</h3>
                <div className={`price ${plan.price ? '' : 'muted'}`}>{plan.price || 'Get Quote'}</div>
                <ul className="list">
                  {plan.includes.map((item, idx) => (
                    <li key={idx}>
                      <span style={{ color: accent }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#lead-form" className="animated-cta btn-magnetic" style={{ width: '100%' }}>Generate with AI</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-head reveal">
            <h2>What teams say</h2>
            <p>Real feedback from professionals evaluating Seedream and Seedance</p>
          </div>
          <div className="slider-wrap reveal">
            <div className="slider-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div className="slide" key={i}>
                  <div className="testimonial-card hover-card">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p>{t.quote}</p>
                    <div className="author">
                      <img src="/output/generated-assets/ds_1777876152704_a177d85b/03-6d75b26b02.webp" alt={t.name} />
                      <div>
                        <strong>{t.name}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-controls">
              <button className="ctrl" onClick={() => setActiveSlide((activeSlide - 1 + testimonials.length) % testimonials.length)}>‹</button>
              {testimonials.map((_, i) => (
                <button key={i} className={`dot ${i === activeSlide ? 'active' : ''}`} onClick={() => setActiveSlide(i)} />
              ))}
              <button className="ctrl" onClick={() => setActiveSlide((activeSlide + 1) % testimonials.length)}>›</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" height="28px" alt="Techjockey" />
            <p style={{ marginTop: 12 }}>support@techjockey.com</p>
            <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>

          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms</a>
          </div>

          <div className="socials">
            <a className="social" href="#facebook" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>
            </a>
            <a className="social" href="#instagram" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4" fill="#111"/><circle cx="17.5" cy="6.5" r="1.2" fill="#111"/></svg>
            </a>
            <a className="social" href="#twitter" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.7-5.8-.1-1 1-1.4 2.4-1.1 3.7-3.2-.2-6.2-1.7-8.2-4.2-1 1.8-.5 4.1 1.2 5.3-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.8 3.4 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 3.9 2.9A8.7 8.7 0 012 19.5 12.2 12.2 0 008.6 21c7.9 0 12.5-6.7 12.2-12.7.8-.6 1.5-1.4 2.1-2.5z"/></svg>
            </a>
            <a className="social" href="#linkedin" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.5H3.6V20h3.3V8.5zM5.3 3A1.9 1.9 0 103.4 5a1.9 1.9 0 001.9-2zM20.4 13c0-3.1-1.7-4.7-4-4.7-1.8 0-2.6 1-3 1.7V8.5h-3.3V20h3.3v-6.4c0-1.7.3-3.3 2.3-3.3s2 1.8 2 3.4V20H21V13h-.6z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;