import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#1a1a1a';
  const primary = '#ff6b00';
  const bodyBg = '#f5f5f5';

  const [activeTab, setActiveTab] = useState(0);
  const [activeFeature, setActiveFeature] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const formRef = useRef(null);

  const sections = [
    {
      label: 'FEATURES',
      headline: 'Why Choose Zoho Workplace?',
      description:
        'Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.',
      image: '/output/generated-assets/ds_1777884843887_6f559a73/18-473c14de05.jpg',
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
      image: '/output/generated-assets/ds_1777884843887_6f559a73/17-8ee9780f0b.jpg',
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
      image: '/output/generated-assets/ds_1777884843887_6f559a73/25-ebee8bf233.png',
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
      image: '/output/generated-assets/ds_1777884843887_6f559a73/24-4e9d1f3318.png',
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
      name: 'Amit Kapoor',
      role: 'IT Manager',
      avatar: '/output/generated-assets/ds_1777884843887_6f559a73/15-01fc6c95c0.jpg',
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      name: 'Saurav Singh',
      role: 'Head of Operations',
      avatar: '/output/generated-assets/ds_1777884843887_6f559a73/13-a1af876bc5.png',
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      name: 'Shrimi Manchanda',
      role: 'Operations Manager',
      avatar: '/output/generated-assets/ds_1777884843887_6f559a73/15-01fc6c95c0.jpg',
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      name: 'Shweta Thakur',
      role: 'Senior System Administrator',
      avatar: '/output/generated-assets/ds_1777884843887_6f559a73/13-a1af876bc5.png',
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      name: 'Narinder Sahni',
      role: 'IT Head',
      avatar: '/output/generated-assets/ds_1777884843887_6f559a73/15-01fc6c95c0.jpg',
    },
  ];

  const trustLogos = [
    '/output/generated-assets/ds_1777884843887_6f559a73/11-4e22c31148.png',
    '/output/generated-assets/ds_1777884843887_6f559a73/23-61e528786b.png',
    '/output/generated-assets/ds_1777884843887_6f559a73/22-b3d4199ca5.png',
  ];

  const chips = [
    'All-in-One Unified Workspace',
    'Seamless Collaboration in Real Time',
    'Work from Anywhere, Anytime',
    'AI-Powered Productivity (Zia)',
  ];

  const duplicatedLogos = [...trustLogos, ...trustLogos];

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

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => e.preventDefault();

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg}}
    *{box-sizing:border-box} html{scroll-behavior:smooth}
    body{margin:0;font-family:'Inter',sans-serif;background:${bodyBg};color:${accent}}
    a{text-decoration:none;color:inherit} img{max-width:100%}
    .page-wrapper{animation:pageReveal .6s cubic-bezier(.16,1,.3,1) both}
    .lp{background:${bodyBg}}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .nav{position:sticky;top:0;z-index:50;background:rgba(26,26,26,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand{font:800 20px 'Plus Jakarta Sans',sans-serif;color:#fff}
    .nav-right{display:flex;align-items:center;gap:16px}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:10px;background:var(--primary);color:#fff;font-weight:700;border:none;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(0,0,0,.18);background:#e76000}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:10px;border:1px solid rgba(255,255,255,.35);color:#fff;font-weight:600;background:transparent}
    .hero{position:relative;background:var(--primary);overflow:hidden}
    .hero:before,.hero:after{content:'';position:absolute;border-radius:50%;pointer-events:none}
    .hero:before{width:480px;height:480px;right:-120px;top:-80px;background:radial-gradient(circle,rgba(255,255,255,.18),transparent 68%)}
    .hero:after{width:360px;height:360px;left:-90px;bottom:-120px;background:radial-gradient(circle,rgba(26,26,26,.18),transparent 70%)}
    .hero-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:42px;align-items:center;min-height:calc(100vh - 72px);padding:72px 0;position:relative}
    .hero-grid:before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px),linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px);background-size:34px 34px;opacity:.25;pointer-events:none}
    .hero-copy,.hero-visual{position:relative;z-index:1}
    .eyebrow{display:inline-flex;padding:8px 14px;border-radius:999px;background:rgba(255,255,255,.14);border:1px solid rgba(255,255,255,.18);color:#fff;font-size:13px;font-weight:600;margin-bottom:18px}
    h1,h2,h3{font-family:'Plus Jakarta Sans',sans-serif;margin:0 0 14px}
    .hero-headline{font-size:clamp(48px,6vw,68px);line-height:1.05;color:#fff;max-width:700px}
    .hero-sub{font-size:18px;line-height:1.7;color:rgba(255,255,255,.88);max-width:640px}
    .gradient-text{background:linear-gradient(135deg,#1a1a1a 0%,#fff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:26px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);color:#fff;font-size:13px}
    .hero-cta{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
    .hero-visual{display:flex;align-items:center;justify-content:center;min-height:500px}
    .form-card{width:100%;max-width:430px;background:#fff;border-radius:24px;padding:26px;box-shadow:0 30px 80px rgba(0,0,0,.22)}
    .form-card h3{font-size:28px;color:var(--accent)}
    .form-card p{margin:0 0 18px;color:#5f6368}
    .field-grid{display:grid;grid-template-columns:1fr 1fr;gap:14px}
    .field{display:flex;flex-direction:column;gap:8px;margin-bottom:14px}
    .field.full{grid-column:1/-1}
    label{font-size:13px;font-weight:600;color:var(--accent)}
    input{height:48px;padding:0 14px;border:1px solid #e5e7eb;border-radius:12px;font:500 14px 'Inter',sans-serif;outline:none}
    input:focus{border-color:var(--primary);box-shadow:0 0 0 3px rgba(255,107,0,.12)}
    .full-btn{width:100%}
    .section{padding:84px 0;position:relative}
    .bg-white{background:#fff}.bg-muted{background:#f5f5f5}
    .section-head{max-width:760px;margin:0 auto 34px;text-align:center}
    .section-head h2{font-size:clamp(32px,4vw,44px);line-height:1.15}
    .section-head p{color:#5f6368;font-size:17px;line-height:1.75}
    .trust-grid{display:grid;grid-template-columns:280px 1fr;gap:28px;align-items:center}
    .trust-stat{padding:28px;border-radius:20px;background:#fff;box-shadow:0 12px 30px rgba(0,0,0,.06);border:1px solid #ececec}
    .trust-stat .big{font:800 46px 'Plus Jakarta Sans',sans-serif}
    .trust-stat p{margin:8px 0 0;color:#5f6368}
    .logo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px}
    .logo-box{height:92px;background:#fff;border:1px solid #ececec;border-radius:16px;display:flex;align-items:center;justify-content:center;filter:grayscale(1);transition:.25s;box-shadow:0 10px 24px rgba(0,0,0,.04)}
    .logo-box:hover{filter:grayscale(0);transform:translateY(-4px)}
    .logo-box img{max-height:42px;max-width:140px;object-fit:contain}
    .tabs-shell{display:grid;grid-template-columns:320px 1fr;gap:26px}
    .tabs-list{display:flex;flex-direction:column;gap:12px}
    .tab-btn{padding:18px;border-radius:18px;border:1px solid #e5e7eb;background:#fff;text-align:left;cursor:pointer;transition:.25s}
    .tab-btn.active{background:var(--accent);color:#fff;border-color:var(--accent)}
    .tab-btn small{display:block;font-size:12px;opacity:.7;margin-bottom:6px;font-weight:700;letter-spacing:.08em}
    .tab-btn strong{display:block;font:700 18px 'Plus Jakarta Sans',sans-serif}
    .preview-panel{background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:26px;box-shadow:0 14px 34px rgba(0,0,0,.05)}
    .split-panel{display:grid;grid-template-columns:1fr 1fr;gap:30px;align-items:center}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;background:#f8f8f8;border-radius:20px;border:1px solid #e7e7e7;box-shadow:0 18px 40px rgba(0,0,0,.08)}
    .browser-top{display:flex;align-items:center;gap:8px;padding:12px 14px;background:#fff;border-bottom:1px solid #ececec}
    .dot{width:10px;height:10px;border-radius:50%;background:#d9d9d9}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .panel-copy .tag{display:inline-block;padding:8px 12px;border-radius:999px;background:rgba(255,107,0,.1);color:var(--primary);font-size:12px;font-weight:700;letter-spacing:.08em;margin-bottom:14px}
    .panel-copy h3{font-size:34px;line-height:1.16}
    .panel-copy .desc{border-left:3px solid rgba(255,107,0,.28);padding-left:18px;color:#5f6368;line-height:1.8;margin:16px 0 22px}
    .feature-list{display:grid;gap:12px}
    .feature-item{display:flex;gap:14px;padding:14px;border-radius:16px;background:#fafafa;border:1px solid #ededed}
    .icon{width:42px;height:42px;min-width:42px;border-radius:12px;background:rgba(255,107,0,.12);display:flex;align-items:center;justify-content:center;color:var(--primary)}
    .feature-item strong{display:block;font-size:16px;margin-bottom:4px}
    .feature-item p{margin:0;color:#5f6368;line-height:1.65;font-size:14px}
    .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
    .metric-card{padding:24px;border-radius:18px;background:#fff;border:1px solid #ececec;box-shadow:0 10px 24px rgba(0,0,0,.04)}
    .metric-card h3{font-size:38px;color:var(--primary);margin-bottom:8px}
    .metric-card p{margin:0;color:#5f6368}
    .pricing-wrap{display:flex;justify-content:center}
    .pricing-card{width:min(760px,100%);background:#fff;border:1px solid #e5e7eb;border-radius:28px;padding:32px;box-shadow:0 18px 40px rgba(0,0,0,.06);position:relative}
    .green-badge{display:inline-flex;background:#e8f7ea;color:#138a36;padding:8px 12px;border-radius:999px;font-weight:700;font-size:12px;margin-bottom:14px}
    .pricing-title{font-size:34px}
    .price-row{display:flex;align-items:end;gap:12px;margin:12px 0 18px}
    .old-price{text-decoration:line-through;color:#9aa0a6}
    .new-price{font:800 40px 'Plus Jakarta Sans',sans-serif;color:var(--accent)}
    .check-list{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:20px}
    .check{display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-bottom:1px dashed #eee;color:#5f6368}
    .testi-wrap{overflow:hidden;position:relative}
    .testi-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testi-card{min-width:100%;padding:8px}
    .testi-inner{background:#fff;border:1px solid #ececec;border-radius:24px;padding:30px;box-shadow:0 14px 34px rgba(0,0,0,.05)}
    .quote-mark{font-size:46px;line-height:1;color:var(--primary);font-weight:800}
    .stars{color:#f4b400;letter-spacing:2px;font-size:18px;margin:10px 0 14px}
    .testi-inner p{font-size:19px;line-height:1.8;color:var(--accent);margin:0 0 24px}
    .author{display:flex;align-items:center;gap:14px}
    .author img{width:58px;height:58px;border-radius:50%;object-fit:cover;border:3px solid #fff;box-shadow:0 8px 20px rgba(0,0,0,.08)}
    .author strong{display:block}.author span{color:#7a7f85;font-size:14px}
    .car-controls{display:flex;align-items:center;justify-content:center;gap:10px;margin-top:22px}
    .arrow{width:42px;height:42px;border:none;border-radius:50%;background:#fff;box-shadow:0 8px 18px rgba(0,0,0,.08);cursor:pointer}
    .dot-btn{width:10px;height:10px;border:none;border-radius:999px;background:#d0d5dd;cursor:pointer;transition:.25s}
    .dot-btn.active{width:28px;background:var(--accent)}
    .divider-band{background:#fff;padding:20px 0;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
    .ticker-text{font:800 26px 'Plus Jakarta Sans',sans-serif;color:#1a1a1a;white-space:nowrap;margin-right:44px}
    .footer{background:#111;color:#fff;padding:42px 0}
    .footer-grid{display:grid;grid-template-columns:1.2fr 1fr auto;gap:24px;align-items:start}
    .footer p,.footer a{color:rgba(255,255,255,.8);font-size:14px}
    .socials{display:flex;gap:10px}
    .social{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.16);display:flex;align-items:center;justify-content:center}
    .links{display:flex;gap:16px;flex-wrap:wrap;margin-top:10px}
    .reveal {
      opacity: 0;
      transform: translateY(40px);
      transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
    }
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
    .stagger-parent .stagger-child {
      opacity: 0;
      transform: translateY(30px);
      transition: opacity 0.5s ease, transform 0.5s ease;
    }
    .stagger-parent.visible .stagger-child:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0s; }
    .stagger-parent.visible .stagger-child:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
    .stagger-parent.visible .stagger-child:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
    .stagger-parent.visible .stagger-child:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
    .stagger-parent.visible .stagger-child:nth-child(5) { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
    .stagger-parent.visible .stagger-child:nth-child(6) { opacity: 1; transform: translateY(0); transition-delay: 0.5s; }
    .hover-card {
      transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
      cursor: pointer;
    }
    .hover-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 20px 40px rgba(0,0,0,0.15);
    }
    @keyframes marqueeScroll { 0% { transform: translateX(0); } 100% { transform: translateX(-50%); } }
    @keyframes marqueeScrollReverse { 0% { transform: translateX(-50%); } 100% { transform: translateX(0); } }
    .marquee-wrapper { overflow: hidden; }
    .marquee-track {
      display: flex; width: max-content;
      animation: marqueeScroll 28s linear infinite;
    }
    .marquee-track:hover { animation-play-state: paused; }
    .marquee-track-reverse { animation: marqueeScrollReverse 28s linear infinite; }
    .marquee-track-fast { animation-duration: 16s; }
    .marquee-track-slow { animation-duration: 40s; }
    @keyframes pageReveal {
      0%   { opacity: 0; transform: translateY(12px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    section { transition: background-color 0.4s ease; }
    @media (max-width: 980px){
      .hero-grid,.tabs-shell,.split-panel,.trust-grid,.footer-grid{grid-template-columns:1fr}
      .metrics,.check-list,.field-grid,.logo-grid{grid-template-columns:1fr 1fr}
      .hero-grid{min-height:auto;padding:54px 0}
      .hero-visual{min-height:auto}
    }
    @media (max-width: 640px){
      .nav-inner{grid-template-columns:1fr auto;gap:12px}
      .nav-right{justify-content:flex-end}
      .nav-right .animated-cta{display:none}
      .metrics,.check-list,.field-grid,.logo-grid{grid-template-columns:1fr}
      .section{padding:64px 0}
      .hero-headline{font-size:48px}
      .form-card{padding:22px}
      .browser-frame img{height:280px}
    }
  `;

  const Icon = ({ type = 0 }) => {
    const icons = [
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 7h16M4 12h10M4 17h16"/></svg>,
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3v18M3 12h18"/></svg>,
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M5 12l5 5L20 7"/></svg>,
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="4" width="18" height="14" rx="2"/><path d="M8 20h8"/></svg>,
      <svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l8 4v6c0 5-3.5 8-8 10-4.5-2-8-5-8-10V6l8-4z"/></svg>,
    ];
    return icons[type % icons.length];
  };

  return (
    <div className="lp page-wrapper">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@600;700&family=Inter:wght@400;500;600&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">Zoho Workplace</div>
          <div className="nav-right">
            <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" height="28px" alt="Techjockey" />
          </div>
          <a href="#lead-form" className="animated-cta btn-magnetic">Get Free Consultation</a>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy">
            <span className="eyebrow">Email &amp; Collaboration Suite</span>
            <h1 className="hero-headline">
              Elevate Your Team’s Productivity with <span className="gradient-text">Zoho Workplace</span>
            </h1>
            <p className="hero-sub">
              A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified Communication.
            </p>

            <div className="hero-chips">
              {chips.map((chip, i) => (
                <div className="chip" key={chip}>
                  <span>{<Icon type={i} />}</span>
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta">
              <a href="#lead-form" className="ghost-btn">Get Started</a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="form-card" id="lead-form" ref={formRef}>
              <h3>Zoho Workplace</h3>
              <p>Email &amp; Collaboration Suite</p>
              <form onSubmit={handleSubmit}>
                <div className="field-grid">
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" value={formData.name} onChange={handleChange} required />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" name="email" value={formData.email} onChange={handleChange} required />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" value={formData.phone} onChange={handleChange} required />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" value={formData.company} onChange={handleChange} required />
                  </div>
                  <div className="field full">
                    <button type="submit" className="animated-cta btn-magnetic full-btn">Get Free Consultation</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-band marquee-wrapper">
        <div className="marquee-track marquee-track-fast">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="ticker-text">Zoho Workplace <span className="gradient-text">★</span> Email &amp; Collaboration Suite</span>
          ))}
        </div>
      </div>

      <section className="section bg-white">
        <div className="container">
          <div className="trust-grid reveal">
            <div className="trust-stat hover-card">
              <div className="big"><span data-count="100000" data-suffix="+">0</span></div>
              <p>Businesses Globally</p>
            </div>
            <div className="logo-grid stagger-parent">
              {duplicatedLogos.slice(0, 6).map((logo, i) => (
                <div className="logo-box stagger-child hover-card" key={i}>
                  <img src={logo} alt={`Trust logo ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container">
          <div className="section-head reveal">
            <h2>Explore <span className="gradient-text">Zoho Workplace</span></h2>
            <p>Unified communication, collaboration, and productivity tools for enterprises and businesses.</p>
          </div>

          <div className="tabs-shell">
            <div className="tabs-list reveal-left">
              {sections.map((sec, i) => (
                <button
                  key={sec.headline}
                  className={`tab-btn hover-card ${activeTab === i ? 'active' : ''}`}
                  onClick={() => {
                    setActiveTab(i);
                    setActiveFeature(0);
                  }}
                >
                  <small>{sec.label}</small>
                  <strong>{sec.headline}</strong>
                </button>
              ))}
            </div>

            <div className="preview-panel reveal-right">
              <div className="split-panel">
                <div className="browser-frame">
                  <div className="browser-top">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                  <img src={sections[activeTab].image} alt={sections[activeTab].headline} />
                </div>
                <div className="panel-copy">
                  <span className="tag">{sections[activeTab].label}</span>
                  <h3>{sections[activeTab].headline}</h3>
                  {sections[activeTab].description ? <p className="desc">{sections[activeTab].description}</p> : null}
                  <div className="feature-list stagger-parent visible">
                    {sections[activeTab].features.map((feature, i) => (
                      <div
                        key={feature.title}
                        className="feature-item hover-card"
                        style={{ background: activeFeature === i ? '#fff3eb' : '#fafafa' }}
                        onMouseEnter={() => setActiveFeature(i)}
                      >
                        <div className="icon"><Icon type={i} /></div>
                        <div>
                          <strong>{feature.title}</strong>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {activeTab === 0 && (
                    <div style={{ marginTop: 18 }}>
                      <a href="#lead-form" className="animated-cta btn-magnetic">Get Free Consultation</a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="divider-band marquee-wrapper">
        <div className="marquee-track marquee-track-reverse marquee-track-slow">
          {[...Array(8)].map((_, i) => (
            <span key={i} className="ticker-text">Integrate with Popular Apps <span className="gradient-text">★</span> Zoho Workplace</span>
          ))}
        </div>
      </div>

      <section className="section bg-white">
        <div className="container">
          <div className="section-head reveal">
            <h2>Performance Beyond Limits with <span className="gradient-text">Zoho Workplace</span></h2>
          </div>
          <div className="metrics stagger-parent">
            {sections[3].features.map((item, i) => {
              const counts = [82.9, 42.9, 28.6, 14.3];
              return (
                <div className="metric-card hover-card stagger-child reveal-scale" key={item.title}>
                  <h3><span data-count={counts[i]} data-suffix="%">0</span></h3>
                  <strong style={{ display: 'block', marginBottom: 8 }}>{item.title}</strong>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-muted">
        <div className="container">
          <div className="section-head reveal">
            <h2>Zoho Workplace</h2>
            <p>Email &amp; Collaboration Suite</p>
          </div>
          <div className="pricing-wrap">
            <div className="pricing-card reveal-scale hover-card">
              <span className="green-badge">Email &amp; Collaboration Suite</span>
              <h3 className="pricing-title">Zoho Workplace</h3>
              <div className="price-row">
                <span className="old-price">(was )</span>
                <span className="new-price">—</span>
              </div>
              <div className="check-list">
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
                  <div className="check" key={i}>
                    <span style={{ color: primary, marginTop: 2 }}>{<Icon type={2} />}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-head reveal">
            <h2>What Businesses Say</h2>
          </div>
          <div className="testi-wrap reveal">
            <div className="testi-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div className="testi-card" key={i}>
                  <div className="testi-inner hover-card">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p>{t.quote}</p>
                    <div className="author">
                      <img src={t.avatar} alt={t.name} />
                      <div>
                        <strong>{t.name}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="car-controls">
              <button className="arrow" onClick={() => setActiveSlide(prev => (prev - 1 + testimonials.length) % testimonials.length)}>‹</button>
              {testimonials.map((_, i) => (
                <button key={i} className={`dot-btn ${i === activeSlide ? 'active' : ''}`} onClick={() => setActiveSlide(i)} />
              ))}
              <button className="arrow" onClick={() => setActiveSlide(prev => (prev + 1) % testimonials.length)}>›</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" height="28px" alt="Techjockey" />
            <p style={{ marginTop: 14 }}>support@techjockey.com</p>
            <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
            <div className="links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms</a>
            </div>
          </div>
          <div>
            <p>Zoho Workplace</p>
            <p>Email &amp; Collaboration Suite</p>
          </div>
          <div className="socials">
            <a className="social" href="https://facebook.com" aria-label="Facebook">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M13.5 8H16V5h-2.5C10.9 5 9 6.9 9 9.5V12H7v3h2v4h3v-4h3l.5-3H12V9.8c0-1 .4-1.8 1.5-1.8z"/></svg>
            </a>
            <a className="social" href="https://instagram.com" aria-label="Instagram">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
            </a>
            <a className="social" href="https://twitter.com" aria-label="Twitter">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.7-5.8-.1-1 .9-1.4 2.2-1.1 3.5-3.3-.2-6.3-1.7-8.3-4.3-1.1 1.9-.6 4.3 1.1 5.6-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.8 3.4 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 3.9 2.9A8.5 8.5 0 0 1 2 18.6 12 12 0 0 0 8.3 20c7.5 0 11.8-6.5 11.5-12.3.8-.5 1.5-1.1 2.2-1.8z"/></svg>
            </a>
            <a className="social" href="https://linkedin.com" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3a1.97 1.97 0 1 0 0 3.94A1.97 1.97 0 0 0 5.25 3zM20.44 12.63c0-3.12-1.66-4.57-3.88-4.57-1.79 0-2.58.98-3.02 1.67V8.5h-3.37c.04.82 0 11.5 0 11.5h3.37v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.39 1.9-1.39 1.34 0 1.88 1.05 1.88 2.6V20H21c0 0 .04-6.36.04-7.37z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;