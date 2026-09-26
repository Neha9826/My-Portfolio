import { Container } from "react-bootstrap";

export const About = () => (
  <section className="about-section" id="about">
    <Container>
      <div className="about-inner">
        <div className="about-copy">
          <span className="section-eyebrow">A LITTLE ABOUT ME</span>
          <h2>Curiosity turns<br /><span>into systems.</span></h2>
          <p>
            I’m Neha — a full-stack engineer and founder at Dev Engine AI. I work
            across product interfaces, backend services, and the architecture
            that connects them.
          </p>
          <p>
            I’m drawn to the hard problems: making complex systems easier to
            understand, building thoughtful experiences around them, and turning
            ideas into software people can use.
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
