import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#f64b40';
  const primary = '#f64b40';
  const bodyBg = '#ffffff';

  const [activeSlide, setActiveSlide] = useState(0);
  const pageRef = useRef(null);

  const ctas = [
    {
      text: 'Get quotation',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Get quotation',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Get quotation',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Get quotation',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
  ];

  const testimonials = [
    {
      quote:
        'Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.',
      author: 'Amit Kapoor',
      role: 'IT Manager',
      avatar: '/output/generated-assets/ds_1777965314147_f8e00ac2/15-01fc6c95c0.jpg',
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      author: 'Saurav Singh',
      role: 'Head of Operations',
      avatar: '/output/generated-assets/ds_1777965314147_f8e00ac2/13-a1af876bc5.png',
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      author: 'Shrimi Manchanda',
      role: 'Operations Manager',
      avatar: '/output/generated-assets/ds_1777965314147_f8e00ac2/15-01fc6c95c0.jpg',
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      author: 'Shweta Thakur',
      role: 'Senior System Administrator',
      avatar: '/output/generated-assets/ds_1777965314147_f8e00ac2/13-a1af876bc5.png',
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      author: 'Narinder Sahni',
      role: 'IT Head',
      avatar: '/output/generated-assets/ds_1777965314147_f8e00ac2/15-01fc6c95c0.jpg',
    },
  ];

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
  }, [accent, primary]);

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
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-parent').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const counters = document.querySelectorAll('[data-count]');
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) return;
        const el = entry.target;
        const target = parseFloat(el.getAttribute('data-count'));
        const suffix = el.getAttribute('data-suffix') || '';
        const prefix = el.getAttribute('data-prefix') || '';
        const duration = 2000;
        const start = performance.now();
        const isDecimal = target % 1 !== 0;
        const animate = (now) => {
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
    counters.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll('.btn-magnetic');
    const handlers = [];
    btns.forEach((btn) => {
      const move = (e) => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + (x * 0.25) + 'px, ' + (y * 0.25) + 'px)';
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
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};}
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;background:${bodyBg};color:#1a1a1a;font-family:Inter,sans-serif}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .page-wrapper {
      animation: pageReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) both;
    }
    .container{width:min(1180px,calc(100% - 40px));margin:0 auto}
    .nav{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(20px);border-bottom:1px solid #e7e7e7}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:16px 0}
    .brand{display:flex;align-items:center;gap:12px;font-weight:800;font-size:20px;color:var(--accent);font-family:"Plus Jakarta Sans",sans-serif}
    .tj-logo{display:flex;align-items:center;justify-content:center}
    .animated-cta,.ghost-btn{
      display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:12px;font-weight:700;
      transition:transform .25s ease,box-shadow .25s ease,background .25s ease,color .25s ease;border:1px solid transparent
    }
    .animated-cta{background:var(--accent);color:#fff;box-shadow:0 10px 24px rgba(246,75,64,.25)}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 16px 32px rgba(246,75,64,.32);background:var(--primary)}
    .ghost-btn{background:#fff;color:#1a1a1a;border-color:#e7e7e7}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 12px 24px rgba(0,0,0,.08)}
    .hero{background:#fff;padding:56px 0 38px;position:relative;overflow:hidden}
    .hero:before,.hero:after{content:"";position:absolute;border-radius:50%;pointer-events:none}
    .hero:before{width:420px;height:420px;right:-120px;top:-80px;background:radial-gradient(circle, rgba(246,75,64,.14) 0%, transparent 68%)}
    .hero:after{width:280px;height:280px;left:-80px;bottom:-60px;background:radial-gradient(circle, rgba(246,75,64,.12) 0%, transparent 70%)}
    .hero-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:36px;align-items:center}
    .eyebrow{display:inline-flex;padding:8px 14px;border-radius:999px;background:rgba(246,75,64,.09);border:1px solid rgba(246,75,64,.18);color:var(--accent);font-size:13px;font-weight:700;margin-bottom:18px}
    h1,h2,h3{font-family:"Plus Jakarta Sans",sans-serif;margin:0;color:#1a1a1a}
    .hero h1{font-size:clamp(48px,6vw,64px);line-height:1.04;letter-spacing:-.03em}
    .hero-sub{font-size:18px;line-height:1.7;color:#5f6368;max-width:640px;margin-top:18px}
    .hero-support{font-size:14px;color:#5f6368;margin-top:12px}
    .gradient-text{background:linear-gradient(135deg,#f64b40 0%,#f64b40 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;background:#fff;border:1px solid rgba(246,75,64,.18);color:#313131;font-size:13px;font-weight:600;box-shadow:0 8px 20px rgba(0,0,0,.04)}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:26px}
    .hero-benefits{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-top:24px}
    .benefit{padding:14px 16px;border:1px solid #ececec;border-radius:16px;background:#fff;box-shadow:0 10px 24px rgba(0,0,0,.05)}
    .benefit strong{display:block;font-size:22px;font-family:"Plus Jakarta Sans",sans-serif}
    .benefit span{font-size:13px;color:#5f6368}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center}
    .dashboard-visual{position:relative;width:100%;min-height:520px;border-radius:28px;background:linear-gradient(180deg,#fff 0%,#fff7f6 100%);border:1px solid #ececec;box-shadow:0 28px 60px rgba(0,0,0,.09);overflow:hidden;padding:24px}
    .mesh{position:absolute;inset:0;background:
      radial-gradient(circle at 15% 25%, rgba(246,75,64,.18), transparent 28%),
      radial-gradient(circle at 85% 20%, rgba(246,75,64,.10), transparent 24%),
      radial-gradient(circle at 70% 80%, rgba(246,75,64,.14), transparent 26%),
      linear-gradient(180deg,#ffffff,#fff8f7)}
    .dash-main{position:relative;z-index:2;background:#fff;border:1px solid #ececec;border-radius:22px;box-shadow:0 20px 45px rgba(0,0,0,.08);overflow:hidden}
    .dash-top{display:flex;align-items:center;justify-content:space-between;padding:14px 18px;border-bottom:1px solid #f0f0f0;background:#fcfcfc}
    .dots{display:flex;gap:7px}
    .dots span{width:10px;height:10px;border-radius:50%;background:#e6e6e6}
    .dots span:first-child{background:#ffd66b}.dots span:nth-child(2){background:#ff9f6b}.dots span:nth-child(3){background:#7edb88}
    .dash-body{display:grid;grid-template-columns:220px 1fr;min-height:320px}
    .dash-sidebar{padding:18px;border-right:1px solid #f2f2f2;background:#fff}
    .side-item{height:12px;border-radius:999px;background:linear-gradient(90deg,rgba(246,75,64,.24),rgba(246,75,64,.08));margin-bottom:14px}
    .side-item:nth-child(2){width:82%}.side-item:nth-child(3){width:68%}.side-item:nth-child(4){width:88%}.side-item:nth-child(5){width:60%}
    .dash-content{padding:18px;background:linear-gradient(180deg,#fff,#fffafa)}
    .panel-row{display:grid;grid-template-columns:1.2fr .8fr;gap:16px;margin-bottom:16px}
    .panel,.mini-card,.floating-card{background:#fff;border:1px solid #ececec;border-radius:18px;box-shadow:0 14px 28px rgba(0,0,0,.05)}
    .panel{padding:18px}
    .panel-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:14px}
    .panel-title{font-weight:800;font-family:"Plus Jakarta Sans",sans-serif}
    .bar-group{display:grid;gap:12px}
    .bar{height:12px;border-radius:999px;background:#f2f2f2;overflow:hidden}
    .bar span{display:block;height:100%;border-radius:999px;background:linear-gradient(90deg,var(--accent),rgba(246,75,64,.6))}
    .calendar{display:grid;grid-template-columns:repeat(4,1fr);gap:10px}
    .calendar span{height:42px;border-radius:12px;background:#fff5f4;border:1px solid rgba(246,75,64,.12)}
    .metric-strip{display:grid;grid-template-columns:repeat(3,1fr);gap:12px;margin-top:16px}
    .mini-card{padding:14px}
    .mini-card strong{display:block;font-size:20px}
    .mini-card p{margin:6px 0 0;color:#5f6368;font-size:12px}
    .floating-card{position:absolute;padding:14px 16px;z-index:3}
    .float-a{top:34px;right:24px;width:180px}
    .float-b{bottom:26px;left:16px;width:200px}
    .float-c{bottom:34px;right:28px;width:160px}
    .floating-card .line{height:10px;border-radius:999px;background:#f3f3f3;margin-top:10px}
    .floating-card .line span{display:block;height:100%;background:linear-gradient(90deg,var(--accent),rgba(246,75,64,.5));border-radius:999px}
    .trust{background:#f5f5f5;padding:26px 0;border-top:1px solid #ececec;border-bottom:1px solid #ececec}
    .trust-top{display:flex;justify-content:space-between;gap:18px;align-items:center;flex-wrap:wrap;margin-bottom:18px}
    .trust-title{font-weight:800;font-family:"Plus Jakarta Sans",sans-serif;font-size:24px}
    .trust-sub{color:#5f6368}
    .logo-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:18px}
    .logo-box{height:88px;background:#fff;border:1px solid #e7e7e7;border-radius:18px;display:flex;align-items:center;justify-content:center;padding:18px;filter:grayscale(1);transition:filter .3s ease,transform .3s ease,box-shadow .3s ease}
    .logo-box:hover{filter:grayscale(0);transform:translateY(-4px);box-shadow:0 14px 28px rgba(0,0,0,.08)}
    .logo-box img{max-height:34px;object-fit:contain}
    .marquee-wrapper{overflow:hidden;background:#fff;padding:18px 0;border-top:1px solid #e7e7e7;border-bottom:1px solid #e7e7e7}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 28s linear infinite}
    .marquee-track:hover{animation-play-state:paused}
    .ticker{font-size:24px;font-weight:800;font-family:"Plus Jakarta Sans",sans-serif;margin-right:42px;white-space:nowrap;color:#1a1a1a}
    section{transition:background-color .4s ease}
    .content-section{padding:72px 0;position:relative;overflow:hidden}
    .content-section .orb{position:absolute;border-radius:50%;pointer-events:none}
    .content-section .orb.one{right:-80px;top:-50px;width:240px;height:240px;background:radial-gradient(circle,rgba(246,75,64,.1),transparent 70%)}
    .content-section .orb.two{left:-60px;bottom:-60px;width:210px;height:210px;background:radial-gradient(circle,rgba(246,75,64,.08),transparent 70%)}
    .split{display:grid;grid-template-columns:1fr 1fr;gap:42px;align-items:center}
    .section-tag{display:inline-flex;padding:8px 14px;border-radius:999px;background:rgba(246,75,64,.1);color:var(--accent);font-size:12px;font-weight:700;border:1px solid rgba(246,75,64,.16);margin-bottom:14px}
    .section-head{font-size:clamp(32px,4vw,44px);line-height:1.1;letter-spacing:-.02em;margin-bottom:14px}
    .section-desc{border-left:3px solid rgba(246,75,64,.25);padding-left:18px;color:#5f6368;line-height:1.8;margin-bottom:24px}
    .spotlight{padding:24px;border-radius:24px;background:#fff;border:1px solid #eaeaea;box-shadow:0 18px 40px rgba(0,0,0,.06);margin-bottom:16px}
    .spotlight h3{font-size:24px;margin-bottom:8px}
    .spotlight p{margin:0;color:#5f6368;line-height:1.7}
    .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .feature-card{padding:18px;border-radius:18px;background:#fff;border:1px solid #ececec}
    .feature-card h4{margin:12px 0 8px;font-size:18px;font-family:"Plus Jakarta Sans",sans-serif}
    .feature-card p{margin:0;color:#5f6368;line-height:1.65;font-size:14px}
    .icon-wrap{width:42px;height:42px;border-radius:12px;background:rgba(246,75,64,.12);display:flex;align-items:center;justify-content:center;color:var(--accent)}
    .section-media img,.section-media video{width:100%;display:block;border-radius:24px}
    .media-card{background:#fff;border:1px solid #ececec;border-radius:24px;box-shadow:0 22px 48px rgba(0,0,0,.08);padding:16px}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:24px;border:1px solid #e7e7e7;background:#f8f8f8;box-shadow:0 22px 48px rgba(0,0,0,.08)}
    .browser-bar{display:flex;align-items:center;gap:8px;padding:14px 16px;background:#fff;border-bottom:1px solid #ececec}
    .browser-bar span{width:10px;height:10px;border-radius:50%;background:#ddd}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .stats-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px}
    .stat-box{padding:18px;border-radius:18px;background:#fff;border:1px solid #ececec;box-shadow:0 12px 26px rgba(0,0,0,.05)}
    .stat-box strong{display:block;font-size:34px;font-family:"Plus Jakarta Sans",sans-serif;margin-bottom:6px}
    .stat-box p{margin:0;color:#5f6368;line-height:1.6}
    .pricing{background:#fff;padding:78px 0}
    .pricing-wrap{max-width:860px;margin:0 auto}
    .pricing-card{padding:28px;border-radius:28px;background:linear-gradient(180deg,#fff 0%,#fff8f7 100%);border:1px solid rgba(246,75,64,.18);box-shadow:0 24px 50px rgba(0,0,0,.08);position:relative}
    .price-badge{position:absolute;top:18px;right:18px;background:#e9f8ee;color:#1f8b4c;padding:8px 12px;border-radius:999px;font-size:12px;font-weight:800}
    .price-title{font-size:32px;margin-bottom:6px}
    .price-row{display:flex;align-items:end;gap:12px;margin:16px 0 24px}
    .price-old{text-decoration:line-through;color:#8a8a8a}
    .price-new{font-size:42px;font-family:"Plus Jakarta Sans",sans-serif;font-weight:800}
    .includes{display:grid;gap:12px;margin:20px 0 26px}
    .inc-item{display:flex;align-items:flex-start;gap:10px;padding:10px 12px;border:1px solid #ededed;border-radius:14px;background:#fff}
    .inc-item span:last-child{color:#474747;line-height:1.55}
    .pricing .animated-cta{width:100%}
    .testimonials{background:#f5f5f5;padding:78px 0}
    .testimonial-shell{position:relative;overflow:hidden}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-slide{min-width:100%;padding:8px}
    .testimonial-card{background:#fff;border:1px solid #e7e7e7;border-radius:28px;padding:34px;box-shadow:0 22px 46px rgba(0,0,0,.07)}
    .quote-mark{font-size:54px;line-height:1;color:var(--accent);font-family:"Plus Jakarta Sans",sans-serif;font-weight:800}
    .stars{color:#d4a017;letter-spacing:2px;font-size:18px;margin:4px 0 18px}
    .testimonial-text{font-size:20px;line-height:1.75;color:#242424;margin:0 0 26px}
    .author{display:flex;align-items:center;gap:14px}
    .author img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid rgba(246,75,64,.18)}
    .author strong{display:block;font-size:16px}
    .author span{display:block;color:#7a7a7a;font-size:14px}
    .slider-controls{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:22px}
    .arrow-btn,.dot-btn{border:none;cursor:pointer}
    .arrow-btn{width:42px;height:42px;border-radius:50%;background:#fff;border:1px solid #e7e7e7}
    .dot-btn{width:10px;height:10px;border-radius:999px;background:#cfcfcf;transition:all .3s ease}
    .dot-btn.active{width:28px;background:var(--accent)}
    .footer{background:#111;padding:34px 0;color:#fff}
    .footer-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:24px;align-items:center}
    .footer-brand img{height:28px}
    .footer-meta{margin-top:14px;color:rgba(255,255,255,.76);display:grid;gap:8px}
    .footer-links{display:flex;gap:18px;flex-wrap:wrap;color:rgba(255,255,255,.8);font-size:14px}
    .socials{display:flex;gap:12px;justify-content:flex-end;flex-wrap:wrap}
    .socials a{width:40px;height:40px;border-radius:50%;display:flex;align-items:center;justify-content:center;border:1px solid rgba(255,255,255,.18);color:#fff;transition:all .25s ease}
    .socials a:hover{transform:translateY(-2px);background:var(--accent);border-color:var(--accent)}
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
    .marquee-track-reverse { animation: marqueeScrollReverse 28s linear infinite; }
    .marquee-track-fast { animation-duration: 16s; }
    .marquee-track-slow { animation-duration: 40s; }
    @keyframes pageReveal {
      0%   { opacity: 0; transform: translateY(12px); }
      100% { opacity: 1; transform: translateY(0); }
    }
    @media (max-width: 991px){
      .hero-grid,.split,.footer-grid,.dash-body,.panel-row{grid-template-columns:1fr}
      .hero-visual{min-height:auto}
      .hero-benefits,.logo-grid,.feature-grid,.stats-grid,.metric-strip{grid-template-columns:1fr 1fr}
      .nav-inner{grid-template-columns:1fr auto auto}
      .socials{justify-content:flex-start}
    }
    @media (max-width: 640px){
      .container{width:min(100% - 28px,1180px)}
      .nav-inner{grid-template-columns:1fr auto;gap:12px}
      .nav-inner .nav-cta{grid-column:1/-1}
      .hero{padding-top:34px}
      .hero-benefits,.logo-grid,.feature-grid,.stats-grid,.metric-strip{grid-template-columns:1fr}
      .dashboard-visual{padding:14px;min-height:440px}
      .ticker{font-size:20px}
      .testimonial-card{padding:24px}
    }
  `;

  const Icon = ({ type }) => {
    const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: accent, strokeWidth: 2, strokeLinecap: 'round', strokeLinejoin: 'round' };
    const icons = {
      workspace: <svg {...common}><rect x="3" y="4" width="18" height="16" rx="2"/><path d="M3 10h18"/><path d="M8 4v16"/></svg>,
      collab: <svg {...common}><path d="M16 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2"/><circle cx="9.5" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>,
      remote: <svg {...common}><rect x="2" y="4" width="20" height="12" rx="2"/><path d="M8 20h8"/><path d="M12 16v4"/></svg>,
      ai: <svg {...common}><path d="M12 2v4"/><path d="M12 18v4"/><path d="M4.93 4.93l2.83 2.83"/><path d="M16.24 16.24l2.83 2.83"/><path d="M2 12h4"/><path d="M18 12h4"/><path d="M4.93 19.07l2.83-2.83"/><path d="M16.24 7.76l2.83-2.83"/><circle cx="12" cy="12" r="4"/></svg>,
      business: <svg {...common}><path d="M3 21h18"/><path d="M5 21V7l7-4 7 4v14"/><path d="M9 9h.01"/><path d="M9 13h.01"/><path d="M15 9h.01"/><path d="M15 13h.01"/></svg>,
      apps: <svg {...common}><rect x="3" y="3" width="7" height="7" rx="1"/><rect x="14" y="3" width="7" height="7" rx="1"/><rect x="14" y="14" width="7" height="7" rx="1"/><rect x="3" y="14" width="7" height="7" rx="1"/></svg>,
      secure: <svg {...common}><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>,
      chart: <svg {...common}><path d="M3 3v18h18"/><path d="M18 9l-5 5-3-3-4 4"/></svg>,
      check: <svg {...common}><path d="M20 6 9 17l-5-5"/></svg>,
      chat: <svg {...common}><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>,
    };
    return icons[type] || icons.check;
  };

  return (
    <div ref={pageRef} className="page-wrapper">
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand">
            <span style={{ fontWeight: 800, fontSize: '20px', color: accent }}>Zoho</span>
            <span style={{ color: '#1a1a1a', fontWeight: 700, fontSize: '16px' }}>Workplace</span>
          </div>
          <div className="tj-logo">
            <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" height="28px" alt="Techjockey" />
          </div>
          <div className="nav-cta" style={{ justifySelf: 'end' }}>
            <a className="animated-cta btn-magnetic" href={ctas[0].href} target="_blank" rel="noreferrer">
              {ctas[0].text}
            </a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <div className="eyebrow hero-headline">{'Zoho Workplace • Email & Collaboration Suite'}</div>
            <h1 className="hero-headline">
              Elevate Your Team’s Productivity with <span className="gradient-text">Zoho Workplace</span>
            </h1>
            <p className="hero-sub">
              A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
            </p>
            <div className="hero-support hero-sub">Easy Setup &amp; Quick Onboarding | A Made in India solution | 24x7 Support</div>

            <div className="chips hero-chips">
              {[
                { text: 'All-in-One Unified Workspace', icon: 'workspace' },
                { text: 'Seamless Collaboration in Real Time', icon: 'collab' },
                { text: 'Work from Anywhere, Anytime', icon: 'remote' },
                { text: 'AI-Powered Productivity (Zia)', icon: 'ai' },
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  <Icon type={chip.icon} />
                  <span>{chip.text}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions hero-cta">
              <a className="animated-cta btn-magnetic" href={ctas[1].href} target="_blank" rel="noreferrer">
                {ctas[1].text}
              </a>
              <a className="ghost-btn" href="#pricing">Zoho Workplace</a>
            </div>

            <div className="hero-benefits reveal">
              <div className="benefit hover-card">
                <strong><span data-count="100000" data-suffix="+">0</span></strong>
                <span>Trusted by 100,000+ Businesses Globally</span>
              </div>
              <div className="benefit hover-card">
                <strong>Enterprises</strong>
                <span>Email &amp; Collaboration Suite</span>
              </div>
              <div className="benefit hover-card">
                <strong>Unified</strong>
                <span>Communication and productivity in one platform</span>
              </div>
            </div>
          </div>

          <div className="hero-visual">
            <div className="dashboard-visual">
              <div className="mesh" />
              <div className="floating-card float-a hover-card">
                <strong style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: 16 }}>Unified Workspace</strong>
                <div className="line"><span style={{ width: '82%' }} /></div>
                <div className="line"><span style={{ width: '68%' }} /></div>
              </div>
              <div className="floating-card float-b hover-card">
                <strong style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: 16 }}>Real Time Collaboration</strong>
                <div className="line"><span style={{ width: '76%' }} /></div>
                <div className="line"><span style={{ width: '54%' }} /></div>
              </div>
              <div className="floating-card float-c hover-card">
                <strong style={{ fontFamily: '"Plus Jakarta Sans",sans-serif', fontSize: 16 }}>Anywhere Access</strong>
                <div className="line"><span style={{ width: '71%' }} /></div>
              </div>

              <div className="dash-main">
                <div className="dash-top">
                  <div className="dots"><span /><span /><span /></div>
                  <div style={{ fontWeight: 700, color: '#666' }}>Zoho Workplace</div>
                </div>
                <div className="dash-body">
                  <div className="dash-sidebar">
                    <div className="side-item" style={{ width: '92%' }} />
                    <div className="side-item" />
                    <div className="side-item" />
                    <div className="side-item" />
                    <div className="side-item" />
                  </div>
                  <div className="dash-content">
                    <div className="panel-row">
                      <div className="panel">
                        <div className="panel-head">
                          <span className="panel-title">Unified Communication</span>
                          <span style={{ color: accent, fontWeight: 700 }}>Live</span>
                        </div>
                        <div className="bar-group">
                          <div className="bar"><span style={{ width: '90%' }} /></div>
                          <div className="bar"><span style={{ width: '72%' }} /></div>
                          <div className="bar"><span style={{ width: '84%' }} /></div>
                        </div>
                      </div>
                      <div className="panel">
                        <div className="panel-head">
                          <span className="panel-title">Team Calendar</span>
                        </div>
                        <div className="calendar">
                          <span /><span /><span /><span />
                          <span /><span style={{ background: 'rgba(246,75,64,.18)' }} /><span /><span />
                        </div>
                      </div>
                    </div>
                    <div className="metric-strip">
                      <div className="mini-card">
                        <strong>Secure</strong>
                        <p>Strong data protection and safe communication</p>
                      </div>
                      <div className="mini-card">
                        <strong>Remote</strong>
                        <p>Access from any device, anywhere</p>
                      </div>
                      <div className="mini-card">
                        <strong>Intuitive</strong>
                        <p>Easy to use for faster adoption</p>
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
        <div className="container">
          <div className="trust-top reveal">
            <div>
              <div className="trust-title">Trusted by 100,000+ Businesses Globally</div>
              <div className="trust-sub">Proof that matters most for enterprise buyers.</div>
            </div>
            <div style={{ textAlign: 'right' }}>
              <div style={{ fontSize: 14, color: '#5f6368' }}>Trusted by</div>
              <div style={{ fontSize: 36, fontWeight: 800, fontFamily: '"Plus Jakarta Sans",sans-serif' }}>
                <span data-count="100000" data-suffix="+">0</span>
              </div>
            </div>
          </div>
          <div className="logo-grid stagger-parent visible">
            {[
              '/output/generated-assets/ds_1777965314147_f8e00ac2/11-4e22c31148.png',
              '/output/generated-assets/ds_1777965314147_f8e00ac2/22-b3d4199ca5.png',
              '/output/generated-assets/ds_1777965314147_f8e00ac2/23-61e528786b.png',
              '/output/generated-assets/ds_1777965314147_f8e00ac2/11-4e22c31148.png',
              '/output/generated-assets/ds_1777965314147_f8e00ac2/22-b3d4199ca5.png',
              '/output/generated-assets/ds_1777965314147_f8e00ac2/23-61e528786b.png',
              '/output/generated-assets/ds_1777965314147_f8e00ac2/11-4e22c31148.png',
              '/output/generated-assets/ds_1777965314147_f8e00ac2/22-b3d4199ca5.png',
            ].map((logo, i) => (
              <div className="logo-box hover-card stagger-child" key={i}>
                <img src={logo} alt={`Trust logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track marquee-track-fast">
          {Array.from({ length: 8 }).map((_, i) => (
            <span className="ticker" key={i}>
              Zoho Workplace <span className="gradient-text">★</span> Email &amp; Collaboration Suite
            </span>
          ))}
        </div>
      </div>

      <section className="content-section" style={{ background: '#ffffff' }}>
        <div className="orb one" />
        <div className="orb two" />
        <div className="container split">
          <div className="section-media reveal-left">
            <div className="media-card">
              <img
                src="/output/generated-assets/ds_1777965314147_f8e00ac2/12-113610f4ed.png"
                alt="Why Choose Zoho Workplace?"
              />
            </div>
          </div>
          <div className="reveal-right">
            <div className="section-tag">Features</div>
            <h2 className="section-head">Why Choose <span className="gradient-text">Zoho Workplace?</span></h2>
            <p className="section-desc">
              Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.
            </p>
            <div className="spotlight hover-card reveal-scale">
              <h3>All-in-One Unified Workspace</h3>
              <p>Access email, chat, documents, meetings, and storage in a single integrated platform. Reduce app switching and boost productivity.</p>
            </div>
            <div className="feature-grid stagger-parent">
              {[
                ['Seamless Collaboration in Real Time', 'Work together on documents, spreadsheets, and presentations with live editing, comments, and built-in communication tools.', 'collab'],
                ['Work from Anywhere, Anytime', 'Stay productive on the go. Reply to emails, access presentations, or host a video conference from anywhere effortlessly.', 'remote'],
                ['AI-Powered Productivity (Zia)', 'Leverage built-in AI for writing assistance in terms of grammar, readability and writing style while you work on Writer or Sheet.', 'ai'],
              ].map((item, i) => (
                <div className="feature-card hover-card stagger-child" key={i}>
                  <div className="icon-wrap"><Icon type={item[2]} /></div>
                  <h4>{item[0]}</h4>
                  <p>{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper" style={{ background: '#f5f5f5' }}>
        <div className="marquee-track marquee-track-reverse marquee-track-slow">
          {Array.from({ length: 8 }).map((_, i) => (
            <span className="ticker" key={i}>
              Unified Communication <span className="gradient-text">★</span> Enterprises
            </span>
          ))}
        </div>
      </div>

      <section className="content-section" style={{ background: '#f5f5f5' }}>
        <div className="orb one" />
        <div className="orb two" />
        <div className="container split">
          <div className="reveal-left">
            <div className="section-tag">Standard Features</div>
            <h2 className="section-head">Unlock Your Business Growth with <span className="gradient-text">Zoho Workplace</span></h2>
            <p className="section-desc">
              Zoho Workplace unifies email, collaboration, and productivity tools to streamline your business operations. Enable smarter teamwork and drive growth with a single platform.
            </p>
            <div className="spotlight hover-card">
              <h3>Ideal For Your Business Size</h3>
              <p>Designed for any organization, Zoho Workplace enhances efficiency and teamwork at every scale.</p>
            </div>
            <div className="feature-grid stagger-parent">
              {[
                ['Communicate Effectively', 'Go beyond email and chat, and connect teams with a social intranet using channels, feeds, and groups.', 'chat'],
                ['Integrated Business Apps', 'Connect with Zoho and third-party apps to unify workflows, eliminate silos, and streamline processes across your business.', 'apps'],
                ['Customizable Workspace', 'Customize settings, layouts, workflows to fit your needs. Also, get a professional, ad-free email service & advanced controls.', 'business'],
              ].map((item, i) => (
                <div className="feature-card hover-card stagger-child" key={i}>
                  <div className="icon-wrap"><Icon type={item[2]} /></div>
                  <h4>{item[0]}</h4>
                  <p>{item[1]}</p>
                </div>
              ))}
            </div>
            <div style={{ marginTop: 22 }}>
              <a className="animated-cta btn-magnetic" href={ctas[2].href} target="_blank" rel="noreferrer">
                {ctas[2].text}
              </a>
            </div>
          </div>
          <div className="section-media reveal-right">
            <div className="media-card">
              <img
                src="/output/generated-assets/ds_1777965314147_f8e00ac2/16-7c8786211f.gif"
                alt="Unlock Your Business Growth with Zoho Workplace"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: '#ffffff' }}>
        <div className="container split">
          <div className="section-media reveal-left">
            <div className="browser-frame">
              <div className="browser-bar"><span /><span /><span /></div>
              <img
                src="/output/generated-assets/ds_1777965314147_f8e00ac2/18-473c14de05.jpg"
                alt="Integrate with Popular Apps"
              />
            </div>
          </div>
          <div className="reveal-right">
            <div className="section-tag">Additional Features</div>
            <h2 className="section-head">Integrate with <span className="gradient-text">Popular Apps</span></h2>
            <p className="section-desc">
              Connect your Zoho Workplace with other business apps to ensure higher productivity and growth - all within a unified workspace.
            </p>
            <div className="feature-grid stagger-parent">
              {[
                ['Zoho Apps', 'Zoho Meeting, Zoho Connect, Zoho Mail, Zoho Cliq, Zoho Writer, etc.', 'apps'],
                ['Analytics', 'Zoho Analytics, Google Analytics', 'chart'],
                ['Accounting & Finance', 'Zoho Invoice & Zoho Books', 'business'],
                ['Automation', 'Zoho Flow, Zapier, viaSocket', 'ai'],
                ['Business Suites', 'Zoho One, Zoho Workspace', 'workspace'],
              ].map((item, i) => (
                <div className="feature-card hover-card stagger-child" key={i}>
                  <div className="icon-wrap"><Icon type={item[2]} /></div>
                  <h4>{item[0]}</h4>
                  <p>{item[1]}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="content-section" style={{ background: '#f5f5f5' }}>
        <div className="container split">
          <div className="reveal-left">
            <div className="section-tag">Insight</div>
            <h2 className="section-head">Performance Beyond Limits with <span className="gradient-text">Zoho Workplace</span></h2>
            <div className="stats-grid stagger-parent">
              <div className="stat-box hover-card stagger-child">
                <strong><span data-count="82.9">0</span>%</strong>
                <p>Secure: 82.9% of users reported a secure email experience, ensuring strong data protection, and safe and reliable communication.</p>
              </div>
              <div className="stat-box hover-card stagger-child">
                <strong><span data-count="42.9">0</span>%</strong>
                <p>Anywhere Access: 42.9% of them found it easier to work remotely with Zoho Workplace apps, enabling seamless access from any device, anywhere.</p>
              </div>
              <div className="stat-box hover-card stagger-child">
                <strong><span data-count="28.6">0</span>%</strong>
                <p>Intuitive: 28.6% found Zoho Workplace easy to use, reducing the learning curve. Teams can quickly adapt and work efficiently.</p>
              </div>
              <div className="stat-box hover-card stagger-child">
                <strong><span data-count="14.3">0</span>%</strong>
                <p>Collaborative: 14.3% of them saw improved collaboration, engagement and productivity, helping teams stay aligned and get more done faster.</p>
              </div>
            </div>
          </div>
          <div className="section-media reveal-right">
            <div className="browser-frame">
              <div className="browser-bar"><span /><span /><span /></div>
              <img
                src="/output/generated-assets/ds_1777965314147_f8e00ac2/24-22f1c49ed4.png"
                alt="Performance Beyond Limits with Zoho Workplace"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="pricing" className="pricing">
        <div className="container">
          <div className="pricing-wrap">
            <div className="reveal" style={{ textAlign: 'center', marginBottom: 24 }}>
              <div className="section-tag">Pricing</div>
              <h2 className="section-head">Zoho Workplace</h2>
            </div>
            <div className="pricing-card hover-card reveal-scale">
              <div className="price-badge">Included</div>
              <div className="price-title">Zoho Workplace</div>
              <div className="price-row">
                <span className="price-old">(was )</span>
                <span className="price-new">Zoho Workplace</span>
              </div>
              <div className="includes">
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
                  <div className="inc-item" key={i}>
                    <Icon type="check" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a className="animated-cta btn-magnetic" href={ctas[3].href} target="_blank" rel="noreferrer">
                {ctas[3].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 28 }}>
            <div className="section-tag">Testimonials</div>
            <h2 className="section-head">What Enterprises Say About <span className="gradient-text">Zoho Workplace</span></h2>
          </div>

          <div className="testimonial-shell reveal">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div className="testimonial-slide" key={i}>
                  <div className="testimonial-card hover-card">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">{t.quote}</p>
                    <div className="author">
                      <img src={t.avatar} alt={t.author} />
                      <div>
                        <strong>{t.author}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-controls">
              <button className="arrow-btn" onClick={() => setActiveSlide((activeSlide - 1 + testimonials.length) % testimonials.length)} aria-label="Previous testimonial">‹</button>
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot-btn ${i === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
              <button className="arrow-btn" onClick={() => setActiveSlide((activeSlide + 1) % testimonials.length)} aria-label="Next testimonial">›</button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" alt="Techjockey" />
            <div className="footer-meta">
              <div>support@techjockey.com</div>
              <div>© 2024 Techjockey Infotech Pvt. Ltd.</div>
              <div className="footer-links">
                <a href="/privacy-policy">Privacy Policy</a>
                <a href="/terms-and-conditions">Terms</a>
              </div>
            </div>
          </div>

          <div className="socials">
            <a href="https://www.facebook.com/Techjockey/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H17V4.8c-.4-.1-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7v3h3V22h3.5z"/></svg>
            </a>
            <a href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2C5.3 4 4 5.3 4 7v10c0 1.7 1.3 3 3 3h10c1.7 0 3-1.3 3-3V7c0-1.7-1.3-3-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm6.2-3.3a1.3 1.3 0 1 1-1.3 1.3 1.3 1.3 0 0 1 1.3-1.3z"/></svg>
            </a>
            <a href="https://twitter.com/Techjockey" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1A4.1 4.1 0 0 0 12 8.8c0 .3 0 .6.1.9A11.7 11.7 0 0 1 3.6 5.3a4.1 4.1 0 0 0 1.3 5.5c-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.7 3.3 4.1-.3.1-.7.1-1 .1-.2 0-.5 0-.7-.1.5 1.7 2.1 2.9 3.9 3A8.3 8.3 0 0 1 2 19.5 11.6 11.6 0 0 0 8.3 21c7
export default LandingPage;