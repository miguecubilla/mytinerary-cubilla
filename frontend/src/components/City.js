import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';
//import axios from 'axios';
import { Link } from 'react-router-dom';
import { Card, Button, Alert } from 'bootstrap-4-react/lib/components';
import { connect } from 'react-redux'
import citiesActions from "../redux/actions/citiesAction.js";
import itineraryActions from '../redux/actions/itineraryActions';
import Itinerary from './itinerary';


const City = (props) => {
    let { id } = useParams();
    const [itinerary,setItinerary] = useState(props.getItineraryByCity(id))    

    const [idCity, setIdCity] = useState({ city: null, loading: true })
    console.log(itinerary)
    useEffect(() => {
        
        if (!(props.setTableCities.length === 0)) {
            let cityFind = props.setTableCities.find(city => city._id === id)
            setIdCity({ city: cityFind, loading: false })
        } else {
            console.log("hola")
            //  props.history.push('/cities')
        }

        
        
    }, [])

    

    const { loading, city } = idCity

    if (loading) {

        return <h1>Loading</h1>
    }

    return (
        <div className="container-fluid" align="center">
            <Card display="inline-block" align="center" ml="4" mr="1" p="3" style={{ width: '60%', height: '50%' }}>
                <Card.Image src={city.image} top />
                <Card.Body>
                    <Card.Text>
                        <h3>Enjoy {city.name}</h3>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Link to="/cities"><Button secondary lg>Back to cities</Button></Link>

            <Itinerary key={id} itinerary={itinerary}/>
            
            <Alert warning><h2>UNDER CONSTRUCTION</h2></Alert>
        </div>
    )
}

const mapStateToProps = state => {
    return {
        oneCity: state.cityReducer.city,
        setTableCities: state.cityReducer.cities,
        itinerary: state.itineraryReducer.itineraryByCity,
    }
}

const mapDispatchToProps = {
    arrayCities: citiesActions.GetCities,
    getOneCity: citiesActions.GetCity,
    getItineraryByCity: itineraryActions.getItineraryByCity,
}
export default connect(mapStateToProps, mapDispatchToProps)(City)
