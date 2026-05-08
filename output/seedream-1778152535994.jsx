import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#b3713f';
  const primary = '#b3713f';
  const bodyBg = '#06080c';

  const [activeProduct, setActiveProduct] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const cursorRef = useRef(null);

  const ctas = [
    {
      text: 'Get Started',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software'
    },
    {
      text: 'Get Started',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software'
    },
    {
      text: 'Get Started',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software'
    },
    {
      text: 'Get Started',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software'
    },
    {
      text: 'Get Started',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software'
    }
  ];

  const products = [
    {
      name: 'Seedream 4.5',
      label: 'Feature 1',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      image: '/output/generated-assets/ds_1778152145725_67cc712a/01-3965757185.jpeg',
      dark: true,
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
      label: 'Additional Feature:-',
      headline: 'AI Video Generation with Seedance 1.5 Pro by Bytedance',
      description:
        'Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.',
      image: '/output/generated-assets/ds_1778152145725_67cc712a/03-f578e07b46.jpeg',
      dark: false,
      features: [
        {
          title: 'Key Capabilities of Seedance 1.5 Pro',
          description: 'Seedance enables professional-grade AI video production with narrative coherence and realistic motion.'
        },
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

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const scripts = [
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'
    ];

    const loadedScripts = [];
    scripts.forEach((src) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        document.body.appendChild(s);
        loadedScripts.push(s);
      }
    });

    const initCinematic = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      const existingGlow = document.querySelector('.cursor-glow');
      const glow = existingGlow || document.createElement('div');
      if (!existingGlow) {
        glow.className = 'cursor-glow';
        document.body.appendChild(glow);
      }

      const moveHandler = (e) => {
        gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
      };
      window.addEventListener('mousemove', moveHandler);

      gsap.utils.toArray('.scene-expand').forEach((scene) => {
        gsap.to(scene, {
          width: '100%',
          borderRadius: '0px',
          ease: 'none',
          scrollTrigger: {
            trigger: scene,
            start: 'top 80%',
            end: 'top 20%',
            scrub: 1.2
          }
        });
        const media = scene.querySelector('img, video');
        if (media) {
          gsap.to(media, {
            scale: 1,
            ease: 'none',
            scrollTrigger: {
              trigger: scene,
              start: 'top 80%',
              end: 'top 20%',
              scrub: 1.2
            }
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
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
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
          scrollTrigger: {
            trigger: el,
            start: 'top 80%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      gsap.utils.toArray('.stagger-parent').forEach((parent) => {
        gsap.to(parent.children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: {
            trigger: parent,
            start: 'top 80%',
            toggleActions: 'play none none none'
          }
        });
      });

      gsap.utils.toArray('.split-text').forEach((el) => {
        if (el.dataset.splitDone) return;
        const text = el.textContent;
        el.dataset.splitDone = 'true';
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
          scrollTrigger: {
            trigger: el,
            start: 'top 85%',
            toggleActions: 'play none none none'
          }
        });
      });

      gsap.utils.toArray('.text-reveal-mask').forEach((mask) => {
        const inner = mask.querySelector('.text-reveal-inner');
        if (!inner) return;
        gsap.to(inner, {
          y: '0%',
          duration: 1.0,
          ease: 'power4.out',
          scrollTrigger: {
            trigger: mask,
            start: 'top 85%',
            toggleActions: 'play none none reverse'
          }
        });
      });

      document.querySelectorAll('.btn-magnetic').forEach((btn) => {
        if (btn.dataset.magneticBound) return;
        btn.dataset.magneticBound = 'true';
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

      gsap.utils.toArray('.pin-scene').forEach((scene) => {
        ScrollTrigger.create({
          trigger: scene,
          start: 'top top',
          end: '+=600',
          pin: true,
          pinSpacing: true
        });
      });

      gsap.utils.toArray('[data-count]').forEach((el) => {
        const target = parseFloat(el.dataset.count);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        gsap.fromTo(
          { val: 0 },
          { val: 0 },
          {
            val: target,
            duration: 2,
            ease: 'power2.out',
            snap: { val: 0.1 },
            scrollTrigger: { trigger: el, start: 'top 80%', once: true },
            onUpdate: function () {
              el.textContent =
                prefix + Math.max(0, this.targets()[0].val).toFixed(target % 1 ? 1 : 0).replace('.0', '') + suffix;
            }
          }
        );
      });

      return () => {
        window.removeEventListener('mousemove', moveHandler);
      };
    };

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          initCinematic();
        });
      });
    };

    const t = setTimeout(initGSAP, 700);

    return () => {
      clearTimeout(t);
      observer.disconnect();
      loadedScripts.forEach((s) => s.remove());
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};--accent-glow:rgba(179,113,63,.18)}
    *{box-sizing:border-box} html,body,#root{margin:0;padding:0;background:${bodyBg};color:#f9fafb;scroll-behavior:smooth}
    body{font-family:'Inter',sans-serif}
    a{text-decoration:none;color:inherit}
    img,video{max-width:100%}
    .page{background:${bodyBg};overflow-x:hidden}
    .container{width:min(1200px,calc(100% - 32px));margin:0 auto;position:relative;z-index:2}
    .section{padding:92px 0;position:relative;overflow:hidden}
    .bg-1{background:#06080c}.bg-2{background:#0f1117}
    .topbar{position:sticky;top:0;z-index:50;background:rgba(6,8,12,.78);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:78px}
    .nav-left{display:flex;align-items:center;gap:12px;min-width:0}
    .nav-center{display:flex;align-items:center;gap:16px;margin-left:auto}
    .nav-right{display:flex;align-items:center}
    .brand-name{font-weight:800;font-size:20px;color:#fff;line-height:1.2}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:13px 24px;border-radius:10px;background:${accent};color:#fff;font-weight:700;border:1px solid rgba(255,255,255,.12);transition:transform .25s ease, box-shadow .25s ease, background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(179,113,63,.22);background:#c17c47}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:13px 24px;border-radius:10px;background:rgba(255,255,255,.04);color:#fff;font-weight:700;border:1px solid rgba(255,255,255,.14);transition:transform .25s ease, box-shadow .25s ease, background .25s ease}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(0,0,0,.25);background:rgba(255,255,255,.08)}
    .hero{min-height:calc(100vh - 78px);display:flex;align-items:center;background:#06080c}
    .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center}
    .hero-copy{position:relative;z-index:3}
    .eyebrow{display:inline-flex;align-items:center;gap:10px;padding:8px 14px;border:1px solid rgba(179,113,63,.35);background:rgba(179,113,63,.12);border-radius:999px;color:#e8d1c0;font-size:13px;font-weight:600;margin-bottom:18px}
    .banner-title{font-family:'IBM Plex Mono',monospace;font-size:clamp(48px,7vw,72px);line-height:1.02;letter-spacing:-.03em;margin:0 0 18px;word-break:normal;overflow-wrap:normal;hyphens:none;white-space:normal;max-width:100%}
    .hero p{font-size:18px;line-height:1.75;color:#9ca3af;max-width:720px;margin:0}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:26px}
    .chip{display:flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;border:1px solid rgba(179,113,63,.3);background:rgba(179,113,63,.09);color:#d1d5db;font-size:13px}
    .hero-visual{position:relative;min-height:540px;display:flex;align-items:center;justify-content:center}
    .hero-panel{position:relative;width:100%;height:100%;min-height:540px;border-radius:28px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:#0f1117;box-shadow:0 28px 70px rgba(0,0,0,.45)}
    .hero-cinematic-bg{position:absolute;inset:0;transform:scale(1.06);transform-origin:center center}
    .hero-cinematic-bg video{width:100%;height:100%;object-fit:cover;display:block}
    .hero-overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.18),rgba(0,0,0,.52))}
    .hero-image-card{position:absolute;right:18px;bottom:18px;width:52%;border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.12);box-shadow:0 18px 40px rgba(0,0,0,.35)}
    .hero-image-card img{width:100%;height:240px;object-fit:cover;display:block}
    .floating-stat{position:absolute;background:rgba(15,17,23,.88);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:16px 18px;backdrop-filter:blur(10px);box-shadow:0 12px 30px rgba(0,0,0,.28)}
    .floating-stat small{display:block;color:#9ca3af;font-size:12px;margin-bottom:6px}
    .floating-stat strong{font-family:'IBM Plex Mono',monospace;font-size:18px}
    .stat-a{top:18px;left:18px}.stat-b{top:120px;right:18px}.stat-c{left:28px;bottom:32px}
    .orb{position:absolute;border-radius:50%;filter:blur(18px);pointer-events:none}
    .orb.a{width:320px;height:320px;right:-80px;top:-40px;background:radial-gradient(circle, rgba(179,113,63,.28), transparent 68%)}
    .orb.b{width:220px;height:220px;left:-40px;bottom:-40px;background:radial-gradient(circle, rgba(179,113,63,.14), transparent 70%)}
    .precision-grid{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);background-size:44px 44px;mask-image:radial-gradient(circle at center, black 45%, transparent 88%);opacity:.18}
    .metrics-strip{display:flex;flex-wrap:wrap;gap:14px}
    .metric-pill{padding:14px 18px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.04);border-radius:14px;color:#d1d5db;font-size:14px}
    .section-title{font-family:'IBM Plex Mono',monospace;font-size:clamp(32px,4vw,48px);line-height:1.1;margin:0 0 14px}
    .section-text{color:#9ca3af;font-size:17px;line-height:1.8;max-width:760px}
    .tab-wrap{display:grid;grid-template-columns:320px 1fr;gap:28px;align-items:start}
    .tabs-col{display:flex;flex-direction:column;gap:14px}
    .tab-btn{padding:18px;border-radius:18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);cursor:pointer;transition:.25s;color:#fff;text-align:left}
    .tab-btn.active{border-color:rgba(179,113,63,.55);background:rgba(179,113,63,.12);box-shadow:0 12px 26px rgba(179,113,63,.12)}
    .tab-btn span{display:block;color:#9ca3af;font-size:13px;margin-bottom:8px}
    .preview-card{padding:28px;border-radius:26px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);box-shadow:0 20px 50px rgba(0,0,0,.28)}
    .product-head{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center}
    .tag{display:inline-flex;padding:8px 12px;border-radius:999px;background:rgba(179,113,63,.12);border:1px solid rgba(179,113,63,.35);color:#efd8c6;font-size:12px;font-weight:700;margin-bottom:14px}
    .desc-block{border-left:2px solid rgba(255,255,255,.12);padding-left:18px;margin:18px 0 24px}
    .feature-stack{display:flex;flex-direction:column;gap:14px}
    .feature-item{display:flex;gap:14px;align-items:flex-start;padding:16px;border-radius:18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);transition:.25s}
    .feature-item:hover,.hover-lift:hover{transform:translateY(-6px);box-shadow:0 16px 30px rgba(0,0,0,.25)}
    .feature-icon{width:42px;height:42px;min-width:42px;border-radius:12px;display:grid;place-items:center;background:rgba(179,113,63,.14);border:1px solid rgba(179,113,63,.35)}
    .feature-item h4{margin:0 0 6px;font-size:17px}
    .feature-item p{margin:0;color:#9ca3af;line-height:1.65;font-size:14px}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:22px;border:1px solid rgba(255,255,255,.12);box-shadow:0 24px 50px rgba(0,0,0,.34)}
    .browser-top{display:flex;align-items:center;gap:8px;padding:12px 14px;border-bottom:1px solid rgba(255,255,255,.08)}
    .browser-dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.3)}
    .browser-dot:nth-child(1){background:#ff5f57}.browser-dot:nth-child(2){background:#febc2e}.browser-dot:nth-child(3){background:#28c840}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .video-gallery{display:flex;gap:16px;overflow:auto;padding-bottom:6px}
    .video-card{min-width:320px;max-width:320px;border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04)}
    .video-card video{width:100%;height:220px;object-fit:cover;display:block}
    .video-card .cap{padding:14px;color:#d1d5db;font-size:14px}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
    .price-card{padding:28px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);box-shadow:0 16px 40px rgba(0,0,0,.25);display:flex;flex-direction:column}
    .price-card.featured{border-color:rgba(179,113,63,.55);box-shadow:0 20px 50px rgba(179,113,63,.12)}
    .badge-green{display:inline-flex;align-items:center;gap:8px;padding:7px 12px;border-radius:999px;background:rgba(34,197,94,.15);border:1px solid rgba(34,197,94,.35);color:#86efac;font-size:12px;font-weight:700;margin-bottom:14px}
    .price-name{font-family:'IBM Plex Mono',monospace;font-size:24px;line-height:1.3;margin:0 0 12px}
    .old-price{color:#6b7280;text-decoration:line-through;min-height:20px}
    .new-price{font-size:30px;font-weight:800;margin:6px 0 18px;color:#fff}
    .checklist{display:flex;flex-direction:column;gap:12px;margin:0 0 26px}
    .check{display:flex;gap:12px;align-items:flex-start;color:#d1d5db}
    .check svg{margin-top:3px;flex:0 0 auto}
    .full-btn{width:100%}
    .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .testimonial-card{padding:24px;border-radius:22px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1)}
    .quote-mark{font-size:34px;color:${accent};line-height:1}
    .stars{color:#fbbf24;letter-spacing:2px}
    .testimonial-card p{color:#d1d5db;line-height:1.8}
    .person{display:flex;align-items:center;gap:12px;margin-top:16px}
    .avatar{width:52px;height:52px;border-radius:50%;object-fit:cover;border:1px solid rgba(255,255,255,.12)}
    .person strong{display:block}
    .person span{display:block;color:#9ca3af;font-size:14px}
    .carousel-controls{display:flex;justify-content:center;gap:8px;margin-top:24px}
    .dot-btn{width:8px;height:8px;border:none;border-radius:999px;background:rgba(255,255,255,.3);cursor:pointer;transition:.25s}
    .dot-btn.active{width:26px;background:${accent}}
    .cta-strip{padding:34px;border-radius:26px;background:linear-gradient(135deg, rgba(179,113,63,.18), rgba(179,113,63,.08));border:1px solid rgba(179,113,63,.3);display:flex;align-items:center;justify-content:space-between;gap:20px}
    footer{padding:34px 0 48px;background:#06080c;border-top:1px solid rgba(255,255,255,.08)}
    .footer-grid{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;align-items:flex-start}
    .footer-meta{display:flex;flex-direction:column;gap:12px;color:#9ca3af}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .social-icon,.footer-links a{color:#d1d5db}
    .social-icon{width:38px;height:38px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.1)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease, transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}
    .scene-expand{width:75%;margin:0 auto;border-radius:24px;overflow:hidden;will-change:width,border-radius}
    .scene-expand img,.scene-expand video{width:100%;height:100%;object-fit:cover;transform:scale(1.08);will-change:transform}
    .zoom-reveal{overflow:hidden;border-radius:16px}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.15);will-change:transform;transition:transform 0s}
    [data-depth]{will-change:transform}.depth-foreground{position:relative;z-index:3}.depth-midground{position:relative;z-index:2}.depth-background{position:absolute;inset:0;z-index:1}
    .card-3d-stack{position:relative;transform-style:preserve-3d;perspective:1000px}
    .card-3d-stack>*:nth-child(1){transform:translateZ(40px) translateY(0)}
    .card-3d-stack>*:nth-child(2){transform:translateZ(20px) translateY(12px) scale(.97);opacity:.8}
    .card-3d-stack>*:nth-child(3){transform:translateZ(0) translateY(24px) scale(.94);opacity:.5}
    .clip-reveal{clip-path:inset(100% 0 0 0);will-change:clip-path}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
    @keyframes driftLeft{0%,100%{transform:translateX(0) translateY(0)}33%{transform:translateX(-12px) translateY(-8px)}66%{transform:translateX(8px) translateY(-14px)}}
    @keyframes ambientPulse{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}
    .float-ambient{animation:floatY 6s ease-in-out infinite}.float-drift{animation:driftLeft 10s ease-in-out infinite}.float-pulse{animation:ambientPulse 4s ease-in-out infinite}
    .stagger-parent>*{opacity:0;transform:translateY(32px);will-change:opacity,transform}
    .text-reveal-mask{overflow:hidden;display:block}.text-reveal-inner{display:block;transform:translateY(110%);will-change:transform}
    .cursor-glow{position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);background:radial-gradient(circle,var(--accent-glow) 0%,transparent 70%);transition:opacity .3s ease}
    .glass-card{background:rgba(255,255,255,.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.1);border-radius:20px}
    @media (max-width: 991px){
      .hero-grid,.tab-wrap,.product-head,.pricing-grid,.testimonial-grid{grid-template-columns:1fr}
      .hero-visual{min-height:420px}
      .hero-panel{min-height:420px}
      .banner-title{font-size:clamp(48px,10vw,58px)}
      .scene-expand{width:100%}
      .cta-strip{flex-direction:column;align-items:flex-start}
    }
    @media (max-width: 640px){
      .nav-inner{flex-wrap:wrap;padding:10px 0}
      .nav-center{margin-left:0}
      .section{padding:74px 0}
      .brand-name{font-size:18px}
      .hero-image-card{position:relative;right:auto;bottom:auto;width:100%;margin-top:12px}
      .floating-stat{transform:scale(.92)}
      .video-card{min-width:280px;max-width:280px}
    }
  `;

  const Icon = ({ type }) => {
    const common = { width: 18, height: 18, viewBox: '0 0 24 24', fill: 'none', stroke: accent, strokeWidth: '1.8', strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (type === 'image')
      return <svg {...common}><rect x="3" y="5" width="18" height="14" rx="2"/><circle cx="9" cy="10" r="1.5"/><path d="M21 15l-5-5-8 8"/></svg>;
    if (type === 'video')
      return <svg {...common}><rect x="3" y="5" width="15" height="14" rx="2"/><path d="M18 10l3-2v8l-3-2z"/></svg>;
    if (type === 'audio')
      return <svg {...common}><path d="M12 6v12"/><path d="M8 9v6"/><path d="M16 8v8"/><path d="M4 11v2"/><path d="M20 10v4"/></svg>;
    return <svg {...common}><path d="M12 3l7 4v10l-7 4-7-4V7l7-4z"/><path d="M12 8v8"/><path d="M8 12h8"/></svg>;
  };

  return (
    <div className="page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;700&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="topbar">
        <div className="container nav-inner">
          <div className="nav-left">
            <span className="brand-name">Seedream 4.5 and Seedance 1.5 Pro</span>
          </div>
          <div className="nav-center">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
              style={{ opacity: 0.9 }}
            />
          </div>
          <div className="nav-right">
            <a href={ctas[0].href} className="animated-cta btn-magnetic">
              {ctas[0].text}
            </a>
          </div>
        </div>
      </nav>

      <section className="section hero">
        <div className="precision-grid depth-background hero-cinematic-bg" data-depth="0.4" />
        <div className="orb a float-drift" />
        <div className="orb b float-pulse" />
        <div className="container hero-grid">
          <div className="hero-copy depth-foreground" data-depth="0.15">
            <div className="eyebrow reveal">AI Image Generation and AI Video Generation</div>
            <h1 className="banner-title split-text">
              Create High-Quality AI Images & Videos with ByteDance Generative Models
            </h1>
            <p className="reveal reveal-delay-1">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>
            <div className="chips reveal reveal-delay-2">
              {[
                'AI Image Generation',
                'AI Video Generation with Audio',
                'Multimodal Content Creation',
                'Enterprise-ready AI infrastructure'
              ].map((chip, i) => (
                <div key={i} className="chip">
                  <Icon type={i === 0 ? 'image' : i === 1 ? 'video' : i === 2 ? 'audio' : 'generic'} />
                  <span>{chip}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions reveal reveal-delay-3">
              <a href={ctas[1].href} className="animated-cta btn-magnetic">
                {ctas[1].text}
              </a>
              <a href="#products" className="ghost-btn">
                Generate with AI
              </a>
            </div>
          </div>

          <div className="hero-visual depth-foreground" data-depth="0.15">
            <div className="hero-panel glass-card noise-overlay">
              <div className="hero-cinematic-bg">
                <video autoPlay muted loop playsInline preload="auto">
                  <source src="/output/generated-assets/ds_1778152145725_67cc712a/08-8c93b9a6e6.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="hero-overlay" />
              <div className="floating-stat stat-a float-ambient">
                <small>Model</small>
                <strong>Seedream 4.5</strong>
              </div>
              <div className="floating-stat stat-b float-ambient">
                <small>Video</small>
                <strong>Seedance 1.5 Pro</strong>
              </div>
              <div className="floating-stat stat-c float-ambient">
                <small>Category</small>
                <strong>AI Image Generation and AI Video Generation</strong>
              </div>
              <div className="hero-image-card zoom-reveal">
                <img src="/output/generated-assets/ds_1778152145725_67cc712a/13-c4e1793d4f.webp" alt="Seedream 4.5 and Seedance 1.5 Pro" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-2 clip-reveal">
        <div className="container">
          <div className="metrics-strip stagger-parent">
            <div className="metric-pill">AI Image Generation</div>
            <div className="metric-pill">AI Video Generation with Audio</div>
            <div className="metric-pill">Multimodal Content Creation</div>
            <div className="metric-pill">Enterprise-ready AI infrastructure</div>
          </div>
        </div>
      </section>

      <section id="products" className="section bg-1">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 28 }}>
            <h2 className="section-title">
              Explore <span className="gradient-text">ByteDance Generative Models</span>
            </h2>
            <p className="section-text">
              Professionals seeking high-quality AI image and video creation, including creative directors, video producers, art directors, marketing managers, and creative leads
            </p>
          </div>

          <div className="tab-wrap">
            <div className="tabs-col">
              {products.map((item, idx) => (
                <button
                  key={item.name}
                  className={`tab-btn reveal ${activeProduct === idx ? 'active' : ''}`}
                  onClick={() => setActiveProduct(idx)}
                >
                  <span>{item.label}</span>
                  <strong>{item.name}</strong>
                </button>
              ))}
            </div>

            <div className="preview-card pin-scene">
              <div className="product-head">
                <div className={activeProduct === 0 ? 'scene-expand' : ''}>
                  <div
                    className="browser-frame zoom-reveal"
                    style={{ background: products[activeProduct].dark ? '#0a0a0a' : '#f8f8f8' }}
                  >
                    <div className="browser-top" style={{ background: products[activeProduct].dark ? '#111' : '#ededed' }}>
                      <span className="browser-dot" />
                      <span className="browser-dot" />
                      <span className="browser-dot" />
                    </div>
                    <img src={products[activeProduct].image} alt={products[activeProduct].name} />
                  </div>
                </div>

                <div>
                  <div className="tag">{products[activeProduct].label}</div>
                  <h3 className="section-title" style={{ fontSize: 'clamp(28px,3.2vw,42px)' }}>
                    {products[activeProduct].headline.split(products[activeProduct].name)[0]}
                    <span className="gradient-text">{products[activeProduct].name}</span>
                    {products[activeProduct].headline.split(products[activeProduct].name)[1]}
                  </h3>
                  <div className="desc-block">
                    <p className="section-text" style={{ margin: 0 }}>
                      {products[activeProduct].description}
                    </p>
                  </div>
                  <div className="feature-stack stagger-parent">
                    {products[activeProduct].features.map((feature, i) => (
                      <div key={i} className="feature-item hover-lift glass-card">
                        <div className="feature-icon">
                          <Icon type={activeProduct === 0 ? 'image' : 'video'} />
                        </div>
                        <div>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 22 }}>
                    <a href={ctas[2].href} className="animated-cta btn-magnetic">
                      {ctas[2].text}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="section" style={{ padding: '56px 0 0' }}>
            <div className="reveal" style={{ marginBottom: 22 }}>
              <h3 className="section-title" style={{ fontSize: 'clamp(28px,3vw,40px)' }}>
                <span className="gradient-text">Video Gallery</span>
              </h3>
            </div>
            <div className="video-gallery stagger-parent">
              {[
                'https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4',
                'https://cdn.web.imagine.art/imagine-one/cdge/sora2.mp4',
                'https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4',
                'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4'
              ].map((videoUrl, i) => (
                <div key={i} className="video-card hover-lift">
                  <video autoPlay muted loop playsInline preload="auto">
                    <source src={videoUrl} type="video/mp4" />
                  </video>
                  <div className="cap">AI Video Generation with Seedance 1.5 Pro by Bytedance</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-2 clip-reveal">
        <div className="container">
          <div className="cta-strip reveal">
            <div>
              <div className="tag">AI Image Generation and AI Video Generation</div>
              <h3 className="section-title" style={{ marginBottom: 8 }}>
                Create High-Quality AI Images & Videos with <span className="gradient-text">ByteDance Generative Models</span>
              </h3>
            </div>
            <a href={ctas[3].href} className="animated-cta btn-magnetic">
              {ctas[3].text}
            </a>
          </div>
        </div>
      </section>

      <section className="section bg-1">
        <div className="orb a float-drift" />
        <div className="container">
          <div className="reveal" style={{ marginBottom: 26 }}>
            <h2 className="section-title">
              <span className="gradient-text">Pricing</span>
            </h2>
          </div>
          <div className="pricing-grid">
            {pricingPlans.map((plan, idx) => (
              <div key={idx} className={`price-card hover-lift ${idx === 1 ? 'featured' : ''}`}>
                <div className="badge-green">Highlighted card</div>
                <h3 className="price-name">{plan.name}</h3>
                <div className="old-price">{plan.originalPrice ? plan.originalPrice : ' '}</div>
                <div className="new-price">{plan.price ? plan.price : 'Contact for pricing'}</div>
                <div className="checklist">
                  {plan.includes.map((item, i) => (
                    <div key={i} className="check">
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M20 6L9 17l-5-5" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                {idx === 1 && (
                  <a href={ctas[4].href} className="animated-cta full-btn btn-magnetic">
                    {ctas[4].text}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-2">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 26 }}>
            <h2 className="section-title">
              What professionals say about <span className="gradient-text">Seedream and Seedance</span>
            </h2>
          </div>

          <div className="testimonial-grid">
            {testimonials.slice(0, 3).map((t, i) => (
              <div key={i} className="testimonial-card reveal hover-lift glass-card">
                <div className="quote-mark">❝</div>
                <div className="stars">★★★★★</div>
                <p>{t.quote}</p>
                <div className="person">
                  <img
                    className="avatar"
                    src="/output/generated-assets/ds_1778152145725_67cc712a/14-6d75b26b02.webp"
                    alt={t.author}
                  />
                  <div>
                    <strong>{t.author}</strong>
                    <span>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div style={{ overflow: 'hidden', position: 'relative', marginTop: 26 }} className="glass-card">
            <div
              style={{
                display: 'flex',
                transform: `translateX(-${activeSlide * 100}%)`,
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)'
              }}
            >
              {testimonials.map((t, i) => (
                <div key={i} style={{ minWidth: '100%', padding: '32px' }}>
                  <div className="quote-mark">❝</div>
                  <div className="stars">★★★★★</div>
                  <p style={{ fontSize: '18px', lineHeight: '1.8', color: '#d1d5db' }}>{t.quote}</p>
                  <div className="person">
                    <img
                      className="avatar"
                      src="/output/generated-assets/ds_1778152145725_67cc712a/14-6d75b26b02.webp"
                      alt={t.author}
                    />
                    <div>
                      <strong>{t.author}</strong>
                      <span>{t.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="carousel-controls">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot-btn ${i === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer>
        <div className="container footer-grid">
          <div className="footer-meta">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <div>support@techjockey.com</div>
            <div>© 2024 Techjockey Infotech Pvt. Ltd.</div>
          </div>

          <div className="footer-meta">
            <div className="footer-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-use">Terms</a>
            </div>
            <div className="socials">
              <a className="social-icon" href="https://www.facebook.com/Techjockey/" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V8c0-1.2.4-2 2-2h2V2.3C16.6 2.1 15.5 2 14.3 2 10.8 2 9 4.1 9 8v2H6v4h3v8z"/></svg>
              </a>
              <a className="social-icon" href="https://www.instagram.com/techjockey/" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="2" width="20" height="20" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
              </a>
              <a className="social-icon" href="https://twitter.com/Techjockey" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.7-5.8-.1-1 .9-1.4 2.3-1.1 3.6-3.4-.2-6.5-1.8-8.6-4.4-1.1 1.9-.5 4.3 1.3 5.5-.6 0-1.2-.2-1.7-.5 0 2 1.4 3.8 3.4 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 3.9 2.9A8.4 8.4 0 0 1 2 19.5a11.8 11.8 0 0 0 6.4 1.9c7.7 0 11.9-6.4 11.9-11.9v-.5c.8-.6 1.4-1.3 1.9-2.1z"/></svg>
              </a>
              <a className="social-icon" href="https://www.linkedin.com/company/techjockey-com/" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.5H3.6V21h3.3zM5.3 3A1.9 1.9 0 1 0 5.3 6.8 1.9 1.9 0 0 0 5.3 3zM21 13.2c0-3.3-1.8-4.8-4.3-4.8-2 0-2.8 1.1-3.3 1.8V8.5h-3.3c0 1.1 0 12.5 0 12.5h3.3v-7c0-.4 0-.8.1-1.1.3-.8 1-1.7 2.3-1.7 1.6 0 2.2 1.2 2.2 3V21H21z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;