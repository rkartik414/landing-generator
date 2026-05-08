import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#b3713f';
  const primary = '#b3713f';
  const bodyBg = '#ffffff';

  const [activeProductTab, setActiveProductTab] = useState(0);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const scriptsLoaded = useRef(false);

  const productName = 'Seedream 4.5 and Seedance 1.5 Pro by ByteDance';

  const products = [
    {
      name: 'Seedream 4.5',
      headline: 'AI Image Generation with Seedream 4.5',
      description:
        'Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.',
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

  const videos = [
    '/output/generated-assets/ds_1778005099236_2b59c18c/08-8c93b9a6e6.mp4',
    'https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4',
    'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4',
    'https://cdn.web.imagine.art/imagine-one/onboarding-videos/text-to-image.mp4',
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
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    if (scriptsLoaded.current) return;
    scriptsLoaded.current = true;

    const loadScript = (src) =>
      new Promise((resolve) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) return resolve();
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = resolve;
        document.body.appendChild(s);
      });

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/SplitText.min.js'),
    ]).then(() => {
      const initGSAP = () => {
        if (!window.gsap || !window.ScrollTrigger) return;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            const gsap = window.gsap;
            const ScrollTrigger = window.ScrollTrigger;
            gsap.registerPlugin(ScrollTrigger);

            const glow = document.createElement('div');
            glow.className = 'cursor-glow';
            document.body.appendChild(glow);

            const moveHandler = (e) => {
              gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
            };
            window.addEventListener('mousemove', moveHandler);

            gsap.utils.toArray('.scene-expand').forEach((scene) => {
              gsap.to(scene, {
                width: '100%',
                borderRadius: '0px',
                ease: 'none',
                scrollTrigger: { trigger: scene, start: 'top 80%', end: 'top 20%', scrub: 1.2 },
              });
              const media = scene.querySelector('img, video');
              if (media) {
                gsap.to(media, {
                  scale: 1,
                  ease: 'none',
                  scrollTrigger: { trigger: scene, start: 'top 80%', end: 'top 20%', scrub: 1.2 },
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
                scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
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
                scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' },
              });
            });

            gsap.utils.toArray('.stagger-parent').forEach((parent) => {
              gsap.to(parent.children, {
                opacity: 1,
                y: 0,
                duration: 0.8,
                stagger: 0.12,
                ease: 'power3.out',
                scrollTrigger: { trigger: parent, start: 'top 80%', toggleActions: 'play none none none' },
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
                scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
              });
            });

            gsap.utils.toArray('.text-reveal-mask').forEach((mask) => {
              const inner = mask.querySelector('.text-reveal-inner');
              if (!inner) return;
              gsap.to(inner, {
                y: '0%',
                duration: 1,
                ease: 'power4.out',
                scrollTrigger: { trigger: mask, start: 'top 85%', toggleActions: 'play none none reverse' },
              });
            });

            gsap.utils.toArray('.btn-magnetic').forEach((btn) => {
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
              ScrollTrigger.create({ trigger: scene, start: 'top top', end: '+=600', pin: true, pinSpacing: true });
            });

            gsap.utils.toArray('[data-count]').forEach((el) => {
              const target = parseFloat(el.dataset.count);
              if (Number.isNaN(target)) return;
              const prefix = el.dataset.prefix || '';
              const suffix = el.dataset.suffix || '';
              gsap.from(
                { val: 0 },
                {
                  val: target,
                  duration: 2,
                  ease: 'power2.out',
                  snap: { val: 1 },
                  scrollTrigger: { trigger: el, start: 'top 80%', once: true },
                  onUpdate: function () {
                    el.textContent = prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
                  },
                }
              );
            });
          });
        });
      };
      initGSAP();
    });
  }, []);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => e.preventDefault();

  const initials = (name) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2);

  const FeatureIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l2.7 5.47L21 9.4l-4.5 4.38 1.06 6.22L12 17.17 6.44 20l1.06-6.22L3 9.4l6.3-.93L12 3z" fill={accent} />
    </svg>
  );

  const css = `
    :root{--accent:${accent};--primary:${primary};}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;font-family:Inter,sans-serif;background:${bodyBg};color:#111827}
    a{text-decoration:none;color:inherit}
    img,video{max-width:100%;display:block}
    .page{background:${bodyBg};overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:84px 0;position:relative}
    .dark{background:linear-gradient(180deg,#171717 0%,#111111 100%);color:#fff}
    .light{background:#fff}
    .soft{background:linear-gradient(180deg,#faf7f3 0%,#ffffff 100%)}
    .warm{background:linear-gradient(180deg,#fffaf5 0%,#fff 100%)}
    .gradient-text{background:linear-gradient(135deg,var(--accent) 0%,var(--primary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:none}
    .nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.88);backdrop-filter:blur(18px);border-bottom:1px solid rgba(17,24,39,.08)}
    .nav-inner{display:grid;grid-template-columns:minmax(0,1fr) auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand-text{font-weight:800;font-size:20px;line-height:1.2;color:#111827}
    .tj-wrap{display:flex;align-items:center;justify-content:center}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:12px;background:var(--accent);color:#fff;font-weight:700;border:1px solid rgba(255,255,255,.12);transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(179,113,63,.28);background:var(--primary)}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:12px;border:1px solid rgba(17,24,39,.12);color:#111827;background:#fff;transition:.25s}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.08);background:#fff8f2}
    .hero{position:relative;min-height:100vh;padding:34px 0 80px;display:flex;align-items:center;overflow:hidden;background:
      linear-gradient(115deg, rgba(255,250,245,.96) 0%, rgba(255,255,255,.90) 42%, rgba(250,247,243,.96) 100%),
      radial-gradient(circle at 8% 10%, rgba(179,113,63,.16), transparent 28%),
      radial-gradient(circle at 88% 18%, rgba(179,113,63,.13), transparent 24%);}
    .hero-bg-media{position:absolute;inset:0;z-index:0;overflow:hidden}
    .hero-bg-media video{width:100%;height:100%;object-fit:cover;opacity:.22;filter:saturate(1.05) contrast(1.02) brightness(.92)}
    .hero-bg-overlay{position:absolute;inset:0;background:
      linear-gradient(90deg, rgba(255,250,245,.96) 0%, rgba(255,250,245,.90) 34%, rgba(255,255,255,.80) 56%, rgba(255,255,255,.88) 100%),
      linear-gradient(180deg, rgba(255,255,255,.18) 0%, rgba(255,255,255,.30) 100%)}
    .hero-wrap{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center;position:relative;z-index:2}
    .hero-cinematic-bg{position:absolute;inset:-60px -20px auto auto;width:460px;height:460px;border-radius:50%;background:radial-gradient(circle, rgba(179,113,63,.18) 0%, rgba(179,113,63,.06) 36%, transparent 72%);filter:blur(8px);transform:scale(.9)}
    .hero-left{position:relative;z-index:2}
    .eyebrow{display:inline-flex;align-items:center;gap:10px;padding:8px 14px;border-radius:999px;background:rgba(179,113,63,.10);border:1px solid rgba(179,113,63,.25);color:#8b5b34;font-size:13px;margin-bottom:18px;font-weight:600}
    .hero h1{font-family:'Plus Jakarta Sans',sans-serif;font-size:54px;line-height:1.02;letter-spacing:-.04em;margin:0 0 16px;color:#111827;max-width:760px}
    .hero p{font-size:18px;line-height:1.75;color:#4b5563;max-width:760px;margin:0}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 28px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(179,113,63,.22);background:rgba(255,255,255,.88);backdrop-filter:blur(8px);color:#374151;font-size:13px;box-shadow:0 8px 20px rgba(17,24,39,.05)}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{position:relative;z-index:2;min-height:500px;display:flex;align-items:center;justify-content:center}
    .form-card{width:100%;max-width:460px;padding:28px;border-radius:24px;background:rgba(255,255,255,.90);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.55);box-shadow:0 22px 60px rgba(17,24,39,.14)}
    .form-card h3{font-family:'Plus Jakarta Sans',sans-serif;color:#111827;font-size:28px;margin:0 0 8px}
    .form-card p{color:#6b7280;font-size:14px;margin:0 0 20px}
    .field-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .field{display:flex;flex-direction:column;gap:8px}
    .field label{color:#374151;font-size:13px;font-weight:600}
    .field input{width:100%;height:48px;border-radius:12px;border:1px solid #e5e7eb;background:#fff;padding:0 14px;color:#111827;outline:none;transition:.2s}
    .field input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(179,113,63,.14)}
    .full{grid-column:1/-1}
    .hero-proof{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px}
    .proof-card{padding:14px 14px 12px;border-radius:18px;background:rgba(255,255,255,.82);backdrop-filter:blur(10px);border:1px solid rgba(17,24,39,.08);box-shadow:0 10px 24px rgba(17,24,39,.08)}
    .proof-card strong{display:block;font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;line-height:1;color:#111827;margin-bottom:6px}
    .proof-card span{display:block;font-size:12px;line-height:1.45;color:#6b7280}
    .section-head{max-width:760px;margin-bottom:28px}
    .section-head.center{text-align:center;margin-left:auto;margin-right:auto}
    .section-head h2{font-family:'Plus Jakarta Sans',sans-serif;font-size:40px;line-height:1.1;margin:0 0 14px;color:#111827}
    .section-head p{font-size:17px;line-height:1.75;color:#6b7280;margin:0}
    .dark .section-head h2{color:#fff}
    .dark .section-head p{color:#d1d5db}
    .metrics-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .metric-card{padding:24px;border-radius:20px;background:#fff;border:1px solid #eee3d8;box-shadow:0 10px 30px rgba(17,24,39,.06)}
    .metric-card h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;margin:0 0 8px}
    .metric-card p{margin:0;color:#6b7280;line-height:1.6}
    .metric-value{font-family:'Plus Jakarta Sans',sans-serif;font-size:36px;font-weight:800;color:#111827;margin-bottom:8px}
    .tabs-shell{display:grid;grid-template-columns:320px 1fr;gap:28px;align-items:start}
    .tabs-nav{display:flex;flex-direction:column;gap:12px}
    .tab-btn{padding:18px;border-radius:18px;border:1px solid #eadfd4;background:#fff;text-align:left;cursor:pointer;transition:.25s;box-shadow:0 8px 20px rgba(17,24,39,.04)}
    .tab-btn.active{border-color:rgba(179,113,63,.45);box-shadow:0 12px 28px rgba(179,113,63,.12);background:linear-gradient(180deg, rgba(179,113,63,.08), rgba(255,255,255,1))}
    .tab-btn h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;margin:0 0 6px}
    .tab-btn p{margin:0;color:#6b7280;font-size:14px;line-height:1.5}
    .preview-panel{padding:28px;border-radius:24px;background:#fff;border:1px solid #eadfd4;box-shadow:0 16px 40px rgba(17,24,39,.08)}
    .dashboard-visual{position:relative;min-height:420px;border-radius:22px;overflow:hidden;background:linear-gradient(135deg,#fff8f1 0%,#ffffff 55%,#f5ece4 100%);padding:20px;display:grid;grid-template-columns:1.3fr .7fr;gap:18px;border:1px solid #f0e4d8}
    .visual-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .thumb-card,.stat-card,.timeline-card,.control-card{border-radius:18px;background:#fff;border:1px solid #efe4d8;padding:16px;color:#111827;box-shadow:0 10px 24px rgba(17,24,39,.05)}
    .thumb-card{min-height:116px;background:linear-gradient(135deg, rgba(179,113,63,.18), rgba(255,255,255,.9)), radial-gradient(circle at top right, rgba(179,113,63,.10), transparent 45%), #fff}
    .thumb-card strong,.stat-card strong,.timeline-card strong,.control-card strong{display:block;font-size:14px;margin-bottom:8px}
    .thumb-lines span,.mini-lines span{display:block;height:8px;border-radius:999px;background:rgba(17,24,39,.10);margin-top:8px}
    .thumb-lines span:nth-child(2){width:78%}
    .thumb-lines span:nth-child(3){width:54%}
    .stat-card{display:flex;flex-direction:column;justify-content:center;min-height:116px}
    .big-stat{font-family:'Plus Jakarta Sans',sans-serif;font-size:34px;font-weight:800;color:var(--accent);line-height:1;margin-bottom:8px}
    .timeline-card{min-height:180px}
    .timeline-steps{display:grid;gap:10px}
    .timeline-step{display:flex;gap:10px;align-items:flex-start}
    .timeline-step i{width:22px;height:22px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:rgba(179,113,63,.14);color:var(--accent);font-style:normal;font-size:12px;font-weight:700;flex:0 0 22px}
    .timeline-step span{font-size:13px;line-height:1.5;color:#4b5563}
    .control-stack{display:grid;gap:14px}
    .control-pill{display:flex;align-items:center;justify-content:space-between;padding:12px 14px;border-radius:14px;background:#fff8f2;border:1px solid #f2dfce;font-size:13px;color:#374151}
    .pill-dot{width:10px;height:10px;border-radius:50%;background:var(--accent);box-shadow:0 0 0 6px rgba(179,113,63,.12)}
    .product-copy{margin-top:24px}
    .product-copy h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;margin:0 0 12px}
    .product-copy p{margin:0;color:#6b7280;line-height:1.8}
    .feature-list{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:24px}
    .feature-card{padding:18px;border-radius:18px;background:#fff;border:1px solid #efe4d8;box-shadow:0 10px 24px rgba(17,24,39,.05)}
    .feature-card h4{margin:0 0 8px;font-size:16px;color:#111827}
    .feature-card p{margin:0;color:#6b7280;line-height:1.65;font-size:14px}
    .feature-title{display:flex;align-items:center;gap:10px;margin-bottom:8px}
    .media-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
    .media-card{border-radius:24px;overflow:hidden;border:1px solid #eadfd4;box-shadow:0 16px 40px rgba(17,24,39,.08);background:#fff}
    .media-card video{width:100%;height:100%;min-height:340px;object-fit:cover}
    .media-card.small video{min-height:220px}
    .media-caption{padding:16px 18px;border-top:1px solid #f2ebe3}
    .media-caption h4{margin:0 0 6px;font-size:16px}
    .media-caption p{margin:0;color:#6b7280;font-size:14px;line-height:1.6}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
    .pricing-card{padding:28px;border-radius:24px;background:#fff;border:1px solid #eadfd4;box-shadow:0 14px 34px rgba(17,24,39,.07);position:relative}
    .pricing-card.highlight{background:linear-gradient(180deg,#fffaf5 0%,#ffffff 100%);border-color:rgba(179,113,63,.35)}
    .pricing-card h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;margin:0 0 12px}
    .price-row{display:flex;align-items:end;gap:10px;margin-bottom:16px}
    .price{font-family:'Plus Jakarta Sans',sans-serif;font-size:34px;font-weight:800;color:#111827;line-height:1}
    .includes{display:grid;gap:10px;margin:18px 0 22px}
    .inc-item{display:flex;gap:10px;align-items:flex-start;color:#4b5563;font-size:14px;line-height:1.6}
    .testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .testimonial-card{padding:24px;border-radius:22px;background:#fff;border:1px solid #eadfd4;box-shadow:0 14px 32px rgba(17,24,39,.06);height:100%}
    .testimonial-card.active{border-color:rgba(179,113,63,.35);box-shadow:0 18px 40px rgba(179,113,63,.10)}
    .testimonial-card p{margin:0 0 18px;color:#4b5563;line-height:1.8}
    .testimonial-meta{display:flex;align-items:center;gap:12px}
    .avatar{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(179,113,63,.12);color:var(--accent);font-weight:800}
    .faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
    .faq-card{padding:20px;border-radius:18px;border:1px solid #eadfd4;background:#fff}
    .faq-card h4{margin:0 0 8px;font-size:17px}
    .faq-card p{margin:0;color:#6b7280;line-height:1.7}
    .footer{padding:34px 0;border-top:1px solid #eee3d8;background:#fff}
    .footer-inner{display:flex;justify-content:space-between;align-items:center;gap:16px;flex-wrap:wrap}
    .cursor-glow{position:fixed;top:0;left:0;width:240px;height:240px;border-radius:50%;pointer-events:none;background:radial-gradient(circle, rgba(179,113,63,.18) 0%, rgba(179,113,63,.08) 35%, rgba(179,113,63,0) 72%);transform:translate(-50%,-50%);z-index:1;mix-blend-mode:multiply}
    .btn-wide{width:100%}
    @media (max-width: 1080px){
      .hero-wrap,.tabs-shell,.dashboard-visual,.pricing-grid,.testimonials-grid,.faq-grid,.metrics-strip,.media-grid{grid-template-columns:1fr}
      .feature-list{grid-template-columns:1fr}
      .hero{min-height:auto;padding:24px 0 64px}
      .hero-proof{grid-template-columns:1fr 1fr 1fr}
    }
    @media (max-width: 720px){
      .nav-inner{grid-template-columns:1fr;justify-items:start}
      .hero h1{font-size:54px}
      .section-head h2{font-size:32px}
      .field-grid,.hero-proof{grid-template-columns:1fr}
      .container{width:min(1180px,calc(100% - 24px))}
      .section{padding:68px 0}
      .hero-bg-overlay{background:
        linear-gradient(180deg, rgba(255,250,245,.92) 0%, rgba(255,255,255,.88) 54%, rgba(255,255,255,.94) 100%),
        linear-gradient(180deg, rgba(255,255,255,.16) 0%, rgba(255,255,255,.28) 100%)}
    }
  `;

  return (
    <div className="page">
      <style>{css}</style>

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand-text">{productName}</div>
          <div className="tj-wrap">
            <span style={{ fontSize: 14, color: '#6b7280', fontWeight: 600 }}>Powered by Techjockey</span>
          </div>
          <a href="#demo" className="animated-cta btn-magnetic">
            Book Free Demo
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg-media">
          <video autoPlay muted loop playsInline preload="auto">
            <source src={videos[1]} type="video/mp4" />
          </video>
          <div className="hero-bg-overlay" />
        </div>

        <div className="container hero-wrap">
          <div className="hero-cinematic-bg" />
          <div className="hero-left reveal">
            <div className="eyebrow">
              <span>AI Image + Video Generation</span>
            </div>
            <h1>
              Discover <span className="gradient-text">Seedream 4.5</span> and <span className="gradient-text">Seedance 1.5 Pro</span> by ByteDance
            </h1>
            <p>
              Explore advanced AI image and video generation capabilities with Seedream 4.5 and Seedance 1.5 Pro. Create high-resolution visuals, cinematic videos, synchronized audio-visual content, and multilingual lip-sync experiences through a single guided demo from Techjockey.
            </p>

            <div className="chips">
              <div className="chip">
                <FeatureIcon />
                <span>High-resolution AI image generation</span>
              </div>
              <div className="chip">
                <FeatureIcon />
                <span>Native audio + video output</span>
              </div>
              <div className="chip">
                <FeatureIcon />
                <span>Multilingual lip-sync support</span>
              </div>
              <div className="chip">
                <FeatureIcon />
                <span>Free product demo assistance</span>
              </div>
            </div>

            <div className="hero-actions">
              <a href="#demo" className="animated-cta btn-magnetic">
                Get Free Demo
              </a>
              <a href="#pricing" className="ghost-btn">
                View Pricing
              </a>
            </div>

            <div className="hero-proof reveal">
              <div className="proof-card">
                <strong>4K</strong>
                <span>Visual outputs for creative and commercial image generation</span>
              </div>
              <div className="proof-card">
                <strong>Audio + Video</strong>
                <span>Native synchronized generation for story-driven content</span>
              </div>
              <div className="proof-card">
                <strong>10× Faster</strong>
                <span>Optimized inference pipeline for quicker production cycles</span>
              </div>
            </div>
          </div>

          <div className="hero-visual reveal" id="demo">
            <div className="form-card">
              <h3>Book Your Free Demo</h3>
              <p>Share your details and our team will help you evaluate the right ByteDance AI generation solution.</p>
              <form onSubmit={handleSubmit}>
                <div className="field-grid">
                  <div className="field">
                    <label htmlFor="name">Full Name</label>
                    <input id="name" name="name" type="text" placeholder="Enter your name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Work Email</label>
                    <input id="email" name="email" type="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone Number</label>
                    <input id="phone" name="phone" type="tel" placeholder="Enter your phone" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company Name</label>
                    <input id="company" name="company" type="text" placeholder="Enter your company" value={formData.company} onChange={handleChange} />
                  </div>
                  <div className="full">
                    <button type="submit" className="animated-cta btn-magnetic btn-wide">
                      Request Demo
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head center reveal">
            <h2>Why teams choose these ByteDance AI models</h2>
            <p>
              From campaign creatives and product visuals to cinematic storytelling and multilingual video output, Seedream 4.5 and Seedance 1.5 Pro support high-quality generation workflows for modern creative teams.
            </p>
          </div>

          <div className="metrics-strip">
            <div className="metric-card reveal">
              <div className="metric-value" data-count="4" data-suffix="K">
                0
              </div>
              <h3>High-resolution output</h3>
              <p>Generate crisp visuals suited for design, marketing, and ad production with up to 4K-quality output support.</p>
            </div>
            <div className="metric-card reveal">
              <div className="metric-value" data-count="10" data-suffix="×">
                0
              </div>
              <h3>Faster inference</h3>
              <p>Seedance accelerates video generation for quicker iterations, faster delivery, and more agile content production.</p>
            </div>
            <div className="metric-card reveal">
              <div className="metric-value" data-count="2" data-suffix="+">
                0
              </div>
              <h3>Multimodal workflows</h3>
              <p>Cover image generation, editing, composition, text-to-video, and synchronized sound creation in one ecosystem.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="section-head reveal">
            <h2>Explore the product suite</h2>
            <p>Switch between Seedream 4.5 and Seedance 1.5 Pro to understand the strengths, workflows, and production outcomes each model delivers.</p>
          </div>

          <div className="tabs-shell">
            <div className="tabs-nav reveal">
              {products.map((product, idx) => (
                <button
                  key={product.name}
                  className={`tab-btn ${activeProductTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveProductTab(idx)}
                >
                  <h3>{product.name}</h3>
                  <p>{product.headline}</p>
                </button>
              ))}
            </div>

            <div className="preview-panel reveal">
              <div className="dashboard-visual">
                <div className="visual-grid">
                  <div className="thumb-card">
                    <strong>{activeProductTab === 0 ? 'Prompt-to-Image' : 'Prompt-to-Video'}</strong>
                    <div className="thumb-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="stat-card">
                    <strong>Output Quality</strong>
                    <div className="big-stat">{activeProductTab === 0 ? '1K–4K' : 'Cinematic'}</div>
                    <div className="mini-lines">
                      <span style={{ width: '76%' }} />
                      <span style={{ width: '58%' }} />
                    </div>
                  </div>
                  <div className="timeline-card">
                    <strong>{activeProductTab === 0 ? 'Image Workflow' : 'Video Workflow'}</strong>
                    <div className="timeline-steps">
                      <div className="timeline-step">
                        <i>1</i>
                        <span>{activeProductTab === 0 ? 'Input text prompt or image reference' : 'Input script, prompt, or concept brief'}</span>
                      </div>
                      <div className="timeline-step">
                        <i>2</i>
                        <span>{activeProductTab === 0 ? 'Generate, edit, and compose visuals' : 'Generate synchronized video and audio output'}</span>
                      </div>
                      <div className="timeline-step">
                        <i>3</i>
                        <span>{activeProductTab === 0 ? 'Refine design fidelity and typography' : 'Apply lip-sync and cinematic movement'}</span>
                      </div>
                    </div>
                  </div>
                  <div className="control-stack">
                    <div className="control-card">
                      <strong>Creative Controls</strong>
                      <div className="control-pill">
                        <span>{activeProductTab === 0 ? 'Identity Preservation' : 'Camera Control'}</span>
                        <i className="pill-dot" />
                      </div>
                    </div>
                    <div className="control-card">
                      <strong>Production Benefit</strong>
                      <div className="control-pill">
                        <span>{activeProductTab === 0 ? 'Text-heavy visual support' : 'Audio-visual synchronization'}</span>
                        <i className="pill-dot" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="media-card small zoom-reveal">
                  <video autoPlay muted loop playsInline>
                    <source src={activeProductTab === 0 ? videos[3] : videos[2]} type="video/mp4" />
                  </video>
                </div>
              </div>

              <div className="product-copy">
                <h3>{products[activeProductTab].headline}</h3>
                <p>{products[activeProductTab].description}</p>

                <div className="feature-list">
                  {products[activeProductTab].features.map((feature) => (
                    <div className="feature-card" key={feature.title}>
                      <div className="feature-title">
                        <FeatureIcon />
                        <h4>{feature.title}</h4>
                      </div>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section warm">
        <div className="container">
          <div className="section-head center reveal">
            <h2>See the output experience in action</h2>
            <p>Preview how image generation, cinematic motion, and synchronized video workflows translate into polished creative outputs.</p>
          </div>

          <div className="media-grid">
            <div className="media-card reveal scene-expand">
              <video autoPlay muted loop playsInline style={{ transform: 'scale(1.08)' }}>
                <source src={videos[1]} type="video/mp4" />
              </video>
              <div className="media-caption">
                <h4>Seedance cinematic generation</h4>
                <p>Create dynamic scenes with motion consistency, storytelling flow, and synchronized visual-audio output.</p>
              </div>
            </div>

            <div style={{ display: 'grid', gap: 18 }}>
              <div className="media-card small reveal zoom-reveal">
                <video autoPlay muted loop playsInline style={{ transform: 'scale(1.08)' }}>
                  <source src={videos[2]} type="video/mp4" />
                </video>
                <div className="media-caption">
                  <h4>Audio-visual sync</h4>
                  <p>Generate cohesive scenes with audio and lip-sync aligned for multilingual content delivery.</p>
                </div>
              </div>

              <div className="media-card small reveal zoom-reveal">
                <video autoPlay muted loop playsInline style={{ transform: 'scale(1.08)' }}>
                  <source src={videos[3]} type="video/mp4" />
                </video>
                <div className="media-caption">
                  <h4>Text-to-image workflow</h4>
                  <p>Produce design-ready visuals with refined prompt adherence, structure control, and composition fidelity.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section light" id="pricing">
        <div className="container">
          <div className="section-head reveal">
            <h2>Pricing overview</h2>
            <p>Get a quick view of what each solution includes. Connect with Techjockey for the latest pricing guidance, deployment options, and demo support.</p>
          </div>

          <div className="pricing-grid">
            {pricing.map((plan, idx) => (
              <div key={plan.name} className={`pricing-card reveal ${idx === 1 ? 'highlight' : ''}`}>
                <h3>{plan.name}</h3>
                <div className="price-row">
                  <div className="price">{plan.price || 'Custom Pricing'}</div>
                </div>
                <div className="includes">
                  {plan.includes.map((item) => (
                    <div className="inc-item" key={item}>
                      <FeatureIcon />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <a href="#demo" className="animated-cta">
                  Request Pricing Details
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft">
        <div className="container">
          <div className="section-head center reveal">
            <h2>What users are saying</h2>
            <p>Real feedback from creative and marketing professionals exploring AI-powered visual production with Techjockey.</p>
          </div>

          <div className="testimonials-grid">
            {testimonials.slice(0, 3).map((item, idx) => (
              <div key={item.author} className={`testimonial-card reveal ${activeSlide % 3 === idx ? 'active' : ''}`}>
                <p>“{item.quote}”</p>
                <div className="testimonial-meta">
                  <div className="avatar">{initials(item.author)}</div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#111827' }}>{item.author}</div>
                    <div style={{ color: '#6b7280', fontSize: 14 }}>{item.role}</div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light">
        <div className="container">
          <div className="section-head reveal">
            <h2>Frequently asked questions</h2>
            <p>Answers to common questions before requesting a demo for Seedream 4.5 and Seedance 1.5 Pro.</p>
          </div>

          <div className="faq-grid">
            <div className="faq-card reveal">
              <h4>What is Seedream 4.5 mainly used for?</h4>
              <p>Seedream 4.5 is built for high-quality AI image generation, image editing, multi-image composition, and visually accurate prompt-based design creation.</p>
            </div>
            <div className="faq-card reveal">
              <h4>What makes Seedance 1.5 Pro different?</h4>
              <p>Seedance 1.5 Pro focuses on native audio-visual generation, synchronized video and sound creation, multilingual lip-sync, and cinematic control for video storytelling.</p>
            </div>
            <div className="faq-card reveal">
              <h4>Can I request a free demo through Techjockey?</h4>
              <p>Yes. You can submit the form on this page and Techjockey will help arrange a free demo based on your requirements.</p>
            </div>
            <div className="faq-card reveal">
              <h4>Who should evaluate these solutions?</h4>
              <p>Creative teams, agencies, marketing departments, media studios, and businesses producing branded visuals or video content can benefit from these models.</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <div style={{ fontWeight: 800, color: '#111827', marginBottom: 6 }}>{productName}</div>
            <div style={{ color: '#6b7280', fontSize: 14 }}>Explore, compare, and book your free demo with Techjockey.</div>
          </div>
          <a href="#demo" className="animated-cta">
            Talk to an Expert
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;