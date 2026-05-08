import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#F15623';
  const primary = '#F15623';
  const bodyBg = '#ffffff';

  const [activeSlide, setActiveSlide] = useState(0);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
  });
  const cursorGlowRef = useRef(null);

  const testimonials = [
    {
      quote:
        'Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.',
      author: 'Amit Kapoor',
      role: 'IT Manager',
      avatar: '/output/generated-assets/ds_1778087467377_dfefaf7b/15-01fc6c95c0.jpg',
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      author: 'Saurav Singh',
      role: 'Head of Operations',
      avatar: '/output/generated-assets/ds_1778087467377_dfefaf7b/13-a1af876bc5.png',
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      author: 'Shrimi Manchanda',
      role: 'Operations Manager',
      avatar: '/output/generated-assets/ds_1778087467377_dfefaf7b/32-00ee58a5d0.jpg',
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      author: 'Shweta Thakur',
      role: 'Senior System Administrator',
      avatar: '/output/generated-assets/ds_1778087467377_dfefaf7b/31-e3c4bcd1a9.png',
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      author: 'Narinder Sahni',
      role: 'IT Head',
      avatar: '/output/generated-assets/ds_1778087467377_dfefaf7b/15-01fc6c95c0.jpg',
    },
  ];

  const sections = [
    {
      label: 'FEATURES',
      headline: 'Why Choose Zoho Workplace?',
      description:
        'Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.',
      image: '/output/generated-assets/ds_1778087467377_dfefaf7b/17-8ee9780f0b.jpg',
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
      image: '/output/generated-assets/ds_1778087467377_dfefaf7b/25-3921942fc4.jpeg',
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
      image: '/output/generated-assets/ds_1778087467377_dfefaf7b/26-b32757542d.jpeg',
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
      label: 'INSIGHT',
      headline: 'Performance Beyond Limits with Zoho Workplace',
      description: '',
      image: '/output/generated-assets/ds_1778087467377_dfefaf7b/29-8012de20b9.png',
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
    document.documentElement.style.setProperty('--accent-glow', 'rgba(241, 86, 35, 0.16)');

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

          if (!cursorGlowRef.current) {
            const glow = document.createElement('div');
            glow.className = 'cursor-glow';
            document.body.appendChild(glow);
            cursorGlowRef.current = glow;
          }

          const moveGlow = (e) => {
            if (!cursorGlowRef.current) return;
            gsap.to(cursorGlowRef.current, {
              x: e.clientX,
              y: e.clientY,
              duration: 0.6,
              ease: 'power2.out',
            });
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
            const text = el.textContent || '';
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
                const current = this.targets()[0].val;
                const isDecimal = String(target).includes('.');
                el.textContent = `${prefix}${isDecimal ? current.toFixed(1) : Math.round(current).toLocaleString()}${suffix}`;
              },
            });
          });

          window.__lpCleanup = () => {
            window.removeEventListener('mousemove', moveGlow);
          };
        });
      });
    };

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/SplitText.min.js'),
    ]).then(initGSAP);

    return () => {
      observer.disconnect();
      if (window.__lpCleanup) window.__lpCleanup();
      if (cursorGlowRef.current && cursorGlowRef.current.parentNode) {
        cursorGlowRef.current.parentNode.removeChild(cursorGlowRef.current);
        cursorGlowRef.current = null;
      }
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((p) => ({ ...p, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  const FeatureIcon = ({ type }) => {
    const common = { width: 20, height: 20, viewBox: '0 0 24 24', fill: 'none', stroke: accent, strokeWidth: '2', strokeLinecap: 'round', strokeLinejoin: 'round' };
    if (type === 0) {
      return (
        <svg {...common}><rect x="3" y="4" width="7" height="7" rx="1" /><rect x="14" y="4" width="7" height="7" rx="1" /><rect x="3" y="15" width="7" height="6" rx="1" /><rect x="14" y="15" width="7" height="6" rx="1" /></svg>
      );
    }
    if (type === 1) {
      return (
        <svg {...common}><path d="M8 12h8" /><path d="M12 8v8" /><path d="M4 6h16" /><path d="M4 18h16" /></svg>
      );
    }
    if (type === 2) {
      return (
        <svg {...common}><path d="M12 2v4" /><path d="M12 18v4" /><path d="M4.93 4.93l2.83 2.83" /><path d="M16.24 16.24l2.83 2.83" /><path d="M2 12h4" /><path d="M18 12h4" /><circle cx="12" cy="12" r="4" /></svg>
      );
    }
    return (
      <svg {...common}><path d="M12 3l7 4v5c0 5-3.5 8-7 9-3.5-1-7-4-7-9V7l7-4z" /><path d="M9.5 12.5l1.7 1.7 3.3-3.7" /></svg>
    );
  };

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg}}
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:${bodyBg};color:#111827;font-family:'Inter',sans-serif}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .lp{background:${bodyBg};overflow:hidden}
    .container{width:min(1200px,calc(100% - 32px));margin:0 auto}
    .section{padding:88px 0;position:relative}
    .section-white{background:#ffffff}
    .section-soft{background:#f8fafc}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .nav{position:sticky;top:0;z-index:50;background:rgba(17,24,39,.78);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand-mark{font-weight:800;font-size:20px;color:${accent};font-family:'Plus Jakarta Sans',sans-serif}
    .tj-logo{height:28px;opacity:.95}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:13px 22px;border-radius:12px;background:${accent};color:#fff;font-weight:700;border:none;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 16px 28px rgba(241,86,35,.24);background:${primary}}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:13px 22px;border-radius:12px;border:1px solid rgba(255,255,255,.28);color:#fff;font-weight:600;background:rgba(255,255,255,.06);transition:.25s}
    .ghost-btn:hover{transform:translateY(-2px);box-shadow:0 12px 22px rgba(0,0,0,.16);background:rgba(255,255,255,.12)}
    .hero{padding:88px 0 72px;background:#fff;position:relative;min-height:720px}
    .hero-bg-wrap{position:absolute;inset:0;overflow:hidden}
    .hero-cinematic-bg{position:absolute;inset:0;background-image:url('/output/generated-assets/ds_1778087467377_dfefaf7b/18-473c14de05.jpg');background-size:cover;background-position:center;transform:scale(1.06)}
    .hero-overlay{position:absolute;inset:0;background:rgba(0,0,0,.55)}
    .hero-lines,.section-lines{position:absolute;inset:0;pointer-events:none;background-image:linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px);background-size:64px 64px;mask-image:radial-gradient(circle at center, black 40%, transparent 85%)}
    .soft-orb{position:absolute;border-radius:50%;filter:blur(20px);pointer-events:none}
    .orb-1{width:340px;height:340px;right:14%;top:12%;background:radial-gradient(circle, rgba(241,86,35,.35), transparent 70%)}
    .orb-2{width:220px;height:220px;left:8%;bottom:12%;background:radial-gradient(circle, rgba(241,86,35,.18), transparent 70%)}
    .hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.15fr .85fr;gap:36px;align-items:center;min-height:540px}
    .hero h1{font-family:'Plus Jakarta Sans',sans-serif;font-size:64px;line-height:1.05;letter-spacing:-.03em;margin:0 0 18px;color:#fff;max-width:760px}
    .hero p.sub{font-size:18px;line-height:1.7;color:rgba(255,255,255,.88);max-width:640px;margin:0}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:24px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(241,86,35,.45);background:rgba(241,86,35,.14);color:#fff;font-size:13px;font-weight:600}
    .cta-row{display:flex;gap:14px;align-items:center;margin-top:28px;flex-wrap:wrap}
    .hero-visual{display:block;position:relative}
    .form-card{background:rgba(255,255,255,.96);border:1px solid rgba(255,255,255,.7);box-shadow:0 20px 50px rgba(0,0,0,.18);border-radius:24px;padding:26px}
    .form-card h3{margin:0 0 8px;font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;color:#111827}
    .form-card p{margin:0 0 18px;color:#4b5563;font-size:14px;line-height:1.6}
    .field{margin-bottom:14px}
    .field label{display:block;margin-bottom:8px;font-size:13px;font-weight:600;color:#374151}
    .field input{width:100%;height:48px;border:1px solid #e5e7eb;border-radius:12px;padding:0 14px;font-size:15px;outline:none;transition:.2s;background:#fff}
    .field input:focus{border-color:${accent};box-shadow:0 0 0 4px rgba(241,86,35,.12)}
    .full-btn{width:100%}
    .trust-bar{padding:28px 0;border-top:1px solid #eef2f7;border-bottom:1px solid #eef2f7}
    .trust-inner{display:grid;grid-template-columns:260px 1fr;gap:24px;align-items:center}
    .trust-copy h3{margin:0;font-family:'Plus Jakarta Sans',sans-serif;font-size:28px;color:#111827}
    .trust-copy p{margin:6px 0 0;color:#4b5563}
    .logo-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:14px}
    .logo-card{height:72px;border:1px solid #e5e7eb;border-radius:16px;background:#fff;display:flex;align-items:center;justify-content:center;padding:12px;box-shadow:0 6px 20px rgba(0,0,0,.04)}
    .logo-card img{max-height:32px;max-width:100%;filter:grayscale(1);opacity:.8;transition:.25s}
    .logo-card:hover img{filter:grayscale(0);opacity:1}
    .split-panel{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
    .section-tag{display:inline-flex;align-items:center;padding:8px 12px;border-radius:999px;background:rgba(241,86,35,.1);border:1px solid rgba(241,86,35,.2);color:${accent};font-weight:700;font-size:12px;letter-spacing:.06em}
    h2{font-family:'Plus Jakarta Sans',sans-serif;font-size:42px;line-height:1.12;letter-spacing:-.02em;color:#111827;margin:16px 0 14px}
    .desc-bar{border-left:3px solid rgba(241,86,35,.4);padding-left:18px;color:#4b5563;font-size:17px;line-height:1.8}
    .feature-list{display:flex;flex-direction:column;gap:16px;margin-top:24px}
    .feature-item{display:flex;gap:14px;padding:18px;border:1px solid #e5e7eb;border-radius:18px;background:#fff;box-shadow:0 4px 24px rgba(0,0,0,.06);transition:transform .25s ease,box-shadow .25s ease}
    .feature-item:hover,.hover-lift:hover{transform:translateY(-6px);box-shadow:0 18px 38px rgba(0,0,0,.1)}
    .feature-icon{width:44px;height:44px;border-radius:12px;background:rgba(241,86,35,.1);display:flex;align-items:center;justify-content:center;flex:0 0 44px}
    .feature-item h4{margin:0 0 6px;font-size:18px;color:#111827}
    .feature-item p{margin:0;color:#4b5563;line-height:1.7}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:22px;border:1px solid #e5e7eb;background:#f8f8f8;box-shadow:0 20px 50px rgba(17,24,39,.1)}
    .browser-top{display:flex;align-items:center;gap:8px;padding:14px 16px;border-bottom:1px solid #e5e7eb;background:#fff}
    .dot{width:10px;height:10px;border-radius:50%}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .browser-frame video{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .integration-visual{padding:22px;background:linear-gradient(180deg,#fff,#f8fafc)}
    .app-grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:12px}
    .app-tile{border:1px solid #e5e7eb;border-radius:16px;background:#fff;padding:16px;box-shadow:0 4px 20px rgba(0,0,0,.05);font-weight:700;color:#111827;min-height:78px;display:flex;align-items:center;justify-content:center;text-align:center}
    .metric-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:14px}
    .metric-card{padding:20px;border-radius:18px;border:1px solid #e5e7eb;background:#fff;box-shadow:0 6px 24px rgba(0,0,0,.05)}
    .metric-card .num{font-family:'Plus Jakarta Sans',sans-serif;font-size:38px;font-weight:800;color:#111827}
    .metric-card .lbl{margin-top:6px;color:#4b5563;line-height:1.6}
    .pricing-wrap{display:flex;justify-content:center}
    .pricing-card{width:min(760px,100%);padding:34px;border:1px solid #e5e7eb;border-radius:28px;background:#fff;box-shadow:0 16px 50px rgba(0,0,0,.08);position:relative}
    .badge-green{display:inline-flex;padding:8px 12px;border-radius:999px;background:#eafaf0;color:#15803d;font-weight:700;font-size:12px;border:1px solid #bbf7d0}
    .price-head{display:flex;justify-content:space-between;gap:18px;align-items:flex-start;flex-wrap:wrap;margin-bottom:18px}
    .price-title h3{margin:10px 0 0;font-family:'Plus Jakarta Sans',sans-serif;font-size:32px}
    .price-main{font-family:'Plus Jakarta Sans',sans-serif;font-size:42px;font-weight:800;color:#111827}
    .strike{color:#9ca3af;text-decoration:line-through;margin-right:10px}
    .checklist{display:grid;grid-template-columns:1fr 1fr;gap:14px;margin:24px 0}
    .check{display:flex;gap:10px;align-items:flex-start;padding:14px;border-radius:14px;background:#f8fafc;border:1px solid #eef2f7;color:#374151;line-height:1.55}
    .check svg{flex:0 0 18px;margin-top:2px;color:${accent}}
    .testimonials-grid{display:grid;grid-template-columns:1.1fr .9fr;gap:28px;align-items:stretch}
    .testimonial-stage{overflow:hidden;border-radius:24px;border:1px solid #e5e7eb;background:#fff;box-shadow:0 10px 40px rgba(0,0,0,.06)}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-slide{min-width:100%;padding:36px}
    .quote-mark{font-size:58px;line-height:1;color:${accent};font-family:'Plus Jakarta Sans',sans-serif}
    .testimonial-slide p{font-size:21px;line-height:1.8;color:#111827;margin:8px 0 24px}
    .author{display:flex;align-items:center;gap:14px}
    .author img{width:58px;height:58px;border-radius:50%;object-fit:cover;border:3px solid rgba(241,86,35,.18)}
    .author strong{display:block;color:#111827}
    .author span{color:#6b7280;font-size:14px}
    .stars{color:#f59e0b;font-size:18px;letter-spacing:2px;margin-bottom:10px}
    .dots{display:flex;justify-content:center;gap:8px;padding:0 0 22px}
    .dots button{width:8px;height:8px;border-radius:999px;border:none;background:#d1d5db;cursor:pointer;transition:.25s}
    .dots button.active{width:26px;background:${accent}}
    .mini-review-grid{display:grid;grid-template-columns:1fr;gap:14px}
    .mini-review{padding:18px;border-radius:18px;border:1px solid #e5e7eb;background:#fff;box-shadow:0 6px 24px rgba(0,0,0,.05)}
    .mini-review p{margin:8px 0 0;color:#4b5563;line-height:1.7;font-size:15px}
    .footer{background:#0f172a;color:#fff;padding:42px 0}
    .footer-grid{display:grid;grid-template-columns:1fr auto;gap:24px;align-items:center}
    .footer-left img{height:28px;margin-bottom:16px}
    .footer-meta{display:flex;flex-wrap:wrap;gap:14px 22px;color:rgba(255,255,255,.8);font-size:14px}
    .footer-meta a{color:rgba(255,255,255,.88)}
    .socials{display:flex;gap:10px;justify-content:flex-end}
    .socials a{width:40px;height:40px;border-radius:999px;border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center;color:#fff;background:rgba(255,255,255,.04);transition:.25s}
    .socials a:hover{transform:translateY(-2px);background:${accent};border-color:${accent}}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}

    .scene-expand{width:75%;margin:0 auto;border-radius:24px;overflow:hidden;will-change:width,border-radius}
    .scene-expand img{width:100%;height:100%;object-fit:cover;transform:scale(1.08);will-change:transform}
    .zoom-reveal{overflow:hidden;border-radius:16px}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.15);will-change:transform;transition:transform 0s}
    [data-depth]{will-change:transform}
    .depth-foreground{position:relative;z-index:3}
    .depth-background{position:absolute;inset:0;z-index:1}
    .clip-reveal{clip-path:inset(100% 0 0 0);will-change:clip-path}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
    @keyframes driftLeft{0%,100%{transform:translateX(0) translateY(0)}33%{transform:translateX(-12px) translateY(-8px)}66%{transform:translateX(8px) translateY(-14px)}}
    .float-ambient{animation:floatY 6s ease-in-out infinite}
    .float-drift{animation:driftLeft 10s ease-in-out infinite}
    .stagger-parent > *{opacity:0;transform:translateY(32px);will-change:opacity,transform}
    .cursor-glow{position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);background:radial-gradient(circle,var(--accent-glow, rgba(241,86,35,.12)) 0%, transparent 70%);transition:opacity .3s ease}

    @media (max-width: 1024px){
      .hero h1{font-size:52px}
      .hero-grid,.split-panel,.testimonials-grid,.trust-inner{grid-template-columns:1fr}
      .checklist{grid-template-columns:1fr}
      .logo-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
      .scene-expand{width:100%}
    }
    @media (max-width: 640px){
      .nav-inner{grid-template-columns:1fr auto;gap:12px}
      .nav-inner .nav-cta{grid-column:1/-1}
      .hero{padding:72px 0 56px;min-height:auto}
      .hero h1{font-size:48px}
      h2{font-size:34px}
      .section{padding:64px 0}
      .form-card{padding:20px}
      .browser-frame img,.browser-frame video{height:280px}
      .testimonial-slide p{font-size:18px}
      .footer-grid{grid-template-columns:1fr}
      .socials{justify-content:flex-start}
    }
  `;

  return (
    <div className="lp">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div>
            <span className="brand-mark">Zoho</span>
          </div>
          <div>
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28"
              alt="Techjockey"
              className="tj-logo"
            />
          </div>
          <div className="nav-cta">
            <a href="#lead-form" className="animated-cta">
              Get Free Consultation
            </a>
          </div>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-bg-wrap">
          <div className="hero-cinematic-bg" data-depth="0.4" />
          <div className="hero-overlay" />
          <div className="hero-lines" />
          <div className="soft-orb orb-1 float-drift" />
          <div className="soft-orb orb-2 float-ambient" />
        </div>

        <div className="container hero-grid">
          <div className="depth-foreground" data-depth="0.15">
            <h1 className="split-text">
              Elevate Your Team’s Productivity with Zoho Workplace
            </h1>
            <p className="sub reveal reveal-delay-1">
              A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified Communication.
            </p>

            <div className="chips reveal reveal-delay-2">
              {[
                'All-in-One Unified Workspace',
                'Seamless Collaboration in Real Time',
                'Work from Anywhere, Anytime',
                'AI-Powered Productivity (Zia)',
              ].map((chip, i) => (
                <div className="chip" key={chip}>
                  <FeatureIcon type={i} />
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="cta-row reveal reveal-delay-3">
              <a href="#lead-form" className="animated-cta btn-magnetic">
                Get Free Consultation
              </a>
              <a href="#pricing" className="ghost-btn">
                Get Started
              </a>
            </div>
          </div>

          <div className="hero-visual" id="lead-form">
            <div className="form-card hover-lift">
              <h3>Zoho Workplace</h3>
              <p>Email &amp; Collaboration Suite</p>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <label htmlFor="name">Name</label>
                  <input id="name" name="name" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                </div>
                <div className="field">
                  <label htmlFor="email">Email</label>
                  <input id="email" name="email" type="email" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                </div>
                <div className="field">
                  <label htmlFor="phone">Phone</label>
                  <input id="phone" name="phone" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" />
                </div>
                <div className="field">
                  <label htmlFor="company">Company</label>
                  <input id="company" name="company" value={formData.company} onChange={handleChange} placeholder="Enter your company" />
                </div>
                <button type="submit" className="animated-cta full-btn">
                  Get Free Consultation
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar section-soft clip-reveal">
        <div className="container trust-inner">
          <div className="trust-copy reveal">
            <h3 data-count="100000" data-suffix="+ Businesses">
              100,000+ Businesses
            </h3>
            <p>Trusted by 100,000+ Businesses Globally</p>
          </div>
          <div className="logo-grid stagger-parent">
            {[
              '/output/generated-assets/ds_1778087467377_dfefaf7b/10-4e22c31148.png',
              '/output/generated-assets/ds_1778087467377_dfefaf7b/23-75f766eeed.png',
              '/output/generated-assets/ds_1778087467377_dfefaf7b/22-61e528786b.png',
              '/output/generated-assets/ds_1778087467377_dfefaf7b/24-d22596911f.png',
            ].map((logo, i) => (
              <div className="logo-card" key={i}>
                <img src={logo} alt={`Trust logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {sections.map((section, idx) => (
        <section
          key={section.headline}
          className={`section ${idx % 2 === 0 ? 'section-white' : 'section-soft'} ${idx === 1 ? 'pin-scene' : ''}`}
        >
          <div className="section-lines" />
          <div className="container split-panel">
            {idx % 2 === 0 ? (
              <>
                <div className="reveal">
                  <div className="scene-expand">
                    <div className="browser-frame zoom-reveal">
                      <div className="browser-top">
                        <span className="dot" style={{ background: '#ff5f57' }} />
                        <span className="dot" style={{ background: '#febc2e' }} />
                        <span className="dot" style={{ background: '#28c840' }} />
                      </div>
                      <img src={section.image} alt={section.headline} />
                    </div>
                  </div>
                </div>
                <div data-depth="0.15">
                  <span className="section-tag reveal">{section.label}</span>
                  <h2 className="reveal">
                    {section.headline.includes('Zoho Workplace') ? (
                      <>
                        {section.headline.replace('Zoho Workplace', '')}
                        <span className="gradient-text">Zoho Workplace</span>
                      </>
                    ) : (
                      section.headline
                    )}
                  </h2>
                  {section.description ? <div className="desc-bar reveal reveal-delay-1">{section.description}</div> : null}
                  <div className="feature-list stagger-parent">
                    {section.features.map((feature, fIdx) => (
                      <div className="feature-item hover-lift" key={feature.title}>
                        <div className="feature-icon">
                          <FeatureIcon type={fIdx % 4} />
                        </div>
                        <div>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  {idx === 0 ? (
                    <div className="cta-row">
                      <a href="#lead-form" className="animated-cta">
                        Get Free Consultation
                      </a>
                    </div>
                  ) : null}
                </div>
              </>
            ) : (
              <>
                <div data-depth="0.15">
                  <span className="section-tag reveal">{section.label}</span>
                  <h2 className="reveal">
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
                  {section.description ? <div className="desc-bar reveal reveal-delay-1">{section.description}</div> : null}

                  {section.headline === 'Integrate with Popular Apps' ? (
                    <div className="browser-frame integration-visual reveal reveal-delay-2" style={{ marginTop: 24 }}>
                      <div className="app-grid">
                        {section.features.map((feature) => (
                          <div className="app-tile" key={feature.title}>
                            {feature.title}
                          </div>
                        ))}
                      </div>
                    </div>
                  ) : section.headline === 'Performance Beyond Limits with Zoho Workplace' ? (
                    <div className="metric-grid reveal reveal-delay-2" style={{ marginTop: 24 }}>
                      <div className="metric-card">
                        <div className="num" data-count="82.9" data-suffix="%">82.9%</div>
                        <div className="lbl">Secure</div>
                      </div>
                      <div className="metric-card">
                        <div className="num" data-count="42.9" data-suffix="%">42.9%</div>
                        <div className="lbl">Anywhere Access</div>
                      </div>
                      <div className="metric-card">
                        <div className="num" data-count="28.6" data-suffix="%">28.6%</div>
                        <div className="lbl">Intuitive</div>
                      </div>
                      <div className="metric-card">
                        <div className="num" data-count="14.3" data-suffix="%">14.3%</div>
                        <div className="lbl">Collaborative</div>
                      </div>
                    </div>
                  ) : null}

                  <div className="feature-list stagger-parent">
                    {section.features.map((feature, fIdx) => (
                      <div className="feature-item hover-lift" key={feature.title}>
                        <div className="feature-icon">
                          <FeatureIcon type={fIdx % 4} />
                        </div>
                        <div>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="reveal">
                  <div className="scene-expand">
                    <div className="browser-frame zoom-reveal">
                      <div className="browser-top">
                        <span className="dot" style={{ background: '#ff5f57' }} />
                        <span className="dot" style={{ background: '#febc2e' }} />
                        <span className="dot" style={{ background: '#28c840' }} />
                      </div>
                      <img src={section.image} alt={section.headline} />
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </section>
      ))}

      <section id="pricing" className="section section-white clip-reveal">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 30 }}>
            <span className="section-tag">PRICING</span>
            <h2>Zoho Workplace</h2>
          </div>
          <div className="pricing-wrap">
            <div className="pricing-card hover-lift">
              <div className="price-head">
                <div className="price-title">
                  <span className="badge-green">Highlighted Card</span>
                  <h3>Zoho Workplace</h3>
                </div>
                <div className="price-main">
                  <span className="strike">was</span>
                  <strong>Zoho Workplace</strong>
                </div>
              </div>

              <div className="checklist">
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
                  <div className="check" key={item}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <path d="M20 6L9 17l-5-5" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <a href="#lead-form" className="animated-cta full-btn">
                Get Free Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-soft">
        <div className="container">
          <div className="reveal" style={{ textAlign: 'center', marginBottom: 28 }}>
            <span className="section-tag">TESTIMONIALS</span>
            <h2>What Teams Say About <span className="gradient-text">Zoho Workplace</span></h2>
          </div>

          <div className="testimonials-grid">
            <div className="testimonial-stage reveal">
              <div
                className="testimonial-track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div className="testimonial-slide" key={i}>
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p>{t.quote}</p>
                    <div className="author">
                      <img src={t.avatar} alt={t.author} />
                      <div>
                        <strong>{t.author}</strong>
                        <span>{t.role}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={i === activeSlide ? 'active' : ''}
                    onClick={() => setActiveSlide(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
            </div>

            <div className="mini-review-grid stagger-parent">
              {testimonials.slice(1, 4).map((t) => (
                <div className="mini-review hover-lift" key={t.author}>
                  <div className="stars">★★★★★</div>
                  <strong>{t.author}</strong>
                  <div style={{ color: '#6b7280', fontSize: 14, marginTop: 4 }}>{t.role}</div>
                  <p>{t.quote}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container footer-grid">
          <div className="footer-left">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28"
              alt="Techjockey"
            />
            <div className="footer-meta">
              <a href="mailto:support@techjockey.com">support@techjockey.com</a>
              <span>© 2024 Techjockey Infotech Pvt. Ltd.</span>
              <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
              <a href="/terms-condition" target="_blank" rel="noreferrer">Terms</a>
            </div>
          </div>

          <div className="socials">
            <a href="https://www.facebook.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.6-1.6H17V4.8c-.3 0-1.3-.1-2.5-.1-2.5 0-4.2 1.5-4.2 4.3V11H7.5v3h2.8v8h3.2z" /></svg>
            </a>
            <a href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A4.5 4.5 0 1 1 7.5 12 4.5 4.5 0 0 1 12 7.5zm0 2A2.5 2.5 0 1 0 14.5 12 2.5 2.5 0 0 0 12 9.5zM17.8 6.7a1.1 1.1 0 1 1-1.1 1.1 1.1 1.1 0 0 1 1.1-1.1z" /></svg>
            </a>
            <a href="https://twitter.com/TechjockeyInfo" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.9c-.7.3-1.5.6-2.3.7a4 4 0 0 0 1.7-2.2 8 8 0 0 1-2.5 1A4 4 0 0 0 12 8.3a11.3 11.3 0 0 1-8.2-4.1 4 4 0 0 0 1.2 5.3 3.9 3.9 0 0 1-1.8-.5v.1A4 4 0 0 0 6.4 13a4 4 0 0 1-1.8.1 4 4 0 0 0 3.7 2.8A8 8 0 0 1 2 18.6 11.2 11.2 0 0 0 8.1 20c7.3 0 11.3-6 11.3-11.3v-.5A8 8 0 0 0 22 5.9z" /></svg>
            </a>
            <a href="https://www.linkedin.com/company/techjockey-infotech-pvt-ltd-" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2 2 0 1 0 5.3 7a2 2 0 0 0-.05-4zM20.44 12.73c0-3.06-1.63-4.48-3.82-4.48a3.3 3.3 0 0 0-3 1.65V8.5h-3.38V20h3.38v-6.05c0-1.6.3-3.14 2.29-3.14 1.96 0 1.99 1.83 1.99 3.24V20h3.38l.01-7.27z" /></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;