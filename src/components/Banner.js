import { Container, Row, Col } from "react-bootstrap";
import { ArrowUpRight, ArrowDown, Stars } from "react-bootstrap-icons";
import { SystemVisual } from "./SystemVisual";

export const Banner = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-grid" aria-hidden="true" />
      <div className="hero-glow hero-glow-one" aria-hidden="true" />
      <div className="hero-glow hero-glow-two" aria-hidden="true" />
      <Container className="hero-container">
        <Row className="align-items-center gy-5">
          <Col lg={7}>
            <div className="hero-copy">
              <div className="eyebrow"><span className="eyebrow-pulse" /> INDEPENDENT ENGINEER · FOUNDER AT DEV ENGINE AI</div>
              <p className="hero-kicker">HELLO, I'M NEHA <span>↗</span></p>
              <h1>I build <span className="hero-emphasis">bold ideas</span><br />into real software.</h1>
              <p className="hero-description">
                Senior full-stack engineer and product builder working across thoughtful interfaces,
                scalable systems, and AI-powered tools. I like the hard problems—and making the
                solutions feel effortless.
              </p>
              <div className="hero-actions">
                <a className="button-primary" href="#project">Explore my work <ArrowUpRight /></a>
                <a className="button-quiet" href="#connect">Let's talk <span>↗</span></a>
              </div>
              <div className="hero-proof">
                <div><strong>5+ years</strong><span>Enterprise engineering</span></div>
                <div className="proof-divider" />
                <div><strong>Full-stack</strong><span>From idea to deployment</span></div>
              </div>
            </div>
          </Col>
          <Col lg={5}>
            <div className="hero-art" aria-label="Interactive constellation representing Neha’s engineering universe">
              <SystemVisual />
              <div className="art-orbit orbit-one" />
              <div className="art-orbit orbit-two" />
              <div className="art-orbit orbit-three" />
              <div className="art-core"><span>NP</span><i /></div>
              <div className="art-node node-top"><span className="node-dot" /><div><small>BUILD MODE</small><strong>ON</strong></div><Stars /></div>
              <div className="art-node node-left"><span className="node-icon">{"</>"}</span><div><small>ENGINEERING</small><strong>Full-stack</strong></div></div>
              <div className="art-node node-right"><span className="node-icon">✳</span><div><small>STUDIO</small><strong>Dev Engine AI</strong></div></div>
              <div className="art-caption"><span className="caption-line" /> SYSTEMS THINKING <span>×</span> CREATIVE BUILDING</div>
              <div className="art-coordinate">30°19' N<br />78°02' E</div>
            </div>
          </Col>
        </Row>
        <a className="hero-scroll" href="#skills"><span>SCROLL TO EXPLORE</span><ArrowDown /></a>
      </Container>
    </section>
  );
};
