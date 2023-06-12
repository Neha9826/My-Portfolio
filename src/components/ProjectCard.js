import { Col } from "react-bootstrap";
// import { Projects } from "./Projects";

export const ProjectCard = ({ title, description, imgUrl, source }) => {
  return (
    <Col className="proj-col" size={12} sm={6} md={4}>
        <div className="proj-imgbx">
          <img src={imgUrl} />
          <a style={{color:"white"}} href={source} target="_blank">
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description}</span>
          </div>
          </a>
        </div>
    </Col>
  )
}
