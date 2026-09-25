import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import RIA from "../assets/img/RIA.jpg";
import soilnwater from "../assets/img/soilnwater_banner.png";
import shivoham_ from "../assets/img/shivoham_.png";
import yttc from "../assets/img/yogateacherstrainingcourses.png";
import ybm from "../assets/img/ybm.png";
import Satvadig from "../assets/img/Satvadig_.png";
import colorSharp2 from "../assets/img/color-sharp2.png";

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
