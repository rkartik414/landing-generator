// training-data/animations.js
// Cinematic 3D scroll animation system — GSAP ScrollTrigger based

const ANIMATION_PROFILES = {

  // ── Which categories get which intensity ────────────────────────────────
  categoryMap: {
    'ai':            'cinematic',
    'video':         'cinematic',
    'creative':      'cinematic',
    'gaming':        'cinematic',
    'security':      'dramatic',
    'fintech':       'dramatic',
    'enterprise':    'dramatic',
    'hr':            'editorial',
    'lms':           'editorial',
    'productivity':  'editorial',
    'healthcare':    'editorial',
    'ecommerce':     'energetic',
    'default':       'dramatic'
  },

  // ── CINEMATIC — full 3D scroll experience ───────────────────────────────
  cinematic: {
    gsapRequired: true,
    intensity: 'bold',

    cdnLoaders: `
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/SplitText.min.js"></script>
`,

    css: `
/* ── CINEMATIC SYSTEM ──────────────────────────────────────────────── */

/* Scene expand — image grows from contained → full-width on scroll */
.scene-expand {
  width: 75%;
  margin: 0 auto;
  border-radius: 24px;
  overflow: hidden;
  will-change: width, border-radius;
}
.scene-expand img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transform: scale(1.08);
  will-change: transform;
}

/* Zoom reveal — scale down into position on scroll enter */
.zoom-reveal {
  overflow: hidden;
  border-radius: 16px;
}
.zoom-reveal img, .zoom-reveal video {
  transform: scale(1.15);
  will-change: transform;
  transition: transform 0s; /* GSAP controls this */
}

/* Parallax depth layers */
[data-depth] { will-change: transform; }
.depth-foreground { position: relative; z-index: 3; }
.depth-midground  { position: relative; z-index: 2; }
.depth-background { position: absolute; inset: 0; z-index: 1; }

/* Layered 3D card stack */
.card-3d-stack {
  position: relative;
  transform-style: preserve-3d;
  perspective: 1000px;
}
.card-3d-stack > *:nth-child(1) { transform: translateZ(40px) translateY(0px); }
.card-3d-stack > *:nth-child(2) { transform: translateZ(20px) translateY(12px) scale(0.97); opacity: 0.8; }
.card-3d-stack > *:nth-child(3) { transform: translateZ(0px)  translateY(24px) scale(0.94); opacity: 0.5; }

/* Clip-path reveal — section slides up from masked */
.clip-reveal {
  clip-path: inset(100% 0 0 0);
  will-change: clip-path;
}

/* Hero cinematic — image starts slightly zoomed, breathes */
.hero-cinematic-bg {
  transform: scale(1.06);
  transform-origin: center center;
  will-change: transform;
}

/* Ambient float — idle motion for hero elements */
@keyframes floatY {
  0%, 100% { transform: translateY(0px); }
  50%       { transform: translateY(-14px); }
}
@keyframes floatRotate {
  0%, 100% { transform: translateY(0px) rotate(0deg); }
  50%       { transform: translateY(-8px) rotate(2deg); }
}
@keyframes ambientPulse {
  0%, 100% { opacity: 0.6; transform: scale(1); }
  50%       { opacity: 1;   transform: scale(1.04); }
}
@keyframes driftLeft {
  0%, 100% { transform: translateX(0px) translateY(0px); }
  33%       { transform: translateX(-12px) translateY(-8px); }
  66%       { transform: translateX(8px) translateY(-14px); }
}

.float-ambient       { animation: floatY 6s ease-in-out infinite; }
.float-rotate        { animation: floatRotate 8s ease-in-out infinite; }
.float-pulse         { animation: ambientPulse 4s ease-in-out infinite; }
.float-drift         { animation: driftLeft 10s ease-in-out infinite; }
.float-delay-1       { animation-delay: -2s; }
.float-delay-2       { animation-delay: -4s; }
.float-delay-3       { animation-delay: -1s; }

/* Smooth stagger children */
.stagger-parent > * {
  opacity: 0;
  transform: translateY(32px);
  will-change: opacity, transform;
}

/* Text split — each word animates */
.split-text .word {
  display: inline-block;
  overflow: hidden;
}
.split-text .char {
  display: inline-block;
  will-change: transform, opacity;
}

/* Horizontal scroll section */
.h-scroll-track {
  display: flex;
  gap: 24px;
  will-change: transform;
}

/* Magnetic button */
.btn-magnetic {
  position: relative;
  transition: transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);
  display: inline-block;
}

/* Gradient text reveal */
.text-reveal-mask {
  overflow: hidden;
  display: block;
}
.text-reveal-inner {
  display: block;
  transform: translateY(110%);
  will-change: transform;
}

/* Cursor glow */
.cursor-glow {
  position: fixed;
  width: 400px;
  height: 400px;
  border-radius: 50%;
  pointer-events: none;
  z-index: 9999;
  transform: translate(-50%, -50%);
  background: radial-gradient(circle, var(--accent-glow, rgba(99,102,241,0.12)) 0%, transparent 70%);
  transition: opacity 0.3s ease;
}

/* Section transition overlap */
.section-overlap {
  margin-top: -80px;
  position: relative;
  z-index: 2;
}

/* Frosted glass card */
.glass-card {
  background: rgba(255,255,255,0.06);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  border: 1px solid rgba(255,255,255,0.1);
  border-radius: 20px;
}

/* Noise overlay */
.noise-overlay::after {
  content: '';
  position: absolute;
  inset: 0;
  background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.04'/%3E%3C/svg%3E");
  pointer-events: none;
  opacity: 0.4;
  z-index: 1;
}
`,

    js: `
// ── CINEMATIC SCROLL SYSTEM ─────────────────────────────────────────
const initCinematic = () => {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  // ── Cursor glow ──────────────────────────────────────────────────
  const glow = document.createElement('div');
  glow.className = 'cursor-glow';
  document.body.appendChild(glow);
  window.addEventListener('mousemove', e => {
    gsap.to(glow, { x: e.clientX, y: e.clientY, duration: 0.6, ease: 'power2.out' });
  });

  // ── Scene expand — image grows to full-width on scroll ───────────
  gsap.utils.toArray('.scene-expand').forEach(scene => {
    gsap.to(scene, {
      width: '100%',
      borderRadius: '0px',
      ease: 'none',
      scrollTrigger: {
        trigger: scene,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1.2
      }
    });
    gsap.to(scene.querySelector('img, video'), {
      scale: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: scene,
        start: 'top 80%',
        end: 'top 20%',
        scrub: 1.2
      }
    });
  });

  // ── Zoom reveal — scale down into view ──────────────────────────
  gsap.utils.toArray('.zoom-reveal').forEach(el => {
    const img = el.querySelector('img, video');
    if (!img) return;
    gsap.to(img, {
      scale: 1,
      ease: 'power2.out',
      duration: 1.2,
      scrollTrigger: {
        trigger: el,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // ── Parallax depth layers ────────────────────────────────────────
  gsap.utils.toArray('[data-depth]').forEach(el => {
    const depth = parseFloat(el.dataset.depth) || 0.3;
    gsap.to(el, {
      y: () => -(window.innerHeight * depth * 0.6),
      ease: 'none',
      scrollTrigger: {
        trigger: el.closest('section') || el,
        start: 'top bottom',
        end: 'bottom top',
        scrub: true
      }
    });
  });

  // ── Hero cinematic — slow zoom out from 106% to 100% ────────────
  const heroBg = document.querySelector('.hero-cinematic-bg');
  if (heroBg) {
    gsap.to(heroBg, {
      scale: 1,
      ease: 'none',
      scrollTrigger: {
        trigger: heroBg.closest('section'),
        start: 'top top',
        end: 'bottom top',
        scrub: 2
      }
    });
  }

  // ── Clip-path section reveals ────────────────────────────────────
  gsap.utils.toArray('.clip-reveal').forEach(el => {
    gsap.to(el, {
      clipPath: 'inset(0% 0 0 0)',
      ease: 'power3.out',
      duration: 1.1,
      scrollTrigger: {
        trigger: el,
        start: 'top 80%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // ── Stagger children ─────────────────────────────────────────────
  gsap.utils.toArray('.stagger-parent').forEach(parent => {
    gsap.to(parent.children, {
      opacity: 1,
      y: 0,
      duration: 0.8,
      stagger: 0.12,
      ease: 'power3.out',
      scrollTrigger: {
        trigger: parent,
        start: 'top 80%',
        toggleActions: 'play none none none'
      }
    });
  });

  // ── Text split reveal — headline chars animate in ────────────────
  gsap.utils.toArray('.split-text').forEach(el => {
    const text = el.textContent;
    el.innerHTML = text.split('').map(char =>
      char === ' ' ? ' ' : \`<span class="char" style="display:inline-block;will-change:transform,opacity">\${char}</span>\`
    ).join('');
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
        toggleActions: 'play none none none'
      }
    });
  });

  // ── Text reveal mask — lines slide up from hidden ────────────────
  gsap.utils.toArray('.text-reveal-mask').forEach(mask => {
    const inner = mask.querySelector('.text-reveal-inner');
    if (!inner) return;
    gsap.to(inner, {
      y: '0%',
      duration: 1.0,
      ease: 'power4.out',
      scrollTrigger: {
        trigger: mask,
        start: 'top 85%',
        toggleActions: 'play none none reverse'
      }
    });
  });

  // ── Horizontal scroll track ──────────────────────────────────────
  const hTrack = document.querySelector('.h-scroll-track');
  if (hTrack) {
    const trackWidth = hTrack.scrollWidth - hTrack.closest('section').offsetWidth;
    gsap.to(hTrack, {
      x: -trackWidth,
      ease: 'none',
      scrollTrigger: {
        trigger: hTrack.closest('section'),
        start: 'top top',
        end: () => '+=' + (trackWidth + window.innerHeight),
        pin: true,
        scrub: 1,
        anticipatePin: 1
      }
    });
  }

  // ── Magnetic buttons ─────────────────────────────────────────────
  document.querySelectorAll('.btn-magnetic').forEach(btn => {
    btn.addEventListener('mousemove', e => {
      const rect = btn.getBoundingClientRect();
      const x = (e.clientX - rect.left - rect.width / 2) * 0.35;
      const y = (e.clientY - rect.top - rect.height / 2) * 0.35;
      gsap.to(btn, { x, y, duration: 0.4, ease: 'power2.out' });
    });
    btn.addEventListener('mouseleave', () => {
      gsap.to(btn, { x: 0, y: 0, duration: 0.6, ease: 'elastic.out(1, 0.4)' });
    });
  });

  // ── Section pinning — cinematic scene hold ───────────────────────
  gsap.utils.toArray('.pin-scene').forEach(scene => {
    ScrollTrigger.create({
      trigger: scene,
      start: 'top top',
      end: '+=600',
      pin: true,
      pinSpacing: true
    });
  });

  // ── Counter animation ────────────────────────────────────────────
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
      onUpdate: function() { el.textContent = prefix + Math.round(this.targets()[0].val).toLocaleString() + suffix; }
    });
  });
};

// Double RAF — ensures React DOM is committed before GSAP queries
requestAnimationFrame(() => requestAnimationFrame(initCinematic));
`
  },

  // ── DRAMATIC — strong but controlled ────────────────────────────────────
  dramatic: {
    gsapRequired: true,
    intensity: 'moderate',
    cdnLoaders: `
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
`,
    css: `
.zoom-reveal { overflow: hidden; }
.zoom-reveal img, .zoom-reveal video { transform: scale(1.1); will-change: transform; }
[data-depth] { will-change: transform; }
.float-ambient { animation: floatY 6s ease-in-out infinite; }
@keyframes floatY { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
.stagger-parent > * { opacity: 0; transform: translateY(24px); }
.glass-card {
  background: rgba(255,255,255,0.05);
  backdrop-filter: blur(16px);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
}
`,
    js: `
const initDramatic = () => {
  if (!window.gsap || !window.ScrollTrigger) return;
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.zoom-reveal').forEach(el => {
    const img = el.querySelector('img,video');
    if (img) gsap.to(img, { scale: 1, duration: 1.2, ease: 'power2.out',
      scrollTrigger: { trigger: el, start: 'top 85%', toggleActions: 'play none none reverse' }
    });
  });

  gsap.utils.toArray('[data-depth]').forEach(el => {
    gsap.to(el, { y: () => -(window.innerHeight * (parseFloat(el.dataset.depth)||0.2) * 0.5),
      ease: 'none',
      scrollTrigger: { trigger: el.closest('section')||el, start: 'top bottom', end: 'bottom top', scrub: true }
    });
  });

  gsap.utils.toArray('.stagger-parent').forEach(p => {
    gsap.to(p.children, { opacity: 1, y: 0, duration: 0.7, stagger: 0.1, ease: 'power3.out',
      scrollTrigger: { trigger: p, start: 'top 80%' }
    });
  });
};
requestAnimationFrame(() => requestAnimationFrame(initDramatic));
`
  },

  // ── EDITORIAL — clean, subtle, professional ──────────────────────────────
  editorial: {
    gsapRequired: false,
    intensity: 'subtle',
    cdnLoaders: '',
    css: `
.reveal { opacity: 0; transform: translateY(28px); transition: opacity 0.7s ease, transform 0.7s ease; }
.reveal.visible { opacity: 1; transform: translateY(0); }
.reveal-delay-1 { transition-delay: 0.1s; }
.reveal-delay-2 { transition-delay: 0.2s; }
.reveal-delay-3 { transition-delay: 0.3s; }
.hover-lift { transition: transform 0.35s cubic-bezier(0.34,1.56,0.64,1), box-shadow 0.35s ease; }
.hover-lift:hover { transform: translateY(-6px); box-shadow: 0 20px 40px rgba(0,0,0,0.12); }
`,
    js: `
const obs = new IntersectionObserver(entries => entries.forEach(e => {
  if (e.isIntersecting) e.target.classList.add('visible');
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(el => obs.observe(el));
`
  }
};

function getProfileForCategory(category) {
  const cat = (category || '').toLowerCase();
  for (const [key, profile] of Object.entries(ANIMATION_PROFILES.categoryMap)) {
    if (cat.includes(key)) return profile;
  }
  return ANIMATION_PROFILES.categoryMap.default;
}

function buildAnimationBlock(themeFamily, productCategory) {
  const profileName = getProfileForCategory(productCategory) || 
    (themeFamily === 'cinematic-ai' ? 'cinematic' : 
     themeFamily === 'editorial-b2b' ? 'editorial' : 'dramatic');
  
  const profile = ANIMATION_PROFILES[profileName] || ANIMATION_PROFILES.dramatic;
  
  return {
    profileName,
    gsapRequired: profile.gsapRequired,
    intensity: profile.intensity,
    cdnLoaders: profile.cdnLoaders || '',
    css: profile.css,
    js: profile.js
  };
}

module.exports = { buildAnimationBlock, getProfileForCategory, ANIMATION_PROFILES };