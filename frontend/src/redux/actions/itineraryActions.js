import axios from "axios";

const itineraryActions = {

   getItineraryByCity : (Id) =>{
       return async (dispatch, getState) =>{
            axios.get('http://localhost:4000/api/city/itineraries/' +Id)
           .then(respuesta => dispatch({type:'GET_ITINERARY', payload: respuesta.data}))
       }
   }
}

export default itineraryActions