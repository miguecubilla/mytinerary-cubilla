import Carousel from 'react-bootstrap/Carousel'
import Promo1 from './assets/img/promo1.jpg'
import Promo2 from './assets/img/promo2.jpg'
import Promo3 from './assets/img/promo3.jpg'

 function CarruselMain(){
    return(

        <Carousel  className="carouselMain">
          <Carousel.Item  interval={6000}>
            <img
              className="d-block w-100 h-50"
              src={Promo1}
              alt="First slide"
              />
          </Carousel.Item>
          <Carousel.Item interval={6000}>
            <img
              className="d-block w-100"
              src={Promo2}
              alt="Second slide"
              />
            
          </Carousel.Item>
          <Carousel.Item interval={6000}>
            <img
              className="d-block w-100"
              src={Promo3}
              alt="Third slide"
              />
           
          </Carousel.Item>
        </Carousel>
    )
}       

export default CarruselMain;