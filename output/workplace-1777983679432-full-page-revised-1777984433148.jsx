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
      el.style.transitionDelay = i * 0.15 + 's';
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.opacity = '1';
        }, 50);
      });
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => {
        if (e.isIntersecting) e.target.classList.add('visible');
      }),
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
        btn.style.transform = 'translate(' + (x * 0.14) + 'px, ' + (y * 0.14) + 'px)';
      };
      const leave = () => {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 0.45s cubic-bezier(0.34, 1.56, 0.64, 1)';
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
    html{scroll-behavior:smooth}
    body{margin:0;background:${bodyBg};color:#111827;font-family:Inter,sans-serif}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .page-wrapper{animation:pageReveal .6s cubic-bezier(.16,1,.3,1) both}
    .landing-page{background:${bodyBg};overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .nav{position:sticky;top:0;z-index:50;background:rgba(17,24,39,.92);backdrop-filter:blur(18px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:18px;padding:14px 0}
    .brand-left{display:flex;align-items:center;gap:12px}
    .brand-badge{width:42px;height:42px;border-radius:12px;background:linear-gradient(135deg,#fff1e7 0%,#ffe1cc 100%);display:flex;align-items:center;justify-content:center;box-shadow:inset 0 0 0 1px rgba(255,107,0,.12)}
    .brand-text{font-weight:800;font-size:20px;color:#fff;font-family:"Plus Jakarta Sans",sans-serif}
    .brand-text span{color:var(--accent)}
    .nav-right-logo{display:flex;align-items:center;justify-content:center;color:#fff;font-weight:700;font-size:14px;padding:10px 14px;border-radius:999px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08)}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:13px 24px;border-radius:12px;background:linear-gradient(135deg,#ff6b00 0%,#ff7f1f 100%);color:#fff;font-weight:800;border:none;box-shadow:0 12px 28px rgba(255,107,0,.26);text-transform:capitalize;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 18px 34px rgba(255,107,0,.3);background:linear-gradient(135deg,#f76500 0%,#ff8b33 100%)}
    .animated-cta.outline{background:#fff;color:#111827;border:1px solid #e5e7eb;box-shadow:0 10px 24px rgba(15,23,42,.06)}
    .animated-cta.outline:hover{background:#fff7f0}
    .hero{background:
      radial-gradient(circle at 15% 15%, rgba(255,107,0,.13) 0%, transparent 28%),
      radial-gradient(circle at 90% 12%, rgba(228,41,43,.1) 0%, transparent 22%),
      linear-gradient(180deg,#fff7f0 0%,#ffffff 100%);
      padding:56px 0 42px;
      position:relative
    }
    .hero:before,.hero:after{content:'';position:absolute;border-radius:50%;pointer-events:none;filter:blur(10px)}
    .hero:before{width:260px;height:260px;right:-70px;top:10px;background:radial-gradient(circle, rgba(255,107,0,.16) 0%, transparent 72%)}
    .hero:after{width:220px;height:220px;left:-50px;bottom:-20px;background:radial-gradient(circle, rgba(228,41,43,.08) 0%, transparent 70%)}
    .hero-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:26px;align-items:center}
    .hero-copy{position:relative;z-index:2}
    .hero-kicker{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;background:#fff;border:1px solid rgba(255,107,0,.14);box-shadow:0 8px 20px rgba(255,107,0,.08);font-size:12px;font-weight:800;letter-spacing:.04em;color:#9a3412;text-transform:uppercase}
    .hero h1{font:800 clamp(40px,5.4vw,64px)/1.02 "Plus Jakarta Sans",sans-serif;letter-spacing:-.035em;margin:16px 0 16px}
    .gradient-text{background:linear-gradient(135deg,#ff6b00 0%,#e4292b 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-sub{font-size:17px;line-height:1.8;color:#4b5563;max-width:620px;margin:0}
    .hero-chips{display:flex;flex-wrap:wrap;gap:10px;margin-top:20px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(255,107,0,.18);background:#fff;color:#374151;font-size:13px;font-weight:700;box-shadow:0 8px 18px rgba(15,23,42,.04)}
    .hero-cta{display:flex;gap:12px;flex-wrap:wrap;margin-top:24px}
    .hero-mini-proof{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:24px;max-width:640px}
    .mini-proof{padding:14px 16px;border-radius:18px;background:#fff;border:1px solid #eceff3;box-shadow:0 12px 24px rgba(15,23,42,.05)}
    .mini-proof strong{display:block;font:800 24px "Plus Jakarta Sans",sans-serif;color:#111827}
    .mini-proof span{display:block;margin-top:4px;font-size:12px;color:#6b7280;line-height:1.5}
    .hero-visual{min-height:480px;display:flex;align-items:center;justify-content:center}
    .hero-ui{position:relative;width:100%;max-width:580px;height:500px}
    .ui-shell{position:absolute;inset:20px 18px 20px 18px;background:#fff;border:1px solid #eee;border-radius:28px;box-shadow:0 36px 90px rgba(17,24,39,.14);overflow:hidden}
    .ui-top{height:58px;border-bottom:1px solid #eef2f7;display:flex;align-items:center;justify-content:space-between;padding:0 18px;background:#fff}
    .dots{display:flex;gap:8px}
    .dots span{width:10px;height:10px;border-radius:50%;background:#e5e7eb}
    .ui-title{font:700 14px "Plus Jakarta Sans",sans-serif;color:#374151}
    .ui-body{display:grid;grid-template-columns:108px 1fr;height:calc(100% - 58px)}
    .ui-sidebar{background:#fff8f2;border-right:1px solid #f2e8df;padding:16px 12px;display:grid;gap:10px;align-content:start}
    .side-pill{height:34px;border-radius:10px;background:rgba(255,107,0,.12)}
    .side-pill.active{background:linear-gradient(135deg, rgba(255,107,0,.18), rgba(255,107,0,.08));box-shadow:inset 0 0 0 1px rgba(255,107,0,.15)}
    .ui-main{padding:16px;display:grid;grid-template-rows:auto auto 1fr;gap:14px;background:linear-gradient(180deg,#fff,#fffaf7)}
    .app-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
    .app-card{padding:16px;border-radius:18px;background:#fff;border:1px solid #f1f5f9;box-shadow:0 10px 24px rgba(15,23,42,.05)}
    .app-icon{width:38px;height:38px;border-radius:12px;background:linear-gradient(135deg,#fff1e7,#ffe4d1);display:flex;align-items:center;justify-content:center;color:var(--accent);font-weight:800}
    .app-card h4{margin:10px 0 6px;font:700 14px "Plus Jakarta Sans",sans-serif}
    .app-card p{margin:0;color:#6b7280;font-size:12px;line-height:1.5}
    .panel-row{display:grid;grid-template-columns:1.15fr .85fr;gap:12px}
    .mail-panel,.meet-panel,.doc-panel{background:#fff;border:1px solid #eef2f7;border-radius:18px;padding:14px}
    .line{height:10px;border-radius:999px;background:#e5e7eb}
    .line.orange{background:linear-gradient(90deg, rgba(255,107,0,.92), rgba(255,107,0,.25))}
    .line.short{width:46%}
    .line.mid{width:72%}
    .stack{display:grid;gap:10px}
    .floating-card{position:absolute;background:#fff;border:1px solid rgba(255,107,0,.12);border-radius:18px;padding:14px 16px;box-shadow:0 18px 36px rgba(17,24,39,.1)}
    .floating-card strong{display:block;font:800 18px "Plus Jakarta Sans",sans-serif}
    .floating-card span{font-size:12px;color:#6b7280}
    .float-1{left:-2px;top:20px;animation:float 5s ease-in-out infinite}
    .float-2{right:-2px;top:92px;animation:float 6s ease-in-out infinite}
    .float-3{right:28px;bottom:0;animation:float 5.5s ease-in-out infinite}
    .trust{background:#fff;padding:18px 0 8px}
    .trust-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:16px;align-items:center}
    .trust-metric{display:flex;align-items:center;gap:16px;padding:20px 22px;background:linear-gradient(135deg,#111827 0%,#1f2937 100%);border-radius:22px;box-shadow:0 16px 34px rgba(15,23,42,.14)}
    .trust-big{font:800 42px "Plus Jakarta Sans",sans-serif;color:#fff}
    .trust-copy{font-size:16px;color:rgba(255,255,255,.86);font-weight:600;line-height:1.6}
    .proof-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:12px}
    .proof-chip{padding:16px;border:1px solid #edf2f7;border-radius:18px;background:#fff;text-align:center;box-shadow:0 12px 24px rgba(15,23,42,.04)}
    .proof-chip strong{display:block;font:800 20px "Plus Jakarta Sans",sans-serif;color:#111827}
    .proof-chip span{font-size:12px;color:#6b7280}
    .section-label{display:inline-flex;align-items:center;padding:8px 14px;border-radius:999px;background:#fff1e7;color:#9a3412;font-size:12px;font-weight:800;letter-spacing:.05em;text-transform:uppercase}
    section{transition:background-color .4s ease}
    .products{background:linear-gradient(180deg,#fff 0%,#f8fafc 100%);padding:56px 0}
    .section-head{text-align:center;max-width:860px;margin:0 auto 26px}
    .section-head h2{font:800 clamp(30px,4vw,44px)/1.1 "Plus Jakarta Sans",sans-serif;margin:14px 0 12px}
    .section-head p{margin:0;color:#4b5563;line-height:1.75;font-size:17px}
    .tabs-layout{display:grid;grid-template-columns:300px 1fr;gap:20px;align-items:start}
    .tab-list{display:grid;gap:10px;position:sticky;top:92px}
    .tab-btn{padding:18px;border:1px solid #e8edf3;border-radius:20px;background:#fff;text-align:left;transition:.25s ease;cursor:pointer;box-shadow:0 10px 22px rgba(15,23,42,.03)}
    .tab-btn:hover{transform:translateY(-1px);border-color:#fed7aa}
    .tab-btn.active{border-color:rgba(255,107,0,.24);box-shadow:0 16px 34px rgba(255,107,0,.1);background:linear-gradient(180deg,#fffaf7 0%,#ffffff 100%)}
    .tab-btn small{display:block;color:var(--accent);font-weight:800;letter-spacing:.06em;margin-bottom:8px}
    .tab-btn h3{margin:0;font:700 18px/1.35 "Plus Jakarta Sans",sans-serif}
    .tab-panel{background:#fff;border:1px solid #e8edf3;border-radius:28px;padding:24px;box-shadow:0 22px 46px rgba(15,23,42,.06)}
    .tab-panel-grid{display:grid;grid-template-columns:1fr 1fr;gap:18px;align-items:stretch}
    .desc-block{border-left:3px solid rgba(255,107,0,.2);padding-left:16px;color:#4b5563;line-height:1.8}
    .feature-list{display:grid;grid-template-columns:1fr 1fr;gap:12px;margin-top:18px}
    .feature-card{padding:18px;border:1px solid #edf2f7;border-radius:18px;background:linear-gradient(180deg,#fff,#fffaf7);box-shadow:0 8px 18px rgba(15,23,42,.03)}
    .feature-card h4{margin:10px 0 8px;font:700 16px "Plus Jakarta Sans",sans-serif}
    .feature-card p{margin:0;color:#6b7280;line-height:1.7;font-size:14px}
    .icon-wrap{width:42px;height:42px;border-radius:12px;background:rgba(255,107,0,.1);display:flex;align-items:center;justify-content:center;color:var(--accent);font-weight:800}
    .preview-shell{min-height:100%;border-radius:24px;background:linear-gradient(180deg,#111827,#1f2937);padding:16px;position:relative;overflow:hidden}
    .preview-shell.light{background:linear-gradient(180deg,#fff7f0,#ffffff);border:1px solid #f3e6db}
    .preview-inner{height:100%;display:grid;gap:12px}
    .preview-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px}
    .mini-panel{background:#fff;border-radius:16px;padding:14px;border:1px solid rgba(255,255,255,.1)}
    .mini-panel.dark{background:rgba(255,255,255,.08);border-color:rgba(255,255,255,.08)}
    .mini-panel h5{margin:0 0 8px;font:700 14px "Plus Jakarta Sans",sans-serif}
    .mini-panel p{margin:0;font-size:12px;line-height:1.6;color:#6b7280}
    .mini-panel.dark p,.mini-panel.dark h5{color:#fff}
    .metric-row{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
    .metric-card{padding:16px;border-radius:16px;background:#fff;border:1px solid #edf2f7}
    .metric-card strong{display:block;font:800 24px "Plus Jakarta Sans",sans-serif;color:var(--accent)}
    .metric-card span{font-size:12px;color:#6b7280}
    .secure-section{background:#ffffff;padding:56px 0}
    .secure-grid{display:grid;grid-template-columns:1fr 1fr;gap:20px;align-items:center}
    .secure-panel{background:#fff;border:1px solid #e8edf3;border-radius:28px;padding:24px;box-shadow:0 18px 40px rgba(15,23,42,.05)}
    .secure-visual{background:linear-gradient(135deg,#111827 0%,#1f2937 100%);border-radius:28px;padding:24px;box-shadow:0 24px 50px rgba(15,23,42,.12);color:#fff;position:relative;overflow:hidden}
    .secure-visual:before{content:'';position:absolute;width:180px;height:180px;right:-40px;top:-40px;background:radial-gradient(circle, rgba(255,107,0,.35) 0%, transparent 70%)}
    .secure-stack{position:relative;display:grid;gap:14px}
    .secure-card{padding:16px;border-radius:18px;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08);backdrop-filter:blur(6px)}
    .include-list{display:grid;gap:12px;margin-top:18px}
    .include-item{display:flex;gap:12px;align-items:flex-start;padding:12px 14px;border-radius:14px;background:#fafafa;border:1px solid #eee}
    .pricing{background:linear-gradient(180deg,#fff7f0 0%,#ffffff 100%);padding:56px 0}
    .pricing-wrap{max-width:980px;margin:0 auto}
    .pricing-card{background:#fff;border:2px solid rgba(255,107,0,.16);border-radius:30px;padding:30px;box-shadow:0 26px 60px rgba(255,107,0,.1);position:relative;overflow:hidden}
    .pricing-card:before{content:'';position:absolute;inset:0;background:radial-gradient(circle at top right, rgba(255,107,0,.09), transparent 28%);pointer-events:none}
    .badge-green{display:inline-block;padding:8px 12px;background:#e8f8ec;color:#138a36;border-radius:999px;font-size:12px;font-weight:800;margin-bottom:14px}
    .pricing-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:24px;align-items:start}
    .plan-title{font:800 34px "Plus Jakarta Sans",sans-serif;margin:0 0 10px}
    .price-row{display:flex;align-items:end;gap:10px;flex-wrap:wrap;margin:10px 0 22px}
    .strike{color:#9ca3af;text-decoration:line-through}
    .price-main{font:800 42px "Plus Jakarta Sans",sans-serif;color:#111827}
    .price-note{color:#6b7280}
    .pricing-features{display:grid;gap:12px;margin:0 0 22px;padding:0;list-style:none}
    .pricing-features li{display:flex;gap:12px;align-items:flex-start;padding:12px 14px;background:#fff7f0;border:1px solid #f6dfd0;border-radius:14px;color:#374151}
    .pricing-side{background:#111827;color:#fff;border-radius:24px;padding:22px;box-shadow:0 18px 36px rgba(15,23,42,.12)}
    .pricing-side h4{margin:0 0 12px;font:800 22px "Plus Jakarta Sans",sans-serif}
    .pricing-points{display:grid;gap:12px}
    .pricing-point{display:flex;gap:12px;align-items:flex-start;padding:12px 0;border-bottom:1px solid rgba(255,255,255,.08)}
    .pricing-point:last-child{border-bottom:none}
    .pricing-cta{width:100%;text-align:center}
    .testimonials{background:#fff;padding:56px 0}
    .testimonial-wrap{max-width:980px;margin:0 auto}
    .testimonial-shell{display:grid;grid-template-columns:280px 1fr;gap:18px;align-items:stretch}
    .testimonial-side{background:linear-gradient(135deg,#111827 0%,#1f2937 100%);border-radius:26px;padding:24px;color:#fff;box-shadow:0 20px 40px rgba(15,23,42,.12)}
    .testimonial-side h3{margin:0 0 12px;font:800 28px/1.15 "Plus Jakarta Sans",sans-serif}
    .testimonial-side p{margin:0;color:rgba(255,255,255,.78);line-height:1.7}
    .testimonial-card{position:relative;border:1px solid #e8edf3;border-radius:28px;padding:30px;background:#fff;box-shadow:0 18px 40px rgba(15,23,42,.05)}
    .quote-mark{font:800 72px/1 "Plus Jakarta Sans",sans-serif;color:rgba(255,107,0,.16);position:absolute;top:14px;left:20px}
    .testimonial-text{position:relative;font-size:20px;line-height:1.8;color:#1f2937;padding-top:26px;margin:0 0 24px}
    .t-footer{display:flex;justify-content:space-between;align-items:center;gap:18px;flex-wrap:wrap}
    .author{display:flex;align-items:center;gap:14px}
    .avatar{width:56px;height:56px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:var(--accent);color:#fff;font:800 20px "Plus Jakarta Sans",sans-serif}
    .author h4{margin:0;font:800 18px "Plus Jakarta Sans",sans-serif}
    .author span{color:#6b7280;font-size:14px}
    .stars{color:#f4b400;font-size:18px;letter-spacing:2px}
    .slider-controls{display:flex;justify-content:space-between;align-items:center;margin-top:18px}
    .dots-row{display:flex;gap:8px}
    .dot{width:10px;height:10px;border-radius:999px;background:#e5e7eb;border:none;cursor:pointer;transition:.25s ease}
    .dot.active{width:28px;background:var(--accent)}
    .arrow-group{display:flex;gap:10px}
    .arrow-btn{width:44px;height:44px;border-radius:50%;border:1px solid #e5e7eb;background:#fff;cursor:pointer;font-size:20px;transition:.2s ease}
    .arrow-btn:hover{background:#fff7f0;border-color:#fed7aa}
    .final-cta{padding:0 0 56px;background:#fff}
    .final-cta-card{background:linear-gradient(135deg,#111827 0%,#1f2937 100%);border-radius:30px;padding:34px;display:grid;grid-template-columns:1.1fr .9fr;gap:20px;align-items:center;box-shadow:0 24px 56px rgba(15,23,42,.14);position:relative;overflow:hidden}
    .final-cta-card:before{content:'';position:absolute;width:240px;height:240px;right:-60px;top:-70px;background:radial-gradient(circle, rgba(255,107,0,.35), transparent 70%)}
    .final-cta-copy{position:relative;z-index:1}
    .final-cta-copy h3{margin:0 0 10px;color:#fff;font:800 clamp(28px,4vw,42px)/1.1 "Plus Jakarta Sans",sans-serif}
    .final-cta-copy p{margin:0;color:rgba(255,255,255,.78);line-height:1.8;max-width:620px}
    .final-cta-actions{position:relative;z-index:1;display:flex;gap:12px;flex-wrap:wrap;justify-content:flex-start}
    .footer{background:#111827;color:#fff;padding:34px 0}
    .footer-grid{display:grid;grid-template-columns:1.1fr 1fr auto;gap:22px;align-items:start}
    .footer p,.footer a{color:rgba(255,255,255,.78);font-size:14px}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .social-icon{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.08)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-left{opacity:0;transform:translateX(-40px);transition:opacity .7s ease,transform .7s ease}
    .reveal-right{opacity:0;transform:translateX(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal-left.visible,.reveal-right.visible{opacity:1;transform:translateX(0)}
    .reveal-scale{opacity:0;transform:scale(.96);transition:opacity .7s ease,transform .7s ease}
    .reveal-scale.visible{opacity:1;transform:scale(1)}
    .stagger-parent > *{opacity:0;transform:translateY(24px);transition:opacity .6s ease,transform .6s ease}
    .stagger-parent.visible > *{opacity:1;transform:translateY(0)}
    .stagger-parent.visible > *:nth-child(1){transition-delay:.05s}
    .stagger-parent.visible > *:nth-child(2){transition-delay:.12s}
    .stagger-parent.visible > *:nth-child(3){transition-delay:.19s}
    .stagger-parent.visible > *:nth-child(4){transition-delay:.26s}
    .stagger-parent.visible > *:nth-child(5){transition-delay:.33s}
    @keyframes float{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(-10px)}
    }
    @keyframes pageReveal{
      from{opacity:0;transform:translateY(12px)}
      to{opacity:1;transform:translateY(0)}
    }
    @media (max-width: 1024px){
      .hero-grid,.tabs-layout,.tab-panel-grid,.secure-grid,.pricing-grid,.testimonial-shell,.final-cta-card{grid-template-columns:1fr}
      .hero-mini-proof,.proof-grid,.metric-row{grid-template-columns:repeat(3,1fr)}
      .tab-list{position:static}
      .hero-visual{min-height:auto}
      .hero-ui{height:470px}
    }
    @media (max-width: 768px){
      .container{width:min(100% - 24px,1180px)}
      .nav-inner{grid-template-columns:1fr auto}
      .nav-right-logo{display:none}
      .hero{padding:42px 0 30px}
      .products,.secure-section,.pricing,.testimonials{padding:42px 0}
      .final-cta{padding:0 0 42px}
      .hero-mini-proof,.proof-grid,.feature-list,.preview-grid,.metric-row{grid-template-columns:1fr 1fr}
      .trust-grid,.footer-grid{grid-template-columns:1fr}
      .hero-ui{height:430px}
      .ui-body{grid-template-columns:88px 1fr}
      .app-grid{grid-template-columns:repeat(2,1fr)}
      .t-footer{align-items:flex-start}
    }
    @media (max-width: 520px){
      .hero h1{font-size:36px}
      .hero-mini-proof,.proof-grid,.feature-list,.preview-grid,.metric-row{grid-template-columns:1fr}
      .hero-cta,.final-cta-actions{flex-direction:column}
      .animated-cta,.animated-cta.outline{width:100%}
      .ui-shell{inset:10px}
      .hero-ui{height:400px}
      .app-grid{grid-template-columns:1fr}
      .panel-row{grid-template-columns:1fr}
      .pricing-card,.testimonial-card,.secure-panel,.final-cta-card{padding:22px}
    }
  `;

  const renderPreview = index => {
    if (index === 0) {
      return (
        <div className="preview-shell light reveal-right">
          <div className="preview-inner">
            <div className="preview-grid">
              <div className="mini-panel">
                <h5>Mail</h5>
                <p>Business inbox with custom domain, spam protection, and team productivity tools.</p>
              </div>
              <div className="mini-panel">
                <h5>Cliq</h5>
                <p>Instant team communication with channels, direct messaging, and work coordination.</p>
              </div>
              <div className="mini-panel">
                <h5>WorkDrive</h5>
                <p>Secure file storage, structured sharing controls, and simple collaboration access.</p>
              </div>
              <div className="mini-panel">
                <h5>Meeting</h5>
                <p>Video meetings, webinars, and remote collaboration from one connected suite.</p>
              </div>
            </div>
            <div className="mini-panel">
              <h5>Unified dashboard</h5>
              <p>Reduce tool switching with one connected digital workspace for email, chat, docs, meetings, and files.</p>
            </div>
          </div>
        </div>
      );
    }
    if (index === 1) {
      return (
        <div className="preview-shell reveal-right">
          <div className="preview-inner">
            <div className="preview-grid">
              <div className="mini-panel dark">
                <h5>Social Intranet</h5>
                <p>Feeds, channels, and groups help teams stay aligned and informed.</p>
              </div>
              <div className="mini-panel dark">
                <h5>Connected Apps</h5>
                <p>Bring key workflows together through integrations and business app connections.</p>
              </div>
            </div>
            <div className="mini-panel dark">
              <h5>Built for every team size</h5>
              <p>From growing companies to larger teams, Zoho Workplace adapts to your scale and work style.</p>
            </div>
            <div className="metric-row">
              <div className="metric-card">
                <strong>1</strong>
                <span>suite for work</span>
              </div>
              <div className="metric-card">
                <strong>4+</strong>
                <span>core workflows</span>
              </div>
              <div className="metric-card">
                <strong>24/7</strong>
                <span>business access</span>
              </div>
              <div className="metric-card">
                <strong>0</strong>
                <span>tool clutter</span>
              </div>
            </div>
          </div>
        </div>
      );
    }
    if (index === 2) {
      return (
        <div className="preview-shell light reveal-right">
          <div className="preview-inner">
            <div className="preview-grid">
              <div className="mini-panel">
                <h5>Zoho Ecosystem</h5>
                <p>Meeting, Connect, Mail, Cliq, Writer and more work together smoothly.</p>
              </div>
              <div className="mini-panel">
                <h5>Analytics</h5>
                <p>Make better decisions by connecting analytics into business workflows.</p>
              </div>
              <div className="mini-panel">
                <h5>Finance</h5>
                <p>Link books and invoicing tools to simplify operational collaboration.</p>
              </div>
              <div className="mini-panel">
                <h5>Automation</h5>
                <p>Use Zoho Flow, Zapier or viaSocket to reduce repetitive work.</p>
              </div>
            </div>
            <div className="mini-panel">
              <h5>Integration-ready workspace</h5>
              <p>Keep teams productive by connecting familiar systems into one digital environment.</p>
            </div>
          </div>
        </div>
      );
    }
    if (index === 3) {
      return (
        <div className="preview-shell reveal-right">
          <div className="preview-inner">
            <div className="metric-row">
              <div className="metric-card">
                <strong>82.9%</strong>
                <span>secure email experience</span>
              </div>
              <div className="metric-card">
                <strong>42.9%</strong>
                <span>remote work ease</span>
              </div>
              <div className="metric-card">
                <strong>28.6%</strong>
                <span>easy to use</span>
              </div>
              <div className="metric-card">
                <strong>14.3%</strong>
                <span>better collaboration</span>
              </div>
            </div>
            <div className="mini-panel dark">
              <h5>User-led outcomes</h5>
              <p>Security, ease of use, anywhere access, and collaboration are among the standout benefits businesses value most.</p>
            </div>
            <div className="preview-grid">
              <div className="mini-panel dark">
                <h5>Faster adoption</h5>
                <p>Lower learning curve helps teams become productive faster.</p>
              </div>
              <div className="mini-panel dark">
                <h5>Work flexibility</h5>
                <p>Cloud access supports modern, distributed teams across devices.</p>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return (
      <div className="preview-shell light reveal-right">
        <div className="preview-inner">
          <div className="mini-panel">
            <h5>Privacy-first architecture</h5>
            <p>Strengthen data protection with admin controls, spam protection, SSO, MFA, and directory management.</p>
          </div>
          <div className="preview-grid">
            <div className="mini-panel">
              <h5>Access controls</h5>
              <p>Enterprise-grade email and secure identity management for your team.</p>
            </div>
            <div className="mini-panel">
              <h5>Password security</h5>
              <p>Secure password management and user-level control for business continuity.</p>
            </div>
          </div>
          <div className="mini-panel">
            <h5>Business-ready environment</h5>
            <p>Support across Android, iOS, Windows and Mac enables safe productivity anywhere.</p>
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className="page-wrapper">
      <style>{css}</style>
      <div className="landing-page">
        <nav className="nav">
          <div className="container nav-inner">
            <div className="brand-left">
              <div className="brand-badge">
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
                  <path d="M12 2l3.1 6.3L22 9.3l-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1L12 2z" fill="#ff6b00" />
                </svg>
              </div>
              <div className="brand-text">Techjockey <span>x Zoho Workplace</span></div>
            </div>
            <div className="nav-right-logo">Productivity Software</div>
            <a href={ctaItems[0].href} className="animated-cta btn-magnetic">{ctaItems[0].text}</a>
          </div>
        </nav>

        <section className="hero">
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="hero-kicker hero-headline">Unified email, collaboration & productivity suite</div>
              <h1 className="hero-headline">
                Simplify team communication with <span className="gradient-text">Zoho Workplace</span>
              </h1>
              <p className="hero-sub">
                Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.
              </p>

              <div className="hero-chips">
                <div className="chip">Custom business email</div>
                <div className="chip">Team chat & meetings</div>
                <div className="chip">Docs, storage & collaboration</div>
              </div>

              <div className="hero-cta">
                <a href={ctaItems[0].href} className="animated-cta btn-magnetic">{ctaItems[0].text}</a>
                <a href="#pricing" className="animated-cta outline">view pricing</a>
              </div>

              <div className="hero-mini-proof reveal">
                <div className="mini-proof">
                  <strong>All-in-one</strong>
                  <span>One connected suite for email, chat, docs, meetings, and storage.</span>
                </div>
                <div className="mini-proof">
                  <strong>Remote-ready</strong>
                  <span>Work from anywhere across devices without losing team coordination.</span>
                </div>
                <div className="mini-proof">
                  <strong>Business secure</strong>
                  <span>Enterprise-grade controls with privacy-first cloud capabilities.</span>
                </div>
              </div>
            </div>

            <div className="hero-visual">
              <div className="hero-ui hero-visual">
                <div className="floating-card float-1">
                  <strong>1 workspace</strong>
                  <span>mail • chat • docs • meetings</span>
                </div>
                <div className="floating-card float-2">
                  <strong>Anywhere access</strong>
                  <span>Android, iOS, Windows, Mac</span>
                </div>
                <div className="floating-card float-3">
                  <strong>AI-powered</strong>
                  <span>Zia assistance for productivity</span>
                </div>

                <div className="ui-shell">
                  <div className="ui-top">
                    <div className="dots"><span /><span /><span /></div>
                    <div className="ui-title">Zoho Workplace Dashboard</div>
                    <div className="dots"><span /><span /></div>
                  </div>
                  <div className="ui-body">
                    <div className="ui-sidebar">
                      <div className="side-pill active" />
                      <div className="side-pill" />
                      <div className="side-pill" />
                      <div className="side-pill" />
                      <div className="side-pill" />
                    </div>
                    <div className="ui-main">
                      <div className="app-grid">
                        <div className="app-card">
                          <div className="app-icon">M</div>
                          <h4>Mail</h4>
                          <p>Secure ad-free business inbox</p>
                        </div>
                        <div className="app-card">
                          <div className="app-icon">C</div>
                          <h4>Cliq</h4>
                          <p>Instant team chat & channels</p>
                        </div>
                        <div className="app-card">
                          <div className="app-icon">D</div>
                          <h4>Docs</h4>
                          <p>Collaborative editing in real time</p>
                        </div>
                      </div>
                      <div className="panel-row">
                        <div className="mail-panel stack">
                          <div className="line orange" />
                          <div className="line mid" />
                          <div className="line short" />
                        </div>
                        <div className="meet-panel stack">
                          <div className="line orange short" />
                          <div className="line" />
                          <div className="line mid" />
                        </div>
                      </div>
                      <div className="doc-panel stack">
                        <div className="line orange mid" />
                        <div className="line" />
                        <div className="line" />
                        <div className="line short" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="trust reveal">
          <div className="container trust-grid">
            <div className="trust-metric">
              <div className="trust-big">One Suite</div>
              <div className="trust-copy">
                Replace scattered workplace tools with a connected ecosystem designed for communication, collaboration, and productivity.
              </div>
            </div>
            <div className="proof-grid stagger-parent">
              <div className="proof-chip">
                <strong>Secure</strong>
                <span>Privacy-first cloud workspace</span>
              </div>
              <div className="proof-chip">
                <strong>Flexible</strong>
                <span>Work from anywhere on any device</span>
              </div>
              <div className="proof-chip">
                <strong>Integrated</strong>
                <span>Connect Zoho and third-party apps</span>
              </div>
            </div>
          </div>
        </section>

        <section className="products" ref={el => (sectionRefs.current[0] = el)}>
          <div className="container">
            <div className="section-head reveal">
              <div className="section-label">Features & value</div>
              <h2>Everything your team needs to work smarter</h2>
              <p>
                Explore how Zoho Workplace helps businesses streamline communication, improve collaboration, and create a secure digital workspace from one connected platform.
              </p>
            </div>

            <div className="tabs-layout">
              <div className="tab-list reveal-left">
                {productSections.map((section, index) => (
                  <button
                    key={section.label}
                    className={`tab-btn ${activeTab === index ? 'active' : ''}`}
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
                    <div className="section-label">{productSections[activeTab].label}</div>
                    <h2 style={{ margin: '14px 0 12px', fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: 'clamp(28px,3vw,38px)', lineHeight: 1.12 }}>
                      {productSections[activeTab].headline}
                    </h2>
                    {productSections[activeTab].description ? (
                      <div className="desc-block">{productSections[activeTab].description}</div>
                    ) : null}

                    <div className="feature-list stagger-parent visible" style={{ marginTop: productSections[activeTab].description ? '18px' : '8px' }}>
                      {productSections[activeTab].features.map((feature, i) => (
                        <div className="feature-card" key={feature.title + i}>
                          <div className="icon-wrap">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                              <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                          </div>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      ))}
                    </div>
                  </div>

                  {renderPreview(activeTab)}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="secure-section">
          <div className="container secure-grid">
            <div className="secure-panel reveal-left">
              <div className="section-label">Security</div>
              <h2 style={{ margin: '14px 0 12px', fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: 'clamp(30px,4vw,42px)', lineHeight: 1.12 }}>
                Create a Secure Digital Workspace
              </h2>
              <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.8 }}>
                Enjoy privacy-first, enterprise-grade cloud capabilities with strong spam protection, SSO, Directory, MFA, and a secure password manager.
              </p>

              <div className="include-list">
                {productSections[4].features[0].description.split(';').map((item, i) => (
                  <div className="include-item" key={item + i}>
                    <div className="icon-wrap" style={{ width: 34, height: 34, minWidth: 34 }}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
                        <path d="M20 7L9 18l-5-5" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                    <div style={{ color: '#374151', lineHeight: 1.6 }}>{item.trim()}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="secure-visual reveal-right">
              <div className="secure-stack">
                <div className="secure-card">
                  <div style={{ fontWeight: 800, fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: 20, marginBottom: 8 }}>Enterprise Controls</div>
                  <div style={{ color: 'rgba(255,255,255,.76)', lineHeight: 1.7 }}>
                    Manage identity, access, spam protection, and authentication from a unified business environment.
                  </div>
                </div>
                <div className="preview-grid">
                  <div className="secure-card">
                    <div style={{ fontWeight: 800, marginBottom: 8 }}>SSO & MFA</div>
                    <div style={{ color: 'rgba(255,255,255,.76)', lineHeight: 1.7, fontSize: 14 }}>
                      Secure login and access management for teams.
                    </div>
                  </div>
                  <div className="secure-card">
                    <div style={{ fontWeight: 800, marginBottom: 8 }}>Directory</div>
                    <div style={{ color: 'rgba(255,255,255,.76)', lineHeight: 1.7, fontSize: 14 }}>
                      Centralized user administration and governance.
                    </div>
                  </div>
                </div>
                <div className="secure-card">
                  <div style={{ fontWeight: 800, marginBottom: 8 }}>Built for modern work</div>
                  <div style={{ color: 'rgba(255,255,255,.76)', lineHeight: 1.7 }}>
                    Support across Android, iOS, Windows and Mac helps your team stay productive without compromising security.
                  </div>
                </div>
                <a href={ctaItems[1].href} className="animated-cta btn-magnetic" style={{ width: 'fit-content' }}>
                  {ctaItems[1].text}
                </a>
              </div>
            </div>
          </div>
        </section>

        <section className="pricing" id="pricing">
          <div className="container pricing-wrap">
            <div className="section-head reveal">
              <div className="section-label">Pricing</div>
              <h2>Get the right Zoho Workplace plan for your business</h2>
              <p>
                Choose a solution that fits your team’s communication, collaboration, and productivity needs — with expert guidance from Techjockey.
              </p>
            </div>

            <div className="pricing-card reveal-scale">
              <span className="badge-green">Recommended for growing businesses</span>
              <div className="pricing-grid">
                <div>
                  <h3 className="plan-title">Zoho Workplace</h3>
                  <div className="price-row">
                    <span className="strike">Business-ready suite</span>
                    <span className="price-main">Custom Pricing</span>
                    <span className="price-note">based on your business requirements</span>
                  </div>

                  <ul className="pricing-features">
                    <li>Secure custom email for professional communication</li>
                    <li>Integrated chat, meetings, documents, and file storage</li>
                    <li>Work from anywhere across major devices and platforms</li>
                    <li>Advanced security controls for enterprise-grade protection</li>
                    <li>Integration-ready ecosystem to connect your business apps</li>
                  </ul>

                  <a href={ctaItems[0].href} className="animated-cta pricing-cta btn-magnetic">
                    {ctaItems[0].text}
                  </a>
                </div>

                <div className="pricing-side">
                  <h4>Why buy through Techjockey?</h4>
                  <div className="pricing-points">
                    <div className="pricing-point">
                      <div className="icon-wrap" style={{ width: 34, height: 34, minWidth: 34, background: 'rgba(255,107,0,.16)', color: '#fff' }}>1</div>
                      <div>Get expert help to identify the right Zoho Workplace plan based on your exact business needs.</div>
                    </div>
                    <div className="pricing-point">
                      <div className="icon-wrap" style={{ width: 34, height: 34, minWidth: 34, background: 'rgba(255,107,0,.16)', color: '#fff' }}>2</div>
                      <div>Reduce buying confusion with a guided, hassle-free evaluation and purchase process.</div>
                    </div>
                    <div className="pricing-point">
                      <div className="icon-wrap" style={{ width: 34, height: 34, minWidth: 34, background: 'rgba(255,107,0,.16)', color: '#fff' }}>3</div>
                      <div>Compare value, capabilities, and suitability before finalizing the best-fit workplace suite.</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="testimonials">
          <div className="container testimonial-wrap">
            <div className="section-head reveal">
              <div className="section-label">Customer voices</div>
              <h2>Businesses trust Zoho Workplace to simplify work</h2>
              <p>
                See how teams improved communication, collaboration, and decision-making with the right setup and buying guidance.
              </p>
            </div>

            <div className="testimonial-shell">
              <div className="testimonial-side reveal-left">
                <h3>Built to improve everyday productivity</h3>
                <p>
                  From email and files to meetings and messaging, users value the convenience of having core work tools together in one place.
                </p>
              </div>

              <div className="reveal-right">
                <div className="testimonial-card">
                  <div className="quote-mark">“</div>
                  <p className="testimonial-text">{testimonials[activeTestimonial].quote}</p>
                  <div className="t-footer">
                    <div className="author">
                      <div className="avatar">
                        {testimonials[activeTestimonial].author
                          .split(' ')
                          .map(part => part[0])
                          .join('')
                          .slice(0, 2)}
                      </div>
                      <div>
                        <h4>{testimonials[activeTestimonial].author}</h4>
                        <span>{testimonials[activeTestimonial].role}</span>
                      </div>
                    </div>
                    <div className="stars">★★★★★</div>
                  </div>
                </div>

                <div className="slider-controls">
                  <div className="dots-row">
                    {testimonials.map((_, i) => (
                      <button
                        key={i}
                        className={`dot ${activeTestimonial === i ? 'active' : ''}`}
                        onClick={() => setActiveTestimonial(i)}
                        aria-label={`Go to testimonial ${i + 1}`}
                      />
                    ))}
                  </div>
                  <div className="
export default LandingPage;