import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const heroRef = useRef(null);
  const revealRefs = useRef([]);
  const featureImages = [
    '/output/generated-assets/ds_1776856925722_99af8ca4/05-fa9caa1249.png',
    '/output/generated-assets/ds_1776856925722_99af8ca4/06-1d34b82b19.png',
    '/output/generated-assets/ds_1776856925722_99af8ca4/07-65027719ed.png',
    '/output/generated-assets/ds_1776856925722_99af8ca4/10-37e01d49c6.png',
    '/output/generated-assets/ds_1776856925722_99af8ca4/02-3965757185.jpeg',
    '/output/generated-assets/ds_1776856925722_99af8ca4/09-84289b855f.png'
  ];
  const productImages = [
    '/output/generated-assets/ds_1776856925722_99af8ca4/01-7f64cfae87.jpeg',
    '/output/generated-assets/ds_1776856925722_99af8ca4/03-2c9cc1df82.jpeg',
    '/output/generated-assets/ds_1776856925722_99af8ca4/02-3965757185.jpeg',
    '/output/generated-assets/ds_1776856925722_99af8ca4/09-84289b855f.png',
    '/output/generated-assets/ds_1776856925722_99af8ca4/01-7f64cfae87.jpeg',
    '/output/generated-assets/ds_1776856925722_99af8ca4/03-2c9cc1df82.jpeg',
    '/output/generated-assets/ds_1776856925722_99af8ca4/02-3965757185.jpeg',
    '/output/generated-assets/ds_1776856925722_99af8ca4/09-84289b855f.png'
  ];
  const demoVideo =
    'https://v26-magicarena-v.365yg.com/84986d642ffc236c39b5d535aa86bc32/7c596d3c/video/tos/cn/tos-cn-v-13c08f/ow7XNSzPVCAZaEEpCjFfABgBCXxA1NEL9ADf72/?a=611830&ch=0&cr=0&dr=0&er=0&lr=default&cd=0%7C0%7C0%7C0&br=2723&bt=2723&cs=0&ds=3&ft=7ubAHfXEBBkq8ZmoEarWU_vjVQWw&mime_type=video_mp4&qs=13&rc=ajVleHk5cndvOTczNGllM0BpajVleHk5cndvOTczNGllM0AzM28yMmRrbjNhLS1kXy9zYSMzM28yMmRrbjNhLS1kXy9zcw%3D%3D&btag=40000e00008000&dy_q=1770875442&l=20260212134538DCD5D5DD0148D91D5FFB';

  const seedreamFeatures = [
    {
      title: 'Advanced Text–Image Alignment',
      description: 'Accurately translates prompts into visuals with improved semantic understanding.',
      image: featureImages[0]
    },
    {
      title: 'High-Resolution Output',
      description: 'Generate native images up to 1K–4K resolution with strong visual fidelity.',
      image: featureImages[1]
    },
    {
      title: 'Superior Typographic Rendering',
      description: 'Optimized for posters, ads, and text-heavy visual designs.',
      image: featureImages[2]
    },
    {
      title: 'Multi-Image Composition',
      description: 'Combines multiple inputs while accurately maintaining subject consistency.',
      image: featureImages[3]
    },
    {
      title: 'Strong Structural Fidelity',
      description: 'Maintains composition, layout, and scene structure with high precision.',
      image: featureImages[4]
    }
  ];

  const seedanceFeatures = [
    {
      title: 'Key Capabilities of Seedance 1.5 Pro',
      description: 'Professional-grade AI video production with narrative coherence and realistic motion.',
      image: featureImages[5]
    },
    {
      title: 'Text-to-Video Generation',
      description: 'Create videos directly from text prompts.',
      image: productImages[1]
    },
    {
      title: 'Audio-Visual Synchronization',
      description: 'Generate video and audio simultaneously with strong multimodal alignment.',
      image: productImages[2]
    },
    {
      title: 'Multilingual Lip-Sync',
      description: 'Supports multilingual and dialect-level lip synchronization.',
      image: productImages[3]
    },
    {
      title: 'Cinematic Camera Control',
      description: 'Generate videos with dynamic camera movement and cinematic storytelling.',
      image: productImages[4]
    },
    {
      title: '10× Faster Inference',
      description: 'Optimized inference pipeline significantly improves generation speed.',
      image: productImages[5]
    }
  ];

  const testimonials = [
    {
      quote:
        'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      author: 'Vaishali Saxena',
      designation: 'Creative Director'
    },
    {
      quote:
        'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      author: 'Vihaan Pandey',
      designation: 'Video Producer'
    },
    {
      quote:
        'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      author: 'Anurag Malhotra',
      designation: 'Art Director'
    },
    {
      quote:
        'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      author: 'Ritika Sharma',
      designation: 'Marketing Lead'
    }
  ];

  const [activeTab, setActiveTab] = useState(0);
  const [openAccordion, setOpenAccordion] = useState(0);
  const [testimonialIndex, setTestimonialIndex] = useState(0);
  const [typedText, setTypedText] = useState('');
  const typingString = 'Text → Image → Edit → Compose → Video → Audio';

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setTypedText(typingString.slice(0, index + 1));
      index++;
      if (index === typingString.length) {
        index = 0;
        setTypedText('');
      }
    }, 90);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTestimonialIndex((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(interval);
  }, [testimonials.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add('revealed');
        });
      },
      { threshold: 0.15 }
    );

    const currentRefs = revealRefs.current.filter(Boolean);
    currentRefs.forEach((el) => observer.observe(el));
    return () => currentRefs.forEach((el) => observer.unobserve(el));
  }, []);

  const addRevealRef = (el) => {
    if (el && !revealRefs.current.includes(el)) revealRefs.current.push(el);
  };

  const IconSpark = () => (
    <svg viewBox="0 0 24 24" className="feature-icon" aria-hidden="true">
      <defs>
        <linearGradient id="gradSpark" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff9a4d" />
          <stop offset="100%" stopColor="#ff6b00" />
        </linearGradient>
      </defs>
      <path fill="url(#gradSpark)" d="M12 2l2.2 5.8L20 10l-5.8 2.2L12 18l-2.2-5.8L4 10l5.8-2.2L12 2z" />
    </svg>
  );

  const IconFrame = () => (
    <svg viewBox="0 0 24 24" className="feature-icon" aria-hidden="true">
      <defs>
        <linearGradient id="gradFrame" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffb36b" />
          <stop offset="100%" stopColor="#ff6b00" />
        </linearGradient>
      </defs>
      <path fill="url(#gradFrame)" d="M4 4h16v16H4V4zm3 3v10h10V7H7z" />
    </svg>
  );

  const IconType = () => (
    <svg viewBox="0 0 24 24" className="feature-icon" aria-hidden="true">
      <defs>
        <linearGradient id="gradType" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ffd08a" />
          <stop offset="100%" stopColor="#ff6b00" />
        </linearGradient>
      </defs>
      <path fill="url(#gradType)" d="M5 6V4h14v2h-6v12h-2V6H5z" />
    </svg>
  );

  const IconCompose = () => (
    <svg viewBox="0 0 24 24" className="feature-icon" aria-hidden="true">
      <defs>
        <linearGradient id="gradCompose" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff9440" />
          <stop offset="100%" stopColor="#ff6b00" />
        </linearGradient>
      </defs>
      <path fill="url(#gradCompose)" d="M3 5h8v8H3V5zm10 0h8v5h-8V5zM3 15h5v6H3v-6zm7-2h11v8H10v-8z" />
    </svg>
  );

  const IconAudio = () => (
    <svg viewBox="0 0 24 24" className="feature-icon" aria-hidden="true">
      <defs>
        <linearGradient id="gradAudio" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#ff9f55" />
          <stop offset="100%" stopColor="#ff6b00" />
        </linearGradient>
      </defs>
      <path fill="url(#gradAudio)" d="M5 14h2v-4H5v4zm4 4h2V6H9v12zm4-2h2v-8h-2v8zm4 4h2V4h-2v16z" />
    </svg>
  );

  const icons = [<IconSpark key="1" />, <IconFrame key="2" />, <IconType key="3" />, <IconCompose key="4" />, <IconAudio key="5" />, <IconSpark key="6" />];

  const css = `
    :root{
      --accent:${accent};
      --bg:#0b0b0d;
      --bg2:#101114;
      --bg3:#14161b;
      --surface:rgba(255,255,255,0.06);
      --surface2:rgba(255,255,255,0.08);
      --line:rgba(255,255,255,0.12);
      --text:#f5f7fb;
      --muted:#b9bec8;
      --green:#22c55e;
      --gold:#f5b301;
      --shadow:0 20px 60px rgba(0,0,0,.35);
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:var(--bg);color:var(--text);font-family:'Inter',sans-serif}
    a{text-decoration:none;color:inherit}
    img,video{max-width:100%;display:block}
    .landing-page{background:var(--bg);color:var(--text);overflow:hidden}
    .container{width:min(1200px,calc(100% - 32px));margin:0 auto}
    .section{padding:88px 0;position:relative}
    .section-dark{background:#0d0e11}
    .section-darker{background:#101114}
    .section-glass:before{
      content:"";position:absolute;inset:0;
      background:
      radial-gradient(circle at 20% 20%, rgba(255,107,0,.14), transparent 30%),
      radial-gradient(circle at 80% 30%, rgba(255,107,0,.08), transparent 28%),
      linear-gradient(180deg, rgba(255,255,255,.02), rgba(255,255,255,0));
      pointer-events:none;
    }
    .section-head{text-align:center;max-width:780px;margin:0 auto 46px}
    .section-head h2{font-family:'Syne',sans-serif;font-size:clamp(32px,4vw,48px);line-height:1.05;margin:0 0 14px}
    .section-head p{color:var(--muted);font-size:17px;line-height:1.7;margin:0}
    .topbar{
      position:sticky;top:0;z-index:1000;background:rgba(11,11,13,.8);backdrop-filter:blur(16px);
      border-bottom:1px solid rgba(255,255,255,.08)
    }
    .navbar{display:flex;align-items:center;justify-content:space-between;padding:14px 0;gap:16px}
    .nav-left{display:flex;align-items:center;gap:14px;min-width:0}
    .logo-badge{
      width:42px;height:42px;border-radius:14px;
      background:linear-gradient(135deg, rgba(255,107,0,.25), rgba(255,107,0,.05));
      border:1px solid rgba(255,107,0,.35);display:grid;place-items:center;box-shadow:0 10px 30px rgba(255,107,0,.18)
    }
    .logo-badge span{font-family:'Syne',sans-serif;font-size:20px;color:#fff}
    .brand-copy{min-width:0}
    .brand-copy strong{display:block;font-size:15px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}
    .brand-copy small{display:block;color:var(--muted);font-size:12px}
    .nav-right{display:flex;align-items:center;gap:14px}
    .tj-logo{height:28px;width:auto;filter:brightness(0) invert(1);opacity:.95}
    .btn{
      display:inline-flex;align-items:center;justify-content:center;gap:10px;
      padding:14px 22px;border-radius:14px;font-weight:700;border:1px solid transparent;
      transition:.25s ease;cursor:pointer
    }
    .btn:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(0,0,0,.3)}
    .btn-primary{background:var(--accent);color:#fff}
    .btn-secondary{background:rgba(255,255,255,.06);border-color:rgba(255,255,255,.12);color:#fff}
    .btn-full{width:100%}
    .hero{
      background:
      radial-gradient(circle at 75% 20%, rgba(255,107,0,.22), transparent 25%),
      radial-gradient(circle at 30% 15%, rgba(255,107,0,.14), transparent 20%),
      linear-gradient(135deg, #17181c 0%, #0d0e11 55%, #121319 100%);
      padding:92px 0 72px;position:relative;overflow:hidden
    }
    .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:38px;align-items:center}
    .eyebrow{
      display:inline-flex;align-items:center;gap:10px;padding:8px 14px;border-radius:999px;
      background:rgba(255,107,0,.1);border:1px solid rgba(255,107,0,.2);color:#ffd2b2;font-size:13px;font-weight:600;margin-bottom:20px
    }
    .eyebrow-dot{width:8px;height:8px;border-radius:50%;background:var(--accent);box-shadow:0 0 16px var(--accent)}
    .hero h1{font-family:'Syne',sans-serif;font-size:clamp(48px,6vw,74px);line-height:.98;margin:0 0 18px;letter-spacing:-.03em}
    .hero p{font-size:18px;line-height:1.75;color:var(--muted);margin:0 0 16px}
    .hero-bullets{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:12px;margin:24px 0 30px}
    .hero-bullet{
      display:flex;align-items:center;gap:10px;padding:12px 14px;border-radius:14px;
      background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.08)
    }
    .hero-bullet i{width:18px;height:18px;border-radius:50%;background:linear-gradient(135deg, #ff9a4d, #ff6b00);display:inline-block;position:relative}
    .hero-bullet i:after{content:"";position:absolute;left:5px;top:4px;width:6px;height:9px;border:2px solid #fff;border-top:none;border-left:none;transform:rotate(45deg)}
    .cta-row{display:flex;flex-wrap:wrap;gap:14px}
    .hero-visual{
      position:relative;display:flex;align-items:center;justify-content:center;min-height:520px
    }
    .orb{position:absolute;border-radius:50%;filter:blur(22px);opacity:.7;animation:float 8s ease-in-out infinite}
    .orb.one{width:160px;height:160px;background:rgba(255,107,0,.18);top:10%;right:8%}
    .orb.two{width:110px;height:110px;background:rgba(255,140,66,.16);bottom:12%;left:5%;animation-delay:1.5s}
    .orb.three{width:70px;height:70px;background:rgba(255,180,100,.18);top:48%;left:16%;animation-delay:3s}
    .mesh-grid{
      position:absolute;inset:0;
      background-image:
        linear-gradient(rgba(255,255,255,.04) 1px, transparent 1px),
        linear-gradient(90deg, rgba(255,255,255,.04) 1px, transparent 1px);
      background-size:42px 42px;
      mask-image:radial-gradient(circle at center, black 50%, transparent 90%);
      opacity:.4
    }
    .hero-stack{position:relative;width:100%;max-width:560px}
    .hero-main-card{
      position:relative;padding:16px;border-radius:24px;background:rgba(255,255,255,.06);
      border:1px solid rgba(255,255,255,.12);backdrop-filter:blur(16px);box-shadow:var(--shadow)
    }
    .hero-image-shell{
      position:relative;border-radius:18px;overflow:hidden;background:#0f1117;border:1px solid rgba(255,255,255,.08)
    }
    .hero-image-shell img{
      width:100%;max-height:480px;object-fit:contain;border-radius:12px
    }
    .floating-ui{
      position:absolute;background:rgba(10,10,12,.78);backdrop-filter:blur(12px);
      border:1px solid rgba(255,255,255,.12);border-radius:18px;padding:14px;box-shadow:var(--shadow)
    }
    .floating-ui.top-right{right:-18px;top:24px;width:190px}
    .floating-ui.bottom-left{left:-18px;bottom:26px;width:210px}
    .floating-ui.bottom-right{right:10px;bottom:-16px;width:165px}
    .mini-head{display:flex;align-items:center;justify-content:space-between;margin-bottom:10px}
    .mini-dots{display:flex;gap:6px}
    .mini-dots span{width:8px;height:8px;border-radius:50%;background:rgba(255,255,255,.22)}
    .mini-dots span:first-child{background:var(--accent)}
    .typing{
      white-space:nowrap;overflow:hidden;color:#fff;font-size:13px;font-weight:600
    }
    .typing-cursor{display:inline-block;width:8px;height:16px;background:var(--accent);margin-left:4px;animation:blink 1s step-end infinite}
    .wave-bars{display:flex;align-items:flex-end;gap:4px;height:38px}
    .wave-bars span{
      width:7px;border-radius:999px;background:linear-gradient(180deg,#ffb36b,#ff6b00);animation:wave 1.2s ease-in-out infinite
    }
    .wave-bars span:nth-child(1){height:14px}
    .wave-bars span:nth-child(2){height:28px;animation-delay:.1s}
    .wave-bars span:nth-child(3){height:18px;animation-delay:.2s}
    .wave-bars span:nth-child(4){height:34px;animation-delay:.3s}
    .wave-bars span:nth-child(5){height:22px;animation-delay:.4s}
    .thumb-grid{display:grid;grid-template-columns:repeat(3,1fr);gap:8px}
    .thumb{
      aspect-ratio:1;border-radius:12px;
      background:
        linear-gradient(135deg, rgba(255,107,0,.18), rgba(255,255,255,.05)),
        linear-gradient(45deg, #1d1f27, #101114);
      border:1px solid rgba(255,255,255,.08)
    }
    .utility-strip{
      background:#111216;border-top:1px solid rgba(255,255,255,.06);border-bottom:1px solid rgba(255,255,255,.06)
    }
    .metrics-grid{display:grid;grid-template-columns:repeat(5,1fr);gap:14px;padding:18px 0}
    .metric-pill{
      display:flex;align-items:center;gap:12px;padding:14px 16px;border-radius:14px;
      background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);color:#dfe4ea;font-weight:600
    }
    .metric-pill .dot{
      width:12px;height:12px;border-radius:50%;background:linear-gradient(135deg,#ff9a4d,#ff6b00);box-shadow:0 0 14px rgba(255,107,0,.5)
    }
    .split-block{
      display:grid;grid-template-columns:1.02fr .98fr;gap:34px;align-items:center
    }
    .spotlight-card{
      padding:28px;border-radius:26px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);box-shadow:var(--shadow)
    }
    .spotlight-card h3,.accordion-copy h3,.pricing-card h3,.testimonial-card h3{
      font-family:'Syne',sans-serif;letter-spacing:-.02em
    }
    .spotlight-card h3{font-size:clamp(32px,4vw,44px);margin:0 0 16px}
    .spotlight-card p,.accordion-copy p{color:var(--muted);font-size:17px;line-height:1.75}
    .preview-shell{
      border-radius:20px;overflow:hidden;border:1px solid rgba(255,255,255,.1);background:#0f1117;margin-top:22px
    }
    .preview-shell img{width:100%;height:320px;object-fit:cover}
    .preview-meta{display:flex;justify-content:space-between;gap:12px;padding:12px 14px;background:rgba(255,255,255,.03)}
    .preview-chip{
      font-size:12px;font-weight:700;color:#ffd2b2;background:rgba(255,107,0,.12);padding:8px 12px;border-radius:999px;border:1px solid rgba(255,107,0,.2)
    }
    .feature-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}
    .feature-card{
      position:relative;padding:18px;border-radius:18px;background:rgba(255,255,255,.05);
      border:1px solid rgba(255,255,255,.08);overflow:hidden;min-height:230px
    }
    .feature-card:before{
      content:"";position:absolute;inset:auto -20px -30px auto;width:140px;height:140px;
      background:radial-gradient(circle, rgba(255,107,0,.18), transparent 65%);pointer-events:none
    }
    .feature-top{display:flex;align-items:center;justify-content:space-between;gap:10px;margin-bottom:14px}
    .feature-icon{width:24px;height:24px;flex:0 0 24px}
    .feature-card h4{margin:0;font-size:18px;line-height:1.35}
    .feature-card p{margin:10px 0 14px;color:var(--muted);font-size:15px;line-height:1.7}
    .feature-card img{width:100%;height:110px;object-fit:cover;border-radius:14px;border:1px solid rgba(255,255,255,.08)}
    .tabs-nav{display:flex;flex-wrap:wrap;gap:12px;margin-bottom:22px}
    .tab-btn{
      padding:12px 16px;border-radius:12px;border:1px solid rgba(255,255,255,.1);
      background:rgba(255,255,255,.04);color:#fff;font-weight:700;cursor:pointer;transition:.25s ease
    }
    .tab-btn.active{background:rgba(255,107,0,.14);border-color:rgba(255,107,0,.3);color:#ffd2b2}
    .video-showcase{
      display:grid;grid-template-columns:.95fr 1.05fr;gap:28px;align-items:start
    }
    .video-card{
      position:sticky;top:100px;padding:16px;border-radius:24px;background:rgba(255,255,255,.05);
      border:1px solid rgba(255,255,255,.1);box-shadow:var(--shadow)
    }
    .video-frame{border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.08);background:#08090c}
    .video-frame video{width:100%;height:420px;object-fit:cover}
    .accordion{display:flex;flex-direction:column;gap:14px}
    .accordion-item{
      border:1px solid rgba(255,255,255,.09);border-radius:18px;overflow:hidden;background:rgba(255,255,255,.04)
    }
    .accordion-head{
      width:100%;text-align:left;background:transparent;border:none;color:#fff;padding:18px 20px;cursor:pointer;
      display:flex;justify-content:space-between;align-items:center;font-size:18px;font-weight:700
    }
    .accordion-head span:last-child{color:var(--accent);font-size:28px;line-height:1}
    .accordion-body{
      display:grid;grid-template-columns:1.1fr .9fr;gap:18px;padding:0 20px 20px 20px
    }
    .accordion-body p{margin:0;color:var(--muted);line-height:1.75}
    .accordion-body img{width:100%;height:160px;object-fit:cover;border-radius:16px;border:1px solid rgba(255,255,255,.08)}
    .media-mosaic{
      display:grid;grid-template-columns:repeat(4,1fr);gap:14px;margin-top:34px
    }
    .mosaic-card{
      border-radius:18px;overflow:hidden;border:1px solid rgba(255,255,255,.08);background:rgba(255,255,255,.04)
    }
    .mosaic-card img{width:100%;height:180px;object-fit:cover}
    .pricing-grid{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:22px}
    .pricing-card{
      position:relative;padding:28px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);
      box-shadow:var(--shadow);display:flex;flex-direction:column
    }
    .pricing-card.highlight{border-color:rgba(255,107,0,.35);transform:translateY(-4px);background:linear-gradient(180deg, rgba(255,107,0,.08), rgba(255,255,255,.05))}
    .green-badge{
      display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border-radius:999px;background:rgba(34,197,94,.12);
      color:#9ef2b3;border:1px solid rgba(34,197,94,.28);font-size:12px;font-weight:800;margin-bottom:14px
    }
    .pricing-card h3{font-size:28px;margin:0 0 12px}
    .price-row{display:flex;align-items:flex-end;gap:12px;margin-bottom:12px;min-height:56px}
    .original-price{color:#8d94a0;text-decoration:line-through;font-size:16px}
    .current-price{font-size:38px;font-weight:900;font-family:'Syne',sans-serif}
    .quote-text{font-size:18px;color:#dfe4ea;font-weight:700}
    .pricing-card p{color:var(--muted);margin:0 0 18px}
    .checklist{list-style:none;padding:0;margin:0 0 22px;display:flex;flex-direction:column;gap:12px}
    .checklist li{display:flex;gap:12px;align-items:flex-start;color:#e9edf5;line-height:1.6}
    .checklist li i{
      width:18px;height:18px;border-radius:50%;background:rgba(34,197,94,.16);border:1px solid rgba(34,197,94,.32);
      margin-top:3px;position:relative;flex:0 0 18px
    }
    .checklist li i:after{
      content:"";position:absolute;left:5px;top:2px;width:5px;height:9px;border:2px solid var(--green);border-top:none;border-left:none;transform:rotate(45deg)
    }
    .testimonial-wrap{position:relative}
    .testimonial-carousel{overflow:hidden}
    .testimonial-track{
      display:flex;transition:transform .5s ease
    }
    .testimonial-slide{min-width:100%;padding:4px}
    .testimonial-card{
      min-height:290px;padding:30px;border-radius:24px;background:rgba(255,255,255,.05);border:1px solid rgba(255,255,255,.1);box-shadow:var(--shadow)
    }
    .quote-mark{font-size:58px;line-height:1;color:var(--accent);font-family:'Syne',sans-serif}
    .stars{color:var(--gold);letter-spacing:2px;font-size:20px;margin:8px 0 14px}
    .testimonial-card p{font-size:18px;line-height:1.8;color:#edf1f7;margin:0 0 22px}
    .author{font-weight:800;font-size:18px}
    .designation{color:#9aa1ad;margin-top:6px}
    .carousel-nav{display:flex;gap:12px;justify-content:center;margin-top:20px}
    .nav-arrow{
      width:46px;height:46px;border-radius:50%;border:1px solid rgba(255,255,255,.12);background:rgba(255,255,255,.05);color:#fff;
      cursor:pointer;transition:.25s ease;font-size:20px
    }
    .nav-arrow:hover{transform:translateY(-2px);box-shadow:0 14px 30px rgba(0,0,0,.3)}
    .footer{
      background:#09090b;border-top:1px solid rgba(255,255,255,.08);padding:50px 0 24px
    }
    .footer-grid{display:grid;grid-template-columns:1.2fr .9fr .9fr;gap:28px;margin-bottom:26px}
    .footer h4{margin:0 0 12px;font-size:18px;font-family:'Syne',sans-serif}
    .footer p,.footer li,.footer a{color:#b7bcc7;line-height:1.8;font-size:15px}
    .footer ul{list-style:none;padding:0;margin:0}
    .footer-bottom{
      border-top:1px solid rgba(255,255,255,.08);padding-top:18px;display:flex;justify-content:space-between;gap:16px;flex-wrap:wrap;color:#8f96a3;font-size:14px
    }
    .reveal{opacity:0;transform:translateY(28px);transition:opacity .8s ease,transform .8s ease}
    .reveal.revealed{opacity:1;transform:translateY(0)}
    @keyframes float{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(-14px)}
    }
    @keyframes blink{
      50%{opacity:0}
    }
    @keyframes wave{
      0%,100%{transform:scaleY(.7);opacity:.8}
      50%{transform:scaleY(1.1);opacity:1}
    }
    @media (max-width: 1024px){
      .hero-grid,.split-block,.video-showcase,.footer-grid,.pricing-grid{grid-template-columns:1fr}
      .metrics-grid{grid-template-columns:repeat(2,1fr)}
      .hero-visual{min-height:auto}
      .video-card{position:relative;top:0}
      .accordion-body{grid-template-columns:1fr}
    }
    @media (max-width: 767px){
      .section{padding:68px 0}
      .navbar{padding:12px 0}
      .brand-copy{display:none}
      .nav-right{gap:10px}
      .tj-logo{height:24px}
      .btn{padding:12px 16px}
      .hero{padding:72px 0 56px}
      .hero-bullets,.feature-grid,.media-mosaic,.metrics-grid{grid-template-columns:1fr}
      .floating-ui.top-right,.floating-ui.bottom-left,.floating-ui.bottom-right{position:relative;inset:auto;width:100%;margin-top:12px}
      .hero-main-card{padding:12px}
      .preview-shell img{height:240px}
      .mosaic-card img{height:160px}
      .cta-row{flex-direction:column}
      .nav-cta{display:none}
    }
  `;

  return (
    <div className="landing-page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Syne:wght@700&family=Inter:wght@400;500;600&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="topbar">
        <div className="container navbar">
          <div className="nav-left">
            <div className="logo-badge">
              <span>S</span>
            </div>
            <div className="brand-copy">
              <strong>Seedream 4.5 &amp; Seedance 1.5 Pro</strong>
              <small>ByteDance Generative Models</small>
            </div>
          </div>
          <div className="nav-right">
            <img
              className="tj-logo"
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              alt="Techjockey"
            />
            <a href="#pricing" className="btn btn-primary nav-cta">
              Generate with AI
            </a>
          </div>
        </div>
      </div>

      <section className="hero" ref={heroRef}>
        <div className="container hero-grid">
          <div className="hero-copy reveal" ref={addRevealRef}>
            <div className="eyebrow">
              <span className="eyebrow-dot"></span>
              Cinematic AI for creative and enterprise teams
            </div>
            <h1>
              Create High-Quality AI Images &amp; Videos with{' '}
              <span style={{ color: accent }}>Seedream 4.5 and Seedance 1.5 Pro by ByteDance</span>
            </h1>
            <p>
              Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation)
              and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by
              ByteDance for high-quality visual content creation.
            </p>
            <p>
              From text prompts, images, or scripts, generate professional visuals and videos with
              powerful multimodal AI systems.
            </p>

            <div className="hero-bullets">
              <div className="hero-bullet">
                <i></i>
                <span>Up to 4K-ready image generation</span>
              </div>
              <div className="hero-bullet">
                <i></i>
                <span>Native audio + video creation</span>
              </div>
              <div className="hero-bullet">
                <i></i>
                <span>Multimodal editing and composition</span>
              </div>
              <div className="hero-bullet">
                <i></i>
                <span>Built for branded and enterprise content</span>
              </div>
            </div>

            <div className="cta-row">
              <a href="#pricing" className="btn btn-primary">
                Generate with AI
              </a>
              <a href="#products" className="btn btn-secondary">
                Explore Capabilities
              </a>
            </div>
          </div>

          <div className="hero-visual reveal" ref={addRevealRef}>
            <div className="mesh-grid"></div>
            <div className="orb one"></div>
            <div className="orb two"></div>
            <div className="orb three"></div>

            <div className="hero-stack">
              <div className="hero-main-card">
                <div className="hero-image-shell">
                  <img
                    src="/output/generated-assets/ds_1776856925722_99af8ca4/01-7f64cfae87.jpeg"
                    alt="Seedream and Seedance hero visual"
                  />
                </div>
              </div>

              <div className="floating-ui top-right">
                <div className="mini-head">
                  <strong style={{ fontSize: 13 }}>Prompt Flow</strong>
                  <div className="mini-dots">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
                <div className="typing">
                  {typedText}
                  <span className="typing-cursor"></span>
                </div>
              </div>

              <div className="floating-ui bottom-left">
                <div className="mini-head">
                  <strong style={{ fontSize: 13 }}>Audio Sync</strong>
                  <span style={{ color: '#9ef2b3', fontSize: 12 }}>Live</span>
                </div>
                <div className="wave-bars">
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </div>

              <div className="floating-ui bottom-right">
                <div className="mini-head">
                  <strong style={{ fontSize: 13 }}>Creative Frames</strong>
                </div>
                <div className="thumb-grid">
                  <div className="thumb"></div>
                  <div className="thumb"></div>
                  <div className="thumb"></div>
                  <div className="thumb"></div>
                  <div className="thumb"></div>
                  <div className="thumb"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="utility-strip">
        <div className="container">
          <div className="metrics-grid reveal" ref={addRevealRef}>
            <div className="metric-pill">
              <span className="dot"></span>
              AI Image Generation
            </div>
            <div className="metric-pill">
              <span className="dot"></span>
              AI Video Generation with Audio
            </div>
            <div className="metric-pill">
              <span className="dot"></span>
              Multimodal Content Creation
            </div>
            <div className="metric-pill">
              <span className="dot"></span>
              Enterprise-ready AI Infrastructure
            </div>
            <div className="metric-pill">
              <span className="dot"></span>
              Transform Ideas into Visuals Instantly
            </div>
          </div>
        </div>
      </section>

      <section id="products" className="section section-dark section-glass">
        <div className="container">
          <div className="section-head reveal" ref={addRevealRef}>
            <h2>Two Flagship Models. One Premium Creative Workflow.</h2>
            <p>
              Seedream 4.5 leads with editorial-grade image generation, while Seedance 1.5 Pro
              extends the stack into synchronized cinematic video and audio production.
            </p>
          </div>

          <div className="split-block">
            <div className="spotlight-card reveal" ref={addRevealRef}>
              <span className="preview-chip">Seedream 4.5 · AI Image Generation</span>
              <h3>AI Image Generation with Seedream 4.5</h3>
              <p>
                Seedream 4.5 is a high-performance multimodal image generation system designed to
                produce high-resolution, high-fidelity images from text prompts and visual inputs.
                The model unifies text-to-image synthesis, image editing, and multi-image
                composition within a single framework.
              </p>

              <div className="tabs-nav">
                {seedreamFeatures.map((feature, idx) => (
                  <button
                    key={idx}
                    className={`tab-btn ${activeTab === idx ? 'active' : ''}`}
                    onClick={() => setActiveTab(idx)}
                  >
                    {feature.title}
                  </button>
                ))}
              </div>

              <div className="preview-shell">
                <img src={seedreamFeatures[activeTab].image} alt={seedreamFeatures[activeTab].title} />
                <div className="preview-meta">
                  <strong>{seedreamFeatures[activeTab].title}</strong>
                  <span style={{ color: '#b9bec8', fontSize: 13 }}>Editorial-grade output</span>
                </div>
              </div>
            </div>

            <div className="feature-grid reveal" ref={addRevealRef}>
              {seedreamFeatures.map((feature, idx) => (
                <div className="feature-card" key={feature.title}>
                  <div className="feature-top">
                    {icons[idx % icons.length]}
                    <span className="preview-chip">Capability {idx + 1}</span>
                  </div>
                  <h4>{feature.title}</h4>
                  <p>{feature.description}</p>
                  <img src={feature.image} alt={feature.title} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-darker section-glass">
        <div className="container">
          <div className="video-showcase">
            <div className="video-card reveal" ref={addRevealRef}>
              <span className="preview-chip">Seedance 1.5 Pro · Demo Preview</span>
              <h3 style={{ fontSize: 32, margin: '14px 0 12px', fontFamily: 'Syne, sans-serif' }}>
                AI Video Generation with Audio
              </h3>
              <p style={{ color: '#b9bec8', lineHeight: 1.75, margin: '0 0 18px' }}>
                Seedance 1.5 Pro is built for native audio-visual generation, enabling synchronized
                creation of video and sound together through a dual-branch diffusion transformer
                architecture.
              </p>
              <div className="video-frame">
                <video autoPlay muted loop playsInline controls>
                  <source src={demoVideo} type="video/mp4" />
                </video>
              </div>
            </div>

            <div className="accordion-copy reveal" ref={addRevealRef}>
              <span className="preview-chip">Technical + Kinetic Capability Stack</span>
              <h3 style={{ fontSize: 44, margin: '14px 0 16px' }}>
                Seedance 1.5 Pro by ByteDance
              </h3>
              <p>
                To keep the reading rhythm distinct from Seedream, Seedance is presented as an
                accordion-led capability walkthrough. Open each panel to explore how the model
                combines motion, sound, speed, and storytelling control.
              </p>

              <div className="accordion" style={{ marginTop: 24 }}>
                {seedanceFeatures.map((item, idx) => (
                  <div className="accordion-item" key={item.title}>
                    <button
                      className="accordion-head"
                      onClick={() => setOpenAccordion(openAccordion === idx ? -1 : idx)}
                    >
                      <span>{item.title}</span>
                      <span>{openAccordion === idx ? '−' : '+'}</span>
                    </button>
                    {openAccordion === idx && (
                      <div className="accordion-body">
                        <p>{item.description}</p>
                        <img src={item.image} alt={item.title} />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="media-mosaic reveal" ref={addRevealRef}>
            {productImages.slice(0, 4).map((img, idx) => (
              <div className="mosaic-card" key={idx}>
                <img src={img} alt={`Product visual ${idx + 1}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="section section-dark section-glass">
        <div className="container">
          <div className="section-head reveal" ref={addRevealRef}>
            <h2>Flexible Access for Image and Video AI Workflows</h2>
            <p>
              Choose the model aligned to your output needs. Pricing below reflects the available
              details provided for each ByteDance generative solution.
            </p>
          </div>

          <div className="pricing-grid">
            <div className="pricing-card reveal" ref={addRevealRef}>
              <div className="green-badge">Available on Request</div>
              <h3>Seedream 4.5 (AI Image Generation)</h3>
              <div className="price-row">
                <span className="original-price">Custom enterprise pricing</span>
                <span className="quote-text">Get Quote</span>
              </div>
              <p>Ideal for high-fidelity image generation, editing, and multi-image composition.</p>
              <ul className="checklist">
                <li><i></i><span>High-resolution image generation (up to 4K quality)</span></li>
                <li><i></i><span>Text-to-image &amp; multimodal image editing</span></li>
                <li><i></i><span>Multi-image composition for complex visuals</span></li>
                <li><i></i><span>Enhanced typographic rendering for posters, ads &amp; text-heavy designs</span></li>
              </ul>
              <a href="#footer" className="btn btn-secondary btn-full">Get Quote</a>
            </div>

            <div className="pricing-card highlight reveal" ref={addRevealRef}>
              <div className="green-badge">Best for cinematic teams</div>
              <h3>Seedance 1.5 Pro (AI Video Generation)</h3>
              <div className="price-row">
                <span className="original-price">$1,200/month</span>
                <span className="current-price">$1,000/month/</span>
              </div>
              <p>Built for synchronized native audio-video creation with cinematic control.</p>
              <ul className="checklist">
                <li><i></i><span>Text-to-video generation with cinematic output</span></li>
                <li><i></i><span>Native audio + video generation (synchronized)</span></li>
                <li><i></i><span>Multilingual lip-sync capabilities</span></li>
                <li><i></i><span>Fast inference for quicker video production</span></li>
              </ul>
              <a href="#footer" className="btn btn-primary btn-full">Get Quote</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-darker section-glass">
        <div className="container">
          <div className="section-head reveal" ref={addRevealRef}>
            <h2>Proof from Creative Decision-Makers</h2>
            <p>
              Teams evaluating premium AI image and video workflows highlight speed, fidelity, and
              stronger multimodal production outcomes.
            </p>
          </div>

          <div className="testimonial-wrap reveal" ref={addRevealRef}>
            <div className="testimonial-carousel">
              <div
                className="testimonial-track"
                style={{ transform: `translateX(-${testimonialIndex * 100}%)` }}
              >
                {testimonials.map((item, idx) => (
                  <div className="testimonial-slide" key={idx}>
                    <div className="testimonial-card">
                      <div className="quote-mark">❝</div>
                      <div className="stars">★★★★★</div>
                      <p>{item.quote}</p>
                      <div className="author">{item.author}</div>
                      <div className="designation">{item.designation}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="carousel-nav">
              <button
                className="nav-arrow"
                onClick={() =>
                  setTestimonialIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                }
              >
                ←
              </button>
              <button
                className="nav-arrow"
                onClick={() => setTestimonialIndex((prev) => (prev + 1) % testimonials.length)}
              >
                →
              </button>
            </div>
          </div>

          <div className="media-mosaic reveal" ref={addRevealRef}>
            {productImages.slice(4, 8).map((img, idx) => (
              <div className="mosaic-card" key={idx}>
                <img src={img} alt={`Creative showcase ${idx + 5}`} />
              </div>
            ))}
          </div>
        </div>
      </section>

      <footer id="footer" className="footer">
        <div className="container">
          <div className="footer-grid">
            <div>
              <h4>Seedream 4.5 &amp; Seedance 1.5 Pro</h4>
              <p>
                Explore ByteDance’s premium generative AI stack for high-quality image creation,
                multimodal editing, and synchronized cinematic video generation with audio.
              </p>
            </div>
            <div>
              <h4>Highlights</h4>
              <ul>
                <li>AI Image Generation up to 4K quality</li>
                <li>Text-to-video with native audio sync</li>
                <li>Multilingual lip-sync support</li>
                <li>Enterprise-ready creative infrastructure</li>
              </ul>
            </div>
            <div>
              <h4>Techjockey</h4>
              <p>
                Discover, compare, and evaluate software solutions with expert guidance and tailored
                recommendations for your business needs.
              </p>
              <img
                className="tj-logo"
                src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
                alt="Techjockey"
              />
            </div>
          </div>

          <div className="footer-bottom">
            <span>© 2026 Techjockey. All rights reserved.</span>
            <span>ByteDance model information presented for product exploration and evaluation.</span>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;