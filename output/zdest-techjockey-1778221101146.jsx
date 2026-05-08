import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff3f3f';
  const primary = '#ff3f3f';
  const bodyBg = '#f5f5f5';

  const [activeTab, setActiveTab] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const scriptsLoaded = useRef(false);

  const ctas = [
    {
      text: 'Get Price',
      href: 'https://www.zoho.com/en-in/desk/?utm_source=techjockey&utm_medium=cpc&utm_campaign=helpdesk-ticketing-system',
    },
    {
      text: 'Get Demo',
      href: 'https://www.zoho.com/en-in/desk/?utm_source=techjockey&utm_medium=cpc&utm_campaign=helpdesk-ticketing-system',
    },
    {
      text: 'Book Demo',
      href: 'https://www.zoho.com/en-in/desk/?utm_source=techjockey&utm_medium=cpc&utm_campaign=helpdesk-ticketing-system',
    },
    {
      text: 'Customer Quote',
      href: 'https://www.zoho.com/en-in/desk/?utm_source=techjockey&utm_medium=cpc&utm_campaign=helpdesk-ticketing-system',
    },
    {
      text: 'Free Consultation',
      href: 'https://www.zoho.com/en-in/desk/?utm_source=techjockey&utm_medium=cpc&utm_campaign=helpdesk-ticketing-system',
    },
  ];

  const productSections = [
    {
      name: 'Why Choose Zoho Desk?',
      headline: 'Why Choose Zoho Desk?',
      description:
        'With powerful automation and contextual AI, Zoho Desk helps businesses deliver faster, smarter, and more personalized customer support.',
      image: '/output/generated-assets/ds_1778219578825_159b6c5f/18-7f64cfae87.jpeg',
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
      name: 'Make Smarter Support Decisions with Zia AI',
      headline: 'Make Smarter Support Decisions with Zia AI',
      description:
        'Zoho Desk includes Zia, an AI-powered assistant that helps support teams improve response quality and resolution speed.',
      image: '/output/generated-assets/ds_1778219578825_159b6c5f/17-3965757185.jpeg',
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
      name: 'Integrate with popular apps and Zoho ecosystem',
      headline: 'Integrate with popular apps and Zoho ecosystem',
      description:
        'Connect your help desk with your favorite apps across CRM, communication, and business tools with ease.',
      image: '/output/generated-assets/ds_1778219578825_159b6c5f/19-b36bdf959c.jpeg',
      browserFrame: true,
      features: [
        { title: 'CRM Integration', description: 'Zoho CRM, HubSpot, and more' },
        { title: 'Collaboration Tools', description: 'Slack, Microsoft Teams' },
        { title: 'Telephony', description: 'Aircall, RingCentral' },
        { title: 'E-commerce Platforms', description: 'Shopify, WooCommerce' },
        { title: 'Automation Tools', description: 'Zapier & Zoho Flow' },
      ],
    },
    {
      name: 'Customization Beyond Limits',
      headline: 'Customization Beyond Limits',
      description:
        'Zoho Desk is built to adapt to your support workflows and business needs.',
      image: '/output/generated-assets/ds_1778219578825_159b6c5f/14-73fff62169.png',
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

  const pricingFeatures = [
    'Ticket Management',
    'Omnichannel Support',
    'Workflow Automation',
    'AI-Powered Assistance',
    'Knowledge Base',
    'Reporting & Analytics',
    'Integrations',
    'Alerts & Notifications',
    'Supported Device: Android, iOS, Windows, Mac',
  ];

  const testimonials = [
    {
      quote:
        'Zoho Desk helped us streamline our support tickets and respond faster to customer queries. Our team now handles requests more efficiently with better visibility.',
      name: 'Sanjay Bhatnagar',
      role: 'Customer Support Lead',
    },
    {
      quote:
        'Managing customer conversations across multiple channels became effortless with Zoho Desk. It significantly improved our response time and customer satisfaction.',
      name: 'Arjun Mishra',
      role: 'Operations Manager',
    },
    {
      quote:
        'Automation in Zoho Desk reduced manual work for our support team. We can now focus more on solving issues rather than managing tickets.',
      name: 'Vanshika Malhotra',
      role: 'Head of Support',
    },
    {
      quote:
        'The knowledge base and self-service portal helped reduce our ticket volume while improving customer experience.',
      name: 'Nitin Singh',
      role: 'Founder',
    },
    {
      quote:
        'Zoho Desk’s reporting and dashboards give us clear insights into support performance and customer issues.',
      name: 'Akashdeep Sirkar',
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

    return () => observer.disconnect();
  }, [accent, primary]);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);

    const timer = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [accent, primary, testimonials.length]);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);

    if (scriptsLoaded.current) return;
    scriptsLoaded.current = true;

    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) return resolve();
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = resolve;
        s.onerror = reject;
        document.body.appendChild(s);
      });

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'),
    ]).then(() => {
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
                y: () =>
                  -(window.innerHeight *
                    ((parseFloat(el.dataset.depth) || 0.2) * 0.5)),
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
              const target = parseFloat(el.getAttribute('data-count')) || 0;
              const suffix = el.getAttribute('data-suffix') || '';
              const prefix = el.getAttribute('data-prefix') || '';
              const obj = { val: 0 };
              gsap.to(obj, {
                val: target,
                duration: 2,
                ease: 'power2.out',
                snap: { val: 0.1 },
                scrollTrigger: { trigger: el, start: 'top 90%' },
                onUpdate: () => {
                  el.textContent = `${prefix}${Math.round(obj.val).toLocaleString()}${suffix}`;
                },
              });
            });
          });
        });
      };

      const initDramatic = () => {
        if (!window.gsap || !window.ScrollTrigger) return;
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
                toggleActions: 'play none none reverse',
              },
            });
        });

        gsap.utils.toArray('[data-depth]').forEach((el) => {
          gsap.to(el, {
            y: () =>
              -(window.innerHeight *
                ((parseFloat(el.dataset.depth) || 0.2) * 0.5)),
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
      };

      initGSAP();
      requestAnimationFrame(() => requestAnimationFrame(initDramatic));
    }).catch(() => {});
  }, [accent, primary]);

  const css = `
    *{box-sizing:border-box} html,body{margin:0;padding:0;background:${bodyBg};color:#1a1a1a;font-family:Inter,sans-serif;scroll-behavior:smooth}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .page{overflow:hidden;background:${bodyBg}}
    .container{width:min(1180px,calc(100% - 40px));margin:0 auto}
    .section{padding:88px 0;position:relative}
    .bg-white{background:#ffffff}
    .bg-soft{background:#f5f5f5}
    .bg-warm{background:#fff7f0}
    .main_header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.88);backdrop-filter:blur(20px);border-bottom:1px solid #e5e7eb}
    .nav-bar{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:14px 0}
    .nav-left{display:flex;align-items:center;min-width:0}
    .nav-right{display:flex;align-items:center;gap:16px;flex-shrink:0}
    .logo-text{font-weight:800;font-size:20px;color:${accent};font-family:"Plus Jakarta Sans",sans-serif}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:10px;background:${primary};color:#fff;font-weight:700;border:1px solid ${primary};transition:.25s transform,.25s box-shadow,.25s background;white-space:nowrap}
    .animated-cta:hover,.btn-ghost:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(255,63,63,.18)}
    .btn-ghost{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:10px;background:#fff;color:#1a1a1a;font-weight:700;border:1px solid #e5e7eb;transition:.25s transform,.25s box-shadow,.25s background}
    .hero{background:linear-gradient(180deg,#ffffff 0%,#f5f5f5 100%);padding:72px 0 56px;position:relative}
    .hero:before,.hero:after{content:"";position:absolute;border-radius:50%;filter:blur(40px);pointer-events:none}
    .hero:before{width:340px;height:340px;right:-80px;top:-60px;background:rgba(255,63,63,.10)}
    .hero:after{width:260px;height:260px;left:-70px;bottom:-40px;background:rgba(255,63,63,.08)}
    .banner-area{display:flex;align-items:center;gap:48px}
    .banner-text,.hero-visual{flex:1}
    .banner-title{font-family:"Plus Jakarta Sans",sans-serif;font-size:clamp(48px,6vw,68px);line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;word-break:normal;overflow-wrap:normal;hyphens:none;white-space:normal}
    .banner-content{font-size:18px;line-height:1.75;color:#5f6368;max-width:640px;margin:0 0 24px}
    .gradient-text{background:linear-gradient(135deg,${accent} 0%,${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:0 0 28px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(255,63,63,.25);background:rgba(255,63,63,.08);font-size:13px;font-weight:600;color:#3b3f45}
    .hero-actions{display:flex;flex-wrap:wrap;gap:14px}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center;position:relative}
    .hero-media-card{width:100%;max-width:560px;border-radius:24px;overflow:hidden;background:#fff;border:1px solid #e5e7eb;box-shadow:0 24px 60px rgba(0,0,0,.10);position:relative}
    .hero-media-card video,.hero-media-card img{width:100%;max-height:480px;display:block;object-fit:contain;background:#fff}
    .floating-card{position:absolute;background:#fff;border:1px solid #e5e7eb;border-radius:16px;box-shadow:0 16px 40px rgba(0,0,0,.10);padding:14px 16px;min-width:180px}
    .floating-card small{display:block;color:#5f6368;font-size:12px;margin-bottom:6px}
    .floating-card strong{font-family:"Plus Jakarta Sans",sans-serif;font-size:16px}
    .float-one{top:28px;left:-8px}
    .float-two{bottom:32px;right:-10px}
    .trust-strip{padding:28px 0;border-top:1px solid #ececec;border-bottom:1px solid #ececec}
    .trust-grid{display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}
    .metric{flex:1;min-width:220px;background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:22px;box-shadow:0 8px 24px rgba(0,0,0,.05)}
    .metric h3{margin:0;font-family:"Plus Jakarta Sans",sans-serif;font-size:34px}
    .metric p{margin:8px 0 0;color:#5f6368;line-height:1.6}
    .section-head{max-width:760px;margin:0 auto 34px;text-align:center}
    .section-head h2{font-family:"Plus Jakarta Sans",sans-serif;font-size:clamp(32px,4vw,44px);line-height:1.15;margin:0 0 14px}
    .section-head p{margin:0;color:#5f6368;font-size:17px;line-height:1.75}
    .tabs-wrap{display:flex;gap:26px;align-items:stretch}
    .tabs-list{width:340px;display:flex;flex-direction:column;gap:14px}
    .tab-btn{padding:18px;border-radius:18px;border:1px solid #e5e7eb;background:#fff;text-align:left;cursor:pointer;transition:.25s;box-shadow:0 8px 24px rgba(0,0,0,.05)}
    .tab-btn.active{border-color:rgba(255,63,63,.35);box-shadow:0 16px 36px rgba(255,63,63,.10);transform:translateY(-2px)}
    .tab-btn span{display:block;font-family:"Plus Jakarta Sans",sans-serif;font-size:18px;font-weight:700;margin-bottom:8px}
    .tab-btn p{margin:0;color:#5f6368;line-height:1.65;font-size:14px}
    .tab-preview{flex:1;background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:24px;box-shadow:0 14px 40px rgba(0,0,0,.06)}
    .preview-top{display:flex;gap:28px;align-items:center}
    .preview-copy,.preview-media{flex:1}
    .preview-copy h3{font-family:"Plus Jakarta Sans",sans-serif;font-size:30px;line-height:1.2;margin:0 0 14px}
    .preview-copy .desc{margin:0 0 18px;padding-left:16px;border-left:3px solid rgba(255,63,63,.35);color:#5f6368;line-height:1.75}
    .feature-list{display:flex;flex-direction:column;gap:12px}
    .feature-item{display:flex;gap:12px;align-items:flex-start;padding:14px;border-radius:14px;background:#fafafa;border:1px solid #efefef}
    .feature-item svg{flex-shrink:0;margin-top:2px}
    .feature-item h4{margin:0 0 6px;font-size:16px;font-family:"Plus Jakarta Sans",sans-serif}
    .feature-item p{margin:0;color:#5f6368;line-height:1.6;font-size:14px}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:18px;border:1px solid #1f1f1f;background:#0a0a0a;box-shadow:0 18px 40px rgba(0,0,0,.22)}
    .browser-bar{display:flex;align-items:center;gap:8px;padding:12px 14px;background:#121212;border-bottom:1px solid rgba(255,255,255,.08)}
    .dot{width:10px;height:10px;border-radius:50%;background:#444}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .plain-media{border-radius:18px;overflow:hidden;border:1px solid #e5e7eb;background:#fff;box-shadow:0 16px 36px rgba(0,0,0,.08)}
    .plain-media img{display:block;width:100%;height:420px;object-fit:cover}
    .integration-grid{display:flex;flex-wrap:wrap;gap:12px;margin-top:18px}
    .integration-chip{padding:10px 14px;border-radius:999px;background:#fff7f0;border:1px solid rgba(255,63,63,.18);font-size:13px;font-weight:700;color:#333}
    .cta-strip{padding:22px 0;background:#fff7f0;border-top:1px solid #eee;border-bottom:1px solid #eee}
    .cta-strip-inner{display:flex;align-items:center;justify-content:space-between;gap:18px;flex-wrap:wrap}
    .cta-strip h3{margin:0;font-family:"Plus Jakarta Sans",sans-serif;font-size:26px}
    .pricing-card{max-width:980px;margin:0 auto;background:#fff;border:1px solid #ffd7c8;border-radius:24px;padding:30px;box-shadow:0 20px 50px rgba(255,106,0,.08)}
    .pricing-top{display:flex;gap:28px;align-items:center}
    .pricing-copy,.pricing-media{flex:1}
    .pricing-name{font-family:"Plus Jakarta Sans",sans-serif;font-size:36px;margin:0 0 8px}
    .price-row{display:flex;align-items:center;gap:12px;flex-wrap:wrap;margin:0 0 16px}
    .old-price{color:#9ca3af;text-decoration:line-through;font-weight:600}
    .new-price{font-size:42px;font-weight:800;font-family:"Plus Jakarta Sans",sans-serif}
    .badge{padding:8px 12px;border-radius:999px;background:#e8f7ec;color:#127c37;font-size:13px;font-weight:800}
    .pricing-list{display:flex;flex-direction:column;gap:12px;margin-top:16px}
    .pricing-item{display:flex;gap:10px;align-items:flex-start;padding:10px 0;border-bottom:1px solid #f0f0f0}
    .pricing-item:last-child{border-bottom:none}
    .testi-wrap{max-width:920px;margin:0 auto}
    .testimonial-card{background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:34px;box-shadow:0 16px 42px rgba(0,0,0,.06)}
    .quote-mark{font-size:54px;line-height:1;color:${accent};font-family:"Plus Jakarta Sans",sans-serif;margin-bottom:10px}
    .stars{color:#f5b301;font-size:20px;letter-spacing:2px;margin-bottom:14px}
    .testimonial-text{font-size:20px;line-height:1.8;color:#2d3136;margin:0 0 28px}
    .author{display:flex;align-items:center;gap:14px}
    .avatar{width:56px;height:56px;border-radius:50%;background:${accent};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800;font-family:"Plus Jakarta Sans",sans-serif}
    .author h4{margin:0 0 4px;font-family:"Plus Jakarta Sans",sans-serif;font-size:17px}
    .author p{margin:0;color:#7b8086}
    .testi-controls{display:flex;justify-content:center;align-items:center;gap:10px;margin-top:22px}
    .ctrl-btn{width:44px;height:44px;border-radius:50%;border:1px solid #e5e7eb;background:#fff;cursor:pointer;font-weight:800}
    .dot-btn{width:10px;height:10px;border-radius:999px;border:none;background:#d1d5db;cursor:pointer;transition:.25s}
    .dot-btn.active{width:30px;background:${accent}}
    .footer{background:#ffffff;border-top:1px solid #e5e7eb;padding:42px 0}
    .footer-grid{display:flex;align-items:flex-start;justify-content:space-between;gap:28px;flex-wrap:wrap}
    .footer-left img{height:28px}
    .footer-left p,.footer-links a{color:#5f6368;font-size:14px}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .socials a{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid #e5e7eb;background:#fff;color:#1a1a1a;transition:.25s}
    .socials a:hover,.tab-btn:hover,.ctrl-btn:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.08)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}
    .zoom-reveal{overflow:hidden}.zoom-reveal img,.zoom-reveal video{transform:scale(1.1);will-change:transform}
    [data-depth]{will-change:transform}
    .float-ambient{animation:floatY 6s ease-in-out infinite}
    .float-drift{animation:floatY 10s ease-in-out infinite}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
    .stagger-parent>*{opacity:0;transform:translateY(24px)}
    .glass-card{background:rgba(255,255,255,0.05);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.08);border-radius:16px}
    @media (max-width: 991px){
      .banner-area,.preview-top,.pricing-top,.tabs-wrap{flex-direction:column}
      .tabs-list{width:100%}
      .hero-visual{min-height:auto}
      .floating-card{position:static;margin-top:12px}
      .browser-frame img,.plain-media img{height:300px}
    }
    @media (max-width: 767px){
      .container{width:min(100% - 24px,1180px)}
      .nav-right{gap:10px}
      .nav-right img{height:24px}
      .animated-cta,.btn-ghost{padding:11px 16px;font-size:14px}
      .section{padding:68px 0}
      .hero{padding:46px 0 44px}
      .banner-content{font-size:16px}
      .pricing-card,.testimonial-card,.tab-preview{padding:20px}
      .metric h3{font-size:28px}
      .testimonial-text{font-size:17px}
      .cta-strip h3{font-size:22px}
    }
  `;

  const currentSection = productSections[activeTab];
  const currentTestimonial = testimonials[testimonialIndex];

  const initials = currentTestimonial.name
    .split(' ')
    .map((n) => n[0])
    .slice(0, 2)
    .join('');

  const Icon = ({ type = 0 }) => {
    const icons = [
      <svg key="1" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 2l7 4v6c0 5-3.5 9.5-7 10-3.5-.5-7-5-7-10V6l7-4z" stroke={accent} strokeWidth="2"/><path d="M9 12l2 2 4-4" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      <svg key="2" width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="5" width="18" height="14" rx="3" stroke={accent} strokeWidth="2"/><path d="M7 9h10M7 13h6" stroke={accent} strokeWidth="2" strokeLinecap="round"/></svg>,
      <svg key="3" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v18M3 12h18" stroke={accent} strokeWidth="2" strokeLinecap="round"/><circle cx="12" cy="12" r="9" stroke={accent} strokeWidth="2"/></svg>,
      <svg key="4" width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M5 12h14M12 5l7 7-7 7" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>,
    ];
    return icons[type % icons.length];
  };

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
          <div className="nav-right">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <a
              className="animated-cta btn-magnetic"
              href={ctas[0].href}
              target="_blank"
              rel="noreferrer"
            >
              {ctas[0].text}
            </a>
          </div>
        </div>
      </header>

      <section className="hero clip-reveal">
        <div className="container banner-area">
          <div className="banner-text" data-depth="0.15">
            <h1 className="banner-title split-text reveal">
              Deliver Exceptional Customer Support with{' '}
              <span className="gradient-text">Zoho Desk</span>
            </h1>
            <p className="banner-content reveal reveal-delay-1">
              Streamline customer service, manage tickets efficiently, and deliver
              seamless support experiences across every channel.
            </p>

            <div className="chips reveal reveal-delay-2">
              {[
                'Omnichannel Support',
                'Ticket Management',
                'AI Assistance (Zia)',
                'Workflow Automation',
              ].map((chip, i) => (
                <div className="chip" key={chip}>
                  <Icon type={i} />
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions reveal reveal-delay-3">
              <a
                className="animated-cta"
                href={ctas[1].href}
                target="_blank"
                rel="noreferrer"
              >
                {ctas[1].text}
              </a>
              <a className="btn-ghost" href="#pricing">
                Zoho Desk
              </a>
            </div>
          </div>

          <div className="hero-visual zoom-reveal" data-depth="0.4">
            <div className="hero-media-card hero-cinematic-bg">
              <video autoPlay muted loop playsInline preload="auto">
                <source
                  src="/output/generated-assets/ds_1778219578825_159b6c5f/15-abf00e0886.mp4"
                  type="video/mp4"
                />
              </video>
            </div>
            <div className="floating-card float-one float-ambient">
              <small>Trusted by</small>
              <strong>100,000+ Businesses Globally</strong>
            </div>
            <div className="floating-card float-two float-ambient">
              <small>Built for</small>
              <strong>Businesses and support teams</strong>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-strip bg-soft">
        <div className="container trust-grid">
          <div className="metric reveal">
            <h3 data-count="100000" data-suffix="+" data-prefix=""></h3>
            <p>Trusted by 100,000+ Businesses Globally</p>
          </div>
          <div className="metric reveal reveal-delay-1">
            <h3>Zoho Desk</h3>
            <p>Customer Support Software for businesses and support teams.</p>
          </div>
          <div className="metric reveal reveal-delay-2">
            <h3>AI + Automation</h3>
            <p>Streamline customer service and manage tickets efficiently.</p>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Why teams choose <span className="gradient-text">Zoho Desk</span>
            </h2>
            <p>
              With powerful automation and contextual AI, Zoho Desk helps businesses
              deliver faster, smarter, and more personalized customer support.
            </p>
          </div>

          <div className="tabs-wrap">
            <div className="tabs-list stagger-parent">
              {productSections.map((section, index) => (
                <button
                  key={section.name}
                  className={`tab-btn ${activeTab === index ? 'active' : ''}`}
                  onClick={() => setActiveTab(index)}
                >
                  <span>{section.name}</span>
                  <p>{section.description}</p>
                </button>
              ))}
            </div>

            <div className="tab-preview reveal">
              <div className="preview-top">
                <div className="preview-copy">
                  <h3>{currentSection.headline}</h3>
                  <p className="desc">{currentSection.description}</p>

                  <div className="feature-list">
                    {currentSection.features.map((feature, i) => (
                      <div className="feature-item hover-lift" key={feature.title}>
                        <Icon type={i} />
                        <div>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {currentSection.name === 'Integrate with popular apps and Zoho ecosystem' && (
                    <div className="integration-grid">
                      {currentSection.features.map((f) => (
                        <div className="integration-chip" key={f.title}>
                          {f.title}
                        </div>
                      ))}
                    </div>
                  )}
                </div>

                <div className="preview-media">
                  {currentSection.browserFrame ? (
                    <div className="browser-frame zoom-reveal">
                      <div className="browser-bar">
                        <span className="dot"></span>
                        <span className="dot"></span>
                        <span className="dot"></span>
                      </div>
                      <img src={currentSection.image} alt={currentSection.headline} />
                    </div>
                  ) : (
                    <div className="plain-media zoom-reveal">
                      <img src={currentSection.image} alt={currentSection.headline} />
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-strip-inner">
          <h3 className="reveal">Deliver exceptional customer support with Zoho Desk</h3>
          <a
            className="animated-cta reveal"
            href={ctas[2].href}
            target="_blank"
            rel="noreferrer"
          >
            {ctas[2].text}
          </a>
        </div>
      </section>

      <section id="pricing" className="section bg-warm">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              Zoho Desk <span className="gradient-text">Price Plan Includes</span>
            </h2>
            <p>Zoho Desk</p>
          </div>

          <div className="pricing-card reveal">
            <div className="pricing-top">
              <div className="pricing-copy">
                <h3 className="pricing-name">Zoho Desk</h3>
                <div className="price-row">
                  <span className="old-price">(was )</span>
                  <span className="new-price">Zoho Desk</span>
                  <span className="badge">Includes</span>
                </div>

                <div className="pricing-list">
                  {pricingFeatures.map((item, i) => (
                    <div className="pricing-item" key={item}>
                      <Icon type={i} />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: 22 }}>
                  <a
                    className="animated-cta"
                    href={ctas[3].href}
                    target="_blank"
                    rel="noreferrer"
                    style={{ width: '100%' }}
                  >
                    {ctas[3].text}
                  </a>
                </div>
              </div>

              <div className="pricing-media">
                <div className="plain-media zoom-reveal">
                  <img
                    src="/output/generated-assets/ds_1778219578825_159b6c5f/10-535a0d371d.png"
                    alt="Zoho Desk"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-head reveal">
            <h2>
              What users say about <span className="gradient-text">Zoho Desk</span>
            </h2>
            <p>Trusted feedback from support and operations teams.</p>
          </div>

          <div className="testi-wrap">
            <div className="testimonial-card reveal">
              <div className="quote-mark">❝</div>
              <div className="stars">★★★★★</div>
              <p className="testimonial-text">{currentTestimonial.quote}</p>

              <div className="author">
                <div className="avatar">{initials}</div>
                <div>
                  <h4>{currentTestimonial.name}</h4>
                  <p>{currentTestimonial.role}</p>
                </div>
              </div>
            </div>

            <div className="testi-controls">
              <button
                className="ctrl-btn"
                onClick={() =>
                  setTestimonialIndex(
                    (testimonialIndex - 1 + testimonials.length) % testimonials.length
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
                className="ctrl-btn"
                onClick={() =>
                  setTestimonialIndex((testimonialIndex + 1) % testimonials.length)
                }
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip bg-soft">
        <div className="container cta-strip-inner">
          <h3 className="reveal">Streamline customer service with Zoho Desk</h3>
          <a
            className="animated-cta reveal"
            href={ctas[4].href}
            target="_blank"
            rel="noreferrer"
          >
            {ctas[4].text}
          </a>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-left">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              alt="Techjockey"
            />
            <p style={{ margin: '14px 0 8px' }}>support@techjockey.com</p>
            <p style={{ margin: 0 }}>© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>

          <div>
            <div className="footer-links" style={{ marginBottom: 16 }}>
              <a href="/privacy-policy" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>
              <a href="/terms" target="_blank" rel="noreferrer">
                Terms
              </a>
            </div>

            <div className="socials">
              <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3l1-4h-4V9c0-.6.4-1 1-1z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
              </a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.2 1.7-2.2-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.2-5.2.8-.5 1-.4 2 .1 2.9-3.3-.2-6.2-1.7-8.2-4.2-1.1 1.9-.5 4.3 1.3 5.5-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.8 3.4 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 4 2.9A8.5 8.5 0 0 1 2 19.5 12 12 0 0 0 8.3 21c7.7 0 12.1-6.5 11.8-12.3.8-.6 1.4-1.2 1.9-1.9z"/></svg>
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2.01 2.01 0 0 0 3.2 5a2.01 2.01 0 0 0 2.03 2c1.13 0 2.04-.9 2.04-2A2.01 2.01 0 0 0 5.25 3zM20.44 12.6c0-2.8-1.5-4.1-3.5-4.1-1.62 0-2.34.9-2.74 1.53V8.5h-3.37c.04 1 .01 11.5.01 11.5h3.37v-6.42c0-.34.02-.68.12-.92.27-.68.87-1.38 1.88-1.38 1.33 0 1.86 1.03 1.86 2.54V20H21v-7.4z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;