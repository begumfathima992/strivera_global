import { Link } from 'react-router-dom';
import ResponsiveImg from '../components/ResponsiveImg.jsx';
import { Container, Row, Col } from 'react-bootstrap';
import Seo from '../components/Seo.jsx';
import Icon from '../components/Icon.jsx';
import Reveal from '../components/Reveal.jsx';
import RestaurantShowcase from '../components/RestaurantShowcase.jsx';
import { PageHero, SectionHeading, CtaBand, SocialProofPlaceholder } from '../components/Sections.jsx';
import { restaurantModules, restaurantSteps } from '../data/restaurant.js';
import { pricingFootnote } from '../data/site.js';
import heroImg from '../assets/images/restaurant-hero.webp';
import chefImg from '../assets/images/chef-cooking.webp';
import foodImg from '../assets/images/food-plated.webp';

export default function RestaurantSolutions() {
  return (
    <>
      <Seo
        title="Restaurant management software and apps"
        description="One platform to take bookings, show your menu, reward loyal customers and run your restaurant: table booking, digital menus, online ordering, loyalty and more."
      />
      <PageHero
        eyebrow="Restaurant Solutions"
        title="One platform to take bookings, show your menu, reward loyal customers and run your restaurant"
        lead="Table booking, digital and QR menus, online ordering, loyalty, a customer app and an admin dashboard, built around the way your restaurant works."
        image={heroImg}
        imageAlt="Warm restaurant dining room with wooden tables and pendant lights"
        breadcrumbs={[{ label: 'Restaurant Solutions' }]}
      >
        <div className="d-flex flex-wrap gap-3 mt-4">
          <Link to="/contact?service=restaurant-management-systems" className="btn btn-accent btn-lg">Request a free demo</Link>
          <a href="#modules" className="btn btn-outline-light-strong btn-lg">Explore the modules</a>
        </div>
      </PageHero>

      <section className="section" id="modules" aria-labelledby="modules-title">
        <Container>
          <SectionHeading
            id="modules-title"
            eyebrow="Modules"
            title="Everything your restaurant needs, in one place"
            lead="Start with the modules you need today and add more as you grow. Every module is customised to your brand and workflow."
            center
          />
          <Row className="g-4">
            {restaurantModules.map((m, i) => (
              <Col md={6} lg={4} key={m.title}>
                <Reveal className="card-soft" delay={(i % 3) * 70}>
                  <span className="icon-badge"><Icon name={m.icon} /></span>
                  <h3>{m.title}</h3>
                  <p>{m.text}</p>
                  <ul className="check-list">
                    {m.bullets.map((b) => <li key={b}><Icon name="tick" /> {b}</li>)}
                  </ul>
                </Reveal>
              </Col>
            ))}
          </Row>
        </Container>
      </section>

      <section className="section bg-grey" aria-labelledby="showcase-title">
        <Container>
          <SectionHeading
            id="showcase-title"
            eyebrow="See it in action"
            title="An admin dashboard for your team, an app for your guests"
            lead="An illustration of the platform. Sample data only: your version is designed around your brand."
            center
          />
          <Reveal><RestaurantShowcase /></Reveal>
        </Container>
      </section>

      <section className="section" aria-labelledby="how-title">
        <Container>
          <Row className="g-4 g-lg-5 align-items-center">
            <Col lg={6}>
              <SectionHeading id="how-title" eyebrow="How it works" title="How it works for your restaurant" />
              <ol className="timeline timeline-vertical">
                {restaurantSteps.map((s, i) => (
                  <Reveal as="li" key={s.title} delay={i * 80}>
                    <h3>{s.title}</h3>
                    <p>{s.text}</p>
                  </Reveal>
                ))}
              </ol>
            </Col>
            <Col lg={6}>
              <Row className="g-3">
                <Col xs={12}>
                  <Reveal><ResponsiveImg src={chefImg} alt="Chef cooking over a flaming pan in a professional kitchen" className="rounded-img" sizes="(min-width: 992px) 50vw, 100vw" loading="lazy" decoding="async" width="1200" height="800" style={{ aspectRatio: '16/10' }} /></Reveal>
                </Col>
                <Col xs={12}>
                  <Reveal delay={100}><ResponsiveImg src={foodImg} alt="Beautifully plated dish served on a restaurant table" className="rounded-img" sizes="(min-width: 992px) 50vw, 100vw" loading="lazy" decoding="async" width="1200" height="800" style={{ aspectRatio: '16/8' }} /></Reveal>
                </Col>
              </Row>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section bg-navy" aria-labelledby="pricing-title">
        <Container>
          <Row className="g-4 g-lg-5 align-items-center">
            <Col lg={7}>
              <span className="eyebrow">Pricing</span>
              <h2 id="pricing-title">Pay for what you need, nothing more</h2>
              <p className="lead mt-3">
                Every restaurant is different, so we quote each platform individually based on the modules you choose. Our
                rates are up to 25% below typical UK agency rates, and you can start small and add modules later.
              </p>
              <p className="footnote" style={{ color: 'rgba(255,255,255,0.8)' }}>* {pricingFootnote}</p>
            </Col>
            <Col lg={5}>
              <ul className="check-list mb-4">
                <li><Icon name="tick" /> Free demo and fixed, itemised quote</li>
                <li><Icon name="tick" /> Set-up, menu import and staff training</li>
                <li><Icon name="tick" /> Ongoing support and updates</li>
                <li><Icon name="tick" /> You own your customer data</li>
              </ul>
              <Link to="/contact?service=restaurant-management-systems" className="btn btn-accent btn-lg">Request a free demo</Link>
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-sm" aria-label="Testimonials">
        <Container>
          <SocialProofPlaceholder />
        </Container>
      </section>

      <CtaBand
        title="See the platform with your own menu"
        text="Book a free, no-obligation demo and we’ll show you how it would work for your restaurant."
        primary={{ to: '/contact?service=restaurant-management-systems', label: 'Request a free demo' }}
        secondary={{ to: '/work/restaurant-platform', label: 'View the restaurant project' }}
      />
    </>
  );
}
