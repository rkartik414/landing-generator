import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#b3713f';
  const primary = '#b3713f';
  const bodyBg = '#06080c';

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [activeProduct, setActiveProduct] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const cursorGlowRef = useRef(null);

  const products = [
    {
      name: 'Seedream 4.5',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      media: '/output/generated-assets/ds_1778155323242_a0e7f466/09-581339b7d2.png',
      mediaDark: true,
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
      media: '/output/generated-assets/ds_1778155323242_a0e7f466/12-41ea7f7485.png',
      mediaDark: false,
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

  const galleryVideos = [
    'https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4',
    'https://cdn.web.imagine.art/imagine-one/cdge/sora2.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ConsistentCharacters.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4',
  ];

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--accent-glow', 'rgba(179,113,63,0.16)');

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const gsapScript = document.createElement('script');
    gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    gsapScript.async = true;

    const stScript = document.createElement('script');
    stScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
    stScript.async = true;

    document.body.appendChild(gsapScript);
    document.body.appendChild(stScript);

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const gsap = window.gsap;
          gsap.registerPlugin(window.ScrollTrigger);

          gsap.utils.toArray('.scene-expand').forEach((scene) => {
            gsap.to(scene, {
              width: '100%',
              borderRadius: '0px',
              ease: 'none',
              scrollTrigger: {
                trigger: scene,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1.2,
              },
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
                  scrub: 1.2,
                },
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
                toggleActions: 'play none none reverse',
              },
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
                scrub: true,
              },
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
                scrub: 2,
              },
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
                toggleActions: 'play none none reverse',
              },
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
                toggleActions: 'play none none none',
              },
            });
          });

          gsap.utils.toArray('.split-text').forEach((el) => {
            const original = el.getAttribute('data-text') || el.textContent;
            if (!el.querySelector('.char')) {
              el.setAttribute('data-text', original);
              el.innerHTML = original
                .split('')
                .map((char) =>
                  char === ' '
                    ? ' '
                    : `<span class="char" style="display:inline-block;will-change:transform,opacity">${char}</span>`
                )
                .join('');
            }
            gsap.from(el.querySelectorAll('.char'), {
              y: 80,
              opacity: 0,
              rotateX: -40,
              stagger: 0.025,
              duration: 0.9,
              ease: 'power3.out',
            });
          });

          gsap.utils.toArray('.text-reveal-mask').forEach((mask) => {
            const inner = mask.querySelector('.text-reveal-inner');
            if (!inner) return;
            gsap.to(inner, {
              y: '0%',
              duration: 1,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: mask,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            });
          });

          gsap.utils.toArray('.btn-magnetic').forEach((btn) => {
            btn.addEventListener('mousemove', (e) => {
              const rect = btn.getBoundingClientRect();
              const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
              const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
              gsap.to(btn, { x, y, duration: 0.4, ease: 'power2.out' });
            });
            btn.addEventListener('mouseleave', () => {
              gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
            });
          });

          gsap.utils.toArray('.pin-scene').forEach((scene) => {
            window.ScrollTrigger.create({
              trigger: scene,
              start: 'top top',
              end: '+=600',
              pin: true,
              pinSpacing: true,
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
                el.textContent = prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
              },
            });
          });
        });
      });
    };

    const tryInit = () => {
      if (window.gsap && window.ScrollTrigger) initGSAP();
      else setTimeout(tryInit, 400);
    };
    tryInit();

    const autoRotate = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    const moveGlow = (e) => {
      if (cursorGlowRef.current) {
        cursorGlowRef.current.style.left = `${e.clientX}px`;
        cursorGlowRef.current.style.top = `${e.clientY}px`;
      }
    };
    window.addEventListener('mousemove', moveGlow);

    return () => {
      observer.disconnect();
      clearInterval(autoRotate);
      window.removeEventListener('mousemove', moveGlow);
    };
  }, [accent, primary, testimonials.length]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => e.preventDefault();

  const css = `
    :root{--accent:${accent};--primary:${primary}}
    *{box-sizing:border-box} html,body,#root{margin:0;padding:0;background:${bodyBg};color:#f9fafb;scroll-behavior:smooth}
    body{font-family:Inter,sans-serif;background:${bodyBg}}
    a{text-decoration:none;color:inherit}
    img,video{max-width:100%}
    .page{background:${bodyBg};overflow-x:hidden}
    .container{width:min(1200px,92%);margin:0 auto;position:relative;z-index:2}
    .section{padding:88px 0;position:relative;overflow:hidden}
    .bg-hero,.bg-proof,.bg-pricing,.footer{background:#06080c}
    .bg-trust,.bg-products,.bg-gallery,.bg-cta{background:#0f1117}
    .muted{color:#9ca3af}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    h1,h2,h3,h4{font-family:"Plus Jakarta Sans",sans-serif;margin:0 0 16px;color:#f9fafb}
    h1{font-size:clamp(48px,6vw,74px);line-height:1.02;letter-spacing:-.03em}
    h2{font-size:clamp(32px,4vw,48px);line-height:1.08}
    h3{font-size:22px}
    p{margin:0 0 16px;line-height:1.7;color:#c6cbd3}
    .banner-title{word-break:normal;overflow-wrap:normal;hyphens:none;white-space:normal}
    .nav{position:sticky;top:0;z-index:50;background:rgba(6,8,12,.8);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:78px}
    .nav-left{display:flex;align-items:center;min-width:0;flex:1}
    .nav-left span{font-weight:800;font-size:20px;color:#f9fafb}
    .nav-right-wrap{display:flex;align-items:center;gap:18px}
    .animated-cta,.ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 22px;border-radius:12px;font-weight:700;transition:.3s ease;border:1px solid rgba(255,255,255,.1)}
    .animated-cta{background:${accent};color:#fff;box-shadow:0 12px 30px rgba(179,113,63,.22)}
    .animated-cta:hover,.ghost-btn:hover{transform:translateY(-2px);box-shadow:0 18px 36px rgba(0,0,0,.28)}
    .ghost-btn{background:rgba(255,255,255,.04);color:#fff}
    .hero{min-height:calc(100vh - 78px);display:flex;align-items:center;padding:84px 0;position:relative}
    .hero-media-bg{position:absolute;inset:0;overflow:hidden}
    .hero-media-bg video{width:100%;height:100%;object-fit:cover;display:block}
    .hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:48px;align-items:center;position:relative;z-index:2}
    .hero-copy{max-width:760px}
    .hero-copy .support{font-size:18px;color:#d7dce4}
    .hero-copy p{font-size:18px}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0 28px}
    .chip{display:inline-flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(179,113,63,.35);background:rgba(179,113,63,.12);font-size:13px;color:#e5e7eb}
    .cta-row{display:flex;flex-wrap:wrap;gap:14px;margin-top:8px}
    .hero-visual{min-height:520px;display:flex;align-items:center;justify-content:center}
    .form-card{width:100%;max-width:440px;padding:28px;border-radius:24px;background:rgba(10,14,20,.82);backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.12);box-shadow:0 24px 80px rgba(0,0,0,.35)}
    .form-card h3{margin-bottom:8px}
    .lead-form{display:flex;flex-direction:column;gap:14px;margin-top:16px}
    .field label{display:block;margin-bottom:8px;font-size:13px;color:#d5dae2}
    .field input{width:100%;padding:14px 16px;border-radius:12px;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.05);color:#fff;outline:none}
    .field input:focus{border-color:${accent};box-shadow:0 0 0 3px rgba(179,113,63,.16)}
    .full-btn{width:100%}
    .strip-card{display:flex;justify-content:center;align-items:center;text-align:center;padding:18px 20px;border-radius:18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)}
    .strip-card p{margin:0;color:#e5e7eb}
    .products-wrap{display:grid;grid-template-columns:320px 1fr;gap:28px;align-items:start}
    .tabs-col{display:flex;flex-direction:column;gap:14px}
    .tab-btn{padding:20px;border-radius:18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);cursor:pointer;transition:.3s ease;text-align:left}
    .tab-btn.active{border-color:rgba(179,113,63,.4);background:rgba(179,113,63,.12);box-shadow:0 12px 30px rgba(179,113,63,.12)}
    .tab-label{font-size:12px;color:#9ca3af;margin-bottom:6px}
    .preview-card{display:grid;grid-template-columns:1.02fr .98fr;gap:32px;padding:28px;border-radius:26px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:22px;border:1px solid rgba(255,255,255,.1);box-shadow:0 24px 60px rgba(0,0,0,.3)}
    .browser-frame.dark{background:#0a0a0a}
    .browser-frame.light{background:#f8f8f8}
    .browser-top{display:flex;gap:8px;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,.08)}
    .browser-top span{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.25)}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .feature-list{display:flex;flex-direction:column;gap:14px;margin-top:18px}
    .feature-item{display:flex;gap:14px;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.08)}
    .feature-item:last-child{border-bottom:none}
    .icon-badge{width:42px;height:42px;min-width:42px;border-radius:12px;background:rgba(179,113,63,.16);display:flex;align-items:center;justify-content:center;border:1px solid rgba(179,113,63,.25)}
    .feature-item h4{margin:0 0 6px;font-family:"Plus Jakarta Sans",sans-serif;font-size:17px}
    .video-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
    .video-card{padding:14px;border-radius:20px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)}
    .video-card video{width:100%;height:240px;object-fit:cover;border-radius:14px;display:block}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
    .price-card{padding:28px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);position:relative}
    .price-card.highlight{box-shadow:0 0 0 1px rgba(179,113,63,.35),0 24px 70px rgba(179,113,63,.12)}
    .badge{display:inline-flex;padding:8px 12px;border-radius:999px;background:rgba(34,197,94,.14);color:#86efac;border:1px solid rgba(34,197,94,.24);font-size:12px;font-weight:700;margin-bottom:16px}
    .price{font-size:34px;font-weight:800;font-family:"Plus Jakarta Sans",sans-serif;margin:8px 0 14px;color:#fff}
    .price.muted-empty{font-size:18px;color:#9ca3af;font-weight:600}
    .checklist{display:flex;flex-direction:column;gap:12px;margin:18px 0 0}
    .check{display:flex;gap:12px;align-items:flex-start;color:#d7dce4}
    .check svg{margin-top:4px;min-width:18px}
    .testimonial-wrap{padding:30px;border-radius:28px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)}
    .testimonial-card{display:grid;grid-template-columns:120px 1fr;gap:24px;align-items:center}
    .avatar{width:96px;height:96px;border-radius:50%;overflow:hidden;border:2px solid rgba(179,113,63,.35)}
    .avatar img{width:100%;height:100%;object-fit:cover}
    .quote-mark{font-size:56px;line-height:1;color:${accent};font-family:"Plus Jakarta Sans",sans-serif}
    .stars{color:#fbbf24;letter-spacing:2px;margin-bottom:12px}
    .testimonial-nav{display:flex;justify-content:space-between;align-items:center;gap:14px;margin-top:24px}
    .dots{display:flex;gap:8px}
    .dot{width:10px;height:10px;border-radius:999px;border:none;background:rgba(255,255,255,.22);cursor:pointer}
    .dot.active{width:28px;background:${accent}}
    .arrow-btn{width:44px;height:44px;border-radius:50%;border:1px solid rgba(255,255,255,.1);background:rgba(255,255,255,.04);color:#fff;cursor:pointer}
    .cta-strip{padding:34px;border-radius:26px;background:linear-gradient(135deg, rgba(179,113,63,.16), rgba(255,255,255,.04));border:1px solid rgba(179,113,63,.22);display:flex;justify-content:space-between;align-items:center;gap:18px}
    .footer{padding:42px 0;border-top:1px solid rgba(255,255,255,.08)}
    .footer-grid{display:flex;justify-content:space-between;gap:22px;flex-wrap:wrap;align-items:flex-start}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .socials a,.footer-links a{color:#c9d0d9}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .hover-lift{transition:transform .3s ease,box-shadow .3s ease}
    .hover-lift:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(0,0,0,.25)}
    .scene-expand{width:75%;margin:0 auto;border-radius:24px;overflow:hidden;will-change:width,border-radius}
    .scene-expand img{width:100%;height:100%;object-fit:cover;transform:scale(1.08);will-change:transform}
    .zoom-reveal{overflow:hidden;border-radius:16px}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.15);will-change:transform;transition:transform 0s}
    [data-depth]{will-change:transform}
    .depth-foreground{position:relative;z-index:3}
    .depth-midground{position:relative;z-index:2}
    .depth-background{position:absolute;inset:0;z-index:1}
    .card-3d-stack{position:relative;transform-style:preserve-3d;perspective:1000px}
    .card-3d-stack>*:nth-child(1){transform:translateZ(40px) translateY(0)}
    .card-3d-stack>*:nth-child(2){transform:translateZ(20px) translateY(12px) scale(.97);opacity:.8}
    .card-3d-stack>*:nth-child(3){transform:translateZ(0) translateY(24px) scale(.94);opacity:.5}
    .clip-reveal{clip-path:inset(100% 0 0 0);will-change:clip-path}
    .hero-cinematic-bg{transform:scale(1.06);transform-origin:center center;will-change:transform}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
    @keyframes driftLeft{0%,100%{transform:translateX(0) translateY(0)}33%{transform:translateX(-12px) translateY(-8px)}66%{transform:translateX(8px) translateY(-14px)}}
    .float-ambient{animation:floatY 6s ease-in-out infinite}
    .float-drift{animation:driftLeft 10s ease-in-out infinite}
    .stagger-parent>*{opacity:0;transform:translateY(32px);will-change:opacity,transform}
    .text-reveal-mask{overflow:hidden;display:block}
    .text-reveal-inner{display:block;transform:translateY(110%);will-change:transform}
    .cursor-glow{position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:1;transform:translate(-50%,-50%);background:radial-gradient(circle,var(--accent-glow, rgba(179,113,63,0.12)) 0%,transparent 70%);opacity:.9}
    .glass-card{background:rgba(255,255,255,.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.1);border-radius:20px}
    .orb{position:absolute;border-radius:50%;filter:blur(20px);pointer-events:none}
    .orb.one{top:-60px;right:-60px;width:240px;height:240px;background:radial-gradient(circle, rgba(179,113,63,.18), transparent 68%)}
    .orb.two{left:-50px;bottom:-50px;width:220px;height:220px;background:radial-gradient(circle, rgba(179,113,63,.12), transparent 72%)}
    @media(max-width:991px){
      .hero-grid,.preview-card,.products-wrap,.pricing-grid,.testimonial-card,.cta-strip{grid-template-columns:1fr;display:grid}
      .video-grid{grid-template-columns:1fr}
      .hero-visual{min-height:auto}
      .scene-expand{width:100%}
    }
    @media(max-width:767px){
      .section{padding:68px 0}
      .nav-inner{min-height:70px}
      .nav-right-wrap{gap:10px}
      .nav-left span{font-size:16px}
      .animated-cta,.ghost-btn{padding:12px 16px;font-size:14px}
      .testimonial-card{display:block}
      .avatar{margin-bottom:18px}
      .video-card video,.browser-frame img{height:260px}
      .form-card{padding:22px}
    }
  `;

  const Icon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l2.8 5.67L21 9.6l-4.5 4.39 1.06 6.21L12 17.27 6.44 20.2 7.5 14 3 9.6l6.2-.93L12 3z" fill={accent} />
    </svg>
  );

  return (
    <div className="page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <div ref={cursorGlowRef} className="cursor-glow" />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="nav-left">
            <span>Seedream 4.5 and Seedance 1.5 Pro</span>
          </div>
          <div className="nav-right-wrap">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <a href="#lead-form" className="animated-cta btn-magnetic">
              Get Free Consultation
            </a>
          </div>
        </div>
      </nav>

      <section className="hero bg-hero noise-overlay">
        <div className="hero-media-bg depth-background" data-depth="0.4">
          <video className="hero-cinematic-bg" autoPlay muted loop playsInline preload="auto">
            <source
              src="/output/generated-assets/ds_1778155323242_a0e7f466/08-8c93b9a6e6.mp4"
              type="video/mp4"
            />
          </video>
        </div>
        <div className="container hero-grid">
          <div className="hero-copy depth-foreground" data-depth="0.15">
            <div className="text-reveal-mask reveal">
              <span className="text-reveal-inner muted">AI Image Generation and AI Video Generation</span>
            </div>
            <h1 className="banner-title split-text reveal">
              Create High-Quality AI Images &amp; Videos with <span className="gradient-text">ByteDance Generative Models</span>
            </h1>
            <p className="reveal reveal-delay-1">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>
            <p className="support reveal reveal-delay-2">
              From text prompts, images, or scripts, generate professional visuals and videos with powerful multimodal AI systems.
            </p>

            <div className="chips reveal reveal-delay-3">
              {[
                'AI Image Generation',
                'AI Video Generation',
                'High-Resolution Output',
                'Audio-Visual Synchronization',
                'Multilingual Lip-Sync',
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  <Icon />
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="cta-row reveal">
              <a href="#lead-form" className="animated-cta btn-magnetic">
                Get Free Consultation
              </a>
              <a href="#products" className="ghost-btn">
                Generate with AI
              </a>
            </div>
          </div>

          <div className="hero-visual" id="lead-form">
            <div className="form-card glass-card hover-lift">
              <h3>Get Free Consultation</h3>
              <p className="muted">
                Professionals and enterprises creating high-quality visual content, creative visuals, branded content, posters, ads, and videos
              </p>
              <form className="lead-form" onSubmit={handleSubmit}>
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
                <button type="submit" className="animated-cta full-btn">
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-trust clip-reveal">
        <div className="container">
          <div className="strip-card reveal hover-lift">
            <p>
              <strong>Professionals and enterprises</strong> creating high-quality visual content, creative visuals, branded content, posters, ads, and videos
            </p>
          </div>
        </div>
      </section>

      <section className="section bg-products" id="products">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 780, marginBottom: 30 }}>
            <h2>
              Explore <span className="gradient-text">Seedream 4.5</span> and <span className="gradient-text">Seedance 1.5 Pro</span>
            </h2>
            <p>
              Unlock image generation and native audio-visual generation workflows in one proof-led product experience.
            </p>
          </div>

          <div className="products-wrap">
            <div className="tabs-col stagger-parent">
              {products.map((item, index) => (
                <button
                  key={item.name}
                  className={`tab-btn hover-lift ${activeProduct === index ? 'active' : ''}`}
                  onClick={() => setActiveProduct(index)}
                >
                  <div className="tab-label">{index === 0 ? 'Feature 1' : 'Additional Feature:-'}</div>
                  <h3>{item.name}</h3>
                  <p>{item.headline}</p>
                </button>
              ))}
            </div>

            <div className="preview-card glass-card reveal">
              <div className="scene-expand">
                <div className={`browser-frame ${products[activeProduct].mediaDark ? 'dark' : 'light'} zoom-reveal`}>
                  <div className="browser-top">
                    <span />
                    <span />
                    <span />
                  </div>
                  <img src={products[activeProduct].media} alt={products[activeProduct].name} />
                </div>
              </div>

              <div data-depth="0.15">
                <div className="muted" style={{ marginBottom: 8 }}>
                  {products[activeProduct].name}
                </div>
                <h2>
                  {activeProduct === 0 ? (
                    <>AI Image Generation with <span className="gradient-text">Seedream 4.5</span></>
                  ) : (
                    <>AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro</span> by Bytedance</>
                  )}
                </h2>
                <div style={{ borderLeft: '2px solid rgba(255,255,255,0.14)', paddingLeft: 18, marginBottom: 18 }}>
                  <p>{products[activeProduct].description}</p>
                </div>

                <div className="feature-list">
                  {products[activeProduct].features.map((feature, i) => (
                    <div className="feature-item" key={i}>
                      <div className="icon-badge">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                          <path d="M5 12l4.2 4.2L19 6.5" stroke={accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 22 }}>
                  <a href="#lead-form" className="animated-cta">
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-proof pin-scene">
        <div className="orb one float-drift" />
        <div className="orb two float-ambient" />
        <div className="container">
          <div className="reveal" style={{ maxWidth: 820, marginBottom: 28 }}>
            <h2>
              Video Gallery for <span className="gradient-text">AI Video Generation</span>
            </h2>
            <p>
              Explore video outputs aligned with text-to-video generation, cinematic output, and synchronized audio-visual creation.
            </p>
          </div>
          <div className="video-grid stagger-parent">
            {galleryVideos.map((video, i) => (
              <div className="video-card hover-lift glass-card" key={i} data-depth="0.15">
                <video autoPlay muted loop playsInline preload="auto">
                  <source src={video} type="video/mp4" />
                </video>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-gallery">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 760, marginBottom: 26 }}>
            <h2>
              Pricing for <span className="gradient-text">Seedream 4.5</span> and <span className="gradient-text">Seedance 1.5 Pro</span>
            </h2>
            <p>Choose the model based on your visual content workflow requirements.</p>
          </div>

          <div className="pricing-grid stagger-parent">
            {pricingPlans.map((plan, i) => (
              <div key={i} className={`price-card hover-lift ${i === 1 ? 'highlight' : ''}`}>
                <div className="badge">{i === 1 ? 'Available Pricing' : 'Contact for Pricing'}</div>
                <h3>{plan.name}</h3>
                <div className={`price ${plan.price ? '' : 'muted-empty'}`}>{plan.price || 'Pricing on request'}</div>
                <div className="checklist">
                  {plan.includes.map((item, idx) => (
                    <div className="check" key={idx}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12l4 4 10-10" stroke="#22c55e" strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 22 }}>
                  <a href="#lead-form" className="animated-cta full-btn" style={{ display: 'flex' }}>
                    Get Free Consultation
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-pricing">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 760, marginBottom: 26 }}>
            <h2>
              What teams say about <span className="gradient-text">Seedream</span>, <span className="gradient-text">Seedance</span> and Techjockey
            </h2>
          </div>

          <div className="testimonial-wrap glass-card reveal">
            <div className="testimonial-card">
              <div className="avatar">
                <img
                  src="/output/generated-assets/ds_1778155323242_a0e7f466/04-6d75b26b02.webp"
                  alt={testimonials[activeTestimonial].name}
                />
              </div>
              <div>
                <div className="quote-mark">❝</div>
                <div className="stars">★★★★★</div>
                <p style={{ fontSize: 22, lineHeight: 1.7, color: '#f3f4f6' }}>
                  {testimonials[activeTestimonial].quote}
                </p>
                <div style={{ marginTop: 18 }}>
                  <strong style={{ fontSize: 18 }}>{testimonials[activeTestimonial].name}</strong>
                  <div className="muted">{testimonials[activeTestimonial].role}</div>
                </div>
              </div>
            </div>

            <div className="testimonial-nav">
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  className="arrow-btn"
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                  }
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  className="arrow-btn"
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
              <div className="dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-cta">
        <div className="container">
          <div className="cta-strip reveal hover-lift">
            <div>
              <h3 style={{ marginBottom: 8 }}>Create High-Quality AI Images &amp; Videos with ByteDance Generative Models</h3>
              <p style={{ margin: 0 }}>
                Explore Seedream 4.5 and Seedance 1.5 Pro with Techjockey guidance.
              </p>
            </div>
            <a href="#lead-form" className="animated-cta btn-magnetic">
              Get Free Consultation
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
              style={{ marginBottom: 14 }}
            />
            <p style={{ marginBottom: 8 }}>support@techjockey.com</p>
            <p style={{ marginBottom: 0 }}>© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>

          <div>
            <div className="footer-links" style={{ marginBottom: 14 }}>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-condition">Terms</a>
            </div>
            <div className="socials">
              <a href="https://www.facebook.com/Techjockey/" aria-label="Facebook">
                Facebook
              </a>
              <a href="https://www.instagram.com/techjockey/" aria-label="Instagram">
                Instagram
              </a>
              <a href="https://twitter.com/Techjockey" aria-label="Twitter">
                Twitter
              </a>
              <a href="https://www.linkedin.com/company/techjockey-com/" aria-label="LinkedIn">
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;