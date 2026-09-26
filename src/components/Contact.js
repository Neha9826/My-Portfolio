import { useState, useRef } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight, Envelope } from "react-bootstrap-icons";
import contactImg from "../assets/img/contact-img.svg";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "emailjs-com";
import Alert from "@mui/material/Alert";

export const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState(null);
  const [isSending, setIsSending] = useState(false);

  const sendEmail = async (e) => {
    e.preventDefault();
    if (isSending) return;

    setIsSending(true);
    setStatus(null);

    try {
      await emailjs.sendForm(
        "service_gcoyzjf",
        "template_qcl9ylb",
        form.current,
        "aLaNQXgqPrTqc3o_X"
      );
      setStatus({
        success: true,
        message: "Thanks for reaching out. Your message has been sent.",
      });
      form.current.reset();
    } catch (error) {
      setStatus({
        success: false,
        message: "Your message couldn't be sent. Please try again or email me directly.",
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center gy-5">
          <Col xs={12} md={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`contact-intro ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <span className="section-eyebrow">HAVE A GOOD ONE IN MIND?</span>
                  <h2>Let’s build something <span>meaningful.</span></h2>
                  <p>
                    Have a product to build, a tricky engineering problem, or an idea
                    you’d like to explore? Tell me a little about it. I’d love to hear
                    what you’re working on.
                  </p>
                  <a className="contact-direct-link" href="mailto:nehapattnayak123@gmail.com">
                    <Envelope size={17} /> nehapattnayak123@gmail.com <ArrowUpRight size={16} />
                  </a>
                  <img className="contact-illustration" src={contactImg} alt="" aria-hidden="true" />
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={`contact-form-panel ${isVisible ? "animate__animated animate__fadeIn" : ""}`}>
                  <div className="contact-form-heading">
                    <span>01 / START A CONVERSATION</span>
                    <h3>Tell me what you’re building.</h3>
                  </div>
                  <form ref={form} onSubmit={sendEmail}>
                    <Row className="g-3">
                      <Col xs={12} sm={6}>
                        <label className="contact-field-label" htmlFor="contact-first-name">First name</label>
                        <input id="contact-first-name" type="text" placeholder="Your name" name="firstName" autoComplete="given-name" required />
                      </Col>
                      <Col xs={12} sm={6}>
                        <label className="contact-field-label" htmlFor="contact-last-name">Last name <span>(optional)</span></label>
                        <input id="contact-last-name" type="text" placeholder="Your surname" name="lastName" autoComplete="family-name" />
                      </Col>
                      <Col xs={12} sm={6}>
                        <label className="contact-field-label" htmlFor="contact-email">Email address</label>
                        <input id="contact-email" type="email" placeholder="you@company.com" name="email" autoComplete="email" required />
                      </Col>
                      <Col xs={12} sm={6}>
                        <label className="contact-field-label" htmlFor="contact-phone">Phone <span>(optional)</span></label>
                        <input id="contact-phone" type="tel" placeholder="Your number" name="phone" autoComplete="tel" />
                      </Col>
                      <Col xs={12}>
                        <label className="contact-field-label" htmlFor="contact-message">What’s on your mind?</label>
                        <textarea id="contact-message" rows="5" placeholder="A little about your project, idea, or challenge..." name="message" required />
                      </Col>
                      <Col xs={12}>
                        <button type="submit" disabled={isSending}>
                          {isSending ? "Sending…" : "Send your message"} <ArrowUpRight size={17} />
                        </button>
                      </Col>
                    </Row>
                    {status && (
                      <Alert className="contact-status" severity={status.success ? "success" : "error"}>
                        {status.message}
                      </Alert>
                    )}
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
