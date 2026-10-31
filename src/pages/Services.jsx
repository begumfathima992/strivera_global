import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo.jsx';
import Reveal from '../components/Reveal.jsx';
import { ServiceCard } from '../components/Cards.jsx';
import { PageHero, SectionHeading, ProcessTimeline, CtaBand } from '../components/Sections.jsx';
import { services } from '../data/services.js';
import developersTeam from '../assets/images/developers-team.webp';

export default function Services() {
  return (
    <>
      <Seo
        title="Software development services"
        description="Websites, web apps, iOS and Android apps, e-commerce, restaurant, hotel, clinic and garage systems, booking systems and delivery platform management."
      />
      <PageHero
        eyebrow="Services"
        title="Software development services, fully customised"
        lead="Every service is shaped around your business. Choose one, or combine several into a single platform."
        image={developersTeam}
        imageAlt="Development team collaborating around laptops"
        breadcrumbs={[{ label: 'Services' }]}
      />
      <section className="section" aria-labelledby="all-services-title">
        <Container>
          <h2 id="all-services-title" className="visually-hidden">All services</h2>
          <Row className="g-4">
            {services.map((s, i) => (
              <Col md={6} lg={4} key={s.slug}>
                <Reveal className="h-100" delay={(i % 3) * 70}><ServiceCard service={s} /></Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <section className="section bg-grey" aria-labelledby="process-title">
        <Container>
          <SectionHeading id="process-title" eyebrow="Our process" title="How every project runs" center />
          <ProcessTimeline />
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
