import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#111827';
  const primary = '#111827';
  const bodyBg = '#ffffff';

  const [activeTab, setActiveTab] = useState(0);
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const tabsRef = useRef(null);

  const productSections = [
    {
      label: 'FEATURES',
      headline: 'Why Choose Zoho Workplace?',
      description:
        'Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.',
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
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      author: 'Saurav Singh',
      role: 'Head of Operations',
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      author: 'Shrimi Manchanda',
      role: 'Operations Manager',
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      author: 'Shweta Thakur',
      role: 'Senior System Administrator',
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      author: 'Narinder Sahni',
      role: 'IT Head',
    },
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const css = `
    :root{
      --accent:${accent};
      --primary:${primary};
      --bodyBg:${bodyBg};
      --border:#e5e7eb;
      --text:#111827;
      --muted:#4b5563;
      --soft:#f8fafc;
      --gold:#f59e0b;
      --green:#16a34a;
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{margin:0;background:var(--bodyBg);color:var(--text);font-family:Inter,sans-serif}
    a{text-decoration:none;color:inherit}
    img{max-width:100%;display:block}
    .lp{background:var(--bodyBg)}
    .container{width:min(1180px,calc(100% - 32px));margin:0 auto}
    .nav-wrap{position:sticky;top:0;z-index:50;background:rgba(17,24,39,.94);backdrop-filter:blur(20px);border-bottom:1px solid rgba(255,255,255,.08)}
    .nav{display:grid;grid-template-columns:1fr auto auto;gap:18px;align-items:center;padding:14px 0}
    .hero{background:#111827;color:#fff;position:relative;overflow:hidden}
    .hero:before,.hero:after{content:"";position:absolute;border-radius:50%;filter:blur(20px)}
    .hero:before{width:340px;height:340px;background:rgba(255,255,255,.06);top:-120px;right:-80px}
    .hero:after{width:260px;height:260px;background:rgba(255,255,255,.05);bottom:-80px;left:-60px}
    .hero-grid{display:grid;grid-template-columns:1.05fr .95fr;gap:44px;align-items:center;padding:72px 0}
    h1,h2,h3,h4{font-family:Inter,sans-serif;margin:0}
    h1{font-size:clamp(48px,6vw,68px);line-height:1.05;font-weight:800;letter-spacing:-.03em}
    h2{font-size:clamp(32px,4vw,42px);line-height:1.1;font-weight:800;letter-spacing:-.02em}
    .sub{font-size:18px;line-height:1.7;color:rgba(255,255,255,.82);max-width:620px;margin-top:18px}
    .support-line{font-size:14px;line-height:1.6;color:rgba(255,255,255,.7);margin-top:14px}
    .chip-row{display:flex;flex-wrap:wrap;gap:12px;margin-top:26px}
    .chip{display:flex;align-items:center;gap:8px;padding:9px 14px;border-radius:999px;border:1px solid rgba(255,255,255,.18);background:rgba(255,255,255,.06);font-size:13px;color:#e5e7eb}
    .cta-row{display:flex;flex-wrap:wrap;gap:14px;margin-top:28px}
    .animated-cta,.btn-secondary{display:inline-flex;align-items:center;justify-content:center;padding:13px 22px;border-radius:8px;font-weight:700;border:1px solid transparent}
    .animated-cta, .btn-magnetic {
      position: relative;
      overflow: hidden;
      background: var(--accent);
      color: #fff;
      transition: transform .22s ease, box-shadow .22s ease, background .22s ease;
    }
    .animated-cta:hover, .btn-magnetic:hover {
      transform: translateY(-2px);
      box-shadow: 0 14px 32px rgba(0,0,0,.18);
    }
    .animated-cta::before,
    .animated-cta::after {
      display: none !important;
      content: none !important;
    }
    .btn-secondary{background:transparent;color:#fff;border-color:rgba(255,255,255,.18)}
    .hero-visual{min-height:500px;border-radius:20px;padding:22px;background:linear-gradient(180deg,rgba(255,255,255,.1),rgba(255,255,255,.04));border:1px solid rgba(255,255,255,.1);position:relative;display:flex;align-items:center;justify-content:center}
    .ui-shell{width:100%;height:100%;min-height:456px;background:#fff;border-radius:18px;overflow:hidden;box-shadow:0 30px 80px rgba(0,0,0,.28);position:relative}
    .ui-top{height:54px;background:#f3f4f6;border-bottom:1px solid #e5e7eb;display:flex;align-items:center;padding:0 16px;gap:8px}
    .dot{width:10px;height:10px;border-radius:50%;background:#d1d5db}
    .ui-body{display:grid;grid-template-columns:180px 1fr;height:calc(100% - 54px)}
    .sidebar{background:#f8fafc;border-right:1px solid #e5e7eb;padding:18px 14px}
    .sb-item{height:14px;border-radius:8px;background:#e5e7eb;margin-bottom:14px}
    .sb-item:nth-child(2),.sb-item:nth-child(5){width:76%}
    .sb-item:nth-child(3){width:64%}
    .main-ui{padding:18px}
    .ui-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:16px}
    .panel{background:#fff;border:1px solid #e5e7eb;border-radius:14px;padding:16px}
    .panel-dark{background:#111827;color:#fff;border:none}
    .line{height:12px;border-radius:8px;background:#e5e7eb;margin-bottom:12px}
    .line.dark{background:rgba(255,255,255,.15)}
    .line.w70{width:70%}.line.w55{width:55%}.line.w85{width:85%}
    .card-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px;margin-top:16px}
    .mini-card{background:#f8fafc;border:1px solid #e5e7eb;border-radius:12px;padding:14px;height:98px}
    .float-chip{position:absolute;padding:10px 14px;border-radius:14px;background:#fff;border:1px solid #e5e7eb;box-shadow:0 20px 40px rgba(17,24,39,.12);font-size:13px;color:var(--text);font-weight:600}
    .float-chip.one{top:24px;right:-6px}
    .float-chip.two{bottom:44px;left:-10px}
    .float-chip.three{bottom:20px;right:26px}
    .marquee-wrapper{overflow:hidden;background:#fff;padding:18px 0;border-top:1px solid #e5e7eb;border-bottom:1px solid #e5e7eb}
    .marquee-track{display:flex;width:max-content;animation:marqueeScroll 20s linear infinite}
    @keyframes marqueeScroll{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}
    .marquee-item{white-space:nowrap;font-size:22px;font-weight:800;color:var(--text);margin-right:42px}
    .section{padding:72px 0}
    .bg-soft{background:#f8fafc}
    .tag{display:inline-block;font-size:12px;font-weight:800;letter-spacing:.12em;color:var(--text);margin-bottom:14px}
    .metrics-strip{display:grid;grid-template-columns:repeat(2,1fr);gap:20px}
    .metric-card{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:24px}
    .metric-num{font-size:36px;font-weight:800;color:var(--text)}
    .metric-label{margin-top:8px;color:var(--muted);line-height:1.6}
    .tabs-layout{display:grid;grid-template-columns:320px 1fr;gap:26px;align-items:start}
    .tabs-nav{display:flex;flex-direction:column;gap:10px}
    .tab-btn{width:100%;text-align:left;padding:18px;border:1px solid #e5e7eb;border-radius:14px;background:#fff;color:var(--text);font-weight:700;cursor:pointer}
    .tab-btn.active{background:#111827;color:#fff;border-color:#111827}
    .tab-btn span{display:block;font-size:13px;font-weight:600;opacity:.8;margin-top:6px;line-height:1.5}
    .preview{background:#fff;border:1px solid #e5e7eb;border-radius:18px;padding:28px}
    .preview-grid{display:grid;grid-template-columns:1.02fr .98fr;gap:24px;align-items:start}
    .preview-copy p{color:var(--muted);line-height:1.75;margin:0 0 18px}
    .feature-list{display:grid;gap:14px}
    .feature-item{display:flex;gap:12px;padding:14px;border:1px solid #e5e7eb;border-radius:14px;background:#fff}
    .iconbox{width:38px;height:38px;border-radius:10px;background:#f3f4f6;display:flex;align-items:center;justify-content:center;flex:0 0 38px}
    .feature-item h4{font-size:17px;margin-bottom:6px}
    .feature-item p{margin:0;color:var(--muted);line-height:1.6;font-size:14px}
    .auto-scroll-media{max-height:480px;height:480px;overflow:hidden;position:relative;border-radius:16px;background:#f8fafc;border:1px solid #e5e7eb;padding:14px}
    .auto-scroll-track{display:flex;flex-direction:column;gap:16px;animation:autoScrollY 18s linear infinite}
    .auto-scroll-media:hover .auto-scroll-track{animation-play-state:paused}
    @keyframes autoScrollY{0%{transform:translateY(0)}100%{transform:translateY(-50%)}}
    .mock-shot{background:#fff;border:1px solid #e5e7eb;border-radius:16px;padding:16px;min-height:138px}
    .mock-title{height:12px;width:42%;background:#d1d5db;border-radius:8px;margin-bottom:12px}
    .mock-bar{height:10px;background:#e5e7eb;border-radius:8px;margin-bottom:10px}
    .mock-bar.w60{width:60%}.mock-bar.w75{width:75%}.mock-bar.w90{width:90%}
    .pricing-wrap{display:flex;justify-content:center}
    .pricing-card{max-width:760px;width:100%;background:#111827;color:#fff;border-radius:20px;padding:30px;border:1px solid rgba(255,255,255,.1)}
    .price-badge{display:inline-block;background:#16a34a;color:#fff;font-size:12px;font-weight:800;padding:8px 12px;border-radius:999px;margin-bottom:16px}
    .pricing-card h3{font-size:30px;margin-bottom:8px}
    .price-row{display:flex;align-items:end;gap:12px;margin:16px 0 22px}
    .old-price{text-decoration:line-through;color:rgba(255,255,255,.45)}
    .new-price{font-size:42px;font-weight:800}
    .include-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:12px 18px;margin:22px 0}
    .inc-item{display:flex;gap:10px;align-items:flex-start;font-size:14px;line-height:1.6;color:rgba(255,255,255,.88)}
    .testimonials-wrap{background:#fff;border:1px solid #e5e7eb;border-radius:20px;padding:18px}
    .testimonial-card{display:grid;grid-template-columns:auto 1fr auto;gap:18px;align-items:center;padding:22px}
    .avatar{width:56px;height:56px;border-radius:50%;background:#111827;color:#fff;display:flex;align-items:center;justify-content:center;font-weight:800}
    .quote-mark{font-size:54px;line-height:1;color:var(--accent);opacity:.18}
    .stars{color:var(--gold);letter-spacing:2px;font-size:18px;margin-bottom:12px}
    .t-quote{font-size:20px;line-height:1.8;color:var(--text);margin:0 0 16px}
    .t-author{font-weight:800}
    .t-role{color:#6b7280;margin-top:4px}
    .testimonial-controls{display:flex;align-items:center;justify-content:space-between;padding:0 22px 12px}
    .nav-arrow{width:42px;height:42px;border-radius:50%;border:1px solid #e5e7eb;background:#fff;cursor:pointer;color:var(--text)}
    .dots{display:flex;gap:8px}
    .slider-dot{width:9px;height:9px;border-radius:999px;background:#cbd5e1;border:none;cursor:pointer;transition:.25s ease}
    .slider-dot.active{transform:scale(1.25);background:var(--accent)}
    .footer{background:#111827;color:#fff;padding:40px 0}
    .footer-grid{display:grid;grid-template-columns:1.2fr .8fr;gap:28px;align-items:start}
    .footer-links,.socials{display:flex;flex-wrap:wrap;gap:14px}
    .social{width:36px;height:36px;border-radius:50%;border:1px solid rgba(255,255,255,.16);display:flex;align-items:center;justify-content:center}
    .gradient-text{background:linear-gradient(135deg,var(--accent),var(--primary));-webkit-background-clip:text;-webkit-text-fill-color:transparent;background-clip:text}
    @media (max-width: 991px){
      .hero-grid,.tabs-layout,.preview-grid,.footer-grid{grid-template-columns:1fr}
      .ui-body{grid-template-columns:120px 1fr}
      .metrics-strip,.include-grid{grid-template-columns:1fr}
      .testimonial-card{grid-template-columns:1fr}
      .nav{grid-template-columns:1fr auto;gap:12px}
      .nav .nav-cta{grid-column:1/-1}
    }
    @media (max-width: 640px){
      .container{width:min(100% - 24px,1180px)}
      .hero-grid{padding:56px 0}
      .section{padding:56px 0}
      .tab-btn{padding:14px}
      .preview,.pricing-card{padding:20px}
      .testimonial-card{padding:14px}
      .cta-row{flex-direction:column;align-items:flex-start}
      .nav{padding:12px 0}
    }
  `;

  const marqueeItems = [
    'Zoho Workplace',
    'Email & Collaboration Suite',
    'Zoho Workplace',
    'Email & Collaboration Suite',
    'Zoho Workplace',
    'Email & Collaboration Suite',
  ];

  const heroChips = [
    'All-in-One Unified Workspace',
    'Seamless Collaboration in Real Time',
    'Work from Anywhere, Anytime',
    'AI-Powered Productivity (Zia)',
  ];

  const renderIcon = (i) => {
    const icons = [
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none"><rect x="3" y="4" width="18" height="16" rx="3" stroke={accent} strokeWidth="1.8"/><path d="M7 8h10M7 12h6" stroke={accent} strokeWidth="1.8" strokeLinecap="round"/></svg>,
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M8 12h8M12 8v8" stroke={accent} strokeWidth="1.8" strokeLinecap="round"/><rect x="4" y="4" width="16" height="16" rx="4" stroke={accent} strokeWidth="1.8"/></svg>,
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 3v18M3 12h18" stroke={accent} strokeWidth="1.8" strokeLinecap="round"/><circle cx="12" cy="12" r="9" stroke={accent} strokeWidth="1.8"/></svg>,
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M12 4l7 4v8l-7 4-7-4V8l7-4z" stroke={accent} strokeWidth="1.8"/><path d="M9.5 12l1.7 1.7 3.3-3.4" stroke={accent} strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>,
      <svg key={i} width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M7 7h10v10H7z" stroke={accent} strokeWidth="1.8"/><path d="M4 4h4M16 4h4M4 20h4M16 20h4" stroke={accent} strokeWidth="1.8" strokeLinecap="round"/></svg>,
    ];
    return icons[i % icons.length];
  };

  const currentTab = productSections[activeTab];
  const currentTestimonial = testimonials[activeTestimonial];

  return (
    <div className="lp">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700;800&family=Inter:wght@400;500;600&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className="nav-wrap">
        <div className="container nav">
          <div>
            <img
              src="https://www.techjockey.com/c/zoho_workplace/assets/images/logo/logo_1.png"
              alt="Zoho Workplace"
              style={{ height: '36px', objectFit: 'contain', maxWidth: '160px' }}
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
          <div className="nav-cta" style={{ display: 'flex', justifyContent: 'flex-end' }}>
            <a href="#pricing" className="animated-cta">
              Get Started
            </a>
          </div>
        </div>
      </div>

      <section className="hero">
        <div className="container hero-grid">
          <div>
            <h1>
              Elevate Your Team’s Productivity with <span className="gradient-text">Zoho Workplace</span>
            </h1>
            <p className="sub">
              A Complete Email & Collaboration Suite for Enterprises that Facilitates Unified Communication.
            </p>
            <p className="support-line">
              Easy Setup & Quick Onboarding; A Made in India solution; 24x7 Support
            </p>

            <div className="chip-row">
              {heroChips.map((chip, i) => (
                <div className="chip" key={i}>
                  {renderIcon(i)}
                  <span>{chip}</span>
                </div>
              ))}
            </div>

            <div className="cta-row">
              <a href="#pricing" className="animated-cta">
                Get Started
              </a>
              <a href="#testimonials" className="btn-secondary">
                Get Your Free Trial
              </a>
            </div>
          </div>

          <div className="hero-visual">
            <div className="ui-shell">
              <div className="ui-top">
                <span className="dot" />
                <span className="dot" />
                <span className="dot" />
              </div>
              <div className="ui-body">
                <div className="sidebar">
                  <div className="sb-item" />
                  <div className="sb-item" />
                  <div className="sb-item" />
                  <div className="sb-item" />
                  <div className="sb-item" />
                  <div className="sb-item" />
                </div>
                <div className="main-ui">
                  <div className="ui-grid">
                    <div className="panel">
                      <div className="line w70" />
                      <div className="line w85" />
                      <div className="line w55" />
                      <div className="card-grid">
                        <div className="mini-card">
                          <div className="line w70" />
                          <div className="line w55" />
                        </div>
                        <div className="mini-card">
                          <div className="line w85" />
                          <div className="line w60" />
                        </div>
                        <div className="mini-card">
                          <div className="line w55" />
                          <div className="line w75" />
                        </div>
                        <div className="mini-card">
                          <div className="line w70" />
                          <div className="line w90" />
                        </div>
                      </div>
                    </div>
                    <div className="panel panel-dark">
                      <div className="line dark w70" />
                      <div className="line dark w85" />
                      <div className="line dark w55" />
                      <div style={{ height: 140, borderRadius: 12, background: 'rgba(255,255,255,.08)', marginTop: 18 }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="float-chip one">100,000+ Businesses Globally</div>
            <div className="float-chip two">Unified Communication</div>
            <div className="float-chip three">Email & Collaboration Suite</div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...marqueeItems, ...marqueeItems].map((item, i) => (
            <div key={i} className="marquee-item">
              {item} <span className="gradient-text">★</span>
            </div>
          ))}
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="metrics-strip">
            <div className="metric-card">
              <div className="metric-num">100,000+</div>
              <div className="metric-label">Businesses Globally</div>
            </div>
            <div className="metric-card">
              <div className="metric-num">Zoho Workplace</div>
              <div className="metric-label">
                Email & Collaboration Suite for enterprises, businesses, and teams looking for a unified email and collaboration platform
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft" ref={tabsRef}>
        <div className="container">
          <div className="tag">PRODUCT SECTIONS</div>
          <h2>
            Explore <span className="gradient-text">Zoho Workplace</span>
          </h2>
          <div className="tabs-layout" style={{ marginTop: 28 }}>
            <div className="tabs-nav">
              {productSections.map((tab, i) => (
                <button
                  key={i}
                  className={`tab-btn ${activeTab === i ? 'active' : ''}`}
                  onClick={() => setActiveTab(i)}
                >
                  {tab.headline}
                  {tab.description ? <span>{tab.description}</span> : null}
                </button>
              ))}
            </div>

            <div className="preview">
              <div className="preview-grid">
                <div className="preview-copy">
                  <div className="tag">{currentTab.label}</div>
                  <h2 style={{ marginBottom: 14 }}>{currentTab.headline}</h2>
                  {currentTab.description ? <p>{currentTab.description}</p> : null}
                  <div className="feature-list">
                    {currentTab.features.map((feature, i) => (
                      <div className="feature-item" key={i}>
                        <div className="iconbox">{renderIcon(i)}</div>
                        <div>
                          <h4>{feature.title}</h4>
                          <p>{feature.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div style={{ marginTop: 22 }}>
                    <a href="#pricing" className="animated-cta">
                      Get Started
                    </a>
                  </div>
                </div>

                <div className="auto-scroll-media">
                  <div className="auto-scroll-track">
                    {[...currentTab.features, ...currentTab.features].map((feature, i) => (
                      <div className="mock-shot" key={i}>
                        <div className="mock-title" />
                        <div className="mock-bar w90" />
                        <div className="mock-bar w75" />
                        <div className="mock-bar w60" />
                        <div style={{ marginTop: 14, display: 'grid', gridTemplateColumns: 'repeat(2,1fr)', gap: 10 }}>
                          <div style={{ height: 44, borderRadius: 10, background: '#f3f4f6' }} />
                          <div style={{ height: 44, borderRadius: 10, background: '#f3f4f6' }} />
                        </div>
                        <div style={{ marginTop: 12, fontWeight: 700, color: primary }}>{feature.title}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[
            'Why Choose Zoho Workplace?',
            'Unlock Your Business Growth with Zoho Workplace',
            'Integrate with Popular Apps',
            'Performance Beyond Limits with Zoho Workplace',
            'Why Choose Zoho Workplace?',
            'Unlock Your Business Growth with Zoho Workplace',
            'Integrate with Popular Apps',
            'Performance Beyond Limits with Zoho Workplace',
          ].map((item, i) => (
            <div key={i} className="marquee-item">
              {item} <span className="gradient-text">★</span>
            </div>
          ))}
        </div>
      </div>

      <section className="section" id="pricing">
        <div className="container">
          <div className="tag">PRICING</div>
          <h2>
            <span className="gradient-text">Zoho Workplace</span>
          </h2>
          <div className="pricing-wrap" style={{ marginTop: 28 }}>
            <div className="pricing-card">
              <div className="price-badge">Email & Collaboration Suite</div>
              <h3>Zoho Workplace</h3>
              <div className="price-row">
                <span className="old-price">(was )</span>
                <span className="new-price"></span>
              </div>
              <div className="include-grid">
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
                ].map((item, i) => (
                  <div className="inc-item" key={i}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" style={{ marginTop: 2, flex: '0 0 18px' }}>
                      <path d="M20 6L9 17l-5-5" stroke="#22c55e" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
              <a href="#footer" className="animated-cta" style={{ width: '100%', justifyContent: 'center' }}>
                Get Started
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="section bg-soft" id="testimonials">
        <div className="container">
          <div className="tag">TESTIMONIALS</div>
          <h2>
            What Teams Say About <span className="gradient-text">Zoho Workplace</span>
          </h2>

          <div className="testimonials-wrap" style={{ marginTop: 28 }}>
            <div className="testimonial-card">
              <div className="avatar">
                {currentTestimonial.author
                  .split(' ')
                  .map((n) => n[0])
                  .slice(0, 2)
                  .join('')}
              </div>
              <div>
                <div className="stars">★★★★★</div>
                <p className="t-quote">{currentTestimonial.quote}</p>
                <div className="t-author">{currentTestimonial.author}</div>
                <div className="t-role">{currentTestimonial.role}</div>
              </div>
              <div className="quote-mark">❝</div>
            </div>

            <div className="testimonial-controls">
              <button
                className="nav-arrow"
                onClick={() =>
                  setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length)
                }
                aria-label="Previous testimonial"
              >
                ‹
              </button>
              <div className="dots">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    className={`slider-dot ${i === activeTestimonial ? 'active' : ''}`}
                    onClick={() => setActiveTestimonial(i)}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                className="nav-arrow"
                onClick={() => setActiveTestimonial((prev) => (prev + 1) % testimonials.length)}
                aria-label="Next testimonial"
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="footer" id="footer">
        <div className="container footer-grid">
          <div>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              alt="Techjockey"
              style={{ height: '28px', marginBottom: '16px' }}
            />
            <div style={{ color: 'rgba(255,255,255,.8)', marginBottom: '10px' }}>support@techjockey.com</div>
            <div style={{ color: 'rgba(255,255,255,.72)', marginBottom: '16px' }}>
              © 2024 Techjockey Infotech Pvt. Ltd.
            </div>
            <div className="footer-links">
              <a href="#privacy">Privacy Policy</a>
              <a href="#terms">Terms</a>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: 20, flexWrap: 'wrap' }}>
            <div className="socials">
              <a href="#facebook" className="social" aria-label="Facebook">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8h3V4h-3c-3.3 0-5 2-5 5v3H6v4h3v4h4v-4h3.2l.8-4H13V9c0-.7.3-1 1-1z"/></svg>
              </a>
              <a href="#instagram" className="social" aria-label="Instagram">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1"/></svg>
              </a>
              <a href="#twitter" className="social" aria-label="Twitter">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M22 5.8c-.7.3-1.5.5-2.3.6.8-.5 1.4-1.2 1.7-2.1-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.7-5.8-.1-1 1-1.4 2.5-1 3.9-3.3-.2-6.3-1.8-8.3-4.4-1.1 1.9-.5 4.3 1.3 5.5-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.8 3.4 4.2-.6.2-1.2.2-1.8.1.5 1.7 2.1 2.9 3.9 2.9A8.5 8.5 0 0 1 2 18.6 12 12 0 0 0 8.5 20c7.8 0 12.3-6.7 12-12.6.8-.6 1.4-1.3 1.9-2.1z"/></svg>
              </a>
              <a href="#linkedin" className="social" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A2.01 2.01 0 0 0 3.25 5c0 1.1.9 2 2 2s2-.9 2-2-.9-2-2-2zM20.44 12.4c0-2.74-1.46-4.02-3.4-4.02-1.57 0-2.28.87-2.67 1.47V8.5h-3.38V20h3.38v-6.42c0-.34.02-.68.12-.92.27-.67.88-1.37 1.9-1.37 1.34 0 1.88 1.03 1.88 2.54V20H21V12.4h-.56z"/></svg>
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;