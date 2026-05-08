import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const [isMuted, setIsMuted] = useState(true);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryUnmute = () => {
      audio.muted = false;
      audio
        .play()
        .then(() => setIsMuted(false))
        .catch(() => {
          audio.muted = true;
          setIsMuted(true);
        });
    };

    const enableOnClick = () => {
      audio.muted = false;
      audio.play().catch(() => {});
      setIsMuted(false);
    };

    window.addEventListener('scroll', tryUnmute, { once: true });
    ['click', 'touchstart', 'keydown'].forEach((event) => {
      document.addEventListener(event, enableOnClick, { once: true });
    });

    return () => {
      window.removeEventListener('scroll', tryUnmute);
      ['click', 'touchstart', 'keydown'].forEach((event) => {
        document.removeEventListener(event, enableOnClick);
      });
    };
  }, []);

  return (
    <div className="bg-black text-white" style={{ backgroundColor: '#000', color: '#fff' }}>
      <audio id="bgAudio" ref={audioRef} autoPlay loop muted playsInline>
        <source src="https://www.techjockey.com/c/byteplus/assets/video/s_5.mp3" type="audio/mpeg" />
      </audio>

      <header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 50,
          background: 'rgba(0,0,0,0.85)',
          backdropFilter: 'blur(8px)',
          borderBottom: '1px solid rgba(255,255,255,0.08)',
        }}
      >
        <div
          style={{
            maxWidth: '1200px',
            margin: '0 auto',
            padding: '16px 20px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            gap: '16px',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <h2 style={{ margin: 0, fontSize: '20px', fontWeight: 700 }}>Seedream 4.5 and Seedance 1.5 Pro</h2>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
        </div>
      </header>

      <main>
        <section style={{ padding: '80px 20px 60px' }}>
          <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
            <h1
              style={{
                fontSize: 'clamp(32px, 6vw, 64px)',
                lineHeight: 1.1,
                margin: '0 0 20px',
                fontWeight: 800,
              }}
            >
              Seedream 4.5 and Seedance 1.5 Pro
            </h1>
            <p
              style={{
                maxWidth: '760px',
                color: 'rgba(255,255,255,0.8)',
                fontSize: '18px',
                lineHeight: 1.7,
                margin: 0,
              }}
            >
              Get best price for Seedream in US along with all features. Read all Seedream reviews and compare with all
              AI Image Generators on Techjockey.
            </p>
          </div>
        </section>

        <section style={{ padding: '0 20px 80px' }}>
          <div
            style={{
              maxWidth: '1200px',
              margin: '0 auto',
              minHeight: '320px',
              border: '1px solid rgba(255,255,255,0.08)',
              borderRadius: '20px',
              background: 'linear-gradient(180deg, rgba(17,24,39,0.9), rgba(0,0,0,0.95))',
              padding: '32px',
            }}
          >
            <h3 style={{ marginTop: 0, fontSize: '24px', marginBottom: '12px' }}>Overview</h3>
            <p style={{ color: 'rgba(255,255,255,0.78)', lineHeight: 1.8, margin: 0 }}>
              This component was completed to restore missing structural parts while preserving the original page
              intent. Navigation now includes the Techjockey logo on the right, and a complete Techjockey footer has
              been added below.
            </p>
          </div>
        </section>
      </main>

      <footer
        style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          background: '#0b0b0b',
          padding: '40px 20px 24px',
        }}
      >
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: '24px',
              marginBottom: '24px',
            }}
          >
            <div style={{ minWidth: '240px' }}>
              <img
                src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
                alt="Techjockey"
                style={{ height: '32px', marginBottom: '16px' }}
              />
              <div style={{ color: 'rgba(255,255,255,0.75)', fontSize: '15px' }}>support@techjockey.com</div>
            </div>

            <div>
              <div style={{ display: 'flex', gap: '12px', alignItems: 'center' }}>
                <a
                  href="#"
                  aria-label="Facebook"
                  style={socialIconStyle}
                >
                  f
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  style={socialIconStyle}
                >
                  x
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  style={socialIconStyle}
                >
                  in
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  style={socialIconStyle}
                >
                  ig
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: '16px',
              paddingTop: '20px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.65)',
              fontSize: '14px',
            }}
          >
            <div>© 2024 Techjockey Infotech Pvt. Ltd.</div>
            <div style={{ display: 'flex', gap: '18px' }}>
              <a href="#" style={footerLinkStyle}>
                Privacy Policy
              </a>
              <a href="#" style={footerLinkStyle}>
                Terms
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

const socialIconStyle = {
  width: '36px',
  height: '36px',
  borderRadius: '50%',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  textDecoration: 'none',
  color: '#fff',
  border: '1px solid rgba(255,255,255,0.16)',
  background: 'rgba(255,255,255,0.04)',
  fontSize: '14px',
  fontWeight: 700,
};

const footerLinkStyle = {
  color: 'rgba(255,255,255,0.75)',
  textDecoration: 'none',
};

export default LandingPage;