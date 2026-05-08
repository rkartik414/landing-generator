import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#e4292b';
  const primary = '#e4292b';
  const bodyBg = '#ffffff';

  const [activeTab1, setActiveTab1] = useState(0);
  const [activeTab2, setActiveTab2] = useState(0);
  const [activeTab3, setActiveTab3] = useState(0);
  const [activeTab4, setActiveTab4] = useState(0);
  const [activeTab5, setActiveTab5] = useState(0);
  const [activeSlide, setActiveSlide] = useState(0);
  const pageRef = useRef(null);

  const heroChips = [
    'Easy Setup & Quick Onboarding',
    'A Made in India solution',
    '24x7 Support',
    'Unified Communication'
  ];

  const trustLogos = [
    '/output/generated-assets/ds_1778089223494_5a7ebced/10-4e22c31148.png',
    '/output/generated-assets/ds_1778089223494_5a7ebced/09-75f766eeed.png',
    '/output/generated-assets/ds_1778089223494_5a7ebced/08-61e528786b.png',
    '/output/generated-assets/ds_1778089223494_5a7ebced/17-d22596911f.png',
    '/output/generated-assets/ds_1778089223494_5a7ebced/18-b3d4199ca5.png'
  ];

  const sections = [
    {
      id: 'why',
      label: 'Features',
      headline: 'Why Choose Zoho Workplace?',
      description:
        'Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.',
      image: '/output/generated-assets/ds_1778089223494_5a7ebced/14-8ee9780f0b.jpg',
      features: [
        {
          title: 'All-in-One Unified Workspace',
          description:
            'Access email, chat, documents, meetings, and storage in a single integrated platform. Reduce app switching and boost productivity.'
        },
        {
          title: 'Seamless Collaboration in Real Time',
          description:
            'Work together on documents, spreadsheets, and presentations with live editing, comments, and built-in communication tools.'
        },
        {
          title: 'Work from Anywhere, Anytime',
          description:
            'Stay productive on the go. Reply to emails, access presentations, or host a video conference from anywhere effortlessly.'
        },
        {
          title: 'AI-Powered Productivity (Zia)',
          description:
            'Leverage built-in AI for writing assistance in terms of grammar, readability and writing style while you work on Writer or Sheet.'
        }
      ]
    },
    {
      id: 'growth',
      label: 'Standard Features',
      headline: 'Unlock Your Business Growth with Zoho Workplace',
      description:
        'Zoho Workplace unifies email, collaboration, and productivity tools to streamline your business operations. Enable smarter teamwork and drive growth with a single platform.',
      image: '/output/generated-assets/ds_1778089223494_5a7ebced/15-473c14de05.jpg',
      features: [
        {
          title: 'Ideal For Your Business Size',
          description:
            'Designed for any organization, Zoho Workplace enhances efficiency and teamwork at every scale.'
        },
        {
          title: 'Communicate Effectively',
          description:
            'Go beyond email and chat, and connect teams with a social intranet using channels, feeds, and groups.'
        },
        {
          title: 'Integrated Business Apps',
          description:
            'Connect with Zoho and third-party apps to unify workflows, eliminate silos, and streamline processes across your business.'
        },
        {
          title: 'Customizable Workspace',
          description:
            'Customize settings, layouts, workflows to fit your needs. Also, get a professional, ad-free email service & advanced controls.'
        }
      ]
    },
    {
      id: 'apps',
      label: 'Additional Features',
      headline: 'Integrate with Popular Apps',
      description:
        'Connect your Zoho Workplace with other business apps to ensure higher productivity and growth - all within a unified workspace.',
      image: '/output/generated-assets/ds_1778089223494_5a7ebced/25-3921942fc4.jpeg',
      features: [
        { title: 'Zoho Apps', description: 'Zoho Meeting, Zoho Connect, Zoho Mail, Zoho Cliq, Zoho Writer, etc.' },
        { title: 'Analytics', description: 'Zoho Analytics, Google Analytics' },
        { title: 'Accounting & Finance', description: 'Zoho Invoice & Zoho Books' },
        { title: 'Automation', description: 'Zoho Flow, Zapier, viaSocket' },
        { title: 'Business Suites', description: 'Zoho One, Zoho Workspace' }
      ]
    },
    {
      id: 'performance',
      label: 'Insight',
      headline: 'Performance Beyond Limits with Zoho Workplace',
      description: '',
      image: '/output/generated-assets/ds_1778089223494_5a7ebced/26-b32757542d.jpeg',
      features: [
        {
          title: 'Secure',
          description:
            '82.9% of users reported a secure email experience, ensuring strong data protection, and safe and reliable communication.'
        },
        {
          title: 'Anywhere Access',
          description:
            '42.9% of them found it easier to work remotely with Zoho Workplace apps, enabling seamless access from any device, anywhere.'
        },
        {
          title: 'Intuitive',
          description:
            '28.6% found Zoho Workplace easy to use, reducing the learning curve. Teams can quickly adapt and work efficiently.'
        },
        {
          title: 'Collaborative',
          description:
            '14.3% of them saw improved collaboration, engagement and productivity, helping teams stay aligned and get more done faster.'
        }
      ]
    },
    {
      id: 'secure',
      label: 'Price Plan Includes',
      headline: 'Create a Secure Digital Workspace',
      description:
        'Enjoy privacy-first, enterprise-grade cloud capabilities with strong spam protection, SSO, Directory, MFA, and a secure password manager.',
      image: '/output/generated-assets/ds_1778089223494_5a7ebced/27-26fc6b7064.jpeg',
      features: [
        {
          title: 'Zoho Workplace Price Plan Includes',
          description:
            'Enterprise-Grade Custom Email; Migration Assistance; Collaborative Office Suite; 30-GB Mail Storage Per User; File Storage Starts at 100 GB Per Team; File Sharing & Permissions; Team Chat; Document Management; Supported Device: Android, iOS, Windows, Mac'
        }
      ]
    }
  ];

  const testimonials = [
    {
      quote:
        'Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.',
      author: 'Amit Kapoor',
      role: 'IT Manager',
      avatar: '/output/generated-assets/ds_1778089223494_5a7ebced/11-a1af876bc5.png'
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      author: 'Saurav Singh',
      role: 'Head of Operations',
      avatar: '/output/generated-assets/ds_1778089223494_5a7ebced/13-01fc6c95c0.jpg'
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      author: 'Shrimi Manchanda',
      role: 'Operations Manager',
      avatar: '/output/generated-assets/ds_1778089223494_5a7ebced/11-a1af876bc5.png'
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      author: 'Shweta Thakur',
      role: 'Senior System Administrator',
      avatar: '/output/generated-assets/ds_1778089223494_5a7ebced/13-01fc6c95c0.jpg'
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      author: 'Narinder Sahni',
      role: 'IT Head',
      avatar: '/output/generated-assets/ds_1778089223494_5a7ebced/11-a1af876bc5.png'
    }
  ];

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--accent-glow', 'rgba(228,41,43,0.14)');

    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const scripts = [
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/SplitText.min.js'
    ];

    const loaded = [];
    scripts.forEach((src) => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        document.body.appendChild(s);
        loaded.push(s);
      }
    });

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const gsap = window.gsap;
          const ScrollTrigger = window.ScrollTrigger;
          gsap.registerPlugin(ScrollTrigger);

          let glow = document.querySelector('.cursor-glow');
          if (!glow) {
            glow = document.createElement('div');
            glow.className = 'cursor-glow';
            document.body.appendChild(glow);
          }

          const moveHandler = (e) => {
            gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
          };
          window.addEventListener('mousemove', moveHandler);

          gsap.utils.toArray('.scene-expand').forEach((scene) => {
            gsap.to(scene, {
              width: '100%',
              borderRadius: '0px',
              ease: 'none',
              scrollTrigger: {
                trigger: scene,
                start: 'top 80%',
                end: 'top 20%',
                scrub: 1.2
              }
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
                  scrub: 1.2
                }
              });
            }
          });

          gsap.utils.toArray('.zoom-reveal').forEach((el) => {
            const media = el.querySelector('img, video');
            if (!media) return;
            gsap.to(media, {
              scale: 1,
              ease: 'power2.out',
              duration: 1.2,
              scrollTrigger: {
                trigger: el,
                start: 'top 85%',
                toggleActions: 'play none none reverse'
              }
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
                scrub: true
              }
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
                scrub: 2
              }
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
                toggleActions: 'play none none reverse'
              }
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
                toggleActions: 'play none none none'
              }
            });
          });

          gsap.utils.toArray('.split-text').forEach((el) => {
            if (el.dataset.splitDone) return;
            const text = el.textContent || '';
            el.dataset.splitDone = 'true';
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
                toggleActions: 'play none none none'
              }
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
                toggleActions: 'play none none reverse'
              }
            });
          });

          document.querySelectorAll('.btn-magnetic').forEach((btn) => {
            if (btn.dataset.magInit) return;
            btn.dataset.magInit = 'true';
            btn.addEventListener('mousemove', (e) => {
              const rect = btn.getBoundingClientRect();
              const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
              const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
              gsap.to(btn, { x, y, duration: 0.4, ease: 'power2.out' });
            });
            btn.addEventListener('mouseleave', () => {
              gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
            });
          });

          gsap.utils.toArray('[data-count]').forEach((el) => {
            const target = parseFloat(el.dataset.count);
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            if (Number.isNaN(target)) return;
            gsap.from({ val: 0 }, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              snap: { val: 1 },
              scrollTrigger: { trigger: el, start: 'top 80%', once: true },
              onUpdate: function () {
                el.textContent = prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
              }
            });
          });

          window.__landingMoveHandler = moveHandler;
        });
      });
    };

    const gsapTimer = setTimeout(initGSAP, 700);

    return () => {
      observer.disconnect();
      clearTimeout(gsapTimer);
      if (window.__landingMoveHandler) {
        window.removeEventListener('mousemove', window.__landingMoveHandler);
      }
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};--text:#111827;--muted:#4b5563;--border:#e5e7eb;--card:#ffffff;--soft:#f8fafc}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:${bodyBg};color:var(--text);font-family:Inter,sans-serif}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .lp{background:${bodyBg};overflow:hidden}
    .container{width:min(1180px,calc(100% - 40px));margin:0 auto;position:relative;z-index:2}
    .section{padding:88px 0;position:relative}
    .bg-white{background:#ffffff}
    .bg-soft{background:#f8fafc}
    .main_header{position:sticky;top:0;z-index:50;background:rgba(17,24,39,.82);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-bar{display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:18px;padding:16px 0}
    .logo{display:flex;align-items:center;gap:12px}
    .brand-mark{font-weight:800;font-size:20px;color:var(--accent);font-family:"Plus Jakarta Sans",sans-serif}
    .techjockey-lockup{display:flex;align-items:center;justify-content:center}
    .animated-cta,.ghost-btn,.tab-btn,.nav-btn,.slider-btn{
      transition:transform .25s ease,box-shadow .25s ease,background .25s ease,border-color .25s ease,color .25s ease;
    }
    .animated-cta{
      display:inline-flex;align-items:center;justify-content:center;padding:13px 24px;border-radius:12px;
      background:var(--accent);color:#fff;font-weight:700;border:1px solid var(--accent);box-shadow:0 10px 30px rgba(228,41,43,.2)
    }
    .animated-cta:hover,.ghost-btn:hover,.tab-btn:hover,.slider-btn:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(0,0,0,.12)}
    .ghost-btn{
      display:inline-flex;align-items:center;justify-content:center;padding:13px 22px;border-radius:12px;
      background:rgba(255,255,255,.08);color:#fff;font-weight:700;border:1px solid rgba(255,255,255,.22)
    }
    .hero{min-height:100vh;display:flex;align-items:center;color:#fff;position:relative;background:#0d1117}
    .hero-media-bg{position:absolute;inset:0;overflow:hidden}
    .hero-media-bg video{width:100%;height:100%;object-fit:cover;display:block}
    .hero-overlay{position:absolute;inset:0;background:transparent}
    .precision-lines:before,.precision-lines:after{
      content:'';position:absolute;border:1px solid rgba(255,255,255,.08);pointer-events:none;border-radius:28px
    }
    .precision-lines:before{inset:40px 40px auto auto;width:240px;height:240px}
    .precision-lines:after{inset:auto auto 50px 20px;width:180px;height:180px}
    .banner_wrap{padding:96px 0 70px;position:relative;width:100%}
    .hero-grid{display:grid;grid-template-columns:1.06fr .94fr;gap:42px;align-items:center}
    .banner-title{font-family:"Plus Jakarta Sans",sans-serif;font-size:64px;line-height:1.03;letter-spacing:-.03em;font-weight:800;margin:0 0 18px;max-width:720px}
    .banner-content{font-size:18px;line-height:1.7;color:rgba(255,255,255,.86);max-width:650px}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${accent} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 28px}
    .chip{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.16);font-size:13px;color:#fff}
    .chip svg{width:16px;height:16px;color:${accent};flex:none}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center}
    .form-card{
      width:100%;max-width:440px;background:rgba(255,255,255,.96);color:#111827;border-radius:24px;padding:26px;
      box-shadow:0 30px 80px rgba(0,0,0,.28);border:1px solid rgba(255,255,255,.55)
    }
    .form-title{font-family:"Plus Jakarta Sans",sans-serif;font-size:28px;line-height:1.2;margin:0 0 10px;font-weight:800}
    .form-sub{font-size:14px;line-height:1.6;color:#4b5563;margin:0 0 18px}
    .lead_form{display:grid;gap:14px}
    .form-control{
      width:100%;height:50px;padding:0 14px;border:1px solid var(--border);border-radius:12px;background:#fff;
      color:#111827;outline:none;font-size:15px
    }
    .form-control:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(228,41,43,.12)}
    .full-btn{width:100%}
    .trust-grid-wrap{display:grid;grid-template-columns:280px 1fr;gap:28px;align-items:center}
    .trust-stat-card{
      background:#fff;border:1px solid var(--border);border-radius:20px;padding:24px;box-shadow:0 4px 24px rgba(0,0,0,.06)
    }
    .trust-kicker{font-size:13px;text-transform:uppercase;letter-spacing:.12em;color:var(--muted);margin-bottom:8px;font-weight:700}
    .trust-big{font-family:"Plus Jakarta Sans",sans-serif;font-size:46px;font-weight:800;line-height:1;color:var(--text)}
    .trust-big small{font-size:26px}
    .trust-copy{color:var(--muted);font-size:15px;line-height:1.7;margin-top:10px}
    .logo-grid{display:grid;grid-template-columns:repeat(5,minmax(0,1fr));gap:14px}
    .logo-card{
      height:72px;max-height:72px;background:#fff;border:1px solid var(--border);border-radius:16px;display:flex;
      align-items:center;justify-content:center;padding:14px;box-shadow:0 4px 24px rgba(0,0,0,.04)
    }
    .logo-card img{max-height:32px;filter:grayscale(1);opacity:.8;transition:filter .25s ease,opacity .25s ease,transform .25s ease}
    .logo-card:hover img{filter:grayscale(0);opacity:1;transform:scale(1.03)}
    .section-head{display:flex;justify-content:space-between;gap:20px;align-items:end;margin-bottom:28px}
    .section-tag{
      display:inline-flex;align-items:center;padding:7px 12px;border-radius:999px;background:${accent}14;border:1px solid ${accent}40;
      color:var(--accent);font-size:12px;font-weight:700;letter-spacing:.08em;text-transform:uppercase
    }
    .section h2{font-family:"Plus Jakarta Sans",sans-serif;font-size:42px;line-height:1.12;margin:14px 0 10px;font-weight:800;color:#111827}
    .section p.section-desc{font-size:16px;line-height:1.8;color:var(--muted);max-width:780px;margin:0}
    .feature-split{display:grid;grid-template-columns:1fr 1fr;gap:44px;align-items:center}
    .feature-split.reverse .feature-text{order:1}
    .feature-split.reverse .feature-media{order:2}
    .browser-frame{
      display:flex;flex-direction:column;overflow:hidden;border-radius:22px;border:1px solid var(--border);background:#f8f8f8;
      box-shadow:0 18px 48px rgba(17,24,39,.08)
    }
    .browser-top{height:42px;display:flex;align-items:center;gap:8px;padding:0 16px;border-bottom:1px solid var(--border);background:#fff}
    .dot{width:10px;height:10px;border-radius:50%;background:#d1d5db}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .tab-shell{
      background:#fff;border:1px solid var(--border);border-radius:24px;padding:24px;box-shadow:0 4px 24px rgba(0,0,0,.06)
    }
    .tab-buttons{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:18px}
    .tab-btn{
      padding:12px 14px;border:1px solid var(--border);border-radius:12px;background:#fff;color:#111827;font-weight:700;cursor:pointer;text-align:left
    }
    .tab-btn.active{background:${accent};border-color:${accent};color:#fff}
    .tab-panel{
      display:grid;grid-template-columns:58px 1fr;gap:16px;align-items:start;padding:18px;border-radius:18px;background:#f8fafc;border:1px solid #eef2f7
    }
    .icon-box{
      width:58px;height:58px;border-radius:16px;background:${accent}14;border:1px solid ${accent}40;display:flex;align-items:center;justify-content:center;color:${accent}
    }
    .icon-box svg{width:26px;height:26px}
    .tab-panel h3{margin:0 0 8px;font-family:"Plus Jakarta Sans",sans-serif;font-size:22px;line-height:1.2}
    .tab-panel p{margin:0;color:var(--muted);line-height:1.8}
    .integration-grid{
      display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px;margin-top:18px
    }
    .integration-tile{
      background:#fff;border:1px solid var(--border);border-radius:16px;padding:16px;box-shadow:0 4px 24px rgba(0,0,0,.04)
    }
    .integration-tile h4{margin:0 0 6px;font-size:16px;font-family:"Plus Jakarta Sans",sans-serif}
    .integration-tile p{margin:0;font-size:14px;line-height:1.7;color:var(--muted)}
    .metrics-row{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
    .metric-card{
      background:#fff;border:1px solid var(--border);border-radius:20px;padding:24px;box-shadow:0 4px 24px rgba(0,0,0,.05)
    }
    .metric-card .num{font-family:"Plus Jakarta Sans",sans-serif;font-size:40px;font-weight:800;line-height:1;color:#111827;margin-bottom:10px}
    .metric-card h4{margin:0 0 8px;font-size:18px;font-family:"Plus Jakarta Sans",sans-serif}
    .metric-card p{margin:0;color:var(--muted);line-height:1.7}
    .pricing-card{
      max-width:860px;margin:0 auto;background:#fff;border:1px solid var(--border);border-radius:28px;padding:30px;
      box-shadow:0 10px 36px rgba(0,0,0,.07);position:relative
    }
    .price-badge{
      display:inline-flex;align-items:center;padding:8px 12px;border-radius:999px;background:#e8f7ee;border:1px solid #b7e4c7;color:#15803d;font-size:12px;font-weight:700
    }
    .pricing-head{display:flex;justify-content:space-between;gap:18px;align-items:start;margin:14px 0 24px;flex-wrap:wrap}
    .pricing-head h3{margin:0;font-family:"Plus Jakarta Sans",sans-serif;font-size:34px;line-height:1.1}
    .price-box{display:flex;align-items:end;gap:12px;flex-wrap:wrap}
    .price-old{color:#9ca3af;text-decoration:line-through;font-size:18px}
    .price-new{font-family:"Plus Jakarta Sans",sans-serif;font-size:42px;font-weight:800;line-height:1}
    .price-includes{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:18px 0 22px}
    .check-item{
      display:flex;gap:10px;align-items:flex-start;padding:12px 14px;border:1px solid var(--border);border-radius:14px;background:#f8fafc;color:#111827
    }
    .check-item svg{width:18px;height:18px;flex:none;color:${accent};margin-top:2px}
    .testimonial-shell{
      background:#fff;border:1px solid var(--border);border-radius:28px;box-shadow:0 8px 30px rgba(0,0,0,.05);overflow:hidden
    }
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-item{min-width:100%;padding:36px}
    .quote-mark{font-size:54px;line-height:1;color:${accent};font-family:"Plus Jakarta Sans",sans-serif;font-weight:800}
    .quote-text{font-size:22px;line-height:1.7;color:#111827;margin:0 0 20px}
    .author-row{display:flex;align-items:center;gap:14px}
    .author-row img{width:58px;height:58px;border-radius:50%;object-fit:cover;border:2px solid #fff;box-shadow:0 6px 16px rgba(0,0,0,.08)}
    .author-meta strong{display:block;font-size:16px}
    .author-meta span{display:block;font-size:14px;color:#6b7280}
    .stars{color:#f4b400;letter-spacing:2px;font-size:18px;margin-bottom:10px}
    .slider-nav{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:0 4px;margin-top:18px}
    .slider-dots{display:flex;gap:8px;justify-content:center;align-items:center}
    .slider-dots button{
      width:8px;height:8px;border-radius:999px;border:none;background:#d1d5db;cursor:pointer;transition:all .3s ease;padding:0
    }
    .slider-dots button.active{width:24px;background:${accent}}
    .slider-btn{
      width:42px;height:42px;border-radius:999px;border:1px solid var(--border);background:#fff;color:#111827;display:flex;align-items:center;justify-content:center;cursor:pointer
    }
    .final-cta-box{
      background:linear-gradient(180deg,#fff, #f8fafc);border:1px solid var(--border);border-radius:28px;padding:36px;
      box-shadow:0 6px 30px rgba(0,0,0,.05);text-align:center
    }
    .footer{
      background:#111827;color:#fff;padding:48px 0 26px
    }
    .footer-top{display:grid;grid-template-columns:1.2fr 1fr auto;gap:24px;align-items:center;padding-bottom:24px;border-bottom:1px solid rgba(255,255,255,.1)}
    .footer-mail{color:rgba(255,255,255,.85)}
    .footer-links,.social-links{display:flex;gap:14px;flex-wrap:wrap;align-items:center}
    .footer-links a{color:rgba(255,255,255,.82)}
    .social-links a{
      width:38px;height:38px;border-radius:999px;border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;color:#fff;background:rgba(255,255,255,.04)
    }
    .footer-bottom{display:flex;justify-content:space-between;gap:18px;flex-wrap:wrap;padding-top:20px;color:rgba(255,255,255,.72);font-size:14px}
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
    @keyframes driftLeft{0%,100%{transform:translateX(0) translateY(0)}33%{transform:translateX(-12px) translateY(-8px)}66%{transform:translateX(8px) translateY(-14px)}}
    .float-ambient{animation:floatY 6s ease-in-out infinite}
    .float-drift{animation:driftLeft 10s ease-in-out infinite}
    .stagger-parent>*{opacity:0;transform:translateY(32px);will-change:opacity,transform}
    .cursor-glow{
      position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);
      background:radial-gradient(circle,var(--accent-glow, rgba(228,41,43,.12)) 0%, transparent 70%);transition:opacity .3s ease
    }
    .glass-card{
      background:rgba(255,255,255,.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);
      border:1px solid rgba(255,255,255,.1);border-radius:20px
    }
    @media (max-width: 1080px){
      .banner-title{font-size:54px}
      .hero-grid,.feature-split,.trust-grid-wrap{grid-template-columns:1fr}
      .hero-visual{min-height:auto}
      .logo-grid{grid-template-columns:repeat(3,minmax(0,1fr))}
      .metrics-row,.price-includes{grid-template-columns:repeat(2,minmax(0,1fr))}
      .footer-top{grid-template-columns:1fr}
    }
    @media (max-width: 768px){
      .container{width:min(100% - 24px,1180px)}
      .nav-bar{grid-template-columns:1fr auto;gap:12px}
      .nav-bar .nav-cta{grid-column:1/-1}
      .banner_wrap{padding:78px 0 40px}
      .banner-title{font-size:42px}
      .section{padding:68px 0}
      .section h2{font-size:32px}
      .tab-panel{grid-template-columns:1fr}
      .metrics-row,.price-includes,.logo-grid,.integration-grid{grid-template-columns:1fr}
      .browser-frame img{height:300px}
      .testimonial-item{padding:24px}
      .quote-text{font-size:18px}
      .pricing-head h3{font-size:28px}
      .price-new{font-size:34px}
      .hero-actions{flex-direction:column;align-items:stretch}
      .hero-actions a{width:100%}
    }
  `;

  const renderIcon = (index) => {
    const icons = [
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" key="1"><path d="M4 7h16M4 12h16M4 17h10"/><rect x="3" y="4" width="18" height="16" rx="2"/></svg>,
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" key="2"><path d="M8 12h8M12 8v8"/><rect x="3" y="3" width="18" height="18" rx="4"/></svg>,
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" key="3"><path d="M4 19V5l8 6 8-6v14z"/></svg>,
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" key="4"><path d="M12 3l8 4v5c0 5-3.5 8-8 9-4.5-1-8-4-8-9V7l8-4z"/></svg>,
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" key="5"><path d="M12 20V10"/><path d="M18 20V4"/><path d="M6 20v-6"/></svg>
    ];
    return icons[index % icons.length];
  };

  return (
    <div className="lp" ref={pageRef}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <header className="main_header">
        <div className="container">
          <div className="nav-bar">
            <div className="logo">
              <span className="brand-mark">Zoho Workplace</span>
            </div>
            <div className="techjockey-lockup">
              <img
                src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
                height="28px"
                alt="Techjockey"
              />
            </div>
            <div className="nav-cta" style={{ justifySelf: 'end' }}>
              <a href="#lead-form" className="animated-cta btn-magnetic">Get Free Consultation</a>
            </div>
          </div>
        </div>
      </header>

      <section className="hero precision-lines" id="home">
        <div className="hero-media-bg depth-background hero-cinematic-bg" data-depth="0.4">
          <video autoPlay muted loop playsInline preload="auto">
            <source src="/output/generated-assets/ds_1778089223494_5a7ebced/16-7f9baae9a1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="container banner_wrap">
          <div className="hero-grid">
            <div className="banner-text depth-foreground" data-depth="0.15">
              <div className="section-tag reveal">Email &amp; Collaboration Suite</div>
              <h1 className="banner-title split-text reveal">
                Elevate Your Team’s Productivity with Zoho Workplace
              </h1>
              <p className="banner-content reveal reveal-delay-1">
                A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified Communication.
              </p>

              <div className="chips reveal reveal-delay-2">
                {heroChips.map((chip, i) => (
                  <div className="chip" key={i}>
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{chip}</span>
                  </div>
                ))}
              </div>

              <div className="hero-actions reveal reveal-delay-3">
                <a href="#lead-form" className="animated-cta btn-magnetic">Get Free Consultation</a>
                <a href="#pricing" className="ghost-btn">Get Started</a>
              </div>
            </div>

            <div className="hero-visual">
              <div className="form-card float-ambient" id="lead-form">
                <h3 className="form-title">Get Free Consultation</h3>
                <p className="form-sub">
                  A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified Communication.
                </p>
                <form className="lead_form" onSubmit={(e) => e.preventDefault()}>
                  <input className="form-control" type="text" placeholder="Name" />
                  <input className="form-control" type="email" placeholder="Email" />
                  <input className="form-control" type="tel" placeholder="Phone" />
                  <input className="form-control" type="text" placeholder="Company" />
                  <button type="submit" className="animated-cta full-btn">Get Free Consultation</button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft clip-reveal" id="trust">
        <div className="container">
          <div className="trust-grid-wrap">
            <div className="trust-stat-card reveal">
              <div className="trust-kicker">Trusted Customer Count</div>
              <div className="trust-big" data-count="100000" data-suffix="+">100,000+</div>
              <div className="trust-copy">Trusted by 100,000+ Businesses Globally</div>
            </div>
            <div>
              <div className="section-head">
                <div>
                  <div className="section-tag reveal">Proof Led</div>
                  <h2 className="reveal">Trusted by <span className="gradient-text">100,000+</span> Businesses Globally</h2>
                </div>
              </div>
              <div className="logo-grid stagger-parent">
                {trustLogos.map((logo, i) => (
                  <div className="logo-card" key={i}>
                    <img src={logo} alt={`Trust logo ${i + 1}`} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white" id="products">
        <div className="container">
          <div className="feature-split">
            <div className="feature-media scene-expand reveal" data-depth="0.25">
              <div className="zoom-reveal browser-frame">
                <div className="browser-top">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                </div>
                <img src={sections[0].image} alt={sections[0].headline} />
              </div>
            </div>
            <div className="feature-text">
              <div className="section-tag reveal">{sections[0].label}</div>
              <h2 className="reveal">{sections[0].headline}</h2>
              <p className="section-desc reveal reveal-delay-1">{sections[0].description}</p>
              <div className="tab-shell reveal reveal-delay-2">
                <div className="tab-buttons">
                  {sections[0].features.map((item, idx) => (
                    <button
                      key={idx}
                      className={`tab-btn ${activeTab1 === idx ? 'active' : ''}`}
                      onClick={() => setActiveTab1(idx)}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
                <div className="tab-panel">
                  <div className="icon-box">{renderIcon(activeTab1)}</div>
                  <div>
                    <h3>{sections[0].features[activeTab1].title}</h3>
                    <p>{sections[0].features[activeTab1].description}</p>
                  </div>
                </div>
              </div>
              <div style={{ marginTop: '20px' }}>
                <a href="#lead-form" className="animated-cta btn-magnetic">Get Free Consultation</a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft pin-scene" id="proof">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-tag reveal">{sections[3].label}</div>
              <h2 className="reveal">{sections[3].headline}</h2>
            </div>
          </div>
          <div className="metrics-row stagger-parent">
            {sections[3].features.map((item, i) => {
              const countVal = item.title === 'Secure' ? 82.9 : item.title === 'Anywhere Access' ? 42.9 : item.title === 'Intuitive' ? 28.6 : 14.3;
              return (
                <div className="metric-card" key={i} data-depth="0.15">
                  <div className="num" data-count={countVal} data-suffix="%">{countVal}%</div>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="section bg-white" id="integration">
        <div className="container">
          <div className="feature-split reverse">
            <div className="feature-text">
              <div className="section-tag reveal">{sections[2].label}</div>
              <h2 className="reveal">{sections[2].headline}</h2>
              <p className="section-desc reveal reveal-delay-1">{sections[2].description}</p>
              <div className="tab-shell reveal reveal-delay-2">
                <div className="tab-buttons">
                  {sections[2].features.map((item, idx) => (
                    <button
                      key={idx}
                      className={`tab-btn ${activeTab3 === idx ? 'active' : ''}`}
                      onClick={() => setActiveTab3(idx)}
                    >
                      {item.title}
                    </button>
                  ))}
                </div>
                <div className="tab-panel">
                  <div className="icon-box">{renderIcon(activeTab3)}</div>
                  <div>
                    <h3>{sections[2].features[activeTab3].title}</h3>
                    <p>{sections[2].features[activeTab3].description}</p>
                  </div>
                </div>
                <div className="integration-grid">
                  {sections[2].features.map((item, idx) => (
                    <div className="integration-tile" key={idx}>
                      <h4>{item.title}</h4>
                      <p>{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
            <div className="feature-media scene-expand reveal" data-depth="0.22">
              <div className="zoom-reveal browser-frame">
                <div className="browser-top">
                  <span className="dot" /><span className="dot" /><span className="dot" />
                </div>
                <img src={sections[2].image} alt={sections[2].headline} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft" id="pricing">
        <div className="container">
          <div className="section-head" style={{ justifyContent: 'center', textAlign: 'center' }}>
            <div>
              <div className="section-tag reveal">Highlighted Card</div>
              <h2 className="reveal">Create a Secure <span className="gradient-text">Digital Workspace</span></h2>
              <p className="section-desc reveal reveal-delay-1" style={{ margin: '0 auto' }}>
                Enjoy privacy-first, enterprise-grade cloud capabilities with strong spam protection, SSO, Directory, MFA, and a secure password manager.
              </p>
            </div>
          </div>

          <div className="pricing-card reveal reveal-delay-2">
            <span className="price-badge">Price Plan Includes</span>
            <div className="pricing-head">
              <div>
                <h3>Zoho Workplace</h3>
              </div>
              <div className="price-box">
                <span className="price-old">was</span>
                <span className="price-new">Zoho Workplace</span>
              </div>
            </div>
            <div className="price-includes">
              {[
                'Enterprise-Grade Custom Email',
                'Migration Assistance',
                'Collaborative Office Suite',
                '30-GB Mail Storage Per User',
                'File Storage Starts at 100 GB Per Team',
                'File Sharing & Permissions',
                'Team Chat',
                'Document Management',
                'Supported Device: Android, iOS, Windows, Mac'
              ].map((item, i) => (
                <div className="check-item" key={i}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <a href="#lead-form" className="animated-cta full-btn btn-magnetic">Get Free Consultation</a>
          </div>
        </div>
      </section>

      <section className="section bg-white" id="testimonials">
        <div className="container">
          <div className="section-head">
            <div>
              <div className="section-tag reveal">Testimonials</div>
              <h2 className="reveal">What Teams Say About <span className="gradient-text">Zoho Workplace</span></h2>
            </div>
          </div>

          <div className="testimonial-shell reveal reveal-delay-1">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((item, i) => (
                <div className="testimonial-item" key={i}>
                  <div className="quote-mark">❝</div>
                  <div className="stars">★★★★★</div>
                  <p className="quote-text">{item.quote}</p>
                  <div className="author-row">
                    <img src={item.avatar} alt={item.author} />
                    <div className="author-meta">
                      <strong>{item.author}</strong>
                      <span>{item.role}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-nav">
            <button
              className="slider-btn"
              onClick={() => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
              aria-label="Previous"
            >
              ‹
            </button>
            <div className="slider-dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={i === activeSlide ? 'active' : ''}
                  onClick={() => setActiveSlide(i)}
                  aria-label={`Go to slide ${i + 1}`}
                />
              ))}
            </div>
            <button
              className="slider-btn"
              onClick={() => setActiveSlide((prev) => (prev + 1) % testimonials.length)}
              aria-label="Next"
            >
              ›
            </button>
          </div>
        </div>
      </section>

      <section className="section bg-soft" id="final-cta">
        <div className="container">
          <div className="final-cta-box reveal">
            <div className="section-tag" style={{ margin: '0 auto 14px' }}>Unified Communication</div>
            <h2>Elevate Your Team’s Productivity with <span className="gradient-text">Zoho Workplace</span></h2>
            <p className="section-desc" style={{ margin: '0 auto 24px' }}>
              A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified Communication.
            </p>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div>
              <img
                src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
                height="28px"
                alt="Techjockey"
              />
            </div>
            <a href="mailto:support@techjockey.com" className="footer-mail">support@techjockey.com</a>
            <div className="social-links">
              <a href="https://www.facebook.com/Techjockey/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H17V4.8c-.3 0-1.4-.1-2.6-.1-2.6 0-4.4 1.6-4.4 4.5V11H7v3h3.4v8h3.1z" /></svg>
              </a>
              <a href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm5.25-3.15a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" /></svg>
              </a>
              <a href="https://x.com/TechjockeyInfo" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.3L6.6 22H3.5l7.3-8.3L1 2h6.3l4.3 5.8L18.9 2zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20z" /></svg>
              </a>
              <a href="https://www.linkedin.com/company/techjockey-com/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 12.52c0-3.26-1.74-4.78-4.07-4.78a3.52 3.52 0 0 0-3.17 1.74V8.5H9.81c.04.65 0 11.5 0 11.5h3.39v-6.42c0-.34.02-.68.13-.92.27-.68.88-1.39 1.91-1.39 1.35 0 1.89 1.03 1.89 2.54V20H20.5z" /></svg>
              </a>
            </div>
          </div>
          <div className="footer-bottom">
            <div>© 2024 Techjockey Infotech Pvt. Ltd.</div>
            <div className="footer-links">
              <a href="https://www.techjockey.com/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
              <a href="https://www.techjockey.com/terms-and-conditions" target="_blank" rel="noreferrer">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;