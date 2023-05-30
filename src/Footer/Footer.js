import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import './Footer.css';

class Footer extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" className='footer'>
        <Navbar.Brand className="footerText">&copy;Rhett&Jacob</Navbar.Brand>
      </Navbar>
    )
  }
}

export default Footer;
