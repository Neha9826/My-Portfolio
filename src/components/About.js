import { Container } from "react-bootstrap";
import { SkillsVisual } from "./SkillsVisual";

export const About = () => (
  <section className="about-section" id="about">
    <div className="about-network" aria-hidden="true"><SkillsVisual /></div>
    <Container className="about-inner">
      <div className="about-visual" aria-hidden="true">
        <span className="about-orbit about-orbit-one" />
        <span className="about-orbit about-orbit-two" />
        <span className="about-orbit about-orbit-three" />
        <span className="about-node about-node-a" />
        <span className="about-node about-node-b" />
        <span className="about-node about-node-c" />
        <span className="about-core">NP</span>
        <span className="about-visual-label">PEOPLE · PRODUCTS · SYSTEMS</span>
      </div>
      <div className="about-copy">
        <span className="section-eyebrow">02 — THE ENGINEER</span>
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
    </Container>
  </section>
);
