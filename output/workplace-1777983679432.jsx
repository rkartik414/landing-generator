import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#ff6b00';
  const bodyBg = '#ffffff';

  const [activeTab, setActiveTab] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const sectionRefs = useRef([]);

  const ctaItems = [
    {
      text: 'get price',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software'
    },
    {
      text: 'get price',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software'
    }
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
      features: [
        {
          title: 'Zoho Apps',
          description: 'Zoho Meeting, Zoho Connect, Zoho Mail, Zoho Cliq, Zoho Writer, etc.'
        },
        {
          title: 'Analytics',
          description: 'Zoho Analytics, Google Analytics'
        },
        {
          title: 'Accounting & Finance',
          description: 'Zoho Invoice & Zoho Books'
        },
        {
          title: 'Automation',
          description: 'Zoho Flow, Zapier, viaSocket'
        },
        {
          title: 'Business Suites',
          description: 'Zoho One, Zoho Workspace'
        }
      ]
    },
    {
      label: 'INSIGHT',
      headline: 'Performance Beyond Limits with Zoho Workplace',
      description: '',
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
            'Enterprise-Grade Custom Email; Migration Assistance; Collaborative Office Suite; 30-GB Mail Storage Per User; File Storage Starts at 100 GB Per Team; File Sharing & Permissions; Team Chat; Document Management; Supported Device: Android, iOS, Windows, Mac'
        }
      ]
    }
  ];

  const testimonials = [
    {
      quote:
        'Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.',
      author: 'Amit Kapoor',
      role: 'IT Manager'
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      author: 'Saurav Singh',
      role: 'Head of Operations'
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      author: 'Shrimi Manchanda',
      role: 'Operations Manager'
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      author: 'Shweta Thakur',
      role: 'Senior System Administrator'
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      author: 'Narinder Sahni',
      role: 'IT Head'
    }
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
    const moveHandlers = [];
    const leaveHandlers = [];
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
      moveHandlers.push(move);
      leaveHandlers.push(leave);
      btn.addEventListener('mousemove', move);
      btn.addEventListener('mouseleave', leave);
    });
    return () => {
      btns.forEach((btn, index) => {
        btn.removeEventListener('mousemove', moveHandlers[index]);
        btn.removeEventListener('mouseleave', leaveHandlers[index]);
      });
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};}
    *{box-sizing:border-box}
    body{margin:0;background:${bodyBg};color:#111827;font-family:Inter,sans-serif}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .page-wrapper {
      animation: pageReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .landing-page{background:${bodyBg};overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .nav{position:sticky;top:0;z-index:50;background:rgba(17,24,39,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:18px;padding:14px 0}
    .brand-left{display:flex;align-items:center;gap:12px}
    .brand-text{font-weight:800;font-size:20px;color:var(--accent);font-family:"Plus Jakarta Sans",sans-serif}
    .nav-right-logo{display:flex;align-items:center;justify-content:center}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;border-radius:10px;background:var(--accent);color:#fff;font-weight:700;border:none;box-shadow:0 10px 24px rgba(255,107,0,.22);text-transform:capitalize;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 16px 28px rgba(255,107,0,.28);background:#e95f00}
    .hero{background:
      linear-gradient(180deg,#fff7f0 0%,#fff 100%),
      linear-gradient(rgba(255,107,0,.05) 1px, transparent 1px),
      linear-gradient(90deg, rgba(255,107,0,.05) 1px, transparent 1px);
      background-size:auto,40px 40px,40px 40px;
      padding:72px 0 56px;
      position:relative
    }
    .hero:before,.hero:after{content:'';position:absolute;border-radius:50%;pointer-events:none}
    .hero:before{width:320px;height:320px;right:-80px;top:-40px;background:radial-gradient(circle, rgba(255,107,0,.14) 0%, transparent 70%)}
    .hero:after{width:260px;height:260px;left:-70px;bottom:-50px;background:radial-gradient(circle, rgba(228,41,43,.08) 0%, transparent 70%)}
    .hero-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:40px;align-items:center}
    .hero h1{font:800 clamp(48px,6vw,66px)/1.02 "Plus Jakarta Sans",sans-serif;letter-spacing:-.03em;margin:0 0 18px}
    .gradient-text{background:linear-gradient(135deg,#ff6b00 0%,#e4292b 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-sub{font-size:18px;line-height:1.75;color:#4b5563;max-width:620px}
    .hero-chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(255,107,0,.25);background:rgba(255,107,0,.08);color:#374151;font-size:13px;font-weight:600}
    .hero-cta{display:flex;gap:14px;margin-top:28px}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center}
    .hero-ui{position:relative;width:100%;max-width:560px;height:520px}
    .ui-shell{position:absolute;inset:40px 30px 40px 30px;background:#fff;border:1px solid #eee;border-radius:24px;box-shadow:0 30px 80px rgba(17,24,39,.12);overflow:hidden}
    .ui-top{height:56px;border-bottom:1px solid #eef2f7;display:flex;align-items:center;justify-content:space-between;padding:0 18px;background:#fff}
    .dots{display:flex;gap:8px}
    .dots span{width:10px;height:10px;border-radius:50%;background:#e5e7eb}
    .ui-title{font:700 14px "Plus Jakarta Sans",sans-serif;color:#374151}
    .ui-body{display:grid;grid-template-columns:100px 1fr;height:calc(100% - 56px)}
    .ui-sidebar{background:#fff7f0;border-right:1px solid #f2e8df;padding:18px 12px;display:grid;gap:12px}
    .side-pill{height:34px;border-radius:10px;background:rgba(255,107,0,.12)}
    .ui-main{padding:18px;display:grid;grid-template-rows:auto auto 1fr;gap:16px;background:linear-gradient(180deg,#fff,#fffaf7)}
    .app-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
    .app-card{padding:16px;border-radius:16px;background:#fff;border:1px solid #f1f5f9;box-shadow:0 10px 24px rgba(15,23,42,.05)}
    .app-card h4{margin:10px 0 6px;font:700 14px "Plus Jakarta Sans",sans-serif}
    .app-card p{margin:0;color:#6b7280;font-size:12px;line-height:1.5}
    .panel-row{display:grid;grid-template-columns:1.2fr .8fr;gap:14px}
    .mail-panel,.meet-panel,.doc-panel{background:#fff;border:1px solid #eef2f7;border-radius:16px;padding:14px}
    .line{height:10px;border-radius:999px;background:#e5e7eb}
    .line.orange{background:linear-gradient(90deg, rgba(255,107,0,.85), rgba(255,107,0,.25))}
    .line.short{width:46%}
    .line.mid{width:72%}
    .stack{display:grid;gap:10px}
    .floating-card{position:absolute;background:#fff;border:1px solid rgba(255,107,0,.12);border-radius:18px;padding:14px 16px;box-shadow:0 18px 36px rgba(17,24,39,.10)}
    .floating-card strong{display:block;font:800 18px "Plus Jakarta Sans",sans-serif}
    .floating-card span{font-size:12px;color:#6b7280}
    .float-1{left:-4px;top:32px;animation:float 5s ease-in-out infinite}
    .float-2{right:-8px;top:96px;animation:float 6s ease-in-out infinite}
    .float-3{right:20px;bottom:12px;animation:float 5.5s ease-in-out infinite}
    .trust{background:#fff;padding:22px 0;border-top:1px solid #f3f4f6;border-bottom:1px solid #f3f4f6}
    .trust-grid{display:grid;grid-template-columns:1.1fr 1fr;gap:18px;align-items:center}
    .trust-metric{display:flex;align-items:center;gap:16px;padding:18px 20px;background:#fff;border:1px solid #e5e7eb;border-radius:18px;box-shadow:0 10px 24px rgba(15,23,42,.04)}
    .trust-big{font:800 38px "Plus Jakarta Sans",sans-serif;color:var(--accent)}
    .trust-copy{font-size:16px;color:#374151;font-weight:600}
    .proof-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
    .proof-chip{padding:16px;border:1px solid #e5e7eb;border-radius:16px;background:#fafafa;text-align:center}
    .proof-chip strong{display:block;font:800 18px "Plus Jakarta Sans",sans-serif;color:#111827}
    .proof-chip span{font-size:12px;color:#6b7280}
    section{transition:background-color 0.4s ease}
    .products{background:#f8fafc;padding:78px 0}
    .section-head{text-align:center;max-width:860px;margin:0 auto 32px}
    .section-head h2{font:800 clamp(32px,4vw,44px)/1.1 "Plus Jakarta Sans",sans-serif;margin:0 0 14px}
    .section-head p{margin:0;color:#4b5563;line-height:1.8;font-size:17px}
    .tabs-layout{display:grid;grid-template-columns:330px 1fr;gap:24px;align-items:stretch}
    .tab-list{display:grid;gap:12px}
    .tab-btn{padding:18px;border:1px solid #e5e7eb;border-radius:18px;background:#fff;text-align:left;transition:.25s ease;cursor:pointer}
    .tab-btn.active{border-color:rgba(255,107,0,.3);box-shadow:0 14px 32px rgba(255,107,0,.10);background:#fff7f0}
    .tab-btn small{display:block;color:var(--accent);font-weight:800;letter-spacing:.06em;margin-bottom:8px}
    .tab-btn h3{margin:0;font:700 18px/1.35 "Plus Jakarta Sans",sans-serif}
    .tab-panel{background:#fff;border:1px solid #e5e7eb;border-radius:26px;padding:28px;box-shadow:0 18px 40px rgba(15,23,42,.05)}
    .tab-panel-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:24px;align-items:center}
    .desc-block{border-left:3px solid rgba(255,107,0,.2);padding-left:16px;color:#4b5563;line-height:1.8}
    .feature-list{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin-top:22px}
    .feature-card{padding:18px;border:1px solid #edf2f7;border-radius:18px;background:linear-gradient(180deg,#fff,#fffaf7)}
    .feature-card h4{margin:10px 0 8px;font:700 16px "Plus Jakarta Sans",sans-serif}
    .feature-card p{margin:0;color:#6b7280;line-height:1.7;font-size:14px}
    .icon-wrap{width:42px;height:42px;border-radius:12px;background:rgba(255,107,0,.10);display:flex;align-items:center;justify-content:center}
    .preview-shell{min-height:420px;border-radius:22px;background:linear-gradient(180deg,#111827,#1f2937);padding:18px;position:relative;overflow:hidden}
    .preview-shell.light{background:linear-gradient(180deg,#fff7f0,#ffffff);border:1px solid #f3e6db}
    .preview-inner{height:100%;display:grid;gap:14px}
    .preview-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
    .mini-panel{background:#fff;border-radius:16px;padding:14px;border:1px solid rgba(255,255,255,.1)}
    .mini-panel.dark{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.08)}
    .mini-panel h5{margin:0 0 8px;font:700 14px "Plus Jakarta Sans",sans-serif}
    .mini-panel p{margin:0;font-size:12px;line-height:1.6;color:#6b7280}
    .mini-panel.dark p,.mini-panel.dark h5{color:#fff}
    .metric-row{display:grid;grid-template-columns:repeat(4,1fr);gap:12px}
    .metric-card{padding:16px;border-radius:16px;background:#fff;border:1px solid #edf2f7}
    .metric-card strong{display:block;font:800 24px "Plus Jakarta Sans",sans-serif;color:var(--accent)}
    .metric-card span{font-size:12px;color:#6b7280}
    .secure-section{background:#ffffff;padding:78px 0}
    .secure-grid{display:grid;grid-template-columns:1fr 1fr;gap:26px;align-items:center}
    .secure-panel{background:#fff;border:1px solid #e5e7eb;border-radius:26px;padding:26px;box-shadow:0 18px 40px rgba(15,23,42,.05)}
    .include-list{display:grid;gap:12px;margin-top:20px}
    .include-item{display:flex;gap:12px;align-items:flex-start;padding:12px 14px;border-radius:14px;background:#fafafa;border:1px solid #eee}
    .pricing{background:#f8fafc;padding:78px 0}
    .pricing-wrap{max-width:760px;margin:0 auto}
    .pricing-card{background:#fff;border:2px solid rgba(255,107,0,.18);border-radius:28px;padding:30px;box-shadow:0 24px 60px rgba(255,107,0,.10);position:relative}
    .badge-green{display:inline-block;padding:8px 12px;background:#e8f8ec;color:#138a36;border-radius:999px;font-size:12px;font-weight:700;margin-bottom:18px}
    .plan-title{font:800 34px "Plus Jakarta Sans",sans-serif;margin:0 0 10px}
    .price-row{display:flex;align-items:end;gap:10px;margin:10px 0 24px}
    .strike{color:#9ca3af;text-decoration:line-through}
    .price-main{font:800 42px "Plus Jakarta Sans",sans-serif;color:#111827}
    .price-note{color:#6b7280}
    .pricing-features{display:grid;gap:12px;margin:0 0 26px;padding:0;list-style:none}
    .pricing-features li{display:flex;gap:12px;align-items:flex-start;padding:12px 14px;background:#fff7f0;border:1px solid #f6dfd0;border-radius:14px;color:#374151}
    .pricing-cta{width:100%;text-align:center}
    .testimonials{background:#fff;padding:78px 0}
    .testimonial-wrap{max-width:860px;margin:0 auto}
    .testimonial-card{position:relative;border:1px solid #e5e7eb;border-radius:28px;padding:34px;background:#fff;box-shadow:0 18px 40px rgba(15,23,42,.05)}
    .quote-mark{font:800 72px/1 "Plus Jakarta Sans",sans-serif;color:rgba(255,107,0,.16);position:absolute;top:18px;left:22px}
    .testimonial-text{position:relative;font-size:21px;line-height:1.8;color:#1f2937;padding-top:28px;margin:0 0 26px}
    .t-footer{display:flex;justify-content:space-between;align-items:center;gap:18px}
    .author{display:flex;align-items:center;gap:14px}
    .avatar{width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--accent);color:#fff;font:800 20px "Plus Jakarta Sans",sans-serif}
    .author h4{margin:0;font:800 18px "Plus Jakarta Sans",sans-serif}
    .author span{color:#6b7280;font-size:14px}
    .stars{color:#f4b400;font-size:18px;letter-spacing:2px}
    .slider-controls{display:flex;justify-content:space-between;align-items:center;margin-top:20px}
    .dots-row{display:flex;gap:8px}
    .dot{width:10px;height:10px;border-radius:999px;background:#e5e7eb;border:none;cursor:pointer;transition:.25s ease}
    .dot.active{width:26px;background:var(--accent)}
    .arrow-btn{width:44px;height:44px;border-radius:50%;border:1px solid #e5e7eb;background:#fff;cursor:pointer;font-size:20px}
    .footer{background:#111827;color:#fff;padding:34px 0}
    .footer-grid{display:grid;grid-template-columns:1.1fr 1fr auto;gap:22px;align-items:start}
    .footer p,.footer a{color:rgba(255,255,255,.78);font-size:14px}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .social-icon{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08)}
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
    @keyframes float{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(-10px)}
    }
    @media (max-width: 991px){
      .hero-grid,.tabs-layout,.tab-panel-grid,.secure-grid,.trust-grid,.footer-grid{grid-template-columns:1fr}
      .nav-inner{grid-template-columns:1fr auto auto}
      .proof-grid,.feature-list,.metric-row,.preview-grid{grid-template-columns:1fr 1fr}
      .hero{padding-top:54px}
      .hero-visual{min-height:auto}
      .hero-ui{height:460px}
    }
    @media (max-width: 640px){
      .container{width:min(100% - 20px,1180px)}
      .nav-inner{gap:10px}
      .animated-cta{padding:10px 16px;font-size:14px}
      .hero h1{font-size:48px}
      .hero-sub{font-size:16px}
      .hero-cta{flex-direction:column;align-items:flex-start}
      .proof-grid,.feature-list,.metric-row{grid-template-columns:1fr}
      .tab-panel,.secure-panel,.pricing-card,.testimonial-card{padding:20px}
      .trust-big{font-size:30px}
      .testimonial-text{font-size:18px}
      .t-footer,.slider-controls{flex-direction:column;align-items:flex-start}
    }
  `;

  const renderIcon = index => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {index % 4 === 0 && <path d="M4 7.5C4 6.11929 5.11929 5 6.5 5H17.5C18.8807 5 20 6.11929 20 7.5V16.5C20 17.8807 18.8807 19 17.5 19H6.5C5.11929 19 4 17.8807 4 16.5V7.5Z" stroke={accent} strokeWidth="1.8"/ >}
      {index % 4 === 0 && <path d="M6.5 8L12 12L17.5 8" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>}
      {index % 4 === 1 && <path d="M7 5H17C18.1046 5 19 5.89543 19 7V17C19 18.1046 18.1046 19 17 19H7C5.89543 19 5 18.1046 5 17V7C5 5.89543 5.89543 5 7 5Z" stroke={accent} strokeWidth="1.8"/ >}
      {index % 4 === 1 && <path d="M8 12H16M8 8H13M8 16H12" stroke={accent} strokeWidth="1.8" strokeLinecap="round"/>}
      {index % 4 === 2 && <path d="M12 5L19 9V15L12 19L5 15V9L12 5Z" stroke={accent} strokeWidth="1.8"/ >}
      {index % 4 === 2 && <path d="M12 12L19 9M12 12L5 9M12 12V19" stroke={accent} strokeWidth="1.8" strokeLinecap="round"/>}
      {index % 4 === 3 && <path d="M12 7V12L15 15M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>}
    </svg>
  );

  const initials = name =>
    name
      .split(' ')
      .map(n => n[0])
      .slice(0, 2)
      .join('');

  const currentSection = productSections[activeTab];

  return (
    <div className="landing-page page-wrapper">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand-left">
            <span className="brand-text">Zoho Workplace</span>
          </div>
          <div className="nav-right-logo">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <a
            href={ctaItems[0].href}
            className="animated-cta btn-magnetic"
            aria-label={ctaItems[0].text}
          >
            {ctaItems[0].text}
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1 className="hero-headline">
              Elevate Your Team’s Productivity with <span className="gradient-text">Zoho Workplace</span>
            </h1>
            <p className="hero-sub">
              A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified Communication.
            </p>

            <div className="hero-chips">
              {[
                'Email',
                'Chat',
                'Documents',
                'Meetings',
                'Storage'
              ].map((chip, i) => (
                <div className="chip" key={chip}>
                  {renderIcon(i)}
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-cta">
              <a
                href={ctaItems[1].href}
                className="animated-cta btn-magnetic"
                aria-label={ctaItems[1].text}
              >
                {ctaItems[1].text}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-ui reveal-scale visible">
              <div className="floating-card float-1">
                <strong>100,000+</strong>
                <span>Trusted by 100,000+ Businesses Globally</span>
              </div>
              <div className="floating-card float-2">
                <strong>Email + Chat</strong>
                <span>Unified communication</span>
              </div>
              <div className="floating-card float-3">
                <strong>Docs + Meetings</strong>
                <span>One workspace</span>
              </div>

              <div className="ui-shell">
                <div className="ui-top">
                  <div className="dots">
                    <span />
                    <span />
                    <span />
                  </div>
                  <div className="ui-title">Zoho Workplace</div>
                  <div className="chip" style={{ marginTop: 0, padding: '6px 10px', fontSize: 11 }}>
                    Suite
                  </div>
                </div>

                <div className="ui-body">
                  <div className="ui-sidebar">
                    <div className="side-pill" />
                    <div className="side-pill" />
                    <div className="side-pill" />
                    <div className="side-pill" />
                    <div className="side-pill" />
                  </div>

                  <div className="ui-main">
                    <div className="app-grid">
                      {['Mail', 'Cliq', 'Writer'].map((item, i) => (
                        <div className="app-card hover-card" key={item}>
                          <div className="icon-wrap">{renderIcon(i)}</div>
                          <h4>{item}</h4>
                          <p>{i === 0 ? 'Unified inbox and business communication' : i === 1 ? 'Team chat and collaboration' : 'Documents with live editing'}</p>
                        </div>
                      ))}
                    </div>

                    <div className="panel-row">
                      <div className="mail-panel">
                        <div className="stack">
                          <div className="line orange" />
                          <div className="line mid" />
                          <div className="line" />
                          <div className="line short" />
                        </div>
                      </div>
                      <div className="meet-panel">
                        <div className="stack">
                          <div className="line orange" />
                          <div className="line" />
                          <div className="line short" />
                        </div>
                      </div>
                    </div>

                    <div className="doc-panel">
                      <div className="stack">
                        <div className="line orange" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line mid" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust">
        <div className="container trust-grid reveal">
          <div className="trust-metric hover-card">
            <div className="trust-big">100,000+</div>
            <div className="trust-copy">Trusted by 100,000+ Businesses Globally</div>
          </div>
          <div className="proof-grid">
            <div className="proof-chip hover-card">
              <strong>Email</strong>
              <span>Email &amp; Collaboration Suite</span>
            </div>
            <div className="proof-chip hover-card">
              <strong>Teams</strong>
              <span>Unified communication</span>
            </div>
            <div className="proof-chip hover-card">
              <strong>Enterprise</strong>
              <span>Privacy-first workspace</span>
            </div>
          </div>
        </div>
      </section>

      <section className="products">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Explore <span className="gradient-text">Zoho Workplace</span>
            </h2>
            <p>
              A unified email, collaboration, and productivity platform for enterprises, businesses, and teams looking to work smarter together.
            </p>
          </div>

          <div className="tabs-layout">
            <div className="tab-list stagger-parent reveal-left">
              {productSections.map((section, index) => (
                <button
                  key={section.headline}
                  className={`tab-btn hover-card stagger-child ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  <small>{section.label}</small>
                  <h3>{section.headline}</h3>
                </button>
              ))}
            </div>

            <div className="tab-panel reveal-right">
              <div className="tab-panel-grid">
                <div>
                  <small style={{ color: accent, fontWeight: 800, letterSpacing: '.08em' }}>
                    {currentSection.label}
                  </small>
                  <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: 'clamp(32px,4vw,42px)', lineHeight: 1.1, margin: '10px 0 14px' }}>
                    {currentSection.headline}
                  </h2>
                  {currentSection.description ? (
                    <div className="desc-block">
                      <p style={{ margin: 0 }}>{currentSection.description}</p>
                    </div>
                  ) : null}

                  <div className="feature-list">
                    {currentSection.features.map((feature, idx) => (
                      <div className="feature-card hover-card reveal-scale" key={feature.title}>
                        <div className="icon-wrap">{renderIcon(idx)}</div>
                        <h4>{feature.title}</h4>
                        <p>{feature.description}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  {activeTab === 3 ? (
                    <div className="preview-shell light hover-card">
                      <div className="preview-inner">
                        <div className="metric-row">
                          <div className="metric-card">
                            <strong>82.9%</strong>
                            <span>Secure</span>
                          </div>
                          <div className="metric-card">
                            <strong>42.9%</strong>
                            <span>Anywhere Access</span>
                          </div>
                          <div className="metric-card">
                            <strong>28.6%</strong>
                            <span>Intuitive</span>
                          </div>
                          <div className="metric-card">
                            <strong>14.3%</strong>
                            <span>Collaborative</span>
                          </div>
                        </div>
                        <div className="preview-grid">
                          {currentSection.features.map((item, i) => (
                            <div className="mini-panel" key={item.title}>
                              <h5>{item.title}</h5>
                              <p>{item.description}</p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : activeTab === 2 ? (
                    <div className="preview-shell hover-card">
                      <div className="preview-inner">
                        <div className="preview-grid">
                          {currentSection.features.map((item, i) => (
                            <div className="mini-panel dark" key={item.title}>
                              <h5>{item.title}</h5>
                              <p>{item.description}</p>
                            </div>
                          ))}
                        </div>
                        <video autoPlay muted loop playsInline preload="auto" style={{ width: '100%', borderRadius: '16px', display: 'block', marginTop: 'auto' }}>
                          <source src="/output/generated-assets/ds_1777983371419_30e937b6/16-7f9baae9a1.mp4" type="video/mp4" />
                        </video>
                      </div>
                    </div>
                  ) : (
                    <div className="preview-shell light hover-card">
                      <div className="preview-inner">
                        <div className="preview-grid">
                          {currentSection.features.slice(0, 4).map((item, i) => (
                            <div className="mini-panel" key={item.title}>
                              <h5>{item.title}</h5>
                              <p>{item.description}</p>
                            </div>
                          ))}
                        </div>
                        <div className="mail-panel" style={{ marginTop: 'auto' }}>
                          <div className="stack">
                            <div className="line orange" />
                            <div className="line" />
                            <div className="line mid" />
                            <div className="line short" />
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="secure-section">
        <div className="container secure-grid">
          <div className="secure-panel reveal-left hover-card">
            <small style={{ color: accent, fontWeight: 800, letterSpacing: '.08em' }}>SECURITY</small>
            <h2 style={{ fontFamily: '"Plus Jakarta Sans", sans-serif', fontWeight: 800, fontSize: 'clamp(32px,4vw,42px)', lineHeight: 1.1, margin: '10px 0 14px' }}>
              Create a Secure Digital Workspace
            </h2>
            <p style={{ color: '#4b5563', lineHeight: 1.8, margin: 0 }}>
              Enjoy privacy-first, enterprise-grade cloud capabilities with strong spam protection, SSO, Directory, MFA, and a secure password manager.
            </p>
            <div className="include-list">
              {[
                'Enterprise-Grade Custom Email',
                'Migration Assistance',
                'Collaborative Office Suite',
                '30-GB Mail Storage Per User',
                'File Storage Starts at 100 GB Per Team',
                'File Sharing & Permissions',
                'Team Chat',
                'Document Management',
                'Supported Device: Android, iOS, Windows, Mac'
              ].map(item => (
                <div className="include-item" key={item}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flex: '0 0 auto', marginTop: 2 }}>
                    <path d="M20 6L9 17L4 12" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="secure-panel reveal-right hover-card" style={{ background: 'linear-gradient(180deg,#111827,#1f2937)', color: '#fff' }}>
            <video autoPlay muted loop playsInline preload="auto" style={{ width: '100%', borderRadius: '18px', display: 'block', marginBottom: 18 }}>
              <source src="https://www.zohowebstatic.com/sites/zweb/images/workplace/homepage/flexibility-video.mp4" type="video/mp4" />
            </video>
            <div className="preview-grid">
              <div className="mini-panel dark">
                <h5>SSO</h5>
                <p>Secure access for enterprise users.</p>
              </div>
              <div className="mini-panel dark">
                <h5>MFA</h5>
                <p>Extra protection for every account.</p>
              </div>
              <div className="mini-panel dark">
                <h5>Directory</h5>
                <p>Centralized identity and user control.</p>
              </div>
              <div className="mini-panel dark">
                <h5>Spam Protection</h5>
                <p>Safe and reliable communication.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="pricing">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Pricing for <span className="gradient-text">Zoho Workplace</span>
            </h2>
            <p>Enterprise-grade custom email, collaboration, storage, sharing, and document management in one plan.</p>
          </div>

          <div className="pricing-wrap">
            <div className="pricing-card reveal-scale hover-card">
              <span className="badge-green">Highlighted Plan</span>
              <h3 className="plan-title">Zoho Workplace</h3>
              <div className="price-row">
                <span className="strike">(was )</span>
                <span className="price-main"> </span>
                <span className="price-note">Includes</span>
              </div>

              <ul className="pricing-features">
                {[
                  'Enterprise-Grade Custom Email',
                  'Migration Assistance',
                  'Collaborative Office Suite',
                  '30-GB Mail Storage Per User',
                  'File Storage Starts at 100 GB Per Team',
                  'File Sharing & Permissions',
                  'Team Chat',
                  'Document Management',
                  'Supported Device: Android, iOS, Windows, Mac'
                ].map(item => (
                  <li key={item}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ flex: '0 0 auto', marginTop: 2 }}>
                      <path d="M20 6L9 17L4 12" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="pricing-cta">
                <div
                  className="animated-cta"
                  style={{ width: '100%', pointerEvents: 'none', opacity: 0.55 }}
                >
                  pricing available on request
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              What teams say about <span className="gradient-text">Zoho Workplace</span>
            </h2>
            <p>Real feedback from professionals using Zoho Workplace and buying through Techjockey.</p>
          </div>

          <div className="testimonial-wrap">
            <div className="testimonial-card reveal hover-card">
              <div className="quote-mark">❝</div>
              <p className="testimonial-text">{testimonials[activeTestimonial].quote}</p>

              <div className="t-footer">
                <div className="author">
                  <div className="avatar">{initials(testimonials[activeTestimonial].author)}</div>
                  <div>
                    <h4>{testimonials[activeTestimonial].author}</h4>
                    <span>{testimonials[activeTestimonial].role}</span>
                  </div>
                </div>
                <div className="stars">★★★★★</div>
              </div>
            </div>

            <div className="slider-controls">
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  className="arrow-btn"
                  onClick={() => setActiveTestimonial(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                  aria-label="Previous testimonial"
                >
                  ‹
                </button>
                <button
                  className="arrow-btn"
                  onClick={() => setActiveTestimonial(prev => (prev + 1) % testimonials.length)}
                  aria-label="Next testimonial"
                >
                  ›
                </button>
              </div>

              <div className="dots-row">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`dot ${i === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(i)}
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
          <div>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
              style={{ marginBottom: 14 }}
            />
            <p>support@techjockey.com</p>
            <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>

          <div>
            <div className="footer-links" style={{ marginBottom: 14 }}>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms">Terms</a>
            </div>
            <p>Zoho Workplace</p>
          </div>

          <div className="socials">
            <a className="social-icon" href="https://facebook.com" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22V12.9H16.6L17.1 9.4H13.5V7.2C13.5 6.2 13.8 5.5 15.3 5.5H17.2V2.3C16.3 2.2 15.4 2.1 14.5 2.1C11.7 2.1 9.8 3.8 9.8 7V9.4H6.8V12.9H9.8V22H13.5Z"/></svg>
            </a>
            <a className="social-icon" href="https://instagram.com" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2H17C19.7614 2 22 4.23858 22 7V17C22 19.7614 19.7614 22 17 22H7C4.23858 22 2 19.7614 2 17V7C2 4.23858 4.23858 2 7 2ZM12 7C9.23858 7 7 9.23858 7 12C7 14.7614 9.23858 17 12 17C14.7614 17 17 14.7614 17 12C17 9.23858 14.7614 7 12 7ZM18 6.5C18.5523 6.5 19 6.05228 19 5.5C19 4.94772 18.5523 4.5 18 4.5C17.4477 4.5 17 4.94772 17 5.5C17 6.05228 17.4477 6.5 18 6.5Z"/></svg>
            </a>
            <a className="social-icon" href="https://twitter.com" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22L15.2 9.8L23.2 22H16.9L11.9 14.4L5.3 22H2.2L9.4 13.7L1.8 2H8.3L12.8 8.9L18.9 2Z"/></svg>
            </a>
            <a className="social-icon" href="https://linkedin.com" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20H6.94V8.5ZM5.25 3C4.17 3 3.3 3.88 3.3 4.97C3.3 6.05 4.17 6.94 5.25 6.94C6.33 6.94 7.2 6.05 7.2 4.97C7.2 3.88 6.33 3 5.25 3ZM20.7 12.56C20.7 9.09 18.85 7.47 16.39 7.47C14.4 7.47 13.51 8.56 13.01 9.33V8.5H9.63C9.67 9.59 9.63 20 9.63 20H13.01V13.58C13.01 13.24 13.03 12.9 13.13 12.66C13.4 11.98 14.02 11.28 15.05 11.28C16.4 11.28 16.94 12.31 16.94 13.83V20H20.32V13.44C20.32 13.09 20.31 12.75 20.28 12.44L20.7 12.56Z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;