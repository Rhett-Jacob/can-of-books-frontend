import React from "react";
import { Navbar, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import './Header.css'

class Header extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="md">
        <Container>
          <Navbar.Brand>My Favorite Books</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
              <NavItem><Link to="/about" className="nav-link">About Us</Link></NavItem>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
  }
}

export default Header;
