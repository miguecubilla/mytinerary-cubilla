import React from 'react';
import user from '../components/assets/img/user.png';
import {Link} from "react-router-dom";
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'



function NavBar() {
  let logo =  <img src={user} width="40vw" />
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MyTinerary</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          <Nav.Link><Link to="/" className="link-f">Home</Link></Nav.Link>
          <Nav.Link><Link to="/cities" className="link-f">Cities</Link></Nav.Link>
          </Nav>
          <Nav>
           <div className="logoUser">

           </div>
            <NavDropdown title={logo} id="collasible-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">SignUp</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Login</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Exit</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;