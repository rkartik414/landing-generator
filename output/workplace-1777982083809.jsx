import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#e4292b';
  const primary = '#e4292b';
  const bodyBg = '#ffffff';

  const [activeSection, setActiveSection] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef(null);

  const ctaItems = [
    {
      text: 'get price',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'get price',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
  ];

  const productSections = [
    {
      label: 'FEATURES',
      headline: 'Why Choose Zoho Workplace?',
      description:
        'Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.',
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
      label: 'SECURITY',
      headline: 'Create a Secure Digital Workspace',
      description:
        'Enjoy privacy-first, enterprise-grade cloud capabilities with strong spam protection, SSO, Directory, MFA, and a secure password manager.',
      features: [
        {
          title: 'Zoho Workplace Price Plan Includes:',
          description:
            'Enterprise-Grade Custom Email; Migration Assistance; Collaborative Office Suite; 30-GB Mail Storage Per User; File Storage Starts at 100 GB Per Team; File Sharing & Permissions; Team Chat; Document Management; Supported Device: Android, iOS, Windows, Mac',
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

  const icons = [
    <svg viewBox="0 0 24 24" fill="none" key="1"><path d="M4 7h16M7 4v6M17 4v6M5 11h14v8H5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg viewBox="0 0 24 24" fill="none" key="2"><path d="M8 12h8M8 8h8M8 16h5M5 4h14v16H5z" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg viewBox="0 0 24 24" fill="none" key="3"><path d="M12 3v18M3 12h18M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg>,
    <svg viewBox="0 0 24 24" fill="none" key="4"><path d="M12 4l7 4v8l-7 4-7-4V8l7-4zM9 12l2 2 4-4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    <svg viewBox="0 0 24 24" fill="none" key="5"><path d="M4 7h16v10H4zM8 11h8M8 15h4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
  ];

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
  }, [accent, primary]);

  useEffect(() => {
    const els = document.querySelectorAll('.hero-headline, .hero-sub, .hero-chips, .hero-cta, .hero-visual');
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.9s ease';
      el.style.transitionDelay = i * 0.2 + 's';
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.opacity = '1';
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
    const btns = document.querySelectorAll('.btn-magnetic');
    const handlers = [];
    btns.forEach(btn => {
      const move = e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.25) + 'px, ' + (y * 0.25) + 'px)';
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

  const currentSection = productSections[activeSection];
  const currentFeature = currentSection.features[activeFeature] || currentSection.features[0];

  const css = `
    :root{--accent:${accent};--primary:${primary};}
    *{box-sizing:border-box}
    body{margin:0;background:${bodyBg};font-family:Inter,sans-serif;color:#111827}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .page-wrapper{animation:pageReveal .6s cubic-bezier(.16,1,.3,1) both;background:${bodyBg}}
    .lp{overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(20px);border-bottom:1px solid #e5e7eb}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand{display:flex;align-items:center;gap:12px;font-weight:800;font-size:20px;color:${accent}}
    .nav-right{display:flex;align-items:center}
    .section{position:relative;padding:82px 0}
    .hero{background:#fff;min-height:calc(100vh - 72px);display:flex;align-items:center}
    .hero-grid,.split-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:34px;align-items:center}
    .hero-grid{min-height:640px}
    .hero-copy{position:relative;z-index:2}
    .eyebrow,.section-tag{display:inline-flex;align-items:center;padding:8px 14px;border-radius:999px;border:1px solid rgba(228,41,43,.18);background:rgba(228,41,43,.06);color:${accent};font-weight:700;font-size:12px;letter-spacing:.08em;text-transform:uppercase}
    h1,h2,h3{font-family:"Plus Jakarta Sans",sans-serif;margin:0 0 16px;color:#111827;line-height:1.08}
    h1{font-size:clamp(48px,6vw,68px);letter-spacing:-.03em}
    h2{font-size:clamp(32px,4vw,44px);letter-spacing:-.02em}
    h3{font-size:22px}
    p{margin:0;color:#4b5563;line-height:1.75;font-size:16px}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${accent} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-sub{max-width:640px;font-size:18px;margin-bottom:16px}
    .support-line{font-size:15px;color:#6b7280;margin-bottom:24px}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(228,41,43,.16);background:#fff;box-shadow:0 10px 24px rgba(17,24,39,.06);font-size:13px;font-weight:600;color:#374151}
    .chip svg{width:16px;height:16px;color:${accent};flex:0 0 16px}
    .cta-row{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:14px 24px;border-radius:12px;background:${accent};color:#fff;font-weight:800;text-transform:capitalize;border:none;box-shadow:0 12px 24px rgba(228,41,43,.22);transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 18px 28px rgba(228,41,43,.28);background:${primary}}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:14px 24px;border-radius:12px;background:#fff;color:#111827;font-weight:700;border:1px solid #e5e7eb}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center}
    .hero-panel{position:relative;width:100%;min-height:560px;border-radius:28px;background:
      linear-gradient(180deg, rgba(255,255,255,.95), rgba(255,255,255,.88)),
      linear-gradient(135deg, rgba(228,41,43,.08), rgba(255,255,255,1));
      border:1px solid #eceff3;box-shadow:0 30px 80px rgba(17,24,39,.12);overflow:hidden}
    .grid-lines,.section-grid{position:absolute;inset:0;background-image:linear-gradient(to right, rgba(17,24,39,.05) 1px, transparent 1px),linear-gradient(to bottom, rgba(17,24,39,.05) 1px, transparent 1px);background-size:34px 34px;pointer-events:none}
    .hero-halo{position:absolute;right:50px;top:60px;width:260px;height:260px;border-radius:50%;background:radial-gradient(circle, rgba(228,41,43,.25) 0%, rgba(228,41,43,.12) 34%, rgba(228,41,43,0) 72%)}
    .workspace{position:relative;padding:28px;height:100%;display:grid;grid-template-columns:1.15fr .85fr;gap:18px}
    .ui-card{background:#fff;border:1px solid #edf0f5;border-radius:18px;box-shadow:0 18px 40px rgba(17,24,39,.08)}
    .mail-card{padding:18px}
    .mail-top,.bar{display:flex;align-items:center;gap:8px;margin-bottom:16px}
    .dot{width:10px;height:10px;border-radius:50%;background:#d1d5db}
    .dot.red{background:${accent}}
    .mail-item{display:grid;grid-template-columns:44px 1fr;gap:12px;padding:12px 0;border-top:1px solid #f0f2f6}
    .avatar{width:44px;height:44px;border-radius:12px;background:linear-gradient(135deg, rgba(228,41,43,.18), rgba(228,41,43,.06));display:flex;align-items:center;justify-content:center;color:${accent};font-weight:800}
    .line{height:10px;border-radius:99px;background:#edf1f6}
    .line.sm{width:44%}.line.md{width:66%}.line.lg{width:88%}
    .side-stack{display:grid;gap:16px;align-content:start;padding-top:34px}
    .mini-card{padding:16px}
    .pill{display:inline-flex;padding:6px 10px;border-radius:999px;background:rgba(228,41,43,.08);color:${accent};font-size:12px;font-weight:700}
    .progress{height:10px;border-radius:999px;background:#f1f5f9;overflow:hidden;margin-top:14px}
    .progress>span{display:block;height:100%;background:linear-gradient(90deg, ${accent}, rgba(228,41,43,.6));border-radius:999px}
    .float-card{position:absolute;padding:14px 16px;background:#fff;border:1px solid #edf0f5;border-radius:16px;box-shadow:0 18px 40px rgba(17,24,39,.12)}
    .fc-1{left:20px;bottom:24px}.fc-2{right:20px;bottom:26px}
    .trust{background:#f8fafc;border-top:1px solid #edf2f7;border-bottom:1px solid #edf2f7}
    .trust-grid{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:16px}
    .trust-card{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:22px;box-shadow:0 12px 28px rgba(17,24,39,.05)}
    .metric{font-family:"Plus Jakarta Sans",sans-serif;font-size:34px;font-weight:800;color:#111827}
    .muted{color:#6b7280}
    .tabs-layout{display:grid;grid-template-columns:340px 1fr;gap:24px;align-items:start}
    .tab-list{display:grid;gap:12px}
    .tab-btn{padding:18px;border:1px solid #e5e7eb;border-radius:18px;background:#fff;text-align:left;cursor:pointer;transition:.25s ease;box-shadow:0 10px 24px rgba(17,24,39,.04)}
    .tab-btn.active,.tab-btn:hover{border-color:rgba(228,41,43,.28);box-shadow:0 18px 34px rgba(17,24,39,.08);transform:translateY(-2px)}
    .tab-btn small{display:block;color:${accent};font-weight:700;margin-bottom:8px}
    .preview{background:#fff;border:1px solid #e5e7eb;border-radius:26px;padding:26px;box-shadow:0 20px 50px rgba(17,24,39,.08);position:relative;overflow:hidden}
    .preview-grid{display:grid;grid-template-columns:1fr 1fr;gap:22px;align-items:start}
    .feature-tabs{display:grid;gap:10px}
    .feature-tab{display:flex;gap:14px;align-items:flex-start;padding:16px;border-radius:16px;border:1px solid #edf0f5;background:#fff;cursor:pointer;transition:.25s ease}
    .feature-tab.active,.feature-tab:hover{background:#fff5f5;border-color:rgba(228,41,43,.24)}
    .feature-icon{width:42px;height:42px;border-radius:12px;background:rgba(228,41,43,.1);display:flex;align-items:center;justify-content:center;color:${accent};flex:0 0 42px}
    .feature-icon svg{width:22px;height:22px}
    .preview-visual{min-height:420px;border-radius:22px;background:linear-gradient(180deg, #fff, #fff8f8);border:1px solid #edf0f5;padding:18px;display:grid;grid-template-rows:auto 1fr auto;gap:14px}
    .browser-top{display:flex;align-items:center;gap:8px;padding-bottom:10px;border-bottom:1px solid #edf0f5}
    .dash-body{display:grid;grid-template-columns:1fr 1fr;gap:14px;align-items:start}
    .panel{background:#fff;border:1px solid #edf0f5;border-radius:16px;padding:16px}
    .stat-box{padding:14px;border-radius:14px;background:linear-gradient(135deg, rgba(228,41,43,.08), rgba(228,41,43,.03));border:1px solid rgba(228,41,43,.12)}
    .desc-box{border-left:3px solid rgba(228,41,43,.26);padding-left:16px;margin:8px 0 6px}
    .pricing{background:#fff}
    .pricing-wrap{max-width:760px;margin:0 auto}
    .price-card{background:#fff;border:1px solid rgba(228,41,43,.22);border-radius:28px;padding:34px;box-shadow:0 28px 60px rgba(17,24,39,.08);position:relative;overflow:hidden}
    .badge-green{display:inline-flex;align-items:center;padding:8px 12px;border-radius:999px;background:#eafaf0;color:#14803c;font-size:13px;font-weight:700;margin-bottom:14px}
    .price-main{font-size:18px;font-weight:700;color:#111827;margin:14px 0 8px}
    .strike{color:#9ca3af;text-decoration:line-through}
    .price-strong{font-family:"Plus Jakarta Sans",sans-serif;font-size:42px;font-weight:800;color:#111827}
    .list{display:grid;gap:12px;margin:22px 0}
    .list-item{display:flex;gap:12px;align-items:flex-start;color:#374151}
    .check{width:22px;height:22px;border-radius:50%;background:#ecfdf3;color:#16a34a;display:flex;align-items:center;justify-content:center;font-size:13px;font-weight:900;flex:0 0 22px;margin-top:2px}
    .w-full{width:100%}
    .testimonials{background:#f8fafc}
    .testimonial-shell{position:relative;overflow:hidden}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-card{min-width:100%;padding:6px}
    .testimonial-inner{background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:34px;box-shadow:0 18px 40px rgba(17,24,39,.06)}
    .quote-mark{font-size:62px;line-height:1;color:${accent};font-family:"Plus Jakarta Sans",sans-serif}
    .stars{color:#f5b301;letter-spacing:2px;font-size:18px;margin:12px 0 18px}
    .author{display:flex;align-items:center;gap:14px;margin-top:22px}
    .author-badge{width:52px;height:52px;border-radius:50%;background:${accent};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800}
    .author-name{font-weight:800;color:#111827}
    .author-role{color:#6b7280;font-size:14px}
    .slider-controls{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:24px}
    .arrow{width:42px;height:42px;border-radius:50%;border:1px solid #e5e7eb;background:#fff;cursor:pointer;font-size:18px}
    .dots{display:flex;gap:8px}
    .dot-btn{width:10px;height:10px;border-radius:999px;border:none;background:#d1d5db;cursor:pointer;transition:.25s}
    .dot-btn.active{width:28px;background:${accent}}
    .footer{background:#111827;color:#fff;padding:38px 0}
    .footer-grid{display:grid;grid-template-columns:1.2fr 1fr auto;gap:20px;align-items:start}
    .footer a{color:#e5e7eb}
    .socials{display:flex;gap:10px}
    .social{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center}
    .social svg{width:18px;height:18px;fill:#fff}
    .footer-bottom{display:flex;gap:18px;flex-wrap:wrap;margin-top:18px;color:#cbd5e1;font-size:14px}
    .section-orb{position:absolute;border-radius:50%;pointer-events:none}
    .orb-r{top:-120px;right:-120px;width:320px;height:320px;background:radial-gradient(circle, rgba(228,41,43,.12), transparent 70%)}
    .orb-l{bottom:-120px;left:-120px;width:260px;height:260px;background:radial-gradient(circle, rgba(228,41,43,.08), transparent 70%)}

    .reveal { opacity: 0; transform: translateY(40px); transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1); }
    .reveal.visible { opacity: 1; transform: translateY(0); }
    .reveal-left  { opacity: 0; transform: translateX(-50px); transition: opacity 0.7s ease, transform 0.7s ease; }
    .reveal-right { opacity: 0; transform: translateX(50px);  transition: opacity 0.7s ease, transform 0.7s ease; }
    .reveal-left.visible, .reveal-right.visible { opacity: 1; transform: translateX(0); }
    .reveal-scale { opacity: 0; transform: scale(0.92); transition: opacity 0.6s ease, transform 0.6s ease; }
    .reveal-scale.visible { opacity: 1; transform: scale(1); }
    .reveal-delay-1 { transition-delay: 0.1s; }
    .reveal-delay-2 { transition-delay: 0.2s; }
    .reveal-delay-3 { transition-delay: 0.3s; }
    .reveal-delay-4 { transition-delay: 0.4s; }
    .stagger-parent .stagger-child { opacity: 0; transform: translateY(30px); transition: opacity 0.5s ease, transform 0.5s ease; }
    .stagger-parent.visible .stagger-child:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0s; }
    .stagger-parent.visible .stagger-child:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
    .stagger-parent.visible .stagger-child:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
    .stagger-parent.visible .stagger-child:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
    .stagger-parent.visible .stagger-child:nth-child(5) { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
    .stagger-parent.visible .stagger-child:nth-child(6) { opacity: 1; transform: translateY(0); transition-delay: 0.5s; }
    .hover-card { transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease; cursor: pointer; }
    .hover-card:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.15); }
    @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes marqueeScrollReverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
    .marquee-wrapper { overflow: hidden; }
    .marquee-track { display: flex; width: max-content; animation: marqueeScroll 28s linear infinite; }
    .marquee-track:hover { animation-play-state: paused; }
    .marquee-track-reverse { animation: marqueeScrollReverse 28s linear infinite; }
    .marquee-track-fast { animation-duration: 16s; }
    .marquee-track-slow { animation-duration: 40s; }
    @keyframes pageReveal { 0%   { opacity: 0; transform: translateY(12px); } 100% { opacity: 1; transform: translateY(0); } }
    section { transition: background-color 0.4s ease; }

    @media (max-width: 991px){
      .hero-grid,.split-grid,.tabs-layout,.preview-grid,.trust-grid,.footer-grid,.dash-body,.workspace{grid-template-columns:1fr}
      .hero{min-height:auto}
      .hero-panel{min-height:520px}
      .nav-inner{grid-template-columns:1fr auto auto}
      .footer-grid{gap:28px}
    }
    @media (max-width: 767px){
      .section{padding:64px 0}
      .container{width:min(100% - 24px,1180px)}
      .nav-inner{gap:10px}
      .brand{font-size:18px}
      .hero-grid{min-height:auto}
      .hero-panel{min-height:480px;border-radius:22px}
      .workspace{padding:16px}
      .cta-row{flex-direction:column}
      .animated-cta,.ghost-btn{width:100%}
      .tab-btn,.feature-tab,.preview,.price-card,.testimonial-inner{padding:18px}
      .hero-visual{min-height:auto}
    }
  `;

  const getInitials = name =>
    name
      .split(' ')
      .map(n => n[0])
      .slice(0, 2)
      .join('');

  return (
    <div className="page-wrapper lp">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span style={{ fontWeight: 800, fontSize: '20px', color: accent }}>Zoho</span>
            <span style={{ color: '#111827', fontWeight: 700 }}>Workplace</span>
          </div>
          <div className="nav-right">
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
          >
            {ctaItems[0].text}
          </a>
        </div>
      </nav>

      <section className="section hero">
        <div className="section-orb orb-r" />
        <div className="section-orb orb-l" />
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow reveal">Email & Collaboration Suite</span>
            <h1 className="hero-headline reveal reveal-delay-1" style={{ marginTop: 18 }}>
              Elevate Your Team’s Productivity with <span className="gradient-text">Zoho Workplace</span>
            </h1>
            <p className="hero-sub reveal reveal-delay-2">
              A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
            </p>
            <p className="support-line reveal reveal-delay-2">
              Easy Setup & Quick Onboarding; A Made in India solution; 24x7 Support
            </p>

            <div className="chips hero-chips stagger-parent reveal">
              {[
                'Easy Setup & Quick Onboarding',
                'A Made in India solution',
                '24x7 Support',
                'Unified Communication',
              ].map((chip, i) => (
                <div className="chip stagger-child" key={chip}>
                  {icons[i % icons.length]}
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="cta-row hero-cta">
              <a
                href={ctaItems[1].href}
                className="animated-cta btn-magnetic"
                target="_blank"
                rel="noreferrer"
              >
                {ctaItems[1].text}
              </a>
            </div>
          </div>

          <div className="hero-visual reveal-right">
            <div className="hero-panel">
              <div className="grid-lines" />
              <div className="hero-halo" />
              <div className="workspace">
                <div className="ui-card mail-card hover-card">
                  <div className="mail-top">
                    <span className="dot red" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                  {['ZM', 'ZW', 'ZC'].map((txt, i) => (
                    <div className="mail-item" key={i}>
                      <div className="avatar">{txt}</div>
                      <div>
                        <div className={`line ${i === 0 ? 'lg' : i === 1 ? 'md' : 'lg'}`} style={{ marginBottom: 8 }} />
                        <div className={`line ${i === 0 ? 'md' : i === 1 ? 'lg' : 'sm'}`} />
                      </div>
                    </div>
                  ))}
                </div>

                <div className="side-stack">
                  <div className="ui-card mini-card hover-card">
                    <span className="pill">Team Chat</span>
                    <div className="line lg" style={{ marginTop: 12, marginBottom: 8 }} />
                    <div className="line md" />
                    <div className="progress"><span style={{ width: '82.9%' }} /></div>
                  </div>
                  <div className="ui-card mini-card hover-card">
                    <span className="pill">Documents</span>
                    <div className="line lg" style={{ marginTop: 12, marginBottom: 8 }} />
                    <div className="line sm" />
                    <div className="progress"><span style={{ width: '42.9%' }} /></div>
                  </div>
                  <div className="ui-card mini-card hover-card">
                    <span className="pill">Meetings</span>
                    <div className="line md" style={{ marginTop: 12, marginBottom: 8 }} />
                    <div className="line lg" />
                    <div className="progress"><span style={{ width: '28.6%' }} /></div>
                  </div>
                </div>
              </div>

              <div className="float-card fc-1">
                <div style={{ fontWeight: 800, color: '#111827' }}>100,000+</div>
                <div className="muted" style={{ fontSize: 13 }}>Businesses Globally</div>
              </div>
              <div className="float-card fc-2">
                <div style={{ fontWeight: 800, color: '#111827' }}>82.9%</div>
                <div className="muted" style={{ fontSize: 13 }}>Secure email experience</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section trust">
        <div className="container">
          <div className="trust-grid stagger-parent reveal">
            <div className="trust-card stagger-child hover-card">
              <div className="metric">100,000+</div>
              <p className="muted">Businesses Globally</p>
            </div>
            <div className="trust-card stagger-child hover-card">
              <div className="metric">100,000+</div>
              <p className="muted">Trusted by 100,000+ Businesses Globally</p>
            </div>
            <div className="trust-card stagger-child hover-card">
              <div className="metric">Unified</div>
              <p className="muted">Email, collaboration, and productivity tools in one platform</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: '#ffffff' }}>
        <div className="section-orb orb-r" />
        <div className="container">
          <div className="tabs-layout">
            <div className="tab-list reveal-left">
              {productSections.map((section, index) => (
                <button
                  key={section.headline}
                  className={`tab-btn hover-card ${activeSection === index ? 'active' : ''}`}
                  onClick={() => {
                    setActiveSection(index);
                    setActiveFeature(0);
                  }}
                >
                  <small>{section.label}</small>
                  <div style={{ fontFamily: 'Plus Jakarta Sans, sans-serif', fontWeight: 800, fontSize: 18, color: '#111827' }}>
                    {section.headline}
                  </div>
                </button>
              ))}
            </div>

            <div className="preview reveal-right">
              <div className="section-grid" />
              <div className="preview-grid">
                <div>
                  <span className="section-tag">{currentSection.label}</span>
                  <h2 style={{ marginTop: 18 }}>{currentSection.headline}</h2>
                  {currentSection.description ? (
                    <div className="desc-box">
                      <p>{currentSection.description}</p>
                    </div>
                  ) : null}

                  <div className="feature-tabs" style={{ marginTop: 22 }}>
                    {currentSection.features.map((feature, idx) => (
                      <div
                        key={feature.title}
                        className={`feature-tab hover-card ${activeFeature === idx ? 'active' : ''}`}
                        onClick={() => setActiveFeature(idx)}
                      >
                        <div className="feature-icon">{icons[idx % icons.length]}</div>
                        <div>
                          <div style={{ fontWeight: 800, color: '#111827', marginBottom: 6 }}>{feature.title}</div>
                          <p style={{ fontSize: 14 }}>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="preview-visual reveal-scale">
                  <div className="browser-top">
                    <span className="dot red" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>

                  <div className="dash-body">
                    <div className="panel hover-card">
                      <div className="pill">Zoho Workplace</div>
                      <div className="line lg" style={{ marginTop: 14, marginBottom: 10 }} />
                      <div className="line md" style={{ marginBottom: 10 }} />
                      <div className="line sm" />
                      <div className="progress"><span style={{ width: '76%' }} /></div>
                    </div>
                    <div className="stat-box hover-card">
                      <div style={{ color: accent, fontWeight: 800, fontSize: 14, marginBottom: 8 }}>{currentFeature.title}</div>
                      <p style={{ fontSize: 14 }}>{currentFeature.description}</p>
                    </div>
                    <div className="panel hover-card">
                      <div style={{ display: 'grid', gap: 10 }}>
                        {currentSection.features.slice(0, Math.min(3, currentSection.features.length)).map((item, i) => (
                          <div key={i} style={{ display: 'flex', gap: 10, alignItems: 'center' }}>
                            <div className="feature-icon" style={{ width: 34, height: 34, borderRadius: 10 }}>{icons[i % icons.length]}</div>
                            <div className="line lg" />
                          </div>
                        ))}
                      </div>
                    </div>
                    <div className="panel hover-card">
                      <div style={{ fontWeight: 800, marginBottom: 8, color: '#111827' }}>{currentSection.label}</div>
                      <div className="line md" style={{ marginBottom: 8 }} />
                      <div className="line lg" style={{ marginBottom: 8 }} />
                      <div className="line sm" />
                    </div>
                  </div>

                  <div className="stat-box">
                    <div style={{ fontWeight: 800, color: '#111827', marginBottom: 8 }}>{currentFeature.title}</div>
                    <p style={{ fontSize: 14 }}>{currentFeature.description}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing">
        <div className="section-orb orb-l" />
        <div className="container pricing-wrap">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 28 }}>
            <span className="section-tag">Pricing</span>
            <h2 style={{ marginTop: 16 }}>Zoho Workplace</h2>
          </div>
          <div className="price-card reveal-scale hover-card">
            <div className="badge-green">Includes</div>
            <div className="price-main">
              <span className="strike">(was )</span>
            </div>
            <div className="price-strong">Zoho Workplace</div>
            <div className="list">
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
                <div className="list-item" key={item}>
                  <div className="check">✓</div>
                  <div>{item}</div>
                </div>
              ))}
            </div>
            <div style={{ color: '#6b7280', marginBottom: 18 }}>
              Enterprise-Grade Custom Email, Migration Assistance, Collaborative Office Suite, 30-GB Mail Storage Per User, File Storage Starts at 100 GB Per Team, File Sharing & Permissions, Team Chat, Document Management, Supported Device: Android, iOS, Windows, Mac
            </div>
            <div
              className="animated-cta w-full"
              style={{ opacity: 0.95, pointerEvents: 'none' }}
            >
              Pricing available on request
            </div>
          </div>
        </div>
      </section>

      <section className="section testimonials">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 26 }}>
            <span className="section-tag">Testimonials</span>
            <h2 style={{ marginTop: 16 }}>What teams say about Zoho Workplace</h2>
          </div>

          <div className="testimonial-shell reveal">
            <div
              className="testimonial-track"
              ref={sliderRef}
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div className="testimonial-card" key={i}>
                  <div className="testimonial-inner hover-card">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p style={{ fontSize: 20, color: '#111827', lineHeight: 1.7 }}>{t.quote}</p>
                    <div className="author">
                      <div className="author-badge">{getInitials(t.author)}</div>
                      <div>
                        <div className="author-name">{t.author}</div>
                        <div className="author-role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-controls">
              <button
                className="arrow"
                onClick={() => setActiveSlide(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <div className="dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`dot-btn ${activeSlide === i ? 'active' : ''}`}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                className="arrow"
                onClick={() => setActiveSlide(prev => (prev + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <img
                src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
                height="28"
                alt="Techjockey"
              />
              <div style={{ marginTop: 14, color: '#cbd5e1' }}>support@techjockey.com</div>
              <div className="footer-bottom">
                <span>© 2024 Techjockey Infotech Pvt. Ltd.</span>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms">Terms</a>
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 700, marginBottom: 10 }}>Zoho Workplace</div>
              <div style={{ color: '#cbd5e1' }}>Email & Collaboration Suite</div>
              <div style={{ color: '#cbd5e1', marginTop: 8 }}>
                Trusted by 100,000+ Businesses Globally
              </div>
            </div>

            <div className="socials">
              <a className="social" href="https://facebook.com" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>
              </a>
              <a className="social" href="https://instagram.com" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm5 5.5A4.5 4.5 0 1 0 16.5 12 4.5 4.5 0 0 0 12 7.5zm6-1.8a1.2 1.2 0 1 0 1.2 1.2A1.2 1.2 0 0 0 18 5.7zM12 9a3 3 0 1 1-3 3 3 3 0 0 1 3-3z"/></svg>
              </a>
              <a className="social" href="https://twitter.com" aria-label="Twitter">
                <svg viewBox="0 0 24 24"><path d="M22 5.9c-.7.3-1.5.5-2.3.6a4 4 0 0 0 1.7-2.2 8.1 8.1 0 0 1-2.6 1A4 4 0 0 0 12 8.2a11.4 11.4 0 0 1-8.3-4.2A4 4 0 0 0 5 9.3a4 4 0 0 1-1.8-.5v.1A4 4 0 0 0 6.4 13a4 4 0 0 1-1.8.1A4 4 0 0 0 8.3 16a8.1 8.1 0 0 1-5 1.7A8.6 8.6 0 0 1 2 17.6 11.4 11.4 0 0 0 8.2 19c7.4 0 11.5-6.2 11.5-11.5v-.5A8.2 8.2 0 0 0 22 5.9z"/></svg>
              </a>
              <a className="social" href="https://linkedin.com" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M6.9 8.5H3.5V20h3.4zM5.2 3A2 2 0 1 0 5.3 7 2 2 0 0 0 5.2 3zM20.5 20v-6.3c0-3.4-1.8-5-4.2-5a3.6 3.6 0 0 0-3.2 1.8V8.5H9.7c.1 1.3 0 11.5 0 11.5h3.4v-6.4c0-.3 0-.7.1-.9a2.2 2.2 0 0 1 2-1.5c1.4 0 2 1.1 2 2.8V20z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;