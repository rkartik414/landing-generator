import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ec1c24';
  const primary = '#ec1c24';
  const bodyBg = '#ffffff';

  const [activeTab, setActiveTab] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const sectionRefs = useRef([]);

  const ctas = [
    {
      text: 'Get Price',
      href: 'https://www.zoho.com/en-in/desk/?utm_source=techjockey&utm_medium=cpc&utm_campaign=helpdesk-ticketing-system',
    },
    {
      text: 'Get Price',
      href: 'https://www.zoho.com/en-in/desk/?utm_source=techjockey&utm_medium=cpc&utm_campaign=helpdesk-ticketing-system',
    },
    {
      text: 'Get Price',
      href: 'https://www.zoho.com/en-in/desk/?utm_source=techjockey&utm_medium=cpc&utm_campaign=helpdesk-ticketing-system',
    },
    {
      text: 'Get Price',
      href: 'https://www.zoho.com/en-in/desk/?utm_source=techjockey&utm_medium=cpc&utm_campaign=helpdesk-ticketing-system',
    },
  ];

  const productSections = [
    {
      headline: 'Why Choose Zoho Desk?',
      description:
        'With powerful automation and contextual AI, Zoho Desk helps businesses deliver faster, smarter, and more personalized customer support.',
      image: '/output/generated-assets/ds_1778226913723_78b25a27/18-7f64cfae87.jpeg',
      browserFrame: true,
      features: [
        {
          title: 'Omnichannel Support',
          description:
            'Manage customer conversations across email, chat, phone, and social media from a single platform.',
        },
        {
          title: 'Ticket Management',
          description:
            'Organize, prioritize, and resolve tickets efficiently with automation and smart workflows.',
        },
        {
          title: 'AI Assistance (Zia)',
          description:
            'Get intelligent suggestions, auto-tag tickets, detect sentiment, and respond faster with AI-powered insights.',
        },
        {
          title: 'Workflow Automation',
          description:
            'Automate repetitive support tasks, assign tickets, and streamline processes for faster resolutions.',
        },
      ],
    },
    {
      headline: 'Make Smarter Support Decisions with Zia AI',
      description:
        'Zoho Desk includes Zia, an AI-powered assistant that helps support teams improve response quality and resolution speed.',
      image: '/output/generated-assets/ds_1778226913723_78b25a27/17-3965757185.jpeg',
      browserFrame: true,
      features: [
        {
          title: 'AI-Powered Responses',
          description:
            'Generate accurate replies, suggest solutions, and assist agents in real time.',
        },
        {
          title: 'Sentiment Analysis',
          description:
            'Understand customer emotions and prioritize critical issues for better service.',
        },
        {
          title: 'Auto Tagging & Insights',
          description:
            'Automatically categorize tickets and uncover patterns to improve support efficiency.',
        },
        {
          title: 'Conversation Intelligence',
          description:
            'Analyze interactions across channels to deliver consistent and contextual support experiences.',
        },
      ],
    },
    {
      headline: 'Integrate with popular apps and Zoho ecosystem',
      description:
        'Connect your help desk with your favorite apps across CRM, communication, and business tools with ease.',
      image: '/output/generated-assets/ds_1778226913723_78b25a27/10-535a0d371d.png',
      browserFrame: false,
      features: [
        { title: 'CRM Integration', description: 'Zoho CRM, HubSpot, and more' },
        { title: 'Collaboration Tools', description: 'Slack, Microsoft Teams' },
        { title: 'Telephony', description: 'Aircall, RingCentral' },
        { title: 'E-commerce Platforms', description: 'Shopify, WooCommerce' },
        { title: 'Automation Tools', description: 'Zapier & Zoho Flow' },
      ],
    },
    {
      headline: 'Customization Beyond Limits',
      description:
        'Zoho Desk is built to adapt to your support workflows and business needs.',
      image: '/output/generated-assets/ds_1778226913723_78b25a27/01-917cb856ac.png',
      browserFrame: false,
      features: [
        {
          title: 'Layouts',
          description:
            'Customize ticket views, fields, and workflows to match your processes.',
        },
        {
          title: 'Blueprints',
          description:
            'Design structured workflows to guide agents through every support process.',
        },
        {
          title: 'Extensions',
          description: 'Extend functionality with custom apps and integrations.',
        },
        {
          title: 'Help Center',
          description:
            'Create branded self-service portals and knowledge bases for customers.',
        },
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        'Zoho Desk helped us streamline our support tickets and respond faster to customer queries. Our team now handles requests more efficiently with better visibility.',
      author: 'Sanjay Bhatnagar',
      role: 'Customer Support Lead',
    },
    {
      quote:
        'Managing customer conversations across multiple channels became effortless with Zoho Desk. It significantly improved our response time and customer satisfaction.',
      author: 'Arjun Mishra',
      role: 'Operations Manager',
    },
    {
      quote:
        'Automation in Zoho Desk reduced manual work for our support team. We can now focus more on solving issues rather than managing tickets.',
      author: 'Vanshika Malhotra',
      role: 'Head of Support',
    },
    {
      quote:
        'The knowledge base and self-service portal helped reduce our ticket volume while improving customer experience.',
      author: 'Nitin Singh',
      role: 'Founder',
    },
    {
      quote:
        'Zoho Desk’s reporting and dashboards give us clear insights into support performance and customer issues.',
      author: 'Akashdeep Sirkar',
      role: 'Customer Experience Manager',
    },
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

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const loadScript = (src) =>
      new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
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
            if (img) {
              gsap.to(img, {
                scale: 1,
                duration: 1.2,
                ease: 'power2.out',
                scrollTrigger: {
                  trigger: el,
                  start: 'top 85%',
                  toggleActions: 'play none none reverse',
                },
              });
            }
          });

          gsap.utils.toArray('[data-depth]').forEach((el) => {
            gsap.to(el, {
              y: () => -(window.innerHeight * (parseFloat(el.dataset.depth) || 0.2) * 0.5),
              ease: 'none',
              scrollTrigger: {
                trigger: el.closest('section') || el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            });
          });

          gsap.utils.toArray('.stagger-parent').forEach((p) => {
            gsap.to(p.children, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: { trigger: p, start: 'top 80%' },
            });
          });

          gsap.utils.toArray('[data-count]').forEach((el) => {
            const target = parseFloat(el.dataset.count || '0');
            const suffix = el.dataset.suffix || '';
            const prefix = el.dataset.prefix || '';
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 1.6,
              snap: { val: 0.1 },
              ease: 'power1.out',
              scrollTrigger: { trigger: el, start: 'top 90%' },
              onUpdate: () => {
                el.textContent = `${prefix}${Math.round(obj.val).toLocaleString()}${suffix}`;
              },
            });
          });
        });
      });
    };

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'),
    ]).then(initGSAP);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;font-family:Inter,sans-serif;background:${bodyBg};color:#111827}
    a{text-decoration:none}
    img{max-width:100%}
    .page{background:${bodyBg};overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:88px 0;position:relative}
    .section-light{background:#ffffff}
    .section-soft{background:#f8fafc}
    .section-muted{background:#f3f4f6}
    .section-dark{background:#111827;color:#fff}
    .main_header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(20px);border-bottom:1px solid #e5e7eb}
    .nav-bar{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0}
    .nav-left,.nav-right-group{display:flex;align-items:center;gap:14px}
    .logo-text{font-weight:800;font-size:20px;color:var(--accent);font-family:'Plus Jakarta Sans',sans-serif}
    .tj-logo{height:28px;opacity:.9}
    .animated-cta,.btn-ghost{display:inline-flex;align-items:center;justify-content:center;padding:13px 24px;border-radius:12px;font-weight:700;transition:.25s ease;white-space:nowrap}
    .animated-cta{background:var(--accent);color:#fff;box-shadow:0 10px 30px rgba(236,28,36,.18)}
    .animated-cta:hover,.btn-ghost:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(0,0,0,.12)}
    .btn-ghost{border:1px solid #d1d5db;color:#111827;background:#fff}
    .hero{padding:56px 0 70px;background:linear-gradient(180deg,#ffffff 0%,#f8fafc 100%);position:relative}
    .hero-wrap{display:flex;align-items:center;gap:40px}
    .hero-copy,.hero-visual{flex:1}
    .hero-copy{max-width:590px}
    .eyebrow{display:inline-flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;background:rgba(236,28,36,.08);border:1px solid rgba(236,28,36,.18);color:var(--accent);font-size:13px;font-weight:700;margin-bottom:18px}
    .banner-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(48px,6vw,68px);line-height:1.06;letter-spacing:-.03em;margin:0 0 18px;word-break:normal;overflow-wrap:normal;hyphens:none;white-space:normal}
    .gradient-text{background:linear-gradient(135deg,var(--accent) 0%,var(--accent) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .banner-content{font-size:18px;line-height:1.75;color:#4b5563;max-width:560px;margin:0 0 24px}
    .chip-row{display:flex;flex-wrap:wrap;gap:10px;margin:0 0 28px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;background:#fff;border:1px solid #e5e7eb;color:#374151;font-size:13px;font-weight:600;box-shadow:0 6px 18px rgba(15,23,42,.05)}
    .chip svg{width:16px;height:16px;color:var(--accent);flex:0 0 auto}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center}
    .hero-media-card{position:relative;width:100%;min-height:500px;border-radius:24px;overflow:hidden;box-shadow:0 30px 80px rgba(15,23,42,.18);border:1px solid rgba(255,255,255,.8);background:#e5e7eb}
    .hero-media-card img{width:100%;height:100%;min-height:500px;object-fit:cover;display:block}
    .overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(0,0,0,.08),rgba(0,0,0,.2))}
    .float-card{position:absolute;background:rgba(255,255,255,.96);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.9);border-radius:18px;box-shadow:0 20px 40px rgba(15,23,42,.15);padding:16px 18px;max-width:220px}
    .card-top{top:24px;right:20px}
    .card-mid{bottom:24px;left:20px}
    .float-title{font-weight:800;font-size:15px;color:#111827;margin-bottom:6px;font-family:'Plus Jakarta Sans',sans-serif}
    .float-text{font-size:13px;line-height:1.5;color:#6b7280}
    .metrics-strip{padding:26px 0;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
    .metrics-row{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}
    .metric-card{flex:1;min-width:220px;background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:22px;box-shadow:0 10px 30px rgba(0,0,0,.04)}
    .metric-value{font-family:'Plus Jakarta Sans',sans-serif;font-size:32px;font-weight:800;color:#111827}
    .metric-label{margin-top:6px;color:#6b7280;line-height:1.6}
    .section-head{max-width:760px;margin:0 auto 34px;text-align:center}
    .section-head.left{text-align:left;margin:0 0 24px}
    h2{font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(32px,4vw,42px);line-height:1.15;letter-spacing:-.02em;margin:0 0 14px}
    .section-desc{font-size:17px;line-height:1.75;color:#6b7280;margin:0}
    .tabs-shell{display:flex;gap:28px;align-items:stretch}
    .tabs-list{width:340px;display:flex;flex-direction:column;gap:12px}
    .tab-btn{padding:18px;border:1px solid #e5e7eb;border-radius:18px;background:#fff;text-align:left;cursor:pointer;transition:.25s ease;box-shadow:0 6px 18px rgba(0,0,0,.04)}
    .tab-btn.active{border-color:rgba(236,28,36,.32);box-shadow:0 16px 36px rgba(236,28,36,.12)}
    .tab-btn h3{font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;margin:0 0 6px;color:#111827}
    .tab-btn p{margin:0;color:#6b7280;line-height:1.55;font-size:14px}
    .tab-preview{flex:1;background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:24px;box-shadow:0 14px 40px rgba(0,0,0,.06)}
    .feature-layout{display:flex;gap:28px;align-items:center}
    .feature-media,.feature-copy{flex:1}
    .feature-copy{display:flex;flex-direction:column}
    .feature-list{display:flex;flex-direction:column;gap:14px;margin-top:20px}
    .feature-item{display:flex;gap:14px;align-items:flex-start;padding:16px;border-radius:16px;background:#f8fafc;border:1px solid #e5e7eb}
    .feature-icon{width:42px;height:42px;border-radius:12px;background:rgba(236,28,36,.08);display:flex;align-items:center;justify-content:center;color:var(--accent);flex:0 0 auto}
    .feature-item h4{margin:0 0 4px;font-size:17px;font-family:'Plus Jakarta Sans',sans-serif}
    .feature-item p{margin:0;color:#6b7280;line-height:1.65;font-size:14px}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:20px;background:#0a0a0a;border:1px solid #1f2937;box-shadow:0 24px 60px rgba(0,0,0,.22)}
    .browser-bar{display:flex;gap:8px;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,.08)}
    .dot{width:10px;height:10px;border-radius:50%;background:#374151}
    .dot.red{background:#ef4444}.dot.yellow{background:#f59e0b}.dot.green{background:#10b981}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .visual-panel{border-radius:20px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 24px 60px rgba(0,0,0,.08);background:#fff}
    .visual-panel img{display:block;width:100%;height:420px;object-fit:cover}
    .integration-visual{background:linear-gradient(180deg,#ffffff 0%,#f8fafc 100%);border:1px solid #e5e7eb;border-radius:22px;padding:26px;box-shadow:0 20px 50px rgba(0,0,0,.06)}
    .integration-core{display:flex;align-items:center;justify-content:center;margin:18px auto 22px;width:150px;height:150px;border-radius:24px;background:rgba(236,28,36,.08);border:1px solid rgba(236,28,36,.16);font-family:'Plus Jakarta Sans',sans-serif;font-weight:800;font-size:26px;color:var(--accent)}
    .app-grid{display:flex;flex-wrap:wrap;gap:12px;justify-content:center}
    .app-tile{padding:12px 16px;border-radius:14px;background:#fff;border:1px solid #e5e7eb;font-weight:700;color:#374151;box-shadow:0 8px 20px rgba(0,0,0,.04)}
    .pricing-wrap{display:flex;justify-content:center}
    .price-card{width:min(760px,100%);background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:30px;box-shadow:0 18px 48px rgba(0,0,0,.08);position:relative}
    .price-badge{display:inline-flex;padding:8px 12px;border-radius:999px;background:#e8f7ee;color:#15803d;font-weight:700;font-size:13px;margin-bottom:16px}
    .price-head{display:flex;justify-content:space-between;gap:16px;align-items:flex-start;flex-wrap:wrap}
    .price-head h3{margin:0;font-family:'Plus Jakarta Sans',sans-serif;font-size:30px}
    .price-muted{color:#6b7280;font-size:15px}
    .price-amount{margin:16px 0 0}
    .strike{color:#9ca3af;text-decoration:line-through;margin-right:10px}
    .bold-price{font-size:42px;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif;color:#111827}
    .price-note{color:#6b7280;margin-top:10px;line-height:1.6}
    .check-list{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0}
    .check-item{flex:1 1 220px;display:flex;gap:10px;align-items:flex-start;padding:14px;border:1px solid #e5e7eb;border-radius:14px;background:#f8fafc}
    .check-item svg{color:#16a34a;flex:0 0 auto;margin-top:2px}
    .full-btn{width:100%}
    .testimonial-shell{overflow:hidden;position:relative}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-slide{min-width:100%;padding:10px}
    .testimonial-card{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);border-radius:24px;padding:34px;box-shadow:0 20px 40px rgba(0,0,0,.2)}
    .quote-mark{font-size:56px;line-height:1;color:var(--accent);font-weight:800;font-family:'Plus Jakarta Sans',sans-serif}
    .testimonial-text{font-size:20px;line-height:1.8;color:rgba(255,255,255,.92);margin:10px 0 26px}
    .author-row{display:flex;align-items:center;gap:14px}
    .avatar{width:56px;height:56px;border-radius:50%;background:var(--accent);color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif}
    .author-name{font-weight:800;color:#fff}
    .author-role{color:rgba(255,255,255,.68);font-size:14px;margin-top:4px}
    .stars{color:#fbbf24;font-size:18px;letter-spacing:2px;margin-bottom:14px}
    .slider-controls{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:20px}
    .nav-arrow,.dot-btn{border:none;cursor:pointer}
    .nav-arrow{width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.08);color:#fff}
    .dot-btn{width:10px;height:10px;border-radius:999px;background:rgba(255,255,255,.28);transition:.25s}
    .dot-btn.active{width:28px;background:var(--accent)}
    .cta-strip{padding:28px 0;background:#f3f4f6;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
    .cta-strip-row{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}
    .cta-strip h3{margin:0;font-family:'Plus Jakarta Sans',sans-serif;font-size:28px}
    .cta-strip p{margin:6px 0 0;color:#6b7280}
    .footer{background:#0f172a;color:#fff;padding:42px 0}
    .footer-top{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;align-items:flex-start}
    .footer-brand img{height:28px}
    .footer-mail{display:block;color:rgba(255,255,255,.82);margin-top:14px}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .footer-links a,.socials a{color:rgba(255,255,255,.82)}
    .social-icon{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08)}
    .footer-bottom{margin-top:24px;padding-top:18px;border-top:1px solid rgba(255,255,255,.1);display:flex;justify-content:space-between;gap:14px;flex-wrap:wrap;color:rgba(255,255,255,.68);font-size:14px}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .zoom-reveal{overflow:hidden}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.1);will-change:transform}
    [data-depth]{will-change:transform}
    .float-ambient{animation:floatY 6s ease-in-out infinite}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
    .stagger-parent>*{opacity:0;transform:translateY(24px)}
    .glass-card{background:rgba(255,255,255,0.05);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.08);border-radius:16px}
    @media (max-width: 991px){
      .hero-wrap,.tabs-shell,.feature-layout{flex-direction:column}
      .tabs-list{width:100%}
      .hero-visual,.hero-media-card,.hero-media-card img{min-height:420px}
      .metrics-row,.price-head,.cta-strip-row{align-items:flex-start}
    }
    @media (max-width: 640px){
      .container{width:min(100% - 24px,1180px)}
      .section{padding:68px 0}
      .nav-bar{gap:10px}
      .nav-right-group{margin-left:auto}
      .tj-logo{height:24px}
      .animated-cta,.btn-ghost{padding:12px 18px;font-size:14px}
      .banner-content{font-size:16px}
      .feature-item,.check-item{flex:1 1 100%}
      .testimonial-card{padding:24px}
      .testimonial-text{font-size:17px}
      .footer-top,.footer-bottom{flex-direction:column}
    }
  `;

  const renderIcon = (type) => {
    const common = (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    );
    if (type === 'support')
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 12a8 8 0 1116 0v4a2 2 0 01-2 2h-2v-5h4" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M4 18H2a2 2 0 01-2-2v-4h4v6zM9 19h6" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    if (type === 'ticket')
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M4 7h16v4a2 2 0 010 4v4H4v-4a2 2 0 010-4V7z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    if (type === 'ai')
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M12 3l2.2 4.8L19 10l-4.8 2.2L12 17l-2.2-4.8L5 10l4.8-2.2L12 3z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    if (type === 'workflow')
      return (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
          <path d="M7 7h10v4H7zM7 13h10v4H7z" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      );
    return common;
  };

  const getInitials = (name) =>
    name
      .split(' ')
      .map((n) => n[0])
      .slice(0, 2)
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
            <span className="logo-text">Zoho</span>
          </div>
          <div className="nav-right-group">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
              className="tj-logo"
            />
            <a
              href={ctas[0].href}
              className="animated-cta btn-magnetic"
              target="_blank"
              rel="noreferrer"
            >
              {ctas[0].text}
            </a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div
          className="float-ambient"
          data-depth="0.15"
          style={{
            position: 'absolute',
            top: 40,
            left: -40,
            width: 220,
            height: 220,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${accent}18 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
        <div
          data-depth="0.4"
          style={{
            position: 'absolute',
            right: -80,
            bottom: -60,
            width: 320,
            height: 320,
            borderRadius: '50%',
            background: `radial-gradient(circle, ${primary}14 0%, transparent 70%)`,
            pointerEvents: 'none',
          }}
        />
        <div className="container hero-wrap">
          <div className="hero-copy">
            <div className="eyebrow reveal">Customer Support Software</div>
            <h1 className="banner-title reveal split-text">
              Deliver Exceptional Customer Support with{' '}
              <span className="gradient-text">Zoho Desk</span>
            </h1>
            <p className="banner-content reveal" style={{ transitionDelay: '0.1s' }}>
              Streamline customer service, manage tickets efficiently, and deliver seamless
              support experiences across every channel.
            </p>

            <div className="chip-row reveal stagger-parent">
              {[
                'Omnichannel Support',
                'Ticket Management',
                'AI Assistance (Zia)',
                'Workflow Automation',
              ].map((chip, i) => (
                <div className="chip pop-in" key={i}>
                  {renderIcon(i === 0 ? 'support' : i === 1 ? 'ticket' : i === 2 ? 'ai' : 'workflow')}
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <a
                href={ctas[1].href}
                className="animated-cta btn-magnetic reveal"
                target="_blank"
                rel="noreferrer"
              >
                {ctas[1].text}
              </a>
              <a href="#pricing" className="btn-ghost reveal">
                Get Your Free Trial
              </a>
            </div>
          </div>

          <div className="hero-visual" data-depth="0.15">
            <div className="hero-media-card zoom-reveal hero-cinematic-bg">
              <img
                src="/output/generated-assets/ds_1778226913723_78b25a27/12-bd4c399912.jpeg"
                alt="Zoho Desk"
              />
              <div className="overlay" />
              <div className="float-card card-top float-ambient">
                <div className="float-title">Trusted by 100,000+ Businesses Globally</div>
                <div className="float-text">
                  Faster support workflows with automation and AI-powered assistance.
                </div>
              </div>
              <div className="float-card card-mid float-ambient">
                <div className="float-title">Ticket Management</div>
                <div className="float-text">
                  Manage conversations across email, chat, phone, and social media from one platform.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-strip">
        <div className="container">
          <div className="metrics-row stagger-parent">
            <div className="metric-card reveal">
              <div className="metric-value" data-count="100000" data-suffix="+">
                100,000+
              </div>
              <div className="metric-label">Businesses Globally</div>
            </div>
            <div className="metric-card reveal">
              <div className="metric-value">Trusted</div>
              <div className="metric-label">Trusted by 100,000+ Businesses Globally</div>
            </div>
            <div className="metric-card reveal">
              <div className="metric-value">Zoho Desk</div>
              <div className="metric-label">Customer Support Software</div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light clip-reveal">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Explore <span className="gradient-text">Zoho Desk</span> capabilities
            </h2>
            <p className="section-desc">
              With powerful automation and contextual AI, Zoho Desk helps businesses deliver faster,
              smarter, and more personalized customer support.
            </p>
          </div>

          <div className="tabs-shell">
            <div className="tabs-list stagger-parent">
              {productSections.map((section, idx) => (
                <button
                  key={idx}
                  className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                >
                  <h3>{section.headline}</h3>
                  <p>{section.description}</p>
                </button>
              ))}
            </div>

            <div className="tab-preview reveal">
              <div className="feature-layout">
                <div className="feature-media slide-right">
                  {activeTab === 0 || activeTab === 1 ? (
                    <div className="browser-frame zoom-reveal">
                      <div className="browser-bar">
                        <span className="dot red" />
                        <span className="dot yellow" />
                        <span className="dot green" />
                      </div>
                      <img src={productSections[activeTab].image} alt={productSections[activeTab].headline} />
                    </div>
                  ) : activeTab === 2 ? (
                    <div className="integration-visual zoom-reveal">
                      <img
                        src={productSections[activeTab].image}
                        alt={productSections[activeTab].headline}
                        style={{ width: '100%', borderRadius: '16px', marginBottom: '18px', display: 'block' }}
                      />
                      <div className="integration-core">Zoho Desk</div>
                      <div className="app-grid">
                        {productSections[activeTab].features.map((f, i) => (
                          <div className="app-tile" key={i}>{f.description}</div>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="visual-panel zoom-reveal">
                      <img src={productSections[activeTab].image} alt={productSections[activeTab].headline} />
                    </div>
                  )}
                </div>

                <div className="feature-copy slide-left">
                  <div className="section-head left">
                    <h2>{productSections[activeTab].headline}</h2>
                    <p className="section-desc">{productSections[activeTab].description}</p>
                  </div>
                  <div className="feature-list stagger-parent">
                    {productSections[activeTab].features.map((feature, i) => (
                      <div className="feature-item hover-lift" key={i}>
                        <div className="feature-icon">
                          {renderIcon(i === 0 ? 'support' : i === 1 ? 'ticket' : i === 2 ? 'ai' : 'workflow')}
                        </div>
                        <div>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {activeTab === 0 && (
                    <div style={{ marginTop: 22 }}>
                      <a
                        href={ctas[2].href}
                        target="_blank"
                        rel="noreferrer"
                        className="animated-cta btn-magnetic"
                      >
                        {ctas[2].text}
                      </a>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="section section-light">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Simple <span className="gradient-text">Zoho Desk</span> overview
            </h2>
            <p className="section-desc">
              Ticket Management, Omnichannel Support, Workflow Automation, AI-Powered Assistance,
              Knowledge Base, Reporting & Analytics, Integrations, Alerts & Notifications,
              Supported Device: Android, iOS, Windows, Mac
            </p>
          </div>

          <div className="pricing-wrap stagger-parent">
            <div className="price-card pop-in">
              <div className="price-badge">Includes</div>
              <div className="price-head">
                <div>
                  <h3>Zoho Desk</h3>
                  <div className="price-muted">Customer Support Software</div>
                </div>
              </div>
              <div className="price-amount">
                <span className="strike">(was )</span>
                <span className="bold-price">Zoho Desk</span>
              </div>
              <div className="price-note">
                Includes: Ticket Management, Omnichannel Support, Workflow Automation, AI-Powered
                Assistance, Knowledge Base, Reporting & Analytics, Integrations, Alerts &
                Notifications, Supported Device: Android, iOS, Windows, Mac
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
                  'Alerts & Notifications',
                  'Supported Device: Android, iOS, Windows, Mac',
                ].map((item, i) => (
                  <div className="check-item" key={i}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={ctas[3].href}
                className="animated-cta btn-magnetic full-btn"
                target="_blank"
                rel="noreferrer"
              >
                {ctas[3].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="container">
          <div className="section-head reveal">
            <h2 style={{ color: '#fff' }}>
              What users say about <span className="gradient-text">Zoho Desk</span>
            </h2>
          </div>

          <div className="testimonial-shell">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div className="testimonial-slide" key={i}>
                  <div className="testimonial-card">
                    <div className="stars">★★★★★</div>
                    <div className="quote-mark">❝</div>
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
              <button
                className="nav-arrow"
                onClick={() =>
                  setTestimonialIndex(
                    (prev) => (prev - 1 + testimonials.length) % testimonials.length
                  )
                }
              >
                ‹
              </button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot-btn ${i === testimonialIndex ? 'active' : ''}`}
                  onClick={() => setTestimonialIndex(i)}
                />
              ))}
              <button
                className="nav-arrow"
                onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-strip-row">
          <div>
            <h3>Deliver Exceptional Customer Support with Zoho Desk</h3>
            <p>
              Streamline customer service, manage tickets efficiently, and deliver seamless support
              experiences across every channel.
            </p>
          </div>
          <div style={{ color: '#6b7280', fontWeight: 700 }}>Trusted by 100,000+ Businesses Globally</div>
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
              <a href="mailto:support@techjockey.com" className="footer-mail">
                support@techjockey.com
              </a>
            </div>

            <div className="footer-links">
              <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
              <a href="/terms" target="_blank" rel="noreferrer">Terms</a>
            </div>

            <div className="socials">
              <a className="social-icon" href="https://www.facebook.com/TechjockeyInfo" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V8c0-1.2.4-2 2-2h2V2.5c-.4-.1-1.8-.2-3.3-.2-3.3 0-5.7 2-5.7 5.9V10H5v4h3v8h5z"/></svg>
              </a>
              <a className="social-icon" href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18.5 5.5 5.5 0 0112 7.5zm0 2A3.5 3.5 0 1012 16a3.5 3.5 0 000-7zm6-3.2a1.3 1.3 0 11-2.6 0 1.3 1.3 0 012.6 0z"/></svg>
              </a>
              <a className="social-icon" href="https://twitter.com/TechjockeyInfo" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.7L23 22h-6.2l-4.9-6.5L6.2 22H3l7.3-8.3L1 2h6.3l4.4 5.9L18.9 2zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20z"/></svg>
              </a>
              <a className="social-icon" href="https://www.linkedin.com/company/techjockey-infotech-pvt-ltd-" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2 2 0 105.3 7a2 2 0 00-.05-4zM20.44 12.68c0-3.02-1.61-4.43-3.76-4.43-1.73 0-2.5.95-2.93 1.62V8.5h-3.38c.04.91 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.12-.92.27-.68.88-1.38 1.9-1.38 1.34 0 1.88 1.03 1.88 2.54V20H21s.04-6.5.04-7.32z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2024 Techjockey Infotech Pvt. Ltd.</div>
            <div>Techjockey</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;