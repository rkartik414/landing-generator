import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#e4292b';
  const primary = '#e4292b';
  const bodyBg = '#ffffff';

  const [activeSlide, setActiveSlide] = useState(0);
  const sectionRefs = useRef([]);

  const ctas = [
    {
      text: 'Get quotation',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Get quotation',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Get quotation',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Get quotation',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
  ];

  const trustLogos = [
    '/output/generated-assets/ds_1777971286353_9f3f42db/11-4e22c31148.png',
    '/output/generated-assets/ds_1777971286353_9f3f42db/24-75f766eeed.png',
    '/output/generated-assets/ds_1777971286353_9f3f42db/25-d22596911f.png',
    '/output/generated-assets/ds_1777971286353_9f3f42db/23-61e528786b.png',
  ];

  const productSections = [
    {
      label: 'FEATURES',
      headline: 'Why Choose Zoho Workplace?',
      description:
        'Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.',
      image: '/output/generated-assets/ds_1777971286353_9f3f42db/16-dd7a47979f.gif',
      dark: false,
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
      image: '/output/generated-assets/ds_1777971286353_9f3f42db/18-473c14de05.jpg',
      dark: false,
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
      image: '/output/generated-assets/ds_1777971286353_9f3f42db/30-89ce3cb959.jpeg',
      dark: false,
      features: [
        { title: 'Zoho Apps', description: 'Zoho Meeting, Zoho Connect, Zoho Mail, Zoho Cliq, Zoho Writer, etc.' },
        { title: 'Analytics', description: 'Zoho Analytics, Google Analytics' },
        { title: 'Accounting & Finance', description: 'Zoho Invoice & Zoho Books' },
        { title: 'Automation', description: 'Zoho Flow, Zapier, viaSocket' },
        { title: 'Business Suites', description: 'Zoho One, Zoho Workspace' },
      ],
    },
    {
      label: 'INSIGHT',
      headline: 'Performance Beyond Limits with Zoho Workplace',
      description: '',
      image: '/output/generated-assets/ds_1777971286353_9f3f42db/29-3965757185.jpeg',
      dark: true,
      features: [
        {
          title: 'Secure',
          description:
            '82.9% of users reported a secure email experience, ensuring strong data protection, and safe and reliable communication.',
        },
        {
          title: 'Anywhere Access',
          description:
            '42.9% of them found it easier to work remotely with Zoho Workplace apps, enabling seamless access from any device, anywhere.',
        },
        {
          title: 'Intuitive',
          description:
            '28.6% found Zoho Workplace easy to use, reducing the learning curve. Teams can quickly adapt and work efficiently.',
        },
        {
          title: 'Collaborative',
          description:
            '14.3% of them saw improved collaboration, engagement and productivity, helping teams stay aligned and get more done faster.',
        },
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        'Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.',
      author: 'Amit Kapoor',
      role: 'IT Manager',
      avatar: '/output/generated-assets/ds_1777971286353_9f3f42db/15-01fc6c95c0.jpg',
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      author: 'Saurav Singh',
      role: 'Head of Operations',
      avatar: '/output/generated-assets/ds_1777971286353_9f3f42db/13-a1af876bc5.png',
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      author: 'Shrimi Manchanda',
      role: 'Operations Manager',
      avatar: '/output/generated-assets/ds_1777971286353_9f3f42db/32-e3c4bcd1a9.png',
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      author: 'Shweta Thakur',
      role: 'Senior System Administrator',
      avatar: '/output/generated-assets/ds_1777971286353_9f3f42db/33-00ee58a5d0.jpg',
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      author: 'Narinder Sahni',
      role: 'IT Head',
      avatar: '/output/generated-assets/ds_1777971286353_9f3f42db/15-01fc6c95c0.jpg',
    },
  ];

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.hero-headline, .hero-sub, .hero-chips, .hero-cta, .hero-visual');
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(30px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      el.style.transitionDelay = i * 0.15 + 's';
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.opacity = '1';
          el.style.transform = 'translateY(0)';
        }, 50);
      });
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-parent').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 2000;
        const start = performance.now();
        const isDecimal = target % 1 !== 0;
        const animate = now => {
          const elapsed = now - start;
          const progress = Math.min(elapsed / duration, 1);
          const eased = 1 - Math.pow(1 - progress, 3);
          const value = eased * target;
          el.textContent = prefix + (isDecimal ? value.toFixed(1) : Math.floor(value).toLocaleString()) + suffix;
          if (progress < 1) requestAnimationFrame(animate);
          else el.textContent = prefix + (isDecimal ? target.toFixed(1) : target.toLocaleString()) + suffix;
        };
        requestAnimationFrame(animate);
        observer.unobserve(el);
      });
    }, { threshold: 0.5 });
    counters.forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll('.btn-magnetic');
    const cleanups = [];
    btns.forEach(btn => {
      const move = e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + x * 0.25 + 'px, ' + y * 0.25 + 'px)';
      };
      const leave = () => {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      };
      btn.addEventListener('mousemove', move);
      btn.addEventListener('mouseleave', leave);
      cleanups.push(() => {
        btn.removeEventListener('mousemove', move);
        btn.removeEventListener('mouseleave', leave);
      });
    });
    return () => cleanups.forEach(fn => fn());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;font-family:Inter,sans-serif;background:${bodyBg};color:#111827}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .page-wrapper{animation:pageReveal .6s cubic-bezier(.16,1,.3,1) both;overflow:hidden}
    .container{width:min(1200px,calc(100% - 32px));margin:0 auto}
    .nav{position:sticky;top:0;z-index:50;background:rgba(17,24,39,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:18px;padding:14px 0}
    .brand-mark{font-weight:800;font-size:20px;color:${accent};font-family:"Plus Jakarta Sans",sans-serif}
    .nav-right{display:flex;align-items:center;gap:16px}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:10px;background:${accent};color:#fff;font-weight:700;border:1px solid ${accent};transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 12px 24px rgba(228,41,43,.28);background:#c81f21}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:10px;border:1px solid rgba(255,255,255,.25);color:#fff;font-weight:700;background:rgba(255,255,255,.06);transition:.25s ease}
    .ghost-btn:hover{transform:translateY(-2px);background:rgba(255,255,255,.12)}
    .hero{position:relative;background:linear-gradient(135deg,#0f172a 0%,#111827 45%,#1f2937 100%);color:#fff}
    .hero:before{content:'';position:absolute;inset:0;background:
      radial-gradient(circle at 15% 20%, rgba(228,41,43,.20), transparent 34%),
      radial-gradient(circle at 85% 25%, rgba(228,41,43,.14), transparent 30%),
      linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
      background-size:auto,auto,32px 32px,32px 32px;
      pointer-events:none}
    .hero-inner{position:relative;display:grid;grid-template-columns:1.02fr .98fr;gap:42px;align-items:center;padding:76px 0 64px}
    .eyebrow{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;background:rgba(228,41,43,.12);border:1px solid rgba(228,41,43,.35);color:#fff;font-size:13px;font-weight:700;letter-spacing:.04em}
    h1,h2,h3{font-family:"Plus Jakarta Sans",sans-serif;margin:0 0 16px}
    .hero h1{font-size:clamp(48px,6vw,68px);line-height:1.04;max-width:700px}
    .hero p{font-size:18px;line-height:1.7;color:rgba(255,255,255,.82);margin:0}
    .gradient-text{background:linear-gradient(135deg,${accent} 0%,${accent} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-copy{display:flex;flex-direction:column;gap:22px}
    .chips{display:flex;flex-wrap:wrap;gap:12px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(228,41,43,.35);background:rgba(228,41,43,.12);font-size:13px;color:#fff}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center}
    .dashboard-shell{width:100%;min-height:500px;border-radius:24px;background:linear-gradient(180deg,rgba(255,255,255,.12),rgba(255,255,255,.06));border:1px solid rgba(255,255,255,.14);box-shadow:0 30px 80px rgba(0,0,0,.35);padding:18px;position:relative;overflow:hidden}
    .dashboard-shell:before{content:'';position:absolute;inset:0;background:radial-gradient(circle at top right, rgba(228,41,43,.18), transparent 30%)}
    .shell-top{display:flex;align-items:center;gap:8px;margin-bottom:14px}
    .shell-dot{width:10px;height:10px;border-radius:50%;background:#fff;opacity:.35}
    .shell-grid{display:grid;grid-template-columns:1.25fr .75fr;gap:16px;height:calc(100% - 24px)}
    .shell-main{position:relative;border-radius:18px;overflow:hidden;background:#0b1220;border:1px solid rgba(255,255,255,.08);padding:0}
    .hero-gif{width:100%;height:100%;min-height:430px;object-fit:cover;display:block}
    .shell-side{display:grid;grid-template-rows:repeat(3,1fr);gap:16px}
    .mini-card{background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:18px;display:flex;flex-direction:column;justify-content:space-between}
    .mini-card strong{font-size:15px;color:#fff}
    .mini-bar{height:10px;border-radius:999px;background:rgba(255,255,255,.12);overflow:hidden}
    .mini-bar span{display:block;height:100%;background:${accent};border-radius:inherit}
    .trust{background:#f8fafc;padding:26px 0 40px;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
    .trust-top{display:flex;justify-content:space-between;gap:20px;align-items:end;flex-wrap:wrap;margin-bottom:22px}
    .trust-top h2{font-size:32px}
    .trust-top p{margin:0;color:#4b5563}
    .trust-metric{font-size:32px;font-weight:800;font-family:"Plus Jakarta Sans",sans-serif}
    .logo-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
    .logo-card{background:#fff;border:1px solid #e5e7eb;border-radius:18px;min-height:96px;display:flex;align-items:center;justify-content:center;padding:18px;filter:grayscale(1);transition:.3s ease}
    .logo-card:hover{filter:grayscale(0);transform:translateY(-4px);box-shadow:0 18px 36px rgba(0,0,0,.08)}
    .logo-card img{max-height:40px;object-fit:contain}
    .marquee-wrapper{overflow:hidden;background:#fff;padding:18px 0;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 28s linear infinite}
    .marquee-track:hover{animation-play-state:paused}
    .ticker{font-size:26px;font-weight:800;font-family:"Plus Jakarta Sans",sans-serif;margin-right:44px;white-space:nowrap;color:#111827}
    section{transition:background-color .4s ease}
    .section-block{padding:84px 0;position:relative}
    .section-white{background:#fff}
    .section-slate{background:#f8fafc}
    .section-dark{background:#0f172a;color:#fff}
    .split{display:grid;grid-template-columns:1fr 1fr;gap:42px;align-items:center}
    .split.reverse .visual-col{order:2}
    .split.reverse .content-col{order:1}
    .tag{display:inline-flex;padding:8px 12px;border-radius:999px;background:${accent}14;border:1px solid ${accent}4D;color:${accent};font-size:12px;font-weight:700;letter-spacing:.05em;margin-bottom:16px}
    .section-dark .tag{color:#fff;background:rgba(228,41,43,.16);border-color:rgba(228,41,43,.35)}
    .section-title{font-size:clamp(32px,4vw,46px);line-height:1.1;margin-bottom:16px}
    .desc-bar{border-left:3px solid rgba(228,41,43,.35);padding-left:18px;margin-bottom:26px}
    .section-dark .desc-bar{border-left-color:rgba(255,255,255,.18)}
    .section-desc{font-size:17px;line-height:1.75;color:#4b5563}
    .section-dark .section-desc,.section-dark .feature-desc,.section-dark .feature-title{color:rgba(255,255,255,.84)}
    .feature-stack{display:grid;gap:14px}
    .feature-item{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:18px;display:grid;grid-template-columns:auto 1fr;gap:14px;align-items:start}
    .section-dark .feature-item{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.08)}
    .feature-icon{width:42px;height:42px;border-radius:12px;background:${accent}14;display:flex;align-items:center;justify-content:center;flex:0 0 auto}
    .feature-title{font-weight:800;font-family:"Plus Jakarta Sans",sans-serif;margin-bottom:6px;color:#111827}
    .feature-desc{color:#4b5563;line-height:1.65;font-size:15px}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:22px;border:1px solid #e5e7eb;background:#f8f8f8;box-shadow:0 22px 60px rgba(15,23,42,.12)}
    .browser-frame.dark{background:#0a0a0a;border-color:rgba(255,255,255,.1)}
    .browser-bar{display:flex;align-items:center;gap:8px;padding:14px 16px;border-bottom:1px solid rgba(0,0,0,.06)}
    .browser-frame.dark .browser-bar{border-bottom-color:rgba(255,255,255,.08)}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .pricing{padding:88px 0;background:#fff}
    .pricing-wrap{max-width:780px;margin:0 auto}
    .pricing-card{background:#fff;border:1px solid #e5e7eb;border-radius:28px;padding:32px;box-shadow:0 24px 60px rgba(15,23,42,.08);position:relative}
    .pricing-badge{display:inline-flex;padding:8px 12px;border-radius:999px;background:#e8fff0;color:#15803d;font-weight:700;font-size:12px;border:1px solid #bbf7d0;margin-bottom:18px}
    .pricing-title{font-size:34px;margin-bottom:10px}
    .price-row{display:flex;align-items:end;gap:10px;flex-wrap:wrap;margin-bottom:20px}
    .price-old{color:#9ca3af;text-decoration:line-through;font-weight:700}
    .price-new{font-size:42px;font-weight:800;font-family:"Plus Jakarta Sans",sans-serif}
    .pricing-list{display:grid;gap:12px;margin:24px 0 28px}
    .pricing-item{display:grid;grid-template-columns:auto 1fr;gap:12px;align-items:start;color:#374151}
    .testimonials{padding:86px 0;background:#f8fafc}
    .testimonial-shell{position:relative;overflow:hidden}
    .slides{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .slide{min-width:100%;padding:6px}
    .testimonial-card{background:#fff;border:1px solid #e5e7eb;border-radius:26px;padding:34px;box-shadow:0 20px 50px rgba(15,23,42,.08)}
    .quote-mark{font-size:54px;line-height:1;color:${accent};font-family:"Plus Jakarta Sans",sans-serif;margin-bottom:8px}
    .stars{color:#f59e0b;font-size:20px;letter-spacing:2px;margin-bottom:14px}
    .testimonial-text{font-size:20px;line-height:1.75;color:#111827;margin-bottom:24px}
    .person{display:flex;align-items:center;gap:14px}
    .person img{width:62px;height:62px;border-radius:50%;object-fit:cover;border:3px solid rgba(228,41,43,.12)}
    .person strong{display:block;font-family:"Plus Jakarta Sans",sans-serif}
    .person span{color:#6b7280}
    .slider-nav{display:flex;justify-content:center;gap:10px;margin-top:24px}
    .dot{width:10px;height:10px;border-radius:999px;border:none;background:#cbd5e1;cursor:pointer;transition:.3s ease}
    .dot.active{width:28px;background:${accent}}
    .arrow-row{display:flex;justify-content:flex-end;gap:10px;margin-bottom:18px}
    .arrow-btn{width:44px;height:44px;border-radius:50%;border:1px solid #e5e7eb;background:#fff;cursor:pointer;font-size:18px;transition:.25s ease}
    .arrow-btn:hover{transform:translateY(-2px);box-shadow:0 12px 24px rgba(0,0,0,.08)}
    .footer{background:#0f172a;color:#fff;padding:38px 0}
    .footer-grid{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:28px;align-items:start}
    .footer p,.footer a{color:rgba(255,255,255,.78)}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .socials a{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08);transition:.25s ease}
    .socials a:hover{transform:translateY(-2px);background:rgba(228,41,43,.18)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-left{opacity:0;transform:translateX(-50px);transition:opacity .7s ease,transform .7s ease}
    .reveal-right{opacity:0;transform:translateX(50px);transition:opacity .7s ease,transform .7s ease}
    .reveal-left.visible,.reveal-right.visible{opacity:1;transform:translateX(0)}
    .reveal-scale{opacity:0;transform:scale(.92);transition:opacity .6s ease,transform .6s ease}
    .reveal-scale.visible{opacity:1;transform:scale(1)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}.reveal-delay-4{transition-delay:.4s}
    .stagger-parent .stagger-child{opacity:0;transform:translateY(30px);transition:opacity .5s ease,transform .5s ease}
    .stagger-parent.visible .stagger-child:nth-child(1){opacity:1;transform:translateY(0);transition-delay:0s}
    .stagger-parent.visible .stagger-child:nth-child(2){opacity:1;transform:translateY(0);transition-delay:.1s}
    .stagger-parent.visible .stagger-child:nth-child(3){opacity:1;transform:translateY(0);transition-delay:.2s}
    .stagger-parent.visible .stagger-child:nth-child(4){opacity:1;transform:translateY(0);transition-delay:.3s}
    .stagger-parent.visible .stagger-child:nth-child(5){opacity:1;transform:translateY(0);transition-delay:.4s}
    .stagger-parent.visible .stagger-child:nth-child(6){opacity:1;transform:translateY(0);transition-delay:.5s}
    .hover-card{transition:transform .3s cubic-bezier(.34,1.56,.64,1),box-shadow .3s ease;cursor:pointer}
    .hover-card:hover{transform:translateY(-6px);box-shadow:0 20px 40px rgba(0,0,0,.15)}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    @keyframes marqueeScrollReverse{0%{transform:translateX(-50%)}100%{transform:translateX(0)}}
    .marquee-track-reverse{animation:marqueeScrollReverse 28s linear infinite}
    .marquee-track-fast{animation-duration:16s}
    .marquee-track-slow{animation-duration:40s}
    @keyframes pageReveal{0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:translateY(0)}}
    @media (max-width: 991px){
      .nav-inner{grid-template-columns:1fr auto;gap:12px}
      .nav-inner > :last-child{grid-column:1/-1;justify-self:start}
      .hero-inner,.split,.footer-grid,.logo-grid,.shell-grid{grid-template-columns:1fr}
      .shell-side{grid-template-columns:1fr;grid-template-rows:auto}
      .hero-visual{min-height:auto}
      .dashboard-shell{min-height:auto}
      .hero h1{font-size:48px}
      .browser-frame img{height:320px}
    }
    @media (max-width: 640px){
      .hero-inner{padding:56px 0 48px}
      .section-block,.pricing,.testimonials{padding:64px 0}
      .hero h1{font-size:42px}
      .ticker{font-size:22px}
      .pricing-card,.testimonial-card{padding:24px}
      .testimonial-text{font-size:18px}
    }
  `;

  const Icon = ({ type = 'spark' }) => {
    const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: accent, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (type === 'chat') {
      return <svg {...common}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>;
    }
    if (type === 'globe') {
      return <svg {...common}><circle cx="12" cy="12" r="10"/><path d="M2 12h20"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>;
    }
    if (type === 'apps') {
      return <svg {...common}><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>;
    }
    return <svg {...common}><path d="M12 3l1.9 4.6L18.5 9l-4.6 1.9L12 15.5l-1.9-4.6L5.5 9l4.6-1.4L12 3z"/></svg>;
  };

  const nextSlide = () => setActiveSlide(prev => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveSlide(prev => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="page-wrapper">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Plus+Jakarta+Sans:wght@500;600;700;800&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div>
            <span className="brand-mark">Zoho</span>
          </div>
          <div className="nav-right">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <a className="animated-cta btn-magnetic" href={ctas[0].href} target="_blank" rel="noreferrer">
            {ctas[0].text}
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <div className="eyebrow hero-chips">
              <span>Email &amp; Collaboration Suite</span>
            </div>
            <h1 className="hero-headline">
              Elevate Your Team’s Productivity with <span className="gradient-text">Zoho Workplace</span>
            </h1>
            <p className="hero-sub">
              A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified Communication.
            </p>
            <div className="chips hero-chips">
              <div className="chip"><Icon type="apps" /><span>Easy Setup &amp; Quick Onboarding</span></div>
              <div className="chip"><Icon type="globe" /><span>A Made in India solution</span></div>
              <div className="chip"><Icon type="chat" /><span>24x7 Support</span></div>
            </div>
            <div className="hero-actions hero-cta">
              <a className="animated-cta btn-magnetic" href={ctas[1].href} target="_blank" rel="noreferrer">
                {ctas[1].text}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-shell reveal-right">
              <div className="shell-top">
                <span className="shell-dot"></span>
                <span className="shell-dot"></span>
                <span className="shell-dot"></span>
              </div>
              <div className="shell-grid">
                <div className="shell-main">
                  <img
                    className="hero-gif"
                    src="/output/generated-assets/ds_1777971286353_9f3f42db/34-2d8c21be11.gif"
                    alt="Zoho Workplace"
                  />
                </div>
                <div className="shell-side">
                  <div className="mini-card">
                    <strong>Unified Communication</strong>
                    <div className="mini-bar"><span style={{ width: '86%' }}></span></div>
                  </div>
                  <div className="mini-card">
                    <strong>Team Productivity</strong>
                    <div className="mini-bar"><span style={{ width: '78%' }}></span></div>
                  </div>
                  <div className="mini-card">
                    <strong>Collaboration Suite</strong>
                    <div className="mini-bar"><span style={{ width: '91%' }}></span></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container">
          <div className="trust-top reveal">
            <div>
              <h2>Trusted by <span className="gradient-text">100,000+ Businesses Globally</span></h2>
              <p>Proof-first credibility for enterprise buyers.</p>
            </div>
            <div className="trust-metric">
              <span data-count="100000" data-suffix="+" data-prefix="">0</span> Businesses Globally
            </div>
          </div>
          <div className="logo-grid stagger-parent reveal">
            {trustLogos.map((logo, i) => (
              <div className="logo-card hover-card stagger-child" key={i}>
                <img src={logo} alt={`Trust logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].flatMap(() =>
            ['Zoho Workplace', 'Email & Collaboration Suite', 'Enterprises', 'Unified Communication'].map((item, i) => (
              <span className="ticker" key={`${item}-${i}`}>{item} <span className="gradient-text">★</span></span>
            ))
          )}
        </div>
      </div>

      {productSections.map((section, idx) => {
        const bgClass = idx === 0 ? 'section-white' : idx === 1 ? 'section-slate' : idx === 2 ? 'section-white' : 'section-dark';
        const reverse = idx % 2 === 1;
        return (
          <section
            key={section.headline}
            className={`section-block ${bgClass}`}
            ref={el => (sectionRefs.current[idx] = el)}
          >
            <div className="container">
              <div className={`split ${reverse ? 'reverse' : ''}`}>
                <div className="visual-col reveal-left">
                  <div className={`browser-frame ${section.dark ? 'dark' : ''}`}>
                    <div className="browser-bar">
                      <span className="shell-dot" style={{ background: section.dark ? '#fff' : '#111827', opacity: 0.25 }}></span>
                      <span className="shell-dot" style={{ background: section.dark ? '#fff' : '#111827', opacity: 0.25 }}></span>
                      <span className="shell-dot" style={{ background: section.dark ? '#fff' : '#111827', opacity: 0.25 }}></span>
                    </div>
                    <img src={section.image} alt={section.headline} />
                  </div>
                </div>

                <div className="content-col reveal-right">
                  <span className="tag">{section.label}</span>
                  <h2 className="section-title">
                    {section.headline.includes('Zoho Workplace') ? (
                      <>
                        {section.headline.replace('Zoho Workplace', '')}
                        <span className="gradient-text">Zoho Workplace</span>
                      </>
                    ) : (
                      section.headline
                    )}
                  </h2>
                  {section.description ? (
                    <div className="desc-bar">
                      <p className="section-desc">{section.description}</p>
                    </div>
                  ) : null}

                  <div className="feature-stack stagger-parent reveal">
                    {section.features.map((feature, fIdx) => (
                      <div className="feature-item hover-card stagger-child" key={feature.title}>
                        <div className="feature-icon">
                          <Icon type={fIdx % 3 === 0 ? 'apps' : fIdx % 3 === 1 ? 'chat' : 'globe'} />
                        </div>
                        <div>
                          <div className="feature-title">{feature.title}</div>
                          <div className="feature-desc">{feature.description}</div>
                        </div>
                      </div>
                    ))}
                  </div>

                  {idx === 1 && (
                    <div style={{ marginTop: 24 }}>
                      <a className="animated-cta btn-magnetic" href={ctas[2].href} target="_blank" rel="noreferrer">
                        {ctas[2].text}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="pricing">
        <div className="container pricing-wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 28 }}>
            <span className="tag">PRICING</span>
            <h2 className="section-title">Zoho Workplace</h2>
          </div>
          <div className="pricing-card reveal-scale hover-card">
            <div className="pricing-badge">Highlighted Card</div>
            <h3 className="pricing-title">Zoho Workplace</h3>
            <div className="price-row">
              <span className="price-old">(was )</span>
              <span className="price-new">Includes</span>
            </div>
            <div className="pricing-list">
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
              ].map(item => (
                <div className="pricing-item" key={item}>
                  <span style={{ color: '#16a34a', fontWeight: 800 }}>✓</span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a
              className="animated-cta btn-magnetic"
              href={ctas[3].href}
              target="_blank"
              rel="noreferrer"
              style={{ width: '100%' }}
            >
              {ctas[3].text}
            </a>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="reveal" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'end', gap: 16, flexWrap: 'wrap', marginBottom: 18 }}>
            <div>
              <span className="tag">TESTIMONIALS</span>
              <h2 className="section-title">What enterprises say about Zoho Workplace</h2>
            </div>
            <div className="arrow-row">
              <button className="arrow-btn" onClick={prevSlide} aria-label="Previous testimonial">←</button>
              <button className="arrow-btn" onClick={nextSlide} aria-label="Next testimonial">→</button>
            </div>
          </div>

          <div className="testimonial-shell">
            <div className="slides" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div className="slide" key={i}>
                  <div className="testimonial-card hover-card reveal-scale">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <div className="testimonial-text">{t.quote}</div>
                    <div className="person">
                      <img src={t.avatar} alt={t.author} />
                      <div>
                        <strong>{t.author}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-nav">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot ${i === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
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
              style={{ marginBottom: 16 }}
            />
            <p>support@techjockey.com</p>
            <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>

          <div>
            <h3 style={{ fontSize: 18, marginBottom: 14 }}>Legal</h3>
            <div className="footer-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>

          <div>
            <h3 style={{ fontSize: 18, marginBottom: 14 }}>Follow us</h3>
            <div className="socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V8c0-1.2.4-2 2-2h2V2.3c-.3 0-1.4-.3-2.8-.3-2.8 0-4.7 1.7-4.7 5V10H7v4h3v8h3z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.8A4.2 4.2 0 1 0 16.2 12 4.2 4.2 0 0 0 12 7.8zm0 6.9A2.7 2.7 0 1 1 14.7 12 2.7 2.7 0 0 1 12 14.7zM17.5 6.6a1 1 0 1 0 1 1 1 1 0 0 0-1-1z"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.4-5.4.5-.6 1-.7 2.2-.3 3.3-3.3-.2-6.3-1.7-8.3-4.3-1.1 1.9-.6 4.3 1.2 5.5-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.8 3.4 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 4 2.9A8.5 8.5 0 0 1 2 19.5 12 12 0 0 0 8.5 21c7.8 0 12.3-6.8 12-12.8.8-.5 1.5-1.2 2-2.3z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.9 8.5H3.6V20h3.3V8.5zM5.3 3A1.9 1.9 0 1 0 5.3 6.8 1.9 1.9 0 0 0 5.3 3zM20.4 13c0-3.1-1.7-4.6-4-4.6a3.5 3.5 0 0 0-3.2 1.8V8.5H10V20h3.3v-6.1c0-1.6.3-3.1 2.3-3.1s2 1.8 2 3.2V20H21V12.5c0-.2 0-.4-.1-.5h-.5z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;