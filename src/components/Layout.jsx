import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import Header from './Header.jsx';
import Footer from './Footer.jsx';
import CookieBanner from './CookieBanner.jsx';
import FloatingContact from './FloatingContact.jsx';

export default function Layout({ children }) {
  const { pathname, hash } = useLocation();
  const mainRef = useRef(null);
  const prevPath = useRef(pathname);

  // On navigation: scroll to top and move focus to <main> so screen readers announce the new page.
  useEffect(() => {
    if (hash) {
      // Pages are lazy-loaded, so wait briefly for the target element to exist.
      let tries = 0;
      const timer = setInterval(() => {
        const el = document.getElementById(decodeURIComponent(hash.slice(1)));
        if (el || ++tries > 30) {
          clearInterval(timer);
          el?.scrollIntoView({ block: 'start' });
        }
      }, 100);
      return () => clearInterval(timer);
    }
    // Only act on a real route change (also safe when effects run twice in StrictMode).
    if (prevPath.current === pathname) return;
    prevPath.current = pathname;
    window.scrollTo(0, 0);
    mainRef.current?.focus({ preventScroll: true });
  }, [pathname, hash]);

  return (
    <>
      <a
        href="#main"
        className="skip-link"
        onClick={(e) => {
          e.preventDefault();
          mainRef.current?.focus();
        }}
      >
        Skip to main content
      </a>
      <Header />
      <main id="main" ref={mainRef} tabIndex={-1} style={{ outline: 'none' }}>
        {children}
      </main>
      <Footer />
      <FloatingContact />
      <CookieBanner />
    </>
  );
}
