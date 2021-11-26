import React from 'react';
import user from '../components/assets/img/user.png';
import Logo from '../components/assets/img/MyTinerary.png';
import {Link} from "react-router-dom";
import { Nav } from 'react-bootstrap';


function Header() {
    return (
      <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          <img width="180" src={Logo}/>
        </a>
        <div> 

        <ul class="nav justify-content-end">
          <li class="nav-item nav-link">
            <Link as={Link} to={"/"} className="link.nav">Home</Link>
          </li>
          <li class="nav-item nav-link">
            <Link as={Link} to={"/cities"} className="link.nav">Cities</Link>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Sign Up</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Login</a>
          </li>

          <li class="nav-item">
            <img width="30" src={user}/>
          </li>
        </ul>
        </div>
      </div>
      
    </nav>
    );
  }
  
  export default Header;