import { Container, Row, Col } from 'react-bootstrap';
import ResponsiveImg from '../components/ResponsiveImg.jsx';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { PageHero, SectionHeading, CtaBand, ProcessTimeline } from '../components/Sections.jsx';
import { values, company } from '../data/site.js';
import developersTeam from '../assets/images/developers-team.webp';
import developerDesk from '../assets/images/developer-desk.webp';

export default function About() {
  return (
    <>
      <Seo
        title="About us"
        description="Strivera Global is a UK software company delivering custom websites, web apps and mobile applications, built end to end by our in-house development team."
      />
      <PageHero
        eyebrow="About us"
        title="A UK software company built around your business"
        lead="Custom websites, web apps and mobile applications, delivered by an in-house team that stays with you after launch."
        image={developersTeam}
        imageAlt="Development team working together around a table with laptops"
        breadcrumbs={[{ label: 'About us' }]}
      />

      <section className="section" aria-labelledby="company-title">
        <Container>
          <Row className="g-4 g-lg-5 align-items-center">
            <Col lg={6}>
              <SectionHeading id="company-title" eyebrow="Our company" title="Who we are" />
              <Reveal>
                {/* TODO: set the founder name in src/data/site.js (company.founder). */}
                <p className="lead">
                  Strivera Global is a UK software company founded by {company.founder}, delivering custom websites, web apps
                  and mobile applications for businesses.
                </p>
                <p>
                  We work with restaurants, hotels, clinics, garages, shops and charities that need software shaped around how
                  they actually work, at a price that makes sense for a growing business.
                </p>
              </Reveal>
            </Col>
            <Col lg={6}>
              <Reveal>
                <ResponsiveImg src={developerDesk} alt="Developer working at a desk with a large monitor" className="rounded-img" sizes="(min-width: 992px) 50vw, 100vw" loading="lazy" decoding="async" width="1200" height="800" style={{ aspectRatio: '4/3' }} />
              </Reveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-grey" aria-labelledby="team-title">
        <Container>
          <Row className="g-4 g-lg-5">
            <Col lg={6}>
              <SectionHeading id="team-title" eyebrow="Our team" title="One in-house team, end to end" />
              <Reveal>
                <p className="lead">
                  Our in-house development team handles every project end to end, from design and development to cloud
                  deployment and ongoing support.
                </p>
                <ul className="check-list mt-4">
                  <li><Icon name="tick" /> UX and interface design</li>
                  <li><Icon name="tick" /> Front-end, back-end and mobile development</li>
                  <li><Icon name="tick" /> Cloud deployment, hosting and security</li>
                  <li><Icon name="tick" /> Maintenance, support and new features</li>
                </ul>
              </Reveal>
            </Col>
            <Col lg={6}>
              <SectionHeading id="founder-title" eyebrow="Our founder" title="Meet the founder" />
              {/* TODO: founder name, photo and short bio, to be supplied by Ravi. */}
              <Reveal className="todo-placeholder text-start d-flex gap-4 align-items-center flex-wrap">
                <div className="rounded-circle bg-white border" style={{ width: 96, height: 96, display: 'grid', placeItems: 'center', flex: 'none' }} aria-hidden="true">
                  <Icon name="people" size="2.2rem" />
                </div>
                <div>
                  <strong>{company.founder}</strong>
                  <p className="mb-0 mt-1">Founder. TODO: photo and short bio to be supplied by Ravi.</p>
                </div>
              </Reveal>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section" aria-labelledby="values-title">
        <Container>
          <SectionHeading
            id="values-title"
            eyebrow="Mission and values"
            title="Our mission: professional software every business can afford"
            lead="We help local and growing businesses compete with custom software that is built well, priced fairly and supported for the long term."
            center
          />
          <Row className="g-4">
            {values.map((v, i) => (
              <Col md={6} lg={3} key={v.title}>
                <Reveal className="card-soft" delay={i * 70}>
                  <span className="icon-badge"><Icon name={v.icon} /></span>
                  <h3>{v.title}</h3>
                  <p className="mb-0">{v.text}</p>
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section bg-grey" aria-labelledby="process-title">
        <Container>
          <SectionHeading id="process-title" eyebrow="How we work" title="Our process" center />
          <ProcessTimeline />
        </Container>
      </section>

      <CtaBand />
    </>
  );
}
