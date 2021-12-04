import axios from "axios"

const citiesActions = {

    GetCities: () => {

        return (dispatch, getState) => {
              axios.get("http://localhost:4000/api/cities")
            .then(respuesta => dispatch({type: 'GETCITIES', payload: respuesta.data})) 
        }     
    },
    filter: (cities, value)=>{
        return (dispatch,getState)=>{
            dispatch({type:'filtro', payload:{cities, value}})
        }
    },
    GetCity: (id) => {
        return (dispatch, getState) => {
            axios.get('http://localhost:4000/api/city/' + id)
            .then(respuesta => dispatch({type: 'getcity', payload: respuesta.data}))
//            .catch(error => props.push('/serverdown')) 
        }
    },
}

export default citiesActions