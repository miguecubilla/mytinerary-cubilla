import Facebook from '../components/assets/img/facebook.png';
import Twitter from '../components/assets/img/twitter.png';
import Instagram from '../components/assets/img/instagram.png';

function Footer() {
    return (
      <nav class="navbar navbar-dark bg-dark">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          MyTinerary
        </a>
        <p class="navbar-brand">©Copyright-All rights reserved</p>
        
        <ul class="nav justify-content-end">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="#">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#">Cities</a>
          </li>
        </ul>
      <div> 
        <img width="30" src={Facebook} />
        <img width="30" src={Twitter} />
        <img width="30" src={Instagram} />
      </div>
      </div>
    </nav>
    );
  }
  
  export default Footer;