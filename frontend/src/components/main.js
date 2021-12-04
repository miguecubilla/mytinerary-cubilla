import CarruselPopular from './carruselPopular';
//import PopularLogo from '../components/assets/img/Popular-Mytineraries.png';
import { Link } from 'react-router-dom'
import CarruselMain from './carruselMain';
import Popular from './assets/img/popularMyTinerari.jpg'



function Main() {
  return (
    <div className="main">
      <CarruselMain />/*carrusel de publicidad */
      <div className="carruselMain">
        <img src={Popular} width="100%" alt="" />/*cartel de popular cities */
      </div>
      <button type="button" class="btn btn-secondary btn-lg">
        <Link as={Link} to={"/cities"} className="link.nav">Click and Trip!</Link>
      </button>
    </div>
  );
}

export default Main;