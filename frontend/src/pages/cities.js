import React, {useEffect, useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Card, Alert } from 'bootstrap-4-react/lib/components';


function Cities() {
  const [cities, setCities]=useState([]);
  const [tableCities,setTableCities]=useState([]);
  const [busqueda,setBusqueda]=useState("");
 



  const handleChange=e=>{
    setBusqueda(e.target.value);
    filtrar(e.target.value);
  }

  const filtrar=(terminoBusqueda)=>{
    var resultadoBusqueda=tableCities.filter((city)=>{
      if(city.name.toString().toLowerCase().startsWith(terminoBusqueda.toLowerCase().trim())){
        return city
      }
    });
    setCities(resultadoBusqueda);
  }


  useEffect(() => {
      fetch("http://localhost:4000/api/cities")
        .then(res => res.json())
        .then(data => {setCities(data.respuesta);
                      setTableCities(data.respuesta)})
        .catch(err => console.error(err.message))
      },[])

  return (
    <div className="container-fluid">
      <div className="ContainerInput">
        <Input
          className="FormControl inputBuscar"
          value={busqueda}
          placeholder="Search For Name"
          onChange={handleChange} />
      </div>
      <h1>Cities</h1>
      {cities.length > 0 ? cities.map(city => <Card display="inline-block" align="top" ml="4" mr="1" p="3" style={{ width: '20rem' }}>
                <Link to={`/city/${city._id}`}>
                  <Card.Image src={city.image} top />
                </Link>
                <Card.Body>
                    <Card.Text>
                        <h4>{city.name}</h4>
                    </Card.Text>

                </Card.Body>
            </Card>) : <Alert info><h3>City not found, please try another search...</h3></Alert>}
    </div>
  )
  
}
export default Cities;