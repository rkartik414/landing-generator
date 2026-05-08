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
    .hero-visual{position:relative;width:100%;min-height:540px;border-radius:32px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 24px 70px rgba(15,23,42,.12);background:#f3f4f6}
    .hero-human-panel{position:absolute;inset:0;border-radius:32px;overflow:hidden;background:#f3f4f6}
    .hero-human-panel img{width:100%;height:100%;object-fit:cover;object-position:center top;filter:saturate(1.02)}
    .hero-image-caption{position:absolute;left:24px;bottom:24px;z-index:3;display:flex;align-items:center;gap:10px;padding:12px 16px;background:rgba(255,255,255,.92);backdrop-filter:blur(10px);border:1px solid rgba(229,231,235,.95);border-radius:16px;box-shadow:0 14px 34px rgba(15,23,42,.12)}
    .hero-image-caption .caption-dot{width:10px;height:10px;border-radius:50%;background:${accent};flex:0 0 10px}
    .hero-image-caption span{font-size:13px;line-height:1.4;color:#111827;font-weight:700}
    .section-head{text-align:center;max-width:780px;margin:0 auto 42px}
    .section-head .eyebrow{margin-bottom:12px}
    .section-head h2{font-size:42px;line-height:1.1;margin:0 0 14px;font-weight:800;letter-spacing:-.03em}
    .section-head p{margin:0;color:#6b7280;font-size:17px;line-height:1.7}
    .feature-section-grid{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center}
    .media-card{background:#fff;border:1px solid #e5e7eb;border-radius:28px;padding:18px;box-shadow:0 18px 50px rgba(15,23,42,.08)}
    .media-card img{width:100%;border-radius:20px}
    .browser-card{padding:0;overflow:hidden}
    .browser-top{display:flex;align-items:center;gap:8px;padding:14px 18px;border-bottom:1px solid #e5e7eb;background:#f8fafc}
    .browser-bar{flex:1;height:12px;border-radius:999px;background:#e5e7eb;margin-left:8px}
    .feature-list{display:grid;gap:16px}
    .feature-item{padding:20px;border-radius:20px;border:1px solid #e5e7eb;background:#fff;box-shadow:0 10px 30px rgba(15,23,42,.05)}
    .feature-item h3{margin:0 0 8px;font-size:20px;line-height:1.3}
    .feature-item p{margin:0;color:#6b7280;line-height:1.7;font-size:15px}
    .insight-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px}
    .stat-card{padding:24px;border-radius:24px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 12px 30px rgba(15,23,42,.05)}
    .stat-num{font-size:42px;font-weight:800;line-height:1;color:${accent};margin-bottom:10px}
    .stat-card h3{margin:0 0 8px;font-size:20px}
    .stat-card p{margin:0;color:#6b7280;line-height:1.7;font-size:15px}
    .testimonial-wrap{max-width:900px;margin:0 auto}
    .testimonial-card{background:#fff;border:1px solid #e5e7eb;border-radius:28px;padding:28px;box-shadow:0 18px 50px rgba(15,23,42,.06)}
    .testimonial-quote{font-size:24px;line-height:1.6;color:#111827;font-weight:600;margin:0 0 22px}
    .testimonial-person{display:flex;align-items:center;gap:14px}
    .testimonial-person img{width:60px;height:60px;border-radius:50%;object-fit:cover}
    .testimonial-person h4{margin:0;font-size:18px}
    .testimonial-person p{margin:2px 0 0;color:#6b7280;font-size:14px}
    .testimonial-dots{display:flex;justify-content:center;gap:10px;margin-top:18px}
    .testimonial-dot{width:10px;height:10px;border-radius:50%;background:#d1d5db;border:none;padding:0;cursor:pointer}
    .testimonial-dot.active{background:${accent}}
    .cta-band{background:linear-gradient(135deg,#111827 0%,#1f2937 100%);border-radius:30px;padding:40px;color:#fff;display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center}
    .cta-band h3{margin:0 0 10px;font-size:34px;line-height:1.1}
    .cta-band p{margin:0;color:rgba(255,255,255,.75);line-height:1.7}
    .footer{background:#111827;color:#fff;padding:42px 0 24px}
    .footer-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:24px;align-items:start}
    .footer p{color:rgba(255,255,255,.72);line-height:1.7}
    .footer-links{display:flex;gap:14px;flex-wrap:wrap;justify-content:flex-end}
    .footer-links a{color:rgba(255,255,255,.82);font-size:14px}
    .copyright{margin-top:24px;padding-top:18px;border-top:1px solid rgba(255,255,255,.08);display:flex;justify-content:space-between;gap:12px;flex-wrap:wrap;color:rgba(255,255,255,.62);font-size:13px}
    .reveal{opacity:0;transform:translateY(28px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:none}
    .cursor-glow{position:fixed;top:0;left:0;width:280px;height:280px;border-radius:50%;pointer-events:none;z-index:1;background:radial-gradient(circle,rgba(228,41,43,.08),transparent 65%);transform:translate(-50%,-50%)}
    @media (max-width: 991px){
      .hero-grid,.feature-section-grid,.cta-band,.footer-grid{grid-template-columns:1fr}
      .hero-visual-wrap{min-height:440px}
      .hero-visual,.hero-human-panel{min-height:440px}
      .section{padding:72px 0}
      .section-head h2{font-size:36px}
      .hero h1{font-size:54px}
      .footer-links{justify-content:flex-start}
      .cta-band{padding:32px}
    }
    @media (max-width: 767px){
      .container{width:min(100% - 24px,1180px)}
      .nav-inner{grid-template-columns:1fr;justify-items:start}
      .hero{padding:52px 0 44px}
      .hero h1{font-size:54px}
      .hero p{font-size:16px}
      .hero-visual-wrap{min-height:360px}
      .hero-visual,.hero-human-panel{min-height:360px;border-radius:24px}
      .hero-image-caption{left:16px;right:16px;bottom:16px;padding:12px 14px}
      .section-head h2{font-size:30px}
      .insight-grid{grid-template-columns:1fr}
      .testimonial-quote{font-size:20px}
      .cta-band h3{font-size:28px}
    }
  `;

  return (
    <>
      <style>{css}</style>
      <div className="lp">
        <nav className="nav" ref={stickyRef}>
          <div className="container nav-inner">
            <a href="#top" className="brand" aria-label="Techjockey">
              <img
                src="https://static.techjockey.com/web-assets/images/techjockey-logo-white.svg"
                alt="Techjockey"
              />
            </a>
            <a
              className="ghost-btn btn-magnetic"
              href="https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software"
            >
              Learn More
            </a>
            <a className="animated-cta btn-magnetic" href={ctaItems[0].href}>
              {ctaItems[0].text}
            </a>
          </div>
        </nav>

        <section className="hero" id="top">
          <div className="container hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">PRODUCTIVITY SOFTWARE</div>
              <h1>Empower Your Teams with <span className="gradient-text">Zoho Workplace</span></h1>
              <p>
                Zoho Workplace helps your business unify email, collaboration, meetings, documents,
                and cloud storage in one powerful suite designed for modern teams.
              </p>

              <div className="chips">
                <div className="chip">
                  <span>✓</span>
                  <span>Business Email</span>
                </div>
                <div className="chip">
                  <span>✓</span>
                  <span>Team Collaboration</span>
                </div>
                <div className="chip">
                  <span>✓</span>
                  <span>Office Productivity Apps</span>
                </div>
              </div>

              <div className="hero-actions">
                <a className="animated-cta btn-magnetic" href={ctaItems[1].href}>
                  {ctaItems[1].text}
                </a>
                <a className="ghost-btn btn-magnetic" href="#features" style={{ color: '#111827', borderColor: '#d1d5db' }}>
                  Explore Features
                </a>
              </div>

              <div className="supporting">Trusted solution for businesses looking to simplify communication and improve team productivity.</div>
            </div>

            <div className="hero-visual-wrap reveal">
              <div className="hero-visual">
                <div className="hero-human-panel">
                  <img
                    src="/output/generated-assets/ds_1778053563309_4a8866af/17-8ee9780f0b.jpg"
                    alt="Professional using Zoho Workplace"
                  />
                </div>
                <div className="hero-image-caption">
                  <div className="caption-dot"></div>
                  <span>One unified workplace for email, meetings, files, and team collaboration</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {sections.map((section, idx) => (
          <section
            key={section.headline}
            id={idx === 0 ? 'features' : undefined}
            className={`section ${idx % 2 === 1 ? 'section-alt' : ''}`}
          >
            <div className="container">
              <div className="section-head reveal">
                <div className="eyebrow">{section.label}</div>
                <h2>{section.headline}</h2>
                {section.description ? <p>{section.description}</p> : null}
              </div>

              <div className="feature-section-grid">
                <div className="media-card reveal">
                  {section.browser ? (
                    <div className="browser-card">
                      <div className="browser-top">
                        <span className="dot" style={{ background: '#ef4444', opacity: 1 }}></span>
                        <span className="dot" style={{ background: '#f59e0b', opacity: 1 }}></span>
                        <span className="dot" style={{ background: '#10b981', opacity: 1 }}></span>
                        <div className="browser-bar"></div>
                      </div>
                      <img src={section.image} alt={section.headline} />
                    </div>
                  ) : (
                    <img src={section.image} alt={section.headline} />
                  )}
                </div>

                <div className={`reveal ${section.label === 'INSIGHT' ? 'insight-grid' : 'feature-list'}`}>
                  {section.label === 'INSIGHT'
                    ? section.features.map((feature) => (
                        <div className="stat-card" key={feature.title}>
                          <div className="stat-num">
                            <span data-count={feature.stat} data-suffix="%">
                              0%
                            </span>
                          </div>
                          <h3>{feature.title}</h3>
                          <p>{feature.description}</p>
                        </div>
                      ))
                    : section.features.map((feature) => (
                        <div className="feature-item" key={feature.title}>
                          <h3>{feature.title}</h3>
                          <p>{feature.description}</p>
                        </div>
                      ))}
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="section">
          <div className="container">
            <div className="section-head reveal">
              <div className="eyebrow">TESTIMONIALS</div>
              <h2>What Businesses Say About Zoho Workplace</h2>
              <p>Real feedback from professionals who streamlined their communication and collaboration.</p>
            </div>

            <div className="testimonial-wrap reveal">
              <div className="testimonial-card">
                <p className="testimonial-quote">“{testimonials[activeSlide].quote}”</p>
                <div className="testimonial-person">
                  <img src={testimonials[activeSlide].avatar} alt={testimonials[activeSlide].name} />
                  <div>
                    <h4>{testimonials[activeSlide].name}</h4>
                    <p>{testimonials[activeSlide].role}</p>
                  </div>
                </div>
              </div>

              <div className="testimonial-dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`testimonial-dot ${i === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
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
                <h3>Ready to Simplify Work with Zoho Workplace?</h3>
                <p>
                  Connect with our experts and discover the right Zoho Workplace plan for your business needs.
                </p>
              </div>
              <a className="animated-cta btn-magnetic" href={ctaItems[2].href}>
                {ctaItems[2].text}
              </a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <a href="#top" className="brand" aria-label="Techjockey">
                  <img
                    src="https://static.techjockey.com/web-assets/images/techjockey-logo-white.svg"
                    alt="Techjockey"
                  />
                </a>
                <p style={{ marginTop: 14 }}>
                  Techjockey helps businesses discover, compare, and buy the right software solutions with expert assistance.
                </p>
              </div>
              <div className="footer-links">
                <a href="https://www.techjockey.com/aboutus" target="_blank" rel="noreferrer">
                  About Us
                </a>
                <a href="https://www.techjockey.com/privacy-policy" target="_blank" rel="noreferrer">
                  Privacy Policy
                </a>
                <a href="https://www.techjockey.com/term-condition" target="_blank" rel="noreferrer">
                  Terms & Conditions
                </a>
                <a href={ctaItems[3].href} target="_blank" rel="noreferrer">
                  Contact Expert
                </a>
              </div>
            </div>

            <div className="copyright">
              <span>© 2024 Techjockey Infotech Pvt. Ltd. All rights reserved.</span>
              <span>Zoho Workplace advisory via Techjockey</span>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;