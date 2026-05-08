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
    .hero{position:relative;min-height:100vh;padding:34px 0 80px;display:flex;align-items:center;isolation:isolate;background:
      radial-gradient(circle at 8% 10%, rgba(179,113,63,.16), transparent 28%),
      radial-gradient(circle at 88% 18%, rgba(179,113,63,.13), transparent 24%),
      linear-gradient(180deg,#fffaf5 0%,#ffffff 48%,#faf7f3 100%)}
    .hero::before{content:"";position:absolute;inset:0;background:
      linear-gradient(90deg, rgba(255,250,245,.95) 0%, rgba(255,250,245,.90) 22%, rgba(255,255,255,.74) 50%, rgba(255,255,255,.88) 100%);z-index:1}
    .hero-video-bg{position:absolute;inset:0;overflow:hidden;z-index:0;pointer-events:none}
    .hero-video-bg video{width:100%;height:100%;object-fit:cover;opacity:.22;filter:saturate(1.02) contrast(1.02)}
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
    .form-card{width:100%;max-width:460px;padding:28px;border-radius:24px;background:rgba(255,255,255,.93);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(17,24,39,.08);box-shadow:0 22px 60px rgba(17,24,39,.12)}
    .form-card h3{font-family:'Plus Jakarta Sans',sans-serif;color:#111827;font-size:28px;margin:0 0 8px}
    .form-card p{color:#6b7280;font-size:14px;margin:0 0 20px}
    .field-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .field{display:flex;flex-direction:column;gap:8px}
    .field label{color:#374151;font-size:13px;font-weight:600}
    .field input{width:100%;height:48px;border-radius:12px;border:1px solid #e5e7eb;background:#fff;padding:0 14px;color:#111827;outline:none;transition:.2s}
    .field input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(179,113,63,.14)}
    .full{grid-column:1/-1}
    .hero-trust{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:18px}
    .hero-trust-card{padding:14px 16px;border-radius:16px;background:rgba(255,255,255,.78);backdrop-filter:blur(10px);border:1px solid rgba(179,113,63,.14);box-shadow:0 10px 22px rgba(17,24,39,.05)}
    .hero-trust-card strong{display:block;font-size:14px;color:#111827;margin-bottom:4px}
    .hero-trust-card span{display:block;font-size:12px;line-height:1.5;color:#6b7280}
    .section-head{max-width:760px;margin-bottom:28px}
    .section-head.center{text-align:center;margin-left:auto;margin-right:auto}
    .section-head h2{font-family:'Plus Jakarta Sans',sans-serif;font-size:40px;line-height:1.1;margin:0 0 14px;color:#111827}
    .section-head p{font-size:17px;line-height:1.75;color:#6b7280;margin:0}
    .dark .section-head h2{color:#fff}
    .dark .section-head p{color:#d1d5db}
    .metrics-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
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
    .thumb-lines span:nth-child(3){width:56%}
    .mini-lines span:nth-child(1){width:92%}
    .mini-lines span:nth-child(2){width:70%}
    .mini-lines span:nth-child(3){width:52%}
    .side-stack{display:grid;gap:14px}
    .product-copy{padding-top:22px}
    .product-copy h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;margin:0 0 10px;color:#111827}
    .product-copy p{margin:0 0 22px;color:#6b7280;line-height:1.75}
    .feature-list{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .feature-item{display:flex;gap:12px;padding:16px;border-radius:16px;background:#fffaf5;border:1px solid #efe1d4}
    .feature-item h4{margin:0 0 6px;font-size:15px;color:#111827}
    .feature-item p{margin:0;color:#6b7280;font-size:14px;line-height:1.6}
    .split-layout{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:stretch}
    .media-stage{position:relative;min-height:430px;border-radius:24px;overflow:hidden;background:#111}
    .media-stage video{width:100%;height:100%;object-fit:cover}
    .media-overlay{position:absolute;inset:auto 18px 18px 18px;padding:18px;border-radius:18px;background:rgba(17,24,39,.62);backdrop-filter:blur(12px);color:#fff;border:1px solid rgba(255,255,255,.12)}
    .media-overlay h3{margin:0 0 8px;font-size:20px}
    .media-overlay p{margin:0;color:rgba(255,255,255,.8);line-height:1.65;font-size:14px}
    .process-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
    .process-card{padding:24px;border-radius:22px;background:#fff;border:1px solid #eadfd4;box-shadow:0 12px 28px rgba(17,24,39,.05)}
    .process-card .num{width:40px;height:40px;border-radius:12px;background:rgba(179,113,63,.12);color:#8b5b34;display:flex;align-items:center;justify-content:center;font-weight:800;margin-bottom:14px}
    .process-card h3{margin:0 0 8px;font-size:18px;color:#111827}
    .process-card p{margin:0;color:#6b7280;line-height:1.65;font-size:14px}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
    .pricing-card{position:relative;padding:28px;border-radius:24px;background:#fff;border:1px solid #eadfd4;box-shadow:0 16px 38px rgba(17,24,39,.06);display:flex;flex-direction:column}
    .pricing-card.featured{border-color:rgba(179,113,63,.36);box-shadow:0 20px 44px rgba(179,113,63,.12)}
    .pricing-badge{position:absolute;top:16px;right:16px;padding:8px 12px;border-radius:999px;background:rgba(179,113,63,.1);color:#8b5b34;font-size:12px;font-weight:700}
    .pricing-card h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;margin:0 0 10px;color:#111827;padding-right:100px}
    .price-line{font-family:'Plus Jakarta Sans',sans-serif;font-size:34px;font-weight:800;color:#111827;margin-bottom:16px}
    .price-line small{font-size:14px;font-weight:600;color:#6b7280}
    .includes{display:grid;gap:12px;margin:0 0 24px;padding:0;list-style:none}
    .includes li{display:flex;gap:10px;align-items:flex-start;color:#4b5563;font-size:14px;line-height:1.65}
    .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .testimonial-card{padding:24px;border-radius:22px;background:#fff;border:1px solid #eadfd4;box-shadow:0 12px 28px rgba(17,24,39,.05)}
    .testimonial-card.active{border-color:rgba(179,113,63,.35);box-shadow:0 18px 36px rgba(179,113,63,.11)}
    .quote-mark{font-size:40px;line-height:1;color:var(--accent);margin-bottom:12px}
    .testimonial-card p{margin:0 0 18px;color:#4b5563;line-height:1.75}
    .author-row{display:flex;align-items:center;gap:12px}
    .avatar{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, rgba(179,113,63,.18), rgba(179,113,63,.06));color:#8b5b34;font-weight:800}
    .author-row strong{display:block;font-size:14px;color:#111827}
    .author-row span{display:block;font-size:13px;color:#6b7280}
    .cta-band{padding:34px;border-radius:28px;background:linear-gradient(135deg,#fff7ef 0%,#ffffff 100%);border:1px solid #eadfd4;box-shadow:0 16px 42px rgba(17,24,39,.06);display:grid;grid-template-columns:1.2fr .8fr;gap:22px;align-items:center}
    .cta-band h2{font-family:'Plus Jakarta Sans',sans-serif;font-size:36px;line-height:1.08;margin:0 0 10px;color:#111827}
    .cta-band p{margin:0;color:#6b7280;line-height:1.75}
    .cta-actions{display:flex;justify-content:flex-end;gap:14px;flex-wrap:wrap}
    .footer{padding:34px 0;background:#111827;color:#d1d5db}
    .footer-inner{display:flex;justify-content:space-between;gap:16px;align-items:center;flex-wrap:wrap}
    .cursor-glow{position:fixed;top:0;left:0;width:240px;height:240px;border-radius:50%;pointer-events:none;background:radial-gradient(circle, rgba(179,113,63,.16) 0%, rgba(179,113,63,.08) 35%, transparent 72%);transform:translate(-50%,-50%);z-index:9999;filter:blur(10px)}
    .hide-mobile{display:block}
    @media (max-width: 1080px){
      .hero-wrap,.tabs-shell,.split-layout,.cta-band,.dashboard-visual{grid-template-columns:1fr}
      .hero{min-height:auto;padding:28px 0 72px}
      .hero-visual{min-height:auto}
      .hero-trust{grid-template-columns:1fr}
      .metrics-grid,.process-grid,.testimonial-grid,.pricing-grid{grid-template-columns:1fr 1fr}
      .feature-list{grid-template-columns:1fr}
      .cta-actions{justify-content:flex-start}
    }
    @media (max-width: 768px){
      .nav-inner{grid-template-columns:1fr}
      .hero h1{font-size:54px}
      .section{padding:68px 0}
      .section-head h2{font-size:32px}
      .metrics-grid,.process-grid,.testimonial-grid,.pricing-grid,.field-grid{grid-template-columns:1fr}
      .visual-grid{grid-template-columns:1fr}
      .brand-text{font-size:18px}
      .hero::before{background:linear-gradient(180deg, rgba(255,250,245,.94) 0%, rgba(255,255,255,.92) 40%, rgba(255,255,255,.94) 100%)}
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="page">
        <nav className="nav">
          <div className="container nav-inner">
            <div className="brand-text">Techjockey</div>
            <div className="tj-wrap">
              <span style={{ fontWeight: 700, color: '#374151', textAlign: 'center' }}>{productName}</span>
            </div>
            <a href="#demo-form" className="animated-cta btn-magnetic">
              Get Free Demo
            </a>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline>
              <source src={videos[1]} type="video/mp4" />
            </video>
          </div>
          <div className="container hero-wrap">
            <div className="hero-cinematic-bg" />
            <div className="hero-left reveal">
              <div className="eyebrow">AI Image & Video Generation for Creative Teams</div>
              <h1>
                Create high-fidelity visuals and cinematic videos with <span className="gradient-text">Seedream 4.5</span> and{' '}
                <span className="gradient-text">Seedance 1.5 Pro</span>
              </h1>
              <p>
                Explore ByteDance’s advanced generative AI models for image creation, multimodal editing, text-to-video generation, and synchronized
                audio-visual storytelling. Book a free demo with Techjockey to evaluate the right fit for your team.
              </p>

              <div className="chips">
                <div className="chip">
                  <FeatureIcon />
                  4K-quality image generation
                </div>
                <div className="chip">
                  <FeatureIcon />
                  Native audio + video generation
                </div>
                <div className="chip">
                  <FeatureIcon />
                  Multimodal editing & composition
                </div>
                <div className="chip">
                  <FeatureIcon />
                  Faster creative turnaround
                </div>
              </div>

              <div className="hero-actions">
                <a href="#demo-form" className="animated-cta btn-magnetic">
                  Book Free Demo
                </a>
                <a href="#pricing" className="ghost-btn">
                  View Pricing
                </a>
              </div>

              <div className="hero-trust reveal">
                <div className="hero-trust-card">
                  <strong>For design teams</strong>
                  <span>Generate posters, ads, concept art, and high-detail campaign creatives.</span>
                </div>
                <div className="hero-trust-card">
                  <strong>For video teams</strong>
                  <span>Create cinematic videos with synchronized audio and multilingual lip-sync.</span>
                </div>
                <div className="hero-trust-card">
                  <strong>For evaluation</strong>
                  <span>Compare use cases and capabilities with a guided Techjockey demo.</span>
                </div>
              </div>
            </div>

            <div className="hero-visual reveal" id="demo-form">
              <div className="form-card">
                <h3>Request a Free Demo</h3>
                <p>Connect with our product experts to explore Seedream 4.5 and Seedance 1.5 Pro for your business use case.</p>
                <form onSubmit={handleSubmit}>
                  <div className="field-grid">
                    <div className="field">
                      <label htmlFor="name">Full Name</label>
                      <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Work Email</label>
                      <input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone Number</label>
                      <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" />
                    </div>
                    <div className="field">
                      <label htmlFor="company">Company Name</label>
                      <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Enter your company" />
                    </div>
                    <div className="full">
                      <button type="submit" className="animated-cta btn-magnetic" style={{ width: '100%', height: 52 }}>
                        Get Started
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="section warm">
          <div className="container">
            <div className="section-head center reveal">
              <h2>Why teams evaluate Seedream and Seedance</h2>
              <p>
                Built for modern creative workflows, these AI models help teams accelerate ideation, design iteration, and video production while
                preserving quality and storytelling depth.
              </p>
            </div>
            <div className="metrics-grid stagger-parent">
              <div className="metric-card reveal">
                <div className="metric-value" data-count="4" data-suffix="K">
                  0
                </div>
                <h3>High-resolution image output</h3>
                <p>Generate native images up to 1K–4K resolution with strong detail retention and visual fidelity.</p>
              </div>
              <div className="metric-card reveal">
                <div className="metric-value" data-count="10" data-suffix="×">
                  0
                </div>
                <h3>Faster inference pipeline</h3>
                <p>Reduce production delays with optimized generation speed for videos and creative experimentation.</p>
              </div>
              <div className="metric-card reveal">
                <div className="metric-value" data-count="2" data-suffix="+">
                  0
                </div>
                <h3>Multimodal workflows</h3>
                <p>Support text-to-image, image editing, multi-image composition, and text-to-video generation in one evaluation cycle.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <div className="section-head reveal">
              <h2>Explore both products in one place</h2>
              <p>Switch between Seedream 4.5 and Seedance 1.5 Pro to understand their core capabilities, ideal use cases, and feature depth.</p>
            </div>

            <div className="tabs-shell">
              <div className="tabs-nav reveal">
                {products.map((product, index) => (
                  <button key={product.name} className={`tab-btn ${activeProductTab === index ? 'active' : ''}`} onClick={() => setActiveProductTab(index)}>
                    <h3>{product.name}</h3>
                    <p>{product.headline}</p>
                  </button>
                ))}
              </div>

              <div className="preview-panel reveal">
                <div className="dashboard-visual">
                  <div className="visual-grid">
                    <div className="thumb-card">
                      <strong>{products[activeProductTab].name === 'Seedream 4.5' ? 'Prompt-to-Visual Engine' : 'Prompt-to-Scene Engine'}</strong>
                      <div className="thumb-lines">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                    <div className="stat-card">
                      <strong>{products[activeProductTab].name === 'Seedream 4.5' ? 'Typography & Layout' : 'Audio-Visual Sync'}</strong>
                      <div className="mini-lines">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                    <div className="timeline-card">
                      <strong>{products[activeProductTab].name === 'Seedream 4.5' ? 'Image Editing Flow' : 'Narrative Motion Flow'}</strong>
                      <div className="mini-lines">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                    <div className="control-card">
                      <strong>{products[activeProductTab].name === 'Seedream 4.5' ? 'Identity Preservation' : 'Cinematic Camera Control'}</strong>
                      <div className="mini-lines">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>

                  <div className="side-stack">
                    <div className="stat-card">
                      <strong>{products[activeProductTab].name}</strong>
                      <p style={{ margin: 0, color: '#6b7280', lineHeight: 1.7, fontSize: 14 }}>{products[activeProductTab].headline}</p>
                    </div>
                    <div className="thumb-card" style={{ minHeight: 170 }}>
                      <strong>{products[activeProductTab].name === 'Seedream 4.5' ? 'Creative Output Focus' : 'Production Output Focus'}</strong>
                      <div className="thumb-lines">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="product-copy">
                  <h3>{products[activeProductTab].headline}</h3>
                  <p>{products[activeProductTab].description}</p>
                  <div className="feature-list">
                    {products[activeProductTab].features.map((feature) => (
                      <div className="feature-item" key={feature.title}>
                        <div style={{ marginTop: 2 }}>
                          <FeatureIcon />
                        </div>
                        <div>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="split-layout">
              <div className="media-stage reveal clip-reveal">
                <video autoPlay muted loop playsInline>
                  <source src={videos[0]} type="video/mp4" />
                </video>
                <div className="media-overlay">
                  <h3>Seedream 4.5 for high-fidelity image generation</h3>
                  <p>Turn text prompts and visual references into detailed images while preserving structure, style, and subject identity.</p>
                </div>
              </div>
              <div className="media-stage reveal clip-reveal">
                <video autoPlay muted loop playsInline>
                  <source src={videos[2]} type="video/mp4" />
                </video>
                <div className="media-overlay">
                  <h3>Seedance 1.5 Pro for synchronized video storytelling</h3>
                  <p>Generate audio and video together with realistic motion, multilingual lip-sync, and cinematic camera movement.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section warm">
          <div className="container">
            <div className="section-head center reveal">
              <h2>How the evaluation process works</h2>
              <p>Book a guided consultation and understand which product, workflow, and plan best fits your image or video generation requirements.</p>
            </div>
            <div className="process-grid stagger-parent">
              <div className="process-card reveal">
                <div className="num">01</div>
                <h3>Share your use case</h3>
                <p>Tell us whether your team needs high-resolution creative images, AI video generation, or both.</p>
              </div>
              <div className="process-card reveal">
                <div className="num">02</div>
                <h3>Get a guided demo</h3>
                <p>See key features such as text-to-image, multimodal editing, audio-visual sync, and cinematic generation in action.</p>
              </div>
              <div className="process-card reveal">
                <div className="num">03</div>
                <h3>Compare capabilities</h3>
                <p>Evaluate output quality, workflow speed, and fit for design teams, content teams, or production teams.</p>
              </div>
              <div className="process-card reveal">
                <div className="num">04</div>
                <h3>Choose the right plan</h3>
                <p>Finalize the product and pricing path with help from Techjockey’s product advisory team.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section light" id="pricing">
          <div className="container">
            <div className="section-head center reveal">
              <h2>Pricing and plan highlights</h2>
              <p>Review plan inclusions for both products and connect with our team for a tailored recommendation based on your workflow.</p>
            </div>
            <div className="pricing-grid">
              {pricing.map((plan, idx) => (
                <div key={plan.name} className={`pricing-card reveal ${idx === 1 ? 'featured' : ''}`}>
                  {idx === 1 && <div className="pricing-badge">Popular for video teams</div>}
                  <h3>{plan.name}</h3>
                  <div className="price-line">{plan.price || 'Custom pricing'} {!plan.price && <small>Contact us for quote</small>}</div>
                  <ul className="includes">
                    {plan.includes.map((item) => (
                      <li key={item}>
                        <FeatureIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <a href="#demo-form" className="animated-cta btn-magnetic" style={{ marginTop: 'auto' }}>
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
              <h2>What users say about the evaluation experience</h2>
              <p>Real feedback from professionals exploring Seedream and Seedance through Techjockey’s guided demo and consultation process.</p>
            </div>
            <div className="testimonial-grid">
              {testimonials.slice(0, 3).map((item, index) => (
                <div key={item.author} className={`testimonial-card reveal ${activeSlide % 3 === index ? 'active' : ''}`}>
                  <div className="quote-mark">“</div>
                  <p>{item.quote}</p>
                  <div className="author-row">
                    <div className="avatar">{initials(item.author)}</div>
                    <div>
                      <strong>{item.author}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <div className="cta-band reveal">
              <div>
                <h2>Ready to explore Seedream 4.5 and Seedance 1.5 Pro?</h2>
                <p>Book your free Techjockey demo to assess image generation, multimodal editing, and cinematic AI video creation for your team.</p>
              </div>
              <div className="cta-actions">
                <a href="#demo-form" className="animated-cta btn-magnetic">
                  Book Free Demo
                </a>
                <a href="#pricing" className="ghost-btn">
                  Check Pricing
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <div>© 2026 Techjockey. All rights reserved.</div>
            <div>{productName}</div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;