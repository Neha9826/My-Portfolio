import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/linkedin.svg";
import navIcon2 from "../assets/img/mail.svg";
import navIcon3 from "../assets/img/github.svg";
import navIcon4 from "../assets/img/call.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <div className="footer-main">
          <div className="footer-brand">
            <a className="footer-monogram" href="#home" aria-label="Back to top">
              NP<span>.</span>
            </a>
            <p>Thoughtful engineering.<br />Useful things, built well.</p>
          </div>

          <nav className="footer-nav" aria-label="Footer navigation">
            <a href="#home">Home</a>
            <a href="#skills">Expertise</a>
            <a href="#project">Selected work</a>
            <a href="#connect">Contact</a>
          </nav>

          <div className="footer-contact">
            <span className="footer-label">SAY HELLO</span>
            <a href="mailto:nehapattnayak123@gmail.com">nehapattnayak123@gmail.com</a>
            <div className="footer-socials">
              <a aria-label="Call Neha" href="tel:+918260320789"><img src={navIcon4} alt="" /></a>
              <a aria-label="Email Neha" href="mailto:nehapattnayak123@gmail.com"><img src={navIcon2} alt="" /></a>
              <a aria-label="LinkedIn profile" target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/neha-pattnayak-8119b2188/"><img src={navIcon1} alt="" /></a>
              <a aria-label="GitHub profile" target="_blank" rel="noreferrer" href="https://github.com/Neha9826"><img src={navIcon3} alt="" /></a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <span>© {new Date().getFullYear()} Neha Pattnayak</span>
          <span>Designed with intent. Built with care.</span>
          <a href="#home">Back to top ↑</a>
        </div>
      </Container>
    </footer>
  );
};
