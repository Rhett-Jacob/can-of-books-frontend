import React from "react";
import Carousel from "react-bootstrap/Carousel";
import rhettImage from '../images/rhett-beardemphl.jpg';
import jacobImage from '../images/jacob-bassett.jpg'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {FaGithub} from 'react-icons/fa';

class AboutUsProfile extends React.Component {
  render() {
    return (
    <Container className="carouselContainer">
      <Row className="justify-content-md-center">
        <Col 
          xs={10} md={10} lg={10}
          style={{ width:"500px" }}>
          <Carousel
            className="carouselParent"
            interval={null}
            >
            <Carousel.Item>
              <img
                className="d-block w-100 carouselImage"
                style={{ height: "500px", width:"500px" }}
                src={rhettImage}
                alt="rhett's profile pic"
              />
              <Carousel.Caption
                className="carouselCaption carouselAboutUs">
                <h3 
                  className="textAboutUs"
                  onClick={()=>window.location.href="https://github.com/rhettb253"}
                  >Rhett Beardemphl <FaGithub /></h3>
                <p className="textAboutUs">Rhett was a LA creative who found a new home for his creativity in web and app development.</p>
              </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
              <img
                className="d-block w-100"
                style={{ height: "500px"}}
                src={jacobImage}
                alt="jacob's profile pic"
              />
              <Carousel.Caption
                className="carouselCaption carouselAboutUs">
                <h3 
                  className="textAboutUs"
                  onClick={()=>window.location.href="https://github.com/jdabassett"}>
                    Jacob Bassett <FaGithub/></h3>
                <p className="textAboutUs">Jacob was a molecular biologist turned code slinger who likes the taste of nucleotides with his glutamate.<a className="link" href="https://www.youtube.com/watch?v=GHX3aaLmjMI"> [link]</a></p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default AboutUsProfile;
