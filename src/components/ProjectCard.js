import { Col } from "react-bootstrap";
// import { Projects } from "./Projects";

export const ProjectCard = ({ title, description, imgUrl, source }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx">
        <a href={source} ><img src={imgUrl} /></a>
        <div className="proj-txtx">
          <h4>{title}</h4>
          <span>{description}</span>
        </div>
      </div>
    </Col>
  )
}
