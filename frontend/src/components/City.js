import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Card, Button, Alert } from 'bootstrap-4-react/lib/components';
import { connect } from 'react-redux'
import citiesActions from "../redux/actions/citiesAction.js";
import itineraryActions from '../redux/actions/itineraryActions';
import Accordion from 'react-bootstrap/Accordion'
import Itinerary from './itinerary'



const City = (props) => {
    let { id } = useParams();


    useEffect(() => {
        props.getOneCity(id)
        props.getItinerary(id)

    }, [])

    console.log(props)



    return (
        <div className="container-fluid" align="center">
            <div className="cardCity">
                <img className="imgCity" src={props.oneCity.image} />
                <Alert warning><h2>Enjoy {props.oneCity.name}</h2></Alert>
            </div>
            {props.itinerary.length !== 0 ? 
            props.itinerary.map((itineraries) => <Itinerary Itineraries={itineraries} key={itineraries.id}/>): <h1 className="sinItinerarios">
            there are no itineraries for this city
          </h1>
               
            
          }
            <Link to="/cities" ><Button secondary lg className="backCities">Back to cities</Button></Link>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        oneCity: state.cityReducer.city,
        itinerary: state.itineraryReducer.itinerary,
    }
}

const mapDispatchToProps = {
    getOneCity: citiesActions.GetCity,
    getItinerary: itineraryActions.getItineraryByCity,
}
export default connect(mapStateToProps, mapDispatchToProps)(City)
