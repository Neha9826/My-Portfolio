import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import RIA from "../assets/img/RIA.jpg";
import soilnwater from "../assets/img/soilnwater_banner.png";
import shivoham_ from "../assets/img/shivoham_.png";
import yttc from "../assets/img/yogateacherstrainingcourses.png";
import ybm from "../assets/img/ybm.png";
import Satvadig from "../assets/img/Satvadig_.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects =[
          {
            title: "RIA Catalyst",
            description: "Visit RIA Catalyst",
            imgUrl: RIA,
            source: "https://app.riacatalyst.com/"
          },
          {
            title: "SoilnWater",
            description: "Visit SoilnWater",
            imgUrl: soilnwater,
            source: "https://soilnwater.in/"
          },
          {
            title: "Shivoham Retreat",
            description: "Visit Shivoham Retreat",
            imgUrl: shivoham_,
            source: "https://shivohamretreat.com/"
          },
          {
            title: "Yoga Teacher Training Courses",
            description: "Visit Yoga Teacher Training Courses",
            imgUrl: yttc,
            source: "https://yogateacherstrainingcourses.com/"
          },
          {
            title: "Yoga Bhawna Mission",
            description: "Visit Yoga Bhawna Mission",
            imgUrl: ybm,
            source: "https://yogbhawnamission.com/"
          },
          {
            title: "SatvaDig ",
            description: "Coming Soon",
            imgUrl: Satvadig,
            source: "#"
          },
          
    ];

    return(
        <section className="project" id="project">
            <Container>
                <Row>
                <Col size={12}>
                    <TrackVisibility>
                    {({ isVisible }) =>
                    <div className={isVisible ? "animate__animated animate__bounce": ""}>
                        <h2>Journey so far..</h2>
                        </div>
                    }
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                          <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                              <Nav.Link eventKey="first">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">Education & Training</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">Experience</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        <Tab.Content id="slideInUp" >
                            <Tab.Pane eventKey="first">
                            <Row>
                                {
                                projects.map((project, index) => {
                                    return (
                                    <ProjectCard
                                        key={index}
                                        {...project}
                                        />
                                    )
                                })
                                }
                            </Row>
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <p><strong>Master of Computer Applications (MCA)</strong> - Khallikote Autonomous College (2019-2021)</p>
                            <p><strong>Bachelor of Computer Applications (BCA)</strong> - Roland Institute (2016-2019)</p>
                            <p><strong>Professional Certificate:</strong> Advanced Java, Core PHP & MySQL</p>
                            <p><strong>Corporate Training:</strong> PHP Laravel Framework & Advanced MySQL</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <p><h4>RIA Catalyst (Apr 2026 – Present)</h4> Associate Front-End Engineer (Contract)</p>
                            <p><h4>Independent Technical Consultant (Jul 2025 – Apr 2026)</h4> IT Head & Full Stack Developer</p>
                            <p><h4>Freelance (Feb 2022 – Jul 2025)</h4> Full Stack Developer & Consultant</p>
                            <p><h4>RGC Manager (Jun 2022 – Jan 2024)</h4> React Developer (Contract)</p>
                            <p><h4>RGC Manager (Jul 2021 – Jan 2022)</h4> Junior Software Developer (Intern)</p>
                            <p><h4>SpiceTech (Sep 2018 – Dec 2018)</h4> Web Developer (Intern)</p>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    
                </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2} alt="Background right" />
        </section>
    )
}