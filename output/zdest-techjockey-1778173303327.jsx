import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#F5364C';
  const primary = '#F5364C';
  const bodyBg = '#ffffff';

  const [activeSlide, setActiveSlide] = useState(0);
  const pageRef = useRef(null);

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
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.15 }
    );

    const nodes = document.querySelectorAll('.reveal');
    nodes.forEach((el) => observer.observe(el));

    const script1 = document.createElement('script');
    script1.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    script1.async = true;
    document.body.appendChild(script1);

    const script2 = document.createElement('script');
    script2.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
    script2.async = true;
    document.body.appendChild(script2);

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const gsap = window.gsap;
          gsap.registerPlugin(window.ScrollTrigger);

          gsap.utils.toArray('.zoom-reveal').forEach((el) => {
            const img = el.querySelector('img,video,.visual-fill');
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
            const end = parseFloat(el.getAttribute('data-count')) || 0;
            const prefix = el.getAttribute('data-prefix') || '';
            const suffix = el.getAttribute('data-suffix') || '';
            const obj = { val: 0 };
            gsap.to(obj, {
              val: end,
              duration: 2,
              snap: { val: 0.1 },
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 85%' },
              onUpdate: () => {
                el.textContent = `${prefix}${obj.val.toFixed(end % 1 === 0 ? 0 : 1)}${suffix}`;
              },
            });
          });
        });
      });
    };

    script2.onload = initGSAP;
    script1.onload = initGSAP;

    return () => {
      observer.disconnect();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const getInitials = (name) =>
    name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

  const Icon = ({ type }) => {
    const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: accent, strokeWidth: 2 };
    if (type === 'omnichannel')
      return (
        <svg {...common}><path d="M4 7h16M4 12h10M4 17h7"/><circle cx="18" cy="17" r="2"/></svg>
      );
    if (type === 'ticket')
      return (
        <svg {...common}><path d="M4 8V6h16v2a2 2 0 0 0 0 4v2a2 2 0 0 0 0 4v2H4v-2a2 2 0 0 0 0-4v-2a2 2 0 0 0 0-4Z"/></svg>
      );
    if (type === 'ai')
      return (
        <svg {...common}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M18.4 5.6l-2.8 2.8M8.4 15.6l-2.8 2.8"/><circle cx="12" cy="12" r="3"/></svg>
      );
    if (type === 'flow')
      return (
        <svg {...common}><rect x="3" y="4" width="7" height="6" rx="1"/><rect x="14" y="4" width="7" height="6" rx="1"/><rect x="8.5" y="14" width="7" height="6" rx="1"/><path d="M10 7h4M12 10v4"/></svg>
      );
    return (
      <svg {...common}><circle cx="12" cy="12" r="9" /></svg>
    );
  };

  const css = `
    :root{--accent:${accent};--primary:${primary}}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:${bodyBg};font-family:Inter,sans-serif;color:#111827}
    a{text-decoration:none}
    img{max-width:100%}
    .page{background:${bodyBg};overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .main_header{position:sticky;top:0;z-index:50;background:rgba(15,23,42,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-bar{display:flex;align-items:center;justify-content:space-between;padding:14px 0;gap:16px}
    .nav-left,.nav-right-wrap{display:flex;align-items:center;gap:16px}
    .logo{font-weight:800;font-size:20px;color:${accent};font-family:'Plus Jakarta Sans',sans-serif}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:10px;background:${accent};color:#fff;font-weight:700;border:1px solid ${accent};transition:.25s ease;box-shadow:0 10px 24px rgba(245,54,76,.22)}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 16px 32px rgba(245,54,76,.28);background:${primary}}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:10px;background:transparent;color:#fff;font-weight:700;border:1px solid rgba(255,255,255,.2);transition:.25s ease}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 10px 24px rgba(0,0,0,.18);background:rgba(255,255,255,.08)}
    .banner_wrap{background:#0f172a;position:relative;padding:88px 0 72px;color:#fff}
    .banner_wrap:before,.banner_wrap:after{content:'';position:absolute;border-radius:999px;filter:blur(30px);opacity:.7;pointer-events:none}
    .banner_wrap:before{width:340px;height:340px;right:-80px;top:-60px;background:radial-gradient(circle, rgba(245,54,76,.34), transparent 70%)}
    .banner_wrap:after{width:260px;height:260px;left:-80px;bottom:-40px;background:radial-gradient(circle, rgba(245,54,76,.18), transparent 70%)}
    .banner-area{display:flex;align-items:center;gap:44px;position:relative;z-index:1}
    .banner-text,.hero-visual{flex:1}
    .banner-title{font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(48px,6vw,68px);line-height:1.03;font-weight:800;letter-spacing:-.03em;margin:0 0 18px;word-break:normal;overflow-wrap:normal;hyphens:none;white-space:normal}
    .banner-content{font-size:18px;line-height:1.75;color:#cbd5e1;max-width:620px;margin:0 0 26px}
    .gradient-text{background:linear-gradient(135deg,#F5364C 0%,#f5364c 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin:22px 0 30px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(245,54,76,.35);background:rgba(245,54,76,.1);color:#e5e7eb;font-size:13px}
    .hero-actions{display:flex;flex-wrap:wrap;gap:14px}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center}
    .hero-card{width:100%;min-height:500px;border-radius:26px;padding:24px;background:linear-gradient(180deg,rgba(255,255,255,.08),rgba(255,255,255,.03));border:1px solid rgba(255,255,255,.12);box-shadow:0 24px 80px rgba(0,0,0,.28);position:relative;overflow:hidden}
    .hero-mesh{position:absolute;inset:0;background:
      radial-gradient(circle at 20% 20%, rgba(245,54,76,.3), transparent 30%),
      radial-gradient(circle at 75% 30%, rgba(245,54,76,.18), transparent 28%),
      radial-gradient(circle at 50% 85%, rgba(255,255,255,.08), transparent 25%),
      linear-gradient(135deg,#131b2b 0%,#0b1220 100%)}
    .dashboard{position:relative;z-index:1;height:100%;display:flex;flex-direction:column;gap:16px}
    .dash-top{display:flex;gap:12px}
    .dash-stat,.dash-panel,.mini-card,.list-row,.dock-pill{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(12px)}
    .dash-stat{padding:14px 16px;border-radius:18px;min-width:148px}
    .dash-stat strong{display:block;color:#fff;font-size:22px;font-family:'Plus Jakarta Sans',sans-serif}
    .dash-stat span{display:block;color:#cbd5e1;font-size:12px;margin-top:4px}
    .dash-main{display:flex;gap:16px;flex:1}
    .dash-panel{flex:1;border-radius:22px;padding:18px;display:flex;flex-direction:column;gap:12px}
    .panel-head{display:flex;justify-content:space-between;align-items:center}
    .panel-title{font-size:14px;color:#fff;font-weight:700}
    .dots{display:flex;gap:6px}
    .dots i{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.25);display:block}
    .list-row{border-radius:14px;padding:12px 14px;display:flex;justify-content:space-between;align-items:center}
    .list-row b{font-size:13px;color:#fff}
    .list-row small{color:#cbd5e1}
    .status{padding:5px 10px;border-radius:999px;background:rgba(245,54,76,.16);color:#fff;font-size:11px;border:1px solid rgba(245,54,76,.28)}
    .mini-side{width:180px;display:flex;flex-direction:column;gap:12px}
    .mini-card{border-radius:18px;padding:14px}
    .mini-card strong{display:block;color:#fff;font-size:18px}
    .mini-card span{color:#cbd5e1;font-size:12px}
    .progress{height:8px;border-radius:999px;background:rgba(255,255,255,.1);overflow:hidden;margin-top:10px}
    .progress i{display:block;height:100%;background:linear-gradient(90deg,${accent},#ff7b8f);border-radius:999px}
    .dock{display:flex;gap:10px;flex-wrap:wrap}
    .dock-pill{padding:10px 12px;border-radius:14px;color:#fff;font-size:12px}
    .float-ambient{animation:floatY 6s ease-in-out infinite}
    .float-drift{animation:floatY 9s ease-in-out infinite}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
    .zoom-reveal{overflow:hidden}
    .zoom-reveal img,.zoom-reveal video,.zoom-reveal .visual-fill{transform:scale(1.1);will-change:transform}
    [data-depth]{will-change:transform}
    .stagger-parent>*{opacity:0;transform:translateY(24px)}
    .glass-card{background:rgba(255,255,255,0.05);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.08);border-radius:16px}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}
    .metrics-strip{background:#fff;border-bottom:1px solid #e5e7eb}
    .metrics-wrap{display:flex;gap:18px;justify-content:space-between;align-items:center;padding:22px 0;flex-wrap:wrap}
    .metric-card{flex:1;min-width:220px;background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:18px 20px;box-shadow:0 8px 24px rgba(0,0,0,.05)}
    .metric-card h3{margin:0 0 6px;font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;color:#111827}
    .metric-card p{margin:0;color:#6b7280;line-height:1.6}
    .section{padding:82px 0;position:relative}
    .bg-soft{background:#f5f5f5}
    .bg-white{background:#ffffff}
    .bg-blue{background:#f8fafc}
    .section-tag{display:inline-flex;padding:8px 14px;border-radius:999px;background:rgba(245,54,76,.1);border:1px solid rgba(245,54,76,.18);color:${accent};font-size:12px;font-weight:700;margin-bottom:14px}
    .section-head{max-width:760px;margin-bottom:28px}
    .section-head h2{margin:0 0 12px;font-family:'Plus Jakarta Sans',sans-serif;font-size:clamp(32px,4.4vw,44px);line-height:1.1;color:#111827}
    .section-head p{margin:0;color:#4b5563;line-height:1.8;font-size:17px}
    .spotlight-wrap{display:flex;flex-direction:column;gap:20px}
    .spotlight-card{display:flex;gap:28px;align-items:stretch;background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:24px;box-shadow:0 10px 30px rgba(0,0,0,.06)}
    .spotlight-content,.spotlight-visual{flex:1}
    .left-rule{border-left:3px solid rgba(245,54,76,.28);padding-left:18px;margin-bottom:18px}
    .feature-list{display:flex;flex-direction:column;gap:14px}
    .feature-item{display:flex;gap:14px;align-items:flex-start;padding:14px;border:1px solid #eceff3;border-radius:16px;background:#fff;transition:.25s ease}
    .feature-item:hover,.hover-lift:hover{transform:translateY(-6px);box-shadow:0 16px 30px rgba(0,0,0,.08)}
    .feature-icon{width:42px;height:42px;min-width:42px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:rgba(245,54,76,.1)}
    .feature-text h4{margin:0 0 6px;font-family:'Plus Jakarta Sans',sans-serif;font-size:18px;color:#111827}
    .feature-text p{margin:0;color:#6b7280;line-height:1.65;font-size:15px}
    .feature-grid{display:flex;gap:16px;flex-wrap:wrap}
    .feature-grid .feature-item{flex:1;min-width:240px}
    .visual-panel{height:100%;min-height:360px;border-radius:22px;background:linear-gradient(180deg,#131b2b 0%,#0b1220 100%);border:1px solid rgba(255,255,255,.08);padding:20px;position:relative;overflow:hidden}
    .visual-panel:before{content:'';position:absolute;right:-50px;top:-40px;width:180px;height:180px;border-radius:50%;background:radial-gradient(circle, rgba(245,54,76,.24), transparent 68%)}
    .ui-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}
    .ui-title{color:#fff;font-weight:700;font-size:15px}
    .ui-box{background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08);border-radius:16px;padding:14px;margin-bottom:12px}
    .ui-box strong{display:block;color:#fff;font-size:14px}
    .ui-box span{display:block;color:#cbd5e1;font-size:12px;margin-top:4px}
    .ui-row{display:flex;gap:10px}
    .ui-col{flex:1}
    .integration-board{display:flex;flex-wrap:wrap;gap:14px}
    .integration-tile{min-width:160px;flex:1;background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:18px;box-shadow:0 8px 22px rgba(0,0,0,.05);position:relative}
    .integration-tile h4,.custom-card h4{margin:0 0 8px;font-family:'Plus Jakarta Sans',sans-serif;font-size:18px}
    .integration-tile p,.custom-card p{margin:0;color:#6b7280;line-height:1.65}
    .integration-tile:before{content:'';position:absolute;top:14px;right:14px;width:10px;height:10px;border-radius:50%;background:${accent};box-shadow:0 0 0 6px rgba(245,54,76,.12)}
    .custom-flex{display:flex;gap:16px;flex-wrap:wrap}
    .custom-card{flex:1;min-width:240px;background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:20px;box-shadow:0 8px 22px rgba(0,0,0,.05)}
    .pricing-section{background:#fff}
    .pricing-card{max-width:820px;margin:0 auto;background:#fff;border:2px solid rgba(245,54,76,.22);border-radius:26px;padding:28px;box-shadow:0 18px 40px rgba(245,54,76,.08)}
    .plan-badge{display:inline-flex;padding:8px 14px;border-radius:999px;background:#dcfce7;color:#166534;font-size:12px;font-weight:700;margin-bottom:14px}
    .pricing-top{display:flex;justify-content:space-between;align-items:flex-start;gap:18px;flex-wrap:wrap}
    .pricing-top h3{margin:0;font-family:'Plus Jakarta Sans',sans-serif;font-size:34px;color:#111827}
    .pricing-note{color:#6b7280;line-height:1.7;margin-top:8px}
    .price-stack{display:flex;align-items:center;gap:10px;flex-wrap:wrap}
    .old-price{color:#9ca3af;text-decoration:line-through;font-weight:600}
    .new-price{font-size:38px;font-weight:800;font-family:'Plus Jakarta Sans',sans-serif;color:#111827}
    .pricing-list{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0}
    .pricing-list li{list-style:none;width:calc(50% - 6px);padding:12px 14px;border-radius:14px;background:#f8fafc;border:1px solid #e5e7eb;color:#374151}
    .pricing-list li:before{content:'✓';color:${accent};font-weight:800;margin-right:8px}
    .testimonial-wrap{background:#f5f5f5}
    .testimonial-grid{display:flex;gap:18px;flex-wrap:wrap}
    .testimonial-box{flex:1;min-width:280px;background:#fff;border:1px solid #e5e7eb;border-radius:22px;padding:26px;box-shadow:0 8px 24px rgba(0,0,0,.05)}
    .quote-mark{font-size:54px;line-height:1;color:${accent};font-family:'Plus Jakarta Sans',sans-serif}
    .stars{color:#f59e0b;letter-spacing:2px;font-size:18px;margin:10px 0 16px}
    .testimonial-text{font-size:17px;line-height:1.8;color:#374151;margin:0 0 22px}
    .author{display:flex;align-items:center;gap:14px}
    .avatar{width:52px;height:52px;border-radius:50%;background:${accent};color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800}
    .author strong{display:block;color:#111827}
    .author span{display:block;color:#6b7280;font-size:14px;margin-top:4px}
    .dots-nav{display:flex;justify-content:center;gap:8px;margin-top:22px}
    .dots-nav button{width:8px;height:8px;border-radius:999px;border:none;background:#d1d5db;cursor:pointer;transition:.3s}
    .dots-nav button.active{width:24px;background:${accent}}
    .cta-strip{background:#0f172a;padding:34px 0}
    .cta-card{display:flex;justify-content:space-between;gap:20px;align-items:center;padding:28px;border-radius:24px;background:linear-gradient(135deg,#131b2b,#0b1220);border:1px solid rgba(255,255,255,.08)}
    .cta-card h3{margin:0 0 8px;color:#fff;font-family:'Plus Jakarta Sans',sans-serif;font-size:32px}
    .cta-card p{margin:0;color:#cbd5e1;line-height:1.7;max-width:700px}
    .footer{background:#0f172a;color:#fff;padding:48px 0 28px}
    .footer-top{display:flex;justify-content:space-between;gap:28px;flex-wrap:wrap;padding-bottom:24px;border-bottom:1px solid rgba(255,255,255,.1)}
    .footer-brand p,.footer-links a,.footer-bottom,.footer-email a{color:#cbd5e1}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .socials a{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.16);color:#fff;transition:.25s ease}
    .socials a:hover{transform:translateY(-2px);background:rgba(255,255,255,.08)}
    .footer-bottom{display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;padding-top:18px;font-size:14px}
    @media (max-width: 991px){
      .banner-area,.spotlight-card,.cta-card,.dash-main{flex-direction:column}
      .hero-visual,.hero-card{min-height:440px}
      .pricing-list li{width:100%}
      .mini-side{width:100%}
    }
    @media (max-width: 767px){
      .nav-bar{flex-wrap:wrap}
      .nav-right-wrap{width:100%;justify-content:space-between}
      .banner_wrap{padding:72px 0 56px}
      .banner-title{font-size:44px}
      .container{width:min(1180px,calc(100% - 24px))}
      .metric-card,.feature-grid .feature-item,.custom-card,.integration-tile,.testimonial-box{min-width:100%}
      .pricing-top{flex-direction:column}
      .cta-card h3{font-size:26px}
    }
  `;

  return (
    <div className="page" ref={pageRef}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="main_header">
        <div className="container">
          <div className="nav-bar">
            <div className="nav-left">
              <span className="logo">Zoho Desk</span>
            </div>
            <div className="nav-right-wrap">
              <img
                src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
                height="28px"
                alt="Techjockey"
              />
              <a className="animated-cta" href={ctas[0].href} target="_blank" rel="noreferrer">
                {ctas[0].text}
              </a>
            </div>
          </div>
        </div>
      </header>

      <section className="banner_wrap clip-reveal">
        <div className="container">
          <div className="banner-area">
            <div className="banner-text" data-depth="0.15">
              <h1 className="banner-title reveal split-text">
                Deliver Exceptional Customer Support with <span className="gradient-text">Zoho Desk</span>
              </h1>
              <p className="banner-content reveal reveal-delay-1">
                Streamline customer service, manage tickets efficiently, and deliver seamless support experiences across every channel.
              </p>

              <div className="chip-row reveal reveal-delay-2">
                <div className="chip">
                  <Icon type="omnichannel" />
                  <span>Omnichannel Support</span>
                </div>
                <div className="chip">
                  <Icon type="ticket" />
                  <span>Ticket Management</span>
                </div>
                <div className="chip">
                  <Icon type="ai" />
                  <span>AI Assistance (Zia)</span>
                </div>
                <div className="chip">
                  <Icon type="flow" />
                  <span>Workflow Automation</span>
                </div>
              </div>

              <div className="hero-actions reveal reveal-delay-3">
                <a className="animated-cta btn-magnetic" href={ctas[1].href} target="_blank" rel="noreferrer">
                  {ctas[1].text}
                </a>
                <a className="ghost-btn" href="#pricing">
                  View Pricing
                </a>
              </div>
            </div>

            <div className="hero-visual zoom-reveal" data-depth="0.4">
              <div className="hero-card hero-cinematic-bg">
                <div className="hero-mesh visual-fill" />
                <div className="dashboard">
                  <div className="dash-top">
                    <div className="dash-stat float-ambient">
                      <strong>Omnichannel</strong>
                      <span>email, chat, phone, and social media</span>
                    </div>
                    <div className="dash-stat float-ambient" style={{ animationDelay: '1s' }}>
                      <strong>AI Assistance</strong>
                      <span>intelligent suggestions and auto-tagging</span>
                    </div>
                  </div>

                  <div className="dash-main">
                    <div className="dash-panel">
                      <div className="panel-head">
                        <div className="panel-title">Support Workspace</div>
                        <div className="dots"><i /><i /><i /></div>
                      </div>
                      <div className="list-row">
                        <div>
                          <b>Ticket Management</b>
                          <small>Organize, prioritize, and resolve tickets efficiently</small>
                        </div>
                        <span className="status">Active</span>
                      </div>
                      <div className="list-row">
                        <div>
                          <b>Workflow Automation</b>
                          <small>Assign tickets and streamline processes faster</small>
                        </div>
                        <span className="status">Live</span>
                      </div>
                      <div className="list-row">
                        <div>
                          <b>Conversation Intelligence</b>
                          <small>Deliver consistent and contextual support experiences</small>
                        </div>
                        <span className="status">AI</span>
                      </div>
                      <div className="dock">
                        <div className="dock-pill">Zoho CRM</div>
                        <div className="dock-pill">Slack</div>
                        <div className="dock-pill">Shopify</div>
                        <div className="dock-pill">Zapier</div>
                      </div>
                    </div>

                    <div className="mini-side">
                      <div className="mini-card float-ambient">
                        <strong>100,000+</strong>
                        <span>Businesses Globally</span>
                        <div className="progress"><i style={{ width: '84%' }} /></div>
                      </div>
                      <div className="mini-card float-drift">
                        <strong>Zia AI</strong>
                        <span>Sentiment analysis and response assistance</span>
                        <div className="progress"><i style={{ width: '72%' }} /></div>
                      </div>
                      <div className="mini-card float-ambient" style={{ animationDelay: '.8s' }}>
                        <strong>Help Center</strong>
                        <span>Branded self-service portals and knowledge bases</span>
                        <div className="progress"><i style={{ width: '66%' }} /></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="metrics-strip">
        <div className="container">
          <div className="metrics-wrap stagger-parent">
            <div className="metric-card">
              <h3>100,000+</h3>
              <p>Businesses Globally</p>
            </div>
            <div className="metric-card">
              <h3>Trusted</h3>
              <p>Trusted by 100,000+ Businesses Globally</p>
            </div>
            <div className="metric-card">
              <h3>Support</h3>
              <p>Customer Support / Help Desk Software</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft clip-reveal">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-tag">Why Choose Zoho Desk?</span>
            <h2>
              Why Choose <span className="gradient-text">Zoho Desk?</span>
            </h2>
            <p>
              With powerful automation and contextual AI, Zoho Desk helps businesses deliver faster, smarter, and more personalized customer support.
            </p>
          </div>

          <div className="spotlight-wrap">
            <div className="spotlight-card reveal">
              <div className="spotlight-visual zoom-reveal">
                <div className="visual-panel">
                  <div className="ui-header">
                    <div className="ui-title">Unified Support View</div>
                    <div className="dots"><i /><i /><i /></div>
                  </div>
                  <div className="ui-box">
                    <strong>Omnichannel Support</strong>
                    <span>Manage customer conversations across email, chat, phone, and social media from a single platform.</span>
                  </div>
                  <div className="ui-row">
                    <div className="ui-col">
                      <div className="ui-box">
                        <strong>Ticket Management</strong>
                        <span>Organize, prioritize, and resolve tickets efficiently with automation and smart workflows.</span>
                      </div>
                    </div>
                    <div className="ui-col">
                      <div className="ui-box">
                        <strong>AI Assistance (Zia)</strong>
                        <span>Get intelligent suggestions, auto-tag tickets, detect sentiment, and respond faster with AI-powered insights.</span>
                      </div>
                    </div>
                  </div>
                  <div className="ui-box">
                    <strong>Workflow Automation</strong>
                    <span>Automate repetitive support tasks, assign tickets, and streamline processes for faster resolutions.</span>
                  </div>
                </div>
              </div>

              <div className="spotlight-content">
                <div className="left-rule">
                  <p className="section-head p" style={{ margin: 0 }}>
                    With powerful automation and contextual AI, Zoho Desk helps businesses deliver faster, smarter, and more personalized customer support.
                  </p>
                </div>

                <div className="feature-list stagger-parent">
                  <div className="feature-item hover-lift">
                    <div className="feature-icon"><Icon type="omnichannel" /></div>
                    <div className="feature-text">
                      <h4>Omnichannel Support</h4>
                      <p>Manage customer conversations across email, chat, phone, and social media from a single platform.</p>
                    </div>
                  </div>
                  <div className="feature-item hover-lift">
                    <div className="feature-icon"><Icon type="ticket" /></div>
                    <div className="feature-text">
                      <h4>Ticket Management</h4>
                      <p>Organize, prioritize, and resolve tickets efficiently with automation and smart workflows.</p>
                    </div>
                  </div>
                  <div className="feature-item hover-lift">
                    <div className="feature-icon"><Icon type="ai" /></div>
                    <div className="feature-text">
                      <h4>AI Assistance (Zia)</h4>
                      <p>Get intelligent suggestions, auto-tag tickets, detect sentiment, and respond faster with AI-powered insights.</p>
                    </div>
                  </div>
                  <div className="feature-item hover-lift">
                    <div className="feature-icon"><Icon type="flow" /></div>
                    <div className="feature-text">
                      <h4>Workflow Automation</h4>
                      <p>Automate repetitive support tasks, assign tickets, and streamline processes for faster resolutions.</p>
                    </div>
                  </div>
                </div>

                <div style={{ marginTop: '22px' }}>
                  <a className="animated-cta" href={ctas[2].href} target="_blank" rel="noreferrer">
                    {ctas[2].text}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white clip-reveal">
        <div className="container">
          <div className="spotlight-card reveal">
            <div className="spotlight-content">
              <span className="section-tag">AI-Powered Support</span>
              <h2 style={{ marginTop: 0, fontFamily: "'Plus Jakarta Sans',sans-serif", fontSize: 'clamp(32px,4.4vw,44px)', lineHeight: 1.1 }}>
                Make Smarter Support Decisions with <span className="gradient-text">Zia AI</span>
              </h2>
              <div className="left-rule">
                <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.8, fontSize: 17 }}>
                  Zoho Desk includes Zia, an AI-powered assistant that helps support teams improve response quality and resolution speed.
                </p>
              </div>
              <div className="feature-grid stagger-parent">
                <div className="feature-item hover-lift">
                  <div className="feature-icon"><Icon type="ai" /></div>
                  <div className="feature-text">
                    <h4>AI-Powered Responses</h4>
                    <p>Generate accurate replies, suggest solutions, and assist agents in real time.</p>
                  </div>
                </div>
                <div className="feature-item hover-lift">
                  <div className="feature-icon"><Icon type="ticket" /></div>
                  <div className="feature-text">
                    <h4>Sentiment Analysis</h4>
                    <p>Understand customer emotions and prioritize critical issues for better service.</p>
                  </div>
                </div>
                <div className="feature-item hover-lift">
                  <div className="feature-icon"><Icon type="flow" /></div>
                  <div className="feature-text">
                    <h4>Auto Tagging & Insights</h4>
                    <p>Automatically categorize tickets and uncover patterns to improve support efficiency.</p>
                  </div>
                </div>
                <div className="feature-item hover-lift">
                  <div className="feature-icon"><Icon type="omnichannel" /></div>
                  <div className="feature-text">
                    <h4>Conversation Intelligence</h4>
                    <p>Analyze interactions across channels to deliver consistent and contextual support experiences.</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="spotlight-visual zoom-reveal">
              <div className="visual-panel">
                <div className="ui-header">
                  <div className="ui-title">Zia AI Assistant</div>
                  <div className="dots"><i /><i /><i /></div>
                </div>
                <div className="ui-box">
                  <strong>AI-Powered Responses</strong>
                  <span>Generate accurate replies, suggest solutions, and assist agents in real time.</span>
                </div>
                <div className="ui-box">
                  <strong>Sentiment Analysis</strong>
                  <span>Understand customer emotions and prioritize critical issues for better service.</span>
                </div>
                <div className="ui-row">
                  <div className="ui-col">
                    <div className="ui-box">
                      <strong>Auto Tagging & Insights</strong>
                      <span>Automatically categorize tickets and uncover patterns.</span>
                    </div>
                  </div>
                  <div className="ui-col">
                    <div className="ui-box">
                      <strong>Conversation Intelligence</strong>
                      <span>Analyze interactions across channels for contextual support.</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-blue clip-reveal">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-tag">Integrations</span>
            <h2>
              Integrate with popular apps and <span className="gradient-text">Zoho ecosystem</span>
            </h2>
            <p>
              Connect your help desk with your favorite apps across CRM, communication, and business tools with ease.
            </p>
          </div>

          <div className="integration-board stagger-parent">
            <div className="integration-tile hover-lift">
              <h4>CRM Integration</h4>
              <p>Zoho CRM, HubSpot, and more</p>
            </div>
            <div className="integration-tile hover-lift">
              <h4>Collaboration Tools</h4>
              <p>Slack, Microsoft Teams</p>
            </div>
            <div className="integration-tile hover-lift">
              <h4>Telephony</h4>
              <p>Aircall, RingCentral</p>
            </div>
            <div className="integration-tile hover-lift">
              <h4>E-commerce Platforms</h4>
              <p>Shopify, WooCommerce</p>
            </div>
            <div className="integration-tile hover-lift">
              <h4>Automation Tools</h4>
              <p>Zapier & Zoho Flow</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white clip-reveal">
        <div className="container">
          <div className="section-head reveal">
            <span className="section-tag">Customization</span>
            <h2>
              <span className="gradient-text">Customization</span> Beyond Limits
            </h2>
            <p>Zoho Desk is built to adapt to your support workflows and business needs.</p>
          </div>

          <div className="custom-flex stagger-parent">
            <div className="custom-card hover-lift">
              <h4>Layouts</h4>
              <p>Customize ticket views, fields, and workflows to match your processes.</p>
            </div>
            <div className="custom-card hover-lift">
              <h4>Blueprints</h4>
              <p>Design structured workflows to guide agents through every support process.</p>
            </div>
            <div className="custom-card hover-lift">
              <h4>Extensions</h4>
              <p>Extend functionality with custom apps and integrations.</p>
            </div>
            <div className="custom-card hover-lift">
              <h4>Help Center</h4>
              <p>Create branded self-service portals and knowledge bases for customers.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section pricing-section clip-reveal" id="pricing">
        <div className="container">
          <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 28px' }}>
            <span className="section-tag">Pricing</span>
            <h2>
              Zoho Desk <span className="gradient-text">Pricing, Features, and Free Trial</span>
            </h2>
            <p>Customer Support / Help Desk Software</p>
          </div>

          <div className="pricing-card reveal">
            <span className="plan-badge">Easy Setup & Quick Onboarding</span>
            <div className="pricing-top">
              <div>
                <h3>Zoho Desk</h3>
                <p className="pricing-note">
                  Includes: Ticket Management, Omnichannel Support, Workflow Automation, AI-Powered Assistance, Knowledge Base, Reporting & Analytics, Integrations, Alerts & Notifications, Supported Device: Android, iOS, Windows, Mac
                </p>
              </div>
              <div className="price-stack">
                <span className="old-price">was</span>
                <span className="new-price">—</span>
              </div>
            </div>

            <ul className="pricing-list">
              <li>Ticket Management</li>
              <li>Omnichannel Support</li>
              <li>Workflow Automation</li>
              <li>AI-Powered Assistance</li>
              <li>Knowledge Base</li>
              <li>Reporting & Analytics</li>
              <li>Integrations</li>
              <li>Alerts & Notifications</li>
              <li>Supported Device: Android, iOS, Windows, Mac</li>
            </ul>

            <a className="animated-cta" href={ctas[3].href} target="_blank" rel="noreferrer" style={{ width: '100%' }}>
              {ctas[3].text}
            </a>
          </div>
        </div>
      </section>

      <section className="section testimonial-wrap clip-reveal">
        <div className="container">
          <div className="section-head reveal" style={{ textAlign: 'center', margin: '0 auto 28px' }}>
            <span className="section-tag">Testimonials</span>
            <h2>
              What teams say about <span className="gradient-text">Zoho Desk</span>
            </h2>
          </div>

          <div style={{ overflow: 'hidden', position: 'relative' }}>
            <div
              style={{
                display: 'flex',
                transform: `translateX(-${activeSlide * 100}%)`,
                transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
              }}
            >
              {testimonials.map((t, i) => (
                <div key={i} style={{ minWidth: '100%' }}>
                  <div className="testimonial-grid">
                    {[t, testimonials[(i + 1) % testimonials.length], testimonials[(i + 2) % testimonials.length]].map((item, idx) => (
                      <div className="testimonial-box reveal visible" key={`${i}-${idx}`}>
                        <div className="quote-mark">❝</div>
                        <div className="stars">★★★★★</div>
                        <p className="testimonial-text">{item.quote}</p>
                        <div className="author">
                          <div className="avatar">{getInitials(item.author)}</div>
                          <div>
                            <strong>{item.author}</strong>
                            <span>{item.role}</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            <div className="dots-nav">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={i === activeSlide ? 'active' : ''}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div className="cta-card">
            <div>
              <h3>Deliver Exceptional Customer Support with Zoho Desk</h3>
              <p>
                Streamline customer service, manage tickets efficiently, and deliver seamless support experiences across every channel.
              </p>
            </div>
            <a className="animated-cta" href={ctas[4].href} target="_blank" rel="noreferrer">
              {ctas[4].text}
            </a>
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
              <p style={{ margin: '14px 0 0' }}>Customer Support / Help Desk Software</p>
              <div className="footer-email" style={{ marginTop: 10 }}>
                <a href="mailto:support@techjockey.com">support@techjockey.com</a>
              </div>
            </div>

            <div>
              <div className="footer-links" style={{ marginBottom: 16 }}>
                <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
                <a href="/terms" target="_blank" rel="noreferrer">Terms</a>
              </div>
              <div className="socials">
                <a href="https://www.facebook.com/Techjockey/" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V8c0-1.2.4-2 2-2h2V2.5c-.3 0-1.4-.1-2.7-.1-2.7 0-4.5 1.6-4.5 4.7V10H7v4h3v8h3Z"/></svg>
                </a>
                <a href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5Zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7Zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5Zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5Zm5-3.25a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17 6.25Z"/></svg>
                </a>
                <a href="https://x.com/Techjockey" target="_blank" rel="noreferrer" aria-label="Twitter">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.3-8.4L1 2h6.3l4.3 5.7L18.9 2Zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20Z"/></svg>
                </a>
                <a href="https://www.linkedin.com/company/techjockey-infotech-pvt-ltd/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5ZM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3ZM20.44 12.8c0-3.45-1.84-5.06-4.29-5.06a3.72 3.72 0 0 0-3.35 1.84V8.5H9.43c.04.71 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.69.13-.93a2.22 2.22 0 0 1 2.08-1.48c1.47 0 2.06 1.12 2.06 2.77V20h3.37Z"/></svg>
                </a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2024 Techjockey Infotech Pvt. Ltd.</div>
            <div>support@techjockey.com</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;