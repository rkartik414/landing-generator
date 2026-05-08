import React, { useState, useEffect, useRef } from 'react';

const LandingPage = () => {
  const [isMobile, setIsMobile] = useState(false);
  const headerRef = useRef(null);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ fontFamily: 'Arial, sans-serif', color: '#111827', background: '#fff' }}>
      <header
        ref={headerRef}
        className="main_header"
        style={{
          borderBottom: '1px solid #e5e7eb',
          background: '#fff',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <div
          className="container"
          style={{
            maxWidth: 1200,
            margin: '0 auto',
            padding: '16px 20px',
          }}
        >
          <div
            className="header"
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 16,
            }}
          >
            <div
              className="logo"
              style={{ display: 'flex', alignItems: 'center', gap: 12 }}
            >
              <span className="logo1">
                <img
                  src="https://www.techjockey.com/c/zoho_workplace/assets/images/logo/logo_1.png"
                  alt="logo"
                  style={{ height: 40, objectFit: 'contain' }}
                />
              </span>
              {!isMobile && (
                <span className="logo2">
                  <img
                    src="https://www.techjockey.com/c/zoho_workplace/assets/images/logo/logo_1.png"
                    alt="logo"
                    style={{ height: 40, objectFit: 'contain' }}
                  />
                </span>
              )}
            </div>

            <div
              className="nav-right"
              style={{ display: 'flex', alignItems: 'center', gap: 12 }}
            >
              <div className="btn">
                <a
                  className="primary_btn gaEvent"
                  href="https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software"
                  style={{
                    display: 'inline-flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '10px 18px',
                    background: '#111827',
                    color: '#fff',
                    textDecoration: 'none',
                    borderRadius: 8,
                    fontWeight: 600,
                  }}
                >
                  Get Started
                </a>
              </div>
              <img
                src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
                height="28px"
                alt="Techjockey"
                style={{ height: 28 }}
              />
            </div>
          </div>
        </div>
      </header>

      <section className="section1" style={{ padding: '64px 20px' }}>
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            className="banner-row"
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1.1fr 0.9fr',
              alignItems: 'center',
              gap: 40,
            }}
          >
            <div className="banner-text">
              <div className="banner_text">
                <h1
                  className="text"
                  style={{
                    fontSize: isMobile ? 34 : 52,
                    lineHeight: 1.1,
                    margin: '0 0 16px',
                    fontWeight: 700,
                    color: '#111827',
                  }}
                >
                  Elevate Your Team’s Productivity with Zoho Workplace
                </h1>
                <p
                  className="text_1"
                  style={{
                    fontSize: 18,
                    lineHeight: 1.6,
                    color: '#4b5563',
                    margin: '0 0 24px',
                  }}
                >
                  A Complete Email &amp; Collaboration Suite for Enterprises that
                  Facilitates Unified Communication.
                </p>

                <ul
                  className="banner_list"
                  style={{
                    listStyle: 'none',
                    padding: 0,
                    margin: 0,
                    display: 'grid',
                    gap: 16,
                  }}
                >
                  <li
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      color: '#111827',
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 26 26" fill="none">
                      <path d="M13.0006 26C12.5352 26.0007 12.0743 25.9095 11.6442 25.7316C11.2142 25.5537 10.8235 25.2927 10.4945 24.9635L9.17494 23.6428C9.01473 23.4817 8.82417 23.354 8.61428 23.267C8.40439 23.18 8.17933 23.1355 7.95213 23.1361H6.40638C5.46679 23.1351 4.56596 22.7614 3.90157 22.0971C3.23717 21.4327 2.8635 20.532 2.86254 19.5924V18.048C2.86324 17.8209 2.81892 17.5959 2.73214 17.386C2.64536 17.1761 2.51785 16.9855 2.35696 16.8252L1.03618 15.5058C0.372635 14.8406 0 13.9394 0 12.9998C0 12.0603 0.372635 11.1591 1.03618 10.4939L2.35696 9.17439C2.51807 9.01419 2.64581 8.82364 2.73279 8.61376C2.81978 8.40388 2.86429 8.17884 2.86374 7.95165V6.406C2.86471 5.46646 3.23838 4.56568 3.90278 3.90133C4.56717 3.23698 5.468 2.86332 6.40759 2.86236H7.95213C8.17925 2.86307 8.40425 2.81875 8.61414 2.73198C8.82403 2.6452 9.01463 2.5177 9.17494 2.35682L10.4945 1.03612C11.1598 0.372613 12.061 0 13.0006 0C13.9402 0 14.8415 0.372613 15.5067 1.03612L16.8263 2.35682C16.9865 2.51791 17.177 2.64565 17.3869 2.73263C17.5968 2.81961 17.8219 2.86412 18.0491 2.86357H19.5948C20.5344 2.86453 21.4352 3.23819 22.0996 3.90254C22.764 4.56689 23.1377 5.46767 23.1387 6.40721V7.95165C23.138 8.17875 23.1823 8.40374 23.2691 8.61362C23.3558 8.82349 23.4834 9.01409 23.6442 9.17439L24.9638 10.4939C25.6274 11.1591 26 12.0603 26 12.9998C26 13.9394 25.6274 14.8406 24.9638 15.5058L23.6442 16.8252C23.4831 16.9854 23.3554 17.176 23.2684 17.3859C23.1814 17.5958 23.1369 17.8208 23.1375 18.048V19.5936C23.1365 20.5332 22.7628 21.434 22.0984 22.0983C21.434 22.7627 20.5332 23.1363 19.5936 23.1373H18.0491C17.8219 23.1367 17.5968 23.1812 17.3869 23.2682C17.177 23.3552 16.9865 23.4829 16.8263 23.644L15.5067 24.9635C15.1778 25.2927 14.7871 25.5537 14.357 25.7316C13.9269 25.9095 13.466 26.0007 13.0006 26ZM6.40638 4.67651C5.94777 4.67683 5.50802 4.85915 5.18373 5.18342C4.85944 5.50769 4.67711 5.94741 4.67679 6.406V7.95165C4.67847 8.41774 4.58749 8.87951 4.40912 9.31012C4.23076 9.74074 3.96859 10.1316 3.63783 10.46L2.31947 11.7783C1.99538 12.1032 1.81337 12.5433 1.81337 13.0022C1.81337 13.4611 1.99538 13.9013 2.31947 14.2262L3.63783 15.5445C3.96829 15.8726 4.23031 16.2631 4.40866 16.6932C4.58701 17.1234 4.67815 17.5847 4.67679 18.0504V19.5961C4.67711 20.0546 4.85944 20.4944 5.18373 20.8186C5.50802 21.1429 5.94777 21.3252 6.40638 21.3255H7.95213C8.4178 21.3245 8.87906 21.4157 9.30923 21.594C9.73939 21.7724 10.1299 22.0342 10.4582 22.3644L11.7766 23.6827C12.1015 24.0068 12.5417 24.1888 13.0006 24.1888C13.4595 24.1888 13.8997 24.0068 14.2246 23.6827L15.543 22.3644C15.8713 22.0342 16.2618 21.7724 16.692 21.594C17.1221 21.4157 17.5834 21.3245 18.0491 21.3255H19.5948C20.0534 21.3252 20.4932 21.1429 20.8175 20.8186C21.1418 20.4944 21.3241 20.0546 21.3244 19.5961V18.048C21.3231 17.5823 21.4142 17.121 21.5926 16.6908C21.7709 16.2606 22.0329 15.8702 22.3634 15.542L23.6817 14.2238C24.0058 13.8989 24.1878 13.4587 24.1878 12.9998C24.1878 12.5409 24.0058 12.1008 23.6817 11.7759L22.3634 10.46C22.0331 10.1317 21.7713 9.74122 21.5929 9.31108C21.4146 8.88094 21.3233 8.41971 21.3244 7.95407V6.406C21.3241 5.94741 21.1418 5.50769 20.8175 5.18342C20.4932 4.85915 20.0534 4.67683 19.5948 4.67651H18.0491C17.583 4.67819 17.1212 4.58721 16.6905 4.40886C16.2599 4.23051 15.869 3.96835 15.5406 3.63761L14.2222 2.31933C13.8973 1.99525 13.4571 1.81326 12.9982 1.81326C12.5393 1.81326 12.0991 1.99525 11.7742 2.31933L10.4606 3.63761C10.1325 3.96805 9.742 4.23005 9.3118 4.40839C8.8816 4.58673 8.42026 4.67787 7.95455 4.67651H6.40638Z" fill="#FA0011"></path>
                      <path d="M11.66 17C11.528 17.0003 11.3972 16.9756 11.2753 16.9274C11.1534 16.8792 11.0427 16.8083 10.9498 16.719L8.26974 14.1649C8.09221 13.9833 7.99556 13.7432 8.00016 13.495C8.00475 13.2469 8.11023 13.0102 8.29436 12.8347C8.4785 12.6592 8.72692 12.5587 8.98729 12.5543C9.24765 12.5499 9.49964 12.642 9.69015 12.8112L11.66 14.6872L16.3098 10.2571C16.5004 10.0879 16.7523 9.99577 17.0127 10.0001C17.2731 10.0045 17.5215 10.105 17.7056 10.2805C17.8898 10.456 17.9952 10.6928 17.9998 10.9409C18.0044 11.189 17.9078 11.4292 17.7303 11.6108L12.3702 16.719C12.2772 16.8083 12.1666 16.8792 12.0447 16.9274C11.9227 16.9756 11.792 17.0003 11.66 17Z" fill="#FA0011"></path>
                    </svg>
                    Easy Setup &amp; Quick Onboarding
                  </li>

                  <li
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: 12,
                      color: '#111827',
                      fontSize: 16,
                      fontWeight: 500,
                    }}
                  >
                    <span
                      style={{
                        width: 26,
                        height: 26,
                        borderRadius: '50%',
                        background: '#fee2e2',
                        color: '#dc2626',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        fontWeight: 700,
                        flexShrink: 0,
                      }}
                    >
                      ✓
                    </span>
                    Unified Email &amp; Collaboration Experience
                  </li>
                </ul>

                <div style={{ marginTop: 28 }}>
                  <a
                    href="https://www.zoho.com/en-in/workplace/?utm_source=techjockey&utm_medium=cpc&utm_campaign=productivity-software"
                    style={{
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      padding: '12px 22px',
                      background: '#111827',
                      color: '#fff',
                      textDecoration: 'none',
                      borderRadius: 8,
                      fontWeight: 600,
                    }}
                  >
                    Get Started
                  </a>
                </div>
              </div>
            </div>

            <div
              style={{
                background: '#f9fafb',
                border: '1px solid #e5e7eb',
                borderRadius: 16,
                padding: 24,
                minHeight: 320,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <img
                src="https://www.techjockey.com/c/zoho_workplace/assets/images/logo/logo_1.png"
                alt="Zoho Workplace"
                style={{ maxWidth: '100%', maxHeight: 220, objectFit: 'contain' }}
              />
            </div>
          </div>
        </div>
      </section>

      <footer
        style={{
          background: '#111827',
          color: '#fff',
          padding: '40px 20px 24px',
          marginTop: 40,
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto' }}>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: isMobile ? '1fr' : '1.2fr 1fr 1fr',
              gap: 24,
              alignItems: 'start',
              borderBottom: '1px solid rgba(255,255,255,0.12)',
              paddingBottom: 24,
            }}
          >
            <div>
              <img
                src="https://beta.techjockey.com/c/kaspersky-office-security/assets/img/tj_logo.svg"
                alt="Techjockey"
                style={{ height: 32, marginBottom: 12 }}
              />
              <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: 14 }}>
                support@techjockey.com
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 600, marginBottom: 12 }}>Follow Us</div>
              <div style={{ display: 'flex', gap: 12 }}>
                <a
                  href="#"
                  aria-label="Facebook"
                  style={socialStyle}
                >
                  f
                </a>
                <a
                  href="#"
                  aria-label="Instagram"
                  style={socialStyle}
                >
                  ◎
                </a>
                <a
                  href="#"
                  aria-label="LinkedIn"
                  style={socialStyle}
                >
                  in
                </a>
                <a
                  href="#"
                  aria-label="YouTube"
                  style={socialStyle}
                >
                  ▶
                </a>
              </div>
            </div>

            <div>
              <div style={{ fontWeight: 600, marginBottom: 12 }}>Legal</div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                <a href="#" style={footerLinkStyle}>
                  Privacy Policy
                </a>
                <a href="#" style={footerLinkStyle}>
                  Terms
                </a>
              </div>
            </div>
          </div>

          <div
            style={{
              paddingTop: 20,
              fontSize: 14,
              color: 'rgba(255,255,255,0.75)',
            }}
          >
            © 2024 Techjockey Infotech Pvt. Ltd.
          </div>
        </div>
      </footer>
    </div>
  );
};

const socialStyle = {
  width: 36,
  height: 36,
  borderRadius: '50%',
  border: '1px solid rgba(255,255,255,0.2)',
  color: '#fff',
  textDecoration: 'none',
  display: 'inline-flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontSize: 14,
  fontWeight: 700,
};

const footerLinkStyle = {
  color: 'rgba(255,255,255,0.8)',
  textDecoration: 'none',
  fontSize: 14,
};

export default LandingPage;