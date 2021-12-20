import React from 'react';
import user from '../components/assets/img/user.png';
import {Link} from "react-router-dom";
import { Nav, Container, Navbar, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
import { connect } from 'react-redux';
import authActions from '../redux/actions/authActions';





function NavBar(props) {
  console.log(props)
  const logo = props.token
  ? <img className='logoUser' src={props.urlImage} width="40vw" />
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
            {props.token ? <NavDropdown.Item className="nav2" onClick={() => props.logOut()}>LogOut</NavDropdown.Item> : <><NavDropdown.Item className="nav2" as={Link} to={"/register"}>Sign Up</NavDropdown.Item><NavDropdown.Item className="nav2" as={Link} to={"/singin"}>Login</NavDropdown.Item></>}
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
const mapStateToProps = (state) => {
  return {
    token:state.authReducer.token,
    name: state.authReducer.name,
    urlImage: state.authReducer.urlImage,  };
};
const mapDispatchToProps = {
  logOut: authActions.logOut
};

export default connect(mapStateToProps,mapDispatchToProps)(NavBar);