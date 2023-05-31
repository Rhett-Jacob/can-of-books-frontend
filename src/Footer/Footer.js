import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

class Footer extends React.Component {
  render() {
    return (
      <Container className="carouselContainer">
        <Row className="justify-content-md-center">
          <Col xs={10} md={10} lg={10}>
            <Navbar collapseOnSelect expand="lg" className='footer'>
              <Navbar.Brand className="footerText">&copy;Rhett&Jacob</Navbar.Brand>
            </Navbar>
          </Col>
        </Row>
      </Container>
    )
  }
}

export default Footer;
