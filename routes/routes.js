require("../config/database")
const Router = require('express').Router();
const citiesControllers = require('../controllers/citiesControllers');
const itineraryControllers = require('../controllers/itineraryControllers')
const validator = require('../config/validator')
const authControllers = require('../controllers/usersControllers')
const passport = require('../config/passport')

const { getItineraries, getItinerary, getItineraryCity, postItinerary, deleteItinerary,likeDislikeItinerary, modificarUnItinerary,controlComment } = itineraryControllers
const { obtenerCities, postCities, obtenerUnaCity, deleteCity, modificarUnaCity } = citiesControllers
const { newUser, loginAccount, tokenVerification } = authControllers


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

Router.route('/city/itineraries/:id')
    .get(getItineraryCity)
    //    .delete(deleteItinerary)
    .put(modificarUnItinerary)

Router.route('/itinerary/:id')
    .get(getItinerary)

Router.route('/auth/signUp')
    .post(validator, newUser)

Router.route('/auth/signIn')
    .post(loginAccount)

Router.route('/tokenVerification')
    .get(passport.authenticate("jwt", { session: false }), tokenVerification)

Router.route("/itinerary/like/:id")
    .put(passport.authenticate("jwt", { session: false }), likeDislikeItinerary),
    
Router.route("/comments/:id")
    .put(passport.authenticate("jwt", { session: false }), controlComment)


module.exports = Router;