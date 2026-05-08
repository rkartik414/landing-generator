import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#f44336';
  const primary = '#f44336';
  const bodyBg = '#ffffff';

  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });
  const [activeTabs, setActiveTabs] = useState([0, 0, 0, 0]);
  const [activeSlide, setActiveSlide] = useState(0);
  const heroRef = useRef(null);

  const logos = [
    '/output/generated-assets/ds_1778090953737_c4344aff/10-4e22c31148.png',
    '/output/generated-assets/ds_1778090953737_c4344aff/22-61e528786b.png',
    '/output/generated-assets/ds_1778090953737_c4344aff/24-d22596911f.png',
    '/output/generated-assets/ds_1778090953737_c4344aff/23-75f766eeed.png',
  ];

  const productSections = [
    {
      label: 'FEATURES',
      headline: 'Why Choose Zoho Workplace?',
      description:
        'Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.',
      image: '/output/generated-assets/ds_1778090953737_c4344aff/18-473c14de05.jpg',
      dark: false,
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
      image: '/output/generated-assets/ds_1778090953737_c4344aff/17-8ee9780f0b.jpg',
      dark: false,
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
      image: '/output/generated-assets/ds_1778090953737_c4344aff/25-3921942fc4.jpeg',
      dark: true,
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
      image: '/output/generated-assets/ds_1778090953737_c4344aff/26-b32757542d.jpeg',
      dark: false,
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
      author: 'Amit Kapoor',
      role: 'IT Manager',
      avatar: '/output/generated-assets/ds_1778090953737_c4344aff/13-a1af876bc5.png',
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      author: 'Saurav Singh',
      role: 'Head of Operations',
      avatar: '/output/generated-assets/ds_1778090953737_c4344aff/15-01fc6c95c0.jpg',
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      author: 'Shrimi Manchanda',
      role: 'Operations Manager',
      avatar: '/output/generated-assets/ds_1778090953737_c4344aff/31-e3c4bcd1a9.png',
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      author: 'Shweta Thakur',
      role: 'Senior System Administrator',
      avatar: '/output/generated-assets/ds_1778090953737_c4344aff/32-00ee58a5d0.jpg',
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      author: 'Narinder Sahni',
      role: 'IT Head',
      avatar: '/output/generated-assets/ds_1778090953737_c4344aff/13-a1af876bc5.png',
    },
  ];

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);

    const observer = new IntersectionObserver(
      entries =>
        entries.forEach(entry => {
          if (entry.isIntersecting) entry.target.classList.add('visible');
        }),
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    const scripts = [
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js',
      'https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/SplitText.min.js',
    ];

    scripts.forEach(src => {
      if (!document.querySelector(`script[src="${src}"]`)) {
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        document.body.appendChild(s);
      }
    });

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          const gsap = window.gsap;
          const ScrollTrigger = window.ScrollTrigger;
          gsap.registerPlugin(ScrollTrigger);

          if (!document.querySelector('.cursor-glow')) {
            const glow = document.createElement('div');
            glow.className = 'cursor-glow';
            document.body.appendChild(glow);
            window.addEventListener('mousemove', e => {
              gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
            });
          }

          gsap.utils.toArray('.scene-expand').forEach(scene => {
            gsap.to(scene, {
              width: '100%',
              borderRadius: '0px',
              ease: 'none',
              scrollTrigger: { trigger: scene, start: 'top 80%', end: 'top 20%', scrub: 1.2 },
            });
            const media = scene.querySelector('img, video');
            if (media) {
              gsap.to(media, {
                scale: 1,
                ease: 'none',
                scrollTrigger: { trigger: scene, start: 'top 80%', end: 'top 20%', scrub: 1.2 },
              });
            }
          });

          gsap.utils.toArray('.zoom-reveal').forEach(el => {
            const img = el.querySelector('img, video');
            if (!img) return;
            gsap.to(img, {
              scale: 1,
              ease: 'power2.out',
              duration: 1.2,
              scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
            });
          });

          gsap.utils.toArray('[data-depth]').forEach(el => {
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

          gsap.utils.toArray('.clip-reveal').forEach(el => {
            gsap.to(el, {
              clipPath: 'inset(0% 0 0 0)',
              ease: 'power3.out',
              duration: 1.1,
              scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' },
            });
          });

          gsap.utils.toArray('.stagger-parent').forEach(parent => {
            gsap.to(parent.children, {
              opacity: 1,
              y: 0,
              duration: 0.8,
              stagger: 0.12,
              ease: 'power3.out',
              scrollTrigger: { trigger: parent, start: 'top 80%', toggleActions: 'play none none none' },
            });
          });

          gsap.utils.toArray('.split-text').forEach(el => {
            const text = el.textContent;
            el.innerHTML = text
              .split('')
              .map(char =>
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

          gsap.utils.toArray('.text-reveal-mask').forEach(mask => {
            const inner = mask.querySelector('.text-reveal-inner');
            if (!inner) return;
            gsap.to(inner, {
              y: '0%',
              duration: 1,
              ease: 'power4.out',
              scrollTrigger: { trigger: mask, start: 'top 85%', toggleActions: 'play none none reverse' },
            });
          });

          gsap.utils.toArray('.pin-scene').forEach(scene => {
            ScrollTrigger.create({ trigger: scene, start: 'top top', end: '+=600', pin: true, pinSpacing: true });
          });

          gsap.utils.toArray('[data-count]').forEach(el => {
            const target = parseFloat(el.dataset.count);
            const prefix = el.dataset.prefix || '';
            const suffix = el.dataset.suffix || '';
            gsap.from({ val: 0 }, {
              val: target,
              duration: 2,
              ease: 'power2.out',
              snap: { val: 1 },
              scrollTrigger: { trigger: el, start: 'top 80%', once: true },
              onUpdate: function () {
                el.textContent = prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
              },
            });
          });
        });
      });
    };

    const timer = setTimeout(initGSAP, 900);
    return () => {
      observer.disconnect();
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleTab = (sectionIndex, featureIndex) => {
    setActiveTabs(prev => {
      const next = [...prev];
      next[sectionIndex] = featureIndex;
      return next;
    });
  };

  const handleChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = e => e.preventDefault();

  const css = `
    :root{--accent:${accent};--primary:${primary};--bodyBg:${bodyBg};--text:#111827;--muted:#4b5563;--border:#e5e7eb}
    *{box-sizing:border-box} html{scroll-behavior:smooth} body{margin:0;background:${bodyBg};font-family:Inter,sans-serif;color:var(--text)}
    a{text-decoration:none;color:inherit} img{max-width:100%} button,input{font:inherit}
    .page{background:${bodyBg};overflow:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .main_header{position:sticky;top:0;z-index:50;background:rgba(255,255,255,.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(229,231,235,.8)}
    .nav-bar{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0}
    .nav-left{display:flex;align-items:center;gap:12px;min-width:0}
    .brand-text{font:800 20px 'Plus Jakarta Sans',sans-serif;color:var(--accent)}
    .nav-right{display:flex;align-items:center;gap:16px}
    .animated-cta,.ghost-btn{padding:12px 20px;border-radius:12px;font-weight:700;transition:.25s ease;display:inline-flex;align-items:center;justify-content:center}
    .animated-cta{background:var(--accent);color:#fff;border:1px solid var(--accent);box-shadow:0 10px 25px rgba(244,67,54,.22)}
    .animated-cta:hover,.ghost-btn:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(17,24,39,.12)}
    .ghost-btn{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.28)}
    .btn-magnetic{position:relative;transition:transform .3s cubic-bezier(.34,1.56,.64,1)}
    .hero-section{position:relative;min-height:92vh;display:flex;align-items:center;color:#fff}
    .hero-bg-wrap,.hero-overlay{position:absolute;inset:0}
    .hero-cinematic-bg{width:100%;height:100%;object-fit:cover;transform:scale(1.06);will-change:transform}
    .hero-overlay{background:transparent}
    .precision-lines:before,.precision-lines:after{content:'';position:absolute;pointer-events:none;border:1px solid rgba(255,255,255,.12);border-radius:28px}
    .precision-lines:before{inset:24px}
    .precision-lines:after{inset:70px}
    .banner_wrap{position:relative;z-index:2;width:100%;padding:72px 0}
    .banner-area{display:grid;grid-template-columns:1.1fr .9fr;gap:42px;align-items:center}
    .banner-title{font:800 clamp(48px,7vw,72px)/1.02 'Plus Jakarta Sans',sans-serif;letter-spacing:-.03em;margin:0 0 18px;max-width:760px}
    .gradient-text{background:linear-gradient(135deg,var(--accent) 0%,var(--primary) 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .banner-content{font-size:18px;line-height:1.7;color:rgba(255,255,255,.86);max-width:640px;margin:0}
    .hero-chips{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0 26px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.08);font-size:13px;color:#fff}
    .chip svg{width:16px;height:16px;fill:var(--accent)}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{display:block}
    .form-card{background:rgba(255,255,255,.97);color:var(--text);border:1px solid rgba(255,255,255,.2);border-radius:24px;padding:24px;box-shadow:0 30px 80px rgba(0,0,0,.22);max-width:440px;margin-left:auto}
    .form-title{font:800 26px 'Plus Jakarta Sans',sans-serif;margin:0 0 6px}
    .form-sub{font-size:14px;color:var(--muted);margin:0 0 18px}
    .lead_form{display:grid;gap:14px}
    .field label{display:block;font-size:13px;font-weight:600;margin-bottom:6px;color:#374151}
    .form-control{width:100%;padding:14px 15px;border-radius:12px;border:1px solid var(--border);outline:none;transition:.2s;background:#fff}
    .form-control:focus{border-color:var(--accent);box-shadow:0 0 0 4px rgba(244,67,54,.1)}
    .full-btn{width:100%}
    .trust-bar{background:#f8fafc;border-top:1px solid var(--border);border-bottom:1px solid var(--border)}
    .trust-inner{padding:26px 0}
    .trust-head{display:flex;justify-content:space-between;gap:16px;align-items:center;flex-wrap:wrap;margin-bottom:18px}
    .trust-copy{font:800 28px 'Plus Jakarta Sans',sans-serif;color:var(--text)}
    .logo-grid{display:grid;grid-template-columns:repeat(4,minmax(0,1fr));gap:12px}
    .logo-tile{height:72px;background:#fff;border:1px solid var(--border);border-radius:16px;display:flex;align-items:center;justify-content:center;padding:14px;box-shadow:0 4px 24px rgba(0,0,0,.04)}
    .logo-tile img{max-height:32px;max-width:100%;filter:grayscale(1);opacity:.75;transition:.25s}
    .logo-tile:hover img{filter:grayscale(0);opacity:1}
    section{position:relative}
    .section{padding:84px 0}
    .bg-white{background:#fff}.bg-soft{background:#f8fafc}
    .section-grid{display:grid;grid-template-columns:1fr 1fr;gap:56px;align-items:center}
    .section-tag{display:inline-flex;padding:7px 12px;border-radius:999px;background:rgba(244,67,54,.08);border:1px solid rgba(244,67,54,.18);color:var(--accent);font-size:12px;font-weight:700;letter-spacing:.08em}
    h2{font:800 clamp(32px,4vw,48px)/1.1 'Plus Jakarta Sans',sans-serif;margin:16px 0}
    .desc-box{border-left:3px solid rgba(244,67,54,.35);padding-left:18px;color:var(--muted);font-size:17px;line-height:1.75;margin-bottom:24px}
    .tabs-wrap{display:flex;flex-direction:column;gap:14px}
    .tab-buttons{display:flex;flex-wrap:wrap;gap:10px}
    .tab-btn{padding:11px 14px;border-radius:12px;border:1px solid var(--border);background:#fff;color:#374151;font-weight:700;cursor:pointer;transition:.2s}
    .tab-btn.active{background:var(--accent);border-color:var(--accent);color:#fff}
    .preview-card{background:#fff;border:1px solid var(--border);border-radius:20px;padding:22px;box-shadow:0 14px 40px rgba(0,0,0,.06)}
    .preview-card h3{font:800 22px 'Plus Jakarta Sans',sans-serif;margin:0 0 10px}
    .preview-card p{margin:0;color:var(--muted);line-height:1.75}
    .feature-cta{margin-top:22px}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:24px;border:1px solid var(--border);box-shadow:0 24px 80px rgba(0,0,0,.1);background:#f8f8f8}
    .browser-frame.dark{background:#0a0a0a;border-color:#1f2937}
    .browser-top{display:flex;align-items:center;gap:8px;padding:14px 16px;border-bottom:1px solid rgba(229,231,235,.7);background:rgba(255,255,255,.85)}
    .browser-frame.dark .browser-top{background:rgba(17,24,39,.88);border-color:rgba(255,255,255,.08)}
    .dot{width:10px;height:10px;border-radius:50%}.d1{background:#ff5f57}.d2{background:#febc2e}.d3{background:#28c840}
    .browser-frame img,.browser-frame video{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .browser-frame video{background:#000}
    .integration-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin-top:18px}
    .integration-tile{background:#fff;border:1px solid var(--border);border-radius:16px;padding:16px;box-shadow:0 8px 24px rgba(0,0,0,.04)}
    .integration-tile strong{display:block;font-size:15px;margin-bottom:6px}
    .metrics-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
    .metric-card{background:#fff;border:1px solid var(--border);border-radius:18px;padding:22px;box-shadow:0 8px 28px rgba(0,0,0,.05)}
    .metric-card h3{font:800 34px 'Plus Jakarta Sans',sans-serif;margin:0 0 8px;color:var(--accent)}
    .metric-card p{margin:0;color:var(--muted);line-height:1.6}
    .pricing-wrap{padding:84px 0;background:#fff}
    .pricing-grid{display:grid;grid-template-columns:minmax(0,1fr);gap:24px;max-width:860px;margin:0 auto}
    .price-card{background:#fff;border:1.5px solid rgba(244,67,54,.22);border-radius:24px;padding:30px;box-shadow:0 18px 60px rgba(0,0,0,.06);position:relative}
    .price-badge{display:inline-flex;padding:7px 12px;border-radius:999px;background:#ecfdf3;color:#15803d;font-size:12px;font-weight:800;margin-bottom:16px}
    .price-title{font:800 34px 'Plus Jakarta Sans',sans-serif;margin:0 0 12px}
    .price-row{display:flex;align-items:end;gap:10px;flex-wrap:wrap;margin-bottom:18px}
    .old-price{text-decoration:line-through;color:#9ca3af}
    .new-price{font:800 36px 'Plus Jakarta Sans',sans-serif;color:var(--text)}
    .includes{display:grid;gap:10px;margin:22px 0}
    .includes-item{display:flex;gap:12px;align-items:flex-start;color:#374151}
    .includes-item svg{width:18px;height:18px;fill:#16a34a;flex:none;margin-top:2px}
    .testimonials{background:#f8fafc;padding:84px 0}
    .testimonial-shell{max-width:960px;margin:0 auto}
    .testimonial-slider{overflow:hidden}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-card{min-width:100%;padding:10px}
    .testimonial-inner{background:#fff;border:1px solid var(--border);border-radius:24px;padding:34px;box-shadow:0 14px 40px rgba(0,0,0,.06)}
    .quote-mark{font-size:52px;line-height:1;color:var(--accent);font-weight:800}
    .quote-text{font-size:22px;line-height:1.7;color:var(--text);margin:8px 0 24px}
    .author-row{display:flex;align-items:center;gap:14px}
    .author-row img{width:64px;height:64px;border-radius:50%;object-fit:cover;border:3px solid rgba(244,67,54,.15)}
    .author-name{font-weight:800}
    .author-role{color:#6b7280;font-size:14px}
    .stars{color:#f59e0b;letter-spacing:2px;font-size:18px;margin-top:4px}
    .slider-nav{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-top:18px}
    .arrow-btn{width:46px;height:46px;border-radius:999px;border:1px solid var(--border);background:#fff;cursor:pointer;transition:.2s}
    .arrow-btn:hover{transform:translateY(-2px);box-shadow:0 10px 22px rgba(0,0,0,.08)}
    .dots{display:flex;gap:8px;justify-content:center;flex:1}
    .dot-btn{width:10px;height:10px;border-radius:999px;border:none;background:#cbd5e1;cursor:pointer;transition:.25s}
    .dot-btn.active{width:28px;background:var(--accent)}
    .sticky-cta{position:fixed;right:18px;bottom:18px;z-index:40}
    .footer{background:#111827;color:#fff;padding:42px 0}
    .footer-grid{display:grid;grid-template-columns:1.4fr 1fr 1fr;gap:20px;align-items:start}
    .footer p,.footer a{color:rgba(255,255,255,.8);font-size:14px}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .social-icon{width:38px;height:38px;border-radius:999px;border:1px solid rgba(255,255,255,.14);display:flex;align-items:center;justify-content:center}
    .social-icon svg{width:17px;height:17px;fill:#fff}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}
    .clip-reveal{clip-path:inset(100% 0 0 0);will-change:clip-path}
    .scene-expand{width:75%;margin:0 auto;border-radius:24px;overflow:hidden;will-change:width,border-radius}
    .scene-expand img,.scene-expand video{width:100%;height:100%;object-fit:cover;transform:scale(1.08);will-change:transform}
    .zoom-reveal{overflow:hidden;border-radius:16px}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.15);will-change:transform;transition:transform 0s}
    [data-depth]{will-change:transform}
    .depth-foreground{position:relative;z-index:3}.depth-background{position:absolute;inset:0;z-index:1}
    .stagger-parent>*{opacity:0;transform:translateY(32px);will-change:opacity,transform}
    .text-reveal-mask{overflow:hidden;display:block}.text-reveal-inner{display:block;transform:translateY(110%);will-change:transform}
    .cursor-glow{position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);background:radial-gradient(circle, rgba(244,67,54,.12) 0%, transparent 70%);transition:opacity .3s ease}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
    @keyframes driftLeft{0%,100%{transform:translateX(0) translateY(0)}33%{transform:translateX(-12px) translateY(-8px)}66%{transform:translateX(8px) translateY(-14px)}}
    .float-ambient{animation:floatY 6s ease-in-out infinite}.float-drift{animation:driftLeft 10s ease-in-out infinite}
    @media (max-width: 991px){
      .banner-area,.section-grid,.footer-grid{grid-template-columns:1fr}
      .form-card{margin-left:0;max-width:none}
      .logo-grid{grid-template-columns:repeat(2,minmax(0,1fr))}
      .metrics-strip{grid-template-columns:repeat(2,1fr)}
      .banner-title{font-size:48px}
    }
    @media (max-width: 640px){
      .nav-right img{display:none}
      .container{width:min(100% - 24px,1180px)}
      .banner_wrap,.section,.pricing-wrap,.testimonials{padding:60px 0}
      .hero-chips{gap:10px}
      .chip{font-size:12px;padding:8px 12px}
      .logo-grid,.metrics-strip{grid-template-columns:1fr}
      .browser-frame img,.browser-frame video{height:300px}
      .quote-text{font-size:18px}
    }
  `;

  const renderIcon = idx => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      {idx % 4 === 0 && <path d="M12 2l2.7 6.3L21 11l-6.3 2.7L12 20l-2.7-6.3L3 11l6.3-2.7L12 2z" />}
      {idx % 4 === 1 && <path d="M19 5h-4l-1-2H10L9 5H5a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2V7a2 2 0 00-2-2zm-7 11l-4-4 1.4-1.4L12 13.2l4.6-4.6L18 10l-6 6z" />}
      {idx % 4 === 2 && <path d="M4 4h16v4H4V4zm0 6h10v10H4V10zm12 0h4v10h-4V10z" />}
      {idx % 4 === 3 && <path d="M12 3a9 9 0 100 18 9 9 0 000-18zm1 13h-2v-2h2v2zm0-4h-2V7h2v5z" />}
    </svg>
  );

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
            <span className="brand-text">Zoho</span>
            <span style={{ color: '#6b7280', fontSize: 14 }}>Workplace</span>
          </div>
          <div className="nav-right">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <a href="#lead-form" className="animated-cta btn-magnetic">
              Get Free Consultation
            </a>
          </div>
        </div>
      </header>

      <section className="hero-section precision-lines" ref={heroRef}>
        <div className="hero-bg-wrap depth-background" data-depth="0.4">
          <video className="hero-cinematic-bg" autoPlay muted loop playsInline preload="auto">
            <source src="/output/generated-assets/ds_1778090953737_c4344aff/16-7f9baae9a1.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="container banner_wrap">
          <div className="banner-area">
            <div className="banner-text depth-foreground" data-depth="0.15">
              <h1 className="banner-title split-text">
                Elevate Your Team’s Productivity with <span className="gradient-text">Zoho Workplace</span>
              </h1>
              <p className="banner-content reveal visible">
                A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified Communication.
              </p>

              <div className="hero-chips">
                {[
                  'All-in-One Unified Workspace',
                  'Seamless Collaboration in Real Time',
                  'Work from Anywhere, Anytime',
                  'AI-Powered Productivity (Zia)',
                ].map((chip, i) => (
                  <div className="chip float-ambient" key={chip}>
                    {renderIcon(i)}
                    <span>{chip}</span>
                  </div>
                ))}
              </div>

              <div className="hero-actions">
                <a href="#lead-form" className="animated-cta btn-magnetic">
                  Get Free Consultation
                </a>
                <a href="#pricing" className="ghost-btn">
                  Get Started
                </a>
              </div>
            </div>

            <div className="hero-visual" id="lead-form">
              <div className="form-card glass-card">
                <h3 className="form-title">Zoho Workplace</h3>
                <p className="form-sub">A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified Communication.</p>
                <form className="lead_form" onSubmit={handleSubmit}>
                  <div className="field">
                    <label htmlFor="name">Name</label>
                    <input id="name" name="name" className="form-control" value={formData.name} onChange={handleChange} placeholder="Enter your name" />
                  </div>
                  <div className="field">
                    <label htmlFor="email">Email</label>
                    <input id="email" name="email" type="email" className="form-control" value={formData.email} onChange={handleChange} placeholder="Enter your email" />
                  </div>
                  <div className="field">
                    <label htmlFor="phone">Phone</label>
                    <input id="phone" name="phone" className="form-control" value={formData.phone} onChange={handleChange} placeholder="Enter your phone" />
                  </div>
                  <div className="field">
                    <label htmlFor="company">Company</label>
                    <input id="company" name="company" className="form-control" value={formData.company} onChange={handleChange} placeholder="Enter your company" />
                  </div>
                  <button type="submit" className="animated-cta full-btn">
                    Get Free Consultation
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar clip-reveal">
        <div className="container trust-inner">
          <div className="trust-head reveal">
            <div className="trust-copy">Trusted by 100,000+ Businesses Globally</div>
          </div>
          <div className="logo-grid stagger-parent">
            {logos.map((logo, i) => (
              <div className="logo-tile hover-lift" key={i}>
                <img src={logo} alt={`Logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {productSections.map((section, sIdx) => {
        const activeFeature = section.features[activeTabs[sIdx]];
        const reverse = sIdx % 2 === 1;
        const bgClass = sIdx % 2 === 0 ? 'bg-white' : 'bg-soft';
        return (
          <section key={section.headline} className={`section ${bgClass} clip-reveal ${sIdx === 1 ? 'pin-scene' : ''}`}>
            <div className="container">
              <div className="section-grid">
                <div style={{ order: reverse ? 2 : 1 }} data-depth="0.15">
                  <div className="scene-expand">
                    <div className={`browser-frame ${section.dark ? 'dark' : ''}`}>
                      <div className="browser-top">
                        <span className="dot d1" />
                        <span className="dot d2" />
                        <span className="dot d3" />
                      </div>
                      <div className="zoom-reveal">
                        <img src={section.image} alt={section.headline} />
                      </div>
                    </div>
                  </div>
                </div>

                <div style={{ order: reverse ? 1 : 2 }} data-depth="0.1">
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
                  {section.description ? <div className="desc-box reveal">{section.description}</div> : null}

                  {section.headline === 'Integrate with Popular Apps' ? (
                    <div className="integration-grid stagger-parent">
                      {section.features.map((item, idx) => (
                        <div className="integration-tile" key={item.title}>
                          <strong>{item.title}</strong>
                          <p style={{ margin: 0, color: '#4b5563', lineHeight: 1.6 }}>{item.description}</p>
                        </div>
                      ))}
                    </div>
                  ) : section.headline === 'Performance Beyond Limits with Zoho Workplace' ? (
                    <div className="metrics-strip stagger-parent">
                      {section.features.map(item => {
                        const num = item.description.match(/[\d.]+/);
                        const value = num ? parseFloat(num[0]) : 0;
                        return (
                          <div className="metric-card" key={item.title}>
                            <h3 data-count={value} data-suffix="%">{value}%</h3>
                            <strong style={{ display: 'block', marginBottom: 8 }}>{item.title}</strong>
                            <p>{item.description}</p>
                          </div>
                        );
                      })}
                    </div>
                  ) : (
                    <div className="tabs-wrap">
                      <div className="tab-buttons reveal">
                        {section.features.map((feature, fIdx) => (
                          <button
                            key={feature.title}
                            className={`tab-btn ${activeTabs[sIdx] === fIdx ? 'active' : ''}`}
                            onClick={() => handleTab(sIdx, fIdx)}
                          >
                            {feature.title}
                          </button>
                        ))}
                      </div>
                      <div className="preview-card reveal">
                        <h3>{activeFeature.title}</h3>
                        <p>{activeFeature.description}</p>
                      </div>
                    </div>
                  )}

                  {sIdx === 0 || sIdx === 3 ? (
                    <div className="feature-cta">
                      <a href="#lead-form" className="animated-cta">
                        Get Free Consultation
                      </a>
                    </div>
                  ) : null}
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="pricing-wrap" id="pricing">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: 820, margin: '0 auto 32px' }}>
            <span className="section-tag reveal">PRICING</span>
            <h2 className="reveal">Zoho Workplace</h2>
          </div>
          <div className="pricing-grid">
            <div className="price-card reveal">
              <span className="price-badge">Available on Consultation</span>
              <h3 className="price-title">Zoho Workplace</h3>
              <div className="price-row">
                <span className="old-price">(was )</span>
                <span className="new-price">Zoho Workplace</span>
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
                ].map(item => (
                  <div className="includes-item" key={item}>
                    <svg viewBox="0 0 24 24"><path d="M9 16.2l-3.5-3.5L4 14.2 9 19l11-11-1.5-1.5z" /></svg>
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

      <section className="testimonials">
        <div className="container testimonial-shell">
          <div style={{ textAlign: 'center', marginBottom: 28 }}>
            <span className="section-tag reveal">TESTIMONIALS</span>
            <h2 className="reveal">What Enterprises Say About Zoho Workplace</h2>
          </div>

          <div className="testimonial-slider">
            <div className="testimonial-track" style={{ transform: `translateX(-${activeSlide * 100}%)` }}>
              {testimonials.map((item, i) => (
                <div className="testimonial-card" key={i}>
                  <div className="testimonial-inner">
                    <div className="quote-mark">❝</div>
                    <div className="quote-text">{item.quote}</div>
                    <div className="author-row">
                      <img src={item.avatar} alt={item.author} />
                      <div>
                        <div className="author-name">{item.author}</div>
                        <div className="author-role">{item.role}</div>
                        <div className="stars">★★★★★</div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="slider-nav">
            <button className="arrow-btn" onClick={() => setActiveSlide(prev => (prev - 1 + testimonials.length) % testimonials.length)}>
              ‹
            </button>
            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={`dot-btn ${i === activeSlide ? 'active' : ''}`}
                  onClick={() => setActiveSlide(i)}
                />
              ))}
            </div>
            <button className="arrow-btn" onClick={() => setActiveSlide(prev => (prev + 1) % testimonials.length)}>
              ›
            </button>
          </div>
        </div>
      </section>

      <div className="sticky-cta">
        <a href="#lead-form" className="animated-cta btn-magnetic">
          Get Free Consultation
        </a>
      </div>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
              style={{ marginBottom: 12 }}
            />
            <p>support@techjockey.com</p>
            <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: 12 }}>Legal</div>
            <div className="footer-links">
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-and-conditions">Terms</a>
            </div>
          </div>

          <div>
            <div style={{ fontWeight: 700, marginBottom: 12 }}>Follow Us</div>
            <div className="socials">
              <a className="social-icon" href="https://facebook.com" aria-label="Facebook">
                <svg viewBox="0 0 24 24"><path d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.6 1.7-1.6h1.5V4.8c-.3 0-1.2-.1-2.4-.1-2.4 0-4 1.4-4 4.2V11H8v3h2.3v8h3.2z"/></svg>
              </a>
              <a className="social-icon" href="https://instagram.com" aria-label="Instagram">
                <svg viewBox="0 0 24 24"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm0 2a3 3 0 00-3 3v10a3 3 0 003 3h10a3 3 0 003-3V7a3 3 0 00-3-3H7zm5 3.5A5.5 5.5 0 1112 18a5.5 5.5 0 010-11zm0 2A3.5 3.5 0 1012 16a3.5 3.5 0 000-7zm6-2.8a1.3 1.3 0 110 2.6 1.3 1.3 0 010-2.6z"/></svg>
              </a>
              <a className="social-icon" href="https://twitter.com" aria-label="Twitter">
                <svg viewBox="0 0 24 24"><path d="M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.2 1.8-2.1-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.7-5.8-.1-1 1-1.4 2.4-1.1 3.8-3.3-.2-6.2-1.7-8.2-4.2-1.1 1.9-.5 4.3 1.3 5.5-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.8 3.3 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 4 3-1.6 1.3-3.6 2-5.7 2h-1c2.1 1.4 4.6 2.2 7.1 2.2 8.5 0 13.4-7.2 13.1-13.7.9-.6 1.6-1.3 2.2-2.1z"/></svg>
              </a>
              <a className="social-icon" href="https://linkedin.com" aria-label="LinkedIn">
                <svg viewBox="0 0 24 24"><path d="M6.9 8.5H3.8V20h3.1V8.5zM5.3 3A1.8 1.8 0 103.5 4.8 1.8 1.8 0 005.3 3zm14.9 9.9c0-3.1-1.7-4.5-4-4.5-1.8 0-2.6 1-3 1.7V8.5h-3.1V20h3.1v-6c0-1.6.3-3.1 2.3-3.1s2 1.8 2 3.2V20h3.1z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;