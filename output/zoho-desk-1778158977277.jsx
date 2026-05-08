import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff0000';
  const primary = '#ff0000';
  const bodyBg = '#ffffff';

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const pageRef = useRef(null);

  const ctas = [
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

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );

    const els = document.querySelectorAll('.reveal');
    els.forEach((el) => observer.observe(el));

    const loadScript = (src) =>
      new Promise((resolve) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          resolve();
          return;
        }
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
          window.gsap.registerPlugin(window.ScrollTrigger);

          window.gsap.utils.toArray('.zoom-reveal').forEach((el) => {
            const img = el.querySelector('img,video');
            if (img) {
              window.gsap.to(img, {
                scale: 1,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse'
                }
              });
            }
          });

          window.gsap.utils.toArray('[data-depth]').forEach((el) => {
            window.gsap.to(el, {
              y: () =>
                -(window.innerHeight * (parseFloat(el.dataset.depth) || 0.2) * 0.5),
              ease: 'none',
              scrollTrigger: {
                trigger: el.closest('section') || el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true
              }
            });
          });

          window.gsap.utils.toArray('.stagger-parent').forEach((p) => {
            window.gsap.to(p.children, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: { trigger: p, start: 'top 80%' }
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
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const initials = (name) =>
    name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
      .join('');

  const icon = (
    <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path
        d="M12 3l7 4v5c0 4.5-2.9 7.9-7 9-4.1-1.1-7-4.5-7-9V7l7-4z"
        stroke={accent}
        strokeWidth="1.8"
      />
      <path d="M9 12l2 2 4-4" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  const css = `
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;background:${bodyBg};color:#111827;font-family:Inter,sans-serif;scroll-behavior:smooth}
    body{overflow-x:hidden}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .landing-root{background:${bodyBg}}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:88px 0;position:relative}
    .section-light{background:#ffffff}
    .section-soft{background:#f8fafc}
    .topbar{position:sticky;top:0;z-index:50;background:rgba(15,23,42,.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:flex;align-items:center;justify-content:space-between;gap:16px;min-height:76px}
    .nav-left{display:flex;align-items:center;gap:12px;min-width:0}
    .nav-right{display:flex;align-items:center;gap:18px}
    .brand-text{font-weight:800;font-size:20px;color:${accent};font-family:"Plus Jakarta Sans",sans-serif}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:10px;background:${accent};color:#fff;font-weight:700;border:1px solid ${accent};transition:.25s ease;white-space:nowrap}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(255,0,0,.22);background:${primary}}
    .ghost-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 20px;border-radius:10px;background:transparent;color:#fff;font-weight:700;border:1px solid rgba(255,255,255,.22);transition:.25s ease}
    .ghost-cta:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(0,0,0,.16);background:rgba(255,255,255,.08)}
    .hero{background:#0f172a;color:#fff;padding:90px 0 72px;overflow:hidden}
    .hero-wrap{display:flex;align-items:center;gap:42px}
    .hero-copy,.hero-visual{flex:1 1 0}
    .banner-title{font-family:"Plus Jakarta Sans",sans-serif;font-size:clamp(48px,6vw,68px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;word-break:normal;overflow-wrap:normal;hyphens:none;white-space:normal}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-copy p{font-size:18px;line-height:1.7;color:#cbd5e1;max-width:640px;margin:0}
    .hero-chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
    .hero-chip{display:flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;border:1px solid rgba(255,0,0,.3);background:rgba(255,0,0,.08);color:#e5e7eb;font-size:13px}
    .hero-chip svg{width:16px;height:16px;flex:0 0 16px}
    .hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin-top:28px}
    .hero-panel{position:relative;min-height:500px;border-radius:24px;padding:22px;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.1);box-shadow:0 30px 80px rgba(0,0,0,.35);overflow:hidden}
    .hero-cinematic-bg{position:absolute;inset:0;background:
      radial-gradient(circle at 20% 20%, rgba(255,0,0,.28), transparent 32%),
      radial-gradient(circle at 80% 18%, rgba(255,255,255,.08), transparent 20%),
      radial-gradient(circle at 70% 80%, rgba(255,0,0,.14), transparent 28%),
      linear-gradient(135deg, #10192f 0%, #131f3f 50%, #0b1220 100%)}
    .dashboard-shell{position:relative;height:100%;display:flex;flex-direction:column;gap:16px;z-index:1}
    .dash-top{display:flex;gap:12px}
    .dash-pill,.dash-mini,.dash-card,.dash-list-item,.metric-box,.app-tile,.price-card,.testimonial-card,.feature-item,.spotlight-card,.mini-card{box-shadow:0 8px 30px rgba(15,23,42,.08)}
    .dash-pill{height:56px;flex:1;border-radius:16px;background:rgba(255,255,255,.92);padding:14px}
    .dash-grid{display:flex;gap:16px;flex:1}
    .dash-main{flex:1.4;background:#fff;border-radius:20px;padding:18px;display:flex;flex-direction:column;gap:14px}
    .dash-side{flex:.9;display:flex;flex-direction:column;gap:16px}
    .dash-mini{background:rgba(255,255,255,.96);border-radius:18px;padding:16px;min-height:128px}
    .bar-row{display:flex;align-items:flex-end;gap:10px;height:130px}
    .bar{flex:1;border-radius:10px 10px 4px 4px;background:linear-gradient(180deg, rgba(255,0,0,.85), rgba(255,0,0,.35))}
    .line-list{display:flex;flex-direction:column;gap:12px}
    .line{height:12px;border-radius:999px;background:#eef2f7}
    .line.red{background:linear-gradient(90deg, rgba(255,0,0,.18), rgba(255,0,0,.52))}
    .float-card{position:absolute;background:#fff;border-radius:16px;padding:12px 14px;border:1px solid rgba(15,23,42,.06);box-shadow:0 16px 40px rgba(0,0,0,.18);z-index:2}
    .float-a{top:26px;right:18px}
    .float-b{left:18px;bottom:20px}
    .float-label{font-size:12px;color:#64748b;margin-bottom:6px}
    .float-value{font-weight:800;font-size:18px;color:#0f172a;font-family:"Plus Jakarta Sans",sans-serif}
    .zoom-reveal{overflow:hidden}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.1);will-change:transform}
    [data-depth]{will-change:transform}
    .float-ambient{animation:floatY 6s ease-in-out infinite}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
    .stagger-parent>*{opacity:0;transform:translateY(24px)}
    .glass-card{background:rgba(255,255,255,.05);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,.08);border-radius:16px}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}
    .metrics-strip{background:#f5f5f5;border-top:1px solid #ececec;border-bottom:1px solid #ececec}
    .metrics-wrap{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap;padding:24px 0}
    .metric-box{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:18px 22px;flex:1;min-width:240px}
    .metric-box h3{margin:0 0 6px;font-family:"Plus Jakarta Sans",sans-serif;font-size:32px;color:${accent}}
    .metric-box p{margin:0;color:#475569;line-height:1.6}
    .section-head{max-width:780px;margin-bottom:30px}
    .eyebrow{display:inline-flex;align-items:center;gap:8px;font-size:12px;font-weight:700;letter-spacing:.12em;text-transform:uppercase;color:${accent};margin-bottom:10px}
    .section-title{font-family:"Plus Jakarta Sans",sans-serif;font-size:clamp(32px,4vw,44px);line-height:1.15;margin:0 0 12px;color:#111827}
    .section-desc{margin:0;color:#475569;font-size:17px;line-height:1.75}
    .spotlight-card{background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:28px;display:flex;gap:28px;align-items:stretch}
    .spotlight-left,.spotlight-right{flex:1}
    .spotlight-copy h3{margin:0 0 10px;font-family:"Plus Jakarta Sans",sans-serif;font-size:28px;color:#111827}
    .spotlight-copy p{margin:0;color:#475569;line-height:1.75}
    .visual-shell{height:100%;min-height:320px;border-radius:22px;background:linear-gradient(180deg,#fff,#f7f9fc);border:1px solid #e5e7eb;padding:18px;position:relative;overflow:hidden}
    .ui-header{display:flex;gap:8px;margin-bottom:14px}
    .ui-dot{width:10px;height:10px;border-radius:50%;background:#e5e7eb}
    .ui-main{display:flex;gap:14px;height:calc(100% - 24px)}
    .ui-sidebar{width:28%;background:#f8fafc;border-radius:16px;padding:12px;display:flex;flex-direction:column;gap:10px}
    .ui-content{flex:1;background:#fff;border:1px solid #edf2f7;border-radius:16px;padding:14px;display:flex;flex-direction:column;gap:12px}
    .ui-block{height:12px;border-radius:999px;background:#e2e8f0}
    .ui-block.red{background:linear-gradient(90deg, rgba(255,0,0,.2), rgba(255,0,0,.65))}
    .ui-ticket{padding:12px;border:1px solid #edf2f7;border-radius:14px;background:#fff}
    .feature-list{display:flex;flex-direction:column;gap:14px;margin-top:24px}
    .feature-item{display:flex;gap:14px;align-items:flex-start;padding:16px 18px;border-radius:18px;background:#fff;border:1px solid #e5e7eb}
    .feature-icon{width:42px;height:42px;border-radius:12px;background:rgba(255,0,0,.08);display:flex;align-items:center;justify-content:center;flex:0 0 42px}
    .feature-icon svg{width:22px;height:22px}
    .feature-text h4{margin:0 0 6px;font-family:"Plus Jakarta Sans",sans-serif;font-size:18px;color:#111827}
    .feature-text p{margin:0;color:#475569;line-height:1.65}
    .mini-grid{display:flex;flex-wrap:wrap;gap:14px;margin-top:16px}
    .mini-card{width:calc(50% - 7px);background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:18px}
    .mini-card h5{margin:0 0 8px;font-family:"Plus Jakarta Sans",sans-serif;font-size:17px;color:#111827}
    .mini-card p{margin:0;color:#475569;line-height:1.6}
    .integration-grid{display:flex;flex-wrap:wrap;gap:12px;margin-top:20px}
    .app-tile{padding:14px 16px;border-radius:16px;background:#fff;border:1px solid #e5e7eb;min-width:170px;flex:1}
    .app-tile strong{display:block;font-family:"Plus Jakarta Sans",sans-serif;font-size:16px;margin-bottom:4px;color:#111827}
    .app-tile span{color:#475569;font-size:14px;line-height:1.55}
    .pricing-wrap{display:flex;justify-content:center}
    .price-card{width:min(760px,100%);background:#fff;border:2px solid rgba(255,0,0,.2);border-radius:24px;padding:30px}
    .price-top{display:flex;align-items:flex-start;justify-content:space-between;gap:16px;flex-wrap:wrap;margin-bottom:16px}
    .price-top h3{margin:0;font-family:"Plus Jakarta Sans",sans-serif;font-size:30px;color:#111827}
    .badge-green{display:inline-flex;align-items:center;padding:8px 12px;border-radius:999px;background:#e9f9ee;color:#15803d;font-size:13px;font-weight:700}
    .price-row{display:flex;align-items:flex-end;gap:10px;flex-wrap:wrap;margin-bottom:10px}
    .old-price{font-size:18px;color:#94a3b8;text-decoration:line-through}
    .new-price{font-size:42px;font-weight:800;font-family:"Plus Jakarta Sans",sans-serif;color:#111827}
    .price-note{color:#64748b;font-size:14px;margin-bottom:18px}
    .check-list{display:flex;flex-direction:column;gap:12px;margin:22px 0 26px}
    .check-item{display:flex;gap:12px;align-items:flex-start;color:#334155}
    .check-item svg{width:20px;height:20px;flex:0 0 20px;margin-top:2px}
    .testi-wrap{display:flex;gap:22px;align-items:stretch}
    .testimonial-card{flex:1;background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:30px;position:relative}
    .quote-mark{font-size:54px;line-height:1;color:${accent};font-family:"Plus Jakarta Sans",sans-serif;margin-bottom:10px}
    .stars{color:#f59e0b;letter-spacing:2px;font-size:18px;margin-bottom:18px}
    .testimonial-card p{font-size:20px;line-height:1.8;color:#334155;margin:0 0 24px}
    .author-row{display:flex;align-items:center;gap:14px}
    .avatar{width:54px;height:54px;border-radius:50%;background:${accent};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800}
    .author-meta strong{display:block;font-size:16px;color:#111827}
    .author-meta span{display:block;color:#64748b;font-size:14px}
    .testi-nav{display:flex;align-items:center;justify-content:space-between;gap:20px;margin-top:20px}
    .arrow-group{display:flex;gap:10px}
    .arrow-btn{width:42px;height:42px;border-radius:50%;border:1px solid #e5e7eb;background:#fff;cursor:pointer;transition:.25s ease}
    .arrow-btn:hover{transform:translateY(-2px);box-shadow:0 10px 20px rgba(15,23,42,.08)}
    .dots{display:flex;gap:8px}
    .dot{width:8px;height:8px;border:none;border-radius:999px;background:#cbd5e1;cursor:pointer;transition:.3s ease}
    .dot.active{width:24px;background:${accent}}
    .cta-strip{background:#ff0000;padding:26px 0}
    .cta-strip-inner{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}
    .cta-strip h3{margin:0;color:#fff;font-family:"Plus Jakarta Sans",sans-serif;font-size:28px}
    .footer{background:#0f172a;color:#fff;padding:56px 0 28px}
    .footer-top{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;padding-bottom:24px;border-bottom:1px solid rgba(255,255,255,.1)}
    .footer-brand{display:flex;flex-direction:column;gap:14px}
    .footer-brand img{height:28px;width:auto}
    .footer-brand a,.footer-links a{color:#cbd5e1}
    .footer-links{display:flex;gap:18px;flex-wrap:wrap;align-items:center}
    .socials{display:flex;gap:10px}
    .socials a{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.14);color:#fff;transition:.25s ease}
    .socials a:hover{transform:translateY(-2px);background:rgba(255,255,255,.08)}
    .footer-bottom{padding-top:18px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;color:#94a3b8;font-size:14px}
    @media (max-width: 991px){
      .hero-wrap,.spotlight-card,.testi-wrap{flex-direction:column}
      .hero-panel{min-height:460px}
    }
    @media (max-width: 767px){
      .nav-inner{min-height:70px}
      .nav-right{gap:10px}
      .nav-right img{display:none}
      .section{padding:68px 0}
      .hero{padding:78px 0 56px}
      .hero-panel{min-height:420px}
      .mini-card{width:100%}
      .metric-box{min-width:100%}
      .price-card,.testimonial-card,.spotlight-card{padding:22px}
      .section-title{font-size:32px}
      .testimonial-card p{font-size:17px}
    }
  `;

  return (
    <div className="landing-root" ref={pageRef}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="topbar">
        <div className="container nav-inner">
          <div className="nav-left">
            <span className="brand-text">Zoho</span>
          </div>
          <div className="nav-right">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <a
              href={ctas[0].href}
              target="_blank"
              rel="noreferrer"
              className="animated-cta btn-magnetic"
            >
              {ctas[0].text}
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-wrap">
          <div className="hero-copy" data-depth="0.15">
            <div className="eyebrow reveal">Customer Support Software</div>
            <h1 className="banner-title split-text reveal">
              Deliver Exceptional Customer Support with{' '}
              <span className="gradient-text">Zoho Desk</span>
            </h1>
            <p className="reveal reveal-delay-1">
              Streamline customer service, manage tickets efficiently, and deliver seamless support experiences across every channel.
            </p>

            <div className="hero-chips reveal reveal-delay-2">
              {[
                'Omnichannel Support',
                'Ticket Management',
                'AI Assistance (Zia)',
                'Workflow Automation'
              ].map((chip, i) => (
                <div key={i} className="hero-chip">
                  {icon}
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions reveal reveal-delay-3">
              <a
                href={ctas[1].href}
                target="_blank"
                rel="noreferrer"
                className="animated-cta btn-magnetic"
              >
                {ctas[1].text}
              </a>
            </div>
          </div>

          <div className="hero-visual zoom-reveal" data-depth="0.4">
            <div className="hero-panel">
              <div className="hero-cinematic-bg depth-background" />
              <div className="float-card float-a float-ambient">
                <div className="float-label">Trusted by</div>
                <div className="float-value">100,000+</div>
              </div>
              <div className="float-card float-b float-ambient">
                <div className="float-label">Support experience</div>
                <div className="float-value">Omnichannel</div>
              </div>

              <div className="dashboard-shell">
                <div className="dash-top">
                  <div className="dash-pill" />
                  <div className="dash-pill" />
                </div>
                <div className="dash-grid">
                  <div className="dash-main">
                    <div className="ui-header">
                      <span className="ui-dot" />
                      <span className="ui-dot" />
                      <span className="ui-dot" />
                    </div>
                    <div className="line-list">
                      <div className="line red" style={{ width: '62%' }} />
                      <div className="line" style={{ width: '88%' }} />
                      <div className="line" style={{ width: '72%' }} />
                    </div>
                    <div className="bar-row">
                      <div className="bar" style={{ height: '55%' }} />
                      <div className="bar" style={{ height: '82%' }} />
                      <div className="bar" style={{ height: '68%' }} />
                      <div className="bar" style={{ height: '92%' }} />
                      <div className="bar" style={{ height: '74%' }} />
                    </div>
                  </div>
                  <div className="dash-side">
                    <div className="dash-mini">
                      <div className="line red" style={{ width: '70%', marginBottom: 12 }} />
                      <div className="line" style={{ width: '100%', marginBottom: 10 }} />
                      <div className="line" style={{ width: '82%' }} />
                    </div>
                    <div className="dash-mini">
                      <div className="line red" style={{ width: '58%', marginBottom: 12 }} />
                      <div className="line" style={{ width: '90%', marginBottom: 10 }} />
                      <div className="line" style={{ width: '76%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-strip">
        <div className="container metrics-wrap">
          <div className="metric-box reveal">
            <h3 data-count="100000" data-suffix="+">100,000+</h3>
            <p>Trusted by 100,000+ Businesses Globally</p>
          </div>
          <div className="metric-box reveal reveal-delay-1">
            <h3>Zoho Desk</h3>
            <p>Customer Support Software for streamlined service and efficient ticket management.</p>
          </div>
          <div className="metric-box reveal reveal-delay-2">
            <h3>Zia AI</h3>
            <p>AI-powered assistance to improve response quality and resolution speed.</p>
          </div>
        </div>
      </section>

      <section className="section section-light clip-reveal">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Why Choose Zoho Desk?</div>
            <h2 className="section-title">Why Choose <span className="gradient-text">Zoho Desk?</span></h2>
            <p className="section-desc">
              With powerful automation and contextual AI, Zoho Desk helps businesses deliver faster, smarter, and more personalized customer support.
            </p>
          </div>

          <div className="spotlight-card reveal">
            <div className="spotlight-left spotlight-copy">
              <h3>Why Choose Zoho Desk?</h3>
              <p>
                With powerful automation and contextual AI, Zoho Desk helps businesses deliver faster, smarter, and more personalized customer support.
              </p>
              <div className="feature-list stagger-parent">
                {productSections[0].features.map((feature, idx) => (
                  <div className="feature-item hover-lift" key={idx}>
                    <div className="feature-icon">{icon}</div>
                    <div className="feature-text">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
                <a
                  href={ctas[2].href}
                  target="_blank"
                  rel="noreferrer"
                  className="animated-cta"
                >
                  {ctas[2].text}
                </a>
              </div>
            </div>

            <div className="spotlight-right">
              <div className="visual-shell scene-expand">
                <div className="ui-header">
                  <span className="ui-dot" />
                  <span className="ui-dot" />
                  <span className="ui-dot" />
                </div>
                <div className="ui-main">
                  <div className="ui-sidebar">
                    <div className="ui-block red" style={{ width: '78%' }} />
                    <div className="ui-block" style={{ width: '100%' }} />
                    <div className="ui-block" style={{ width: '84%' }} />
                    <div className="ui-block" style={{ width: '92%' }} />
                    <div className="ui-block" style={{ width: '70%' }} />
                  </div>
                  <div className="ui-content">
                    <div className="ui-ticket">
                      <div className="ui-block red" style={{ width: '46%', marginBottom: 10 }} />
                      <div className="ui-block" style={{ width: '98%', marginBottom: 8 }} />
                      <div className="ui-block" style={{ width: '75%' }} />
                    </div>
                    <div className="ui-ticket">
                      <div className="ui-block red" style={{ width: '38%', marginBottom: 10 }} />
                      <div className="ui-block" style={{ width: '96%', marginBottom: 8 }} />
                      <div className="ui-block" style={{ width: '72%' }} />
                    </div>
                    <div className="ui-ticket">
                      <div className="ui-block red" style={{ width: '52%', marginBottom: 10 }} />
                      <div className="ui-block" style={{ width: '92%', marginBottom: 8 }} />
                      <div className="ui-block" style={{ width: '68%' }} />
                    </div>
                  </div>
                </div>
              </div>
              <div className="mini-grid">
                {productSections[1].features.slice(0, 2).map((item, i) => (
                  <div className="mini-card reveal" key={i}>
                    <h5>{item.title}</h5>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft clip-reveal">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Make Smarter Support Decisions with Zia AI</div>
            <h2 className="section-title">
              Make Smarter Support Decisions with <span className="gradient-text">Zia AI</span>
            </h2>
            <p className="section-desc">
              Zoho Desk includes Zia, an AI-powered assistant that helps support teams improve response quality and resolution speed.
            </p>
          </div>

          <div className="spotlight-card reveal">
            <div className="spotlight-left">
              <div className="visual-shell">
                <div className="mini-grid" style={{ marginTop: 0 }}>
                  {productSections[1].features.map((item, i) => (
                    <div className="mini-card" key={i} style={{ width: 'calc(50% - 7px)' }}>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="spotlight-right spotlight-copy">
              <h3>Make Smarter Support Decisions with Zia AI</h3>
              <p>
                Zoho Desk includes Zia, an AI-powered assistant that helps support teams improve response quality and resolution speed.
              </p>
              <div className="feature-list stagger-parent">
                {productSections[1].features.map((feature, idx) => (
                  <div className="feature-item" key={idx}>
                    <div className="feature-icon">{icon}</div>
                    <div className="feature-text">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light clip-reveal">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Integrate with popular apps and Zoho ecosystem</div>
            <h2 className="section-title">
              Integrate with popular apps and <span className="gradient-text">Zoho ecosystem</span>
            </h2>
            <p className="section-desc">
              Connect your help desk with your favorite apps across CRM, communication, and business tools with ease.
            </p>
          </div>

          <div className="spotlight-card reveal">
            <div className="spotlight-left spotlight-copy">
              <h3>Integrate with popular apps and Zoho ecosystem</h3>
              <p>
                Connect your help desk with your favorite apps across CRM, communication, and business tools with ease.
              </p>
              <div className="integration-grid stagger-parent">
                {productSections[2].features.map((feature, idx) => (
                  <div className="app-tile" key={idx}>
                    <strong>{feature.title}</strong>
                    <span>{feature.description}</span>
                  </div>
                ))}
              </div>
              <div style={{ marginTop: 24 }}>
                <a
                  href={ctas[3].href}
                  target="_blank"
                  rel="noreferrer"
                  className="animated-cta"
                >
                  {ctas[3].text}
                </a>
              </div>
            </div>

            <div className="spotlight-right">
              <div className="visual-shell">
                <div className="ui-header">
                  <span className="ui-dot" />
                  <span className="ui-dot" />
                  <span className="ui-dot" />
                </div>
                <div className="integration-grid" style={{ marginTop: 10 }}>
                  {productSections[2].features.map((feature, idx) => (
                    <div className="app-tile" key={idx}>
                      <strong>{feature.title}</strong>
                      <span>{feature.description}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div style={{ height: 24 }} />

          <div className="spotlight-card reveal">
            <div className="spotlight-left">
              <div className="visual-shell">
                <div className="mini-grid" style={{ marginTop: 0 }}>
                  {productSections[3].features.map((item, i) => (
                    <div className="mini-card" key={i} style={{ width: 'calc(50% - 7px)' }}>
                      <h5>{item.title}</h5>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="spotlight-right spotlight-copy">
              <div className="eyebrow" style={{ marginBottom: 8 }}>Other Features</div>
              <h3>Customization Beyond Limits</h3>
              <p>
                Zoho Desk is built to adapt to your support workflows and business needs.
              </p>
              <div className="feature-list stagger-parent">
                {productSections[3].features.map((feature, idx) => (
                  <div className="feature-item" key={idx}>
                    <div className="feature-icon">{icon}</div>
                    <div className="feature-text">
                      <h4>{feature.title}</h4>
                      <p>{feature.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Pricing</div>
            <h2 className="section-title">Zoho Desk</h2>
            <p className="section-desc">
              Includes Ticket Management, Omnichannel Support, Workflow Automation, AI-Powered Assistance, Knowledge Base, Reporting & Analytics, Integrations, Alerts & Notifications
            </p>
          </div>

          <div className="pricing-wrap reveal">
            <div className="price-card">
              <div className="price-top">
                <div>
                  <h3>Zoho Desk</h3>
                  <div className="price-row">
                    <span className="old-price">(was )</span>
                    <span className="new-price">Zoho Desk</span>
                  </div>
                  <div className="price-note">Customer Support Software</div>
                </div>
                <span className="badge-green">Includes</span>
              </div>

              <div className="check-list">
                {[
                  'Ticket Management',
                  'Omnichannel Support',
                  'Workflow Automation',
                  'AI-Powered Assistance',
                  'Knowledge Base',
                  'Reporting & Analytics',
                  'Integrations',
                  'Alerts & Notifications'
                ].map((item, idx) => (
                  <div className="check-item" key={idx}>
                    {icon}
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={ctas[4].href}
                target="_blank"
                rel="noreferrer"
                className="animated-cta"
                style={{ width: '100%' }}
              >
                {ctas[4].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head reveal">
            <div className="eyebrow">Testimonials</div>
            <h2 className="section-title">
              What teams say about <span className="gradient-text">Zoho Desk</span>
            </h2>
          </div>

          <div className="testi-wrap">
            <div className="testimonial-card reveal">
              <div className="quote-mark">❝</div>
              <div className="stars">★★★★★</div>
              <p>{testimonials[activeTestimonial].quote}</p>
              <div className="author-row">
                <div className="avatar">{initials(testimonials[activeTestimonial].author)}</div>
                <div className="author-meta">
                  <strong>{testimonials[activeTestimonial].author}</strong>
                  <span>{testimonials[activeTestimonial].role}</span>
                </div>
              </div>
            </div>
          </div>

          <div className="testi-nav">
            <div className="arrow-group">
              <button
                className="arrow-btn"
                onClick={() =>
                  setActiveTestimonial((prev) =>
                    prev === 0 ? testimonials.length - 1 : prev - 1
                  )
                }
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <button
                className="arrow-btn"
                onClick={() =>
                  setActiveTestimonial((prev) => (prev + 1) % testimonials.length)
                }
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>

            <div className="dots">
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
      </section>

      <section className="cta-strip">
        <div className="container cta-strip-inner">
          <h3>Deliver Exceptional Customer Support with Zoho Desk</h3>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-brand">
              <img
                src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
                alt="Techjockey"
              />
              <a href="mailto:support@techjockey.com">support@techjockey.com</a>
            </div>

            <div className="footer-links">
              <a href="/privacy-policy" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>
              <a href="/terms" target="_blank" rel="noreferrer">
                Terms
              </a>
            </div>

            <div className="socials">
              <a
                href="https://www.facebook.com/techjockey/"
                target="_blank"
                rel="noreferrer"
                aria-label="Facebook"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H17V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V11H7.5v3h2.8v8h3.2z"/></svg>
              </a>
              <a
                href="https://www.instagram.com/techjockey/"
                target="_blank"
                rel="noreferrer"
                aria-label="Instagram"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1015.5 13 3.5 3.5 0 0012 9.5zm6.25-3.25a1.25 1.25 0 11-1.25 1.25 1.25 1.25 0 011.25-1.25z"/></svg>
              </a>
              <a
                href="https://twitter.com/TechjockeyInfo"
                target="_blank"
                rel="noreferrer"
                aria-label="Twitter"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.4L6.3 22H3.2l7.3-8.3L1 2h6.3l4.4 5.8L18.9 2zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20z"/></svg>
              </a>
              <a
                href="https://www.linkedin.com/company/techjockey-infotech-pvt-ltd/"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 103 4.97 1.98 1.98 0 005.25 3zM20.44 13.08c0-3.38-1.8-4.95-4.2-4.95a3.63 3.63 0 00-3.27 1.8V8.5H9.6c.04.95 0 11.5 0 11.5h3.37v-6.42c0-.34 0-.68.13-.92a2.22 2.22 0 012.08-1.48c1.47 0 2.06 1.14 2.06 2.8V20h3.37z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2024 Techjockey Infotech Pvt. Ltd.</div>
            <div>Zoho Desk</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;