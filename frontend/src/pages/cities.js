import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Card, Alert } from 'bootstrap-4-react/lib/components';
import { connect } from 'react-redux'
import citiesActions from "../redux/actions/citiesAction.js";

function Cities(props) {
  
  //fetcheo de la api
  useEffect(() => {
    props.arrayCities()
  }, [])

  const auxCities =props.tableCities;
  const filtrar=props.filter

  return (
    <div className="container-fluid">
      <div className="ContainerInput">
        /*input que captura informacion y lo envia a la funcion "handlechange" */
        <Input
          className="FormControl inputBuscar"
          placeholder="Search For Name"
          onChange={(evento) => filtrar(auxCities, evento.target.value)} />
      </div>
      <h1>Cities</h1>
      {props.setTableCities.length > 0 ? props.setTableCities.map((city) => <Card display="inline-block" align="top" ml="4" mr="1" p="3" style={{ width: '20rem' }}>
        <Link to={`/city/${city._id}`}>
          <Card.Image src={city.image} top />
        </Link>
                /*trajetas de ciudades */
        <Card.Body>
          <Card.Text>
            <h4>{city.name}</h4>
          </Card.Text>
        </Card.Body>
      </Card>) : <Alert info><h3>City not found, please try another search...</h3></Alert>}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    setTableCities: state.cityReducer.cities,
    tableCities: state.cityReducer.copiaCities
  }
}

const mapDispatchToProps = {
  arrayCities: citiesActions.GetCities,
  filter: citiesActions.filter,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cities)