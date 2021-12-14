import React from 'react';
import user from '../components/assets/img/user.png';
import {Link} from "react-router-dom";
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';





function NavBar(props) {
  console.log(props)
  const logo = props.user.pepe
  ? <img className='logoUser' src={props.user.pepe.urlImage} width="40vw" />
  : <img className='logoUser' src={user} width="40vw" />
  return (

    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>MyTinerary</Navbar.Brand>
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
            {props.user.pepe ? <NavDropdown.Item className="nav2" onClick={() => props.logOut()}>LogOut</NavDropdown.Item> : <><NavDropdown.Item className="nav2" as={Link} to={"/register"}>Sign Up</NavDropdown.Item><NavDropdown.Item className="nav2" as={Link} to={"/singin"}>Login</NavDropdown.Item></>}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const mapStateToProps = (state) => {
  return {
    user: state.authReducer.user,
  };
};
const mapDispatchToProps = {
  logOut: authActions.logOut
};

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);