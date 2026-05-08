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
            if (Number.isNaN(target) || target < 0) return;
            gsap.from({ val: 0 }, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              snap: { val: 1 },
              scrollTrigger: { trigger: el, start: 'top 80%', once: true },
              onUpdate: function () {
                const current = Math.max(0, Math.round(this.targets()[0].val));
                el.textContent = prefix + current.toLocaleString() + suffix;
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
      loaded.forEach((s) => {
        if (s && s.parentNode) s.parentNode.removeChild(s);
      });
    };
  }, [accent, primary]);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};--text:#111827;--muted:#4b5563;--border:#e5e7eb;--card:#ffffff;--soft:#f8fafc;--topStripH:76px}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:${bodyBg};color:var(--text);font-family:Inter,sans-serif}
    a{text-decoration:none;color:inherit}
    img,video{max-width:100%}
    .lp{background:${bodyBg};overflow:hidden;padding-top:var(--topStripH)}
    .container{width:min(1180px,calc(100% - 40px));margin:0 auto;position:relative;z-index:2}
    .section{padding:72px 0;position:relative;scroll-margin-top:calc(var(--topStripH) + 16px)}
    .bg-white{background:#ffffff}
    .bg-soft{background:#f8fafc}
    .main_header{position:fixed;top:0;left:0;right:0;width:100%;z-index:999;background:rgba(17,24,39,.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-bar{display:grid;grid-template-columns:1fr auto auto;align-items:center;gap:18px;padding:14px 0;min-height:var(--topStripH)}
    .logo{display:flex;align-items:center;gap:12px}
    .brand-mark{font-weight:800;font-size:20px;color:var(--accent);font-family:"Plus Jakarta Sans",sans-serif}
    .techjockey-lockup{display:flex;align-items:center;justify-content:center}
    .nav-links{display:flex;align-items:center;gap:22px;color:#fff}
    .nav-link{font-size:14px;color:rgba(255,255,255,.84)}
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
    .hero{min-height:calc(100vh - var(--topStripH));display:flex;align-items:center;color:#fff;position:relative;background:#0d1117}
    .hero-media-bg{position:absolute;inset:0;overflow:hidden}
    .hero-media-bg img,.hero-media-bg video{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.08)}
    .hero-overlay{position:absolute;inset:0;background:linear-gradient(90deg,rgba(8,12,20,.88) 0%,rgba(8,12,20,.72) 42%,rgba(8,12,20,.46) 100%)}
    .precision-lines:before,.precision-lines:after{
      content:'';position:absolute;border:1px solid rgba(255,255,255,.08);pointer-events:none;border-radius:28px
    }
    .precision-lines:before{inset:40px 40px auto auto;width:240px;height:240px}
    .precision-lines:after{inset:auto auto 50px 20px;width:180px;height:180px}
    .banner_wrap{padding:88px 0 60px;position:relative;width:100%}
    .hero-grid{display:grid;grid-template-columns:1.08fr .92fr;gap:34px;align-items:center}
    .banner-title{font-family:"Plus Jakarta Sans",sans-serif;font-size:64px;line-height:1.03;letter-spacing:-.03em;font-weight:800;margin:0 0 16px;max-width:760px}
    .banner-content{font-size:18px;line-height:1.7;color:rgba(255,255,255,.86);max-width:650px}
    .gradient-text{background:linear-gradient(135deg,#ffffff 0%,#ffd9d9 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:22px 0 24px}
    .chip{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;background:rgba(255,255,255,.09);border:1px solid rgba(255,255,255,.16);font-size:13px;color:#fff}
    .chip svg{width:16px;height:16px;color:${accent};flex:none}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center}
    .form-card{
      width:100%;max-width:440px;background:rgba(255,255,255,.97);color:#111827;border-radius:24px;padding:26px;
      box-shadow:0 30px 80px rgba(0,0,0,.28);border:1px solid rgba(255,255,255,.55)
    }
    .form-title{font-family:"Plus Jakarta Sans",sans-serif;font-size:28px;line-height:1.2;margin:0 0 10px;font-weight:800}
    .form-sub{font-size:14px;line-height:1.6;color:#4b5563;margin:0 0 18px}
    .lead_form{display:grid;gap:14px}
    .form-control{
      width:100%;height:50px;padding:0 14px;border:1px solid var(--border);border-radius:12px;background:#fff;
      color:#111827;outline:none;font-size:15px
    }
    textarea.form-control{height:100px;padding:14px;resize:vertical}
    .form-control:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(228,41,43,.12)}
    .full-btn{width:100%}
    .trust-grid-wrap{display:grid;grid-template-columns:280px 1fr;gap:24px;align-items:center}
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
    .logo-card:hover img{filter:none;opacity:1;transform:scale(1.04)}
    .section-head{display:flex;justify-content:space-between;gap:20px;align-items:end;margin-bottom:26px}
    .eyebrow{display:inline-flex;padding:8px 12px;border-radius:999px;background:rgba(228,41,43,.08);color:var(--accent);font-size:12px;font-weight:800;letter-spacing:.08em;text-transform:uppercase}
    .section-title{font-family:"Plus Jakarta Sans",sans-serif;font-size:42px;line-height:1.08;letter-spacing:-.03em;margin:12px 0 0;font-weight:800}
    .section-copy{font-size:16px;line-height:1.75;color:var(--muted);max-width:720px}
    .feature-wrap{display:grid;grid-template-columns:1.02fr .98fr;gap:28px;align-items:center}
    .feature-media{
      position:relative;overflow:hidden;border-radius:26px;min-height:460px;background:#111827;
      box-shadow:0 18px 50px rgba(0,0,0,.12)
    }
    .feature-media img{width:100%;height:100%;object-fit:cover;display:block;transform:scale(1.04)}
    .feature-overlay{position:absolute;inset:0;background:linear-gradient(180deg,rgba(17,24,39,.08),rgba(17,24,39,.34))}
    .feature-list{display:flex;flex-direction:column;gap:14px}
    .feature-card{
      background:#fff;border:1px solid var(--border);border-radius:20px;padding:20px;box-shadow:0 8px 30px rgba(0,0,0,.05)
    }
    .feature-card h3{margin:0 0 8px;font-size:20px;line-height:1.3;font-family:"Plus Jakarta Sans",sans-serif}
    .feature-card p{margin:0;color:var(--muted);font-size:15px;line-height:1.7}
    .tabs-row{display:flex;flex-wrap:wrap;gap:10px;margin-bottom:18px}
    .tab-btn{
      border:1px solid var(--border);background:#fff;color:#111827;border-radius:999px;padding:10px 16px;font-weight:700;cursor:pointer
    }
    .tab-btn.active{background:var(--accent);border-color:var(--accent);color:#fff}
    .stats-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:16px}
    .stat-card{
      background:#fff;border:1px solid var(--border);border-radius:20px;padding:22px;box-shadow:0 8px 30px rgba(0,0,0,.05)
    }
    .stat-value{font-family:"Plus Jakarta Sans",sans-serif;font-size:42px;line-height:1;font-weight:800;color:var(--accent);margin-bottom:8px}
    .stat-title{font-size:18px;font-weight:800;margin-bottom:6px}
    .stat-copy{color:var(--muted);font-size:14px;line-height:1.65}
    .cta-strip{
      background:linear-gradient(135deg,#111827 0%,#1f2937 100%);color:#fff;border-radius:28px;padding:34px;
      display:grid;grid-template-columns:1fr auto;gap:20px;align-items:center;box-shadow:0 18px 50px rgba(0,0,0,.12)
    }
    .cta-strip h3{margin:0 0 8px;font-size:34px;line-height:1.12;font-family:"Plus Jakarta Sans",sans-serif}
    .cta-strip p{margin:0;color:rgba(255,255,255,.82);font-size:16px;line-height:1.7;max-width:760px}
    .testimonial-slider{
      position:relative;background:#fff;border:1px solid var(--border);border-radius:28px;padding:28px;box-shadow:0 12px 40px rgba(0,0,0,.06)
    }
    .testimonial-quote{font-size:22px;line-height:1.7;color:#111827;margin:0 0 24px;font-weight:600}
    .testimonial-foot{display:flex;align-items:center;justify-content:space-between;gap:20px}
    .author-wrap{display:flex;align-items:center;gap:14px}
    .author-wrap img{width:56px;height:56px;border-radius:999px;object-fit:cover}
    .author-name{font-size:17px;font-weight:800}
    .author-role{font-size:14px;color:var(--muted)}
    .slider-controls{display:flex;align-items:center;gap:10px}
    .slider-btn{
      width:42px;height:42px;border-radius:999px;border:1px solid var(--border);background:#fff;color:#111827;cursor:pointer;display:inline-flex;align-items:center;justify-content:center
    }
    .slider-dots{display:flex;gap:8px;justify-content:center;margin-top:18px}
    .dot{width:10px;height:10px;border-radius:999px;background:#d1d5db;border:none;cursor:pointer}
    .dot.active{background:var(--accent)}
    .footer{
      background:#0f172a;color:#fff;padding:56px 0 28px
    }
    .footer-grid{display:grid;grid-template-columns:1.2fr .8fr .8fr;gap:28px}
    .footer h4{margin:0 0 14px;font-size:17px}
    .footer p,.footer a{color:rgba(255,255,255,.76);font-size:14px;line-height:1.8}
    .footer-links{display:flex;flex-direction:column;gap:8px}
    .footer-bottom{
      margin-top:28px;padding-top:18px;border-top:1px solid rgba(255,255,255,.1);display:flex;justify-content:space-between;gap:16px;align-items:center;flex-wrap:wrap
    }
    .socials{display:flex;gap:12px}
    .socials a{
      width:38px;height:38px;border-radius:999px;display:inline-flex;align-items:center;justify-content:center;background:rgba(255,255,255,.08);color:#fff
    }
    .reveal{opacity:0;transform:translateY(24px);transition:opacity .8s ease,transform .8s ease}
    .reveal.visible{opacity:1;transform:none}
    .clip-reveal{clip-path:inset(0 0 100% 0)}
    .text-reveal-mask{overflow:hidden}
    .text-reveal-inner{transform:translateY(110%)}
    .cursor-glow{
      position:fixed;top:-120px;left:-120px;width:240px;height:240px;border-radius:999px;pointer-events:none;
      background:radial-gradient(circle,rgba(228,41,43,.12) 0%,rgba(228,41,43,0) 68%);z-index:1;mix-blend-mode:multiply
    }
    @media (max-width: 1100px){
      .hero-grid,.feature-wrap,.trust-grid-wrap,.cta-strip,.footer-grid{grid-template-columns:1fr}
      .stats-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
      .banner-title{font-size:52px}
      .hero-visual{min-height:auto}
    }
    @media (max-width: 760px){
      :root{--topStripH:70px}
      .container{width:min(1180px,calc(100% - 24px))}
      .nav-bar{grid-template-columns:1fr auto}
      .nav-links{display:none}
      .section{padding:56px 0}
      .banner_wrap{padding:62px 0 36px}
      .banner-title{font-size:38px}
      .banner-content{font-size:16px}
      .form-card{padding:20px;border-radius:20px}
      .section-title{font-size:30px}
      .feature-media{min-height:280px}
      .stats-grid{grid-template-columns:1fr}
      .cta-strip{padding:24px}
      .cta-strip h3{font-size:28px}
      .testimonial-quote{font-size:18px}
      .testimonial-foot{flex-direction:column;align-items:flex-start}
    }
  `;

  const renderFeatureSection = (section, idx) => {
    const activeTabs = [activeTab1, activeTab2, activeTab3, activeTab4, activeTab5];
    const setTabs = [setActiveTab1, setActiveTab2, setActiveTab3, setActiveTab4, setActiveTab5];
    const activeIndex = Math.min(activeTabs[idx] || 0, section.features.length - 1);
    const setActive = setTabs[idx];

    return (
      <section id={section.id} key={section.id} className={`section ${idx % 2 === 0 ? 'bg-white' : 'bg-soft'}`}>
        <div className="container">
          <div className="section-head reveal">
            <div>
              <span className="eyebrow">{section.label}</span>
              <h2 className="section-title split-text">{section.headline}</h2>
            </div>
            {section.description ? <p className="section-copy">{section.description}</p> : <div />}
          </div>

          {section.features.length > 1 ? (
            <>
              <div className="tabs-row reveal">
                {section.features.map((item, featureIdx) => (
                  <button
                    key={item.title}
                    className={`tab-btn ${activeIndex === featureIdx ? 'active' : ''}`}
                    onClick={() => setActive(featureIdx)}
                    type="button"
                  >
                    {item.title}
                  </button>
                ))}
              </div>
              <div className="feature-wrap">
                <div className="feature-media reveal zoom-reveal scene-expand">
                  <img src={section.image} alt={section.headline} />
                  <div className="feature-overlay" />
                </div>
                <div className="feature-list stagger-parent">
                  <div className="feature-card" style={{ opacity: 0, transform: 'translateY(20px)' }}>
                    <h3>{section.features[activeIndex].title}</h3>
                    <p>{section.features[activeIndex].description}</p>
                  </div>
                  {section.features
                    .filter((_, i) => i !== activeIndex)
                    .slice(0, 3)
                    .map((item) => (
                      <div
                        key={item.title}
                        className="feature-card"
                        style={{ opacity: 0, transform: 'translateY(20px)' }}
                      >
                        <h3>{item.title}</h3>
                        <p>{item.description}</p>
                      </div>
                    ))}
                </div>
              </div>
            </>
          ) : (
            <div className="feature-wrap">
              <div className="feature-media reveal zoom-reveal scene-expand">
                <img src={section.image} alt={section.headline} />
                <div className="feature-overlay" />
              </div>
              <div className="feature-list stagger-parent">
                {section.features.map((item) => (
                  <div
                    key={item.title}
                    className="feature-card"
                    style={{ opacity: 0, transform: 'translateY(20px)' }}
                  >
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    );
  };

  return (
    <>
      <style>{css}</style>
      <div className="lp" ref={pageRef}>
        <header className="main_header">
          <div className="container">
            <div className="nav-bar">
              <a href="#top" className="logo" aria-label="Techjockey Zoho Workplace">
                <div className="techjockey-lockup">
                  <span className="brand-mark">techjockey</span>
                </div>
              </a>

              <nav className="nav-links" aria-label="Primary">
                <a className="nav-link" href="#why">Features</a>
                <a className="nav-link" href="#growth">Standard Features</a>
                <a className="nav-link" href="#apps">Integrations</a>
                <a className="nav-link" href="#performance">Insight</a>
                <a className="nav-link" href="#testimonials">Testimonials</a>
              </nav>

              <a href="#lead-form" className="animated-cta nav-btn btn-magnetic">Get Free Demo</a>
            </div>
          </div>
        </header>

        <section id="top" className="hero precision-lines">
          <div className="hero-media-bg hero-cinematic-bg">
            <img src="/output/generated-assets/ds_1778089223494_5a7ebced/14-8ee9780f0b.jpg" alt="Zoho Workplace" />
          </div>
          <div className="hero-overlay" />
          <div className="container banner_wrap">
            <div className="hero-grid">
              <div className="reveal">
                <div className="text-reveal-mask">
                  <div className="text-reveal-inner">
                    <h1 className="banner-title">
                      Run your business communication smarter with <span className="gradient-text">Zoho Workplace</span>
                    </h1>
                  </div>
                </div>
                <p className="banner-content">
                  Unify email, chat, meetings, documents, and storage in a single productivity suite built to help teams
                  collaborate better and move faster.
                </p>

                <div className="chips">
                  {heroChips.map((chip) => (
                    <span className="chip" key={chip}>
                      <svg viewBox="0 0 24 24" fill="none" aria-hidden="true">
                        <path d="M20 7L10 17l-6-6" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                      {chip}
                    </span>
                  ))}
                </div>

                <div className="hero-actions">
                  <a href="#lead-form" className="animated-cta btn-magnetic">Request a Callback</a>
                  <a href="#why" className="ghost-btn">Explore Features</a>
                </div>
              </div>

              <div className="hero-visual reveal" id="lead-form">
                <div className="form-card">
                  <h2 className="form-title">Book a Free Demo</h2>
                  <p className="form-sub">
                    Get expert assistance from Techjockey to choose the right Zoho Workplace plan for your business needs.
                  </p>
                  <form className="lead_form">
                    <input className="form-control" type="text" placeholder="Your Name" />
                    <input className="form-control" type="email" placeholder="Business Email" />
                    <input className="form-control" type="tel" placeholder="Phone Number" />
                    <input className="form-control" type="text" placeholder="Company Name" />
                    <textarea className="form-control" placeholder="Tell us about your requirement" />
                    <button className="animated-cta full-btn btn-magnetic" type="submit">Submit</button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="section bg-soft">
          <div className="container">
            <div className="trust-grid-wrap">
              <div className="trust-stat-card reveal">
                <div className="trust-kicker">Trusted Choice</div>
                <div className="trust-big">
                  <span data-count="829" data-suffix="+">0+</span>
                </div>
                <div className="trust-copy">
                  Businesses rely on unified workplace solutions to streamline communication, file sharing, and team productivity.
                </div>
              </div>

              <div>
                <div className="section-head reveal" style={{ marginBottom: 18 }}>
                  <div>
                    <span className="eyebrow">Brands</span>
                    <h2 className="section-title">Solutions businesses trust</h2>
                  </div>
                </div>
                <div className="logo-grid reveal">
                  {trustLogos.map((logo, idx) => (
                    <div className="logo-card" key={idx}>
                      <img src={logo} alt={`Trusted brand ${idx + 1}`} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {sections.map((section, idx) => renderFeatureSection(section, idx))}

        <section className="section bg-white">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Business Value</span>
                <h2 className="section-title">Key outcomes with Zoho Workplace</h2>
              </div>
              <p className="section-copy">
                Empower teams with a secure collaboration suite that improves communication quality, enables remote work,
                and simplifies day-to-day business operations.
              </p>
            </div>

            <div className="stats-grid">
              {sections[3].features.map((item, idx) => {
                const counts = [82, 42, 28, 14];
                return (
                  <div className="stat-card reveal" key={item.title}>
                    <div className="stat-value">
                      <span data-count={counts[idx]} data-suffix="%">0%</span>
                    </div>
                    <div className="stat-title">{item.title}</div>
                    <div className="stat-copy">{item.description}</div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section bg-soft">
          <div className="container">
            <div className="cta-strip reveal">
              <div>
                <h3>Need help choosing the right Zoho Workplace plan?</h3>
                <p>
                  Talk to Techjockey experts for pricing guidance, demo support, and plan recommendations tailored to your team size and business goals.
                </p>
              </div>
              <div>
                <a href="#lead-form" className="animated-cta btn-magnetic">Talk to an Expert</a>
              </div>
            </div>
          </div>
        </section>

        <section id="testimonials" className="section bg-white">
          <div className="container">
            <div className="section-head reveal">
              <div>
                <span className="eyebrow">Testimonials</span>
                <h2 className="section-title">What users say about Zoho Workplace</h2>
              </div>
            </div>

            <div className="testimonial-slider reveal">
              <p className="testimonial-quote">“{testimonials[activeSlide].quote}”</p>

              <div className="testimonial-foot">
                <div className="author-wrap">
                  <img src={testimonials[activeSlide].avatar} alt={testimonials[activeSlide].author} />
                  <div>
                    <div className="author-name">{testimonials[activeSlide].author}</div>
                    <div className="author-role">{testimonials[activeSlide].role}</div>
                  </div>
                </div>

                <div className="slider-controls">
                  <button
                    type="button"
                    className="slider-btn"
                    aria-label="Previous testimonial"
                    onClick={() => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M15 18l-6-6 6-6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <button
                    type="button"
                    className="slider-btn"
                    aria-label="Next testimonial"
                    onClick={() => setActiveSlide((prev) => (prev + 1) % testimonials.length)}
                  >
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                      <path d="M9 6l6 6-6 6" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className="slider-dots">
                {testimonials.map((_, idx) => (
                  <button
                    key={idx}
                    type="button"
                    className={`dot ${activeSlide === idx ? 'active' : ''}`}
                    aria-label={`Go to testimonial ${idx + 1}`}
                    onClick={() => setActiveSlide(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        <footer className="footer">
          <div className="container">
            <div className="footer-grid">
              <div>
                <h4>techjockey</h4>
                <p>
                  Techjockey helps businesses discover, evaluate, and buy the right software solutions with expert support and personalized recommendations.
                </p>
              </div>

              <div>
                <h4>Quick Links</h4>
                <div className="footer-links">
                  <a href="#why">Features</a>
                  <a href="#growth">Standard Features</a>
                  <a href="#apps">Integrations</a>
                  <a href="#lead-form">Get Demo</a>
                </div>
              </div>

              <div>
                <h4>Connect</h4>
                <div className="footer-links">
                  <a href="tel:+919999999999">+91 99999 99999</a>
                  <a href="mailto:sales@techjockey.com">sales@techjockey.com</a>
                  <a href="https://www.techjockey.com/" target="_blank" rel="noreferrer">www.techjockey.com</a>
                </div>
              </div>
            </div>

            <div className="footer-bottom">
              <p>© 2026 Techjockey. All rights reserved.</p>
              <div className="socials">
                <a href="https://www.facebook.com/techjockey" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6H17V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.4V11H7.5v3h2.8v8h3.2z" />
                  </svg>
                </a>
                <a href="https://www.linkedin.com/company/techjockey-infotech/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M6.94 8.5A1.56 1.56 0 1 1 6.93 5.38 1.56 1.56 0 0 1 6.94 8.5zM5.5 9.75h2.88V19H5.5V9.75zm4.68 0h2.76v1.26h.04c.38-.73 1.33-1.5 2.74-1.5 2.93 0 3.47 1.93 3.47 4.44V19h-2.88v-4.47c0-1.07-.02-2.45-1.49-2.45-1.5 0-1.73 1.17-1.73 2.37V19h-2.91V9.75z" />
                  </svg>
                </a>
                <a href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zm4.75-3.25a1.25 1.25 0 1 1-2.5 0 1.25 1.25 0 0 1 2.5 0z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;