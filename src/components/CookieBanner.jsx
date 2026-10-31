import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const KEY = 'sg-cookie-consent';

function readConsent() {
  try {
    return localStorage.getItem(KEY);
  } catch {
    return null;
  }
}

// Essential cookies only by default. The site currently sets no analytics or marketing cookies.
// TODO: if analytics are added later, only load them when consent === 'all'.
export default function CookieBanner() {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(!readConsent());
  }, []);

  useEffect(() => {
    document.body.classList.toggle('cookie-open', open);
  }, [open]);

  const choose = (value) => {
    try {
      localStorage.setItem(KEY, value);
    } catch {
      /* storage blocked: banner simply closes for this visit */
    }
    setOpen(false);
  };

  if (!open) return null;

  return (
    <section className="cookie-banner" role="region" aria-labelledby="cookie-title">
      <h2 id="cookie-title">Cookies on this site</h2>
      <p>
        We only use essential cookies needed to run this website. We do not use advertising cookies. You can
        read more in our <Link to="/cookie-policy">Cookie Policy</Link>.
      </p>
      <div className="d-flex flex-wrap gap-2">
        <button type="button" className="btn btn-navy btn-sm" onClick={() => choose('essential')}>
          Accept essential only
        </button>
        <button type="button" className="btn btn-outline-navy btn-sm" onClick={() => choose('all')}>
          Accept all
        </button>
      </div>
    </section>
  );
}
