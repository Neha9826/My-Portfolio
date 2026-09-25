import { Col } from "react-bootstrap";
import { ArrowUpRight } from "react-bootstrap-icons";

export const ProjectCard = ({ title, description, imgUrl, source }) => {
  const isComingSoon = !source || source === "#";

  return (
    <Col className="proj-col" xs={12} sm={6} lg={4}>
      <article className="project-card">
        <div className="project-card-image">
          <img src={imgUrl} alt={title} loading="lazy" />
          <span className="project-card-index" aria-hidden="true">PROJECT /</span>
        </div>
        <div className="project-card-content">
          <div>
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          {isComingSoon ? (
            <span className="project-card-status">Coming soon</span>
          ) : (
            <a
              className="project-card-link"
              href={source}
              target="_blank"
              rel="noreferrer"
              aria-label={`Visit ${title}`}
            >
              Visit project <ArrowUpRight />
            </a>
          )}
        </div>
      </article>
    </Col>
  );
};
