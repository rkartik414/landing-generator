import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#e4292b';
  const primary = '#e4292b';
  const bodyBg = '#ffffff';

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const rootRef = useRef(null);

  const ctas = [
    {
      text: 'Book Demo',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Talk to Expert',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Get Price',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
  ];

  const testimonials = [
    {
      quote:
        'Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.',
      author: 'Amit Kapoor',
      role: 'IT Manager',
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      author: 'Saurav Singh',
      role: 'Head of Operations',
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      author: 'Shrimi Manchanda',
      role: 'Operations Manager',
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      author: 'Shweta Thakur',
      role: 'Senior System Administrator',
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      author: 'Narinder Sahni',
      role: 'IT Head',
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
      new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = resolve;
        s.onerror = resolve;
        document.body.appendChild(s);
      });

    const initCinematic = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
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

      const moveGlow = (e) => {
        gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
      };
      window.addEventListener('mousemove', moveGlow);

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
        const text = el.getAttribute('data-text') || el.textContent;
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

      return () => {
        window.removeEventListener('mousemove', moveGlow);
      };
    };

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          initCinematic();
        });
      });
    };

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/SplitText.min.js'),
    ]).then(initGSAP);

    return () => observer.disconnect();
  }, [accent, primary]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};--text:#111827;--muted:#4b5563;--border:#e5e7eb;--soft:#f8fafc;--accent-glow:rgba(228,41,43,.12)}
    *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;background:${bodyBg};color:var(--text);font-family:Inter,sans-serif}
    a{text-decoration:none;color:inherit} img{max-width:100%}
    .lp{background:${bodyBg};overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:88px 0;position:relative}
    .section-alt{background:#f8fafc}
    .section-white{background:#fff}
    h1,h2,h3{font-family:'Plus Jakarta Sans',sans-serif;margin:0 0 14px;line-height:1.08}
    h1{font-size:clamp(48px,6vw,68px);font-weight:800}
    h2{font-size:clamp(32px,4vw,42px);font-weight:800}
    h3{font-size:20px;font-weight:700}
    p{margin:0;color:var(--muted);line-height:1.7}
    .gradient-text{background:linear-gradient(135deg,var(--accent) 0%,var(--accent) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .nav{position:sticky;top:0;z-index:50;background:rgba(17,24,39,.84);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:18px;padding:14px 0}
    .brand{display:flex;align-items:center;gap:10px;color:#fff;font-weight:800}
    .brand-badge{font-weight:800;font-size:20px;color:var(--accent)}
    .tj-wrap{display:flex;align-items:center}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;border-radius:12px;background:var(--accent);color:#fff;font-weight:700;border:1px solid transparent;transition:.25s transform,.25s box-shadow,.25s background;white-space:nowrap}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(228,41,43,.22);background:#c91f22}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;border-radius:12px;background:#fff;color:var(--text);font-weight:700;border:1px solid var(--border);transition:.25s transform,.25s box-shadow}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 12px 24px rgba(17,24,39,.08)}
    .hero{background:#f8fafc;padding:84px 0 70px;position:relative}
    .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center}
    .eyebrow{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;background:rgba(228,41,43,.08);border:1px solid rgba(228,41,43,.18);color:var(--accent);font-weight:700;font-size:13px;margin-bottom:18px}
    .hero-copy p{font-size:18px;max-width:640px}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(228,41,43,.18);background:#fff;color:#374151;font-size:13px;font-weight:600;box-shadow:0 8px 18px rgba(17,24,39,.05)}
    .chip svg{width:15px;height:15px;color:var(--accent)}
    .hero-visual{min-height:520px;position:relative;display:flex;align-items:center;justify-content:center}
    .hero-cinematic-bg{position:absolute;inset:0;border-radius:30px;background:
      radial-gradient(circle at 20% 20%, rgba(228,41,43,.18), transparent 34%),
      radial-gradient(circle at 80% 18%, rgba(228,41,43,.12), transparent 26%),
      linear-gradient(135deg,#ffffff 0%,#f3f6fb 55%,#eef2f7 100%);
      border:1px solid #e6ebf2;box-shadow:0 30px 80px rgba(17,24,39,.10)}
    .grid-lines{position:absolute;inset:0;border-radius:30px;background-image:linear-gradient(rgba(17,24,39,.04) 1px,transparent 1px),linear-gradient(90deg,rgba(17,24,39,.04) 1px,transparent 1px);background-size:32px 32px}
    .dashboard-shell{position:relative;width:100%;max-width:540px;z-index:2}
    .dashboard-main{background:#fff;border:1px solid #e8edf3;border-radius:24px;padding:18px;box-shadow:0 24px 60px rgba(17,24,39,.12)}
    .dash-top{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
    .dot-row{display:flex;gap:6px}
    .dot{width:9px;height:9px;border-radius:50%;background:#e5e7eb}
    .dash-pill{padding:8px 12px;border-radius:999px;background:rgba(228,41,43,.08);color:var(--accent);font-size:12px;font-weight:700}
    .dash-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:14px}
    .panel{border-radius:18px;border:1px solid #edf1f5;background:#f8fafc;padding:14px}
    .panel-title{font-size:13px;font-weight:700;color:#111827;margin-bottom:10px}
    .mail-list{display:grid;gap:10px}
    .mail-item{background:#fff;border:1px solid #edf1f5;border-radius:14px;padding:12px}
    .mail-item strong,.mini-card strong{display:block;font-size:13px;color:#111827;margin-bottom:5px}
    .mail-item span,.mini-card span{font-size:12px;color:#6b7280;line-height:1.5;display:block}
    .side-stack{display:grid;gap:14px}
    .mini-card{background:#fff;border:1px solid #edf1f5;border-radius:16px;padding:14px}
    .stat-float,.stat-float-2,.stat-float-3{position:absolute;z-index:3;background:#fff;border:1px solid #e8edf3;border-radius:16px;padding:12px 14px;box-shadow:0 18px 40px rgba(17,24,39,.10)}
    .stat-float{left:-10px;top:26px}
    .stat-float-2{right:-6px;bottom:40px}
    .stat-float-3{right:34px;top:-18px}
    .stat-label{font-size:11px;color:#6b7280;margin-bottom:4px}
    .stat-value{font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;color:#111827}
    .orb{position:absolute;border-radius:50%;filter:blur(6px);opacity:.7}
    .orb-1{width:110px;height:110px;background:rgba(228,41,43,.14);left:-24px;bottom:48px}
    .orb-2{width:84px;height:84px;background:rgba(228,41,43,.12);right:44px;top:48px}
    .metrics-strip{padding:28px 0;background:#fff;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
    .metrics-grid{display:grid;grid-template-columns:1fr 1fr 1fr;gap:16px}
    .metric-card{padding:22px;border:1px solid var(--border);border-radius:18px;background:#fff;box-shadow:0 12px 28px rgba(17,24,39,.05)}
    .metric-card h3{font-size:28px}
    .metric-card p{font-size:14px}
    .section-head{max-width:760px;margin:0 auto 34px;text-align:center}
    .spotlight{display:grid;grid-template-columns:1.05fr .95fr;gap:26px;align-items:stretch;margin-top:22px}
    .spotlight-card{background:#fff;border:1px solid var(--border);border-radius:24px;padding:28px;box-shadow:0 18px 40px rgba(17,24,39,.07);position:relative;overflow:hidden}
    .spotlight-desc{margin-top:10px;max-width:640px}
    .feature-list{display:grid;gap:14px;margin-top:20px}
    .feature-row{display:grid;grid-template-columns:auto 1fr;gap:14px;padding:14px;border-radius:16px;background:#fff;border:1px solid #edf1f5}
    .icon-box{width:44px;height:44px;border-radius:12px;background:rgba(228,41,43,.1);display:flex;align-items:center;justify-content:center;color:var(--accent);flex:none}
    .small-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px;margin-top:18px}
    .small-card{background:#fff;border:1px solid var(--border);border-radius:18px;padding:18px;box-shadow:0 12px 28px rgba(17,24,39,.05)}
    .hover-lift{transition:transform .25s ease,box-shadow .25s ease}
    .hover-lift:hover{transform:translateY(-6px);box-shadow:0 18px 34px rgba(17,24,39,.09)}
    .browserish{position:relative;min-height:100%;border-radius:24px;border:1px solid #e8edf3;background:linear-gradient(180deg,#fff 0%,#f7f9fc 100%);padding:18px;box-shadow:0 20px 50px rgba(17,24,39,.08);overflow:hidden}
    .ui-head{display:flex;justify-content:space-between;align-items:center;margin-bottom:14px}
    .ui-body{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .ui-col{display:grid;gap:14px}
    .ui-box{background:#fff;border:1px solid #edf1f5;border-radius:18px;padding:16px}
    .ui-line{height:10px;border-radius:999px;background:#eef2f7;margin-bottom:10px}
    .ui-line.red{background:rgba(228,41,43,.18)}
    .integrations-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;margin-top:28px}
    .integration-pill{padding:18px 12px;border-radius:16px;border:1px solid var(--border);background:#fff;text-align:center;box-shadow:0 10px 24px rgba(17,24,39,.04);font-weight:700;color:#111827}
    .dark-band{background:#111827;color:#fff}
    .dark-band .section-head p,.dark-band p{color:#d1d5db}
    .glass-card{background:rgba(255,255,255,0.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,0.1);border-radius:20px}
    .stats-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
    .stats-grid .glass-card{padding:24px}
    .stats-grid h3{font-size:34px;color:#fff}
    .pricing-wrap{display:flex;justify-content:center}
    .pricing-card{max-width:820px;width:100%;background:#fff;border:1px solid var(--border);border-radius:28px;padding:32px;box-shadow:0 24px 60px rgba(17,24,39,.08);position:relative}
    .price-badge{display:inline-flex;padding:8px 12px;border-radius:999px;background:#eaf8ef;color:#15803d;font-weight:700;font-size:12px;margin-bottom:14px}
    .pricing-title{display:flex;justify-content:space-between;gap:14px;align-items:start;flex-wrap:wrap}
    .price-stack{display:flex;align-items:end;gap:10px;flex-wrap:wrap}
    .strike{color:#9ca3af;text-decoration:line-through;font-weight:700}
    .big-price{font-size:40px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;color:#111827}
    .feature-checks{display:grid;grid-template-columns:repeat(2,1fr);gap:12px 18px;margin:24px 0}
    .check-item{display:grid;grid-template-columns:auto 1fr;gap:10px;align-items:start}
    .check{width:20px;height:20px;border-radius:50%;background:#eaf8ef;color:#15803d;display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:800;margin-top:2px}
    .full-btn{width:100%}
    .testimonial-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:20px}
    .t-card{background:#fff;border:1px solid var(--border);border-radius:22px;padding:24px;box-shadow:0 16px 36px rgba(17,24,39,.06);height:100%}
    .quote-mark{font-size:46px;line-height:1;color:var(--accent);font-weight:800}
    .stars{color:#f59e0b;font-size:18px;letter-spacing:2px;margin:10px 0 14px}
    .author{display:flex;align-items:center;gap:12px;margin-top:18px}
    .avatar{width:46px;height:46px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800}
    .dots{display:flex;justify-content:center;gap:8px;margin-top:20px}
    .dot-btn{width:10px;height:10px;border:none;border-radius:999px;background:#d1d5db;cursor:pointer;transition:.25s}
    .dot-btn.active{width:28px;background:var(--accent)}
    .footer{background:#111827;color:#fff;padding:42px 0}
    .footer-grid{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:24px;align-items:start}
    .footer p,.footer a{color:#d1d5db}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .social{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;transition:.25s}
    .social:hover{transform:translateY(-2px);background:rgba(255,255,255,.08)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}

    /* ── CINEMATIC SYSTEM ──────────────────────────────────────────────── */
    .scene-expand{width:75%;margin:0 auto;border-radius:24px;overflow:hidden;will-change:width,border-radius}
    .scene-expand img{width:100%;height:100%;object-fit:cover;transform:scale(1.08);will-change:transform}
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
    .split-text .word{display:inline-block;overflow:hidden}
    .split-text .char{display:inline-block;will-change:transform,opacity}
    .h-scroll-track{display:flex;gap:24px;will-change:transform}
    .btn-magnetic{position:relative;transition:transform .3s cubic-bezier(.34,1.56,.64,1);display:inline-block}
    .text-reveal-mask{overflow:hidden;display:block}
    .text-reveal-inner{display:block;transform:translateY(110%);will-change:transform}
    .cursor-glow{position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);background:radial-gradient(circle,var(--accent-glow,rgba(99,102,241,.12)) 0%,transparent 70%);transition:opacity .3s ease}
    .section-overlap{margin-top:-80px;position:relative;z-index:2}
    .noise-overlay::after{content:'';position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;opacity:.4;z-index:1}

    @media (max-width: 991px){
      .hero-grid,.spotlight,.footer-grid,.metrics-grid,.stats-grid,.testimonial-grid{grid-template-columns:1fr}
      .feature-checks,.ui-body,.dash-grid,.integrations-grid,.small-grid{grid-template-columns:1fr}
      .hero-visual{min-height:460px}
      .nav-inner{grid-template-columns:1fr auto auto}
    }
    @media (max-width: 767px){
      .section,.hero{padding:64px 0}
      .container{width:min(100% - 24px,1180px)}
      .nav-inner{gap:10px}
      .animated-cta,.ghost-btn{padding:11px 16px;font-size:14px}
      .hero-actions{flex-direction:column;align-items:flex-start}
      .stat-float,.stat-float-2,.stat-float-3{transform:scale(.92)}
      .pricing-card{padding:22px}
    }
  `;

  const Icon = ({ children }) => (
    <span className="icon-box">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        {children}
      </svg>
    </span>
  );

  const visibleTestimonials = testimonials.slice(activeTestimonial, activeTestimonial + 3).concat(
    testimonials.slice(0, Math.max(0, activeTestimonial + 3 - testimonials.length))
  );

  return (
    <div className="lp" ref={rootRef}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span className="brand-badge">Zoho</span>
            <span style={{ color: '#fff', opacity: 0.9 }}>Workplace</span>
          </div>
          <div className="tj-wrap">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <a
            href={ctas[0].href}
            className="animated-cta btn-magnetic"
            target="_blank"
            rel="noreferrer"
          >
            {ctas[0].text}
          </a>
        </div>
      </nav>

      <section className="hero section">
        <div className="container hero-grid">
          <div className="hero-copy">
            <div className="eyebrow reveal">Email &amp; Collaboration Suite</div>
            <h1
              className="split-text reveal"
              data-text="Elevate Your Team’s Productivity with Zoho Workplace"
            >
              Elevate Your Team’s Productivity with Zoho Workplace
            </h1>
            <p className="reveal reveal-delay-1">
              A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified
              Communication.
            </p>

            <div className="chip-row reveal reveal-delay-2">
              {[
                'All-in-One Unified Workspace',
                'Seamless Collaboration in Real Time',
                'Work from Anywhere, Anytime',
                'AI-Powered Productivity (Zia)',
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 7L9 18l-5-5" />
                  </svg>
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions reveal reveal-delay-3">
              <a
                href={ctas[1].href}
                className="animated-cta btn-magnetic"
                target="_blank"
                rel="noreferrer"
              >
                {ctas[1].text}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-cinematic-bg noise-overlay depth-background" data-depth="0.4" />
            <div className="grid-lines depth-background" data-depth="0.4" />
            <div className="orb orb-1 float-drift float-delay-1" />
            <div className="orb orb-2 float-pulse float-delay-2" />
            <div className="dashboard-shell depth-foreground" data-depth="0.15">
              <div className="dashboard-main card-3d-stack">
                <div className="panel">
                  <div className="dash-top">
                    <div className="dot-row">
                      <span className="dot" />
                      <span className="dot" />
                      <span className="dot" />
                    </div>
                    <div className="dash-pill">Zoho Workplace</div>
                  </div>
                  <div className="dash-grid">
                    <div className="panel">
                      <div className="panel-title">Unified Communication</div>
                      <div className="mail-list">
                        <div className="mail-item">
                          <strong>Zoho Mail</strong>
                          <span>Enterprise-Grade Custom Email</span>
                        </div>
                        <div className="mail-item">
                          <strong>Zoho Cliq</strong>
                          <span>Team Chat</span>
                        </div>
                        <div className="mail-item">
                          <strong>Zoho Writer</strong>
                          <span>Collaborative Office Suite</span>
                        </div>
                      </div>
                    </div>
                    <div className="side-stack">
                      <div className="mini-card">
                        <strong>30-GB Mail Storage Per User</strong>
                        <span>Secure access for enterprises, businesses, and teams.</span>
                      </div>
                      <div className="mini-card">
                        <strong>File Storage Starts at 100 GB Per Team</strong>
                        <span>File Sharing &amp; Permissions with document management.</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="panel">
                  <div className="panel-title">Collaborate, communicate, and stay productive</div>
                  <div className="ui-line red" style={{ width: '78%' }} />
                  <div className="ui-line" style={{ width: '92%' }} />
                  <div className="ui-line" style={{ width: '66%' }} />
                </div>
                <div className="panel">
                  <div className="panel-title">Work from Anywhere, Anytime</div>
                  <div className="ui-line red" style={{ width: '60%' }} />
                  <div className="ui-line" style={{ width: '86%' }} />
                </div>
              </div>

              <div className="stat-float float-ambient">
                <div className="stat-label">Trusted by</div>
                <div className="stat-value">100,000+</div>
              </div>
              <div className="stat-float-2 float-ambient float-delay-2">
                <div className="stat-label">Anywhere Access</div>
                <div className="stat-value">42.9%</div>
              </div>
              <div className="stat-float-3 float-rotate">
                <div className="stat-label">Secure</div>
                <div className="stat-value">82.9%</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-strip section-white">
        <div className="container">
          <div className="metrics-grid stagger-parent">
            <div className="metric-card hover-lift">
              <p>Trusted by</p>
              <h3 data-count="100000" data-suffix="+">
                0
              </h3>
              <p>Businesses Globally</p>
            </div>
            <div className="metric-card hover-lift">
              <p>Social Proof</p>
              <h3>100,000+</h3>
              <p>Trusted by 100,000+ Businesses Globally</p>
            </div>
            <div className="metric-card hover-lift">
              <p>Audience</p>
              <h3>Enterprises</h3>
              <p>Businesses, and teams</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt clip-reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">FEATURES</div>
            <h2 className="reveal">Why Choose <span className="gradient-text">Zoho Workplace?</span></h2>
            <p className="reveal reveal-delay-1">
              Zoho Workplace brings everything your team needs to collaborate, communicate, and
              stay productive through a single unified platform.
            </p>
          </div>

          <div className="spotlight">
            <div className="spotlight-card reveal">
              <div className="text-reveal-mask">
                <span className="text-reveal-inner">
                  <h3>All-in-One Unified Workspace</h3>
                </span>
              </div>
              <p className="spotlight-desc">
                Access email, chat, documents, meetings, and storage in a single integrated
                platform. Reduce app switching and boost productivity.
              </p>

              <div className="scene-expand" style={{ marginTop: 24 }}>
                <div className="zoom-reveal browserish">
                  <div className="ui-head">
                    <div className="dot-row">
                      <span className="dot" />
                      <span className="dot" />
                      <span className="dot" />
                    </div>
                    <div className="dash-pill">Unified Workspace</div>
                  </div>
                  <div className="ui-body">
                    <div className="ui-col">
                      <div className="ui-box">
                        <div className="panel-title">Email</div>
                        <div className="ui-line red" style={{ width: '58%' }} />
                        <div className="ui-line" style={{ width: '90%' }} />
                        <div className="ui-line" style={{ width: '70%' }} />
                      </div>
                      <div className="ui-box">
                        <div className="panel-title">Documents</div>
                        <div className="ui-line red" style={{ width: '72%' }} />
                        <div className="ui-line" style={{ width: '86%' }} />
                      </div>
                    </div>
                    <div className="ui-col">
                      <div className="ui-box">
                        <div className="panel-title">Meetings</div>
                        <div className="ui-line red" style={{ width: '62%' }} />
                        <div className="ui-line" style={{ width: '82%' }} />
                        <div className="ui-line" style={{ width: '68%' }} />
                      </div>
                      <div className="ui-box">
                        <div className="panel-title">Storage</div>
                        <div className="ui-line red" style={{ width: '48%' }} />
                        <div className="ui-line" style={{ width: '80%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <div className="small-grid stagger-parent">
                <div className="small-card hover-lift">
                  <div className="feature-row" style={{ padding: 0, border: 'none', background: 'transparent' }}>
                    <Icon>
                      <path d="M12 3v18M3 12h18" />
                    </Icon>
                    <div>
                      <h3>Seamless Collaboration in Real Time</h3>
                      <p>
                        Work together on documents, spreadsheets, and presentations with live
                        editing, comments, and built-in communication tools.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="small-card hover-lift">
                  <div className="feature-row" style={{ padding: 0, border: 'none', background: 'transparent' }}>
                    <Icon>
                      <path d="M4 12a8 8 0 1 0 16 0A8 8 0 1 0 4 12" />
                      <path d="M12 8v5l3 2" />
                    </Icon>
                    <div>
                      <h3>Work from Anywhere, Anytime</h3>
                      <p>
                        Stay productive on the go. Reply to emails, access presentations, or host a
                        video conference from anywhere effortlessly.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="small-card hover-lift" style={{ gridColumn: '1 / -1' }}>
                  <div className="feature-row" style={{ padding: 0, border: 'none', background: 'transparent' }}>
                    <Icon>
                      <path d="M12 2l3 7 7 3-7 3-3 7-3-7-7-3 7-3 3-7Z" />
                    </Icon>
                    <div>
                      <h3>AI-Powered Productivity (Zia)</h3>
                      <p>
                        Leverage built-in AI for writing assistance in terms of grammar,
                        readability and writing style while you work on Writer or Sheet.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white pin-scene">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">STANDARD FEATURES</div>
            <h2 className="reveal">
              Unlock Your Business Growth with <span className="gradient-text">Zoho Workplace</span>
            </h2>
            <p className="reveal reveal-delay-1">
              Zoho Workplace unifies email, collaboration, and productivity tools to streamline
              your business operations. Enable smarter teamwork and drive growth with a single
              platform.
            </p>
          </div>

          <div className="spotlight">
            <div className="browserish reveal" data-depth="0.15">
              <div className="ui-head">
                <div className="dot-row">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <div className="dash-pill">Business Growth</div>
              </div>
              <div className="feature-list stagger-parent">
                <div className="feature-row">
                  <Icon>
                    <path d="M4 18h16M6 15l4-4 3 3 5-6" />
                  </Icon>
                  <div>
                    <h3>Ideal For Your Business Size</h3>
                    <p>
                      Designed for any organization, Zoho Workplace enhances efficiency and teamwork
                      at every scale.
                    </p>
                  </div>
                </div>
                <div className="feature-row">
                  <Icon>
                    <path d="M4 6h16v10H4z" />
                    <path d="M8 16l4-4 4 4" />
                  </Icon>
                  <div>
                    <h3>Communicate Effectively</h3>
                    <p>
                      Go beyond email and chat, and connect teams with a social intranet using
                      channels, feeds, and groups.
                    </p>
                  </div>
                </div>
                <div className="feature-row">
                  <Icon>
                    <path d="M8 12h8M12 8v8" />
                    <path d="M5 5h14v14H5z" />
                  </Icon>
                  <div>
                    <h3>Integrated Business Apps</h3>
                    <p>
                      Connect with Zoho and third-party apps to unify workflows, eliminate silos,
                      and streamline processes across your business.
                    </p>
                  </div>
                </div>
                <div className="feature-row">
                  <Icon>
                    <path d="M5 12h14" />
                    <path d="M12 5v14" />
                    <path d="M5 5h14v14H5z" />
                  </Icon>
                  <div>
                    <h3>Customizable Workspace</h3>
                    <p>
                      Customize settings, layouts, workflows to fit your needs. Also, get a
                      professional, ad-free email service &amp; advanced controls.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="spotlight-card reveal">
              <h3>Integrate with Popular Apps</h3>
              <p className="spotlight-desc">
                Connect your Zoho Workplace with other business apps to ensure higher productivity
                and growth - all within a unified workspace.
              </p>
              <div className="integrations-grid stagger-parent">
                {[
                  'Zoho Apps',
                  'Analytics',
                  'Accounting & Finance',
                  'Automation',
                  'Business Suites',
                ].map((item, i) => (
                  <div className="integration-pill hover-lift" key={i}>
                    {item}
                  </div>
                ))}
              </div>
              <div className="feature-list" style={{ marginTop: 22 }}>
                <div className="feature-row">
                  <Icon>
                    <path d="M4 7h16M4 12h10M4 17h13" />
                  </Icon>
                  <div>
                    <h3>Zoho Apps</h3>
                    <p>Zoho Meeting, Zoho Connect, Zoho Mail, Zoho Cliq, Zoho Writer, etc.</p>
                  </div>
                </div>
                <div className="feature-row">
                  <Icon>
                    <path d="M4 18V6l5 5 4-3 7 6" />
                  </Icon>
                  <div>
                    <h3>Analytics</h3>
                    <p>Zoho Analytics, Google Analytics</p>
                  </div>
                </div>
                <div className="feature-row">
                  <Icon>
                    <path d="M6 8h12M6 12h12M6 16h8" />
                  </Icon>
                  <div>
                    <h3>Accounting &amp; Finance</h3>
                    <p>Zoho Invoice &amp; Zoho Books</p>
                  </div>
                </div>
                <div className="feature-row">
                  <Icon>
                    <path d="M7 12h10M12 7l5 5-5 5" />
                  </Icon>
                  <div>
                    <h3>Automation</h3>
                    <p>Zoho Flow, Zapier, viaSocket</p>
                  </div>
                </div>
                <div className="feature-row">
                  <Icon>
                    <path d="M4 6h16v12H4z" />
                    <path d="M9 10h6v4H9z" />
                  </Icon>
                  <div>
                    <h3>Business Suites</h3>
                    <p>Zoho One, Zoho Workspace</p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: 24 }}>
                <a
                  href={ctas[2].href}
                  className="animated-cta"
                  target="_blank"
                  rel="noreferrer"
                >
                  {ctas[2].text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band clip-reveal">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow" style={{ background: 'rgba(255,255,255,.08)', color: '#fff', borderColor: 'rgba(255,255,255,.12)' }}>
              INSIGHT
            </div>
            <h2>Performance Beyond Limits with Zoho Workplace</h2>
          </div>
          <div className="stats-grid stagger-parent">
            <div className="glass-card hover-lift" data-depth="0.15">
              <p>Secure</p>
              <h3>82.9%</h3>
              <p>
                of users reported a secure email experience, ensuring strong data protection, and
                safe and reliable communication.
              </p>
            </div>
            <div className="glass-card hover-lift" data-depth="0.2">
              <p>Anywhere Access</p>
              <h3>42.9%</h3>
              <p>
                of them found it easier to work remotely with Zoho Workplace apps, enabling
                seamless access from any device, anywhere.
              </p>
            </div>
            <div className="glass-card hover-lift" data-depth="0.15">
              <p>Intuitive</p>
              <h3>28.6%</h3>
              <p>
                found Zoho Workplace easy to use, reducing the learning curve. Teams can quickly
                adapt and work efficiently.
              </p>
            </div>
            <div className="glass-card hover-lift" data-depth="0.2">
              <p>Collaborative</p>
              <h3>14.3%</h3>
              <p>
                of them saw improved collaboration, engagement and productivity, helping teams stay
                aligned and get more done faster.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">PRICING</div>
            <h2 className="reveal">Zoho Workplace</h2>
          </div>
          <div className="pricing-wrap">
            <div className="pricing-card reveal highlighted-card">
              <div className="price-badge">Included</div>
              <div className="pricing-title">
                <div>
                  <h3 style={{ fontSize: 28, marginBottom: 6 }}>Zoho Workplace</h3>
                  <p>Email &amp; Collaboration Suite</p>
                </div>
                <div className="price-stack">
                  <span className="strike">(was )</span>
                  <span className="big-price">—</span>
                </div>
              </div>

              <div className="feature-checks">
                {[
                  'Enterprise-Grade Custom Email',
                  'Migration Assistance',
                  'Collaborative Office Suite',
                  '30-GB Mail Storage Per User',
                  'File Storage Starts at 100 GB Per Team',
                  'File Sharing & Permissions',
                  'Team Chat',
                  'Document Management',
                  'Supported Device: Android, iOS, Windows, Mac',
                ].map((item, i) => (
                  <div className="check-item" key={i}>
                    <div className="check">✓</div>
                    <p>{item}</p>
                  </div>
                ))}
              </div>

              <p style={{ marginBottom: 18 }}>
                Enterprises, businesses, and teams
              </p>
              <div className="full-btn">
                <div className="animated-cta full-btn" style={{ justifyContent: 'center' }}>
                  Contact Techjockey for plan details
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-head">
            <div className="eyebrow reveal">TESTIMONIALS</div>
            <h2 className="reveal">What teams say about <span className="gradient-text">Zoho Workplace</span></h2>
          </div>

          <div className="testimonial-grid">
            {visibleTestimonials.map((t, i) => (
              <div className="t-card reveal" key={`${t.author}-${i}`}>
                <div className="quote-mark">❝</div>
                <div className="stars">★★★★★</div>
                <p>{t.quote}</p>
                <div className="author">
                  <div className="avatar">
                    {t.author
                      .split(' ')
                      .map((n) => n[0])
                      .join('')
                      .slice(0, 2)}
                  </div>
                  <div>
                    <strong style={{ display: 'block' }}>{t.author}</strong>
                    <span style={{ color: '#6b7280', fontSize: 14 }}>{t.role}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot-btn ${i === activeTestimonial ? 'active' : ''}`}
                onClick={() => setActiveTestimonial(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              />
            ))}
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
            <p style={{ marginTop: 14 }}>support@techjockey.com</p>
            <p style={{ marginTop: 10 }}>© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>

          <div>
            <h3 style={{ color: '#fff', marginBottom: 12 }}>Legal</h3>
            <div className="footer-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>

          <div>
            <h3 style={{ color: '#fff', marginBottom: 12 }}>Follow Us</h3>
            <div className="socials">
              <a className="social" href="https://www.facebook.com/Techjockey/" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1Z"/></svg>
              </a>
              <a className="social" href="https://www.instagram.com/techjockey/" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
              </a>
              <a className="social" href="https://twitter.com/Techjockey" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 5.1c.8-.1 1.5-.5 2.1-1-.3.8-.9 1.5-1.7 2 .8-.1 1.5-.3 2.2-.6-.5.8-1.2 1.4-2 1.9 0 .2 0 .5 0 .7 0 6.9-5.2 14.8-14.8 14.8-2.9 0-5.7-.9-8-2.4.4 0 .8.1 1.2.1 2.4 0 4.7-.8 6.5-2.3-2.3 0-4.2-1.5-4.9-3.6.3.1.7.1 1 .1.5 0 1-.1 1.4-.2-2.4-.5-4.2-2.6-4.2-5.1v-.1c.7.4 1.5.7 2.3.7-1.4-.9-2.3-2.4-2.3-4.1 0-.9.2-1.7.7-2.5 2.6 3.2 6.5 5.3 10.8 5.5-.1-.4-.1-.8-.1-1.2 0-2.9 2.3-5.2 5.2-5.2 1.5 0 2.8.6 3.8 1.6.1 0 .1 0 .2 0Z"/></svg>
              </a>
              <a className="social" href="https://www.linkedin.com/company/techjockey/" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5A1.56 1.56 0 1 1 6.94 5.4a1.56 1.56 0 0 1 0 3.1ZM5.5 9.75h2.88V18H5.5V9.75ZM10.2 9.75h2.76v1.13H13c.38-.72 1.32-1.48 2.72-1.48 2.9 0 3.43 1.9 3.43 4.37V18h-2.88v-3.74c0-.9-.02-2.04-1.24-2.04-1.24 0-1.43.97-1.43 1.98V18H10.2V9.75Z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;