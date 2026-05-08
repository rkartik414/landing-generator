import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const audioRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

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
      audio
        .play()
        .then(() => setIsMuted(false))
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
      <div className="bg-black min-vh-100" style={{ backgroundColor: '#000' }}>
        <audio ref={audioRef} autoPlay loop muted={isMuted} playsInline>
          <source
            src="https://www.techjockey.com/c/byteplus/assets/video/s_5.mp3"
            type="audio/mpeg"
          />
        </audio>

        <nav
          className="d-flex align-items-center justify-content-between px-4 py-3"
          style={{
            backgroundColor: '#111827',
            borderBottom: '1px solid rgba(255,255,255,0.08)',
            position: 'sticky',
            top: 0,
            zIndex: 50,
          }}
        >
          <div className="d-flex align-items-center gap-3">
            <span
              style={{
                color: '#fff',
                fontSize: '1.1rem',
                fontWeight: 700,
                letterSpacing: '0.02em',
              }}
            >
              Seedream 4.5 and Seedance 1.5 Pro by ByteDance
            </span>
          </div>

          <div className="d-flex align-items-center">
            <img
              src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
              height="28px"
              alt="Techjockey"
            />
          </div>
        </nav>

        <main style={{ minHeight: '60vh' }}>
          <section className="container py-5">
            <div
              className="rounded-4 p-4 p-md-5"
              style={{
                background:
                  'linear-gradient(180deg, rgba(17,24,39,0.95) 0%, rgba(0,0,0,0.95) 100%)',
                border: '1px solid rgba(255,255,255,0.08)',
                color: '#fff',
              }}
            >
              <h1
                style={{
                  fontSize: '2.2rem',
                  lineHeight: 1.2,
                  marginBottom: '1rem',
                  fontWeight: 800,
                }}
              >
                Seedream 4.5 and Seedance 1.5 Pro by ByteDance
              </h1>
              <p
                style={{
                  color: 'rgba(255,255,255,0.8)',
                  marginBottom: 0,
                  maxWidth: 800,
                }}
              >
                Get best price for Seedream in US along with all features. Read all
                Seedream reviews and compare with all AI Image Generators on
                Techjockey.
              </p>
            </div>
          </section>
        </main>

        <footer
          style={{
            backgroundColor: '#111827',
            borderTop: '1px solid rgba(255,255,255,0.08)',
            color: '#fff',
          }}
        >
          <div className="container py-5">
            <div className="row gy-4 align-items-start">
              <div className="col-md-4">
                <img
                  src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
                  alt="Techjockey"
                  style={{ height: 32, marginBottom: 16 }}
                />
                <div style={{ color: 'rgba(255,255,255,0.8)' }}>
                  support@techjockey.com
                </div>
              </div>

              <div className="col-md-4">
                <div
                  style={{
                    fontWeight: 600,
                    marginBottom: 12,
                  }}
                >
                  Follow Us
                </div>
                <div className="d-flex gap-3">
                  <a
                    href="#"
                    aria-label="Facebook"
                    style={{ color: '#fff', textDecoration: 'none' }}
                  >
                    <i className="fab fa-facebook-f" />
                    <span style={{ marginLeft: 6 }}>Facebook</span>
                  </a>
                  <a
                    href="#"
                    aria-label="Twitter"
                    style={{ color: '#fff', textDecoration: 'none' }}
                  >
                    <i className="fab fa-twitter" />
                    <span style={{ marginLeft: 6 }}>Twitter</span>
                  </a>
                  <a
                    href="#"
                    aria-label="LinkedIn"
                    style={{ color: '#fff', textDecoration: 'none' }}
                  >
                    <i className="fab fa-linkedin-in" />
                    <span style={{ marginLeft: 6 }}>LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="col-md-4">
                <div className="d-flex flex-column gap-2">
                  <a
                    href="#"
                    style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}
                  >
                    Privacy Policy
                  </a>
                  <a
                    href="#"
                    style={{ color: 'rgba(255,255,255,0.85)', textDecoration: 'none' }}
                  >
                    Terms
                  </a>
                </div>
              </div>
            </div>

            <div
              className="mt-4 pt-4"
              style={{ borderTop: '1px solid rgba(255,255,255,0.08)' }}
            >
              <div style={{ color: 'rgba(255,255,255,0.7)' }}>
                © 2024 Techjockey Infotech Pvt. Ltd.
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default LandingPage;