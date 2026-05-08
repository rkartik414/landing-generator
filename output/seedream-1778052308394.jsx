import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#b3713f';
  const primary = '#b3713f';
  const bodyBg = '#ffffff';

  const [activeProduct, setActiveProduct] = useState(0);
  const [activeSeedreamFeature, setActiveSeedreamFeature] = useState(0);
  const [activeSeedanceFeature, setActiveSeedanceFeature] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const cursorGlowRef = useRef(null);

  const products = [
    {
      name: 'Seedream 4.5',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
      image: '/output/generated-assets/ds_1778051924089_c52a5284/10-41ea7f7485.png',
      darkImage: false,
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
      image: '/output/generated-assets/ds_1778051924089_c52a5284/06-4c8f6823a3.png',
      darkImage: true,
      features: [
        {
          title: 'Key Capabilities of Seedance 1.5 Pro',
          description: 'Seedance enables professional-grade AI video production with narrative coherence and realistic motion.',
        },
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

  const demoVideos = [
    'https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4',
    'https://cdn.web.imagine.art/imagine-one/cdge/sora2.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiShot.mp4',
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
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/SplitText.min.js',
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

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const gsap = window.gsap;
          const ScrollTrigger = window.ScrollTrigger;
          gsap.registerPlugin(ScrollTrigger);

          const existing = document.querySelector('.cursor-glow');
          if (!existing) {
            const glow = document.createElement('div');
            glow.className = 'cursor-glow';
            document.body.appendChild(glow);
            const move = (e) => {
              gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
            };
            window.addEventListener('mousemove', move);
          }

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
            const text = el.textContent;
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
                toggleActions: 'play none none none',
              },
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
              snap: { val: 1 },
              scrollTrigger: { trigger: el, start: 'top 80%', once: true },
              onUpdate: function () {
                el.textContent =
                  prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
              },
            });
          });
        });
      });
    };

    const t = setTimeout(initGSAP, 800);

    return () => {
      observer.disconnect();
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};--accent-glow:rgba(179,113,63,.14)}
    *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;font-family:Inter,sans-serif;background:#0b0e13;color:#fff}
    a{text-decoration:none;color:inherit} img{max-width:100%} button,input{font-family:inherit}
    .lp{background:#0b0e13;color:#fff;overflow:hidden}
    .container{width:min(1200px,calc(100% - 40px));margin:0 auto}
    .section{position:relative;padding:88px 0}
    .bg-dark{background:#0b0e13}.bg-deep{background:#111827}.bg-soft{background:#161616}
    .heading-font{font-family:Montserrat,sans-serif}
    .gradient-text{background:linear-gradient(135deg,var(--accent) 0%,var(--primary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .nav{position:sticky;top:0;z-index:50;background:rgba(11,14,19,.82);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand-name{font-weight:800;font-size:18px;line-height:1.25;max-width:520px}
    .nav-right{display:flex;align-items:center;gap:16px}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border:none;border-radius:12px;background:var(--accent);color:#fff;font-weight:700;cursor:pointer;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(179,113,63,.28);background:var(--primary)}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border:1px solid rgba(255,255,255,.18);border-radius:12px;background:rgba(255,255,255,.04);color:#fff;font-weight:600;transition:.25s}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 12px 24px rgba(0,0,0,.2);border-color:rgba(255,255,255,.35)}
    .hero{min-height:100vh;display:flex;align-items:center;padding:48px 0 72px;position:relative}
    .hero-bg-wrap,.hero-bg-overlay{position:absolute;inset:0}
    .hero-bg-wrap video,.hero-bg-wrap img{width:100%;height:100%;object-fit:cover;display:block}
    .hero-bg-overlay{background:linear-gradient(90deg,rgba(0,0,0,.82) 0%,rgba(0,0,0,.6) 45%,rgba(0,0,0,.58) 100%)}
    .hero-orb,.hero-orb2{position:absolute;border-radius:50%;filter:blur(20px);pointer-events:none}
    .hero-orb{width:320px;height:320px;right:-80px;top:80px;background:radial-gradient(circle,rgba(179,113,63,.35),transparent 68%)}
    .hero-orb2{width:240px;height:240px;left:-70px;bottom:20px;background:radial-gradient(circle,rgba(179,113,63,.22),transparent 68%)}
    .hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.1fr .9fr;gap:40px;align-items:center}
    .hero-copy h1{font-family:Montserrat,sans-serif;font-size:54px;line-height:1.05;margin:0 0 18px;max-width:780px}
    .hero-copy p{font-size:18px;line-height:1.75;color:rgba(255,255,255,.78);max-width:700px;margin:0}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0 28px}
    .chip{display:flex;align-items:center;gap:10px;padding:10px 16px;border-radius:999px;border:1px solid rgba(179,113,63,.45);background:rgba(179,113,63,.1);color:#fff;font-size:13px}
    .chip svg{width:16px;height:16px;color:var(--accent);flex:0 0 16px}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center}
    .form-card{width:100%;max-width:460px;padding:28px;border-radius:24px;background:rgba(255,255,255,.08);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 80px rgba(0,0,0,.35)}
    .form-card h3{margin:0 0 8px;font-family:Montserrat,sans-serif;font-size:28px}
    .form-card p{margin:0 0 18px;color:rgba(255,255,255,.68);font-size:14px;line-height:1.6}
    .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .field{display:flex;flex-direction:column;gap:8px}
    .field.full{grid-column:1/-1}
    .field label{font-size:13px;color:rgba(255,255,255,.72)}
    .field input{width:100%;height:48px;padding:0 14px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);color:#fff;outline:none;transition:.25s}
    .field input:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(179,113,63,.14)}
    .full-btn{width:100%;margin-top:16px}
    .metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .metric-card{padding:24px;border-radius:20px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);text-align:center}
    .metric-number{font-family:Montserrat,sans-serif;font-size:36px;color:#fff}
    .metric-label{margin-top:8px;color:rgba(255,255,255,.68);font-size:14px}
    .section-head{display:flex;justify-content:space-between;gap:24px;align-items:end;margin-bottom:32px}
    .section-head h2{font-family:Montserrat,sans-serif;font-size:40px;line-height:1.1;margin:0}
    .section-head p{max-width:620px;color:rgba(255,255,255,.7);margin:0;line-height:1.7}
    .tab-pills{display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px}
    .tab-pill{padding:12px 18px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#fff;font-weight:600;cursor:pointer;transition:.25s}
    .tab-pill.active{background:var(--accent);border-color:var(--accent)}
    .product-panel{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:24px;border:1px solid rgba(255,255,255,.08);box-shadow:0 30px 80px rgba(0,0,0,.3)}
    .browser-top{display:flex;align-items:center;gap:8px;padding:14px 16px;background:rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.08)}
    .browser-dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.35)}
    .browser-body{position:relative;flex:1;min-height:0}
    .browser-body img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .content-box{padding:8px 0}
    .eyebrow{display:inline-flex;padding:8px 12px;border-radius:999px;background:rgba(179,113,63,.12);border:1px solid rgba(179,113,63,.35);color:#fff;font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;margin-bottom:16px}
    .desc-bar{border-left:2px solid rgba(179,113,63,.5);padding-left:18px;color:rgba(255,255,255,.74);line-height:1.8;margin:18px 0 22px}
    .feature-shell{display:grid;grid-template-columns:240px 1fr;gap:20px;align-items:start}
    .feature-tabs{display:flex;flex-direction:column;gap:10px}
    .feature-tab{padding:14px 14px;border-radius:16px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);cursor:pointer;transition:.25s}
    .feature-tab.active{background:rgba(179,113,63,.16);border-color:rgba(179,113,63,.45)}
    .feature-tab strong{display:block;font-size:14px;line-height:1.45}
    .feature-preview{padding:22px;border-radius:20px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);min-height:210px}
    .feature-preview h4{font-family:Montserrat,sans-serif;font-size:24px;margin:0 0 12px}
    .feature-preview p{margin:0;color:rgba(255,255,255,.73);line-height:1.75}
    .icon-row{display:flex;gap:14px;margin-top:18px}
    .icon-box{width:44px;height:44px;border-radius:14px;background:rgba(179,113,63,.14);display:flex;align-items:center;justify-content:center;border:1px solid rgba(179,113,63,.3)}
    .proof-grid{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:center}
    .dark-card{padding:28px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1)}
    .gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
    .video-card{border-radius:20px;overflow:hidden;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)}
    .video-card video{width:100%;height:260px;object-fit:cover;display:block}
    .video-meta{padding:14px 14px 16px;color:#fff;font-weight:600;font-size:14px}
    .pricing-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
    .price-card{padding:30px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);position:relative}
    .price-card.highlight{box-shadow:0 0 0 1px rgba(179,113,63,.45),0 26px 60px rgba(179,113,63,.12)}
    .badge-green{display:inline-flex;padding:8px 12px;border-radius:999px;background:rgba(34,197,94,.15);border:1px solid rgba(34,197,94,.35);color:#86efac;font-size:12px;font-weight:700;margin-bottom:16px}
    .price-card h3{font-family:Montserrat,sans-serif;font-size:26px;line-height:1.25;margin:0 0 10px}
    .price{font-family:Montserrat,sans-serif;font-size:34px;margin:10px 0 20px}
    .muted{color:rgba(255,255,255,.62)}
    .strike{text-decoration:line-through;color:rgba(255,255,255,.38)}
    .list{display:grid;gap:12px;padding:0;margin:0 0 22px;list-style:none}
    .list li{display:flex;gap:12px;color:rgba(255,255,255,.75);line-height:1.55}
    .check{width:20px;height:20px;border-radius:50%;background:rgba(34,197,94,.15);border:1px solid rgba(34,197,94,.35);display:flex;align-items:center;justify-content:center;color:#86efac;font-size:12px;flex:0 0 20px;margin-top:2px}
    .testimonial-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
    .testimonial-card{padding:28px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);min-height:280px}
    .quote-mark{font-size:48px;line-height:1;color:var(--accent);font-family:Montserrat,sans-serif}
    .stars{color:#fbbf24;letter-spacing:2px;font-size:18px;margin:4px 0 14px}
    .testimonial-card p{font-size:17px;line-height:1.8;color:rgba(255,255,255,.78);margin:0 0 18px}
    .author{font-weight:700}.role{color:rgba(255,255,255,.56);font-size:14px}
    .carousel-dots{display:flex;justify-content:center;gap:8px;margin-top:26px}
    .carousel-dots button{width:8px;height:8px;border-radius:999px;border:none;cursor:pointer;background:rgba(255,255,255,.2);transition:.25s}
    .carousel-dots button.active{width:24px;background:var(--accent)}
    .sticky-cta{position:fixed;right:16px;bottom:16px;z-index:40}
    .footer{padding:36px 0;background:#0b0e13;border-top:1px solid rgba(255,255,255,.08)}
    .footer-grid{display:grid;grid-template-columns:1.2fr 1fr auto;gap:24px;align-items:center}
    .footer p,.footer a{color:rgba(255,255,255,.72);font-size:14px}
    .footer-links,.socials{display:flex;gap:16px;flex-wrap:wrap;align-items:center}
    .social{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);transition:.25s}
    .social:hover,.tab-pill:hover,.feature-tab:hover,.hover-lift:hover{transform:translateY(-6px);box-shadow:0 16px 28px rgba(0,0,0,.22)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}.reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}
    .scene-expand{width:75%;margin:0 auto;border-radius:24px;overflow:hidden;will-change:width,border-radius}
    .scene-expand img{width:100%;height:100%;object-fit:cover;transform:scale(1.08);will-change:transform}
    .zoom-reveal{overflow:hidden;border-radius:16px}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.15);will-change:transform;transition:transform 0s}
    [data-depth]{will-change:transform}.depth-foreground{position:relative;z-index:3}.depth-midground{position:relative;z-index:2}.depth-background{position:absolute;inset:0;z-index:1}
    .card-3d-stack{position:relative;transform-style:preserve-3d;perspective:1000px}
    .card-3d-stack>*:nth-child(1){transform:translateZ(40px) translateY(0)} .card-3d-stack>*:nth-child(2){transform:translateZ(20px) translateY(12px) scale(.97);opacity:.8} .card-3d-stack>*:nth-child(3){transform:translateZ(0) translateY(24px) scale(.94);opacity:.5}
    .clip-reveal{clip-path:inset(100% 0 0 0);will-change:clip-path}
    .hero-cinematic-bg{transform:scale(1.06);transform-origin:center center;will-change:transform}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}} @keyframes floatRotate{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-8px) rotate(2deg)}} @keyframes ambientPulse{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}} @keyframes driftLeft{0%,100%{transform:translateX(0) translateY(0)}33%{transform:translateX(-12px) translateY(-8px)}66%{transform:translateX(8px) translateY(-14px)}}
    .float-ambient{animation:floatY 6s ease-in-out infinite}.float-rotate{animation:floatRotate 8s ease-in-out infinite}.float-pulse{animation:ambientPulse 4s ease-in-out infinite}.float-drift{animation:driftLeft 10s ease-in-out infinite}.float-delay-1{animation-delay:-2s}.float-delay-2{animation-delay:-4s}.float-delay-3{animation-delay:-1s}
    .stagger-parent>*{opacity:0;transform:translateY(32px);will-change:opacity,transform}
    .split-text .word{display:inline-block;overflow:hidden}.split-text .char{display:inline-block;will-change:transform,opacity}
    .btn-magnetic{position:relative;transition:transform .3s cubic-bezier(.34,1.56,.64,1);display:inline-block}
    .text-reveal-mask{overflow:hidden;display:block}.text-reveal-inner{display:block;transform:translateY(110%);will-change:transform}
    .cursor-glow{position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);background:radial-gradient(circle,var(--accent-glow) 0%,transparent 70%);transition:opacity .3s ease}
    .glass-card{background:rgba(255,255,255,.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.1);border-radius:20px}
    .noise-overlay::after{content:'';position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;opacity:.4;z-index:1}
    @media (max-width: 991px){
      .hero-grid,.product-panel,.proof-grid,.pricing-grid,.footer-grid{grid-template-columns:1fr}
      .gallery-grid{grid-template-columns:1fr 1fr}
      .testimonial-grid{grid-template-columns:1fr}
      .feature-shell{grid-template-columns:1fr}
      .metrics{grid-template-columns:1fr}
      .hero-copy h1{font-size:54px}
      .nav-inner{grid-template-columns:1fr auto;row-gap:12px}
      .nav-right{justify-self:end}
      .nav-cta{grid-column:1/-1;justify-self:start}
    }
    @media (max-width: 640px){
      .container{width:min(100% - 24px,1200px)}
      .hero-copy h1{font-size:54px}
      .section{padding:70px 0}
      .gallery-grid{grid-template-columns:1fr}
      .form-grid{grid-template-columns:1fr}
      .section-head h2{font-size:34px}
      .hero-actions{flex-direction:column;align-items:flex-start}
      .brand-name{font-size:16px}
    }
  `;

  const renderIcon = () => (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
      <path d="M12 3l2.7 5.47L21 9.4l-4.5 4.39 1.06 6.21L12 17.1 6.44 20l1.06-6.21L3 9.4l6.3-.93L12 3z" />
    </svg>
  );

  return (
    <div className="lp">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand-name" style={{ color: accent }}>
            Seedream 4.5 and Seedance 1.5 Pro by ByteDance
          </div>
          <div className="nav-right">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <a href="#lead-form" className="animated-cta nav-cta">
            Get Free Consultation
          </a>
        </div>
      </nav>

      <section className="hero noise-overlay">
        <div className="hero-bg-wrap hero-cinematic-bg depth-background" data-depth="0.4">
          <video autoPlay muted loop playsInline preload="auto">
            <source src="/output/generated-assets/ds_1778051924089_c52a5284/08-8c93b9a6e6.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-bg-overlay" />
        <div className="hero-orb float-drift float-delay-1" />
        <div className="hero-orb2 float-drift float-delay-2" />
        <div className="container hero-grid">
          <div className="hero-copy depth-foreground" data-depth="0.15">
            <h1 className="split-text">
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with
              ByteDance Generative Models
            </h1>
            <p className="reveal reveal-delay-1">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation)
              and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by
              ByteDance for high-quality visual content creation.
            </p>
            <div className="chip-row reveal reveal-delay-2">
              {[
                'AI Image Generation',
                'AI Video Generation',
                'High-Resolution Output',
                'Audio-Visual Synchronization',
                'Cinematic Camera Control',
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  {renderIcon()}
                  <span>{chip}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions reveal reveal-delay-3">
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
              <p>
                Professionals and businesses creating high-quality visual content, including creative
                teams, marketers, designers, video producers, art directors, and marketing managers
              </p>
              <form>
                <div className="form-grid">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" type="text" placeholder="Enter your name" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" placeholder="Enter your email" />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" type="tel" placeholder="Enter your phone" />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" type="text" placeholder="Enter your company" />
                  </div>
                </div>
                <button type="submit" className="animated-cta full-btn">
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft clip-reveal">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Built for <span className="gradient-text">high-quality visual content</span>
            </h2>
            <p>
              AI Image Generation and AI Video Generation for professionals and businesses creating
              high-quality visual content.
            </p>
          </div>
          <div className="metrics stagger-parent">
            <div className="metric-card glass-card hover-lift">
              <div className="metric-number" data-count="4" data-suffix="K">
                0
              </div>
              <div className="metric-label">High-resolution image generation (up to 4K quality)</div>
            </div>
            <div className="metric-card glass-card hover-lift">
              <div className="metric-number" data-count="10" data-suffix="×">
                0
              </div>
              <div className="metric-label">Optimized inference pipeline significantly improves generation speed</div>
            </div>
            <div className="metric-card glass-card hover-lift">
              <div className="metric-number" data-count="2">
                0
              </div>
              <div className="metric-label">AI Image Generation and AI Video Generation</div>
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section bg-dark">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Explore <span className="gradient-text">ByteDance generative models</span>
            </h2>
            <p>
              Unlock image creation, multimodal editing, native audio-visual generation, and cinematic
              storytelling workflows in one modern stack.
            </p>
          </div>

          <div className="tab-pills reveal">
            {products.map((item, i) => (
              <button
                key={item.name}
                className={`tab-pill ${activeProduct === i ? 'active' : ''}`}
                onClick={() => setActiveProduct(i)}
              >
                {item.name}
              </button>
            ))}
          </div>

          {activeProduct === 0 && (
            <div className="product-panel">
              <div className="scene-expand" data-depth="0.2">
                <div className="browser-frame" style={{ background: '#f8f8f8' }}>
                  <div className="browser-top">
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                  </div>
                  <div className="browser-body zoom-reveal">
                    <img
                      src="/output/generated-assets/ds_1778051924089_c52a5284/10-41ea7f7485.png"
                      alt="Seedream 4.5"
                    />
                  </div>
                </div>
              </div>

              <div className="content-box" data-depth="0.15">
                <span className="eyebrow">Seedream 4.5</span>
                <h2 className="heading-font reveal">
                  AI Image Generation with <span className="gradient-text">Seedream 4.5</span>
                </h2>
                <div className="desc-bar reveal reveal-delay-1">
                  Seedream 4.5 is a high-performance multimodal image generation system designed to
                  produce high-resolution, high-fidelity images from text prompts and visual inputs.
                  The model unifies text-to-image synthesis, image editing, and multi-image composition
                  within a single framework.
                </div>

                <div className="feature-shell">
                  <div className="feature-tabs stagger-parent">
                    {products[0].features.map((feature, idx) => (
                      <button
                        key={feature.title}
                        className={`feature-tab ${activeSeedreamFeature === idx ? 'active' : ''}`}
                        onClick={() => setActiveSeedreamFeature(idx)}
                      >
                        <strong>{feature.title}</strong>
                      </button>
                    ))}
                  </div>
                  <div className="feature-preview glass-card hover-lift">
                    <h4>{products[0].features[activeSeedreamFeature].title}</h4>
                    <p>{products[0].features[activeSeedreamFeature].description}</p>
                    <div className="icon-row">
                      <div className="icon-box">{renderIcon()}</div>
                      <div className="icon-box">{renderIcon()}</div>
                      <div className="icon-box">{renderIcon()}</div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: 24 }}>
                  <a href="#lead-form" className="animated-cta">
                    Get Free Consultation
                  </a>
                </div>
              </div>
            </div>
          )}

          {activeProduct === 1 && (
            <div className="product-panel">
              <div className="content-box" data-depth="0.15">
                <span className="eyebrow">Seedance 1.5 Pro</span>
                <h2 className="heading-font reveal">
                  AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro</span>
                </h2>
                <div className="desc-bar reveal reveal-delay-1">
                  Seedance 1.5 Pro is a next-generation generative model designed for native
                  audio-visual generation, enabling synchronized creation of video and sound together.
                  Built on a dual-branch diffusion transformer architecture, the model integrates
                  cross-modal learning to produce coherent visual and audio outputs.
                </div>

                <div className="feature-shell">
                  <div className="feature-tabs stagger-parent">
                    {products[1].features.map((feature, idx) => (
                      <button
                        key={feature.title}
                        className={`feature-tab ${activeSeedanceFeature === idx ? 'active' : ''}`}
                        onClick={() => setActiveSeedanceFeature(idx)}
                      >
                        <strong>{feature.title}</strong>
                      </button>
                    ))}
                  </div>
                  <div className="feature-preview glass-card hover-lift">
                    <h4>{products[1].features[activeSeedanceFeature].title}</h4>
                    <p>{products[1].features[activeSeedanceFeature].description}</p>
                    <div className="icon-row">
                      <div className="icon-box">{renderIcon()}</div>
                      <div className="icon-box">{renderIcon()}</div>
                      <div className="icon-box">{renderIcon()}</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="scene-expand" data-depth="0.2">
                <div className="browser-frame" style={{ background: '#0a0a0a' }}>
                  <div className="browser-top">
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                    <span className="browser-dot" />
                  </div>
                  <div className="browser-body zoom-reveal">
                    <img
                      src="/output/generated-assets/ds_1778051924089_c52a5284/06-4c8f6823a3.png"
                      alt="Seedance 1.5 Pro"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      <section className="section bg-deep pin-scene">
        <div className="container">
          <div className="proof-grid">
            <div data-depth="0.15">
              <div className="section-head" style={{ marginBottom: 20 }}>
                <h2>
                  Motion-first <span className="gradient-text">video gallery</span>
                </h2>
              </div>
              <div className="dark-card glass-card hover-lift">
                <p style={{ margin: 0, lineHeight: 1.8, color: 'rgba(255,255,255,.78)' }}>
                  Seedance enables professional-grade AI video production with narrative coherence and
                  realistic motion. Generate video and audio simultaneously with strong multimodal
                  alignment, support multilingual lip synchronization, and create cinematic storytelling.
                </p>
              </div>
            </div>
            <div className="card-3d-stack" data-depth="0.22">
              <div className="dark-card glass-card">Text-to-Video Generation</div>
              <div className="dark-card glass-card">Audio-Visual Synchronization</div>
              <div className="dark-card glass-card">Multilingual Lip-Sync</div>
            </div>
          </div>

          <div className="gallery-grid" style={{ marginTop: 30 }}>
            {demoVideos.map((video, i) => (
              <div className="video-card zoom-reveal hover-lift" key={i}>
                <video autoPlay muted loop playsInline preload="auto">
                  <source src={video} type="video/mp4" />
                </video>
                <div className="video-meta">
                  {i === 0 && 'Text-to-Video Generation'}
                  {i === 1 && 'Cinematic Camera Control'}
                  {i === 2 && 'Audio-Visual Synchronization'}
                  {i === 3 && 'Multilingual Lip-Sync'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-soft clip-reveal">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Pricing for <span className="gradient-text">image and video generation</span>
            </h2>
            <p>Choose the product path based on your content creation workflow and production needs.</p>
          </div>

          <div className="pricing-grid stagger-parent">
            <div className="price-card hover-lift">
              <span className="badge-green">High-resolution image generation</span>
              <h3>Seedream 4.5 (AI Image Generation)</h3>
              <div className="price muted">Contact for pricing</div>
              <ul className="list">
                <li><span className="check">✓</span><span>High-resolution image generation (up to 4K quality)</span></li>
                <li><span className="check">✓</span><span>Text-to-image &amp; multimodal image editing</span></li>
                <li><span className="check">✓</span><span>Multi-image composition for complex visuals</span></li>
                <li><span className="check">✓</span><span>Enhanced typographic rendering for posters, ads &amp; text-heavy designs</span></li>
              </ul>
              <a href="#lead-form" className="animated-cta full-btn">
                Get Free Consultation
              </a>
            </div>

            <div className="price-card highlight hover-lift">
              <span className="badge-green">Starting at $1,000/month/</span>
              <h3>Seedance 1.5 Pro (AI Video Generation)</h3>
              <div className="price">Starting at $1,000/month/</div>
              <ul className="list">
                <li><span className="check">✓</span><span>Text-to-video generation with cinematic output</span></li>
                <li><span className="check">✓</span><span>Native audio + video generation (synchronized)</span></li>
                <li><span className="check">✓</span><span>Multilingual lip-sync capabilities</span></li>
                <li><span className="check">✓</span><span>Fast inference for quicker video production</span></li>
              </ul>
              <div className="animated-cta full-btn" style={{ textAlign: 'center' }}>
                Get Quote
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              What creative teams say about <span className="gradient-text">Seedream and Seedance</span>
            </h2>
            <p>Real feedback from creative, video, art, and marketing professionals.</p>
          </div>

          <div className="testimonial-grid">
            {testimonials.slice(0, 4).map((item, i) => (
              <div
                key={i}
                className="testimonial-card hover-lift"
                style={{ display: i === activeSlide % 4 || window.innerWidth > 991 ? 'block' : 'block' }}
              >
                <div className="quote-mark">❝</div>
                <div className="stars">★★★★★</div>
                <p>{item.quote}</p>
                <div className="author">{item.author}</div>
                <div className="role">{item.role}</div>
              </div>
            ))}
          </div>

          <div className="carousel-dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={i === activeSlide ? 'active' : ''}
                onClick={() => setActiveSlide(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </section>

      <div className="sticky-cta">
        <a href="#lead-form" className="animated-cta btn-magnetic">
          Get Free Consultation
        </a>
      </div>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <p style={{ marginTop: 14 }}>support@techjockey.com</p>
            <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>

          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms-condition">Terms</a>
          </div>

          <div className="socials">
            <a className="social" href="https://www.facebook.com/techjockey/" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-1.3-.1-2.5-.1-2.4 0-4 1.5-4 4.2V11H8v3h2.5v8h3z"/></svg>
            </a>
            <a className="social" href="https://www.instagram.com/techjockey/" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1012 16a3.5 3.5 0 000-7zm6.25-3.1a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"/></svg>
            </a>
            <a className="social" href="https://x.com/TechjockeyInfo" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.2l7.2-8.2L1 2h6.4l4.4 5.8L18.9 2zm-1.1 18h1.7L6.5 3.9H4.7L17.8 20z"/></svg>
            </a>
            <a className="social" href="https://www.linkedin.com/company/techjockey-infotech-pvt-ltd-" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5A1.56 1.56 0 105.38 6.94 1.56 1.56 0 006.94 8.5zM5.6 9.75h2.68V18H5.6zm4.38 0h2.57v1.12h.04a2.82 2.82 0 012.54-1.4c2.72 0 3.22 1.79 3.22 4.12V18h-2.68v-3.92c0-.94-.02-2.15-1.31-2.15s-1.51 1.02-1.51 2.08V18H9.98z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;