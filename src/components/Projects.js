import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import RIA from "../assets/img/RIA.jpg";
import soilnwater from "../assets/img/soilnwater_banner.png";
import shivoham_ from "../assets/img/shivoham_.png";
import yttc from "../assets/img/yogateacherstrainingcourses.png";
import ybm from "../assets/img/ybm.png";
import Satvadig from "../assets/img/Satvadig_.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import { ArrowUpRight, Git, BoxSeam, Robot, CodeSlash, Layers } from "react-bootstrap-icons";

export const Projects = () => {
  const projects = [
    {
      title: "RIA Catalyst",
      description: "Product experience and frontend engineering",
      imgUrl: RIA,
      source: "https://app.riacatalyst.com/",
    },
    {
      title: "SoilnWater",
      description: "Multi-tenant e-commerce platform",
      imgUrl: soilnwater,
      source: "https://soilnwater.in/",
    },
    {
      title: "Shivoham Retreat",
      description: "Website and digital experience",
      imgUrl: shivoham_,
      source: "https://shivohamretreat.com/",
    },
    {
      title: "Yoga Teacher Training Courses",
      description: "Training and course website",
      imgUrl: yttc,
      source: "https://yogateacherstrainingcourses.com/",
    },
    {
      title: "Yoga Bhawna Mission",
      description: "Website and content experience",
      imgUrl: ybm,
      source: "https://yogbhawnamission.com/",
    },
    {
      title: "SatvaDig",
      description: "A new project in progress",
      imgUrl: Satvadig,
      source: "#",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <div className="section-heading project-heading">
          <span className="section-eyebrow">SELECTED WORK</span>
          <h2>Some things I've built<span>.</span></h2>
          <p>
            A selection of products and digital experiences across engineering,
            commerce, and the web.
          </p>
        </div>

        <article className="archos-feature">
          <div className="archos-copy">
            <span className="archos-eyebrow"><span /> FEATURED PROJECT · IN DEVELOPMENT</span>
            <h3>Arch-<span>OS</span></h3>
            <h4>Cloud architecture platform for engineers</h4>
            <p className="archos-description">
              A multi-tenant SaaS for designing, visualizing, and exporting cloud
              architectures. Build system diagrams on an interactive canvas, get
              AI-assisted architecture reviews, and generate foundational
              infrastructure such as Docker Compose.
            </p>

            <div className="archos-tags" aria-label="Technologies">
              {["Next.js", "TypeScript", "React Flow", "Node.js", "PostgreSQL", "AI Review", "Docker Compose", "GraphQL"].map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>

            <div className="archos-actions">
              <a className="archos-primary-link" href="https://github.com/Neha9826/arch-os" target="_blank" rel="noreferrer">
                <Git size={17} /> Explore on GitHub <ArrowUpRight size={17} />
              </a>
              <span className="archos-status"><span /> Actively building</span>
            </div>
          </div>

          <div className="archos-visual" aria-label="Illustration of the Arch-OS architecture canvas">
            <div className="archos-windowbar">
              <div className="archos-brand"><span className="archos-brand-icon"><CodeSlash size={17} /></span><strong>arch-os</strong><span className="archos-workspace">Enterprise Workspace</span></div>
              <div className="archos-window-actions"><span><Robot size={14} /> AI Review</span><span><CodeSlash size={14} /> Export Code</span></div>
            </div>
            <div className="archos-canvas">
              <div className="archos-canvas-grid" />
              <svg className="archos-connectors" viewBox="0 0 600 350" preserveAspectRatio="none" aria-hidden="true">
                <path d="M145 76 C145 120 190 115 190 158" />
                <path d="M440 76 C440 120 400 115 400 158" className="archos-line-blue" />
                <path d="M190 207 C190 258 300 240 300 285" className="archos-line-blue" />
                <path d="M400 207 C400 258 300 240 300 285" className="archos-line-violet" />
              </svg>
              <div className="archos-node archos-node-client"><span className="archos-node-icon">▣</span><span><small>FRONTEND</small><strong>Client / UI</strong></span></div>
              <div className="archos-node archos-node-next"><span className="archos-node-icon">▣</span><span><small>WEB APP</small><strong>Next.js Client</strong></span></div>
              <div className="archos-node archos-node-api"><span className="archos-node-icon">⚙</span><span><small>SERVICE</small><strong>API Service</strong></span></div>
              <div className="archos-node archos-node-redis"><span className="archos-redis-dot" /><span><small>CACHE</small><strong>Redis Cache</strong></span></div>
              <div className="archos-node archos-node-db"><span className="archos-node-icon">▰</span><span><small>DATABASE</small><strong>PostgreSQL</strong></span></div>
              <div className="archos-mini-panel">
                <div><CodeSlash size={13} /><strong>Generated docker-compose.yml</strong><span>↗</span></div>
                <code>services:<br />&nbsp; client_ui:<br />&nbsp;&nbsp; build: ./client_ui<br />&nbsp; api_service:<br />&nbsp;&nbsp; ports: ["8080:8080"]</code>
              </div>
              <div className="archos-review-panel">
                <div><Robot size={15} /><strong>AI Architecture Review</strong></div>
                <p>Review system design and explore improvement suggestions.</p>
                <span className="archos-review-lines" /><span className="archos-review-lines short" />
              </div>
              <span className="archos-canvas-label"><span /> VISUAL ARCHITECTURE CANVAS</span>
            </div>
          </div>

          <div className="archos-capabilities">
            <div><span className="archos-cap-icon violet"><BoxSeam size={19} /></span><section><strong>Visual architecture canvas</strong><p>Design cloud-native systems with React Flow.</p></section></div>
            <div><span className="archos-cap-icon ember"><Robot size={19} /></span><section><strong>AI architecture review</strong><p>Get structured feedback on your design.</p></section></div>
            <div><span className="archos-cap-icon blue"><CodeSlash size={19} /></span><section><strong>Infrastructure export</strong><p>Generate foundational Docker Compose files.</p></section></div>
            <div><span className="archos-cap-icon mint"><Layers size={19} /></span><section><strong>Multi-tenant workspace</strong><p>Keep architecture projects organized.</p></section></div>
          </div>
        </article>

        <div className="more-projects-heading">
          <div><span className="section-eyebrow">THE REST OF THE WORK</span><h3>More projects<span>.</span></h3></div>
          <span className="more-projects-note">CLIENT WORK · WEB PRODUCTS · EXPERIMENTS</span>
        </div>

        <Tab.Container id="projects-tabs" defaultActiveKey="first">
          <Nav
            variant="pills"
            className="nav-pills project-tabs justify-content-center align-items-center"
            id="pills-tab"
          >
            <Nav.Item><Nav.Link eventKey="first">Projects</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="second">Education</Nav.Link></Nav.Item>
            <Nav.Item><Nav.Link eventKey="third">Experience</Nav.Link></Nav.Item>
          </Nav>

          <Tab.Content className="project-tab-content">
            <Tab.Pane eventKey="first">
              <Row className="g-4">
                {projects.map((project) => (
                  <ProjectCard key={project.title} {...project} />
                ))}
              </Row>
            </Tab.Pane>

            <Tab.Pane eventKey="second">
              <div className="timeline-list">
                <article className="timeline-item">
                  <span>2019 — 2021</span>
                  <div>
                    <h3>Master of Computer Applications (MCA)</h3>
                    <p>Khallikote Autonomous College</p>
                  </div>
                </article>
                <article className="timeline-item">
                  <span>2016 — 2019</span>
                  <div>
                    <h3>Bachelor of Computer Applications (BCA)</h3>
                    <p>Roland Institute</p>
                  </div>
                </article>
                <article className="timeline-item">
                  <span>Training</span>
                  <div>
                    <h3>Advanced Java, Core PHP & MySQL</h3>
                    <p>Professional certificate and corporate training in Laravel and advanced MySQL.</p>
                  </div>
                </article>
              </div>
            </Tab.Pane>

            <Tab.Pane eventKey="third">
              <div className="timeline-list">
                <article className="timeline-item">
                  <span>Apr 2026 — Present</span>
                  <div><h3>RIA Catalyst</h3><p>Associate Front-End Engineer · Contract</p></div>
                </article>
                <article className="timeline-item">
                  <span>Jul 2025 — Apr 2026</span>
                  <div><h3>Independent Technical Consultant</h3><p>IT Head & Full Stack Developer</p></div>
                </article>
                <article className="timeline-item">
                  <span>Feb 2022 — Jul 2025</span>
                  <div><h3>Freelance</h3><p>Full Stack Developer & Consultant</p></div>
                </article>
                <article className="timeline-item">
                  <span>Jun 2022 — Jan 2024</span>
                  <div><h3>RGC Manager</h3><p>React Developer · Contract</p></div>
                </article>
                <article className="timeline-item">
                  <span>Jul 2021 — Jan 2022</span>
                  <div><h3>RGC Manager</h3><p>Junior Software Developer · Intern</p></div>
                </article>
                <article className="timeline-item">
                  <span>Sep 2018 — Dec 2018</span>
                  <div><h3>SpiceTech</h3><p>Web Developer · Intern</p></div>
                </article>
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Tab.Container>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" aria-hidden="true" />
    </section>
  );
};
