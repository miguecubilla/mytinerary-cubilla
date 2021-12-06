import React, { Component } from 'react';
import Bootstrap, { Carousel, BImg } from 'bootstrap-4-react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Card } from 'bootstrap-4-react';




export default class App extends Component {
  constructor (props){
    super(props);
    this.state = {
      cities: [
        {
        "id":1,
        "name":"New York",
        "image": "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "zona":"eeuu",
      },
    {
        "id":2,
        "name":"Miami",
        "image":"https://th.bing.com/th/id/OIP.tt5hrDW-NkqjZE4DC72GewHaE6?pid=ImgDet&rs=1",
        "zona":"eeuu",
      },
    {
        "id":3,
        "name":"Orlando",
        "image":"https://images.pexels.com/photos/6921010/pexels-photo-6921010.jpeg?cs=srgb&dl=pexels-bo-zhong-6921010.jpg&fm=jpg",
        "zona":"eeuu",
      },
    {
        "id":4,
        "name":"Los Angeles",
        "image":"https://images.pexels.com/photos/5246036/pexels-photo-5246036.jpeg?cs=srgb&dl=pexels-masbet-christianto-5246036.jpg&fm=jpg",
        "zona":"eeuu",
      },
    {
        "id":5,
        "name":"Cordoba",
        "image":"https://th.bing.com/th/id/R.d00e3b3807f35f47494ae7096aac3eb4?rik=%2fh4VwVyLPtzU2A&riu=http%3a%2f%2fwww.efetur.com%2ffiles%2f2017%2f01%2fcatedral-cordoba-arg.jpg&ehk=Wul%2bY99f7NQ2fJWuyRXxIMvGLbQnvqWgGamWlKAh2lc%3d&risl=&pid=ImgRaw&r=0",
        "zona":"america",
      },
    {
        "id":6,
        "name":"Buenos Aires",
        "image":"https://images.pexels.com/photos/2438323/pexels-photo-2438323.jpeg?cs=srgb&dl=pexels-wesley-souza-2438323.jpg&fm=jpg",
        "zona":"america",
      },
    {
        "id":7,
        "name":"Mendoza",
        "image":"https://www.borispatagonia.com/images/mendoza-argentine-vignobles.jpg",
        "zona":"america",
      },
    {
        "id":8,
        "name":"Rio de Janeiro",
        "image":"https://images.pexels.com/photos/2876407/pexels-photo-2876407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        "zona":"america",
      },
    {
        "id":9,
        "name":"Madrid",
        "image":"https://th.bing.com/th/id/OIP.Cy_1kkpS4afJBeyaR_UrMwHaEL?pid=ImgDet&rs=1",
        "zona":"europa",
      },
    {
        "id":10,
        "name":"Barcelona",
        "image":"https://th.bing.com/th/id/OIP.OSLViEENCF7ZgNjCblFvmQHaEj?pid=ImgDet&rs=1",
        "zona":"europa",
      },
    {
        "id":11,
        "name":"London",
        "image":"https://th.bing.com/th/id/R.9a280dd415bb63ab69dc2e827a80c5a0?rik=KJ6aVPyjKOIUow&pid=ImgRaw&r=0",
        "zona":"europa",
      },
    {
        "id":12,
        "name":"Rome",
        "image":"https://images.pexels.com/photos/2676582/pexels-photo-2676582.jpeg?cs=srgb&dl=pexels-griffin-wooldridge-2676582.jpg&fm=jpg",
        "zona":"europa",
      },
  ]
}
}

  componentDidMount() {
    window.setTimeout(() => Bootstrap.carousel('#carouselExampleControls'), 20);
  }

  render() {
    return (
      <Carousel w="100" id="carouselExampleControls">
             <Carousel.Inner className="carrusel-inner"> 
                 <Carousel.Item active>
              {this.state.cities
              .filter(element => {
              return element.zona == "eeuu"
              })
              .map((element, index,) =>  (
                <Card display="inline-block" align="top" ml="0" mr="0" p="0" style={{ width: '18rem' }}>
                <Card.Image src={element.image} top/>
                <Card.Body>
                  <Card.Text>
                   <p className="carousel-title">{element.name}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
                ))}
                </Carousel.Item>
                <Carousel.Item>
              {this.state.cities
              .filter(element => {
              return element.zona == "europa"
              })
              .map((element, index,) =>  (
                <Card display="inline-block" align="top" ml="0" mr="0" p="0" style={{ width: '18rem' }}>
                <Card.Image src={element.image} top/>
                <Card.Body>
                  <Card.Text>
                   <p className="carousel-title">{element.name}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
                ))}
                </Carousel.Item>
                <Carousel.Item>
              {this.state.cities
              .filter(element => {
              return element.zona == "america"
              })
              .map((element, index,) =>  (
                <Card display="inline-block" align="top" ml="0" mr="0" p="0" style={{ width: '18rem' }}>
                <Card.Image src={element.image} top/>
                <Card.Body>
                  <Card.Text>
                   <p className="carousel-title">{element.name}</p>
                  </Card.Text>
                </Card.Body>
              </Card>
                ))}
                </Carousel.Item>             
              </Carousel.Inner>
        <Carousel.Prev href="#carouselExampleControls">
          <Carousel.Prev.Icon />
        </Carousel.Prev>
        <Carousel.Next href="#carouselExampleControls">
          <Carousel.Next.Icon />
        </Carousel.Next>
      </Carousel>
    )
  }
}
