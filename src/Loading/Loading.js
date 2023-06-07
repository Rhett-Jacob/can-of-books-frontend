import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import NoNameUserPicture from '../images/matthew-henry-n5vuEc86Zg8-unsplash.jpg';

class Loading extends React.Component {
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
                className="d-block w-100"
                style={{ height: "500px", width:"500px" }}
                src={NoNameUserPicture}
                alt={"imaged did not load"}
              />
              <Carousel.Caption
                className="carouselCaption carouselAboutUs">
                <h3 className="textAboutUs">Login to curate your book collection!</h3>  
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default Loading;