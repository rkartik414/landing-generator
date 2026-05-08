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
            const rawValue = (el.dataset.count || '').trim();
            const target = Number(rawValue);
            if (!Number.isFinite(target)) return;
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            const decimals = rawValue.includes('.') ? rawValue.split('.')[1].length : 0;
            const valueObj = { val: 0 };

            gsap.to(valueObj, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 80%', once: true },
              onUpdate: () => {
                const current = Math.min(target, Math.max(0, valueObj.val));
                el.textContent = `${prefix}${current.toFixed(decimals)}${suffix}`;
              },
              onComplete: () => {
                el.textContent = `${prefix}${target.toFixed(decimals)}${suffix}`;
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
    .media-card{position:relative;background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:14px;box-shadow:0 18px 50px rgba(15,23,42,.08);overflow:hidden}
    .browser-bar{display:flex;align-items:center;gap:8px;padding:0 0 12px}
    .browser-bar span{width:10px;height:10px;border-radius:50%;background:#d1d5db}
    .media-card img{width:100%;height:100%;object-fit:cover;border-radius:16px}
    .feature-list{display:grid;gap:14px}
    .feature-item{padding:18px;border-radius:18px;border:1px solid #e5e7eb;background:#fff;box-shadow:0 8px 24px rgba(0,0,0,.04)}
    .feature-item h3{margin:0 0 8px;font-size:20px}
    .feature-item p{margin:0;color:#4b5563;line-height:1.7}
    .insight-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
    .insight-card{background:#fff;border:1px solid #e5e7eb;border-radius:22px;padding:24px;box-shadow:0 10px 28px rgba(0,0,0,.05)}
    .insight-stat{font-size:42px;line-height:1;font-weight:800;color:#111827;margin-bottom:14px}
    .insight-card h3{margin:0 0 8px;font-size:20px}
    .insight-card p{margin:0;color:#4b5563;line-height:1.7}
    .cta-band{padding:84px 0;background:linear-gradient(135deg,#111827 0%,#1f2937 100%);color:#fff}
    .cta-box{display:grid;grid-template-columns:1.15fr .85fr;gap:28px;align-items:center;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:28px;padding:34px}
    .cta-box h2{font-size:42px;line-height:1.1;margin:0 0 12px}
    .cta-box p{margin:0;color:rgba(255,255,255,.8);font-size:17px;line-height:1.7}
    .cta-points{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
    .cta-point{padding:14px 16px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);font-weight:600}
    .testimonial-wrap{position:relative;max-width:860px;margin:0 auto}
    .testimonial-card{background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:28px;box-shadow:0 12px 30px rgba(15,23,42,.06)}
    .testimonial-quote{font-size:22px;line-height:1.6;color:#111827;margin:0 0 22px}
    .testimonial-user{display:flex;align-items:center;gap:14px}
    .testimonial-user img{width:58px;height:58px;border-radius:50%;object-fit:cover}
    .testimonial-user h4{margin:0;font-size:17px}
    .testimonial-user p{margin:4px 0 0;color:#6b7280}
    .slider-dots{display:flex;justify-content:center;gap:10px;margin-top:18px}
    .slider-dot{width:10px;height:10px;border-radius:50%;background:#d1d5db;border:none;padding:0;cursor:pointer}
    .slider-dot.active{background:${accent}}
    .footer{background:#111827;color:#fff;padding:54px 0 28px}
    .footer-grid{display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:28px}
    .footer-brand img{height:36px;width:auto;margin-bottom:14px}
    .footer p,.footer a{color:rgba(255,255,255,.76);font-size:14px;line-height:1.8}
    .footer h4{margin:0 0 14px;font-size:16px}
    .footer-links{display:grid;gap:10px}
    .footer-bottom{margin-top:28px;padding-top:18px;border-top:1px solid rgba(255,255,255,.08);display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap}
    .socials{display:flex;gap:12px}
    .socials a{width:36px;height:36px;display:inline-flex;align-items:center;justify-content:center;border-radius:50%;background:rgba(255,255,255,.08)}
    .reveal{opacity:0;transform:translateY(28px);transition:all .75s ease}
    .reveal.visible{opacity:1;transform:none}
    .cursor-glow{position:fixed;left:0;top:0;width:22px;height:22px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(228,41,43,.22) 0%,rgba(228,41,43,0) 70%);transform:translate(-50%,-50%);z-index:30}
    .text-reveal-mask{display:block;overflow:hidden}
    .text-reveal-inner{display:block;transform:translateY(110%)}
    @media (max-width:1024px){
      .hero-grid,.split-section,.cta-box,.trust-grid,.footer-grid{grid-template-columns:1fr}
      .insight-grid{grid-template-columns:repeat(2,1fr)}
      .dashboard-shell{width:100%}
      .hero-human{position:relative;right:auto;bottom:auto;width:220px;margin:20px auto 0}
      .cta-points{grid-template-columns:1fr 1fr}
      .nav-inner{grid-template-columns:1fr auto}
      .nav-inner .ghost-btn{display:none}
    }
    @media (max-width:767px){
      .section{padding:64px 0}
      .hero{padding:56px 0 42px}
      .hero h1{font-size:54px}
      .section-head h2,.cta-box h2{font-size:32px}
      .hero-grid{gap:24px}
      .hero-visual,.hero-visual-wrap{min-height:auto}
      .dashboard-shell{min-height:auto}
      .dash-grid,.cta-points,.insight-grid,.logo-grid{grid-template-columns:1fr}
      .testimonial-quote{font-size:18px}
      .insight-stat{font-size:36px}
      .nav-inner{gap:12px}
      .brand img{height:30px}
      .animated-cta,.ghost-btn{padding:11px 18px}
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="lp">
        <nav className="nav" ref={stickyRef}>
          <div className="container nav-inner">
            <a
              className="brand"
              href="https://www.techjockey.com/"
              target="_blank"
              rel="noreferrer"
              aria-label="Techjockey"
            >
              <img
                src="https://static.techjockey.com/tj-v2-assets/images/tj-logo-new.svg"
                alt="Techjockey"
              />
            </a>
            <a
              className="ghost-btn btn-magnetic"
              href="https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software"
              target="_blank"
              rel="noreferrer"
            >
              Talk to Expert
            </a>
            <a
              className="animated-cta btn-magnetic"
              href="https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software"
              target="_blank"
              rel="noreferrer"
            >
              Talk to Expert
            </a>
          </div>
        </nav>

        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <span className="eyebrow">PRODUCTIVITY SOFTWARE</span>
              <h1 className="split-text">Collaborate Smarter with Zoho Workplace</h1>
              <p>
                Empower your team with a unified platform for email, documents, chat, meetings,
                and cloud storage. Zoho Workplace helps businesses streamline communication and
                improve collaboration from anywhere.
              </p>
              <div className="chips">
                <div className="chip">Business Email</div>
                <div className="chip">Team Collaboration</div>
                <div className="chip">Documents & Storage</div>
                <div className="chip">Video Meetings</div>
              </div>
              <div className="hero-actions">
                <a
                  className="animated-cta btn-magnetic"
                  href={ctaItems[0].href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {ctaItems[0].text}
                </a>
                <a
                  className="ghost-btn"
                  href={ctaItems[1].href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ color: '#111827', borderColor: '#d1d5db' }}
                >
                  {ctaItems[1].text}
                </a>
              </div>
              <div className="supporting">
                Trusted solution to simplify communication, content creation, and team productivity.
              </div>
            </div>

            <div className="hero-visual-wrap reveal">
              <div className="hero-visual scene-expand">
                <div className="hero-bg-image hero-cinematic-bg" style={{ transform: 'scale(1.08)' }}>
                  <img
                    src="/output/generated-assets/ds_1778053563309_4a8866af/17-8ee9780f0b.jpg"
                    alt="Zoho Workplace background"
                  />
                </div>

                <div className="floating-card float-one">
                  <h4>Unified Tools</h4>
                  <p>Email, chat, meetings, and documents in one place.</p>
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
                        <div className="line md" />
                        <div className="line sm" />
                        <div className="line md" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="floating-card float-two">
                  <h4>Work Anywhere</h4>
                  <p>Stay connected across devices with seamless access.</p>
                </div>

                <img
                  className="hero-human"
                  src="/output/generated-assets/ds_1778053563309_4a8866af/24-4e9d1f3318.png"
                  alt="Zoho Workplace user"
                />
              </div>
            </div>
          </div>
        </section>

        <section className="trust">
          <div className="container trust-grid">
            <div className="trust-copy reveal">
              <h3>Everything your team needs in one workspace</h3>
              <p>
                Zoho Workplace combines communication, content, and collaboration apps to help
                businesses move faster and work smarter.
              </p>
            </div>
            <div className="logo-grid reveal">
              <div className="logo-card">
                <span>Zoho Mail</span>
              </div>
              <div className="logo-card">
                <span>Zoho Writer</span>
              </div>
              <div className="logo-card">
                <span>Zoho Cliq</span>
              </div>
              <div className="logo-card">
                <span>Zoho Meeting</span>
              </div>
              <div className="logo-card">
                <span>Zoho WorkDrive</span>
              </div>
              <div className="logo-card">
                <span>Zoho Sheet</span>
              </div>
            </div>
          </div>
        </section>

        {sections.slice(0, 3).map((section, index) => (
          <section
            key={section.headline}
            className={`section ${index % 2 === 1 ? 'section-alt' : ''}`}
          >
            <div className="container">
              <div className="section-head reveal">
                <div className="section-label">{section.label}</div>
                <h2>{section.headline}</h2>
                <p>{section.description}</p>
              </div>

              <div className="split-section">
                <div className={`media-card reveal ${section.browser ? 'clip-reveal' : 'zoom-reveal'}`}>
                  {section.browser && (
                    <div className="browser-bar">
                      <span />
                      <span />
                      <span />
                    </div>
                  )}
                  <img src={section.image} alt={section.headline} style={{ transform: 'scale(1.06)' }} />
                </div>

                <div className="feature-list stagger-parent">
                  {section.features.map((feature) => (
                    <div
                      key={feature.title}
                      className="feature-item"
                      style={{ opacity: 0, transform: 'translateY(20px)' }}
                    >
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="section section-alt">
          <div className="container">
            <div className="section-head reveal">
              <div className="section-label">{sections[3].label}</div>
              <h2>{sections[3].headline}</h2>
            </div>

            <div className="split-section" style={{ alignItems: 'stretch' }}>
              <div className="media-card reveal zoom-reveal">
                <img
                  src={sections[3].image}
                  alt={sections[3].headline}
                  style={{ transform: 'scale(1.05)', minHeight: '100%', objectFit: 'cover' }}
                />
              </div>

              <div className="insight-grid">
                {sections[3].features.map((feature) => (
                  <div key={feature.title} className="insight-card reveal">
                    <div
                      className="insight-stat"
                      data-count={feature.stat}
                      data-suffix="%"
                    >
                      0%
                    </div>
                    <h3>{feature.title}</h3>
                    <p>{feature.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <div className="section-label">TESTIMONIALS</div>
              <h2>What Businesses Say About Zoho Workplace</h2>
              <p>
                Hear how organizations improved communication, collaboration, and productivity with
                Zoho Workplace.
              </p>
            </div>

            <div className="testimonial-wrap reveal">
              <div className="testimonial-card">
                <p className="testimonial-quote">“{testimonials[activeSlide].quote}”</p>
                <div className="testimonial-user">
                  <img src={testimonials[activeSlide].avatar} alt={testimonials[activeSlide].name} />
                  <div>
                    <h4>{testimonials[activeSlide].name}</h4>
                    <p>{testimonials[activeSlide].role}</p>
                  </div>
                </div>
              </div>

              <div className="slider-dots">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`slider-dot ${activeSlide === index ? 'active' : ''}`}
                    onClick={() => setActiveSlide(index)}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="cta-band">
          <div className="container">
            <div className="cta-box reveal">
              <div>
                <div className="section-label" style={{ color: '#ffffff' }}>
                  GET STARTED
                </div>
                <h2>Choose Zoho Workplace for Better Team Productivity</h2>
                <p>
                  Simplify communication, improve collaboration, and equip your teams with the
                  right tools to work efficiently from anywhere.
                </p>
                <div className="hero-actions" style={{ marginTop: '22px' }}>
                  <a
                    className="animated-cta btn-magnetic"
                    href={ctaItems[2].href}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {ctaItems[2].text}
                  </a>
                </div>
              </div>

              <div className="cta-points">
                <div className="cta-point">Business Email & Collaboration</div>
                <div className="cta-point">Secure Cloud Productivity Apps</div>
                <div className="cta-point">Remote Work Ready Platform</div>
                <div className="cta-point">Expert Buying Assistance</div>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div className="footer-brand">
                <img
                  src="https://static.techjockey.com/tj-v2-assets/images/tj-logo-new.svg"
                  alt="Techjockey"
                />
                <p>
                  Techjockey helps businesses discover, compare, and buy the right software with
                  expert assistance and reliable support.
                </p>
              </div>

              <div>
                <h4>Quick Links</h4>
                <div className="footer-links">
                  <a href="https://www.techjockey.com/" target="_blank" rel="noreferrer">
                    Home
                  </a>
                  <a href="https://www.techjockey.com/categories" target="_blank" rel="noreferrer">
                    Categories
                  </a>
                  <a href="https://www.techjockey.com/blog" target="_blank" rel="noreferrer">
                    Blog
                  </a>
                </div>
              </div>

              <div>
                <h4>Contact</h4>
                <div className="footer-links">
                  <a href="https://www.techjockey.com/contact-us" target="_blank" rel="noreferrer">
                    Contact Us
                  </a>
                  <a href="https://www.techjockey.com/about-us" target="_blank" rel="noreferrer">
                    About Us
                  </a>
                  <a href={ctaItems[3].href} target="_blank" rel="noreferrer">
                    {ctaItems[3].text}
                  </a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© 2024 Techjockey. All rights reserved.</p>
              <div className="socials">
                <a
                  href="https://www.facebook.com/TechjockeyInfo/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Facebook"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H17V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3h2.8v8h3.2z" />
                  </svg>
                </a>
                <a
                  href="https://twitter.com/TechjockeyInfo"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Twitter"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.2l7.3-8.4L1 2h6.3l4.4 5.9L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z" />
                  </svg>
                </a>
                <a
                  href="https://www.linkedin.com/company/techjockey-com/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="LinkedIn"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 12.58c0-3.13-1.67-4.58-3.9-4.58a3.37 3.37 0 0 0-3.05 1.68V8.5h-3.24c.04.78 0 11.5 0 11.5h3.24v-6.42c0-.34.03-.68.13-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.03 1.88 2.54V20H20.44l-.01-7.42z" />
                  </svg>
                </a>
                <a
                  href="https://www.instagram.com/techjockey/"
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Instagram"
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm4.75-3.25a1.25 1.25 0 1 0 0 2.5 1.25 1.25 0 0 0 0-2.5z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;