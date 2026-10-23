import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import {
  ArrowRight,
  ArrowUpRight,
  CodeSlash,
  Layers,
  Gear,
} from "react-bootstrap-icons";
import "./AISection.css";
import { SkillsVisual } from "./SkillsVisual";

const capabilities = [
  {
    number: "01",
    icon: Layers,
    title: "Context-aware AI",
    subtitle: "RAG · Embeddings · pgvector",
    description:
      "Build document experiences that retrieve relevant, workspace-scoped context before generating an answer.",
    tags: ["Retrieval", "Embeddings", "Citations"],
  },
  {
    number: "02",
    icon: Gear,
    title: "AI that works with tools",
    subtitle: "LLMs · Tool calling · APIs",
    description:
      "Connect language models to application tools and data to support useful, multi-step product workflows.",
    tags: ["LLM integration", "Tool calling", "APIs"],
  },
  {
    number: "03",
    icon: CodeSlash,
    title: "AI-assisted engineering",
    subtitle: "Development · Iteration · Validation",
    description:
      "Use AI to explore solutions and accelerate iteration, while keeping testing, maintainability, and sound architecture in the loop.",
    tags: ["Problem-solving", "Code iteration", "Human review"],
  },
];

const workflowSteps = [
  {
    label: "Ask",
    eyebrow: "01 / INPUT",
    title: "Start with intent.",
    description:
      "A user asks a question about information available to their workspace.",
    detail: "The application receives a clear question and the active workspace context.",
    nodes: ["User question", "Workspace"],
  },
  {
    label: "Retrieve",
    eyebrow: "02 / CONTEXT",
    title: "Find what matters.",
    description:
      "Embeddings and pgvector help retrieve relevant document chunks within the active workspace.",
    detail: "Relevant content is retrieved before the model forms its response.",
    nodes: ["Documents", "Embeddings", "pgvector"],
  },
  {
    label: "Reason + act",
    eyebrow: "03 / PROCESSING",
    title: "Connect context with tools.",
    description:
      "The language model works with retrieved context and the application's available tool-calling workflow.",
    detail: "The model can use the context and tools made available by the application.",
    nodes: ["Retrieved context", "LLM", "Tools / APIs"],
  },
  {
    label: "Respond",
    eyebrow: "04 / RESULT",
    title: "Return a grounded response.",
    description:
      "The application returns an answer with document citations and supports persistent chat history.",
    detail: "The result stays connected to its source material and conversation.",
    nodes: ["Answer", "Citations", "Chat history"],
  },
];

const projectExamples = [
  {
    number: "B",
    title: "Multi-Workspace Document Assistant",
    description: "Workspace-scoped RAG, document citations, tool calling, and chat history.",
    tags: ["RAG", "pgvector", "Groq"],
    href: "https://github.com/Neha9826/Multi-Workspace-Document-Assistant",
    linkLabel: "Explore project",
  },
  {
    number: "A",
    title: "Arch-OS",
    description: "An AI Architecture Reviewer alongside a visual system-design workspace.",
    tags: ["AI review", "System design"],
    href: "https://github.com/Neha9826/arch-os",
    linkLabel: "Explore project",
  },
  {
    number: "C",
    title: "Docs Studio",
    description: "An AI-assisted document workspace with editing, sharing, version history, and export.",
    tags: ["Document workflows", "Product engineering"],
    href: "https://github.com/Neha9826/Doc-Studio",
    linkLabel: "Explore project",
  },
];

export const AISection = ({ part = "all" } = {}) => {
  const [activeStep, setActiveStep] = useState(0);
  const selectedStep = workflowSteps[activeStep];

  return (
    <>
      {(part === "all" || part === "capabilities") && (
        <section className="ai-engineering-section ai-capabilities-section" id="ai-engineering">
          <div className="ai-section-glow" aria-hidden="true" />
          <SkillsVisual />
          <Container>
        <div className="section-heading ai-section-heading">
          <span className="section-eyebrow">APPLIED AI · PRODUCT ENGINEERING</span>
          <h2>
            Intelligence, <span>engineered.</span>
          </h2>
          <p>
            I bring AI into real software—combining models, relevant context,
            tools, and product engineering to turn promising capabilities into
            useful workflows.
          </p>
          <p className="ai-section-supporting-copy">
            From retrieval-augmented generation to AI-assisted engineering
            workflows, I focus on building systems that are useful, grounded,
            and maintainable.
          </p>
        </div>

        <Row className="g-3 ai-capability-grid">
          {capabilities.map((capability) => {
            const CapabilityIcon = capability.icon;
            return (
              <Col key={capability.number} xs={12} md={6} lg={4}>
                <article className="ai-capability-card">
                  <div className="ai-capability-top">
                    <span className="ai-capability-number">{capability.number}</span>
                    <span className="ai-capability-icon" aria-hidden="true">
                      <CapabilityIcon size={20} />
                    </span>
                  </div>
                  <h3>{capability.title}</h3>
                  <span className="ai-capability-subtitle">{capability.subtitle}</span>
                  <p>{capability.description}</p>
                  <div className="ai-capability-tags">
                    {capability.tags.map((tag) => (
                      <span key={tag}>{tag}</span>
                    ))}
                  </div>
                </article>
              </Col>
            );
          })}
        </Row>

          </Container>
        </section>
      )}
      {(part === "all" || part === "workflow") && (
        <section className="ai-engineering-section ai-workflow-section" aria-label="AI workflow and applied projects">
          <div className="ai-section-glow" aria-hidden="true" />
          <SkillsVisual />
          <Container>
        <div className="ai-workflow-heading">
          <span className="section-eyebrow">INSIDE THE WORKFLOW</span>
          <h3>From question to <span>grounded answer.</span></h3>
          <p>
            Explore a simplified view of how retrieval, language models, and
            application tools can work together.
          </p>
        </div>

        <div className="ai-workflow-shell">
          <div
            className="ai-workflow-step-list"
            role="group"
            aria-label="AI workflow steps"
          >
            {workflowSteps.map((step, index) => (
              <button
                type="button"
                className={activeStep === index ? "ai-workflow-step is-active" : "ai-workflow-step"}
                id={`ai-workflow-tab-${index}`}
                aria-pressed={activeStep === index}
                key={step.label}
                onClick={() => setActiveStep(index)}
              >
                <span className="ai-workflow-step-index">0{index + 1}</span>
                <span className="ai-workflow-step-label">{step.label}</span>
                <ArrowRight className="ai-workflow-step-arrow" size={16} aria-hidden="true" />
              </button>
            ))}
          </div>

          <div
            className="ai-workflow-detail"
            id="ai-workflow-panel"
            role="region"
            aria-label="Selected workflow stage"
            aria-live="polite"
            key={activeStep}
          >
            <div className="ai-workflow-meta">
              <span>{selectedStep.eyebrow}</span>
              <span className="ai-workflow-status"><i /> CONCEPTUAL FLOW</span>
            </div>
            <h4>{selectedStep.title}</h4>
            <p className="ai-workflow-description">{selectedStep.description}</p>

            <div className="ai-flow-visual" aria-label={`Workflow components for: ${selectedStep.label}`}>
              <div className="ai-flow-windowbar">
                <span className="ai-flow-window-dots" aria-hidden="true"><i /><i /><i /></span>
                <span>APPLIED AI SYSTEM</span>
                <Layers size={14} aria-hidden="true" />
              </div>
              <div className="ai-flow-nodes">
                {selectedStep.nodes.map((node, index) => (
                  <span className="ai-flow-node-wrap" key={node}>
                    <span className={index === selectedStep.nodes.length - 1 ? "ai-flow-node is-terminal" : "ai-flow-node"}>
                      {node}
                    </span>
                    {index < selectedStep.nodes.length - 1 && (
                      <span className="ai-flow-connector" aria-hidden="true">→</span>
                    )}
                  </span>
                ))}
              </div>
              <p className="ai-flow-summary">{selectedStep.detail}</p>
            </div>
            <div className="ai-workflow-pagination" aria-label={`Step ${activeStep + 1} of ${workflowSteps.length}`}>
              <span>STEP 0{activeStep + 1} <span className="ai-workflow-pagination-muted">/ 0{workflowSteps.length}</span></span>
              <div className="ai-workflow-pagination-dots" aria-hidden="true">
                {workflowSteps.map((step, index) => (
                  <span className={activeStep === index ? "is-active" : ""} key={step.label} />
                ))}
              </div>
              <button
                type="button"
                className="ai-workflow-next"
                onClick={() => setActiveStep((activeStep + 1) % workflowSteps.length)}
              >
                {activeStep === workflowSteps.length - 1 ? "Start again" : "Next step"} <ArrowUpRight size={15} />
              </button>
            </div>
          </div>
        </div>
        <p className="ai-workflow-disclaimer">
          An explanatory interaction—not a live AI service or chatbot.
        </p>

        <div className="ai-project-proof">
          <div className="ai-project-proof-heading">
            <div>
              <span className="section-eyebrow">APPLIED IN PRACTICE</span>
              <h3>Built into <span>real products.</span></h3>
            </div>
            <a href="#project" className="ai-projects-link">
              All selected work <ArrowUpRight size={16} />
            </a>
          </div>
          <Row className="g-3">
            {projectExamples.map((project) => (
              <Col key={project.title} xs={12} lg={4}>
                <article className="ai-project-card">
                  <div className="ai-project-card-top">
                    <span>{project.number}</span>
                    <ArrowUpRight size={17} aria-hidden="true" />
                  </div>
                  <h4>{project.title}</h4>
                  <p>{project.description}</p>
                  <div className="ai-capability-tags">
                    {project.tags.map((tag) => <span key={tag}>{tag}</span>)}
                  </div>
                  <a href={project.href} target="_blank" rel="noreferrer">
                    {project.linkLabel} <ArrowUpRight size={14} />
                  </a>
                </article>
              </Col>
            ))}
          </Row>
        </div>
          </Container>
        </section>
      )}
    </>
  );
};
