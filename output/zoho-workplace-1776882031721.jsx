import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#ff6b00';
  const primary = '#ff6b00';
  const bodyBg = '#f5f5f5';
  const textPrimary = '#1a1a1a';
  const textSecondary = '#5b6472';
  const border = '#e5e7eb';

  const testimonials = [
    {
      quote:
        'Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.',
      author: 'Amit Sharma',
      designation: 'CIO, Mid-Market Enterprise',
      image: '/output/generated-assets/ds_1776881684715_a286a35b/13-a1af876bc5.png',
    },
    {
      quote:
        'The suite helped our distributed teams work faster with secure email, document collaboration, and meetings in one ecosystem.',
      author: 'Neha Verma',
      designation: 'CTO, Services Organization',
      image: '/output/generated-assets/ds_1776881684715_a286a35b/15-01fc6c95c0.jpg',
    },
    {
      quote:
        'We were able to simplify employee communication and reduce tool sprawl without compromising on governance and usability.',
      author: 'Rahul Mehta',
      designation: 'CXO, Enterprise Operations',
      image: '/output/generated-assets/ds_1776881684715_a286a35b/22-e3c4bcd1a9.png',
    },
    {
      quote:
        'For leadership teams, visibility and collaboration improved significantly after standardizing on Zoho Workplace across departments.',
      author: 'Priya Nair',
      designation: 'Head of IT, Corporate Group',
      image: '/output/generated-assets/ds_1776881684715_a286a35b/23-00ee58a5d0.jpg',
    },
  ];

  const logos = [
    '/output/generated-assets/ds_1776881684715_a286a35b/04-84d4bfdd99.svg',
    '/output/generated-assets/ds_1776881684715_a286a35b/03-8da7f26504.svg',
    '/output/generated-assets/ds_1776881684715_a286a35b/05-ae76f0c421.svg',
    '/output/generated-assets/ds_1776881684715_a286a35b/02-975eb13e3f.svg',
    '/output/generated-assets/ds_1776881684715_a286a35b/07-401f045b7d.svg',
    '/output/generated-assets/ds_1776881684715_a286a35b/06-d38fc0a4cb.svg',
    '/output/generated-assets/ds_1776881684715_a286a35b/09-3c4d2f8415.svg',
    '/output/generated-assets/ds_1776881684715_a286a35b/08-428c7ca4a9.svg',
  ];

  const spotlightFeatures = [
    {
      title: 'All-in-One Unified Workspace',
      description:
        'Access email, chat, documents, meetings, and storage in a single integrated platform. Reduce app switching and improve executive productivity.',
      icon: 'workspace',
    },
    {
      title: 'Seamless Collaboration in Real Time',
      description:
        'Enable live editing, comments, and integrated communication for documents, spreadsheets, and presentations.',
      icon: 'collaboration',
    },
    {
      title: 'Work from Anywhere, Anytime',
      description:
        'Support secure productivity across mobile, desktop, and remote work environments with consistent user experiences.',
      icon: 'remote',
    },
    {
      title: 'AI-Powered Productivity with Zia',
      description:
        'Use built-in AI for writing assistance, readability, grammar, and content refinement across daily workflows.',
      icon: 'ai',
    },
  ];

  const gridFeatures = [
    {
      title: 'Ideal For Your Business Size',
      description:
        'Designed for organizations of every scale to increase efficiency and teamwork with enterprise readiness.',
      icon: 'growth',
    },
    {
      title: 'Communicate Effectively',
      description:
        'Go beyond email and chat with a social intranet using channels, feeds, and groups to keep teams aligned.',
      icon: 'communication',
    },
    {
      title: 'Integrated Business Apps',
      description:
        'Connect Zoho and third-party apps to unify workflows, eliminate silos, and streamline business processes.',
      icon: 'integration',
    },
    {
      title: 'Customizable Workspace',
      description:
        'Tailor layouts, permissions, workflows, and controls while maintaining a professional ad-free email environment.',
      icon: 'customize',
    },
    {
      title: 'Zoho and Popular App Integrations',
      description:
        'Connect Zoho Meeting, Connect, Mail, Cliq, Writer, Analytics, Books, Flow, Zapier, and more.',
      icon: 'apps',
    },
  ];

  const insightStats = [
    {
      value: '82.9%',
      label: 'Secure',
      description:
        'of users reported a secure email experience, enabling strong data protection and dependable communication.',
    },
    {
      value: '42.9%',
      label: 'Anywhere Access',
      description:
        'found it easier to work remotely with Zoho Workplace apps across devices and locations.',
    },
    {
      value: '28.6%',
      label: 'Intuitive',
      description:
        'found Zoho Workplace easy to use, helping teams adapt quickly and work efficiently.',
    },
    {
      value: '14.3%',
      label: 'Collaborative',
      description:
        'reported improved collaboration, engagement, and productivity across teams.',
    },
  ];

  const pricingPlan = {
    name: 'Zoho Workplace',
    originalPrice: 'Contact for price',
    price: 'Custom Enterprise Plan',
    discount: 'Business Suite',
    includes: [
      'Enterprise-Grade Custom Email',
      'Migration Assistance',
      'Collaborative Office Suite',
      '30-GB Mail Storage Per User',
      'File Storage Starts at 100 GB Per Team',
      'File Sharing & Permissions',
      'Team Chat',
      'Document Management',
      'Supported Device: Android, iOS, Windows, Mac',
    ],
    cta: 'Get Started',
  };

  const [activeSlide, setActiveSlide] = useState(0);
  const [activeProductTab, setActiveProductTab] = useState(0);
  const [activeGridTab, setActiveGridTab] = useState(0);
  const [navScrolled, setNavScrolled] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) e.target.classList.add('visible');
        }),
      { threshold: 0.15 }
    );
    const elements = document.querySelectorAll('.reveal');
    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide((prev) => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  useEffect(() => {
    const onScroll = () => setNavScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const nextSlide = () => setActiveSlide((prev) => (prev + 1) % testimonials.length);
  const prevSlide = () => setActiveSlide((prev) => (prev - 1 + testimonials.length) % testimonials.length);

  const Icon = ({ type }) => {
    const common = {
      width: 22,
      height: 22,
      viewBox: '0 0 24 24',
      fill: 'none',
      stroke: accent,
      strokeWidth: 1.8,
      strokeLinecap: 'round',
      strokeLinejoin: 'round',
    };

    const icons = {
      workspace: (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="14" rx="2" />
          <path d="M3 9h18" />
          <path d="M8 20h8" />
        </svg>
      ),
      collaboration: (
        <svg {...common}>
          <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M16 13a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
          <path d="M2.5 19a5.5 5.5 0 0 1 11 0" />
          <path d="M10.5 19a5.5 5.5 0 0 1 11 0" />
        </svg>
      ),
      remote: (
        <svg {...common}>
          <path d="M4 17l4-4 3 3 7-7" />
          <path d="M14 9h4v4" />
          <rect x="3" y="3" width="7" height="7" rx="2" />
        </svg>
      ),
      ai: (
        <svg {...common}>
          <path d="M12 2v4" />
          <path d="M12 18v4" />
          <path d="M4.93 4.93l2.83 2.83" />
          <path d="M16.24 16.24l2.83 2.83" />
          <path d="M2 12h4" />
          <path d="M18 12h4" />
          <path d="M4.93 19.07l2.83-2.83" />
          <path d="M16.24 7.76l2.83-2.83" />
          <circle cx="12" cy="12" r="4" />
        </svg>
      ),
      growth: (
        <svg {...common}>
          <path d="M4 19V5" />
          <path d="M10 19V9" />
          <path d="M16 19v-6" />
          <path d="M22 19v-9" />
        </svg>
      ),
      communication: (
        <svg {...common}>
          <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2Z" />
        </svg>
      ),
      integration: (
        <svg {...common}>
          <rect x="3" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="3" width="7" height="7" rx="1.5" />
          <rect x="14" y="14" width="7" height="7" rx="1.5" />
          <path d="M10 6.5h4" />
          <path d="M17.5 10v4" />
        </svg>
      ),
      customize: (
        <svg {...common}>
          <circle cx="12" cy="12" r="3" />
          <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06A1.65 1.65 0 0 0 15 19.4a1.65 1.65 0 0 0-1 .6 1.65 1.65 0 0 1-2 0 1.65 1.65 0 0 0-1-.6 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.6 15a1.65 1.65 0 0 0-.6-1 1.65 1.65 0 0 1 0-2 1.65 1.65 0 0 0 .6-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.6c.36 0 .71-.13 1-.36a1.65 1.65 0 0 1 2 0c.29.23.64.36 1 .36a1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9c0 .36.13.71.36 1a1.65 1.65 0 0 1 0 2c-.23.29-.36.64-.36 1Z" />
        </svg>
      ),
      apps: (
        <svg {...common}>
          <rect x="3" y="3" width="5" height="5" rx="1" />
          <rect x="10" y="3" width="5" height="5" rx="1" />
          <rect x="17" y="3" width="4" height="5" rx="1" />
          <rect x="3" y="10" width="5" height="5" rx="1" />
          <rect x="10" y="10" width="5" height="5" rx="1" />
          <rect x="17" y="10" width="4" height="5" rx="1" />
          <rect x="3" y="17" width="5" height="4" rx="1" />
          <rect x="10" y="17" width="5" height="4" rx="1" />
        </svg>
      ),
      shield: (
        <svg {...common}>
          <path d="M12 3l7 3v6c0 5-3.5 8-7 9-3.5-1-7-4-7-9V6l7-3Z" />
          <path d="m9.5 12 1.7 1.7 3.8-3.8" />
        </svg>
      ),
      star: (
        <svg {...common}>
          <path d="m12 3 2.7 5.48 6.05.88-4.38 4.27 1.03 6.03L12 16.8 6.6 19.66l1.03-6.03L3.25 9.36l6.05-.88L12 3Z" />
        </svg>
      ),
      check: (
        <svg {...common}>
          <path d="M20 6 9 17l-5-5" />
        </svg>
      ),
    };

    return icons[type] || icons.workspace;
  };

  const css = `
    :root{
      --accent:${accent};
      --primary:${primary};
      --bodyBg:${bodyBg};
      --textPrimary:${textPrimary};
      --textSecondary:${textSecondary};
      --border:${border};
      --heading-font:'Plus Jakarta Sans', sans-serif;
      --body-font:'Inter', sans-serif;
    }
    *{box-sizing:border-box}
    html{scroll-behavior:smooth}
    body{
      margin:0;
      background:var(--bodyBg);
      color:var(--textPrimary);
      font-family:var(--body-font);
    }
    a{text-decoration:none;color:inherit}
    img{max-width:100%;display:block}
    .landing-page{
      background:var(--bodyBg);
      overflow:hidden;
    }
    .container{
      width:min(1180px, calc(100% - 40px));
      margin:0 auto;
      position:relative;
      z-index:2;
    }
    .section{
      position:relative;
      padding:88px 0;
      overflow:hidden;
    }
    .section-white{background:#ffffff}
    .section-grey{background:#f5f5f5}
    .section-dark{background:#1a1a1a;color:#fff}
    .section-tag{
      display:inline-flex;
      align-items:center;
      gap:10px;
      border:1px solid rgba(255,107,0,.2);
      background:rgba(255,107,0,.08);
      color:var(--accent);
      border-radius:999px;
      padding:10px 16px;
      font-size:13px;
      font-weight:700;
      letter-spacing:.02em;
      text-transform:uppercase;
      margin-bottom:18px;
    }
    .gradient-text{
      background: linear-gradient(135deg, #ff6b00 0%, #ff6b00 100%);
      -webkit-background-clip:text;
      -webkit-text-fill-color:transparent;
      background-clip:text;
    }
    h1,h2,h3,h4{
      font-family:var(--heading-font);
      margin:0 0 16px;
      letter-spacing:-0.03em;
    }
    h1{
      font-size:clamp(48px, 6vw, 68px);
      line-height:1.02;
      font-weight:800;
    }
    h2{
      font-size:clamp(32px, 4vw, 44px);
      line-height:1.1;
      font-weight:800;
    }
    h3{
      font-size:22px;
      line-height:1.2;
      font-weight:700;
    }
    p{
      margin:0 0 16px;
      color:var(--textSecondary);
      line-height:1.75;
      font-size:16px;
    }
    .section-dark p{color:rgba(255,255,255,.74)}
    .soft-shadow{
      box-shadow:0 20px 60px rgba(20,23,28,.08);
    }
    .nav-wrap{
      position:sticky;
      top:0;
      z-index:50;
      transition:all .3s ease;
    }
    .nav-wrap.scrolled .navbar{
      background:rgba(24,24,24,.84);
      backdrop-filter:blur(20px);
      box-shadow:0 16px 40px rgba(0,0,0,.18);
    }
    .navbar{
      background:rgba(24,24,24,.7);
      border-bottom:1px solid rgba(255,255,255,.08);
      transition:all .3s ease;
    }
    .nav-inner{
      min-height:76px;
      display:flex;
      align-items:center;
      justify-content:space-between;
      gap:18px;
    }
    .nav-left{
      display:flex;
      align-items:center;
      gap:16px;
      min-width:0;
    }
    .text-logo{
      font-family:var(--heading-font);
      font-weight:800;
      font-size:20px;
      color:var(--accent);
      white-space:nowrap;
    }
    .nav-center{
      margin-left:auto;
      display:flex;
      align-items:center;
      gap:18px;
    }
    .techjockey-logo{
      height:28px;
      opacity:.9;
    }
    .animated-cta{
      position:relative;
      padding:12px 24px;
      border-radius:10px;
      overflow:hidden;
      background:transparent;
      color:white;
      font-weight:700;
      cursor:pointer;
      z-index:1;
      border:none;
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:10px;
      transition:transform .25s ease, box-shadow .25s ease, opacity .25s ease;
    }
    .animated-cta:hover{
      transform:translateY(-2px);
      box-shadow:0 16px 30px rgba(255,107,0,.28);
    }
    @keyframes borderRotate{
      from{transform:rotate(0deg);}
      to{transform:rotate(360deg);}
    }
    .animated-cta::before{
      content:'';
      position:absolute;
      inset:-2px;
      background:conic-gradient(from 0deg, #ff6b00, #ff9a4d, #ff6b00);
      border-radius:inherit;
      animation:borderRotate 3s linear infinite;
      z-index:-2;
    }
    .animated-cta::after{
      content:'';
      position:absolute;
      inset:1px;
      background:#ff6b00;
      border-radius:8px;
      z-index:-1;
    }
    .ghost-btn{
      display:inline-flex;
      align-items:center;
      justify-content:center;
      gap:10px;
      min-height:48px;
      padding:12px 22px;
      border-radius:10px;
      font-weight:700;
      color:#fff;
      border:1px solid rgba(255,255,255,.25);
      background:rgba(255,255,255,.08);
      transition:transform .25s ease, box-shadow .25s ease, background .25s ease;
    }
    .ghost-btn:hover{
      transform:translateY(-2px);
      box-shadow:0 16px 30px rgba(0,0,0,.18);
      background:rgba(255,255,255,.14);
    }
    .hero{
      background:#ff6b00;
      padding:72px 0 72px;
      position:relative;
      isolation:isolate;
    }
    .hero::before{
      content:'';
      position:absolute;
      inset:-10% -10% auto auto;
      width:520px;
      height:520px;
      background:radial-gradient(circle, rgba(255,255,255,.22) 0%, rgba(255,255,255,0) 68%);
      filter:blur(10px);
      z-index:0;
    }
    .hero::after{
      content:'';
      position:absolute;
      left:-120px;
      bottom:-120px;
      width:420px;
      height:420px;
      background:radial-gradient(circle, rgba(255,220,195,.22) 0%, rgba(255,255,255,0) 70%);
      z-index:0;
    }
    .hero-grid{
      display:grid;
      grid-template-columns:1.08fr .92fr;
      gap:52px;
      align-items:center;
    }
    .hero-content{
      color:#fff;
      position:relative;
      z-index:2;
    }
    .hero-content p{
      color:rgba(255,255,255,.86);
      max-width:620px;
      font-size:18px;
    }
    .hero-bullets{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:14px 18px;
      margin:20px 0 0;
      max-width:620px;
    }
    .hero-bullet{
      display:flex;
      align-items:flex-start;
      gap:12px;
      color:#fff;
      font-size:15px;
      font-weight:500;
    }
    .hero-chip-row{
      display:flex;
      flex-wrap:wrap;
      gap:12px;
      margin-top:24px;
    }
    .hero-chip{
      display:flex;
      align-items:center;
      gap:8px;
      padding:8px 16px;
      border-radius:100px;
      border:1px solid rgba(255,255,255,.28);
      background:rgba(255,255,255,.12);
      color:#fff;
      font-size:13px;
      box-shadow:0 8px 22px rgba(0,0,0,.08);
      backdrop-filter:blur(8px);
    }
    .hero-actions{
      display:flex;
      flex-wrap:wrap;
      gap:14px;
      margin-top:30px;
    }
    .hero-visual{
      position:relative;
      display:flex;
      align-items:center;
      justify-content:center;
      min-height:500px;
      z-index:2;
    }
    .mesh-panel{
      position:relative;
      width:100%;
      max-width:560px;
      min-height:500px;
      border-radius:28px;
      overflow:hidden;
      background:
        radial-gradient(circle at 20% 20%, rgba(255,255,255,.28), transparent 30%),
        radial-gradient(circle at 80% 25%, rgba(255,210,176,.34), transparent 28%),
        radial-gradient(circle at 50% 80%, rgba(255,255,255,.16), transparent 26%),
        linear-gradient(145deg, rgba(255,255,255,.16), rgba(255,255,255,.05));
      border:1px solid rgba(255,255,255,.22);
      box-shadow:0 30px 80px rgba(132,47,0,.3);
      backdrop-filter:blur(10px);
      padding:28px;
    }
    .mesh-panel::before{
      content:'';
      position:absolute;
      inset:0;
      background:
        linear-gradient(90deg, rgba(255,255,255,.08) 1px, transparent 1px),
        linear-gradient(rgba(255,255,255,.08) 1px, transparent 1px);
      background-size:32px 32px;
      mask-image:linear-gradient(to bottom, rgba(0,0,0,.9), rgba(0,0,0,.2));
      opacity:.28;
      animation:gridFloat 10s linear infinite;
    }
    @keyframes gridFloat{
      0%{transform:translateY(0)}
      100%{transform:translateY(32px)}
    }
    .dashboard-shell{
      position:relative;
      display:grid;
      grid-template-columns:1.2fr .8fr;
      gap:16px;
      height:100%;
      z-index:2;
    }
    .dashboard-main, .dashboard-side, .floating-card, .proof-chip{
      background:rgba(255,255,255,.92);
      border:1px solid rgba(255,255,255,.55);
      box-shadow:0 20px 50px rgba(31,41,55,.12);
      border-radius:18px;
    }
    .dashboard-main{
      padding:18px;
      min-height:320px;
      display:flex;
      flex-direction:column;
      gap:14px;
      transform:translateY(0);
      animation:floatCard 6s ease-in-out infinite;
    }
    .dashboard-side{
      padding:14px;
      display:flex;
      flex-direction:column;
      gap:14px;
      animation:floatCard 7s ease-in-out infinite .8s;
    }
    @keyframes floatCard{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(-10px)}
    }
    .window-top{
      display:flex;
      align-items:center;
      gap:6px;
      margin-bottom:6px;
    }
    .dot{
      width:8px;height:8px;border-radius:50%;
      background:#ffd1b0;
    }
    .dot:nth-child(2){background:#ffb47a}
    .dot:nth-child(3){background:#ff8e3d}
    .typing-line{
      height:12px;
      border-radius:999px;
      background:linear-gradient(90deg, rgba(255,107,0,.18), rgba(255,107,0,.45), rgba(255,107,0,.18));
      background-size:200% 100%;
      animation:typingShimmer 2.4s linear infinite;
    }
    .typing-line.short{width:56%}
    .typing-line.mid{width:76%}
    .typing-line.long{width:92%}
    @keyframes typingShimmer{
      0%{background-position:200% 0}
      100%{background-position:-200% 0}
    }
    .data-grid{
      display:grid;
      grid-template-columns:repeat(3, 1fr);
      gap:10px;
      margin-top:10px;
    }
    .mini-thumb{
      aspect-ratio:1/1;
      border-radius:14px;
      background:
        linear-gradient(135deg, rgba(255,107,0,.95), rgba(255,160,92,.65)),
        linear-gradient(45deg, #fff, #ffd8bf);
      position:relative;
      overflow:hidden;
    }
    .mini-thumb::after{
      content:'';
      position:absolute;
      inset:auto -10% -20% auto;
      width:65%;
      height:65%;
      border-radius:50%;
      background:rgba(255,255,255,.28);
      filter:blur(8px);
    }
    .metric-box{
      padding:14px;
      border-radius:16px;
      background:linear-gradient(180deg, rgba(255,107,0,.1), rgba(255,107,0,.04));
      border:1px solid rgba(255,107,0,.16);
    }
    .metric-box strong{
      display:block;
      font-size:24px;
      font-family:var(--heading-font);
      color:var(--textPrimary);
      margin-bottom:4px;
    }
    .metric-box span{
      color:var(--textSecondary);
      font-size:13px;
      line-height:1.5;
    }
    .progress-card{
      padding:14px;
      border-radius:16px;
      background:#fff7f2;
      border:1px solid rgba(255,107,0,.12);
    }
    .progress-track{
      height:10px;
      background:#ffe3cf;
      border-radius:999px;
      overflow:hidden;
      margin-top:10px;
    }
    .progress-bar{
      height:100%;
      border-radius:999px;
      background:linear-gradient(90deg, #ff6b00, #ff9a4d);
      animation:progressGrow 3s ease-in-out infinite alternate;
    }
    @keyframes progressGrow{
      from{width:55%}
      to{width:84%}
    }
    .floating-card{
      position:absolute;
      padding:14px 16px;
      min-width:170px;
      backdrop-filter:blur(10px);
      animation:floatChip 5s ease-in-out infinite;
    }
    .floating-card.one{top:24px; right:-10px;}
    .floating-card.two{bottom:40px; left:-14px; animation-delay:1s;}
    .floating-card.three{bottom:18px; right:40px; animation-delay:1.8s;}
    .proof-chip{
      position:absolute;
      display:flex;
      align-items:center;
      gap:10px;
      padding:10px 14px;
      border-radius:999px;
      background:rgba(255,255,255,.88);
      color:var(--textPrimary);
      font-size:13px;
      font-weight:700;
      animation:floatChip 6s ease-in-out infinite;
    }
    .proof-chip.top{top:12px; left:12px;}
    .proof-chip.mid{top:100px; left:-12px; animation-delay:1.4s;}
    .proof-chip.bottom{right:0; bottom:120px; animation-delay:2s;}
    @keyframes floatChip{
      0%,100%{transform:translateY(0)}
      50%{transform:translateY(-8px)}
    }
    .marquee-wrapper{
      overflow:hidden;
      background:#ffffff;
      padding:20px 0;
      border-top:1px solid #e5e7eb;
      border-bottom:1px solid #e5e7eb;
    }
    @keyframes marqueeScroll{
      0%{transform:translateX(0)}
      100%{transform:translateX(-50%)}
    }
    .marquee-track{
      display:flex;
      width:max-content;
      animation:marqueeScroll 20s linear infinite;
      align-items:center;
    }
    .marquee-item{
      font-size:24px;
      font-weight:800;
      margin-right:48px;
      white-space:nowrap;
      color:#1a1a1a;
      font-family:var(--heading-font);
      letter-spacing:-0.02em;
    }
    .trust-strip{
      padding:30px 0;
      display:grid;
      grid-template-columns:260px 1fr;
      gap:24px;
      align-items:center;
    }
    .trust-copy{
      padding-right:18px;
      border-right:1px solid var(--border);
    }
    .trust-copy h3{
      font-size:18px;
      margin-bottom:8px;
    }
    .trust-copy p{font-size:14px;margin:0}
    .logos-grid{
      display:grid;
      grid-template-columns:repeat(4, minmax(0,1fr));
      gap:16px;
    }
    .logo-card{
      height:68px;
      border:1px solid var(--border);
      background:#fff;
      border-radius:16px;
      display:flex;
      align-items:center;
      justify-content:center;
      padding:16px;
      transition:transform .25s ease, box-shadow .25s ease, filter .25s ease;
      filter:grayscale(1);
    }
    .logo-card:hover{
      filter:grayscale(0);
      transform:translateY(-2px);
      box-shadow:0 16px 30px rgba(20,23,28,.08);
    }
    .logo-card img{
      max-height:26px;
      width:auto;
      opacity:.9;
    }
    .two-col{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:54px;
      align-items:center;
    }
    .browser-frame{
      background:#fff;
      border-radius:22px;
      overflow:hidden;
      border:1px solid rgba(20,23,28,.08);
      box-shadow:0 24px 60px rgba(20,23,28,.12);
    }
    .browser-bar{
      padding:14px 16px;
      border-bottom:1px solid #edf0f3;
      display:flex;
      align-items:center;
      justify-content:space-between;
      background:#fcfcfd;
    }
    .browser-actions{
      display:flex;
      gap:6px;
    }
    .browser-url{
      height:30px;
      border-radius:999px;
      background:#f5f6f8;
      width:55%;
    }
    .browser-body{
      padding:14px;
      background:linear-gradient(180deg, #ffffff, #fafafa);
    }
    .browser-body img{
      width:100%;
      border-radius:14px;
    }
    .left-border-copy{
      border-left:3px solid rgba(255,107,0,.24);
      padding-left:18px;
      margin:18px 0 28px;
    }
    .tab-nav{
      display:flex;
      flex-wrap:wrap;
      gap:10px;
      margin-bottom:22px;
    }
    .tab-btn{
      border:1px solid var(--border);
      background:#fff;
      color:var(--textPrimary);
      font-weight:700;
      padding:12px 16px;
      border-radius:12px;
      cursor:pointer;
      transition:all .25s ease;
      font-family:var(--body-font);
    }
    .tab-btn.active{
      border-color:rgba(255,107,0,.24);
      background:rgba(255,107,0,.08);
      color:var(--accent);
      box-shadow:0 14px 30px rgba(255,107,0,.08);
    }
    .spotlight-card{
      background:#fff;
      border:1px solid var(--border);
      border-radius:24px;
      padding:26px;
      margin-bottom:20px;
      box-shadow:0 20px 50px rgba(20,23,28,.07);
    }
    .spotlight-head{
      display:flex;
      align-items:flex-start;
      gap:16px;
      margin-bottom:10px;
    }
    .icon-wrap{
      width:52px;
      height:52px;
      border-radius:16px;
      background:rgba(255,107,0,.1);
      display:flex;
      align-items:center;
      justify-content:center;
      flex:0 0 52px;
    }
    .spotlight-grid{
      display:grid;
      grid-template-columns:repeat(2, 1fr);
      gap:16px;
    }
    .mini-feature{
      background:#fff;
      border:1px solid var(--border);
      border-radius:18px;
      padding:18px;
      transition:transform .25s ease, box-shadow .25s ease;
    }
    .mini-feature:hover,
    .insight-card:hover,
    .pricing-card:hover,
    .testimonial-card:hover,
    .news-card:hover{
      transform:translateY(-4px);
      box-shadow:0 18px 36px rgba(20,23,28,.1);
    }
    .mini-feature h4{
      font-family:var(--heading-font);
      margin:10px 0 8px;
      font-size:18px;
      line-height:1.25;
    }
    .mini-feature p{
      font-size:14px;
      margin:0;
    }
    .split-panel{
      display:grid;
      grid-template-columns:1fr 1fr;
      gap:18px;
      align-items:stretch;
    }
    .preview-panel{
      background:#fff;
      border:1px solid var(--border);
      border-radius:22px;
      padding:20px;
      box-shadow:0 20px 50px rgba(20,23,28,.08);
    }
    .preview-list{
      display:grid;
      gap:14px;
      margin-top:20px;
    }
    .preview-item{
      display:flex;
      gap:14px;
      align-items:flex-start;
      padding:14px;
      border-radius:16px;
      background:#fffaf6;
      border:1px solid rgba(255,107,0,.12);
    }
    .insight-band{
      position:relative;
      overflow:hidden;
      background:
        radial-gradient(circle at 10% 20%, rgba(255,107,0,.22), transparent 25%),
        radial-gradient(circle at 90% 80%, rgba(255,107,0,.16), transparent 22%),
        linear-gradient(180deg, #1a1a1a 0%, #111111 100%);
    }
    .insight-band::before{
      content:'';
      position:absolute;
      inset:0;
      background:
        linear-gradient(90deg, rgba(255,255,255,.05) 1px, transparent 1px),
        linear-gradient(rgba(255,255,255,.05) 1px, transparent 1px);
      background-size:44px 44px;
      opacity:.3;
      pointer-events:none;
    }
    .insight-grid{
      display:grid;
      grid-template-columns:repeat(4, 1fr);
      gap:18px;
      margin-top:28px;
    }
    .insight-card{
      position:relative;
      padding:24px;
      border-radius:22px;
      background:rgba(255,255,255,.06);
      border:1px solid rgba(255,255,255,.1);
      backdrop-filter:blur(10px);
      transition:transform .25s ease, box-shadow .25s ease;
    }
    .insight-value{
      font-family:var(--heading-font);
      font-size:42px;
      line-height:1;
      color:#fff;
      margin-bottom:10px;
      font-weight:800;
    }
    .insight-card h4{
      margin:0 0 8px;
      font-size:18px;
      color:#fff;
      font-family:var(--heading-font);
    }
    .insight-card p{
      color:rgba(255,255,255,.72);
      font-size:14px;
      margin:0;
    }
    .pricing-wrap{
      display:flex;
      justify-content:center;
      margin-top:26px;
    }
    .pricing-card{
      width:min(760px, 100%);
      background:#fff;
      border-radius:28px;
      border:2px solid rgba(255,107,0,.18);
      box-shadow:0 24px 70px rgba(20,23,28,.1);
      overflow:hidden;
      transition:transform .25s ease, box-shadow .25s ease;
    }
    .pricing-top{
      padding:30px;
      background:linear-gradient(180deg, #fff7f2 0%, #ffffff 100%);
      border-bottom:1px solid var(--border);
      position:relative;
    }
    .green-badge{
      display:inline-flex;
      align-items:center;
      padding:8px 12px;
      border-radius:999px;
      background:#ecfdf3;
      color:#1f9d57;
      font-size:13px;
      font-weight:800;
      margin-bottom:16px;
    }
    .price-line{
      display:flex;
      flex-wrap:wrap;
      align-items:flex-end;
      gap:12px;
      margin:12px 0 0;
    }
    .old-price{
      color:#98a2b3;
      text-decoration:line-through;
      font-weight:600;
    }
    .new-price{
      font-family:var(--heading-font);
      font-size:40px;
      line-height:1;
      font-weight:800;
      color:var(--textPrimary);
    }
    .pricing-includes{
      padding:30px;
      display:grid;
      grid-template-columns:repeat(2, 1fr);
      gap:14px 18px;
    }
    .check-item{
      display:flex;
      align-items:flex-start;
      gap:12px;
      color:var(--textPrimary);
      font-weight:500;
      line-height:1.5;
      font-size:15px;
    }
    .check-icon{
      width:22px;height:22px;border-radius:50%;
      background:rgba(255,107,0,.1);
      display:flex;align-items:center;justify-content:center;
      flex:0 0 22px;
      margin-top:1px;
    }
    .pricing-cta{
      padding:0 30px 30px;
    }
    .full-width-btn{
      width:100%;
      min-height:52px;
    }
    .testimonial-shell{
      position:relative;
      max-width:900px;
      margin:30px auto 0;
    }
    .testimonial-view{
      overflow:hidden;
      position:relative;
    }
    .testimonial-track{
      display:flex;
      transition:transform .6s cubic-bezier(.4,0,.2,1);
    }
    .testimonial-slide{
      min-width:100%;
      padding:10px;
    }
    .testimonial-card{
      background:#fff;
      border:1px solid var(--border);
      border-radius:28px;
      padding:34px;
      box-shadow:0 20px 50px rgba(20,23,28,.08);
      transition:transform .25s ease, box-shadow .25s ease;
    }
    .quote-accent{
      font-size:72px;
      line-height:.8;
      color:var(--accent);
      font-family:var(--heading-font);
      margin-bottom:8px;
      display:block;
    }
    .stars{
      color:#f7b500;
      letter-spacing:2px;
      font-size:20px;
      margin-bottom:16px;
    }
    .testimonial-quote{
      font-size:20px;
      line-height:1.75;
      color:var(--textPrimary);
      margin-bottom:24px;
    }
    .testimonial-user{
      display:flex;
      align-items:center;
      gap:16px;
    }
    .testimonial-user img{
      width:62px;
      height:62px;
      border-radius:50%;
      object-fit:cover;
      background:#fff6ef;
      border:1px solid var(--border);
    }
    .testimonial-user strong{
      display:block;
      font-size:17px;
      font-family:var(--heading-font);
    }
    .testimonial-user span{
      color:#8a919e;
      font-size:14px;
    }
    .slider-controls{
      display:flex;
      align-items:center;
      justify-content:center;
      gap:12px;
      margin-top:24px;
    }
    .arrow-btn{
      width:44px;
      height:44px;
      border-radius:50%;
      border:1px solid var(--border);
      background:#fff;
      cursor:pointer;
      font-size:18px;
      transition:all .25s ease;
    }
    .arrow-btn:hover{
      transform:translateY(-2px);
      box-shadow:0 12px 24px rgba(20,23,28,.08);
      border-color:rgba(255,107,0,.24);
      color:var(--accent);
    }
    .dots{
      display:flex;
      justify-content:center;
      gap:8px;
      align-items:center;
    }
    .dot-btn{
      width:8px;
      height:8px;
      border-radius:999px;
      border:none;
      background:#d5d9e0;
      cursor:pointer;
      transition:all .3s ease;
      padding:0;
    }
    .dot-btn.active{
      width:24px;
      background:var(--accent);
    }
    .news-grid{
      display:grid;
      grid-template-columns:repeat(3, 1fr);
      gap:18px;
      margin-top:28px;
    }
    .news-card{
      background:#fff;
      border:1px solid var(--border);
      border-radius:22px;
      padding:22px;
      box-shadow:0 16px 36px rgba(20,23,28,.06);
      transition:transform .25s ease, box-shadow .25s ease;
    }
    .news-card h3{
      font-size:20px;
      margin-bottom:10px;
    }
    .news-card p{
      font-size:15px;
      margin-bottom:14px;
    }
    .news-link{
      color:var(--accent);
      font-weight:700;
      display:inline-flex;
      align-items:center;
      gap:8px;
    }
    .footer{
      background:#111111;
      color:#fff;
      padding:56px 0 30px;
    }
    .footer-grid{
      display:grid;
      grid-template-columns:1.1fr .9fr .8fr;
      gap:24px;
      align-items:flex-start;
    }
    .footer p{
      color:rgba(255,255,255,.68);
      font-size:15px;
    }
    .footer-title{
      font-family:var(--heading-font);
      font-weight:700;
      margin-bottom:12px;
      font-size:18px;
      color:#fff;
    }
    .socials{
      display:flex;
      gap:10px;
      margin-top:12px;
    }
    .socials a{
      width:40px;height:40px;border-radius:50%;
      display:flex;align-items:center;justify-content:center;
      background:rgba(255,255,255,.08);
      border:1px solid rgba(255,255,255,.08);
      transition:all .25s ease;
    }
    .socials a:hover{
      transform:translateY(-2px);
      background:rgba(255,107,0,.16);
      border-color:rgba(255,107,0,.24);
    }
    .footer-bottom{
      margin-top:28px;
      padding-top:20px;
      border-top:1px solid rgba(255,255,255,.08);
      display:flex;
      justify-content:space-between;
      gap:16px;
      flex-wrap:wrap;
    }
    .reveal{
      opacity:0;
      transform:translateY(40px);
      transition:opacity .7s ease, transform .7s ease;
    }
    .reveal.visible{
      opacity:1;
      transform:translateY(0);
    }
    .reveal-delay-1{transition-delay:.1s}
    .reveal-delay-2{transition-delay:.2s}
    .reveal-delay-3{transition-delay:.3s}
    .orb{
      position:absolute;
      border-radius:50%;
      pointer-events:none;
      filter:blur(8px);
      z-index:0;
    }
    .orb.one{
      top:-100px; right:-100px; width:400px; height:400px;
      background:radial-gradient(circle, rgba(255,107,0,.15) 0%, transparent 70%);
    }
    .orb.two{
      bottom:-50px; left:-50px; width:300px; height:300px;
      background:radial-gradient(circle, rgba(255,107,0,.1) 0%, transparent 70%);
    }
    @media (max-width: 1100px){
      .hero-grid,.two-col,.split-panel,.footer-grid,.trust-strip{grid-template-columns:1fr}
      .logos-grid{grid-template-columns:repeat(4, 1fr)}
      .hero-visual{min-height:auto}
      .mesh-panel{min-height:420px}
      .pricing-includes,.insight-grid,.news-grid{grid-template-columns:repeat(2, 1fr)}
      .dashboard-shell{grid-template-columns:1fr}
      .trust-copy{border-right:none;padding-right:0}
    }
    @media (max-width: 767px){
      .container{width:min(100% - 24px, 1180px)}
      .section{padding:68px 0}
      .nav-inner{min-height:68px;flex-wrap:wrap;padding:12px 0}
      .nav-center{width:100%;justify-content:space-between;margin-left:0}
      .hero-grid{gap:30px}
      .hero-bullets,.spotlight-grid,.pricing-includes,.insight-grid,.news-grid,.logos-grid{grid-template-columns:1fr}
      .hero-actions{flex-direction:column;align-items:stretch}
      .animated-cta,.ghost-btn{width:100%}
      .mesh-panel{padding:18px;min-height:380px}
      .floating-card,.proof-chip{position:relative;left:auto;right:auto;top:auto;bottom:auto;margin-top:12px}
      .trust-strip{padding:10px 0 0}
      .testimonial-card{padding:24px}
      .testimonial-quote{font-size:18px}
      .marquee-item{font-size:20px}
      .browser-url{width:42%}
      .new-price{font-size:34px}
    }
  `;

  return (
    <div className="landing-page">
      <link
        rel="stylesheet"
        href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700;800&family=Inter:wght@400;500;600;700&display=swap"
      />
      <style dangerouslySetInnerHTML={{ __html: css }} />

      <div className={`nav-wrap ${navScrolled ? 'scrolled' : ''}`}>
        <div className="navbar">
          <div className="container nav-inner">
            <div className="nav-left">
              <span className="text-logo">Zoho Workplace</span>
            </div>
            <div className="nav-center">
              <img
                src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
                alt="Techjockey"
                className="techjockey-logo"
              />
              <a href="#pricing" className="animated-cta">
                Get Started
              </a>
            </div>
          </div>
        </div>
      </div>

      <section className="hero" id="hero" ref={heroRef}>
        <div className="container hero-grid">
          <div className="hero-content">
            <div className="section-tag reveal">Enterprise Collaboration Suite</div>
            <h1 className="reveal reveal-delay-1">
              Elevate Your Team’s Productivity with <span className="gradient-text">Zoho Workplace</span>
            </h1>
            <p className="reveal reveal-delay-2">
              A complete email and collaboration suite for enterprises that enables unified communication,
              secure teamwork, and better operational alignment for CIOs, CTOs, and CXOs.
            </p>

            <div className="hero-bullets reveal reveal-delay-2">
              <div className="hero-bullet">
                <Icon type="shield" />
                <span>Enterprise-ready email, governance, and secure collaboration</span>
              </div>
              <div className="hero-bullet">
                <Icon type="workspace" />
                <span>Unified apps for communication, meetings, documents, and storage</span>
              </div>
              <div className="hero-bullet">
                <Icon type="ai" />
                <span>Built-in AI assistance for productivity and content quality</span>
              </div>
              <div className="hero-bullet">
                <Icon type="remote" />
                <span>Anywhere access for distributed and hybrid teams</span>
              </div>
            </div>

            <div className="hero-chip-row reveal reveal-delay-3">
              {['Unified Email', 'Team Collaboration', 'AI Productivity', 'Remote Ready', 'Enterprise Secure'].map(
                (chip, i) => (
                  <div className="hero-chip" key={i}>
                    <Icon type={i % 2 === 0 ? 'check' : 'star'} />
                    <span>{chip}</span>
                  </div>
                )
              )}
            </div>

            <div className="hero-actions reveal reveal-delay-3">
              <a href="#pricing" className="animated-cta">
                Get Started
              </a>
              <a href="#products" className="ghost-btn">
                Explore Capabilities
              </a>
            </div>
          </div>

          <div className="hero-visual reveal reveal-delay-2">
            <div className="mesh-panel soft-shadow">
              <div className="proof-chip top">
                <Icon type="shield" />
                <span>Secure Collaboration</span>
              </div>
              <div className="proof-chip mid">
                <Icon type="ai" />
                <span>AI-Assisted Workflows</span>
              </div>
              <div className="proof-chip bottom">
                <Icon type="workspace" />
                <span>Unified Productivity Stack</span>
              </div>

              <div className="dashboard-shell">
                <div className="dashboard-main">
                  <div className="window-top">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                  <div className="typing-line long" />
                  <div className="typing-line mid" />
                  <div className="typing-line short" />
                  <div className="data-grid">
                    <div className="mini-thumb" />
                    <div className="mini-thumb" />
                    <div className="mini-thumb" />
                    <div className="mini-thumb" />
                    <div className="mini-thumb" />
                    <div className="mini-thumb" />
                  </div>
                </div>
                <div className="dashboard-side">
                  <div className="metric-box">
                    <strong>100,000+</strong>
                    <span>Businesses globally trust the platform for enterprise communication.</span>
                  </div>
                  <div className="progress-card">
                    <strong style={{ fontFamily: 'var(--heading-font)', fontSize: 18, color: textPrimary }}>
                      Productivity Alignment
                    </strong>
                    <div className="progress-track">
                      <div className="progress-bar" />
                    </div>
                  </div>
                  <div className="metric-box">
                    <strong>Anywhere</strong>
                    <span>Access email, meetings, files, and collaboration from any device.</span>
                  </div>
                </div>
              </div>

              <div className="floating-card one">
                <strong style={{ display: 'block', fontFamily: 'var(--heading-font)', marginBottom: 4 }}>Collaboration</strong>
                <span style={{ color: textSecondary, fontSize: 13 }}>Live editing, comments, meetings, and chat.</span>
              </div>
              <div className="floating-card two">
                <strong style={{ display: 'block', fontFamily: 'var(--heading-font)', marginBottom: 4 }}>Executive Control</strong>
                <span style={{ color: textSecondary, fontSize: 13 }}>Manage teams, permissions, and workflows centrally.</span>
              </div>
              <div className="floating-card three">
                <strong style={{ display: 'block', fontFamily: 'var(--heading-font)', marginBottom: 4 }}>Workplace AI</strong>
                <span style={{ color: textSecondary, fontSize: 13 }}>Improve writing quality and day-to-day efficiency.</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, idx) =>
            ['Zoho Workplace', 'Enterprise Collaboration', 'Unified Email', 'Productivity Suite', 'Secure Communication'].map(
              (item, i) => (
                <span className="marquee-item" key={`${idx}-${i}`}>
                  {item} <span className="gradient-text">★</span>
                </span>
              )
            )
          )}
        </div>
      </div>

      <section className="section section-white" id="trust">
        <div className="container">
          <div className="trust-strip reveal">
            <div className="trust-copy">
              <h3>Trusted by 100,000+ Businesses Globally</h3>
              <p>
                Enterprise leaders choose proven collaboration platforms that support scale, usability, and control.
              </p>
            </div>
            <div className="logos-grid">
              {logos.map((logo, i) => (
                <div className="logo-card" key={i}>
                  <img src={logo} alt={`Trusted brand ${i + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="section section-grey" id="products">
        <div className="orb one" />
        <div className="orb two" />
        <div className="container two-col">
          <div className="reveal">
            <div className="browser-frame">
              <div className="browser-bar">
                <div className="browser-actions">
                  <span className="dot" />
                  <span className="dot" />
                  <span className="dot" />
                </div>
                <div className="browser-url" />
              </div>
              <div className="browser-body">
                <img
                  src="/output/generated-assets/ds_1776881684715_a286a35b/17-473c14de05.jpg"
                  alt="Zoho Workplace discussion thread interface"
                />
              </div>
            </div>
          </div>

          <div>
            <div className="section-tag reveal">3rd Fold</div>
            <h2 className="reveal reveal-delay-1">
              Why Choose <span className="gradient-text">Zoho Workplace</span>?
            </h2>
            <div className="left-border-copy reveal reveal-delay-2">
              <p>
                Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive
                through a single unified platform built for enterprise use.
              </p>
            </div>

            <div className="tab-nav reveal reveal-delay-2">
              {spotlightFeatures.map((item, i) => (
                <button
                  key={i}
                  className={`tab-btn ${activeProductTab === i ? 'active' : ''}`}
                  onClick={() => setActiveProductTab(i)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="spotlight-card reveal reveal-delay-3">
              <div className="spotlight-head">
                <div className="icon-wrap">
                  <Icon type={spotlightFeatures[activeProductTab].icon} />
                </div>
                <div>
                  <h3>{spotlightFeatures[activeProductTab].title}</h3>
                  <p>{spotlightFeatures[activeProductTab].description}</p>
                </div>
              </div>
            </div>

            <div className="spotlight-grid reveal reveal-delay-3">
              {spotlightFeatures
                .filter((_, idx) => idx !== activeProductTab)
                .map((item, i) => (
                  <div className="mini-feature" key={i}>
                    <div className="icon-wrap" style={{ width: 44, height: 44, borderRadius: 14 }}>
                      <Icon type={item.icon} />
                    </div>
                    <h4>{item.title}</h4>
                    <p>{item.description}</p>
                  </div>
                ))}
            </div>
          </div>
        </div>
      </section>

      <div className="marquee-wrapper">
        <div className="marquee-track">
          {[...Array(2)].flatMap((_, idx) =>
            ['Business Growth', 'Integrated Apps', 'Custom Workspaces', 'Hybrid Work', 'Executive Visibility'].map(
              (item, i) => (
                <span className="marquee-item" key={`${idx}-${i}`}>
                  {item} <span className="gradient-text">★</span>
                </span>
              )
            )
          )}
        </div>
      </div>

      <section className="section section-white" id="why-techjockey">
        <div className="container two-col">
          <div>
            <div className="section-tag reveal">4th & 5th Fold</div>
            <h2 className="reveal reveal-delay-1">
              Unlock Your Business Growth with <span className="gradient-text">Zoho Workplace</span>
            </h2>
            <div className="left-border-copy reveal reveal-delay-2">
              <p>
                Zoho Workplace unifies email, collaboration, and productivity tools to streamline business operations,
                support smarter teamwork, and improve decision velocity across the enterprise.
              </p>
            </div>

            <div className="tab-nav reveal reveal-delay-2">
              {gridFeatures.map((item, i) => (
                <button
                  key={i}
                  className={`tab-btn ${activeGridTab === i ? 'active' : ''}`}
                  onClick={() => setActiveGridTab(i)}
                >
                  {item.title}
                </button>
              ))}
            </div>

            <div className="preview-list reveal reveal-delay-3">
              <div className="preview-item">
                <div className="icon-wrap" style={{ width: 48, height: 48 }}>
                  <Icon type={gridFeatures[activeGridTab].icon} />
                </div>
                <div>
                  <h3 style={{ marginBottom: 8 }}>{gridFeatures[activeGridTab].title}</h3>
                  <p style={{ marginBottom: 0 }}>{gridFeatures[activeGridTab].description}</p>
                </div>
              </div>

              <div className="split-panel">
                <div className="mini-feature">
                  <div className="icon-wrap" style={{ width: 42, height: 42, borderRadius: 14 }}>
                    <Icon type="apps" />
                  </div>
                  <h4>Zoho Apps</h4>
                  <p>Meeting, Connect, Mail, Cliq, Writer, and more for connected work.</p>
                </div>
                <div className="mini-feature">
                  <div className="icon-wrap" style={{ width: 42, height: 42, borderRadius: 14 }}>
                    <Icon type="integration" />
                  </div>
                  <h4>Analytics & Automation</h4>
                  <p>Connect with Analytics, Flow, Zapier, and core finance tools.</p>
                </div>
              </div>
            </div>
          </div>

          <div className="reveal">
            <div className="preview-panel">
              <div className="browser-frame" style={{ boxShadow: 'none', borderRadius: 18 }}>
                <div className="browser-bar">
                  <div className="browser-actions">
                    <span className="dot" />
                    <span className="dot" />
                    <span className="dot" />
                  </div>
                  <div className="browser-url" />
                </div>
                <div className="browser-body">
                  <img
                    src="/output/generated-assets/ds_1776881684715_a286a35b/16-8ee9780f0b.jpg"
                    alt="Zoho Workplace document collaboration interface"
                  />
                </div>
              </div>

              <div className="preview-list">
                <div className="preview-item">
                  <div className="icon-wrap" style={{ width: 42, height: 42, borderRadius: 14 }}>
                    <Icon type="communication" />
                  </div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: 4, fontFamily: 'var(--heading-font)' }}>
                      Communicate Effectively
                    </strong>
                    <p style={{ marginBottom: 0, fontSize: 14 }}>
                      Extend collaboration with channels, feeds, and groups beyond traditional inbox-based workflows.
                    </p>
                  </div>
                </div>
                <div className="preview-item">
                  <div className="icon-wrap" style={{ width: 42, height: 42, borderRadius: 14 }}>
                    <Icon type="customize" />
                  </div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: 4, fontFamily: 'var(--heading-font)' }}>
                      Customizable Workspace
                    </strong>
                    <p style={{ marginBottom: 0, fontSize: 14 }}>
                      Configure layouts, controls, and experiences to match governance and operational priorities.
                    </p>
                  </div>
                </div>
                <div className="preview-item">
                  <div className="icon-wrap" style={{ width: 42, height: 42, borderRadius: 14 }}>
                    <Icon type="growth" />
                  </div>
                  <div>
                    <strong style={{ display: 'block', marginBottom: 4, fontFamily: 'var(--heading-font)' }}>
                      Ideal For Your Business Size
                    </strong>
                    <p style={{ marginBottom: 0, fontSize: 14 }}>
                      From scaling companies to established enterprises, teams can standardize productivity faster.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-dark insight-band" id="insight">
        <div className="container">
          <div className="section-tag reveal" style={{ color: '#ffb175', borderColor: 'rgba(255,107,0,.26)', background: 'rgba(255,107,0,.12)' }}>
            6th Fold
          </div>
          <h2 className="reveal reveal-delay-1">
            Performance Beyond Limits with <span className="gradient-text">Zoho Workplace</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{ maxWidth: 860 }}>
            Measurable user outcomes reinforce why enterprise teams adopt Zoho Workplace to improve secure
            communication, remote access, usability, and collaboration across functions.
          </p>

          <div className="insight-grid reveal reveal-delay-3">
            {insightStats.map((item, i) => (
              <div className="insight-card" key={i}>
                <div className="insight-value">{item.value}</div>
                <h4>{item.label}</h4>
                <p>{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section-grey" id="pricing">
        <div className="container">
          <div className="section-tag reveal">Pricing</div>
          <h2 className="reveal reveal-delay-1">
            {`Zoho Workplace Price Plan `}
            <span className="gradient-text">Includes</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{ maxWidth: 760 }}>
            A practical collaboration suite for enterprise operations with email, document management, migration
            assistance, and cross-device support.
          </p>

          <div className="pricing-wrap reveal reveal-delay-3">
            <div className="pricing-card">
              <div className="pricing-top">
                <div className="green-badge">Best for Enterprise Collaboration</div>
                <h3 style={{ fontSize: 30, marginBottom: 8 }}>{pricingPlan.name}</h3>
                <p style={{ marginBottom: 0 }}>
                  Unified communication, secure mail, file sharing, and office productivity in one business suite.
                </p>
                <div className="price-line">
                  <span className="old-price">{pricingPlan.originalPrice}</span>
                  <span className="new-price">{pricingPlan.price}</span>
                </div>
                <p style={{ marginTop: 10, marginBottom: 0, color: '#1f9d57', fontWeight: 700 }}>
                  {pricingPlan.discount}
                </p>
              </div>

              <div className="pricing-includes">
                {pricingPlan.includes.map((item, i) => (
                  <div className="check-item" key={i}>
                    <span className="check-icon">
                      <Icon type="check" />
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>

              <div className="pricing-cta">
                <a href="#hero" className="animated-cta full-width-btn">
                  {pricingPlan.cta}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section section-white" id="testimonials">
        <div className="container">
          <div className="section-tag reveal">Customer Voices</div>
          <h2 className="reveal reveal-delay-1">
            Trusted by Leaders Focused on <span className="gradient-text">Operational Productivity</span>
          </h2>
          <p className="reveal reveal-delay-2" style={{ maxWidth: 760 }}>
            Enterprise buyers evaluate collaboration suites on business impact, usability, security, and adoption.
            These perspectives reflect those priorities.
          </p>

          <div className="testimonial-shell reveal reveal-delay-3">
            <div className="testimonial-view">
              <div
                className="testimonial-track"
                style={{ transform: `translateX(-${activeSlide * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div className="testimonial-slide" key={i}>
                    <div className="testimonial-card">
                      <span className="quote-accent">❝</span>
                      <div className="stars">★★★★★</div>
                      <p className="testimonial-quote">{t.quote}</p>
                      <div className="testimonial-user">
                        <img src={t.image} alt={t.author} />
                        <div>
                          <strong>{t.author}</
export default LandingPage;