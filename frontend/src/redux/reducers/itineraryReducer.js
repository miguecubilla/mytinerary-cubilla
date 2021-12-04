const initialState = {
    itinerary:[],
}

const itineraryReducer = (state = initialState, action) => {
    switch (action.type){
        case 'GET_ITINERARY':
            return {
                ...state,
                itineraryByCity : action.payload
            }
        default : 
        return state
    }
}
export default itineraryReducer 