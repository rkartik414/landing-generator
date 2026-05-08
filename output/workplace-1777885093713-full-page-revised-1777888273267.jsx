import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#0f172a';
  const primary = '#f97316';
  const bodyBg = '#fff7f1';

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
      el.style.transform = 'translateY(24px)';
      el.style.transition = 'opacity 0.7s ease, transform 0.7s ease';
      el.style.transitionDelay = i * 0.12 + 's';
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
      { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
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
        btn.style.transform = 'translate(' + x * 0.16 + 'px, ' + y * 0.16 + 'px)';
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
    :root{
      --accent:${accent};
      --primary:${primary};
      --primary-dark:#ea580c;
      --primary-soft:#fff1e8;
      --bodyBg:${bodyBg};
      --text-muted:#5f6368;
      --line:#f1dccd;
      --card:#ffffff;
      --shadow:0 14px 34px rgba(15,23,42,.08);
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;font-family:'Inter',sans-serif;background:${bodyBg};color:${accent}}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .page-wrapper{animation:pageReveal .6s cubic-bezier(.16,1,.3,1) both}
    .lp{background:linear-gradient(180deg,#fff7f1 0%,#fff 36%,#fff7f1 100%)}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(18px);border-bottom:1px solid rgba(249,115,22,.12)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:14px;align-items:center;padding:12px 0}
    .brand{font:800 20px 'Plus Jakarta Sans',sans-serif;color:var(--accent)}
    .nav-right{display:flex;align-items:center;gap:12px}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:11px 20px;border-radius:10px;background:var(--primary);color:#fff;font-weight:700;border:none;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(249,115,22,.22);background:var(--primary-dark)}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:11px 20px;border-radius:10px;border:1px solid rgba(15,23,42,.14);color:var(--accent);font-weight:600;background:#fff}
    .hero{position:relative;background:linear-gradient(135deg,#fff4eb 0%,#fff8f3 42%,#ffffff 100%);overflow:hidden;border-bottom:1px solid rgba(249,115,22,.1)}
    .hero:before,.hero:after{content:'';position:absolute;border-radius:50%;pointer-events:none}
    .hero:before{width:420px;height:420px;right:-110px;top:-100px;background:radial-gradient(circle,rgba(249,115,22,.18),transparent 68%)}
    .hero:after{width:320px;height:320px;left:-90px;bottom:-100px;background:radial-gradient(circle,rgba(15,23,42,.07),transparent 70%)}
    .hero-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:28px;align-items:center;min-height:calc(100vh - 66px);padding:48px 0 44px;position:relative}
    .hero-grid:before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(249,115,22,.06) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,.06) 1px,transparent 1px);background-size:32px 32px;opacity:.55;pointer-events:none}
    .hero-copy,.hero-visual{position:relative;z-index:1}
    .eyebrow{display:inline-flex;padding:7px 13px;border-radius:999px;background:rgba(249,115,22,.1);border:1px solid rgba(249,115,22,.18);color:var(--primary-dark);font-size:12px;font-weight:700;margin-bottom:14px}
    h1,h2,h3{font-family:'Plus Jakarta Sans',sans-serif;margin:0 0 12px}
    .hero-headline{font-size:clamp(42px,5.5vw,64px);line-height:1.04;color:var(--accent);max-width:700px}
    .hero-sub{font-size:17px;line-height:1.68;color:var(--text-muted);max-width:620px}
    .gradient-text{background:linear-gradient(135deg,var(--primary-dark) 0%,var(--primary) 55%,#fb923c 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}
    .chip{display:flex;align-items:center;gap:8px;padding:8px 13px;border-radius:999px;background:#fff;border:1px solid rgba(249,115,22,.14);color:var(--accent);font-size:13px;box-shadow:0 6px 18px rgba(249,115,22,.06)}
    .hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:22px}
    .hero-visual{display:flex;align-items:center;justify-content:center;min-height:460px}
    .form-card{width:100%;max-width:420px;background:#fff;border-radius:22px;padding:22px;box-shadow:0 24px 60px rgba(249,115,22,.14);border:1px solid rgba(249,115,22,.12)}
    .form-card h3{font-size:26px;color:var(--accent)}
    .form-card p{margin:0 0 14px;color:var(--text-muted)}
    .field-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .field{display:flex;flex-direction:column;gap:7px;margin-bottom:12px}
    .field.full{grid-column:1/-1}
    label{font-size:13px;font-weight:600;color:var(--accent)}
    input{height:46px;padding:0 14px;border:1px solid #eadfd7;border-radius:12px;font:500 14px 'Inter',sans-serif;outline:none;background:#fffdfa}
    input:focus{border-color:var(--primary);box-shadow:0 0 0 3px rgba(249,115,22,.12)}
    .full-btn{width:100%}
    .section{padding:56px 0;position:relative}
    .bg-white{background:#fff}
    .bg-muted{background:#fff8f3}
    .section-head{max-width:760px;margin:0 auto 24px;text-align:center}
    .section-head h2{font-size:clamp(30px,4vw,42px);line-height:1.14}
    .section-head p{color:var(--text-muted);font-size:16px;line-height:1.7;margin:0}
    .trust-grid{display:grid;grid-template-columns:260px 1fr;gap:20px;align-items:center}
    .trust-stat{padding:24px;border-radius:20px;background:#fff;box-shadow:var(--shadow);border:1px solid var(--line)}
    .trust-stat .big{font:800 44px 'Plus Jakarta Sans',sans-serif;color:var(--primary-dark)}
    .trust-stat p{margin:6px 0 0;color:var(--text-muted)}
    .logo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
    .logo-box{height:84px;background:#fff;border:1px solid var(--line);border-radius:16px;display:flex;align-items:center;justify-content:center;filter:grayscale(1);transition:.25s;box-shadow:0 8px 20px rgba(15,23,42,.04)}
    .logo-box:hover{filter:grayscale(0);transform:translateY(-3px)}
    .logo-box img{max-height:40px;max-width:132px;object-fit:contain}
    .tabs-shell{display:grid;grid-template-columns:300px 1fr;gap:20px}
    .tabs-list{display:flex;flex-direction:column;gap:10px}
    .tab-btn{padding:16px;border-radius:18px;border:1px solid var(--line);background:#fff;text-align:left;cursor:pointer;transition:.25s;box-shadow:0 6px 16px rgba(15,23,42,.03)}
    .tab-btn.active{background:linear-gradient(135deg,var(--primary-dark),var(--primary));color:#fff;border-color:transparent}
    .tab-btn small{display:block;font-size:12px;opacity:.75;margin-bottom:5px;font-weight:700;letter-spacing:.08em}
    .tab-btn strong{display:block;font:700 17px 'Plus Jakarta Sans',sans-serif}
    .preview-panel{background:#fff;border:1px solid var(--line);border-radius:24px;padding:22px;box-shadow:var(--shadow)}
    .split-panel{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;background:#fffaf6;border-radius:20px;border:1px solid var(--line);box-shadow:0 14px 32px rgba(249,115,22,.08)}
    .browser-top{display:flex;align-items:center;gap:8px;padding:11px 14px;background:#fff;border-bottom:1px solid #f1e5db}
    .dot{width:10px;height:10px;border-radius:50%;background:#e2cbbd}
    .browser-frame img{flex:1;min-height:0;height:390px;width:100%;object-fit:cover;display:block}
    .panel-copy .tag{display:inline-block;padding:7px 11px;border-radius:999px;background:rgba(249,115,22,.1);color:var(--primary-dark);font-size:12px;font-weight:700;letter-spacing:.08em;margin-bottom:12px}
    .panel-copy h3{font-size:32px;line-height:1.14}
    .panel-copy .desc{border-left:3px solid rgba(249,115,22,.32);padding-left:16px;color:var(--text-muted);line-height:1.72;margin:14px 0 18px}
    .feature-list{display:grid;gap:10px}
    .feature-item{display:flex;gap:12px;padding:13px;border-radius:16px;background:#fffaf6;border:1px solid #f5e2d5}
    .icon{width:40px;height:40px;min-width:40px;border-radius:12px;background:rgba(249,115,22,.12);display:flex;align-items:center;justify-content:center;color:var(--primary)}
    .feature-item strong{display:block;font-size:15px;margin-bottom:4px}
    .feature-item p{margin:0;color:var(--text-muted);line-height:1.6;font-size:14px}
    .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
    .metric-card{padding:20px;border-radius:18px;background:#fff;border:1px solid var(--line);box-shadow:0 8px 24px rgba(15,23,42,.04)}
    .metric-card h3{font-size:34px;color:var(--primary-dark);margin-bottom:6px}
    .metric-card p{margin:0;color:var(--text-muted)}
    .pricing-wrap{display:flex;justify-content:center}
    .pricing-card{width:min(760px,100%);background:#fff;border:1px solid var(--line);border-radius:28px;padding:28px;box-shadow:var(--shadow);position:relative}
    .green-badge{display:inline-flex;background:#fff1e8;color:var(--primary-dark);padding:8px 12px;border-radius:999px;font-weight:700;font-size:12px;margin-bottom:12px}
    .pricing-title{font-size:34px}
    .price-row{display:flex;align-items:end;gap:12px;margin:10px 0 16px}
    .old-price{text-decoration:line-through;color:#9aa0a6}
    .new-price{font:800 40px 'Plus Jakarta Sans',sans-serif;color:var(--accent)}
    .check-list{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}
    .check{display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-bottom:1px dashed #f1dfd2;color:var(--text-muted)}
    .testi-wrap{overflow:hidden;position:relative}
    .testi-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testi-card{min-width:100%;padding:4px}
    .testi-inner{background:#fff;border:1px solid var(--line);border-radius:24px;padding:26px;box-shadow:var(--shadow)}
    .quote-mark{font-size:42px;line-height:1;color:var(--primary);font-weight:800}
    .stars{color:#f4b400;letter-spacing:2px;font-size:17px;margin:8px 0 12px}
    .testi-inner p{font-size:18px;line-height:1.75;color:var(--accent);margin:0 0 20px}
    .author{display:flex;align-items:center;gap:12px}
    .author img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:3px solid #fff;box-shadow:0 8px 20px rgba(15,23,42,.08)}
    .author strong{display:block}
    .author span{color:#7a7f85;font-size:14px}
    .car-controls{display:flex;align-items:center;justify-content:center;gap:10px;margin-top:16px}
    .arrow{width:40px;height:40px;border:none;border-radius:50%;background:#fff;box-shadow:0 8px 18px rgba(15,23,42,.08);cursor:pointer}
    .dot-btn{width:10px;height:10px;border:none;border-radius:999px;background:#d8dbe0;cursor:pointer;transition:.25s}
    .dot-btn.active{width:28px;background:var(--primary)}
    .divider-band{background:#fff;padding:16px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
    .ticker{display:flex;align-items:center;overflow:hidden}
    .ticker-track{display:flex;align-items:center;min-width:max-content;animation:tickerMove 22s linear infinite}
    .ticker-text{font:800 24px 'Plus Jakarta Sans',sans-serif;color:var(--accent);white-space:nowrap;margin-right:40px}
    .footer{background:#111827;color:#fff;padding:34px 0}
    .footer-grid{display:grid;grid-template-columns:1.2fr 1fr auto;gap:20px;align-items:start}
    .footer p,.footer a{color:rgba(255,255,255,.8);font-size:14px}
    .socials{display:flex;gap:10px}
    .social{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.16);display:flex;align-items:center;justify-content:center}
    .links{display:flex;gap:16px;flex-wrap:wrap;margin-top:8px}
    .reveal{opacity:0;transform:translateY(28px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-left{opacity:0;transform:translateX(-40px);transition:opacity .7s ease,transform .7s ease}
    .reveal-right{opacity:0;transform:translateX(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal-left.visible,.reveal-right.visible{opacity:1;transform:translateX(0)}
    .reveal-scale{opacity:0;transform:scale(.96);transition:opacity .6s ease,transform .6s ease}
    .reveal-scale.visible{opacity:1;transform:scale(1)}
    .reveal-delay-1{transition-delay:.1s}
    .reveal-delay-2{transition-delay:.2s}
    .reveal-delay-3{transition-delay:.3s}
    .reveal-delay-4{transition-delay:.4s}
    @keyframes pageReveal{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}
    @keyframes tickerMove{from{transform:translateX(0)}to{transform:translateX(-50%)}}

    @media (max-width: 1024px){
      .hero-grid,.split-panel,.tabs-shell,.trust-grid,.footer-grid{grid-template-columns:1fr}
      .metrics,.check-list,.field-grid{grid-template-columns:1fr 1fr}
      .hero-grid{min-height:auto;padding:42px 0 38px}
      .hero-visual{min-height:auto}
      .browser-frame img{height:320px}
    }
    @media (max-width: 720px){
      .container{width:min(100% - 24px,1180px)}
      .nav-inner{grid-template-columns:1fr auto;gap:10px}
      .nav-right{display:none}
      .section{padding:44px 0}
      .hero-grid{padding:34px 0 30px;gap:22px}
      .hero-headline{font-size:clamp(34px,10vw,46px)}
      .hero-sub{font-size:15px}
      .hero-chips{gap:8px}
      .chip{font-size:12px}
      .metrics,.check-list,.field-grid,.logo-grid{grid-template-columns:1fr}
      .form-card{padding:18px}
      .preview-panel,.pricing-card,.testi-inner{padding:18px}
      .panel-copy h3,.pricing-title{font-size:28px}
      .browser-frame img{height:260px}
      .ticker-text{font-size:20px;margin-right:28px}
    }
  `;

  return (
    <div className="page-wrapper">
      <style>{css}</style>

      <div className="lp">
        <nav className="nav">
          <div className="container nav-inner">
            <a href="#" className="brand">Techjockey</a>
            <div className="nav-right">
              <a href="#features">Features</a>
              <a href="#pricing">Pricing</a>
              <a href="#testimonials">Testimonials</a>
            </div>
            <a href="#lead-form" className="animated-cta btn-magnetic">Get Quote</a>
          </div>
        </nav>

        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Zoho Workplace for Modern Teams</div>
              <h1 className="hero-headline">
                Run work smarter with <span className="gradient-text">Zoho Workplace</span>
              </h1>
              <p className="hero-sub">
                Unify email, chat, documents, meetings, and storage in one secure collaboration suite built to help your teams move faster and stay aligned.
              </p>

              <div className="hero-chips">
                {chips.map((chip, idx) => (
                  <div className="chip" key={idx}>
                    <span>✦</span>
                    <span>{chip}</span>
                  </div>
                ))}
              </div>

              <div className="hero-cta">
                <a href="#lead-form" className="animated-cta btn-magnetic">Talk to an Expert</a>
                <a href="#features" className="ghost-btn">Explore Features</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="form-card reveal-scale" ref={formRef} id="lead-form">
                <h3>Request a Callback</h3>
                <p>Share your details and our product expert will connect with you.</p>
                <form onSubmit={handleSubmit}>
                  <div className="field-grid">
                    <div className="field">
                      <label htmlFor="name">Name</label>
                      <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter name" />
                    </div>
                    <div className="field">
                      <label htmlFor="email">Email</label>
                      <input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter email" />
                    </div>
                    <div className="field">
                      <label htmlFor="phone">Phone</label>
                      <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone" />
                    </div>
                    <div className="field">
                      <label htmlFor="company">Company</label>
                      <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Enter company" />
                    </div>
                  </div>
                  <button type="submit" className="animated-cta full-btn btn-magnetic">Submit</button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="trust-grid">
              <div className="trust-stat reveal-left">
                <div className="big" data-count="5000" data-suffix="+">0+</div>
                <p>Businesses trust collaboration tools recommended by Techjockey.</p>
              </div>
              <div className="logo-grid reveal-right">
                {trustLogos.map((logo, index) => (
                  <div className="logo-box" key={index}>
                    <img src={logo} alt={`Trusted brand ${index + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-muted" id="features">
          <div className="container">
            <div className="section-head reveal">
              <h2>Everything your team needs in one workplace</h2>
              <p>
                From communication to collaboration and file management, Zoho Workplace helps your teams stay productive without switching across scattered tools.
              </p>
            </div>

            <div className="tabs-shell">
              <div className="tabs-list reveal-left">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab(index);
                      setActiveFeature(0);
                    }}
                  >
                    <small>{section.label}</small>
                    <strong>{section.headline}</strong>
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
                    <div className="tag">{sections[activeTab].label}</div>
                    <h3>{sections[activeTab].headline}</h3>
                    <div className="desc">{sections[activeTab].description || 'Explore the business benefits and capabilities of Zoho Workplace tailored for growing teams.'}</div>

                    <div className="feature-list">
                      {sections[activeTab].features.map((feature, index) => (
                        <div
                          className="feature-item"
                          key={index}
                          onMouseEnter={() => setActiveFeature(index)}
                          style={{
                            borderColor: activeFeature === index ? 'rgba(249,115,22,.28)' : undefined,
                            background: activeFeature === index ? '#fff3eb' : undefined,
                          }}
                        >
                          <div className="icon">✓</div>
                          <div>
                            <strong>{feature.title}</strong>
                            <p>{feature.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white">
          <div className="container">
            <div className="section-head reveal">
              <h2>Measurable impact across your organization</h2>
              <p>Zoho Workplace helps teams communicate securely, collaborate faster, and work efficiently from anywhere.</p>
            </div>

            <div className="metrics">
              {[
                { value: 82.9, suffix: '%', text: 'reported a secure email experience' },
                { value: 42.9, suffix: '%', text: 'found remote work easier with Workplace apps' },
                { value: 28.6, suffix: '%', text: 'said the platform is intuitive and easy to use' },
                { value: 14.3, suffix: '%', text: 'saw better team collaboration and engagement' },
              ].map((item, idx) => (
                <div className={`metric-card reveal-scale reveal-delay-${idx + 1}`} key={idx}>
                  <h3 data-count={item.value} data-suffix={item.suffix}>0{item.suffix}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section bg-muted" id="pricing">
          <div className="container">
            <div className="section-head reveal">
              <h2>Flexible plans for every business need</h2>
              <p>Get the right Zoho Workplace plan with expert guidance from Techjockey and choose a package that aligns with your team size and workflow needs.</p>
            </div>

            <div className="pricing-wrap">
              <div className="pricing-card reveal-scale">
                <div className="green-badge">Recommended by Techjockey</div>
                <h3 className="pricing-title">Zoho Workplace</h3>
                <div className="price-row">
                  <span className="old-price">Starting from ₹199/user/month</span>
                  <span className="new-price">Custom Quote</span>
                </div>
                <p style={{ color: '#5f6368', margin: 0 }}>
                  Compare plans, features, deployment fit, and integrations with help from our product experts.
                </p>

                <div className="check-list">
                  {[
                    'Business email with custom domain',
                    'Team chat, meetings, and file storage',
                    'Collaborative office suite',
                    'Advanced admin and security controls',
                    'Integration with Zoho and third-party tools',
                    'Expert consultation before purchase',
                  ].map((item, index) => (
                    <div className="check" key={index}>
                      <span style={{ color: primary, fontWeight: 700 }}>✓</span>
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div className="hero-cta" style={{ marginTop: 20 }}>
                  <a href="#lead-form" className="animated-cta btn-magnetic">Get Best Price</a>
                  <a href="#testimonials" className="ghost-btn">See Reviews</a>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white" id="testimonials">
          <div className="container">
            <div className="section-head reveal">
              <h2>What customers say</h2>
              <p>Businesses rely on Zoho Workplace and Techjockey for the right-fit collaboration setup.</p>
            </div>

            <div className="testi-wrap reveal">
              <div className="testi-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {testimonials.map((item, index) => (
                  <div className="testi-card" key={index}>
                    <div className="testi-inner">
                      <div className="quote-mark">“</div>
                      <div className="stars">★★★★★</div>
                      <p>{item.quote}</p>
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

              <div className="car-controls">
                <button className="arrow" onClick={() => setActiveSlide(prev => (prev - 1 + testimonials.length) % testimonials.length)}>←</button>
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    className={`dot-btn ${activeSlide === index ? 'active' : ''}`}
                    onClick={() => setActiveSlide(index)}
                  />
                ))}
                <button className="arrow" onClick={() => setActiveSlide(prev => (prev + 1) % testimonials.length)}>→</button>
              </div>
            </div>
          </div>
        </section>

        <section className="divider-band">
          <div className="container">
            <div className="ticker">
              <div className="ticker-track">
                {duplicatedLogos.map((_, index) => (
                  <div className="ticker-text" key={index}>Zoho Workplace • Secure • Collaborative • Scalable</div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <div className="brand" style={{ color: '#fff', marginBottom: 10 }}>Techjockey</div>
              <p>
                Discover the right business software with trusted guidance, transparent pricing support, and expert recommendations tailored to your needs.
              </p>
            </div>

            <div>
              <strong style={{ display: 'block', marginBottom: 8 }}>Quick Links</strong>
              <div className="links">
                <a href="#features">Features</a>
                <a href="#pricing">Pricing</a>
                <a href="#testimonials">Testimonials</a>
                <a href="#lead-form">Contact</a>
              </div>
            </div>

            <div>
              <strong style={{ display: 'block', marginBottom: 8 }}>Follow Us</strong>
              <div className="socials">
                <a href="#" className="social">f</a>
                <a href="#" className="social">in</a>
                <a href="#" className="social">X</a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;