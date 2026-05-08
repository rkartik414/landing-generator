import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#b3713f';
  const primary = '#b3713f';
  const bodyBg = '#06080c';

  const ctaItems = [
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
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      name: 'Vaishali Saxena',
      role: 'Creative Director',
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      name: 'Vihaan Pandey',
      role: 'Video Producer',
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      name: 'Anurag Malhotra',
      role: 'Art Director',
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      name: 'Ashutosh Singh',
      role: 'Marketing Manager',
    },
    {
      quote:
        'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.',
      name: 'Shrimmi Saxena',
      role: 'Creative Lead',
    },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const cursorGlowCleanup = useRef(null);

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
    document.documentElement.style.setProperty('--accent-glow', 'rgba(179,113,63,0.18)');

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
        const existing = document.querySelector(`script[src="${src}"]`);
        if (existing) {
          resolve();
          return;
        }
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

          const mouseMove = (e) => {
            gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
          };
          window.addEventListener('mousemove', mouseMove);
          cursorGlowCleanup.current = () => {
            window.removeEventListener('mousemove', mouseMove);
            if (glow.parentNode) glow.parentNode.removeChild(glow);
          };

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

          document.querySelectorAll('.btn-magnetic').forEach((btn) => {
            const move = (e) => {
              const rect = btn.getBoundingClientRect();
              const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
              const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
              gsap.to(btn, { x, y, duration: 0.4, ease: 'power2.out' });
            };
            const leave = () => {
              gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
            };
            btn.addEventListener('mousemove', move);
            btn.addEventListener('mouseleave', leave);
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
                const current = this.targets()[0].val;
                el.textContent = prefix + Math.max(0, current).toFixed(target % 1 ? 1 : 0).replace('.0', '') + suffix;
              },
            });
          });

          ScrollTrigger.refresh();
        });
      });
    };

    Promise.all([
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js'),
      loadScript('https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js'),
    ]).then(initGSAP).catch(() => {});

    return () => {
      observer.disconnect();
      if (cursorGlowCleanup.current) cursorGlowCleanup.current();
      if (window.ScrollTrigger) {
        window.ScrollTrigger.getAll().forEach((t) => t.kill());
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
    :root{--accent:${accent};--primary:${primary}}
    *{box-sizing:border-box}
    html,body,#root{margin:0;padding:0;background:${bodyBg};color:#f9fafb;font-family:Inter,sans-serif}
    body{overflow-x:hidden}
    a{text-decoration:none;color:inherit}
    img,video{max-width:100%}
    .landing-page{background:${bodyBg};color:#f9fafb}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{position:relative;padding:92px 0;overflow:hidden}
    .section-alt{background:#0f1117}
    .section-dark{background:#06080c}
    .nav{position:sticky;top:0;z-index:50;background:rgba(6,8,12,.84);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav-inner{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0}
    .nav-left{flex:1;min-width:0}
    .nav-left span{display:block;font-weight:800;font-size:20px;line-height:1.2;color:#fff}
    .nav-right{display:flex;align-items:center;gap:16px}
    .brand-tech{display:flex;align-items:center}
    .banner-title{font-family:"Plus Jakarta Sans",sans-serif;font-size:clamp(48px,6vw,74px);line-height:1.02;letter-spacing:-.03em;margin:0 0 20px;word-break:normal;overflow-wrap:normal;hyphens:none;white-space:normal;max-width:100%}
    h2{font-family:"Plus Jakarta Sans",sans-serif;font-size:clamp(32px,4vw,48px);line-height:1.1;margin:0 0 18px}
    h3{font-family:"Plus Jakarta Sans",sans-serif;font-size:22px;line-height:1.2;margin:0 0 10px}
    p{margin:0 0 14px;color:#9ca3af;font-size:16px;line-height:1.75}
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .animated-cta,.ghost-cta{display:inline-flex;align-items:center;justify-content:center;padding:14px 24px;border-radius:12px;font-weight:700;transition:transform .25s ease,box-shadow .25s ease,background .25s ease;border:1px solid rgba(255,255,255,.12)}
    .animated-cta{background:${accent};color:#fff;box-shadow:0 10px 30px rgba(179,113,63,.22)}
    .animated-cta:hover,.ghost-cta:hover{transform:translateY(-2px);box-shadow:0 12px 28px rgba(0,0,0,.25)}
    .ghost-cta{background:rgba(255,255,255,.04);color:#fff}
    .hero{min-height:100vh;display:flex;align-items:center;padding:72px 0 88px;background:#06080c}
    .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center}
    .hero-copy{position:relative;z-index:3}
    .hero-sub{max-width:680px;font-size:18px}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:26px 0 30px}
    .chip{display:flex;align-items:center;gap:8px;padding:10px 14px;border-radius:999px;border:1px solid rgba(179,113,63,.3);background:rgba(179,113,63,.08);color:#d1d5db;font-size:13px}
    .hero-actions{display:flex;gap:14px;flex-wrap:wrap}
    .hero-visual{position:relative;min-height:540px;display:flex;align-items:center;justify-content:center}
    .hero-media-shell{position:relative;width:100%;border-radius:28px;overflow:hidden;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.04);box-shadow:0 30px 80px rgba(0,0,0,.45)}
    .hero-media-shell video{width:100%;min-height:540px;height:540px;object-fit:cover;display:block}
    .floating-card{position:absolute;padding:14px 16px;border-radius:18px;background:rgba(11,14,19,.78);border:1px solid rgba(255,255,255,.1);backdrop-filter:blur(18px);box-shadow:0 20px 50px rgba(0,0,0,.35)}
    .floating-card strong{display:block;color:#fff;font-size:14px;margin-bottom:4px}
    .floating-card span{color:#9ca3af;font-size:12px}
    .fc-1{top:20px;left:-12px}
    .fc-2{right:-8px;bottom:44px}
    .section-tag{display:inline-flex;align-items:center;padding:8px 12px;border-radius:999px;background:rgba(179,113,63,.12);border:1px solid rgba(179,113,63,.28);color:#f3d3b6;font-size:12px;font-weight:700;letter-spacing:.04em;text-transform:uppercase;margin-bottom:16px}
    .metrics-strip{display:grid;grid-template-columns:repeat(4,1fr);gap:16px}
    .metric-card{padding:22px;border-radius:18px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1)}
    .metric-card h4{margin:0 0 6px;font-size:15px;color:#fff}
    .metric-card p{margin:0;font-size:14px;line-height:1.6}
    .split-wrap{display:grid;grid-template-columns:1fr 1fr;gap:54px;align-items:center}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:22px;border:1px solid rgba(255,255,255,.12);box-shadow:0 24px 70px rgba(0,0,0,.4)}
    .browser-frame.light{background:#f8f8f8}
    .browser-frame.dark{background:#0a0a0a}
    .browser-bar{display:flex;align-items:center;gap:8px;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,.08)}
    .browser-dot{width:10px;height:10px;border-radius:50%;background:rgba(255,255,255,.35)}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .feature-list{display:flex;flex-direction:column;gap:14px;margin-top:26px}
    .feature-item{display:flex;gap:14px;padding:16px 0;border-bottom:1px solid rgba(255,255,255,.08)}
    .feature-item:last-child{border-bottom:none}
    .icon-box{width:42px;height:42px;flex:0 0 42px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:rgba(179,113,63,.12);border:1px solid rgba(179,113,63,.25)}
    .feature-item h4{margin:0 0 6px;font-size:17px;color:#fff}
    .feature-item p{margin:0}
    .desc-block{border-left:2px solid rgba(255,255,255,.14);padding-left:18px}
    .video-gallery-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:18px;margin-top:26px}
    .video-card{border-radius:18px;overflow:hidden;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1)}
    .video-card video{width:100%;height:220px;object-fit:cover;display:block}
    .video-card .cap{padding:12px 14px;font-size:14px;color:#d1d5db}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:22px}
    .price-card{position:relative;padding:28px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1)}
    .price-card.highlight{box-shadow:0 0 0 1px rgba(179,113,63,.45),0 20px 60px rgba(179,113,63,.12)}
    .badge-green{display:inline-flex;padding:7px 10px;border-radius:999px;background:rgba(52,211,153,.14);color:#86efac;border:1px solid rgba(52,211,153,.25);font-size:12px;font-weight:700;margin-bottom:16px}
    .price-amount{font-size:34px;font-family:"Plus Jakarta Sans",sans-serif;color:#fff;font-weight:800;margin:10px 0 18px}
    .muted-line{text-decoration:line-through;color:rgba(255,255,255,.35);min-height:20px}
    .checklist{display:flex;flex-direction:column;gap:12px;margin:22px 0 26px}
    .check{display:flex;gap:10px;color:#d1d5db;font-size:15px;line-height:1.6}
    .check svg{flex:0 0 18px;margin-top:4px}
    .full-btn{width:100%}
    .testimonial-shell{position:relative;overflow:hidden}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-card{min-width:100%;padding:10px}
    .testimonial-inner{padding:34px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);display:grid;grid-template-columns:140px 1fr;gap:24px;align-items:center}
    .avatar-wrap img{width:120px;height:120px;border-radius:20px;object-fit:cover;display:block;border:1px solid rgba(255,255,255,.12)}
    .quote-mark{font-size:48px;line-height:1;color:${accent};font-weight:800}
    .stars{color:#f5c451;letter-spacing:2px;margin:10px 0 14px}
    .author{font-weight:800;color:#fff}
    .role{color:#9ca3af;font-size:14px}
    .testimonial-nav{display:flex;align-items:center;justify-content:center;gap:12px;margin-top:22px}
    .nav-btn,.dot-btn{background:none;border:none;cursor:pointer}
    .nav-btn{width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.1);color:#fff}
    .dots{display:flex;gap:8px}
    .dot-btn{width:8px;height:8px;border-radius:999px;background:rgba(255,255,255,.28);transition:all .3s ease;padding:0}
    .dot-btn.active{width:24px;background:${accent}}
    .cta-strip{padding:72px 0;background:#0f1117;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08)}
    .cta-box{text-align:center;padding:40px;border-radius:26px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1)}
    .footer{background:#06080c;padding:40px 0 26px;border-top:1px solid rgba(255,255,255,.08)}
    .footer-top{display:flex;align-items:center;justify-content:space-between;gap:20px;flex-wrap:wrap;margin-bottom:18px}
    .footer-links,.footer-social{display:flex;align-items:center;gap:16px;flex-wrap:wrap}
    .footer-bottom{display:flex;align-items:center;justify-content:space-between;gap:14px;flex-wrap:wrap;padding-top:18px;border-top:1px solid rgba(255,255,255,.08);color:#9ca3af;font-size:14px}
    .social-icon{width:38px;height:38px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);transition:transform .25s ease,background .25s ease}
    .social-icon:hover{transform:translateY(-2px);background:rgba(179,113,63,.12)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}
    .reveal-delay-2{transition-delay:.2s}
    .reveal-delay-3{transition-delay:.3s}
    .hover-lift{transition:transform .25s ease,box-shadow .25s ease}
    .hover-lift:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(0,0,0,.28)}
    .scene-expand{width:75%;margin:0 auto;border-radius:24px;overflow:hidden;will-change:width,border-radius}
    .scene-expand img,.scene-expand video{width:100%;height:100%;object-fit:cover;transform:scale(1.08);will-change:transform}
    .zoom-reveal{overflow:hidden;border-radius:16px}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.15);will-change:transform;transition:transform 0s}
    [data-depth]{will-change:transform}
    .depth-foreground{position:relative;z-index:3}
    .depth-background{position:absolute;inset:0;z-index:1}
    .clip-reveal{clip-path:inset(100% 0 0 0);will-change:clip-path}
    .hero-cinematic-bg{transform:scale(1.06);transform-origin:center center;will-change:transform}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-14px)}}
    @keyframes driftLeft{0%,100%{transform:translateX(0) translateY(0)}33%{transform:translateX(-12px) translateY(-8px)}66%{transform:translateX(8px) translateY(-14px)}}
    .float-ambient{animation:floatY 6s ease-in-out infinite}
    .float-drift{animation:driftLeft 10s ease-in-out infinite}
    .stagger-parent>*{opacity:0;transform:translateY(32px);will-change:opacity,transform}
    .text-reveal-mask{overflow:hidden;display:block}
    .text-reveal-inner{display:block;transform:translateY(110%);will-change:transform}
    .btn-magnetic{position:relative;transition:transform .3s cubic-bezier(.34,1.56,.64,1);display:inline-block}
    .cursor-glow{position:fixed;width:400px;height:400px;border-radius:50%;pointer-events:none;z-index:9999;transform:translate(-50%,-50%);background:radial-gradient(circle,var(--accent-glow, rgba(179,113,63,.12)) 0%,transparent 70%);transition:opacity .3s ease}
    .glass-card{background:rgba(255,255,255,.06);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border:1px solid rgba(255,255,255,.1);border-radius:20px}
    .hero-orb,.section-orb{position:absolute;border-radius:50%;pointer-events:none;filter:blur(20px)}
    .hero-orb.one{width:340px;height:340px;right:-80px;top:-40px;background:radial-gradient(circle, rgba(179,113,63,.22) 0%, transparent 70%)}
    .hero-orb.two{width:280px;height:280px;left:-80px;bottom:20px;background:radial-gradient(circle, rgba(179,113,63,.12) 0%, transparent 70%)}
    .section-orb{width:260px;height:260px;background:radial-gradient(circle, rgba(179,113,63,.14) 0%, transparent 72%)}
    .orb-right{right:-90px;top:0}
    .orb-left{left:-90px;bottom:0}
    @media (max-width: 991px){
      .hero{min-height:auto}
      .hero-grid,.split-wrap,.pricing-grid,.testimonial-inner,.metrics-strip,.video-gallery-grid{grid-template-columns:1fr}
      .hero-visual{min-height:420px}
      .hero-media-shell video{min-height:420px;height:420px}
      .testimonial-inner{display:block}
      .avatar-wrap{margin-bottom:18px}
      .nav-inner{gap:10px}
      .nav-left span{font-size:16px}
      .nav-right{gap:10px}
    }
    @media (max-width: 640px){
      .section{padding:74px 0}
      .hero-actions{flex-direction:column;align-items:flex-start}
      .animated-cta,.ghost-cta{width:100%}
      .nav-right .animated-cta{width:auto;padding:11px 16px}
      .floating-card{display:none}
      .browser-frame img{height:280px}
      .video-card video{height:180px}
      .footer-top,.footer-bottom{flex-direction:column;align-items:flex-start}
    }
  `;

  const ArrowRight = () => (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none">
      <path d="M5 12h14M13 5l7 7-7 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const CheckIcon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
      <path d="M20 6L9 17l-5-5" stroke={accent} strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );

  const FeatureIcon = ({ type = 0 }) => {
    const icons = [
      <path key="1" d="M4 12l4 4 12-12" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
      <path key="2" d="M12 3l7 4v10l-7 4-7-4V7l7-4z" stroke={accent} strokeWidth="2" fill="none" />,
      <path key="3" d="M5 12h14M12 5v14" stroke={accent} strokeWidth="2" strokeLinecap="round" fill="none" />,
      <path key="4" d="M6 18l12-12M8 6h10v10" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
      <path key="5" d="M5 19l6-6 4 4 4-8" stroke={accent} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" fill="none" />,
      <path key="6" d="M4 8h16M4 16h10" stroke={accent} strokeWidth="2" strokeLinecap="round" fill="none" />,
    ];
    return (
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
        {icons[type % icons.length]}
      </svg>
    );
  };

  return (
    <div className="landing-page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <nav className="nav">
        <div className="container nav-inner">
          <div className="nav-left">
            <span>Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span>
          </div>
          <div className="nav-right">
            <a href="/" className="brand-tech" aria-label="Techjockey">
              <img
                src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
                height="28px"
                alt="Techjockey"
              />
            </a>
            <a
              href={ctaItems[0].href}
              className="animated-cta btn-magnetic"
              target="_blank"
              rel="noreferrer"
            >
              {ctaItems[0].text}
            </a>
          </div>
        </div>
      </nav>

      <section className="section hero noise-overlay">
        <div className="hero-orb one float-drift" />
        <div className="hero-orb two float-ambient" />
        <div className="container hero-grid">
          <div className="hero-copy depth-foreground" data-depth="0.15">
            <div className="text-reveal-mask reveal">
              <span className="text-reveal-inner section-tag">AI Image and Video Generation</span>
            </div>
            <h1 className="banner-title split-text reveal">
              Create High-Quality AI Images &amp; Videos with <span className="gradient-text">ByteDance Generative Models</span>
            </h1>
            <p className="hero-sub reveal reveal-delay-1">
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.
            </p>
            <p className="reveal reveal-delay-2">
              From text prompts, images, or scripts, generate professional visuals and videos with powerful multimodal AI systems.
            </p>

            <div className="chips stagger-parent">
              {[
                'AI Image Generation',
                'AI Video Generation with Audio',
                'Multimodal Content Creation',
                'Enterprise-ready AI infrastructure',
              ].map((chip, i) => (
                <div className="chip" key={chip}>
                  <FeatureIcon type={i} />
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions reveal reveal-delay-3">
              <a
                href={ctaItems[1].href}
                className="animated-cta btn-magnetic"
                target="_blank"
                rel="noreferrer"
              >
                {ctaItems[1].text}
              </a>
              <a href="#pricing" className="ghost-cta">
                View Pricing
              </a>
            </div>
          </div>

          <div className="hero-visual depth-foreground" data-depth="0.15">
            <div className="hero-media-shell hero-cinematic-bg glass-card scene-expand">
              <video autoPlay muted loop playsInline preload="auto" className="zoom-reveal">
                <source src="/output/generated-assets/ds_1778153792133_d386f9b0/08-8c93b9a6e6.mp4" type="video/mp4" />
              </video>
            </div>
            <div className="floating-card fc-1 float-ambient">
              <strong>Seedream 4.5</strong>
              <span>Image generation up to 1K–4K resolution</span>
            </div>
            <div className="floating-card fc-2 float-ambient">
              <strong>Seedance 1.5 Pro</strong>
              <span>Native audio-visual generation</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt clip-reveal">
        <div className="section-orb orb-right float-drift" />
        <div className="container">
          <div className="reveal" style={{ marginBottom: 28 }}>
            <span className="section-tag">Proof Signals</span>
            <h2>What teams evaluate first</h2>
          </div>
          <div className="metrics-strip stagger-parent">
            <div className="metric-card glass-card hover-lift" data-depth="0.15">
              <h4>AI Image Generation</h4>
              <p>Seedream 4.5 is built for high-resolution, high-fidelity visual creation.</p>
            </div>
            <div className="metric-card glass-card hover-lift" data-depth="0.2">
              <h4>AI Video Generation with Audio</h4>
              <p>Seedance 1.5 Pro enables synchronized creation of video and sound together.</p>
            </div>
            <div className="metric-card glass-card hover-lift" data-depth="0.25">
              <h4>Multimodal Content Creation</h4>
              <p>Generate from text prompts, images, or scripts using advanced multimodal systems.</p>
            </div>
            <div className="metric-card glass-card hover-lift" data-depth="0.3">
              <h4>Enterprise-ready AI infrastructure</h4>
              <p>Built for professionals creating visual content across creative and marketing teams.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark">
        <div className="section-orb orb-left float-ambient" />
        <div className="container split-wrap">
          <div className="reveal">
            <div className="browser-frame light hover-lift">
              <div className="browser-bar">
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="browser-dot" />
              </div>
              <img
                src="/output/generated-assets/ds_1778153792133_d386f9b0/14-e1b1bc05a8.jpeg"
                alt="Seedream 4.5"
              />
            </div>
          </div>

          <div data-depth="0.15">
            <span className="section-tag reveal">Seedream 4.5</span>
            <h2 className="reveal">
              AI Image Generation with <span className="gradient-text">Seedream 4.5</span>
            </h2>
            <div className="desc-block reveal reveal-delay-1">
              <p>
                Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.
              </p>
            </div>

            <div className="feature-list stagger-parent">
              {[
                ['Advanced Text–Image Alignment', 'Accurately translates prompts into visuals with improved semantic understanding.'],
                ['High-Resolution Output', 'Generate native images up to 1K–4K resolution with strong visual fidelity.'],
                ['Superior Typographic Rendering', 'Optimized for posters, ads, and text-heavy visual designs.'],
                ['Multi-Image Composition with Identity Preservation', 'Combines multiple inputs while accurately maintaining subject consistency.'],
                ['Strong Structural Fidelity', 'Maintains composition, layout, and scene structure with high precision.'],
              ].map((item, i) => (
                <div className="feature-item" key={item[0]}>
                  <div className="icon-box">
                    <FeatureIcon type={i} />
                  </div>
                  <div>
                    <h4>{item[0]}</h4>
                    <p>{item[1]}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="reveal" style={{ marginTop: 26 }}>
              <a
                href={ctaItems[2].href}
                className="animated-cta"
                target="_blank"
                rel="noreferrer"
              >
                {ctaItems[2].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt pin-scene">
        <div className="container split-wrap">
          <div data-depth="0.15">
            <span className="section-tag reveal">Seedance 1.5 Pro</span>
            <h2 className="reveal">
              AI Video Generation with <span className="gradient-text">Seedance 1.5 Pro by Bytedance</span>
            </h2>
            <div className="desc-block reveal reveal-delay-1">
              <p>
                Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.
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
              ].map((item, i) => (
                <div className="feature-item" key={item[0]}>
                  <div className="icon-box">
                    <FeatureIcon type={i + 1} />
                  </div>
                  <div>
                    <h4>{item[0]}</h4>
                    <p>{item[1]}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="reveal">
            <div className="browser-frame dark hover-lift">
              <div className="browser-bar">
                <span className="browser-dot" />
                <span className="browser-dot" />
                <span className="browser-dot" />
              </div>
              <img
                src="/output/generated-assets/ds_1778153792133_d386f9b0/12-581339b7d2.png"
                alt="Seedance 1.5 Pro"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark clip-reveal">
        <div className="container">
          <div className="reveal" style={{ marginBottom: 28 }}>
            <span className="section-tag">Video Gallery</span>
            <h2>See AI video outputs in motion</h2>
          </div>
          <div className="video-gallery-grid stagger-parent">
            {[
              'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/MultiModalInput_1.mp4',
              'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/ConsistentCharacters.mp4',
              'https://cdn.web.imagine.art/imagine-one/CDGE-V3/seedance/AudioSync_1.mp4',
            ].map((url, i) => (
              <div className="video-card glass-card hover-lift" key={url} data-depth={0.15 + i * 0.05}>
                <div className="zoom-reveal">
                  <video autoPlay muted loop playsInline preload="auto">
                    <source src={url} type="video/mp4" />
                  </video>
                </div>
                <div className="cap">
                  {i === 0 && 'Text-to-Video Generation'}
                  {i === 1 && 'Multilingual Lip-Sync'}
                  {i === 2 && 'Audio-Visual Synchronization'}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-dark" id="pricing">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 760, marginBottom: 28 }}>
            <span className="section-tag">Pricing</span>
            <h2>Choose the model for your visual workflow</h2>
          </div>

          <div className="pricing-grid">
            <div className="price-card glass-card hover-lift">
              <span className="badge-green">Available</span>
              <h3>Seedream 4.5 (AI Image Generation)</h3>
              <div className="muted-line">&nbsp;</div>
              <div className="price-amount">Contact for pricing</div>
              <div className="checklist">
                {[
                  'High-resolution image generation (up to 4K quality)',
                  'Text-to-image & multimodal image editing',
                  'Multi-image composition for complex visuals',
                  'Enhanced typographic rendering for posters, ads & text-heavy designs',
                ].map((item) => (
                  <div className="check" key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="price-card glass-card highlight hover-lift">
              <span className="badge-green">Starting at $1,000/month/</span>
              <h3>Seedance 1.5 Pro (AI Video Generation)</h3>
              <div className="muted-line">&nbsp;</div>
              <div className="price-amount">Starting at $1,000/month/</div>
              <div className="checklist">
                {[
                  'Text-to-video generation with cinematic output',
                  'Native audio + video generation (synchronized)',
                  'Multilingual lip-sync capabilities',
                  'Fast inference for quicker video production',
                ].map((item) => (
                  <div className="check" key={item}>
                    <CheckIcon />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a
                href={ctaItems[3].href}
                className="animated-cta full-btn"
                target="_blank"
                rel="noreferrer"
              >
                {ctaItems[3].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <div className="reveal" style={{ maxWidth: 760, marginBottom: 28 }}>
            <span className="section-tag">Testimonials</span>
            <h2>What creative professionals say</h2>
          </div>

          <div className="testimonial-shell">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${activeSlide * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div className="testimonial-card" key={i}>
                  <div className="testimonial-inner glass-card">
                    <div className="avatar-wrap">
                      <img
                        src="/output/generated-assets/ds_1778153792133_d386f9b0/10-0518458b81.webp"
                        alt={t.name}
                      />
                    </div>
                    <div>
                      <div className="quote-mark">❝</div>
                      <div className="stars">★★★★★</div>
                      <p style={{ fontSize: 20, color: '#f3f4f6', lineHeight: 1.8 }}>{t.quote}</p>
                      <div className="author">{t.name}</div>
                      <div className="role">{t.role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="testimonial-nav">
              <button
                className="nav-btn"
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
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
              <button
                className="nav-btn"
                onClick={() => setActiveSlide((prev) => (prev + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-strip">
        <div className="container">
          <div className="cta-box reveal">
            <span className="section-tag">Get Started</span>
            <h2>Explore Seedream 4.5 and Seedance 1.5 Pro by ByteDance</h2>
            <p style={{ maxWidth: 760, margin: '0 auto 24px' }}>
              Built for professionals creating visual content, including creative directors, video producers, art directors, marketing managers, and creative leads.
            </p>
            <a
              href={ctaItems[4].href}
              className="animated-cta btn-magnetic"
              target="_blank"
              rel="noreferrer"
            >
              {ctaItems[4].text}
            </a>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">
          <div className="footer-top">
            <div className="footer-links">
              <img
                src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
                height="28px"
                alt="Techjockey"
              />
              <a href="mailto:support@techjockey.com">support@techjockey.com</a>
            </div>

            <div className="footer-social">
              <a className="social-icon" href="https://www.facebook.com/Techjockey/" target="_blank" rel="noreferrer" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3 0-5 2-5 5v3H6v4h3v4h4v-4h3.1l.9-4H13V9c0-.6.4-1 1-1z" /></svg>
              </a>
              <a className="social-icon" href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="18" height="18" rx="5" stroke="currentColor" strokeWidth="2"/><circle cx="12" cy="12" r="4" stroke="currentColor" strokeWidth="2"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor"/></svg>
              </a>
              <a className="social-icon" href="https://twitter.com/techjockey" target="_blank" rel="noreferrer" aria-label="Twitter">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.7-5.8-.1-1 1-1.4 2.4-1.1 3.7-3.2-.2-6.1-1.7-8.1-4.2-1 1.8-.5 4 1.1 5.2-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.8 3.4 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 3.9 2.9-1.5 1.2-3.3 1.8-5.2 1.8H2c1.9 1.2 4.2 1.9 6.5 1.9 7.8 0 12.3-6.7 12-12.7.8-.6 1.5-1.3 2-2.1z"/></svg>
              </a>
              <a className="social-icon" href="https://www.linkedin.com/company/techjockey-infotech-pvt-ltd/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2.25 2.25 0 1 0 5.3 7.5 2.25 2.25 0 0 0 5.25 3zM20.44 12.74c0-3.06-1.63-4.49-3.8-4.49-1.75 0-2.53.96-2.97 1.64V8.5h-3.37V20h3.37v-6.41c0-.34.03-.68.13-.92.27-.68.88-1.38 1.92-1.38 1.36 0 1.9 1.04 1.9 2.56V20H21v-7.26z"/></svg>
              </a>
            </div>
          </div>

          <div className="footer-bottom">
            <div>© 2024 Techjockey Infotech Pvt. Ltd.</div>
            <div className="footer-links">
              <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
              <a href="/terms-of-use" target="_blank" rel="noreferrer">Terms</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;