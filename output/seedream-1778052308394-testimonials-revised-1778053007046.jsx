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
    .price-card p{margin:0 0 16px;color:rgba(255,255,255,.72);line-height:1.65}
    .price-list{display:grid;gap:10px;margin:0 0 18px;padding:0;list-style:none}
    .price-list li{display:flex;gap:10px;align-items:flex-start;color:rgba(255,255,255,.82);line-height:1.5}
    .faq-grid{display:grid;gap:14px}
    .faq-item{padding:18px;border-radius:18px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08)}
    .faq-item h4{margin:0 0 8px;font-size:18px}
    .faq-item p{margin:0;color:rgba(255,255,255,.72);line-height:1.65}
    .cta-banner{padding:30px;border-radius:26px;background:linear-gradient(135deg,rgba(179,113,63,.22),rgba(255,255,255,.05));border:1px solid rgba(179,113,63,.28);display:grid;grid-template-columns:1fr auto;gap:18px;align-items:center}
    .cta-banner h3{margin:0 0 8px;font-family:Montserrat,sans-serif;font-size:32px}
    .cta-banner p{margin:0;color:rgba(255,255,255,.76);max-width:760px;line-height:1.65}
    .footer{padding:24px 0 40px;border-top:1px solid rgba(255,255,255,.08);color:rgba(255,255,255,.62)}
    .footer-inner{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
    .reveal{opacity:0;transform:translateY(24px);transition:opacity .8s ease,transform .8s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .cursor-glow{position:fixed;left:0;top:0;width:280px;height:280px;border-radius:50%;pointer-events:none;z-index:3;background:radial-gradient(circle, rgba(179,113,63,.14) 0%, rgba(179,113,63,.06) 35%, rgba(179,113,63,0) 70%);transform:translate(-50%,-50%)}
    .testimonials-shell{position:relative;overflow:hidden;border-radius:28px;padding:28px;background:linear-gradient(180deg,rgba(255,255,255,.05),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.1);box-shadow:0 20px 60px rgba(0,0,0,.22)}
    .testimonials-slider{display:flex;transition:transform .7s cubic-bezier(.22,.61,.36,1);will-change:transform}
    .testimonial-slide{min-width:100%;display:grid;grid-template-columns:.95fr 1.05fr;gap:22px;align-items:stretch}
    .testimonial-visual{position:relative;min-height:320px;border-radius:24px;overflow:hidden;background:
      radial-gradient(circle at 20% 20%, rgba(179,113,63,.24), transparent 32%),
      radial-gradient(circle at 80% 70%, rgba(255,255,255,.08), transparent 28%),
      linear-gradient(135deg, rgba(179,113,63,.16), rgba(255,255,255,.04))}
    .testimonial-visual-inner{position:absolute;inset:0;padding:28px;display:flex;flex-direction:column;justify-content:space-between}
    .quote-mark{font-family:Georgia,serif;font-size:88px;line-height:.8;color:rgba(255,255,255,.18)}
    .testimonial-mini-stats{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
    .mini-stat{padding:16px;border-radius:18px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08)}
    .mini-stat strong{display:block;font-size:24px;font-family:Montserrat,sans-serif}
    .mini-stat span{display:block;margin-top:4px;color:rgba(255,255,255,.68);font-size:13px}
    .testimonial-content{padding:8px 4px;display:flex;flex-direction:column;justify-content:center}
    .testimonial-content .eyebrow{margin-bottom:12px}
    .testimonial-text{font-family:Montserrat,sans-serif;font-size:32px;line-height:1.35;color:#fff;margin:0 0 24px;max-width:760px}
    .testimonial-person{display:flex;align-items:center;gap:14px}
    .testimonial-avatar{width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg,var(--accent),#d49a64);color:#fff;font-weight:800;font-size:20px;box-shadow:0 10px 24px rgba(179,113,63,.28)}
    .testimonial-meta strong{display:block;font-size:18px}
    .testimonial-meta span{display:block;color:rgba(255,255,255,.68);margin-top:4px}
    .testimonial-controls{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-top:22px}
    .testimonial-dots{display:flex;gap:10px;flex-wrap:wrap}
    .testimonial-dot{width:10px;height:10px;border:none;border-radius:50%;background:rgba(255,255,255,.24);cursor:pointer;transition:transform .25s ease,background .25s ease,box-shadow .25s ease;padding:0}
    .testimonial-dot.active{background:var(--accent);transform:scale(1.15);box-shadow:0 0 0 6px rgba(179,113,63,.16)}
    .testimonial-nav{display:flex;gap:10px}
    .testimonial-arrow{width:44px;height:44px;border-radius:12px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.05);color:#fff;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:.25s}
    .testimonial-arrow:hover{transform:translateY(-2px);border-color:rgba(255,255,255,.3);background:rgba(255,255,255,.09)}
    .testimonial-progress{height:4px;width:160px;border-radius:999px;background:rgba(255,255,255,.08);overflow:hidden}
    .testimonial-progress-bar{height:100%;background:linear-gradient(90deg,var(--accent),#d49a64);border-radius:999px;transition:width .45s ease}
    @media (max-width: 1100px){
      .hero-grid,.product-panel,.proof-grid,.testimonial-slide{grid-template-columns:1fr}
      .gallery-grid{grid-template-columns:repeat(2,1fr)}
      .pricing-grid{grid-template-columns:1fr}
      .testimonial-visual{min-height:260px}
    }
    @media (max-width: 768px){
      .section{padding:56px 0}
      .nav-inner{grid-template-columns:1fr;justify-items:start}
      .hero-copy h1{font-size:54px}
      .form-grid,.metrics,.feature-shell,.cta-banner{grid-template-columns:1fr}
      .section-head{flex-direction:column;align-items:start}
      .section-head h2{font-size:32px}
      .gallery-grid{grid-template-columns:1fr}
      .testimonial-text{font-size:24px}
      .testimonials-shell{padding:18px}
      .testimonial-visual-inner{padding:20px}
      .testimonial-controls{flex-direction:column;align-items:flex-start}
      .testimonial-progress{width:100%}
    }
    @media (max-width: 520px){
      .container{width:min(1240px,calc(100% - 20px))}
      .hero-copy h1{font-size:54px}
      .form-card{padding:18px}
      .testimonial-text{font-size:21px}
      .testimonial-mini-stats{grid-template-columns:1fr 1fr}
    }
  `;

  const currentProduct = products[activeProduct];
  const activeFeature =
    activeProduct === 0
      ? currentProduct.features[activeSeedreamFeature]
      : currentProduct.features[activeSeedanceFeature];

  const setFeatureIndex = (index) => {
    if (activeProduct === 0) setActiveSeedreamFeature(index);
    else setActiveSeedanceFeature(index);
  };

  const prevTestimonial = () => {
    setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const nextTestimonial = () => {
    setActiveSlide((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <>
      <style>{css}</style>
      <div className="lp">
        <nav className="nav">
          <div className="container nav-inner">
            <div className="brand-name">Techjockey | Seedream & Seedance by Bytedance</div>
            <div className="nav-right">
              <a href="#products" className="ghost-btn">Explore Products</a>
              <a href="#demo-form" className="animated-cta btn-magnetic">Book Free Demo</a>
            </div>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-bg-wrap">
            <video
              className="hero-cinematic-bg"
              autoPlay
              muted
              loop
              playsInline
              style={{ transform: 'scale(1.08)' }}
              poster="/output/generated-assets/ds_1778051924089_c52a5284/10-41ea7f7485.png"
            >
              <source src="https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiShot.mp4" type="video/mp4" />
            </video>
          </div>
          <div className="hero-bg-overlay" />
          <div className="hero-orb" />
          <div className="hero-orb2" />
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">Bytedance AI Creative Stack</div>
              <h1 className="split-text">Scale image and video creation with Seedream and Seedance.</h1>
              <p>
                Discover two high-performance generative AI products for creative teams. Seedream 4.5 powers high-fidelity image generation and editing, while Seedance 1.5 Pro enables synchronized audio-visual video generation with cinematic control.
              </p>
              <div className="chip-row">
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  AI Image Generation
                </div>
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  AI Video Generation
                </div>
                <div className="chip">
                  <svg viewBox="0 0 24 24" fill="none"><path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
                  Free Demo Available
                </div>
              </div>
              <div className="hero-actions">
                <a href="#demo-form" className="animated-cta btn-magnetic">Get Free Demo</a>
                <a href="#testimonials" className="ghost-btn">See User Feedback</a>
              </div>
            </div>

            <div className="hero-visual reveal" id="demo-form">
              <div className="form-card">
                <h3>Book Your Free Demo</h3>
                <p>Connect with Techjockey to explore Seedream (AI Image Generation) and Seedance (AI Video Generation).</p>
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
                  <button type="submit" className="animated-cta full-btn btn-magnetic">Request Demo</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="section compact bg-dark">
          <div className="container">
            <div className="metrics reveal">
              <div className="metric-card">
                <div className="metric-number" data-count="4" data-suffix="+">0+</div>
                <div className="metric-label">High-fidelity image workflows</div>
              </div>
              <div className="metric-card">
                <div className="metric-number" data-count="10" data-suffix="×">0×</div>
                <div className="metric-label">Faster optimized inference</div>
              </div>
              <div className="metric-card">
                <div className="metric-number" data-count="2" data-suffix=" products">0 products</div>
                <div className="metric-label">Unified creative generation stack</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-deep" id="products">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">Products</div>
                <h2>Choose the right creative AI engine for your workflow.</h2>
              </div>
              <p>
                Explore Seedream for image creation and Seedance for next-generation video generation. Compare capabilities and request a guided walkthrough from Techjockey.
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

            <div className="product-panel reveal">
              <div className="browser-frame scene-expand" style={{ width: '92%', margin: '0 auto' }}>
                <div className="browser-top">
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                  <span className="browser-dot" />
                </div>
                <div className="browser-body">
                  <img
                    src={currentProduct.image}
                    alt={currentProduct.name}
                    style={{ transform: 'scale(1.06)', filter: currentProduct.darkImage ? 'brightness(.92)' : 'none' }}
                  />
                </div>
              </div>

              <div className="content-box">
                <div className="eyebrow">{currentProduct.name}</div>
                <h2 className="heading-font" style={{ margin: '0 0 8px', fontSize: '38px', lineHeight: '1.12' }}>
                  {currentProduct.headline}
                </h2>
                <div className="desc-bar">{currentProduct.description}</div>

                <div className="feature-shell">
                  <div className="feature-tabs">
                    {currentProduct.features.map((feature, index) => (
                      <button
                        key={feature.title}
                        className={`feature-tab ${
                          (activeProduct === 0 ? activeSeedreamFeature : activeSeedanceFeature) === index ? 'active' : ''
                        }`}
                        onClick={() => setFeatureIndex(index)}
                      >
                        <strong>{feature.title}</strong>
                      </button>
                    ))}
                  </div>

                  <div className="feature-preview">
                    <h4>{activeFeature.title}</h4>
                    <p>{activeFeature.description}</p>
                    <div className="icon-row">
                      <div className="icon-box">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                      <div className="icon-box">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                        </svg>
                      </div>
                      <div className="icon-box">
                        <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                          <path d="M4 12h16M12 4l8 8-8 8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-soft">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">Showcase</div>
                <h2>Watch sample generations and output quality in action.</h2>
              </div>
              <p>
                Explore example clips that highlight visual coherence, synchronized audio-visual outputs, and cinematic motion capabilities.
              </p>
            </div>

            <div className="gallery-grid stagger-parent">
              {demoVideos.map((video, index) => (
                <div className="video-card" key={video}>
                  <video autoPlay muted loop playsInline>
                    <source src={video} type="video/mp4" />
                  </video>
                  <div className="video-meta">
                    Demo Output {index + 1}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-deep" id="testimonials">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">Testimonials</div>
                <h2>What teams are saying after exploring Seedream and Seedance.</h2>
              </div>
              <p>
                Real feedback from creative and marketing professionals who evaluated these AI solutions through Techjockey.
              </p>
            </div>

            <div className="testimonials-shell reveal">
              <div
                className="testimonials-slider"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((item, index) => (
                  <div className="testimonial-slide" key={`${item.author}-${index}`}>
                    <div className="testimonial-visual">
                      <div className="testimonial-visual-inner">
                        <div className="quote-mark">“</div>
                        <div className="testimonial-mini-stats">
                          <div className="mini-stat">
                            <strong>Faster</strong>
                            <span>Creative evaluation cycles</span>
                          </div>
                          <div className="mini-stat">
                            <strong>Better</strong>
                            <span>Decision clarity from demo support</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="testimonial-content">
                      <div className="eyebrow">Customer Voice</div>
                      <p className="testimonial-text">{item.quote}</p>
                      <div className="testimonial-person">
                        <div className="testimonial-avatar">
                          {item.author
                            .split(' ')
                            .map((n) => n[0])
                            .slice(0, 2)
                            .join('')}
                        </div>
                        <div className="testimonial-meta">
                          <strong>{item.author}</strong>
                          <span>{item.role}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="testimonial-controls">
                <div className="testimonial-dots">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      className={`testimonial-dot ${activeSlide === index ? 'active' : ''}`}
                      onClick={() => setActiveSlide(index)}
                      aria-label={`Go to testimonial ${index + 1}`}
                    />
                  ))}
                </div>

                <div className="testimonial-progress">
                  <div
                    className="testimonial-progress-bar"
                    style={{ width: `${((activeSlide + 1) / testimonials.length) * 100}%` }}
                  />
                </div>

                <div className="testimonial-nav">
                  <button className="testimonial-arrow" onClick={prevTestimonial} aria-label="Previous testimonial">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M15 6l-6 6 6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button className="testimonial-arrow" onClick={nextTestimonial} aria-label="Next testimonial">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-soft">
          <div className="container">
            <div className="proof-grid reveal">
              <div className="dark-card">
                <div className="eyebrow">Why Techjockey</div>
                <h2 className="heading-font" style={{ margin: '0 0 12px', fontSize: '36px', lineHeight: '1.15' }}>
                  Get guided product discovery, comparison, and demo assistance.
                </h2>
                <p style={{ margin: 0, color: 'rgba(255,255,255,.74)', lineHeight: 1.7 }}>
                  Techjockey helps businesses evaluate modern AI software faster with assisted discovery, requirement mapping, and free demo coordination.
                </p>
              </div>
              <div className="dark-card">
                <ul className="price-list">
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Compare Seedream and Seedance based on your creative workflow
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Get free demo assistance through Techjockey experts
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Evaluate product fit before moving ahead
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-deep">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">Plans</div>
                <h2>Explore product consultation options through Techjockey.</h2>
              </div>
              <p>
                Choose the engagement path that fits your buying stage, from early exploration to detailed product evaluation.
              </p>
            </div>

            <div className="pricing-grid reveal">
              <div className="price-card">
                <div className="badge-green">Best for discovery</div>
                <h3>Free Product Consultation</h3>
                <p>
                  Understand whether Seedream or Seedance is the better fit for your team, use case, and output goals.
                </p>
                <ul className="price-list">
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Requirement discussion
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Product capability mapping
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Free demo scheduling
                  </li>
                </ul>
                <a href="#demo-form" className="animated-cta btn-magnetic">Get Started</a>
              </div>

              <div className="price-card highlight">
                <div className="badge-green">Best for evaluation</div>
                <h3>Guided Demo Support</h3>
                <p>
                  Take a deeper look at real workflows, outputs, and product strengths before making a buying decision.
                </p>
                <ul className="price-list">
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Assisted demo coordination
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Solution shortlisting help
                  </li>
                  <li>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M5 13l4 4L19 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    Faster purchase clarity
                  </li>
                </ul>
                <a href="#demo-form" className="animated-cta btn-magnetic">Book Free Demo</a>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-soft">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <div className="eyebrow">FAQs</div>
                <h2>Common questions about Seedream and Seedance.</h2>
              </div>
              <p>
                Quick answers to help you understand capabilities, use cases, and how Techjockey can support the evaluation process.
              </p>
            </div>

            <div className="faq-grid reveal">
              <div className="faq-item">
                <h4>What is Seedream 4.5 used for?</h4>
                <p>Seedream 4.5 is used for high-fidelity AI image generation, editing, and multi-image composition from text prompts and visual inputs.</p>
              </div>
              <div className="faq-item">
                <h4>What is Seedance 1.5 Pro used for?</h4>
                <p>Seedance 1.5 Pro is used for AI video generation with synchronized audio-visual outputs, cinematic movement, and multilingual lip-sync support.</p>
              </div>
              <div className="faq-item">
                <h4>Can I get a free demo?</h4>
                <p>Yes. Techjockey can help arrange a free demo so you can evaluate Seedream and Seedance before making a decision.</p>
              </div>
              <div className="faq-item">
                <h4>How do I choose between the two products?</h4>
                <p>If your focus is image generation and editing, Seedream is the right fit. If your focus is native video and audio-visual generation, Seedance is the better option.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-deep">
          <div className="container">
            <div className="cta-banner reveal">
              <div>
                <h3>Ready to evaluate Seedream and Seedance?</h3>
                <p>
                  Talk to Techjockey and schedule a free demo to explore which AI creative product fits your business workflow best.
                </p>
              </div>
              <a href="#demo-form" className="animated-cta btn-magnetic">Request Free Demo</a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <div>© 2026 Techjockey. All rights reserved.</div>
            <div>Seedream (AI Image Generation) & Seedance (AI Video Generation) by Bytedance</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;