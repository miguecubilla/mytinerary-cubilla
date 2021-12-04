const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers');
const itineraryControllers = require('../controllers/itineraryControllers')

const { getItineraries, getItinerary, getItineraryCity, postItinerary, deleteItinerary, modificarUnItinerary } = itineraryControllers
const { obtenerCities, postCities, obtenerUnaCity, deleteCity, modificarUnaCity } = citiesControllers

//rutas de ciudades
Router.route('/cities')
    .get(obtenerCities)
    .post(postCities)

Router.route('/city/:id')
    .get(obtenerUnaCity)
    .delete(deleteCity)
    .put(modificarUnaCity)

//rutas de itinerarios
Router.route('/itineraries')
    .get(getItineraries)
    .post(postItinerary)

Router.route('/itineraries/:id')
    .get(getItineraryCity)
    .delete(deleteItinerary)
    .put(modificarUnItinerary)

Router.route('/itinerary/:id')
    .get(getItinerary)

module.exports = Router;