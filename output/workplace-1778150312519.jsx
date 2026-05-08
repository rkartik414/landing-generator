import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#e4292b';
  const primary = '#e4292b';
  const bodyBg = '#ffffff';

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const pageRef = useRef(null);

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

  const testimonials = [
    {
      quote:
        'Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.',
      author: 'Amit Kapoor',
      role: 'IT Manager',
      avatar: '/output/generated-assets/ds_1778149971016_96ea98e5/11-a1af876bc5.png',
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      author: 'Saurav Singh',
      role: 'Head of Operations',
      avatar: '/output/generated-assets/ds_1778149971016_96ea98e5/13-01fc6c95c0.jpg',
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      author: 'Shrimi Manchanda',
      role: 'Operations Manager',
      avatar: '/output/generated-assets/ds_1778149971016_96ea98e5/17-00ee58a5d0.jpg',
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      author: 'Shweta Thakur',
      role: 'Senior System Administrator',
      avatar: '/output/generated-assets/ds_1778149971016_96ea98e5/11-a1af876bc5.png',
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      author: 'Narinder Sahni',
      role: 'IT Head',
      avatar: '/output/generated-assets/ds_1778149971016_96ea98e5/13-01fc6c95c0.jpg',
    },
  ];

  const sections = [
    {
      label: 'FEATURES',
      headline: 'Why Choose Zoho Workplace?',
      description:
        'Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.',
      image: '/output/generated-assets/ds_1778149971016_96ea98e5/14-8ee9780f0b.jpg',
      reverse: false,
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
      label: 'STANDARD FEATURES',
      headline: 'Unlock Your Business Growth with Zoho Workplace',
      description:
        'Zoho Workplace unifies email, collaboration, and productivity tools to streamline your business operations. Enable smarter teamwork and drive growth with a single platform.',
      image: '/output/generated-assets/ds_1778149971016_96ea98e5/15-473c14de05.jpg',
      reverse: true,
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
      label: 'ADDITIONAL FEATURES',
      headline: 'Integrate with Popular Apps',
      description:
        'Connect your Zoho Workplace with other business apps to ensure higher productivity and growth - all within a unified workspace.',
      image: '/output/generated-assets/ds_1778149971016_96ea98e5/25-c93738f621.png',
      reverse: false,
      features: [
        { title: 'Zoho Apps', description: 'Zoho Meeting, Zoho Connect, Zoho Mail, Zoho Cliq, Zoho Writer, etc.' },
        { title: 'Analytics', description: 'Zoho Analytics, Google Analytics' },
        { title: 'Accounting & Finance', description: 'Zoho Invoice & Zoho Books' },
        { title: 'Automation', description: 'Zoho Flow, Zapier, viaSocket' },
        { title: 'Business Suites', description: 'Zoho One, Zoho Workspace' },
      ],
    },
    {
      label: 'INSIGHT',
      headline: 'Performance Beyond Limits with Zoho Workplace',
      description: '',
      image: '/output/generated-assets/ds_1778149971016_96ea98e5/26-5d0d126da2.png',
      reverse: true,
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

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--accent-glow', 'rgba(228,41,43,0.14)');

    const onScroll = () => setNavScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const gsapScript = document.createElement('script');
    gsapScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js';
    gsapScript.async = true;

    const stScript = document.createElement('script');
    stScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js';
    stScript.async = true;

    document.body.appendChild(gsapScript);
    document.body.appendChild(stScript);

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

          const mouseMove = (e) => {
            gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
          };
          window.addEventListener('mousemove', mouseMove);

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
                char === ' ' ? ' ' : `<span class="char" style="display:inline-block;will-change:transform,opacity">${char}</span>`
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
                el.textContent = prefix + Number(this.targets()[0].val).toFixed(target % 1 ? 1 : 0).replace('.0', '') + suffix;
              },
            });
          });

          window.__lpCleanup = () => {
            window.removeEventListener('mousemove', mouseMove);
            if (glow && glow.parentNode) glow.parentNode.removeChild(glow);
            ScrollTrigger.getAll().forEach((t) => t.kill());
          };
        });
      });
    };

    const boot = setInterval(() => {
      if (window.gsap && window.ScrollTrigger) {
        clearInterval(boot);
        initGSAP();
      }
    }, 250);

    return () => {
      window.removeEventListener('scroll', onScroll);
      observer.disconnect();
      clearInterval(boot);
      if (window.__lpCleanup) window.__lpCleanup();
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};}
    *{box-sizing:border-box}
    html,body{margin:0;padding:0;background:${bodyBg};color:#111827;font-family:Inter,sans-serif;scroll-behavior:smooth}
    body{overflow-x:hidden}
    a{text-decoration:none;color:inherit}
    img,video{max-width:100%}
    .page{background:${bodyBg}}
    .container{width:min(1200px,calc(100% - 32px));margin:0 auto}
    .section{padding:88px 0;position:relative}
    .section-light{background:#ffffff}
    .section-soft{background:#f8fafc}
    .main_header{position:sticky;top:0;z-index:50;background:${navScrolled ? 'rgba(255,255,255,0.92)' : 'rgba(255,255,255,0.86)'};backdrop-filter:blur(20px);border-bottom:1px solid rgba(229,231,235,.9)}
    .nav-bar{display:flex;align-items:center;justify-content:space-between;gap:18px;padding:14px 0}
    .nav-left{display:flex;align-items:center;min-width:0}
    .nav-right{display:flex;align-items:center;gap:16px;margin-left:auto}
    .logo-text{font-weight:800;font-size:20px;color:${accent};font-family:"Plus Jakarta Sans",sans-serif}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:10px;background:${accent};color:#fff;font-weight:700;border:1px solid ${accent};transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 14px 28px rgba(228,41,43,.22);background:#c91f21}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:12px 22px;border-radius:10px;background:transparent;color:#fff;font-weight:700;border:1px solid rgba(255,255,255,.26);transition:.25s ease}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 12px 24px rgba(0,0,0,.18);background:rgba(255,255,255,.08)}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${accent} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-section{background:#111827;color:#fff;position:relative;overflow:hidden;padding:110px 0 80px}
    .hero-grid{display:flex;align-items:center;gap:48px;position:relative;z-index:2}
    .hero-copy,.hero-visual{flex:1;min-width:0}
    .banner-title{font-family:"Plus Jakarta Sans",sans-serif;font-size:clamp(48px,6vw,72px);line-height:1.02;font-weight:800;letter-spacing:-.03em;margin:0 0 18px;word-break:normal;overflow-wrap:normal;hyphens:none;white-space:normal;max-width:100%}
    .banner-content{font-size:18px;line-height:1.75;color:rgba(255,255,255,.84);max-width:640px;margin:0 0 28px}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap;margin-top:28px}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(228,41,43,.35);background:rgba(228,41,43,.12);color:#fff;font-size:13px}
    .hero-visual-wrap{position:relative;min-height:500px;display:flex;align-items:center;justify-content:center}
    .hero-video-card{position:relative;width:100%;max-width:580px;border-radius:24px;overflow:hidden;border:1px solid rgba(255,255,255,.12);box-shadow:0 30px 80px rgba(0,0,0,.35);background:#0b1220}
    .hero-video-card video{width:100%;height:520px;object-fit:cover;display:block}
    .float-card{position:absolute;background:rgba(255,255,255,.08);backdrop-filter:blur(12px);border:1px solid rgba(255,255,255,.14);border-radius:16px;padding:14px 16px;box-shadow:0 20px 50px rgba(0,0,0,.28);min-width:170px}
    .float-card strong{display:block;font-family:"Plus Jakarta Sans",sans-serif;font-size:18px;margin-bottom:4px}
    .float-card span{display:block;font-size:13px;color:rgba(255,255,255,.8)}
    .card-a{left:-18px;top:40px}
    .card-b{right:-10px;top:82px}
    .card-c{left:30px;bottom:22px}
    .hero-orb,.hero-orb-2{position:absolute;border-radius:50%;pointer-events:none}
    .hero-orb{width:420px;height:420px;right:-140px;top:-100px;background:radial-gradient(circle, rgba(228,41,43,.22) 0%, transparent 70%)}
    .hero-orb-2{width:340px;height:340px;left:-120px;bottom:-100px;background:radial-gradient(circle, rgba(228,41,43,.16) 0%, transparent 70%)}
    .precision-lines:before,.precision-lines:after{content:"";position:absolute;border:1px solid rgba(255,255,255,.08);border-radius:24px;pointer-events:none}
    .precision-lines:before{inset:40px 20px auto auto;width:220px;height:220px}
    .precision-lines:after{inset:auto auto 20px 40px;width:180px;height:180px}
    .trust-band{padding:26px 0;background:#f8fafc;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
    .trust-inner{display:flex;align-items:center;justify-content:space-between;gap:24px;flex-wrap:wrap}
    .trust-copy h3{margin:0 0 6px;font-family:"Plus Jakarta Sans",sans-serif;font-size:28px}
    .trust-copy p{margin:0;color:#4b5563}
    .logo-grid{display:flex;gap:14px;flex-wrap:wrap;justify-content:flex-end}
    .logo-item{height:72px;max-height:72px;padding:12px 16px;border-radius:14px;background:#fff;border:1px solid #e5e7eb;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 24px rgba(0,0,0,.05)}
    .logo-item img{max-height:32px;max-width:120px;filter:grayscale(1);opacity:.78;transition:.25s ease}
    .logo-item:hover img{filter:grayscale(0);opacity:1}
    .stats-strip{display:flex;gap:28px;flex-wrap:wrap;margin-top:18px}
    .stat-box{padding-right:28px;border-right:1px solid #e5e7eb}
    .stat-box:last-child{border-right:none;padding-right:0}
    .stat-num{font-family:"Plus Jakarta Sans",sans-serif;font-size:34px;font-weight:800}
    .stat-label{font-size:14px;color:#6b7280}
    .section-head{max-width:760px;margin:0 0 34px}
    .eyebrow{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:999px;background:rgba(228,41,43,.08);color:${accent};font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase}
    h2{font-family:"Plus Jakarta Sans",sans-serif;font-size:clamp(32px,4vw,46px);line-height:1.1;margin:16px 0 14px}
    .lead{font-size:18px;line-height:1.8;color:#4b5563;margin:0}
    .spotlight-layout{display:flex;gap:36px;align-items:stretch;flex-wrap:wrap}
    .spotlight-media,.spotlight-content{flex:1;min-width:300px}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:24px;border:1px solid #e5e7eb;background:#f8f8f8;box-shadow:0 20px 50px rgba(0,0,0,.08)}
    .browser-top{display:flex;align-items:center;gap:8px;padding:14px 16px;border-bottom:1px solid #e5e7eb;background:#fff}
    .dot{width:10px;height:10px;border-radius:50%}
    .dot.red{background:#ff5f57}.dot.yellow{background:#febc2e}.dot.green{background:#28c840}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .desc-bar{border-left:3px solid rgba(228,41,43,.28);padding-left:18px;margin:18px 0 24px}
    .feature-list{display:flex;flex-direction:column;gap:14px}
    .feature-card{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:18px 18px 18px 16px;box-shadow:0 4px 24px rgba(0,0,0,.06);display:flex;gap:14px;transition:transform .25s ease,box-shadow .25s ease}
    .feature-card:hover,.hover-lift:hover{transform:translateY(-6px);box-shadow:0 18px 36px rgba(0,0,0,.09)}
    .feature-icon{width:42px;height:42px;min-width:42px;border-radius:12px;background:rgba(228,41,43,.1);display:flex;align-items:center;justify-content:center;color:${accent}}
    .feature-title{font-family:"Plus Jakarta Sans",sans-serif;font-weight:700;font-size:18px;margin:0 0 6px}
    .feature-desc{margin:0;color:#4b5563;line-height:1.7}
    .metrics-panel{display:flex;gap:14px;flex-wrap:wrap;margin-top:20px}
    .metric-card{flex:1;min-width:180px;background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:18px;box-shadow:0 4px 24px rgba(0,0,0,.05)}
    .metric-card strong{display:block;font-family:"Plus Jakarta Sans",sans-serif;font-size:30px}
    .metric-card span{display:block;margin-top:6px;color:#6b7280;font-size:14px}
    .integration-grid{display:flex;flex-wrap:wrap;gap:14px;margin-top:22px}
    .integration-tile{padding:14px 16px;background:#fff;border:1px solid #e5e7eb;border-radius:16px;box-shadow:0 4px 20px rgba(0,0,0,.05);font-weight:600;color:#374151}
    .pin-shell{background:#f8fafc;border:1px solid #e5e7eb;border-radius:30px;padding:26px}
    .pricing-card-wrap{display:flex;justify-content:center}
    .price-plan{max-width:860px;width:100%;background:#fff;border:1px solid #e5e7eb;border-radius:28px;box-shadow:0 20px 60px rgba(0,0,0,.08);padding:34px;position:relative;overflow:hidden}
    .price-plan:before{content:"";position:absolute;inset:0 auto auto 0;width:100%;height:5px;background:${accent}}
    .price-badge{display:inline-flex;padding:8px 12px;border-radius:999px;background:#e8f7ec;color:#15803d;font-size:12px;font-weight:800;text-transform:uppercase;letter-spacing:.08em}
    .price-title{font-family:"Plus Jakarta Sans",sans-serif;font-size:34px;font-weight:800;margin:18px 0 10px}
    .price-row{display:flex;align-items:end;gap:12px;flex-wrap:wrap;margin-bottom:20px}
    .price-old{font-size:20px;color:#9ca3af;text-decoration:line-through}
    .price-new{font-size:40px;font-weight:800;font-family:"Plus Jakarta Sans",sans-serif;color:#111827}
    .price-note{color:#6b7280}
    .pricing-list{display:flex;flex-direction:column;gap:12px;margin:24px 0 28px}
    .pricing-item{display:flex;gap:12px;align-items:flex-start;color:#374151}
    .check{width:22px;height:22px;min-width:22px;border-radius:50%;background:rgba(22,163,74,.12);color:#16a34a;display:flex;align-items:center;justify-content:center;font-weight:800}
    .testimonial-wrap{overflow:hidden}
    .testimonial-slider{position:relative}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-item{min-width:100%;padding:6px}
    .testimonial-card{background:#fff;border:1px solid #e5e7eb;border-radius:24px;padding:34px;box-shadow:0 8px 32px rgba(0,0,0,.06)}
    .quote-mark{font-size:52px;line-height:1;color:${accent};font-family:"Plus Jakarta Sans",sans-serif;font-weight:800}
    .stars{color:#f59e0b;letter-spacing:2px;font-size:18px;margin:8px 0 18px}
    .testimonial-text{font-size:22px;line-height:1.75;color:#1f2937;margin:0 0 26px}
    .author{display:flex;align-items:center;gap:14px}
    .author img{width:58px;height:58px;border-radius:50%;object-fit:cover;border:2px solid rgba(228,41,43,.15)}
    .author-name{font-weight:800;font-family:"Plus Jakarta Sans",sans-serif}
    .author-role{color:#6b7280;font-size:14px}
    .slider-controls{display:flex;align-items:center;justify-content:space-between;gap:16px;margin-top:18px}
    .arrow-btn{width:46px;height:46px;border-radius:50%;border:1px solid #e5e7eb;background:#fff;cursor:pointer;font-size:20px;transition:.25s ease}
    .arrow-btn:hover{transform:translateY(-2px);box-shadow:0 10px 20px rgba(0,0,0,.08)}
    .dots{display:flex;gap:8px;justify-content:center;align-items:center}
    .dot-btn{width:8px;height:8px;border-radius:999px;border:none;background:#d1d5db;cursor:pointer;transition:.25s ease}
    .dot-btn.active{width:26px;background:${accent}}
    .sticky-cta{position:fixed;right:18px;bottom:18px;z-index:40}
    .footer{background:#0f172a;color:#fff;padding:42px 0}
    .footer-grid{display:flex;justify-content:space-between;gap:24px;flex-wrap:wrap;align-items:flex-start}
    .footer-left,.footer-right{display:flex;flex-direction:column;gap:14px}
    .footer a{color:rgba(255,255,255,.86)}
    .footer-meta{color:rgba(255,255,255,.72);font-size:14px}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .social-icon{width:38px;height:38px;border-radius:50%;border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;transition:.25s ease}
    .social-icon:hover{transform:translateY(-2px);background:rgba(255,255,255,.08)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}
    .scene-expand{width:75%;margin:0 auto;border-radius:24px;overflow:hidden;will-change:width,border-radius}
    .scene-expand img{width:100%;height:100%;object-fit:cover;transform:scale(1.08);will-change:transform}
    .zoom-reveal{overflow:hidden;border-radius:16px}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.15);will-change:transform;transition:transform 0s}
    [data-depth]{will-change:transform}
    .depth-foreground{position:relative;z-index:3}
    .depth-midground{position:relative;z-index:2}
    .depth-background{position:absolute;inset:0;z-index:1}
    .card-3d-stack{position:relative;transform-style:preserve-3d;perspective:1000px}
    .card-3d-stack>*:nth-child(1){transform:translateZ(40px) translateY(0)}
    .card-3d-stack>*:nth-child(2){transform:translateZ(20px) translateY(12px) scale(.97);opacity:.8}
    .card-3d-stack>*:nth-child(3){transform:translateZ(0) translateY(24px) scale(.94);opacity:.5}
    .clip-reveal{clip-path:inset(100% 0 0 0);will-change:clip-path}
    .hero-cinematic-bg{transform:scale(1.06);transform-origin:center center;will-change:transform}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
    @keyframes floatRotate{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-8px) rotate(2deg)}}
    @keyframes ambientPulse{0%,100%{opacity:.6;transform:scale(1)}50%{opacity:1;transform:scale(1.04)}}
    @keyframes driftLeft{0%,100%{transform:translateX(0) translateY(0)}33%{transform:translateX(-12px) translateY(-8px)}66%{transform:translateX(8px) translateY(-14px)}}
    .float-ambient{animation:floatY 6s ease-in-out infinite}
    .float-rotate{animation:floatRotate 8s ease-in-out infinite}
    .float-pulse{animation:ambientPulse 4s ease-in-out infinite}
    .float-drift{animation:driftLeft 10s ease-in-out infinite}
    .float-delay-1{animation-delay:-2s}.float-delay-2{animation-delay:-4s}.float-delay-3{animation-delay:-1s}
    .stagger-parent>*{opacity:0;transform:translateY(32px);will-change:opacity,transform}
    .split-text .word{display:inline-block;overflow:hidden}
    .split-text .char{display:inline-block;will-change:transform,opacity}
    .btn-magnetic{position:relative;transition:transform .3s cubic-bezier(.34,1.56,.64,1);display:inline-block}
    .text-reveal-mask{overflow:hidden;display:block}
    .text-reveal-inner{display:block;transform:translateY(110%);will-change:transform}
    .cursor-glow{position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);background:radial-gradient(circle,var(--accent-glow,rgba(228,41,43,0.12)) 0%,transparent 70%);transition:opacity .3s ease}
    .glass-card{background:rgba(255,255,255,.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.1);border-radius:20px}
    .noise-overlay::after{content:'';position:absolute;inset:0;background-image:url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");pointer-events:none;opacity:.4;z-index:1}
    @media (max-width: 991px){
      .hero-grid,.spotlight-layout{flex-direction:column}
      .hero-section{padding-top:92px}
      .hero-video-card video{height:420px}
      .card-a{left:6px;top:18px}.card-b{right:6px;top:74px}.card-c{left:16px;bottom:10px}
      .trust-inner,.footer-grid,.slider-controls{flex-direction:column;align-items:flex-start}
      .logo-grid{justify-content:flex-start}
      .scene-expand{width:100%}
    }
    @media (max-width: 640px){
      .container{width:min(100% - 24px,1200px)}
      .nav-bar{gap:12px}
      .nav-right{gap:10px}
      .animated-cta{padding:11px 16px;font-size:14px}
      .banner-content{font-size:16px}
      .hero-video-card video{height:340px}
      .float-card{position:static;margin-top:12px}
      .hero-visual-wrap{min-height:auto}
      .price-plan,.testimonial-card{padding:22px}
      .sticky-cta{right:12px;left:12px;bottom:12px}
      .sticky-cta .animated-cta{width:100%}
    }
  `;

  const iconSvg = (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      <path d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke="currentColor" strokeWidth="1.8" />
      <path d="M8.5 12l2.2 2.2L15.8 9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  return (
    <div className="page" ref={pageRef}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="main_header">
        <div className="container nav-bar">
          <div className="nav-left">
            <span className="logo-text">Zoho Workplace</span>
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
      </header>

      <section className="hero-section precision-lines noise-overlay">
        <div className="hero-orb float-drift" data-depth="0.4" />
        <div className="hero-orb-2 float-drift float-delay-2" data-depth="0.4" />
        <div className="container hero-grid">
          <div className="hero-copy depth-foreground" data-depth="0.15">
            <div className="text-reveal-mask reveal">
              <span className="text-reveal-inner eyebrow">Email &amp; Collaboration Suite</span>
            </div>
            <h1 className="banner-title split-text">
              Elevate Your Team’s Productivity with <span className="gradient-text">Zoho Workplace</span>
            </h1>
            <p className="banner-content reveal reveal-delay-1">
              A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified Communication.
            </p>

            <div className="chips reveal reveal-delay-2">
              {[
                'All-in-One Unified Workspace',
                'Seamless Collaboration in Real Time',
                'Work from Anywhere, Anytime',
                'AI-Powered Productivity (Zia)',
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  {iconSvg}
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions reveal reveal-delay-3">
              <a href={ctas[1].href} className="animated-cta btn-magnetic" target="_blank" rel="noreferrer">
                {ctas[1].text}
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="hero-visual-wrap">
              <div className="hero-video-card hero-cinematic-bg card-3d-stack" data-depth="0.15">
                <video autoPlay muted loop playsInline preload="auto">
                  <source src="/output/generated-assets/ds_1778149971016_96ea98e5/16-7f9baae9a1.mp4" type="video/mp4" />
                </video>
              </div>
              <div className="float-card glass-card float-ambient card-a">
                <strong>100,000+</strong>
                <span>Trusted by 100,000+ Businesses Globally</span>
              </div>
              <div className="float-card glass-card float-rotate card-b">
                <strong>Unified</strong>
                <span>Email, chat, documents, meetings, and storage</span>
              </div>
              <div className="float-card glass-card float-pulse card-c">
                <strong>Enterprises</strong>
                <span>A Complete Email &amp; Collaboration Suite for Enterprises</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-band">
        <div className="container trust-inner">
          <div className="trust-copy reveal">
            <h3>Trusted by 100,000+ Businesses Globally</h3>
            <p>Proof strategy led by logos and real business trust signals.</p>
            <div className="stats-strip">
              <div className="stat-box">
                <div className="stat-num" data-count="100000" data-suffix="+">
                  0
                </div>
                <div className="stat-label">Businesses Globally</div>
              </div>
            </div>
          </div>
          <div className="logo-grid reveal reveal-delay-1">
            {[
              '/output/generated-assets/ds_1778149971016_96ea98e5/03-61e528786b.png',
              '/output/generated-assets/ds_1778149971016_96ea98e5/04-75f766eeed.png',
              '/output/generated-assets/ds_1778149971016_96ea98e5/05-d22596911f.png',
              '/output/generated-assets/ds_1778149971016_96ea98e5/06-b3d4199ca5.png',
              '/output/generated-assets/ds_1778149971016_96ea98e5/32-4e22c31148.png',
            ].map((logo, i) => (
              <div className="logo-item" key={i}>
                <img src={logo} alt={`Trusted logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section, idx) => (
        <section
          key={section.headline}
          className={`section ${idx % 2 === 0 ? 'section-light' : 'section-soft'} clip-reveal`}
        >
          <div className="container">
            <div className="spotlight-layout" style={{ flexDirection: section.reverse ? 'row-reverse' : 'row' }}>
              <div className="spotlight-media">
                <div className={`scene-expand ${idx === 3 ? 'pin-scene' : ''}`}>
                  <div className="browser-frame hover-lift">
                    <div className="browser-top">
                      <span className="dot red" />
                      <span className="dot yellow" />
                      <span className="dot green" />
                    </div>
                    <div className="zoom-reveal">
                      <img src={section.image} alt={section.headline} />
                    </div>
                  </div>
                </div>
              </div>

              <div className="spotlight-content" data-depth="0.15">
                <div className="section-head">
                  <span className="eyebrow reveal">{section.label}</span>
                  <h2 className="reveal reveal-delay-1">
                    {section.headline.includes('Zoho Workplace') ? (
                      <>
                        {section.headline.split('Zoho Workplace')[0]}
                        <span className="gradient-text">Zoho Workplace</span>
                        {section.headline.split('Zoho Workplace')[1]}
                      </>
                    ) : (
                      section.headline
                    )}
                  </h2>
                  {section.description ? (
                    <div className="desc-bar reveal reveal-delay-2">
                      <p className="lead">{section.description}</p>
                    </div>
                  ) : null}
                </div>

                {section.headline === 'Integrate with Popular Apps' ? (
                  <div className="integration-grid stagger-parent">
                    {section.features.map((item, i) => (
                      <div className="integration-tile hover-lift" key={i}>
                        <div className="feature-title" style={{ marginBottom: 6 }}>{item.title}</div>
                        <div className="feature-desc">{item.description}</div>
                      </div>
                    ))}
                  </div>
                ) : section.headline === 'Performance Beyond Limits with Zoho Workplace' ? (
                  <div className="metrics-panel stagger-parent">
                    {section.features.map((item, i) => {
                      const numMatch = item.description.match(/(\d+(\.\d+)?)/);
                      const num = numMatch ? parseFloat(numMatch[1]) : 0;
                      return (
                        <div className="metric-card hover-lift" key={i}>
                          <strong data-count={num} data-suffix="%">0</strong>
                          <span>{item.title}</span>
                          <p className="feature-desc" style={{ marginTop: 10 }}>{item.description}</p>
                        </div>
                      );
                    })}
                  </div>
                ) : (
                  <div className="feature-list stagger-parent">
                    {section.features.map((item, i) => (
                      <div className="feature-card hover-lift" key={i}>
                        <div className="feature-icon">{iconSvg}</div>
                        <div>
                          <h3 className="feature-title">{item.title}</h3>
                          <p className="feature-desc">{item.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                {idx === 0 || idx === 1 ? (
                  <div style={{ marginTop: 26 }} className="reveal reveal-delay-3">
                    <a
                      href={ctas[idx === 0 ? 2 : 3].href}
                      className="animated-cta"
                      target="_blank"
                      rel="noreferrer"
                    >
                      {ctas[idx === 0 ? 2 : 3].text}
                    </a>
                  </div>
                ) : null}
              </div>
            </div>
          </div>
        </section>
      ))}

      <section className="section section-light">
        <div className="container">
          <div className="section-head reveal">
            <span className="eyebrow">PRICING</span>
            <h2>Zoho Workplace</h2>
            <p className="lead">
              Enterprise-ready collaboration essentials in one highlighted card.
            </p>
          </div>
          <div className="pricing-card-wrap">
            <div className="price-plan reveal reveal-delay-1">
              <span className="price-badge">Enterprise Ready</span>
              <div className="price-title">Zoho Workplace</div>
              <div className="price-row">
                <div className="price-old"></div>
                <div className="price-new">Zoho Workplace</div>
              </div>
              <div className="price-note">
                Includes enterprise collaboration essentials for supported devices.
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
                ].map((item, i) => (
                  <div className="pricing-item" key={i}>
                    <span className="check">✓</span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a href={ctas[4].href} className="animated-cta" target="_blank" rel="noreferrer" style={{ width: '100%' }}>
                {ctas[4].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container testimonial-wrap">
          <div className="section-head reveal">
            <span className="eyebrow">TESTIMONIALS</span>
            <h2>What Enterprises Say About Zoho Workplace</h2>
          </div>

          <div className="testimonial-slider">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <div className="testimonial-item" key={i}>
                  <div className="testimonial-card">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-text">{item.quote}</p>
                    <div className="author">
                      <img src={item.avatar} alt={item.author} />
                      <div>
                        <div className="author-name">{item.author}</div>
                        <div className="author-role">{item.role}</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="slider-controls">
              <div style={{ display: 'flex', gap: 10 }}>
                <button
                  className="arrow-btn"
                  onClick={() =>
                    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                  }
                  aria-label="Previous testimonial"
                >
                  ←
                </button>
                <button
                  className="arrow-btn"
                  onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                  aria-label="Next testimonial"
                >
                  →
                </button>
              </div>
              <div className="dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`dot-btn ${i === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky-cta">
        <a href={ctas[4].href} className="animated-cta" target="_blank" rel="noreferrer">
          {ctas[4].text}
        </a>
      </div>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-left">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <a href="mailto:support@techjockey.com">support@techjockey.com</a>
            <div className="footer-meta">© 2024 Techjockey Infotech Pvt. Ltd.</div>
          </div>

          <div className="footer-right">
            <div className="footer-links">
              <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
              <a href="/terms-and-conditions" target="_blank" rel="noreferrer">Terms</a>
            </div>
            <div className="socials">
              <a className="social-icon" href="https://www.facebook.com/techjockeyinfotech" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-.9-.1-1.9-.1-3 0-5 1.8-5 5.2V11H7v3h3.1v8h3.4z"/></svg>
              </a>
              <a className="social-icon" href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
              </a>
              <a className="social-icon" href="https://x.com/TechjockeyInfo" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.9-6.5L6.2 22H3.1l7.3-8.3L1 2h6.3l4.4 5.9L18.9 2zm-1.1 18h1.7L6.4 3.9H4.6L17.8 20z"/></svg>
              </a>
              <a className="social-icon" href="https://www.linkedin.com/company/techjockeyinfotech/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 12.74C20.44 9.3 18.6 8 16.15 8c-1.98 0-2.87 1.1-3.36 1.87V8.5H9.42V20h3.37v-6.38c0-1.68.32-3.3 2.4-3.3 2.05 0 2.08 1.92 2.08 3.41V20h3.37l-.2-7.26z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;