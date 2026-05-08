import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#b3713f';
  const primary = '#b3713f';
  const bodyBg = '#06080c';

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const glowRef = useRef(null);

  const products = [
    {
      name: 'Seedream 4.5',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      media: '/output/generated-assets/ds_1778154314765_f791aabc/12-581339b7d2.png',
      mediaDark: true,
      previewType: 'dashboard',
      features: [
        {
          title: 'Advanced Text–Image Alignment',
          description: 'Accurately translates prompts into visuals with improved semantic understanding.'
        },
        {
          title: 'High-Resolution Output',
          description: 'Generate native images up to 1K–4K resolution with strong visual fidelity.'
        },
        {
          title: 'Superior Typographic Rendering',
          description: 'Optimized for posters, ads, and text-heavy visual designs.'
        },
        {
          title: 'Multi-Image Composition with Identity Preservation',
          description: 'Combines multiple inputs while accurately maintaining subject consistency.'
        },
        {
          title: 'Strong Structural Fidelity',
          description: 'Maintains composition, layout, and scene structure with high precision.'
        }
      ]
    },
    {
      name: 'Seedance 1.5 Pro',
      headline: 'AI Video Generation with Seedance 1.5 Pro by Bytedance',
      description:
        'Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.',
      media: '/output/generated-assets/ds_1778154314765_f791aabc/14-e1b1bc05a8.jpeg',
      mediaDark: false,
      previewType: 'video',
      features: [
        {
          title: 'Text-to-Video Generation',
          description: 'Create videos directly from text prompts.'
        },
        {
          title: 'Audio-Visual Synchronization',
          description: 'Generate video and audio simultaneously with strong multimodal alignment.'
        },
        {
          title: 'Multilingual Lip-Sync',
          description: 'Supports multilingual and dialect-level lip synchronization.'
        },
        {
          title: 'Cinematic Camera Control',
          description: 'Generate videos with dynamic camera movement and cinematic storytelling.'
        },
        {
          title: '10× Faster Inference',
          description: 'Optimized inference pipeline significantly improves generation speed.'
        }
      ]
    }
  ];

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      author: 'Vaishali Saxena',
      role: 'Creative Director'
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      author: 'Vihaan Pandey',
      role: 'Video Producer'
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      author: 'Anurag Malhotra',
      role: 'Art Director'
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      author: 'Ashutosh Singh',
      role: 'Marketing Manager'
    },
    {
      quote:
        'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.',
      author: 'Shrimmi Saxena',
      role: 'Creative Lead'
    }
  ];

  const pricing = [
    {
      name: 'Seedream 4.5 (AI Image Generation)',
      price: '',
      originalPrice: '',
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
      includes: [
        'Text-to-video generation with cinematic output',
        'Native audio + video generation (synchronized)',
        'Multilingual lip-sync capabilities',
        'Fast inference for quicker video production'
      ]
    }
  ];

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);

    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && e.target.classList.add('visible')),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const loadScript = (src) =>
      new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = resolve;
        document.body.appendChild(s);
      });

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const gsap = window.gsap;
          const ScrollTrigger = window.ScrollTrigger;
          gsap.registerPlugin(ScrollTrigger);

          if (!glowRef.current) {
            const glow = document.createElement('div');
            glow.className = 'cursor-glow';
            document.body.appendChild(glow);
            glowRef.current = glow;
            window.addEventListener('mousemove', (e) => {
              gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
            });
          }

          gsap.utils.toArray('.scene-expand').forEach((scene) => {
            gsap.to(scene, {
              width: '100%',
              borderRadius: '0px',
              ease: 'none',
              scrollTrigger: { trigger: scene, start: 'top 80%', end: 'top 20%', scrub: 1.2 }
            });
            const media = scene.querySelector('img, video');
            if (media) {
              gsap.to(media, {
                scale: 1,
                ease: 'none',
                scrollTrigger: { trigger: scene, start: 'top 80%', end: 'top 20%', scrub: 1.2 }
              });
            }
          });

          gsap.utils.toArray('.zoom-reveal').forEach((el) => {
            const img = el.querySelector('img, video');
            if (!img) return;
            gsap.to(img, {
              scale: 1,
              ease: 'power2.out',
              duration: 1.2,
              scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
            });
          });

          gsap.utils.toArray('[data-depth]').forEach((el) => {
            const depth = parseFloat(el.dataset.depth) || 0.3;
            gsap.to(el, {
              y: () => -(window.innerHeight * depth * 0.6),
              ease: 'none',
              scrollTrigger: {
                trigger: el.closest('section') || el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            });
          });

          const heroBg = document.querySelector('.hero-cinematic-bg');
          if (heroBg) {
            gsap.to(heroBg, {
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: heroBg.closest('section'),
                start: 'top top',
                end: 'bottom top',
                scrub: 2
              }
            });
          }

          gsap.utils.toArray('.clip-reveal').forEach((el) => {
            gsap.to(el, {
              clipPath: 'inset(0% 0 0 0)',
              ease: 'power3.out',
              duration: 1.1,
              scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' }
            });
          });

          gsap.utils.toArray('.stagger-parent').forEach((parent) => {
            gsap.to(parent.children, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: { trigger: parent, start: 'top 80%', toggleActions: 'play none none none' }
            });
          });

          gsap.utils.toArray('.split-text').forEach((el) => {
            const text = el.getAttribute('data-text') || el.textContent;
            el.innerHTML = text
              .split('')
              .map((char) =>
                char === ' '
                  ? ' '
                  : `<span class="char" style="display:inline-block;will-change:transform,opacity">${char}</span>`
              )
              .join('');
            gsap.from(el.querySelectorAll('.char'), {
              y: 80,
              opacity: 0,
              rotateX: -40,
              stagger: 0.025,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' }
            });
          });

          gsap.utils.toArray('.text-reveal-mask').forEach((mask) => {
            const inner = mask.querySelector('.text-reveal-inner');
            if (!inner) return;
            gsap.to(inner, {
              y: '0%',
              duration: 1,
              ease: 'power4.out',
              scrollTrigger: { trigger: mask, start: 'top 85%', toggleActions: 'play none none reverse' }
            });
          });

          document.querySelectorAll('.btn-magnetic').forEach((btn) => {
            btn.addEventListener('mousemove', (e) => {
              const rect = btn.getBoundingClientRect();
              const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
              const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
              gsap.to(btn, { x, y, duration: 0.4, ease: 'power2.out' });
            });
            btn.addEventListener('mouseleave', () => {
              gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
            });
          });

          gsap.utils.toArray('[data-count]').forEach((el) => {
            const target = parseFloat(el.dataset.count);
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            gsap.from({ val: 0 }, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              snap: { val: 0.1 },
              scrollTrigger: { trigger: el, start: 'top 80%', once: true },
              onUpdate: function () {
                const v = this.targets()[0].val;
                el.textContent = prefix + (Number.isInteger(target) ? Math.round(v) : v.toFixed(1)) + suffix;
              }
            });
          });
        });
      });
    };

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js')
    ]).then(initGSAP);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => e.preventDefault();

  const Icon = ({ type }) => {
    const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: accent, strokeWidth: 1.8, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (type === 'image') return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="8.5" cy="10" r="1.5"/><path d="M21 16l-5-5-8 8"/></svg>;
    if (type === 'video') return <svg {...common}><rect x="3" y="5" width="15" height="14" rx="2"/><path d="M18 10l3-2v8l-3-2z"/></svg>;
    if (type === 'audio') return <svg {...common}><path d="M11 5L6 9H3v6h3l5 4V5z"/><path d="M15.5 8.5a5 5 0 010 7"/><path d="M17.5 6a8 8 0 010 12"/></svg>;
    if (type === 'sync') return <svg {...common}><path d="M21 12a9 9 0 01-15.5 6.4"/><path d="M3 12A9 9 0 0118.5 5.6"/><path d="M3 16v-4h4"/><path d="M21 8v4h-4"/></svg>;
    return <svg {...common}><path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z"/></svg>;
  };

  const css = `
    :root{--accent:${accent};--primary:${primary}}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:${bodyBg};color:#f9fafb;font-family:Inter,sans-serif}
    a{text-decoration:none;color:inherit}
    img,video{max-width:100%}
    .lp{background:${bodyBg};color:#f9fafb;overflow-x:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{position:relative;padding:92px 0}
    .bg-1{background:#06080c}.bg-2{background:#0f1117}
    .gradient-text{background:linear-gradient(135deg,${accent} 0%,${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .nav{position:sticky;top:0;z-index:50;background:rgba(6,8,12,.75);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0}
    .nav-left{font-weight:800;font-size:20px;color:#fff;display:flex;align-items:center;min-width:0}
    .nav-right{display:flex;align-items:center;gap:16px;flex-shrink:0}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:10px;background:${accent};color:#fff;font-weight:700;border:1px solid rgba(255,255,255,.12);transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(179,113,63,.28);background:${primary}}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:10px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.04);color:#fff;font-weight:600;transition:transform .25s ease,box-shadow .25s ease,border-color .25s ease}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.22);border-color:rgba(255,255,255,.24)}
    .hero{min-height:100vh;display:flex;align-items:center;padding:110px 0 80px;position:relative;overflow:hidden}
    .hero-media-bg,.hero-overlay{position:absolute;inset:0}
    .hero-media-bg video,.hero-media-bg img{width:100%;height:100%;object-fit:cover;display:block}
    .hero-overlay{background:linear-gradient(90deg,rgba(6,8,12,.86) 0%,rgba(6,8,12,.68) 45%,rgba(6,8,12,.52) 100%)}
    .hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.15fr .85fr;gap:36px;align-items:center}
    .banner-title{font-family:'IBM Plex Mono',monospace;font-size:clamp(48px,6vw,72px);line-height:1.05;letter-spacing:-.02em;margin:0 0 18px;word-break:normal;overflow-wrap:normal;hyphens:none;white-space:normal;max-width:900px}
    .hero-copy p{font-size:18px;line-height:1.7;color:#c8ced8;margin:0;max-width:700px}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 28px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(179,113,63,.3);background:rgba(179,113,63,.12);color:#d5d9e1;font-size:13px}
    .hero-cta{display:flex;flex-wrap:wrap;gap:14px}
    .hero-visual{display:flex;align-items:center;justify-content:center;min-height:500px}
    .form-card{width:100%;max-width:430px;padding:28px;border-radius:22px;background:rgba(15,17,23,.86);border:1px solid rgba(255,255,255,.1);box-shadow:0 30px 60px rgba(0,0,0,.35);backdrop-filter:blur(20px)}
    .form-card h3{margin:0 0 18px;font-family:'IBM Plex Mono',monospace;font-size:24px}
    .field{margin-bottom:14px}
    .field label{display:block;font-size:13px;color:#b5bcc8;margin-bottom:8px}
    .field input{width:100%;height:48px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#fff;padding:0 14px;outline:none;transition:border-color .2s ease,box-shadow .2s ease}
    .field input:focus{border-color:${accent};box-shadow:0 0 0 3px rgba(179,113,63,.16)}
    .full-btn{width:100%}
    .metrics-strip{display:flex;gap:16px;justify-content:center}
    .metric-card{flex:1;padding:22px;border-radius:18px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);text-align:center}
    .metric-num{font-family:'IBM Plex Mono',monospace;font-size:28px;color:${accent};margin-bottom:8px}
    .metric-label{color:#c3cad3;font-size:14px}
    .section-head{text-align:center;max-width:820px;margin:0 auto 34px}
    .section-head h2{font-family:'IBM Plex Mono',monospace;font-size:clamp(32px,4vw,46px);line-height:1.15;margin:0 0 12px}
    .section-head p{color:#aab1bc;line-height:1.7;margin:0}
    .tabs-wrap{display:grid;grid-template-columns:300px 1fr;gap:28px;align-items:start}
    .tabs-nav{display:flex;flex-direction:column;gap:14px}
    .tab-btn{padding:18px;border-radius:18px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#fff;text-align:left;cursor:pointer;transition:.25s ease}
    .tab-btn.active,.tab-btn:hover{border-color:rgba(179,113,63,.4);background:rgba(179,113,63,.12);transform:translateY(-2px)}
    .tab-btn small{display:block;color:#aab1bc;margin-top:8px;line-height:1.5}
    .product-panel{padding:26px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);box-shadow:0 18px 44px rgba(0,0,0,.24)}
    .product-split{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:center}
    .tag{display:inline-flex;padding:8px 12px;border-radius:999px;background:rgba(179,113,63,.12);border:1px solid rgba(179,113,63,.3);color:${accent};font-size:12px;font-weight:700;margin-bottom:14px}
    .product-copy h3{font-family:'IBM Plex Mono',monospace;font-size:32px;line-height:1.2;margin:0 0 14px}
    .desc-line{border-left:2px solid rgba(255,255,255,.14);padding-left:18px;margin-bottom:22px}
    .desc-line p{margin:0;color:#c3cad3;line-height:1.75}
    .feature-list{display:flex;flex-direction:column;gap:12px;margin-bottom:24px}
    .feature-item{display:flex;gap:14px;padding:14px 0;border-bottom:1px solid rgba(255,255,255,.08)}
    .feature-item:last-child{border-bottom:none}
    .icon-wrap{width:42px;height:42px;min-width:42px;border-radius:12px;background:rgba(179,113,63,.12);border:1px solid rgba(179,113,63,.28);display:flex;align-items:center;justify-content:center}
    .feature-text h4{margin:0 0 4px;font-size:16px}
    .feature-text p{margin:0;color:#aeb6c2;line-height:1.6;font-size:14px}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:22px;border:1px solid rgba(255,255,255,.1);box-shadow:0 22px 48px rgba(0,0,0,.28)}
    .browser-frame.dark{background:#0a0a0a}
    .browser-frame.light{background:#f8f8f8}
    .browser-top{display:flex;align-items:center;gap:8px;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,.08)}
    .browser-top.light{border-bottom:1px solid rgba(0,0,0,.08)}
    .dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.35)}
    .browser-frame.light .dot{background:rgba(0,0,0,.28)}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .dashboard-visual{padding:18px;height:420px;background:linear-gradient(180deg,rgba(179,113,63,.16),rgba(255,255,255,.02));display:flex;flex-direction:column;gap:16px}
    .dash-row{display:flex;gap:16px}
    .dash-card{flex:1;padding:18px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)}
    .dash-card h5{margin:0 0 6px;font-size:14px;color:#d8dde6}
    .dash-card span{font-family:'IBM Plex Mono',monospace;color:${accent};font-size:20px}
    .dash-bar{height:10px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden;margin-top:12px}
    .dash-bar i{display:block;height:100%;background:linear-gradient(90deg,${accent},rgba(179,113,63,.4))}
    .video-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .video-card{border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04)}
    .video-card video{display:block;width:100%;height:220px;object-fit:cover}
    .video-card .cap{padding:12px 14px;font-size:14px;color:#c6ccd5}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
    .price-card{padding:28px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);box-shadow:0 18px 42px rgba(0,0,0,.25);display:flex;flex-direction:column}
    .price-card.highlight{border-color:rgba(179,113,63,.45);box-shadow:0 24px 54px rgba(179,113,63,.12)}
    .badge-green{display:inline-flex;align-items:center;padding:7px 10px;border-radius:999px;background:rgba(34,197,94,.16);color:#86efac;border:1px solid rgba(34,197,94,.28);font-size:12px;font-weight:700;margin-bottom:14px}
    .price-card h3{font-family:'IBM Plex Mono',monospace;font-size:26px;line-height:1.25;margin:0 0 10px}
    .price-line{margin:0 0 18px;color:#f9fafb;font-size:30px;font-weight:800}
    .strike{color:#7f8794;text-decoration:line-through;font-size:16px;margin-left:10px}
    .price-card ul{list-style:none;padding:0;margin:0 0 24px;display:flex;flex-direction:column;gap:12px}
    .price-card li{display:flex;gap:10px;color:#c5ccd6;line-height:1.6}
    .check{color:#86efac;font-weight:800}
    .testi-wrap{position:relative;overflow:hidden}
    .testi-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testi-slide{min-width:100%;padding:8px}
    .testi-card{padding:34px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);display:grid;grid-template-columns:110px 1fr;gap:24px;align-items:start}
    .avatar{width:96px;height:96px;border-radius:20px;object-fit:cover;border:1px solid rgba(255,255,255,.1)}
    .quote-mark{font-size:56px;line-height:1;color:${accent};margin-bottom:8px}
    .stars{color:#f5c451;letter-spacing:2px;margin-bottom:10px}
    .testi-card p{margin:0 0 16px;color:#d8dde6;font-size:20px;line-height:1.75}
    .author{font-weight:800}
    .role{color:#9ca3af;font-size:14px}
    .slider-controls{display:flex;align-items:center;justify-content:space-between;margin-top:20px}
    .arrow-btn{width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#fff;cursor:pointer;transition:.25s ease}
    .arrow-btn:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(0,0,0,.25)}
    .dots{display:flex;justify-content:center;gap:8px}
    .dot-btn{height:8px;border-radius:999px;border:none;cursor:pointer;transition:.3s ease;background:rgba(255,255,255,.22)}
    .dot-btn.active{width:26px;background:${accent}} .dot-btn:not(.active){width:8px}
    .footer{padding:34px 0;border-top:1px solid rgba(255,255,255,.08);background:#06080c}
    .footer-top{display:flex;justify-content:space-between;gap:18px;align-items:center;flex-wrap:wrap;margin-bottom:18px}
    .footer-left,.footer-right{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
    .footer-mail{color:#c5ccd6}
    .footer-bottom{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;padding-top:16px;border-top:1px solid rgba(255,255,255,.08);color:#9ca3af;font-size:14px}
    .legal-links,.socials{display:flex;gap:14px;align-items:center}
    .socials a{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.04)}
    .socials a:hover{transform:translateY(-2px)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .scene-expand{width:75%;margin:0 auto;border-radius:24px;overflow:hidden;will-change:width,border-radius}
    .scene-expand img,.scene-expand video{width:100%;height:100%;object-fit:cover;transform:scale(1.08);will-change:transform}
    .zoom-reveal{overflow:hidden;border-radius:16px}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.15);will-change:transform;transition:transform 0s}
    [data-depth]{will-change:transform}
    .depth-foreground{position:relative;z-index:3}
    .depth-midground{position:relative;z-index:2}
    .depth-background{position:absolute;inset:0;z-index:1}
    .clip-reveal{clip-path:inset(100% 0 0 0);will-change:clip-path}
    .hero-cinematic-bg{transform:scale(1.06);transform-origin:center center;will-change:transform}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
    @keyframes driftLeft{0%,100%{transform:translateX(0) translateY(0)}33%{transform:translateX(-12px) translateY(-8px)}66%{transform:translateX(8px) translateY(-14px)}}
    .float-ambient{animation:floatY 6s ease-in-out infinite}
    .float-drift{animation:driftLeft 10s ease-in-out infinite}
    .stagger-parent>*{opacity:0;transform:translateY(32px);will-change:opacity,transform}
    .glass-card{background:rgba(255,255,255,.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.1);border-radius:20px}
    .cursor-glow{position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);background:radial-gradient(circle, rgba(179,113,63,.12) 0%, transparent 70%);transition:opacity .3s ease}
    .orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(10px)}
    .orb.one{top:8%;left:-80px;width:280px;height:280px;background:radial-gradient(circle,rgba(179,113,63,.2),transparent 70%)}
    .orb.two{right:-80px;bottom:8%;width:320px;height:320px;background:radial-gradient(circle,rgba(179,113,63,.15),transparent 70%)}
    .data-lines{position:absolute;inset:0;opacity:.28;background-image:linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px);background-size:48px 48px;mask-image:linear-gradient(to bottom, transparent, black 20%, black 80%, transparent)}
    @media (max-width: 991px){
      .hero-grid,.tabs-wrap,.product-split,.pricing-grid,.testi-card{grid-template-columns:1fr}
      .hero{min-height:auto}
      .hero-visual{min-height:auto}
      .video-grid{grid-template-columns:1fr 1fr}
    }
    @media (max-width: 640px){
      .container{width:min(100% - 24px,1180px)}
      .nav-inner{gap:10px}
      .nav-left{font-size:16px}
      .banner-title{font-size:48px}
      .hero-copy p{font-size:16px}
      .section{padding:72px 0}
      .video-grid{grid-template-columns:1fr}
      .testi-card{padding:24px}
      .testi-card p{font-size:17px}
    }
  `;

  return (
    <div className="lp">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@700&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="nav-left">
            <span style={{ fontWeight: 800, fontSize: '20px' }}>Seedream 4.5 and Seedance 1.5 Pro</span>
          </div>
          <div className="nav-right">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <a href="#lead-form" className="animated-cta">
              Get Free Consultation
            </a>
          </div>
        </div>
      </nav>

      <section className="hero bg-1 noise-overlay">
        <div className="hero-media-bg hero-cinematic-bg depth-background" data-depth="0.4">
          <video autoPlay muted loop playsInline preload="auto">
            <source src="/output/generated-assets/ds_1778154314765_f791aabc/08-8c93b9a6e6.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="data-lines" />
        <div className="orb one float-drift" />
        <div className="orb two float-ambient" />
        <div className="container hero-grid">
          <div className="hero-copy depth-foreground" data-depth="0.15">
            <h1
              className="banner-title split-text"
              data-text="Create High-Quality AI Images & Videos with ByteDance Generative Models"
            >
              Create High-Quality AI Images & Videos with ByteDance Generative Models
            </h1>
            <p className="reveal visible">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation)
              and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by
              ByteDance for high-quality visual content creation.
            </p>
            <div className="chips reveal visible">
              <div className="chip"><Icon type="image" /><span>AI Image Generation</span></div>
              <div className="chip"><Icon type="video" /><span>AI Video Generation</span></div>
              <div className="chip"><Icon type="sync" /><span>Multimodal Editing</span></div>
              <div className="chip"><Icon type="audio" /><span>Audio-Visual Synchronization</span></div>
              <div className="chip"><Icon type="star" /><span>High-Resolution Output</span></div>
            </div>
            <div className="hero-cta reveal visible">
              <a href="#lead-form" className="animated-cta btn-magnetic">
                Get Free Consultation
              </a>
              <a href="#products" className="ghost-btn">
                Generate with AI
              </a>
            </div>
          </div>

          <div className="hero-visual" id="lead-form">
            <div className="form-card glass-card">
              <h3>Get Free Consultation</h3>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" />
                </div>
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Enter your company" />
                </div>
                <button type="submit" className="animated-cta full-btn">
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-2 clip-reveal">
        <div className="container">
          <div className="metrics-strip stagger-parent">
            <div className="metric-card glass-card">
              <div className="metric-num">2</div>
              <div className="metric-label">ByteDance generative models</div>
            </div>
            <div className="metric-card glass-card">
              <div className="metric-num" data-count="4" data-suffix="K">4K</div>
              <div className="metric-label">High-resolution image quality</div>
            </div>
            <div className="metric-card glass-card">
              <div className="metric-num" data-count="10" data-suffix="×">10×</div>
              <div className="metric-label">Faster inference for video production</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-1" id="products">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Explore <span className="gradient-text">Seedream 4.5</span> and{' '}
              <span className="gradient-text">Seedance 1.5 Pro</span>
            </h2>
            <p>
              Professionals and businesses creating high-quality visual content, including creative teams,
              marketers, designers, video producers, art directors, and marketing managers
            </p>
          </div>

          <div className="tabs-wrap">
            <div className="tabs-nav stagger-parent">
              {products.map((item, idx) => (
                <button
                  key={item.name}
                  className={`tab-btn ${activeProduct === idx ? 'active' : ''}`}
                  onClick={() => setActiveProduct(idx)}
                >
                  <strong>{item.name}</strong>
                  <small>{item.headline}</small>
                </button>
              ))}
            </div>

            <div className="product-panel glass-card reveal">
              <div className="product-split">
                <div className={activeProduct === 0 ? 'scene-expand' : ''}>
                  <div className="zoom-reveal">
                    <div className={`browser-frame ${products[activeProduct].mediaDark ? 'dark' : 'light'}`}>
                      <div className={`browser-top ${products[activeProduct].mediaDark ? '' : 'light'}`}>
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                      </div>
                      <img src={products[activeProduct].media} alt={products[activeProduct].name} />
                    </div>
                  </div>
                </div>

                <div className="product-copy" data-depth="0.15">
                  <span className="tag">{products[activeProduct].name}</span>
                  <h3>{products[activeProduct].headline}</h3>
                  <div className="desc-line">
                    <p>{products[activeProduct].description}</p>
                  </div>
                  <div className="feature-list stagger-parent">
                    {products[activeProduct].features.map((feature, i) => (
                      <div className="feature-item" key={feature.title}>
                        <div className="icon-wrap">
                          <Icon type={activeProduct === 0 ? (i % 2 === 0 ? 'image' : 'star') : i % 2 === 0 ? 'video' : 'sync'} />
                        </div>
                        <div className="feature-text">
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <a href="#lead-form" className="animated-cta btn-magnetic">
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-2 pin-scene">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Video Gallery for <span className="gradient-text">Seedance 1.5 Pro</span>
            </h2>
            <p>
              Native audio-visual generation, synchronized creation of video and sound together,
              dynamic camera movement and cinematic storytelling.
            </p>
          </div>

          <div className="video-grid stagger-parent">
            {[
              'https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4',
              'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4',
              'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ConsistentCharacters.mp4'
            ].map((videoUrl, idx) => (
              <div className="video-card glass-card zoom-reveal" key={idx} data-depth="0.15">
                <video autoPlay muted loop playsInline preload="auto">
                  <source src={videoUrl} type="video/mp4" />
                </video>
                <div className="cap">
                  {idx === 0 && 'Text-to-Video Generation'}
                  {idx === 1 && 'Audio-Visual Synchronization'}
                  {idx === 2 && 'Cinematic Camera Control'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-1">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Pricing for <span className="gradient-text">AI Image</span> and{' '}
              <span className="gradient-text">AI Video Generation</span>
            </h2>
            <p>Choose the plan based on your image generation and video generation requirements.</p>
          </div>

          <div className="pricing-grid stagger-parent">
            {pricing.map((plan, i) => (
              <div key={plan.name} className={`price-card glass-card ${i === 1 ? 'highlight' : ''}`}>
                <span className="badge-green">{i === 1 ? 'Starting plan available' : 'Consultation available'}</span>
                <h3>{plan.name}</h3>
                <div className="price-line">
                  {plan.price ? plan.price : 'Get Quote'}
                  {plan.originalPrice ? <span className="strike">{plan.originalPrice}</span> : null}
                </div>
                <ul>
                  {plan.includes.map((item) => (
                    <li key={item}>
                      <span className="check">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <a href="#lead-form" className="animated-cta full-btn">
                  Get Free Consultation
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-2">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              What creative teams say about <span className="gradient-text">Seedream</span> and{' '}
              <span className="gradient-text">Seedance</span>
            </h2>
            <p>Feedback from creative professionals, video producers, art directors, and marketing managers.</p>
          </div>

          <div className="testi-wrap">
            <div
              className="testi-track"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <div className="testi-slide" key={i}>
                  <div className="testi-card glass-card">
                    <div>
                      <img
                        src="/output/generated-assets/ds_1778154314765_f791aabc/10-0518458b81.webp"
                        alt={item.author}
                        className="avatar"
                      />
                    </div>
                    <div>
                      <div className="quote-mark">❝</div>
                      <div className="stars">★★★★★</div>
                      <p>{item.quote}</p>
                      <div className="author">{item.author}</div>
                      <div className="role">{item.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-controls">
              <button
                className="arrow-btn"
                onClick={() => setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              >
                ←
              </button>
              <div className="dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`dot-btn ${i === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(i)}
                  />
                ))}
              </div>
              <button
                className="arrow-btn"
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-left">
              <img
                src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
                height="28px"
                alt="Techjockey"
              />
              <a className="footer-mail" href="mailto:support@techjockey.com">
                support@techjockey.com
              </a>
            </div>
            <div className="footer-right socials">
              <a href="https://www.facebook.com/TechjockeyInfo/" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.5V4.8c-.3 0-1.2-.1-2.4-.1-2.4 0-4 1.4-4 4.2V11H8v3h2.3v8h3.2z"/></svg>
              </a>
              <a href="https://www.instagram.com/techjockey/" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm11.5 1.5a1 1 0 110 2 1 1 0 010-2zM12 7a5 5 0 110 10 5 5 0 010-10zm0 2a3 3 0 100 6 3 3 0 000-6z"/></svg>
              </a>
              <a href="https://twitter.com/TechjockeyInfo" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.8-2.6 1-1.6-1.7-4.5-1.1-5.3 1.2-.2.5-.2 1-.1 1.5-3-.2-5.8-1.6-7.6-3.8-1 1.7-.5 3.9 1.2 5-.6 0-1.2-.2-1.7-.5 0 1.9 1.4 3.6 3.3 4-.6.2-1.2.2-1.8.1.5 1.6 2 2.8 3.8 2.8A7.8 7.8 0 012 19.5 11 11 0 008 21c7.3 0 11.5-6.1 11.2-11.6.8-.5 1.5-1.2 2-1.9z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/techjockey-infotech-pvt-ltd/" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.5H3.8V20h3.1V8.5zM5.3 3A1.8 1.8 0 103 4.8 1.8 1.8 0 005.3 3zM20.2 13c0-3.1-1.7-4.6-4-4.6-1.8 0-2.6 1-3 1.7V8.5h-3.1c0 1 .1 11.5 0 11.5h3.1v-6.4c0-.3 0-.7.1-.9.2-.7.8-1.5 1.8-1.5 1.3 0 1.9 1 1.9 2.5V20H20c.1-1-.1-7 0-7z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2024 Techjockey Infotech Pvt. Ltd.</div>
            <div className="legal-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-condition">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;