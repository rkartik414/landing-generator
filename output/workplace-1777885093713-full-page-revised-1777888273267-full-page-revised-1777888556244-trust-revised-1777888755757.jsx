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

  const chips = [
    'All-in-One Unified Workspace',
    'Seamless Collaboration in Real Time',
    'Work from Anywhere, Anytime',
    'AI-Powered Productivity (Zia)',
  ];

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
    .pricing-card{width:min(760px,100%);background:linear-gradient(180deg,#fff 0%,#fffaf6 100%);border:1px solid var(--line);border-radius:28px;padding:30px;box-shadow:var(--shadow)}
    .pricing-card h3{font-size:34px;text-align:center;margin-bottom:8px}
    .pricing-card > p{text-align:center;color:var(--text-muted);margin:0 auto 24px;max-width:620px;line-height:1.7}
    .price-row{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
    .price-box{padding:22px;border-radius:22px;border:1px solid var(--line);background:#fff;position:relative}
    .price-box.featured{border-color:rgba(249,115,22,.28);box-shadow:0 18px 40px rgba(249,115,22,.12)}
    .badge{position:absolute;top:14px;right:14px;padding:6px 10px;border-radius:999px;background:rgba(249,115,22,.1);color:var(--primary-dark);font-size:11px;font-weight:800}
    .price-box h4{font-size:20px;margin:0 0 6px}
    .price{font:800 34px 'Plus Jakarta Sans',sans-serif;color:var(--accent);margin:6px 0 10px}
    .price span{font-size:14px;font-weight:600;color:var(--text-muted)}
    .price-box ul{padding:0;margin:14px 0 0;list-style:none;display:grid;gap:10px}
    .price-box li{font-size:14px;color:var(--text-muted);display:flex;gap:8px;align-items:flex-start}
    .testimonial-wrap{display:grid;grid-template-columns:.9fr 1.1fr;gap:22px;align-items:stretch}
    .testimonial-intro,.testimonial-card{background:#fff;border:1px solid var(--line);border-radius:28px;box-shadow:var(--shadow-soft)}
    .testimonial-intro{padding:28px}
    .testimonial-intro h3{font-size:32px;line-height:1.16}
    .testimonial-intro p{color:var(--text-muted);line-height:1.72;margin:0}
    .testimonial-card{padding:28px;display:flex;flex-direction:column;justify-content:space-between;min-height:280px}
    .quote-mark{font-size:68px;line-height:1;color:rgba(249,115,22,.22);font-family:Georgia,serif;margin-bottom:8px}
    .testimonial-card p{font-size:18px;line-height:1.8;color:var(--accent);margin:0 0 22px}
    .testimonial-user{display:flex;align-items:center;gap:14px}
    .testimonial-user img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:3px solid #fff2e8}
    .testimonial-user strong{display:block;font-size:16px}
    .testimonial-user span{font-size:13px;color:var(--text-muted)}
    .dots-wrap{display:flex;gap:8px;margin-top:18px}
    .t-dot{width:10px;height:10px;border-radius:50%;background:#ead7c8;cursor:pointer;transition:.25s}
    .t-dot.active{width:28px;border-radius:999px;background:var(--primary)}
    .faq-grid{display:grid;gap:14px;max-width:860px;margin:0 auto}
    .faq-item{background:#fff;border:1px solid var(--line);border-radius:20px;padding:18px 20px;box-shadow:var(--shadow-soft)}
    .faq-item h4{font-size:17px;margin:0 0 8px}
    .faq-item p{margin:0;color:var(--text-muted);line-height:1.7}
    .cta-band{background:linear-gradient(135deg,var(--accent) 0%,#172554 100%);color:#fff;border-radius:30px;padding:34px;display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center;box-shadow:0 24px 60px rgba(15,23,42,.16)}
    .cta-band h3{font-size:34px;margin:0 0 8px;color:#fff}
    .cta-band p{margin:0;color:rgba(255,255,255,.8);line-height:1.7;max-width:760px}
    .footer{padding:28px 0 36px;color:#64748b}
    .footer-inner{display:flex;align-items:center;justify-content:space-between;gap:16px;border-top:1px solid rgba(15,23,42,.08);padding-top:24px}
    .reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger-parent > *{opacity:0;transform:translateY(22px);transition:all .7s cubic-bezier(.16,1,.3,1)}
    .reveal-left{transform:translateX(-26px)}
    .reveal-right{transform:translateX(26px)}
    .reveal-scale{transform:scale(.96)}
    .visible{opacity:1;transform:none}
    .stagger-parent.visible > *{opacity:1;transform:none}
    .stagger-parent > *:nth-child(1){transition-delay:.05s}
    .stagger-parent > *:nth-child(2){transition-delay:.1s}
    .stagger-parent > *:nth-child(3){transition-delay:.15s}
    .stagger-parent > *:nth-child(4){transition-delay:.2s}
    .stagger-parent > *:nth-child(5){transition-delay:.25s}
    @keyframes pageReveal{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
    @media (max-width: 1024px){
      .hero-grid,.overview-grid,.split-panel,.testimonial-wrap,.cta-band,.tabs-shell{grid-template-columns:1fr}
      .metrics,.price-row{grid-template-columns:repeat(2,1fr)}
      .hero-grid{min-height:auto;padding:36px 0}
      .hero-visual{min-height:auto}
      .browser-frame img{height:320px}
    }
    @media (max-width: 640px){
      .container{width:min(100%,calc(100% - 20px))}
      .section{padding:56px 0}
      .nav-inner{grid-template-columns:1fr auto}
      .nav-right .ghost-btn{display:none}
      .field-grid,.mini-points,.metrics,.price-row{grid-template-columns:1fr}
      .hero-headline{font-size:34px}
      .form-card{padding:20px}
      .panel-copy h3,.overview-card h3,.pricing-card h3,.testimonial-intro h3,.cta-band h3{font-size:28px}
      .cta-band{padding:24px}
      .footer-inner{flex-direction:column;align-items:flex-start}
    }
  `;

  const faqs = [
    {
      q: 'What is Zoho Workplace?',
      a: 'Zoho Workplace is a unified suite of business applications that includes secure email, document collaboration, team chat, meetings, file storage, and office productivity tools.',
    },
    {
      q: 'Is Zoho Workplace suitable for small and growing businesses?',
      a: 'Yes. It is designed for startups, SMBs, and large enterprises that want an integrated and cost-effective communication and collaboration platform.',
    },
    {
      q: 'Can Zoho Workplace integrate with other apps?',
      a: 'Yes. It supports integrations with Zoho apps and several third-party tools to streamline workflows and improve business productivity.',
    },
    {
      q: 'How can Techjockey help with Zoho Workplace?',
      a: 'Techjockey helps you compare plans, understand features, get pricing guidance, and choose the right Zoho Workplace package for your business needs.',
    },
  ];

  return (
    <div className="page-wrapper">
      <style>{css}</style>
      <div className="lp">
        <nav className="nav">
          <div className="container nav-inner">
            <div className="brand">Techjockey</div>
            <div className="nav-right">
              <a href="#features" className="ghost-btn">Explore Features</a>
            </div>
            <a href="#lead-form" className="animated-cta btn-magnetic">Get Free Consultation</a>
          </div>
        </nav>

        <header className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow">Zoho Workplace by Techjockey</div>
              <h1 className="hero-headline">
                Simplify team communication with <span className="gradient-text">Zoho Workplace</span>
              </h1>
              <p className="hero-sub">
                Bring together business email, documents, chat, meetings, and cloud storage in one integrated suite built for modern teams.
              </p>

              <div className="hero-chips">
                {chips.map((chip, index) => (
                  <div className="chip" key={index}>
                    <span className="tick">✓</span>
                    {chip}
                  </div>
                ))}
              </div>

              <div className="hero-cta">
                <a href="#lead-form" className="animated-cta btn-magnetic">Request a Callback</a>
                <a href="#pricing" className="ghost-btn">View Plans</a>
              </div>

              <div className="hero-proof">
                <div className="proof-item">
                  <strong data-count="82.9" data-suffix="%">0%</strong>
                  <span>secure experience reported</span>
                </div>
                <div className="proof-item">
                  <strong data-count="42.9" data-suffix="%">0%</strong>
                  <span>remote work enablement</span>
                </div>
                <div className="proof-item">
                  <strong data-count="28.6" data-suffix="%">0%</strong>
                  <span>easy to use</span>
                </div>
              </div>
            </div>

            <div className="hero-visual" id="lead-form" ref={formRef}>
              <div className="form-card">
                <h3>Talk to a Product Expert</h3>
                <p>Share your details and our team will help you choose the right Zoho Workplace plan.</p>
                <form onSubmit={handleSubmit}>
                  <div className="field-grid">
                    <div className="field">
                      <label>Name</label>
                      <input name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                    </div>
                    <div className="field">
                      <label>Phone</label>
                      <input name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter phone number" />
                    </div>
                    <div className="field full">
                      <label>Email</label>
                      <input name="email" value={formData.email} onChange={handleChange} placeholder="Enter work email" />
                    </div>
                    <div className="field full">
                      <label>Company</label>
                      <input name="company" value={formData.company} onChange={handleChange} placeholder="Enter company name" />
                    </div>
                  </div>
                  <button type="submit" className="animated-cta full-btn btn-magnetic">Submit Details</button>
                </form>
              </div>
            </div>
          </div>
        </header>

        <section className="section bg-white" id="overview">
          <div className="container">
            <div className="overview-grid">
              <div className="overview-card reveal-left">
                <h3>Everything your team needs in one business suite</h3>
                <p>
                  Zoho Workplace combines secure communication, productivity apps, and collaboration tools to help teams work faster and stay connected across devices and locations.
                </p>
                <div className="mini-points stagger-parent">
                  <div className="mini-point">
                    <strong>Business Email</strong>
                    <span>Professional and secure email for your organization with admin controls.</span>
                  </div>
                  <div className="mini-point">
                    <strong>Real-Time Collaboration</strong>
                    <span>Create, edit, and share files seamlessly with your team.</span>
                  </div>
                  <div className="mini-point">
                    <strong>Built-In Communication</strong>
                    <span>Chat and meet with colleagues without switching between multiple tools.</span>
                  </div>
                  <div className="mini-point">
                    <strong>Mobile Ready</strong>
                    <span>Stay productive from anywhere using desktop and mobile apps.</span>
                  </div>
                </div>
              </div>
              <div className="overview-visual reveal-right">
                <img src="/output/generated-assets/ds_1777884843887_6f559a73/18-473c14de05.jpg" alt="Zoho Workplace overview" />
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-muted" id="features">
          <div className="container">
            <div className="section-head reveal">
              <h2>Explore Zoho Workplace capabilities</h2>
              <p>
                Discover how Zoho Workplace supports communication, collaboration, integrations, and business productivity through a unified experience.
              </p>
            </div>

            <div className="tabs-shell">
              <div className="tabs-list reveal-left">
                {sections.map((section, index) => (
                  <button
                    key={index}
                    className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                    onClick={() => setActiveTab(index)}
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
                    {sections[activeTab].description ? <p className="desc">{sections[activeTab].description}</p> : null}
                    <div className="feature-list">
                      {sections[activeTab].features.map((feature, index) => (
                        <div className="feature-item" key={index} onMouseEnter={() => setActiveFeature(index)}>
                          <div className="icon">
                            {activeFeature === index ? '★' : '✓'}
                          </div>
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

        <section className="section bg-white" id="insights">
          <div className="container">
            <div className="section-head reveal">
              <h2>Performance insights that matter</h2>
              <p>Key indicators that highlight how Zoho Workplace supports secure, flexible, and collaborative work.</p>
            </div>
            <div className="metrics stagger-parent">
              <div className="metric-card">
                <h3 data-count="82.9" data-suffix="%">0%</h3>
                <p>Users reported a secure email experience with better confidence in business communication.</p>
              </div>
              <div className="metric-card">
                <h3 data-count="42.9" data-suffix="%">0%</h3>
                <p>Users found it easier to work remotely with access across apps and devices.</p>
              </div>
              <div className="metric-card">
                <h3 data-count="28.6" data-suffix="%">0%</h3>
                <p>Teams found the suite intuitive and easy to adopt for day-to-day use.</p>
              </div>
              <div className="metric-card">
                <h3 data-count="14.3" data-suffix="%">0%</h3>
                <p>Users experienced improved collaboration and smoother workflows across teams.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-muted" id="pricing">
          <div className="container">
            <div className="pricing-wrap">
              <div className="pricing-card reveal-scale">
                <h3>Choose the right plan for your business</h3>
                <p>Compare popular Zoho Workplace options and get expert guidance from Techjockey before you buy.</p>
                <div className="price-row">
                  <div className="price-box">
                    <h4>Mail Lite</h4>
                    <div className="price">Affordable <span>for core email needs</span></div>
                    <ul>
                      <li>✓ Secure ad-free business email</li>
                      <li>✓ Custom domain hosting</li>
                      <li>✓ Essential admin controls</li>
                      <li>✓ Mobile and web access</li>
                    </ul>
                  </div>
                  <div className="price-box featured">
                    <span className="badge">Most Popular</span>
                    <h4>Workplace Standard</h4>
                    <div className="price">Best Value <span>for growing teams</span></div>
                    <ul>
                      <li>✓ Mail, chat, meetings, docs, and storage</li>
                      <li>✓ Team collaboration features</li>
                      <li>✓ Integrated office applications</li>
                      <li>✓ Ideal for distributed teams</li>
                    </ul>
                  </div>
                  <div className="price-box">
                    <h4>Workplace Professional</h4>
                    <div className="price">Advanced <span>for mature operations</span></div>
                    <ul>
                      <li>✓ Expanded admin and security controls</li>
                      <li>✓ Enhanced storage and capabilities</li>
                      <li>✓ More advanced collaboration support</li>
                      <li>✓ Better suited for scaling businesses</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-white" id="testimonials">
          <div className="container">
            <div className="testimonial-wrap">
              <div className="testimonial-intro reveal-left">
                <h3>What businesses say about Zoho Workplace</h3>
                <p>
                  Teams across functions rely on Zoho Workplace to bring communication, collaboration, and productivity into one connected environment.
                </p>
                <div className="dots-wrap">
                  {testimonials.map((_, index) => (
                    <span
                      key={index}
                      className={`t-dot ${activeSlide === index ? 'active' : ''}`}
                      onClick={() => setActiveSlide(index)}
                    ></span>
                  ))}
                </div>
              </div>

              <div className="testimonial-card reveal-right">
                <div>
                  <div className="quote-mark">“</div>
                  <p>{testimonials[activeSlide].quote}</p>
                </div>
                <div className="testimonial-user">
                  <img src={testimonials[activeSlide].avatar} alt={testimonials[activeSlide].name} />
                  <div>
                    <strong>{testimonials[activeSlide].name}</strong>
                    <span>{testimonials[activeSlide].role}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-muted" id="faq">
          <div className="container">
            <div className="section-head reveal">
              <h2>Frequently asked questions</h2>
              <p>Get quick answers before choosing Zoho Workplace for your organization.</p>
            </div>
            <div className="faq-grid stagger-parent">
              {faqs.map((item, index) => (
                <div className="faq-item" key={index}>
                  <h4>{item.q}</h4>
                  <p>{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section">
          <div className="container">
            <div className="cta-band reveal-scale">
              <div>
                <h3>Ready to get started with Zoho Workplace?</h3>
                <p>
                  Connect with Techjockey experts to compare plans, understand pricing, and deploy the right workplace suite for your team.
                </p>
              </div>
              <a href="#lead-form" className="animated-cta btn-magnetic">Talk to an Expert</a>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container footer-inner">
            <div>© 2026 Techjockey. All rights reserved.</div>
            <div>Zoho Workplace guidance, consultation, and purchase support.</div>
          </div>
        </footer>
      </div>
    </div>
  );
};

export default LandingPage;