const City = require('../models/City')

const citiesControllers = {
    obtenerCities: async (req, res) => {
        const city = City.find()
            .then((respuesta) => res.json({ respuesta: respuesta }))
    },
    obtenerUnaCity: async (req, res) => {
        let cities
        const id = req.params.id
        try {
            cities = await City.findOne({ _id: id })
        } catch (error) {
            console.log(error)
        }
        res.json({ respuesta: cities, success: true })
    },
    postCities: (req, res) => {
        const { name, image, zona } = req.body
        const city = new City({ name, image, zona }).save()
            .then((respuesta) => res.json({ respuesta }))
    },

    deleteCity: async (req, res) => {
        const id = req.params.id
        let city
        try {
            await City.findOneAndDelete({ _id: id })
            city = await City.find()
        } catch (error) {
            console.log(error)
        }
        res.json({ respuesta: city, success: true })
    },
    modificarUnaCity: async (req, res) => {
        let id = req.params.id
        let ciudad = req.body
        let actualizado
        console.log(ciudad)
        try {
            ciudad = await City.findOneAndUpdate({ _id: id }, ciudad, { new: true })
            console.log(actualizado)
        } catch (error) {
            console.log(error)
        }
        res.json({ success: actualizado ? true : false })
    }
}
module.exports = citiesControllers;
