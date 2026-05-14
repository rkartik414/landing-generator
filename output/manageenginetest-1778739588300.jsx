import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#da3e3e';
  const primary = '#da3e3e';
  const bodyBg = '#111827';

  const pageRef = useRef(null);
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  const ctas = [
    {
      text: 'Talk to Expert',
      href: 'https://www.manageengine.com/products/desktop-central/?network=g&device=c&keyword=manageengine%20endpoint%20central&campaignid=19654588997&creative=647688791211&matchtype=p&adposition=&placement=&adgroup=145683667093&targetid=kwd-1683172609861&gad_source=1&gad_campaignid=19654588997&gbraid=0AAAAAChbZwW9bQQkbQyooq2JcTE3E84lk&gclid=CjwKCAjwwpDQBhAuEiwAa-4WozVmwpASl6_BlZ5WrrwPCu6ObZZs6KpisJFaqbI1iEwQBfkZxhE0XRoC_ZkQAvD_BwE'
    },
    {
      text: 'Talk to Expert',
      href: 'https://www.manageengine.com/products/desktop-central/?network=g&device=c&keyword=manageengine%20endpoint%20central&campaignid=19654588997&creative=647688791211&matchtype=p&adposition=&placement=&adgroup=145683667093&targetid=kwd-1683172609861&gad_source=1&gad_campaignid=19654588997&gbraid=0AAAAAChbZwW9bQQkbQyooq2JcTE3E84lk&gclid=CjwKCAjwwpDQBhAuEiwAa-4WozVmwpASl6_BlZ5WrrwPCu6ObZZs6KpisJFaqbI1iEwQBfkZxhE0XRoC_ZkQAvD_BwE'
    },
    {
      text: 'Talk to Expert',
      href: 'https://www.manageengine.com/products/desktop-central/?network=g&device=c&keyword=manageengine%20endpoint%20central&campaignid=19654588997&creative=647688791211&matchtype=p&adposition=&placement=&adgroup=145683667093&targetid=kwd-1683172609861&gad_source=1&gad_campaignid=19654588997&gbraid=0AAAAAChbZwW9bQQkbQyooq2JcTE3E84lk&gclid=CjwKCAjwwpDQBhAuEiwAa-4WozVmwpASl6_BlZ5WrrwPCu6ObZZs6KpisJFaqbI1iEwQBfkZxhE0XRoC_ZkQAvD_BwE'
    },
    {
      text: 'Talk to Expert',
      href: 'https://www.manageengine.com/products/desktop-central/?network=g&device=c&keyword=manageengine%20endpoint%20central&campaignid=19654588997&creative=647688791211&matchtype=p&adposition=&placement=&adgroup=145683667093&targetid=kwd-1683172609861&gad_source=1&gad_campaignid=19654588997&gbraid=0AAAAAChbZwW9bQQkbQyooq2JcTE3E84lk&gclid=CjwKCAjwwpDQBhAuEiwAa-4WozVmwpASl6_BlZ5WrrwPCu6ObZZs6KpisJFaqbI1iEwQBfkZxhE0XRoC_ZkQAvD_BwE'
    },
    {
      text: 'Talk to Expert',
      href: 'https://www.manageengine.com/products/desktop-central/?network=g&device=c&keyword=manageengine%20endpoint%20central&campaignid=19654588997&creative=647688791211&matchtype=p&adposition=&placement=&adgroup=145683667093&targetid=kwd-1683172609861&gad_source=1&gad_campaignid=19654588997&gbraid=0AAAAAChbZwW9bQQkbQyooq2JcTE3E84lk&gclid=CjwKCAjwwpDQBhAuEiwAa-4WozVmwpASl6_BlZ5WrrwPCu6ObZZs6KpisJFaqbI1iEwQBfkZxhE0XRoC_ZkQAvD_BwE'
    },
    {
      text: 'Talk to Expert',
      href: 'https://www.manageengine.com/products/desktop-central/?network=g&device=c&keyword=manageengine%20endpoint%20central&campaignid=19654588997&creative=647688791211&matchtype=p&adposition=&placement=&adgroup=145683667093&targetid=kwd-1683172609861&gad_source=1&gad_campaignid=19654588997&gbraid=0AAAAAChbZwW9bQQkbQyooq2JcTE3E84lk&gclid=CjwKCAjwwpDQBhAuEiwAa-4WozVmwpASl6_BlZ5WrrwPCu6ObZZs6KpisJFaqbI1iEwQBfkZxhE0XRoC_ZkQAvD_BwE'
    },
    {
      text: 'Talk to Expert',
      href: 'https://www.manageengine.com/products/desktop-central/?network=g&device=c&keyword=manageengine%20endpoint%20central&campaignid=19654588997&creative=647688791211&matchtype=p&adposition=&placement=&adgroup=145683667093&targetid=kwd-1683172609861&gad_source=1&gad_campaignid=19654588997&gbraid=0AAAAAChbZwW9bQQkbQyooq2JcTE3E84lk&gclid=CjwKCAjwwpDQBhAuEiwAa-4WozVmwpASl6_BlZ5WrrwPCu6ObZZs6KpisJFaqbI1iEwQBfkZxhE0XRoC_ZkQAvD_BwE'
    }
  ];

  const trustLogos = [
    '/output/generated-assets/manage-engine-endpoint-central/03-d05036461a.png',
    '/output/generated-assets/manage-engine-endpoint-central/01-90b1779504.png',
    '/output/generated-assets/manage-engine-endpoint-central/08-ffc73ef96f.png',
    '/output/generated-assets/manage-engine-endpoint-central/06-7f902aea79.png',
    '/output/generated-assets/manage-engine-endpoint-central/17-06df7e2a1a.png'
  ];

  const testimonials = [
    {
      quote:
        'Endpoint Central helps us stay on top of patch management. The remote support features are fantastic and help us manage systems efficiently.',
      author: 'Rahul Verma',
      designation: 'ICT & Service Desk Administrator',
      avatar: '/output/generated-assets/manage-engine-endpoint-central/10-aef5cadf88.png'
    },
    {
      quote:
        'Endpoint Central has helped our business enhance employee experience and support users in a timely and efficient manner.',
      author: 'Shweta Singh',
      designation: 'IT Infrastructure Manager',
      avatar: '/output/generated-assets/manage-engine-endpoint-central/13-14aaaaf389.png'
    },
    {
      quote:
        'Endpoint Central has simplified patch management and software deployment for our IT team. Managing hundreds of devices from one console has significantly improved our operational efficiency.',
      author: 'Sachin Gupta',
      designation: 'IT Operations Manager',
      avatar: '/output/generated-assets/manage-engine-endpoint-central/11-86c462eeba.png'
    },
    {
      quote:
        'We purchased Endpoint Central through Techjockey and the experience was seamless. Their team guided us through the evaluation, purchase process, and even helped us with the post-purchase demo and onboarding.',
      author: 'Rounak Sharma',
      designation: 'Head of IT Infrastructure',
      avatar: '/output/generated-assets/manage-engine-endpoint-central/12-a2dfcded2b.png'
    },
    {
      quote:
        'Techjockey made our Endpoint Central purchase extremely smooth. From product consultation to after-purchase support and demo sessions, their team ensured we could deploy the solution quickly.',
      author: 'Ayushi Jain',
      designation: 'Senior System Administrator',
      avatar: '/output/generated-assets/manage-engine-endpoint-central/14-7587c43919.png'
    }
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
          gsap.registerPlugin(window.ScrollTrigger);

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
                  toggleActions: 'play none none reverse'
                }
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
                scrub: true
              }
            });
          });

          gsap.utils.toArray('.stagger-parent').forEach((p) => {
            gsap.to(p.children, {
              opacity: 1,
              y: 0,
              duration: 0.7,
              stagger: 0.1,
              ease: 'power3.out',
              scrollTrigger: { trigger: p, start: 'top 80%' }
            });
          });

          gsap.utils.toArray('.count-up').forEach((el) => {
            const target = parseFloat(el.dataset.count || '0');
            const suffix = el.dataset.suffix || '';
            const prefix = el.dataset.prefix || '';
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target,
              duration: 1.8,
              snap: { val: 0.1 },
              ease: 'power2.out',
              scrollTrigger: { trigger: el, start: 'top 90%' },
              onUpdate: () => {
                el.textContent = `${prefix}${Math.round(obj.val)}${suffix}`;
              }
            });
          });
        });
      });
    };

    const boot = () => setTimeout(initGSAP, 300);
    gsapScript.onload = boot;
    stScript.onload = boot;

    return () => observer.disconnect();
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
    html,body{margin:0;padding:0;background:${bodyBg};color:#f8fafc;font-family:Inter,sans-serif;scroll-behavior:smooth}
    body{overflow-x:hidden}
    a{text-decoration:none;color:inherit}
    img{max-width:100%}
    .page{background:${bodyBg}}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .section{padding:88px 0;position:relative;overflow:hidden}
    .hero-bg{background:#0f1923}
    .bg-1{background:#111827}
    .bg-2{background:#0f1923}
    .bg-3{background:#111827}
    .nav-wrap{position:sticky;top:0;z-index:60;background:rgba(15,25,35,.88);backdrop-filter:blur(20px);border-bottom:1px solid #2a3642}
    .nav{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .brand-text{font-family:Barlow,sans-serif;font-weight:800;font-size:20px;color:var(--accent);letter-spacing:.2px}
    .nav-right{display:flex;align-items:center;gap:16px}
    .animated-cta,.ghost-btn{
      display:inline-flex;align-items:center;justify-content:center;
      padding:13px 22px;border-radius:10px;font-weight:700;font-size:15px;
      transition:transform .25s ease,box-shadow .25s ease,background .25s ease,border-color .25s ease
    }
    .animated-cta{
      background:var(--accent);color:#fff;border:1px solid var(--accent);
      box-shadow:0 10px 30px rgba(218,62,62,.24)
    }
    .animated-cta:hover,.ghost-btn:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(0,0,0,.28)}
    .ghost-btn{border:1px solid #3b4b5a;background:transparent;color:#f8fafc}
    .hero-grid,.split-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:48px;align-items:center}
    .banner-title{
      font-family:Barlow,sans-serif;font-size:clamp(48px,6vw,68px);line-height:1.03;margin:0 0 18px;
      word-break:normal;overflow-wrap:normal;hyphens:none;white-space:normal
    }
    .gradient-text{background:linear-gradient(135deg, ${accent} 0%, ${primary} 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .hero-sub{font-size:18px;line-height:1.7;color:#cbd5e1;max-width:640px;margin:0 0 22px}
    .hero-actions{display:flex;flex-wrap:wrap;gap:14px;margin:26px 0 22px}
    .chips{display:flex;flex-wrap:wrap;gap:12px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(218,62,62,.3);background:rgba(218,62,62,.08);color:#cbd5e1;font-size:13px}
    .chip svg{width:15px;height:15px;color:var(--accent)}
    .hero-visual{min-height:500px;display:flex;align-items:center;justify-content:center;position:relative}
    .hero-panel{position:relative;width:100%;min-height:500px;border-radius:24px;border:1px solid rgba(255,255,255,.1);background:
      radial-gradient(circle at 15% 20%, rgba(218,62,62,.18), transparent 28%),
      radial-gradient(circle at 85% 15%, rgba(218,62,62,.12), transparent 24%),
      linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03));
      overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.35)}
    .hero-panel:before{
      content:'';position:absolute;inset:0;
      background-image:linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px),linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px);
      background-size:32px 32px;opacity:.3;pointer-events:none
    }
    .hero-image-card{position:absolute;right:22px;bottom:22px;width:min(82%,520px);border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.12);box-shadow:0 20px 60px rgba(0,0,0,.35)}
    .hero-image-card img{width:100%;display:block;transform:scale(1.08)}
    .floating-stat,.floating-chip{position:absolute;border:1px solid rgba(255,255,255,.08);background:rgba(12,18,27,.88);backdrop-filter:blur(12px);border-radius:16px;color:#fff}
    .floating-stat{padding:16px 18px;min-width:160px}
    .floating-stat strong{display:block;font-family:Barlow,sans-serif;font-size:28px}
    .floating-stat span{display:block;font-size:13px;color:#cbd5e1;margin-top:4px}
    .floating-chip{padding:12px 14px;font-size:13px;color:#e5e7eb}
    .stat-a{top:26px;left:26px}
    .stat-b{top:122px;right:26px}
    .chip-a{left:30px;bottom:120px}
    .chip-b{right:80px;bottom:130px}
    .trust-strip{padding:26px 0;border-top:1px solid #2a3642;border-bottom:1px solid #2a3642}
    .trust-head{display:flex;justify-content:space-between;gap:18px;align-items:center;flex-wrap:wrap;margin-bottom:18px}
    .trust-head h3{margin:0;font-family:Barlow,sans-serif;font-size:28px}
    .logo-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px}
    .logo-card{height:72px;display:flex;align-items:center;justify-content:center;padding:14px;border:1px solid rgba(255,255,255,.08);border-radius:14px;background:rgba(255,255,255,.04)}
    .logo-card img{max-height:32px;filter:grayscale(1);opacity:.86;transition:filter .25s ease,opacity .25s ease,transform .25s ease}
    .logo-card:hover img{filter:grayscale(0);opacity:1;transform:scale(1.03)}
    .section-tag{display:inline-block;padding:8px 12px;border-radius:999px;background:rgba(218,62,62,.12);border:1px solid rgba(218,62,62,.24);color:#ffd4d4;font-size:12px;font-weight:700;letter-spacing:.5px;text-transform:uppercase;margin-bottom:14px}
    h2{font-family:Barlow,sans-serif;font-size:clamp(32px,4vw,44px);line-height:1.1;margin:0 0 16px}
    .lead{font-size:17px;line-height:1.75;color:#cbd5e1;margin:0 0 22px}
    .left-border{border-left:2px solid rgba(255,255,255,.14);padding-left:18px}
    .browser-frame{display:flex;flex-direction:column;overflow:hidden;border-radius:18px;border:1px solid rgba(255,255,255,.1);background:#0a0a0a;box-shadow:0 24px 60px rgba(0,0,0,.34)}
    .browser-bar{display:flex;align-items:center;gap:8px;padding:14px 16px;border-bottom:1px solid rgba(255,255,255,.08);background:#11161d}
    .dot{width:10px;height:10px;border-radius:50%}
    .d1{background:#ff5f57}.d2{background:#febc2e}.d3{background:#28c840}
    .browser-frame img{flex:1;min-height:0;height:420px;width:100%;object-fit:cover;display:block}
    .spotlight-card{padding:24px;border:1px solid rgba(255,255,255,.1);border-radius:18px;background:rgba(255,255,255,.04);margin-bottom:18px}
    .feature-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:16px}
    .feature-card,.mini-card,.price-card,.testimonial-card{
      background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);border-radius:18px
    }
    .feature-card{padding:18px}
    .feature-title{display:flex;align-items:flex-start;gap:12px;font-family:Barlow,sans-serif;font-size:20px;margin:0 0 10px}
    .feature-card p{margin:0;color:#cbd5e1;line-height:1.65}
    .icon-wrap{width:42px;height:42px;flex:0 0 42px;border-radius:12px;display:flex;align-items:center;justify-content:center;background:rgba(218,62,62,.14);color:var(--accent)}
    .dashboard-mock{padding:24px;border-radius:20px;border:1px solid rgba(255,255,255,.1);background:linear-gradient(180deg, rgba(255,255,255,.06), rgba(255,255,255,.03))}
    .metric-row{display:grid;grid-template-columns:repeat(3,1fr);gap:14px;margin-bottom:14px}
    .mini-card{padding:18px}
    .mini-card strong{display:block;font-family:Barlow,sans-serif;font-size:28px;margin-bottom:6px}
    .mini-card span{font-size:13px;color:#cbd5e1}
    .list-stack{display:grid;gap:14px}
    .list-item{padding:18px;border-radius:16px;border:1px solid rgba(255,255,255,.09);background:rgba(255,255,255,.04)}
    .list-item h3{margin:0 0 8px;font-family:Barlow,sans-serif;font-size:20px}
    .list-item p{margin:0;color:#cbd5e1;line-height:1.65}
    .pricing-wrap{display:flex;justify-content:center}
    .price-card{width:min(560px,100%);padding:30px;position:relative}
    .price-badge{display:inline-flex;padding:8px 12px;border-radius:999px;background:rgba(34,197,94,.14);color:#86efac;border:1px solid rgba(34,197,94,.26);font-weight:700;font-size:12px;margin-bottom:16px}
    .price-title{font-family:Barlow,sans-serif;font-size:34px;margin:0 0 10px}
    .price-empty{color:#cbd5e1;line-height:1.75;margin:0 0 20px}
    .pricing-note{padding:14px 16px;border-radius:14px;background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#e5e7eb}
    .testimonials-shell{position:relative;overflow:hidden}
    .testimonial-track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)}
    .testimonial-slide{min-width:100%;padding:6px}
    .testimonial-card{padding:28px}
    .quote-mark{font-size:46px;line-height:1;color:var(--accent);font-family:Barlow,sans-serif;margin-bottom:12px}
    .stars{color:#f5c451;letter-spacing:2px;margin-bottom:12px}
    .testimonial-quote{font-size:19px;line-height:1.8;color:#f8fafc;margin:0 0 18px}
    .author{display:flex;align-items:center;gap:14px}
    .author img{width:56px;height:56px;border-radius:50%;object-fit:cover;border:2px solid rgba(255,255,255,.12)}
    .author strong{display:block}
    .author span{display:block;color:#9fb0c0;font-size:14px}
    .carousel-controls{display:flex;justify-content:space-between;align-items:center;gap:16px;margin-top:20px}
    .dots{display:flex;gap:8px}
    .dot-btn,.arrow-btn{border:none;cursor:pointer}
    .dot-btn{width:10px;height:10px;border-radius:999px;background:rgba(255,255,255,.25);transition:all .25s ease}
    .dot-btn.active{width:28px;background:var(--accent)}
    .arrow-group{display:flex;gap:10px}
    .arrow-btn{width:42px;height:42px;border-radius:50%;background:rgba(255,255,255,.07);color:#fff}
    .final-cta{padding:32px;border-radius:24px;border:1px solid rgba(255,255,255,.1);background:linear-gradient(135deg, rgba(218,62,62,.12), rgba(255,255,255,.04))}
    .footer{padding:36px 0;border-top:1px solid #2a3642;background:#0b1220}
    .footer-grid{display:grid;grid-template-columns:1.2fr 1fr auto;gap:20px;align-items:center}
    .footer-meta{color:#cbd5e1;font-size:14px;line-height:1.8}
    .footer-links,.socials{display:flex;gap:14px;flex-wrap:wrap}
    .footer-links a,.socials a{color:#cbd5e1;font-size:14px}
    .socials a{width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.06);border:1px solid rgba(255,255,255,.08)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
    .reveal.visible{opacity:1;transform:translateY(0)}
    .zoom-reveal{overflow:hidden}
    .zoom-reveal img,.zoom-reveal video{transform:scale(1.1);will-change:transform}
    [data-depth]{will-change:transform}
    .float-ambient{animation:floatY 6s ease-in-out infinite}
    @keyframes floatY{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}
    .stagger-parent>*{opacity:0;transform:translateY(24px)}
    .glass-card{background:rgba(255,255,255,0.05);backdrop-filter:blur(16px);border:1px solid rgba(255,255,255,0.08);border-radius:16px}
    .hover-lift{transition:transform .25s ease,box-shadow .25s ease}
    .hover-lift:hover{transform:translateY(-6px);box-shadow:0 18px 40px rgba(0,0,0,.28)}
    .section-orb{position:absolute;border-radius:50%;pointer-events:none}
    .orb-a{top:-120px;right:-120px;width:340px;height:340px;background:radial-gradient(circle, rgba(218,62,62,.18), transparent 68%)}
    .orb-b{bottom:-100px;left:-80px;width:280px;height:280px;background:radial-gradient(circle, rgba(218,62,62,.12), transparent 68%)}
    @media (max-width: 980px){
      .hero-grid,.split-grid,.footer-grid{grid-template-columns:1fr}
      .nav{grid-template-columns:1fr auto;gap:12px}
      .nav .nav-cta{grid-column:1/-1}
      .logo-grid{grid-template-columns:repeat(2,1fr)}
      .feature-grid,.metric-row{grid-template-columns:1fr}
      .hero-visual,.hero-panel{min-height:420px}
    }
    @media (max-width: 640px){
      .section{padding:68px 0}
      .container{width:min(100% - 20px,1180px)}
      .hero-actions{flex-direction:column;align-items:flex-start}
      .animated-cta,.ghost-btn{width:100%}
      .browser-frame img{height:280px}
      .logo-grid{grid-template-columns:1fr}
      .floating-stat{min-width:132px;padding:12px}
      .floating-stat strong{font-size:22px}
    }
  `;

  const Icon = ({ children }) => (
    <div className="icon-wrap pop-in">
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
        {children}
      </svg>
    </div>
  );

  return (
    <div className="page" ref={pageRef}>
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Barlow:wght@600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="nav-wrap">
        <div className="container nav">
          <div className="brand-text">ManageEngine</div>
          <div className="nav-right">
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <a
            className="animated-cta btn-magnetic nav-cta"
            href={ctas[0].href}
            target="_blank"
            rel="noreferrer"
          >
            {ctas[0].text}
          </a>
        </div>
      </div>

      <section className="section hero-bg" style={{ paddingTop: '76px' }}>
        <div className="section-orb orb-a" />
        <div className="section-orb orb-b" />
        <div className="container hero-grid">
          <div data-depth="0.15">
            <div className="section-tag reveal">Unified Endpoint Management &amp; Security</div>
            <h1 className="banner-title reveal split-text">
              Unified Endpoint Management &amp; Security with{' '}
              <span className="gradient-text">Manage Engine Endpoint Central</span>
            </h1>
            <p className="hero-sub reveal reveal-delay-1">
              Manage, secure, and automate your entire endpoint ecosystem from a single console.
            </p>

            <div className="chips reveal reveal-delay-2">
              {[
                'Patch & Update Management',
                'Browser Security',
                'Data Security',
                'Vulnerability Remediation'
              ].map((chip, i) => (
                <div className="chip" key={i}>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M20 6L9 17l-5-5" />
                  </svg>
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="hero-actions">
              <a
                className="animated-cta btn-magnetic reveal"
                href={ctas[1].href}
                target="_blank"
                rel="noreferrer"
              >
                {ctas[1].text}
              </a>
              <a
                className="ghost-btn reveal"
                href="#testimonials"
              >
                See Customer Feedback
              </a>
            </div>
          </div>

          <div className="hero-visual slide-right zoom-reveal" data-depth="0.4">
            <div className="hero-panel hero-cinematic-bg">
              <div className="floating-stat stat-a float-ambient glass-card">
                <strong className="count-up" data-count="1" data-suffix="" data-prefix="">
                  1
                </strong>
                <span>single console</span>
              </div>
              <div className="floating-stat stat-b float-ambient glass-card">
                <strong className="count-up" data-count="4" data-suffix="" data-prefix="">
                  4
                </strong>
                <span>core management areas</span>
              </div>
              <div className="floating-chip chip-a float-ambient">Centralized Endpoint Management for Modern IT Teams</div>
              <div className="floating-chip chip-b float-ambient">Monitor Continuously. Respond Instantly</div>
              <div className="hero-image-card">
                <img
                  src="/output/generated-assets/manage-engine-endpoint-central/18-bb6e7984f5.png"
                  alt="Manage Engine Endpoint Central"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-1 trust-strip">
        <div className="container">
          <div className="trust-head reveal">
            <h3>Proof Strategy: logos first</h3>
            <p style={{ margin: 0, color: '#cbd5e1' }}>Compact trust bar for faster credibility with IT teams.</p>
          </div>
          <div className="logo-grid stagger-parent">
            {trustLogos.map((logo, i) => (
              <div className="logo-card hover-lift" key={i}>
                <img src={logo} alt={`Trust logo ${i + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section bg-2 clip-reveal">
        <div className="section-orb orb-a" />
        <div className="container split-grid">
          <div className="slide-left">
            <div className="browser-frame zoom-reveal reveal">
              <div className="browser-bar">
                <span className="dot d1" />
                <span className="dot d2" />
                <span className="dot d3" />
              </div>
              <img
                src="/output/generated-assets/manage-engine-endpoint-central/45-8783e1a4d7.jpeg"
                alt="Centralized Endpoint Management for Modern IT Teams"
              />
            </div>
          </div>

          <div className="slide-right">
            <div className="section-tag reveal">Banner2</div>
            <h2 className="reveal">
              Centralized Endpoint Management for <span className="gradient-text">Modern IT Teams</span>
            </h2>
            <div className="left-border reveal">
              <p className="lead">
                Automate endpoint management while improving security and operational efficiency with Manage Engine Endpoint Central. It’s a unified endpoint management and security solution that helps IT teams manage desktops, laptops, servers, and mobile devices from a single console.
              </p>
            </div>

            <div className="spotlight-card reveal hover-lift">
              <h3 className="feature-title">
                <Icon>
                  <path d="M12 3v18M3 12h18" />
                </Icon>
                <span>Patch &amp; Update Management</span>
              </h3>
              <p>
                Secure and stabilize your operating systems, applications, and mobile apps with automated patches and updates.
              </p>
            </div>

            <div className="feature-grid stagger-parent">
              <div className="feature-card hover-lift">
                <h3 className="feature-title">
                  <Icon>
                    <path d="M4 7h16M7 4v16" />
                  </Icon>
                  <span>Browser Security</span>
                </h3>
                <p>Protect and manage multiple browsers, track usage patterns, and maintain compliance with standards like STIG.</p>
              </div>
              <div className="feature-card hover-lift">
                <h3 className="feature-title">
                  <Icon>
                    <path d="M12 2l7 4v6c0 5-3.5 8-7 10-3.5-2-7-5-7-10V6l7-4z" />
                  </Icon>
                  <span>Data Security</span>
                </h3>
                <p>Identify and encrypt sensitive data, enforce policies for authorized usage, and ensure secure transmission.</p>
              </div>
              <div className="feature-card hover-lift" style={{ gridColumn: '1 / -1' }}>
                <h3 className="feature-title">
                  <Icon>
                    <path d="M21 12a9 9 0 1 1-3-6.7" />
                    <path d="M21 3v9h-9" />
                  </Icon>
                  <span>Vulnerability Remediation</span>
                </h3>
                <p>Leverage continuous threat intelligence, thorough assessments, and swift remediation to mitigate risks.</p>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <a
                className="animated-cta btn-magnetic reveal"
                href={ctas[2].href}
                target="_blank"
                rel="noreferrer"
              >
                {ctas[2].text}
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-3 clip-reveal">
        <div className="section-orb orb-b" />
        <div className="container split-grid">
          <div className="slide-left">
            <div className="section-tag reveal">Standard Features</div>
            <h2 className="reveal">
              Monitor Continuously. <span className="gradient-text">Respond Instantly</span>
            </h2>

            <div className="dashboard-mock reveal">
              <div className="metric-row">
                <div className="mini-card hover-lift">
                  <strong className="count-up" data-count="5" data-suffix="" data-prefix="">
                    5
                  </strong>
                  <span>core standard features</span>
                </div>
                <div className="mini-card hover-lift">
                  <strong className="count-up" data-count="1" data-suffix="" data-prefix="">
                    1
                  </strong>
                  <span>compliance reporting layer</span>
                </div>
                <div className="mini-card hover-lift">
                  <strong className="count-up" data-count="1" data-suffix="" data-prefix="">
                    1
                  </strong>
                  <span>remote troubleshooting workflow</span>
                </div>
              </div>

              <div className="list-stack stagger-parent">
                <div className="list-item hover-lift">
                  <h3>Strengthen Endpoint Security</h3>
                  <p>Built-in security controls for malware protection, such as next-gen antivirus and anti-ransomware.</p>
                </div>
                <div className="list-item hover-lift">
                  <h3>Manage IT Assets Effectively</h3>
                  <p>Live notifications and ready-made reports to discover, track, and manage your hardware, software, and digital assets.</p>
                </div>
                <div className="list-item hover-lift">
                  <h3>Enhance Application Control &amp; Privileges</h3>
                  <p>Define install permissions, track privileges, and enforce zero-trust security with role-based and time-bound access.</p>
                </div>
                <div className="list-item hover-lift">
                  <h3>Facilitate Remote Access &amp; Troubleshooting</h3>
                  <p>Remotely perform system operations with multi-user collaboration to efficiently troubleshoot devices.</p>
                </div>
                <div className="list-item hover-lift">
                  <h3>Ensure Compliance</h3>
                  <p>Adhere to regulatory compliance and generate comprehensive audit-ready reports.</p>
                </div>
              </div>
            </div>

            <div style={{ marginTop: '24px' }}>
              <a
                className="animated-cta btn-magnetic reveal"
                href={ctas[3].href}
                target="_blank"
                rel="noreferrer"
              >
                {ctas[3].text}
              </a>
            </div>
          </div>

          <div className="slide-right">
            <div className="browser-frame zoom-reveal reveal">
              <div className="browser-bar">
                <span className="dot d1" />
                <span className="dot d2" />
                <span className="dot d3" />
              </div>
              <img
                src="/output/generated-assets/manage-engine-endpoint-central/43-44e5d75c08.png"
                alt="Monitor Continuously. Respond Instantly"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-2">
        <div className="container">
          <div className="section-tag reveal">Pricing</div>
          <h2 className="reveal">
            <span className="gradient-text">Pricing</span>
          </h2>
          <div className="pricing-wrap">
            <div className="price-card reveal hover-lift">
              <div className="price-badge pop-in">Talk to Expert</div>
              <h3 className="price-title">Pricing</h3>
              <p className="price-empty">
                Pricing details are not provided in the content. Talk to an expert for plan and purchase guidance.
              </p>
              <div className="pricing-note">
                Manage Engine Endpoint Central
              </div>
              <div style={{ marginTop: '22px' }}>
                <a
                  className="animated-cta btn-magnetic"
                  href={ctas[4].href}
                  target="_blank"
                  rel="noreferrer"
                  style={{ width: '100%' }}
                >
                  {ctas[4].text}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-3" id="testimonials">
        <div className="container">
          <div className="section-tag reveal">Testimonials</div>
          <h2 className="reveal">
            What IT teams say about <span className="gradient-text">Endpoint Central</span>
          </h2>

          <div className="testimonials-shell reveal">
            <div
              className="testimonial-track"
              style={{ transform: `translateX(-${activeTestimonial * 100}%)` }}
            >
              {testimonials.map((t, i) => (
                <div className="testimonial-slide" key={i}>
                  <div className="testimonial-card">
                    <div className="quote-mark">❝</div>
                    <div className="stars">★★★★★</div>
                    <p className="testimonial-quote">{t.quote}</p>
                    <div className="author">
                      <img src={t.avatar} alt={t.author} />
                      <div>
                        <strong>{t.author}</strong>
                        <span>{t.designation}</span>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            <div className="carousel-controls">
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
              <div className="arrow-group">
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
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-1">
        <div className="container">
          <div className="final-cta reveal">
            <div className="section-tag">Manage Engine Endpoint Central</div>
            <h2>
              Unified Endpoint Management &amp; Security with <span className="gradient-text">Manage Engine Endpoint Central</span>
            </h2>
            <p className="lead">
              Manage, secure, and automate your entire endpoint ecosystem from a single console.
            </p>
            <a
              className="animated-cta btn-magnetic"
              href={ctas[5].href}
              target="_blank"
              rel="noreferrer"
            >
              {ctas[5].text}
            </a>
          </div>
        </div>
      </section>

      <div
        style={{
          position: 'fixed',
          right: '18px',
          bottom: '18px',
          zIndex: 55
        }}
      >
        <a
          className="animated-cta btn-magnetic"
          href={ctas[6].href}
          target="_blank"
          rel="noreferrer"
        >
          {ctas[6].text}
        </a>
      </div>

      <footer className="footer">
        <div className="container footer-grid">
          <div>
            <img
              src="https://cdn.techjockey.com/web/assets/V5/img/logo.svg"
              height="28px"
              alt="Techjockey"
            />
            <div className="footer-meta" style={{ marginTop: '12px' }}>
              <div>support@techjockey.com</div>
              <div>© 2024 Techjockey Infotech Pvt. Ltd.</div>
            </div>
          </div>

          <div className="footer-links">
            <a href="/privacy-policy" target="_blank" rel="noreferrer">Privacy Policy</a>
            <a href="/terms" target="_blank" rel="noreferrer">Terms</a>
          </div>

          <div className="socials">
            <a href="https://www.facebook.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M13 22v-8h3l1-4h-4V8c0-1.2.3-2 2-2h2V2.3c-.3 0-1.4-.3-2.8-.3-2.8 0-4.7 1.7-4.7 4.9V10H7v4h3v8h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/techjockey/" target="_blank" rel="noreferrer" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M7 2h10a5 5 0 0 1 5 5v10a5 5 0 0 1-5 5H7a5 5 0 0 1-5-5V7a5 5 0 0 1 5-5zm0 2a3 3 0 0 0-3 3v10a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3H7zm5 3.5A5.5 5.5 0 1 1 6.5 13 5.5 5.5 0 0 1 12 7.5zm0 2A3.5 3.5 0 1 0 15.5 13 3.5 3.5 0 0 0 12 9.5zm6.25-3.25a1.25 1.25 0 1 1-1.25 1.25 1.25 1.25 0 0 1 1.25-1.25z"/></svg>
            </a>
            <a href="https://twitter.com/Techjockey" target="_blank" rel="noreferrer" aria-label="Twitter">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18.9 2H22l-6.8 7.8L23 22h-6.2l-4.8-6.3L6.5 22H3.4l7.3-8.4L1 2h6.3l4.3 5.7L18.9 2zm-1.1 18h1.7L6.3 3.9H4.5L17.8 20z"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/techjockey-infotech-pvt-ltd/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 12.47c0-3.17-1.69-4.64-3.95-4.64a3.42 3.42 0 0 0-3.08 1.69V8.5H10V20h3.38v-6.17c0-1.63.31-3.2 2.33-3.2 1.99 0 2.02 1.86 2.02 3.3V20h3.38l-.01-7.53z"/></svg>
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
