import { React, useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import emailjs from "emailjs-com";
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

  export const Contact = () => {
    const form = useRef();
    const [status, setStatus] = useState({});
   
    const sendEmail = (e) => {
    e.preventDefault();
   
    emailjs.sendForm('service_gcoyzjf', 'template_qcl9ylb', form.current, 'aLaNQXgqPrTqc3o_X')
      .then((result) => {
          console.log(result.text);
          setStatus({ succes: true, message: 'Message sent successfully'});
      }, (error) => {
          console.log(error.text);
          setStatus({ succes: false, message: 'Something went wrong, please try again later.'});
      });

      e.target.reset()
      
    }

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <img className={isVisible ? "animate__animated animate__zoomIn" : ""} src={contactImg} alt="Contact Us"/>
              }
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                <h2>Get In Touch</h2>

                <form ref={form} onSubmit={sendEmail}>
                  <Row>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="First Name" name="firstName" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="text"  placeholder="Last Name" name="lastName"/>
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="email"  placeholder="Email Address" name="email" />
                    </Col>
                    <Col size={12} sm={6} className="px-1">
                      <input type="tel"  placeholder="Phone No." name="phone"/>
                    </Col>
                    <Col size={12} className="px-1">
                      <textarea rows="6"  placeholder="Message" name="message"></textarea>
                      <button type="submit"><span>Send</span></button>
                    </Col>
                  </Row>
                  <Stack paddingTop={5} sx={{ width: '100%' }} spacing={2}>
                  {
                      status.message &&
                      <Alert severity="success">
                        <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                      </Alert>
                    }
                  </Stack>
                </form>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
