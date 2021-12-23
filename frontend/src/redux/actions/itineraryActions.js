import axios from "axios";

const itineraryActions = {

   getItineraryByCity : (Id) =>{
       return async (dispatch, getState) =>{
            axios.get('http://localhost:4000/api/city/itineraries/' +Id)
           .then(respuesta => dispatch({type:'GET_ITINERARY', payload: respuesta.data}))
       }
   },
   likeDislike: (itineraryId, token) => {
    return async () => {
        try {
            let response = await axios.put(`http://localhost:4000/api/itinerary/like/${itineraryId}`, {},
            {headers: {
                Authorization: "Bearer "+token
                }
            })
            return response
            
        }catch (error) {
            
        }
    }
},
addComment: (itineraryId, comment, token, urlImage, name) => {
    return async () => {
        try {
            let response = await axios.put(`http://localhost:4000/api/comments/${itineraryId}`, {comment, urlImage, name, type: "addComment"},
            {headers: {
                Authorization: "Bearer "+ token
                }
            })
            if (response.data.success) {
                return {
                    success: true, response: response.data.response
                }
            } else {
                throw new Error()
            }     
        } catch (error) {
            return {
                success: false, response: error
            }
        }
    }
},
deleteComment: (itineraryId, commentId, token) => {
    return async (dispatch) => {
        try {
            let response = await axios.put(`http://localhost:4000/api/comments/${itineraryId}`, {commentId, type: "deleteComment"},
            {headers: {
                Authorization: "Bearer "+token
                }
            })
            if (response.data.success) {
                return {
                    success: true
                }
            } else {
                throw new Error()
            }
        } catch (error) {
            return {
                success: false, response: error
            }
        }
    }
}, 
getActivitiesByItinerary: (itineraryId) => {
    return async (dispatch, getState) => {
        try {
            let response = await axios.get(`http://localhost:4000/api/activities/${itineraryId}`)
            let data = response.data.response
            return data
        } catch (error){
            return {
                success: false, response: error
            }
        }
    }

},

editComment: (commentId, comment, token) => {
    return async () => {
        try {
            let response = await axios.put(`http://localhost:4000/api/comments/${commentId}`, { comment, type: "editComment"},
            {headers: {
                Authorization: "Bearer "+token
                }
            })
            if (response.data.success) {
                return {
                    success: true, response: response.data.response
                }
            } else {
                throw new Error()
            }
        } catch (error) {
            return {
                success: false,response: error
            }
        }
    }    
}, 
}

export default itineraryActions