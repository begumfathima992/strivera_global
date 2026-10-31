import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import BrandMark from './BrandMark.jsx';
import Icon from './Icon.jsx';
import { company, navLinks, hasAddress } from '../data/site.js';
import { services } from '../data/services.js';

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="site-footer">
      <Container>
        <Row className="g-4 g-lg-5">
          <Col lg={4}>
            <BrandMark />
            <p className="mt-3">{company.tagline} Websites, web apps and mobile apps for UK businesses.</p>
            {/* TODO: replace social URLs in src/data/site.js with real profiles. Text links only, no third-party logos. */}
            <ul className="social-links mt-4" aria-label="Social media">
              {company.social.map((s) => (
                <li key={s.label}>
                  <a href={s.href} target="_blank" rel="noopener noreferrer">
                    {s.label}
                    <span className="visually-hidden"> (opens in a new tab)</span>
                  </a>
                </li>
              ))}
            </ul>
          </Col>
          <Col sm={6} lg={2}>
            <h2>Quick links</h2>
            <ul>
              <li><Link to="/">Home</Link></li>
              {navLinks.map((l) => (
                <li key={l.to}><Link to={l.to}>{l.label}</Link></li>
              ))}
            </ul>
          </Col>
          <Col sm={6} lg={3}>
            <h2>Services</h2>
            <ul>
              {services.map((s) => (
                <li key={s.slug}><Link to={`/services/${s.slug}`}>{s.title}</Link></li>
              ))}
            </ul>
          </Col>
          <Col lg={3}>
            <h2>Contact</h2>
            {/* Contact details come from src/data/site.js */}
            <ul className="footer-contact">
              <li><Icon name="email" /><a href={`mailto:${company.email}`}>{company.email}</a></li>
              <li><Icon name="tel" /><a href={`tel:${company.phoneHref}`}>{company.phone}</a></li>
              {hasAddress && (
                <li>
                  <Icon name="pin" />
                  <address className="mb-0">
                    {[company.address.street, company.address.locality, company.address.postcode, company.address.country].filter(Boolean).join(', ')}
                  </address>
                </li>
              )}
              <li><Icon name="clock" /><span>{company.hours}</span></li>
            </ul>
          </Col>
        </Row>
        <div className="footer-bottom d-flex flex-column flex-md-row justify-content-between gap-3">
          <p className="mb-0">
            © {year} {company.name}. Registered in {company.registeredIn}. Company number: {company.companyNumber}.
          </p>
          <ul className="d-flex flex-row gap-3" style={{ display: 'flex' }}>
            <li><Link to="/privacy-policy">Privacy Policy</Link></li>
            <li><Link to="/cookie-policy">Cookie Policy</Link></li>
          </ul>
        </div>
      </Container>
    </footer>
  );
}
