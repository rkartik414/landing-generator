import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#0f172a';
  const primary = '#f97316';
  const bodyBg = '#fffaf6';

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
      --line:#f2e3d8;
      --card:#ffffff;
      --shadow:0 18px 45px rgba(15,23,42,.08);
      --shadow-soft:0 10px 24px rgba(15,23,42,.05);
      --radius:22px;
      --radius-lg:28px;
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;font-family:'Inter',sans-serif;background:${bodyBg};color:${accent}}
    a{text-decoration:none;color:inherit}
    img{max-width:100%;display:block}
    .page-wrapper{animation:pageReveal .6s cubic-bezier(.16,1,.3,1) both}
    .lp{background:linear-gradient(180deg,#fffaf6 0%,#ffffff 38%,#fff8f2 100%)}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.88);backdrop-filter:blur(18px);border-bottom:1px solid rgba(15,23,42,.06)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:14px;align-items:center;padding:14px 0}
    .brand{font:800 20px 'Plus Jakarta Sans',sans-serif;color:var(--accent);letter-spacing:-.02em}
    .nav-right{display:flex;align-items:center;gap:12px}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:12px;background:var(--primary);color:#fff;font-weight:700;border:none;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(249,115,22,.22);background:var(--primary-dark)}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:12px;border:1px solid rgba(15,23,42,.12);color:var(--accent);font-weight:600;background:#fff;transition:.25s ease}
    .ghost-btn:hover{border-color:rgba(249,115,22,.24);color:var(--primary-dark)}
    .hero{position:relative;background:
      radial-gradient(circle at 15% 20%, rgba(249,115,22,.10), transparent 28%),
      radial-gradient(circle at 85% 15%, rgba(249,115,22,.12), transparent 24%),
      linear-gradient(135deg,#fff6ee 0%,#fffaf7 42%,#ffffff 100%);
      overflow:hidden;border-bottom:1px solid rgba(15,23,42,.05)}
    .hero:before,.hero:after{content:'';position:absolute;border-radius:50%;pointer-events:none}
    .hero:before{width:420px;height:420px;right:-110px;top:-100px;background:radial-gradient(circle,rgba(249,115,22,.14),transparent 68%)}
    .hero:after{width:320px;height:320px;left:-90px;bottom:-100px;background:radial-gradient(circle,rgba(15,23,42,.05),transparent 70%)}
    .hero-grid{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(380px,.92fr);gap:34px;align-items:center;min-height:calc(100vh - 72px);padding:44px 0 34px;position:relative}
    .hero-grid:before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(249,115,22,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(249,115,22,.045) 1px,transparent 1px);background-size:34px 34px;opacity:.5;pointer-events:none}
    .hero-copy,.hero-visual{position:relative;z-index:1}
    .eyebrow{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;background:#fff;border:1px solid rgba(249,115,22,.18);color:var(--primary-dark);font-size:12px;font-weight:800;margin-bottom:16px;box-shadow:0 6px 18px rgba(249,115,22,.08)}
    h1,h2,h3{font-family:'Plus Jakarta Sans',sans-serif;margin:0 0 12px;letter-spacing:-.03em}
    .hero-headline{font-size:clamp(40px,5.2vw,62px);line-height:1.02;color:var(--accent);max-width:720px}
    .hero-sub{font-size:17px;line-height:1.72;color:var(--text-muted);max-width:620px}
    .gradient-text{background:linear-gradient(135deg,var(--primary-dark) 0%,var(--primary) 55%,#fb923c 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px;max-width:680px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;background:#fff;border:1px solid rgba(249,115,22,.14);color:var(--accent);font-size:13px;font-weight:600;box-shadow:0 8px 22px rgba(249,115,22,.06)}
    .chip .tick{width:18px;height:18px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:rgba(249,115,22,.12);color:var(--primary-dark);font-size:12px}
    .hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px}
    .hero-proof{display:flex;flex-wrap:wrap;gap:18px;margin-top:26px}
    .proof-item{display:flex;flex-direction:column;gap:2px}
    .proof-item strong{font:800 24px 'Plus Jakarta Sans',sans-serif;color:var(--accent)}
    .proof-item span{font-size:13px;color:var(--text-muted)}
    .hero-visual{display:flex;align-items:center;justify-content:center;min-height:520px}
    .form-card{width:100%;max-width:430px;background:rgba(255,255,255,.96);border-radius:24px;padding:24px;box-shadow:0 24px 60px rgba(15,23,42,.10);border:1px solid rgba(249,115,22,.12);position:relative}
    .form-card:before{content:'';position:absolute;inset:0 0 auto 0;height:5px;background:linear-gradient(90deg,var(--primary-dark),#fb923c);border-radius:24px 24px 0 0}
    .form-card h3{font-size:26px;color:var(--accent);margin-top:4px}
    .form-card p{margin:0 0 14px;color:var(--text-muted);line-height:1.6}
    .field-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .field{display:flex;flex-direction:column;gap:7px;margin-bottom:12px}
    .field.full{grid-column:1/-1}
    label{font-size:13px;font-weight:700;color:var(--accent)}
    input{height:48px;padding:0 14px;border:1px solid #eadfd7;border-radius:12px;font:500 14px 'Inter',sans-serif;outline:none;background:#fff}
    input:focus{border-color:var(--primary);box-shadow:0 0 0 3px rgba(249,115,22,.12)}
    .full-btn{width:100%}
    .section{padding:72px 0;position:relative}
    .bg-white{background:#fff}
    .bg-muted{background:linear-gradient(180deg,#fffaf7 0%,#fff7f2 100%)}
    .section-head{max-width:760px;margin:0 auto 36px;text-align:center}
    .section-head h2{font-size:clamp(30px,4vw,44px);line-height:1.12}
    .section-head p{color:var(--text-muted);font-size:16px;line-height:1.72;margin:0 auto;max-width:720px}
    .trust-grid{display:grid;grid-template-columns:280px 1fr;gap:18px;align-items:center}
    .trust-stat{padding:28px;border-radius:24px;background:linear-gradient(180deg,#fff 0%,#fff8f2 100%);box-shadow:var(--shadow-soft);border:1px solid var(--line)}
    .trust-stat .mini{display:inline-block;padding:6px 10px;border-radius:999px;background:rgba(249,115,22,.09);color:var(--primary-dark);font-size:11px;font-weight:800;letter-spacing:.08em;margin-bottom:10px}
    .trust-stat .big{font:800 48px 'Plus Jakarta Sans',sans-serif;color:var(--primary-dark);line-height:1}
    .trust-stat p{margin:8px 0 0;color:var(--text-muted);line-height:1.6}
    .logo-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
    .logo-box{height:90px;background:#fff;border:1px solid var(--line);border-radius:18px;display:flex;align-items:center;justify-content:center;filter:grayscale(1);transition:.25s;box-shadow:0 8px 20px rgba(15,23,42,.04)}
    .logo-box:hover{filter:grayscale(0);transform:translateY(-3px)}
    .logo-box img{max-height:42px;max-width:132px;object-fit:contain}
    .overview-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:24px;align-items:center}
    .overview-card{background:#fff;border:1px solid var(--line);border-radius:28px;padding:28px;box-shadow:var(--shadow-soft)}
    .overview-card h3{font-size:30px;line-height:1.18;margin-bottom:10px}
    .overview-card p{margin:0;color:var(--text-muted);line-height:1.72}
    .mini-points{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:20px}
    .mini-point{padding:14px 16px;border-radius:18px;background:#fff8f2;border:1px solid #f5e4d8}
    .mini-point strong{display:block;font-size:15px;margin-bottom:4px}
    .mini-point span{font-size:13px;line-height:1.55;color:var(--text-muted)}
    .overview-visual{background:#fff;border:1px solid var(--line);border-radius:28px;padding:14px;box-shadow:var(--shadow-soft)}
    .overview-visual img{width:100%;height:100%;min-height:360px;object-fit:cover;border-radius:20px}
    .tabs-shell{display:grid;grid-template-columns:310px 1fr;gap:20px}
    .tabs-list{display:flex;flex-direction:column;gap:12px}
    .tab-btn{padding:18px;border-radius:18px;border:1px solid var(--line);background:#fff;text-align:left;cursor:pointer;transition:.25s;box-shadow:0 6px 16px rgba(15,23,42,.03)}
    .tab-btn:hover{border-color:rgba(249,115,22,.2);transform:translateY(-2px)}
    .tab-btn.active{background:linear-gradient(135deg,var(--primary-dark),var(--primary));color:#fff;border-color:transparent;box-shadow:0 18px 36px rgba(249,115,22,.18)}
    .tab-btn small{display:block;font-size:11px;opacity:.8;margin-bottom:5px;font-weight:800;letter-spacing:.12em}
    .tab-btn strong{display:block;font:700 17px 'Plus Jakarta Sans',sans-serif;line-height:1.35}
    .preview-panel{background:#fff;border:1px solid var(--line);border-radius:28px;padding:24px;box-shadow:var(--shadow-soft)}
    .split-panel{display:grid;grid-template-columns:1.02fr .98fr;gap:26px;align-items:center}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;background:#fffaf6;border-radius:22px;border:1px solid var(--line);box-shadow:0 14px 32px rgba(249,115,22,.08)}
    .browser-top{display:flex;align-items:center;gap:8px;padding:12px 14px;background:#fff;border-bottom:1px solid #f1e5db}
    .dot{width:10px;height:10px;border-radius:50%;background:#e2cbbd}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .panel-copy .tag{display:inline-block;padding:7px 11px;border-radius:999px;background:rgba(249,115,22,.1);color:var(--primary-dark);font-size:12px;font-weight:800;letter-spacing:.08em;margin-bottom:12px}
    .panel-copy h3{font-size:34px;line-height:1.12}
    .panel-copy .desc{border-left:3px solid rgba(249,115,22,.32);padding-left:16px;color:var(--text-muted);line-height:1.75;margin:14px 0 18px}
    .feature-list{display:grid;gap:10px}
    .feature-item{display:flex;gap:12px;padding:14px;border-radius:18px;background:#fffaf6;border:1px solid #f5e2d5}
    .icon{width:42px;height:42px;min-width:42px;border-radius:12px;background:rgba(249,115,22,.12);display:flex;align-items:center;justify-content:center;color:var(--primary)}
    .feature-item strong{display:block;font-size:15px;margin-bottom:4px}
    .feature-item p{margin:0;color:var(--text-muted);line-height:1.65;font-size:14px}
    .metrics{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
    .metric-card{padding:22px;border-radius:20px;background:#fff;border:1px solid var(--line);box-shadow:var(--shadow-soft)}
    .metric-card h3{font-size:36px;color:var(--primary-dark);margin-bottom:8px;line-height:1}
    .metric-card p{margin:0;color:var(--text-muted);line-height:1.6}
    .pricing-wrap{display:flex;justify-content:center}
    .pricing-card{width:min(760px,100%);background:linear-gradient(180deg,#fff 0%,#fffaf6 100%);border:1px solid var(--line);border-radius:28px;padding:30px;box-shadow:var(--shadow);position:relative}
    .green-badge{display:inline-flex;background:#fff1e8;color:var(--primary-dark);padding:8px 12px;border-radius:999px;font-weight:800;font-size:12px;margin-bottom:12px}
    .pricing-title{font-size:34px}
    .price-row{display:flex;align-items:end;gap:12px;margin:10px 0 16px}
    .old-price{text-decoration:line-through;color:#9aa0a6}
    .new-price{font:800 40px 'Plus Jakarta Sans',sans-serif;color:var(--accent)}
    .check-list{display:grid;grid-template-columns:1fr 1fr;gap:10px;margin-top:18px}
    .check{display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-bottom:1px dashed #f1dfd2;color:var(--text-muted)}
    .testi-wrap{overflow:hidden;position:relative}
    .testi-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testi-card{min-width:100%;padding:4px}
    .testi-inner{background:#fff;border:1px solid var(--line);border-radius:26px;padding:28px;box-shadow:var(--shadow-soft)}
    .quote-mark{font-size:44px;line-height:1;color:var(--primary);font-weight:800}
    .stars{color:#f4b400;letter-spacing:2px;font-size:17px;margin:8px 0 12px}
    .testi-inner p{font-size:18px;line-height:1.75;color:var(--accent);margin:0 0 20px}
    .author{display:flex;align-items:center;gap:12px}
    .author img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:3px solid #fff;box-shadow:0 8px 20px rgba(15,23,42,.08)}
    .author strong{display:block}
    .author span{color:#7a7f85;font-size:14px}
    .car-controls{display:flex;align-items:center;justify-content:center;gap:10px;margin-top:18px}
    .arrow{width:42px;height:42px;border:none;border-radius:50%;background:#fff;box-shadow:0 8px 18px rgba(15,23,42,.08);cursor:pointer}
    .dot-btn{width:10px;height:10px;border:none;border-radius:999px;background:#d8dbe0;cursor:pointer;transition:.25s}
    .dot-btn.active{width:28px;background:var(--primary)}
    .divider-band{background:#fff;padding:18px 0;border-top:1px solid var(--line);border-bottom:1px solid var(--line)}
    .ticker{display:flex;align-items:center;overflow:hidden}
    .ticker-track{display:flex;align-items:center;min-width:max-content;animation:tickerMove 22s linear infinite}
    .ticker-text{font:800 24px 'Plus Jakarta Sans',sans-serif;color:var(--accent);white-space:nowrap;margin-right:40px}
    .footer{background:#111827;color:#fff;padding:34px 0}
    .footer-grid{display:grid;grid-template-columns:1.2fr 1fr auto;gap:20px;align-items:start}
    .footer p,.footer a{color:rgba(255,255,255,.8);font-size:14px}
    .socials{display:flex;gap:10px}
    .social{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.16);display:flex;align-items:center;justify-content:center}
    .links{display:flex;gap:16px;flex-wrap:wrap}
    .reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger-parent>*{opacity:0;transform:translateY(24px);transition:opacity .7s ease,transform .7s ease}
    .reveal-left{transform:translateX(-28px)}
    .reveal-right{transform:translateX(28px)}
    .reveal-scale{transform:scale(.96)}
    .visible,.visible>*{opacity:1;transform:none}
    .stagger-parent.visible>*:nth-child(1){transition-delay:.05s}
    .stagger-parent.visible>*:nth-child(2){transition-delay:.12s}
    .stagger-parent.visible>*:nth-child(3){transition-delay:.19s}
    .stagger-parent.visible>*:nth-child(4){transition-delay:.26s}
    .stagger-parent.visible>*:nth-child(5){transition-delay:.33s}
    .stagger-parent.visible>*:nth-child(6){transition-delay:.40s}
    @keyframes tickerMove{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    @keyframes pageReveal{from{opacity:0;transform:translateY(12px)}to{opacity:1;transform:none}}
    @media (max-width: 1024px){
      .hero-grid,.overview-grid,.split-panel,.tabs-shell,.trust-grid,.footer-grid{grid-template-columns:1fr}
      .hero-grid{min-height:auto;padding:38px 0 26px}
      .hero-visual{min-height:auto}
      .metrics{grid-template-columns:repeat(2,1fr)}
      .logo-grid{grid-template-columns:repeat(3,1fr)}
      .browser-frame img{height:360px}
    }
    @media (max-width: 640px){
      .container{width:min(100% - 20px,1180px)}
      .nav-inner{grid-template-columns:1fr auto;gap:10px}
      .nav-right .ghost-btn{display:none}
      .section{padding:56px 0}
      .field-grid,.mini-points,.check-list,.metrics{grid-template-columns:1fr}
      .logo-grid{grid-template-columns:1fr}
      .hero-headline{font-size:34px}
      .hero-sub{font-size:15px}
      .ticker-text{font-size:20px}
      .pricing-card,.preview-panel,.overview-card,.trust-stat,.testi-inner{padding:22px}
      .form-card{padding:20px}
      .browser-frame img{height:280px}
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
              <a href="#features" className="ghost-btn">Explore Features</a>
              <a href="#lead-form" className="animated-cta btn-magnetic">Get Free Demo</a>
            </div>
          </div>
        </nav>

        <header className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow hero-headline">Trusted Collaboration Suite</div>
              <h1 className="hero-headline">
                Bring Email, Chat, Docs and Meetings into <span className="gradient-text">One Smart Workspace</span>
              </h1>
              <p className="hero-sub">
                Zoho Workplace helps modern teams work faster with secure business email, cloud collaboration, file storage,
                team communication and productivity apps in a single connected platform.
              </p>

              <div className="hero-chips">
                {chips.map((chip, idx) => (
                  <div className="chip" key={idx}>
                    <span className="tick">✓</span>
                    <span>{chip}</span>
                  </div>
                ))}
              </div>

              <div className="hero-cta">
                <a href="#lead-form" className="animated-cta btn-magnetic">Request a Callback</a>
                <a href="#features" className="ghost-btn">View Capabilities</a>
              </div>

              <div className="hero-proof">
                <div className="proof-item">
                  <strong data-count="16" data-suffix="+">16+</strong>
                  <span>Integrated business apps</span>
                </div>
                <div className="proof-item">
                  <strong data-count="82.9" data-suffix="%">82.9%</strong>
                  <span>Users reported secure email experience</span>
                </div>
                <div className="proof-item">
                  <strong data-count="42.9" data-suffix="%">42.9%</strong>
                  <span>Found remote work easier</span>
                </div>
              </div>
            </div>

            <div className="hero-visual" id="lead-form" ref={formRef}>
              <div className="form-card">
                <h3>Talk to Our Product Expert</h3>
                <p>Share your details and get assistance in selecting the right Zoho Workplace plan for your business.</p>

                <form onSubmit={handleSubmit}>
                  <div className="field-grid">
                    <div className="field">
                      <label>Name</label>
                      <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                    </div>
                    <div className="field">
                      <label>Company</label>
                      <input name="company" value={formData.company} onChange={handleChange} placeholder="Company name" />
                    </div>
                    <div className="field">
                      <label>Email</label>
                      <input name="email" value={formData.email} onChange={handleChange} placeholder="Work email" />
                    </div>
                    <div className="field">
                      <label>Phone</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Phone number" />
                    </div>
                    <div className="field full">
                      <button type="submit" className="animated-cta full-btn btn-magnetic">Book Free Consultation</button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </header>

        <section className="section bg-white reveal">
          <div className="container">
            <div className="trust-grid">
              <div className="trust-stat">
                <span className="mini">BUSINESS VALUE</span>
                <div className="big" data-count="4.8">4.8</div>
                <p>High satisfaction for ease of use, security, collaboration and reliable anywhere access.</p>
              </div>
              <div className="logo-grid stagger-parent">
                {trustLogos.map((logo, idx) => (
                  <div className="logo-box" key={idx}>
                    <img src={logo} alt={`Trusted company ${idx + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-muted reveal" id="features">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-card reveal-left">
                <div className="eyebrow" style={{ marginBottom: 12 }}>Unified Productivity Platform</div>
                <h3>Designed for teams that want simpler communication and faster collaboration</h3>
                <p>
                  Zoho Workplace combines the essential tools your teams use every day into a clean, connected business suite.
                  Instead of managing scattered apps, your organization gets one workspace for communication, content,
                  meetings and team productivity.
                </p>
                <div className="mini-points stagger-parent">
                  <div className="mini-point">
                    <strong>Business Email</strong>
                    <span>Secure, ad-free mail hosting with admin controls.</span>
                  </div>
                  <div className="mini-point">
                    <strong>Document Collaboration</strong>
                    <span>Create, edit and review files together in real time.</span>
                  </div>
                  <div className="mini-point">
                    <strong>Team Communication</strong>
                    <span>Chat, connect and coordinate work without switching apps.</span>
                  </div>
                  <div className="mini-point">
                    <strong>Remote Ready</strong>
                    <span>Work smoothly across devices, locations and departments.</span>
                  </div>
                </div>
              </div>
              <div className="overview-visual reveal-right">
                <img src={sections[0].image} alt="Zoho Workplace overview" />
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white reveal">
          <div className="container">
            <div className="section-head">
              <h2>Explore What Makes Zoho Workplace Stand Out</h2>
              <p>
                A clean, scalable collaboration suite built to support communication, content sharing and teamwork across every business function.
              </p>
            </div>

            <div className="tabs-shell">
              <div className="tabs-list reveal-left">
                {sections.map((section, idx) => (
                  <button
                    key={idx}
                    className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
                    onClick={() => {
                      setActiveTab(idx);
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
                      <span className="dot"></span>
                      <span className="dot"></span>
                      <span className="dot"></span>
                    </div>
                    <img src={sections[activeTab].image} alt={sections[activeTab].headline} />
                  </div>

                  <div className="panel-copy">
                    <span className="tag">{sections[activeTab].label}</span>
                    <h3>{sections[activeTab].headline}</h3>
                    <p className="desc">{sections[activeTab].description || 'Explore business-ready capabilities that help your teams communicate, collaborate and scale with confidence.'}</p>

                    <div className="feature-list">
                      {sections[activeTab].features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="feature-item"
                          onMouseEnter={() => setActiveFeature(idx)}
                          style={{
                            borderColor: activeFeature === idx ? 'rgba(249,115,22,.28)' : undefined,
                            boxShadow: activeFeature === idx ? '0 10px 24px rgba(249,115,22,.08)' : undefined
                          }}
                        >
                          <div className="icon">✦</div>
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

        <section className="section bg-muted reveal">
          <div className="container">
            <div className="section-head">
              <h2>Performance Insights That Matter</h2>
              <p>
                Real usage outcomes show how Zoho Workplace improves security, flexibility and collaboration across modern business teams.
              </p>
            </div>

            <div className="metrics stagger-parent">
              <div className="metric-card">
                <h3 data-count="82.9" data-suffix="%">82.9%</h3>
                <p>reported a secure email experience for business communication and data protection.</p>
              </div>
              <div className="metric-card">
                <h3 data-count="42.9" data-suffix="%">42.9%</h3>
                <p>said remote work became easier with access to workplace apps from anywhere.</p>
              </div>
              <div className="metric-card">
                <h3 data-count="28.6" data-suffix="%">28.6%</h3>
                <p>found the platform intuitive and easier for teams to adopt quickly.</p>
              </div>
              <div className="metric-card">
                <h3 data-count="14.3" data-suffix="%">14.3%</h3>
                <p>saw measurable gains in collaboration, productivity and team alignment.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white reveal">
          <div className="container">
            <div className="pricing-wrap">
              <div className="pricing-card">
                <span className="green-badge">POPULAR CHOICE FOR GROWING TEAMS</span>
                <h2 className="pricing-title">Get the Right Zoho Workplace Plan</h2>
                <p style={{ color: '#5f6368', lineHeight: 1.7, margin: 0 }}>
                  Compare plans, understand licensing, and choose the best-fit setup for your team with expert assistance from Techjockey.
                </p>

                <div className="price-row">
                  <span className="old-price">Custom consultation included</span>
                  <span className="new-price">Free</span>
                </div>

                <a href="#lead-form" className="animated-cta btn-magnetic">Talk to an Expert</a>

                <div className="check-list">
                  <div className="check"><span>✓</span><span>Plan recommendation based on team size and workflow</span></div>
                  <div className="check"><span>✓</span><span>Guidance on email, collaboration and storage requirements</span></div>
                  <div className="check"><span>✓</span><span>Assistance with deployment and setup questions</span></div>
                  <div className="check"><span>✓</span><span>Support for app integrations and migration planning</span></div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-muted reveal">
          <div className="container">
            <div className="section-head">
              <h2>What Businesses Say About Zoho Workplace</h2>
              <p>Hear from professionals who improved communication, collaboration and productivity with the platform.</p>
            </div>

            <div className="testi-wrap">
              <div className="testi-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
                {testimonials.map((item, idx) => (
                  <div className="testi-card" key={idx}>
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
                <button className="arrow" onClick={() => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}>‹</button>
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    className={`dot-btn ${activeSlide === idx ? 'active' : ''}`}
                    onClick={() => setActiveSlide(idx)}
                  ></button>
                ))}
                <button className="arrow" onClick={() => setActiveSlide((prev) => (prev + 1) % testimonials.length)}>›</button>
              </div>
            </div>
          </div>
        </section>

        <section className="divider-band">
          <div className="container">
            <div className="ticker">
              <div className="ticker-track">
                {duplicatedLogos.map((logo, idx) => (
                  <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: 20, marginRight: 36 }}>
                    <img src={logo} alt={`logo-${idx}`} style={{ maxHeight: 34, maxWidth: 120, objectFit: 'contain', opacity: 0.9 }} />
                    <span className="ticker-text">Smarter collaboration for every team</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-grid">
            <div>
              <a href="#" className="brand" style={{ color: '#fff', display: 'inline-block', marginBottom: 10 }}>Techjockey</a>
              <p>
                Discover the right Zoho Workplace solution for your business with expert consultation, product guidance and a seamless buying experience.
              </p>
            </div>

            <div className="links">
              <a href="#features">Features</a>
              <a href="#lead-form">Free Demo</a>
              <a href="#">Contact</a>
            </div>

            <div className="socials">
              <a href="#" className="social">f</a>
              <a href="#" className="social">in</a>
              <a href="#" className="social">x</a>
            </div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;