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
      { threshold: 0.12 }
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
            cursorGlowRef.current = glow;
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
                start: 'top 82%',
                end: 'top 24%',
                scrub: 1.1,
              },
            });
            const media = scene.querySelector('img, video');
            if (media) {
              gsap.to(media, {
                scale: 1,
                ease: 'none',
                scrollTrigger: {
                  trigger: scene,
                  start: 'top 82%',
                  end: 'top 24%',
                  scrub: 1.1,
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
              duration: 1,
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            });
          });

          gsap.utils.toArray('[data-depth]').forEach((el) => {
            const depth = parseFloat(el.dataset.depth) || 0.3;
            gsap.to(el, {
              y: () => -(window.innerHeight * depth * 0.35),
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
              duration: 0.9,
              scrollTrigger: {
                trigger: el,
                start: 'top 86%',
                toggleActions: 'play none none reverse',
              },
            });
          });

          gsap.utils.toArray('.stagger-parent').forEach((parent) => {
            gsap.to(parent.children, {
              opacity: 1,
              y: 0,
              duration: 0.72,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: parent,
                start: 'top 84%',
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
              y: 56,
              opacity: 0,
              rotateX: -24,
              stagger: 0.02,
              duration: 0.8,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 88%',
                toggleActions: 'play none none none',
              },
            });
          });

          gsap.utils.toArray('.text-reveal-mask').forEach((mask) => {
            const inner = mask.querySelector('.text-reveal-inner');
            if (!inner) return;
            gsap.to(inner, {
              y: '0%',
              duration: 0.9,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: mask,
                start: 'top 88%',
                toggleActions: 'play none none reverse',
              },
            });
          });

          document.querySelectorAll('.btn-magnetic').forEach((btn) => {
            btn.addEventListener('mousemove', (e) => {
              const rect = btn.getBoundingClientRect();
              const x = (e.clientX - rect.left - rect.width / 2) * 0.24;
              const y = (e.clientY - rect.top - rect.height / 2) * 0.24;
              gsap.to(btn, { x, y, duration: 0.35, ease: 'power2.out' });
            });
            btn.addEventListener('mouseleave', () => {
              gsap.to(btn, { x: 0, y: 0, duration: 0.55, ease: 'elastic.out(1, 0.4)' });
            });
          });

          gsap.utils.toArray('[data-count]').forEach((el) => {
            const target = parseFloat(el.dataset.count);
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            gsap.from({ val: 0 }, {
              val: target,
              duration: 1.8,
              ease: 'power2.out',
              snap: { val: 1 },
              scrollTrigger: { trigger: el, start: 'top 84%', once: true },
              onUpdate: function () {
                el.textContent =
                  prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
              },
            });
          });

          ScrollTrigger.refresh();
        });
      });
    };

    const t = setTimeout(initGSAP, 800);

    return () => {
      observer.disconnect();
      clearTimeout(t);
    };
  }, [accent, primary]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};--accent-glow:rgba(179,113,63,.14)}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;font-family:Inter,sans-serif;background:#0b0e13;color:#fff}
    a{text-decoration:none;color:inherit}
    img,video{max-width:100%;display:block}
    button,input{font-family:inherit}
    .lp{background:#0b0e13;color:#fff;overflow:hidden}
    .container{width:min(1240px,calc(100% - 32px));margin:0 auto}
    .section{position:relative;padding:64px 0}
    .section.compact{padding:54px 0}
    .bg-dark{background:#0b0e13}
    .bg-deep{background:#111827}
    .bg-soft{background:#13161d}
    .heading-font{font-family:Montserrat,sans-serif}
    .gradient-text{background:linear-gradient(135deg,var(--accent) 0%,var(--primary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .nav{position:sticky;top:0;z-index:50;background:rgba(11,14,19,.88);backdrop-filter:blur(18px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:14px;align-items:center;padding:12px 0}
    .brand-name{font-weight:800;font-size:18px;line-height:1.25;max-width:520px}
    .nav-right{display:flex;align-items:center;gap:12px}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border:none;border-radius:12px;background:var(--accent);color:#fff;font-weight:700;cursor:pointer;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(179,113,63,.28);background:var(--primary)}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border:1px solid rgba(255,255,255,.18);border-radius:12px;background:rgba(255,255,255,.04);color:#fff;font-weight:600;transition:.25s}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 12px 24px rgba(0,0,0,.2);border-color:rgba(255,255,255,.35)}
    .hero{min-height:100vh;display:flex;align-items:center;padding:34px 0 42px;position:relative}
    .hero-bg-wrap,.hero-bg-overlay{position:absolute;inset:0}
    .hero-bg-wrap video,.hero-bg-wrap img{width:100%;height:100%;object-fit:cover}
    .hero-bg-overlay{background:linear-gradient(92deg,rgba(0,0,0,.84) 0%,rgba(0,0,0,.7) 38%,rgba(0,0,0,.62) 100%)}
    .hero-orb,.hero-orb2{position:absolute;border-radius:50%;filter:blur(20px);pointer-events:none}
    .hero-orb{width:260px;height:260px;right:-60px;top:70px;background:radial-gradient(circle,rgba(179,113,63,.32),transparent 68%)}
    .hero-orb2{width:220px;height:220px;left:-50px;bottom:10px;background:radial-gradient(circle,rgba(179,113,63,.2),transparent 68%)}
    .hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.08fr .92fr;gap:26px;align-items:center}
    .hero-copy h1{font-family:Montserrat,sans-serif;font-size:54px;line-height:1.05;margin:0 0 14px;max-width:780px}
    .hero-copy p{font-size:17px;line-height:1.65;color:rgba(255,255,255,.8);max-width:680px;margin:0}
    .chip-row{display:flex;flex-wrap:wrap;gap:10px;margin:20px 0 22px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(179,113,63,.45);background:rgba(179,113,63,.1);color:#fff;font-size:13px}
    .chip svg{width:16px;height:16px;color:var(--accent);flex:0 0 16px}
    .hero-actions{display:flex;gap:12px;flex-wrap:wrap}
    .hero-visual{min-height:420px;display:flex;align-items:center;justify-content:center}
    .form-card{width:100%;max-width:440px;padding:24px;border-radius:22px;background:rgba(255,255,255,.08);backdrop-filter:blur(18px);-webkit-backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.12);box-shadow:0 22px 60px rgba(0,0,0,.34)}
    .form-card h3{margin:0 0 8px;font-family:Montserrat,sans-serif;font-size:28px}
    .form-card p{margin:0 0 16px;color:rgba(255,255,255,.68);font-size:14px;line-height:1.55}
    .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .field{display:flex;flex-direction:column;gap:8px}
    .field.full{grid-column:1/-1}
    .field label{font-size:13px;color:rgba(255,255,255,.72)}
    .field input{width:100%;height:46px;padding:0 14px;border-radius:12px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.06);color:#fff;outline:none;transition:.25s}
    .field input:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(179,113,63,.14)}
    .full-btn{width:100%;margin-top:14px}
    .metrics{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
    .metric-card{padding:18px;border-radius:18px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);text-align:center}
    .metric-number{font-family:Montserrat,sans-serif;font-size:32px;color:#fff}
    .metric-label{margin-top:6px;color:rgba(255,255,255,.68);font-size:13px}
    .section-head{display:flex;justify-content:space-between;gap:20px;align-items:end;margin-bottom:22px}
    .section-head h2{font-family:Montserrat,sans-serif;font-size:38px;line-height:1.08;margin:0}
    .section-head p{max-width:620px;color:rgba(255,255,255,.7);margin:0;line-height:1.65}
    .tab-pills{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px}
    .tab-pill{padding:11px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#fff;font-weight:600;cursor:pointer;transition:.25s}
    .tab-pill.active{background:var(--accent);border-color:var(--accent)}
    .product-panel{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:22px;border:1px solid rgba(255,255,255,.08);box-shadow:0 22px 60px rgba(0,0,0,.28)}
    .browser-top{display:flex;align-items:center;gap:8px;padding:12px 14px;background:rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.08)}
    .browser-dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.35)}
    .browser-body{position:relative;flex:1;min-height:0}
    .browser-body img{height:360px;width:100%;object-fit:cover}
    .content-box{padding:6px 0}
    .eyebrow{display:inline-flex;padding:8px 12px;border-radius:999px;background:rgba(179,113,63,.12);border:1px solid rgba(179,113,63,.35);color:#fff;font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;margin-bottom:14px}
    .desc-bar{border-left:2px solid rgba(179,113,63,.5);padding-left:16px;color:rgba(255,255,255,.74);line-height:1.7;margin:14px 0 18px}
    .feature-shell{display:grid;grid-template-columns:220px 1fr;gap:16px;align-items:start}
    .feature-tabs{display:flex;flex-direction:column;gap:8px}
    .feature-tab{padding:12px 13px;border-radius:14px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);cursor:pointer;transition:.25s}
    .feature-tab.active{background:rgba(179,113,63,.16);border-color:rgba(179,113,63,.45)}
    .feature-tab strong{display:block;font-size:14px;line-height:1.4}
    .feature-preview{padding:18px;border-radius:18px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.09);min-height:180px}
    .feature-preview h4{font-family:Montserrat,sans-serif;font-size:22px;margin:0 0 10px}
    .feature-preview p{margin:0;color:rgba(255,255,255,.73);line-height:1.65}
    .icon-row{display:flex;gap:12px;margin-top:16px}
    .icon-box{width:42px;height:42px;border-radius:14px;background:rgba(179,113,63,.14);display:flex;align-items:center;justify-content:center;border:1px solid rgba(179,113,63,.3)}
    .proof-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:20px;align-items:center}
    .dark-card{padding:22px;border-radius:22px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1)}
    .gallery-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
    .video-card{border-radius:18px;overflow:hidden;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)}
    .video-card video{width:100%;height:220px;object-fit:cover}
    .video-meta{padding:12px 12px 14px;color:#fff;font-weight:600;font-size:14px}
    .pricing-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
    .price-card{padding:24px;border-radius:22px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);position:relative}
    .price-card.highlight{box-shadow:0 0 0 1px rgba(179,113,63,.45),0 22px 52px rgba(179,113,63,.12)}
    .badge-green{display:inline-flex;padding:8px 12px;border-radius:999px;background:rgba(34,197,94,.15);border:1px solid rgba(34,197,94,.35);color:#86efac;font-size:12px;font-weight:700;margin-bottom:14px}
    .price-card h3{font-family:Montserrat,sans-serif;font-size:26px;line-height:1.25;margin:0 0 8px}
    .price{font-family:Montserrat,sans-serif;font-size:32px;margin:10px 0 16px}
    .muted{color:rgba(255,255,255,.62)}
    .strike{text-decoration:line-through;color:rgba(255,255,255,.38)}
    .list{display:grid;gap:10px;padding:0;margin:0 0 20px;list-style:none}
    .list li{display:flex;gap:12px;color:rgba(255,255,255,.75);line-height:1.5}
    .check{width:20px;height:20px;border-radius:50%;background:rgba(34,197,94,.15);border:1px solid rgba(34,197,94,.35);display:flex;align-items:center;justify-content:center;color:#86efac;font-size:12px;flex:0 0 20px}
    .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .testimonial-card{padding:20px;border-radius:20px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08);min-height:220px;display:flex;flex-direction:column;justify-content:space-between}
    .testimonial-card.featured{background:linear-gradient(180deg,rgba(179,113,63,.18),rgba(255,255,255,.05));border-color:rgba(179,113,63,.35)}
    .stars{display:flex;gap:4px;margin-bottom:12px;color:#fbbf24}
    .testimonial-card p{margin:0;color:rgba(255,255,255,.78);line-height:1.7}
    .author{margin-top:16px}
    .author strong{display:block;font-size:15px}
    .author span{font-size:13px;color:rgba(255,255,255,.62)}
    .cta-panel{display:grid;grid-template-columns:1.05fr .95fr;gap:18px;align-items:center;padding:26px;border-radius:24px;background:linear-gradient(135deg,rgba(179,113,63,.18),rgba(255,255,255,.05));border:1px solid rgba(179,113,63,.24)}
    .cta-panel h2{margin:0 0 10px;font-family:Montserrat,sans-serif;font-size:38px;line-height:1.08}
    .cta-panel p{margin:0;color:rgba(255,255,255,.74);line-height:1.7}
    .mini-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .mini-card{padding:18px;border-radius:18px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)}
    .mini-card h4{margin:0 0 8px;font-size:16px}
    .mini-card p{margin:0;color:rgba(255,255,255,.68);font-size:14px;line-height:1.6}
    .footer{padding:26px 0;border-top:1px solid rgba(255,255,255,.08);background:#0b0e13}
    .footer-inner{display:flex;justify-content:space-between;gap:16px;align-items:center;flex-wrap:wrap}
    .footer p{margin:0;color:rgba(255,255,255,.6);font-size:14px}
    .reveal{opacity:0;transform:translateY(24px);transition:opacity .75s ease,transform .75s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .zoom-reveal img,.zoom-reveal video,.scene-expand img,.scene-expand video,.hero-cinematic-bg{transform:scale(1.08);will-change:transform}
    .clip-reveal{clip-path:inset(0 0 100% 0)}
    .stagger-parent>*{opacity:0;transform:translateY(18px)}
    .text-reveal-mask{overflow:hidden}
    .text-reveal-inner{transform:translateY(110%)}
    .cursor-glow{position:fixed;top:-80px;left:-80px;width:160px;height:160px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(179,113,63,.16),transparent 62%);filter:blur(18px);z-index:5}
    .media-stack{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .media-card{border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.04);box-shadow:0 18px 48px rgba(0,0,0,.25)}
    .media-card img,.media-card video{width:100%;height:220px;object-fit:cover}
    .media-card.tall img,.media-card.tall video{height:458px}
    .space-top-sm{margin-top:14px}
    @media (max-width:1100px){
      .container{width:min(1240px,calc(100% - 26px))}
      .hero-grid,.product-panel,.proof-grid,.cta-panel{grid-template-columns:1fr}
      .hero-visual{min-height:auto}
      .metrics,.testimonial-grid,.gallery-grid,.pricing-grid,.media-stack{grid-template-columns:1fr 1fr}
      .feature-shell{grid-template-columns:1fr}
      .section{padding:54px 0}
      .browser-body img{height:320px}
    }
    @media (max-width:768px){
      .nav-inner{grid-template-columns:1fr;justify-items:start}
      .hero{min-height:auto;padding:26px 0 32px}
      .hero-copy h1{font-size:54px}
      .hero-copy p{font-size:16px}
      .form-grid,.metrics,.testimonial-grid,.gallery-grid,.pricing-grid,.mini-grid,.media-stack{grid-template-columns:1fr}
      .section-head{flex-direction:column;align-items:start}
      .section-head h2,.cta-panel h2{font-size:30px}
      .feature-shell{gap:12px}
      .browser-body img{height:260px}
      .video-card video,.media-card img,.media-card video,.media-card.tall img,.media-card.tall video{height:220px}
    }
  `;

  const currentProduct = products[activeProduct];
  const currentFeatures = activeProduct === 0 ? products[0].features : products[1].features;
  const activeFeatureIndex = activeProduct === 0 ? activeSeedreamFeature : activeSeedanceFeature;
  const activeFeature = currentFeatures[activeFeatureIndex];

  return (
    <>
      <style>{css}</style>
      <div className="lp">
        <nav className="nav">
          <div className="container nav-inner">
            <div className="brand-name">Techjockey | Seedream 4.5 & Seedance 1.5 Pro</div>
            <div className="nav-right">
              <a href="#products" className="ghost-btn">Explore Products</a>
              <a href="#demo-form" className="animated-cta btn-magnetic">Get Free Demo</a>
            </div>
          </div>
        </nav>

        <section className="hero bg-dark">
          <div className="hero-bg-wrap">
            <video
              className="hero-cinematic-bg"
              src="https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiShot.mp4"
              autoPlay
              muted
              loop
              playsInline
            />
          </div>
          <div className="hero-bg-overlay" />
          <div className="hero-orb" data-depth="0.18" />
          <div className="hero-orb2" data-depth="0.12" />

          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">AI Image & Video Generation</div>
              <h1 className="split-text">Transform Creative Production with Seedream 4.5 and Seedance 1.5 Pro</h1>
              <p>
                Explore high-fidelity AI image generation and next-generation audio-visual video creation.
                Techjockey helps you evaluate, compare, and book a free demo for the right solution.
              </p>

              <div className="chip-row stagger-parent">
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l2.9 5.88L21 8.75l-4.5 4.38 1.06 6.19L12 16.9 6.44 19.32 7.5 13.13 3 8.75l6.1-.87L12 2z" fill="currentColor"/></svg>
                  Text-to-Image Precision
                </div>
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l2.9 5.88L21 8.75l-4.5 4.38 1.06 6.19L12 16.9 6.44 19.32 7.5 13.13 3 8.75l6.1-.87L12 2z" fill="currentColor"/></svg>
                  Native Audio-Visual Generation
                </div>
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 2l2.9 5.88L21 8.75l-4.5 4.38 1.06 6.19L12 16.9 6.44 19.32 7.5 13.13 3 8.75l6.1-.87L12 2z" fill="currentColor"/></svg>
                  Free Demo with Techjockey
                </div>
              </div>

              <div className="hero-actions">
                <a href="#demo-form" className="animated-cta btn-magnetic">Book Free Demo</a>
                <a href="#pricing" className="ghost-btn">View Packages</a>
              </div>

              <div className="space-top-sm">
                <div className="metrics reveal">
                  <div className="metric-card">
                    <div className="metric-number" data-count="4">0</div>
                    <div className="metric-label">Core Demo Assets</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-number" data-count="10" data-suffix="x">0</div>
                    <div className="metric-label">Faster Inference</div>
                  </div>
                  <div className="metric-card">
                    <div className="metric-number" data-count="2">0</div>
                    <div className="metric-label">Products to Compare</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="hero-visual reveal" id="demo-form">
              <div className="form-card">
                <h3>Schedule Your Free Demo</h3>
                <p>Talk to our product experts and discover how Seedream and Seedance fit your creative workflow.</p>
                <form>
                  <div className="form-grid">
                    <div className="field">
                      <label>Name</label>
                      <input type="text" placeholder="Enter your name" />
                    </div>
                    <div className="field">
                      <label>Phone</label>
                      <input type="tel" placeholder="Enter phone number" />
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input type="email" placeholder="Enter email address" />
                    </div>
                    <div className="field">
                      <label>Company</label>
                      <input type="text" placeholder="Enter company name" />
                    </div>
                    <div className="field full">
                      <label>Requirement</label>
                      <input type="text" placeholder="Image generation, video generation, or both" />
                    </div>
                  </div>
                  <button type="submit" className="animated-cta full-btn btn-magnetic">Request Demo</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="section compact bg-soft reveal">
          <div className="container">
            <div className="proof-grid">
              <div className="dark-card">
                <div className="eyebrow">Why teams choose this stack</div>
                <div className="section-head" style={{ marginBottom: 0 }}>
                  <h2>Faster output. Better quality. Less production friction.</h2>
                </div>
                <p className="desc-bar">
                  From prompt-driven creative ideation to synchronized video storytelling, these tools help brands,
                  agencies, and studios reduce manual effort while improving consistency and speed.
                </p>
                <div className="mini-grid stagger-parent">
                  <div className="mini-card">
                    <h4>Creative Campaigns</h4>
                    <p>Generate posters, product creatives, pitch visuals, and brand assets with high fidelity.</p>
                  </div>
                  <div className="mini-card">
                    <h4>Video Storytelling</h4>
                    <p>Create dynamic scenes, motion-rich clips, and synchronized audio-visual outputs for campaigns.</p>
                  </div>
                  <div className="mini-card">
                    <h4>Editing & Iteration</h4>
                    <p>Refine concepts faster with multimodal image editing and structured visual control.</p>
                  </div>
                  <div className="mini-card">
                    <h4>Evaluation Support</h4>
                    <p>Compare both solutions with Techjockey experts before making your buying decision.</p>
                  </div>
                </div>
              </div>

              <div className="media-stack zoom-reveal">
                <div className="media-card tall">
                  <img src="/output/generated-assets/ds_1778051924089_c52a5284/10-41ea7f7485.png" alt="Seedream preview" />
                </div>
                <div style={{ display: 'grid', gap: '14px' }}>
                  <div className="media-card">
                    <img src="/output/generated-assets/ds_1778051924089_c52a5284/06-4c8f6823a3.png" alt="Seedance preview" />
                  </div>
                  <div className="media-card">
                    <video src="https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4" autoPlay muted loop playsInline />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="products" className="section bg-dark">
          <div className="container">
            <div className="section-head reveal">
              <h2>Compare the Products</h2>
              <p>
                Explore Seedream 4.5 for advanced AI image generation and Seedance 1.5 Pro for native audio-visual video generation.
              </p>
            </div>

            <div className="tab-pills reveal">
              {products.map((product, index) => (
                <button
                  key={product.name}
                  className={`tab-pill ${activeProduct === index ? 'active' : ''}`}
                  onClick={() => setActiveProduct(index)}
                >
                  {product.name}
                </button>
              ))}
            </div>

            <div className="product-panel">
              <div className="browser-frame zoom-reveal reveal">
                <div className="browser-top">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                </div>
                <div className="browser-body">
                  <img src={currentProduct.image} alt={currentProduct.name} />
                </div>
              </div>

              <div className="content-box reveal">
                <div className="eyebrow">{currentProduct.name}</div>
                <div className="text-reveal-mask">
                  <div className="text-reveal-inner">
                    <h2 className="heading-font" style={{ margin: '0 0 8px', fontSize: '34px', lineHeight: '1.15' }}>
                      {currentProduct.headline}
                    </h2>
                  </div>
                </div>
                <p className="desc-bar">{currentProduct.description}</p>

                <div className="feature-shell">
                  <div className="feature-tabs">
                    {currentFeatures.map((feature, index) => (
                      <div
                        key={feature.title}
                        className={`feature-tab ${activeFeatureIndex === index ? 'active' : ''}`}
                        onClick={() => {
                          if (activeProduct === 0) setActiveSeedreamFeature(index);
                          else setActiveSeedanceFeature(index);
                        }}
                      >
                        <strong>{feature.title}</strong>
                      </div>
                    ))}
                  </div>

                  <div className="feature-preview">
                    <h4>{activeFeature.title}</h4>
                    <p>{activeFeature.description}</p>
                    <div className="icon-row">
                      <div className="icon-box">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 2l2.5 6.5L21 11l-6.5 2.5L12 20l-2.5-6.5L3 11l6.5-2.5L12 2z" fill="currentColor"/>
                        </svg>
                      </div>
                      <div className="icon-box">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M4 12h16M12 4v16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                        </svg>
                      </div>
                      <div className="icon-box">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M5 12l5 5L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section compact bg-deep">
          <div className="container">
            <div className="section-head reveal">
              <h2>See the Output in Action</h2>
              <p>
                Review example videos and output previews to understand motion quality, synchronization, and production-ready visual style.
              </p>
            </div>
            <div className="gallery-grid stagger-parent">
              {demoVideos.map((video, index) => (
                <div className="video-card reveal" key={video}>
                  <video src={video} autoPlay muted loop playsInline />
                  <div className="video-meta">Demo Preview {index + 1}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-soft">
          <div className="container">
            <div className="proof-grid">
              <div className="dark-card reveal">
                <div className="eyebrow">What makes them stand out</div>
                <h2 className="heading-font" style={{ margin: '0 0 10px', fontSize: '36px', lineHeight: '1.1' }}>
                  Built for modern creative teams
                </h2>
                <p className="desc-bar">
                  Both products are designed to improve production efficiency, reduce turnaround time, and unlock richer output quality for demanding creative environments.
                </p>
                <ul className="list">
                  <li><span className="check">✓</span><span>High-resolution image creation with strong text and layout understanding</span></li>
                  <li><span className="check">✓</span><span>Video generation with synchronized audio and visual coherence</span></li>
                  <li><span className="check">✓</span><span>Support for iterative creative workflows and concept refinement</span></li>
                  <li><span className="check">✓</span><span>Free product demo and buying assistance from Techjockey experts</span></li>
                </ul>
              </div>

              <div className="media-stack reveal">
                <div className="media-card">
                  <video src="https://cdn.web.imagine.art/imagine-one/cdge/sora1.mp4" autoPlay muted loop playsInline />
                </div>
                <div className="media-card">
                  <video src="https://cdn.web.imagine.art/imagine-one/cdge/sora2.mp4" autoPlay muted loop playsInline />
                </div>
                <div className="media-card">
                  <img src="/output/generated-assets/ds_1778051924089_c52a5284/10-41ea7f7485.png" alt="Generated image example" />
                </div>
                <div className="media-card">
                  <img src="/output/generated-assets/ds_1778051924089_c52a5284/06-4c8f6823a3.png" alt="Generated video scene example" />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="pricing" className="section compact bg-dark">
          <div className="container">
            <div className="section-head reveal">
              <h2>Packages & Buying Support</h2>
              <p>
                Choose the evaluation path that matches your needs and let Techjockey guide you through comparison, demo, and decision-making.
              </p>
            </div>

            <div className="pricing-grid">
              <div className="price-card reveal">
                <div className="badge-green">Best for Evaluation</div>
                <h3>Free Product Demo</h3>
                <p className="muted">Understand workflows, use cases, and output quality before you decide.</p>
                <div className="price">₹0</div>
                <ul className="list">
                  <li><span className="check">✓</span><span>Expert consultation with Techjockey</span></li>
                  <li><span className="check">✓</span><span>Product walkthrough for Seedream and Seedance</span></li>
                  <li><span className="check">✓</span><span>Requirement-based recommendations</span></li>
                  <li><span className="check">✓</span><span>Shortlisting help for your team</span></li>
                </ul>
                <a href="#demo-form" className="animated-cta btn-magnetic">Book Free Demo</a>
              </div>

              <div className="price-card highlight reveal">
                <div className="badge-green">Talk to Sales</div>
                <h3>Custom Enterprise Plan</h3>
                <p className="muted">For agencies, studios, and teams needing deployment and usage guidance.</p>
                <div className="price">
                  Custom <span className="muted" style={{ fontSize: '16px' }}>/ quote on request</span>
                </div>
                <ul className="list">
                  <li><span className="check">✓</span><span>Product comparison aligned to business goals</span></li>
                  <li><span className="check">✓</span><span>Support for scaling creative workflows</span></li>
                  <li><span className="check">✓</span><span>Buying assistance from Techjockey advisors</span></li>
                  <li><span className="check">✓</span><span>Customized discussion for your use case</span></li>
                </ul>
                <a href="#demo-form" className="animated-cta btn-magnetic">Get Pricing Details</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section compact bg-deep">
          <div className="container">
            <div className="section-head reveal">
              <h2>What Customers Say</h2>
              <p>
                Real feedback from creative and marketing professionals evaluating advanced AI generation tools through Techjockey.
              </p>
            </div>

            <div className="testimonial-grid">
              {testimonials.slice(0, 3).map((item, index) => (
                <div
                  key={item.author}
                  className={`testimonial-card reveal ${index === activeSlide % 3 ? 'featured' : ''}`}
                >
                  <div>
                    <div className="stars">★★★★★</div>
                    <p>{item.quote}</p>
                  </div>
                  <div className="author">
                    <strong>{item.author}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonial-grid space-top-sm">
              {testimonials.slice(3).map((item, index) => (
                <div key={item.author} className={`testimonial-card reveal ${index === (activeSlide + 1) % 2 ? 'featured' : ''}`}>
                  <div>
                    <div className="stars">★★★★★</div>
                    <p>{item.quote}</p>
                  </div>
                  <div className="author">
                    <strong>{item.author}</strong>
                    <span>{item.role}</span>
                  </div>
                </div>
              ))}
              <div className="testimonial-card featured reveal">
                <div>
                  <div className="stars">★★★★★</div>
                  <p>
                    Get clear product guidance, expert support, and a smoother evaluation journey with Techjockey.
                  </p>
                </div>
                <div className="author">
                  <strong>Techjockey Support</strong>
                  <span>Product Advisory Team</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section compact bg-soft">
          <div className="container">
            <div className="cta-panel reveal">
              <div>
                <div className="eyebrow">Ready to evaluate?</div>
                <h2>Book your free demo and discover the right AI creative solution</h2>
                <p>
                  Compare Seedream 4.5 and Seedance 1.5 Pro with guidance from Techjockey experts and move forward with clarity.
                </p>
              </div>
              <div className="mini-grid">
                <div className="mini-card">
                  <h4>Free Consultation</h4>
                  <p>Discuss your image generation, video production, and campaign needs.</p>
                </div>
                <div className="mini-card">
                  <h4>Expert Shortlisting</h4>
                  <p>Identify whether Seedream, Seedance, or both are the best fit.</p>
                </div>
                <div className="mini-card">
                  <a href="#demo-form" className="animated-cta btn-magnetic" style={{ width: '100%' }}>Request Demo</a>
                </div>
                <div className="mini-card">
                  <a href="#products" className="ghost-btn" style={{ width: '100%' }}>Compare Features</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <p>© 2026 Techjockey. All rights reserved.</p>
            <p>Seedream 4.5 and Seedance 1.5 Pro evaluation support by Techjockey.</p>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;