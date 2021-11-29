const Router = require('express').Router();
const citiesControllers=require('../controllers/citiesControllers')

const { obtenerCities, postCities, obtenerUnaCity,deleteCity,modificarUnaCity } = citiesControllers
Router.route('/cities')
.get(obtenerCities)
.post(postCities)

Router.route('/city/:id')
.get(obtenerUnaCity)
.delete(deleteCity)
.put(modificarUnaCity)


module.exports = Router;
