import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#b3713f';
  const primary = '#b3713f';
  const bodyBg = '#ffffff';

  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const pageRef = useRef(null);

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

  const seedreamFeatures = [
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

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = resolve;
        s.onerror = reject;
        document.body.appendChild(s);
      });

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const gsap = window.gsap;
          const ScrollTrigger = window.ScrollTrigger;
          gsap.registerPlugin(ScrollTrigger);

          const existingGlow = document.querySelector('.cursor-glow');
          const glow = existingGlow || document.createElement('div');
          if (!existingGlow) {
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
            if (el.dataset.splitDone) return;
            const text = el.textContent;
            el.dataset.splitDone = '1';
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
            if (btn.dataset.magneticDone) return;
            btn.dataset.magneticDone = '1';
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
                el.textContent =
                  prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
              },
            });
          });
        });
      });
    };

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/SplitText.min.js'),
    ]).then(initGSAP).catch(() => {});

    return () => observer.disconnect();
  }, [accent, primary]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => e.preventDefault();

  const renderIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <circle cx="12" cy="12" r="11" fill={`${accent}1A`} stroke={accent} />
      <path d="M8 12.5l2.5 2.5L16.5 9" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const getInitials = (name) =>
    name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2);

  const css = `
    :root{--accent:${accent};--primary:${primary};--accent-glow:rgba(179,113,63,0.12)}
    *{box-sizing:border-box} html{scroll-behavior:smooth}
    body{margin:0;background:${bodyBg};color:#111827;font-family:Inter,sans-serif}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .lp{background:${bodyBg};overflow:hidden}
    .container{width:min(1200px,calc(100% - 40px));margin:0 auto}
    .section{padding:88px 0;position:relative}
    .section-white{background:#ffffff}
    .section-tint{background:#f8fafc}
    .section-dark{background:#111827;color:#fff}
    .section-lines::before,.section-lines::after{content:'';position:absolute;pointer-events:none;border-color:rgba(179,113,63,.12)}
    .section-lines::before{inset:24px 24px auto auto;width:180px;height:180px;border-top:1px solid;border-right:1px solid}
    .section-lines::after{inset:auto auto 24px 24px;width:140px;height:140px;border-left:1px solid;border-bottom:1px solid}
    .nav{position:sticky;top:0;z-index:50;background:rgba(17,24,39,.86);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand{font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:20px;color:#fff;line-height:1.2}
    .gradient-text{background:linear-gradient(135deg,${accent} 0%,${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:13px 22px;border-radius:12px;background:${accent};color:#fff;font-weight:800;border:1px solid ${accent};transition:transform .25s ease,box-shadow .25s ease,background .25s ease;white-space:nowrap}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(179,113,63,.28);background:${primary}}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:13px 22px;border-radius:12px;border:1px solid rgba(255,255,255,.24);color:#fff;font-weight:700;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .ghost-btn:hover{transform:translateY(-2px);background:rgba(255,255,255,.06);box-shadow:0 10px 24px rgba(0,0,0,.18)}
    .hero{padding:80px 0 70px;position:relative;color:#fff;background:#0b0e13}
    .hero::before{content:'';position:absolute;inset:0;background:radial-gradient(circle at 20% 20%, rgba(179,113,63,.22), transparent 30%),radial-gradient(circle at 80% 30%, rgba(179,113,63,.12), transparent 24%),linear-gradient(135deg,#0b0e13 0%,#111827 100%)}
    .hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.1fr .9fr;gap:34px;align-items:center}
    .hero-copy h1{font-family:'Plus Jakarta Sans',sans-serif;font-size:54px;line-height:1.02;letter-spacing:-.03em;margin:0 0 20px;font-weight:800;max-width:720px}
    .hero-copy p{font-size:18px;line-height:1.75;color:rgba(255,255,255,.8);max-width:700px;margin:0}
    .hero-support{margin-top:14px}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:26px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid rgba(179,113,63,.35);color:#e5e7eb;font-size:13px;font-weight:600}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center}
    .hero-form{width:100%;max-width:460px;padding:28px;border-radius:24px;background:rgba(255,255,255,.08);backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.14);box-shadow:0 20px 60px rgba(0,0,0,.35)}
    .hero-form h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;margin:0 0 8px}
    .hero-form p{margin:0 0 20px;color:rgba(255,255,255,.75);font-size:14px;line-height:1.6}
    .field-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .field{display:flex;flex-direction:column;gap:8px}
    .field label{font-size:13px;color:#e5e7eb;font-weight:600}
    .field input{width:100%;padding:14px 14px;border-radius:12px;border:1px solid rgba(255,255,255,.14);background:rgba(255,255,255,.06);color:#fff;outline:none;transition:border-color .2s ease,box-shadow .2s ease}
    .field input:focus{border-color:${accent};box-shadow:0 0 0 3px rgba(179,113,63,.18)}
    .full{grid-column:1/-1}
    .eyebrow{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:999px;background:${accent}14;border:1px solid ${accent}3d;color:${accent};font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
    .metrics-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .metric-card,.card{background:#fff;border:1px solid #e5e7eb;border-radius:22px;box-shadow:0 10px 35px rgba(2,8,23,.06)}
    .metric-card{padding:24px}
    .metric-label{font-size:13px;color:#6b7280;margin-bottom:6px}
    .metric-value{font-family:'Plus Jakarta Sans',sans-serif;font-size:34px;font-weight:800;color:#111827}
    .metric-note{font-size:14px;color:#4b5563;line-height:1.6}
    .sec-head{text-align:center;max-width:860px;margin:0 auto 42px}
    .sec-head h2{font-family:'Plus Jakarta Sans',sans-serif;font-size:40px;line-height:1.1;margin:14px 0 14px}
    .sec-head p{margin:0;color:#4b5563;font-size:17px;line-height:1.75}
    .split-panel{display:grid;grid-template-columns:1fr 1fr;gap:52px;align-items:center}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:26px;border:1px solid #e5e7eb;background:#fff;box-shadow:0 22px 70px rgba(15,23,42,.12)}
    .browser-top{display:flex;gap:8px;padding:14px 16px;border-bottom:1px solid #e5e7eb;background:#f8fafc}
    .dot{width:10px;height:10px;border-radius:50%;background:#d1d5db}
    .visual-shell{min-height:420px;position:relative;padding:24px;background:linear-gradient(135deg, rgba(179,113,63,.14), rgba(17,24,39,.02));display:grid;grid-template-columns:1.2fr .8fr;gap:18px}
    .visual-main,.visual-side,.ui-card{border-radius:18px}
    .visual-main{background:linear-gradient(180deg,#fff 0%,#f7f2ee 100%);padding:18px;display:grid;grid-template-rows:auto 1fr auto;gap:16px}
    .visual-line{height:10px;border-radius:999px;background:linear-gradient(90deg, rgba(179,113,63,.85), rgba(179,113,63,.25))}
    .visual-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
    .thumb{min-height:112px;border-radius:16px;background:linear-gradient(135deg, rgba(179,113,63,.18), rgba(17,24,39,.08));border:1px solid rgba(179,113,63,.18)}
    .visual-side{display:grid;gap:14px}
    .ui-card{padding:16px;background:#111827;color:#fff;border:1px solid rgba(255,255,255,.08);box-shadow:0 10px 30px rgba(0,0,0,.16)}
    .ui-card small{display:block;color:rgba(255,255,255,.65);margin-bottom:8px}
    .desc-bar{border-left:3px solid ${accent};padding-left:18px;margin:18px 0 22px}
    .desc-bar p{margin:0;color:#4b5563;line-height:1.8;font-size:17px}
    .feature-list{display:grid;gap:14px}
    .feature-item{display:grid;grid-template-columns:auto 1fr;gap:14px;padding:16px;border-radius:18px;background:#fff;border:1px solid #e5e7eb;transition:transform .25s ease,box-shadow .25s ease}
    .feature-item:hover,.hover-lift:hover{transform:translateY(-6px);box-shadow:0 16px 40px rgba(15,23,42,.10)}
    .feature-item h4{font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;margin:0 0 6px}
    .feature-item p{margin:0;color:#4b5563;line-height:1.7;font-size:15px}
    .pin-layout{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:stretch}
    .video-wall{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
    .video-card{overflow:hidden;border-radius:22px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 14px 40px rgba(15,23,42,.08)}
    .video-card video{width:100%;height:240px;object-fit:cover;display:block}
    .video-caption{padding:14px 16px;font-weight:700;color:#111827}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
    .pricing-card{padding:28px;border-radius:24px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 18px 55px rgba(15,23,42,.08);position:relative}
    .pricing-card.highlight{border-color:${accent};box-shadow:0 22px 60px rgba(179,113,63,.14)}
    .badge-green{display:inline-flex;padding:7px 12px;border-radius:999px;background:#e8f7ee;color:#15803d;font-size:12px;font-weight:800;margin-bottom:14px}
    .plan-name{font-family:'Plus Jakarta Sans',sans-serif;font-size:26px;line-height:1.2;margin:0 0 8px}
    .price-row{display:flex;align-items:end;gap:10px;flex-wrap:wrap;margin:8px 0 18px}
    .price{font-family:'Plus Jakarta Sans',sans-serif;font-size:38px;font-weight:800;color:#111827}
    .old-price{text-decoration:line-through;color:#9ca3af;font-size:16px}
    .muted{color:#6b7280;font-size:15px;line-height:1.7}
    .checklist{display:grid;gap:12px;margin:20px 0 26px}
    .checklist .item{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;color:#374151;font-size:15px;line-height:1.7}
    .testimonial-grid{display:grid;grid-template-columns:320px 1fr;gap:24px;align-items:stretch}
    .testimonial-rail{display:grid;gap:14px}
    .mini-quote{padding:18px;border-radius:18px;background:#fff;border:1px solid #e5e7eb;color:#374151;font-size:14px;line-height:1.6}
    .testimonial-stage{overflow:hidden;position:relative;border-radius:28px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 18px 55px rgba(15,23,42,.08)}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-slide{min-width:100%;padding:42px}
    .quote-mark{font-size:64px;line-height:1;color:${accent};font-family:'Plus Jakarta Sans',sans-serif}
    .testimonial-slide p{font-size:22px;line-height:1.75;color:#111827;margin:8px 0 26px}
    .author-row{display:flex;align-items:center;gap:14px}
    .avatar{width:54px;height:54px;border-radius:50%;background:${accent};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800}
    .author-meta strong{display:block;font-size:17px}
    .author-meta span{display:block;font-size:14px;color:#6b7280}
    .stars{color:#d4a017;font-size:18px;letter-spacing:2px;margin-bottom:10px}
    .dots{display:flex;gap:8px;justify-content:center;padding:0 0 26px}
    .dots button{width:10px;height:10px;border-radius:999px;border:none;background:#d1d5db;cursor:pointer;transition:all .25s ease}
    .dots button.active{width:28px;background:${accent}}
    .footer{background:#111827;color:#fff;padding:34px 0}
    .footer-grid{display:grid;grid-template-columns:1.2fr .9fr .9fr;gap:24px;align-items:start}
    .footer p,.footer a{color:rgba(255,255,255,.72);font-size:14px}
    .footer strong{color:#fff}
    .socials{display:flex;gap:10px;margin-top:12px}
    .socials a{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center;transition:transform .25s ease,background .25s ease}
    .socials a:hover{transform:translateY(-2px);background:rgba(255,255,255,.06)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}
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
    .hero-cinematic-bg{transform:scale(1.06);transform-origin:center center;will-change:transform}
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
    .text-reveal-mask{overflow:hidden;display:block}
    .text-reveal-inner{display:block;transform:translateY(110%);will-change:transform}
    .cursor-glow{position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);background:radial-gradient(circle,var(--accent-glow) 0%,transparent 70%);transition:opacity .3s ease}
    .glass-card{background:rgba(255,255,255,.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.1);border-radius:20px}
    .noise-overlay::after{content:'';position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;opacity:.4;z-index:1}
    @media (max-width: 1024px){
      .hero-grid,.split-panel,.pin-layout,.testimonial-grid,.footer-grid,.pricing-grid{grid-template-columns:1fr}
      .metrics-strip,.video-wall{grid-template-columns:1fr}
      .nav-inner{grid-template-columns:1fr auto auto}
      .hero-copy h1{font-size:54px}
      .hero-visual{min-height:auto}
    }
    @media (max-width: 640px){
      .container{width:min(100% - 24px,1200px)}
      .nav-inner{grid-template-columns:1fr;justify-items:start}
      .hero-copy h1{font-size:54px}
      .field-grid{grid-template-columns:1fr}
      .section{padding:68px 0}
      .sec-head h2{font-size:34px}
      .testimonial-slide{padding:28px}
      .testimonial-slide p{font-size:18px}
    }
  `;

  return (
    <div className="lp" ref={pageRef}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span>Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span>
          </div>
          <img
            src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
            height="28px"
            alt="Techjockey"
          />
          <a href="#lead-form" className="animated-cta">
            Get Free Consultation
          </a>
        </div>
      </nav>

      <section className="hero noise-overlay">
        <div
          className="depth-background hero-cinematic-bg"
          data-depth="0.4"
          style={{
            background:
              'radial-gradient(circle at 15% 20%, rgba(179,113,63,.26), transparent 28%), radial-gradient(circle at 82% 14%, rgba(255,255,255,.08), transparent 18%), radial-gradient(circle at 74% 72%, rgba(179,113,63,.18), transparent 24%)',
          }}
        />
        <div className="container hero-grid">
          <div className="hero-copy depth-foreground" data-depth="0.15">
            <span className="eyebrow reveal">AI Image Generation and AI Video Generation</span>
            <h1 className="split-text reveal reveal-delay-1">
              Create High-Quality AI Images & Videos with ByteDance Generative Models
            </h1>
            <p className="reveal reveal-delay-2">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>
            <p className="hero-support reveal reveal-delay-3">
              From text prompts, images, or scripts, generate professional visuals and videos with powerful multimodal AI systems.
            </p>

            <div className="chip-row reveal reveal-delay-3">
              {[
                'AI Image Generation',
                'AI Video Generation',
                'Text-to-Video',
                'High-Resolution Output',
                'Audio-Visual Synchronization',
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
              <a href="#pricing" className="ghost-btn">
                Generate with AI
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-form glass-card float-ambient" id="lead-form">
              <h3>Get Free Consultation</h3>
              <p>
                For professionals, creative teams, marketers, designers, video producers, and enterprises creating high-quality visual content
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
                    <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Enter company" />
                  </div>
                  <div className="field full">
                    <button type="submit" className="animated-cta" style={{ width: '100%' }}>
                      Get Free Consultation
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint section-lines clip-reveal">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow reveal">Proof Strategy</span>
            <h2 className="reveal">
              Trust signals focused on <span className="gradient-text">real proof</span>
            </h2>
            <p className="reveal">
              Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped teams clearly understand the capabilities before making a decision.
            </p>
          </div>
          <div className="metrics-strip stagger-parent">
            <div className="metric-card hover-lift">
              <div className="metric-label">Pricing proof</div>
              <div className="metric-value" data-count="1000" data-prefix="$" data-suffix="+">
                $0+
              </div>
              <div className="metric-note">Seedance 1.5 Pro (AI Video Generation) Starting at $1,000/month/</div>
            </div>
            <div className="metric-card hover-lift">
              <div className="metric-label">Image quality range</div>
              <div className="metric-value" data-count="4" data-suffix="K">
                0K
              </div>
              <div className="metric-note">High-resolution image generation up to 1K–4K resolution with strong visual fidelity</div>
            </div>
            <div className="metric-card hover-lift">
              <div className="metric-label">Inference speed</div>
              <div className="metric-value" data-count="10" data-suffix="×">
                0×
              </div>
              <div className="metric-note">Optimized inference pipeline significantly improves generation speed</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white section-lines">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow reveal">How it works</span>
            <h2 className="reveal">
              Built for <span className="gradient-text">high-quality visual content</span> creation
            </h2>
            <p className="reveal">
              Seedream 4.5 and Seedance 1.5 Pro help teams move from prompts, images, or scripts to polished image and video outputs with multimodal intelligence.
            </p>
          </div>

          <div className="pin-layout pin-scene">
            <div className="card hover-lift" style={{ padding: '28px' }} data-depth="0.15">
              <span className="eyebrow">01</span>
              <h3 style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '28px', margin: '16px 0 12px' }}>
                Seedream 4.5
              </h3>
              <p className="muted">
                Produce high-resolution, high-fidelity images from text prompts and visual inputs.
              </p>
            </div>
            <div className="card hover-lift" style={{ padding: '28px' }} data-depth="0.25">
              <span className="eyebrow">02</span>
              <h3 style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '28px', margin: '16px 0 12px' }}>
                Seedance 1.5 Pro
              </h3>
              <p className="muted">
                Enable synchronized creation of video and sound together with native audio-visual generation.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint section-lines">
        <div className="container">
          <div className="split-panel">
            <div className="scene-expand" data-depth="0.2">
              <div className="browser-frame zoom-reveal">
                <div className="browser-top">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <div className="visual-shell">
                  <div className="visual-main">
                    <div className="visual-line" style={{ width: '62%' }} />
                    <div className="visual-grid">
                      <div className="thumb float-ambient" />
                      <div className="thumb float-rotate" />
                      <div className="thumb float-drift" />
                      <div className="thumb float-pulse" />
                    </div>
                    <div className="visual-line" style={{ width: '86%' }} />
                  </div>
                  <div className="visual-side card-3d-stack">
                    <div className="ui-card">
                      <small>Seedream 4.5</small>
                      <strong>High-Resolution Output</strong>
                    </div>
                    <div className="ui-card">
                      <small>Seedream 4.5</small>
                      <strong>Superior Typographic Rendering</strong>
                    </div>
                    <div className="ui-card">
                      <small>Seedream 4.5</small>
                      <strong>Strong Structural Fidelity</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div data-depth="0.15">
              <span className="eyebrow reveal">Feature 1</span>
              <h2 className="reveal" style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '40px', lineHeight: '1.1', margin: '16px 0' }}>
                AI Image Generation with <span className="gradient-text">Seedream 4.5</span>
              </h2>
              <div className="desc-bar reveal">
                <p>
                  Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.
                </p>
              </div>
              <div className="feature-list stagger-parent">
                {seedreamFeatures.map((feature, i) => (
                  <div className="feature-item hover-lift" key={i}>
                    <div>{renderIcon()}</div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: '24px' }}>
                <a href="#lead-form" className="animated-cta btn-magnetic">
                  Get Free Consultation
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white section-lines clip-reveal">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow reveal">Gallery</span>
            <h2 className="reveal">
              AI video gallery with <span className="gradient-text">cinematic outputs</span>
            </h2>
            <p className="reveal">
              Native audio + video generation, synchronized storytelling, and cinematic camera movement make the product experience feel like a production-ready workflow.
            </p>
          </div>

          <div className="video-wall stagger-parent">
            {[
              'https://cdn.web.imagine.art/imagine-one/cdge-v2-prompt/Seedance/seedance-hero.mp4',
              'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4',
              'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ConsistentCharacters.mp4',
              'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiShot.mp4',
            ].map((video, i) => (
              <div className="video-card hover-lift scene-expand" key={i}>
                <div className="zoom-reveal">
                  <video autoPlay muted loop playsInline preload="auto">
                    <source src={video} type="video/mp4" />
                  </video>
                </div>
                <div className="video-caption">
                  {i === 0 && 'Text-to-Video Generation'}
                  {i === 1 && 'Audio-Visual Synchronization'}
                  {i === 2 && 'Multilingual Lip-Sync'}
                  {i === 3 && 'Cinematic Camera Control'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-tint section-lines">
        <div className="container">
          <div className="split-panel">
            <div data-depth="0.15">
              <span className="eyebrow reveal">Additional Feature</span>
              <h2 className="reveal" style={{ fontFamily: 'Plus Jakarta Sans,sans-serif', fontSize: '40px', lineHeight: '1.1', margin: '16px 0' }}>
                AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro</span> by Bytedance
              </h2>
              <div className="desc-bar reveal">
                <p>
                  Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.
                </p>
              </div>
              <div className="feature-list stagger-parent">
                {seedanceFeatures.map((feature, i) => (
                  <div className="feature-item hover-lift" key={i}>
                    <div>{renderIcon()}</div>
                    <div>
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="scene-expand" data-depth="0.25">
              <div className="browser-frame zoom-reveal" style={{ background: '#0a0a0a' }}>
                <div className="browser-top" style={{ background: '#111827', borderBottomColor: 'rgba(255,255,255,.08)' }}>
                  <span className="dot" style={{ background: '#374151' }} />
                  <span className="dot" style={{ background: '#374151' }} />
                  <span className="dot" style={{ background: '#374151' }} />
                </div>
                <div
                  className="visual-shell"
                  style={{
                    background:
                      'linear-gradient(135deg, rgba(17,24,39,1), rgba(31,41,55,1))',
                  }}
                >
                  <div className="visual-main" style={{ background: 'linear-gradient(180deg,#0f172a 0%,#1f2937 100%)', color: '#fff' }}>
                    <div className="visual-line" style={{ width: '52%', background: `linear-gradient(90deg, ${accent}, rgba(255,255,255,.15))` }} />
                    <div style={{ borderRadius: '18px', overflow: 'hidden', minHeight: '210px' }}>
                      <video autoPlay muted loop playsInline preload="auto" style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}>
                        <source src="https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ReferenceControl.mp4" type="video/mp4" />
                      </video>
                    </div>
                    <div className="visual-line" style={{ width: '78%', background: `linear-gradient(90deg, rgba(255,255,255,.22), ${accent})` }} />
                  </div>
                  <div className="visual-side card-3d-stack">
                    <div className="ui-card">
                      <small>Seedance 1.5 Pro</small>
                      <strong>Text-to-Video Generation</strong>
                    </div>
                    <div className="ui-card">
                      <small>Seedance 1.5 Pro</small>
                      <strong>Audio-Visual Synchronization</strong>
                    </div>
                    <div className="ui-card">
                      <small>Seedance 1.5 Pro</small>
                      <strong>10× Faster Inference</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white section-lines" id="pricing">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow reveal">Pricing</span>
            <h2 className="reveal">
              Choose the right <span className="gradient-text">generation workflow</span>
            </h2>
            <p className="reveal">
              Pricing details are shown only where available from the provided product content.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card">
              <div className="badge-green">Included capabilities</div>
              <h3 className="plan-name">Seedream 4.5 (AI Image Generation)</h3>
              <div className="price-row">
                <div className="price">Contact for pricing</div>
              </div>
              <p className="muted">High-performance multimodal image generation for high-resolution, high-fidelity visual creation.</p>
              <div className="checklist">
                {[
                  'High-resolution image generation (up to 4K quality)',
                  'Text-to-image & multimodal image editing',
                  'Multi-image composition for complex visuals',
                  'Enhanced typographic rendering for posters, ads & text-heavy designs',
                ].map((item, i) => (
                  <div className="item" key={i}>
                    {renderIcon()}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a href="#lead-form" className="animated-cta" style={{ width: '100%' }}>
                Get Free Consultation
              </a>
            </div>

            <div className="pricing-card highlight">
              <div className="badge-green">Starting price available</div>
              <h3 className="plan-name">Seedance 1.5 Pro (AI Video Generation)</h3>
              <div className="price-row">
                <div className="price">Starting at $1,000/month/</div>
              </div>
              <p className="muted">Native audio + video generation with synchronized output for faster creative production.</p>
              <div className="checklist">
                {[
                  'Text-to-video generation with cinematic output',
                  'Native audio + video generation (synchronized)',
                  'Multilingual lip-sync capabilities',
                  'Fast inference for quicker video production',
                ].map((item, i) => (
                  <div className="item" key={i}>
                    {renderIcon()}
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a href="#lead-form" className="animated-cta" style={{ width: '100%' }}>
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-tint section-lines">
        <div className="container">
          <div className="sec-head">
            <span className="eyebrow reveal">Testimonials</span>
            <h2 className="reveal">
              What creative teams say about <span className="gradient-text">Seedream and Seedance</span>
            </h2>
            <p className="reveal">
              Feedback from creative and marketing professionals evaluating AI image generation and AI video generation.
            </p>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial-rail stagger-parent">
              {testimonials.slice(0, 3).map((t, i) => (
                <div className="mini-quote hover-lift" key={i}>
                  <div className="stars">★★★★★</div>
                  {t.quote}
                </div>
              ))}
            </div>

            <div className="testimonial-stage">
              <div
                className="testimonial-track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div className="testimonial-slide" key={i}>
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p>{t.quote}</p>
                    <div className="author-row">
                      <div className="avatar">{getInitials(t.author)}</div>
                      <div className="author-meta">
                        <strong>{t.author}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="dots">
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
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <p style={{ marginTop: '14px' }}>support@techjockey.com</p>
            <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>

          <div>
            <strong>Legal</strong>
            <div style={{ display: 'grid', gap: '10px', marginTop: '14px' }}>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-of-use">Terms</a>
            </div>
          </div>

          <div>
            <strong>Connect</strong>
            <div className="socials">
              <a href="https://www.facebook.com/techjockey/" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6h1.7V4.8c-.3 0-1.3-.1-2.5-.1-2.4 0-4.1 1.5-4.1 4.3V11H7.5v3h2.7v8h3.3z"/></svg>
              </a>
              <a href="https://www.instagram.com/techjockey/" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1012 16.5 3.5 3.5 0 0012 9.5zm5.75-3.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"/></svg>
              </a>
              <a href="https://x.com/TechjockeyInfo" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.2l7.3-8.4L1 2h6.3l4.4 5.8L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/techjockey-infotech-pvt-ltd" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5A1.56 1.56 0 105.38 6.94 1.56 1.56 0 006.94 8.5zM5.5 9.75h2.88V18H5.5zm4.69 0h2.76v1.13h.04a3 3 0 012.69-1.48c2.88 0 3.41 1.89 3.41 4.35V18h-2.88v-3.79c0-.9 0-2.06-1.26-2.06s-1.45.98-1.45 1.99V18h-2.88z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;