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
            gsap.from(
              { val: 0 },
              {
                val: target,
                duration: 1.8,
                ease: 'power2.out',
                snap: { val: 1 },
                scrollTrigger: { trigger: el, start: 'top 84%', once: true },
                onUpdate: function () {
                  el.textContent =
                    prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
                },
              }
            );
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
    }, 4200);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const currentProduct = products[activeProduct];
  const currentFeature =
    activeProduct === 0
      ? products[0].features[activeSeedreamFeature]
      : products[1].features[activeSeedanceFeature];

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};--accent-glow:rgba(179,113,63,.14)}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;font-family:Inter,sans-serif;background:#0f1218;color:#fff}
    a{text-decoration:none;color:inherit}
    img,video{max-width:100%;display:block}
    button,input{font-family:inherit}
    .lp{background:
      radial-gradient(circle at top right, rgba(179,113,63,.14), transparent 28%),
      radial-gradient(circle at left center, rgba(179,113,63,.08), transparent 22%),
      linear-gradient(180deg,#0f1218 0%,#121722 55%,#10141d 100%);
      color:#fff;overflow:hidden}
    .container{width:min(1240px,calc(100% - 32px));margin:0 auto}
    .section{position:relative;padding:72px 0}
    .section.compact{padding:58px 0}
    .bg-dark{background:transparent}
    .bg-deep{background:rgba(255,255,255,.02)}
    .bg-soft{background:rgba(255,255,255,.03)}
    .heading-font{font-family:Montserrat,sans-serif}
    .gradient-text{background:linear-gradient(135deg,var(--accent) 0%,#d49a64 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .nav{position:sticky;top:0;z-index:50;background:rgba(15,18,24,.82);backdrop-filter:blur(18px);border-bottom:1px solid rgba(255,255,255,.08)}
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
    .hero-bg-overlay{background:
      linear-gradient(92deg,rgba(8,10,14,.88) 0%,rgba(10,12,17,.76) 38%,rgba(10,12,17,.74) 100%),
      radial-gradient(circle at 70% 35%, rgba(179,113,63,.18), transparent 30%)}
    .hero-orb,.hero-orb2{position:absolute;border-radius:50%;filter:blur(20px);pointer-events:none}
    .hero-orb{width:260px;height:260px;right:-60px;top:70px;background:radial-gradient(circle,rgba(179,113,63,.32),transparent 68%)}
    .hero-orb2{width:220px;height:220px;left:-50px;bottom:10px;background:radial-gradient(circle,rgba(179,113,63,.2),transparent 68%)}
    .hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.08fr .92fr;gap:26px;align-items:center}
    .hero-copy h1{font-family:Montserrat,sans-serif;font-size:54px;line-height:1.05;margin:0 0 14px;max-width:780px}
    .hero-copy p{font-size:17px;line-height:1.65;color:rgba(255,255,255,.82);max-width:680px;margin:0}
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
    .section-head p{max-width:620px;color:rgba(255,255,255,.72);margin:0;line-height:1.65}
    .tab-pills{display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px}
    .tab-pill{padding:11px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);color:#fff;font-weight:600;cursor:pointer;transition:.25s}
    .tab-pill.active{background:var(--accent);border-color:var(--accent)}
    .product-panel{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:22px;border:1px solid rgba(255,255,255,.08);box-shadow:0 22px 60px rgba(0,0,0,.28);background:rgba(255,255,255,.03)}
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
    .price-card h3{font-family:Montserrat,sans-serif;font-size:26px;line-height:1.25;margin:0 0 10px}
    .price-card p{margin:0;color:rgba(255,255,255,.72);line-height:1.65}
    .price-list{list-style:none;padding:0;margin:18px 0 0;display:grid;gap:10px}
    .price-list li{display:flex;gap:10px;align-items:flex-start;color:rgba(255,255,255,.84);font-size:14px;line-height:1.5}
    .price-list li:before{content:'✓';color:var(--accent);font-weight:800}
    .testimonial-wrap{display:grid;grid-template-columns:1fr 320px;gap:18px;align-items:stretch}
    .testimonial-card{padding:26px;border-radius:22px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);min-height:240px;display:flex;flex-direction:column;justify-content:space-between}
    .testimonial-quote{font-size:22px;line-height:1.6;color:#fff;margin:0}
    .testimonial-author{margin-top:20px}
    .testimonial-author strong{display:block;font-size:16px}
    .testimonial-author span{color:rgba(255,255,255,.66);font-size:14px}
    .testimonial-list{display:grid;gap:10px}
    .mini-testimonial{padding:14px 16px;border-radius:16px;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.04);cursor:pointer;transition:.25s}
    .mini-testimonial.active{border-color:rgba(179,113,63,.5);background:rgba(179,113,63,.12)}
    .mini-testimonial strong{display:block;font-size:14px;margin-bottom:4px}
    .mini-testimonial span{font-size:13px;color:rgba(255,255,255,.64)}
    .faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
    .faq-item{padding:18px;border-radius:18px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)}
    .faq-item h4{margin:0 0 8px;font-size:18px;font-family:Montserrat,sans-serif}
    .faq-item p{margin:0;color:rgba(255,255,255,.72);line-height:1.65}
    .footer{padding:28px 0;border-top:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.02)}
    .footer-inner{display:flex;justify-content:space-between;gap:16px;align-items:center;flex-wrap:wrap}
    .footer-note{color:rgba(255,255,255,.62);font-size:14px}
    .reveal{opacity:0;transform:translateY(18px);transition:all .7s ease}
    .reveal.visible{opacity:1;transform:none}
    .cursor-glow{position:fixed;left:0;top:0;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle, rgba(179,113,63,.12), transparent 62%);pointer-events:none;transform:translate(-50%,-50%);z-index:3;mix-blend-mode:screen}
    .clip-reveal{clip-path:inset(14% 8% 14% 8%)}
    .scene-expand{width:92%;margin:0 auto}
    .browser-body img,.zoom-reveal img,.zoom-reveal video,.scene-expand img,.scene-expand video,.hero-cinematic-bg{transform:scale(1.08)}
    .muted{color:rgba(255,255,255,.7)}
    @media (max-width: 1024px){
      .hero-grid,.product-panel,.proof-grid,.pricing-grid,.faq-grid,.testimonial-wrap{grid-template-columns:1fr}
      .feature-shell{grid-template-columns:1fr}
      .gallery-grid{grid-template-columns:repeat(2,1fr)}
      .nav-inner{grid-template-columns:1fr auto}
      .nav-right{display:none}
      .hero{min-height:auto;padding:56px 0 42px}
    }
    @media (max-width: 767px){
      .section{padding:56px 0}
      .hero-copy h1{font-size:54px}
      .section-head h2{font-size:30px}
      .form-grid,.metrics{grid-template-columns:1fr}
      .gallery-grid{grid-template-columns:1fr}
      .browser-body img{height:260px}
      .video-card video{height:200px}
      .container{width:min(1240px,calc(100% - 24px))}
      .brand-name{font-size:16px}
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="lp">
        <nav className="nav">
          <div className="container nav-inner">
            <a href="#top" className="brand-name">
              Techjockey | Seedream (AI Image Generation) & Seedance (AI Video Generation)
            </a>
            <div className="nav-right">
              <a href="#products" className="ghost-btn">
                Explore Products
              </a>
              <a href="#demo-form" className="animated-cta btn-magnetic">
                Get Free Demo
              </a>
            </div>
            <a href="#demo-form" className="animated-cta">
              Free Demo
            </a>
          </div>
        </nav>

        <section className="hero" id="top">
          <div className="hero-bg-wrap">
            <video
              className="hero-cinematic-bg"
              autoPlay
              muted
              loop
              playsInline
              poster="/output/generated-assets/ds_1778051924089_c52a5284/06-4c8f6823a3.png"
            >
              <source src="https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiShot.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-bg-overlay" />
          <div className="hero-orb" />
          <div className="hero-orb2" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">Bytedance Generative AI via Techjockey</div>
              <h1 className="split-text">AI Image Generation & AI Video Generation for High-Impact Creative Production</h1>
              <p>
                Explore Seedream 4.5 for high-resolution image generation and Seedance 1.5 Pro for native audio-visual video generation. Request a free demo through Techjockey to evaluate the right AI creative workflow for your team.
              </p>
              <div className="chip-row">
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 3l2.3 4.7L19 10l-4.7 2.3L12 17l-2.3-4.7L5 10l4.7-2.3L12 3z" stroke="currentColor" strokeWidth="1.8"/></svg>
                  Seedream 4.5
                </div>
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M8 5l11 7-11 7V5z" stroke="currentColor" strokeWidth="1.8"/></svg>
                  Seedance 1.5 Pro
                </div>
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M12 6v6l4 2" stroke="currentColor" strokeWidth="1.8"/><circle cx="12" cy="12" r="9" stroke="currentColor" strokeWidth="1.8"/></svg>
                  Free Demo via Techjockey
                </div>
              </div>
              <div className="hero-actions">
                <a href="#demo-form" className="animated-cta btn-magnetic">
                  Book a Free Demo
                </a>
                <a href="#products" className="ghost-btn">
                  View Capabilities
                </a>
              </div>
            </div>

            <div className="hero-visual reveal" id="demo-form">
              <div className="form-card">
                <h3>Request Free Demo</h3>
                <p>
                  Fill in your details to explore Seedream (AI Image Generation) and Seedance (AI Video Generation) with Techjockey.
                </p>
                <form>
                  <div className="form-grid">
                    <div className="field">
                      <label>First Name</label>
                      <input type="text" placeholder="Enter first name" />
                    </div>
                    <div className="field">
                      <label>Last Name</label>
                      <input type="text" placeholder="Enter last name" />
                    </div>
                    <div className="field full">
                      <label>Work Email</label>
                      <input type="email" placeholder="Enter work email" />
                    </div>
                    <div className="field">
                      <label>Phone Number</label>
                      <input type="tel" placeholder="Enter phone number" />
                    </div>
                    <div className="field">
                      <label>Company Name</label>
                      <input type="text" placeholder="Enter company name" />
                    </div>
                  </div>
                  <button type="submit" className="animated-cta full-btn">
                    Get Free Demo
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="section compact">
          <div className="container">
            <div className="metrics stagger-parent">
              <div className="metric-card">
                <div className="metric-number" data-count="2">2</div>
                <div className="metric-label">AI solutions to evaluate</div>
              </div>
              <div className="metric-card">
                <div className="metric-number" data-count="4" data-suffix="+" >4+</div>
                <div className="metric-label">Core creative workflows covered</div>
              </div>
              <div className="metric-card">
                <div className="metric-number" data-count="1" data-suffix="K–4K">1K–4K</div>
                <div className="metric-label">Image output resolution support</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-dark" id="products">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">Products</div>
                <h2>Compare Seedream 4.5 and Seedance 1.5 Pro</h2>
              </div>
              <p>
                Explore the two AI creative products available for evaluation through Techjockey. Seedream focuses on image generation and editing, while Seedance is built for synchronized video and audio generation.
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
              <div className="browser-frame reveal zoom-reveal clip-reveal">
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
                <h2 className="heading-font" style={{ margin: '0 0 10px', fontSize: '38px', lineHeight: '1.12' }}>
                  {currentProduct.headline}
                </h2>
                <div className="desc-bar">{currentProduct.description}</div>

                <div className="feature-shell">
                  <div className="feature-tabs">
                    {currentProduct.features.map((feature, index) => {
                      const isActive =
                        activeProduct === 0
                          ? activeSeedreamFeature === index
                          : activeSeedanceFeature === index;
                      return (
                        <button
                          key={feature.title}
                          className={`feature-tab ${isActive ? 'active' : ''}`}
                          onClick={() => {
                            if (activeProduct === 0) setActiveSeedreamFeature(index);
                            else setActiveSeedanceFeature(index);
                          }}
                        >
                          <strong>{feature.title}</strong>
                        </button>
                      );
                    })}
                  </div>

                  <div className="feature-preview">
                    <h4>{currentFeature.title}</h4>
                    <p>{currentFeature.description}</p>
                    <div className="icon-row">
                      <div className="icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M12 3l2.3 4.7L19 10l-4.7 2.3L12 17l-2.3-4.7L5 10l4.7-2.3L12 3z" stroke="currentColor" strokeWidth="1.7" />
                        </svg>
                      </div>
                      <div className="icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <rect x="4" y="5" width="16" height="14" rx="3" stroke="currentColor" strokeWidth="1.7" />
                          <path d="M9 12h6" stroke="currentColor" strokeWidth="1.7" />
                        </svg>
                      </div>
                      <div className="icon-box">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                          <path d="M8 5l11 7-11 7V5z" stroke="currentColor" strokeWidth="1.7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '18px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  <a href="#demo-form" className="animated-cta">
                    Request Demo
                  </a>
                  <a href="#pricing" className="ghost-btn">
                    View Buying Support
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-soft">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">Why Evaluate Through Techjockey</div>
                <h2>Get Guided Product Discovery Before You Decide</h2>
              </div>
              <p>
                Techjockey helps teams evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation) with a smoother buying journey, guided consultation, and a free demo process.
              </p>
            </div>

            <div className="proof-grid">
              <div className="dark-card reveal">
                <h3 className="heading-font" style={{ margin: '0 0 14px', fontSize: '28px' }}>
                  What you can explore in the demo
                </h3>
                <ul className="price-list">
                  <li>How Seedream 4.5 supports text-to-image generation, editing, and multi-image composition.</li>
                  <li>How Seedance 1.5 Pro generates synchronized video and audio from prompts.</li>
                  <li>Which product fits your design, creative, or video production workflow.</li>
                  <li>How Techjockey can simplify evaluation and product selection.</li>
                </ul>
              </div>

              <div className="browser-frame reveal scene-expand">
                <div className="browser-top">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                </div>
                <div className="browser-body">
                  <img
                    src="/output/generated-assets/ds_1778051924089_c52a5284/10-41ea7f7485.png"
                    alt="Seedream creative output preview"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-dark">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">Video Showcase</div>
                <h2>See AI Video Generation Examples</h2>
              </div>
              <p>
                Preview examples that reflect the kind of motion, audio-visual synchronization, and storytelling possibilities enabled by Seedance 1.5 Pro.
              </p>
            </div>

            <div className="gallery-grid">
              {demoVideos.map((video, index) => (
                <div className="video-card reveal zoom-reveal" key={video}>
                  <video autoPlay muted loop playsInline>
                    <source src={video} type="video/mp4" />
                  </video>
                  <div className="video-meta">
                    {index === 0 && 'Text-to-video output example'}
                    {index === 1 && 'Creative motion generation example'}
                    {index === 2 && 'Audio-visual synchronization example'}
                    {index === 3 && 'Multi-shot cinematic example'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-deep" id="pricing">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">Buying Support</div>
                <h2>Choose the Right Evaluation Path</h2>
              </div>
              <p>
                Whether you are exploring AI image generation, AI video generation, or both, Techjockey can help you evaluate the right fit through a guided free demo process.
              </p>
            </div>

            <div className="pricing-grid">
              <div className="price-card reveal">
                <div className="badge-green">Best for Image Workflow Exploration</div>
                <h3>Seedream 4.5 Demo</h3>
                <p>
                  Evaluate image generation quality, text-image alignment, editing flexibility, and multi-image composition use cases.
                </p>
                <ul className="price-list">
                  <li>High-resolution image generation</li>
                  <li>Text-to-image and image editing workflows</li>
                  <li>Typography and design-focused output review</li>
                  <li>Identity preservation and structure consistency</li>
                </ul>
                <div style={{ marginTop: '20px' }}>
                  <a href="#demo-form" className="animated-cta">
                    Book Seedream Demo
                  </a>
                </div>
              </div>

              <div className="price-card highlight reveal">
                <div className="badge-green">Best for Video Workflow Exploration</div>
                <h3>Seedance 1.5 Pro Demo</h3>
                <p>
                  Explore text-to-video generation, native audio-visual creation, lip-sync support, and cinematic camera control.
                </p>
                <ul className="price-list">
                  <li>Text-to-video generation capabilities</li>
                  <li>Audio and video synchronization review</li>
                  <li>Multilingual lip-sync exploration</li>
                  <li>Faster inference and cinematic motion use cases</li>
                </ul>
                <div style={{ marginTop: '20px' }}>
                  <a href="#demo-form" className="animated-cta">
                    Book Seedance Demo
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-soft">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">Testimonials</div>
                <h2>What professionals say</h2>
              </div>
              <p>
                Feedback from creative and marketing professionals who explored advanced AI content generation workflows and Techjockey’s buying support experience.
              </p>
            </div>

            <div className="testimonial-wrap">
              <div className="testimonial-card reveal">
                <p className="testimonial-quote">“{testimonials[activeSlide].quote}”</p>
                <div className="testimonial-author">
                  <strong>{testimonials[activeSlide].author}</strong>
                  <span>{testimonials[activeSlide].role}</span>
                </div>
              </div>

              <div className="testimonial-list reveal">
                {testimonials.map((item, index) => (
                  <div
                    key={item.author + index}
                    className={`mini-testimonial ${activeSlide === index ? 'active' : ''}`}
                    onClick={() => setActiveSlide(index)}
                  >
                    <strong>{item.author}</strong>
                    <span>{item.role}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-dark">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">FAQs</div>
                <h2>Common questions before booking a demo</h2>
              </div>
              <p>
                Here are quick answers to help you understand the scope of Seedream, Seedance, and the Techjockey demo process.
              </p>
            </div>

            <div className="faq-grid">
              <div className="faq-item reveal">
                <h4>What is Seedream 4.5 used for?</h4>
                <p>
                  Seedream 4.5 is used for AI image generation, image editing, and multi-image composition with high-resolution and high-fidelity outputs.
                </p>
              </div>
              <div className="faq-item reveal">
                <h4>What is Seedance 1.5 Pro used for?</h4>
                <p>
                  Seedance 1.5 Pro is used for AI video generation with native audio-visual output, multilingual lip-sync, cinematic camera control, and faster inference.
                </p>
              </div>
              <div className="faq-item reveal">
                <h4>Can I request a free demo through Techjockey?</h4>
                <p>
                  Yes. Techjockey helps you request a free demo so you can evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation) before making a decision.
                </p>
              </div>
              <div className="faq-item reveal">
                <h4>Which teams can benefit from these products?</h4>
                <p>
                  Creative teams, design teams, marketing teams, and video production teams can benefit from evaluating these AI generation workflows based on their use case needs.
                </p>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <div>
              <div className="brand-name" style={{ maxWidth: 'unset' }}>
                Techjockey | Seedream & Seedance
              </div>
              <div className="footer-note">Explore, compare, and request a free demo with guided buying support.</div>
            </div>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
              <a href="#products" className="ghost-btn">
                Explore Products
              </a>
              <a href="#demo-form" className="animated-cta">
                Get Free Demo
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;