import { Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { PageHero, SectionHeading, WhyChooseGrid, FaqAccordion, CtaBand, PricingFootnote } from '../components/Sections.jsx';
import { faqs } from '../data/faqs.js';

// TODO: if you want to show "from" prices, replace the `price` text below with real figures.
const packages = [
  {
    title: 'Websites',
    text: 'Professional, mobile-first websites for local businesses, charities and start-ups.',
    price: 'Fixed quote',
    items: ['Custom design', 'Contact and quote forms', 'SEO foundations', 'Hosting and SSL set-up']
  },
  {
    title: 'Web and mobile apps',
    text: 'Custom systems: booking, loyalty, clinic, garage, hotel and restaurant platforms.',
    price: 'Fixed quote per phase',
    items: ['Discovery and design', 'Web app, iOS and Android', 'Admin dashboard', 'Cloud deployment'],
    highlight: true
  },
  {
    title: 'Support and content',
    text: 'Ongoing maintenance, social media content and delivery platform management.',
    price: 'Monthly plan',
    items: ['Updates and security patches', 'New features on request', 'Social posts and promo images', 'Delivery listing updates']
  }
];

const steps = [
  { title: 'Free consultation', text: 'A no-obligation call to understand what you need.' },
  { title: 'Fixed, itemised quote', text: 'Clear costs for each part of the project, agreed before we start.' },
  { title: 'Staged payments', text: 'Pay in stages tied to milestones, not all up front.' },
  { title: 'No surprise invoices', text: 'Any change in scope is quoted and agreed with you first.' }
];

export default function Pricing() {
  return (
    <>
      <Seo
        title="Pricing and why choose us"
        description="Transparent, fixed quotes up to 25% below typical UK agency rates. Experienced developers, customised software, post-launch support and you own your code."
      />
      <PageHero
        eyebrow="Pricing and why choose us"
        title="Agency-quality software, up to 25% below typical UK agency rates*"
        lead="Transparent fixed quotes, experienced developers and software customised to your requirements."
        breadcrumbs={[{ label: 'Pricing' }]}
      >
        <Link to="/contact" className="btn btn-accent btn-lg mt-4">Get a Free Quote</Link>
      </PageHero>

      <section className="section" aria-labelledby="packages-title">
        <Container>
          <SectionHeading id="packages-title" eyebrow="Ways to work with us" title="Pricing built around your project" lead="Every project is quoted individually, so you only pay for what you need." center />
          <Row className="g-4">
            {packages.map((p, i) => (
              <Col lg={4} key={p.title}>
                <Reveal className={`price-card${p.highlight ? ' highlight' : ''}`} delay={i * 80}>
                  {p.highlight && <span className="tag align-self-start mb-2">Most requested</span>}
                  <h3>{p.title}</h3>
                  <p>{p.text}</p>
                  <p className="from">{p.price}</p>
                  <ul className="check-list mb-4">
                    {p.items.map((it) => <li key={it}><Icon name="tick" /> {it}</li>)}
                  </ul>
                  <Link to="/contact" className={`btn ${p.highlight ? 'btn-accent' : 'btn-outline-navy'} mt-auto`}>Request a quote</Link>
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section bg-grey" aria-labelledby="how-pricing-title">
        <Container>
          <SectionHeading id="how-pricing-title" eyebrow="How pricing works" title="Clear costs from the start" center />
          <Row className="g-4">
            {steps.map((s, i) => (
              <Col md={6} lg={3} key={s.title}>
                <Reveal className="card-soft" delay={i * 70}>
                  <span className="icon-badge font-heading fw-bold">{i + 1}</span>
                  <h3>{s.title}</h3>
                  <p className="mb-0">{s.text}</p>
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section" aria-labelledby="why-title">
        <Container>
          <SectionHeading id="why-title" eyebrow="Why choose us" title="Why businesses choose Strivera Global" center />
          <WhyChooseGrid />
          <PricingFootnote />
        </Container>
      </section>

      <section className="section bg-grey" aria-labelledby="faq-title">
        <Container style={{ maxWidth: 900 }}>
          <SectionHeading id="faq-title" eyebrow="FAQs" title="Pricing questions" center />
          <FaqAccordion items={faqs} />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
