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
    setActiveTestimonial(0);
  }, []);

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};--text:#111827;--muted:#4b5563;--border:#e5e7eb;--soft:#f8fafc;--accent-glow:rgba(228,41,43,.12)}
    *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;background:${bodyBg};color:var(--text);font-family:Inter,sans-serif}
    a{text-decoration:none;color:inherit} img{max-width:100%}
    .lp{background:${bodyBg};overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:84px 0;position:relative}
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
    .hero-copy h1{font-size:54px !important;line-height:1.04;letter-spacing:-0.02em}
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

    .testimonials-section{
      background:linear-gradient(180deg,#fff 0%,#f8fafc 100%);
    }
    .testimonials-wrap{position:relative}
    .testimonial-grid{
      display:grid;
      grid-template-columns:repeat(3,minmax(0,1fr));
      gap:20px;
      align-items:stretch;
    }
    .testimonial-card{
      position:relative;
      display:flex;
      flex-direction:column;
      min-height:100%;
      border-radius:24px;
      padding:26px;
      background:#fff;
      border:1px solid #e8edf3;
      box-shadow:0 18px 40px rgba(17,24,39,.07);
      overflow:hidden;
    }
    .testimonial-card.featured{
      background:linear-gradient(135deg,#111827 0%,#1f2937 55%,#111827 100%);
      border-color:rgba(255,255,255,.08);
      color:#fff;
      box-shadow:0 28px 70px rgba(17,24,39,.16);
    }
    .testimonial-card.featured:before{
      content:"";
      position:absolute;
      right:-40px;
      bottom:-40px;
      width:160px;
      height:160px;
      border-radius:50%;
      background:rgba(228,41,43,.18);
      filter:blur(8px);
    }
    .testimonial-top{position:relative;z-index:1}
    .testimonial-badge{
      display:inline-flex;
      align-items:center;
      gap:8px;
      padding:8px 14px;
      border-radius:999px;
      background:rgba(228,41,43,.08);
      border:1px solid rgba(228,41,43,.15);
      color:var(--accent);
      font-size:12px;
      font-weight:700;
      margin-bottom:18px;
      max-width:max-content;
    }
    .testimonial-card.featured .testimonial-badge{
      background:rgba(255,255,255,.08);
      border-color:rgba(255,255,255,.12);
      color:#fff;
    }
    .quote-mark{
      font-size:44px;
      line-height:1;
      font-weight:800;
      color:var(--accent);
      margin-bottom:12px;
    }
    .testimonial-card.featured .quote-mark{color:#ff7a7c}
    .testimonial-text{
      font-size:17px;
      line-height:1.75;
      color:#374151;
      word-break:break-word;
    }
    .testimonial-card.featured .testimonial-text{
      color:#f3f4f6;
      font-size:20px;
      line-height:1.65;
    }
    .testimonial-footer{
      position:relative;
      z-index:1;
      display:flex;
      align-items:center;
      gap:14px;
      margin-top:24px;
      padding-top:18px;
      border-top:1px solid rgba(17,24,39,.08);
    }
    .testimonial-card.featured .testimonial-footer{
      border-top-color:rgba(255,255,255,.12);
    }
    .testimonial-avatar{
      width:52px;
      height:52px;
      border-radius:16px;
      background:linear-gradient(135deg,var(--accent),#ff6b6d);
      color:#fff;
      display:flex;
      align-items:center;
      justify-content:center;
      font-weight:800;
      font-size:18px;
      flex:none;
      box-shadow:0 12px 24px rgba(228,41,43,.18);
    }
    .testimonial-meta strong{
      display:block;
      font-size:16px;
      color:#111827;
      margin-bottom:4px;
    }
    .testimonial-meta span{
      display:block;
      font-size:13px;
      color:#6b7280;
      line-height:1.5;
    }
    .testimonial-card.featured .testimonial-meta strong{color:#fff}
    .testimonial-card.featured .testimonial-meta span{color:#d1d5db}

    .faq-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px}
    .faq-item{padding:22px;border:1px solid var(--border);border-radius:18px;background:#fff;box-shadow:0 12px 28px rgba(17,24,39,.04)}
    .cta-band{padding:34px;border-radius:28px;background:linear-gradient(135deg,#111827 0%,#1f2937 100%);display:flex;justify-content:space-between;gap:20px;align-items:center;color:#fff}
    .cta-band p{color:#d1d5db}
    .footer{padding:26px 0;border-top:1px solid var(--border);background:#fff}
    .footer-inner{display:flex;justify-content:space-between;gap:20px;align-items:center;flex-wrap:wrap}
    .reveal{opacity:0;transform:translateY(24px);transition:opacity .8s ease, transform .8s ease}
    .reveal.visible{opacity:1;transform:none}
    .cursor-glow{position:fixed;left:0;top:0;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle, rgba(228,41,43,.12) 0%, rgba(228,41,43,0) 70%);pointer-events:none;z-index:0;transform:translate(-50%,-50%)}
    .clip-reveal{clip-path:inset(0 0 100% 0)}
    .text-reveal-mask{overflow:hidden}
    .text-reveal-inner{transform:translateY(110%)}
    .btn-magnetic{will-change:transform}
    .scene-expand{width:92%;margin-inline:auto}
    .scene-expand img,.scene-expand video,.zoom-reveal img,.zoom-reveal video,.hero-cinematic-bg{transform:scale(1.06)}

    @media (max-width: 1080px){
      .hero-grid,.spotlight,.stats-grid,.faq-grid{grid-template-columns:1fr}
      .integrations-grid{grid-template-columns:repeat(3,1fr)}
      .testimonial-grid{grid-template-columns:1fr 1fr}
    }
    @media (max-width: 860px){
      .metrics-grid,.feature-checks,.ui-body,.dash-grid{grid-template-columns:1fr}
      .small-grid{grid-template-columns:1fr}
      .stats-grid{grid-template-columns:repeat(2,1fr)}
      .testimonial-grid{grid-template-columns:1fr}
      .cta-band{flex-direction:column;align-items:flex-start}
      .nav-inner{grid-template-columns:1fr auto}
      .tj-wrap{display:none}
      .stat-float,.stat-float-2,.stat-float-3{display:none}
      .hero{padding-top:62px}
      .hero-copy h1{font-size:54px !important}
    }
    @media (max-width: 640px){
      .section{padding:68px 0}
      .container{width:min(1180px,calc(100% - 24px))}
      .hero-copy h1{font-size:54px !important}
      .hero-copy p{font-size:16px}
      .integrations-grid{grid-template-columns:repeat(2,1fr)}
      .stats-grid{grid-template-columns:1fr}
      .pricing-card,.spotlight-card,.testimonial-card{padding:22px}
      .testimonial-card.featured .testimonial-text{font-size:18px}
      .featured-author strong{font-size:16px}
    }
  `;

  return (
    <div className="lp" ref={rootRef}>
      <style>{css}</style>

      <nav className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand" aria-label="Techjockey Zoho Workplace">
            <span className="brand-badge">TJ</span>
            <span>Techjockey x Zoho Workplace</span>
          </a>
          <div className="tj-wrap" style={{ color: '#d1d5db', fontSize: 14, fontWeight: 600 }}>
            Trusted software buying guidance for businesses
          </div>
          <a className="animated-cta btn-magnetic" href={ctas[0].href}>
            {ctas[0].text}
          </a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow">
              <span>Business Email + Collaboration Suite</span>
            </div>
            <h1>
              Power your teams with <span className="gradient-text">Zoho Workplace</span>
            </h1>
            <p>
              Get secure business email, team chat, online meetings, cloud storage, office apps,
              and collaboration tools in one unified workplace suite for growing businesses.
            </p>
            <div className="hero-actions">
              <a className="animated-cta btn-magnetic" href={ctas[0].href}>
                {ctas[0].text}
              </a>
              <a className="ghost-btn btn-magnetic" href={ctas[1].href}>
                {ctas[1].text}
              </a>
            </div>
            <div className="chip-row">
              <div className="chip">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Secure business email
              </div>
              <div className="chip">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Collaboration in one place
              </div>
              <div className="chip">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
                Expert purchase assistance
              </div>
            </div>
          </div>

          <div className="hero-visual reveal">
            <div className="hero-cinematic-bg" />
            <div className="grid-lines" />
            <div className="orb orb-1" />
            <div className="orb orb-2" />
            <div className="dashboard-shell">
              <div className="stat-float" data-depth="0.16">
                <div className="stat-label">Teams collaboration</div>
                <div className="stat-value">Unified suite</div>
              </div>
              <div className="stat-float-2" data-depth="0.12">
                <div className="stat-label">Storage & files</div>
                <div className="stat-value">One workspace</div>
              </div>
              <div className="stat-float-3" data-depth="0.1">
                <div className="stat-label">Business email</div>
                <div className="stat-value">Ad-free & secure</div>
              </div>
              <div className="dashboard-main scene-expand">
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
                    <div className="panel-title">Inbox & productivity</div>
                    <div className="mail-list">
                      <div className="mail-item">
                        <strong>Business email</strong>
                        <span>Professional email hosting with advanced security and admin controls.</span>
                      </div>
                      <div className="mail-item">
                        <strong>Office collaboration</strong>
                        <span>Create documents, spreadsheets, and presentations with your team.</span>
                      </div>
                      <div className="mail-item">
                        <strong>Shared calendar</strong>
                        <span>Plan meetings and coordinate availability across teams.</span>
                      </div>
                    </div>
                  </div>
                  <div className="side-stack">
                    <div className="mini-card">
                      <strong>Team chat</strong>
                      <span>Keep communication fast with dedicated channels and direct messages.</span>
                    </div>
                    <div className="mini-card">
                      <strong>Online meetings</strong>
                      <span>Host video meetings, webinars, and quick syncs from one ecosystem.</span>
                    </div>
                    <div className="mini-card">
                      <strong>WorkDrive</strong>
                      <span>Store, organize, and share business files securely with your teams.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-strip">
        <div className="container">
          <div className="metrics-grid">
            <div className="metric-card reveal">
              <h3>All-in-one workplace suite</h3>
              <p>Email, files, communication, office apps, and meetings together.</p>
            </div>
            <div className="metric-card reveal">
              <h3>Business-ready security</h3>
              <p>Advanced admin controls, secure hosting, and dependable collaboration tools.</p>
            </div>
            <div className="metric-card reveal">
              <h3>Expert assistance via Techjockey</h3>
              <p>Compare plans, pricing, and suitability with guided buying support.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-head reveal">
            <h2>Why businesses choose Zoho Workplace</h2>
            <p>
              Replace scattered tools with a single collaboration environment designed for business
              communication, content creation, meetings, and team productivity.
            </p>
          </div>

          <div className="spotlight">
            <div className="spotlight-card reveal">
              <h3>Everything your team needs to work together</h3>
              <p className="spotlight-desc">
                Zoho Workplace combines business email, cloud file management, online office apps,
                chat, meetings, and collaboration features so your teams can work seamlessly across
                departments and locations.
              </p>

              <div className="feature-list">
                <div className="feature-row hover-lift">
                  <div className="icon-box">
                    <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
                      <path d="M4 7h16v10H4z" stroke="currentColor" strokeWidth="2" />
                      <path d="M4 8l8 6 8-6" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h3>Ad-free business email</h3>
                    <p>Use a professional email solution built for teams with domain-based accounts.</p>
                  </div>
                </div>

                <div className="feature-row hover-lift">
                  <div className="icon-box">
                    <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
                      <path d="M8 17l4-4 4 4M12 13V4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                      <path d="M4 20h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </svg>
                  </div>
                  <div>
                    <h3>Centralized file storage</h3>
                    <p>Store, access, and share business files securely with team permissions.</p>
                  </div>
                </div>

                <div className="feature-row hover-lift">
                  <div className="icon-box">
                    <svg viewBox="0 0 24 24" fill="none" width="22" height="22">
                      <path d="M8 12h8M8 8h8M8 16h5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                      <rect x="4" y="4" width="16" height="16" rx="3" stroke="currentColor" strokeWidth="2" />
                    </svg>
                  </div>
                  <div>
                    <h3>Built-in office apps</h3>
                    <p>Create documents, spreadsheets, and presentations with collaborative editing.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="browserish reveal">
              <div className="ui-head">
                <div className="dot-row">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <div className="dash-pill">Unified workspace</div>
              </div>
              <div className="ui-body">
                <div className="ui-col">
                  <div className="ui-box">
                    <div className="panel-title">Mail</div>
                    <div className="ui-line red" />
                    <div className="ui-line" />
                    <div className="ui-line" />
                    <div className="ui-line" />
                  </div>
                  <div className="ui-box">
                    <div className="panel-title">WorkDrive</div>
                    <div className="ui-line red" />
                    <div className="ui-line" />
                    <div className="ui-line" />
                  </div>
                </div>
                <div className="ui-col">
                  <div className="ui-box">
                    <div className="panel-title">Cliq & Meeting</div>
                    <div className="ui-line red" />
                    <div className="ui-line" />
                    <div className="ui-line" />
                    <div className="ui-line" />
                  </div>
                  <div className="ui-box">
                    <div className="panel-title">Writer, Sheet & Show</div>
                    <div className="ui-line red" />
                    <div className="ui-line" />
                    <div className="ui-line" />
                  </div>
                </div>
              </div>

              <div className="small-grid">
                <div className="small-card hover-lift">
                  <h3>Easy team collaboration</h3>
                  <p>Communicate, meet, and share files without jumping between disconnected apps.</p>
                </div>
                <div className="small-card hover-lift">
                  <h3>Scalable for growing companies</h3>
                  <p>Choose plans that fit small teams, scaling operations, and distributed workforces.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="integrations-grid reveal">
            <div className="integration-pill">Mail</div>
            <div className="integration-pill">WorkDrive</div>
            <div className="integration-pill">Writer</div>
            <div className="integration-pill">Sheet</div>
            <div className="integration-pill">Show</div>
            <div className="integration-pill">Cliq</div>
            <div className="integration-pill">Meeting</div>
            <div className="integration-pill">Calendar</div>
            <div className="integration-pill">Connect</div>
            <div className="integration-pill">Admin Console</div>
          </div>
        </div>
      </section>

      <section className="section dark-band">
        <div className="container">
          <div className="section-head reveal">
            <h2>Designed for productivity, collaboration, and control</h2>
            <p>
              A complete workplace solution that helps teams stay connected while IT teams maintain
              visibility, control, and security.
            </p>
          </div>

          <div className="stats-grid">
            <div className="glass-card reveal">
              <h3>Professional</h3>
              <p>Business-grade email for your domain with dependable communication capabilities.</p>
            </div>
            <div className="glass-card reveal">
              <h3>Collaborative</h3>
              <p>Shared editing, team chat, and meetings help your workforce move faster together.</p>
            </div>
            <div className="glass-card reveal">
              <h3>Secure</h3>
              <p>Admin tools and managed access help businesses work with more confidence.</p>
            </div>
            <div className="glass-card reveal">
              <h3>Flexible</h3>
              <p>Support hybrid teams, office users, remote staff, and growing organizations.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-head reveal">
            <h2>Simple pricing support through Techjockey</h2>
            <p>
              Understand the right Zoho Workplace plan, features, and cost structure before you buy.
              Our experts help you choose what fits your business best.
            </p>
          </div>

          <div className="pricing-wrap">
            <div className="pricing-card reveal">
              <div className="price-badge">Expert-assisted buying</div>
              <div className="pricing-title">
                <div>
                  <h3>Zoho Workplace for modern businesses</h3>
                  <p>Get plan comparison, feature guidance, and pricing consultation from Techjockey.</p>
                </div>
                <div className="price-stack">
                  <span className="strike">Custom evaluation</span>
                  <span className="big-price">Talk to expert</span>
                </div>
              </div>

              <div className="feature-checks">
                <div className="check-item">
                  <div className="check">✓</div>
                  <p>Understand available plans and feature differences</p>
                </div>
                <div className="check-item">
                  <div className="check">✓</div>
                  <p>Get help identifying the best fit for your team size</p>
                </div>
                <div className="check-item">
                  <div className="check">✓</div>
                  <p>Receive pricing assistance before finalizing purchase</p>
                </div>
                <div className="check-item">
                  <div className="check">✓</div>
                  <p>Connect with product experts for tailored recommendations</p>
                </div>
              </div>

              <a className="animated-cta full-btn btn-magnetic" href={ctas[2].href}>
                {ctas[2].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container">
          <div className="section-head reveal">
            <h2>What businesses say about Zoho Workplace</h2>
            <p>
              Real feedback from professionals using Zoho Workplace to improve communication,
              productivity, and collaboration across teams.
            </p>
          </div>

          <div className="testimonials-wrap">
            <div className="testimonial-grid">
              {testimonials.map((item, index) => {
                const isFeatured = index === activeTestimonial;
                return (
                  <div
                    key={`${item.author}-${index}`}
                    className={`testimonial-card reveal ${isFeatured ? 'featured' : ''}`}
                  >
                    <div className="testimonial-top">
                      <div className="testimonial-badge">
                        {isFeatured ? 'Featured testimonial' : 'Customer feedback'}
                      </div>
                      <div className="quote-mark">“</div>
                      <p className="testimonial-text">{item.quote}</p>
                    </div>
                    <div className="testimonial-footer">
                      <div className="testimonial-avatar">
                        {item.author
                          .split(' ')
                          .map((name) => name[0])
                          .join('')
                          .slice(0, 2)}
                      </div>
                      <div className="testimonial-meta">
                        <strong>{item.author}</strong>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head reveal">
            <h2>Frequently asked questions</h2>
            <p>
              Get quick clarity on Zoho Workplace, its use cases, and how Techjockey can help you buy
              the right plan.
            </p>
          </div>

          <div className="faq-grid">
            <div className="faq-item reveal">
              <h3>What is Zoho Workplace used for?</h3>
              <p>
                Zoho Workplace is used for business email, file sharing, team chat, online meetings,
                office productivity, and collaboration across teams.
              </p>
            </div>
            <div className="faq-item reveal">
              <h3>Is Zoho Workplace suitable for growing businesses?</h3>
              <p>
                Yes, it is suitable for startups, SMBs, and growing teams that want a unified and
                scalable workplace suite.
              </p>
            </div>
            <div className="faq-item reveal">
              <h3>Can Techjockey help with pricing and plan selection?</h3>
              <p>
                Yes, Techjockey helps businesses compare plans, understand pricing, and choose the
                most suitable option based on requirements.
              </p>
            </div>
            <div className="faq-item reveal">
              <h3>Does Zoho Workplace include communication tools?</h3>
              <p>
                Yes, it includes team chat, video meetings, shared calendars, and collaboration
                features alongside business email and office apps.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="cta-band reveal">
            <div>
              <h2>Ready to explore Zoho Workplace?</h2>
              <p>
                Connect with Techjockey to compare plans, get pricing guidance, and find the right
                workplace solution for your business.
              </p>
            </div>
            <div className="hero-actions" style={{ marginTop: 0 }}>
              <a className="animated-cta btn-magnetic" href={ctas[0].href}>
                {ctas[0].text}
              </a>
              <a className="ghost-btn btn-magnetic" href={ctas[1].href}>
                {ctas[1].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-inner">
          <div>
            <strong>Techjockey x Zoho Workplace</strong>
            <p style={{ fontSize: 14, marginTop: 6 }}>Software buying guidance for modern businesses.</p>
          </div>
          <a className="animated-cta btn-magnetic" href={ctas[2].href}>
            {ctas[2].text}
          </a>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;