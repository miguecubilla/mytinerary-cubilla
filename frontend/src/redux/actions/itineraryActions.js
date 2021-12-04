import axios from "axios";

const itineraryActions = {

   getItineraryByCity : (cityId) =>{
       return async (dispatch, getState) =>{
           let res = await axios.get('http://localhost:4000/api/itineraries/' +cityId)
           dispatch ({type:"GET_ITINERARY", payload: res.data.response})
       }
   }
}

export default itineraryActions