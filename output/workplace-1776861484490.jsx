import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const [activeFeatureSection, setActiveFeatureSection] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const revealRef = useRef([]);

  const brandPrimary = '#ff6b00';
  const accent = '#1a1a1a';

  const trustLogos = [
    '/output/generated-assets/ds_1776861181853_5ad98e3e/02-975eb13e3f.svg',
    '/output/generated-assets/ds_1776861181853_5ad98e3e/03-8da7f26504.svg',
    '/output/generated-assets/ds_1776861181853_5ad98e3e/05-ae76f0c421.svg',
    '/output/generated-assets/ds_1776861181853_5ad98e3e/04-84d4bfdd99.svg',
    '/output/generated-assets/ds_1776861181853_5ad98e3e/09-3c4d2f8415.svg',
    '/output/generated-assets/ds_1776861181853_5ad98e3e/08-428c7ca4a9.svg',
    '/output/generated-assets/ds_1776861181853_5ad98e3e/07-401f045b7d.svg',
    '/output/generated-assets/ds_1776861181853_5ad98e3e/06-d38fc0a4cb.svg'
  ];

  const featureSections = [
    {
      label: 'FEATURES',
      headline: 'Why Choose Zoho Workplace?',
      description:
        'Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.',
      image: '/output/generated-assets/ds_1776861181853_5ad98e3e/29-58ab6303a3.png',
      spotlight: {
        title: 'All-in-One Unified Workspace',
        description:
          'Access email, chat, documents, meetings, and storage in a single integrated platform. Reduce app switching and boost productivity.'
      },
      items: [
        {
          title: 'Seamless Collaboration in Real Time',
          description:
            'Work together on documents, spreadsheets, and presentations with live editing, comments, and built-in communication tools.',
          icon: 'collab'
        },
        {
          title: 'Work from Anywhere, Anytime',
          description:
            'Stay productive on the go. Reply to emails, access presentations, or host a video conference from anywhere effortlessly.',
          icon: 'mobile'
        },
        {
          title: 'AI-Powered Productivity (Zia)',
          description:
            'Leverage built-in AI for writing assistance in terms of grammar, readability and writing style while you work on Writer or Sheet.',
          icon: 'ai'
        }
      ]
    },
    {
      label: 'STANDARD FEATURES',
      headline: 'Unlock Your Business Growth with Zoho Workplace',
      description:
        'Zoho Workplace unifies email, collaboration, and productivity tools to streamline your business operations. Enable smarter teamwork and drive growth with a single platform.',
      image: '/output/generated-assets/ds_1776861181853_5ad98e3e/17-8ee9780f0b.jpg',
      spotlight: {
        title: 'Ideal For Your Business Size',
        description:
          'Designed for any organization, Zoho Workplace enhances efficiency and teamwork at every scale.'
      },
      items: [
        {
          title: 'Communicate Effectively',
          description:
            'Go beyond email and chat, and connect teams with a social intranet using channels, feeds, and groups.',
          icon: 'chat'
        },
        {
          title: 'Integrated Business Apps',
          description:
            'Connect with Zoho and third-party apps to unify workflows, eliminate silos, and streamline processes across your business.',
          icon: 'apps'
        },
        {
          title: 'Customizable Workspace',
          description:
            'Customize settings, layouts, workflows to fit your needs. Also, get a professional, ad-free email service & advanced controls.',
          icon: 'settings'
        }
      ]
    },
    {
      label: 'ADDITIONAL FEATURES',
      headline: 'Integrate with Popular Apps',
      description:
        'Connect your Zoho Workplace with other business apps to ensure higher productivity and growth - all within a unified workspace.',
      image: '/output/generated-assets/ds_1776861181853_5ad98e3e/32-b32757542d.jpeg',
      spotlight: {
        title: 'Zoho Apps',
        description: 'Zoho Meeting, Zoho Connect, Zoho Mail, Zoho Cliq, Zoho Writer, etc.'
      },
      items: [
        {
          title: 'Analytics',
          description: 'Zoho Analytics, Google Analytics',
          icon: 'analytics'
        },
        {
          title: 'Accounting & Finance',
          description: 'Zoho Invoice & Zoho Books',
          icon: 'finance'
        },
        {
          title: 'Automation',
          description: 'Zoho Flow, Zapier, viaSocket',
          icon: 'automation'
        },
        {
          title: 'Business Suites',
          description: 'Zoho One, Zoho Workspace',
          icon: 'suite'
        }
      ]
    }
  ];

  const insights = [
    {
      title: 'Secure',
      value: '82.9%',
      description:
        'of users reported a secure email experience, ensuring strong data protection and reliable communication.'
    },
    {
      title: 'Anywhere Access',
      value: '42.9%',
      description:
        'found it easier to work remotely with Zoho Workplace apps from any device, anywhere.'
    },
    {
      title: 'Intuitive',
      value: '28.6%',
      description:
        'found Zoho Workplace easy to use, reducing the learning curve for teams.'
    },
    {
      title: 'Collaborative',
      value: '14.3%',
      description:
        'saw improved collaboration, engagement and productivity across teams.'
    }
  ];

  const pricingPlan = {
    name: 'Zoho Workplace',
    originalPrice: 'Contact for pricing',
    price: 'Custom enterprise pricing',
    discount: 'Free Trial Available',
    includes: [
      'Enterprise-Grade Custom Email',
      'Migration Assistance',
      'Collaborative Office Suite',
      '30-GB Mail Storage Per User',
      'File Storage Starts at 100 GB Per Team',
      'File Sharing & Permissions',
      'Team Chat',
      'Document Management',
      'Supported Device: Android, iOS, Windows, Mac'
    ],
    cta: 'Get Started'
  };

  const testimonials = [
    {
      quote:
        'Zoho Workplace brings email, chat, meetings and documents together in one ecosystem, making team collaboration much more structured.',
      author: 'Enterprise IT Leader',
      designation: 'Operations Head',
      image: '/output/generated-assets/ds_1776861181853_5ad98e3e/15-01fc6c95c0.jpg'
    },
    {
      quote:
        'The platform helps distributed teams stay productive with real-time editing, communication tools and centralized access across devices.',
      author: 'Digital Transformation Manager',
      designation: 'Enterprise Collaboration Lead',
      image: '/output/generated-assets/ds_1776861181853_5ad98e3e/13-a1af876bc5.png'
    },
    {
      quote:
        'For organizations looking for a secure and integrated workplace suite, Zoho Workplace offers a practical and scalable setup.',
      author: 'Business Technology Consultant',
      designation: 'Productivity Solutions Advisor',
      image: '/output/generated-assets/ds_1776861181853_5ad98e3e/15-01fc6c95c0.jpg'
    },
    {
      quote:
        'The admin controls, app integrations and collaboration experience make Zoho Workplace a strong fit for modern enterprise workflows.',
      author: 'System Administrator',
      designation: 'IT Infrastructure Manager',
      image: '/output/generated-assets/ds_1776861181853_5ad98e3e/13-a1af876bc5.png'
    },
    {
      quote:
        'Teams can move faster with less context switching because mail, files, messaging and meetings live in a single workspace.',
      author: 'Head of Workplace Strategy',
      designation: 'Enterprise Productivity Director',
      image: '/output/generated-assets/ds_1776861181853_5ad98e3e/15-01fc6c95c0.jpg'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.14 }
    );

    revealRef.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  const nextTestimonial = () => setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
  const prevTestimonial = () =>
    setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const addRevealRef = (el) => {
    if (el && !revealRef.current.includes(el)) revealRef.current.push(el);
  };

  const renderIcon = (type) => {
    const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none' };
    switch (type) {
      case 'collab':
        return (
          <svg {...common}>
            <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16.5 10a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3 19a5 5 0 0 1 10 0v1H3v-1ZM14 20v-1a4 4 0 0 1 7.2-2.4" stroke={brandPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        );
      case 'mobile':
        return (
          <svg {...common}>
            <rect x="7" y="2.5" width="10" height="19" rx="2.5" stroke={brandPrimary} strokeWidth="2"/>
            <path d="M10 5h4" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
            <circle cx="12" cy="18" r="1" fill={brandPrimary}/>
          </svg>
        );
      case 'ai':
        return (
          <svg {...common}>
            <path d="M12 3l2.1 4.9L19 10l-4.9 2.1L12 17l-2.1-4.9L5 10l4.9-2.1L12 3Z" stroke={brandPrimary} strokeWidth="2" strokeLinejoin="round"/>
            <circle cx="12" cy="10" r="1.5" fill="#1a1a1a"/>
          </svg>
        );
      case 'chat':
        return (
          <svg {...common}>
            <path d="M4 5h16v10H8l-4 4V5Z" stroke={brandPrimary} strokeWidth="2" strokeLinejoin="round"/>
            <path d="M8 9h8M8 12h5" stroke="#1a1a1a" strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'apps':
        return (
          <svg {...common}>
            <rect x="3" y="3" width="7" height="7" rx="2" fill={brandPrimary}/>
            <rect x="14" y="3" width="7" height="7" rx="2" fill="#ffb27a"/>
            <rect x="3" y="14" width="7" height="7" rx="2" fill="#1a1a1a"/>
            <rect x="14" y="14" width="7" height="7" rx="2" fill={brandPrimary}/>
          </svg>
        );
      case 'settings':
        return (
          <svg {...common}>
            <path d="M12 8.5A3.5 3.5 0 1 0 12 15.5A3.5 3.5 0 1 0 12 8.5Z" stroke={brandPrimary} strokeWidth="2"/>
            <path d="M19 12l2-1-1-3-2 .2-.9-1.6 1.2-1.7-2.2-2.2-1.7 1.2-1.6-.9.2-2-3-1-1 2h-2l-1-2-3 1 .2 2-1.6.9-1.7-1.2L2.7 4.9l1.2 1.7-.9 1.6-2-.2-1 3 2 1v2l-2 1 1 3 2-.2.9 1.6-1.2 1.7 2.2 2.2 1.7-1.2 1.6.9-.2 2 3 1 1-2h2l1 2 3-1-.2-2 1.6-.9 1.7 1.2 2.2-2.2-1.2-1.7.9-1.6 2 .2 1-3-2-1v-2Z" stroke="#1a1a1a" strokeWidth="1.2" strokeLinejoin="round"/>
          </svg>
        );
      case 'analytics':
        return (
          <svg {...common}>
            <path d="M4 20V10M10 20V4M16 20v-7M22 20v-12" stroke={brandPrimary} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'finance':
        return (
          <svg {...common}>
            <path d="M12 3v18M16 7.5c0-1.7-1.8-3-4-3s-4 1.3-4 3 1.8 3 4 3 4 1.3 4 3-1.8 3-4 3-4-1.3-4-3" stroke={brandPrimary} strokeWidth="2" strokeLinecap="round"/>
          </svg>
        );
      case 'automation':
        return (
          <svg {...common}>
            <path d="M5 12h5l-2-2m2 2-2 2M19 12h-5l2-2m-2 2 2 2" stroke={brandPrimary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            <rect x="3" y="5" width="5" height="5" rx="1.5" stroke="#1a1a1a" strokeWidth="2"/>
            <rect x="16" y="14" width="5" height="5" rx="1.5" stroke={brandPrimary} strokeWidth="2"/>
          </svg>
        );
      case 'suite':
        return (
          <svg {...common}>
            <rect x="4" y="4" width="16" height="16" rx="3" stroke={brandPrimary} strokeWidth="2"/>
            <path d="M8 8h3v3H8zM13 8h3v3h-3zM8 13h3v3H8zM13 13h3v3h-3z" fill="#1a1a1a"/>
          </svg>
        );
      default:
        return null;
    }
  };

  const currentTestimonial = testimonials[testimonialIndex];

  const css = `
    :root{
      --primary:${brandPrimary};
      --accent:${accent};
      --bg:#f5f5f5;
      --white:#ffffff;
      --muted:#6b7280;
      --text:#202124;
      --border:rgba(0,0,0,0.08);
      --shadow:0 20px 60px rgba(16,24,40,0.08);
      --shadow-hover:0 25px 80px rgba(16,24,40,0.14);
      --radius:22px;
      --radius-sm:14px;
      --radius-lg:28px;
      --container:1200px;
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:var(--bg);font-family:'Inter',sans-serif;color:var(--text)}
    a{text-decoration:none;color:inherit}
    img{max-width:100%;display:block}
    .landing-page{overflow:hidden;background:#f5f5f5}
    .container{width:min(var(--container),calc(100% - 40px));margin:0 auto}
    .section{position:relative;padding:88px 0}
    .section.white{background:#fff}
    .section.soft{background:#f5f5f5}
    .section.dark{background:#121212;color:#fff}
    .reveal{opacity:0;transform:translateY(42px);transition:opacity .8s ease,transform .8s ease}
    .reveal.revealed{opacity:1;transform:translateY(0)}
    .badge-label{
      display:inline-flex;align-items:center;gap:8px;
      padding:8px 14px;border-radius:999px;
      background:rgba(255,255,255,.16);color:#fff;font-size:12px;
      letter-spacing:.12em;text-transform:uppercase;font-weight:700;
      border:1px solid rgba(255,255,255,.22)
    }
    .section-label{
      display:inline-flex;align-items:center;gap:8px;
      padding:8px 14px;border-radius:999px;background:rgba(255,107,0,.08);
      color:var(--primary);font-size:12px;letter-spacing:.12em;text-transform:uppercase;font-weight:800
    }
    h1,h2,h3,h4{font-family:'Plus Jakarta Sans',sans-serif;margin:0;color:inherit}
    h1{font-size:clamp(48px,6vw,68px);line-height:1.04;letter-spacing:-0.04em}
    h2{font-size:clamp(32px,4vw,46px);line-height:1.1;letter-spacing:-0.03em}
    h3{font-size:24px;line-height:1.2}
    p{margin:0;font-size:16px;line-height:1.75;color:inherit}
    .section-head{max-width:760px;margin-bottom:38px}
    .section-head p{color:#5f6368;margin-top:14px}
    .btn{
      display:inline-flex;align-items:center;justify-content:center;gap:10px;
      border:none;outline:none;cursor:pointer;
      border-radius:14px;padding:16px 24px;font-weight:700;
      transition:transform .25s ease,box-shadow .25s ease,background .25s ease,color .25s ease;
      font-size:15px
    }
    .btn:hover{transform:translateY(-2px);box-shadow:0 14px 34px rgba(0,0,0,.16)}
    .btn-primary{background:#fff;color:var(--primary)}
    .btn-dark{background:var(--accent);color:#fff}
    .btn-outline{
      background:transparent;color:#fff;border:1px solid rgba(255,255,255,.4)
    }
    .btn-full{width:100%}
    .sticky-nav{
      position:sticky;top:0;z-index:50;background:rgba(255,255,255,.92);
      backdrop-filter:blur(12px);border-bottom:1px solid rgba(0,0,0,.06)
    }
    .nav-inner{
      min-height:78px;display:grid;grid-template-columns:auto 1fr auto auto;align-items:center;gap:18px
    }
    .product-logo{
      display:flex;align-items:center;gap:12px;font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;color:#111
    }
    .product-logo-mark{
      width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,var(--primary),#ff9a4d);
      display:grid;place-items:center;color:#fff;font-weight:900;box-shadow:0 10px 28px rgba(255,107,0,.25)
    }
    .product-logo small{display:block;font-size:12px;color:#6b7280;font-weight:600}
    .nav-spacer{display:block}
    .tj-logo{height:34px;width:auto;justify-self:end}
    .hero{
      background:
        radial-gradient(circle at 85% 20%, rgba(255,255,255,.16), transparent 28%),
        radial-gradient(circle at 72% 82%, rgba(255,255,255,.1), transparent 22%),
        linear-gradient(180deg, #ff6b00 0%, #f85d00 100%);
      color:#fff;padding:46px 0 80px
    }
    .hero-grid{
      display:grid;grid-template-columns:1.02fr .98fr;gap:44px;align-items:center;min-height:calc(100vh - 120px)
    }
    .hero-copy p{max-width:620px;margin-top:18px;color:rgba(255,255,255,.92);font-size:18px}
    .supporting-line{
      margin-top:18px;font-weight:600;color:#fff;background:rgba(255,255,255,.12);
      display:inline-flex;padding:12px 16px;border-radius:14px;border:1px solid rgba(255,255,255,.18)
    }
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
    .hero-visual{
      position:relative;display:flex;align-items:center;justify-content:center;min-height:520px
    }
    .dashboard-shell{
      position:relative;width:100%;max-width:620px;background:rgba(255,255,255,.14);
      border:1px solid rgba(255,255,255,.18);backdrop-filter:blur(8px);
      padding:18px;border-radius:24px;box-shadow:0 30px 80px rgba(0,0,0,.2)
    }
    .browser-bar{
      display:flex;align-items:center;gap:8px;padding:2px 4px 14px
    }
    .browser-dot{width:10px;height:10px;border-radius:999px;background:rgba(255,255,255,.7)}
    .hero-shot{
      width:100%;max-height:480px;object-fit:contain;border-radius:12px;background:#fff
    }
    .float-chip{
      position:absolute;background:#fff;color:#111;padding:14px 16px;border-radius:18px;
      box-shadow:0 18px 45px rgba(18,18,18,.16);font-size:14px;font-weight:700;
      animation:floatY 5s ease-in-out infinite
    }
    .float-chip span{display:block;color:#6b7280;font-size:12px;font-weight:600;margin-top:4px}
    .chip-1{top:28px;right:20px;animation-delay:.1s}
    .chip-2{left:-8px;bottom:88px;animation-delay:.7s}
    .chip-3{right:-10px;bottom:28px;animation-delay:1.4s}
    .hero-panel-mini{
      position:absolute;left:10px;top:50px;width:132px;background:rgba(255,255,255,.18);
      border:1px solid rgba(255,255,255,.22);border-radius:18px;padding:12px;backdrop-filter:blur(10px);
      animation:floatY 6s ease-in-out infinite
    }
    .mini-line{height:8px;border-radius:999px;background:rgba(255,255,255,.9);margin-bottom:10px}
    .mini-line:last-child{margin-bottom:0;width:62%}
    .trust-strip{padding:28px 0}
    .trust-wrap{
      display:grid;grid-template-columns:260px 1fr;gap:24px;align-items:center
    }
    .trust-copy h3{font-size:20px}
    .trust-copy p{margin-top:8px;color:#6b7280}
    .trust-logos{
      display:grid;grid-template-columns:repeat(4,1fr);gap:18px
    }
    .trust-logo{
      background:#fff;border:1px solid var(--border);border-radius:16px;
      min-height:78px;display:flex;align-items:center;justify-content:center;
      padding:14px;box-shadow:var(--shadow);transition:all .25s ease;filter:grayscale(1);opacity:.72
    }
    .trust-logo:hover{filter:none;opacity:1;transform:translateY(-2px)}
    .trust-logo img{max-width:120px;max-height:34px;object-fit:contain}
    .feature-tabs{
      display:flex;gap:12px;flex-wrap:wrap;margin-bottom:28px
    }
    .tab-btn{
      padding:14px 18px;border-radius:14px;border:1px solid rgba(0,0,0,.08);
      background:#fff;color:#222;font-weight:700;cursor:pointer;
      transition:all .25s ease;box-shadow:0 6px 18px rgba(0,0,0,.04)
    }
    .tab-btn.active{
      background:var(--accent);color:#fff;border-color:var(--accent);transform:translateY(-1px)
    }
    .spotlight-wrap{
      display:grid;grid-template-columns:1.15fr .85fr;gap:28px;align-items:stretch
    }
    .spotlight-card,.preview-frame,.feature-mini-card,.insight-card,.pricing-card,.testimonial-card,.footer-card{
      box-shadow:var(--shadow)
    }
    .spotlight-card,.preview-frame{
      border-radius:24px;background:#fff;border:1px solid rgba(0,0,0,.06)
    }
    .spotlight-card{
      padding:34px;display:flex;flex-direction:column;justify-content:space-between;min-height:100%
    }
    .spotlight-main{
      display:flex;align-items:flex-start;gap:16px;margin-bottom:18px
    }
    .icon-badge{
      width:58px;height:58px;border-radius:16px;background:rgba(255,107,0,.12);
      display:grid;place-items:center;flex:0 0 auto
    }
    .spotlight-card p{color:#5f6368}
    .mini-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:18px}
    .feature-mini-card{
      background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:20px;padding:22px;
      transition:transform .25s ease, box-shadow .25s ease
    }
    .feature-mini-card:hover,.preview-frame:hover,.spotlight-card:hover,.insight-card:hover,.pricing-card:hover,.testimonial-card:hover{
      transform:translateY(-6px);box-shadow:var(--shadow-hover)
    }
    .feature-mini-card h4{font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;margin:12px 0 8px}
    .feature-mini-card p{color:#666;line-height:1.65;font-size:15px}
    .preview-frame{padding:16px;display:flex;flex-direction:column;justify-content:center}
    .preview-frame .browser-bar .browser-dot{background:#d1d5db}
    .preview-frame img{
      width:100%;height:100%;max-height:420px;object-fit:contain;border-radius:14px;background:#f8fafc
    }
    .dark-insight{
      position:relative;overflow:hidden
    }
    .dark-insight::before{
      content:'';position:absolute;inset:0;
      background-image:url('/output/generated-assets/ds_1776861181853_5ad98e3e/31-a0abc94658.jpeg');
      background-size:cover;background-position:center;opacity:.28
    }
    .dark-insight::after{
      content:'';position:absolute;inset:0;
      background:linear-gradient(180deg, rgba(12,12,12,.9), rgba(16,16,16,.94))
    }
    .dark-insight .container{position:relative;z-index:1}
    .insight-grid{
      display:grid;grid-template-columns:repeat(4,1fr);gap:20px
    }
    .insight-card{
      position:relative;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);
      backdrop-filter:blur(10px);border-radius:22px;padding:24px;color:#fff
    }
    .insight-value{
      font-family:'Plus Jakarta Sans',sans-serif;font-size:42px;font-weight:800;color:#fff;margin-bottom:10px
    }
    .insight-card h3{font-size:20px;margin-bottom:8px}
    .insight-card p{color:rgba(255,255,255,.8);font-size:15px}
    .why-box{
      background:linear-gradient(135deg,#fff 0%,#fff8f2 100%);
      border:1px solid rgba(255,107,0,.1);border-radius:24px;padding:32px;
      display:grid;grid-template-columns:repeat(4,1fr);gap:18px
    }
    .why-item{
      background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:18px;padding:22px
    }
    .why-item strong{
      display:block;font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;margin-bottom:8px
    }
    .why-item p{color:#666;font-size:15px}
    .pricing-center{display:flex;justify-content:center}
    .pricing-card{
      width:min(760px,100%);background:#fff;border:1px solid rgba(0,0,0,.06);
      border-radius:28px;padding:36px;position:relative;overflow:hidden
    }
    .pricing-card::before{
      content:'';position:absolute;right:-60px;top:-60px;width:220px;height:220px;border-radius:50%;
      background:radial-gradient(circle, rgba(255,107,0,.15), transparent 65%)
    }
    .green-badge{
      display:inline-flex;background:#e8fff0;color:#118a43;border:1px solid #b9efca;
      padding:8px 12px;border-radius:999px;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em
    }
    .pricing-top{display:flex;align-items:flex-start;justify-content:space-between;gap:20px;margin-bottom:18px}
    .pricing-title h3{font-size:30px}
    .pricing-sub{color:#666;margin-top:8px}
    .price-row{display:flex;align-items:baseline;gap:12px;flex-wrap:wrap;margin:18px 0 24px}
    .price-original{text-decoration:line-through;color:#8b8b8b;font-weight:700}
    .price-current{font-family:'Plus Jakarta Sans',sans-serif;font-size:42px;font-weight:800;color:#111}
    .pricing-grid{
      display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin:26px 0 28px
    }
    .check-item{
      display:flex;align-items:flex-start;gap:10px;background:#fafafa;border:1px solid rgba(0,0,0,.06);
      border-radius:14px;padding:14px 16px;color:#333
    }
    .check-dot{
      width:22px;height:22px;border-radius:999px;background:rgba(17,138,67,.12);color:#118a43;
      display:grid;place-items:center;font-weight:900;flex:0 0 auto
    }
    .testimonial-shell{
      display:grid;grid-template-columns:180px 1fr;gap:24px;align-items:center
    }
    .testimonial-side{
      display:flex;justify-content:center
    }
    .testimonial-avatar{
      width:148px;height:148px;border-radius:28px;overflow:hidden;border:1px solid rgba(0,0,0,.06);background:#fff;
      box-shadow:var(--shadow)
    }
    .testimonial-avatar img{width:100%;height:100%;object-fit:cover}
    .testimonial-card{
      background:#fff;border:1px solid rgba(0,0,0,.06);border-radius:26px;padding:34px;position:relative;min-height:280px
    }
    .quote-mark{
      font-size:64px;line-height:1;color:var(--primary);font-family:'Plus Jakarta Sans',sans-serif;font-weight:800
    }
    .stars{color:#f5b301;font-size:22px;letter-spacing:2px;margin:10px 0 16px}
    .testimonial-card p{font-size:18px;color:#444;max-width:760px}
    .author{margin-top:22px}
    .author strong{display:block;font-size:18px;font-family:'Plus Jakarta Sans',sans-serif}
    .author span{display:block;color:#7b7b7b;margin-top:4px}
    .carousel-controls{
      display:flex;gap:12px;margin-top:22px
    }
    .carousel-btn{
      width:48px;height:48px;border-radius:999px;border:1px solid rgba(0,0,0,.08);
      background:#fff;cursor:pointer;font-size:22px;font-weight:700;transition:all .25s ease
    }
    .carousel-btn:hover{transform:translateY(-2px);box-shadow:var(--shadow)}
    .dots{display:flex;gap:8px;align-items:center;margin-top:18px}
    .dot{
      width:10px;height:10px;border-radius:999px;background:#d1d5db;transition:all .25s ease
    }
    .dot.active{width:28px;background:var(--primary)}
    .footer{
      background:#101114;color:#fff;padding:42px 0 26px
    }
    .footer-card{
      background:linear-gradient(180deg, rgba(255,255,255,.04), rgba(255,255,255,.02));
      border:1px solid rgba(255,255,255,.08);border-radius:24px;padding:28px
    }
    .footer-grid{
      display:grid;grid-template-columns:1.1fr .8fr .8fr;gap:24px
    }
    .footer-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:20px;font-weight:800;margin-bottom:10px}
    .footer p,.footer a{color:rgba(255,255,255,.76);font-size:15px;line-height:1.75}
    .footer-links{display:flex;flex-direction:column;gap:10px}
    .footer-bottom{
      margin-top:24px;padding-top:18px;border-top:1px solid rgba(255,255,255,.08);
      display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap
    }
    @keyframes floatY{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(-12px)}
    }
    @media (max-width: 1100px){
      .hero-grid,.spotlight-wrap,.testimonial-shell,.trust-wrap,.footer-grid{grid-template-columns:1fr}
      .hero{padding-top:30px}
      .nav-inner{grid-template-columns:auto 1fr auto;gap:14px}
      .tj-logo{display:none}
      .trust-logos{grid-template-columns:repeat(4,1fr)}
      .insight-grid,.why-box{grid-template-columns:repeat(2,1fr)}
      .testimonial-side{justify-content:flex-start}
    }
    @media (max-width: 767px){
      .section{padding:68px 0}
      .container{width:min(100% - 24px, 1200px)}
      .nav-inner{grid-template-columns:1fr auto}
      .nav-spacer,.tj-logo{display:none}
      .hero-grid{gap:28px;min-height:auto}
      .hero-copy p{font-size:16px}
      .hero-actions{flex-direction:column;align-items:stretch}
      .hero-visual{min-height:auto}
      .dashboard-shell{padding:12px;border-radius:20px}
      .float-chip{position:static;margin-top:12px}
      .chip-1,.chip-2,.chip-3{animation:none}
      .hero-panel-mini{display:none}
      .trust-logos{grid-template-columns:repeat(2,1fr)}
      .mini-grid,.pricing-grid,.insight-grid,.why-box{grid-template-columns:1fr}
      .pricing-card{padding:24px}
      .pricing-top{flex-direction:column}
      .testimonial-avatar{width:112px;height:112px}
      .testimonial-card{padding:24px;min-height:auto}
      .testimonial-card p{font-size:16px}
    }
  `;

  return (
    <div className="landing-page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="sticky-nav">
        <div className="container nav-inner">
          <div className="product-logo">
            <div className="product-logo-mark">Z</div>
            <div>
              Zoho Workplace
              <small>Email & Collaboration Suite</small>
            </div>
          </div>
          <div className="nav-spacer" />
          <img
            className="tj-logo"
            src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
            alt="Techjockey"
          />
          <a href="#pricing" className="btn btn-dark">Get Started</a>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-grid">
          <div className="hero-copy reveal" ref={addRevealRef}>
            <div className="badge-label">Enterprise Collaboration Suite</div>
            <h1 style={{ marginTop: 18 }}>
              Elevate Your Team’s Productivity with{' '}
              <span style={{ color: accent }}>Zoho Workplace</span>
            </h1>
            <p>
              A Complete Email & Collaboration Suite for Enterprises that facilitates
              unified communication.
            </p>
            <div className="supporting-line">
              Easy Setup & Quick Onboarding • Made in India • 24x7 Support • Free Trial
            </div>
            <div className="hero-actions">
              <a href="#pricing" className="btn btn-primary">Get Started</a>
              <a href="#products" className="btn btn-outline">Explore Features</a>
            </div>
          </div>

          <div className="hero-visual reveal" ref={addRevealRef}>
            <div className="hero-panel-mini">
              <div className="mini-line" />
              <div className="mini-line" style={{ width: '78%' }} />
              <div className="mini-line" />
            </div>
            <div className="dashboard-shell">
              <div className="browser-bar">
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="browser-dot" />
              </div>
              <img
                className="hero-shot"
                src="/output/generated-assets/ds_1776861181853_5ad98e3e/28-d3dcf89243.png"
                alt="Zoho Workplace dashboard"
              />
            </div>
            <div className="float-chip chip-1">
              100,000+ Businesses
              <span>Global trust signal</span>
            </div>
            <div className="float-chip chip-2">
              AI Productivity
              <span>Zia writing assistance</span>
            </div>
            <div className="float-chip chip-3">
              Anywhere Access
              <span>Android • iOS • Windows • Mac</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section white trust-strip">
        <div className="container trust-wrap reveal" ref={addRevealRef}>
          <div className="trust-copy">
            <h3>Trusted by 100,000+ Businesses Globally</h3>
            <p>Enterprise teams rely on Zoho Workplace to unify communication and collaboration.</p>
          </div>
          <div className="trust-logos">
            {trustLogos.map((logo, index) => (
              <div className="trust-logo" key={index}>
                <img src={logo} alt={`Trusted logo ${index + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="products" className="section soft">
        <div className="container">
          <div className="section-head reveal" ref={addRevealRef}>
            <div className="section-label">Products</div>
            <h2 style={{ marginTop: 16 }}>Explore What Makes Zoho Workplace Enterprise Ready</h2>
            <p>
              From integrated communication to app connectivity, Zoho Workplace gives your
              teams a modern digital workspace designed for operational speed and control.
            </p>
          </div>

          <div className="feature-tabs reveal" ref={addRevealRef}>
            {featureSections.map((section, index) => (
              <button
                key={index}
                className={`tab-btn ${activeFeatureSection === index ? 'active' : ''}`}
                onClick={() => setActiveFeatureSection(index)}
                type="button"
              >
                {section.name || section.headline}
              </button>
            ))}
          </div>

          <div className="spotlight-wrap reveal" ref={addRevealRef}>
            <div>
              <div className="spotlight-card">
                <div>
                  <div className="section-label">{featureSections[activeFeatureSection].label}</div>
                  <div className="spotlight-main" style={{ marginTop: 18 }}>
                    <div className="icon-badge">{renderIcon('apps')}</div>
                    <div>
                      <h3>{featureSections[activeFeatureSection].headline}</h3>
                      <p style={{ marginTop: 10 }}>
                        {featureSections[activeFeatureSection].description}
                      </p>
                    </div>
                  </div>
                  <div
                    style={{
                      marginTop: 24,
                      background: '#fff8f2',
                      border: '1px solid rgba(255,107,0,.12)',
                      borderRadius: '18px',
                      padding: '20px'
                    }}
                  >
                    <h3 style={{ fontSize: 22 }}>
                      {featureSections[activeFeatureSection].spotlight.title}
                    </h3>
                    <p style={{ marginTop: 10 }}>
                      {featureSections[activeFeatureSection].spotlight.description}
                    </p>
                  </div>
                </div>

                <div className="mini-grid">
                  {featureSections[activeFeatureSection].items.map((item, idx) => (
                    <div className="feature-mini-card" key={idx}>
                      <div className="icon-badge" style={{ width: 50, height: 50 }}>
                        {renderIcon(item.icon)}
                      </div>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="preview-frame">
              <div className="browser-bar">
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="browser-dot" />
              </div>
              <img
                src={featureSections[activeFeatureSection].image}
                alt={featureSections[activeFeatureSection].headline}
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section dark dark-insight">
        <div className="container">
          <div className="section-head reveal" ref={addRevealRef}>
            <div className="section-label" style={{ background: 'rgba(255,255,255,.08)', color: '#fff' }}>
              Insight
            </div>
            <h2 style={{ marginTop: 16, color: '#fff' }}>Performance Beyond Limits with Zoho Workplace</h2>
            <p style={{ color: 'rgba(255,255,255,.78)' }}>
              Real business feedback highlights the platform’s value across security,
              remote access, usability and collaboration.
            </p>
          </div>

          <div className="insight-grid reveal" ref={addRevealRef}>
            {insights.map((item, index) => (
              <div className="insight-card" key={index}>
                <div className="insight-value">{item.value}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="section-head reveal" ref={addRevealRef}>
            <div className="section-label">Why Techjockey</div>
            <h2 style={{ marginTop: 16 }}>Why Buy Through Techjockey</h2>
            <p>
              Get expert guidance, product comparison help and onboarding support to make
              the right enterprise software decision faster.
            </p>
          </div>
          <div className="why-box reveal" ref={addRevealRef}>
            <div className="why-item">
              <strong>Expert Consultation</strong>
              <p>Get tailored recommendations based on your team size, use case and deployment needs.</p>
            </div>
            <div className="why-item">
              <strong>Implementation Support</strong>
              <p>Reduce friction during setup with guided onboarding and migration assistance.</p>
            </div>
            <div className="why-item">
              <strong>Vendor Coordination</strong>
              <p>Work with one trusted partner for demos, comparisons, procurement and follow-ups.</p>
            </div>
            <div className="why-item">
              <strong>Faster Decision Making</strong>
              <p>Compare capabilities, shortlist quickly and move from evaluation to activation with confidence.</p>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section soft">
        <div className="container">
          <div className="section-head reveal" ref={addRevealRef}>
            <div className="section-label">Pricing</div>
            <h2 style={{ marginTop: 16 }}>{'Create a Secure Digital Workspace'}</h2>
            <p>
              Choose a business-ready collaboration environment with enterprise email,
              shared storage, communication tools and document management in one suite.
            </p>
          </div>

          <div className="pricing-center reveal" ref={addRevealRef}>
            <div className="pricing-card">
              <div className="pricing-top">
                <div className="pricing-title">
                  <div className="green-badge">{pricingPlan.discount}</div>
                  <h3 style={{ marginTop: 14 }}>{pricingPlan.name}</h3>
                  <p className="pricing-sub">Unified email, chat, meetings, files and office apps for enterprises</p>
                </div>
                <div className="price-row">
                  <span className="price-original">{pricingPlan.originalPrice}</span>
                  <span className="price-current">{pricingPlan.price}</span>
                </div>
              </div>

              <div className="pricing-grid">
                {pricingPlan.includes.map((item, idx) => (
                  <div className="check-item" key={idx}>
                    <div className="check-dot">✓</div>
                    <div>{item}</div>
                  </div>
                ))}
              </div>

              <a href="#top" className="btn btn-dark btn-full">
                {pricingPlan.cta}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section white">
        <div className="container">
          <div className="section-head reveal" ref={addRevealRef}>
            <div className="section-label">Testimonials</div>
            <h2 style={{ marginTop: 16 }}>What Enterprise Teams Value Most</h2>
            <p>
              Business users appreciate how Zoho Workplace centralizes communication,
              collaboration and productivity in one secure workspace.
            </p>
          </div>

          <div className="testimonial-shell reveal" ref={addRevealRef}>
            <div className="testimonial-side">
              <div className="testimonial-avatar">
                <img src={currentTestimonial.image} alt={currentTestimonial.author} />
              </div>
            </div>

            <div>
              <div className="testimonial-card">
                <div className="quote-mark">❝</div>
                <div className="stars">★★★★★</div>
                <p>{currentTestimonial.quote}</p>
                <div className="author">
                  <strong>{currentTestimonial.author}</strong>
                  <span>{currentTestimonial.designation}</span>
                </div>
              </div>

              <div className="carousel-controls">
                <button className="carousel-btn" onClick={prevTestimonial} type="button" aria-label="Previous testimonial">
                  ‹
                </button>
                <button className="carousel-btn" onClick={nextTestimonial} type="button" aria-label="Next testimonial">
                  ›
                </button>
              </div>

              <div className="dots">
                {testimonials.map((_, idx) => (
                  <span
                    key={idx}
                    className={`dot ${idx === testimonialIndex ? 'active' : ''}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-card">
            <div className="footer-grid">
              <div>
                <div className="footer-title">Techjockey</div>
                <p>
                  Techjockey helps businesses discover, compare and buy the right software
                  with expert assistance, implementation guidance and end-to-end buying support.
                </p>
              </div>
              <div>
                <div className="footer-title">Product</div>
                <div className="footer-links">
                  <a href="#products">Features</a>
                  <a href="#pricing">Pricing</a>
                  <a href="/">Zoho Workplace</a>
                </div>
              </div>
              <div>
                <div className="footer-title">Contact</div>
                <div className="footer-links">
                  <a href="tel:919205046404">+91 92050 46404</a>
                  <a href="https://www.techjockey.com/" target="_blank" rel="noreferrer">www.techjockey.com</a>
                  <a href="https://www.techjockey.com/contact-us" target="_blank" rel="noreferrer">Support & Assistance</a>
                </div>
              </div>
            </div>
            <div className="footer-bottom">
              <p>© 2026 Techjockey. All rights reserved.</p>
              <p>Zoho Workplace for Enterprises | Unified Email & Collaboration Suite</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;