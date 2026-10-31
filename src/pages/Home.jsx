import { Link } from 'react-router-dom';
import ResponsiveImg from '../components/ResponsiveImg.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import QuoteForm from '../components/QuoteForm.jsx';
import { ServiceCard, ProjectCard } from '../components/Cards.jsx';
import {
  SectionHeading, TrustStrip, ProcessTimeline, TechGrid, IndustryGrid, WhyChooseGrid, FaqAccordion, CtaBand, PricingFootnote
} from '../components/Sections.jsx';
import { services } from '../data/services.js';
import { projects } from '../data/projects.js';
import { faqs } from '../data/faqs.js';
import { company, hasAddress } from '../data/site.js';
import { restaurantModules } from '../data/restaurant.js';
import restaurantImg from '../assets/images/restaurant-dining.webp';

// Structured data built from src/data/site.js. The address is only included once one is set there.
const jsonLd = [
  {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: company.name,
    url: company.url,
    logo: `${company.url}/favicon.svg`,
    email: company.email,
    telephone: company.phoneHref,
    slogan: company.tagline
  },
  {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    name: company.name,
    url: company.url,
    image: `${company.url}/og-image.jpg`,
    email: company.email,
    telephone: company.phoneHref,
    priceRange: '££',
    ...(hasAddress && {
      address: {
        '@type': 'PostalAddress',
        streetAddress: company.address.street,
        addressLocality: company.address.locality,
        postalCode: company.address.postcode,
        addressCountry: 'GB'
      }
    }),
    areaServed: 'GB'
  }
];

export default function Home() {
  const featured = projects.filter((p) => p.featured);
  const spotlightModules = restaurantModules.slice(0, 6);

  return (
    <>
      <Seo
        title="Custom websites, web apps and mobile apps"
        description="UK software company building custom websites, web apps and mobile apps for restaurants, hotels, clinics, garages and shops, up to 25% below typical UK agency rates."
        jsonLd={jsonLd}
      />

      {/* 1. Hero */}
      <section className="hero" aria-labelledby="hero-title">
        <Container>
          <Row className="align-items-center g-4 g-lg-5">
            <Col lg={7}>
              <span className="eyebrow">{company.tagline}</span>
              <h1 id="hero-title">
                Websites, web apps and mobile apps that <em>grow your business</em>
              </h1>
              <p className="lead mt-4">
                Experienced developers building software fully customised to your requirements, with pricing up to 25% below
                typical UK agency rates.<sup><Link to="/pricing#pricing-footnote" className="text-white" aria-label="See pricing footnote">*</Link></sup>
              </p>
              <div className="d-flex flex-wrap gap-3 mt-4">
                <Link to="/contact" className="btn btn-accent btn-lg">Get a Free Quote</Link>
                <Link to="/restaurant-solutions" className="btn btn-outline-light-strong btn-lg">See Restaurant Solutions</Link>
              </div>
              <ul className="hero-points">
                <li><Icon name="check" /> Fixed, transparent quotes</li>
                <li><Icon name="check" /> You own your code</li>
                <li><Icon name="check" /> Support after launch</li>
              </ul>
            </Col>
            <Col lg={5}>
              <div className="hero-form-card">
                <h2 className="mb-1">Get a free quote</h2>
                <p className="mb-3">Tell us what you need. We reply within one working day.</p>
                <QuoteForm variant="short" endpoint="quote" submitLabel="Send my request" />
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* 2. Trust strip */}
      <TrustStrip />

      {/* 3. Services */}
      <section className="section" aria-labelledby="services-title">
        <Container>
          <SectionHeading
            id="services-title"
            eyebrow="What we do"
            title="Software services for growing businesses"
            lead="From a new website to a complete booking and loyalty platform, we design, build and support it."
            center
          />
          <Row className="g-4">
            {services.map((s, i) => (
              <Col md={6} lg={4} key={s.slug}>
                <Reveal className="h-100" delay={(i % 3) * 70}>
                  <ServiceCard service={s} />
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 4. Featured projects */}
      <section className="section bg-grey" aria-labelledby="work-title">
        <Container>
          <div className="d-flex flex-wrap justify-content-between align-items-end gap-3 mb-5">
            <SectionHeading id="work-title" eyebrow="Our work" title="Built by our development team" lead="A selection of projects we have designed, built and deployed." />
            <Link to="/work" className="btn btn-navy mb-5">View all projects</Link>
          </div>
          <Row className="g-4">
            {featured.map((p, i) => (
              <Col md={6} lg={4} key={p.slug}>
                <Reveal className="h-100" delay={(i % 3) * 70}><ProjectCard project={p} /></Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      {/* 5. Restaurant spotlight */}
      <section className="section" aria-labelledby="spotlight-title">
        <Container>
          <Reveal className="spotlight">
            <ResponsiveImg src={restaurantImg} alt="Busy restaurant dining room with guests, staff and green plants" loading="lazy" decoding="async" />
            <Row>
              <Col lg={8} xl={7}>
                <span className="eyebrow" style={{ color: 'var(--accent-on-dark)' }}>Restaurant Solutions</span>
                <h2 id="spotlight-title">One platform to run your restaurant</h2>
                <p className="lead mt-3">
                  Take bookings, show your menu, reward loyal customers and manage everything from one dashboard, tailored to
                  your restaurant, café or takeaway.
                </p>
                <ul className="module-chips">
                  {spotlightModules.map((m) => (
                    <li key={m.title}><Icon name={m.icon} /> {m.title}</li>
                  ))}
                </ul>
                <Link to="/restaurant-solutions" className="btn btn-accent">Explore Restaurant Solutions</Link>
              </Col>
            </Row>
          </Reveal>
        </Container>
      </section>

      {/* 6. Why choose us */}
      <section className="section bg-grey" aria-labelledby="why-title">
        <Container>
          <SectionHeading id="why-title" eyebrow="Why Strivera Global" title="Professional software without agency overheads" center />
          <WhyChooseGrid />
          <PricingFootnote id="home-pricing-footnote" />
        </Container>
      </section>

      {/* 7. Process */}
      <section className="section" aria-labelledby="process-title">
        <Container>
          <SectionHeading id="process-title" eyebrow="How we work" title="A clear process from first call to launch and beyond" center />
          <ProcessTimeline />
        </Container>
      </section>

      {/* 8. Technologies */}
      <section className="section bg-grey" aria-labelledby="tech-title">
        <Container>
          <SectionHeading id="tech-title" eyebrow="Technologies" title="Proven tools, chosen for your project" lead="We pick the right technology for the job, not the trendiest one." center />
          <TechGrid homeOnly />
          <div className="text-center mt-4"><Link to="/technologies" className="link-arrow">More about our technology <Icon name="arrow" /></Link></div>
        </Container>
      </section>

      {/* 9. Industries */}
      <section className="section" aria-labelledby="industries-title">
        <Container>
          <SectionHeading id="industries-title" eyebrow="Industries" title="Software for the businesses on your high street" center />
          <IndustryGrid />
        </Container>
      </section>

      {/* 10. FAQs */}
      <section className="section bg-grey" aria-labelledby="faq-title">
        <Container>
          <Row className="g-4 g-lg-5">
            <Col lg={4}>
              <SectionHeading id="faq-title" eyebrow="FAQs" title="Questions we are often asked" lead="Can’t find your answer? Get in touch and we’ll be happy to help." />
              <Link to="/contact" className="btn btn-navy">Ask us a question</Link>
            </Col>
            <Col lg={8}>
              <FaqAccordion items={faqs} />
            </Col>
          </Row>
        </Container>
      </section>

      {/* 11. Final CTA */}
      <CtaBand />
    </>
  );
}
