import { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import QuoteForm from '../components/QuoteForm.jsx';
import { PageHero } from '../components/Sections.jsx';
import { company, hasAddress } from '../data/site.js';
import { getService } from '../data/services.js';

export default function Contact() {
  const [params] = useSearchParams();
  const preselected = getService(params.get('service') ?? '')?.title ?? '';
  const [mode, setMode] = useState('quote');

  return (
    <>
      <Seo
        title="Contact us and get a free quote"
        description="Request a free, fixed quote for your website, web app or mobile app, or send us a question. We reply within one working day."
      />
      <PageHero
        eyebrow="Contact"
        title="Get a free quote"
        lead="Tell us about your project and we’ll come back within one working day with next steps, or a free demo if you’d like one."
        breadcrumbs={[{ label: 'Contact' }]}
      />
      <section className="section" aria-label="Contact options">
        <Container>
          <Row className="g-4 g-lg-5">
            <Col lg={7}>
              <div className="form-card">
                <div className="filter-bar justify-content-start mb-4" role="group" aria-label="What would you like to do?">
                  <button type="button" aria-pressed={mode === 'quote'} onClick={() => setMode('quote')}>Request a quote</button>
                  <button type="button" aria-pressed={mode === 'contact'} onClick={() => setMode('contact')}>Ask a question</button>
                </div>
                <h2 className="h3 mb-3">{mode === 'quote' ? 'Request a free quote' : 'Send us a message'}</h2>
                <QuoteForm
                  key={mode}
                  variant="full"
                  endpoint={mode}
                  defaultService={preselected}
                  submitLabel={mode === 'quote' ? 'Get my free quote' : 'Send message'}
                />
              </div>
            </Col>
            <Col lg={5}>
              <div className="card-soft h-auto">
                <h2 className="h3 mt-0">Contact details</h2>
                {/* Contact details come from src/data/site.js */}
                <ul className="check-list mt-3" style={{ gap: '1rem' }}>
                  <li><Icon name="email" /><span><strong>Email</strong><br /><a href={`mailto:${company.email}`}>{company.email}</a></span></li>
                  <li><Icon name="tel" /><span><strong>Phone</strong><br /><a href={`tel:${company.phoneHref}`}>{company.phone}</a></span></li>
                  <li>
                    <Icon name="chat" />
                    <span><strong>WhatsApp</strong><br />
                      <a href={`https://wa.me/${company.whatsapp}`} target="_blank" rel="noopener noreferrer">Message us on WhatsApp<span className="visually-hidden"> (opens in a new tab)</span></a>
                    </span>
                  </li>
                  {hasAddress && (
                    <li>
                      <Icon name="pin" />
                      <span><strong>Address</strong><br />
                        <address className="mb-0">{company.address.street}<br />{company.address.locality} {company.address.postcode}<br />{company.address.country}</address>
                      </span>
                    </li>
                  )}
                  <li><Icon name="clock" /><span><strong>Hours</strong><br />{company.hours}</span></li>
                </ul>
              </div>
              <div className="card-soft h-auto mt-4">
                <h2 className="h3 mt-0">What happens next?</h2>
                <ol className="mt-3 mb-0 ps-3">
                  <li>We reply within one working day.</li>
                  <li>We book a free call to understand your needs.</li>
                  <li>You receive a fixed, itemised quote.</li>
                </ol>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </>
  );
}
