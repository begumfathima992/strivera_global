import { useParams, Link } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import Gallery from '../components/Gallery.jsx';
import { ProjectCard } from '../components/Cards.jsx';
import { PageHero, SectionHeading, CtaBand } from '../components/Sections.jsx';
import { getProject, projects } from '../data/projects.js';
import NotFound from './NotFound.jsx';

export default function ProjectDetail() {
  const { slug } = useParams();
  const project = getProject(slug);
  if (!project) return <NotFound />;

  const hero = project.images[0];
  const more = projects.filter((p) => p.slug !== project.slug && p.category === project.category).concat(
    projects.filter((p) => p.slug !== project.slug && p.category !== project.category)
  ).slice(0, 3);

  return (
    <>
      <Seo title={project.title} description={project.summary} />
      <PageHero
        eyebrow={project.category}
        title={project.title}
        lead={project.summary}
        breadcrumbs={[{ to: '/work', label: 'Our work' }, { label: project.title }]}
      >
        {project.liveUrl && (
          <a href={project.liveUrl} className="btn btn-accent mt-4" target="_blank" rel="noopener noreferrer">
            Visit the live site <Icon name="external" /><span className="visually-hidden"> (opens in a new tab)</span>
          </a>
        )}
      </PageHero>

      <section className="section pb-0">
        <Container>
          <Reveal>
            <img src={hero.src} alt={hero.alt} className="rounded-img" width="1200" height="800" fetchpriority="high" />
          </Reveal>
        </Container>
      </section>

      <section className="section" aria-label="Project overview">
        <Container>
          <Row className="g-4 g-lg-5">
            <Col lg={8}>
              <Reveal>
                <h2>The challenge</h2>
                <p className="mt-3">{project.challenge}</p>
              </Reveal>
              <Reveal className="mt-5">
                <h2>Our solution</h2>
                <p className="mt-3">{project.solution}</p>
              </Reveal>
              <Reveal className="mt-5">
                <h2>Key features</h2>
                <Row as="ul" className="list-unstyled g-3 mt-2">
                  {project.features.map((f) => (
                    <Col as="li" sm={6} key={f} className="d-flex gap-3 align-items-center">
                      <span className="icon-badge" style={{ width: 40, height: 40, fontSize: '1.1rem' }}><Icon name="tick" /></span>
                      <span className="fw-semibold">{f}</span>
                    </Col>
                  ))}
                </Row>
              </Reveal>
            </Col>
            <Col lg={4}>
              <aside className="card-soft" aria-labelledby="tech-used">
                <h2 id="tech-used" className="h3 mt-0">Technologies used</h2>
                <ul className="tech-badges mt-3 mb-4">
                  {project.technologies.map((t) => <li key={t}>{t}</li>)}
                </ul>
                <h2 className="h3">Category</h2>
                <p><Link to={`/work?category=${encodeURIComponent(project.category)}`}>{project.category}</Link></p>
                {project.liveUrl && (
                  <>
                    <h2 className="h3">Live site</h2>
                    <p className="mb-0">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        {project.liveUrl.replace(/^https?:\/\//, '')}<span className="visually-hidden"> (opens in a new tab)</span>
                      </a>
                    </p>
                  </>
                )}
              </aside>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-grey" aria-labelledby="gallery-title">
        <Container>
          <SectionHeading id="gallery-title" eyebrow="Gallery" title="Screens and visuals" lead="Select an image to view it larger." />
          {/* TODO: placeholders – replace files in src/assets/projects/<slug>/ with real, anonymised screenshots. */}
          <Gallery images={project.images} title={project.title} />
        </Container>
      </section>

      <CtaBand title="Want something similar? Get a free quote" text="Tell us what you need and we’ll send a fixed, itemised quote." secondary={null} />

      <section className="section pt-0" aria-labelledby="more-title">
        <Container>
          <SectionHeading id="more-title" eyebrow="More work" title="Other projects" />
          <Row className="g-4">
            {more.map((p) => <Col md={6} lg={4} key={p.slug}><ProjectCard project={p} /></Col>)}
          </Row>
        </Container>
      </section>
    </>
  );
}
