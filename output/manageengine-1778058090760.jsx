import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#f26430';
  const primary = '#f26430';
  const bodyBg = '#ffffff';

  const [activeTab1, setActiveTab1] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const pageRef = useRef(null);

  const ctas = [
    {
      text: 'Talk to Expert',
      href: 'https://www.manageengine.com/products/desktop-central/endpoint-central-endpoint-security.html',
    },
    {
      text: 'Talk to Expert',
      href: 'https://www.manageengine.com/products/desktop-central/endpoint-central-endpoint-security.html',
    },
    {
      text: 'Talk to Expert',
      href: 'https://www.manageengine.com/products/desktop-central/endpoint-central-endpoint-security.html',
    },
    {
      text: 'Talk to Expert',
      href: 'https://www.manageengine.com/products/desktop-central/endpoint-central-endpoint-security.html',
    },
  ];

  const testimonials = [
    {
      quote:
        'Endpoint Central helps us stay on top of patch management. The remote support features are fantastic and help us manage systems efficiently.',
      author: 'Rahul Verma',
      designation: 'ICT & Service Desk Administrator',
    },
    {
      quote:
        'Endpoint Central has helped our business enhance employee experience and support users in a timely and efficient manner.',
      author: 'Shweta Singh',
      designation: 'IT Infrastructure Manager',
    },
    {
      quote:
        'Endpoint Central has simplified patch management and software deployment for our IT team. Managing hundreds of devices from one console has significantly improved our operational efficiency.',
      author: 'Sachin Gupta',
      designation: 'IT Operations Manager',
    },
    {
      quote:
        'We purchased Endpoint Central through Techjockey and the experience was seamless. Their team guided us through the evaluation, purchase process, and even helped us with the post-purchase demo and onboarding.',
      author: 'Rounak Sharma',
      designation: 'Head of IT Infrastructure',
    },
    {
      quote:
        'Techjockey made our Endpoint Central purchase extremely smooth. From product consultation to after-purchase support and demo sessions, their team ensured we could deploy the solution quickly.',
      author: 'Ayushi Jain',
      designation: 'Senior System Administrator',
    },
  ];

  const sectionOneFeatures = [
    {
      title: 'Patch & Update Management',
      description:
        'Secure and stabilize your operating systems, applications, and mobile apps with automated patches and updates.',
    },
    {
      title: 'Browser Security',
      description:
        'Protect and manage multiple browsers, track usage patterns, and maintain compliance with standards like STIG.',
    },
    {
      title: 'Data Security',
      description:
        'Identify and encrypt sensitive data, enforce policies for authorized usage, and ensure secure transmission.',
    },
    {
      title: 'Vulnerability Remediation',
      description:
        'Leverage continuous threat intelligence, thorough assessments, and swift remediation to mitigate risks.',
    },
  ];

  const sectionTwoFeatures = [
    {
      title: 'Strengthen Endpoint Security',
      description:
        'Built-in security controls for malware protection, such as next-gen antivirus and anti-ransomware.',
    },
    {
      title: 'Manage IT Assets Effectively',
      description:
        'Live notifications and ready-made reports to discover, track, and manage your hardware, software, and digital assets.',
    },
    {
      title: 'Enhance Application Control & Privileges',
      description:
        'Define install permissions, track privileges, and enforce zero-trust security with role-based and time-bound access.',
    },
    {
      title: 'Facilitate Remote Access & Troubleshooting',
      description:
        'Remotely perform system operations with multi-user collaboration to efficiently troubleshoot devices.',
    },
    {
      title: 'Ensure Compliance',
      description: 'Adhere to regulatory compliance and generate comprehensive audit-ready reports.',
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

    return () => observer.disconnect();
  }, [accent, primary]);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);

    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => clearInterval(timer);
  }, [accent, primary, testimonials.length]);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);

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
        s.onerror = resolve;
        document.body.appendChild(s);
      });

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const gsap = window.gsap;
          const ScrollTrigger = window.ScrollTrigger;
          gsap.registerPlugin(ScrollTrigger);

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

          const splitTextEl = document.querySelector('.split-text');
          if (splitTextEl && !splitTextEl.dataset.ready) {
            const text = splitTextEl.textContent || '';
            splitTextEl.dataset.ready = 'true';
            splitTextEl.innerHTML = text
              .split('')
              .map((char) => `<span class="char">${char === ' ' ? '&nbsp;' : char}</span>`)
              .join('');
            gsap.fromTo(
              splitTextEl.querySelectorAll('.char'),
              { opacity: 0, y: 24 },
              { opacity: 1, y: 0, duration: 0.5, stagger: 0.02, ease: 'power3.out' }
            );
          }
        });
      });
    };

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'),
    ]).then(() => {
      initGSAP();
    });
  }, [accent, primary]);

  const css = `
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;font-family:'Inter',sans-serif;background:${bodyBg};color:#111827;scroll-behavior:smooth}
    body{overflow-x:hidden}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .lp-root{background:${bodyBg}}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:72px 0;position:relative}
    .section-light{background:#ffffff}
    .section-soft{background:#f8fafc}
    .gradient-text{
      background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      background-clip:text;
    }
    .nav{
      position:sticky;top:0;z-index:50;
      backdrop-filter:blur(20px);
      background:rgba(255,255,255,.92);
      border-bottom:1px solid #e5e7eb;
    }
    .nav-inner{
      display:grid;
      grid-template-columns:1fr auto auto;
      align-items:center;
      gap:16px;
      min-height:78px;
    }
    .brand-left{display:flex;align-items:center;gap:12px}
    .brand-mark{
      width:40px;height:40px;border-radius:12px;
      background:linear-gradient(135deg, ${accent}, ${primary});
      color:#fff;font-weight:800;display:flex;align-items:center;justify-content:center;
      box-shadow:0 10px 24px rgba(242,100,48,.22);
    }
    .brand-name{font-weight:800;font-size:18px;line-height:1.2}
    .brand-sub{font-size:12px;color:#6b7280}
    .nav-right{display:flex;align-items:center;gap:18px}
    .animated-cta{
      display:inline-flex;align-items:center;justify-content:center;
      padding:12px 22px;border-radius:12px;border:1px solid ${accent};
      background:${accent};color:#fff;font-weight:700;font-size:14px;
      transition:transform .25s ease, box-shadow .25s ease, background .25s ease;
      white-space:nowrap;
    }
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(242,100,48,.24);background:${primary}}
    .ghost-btn{
      display:inline-flex;align-items:center;justify-content:center;
      padding:12px 22px;border-radius:12px;border:1px solid #d1d5db;
      background:#fff;color:#111827;font-weight:700;
      transition:transform .25s ease, box-shadow .25s ease, border-color .25s ease;
    }
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 12px 24px rgba(0,0,0,.08);border-color:${accent}}
    .hero{
      padding:44px 0 64px;
      background:#ffffff;
      overflow:hidden;
    }
    .hero-grid{
      display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center;
      min-height:560px;
    }
    .hero-copy{position:relative;z-index:2}
    .eyebrow{
      display:inline-flex;align-items:center;gap:8px;
      padding:8px 14px;border-radius:999px;background:rgba(242,100,48,.10);
      color:${accent};border:1px solid rgba(242,100,48,.18);font-size:13px;font-weight:700;
      margin-bottom:20px;
    }
    .hero h1{
      font-size:clamp(48px,6vw,68px);line-height:1.02;letter-spacing:-.03em;
      margin:0 0 18px;font-weight:800;color:#111827;
    }
    .hero p.sub{
      font-size:18px;line-height:1.7;color:#4b5563;margin:0 0 14px;max-width:650px;
    }
    .hero p.support{
      font-size:16px;line-height:1.8;color:#4b5563;margin:0 0 28px;max-width:680px;
    }
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0 30px}
    .chip{
      display:inline-flex;align-items:center;gap:8px;
      padding:10px 14px;border-radius:999px;background:#fff;border:1px solid #e5e7eb;
      color:#374151;font-size:13px;font-weight:600;
      box-shadow:0 8px 24px rgba(0,0,0,.04);
    }
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{
      position:relative;min-height:500px;display:flex;align-items:center;justify-content:center;
    }
    .hero-cinematic-bg{
      position:absolute;inset:30px 0 20px 40px;
      border-radius:28px;
      background:linear-gradient(180deg, rgba(242,100,48,.08), rgba(242,100,48,.02));
      border:1px solid #e5e7eb;
    }
    .hero-orb,.hero-orb2{
      position:absolute;border-radius:50%;filter:blur(8px);pointer-events:none;
    }
    .hero-orb{
      width:260px;height:260px;right:-20px;top:-10px;
      background:radial-gradient(circle, rgba(242,100,48,.22) 0%, rgba(242,100,48,0) 70%);
    }
    .hero-orb2{
      width:220px;height:220px;left:20px;bottom:10px;
      background:radial-gradient(circle, rgba(242,100,48,.14) 0%, rgba(242,100,48,0) 72%);
    }
    .visual-card{
      position:relative;z-index:2;width:100%;
      border-radius:24px;background:#fff;border:1px solid #e5e7eb;
      box-shadow:0 30px 70px rgba(17,24,39,.10);overflow:hidden;
    }
    .browser-frame{
      display:flex;flex-direction:column;overflow:hidden;background:#ffffff;border-radius:24px;
    }
    .browser-top{
      display:flex;align-items:center;gap:8px;padding:14px 16px;border-bottom:1px solid #eef2f7;background:#f8fafc;
    }
    .dot{width:10px;height:10px;border-radius:50%;background:#d1d5db}
    .browser-frame img{
      flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block;
    }
    .float-card{
      position:absolute;z-index:3;background:#fff;border:1px solid #e5e7eb;border-radius:18px;
      padding:14px 16px;box-shadow:0 18px 40px rgba(17,24,39,.10);max-width:220px;
    }
    .float-card.small{right:-8px;top:58px}
    .float-card.bottom{left:-8px;bottom:30px}
    .float-title{font-size:12px;color:#6b7280;margin-bottom:6px}
    .float-value{font-size:18px;font-weight:800;color:#111827}
    .float-line{height:8px;border-radius:999px;background:linear-gradient(90deg, ${accent}, rgba(242,100,48,.15));margin-top:10px}
    .human-png{
      position:absolute;right:18px;bottom:-2px;width:180px;z-index:4;pointer-events:none;
      filter:drop-shadow(0 16px 24px rgba(0,0,0,.12));
    }

    .trust-grid{
      display:grid;grid-template-columns:1.1fr 1.3fr;gap:28px;align-items:center;
    }
    .trust-copy h2,.section-head h2{
      font-size:clamp(32px,4vw,42px);line-height:1.08;margin:0 0 12px;font-weight:800;
    }
    .trust-copy p,.section-head p{font-size:16px;line-height:1.75;color:#4b5563;margin:0}
    .logo-grid{
      display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px;
    }
    .logo-item{
      height:72px;background:#fff;border:1px solid #e5e7eb;border-radius:14px;
      display:flex;align-items:center;justify-content:center;padding:12px;
      transition:transform .25s ease, box-shadow .25s ease, filter .25s ease;
      filter:grayscale(1);
    }
    .logo-item:hover{transform:translateY(-3px);box-shadow:0 14px 28px rgba(0,0,0,.08);filter:grayscale(0)}
    .logo-item img{max-height:32px;max-width:100%;object-fit:contain}
    .proof-pill{
      display:inline-flex;align-items:center;gap:8px;
      padding:8px 12px;border-radius:999px;background:#fff;border:1px solid #e5e7eb;
      font-size:13px;font-weight:700;color:#111827;margin-bottom:12px;
    }

    .split-section{
      display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;
    }
    .media-panel{
      position:relative;border-radius:24px;overflow:hidden;border:1px solid #e5e7eb;
      background:#0a0a0a;box-shadow:0 24px 60px rgba(17,24,39,.10);
    }
    .media-panel.light{background:#f8f8f8}
    .media-panel img{width:100%;height:460px;object-fit:cover;display:block}
    .section-tag{
      display:inline-flex;align-items:center;padding:8px 12px;border-radius:999px;
      border:1px solid rgba(242,100,48,.18);background:rgba(242,100,48,.08);color:${accent};
      font-size:13px;font-weight:700;margin-bottom:16px;
    }
    .desc-rail{
      border-left:3px solid rgba(242,100,48,.28);padding-left:18px;margin:16px 0 24px;
      color:#4b5563;font-size:16px;line-height:1.8;
    }
    .feature-shell{
      display:grid;grid-template-columns:260px 1fr;gap:20px;align-items:stretch;
    }
    .tabs{
      display:flex;flex-direction:column;gap:10px;
    }
    .tab-btn{
      text-align:left;border:1px solid #e5e7eb;background:#fff;border-radius:16px;
      padding:16px;cursor:pointer;transition:.25s ease;font-weight:700;color:#111827;
    }
    .tab-btn span{display:block;font-size:13px;line-height:1.6;color:#6b7280;font-weight:500;margin-top:6px}
    .tab-btn.active{
      border-color:rgba(242,100,48,.35);background:rgba(242,100,48,.06);
      box-shadow:0 14px 30px rgba(242,100,48,.10);
    }
    .preview-card{
      background:#fff;border:1px solid #e5e7eb;border-radius:20px;padding:22px;
      box-shadow:0 16px 40px rgba(17,24,39,.06);height:100%;
    }
    .preview-icon{
      width:54px;height:54px;border-radius:14px;background:rgba(242,100,48,.12);
      color:${accent};display:flex;align-items:center;justify-content:center;margin-bottom:16px;
    }
    .preview-card h3{margin:0 0 10px;font-size:24px;line-height:1.2}
    .preview-card p{margin:0;color:#4b5563;line-height:1.8;font-size:16px}
    .mini-metrics{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:18px}
    .metric{
      background:#f8fafc;border:1px solid #e5e7eb;border-radius:16px;padding:14px;
    }
    .metric strong{display:block;font-size:14px;color:#111827;margin-bottom:6px}
    .metric span{font-size:13px;color:#6b7280;line-height:1.6}
    .hover-lift{transition:transform .25s ease, box-shadow .25s ease}
    .hover-lift:hover{transform:translateY(-6px);box-shadow:0 18px 34px rgba(17,24,39,.10)}

    .pricing-wrap{
      display:grid;grid-template-columns:minmax(0,1fr);gap:20px;max-width:760px;margin:0 auto;
    }
    .pricing-card{
      background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:28px;
      box-shadow:0 20px 50px rgba(17,24,39,.06);text-align:left;
    }
    .pricing-badge{
      display:inline-flex;padding:8px 12px;border-radius:999px;background:#ecfdf5;color:#047857;
      font-size:13px;font-weight:800;border:1px solid #a7f3d0;margin-bottom:16px;
    }
    .pricing-card h3{margin:0 0 10px;font-size:28px}
    .pricing-card p{margin:0;color:#4b5563;line-height:1.8}
    .pricing-empty{
      margin-top:20px;padding:18px;border-radius:16px;background:#f8fafc;border:1px dashed #d1d5db;
      color:#6b7280;font-size:15px;
    }

    .testimonial-stage{
      position:relative;overflow:hidden;
      background:#fff;border:1px solid #e5e7eb;border-radius:28px;box-shadow:0 20px 50px rgba(17,24,39,.06);
    }
    .testimonial-track{
      display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1);
    }
    .testimonial-slide{min-width:100%;padding:36px}
    .quote-mark{font-size:56px;line-height:1;color:${accent};font-weight:800}
    .stars{color:#f59e0b;letter-spacing:2px;font-size:18px;margin:8px 0 16px}
    .testimonial-quote{font-size:22px;line-height:1.7;color:#111827;margin:0 0 24px;font-weight:500}
    .author-row{display:flex;align-items:center;gap:14px}
    .avatar{
      width:54px;height:54px;border-radius:50%;background:${accent};color:#fff;
      display:flex;align-items:center;justify-content:center;font-weight:800;font-size:18px;
    }
    .author-meta strong{display:block;font-size:16px}
    .author-meta span{display:block;color:#6b7280;font-size:14px;margin-top:4px}
    .slider-controls{
      display:flex;align-items:center;justify-content:space-between;gap:16px;padding:0 8px 8px;
      margin-top:18px;
    }
    .arrow-btn{
      width:44px;height:44px;border-radius:50%;border:1px solid #e5e7eb;background:#fff;cursor:pointer;
      font-size:18px;transition:.25s ease;
    }
    .arrow-btn:hover{transform:translateY(-2px);box-shadow:0 10px 20px rgba(0,0,0,.08);border-color:${accent}}
    .dots{display:flex;justify-content:center;gap:8px;flex:1}
    .dot-btn{
      width:8px;height:8px;border-radius:999px;border:none;background:#d1d5db;cursor:pointer;transition:.3s ease;
    }
    .dot-btn.active{width:26px;background:${accent}}

    .footer{
      background:#111827;color:#fff;padding:34px 0 26px;
    }
    .footer-top{
      display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center;padding-bottom:20px;border-bottom:1px solid rgba(255,255,255,.12)
    }
    .footer-brand{display:flex;align-items:center;gap:14px}
    .footer-info{display:flex;flex-wrap:wrap;gap:18px;align-items:center;color:rgba(255,255,255,.78);font-size:14px;margin-top:14px}
    .footer-links{display:flex;gap:16px;flex-wrap:wrap}
    .footer-links a{color:rgba(255,255,255,.85)}
    .socials{display:flex;gap:10px}
    .socials a{
      width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;
      border:1px solid rgba(255,255,255,.16);color:#fff;transition:.25s ease;
    }
    .socials a:hover{transform:translateY(-2px);background:${accent};border-color:${accent}}
    .footer-bottom{
      padding-top:18px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;
      color:rgba(255,255,255,.68);font-size:14px
    }

    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease, transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}
    .reveal-delay-2{transition-delay:.2s}
    .reveal-delay-3{transition-delay:.3s}
    .zoom-reveal{overflow:hidden}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.1);will-change:transform}
    [data-depth]{will-change:transform}
    .float-ambient{animation:floatY 6s ease-in-out infinite}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
    .stagger-parent>*{opacity:0;transform:translateY(24px)}
    .glass-card{
      background:rgba(255,255,255,0.05);
      backdrop-filter:blur(16px);
      border:1px solid rgba(255,255,255,0.08);
      border-radius:16px;
    }

    @media (max-width: 991px){
      .hero-grid,.trust-grid,.split-section,.feature-shell{grid-template-columns:1fr}
      .logo-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
      .hero-visual{min-height:auto}
      .hero-cinematic-bg{inset:18px}
      .float-card.small{right:10px;top:20px}
      .float-card.bottom{left:10px;bottom:18px}
      .human-png{width:140px}
      .nav-inner{grid-template-columns:1fr auto auto}
    }
    @media (max-width: 767px){
      .container{width:min(100% - 24px, 1180px)}
      .section{padding:56px 0}
      .nav-inner{gap:10px;min-height:72px}
      .brand-sub{display:none}
      .animated-cta{padding:11px 16px;font-size:13px}
      .logo-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
      .hero h1{font-size:48px}
      .testimonial-quote{font-size:18px}
      .testimonial-slide{padding:24px}
      .footer-top{grid-template-columns:1fr}
      .footer-bottom{flex-direction:column}
      .human-png{display:none}
    }
  `;

  const getInitials = (name) =>
    name
      .split(' ')
      .map((part) => part[0])
      .join('')
      .slice(0, 2)
      .toUpperCase();

  const IconShield = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l7 3v6c0 4.5-2.9 7.8-7 9-4.1-1.2-7-4.5-7-9V6l7-3z" stroke={accent} strokeWidth="1.8" />
      <path d="M9.5 12.2l1.7 1.7 3.6-4" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const IconDevices = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <rect x="3" y="5" width="12" height="10" rx="2" stroke={accent} strokeWidth="1.8" />
      <rect x="16" y="8" width="5" height="9" rx="1.5" stroke={accent} strokeWidth="1.8" />
      <path d="M8 19h4" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  const IconPatch = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 2v5M12 17v5M2 12h5M17 12h5M5 5l3 3M16 16l3 3M19 5l-3 3M8 16l-3 3" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
      <circle cx="12" cy="12" r="4" stroke={accent} strokeWidth="1.8" />
    </svg>
  );

  const IconCompliance = () => (
    <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M7 4h10v16H7z" stroke={accent} strokeWidth="1.8" />
      <path d="M9 9h6M9 13h6M9 17h4" stroke={accent} strokeWidth="1.8" strokeLinecap="round" />
    </svg>
  );

  return (
    <div className="lp-root" ref={pageRef}>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand-left">
            <div className="brand-mark">ME</div>
            <div>
              <div className="brand-name">Manage Engine Endpoint Central</div>
              <div className="brand-sub">Unified Endpoint Management &amp; Security</div>
            </div>
          </div>

          <div className="nav-right">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>

          <a
            href={ctas[0].href}
            className="animated-cta btn-magnetic"
            target="_blank"
            rel="noreferrer"
          >
            {ctas[0].text}
          </a>
        </div>
      </nav>

      <section className="hero clip-reveal">
        <div className="container hero-grid">
          <div className="hero-copy stagger-parent" data-depth="0.15">
            <div className="eyebrow reveal">For IT teams</div>
            <h1 className="split-text reveal">
              Unified Endpoint Management &amp; Security with Manage Engine Endpoint Central
            </h1>
            <p className="sub reveal reveal-delay-1">
              Manage, secure, and automate your entire endpoint ecosystem from a single console.
            </p>
            <p className="support reveal reveal-delay-2">
              Centralized Endpoint Management for Modern IT Teams Automate endpoint management while improving security and operational efficiency with Manage Engine Endpoint Central. It’s a unified endpoint management and security solution that helps IT teams manage desktops, laptops, servers, and mobile devices from a single console.
            </p>

            <div className="chips reveal reveal-delay-3">
              <div className="chip"><IconDevices /><span>Unified Endpoint Management &amp; Security</span></div>
              <div className="chip"><IconPatch /><span>Patch &amp; Update Management</span></div>
              <div className="chip"><IconShield /><span>Browser Security</span></div>
              <div className="chip"><IconCompliance /><span>Ensure Compliance</span></div>
            </div>

            <div className="hero-actions reveal reveal-delay-3">
              <a
                href={ctas[1].href}
                className="animated-cta"
                target="_blank"
                rel="noreferrer"
              >
                {ctas[1].text}
              </a>
            </div>
          </div>

          <div className="hero-visual zoom-reveal">
            <div className="hero-cinematic-bg hero-cinematic-bg depth-background" data-depth="0.4" />
            <div className="hero-orb float-drift" />
            <div className="hero-orb2 float-drift" />
            <div className="float-card small float-ambient" data-depth="0.15">
              <div className="float-title">Endpoint view</div>
              <div className="float-value">Single console</div>
              <div className="float-line" />
            </div>
            <div className="float-card bottom float-ambient" data-depth="0.15">
              <div className="float-title">Security posture</div>
              <div className="float-value">Continuous response</div>
              <div className="float-line" />
            </div>
            <div className="visual-card scene-expand">
              <div className="browser-frame">
                <div className="browser-top">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <img
                  src="/output/generated-assets/ds_1778057843102_85d19a60/25-3d4946c989.png"
                  alt="Manage Engine Endpoint Central"
                />
              </div>
            </div>
            <img
              className="human-png float-ambient"
              src="/output/generated-assets/ds_1778057843102_85d19a60/02-ca8c42df32.png"
              alt="Human visual"
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container trust-grid">
          <div className="trust-copy reveal">
            <div className="proof-pill">Proof-led trust section</div>
            <h2>
              Trust signals that stand out <span className="gradient-text">at a glance</span>
            </h2>
            <p>
              Proof strategy: the visitor trusts logos most. This logo grid is the dominant trust signal on the page.
            </p>
          </div>
          <div className="logo-grid stagger-parent">
            {[
              '/output/generated-assets/ds_1778057843102_85d19a60/04-f15f2047e4.png',
              '/output/generated-assets/ds_1778057843102_85d19a60/03-d05036461a.png',
              '/output/generated-assets/ds_1778057843102_85d19a60/10-47db07b8db.png',
              '/output/generated-assets/ds_1778057843102_85d19a60/14-06df7e2a1a.png',
              '/output/generated-assets/ds_1778057843102_85d19a60/12-7e52100c55.png',
              '/output/generated-assets/ds_1778057843102_85d19a60/11-f871c2d410.png',
              '/output/generated-assets/ds_1778057843102_85d19a60/30-1a867befaa.png',
            ].map((logo, i) => (
              <div className="logo-item hover-lift" key={i}>
                <img src={logo} alt={`Trust logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container split-section">
          <div className="media-panel zoom-reveal">
            <img
              src="/output/generated-assets/ds_1778057843102_85d19a60/02-ca8c42df32.png"
              alt="All-In-One Endpoint Security & Management Platform"
            />
          </div>

          <div>
            <div className="section-tag reveal">All-In-One Endpoint Security &amp; Management Platform</div>
            <div className="section-head reveal reveal-delay-1">
              <h2>
                All-In-One Endpoint Security &amp; <span className="gradient-text">Management Platform</span>
              </h2>
            </div>
            <div className="desc-rail reveal reveal-delay-2">
              Bring devices, apps, data, and people together in one place with Endpoint Central to securely manage your digital workplace and global workforce.
            </div>

            <div className="feature-shell reveal reveal-delay-3">
              <div className="tabs">
                {sectionOneFeatures.map((item, idx) => (
                  <button
                    key={idx}
                    className={`tab-btn ${activeTab1 === idx ? 'active' : ''}`}
                    onClick={() => setActiveTab1(idx)}
                    type="button"
                  >
                    {item.title}
                    <span>{item.description}</span>
                  </button>
                ))}
              </div>

              <div className="preview-card hover-lift">
                <div className="preview-icon">
                  <IconShield />
                </div>
                <h3>{sectionOneFeatures[activeTab1].title}</h3>
                <p>{sectionOneFeatures[activeTab1].description}</p>
                <div className="mini-metrics">
                  <div className="metric">
                    <strong>Devices</strong>
                    <span>Bring devices, apps, data, and people together in one place.</span>
                  </div>
                  <div className="metric">
                    <strong>Security</strong>
                    <span>Securely manage your digital workplace and global workforce.</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <a
                href={ctas[2].href}
                className="animated-cta"
                target="_blank"
                rel="noreferrer"
              >
                {ctas[2].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container split-section">
          <div>
            <div className="section-tag reveal">Standard Features</div>
            <div className="section-head reveal reveal-delay-1">
              <h2>
                Monitor Continuously. <span className="gradient-text">Respond Instantly</span>
              </h2>
            </div>

            <div className="feature-shell reveal reveal-delay-2">
              <div className="tabs">
                {sectionTwoFeatures.map((item, idx) => (
                  <button
                    key={idx}
                    className={`tab-btn ${activeTab2 === idx ? 'active' : ''}`}
                    onClick={() => setActiveTab2(idx)}
                    type="button"
                  >
                    {item.title}
                    <span>{item.description}</span>
                  </button>
                ))}
              </div>

              <div className="preview-card hover-lift">
                <div className="preview-icon">
                  <IconCompliance />
                </div>
                <h3>{sectionTwoFeatures[activeTab2].title}</h3>
                <p>{sectionTwoFeatures[activeTab2].description}</p>
                <div className="mini-metrics">
                  <div className="metric">
                    <strong>Control</strong>
                    <span>Built for IT teams that need continuous monitoring and fast response.</span>
                  </div>
                  <div className="metric">
                    <strong>Operations</strong>
                    <span>Manage hardware, software, digital assets, access, and compliance.</span>
                  </div>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <a
                href={ctas[3].href}
                className="animated-cta"
                target="_blank"
                rel="noreferrer"
              >
                {ctas[3].text}
              </a>
            </div>
          </div>

          <div className="media-panel light zoom-reveal">
            <img
              src="/output/generated-assets/ds_1778057843102_85d19a60/01-530960ba02.png"
              alt="Standard Features"
            />
          </div>
        </div>
      </section>

      <section className="section section-light">
        <div className="container">
          <div className="section-head reveal" style={{ textAlign: 'center', maxWidth: '760px', margin: '0 auto 28px' }}>
            <h2>
              <span className="gradient-text">Pricing</span>
            </h2>
            <p>Pricing details are not provided in the content, so plan and amount information is skipped.</p>
          </div>

          <div className="pricing-wrap reveal reveal-delay-1">
            <div className="pricing-card hover-lift">
              <div className="pricing-badge">Pricing details unavailable</div>
              <h3>Manage Engine Endpoint Central</h3>
              <p>Unified Endpoint Management &amp; Security</p>
              <div className="pricing-empty">
                Pricing content is not available in the provided content.
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head reveal" style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto 28px' }}>
            <h2>
              What IT teams say about <span className="gradient-text">Endpoint Central</span>
            </h2>
          </div>

          <div className="testimonial-stage reveal reveal-delay-1">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((item, idx) => (
                <div className="testimonial-slide" key={idx}>
                  <div className="quote-mark">❝</div>
                  <div className="stars">★★★★★</div>
                  <p className="testimonial-quote">{item.quote}</p>
                  <div className="author-row">
                    <div className="avatar">{getInitials(item.author)}</div>
                    <div className="author-meta">
                      <strong>{item.author}</strong>
                      <span>{item.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-controls">
            <button
              className="arrow-btn"
              type="button"
              onClick={() => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous testimonial"
            >
              ‹
            </button>

            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot-btn ${i === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(i)}
                  type="button"
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              className="arrow-btn"
              type="button"
              onClick={() => setActiveSlide((prev) => (prev + 1) % testimonials.length)}
              aria-label="Next testimonial"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="footer-brand">
                <img
                  src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
                  height="28px"
                  alt="Techjockey"
                />
              </div>
              <div className="footer-info">
                <a href="mailto:support@techjockey.com">support@techjockey.com</a>
                <div className="footer-links">
                  <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
                  <a href="/terms" target="_blank" rel="noreferrer">Terms</a>
                </div>
              </div>
            </div>

            <div className="socials">
              <a href="https://www.facebook.com/Techjockey/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-.9-.1-2-.1-2.4 0-4 1.4-4 4.2V11H8v3h3V22h2.5z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm4.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
                </svg>
              </a>
              <a href="https://twitter.com/Techjockey" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.3-8.4L1 2h6.3l4.3 5.7L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/techjockeyinfotech/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3a1.97 1.97 0 1 0 0 3.94A1.97 1.97 0 0 0 5.25 3zM20.44 13.02c0-3.03-1.62-4.44-3.79-4.44-1.74 0-2.52.96-2.95 1.64V8.5h-3.38V20h3.38v-6.39c0-1.69.32-3.33 2.42-3.33 2.07 0 2.1 1.94 2.1 3.44V20h3.38l-.01-6.98z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2024 Techjockey Infotech Pvt. Ltd.</div>
            <div>Manage Engine Endpoint Central</div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;