import { combineReducers } from 'redux';
import itineraryReducer from './itineraryReducer';
import cityReducer from './cityReducer';


const mainReducer = combineReducers({
    
    cityReducer,
    itineraryReducer,


})
export default mainReducer