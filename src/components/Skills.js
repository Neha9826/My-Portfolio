import { Col, Container, Row } from "react-bootstrap";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import meter1 from "../assets/img/meter1.svg";
import meter2 from "../assets/img/meter2.svg";
import meter3 from "../assets/img/meter3.svg";
import colorSharp from "../assets/img/color-sharp.png";
import * as React from 'react';
import PropTypes from 'prop-types';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import { skills } from "./util";

export const Skills = () => {

    function CircularProgressWithLabel(props) {
        return (
          <Box sx={{ fontSize:'20', position: 'relative', display: 'inline-flex' }}>
            <CircularProgress size="10rem" className="circle" fontSize="50" variant="determinate" {...props} />
            <Box
              sx={{
                fontSize:70,
                className:"rate",
                top: 0,
                left: 0,
                bottom: 0,
                right: 0,
                position: 'absolute',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
            >
              <Typography className="rate-text" variant="caption" component="div" fontSize={40} color="text.white">
                {`${Math.round(props.value)}%`}
              </Typography>
            </Box>
          </Box>
        );
      }
      
      CircularProgressWithLabel.propTypes = {
        value: PropTypes.number.isRequired,
      };
        const [progress, setProgress] = React.useState(10);
        React.useEffect(() => {
          const timer = setInterval(() => {
            setProgress((prevProgress) => (prevProgress >= 75 ? 75 : prevProgress + 5));
          }, 100);
          return () => {
            clearInterval(timer);
          };
        }, []);

    const responsive = {
        superLargeDesktop: {
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
      };



      return (
        <section className="skill" id="skills">
            <Container>
                <Row>
                    <Col>
                    <div className="skill-bx">
                        <h2>
                            Skills
                        </h2>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.<br></br> Lorem Ipsum has been the industry's standard dummy text.</p>
                        <Carousel responsive={responsive} infinite={true} className="skill-slider">
                            {skills.map((s) => 
                                <div className="item">
                                {/* <img src={meter1} alt="Image" /> */}
                                <CircularProgressWithLabel fontSize="50" value={s.progress} />
                                <h5>{s.name}</h5>
                              </div>
                            )}
                            
                            
                        </Carousel>
                    </div>
                    </Col>
                </Row>
            </Container>
            <img className="background-image-left" src={colorSharp} />
        </section>
      )

}