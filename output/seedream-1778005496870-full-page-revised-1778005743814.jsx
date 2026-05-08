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
    .hero{background:
      radial-gradient(circle at 8% 10%, rgba(179,113,63,.16), transparent 28%),
      radial-gradient(circle at 88% 18%, rgba(179,113,63,.13), transparent 24%),
      linear-gradient(180deg,#fffaf5 0%,#ffffff 48%,#faf7f3 100%);
      min-height:100vh;padding:34px 0 80px;display:flex;align-items:center}
    .hero-wrap{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center;position:relative}
    .hero-cinematic-bg{position:absolute;inset:-60px -20px auto auto;width:460px;height:460px;border-radius:50%;background:radial-gradient(circle, rgba(179,113,63,.18) 0%, rgba(179,113,63,.06) 36%, transparent 72%);filter:blur(8px);transform:scale(.9)}
    .hero-left{position:relative;z-index:2}
    .eyebrow{display:inline-flex;align-items:center;gap:10px;padding:8px 14px;border-radius:999px;background:rgba(179,113,63,.10);border:1px solid rgba(179,113,63,.25);color:#8b5b34;font-size:13px;margin-bottom:18px;font-weight:600}
    .hero h1{font-family:'Plus Jakarta Sans',sans-serif;font-size:54px;line-height:1.02;letter-spacing:-.04em;margin:0 0 16px;color:#111827;max-width:760px}
    .hero p{font-size:18px;line-height:1.75;color:#4b5563;max-width:760px;margin:0}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 28px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(179,113,63,.22);background:#fff;color:#374151;font-size:13px;box-shadow:0 8px 20px rgba(17,24,39,.05)}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{position:relative;z-index:2;min-height:500px;display:flex;align-items:center;justify-content:center}
    .form-card{width:100%;max-width:460px;padding:28px;border-radius:24px;background:rgba(255,255,255,.92);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(17,24,39,.08);box-shadow:0 22px 60px rgba(17,24,39,.12)}
    .form-card h3{font-family:'Plus Jakarta Sans',sans-serif;color:#111827;font-size:28px;margin:0 0 8px}
    .form-card p{color:#6b7280;font-size:14px;margin:0 0 20px}
    .field-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .field{display:flex;flex-direction:column;gap:8px}
    .field label{color:#374151;font-size:13px;font-weight:600}
    .field input{width:100%;height:48px;border-radius:12px;border:1px solid #e5e7eb;background:#fff;padding:0 14px;color:#111827;outline:none;transition:.2s}
    .field input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(179,113,63,.14)}
    .full{grid-column:1/-1}
    .hero-media-shell{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:18px}
    .mini-video-card{border-radius:18px;overflow:hidden;box-shadow:0 18px 40px rgba(17,24,39,.14);border:1px solid rgba(17,24,39,.08);background:#fff}
    .mini-video-card video{width:100%;height:170px;object-fit:cover}
    .mini-video-card .label{padding:12px 14px;font-size:13px;font-weight:700;color:#374151;background:#fff}
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
    .thumb-lines span:nth-child(2){width:78%}.thumb-lines span:nth-child(3){width:56%}
    .mini-lines span:nth-child(1){width:100%}.mini-lines span:nth-child(2){width:84%}.mini-lines span:nth-child(3){width:62%}
    .visual-side{display:grid;gap:14px}
    .split-panel{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center}
    .copy-panel{padding:6px 0}
    .copy-panel .tag{display:inline-flex;padding:8px 14px;border-radius:999px;background:rgba(179,113,63,.1);color:var(--accent);border:1px solid rgba(179,113,63,.25);font-size:13px;margin-bottom:14px}
    .copy-panel h2{font-family:'Plus Jakarta Sans',sans-serif;font-size:38px;line-height:1.12;margin:0 0 14px}
    .desc-box{padding-left:18px;border-left:2px solid rgba(179,113,63,.32);margin-bottom:22px}
    .copy-panel p{font-size:17px;line-height:1.75;color:inherit;opacity:.88;margin:0}
    .feature-list{display:grid;gap:12px}
    .feature-item{display:flex;gap:12px;padding:16px;border-radius:16px;background:rgba(255,255,255,.72);border:1px solid rgba(17,24,39,.08)}
    .light .feature-item,.soft .feature-item,.warm .feature-item{background:#fff;border-color:#e8ded5}
    .feature-item h4{font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;margin:0 0 6px}
    .feature-item p{margin:0;color:#6b7280;font-size:14px;line-height:1.6}
    .media-card{position:relative;border-radius:24px;overflow:hidden;box-shadow:0 24px 60px rgba(17,24,39,.12);border:1px solid rgba(17,24,39,.08);background:#fff}
    .media-card video,.media-card img{width:100%;height:100%;object-fit:cover}
    .media-card.tall{height:520px}
    .media-grid-2{display:grid;grid-template-columns:1fr 1fr;gap:16px}
    .media-grid-2 .media-card{height:250px}
    .floating-badge{position:absolute;left:18px;bottom:18px;background:rgba(255,255,255,.92);border:1px solid rgba(17,24,39,.08);padding:10px 14px;border-radius:999px;font-size:13px;font-weight:700;color:#111827;box-shadow:0 10px 30px rgba(17,24,39,.10)}
    .process-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .process-card{padding:24px;border-radius:22px;background:#fff;border:1px solid #eadfd4;box-shadow:0 16px 34px rgba(17,24,39,.06)}
    .process-number{width:42px;height:42px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#fff2e6;color:var(--accent);font-weight:800;margin-bottom:16px;border:1px solid rgba(179,113,63,.18)}
    .process-card h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;margin:0 0 10px}
    .process-card p{margin:0;color:#6b7280;line-height:1.7}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
    .price-card{position:relative;padding:28px;border-radius:24px;background:#fff;border:1px solid #eadfd4;box-shadow:0 16px 36px rgba(17,24,39,.07)}
    .price-card.featured{background:linear-gradient(180deg,#fffaf4 0%,#ffffff 100%);border-color:rgba(179,113,63,.36);box-shadow:0 18px 42px rgba(179,113,63,.12)}
    .price-badge{position:absolute;top:18px;right:18px;padding:8px 12px;border-radius:999px;background:#fff2e6;color:var(--accent);font-size:12px;font-weight:800;border:1px solid rgba(179,113,63,.18)}
    .price-card h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;line-height:1.25;margin:0 0 12px}
    .price-value{font-family:'Plus Jakarta Sans',sans-serif;font-size:34px;font-weight:800;color:#111827;margin:0 0 18px}
    .price-sub{font-size:14px;color:#6b7280;margin:-10px 0 18px}
    .inc-list{display:grid;gap:12px;margin:0 0 22px}
    .inc-item{display:flex;gap:12px;align-items:flex-start;color:#374151;font-size:15px;line-height:1.6}
    .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .testimonial-card{padding:24px;border-radius:22px;background:#fff;border:1px solid #eadfd4;box-shadow:0 14px 30px rgba(17,24,39,.06)}
    .stars{display:flex;gap:4px;margin-bottom:14px;color:#f59e0b}
    .testimonial-card p{font-size:15px;line-height:1.75;color:#4b5563;margin:0 0 18px}
    .author-row{display:flex;align-items:center;gap:12px}
    .avatar{width:44px;height:44px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:#fff2e6;color:var(--accent);font-weight:800;border:1px solid rgba(179,113,63,.18)}
    .author-row strong{display:block;font-size:15px}
    .author-row span{display:block;font-size:13px;color:#6b7280}
    .cta-band{padding:34px;border-radius:28px;background:linear-gradient(135deg,#fff7ef 0%,#ffffff 60%,#f6ede5 100%);border:1px solid #eadfd4;display:grid;grid-template-columns:1.15fr .85fr;gap:24px;align-items:center;box-shadow:0 18px 40px rgba(17,24,39,.06)}
    .cta-band h2{font-family:'Plus Jakarta Sans',sans-serif;font-size:40px;line-height:1.08;margin:0 0 12px}
    .cta-band p{margin:0;color:#6b7280;line-height:1.75;font-size:17px}
    .cta-panel{display:flex;justify-content:flex-end;align-items:center;gap:14px;flex-wrap:wrap}
    .footer{padding:32px 0 44px;background:#111827;color:#e5e7eb}
    .footer-inner{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;align-items:center}
    .footer small{color:#9ca3af}
    .clip-reveal{clip-path:inset(12% 12% 12% 12% round 24px)}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.12)}
    .cursor-glow{position:fixed;top:-120px;left:-120px;width:240px;height:240px;border-radius:50%;pointer-events:none;background:radial-gradient(circle, rgba(179,113,63,.10) 0%, rgba(179,113,63,.04) 35%, rgba(179,113,63,0) 70%);filter:blur(18px);z-index:2}
    @media (max-width: 1080px){
      .hero-wrap,.split-panel,.cta-band,.tabs-shell{grid-template-columns:1fr}
      .hero{padding:24px 0 72px}
      .hero-visual{min-height:auto}
      .metrics-strip,.process-grid,.testimonial-grid,.pricing-grid{grid-template-columns:1fr 1fr}
      .hero-media-shell{grid-template-columns:1fr}
      .cta-panel{justify-content:flex-start}
    }
    @media (max-width: 767px){
      .section{padding:66px 0}
      .nav-inner{grid-template-columns:1fr}
      .brand-text{text-align:center}
      .tj-wrap,.nav-inner > a{justify-self:center}
      .hero h1{font-size:54px}
      .section-head h2,.copy-panel h2,.cta-band h2{font-size:32px}
      .field-grid,.metrics-strip,.process-grid,.testimonial-grid,.pricing-grid,.media-grid-2{grid-template-columns:1fr}
      .dashboard-visual{grid-template-columns:1fr;min-height:auto}
      .media-card.tall{height:360px}
      .media-grid-2 .media-card{height:220px}
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="page">
        <nav className="nav">
          <div className="container nav-inner">
            <div className="brand-text">{productName}</div>
            <div className="tj-wrap">
              <img
                src="https://static.techjockey.com/web-assets/images/techjockey-logo.svg"
                alt="Techjockey"
                style={{ height: 28 }}
              />
            </div>
            <a href="#demo" className="animated-cta btn-magnetic">
              Book Free Demo
            </a>
          </div>
        </nav>

        <section className="hero">
          <div className="container hero-wrap">
            <div className="hero-cinematic-bg" />
            <div className="hero-left reveal">
              <div className="eyebrow">AI Image + Video Generation for modern creative teams</div>
              <h1>
                Create production-ready visuals with <span className="gradient-text">Seedream 4.5</span> and{' '}
                <span className="gradient-text">Seedance 1.5 Pro</span>
              </h1>
              <p>
                Generate high-resolution images, edit with multimodal inputs, and produce cinematic videos with
                synchronized audio. Explore ByteDance’s latest generative AI models with expert guidance from Techjockey.
              </p>

              <div className="chips">
                <div className="chip">
                  <FeatureIcon />
                  4K-quality image generation
                </div>
                <div className="chip">
                  <FeatureIcon />
                  Native audio-visual output
                </div>
                <div className="chip">
                  <FeatureIcon />
                  Multimodal editing workflows
                </div>
                <div className="chip">
                  <FeatureIcon />
                  Faster creative turnaround
                </div>
              </div>

              <div className="hero-actions">
                <a href="#demo" className="animated-cta btn-magnetic">
                  Get Free Demo
                </a>
                <a href="#products" className="ghost-btn">
                  Explore Capabilities
                </a>
              </div>

              <div className="hero-media-shell reveal">
                <div className="mini-video-card zoom-reveal">
                  <video src={videos[1]} autoPlay muted loop playsInline />
                  <div className="label">Seedance cinematic output</div>
                </div>
                <div className="mini-video-card zoom-reveal">
                  <video src={videos[3]} autoPlay muted loop playsInline />
                  <div className="label">Seedream creative generation</div>
                </div>
              </div>
            </div>

            <div className="hero-visual reveal" id="demo">
              <div className="form-card">
                <h3>Talk to an Expert</h3>
                <p>See how Seedream and Seedance can fit your creative workflow.</p>
                <form onSubmit={handleSubmit}>
                  <div className="field-grid">
                    <div className="field">
                      <label>Name</label>
                      <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                    </div>
                    <div className="field">
                      <label>Phone</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" />
                    </div>
                    <div className="field">
                      <label>Company</label>
                      <input
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enter company name"
                      />
                    </div>
                    <div className="full">
                      <button type="submit" className="animated-cta btn-magnetic" style={{ width: '100%' }}>
                        Request Free Demo
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
            <div className="metrics-strip">
              <div className="metric-card reveal">
                <div className="metric-value" data-count="4" data-suffix="K+">
                  0
                </div>
                <h3>High-resolution creativity</h3>
                <p>Generate native images up to 1K–4K resolution with high visual fidelity for production use.</p>
              </div>
              <div className="metric-card reveal">
                <div className="metric-value" data-count="10" data-suffix="x">
                  0
                </div>
                <h3>Faster video generation</h3>
                <p>Accelerate content output with optimized inference designed for quicker creative workflows.</p>
              </div>
              <div className="metric-card reveal">
                <div className="metric-value" data-count="2" data-suffix=" AI Models">
                  0
                </div>
                <h3>One unified evaluation journey</h3>
                <p>Assess advanced image and video generation solutions together with guidance from Techjockey.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section light" id="products">
          <div className="container">
            <div className="section-head center reveal">
              <h2>Explore both products in one place</h2>
              <p>
                Compare the strengths of Seedream 4.5 and Seedance 1.5 Pro, then schedule a guided demo to evaluate the
                right fit for your team.
              </p>
            </div>

            <div className="tabs-shell">
              <div className="tabs-nav reveal">
                {products.map((product, index) => (
                  <button
                    key={product.name}
                    className={`tab-btn ${activeProductTab === index ? 'active' : ''}`}
                    onClick={() => setActiveProductTab(index)}
                  >
                    <h3>{product.name}</h3>
                    <p>{product.headline}</p>
                  </button>
                ))}
              </div>

              <div className="preview-panel reveal">
                <div className="split-panel">
                  <div className="copy-panel">
                    <span className="tag">{products[activeProductTab].name}</span>
                    <h2>{products[activeProductTab].headline}</h2>
                    <div className="desc-box">
                      <p>{products[activeProductTab].description}</p>
                    </div>
                    <div className="feature-list stagger-parent">
                      {products[activeProductTab].features.map((feature, idx) => (
                        <div className="feature-item" key={idx} style={{ opacity: 0, transform: 'translateY(16px)' }}>
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

                  <div className="dashboard-visual zoom-reveal">
                    <div className="visual-grid">
                      <div className="thumb-card">
                        <strong>Prompt to output</strong>
                        <div className="thumb-lines">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                      <div className="thumb-card">
                        <strong>Multi-input workflow</strong>
                        <div className="thumb-lines">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                      <div className="thumb-card">
                        <strong>Design-ready quality</strong>
                        <div className="thumb-lines">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                      <div className="thumb-card">
                        <strong>Precise control</strong>
                        <div className="thumb-lines">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                    <div className="visual-side">
                      <div className="stat-card">
                        <strong>{activeProductTab === 0 ? 'Image Quality' : 'Video Coherence'}</strong>
                        <div style={{ fontSize: 32, fontWeight: 800, color: accent, marginBottom: 8 }}>
                          {activeProductTab === 0 ? '4K' : 'AV Sync'}
                        </div>
                        <div className="mini-lines">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                      <div className="timeline-card">
                        <strong>{activeProductTab === 0 ? 'Creative Composition' : 'Cinematic Motion'}</strong>
                        <div className="mini-lines">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                      <div className="control-card">
                        <strong>{activeProductTab === 0 ? 'Typography Support' : 'Lip-Sync Support'}</strong>
                        <div className="mini-lines">
                          <span />
                          <span />
                          <span />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head reveal">
              <h2>Built for visually rich marketing and content production</h2>
              <p>
                Make the page feel complete with actual visual blocks, not empty dark surfaces. These examples show how
                the models support image-led and video-led production journeys.
              </p>
            </div>

            <div className="split-panel">
              <div className="media-card tall clip-reveal reveal">
                <video src={videos[0]} autoPlay muted loop playsInline />
                <div className="floating-badge">AI-generated campaign visuals</div>
              </div>
              <div className="media-grid-2">
                <div className="media-card reveal zoom-reveal">
                  <video src={videos[1]} autoPlay muted loop playsInline />
                  <div className="floating-badge">Text-to-video</div>
                </div>
                <div className="media-card reveal zoom-reveal">
                  <video src={videos[2]} autoPlay muted loop playsInline />
                  <div className="floating-badge">Audio sync</div>
                </div>
                <div className="media-card reveal zoom-reveal">
                  <video src={videos[3]} autoPlay muted loop playsInline />
                  <div className="floating-badge">Text-to-image</div>
                </div>
                <div className="media-card reveal" style={{ padding: 24, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                  <span className="tag" style={{ display: 'inline-flex', width: 'fit-content', padding: '8px 14px', borderRadius: 999, background: 'rgba(179,113,63,.1)', color: accent, border: '1px solid rgba(179,113,63,.25)', fontSize: 13, marginBottom: 12 }}>
                    Creative outcomes
                  </span>
                  <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 28, lineHeight: 1.15, margin: '0 0 10px' }}>
                    From prompt ideation to final visual delivery
                  </h3>
                  <p style={{ color: '#6b7280', lineHeight: 1.75, margin: 0 }}>
                    Use Seedream for posters, branded visuals, and composition-heavy imagery. Use Seedance to turn
                    narratives into cinematic video with synchronized sound and multilingual lip-sync support.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <div className="section-head center reveal">
              <h2>How teams typically evaluate these tools</h2>
              <p>Move from discovery to demo quickly with a conversion-focused journey designed for business buyers.</p>
            </div>
            <div className="process-grid">
              <div className="process-card reveal">
                <div className="process-number">01</div>
                <h3>Share your use case</h3>
                <p>Tell us whether you need image generation, video generation, or both for your team and workflows.</p>
              </div>
              <div className="process-card reveal">
                <div className="process-number">02</div>
                <h3>Get a guided walkthrough</h3>
                <p>See the right model capabilities, pricing direction, and practical fit through a curated demo.</p>
              </div>
              <div className="process-card reveal">
                <div className="process-number">03</div>
                <h3>Make a confident decision</h3>
                <p>Compare features, understand output quality, and choose the best path with Techjockey assistance.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section warm">
          <div className="container">
            <div className="section-head center reveal">
              <h2>Pricing overview</h2>
              <p>Review what each product includes and speak with Techjockey for the latest plan details and fitment.</p>
            </div>

            <div className="pricing-grid">
              {pricing.map((plan, idx) => (
                <div key={plan.name} className={`price-card reveal ${idx === 1 ? 'featured' : ''}`}>
                  {idx === 1 && <div className="price-badge">Popular for video workflows</div>}
                  <h3>{plan.name}</h3>
                  <div className="price-value">{plan.price || 'Contact for pricing'}</div>
                  <div className="price-sub">
                    {plan.price ? 'Pricing may vary by usage and deployment requirements.' : 'Talk to our team for current pricing details.'}
                  </div>
                  <div className="inc-list">
                    {plan.includes.map((item, i) => (
                      <div className="inc-item" key={i}>
                        <FeatureIcon />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                  <a href="#demo" className="animated-cta btn-magnetic">
                    Get Pricing Details
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head center reveal">
              <h2>What professionals are saying</h2>
              <p>Visible, grid-based testimonials for trust building without overlap or unnecessary sliders.</p>
            </div>

            <div className="testimonial-grid">
              {testimonials.slice(0, 3).map((item, idx) => (
                <div className="testimonial-card reveal" key={idx}>
                  <div className="stars">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <p>“{item.quote}”</p>
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

            <div className="testimonial-grid" style={{ marginTop: 18 }}>
              {testimonials.slice(3, 5).map((item, idx) => (
                <div className="testimonial-card reveal" key={idx}>
                  <div className="stars">
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                    <span>★</span>
                  </div>
                  <p>“{item.quote}”</p>
                  <div className="author-row">
                    <div className="avatar">{initials(item.author)}</div>
                    <div>
                      <strong>{item.author}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
              <div className="testimonial-card reveal" style={{ display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 24, margin: '0 0 10px' }}>
                  Need help choosing the right model?
                </h3>
                <p style={{ marginBottom: 18 }}>
                  Techjockey can help you evaluate Seedream for image workflows and Seedance for video workflows based on
                  your business goals.
                </p>
                <a href="#demo" className="animated-cta btn-magnetic" style={{ width: 'fit-content' }}>
                  Speak to an Expert
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <div className="cta-band reveal">
              <div>
                <h2>See Seedream 4.5 and Seedance 1.5 Pro in action</h2>
                <p>
                  Book a free demo with Techjockey to understand capabilities, pricing direction, and the best fit for
                  your image or video generation needs.
                </p>
              </div>
              <div className="cta-panel">
                <a href="#demo" className="animated-cta btn-magnetic">
                  Book Free Demo
                </a>
                <a href="#products" className="ghost-btn">
                  Compare Features
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <div>
              <div style={{ fontWeight: 800, marginBottom: 6 }}>{productName}</div>
              <small>Discover, compare, and buy with confidence through Techjockey.</small>
            </div>
            <small>© 2026 Techjockey. All rights reserved.</small>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;