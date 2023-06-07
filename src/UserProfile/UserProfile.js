import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {withAuth0} from '@auth0/auth0-react';
import NoNameUserPicture from '../images/matthew-henry-n5vuEc86Zg8-unsplash.jpg';

class UserProfile extends React.Component {
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
                src={this.props.auth0.user.picture||NoNameUserPicture}
                alt={this.props.auth0.user.name||"imaged did not load"}
              />
              <Carousel.Caption
                className="carouselCaption carouselAboutUs">
                <h3 className="textAboutUs">{this.props.auth0.user.name||"Username not received"}</h3>
                <p className="textAboutUs">{this.props.auth0.user.email||""}</p>
              </Carousel.Caption>
            </Carousel.Item>
          </Carousel>
        </Col>
      </Row>
    </Container>
    );
  }
}

export default withAuth0(UserProfile);
