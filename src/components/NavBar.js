import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import navIcon1 from '../assets/img/mail.svg';
import navIcon2 from '../assets/img/linkedin.svg';
import navIcon3 from '../assets/img/github.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => setActiveLink(value);

  return (
    <Navbar expand="lg" className={scrolled ? "site-nav scrolled" : "site-nav"}>
      <Container>
        <Navbar.Brand href="#home" className="brand-mark" aria-label="Neha Pattnayak home">
          NP<span>.</span>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="portfolio-nav" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </Navbar.Toggle>
        <Navbar.Collapse id="portfolio-nav">
          <Nav className="ms-auto align-items-lg-center">
            <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
            <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Expertise</Nav.Link>
            <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Selected work</Nav.Link>
            <div className="nav-socials">
              <a aria-label="Email Neha" href="mailto:nehapattnayak123@gmail.com"><img src={navIcon1} alt="" /></a>
              <a aria-label="LinkedIn profile" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/neha-pattnayak-8119b2188/"><img src={navIcon2} alt="" /></a>
              <a aria-label="GitHub profile" target="_blank" rel="noreferrer" href="https://github.com/Neha9826"><img src={navIcon3} alt="" /></a>
            </div>
            <a className="nav-cta" href="#connect">Let's connect <span>↗</span></a>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
