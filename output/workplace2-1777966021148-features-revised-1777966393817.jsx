import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#ff6b00';
  const bodyBg = '#ffffff';

  const [activeSlide, setActiveSlide] = useState(0);
  const pageRef = useRef(null);

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
    '/output/generated-assets/ds_1777965779159_1c1bdf36/11-4e22c31148.png',
    '/output/generated-assets/ds_1777965779159_1c1bdf36/23-61e528786b.png',
    '/output/generated-assets/ds_1777965779159_1c1bdf36/25-d22596911f.png',
    '/output/generated-assets/ds_1777965779159_1c1bdf36/22-b3d4199ca5.png',
    '/output/generated-assets/ds_1777965779159_1c1bdf36/24-75f766eeed.png',
  ];

  const sections = [
    {
      label: 'FEATURES',
      headline: 'Why Choose Zoho Workplace?',
      description:
        'Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.',
      image: '/output/generated-assets/ds_1777965779159_1c1bdf36/18-473c14de05.jpg',
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
      image: '/output/generated-assets/ds_1777965779159_1c1bdf36/30-89ce3cb959.jpeg',
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
      image: '/output/generated-assets/ds_1777965779159_1c1bdf36/29-3965757185.jpeg',
      dark: true,
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
      image: '/output/generated-assets/ds_1777965779159_1c1bdf36/26-3d192a39e0.png',
      dark: false,
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
    {
      label: 'SECURE WORKSPACE',
      headline: 'Create a Secure Digital Workspace',
      description:
        'Enjoy privacy-first, enterprise-grade cloud capabilities with strong spam protection, SSO, Directory, MFA, and a secure password manager.',
      image: '/output/generated-assets/ds_1777965779159_1c1bdf36/27-1bc9c6f2ac.png',
      dark: false,
      features: [
        { title: 'Enterprise-Grade Custom Email', description: '' },
        { title: 'Migration Assistance', description: '' },
        { title: 'Collaborative Office Suite', description: '' },
        { title: '30-GB Mail Storage Per User', description: '' },
        { title: 'File Storage Starts at 100 GB Per Team', description: '' },
        { title: 'File Sharing & Permissions', description: '' },
        { title: 'Team Chat', description: '' },
        { title: 'Document Management', description: '' },
        { title: 'Supported Device: Android, iOS, Windows, Mac', description: '' },
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        'Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.',
      name: 'Amit Kapoor',
      role: 'IT Manager',
      avatar: '/output/generated-assets/ds_1777965779159_1c1bdf36/15-01fc6c95c0.jpg',
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      name: 'Saurav Singh',
      role: 'Head of Operations',
      avatar: '/output/generated-assets/ds_1777965779159_1c1bdf36/13-a1af876bc5.png',
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      name: 'Shrimi Manchanda',
      role: 'Operations Manager',
      avatar: '/output/generated-assets/ds_1777965779159_1c1bdf36/32-e3c4bcd1a9.png',
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      name: 'Shweta Thakur',
      role: 'Senior System Administrator',
      avatar: '/output/generated-assets/ds_1777965779159_1c1bdf36/33-00ee58a5d0.jpg',
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      name: 'Narinder Sahni',
      role: 'IT Head',
      avatar: '/output/generated-assets/ds_1777965779159_1c1bdf36/15-01fc6c95c0.jpg',
    },
  ];

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
  }, [accent, primary]);

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
    const handlers = [];
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
      handlers.push({ btn, move, leave });
    });
    return () => {
      handlers.forEach(({ btn, move, leave }) => {
        btn.removeEventListener('mousemove', move);
        btn.removeEventListener('mouseleave', leave);
      });
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const iconSvg = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M12 2L14.8 8.2L21.5 9L16.5 13.5L17.9 20.2L12 16.8L6.1 20.2L7.5 13.5L2.5 9L9.2 8.2L12 2Z" fill={accent}/>
    </svg>
  );

  const css = `
    :root{--accent:${accent};--primary:${primary};}
    *{box-sizing:border-box} html,body{margin:0;padding:0;background:${bodyBg};scroll-behavior:smooth}
    body{font-family:'Inter',sans-serif;color:#1a1a1a}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .page-wrapper{animation:pageReveal .6s cubic-bezier(.16,1,.3,1) both;background:${bodyBg}}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:72px 0;position:relative;overflow:hidden}
    .section-sm{padding:28px 0}
    h1,h2,h3,h4{font-family:'Plus Jakarta Sans',sans-serif;margin:0 0 16px;line-height:1.08}
    h1{font-size:clamp(48px,7vw,68px);color:#fff;letter-spacing:-1.5px}
    h2{font-size:clamp(32px,4vw,44px);letter-spacing:-1px}
    p{margin:0 0 14px;line-height:1.7;color:#6b7280}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .nav{position:sticky;top:0;z-index:50;background:rgba(16,16,16,.82);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand-logo{font-weight:800;font-size:20px;color:${accent};font-family:'Plus Jakarta Sans',sans-serif}
    .tj-logo{height:28px;opacity:.95}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:10px;background:${accent};color:#fff;font-weight:700;border:1px solid ${accent};transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(255,107,0,.25);background:#e86100}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:10px;border:1px solid rgba(255,255,255,.28);color:#fff;font-weight:700;background:rgba(255,255,255,.08)}
    .hero{background:#ff6b00}
    .hero::before,.hero::after{content:'';position:absolute;border-radius:50%;pointer-events:none}
    .hero::before{width:420px;height:420px;right:-100px;top:-80px;background:radial-gradient(circle, rgba(255,255,255,.18) 0%, transparent 70%)}
    .hero::after{width:340px;height:340px;left:-80px;bottom:-120px;background:radial-gradient(circle, rgba(255,255,255,.12) 0%, transparent 72%)}
    .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center;min-height:calc(100vh - 72px);padding:54px 0}
    .hero-sub{font-size:18px;color:rgba(255,255,255,.88);max-width:680px}
    .hero-chips{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0 30px}
    .chip{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border:1px solid rgba(255,255,255,.22);border-radius:999px;background:rgba(255,255,255,.12);color:#fff;font-size:13px;font-weight:600}
    .hero-cta{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{position:relative;display:flex;align-items:center;justify-content:center;min-height:500px}
    .dashboard-shell{position:relative;width:100%;max-width:620px}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:20px;border:1px solid rgba(0,0,0,.08);box-shadow:0 25px 60px rgba(0,0,0,.18)}
    .browser-light{background:#f8f8f8}
    .browser-dark{background:#0a0a0a;border-color:rgba(255,255,255,.08)}
    .browser-bar{display:flex;align-items:center;gap:8px;padding:12px 14px;border-bottom:1px solid rgba(0,0,0,.08);background:rgba(255,255,255,.72)}
    .browser-dark .browser-bar{background:rgba(255,255,255,.05);border-bottom-color:rgba(255,255,255,.08)}
    .dot{width:10px;height:10px;border-radius:50%;background:#e5e7eb}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .floating-mini{position:absolute;background:#fff;border-radius:16px;padding:14px 16px;box-shadow:0 18px 45px rgba(0,0,0,.16);min-width:170px}
    .floating-mini h4{font-size:13px;margin:0 0 8px;color:#6b7280}
    .floating-mini strong{font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;color:#111}
    .float-1{top:-18px;right:-18px}
    .float-2{bottom:28px;left:-26px}
    .float-3{bottom:-18px;right:34px}
    .marquee-wrapper{overflow:hidden;background:#fff;padding:18px 0;border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 28s linear infinite}
    .marquee-item{font:800 24px 'Plus Jakarta Sans',sans-serif;white-space:nowrap;margin-right:42px;color:#1a1a1a}
    .trust-grid{display:grid;grid-template-columns:280px 1fr;gap:26px;align-items:center}
    .trust-stat{padding:24px;border-radius:20px;background:linear-gradient(180deg,#fff,#fff7f2);border:1px solid #f3e2d7;box-shadow:0 18px 40px rgba(0,0,0,.05)}
    .trust-stat .num{font:800 clamp(36px,5vw,52px) 'Plus Jakarta Sans',sans-serif;color:#111}
    .logos-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}
    .logo-card{height:86px;border:1px solid #ececec;border-radius:18px;background:#fff;display:flex;align-items:center;justify-content:center;filter:grayscale(1);transition:.3s ease}
    .logo-card:hover{filter:grayscale(0);transform:translateY(-4px)}
    .logo-card img{max-height:34px;max-width:80%;object-fit:contain}
    .section-head{max-width:760px;margin-bottom:28px}
    .feature-spotlight{display:grid;grid-template-columns:minmax(0,1.02fr) minmax(0,.98fr);gap:18px;align-items:stretch}
    .feature-copy{padding:0;display:flex;flex-direction:column;justify-content:center}
    .tag{display:inline-flex;padding:8px 12px;border-radius:999px;background:${accent}14;color:${accent};border:1px solid ${accent}33;font-size:12px;font-weight:800;letter-spacing:.08em;margin-bottom:16px}
    .desc-bar{border-left:3px solid ${accent};padding-left:16px;margin:16px 0 18px}
    .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:16px}
    .feature-card{padding:18px;border-radius:18px;background:#fff;border:1px solid #ececec;box-shadow:0 12px 28px rgba(0,0,0,.05)}
    .feature-card h3{font-size:18px;margin:0 0 8px}
    .feature-card p{font-size:14px;margin:0}
    .feature-top{display:flex;gap:12px;align-items:flex-start;margin-bottom:10px}
    .feature-media{display:flex;align-items:stretch;justify-content:center;height:100%}
    .feature-browser{width:100%;max-width:none;margin:0;height:100%}
    .feature-browser .browser-frame{border-radius:22px;overflow:hidden;height:100%;min-height:100%;box-shadow:0 18px 40px rgba(0,0,0,.10)}
    .feature-browser .browser-bar{padding:10px 14px}
    .feature-browser img{width:100%;height:100%;min-height:520px;max-height:520px;display:block;object-fit:cover;object-position:center}
    .section-dark{background:#111;color:#fff}
    .section-dark h2,.section-dark h3{color:#fff}
    .section-dark p{color:rgba(255,255,255,.72)}
    .section-dark .feature-card{background:#171717;border-color:rgba(255,255,255,.09);box-shadow:none}
    .section-dark .browser-frame{box-shadow:0 25px 60px rgba(0,0,0,.35)}
    .pricing-wrap{max-width:820px;margin:0 auto}
    .pricing-card{background:#fff;border:1px solid #ececec;border-radius:24px;padding:30px;box-shadow:0 18px 45px rgba(0,0,0,.06)}
    .price-head{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-bottom:18px}
    .price-title{font-size:28px}
    .badge-green{padding:8px 12px;border-radius:999px;background:#e9f9ef;color:#15803d;font-weight:800;font-size:12px}
    .price-line{display:flex;align-items:flex-end;gap:12px;margin-bottom:18px}
    .old-price{color:#9ca3af;text-decoration:line-through;font-weight:700}
    .new-price{font:800 40px 'Plus Jakarta Sans',sans-serif;color:#111}
    .checklist{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin:22px 0}
    .check{display:flex;gap:10px;align-items:flex-start;padding:12px 14px;border:1px solid #eee;border-radius:14px;background:#fafafa;font-size:14px;color:#374151}
    .testi-shell{position:relative;overflow:hidden}
    .testi-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testi-slide{min-width:100%;padding:8px}
    .testi-card{padding:34px;border:1px solid #ececec;border-radius:24px;background:#fff;box-shadow:0 18px 45px rgba(0,0,0,.05)}
    .quote-mark{font-size:54px;line-height:1;color:${accent};font-family:'Plus Jakarta Sans',sans-serif}
    .stars{color:#f5b301;letter-spacing:2px;font-size:18px;margin:10px 0 18px}
    .author{display:flex;align-items:center;gap:14px;margin-top:22px}
    .author img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid #fff;box-shadow:0 8px 20px rgba(0,0,0,.08)}
    .author strong{display:block;font-size:16px}
    .author span{color:#6b7280;font-size:14px}
    .slider-nav{display:flex;align-items:center;justify-content:center;gap:10px;margin-top:20px}
    .slider-btn{width:42px;height:42px;border-radius:50%;border:1px solid #e5e7eb;background:#fff;cursor:pointer;font-size:18px}
    .dots{display:flex;justify-content:center;gap:8px;margin-top:16px}
    .dot-ind{width:8px;height:8px;border-radius:999px;border:none;background:#d1d5db;cursor:pointer;transition:.3s ease}
    .dot-ind.active{width:24px;background:${accent}}
    .footer{background:#111;color:#fff;padding:36px 0}
    .footer-grid{display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:24px;align-items:start}
    .footer p,.footer a{color:rgba(255,255,255,.72);font-size:14px}
    .socials{display:flex;gap:10px;margin-top:12px}
    .socials a{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.12);display:flex;align-items:center;justify-content:center}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
    .reveal-left{opacity:0;transform:translateX(-40px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
    .reveal-right{opacity:0;transform:translateX(40px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
    .reveal-scale{opacity:0;transform:scale(.94);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
    .visible{opacity:1 !important;transform:none !important}
    .stagger-parent > *{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease}
    .stagger-parent.visible > *:nth-child(1){opacity:1;transform:none;transition-delay:.05s}
    .stagger-parent.visible > *:nth-child(2){opacity:1;transform:none;transition-delay:.12s}
    .stagger-parent.visible > *:nth-child(3){opacity:1;transform:none;transition-delay:.19s}
    .stagger-parent.visible > *:nth-child(4){opacity:1;transform:none;transition-delay:.26s}
    .stagger-parent.visible > *:nth-child(5){opacity:1;transform:none;transition-delay:.33s}
    .stagger-parent.visible > *:nth-child(6){opacity:1;transform:none;transition-delay:.40s}
    @keyframes marqueeScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
    @keyframes pageReveal{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
    @media (max-width: 1024px){
      .hero-grid,.feature-spotlight,.trust-grid,.footer-grid{grid-template-columns:1fr}
      .logos-grid{grid-template-columns:repeat(3,1fr)}
      .feature-browser img{min-height:420px;max-height:420px}
    }
    @media (max-width: 767px){
      .section{padding:56px 0}
      .nav-inner{grid-template-columns:1fr auto}
      .tj-logo{display:none}
      .hero-grid{gap:28px;min-height:auto;padding:32px 0 40px}
      .hero-visual{min-height:auto}
      .floating-mini{display:none}
      .feature-grid,.checklist{grid-template-columns:1fr}
      .logos-grid{grid-template-columns:repeat(2,1fr)}
      .feature-spotlight{gap:16px}
      .feature-browser img{min-height:280px;max-height:280px}
      .feature-card{padding:16px}
    }
  `;

  return (
    <div className="page-wrapper" ref={pageRef}>
      <style>{css}</style>

      <nav className="nav">
        <div className="container nav-inner">
          <a href="#top" className="brand-logo">Zoho Workplace</a>
          <img
            className="tj-logo"
            src="/output/generated-assets/ds_1777965779159_1c1bdf36/techjockey-logo.png"
            alt="Techjockey"
            onError={(e) => { e.currentTarget.style.display = 'none'; }}
          />
          <a href={ctas[0].href} className="animated-cta btn-magnetic">{ctas[0].text}</a>
        </div>
      </nav>

      <section className="hero section" id="top">
        <div className="container hero-grid">
          <div>
            <div className="tag hero-headline" style={{ background: 'rgba(255,255,255,.12)', color: '#fff', borderColor: 'rgba(255,255,255,.24)' }}>
              PRODUCTIVITY SOFTWARE
            </div>
            <h1 className="hero-headline">Run Email, Chat & Work Apps from One Place</h1>
            <p className="hero-sub">
              Zoho Workplace gives your business a unified suite for communication, collaboration, document creation, meetings, and secure storage.
            </p>

            <div className="hero-chips">
              <span className="chip">Business Email</span>
              <span className="chip">Team Chat</span>
              <span className="chip">Online Office Suite</span>
              <span className="chip">Meetings & Storage</span>
            </div>

            <div className="hero-cta">
              <a href={ctas[0].href} className="animated-cta btn-magnetic">{ctas[0].text}</a>
              <a href="#features" className="ghost-btn">Explore features</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-shell reveal-scale visible">
              <div className="browser-frame browser-light">
                <div className="browser-bar">
                  <span className="dot"></span>
                  <span className="dot"></span>
                  <span className="dot"></span>
                </div>
                <img src="/output/generated-assets/ds_1777965779159_1c1bdf36/18-473c14de05.jpg" alt="Zoho Workplace dashboard" />
              </div>

              <div className="floating-mini float-1">
                <h4>Apps unified</h4>
                <strong>9+ tools</strong>
              </div>
              <div className="floating-mini float-2">
                <h4>Access anywhere</h4>
                <strong>24/7 team sync</strong>
              </div>
              <div className="floating-mini float-3">
                <h4>Business ready</h4>
                <strong>Secure by design</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-sm marquee-wrapper">
        <div className="marquee-track">
          <div className="marquee-item">Zoho Mail</div>
          <div className="marquee-item">Zoho Cliq</div>
          <div className="marquee-item">Zoho Writer</div>
          <div className="marquee-item">Zoho Sheet</div>
          <div className="marquee-item">Zoho Show</div>
          <div className="marquee-item">Zoho WorkDrive</div>
          <div className="marquee-item">Zoho Meeting</div>
          <div className="marquee-item">Zoho Connect</div>
          <div className="marquee-item">Zoho Mail</div>
          <div className="marquee-item">Zoho Cliq</div>
          <div className="marquee-item">Zoho Writer</div>
          <div className="marquee-item">Zoho Sheet</div>
          <div className="marquee-item">Zoho Show</div>
          <div className="marquee-item">Zoho WorkDrive</div>
          <div className="marquee-item">Zoho Meeting</div>
          <div className="marquee-item">Zoho Connect</div>
        </div>
      </section>

      <section className="section">
        <div className="container trust-grid">
          <div className="trust-stat reveal-left">
            <p style={{ marginBottom: 8, fontWeight: 700, color: '#111' }}>Trusted solution ecosystem</p>
            <div className="num" data-count="50000" data-suffix="+">0</div>
            <p>Businesses rely on Zoho solutions worldwide for secure communication and collaboration.</p>
          </div>

          <div className="logos-grid stagger-parent">
            {trustLogos.map((logo, idx) => (
              <div className="logo-card" key={idx}>
                <img src={logo} alt={`logo-${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section, idx) => (
        <section
          id={idx === 0 ? 'features' : undefined}
          key={idx}
          className={`section ${section.dark ? 'section-dark' : ''}`}
        >
          <div className="container">
            <div className="feature-spotlight">
              <div className="feature-copy reveal-left">
                <div className="tag">{section.label}</div>
                <h2>{section.headline}</h2>
                {section.description ? (
                  <div className="desc-bar">
                    <p>{section.description}</p>
                  </div>
                ) : null}

                <div className="feature-grid stagger-parent">
                  {section.features.map((item, i) => (
                    <div className="feature-card" key={i}>
                      <div className="feature-top">
                        <div style={{ flexShrink: 0 }}>{iconSvg}</div>
                        <h3>{item.title}</h3>
                      </div>
                      {item.description ? <p>{item.description}</p> : null}
                    </div>
                  ))}
                </div>
              </div>

              <div className="feature-media reveal-right">
                <div className="feature-browser">
                  <div className={`browser-frame ${section.dark ? 'browser-dark' : 'browser-light'}`}>
                    <div className="browser-bar">
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <img src={section.image} alt={section.headline} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section">
        <div className="container pricing-wrap">
          <div className="section-head reveal">
            <div className="tag">PRICING</div>
            <h2>Get the Right Zoho Workplace Plan for Your Team</h2>
            <p>Compare value, streamline communication, and choose a plan that aligns with your business needs.</p>
          </div>

          <div className="pricing-card reveal-scale">
            <div className="price-head">
              <div>
                <h3 className="price-title">Zoho Workplace</h3>
                <p>Business productivity suite for email, collaboration, meetings, and file management.</p>
              </div>
              <span className="badge-green">Popular choice</span>
            </div>

            <div className="price-line">
              <span className="old-price">Starts from premium suite pricing</span>
              <span className="new-price">Custom Quote</span>
            </div>

            <div className="checklist">
              <div className="check">✔ Secure business email with custom domain support</div>
              <div className="check">✔ Team chat, meetings, and social collaboration</div>
              <div className="check">✔ Writer, Sheet, Show, and WorkDrive access</div>
              <div className="check">✔ Admin controls, security, and migration support</div>
            </div>

            <a href={ctas[1].href} className="animated-cta btn-magnetic">{ctas[1].text}</a>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head reveal">
            <div className="tag">CUSTOMER STORIES</div>
            <h2>What Businesses Say About Zoho Workplace</h2>
            <p>Teams across industries use Zoho Workplace to centralize communication and improve productivity.</p>
          </div>

          <div className="testi-shell reveal">
            <div className="testi-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {testimonials.map((item, idx) => (
                <div className="testi-slide" key={idx}>
                  <div className="testi-card">
                    <div className="quote-mark">“</div>
                    <div className="stars">★★★★★</div>
                    <p style={{ fontSize: 18, color: '#374151' }}>{item.quote}</p>
                    <div className="author">
                      <img src={item.avatar} alt={item.name} />
                      <div>
                        <strong>{item.name}</strong>
                        <span>{item.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`dot-ind ${activeSlide === idx ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to slide ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#fff7f2' }}>
        <div className="container" style={{ textAlign: 'center' }}>
          <div className="reveal">
            <div className="tag">GET STARTED</div>
            <h2>Explore Zoho Workplace for Your Business</h2>
            <p style={{ maxWidth: 720, margin: '0 auto 22px' }}>
              Connect with Techjockey to find the most suitable Zoho Workplace plan and simplify your team’s daily work.
            </p>
            <a href={ctas[2].href} className="animated-cta btn-magnetic">{ctas[2].text}</a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <div className="brand-logo" style={{ color: '#fff' }}>Zoho Workplace</div>
            <p style={{ marginTop: 12 }}>
              Unified communication and collaboration platform for growing businesses, powered by Zoho and discoverable with Techjockey.
            </p>
          </div>

          <div>
            <h3 style={{ fontSize: 18, marginBottom: 12 }}>Quick Links</h3>
            <p><a href="#top">Home</a></p>
            <p><a href="#features">Features</a></p>
          </div>

          <div>
            <h3 style={{ fontSize: 18, marginBottom: 12 }}>Contact</h3>
            <p><a href={ctas[3].href}>{ctas[3].text}</a></p>
            <div className="socials">
              <a href="/" aria-label="social">in</a>
              <a href="/" aria-label="social">f</a>
              <a href="/" aria-label="social">x</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;