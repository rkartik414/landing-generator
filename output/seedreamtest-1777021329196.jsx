import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#ff6b00';
  const bodyBg = '#ffffff';

  const testimonials = [
    { quote: "Seedream allows us to generate high-resolution creative visuals from simple prompts. It has dramatically reduced our design turnaround time.", name: "Vaishali Saxena", role: "Creative Director" },
    { quote: "Seedance’s ability to generate synchronized audio and video is incredibly powerful for storytelling and branded content.", name: "Vihaan Pandey", role: "Video Producer" },
    { quote: "The multimodal editing capabilities in Seedream make it easy to refine images with precision.", name: "Anurag Malhotra", role: "Art Director" },
    { quote: "Techjockey made it easy to evaluate Seedream (AI Image Generation) and Seedance (AI Video Generation). The free demo helped us clearly understand the capabilities before making a decision.", name: "Ashutosh Singh", role: "Marketing Manager" },
    { quote: "From understanding our needs to arranging a free demo of Seedream and Seedance, Techjockey simplified the entire buying journey. Quick, smooth, and hassle-free.", name: "Shrimmi Saxena", role: "Creative Lead" },
  ];

  const [activeSlide, setActiveSlide] = useState(0);
  const [scrolled, setScrolled] = useState(false);
  const [activeTab, setActiveTab] = useState(0);
  const [visible, setVisible] = useState(false);
  const heroVideo = "/output/generated-assets/ds_1777021158067_a1a1e179/12-498114b8de.mp4";
  const heroImg = "/output/generated-assets/ds_1777021158067_a1a1e179/15-0e9cc4dd7e.png";
  const logoUrl = "https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg";
  const trustLogos = [
    "/output/generated-assets/ds_1777021158067_a1a1e179/04-0583796109.svg",
    "/output/generated-assets/ds_1777021158067_a1a1e179/02-b49ede77a2.png",
    "/output/generated-assets/ds_1777021158067_a1a1e179/03-7e88a6f9c4.svg",
    "/output/generated-assets/ds_1777021158067_a1a1e179/05-9156b45743.svg",
  ];
  const product1 = {
    headline: "AI Image Generation with Seedream 4.5",
    description: "Seedream 4.5 is a high-performance multimodal image generation system designed to produce high-resolution, high-fidelity images from text prompts and visual inputs. The model unifies text-to-image synthesis, image editing, and multi-image composition within a single framework.",
    features: [
      ["Advanced Text–Image Alignment", "Accurately translates prompts into visuals with improved semantic understanding."],
      ["High-Resolution Output", "Generate native images up to 1K–4K resolution with strong visual fidelity."],
      ["Superior Typographic Rendering", "Optimized for posters, ads, and text-heavy visual designs."],
      ["Multi-Image Composition with Identity Preservation", "Combines multiple inputs while accurately maintaining subject consistency."],
      ["Strong Structural Fidelity", "Maintains composition, layout, and scene structure with high precision."],
    ],
  };
  const product2 = {
    headline: "AI Video Generation with Seedance 1.5 Pro by Bytedance",
    description: "Seedance 1.5 Pro is a next-generation generative model designed for native audio-visual generation, enabling synchronized creation of video and sound together. Built on a dual-branch diffusion transformer architecture, the model integrates cross-modal learning to produce coherent visual and audio outputs.",
    features: [
      ["Headline: Key Capabilities of Seedance 1.5 Pro", "Description: Seedance enables professional-grade AI video production with narrative coherence and realistic motion."],
      ["Text-to-Video Generation", "Create videos directly from text prompts."],
      ["Audio-Visual Synchronization", "Generate video and audio simultaneously with strong multimodal alignment."],
      ["Multilingual Lip-Sync", "Supports multilingual and dialect-level lip synchronization."],
      ["Cinematic Camera Control", "Generate videos with dynamic camera movement and cinematic storytelling."],
      ["10× Faster Inference", "Optimized inference pipeline significantly improves generation speed."],
    ],
  };

  const css = `
  :root{--a:${accent};--p:${primary};--b:${bodyBg};--d:#1a1a1a;--g:#f5f5f5;--bd:#e7e7e7}
  *{box-sizing:border-box} body{margin:0;background:var(--b);font-family:Inter,sans-serif;color:#1a1a1a}
  .container{width:min(1180px,92vw);margin:0 auto}
  .nav,.section,.footer{position:relative}
  .nav{position:sticky;top:0;z-index:50;background:rgba(26,26,26,.88);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
  .navin{display:flex;align-items:center;gap:16px;justify-content:space-between;padding:14px 0;color:#fff}
  .brand{font:800 20px/1.1 "Plus Jakarta Sans",sans-serif;color:#fff;text-decoration:none}
  .nav-right{display:flex;align-items:center;gap:14px}
  .nav-right img{height:28px}
  .hero{background:linear-gradient(135deg,var(--a),#d94f00);color:#fff;overflow:hidden}
  .hero-inner{display:grid;grid-template-columns:1.05fr .95fr;gap:40px;align-items:center;padding:74px 0 50px;position:relative}
  h1,h2,h3,.brand{font-family:"Plus Jakarta Sans",sans-serif}
  h1{font-size:clamp(48px,6vw,74px);line-height:1.02;margin:0 0 18px}
  h2{font-size:clamp(32px,3vw,44px);line-height:1.08;margin:0 0 14px}
  p{line-height:1.7;color:inherit}
  .gradient-text{background:linear-gradient(135deg,#fff 0%,#fff 100%);-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
  .hero p{color:rgba(255,255,255,.92);font-size:18px}
  .chips{display:flex;flex-wrap:wrap;gap:12px;margin-top:22px}
  .chip{display:flex;align-items:center;gap:8px;padding:8px 16px;border-radius:999px;border:1px solid rgba(255,255,255,.25);background:rgba(255,255,255,.08);font-size:13px}
  .chip svg{width:14px;height:14px;fill:#fff}
  .hero-ctas,.btnrow{display:flex;gap:12px;flex-wrap:wrap}
  .animated-cta,.ghost{position:relative;border:0;border-radius:10px;padding:12px 26px;font-weight:700;cursor:pointer;text-decoration:none;transition:.25s transform,.25s box-shadow;display:inline-flex;align-items:center;justify-content:center}
  .animated-cta{color:#fff;z-index:1}
  .animated-cta::before{content:'';position:absolute;inset:-2px;background:conic-gradient(from 0deg,var(--a),var(--a),var(--a));border-radius:inherit;animation:borderRotate 3s linear infinite;z-index:-2}
  .animated-cta::after{content:'';position:absolute;inset:1px;background:var(--a);border-radius:8px;z-index:-1}
  .ghost{background:transparent;color:#fff;border:1px solid rgba(255,255,255,.3)}
  .animated-cta:hover,.ghost:hover{transform:translateY(-2px);box-shadow:0 12px 24px rgba(0,0,0,.16)}
  @keyframes borderRotate{to{transform:rotate(360deg)}}
  .hero-visual{position:relative;display:flex;align-items:center;justify-content:center}
  .hero-visual img,.hero-visual video{width:100%;max-height:480px;object-fit:contain;border-radius:16px;display:block;box-shadow:0 25px 70px rgba(0,0,0,.24)}
  .orb{position:absolute;border-radius:50%;filter:blur(20px);pointer-events:none}
  .orb1{top:-60px;right:-20px;width:240px;height:240px;background:radial-gradient(circle,rgba(255,255,255,.3),transparent 70%)}
  .orb2{bottom:-60px;left:-20px;width:220px;height:220px;background:radial-gradient(circle,rgba(255,255,255,.16),transparent 70%)}
  .marquee-wrapper{overflow:hidden;background:#1a1a1a;padding:18px 0;border-top:1px solid rgba(255,255,255,.08);border-bottom:1px solid rgba(255,255,255,.08)}
  .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
  @keyframes marqueeScroll{from{transform:translateX(0)}to{transform:translateX(-50%)}}
  .marquee-track span{font-size:26px;font-weight:800;margin-right:42px;white-space:nowrap;color:rgba(255,255,255,.85)}
  .section{padding:78px 0}
  .bg-g{background:var(--g)} .bg-w{background:#fff} .bg-d{background:#1a1a1a;color:#fff}
  .reveal{opacity:0;transform:translateY(40px);transition:opacity .7s ease,transform .7s ease}
  .reveal.visible{opacity:1;transform:translateY(0)}
  .meta{display:inline-block;padding:7px 12px;border-radius:999px;background:rgba(255,107,0,.12);color:var(--a);font-weight:700;font-size:12px;margin-bottom:14px}
  .split{display:grid;grid-template-columns:1fr 1fr;gap:36px;align-items:center}
  .panel{background:rgba(255,255,255,.04);border:1px solid rgba(255,255,255,.08);border-radius:18px;padding:16px;box-shadow:0 16px 40px rgba(0,0,0,.08)}
  .browser{border-radius:16px;overflow:hidden;border:1px solid rgba(255,255,255,.12);background:#111}
  .browser .bar{display:flex;gap:6px;padding:10px 12px;background:#0c0c0c}
  .browser .bar i{width:10px;height:10px;border-radius:50%;background:#ff6b00;opacity:.65}
  .browser img,.browser video{width:100%;display:block}
  .feature-list{display:grid;gap:12px;margin:18px 0}
  .feature-item{padding:14px 16px;border-radius:14px;background:#fff;border:1px solid var(--bd);box-shadow:0 12px 26px rgba(0,0,0,.04)}
  .feature-item b{display:block;margin-bottom:5px}
  .trust-grid{display:grid;grid-template-columns:repeat(4,1fr);gap:14px}
  .trust-box{border:1px solid rgba(255,255,255,.08);border-radius:12px;padding:16px;min-height:72px;display:flex;align-items:center;justify-content:center;background:rgba(255,255,255,.02)}
  .trust-box img{max-height:36px;object-fit:contain;filter:grayscale(1);transition:.3s}
  .trust-box:hover img{filter:grayscale(0)}
  .pricing-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:18px;margin-top:24px}
  .price-card{border-radius:18px;padding:24px;background:#111;border:1px solid rgba(255,255,255,.08);box-shadow:0 18px 50px rgba(0,0,0,.16)}
  .price-card.featured{border:1px solid rgba(255,107,0,.7);box-shadow:0 0 0 1px rgba(255,107,0,.2),0 20px 60px rgba(0,0,0,.22)}
  .price{font-size:28px;font-weight:800;color:#fff}
  .strike{text-decoration:line-through;color:rgba(255,255,255,.42);margin-left:10px;font-size:14px}
  .badge{display:inline-block;margin-top:10px;padding:6px 10px;border-radius:999px;background:#1f3;font-weight:700;color:#082}
  .check{display:flex;gap:10px;align-items:flex-start;margin:12px 0;color:rgba(255,255,255,.88)}
  .check:before{content:'✓';color:var(--a);font-weight:900}
  .testimonial{background:#fff;border:1px solid var(--bd);border-radius:20px;padding:24px}
  .quote{font-size:18px;line-height:1.8;margin:0}
  .quoteMark{color:var(--a);font-size:42px;line-height:1}
  .stars{color:#f6b500;font-size:18px;letter-spacing:1px}
  .tcontrols{display:flex;justify-content:center;gap:10px;margin-top:16px}
  .dot,.arrow{border:0;cursor:pointer}
  .dot{width:9px;height:9px;border-radius:999px;background:#d5d5d5}
  .dot.active{width:24px;background:var(--a)}
  .arrow{width:42px;height:42px;border-radius:50%;background:#111;color:#fff}
  .formwrap{display:grid;grid-template-columns:1fr 1fr;gap:24px;align-items:center}
  form{background:#fff;border:1px solid var(--bd);border-radius:18px;padding:22px;box-shadow:0 14px 40px rgba(0,0,0,.06)}
  .field{display:grid;gap:8px;margin-bottom:14px}
  .field input{padding:14px 14px;border:1px solid var(--bd);border-radius:10px;font:inherit}
  .field input:focus{outline:0;border-color:var(--a);box-shadow:0 0 0 3px rgba(255,107,0,.14)}
  .full{width:100%}
  .footer{background:#111;color:#fff;padding:30px 0}
  .footerin{display:flex;flex-direction:column;gap:14px}
  .social{display:flex;gap:12px;flex-wrap:wrap}
  .social a{width:36px;height:36px;border-radius:50%;display:inline-flex;align-items:center;justify-content:center;background:#1d1d1d;border:1px solid rgba(255,255,255,.08);color:#fff;text-decoration:none}
  @media (max-width:900px){.hero-inner,.split,.formwrap,.pricing-grid,.trust-grid{grid-template-columns:1fr}.navin{gap:10px}.brand{font-size:18px}}
  `;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 18);
    onScroll();
    window.addEventListener('scroll', onScroll);
    const observer = new IntersectionObserver(entries => entries.forEach(e => e.isIntersecting && e.target.classList.add('visible')), { threshold: 0.15 });
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
    setVisible(true);
    const t = setInterval(() => setActiveSlide(p => (p + 1) % testimonials.length), 4000);
    return () => { window.removeEventListener('scroll', onScroll); observer.disconnect(); clearInterval(t); };
  }, []);

  const chips = ["AI Image Generation", "Text-to-Video", "Multimodal Editing", "Cinematic Control", "Enterprise Ready"];
  const renderFeatureIcon = (i) => (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2l3.2 6.5L22 9.8l-5 4.9 1.2 7.3L12 18.7 5.8 22l1.2-7.3-5-4.9 6.8-1.3z" />
    </svg>
  );

  return (
    <>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@400;500;600;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      <style dangerouslySetInnerHTML={{ __html: css }} />
      <header className="nav">
        <div className="container navin">
          <a href="#" className="brand">Seedream 4.5 and Seedance 1.5 Pro</a>
          <div className="nav-right">
            <img src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg" height="28px" alt="Techjockey" />
            <button className="animated-cta">Generate with AI</button>
          </div>
        </div>
      </header>

      <section className="hero section">
        <div className="container hero-inner">
          <div>
            <h1 className="reveal visible">Create High-Quality <span className="gradient-text">AI Images & Videos</span> with ByteDance Generative Models</h1>
            <p className="
export default LandingPage;