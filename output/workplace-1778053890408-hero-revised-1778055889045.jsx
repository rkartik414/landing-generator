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
    .hero{padding:72px 0 56px;background:linear-gradient(180deg,#fff 0%,#fff6f6 100%);position:relative;overflow:hidden}
    .hero::before{content:'';position:absolute;left:-120px;top:-80px;width:340px;height:340px;border-radius:50%;background:radial-gradient(circle,rgba(228,41,43,.10),transparent 72%)}
    .hero::after{content:'';position:absolute;right:-80px;bottom:-120px;width:360px;height:360px;border-radius:50%;background:radial-gradient(circle,rgba(15,23,42,.06),transparent 72%)}
    .hero-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:36px;align-items:center}
    .hero-copy{position:relative;z-index:2}
    .eyebrow{display:inline-flex;padding:8px 14px;border-radius:999px;background:rgba(228,41,43,.08);border:1px solid rgba(228,41,43,.18);color:${accent};font-size:12px;font-weight:700;letter-spacing:.08em}
    .hero h1{font-size:54px;line-height:1.04;letter-spacing:-.03em;margin:18px 0 18px;font-weight:800}
    .hero p{font-size:18px;line-height:1.7;color:#4b5563;margin:0 0 18px}
    .supporting{font-size:14px;color:#6b7280;margin-top:16px}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(228,41,43,.2);background:rgba(228,41,43,.06);font-size:13px;color:#374151;font-weight:600}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:10px}
    .hero-visual-wrap{min-height:540px;display:flex;align-items:center;justify-content:center;position:relative}
    .hero-visual{position:relative;width:100%;min-height:540px;border-radius:32px;background:linear-gradient(135deg,#fff 0%,#fff 34%,#f8fafc 100%);padding:24px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 24px 70px rgba(15,23,42,.12)}
    .hero-visual::before{content:'';position:absolute;inset:0;background:linear-gradient(135deg,rgba(228,41,43,.05) 0%,rgba(255,255,255,0) 45%,rgba(17,24,39,.04) 100%)}
    .hero-human-panel{position:absolute;inset:18px 18px 18px 18px;border-radius:26px;overflow:hidden;background:linear-gradient(180deg,#f3f4f6 0%,#e5e7eb 100%)}
    .hero-human-panel img{width:100%;height:100%;object-fit:cover;object-position:center top;filter:saturate(1.02)}
    .hero-human-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(255,255,255,.94) 0%,rgba(255,255,255,.72) 34%,rgba(255,255,255,.10) 62%,rgba(255,255,255,.02) 100%)}
    .dashboard-shell{position:relative;z-index:2;width:66%;min-height:360px;background:rgba(17,24,39,.92);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(12px);border-radius:24px;padding:18px;color:#fff;box-shadow:0 22px 54px rgba(15,23,42,.28)}
    .dash-top{display:flex;gap:10px;margin-bottom:14px}
    .dot{width:10px;height:10px;border-radius:50%;background:#fff;opacity:.7}
    .dash-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:14px}
    .dash-panel,.dash-side{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:14px}
    .dash-lines{display:grid;gap:10px}
    .line{height:12px;border-radius:999px;background:linear-gradient(90deg,rgba(255,255,255,.95),rgba(255,255,255,.18))}
    .line.sm{width:58%}.line.md{width:76%}.line.lg{width:100%}
    .mini-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:10px;margin-top:12px}
    .mini-card{background:rgba(255,255,255,.1);padding:14px;border-radius:14px;min-height:90px;border:1px solid rgba(255,255,255,.1)}
    .floating-card{position:absolute;background:#fff;border-radius:18px;padding:14px 16px;box-shadow:0 20px 50px rgba(0,0,0,.12);z-index:4;min-width:190px;border:1px solid rgba(229,231,235,.9)}
    .floating-card h4{margin:0 0 6px;font-size:14px;color:#111827}
    .floating-card p{margin:0;font-size:12px;line-height:1.5;color:#6b7280}
    .float-one{left:18px;top:28px}
    .float-two{left:26px;bottom:34px}
    .float-three{right:18px;top:26px}
    .persona-badge{display:flex;align-items:center;gap:10px}
    .persona-avatar{width:36px;height:36px;border-radius:50%;overflow:hidden;flex:0 0 36px}
    .persona-avatar img{width:100%;height:100%;object-fit:cover}
    .persona-text{display:grid;gap:2px}
    .persona-text strong{font-size:13px;color:#111827}
    .persona-text span{font-size:11px;color:#6b7280}
    .trust{padding:24px 0;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
    .trust-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:24px;align-items:center}
    .trust-copy h3{margin:0 0 8px;font-size:28px}
    .trust-copy p{margin:0;color:#4b5563}
    .logo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
    .logo-card{height:72px;display:flex;align-items:center;justify-content:center;background:#fff;border:1px solid #e5e7eb;border-radius:14px;box-shadow:0 4px 18px rgba(0,0,0,.04)}
    .logo-card span{font-weight:700;color:#374151}
    .section-head{max-width:760px;margin:0 auto 42px;text-align:center}
    .section-head .label{display:inline-block;font-size:12px;font-weight:800;letter-spacing:.1em;color:${accent};margin-bottom:12px}
    .section-head h2{margin:0 0 12px;font-size:42px;line-height:1.12;letter-spacing:-.02em}
    .section-head p{margin:0 auto;color:#6b7280;font-size:17px;line-height:1.7}
    .feature-layout{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center}
    .feature-media{background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:16px;box-shadow:0 12px 30px rgba(0,0,0,.06)}
    .feature-media img{border-radius:16px;width:100%;height:auto}
    .feature-list{display:grid;gap:14px}
    .feature-card{padding:18px;border-radius:18px;border:1px solid #e5e7eb;background:#fff;box-shadow:0 8px 22px rgba(0,0,0,.04)}
    .feature-card h3{margin:0 0 8px;font-size:20px}
    .feature-card p{margin:0;color:#6b7280;line-height:1.7}
    .insight-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
    .insight-card{background:#fff;border:1px solid #e5e7eb;border-radius:20px;padding:24px;box-shadow:0 10px 28px rgba(0,0,0,.05)}
    .insight-card .stat{font-size:42px;font-weight:800;color:${accent};line-height:1}
    .insight-card h3{margin:12px 0 8px;font-size:20px}
    .insight-card p{margin:0;color:#6b7280;line-height:1.7}
    .testimonial-section{background:#111827;color:#fff}
    .testimonial-wrap{display:grid;grid-template-columns:1fr .95fr;gap:28px;align-items:center}
    .testimonial-copy h2{margin:0 0 12px;font-size:42px;line-height:1.12}
    .testimonial-copy p{margin:0;color:rgba(255,255,255,.78);line-height:1.7;font-size:17px}
    .testimonial-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:28px;min-height:280px;display:flex;flex-direction:column;justify-content:space-between}
    .testimonial-quote{font-size:22px;line-height:1.6;color:#fff;margin:0 0 20px}
    .testimonial-author{display:flex;align-items:center;gap:14px}
    .testimonial-author img{width:56px;height:56px;border-radius:50%;object-fit:cover}
    .testimonial-author strong{display:block;font-size:16px}
    .testimonial-author span{display:block;font-size:14px;color:rgba(255,255,255,.7)}
    .testimonial-dots{display:flex;gap:8px;margin-top:18px}
    .testimonial-dots button{width:10px;height:10px;border-radius:50%;border:none;background:rgba(255,255,255,.28);cursor:pointer;padding:0}
    .testimonial-dots button.active{background:${accent}}
    .faq-grid{display:grid;gap:14px;max-width:900px;margin:0 auto}
    .faq-item{border:1px solid #e5e7eb;border-radius:18px;padding:20px;background:#fff}
    .faq-item h3{margin:0 0 10px;font-size:18px}
    .faq-item p{margin:0;color:#6b7280;line-height:1.7}
    .final-cta{background:linear-gradient(135deg,#111827 0%,#1f2937 100%);color:#fff;border-radius:28px;padding:42px;display:grid;grid-template-columns:1.2fr auto;gap:24px;align-items:center}
    .final-cta h2{margin:0 0 10px;font-size:38px;line-height:1.12}
    .final-cta p{margin:0;color:rgba(255,255,255,.78);line-height:1.7}
    .footer{background:#0b1220;color:#fff;padding:28px 0}
    .footer-grid{display:grid;grid-template-columns:1fr auto;gap:18px;align-items:center}
    .footer-brand{display:flex;align-items:center;gap:12px}
    .footer-brand img{height:32px}
    .footer-copy{font-size:14px;color:rgba(255,255,255,.72)}
    .footer-socials{display:flex;align-items:center;gap:10px}
    .footer-socials a{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08)}
    .reveal{opacity:0;transform:translateY(26px);transition:.7s ease}
    .reveal.visible{opacity:1;transform:none}
    .cursor-glow{position:fixed;top:0;left:0;width:220px;height:220px;border-radius:50%;pointer-events:none;background:radial-gradient(circle,rgba(228,41,43,.08),transparent 65%);transform:translate(-50%,-50%);z-index:1;filter:blur(10px)}
    @media (max-width: 991px){
      .nav-inner{grid-template-columns:1fr auto}
      .hero-grid,.feature-layout,.trust-grid,.testimonial-wrap,.final-cta,.footer-grid{grid-template-columns:1fr}
      .hero-visual-wrap{min-height:520px}
      .hero-visual{min-height:520px}
      .dashboard-shell{width:72%}
      .insight-grid{grid-template-columns:repeat(2,1fr)}
      .section{padding:72px 0}
      .section-head h2,.testimonial-copy h2{font-size:34px}
    }
    @media (max-width: 767px){
      .container{width:min(100% - 24px,1180px)}
      .hero{padding:54px 0 42px}
      .hero h1{font-size:54px}
      .hero p{font-size:16px}
      .chips{gap:10px}
      .chip{font-size:12px}
      .hero-visual-wrap{min-height:500px}
      .hero-visual{min-height:500px;padding:18px}
      .hero-human-overlay{background:linear-gradient(180deg,rgba(255,255,255,.78) 0%,rgba(255,255,255,.50) 35%,rgba(255,255,255,.08) 100%)}
      .dashboard-shell{width:100%;min-height:auto;margin-top:150px}
      .dash-grid{grid-template-columns:1fr}
      .floating-card{min-width:160px;padding:12px 14px}
      .float-one{left:14px;top:14px}
      .float-three{right:14px;top:88px}
      .float-two{left:14px;bottom:14px}
      .section-head h2,.testimonial-copy h2,.final-cta h2{font-size:30px}
      .insight-grid,.logo-grid{grid-template-columns:1fr}
      .testimonial-quote{font-size:19px}
    }
  `;

  const faqs = [
    {
      q: 'What is Zoho Workplace used for?',
      a: 'Zoho Workplace is a unified business communication and collaboration platform that combines email, chat, meetings, file management, and office productivity apps in one suite.',
    },
    {
      q: 'Is Zoho Workplace suitable for growing businesses?',
      a: 'Yes, Zoho Workplace is designed to support businesses of different sizes with scalable collaboration, communication, and productivity features.',
    },
    {
      q: 'Can I integrate Zoho Workplace with other apps?',
      a: 'Yes, Zoho Workplace supports integrations with Zoho apps as well as third-party tools like Zapier, Google Analytics, and more.',
    },
    {
      q: 'How can Techjockey help me choose the right plan?',
      a: 'Techjockey experts can understand your business needs, recommend the right Zoho Workplace plan, and assist you throughout the purchase journey.',
    },
  ];

  return (
    <>
      <style>{css}</style>
      <div className="lp">
        <nav className="nav" ref={stickyRef}>
          <div className="container nav-inner">
            <a className="brand" href="/">
              <img
                src="https://static.techjockey.com/web-assets/images/techjockey-logo-white.svg"
                alt="Techjockey"
              />
            </a>
            <a
              className="ghost-btn"
              href={ctaItems[0].href}
              target="_blank"
              rel="noreferrer"
            >
              {ctaItems[0].text}
            </a>
            <a
              className="animated-cta btn-magnetic"
              href={ctaItems[0].href}
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
              <h1>Empower Teams with Smarter Collaboration Using Zoho Workplace</h1>
              <p>
                Zoho Workplace helps your business streamline communication, collaboration, and
                content creation through a unified suite of email, chat, meetings, and office apps.
              </p>

              <div className="chips">
                <div className="chip">
                  <span>✓</span>
                  <span>Unified communication suite</span>
                </div>
                <div className="chip">
                  <span>✓</span>
                  <span>Secure business email</span>
                </div>
                <div className="chip">
                  <span>✓</span>
                  <span>Built for hybrid teams</span>
                </div>
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
                Trusted by businesses looking for an integrated workplace solution.
              </div>
            </div>

            <div className="hero-visual-wrap reveal">
              <div className="hero-visual">
                <div className="hero-human-panel">
                  <img
                    src="/output/generated-assets/ds_1778053563309_4a8866af/15-01fc6c95c0.jpg"
                    alt="Professional using workplace collaboration software"
                  />
                  <div className="hero-human-overlay" />
                </div>

                <div className="floating-card float-one">
                  <div className="persona-badge">
                    <div className="persona-avatar">
                      <img
                        src="/output/generated-assets/ds_1778053563309_4a8866af/13-a1af876bc5.png"
                        alt="Team member"
                      />
                    </div>
                    <div className="persona-text">
                      <strong>Team Collaboration</strong>
                      <span>Work faster across departments</span>
                    </div>
                  </div>
                </div>

                <div className="floating-card float-three">
                  <h4>Business Email + Apps</h4>
                  <p>Bring communication, documents, meetings, and storage into one workspace.</p>
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
                        <div className="mini-card">
                          <div className="line sm" style={{ marginBottom: 10 }} />
                          <div className="line lg" style={{ height: 8 }} />
                        </div>
                        <div className="mini-card">
                          <div className="line md" style={{ marginBottom: 10 }} />
                          <div className="line lg" style={{ height: 8 }} />
                        </div>
                        <div className="mini-card">
                          <div className="line sm" style={{ marginBottom: 10 }} />
                          <div className="line md" style={{ height: 8 }} />
                        </div>
                        <div className="mini-card">
                          <div className="line md" style={{ marginBottom: 10 }} />
                          <div className="line sm" style={{ height: 8 }} />
                        </div>
                      </div>
                    </div>
                    <div className="dash-side">
                      <div className="dash-lines">
                        <div className="line md" />
                        <div className="line lg" />
                        <div className="line sm" />
                        <div className="line md" />
                        <div className="line lg" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="floating-card float-two">
                  <h4>Productivity Anywhere</h4>
                  <p>Support hybrid teams with connected tools that keep everyone aligned.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust">
          <div className="container trust-grid">
            <div className="trust-copy reveal">
              <h3>Built to simplify how modern teams work</h3>
              <p>
                From communication to documentation and meetings, Zoho Workplace helps businesses
                manage everything under one roof.
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
                <span>Zoho Meeting</span>
              </div>
              <div className="logo-card">
                <span>Zoho Cliq</span>
              </div>
              <div className="logo-card">
                <span>Zoho WorkDrive</span>
              </div>
              <div className="logo-card">
                <span>Zoho Connect</span>
              </div>
            </div>
          </div>
        </section>

        {sections.slice(0, 3).map((section, idx) => (
          <section
            key={section.headline}
            className={`section ${idx % 2 === 1 ? 'section-alt' : ''}`}
          >
            <div className="container">
              <div className="section-head reveal">
                <div className="label">{section.label}</div>
                <h2>{section.headline}</h2>
                <p>{section.description}</p>
              </div>

              <div className="feature-layout">
                <div className="feature-media reveal">
                  <img src={section.image} alt={section.headline} />
                </div>
                <div className="feature-list stagger-parent">
                  {section.features.map((feature) => (
                    <div
                      className="feature-card"
                      key={`${section.headline}-${feature.title}`}
                      style={{ opacity: 0, transform: 'translateY(24px)' }}
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
              <div className="label">{sections[3].label}</div>
              <h2>{sections[3].headline}</h2>
            </div>
            <div className="insight-grid">
              {sections[3].features.map((item) => (
                <div className="insight-card reveal" key={item.title}>
                  <div className="stat">
                    <span data-count={item.stat} data-suffix="%">
                      0%
                    </span>
                  </div>
                  <h3>{item.title}</h3>
                  <p>{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section testimonial-section">
          <div className="container testimonial-wrap">
            <div className="testimonial-copy reveal">
              <h2>What Businesses Say About Zoho Workplace</h2>
              <p>
                Teams across industries rely on Zoho Workplace to simplify communication, improve
                collaboration, and create a more productive digital workplace.
              </p>
            </div>

            <div className="reveal">
              <div className="testimonial-card">
                <p className="testimonial-quote">“{testimonials[activeSlide].quote}”</p>
                <div>
                  <div className="testimonial-author">
                    <img
                      src={testimonials[activeSlide].avatar}
                      alt={testimonials[activeSlide].name}
                    />
                    <div>
                      <strong>{testimonials[activeSlide].name}</strong>
                      <span>{testimonials[activeSlide].role}</span>
                    </div>
                  </div>
                  <div className="testimonial-dots">
                    {testimonials.map((_, index) => (
                      <button
                        key={`dot-${index}`}
                        className={index === activeSlide ? 'active' : ''}
                        onClick={() => setActiveSlide(index)}
                        aria-label={`Go to testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <div className="label">FAQS</div>
              <h2>Frequently Asked Questions</h2>
              <p>
                Get quick answers to common questions about Zoho Workplace and how it fits your
                business needs.
              </p>
            </div>
            <div className="faq-grid">
              {faqs.map((item) => (
                <div className="faq-item reveal" key={item.q}>
                  <h3>{item.q}</h3>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="final-cta reveal">
              <div>
                <h2>Choose the Right Zoho Workplace Plan with Expert Guidance</h2>
                <p>
                  Connect with Techjockey specialists to find the right Zoho Workplace solution for
                  your business requirements.
                </p>
              </div>
              <div>
                <a
                  className="animated-cta btn-magnetic"
                  href={ctaItems[3].href}
                  target="_blank"
                  rel="noreferrer"
                >
                  {ctaItems[3].text}
                </a>
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <div className="footer-brand">
                <img
                  src="https://static.techjockey.com/web-assets/images/techjockey-logo-white.svg"
                  alt="Techjockey"
                />
              </div>
              <div className="footer-copy">© 2024 Techjockey. All rights reserved.</div>
            </div>
            <div className="footer-socials">
              <a
                href="https://www.facebook.com/techjockey/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H17V4.8c-.4-.1-1.5-.2-2.8-.2-2.8 0-4.7 1.7-4.7 4.9V11H7v3h2.5v8h4z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/techjockeyinfotech/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.4a1.56 1.56 0 0 1 .01 3.1zM5.5 9.75h2.87V19H5.5V9.75zm4.67 0h2.75v1.26h.04c.38-.72 1.31-1.48 2.7-1.48 2.88 0 3.41 1.89 3.41 4.35V19H16.2v-4.54c0-1.08-.02-2.48-1.51-2.48-1.51 0-1.74 1.18-1.74 2.4V19h-2.78V9.75z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/techjockey/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm4.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
                </svg>
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;