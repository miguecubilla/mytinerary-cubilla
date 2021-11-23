import LogoColor from '../components/assets/img/logoColor.png.png';
import Logo from '../components/assets/img/MyTinerary.png';
import CarouselExample from '../components/carousel';
import PopularLogo from '../components/assets/img/Popular-Mytineraries.png'

function Main() {
    return (
    <div className="main">
      <img className="png" width="250" src={LogoColor}/>
      <img className="png" width="250" src={Logo}/>

      <h2>"Find your perfect trip, designed by insiders who know and love their cities!". </h2>
      <button type="button" class="btn btn-secondary btn-lg">Click and Trip!</button> 
      <div className="logo-carrusel">  
        <img className="logo-carru" width="960" height="640" src={PopularLogo}/>
      </div>
      <CarouselExample/>
    </div>
    );
  }
  
  export default Main;