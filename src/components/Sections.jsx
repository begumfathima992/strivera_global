// Small, reusable building blocks shared by several pages.
import { Link } from 'react-router-dom';
import { Container, Row, Col, Accordion } from 'react-bootstrap';
import Icon from './Icon.jsx';
import ResponsiveImg from './ResponsiveImg.jsx';
import Reveal from './Reveal.jsx';
import { processSteps, whyChooseUs, trustPoints, pricingFootnote } from '../data/site.js';
import { technologies } from '../data/technologies.js';
import { industries } from '../data/industries.js';

export function SectionHeading({ eyebrow, title, lead, center = false, id, as: H = 'h2' }) {
  return (
    <Reveal className={`section-heading${center ? ' text-center' : ''}`}>
      {eyebrow && <span className="eyebrow">{eyebrow}</span>}
      <H id={id}>{title}</H>
      {lead && <p className="lead mt-3 mb-0">{lead}</p>}
    </Reveal>
  );
}

export function PageHero({ eyebrow, title, lead, image, imageAlt = '', breadcrumbs, children }) {
  return (
    <section className={`page-hero${image ? ' has-image' : ''}`}>
      {image && <ResponsiveImg className="hero-bg" src={image} alt={imageAlt} largeWidth={1600} fetchpriority="high" />}
      <Container>
        <div style={{ maxWidth: 760 }}>
          {breadcrumbs && (
            <nav className="breadcrumb-nav" aria-label="Breadcrumb">
              <ol>
                <li><Link to="/">Home</Link></li>
                {breadcrumbs.map((b, i) =>
                  b.to ? (
                    <li key={i}><Link to={b.to}>{b.label}</Link></li>
                  ) : (
                    <li key={i} aria-current="page">{b.label}</li>
                  )
                )}
              </ol>
            </nav>
          )}
          {eyebrow && <span className="eyebrow">{eyebrow}</span>}
          <h1>{title}</h1>
          {lead && <p className="lead mt-3 mb-0">{lead}</p>}
          {children}
        </div>
      </Container>
    </section>
  );
}

export function TrustStrip() {
  return (
    <section className="trust-strip" aria-label="Why businesses work with us">
      <Container>
        <Row className="g-3 g-lg-4">
          {trustPoints.map((t) => (
            <Col xs={12} sm={6} lg={3} key={t.text}>
              <div className="trust-item">
                <span className="icon-badge"><Icon name={t.icon} /></span>
                <span>{t.text}</span>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  );
}

export function ProcessTimeline() {
  return (
    <ol className="timeline">
      {processSteps.map((s, i) => (
        <Reveal as="li" key={s.title} delay={i * 80}>
          <h3><Icon name={s.icon} /> {s.title}</h3>
          <p>{s.text}</p>
        </Reveal>
      ))}
    </ol>
  );
}

export function TechGrid({ ids, homeOnly = false }) {
  const list = ids ? technologies.filter((t) => ids.includes(t.id)) : technologies.filter((t) => !homeOnly || t.home);
  return (
    <Row as="ul" className="g-3 list-unstyled" xs={2} sm={3} md={4} lg={5}>
      {list.map((t, i) => (
        <Col as="li" key={t.id}>
          <Reveal className="tech-tile" delay={(i % 5) * 50}>
            <Icon name={t.icon} />
            <span>{t.name}</span>
          </Reveal>
        </Col>
      ))}
    </Row>
  );
}

export function IndustryGrid({ withImages = true }) {
  return (
    <Row className="g-4">
      {industries.map((ind, i) => (
        <Col md={6} lg={i < 3 ? 4 : 3} key={ind.slug}>
          <Reveal className="h-100" delay={(i % 4) * 60}>
            <Link to={ind.link ?? `/industries#${ind.slug}`} className="image-card">
              {withImages && <ResponsiveImg src={ind.image} alt={ind.imageAlt} sizes="(min-width: 992px) 33vw, (min-width: 768px) 50vw, 100vw" loading="lazy" decoding="async" width="600" height="400" />}
              <div className="content">
                <span className="icon-badge"><Icon name={ind.icon} /></span>
                <h3>{ind.name}</h3>
                <p>{ind.text}</p>
              </div>
            </Link>
          </Reveal>
        </Col>
      ))}
    </Row>
  );
}

export function WhyChooseGrid() {
  return (
    <Row className="g-4">
      {whyChooseUs.map((w, i) => (
        <Col md={6} lg={4} key={w.title}>
          <Reveal className="card-soft" delay={(i % 3) * 80}>
            <span className="icon-badge"><Icon name={w.icon} /></span>
            <h3>
              {w.title}
              {w.footnote && (
                <sup><Link to="/pricing#pricing-footnote" aria-label="See pricing footnote">*</Link></sup>
              )}
            </h3>
            <p className="mb-0">{w.text}</p>
          </Reveal>
        </Col>
      ))}
    </Row>
  );
}

export function PricingFootnote({ id = 'pricing-footnote' }) {
  return (
    <p className="footnote mt-4 mb-0" id={id}>
      * {pricingFootnote}
    </p>
  );
}

export function FaqAccordion({ items }) {
  return (
    <Accordion className="faq" defaultActiveKey="0">
      {items.map((f, i) => (
        <Accordion.Item eventKey={String(i)} key={f.question}>
          <Accordion.Header as="h3">{f.question}</Accordion.Header>
          <Accordion.Body><p className="mb-0">{f.answer}</p></Accordion.Body>
        </Accordion.Item>
      ))}
    </Accordion>
  );
}

export function CtaBand({
  title = 'Ready to build software that fits your business?',
  text = 'Tell us what you need and we will send a free, fixed quote, typically up to 25% below UK agency rates.',
  primary = { to: '/contact', label: 'Get a Free Quote' },
  secondary = { to: '/work', label: 'See our work' }
}) {
  return (
    <section className="section-sm">
      <Container>
        <Reveal className="cta-band">
          <Row className="align-items-center g-4">
            <Col lg={8}>
              <h2>{title}</h2>
              <p className="mb-0 mt-2">{text}</p>
            </Col>
            <Col lg={4} className="d-flex flex-wrap gap-2 justify-content-lg-end">
              <Link to={primary.to} className="btn btn-accent">{primary.label}</Link>
              {secondary && <Link to={secondary.to} className="btn btn-outline-light-strong">{secondary.label}</Link>}
            </Col>
          </Row>
        </Reveal>
      </Container>
    </section>
  );
}

// Placeholder for future social proof. Do NOT fill with invented testimonials, logos or stats.
export function SocialProofPlaceholder() {
  return (
    // TODO: replace with genuine, approved client testimonials (with written permission) when available.
    <div className="todo-placeholder" role="note">
      <strong>Client testimonials coming soon.</strong>
      <p className="mb-0 mt-1">TODO: add real, approved client testimonials here, or remove this block before launch.</p>
    </div>
  );
}
