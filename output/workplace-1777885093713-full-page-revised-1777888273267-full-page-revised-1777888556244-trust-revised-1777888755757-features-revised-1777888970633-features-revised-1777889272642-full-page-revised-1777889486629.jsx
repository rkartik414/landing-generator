import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#0f172a';
  const primary = '#d84e1f';
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
          title: 'Business Email for Every Team',
          description:
            'Get secure, ad-free business email with domain-based hosting, admin controls, and a professional communication setup for your organization.',
        },
        {
          title: 'Integrated Collaboration Apps',
          description:
            'Work with Mail, Cliq, Meeting, Writer, Sheet, Show, and WorkDrive together in one connected suite built for faster teamwork.',
        },
        {
          title: 'Real-Time File & Document Sharing',
          description:
            'Create, edit, comment, share, and collaborate on files instantly so teams can stay aligned without relying on multiple disconnected tools.',
        },
        {
          title: 'Anywhere Access Across Devices',
          description:
            'Keep your teams productive with web and mobile access to email, chats, meetings, files, and office apps from anywhere.',
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
    'Business email suite',
    'Docs, chat & meetings',
    'Secure team collaboration',
    'Work from anywhere',
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
      --primary-dark:#b93f18;
      --primary-soft:#fff2ed;
      --bodyBg:${bodyBg};
      --text-muted:#5f6368;
      --line:#f1e3da;
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
    .lp{background:linear-gradient(180deg,#fffaf6 0%,#ffffff 38%,#fff8f3 100%)}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.88);backdrop-filter:blur(18px);border-bottom:1px solid rgba(15,23,42,.06)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:14px;align-items:center;padding:14px 0}
    .brand{font:800 20px 'Plus Jakarta Sans',sans-serif;color:var(--accent);letter-spacing:-.02em}
    .nav-right{display:flex;align-items:center;gap:12px}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:12px;background:var(--primary);color:#fff;font-weight:700;border:none;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(216,78,31,.24);background:var(--primary-dark)}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:12px;border:1px solid rgba(15,23,42,.12);color:var(--accent);font-weight:600;background:#fff;transition:.25s ease}
    .ghost-btn:hover{border-color:rgba(216,78,31,.24);color:var(--primary-dark)}
    .hero{position:relative;background:
      radial-gradient(circle at 15% 20%, rgba(216,78,31,.10), transparent 28%),
      radial-gradient(circle at 85% 15%, rgba(216,78,31,.12), transparent 24%),
      linear-gradient(135deg,#fff6f1 0%,#fffaf7 42%,#ffffff 100%);
      overflow:hidden;border-bottom:1px solid rgba(15,23,42,.05)}
    .hero:before,.hero:after{content:'';position:absolute;border-radius:50%;pointer-events:none}
    .hero:before{width:420px;height:420px;right:-110px;top:-100px;background:radial-gradient(circle,rgba(216,78,31,.14),transparent 68%)}
    .hero:after{width:320px;height:320px;left:-90px;bottom:-100px;background:radial-gradient(circle,rgba(15,23,42,.05),transparent 70%)}
    .hero-grid{display:grid;grid-template-columns:minmax(0,1.08fr) minmax(380px,.92fr);gap:34px;align-items:center;min-height:calc(100vh - 72px);padding:44px 0 34px;position:relative}
    .hero-grid:before{content:'';position:absolute;inset:0;background-image:linear-gradient(rgba(216,78,31,.045) 1px,transparent 1px),linear-gradient(90deg,rgba(216,78,31,.045) 1px,transparent 1px);background-size:34px 34px;opacity:.5;pointer-events:none}
    .hero-copy,.hero-visual{position:relative;z-index:1}
    .eyebrow{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;background:#fff;border:1px solid rgba(216,78,31,.18);color:var(--primary-dark);font-size:12px;font-weight:800;margin-bottom:16px;box-shadow:0 6px 18px rgba(216,78,31,.08)}
    h1,h2,h3{font-family:'Plus Jakarta Sans',sans-serif;margin:0 0 12px;letter-spacing:-.03em}
    .hero-headline{font-size:clamp(40px,5.2vw,62px);line-height:1.02;color:var(--accent);max-width:720px}
    .hero-sub{font-size:17px;line-height:1.72;color:var(--text-muted);max-width:620px}
    .gradient-text{background:linear-gradient(135deg,var(--primary-dark) 0%,var(--primary) 55%,#ee6d41 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:22px;max-width:680px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;background:#fff;border:1px solid rgba(216,78,31,.14);color:var(--accent);font-size:13px;font-weight:600;box-shadow:0 8px 22px rgba(216,78,31,.06)}
    .chip .tick{width:18px;height:18px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:rgba(216,78,31,.12);color:var(--primary-dark);font-size:12px}
    .hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px}
    .hero-proof{display:flex;flex-wrap:wrap;gap:18px;margin-top:26px}
    .proof-item{display:flex;flex-direction:column;gap:2px}
    .proof-item strong{font:800 24px 'Plus Jakarta Sans',sans-serif;color:var(--accent)}
    .proof-item span{font-size:13px;color:var(--text-muted)}
    .hero-visual{display:flex;align-items:center;justify-content:center;min-height:520px}
    .form-card{width:100%;max-width:430px;background:rgba(255,255,255,.96);border-radius:24px;padding:24px;box-shadow:0 24px 60px rgba(15,23,42,.10);border:1px solid rgba(216,78,31,.12);position:relative}
    .form-card:before{content:'';position:absolute;inset:0 0 auto 0;height:5px;background:linear-gradient(90deg,var(--primary-dark),#ee6d41);border-radius:24px 24px 0 0}
    .form-card h3{font-size:26px;color:var(--accent);margin-top:4px}
    .form-card p{margin:0 0 14px;color:var(--text-muted);line-height:1.6}
    .field-grid{display:grid;grid-template-columns:1fr 1fr;gap:12px}
    .field{display:flex;flex-direction:column;gap:7px;margin-bottom:12px}
    .field.full{grid-column:1/-1}
    label{font-size:13px;font-weight:700;color:var(--accent)}
    input{height:48px;padding:0 14px;border:1px solid #eadfd7;border-radius:12px;font:500 14px 'Inter',sans-serif;outline:none;background:#fff}
    input:focus{border-color:var(--primary);box-shadow:0 0 0 3px rgba(216,78,31,.12)}
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
    .mini-point{padding:14px 16px;border-radius:18px;background:#fff8f3;border:1px solid #f4e5dd}
    .mini-point strong{display:block;font-size:15px;margin-bottom:4px}
    .mini-point span{font-size:13px;line-height:1.55;color:var(--text-muted)}
    .overview-visual{background:#fff;border:1px solid var(--line);border-radius:28px;padding:14px;box-shadow:var(--shadow-soft)}
    .overview-visual img{width:100%;height:100%;min-height:360px;object-fit:cover;border-radius:20px}
    .tabs-shell{display:grid;grid-template-columns:280px 1fr;gap:16px;align-items:start}
    .tabs-list{display:flex;flex-direction:column;gap:10px}
    .tab-btn{padding:16px 16px;border-radius:18px;border:1px solid var(--line);background:#fff;text-align:left;cursor:pointer;transition:.25s;box-shadow:0 6px 16px rgba(15,23,42,.03)}
    .tab-btn:hover{border-color:rgba(216,78,31,.2);transform:translateY(-2px)}
    .tab-btn.active{background:linear-gradient(135deg,var(--primary-dark),var(--primary));color:#fff;border-color:transparent;box-shadow:0 18px 36px rgba(216,78,31,.18)}
    .tab-btn small{display:block;font-size:11px;opacity:.8;margin-bottom:5px;font-weight:800;letter-spacing:.12em}
    .tab-btn strong{display:block;font:700 17px 'Plus Jakarta Sans',sans-serif;line-height:1.35}
    .preview-panel{background:#fff;border:1px solid var(--line);border-radius:24px;padding:16px;box-shadow:var(--shadow-soft)}
    .split-panel{display:grid;grid-template-columns:1.14fr .86fr;gap:14px;align-items:stretch}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;background:#fffaf7;border-radius:20px;border:1px solid var(--line);box-shadow:0 12px 26px rgba(216,78,31,.08)}
    .browser-top{display:flex;align-items:center;gap:8px;padding:9px 12px;background:#fff;border-bottom:1px solid #f1e5db}
    .dot{width:10px;height:10px;border-radius:50%;background:#e2cbbd}
    .browser-frame img{flex:1;min-height:0;height:290px;width:100%;object-fit:cover;object-position:center;display:block}
    .panel-copy{display:flex;flex-direction:column;justify-content:center;padding:4px 0}
    .panel-copy .tag{display:inline-block;padding:7px 11px;border-radius:999px;background:rgba(216,78,31,.1);color:var(--primary-dark);font-size:12px;font-weight:800;letter-spacing:.08em;margin-bottom:10px}
    .panel-copy h3{font-size:30px;line-height:1.12;margin-bottom:8px}
    .panel-copy .desc{border-left:3px solid rgba(216,78,31,.32);padding-left:14px;color:var(--text-muted);line-height:1.68;margin:8px 0 12px}
    .feature-list{display:grid;gap:8px}
    .feature-item{display:flex;gap:12px;padding:11px 12px;border-radius:16px;background:#fff8f4;border:1px solid #f3e1d7}
    .icon{width:40px;height:40px;min-width:40px;border-radius:12px;background:rgba(216,78,31,.12);display:flex;align-items:center;justify-content:center;color:var(--primary)}
    .feature-item strong{display:block;font-size:15px;margin-bottom:4px}
    .feature-item p{margin:0;color:var(--text-muted);line-height:1.55;font-size:14px}
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
    .price-box.featured{border-color:rgba(216,78,31,.28);box-shadow:0 18px 40px rgba(216,78,31,.12)}
    .badge{position:absolute;top:14px;right:14px;padding:6px 10px;border-radius:999px;background:rgba(216,78,31,.1);color:var(--primary-dark);font-size:11px;font-weight:800}
    .price-box h4{font-size:20px;margin:0 0 6px}
    .price{font:800 34px 'Plus Jakarta Sans',sans-serif;color:var(--accent);margin:6px 0 10px}
    .price span{font-size:14px;font-weight:600;color:var(--text-muted)}
    .price-box ul{padding:0;margin:14px 0 0;list-style:none;display:grid;gap:10px}
    .price-box li{font-size:14px;color:var(--text-muted);display:flex;gap:8px;align-items:flex-start}
    .testimonial-wrap{display:grid;grid-template-columns:.9fr 1.1fr;gap:22px;align-items:stretch}
    .testimonial-intro,.testimonial-card{background:#fff;border:1px solid var(--line);border-radius:28px;box-shadow:var(--shadow-soft)}
    .testimonial-intro{padding:28px}
    .testimonial-intro h3{font-size:30px;line-height:1.15}
    .testimonial-intro p{margin:0;color:var(--text-muted);line-height:1.7}
    .testimonial-card{padding:28px;display:flex;flex-direction:column;justify-content:space-between;min-height:320px}
    .quote-mark{font-size:54px;line-height:1;color:var(--primary);opacity:.22;margin-bottom:8px}
    .testimonial-quote{font-size:20px;line-height:1.7;color:var(--accent);margin:0 0 20px}
    .testimonial-user{display:flex;align-items:center;gap:14px}
    .testimonial-user img{width:56px;height:56px;border-radius:50%;object-fit:cover}
    .testimonial-user strong{display:block;font-size:16px}
    .testimonial-user span{display:block;font-size:13px;color:var(--text-muted)}
    .slider-dots{display:flex;gap:8px;margin-top:20px}
    .slider-dot{width:10px;height:10px;border-radius:50%;background:#ecd5ca;cursor:pointer;transition:.25s}
    .slider-dot.active{width:28px;border-radius:999px;background:var(--primary)}
    .faq-grid{display:grid;gap:12px;max-width:860px;margin:0 auto}
    .faq-item{background:#fff;border:1px solid var(--line);border-radius:20px;padding:18px 20px;box-shadow:var(--shadow-soft)}
    .faq-item strong{display:block;font-size:17px;margin-bottom:8px}
    .faq-item p{margin:0;color:var(--text-muted);line-height:1.65}
    .footer{padding:28px 0 34px;background:#fff;border-top:1px solid rgba(15,23,42,.06)}
    .footer-inner{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap}
    .footer small{color:var(--text-muted)}
    .reveal,.reveal-left,.reveal-right,.reveal-scale,.stagger-parent > *{opacity:0;transform:translateY(22px);transition:opacity .7s ease,transform .7s ease}
    .reveal-left{transform:translateX(-24px)}
    .reveal-right{transform:translateX(24px)}
    .reveal-scale{transform:scale(.96)}
    .visible{opacity:1 !important;transform:none !important}
    .stagger-parent.visible > *{opacity:1;transform:none}
    .stagger-parent > *:nth-child(1){transition-delay:.04s}
    .stagger-parent > *:nth-child(2){transition-delay:.1s}
    .stagger-parent > *:nth-child(3){transition-delay:.16s}
    .stagger-parent > *:nth-child(4){transition-delay:.22s}
    .stagger-parent > *:nth-child(5){transition-delay:.28s}
    @keyframes pageReveal{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:none}}
    @media (max-width:1024px){
      .hero-grid,.overview-grid,.tabs-shell,.split-panel,.testimonial-wrap{grid-template-columns:1fr}
      .metrics,.price-row{grid-template-columns:repeat(2,1fr)}
      .hero-grid{min-height:auto;padding:40px 0 32px}
      .hero-visual{min-height:auto}
    }
    @media (max-width:767px){
      .container{width:min(100% - 20px,1180px)}
      .nav-inner{grid-template-columns:1fr auto}
      .nav-right .ghost-btn{display:none}
      .hero-headline{font-size:36px}
      .section{padding:56px 0}
      .section-head{margin-bottom:28px}
      .field-grid,.mini-points,.metrics,.price-row{grid-template-columns:1fr}
      .form-card,.overview-card,.testimonial-intro,.testimonial-card,.pricing-card{padding:20px}
      .browser-frame img{height:220px}
      .panel-copy h3,.overview-card h3,.testimonial-intro h3,.pricing-card h3{font-size:26px}
      .testimonial-quote{font-size:18px}
    }
  `;

  const faqs = [
    {
      q: 'What is Zoho Workplace?',
      a: 'Zoho Workplace is a unified suite of business productivity and collaboration applications that includes email, chat, online meetings, file storage, and office productivity tools.',
    },
    {
      q: 'Who can use Zoho Workplace?',
      a: 'Zoho Workplace is suitable for startups, SMBs, and enterprises looking for a secure and integrated platform for communication, collaboration, and productivity.',
    },
    {
      q: 'Does Zoho Workplace include business email?',
      a: 'Yes, Zoho Workplace includes professional business email with domain-based hosting, admin controls, and a secure, ad-free mailbox experience.',
    },
    {
      q: 'Can Zoho Workplace integrate with other apps?',
      a: 'Yes, Zoho Workplace integrates with several Zoho and third-party applications to help businesses streamline workflows and improve productivity.',
    },
  ];

  return (
    <>
      <style>{css}</style>
      <div className="page-wrapper lp">
        <header className="nav">
          <div className="container nav-inner">
            <a href="#" className="brand">Techjockey</a>
            <div className="nav-right">
              <a href="#features" className="ghost-btn">Explore Features</a>
              <a href="#enquire" className="animated-cta btn-magnetic">Get Free Demo</a>
            </div>
          </div>
        </header>

        <main>
          <section className="hero">
            <div className="container hero-grid">
              <div className="hero-copy">
                <div className="eyebrow">ZOHO WORKPLACE</div>
                <h1 className="hero-headline">
                  Business Email and Collaboration Suite for <span className="gradient-text">Modern Teams</span>
                </h1>
                <p className="hero-sub">
                  Zoho Workplace brings business email, team chat, online meetings, file management, and office productivity apps together in one unified platform to help teams collaborate better and work smarter.
                </p>

                <div className="hero-chips">
                  {chips.map((chip, i) => (
                    <div className="chip" key={i}>
                      <span className="tick">✓</span>
                      {chip}
                    </div>
                  ))}
                </div>

                <div className="hero-cta">
                  <a href="#enquire" className="animated-cta btn-magnetic">Request Callback</a>
                  <a href="#pricing" className="ghost-btn">View Plans</a>
                </div>

                <div className="hero-proof">
                  <div className="proof-item">
                    <strong data-count="8" data-suffix="+">8+</strong>
                    <span>Integrated apps</span>
                  </div>
                  <div className="proof-item">
                    <strong data-count="82.9" data-suffix="%">82.9%</strong>
                    <span>Users reported secure email</span>
                  </div>
                  <div className="proof-item">
                    <strong data-count="42.9" data-suffix="%">42.9%</strong>
                    <span>Faster remote work access</span>
                  </div>
                </div>
              </div>

              <div className="hero-visual" id="enquire" ref={formRef}>
                <div className="form-card">
                  <h3>Get the Right Zoho Workplace Plan</h3>
                  <p>Share your details and our product experts will help you choose the most suitable plan for your business.</p>
                  <form onSubmit={handleSubmit}>
                    <div className="field-grid">
                      <div className="field">
                        <label htmlFor="name">Name</label>
                        <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                      </div>
                      <div className="field">
                        <label htmlFor="email">Email</label>
                        <input id="email" name="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                      </div>
                      <div className="field">
                        <label htmlFor="phone">Phone</label>
                        <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" />
                      </div>
                      <div className="field">
                        <label htmlFor="company">Company</label>
                        <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Enter company name" />
                      </div>
                    </div>
                    <button type="submit" className="animated-cta full-btn btn-magnetic">Talk to an Expert</button>
                  </form>
                </div>
              </div>
            </div>
          </section>

          <section className="section bg-white">
            <div className="container">
              <div className="overview-grid">
                <div className="overview-card reveal-left visible">
                  <h3>Unlock Your Business Growth with Zoho Workplace</h3>
                  <p>
                    Zoho Workplace unifies email, collaboration, and productivity tools to streamline your business operations. Enable smarter teamwork and drive growth with a single platform.
                  </p>
                  <div className="mini-points">
                    <div className="mini-point">
                      <strong>Ideal For Your Business Size</strong>
                      <span>Designed for any organization, Zoho Workplace enhances efficiency and teamwork at every scale.</span>
                    </div>
                    <div className="mini-point">
                      <strong>Communicate Effectively</strong>
                      <span>Go beyond email and chat, and connect teams with a social intranet using channels, feeds, and groups.</span>
                    </div>
                    <div className="mini-point">
                      <strong>Integrated Business Apps</strong>
                      <span>Connect with Zoho and third-party apps to unify workflows, eliminate silos, and streamline processes across your business.</span>
                    </div>
                    <div className="mini-point">
                      <strong>Customizable Workspace</strong>
                      <span>Customize settings, layouts, workflows to fit your needs. Also, get a professional, ad-free email service & advanced controls.</span>
                    </div>
                  </div>
                </div>
                <div className="overview-visual reveal-right visible">
                  <img src="/output/generated-assets/ds_1777884843887_6f559a73/17-8ee9780f0b.jpg" alt="Zoho Workplace collaboration dashboard" />
                </div>
              </div>
            </div>
          </section>

          <section className="section bg-muted" id="features">
            <div className="container">
              <div className="section-head reveal visible">
                <h2>Why Choose Zoho Workplace?</h2>
                <p>
                  Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.
                </p>
              </div>

              <div className="tabs-shell">
                <div className="tabs-list stagger-parent visible">
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

                <div className="preview-panel reveal-scale visible">
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
                        {sections[activeTab].features.map((feature, idx) => (
                          <div
                            key={idx}
                            className="feature-item"
                            onMouseEnter={() => setActiveFeature(idx)}
                            style={{
                              borderColor: activeFeature === idx ? 'rgba(216,78,31,.28)' : '',
                              boxShadow: activeFeature === idx ? '0 10px 24px rgba(216,78,31,.08)' : '',
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
              <div className="section-head reveal visible">
                <h2>Performance Beyond Limits with Zoho Workplace</h2>
                <p>Key user-reported benefits that highlight the value of adopting Zoho Workplace for business communication and collaboration.</p>
              </div>
              <div className="metrics stagger-parent visible">
                <div className="metric-card">
                  <h3 data-count="82.9" data-suffix="%">82.9%</h3>
                  <p>of users reported a secure email experience, ensuring strong data protection, and safe and reliable communication.</p>
                </div>
                <div className="metric-card">
                  <h3 data-count="42.9" data-suffix="%">42.9%</h3>
                  <p>found it easier to work remotely with Zoho Workplace apps, enabling seamless access from any device, anywhere.</p>
                </div>
                <div className="metric-card">
                  <h3 data-count="28.6" data-suffix="%">28.6%</h3>
                  <p>found Zoho Workplace easy to use, reducing the learning curve so teams can adapt and work efficiently.</p>
                </div>
                <div className="metric-card">
                  <h3 data-count="14.3" data-suffix="%">14.3%</h3>
                  <p>saw improved collaboration, engagement and productivity, helping teams stay aligned and get more done faster.</p>
                </div>
              </div>
            </div>
          </section>

          <section className="section bg-muted" id="pricing">
            <div className="container pricing-wrap">
              <div className="pricing-card reveal visible">
                <h3>Choose a Plan That Fits Your Business</h3>
                <p>
                  Get a Zoho Workplace plan that matches your team size, collaboration needs, and business communication requirements.
                </p>
                <div className="price-row">
                  <div className="price-box">
                    <h4>Mail Lite</h4>
                    <div className="price">Basic <span>for essential email needs</span></div>
                    <ul>
                      <li>✓ Business email hosting</li>
                      <li>✓ Custom domain support</li>
                      <li>✓ Ad-free mailbox</li>
                      <li>✓ Admin controls</li>
                    </ul>
                  </div>
                  <div className="price-box featured">
                    <span className="badge">Popular</span>
                    <h4>Workplace Standard</h4>
                    <div className="price">Best Value <span>for growing teams</span></div>
                    <ul>
                      <li>✓ Mail, Cliq, Meeting, WorkDrive</li>
                      <li>✓ Writer, Sheet, Show</li>
                      <li>✓ Team collaboration tools</li>
                      <li>✓ File storage & sharing</li>
                    </ul>
                  </div>
                  <div className="price-box">
                    <h4>Workplace Professional</h4>
                    <div className="price">Advanced <span>for scaling businesses</span></div>
                    <ul>
                      <li>✓ Enhanced collaboration features</li>
                      <li>✓ More storage and controls</li>
                      <li>✓ Better management capabilities</li>
                      <li>✓ Unified business productivity suite</li>
                    </ul>
                  </div>
                </div>
                <div className="hero-cta" style={{ justifyContent: 'center', marginTop: 24 }}>
                  <a href="#enquire" className="animated-cta btn-magnetic">Get Pricing Details</a>
                </div>
              </div>
            </div>
          </section>

          <section className="section bg-white">
            <div className="container">
              <div className="testimonial-wrap">
                <div className="testimonial-intro reveal-left visible">
                  <h3>What Businesses Say About Zoho Workplace</h3>
                  <p>
                    Hear how teams are using Zoho Workplace to simplify communication, improve collaboration, and run daily operations more efficiently.
                  </p>
                  <div className="slider-dots">
                    {testimonials.map((_, idx) => (
                      <span
                        key={idx}
                        className={`slider-dot ${activeSlide === idx ? 'active' : ''}`}
                        onClick={() => setActiveSlide(idx)}
                      />
                    ))}
                  </div>
                </div>

                <div className="testimonial-card reveal-right visible">
                  <div>
                    <div className="quote-mark">“</div>
                    <p className="testimonial-quote">{testimonials[activeSlide].quote}</p>
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

          <section className="section bg-muted">
            <div className="container">
              <div className="section-head reveal visible">
                <h2>Frequently Asked Questions</h2>
                <p>Everything you may want to know before choosing Zoho Workplace for your organization.</p>
              </div>
              <div className="faq-grid stagger-parent visible">
                {faqs.map((item, idx) => (
                  <div className="faq-item" key={idx}>
                    <strong>{item.q}</strong>
                    <p>{item.a}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <footer className="footer">
          <div className="container footer-inner">
            <a href="#" className="brand">Techjockey</a>
            <small>© 2024 Techjockey. All rights reserved.</small>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;