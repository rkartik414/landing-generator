import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#b3713f';
  const primary = '#b3713f';
  const bodyBg = '#ffffff';

  const [activeSeedreamTab, setActiveSeedreamTab] = useState(0);
  const [activeSeedanceTab, setActiveSeedanceTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const testimonialsRef = useRef(null);

  const seedreamFeatures = [
    {
      title: 'Advanced Capabilities of Seedream 4.5 by ByteDance',
      description:
        'From accurate text rendering to consistent image editing and multi-image composition, Seedream 4.5 powers high-quality, professional visual creation with superior precision and control.',
    },
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
  ];

  const seedanceFeatures = [
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

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--accent-glow', 'rgba(179,113,63,0.18)');

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

    scripts.forEach((src) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        document.body.appendChild(s);
      }
    });

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const gsap = window.gsap;
          const ScrollTrigger = window.ScrollTrigger;
          gsap.registerPlugin(ScrollTrigger);

          const existingGlow = document.querySelector('.cursor-glow');
          let glow = existingGlow;
          if (!glow) {
            glow = document.createElement('div');
            glow.className = 'cursor-glow';
            document.body.appendChild(glow);
          }

          const mouseMove = (e) => {
            gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
          };
          window.addEventListener('mousemove', mouseMove);

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
            if (el.querySelector('.char')) return;
            const text = el.textContent || '';
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
              duration: 1.0,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: mask,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            });
          });

          document.querySelectorAll('.btn-magnetic').forEach((btn) => {
            const move = (e) => {
              const rect = btn.getBoundingClientRect();
              const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
              const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
              gsap.to(btn, { x, y, duration: 0.4, ease: 'power2.out' });
            };
            const leave = () => {
              gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
            };
            btn.addEventListener('mousemove', move);
            btn.addEventListener('mouseleave', leave);
          });

          gsap.utils.toArray('.pin-scene').forEach((scene) => {
            ScrollTrigger.create({
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
            if (Number.isNaN(target)) return;
            gsap.from(
              { val: 0 },
              {
                val: target,
                duration: 2,
                ease: 'power2.out',
                snap: { val: 1 },
                scrollTrigger: { trigger: el, start: 'top 80%', once: true },
                onUpdate: function () {
                  el.textContent =
                    prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
                },
              }
            );
          });
        });
      });
    };

    const timer = setTimeout(initGSAP, 700);

    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, [accent, primary]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => e.preventDefault();

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};--text:#f5f7fb;--muted:#b9c0cc;--dark:#0b0e13;--dark2:#111827;--line:rgba(255,255,255,.1)}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;font-family:Inter,sans-serif;background:#06080c;color:var(--text)}
    a{text-decoration:none;color:inherit}
    img,video{max-width:100%}
    .lp{background:#06080c;color:#fff;overflow:hidden}
    .container{width:min(1200px,calc(100% - 40px));margin:auto}
    .section{position:relative;padding:88px 0}
    .section.light{background:#f8fafc;color:#111827}
    .section.white{background:#ffffff;color:#111827}
    .section.dark{background:#0b0e13;color:#fff}
    .grid-2{display:grid;grid-template-columns:1.08fr .92fr;gap:44px;align-items:center}
    .section-head{text-align:center;max-width:860px;margin:0 auto 34px}
    .eyebrow{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;background:rgba(179,113,63,.12);border:1px solid rgba(179,113,63,.3);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase;color:var(--accent)}
    h1,h2,h3{font-family:Montserrat,sans-serif;line-height:1.08;margin:0 0 16px}
    h1{font-size:54px;max-width:760px}
    h2{font-size:38px}
    h3{font-size:22px}
    p{margin:0;color:inherit}
    .muted{color:#aeb6c2}
    .gradient-text{background:linear-gradient(135deg,var(--accent) 0%,var(--primary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .nav{position:sticky;top:0;z-index:50;background:rgba(10,12,18,.8);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;min-height:76px}
    .brand{font-weight:800;font-size:20px;color:#fff}
    .nav-right{display:flex;align-items:center;gap:16px}
    .animated-cta,.ghost-btn,.submit-btn,.slider-btn{border:none;cursor:pointer;border-radius:12px;font-weight:700;transition:.25s ease}
    .animated-cta,.submit-btn{background:var(--accent);color:#fff;padding:14px 22px;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 10px 28px rgba(179,113,63,.22)}
    .animated-cta:hover,.submit-btn:hover{transform:translateY(-2px);box-shadow:0 14px 34px rgba(179,113,63,.3);background:var(--primary)}
    .ghost-btn{padding:14px 22px;background:transparent;color:#fff;border:1px solid rgba(255,255,255,.2)}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(255,255,255,.08);border-color:rgba(255,255,255,.4)}
    .hero{min-height:100vh;display:flex;align-items:center;padding:90px 0 70px;background:
      radial-gradient(circle at 15% 20%, rgba(179,113,63,.18), transparent 28%),
      radial-gradient(circle at 85% 20%, rgba(179,113,63,.12), transparent 26%),
      linear-gradient(180deg,#0a0d12 0%,#111827 100%)}
    .hero-wrap{position:relative}
    .hero-cinematic-bg{position:absolute;inset:-8% -8% auto auto;width:520px;height:520px;border-radius:50%;background:radial-gradient(circle,rgba(179,113,63,.22),transparent 65%);filter:blur(10px);pointer-events:none}
    .hero::before,.hero::after{content:'';position:absolute;border-radius:50%;filter:blur(40px);opacity:.9}
    .hero::before{width:360px;height:360px;background:rgba(179,113,63,.12);top:-80px;left:-80px}
    .hero::after{width:420px;height:420px;background:rgba(179,113,63,.08);bottom:-120px;right:-100px}
    .hero-copy{position:relative;z-index:2}
    .hero-sub{font-size:18px;line-height:1.75;color:#d7dde8;max-width:760px}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 28px}
    .chip{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(179,113,63,.35);background:rgba(179,113,63,.12);font-size:13px;color:#f5f7fb}
    .cta-row{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{position:relative;z-index:2;min-height:500px;display:flex;align-items:center}
    .form-card{width:100%;padding:28px;border-radius:24px;background:rgba(255,255,255,.07);backdrop-filter:blur(18px);border:1px solid rgba(255,255,255,.12);box-shadow:0 20px 60px rgba(0,0,0,.28)}
    .form-card h3{font-size:24px}
    .form-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:18px}
    .field{display:flex;flex-direction:column;gap:8px}
    .field.full{grid-column:1/-1}
    .field label{font-size:13px;color:#d6dbe5;font-weight:600}
    .field input{width:100%;padding:14px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:#fff;outline:none}
    .field input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(179,113,63,.15)}
    .metrics-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .metric-card{padding:24px;border-radius:20px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 16px 40px rgba(17,24,39,.07);text-align:center}
    .metric-card .n{font-family:Montserrat,sans-serif;font-size:34px;font-weight:800;color:#111827;margin-bottom:8px}
    .metric-card .l{font-size:14px;color:#4b5563}
    .how-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:22px}
    .info-card{padding:26px;border-radius:22px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 16px 44px rgba(17,24,39,.08)}
    .icon-wrap{width:52px;height:52px;border-radius:16px;display:grid;place-items:center;background:rgba(179,113,63,.12);margin-bottom:16px}
    .proof-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
    .proof-card{padding:28px;border-radius:24px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 16px 44px rgba(17,24,39,.08)}
    .product-shell{position:relative}
    .tabs-layout{display:grid;grid-template-columns:.78fr 1.22fr;gap:22px;align-items:stretch}
    .tab-nav{display:flex;flex-direction:column;gap:12px}
    .tab-btn{padding:18px;border-radius:18px;border:1px solid #e5e7eb;background:#fff;text-align:left;cursor:pointer;transition:.25s ease;box-shadow:0 12px 30px rgba(17,24,39,.06)}
    .tab-btn.active{border-color:rgba(179,113,63,.45);background:linear-gradient(180deg,rgba(179,113,63,.08),rgba(179,113,63,.02));transform:translateY(-2px)}
    .tab-btn strong{display:block;color:#111827;font-size:16px}
    .tab-btn span{display:block;margin-top:6px;color:#4b5563;font-size:14px;line-height:1.6}
    .preview-panel{padding:28px;border-radius:28px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 18px 48px rgba(17,24,39,.08);overflow:hidden;position:relative}
    .preview-panel.dark-panel{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12);box-shadow:0 20px 60px rgba(0,0,0,.3)}
    .browser-frame{border-radius:20px;display:flex;flex-direction:column;overflow:hidden;background:#f8f8f8;border:1px solid rgba(17,24,39,.08);min-height:420px}
    .preview-panel.dark-panel .browser-frame{background:#0a0a0a;border-color:rgba(255,255,255,.08)}
    .browser-top{display:flex;gap:8px;padding:14px;background:rgba(17,24,39,.04);border-bottom:1px solid rgba(17,24,39,.08)}
    .preview-panel.dark-panel .browser-top{background:rgba(255,255,255,.04);border-color:rgba(255,255,255,.08)}
    .dot{width:10px;height:10px;border-radius:50%;background:#d1d5db}
    .preview-canvas{flex:1;min-height:0;height:420px;padding:20px;position:relative;overflow:hidden}
    .visual-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px;height:100%}
    .image-wall{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;height:100%}
    .tile{border-radius:18px;min-height:160px;position:relative;overflow:hidden;background:linear-gradient(135deg, rgba(179,113,63,.9), rgba(17,24,39,.9))}
    .tile:nth-child(2){background:linear-gradient(135deg,#1c2431,rgba(179,113,63,.8))}
    .tile:nth-child(3){background:linear-gradient(135deg,rgba(179,113,63,.75),#38404f)}
    .tile:nth-child(4){background:linear-gradient(135deg,#111827,rgba(179,113,63,.55))}
    .tile::after{content:'';position:absolute;inset:auto 16px 16px 16px;height:42px;border-radius:12px;background:rgba(255,255,255,.12);backdrop-filter:blur(10px)}
    .side-stack{display:flex;flex-direction:column;gap:12px}
    .mini-card{padding:16px;border-radius:18px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);color:#fff}
    .preview-panel:not(.dark-panel) .mini-card{background:#f8fafc;border-color:#e5e7eb;color:#111827}
    .list-lines{display:flex;flex-direction:column;gap:10px;margin-top:12px}
    .line{height:12px;border-radius:999px;background:linear-gradient(90deg, rgba(179,113,63,.22), rgba(17,24,39,.08))}
    .line.w80{width:80%}.line.w60{width:60%}.line.w90{width:90%}.line.w70{width:70%}
    .media-stage{position:relative;border-radius:26px;overflow:hidden;min-height:520px;background:#05070a;border:1px solid rgba(255,255,255,.08)}
    .media-stage video{width:100%;height:100%;object-fit:cover;display:block}
    .stage-overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.45))}
    .stage-float{position:absolute;left:24px;right:24px;bottom:24px;display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
    .float-box{padding:16px;border-radius:18px;background:rgba(255,255,255,.08);backdrop-filter:blur(14px);border:1px solid rgba(255,255,255,.12)}
    .focus-grid{display:grid;grid-template-columns:1fr 1fr;gap:24px}
    .gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .video-card{background:#0b0e13;border:1px solid rgba(255,255,255,.08);border-radius:22px;overflow:hidden;box-shadow:0 18px 44px rgba(0,0,0,.2)}
    .video-card video{width:100%;height:240px;object-fit:cover;display:block}
    .video-meta{padding:16px}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
    .pricing-card{padding:28px;border-radius:24px;background:#fff;color:#111827;border:1px solid #e5e7eb;box-shadow:0 18px 48px rgba(17,24,39,.08);display:flex;flex-direction:column}
    .pricing-card.featured{background:linear-gradient(180deg,#ffffff, #f8efe8);border-color:rgba(179,113,63,.35)}
    .price{font-family:Montserrat,sans-serif;font-size:40px;font-weight:800;margin:8px 0 10px}
    .price-note{font-size:14px;color:#4b5563}
    .check-list{display:flex;flex-direction:column;gap:12px;margin:22px 0 26px}
    .check-item{display:flex;gap:10px;align-items:flex-start;color:#374151}
    .check{width:20px;height:20px;border-radius:50%;display:grid;place-items:center;background:rgba(179,113,63,.14);color:var(--accent);font-size:12px;flex:0 0 20px}
    .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .testimonial-card{padding:24px;border-radius:22px;background:#fff;color:#111827;border:1px solid #e5e7eb;box-shadow:0 14px 40px rgba(17,24,39,.08);min-height:220px;display:flex;flex-direction:column;justify-content:space-between}
    .quote-mark{font-size:42px;line-height:1;color:var(--accent);opacity:.45}
    .author{margin-top:18px}
    .author strong{display:block}
    .author span{display:block;color:#6b7280;font-size:14px;margin-top:4px}
    .testimonial-controls{display:flex;justify-content:center;gap:10px;margin-top:24px}
    .slider-btn{width:44px;height:44px;background:#fff;color:#111827;border:1px solid #e5e7eb}
    .slider-btn:hover{background:#f8fafc}
    .cta-banner{padding:34px;border-radius:28px;background:linear-gradient(135deg,rgba(179,113,63,.16),rgba(17,24,39,.92));border:1px solid rgba(179,113,63,.24)}
    .footer{padding:34px 0;border-top:1px solid rgba(255,255,255,.08);background:#080b10}
    .footer-row{display:flex;justify-content:space-between;gap:18px;align-items:center;flex-wrap:wrap}
    .reveal{opacity:0;transform:translateY(28px);transition:all .8s ease}
    .reveal.visible{opacity:1;transform:none}
    .clip-reveal{clip-path:inset(18% 0 18% 0)}
    .zoom-reveal img,.zoom-reveal video,.scene-expand img,.scene-expand video{transform:scale(1.12)}
    .text-reveal-mask{overflow:hidden}
    .text-reveal-inner{transform:translateY(108%)}
    .stagger-parent > *{opacity:0;transform:translateY(18px)}
    .cursor-glow{position:fixed;top:-140px;left:-140px;width:280px;height:280px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(179,113,63,.18),rgba(179,113,63,0) 70%);filter:blur(18px);z-index:3}
    @media (max-width: 1100px){
      .grid-2,.tabs-layout,.focus-grid,.proof-grid{grid-template-columns:1fr}
      .gallery-grid,.pricing-grid,.testimonial-grid,.metrics-grid,.how-grid{grid-template-columns:1fr 1fr}
      .stage-float{grid-template-columns:1fr}
      .visual-grid{grid-template-columns:1fr}
    }
    @media (max-width: 768px){
      .section{padding:72px 0}
      h1{font-size:54px}
      h2{font-size:30px}
      .nav-inner{grid-template-columns:1fr;justify-items:start;padding:12px 0}
      .nav-right{flex-wrap:wrap}
      .form-grid,.gallery-grid,.pricing-grid,.testimonial-grid,.metrics-grid,.how-grid{grid-template-columns:1fr}
      .cta-row{flex-direction:column;align-items:stretch}
      .animated-cta,.ghost-btn,.submit-btn{width:100%}
      .hero{padding-top:72px}
      .hero-cinematic-bg{width:360px;height:360px}
      .stage-float{left:16px;right:16px;bottom:16px}
      .preview-canvas{height:auto}
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="lp">
        <nav className="nav">
          <div className="container nav-inner">
            <a href="#top" className="brand">
              Techjockey
            </a>
            <div className="nav-right">
              <a href="#products">Products</a>
              <a href="#pricing">Pricing</a>
              <a href="#testimonials">Testimonials</a>
            </div>
            <a href="#demo-form" className="animated-cta btn-magnetic">
              Book Free Demo
            </a>
          </div>
        </nav>

        <section className="hero" id="top">
          <div className="container hero-wrap">
            <div className="hero-cinematic-bg" />
            <div className="grid-2">
              <div className="hero-copy reveal">
                <span className="eyebrow">AI Image & Video Generation</span>
                <h1 className="split-text">
                  Explore <span className="gradient-text">Seedream</span> and <span className="gradient-text">Seedance</span> with a free demo
                </h1>
                <p className="hero-sub">
                  Discover how ByteDance’s advanced AI tools help teams create high-quality visuals and cinematic videos faster. Compare capabilities, understand use cases, and get expert guidance from Techjockey before you decide.
                </p>
                <div className="chip-row">
                  <span className="chip">High-resolution image creation</span>
                  <span className="chip">Text-to-video generation</span>
                  <span className="chip">Multimodal editing workflows</span>
                  <span className="chip">Fast expert-assisted evaluation</span>
                </div>
                <div className="cta-row">
                  <a href="#demo-form" className="animated-cta btn-magnetic">
                    Get Free Demo
                  </a>
                  <a href="#products" className="ghost-btn btn-magnetic">
                    Explore Features
                  </a>
                </div>
              </div>

              <div className="hero-visual reveal" id="demo-form">
                <form className="form-card" onSubmit={handleSubmit}>
                  <h3>Book a personalized walkthrough</h3>
                  <p className="muted">
                    Fill in your details and our product experts will help you evaluate the right solution.
                  </p>
                  <div className="form-grid">
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
                    <div className="field full">
                      <button type="submit" className="submit-btn btn-magnetic">
                        Request Demo
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="section white">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Why teams explore these tools</span>
              <h2>Built for modern creative and production workflows</h2>
              <p className="muted">
                From image generation to AI-driven video storytelling, these products are designed to reduce production effort and increase creative speed.
              </p>
            </div>
            <div className="metrics-grid stagger-parent">
              <div className="metric-card">
                <div className="n" data-count="4000" data-suffix="+">
                  0
                </div>
                <div className="l">High-resolution output potential</div>
              </div>
              <div className="metric-card">
                <div className="n" data-count="10" data-suffix="×">
                  0
                </div>
                <div className="l">Faster video generation workflow</div>
              </div>
              <div className="metric-card">
                <div className="n" data-count="2" data-suffix=" Solutions">
                  0
                </div>
                <div className="l">Image and video creation platforms</div>
              </div>
            </div>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">How Techjockey helps</span>
              <h2>Simple buying journey with expert support</h2>
              <p className="muted">
                Get guided evaluation, a free product demo, and faster shortlisting for your creative technology stack.
              </p>
            </div>
            <div className="how-grid stagger-parent">
              <div className="info-card">
                <div className="icon-wrap">
                  <span>01</span>
                </div>
                <h3>Understand fit</h3>
                <p className="muted">
                  Our team maps your visual creation, branding, and video production needs to the right product capabilities.
                </p>
              </div>
              <div className="info-card">
                <div className="icon-wrap">
                  <span>02</span>
                </div>
                <h3>See a live demo</h3>
                <p className="muted">
                  Evaluate output quality, controls, and workflows with a guided walkthrough before making a decision.
                </p>
              </div>
              <div className="info-card">
                <div className="icon-wrap">
                  <span>03</span>
                </div>
                <h3>Buy with clarity</h3>
                <p className="muted">
                  Compare use cases, understand strengths, and move forward with confidence using Techjockey’s assisted process.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="section white" id="products">
          <div className="container product-shell">
            <div className="section-head reveal">
              <span className="eyebrow">Seedream 4.5</span>
              <h2>Advanced AI image generation with strong control and fidelity</h2>
              <p className="muted">
                Explore how Seedream helps teams generate polished image outputs, preserve subject consistency, and improve prompt-to-visual precision.
              </p>
            </div>

            <div className="tabs-layout">
              <div className="tab-nav reveal">
                {seedreamFeatures.map((item, index) => (
                  <button
                    key={item.title}
                    className={`tab-btn ${activeSeedreamTab === index ? 'active' : ''}`}
                    onClick={() => setActiveSeedreamTab(index)}
                    type="button"
                  >
                    <strong>{item.title}</strong>
                    <span>{item.description}</span>
                  </button>
                ))}
              </div>

              <div className="preview-panel reveal">
                <div className="browser-frame">
                  <div className="browser-top">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                  <div className="preview-canvas">
                    <div className="visual-grid">
                      <div className="image-wall zoom-reveal">
                        <div className="tile" />
                        <div className="tile" />
                        <div className="tile" />
                        <div className="tile" />
                      </div>
                      <div className="side-stack">
                        <div className="mini-card">
                          <strong>{seedreamFeatures[activeSeedreamTab].title}</strong>
                          <div className="list-lines">
                            <div className="line w90" />
                            <div className="line w80" />
                            <div className="line w70" />
                          </div>
                        </div>
                        <div className="mini-card">
                          <strong>Professional visual workflows</strong>
                          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
                            Ideal for text-heavy creatives, concept art, ad mockups, campaign assets, and structured visual outputs.
                          </p>
                        </div>
                        <div className="mini-card">
                          <strong>Consistency across edits</strong>
                          <p style={{ marginTop: 10, lineHeight: 1.7 }}>
                            Maintain scene structure and subject identity with multi-image composition support.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Seedance 1.5 Pro</span>
              <h2>AI video generation for cinematic storytelling</h2>
              <p className="muted">
                Assess how Seedance helps create coherent, realistic videos with synchronized audio and advanced camera motion.
              </p>
            </div>

            <div className="focus-grid">
              <div className="preview-panel dark-panel reveal">
                <div className="browser-frame">
                  <div className="browser-top">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                  <div className="preview-canvas">
                    <div className="side-stack">
                      {seedanceFeatures.map((item, index) => (
                        <button
                          key={item.title}
                          className={`tab-btn ${activeSeedanceTab === index ? 'active' : ''}`}
                          onClick={() => setActiveSeedanceTab(index)}
                          type="button"
                        >
                          <strong>{item.title}</strong>
                          <span>{item.description}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="media-stage scene-expand reveal">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
                >
                  <source src="https://cdn.coverr.co/videos/coverr-editing-a-video-production-1560083994733?download=1080p" type="video/mp4" />
                </video>
                <div className="stage-overlay" />
                <div className="stage-float">
                  <div className="float-box">
                    <strong>{seedanceFeatures[activeSeedanceTab].title}</strong>
                    <p style={{ marginTop: 10, lineHeight: 1.7 }}>{seedanceFeatures[activeSeedanceTab].description}</p>
                  </div>
                  <div className="float-box">
                    <strong>Realistic motion</strong>
                    <p style={{ marginTop: 10, lineHeight: 1.7 }}>
                      Create narrative-driven video outputs with improved coherence and dynamic visual movement.
                    </p>
                  </div>
                  <div className="float-box">
                    <strong>Faster turnaround</strong>
                    <p style={{ marginTop: 10, lineHeight: 1.7 }}>
                      Speed up ideation and prototype multiple creative directions without heavy production overhead.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section white">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Use case inspiration</span>
              <h2>Where these products can add value</h2>
              <p className="muted">
                Creative teams, marketers, studios, and production professionals can explore these tools for faster concepting and content creation.
              </p>
            </div>
            <div className="gallery-grid stagger-parent">
              <div className="video-card">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&fit=crop&w=1200&q=80"
                >
                  <source src="https://cdn.coverr.co/videos/coverr-close-up-of-a-designer-working-1577973015620?download=1080p" type="video/mp4" />
                </video>
                <div className="video-meta">
                  <h3>Campaign creatives</h3>
                  <p className="muted">Generate image concepts and polished visual variations for ads and marketing assets.</p>
                </div>
              </div>
              <div className="video-card">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1521572267360-ee0c2909d518?auto=format&fit=crop&w=1200&q=80"
                >
                  <source src="https://cdn.coverr.co/videos/coverr-young-video-editor-working-on-a-project-1906?download=1080p" type="video/mp4" />
                </video>
                <div className="video-meta">
                  <h3>Video storytelling</h3>
                  <p className="muted">Prototype scenes, multilingual content, and cinematic concepts with AI-assisted workflows.</p>
                </div>
              </div>
              <div className="video-card">
                <video
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
                >
                  <source src="https://cdn.coverr.co/videos/coverr-team-discussing-a-project-5176?download=1080p" type="video/mp4" />
                </video>
                <div className="video-meta">
                  <h3>Creative team collaboration</h3>
                  <p className="muted">Align teams faster with demo-led evaluation, clearer outputs, and guided product comparison.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section light" id="pricing">
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Plans & assistance</span>
              <h2>Start with a free demo, then choose what fits</h2>
              <p className="muted">
                Talk to Techjockey experts to understand pricing, capabilities, and the right buying path for your team.
              </p>
            </div>
            <div className="pricing-grid stagger-parent">
              <div className="pricing-card">
                <span className="eyebrow">Free Demo</span>
                <div className="price">₹0</div>
                <div className="price-note">Best for initial product evaluation through Techjockey</div>
                <div className="check-list">
                  <div className="check-item">
                    <span className="check">✓</span>
                    <span>Expert consultation for your use case</span>
                  </div>
                  <div className="check-item">
                    <span className="check">✓</span>
                    <span>Guided walkthrough of relevant capabilities</span>
                  </div>
                  <div className="check-item">
                    <span className="check">✓</span>
                    <span>Product shortlisting support</span>
                  </div>
                </div>
                <a href="#demo-form" className="animated-cta btn-magnetic">
                  Book Free Demo
                </a>
              </div>

              <div className="pricing-card featured">
                <span className="eyebrow">Custom Purchase</span>
                <div className="price">Talk to Sales</div>
                <div className="price-note">For teams evaluating deployment, scale, and commercial details</div>
                <div className="check-list">
                  <div className="check-item">
                    <span className="check">✓</span>
                    <span>Get product-specific pricing guidance</span>
                  </div>
                  <div className="check-item">
                    <span className="check">✓</span>
                    <span>Compare Seedream and Seedance use cases</span>
                  </div>
                  <div className="check-item">
                    <span className="check">✓</span>
                    <span>Assisted buying journey through Techjockey</span>
                  </div>
                </div>
                <a href="#demo-form" className="animated-cta btn-magnetic">
                  Talk to Expert
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section white" id="testimonials" ref={testimonialsRef}>
          <div className="container">
            <div className="section-head reveal">
              <span className="eyebrow">Customer voice</span>
              <h2>What professionals say about the evaluation experience</h2>
              <p className="muted">
                Real feedback from creative and marketing professionals exploring these solutions through Techjockey.
              </p>
            </div>

            <div className="testimonial-grid">
              {testimonials.slice(activeSlide, activeSlide + 3).length === 3
                ? testimonials.slice(activeSlide, activeSlide + 3).map((item) => (
                    <div className="testimonial-card reveal" key={item.name + item.role}>
                      <div>
                        <div className="quote-mark">“</div>
                        <p style={{ lineHeight: 1.8, color: '#374151' }}>{item.quote}</p>
                      </div>
                      <div className="author">
                        <strong>{item.name}</strong>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  ))
                : [...testimonials.slice(activeSlide), ...testimonials.slice(0, 3 - testimonials.slice(activeSlide).length)].map((item) => (
                    <div className="testimonial-card reveal" key={item.name + item.role}>
                      <div>
                        <div className="quote-mark">“</div>
                        <p style={{ lineHeight: 1.8, color: '#374151' }}>{item.quote}</p>
                      </div>
                      <div className="author">
                        <strong>{item.name}</strong>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  ))}
            </div>

            <div className="testimonial-controls">
              <button
                type="button"
                className="slider-btn"
                onClick={() => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              >
                ←
              </button>
              <button
                type="button"
                className="slider-btn"
                onClick={() => setActiveSlide((prev) => (prev + 1) % testimonials.length)}
              >
                →
              </button>
            </div>
          </div>
        </section>

        <section className="section dark">
          <div className="container">
            <div className="cta-banner reveal">
              <div className="grid-2" style={{ alignItems: 'center' }}>
                <div>
                  <span className="eyebrow">Ready to evaluate?</span>
                  <h2 style={{ marginTop: 14 }}>Book your free demo with Techjockey today</h2>
                  <p className="muted" style={{ marginTop: 8, lineHeight: 1.8 }}>
                    See how Seedream and Seedance fit your creative workflow, compare strengths, and get expert guidance before you buy.
                  </p>
                </div>
                <div className="cta-row" style={{ justifyContent: 'flex-end' }}>
                  <a href="#demo-form" className="animated-cta btn-magnetic">
                    Request Free Demo
                  </a>
                  <a href="#products" className="ghost-btn btn-magnetic">
                    Review Features
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-row">
            <div>
              <strong>Techjockey</strong>
              <div className="muted" style={{ marginTop: 6 }}>
                Helping businesses discover the right software with confidence.
              </div>
            </div>
            <div className="muted">© 2026 Techjockey. All rights reserved.</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;