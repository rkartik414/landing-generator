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
      padding:36px 0 68px;
      background:
        radial-gradient(circle at 8% 8%, rgba(242,100,48,.10) 0%, rgba(242,100,48,0) 28%),
        radial-gradient(circle at 88% 16%, rgba(242,100,48,.08) 0%, rgba(242,100,48,0) 24%),
        linear-gradient(180deg, #ffffff 0%, #fff9f5 100%);
      overflow:hidden;
      position:relative;
    }
    .hero-shell{
      position:relative;
      min-height:640px;
      display:flex;
      align-items:center;
    }
    .hero-grid{
      display:flex;
      gap:34px;
      align-items:center;
      justify-content:space-between;
      width:100%;
      min-height:620px;
      position:relative;
      z-index:2;
    }
    .hero-copy{
      position:relative;
      z-index:5;
      flex:1 1 58%;
      max-width:700px;
      padding-right:18px;
    }
    .eyebrow{
      display:inline-flex;align-items:center;gap:8px;
      padding:8px 14px;border-radius:999px;background:rgba(242,100,48,.10);
      color:${accent};border:1px solid rgba(242,100,48,.18);font-size:13px;font-weight:700;
      margin-bottom:18px;
      position:relative;
      z-index:6;
    }
    .hero h1{
      font-size:62px;line-height:.98;letter-spacing:-.04em;
      margin:0 0 18px;font-weight:800;color:#111827;
      max-width:11ch;
      position:relative;
      z-index:7;
    }
    .hero-overlap-title{
      width:auto;
      margin-right:0;
    }
    .hero p.sub{
      font-size:18px;line-height:1.65;color:#4b5563;margin:0 0 10px;max-width:560px;
      position:relative;z-index:6;
    }
    .hero p.support{
      font-size:16px;line-height:1.7;color:#4b5563;margin:0 0 24px;max-width:560px;
      position:relative;z-index:6;
    }
    .chips{display:flex;flex-wrap:wrap;gap:10px;margin:22px 0 28px;position:relative;z-index:6}
    .chip{
      display:inline-flex;align-items:center;gap:8px;
      padding:10px 14px;border-radius:999px;background:#fff;border:1px solid #e5e7eb;
      color:#374151;font-size:13px;font-weight:600;
      box-shadow:0 8px 24px rgba(0,0,0,.04);
    }
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap;position:relative;z-index:6}
    .hero-visual{
      position:relative;
      min-height:520px;
      display:flex;
      align-items:flex-end;
      justify-content:center;
      flex:0 1 470px;
      z-index:2;
    }
    .hero-visual-panel{
      position:relative;
      width:100%;
      max-width:440px;
      min-height:520px;
      border-radius:30px;
      background:linear-gradient(180deg, #fff4ee 0%, #ffffff 100%);
      border:1px solid #f2dfd6;
      box-shadow:0 24px 60px rgba(17,24,39,.08);
      overflow:hidden;
      display:flex;
      align-items:flex-end;
      justify-content:center;
    }
    .hero-cinematic-bg{
      position:absolute;inset:0;
      border-radius:30px;
      background:
        radial-gradient(circle at 50% 18%, rgba(242,100,48,.20) 0%, rgba(242,100,48,.04) 26%, rgba(242,100,48,0) 50%),
        linear-gradient(180deg, rgba(242,100,48,.08), rgba(255,255,255,.98));
      border:none;
      box-shadow:none;
    }
    .hero-orb,.hero-orb2{
      position:absolute;border-radius:50%;filter:blur(8px);pointer-events:none;
    }
    .hero-orb{
      width:220px;height:220px;right:-20px;top:-10px;
      background:radial-gradient(circle, rgba(242,100,48,.18) 0%, rgba(242,100,48,0) 70%);
    }
    .hero-orb2{
      width:180px;height:180px;left:-20px;bottom:12px;
      background:radial-gradient(circle, rgba(242,100,48,.12) 0%, rgba(242,100,48,0) 72%);
    }
    .visual-card{
      position:absolute;
      left:28px;
      right:28px;
      bottom:22px;
      z-index:2;
      border-radius:24px;background:#fff;border:1px solid #e5e7eb;
      box-shadow:0 20px 40px rgba(17,24,39,.08);overflow:hidden;
    }
    .browser-frame{
      display:flex;flex-direction:column;overflow:hidden;background:#ffffff;border-radius:24px;
    }
    .browser-top{
      display:flex;align-items:center;gap:8px;padding:14px 16px;border-bottom:1px solid #eef2f7;background:#f8fafc;
    }
    .dot{width:10px;height:10px;border-radius:50%;background:#d1d5db}
    .browser-frame img{
      flex:1;min-height:0;height:170px;width:100%;object-fit:contain;object-position:center;
      display:block;background:#ffffff;padding:14px;
    }
    .float-card{
      position:absolute;z-index:3;background:#fff;border:1px solid #e5e7eb;border-radius:18px;
      padding:14px 16px;box-shadow:0 18px 40px rgba(17,24,39,.10);max-width:220px;
    }
    .float-card.small{right:-6px;top:76px}
    .float-card.bottom{left:-10px;bottom:110px}
    .float-title{font-size:12px;color:#6b7280;margin-bottom:6px}
    .float-value{font-size:18px;font-weight:800;color:#111827}
    .float-line{height:8px;border-radius:999px;background:linear-gradient(90deg, ${accent}, rgba(242,100,48,.15));margin-top:10px}
    .human-png{
      position:relative;
      right:auto;
      bottom:auto;
      width:100%;
      max-width:350px;
      z-index:4;
      pointer-events:none;
      object-fit:contain;
      object-position:bottom center;
      filter:drop-shadow(0 18px 30px rgba(0,0,0,.12));
      margin:42px auto 0;
      display:block;
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
      background:#ffffff;box-shadow:0 24px 60px rgba(17,24,39,.10);
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
      display:flex;gap:20px;align-items:stretch;
    }
    .tabs{
      display:flex;flex-direction:column;gap:10px;min-width:260px;
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
      box-shadow:0 16px 40px rgba(17,24,39,.06);height:100%;flex:1;
    }
    .preview-icon{
      width:54px;height:54px;border-radius:14px;background:rgba(242,100,48,.12);
      color:${accent};display:flex;align-items:center;justify-content:center;margin-bottom:16px;
    }
    .preview-card h3{margin:0 0 10px;font-size:24px;line-height:1.2}
    .preview-card p{margin:0;color:#4b5563;line-height:1.8;font-size:16px}
    .mini-metrics{display:flex;gap:12px;flex-wrap:wrap;margin-top:18px}
    .metric{
      background:#f8fafc;border:1px solid #e5e7eb;border-radius:16px;padding:14px;flex:1 1 220px;
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
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.08)}
    .stagger-parent > *{opacity:0;transform:translateY(20px)}
    .split-text .char{display:inline-block}

    @media (max-width: 1100px){
      .hero h1{font-size:54px;max-width:12ch}
      .hero-grid{gap:24px}
      .hero-copy{flex-basis:56%}
      .hero-visual{flex-basis:420px}
      .human-png{max-width:310px}
      .trust-grid,.split-section{grid-template-columns:1fr}
      .feature-shell{flex-direction:column}
      .tabs{min-width:100%}
    }

    @media (max-width: 768px){
      .nav-inner{grid-template-columns:1fr auto}
      .nav-right{display:none}
      .section{padding:56px 0}
      .hero{padding:28px 0 52px}
      .hero-shell,.hero-grid{min-height:auto}
      .hero-grid{flex-direction:column;align-items:flex-start}
      .hero-copy{padding-right:0;max-width:100%}
      .hero h1{font-size:40px;max-width:100%}
      .hero-visual{width:100%;min-height:auto;flex:1 1 auto}
      .hero-visual-panel{max-width:100%;min-height:470px}
      .visual-card{left:18px;right:18px;bottom:18px}
      .browser-frame img{height:150px}
      .float-card.small{right:10px;top:18px}
      .float-card.bottom{left:10px;bottom:96px}
      .human-png{max-width:280px;margin-top:50px}
      .logo-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
      .footer-top{grid-template-columns:1fr}
      .footer-bottom{flex-direction:column}
      .testimonial-slide{padding:26px}
      .testimonial-quote{font-size:18px}
    }
  `;

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  return (
    <div className="lp-root" ref={pageRef}>
      <style>{css}</style>

      <nav className="nav">
        <div className="container nav-inner">
          <div className="brand-left">
            <div className="brand-mark">TJ</div>
            <div>
              <div className="brand-name">Techjockey</div>
              <div className="brand-sub">Software Discovery & Buying Simplified</div>
            </div>
          </div>

          <div className="nav-right">
            <a href="#features">Features</a>
            <a href="#benefits">Benefits</a>
            <a href="#testimonials">Testimonials</a>
          </div>

          <a className="animated-cta" href={ctas[0].href} target="_blank" rel="noreferrer">
            {ctas[0].text}
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="container hero-shell">
          <div className="hero-grid">
            <div className="hero-copy reveal">
              <div className="eyebrow">ManageEngine Endpoint Central Endpoint Security</div>
              <h1 className="split-text hero-overlap-title">
                Unified endpoint security for modern IT teams
              </h1>
              <p className="sub">
                Protect, manage, and secure endpoints through one centralized platform built to simplify patching, asset visibility, browser control, and vulnerability remediation.
              </p>
              <p className="support">
                Techjockey helps you evaluate the right deployment approach, understand capabilities, and connect with experts for your purchase journey.
              </p>

              <div className="chips">
                <div className="chip">Automated patching</div>
                <div className="chip">Browser & data security</div>
                <div className="chip">Remote troubleshooting</div>
              </div>

              <div className="hero-actions">
                <a className="animated-cta" href={ctas[0].href} target="_blank" rel="noreferrer">
                  {ctas[0].text}
                </a>
                <a className="ghost-btn" href="#features">
                  Explore Features
                </a>
              </div>
            </div>

            <div className="hero-visual reveal">
              <div className="hero-visual-panel">
                <div className="hero-cinematic-bg" />
                <div className="hero-orb" data-depth="0.15" />
                <div className="hero-orb2" data-depth="0.12" />

                <div className="float-card small hover-lift">
                  <div className="float-title">Threat visibility</div>
                  <div className="float-value">Faster remediation</div>
                  <div className="float-line" />
                </div>

                <div className="float-card bottom hover-lift">
                  <div className="float-title">Endpoint operations</div>
                  <div className="float-value">One console control</div>
                  <div className="float-line" />
                </div>

                <img
                  className="human-png"
                  src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=900&q=80"
                  alt="IT professional using endpoint security software"
                />

                <div className="visual-card zoom-reveal">
                  <div className="browser-frame">
                    <div className="browser-top">
                      <div className="dot" />
                      <div className="dot" />
                      <div className="dot" />
                    </div>
                    <img
                      src="https://www.manageengine.com/products/desktop-central/images/home/endpoint-central-dashboard.png"
                      alt="ManageEngine Endpoint Central dashboard"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light reveal">
        <div className="container trust-grid">
          <div className="trust-copy">
            <div className="proof-pill">Why teams choose Techjockey</div>
            <h2>Make software evaluation easier with guided product expertise</h2>
            <p>
              From identifying the right endpoint security fit to helping you connect with the product team, Techjockey simplifies the buying process for businesses looking to modernize IT operations.
            </p>
          </div>
          <div className="logo-grid stagger-parent">
            {[
              'https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg',
              'https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg',
              'https://upload.wikimedia.org/wikipedia/commons/8/87/Sql_data_base_with_logo.png',
              'https://upload.wikimedia.org/wikipedia/commons/5/5f/Original_Dell_Logo.svg',
            ].map((logo, i) => (
              <div className="logo-item" key={i}>
                <img src={logo} alt={`Partner logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-soft" id="features">
        <div className="container split-section">
          <div className="media-panel light zoom-reveal reveal">
            <img
              src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1200&q=80"
              alt="Endpoint monitoring and cyber security operations"
            />
          </div>

          <div className="reveal">
            <div className="section-tag">Core capabilities</div>
            <div className="section-head">
              <h2>Protect every endpoint with stronger operational control</h2>
            </div>
            <div className="desc-rail">
              Endpoint Central helps IT teams secure systems, standardize updates, and reduce manual workload while maintaining control across distributed environments.
            </div>

            <div className="feature-shell">
              <div className="tabs">
                {sectionOneFeatures.map((item, index) => (
                  <button
                    key={item.title}
                    className={`tab-btn ${activeTab1 === index ? 'active' : ''}`}
                    onClick={() => setActiveTab1(index)}
                  >
                    {item.title}
                    <span>{item.description}</span>
                  </button>
                ))}
              </div>

              <div className="preview-card hover-lift">
                <div className="preview-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <path
                      d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z"
                      stroke={accent}
                      strokeWidth="1.8"
                    />
                    <path d="M9.5 12.5l1.8 1.8 3.8-4.3" stroke={accent} strokeWidth="1.8" />
                  </svg>
                </div>
                <h3>{sectionOneFeatures[activeTab1].title}</h3>
                <p>{sectionOneFeatures[activeTab1].description}</p>

                <div className="mini-metrics">
                  <div className="metric">
                    <strong>Centralized execution</strong>
                    <span>Handle endpoint tasks with consistent policy enforcement.</span>
                  </div>
                  <div className="metric">
                    <strong>Lower manual effort</strong>
                    <span>Reduce repetitive work through automated endpoint actions.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light" id="benefits">
        <div className="container split-section">
          <div className="reveal">
            <div className="section-tag">Operational benefits</div>
            <div className="section-head">
              <h2>Improve security posture without slowing down support teams</h2>
            </div>
            <div className="desc-rail">
              ManageEngine Endpoint Central combines endpoint protection with IT operations capabilities so your teams can secure devices and resolve issues from a single interface.
            </div>

            <div className="feature-shell">
              <div className="tabs">
                {sectionTwoFeatures.map((item, index) => (
                  <button
                    key={item.title}
                    className={`tab-btn ${activeTab2 === index ? 'active' : ''}`}
                    onClick={() => setActiveTab2(index)}
                  >
                    {item.title}
                    <span>{item.description}</span>
                  </button>
                ))}
              </div>

              <div className="preview-card hover-lift">
                <div className="preview-icon">
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none">
                    <rect x="4" y="4" width="16" height="16" rx="3" stroke={accent} strokeWidth="1.8" />
                    <path d="M8 12h8M12 8v8" stroke={accent} strokeWidth="1.8" />
                  </svg>
                </div>
                <h3>{sectionTwoFeatures[activeTab2].title}</h3>
                <p>{sectionTwoFeatures[activeTab2].description}</p>

                <div className="mini-metrics">
                  <div className="metric">
                    <strong>Faster issue resolution</strong>
                    <span>Support remote systems with less downtime and more control.</span>
                  </div>
                  <div className="metric">
                    <strong>Better audit readiness</strong>
                    <span>Stay aligned with compliance needs using structured reporting.</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="media-panel zoom-reveal reveal">
            <img
              src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1200&q=80"
              alt="IT team reviewing endpoint security metrics"
            />
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="section-head reveal" style={{ maxWidth: 760, marginBottom: 26 }}>
            <h2>Simple buying journey through Techjockey</h2>
            <p>
              Get product guidance, understand key use cases, and connect with the right experts to evaluate ManageEngine Endpoint Central Endpoint Security for your organization.
            </p>
          </div>

          <div className="pricing-wrap reveal">
            <div className="pricing-card">
              <div className="pricing-badge">Consultative assistance</div>
              <h3>Talk to our software experts</h3>
              <p>
                Whether you are comparing endpoint security tools or validating implementation fit, Techjockey can help you move faster with the right insights.
              </p>
              <div className="pricing-empty">
                Pricing and deployment scope can vary based on business requirements, endpoint count, and security needs.
              </div>
              <div style={{ marginTop: 22 }}>
                <a className="animated-cta" href={ctas[1].href} target="_blank" rel="noreferrer">
                  {ctas[1].text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-light" id="testimonials">
        <div className="container">
          <div className="section-head reveal" style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto 28px' }}>
            <h2>What professionals say about their experience</h2>
            <p>
              Real perspectives from IT leaders and administrators using Endpoint Central and working with Techjockey during their software purchase journey.
            </p>
          </div>

          <div className="testimonial-stage reveal">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((item, idx) => (
                <div className="testimonial-slide" key={idx}>
                  <div className="quote-mark">“</div>
                  <div className="stars">★★★★★</div>
                  <p className="testimonial-quote">{item.quote}</p>
                  <div className="author-row">
                    <div className="avatar">{item.author.charAt(0)}</div>
                    <div className="author-meta">
                      <strong>{item.author}</strong>
                      <span>{item.designation}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-controls reveal">
            <button className="arrow-btn" onClick={prevSlide} aria-label="Previous testimonial">
              ←
            </button>
            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot-btn ${activeSlide === i ? 'active' : ''}`}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
            <button className="arrow-btn" onClick={nextSlide} aria-label="Next testimonial">
              →
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <div className="footer-brand">
                <div className="brand-mark">TJ</div>
                <div>
                  <div className="brand-name">Techjockey</div>
                  <div className="brand-sub" style={{ color: 'rgba(255,255,255,.68)' }}>
                    Software Discovery & Buying Simplified
                  </div>
                </div>
              </div>
              <div className="footer-info">
                <span>ManageEngine Endpoint Central Endpoint Security</span>
                <span>Business Software Consultation</span>
                <span>Trusted buying support</span>
              </div>
            </div>

            <div className="socials">
              <a href="https://www.facebook.com/Techjockey/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M13.5 8H16V5h-2.5C10.7 5 9 6.7 9 9.5V12H7v3h2v6h3v-6h3l.5-3H12V9.8c0-1.1.3-1.8 1.5-1.8z" />
                </svg>
              </a>
              <a href="https://twitter.com/Techjockey" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.7-5.8-.1-1 1-1.4 2.4-1.1 3.8-3.3-.2-6.2-1.7-8.1-4.2-1.1 1.9-.5 4.3 1.3 5.5-.6 0-1.2-.2-1.7-.5 0 2.1 1.5 4 3.6 4.4-.6.2-1.2.2-1.8.1.5 1.8 2.2 3.1 4.1 3.1A8.4 8.4 0 0 1 2 19.5 11.8 11.8 0 0 0 8.3 21c7.6 0 11.9-6.4 11.6-12.1.8-.6 1.5-1.3 2.1-2.1z" />
                </svg>
              </a>
              <a href="https://www.linkedin.com/company/techjockey/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 12.47c0-2.96-1.58-4.34-3.7-4.34-1.7 0-2.46.94-2.88 1.6V8.5h-3.38c.04.81 0 11.5 0 11.5h3.38v-6.42c0-.34.02-.68.13-.92.27-.68.87-1.39 1.88-1.39 1.33 0 1.86 1.05 1.86 2.58V20h3.38v-7.53z" />
                </svg>
              </a>
              <a href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm4.75-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z" />
                </svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2026 Techjockey. All rights reserved.</div>
            <div className="footer-links">
              <a href="https://www.techjockey.com/privacy-policy" target="_blank" rel="noreferrer">
                Privacy Policy
              </a>
              <a href="https://www.techjockey.com/terms-of-use" target="_blank" rel="noreferrer">
                Terms of Use
              </a>
              <a href={ctas[3].href} target="_blank" rel="noreferrer">
                {ctas[3].text}
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;