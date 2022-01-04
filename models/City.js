const mongoose = require('mongoose')

const citySchema = new mongoose.Schema({
    name: { type:String, required: true },
    image: { type:String }, 
    zona: { type:String}
})

const City = mongoose.model('city', citySchema)

module.exports = City;