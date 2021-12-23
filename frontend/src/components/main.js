import CarruselPopular from './carousel';
import { Link } from 'react-router-dom'
import Popular from './assets/img/popularMyTinerari.png'
import { Button } from 'react-bootstrap';
import Logo1 from './assets/img/logo1.png'
import Logo2 from './assets/img/tinerary.png'
import Logo3 from './assets/img/slogan.png'



function Main() {
  return (

    <div className="main">
      <div className="logo1" >
        <img className="logo1cont" src={Logo1} />
        <img className="logo1cont" src={Logo2} />
      </div>
      <img src={Logo3} width="100%" />
      <div className="homemain2">
        <Link as={Link} to={"/cities"}>
          <Button variant="primary" size="lg">
            Click and Trip!

          </Button>
          
          
        </Link>
        <img src={Popular} width="90%" alt="" />
        <CarruselPopular />
      </div>
    </div>
  );
}
export default Main;