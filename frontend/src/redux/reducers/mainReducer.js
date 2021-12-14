import { combineReducers } from 'redux';
import itineraryReducer from './itineraryReducer';
import cityReducer from './cityReducer';
import authReducer from './authReducer'


const mainReducer = combineReducers({
    
    cityReducer,
    itineraryReducer,
    authReducer,


})
export default mainReducer