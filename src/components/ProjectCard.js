import { useEffect, useRef, useState } from "react";
import { Col } from "react-bootstrap";
import { ArrowUpRight } from "react-bootstrap-icons";

export const ProjectCard = ({
  title,
  description,
  imgUrl,
  source,
  demoUrl,
  repoUrl,
  index = 0,
  cardClassName = "",
}) => {
  // Preserve the legacy `source` prop for existing portfolio cards.
  const liveUrl = demoUrl || (source && source !== "#" ? source : null);
  const codeUrl = repoUrl;
  const isComingSoon = !liveUrl && !codeUrl;
  const number = String(index + 1).padStart(2, "0");
  const imageRef = useRef(null);
  const [imageReadyToLoad, setImageReadyToLoad] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  useEffect(() => {
    const image = imageRef.current;
    if (!image || imageReadyToLoad) return undefined;

    // Start image requests shortly before each card enters the viewport instead
    // of allowing a browser's larger native lazy-load margin to fetch every
    // thumbnail while the visitor is still at the top of the page.
    if (typeof window.IntersectionObserver !== "function") {
      setImageReadyToLoad(true);
      return undefined;
    }

    const observer = new window.IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setImageReadyToLoad(true);
        observer.disconnect();
      }
    }, { rootMargin: "300px 0px" });

    observer.observe(image);
    return () => observer.disconnect();
  }, [imageReadyToLoad]);

  return (
    <Col className="proj-col" xs={12} sm={6} lg={4}>
      <article className={`project-card ${cardClassName}`.trim()}>
        <div className={imageLoaded ? "project-card-image is-image-loaded" : "project-card-image"}>
          <span className="project-card-image-placeholder" aria-hidden="true" />
          <img
            ref={imageRef}
            className={imageLoaded ? "is-loaded" : ""}
            src={imageReadyToLoad ? imgUrl : undefined}
            alt={title}
            loading="lazy"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
          />
          <span className="project-card-index" aria-hidden="true">CASE / {number}</span>
          <span className="project-card-image-grid" aria-hidden="true" />
          <span className="project-card-image-action" aria-hidden="true">
            {isComingSoon ? "IN PROGRESS" : liveUrl ? "OPEN LIVE DEMO" : "VIEW SOURCE"} <ArrowUpRight />
          </span>
        </div>
        <div className="project-card-content">
          <div className="project-card-copy">
            <h3>{title}</h3>
            <p>{description}</p>
          </div>
          {isComingSoon ? (
            <span className="project-card-status">Coming soon</span>
          ) : liveUrl && codeUrl ? (
            <div className="project-card-actions">
              <a
                className="project-card-link project-card-link-primary"
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`Open live demo of ${title}`}
              >
                Live demo <ArrowUpRight />
              </a>
              <a
                className="project-card-link project-card-link-secondary"
                href={codeUrl}
                target="_blank"
                rel="noreferrer"
                aria-label={`View ${title} source code on GitHub`}
              >
                GitHub <ArrowUpRight />
              </a>
            </div>
          ) : (
            <a
              className="project-card-link"
              href={liveUrl || codeUrl}
              target="_blank"
              rel="noreferrer"
              aria-label={liveUrl ? `Visit ${title}` : `View ${title} source code on GitHub`}
            >
              {liveUrl ? "Visit project" : "View source"} <ArrowUpRight />
            </a>
          )}
        </div>
      </article>
    </Col>
  );
};
