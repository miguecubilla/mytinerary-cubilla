import React, { useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Card, Alert } from 'bootstrap-4-react/lib/components';
import { connect } from 'react-redux'
import citiesActions from "../redux/actions/citiesAction.js";
import Logo1 from '../components/assets/img/logo1.png'
import Logo2 from '../components/assets/img/tinerary.png'


function Cities(props) {
  useEffect(() => {
    props.arrayCities()
  }, [])
  const auxCities = props.tableCities;
  const filtrar = props.filter

  return (
    <div className="container-fluid">
      <div className="logo1" >
        <img className="logo1cont" src={Logo1} />
        <img className="logo1cont" src={Logo2} />
      </div>
      <div className="ContainerInput">
        <Input
          className="FormControl inputBuscar"
          placeholder="Search a City For Name"
          onChange={(evento) => filtrar(auxCities, evento.target.value)} />
      </div>
      {props.setTableCities.length > 0
        ? props.setTableCities.map((city) =>

          <Link to={`/city/${city._id}`}>
            <div className="cardCity2" style={{ backgroundImage: `url("${city.image}")` }}>
              <div clasName="divEnjoy">{city.name}</div>
            </div>
          </Link>

        ) : <Alert info><h3>City not found, please try another search...</h3></Alert>}
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