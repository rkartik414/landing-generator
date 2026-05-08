import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#e4292b';
  const primary = '#e4292b';
  const bodyBg = '#ffffff';

  const heroRef = useRef(null);
  const [activeFeatureTab, setActiveFeatureTab] = useState(0);
  const [activeStandardTab, setActiveStandardTab] = useState(0);
  const [activeAdditionalTab, setActiveAdditionalTab] = useState(0);
  const [activeInsightTab, setActiveInsightTab] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);

  const ctas = [
    {
      text: 'Get Started',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Get Started',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Get Started',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Get Started',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
    {
      text: 'Get Started',
      href: 'https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software',
    },
  ];

  const trustLogos = [
    '/output/generated-assets/ds_1778142936650_2bbec4dd/10-4e22c31148.png',
    '/output/generated-assets/ds_1778142936650_2bbec4dd/22-b3d4199ca5.png',
    '/output/generated-assets/ds_1778142936650_2bbec4dd/23-61e528786b.png',
  ];

  const sections = [
    {
      name: 'Features',
      headline: 'Why Choose Zoho Workplace?',
      description:
        'Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.',
      image: '/output/generated-assets/ds_1778142936650_2bbec4dd/17-8ee9780f0b.jpg',
      features: [
        {
          title: 'All-in-One Unified Workspace',
          description:
            'Access email, chat, documents, meetings, and storage in a single integrated platform. Reduce app switching and boost productivity.',
        },
        {
          title: 'Seamless Collaboration in Real Time',
          description:
            'Work together on documents, spreadsheets, and presentations with live editing, comments, and built-in communication tools.',
        },
        {
          title: 'Work from Anywhere, Anytime',
          description:
            'Stay productive on the go. Reply to emails, access presentations, or host a video conference from anywhere effortlessly.',
        },
        {
          title: 'AI-Powered Productivity (Zia)',
          description:
            'Leverage built-in AI for writing assistance in terms of grammar, readability and writing style while you work on Writer or Sheet.',
        },
      ],
    },
    {
      name: 'Standard Features',
      headline: 'Unlock Your Business Growth with Zoho Workplace',
      description:
        'Zoho Workplace unifies email, collaboration, and productivity tools to streamline your business operations. Enable smarter teamwork and drive growth with a single platform.',
      image: '/output/generated-assets/ds_1778142936650_2bbec4dd/18-473c14de05.jpg',
      features: [
        {
          title: 'Ideal For Your Business Size',
          description:
            'Designed for any organization, Zoho Workplace enhances efficiency and teamwork at every scale.',
        },
        {
          title: 'Communicate Effectively',
          description:
            'Go beyond email and chat, and connect teams with a social intranet using channels, feeds, and groups.',
        },
        {
          title: 'Integrated Business Apps',
          description:
            'Connect with Zoho and third-party apps to unify workflows, eliminate silos, and streamline processes across your business.',
        },
        {
          title: 'Customizable Workspace',
          description:
            'Customize settings, layouts, workflows to fit your needs. Also, get a professional, ad-free email service & advanced controls.',
        },
      ],
    },
    {
      name: 'Additional Features',
      headline: 'Integrate with Popular Apps',
      description:
        'Connect your Zoho Workplace with other business apps to ensure higher productivity and growth - all within a unified workspace.',
      image: '/output/generated-assets/ds_1778142936650_2bbec4dd/24-c93738f621.png',
      features: [
        {
          title: 'Zoho Apps',
          description: 'Zoho Meeting, Zoho Connect, Zoho Mail, Zoho Cliq, Zoho Writer, etc.',
        },
        {
          title: 'Analytics',
          description: 'Zoho Analytics, Google Analytics',
        },
        {
          title: 'Accounting & Finance',
          description: 'Zoho Invoice & Zoho Books',
        },
        {
          title: 'Automation',
          description: 'Zoho Flow, Zapier, viaSocket',
        },
        {
          title: 'Business Suites',
          description: 'Zoho One, Zoho Workspace',
        },
      ],
    },
    {
      name: 'Insight',
      headline: 'Performance Beyond Limits with Zoho Workplace',
      description: '',
      image: '/output/generated-assets/ds_1778142936650_2bbec4dd/25-5d0d126da2.png',
      features: [
        {
          title: 'Secure',
          description:
            '82.9% of users reported a secure email experience, ensuring strong data protection, and safe and reliable communication.',
        },
        {
          title: 'Anywhere Access',
          description:
            '42.9% of them found it easier to work remotely with Zoho Workplace apps, enabling seamless access from any device, anywhere.',
        },
        {
          title: 'Intuitive',
          description:
            '28.6% found Zoho Workplace easy to use, reducing the learning curve. Teams can quickly adapt and work efficiently.',
        },
        {
          title: 'Collaborative',
          description:
            '14.3% of them saw improved collaboration, engagement and productivity, helping teams stay aligned and get more done faster.',
        },
      ],
    },
  ];

  const testimonials = [
    {
      quote:
        'Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.',
      name: 'Amit Kapoor',
      role: 'IT Manager',
      avatar: '/output/generated-assets/ds_1778142936650_2bbec4dd/13-a1af876bc5.png',
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      name: 'Saurav Singh',
      role: 'Head of Operations',
      avatar: '/output/generated-assets/ds_1778142936650_2bbec4dd/15-01fc6c95c0.jpg',
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      name: 'Shrimi Manchanda',
      role: 'Operations Manager',
      avatar: '/output/generated-assets/ds_1778142936650_2bbec4dd/13-a1af876bc5.png',
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      name: 'Shweta Thakur',
      role: 'Senior System Administrator',
      avatar: '/output/generated-assets/ds_1778142936650_2bbec4dd/15-01fc6c95c0.jpg',
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      name: 'Narinder Sahni',
      role: 'IT Head',
      avatar: '/output/generated-assets/ds_1778142936650_2bbec4dd/13-a1af876bc5.png',
    },
  ];

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--accent-glow', 'rgba(228,41,43,0.14)');
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    const loadScript = (src) =>
      new Promise((resolve, reject) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = resolve;
        s.onerror = reject;
        document.body.appendChild(s);
      });

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const gsap = window.gsap;
          const ScrollTrigger = window.ScrollTrigger;
          gsap.registerPlugin(ScrollTrigger);

          const glow = document.createElement('div');
          glow.className = 'cursor-glow';
          document.body.appendChild(glow);

          const moveGlow = (e) => {
            gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
          };
          window.addEventListener('mousemove', moveGlow);

          gsap.utils.toArray('.scene-expand').forEach((scene) => {
            gsap.to(scene, {
              width: '100%',
              borderRadius: '0px',
              ease: 'none',
              scrollTrigger: {
                trigger: scene,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1.2,
              },
            });
            const media = scene.querySelector('img, video');
            if (media) {
              gsap.to(media, {
                scale: 1,
                ease: 'none',
                scrollTrigger: {
                  trigger: scene,
                  start: 'top 80%',
                  end: 'top 20%',
                  scrub: 1.2,
                },
              });
            }
          });

          gsap.utils.toArray('.zoom-reveal').forEach((el) => {
            const img = el.querySelector('img, video');
            if (!img) return;
            gsap.to(img, {
              scale: 1,
              ease: 'power2.out',
              duration: 1.2,
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            });
          });

          gsap.utils.toArray('[data-depth]').forEach((el) => {
            const depth = parseFloat(el.dataset.depth) || 0.3;
            gsap.to(el, {
              y: () => -(window.innerHeight * depth * 0.6),
              ease: 'none',
              scrollTrigger: {
                trigger: el.closest('section') || el,
                start: 'top bottom',
                end: 'bottom top',
                scrub: true,
              },
            });
          });

          const heroBg = document.querySelector('.hero-cinematic-bg');
          if (heroBg) {
            gsap.to(heroBg, {
              scale: 1,
              ease: 'none',
              scrollTrigger: {
                trigger: heroBg.closest('section'),
                start: 'top top',
                end: 'bottom top',
                scrub: 2,
              },
            });
          }

          gsap.utils.toArray('.clip-reveal').forEach((el) => {
            gsap.to(el, {
              clipPath: 'inset(0% 0 0 0)',
              ease: 'power3.out',
              duration: 1.1,
              scrollTrigger: {
                trigger: el,
                start: 'top 80%',
                toggleActions: 'play none none reverse',
              },
            });
          });

          gsap.utils.toArray('.stagger-parent').forEach((parent) => {
            gsap.to(parent.children, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: parent,
                start: 'top 80%',
                toggleActions: 'play none none none',
              },
            });
          });

          gsap.utils.toArray('.split-text').forEach((el) => {
            const text = el.textContent;
            el.innerHTML = text
              .split('')
              .map((char) =>
                char === ' '
                  ? ' '
                  : `<span class="char" style="display:inline-block;will-change:transform,opacity">${char}</span>`
              )
              .join('');
            gsap.from(el.querySelectorAll('.char'), {
              y: 80,
              opacity: 0,
              rotateX: -40,
              stagger: 0.025,
              duration: 0.9,
              ease: 'power3.out',
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none none',
              },
            });
          });

          gsap.utils.toArray('.text-reveal-mask').forEach((mask) => {
            const inner = mask.querySelector('.text-reveal-inner');
            if (!inner) return;
            gsap.to(inner, {
              y: '0%',
              duration: 1,
              ease: 'power4.out',
              scrollTrigger: {
                trigger: mask,
                start: 'top 85%',
                toggleActions: 'play none none reverse',
              },
            });
          });

          gsap.utils.toArray('.pin-scene').forEach((scene) => {
            ScrollTrigger.create({
              trigger: scene,
              start: 'top top',
              end: '+=600',
              pin: true,
              pinSpacing: true,
            });
          });

          gsap.utils.toArray('[data-count]').forEach((el) => {
            const target = parseFloat(el.dataset.count);
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            gsap.from({ val: 0 }, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              snap: { val: 0.1 },
              scrollTrigger: { trigger: el, start: 'top 80%', once: true },
              onUpdate: function () {
                const val = this.targets()[0].val;
                el.textContent = `${prefix}${val.toFixed(target % 1 !== 0 ? 1 : 0)}${suffix}`;
              },
            });
          });
        });
      });
    };

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'),
    ]).then(initGSAP).catch(() => {});

    return () => {
      const glow = document.querySelector('.cursor-glow');
      if (glow) glow.remove();
    };
  }, [accent, primary]);

  const css = `
    :root{--accent:${accent};--primary:${primary};}
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;background:${bodyBg};color:#111827;font-family:Inter,sans-serif;scroll-behavior:smooth}
    body{overflow-x:hidden}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .page{background:${bodyBg}}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:88px 0;position:relative}
    .bg-white{background:#ffffff}
    .bg-soft{background:#f8fafc}
    .heading,h1,h2,h3,h4{font-family:'Plus Jakarta Sans',sans-serif;color:#111827;margin:0}
    .muted{color:#4b5563}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .topbar{position:sticky;top:0;z-index:50;background:rgba(17,24,39,.86);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:14px 0}
    .nav-left{display:flex;align-items:center;gap:12px;min-width:0}
    .nav-right{display:flex;align-items:center;gap:18px;margin-left:auto}
    .brand-text{font-weight:800;font-size:20px;color:${accent};font-family:'Plus Jakarta Sans',sans-serif}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 24px;border-radius:12px;background:${accent};color:#fff;font-weight:700;border:1px solid ${accent};transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(228,41,43,.25);background:${primary}}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:12px;border:1px solid rgba(255,255,255,.2);color:#fff;font-weight:700;transition:.25s ease}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 12px 24px rgba(0,0,0,.18);background:rgba(255,255,255,.08)}
    .hero{background:#0f172a;color:#fff;padding:92px 0 72px;overflow:hidden}
    .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:42px;align-items:center}
    .hero-copy{position:relative;z-index:2}
    .banner-title{font-size:clamp(48px,6vw,68px);line-height:1.02;letter-spacing:-.03em;word-break:normal;overflow-wrap:normal;hyphens:none;white-space:normal;max-width:900px}
    .hero p{color:rgba(255,255,255,.82);font-size:18px;line-height:1.7;margin:20px 0 0}
    .support-line{margin-top:16px;font-size:14px;color:rgba(255,255,255,.7)}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:28px}
    .chip{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(228,41,43,.34);background:rgba(228,41,43,.12);color:#fff;font-size:13px}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
    .hero-visual{position:relative;display:flex;align-items:center;justify-content:center;min-height:500px}
    .hero-video-shell{position:relative;width:100%;border-radius:24px;overflow:hidden;border:1px solid rgba(255,255,255,.12);box-shadow:0 24px 60px rgba(0,0,0,.35);background:#101828}
    .hero-video-shell video{width:100%;max-height:520px;object-fit:cover;display:block;border-radius:24px}
    .floating-card{position:absolute;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(12px);border-radius:18px;padding:14px 16px;color:#fff;box-shadow:0 16px 40px rgba(0,0,0,.2)}
    .fc-1{left:-10px;top:40px}
    .fc-2{right:-10px;bottom:40px}
    .fc-big{font-weight:800;font-size:22px;font-family:'Plus Jakarta Sans',sans-serif}
    .fc-small{font-size:13px;color:rgba(255,255,255,.72)}
    .orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(24px)}
    .orb.one{width:260px;height:260px;background:rgba(228,41,43,.16);top:-60px;left:-70px}
    .orb.two{width:320px;height:320px;background:rgba(228,41,43,.12);bottom:-80px;right:-80px}
    .trust-wrap{padding:28px 0}
    .trust-grid{display:grid;grid-template-columns:1.2fr 1fr;gap:24px;align-items:center}
    .trust-copy h3{font-size:16px;font-weight:700;margin-bottom:10px}
    .metric-strip{display:flex;gap:14px;flex-wrap:wrap}
    .metric-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:18px 20px;box-shadow:0 8px 24px rgba(15,23,42,.06);min-width:170px}
    .metric-card strong{display:block;font-size:28px;font-family:'Plus Jakarta Sans',sans-serif}
    .logo-grid{display:flex;justify-content:flex-end;gap:12px;flex-wrap:wrap}
    .logo-tile{height:72px;max-width:180px;background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:14px 18px;display:flex;align-items:center;justify-content:center;filter:grayscale(1);transition:.25s ease;box-shadow:0 6px 20px rgba(15,23,42,.05)}
    .logo-tile:hover{filter:grayscale(0);transform:translateY(-2px)}
    .logo-tile img{max-height:32px;width:auto;display:block}
    .section-head{display:flex;justify-content:space-between;gap:20px;align-items:end;margin-bottom:32px}
    .section-head h2{font-size:clamp(32px,4vw,44px);line-height:1.1}
    .section-head p{max-width:720px;font-size:17px;line-height:1.7;color:#4b5563;margin:12px 0 0}
    .tabs-shell{display:grid;grid-template-columns:340px 1fr;gap:28px;align-items:stretch}
    .tab-list{display:flex;flex-direction:column;gap:12px}
    .tab-btn{width:100%;text-align:left;padding:18px;border-radius:18px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 8px 24px rgba(15,23,42,.05);transition:.25s ease;cursor:pointer}
    .tab-btn:hover,.tab-btn.active{border-color:${accent};box-shadow:0 14px 32px rgba(228,41,43,.12);transform:translateY(-2px)}
    .tab-btn h4{font-size:18px;margin-bottom:8px}
    .tab-btn p{font-size:14px;color:#4b5563;line-height:1.6;margin:0}
    .preview-panel{background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:22px;box-shadow:0 16px 40px rgba(15,23,42,.08);position:relative;overflow:hidden}
    .split-preview{display:grid;grid-template-columns:1.06fr .94fr;gap:24px;align-items:center}
    .split-preview.reverse .media-col{order:2}
    .split-preview.reverse .content-col{order:1}
    .content-col h3{font-size:28px;line-height:1.15;margin-bottom:12px}
    .desc-block{border-left:3px solid rgba(228,41,43,.22);padding-left:16px;margin-bottom:20px}
    .desc-block p{font-size:16px;line-height:1.7;color:#4b5563;margin:0}
    .feature-inline{display:flex;gap:12px;align-items:flex-start;padding:14px 0;border-top:1px solid #eef2f7}
    .feature-inline:first-child{border-top:none}
    .icon-badge{width:40px;height:40px;border-radius:12px;background:rgba(228,41,43,.1);display:flex;align-items:center;justify-content:center;flex:0 0 40px}
    .feature-inline h5{font-size:17px;margin:0 0 6px}
    .feature-inline p{font-size:14px;line-height:1.65;color:#4b5563;margin:0}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:20px;border:1px solid #e5e7eb;background:#f8f8f8;box-shadow:0 18px 48px rgba(15,23,42,.12)}
    .browser-top{display:flex;align-items:center;gap:8px;padding:12px 14px;border-bottom:1px solid #e5e7eb;background:#fff}
    .dot{width:10px;height:10px;border-radius:50%;background:#d1d5db}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .browser-frame video{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .insight-metrics{display:flex;gap:14px;flex-wrap:wrap;margin-top:10px}
    .insight-box{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:16px 18px;min-width:140px}
    .insight-box strong{display:block;font-size:30px;font-family:'Plus Jakarta Sans',sans-serif}
    .pricing-wrap{display:flex;justify-content:center}
    .pricing-card{max-width:780px;width:100%;background:#fff;border:1px solid #e5e7eb;border-radius:28px;padding:34px;box-shadow:0 18px 48px rgba(15,23,42,.1);position:relative}
    .price-badge{display:inline-flex;align-items:center;padding:8px 12px;border-radius:999px;background:#dcfce7;color:#166534;font-size:13px;font-weight:700;margin-bottom:16px}
    .pricing-card h3{font-size:34px;margin-bottom:8px}
    .price-line{display:flex;align-items:flex-end;gap:10px;flex-wrap:wrap;margin:14px 0 8px}
    .price-old{text-decoration:line-through;color:#9ca3af}
    .price-new{font-size:16px;color:#4b5563;font-weight:700}
    .pricing-list{display:flex;flex-direction:column;gap:12px;margin:24px 0}
    .pricing-item{display:flex;gap:12px;align-items:flex-start;color:#374151}
    .tick{width:22px;height:22px;border-radius:50%;background:rgba(228,41,43,.1);display:flex;align-items:center;justify-content:center;flex:0 0 22px;margin-top:2px}
    .testimonials-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:24px;align-items:stretch}
    .testimonial-slider{background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:30px;box-shadow:0 16px 40px rgba(15,23,42,.08);overflow:hidden}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-slide{min-width:100%}
    .quote-mark{font-size:54px;line-height:1;color:${accent};font-family:'Plus Jakarta Sans',sans-serif}
    .testimonial-quote{font-size:22px;line-height:1.7;color:#111827;margin:8px 0 24px}
    .person{display:flex;align-items:center;gap:14px}
    .person img{width:58px;height:58px;border-radius:50%;object-fit:cover}
    .person h4{font-size:17px;margin:0 0 4px}
    .person p{font-size:14px;color:#6b7280;margin:0}
    .stars{color:#f59e0b;font-size:18px;letter-spacing:2px;margin-bottom:18px}
    .dots{display:flex;gap:8px;justify-content:center;margin-top:22px}
    .dot-btn{width:8px;height:8px;border:none;border-radius:999px;background:#d1d5db;cursor:pointer;transition:.3s ease}
    .dot-btn.active{width:26px;background:${accent}}
    .testimonial-side{display:flex;flex-direction:column;gap:14px}
    .mini-review{background:#fff;border:1px solid #e5e7eb;border-radius:20px;padding:20px;box-shadow:0 10px 28px rgba(15,23,42,.06)}
    .mini-review p{margin:0;color:#374151;line-height:1.7;font-size:15px}
    .cta-strip{padding:26px 0;background:#ffffff;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
    .cta-strip-inner{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap}
    .cta-strip-inner h3{font-size:24px}
    .footer{background:#0f172a;color:#fff;padding:44px 0}
    .footer-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:24px;align-items:start}
    .footer-brand img{height:28px}
    .footer p,.footer a{color:rgba(255,255,255,.76);font-size:14px}
    .footer-links,.socials{display:flex;gap:16px;flex-wrap:wrap}
    .social-icon{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;transition:.25s ease}
    .social-icon:hover{transform:translateY(-2px);background:rgba(255,255,255,.06)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}
    .reveal-delay-2{transition-delay:.2s}
    .reveal-delay-3{transition-delay:.3s}
    .hover-lift{transition:transform .25s ease,box-shadow .25s ease}
    .hover-lift:hover{transform:translateY(-6px);box-shadow:0 18px 36px rgba(15,23,42,.12)}
    @media (max-width: 1024px){
      .hero-grid,.tabs-shell,.split-preview,.testimonials-grid,.trust-grid,.footer-grid{grid-template-columns:1fr}
      .logo-grid{justify-content:flex-start}
      .hero-visual{min-height:auto}
      .split-preview.reverse .media-col,.split-preview.reverse .content-col{order:initial}
    }
    @media (max-width: 768px){
      .section{padding:70px 0}
      .nav-inner{gap:12px}
      .nav-right{gap:12px}
      .banner-title{font-size:44px}
      .hero p{font-size:16px}
      .floating-card{display:none}
      .browser-frame img,.browser-frame video{height:280px}
      .pricing-card{padding:24px}
      .testimonial-quote{font-size:18px}
      .animated-cta{padding:11px 18px}
    }

    /* ── CINEMATIC SYSTEM ──────────────────────────────────────────────── */
    .scene-expand { width: 75%; margin: 0 auto; border-radius: 24px; overflow: hidden; will-change: width, border-radius; }
    .scene-expand img { width: 100%; height: 100%; object-fit: cover; transform: scale(1.08); will-change: transform; }
    .zoom-reveal { overflow: hidden; border-radius: 16px; }
    .zoom-reveal img, .zoom-reveal video { transform: scale(1.15); will-change: transform; transition: transform 0s; }
    [data-depth] { will-change: transform; }
    .depth-foreground { position: relative; z-index: 3; }
    .depth-midground  { position: relative; z-index: 2; }
    .depth-background { position: absolute; inset: 0; z-index: 1; }
    .card-3d-stack { position: relative; transform-style: preserve-3d; perspective: 1000px; }
    .card-3d-stack > *:nth-child(1) { transform: translateZ(40px) translateY(0px); }
    .card-3d-stack > *:nth-child(2) { transform: translateZ(20px) translateY(12px) scale(0.97); opacity: 0.8; }
    .card-3d-stack > *:nth-child(3) { transform: translateZ(0px)  translateY(24px) scale(0.94); opacity: 0.5; }
    .clip-reveal { clip-path: inset(100% 0 0 0); will-change: clip-path; }
    .hero-cinematic-bg { transform: scale(1.06); transform-origin: center center; will-change: transform; }
    @keyframes floatY { 0%, 100% { transform: translateY(0px); } 50% { transform: translateY(-14px); } }
    @keyframes floatRotate { 0%, 100% { transform: translateY(0px) rotate(0deg); } 50% { transform: translateY(-8px) rotate(2deg); } }
    @keyframes ambientPulse { 0%, 100% { opacity: 0.6; transform: scale(1); } 50% { opacity: 1; transform: scale(1.04); } }
    @keyframes driftLeft { 0%, 100% { transform: translateX(0px) translateY(0px); } 33% { transform: translateX(-12px) translateY(-8px); } 66% { transform: translateX(8px) translateY(-14px); } }
    .float-ambient { animation: floatY 6s ease-in-out infinite; }
    .float-rotate { animation: floatRotate 8s ease-in-out infinite; }
    .float-pulse { animation: ambientPulse 4s ease-in-out infinite; }
    .float-drift { animation: driftLeft 10s ease-in-out infinite; }
    .float-delay-1 { animation-delay: -2s; }
    .float-delay-2 { animation-delay: -4s; }
    .float-delay-3 { animation-delay: -1s; }
    .stagger-parent > * { opacity: 0; transform: translateY(32px); will-change: opacity, transform; }
    .split-text .word { display: inline-block; overflow: hidden; }
    .split-text .char { display: inline-block; will-change: transform, opacity; }
    .h-scroll-track { display: flex; gap: 24px; will-change: transform; }
    .btn-magnetic { position: relative; transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1); display: inline-block; }
    .text-reveal-mask { overflow: hidden; display: block; }
    .text-reveal-inner { display: block; transform: translateY(110%); will-change: transform; }
    .cursor-glow { position: fixed; width: 400px; height: 400px; border-radius: 50%; pointer-events: none; z-index: 9999; transform: translate(-50%, -50%); background: radial-gradient(circle, var(--accent-glow, rgba(99,102,241,0.12)) 0%, transparent 70%); transition: opacity 0.3s ease; }
    .section-overlap { margin-top: -80px; position: relative; z-index: 2; }
    .glass-card { background: rgba(255,255,255,0.06); backdrop-filter: blur(20px); -webkit-backdrop-filter: blur(20px); border: 1px solid rgba(255,255,255,0.1); border-radius: 20px; }
    .noise-overlay::after { content: ''; position: absolute; inset: 0; background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E"); pointer-events: none; opacity: 0.4; z-index: 1; }
  `;

  const iconSvg = (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M5 12.5L9.2 16.5L19 6.5" stroke={accent} strokeWidth="2.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const renderTabsSection = (section, activeTab, setActiveTab, reverse = false, ctaIndex = null, isInsight = false) => {
    const activeItem = section.features[activeTab];
    return (
      <section className={`section ${reverse ? 'bg-soft' : 'bg-white'} clip-reveal`} key={section.name}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <h2>
                {section.headline.includes('Zoho Workplace') ? (
                  <>
                    {section.headline.replace('Zoho Workplace', '').trim()}{' '}
                    <span className="gradient-text">Zoho Workplace</span>
                  </>
                ) : (
                  section.headline
                )}
              </h2>
              {section.description ? <p>{section.description}</p> : null}
            </div>
          </div>

          <div className="tabs-shell">
            <div className="tab-list stagger-parent" data-depth="0.15">
              {section.features.map((item, idx) => (
                <button
                  key={item.title}
                  className={`tab-btn hover-lift ${activeTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveTab(idx)}
                  type="button"
                >
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </button>
              ))}
            </div>

            <div className="preview-panel reveal reveal-delay-1">
              <div className={`split-preview ${reverse ? 'reverse' : ''}`}>
                <div className="media-col" data-depth="0.25">
                  <div className="scene-expand">
                    <div className="zoom-reveal browser-frame">
                      <div className="browser-top">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                      </div>
                      <img src={section.image} alt={section.name} />
                    </div>
                  </div>
                </div>

                <div className="content-col" data-depth="0.12">
                  <div className="text-reveal-mask">
                    <div className="text-reveal-inner">
                      <h3>{activeItem.title}</h3>
                    </div>
                  </div>

                  <div className="desc-block">
                    <p>{activeItem.description}</p>
                  </div>

                  {!isInsight ? (
                    <div>
                      {section.features.map((item) => (
                        <div className="feature-inline" key={item.title}>
                          <div className="icon-badge">{iconSvg}</div>
                          <div>
                            <h5>{item.title}</h5>
                            <p>{item.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div className="insight-metrics stagger-parent">
                      <div className="insight-box hover-lift">
                        <strong data-count="82.9" data-suffix="%">82.9%</strong>
                        <span className="muted">Secure</span>
                      </div>
                      <div className="insight-box hover-lift">
                        <strong data-count="42.9" data-suffix="%">42.9%</strong>
                        <span className="muted">Anywhere Access</span>
                      </div>
                      <div className="insight-box hover-lift">
                        <strong data-count="28.6" data-suffix="%">28.6%</strong>
                        <span className="muted">Intuitive</span>
                      </div>
                      <div className="insight-box hover-lift">
                        <strong data-count="14.3" data-suffix="%">14.3%</strong>
                        <span className="muted">Collaborative</span>
                      </div>
                      <div style={{ width: '100%' }}>
                        {section.features.map((item) => (
                          <div className="feature-inline" key={item.title}>
                            <div className="icon-badge">{iconSvg}</div>
                            <div>
                              <h5>{item.title}</h5>
                              <p>{item.description}</p>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {ctaIndex !== null ? (
                    <div style={{ marginTop: 22 }}>
                      <a
                        href={ctas[ctaIndex].href}
                        className="animated-cta"
                        target="_blank"
                        rel="noreferrer"
                      >
                        {ctas[ctaIndex].text}
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  };

  return (
    <div className="page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="topbar">
        <div className="container nav-inner">
          <div className="nav-left">
            <span className="brand-text">Zoho Workplace</span>
          </div>
          <div className="nav-right">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
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
      </nav>

      <section className="hero noise-overlay" ref={heroRef}>
        <div className="orb one float-drift" data-depth="0.4" />
        <div className="orb two float-drift float-delay-2" data-depth="0.4" />
        <div className="container hero-grid">
          <div className="hero-copy depth-foreground" data-depth="0.15">
            <h1 className="banner-title split-text heading">
              Elevate Your Team’s Productivity with Zoho Workplace
            </h1>
            <p className="reveal reveal-delay-1">
              A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
            </p>
            <div className="support-line reveal reveal-delay-2">
              Easy Setup & Quick Onboarding | A Made in India solution | 24x7 Support
            </div>

            <div className="chip-row reveal reveal-delay-3">
              {[
                'All-in-One Unified Workspace',
                'Seamless Collaboration in Real Time',
                'Work from Anywhere, Anytime',
                'AI-Powered Productivity (Zia)',
              ].map((chip) => (
                <div className="chip" key={chip}>
                  {iconSvg}
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions reveal reveal-delay-3">
              <a
                href={ctas[1].href}
                className="animated-cta btn-magnetic"
                target="_blank"
                rel="noreferrer"
              >
                {ctas[1].text}
              </a>
            </div>
          </div>

          <div className="hero-visual depth-midground" data-depth="0.2">
            <div className="hero-video-shell hero-cinematic-bg scene-expand">
              <div className="zoom-reveal">
                <video autoPlay muted loop playsInline preload="auto">
                  <source
                    src="/output/generated-assets/ds_1778142936650_2bbec4dd/16-7f9baae9a1.mp4"
                    type="video/mp4"
                  />
                </video>
              </div>
            </div>

            <div className="floating-card fc-1 float-ambient glass-card">
              <div className="fc-big" data-count="100000" data-suffix="+">100,000+</div>
              <div className="fc-small">Trusted by Businesses Globally</div>
            </div>
            <div className="floating-card fc-2 float-ambient float-delay-1 glass-card">
              <div className="fc-big">Unified</div>
              <div className="fc-small">Email & Collaboration Suite</div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-soft trust-wrap">
        <div className="container trust-grid">
          <div className="trust-copy reveal">
            <h3>Trusted by 100,000+ Businesses Globally</h3>
            <div className="metric-strip">
              <div className="metric-card hover-lift">
                <strong data-count="100000" data-suffix="+">100,000+</strong>
                <span className="muted">Businesses Globally</span>
              </div>
              <div className="metric-card hover-lift">
                <strong data-count="82.9" data-suffix="%">82.9%</strong>
                <span className="muted">Secure email experience</span>
              </div>
              <div className="metric-card hover-lift">
                <strong data-count="42.9" data-suffix="%">42.9%</strong>
                <span className="muted">Easier remote work</span>
              </div>
            </div>
          </div>

          <div className="logo-grid reveal reveal-delay-1" data-depth="0.12">
            {trustLogos.map((logo, idx) => (
              <div className="logo-tile" key={idx}>
                <img src={logo} alt={`Trust logo ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {renderTabsSection(sections[0], activeFeatureTab, setActiveFeatureTab, false, 2, false)}

      {renderTabsSection(sections[1], activeStandardTab, setActiveStandardTab, true, null, false)}

      {renderTabsSection(sections[2], activeAdditionalTab, setActiveAdditionalTab, false, 3, false)}

      <section className="section bg-soft clip-reveal pin-scene">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <h2>Performance Beyond Limits with <span className="gradient-text">Zoho Workplace</span></h2>
            </div>
          </div>
          <div className="tabs-shell">
            <div className="tab-list stagger-parent">
              {sections[3].features.map((item, idx) => (
                <button
                  key={item.title}
                  className={`tab-btn hover-lift ${activeInsightTab === idx ? 'active' : ''}`}
                  onClick={() => setActiveInsightTab(idx)}
                  type="button"
                >
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </button>
              ))}
            </div>
            <div className="preview-panel">
              <div className="split-preview reverse">
                <div className="media-col" data-depth="0.24">
                  <div className="scene-expand">
                    <div className="zoom-reveal browser-frame">
                      <div className="browser-top">
                        <span className="dot" />
                        <span className="dot" />
                        <span className="dot" />
                      </div>
                      <img
                        src="/output/generated-assets/ds_1778142936650_2bbec4dd/25-5d0d126da2.png"
                        alt="Insight"
                      />
                    </div>
                  </div>
                </div>
                <div className="content-col" data-depth="0.1">
                  <h3>{sections[3].features[activeInsightTab].title}</h3>
                  <div className="desc-block">
                    <p>{sections[3].features[activeInsightTab].description}</p>
                  </div>
                  <div className="insight-metrics stagger-parent">
                    <div className="insight-box hover-lift">
                      <strong data-count="82.9" data-suffix="%">82.9%</strong>
                      <span className="muted">Secure</span>
                    </div>
                    <div className="insight-box hover-lift">
                      <strong data-count="42.9" data-suffix="%">42.9%</strong>
                      <span className="muted">Anywhere Access</span>
                    </div>
                    <div className="insight-box hover-lift">
                      <strong data-count="28.6" data-suffix="%">28.6%</strong>
                      <span className="muted">Intuitive</span>
                    </div>
                    <div className="insight-box hover-lift">
                      <strong data-count="14.3" data-suffix="%">14.3%</strong>
                      <span className="muted">Collaborative</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <h2>Zoho Workplace</h2>
              <p>Email & Collaboration Suite for Enterprises and businesses</p>
            </div>
          </div>

          <div className="pricing-wrap">
            <div className="pricing-card reveal hover-lift">
              <div className="price-badge">Enterprise-Grade</div>
              <h3>Zoho Workplace</h3>
              <div className="price-line">
                <span className="price-old">(was )</span>
                <span className="price-new">Email & Collaboration Suite</span>
              </div>

              <div className="pricing-list">
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
                ].map((item) => (
                  <div className="pricing-item" key={item}>
                    <div className="tick">{iconSvg}</div>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a
                href={ctas[4].href}
                className="animated-cta"
                target="_blank"
                rel="noreferrer"
                style={{ width: '100%' }}
              >
                {ctas[4].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft">
        <div className="container">
          <div className="section-head reveal">
            <div>
              <h2>What Teams Say About <span className="gradient-text">Zoho Workplace</span></h2>
            </div>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-slider reveal">
              <div
                className="testimonial-track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div className="testimonial-slide" key={i}>
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-quote">{t.quote}</p>
                    <div className="person">
                      <img src={t.avatar} alt={t.name} />
                      <div>
                        <h4>{t.name}</h4>
                        <p>{t.role}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
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
            </div>

            <div className="testimonial-side stagger-parent">
              {testimonials.slice(0, 3).map((t, i) => (
                <div className="mini-review hover-lift" key={i}>
                  <div className="stars">★★★★★</div>
                  <p>{t.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container cta-strip-inner">
          <h3>Elevate Your Team’s Productivity with Zoho Workplace</h3>
          <span className="muted">A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.</span>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-brand">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              alt="Techjockey"
            />
            <p style={{ marginTop: 16 }}>support@techjockey.com</p>
            <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
            <div className="footer-links" style={{ marginTop: 14 }}>
              <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
              <a href="/terms" target="_blank" rel="noreferrer">Terms</a>
            </div>
          </div>

          <div>
            <div className="socials" style={{ justifyContent: 'flex-start' }}>
              <a className="social-icon" href="https://www.facebook.com/Techjockey/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M14 8h2V5h-2c-2.2 0-4 1.8-4 4v2H8v3h2v5h3v-5h2.2l.8-3H13V9c0-.6.4-1 1-1Z" fill="white"/></svg>
              </a>
              <a className="social-icon" href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="white" strokeWidth="1.8"/><circle cx="12" cy="12" r="4" stroke="white" strokeWidth="1.8"/><circle cx="17.5" cy="6.5" r="1" fill="white"/></svg>
              </a>
              <a className="social-icon" href="https://x.com/Techjockey" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M18.9 3H21l-4.6 5.3L22 21h-4.4l-3.5-4.8L9.9 21H7.8l4.9-5.7L2 3h4.5l3.2 4.4L13.6 3h2.1Z" fill="white"/></svg>
              </a>
              <a className="social-icon" href="https://www.linkedin.com/company/techjockey-com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M6.5 8.5A1.5 1.5 0 1 0 6.5 5.5a1.5 1.5 0 0 0 0 3ZM5 10h3v9H5v-9Zm5 0h2.9v1.3h.1c.4-.8 1.4-1.6 2.9-1.6 3.1 0 3.6 2 3.6 4.7V19h-3v-3.8c0-.9 0-2-1.2-2s-1.4 1-1.4 1.9V19h-3v-9Z" fill="white"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;