import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#e4292b';
  const primary = '#ffffff';
  const bodyBg = '#ffffff';

  const [activeSlide, setActiveSlide] = useState(0);
  const testimonialTimer = useRef(null);

  const ctas = [
    {
      text: 'Get quotation',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software'
    },
    {
      text: 'Get quotation',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software'
    },
    {
      text: 'Get quotation',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software'
    },
    {
      text: 'Get quotation',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software'
    }
  ];

  const productSections = [
    {
      label: 'FEATURES',
      headline: 'Why Choose Zoho Workplace?',
      description:
        'Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.',
      image: '/output/generated-assets/ds_1777966905792_cc514d4e/18-473c14de05.jpg',
      dark: false,
      features: [
        {
          title: 'All-in-One Unified Workspace',
          description:
            'Access email, chat, documents, meetings, and storage in a single integrated platform. Reduce app switching and boost productivity.'
        },
        {
          title: 'Seamless Collaboration in Real Time',
          description:
            'Work together on documents, spreadsheets, and presentations with live editing, comments, and built-in communication tools.'
        },
        {
          title: 'Work from Anywhere, Anytime',
          description:
            'Stay productive on the go. Reply to emails, access presentations, or host a video conference from anywhere effortlessly.'
        },
        {
          title: 'AI-Powered Productivity (Zia)',
          description:
            'Leverage built-in AI for writing assistance in terms of grammar, readability and writing style while you work on Writer or Sheet.'
        }
      ]
    },
    {
      label: 'STANDARD FEATURES',
      headline: 'Unlock Your Business Growth with Zoho Workplace',
      description:
        'Zoho Workplace unifies email, collaboration, and productivity tools to streamline your business operations. Enable smarter teamwork and drive growth with a single platform.',
      image: '/output/generated-assets/ds_1777966905792_cc514d4e/17-8ee9780f0b.jpg',
      dark: false,
      features: [
        {
          title: 'Ideal For Your Business Size',
          description:
            'Designed for any organization, Zoho Workplace enhances efficiency and teamwork at every scale.'
        },
        {
          title: 'Communicate Effectively',
          description:
            'Go beyond email and chat, and connect teams with a social intranet using channels, feeds, and groups.'
        },
        {
          title: 'Integrated Business Apps',
          description:
            'Connect with Zoho and third-party apps to unify workflows, eliminate silos, and streamline processes across your business.'
        },
        {
          title: 'Customizable Workspace',
          description:
            'Customize settings, layouts, workflows to fit your needs. Also, get a professional, ad-free email service & advanced controls.'
        }
      ]
    },
    {
      label: 'ADDITIONAL FEATURES',
      headline: 'Integrate with Popular Apps',
      description:
        'Connect your Zoho Workplace with other business apps to ensure higher productivity and growth - all within a unified workspace.',
      image: '/output/generated-assets/ds_1777966905792_cc514d4e/30-89ce3cb959.jpeg',
      dark: false,
      features: [
        { title: 'Zoho Apps', description: 'Zoho Meeting, Zoho Connect, Zoho Mail, Zoho Cliq, Zoho Writer, etc.' },
        { title: 'Analytics', description: 'Zoho Analytics, Google Analytics' },
        { title: 'Accounting & Finance', description: 'Zoho Invoice & Zoho Books' },
        { title: 'Automation', description: 'Zoho Flow, Zapier, viaSocket' },
        { title: 'Business Suites', description: 'Zoho One, Zoho Workspace' }
      ]
    },
    {
      label: 'INSIGHT',
      headline: 'Performance Beyond Limits with Zoho Workplace',
      description: '',
      image: '/output/generated-assets/ds_1777966905792_cc514d4e/29-3965757185.jpeg',
      dark: true,
      features: [
        {
          title: 'Secure',
          description:
            '82.9% of users reported a secure email experience, ensuring strong data protection, and safe and reliable communication.'
        },
        {
          title: 'Anywhere Access',
          description:
            '42.9% of them found it easier to work remotely with Zoho Workplace apps, enabling seamless access from any device, anywhere.'
        },
        {
          title: 'Intuitive',
          description:
            '28.6% found Zoho Workplace easy to use, reducing the learning curve. Teams can quickly adapt and work efficiently.'
        },
        {
          title: 'Collaborative',
          description:
            '14.3% of them saw improved collaboration, engagement and productivity, helping teams stay aligned and get more done faster.'
        }
      ]
    }
  ];

  const testimonials = [
    {
      quote:
        'Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.',
      name: 'Amit Kapoor',
      role: 'IT Manager',
      avatar: '/output/generated-assets/ds_1777966905792_cc514d4e/15-01fc6c95c0.jpg'
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      name: 'Saurav Singh',
      role: 'Head of Operations',
      avatar: '/output/generated-assets/ds_1777966905792_cc514d4e/13-a1af876bc5.png'
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      name: 'Shrimi Manchanda',
      role: 'Operations Manager',
      avatar: '/output/generated-assets/ds_1777966905792_cc514d4e/32-e3c4bcd1a9.png'
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      name: 'Shweta Thakur',
      role: 'Senior System Administrator',
      avatar: '/output/generated-assets/ds_1777966905792_cc514d4e/15-01fc6c95c0.jpg'
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      name: 'Narinder Sahni',
      role: 'IT Head',
      avatar: '/output/generated-assets/ds_1777966905792_cc514d4e/13-a1af876bc5.png'
    }
  ];

  const trustLogos = [
    '/output/generated-assets/ds_1777966905792_cc514d4e/11-4e22c31148.png',
    '/output/generated-assets/ds_1777966905792_cc514d4e/24-75f766eeed.png',
    '/output/generated-assets/ds_1777966905792_cc514d4e/23-61e528786b.png',
    '/output/generated-assets/ds_1777966905792_cc514d4e/25-d22596911f.png'
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
    testimonialTimer.current = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(testimonialTimer.current);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:${bodyBg};color:#111827;font-family:Inter,sans-serif}
    a{text-decoration:none;color:inherit}
    img{max-width:100%;display:block}
    .page-wrapper{animation:pageReveal .6s cubic-bezier(.16,1,.3,1) both;overflow:hidden;background:#fff}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:64px 0;position:relative}
    .section-dark{background:#111827;color:#fff}
    .section-light{background:#fff}
    .section-soft{background:#f8f8f8}
    .tag{display:inline-block;padding:8px 14px;border-radius:999px;background:rgba(228,41,43,.08);border:1px solid rgba(228,41,43,.18);color:var(--accent);font-size:12px;font-weight:700;letter-spacing:.08em}
    h1,h2,h3,h4{font-family:"Plus Jakarta Sans",sans-serif;line-height:1.1;margin:0}
    h1{font-size:clamp(44px,6vw,66px);font-weight:800;letter-spacing:-.03em}
    h2{font-size:clamp(32px,4.2vw,46px);font-weight:800;letter-spacing:-.02em}
    p{margin:0;color:#4b5563;line-height:1.7;font-size:16px}
    .gradient-text{background:linear-gradient(135deg,#fff 0%, #ffd7d7 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .nav{position:sticky;top:0;z-index:50;background:rgba(17,24,39,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:18px;padding:14px 0}
    .brand-left span{font-weight:800;font-size:20px;color:var(--accent);font-family:"Plus Jakarta Sans",sans-serif}
    .tj-logo{height:28px;opacity:.95}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:12px;background:var(--accent);color:#fff;font-weight:700;border:1px solid rgba(255,255,255,.12);transition:transform .25s ease, box-shadow .25s ease, background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(228,41,43,.28);background:#c81f21}
    .hero{background:linear-gradient(135deg,#ff5a1f 0%, #e4292b 100%);color:#fff;padding:84px 0 64px;position:relative;overflow:hidden}
    .hero:before,.hero:after{content:"";position:absolute;border-radius:50%;pointer-events:none}
    .hero:before{width:420px;height:420px;right:-120px;top:-100px;background:radial-gradient(circle,rgba(255,255,255,.16) 0%,transparent 70%)}
    .hero:after{width:320px;height:320px;left:-80px;bottom:-120px;background:radial-gradient(circle,rgba(255,255,255,.12) 0%,transparent 70%)}
    .hero-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:34px;align-items:center}
    .hero-sub{max-width:640px;margin-top:18px;color:rgba(255,255,255,.88);font-size:18px}
    .hero-chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.2);color:#fff;font-size:13px}
    .hero-cta{display:flex;gap:14px;margin-top:28px;flex-wrap:wrap}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center}
    .hero-panel{position:relative;width:100%;min-height:500px;border-radius:26px;background:linear-gradient(180deg,rgba(255,255,255,.16),rgba(255,255,255,.08));border:1px solid rgba(255,255,255,.2);box-shadow:0 30px 80px rgba(0,0,0,.18);padding:18px;overflow:hidden}
    .hero-illustration{width:100%;height:100%;object-fit:cover;border-radius:18px;position:relative;z-index:2}
    .float-card{position:absolute;background:#fff;color:#111827;border-radius:16px;padding:14px 16px;box-shadow:0 18px 40px rgba(0,0,0,.18);z-index:3}
    .float-card small{display:block;color:#6b7280;font-size:12px;margin-bottom:6px}
    .float-card strong{font-family:"Plus Jakarta Sans",sans-serif;font-size:15px;display:block}
    .fc1{top:24px;left:18px}
    .fc2{right:18px;top:78px}
    .fc3{left:28px;bottom:24px}
    .dashboard-lines{position:absolute;inset:0;background-image:linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);background-size:28px 28px;opacity:.3}
    .trust{padding:40px 0 20px;background:#fff}
    .trust-grid{display:grid;grid-template-columns:320px 1fr;gap:26px;align-items:start}
    .trust-copy h3{font-size:28px;margin-bottom:8px}
    .trust-copy p{color:#374151}
    .logo-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
    .logo-card{height:88px;border-radius:18px;background:#fff;border:1px solid #ececec;display:flex;align-items:center;justify-content:center;padding:16px;filter:grayscale(1);transition:filter .3s ease, transform .3s ease, box-shadow .3s ease}
    .logo-card:hover{filter:grayscale(0);transform:translateY(-4px);box-shadow:0 18px 36px rgba(0,0,0,.08)}
    .logo-card img{max-height:40px;object-fit:contain}
    .metrics{display:flex;gap:16px;align-items:center;margin-top:16px;flex-wrap:wrap}
    .metric-box{background:#fff;border:1px solid #ececec;border-radius:16px;padding:14px 16px;min-width:170px;box-shadow:0 8px 24px rgba(17,24,39,.04)}
    .metric-box strong{display:block;font-size:28px;font-family:"Plus Jakarta Sans",sans-serif}
    .split-section{padding:58px 0}
    .split-wrap{display:grid;grid-template-columns:1fr 1fr;gap:28px;align-items:stretch}
    .split-wrap.reverse .media-col{order:2}
    .split-wrap.reverse .text-col{order:1}
    .text-panel{height:100%;padding:8px 0;display:flex;flex-direction:column;justify-content:center}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:24px;border:1px solid #ececec;box-shadow:0 24px 60px rgba(17,24,39,.08);background:#f8f8f8;height:100%}
    .browser-dark{background:#0a0a0a;border-color:rgba(255,255,255,.08)}
    .browser-top{display:flex;align-items:center;gap:8px;padding:12px 14px;border-bottom:1px solid rgba(0,0,0,.06);background:rgba(255,255,255,.7)}
    .browser-dark .browser-top{background:rgba(255,255,255,.06);border-bottom-color:rgba(255,255,255,.08)}
    .dot{width:10px;height:10px;border-radius:50%;background:#d1d5db}
    .browser-dark .dot{background:rgba(255,255,255,.22)}
    .browser-frame img{height:100%;min-height:420px;width:100%;object-fit:cover}
    .desc-bar{border-left:3px solid rgba(228,41,43,.24);padding-left:18px;margin:16px 0 22px}
    .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .feature-card{padding:18px;border-radius:18px;background:#fff;border:1px solid #ececec;box-shadow:0 12px 30px rgba(17,24,39,.05)}
    .feature-card h4{font-size:18px;margin:12px 0 8px}
    .feature-card p{font-size:14px}
    .icon-box{width:44px;height:44px;border-radius:12px;background:rgba(228,41,43,.1);display:flex;align-items:center;justify-content:center;color:var(--accent)}
    .insight-wrap{display:grid;grid-template-columns:1.05fr .95fr;gap:28px;align-items:stretch}
    .insight-panel{padding:34px;border-radius:28px;background:#161d2f;color:#fff;height:100%}
    .insight-panel p{color:rgba(255,255,255,.78)}
    .insight-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:22px}
    .spotlight{padding:20px;border-radius:22px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)}
    .spotlight h3{font-size:24px;margin:10px 0 8px;color:#fff}
    .pricing-card{max-width:860px;margin:0 auto;border-radius:24px;border:1px solid #e5e7eb;background:#fff;box-shadow:0 28px 70px rgba(17,24,39,.1);overflow:hidden}
    .pricing-head{padding:26px 26px 18px;border-bottom:1px solid #e5e7eb;display:flex;justify-content:space-between;gap:20px;align-items:flex-start;flex-wrap:wrap}
    .badge-green{display:inline-flex;align-items:center;padding:8px 12px;border-radius:999px;background:#eaf8ee;color:#15803d;font-weight:700;font-size:12px}
    .price-line{font-family:"Plus Jakarta Sans",sans-serif;font-size:30px;font-weight:800}
    .strike{color:#9ca3af;text-decoration:line-through;font-size:18px;margin-right:10px}
    .pricing-body{padding:26px}
    .check-list{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .check-item{display:flex;gap:10px;align-items:flex-start;padding:12px 14px;border-radius:14px;background:#fafafa;border:1px solid #f1f1f1}
    .pricing-cta{margin-top:20px}
    .testimonial-shell{position:relative;overflow:hidden}
    .slides{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .slide{min-width:100%;padding:8px}
    .testimonial-card{background:#fff;border:1px solid #ececec;border-radius:24px;padding:34px;box-shadow:0 18px 48px rgba(17,24,39,.08)}
    .quote-mark{font-size:56px;line-height:1;color:var(--accent);font-family:"Plus Jakarta Sans",sans-serif}
    .stars{color:#f5b301;letter-spacing:2px;font-size:18px;margin:10px 0 18px}
    .author{display:flex;align-items:center;gap:14px;margin-top:22px}
    .author img{width:58px;height:58px;border-radius:50%;object-fit:cover;border:3px solid rgba(228,41,43,.1)}
    .author strong{display:block;font-size:16px}
    .author span{color:#6b7280;font-size:14px}
    .t-controls{display:flex;justify-content:center;gap:10px;margin-top:20px}
    .t-dot{width:10px;height:10px;border-radius:999px;border:none;background:#d1d5db;cursor:pointer;transition:all .3s ease}
    .t-dot.active{width:28px;background:var(--accent)}
    .arrow-row{display:flex;justify-content:space-between;gap:12px;margin-top:18px}
    .arrow-btn{width:46px;height:46px;border:none;border-radius:50%;background:#fff;box-shadow:0 10px 24px rgba(17,24,39,.1);cursor:pointer;font-size:20px}
    .footer{background:#111827;color:#fff;padding:42px 0}
    .footer-grid{display:grid;grid-template-columns:1.2fr 1fr 1fr;gap:26px;align-items:start}
    .footer small,.footer a,.footer p{color:rgba(255,255,255,.76)}
    .footer-links{display:flex;gap:14px;flex-wrap:wrap;margin-top:12px}
    .socials{display:flex;gap:10px;flex-wrap:wrap}
    .socials a{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08)}
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
    .stagger-parent > *{transition-delay:calc(var(--i, 0) * .08s)}
    @keyframes pageReveal{
      from{opacity:0;transform:translateY(14px)}
      to{opacity:1;transform:translateY(0)}
    }
    @media (max-width: 1024px){
      .hero-grid,.trust-grid,.split-wrap,.insight-wrap,.footer-grid{grid-template-columns:1fr}
      .hero-visual{min-height:auto}
      .hero-panel{min-height:420px}
      .logo-grid{grid-template-columns:repeat(2,1fr)}
      .feature-grid,.insight-grid,.check-list{grid-template-columns:1fr}
      .split-wrap.reverse .media-col,.split-wrap.reverse .text-col{order:initial}
    }
    @media (max-width: 767px){
      .section{padding:52px 0}
      .hero{padding:72px 0 52px}
      .nav-inner{grid-template-columns:1fr auto}
      .tj-logo{display:none}
      .hero-sub{font-size:16px}
      .hero-panel{min-height:360px;padding:14px}
      .float-card{padding:12px 14px}
      .fc1{top:14px;left:14px}
      .fc2{top:72px;right:14px}
      .fc3{left:14px;bottom:14px}
      .logo-grid{grid-template-columns:1fr 1fr}
      .metrics{flex-direction:column;align-items:stretch}
      .metric-box{min-width:unset}
      .browser-frame img{min-height:300px}
      .testimonial-card{padding:24px}
    }
  `;

  return (
    <div className="page-wrapper">
      <style>{css}</style>

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand-left">
            <span>Zoho Workplace</span>
          </div>
          <img
            className="tj-logo"
            src="/output/generated-assets/ds_1777966905792_cc514d4e/techjockey-logo.png"
            alt="Techjockey"
            onError={(e) => {
              e.currentTarget.style.display = 'none';
            }}
          />
          <a className="animated-cta btn-magnetic" href={ctas[0].href}>
            {ctas[0].text}
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <span className="tag hero-headline">PRODUCTIVITY SOFTWARE</span>
            <h1 className="hero-headline" style={{ marginTop: 18 }}>
              Simplify work with <span className="gradient-text">Zoho Workplace</span>
            </h1>
            <p className="hero-sub">
              Bring email, chat, meetings, documents, and cloud storage together in one business productivity suite designed for modern teams.
            </p>
            <div className="hero-chips">
              <div className="chip">Business Email</div>
              <div className="chip">Team Collaboration</div>
              <div className="chip">Cloud Office Suite</div>
            </div>
            <div className="hero-cta">
              <a className="animated-cta btn-magnetic" href={ctas[0].href}>
                {ctas[0].text}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-panel">
              <div className="dashboard-lines" />
              <img
                className="hero-illustration"
                src="/output/generated-assets/ds_1777966905792_cc514d4e/17-8ee9780f0b.jpg"
                alt="Zoho Workplace dashboard"
              />
              <div className="float-card fc1">
                <small>Collaboration</small>
                <strong>Mail, Docs & Chat</strong>
              </div>
              <div className="float-card fc2">
                <small>Remote Ready</small>
                <strong>Work from anywhere</strong>
              </div>
              <div className="float-card fc3">
                <small>Unified Suite</small>
                <strong>One platform for teams</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container trust-grid">
          <div className="trust-copy reveal-left">
            <span className="tag">TRUST</span>
            <h3 style={{ marginTop: 14 }}>Trusted business productivity platform</h3>
            <p style={{ marginTop: 10 }}>
              Built for secure communication, smooth collaboration, and scalable team productivity.
            </p>
            <div className="metrics">
              <div className="metric-box">
                <strong data-count="82.9" data-suffix="%">0%</strong>
                <p>Secure email experience</p>
              </div>
              <div className="metric-box">
                <strong data-count="42.9" data-suffix="%">0%</strong>
                <p>Better remote access</p>
              </div>
            </div>
          </div>
          <div className="logo-grid reveal-right">
            {trustLogos.map((logo, idx) => (
              <div className="logo-card" key={idx}>
                <img src={logo} alt={`Trusted brand ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {productSections.slice(0, 3).map((section, index) => (
        <section
          key={index}
          className={`split-section ${section.dark ? 'section-dark' : index % 2 === 1 ? 'section-soft' : 'section-light'}`}
        >
          <div className="container">
            <div className={`split-wrap ${index % 2 === 1 ? 'reverse' : ''}`}>
              <div className="media-col reveal-left">
                <div className={`browser-frame ${section.dark ? 'browser-dark' : ''}`}>
                  <div className="browser-top">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                  <img src={section.image} alt={section.headline} />
                </div>
              </div>

              <div className="text-col reveal-right">
                <div className="text-panel">
                  <span className="tag">{section.label}</span>
                  <h2 style={{ marginTop: 16 }}>{section.headline}</h2>
                  {section.description ? (
                    <div className="desc-bar">
                      <p>{section.description}</p>
                    </div>
                  ) : null}
                  <div className="feature-grid">
                    {section.features.map((feature, i) => (
                      <div className="feature-card" key={i}>
                        <div className="icon-box">
                          <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
                            <path d="M20 7L10 17L4 11" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </div>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 22 }}>
                    <a className="animated-cta btn-magnetic" href={ctas[Math.min(index + 1, ctas.length - 1)].href}>
                      {ctas[Math.min(index + 1, ctas.length - 1)].text}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section" style={{ background: '#0f172a' }}>
        <div className="container">
          <div className="insight-wrap">
            <div className="reveal-left">
              <div className="browser-frame browser-dark">
                <div className="browser-top">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <img src={productSections[3].image} alt={productSections[3].headline} />
              </div>
            </div>
            <div className="reveal-right">
              <div className="insight-panel">
                <span className="tag" style={{ background: 'rgba(255,255,255,.06)', borderColor: 'rgba(255,255,255,.12)', color: '#fff' }}>
                  {productSections[3].label}
                </span>
                <h2 style={{ marginTop: 16, color: '#fff' }}>{productSections[3].headline}</h2>
                <div className="insight-grid">
                  {productSections[3].features.map((feature, i) => (
                    <div className="spotlight" key={i}>
                      <h3>{feature.title}</h3>
                      <p>{feature.description}</p>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: 22 }}>
                  <a className="animated-cta btn-magnetic" href={ctas[3].href}>
                    {ctas[3].text}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 26 }}>
            <span className="tag">PRICING</span>
            <h2 style={{ marginTop: 16 }}>Get the right Zoho Workplace plan</h2>
            <p style={{ maxWidth: 720, margin: '14px auto 0' }}>
              Compare plans, features, and licensing with Techjockey experts and choose the best fit for your business.
            </p>
          </div>

          <div className="pricing-card reveal-scale">
            <div className="pricing-head">
              <div>
                <span className="badge-green">Best for growing teams</span>
                <h3 style={{ marginTop: 12, fontSize: 30 }}>Zoho Workplace</h3>
                <p style={{ marginTop: 8 }}>Business email, collaboration, office suite, and storage in one place.</p>
              </div>
              <div>
                <div className="price-line">
                  <span className="strike">Custom</span>Quotation Available
                </div>
                <p style={{ marginTop: 8 }}>Talk to our experts for pricing and product guidance.</p>
              </div>
            </div>
            <div className="pricing-body">
              <div className="check-list">
                <div className="check-item">
                  <span style={{ color: accent }}>✓</span>
                  <div>
                    <strong>Business email hosting</strong>
                    <p>Ad-free email with domain-based accounts and admin controls.</p>
                  </div>
                </div>
                <div className="check-item">
                  <span style={{ color: accent }}>✓</span>
                  <div>
                    <strong>Integrated collaboration tools</strong>
                    <p>Chat, meetings, file storage, and team communication from one suite.</p>
                  </div>
                </div>
                <div className="check-item">
                  <span style={{ color: accent }}>✓</span>
                  <div>
                    <strong>Cloud office apps</strong>
                    <p>Create and collaborate on documents, sheets, and presentations in real time.</p>
                  </div>
                </div>
                <div className="check-item">
                  <span style={{ color: accent }}>✓</span>
                  <div>
                    <strong>Deployment assistance</strong>
                    <p>Get expert help from Techjockey to select and implement the right plan.</p>
                  </div>
                </div>
              </div>
              <div className="pricing-cta">
                <a className="animated-cta btn-magnetic" href={ctas[0].href}>
                  {ctas[0].text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 28 }}>
            <span className="tag">CUSTOMER STORIES</span>
            <h2 style={{ marginTop: 16 }}>What users say about Zoho Workplace</h2>
          </div>

          <div className="testimonial-shell reveal-scale">
            <div
              className="slides"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((item, idx) => (
                <div className="slide" key={idx}>
                  <div className="testimonial-card">
                    <div className="quote-mark">“</div>
                    <div className="stars">★★★★★</div>
                    <p style={{ fontSize: 18, color: '#111827' }}>{item.quote}</p>
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

            <div className="arrow-row">
              <button
                className="arrow-btn"
                onClick={() => setActiveSlide(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <button
                className="arrow-btn"
                onClick={() => setActiveSlide(prev => (prev + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>

            <div className="t-controls">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`t-dot ${activeSlide === idx ? 'active' : ''}`}
                  onClick={() => setActiveSlide(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div
            className="reveal-scale"
            style={{
              background: 'linear-gradient(135deg, #fff1f1 0%, #fff7f2 100%)',
              border: '1px solid rgba(228,41,43,.12)',
              borderRadius: 28,
              padding: '34px 28px',
              display: 'grid',
              gridTemplateColumns: '1.1fr auto',
              gap: 20,
              alignItems: 'center'
            }}
          >
            <div>
              <span className="tag">READY TO BUY</span>
              <h2 style={{ marginTop: 14 }}>Get expert help to choose Zoho Workplace</h2>
              <p style={{ marginTop: 12, maxWidth: 700 }}>
                Connect with Techjockey specialists for product consultation, pricing support, and the best-fit plan for your business.
              </p>
            </div>
            <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
              <a className="animated-cta btn-magnetic" href={ctas[0].href}>
                {ctas[0].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <h3 style={{ fontSize: 24 }}>Zoho Workplace</h3>
            <p style={{ marginTop: 12 }}>
              A unified productivity and collaboration suite for modern businesses, supported by Techjockey experts.
            </p>
            <div className="footer-links">
              <a href={ctas[0].href}>Get quotation</a>
              <a href="https://www.techjockey.com/">Techjockey</a>
            </div>
          </div>
          <div>
            <h4 style={{ marginBottom: 12 }}>Solutions</h4>
            <small>Email hosting</small><br />
            <small>Team collaboration</small><br />
            <small>Office productivity</small><br />
            <small>Remote work tools</small>
          </div>
          <div>
            <h4 style={{ marginBottom: 12 }}>Connect</h4>
            <div className="socials">
              <a href="https://www.facebook.com/techjockey/" aria-label="Facebook">f</a>
              <a href="https://x.com/TechjockeyInfo" aria-label="Twitter">x</a>
              <a href="https://www.linkedin.com/company/techjockey-com/" aria-label="LinkedIn">in</a>
              <a href="https://www.instagram.com/techjockey/" aria-label="Instagram">ig</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;