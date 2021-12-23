import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Card, Button, Alert } from 'bootstrap-4-react/lib/components';
import { connect } from 'react-redux'
import citiesActions from "../redux/actions/citiesAction.js";
import itineraryActions from '../redux/actions/itineraryActions';
import Logo1 from '../components/assets/img/logo1.png'
import Itinerary from './itinerary'



const City = (props) => {
    let { id } = useParams();


    useEffect(() => {
        props.getOneCity(id);
        props.getItinerary(id);

    }, [])

    



    return (
        <div className="container-fluid" align="center">
            <div className="cardCity" style={{ backgroundImage: `url("${props.oneCity.image}")` }}>
            <img width="20%" src={Logo1} />
                <div clasName="divEnjoy">Enjoy the amazing {props.oneCity.name}</div>
               
                
            </div>
            {props.itinerary.length !== 0 ?
                props.itinerary.map((itineraries) => <Itinerary Itineraries={itineraries} key={itineraries.id} />) : <h1 className="sinItinerarios">
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
