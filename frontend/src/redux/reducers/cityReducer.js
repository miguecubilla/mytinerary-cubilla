const initialState = {
    copiaCities: [],
    cities: [],
    city: [],
    success: true
}

const citiesReducer=(state=initialState,action)=>{

    switch (action.type) {
        case 'GETCITIES':
            return {
                ...state,
                copiaCities: action.payload.respuesta,   
                cities: action.payload.respuesta           
            }
        case 'filtro':
            const filtrado = action.payload.cities.filter((city => city.name.toLowerCase().startsWith(action.payload.value.trim().toLowerCase())))
            return {
                ...state,
                cities: filtrado
            }
        case 'getcity':
            return {
                ...state,
                city: action.payload.respuesta,
                success: action.payload.success            
            }    
        default:
            return state
    }
}

export default citiesReducer;