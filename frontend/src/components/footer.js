import Facebook from '../components/assets/img/facebook.png';
import Twitter from '../components/assets/img/twitter.png';
import Instagram from '../components/assets/img/instagram.png';
import { Nav, Container, Navbar } from 'react-bootstrap';
import {Link} from "react-router-dom";



function Footer() {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">MYtinerary</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link><Link to="/" className="link-f">Home</Link></Nav.Link>
          <Nav.Link><Link to="/cities" className="link-f">Cities</Link></Nav.Link>
         
        </Nav>
      </Container>
    </Navbar>
  );
}

export default Footer;