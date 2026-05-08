import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#e4292b';
  const primary = '#e4292b';
  const bodyBg = '#ffffff';

  const [activeSlide, setActiveSlide] = useState(0);
  const testimonialRef = useRef(null);

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

  const sections = [
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

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
  }, []);

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

  const nextSlide = () => setActiveSlide(prev => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveSlide(prev => (prev - 1 + testimonials.length) % testimonials.length);

  const getInitials = name =>
    name
      .split(' ')
      .map(n => n[0])
      .join('')
      .slice(0, 2);

  const icon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke={accent} strokeWidth="1.8" />
      <path d="M8.5 12l2.2 2.2L15.8 9" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const css = `
    :root{--accent:${accent};--primary:${primary};}
    *{box-sizing:border-box}
    body{margin:0;background:${bodyBg};font-family:Inter,sans-serif;color:#111827}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .page-wrapper {
      animation: pageReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .landing-page{background:${bodyBg};overflow:hidden}
    .container{width:min(1200px,calc(100% - 40px));margin:0 auto}
    .main_header{position:sticky;top:0;z-index:50;background:rgba(17,24,39,.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-bar{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .logo-text{font-weight:800;font-size:20px;color:var(--accent);font-family:"Plus Jakarta Sans",sans-serif}
    .nav-right{display:flex;align-items:center;gap:18px}
    .btn,.animated-cta{display:inline-flex;align-items:center;justify-content:center;border:none;border-radius:12px;padding:13px 24px;font-weight:700;font-size:15px;transition:.25s ease;cursor:pointer}
    .animated-cta{background:var(--accent);color:#fff;box-shadow:0 10px 24px rgba(228,41,43,.22)}
    .animated-cta:hover,.primary-btn:hover{transform:translateY(-2px);box-shadow:0 16px 30px rgba(228,41,43,.28);background:var(--primary)}
    .primary-btn{background:var(--accent);color:#fff}
    .ghost-btn{padding:13px 24px;border-radius:12px;border:1px solid #d1d5db;color:#111827;background:#fff;font-weight:700}
    .hero-section{background:#fff;position:relative}
    .grid-bg{background-image:linear-gradient(rgba(17,24,39,.05) 1px, transparent 1px),linear-gradient(90deg, rgba(17,24,39,.05) 1px, transparent 1px);background-size:28px 28px}
    .banner-area{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center;padding:72px 0 56px}
    .banner-title{font:800 clamp(48px,6vw,68px)/1.05 "Plus Jakarta Sans",sans-serif;letter-spacing:-.03em;margin:0 0 18px}
    .banner-content{font-size:18px;line-height:1.7;color:#4b5563;max-width:640px;margin:0}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-chips{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0 28px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(228,41,43,.25);background:rgba(228,41,43,.06);color:#374151;font-size:13px;font-weight:600}
    .hero-cta{display:flex;gap:14px;align-items:center;flex-wrap:wrap}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center}
    .visual-shell{position:relative;width:100%;min-height:500px;border-radius:28px;padding:22px;background:linear-gradient(180deg,#fff 0%,#f8fafc 100%);box-shadow:0 30px 80px rgba(15,23,42,.10);border:1px solid #e5e7eb;overflow:hidden}
    .orb{position:absolute;border-radius:50%;filter:blur(18px);opacity:.18}
    .orb.one{width:220px;height:220px;background:var(--accent);top:-60px;right:-40px}
    .orb.two{width:180px;height:180px;background:var(--primary);bottom:-40px;left:-40px}
    .mock-window{position:relative;z-index:2;border:1px solid #e5e7eb;border-radius:22px;background:#fff;overflow:hidden;box-shadow:0 18px 50px rgba(15,23,42,.08)}
    .mock-top{display:flex;align-items:center;gap:8px;padding:14px 16px;border-bottom:1px solid #edf0f3;background:#fbfbfc}
    .dot{width:10px;height:10px;border-radius:50%;background:#d1d5db}
    .dot.red{background:var(--accent)}
    .mock-body{display:grid;grid-template-columns:220px 1fr;min-height:380px}
    .mock-side{background:#111827;padding:18px 14px;color:#fff}
    .side-pill{height:12px;border-radius:999px;background:rgba(255,255,255,.14);margin-bottom:14px}
    .side-pill.active{background:rgba(228,41,43,.95);width:72%}
    .mock-main{padding:18px;background:linear-gradient(180deg,#fff 0%,#f8fafc 100%)}
    .stats-row{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:16px}
    .stat-card,.mail-card,.tile,.float-card,.feature-box,.pricing-card,.testimonial-card,.metric-card{background:#fff;border:1px solid #e5e7eb;border-radius:18px;box-shadow:0 12px 30px rgba(15,23,42,.06)}
    .stat-card{padding:16px}
    .stat-line{height:10px;background:#eef2f7;border-radius:999px;margin-bottom:10px}
    .stat-line.red{background:linear-gradient(90deg,var(--accent),rgba(228,41,43,.3));width:70%}
    .mail-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:14px}
    .mail-card{padding:16px}
    .card-title{font-weight:700;font-size:14px;margin-bottom:12px}
    .mail-item{height:14px;border-radius:999px;background:#eef2f7;margin-bottom:10px}
    .mail-item.red{background:linear-gradient(90deg,var(--accent),rgba(228,41,43,.3));width:58%}
    .mini-grid{display:grid;gap:12px}
    .float-card{position:absolute;z-index:3;padding:14px 16px;min-width:170px}
    .float-card.one{top:26px;right:22px}
    .float-card.two{bottom:26px;left:10px}
    .float-card strong{display:block;font:700 14px "Plus Jakarta Sans",sans-serif;margin-bottom:4px}
    .float-card span{font-size:12px;color:#6b7280}
    .trust-section{background:#f8fafc;padding:22px 0;border-top:1px solid #eef2f7;border-bottom:1px solid #eef2f7}
    .trust-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:16px}
    .metric-card{padding:18px 20px;display:flex;align-items:center;gap:14px;min-height:72px}
    .metric-icon{width:44px;height:44px;border-radius:14px;background:rgba(228,41,43,.08);display:flex;align-items:center;justify-content:center;flex-shrink:0}
    .metric-card h3{margin:0;font:800 20px "Plus Jakarta Sans",sans-serif}
    .metric-card p{margin:4px 0 0;color:#6b7280;font-size:14px}
    section{transition:background-color 0.4s ease}
    .content-section{position:relative;padding:86px 0}
    .content-section.alt{background:#f8fafc}
    .section-grid{display:grid;grid-template-columns:1fr 1fr;gap:42px;align-items:center}
    .section-tag{display:inline-block;padding:8px 12px;border-radius:999px;background:rgba(228,41,43,.08);color:var(--accent);font-size:12px;font-weight:800;letter-spacing:.08em;margin-bottom:18px}
    .section-title{font:800 clamp(32px,4vw,46px)/1.1 "Plus Jakarta Sans",sans-serif;letter-spacing:-.02em;margin:0 0 16px}
    .section-desc{margin:0 0 22px;padding-left:18px;border-left:3px solid rgba(228,41,43,.25);font-size:17px;line-height:1.7;color:#4b5563}
    .feature-list{display:grid;gap:14px}
    .feature-box{padding:18px}
    .feature-head{display:flex;gap:12px;align-items:flex-start}
    .feature-icon{width:38px;height:38px;border-radius:12px;background:rgba(228,41,43,.08);display:flex;align-items:center;justify-content:center;flex-shrink:0}
    .feature-title{margin:0 0 6px;font:700 18px "Plus Jakarta Sans",sans-serif}
    .feature-desc{margin:0;color:#4b5563;line-height:1.65}
    .visual-panel{position:relative}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:24px;border:1px solid #e5e7eb;background:#fff;box-shadow:0 20px 50px rgba(15,23,42,.08);min-height:460px}
    .browser-bar{display:flex;align-items:center;justify-content:space-between;padding:14px 16px;border-bottom:1px solid #edf0f3;background:#fafafa}
    .browser-url{height:12px;width:42%;background:#eceff3;border-radius:999px}
    .browser-inner{padding:18px;display:grid;gap:14px;flex:1;min-height:0;background:linear-gradient(180deg,#fff 0%,#f8fafc 100%)}
    .ui-row{display:grid;grid-template-columns:repeat(3,1fr);gap:14px}
    .ui-box{border:1px solid #e5e7eb;border-radius:16px;background:#fff;padding:14px}
    .ui-box.big{grid-column:span 2;min-height:160px}
    .ui-box.tall{min-height:160px}
    .ui-line{height:11px;background:#eef2f7;border-radius:999px;margin-bottom:10px}
    .ui-line.red{background:linear-gradient(90deg,var(--accent),rgba(228,41,43,.3))}
    .ui-grid-2{display:grid;grid-template-columns:1.15fr .85fr;gap:14px}
    .pricing-section{background:#fff;padding:86px 0}
    .pricing-wrap{max-width:860px;margin:0 auto}
    .pricing-card{padding:28px;position:relative;border:2px solid rgba(228,41,43,.14)}
    .badge-green{display:inline-flex;align-items:center;padding:7px 12px;border-radius:999px;background:#eaf8ee;color:#12803c;font-weight:800;font-size:12px;margin-bottom:16px}
    .price-name{font:800 32px "Plus Jakarta Sans",sans-serif;margin:0 0 10px}
    .strike{color:#9ca3af;text-decoration:line-through;min-height:20px;display:block}
    .discount-price{font:800 40px "Plus Jakarta Sans",sans-serif;margin:8px 0 16px}
    .pricing-list{display:grid;gap:12px;margin:20px 0 26px}
    .pricing-item{display:flex;gap:10px;align-items:flex-start;color:#374151;line-height:1.6}
    .pricing-cta{width:100%}
    .testimonial-wrap{background:#f8fafc;padding:86px 0}
    .testimonial-shell{position:relative;overflow:hidden}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-slide{min-width:100%}
    .testimonial-card{padding:34px}
    .quote-mark{font-size:56px;line-height:1;color:var(--accent);font-family:"Plus Jakarta Sans",sans-serif;margin-bottom:10px}
    .stars{color:#f4b400;letter-spacing:2px;font-size:18px;margin-bottom:18px}
    .testimonial-text{font-size:24px;line-height:1.6;color:#111827;margin:0 0 24px}
    .author-row{display:flex;align-items:center;gap:14px}
    .avatar{width:54px;height:54px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800}
    .author-name{font-weight:800}
    .author-role{color:#6b7280;font-size:14px;margin-top:4px}
    .slider-controls{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-top:22px}
    .arrow-group{display:flex;gap:10px}
    .arrow-btn{width:44px;height:44px;border-radius:50%;border:1px solid #d1d5db;background:#fff;cursor:pointer;font-size:20px}
    .dots{display:flex;gap:8px;align-items:center}
    .dot-btn{width:8px;height:8px;border-radius:999px;border:none;background:#d1d5db;cursor:pointer;transition:.3s}
    .dot-btn.active{width:26px;background:var(--accent)}
    .footer{background:#111827;color:#fff;padding:42px 0}
    .footer-grid{display:grid;grid-template-columns:1fr auto;gap:20px;align-items:start}
    .footer-left img{height:28px;margin-bottom:16px}
    .footer-mail{display:block;color:#fff;margin:8px 0 12px}
    .footer-meta{color:rgba(255,255,255,.72);font-size:14px}
    .footer-links{display:flex;gap:16px;flex-wrap:wrap;margin-top:14px;color:#fff}
    .socials{display:flex;gap:10px;justify-content:flex-end;flex-wrap:wrap}
    .socials a{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12)}
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
    @media (max-width: 991px){
      .nav-bar{grid-template-columns:1fr auto;gap:12px}
      .nav-right{justify-self:end}
      .banner-area,.section-grid,.footer-grid,.trust-grid,.mail-grid,.ui-grid-2,.ui-row,.mock-body,.stats-row{grid-template-columns:1fr}
      .hero-visual{min-height:auto}
      .visual-shell{min-height:auto}
      .banner-title{font-size:48px}
      .content-section,.pricing-section,.testimonial-wrap{padding:64px 0}
      .testimonial-text{font-size:20px}
    }
    @media (max-width: 640px){
      .container{width:min(100% - 24px,1200px)}
      .banner-area{padding:46px 0 38px;gap:28px}
      .banner-title{font-size:40px}
      .hero-cta{flex-direction:column;align-items:stretch}
      .btn,.animated-cta,.ghost-btn{width:100%}
      .nav-right img{display:block}
      .metric-card{padding:16px}
      .pricing-card,.testimonial-card{padding:22px}
      .socials{justify-content:flex-start}
    }
  `;

  return (
    <div className="landing-page page-wrapper">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="main_header">
        <div className="container nav-bar">
          <div className="logo">
            <span className="logo-text">Zoho Workplace</span>
          </div>
          <div className="nav-right">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <a
            href="https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software"
            className="animated-cta btn-magnetic"
          >
            get price
          </a>
        </div>
      </header>

      <section className="hero-section grid-bg">
        <div className="container banner-area">
          <div className="banner-text">
            <h1 className="banner-title hero-headline">
              Elevate Your Team’s Productivity with <span className="gradient-text">Zoho Workplace</span>
            </h1>
            <p className="banner-content hero-sub">
              A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified Communication.
            </p>

            <div className="hero-chips">
              {[
                'Easy Setup & Quick Onboarding',
                'A Made in India solution',
                '24x7 Support',
                'Offer: Get Your Free Trial',
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  {icon}
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta">
              <a
                href="https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software"
                className="primary-btn btn-magnetic"
              >
                get privce
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="visual-shell reveal-scale">
              <div className="orb one" />
              <div className="orb two" />

              <div className="float-card one hover-card">
                <strong>100,000+ Businesses</strong>
                <span>Trusted by 100,000+ Businesses Globally</span>
              </div>

              <div className="float-card two hover-card">
                <strong>Email &amp; Collaboration Suite</strong>
                <span>Unified communication for enterprises and businesses</span>
              </div>

              <div className="mock-window">
                <div className="mock-top">
                  <span className="dot red" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <div className="mock-body">
                  <div className="mock-side">
                    <div className="side-pill active" />
                    <div className="side-pill" />
                    <div className="side-pill" />
                    <div className="side-pill" />
                    <div className="side-pill" />
                    <div className="side-pill" />
                  </div>
                  <div className="mock-main">
                    <div className="stats-row">
                      <div className="stat-card">
                        <div className="stat-line red" />
                        <div className="stat-line" />
                        <div className="stat-line" style={{ width: '54%' }} />
                      </div>
                      <div className="stat-card">
                        <div className="stat-line red" />
                        <div className="stat-line" />
                        <div className="stat-line" style={{ width: '64%' }} />
                      </div>
                      <div className="stat-card">
                        <div className="stat-line red" />
                        <div className="stat-line" />
                        <div className="stat-line" style={{ width: '48%' }} />
                      </div>
                    </div>
                    <div className="mail-grid">
                      <div className="mail-card">
                        <div className="card-title">Unified Workspace</div>
                        <div className="mail-item red" />
                        <div className="mail-item" />
                        <div className="mail-item" />
                        <div className="mail-item" style={{ width: '76%' }} />
                        <div className="mail-item" style={{ width: '62%' }} />
                      </div>
                      <div className="mini-grid">
                        <div className="mail-card">
                          <div className="card-title">Meetings</div>
                          <div className="mail-item red" />
                          <div className="mail-item" />
                        </div>
                        <div className="mail-card">
                          <div className="card-title">Storage</div>
                          <div className="mail-item red" />
                          <div className="mail-item" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-section">
        <div className="container">
          <div className="trust-grid stagger-parent reveal">
            <div className="metric-card stagger-child hover-card">
              <div className="metric-icon">{icon}</div>
              <div>
                <h3>100,000+ Businesses</h3>
                <p>Trusted customer count</p>
              </div>
            </div>
            <div className="metric-card stagger-child hover-card">
              <div className="metric-icon">{icon}</div>
              <div>
                <h3>Trusted by 100,000+ Businesses Globally</h3>
                <p>Proof-led credibility</p>
              </div>
            </div>
            <div className="metric-card stagger-child hover-card">
              <div className="metric-icon">{icon}</div>
              <div>
                <h3>Email &amp; Collaboration Suite</h3>
                <p>For enterprises and businesses</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {sections.map((section, idx) => (
        <section
          key={section.headline}
          className={`content-section ${idx % 2 === 1 ? 'alt' : ''}`}
        >
          <div className="container">
            <div className="section-grid">
              <div className={`visual-panel ${idx % 2 === 0 ? 'reveal-left' : 'reveal-right'}`} style={{ order: idx % 2 === 0 ? 1 : 2 }}>
                <div className="browser-frame">
                  <div className="browser-bar">
                    <div style={{ display: 'flex', gap: 8 }}>
                      <span className="dot red" />
                      <span className="dot" />
                      <span className="dot" />
                    </div>
                    <div className="browser-url" />
                  </div>
                  <div className="browser-inner">
                    <div className="ui-row">
                      <div className="ui-box">
                        <div className="ui-line red" />
                        <div className="ui-line" />
                        <div className="ui-line" style={{ width: '70%' }} />
                      </div>
                      <div className="ui-box">
                        <div className="ui-line red" />
                        <div className="ui-line" />
                        <div className="ui-line" style={{ width: '60%' }} />
                      </div>
                      <div className="ui-box">
                        <div className="ui-line red" />
                        <div className="ui-line" />
                        <div className="ui-line" style={{ width: '66%' }} />
                      </div>
                    </div>
                    <div className="ui-grid-2">
                      <div className="ui-box big">
                        <div className="ui-line red" style={{ width: '42%' }} />
                        {section.features.slice(0, 3).map((f, i) => (
                          <div key={i} style={{ marginBottom: 12 }}>
                            <div className="ui-line" style={{ width: `${78 - i * 8}%` }} />
                            <div className="ui-line" style={{ width: `${54 - i * 5}%` }} />
                          </div>
                        ))}
                      </div>
                      <div className="ui-box tall">
                        <div className="ui-line red" style={{ width: '58%' }} />
                        <div className="ui-line" />
                        <div className="ui-line" />
                        <div className="ui-line" style={{ width: '72%' }} />
                        <div className="ui-line" style={{ width: '64%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className={`${idx % 2 === 0 ? 'reveal-right' : 'reveal-left'}`} style={{ order: idx % 2 === 0 ? 2 : 1 }}>
                <span className="section-tag">{section.label}</span>
                <h2 className="section-title reveal">{section.headline}</h2>
                {section.description ? <p className="section-desc">{section.description}</p> : null}
                <div className="feature-list stagger-parent reveal">
                  {section.features.map((feature, i) => (
                    <div className="feature-box hover-card stagger-child" key={feature.title + i}>
                      <div className="feature-head">
                        <div className="feature-icon">{icon}</div>
                        <div>
                          <h3 className="feature-title">{feature.title}</h3>
                          <p className="feature-desc">{feature.description}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="pricing-section">
        <div className="container">
          <div className="pricing-wrap reveal">
            <span className="section-tag">PRICING</span>
            <h2 className="section-title">Zoho Workplace</h2>
            <div className="pricing-card hover-card reveal-scale">
              <div className="badge-green">Plan Includes</div>
              <h3 className="price-name">Zoho Workplace</h3>
              <span className="strike">was </span>
              <div className="discount-price"></div>
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
                ].map((item, i) => (
                  <div className="pricing-item" key={i}>
                    <span>{icon}</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <div className="footer-meta">Pricing details are available on request.</div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonial-wrap">
        <div className="container">
          <div className="reveal">
            <span className="section-tag">TESTIMONIALS</span>
            <h2 className="section-title">What enterprises and businesses say</h2>
          </div>

          <div className="testimonial-shell" ref={testimonialRef}>
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div className="testimonial-slide" key={i}>
                  <div className="testimonial-card hover-card reveal-scale">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">{t.quote}</p>
                    <div className="author-row">
                      <div className="avatar">{getInitials(t.author)}</div>
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
              <div className="arrow-group">
                <button className="arrow-btn" onClick={prevSlide} aria-label="Previous testimonial">
                  ‹
                </button>
                <button className="arrow-btn" onClick={nextSlide} aria-label="Next testimonial">
                  ›
                </button>
              </div>
              <div className="dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`dot-btn ${i === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-left">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              alt="Techjockey"
            />
            <a href="mailto:support@techjockey.com" className="footer-mail">
              support@techjockey.com
            </a>
            <div className="footer-meta">© 2024 Techjockey Infotech Pvt. Ltd.</div>
            <div className="footer-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-condition">Terms</a>
            </div>
          </div>

          <div className="socials">
            <a href="https://www.facebook.com/Techjockey/" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v5h3v-5h2.2l.8-3H13V9c0-.6.4-1 1-1z" fill="#fff"/></svg>
            </a>
            <a href="https://www.instagram.com/techjockey/" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="#fff" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" stroke="#fff" strokeWidth="1.8"/><circle cx="17.5" cy="6.5" r="1" fill="#fff"/></svg>
            </a>
            <a href="https://twitter.com/Techjockey" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M22 6.1c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.2 1.8-2.2-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.2-5.2.9-.4.8-.4 1.7-.2 2.5-3.3-.2-6.3-1.8-8.3-4.4-1.1 1.8-.5 4.2 1.3 5.3-.6 0-1.2-.2-1.7-.5 0 2 1.4 3.7 3.4 4.1-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 4 2.9A8.4 8.4 0 0 1 2 18.6a11.8 11.8 0 0 0 6.4 1.9c7.7 0 12-6.6 11.7-12.5.8-.6 1.5-1.2 1.9-1.9z" fill="#fff"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/techjockey/" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6.5 8.5h-3v10h3v-10zm-1.5-4a1.75 1.75 0 1 0 0 3.5 1.75 1.75 0 0 0 0-3.5zM20.5 12.3c0-2.9-1.5-4.3-3.9-4.3-1.8 0-2.6 1-3 1.7v-1.5h-3v10h3v-5.6c0-1.5.3-2.9 2.2-2.9 1.8 0 1.8 1.7 1.8 3v5.5h3v-5.9z" fill="#fff"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;