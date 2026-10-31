import { Link } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import Seo from '../components/Seo.jsx';

export default function NotFound() {
  return (
    <>
      <Seo title="Page not found" description="Sorry, we couldn’t find that page." noindex />
      <section className="section text-center">
        <Container style={{ maxWidth: 640 }}>
          <p className="not-found-code" aria-hidden="true">404</p>
          <h1>Sorry, we couldn’t find that page</h1>
          <p className="lead mt-3">The page may have moved, or the link may be incorrect.</p>
          <div className="d-flex flex-wrap gap-3 justify-content-center mt-4">
            <Link to="/" className="btn btn-navy">Back to home</Link>
            <Link to="/services" className="btn btn-outline-navy">Our services</Link>
            <Link to="/contact" className="btn btn-accent">Contact us</Link>
          </div>
        </Container>
      </section>
    </>
  );
}
