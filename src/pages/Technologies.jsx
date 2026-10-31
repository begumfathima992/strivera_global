import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { PageHero, SectionHeading, CtaBand } from '../components/Sections.jsx';
import { technologies } from '../data/technologies.js';
import developersCoding from '../assets/images/developers-coding.webp';

const principles = [
  { icon: 'shield', title: 'Secure by default', text: 'HTTPS, validated inputs, rate limiting and up-to-date dependencies on every project.' },
  { icon: 'rocket', title: 'Fast everywhere', text: 'Optimised images, lazy loading and lean code for quick load times on mobile data.' },
  { icon: 'eye', title: 'Accessible', text: 'We design and test against WCAG 2.1 AA so more people can use your software.' },
  { icon: 'key', title: 'No lock-in', text: 'Mainstream, well-supported technology that any good developer can work with.' }
];

export default function Technologies() {
  const groups = [...new Set(technologies.map((t) => t.group))];
  return (
    <>
      <Seo
        title="Technologies we use"
        description="HTML, CSS, JavaScript, React, React Bootstrap, WordPress, Node.js, React Native, Django, PHP, PostgreSQL and AWS: proven tools chosen for each project."
      />
      <PageHero
        eyebrow="Technologies"
        title="Proven technology, chosen for your project"
        lead="We use mainstream, well-supported tools so your software is fast, secure and easy to maintain for years."
        image={developersCoding}
        imageAlt="Two developers writing code at monitors"
        breadcrumbs={[{ label: 'Technologies' }]}
      />
      {groups.map((g, gi) => (
        <section key={g} className={`section${gi % 2 ? ' bg-grey' : ''}`} aria-labelledby={`group-${gi}`}>
          <Container>
            <SectionHeading id={`group-${gi}`} eyebrow="Technology" title={g} />
            <Row className="g-4">
              {technologies.filter((t) => t.group === g).map((t, i) => (
                <Col md={6} lg={4} key={t.id}>
                  <Reveal className="card-soft" delay={(i % 3) * 70}>
                    <span className="icon-badge"><Icon name={t.icon} /></span>
                    <h3>{t.name}</h3>
                    <p className="mb-0">{t.text}</p>
                  </Reveal>
                </Col>
              ))}
            </Row>
          </Container>
        </section>
      ))}
      <section className="section bg-navy" aria-labelledby="principles-title">
        <Container>
          <SectionHeading id="principles-title" eyebrow="Our standards" title="How we build" center />
          <Row className="g-4">
            {principles.map((p) => (
              <Col md={6} lg={3} key={p.title}>
                <div className="card-soft">
                  <span className="icon-badge"><Icon name={p.icon} /></span>
                  <h3>{p.title}</h3>
                  <p className="mb-0">{p.text}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Container>
      </section>
      <CtaBand />
    </>
  );
}
