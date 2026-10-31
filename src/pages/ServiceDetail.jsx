import { Link, useParams } from 'react-router-dom';
import ResponsiveImg from '../components/ResponsiveImg.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { ProjectCard } from '../components/Cards.jsx';
import { PageHero, SectionHeading, TechGrid, CtaBand } from '../components/Sections.jsx';
import { getService } from '../data/services.js';
import { projects } from '../data/projects.js';
import NotFound from './NotFound.jsx';

export default function ServiceDetail() {
  const { slug } = useParams();
  const service = getService(slug);
  if (!service) return <NotFound />;

  const related = projects.filter((p) => service.relatedProjects.includes(p.slug));

  return (
    <>
      <Seo title={service.title} description={`${service.intro}`.slice(0, 158)} />
      <PageHero
        eyebrow="Service"
        title={service.title}
        lead={service.intro}
        image={service.image}
        imageAlt={service.imageAlt}
        breadcrumbs={[{ to: '/services', label: 'Services' }, { label: service.title }]}
      >
        <div className="d-flex flex-wrap gap-3 mt-4">
          <Link to="/contact" className="btn btn-accent">Get a Free Quote</Link>
          {service.link && <Link to={service.link} className="btn btn-outline-light-strong">See the full restaurant platform</Link>}
        </div>
      </PageHero>

      <section className="section" aria-labelledby="features-title">
        <Container>
          <SectionHeading id="features-title" eyebrow="Key features" title="What’s included" lead="Every feature can be adapted, removed or extended to suit your business." />
          <Row className="g-4">
            {service.features.map((f, i) => (
              <Col md={6} lg={4} key={f.title}>
                <Reveal className="card-soft" delay={(i % 3) * 70}>
                  <span className="icon-badge"><Icon name="check" /></span>
                  <h3>{f.title}</h3>
                  <p className="mb-0">{f.text}</p>
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section bg-grey" aria-labelledby="benefits-title">
        <Container>
          <Row className="g-4 g-lg-5 align-items-center">
            <Col lg={6}>
              <Reveal>
                <ResponsiveImg src={service.image} alt={service.imageAlt} className="rounded-img" sizes="(min-width: 992px) 50vw, 100vw" loading="lazy" decoding="async" width="1200" height="800" style={{ aspectRatio: '4/3' }} />
              </Reveal>
            </Col>
            <Col lg={6}>
              <SectionHeading id="benefits-title" eyebrow="Benefits" title="How it helps your business" />
              <ul className="check-list">
                {service.benefits.map((b) => <li key={b}><Icon name="tick" /> {b}</li>)}
              </ul>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section" aria-labelledby="tech-title">
        <Container>
          <SectionHeading id="tech-title" eyebrow="Technologies" title="Related technologies" />
          <TechGrid ids={service.technologies} />
        </Container>
      </section>

      {related.length > 0 && (
        <section className="section bg-grey" aria-labelledby="related-title">
          <Container>
            <SectionHeading id="related-title" eyebrow="Our work" title="Related projects" />
            <Row className="g-4">
              {related.map((p) => (
                <Col md={6} lg={4} key={p.slug}><ProjectCard project={p} /></Col>
              ))}
            </Row>
          </Container>
        </section>
      )}

      <CtaBand title={`Let’s talk about your ${service.title.toLowerCase()} project`} />
    </>
  );
}
