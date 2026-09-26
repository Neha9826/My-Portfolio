import { useState } from "react";
import { Container } from "react-bootstrap";
import { SkillsVisual } from "./SkillsVisual";

const landscapeNodes = [
  { id: "frontend", title: "Frontend", eyebrow: "01 / EXPERIENCE", skills: "React · Next.js · TypeScript · JavaScript", detail: "Interfaces, component systems, and product experiences." },
  { id: "api", title: "APIs & Services", eyebrow: "02 / CONNECT", skills: "Node.js · Express · Laravel · REST · GraphQL · gRPC", detail: "Service boundaries, integrations, and application logic." },
  { id: "data", title: "Data", eyebrow: "03 / MODEL", skills: "MySQL · PostgreSQL · MongoDB", detail: "Data modeling, query performance, and persistence." },
  { id: "architecture", title: "Architecture", eyebrow: "04 / STRUCTURE", skills: "System design · Multi-tenancy", detail: "Designing systems that stay understandable as they grow." },
  { id: "delivery", title: "Delivery", eyebrow: "05 / SHIP", skills: "Git · Docker · CI/CD · Jest · Firebase", detail: "From local development through testing and delivery." },
  { id: "ai", title: "AI & Tooling", eyebrow: "06 / EXPLORE", skills: "AI-assisted workflows · Architecture review", detail: "Exploring practical AI capabilities within engineering tools." },
];

export const Skills = () => {
  const [activeNode, setActiveNode] = useState("architecture");
  const active = landscapeNodes.find((node) => node.id === activeNode) || landscapeNodes[3];
  return (
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
      <div className="skills-landscape">
        <div className="skills-map" aria-label="Interactive map of connected engineering disciplines">
          <svg className="skills-map-lines" viewBox="0 0 1000 390" preserveAspectRatio="none" aria-hidden="true">
            <path className={activeNode === "frontend" || activeNode === "architecture" ? "is-active" : ""} d="M145 100 C260 100 330 155 450 190" />
            <path className={activeNode === "api" || activeNode === "architecture" ? "is-active" : ""} d="M500 70 L500 190" />
            <path className={activeNode === "data" || activeNode === "architecture" ? "is-active" : ""} d="M855 125 C740 125 675 160 550 190" />
            <path className={activeNode === "delivery" || activeNode === "architecture" ? "is-active" : ""} d="M185 330 C300 330 360 250 450 215" />
            <path className={activeNode === "ai" || activeNode === "architecture" ? "is-active" : ""} d="M820 330 C700 330 640 250 550 215" />
          </svg>
          {landscapeNodes.map((node) => (
            <button
              type="button"
              key={node.id}
              className={`skills-map-node node-${node.id} ${activeNode === node.id ? "is-active" : ""}`}
              onMouseEnter={() => setActiveNode(node.id)}
              onFocus={() => setActiveNode(node.id)}
              onClick={() => setActiveNode(node.id)}
              aria-pressed={activeNode === node.id}
            >
              <small>{node.eyebrow}</small>
              <strong>{node.title}</strong>
              <span>{node.skills}</span>
            </button>
          ))}
        </div>
        <div className="skills-map-detail" aria-live="polite">
          <div><strong>{active.title}</strong><p>{active.detail}</p></div>
          <span className="skill-detail-index">{active.eyebrow}</span>
        </div>
      </div>
    </Container>
  </section>
  );
};
