import React from 'react'
import { connect } from 'react-redux'
import itineraryActions from '../redux/actions/itineraryActions';


const Itinerary = ({props}) => {
    return ( 
        <>
        
        </>
     );
}
 

const mapDispatchToProps = {
    getItinerary: itineraryActions.getItineraries,
}
export default connect(null, mapDispatchToProps)(Itinerary)
