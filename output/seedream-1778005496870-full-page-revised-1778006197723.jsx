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
  const animationCleanupRef = useRef([]);
  const animationInitRef = useRef(false);

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
  }, [accent, primary]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    let mounted = true;

    const addCleanup = (fn) => {
      animationCleanupRef.current.push(fn);
    };

    const runCleanup = () => {
      animationCleanupRef.current.forEach((fn) => {
        try {
          fn();
        } catch (e) {}
      });
      animationCleanupRef.current = [];
    };

    const initNativeFallbacks = () => {
      const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      document.querySelectorAll('.split-text').forEach((el) => {
        if (el.dataset.splitReady === 'true') return;
        const text = el.textContent || '';
        el.setAttribute('aria-label', text);
        el.dataset.splitReady = 'true';
        el.innerHTML = text
          .split('')
          .map((char) =>
            char === ' '
              ? '<span class="char-space"> </span>'
              : `<span class="char">${char}</span>`
          )
          .join('');
      });

      if (reduceMotion) {
        document.querySelectorAll('.char').forEach((char) => char.classList.add('in'));
        document.querySelectorAll('.text-reveal-inner').forEach((el) => (el.style.transform = 'translateY(0)'));
        document.querySelectorAll('.clip-reveal').forEach((el) => (el.style.clipPath = 'inset(0% 0 0 0)'));
        return;
      }

      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (!entry.isIntersecting) return;
            const el = entry.target;

            if (el.classList.contains('split-text')) {
              const chars = el.querySelectorAll('.char');
              chars.forEach((char, index) => {
                char.style.transitionDelay = `${Math.min(index * 25, 800)}ms`;
                char.classList.add('in');
              });
            }

            if (el.classList.contains('text-reveal-mask')) {
              const inner = el.querySelector('.text-reveal-inner');
              if (inner) inner.classList.add('in');
            }

            if (el.classList.contains('clip-reveal')) {
              el.classList.add('in');
            }

            if (el.hasAttribute('data-count') && !el.dataset.countAnimated) {
              el.dataset.countAnimated = 'true';
              const target = parseFloat(el.dataset.count);
              const prefix = el.dataset.prefix || '';
              const suffix = el.dataset.suffix || '';
              if (!Number.isNaN(target)) {
                const duration = 1400;
                const startTime = performance.now();
                const animate = (now) => {
                  const progress = Math.min((now - startTime) / duration, 1);
                  const eased = 1 - Math.pow(1 - progress, 3);
                  const value = Math.round(target * eased);
                  el.textContent = `${prefix}${value.toLocaleString()}${suffix}`;
                  if (progress < 1) requestAnimationFrame(animate);
                };
                requestAnimationFrame(animate);
              }
            }

            io.unobserve(el);
          });
        },
        { threshold: 0.2, rootMargin: '0px 0px -5% 0px' }
      );

      document
        .querySelectorAll('.split-text, .text-reveal-mask, .clip-reveal, [data-count]')
        .forEach((el) => io.observe(el));

      addCleanup(() => io.disconnect());

      document.querySelectorAll('.btn-magnetic').forEach((btn) => {
        if (btn.dataset.magneticBound === 'true') return;
        btn.dataset.magneticBound = 'true';

        const move = (e) => {
          const rect = btn.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.18;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.18;
          btn.style.transform = `translate(${x}px, ${y}px)`;
        };
        const leave = () => {
          btn.style.transform = 'translate(0,0)';
        };

        btn.addEventListener('mousemove', move, { passive: true });
        btn.addEventListener('mouseleave', leave);

        addCleanup(() => {
          btn.removeEventListener('mousemove', move);
          btn.removeEventListener('mouseleave', leave);
          btn.style.transform = '';
          btn.dataset.magneticBound = 'false';
        });
      });
    };

    const initGSAPAnimations = () => {
      if (!mounted || !window.gsap || !window.ScrollTrigger) return false;

      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      runCleanup();

      const ctx = gsap.context(() => {
        if (!document.querySelector('.cursor-glow') && !window.matchMedia('(pointer: coarse)').matches) {
          const glow = document.createElement('div');
          glow.className = 'cursor-glow';
          document.body.appendChild(glow);

          const moveHandler = (e) => {
            gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.35, ease: 'power2.out', overwrite: 'auto' });
          };

          window.addEventListener('mousemove', moveHandler, { passive: true });
          addCleanup(() => {
            window.removeEventListener('mousemove', moveHandler);
            glow.remove();
          });
        }

        gsap.utils.toArray('.scene-expand').forEach((scene) => {
          gsap.fromTo(
            scene,
            { width: '88%', borderRadius: '28px' },
            {
              width: '100%',
              borderRadius: '0px',
              ease: 'none',
              scrollTrigger: { trigger: scene, start: 'top 85%', end: 'top 20%', scrub: 1, invalidateOnRefresh: true },
            }
          );
          const media = scene.querySelector('img, video');
          if (media) {
            gsap.fromTo(
              media,
              { scale: 1.1 },
              {
                scale: 1,
                ease: 'none',
                scrollTrigger: { trigger: scene, start: 'top 85%', end: 'top 20%', scrub: 1, invalidateOnRefresh: true },
              }
            );
          }
        });

        gsap.utils.toArray('.zoom-reveal').forEach((el) => {
          const img = el.querySelector('img, video');
          if (!img) return;
          gsap.fromTo(
            img,
            { scale: 1.12 },
            {
              scale: 1,
              ease: 'power2.out',
              duration: 1.05,
              scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse', invalidateOnRefresh: true },
            }
          );
        });

        gsap.utils.toArray('[data-depth]').forEach((el) => {
          const depth = parseFloat(el.dataset.depth) || 0.3;
          gsap.to(el, {
            y: () => -(window.innerHeight * depth * 0.32),
            ease: 'none',
            scrollTrigger: {
              trigger: el.closest('section') || el,
              start: 'top bottom',
              end: 'bottom top',
              scrub: true,
              invalidateOnRefresh: true,
            },
          });
        });

        const heroBg = document.querySelector('.hero-cinematic-bg');
        if (heroBg) {
          gsap.fromTo(
            heroBg,
            { scale: 0.92 },
            {
              scale: 1.06,
              ease: 'none',
              scrollTrigger: {
                trigger: heroBg.closest('section'),
                start: 'top top',
                end: 'bottom top',
                scrub: 1.5,
                invalidateOnRefresh: true,
              },
            }
          );
        }

        gsap.utils.toArray('.clip-reveal').forEach((el) => {
          gsap.fromTo(
            el,
            { clipPath: 'inset(0 0 100% 0)' },
            {
              clipPath: 'inset(0% 0 0 0)',
              ease: 'power3.out',
              duration: 1,
              scrollTrigger: { trigger: el, start: 'top 82%', toggleActions: 'play none none reverse', invalidateOnRefresh: true },
            }
          );
        });

        gsap.utils.toArray('.stagger-parent').forEach((parent) => {
          gsap.fromTo(
            parent.children,
            { opacity: 0, y: 28 },
            {
              opacity: 1,
              y: 0,
              duration: 0.72,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: { trigger: parent, start: 'top 82%', toggleActions: 'play none none none', invalidateOnRefresh: true },
            }
          );
        });

        gsap.utils.toArray('.split-text').forEach((el) => {
          if (el.dataset.gsapSplitReady !== 'true') {
            const text = el.textContent || '';
            el.setAttribute('aria-label', text);
            el.innerHTML = text
              .split('')
              .map((char) =>
                char === ' '
                  ? '<span class="char-space"> </span>'
                  : `<span class="char" style="display:inline-block;will-change:transform,opacity">${char}</span>`
              )
              .join('');
            el.dataset.gsapSplitReady = 'true';
          }
          gsap.fromTo(
            el.querySelectorAll('.char'),
            { y: 72, opacity: 0, rotateX: -34 },
            {
              y: 0,
              opacity: 1,
              rotateX: 0,
              stagger: 0.022,
              duration: 0.82,
              ease: 'power3.out',
              scrollTrigger: { trigger: el, start: 'top 86%', toggleActions: 'play none none none', invalidateOnRefresh: true },
            }
          );
        });

        gsap.utils.toArray('.text-reveal-mask').forEach((mask) => {
          const inner = mask.querySelector('.text-reveal-inner');
          if (!inner) return;
          gsap.fromTo(
            inner,
            { y: '100%' },
            {
              y: '0%',
              duration: 0.95,
              ease: 'power4.out',
              scrollTrigger: { trigger: mask, start: 'top 86%', toggleActions: 'play none none reverse', invalidateOnRefresh: true },
            }
          );
        });

        gsap.utils.toArray('.btn-magnetic').forEach((btn) => {
          if (btn.dataset.gsapMagneticBound === 'true') return;
          btn.dataset.gsapMagneticBound = 'true';

          const move = (e) => {
            const rect = btn.getBoundingClientRect();
            const x = (e.clientX - rect.left - rect.width / 2) * 0.22;
            const y = (e.clientY - rect.top - rect.height / 2) * 0.22;
            gsap.to(btn, { x, y, duration: 0.22, ease: 'power2.out', overwrite: 'auto' });
          };
          const leave = () => {
            gsap.to(btn, { x: 0, y: 0, duration: 0.45, ease: 'power3.out', overwrite: 'auto' });
          };

          btn.addEventListener('mousemove', move, { passive: true });
          btn.addEventListener('mouseleave', leave);

          addCleanup(() => {
            btn.removeEventListener('mousemove', move);
            btn.removeEventListener('mouseleave', leave);
            btn.dataset.gsapMagneticBound = 'false';
          });
        });

        gsap.utils.toArray('.pin-scene').forEach((scene) => {
          ScrollTrigger.create({
            trigger: scene,
            start: 'top top',
            end: '+=600',
            pin: true,
            pinSpacing: true,
            invalidateOnRefresh: true,
          });
        });

        gsap.utils.toArray('[data-count]').forEach((el) => {
          const target = parseFloat(el.dataset.count);
          if (Number.isNaN(target)) return;
          const prefix = el.dataset.prefix || '';
          const suffix = el.dataset.suffix || '';
          gsap.fromTo(
            { val: 0 },
            { val: target,
              duration: 1.8,
              ease: 'power2.out',
              snap: { val: 1 },
              scrollTrigger: { trigger: el, start: 'top 82%', once: true, invalidateOnRefresh: true },
              onUpdate: function () {
                el.textContent = prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
              },
            }
          );
        });

        ScrollTrigger.refresh();
      });

      addCleanup(() => {
        try {
          ctx.revert();
        } catch (e) {}
        if (window.ScrollTrigger) {
          window.ScrollTrigger.getAll().forEach((trigger) => {
            try {
              trigger.kill();
            } catch (e) {}
          });
        }
      });

      return true;
    };

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          if (existing.dataset.loaded === 'true') return resolve();
          const onLoad = () => {
            existing.dataset.loaded = 'true';
            resolve();
          };
          const onError = () => reject(new Error(`Failed to load ${src}`));
          existing.addEventListener('load', onLoad, { once: true });
          existing.addEventListener('error', onError, { once: true });
          return;
        }
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.dataset.loaded = 'false';
        s.onload = () => {
          s.dataset.loaded = 'true';
          resolve();
        };
        s.onerror = () => reject(new Error(`Failed to load ${src}`));
        document.body.appendChild(s);
      });

    const initAll = async () => {
      if (animationInitRef.current) return;
      animationInitRef.current = true;

      initNativeFallbacks();

      if (scriptsLoaded.current) {
        initGSAPAnimations();
        return;
      }

      try {
        await Promise.all([
          loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
          loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'),
        ]);
        scriptsLoaded.current = true;
        if (!mounted) return;
        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            if (!initGSAPAnimations()) initNativeFallbacks();
          });
        });
      } catch (e) {
        initNativeFallbacks();
      }
    };

    initAll();

    const refreshHandler = () => {
      if (window.ScrollTrigger) {
        try {
          window.ScrollTrigger.refresh();
        } catch (e) {}
      }
    };

    window.addEventListener('load', refreshHandler);
    window.addEventListener('resize', refreshHandler);

    return () => {
      mounted = false;
      animationInitRef.current = false;
      window.removeEventListener('load', refreshHandler);
      window.removeEventListener('resize', refreshHandler);
      runCleanup();
    };
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
    .thumb-card{min-height:140px;display:flex;flex-direction:column;justify-content:space-between}
    .thumb-top{display:flex;align-items:center;justify-content:space-between;margin-bottom:16px}
    .mini-pill{display:inline-flex;align-items:center;padding:6px 10px;border-radius:999px;background:#fff5ec;color:#8b5b34;border:1px solid #f1dcc9;font-size:12px;font-weight:700}
    .thumb-art{height:72px;border-radius:14px;background:linear-gradient(135deg, rgba(179,113,63,.18), rgba(255,255,255,1) 62%);border:1px solid #f1e4d7;position:relative;overflow:hidden}
    .thumb-art::before,.thumb-art::after{content:"";position:absolute;border-radius:18px;filter:blur(0)}
    .thumb-art::before{width:72px;height:72px;left:10px;top:8px;background:linear-gradient(135deg,#f0c9a7,#fff)}
    .thumb-art::after{width:52px;height:52px;right:12px;bottom:10px;background:linear-gradient(135deg,#d39b69,#fff)}
    .stack-side{display:grid;gap:14px}
    .stat-card strong,.timeline-card strong,.control-card strong{font-size:15px;display:block;margin-bottom:8px}
    .stat-line{height:10px;border-radius:999px;background:#f5efe9;overflow:hidden;margin:8px 0}
    .stat-line span{display:block;height:100%;background:linear-gradient(90deg,var(--accent),#d7ab86);border-radius:999px}
    .timeline-card ul,.control-card ul,.feature-list,.price-list{padding:0;margin:0;list-style:none}
    .timeline-card li,.control-card li,.feature-list li,.price-list li{display:flex;gap:10px;align-items:flex-start;color:#4b5563;line-height:1.6}
    .timeline-card li+li,.control-card li+li,.feature-list li+li,.price-list li+li{margin-top:10px}
    .product-info h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:30px;margin:0 0 12px}
    .product-info p{font-size:16px;line-height:1.75;color:#6b7280;margin:0 0 18px}
    .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .feature-item{padding:18px;border-radius:18px;background:#fff;border:1px solid #efe4d8;box-shadow:0 10px 22px rgba(17,24,39,.04)}
    .feature-item h4{margin:10px 0 8px;font-size:17px;font-family:'Plus Jakarta Sans',sans-serif;color:#111827}
    .feature-item p{margin:0;color:#6b7280;line-height:1.65;font-size:14px}
    .media-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:18px;align-items:stretch}
    .media-card{position:relative;border-radius:24px;overflow:hidden;min-height:420px;background:#0f0f10;border:1px solid rgba(255,255,255,.08);box-shadow:0 16px 40px rgba(0,0,0,.16)}
    .media-card video,.media-card img{width:100%;height:100%;object-fit:cover}
    .media-card .overlay{position:absolute;left:18px;right:18px;bottom:18px;padding:18px;border-radius:18px;background:linear-gradient(180deg,rgba(17,24,39,.02),rgba(17,24,39,.7));color:#fff}
    .media-card .overlay strong{display:block;font-size:20px;margin-bottom:6px;font-family:'Plus Jakarta Sans',sans-serif}
    .media-stack{display:grid;grid-template-rows:1fr 1fr;gap:18px}
    .media-mini{position:relative;border-radius:22px;overflow:hidden;min-height:200px;background:#111;border:1px solid rgba(255,255,255,.08);box-shadow:0 16px 40px rgba(0,0,0,.12)}
    .media-mini video{width:100%;height:100%;object-fit:cover}
    .media-mini .overlay{position:absolute;left:14px;right:14px;bottom:14px;padding:14px 16px;border-radius:16px;background:linear-gradient(180deg,rgba(17,24,39,.02),rgba(17,24,39,.7));color:#fff}
    .media-mini .overlay strong{display:block;font-size:16px;margin-bottom:4px}
    .steps-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .step-card{padding:24px;border-radius:22px;background:#fff;border:1px solid #eee3d8;box-shadow:0 10px 24px rgba(17,24,39,.05)}
    .step-number{width:44px;height:44px;border-radius:14px;display:inline-flex;align-items:center;justify-content:center;background:rgba(179,113,63,.12);color:#8b5b34;font-weight:800;margin-bottom:16px}
    .step-card h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:21px;margin:0 0 10px}
    .step-card p{margin:0;color:#6b7280;line-height:1.7}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
    .price-card{padding:28px;border-radius:24px;background:#fff;border:1px solid #eadfd4;box-shadow:0 14px 34px rgba(17,24,39,.06);display:flex;flex-direction:column}
    .price-card.featured{background:linear-gradient(180deg,#fffaf5 0%,#fff 100%);border-color:rgba(179,113,63,.35);box-shadow:0 18px 40px rgba(179,113,63,.12)}
    .price-top{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:18px}
    .price-name{font-family:'Plus Jakarta Sans',sans-serif;font-size:24px;font-weight:800;color:#111827;line-height:1.2}
    .price-badge{padding:8px 12px;border-radius:999px;background:rgba(179,113,63,.1);border:1px solid rgba(179,113,63,.22);color:#8b5b34;font-size:12px;font-weight:700;white-space:nowrap}
    .price-amount{font-family:'Plus Jakarta Sans',sans-serif;font-size:34px;font-weight:800;color:#111827;margin:0 0 16px}
    .price-note{color:#6b7280;font-size:14px;line-height:1.6;margin:0 0 18px}
    .price-list{margin-bottom:24px}
    .price-cta{margin-top:auto}
    .testimonials-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .testimonial-card{padding:24px;border-radius:22px;background:#fff;border:1px solid #eee3d8;box-shadow:0 10px 24px rgba(17,24,39,.05)}
    .testimonial-card.active{border-color:rgba(179,113,63,.38);box-shadow:0 18px 40px rgba(179,113,63,.12)}
    .testimonial-quote{font-size:16px;line-height:1.8;color:#374151;margin:0 0 22px}
    .testimonial-user{display:flex;align-items:center;gap:12px}
    .avatar{width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:linear-gradient(135deg, rgba(179,113,63,.16), rgba(179,113,63,.32));color:#7a4d2d;font-weight:800}
    .testimonial-user strong{display:block;font-size:15px;color:#111827}
    .testimonial-user span{display:block;font-size:13px;color:#6b7280}
    .faq-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
    .faq-card{padding:22px;border-radius:20px;background:#fff;border:1px solid #eee3d8;box-shadow:0 10px 24px rgba(17,24,39,.04)}
    .faq-card h3{font-size:18px;font-family:'Plus Jakarta Sans',sans-serif;margin:0 0 8px}
    .faq-card p{margin:0;color:#6b7280;line-height:1.7}
    .cta-band{padding:32px;border-radius:28px;background:linear-gradient(135deg,#fff6ee 0%,#fff 54%,#faf2ea 100%);border:1px solid #eddccf;display:flex;align-items:center;justify-content:space-between;gap:20px;box-shadow:0 16px 36px rgba(17,24,39,.06)}
    .cta-band h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:32px;line-height:1.15;margin:0 0 8px}
    .cta-band p{margin:0;color:#6b7280;line-height:1.7}
    .footer{padding:36px 0;background:#111827;color:#e5e7eb}
    .footer-inner{display:flex;align-items:center;justify-content:space-between;gap:16px;flex-wrap:wrap}
    .footer small{color:#cbd5e1}
    .scene-expand{width:88%;margin-inline:auto;border-radius:28px;overflow:hidden}
    .zoom-reveal video,.zoom-reveal img{transform:scale(1.12)}
    .clip-reveal{clip-path:inset(0 0 100% 0);transition:clip-path .8s ease}
    .clip-reveal.in{clip-path:inset(0% 0 0 0)}
    .stagger-parent>*{opacity:0;transform:translateY(18px)}
    .text-reveal-mask{overflow:hidden}
    .text-reveal-inner{transform:translateY(100%);display:block;transition:transform .9s cubic-bezier(.22,1,.36,1)}
    .text-reveal-inner.in{transform:translateY(0)}
    .split-text .char{display:inline-block;opacity:0;transform:translateY(26px) rotateX(-24deg);transition:transform .7s cubic-bezier(.22,1,.36,1),opacity .7s ease}
    .split-text .char.in{opacity:1;transform:translateY(0) rotateX(0)}
    .char-space{display:inline}
    .btn-magnetic{will-change:transform}
    .cursor-glow{position:fixed;left:0;top:0;width:220px;height:220px;border-radius:50%;pointer-events:none;z-index:3;background:radial-gradient(circle, rgba(179,113,63,.16) 0%, rgba(179,113,63,.10) 32%, rgba(179,113,63,0) 70%);transform:translate(-50%,-50%);filter:blur(10px)}
    @media (prefers-reduced-motion: reduce){
      html{scroll-behavior:auto}
      .reveal,.stagger-parent>*,.split-text .char,.text-reveal-inner,.clip-reveal{transition:none !important;animation:none !important}
      .reveal{opacity:1;transform:none}
      .split-text .char{opacity:1;transform:none}
      .text-reveal-inner{transform:none}
      .clip-reveal{clip-path:none}
      .cursor-glow{display:none}
    }
    @media (max-width: 1024px){
      .hero-wrap,.tabs-shell,.media-grid,.dashboard-visual{grid-template-columns:1fr}
      .hero{min-height:auto;padding:24px 0 72px}
      .hero-cinematic-bg{width:340px;height:340px}
      .metrics-grid,.steps-grid,.pricing-grid,.faq-grid,.testimonials-grid{grid-template-columns:1fr 1fr}
      .media-stack{grid-template-rows:auto;grid-template-columns:1fr 1fr}
      .scene-expand{width:100%}
    }
    @media (max-width: 767px){
      .container{width:min(1180px,calc(100% - 20px))}
      .section{padding:64px 0}
      .nav-inner{grid-template-columns:1fr;justify-items:start}
      .hero h1{font-size:54px}
      .section-head h2{font-size:32px}
      .field-grid,.hero-trust,.metrics-grid,.steps-grid,.pricing-grid,.faq-grid,.testimonials-grid,.feature-grid,.media-stack,.visual-grid{grid-template-columns:1fr}
      .cta-band,.footer-inner{flex-direction:column;align-items:flex-start}
      .tabs-nav{order:1}
      .preview-panel{order:2}
      .price-top{flex-direction:column}
      .media-card,.media-mini{min-height:280px}
      .dashboard-visual{min-height:auto}
      .form-card{padding:22px}
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
              <span style={{ color: '#6b7280', fontSize: 14, fontWeight: 600 }}>{productName}</span>
            </div>
            <a href="#demo-form" className="animated-cta btn-magnetic">
              Get Free Demo
            </a>
          </div>
        </nav>

        <section className="hero">
          <div className="hero-video-bg" aria-hidden="true">
            <video autoPlay muted loop playsInline preload="auto" poster="">
              <source src={videos[1]} type="video/mp4" />
            </video>
          </div>
          <div className="container hero-wrap">
            <div className="hero-left reveal">
              <div className="hero-cinematic-bg" />
              <div className="eyebrow">
                <span>AI Image + Video Generation</span>
              </div>
              <h1 className="split-text">Seedream 4.5 and Seedance 1.5 Pro by ByteDance</h1>
              <p>
                Explore powerful multimodal creation with Seedream 4.5 for high-fidelity image generation and Seedance 1.5 Pro for synchronized video and audio generation. Evaluate both solutions through Techjockey and request a free demo today.
              </p>

              <div className="chips stagger-parent" style={{ marginTop: 24 }}>
                <div className="chip"><FeatureIcon /> High-resolution AI images</div>
                <div className="chip"><FeatureIcon /> Native audio-visual generation</div>
                <div className="chip"><FeatureIcon /> Multimodal editing workflows</div>
                <div className="chip"><FeatureIcon /> Faster creative production</div>
              </div>

              <div className="hero-actions reveal">
                <a href="#demo-form" className="animated-cta btn-magnetic">
                  Book Free Demo
                </a>
                <a href="#pricing" className="ghost-btn">
                  View Pricing
                </a>
              </div>

              <div className="hero-trust reveal">
                <div className="hero-trust-card">
                  <strong>Image + Video</strong>
                  <span>Evaluate both ByteDance models in one place.</span>
                </div>
                <div className="hero-trust-card">
                  <strong>Expert Guidance</strong>
                  <span>Compare use cases, features, and fit before you decide.</span>
                </div>
                <div className="hero-trust-card">
                  <strong>Free Demo Support</strong>
                  <span>Get assistance from discovery to final selection.</span>
                </div>
              </div>
            </div>

            <div className="hero-visual reveal" id="demo-form">
              <div className="form-card">
                <h3 className="text-reveal-mask">
                  <span className="text-reveal-inner">Request a Free Demo</span>
                </h3>
                <p>Fill in your details and our team will help you evaluate the right solution.</p>
                <form onSubmit={handleSubmit}>
                  <div className="field-grid">
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
                      <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone number" />
                    </div>
                    <div className="field">
                      <label htmlFor="company">Company</label>
                      <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Enter your company name" />
                    </div>
                    <div className="field full">
                      <button type="submit" className="animated-cta btn-magnetic" style={{ width: '100%', height: 50 }}>
                        Schedule My Demo
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
              <h2>Why teams are evaluating Seedream and Seedance</h2>
              <p>
                These ByteDance models help creative and marketing teams move from idea to output faster with strong quality, better multimodal control, and production-ready workflows.
              </p>
            </div>

            <div className="metrics-grid">
              <div className="metric-card reveal">
                <div className="metric-value" data-count="4" data-suffix="K+">0</div>
                <h3>High-Resolution Output</h3>
                <p>Generate visual content in sharp, high-fidelity quality for professional campaigns and creative assets.</p>
              </div>
              <div className="metric-card reveal">
                <div className="metric-value" data-count="10" data-suffix="×">0</div>
                <h3>Faster Inference</h3>
                <p>Speed up production timelines with optimized generation performance for demanding video workflows.</p>
              </div>
              <div className="metric-card reveal">
                <div className="metric-value" data-count="2" data-suffix=" Core Models">0</div>
                <h3>One Evaluation Journey</h3>
                <p>Compare AI image generation and AI video generation capabilities together before buying.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section light">
          <div className="container">
            <div className="section-head reveal">
              <h2>Product overview</h2>
              <p>Switch between Seedream 4.5 and Seedance 1.5 Pro to explore capabilities, use cases, and creation workflows.</p>
            </div>

            <div className="tabs-shell">
              <div className="tabs-nav reveal">
                {products.map((product, index) => (
                  <button
                    key={product.name}
                    className={`tab-btn ${activeProductTab === index ? 'active' : ''}`}
                    onClick={() => setActiveProductTab(index)}
                    type="button"
                  >
                    <h3>{product.name}</h3>
                    <p>{product.headline}</p>
                  </button>
                ))}
              </div>

              <div className="preview-panel reveal">
                <div className="dashboard-visual">
                  <div>
                    <div className="product-info">
                      <h3>{products[activeProductTab].headline}</h3>
                      <p>{products[activeProductTab].description}</p>
                    </div>
                    <div className="feature-grid">
                      {products[activeProductTab].features.slice(0, 4).map((feature, index) => (
                        <div className="feature-item" key={index}>
                          <FeatureIcon />
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="stack-side">
                    <div className="stat-card">
                      <strong>Workflow Snapshot</strong>
                      <div className="stat-line"><span style={{ width: activeProductTab === 0 ? '88%' : '92%' }} /></div>
                      <div className="stat-line"><span style={{ width: activeProductTab === 0 ? '76%' : '84%' }} /></div>
                      <div className="stat-line"><span style={{ width: activeProductTab === 0 ? '82%' : '90%' }} /></div>
                    </div>

                    <div className="timeline-card">
                      <strong>Best For</strong>
                      <ul>
                        {activeProductTab === 0 ? (
                          <>
                            <li><FeatureIcon /> Posters and ad creatives</li>
                            <li><FeatureIcon /> Text-heavy visual assets</li>
                            <li><FeatureIcon /> Image refinement and composition</li>
                          </>
                        ) : (
                          <>
                            <li><FeatureIcon /> Story-led video generation</li>
                            <li><FeatureIcon /> Synchronized audio-visual outputs</li>
                            <li><FeatureIcon /> Lip-sync and camera motion control</li>
                          </>
                        )}
                      </ul>
                    </div>

                    <div className="control-card">
                      <strong>Outcome</strong>
                      <ul>
                        <li><FeatureIcon /> Better creative consistency</li>
                        <li><FeatureIcon /> Faster production turnaround</li>
                        <li><FeatureIcon /> Easier solution evaluation through Techjockey</li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section dark scene-expand">
          <div className="container">
            <div className="section-head center reveal">
              <h2>See the creative experience in motion</h2>
              <p>
                Explore image and video generation examples to understand how Seedream and Seedance can support design, content, and campaign production workflows.
              </p>
            </div>

            <div className="media-grid">
              <div className="media-card zoom-reveal clip-reveal">
                <video autoPlay muted loop playsInline preload="auto">
                  <source src={videos[0]} type="video/mp4" />
                </video>
                <div className="overlay">
                  <strong>Seedream 4.5</strong>
                  <span>High-fidelity image generation with strong prompt alignment and structured composition.</span>
                </div>
              </div>

              <div className="media-stack">
                <div className="media-mini zoom-reveal clip-reveal">
                  <video autoPlay muted loop playsInline preload="auto">
                    <source src={videos[2]} type="video/mp4" />
                  </video>
                  <div className="overlay">
                    <strong>Audio-Visual Sync</strong>
                    <span>Generate synchronized audio and video in one workflow.</span>
                  </div>
                </div>

                <div className="media-mini zoom-reveal clip-reveal">
                  <video autoPlay muted loop playsInline preload="auto">
                    <source src={videos[3]} type="video/mp4" />
                  </video>
                  <div className="overlay">
                    <strong>Text-to-Image Flow</strong>
                    <span>Move quickly from prompt to visual concept exploration.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section warm">
          <div className="container">
            <div className="section-head center reveal">
              <h2>How Techjockey helps you evaluate the right fit</h2>
              <p>
                Get guided product discovery, free demo assistance, and a simplified buying journey tailored to your team’s creative or production requirements.
              </p>
            </div>

            <div className="steps-grid stagger-parent">
              <div className="step-card">
                <div className="step-number">01</div>
                <h3>Understand your use case</h3>
                <p>We help identify whether your priority is AI image creation, AI video generation, or a combined multimodal workflow.</p>
              </div>
              <div className="step-card">
                <div className="step-number">02</div>
                <h3>Arrange a free demo</h3>
                <p>See Seedream and Seedance in action so your team can evaluate quality, controls, and practical business fit.</p>
              </div>
              <div className="step-card">
                <div className="step-number">03</div>
                <h3>Buy with confidence</h3>
                <p>Compare capabilities, pricing direction, and implementation needs before making the final decision.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section light" id="pricing">
          <div className="container">
            <div className="section-head center reveal">
              <h2>Pricing snapshot</h2>
              <p>Review the pricing direction and included capabilities for each ByteDance model.</p>
            </div>

            <div className="pricing-grid">
              {pricing.map((plan, index) => (
                <div key={plan.name} className={`price-card reveal ${index === 1 ? 'featured' : ''}`}>
                  <div className="price-top">
                    <div className="price-name">{plan.name}</div>
                    <div className="price-badge">{index === 0 ? 'Image Generation' : 'Video Generation'}</div>
                  </div>
                  <div className="price-amount">{plan.price || 'Contact for pricing'}</div>
                  <p className="price-note">
                    {index === 0
                      ? 'Connect with Techjockey to understand pricing and demo availability for Seedream 4.5.'
                      : 'Starting price shown for Seedance 1.5 Pro. Final pricing may vary by usage and requirement.'}
                  </p>
                  <ul className="price-list">
                    {plan.includes.map((item, itemIndex) => (
                      <li key={itemIndex}>
                        <FeatureIcon />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <div className="price-cta">
                    <a href="#demo-form" className="animated-cta btn-magnetic">
                      Get Pricing Help
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section soft">
          <div className="container">
            <div className="section-head center reveal">
              <h2>What users are saying</h2>
              <p>Real feedback from professionals exploring AI-powered visual and video production solutions.</p>
            </div>

            <div className="testimonials-grid">
              {testimonials.slice(0, 3).map((item, index) => (
                <div key={index} className={`testimonial-card reveal ${activeSlide % 3 === index ? 'active' : ''}`}>
                  <p className="testimonial-quote">“{item.quote}”</p>
                  <div className="testimonial-user">
                    <div className="avatar">{initials(item.author)}</div>
                    <div>
                      <strong>{item.author}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div
export default LandingPage;