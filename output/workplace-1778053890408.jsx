import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#e4292b';
  const primary = '#e4292b';
  const bodyBg = '#ffffff';

  const ctaItems = [
    {
      text: 'Talk to Expert',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Talk to Expert',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Talk to Expert',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Talk to Expert',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
  ];

  const testimonials = [
    {
      quote:
        'Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.',
      name: 'Amit Kapoor',
      role: 'IT Manager',
      avatar: '/output/generated-assets/ds_1778053563309_4a8866af/13-a1af876bc5.png',
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      name: 'Saurav Singh',
      role: 'Head of Operations',
      avatar: '/output/generated-assets/ds_1778053563309_4a8866af/15-01fc6c95c0.jpg',
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      name: 'Shrimi Manchanda',
      role: 'Operations Manager',
      avatar: '/output/generated-assets/ds_1778053563309_4a8866af/13-a1af876bc5.png',
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      name: 'Shweta Thakur',
      role: 'Senior System Administrator',
      avatar: '/output/generated-assets/ds_1778053563309_4a8866af/15-01fc6c95c0.jpg',
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      name: 'Narinder Sahni',
      role: 'IT Head',
      avatar: '/output/generated-assets/ds_1778053563309_4a8866af/13-a1af876bc5.png',
    },
  ];

  const sections = [
    {
      label: 'FEATURES',
      headline: 'Why Choose Zoho Workplace?',
      description:
        'Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.',
      image: '/output/generated-assets/ds_1778053563309_4a8866af/01-27e04915d6.png',
      browser: false,
      features: [
        {
          title: 'All-in-One Unified Workspace',
          description:
            'Access email, chat, documents, meetings, and storage in a single integrated platform. Reduce app switching and boost productivity.',
        },
        {
          title: 'Seamless Collaboration in Real Time',
          description:
            'Work together on documents, spreadsheets, and presentations with live editing, comments, and built-in communication tools.',
        },
        {
          title: 'Work from Anywhere, Anytime',
          description:
            'Stay productive on the go. Reply to emails, access presentations, or host a video conference from anywhere effortlessly.',
        },
        {
          title: 'AI-Powered Productivity (Zia)',
          description:
            'Leverage built-in AI for writing assistance in terms of grammar, readability and writing style while you work on Writer or Sheet.',
        },
      ],
    },
    {
      label: 'STANDARD FEATURES',
      headline: 'Unlock Your Business Growth with Zoho Workplace',
      description:
        'Zoho Workplace unifies email, collaboration, and productivity tools to streamline your business operations. Enable smarter teamwork and drive growth with a single platform.',
      image: '/output/generated-assets/ds_1778053563309_4a8866af/17-8ee9780f0b.jpg',
      browser: true,
      features: [
        {
          title: 'Ideal For Your Business Size',
          description:
            'Designed for any organization, Zoho Workplace enhances efficiency and teamwork at every scale.',
        },
        {
          title: 'Communicate Effectively',
          description:
            'Go beyond email and chat, and connect teams with a social intranet using channels, feeds, and groups.',
        },
        {
          title: 'Integrated Business Apps',
          description:
            'Connect with Zoho and third-party apps to unify workflows, eliminate silos, and streamline processes across your business.',
        },
        {
          title: 'Customizable Workspace',
          description:
            'Customize settings, layouts, workflows to fit your needs. Also, get a professional, ad-free email service & advanced controls.',
        },
      ],
    },
    {
      label: 'ADDITIONAL FEATURES',
      headline: 'Integrate with Popular Apps',
      description:
        'Connect your Zoho Workplace with other business apps to ensure higher productivity and growth - all within a unified workspace.',
      image: '/output/generated-assets/ds_1778053563309_4a8866af/18-473c14de05.jpg',
      browser: true,
      features: [
        {
          title: 'Zoho Apps',
          description: 'Zoho Meeting, Zoho Connect, Zoho Mail, Zoho Cliq, Zoho Writer, etc.',
        },
        {
          title: 'Analytics',
          description: 'Zoho Analytics, Google Analytics',
        },
        {
          title: 'Accounting & Finance',
          description: 'Zoho Invoice & Zoho Books',
        },
        {
          title: 'Automation',
          description: 'Zoho Flow, Zapier, viaSocket',
        },
        {
          title: 'Business Suites',
          description: 'Zoho One, Zoho Workspace',
        },
      ],
    },
    {
      label: 'INSIGHT',
      headline: 'Performance Beyond Limits with Zoho Workplace',
      description: '',
      image: '/output/generated-assets/ds_1778053563309_4a8866af/24-4e9d1f3318.png',
      browser: true,
      features: [
        {
          title: 'Secure',
          description:
            '82.9% of users reported a secure email experience, ensuring strong data protection, and safe and reliable communication.',
          stat: '82.9',
        },
        {
          title: 'Anywhere Access',
          description:
            '42.9% of them found it easier to work remotely with Zoho Workplace apps, enabling seamless access from any device, anywhere.',
          stat: '42.9',
        },
        {
          title: 'Intuitive',
          description:
            '28.6% found Zoho Workplace easy to use, reducing the learning curve. Teams can quickly adapt and work efficiently.',
          stat: '28.6',
        },
        {
          title: 'Collaborative',
          description:
            '14.3% of them saw improved collaboration, engagement and productivity, helping teams stay aligned and get more done faster.',
          stat: '14.3',
        },
      ],
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const stickyRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);

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

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const gsap = window.gsap;
          const ScrollTrigger = window.ScrollTrigger;
          if (!gsap || !ScrollTrigger) return;
          gsap.registerPlugin(ScrollTrigger);

          const oldGlow = document.querySelector('.cursor-glow');
          if (!oldGlow) {
            const glow = document.createElement('div');
            glow.className = 'cursor-glow';
            document.body.appendChild(glow);
            window.addEventListener('mousemove', (e) => {
              gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
            });
          }

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
            const original = el.getAttribute('data-split') || el.textContent;
            el.setAttribute('data-split', original);
            el.innerHTML = original
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
              duration: 1,
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
              scrollTrigger: { trigger: el, start: 'top 80%', once: true },
              onUpdate: function () {
                el.textContent = prefix + this.targets()[0].val.toFixed(target % 1 ? 1 : 0) + suffix;
              },
            });
          });
        });
      });
    };

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js')
      .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'))
      .then(() => loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/SplitText.min.js'))
      .then(() => initGSAP());

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const onScroll = () => {
      if (!stickyRef.current) return;
      if (window.scrollY > 10) stickyRef.current.classList.add('scrolled');
      else stickyRef.current.classList.remove('scrolled');
    };
    window.addEventListener('scroll', onScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};--accent-glow:rgba(228,41,43,.14)}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;font-family:Inter,sans-serif;background:${bodyBg};color:#111827}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .lp{background:${bodyBg};overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:84px 0;position:relative}
    .section-alt{background:#f8fafc}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .nav{position:sticky;top:0;z-index:50;background:#111827;color:#fff;transition:.3s;border-bottom:1px solid rgba(255,255,255,.08)}
    .nav.scrolled{backdrop-filter:blur(20px);background:rgba(17,24,39,.92)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand{display:flex;align-items:center;gap:12px;font-weight:800}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:10px;background:${accent};color:#fff;font-weight:700;border:1px solid ${accent};transition:.25s;white-space:nowrap}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(228,41,43,.25);background:${primary}}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:10px;background:transparent;color:#fff;border:1px solid rgba(255,255,255,.22);font-weight:700;transition:.25s}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(0,0,0,.18);background:rgba(255,255,255,.08)}
    .hero{padding:72px 0 56px;background:#ffffff;position:relative}
    .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:36px;align-items:center}
    .hero-copy{position:relative;z-index:2}
    .eyebrow{display:inline-flex;padding:8px 14px;border-radius:999px;background:rgba(228,41,43,.08);border:1px solid rgba(228,41,43,.18);color:${accent};font-size:12px;font-weight:700;letter-spacing:.08em}
    .hero h1{font-size:54px;line-height:1.04;letter-spacing:-.03em;margin:18px 0 18px;font-weight:800}
    .hero p{font-size:18px;line-height:1.7;color:#4b5563;margin:0 0 18px}
    .supporting{font-size:14px;color:#6b7280;margin-top:16px}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(228,41,43,.2);background:rgba(228,41,43,.06);font-size:13px;color:#374151;font-weight:600}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:10px}
    .hero-visual-wrap{min-height:500px;display:flex;align-items:center;justify-content:center;position:relative}
    .hero-visual{position:relative;width:100%;min-height:500px;border-radius:28px;background:linear-gradient(135deg,#0f172a 0%,#101827 44%,#1f2937 100%);padding:22px;overflow:hidden;box-shadow:0 30px 80px rgba(15,23,42,.18)}
    .hero-visual::before,.hero-visual::after{content:'';position:absolute;border-radius:50%;filter:blur(10px)}
    .hero-visual::before{width:220px;height:220px;right:-50px;top:-50px;background:radial-gradient(circle,rgba(228,41,43,.35),transparent 70%)}
    .hero-visual::after{width:180px;height:180px;left:-40px;bottom:-40px;background:radial-gradient(circle,rgba(255,255,255,.18),transparent 70%)}
    .hero-bg-image{position:absolute;inset:0;opacity:.28}
    .hero-bg-image img{width:100%;height:100%;object-fit:cover}
    .hero-human{position:absolute;right:8px;bottom:0;width:42%;max-width:260px;z-index:3}
    .dashboard-shell{position:relative;z-index:2;width:74%;min-height:360px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.14);backdrop-filter:blur(12px);border-radius:24px;padding:18px;color:#fff}
    .dash-top{display:flex;gap:10px;margin-bottom:14px}
    .dot{width:10px;height:10px;border-radius:50%;background:#fff;opacity:.7}
    .dash-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:14px}
    .dash-panel,.dash-side{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:14px}
    .dash-lines{display:grid;gap:10px}
    .line{height:12px;border-radius:999px;background:linear-gradient(90deg,rgba(255,255,255,.95),rgba(255,255,255,.18))}
    .line.sm{width:58%}.line.md{width:76%}.line.lg{width:100%}
    .mini-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:12px}
    .mini-card{background:rgba(255,255,255,.1);padding:14px;border-radius:14px;min-height:90px;border:1px solid rgba(255,255,255,.1)}
    .floating-card{position:absolute;background:#fff;border-radius:16px;padding:14px 16px;box-shadow:0 20px 50px rgba(0,0,0,.15);z-index:4;min-width:170px}
    .floating-card h4{margin:0 0 6px;font-size:14px;color:#111827}
    .floating-card p{margin:0;font-size:12px;line-height:1.5;color:#6b7280}
    .float-one{left:12px;top:30px}
    .float-two{left:24px;bottom:34px}
    .trust{padding:24px 0;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
    .trust-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:24px;align-items:center}
    .trust-copy h3{margin:0 0 8px;font-size:28px}
    .trust-copy p{margin:0;color:#4b5563}
    .logo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
    .logo-card{height:72px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #e5e7eb;border-radius:14px;box-shadow:0 4px 18px rgba(0,0,0,.04)}
    .logo-card img{max-height:32px;max-width:80%;filter:grayscale(1);opacity:.85;transition:.25s}
    .logo-card:hover img{filter:grayscale(0);opacity:1}
    .section-head{max-width:760px;margin:0 auto 42px;text-align:center}
    .section-head h2{font-size:40px;line-height:1.15;margin:0 0 14px}
    .section-head p{font-size:17px;color:#4b5563;line-height:1.7;margin:0}
    .split-section{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;background:#f8f8f8;border:1px solid #e5e7eb;border-radius:20px;box-shadow:0 20px 50px rgba(0,0,0,.08)}
    .browser-top{display:flex;align-items:center;gap:8px;padding:12px 14px;background:#fff;border-bottom:1px solid #e5e7eb}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .spotlight{background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:18px;box-shadow:0 10px 35px rgba(0,0,0,.06)}
    .plain-visual{background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:18px;box-shadow:0 10px 35px rgba(0,0,0,.06)}
    .plain-visual img{width:100%;border-radius:18px;display:block}
    .content-panel .tag{display:inline-flex;padding:8px 12px;border-radius:999px;background:rgba(228,41,43,.08);color:${accent};font-size:12px;font-weight:800;letter-spacing:.08em}
    .content-panel h2{font-size:38px;line-height:1.15;margin:14px 0}
    .desc-bar{border-left:3px solid rgba(228,41,43,.18);padding-left:16px;margin-bottom:20px}
    .desc-bar p{margin:0;color:#4b5563;font-size:16px;line-height:1.75}
    .feature-spotlight{background:linear-gradient(135deg,rgba(228,41,43,.05),rgba(228,41,43,.02));border:1px solid rgba(228,41,43,.12);border-radius:18px;padding:20px;margin-bottom:16px}
    .feature-spotlight h3{margin:0 0 8px;font-size:22px}
    .feature-spotlight p{margin:0;color:#4b5563;line-height:1.7}
    .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .feature-card{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:18px;box-shadow:0 6px 24px rgba(0,0,0,.04);transition:.25s}
    .feature-card:hover,.hover-lift:hover{transform:translateY(-6px);box-shadow:0 16px 30px rgba(0,0,0,.08)}
    .feature-icon{width:44px;height:44px;border-radius:12px;background:rgba(228,41,43,.1);display:flex;align-items:center;justify-content:center;margin-bottom:12px;color:${accent}}
    .feature-card h4{margin:0 0 8px;font-size:18px}
    .feature-card p{margin:0;color:#4b5563;line-height:1.65;font-size:15px}
    .integration-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:18px}
    .integration-tile{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:18px}
    .integration-tile h4{margin:0 0 8px;font-size:18px}
    .integration-tile p{margin:0;color:#4b5563;line-height:1.65}
    .metrics-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .metric-card{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:18px;box-shadow:0 8px 24px rgba(0,0,0,.05)}
    .metric-no{font-size:34px;font-weight:800;color:${accent};line-height:1}
    .metric-card h4{margin:10px 0 8px;font-size:18px}
    .metric-card p{margin:0;color:#4b5563;line-height:1.65}
    .pricing-wrap{display:flex;justify-content:center}
    .pricing-card{max-width:820px;width:100%;background:#fff;border:2px solid rgba(228,41,43,.14);border-radius:24px;padding:28px;box-shadow:0 20px 50px rgba(0,0,0,.07);position:relative}
    .price-badge{display:inline-flex;padding:8px 12px;border-radius:999px;background:#e8f7ee;color:#15803d;font-weight:700;font-size:12px;margin-bottom:14px}
    .pricing-card h3{margin:0 0 8px;font-size:34px}
    .pricing-muted{color:#6b7280;margin:0 0 18px}
    .price-row{display:flex;align-items:flex-end;gap:10px;margin-bottom:22px}
    .old-price{font-size:18px;color:#9ca3af;text-decoration:line-through}
    .new-price{font-size:42px;font-weight:800;color:#111827}
    .pricing-list{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin:18px 0 24px}
    .pricing-item{display:flex;gap:10px;align-items:flex-start;background:#f8fafc;border:1px solid #e5e7eb;border-radius:14px;padding:14px}
    .testimonials-wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:24px;align-items:stretch}
    .testimonial-stage{background:#fff;border:1px solid #e5e7eb;border-radius:24px;overflow:hidden;box-shadow:0 16px 45px rgba(0,0,0,.06)}
    .slides{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .slide{min-width:100%;padding:34px}
    .quote-mark{font-size:68px;line-height:1;color:${accent};font-weight:800}
    .quote{font-size:22px;line-height:1.7;color:#111827;margin:0 0 22px}
    .author{display:flex;align-items:center;gap:14px}
    .author img{width:58px;height:58px;border-radius:50%;object-fit:cover;border:3px solid rgba(228,41,43,.12)}
    .stars{color:#f59e0b;font-size:18px;letter-spacing:2px;margin-bottom:8px}
    .author strong{display:block}
    .author span{display:block;color:#6b7280;font-size:14px}
    .dots{display:flex;justify-content:center;gap:8px;padding:0 0 24px}
    .dot-btn{width:8px;height:8px;border-radius:999px;border:none;background:#d1d5db;cursor:pointer;transition:.25s}
    .dot-btn.active{width:24px;background:${accent}}
    .testimonial-grid{display:grid;grid-template-columns:1fr;gap:14px}
    .mini-testimonial{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:18px}
    .mini-testimonial p{margin:8px 0 0;color:#4b5563;line-height:1.65;font-size:15px}
    .footer{background:#111827;color:#fff;padding:42px 0}
    .footer-grid{display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:24px;align-items:start}
    .footer p,.footer a{color:rgba(255,255,255,.8);font-size:14px}
    .footer-links{display:flex;gap:16px;flex-wrap:wrap}
    .socials{display:flex;gap:12px;justify-content:flex-start}
    .socials a{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);transition:.25s}
    .socials a:hover{transform:translateY(-2px);background:rgba(255,255,255,.14)}
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
    .btn-magnetic{position:relative;transition:transform .3s cubic-bezier(.34,1.56,.64,1);display:inline-block}
    .text-reveal-mask{overflow:hidden;display:block}
    .text-reveal-inner{display:block;transform:translateY(110%);will-change:transform}
    .cursor-glow{position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);background:radial-gradient(circle,var(--accent-glow,rgba(99,102,241,.12)) 0%,transparent 70%);transition:opacity .3s ease}
    .glass-card{background:rgba(255,255,255,.9);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.7);border-radius:20px}
    .noise-overlay::after{content:'';position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;opacity:.4;z-index:1}

    @media (max-width: 991px){
      .hero-grid,.split-section,.testimonials-wrap,.trust-grid,.footer-grid,.nav-inner{grid-template-columns:1fr}
      .nav-inner{display:grid}
      .hero h1{font-size:54px}
      .hero-visual-wrap{min-height:420px}
      .hero-visual{min-height:420px}
      .dashboard-shell{width:100%}
      .hero-human{width:34%;max-width:200px}
      .feature-grid,.pricing-list,.metrics-grid,.logo-grid,.integration-grid{grid-template-columns:1fr}
    }
    @media (max-width: 640px){
      .section{padding:64px 0}
      .hero{padding:52px 0 36px}
      .hero h1{font-size:54px}
      .section-head h2,.content-panel h2{font-size:32px}
      .quote{font-size:18px}
      .new-price{font-size:34px}
      .slide{padding:24px}
      .floating-card{min-width:140px;padding:12px}
      .float-one{left:8px;top:18px}
      .float-two{left:12px;bottom:18px}
    }
  `;

  const Icon = ({ type = 0 }) => {
    const icons = [
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" key="1"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z" /><path d="M9 12l2 2 4-4" /></svg>,
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" key="2"><rect x="3" y="4" width="18" height="14" rx="2" /><path d="M7 20h10" /><path d="M12 18v2" /></svg>,
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" key="3"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" /></svg>,
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" key="4"><path d="M12 2v6" /><path d="M12 16v6" /><path d="M4.93 4.93l4.24 4.24" /><path d="M14.83 14.83l4.24 4.24" /><path d="M2 12h6" /><path d="M16 12h6" /><path d="M4.93 19.07l4.24-4.24" /><path d="M14.83 9.17l4.24-4.24" /></svg>,
    ];
    return icons[type % icons.length];
  };

  return (
    <div className="lp">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav" ref={stickyRef}>
        <div className="container nav-inner">
          <div className="brand">
            <span style={{ fontWeight: 800, fontSize: '20px', color: accent }}>Zoho</span>
            <span style={{ color: 'rgba(255,255,255,.7)', fontWeight: 600 }}>Workplace</span>
          </div>
          <div style={{ justifySelf: 'end' }}>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <a
            href={ctaItems[0].href}
            className="animated-cta btn-magnetic"
            target="_blank"
            rel="noreferrer"
            style={{ justifySelf: 'end' }}
          >
            {ctaItems[0].text}
          </a>
        </div>
      </nav>

      <section className="hero noise-overlay">
        <div className="container hero-grid">
          <div className="hero-copy" data-depth="0.15">
            <span className="eyebrow reveal">Email &amp; Collaboration Suite</span>
            <h1 className="split-text reveal">
              Elevate Your Team’s Productivity with <span className="gradient-text">Zoho Workplace</span>
            </h1>
            <p className="reveal reveal-delay-1">
              A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified Communication.
            </p>

            <div className="chips reveal reveal-delay-2">
              {[
                'Easy Setup & Quick Onboarding',
                'A Made in India solution',
                '24x7 Support',
                'Offer: Get Your Free Trial',
              ].map((chip, i) => (
                <div className="chip" key={chip}>
                  <Icon type={i} />
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions reveal reveal-delay-3">
              <a
                href={ctaItems[1].href}
                className="animated-cta btn-magnetic"
                target="_blank"
                rel="noreferrer"
              >
                {ctaItems[1].text}
              </a>
            </div>
            <div className="supporting reveal reveal-delay-3">
              Easy Setup &amp; Quick Onboarding; A Made in India solution; 24x7 Support; Offer: Get Your Free Trial
            </div>
          </div>

          <div className="hero-visual-wrap" data-depth="0.4">
            <div className="hero-visual hero-cinematic-bg">
              <div className="hero-bg-image">
                <img
                  src="/output/generated-assets/ds_1778053563309_4a8866af/31-e3b65c5547.jpg"
                  alt="Zoho Workplace visual"
                />
              </div>

              <div className="dashboard-shell glass-card card-3d-stack">
                <div className="dash-top">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <div className="dash-grid">
                  <div className="dash-panel">
                    <div className="dash-lines">
                      <div className="line lg" />
                      <div className="line md" />
                      <div className="line sm" />
                    </div>
                    <div className="mini-grid">
                      <div className="mini-card">
                        <div className="line sm" />
                        <div className="line md" style={{ marginTop: 12 }} />
                      </div>
                      <div className="mini-card">
                        <div className="line sm" />
                        <div className="line lg" style={{ marginTop: 12 }} />
                      </div>
                    </div>
                  </div>
                  <div className="dash-side">
                    <div className="dash-lines">
                      <div className="line md" />
                      <div className="line sm" />
                      <div className="line lg" />
                      <div className="line sm" />
                    </div>
                  </div>
                </div>
              </div>

              <div className="floating-card float-ambient float-one depth-foreground" data-depth="0.15">
                <h4>Unified Communication</h4>
                <p>Email, chat, documents, meetings, and storage in one workspace.</p>
              </div>

              <div className="floating-card float-drift float-two depth-foreground" data-depth="0.15">
                <h4>AI-Powered Productivity (Zia)</h4>
                <p>Grammar, readability and writing style assistance while you work.</p>
              </div>

              <img
                className="hero-human float-ambient float-delay-1"
                src="/output/generated-assets/ds_1778053563309_4a8866af/18-473c14de05.jpg"
                alt="Zoho Workplace human visual"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container trust-grid">
          <div className="trust-copy reveal">
            <h3>Trusted by 100,000+ Businesses Globally</h3>
            <p>Proof strategy led by logos to create stronger enterprise trust.</p>
          </div>
          <div className="logo-grid reveal reveal-delay-1">
            {[
              '/output/generated-assets/ds_1778053563309_4a8866af/10-4e22c31148.png',
              '/output/generated-assets/ds_1778053563309_4a8866af/22-b3d4199ca5.png',
              '/output/generated-assets/ds_1778053563309_4a8866af/23-61e528786b.png',
            ].map((logo, i) => (
              <div className="logo-card" key={i}>
                <img src={logo} alt={`Trust logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="split-section">
            <div className="scene-expand reveal">
              <div className="plain-visual zoom-reveal">
                <img
                  src={sections[0].image}
                  alt={sections[0].headline}
                />
              </div>
            </div>
            <div className="content-panel">
              <span className="tag reveal">{sections[0].label}</span>
              <h2 className="reveal">
                Why Choose <span className="gradient-text">Zoho Workplace?</span>
              </h2>
              <div className="desc-bar reveal reveal-delay-1">
                <p>{sections[0].description}</p>
              </div>

              <div className="feature-spotlight reveal reveal-delay-2">
                <div className="feature-icon"><Icon type={0} /></div>
                <h3>{sections[0].features[0].title}</h3>
                <p>{sections[0].features[0].description}</p>
              </div>

              <div className="feature-grid stagger-parent">
                {sections[0].features.slice(1).map((f, i) => (
                  <div className="feature-card hover-lift" key={f.title}>
                    <div className="feature-icon"><Icon type={i + 1} /></div>
                    <h4>{f.title}</h4>
                    <p>{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt clip-reveal">
        <div className="container">
          <div className="split-section">
            <div className="content-panel">
              <span className="tag reveal">{sections[1].label}</span>
              <h2 className="reveal">
                Unlock Your <span className="gradient-text">Business Growth</span> with Zoho Workplace
              </h2>
              <div className="desc-bar reveal reveal-delay-1">
                <p>{sections[1].description}</p>
              </div>
              <div className="feature-spotlight reveal reveal-delay-2">
                <div className="feature-icon"><Icon type={1} /></div>
                <h3>{sections[1].features[0].title}</h3>
                <p>{sections[1].features[0].description}</p>
              </div>
              <div className="feature-grid stagger-parent">
                {sections[1].features.slice(1).map((f, i) => (
                  <div className="feature-card hover-lift" key={f.title}>
                    <div className="feature-icon"><Icon type={i + 2} /></div>
                    <h4>{f.title}</h4>
                    <p>{f.description}</p>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 22 }} className="reveal reveal-delay-3">
                <a
                  href={ctaItems[2].href}
                  className="animated-cta"
                  target="_blank"
                  rel="noreferrer"
                >
                  {ctaItems[2].text}
                </a>
              </div>
            </div>

            <div className="scene-expand reveal">
              <div className="browser-frame zoom-reveal">
                <div className="browser-top">
                  <span className="dot" style={{ background: '#ef4444' }} />
                  <span className="dot" style={{ background: '#f59e0b' }} />
                  <span className="dot" style={{ background: '#10b981' }} />
                </div>
                <img src={sections[1].image} alt={sections[1].headline} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pin-scene" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-head">
            <h2 className="reveal">
              Integrate with <span className="gradient-text">Popular Apps</span>
            </h2>
            <p className="reveal reveal-delay-1">
              Connect your Zoho Workplace with other business apps to ensure higher productivity and growth - all within a unified workspace.
            </p>
          </div>

          <div className="split-section">
            <div className="scene-expand reveal">
              <div className="browser-frame zoom-reveal">
                <div className="browser-top">
                  <span className="dot" style={{ background: '#ef4444' }} />
                  <span className="dot" style={{ background: '#f59e0b' }} />
                  <span className="dot" style={{ background: '#10b981' }} />
                </div>
                <img src={sections[2].image} alt={sections[2].headline} />
              </div>
            </div>

            <div>
              <div className="integration-grid stagger-parent">
                {sections[2].features.map((f, i) => (
                  <div className="integration-tile hover-lift" key={f.title}>
                    <div className="feature-icon"><Icon type={i} /></div>
                    <h4>{f.title}</h4>
                    <p>{f.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt clip-reveal">
        <div className="container">
          <div className="split-section">
            <div className="content-panel">
              <span className="tag reveal">{sections[3].label}</span>
              <h2 className="reveal">
                Performance Beyond Limits with <span className="gradient-text">Zoho Workplace</span>
              </h2>
              <div className="metrics-grid stagger-parent" style={{ marginTop: 18 }}>
                {sections[3].features.map((f, i) => (
                  <div className="metric-card hover-lift" key={f.title}>
                    <div className="metric-no">
                      <span data-count={f.stat} data-suffix="%">0%</span>
                    </div>
                    <h4>{f.title}</h4>
                    <p>{f.description}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="scene-expand reveal">
              <div className="browser-frame zoom-reveal">
                <div className="browser-top">
                  <span className="dot" style={{ background: '#ef4444' }} />
                  <span className="dot" style={{ background: '#f59e0b' }} />
                  <span className="dot" style={{ background: '#10b981' }} />
                </div>
                <img src={sections[3].image} alt={sections[3].headline} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="section-head">
            <h2 className="reveal">
              <span className="gradient-text">Zoho Workplace</span> Pricing
            </h2>
            <p className="reveal reveal-delay-1">
              Enterprise email and collaboration capabilities for teams that need a unified workspace.
            </p>
          </div>
          <div className="pricing-wrap">
            <div className="pricing-card reveal">
              <span className="price-badge">Includes</span>
              <h3>Zoho Workplace</h3>
              <p className="pricing-muted">Email &amp; Collaboration Suite</p>
              <div className="price-row">
                <span className="old-price">was</span>
                <span className="new-price">Talk to Expert</span>
              </div>
              <div className="pricing-list stagger-parent">
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
                  <div className="pricing-item" key={i}>
                    <div className="feature-icon" style={{ width: 32, height: 32, marginBottom: 0 }}>
                      <Icon type={i} />
                    </div>
                    <div>{item}</div>
                  </div>
                ))}
              </div>
              <a
                href={ctaItems[3].href}
                className="animated-cta"
                target="_blank"
                rel="noreferrer"
                style={{ width: '100%' }}
              >
                {ctaItems[3].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#ffffff' }}>
        <div className="container">
          <div className="section-head">
            <h2 className="reveal">
              What Enterprises Say About <span className="gradient-text">Zoho Workplace</span>
            </h2>
          </div>

          <div className="testimonials-wrap">
            <div className="testimonial-stage reveal">
              <div
                className="slides"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div className="slide" key={i}>
                    <div className="quote-mark">❝</div>
                    <p className="quote">{t.quote}</p>
                    <div className="stars">★★★★★</div>
                    <div className="author">
                      <img src={t.avatar} alt={t.name} />
                      <div>
                        <strong>{t.name}</strong>
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
                    className={`dot-btn ${i === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="testimonial-grid reveal reveal-delay-1">
              {testimonials.slice(0, 3).map((t, i) => (
                <div className="mini-testimonial hover-lift" key={i}>
                  <div className="stars">★★★★★</div>
                  <strong>{t.name}</strong>
                  <div style={{ color: '#6b7280', fontSize: 14, marginTop: 4 }}>{t.role}</div>
                  <p>{t.quote}</p>
                </div>
              ))}
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
            <p style={{ marginTop: 16 }}>support@techjockey.com</p>
            <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>

          <div>
            <h4 style={{ marginTop: 0, marginBottom: 12 }}>Legal</h4>
            <div className="footer-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>

          <div>
            <h4 style={{ marginTop: 0, marginBottom: 12 }}>Follow Us</h4>
            <div className="socials">
              <a href="https://www.facebook.com/TechjockeyInfotech/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 12a10 10 0 1 0-11.56 9.88v-6.99H7.9V12h2.54V9.8c0-2.5 1.5-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.46H15.2c-1.24 0-1.63.77-1.63 1.56V12h2.77l-.44 2.89h-2.33v6.99A10 10 0 0 0 22 12z"/></svg>
              </a>
              <a href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm4.75-3.
export default LandingPage;