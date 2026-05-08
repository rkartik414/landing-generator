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
            const original = el.getAttribute('data-split') || el.textContent || '';
            if (el.querySelector('.char')) return;
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
            gsap.from(
              { val: 0 },
              {
                val: target,
                duration: 2,
                ease: 'power2.out',
                scrollTrigger: { trigger: el, start: 'top 80%', once: true },
                onUpdate: function () {
                  el.textContent = prefix + this.targets()[0].val.toFixed(target % 1 ? 1 : 0) + suffix;
                },
              }
            );
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
  }, [accent, primary]);

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
    img{max-width:100%;display:block}
    .lp{background:${bodyBg};overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:84px 0;position:relative}
    .section-alt{background:#f8fafc}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .nav{position:sticky;top:0;z-index:50;background:#111827;color:#fff;transition:.3s;border-bottom:1px solid rgba(255,255,255,.08)}
    .nav.scrolled{backdrop-filter:blur(20px);background:rgba(17,24,39,.92)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand{display:flex;align-items:center;gap:12px;font-weight:800}
    .brand img{height:34px;width:auto}
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
    .logo-card span{font-weight:700;color:#374151}
    .section-head{max-width:760px;margin:0 auto 42px;text-align:center}
    .section-head h2{font-size:40px;line-height:1.15;margin:0 0 14px}
    .section-head p{font-size:17px;color:#4b5563;line-height:1.7;margin:0}
    .section-label{display:inline-block;font-size:12px;font-weight:800;letter-spacing:.08em;color:${accent};margin-bottom:10px}
    .split-section{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;background:#f8f8f8;border:1px solid #e5e7eb;border-radius:20px;box-shadow:0 20px 50px rgba(0,0,0,.08)}
    .browser-top{display:flex;align-items:center;gap:8px;padding:12px 14px;background:#fff;border-bottom:1px solid #e5e7eb}
    .browser-bar{height:10px;border-radius:999px;background:#eef2f7;flex:1;margin-left:8px}
    .media-wrap{position:relative;background:#fff}
    .media-wrap img{width:100%;height:100%;object-fit:cover}
    .feature-media{min-height:420px}
    .copy-block h3{font-size:36px;line-height:1.14;margin:0 0 14px}
    .copy-block p.lead{font-size:17px;color:#4b5563;line-height:1.7;margin:0 0 22px}
    .feature-list{display:grid;gap:14px}
    .feature-item{display:flex;gap:14px;padding:18px;border-radius:18px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 10px 30px rgba(15,23,42,.05)}
    .feature-icon{width:42px;height:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:rgba(228,41,43,.1);color:${accent};flex:0 0 42px;font-weight:800}
    .feature-item h4{margin:0 0 6px;font-size:18px}
    .feature-item p{margin:0;color:#4b5563;line-height:1.7}
    .stats-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
    .stat-card{padding:24px;border-radius:20px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 12px 34px rgba(15,23,42,.05)}
    .stat-value{font-size:44px;font-weight:800;line-height:1;color:${accent};margin-bottom:8px}
    .stat-card h4{margin:0 0 8px;font-size:20px}
    .stat-card p{margin:0;color:#4b5563;line-height:1.7}
    .testimonial-shell{position:relative;max-width:980px;margin:0 auto}
    .testimonial-slider{position:relative;min-height:320px}
    .testimonial-card{position:absolute;inset:0;opacity:0;transform:translateX(24px);transition:all .5s ease;pointer-events:none;background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:28px;box-shadow:0 16px 50px rgba(15,23,42,.08)}
    .testimonial-card.active{opacity:1;transform:translateX(0);pointer-events:auto}
    .testimonial-quote{font-size:22px;line-height:1.6;color:#111827;margin:0 0 24px;font-weight:500}
    .testimonial-user{display:flex;align-items:center;gap:14px}
    .testimonial-user img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid #fee2e2}
    .testimonial-user h4{margin:0;font-size:18px}
    .testimonial-user p{margin:2px 0 0;color:#6b7280}
    .testimonial-dots{display:flex;justify-content:center;gap:10px;margin-top:24px}
    .testimonial-dots button{width:11px;height:11px;border:none;border-radius:50%;background:#d1d5db;cursor:pointer;padding:0}
    .testimonial-dots button.active{background:${accent};transform:scale(1.15)}
    .cta-band{background:linear-gradient(135deg,#111827 0%,#1f2937 100%);color:#fff;border-radius:28px;padding:42px;display:grid;grid-template-columns:1.1fr auto;gap:20px;align-items:center}
    .cta-band h3{margin:0 0 10px;font-size:34px;line-height:1.12}
    .cta-band p{margin:0;color:rgba(255,255,255,.78);line-height:1.7}
    .footer{background:#111827;color:#fff;padding:28px 0 18px;margin-top:84px}
    .footer-top{display:grid;grid-template-columns:1fr auto;gap:24px;align-items:center}
    .footer-brand{display:flex;align-items:center;gap:12px}
    .footer-brand img{height:36px;width:auto}
    .footer-brand p{margin:4px 0 0;color:rgba(255,255,255,.72);font-size:14px}
    .footer-links{display:flex;align-items:center;gap:18px;flex-wrap:wrap}
    .socials{display:flex;align-items:center;gap:12px}
    .socials a{display:inline-flex;align-items:center;justify-content:center;width:38px;height:38px;border-radius:50%;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1);transition:.25s}
    .socials a:hover{background:${accent};border-color:${accent};transform:translateY(-2px)}
    .footer-bottom{margin-top:18px;padding-top:18px;border-top:1px solid rgba(255,255,255,.1);display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;color:rgba(255,255,255,.72);font-size:14px}
    .reveal{opacity:0;transform:translateY(22px);transition:all .7s ease}
    .reveal.visible{opacity:1;transform:none}
    .cursor-glow{position:fixed;left:0;top:0;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle,rgba(228,41,43,.10),transparent 65%);pointer-events:none;z-index:1;transform:translate(-50%,-50%)}
    .scene-expand img,.scene-expand video,.zoom-reveal img,.zoom-reveal video{transform:scale(1.08)}
    @media (max-width: 991px){
      .nav-inner{grid-template-columns:1fr auto}
      .nav-inner .ghost-btn{display:none}
      .hero-grid,.split-section,.trust-grid,.cta-band,.footer-top{grid-template-columns:1fr}
      .hero h1{font-size:54px}
      .hero-visual-wrap,.hero-visual{min-height:440px}
      .dashboard-shell{width:78%}
      .hero-human{width:34%;max-width:220px}
      .stats-grid{grid-template-columns:1fr 1fr}
    }
    @media (max-width: 767px){
      .section{padding:64px 0}
      .container{width:min(1180px,calc(100% - 24px))}
      .hero{padding:48px 0 40px}
      .hero h1{font-size:54px}
      .hero p{font-size:16px}
      .section-head h2{font-size:32px}
      .copy-block h3{font-size:30px}
      .trust-copy h3,.cta-band h3{font-size:28px}
      .hero-visual-wrap,.hero-visual{min-height:400px}
      .dashboard-shell{width:100%;min-height:auto}
      .hero-human{display:none}
      .floating-card{position:relative;left:auto;top:auto;bottom:auto;margin-top:14px}
      .float-one,.float-two{left:auto;top:auto;bottom:auto}
      .stats-grid{grid-template-columns:1fr}
      .testimonial-slider{min-height:380px}
      .testimonial-quote{font-size:18px}
      .cta-band{padding:30px 22px}
      .footer-bottom{flex-direction:column}
    }
    @media (max-width: 480px){
      .hero h1{font-size:54px}
      .hero-actions{flex-direction:column;align-items:stretch}
      .animated-cta,.ghost-btn{width:100%}
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="lp">
        <nav className="nav" ref={stickyRef}>
          <div className="container nav-inner">
            <a href="https://www.techjockey.com/" className="brand" target="_blank" rel="noreferrer" aria-label="Techjockey">
              <img src="https://static.techjockey.com/web-assets/images/techjockey-logo.svg" alt="Techjockey" />
            </a>
            <a
              href={ctaItems[0].href}
              className="ghost-btn btn-magnetic"
              target="_blank"
              rel="noreferrer"
            >
              {ctaItems[0].text}
            </a>
            <a
              href={ctaItems[0].href}
              className="animated-cta btn-magnetic"
              target="_blank"
              rel="noreferrer"
            >
              {ctaItems[0].text}
            </a>
          </div>
        </nav>

        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow">PRODUCTIVITY SOFTWARE</span>
              <h1 className="split-text">
                Power Team Communication and Collaboration with Zoho Workplace
              </h1>
              <p>
                Zoho Workplace is a unified business communication and collaboration suite that brings together email, chat, documents, meetings, and cloud storage to help teams work smarter from anywhere.
              </p>
              <div className="chips">
                <div className="chip">Secure Business Email</div>
                <div className="chip">Real-Time Collaboration</div>
                <div className="chip">Integrated Productivity Apps</div>
                <div className="chip">Remote Work Ready</div>
              </div>
              <div className="hero-actions">
                <a
                  href={ctaItems[0].href}
                  className="animated-cta btn-magnetic"
                  target="_blank"
                  rel="noreferrer"
                >
                  {ctaItems[0].text}
                </a>
                <a
                  href="#testimonials"
                  className="ghost-btn"
                  style={{ color: '#111827', borderColor: '#d1d5db', background: '#fff' }}
                >
                  See Customer Stories
                </a>
              </div>
              <div className="supporting">
                Trusted platform guidance and buying assistance from Techjockey.
              </div>
            </div>

            <div className="hero-visual-wrap reveal">
              <div className="hero-visual scene-expand">
                <div className="hero-bg-image hero-cinematic-bg">
                  <img src="/output/generated-assets/ds_1778053563309_4a8866af/17-8ee9780f0b.jpg" alt="Zoho Workplace interface background" />
                </div>

                <div className="floating-card float-one reveal">
                  <h4>Unified productivity</h4>
                  <p>Email, chat, docs and meetings in one connected workspace.</p>
                </div>

                <div className="dashboard-shell">
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
                        <div className="mini-card" />
                        <div className="mini-card" />
                        <div className="mini-card" />
                        <div className="mini-card" />
                      </div>
                    </div>
                    <div className="dash-side">
                      <div className="dash-lines">
                        <div className="line lg" />
                        <div className="line sm" />
                        <div className="line md" />
                        <div className="line lg" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="floating-card float-two reveal">
                  <h4>Anywhere access</h4>
                  <p>Keep work moving across office, home and mobile devices.</p>
                </div>

                <img
                  className="hero-human"
                  src="/output/generated-assets/ds_1778053563309_4a8866af/24-4e9d1f3318.png"
                  alt="Zoho Workplace professional"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="trust">
          <div className="container trust-grid">
            <div className="trust-copy reveal">
              <h3>Everything your business needs to communicate, create and collaborate</h3>
              <p>
                Zoho Workplace helps teams centralize core workflows with business email, office apps, file management, communication, and collaboration tools.
              </p>
            </div>
            <div className="logo-grid reveal">
              <div className="logo-card"><span>Zoho Mail</span></div>
              <div className="logo-card"><span>Zoho Cliq</span></div>
              <div className="logo-card"><span>Zoho WorkDrive</span></div>
              <div className="logo-card"><span>Zoho Writer</span></div>
              <div className="logo-card"><span>Zoho Sheet</span></div>
              <div className="logo-card"><span>Zoho Show</span></div>
            </div>
          </div>
        </section>

        {sections.slice(0, 3).map((section, index) => (
          <section
            key={section.headline}
            className={`section ${index % 2 === 1 ? 'section-alt' : ''}`}
          >
            <div className="container split-section">
              <div className={`reveal ${index % 2 === 1 ? 'order-2' : ''}`}>
                <div className="copy-block">
                  <span className="section-label">{section.label}</span>
                  <h3 className="split-text">{section.headline}</h3>
                  <p className="lead">{section.description}</p>
                  <div className="feature-list stagger-parent">
                    {section.features.map((item, i) => (
                      <div className="feature-item" key={item.title}>
                        <div className="feature-icon">{i + 1}</div>
                        <div>
                          <h4>{item.title}</h4>
                          <p>{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div className="reveal zoom-reveal">
                <div className="browser-frame">
                  {section.browser && (
                    <div className="browser-top">
                      <span className="dot" style={{ background: '#f87171', opacity: 1 }} />
                      <span className="dot" style={{ background: '#fbbf24', opacity: 1 }} />
                      <span className="dot" style={{ background: '#34d399', opacity: 1 }} />
                      <div className="browser-bar" />
                    </div>
                  )}
                  <div className="media-wrap feature-media">
                    <img src={section.image} alt={section.headline} />
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="section section-alt">
          <div className="container">
            <div className="section-head reveal">
              <span className="section-label">{sections[3].label}</span>
              <h2 className="split-text">{sections[3].headline}</h2>
            </div>
            <div className="split-section">
              <div className="reveal">
                <div className="browser-frame">
                  <div className="browser-top">
                    <span className="dot" style={{ background: '#f87171', opacity: 1 }} />
                    <span className="dot" style={{ background: '#fbbf24', opacity: 1 }} />
                    <span className="dot" style={{ background: '#34d399', opacity: 1 }} />
                    <div className="browser-bar" />
                  </div>
                  <div className="media-wrap feature-media">
                    <img src={sections[3].image} alt={sections[3].headline} />
                  </div>
                </div>
              </div>
              <div className="reveal">
                <div className="stats-grid">
                  {sections[3].features.map((item) => (
                    <div className="stat-card" key={item.title}>
                      <div className="stat-value">
                        <span data-count={item.stat} data-suffix="%">
                          0%
                        </span>
                      </div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="testimonials">
          <div className="container">
            <div className="section-head reveal">
              <span className="section-label">TESTIMONIALS</span>
              <h2 className="split-text">What Businesses Say About Zoho Workplace</h2>
              <p>
                Explore how teams use Zoho Workplace to simplify communication, improve collaboration, and enhance overall productivity.
              </p>
            </div>

            <div className="testimonial-shell reveal">
              <div className="testimonial-slider">
                {testimonials.map((item, index) => (
                  <div
                    key={`${item.name}-${index}`}
                    className={`testimonial-card ${activeSlide === index ? 'active' : ''}`}
                  >
                    <p className="testimonial-quote">“{item.quote}”</p>
                    <div className="testimonial-user">
                      <img src={item.avatar} alt={item.name} />
                      <div>
                        <h4>{item.name}</h4>
                        <p>{item.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="testimonial-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={activeSlide === index ? 'active' : ''}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-band reveal">
              <div>
                <h3>Ready to simplify business communication with Zoho Workplace?</h3>
                <p>
                  Connect with Techjockey experts to find the right Zoho Workplace solution for your business needs and team size.
                </p>
              </div>
              <a
                href={ctaItems[0].href}
                className="animated-cta btn-magnetic"
                target="_blank"
                rel="noreferrer"
              >
                {ctaItems[0].text}
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-top">
              <div className="footer-brand">
                <img src="https://static.techjockey.com/web-assets/images/techjockey-logo.svg" alt="Techjockey" />
                <div>
                  <strong>Techjockey</strong>
                  <p>Your trusted software discovery and buying partner.</p>
                </div>
              </div>

              <div className="footer-links">
                <a href="https://www.techjockey.com/" target="_blank" rel="noreferrer">Website</a>
                <a href="https://www.techjockey.com/contact-us" target="_blank" rel="noreferrer">Contact</a>
                <a href="https://www.techjockey.com/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
                <div className="socials">
                  <a href="https://www.facebook.com/TechjockeyInfotech/" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H16.7V4.8c-.3 0-1.3-.1-2.4-.1-2.4 0-4 1.4-4 4.1V11H8v3h2.3v8h3.2z" />
                    </svg>
                  </a>
                  <a href="https://www.linkedin.com/company/techjockey/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M6.94 8.5A1.94 1.94 0 1 1 7 4.62a1.94 1.94 0 0 1-.06 3.88zM5.3 9.98h3.32V20H5.3V9.98zm5.26 0h3.18v1.37h.04c.44-.84 1.53-1.72 3.16-1.72 3.38 0 4.01 2.23 4.01 5.13V20h-3.31v-4.65c0-1.11-.02-2.53-1.54-2.53-1.54 0-1.78 1.2-1.78 2.45V20h-3.31V9.98z" />
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm4.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
                    </svg>
                  </a>
                  <a href="https://www.youtube.com/@TechjockeyOfficial" target="_blank" rel="noreferrer" aria-label="YouTube">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M21.6 7.2a2.99 2.99 0 0 0-2.1-2.12C17.67 4.5 12 4.5 12 4.5s-5.67 0-7.5.58A2.99 2.99 0 0 0 2.4 7.2 31.4 31.4 0 0 0 1.88 12a31.4 31.4 0 0 0 .52 4.8 2.99 2.99 0 0 0 2.1 2.12c1.83.58 7.5.58 7.5.58s5.67 0 7.5-.58a2.99 2.99 0 0 0 2.1-2.12 31.4 31.4 0 0 0 .52-4.8 31.4 31.4 0 0 0-.52-4.8zM10 15.5v-7l6 3.5-6 3.5z" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <span>© 2026 Techjockey. All rights reserved.</span>
              <span>Zoho Workplace discovery support powered by Techjockey.</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;