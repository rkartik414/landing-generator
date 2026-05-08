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

    .testimonials-section{background:
      radial-gradient(circle at top left, rgba(228,41,43,.08), transparent 28%),
      linear-gradient(180deg,#fff 0%,#f8fafc 100%)}
    .testimonials-wrap{position:relative}
    .testimonial-featured{
      position:relative;
      overflow:hidden;
      border-radius:28px;
      padding:32px;
      background:linear-gradient(135deg,#111827 0%,#1f2937 55%,#111827 100%);
      color:#fff;
      box-shadow:0 28px 70px rgba(17,24,39,.16);
      border:1px solid rgba(255,255,255,.08);
      margin-bottom:22px;
      min-height:300px;
      display:grid;
      grid-template-columns:1.2fr .8fr;
      gap:24px;
      align-items:stretch;
    }
    .testimonial-featured:before{
      content:"";
      position:absolute;
      inset:auto -60px -60px auto;
      width:220px;
      height:220px;
      border-radius:50%;
      background:rgba(228,41,43,.18);
      filter:blur(8px);
    }
    .testimonial-featured:after{
      content:"";
      position:absolute;
      inset:18px 18px auto auto;
      width:120px;
      height:120px;
      border-radius:24px;
      background:linear-gradient(135deg, rgba(228,41,43,.18), rgba(228,41,43,.02));
      border:1px solid rgba(255,255,255,.08);
      transform:rotate(18deg);
    }
    .testimonial-main{position:relative;z-index:2;display:flex;flex-direction:column;justify-content:space-between}
    .testimonial-kicker{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);color:#fff;font-size:12px;font-weight:700;max-width:max-content;margin-bottom:18px}
    .featured-quote-mark{font-size:64px;line-height:.9;color:var(--accent);font-weight:800;margin-bottom:10px}
    .featured-quote{font-size:24px;line-height:1.5;color:#fff;max-width:720px}
    .featured-author{display:flex;align-items:center;gap:14px;margin-top:26px}
    .featured-avatar{
      width:56px;height:56px;border-radius:18px;
      background:linear-gradient(135deg,var(--accent),#ff6b6d);
      color:#fff;display:flex;align-items:center;justify-content:center;
      font-weight:800;font-size:20px;box-shadow:0 12px 24px rgba(228,41,43,.24)
    }
    .featured-author strong{display:block;font-size:18px;color:#fff}
    .featured-author span{display:block;font-size:14px;color:#d1d5db}
    .testimonial-side{
      position:relative;
      z-index:2;
      display:grid;
      gap:14px;
      align-content:center;
    }
    .trust-snippet{
      background:rgba(255,255,255,.08);
      border:1px solid rgba(255,255,255,.1);
      border-radius:20px;
      padding:18px;
      backdrop-filter:blur(10px);
    }
    .trust-snippet h4{margin:0 0 8px;color:#fff;font-size:16px;font-weight:700}
    .trust-snippet p{color:#d1d5db;font-size:14px;line-height:1.6}
    .mini-rating{display:flex;align-items:center;gap:10px;color:#fff;font-weight:700}
    .mini-rating .stars{margin:0;color:#fbbf24;font-size:16px;letter-spacing:1px}
    .testimonial-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
    .t-card{
      background:#fff;
      border:1px solid #e6ebf2;
      border-radius:22px;
      padding:22px;
      box-shadow:0 16px 36px rgba(17,24,39,.06);
      height:100%;
      opacity:1 !important;
      transform:none !important;
    }
    .t-card.active{
      border-color:rgba(228,41,43,.3);
      box-shadow:0 18px 40px rgba(228,41,43,.10);
      background:linear-gradient(180deg,#fff 0%,#fff7f7 100%);
    }
    .quote-mark{font-size:42px;line-height:1;color:var(--accent);font-weight:800}
    .stars{color:#f59e0b;font-size:18px;letter-spacing:2px;margin:10px 0 14px}
    .author{display:flex;align-items:center;gap:12px;margin-top:18px}
    .avatar{width:46px;height:46px;border-radius:14px;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800}
    .author-meta strong{display:block;color:#111827;font-size:15px}
    .author-meta span{display:block;color:#6b7280;font-size:13px}
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
    .card-3d-stack>*:nth-child(2){transform:translateZ(20px) translateY(12px) scale(.98)}
    .card-3d-stack>*:nth-child(3){transform:translateZ(0) translateY(24px) scale(.96)}
    .clip-reveal{clip-path:inset(18% 0 18% 0);will-change:clip-path}
    .text-reveal-mask{overflow:hidden}
    .text-reveal-inner{display:block;transform:translateY(110%);will-change:transform}
    .cursor-glow{position:fixed;top:-120px;left:-120px;width:240px;height:240px;border-radius:50%;pointer-events:none;background:radial-gradient(circle, rgba(228,41,43,.14) 0%, rgba(228,41,43,.05) 35%, rgba(228,41,43,0) 70%);z-index:20;mix-blend-mode:multiply}

    @media (max-width:1100px){
      .hero-grid,.spotlight,.testimonial-featured{grid-template-columns:1fr}
      .integrations-grid{grid-template-columns:repeat(3,1fr)}
      .stats-grid{grid-template-columns:repeat(2,1fr)}
      .testimonial-grid{grid-template-columns:repeat(2,1fr)}
    }
    @media (max-width:768px){
      .section{padding:72px 0}
      .nav-inner{grid-template-columns:1fr;justify-items:start}
      .hero{padding:72px 0 58px}
      .metrics-grid,.ui-body,.feature-checks,.footer-grid{grid-template-columns:1fr}
      .small-grid{grid-template-columns:1fr}
      .integrations-grid{grid-template-columns:repeat(2,1fr)}
      .stats-grid,.testimonial-grid{grid-template-columns:1fr}
      .hero-copy h1{font-size:54px !important}
      .hero-visual{min-height:440px}
      .testimonial-featured{padding:24px;min-height:auto}
      .featured-quote{font-size:20px}
    }
  `;

  const activeItem = testimonials[activeTestimonial];
  const visibleCards = [
    testimonials[activeTestimonial],
    testimonials[(activeTestimonial + 1) % testimonials.length],
    testimonials[(activeTestimonial + 2) % testimonials.length],
    testimonials[(activeTestimonial + 3) % testimonials.length],
  ];

  return (
    <div className="lp" ref={rootRef}>
      <style>{css}</style>

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span className="brand-badge">Techjockey</span>
            <span>| Zoho Workplace</span>
          </div>
          <div className="tj-wrap">
            <a className="ghost-btn btn-magnetic" href={ctas[1].href}>
              {ctas[1].text}
            </a>
          </div>
          <a className="animated-cta btn-magnetic" href={ctas[0].href}>
            {ctas[0].text}
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy reveal">
            <div className="eyebrow">Business Email + Team Collaboration Suite</div>
            <h1>Run your workplace with one powerful platform</h1>
            <p>
              Zoho Workplace brings together secure email, cloud storage, office apps, team chat,
              and collaboration tools to help your teams work smarter from anywhere.
            </p>
            <div className="hero-actions">
              <a href={ctas[0].href} className="animated-cta btn-magnetic">
                {ctas[0].text}
              </a>
              <a href={ctas[2].href} className="ghost-btn btn-magnetic">
                {ctas[2].text}
              </a>
            </div>
            <div className="chip-row">
              <div className="chip">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Business Email
              </div>
              <div className="chip">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Collaboration Tools
              </div>
              <div className="chip">
                <svg viewBox="0 0 24 24" fill="none">
                  <path d="M20 7L10 17l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                Secure Cloud Workspace
              </div>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-1">
            <div className="hero-cinematic-bg"></div>
            <div className="grid-lines"></div>
            <div className="orb orb-1"></div>
            <div className="orb orb-2"></div>

            <div className="dashboard-shell card-3d-stack">
              <div className="stat-float">
                <div className="stat-label">Business mailboxes</div>
                <div className="stat-value" data-count="500" data-suffix="+">
                  500+
                </div>
              </div>
              <div className="stat-float-2">
                <div className="stat-label">Apps in one suite</div>
                <div className="stat-value">Integrated</div>
              </div>
              <div className="stat-float-3">
                <div className="stat-label">Admin control</div>
                <div className="stat-value">Advanced</div>
              </div>

              <div className="dashboard-main">
                <div className="dash-top">
                  <div className="dot-row">
                    <span className="dot"></span>
                    <span className="dot"></span>
                    <span className="dot"></span>
                  </div>
                  <div className="dash-pill">Zoho Workplace</div>
                </div>

                <div className="dash-grid">
                  <div className="panel">
                    <div className="panel-title">Unified Inbox & Collaboration</div>
                    <div className="mail-list">
                      <div className="mail-item">
                        <strong>Project kick-off update</strong>
                        <span>Share files, assign tasks, and coordinate in one connected workflow.</span>
                      </div>
                      <div className="mail-item">
                        <strong>Team communication</strong>
                        <span>Business email, chat, and meetings managed inside a single suite.</span>
                      </div>
                      <div className="mail-item">
                        <strong>Document collaboration</strong>
                        <span>Create, edit, and store work securely with built-in apps.</span>
                      </div>
                    </div>
                  </div>

                  <div className="side-stack">
                    <div className="mini-card">
                      <strong>WorkDrive</strong>
                      <span>Centralized cloud storage with organized team access.</span>
                    </div>
                    <div className="mini-card">
                      <strong>Cliq & Meeting</strong>
                      <span>Real-time messaging and video collaboration for faster decisions.</span>
                    </div>
                    <div className="mini-card">
                      <strong>Admin Console</strong>
                      <span>Policy controls, user setup, and security management from one place.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-strip">
        <div className="container metrics-grid">
          <div className="metric-card reveal">
            <h3>Business Communication</h3>
            <p>Professional email and connected collaboration tools for modern teams.</p>
          </div>
          <div className="metric-card reveal reveal-delay-1">
            <h3>Integrated Apps</h3>
            <p>Mail, docs, storage, chat, meetings, and office apps working together.</p>
          </div>
          <div className="metric-card reveal reveal-delay-2">
            <h3>Secure Workspace</h3>
            <p>Enterprise-grade controls to keep data protected and operations streamlined.</p>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-head reveal">
            <h2>Everything your teams need to collaborate efficiently</h2>
            <p>
              Simplify workplace communication and productivity with a connected suite designed for
              businesses of every size.
            </p>
          </div>

          <div className="spotlight">
            <div className="spotlight-card reveal">
              <h3>Why businesses choose Zoho Workplace</h3>
              <p className="spotlight-desc">
                Replace scattered tools with a unified platform for email, documents, meetings, file
                sharing, and internal communication while keeping administration simple.
              </p>

              <div className="feature-list">
                <div className="feature-row hover-lift">
                  <div className="icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M4 7h16M6 12h12M9 17h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Professional Email Hosting</h3>
                    <p>Build credibility with secure business email and custom domain support.</p>
                  </div>
                </div>

                <div className="feature-row hover-lift">
                  <div className="icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M8 12h8M12 8v8" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <rect x="3" y="3" width="18" height="18" rx="4" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Built-in Office Apps</h3>
                    <p>Create and collaborate on documents, spreadsheets, and presentations online.</p>
                  </div>
                </div>

                <div className="feature-row hover-lift">
                  <div className="icon-box">
                    <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                      <path d="M7 10h10M7 14h6" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
                      <path d="M5 5h14v14H5z" stroke="currentColor" strokeWidth="2"/>
                    </svg>
                  </div>
                  <div>
                    <h3>Collaboration Without Complexity</h3>
                    <p>Keep teams connected through chat, video meetings, shared drives, and tasks.</p>
                  </div>
                </div>
              </div>

              <div className="small-grid">
                <div className="small-card reveal reveal-delay-1">
                  <h3>Centralized Admin</h3>
                  <p>Control users, permissions, and policies from one admin panel.</p>
                </div>
                <div className="small-card reveal reveal-delay-2">
                  <h3>Cost-effective Suite</h3>
                  <p>Reduce tool sprawl and get more value from a single workplace solution.</p>
                </div>
              </div>
            </div>

            <div className="browserish reveal reveal-delay-1">
              <div className="ui-head">
                <h3>Connected workplace experience</h3>
                <div className="dash-pill">Unified Suite</div>
              </div>
              <div className="ui-body">
                <div className="ui-col">
                  <div className="ui-box">
                    <div className="ui-line red" style={{ width: '56%' }}></div>
                    <div className="ui-line" style={{ width: '92%' }}></div>
                    <div className="ui-line" style={{ width: '74%' }}></div>
                    <div className="ui-line" style={{ width: '68%' }}></div>
                  </div>
                  <div className="ui-box">
                    <div className="ui-line red" style={{ width: '44%' }}></div>
                    <div className="ui-line" style={{ width: '88%' }}></div>
                    <div className="ui-line" style={{ width: '65%' }}></div>
                  </div>
                </div>
                <div className="ui-col">
                  <div className="ui-box">
                    <div className="ui-line red" style={{ width: '48%' }}></div>
                    <div className="ui-line" style={{ width: '86%' }}></div>
                    <div className="ui-line" style={{ width: '78%' }}></div>
                    <div className="ui-line" style={{ width: '58%' }}></div>
                  </div>
                  <div className="ui-box">
                    <div className="ui-line red" style={{ width: '52%' }}></div>
                    <div className="ui-line" style={{ width: '82%' }}></div>
                    <div className="ui-line" style={{ width: '72%' }}></div>
                  </div>
                </div>
              </div>

              <div className="integrations-grid">
                <div className="integration-pill">Mail</div>
                <div className="integration-pill">WorkDrive</div>
                <div className="integration-pill">Writer</div>
                <div className="integration-pill">Cliq</div>
                <div className="integration-pill">Meeting</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section dark-band">
        <div className="container">
          <div className="section-head reveal">
            <h2>Built for productivity, governance, and scale</h2>
            <p>
              Give your teams a consistent digital workplace while maintaining visibility and
              control across business communication and documents.
            </p>
          </div>
          <div className="stats-grid">
            <div className="glass-card reveal">
              <h3 data-count="16" data-suffix="+">16+</h3>
              <p>Integrated workplace apps across communication and productivity</p>
            </div>
            <div className="glass-card reveal reveal-delay-1">
              <h3 data-count="99" data-suffix="%">99%</h3>
              <p>Reliable access experience with business-ready infrastructure</p>
            </div>
            <div className="glass-card reveal reveal-delay-2">
              <h3 data-count="24" data-suffix="/7">24/7</h3>
              <p>Always-on collaboration for distributed teams and departments</p>
            </div>
            <div className="glass-card reveal reveal-delay-3">
              <h3 data-count="1" data-suffix=" Suite">1 Suite</h3>
              <p>One platform to reduce fragmentation and simplify workplace operations</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white">
        <div className="container">
          <div className="section-head reveal">
            <h2>Simple pricing guidance through Techjockey</h2>
            <p>
              Get expert assistance to choose the right Zoho Workplace plan based on your business
              size, collaboration needs, and security requirements.
            </p>
          </div>

          <div className="pricing-wrap">
            <div className="pricing-card reveal">
              <div className="price-badge">Business Purchase Assistance</div>
              <div className="pricing-title">
                <div>
                  <h2>Find the right Zoho Workplace plan</h2>
                  <p>Talk to Techjockey experts for plan comparison, pricing details, and demos.</p>
                </div>
                <div className="price-stack">
                  <span className="strike">Complex evaluation</span>
                  <span className="big-price">Easy consultation</span>
                </div>
              </div>

              <div className="feature-checks">
                <div className="check-item">
                  <div className="check">✓</div>
                  <p>Understand plan-wise features and usage limits</p>
                </div>
                <div className="check-item">
                  <div className="check">✓</div>
                  <p>Get help selecting the right deployment for your teams</p>
                </div>
                <div className="check-item">
                  <div className="check">✓</div>
                  <p>Compare collaboration and business email capabilities</p>
                </div>
                <div className="check-item">
                  <div className="check">✓</div>
                  <p>Speed up evaluation with expert consultation</p>
                </div>
              </div>

              <a href={ctas[2].href} className="animated-cta full-btn btn-magnetic">
                {ctas[2].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials-section">
        <div className="container testimonials-wrap">
          <div className="section-head reveal visible">
            <h2>What businesses say about Zoho Workplace</h2>
            <p>
              Real feedback from professionals using Zoho Workplace to manage communication,
              collaboration, and everyday team productivity.
            </p>
          </div>

          <div className="testimonial-featured reveal visible">
            <div className="testimonial-main">
              <div>
                <div className="testimonial-kicker">Customer Testimonials</div>
                <div className="featured-quote-mark">“</div>
                <p className="featured-quote">{activeItem.quote}</p>
              </div>

              <div className="featured-author">
                <div className="featured-avatar">
                  {activeItem.author
                    .split(' ')
                    .map((name) => name[0])
                    .join('')
                    .slice(0, 2)}
                </div>
                <div>
                  <strong>{activeItem.author}</strong>
                  <span>{activeItem.role}</span>
                </div>
              </div>
            </div>

            <div className="testimonial-side">
              <div className="trust-snippet">
                <h4>Trusted for daily business collaboration</h4>
                <p>
                  From secure email to cloud documents and team communication, businesses rely on
                  Zoho Workplace to keep work connected.
                </p>
              </div>
              <div className="trust-snippet">
                <div className="mini-rating">
                  <span className="stars">★★★★★</span>
                  <span>High customer satisfaction</span>
                </div>
                <p>
                  Teams appreciate the ease of adoption, unified experience, and reduced dependency
                  on multiple disconnected tools.
                </p>
              </div>
            </div>
          </div>

          <div className="testimonial-grid">
            {visibleCards.map((item, idx) => {
              const actualIndex = (activeTestimonial + idx) % testimonials.length;
              return (
                <div
                  key={`${item.author}-${actualIndex}`}
                  className={`t-card reveal visible ${idx === 0 ? 'active' : ''}`}
                >
                  <div className="quote-mark">“</div>
                  <div className="stars">★★★★★</div>
                  <p>{item.quote}</p>
                  <div className="author">
                    <div className="avatar">
                      {item.author
                        .split(' ')
                        .map((name) => name[0])
                        .join('')
                        .slice(0, 2)}
                    </div>
                    <div className="author-meta">
                      <strong>{item.author}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="dots">
            {testimonials.map((_, i) => (
              <button
                key={i}
                className={`dot-btn ${activeTestimonial === i ? 'active' : ''}`}
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
            <div className="brand" style={{ marginBottom: 12 }}>
              <span className="brand-badge">Techjockey</span>
              <span style={{ color: '#fff' }}>| Zoho Workplace</span>
            </div>
            <p>
              Explore Zoho Workplace with Techjockey and choose a collaboration suite that fits your
              business communication needs.
            </p>
          </div>

          <div>
            <h3 style={{ color: '#fff' }}>Quick Links</h3>
            <div className="footer-links">
              <a href={ctas[0].href}>Book Demo</a>
              <a href={ctas[1].href}>Talk to Expert</a>
              <a href={ctas[2].href}>Get Price</a>
            </div>
          </div>

          <div>
            <h3 style={{ color: '#fff' }}>Connect</h3>
            <div className="socials">
              <a href={ctas[0].href} className="social" aria-label="Demo">
                ↗
              </a>
              <a href={ctas[1].href} className="social" aria-label="Expert">
                ☎
              </a>
              <a href={ctas[2].href} className="social" aria-label="Price">
                ₹
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;