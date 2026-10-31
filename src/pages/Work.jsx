import { useSearchParams } from 'react-router-dom';
import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo.jsx';
import { ProjectCard } from '../components/Cards.jsx';
import { PageHero, CtaBand, SocialProofPlaceholder } from '../components/Sections.jsx';
import { projects, projectCategories } from '../data/projects.js';

const ALL = 'All';

export default function Work() {
  const [params, setParams] = useSearchParams();
  const requested = params.get('category');
  const active = projectCategories.includes(requested) ? requested : ALL;
  const list = active === ALL ? projects : projects.filter((p) => p.category === active);

  const choose = (cat) => {
    if (cat === ALL) setParams({}, { replace: true });
    else setParams({ category: cat }, { replace: true });
  };

  return (
    <>
      <Seo
        title="Our work: portfolio"
        description="Projects built by the Strivera Global development team: hotel, restaurant, garage and clinic systems, a charity website, delivery platform management and an e-commerce app."
      />
      <PageHero
        eyebrow="Our work"
        title="Built by our development team"
        lead="Websites, web apps, mobile apps and content services we have designed, built and deployed for UK organisations."
        breadcrumbs={[{ label: 'Our work' }]}
      />
      <section className="section" aria-labelledby="portfolio-title">
        <Container>
          <h2 id="portfolio-title" className="visually-hidden">Projects</h2>
          <div className="filter-bar" role="group" aria-label="Filter projects by category">
            {[ALL, ...projectCategories].map((c) => (
              <button type="button" key={c} aria-pressed={active === c} onClick={() => choose(c)}>
                {c}
              </button>
            ))}
          </div>
          <p className="visually-hidden" aria-live="polite">
            Showing {list.length} {list.length === 1 ? 'project' : 'projects'}{active !== ALL ? ` in ${active}` : ''}.
          </p>
          <Row className="g-4">
            {list.map((p) => (
              <Col md={6} lg={4} key={p.slug}>
                <ProjectCard project={p} />
              </Col>
            ))}
          </Row>
          {list.length === 0 && <p className="text-center">No projects in this category yet.</p>}
        </Container>
      </section>
      <section className="section-sm pt-0" aria-label="Testimonials">
        <Container><SocialProofPlaceholder /></Container>
      </section>
      <CtaBand title="Want something similar?" text="Tell us about your project and get a free, fixed quote." />
    </>
  );
}
