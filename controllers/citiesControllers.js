var cities= [ {
    "id":1,
    "name":"New York",
    "image": "https://images.pexels.com/photos/2190283/pexels-photo-2190283.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "zona":"eeuu",
  },
{
    "id":2,
    "name":"Miami",
    "image":"https://th.bing.com/th/id/OIP.tt5hrDW-NkqjZE4DC72GewHaE6?pid=ImgDet&rs=1",
    "zona":"eeuu",
  },
{
    "id":3,
    "name":"Disney",
    "image":"https://images.pexels.com/photos/6921010/pexels-photo-6921010.jpeg?cs=srgb&dl=pexels-bo-zhong-6921010.jpg&fm=jpg",
    "zona":"eeuu",
  },
{
    "id":4,
    "name":"Hollywood",
    "image":"https://images.pexels.com/photos/5246036/pexels-photo-5246036.jpeg?cs=srgb&dl=pexels-masbet-christianto-5246036.jpg&fm=jpg",
    "zona":"eeuu",
  },
{
    "id":5,
    "name":"Isla de Pascua",
    "image":"https://images.pexels.com/photos/2819082/pexels-photo-2819082.jpeg?cs=srgb&dl=pexels-andrea-vera-sasso-2819082.jpg&fm=jpg",
    "zona":"america",
  },
{
    "id":6,
    "name":"Buenos Aires",
    "image":"https://images.pexels.com/photos/2438323/pexels-photo-2438323.jpeg?cs=srgb&dl=pexels-wesley-souza-2438323.jpg&fm=jpg",
    "zona":"america",
  },
{
    "id":7,
    "name":"Machu Pichu",
    "image":"https://images.pexels.com/photos/5503236/pexels-photo-5503236.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "zona":"america",
  },
{
    "id":8,
    "name":"Rio de Janeiro",
    "image":"https://images.pexels.com/photos/2876407/pexels-photo-2876407.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "zona":"america",
  },
{
    "id":9,
    "name":"Suiza",
    "image":"https://images.pexels.com/photos/205001/pexels-photo-205001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
    "zona":"europa",
  },
{
    "id":10,
    "name":"Barcelona",
    "image":"https://images.pexels.com/photos/175934/pexels-photo-175934.jpeg?cs=srgb&dl=pexels-tyler-hendy-175934.jpg&fm=jpg",
    "zona":"europa",
  },
{
    "id":11,
    "name":"Londres",
    "image":"https://images.pexels.com/photos/460672/pexels-photo-460672.jpeg?cs=srgb&dl=pexels-pixabay-460672.jpg&fm=jpg",
    "zona":"europa",
  },
{
    "id":12,
    "name":"Roma",
    "image":"https://images.pexels.com/photos/2676582/pexels-photo-2676582.jpeg?cs=srgb&dl=pexels-griffin-wooldridge-2676582.jpg&fm=jpg",
    "zona":"europa",
  },]
const City = require('../models/City')

const citiesControllers = {
    obtenerCities: async(req,res)=>{
      const city = City.find()
      .then((respuesta) => res.json({respuesta:respuesta}))
      
  },
    obtenerUnaCity:async(req,res)=>{
      let cities
      const id = req.params.id        
      try{
          cities = await City.findOne({_id:id})
      }catch(error){
          console.log(error)
      }
      res.json({respuesta:cities,success:true})

  },
    postCities:(req,res)=>{
      const {name , image, zona} = req.body
      const city = new City({name, image, zona}).save()
      .then((respuesta) => res.json({respuesta}))
  },
    
    deleteCity: async(req,res)=>{
      const id = req.params.id
      let city
      try{
          await City.findOneAndDelete({_id:id})
          city = await City.find()
      }catch(error){
          console.log(error)
      }
      res.json({respuesta: city,success:true})
  },
      modificarUnaCity: async(req,res)=>{
        let id = req.params.id
        let ciudad = req.body
        let actualizado
        console.log(ciudad)
        try{
            ciudad = await City.findOneAndUpdate({_id:id},ciudad,{new:true})
            console.log(actualizado)
        }catch(error){
            console.log(error)
        }
        res.json({success:actualizado ? true : false})
}
}
module.exports = citiesControllers;
