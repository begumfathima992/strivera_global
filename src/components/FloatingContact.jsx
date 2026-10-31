import Icon from './Icon.jsx';
import { company } from '../data/site.js';

// Mobile-only floating buttons (hidden on large screens via CSS).
export default function FloatingContact() {
  return (
    <div className="floating-contact">
      <a
        className="wa"
        href={`https://wa.me/${company.whatsapp}`}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Message us on WhatsApp (opens in a new tab)"
      >
        <Icon name="chat" />
      </a>
      <a className="call" href={`tel:${company.phoneHref}`} aria-label={`Call us on ${company.phone}`}>
        <Icon name="tel" />
      </a>
    </div>
  );
}
