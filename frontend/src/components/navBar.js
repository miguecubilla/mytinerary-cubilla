import React from 'react';
//import user from '../components/assets/img/user.png';
//import {Link} from "react-router-dom";
import { Nav, Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'

function NavBar() {
  return (
    <Navbar className="headerMain" bg="transparent" variant="ligh">
      <Container className="containerLink">
        <Nav className="nav-auto">
          <Nav.Link className="buttonNav" href="#home">Home</Nav.Link>
          <Nav.Link className="buttonNav" href="#features">Cities</Nav.Link>
        </Nav>
      </Container>
      <container className="containerLink">
        <Nav className="nav-auto">
          <Nav.Link className="buttonNav" href="#home">SignUP</Nav.Link>
          <Nav.Link className="buttonNav" href="#features">Login</Nav.Link>
          <Nav.Link className="buttonNav" href="#pricing">Pricing</Nav.Link>
        </Nav>
      </container>
    </Navbar>
  );
}

export default NavBar;