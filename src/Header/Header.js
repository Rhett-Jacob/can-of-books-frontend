import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Login from './Login/Login.js';
import LogOut from './LogOut/LogOut.js';
import './Header.css'
import {withAuth0} from '@auth0/auth0-react';

class Header extends React.Component {
  render() {
    return (
      <Container className="carouselContainer">
        <Row className="justify-content-md-center carouselRow">
            <Col xs={10} md={10} lg={10}>
              <Navbar expand="md" className="header">
              
                  <Navbar.Brand></Navbar.Brand>
                  <Navbar.Toggle aria-controls="basic-navbar-nav" />
                  <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                      <NavItem><Link to="/" className="nav-link">Bookshelf</Link></NavItem>
                      <NavItem><Link to="/about" className="nav-link">About-Us</Link></NavItem>
                      {/* 6-6-23 */}
                      {this.props.auth0.isAuthenticated?
                        <NavItem><LogOut /></NavItem>:
                        <NavItem><Login/></NavItem>}
           
                    </Nav>
                  </Navbar.Collapse>
              
              </Navbar>
            </Col>
          </Row>
      </Container>
    );
  }
}

export default withAuth0(Header);
