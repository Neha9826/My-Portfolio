import { Container } from "react-bootstrap";

export const About = () => (
  <section className="about-section" id="about">
    <Container>
      <div className="about-inner">
        <div className="about-copy">
          <span className="section-eyebrow">A LITTLE ABOUT ME</span>
          <h2>Curiosity turns<br /><span>into systems.</span></h2>
          <p>
            I’m Neha — a full-stack engineer and founder at Dev Engine AI, with
            7+ years across software development, from early professional work
            and client projects to building production systems. The 5+ years
            highlighted above refers specifically to my enterprise engineering experience.
          </p>
          <p>
            I work across the full software development lifecycle: shaping ideas
            into requirements and roadmaps, planning product flows and UI,
            designing system architecture and data models, then building the
            frontend, backend services, and APIs. I also handle testing,
            deployment, and iteration—so I can take a product from concept
            through delivery, not just write a piece of the code.
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
