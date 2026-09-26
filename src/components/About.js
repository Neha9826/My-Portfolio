import { Container } from "react-bootstrap";

export const About = () => (
  <section className="about-section" id="about">
    <Container>
      <div className="about-inner">
        <div className="about-copy">
          <span className="section-eyebrow">A LITTLE ABOUT ME</span>
          <h2>Curiosity turns<br /><span>into systems.</span></h2>
          <p>
            I’m Neha, Founder & Lead Full Stack Engineer at Dev Engine AI. I
            bring 7+ years of software development experience, including 5+
            years in enterprise engineering, combining product thinking with
            hands-on technical leadership to turn complex requirements into
            reliable, production-ready software.
          </p>
          <p>
            I lead delivery across the full product lifecycle—from defining
            scope and roadmaps to shaping user experiences, architecting
            systems, and engineering frontend applications, backend services,
            APIs, and data layers. I drive the work through testing, deployment,
            and continuous improvement, connecting product decisions with
            sound engineering execution from first principles to production.
          </p>
          <div className="about-principles">
            <span><i /> Think in systems</span>
            <span><i /> Build with intent</span>
            <span><i /> Make complexity feel clear</span>
          </div>
        </div>
        <div className="about-aside" aria-label="Over seven years in software engineering">
          <span className="about-aside-number">7<span className="about-aside-plus">+</span></span>
          <span className="about-aside-rule" />
          <span className="about-aside-caption">YEARS IN SOFTWARE<br />ENGINEERING</span>
        </div>
      </div>
    </Container>
  </section>
);
