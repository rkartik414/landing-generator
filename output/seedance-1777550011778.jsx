import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const audioRef = useRef(null);
  const [audioMuted, setAudioMuted] = useState(true);

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const tryUnmute = () => {
      audio.muted = false;
      audio
        .play()
        .then(() => setAudioMuted(false))
        .catch(() => {
          audio.muted = true;
          setAudioMuted(true);
        });
    };

    const enableOnClick = () => {
      audio.muted = false;
      audio
        .play()
        .then(() => setAudioMuted(false))
        .catch(() => {});
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
    <>
      <audio ref={audioRef} autoPlay loop muted playsInline>
        <source src="https://www.techjockey.com/c/byteplus/assets/video/s_5.mp3" type="audio/mpeg" />
      </audio>

      <div className="bg-black min-h-screen text-white" style={{ backgroundColor: '#000' }}>
        <nav
          style={{
            background: '#111827',
            padding: '16px 24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            position: 'sticky',
            top: 0,
            zIndex: 50,
            borderBottom: '1px solid rgba(255,255,255,0.08)',
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
            <span style={{ fontSize: 18, fontWeight: 700, color: '#fff' }}>Seedream 4.5 and Seedance 1.5 Pro</span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
        </nav>

        <main style={{ padding: '60px 24px 80px', maxWidth: 1200, margin: '0 auto' }}>
          <section style={{ textAlign: 'center', padding: '80px 0' }}>
            <h1
              style={{
                fontSize: 'clamp(36px, 6vw, 72px)',
                lineHeight: 1.1,
                fontWeight: 800,
                marginBottom: 20,
              }}
            >
              Seedream 4.5 and Seedance 1.5 Pro
            </h1>
            <p
              style={{
                maxWidth: 760,
                margin: '0 auto',
                color: 'rgba(255,255,255,0.75)',
                fontSize: 18,
                lineHeight: 1.7,
              }}
            >
              Get best price for Seedream in US along with all features. Read all Seedream reviews and compare with all
              AI Image Generators on Techjockey.
            </p>
            <div style={{ marginTop: 24, color: 'rgba(255,255,255,0.6)', fontSize: 14 }}>
              Audio: {audioMuted ? 'Muted until interaction' : 'Playing'}
            </div>
          </section>
        </main>

        <footer
          style={{
            background: '#111827',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            padding: '40px 24px 24px',
          }}
        >
          <div
            style={{
              maxWidth: 1200,
              margin: '0 auto',
              display: 'flex',
              flexWrap: 'wrap',
              justifyContent: 'space-between',
              gap: 24,
              alignItems: 'flex-start',
            }}
          >
            <div style={{ minWidth: 220 }}>
              <img
                src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
                alt="Techjockey"
                style={{ height: 32, marginBottom: 16 }}
              />
              <div style={{ color: 'rgba(255,255,255,0.75)', marginBottom: 8 }}>support@techjockey.com</div>
            </div>

            <div>
              <div style={{ display: 'flex', gap: 14, marginBottom: 16 }}>
                <a
                  href="#"
                  aria-label="Facebook"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: 16,
                  }}
                >
                  f
                </a>
                <a
                  href="#"
                  aria-label="Twitter"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: 16,
                  }}
                >
                  x
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: 16,
                  }}
                >
                  in
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  style={{
                    width: 36,
                    height: 36,
                    borderRadius: '50%',
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    background: 'rgba(255,255,255,0.08)',
                    color: '#fff',
                    textDecoration: 'none',
                    fontSize: 16,
                  }}
                >
                  ig
                </a>
              </div>

              <div style={{ display: 'flex', gap: 16, flexWrap: 'wrap' }}>
                <a href="#" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                  Privacy Policy
                </a>
                <a href="#" style={{ color: 'rgba(255,255,255,0.75)', textDecoration: 'none' }}>
                  Terms
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              maxWidth: 1200,
              margin: '24px auto 0',
              paddingTop: 20,
              borderTop: '1px solid rgba(255,255,255,0.08)',
              color: 'rgba(255,255,255,0.6)',
              fontSize: 14,
            }}
          >
            © 2024 Techjockey Infotech Pvt. Ltd.
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;