const Router = require('express').Router();
const citiesControllers=require('../controllers/citiesControllers')


Router.route('/ciudades')
.get(citiesControllers.obtenerCities)


module.exports = Router;
