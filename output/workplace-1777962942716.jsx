import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#1a1a1a';
  const primary = '#ff6b00';
  const bodyBg = '#ffffff';

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [activeSlide, setActiveSlide] = useState(0);
  const testimonialsRef = useRef(null);

  const trustLogos = [
    '/output/generated-assets/ds_1777962652172_82f19c25/10-4e22c31148.png',
    '/output/generated-assets/ds_1777962652172_82f19c25/21-61e528786b.png',
    '/output/generated-assets/ds_1777962652172_82f19c25/23-b3d4199ca5.png',
    '/output/generated-assets/ds_1777962652172_82f19c25/22-75f766eeed.png',
  ];

  const sections = [
    {
      name: 'Features',
      headline: 'Why Choose Zoho Workplace?',
      description:
        'Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.',
      image: '/output/generated-assets/ds_1777962652172_82f19c25/15-473c14de05.jpg',
      features: [
        {
          title: 'All-In-One Unified Workspace',
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
      name: 'Standard Features',
      headline: 'Unlock Your Business Growth with Zoho Workplace',
      description:
        'Zoho Workplace unifies email, collaboration, and productivity tools to streamline your business operations. Enable smarter teamwork and drive growth with a single platform.',
      image: '/output/generated-assets/ds_1777962652172_82f19c25/25-ebee8bf233.png',
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
      name: 'Additional Features',
      headline: 'Integrate with Popular Apps',
      description:
        'Connect your Zoho Workplace with other business apps to ensure higher productivity and growth - all within a unified workspace.',
      image: '/output/generated-assets/ds_1777962652172_82f19c25/24-4e9d1f3318.png',
      features: [
        { title: 'Zoho Apps', description: 'Zoho Meeting, Zoho Connect, Zoho Mail, Zoho Cliq, Zoho Writer, etc.' },
        { title: 'Analytics', description: 'Zoho Analytics, Google Analytics' },
        { title: 'Accounting & Finance', description: 'Zoho Invoice & Zoho Books' },
        { title: 'Automation', description: 'Zoho Flow, Zapier, viaSocket' },
        { title: 'Business Suites', description: 'Zoho One, Zoho Workspace' },
      ],
    },
    {
      name: 'Insight',
      headline: 'Performance Beyond Limits with Zoho Workplace',
      description: '',
      image: '/output/generated-assets/ds_1777962652172_82f19c25/27-b32757542d.jpeg',
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

  const cartSection = {
    headline: 'Create a Secure Digital Workspace',
    description:
      'Enjoy privacy-first, enterprise-grade cloud capabilities with strong spam protection, SSO, Directory, MFA, and a secure password manager.',
    image: '/output/generated-assets/ds_1777962652172_82f19c25/29-26fc6b7064.jpeg',
    features: [
      'Enterprise-Grade Custom Email',
      'Migration Assistance',
      'Collaborative Office Suite',
      '30-GB Mail Storage Per User',
      'File Storage Starts at 100 GB Per Team',
      'File Sharing & Permissions',
      'Team Chat',
      'Document Management',
      'Supported Device: Android, iOS, Windows, Mac',
    ],
  };

  const testimonials = [
    {
      quote:
        'Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.',
      author: 'Amit Kapoor',
      role: 'IT Manager',
      avatar: '/output/generated-assets/ds_1777962652172_82f19c25/13-01fc6c95c0.jpg',
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      author: 'Saurav Singh',
      role: 'Head of Operations',
      avatar: '/output/generated-assets/ds_1777962652172_82f19c25/11-a1af876bc5.png',
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      author: 'Shrimi Manchanda',
      role: 'Operations Manager',
      avatar: '/output/generated-assets/ds_1777962652172_82f19c25/13-01fc6c95c0.jpg',
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      author: 'Shweta Thakur',
      role: 'Senior System Administrator',
      avatar: '/output/generated-assets/ds_1777962652172_82f19c25/11-a1af876bc5.png',
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      author: 'Narinder Sahni',
      role: 'IT Head',
      avatar: '/output/generated-assets/ds_1777962652172_82f19c25/13-01fc6c95c0.jpg',
    },
  ];

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg}}
    *{box-sizing:border-box} html{scroll-behavior:smooth}
    body{margin:0;background:${bodyBg};color:${accent};font-family:Inter,sans-serif}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .page-wrapper{animation:pageReveal .6s cubic-bezier(.16,1,.3,1) both;background:${bodyBg}}
    .container{width:min(1200px,calc(100% - 32px));margin:0 auto}
    .main_header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(20px);border-bottom:1px solid #e5e7eb}
    .nav-bar{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .logo{font:800 20px "Plus Jakarta Sans",sans-serif;color:${accent}}
    .nav-right{display:flex;align-items:center;gap:18px}
    .animated-cta,.ghost-btn,.form_btn{display:inline-flex;align-items:center;justify-content:center;border-radius:10px;padding:13px 22px;font-weight:700;transition:.25s ease;border:none;cursor:pointer}
    .animated-cta{background:${primary};color:#fff;box-shadow:0 10px 24px rgba(255,107,0,.22)}
    .animated-cta:hover,.ghost-btn:hover,.form_btn:hover{transform:translateY(-2px);box-shadow:0 16px 30px rgba(0,0,0,.14)}
    .ghost-btn{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.35)}
    .btn-magnetic{position:relative}
    .hero-section{position:relative;overflow:hidden;background:${primary};color:#fff}
    .hero-bg{position:absolute;inset:0;background:
      linear-gradient(rgba(0,0,0,.55),rgba(0,0,0,.55)),
      linear-gradient(90deg,rgba(255,255,255,.08) 1px,transparent 1px),
      linear-gradient(rgba(255,255,255,.08) 1px,transparent 1px);
      background-size:auto,48px 48px,48px 48px}
    .hero-panel{position:absolute;inset:0;pointer-events:none}
    .hero-orb1,.hero-orb2{position:absolute;border-radius:50%;filter:blur(40px);opacity:.3}
    .hero-orb1{width:340px;height:340px;background:rgba(255,255,255,.25);top:-90px;left:-60px}
    .hero-orb2{width:280px;height:280px;background:rgba(26,26,26,.26);right:-60px;bottom:-40px}
    .banner-area{position:relative;display:grid;grid-template-columns:1.1fr .9fr;gap:42px;align-items:center;min-height:760px;padding:36px 0 70px}
    .banner-title{font-family:"Plus Jakarta Sans",sans-serif;font-size:clamp(48px,6vw,68px);line-height:1.05;margin:0 0 18px;font-weight:800;letter-spacing:-.03em}
    .banner-content{font-size:18px;line-height:1.7;max-width:640px;color:rgba(255,255,255,.9);margin-bottom:18px}
    .support-line{font-size:15px;color:rgba(255,255,255,.86);margin-bottom:24px}
    .gradient-text{background:linear-gradient(135deg,#fff 0%,#ffd3b1 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-chips{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;background:rgba(255,255,255,.12);border:1px solid rgba(255,255,255,.18);font-size:13px;color:#fff}
    .hero-cta{display:flex;gap:14px;flex-wrap:wrap;margin-top:10px}
    .hero-visual{display:block}
    .form-card{background:#fff;color:${accent};border-radius:22px;padding:26px;box-shadow:0 24px 60px rgba(0,0,0,.2);max-width:460px;margin-left:auto}
    .form_title{font-family:"Plus Jakarta Sans",sans-serif;font-size:28px;line-height:1.2;font-weight:800;margin:0 0 8px}
    .form_sub{color:#5f6368;font-size:14px;line-height:1.6;margin:0 0 18px}
    .field{margin-bottom:14px}
    .form-control{width:100%;padding:14px 16px;border:1px solid #dcdfe4;border-radius:12px;font:500 15px Inter,sans-serif;outline:none;transition:.2s ease;background:#fff}
    .form-control:focus{border-color:${primary};box-shadow:0 0 0 4px rgba(255,107,0,.12)}
    .form_btn{width:100%;background:${primary};color:#fff;margin-top:4px}
    .marquee-wrapper{overflow:hidden;background:#f5f5f5;padding:18px 0;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 28s linear infinite}
    .marquee-item{font:800 26px "Plus Jakarta Sans",sans-serif;margin-right:42px;white-space:nowrap;color:${accent}}
    .section{padding:82px 0;position:relative}
    .section.bg-light{background:#f5f5f5}
    .section.bg-white{background:#fff}
    .section.bg-dark{background:${accent};color:#fff}
    .section-head{text-align:center;max-width:820px;margin:0 auto 44px}
    .section-head h2{font:800 clamp(32px,4vw,46px) "Plus Jakarta Sans",sans-serif;line-height:1.12;margin:0 0 12px}
    .section-head p{margin:0;color:#5f6368;font-size:17px;line-height:1.7}
    .section.bg-dark .section-head p{color:rgba(255,255,255,.78)}
    .trust-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:28px;align-items:center}
    .trust-stat{background:#fff;border:1px solid #ececec;border-radius:22px;padding:28px;box-shadow:0 12px 30px rgba(0,0,0,.05)}
    .trust-stat h2{font:800 42px "Plus Jakarta Sans",sans-serif;margin:0 0 6px}
    .trust-stat p{margin:0;color:#5f6368}
    .logo-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
    .logo-card{height:90px;background:#fff;border:1px solid #ececec;border-radius:18px;display:flex;align-items:center;justify-content:center;padding:16px;filter:grayscale(1);transition:.25s ease}
    .logo-card:hover{filter:grayscale(0);transform:translateY(-4px)}
    .spotlight{display:grid;grid-template-columns:1fr 1fr;gap:34px;align-items:center}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;background:#f8f8f8;border-radius:18px;border:1px solid #e6e6e6;box-shadow:0 18px 44px rgba(0,0,0,.08)}
    .browser-top{display:flex;gap:8px;padding:14px 16px;border-bottom:1px solid #ececec;background:#fff}
    .dot{width:10px;height:10px;border-radius:50%}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .spot-card{background:#fff;border:1px solid #ececec;border-radius:20px;padding:28px;box-shadow:0 14px 36px rgba(0,0,0,.05)}
    .spot-label{display:inline-block;padding:8px 12px;border-radius:999px;background:rgba(255,107,0,.12);color:${primary};font-weight:700;font-size:12px;margin-bottom:14px}
    .spot-card h3{font:800 clamp(30px,3.6vw,42px) "Plus Jakarta Sans",sans-serif;line-height:1.15;margin:0 0 12px}
    .desc-border{border-left:3px solid rgba(255,107,0,.25);padding-left:16px;margin-bottom:22px;color:#5f6368;line-height:1.75}
    .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .feature-box{background:#fff;border:1px solid #ececec;border-radius:16px;padding:18px}
    .feature-box h4{margin:0 0 8px;font:700 18px "Plus Jakarta Sans",sans-serif;display:flex;gap:10px;align-items:flex-start}
    .feature-box p{margin:0;color:#5f6368;line-height:1.65;font-size:14px}
    .icon-wrap{min-width:36px;width:36px;height:36px;border-radius:12px;background:rgba(255,107,0,.12);display:flex;align-items:center;justify-content:center;color:${primary}}
    .insight-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:16px;margin-top:22px}
    .metric-card{background:#fff;border-radius:18px;padding:24px;border:1px solid #ececec}
    .metric-card strong{display:block;font:800 30px "Plus Jakarta Sans",sans-serif;margin-bottom:8px}
    .metric-card h4{margin:0 0 8px;font:700 18px "Plus Jakarta Sans",sans-serif}
    .metric-card p{margin:0;color:#5f6368;line-height:1.65;font-size:14px}
    .pricing-wrap{display:grid;grid-template-columns:1.1fr .9fr;gap:30px;align-items:stretch}
    .pricing-copy{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);border-radius:24px;padding:30px}
    .pricing-copy h2{font:800 clamp(32px,4vw,46px) "Plus Jakarta Sans",sans-serif;line-height:1.1;margin:0 0 12px}
    .pricing-copy p{color:rgba(255,255,255,.8);line-height:1.75;margin:0 0 20px}
    .price-card{background:#fff;color:${accent};border-radius:24px;padding:28px;border:1px solid rgba(255,255,255,.15);box-shadow:0 18px 45px rgba(0,0,0,.22)}
    .badge-green{display:inline-flex;padding:8px 12px;border-radius:999px;background:#e9f9ee;color:#18803a;font-size:12px;font-weight:800;margin-bottom:14px}
    .price-card h3{font:800 28px "Plus Jakarta Sans",sans-serif;margin:0 0 8px}
    .price-note{color:#5f6368;margin:0 0 18px;line-height:1.7}
    .checklist{display:grid;grid-template-columns:1fr;gap:10px;margin:18px 0 0}
    .check-item{display:flex;gap:10px;align-items:flex-start;font-size:15px;line-height:1.55}
    .check{min-width:20px;width:20px;height:20px;border-radius:50%;background:#e9f9ee;color:#18803a;display:flex;align-items:center;justify-content:center;font-size:12px;margin-top:2px}
    .testimonial-wrap{position:relative;overflow:hidden}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-item{min-width:100%}
    .testimonial-card{background:#fff;border:1px solid #ececec;border-radius:24px;padding:34px;box-shadow:0 14px 36px rgba(0,0,0,.05);max-width:920px;margin:0 auto}
    .quote-mark{font-size:54px;line-height:1;color:${primary};font-weight:800}
    .stars{color:#f4b400;letter-spacing:2px;font-size:18px;margin:0 0 14px}
    .testimonial-text{font-size:22px;line-height:1.65;margin:0 0 24px}
    .author{display:flex;align-items:center;gap:14px}
    .author img{width:60px;height:60px;border-radius:50%;object-fit:cover}
    .author-name{font-weight:800}
    .author-role{color:#7a7f87;font-size:14px}
    .slider-nav{display:flex;justify-content:center;gap:10px;margin-top:24px}
    .slider-btn{width:42px;height:42px;border-radius:50%;border:1px solid #ddd;background:#fff;cursor:pointer}
    .footer{background:${accent};color:#fff;padding:34px 0}
    .footer-grid{display:grid;grid-template-columns:1.3fr 1fr 1fr;gap:24px;align-items:start}
    .footer a{color:rgba(255,255,255,.82)}
    .socials{display:flex;gap:12px;margin-top:10px}
    .social{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12)}
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
    .marquee-track:hover{animation-play-state:paused}
    .marquee-track-reverse{animation:marqueeScrollReverse 28s linear infinite}
    .marquee-track-fast{animation-duration:16s}
    .marquee-track-slow{animation-duration:40s}
    @keyframes pageReveal{0%{opacity:0;transform:translateY(12px)}100%{opacity:1;transform:translateY(0)}}
    section{transition:background-color .4s ease}
    @media (max-width:1024px){
      .banner-area,.spotlight,.trust-grid,.pricing-wrap,.footer-grid{grid-template-columns:1fr}
      .form-card{margin:0}
      .logo-grid{grid-template-columns:repeat(2,1fr)}
      .insight-grid{grid-template-columns:repeat(2,1fr)}
    }
    @media (max-width:640px){
      .nav-bar{grid-template-columns:1fr auto;gap:12px}
      .nav-right img{display:none}
      .banner-area{min-height:auto;padding:28px 0 52px}
      .hero-cta{flex-direction:column;align-items:flex-start}
      .section{padding:64px 0}
      .feature-grid,.insight-grid{grid-template-columns:1fr}
      .browser-frame img{height:280px}
      .testimonial-text{font-size:18px}
      .footer-grid{grid-template-columns:1fr}
    }
  `;

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
    const listeners = [];
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
      listeners.push({ btn, move, leave });
    });
    return () => listeners.forEach(({ btn, move, leave }) => {
      btn.removeEventListener('mousemove', move);
      btn.removeEventListener('mouseleave', leave);
    });
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => e.preventDefault();
  const icon = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8 12l2.5 2.5L16 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="page-wrapper">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="main_header">
        <div className="container">
          <div className="nav-bar">
            <div className="logo">
              <span style={{ fontWeight: 800, fontSize: '20px', color: accent }}>Zoho Workplace</span>
            </div>
            <div className="nav-right">
              <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" height="28px" alt="Techjockey" />
            </div>
            <a href="#lead-form" className="animated-cta btn-magnetic">Get Free Consultation</a>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="hero-bg hero-parallax-bg" />
        <div className="hero-panel">
          <div className="hero-orb1" />
          <div className="hero-orb2" />
        </div>
        <div className="container">
          <div className="banner-area">
            <div className="banner-text">
              <h1 className="banner-title hero-headline">Elevate Your Team’s Productivity with <span className="gradient-text">Zoho Workplace</span></h1>
              <p className="banner-content hero-sub">A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.</p>
              <div className="support-line">Easy Setup &amp; Quick Onboarding; A Made in India solution; 24x7 Support</div>
              <div className="hero-chips">
                {['Email & Collaboration Suite', 'Unified Communication', 'Enterprises', 'AI-Powered Productivity (Zia)'].map((chip, i) => (
                  <div className="chip" key={i}>{icon}<span>{chip}</span></div>
                ))}
              </div>
              <div className="hero-cta">
                <a href="#lead-form" className="animated-cta btn-magnetic">Get Free Consultation</a>
              </div>
            </div>

            <div className="hero-visual" id="lead-form">
              <div className="form-card">
                <h3 className="form_title">Get Started</h3>
                <p className="form_sub">A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified Communication.</p>
                <form onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="name" style={{ display: 'none' }}>Name</label>
                    <input id="name" name="name" className="form-control" placeholder="Name" value={formData.name} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label htmlFor="email" style={{ display: 'none' }}>Email</label>
                    <input id="email" name="email" type="email" className="form-control" placeholder="Email" value={formData.email} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label htmlFor="phone" style={{ display: 'none' }}>Phone</label>
                    <input id="phone" name="phone" className="form-control" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                  </div>
                  <div className="field">
                    <label htmlFor="company" style={{ display: 'none' }}>Company</label>
                    <input id="company" name="company" className="form-control" placeholder="Company" value={formData.company} onChange={handleChange} />
                  </div>
                  <button type="submit" className="form_btn btn-magnetic">Get Free Consultation</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {['Zoho Workplace ★ Email & Collaboration Suite', 'Zoho Workplace ★ Email & Collaboration Suite', 'Zoho Workplace ★ Email & Collaboration Suite', 'Zoho Workplace ★ Email & Collaboration Suite'].map((item, i) => (
            <div className="marquee-item" key={i}>{item}</div>
          ))}
        </div>
      </div>

      <section className="section bg-light">
        <div className="container">
          <div className="trust-grid">
            <div className="trust-stat reveal-left">
              <h2><span data-count="100000" data-suffix="+">0</span></h2>
              <p>Businesses Globally</p>
            </div>
            <div className="logo-grid stagger-parent">
              {trustLogos.map((logo, i) => (
                <div className="logo-card stagger-child hover-card" key={i}>
                  <img src={logo} alt={`Trust logo ${i + 1}`} style={{ maxHeight: '42px', objectFit: 'contain' }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {sections.slice(0, 3).map((section, idx) => (
        <section className={`section ${idx % 2 === 0 ? 'bg-white' : 'bg-light'}`} key={section.name}>
          <div className="container">
            <div className="spotlight">
              <div className={idx % 2 === 0 ? 'reveal-left' : 'reveal-right'} style={{ order: idx % 2 === 0 ? 0 : 1 }}>
                <div className="browser-frame">
                  <div className="browser-top">
                    <span className="dot" style={{ background: '#ff5f57' }} />
                    <span className="dot" style={{ background: '#febc2e' }} />
                    <span className="dot" style={{ background: '#28c840' }} />
                  </div>
                  <img src={section.image} alt={section.headline} />
                </div>
              </div>
              <div className={idx % 2 === 0 ? 'reveal-right' : 'reveal-left'} style={{ order: idx % 2 === 0 ? 1 : 0 }}>
                <div className="spot-card">
                  <span className="spot-label">{section.name}</span>
                  <h3>{section.headline}</h3>
                  {section.description ? <div className="desc-border">{section.description}</div> : null}
                  <div className="feature-grid stagger-parent">
                    {section.features.map((f, i) => (
                      <div className="feature-box hover-card stagger-child" key={i}>
                        <h4><span className="icon-wrap">{icon}</span><span>{f.title}</span></h4>
                        <p>{f.description}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      ))}

      <div className="marquee-wrapper">
        <div className="marquee-track marquee-track-fast">
          {['Unified Workspace ★ Collaboration ★ Productivity ★ Secure Communication', 'Unified Workspace ★ Collaboration ★ Productivity ★ Secure Communication', 'Unified Workspace ★ Collaboration ★ Productivity ★ Secure Communication'].map((item, i) => (
            <div className="marquee-item" key={i}>{item}</div>
          ))}
        </div>
      </div>

      <section className="section bg-white">
        <div className="container">
          <div className="spotlight">
            <div className="reveal-left">
              <div className="browser-frame">
                <div className="browser-top">
                  <span className="dot" style={{ background: '#ff5f57' }} />
                  <span className="dot" style={{ background: '#febc2e' }} />
                  <span className="dot" style={{ background: '#28c840' }} />
                </div>
                <img src={sections[3].image} alt={sections[3].headline} />
              </div>
            </div>
            <div className="reveal-right">
              <div className="spot-card">
                <span className="spot-label">Insight</span>
                <h3>{sections[3].headline}</h3>
                <div className="insight-grid stagger-parent">
                  <div className="metric-card hover-card stagger-child">
                    <strong data-count="82.9" data-suffix="%">0</strong>
                    <h4>Secure</h4>
                    <p>82.9% of users reported a secure email experience, ensuring strong data protection, and safe and reliable communication.</p>
                  </div>
                  <div className="metric-card hover-card stagger-child">
                    <strong data-count="42.9" data-suffix="%">0</strong>
                    <h4>Anywhere Access</h4>
                    <p>42.9% of them found it easier to work remotely with Zoho Workplace apps, enabling seamless access from any device, anywhere.</p>
                  </div>
                  <div className="metric-card hover-card stagger-child">
                    <strong data-count="28.6" data-suffix="%">0</strong>
                    <h4>Intuitive</h4>
                    <p>28.6% found Zoho Workplace easy to use, reducing the learning curve. Teams can quickly adapt and work efficiently.</p>
                  </div>
                  <div className="metric-card hover-card stagger-child">
                    <strong data-count="14.3" data-suffix="%">0</strong>
                    <h4>Collaborative</h4>
                    <p>14.3% of them saw improved collaboration, engagement and productivity, helping teams stay aligned and get more done faster.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-dark">
        <div className="container">
          <div className="pricing-wrap">
            <div className="pricing-copy reveal-left">
              <h2>Create a Secure Digital Workspace</h2>
              <p>Enjoy privacy-first, enterprise-grade cloud capabilities with strong spam protection, SSO, Directory, MFA, and a secure password manager.</p>
              <div className="browser-frame" style={{ background: '#fff' }}>
                <div className="browser-top">
                  <span className="dot" style={{ background: '#ff5f57' }} />
                  <span className="dot" style={{ background: '#febc2e' }} />
                  <span className="dot" style={{ background: '#28c840' }} />
                </div>
                <img src={cartSection.image} alt={cartSection.headline} />
              </div>
            </div>
            <div className="price-card reveal-scale hover-card">
              <span className="badge-green">Zoho Workplace Price Plan Includes</span>
              <h3>Create a Secure Digital Workspace</h3>
              <p className="price-note">Enjoy privacy-first, enterprise-grade cloud capabilities with strong spam protection, SSO, Directory, MFA, and a secure password manager.</p>
              <div className="checklist">
                {cartSection.features.map((item, i) => (
                  <div className="check-item" key={i}>
                    <span className="check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a href="#lead-form" className="animated-cta btn-magnetic" style={{ width: '100%', marginTop: '22px' }}>Get Free Consultation</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-head reveal">
            <h2>What Enterprises Say About <span className="gradient-text">Zoho Workplace</span></h2>
          </div>
          <div className="testimonial-wrap" ref={testimonialsRef}>
            <div className="testimonial-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {testimonials.map((t, i) => (
                <div className="testimonial-item" key={i}>
                  <div className="testimonial-card hover-card">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">{t.quote}</p>
                    <div className="author">
                      <img src={t.avatar} alt={t.author} />
                      <div>
                        <div className="author-name">{t.author}</div>
                        <div className="author-role">{t.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="slider-nav">
              <button className="slider-btn" onClick={() => setActiveSlide(prev => (prev - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">‹</button>
              <button className="slider-btn" onClick={() => setActiveSlide(prev => (prev + 1) % testimonials.length)} aria-label="Next testimonial">›</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" height="28px" alt="Techjockey" />
              <div style={{ marginTop: '14px' }}>
                <a href="mailto:support@techjockey.com">support@techjockey.com</a>
              </div>
              <div style={{ marginTop: '14px', color: 'rgba(255,255,255,.7)' }}>© 2024 Techjockey Infotech Pvt. Ltd.</div>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '12px' }}>Legal</div>
              <div style={{ display: 'grid', gap: '10px' }}>
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-condition">Terms</a>
              </div>
            </div>
            <div>
              <div style={{ fontWeight: 700, marginBottom: '12px' }}>Follow Us</div>
              <div className="socials">
                <a className="social" href="https://www.facebook.com/techjockey/" aria-label="Facebook">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>
                </a>
                <a className="social" href="https://www.instagram.com/techjockey/" aria-label="Instagram">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
                </a>
                <a className="social" href="https://x.com/TechjockeyInfo" aria-label="Twitter">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.8-6.3L6.5 22H3.4l7.2-8.2L1 2h6.4l4.4 5.8L18.9 2z"/></svg>
                </a>
                <a className="social" href="https://www.linkedin.com/company/techjockeyinfotech" aria-label="LinkedIn">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 12.64c0-2.98-1.59-4.37-3.7-4.37-1.7 0-2.46.94-2.88 1.6V8.5h-3.37c.05.91 0 11.5 0 11.5h3.37v-6.42c0-.34.03-.68.13-.92.27-.68.88-1.39 1.9-1.39 1.34 0 1.88 1.05 1.88 2.58V20H21c0 0 .04-6.3.04-7.36z"/></svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;