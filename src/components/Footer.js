import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from '../assets/img/LogoNeha.png';
import navIcon1 from '../assets/img/linkedin.svg';
import navIcon2 from '../assets/img/mail.svg';
import navIcon3 from '../assets/img/github.svg';
import navIcon4 from '../assets/img/call.svg';

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <div className="set-margin"></div>
          <Col size={12} sm={6}>
            <img className="logo" src={logo} alt="Logo" />
            <p></p>
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
                <a href="tel:+918260320789"><img src={navIcon4} alt="" /></a>
                <a href="https://nehapattnayak123@gmail.com"><img className="mail-icon" src={navIcon2} alt="" /></a>
                <a href="https://www.linkedin.com/in/neha-pattnayak-8119b2188/"><img className="icon-li" src={navIcon1} alt="" /></a>
                <a href="https://github.com/Neha9826"><img className="git-icon" src={navIcon3} alt="" /></a>
                <p>Email id: nehapattnayak123@gmail.com</p>
                <p>Call: +91-8260320789</p>
            </div>
            
          </Col>
        </Row>
      </Container>
    </footer>
  )
}