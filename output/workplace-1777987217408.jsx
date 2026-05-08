import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const accent = '#e4292b';
  const primary = '#e4292b';
  const bodyBg = '#ffffff';

  const [activeSlide, setActiveSlide] = useState(0);
  const pageRef = useRef(null);

  const testimonials = [
    {
      quote:
        'Zoho Workplace has streamlined our communication and collaboration by bringing email, documents, and team tools into one unified platform.',
      author: 'Amit Kapoor',
      role: 'IT Manager',
      initials: 'AK',
    },
    {
      quote:
        'The platform is easy to use and has significantly improved team productivity by reducing dependency on multiple tools.',
      author: 'Saurav Singh',
      role: 'Head of Operations',
      initials: 'SS',
    },
    {
      quote:
        'Techjockey helped us identify the right Zoho Workplace plan based on our requirements. Their guidance made the entire purchase process quick and hassle-free.',
      author: 'Shrimi Manchanda',
      role: 'Operations Manager',
      initials: 'SM',
    },
    {
      quote:
        'The seamless integration between email, file management, and collaboration tools has made our daily workflows much more efficient.',
      author: 'Shweta Thakur',
      role: 'Senior System Administrator',
      initials: 'ST',
    },
    {
      quote:
        'Zoho Workplace helped us collaborate seamlessly, ensuring a more productive and efficient workflow across teams.',
      author: 'Narinder Sahni',
      role: 'IT Head',
      initials: 'NS',
    },
  ];

  useEffect(() => {
    document.documentElement.style.setProperty('--accent', accent);
    document.documentElement.style.setProperty('--primary', primary);
  }, []);

  useEffect(() => {
    const els = document.querySelectorAll('.hero-headline, .hero-sub, .hero-chips, .hero-cta, .hero-visual');
    els.forEach((el, i) => {
      el.style.opacity = '0';
      el.style.transition = 'opacity 0.9s ease';
      el.style.transitionDelay = i * 0.2 + 's';
      requestAnimationFrame(() => {
        setTimeout(() => {
          el.style.opacity = '1';
        }, 50);
      });
    });
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    document.querySelectorAll('.reveal, .reveal-left, .reveal-right, .reveal-scale, .stagger-parent').forEach(el => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const btns = document.querySelectorAll('.btn-magnetic');
    const cleanups = [];
    btns.forEach(btn => {
      const onMove = e => {
        const rect = btn.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        btn.style.transform = 'translate(' + x * 0.25 + 'px, ' + y * 0.25 + 'px)';
      };
      const onLeave = () => {
        btn.style.transform = 'translate(0, 0)';
        btn.style.transition = 'transform 0.5s cubic-bezier(0.34, 1.56, 0.64, 1)';
      };
      btn.addEventListener('mousemove', onMove);
      btn.addEventListener('mouseleave', onLeave);
      cleanups.push(() => {
        btn.removeEventListener('mousemove', onMove);
        btn.removeEventListener('mouseleave', onLeave);
      });
    });
    return () => cleanups.forEach(fn => fn());
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSlide(prev => (prev + 1) % testimonials.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [testimonials.length]);

  const Icon = ({ type }) => {
    const cls = "w-5 h-5";
    if (type === 'workspace') {
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="3" y="4" width="8" height="7" rx="2" stroke={accent} strokeWidth="2" />
          <rect x="13" y="4" width="8" height="7" rx="2" stroke={accent} strokeWidth="2" />
          <rect x="3" y="13" width="8" height="7" rx="2" stroke={accent} strokeWidth="2" />
          <rect x="13" y="13" width="8" height="7" rx="2" stroke={accent} strokeWidth="2" />
        </svg>
      );
    }
    if (type === 'collab') {
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM16.5 12a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5ZM3.5 19c0-2.5 2.5-4 4.5-4s4.5 1.5 4.5 4M13 19c.2-1.8 2-3 3.8-3 1.6 0 3.2.8 3.7 2.4" stroke={accent} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }
    if (type === 'remote') {
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <rect x="3" y="5" width="18" height="12" rx="2" stroke={accent} strokeWidth="2" />
          <path d="M8 20h8M12 17v3" stroke={accent} strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    }
    if (type === 'ai') {
      return (
        <svg viewBox="0 0 24 24" fill="none" className={cls}>
          <path d="M12 3v4M12 17v4M4.9 4.9l2.8 2.8M16.3 16.3l2.8 2.8M3 12h4M17 12h4M4.9 19.1l2.8-2.8M16.3 7.7l2.8-2.8" stroke={accent} strokeWidth="2" strokeLinecap="round" />
          <circle cx="12" cy="12" r="3.5" stroke={accent} strokeWidth="2" />
        </svg>
      );
    }
    return (
      <svg viewBox="0 0 24 24" fill="none" className={cls}>
        <circle cx="12" cy="12" r="9" stroke={accent} strokeWidth="2" />
      </svg>
    );
  };

  return (
    <div ref={pageRef} className="page-wrapper bg-white text-slate-900" style={{ backgroundColor: bodyBg, fontFamily: 'Inter, sans-serif' }}>
      <script src="https://cdn.tailwindcss.com"></script>
      <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;700;800&family=Inter:wght@400;500;600;700&display=swap" />
      <script dangerouslySetInnerHTML={{ __html: `
        tailwind.config = {
          theme: {
            extend: {
              colors: {
                brand: '${accent}',
                primary: '${primary}'
              },
              fontFamily: {
                heading: ['"Plus Jakarta Sans"', 'sans-serif'],
                body: ['Inter', 'sans-serif']
              },
              boxShadow: {
                soft: '0 10px 30px rgba(15,23,42,0.08)',
                softxl: '0 20px 60px rgba(15,23,42,0.10)'
              }
            }
          }
        }
      ` }} />
      <style>{`
        body { background:${bodyBg}; font-family:Inter,sans-serif; }
        h1,h2,h3,h4 { font-family:"Plus Jakarta Sans",sans-serif; }
        .gradient-text {
          background: linear-gradient(135deg, ${accent} 0%, ${primary} 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }
        .reveal {
          opacity: 0;
          transform: translateY(40px);
          transition: opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .reveal.visible { opacity: 1; transform: translateY(0); }
        .reveal-left  { opacity: 0; transform: translateX(-50px); transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal-right { opacity: 0; transform: translateX(50px);  transition: opacity 0.7s ease, transform 0.7s ease; }
        .reveal-left.visible, .reveal-right.visible { opacity: 1; transform: translateX(0); }
        .reveal-scale { opacity: 0; transform: scale(0.92); transition: opacity 0.6s ease, transform 0.6s ease; }
        .reveal-scale.visible { opacity: 1; transform: scale(1); }
        .reveal-delay-1 { transition-delay: 0.1s; }
        .reveal-delay-2 { transition-delay: 0.2s; }
        .reveal-delay-3 { transition-delay: 0.3s; }
        .reveal-delay-4 { transition-delay: 0.4s; }
        .stagger-parent .stagger-child {
          opacity: 0;
          transform: translateY(30px);
          transition: opacity 0.5s ease, transform 0.5s ease;
        }
        .stagger-parent.visible .stagger-child:nth-child(1) { opacity: 1; transform: translateY(0); transition-delay: 0s; }
        .stagger-parent.visible .stagger-child:nth-child(2) { opacity: 1; transform: translateY(0); transition-delay: 0.1s; }
        .stagger-parent.visible .stagger-child:nth-child(3) { opacity: 1; transform: translateY(0); transition-delay: 0.2s; }
        .stagger-parent.visible .stagger-child:nth-child(4) { opacity: 1; transform: translateY(0); transition-delay: 0.3s; }
        .stagger-parent.visible .stagger-child:nth-child(5) { opacity: 1; transform: translateY(0); transition-delay: 0.4s; }
        .stagger-parent.visible .stagger-child:nth-child(6) { opacity: 1; transform: translateY(0); transition-delay: 0.5s; }
        .hover-card {
          transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.3s ease;
          cursor: pointer;
        }
        .hover-card:hover {
          transform: translateY(-6px);
          box-shadow: 0 20px 40px rgba(0,0,0,0.15);
        }
        @keyframes pageReveal {
          0% { opacity: 0; transform: translateY(12px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .page-wrapper { animation: pageReveal 0.6s cubic-bezier(0.16, 1, 0.3, 1) both; }
        section { transition: background-color 0.4s ease; }
        .animated-cta {
          background:${accent};
          color:#fff;
          border-radius:12px;
          font-weight:700;
          transition:transform .2s ease, box-shadow .2s ease, background .2s ease;
          box-shadow:0 10px 25px rgba(228,41,43,.22);
        }
        .animated-cta:hover {
          transform:translateY(-2px);
          box-shadow:0 16px 30px rgba(228,41,43,.28);
          background:${primary};
        }
      `}</style>

      <nav className="sticky top-0 z-50 bg-white/90 backdrop-blur-xl border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex items-center justify-between gap-4 py-4">
            <div className="flex items-center min-w-0">
              <span className="font-heading font-extrabold text-xl text-brand">Zoho Workplace</span>
            </div>
            <div className="flex items-center gap-4 sm:gap-6">
              <img
                src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
                height="28px"
                alt="Techjockey"
                className="h-7 w-auto"
              />
              <a
                href="https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software"
                className="animated-cta btn-magnetic px-5 py-3 text-sm capitalize whitespace-nowrap"
              >
                get price
              </a>
            </div>
          </div>
        </div>
      </nav>

      <section className="bg-white relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 right-10 w-72 h-72 rounded-full blur-3xl opacity-20" style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }} />
          <div className="absolute bottom-0 left-0 w-80 h-80 rounded-full blur-3xl opacity-10" style={{ background: `radial-gradient(circle, ${primary} 0%, transparent 70%)` }} />
        </div>
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16 lg:py-24">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="reveal-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-4">Email &amp; Collaboration Suite</p>
              <h1 className="hero-headline font-heading text-5xl lg:text-6xl xl:text-7xl leading-tight font-extrabold text-slate-900">
                Elevate Your Team’s Productivity with <span className="gradient-text">Zoho Workplace</span>
              </h1>
              <p className="hero-sub mt-6 text-lg lg:text-xl text-slate-600 max-w-xl">
                A Complete Email &amp; Collaboration Suite for Enterprises that Facilitates Unified Communication.
              </p>
              <div className="hero-cta mt-8">
                <a
                  href="https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software"
                  className="animated-cta btn-magnetic inline-flex items-center px-7 py-4 text-base capitalize"
                >
                  get price
                </a>
              </div>
              <div className="hero-chips mt-8 flex flex-wrap gap-3">
                {[
                  'All-in-One Unified Workspace',
                  'Seamless Collaboration in Real Time',
                  'Work from Anywhere, Anytime',
                  'AI-Powered Productivity (Zia)',
                ].map((chip, i) => (
                  <div key={chip} className="inline-flex items-center gap-2 rounded-full border border-red-200 bg-red-50 px-4 py-2 text-sm font-medium text-slate-700">
                    <Icon type={i === 0 ? 'workspace' : i === 1 ? 'collab' : i === 2 ? 'remote' : 'ai'} />
                    <span>{chip}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="hero-visual reveal-right min-h-[500px] flex items-center justify-center">
              <div className="relative w-full max-w-2xl">
                <div className="absolute -top-6 -right-6 bg-white rounded-2xl shadow-soft border border-slate-200 p-4 w-44 hover-card">
                  <p className="text-xs font-semibold text-slate-500">Trusted</p>
                  <p className="mt-2 text-2xl font-heading font-extrabold text-slate-900">100,000+</p>
                  <p className="text-xs text-slate-500">Businesses Globally</p>
                </div>
                <div className="absolute -bottom-6 -left-4 bg-white rounded-2xl shadow-soft border border-slate-200 p-4 w-52 hover-card">
                  <p className="text-sm font-semibold text-slate-900">Unified Communication</p>
                  <div className="mt-3 h-2 rounded-full bg-slate-100 overflow-hidden">
                    <div className="h-full rounded-full w-4/5" style={{ backgroundColor: accent }}></div>
                  </div>
                  <p className="mt-2 text-xs text-slate-500">Single integrated platform</p>
                </div>
                <div className="rounded-[28px] bg-gradient-to-br from-white to-slate-50 border border-slate-200 shadow-softxl p-5 lg:p-6">
                  <div className="rounded-2xl border border-slate-200 bg-white p-4 shadow-soft">
                    <div className="flex items-center justify-between mb-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-900">Zoho Workplace</p>
                        <p className="text-xs text-slate-500">Unified workspace</p>
                      </div>
                      <div className="flex gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-200"></span>
                        <span className="w-3 h-3 rounded-full bg-amber-200"></span>
                        <span className="w-3 h-3 rounded-full bg-emerald-200"></span>
                      </div>
                    </div>
                    <div className="grid grid-cols-12 gap-4">
                      <div className="col-span-4 rounded-2xl p-4 text-white" style={{ backgroundColor: accent }}>
                        <p className="text-xs uppercase tracking-wide text-white/80">Mail</p>
                        <p className="mt-8 text-lg font-bold">30-GB</p>
                        <p className="text-xs text-white/80">Mail Storage Per User</p>
                      </div>
                      <div className="col-span-8 space-y-4">
                        <div className="rounded-2xl border border-slate-200 p-4">
                          <div className="flex items-center justify-between">
                            <p className="text-sm font-semibold text-slate-900">Collaboration</p>
                            <span className="text-xs text-slate-500">Live editing</span>
                          </div>
                          <div className="mt-3 grid grid-cols-3 gap-2">
                            <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-600">Documents</div>
                            <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-600">Chat</div>
                            <div className="rounded-xl bg-slate-50 p-3 text-xs text-slate-600">Meetings</div>
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                          <div className="rounded-2xl border border-slate-200 p-4">
                            <p className="text-xs text-slate-500">Anywhere Access</p>
                            <p className="mt-2 text-2xl font-heading font-bold text-slate-900">42.9%</p>
                          </div>
                          <div className="rounded-2xl border border-slate-200 p-4">
                            <p className="text-xs text-slate-500">Secure</p>
                            <p className="mt-2 text-2xl font-heading font-bold text-slate-900">82.9%</p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="mt-4 grid grid-cols-3 gap-3">
                      <div className="rounded-xl bg-slate-50 p-3 text-center text-xs font-medium text-slate-600">Writer</div>
                      <div className="rounded-xl bg-slate-50 p-3 text-center text-xs font-medium text-slate-600">Cliq</div>
                      <div className="rounded-xl bg-slate-50 p-3 text-center text-xs font-medium text-slate-600">WorkDrive</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-3 gap-6 items-center">
            <div className="reveal text-center md:text-left">
              <p className="text-sm uppercase tracking-[0.2em] font-semibold text-brand">Trust</p>
              <p className="mt-2 text-3xl lg:text-4xl font-heading font-extrabold text-slate-900">100,000+</p>
              <p className="text-slate-600">Trusted by 100,000+ Businesses Globally</p>
            </div>
            <div className="reveal reveal-delay-1 bg-white border border-slate-200 rounded-2xl px-6 py-5 shadow-soft text-center">
              <p className="text-sm text-slate-500">Secure</p>
              <p className="mt-1 text-2xl font-heading font-extrabold text-slate-900">82.9%</p>
              <p className="text-sm text-slate-600">reported a secure email experience</p>
            </div>
            <div className="reveal reveal-delay-2 bg-white border border-slate-200 rounded-2xl px-6 py-5 shadow-soft text-center">
              <p className="text-sm text-slate-500">Anywhere Access</p>
              <p className="mt-1 text-2xl font-heading font-extrabold text-slate-900">42.9%</p>
              <p className="text-sm text-slate-600">found it easier to work remotely</p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-start">
            <div className="reveal-left">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">Features</p>
              <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-slate-900">Why Choose <span className="gradient-text">Zoho Workplace?</span></h2>
              <p className="mt-6 text-lg text-slate-600 border-l-4 pl-5" style={{ borderColor: `${accent}33` }}>
                Zoho Workplace brings everything your team needs to collaborate, communicate, and stay productive through a single unified platform.
              </p>
              <div className="mt-8 rounded-3xl border border-slate-200 bg-white shadow-softxl p-6 hover-card">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center shrink-0"><Icon type="workspace" /></div>
                  <div>
                    <h3 className="text-2xl font-heading font-bold text-slate-900">All-in-One Unified Workspace</h3>
                    <p className="mt-2 text-slate-600">
                      Access email, chat, documents, meetings, and storage in a single integrated platform. Reduce app switching and boost productivity.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="reveal-right stagger-parent grid sm:grid-cols-2 gap-5">
              {[
                {
                  title: 'Seamless Collaboration in Real Time',
                  desc: 'Work together on documents, spreadsheets, and presentations with live editing, comments, and built-in communication tools.',
                  icon: 'collab',
                },
                {
                  title: 'Work from Anywhere, Anytime',
                  desc: 'Stay productive on the go. Reply to emails, access presentations, or host a video conference from anywhere effortlessly.',
                  icon: 'remote',
                },
                {
                  title: 'AI-Powered Productivity (Zia)',
                  desc: 'Leverage built-in AI for writing assistance in terms of grammar, readability and writing style while you work on Writer or Sheet.',
                  icon: 'ai',
                },
              ].map((item, idx) => (
                <div key={idx} className={`stagger-child rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover-card ${idx === 2 ? 'sm:col-span-2' : ''}`}>
                  <div className="w-12 h-12 rounded-2xl bg-red-50 flex items-center justify-center mb-4"><Icon type={item.icon} /></div>
                  <h3 className="text-xl font-heading font-bold text-slate-900">{item.title}</h3>
                  <p className="mt-2 text-slate-600">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 relative overflow-hidden border-y border-slate-200">
        <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl opacity-10" style={{ background: `radial-gradient(circle, ${accent} 0%, transparent 70%)` }} />
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div className="reveal-left order-2 lg:order-1">
              <div className="grid sm:grid-cols-2 gap-5">
                {[
                  {
                    title: 'Ideal For Your Business Size',
                    desc: 'Designed for any organization, Zoho Workplace enhances efficiency and teamwork at every scale.',
                  },
                  {
                    title: 'Communicate Effectively',
                    desc: 'Go beyond email and chat, and connect teams with a social intranet using channels, feeds, and groups.',
                  },
                  {
                    title: 'Integrated Business Apps',
                    desc: 'Connect with Zoho and third-party apps to unify workflows, eliminate silos, and streamline processes across your business.',
                  },
                  {
                    title: 'Customizable Workspace',
                    desc: 'Customize settings, layouts, workflows to fit your needs. Also, get a professional, ad-free email service & advanced controls.',
                  },
                ].map((item, i) => (
                  <div key={i} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover-card">
                    <div className="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center mb-4"><Icon type={i % 2 === 0 ? 'workspace' : 'collab'} /></div>
                    <h3 className="text-lg font-heading font-bold text-slate-900">{item.title}</h3>
                    <p className="mt-2 text-slate-600 text-sm">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="reveal-right order-1 lg:order-2">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">Standard Features</p>
              <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-slate-900">Unlock Your Business Growth with <span className="gradient-text">Zoho Workplace</span></h2>
              <p className="mt-6 text-lg text-slate-600 border-l-4 pl-5" style={{ borderColor: `${accent}33` }}>
                Zoho Workplace unifies email, collaboration, and productivity tools to streamline your business operations. Enable smarter teamwork and drive growth with a single platform.
              </p>
              <div className="mt-8 rounded-3xl bg-white border border-slate-200 shadow-softxl p-6">
                <div className="grid grid-cols-2 gap-4">
                  <div className="rounded-2xl p-5" style={{ backgroundColor: `${accent}10` }}>
                    <p className="text-sm font-semibold text-slate-900">Social intranet</p>
                    <p className="mt-2 text-sm text-slate-600">Channels, feeds, and groups</p>
                  </div>
                  <div className="rounded-2xl p-5 bg-slate-50">
                    <p className="text-sm font-semibold text-slate-900">Advanced controls</p>
                    <p className="mt-2 text-sm text-slate-600">Professional, ad-free email service</p>
                  </div>
                  <div className="col-span-2 rounded-2xl border border-slate-200 p-5">
                    <p className="text-sm font-semibold text-slate-900">Connected workflows</p>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {['Zoho', 'Third-party apps', 'Workflows', 'Business operations'].map((t, idx) => (
                        <span key={idx} className="rounded-full bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">{t}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="reveal text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">Additional Features</p>
            <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-slate-900">Integrate with <span className="gradient-text">Popular Apps</span></h2>
            <p className="mt-6 text-lg text-slate-600">
              Connect your Zoho Workplace with other business apps to ensure higher productivity and growth - all within a unified workspace.
            </p>
          </div>
          <div className="mt-12 grid lg:grid-cols-5 sm:grid-cols-2 gap-5 stagger-parent">
            {[
              ['Zoho Apps', 'Zoho Meeting, Zoho Connect, Zoho Mail, Zoho Cliq, Zoho Writer, etc.'],
              ['Analytics', 'Zoho Analytics, Google Analytics'],
              ['Accounting & Finance', 'Zoho Invoice & Zoho Books'],
              ['Automation', 'Zoho Flow, Zapier, viaSocket'],
              ['Business Suites', 'Zoho One, Zoho Workspace'],
            ].map((item, i) => (
              <div key={i} className="stagger-child rounded-3xl border border-slate-200 bg-white p-6 shadow-soft hover-card">
                <div className="w-11 h-11 rounded-2xl bg-red-50 flex items-center justify-center mb-4"><Icon type={i % 2 === 0 ? 'workspace' : 'ai'} /></div>
                <h3 className="text-lg font-heading font-bold text-slate-900">{item[0]}</h3>
                <p className="mt-2 text-sm text-slate-600">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-slate-50 relative overflow-hidden border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">
          <div className="reveal text-center max-w-3xl mx-auto">
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-brand mb-3">Insight</p>
            <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-slate-900">Performance Beyond Limits with <span className="gradient-text">Zoho Workplace</span></h2>
          </div>
          <div className="mt-12 grid md:grid-cols-2 xl:grid-cols-4 gap-6">
            {[
              ['Secure', '82.9% of users reported a secure email experience, ensuring strong data protection, and safe and reliable communication.'],
              ['Anywhere Access', '42.9% of them found it easier to work remotely with Zoho Workplace apps, enabling seamless access from any device, anywhere.'],
              ['Intuitive', '28.6% found Zoho Workplace easy to use, reducing the learning curve. Teams can quickly adapt and work efficiently.'],
              ['Collaborative', '14.3% of them saw improved collaboration, engagement and productivity, helping teams stay aligned and get more done faster.'],
            ].map((item, i) => (
              <div key={i} className="reveal-scale rounded-3xl border border-slate-200 bg-white p-7 shadow-soft hover-card">
                <div className="text-sm font-semibold uppercase tracking-wide text-brand">{item[0]}</div>
                <p className="mt-4 text-slate-600">{item[1]}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="max-w-5xl mx-auto px-6 lg:px-8 py-20">
          <div className="reveal text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-slate-900">Pricing</h2>
          </div>
          <div className="reveal-scale rounded-[32px] border-2 bg-white shadow-softxl p-8 lg:p-10" style={{ borderColor: `${accent}22` }}>
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8">
              <div className="max-w-xl">
                <div className="inline-flex items-center rounded-full bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-700">Highlighted Plan</div>
                <h3 className="mt-5 text-3xl lg:text-4xl font-heading font-extrabold text-slate-900">Zoho Workplace</h3>
                <div className="mt-4 flex items-end gap-3">
                  <span className="text-slate-400 line-through text-lg">(was )</span>
                  <span className="text-4xl font-heading font-extrabold text-slate-900"></span>
                </div>
                <p className="mt-4 text-slate-600">Includes:</p>
              </div>
              <div className="lg:w-60">
                <div className="rounded-3xl p-6 text-white shadow-soft" style={{ backgroundColor: accent }}>
                  <p className="text-sm text-white/80">Plan includes</p>
                  <p className="mt-2 text-2xl font-heading font-extrabold">Enterprise-Grade Custom Email</p>
                </div>
              </div>
            </div>
            <div className="mt-8 grid sm:grid-cols-2 gap-4">
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
                <div key={i} className="flex items-start gap-3 rounded-2xl bg-slate-50 border border-slate-200 p-4">
                  <span className="mt-1 w-5 h-5 rounded-full bg-emerald-100 text-emerald-700 flex items-center justify-center text-xs font-bold">✓</span>
                  <span className="text-slate-700">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-slate-50 border-t border-slate-200">
        <div className="max-w-6xl mx-auto px-6 lg:px-8 py-20">
          <div className="reveal text-center mb-10">
            <h2 className="text-4xl lg:text-5xl font-heading font-extrabold text-slate-900">Testimonials</h2>
          </div>
          <div className="relative reveal">
            <div className="overflow-hidden rounded-[32px]">
              <div
                className="flex"
                style={{
                  transform: `translateX(-${activeSlide * 100}%)`,
                  transition: 'transform 0.6s cubic-bezier(0.4, 0, 0.2, 1)',
                }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="min-w-full">
                    <div className="bg-white border border-slate-200 shadow-softxl rounded-[32px] p-8 lg:p-12 hover-card">
                      <div className="text-5xl leading-none mb-4" style={{ color: accent }}>❝</div>
                      <div className="text-amber-400 text-xl">★★★★★</div>
                      <p className="mt-5 text-xl lg:text-2xl leading-relaxed text-slate-700 max-w-4xl">{t.quote}</p>
                      <div className="mt-8 flex items-center gap-4">
                        <div className="w-14 h-14 rounded-full flex items-center justify-center text-white font-bold" style={{ backgroundColor: accent }}>
                          {t.initials}
                        </div>
                        <div>
                          <p className="font-bold text-slate-900">{t.author}</p>
                          <p className="text-slate-500">{t.role}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-6 flex items-center justify-center gap-3">
              <button
                onClick={() => setActiveSlide(prev => (prev - 1 + testimonials.length) % testimonials.length)}
                className="w-11 h-11 rounded-full border border-slate-300 bg-white text-slate-700 hover:shadow-soft"
                aria-label="Previous testimonial"
              >
                ←
              </button>
              <div className="flex items-center gap-2">
                {testimonials.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setActiveSlide(i)}
                    className={`h-2 rounded-full transition-all ${i === activeSlide ? 'w-8' : 'w-2'}`}
                    style={{ backgroundColor: i === activeSlide ? accent : '#cbd5e1' }}
                    aria-label={`Go to testimonial ${i + 1}`}
                  />
                ))}
              </div>
              <button
                onClick={() => setActiveSlide(prev => (prev + 1) % testimonials.length)}
                className="w-11 h-11 rounded-full border border-slate-300 bg-white text-slate-700 hover:shadow-soft"
                aria-label="Next testimonial"
              >
                →
              </button>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-white border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid md:grid-cols-3 gap-8 items-start">
            <div>
              <img
                src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
                height="28px"
                alt="Techjockey"
                className="h-7 w-auto"
              />
              <p className="mt-4 text-slate-600">support@techjockey.com</p>
            </div>

            <div>
              <p className="text-slate-900 font-semibold">© 2024 Techjockey Infotech Pvt. Ltd.</p>
              <div className="mt-4 flex items-center gap-4 text-sm">
                <a href="#" className="text-slate-600 hover:text-brand">Privacy Policy</a>
                <a href="#" className="text-slate-600 hover:text-brand">Terms</a>
              </div>
            </div>

            <div className="flex md:justify-end gap-3">
              {[
                { label: 'Facebook', path: 'M14 8h3V4h-3c-2.2 0-4 1.8-4 4v2H7v4h3v6h4v-6h3l1-4h-4V8c0-.6.4-1 1-1Z' },
                { label: 'Instagram', path: 'M7 3h10a4 4 0 0 1 4 4v10a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4Zm5 5.5A4.5 4.5 0 1 0 12 17a4.5 4.5 0 0 0 0-9Zm5.25-2.25h.01' },
                { label: 'Twitter', path: 'M22 5.9c-.7.3-1.5.5-2.3.6.8-.5 1.5-1.2 1.8-2.1-.8.5-1.7.8-2.6 1-1.5-1.6-4.2-1.7-5.8-.1-1 .9-1.5 2.3-1.2 3.6-3.2-.2-6.1-1.7-8.1-4.1-1 1.8-.5 4 1.1 5.1-.6 0-1.2-.2-1.8-.5 0 2 1.4 3.8 3.4 4.2-.6.2-1.2.2-1.8.1.6 1.8 2.2 3 4 3.1A8.9 8.9 0 0 1 2 19.5 12.5 12.5 0 0 0 8.8 21c8.2 0 12.9-6.9 12.6-13.1.9-.6 1.6-1.3 2.2-2Z' },
                { label: 'LinkedIn', path: 'M6 9h4v12H6zM8 3.5A2.5 2.5 0 1 1 8 8.5a2.5 2.5 0 0 1 0-5ZM13 9h3.8v1.7h.1c.5-1 1.8-2.1 3.8-2.1 4 0 4.3 2.8 4.3 6.3V21h-4v-5.5c0-1.3 0-3-1.8-3s-2.1 1.4-2.1 2.9V21h-4V9Z' },
              ].map((item, i) => (
                <a key={i} href="#" aria-label={item.label} className="w-10 h-10 rounded-full border border-slate-200 bg-white flex items-center justify-center text-slate-600 hover:text-brand hover:border-red-200 hover:shadow-soft">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
                    <path d={item.path} />
                  </svg>
                </a>
              ))}
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;