import { useState, useEffect } from "react";
import { Navbar, Nav, Container } from "react-bootstrap";
import logo from '../assets/img/LogoNeha.png';
import navIcon1 from '../assets/img/mail.svg';
import navIcon2 from '../assets/img/linkedin.svg';
import navIcon3 from '../assets/img/github.svg';
import navIcon4 from '../assets/img/call.svg';
// import { HashLink } from 'react-router-hash-link';
// import { BrowserRouter as Router } from "react-router-dom";

export const NavBar = () => {

  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    }

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, [])

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  }

  return (
    // <Router>
      <Navbar expand="md" className={scrolled ? "scrolled" : ""}>
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav">
            <span className="navbar-toggler-icon"></span>
          </Navbar.Toggle>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link href="#home" className={activeLink === 'home' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('home')}>Home</Nav.Link>
              <Nav.Link href="#skills" className={activeLink === 'skills' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('skills')}>Skills</Nav.Link>
              <Nav.Link href="#project" className={activeLink === 'projects' ? 'active navbar-link' : 'navbar-link'} onClick={() => onUpdateActiveLink('projects')}>Projects</Nav.Link>
            </Nav>
            <span className="navbar-text">
              <div className="social-icon">
                <a target="_blank" rel="noreferrer" href="tel:+918260320789"><img src={navIcon4} alt="" /></a>
                <a target="_blank" rel="noreferrer" href="https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox?compose=CllgCJNqKgSGHKjMdKFnhWVCDCRnHfrrXWVSlwfgMZMbDmBdpSKHhvqdqMmrKTNchZPJbQVwKsV"><img src={navIcon1} alt="" /></a>
                <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/neha-pattnayak-8119b2188/"><img src={navIcon2} alt="" /></a>
                <a target="_blank" rel="noreferrer" href="https://github.com/Neha9826"><img src={navIcon3} alt="" /></a>
              </div>
              {/* <HashLink to='#connect'> */}
                <a href="#connect"><button className="vvd"><span>Let’s Connect</span></button></a>
              {/* </HashLink> */}
            </span>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    // </Router>
  )
}
