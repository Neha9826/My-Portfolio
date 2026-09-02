import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  // Reduced initial typing delay for a much faster start
  const [delta, setDelta] = useState(100 - Math.random() * 50); 
  const [index, setIndex] = useState(1);
  const toRotate = [ "Full Stack Developer", "Laravel Specialist", "React.js Expert" ];
  // Reduced period so it moves to the next title much faster
  const period = 800; 

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2); // Deletes text extremely fast
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(200); // Very short pause before typing the new word
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                <span className="tagline">Welcome to my Portfolio</span>
                <h1 >{`Hi! I'm Neha Pattnayak`}<br/>
                <div className="glitch">
                  <h1>
                  <span className="txt-rotate" dataPeriod="800" data-rotate='[ "Full Stack Developer", "Laravel Specialist", "React.js Expert" ]'>
                    {text}
                  </span> {text}
                  <span className="wrap">{text}</span>
                  </h1>
                </div>
                </h1>
                  <p>Full Stack Software Engineer with over 5 years of rigorous enterprise experience, backed by a 7-year overall foundation in software architecture and full-cycle development. While highly proficient in modern UI engineering, my core expertise lies in architecting robust backend infrastructures, scalable RESTful APIs, and complex relational databases using PHP Laravel and MySQL.</p>
                  <a target="_blank" rel="noreferrer" className="cv" href="https://drive.google.com/file/d/1jlnLKoBEz1z5cIg7OV6gA4chJF5TTasN/view?usp=drive_link" >Download CV <ArrowRightCircle size={25} /></a>
              </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img"/>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}