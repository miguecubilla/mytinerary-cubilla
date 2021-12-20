import CarruselPopular from './carousel';
import { Link } from 'react-router-dom'
import Popular from './assets/img/popularMyTinerari.png'
import {Button} from 'react-bootstrap';
import Logo1 from './assets/img/logo1.png'
import Logo2 from './assets/img/tinerary.png'
import Logo3 from './assets/img/slogan.png'



function Main() {
  return (
    
    <div className="main">
       <div className="logo1" >
          <img className="logo1cont"  src={Logo1} />
          <img className="logo1cont"  src={Logo2} />
        </div> 
          <img  src={Logo3} width="100%" />
      <div className="homemain2">
            <Link as={Link} to={"/cities"}>
          <Button variant="primary" size="lg">
              Click and Trip!
              
          </Button>
          <div>
          <div class="flex justify-center relative top-1/3">





<div class="relative grid grid-cols-1 gap-4 p-4 mb-8 border rounded-lg bg-white shadow-lg">
    <div class="relative flex gap-4">
        <img src="https://icons.iconarchive.com/icons/diversity-avatars/avatars/256/charlie-chaplin-icon.png" class="relative rounded-lg -top-8 -mb-4 bg-white border h-20 w-20" alt="" loading="lazy"/>
        <div class="flex flex-col w-full">
            <div class="flex flex-row justify-between">
                <p class="relative text-xl whitespace-nowrap truncate overflow-hidden">COMMENTOR</p>
                <a class="text-gray-500 text-xl" href="#"><i class="fa-solid fa-trash"></i></a>
            </div>
            <p class="text-gray-400 text-sm">20 April 2022, at 14:88 PM</p>
        </div>
    </div>
    <p class="-mt-4 text-gray-500">Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime quisquam vero adipisci beatae voluptas dolor ame.</p>
</div>



</div>
          </div>
            </Link>
          <img  src={Popular} width="90%" alt="" /> 
        <CarruselPopular />
      </div>
      </div>
);
}
export default Main;