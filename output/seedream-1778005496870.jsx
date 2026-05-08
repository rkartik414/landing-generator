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
              gsap.from({ val: 0 }, {
                val: target,
                duration: 2,
                ease: 'power2.out',
                snap: { val: 1 },
                scrollTrigger: { trigger: el, start: 'top 80%', once: true },
                onUpdate: function () {
                  el.textContent = prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
                },
              });
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
    img{max-width:100%}
    .page{background:${bodyBg};overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:84px 0;position:relative}
    .dark{background:#1a1a1a;color:#fff}
    .light{background:#fff}
    .soft{background:#f5f5f5}
    .gradient-text{background:linear-gradient(135deg,var(--accent) 0%,var(--primary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .nav{position:sticky;top:0;z-index:50;background:rgba(10,10,10,.78);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:minmax(0,1fr) auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand-text{font-weight:800;font-size:20px;line-height:1.2;color:#fff}
    .tj-wrap{display:flex;align-items:center;justify-content:center}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:12px;background:var(--accent);color:#fff;font-weight:700;border:1px solid rgba(255,255,255,.12);transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(179,113,63,.28);background:var(--primary)}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:12px;border:1px solid rgba(255,255,255,.18);color:#fff;background:transparent;transition:.25s}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.18);background:rgba(255,255,255,.06)}
    .hero{background:#1a1a1a;min-height:100vh;padding:34px 0 80px;display:flex;align-items:center}
    .hero-wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:44px;align-items:center;position:relative}
    .hero-cinematic-bg{position:absolute;inset:-80px -40px auto auto;width:460px;height:460px;border-radius:50%;background:radial-gradient(circle, rgba(179,113,63,.22) 0%, rgba(179,113,63,.06) 36%, transparent 72%);filter:blur(8px)}
    .hero-left{position:relative;z-index:2}
    .eyebrow{display:inline-flex;align-items:center;gap:10px;padding:8px 14px;border-radius:999px;background:rgba(179,113,63,.12);border:1px solid rgba(179,113,63,.35);color:#e7d2c0;font-size:13px;margin-bottom:18px}
    .hero h1{font-family:'Plus Jakarta Sans',sans-serif;font-size:54px;line-height:1.02;letter-spacing:-.04em;margin:0 0 16px;color:#fff;max-width:760px}
    .hero p{font-size:18px;line-height:1.75;color:#d1d5db;max-width:760px;margin:0}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 28px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(179,113,63,.35);background:rgba(179,113,63,.08);color:#e5e7eb;font-size:13px}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{position:relative;z-index:2;min-height:500px;display:flex;align-items:center;justify-content:center}
    .form-card{width:100%;max-width:460px;padding:28px;border-radius:24px;background:rgba(255,255,255,.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.12);box-shadow:0 22px 60px rgba(0,0,0,.35)}
    .form-card h3{font-family:'Plus Jakarta Sans',sans-serif;color:#fff;font-size:28px;margin:0 0 8px}
    .form-card p{color:#cbd5e1;font-size:14px;margin:0 0 20px}
    .field-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .field{display:flex;flex-direction:column;gap:8px}
    .field label{color:#e5e7eb;font-size:13px;font-weight:600}
    .field input{width:100%;height:48px;border-radius:12px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.05);padding:0 14px;color:#fff;outline:none;transition:.2s}
    .field input:focus{border-color:var(--accent);box-shadow:0 0 0 3px rgba(179,113,63,.18)}
    .full{grid-column:1/-1}
    .section-head{max-width:760px;margin-bottom:28px}
    .section-head h2{font-family:'Plus Jakarta Sans',sans-serif;font-size:40px;line-height:1.1;margin:0 0 14px}
    .section-head p{font-size:17px;line-height:1.75;color:#6b7280;margin:0}
    .dark .section-head p{color:#cbd5e1}
    .metrics-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .metric-card{padding:24px;border-radius:18px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 10px 30px rgba(17,24,39,.06)}
    .metric-card h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;margin:0 0 8px}
    .metric-card p{margin:0;color:#6b7280;line-height:1.6}
    .metric-value{font-family:'Plus Jakarta Sans',sans-serif;font-size:36px;font-weight:800;color:#111827;margin-bottom:8px}
    .tabs-shell{display:grid;grid-template-columns:320px 1fr;gap:28px;align-items:start}
    .tabs-nav{display:flex;flex-direction:column;gap:12px}
    .tab-btn{padding:18px;border-radius:18px;border:1px solid #e5e7eb;background:#fff;text-align:left;cursor:pointer;transition:.25s}
    .tab-btn.active{border-color:rgba(179,113,63,.45);box-shadow:0 12px 28px rgba(179,113,63,.12);background:linear-gradient(180deg, rgba(179,113,63,.08), rgba(255,255,255,1))}
    .tab-btn h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;margin:0 0 6px}
    .tab-btn p{margin:0;color:#6b7280;font-size:14px;line-height:1.5}
    .preview-panel{padding:28px;border-radius:24px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 16px 40px rgba(17,24,39,.08)}
    .dashboard-visual{position:relative;min-height:420px;border-radius:22px;overflow:hidden;background:linear-gradient(135deg,#171717 0%,#202020 55%,#2a211a 100%);padding:20px;display:grid;grid-template-columns:1.3fr .7fr;gap:18px}
    .visual-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .thumb-card,.stat-card,.timeline-card,.control-card{border-radius:18px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);padding:16px;color:#fff}
    .thumb-card{min-height:116px;background:linear-gradient(135deg, rgba(179,113,63,.35), rgba(255,255,255,.07)), radial-gradient(circle at top right, rgba(255,255,255,.16), transparent 45%), #1f1f1f}
    .thumb-card strong,.stat-card strong,.timeline-card strong,.control-card strong{display:block;font-size:14px;margin-bottom:8px}
    .thumb-lines span,.mini-lines span{display:block;height:8px;border-radius:999px;background:rgba(255,255,255,.16);margin-top:8px}
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
    .feature-item{display:flex;gap:12px;padding:16px;border-radius:16px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.09)}
    .light .feature-item,.soft .feature-item{background:#fff;border-color:#e5e7eb}
    .feature-item h4{font-family:'Plus Jakarta Sans',sans-serif;font-size:17px;margin:0 0 6px}
    .feature-item p{margin:0;color:#6b7280;font-size:14px;line-height:1.6}
    .dark .feature-item p{color:#cbd5e1}
    .media-card{padding:18px;border-radius:24px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 16px 40px rgba(17,24,39,.08)}
    .dark .media-card{background:rgba(255,255,255,.05);border-color:rgba(255,255,255,.1)}
    .video-shell{border-radius:20px;overflow:hidden;background:#0a0a0a}
    .video-shell video{width:100%;height:420px;object-fit:cover;display:block}
    .feature-tabs{display:grid;grid-template-columns:300px 1fr;gap:24px}
    .feature-tab-nav{display:flex;flex-direction:column;gap:12px}
    .feature-tab{padding:16px;border-radius:16px;border:1px solid #d1d5db;background:#fff;cursor:pointer}
    .feature-tab.active{border-color:rgba(179,113,63,.45);background:rgba(179,113,63,.08)}
    .feature-preview{padding:24px;border-radius:20px;background:#fff;border:1px solid #e5e7eb;min-height:260px}
    .gallery-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
    .gallery-card{border-radius:22px;overflow:hidden;background:#0a0a0a;border:1px solid rgba(255,255,255,.08);box-shadow:0 16px 40px rgba(17,24,39,.12)}
    .gallery-card video{width:100%;height:280px;object-fit:cover;display:block}
    .gallery-meta{padding:16px;background:#fff}
    .gallery-meta h4{font-family:'Plus Jakarta Sans',sans-serif;margin:0 0 6px;font-size:18px}
    .gallery-meta p{margin:0;color:#6b7280;font-size:14px;line-height:1.6}
    .testimonials-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:28px;align-items:start}
    .testimonial-main{padding:32px;border-radius:24px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 16px 40px rgba(17,24,39,.08)}
    .quote-mark{font-size:60px;line-height:1;color:var(--accent);font-weight:800}
    .testimonial-main p{font-size:22px;line-height:1.7;color:#111827;margin:8px 0 24px}
    .author{display:flex;align-items:center;gap:14px}
    .avatar{width:54px;height:54px;border-radius:50%;display:grid;place-items:center;background:var(--accent);color:#fff;font-weight:800}
    .stars{color:#d4af37;letter-spacing:2px;font-size:18px;margin-bottom:6px}
    .testimonial-side{display:grid;gap:14px}
    .mini-testimonial{padding:18px;border-radius:18px;background:#fff;border:1px solid #e5e7eb}
    .mini-testimonial p{margin:0 0 12px;color:#374151;line-height:1.6;font-size:14px}
    .dots{display:flex;gap:8px;margin-top:20px}
    .dot{width:10px;height:10px;border-radius:999px;background:#d1d5db;border:none;cursor:pointer;transition:.25s}
    .dot.active{width:28px;background:var(--accent)}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
    .price-card{padding:28px;border-radius:24px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(20px)}
    .price-card.highlight{box-shadow:0 20px 50px rgba(179,113,63,.18);border-color:rgba(179,113,63,.45)}
    .badge-green{display:inline-flex;padding:7px 12px;border-radius:999px;background:rgba(34,197,94,.12);color:#86efac;border:1px solid rgba(34,197,94,.25);font-size:12px;font-weight:700;margin-bottom:16px}
    .price-card h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;margin:0 0 10px;color:#fff}
    .price{font-family:'Plus Jakarta Sans',sans-serif;font-size:36px;font-weight:800;color:#fff;margin:8px 0 18px}
    .price.muted{font-size:18px;font-weight:600;color:#cbd5e1}
    .checklist{display:grid;gap:12px;margin:20px 0 0}
    .check{display:flex;gap:10px;align-items:flex-start;color:#e5e7eb;font-size:15px;line-height:1.6}
    .footer{background:#0f0f10;color:#fff;padding:36px 0}
    .footer-inner{display:grid;grid-template-columns:1.3fr 1fr auto;gap:20px;align-items:center}
    .footer-meta p,.footer-meta a{margin:0;color:#cbd5e1;font-size:14px}
    .footer-links{display:flex;gap:16px;flex-wrap:wrap}
    .socials{display:flex;gap:10px}
    .social{width:38px;height:38px;border-radius:999px;display:grid;place-items:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}
    .hover-lift{transition:transform .25s ease,box-shadow .25s ease}
    .hover-lift:hover{transform:translateY(-6px);box-shadow:0 18px 36px rgba(17,24,39,.14)}
    .scene-expand{width:75%;margin:0 auto;border-radius:24px;overflow:hidden;will-change:width,border-radius}
    .scene-expand img,.scene-expand video{width:100%;height:100%;object-fit:cover;transform:scale(1.08);will-change:transform}
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
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
    @keyframes floatRotate{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-8px) rotate(2deg)}}
    @keyframes ambientPulse{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}
    @keyframes driftLeft{0%,100%{transform:translateX(0) translateY(0)}33%{transform:translateX(-12px) translateY(-8px)}66%{transform:translateX(8px) translateY(-14px)}}
    .float-ambient{animation:floatY 6s ease-in-out infinite}
    .float-rotate{animation:floatRotate 8s ease-in-out infinite}
    .float-pulse{animation:ambientPulse 4s ease-in-out infinite}
    .float-drift{animation:driftLeft 10s ease-in-out infinite}
    .float-delay-1{animation-delay:-2s}.float-delay-2{animation-delay:-4s}.float-delay-3{animation-delay:-1s}
    .stagger-parent>*{opacity:0;transform:translateY(32px);will-change:opacity,transform}
    .btn-magnetic{position:relative;transition:transform .3s cubic-bezier(.34,1.56,.64,1);display:inline-block}
    .text-reveal-mask{overflow:hidden;display:block}
    .text-reveal-inner{display:block;transform:translateY(110%);will-change:transform}
    .cursor-glow{position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);background:radial-gradient(circle,var(--accent-glow,rgba(99,102,241,.12)) 0%,transparent 70%);transition:opacity .3s ease}
    .glass-card{background:rgba(255,255,255,.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.1);border-radius:20px}
    .pin-scene{position:relative}
    @media (max-width: 991px){
      .hero-wrap,.split-panel,.tabs-shell,.feature-tabs,.testimonials-grid,.footer-inner{grid-template-columns:1fr}
      .metrics-strip,.pricing-grid,.gallery-grid{grid-template-columns:1fr}
      .hero h1{font-size:54px}
      .hero-visual{min-height:auto}
      .field-grid{grid-template-columns:1fr}
      .dashboard-visual{grid-template-columns:1fr}
      .nav-inner{grid-template-columns:1fr auto;gap:12px}
      .nav-cta{grid-column:1/-1;justify-self:start}
    }
    @media (max-width: 767px){
      .section{padding:64px 0}
      .hero{padding:26px 0 60px}
      .hero h1{font-size:54px}
      .section-head h2,.copy-panel h2{font-size:32px}
      .testimonial-main p{font-size:18px}
      .brand-text{font-size:16px}
    }
  `;

  return (
    <div className="page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand-text">
            <span style={{ fontWeight: 800, fontSize: '20px' }}>{productName}</span>
          </div>
          <div className="tj-wrap">
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
        <div className="container hero-wrap">
          <div className="hero-cinematic-bg float-drift" data-depth="0.4" />
          <div className="hero-left" data-depth="0.15">
            <div className="eyebrow reveal">
              <FeatureIcon />
              <span>AI Image Generation and AI Video Generation</span>
            </div>
            <h1 className="split-text reveal">
              Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative
              Models
            </h1>
            <p className="reveal reveal-delay-1">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5
              Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content
              creation.
            </p>
            <div className="chips reveal reveal-delay-2">
              {[
                'AI Image Generation',
                'AI Video Generation',
                'High-resolution visual content',
                'Text-to-Video',
                'Enterprise Ready',
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  <FeatureIcon />
                  <span>{chip}</span>
                </div>
              ))}
            </div>
            <div className="hero-actions reveal reveal-delay-3">
              <a href="#lead-form" className="animated-cta btn-magnetic">
                Get Free Consultation
              </a>
              <a href="#products" className="ghost-btn">
                Explore Models
              </a>
            </div>
          </div>

          <div className="hero-visual" id="lead-form">
            <div className="form-card glass-card float-ambient">
              <h3>Get Free Consultation</h3>
              <p>
                Professionals and enterprises creating high-quality visual content, including creative teams,
                marketers, video producers, art directors, and marketing managers
              </p>
              <form onSubmit={handleSubmit}>
                <div className="field-grid">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone" />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleChange}
                      placeholder="Enter company"
                    />
                  </div>
                  <div className="field full">
                    <button type="submit" className="animated-cta btn-magnetic" style={{ width: '100%' }}>
                      Get Free Consultation
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section light clip-reveal">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Proof-led <span className="gradient-text">visual production</span> for modern teams
            </h2>
            <p>
              Seedream 4.5 and Seedance 1.5 Pro by ByteDance are designed for professionals and enterprises creating
              high-quality visual content.
            </p>
          </div>
          <div className="metrics-strip stagger-parent">
            <div className="metric-card hover-lift">
              <div className="metric-value" data-count="4" data-suffix="K">
                4K
              </div>
              <h3>High-resolution output</h3>
              <p>Generate native images up to 1K–4K resolution with strong visual fidelity.</p>
            </div>
            <div className="metric-card hover-lift">
              <div className="metric-value" data-count="10" data-suffix="×">
                10×
              </div>
              <h3>Faster inference</h3>
              <p>Optimized inference pipeline significantly improves generation speed.</p>
            </div>
            <div className="metric-card hover-lift">
              <div className="metric-value" data-count="2" data-suffix="">
                2
              </div>
              <h3>Generative models</h3>
              <p>Seedream 4.5 for image generation and Seedance 1.5 Pro for video generation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section soft clip-reveal" id="products">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Choose the right <span className="gradient-text">creative engine</span>
            </h2>
            <p>
              Switch between image generation and video generation workflows through a tabs-with-preview experience.
            </p>
          </div>
          <div className="tabs-shell">
            <div className="tabs-nav">
              {products.map((item, i) => (
                <button
                  key={item.name}
                  className={`tab-btn hover-lift ${activeProductTab === i ? 'active' : ''}`}
                  onClick={() => setActiveProductTab(i)}
                >
                  <h3>{item.name}</h3>
                  <p>{item.headline}</p>
                </button>
              ))}
            </div>
            <div className="preview-panel reveal">
              <div className="dashboard-visual hero-cinematic-bg">
                <div className="visual-grid depth-foreground" data-depth="0.15">
                  {products[activeProductTab].features.slice(0, 4).map((feature, i) => (
                    <div className={`thumb-card ${i % 2 === 0 ? 'float-ambient' : 'float-rotate'}`} key={feature.title}>
                      <strong>{feature.title}</strong>
                      <div className="thumb-lines">
                        <span />
                        <span />
                        <span />
                      </div>
                    </div>
                  ))}
                </div>
                <div className="visual-side card-3d-stack" data-depth="0.25">
                  <div className="stat-card glass-card">
                    <strong>{products[activeProductTab].name}</strong>
                    <div className="mini-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="timeline-card glass-card">
                    <strong>{activeProductTab === 0 ? 'High-Resolution Output' : 'Audio-Visual Synchronization'}</strong>
                    <div className="mini-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                  <div className="control-card glass-card">
                    <strong>{activeProductTab === 0 ? 'Strong Structural Fidelity' : 'Cinematic Camera Control'}</strong>
                    <div className="mini-lines">
                      <span />
                      <span />
                      <span />
                    </div>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 22 }}>
                <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 28, margin: '0 0 10px' }}>
                  {products[activeProductTab].headline}
                </h3>
                <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.8 }}>{products[activeProductTab].description}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section light clip-reveal">
        <div className="container split-panel">
          <div className="media-card scene-expand reveal">
            <div className="zoom-reveal video-shell">
              <video autoPlay muted loop playsInline preload="auto">
                <source src={videos[3]} type="video/mp4" />
              </video>
            </div>
          </div>
          <div className="copy-panel" data-depth="0.15">
            <span className="tag">Seedream 4.5</span>
            <h2 className="reveal">
              AI Image Generation with <span className="gradient-text">Seedream 4.5</span>
            </h2>
            <div className="desc-box reveal reveal-delay-1">
              <p>{products[0].description}</p>
            </div>
            <div className="feature-list stagger-parent">
              {products[0].features.map((feature) => (
                <div className="feature-item hover-lift" key={feature.title}>
                  <FeatureIcon />
                  <div>
                    <h4>{feature.title}</h4>
                    <p>{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 24 }}>
              <a href="#lead-form" className="animated-cta btn-magnetic">
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark pin-scene clip-reveal">
        <div className="container split-panel">
          <div className="copy-panel" data-depth="0.15">
            <span className="tag" style={{ color: '#f0d9c7' }}>
              Seedance 1.5 Pro
            </span>
            <h2 className="reveal">
              AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro by Bytedance</span>
            </h2>
            <div className="desc-box reveal reveal-delay-1">
              <p>{products[1].description}</p>
            </div>
            <div className="feature-tabs">
              <div className="feature-tab-nav">
                {products[1].features.map((feature, i) => (
                  <button
                    key={feature.title}
                    className={`feature-tab ${activeFeatureTab === i ? 'active' : ''}`}
                    onClick={() => setActiveFeatureTab(i)}
                  >
                    <strong style={{ display: 'block', fontFamily: 'Plus Jakarta Sans', marginBottom: 6 }}>
                      {feature.title}
                    </strong>
                    <span style={{ color: '#6b7280', fontSize: 14 }}>{feature.description}</span>
                  </button>
                ))}
              </div>
              <div className="feature-preview glass-card">
                <div className="text-reveal-mask">
                  <div className="text-reveal-inner">
                    <h3 style={{ fontFamily: 'Plus Jakarta Sans', fontSize: 28, margin: '0 0 14px', color: '#fff' }}>
                      {products[1].features[activeFeatureTab].title}
                    </h3>
                  </div>
                </div>
                <p style={{ margin: 0, color: '#cbd5e1', fontSize: 17, lineHeight: 1.8 }}>
                  {products[1].features[activeFeatureTab].description}
                </p>
              </div>
            </div>
          </div>
          <div className="media-card dark scene-expand reveal">
            <div className="zoom-reveal video-shell">
              <video autoPlay muted loop playsInline preload="auto">
                <source src={videos[1]} type="video/mp4" />
              </video>
            </div>
          </div>
        </div>
      </section>

      <section className="section light clip-reveal">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Gallery of <span className="gradient-text">AI-generated motion</span>
            </h2>
            <p>See video demonstrations aligned to image generation and audio-visual production workflows.</p>
          </div>
          <div className="gallery-grid stagger-parent">
            {videos.map((video, i) => (
              <div className="gallery-card hover-lift" key={video}>
                <video autoPlay muted loop playsInline preload="auto">
                  <source src={video} type="video/mp4" />
                </video>
                <div className="gallery-meta">
                  <h4>{i % 2 === 0 ? 'Seedance 1.5 Pro' : 'Seedream 4.5'}</h4>
                  <p>
                    {i % 2 === 0
                      ? 'Generate video and audio simultaneously with strong multimodal alignment.'
                      : 'Produce high-resolution, high-fidelity images from text prompts and visual inputs.'}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section soft clip-reveal">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              What teams value most in <span className="gradient-text">production workflows</span>
            </h2>
            <p>Explore key capabilities across both ByteDance generative models.</p>
          </div>
          <div className="tabs-shell">
            <div className="tabs-nav">
              {products.map((item, i) => (
                <button
                  key={item.name + '-feature'}
                  className={`tab-btn hover-lift ${activeProductTab === i ? 'active' : ''}`}
                  onClick={() => setActiveProductTab(i)}
                >
                  <h3>{item.name}</h3>
                  <p>{item.features.length} capabilities</p>
                </button>
              ))}
            </div>
            <div className="preview-panel">
              <div className="feature-list stagger-parent">
                {products[activeProductTab].features.map((feature) => (
                  <div className="feature-item hover-lift" key={feature.title}>
                    <FeatureIcon />
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
      </section>

      <section className="section light clip-reveal">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Testimonials that reflect <span className="gradient-text">real evaluation journeys</span>
            </h2>
            <p>Professionals and teams shared how Seedream, Seedance, and Techjockey supported their buying process.</p>
          </div>
          <div className="testimonials-grid">
            <div className="testimonial-main reveal">
              <div className="quote-mark">❝</div>
              <div className="stars">★★★★★</div>
              <p>{testimonials[activeSlide].quote}</p>
              <div className="author">
                <div className="avatar">{initials(testimonials[activeSlide].author)}</div>
                <div>
                  <strong style={{ display: 'block', fontFamily: 'Plus Jakarta Sans' }}>{testimonials[activeSlide].author}</strong>
                  <span style={{ color: '#6b7280' }}>{testimonials[activeSlide].role}</span>
                </div>
              </div>
              <div className="dots">
                {testimonials.map((_, i) => (
                  <button key={i} className={`dot ${i === activeSlide ? 'active' : ''}`} onClick={() => setActiveSlide(i)} />
                ))}
              </div>
            </div>
            <div className="testimonial-side stagger-parent">
              {testimonials
                .filter((_, i) => i !== activeSlide)
                .slice(0, 3)
                .map((item) => (
                  <div className="mini-testimonial hover-lift" key={item.author}>
                    <div className="stars">★★★★★</div>
                    <p>{item.quote}</p>
                    <strong style={{ display: 'block', fontFamily: 'Plus Jakarta Sans' }}>{item.author}</strong>
                    <span style={{ color: '#6b7280', fontSize: 14 }}>{item.role}</span>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section dark clip-reveal">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Pricing for <span className="gradient-text">image and video generation</span>
            </h2>
            <p>Choose the model based on your visual production needs.</p>
          </div>
          <div className="pricing-grid stagger-parent">
            {pricing.map((plan, i) => (
              <div key={plan.name} className={`price-card hover-lift ${i === 1 ? 'highlight' : ''}`}>
                <div className="badge-green">{i === 1 ? 'Starting plan available' : 'Consultation recommended'}</div>
                <h3>{plan.name}</h3>
                <div className={`price ${!plan.price ? 'muted' : ''}`}>{plan.price || 'Contact for pricing'}</div>
                <div className="checklist">
                  {plan.includes.map((item) => (
                    <div className="check" key={item}>
                      <FeatureIcon />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 22 }}>
                  <a href="#lead-form" className="animated-cta btn-magnetic" style={{ width: '100%' }}>
                    Get Free Consultation
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <div className="footer-meta" style={{ marginTop: 14 }}>
              <p>support@techjockey.com</p>
              <p style={{ marginTop: 8 }}>© 2024 Techjockey Infotech Pvt. Ltd.</p>
            </div>
          </div>
          <div className="footer-links">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/terms">Terms</a>
          </div>
          <div className="socials">
            <a className="social" href="https://facebook.com" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V11H7.5v3h2.8v8h3.2z"/></svg>
            </a>
            <a className="social" href="https://instagram.com" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zm5.75-3.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"/></svg>
            </a>
            <a className="social" href="https://twitter.com" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.3-8.3L1 2h6.3l4.4 5.9L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z"/></svg>
            </a>
            <a className="social" href="https://linkedin.com" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 103 4.97 1.98 1.98 0 005.25 3zM20.44 20h-3.37v-5.59c0-1.33 0-3.03-1.85-3.03s-2.13 1.45-2.13 2.94V20H9.72V8.5h3.24v1.57H13c.45-.85 1.55-1.74 3.2-1.74 3.42 0 4.05 2.25 4.05 5.18V20z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;