import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#1a1a1a';
  const bodyBg = '#ffffff';

  const heroVideo = '/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/08-8c93b9a6e6.mp4';
  const seedreamImage = '/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/09-5d90f4cffc.png';
  const seedanceImage = '/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/03-f2032be429.webp';
  const avatarImg = '/output/generated-assets/seedream-4-5-and-seedance-1-5-pro/05-6d75b26b02.webp';

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      author: 'Vaishali Saxena',
      role: 'Creative Director',
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      author: 'Vihaan Pandey',
      role: 'Video Producer',
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      author: 'Anurag Malhotra',
      role: 'Art Director',
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      author: 'Ashutosh Singh',
      role: 'Marketing Manager',
    },
    {
      quote:
        'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.',
      author: 'Shrimmi Saxena',
      role: 'Creative Lead',
    },
  ];

  const ctas = Array(6).fill({ text: 'Get Free Consultation', href: '#lead-form' });
  const ctaIndex = useRef(0);
  const getCTA = () => ctas[ctaIndex.current++] || ctas[ctas.length - 1];

  const navCTA = getCTA();
  const heroCTA = getCTA();
  const productCTA = getCTA();
  const featureCTA = getCTA();
  const pricingCTA = getCTA();
  const stickyCTA = getCTA();

  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '' });

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--accent-glow', 'rgba(255,107,0,0.16)');

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        });
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => revealObserver.observe(el));

    const loadScript = (src) =>
      new Promise((resolve) => {
        if (document.querySelector(`script[src="${src}"]`)) return resolve();
        const s = document.createElement('script');
        s.src = src;
        s.async = true;
        s.onload = resolve;
        s.onerror = resolve;
        document.body.appendChild(s);
      });

    const initCinematic = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      const gsap = window.gsap;
      const ScrollTrigger = window.ScrollTrigger;
      gsap.registerPlugin(ScrollTrigger);

      let glow = document.querySelector('.cursor-glow');
      if (!glow) {
        glow = document.createElement('div');
        glow.className = 'cursor-glow';
        document.body.appendChild(glow);
      }

      const moveGlow = (e) => {
        gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
      };
      window.addEventListener('mousemove', moveGlow);

      gsap.utils.toArray('.scene-expand').forEach((scene) => {
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

      gsap.utils.toArray('.zoom-reveal').forEach((el) => {
        const img = el.querySelector('img, video');
        if (!img) return;
        gsap.to(img, {
          scale: 1,
          ease: 'power2.out',
          duration: 1.2,
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' },
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
          scrollTrigger: { trigger: el, start: 'top 80%', toggleActions: 'play none none reverse' },
        });
      });

      gsap.utils.toArray('.stagger-parent').forEach((parent) => {
        gsap.to(parent.children, {
          opacity: 1,
          y: 0,
          duration: 0.8,
          stagger: 0.12,
          ease: 'power3.out',
          scrollTrigger: { trigger: parent, start: 'top 80%', toggleActions: 'play none none none' },
        });
      });

      gsap.utils.toArray('.split-text').forEach((el) => {
        const text = el.getAttribute('data-text') || el.textContent || '';
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
          scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none none' },
        });
      });

      gsap.utils.toArray('.btn-magnetic').forEach((btn) => {
        btn.addEventListener('mousemove', (e) => {
          const rect = btn.getBoundingClientRect();
          const x = (e.clientX - rect.left - rect.width / 2) * 0.2;
          const y = (e.clientY - rect.top - rect.height / 2) * 0.2;
          gsap.to(btn, { x, y, duration: 0.4, ease: 'power2.out' });
        });
        btn.addEventListener('mouseleave', () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
        });
      });

      gsap.utils.toArray('.pin-scene').forEach((scene) => {
        ScrollTrigger.create({ trigger: scene, start: 'top top', end: '+=600', pin: true, pinSpacing: true });
      });

      gsap.utils.toArray('[data-count]').forEach((el) => {
        const target = parseFloat(el.dataset.count);
        const prefix = el.dataset.prefix || '';
        const suffix = el.dataset.suffix || '';
        gsap.fromTo(
          { val: 0 },
          { val: target,
            duration: 2,
            ease: 'power2.out',
            snap: { val: 0.1 },
            scrollTrigger: { trigger: el, start: 'top 80%', once: true },
            onUpdate: function () {
              el.textContent = prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix;
            },
          }
        );
      });

      return () => window.removeEventListener('mousemove', moveGlow);
    };

    const initGSAP = () => {
      if (!window.gsap || !window.ScrollTrigger) return;
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          initCinematic();
        });
      });
    };

    loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js').then(() =>
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js').then(initGSAP)
    );

    return () => revealObserver.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });
  const handleSubmit = (e) => e.preventDefault();

  const css = `
    :root{--accent:${accent};--primary:${primary}}
    *{box-sizing:border-box} html{scroll-behavior:smooth}
    body{margin:0;font-family:Inter,sans-serif;background:${bodyBg};color:${primary}}
    a{text-decoration:none;color:inherit}
    img,video{max-width:100%}
    .page{background:${bodyBg};overflow-x:hidden}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{position:relative;padding:88px 0}
    .bg-white{background:#fff}.bg-tint{background:#f5f5f5}
    .section-title{font:800 40px/1.15 "Plus Jakarta Sans",sans-serif;letter-spacing:-.02em;margin:0 0 14px}
    .section-desc{font-size:16px;line-height:1.8;color:#5b5b5b;margin:0}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .top-strip{position:sticky;top:0;z-index:60;background:rgba(15,15,15,.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand-name{font:800 20px/1.2 "Plus Jakarta Sans",sans-serif;color:#fff}
    .nav-right{display:flex;align-items:center;gap:16px}
    .animated-cta{display:inline-flex;align-items:center;justify-content:center;padding:13px 22px;border-radius:10px;background:${accent};color:#fff;font-weight:700;border:none;transition:transform .25s ease,box-shadow .25s ease,background .25s ease}
    .animated-cta:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(255,107,0,.24);background:#e66000}
    .ghost-btn{display:inline-flex;align-items:center;justify-content:center;padding:13px 22px;border-radius:10px;border:1px solid rgba(255,255,255,.28);color:#fff;background:rgba(255,255,255,.08);font-weight:700;transition:.25s}
    .ghost-btn:hover{transform:translateY(-2px);background:rgba(255,255,255,.14);box-shadow:0 12px 28px rgba(0,0,0,.16)}
    .hero{min-height:100vh;display:flex;align-items:center;padding:120px 0 72px;color:#fff;position:relative;background:#111}
    .hero-media-bg,.hero-overlay{position:absolute;inset:0}
    .hero-media-bg video{width:100%;height:100%;object-fit:cover;display:block}
    .hero-overlay{background:rgba(0,0,0,.55)}
    .hero-orb,.hero-orb2{position:absolute;border-radius:50%;pointer-events:none;filter:blur(20px)}
    .hero-orb{width:320px;height:320px;right:-80px;top:90px;background:radial-gradient(circle, rgba(255,107,0,.28), transparent 70%)}
    .hero-orb2{width:260px;height:260px;left:-60px;bottom:20px;background:radial-gradient(circle, rgba(255,255,255,.12), transparent 70%)}
    .hero-grid{position:relative;z-index:2;display:grid;grid-template-columns:1.12fr .88fr;gap:42px;align-items:center;width:100%}
    .banner-title{font:800 clamp(48px,6vw,68px)/1.04 "Plus Jakarta Sans",sans-serif;letter-spacing:-.04em;margin:0 0 18px;word-break:normal;overflow-wrap:normal;hyphens:none;white-space:normal}
    .hero p{font-size:18px;line-height:1.8;color:rgba(255,255,255,.86);margin:0}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0 28px}
    .chip{display:inline-flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(255,107,0,.35);background:rgba(255,107,0,.1);font-size:13px;color:#fff}
    .hero-actions{display:flex;flex-wrap:wrap;gap:14px}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center}
    .form-card{width:100%;max-width:440px;background:rgba(255,255,255,.96);border:1px solid rgba(255,255,255,.2);border-radius:20px;padding:24px;box-shadow:0 24px 70px rgba(0,0,0,.28);color:${primary}}
    .form-card h3{margin:0 0 8px;font:800 28px/1.2 "Plus Jakarta Sans",sans-serif}
    .form-card p{margin:0 0 18px;color:#5b5b5b;font-size:14px;line-height:1.7}
    .field{margin-bottom:14px}
    .field input{width:100%;height:50px;border-radius:12px;border:1px solid #e5e7eb;padding:0 14px;font-size:15px;outline:none;transition:.2s;background:#fff}
    .field input:focus{border-color:${accent};box-shadow:0 0 0 4px rgba(255,107,0,.12)}
    .full-btn{width:100%}
    .metrics-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
    .metric-card{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:22px}
    .metric-card h4{margin:0 0 8px;font:800 16px/1.3 "Plus Jakarta Sans",sans-serif}
    .metric-card .metric-num{font:800 34px/1 "Plus Jakarta Sans",sans-serif;color:${primary};margin-bottom:8px}
    .metric-card p{margin:0;color:#5b5b5b;line-height:1.6;font-size:14px}
    .split-section{display:grid;grid-template-columns:1fr 1fr;gap:54px;align-items:center}
    .badge{display:inline-block;padding:8px 12px;border-radius:999px;background:rgba(255,107,0,.1);border:1px solid rgba(255,107,0,.22);color:${accent};font-weight:700;font-size:12px;margin-bottom:16px}
    .desc-line{border-left:2px solid rgba(26,26,26,.14);padding-left:18px;margin:18px 0 24px}
    .feature-list{display:flex;flex-direction:column;gap:14px}
    .feature-item{display:flex;gap:14px;padding:16px;border-radius:16px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 4px 24px rgba(0,0,0,.04);transition:.25s}
    .feature-item:hover,.hover-lift:hover{transform:translateY(-6px);box-shadow:0 14px 34px rgba(0,0,0,.08)}
    .feature-icon{width:42px;height:42px;min-width:42px;border-radius:12px;background:rgba(255,107,0,.12);display:grid;place-items:center;color:${accent}}
    .feature-item h4{margin:0 0 6px;font:800 17px/1.3 "Plus Jakarta Sans",sans-serif}
    .feature-item p{margin:0;color:#5b5b5b;font-size:14px;line-height:1.65}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:22px;border:1px solid #dcdcdc;background:#0a0a0a;box-shadow:0 18px 40px rgba(0,0,0,.12)}
    .browser-top{display:flex;gap:8px;padding:14px 16px;background:rgba(255,255,255,.04);border-bottom:1px solid rgba(255,255,255,.08)}
    .browser-top span{width:10px;height:10px;border-radius:50%;background:#fff;opacity:.55}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .video-panel{border-radius:22px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 18px 40px rgba(0,0,0,.1);background:#f8f8f8}
    .video-panel video{width:100%;height:420px;object-fit:cover;display:block}
    .dashboard-visual{background:linear-gradient(135deg,#111 0%,#232323 100%);border-radius:22px;padding:24px;border:1px solid rgba(255,255,255,.08);color:#fff;min-height:420px;display:flex;flex-direction:column;justify-content:center}
    .dashboard-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:14px;margin-top:20px}
    .dash-card{padding:18px;border-radius:16px;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1)}
    .dash-card strong{display:block;font:800 26px/1 "Plus Jakarta Sans",sans-serif;margin-bottom:8px}
    .dash-card span{font-size:13px;color:rgba(255,255,255,.72)}
    .pricing-wrap{display:grid;grid-template-columns:repeat(2,1fr);gap:24px}
    .pricing-card{background:#fff;border:1px solid #e5e7eb;border-radius:22px;padding:28px;box-shadow:0 8px 28px rgba(0,0,0,.05);position:relative}
    .pricing-card.highlight{border-color:rgba(255,107,0,.38);box-shadow:0 16px 40px rgba(255,107,0,.08)}
    .green-badge{display:inline-flex;padding:7px 12px;border-radius:999px;background:#e8f8ee;color:#1b8f4d;font-weight:700;font-size:12px;margin-bottom:14px}
    .pricing-card h3{margin:0 0 8px;font:800 24px/1.3 "Plus Jakarta Sans",sans-serif}
    .old-price{min-height:20px;color:#9ca3af;text-decoration:line-through;font-size:14px}
    .new-price{font:800 34px/1.1 "Plus Jakarta Sans",sans-serif;margin:8px 0 18px}
    .price-empty{color:#6b7280;font-weight:600;font-size:16px;margin:8px 0 18px}
    .check-list{display:flex;flex-direction:column;gap:12px;margin:0 0 22px;padding:0;list-style:none}
    .check-list li{display:flex;gap:10px;color:#374151;line-height:1.6;font-size:14px}
    .check{width:20px;height:20px;min-width:20px;border-radius:50%;background:rgba(255,107,0,.12);color:${accent};display:grid;place-items:center;font-size:12px;font-weight:800;margin-top:2px}
    .testimonial-wrap{background:#fff;border:1px solid #e5e7eb;border-radius:24px;overflow:hidden;box-shadow:0 8px 24px rgba(0,0,0,.05)}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-slide{min-width:100%;padding:38px}
    .quote-mark{font-size:64px;line-height:1;color:${accent};margin-bottom:10px}
    .testimonial-quote{font:600 22px/1.7 Inter,sans-serif;color:${primary};margin:0 0 24px}
    .author-row{display:flex;align-items:center;gap:14px}
    .author-row img{width:58px;height:58px;border-radius:50%;object-fit:cover}
    .author-meta strong{display:block;font:800 16px/1.3 "Plus Jakarta Sans",sans-serif}
    .author-meta span{color:#6b7280;font-size:14px}
    .stars{color:#f5b301;font-size:18px;letter-spacing:2px;margin-top:4px}
    .dots{display:flex;justify-content:center;gap:8px;padding:18px 0 6px}
    .dots button{border:none;height:8px;border-radius:999px;background:#d1d5db;cursor:pointer;transition:.25s}
    .dots button.active{width:26px;background:${accent}} .dots button:not(.active){width:8px}
    .sticky-cta-bar{position:fixed;left:0;right:0;bottom:0;z-index:55;background:rgba(255,255,255,.94);backdrop-filter:blur(18px);border-top:1px solid #e5e7eb;padding:12px 16px}
    .sticky-cta-inner{width:min(1180px,calc(100% - 32px));margin:0 auto;display:flex;align-items:center;justify-content:space-between;gap:16px}
    .sticky-cta-inner p{margin:0;font-weight:700;color:${primary}}
    .footer{background:#111;padding:34px 0 90px;color:#fff}
    .footer-top{display:flex;flex-wrap:wrap;justify-content:space-between;gap:24px;align-items:flex-start}
    .footer-logo img{height:28px}
    .footer p,.footer a{color:rgba(255,255,255,.78);font-size:14px}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .socials a{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.08);border:1px solid rgba(255,255,255,.1)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}
    .scene-expand{width:75%;margin:0 auto;border-radius:24px;overflow:hidden;will-change:width,border-radius}
    .scene-expand img{width:100%;height:100%;object-fit:cover;transform:scale(1.08);will-change:transform}
    .zoom-reveal{overflow:hidden;border-radius:16px}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.15);will-change:transform;transition:transform 0s}
    [data-depth]{will-change:transform}.depth-foreground{position:relative;z-index:3}.depth-midground{position:relative;z-index:2}.depth-background{position:absolute;inset:0;z-index:1}
    .card-3d-stack{position:relative;transform-style:preserve-3d;perspective:1000px}
    .card-3d-stack>*:nth-child(1){transform:translateZ(40px) translateY(0)}
    .card-3d-stack>*:nth-child(2){transform:translateZ(20px) translateY(12px) scale(.97);opacity:.8}
    .card-3d-stack>*:nth-child(3){transform:translateZ(0) translateY(24px) scale(.94);opacity:.5}
    .clip-reveal{clip-path:inset(100% 0 0 0);will-change:clip-path}
    .hero-cinematic-bg{transform:scale(1.06);transform-origin:center center;will-change:transform}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
    @keyframes driftLeft{0%,100%{transform:translateX(0) translateY(0)}33%{transform:translateX(-12px) translateY(-8px)}66%{transform:translateX(8px) translateY(-14px)}}
    .float-ambient{animation:floatY 6s ease-in-out infinite}.float-drift{animation:driftLeft 10s ease-in-out infinite}
    .stagger-parent>*{opacity:0;transform:translateY(32px);will-change:opacity,transform}
    .split-text .char{display:inline-block;will-change:transform,opacity}
    .btn-magnetic{position:relative;transition:transform .3s cubic-bezier(.34,1.56,.64,1);display:inline-block}
    .cursor-glow{position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);background:radial-gradient(circle,var(--accent-glow,rgba(255,107,0,.12)) 0%,transparent 70%);transition:opacity .3s ease}
    .glass-card{background:rgba(255,255,255,.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.1);border-radius:20px}
    @media (max-width: 992px){
      .hero-grid,.split-section,.pricing-wrap,.metrics-strip{grid-template-columns:1fr}
      .hero{min-height:auto;padding-top:108px}
      .hero-visual{min-height:auto}
      .banner-title{font-size:48px}
      .sticky-cta-inner{flex-direction:column;align-items:stretch}
    }
    @media (max-width: 640px){
      .nav-inner{grid-template-columns:1fr;justify-items:start}
      .nav-right{width:100%;justify-content:space-between}
      .section{padding:68px 0}
      .banner-title{font-size:42px}
      .section-title{font-size:32px}
      .testimonial-slide{padding:24px}
      .testimonial-quote{font-size:18px}
      .footer-top{flex-direction:column}
    }
  `;

  const Icon = ({ children }) => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden="true">
      {children}
    </svg>
  );

  return (
    <div className="page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="top-strip">
        <div className="container nav-inner">
          <div className="brand-name">Seedream 4.5 and Seedance 1.5 Pro</div>
          <div className="nav-right">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <a href={navCTA.href} className="animated-cta btn-magnetic">
            {navCTA.text}
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="hero-media-bg hero-cinematic-bg depth-background" data-depth="0.4">
          <video autoPlay muted loop playsInline preload="auto">
            <source src={heroVideo} type="video/mp4" />
          </video>
        </div>
        <div className="hero-overlay" />
        <div className="hero-orb float-drift" />
        <div className="hero-orb2 float-ambient" />
        <div className="container hero-grid">
          <div data-depth="0.15">
            <h1
              className="banner-title split-text reveal"
              data-text="Create High-Quality AI Images & Videos with ByteDance Generative Models"
            >
              Create High-Quality AI Images & Videos with ByteDance Generative Models
            </h1>
            <p className="reveal reveal-delay-1">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation)
              and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by
              ByteDance for high-quality visual content creation.
            </p>

            <div className="chips reveal reveal-delay-2">
              {[
                'AI Image Generation',
                'AI Video Generation with Audio',
                'Multimodal Content Creation',
                'Enterprise-ready AI infrastructure',
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  <Icon>
                    <path d="M12 3l2.8 5.7L21 9.6l-4.5 4.4 1.1 6.2L12 17.3 6.4 20.2 7.5 14 3 9.6l6.2-.9L12 3z" fill="currentColor" />
                  </Icon>
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions reveal reveal-delay-3">
              <a href={heroCTA.href} className="animated-cta btn-magnetic">
                {heroCTA.text}
              </a>
              <a href="#pricing" className="ghost-btn">
                Generate with AI
              </a>
            </div>
          </div>

          <div className="hero-visual" id="lead-form">
            <div className="form-card reveal">
              <h3>Get Free Consultation</h3>
              <p>
                Professionals and teams creating high-quality visual content, including creative
                directors, video producers, art directors, marketing managers, and creative leads
              </p>
              <form onSubmit={handleSubmit}>
                <div className="field">
                  <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                </div>
                <div className="field">
                  <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} />
                </div>
                <div className="field">
                  <input type="tel" name="phone" placeholder="Phone" value={formData.phone} onChange={handleChange} />
                </div>
                <div className="field">
                  <input type="text" name="company" placeholder="Company" value={formData.company} onChange={handleChange} />
                </div>
                <button type="submit" className="animated-cta btn-magnetic full-btn">
                  Generate with AI
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white clip-reveal">
        <div className="container">
          <div className="metrics-strip stagger-parent">
            <div className="metric-card hover-lift">
              <div className="metric-num" data-count="4" data-suffix="">
                0
              </div>
              <h4>Trust signals</h4>
              <p>AI Image Generation, AI Video Generation with Audio, Multimodal Content Creation, Enterprise-ready AI infrastructure</p>
            </div>
            <div className="metric-card hover-lift">
              <div className="metric-num" data-count="4" data-suffix="K">
                0
              </div>
              <h4>High-Resolution Output</h4>
              <p>Generate native images up to 1K–4K resolution with strong visual fidelity.</p>
            </div>
            <div className="metric-card hover-lift">
              <div className="metric-num" data-count="10" data-suffix="×">
                0
              </div>
              <h4>Faster Inference</h4>
              <p>Optimized inference pipeline significantly improves generation speed.</p>
            </div>
            <div className="metric-card hover-lift">
              <div className="metric-num" data-count="2" data-suffix="">
                0
              </div>
              <h4>Generative models</h4>
              <p>Seedream 4.5 for image generation and Seedance 1.5 Pro for video generation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-tint">
        <div className="container split-section">
          <div className="scene-expand reveal">
            <div className="browser-frame zoom-reveal">
              <div className="browser-top">
                <span />
                <span />
                <span />
              </div>
              <img src={seedreamImage} alt="Seedream 4.5" />
            </div>
          </div>

          <div className="slide-right" data-depth="0.2">
            <span className="badge reveal">Seedream 4.5</span>
            <h2 className="section-title reveal">
              AI Image Generation with <span className="gradient-text">Seedream 4.5</span>
            </h2>
            <div className="desc-line reveal reveal-delay-1">
              <p className="section-desc">
                Seedream 4.5 is a high-performance multimodal image generation system designed to
                produce high-resolution, high-fidelity images from text prompts and visual inputs.
                The model unifies text-to-image synthesis, image editing, and multi-image composition
                within a single framework.
              </p>
            </div>

            <div className="feature-list stagger-parent">
              {[
                ['Advanced Text–Image Alignment', 'Accurately translates prompts into visuals with improved semantic understanding.'],
                ['High-Resolution Output', 'Generate native images up to 1K–4K resolution with strong visual fidelity.'],
                ['Superior Typographic Rendering', 'Optimized for posters, ads, and text-heavy visual designs.'],
                ['Multi-Image Composition with Identity Preservation', 'Combines multiple inputs while accurately maintaining subject consistency.'],
                ['Strong Structural Fidelity', 'Maintains composition, layout, and scene structure with high precision.'],
              ].map(([title, desc], i) => (
                <div className="feature-item hover-lift" key={i}>
                  <div className="feature-icon">
                    <Icon>
                      <path d="M4 6h16M4 12h10M4 18h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                    </Icon>
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 22 }}>
              <a href={productCTA.href} className="animated-cta btn-magnetic">
                {productCTA.text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white pin-scene">
        <div className="container split-section">
          <div className="slide-left" data-depth="0.2">
            <span className="badge reveal">Seedance 1.5 Pro</span>
            <h2 className="section-title reveal">
              AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro by Bytedance</span>
            </h2>
            <div className="desc-line reveal reveal-delay-1">
              <p className="section-desc">
                Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual
                generation, enabling synchronized creation of video and sound together. Built on a
                dual-branch diffusion transformer architecture, the model integrates cross-modal learning
                to produce coherent visual and audio outputs.
              </p>
            </div>

            <div className="feature-list stagger-parent">
              {[
                ['Key Capabilities of Seedance 1.5 Pro', 'Seedance enables professional-grade AI video production with narrative coherence and realistic motion.'],
                ['Text-to-Video Generation', 'Create videos directly from text prompts.'],
                ['Audio-Visual Synchronization', 'Generate video and audio simultaneously with strong multimodal alignment.'],
                ['Multilingual Lip-Sync', 'Supports multilingual and dialect-level lip synchronization.'],
                ['Cinematic Camera Control', 'Generate videos with dynamic camera movement and cinematic storytelling.'],
                ['10× Faster Inference', 'Optimized inference pipeline significantly improves generation speed.'],
              ].map(([title, desc], i) => (
                <div className="feature-item hover-lift" key={i}>
                  <div className="feature-icon">
                    <Icon>
                      <path d="M8 7v10l9-5-9-5z" fill="currentColor" />
                    </Icon>
                  </div>
                  <div>
                    <h4>{title}</h4>
                    <p>{desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 22 }}>
              <a href={featureCTA.href} className="animated-cta btn-magnetic">
                {featureCTA.text}
              </a>
            </div>
          </div>

          <div className="slide-right reveal">
            <div className="video-panel zoom-reveal">
              <img src={seedanceImage} alt="Seedance 1.5 Pro" style={{ width: '100%', height: '420px', objectFit: 'cover', display: 'block' }} />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-tint" id="pricing">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <h2 className="section-title reveal">
              Pricing for <span className="gradient-text">Seedream 4.5 and Seedance 1.5 Pro</span>
            </h2>
            <p className="section-desc reveal reveal-delay-1">
              Compare the available plans and features for AI image generation and AI video generation.
            </p>
          </div>

          <div className="pricing-wrap stagger-parent">
            <div className="pricing-card highlight hover-lift pop-in">
              <span className="green-badge">Highlighted Card</span>
              <h3>Seedream 4.5 (AI Image Generation)</h3>
              <div className="old-price">&nbsp;</div>
              <div className="price-empty">Pricing on request</div>
              <ul className="check-list">
                <li><span className="check">✓</span>High-resolution image generation (up to 4K quality)</li>
                <li><span className="check">✓</span>Text-to-image &amp; multimodal image editing</li>
                <li><span className="check">✓</span>Multi-image composition for complex visuals</li>
                <li><span className="check">✓</span>Enhanced typographic rendering for posters, ads &amp; text-heavy designs</li>
              </ul>
              <a href={pricingCTA.href} className="animated-cta btn-magnetic full-btn">
                {pricingCTA.text}
              </a>
            </div>

            <div className="pricing-card hover-lift pop-in">
              <span className="green-badge">Starting at</span>
              <h3>Seedance 1.5 Pro (AI Video Generation)</h3>
              <div className="old-price">&nbsp;</div>
              <div className="new-price">Starting at $1,000/month/</div>
              <ul className="check-list">
                <li><span className="check">✓</span>Text-to-video generation with cinematic output</li>
                <li><span className="check">✓</span>Native audio + video generation (synchronized)</li>
                <li><span className="check">✓</span>Multilingual lip-sync capabilities</li>
                <li><span className="check">✓</span>Fast inference for quicker video production</li>
              </ul>
              <div className="dashboard-visual glass-card" style={{ minHeight: 0, marginTop: 12 }}>
                <div className="dashboard-grid">
                  <div className="dash-card">
                    <strong data-count="10" data-suffix="×">0</strong>
                    <span>10× Faster Inference</span>
                  </div>
                  <div className="dash-card">
                    <strong data-count="2" data-suffix="">0</strong>
                    <span>Audio + Video Generation</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <div style={{ maxWidth: 760, marginBottom: 28 }}>
            <h2 className="section-title reveal">
              What creative teams say about <span className="gradient-text">Seedream and Seedance</span>
            </h2>
            <p className="section-desc reveal reveal-delay-1">
              Real feedback from creative directors, video producers, art directors, marketing managers, and creative leads.
            </p>
          </div>

          <div className="testimonial-wrap reveal">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div className="testimonial-slide" key={i}>
                  <div className="quote-mark">❝</div>
                  <p className="testimonial-quote">{t.quote}</p>
                  <div className="author-row">
                    <img src={avatarImg} alt={t.author} />
                    <div className="author-meta">
                      <strong>{t.author}</strong>
                      <span>{t.role}</span>
                      <div className="stars">★★★★★</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="dots">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  className={i === activeTestimonial ? 'active' : ''}
                  onClick={() => setActiveTestimonial(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="sticky-cta-bar">
        <div className="sticky-cta-inner">
          <p>Seedream 4.5 and Seedance 1.5 Pro</p>
          <a href={stickyCTA.href} className="animated-cta btn-magnetic">
            {stickyCTA.text}
          </a>
        </div>
      </div>

      <footer className="footer">
        <div className="container footer-top">
          <div className="footer-logo">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              alt="Techjockey"
            />
            <p style={{ marginTop: 14 }}>support@techjockey.com</p>
            <p>© 2024 Techjockey Infotech Pvt. Ltd.</p>
          </div>

          <div>
            <div className="footer-links" style={{ marginBottom: 16 }}>
              <a href="/privacy-policy">Privacy Policy</a>
              <a href="/terms-condition">Terms</a>
            </div>
            <div className="socials">
              <a href="https://www.facebook.com/Techjockey/" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.6.4-1 1-1z"/></svg>
              </a>
              <a href="https://www.instagram.com/techjockey/" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm6-1.8a1.05 1.05 0 11-1.05 1.05A1.05 1.05 0 0118 5.7z"/></svg>
              </a>
              <a href="https://x.com/techjockey" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.1l-4.8-6.2L6.7 22H3.6l7.3-8.3L1 2h6.3l4.3 5.7L18.9 2z"/></svg>
              </a>
              <a href="https://www.linkedin.com/company/techjockey-infotech-pvt-ltd/" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5A1.56 1.56 0 115.38 6.9 1.56 1.56 0 016.94 8.5zM4 10h3v10H4zm5 0h2.9v1.4h.1A3.18 3.18 0 0114.86 10C18 10 18.6 12 18.6 14.6V20h-3v-4.8c0-1.1 0-2.5-1.5-2.5s-1.8 1.2-1.8 2.4V20H9z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
