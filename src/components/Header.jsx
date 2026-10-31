import { useEffect, useState } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { Navbar, Nav, Container } from 'react-bootstrap';
import BrandMark from './BrandMark.jsx';
import { navLinks } from '../data/site.js';

export default function Header() {
  const [expanded, setExpanded] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => setExpanded(false), [pathname]);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <Navbar
      as="header"
      role="banner"
      expand="xl"
      sticky="top"
      expanded={expanded}
      onToggle={setExpanded}
      className={`site-nav${scrolled ? ' scrolled' : ''}`}
    >
      <Container>
        <BrandMark />
        <Navbar.Toggle aria-controls="main-nav" label={expanded ? 'Close menu' : 'Open menu'} />
        <Navbar.Collapse id="main-nav">
          <Nav as="nav" aria-label="Main" className="ms-auto align-items-xl-center gap-xl-1">
            {navLinks.map((l) => (
              <Nav.Link key={l.to} as={NavLink} to={l.to}>
                {l.label}
              </Nav.Link>
            ))}
          </Nav>
          <Link to="/contact" className="btn btn-accent ms-xl-3 mt-3 mt-xl-0">
            Get a Free Quote
          </Link>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
