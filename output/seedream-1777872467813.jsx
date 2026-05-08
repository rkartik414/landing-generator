import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#ff6b00';
  const bodyBg = '#1a1a1a';

  const [activeProduct, setActiveProduct] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const sectionRef = useRef(null);

  const products = [
    {
      name: 'Seedream 4.5',
      label: 'AI Image Generation',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      image: '/output/generated-assets/ds_1777872216203_5d64f144/14-e1b1bc05a8.jpeg',
      dark: false,
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
      label: 'AI Video Generation',
      headline: 'AI Video Generation with Seedance 1.5 Pro by Bytedance',
      description:
        'Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.',
      image: '/output/generated-assets/ds_1777872216203_5d64f144/12-e35cdce728.png',
      dark: true,
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

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      author: 'Vaishali Saxena',
      role: 'Creative Director',
      image: '/output/generated-assets/ds_1777872216203_5d64f144/03-6d75b26b02.webp',
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      author: 'Vihaan Pandey',
      role: 'Video Producer',
      image: '/output/generated-assets/ds_1777872216203_5d64f144/07-e339995f6f.webp',
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      author: 'Anurag Malhotra',
      role: 'Art Director',
      image: '/output/generated-assets/ds_1777872216203_5d64f144/03-6d75b26b02.webp',
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      author: 'Ashutosh Singh',
      role: 'Marketing Manager',
      image: '/output/generated-assets/ds_1777872216203_5d64f144/07-e339995f6f.webp',
    },
    {
      quote:
        'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.',
      author: 'Shrimmi Saxena',
      role: 'Creative Lead',
      image: '/output/generated-assets/ds_1777872216203_5d64f144/03-6d75b26b02.webp',
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
    'https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4',
    'https://cdn.web.imagine.art/imagine-one/onboarding-videos/text-to-image.mp4',
  ];

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--accent-rgb', '255,107,0');
  }, [accent, primary]);

  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/gsap.min.js';
    script.onload = () => {
      const st = document.createElement('script');
      st.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.5/ScrollTrigger.min.js';
      st.onload = () => {
        if (window.gsap && window.ScrollTrigger) {
          window.gsap.registerPlugin(window.ScrollTrigger);
          initGSAP();
        }
      };
      document.head.appendChild(st);
    };
    document.head.appendChild(script);
  }, []);

  const initGSAP = () => {
    if (!window.gsap || !window.ScrollTrigger) return;
    window.gsap.fromTo('.hero-headline', { opacity: 0, y: 60, skewY: 3 }, { opacity: 1, y: 0, skewY: 0, duration: 1, ease: 'power4.out' });
    window.gsap.fromTo('.hero-sub', { opacity: 0, y: 40 }, { opacity: 1, y: 0, duration: 0.8, delay: 0.3, ease: 'power3.out' });
    window.gsap.fromTo('.hero-chips > *', { opacity: 0, y: 20, scale: 0.9 }, { opacity: 1, y: 0, scale: 1, duration: 0.5, stagger: 0.1, delay: 0.5, ease: 'back.out(1.7)' });
    window.gsap.fromTo('.hero-cta', { opacity: 0, y: 20 }, { opacity: 1, y: 0, duration: 0.6, delay: 0.8, ease: 'power2.out' });
    window.gsap.fromTo('.hero-visual', { opacity: 0, x: 60, scale: 0.95 }, { opacity: 1, x: 0, scale: 1, duration: 1.1, delay: 0.4, ease: 'power3.out' });

    window.gsap.utils.toArray('.gsap-reveal').forEach(el => {
      window.gsap.fromTo(el, { opacity: 0, y: 50 }, {
        opacity: 1, y: 0, duration: 0.8, ease: 'power3.out',
        scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
      });
    });

    window.gsap.utils.toArray('.gsap-stagger-group').forEach(group => {
      const cards = group.querySelectorAll('.gsap-card');
      window.gsap.fromTo(cards, { opacity: 0, y: 40, scale: 0.96 }, {
        opacity: 1, y: 0, scale: 1, duration: 0.6, stagger: 0.12, ease: 'power2.out',
        scrollTrigger: { trigger: group, start: 'top 80%', toggleActions: 'play none none none' }
      });
    });

    const heroBg = document.querySelector('.hero-parallax-bg');
    if (heroBg) {
      window.gsap.to(heroBg, {
        yPercent: 25,
        ease: 'none',
        scrollTrigger: { trigger: heroBg, start: 'top top', end: 'bottom top', scrub: true }
      });
    }

    window.gsap.utils.toArray('.gsap-split').forEach(el => {
      const words = el.textContent.split(' ');
      el.innerHTML = words.map(w => '<span style="display:inline-block;overflow:hidden"><span class="gsap-word">' + w + '</span></span>').join(' ');
      window.gsap.fromTo(el.querySelectorAll('.gsap-word'),
        { yPercent: 110 },
        { yPercent: 0, duration: 0.7, stagger: 0.05, ease: 'power3.out', scrollTrigger: { trigger: el, start: 'top 85%' } }
      );
    });
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-parent').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      document.querySelectorAll('[data-parallax]').forEach(el => {
        const speed = parseFloat(el.getAttribute('data-parallax') || '0.3');
        el.style.transform = 'translateY(' + (scrollY * speed) + 'px)';
      });
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const cursor = document.createElement('div');
    cursor.style.cssText = 'position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:0;background:radial-gradient(circle, rgba(var(--accent-rgb,255,107,0),0.08) 0%, transparent 70%);transform:translate(-50%,-50%);transition:opacity 0.3s ease;';
    document.body.appendChild(cursor);
    const move = e => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
    };
    window.addEventListener('mousemove', move, { passive: true });
    return () => { window.removeEventListener('mousemove', move); cursor.remove(); };
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll('.btn-magnetic');
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

  const css = `
    *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;font-family:Inter,sans-serif;background:${bodyBg};color:#fff}
    a{text-decoration:none;color:inherit} img{max-width:100%}
    .page-wrapper{animation:pageReveal .6s cubic-bezier(.16,1,.3,1) both;position:relative;overflow:hidden}
    .container{width:min(1200px,92%);margin:auto;position:relative;z-index:2}
    .nav{position:sticky;top:0;z-index:50;background:rgba(17,17,17,.82);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:16px 0}
    .brand{font:800 20px Montserrat,sans-serif;color:#fff}
    .brand span{color:var(--accent)}
    .nav-right{display:flex;align-items:center;gap:18px}
    .animated-cta,.ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 22px;border-radius:12px;font-weight:700;transition:.25s ease;border:1px solid transparent}
    .animated-cta{background:var(--accent);color:#fff;box-shadow:0 10px 30px rgba(255,107,0,.22)}
    .animated-cta:hover,.ghost-btn:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(255,107,0,.25)}
    .ghost-btn{background:transparent;border-color:rgba(255,255,255,.18);color:#fff}
    .section{padding:88px 0;position:relative;overflow:hidden}
    .hero{background:linear-gradient(135deg,#1a1a1a 0%,#111 55%,#0f0f0f 100%);min-height:calc(100vh - 76px);display:flex;align-items:center}
    .hero-bg-video,.hero-bg-image,.hero-overlay{position:absolute;inset:0}
    .hero-bg-video video,.hero-bg-image img{width:100%;height:100%;object-fit:cover}
    .hero-overlay{background:linear-gradient(135deg,rgba(0,0,0,.74),rgba(0,0,0,.55));z-index:1}
    .mesh,.orb{position:absolute;border-radius:50%;filter:blur(60px);pointer-events:none}
    .mesh{width:460px;height:460px;background:radial-gradient(circle,rgba(255,107,0,.22),transparent 70%);top:-120px;right:-80px}
    .orb{width:280px;height:280px;background:radial-gradient(circle,rgba(255,107,0,.16),transparent 70%);bottom:-70px;left:-40px}
    .hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:42px;align-items:center}
    .hero h1{font:800 clamp(48px,6vw,68px)/1.05 Montserrat,sans-serif;margin:0 0 18px}
    .hero p{font-size:18px;line-height:1.7;color:#f5f5f5;margin:0}
    .gradient-text{background:linear-gradient(135deg,#ff6b00 0%,#ff6b00 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-chips{display:flex;flex-wrap:wrap;gap:12px;margin:28px 0}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(255,107,0,.35);background:rgba(255,107,0,.08);color:#f5f5f5;font-size:13px}
    .hero-visual{min-height:500px}
    .form-card{background:rgba(255,255,255,.07);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(18px);border-radius:24px;padding:26px;box-shadow:0 24px 60px rgba(0,0,0,.35);position:relative}
    .form-card h3{font:700 28px Montserrat,sans-serif;margin:0 0 16px}
    .field{margin-bottom:14px}
    .field label{display:block;font-size:13px;margin:0 0 8px;color:#ddd}
    .field input{width:100%;padding:14px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.05);color:#fff;outline:none}
    .field input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(255,107,0,.14)}
    .full-btn{width:100%}
    .light-section{background:#f5f5f5;color:#171717}
    .dark-section{background:#1a1a1a;color:#fff}
    .section-title{font:800 clamp(32px,4vw,48px)/1.12 Montserrat,sans-serif;margin:0 0 14px}
    .section-sub{font-size:17px;line-height:1.8;color:inherit;opacity:.85}
    .metrics-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .metric{padding:22px;border-radius:18px;background:#fff;border:1px solid rgba(0,0,0,.08);box-shadow:0 12px 30px rgba(0,0,0,.05)}
    .metric h4{margin:0 0 8px;font:700 18px Montserrat,sans-serif}
    .metric p{margin:0;color:#555;line-height:1.6}
    .marquee-wrapper{overflow:hidden;background:#f5f5f5;padding:18px 0;border-top:1px solid rgba(0,0,0,.08);border-bottom:1px solid rgba(0,0,0,.08)}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 28s linear infinite}
    .marquee-item{font:800 28px Montserrat,sans-serif;margin-right:40px;white-space:nowrap;color:#1a1a1a}
    .tabs-wrap{display:grid;grid-template-columns:320px 1fr;gap:26px;align-items:start}
    .tab-list{display:flex;flex-direction:column;gap:14px}
    .tab-btn{padding:18px;border-radius:18px;border:1px solid rgba(0,0,0,.08);background:#fff;text-align:left;cursor:pointer;transition:.3s}
    .tab-btn.active{border-color:rgba(255,107,0,.45);box-shadow:0 18px 40px rgba(255,107,0,.12)}
    .tab-btn small{display:block;color:var(--accent);font-weight:700;margin-bottom:6px}
    .preview-panel{background:#fff;border:1px solid rgba(0,0,0,.08);border-radius:24px;padding:24px}
    .product-layout{display:grid;grid-template-columns:1fr 1fr;gap:46px;align-items:center}
    .browser-frame{border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,.08);box-shadow:0 24px 60px rgba(0,0,0,.18);background:#f0f0f0}
    .browser-top{height:42px;background:rgba(0,0,0,.06);display:flex;align-items:center;padding:0 14px;gap:8px}
    .dot{width:10px;height:10px;border-radius:50%;background:#d1d1d1}
    .browser-frame img{width:100%;height:420px;object-fit:cover;display:block}
    .browser-frame.dark{background:#0a0a0a}
    .feature-stack{display:grid;gap:12px;margin-top:20px}
    .feature-item{display:flex;gap:12px;padding:14px;border-radius:16px;background:rgba(255,107,0,.06);border:1px solid rgba(255,107,0,.15)}
    .icon{width:42px;height:42px;min-width:42px;border-radius:12px;background:rgba(255,107,0,.14);display:grid;place-items:center}
    .feature-item h4{margin:0 0 4px;font:700 16px Montserrat,sans-serif}
    .feature-item p{margin:0;color:#444;line-height:1.6}
    .feature-item.dark p{color:#cfcfcf}
    .video-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
    .video-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);padding:14px;border-radius:20px}
    .video-card video{width:100%;display:block;border-radius:14px}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
    .price-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:24px;padding:28px;position:relative}
    .price-card.highlight{box-shadow:0 0 0 1px rgba(255,107,0,.4),0 24px 60px rgba(255,107,0,.12)}
    .badge{display:inline-block;padding:8px 12px;border-radius:999px;background:rgba(22,163,74,.18);color:#86efac;font-size:12px;font-weight:700;margin-bottom:16px}
    .price-card h3{font:700 24px Montserrat,sans-serif;margin:0 0 12px}
    .price{font:800 34px Montserrat,sans-serif;margin:12px 0 18px}
    .checklist{display:grid;gap:12px;margin:0 0 22px;padding:0;list-style:none}
    .checklist li{display:flex;gap:10px;line-height:1.6;color:#f1f1f1}
    .testimonials-wrap{overflow:hidden;position:relative}
    .slides{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .slide{min-width:100%;padding:6px}
    .testimonial-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);padding:30px;border-radius:24px}
    .quote-mark{font-size:56px;line-height:1;color:var(--accent);margin-bottom:14px}
    .stars{color:#fbbf24;font-size:20px;margin-bottom:14px}
    .author{display:flex;align-items:center;gap:14px;margin-top:20px}
    .author img{width:56px;height:56px;border-radius:50%;object-fit:cover}
    .dots,.testimonial-nav{display:flex;gap:10px;align-items:center}
    .dots{justify-content:center;margin-top:22px}
    .dots button,.arrow{border:none;cursor:pointer}
    .dots button{width:8px;height:8px;border-radius:999px;background:rgba(255,255,255,.3);transition:.3s}
    .dots button.active{width:24px;background:var(--accent)}
    .testimonial-head{display:flex;justify-content:space-between;gap:20px;align-items:end;margin-bottom:22px}
    .arrow{width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.08);color:#fff}
    .footer{background:#0f0f0f;padding:42px 0;border-top:1px solid rgba(255,255,255,.08)}
    .footer-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:24px;align-items:center}
    .footer-links,.socials{display:flex;gap:16px;flex-wrap:wrap}
    .social{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)}
    .muted{color:#bbb}
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
    .stagger-parent .stagger-child { opacity: 0; transform: translateY(30px); transition: opacity .5s ease, transform .5s ease; }
    .stagger-parent.visible .stagger-child:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0s; }
    .stagger-parent.visible .stagger-child:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: .1s; }
    .stagger-parent.visible .stagger-child:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: .2s; }
    .stagger-parent.visible .stagger-child:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: .3s; }
    .stagger-parent.visible .stagger-child:nth-child(5) { opacity: 1; transform: translateY(0); transition-delay: .4s; }
    .stagger-parent.visible .stagger-child:nth-child(6) { opacity: 1; transform: translateY(0); transition-delay: .5s; }
    .hover-card { transition: transform .3s cubic-bezier(.34,1.56,.64,1), box-shadow .3s ease; cursor:pointer; }
    .hover-card:hover { transform: translateY(-8px) scale(1.01); box-shadow: 0 0 0 1px var(--accent, #ff6b00), 0 24px 48px rgba(255,107,0,.25); }
    .parallax-section { position: relative; overflow: hidden; }
    .parallax-bg { position: absolute; inset: -20%; width: 140%; height: 140%; background-size: cover; background-position: center; will-change: transform; transition: transform 0.1s linear; }
    .parallax-float { animation: floatY 6s ease-in-out infinite; will-change: transform; }
    .parallax-float-slow { animation: floatY 9s ease-in-out infinite; }
    .parallax-float-fast { animation: floatY 4s ease-in-out infinite; }
    @keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-18px)} }
    .parallax-drift { animation: drift 12s ease-in-out infinite; }
    @keyframes drift { 0%,100%{transform:translate(0,0) rotate(0)} 33%{transform:translate(12px,-8px) rotate(1deg)} 66%{transform:translate(-8px,12px) rotate(-1deg)} }
    @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes marqueeScrollReverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
    @keyframes pageReveal { 0%{opacity:0;transform:translateY(12px)} 100%{opacity:1;transform:translateY(0)} }
    section { transition: background-color 0.4s ease; }
    @media (max-width: 991px){
      .hero-grid,.tabs-wrap,.product-layout,.pricing-grid,.footer-grid,.metrics-strip,.video-grid{grid-template-columns:1fr}
      .nav-inner{grid-template-columns:1fr auto;gap:12px}
      .nav-right{justify-content:flex-end}
      .nav .animated-cta{grid-column:1/-1}
      .hero-visual{min-height:auto}
      .browser-frame img{height:320px}
      .testimonial-head{flex-direction:column;align-items:flex-start}
    }
  `;

  const iconSvg = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
      <path d="M12 3l2.6 5.4L20 11l-5.4 2.6L12 19l-2.6-5.4L4 11l5.4-2.6L12 3z" fill={accent}/>
    </svg>
  );

  return (
    <div className="page-wrapper" ref={sectionRef}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700;800&family=Inter:wght@400;500;600&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span>Seedream 4.5 and Seedance 1.5 Pro</span>
          </div>
          <div className="nav-right">
            <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" height="28px" alt="Techjockey" />
          </div>
          <a href="#lead-form" className="animated-cta btn-magnetic">Generate with AI</a>
        </div>
      </nav>

      <section className="section hero parallax-section">
        <div className="hero-bg-video hero-parallax-bg" data-parallax="0.08">
          <video autoPlay muted loop playsInline preload="auto">
            <source src="/output/generated-assets/ds_1777872216203_5d64f144/08-8c93b9a6e6.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="mesh parallax-drift" />
        <div className="orb parallax-float-slow" />
        <div className="container">
          <div className="hero-grid">
            <div className="reveal-left">
              <h1 className="hero-headline">Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models</h1>
              <p className="hero-sub">
                Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
              </p>
              <div className="hero-chips">
                {['AI Image Generation', 'AI Video Generation', 'High-Resolution Output', 'Audio-Visual Synchronization'].map((chip, i) => (
                  <div className="chip" key={i}>{iconSvg}<span>{chip}</span></div>
                ))}
              </div>
              <div className="hero-cta" style={{ display: 'flex', gap: 14, flexWrap: 'wrap' }}>
                <a href="#lead-form" className="animated-cta btn-magnetic">Generate with AI</a>
                <a href="#products" className="ghost-btn">Generate with AI</a>
              </div>
            </div>

            <div className="hero-visual reveal-right" id="lead-form">
              <div className="form-card hover-card">
                <h3>Generate with AI</h3>
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" value={formData.company} onChange={handleChange} />
                  </div>
                  <button type="submit" className="animated-cta btn-magnetic full-btn">Generate with AI</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, i) => [
            <span className="marquee-item" key={`a${i}`}>Seedream 4.5 and Seedance 1.5 Pro <span className="gradient-text">★</span></span>,
            <span className="marquee-item" key={`b${i}`}>AI Image Generation and AI Video Generation <span className="gradient-text">★</span></span>,
          ])}
        </div>
      </div>

      <section className="section light-section">
        <div className="container">
          <div className="reveal gsap-reveal" style={{ maxWidth: 780, marginBottom: 28 }}>
            <h2 className="section-title">For professionals and businesses creating high-quality visual content</h2>
            <p className="section-sub">
              Professionals and businesses creating high-quality visual content, including creative teams, marketers, designers, video producers, art directors, and marketing managers
            </p>
          </div>
          <div className="metrics-strip stagger-parent reveal">
            <div className="metric hover-card stagger-child">
              <h4>Seedream 4.5</h4>
              <p>Generate native images up to 1K–4K resolution with strong visual fidelity.</p>
            </div>
            <div className="metric hover-card stagger-child">
              <h4>Seedance 1.5 Pro</h4>
              <p>Starting at $1,000/month/</p>
            </div>
            <div className="metric hover-card stagger-child">
              <h4>10× Faster Inference</h4>
              <p>Optimized inference pipeline significantly improves generation speed.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="testimonial-head">
            <div className="gsap-reveal">
              <h2 className="section-title gsap-split">How ByteDance generative models create visual content</h2>
              <p className="section-sub">
                From text prompts and visual inputs to synchronized video and sound, Seedream 4.5 and Seedance 1.5 Pro support high-quality visual content creation.
              </p>
            </div>
          </div>
          <div className="video-grid gsap-stagger-group">
            {demoVideos.map((video, i) => (
              <div className="video-card hover-card gsap-card reveal-scale" key={i}>
                <video autoPlay muted loop playsInline preload="auto">
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light-section" id="products">
        <div className="container">
          <div className="tabs-wrap">
            <div className="tab-list reveal-left">
              {products.map((product, i) => (
                <button key={i} className={`tab-btn hover-card ${activeProduct === i ? 'active' : ''}`} onClick={() => setActiveProduct(i)}>
                  <small>{product.label}</small>
                  <strong>{product.name}</strong>
                </button>
              ))}
            </div>

            <div className="preview-panel reveal-right">
              <div className="product-layout">
                <div className="browser-frame">
                  <div className="browser-top"><span className="dot" /><span className="dot" /><span className="dot" /></div>
                  <img src={products[activeProduct].image} alt={products[activeProduct].name} />
                </div>
                <div>
                  <small style={{ color: accent, fontWeight: 700 }}>{products[activeProduct].label}</small>
                  <h2 className="section-title" style={{ color: '#171717' }}>{products[activeProduct].headline}</h2>
                  <div style={{ borderLeft: `3px solid ${accent}`, paddingLeft: 18, marginBottom: 18 }}>
                    <p className="section-sub" style={{ color: '#444' }}>{products[activeProduct].description}</p>
                  </div>
                  <div className="feature-stack">
                    {products[activeProduct].features.map((feature, idx) => (
                      <div key={idx} className="feature-item hover-card">
                        <div className="icon">{iconSvg}</div>
                        <div>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 22 }}>
                    <a href="#lead-form" className="animated-cta btn-magnetic">Generate with AI</a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track marquee-track-reverse">
          {[...Array(2)].flatMap((_, i) => [
            <span className="marquee-item" key={`c${i}`}>AI Image Generation <span className="gradient-text">★</span></span>,
            <span className="marquee-item" key={`d${i}`}>AI Video Generation <span className="gradient-text">★</span></span>,
            <span className="marquee-item" key={`e${i}`}>ByteDance Generative Models <span className="gradient-text">★</span></span>,
          ])}
        </div>
      </div>

      <section className="section dark-section">
        <div className="container">
          <div className="product-layout">
            <div className="reveal-left">
              <small style={{ color: accent, fontWeight: 700 }}>{products[1].label}</small>
              <h2 className="section-title">{products[1].headline}</h2>
              <div style={{ borderLeft: `3px solid ${accent}`, paddingLeft: 18 }}>
                <p className="section-sub">{products[1].description}</p>
              </div>
              <div className="feature-stack stagger-parent reveal" style={{ marginTop: 20 }}>
                {products[1].features.map((feature, idx) => (
                  <div key={idx} className="feature-item dark hover-card stagger-child" style={{ background: 'rgba(255,255,255,.05)', borderColor: 'rgba(255,255,255,.1)' }}>
                    <div className="icon">{iconSvg}</div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 22 }}>
                <a href="#lead-form" className="animated-cta btn-magnetic">Generate with AI</a>
              </div>
            </div>
            <div className="reveal-right">
              <div className="browser-frame dark">
                <div className="browser-top"><span className="dot" /><span className="dot" /><span className="dot" /></div>
                <img src="/output/generated-assets/ds_1777872216203_5d64f144/12-e35cdce728.png" alt="Seedance 1.5 Pro" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section light-section">
        <div className="container">
          <div className="reveal gsap-reveal" style={{ maxWidth: 760, marginBottom: 30 }}>
            <h2 className="section-title">Pricing</h2>
            <p className="section-sub">Explore Seedream 4.5 and Seedance 1.5 Pro pricing details.</p>
          </div>
          <div className="pricing-grid gsap-stagger-group">
            {pricingPlans.map((plan, i) => (
              <div className={`price-card hover-card gsap-card reveal-scale ${i === 1 ? 'highlight' : ''}`} key={i}>
                {i === 1 && <span className="badge">Starting at $1,000/month/</span>}
                <h3>{plan.name}</h3>
                <div className="price" style={{ color: i === 1 ? accent : '#171717' }}>{plan.price || 'Get Quote'}</div>
                <ul className="checklist" style={{ color: i === 1 ? '#fff' : '#222' }}>
                  {plan.includes.map((item, idx) => (
                    <li key={idx}>
                      <span style={{ color: accent, fontWeight: 800 }}>✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#lead-form" className="animated-cta btn-magnetic full-btn">Generate with AI</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section dark-section">
        <div className="container">
          <div className="testimonial-head reveal">
            <div>
              <h2 className="section-title">Testimonials</h2>
              <p className="section-sub">Real feedback on Seedream and Seedance.</p>
            </div>
            <div className="testimonial-nav">
              <button className="arrow" onClick={() => setActiveSlide(prev => (prev - 1 + testimonials.length) % testimonials.length)}>‹</button>
              <button className="arrow" onClick={() => setActiveSlide(prev => (prev + 1) % testimonials.length)}>›</button>
            </div>
          </div>

          <div className="testimonials-wrap">
            <div className="slides" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div className="slide" key={i}>
                  <div className="testimonial-card hover-card reveal-scale">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p style={{ fontSize: 22, lineHeight: 1.7, margin: 0 }}>{t.quote}</p>
                    <div className="author">
                      <img src={t.image} alt={t.author} />
                      <div>
                        <div style={{ fontWeight: 700 }}>{t.author}</div>
                        <div className="muted">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="dots">
              {testimonials.map((_, i) => (
                <button key={i} className={i === activeSlide ? 'active' : ''} onClick={() => setActiveSlide(i)} />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" height="28px" alt="Techjockey" />
            <p className="muted" style={{ marginTop: 16 }}>support@techjockey.com</p>
            <p className="muted">© 2024 Techjockey Infotech Pvt. Ltd.</p>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: 20, flexWrap: 'wrap' }}>
            <div className="socials">
              <a className="social" href="#facebook" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3.3 0-5 1.7-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.7.3-1 1-1z"/></svg>
              </a>
              <a className="social" href="#instagram" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm6.25-1.75a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"/></svg>
              </a>
              <a className="social" href="#twitter" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.3L6.4 22H3.3l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2z"/></svg>
              </a>
              <a className="social" href="#linkedin" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M4.98 3.5A2.48 2.48 0 102.5 5.98 2.48 2.48 0 004.98 3.5zM3 8h4v13H3zm7 0h3.8v1.8h.1A4.18 4.18 0 0117.7 8c4 0 4.7 2.6 4.7 6V21h-4v-6.2c0-1.5 0-3.4-2.1-3.4s-2.4 1.6-2.4 3.3V21h-4z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;