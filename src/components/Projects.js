import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/sri1.png";
import projImg2 from "../assets/img/port1.png";
import projImg3 from "../assets/img/task-mngr.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

    const projects =[
        {
            title: "Sri Durga Furnitures (Java)",
            description: "Source",
            imgUrl: projImg1,
            source: "https://github.com/Neha9826/Sridurga_furnitures"
          },
          {
            title: "My Portfolio (ReactJS)",
            description: "Source",
            imgUrl: projImg2,
            source: "https://github.com/Neha9826/My-Portfolio.git"
          },
          {
            title: "Task Manager (PHP-Laravel)",
            description: "Source",
            imgUrl: projImg3,
            source: "https://github.com/Neha9826/task-manager.git"
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
                        {/* <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p> */}
                        </div>
                    }
                    </TrackVisibility>
                        <Tab.Container id="projects-tabs" defaultActiveKey="first">
                          <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                            <Nav.Item>
                              <Nav.Link eventKey="first">Projects</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="second">Training & Courses</Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                              <Nav.Link eventKey="third">Experience</Nav.Link>
                            </Nav.Item>
                          </Nav>
                        <Tab.Content id="slideInUp" >
                        {/* className={isVisible ? "animate__animated animate__bounce" : ""} */}
                        
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
                            <p>The Ultimate MySQL Bootcamp: Udemy</p>
                            <p>PHP OOP: Udemy</p>
                            <p>PHP with Laravel: Udemy</p>
                            <p>Java: SK InfoTech, Berhampur, Odisha</p>
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <p><h4>Freelancing: Software Designer & Developer (Present)</h4> 
                              Freelancing using different technologies like PHP, JSP and React.js.</p>
                            <p><h4>OMNICS Technologies Pvt. Ltd.:</h4> Jr. Software Developer (Intern)</p>
                            <p><h4>Spice tech India: </h4> Internship in web designing & development.</p>
                            </Tab.Pane>
                        </Tab.Content>
                        </Tab.Container>
                    
                </Col>
                </Row>
            </Container>
            <img className="background-image-right" src={colorSharp2}></img>
        </section>
    )
}