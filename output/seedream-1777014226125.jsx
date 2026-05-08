import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#1a1a1a';
  const primary = '#ff6b00';
  const bodyBg = '#f5f5f5';

  const [activeSlide, setActiveSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const testimonials = [
    {
      quote: 'Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.',
      name: 'Vaishali Saxena',
      role: 'Creative Director',
      img: '/output/generated-assets/ds_1777014046300_683e8c81/08-54eb4b4f8f.png',
    },
    {
      quote: 'Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.',
      name: 'Vihaan Pandey',
      role: 'Video Producer',
      img: '/output/generated-assets/ds_1777014046300_683e8c81/10-e8e4bbc7f5.jpg',
    },
    {
      quote: 'The multimodal editing capabilities in Seedream make it easy to refine images with precision.',
      name: 'Anurag Malhotra',
      role: 'Art Director',
      img: '/output/generated-assets/ds_1777014046300_683e8c81/08-54eb4b4f8f.png',
    },
    {
      quote: 'Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.',
      name: 'Ashutosh Singh',
      role: 'Marketing Manager',
      img: '/output/generated-assets/ds_1777014046300_683e8c81/10-e8e4bbc7f5.jpg',
    },
    {
      quote: 'From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.',
      name: 'Shrimmi Saxena',
      role: 'Creative Lead',
      img: '/output/generated-assets/ds_1777014046300_683e8c81/08-54eb4b4f8f.png',
    },
  ];

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener('scroll', onScroll);
    const timer = setInterval(() => setActiveSlide((p) => (p + 1) % testimonials.length), 4000);
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.15 }
    );
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    return () => { window.removeEventListener('scroll', onScroll); clearInterval(timer); observer.disconnect(); };
  }, [testimonials.length]);

  const css = `
    *{box-sizing:border-box} body{margin:0;font-family:Inter,sans-serif;background:${bodyBg};color:${accent}} a{text-decoration:none;color:inherit}
    .wrap{width:min(1180px,calc(100% - 40px));margin:0 auto}.section{position:relative;overflow:hidden}
    .nav{position:sticky;top:0;z-index:50;background:rgba(26,26,26,.92);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .navin{display:flex;align-items:center;justify-content:space-between;gap:16px;padding:14px 0}.brand{display:flex;align-items:center;gap:12px;color:#fff;font-weight:800}
    .animated-cta{position:relative;padding:12px 22px;border-radius:8px;overflow:hidden;background:transparent;color:#fff;font-weight:700;cursor:pointer;z-index:1;border:0}
    .animated-cta::before{content:'';position:absolute;inset:-2px;background:conic-gradient(from 0deg, ${accent}, ${primary}, ${accent});border-radius:inherit;animation:borderRotate 3s linear infinite;z-index:-2}
    .animated-cta::after{content:'';position:absolute;inset:1px;background:${primary};border-radius:6px;z-index:-1}
    .animated-cta:hover,.btn:hover,.ghost:hover,.card:hover,.trustlogo:hover,.mini:hover{transform:translateY(-2px);box-shadow:0 18px 40px rgba(0,0,0,.16)}
    .btn,.ghost{display:inline-flex;align-items:center;justify-content:center;padding:14px 24px;border-radius:10px;font-weight:700;border:1px solid rgba(255,255,255,.14);transition:.25s}
    .btn{background:${primary};color:#fff}.ghost{background:transparent;color:#fff}
    .hero{background:linear-gradient(135deg,#ff6b00 0%,#1a1a1a 100%);color:#fff}.hero-grid{display:grid;grid-template-columns:1.15fr .85fr;gap:36px;align-items:center;padding:54px 0 34px}
    h1,h2,h3{font-family:Montserrat,sans-serif;line-height:1.05;margin:0}.h1{font-size:clamp(48px,5vw,72px)}.h2{font-size:clamp(32px,3vw,44px)}
    .gradient-text{background:linear-gradient(135deg, #1a1a1a 0%, #ff6b00 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    .chips{display:flex;flex-wrap:wrap;gap:12px;margin:24px 0}.chip{display:flex;align-items:center;gap:8px;padding:8px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.2);background:rgba(26,26,26,.18);font-size:13px}
    .hero-card,.panel,.pricing-card,.tcard{background:#fff;border-radius:18px;box-shadow:0 20px 50px rgba(0,0,0,.12)} .hero-card{padding:14px}
    .heroimg{width:100%;max-height:480px;object-fit:contain;border-radius:12px;display:block}
    .proof{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;padding:18px 0 0}.proofbox,.trustbox{border:1px solid rgba(255,255,255,.08);border-radius:12px;min-height:72px;display:flex;align-items:center;justify-content:center;padding:16px}
    .trust{background:${accent};color:#fff}.trustgrid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px;padding:26px 0 34px}.trustlogo{max-height:36px;object-fit:contain;filter:grayscale(1);transition:.3s}
    .marquee-wrapper{overflow:hidden;background:#fff7f2;padding:18px 0;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}.marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    .marq{white-space:nowrap;margin-right:48px;font-weight:800;font-size:26px}
    .split{display:grid;grid-template-columns:1fr 1fr;gap:48px;align-items:center;padding:70px 0}.split.alt .media{order:2}.split.alt .copy{order:1}
    .section-tag{display:inline-block;padding:8px 12px;border-radius:999px;background:${accent}14;color:${accent};font-size:12px;font-weight:700;margin-bottom:14px}
    .copy p{color:#6b7280;line-height:1.7}.desc{border-left:2px solid rgba(26,26,26,.12);padding-left:18px;margin:18px 0 20px}
    .featurelist{display:grid;gap:12px;margin:18px 0}.mini{display:flex;gap:12px;padding:14px;border:1px solid #e5e7eb;border-radius:14px;background:#fff;transition:.25s}
    .ico{width:34px;height:34px;border-radius:10px;background:${primary}14;display:grid;place-items:center;flex:0 0 auto}.feature-title{font-weight:700;margin:0 0 4px}.feature-desc{margin:0;color:#6b7280;font-size:14px;line-height:1.55}
    .frame{border-radius:16px;overflow:hidden;border:1px solid #e5e7eb;box-shadow:0 20px 40px rgba(0,0,0,.12)} .frame img,.frame video{width:100%;display:block}
    .pricing{background:#fff}.pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:20px;padding:26px 0 70px}.pricing-card{padding:24px;border:1px solid #e5e7eb}
    .badge{display:inline-block;background:#16a34a;color:#fff;padding:6px 10px;border-radius:999px;font-size:12px;font-weight:700}.price{font-size:30px;font-weight:800;margin:10px 0}.old{text-decoration:line-through;color:#9ca3af;font-size:14px}
    .check{display:flex;gap:10px;align-items:flex-start;margin:10px 0;color:#374151}.check:before{content:'✓';color:#16a34a;font-weight:800}
    .testimonials{background:${bodyBg}} .carousel{position:relative;overflow:hidden}.track{display:flex;transition:transform .6s cubic-bezier(.4,0,.2,1)} .slide{min-width:100%;padding:0}
    .tcard{padding:30px;border:1px solid #e5e7eb}.stars{color:#f59e0b;font-size:18px;letter-spacing:2px}.quote{font-size:18px;line-height:1.7;margin:18px 0;color:#111}.author{font-weight:800}.role{color:#6b7280}
    .tcontrols{display:flex;justify-content:center;gap:8px;margin-top:16px}.dot{width:10px;height:10px;border-radius:50%;border:none;background:rgba(26,26,26,.25)} .dot.active{width:24px;background:${accent}}
    .footer{background:${accent};color:#fff;padding:34px 0}.foot{display:flex;flex-wrap:wrap;align-items:center;justify-content:space-between;gap:16px}
    .socials{display:flex;gap:10px}.social{width:36px;height:36px;border-radius:50%;display:grid;place-items:center;background:rgba(255,255,255,.08)}
    .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease, transform .7s ease}.reveal.visible{opacity:1;transform:translateY(0)}
    .reveal-delay-1{transition-delay:.1s}.reveal-delay-2{transition-delay:.2s}.reveal-delay-3{transition-delay:.3s}
    @keyframes borderRotate{from{transform:rotate(0)}to{transform:rotate(360deg)}}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    @media (max-width: 900px){.hero-grid,.split,.pricing-grid,.trustgrid,.proof{grid-template-columns:1fr}.split.alt .media,.split.alt .copy{order:initial}.h1{font-size:44px}}
  `;

  const features1 = [
    { t: 'Advanced Capabilities of Seedream 4.5 by ByteDance', d: 'From accurate text rendering to consistent image editing and multi-image composition, Seedream 4.5 powers high-quality, professional visual creation with superior precision and control.' },
    { t: 'Advanced Text–Image Alignment', d: 'Accurately translates prompts into visuals with improved semantic understanding.' },
    { t: 'High-Resolution Output', d: 'Generate native images up to 1K–4K resolution with strong visual fidelity.' },
    { t: 'Superior Typographic Rendering', d: 'Optimized for posters, ads, and text-heavy visual designs.' },
    { t: 'Multi-Image Composition with Identity Preservation', d: 'Combines multiple inputs while accurately maintaining subject consistency.' },
    { t: 'Strong Structural Fidelity', d: 'Maintains composition, layout, and scene structure with high precision.' },
  ];
  const features2 = [
    { t: 'Key Capabilities of Seedance 1.5 Pro', d: 'Seedance enables professional-grade AI video production with narrative coherence and realistic motion.' },
    { t: 'Text-to-Video Generation', d: 'Create videos directly from text prompts.' },
    { t: 'Audio-Visual Synchronization', d: 'Generate video and audio simultaneously with strong multimodal alignment.' },
    { t: 'Multilingual Lip-Sync', d: 'Supports multilingual and dialect-level lip synchronization.' },
    { t: 'Cinematic Camera Control', d: 'Generate videos with dynamic camera movement and cinematic storytelling.' },
    { t: '10× Faster Inference', d: 'Optimized inference pipeline significantly improves generation speed.' },
  ];

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Montserrat:wght@700;800&family=Inter:wght@400;500;600&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="nav">
        <div className="wrap navin">
          <div className="brand">Seedream 4.5 and Seedance 1.5 Pro</div>
          <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" height="28px" alt="Techjockey" />
          <button className="animated-cta">Generate with AI</button>
        </div>
      </header>

      <section className="section hero">
        <div className="wrap hero-grid">
          <div>
            <h1 className="h1 reveal">{'Create High-Quality AI Images & Videos with '}<span className="gradient-text">ByteDance Generative Models</span></h1>
            <p className="reveal reveal-delay-1" style={{fontSize:18,lineHeight:1.7,maxWidth:700}}>{'Unlock the power of next-generation generative AI with Seedream 4.5 (Image Generation) and Seedance 1.5 Pro (Video Generation) - advanced foundation models developed by ByteDance for high-quality visual content creation.'}</p>
            <div className="chips reveal reveal-delay-2">
              {['AI Image Generation','Text-to-Video','Enterprise Ready','Multimodal AI','Creative Studio'].map((c,i)=><div key={i} className="chip"><span>✦</span><span>{c}</span></div>)}
            </div>
            <div style={{display:'flex',gap:12,flexWrap:'wrap'}} className="reveal reveal-delay-3">
              <button className="animated-cta">{'Generate with AI'}</button>
              <a className="ghost" href="#pricing">Request Demo</a>
            </div>
            <div className="proof">
              {['From text prompts','images, or scripts','professional visuals','and videos'].map((t,i)=><div key={i} className="proofbox" style={{background:'rgba(0,0,0,.15)',color:'#fff'}}>{t}</div>)}
            </div>
          </div>
          <div className="hero-card">
            <img className="heroimg" src="/output/generated-assets/ds_1777014046300_683e8c81/07-8cf7df2e52.png" alt="Seedream visual" />
          </div>
        </div>
      </section>

      <div className="marquee-wrapper"><div className="marquee-track">{Array.from({length:8}).flatMap((_,i)=>[<span key={'a'+i} className="marq">Seedream 4.5 and Seedance 1.5 Pro <span className="gradient-text">★</span></span>,<span key={'b'+i} className="marq">AI Image Generation and AI Video Generation <span className="gradient-text">★</span></span>])}</div></div>

      <section className="section" style={{background:bodyBg}}>
        <div className="wrap split">
          <div className="media frame">
            <img src="/output/generated-assets/ds_1777014046300_683e8c81/14-a025b6ba4f.jpeg" alt="Seedream feature" />
          </div>
          <div className="copy">
            <span className="section-tag">Feature 1</span>
            <h2 className="h2 reveal">AI Image Generation with <span className="gradient-text">Seedream 4.5</span></h2>
            <div className="desc"><p>Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs.</p><p>The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.</p></div>
            <div className="featurelist">{features1.map((f,i)=><div key={i} className="mini"><div className="ico"><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M4 12h16M12 4l8 8-8 8" stroke={primary} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg></div><div><div className="feature-title">{f.t}</div><div className
export default LandingPage;