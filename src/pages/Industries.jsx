import { Link } from 'react-router-dom';
import ResponsiveImg from '../components/ResponsiveImg.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import { PageHero, CtaBand } from '../components/Sections.jsx';
import { industries } from '../data/industries.js';
import { getService } from '../data/services.js';
import shopFront from '../assets/images/shop-front.webp';

export default function Industries() {
  return (
    <>
      <Seo
        title="Industries we work with"
        description="Software for restaurants and cafés, hotels, healthcare and aesthetic clinics, garages, retail, convenience stores and delivery, and charities."
      />
      <PageHero
        eyebrow="Industries"
        title="Software built for the way your industry works"
        lead="We focus on local and growing businesses, where the right software saves hours every week and keeps customers coming back."
        image={shopFront}
        imageAlt="Independent shop front with lamps in the window and a bicycle outside"
        breadcrumbs={[{ label: 'Industries' }]}
      />
      {industries.map((ind, i) => (
        <section key={ind.slug} id={ind.slug} className={`section${i % 2 ? ' bg-grey' : ''}`} aria-labelledby={`${ind.slug}-title`}>
          <Container>
            <Row className={`g-4 g-lg-5 align-items-center${i % 2 ? ' flex-lg-row-reverse' : ''}`}>
              <Col lg={6}>
                <Reveal>
                  <ResponsiveImg src={ind.image} alt={ind.imageAlt} className="rounded-img" sizes="(min-width: 992px) 50vw, 100vw" loading="lazy" decoding="async" width="1200" height="800" style={{ aspectRatio: '3/2' }} />
                </Reveal>
              </Col>
              <Col lg={6}>
                <Reveal>
                  <span className="icon-badge mb-3"><Icon name={ind.icon} /></span>
                  <h2 id={`${ind.slug}-title`}>{ind.name}</h2>
                  <p className="lead mt-3">{ind.text}</p>
                  <h3 className="h6 text-uppercase mt-4" style={{ letterSpacing: '0.08em' }}>Relevant services</h3>
                  <ul className="check-list mb-4">
                    {ind.services.map((slug) => {
                      const s = getService(slug);
                      return s && <li key={slug}><Icon name="tick" /> <Link to={`/services/${slug}`}>{s.title}</Link></li>;
                    })}
                  </ul>
                  {ind.link && <Link to={ind.link} className="btn btn-navy">Explore Restaurant Solutions</Link>}
                </Reveal>
              </Col>
            </Row>
          </Container>
        </section>
      ))}
      <CtaBand title="Don’t see your industry?" text="We build custom software for all kinds of businesses. Tell us what you need." />
    </>
  );
}
