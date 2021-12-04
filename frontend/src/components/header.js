import React from 'react';
//import user from '../components/assets/img/user.png';
//import {Link} from "react-router-dom";
//import { Nav, Container, Navbar } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
//import Video from './assets/img/videoFondo.mp4';
import NavBar from './navBar'
import Logo1 from './assets/img/logo1.png'



function Header() {
  return (
    <div className="headerContainer">
      <NavBar />
      <div className="logoAndCall" >/*contenedor de logo y boton callToAction */
        <div className="logo1cont">
          <img className="logo1" width="100%" src={Logo1} />
        </div>
        <button class="glow-on-hover" type="button">Click and Trip!</button>
      </div>
    </div>
  );
}

export default Header;