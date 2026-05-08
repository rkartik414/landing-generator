import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#d42d2d';
  const primary = '#d42d2d';
  const bodyBg = '#ffffff';

  const ctaItems = [
    { text: 'Get quote', href: 'https://www.zoho.com/en-in/desk/' },
    { text: 'Get quote', href: 'https://www.zoho.com/en-in/desk/' },
    { text: 'Get quote', href: 'https://www.zoho.com/en-in/desk/' },
    { text: 'Get quote', href: 'https://www.zoho.com/en-in/desk/' },
    { text: 'Get quote', href: 'https://www.zoho.com/en-in/desk/' }
  ];

  const testimonials = [
    {
      quote:
        'Zoho Desk helped us streamline our support tickets and respond faster to customer queries. Our team now handles requests more efficiently with better visibility.',
      author: 'Sanjay Bhatnagar',
      role: 'Customer Support Lead'
    },
    {
      quote:
        'Managing customer conversations across multiple channels became effortless with Zoho Desk. It significantly improved our response time and customer satisfaction.',
      author: 'Arjun Mishra',
      role: 'Operations Manager'
    },
    {
      quote:
        'Automation in Zoho Desk reduced manual work for our support team. We can now focus more on solving issues rather than managing tickets.',
      author: 'Vanshika Malhotra',
      role: 'Head of Support'
    },
    {
      quote:
        'The knowledge base and self-service portal helped reduce our ticket volume while improving customer experience.',
      author: 'Nitin Singh',
      role: 'Founder'
    },
    {
      quote:
        'Zoho Desk’s reporting and dashboards give us clear insights into support performance and customer issues.',
      author: 'Akashdeep Sirkar',
      role: 'Customer Experience Manager'
    }
  ];

  const productSections = [
    {
      name: 'Why Choose Zoho Desk?',
      headline: 'Why Choose Zoho Desk?',
      description:
        'With powerful automation and contextual AI, Zoho Desk helps businesses deliver faster, smarter, and more personalized customer support.',
      features: [
        {
          title: 'Omnichannel Support',
          description:
            'Manage customer conversations across email, chat, phone, and social media from a single platform.'
        },
        {
          title: 'Ticket Management',
          description:
            'Organize, prioritize, and resolve tickets efficiently with automation and smart workflows.'
        },
        {
          title: 'AI Assistance (Zia)',
          description:
            'Get intelligent suggestions, auto-tag tickets, detect sentiment, and respond faster with AI-powered insights.'
        },
        {
          title: 'Workflow Automation',
          description:
            'Automate repetitive support tasks, assign tickets, and streamline processes for faster resolutions.'
        }
      ]
    },
    {
      name: 'Additional Features',
      headline: 'Make Smarter Support Decisions with Zia AI',
      description:
        'Zoho Desk includes Zia, an AI-powered assistant that helps support teams improve response quality and resolution speed.',
      features: [
        {
          title: 'AI-Powered Responses',
          description:
            'Generate accurate replies, suggest solutions, and assist agents in real time.'
        },
        {
          title: 'Sentiment Analysis',
          description:
            'Understand customer emotions and prioritize critical issues for better service.'
        },
        {
          title: 'Auto Tagging & Insights',
          description:
            'Automatically categorize tickets and uncover patterns to improve support efficiency.'
        },
        {
          title: 'Conversation Intelligence',
          description:
            'Analyze interactions across channels to deliver consistent and contextual support experiences.'
        }
      ]
    },
    {
      name: 'Standard Feature',
      headline: 'Integrate with popular apps and Zoho ecosystem',
      description:
        'Connect your help desk with your favorite apps across CRM, communication, and business tools with ease.',
      features: [
        { title: 'CRM Integration', description: 'Zoho CRM, HubSpot, and more' },
        { title: 'Collaboration Tools', description: 'Slack, Microsoft Teams' },
        { title: 'Telephony', description: 'Aircall, RingCentral' },
        { title: 'E-commerce Platforms', description: 'Shopify, WooCommerce' },
        { title: 'Automation Tools', description: 'Zapier & Zoho Flow' }
      ]
    },
    {
      name: 'Other Features',
      headline: 'Customization Beyond Limits',
      description:
        'Zoho Desk is built to adapt to your support workflows and business needs.',
      features: [
        {
          title: 'Layouts',
          description:
            'Customize ticket views, fields, and workflows to match your processes.'
        },
        {
          title: 'Blueprints',
          description:
            'Design structured workflows to guide agents through every support process.'
        },
        {
          title: 'Extensions',
          description: 'Extend functionality with custom apps and integrations.'
        },
        {
          title: 'Help Center',
          description:
            'Create branded self-service portals and knowledge bases for customers.'
        }
      ]
    }
  ];

  const [activeSection, setActiveSection] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const appTrackRef = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const loadScript = (src) =>
      new Promise((resolve) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) return resolve();
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = resolve;
        document.body.appendChild(s);
      });

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const gsap = window.gsap;
          gsap.registerPlugin(window.ScrollTrigger);

          gsap.utils.toArray('.zoom-reveal').forEach((el) => {
            const img = el.querySelector('img,video');
            if (img)
              gsap.to(img, {
                scale: 1,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse'
                }
              });
          });

          gsap.utils.toArray('[data-depth]').forEach((el) => {
            gsap.to(el, {
              y: () => -(window.innerHeight * (parseFloat(el.dataset.depth) || 0.2) * 0.5),
              ease: 'none',
              scrollTrigger: {
                trigger: el.closest('section') || el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            });
          });

          gsap.utils.toArray('.stagger-parent').forEach((p) => {
            gsap.to(p.children, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: { trigger: p, start: 'top 80%' }
            });
          });

          gsap.utils.toArray('[data-count]').forEach((el) => {
            const target = parseFloat(el.getAttribute('data-count')) || 0;
            const suffix = el.getAttribute('data-suffix') || '';
            const prefix = el.getAttribute('data-prefix') || '';
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 2,
              snap: { val: 0.1 },
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%' },
              onUpdate: () => {
                el.textContent = `${prefix}${obj.val.toFixed(target % 1 === 0 ? 0 : 1)}${suffix}`;
              }
            });
          });
        });
      });
    };

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js')
    ]).then(initGSAP);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const currentSection = productSections[activeSection];

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg}}
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;background:${bodyBg};font-family:Inter,sans-serif;color:#111827;scroll-behavior:smooth}
    body{overflow-x:hidden}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .page{background:${bodyBg}}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .main_header{position:sticky;top:0;z-index:50;background:rgba(15,23,42,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-bar{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0}
    .nav-left{display:flex;align-items:center;min-width:0}
    .nav-right{display:flex;align-items:center;gap:14px}
    .logo-text{font-weight:800;font-size:20px;color:var(--accent);font-family:"Plus Jakarta Sans",sans-serif}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:10px;background:var(--accent);color:#fff;font-weight:700;border:1px solid var(--accent);transition:.25s transform,.25s box-shadow,.25s background;white-space:nowrap}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 12px 30px rgba(212,45,45,.28);background:#bc2323}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:10px;background:transparent;color:#fff;font-weight:700;border:1px solid rgba(255,255,255,.22);transition:.25s}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(0,0,0,.18);background:rgba(255,255,255,.06)}
    .hero-section{background:#0f172a;position:relative;overflow:hidden}
    .hero-section:before,.hero-section:after{content:"";position:absolute;border-radius:50%;filter:blur(40px);pointer-events:none}
    .hero-section:before{width:360px;height:360px;right:-60px;top:-60px;background:radial-gradient(circle, rgba(212,45,45,.28), transparent 70%)}
    .hero-section:after{width:280px;height:280px;left:-40px;bottom:-60px;background:radial-gradient(circle, rgba(212,45,45,.18), transparent 70%)}
    .banner_wrap{display:flex;align-items:center;gap:54px;min-height:calc(100vh - 74px);padding:88px 0 72px;position:relative}
    .banner-text,.hero-visual{flex:1}
    .banner-title{font-family:"Plus Jakarta Sans",sans-serif;font-size:clamp(48px,6vw,68px);line-height:1.02;letter-spacing:-.03em;color:#fff;margin:0 0 18px;word-break:normal;overflow-wrap:normal;hyphens:none;white-space:normal}
    .banner-content{font-size:18px;line-height:1.75;color:#cbd5e1;max-width:620px;margin:0 0 28px}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 30px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(212,45,45,.35);background:rgba(212,45,45,.12);color:#e5e7eb;font-size:13px}
    .banner-actions{display:flex;flex-wrap:wrap;gap:14px}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center;position:relative}
    .hero-cinematic-bg{position:absolute;inset:0;border-radius:28px;background:
      radial-gradient(circle at 20% 20%, rgba(212,45,45,.28), transparent 28%),
      radial-gradient(circle at 80% 18%, rgba(255,255,255,.12), transparent 22%),
      linear-gradient(135deg,#151e31,#0b1220 58%,#111827);
      border:1px solid rgba(255,255,255,.08);
      box-shadow:0 30px 80px rgba(0,0,0,.35), inset 0 1px 0 rgba(255,255,255,.06)}
    .dashboard-shell{position:relative;width:100%;max-width:560px;height:500px;padding:22px}
    .ui-window{position:absolute;background:rgba(255,255,255,.96);border-radius:18px;box-shadow:0 20px 60px rgba(0,0,0,.28);overflow:hidden}
    .ui-main{left:34px;top:34px;right:38px;bottom:56px}
    .ui-topbar{height:48px;background:#f8fafc;border-bottom:1px solid #e5e7eb;display:flex;align-items:center;padding:0 16px;gap:8px}
    .dot{width:10px;height:10px;border-radius:50%;background:#cbd5e1}
    .ui-content{display:flex;height:calc(100% - 48px)}
    .ui-sidebar{width:30%;background:#f8fafc;border-right:1px solid #e5e7eb;padding:14px}
    .side-block,.msg-line,.ticket-pill,.chart-bar,.mini-pill{border-radius:10px}
    .side-block{height:46px;background:linear-gradient(90deg,#eef2f7,#f8fafc);margin-bottom:12px}
    .ui-panel{flex:1;padding:16px;background:#fff}
    .stat-row{display:flex;gap:12px;margin-bottom:14px}
    .stat-card{flex:1;padding:14px;border-radius:14px;background:#fff;border:1px solid #edf2f7;box-shadow:0 10px 26px rgba(15,23,42,.06)}
    .stat-card h4{margin:0 0 6px;font:700 14px Inter,sans-serif;color:#475569}
    .stat-card strong{font:800 24px "Plus Jakarta Sans",sans-serif;color:#111827}
    .msg-line{height:14px;background:#e5e7eb;margin-bottom:10px}
    .msg-line.red{background:linear-gradient(90deg, rgba(212,45,45,.85), rgba(212,45,45,.22))}
    .msg-line.sm{width:65%}
    .msg-line.md{width:82%}
    .msg-line.lg{width:100%}
    .ui-ticket{margin-top:18px;padding:16px;border-radius:16px;background:#f8fafc;border:1px solid #e5e7eb}
    .ticket-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}
    .ticket-pill{padding:8px 10px;background:rgba(212,45,45,.1);color:var(--accent);font-size:12px;font-weight:700}
    .chart-row{display:flex;align-items:flex-end;gap:8px;height:90px;margin-top:16px}
    .chart-bar{flex:1;background:linear-gradient(180deg, rgba(212,45,45,.95), rgba(212,45,45,.18))}
    .float-card{position:absolute;padding:14px 16px;background:rgba(255,255,255,.98);border-radius:16px;box-shadow:0 18px 45px rgba(0,0,0,.22);min-width:170px}
    .float-card h5{margin:0 0 6px;font-size:12px;color:#64748b;font-weight:700}
    .float-card strong{font:800 24px "Plus Jakarta Sans",sans-serif;color:#111827}
    .float-card small{display:block;margin-top:5px;color:#64748b}
    .float-one{right:6px;top:22px}
    .float-two{left:0;bottom:18px}
    .float-three{right:30px;bottom:0}
    .section{padding:84px 0;position:relative}
    .trust-strip{background:#fff;border-bottom:1px solid #e5e7eb;border-top:1px solid #e5e7eb}
    .trust-wrap{display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}
    .trust-metric{display:flex;align-items:center;gap:14px}
    .trust-number{font:800 44px "Plus Jakarta Sans",sans-serif;color:#111827}
    .trust-copy h3{margin:0 0 4px;font:700 18px "Plus Jakarta Sans",sans-serif;color:#111827}
    .trust-copy p{margin:0;color:#64748b}
    .trust-badges{display:flex;flex-wrap:wrap;gap:10px}
    .trust-badge{padding:10px 14px;border-radius:999px;background:#f8fafc;border:1px solid #e5e7eb;color:#334155;font-size:13px;font-weight:600}
    .light-bg{background:#f5f5f5}
    .white-bg{background:#fff}
    .section-head{text-align:center;max-width:780px;margin:0 auto 36px}
    .section-head h2{font:800 clamp(32px,4vw,44px) "Plus Jakarta Sans",sans-serif;line-height:1.1;margin:0 0 14px;color:#111827}
    .section-head p{margin:0;color:#64748b;font-size:17px;line-height:1.8}
    .tabs-shell{display:flex;gap:24px;align-items:stretch}
    .tabs-nav{width:34%;display:flex;flex-direction:column;gap:14px}
    .tab-btn{width:100%;text-align:left;padding:18px;border-radius:18px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 8px 24px rgba(0,0,0,.05);cursor:pointer;transition:.25s}
    .tab-btn:hover,.tab-btn.active{border-color:rgba(212,45,45,.25);transform:translateY(-2px);box-shadow:0 16px 36px rgba(212,45,45,.09)}
    .tab-btn span{display:block;font-size:13px;color:var(--accent);font-weight:800;margin-bottom:6px}
    .tab-btn strong{display:block;font:800 19px "Plus Jakarta Sans",sans-serif;color:#111827}
    .tab-btn p{margin:8px 0 0;color:#64748b;line-height:1.6;font-size:14px}
    .preview-panel{flex:1;background:#fff;border:1px solid #e5e7eb;border-radius:24px;box-shadow:0 16px 40px rgba(0,0,0,.07);padding:28px;overflow:hidden}
    .panel-top{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;margin-bottom:18px}
    .panel-top h3{margin:0 0 8px;font:800 30px "Plus Jakarta Sans",sans-serif;color:#111827}
    .panel-top p{margin:0;color:#64748b;line-height:1.75}
    .mini-stat{padding:14px 16px;border-radius:16px;background:#fff5f5;border:1px solid rgba(212,45,45,.12);min-width:145px}
    .mini-stat small{display:block;color:#64748b;margin-bottom:6px}
    .mini-stat strong{font:800 24px "Plus Jakarta Sans",sans-serif;color:var(--accent)}
    .features-list{display:flex;flex-direction:column;gap:14px;margin:24px 0 26px}
    .feature-box{display:flex;gap:14px;align-items:flex-start;padding:16px;border-radius:18px;background:#f8fafc;border:1px solid #e5e7eb;transition:.25s}
    .feature-box:hover{transform:translateY(-4px);box-shadow:0 14px 28px rgba(15,23,42,.06)}
    .feature-icon{width:42px;height:42px;border-radius:12px;background:rgba(212,45,45,.12);color:var(--accent);display:flex;align-items:center;justify-content:center;flex:0 0 42px}
    .feature-text h4{margin:0 0 6px;font:800 17px "Plus Jakarta Sans",sans-serif;color:#111827}
    .feature-text p{margin:0;color:#64748b;line-height:1.7}
    .integration-visual,.custom-visual{margin-top:8px;padding:18px;border-radius:20px;background:linear-gradient(180deg,#fff,#f8fafc);border:1px solid #e5e7eb}
    .app-flow,.custom-flow{display:flex;flex-wrap:wrap;gap:12px;align-items:center}
    .app-tile,.flow-tile{padding:14px 16px;border-radius:14px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 8px 20px rgba(0,0,0,.04);font-weight:700;color:#334155}
    .flow-link{width:26px;height:2px;background:linear-gradient(90deg,var(--accent),rgba(212,45,45,.15))}
    .cta-strip{padding:30px 0;background:#fff;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
    .cta-strip-card{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;background:#0f172a;color:#fff;border-radius:24px;padding:28px 30px;box-shadow:0 18px 40px rgba(15,23,42,.18)}
    .cta-strip-card h3{margin:0 0 8px;font:800 30px "Plus Jakarta Sans",sans-serif}
    .cta-strip-card p{margin:0;color:#cbd5e1;line-height:1.7}
    .pricing-wrap{display:flex;justify-content:center}
    .price-card{width:min(760px,100%);background:#fff;border:2px solid rgba(212,45,45,.15);border-radius:24px;box-shadow:0 18px 40px rgba(0,0,0,.08);padding:30px;position:relative}
    .price-badge{display:inline-flex;padding:8px 12px;border-radius:999px;background:#e8f7ec;color:#15803d;font-weight:800;font-size:12px;margin-bottom:16px}
    .price-title{font:800 34px "Plus Jakarta Sans",sans-serif;margin:0 0 10px;color:#111827}
    .price-row{display:flex;align-items:flex-end;gap:12px;flex-wrap:wrap;margin-bottom:18px}
    .old-price{color:#94a3b8;text-decoration:line-through;font-size:16px}
    .new-price{font:800 42px "Plus Jakarta Sans",sans-serif;color:#111827}
    .pricing-note{color:#64748b;line-height:1.8;margin:0 0 20px}
    .check-list{display:flex;flex-direction:column;gap:12px;margin:0 0 24px;padding:0;list-style:none}
    .check-list li{display:flex;gap:12px;align-items:flex-start;color:#334155;line-height:1.7}
    .check{width:22px;height:22px;border-radius:50%;background:rgba(22,163,74,.12);color:#16a34a;display:flex;align-items:center;justify-content:center;flex:0 0 22px;font-weight:800;margin-top:2px}
    .full-btn{width:100%}
    .testimonial-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:24px;align-items:stretch}
    .testimonial-main,.testimonial-side{background:#fff;border:1px solid #e5e7eb;border-radius:24px;box-shadow:0 16px 36px rgba(0,0,0,.06)}
    .testimonial-main{padding:34px;overflow:hidden}
    .slider-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .slide{min-width:100%}
    .quote-mark{font-size:68px;line-height:.8;color:var(--accent);font-family:"Plus Jakarta Sans",sans-serif}
    .stars{color:#fbbf24;letter-spacing:2px;font-size:18px;margin:10px 0 16px}
    .testimonial-text{font-size:22px;line-height:1.7;color:#1f2937;margin:0 0 24px}
    .author{display:flex;align-items:center;gap:14px}
    .avatar{width:54px;height:54px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800}
    .author strong{display:block;font-size:16px;color:#111827}
    .author span{display:block;color:#6b7280;font-size:14px;margin-top:4px}
    .dots{display:flex;justify-content:center;gap:8px;margin-top:22px}
    .dot-btn{width:8px;height:8px;border-radius:999px;border:none;background:#cbd5e1;cursor:pointer;transition:.3s}
    .dot-btn.active{width:24px;background:var(--accent)}
    .testimonial-side{padding:24px;display:flex;flex-direction:column;gap:16px}
    .mini-quote{padding:18px;border-radius:18px;background:#f8fafc;border:1px solid #e5e7eb}
    .mini-quote p{margin:0 0 12px;color:#334155;line-height:1.7}
    .mini-quote strong{display:block;color:#111827}
    .mini-quote span{display:block;color:#6b7280;font-size:14px;margin-top:4px}
    .footer{background:#0f172a;color:#fff;padding:44px 0}
    .footer-top{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;align-items:flex-start}
    .footer-brand p,.footer-links a,.footer-contact a,.footer-contact p{color:#cbd5e1}
    .footer-brand p{max-width:420px;line-height:1.8}
    .footer-contact,.footer-links{display:flex;flex-direction:column;gap:10px}
    .footer-bottom{display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;align-items:center;margin-top:28px;padding-top:20px;border-top:1px solid rgba(255,255,255,.12)}
    .socials{display:flex;gap:10px}
    .social-icon{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);transition:.25s}
    .social-icon:hover{transform:translateY(-2px);background:rgba(255,255,255,.14)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease, transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}
    .reveal-delay-2{transition-delay:.2s}
    .reveal-delay-3{transition-delay:.3s}
    .zoom-reveal{overflow:hidden}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.1);will-change:transform}
    [data-depth]{will-change:transform}
    .float-ambient{animation:floatY 6s ease-in-out infinite}
    .float-drift{animation:floatY 9s ease-in-out infinite}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
    .stagger-parent>*{opacity:0;transform:translateY(24px)}
    .glass-card{background:rgba(255,255,255,.05);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.08);border-radius:16px}
    @media (max-width: 991px){
      .banner_wrap,.tabs-shell,.testimonial-grid{grid-template-columns:1fr;display:block}
      .hero-visual{margin-top:32px}
      .tabs-nav{width:100%;margin-bottom:20px}
      .preview-panel{margin-top:0}
      .trust-wrap,.cta-strip-card,.footer-top,.footer-bottom{flex-direction:column;align-items:flex-start}
    }
    @media (max-width: 767px){
      .nav-bar{flex-wrap:wrap}
      .nav-right{width:100%;justify-content:space-between}
      .banner_wrap{padding:70px 0 56px;min-height:auto}
      .banner-title{font-size:48px}
      .hero-visual{min-height:420px}
      .dashboard-shell{height:420px;padding:16px}
      .ui-main{left:18px;top:18px;right:18px;bottom:46px}
      .float-one{right:0;top:8px}
      .float-two{left:-2px;bottom:10px}
      .float-three{right:12px;bottom:-4px}
      .section{padding:64px 0}
      .trust-number{font-size:34px}
      .panel-top{flex-direction:column}
      .testimonial-text{font-size:18px}
      .price-card{padding:22px}
    }
  `;

  const icon = (type) => {
    const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none' };
    switch (type) {
      case 'chat':
        return (
          <svg {...common}>
            <path d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v7A2.5 2.5 0 0 1 17.5 16H9l-4 4v-4.5A2.5 2.5 0 0 1 4 13V6.5Z" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        );
      case 'ticket':
        return (
          <svg {...common}>
            <path d="M5 8a2 2 0 0 1 2-2h10v3a2 2 0 1 0 0 4v3H7a2 2 0 0 1-2-2V8Z" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        );
      case 'ai':
        return (
          <svg {...common}>
            <path d="M12 3v4M12 17v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M3 12h4M17 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />
            <circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="1.8" />
          </svg>
        );
      default:
        return (
          <svg {...common}>
            <path d="M6 12h12M12 6l6 6-6 6" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        );
    }
  };

  const getInitials = (name) =>
    name
      .split(' ')
      .slice(0, 2)
      .map((n) => n[0])
      .join('');

  return (
    <div className="page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="main_header">
        <div className="container nav-bar">
          <div className="nav-left">
            <span className="logo-text">Zoho Desk</span>
          </div>
          <div className="nav-right">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <a
              href={ctaItems[0].href}
              className="animated-cta btn-magnetic"
              target="_blank"
              rel="noreferrer"
            >
              {ctaItems[0].text}
            </a>
          </div>
        </div>
      </header>

      <section className="hero-section">
        <div className="container banner_wrap">
          <div className="banner-text stagger-parent" data-depth="0.15">
            <h1 className="banner-title split-text reveal">
              Deliver Exceptional Customer Support with{' '}
              <span className="gradient-text">Zoho Desk</span>
            </h1>
            <p className="banner-content reveal reveal-delay-1">
              Streamline customer service, manage tickets efficiently, and deliver seamless support experiences across every channel.
            </p>

            <div className="chip-row reveal reveal-delay-2">
              {[
                'Omnichannel Support',
                'Ticket Management',
                'AI Assistance (Zia)',
                'Workflow Automation'
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  {i === 0 ? icon('chat') : i === 1 ? icon('ticket') : i === 2 ? icon('ai') : icon('arrow')}
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="banner-actions reveal reveal-delay-3">
              <a
                href={ctaItems[1].href}
                className="animated-cta btn-magnetic"
                target="_blank"
                rel="noreferrer"
              >
                {ctaItems[1].text}
              </a>
              <a
                href="#pricing"
                className="ghost-btn"
              >
                View Pricing
              </a>
            </div>
          </div>

          <div className="hero-visual zoom-reveal">
            <div className="hero-cinematic-bg depth-background hero-cinematic-bg" data-depth="0.4" />
            <div className="dashboard-shell" data-depth="0.15">
              <div className="ui-window ui-main">
                <div className="ui-topbar">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <div className="ui-content">
                  <div className="ui-sidebar">
                    <div className="side-block" />
                    <div className="side-block" />
                    <div className="side-block" />
                    <div className="side-block" />
                  </div>
                  <div className="ui-panel">
                    <div className="stat-row">
                      <div className="stat-card">
                        <h4>Trusted by</h4>
                        <strong>100,000+</strong>
                      </div>
                      <div className="stat-card">
                        <h4>Support</h4>
                        <strong>AI</strong>
                      </div>
                    </div>
                    <div className="msg-line lg red" />
                    <div className="msg-line md" />
                    <div className="msg-line sm" />
                    <div className="ui-ticket">
                      <div className="ticket-head">
                        <div className="ticket-pill">Omnichannel Support</div>
                        <div className="ticket-pill">Ticket Management</div>
                      </div>
                      <div className="msg-line lg" />
                      <div className="msg-line md red" />
                      <div className="msg-line sm" />
                      <div className="chart-row">
                        <div className="chart-bar" style={{ height: '45%' }} />
                        <div className="chart-bar" style={{ height: '70%' }} />
                        <div className="chart-bar" style={{ height: '58%' }} />
                        <div className="chart-bar" style={{ height: '82%' }} />
                        <div className="chart-bar" style={{ height: '66%' }} />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="float-card float-one float-ambient depth-foreground">
                <h5>Trusted by</h5>
                <strong data-count="100000" data-suffix="+" data-prefix="">
                  0+
                </strong>
                <small>Businesses Globally</small>
              </div>

              <div className="float-card float-two float-ambient depth-foreground">
                <h5>Core capability</h5>
                <strong>AI</strong>
                <small>AI Assistance (Zia)</small>
              </div>

              <div className="float-card float-three float-ambient depth-foreground">
                <h5>Support workflow</h5>
                <strong>24x7</strong>
                <small>Easy Setup & Quick Onboarding</small>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section trust-strip clip-reveal">
        <div className="container trust-wrap">
          <div className="trust-metric reveal">
            <div className="trust-number" data-count="100000" data-suffix="+" data-prefix="">
              0+
            </div>
            <div className="trust-copy">
              <h3>Trusted by 100,000+ Businesses Globally</h3>
              <p>Customer Support Software</p>
            </div>
          </div>
          <div className="trust-badges stagger-parent">
            {[
              'Digital License Delivered to Your Email',
              '24x7 Support',
              'Easy Setup & Quick Onboarding',
              'Secure & Reliable Cloud Platform'
            ].map((item, i) => (
              <div className="trust-badge" key={i}>
                {item}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section light-bg">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Explore <span className="gradient-text">Zoho Desk</span>
            </h2>
            <p>
              Businesses, support teams, and customer service organizations can explore the platform through the key product areas below.
            </p>
          </div>

          <div className="tabs-shell">
            <div className="tabs-nav stagger-parent">
              {productSections.map((section, index) => (
                <button
                  key={section.name}
                  className={`tab-btn ${activeSection === index ? 'active' : ''}`}
                  onClick={() => setActiveSection(index)}
                  type="button"
                >
                  <span>{section.name}</span>
                  <strong>{section.headline}</strong>
                  <p>{section.description}</p>
                </button>
              ))}
            </div>

            <div className="preview-panel reveal">
              <div className="panel-top">
                <div>
                  <h3>{currentSection.headline}</h3>
                  <p>{currentSection.description}</p>
                </div>
                <div className="mini-stat">
                  <small>Product</small>
                  <strong>Zoho Desk</strong>
                </div>
              </div>

              <div className="features-list">
                {currentSection.features.map((feature, idx) => (
                  <div className="feature-box hover-lift" key={idx}>
                    <div className="feature-icon">
                      {idx % 3 === 0 ? icon('chat') : idx % 3 === 1 ? icon('ticket') : icon('ai')}
                    </div>
                    <div className="feature-text">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>

              {activeSection === 2 ? (
                <div className="integration-visual zoom-reveal">
                  <div className="app-flow" ref={appTrackRef}>
                    {['Zoho CRM', 'HubSpot', 'Slack', 'Microsoft Teams', 'Aircall', 'RingCentral', 'Shopify', 'WooCommerce', 'Zapier', 'Zoho Flow'].map(
                      (app, i, arr) => (
                        <React.Fragment key={app}>
                          <div className="app-tile">{app}</div>
                          {i !== arr.length - 1 && <div className="flow-link" />}
                        </React.Fragment>
                      )
                    )}
                  </div>
                </div>
              ) : activeSection === 3 ? (
                <div className="custom-visual zoom-reveal">
                  <div className="custom-flow">
                    {['Layouts', 'Blueprints', 'Extensions', 'Help Center'].map((item, i, arr) => (
                      <React.Fragment key={item}>
                        <div className="flow-tile">{item}</div>
                        {i !== arr.length - 1 && <div className="flow-link" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="custom-visual zoom-reveal">
                  <div className="custom-flow">
                    {currentSection.features.map((item, i, arr) => (
                      <React.Fragment key={item.title}>
                        <div className="flow-tile">{item.title}</div>
                        {i !== arr.length - 1 && <div className="flow-link" />}
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              )}

              <div style={{ marginTop: '24px' }}>
                <a
                  href={ctaItems[2].href}
                  className="animated-cta"
                  target="_blank"
                  rel="noreferrer"
                >
                  {ctaItems[2].text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div className="cta-strip-card reveal">
            <div>
              <h3>Make Smarter Support Decisions with Zia AI</h3>
              <p>
                Zoho Desk includes Zia, an AI-powered assistant that helps support teams improve response quality and resolution speed.
              </p>
            </div>
            <a
              href={ctaItems[3].href}
              className="animated-cta"
              target="_blank"
              rel="noreferrer"
            >
              {ctaItems[3].text}
            </a>
          </div>
        </div>
      </section>

      <section id="pricing" className="section light-bg">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              <span className="gradient-text">Zoho Desk</span> Pricing
            </h2>
            <p>Customer Support Software</p>
          </div>

          <div className="pricing-wrap">
            <div className="price-card reveal">
              <div className="price-badge">Highlighted Plan</div>
              <h3 className="price-title">Zoho Desk</h3>
              <div className="price-row">
                <span className="old-price">(was )</span>
                <span className="new-price">Zoho Desk</span>
              </div>
              <p className="pricing-note">
                Includes: Ticket Management, Omnichannel Support, Workflow Automation, AI-Powered Assistance, Knowledge Base, Reporting & Analytics, Integrations, Alerts & Notifications, Supported Device: Android, iOS, Windows, Mac
              </p>
              <ul className="check-list">
                {[
                  'Ticket Management',
                  'Omnichannel Support',
                  'Workflow Automation',
                  'AI-Powered Assistance',
                  'Knowledge Base',
                  'Reporting & Analytics',
                  'Integrations',
                  'Alerts & Notifications',
                  'Supported Device: Android, iOS, Windows, Mac'
                ].map((item) => (
                  <li key={item}>
                    <span className="check">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <a
                href={ctaItems[4].href}
                className="animated-cta full-btn"
                target="_blank"
                rel="noreferrer"
              >
                {ctaItems[4].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section white-bg">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              What teams say about <span className="gradient-text">Zoho Desk</span>
            </h2>
            <p>Real testimonials from support and customer experience professionals.</p>
          </div>

          <div className="testimonial-grid">
            <div className="testimonial-main reveal">
              <div
                className="slider-track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div className="slide" key={i}>
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">{t.quote}</p>
                    <div className="author">
                      <div className="avatar">{getInitials(t.author)}</div>
                      <div>
                        <strong>{t.author}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              <div className="dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    className={`dot-btn ${i === activeSlide ? 'active' : ''}`}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="testimonial-side stagger-parent">
              {testimonials.slice(1, 4).map((t, i) => (
                <div className="mini-quote" key={i}>
                  <div className="stars">★★★★★</div>
                  <p>{t.quote}</p>
                  <strong>{t.author}</strong>
                  <span>{t.role}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <img
                src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
                height="28px"
                alt="Techjockey"
              />
              <p>
                Zoho Desk Customer Support Software for businesses, support teams, and customer service organizations.
              </p>
            </div>

            <div className="footer-contact">
              <a href="mailto:support@techjockey.com">support@techjockey.com</a>
              <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
            </div>

            <div className="footer-links">
              <a href="/privacy-policy" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>
              <a href="/terms-and-conditions" target="_blank" rel="noreferrer">
                Terms
              </a>
            </div>

            <div className="socials">
              <a
                className="social-icon"
                href="https://www.facebook.com/TechjockeyInfo/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H16.7V4.8c-.3 0-1.2-.1-2.4-.1-2.4 0-4.1 1.5-4.1 4.3V11H7.5v3h2.7v8h3.3Z" />
                </svg>
              </a>
              <a
                className="social-icon"
                href="https://www.instagram.com/techjockey/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.2A3.8 3.8 0 1 0 12 16a3.8 3.8 0 0 0 0-7.6Zm0 6.3A2.5 2.5 0 1 1 12 9.5a2.5 2.5 0 0 1 0 5Zm4.9-6.6a.9.9 0 1 0 0-1.8.9.9 0 0 0 0 1.8Z" />
                </svg>
              </a>
              <a
                className="social-icon"
                href="https://twitter.com/TechjockeyInfo"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.2-8.2L1 2h6.3l4.3 5.8L18.9 2Zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20Z" />
                </svg>
              </a>
              <a
                className="social-icon"
                href="https://www.linkedin.com/company/techjockeyinfotech/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.9 8.5H3.6V20h3.3V8.5ZM5.2 3A1.9 1.9 0 1 0 5.2 6.8 1.9 1.9 0 0 0 5.2 3ZM20.4 13c0-3.4-1.8-5-4.3-5-2 0-2.8 1.1-3.3 1.9v-1.6H9.5c0 1.1 0 11.7 0 11.7h3.3v-6.5c0-.3 0-.7.1-.9.2-.7.8-1.5 1.9-1.5 1.4 0 2 1.1 2 2.7V20H20v-7Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;