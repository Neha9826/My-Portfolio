import { Col, Container, Row } from "react-bootstrap";
import { SkillsVisual } from "./SkillsVisual";

const skillGroups = [
  {
    number: "01",
    title: "Frontend & Product UI",
    description: "Building responsive, maintainable interfaces and product experiences.",
    skills: ["React", "Next.js", "TypeScript", "JavaScript", "HTML & CSS", "Bootstrap"],
  },
  {
    number: "02",
    title: "Backend & APIs",
    description: "Designing application logic, integrations, and service boundaries.",
    skills: ["Node.js", "Express", "PHP", "Laravel", "REST APIs", "GraphQL", "gRPC"],
  },
  {
    number: "03",
    title: "Data & Architecture",
    description: "Structuring reliable data models and multi-tenant applications.",
    skills: ["MySQL", "PostgreSQL", "MongoDB", "Multi-tenancy", "System Design"],
  },
  {
    number: "04",
    title: "Delivery & Tooling",
    description: "Taking features from local development through testing and delivery.",
    skills: ["Git", "Docker", "CI/CD fundamentals", "Jest", "Firebase"],
  },
];

export const Skills = () => (
  <section className="skill" id="skills">
    <SkillsVisual />
    <Container>
      <div className="section-heading">
        <span className="section-eyebrow">THE TOOLKIT</span>
        <h2>Built across the stack<span>.</span></h2>
        <p>
          A practical mix of product engineering, backend systems, and the
          architecture that connects them.
        </p>
      </div>
      <Row className="g-3 skill-groups">
        {skillGroups.map((group) => (
          <Col key={group.number} xs={12} md={6}>
            <article className="skill-card">
              <div className="skill-card-top">
                <span className="skill-number">{group.number}</span>
                <span className="skill-card-mark" aria-hidden="true">↗</span>
              </div>
              <h3>{group.title}</h3>
              <p>{group.description}</p>
              <div className="skill-tags">
                {group.skills.map((skill) => (
                  <span key={skill}>{skill}</span>
                ))}
              </div>
            </article>
          </Col>
        ))}
      </Row>
    </Container>
  </section>
);
