const Itinerary = require('../models/itinerary')

const itinerariesControllers = {
getItineraries: async (req, res) => {
    let itineraries;
    let error = null;
    try {
      itineraries = await Itinerary.find().populate('CityID');
    } catch (error) {
      error = error;
      console.error(error);
    }
    res.json({
      respuesta: error ? "ERROR" : itineraries,
      success: error ? false : true,
      error: error,
    });
  },
    getItinerary:async(req,res)=>{
      let itinerary
      const id = req.params.id        
      try{
          itinerary = await Itinerary.findOne({_id:id})
      }catch(error){
          console.log(error)
      }
      res.json({respuesta:itinerary,success:true})
  },
  getItineraryCity: async (req, res) => {
    const cityId = (req.params.id)
    try {
      const selectedCityItineraries = await Itinerary.find({ CityID: cityId })
      if (selectedCityItineraries.length != 0) {
        res.json({ success: true, respuesta: selectedCityItineraries });
      } else {
        res.json({ success: false, respuesta: [] })
      }
    } catch (error) {
      console.log(error);
      res.json({ success: false, respuesta: "ERROR" });
    }
  },
    postItinerary:(req,res)=>{
      const {name , lastName, personImage, price,duration, hashtags, CityID, likes, comment} = req.body
        new Itinerary({name , lastName, personImage, price,duration, hashtags, CityID, likes, comment}).save()
      .then((respuesta) => res.json({respuesta}))
  },
    
    deleteItinerary: async(req,res)=>{
      const id = req.params.id
      let itinerary
      try{
          await Itinerary.findOneAndDelete({_id:id})
      }catch(error){
          console.log(error)
      }
      res.json({respuesta: itinerary})
  },
      modificarUnItinerary: async(req,res)=>{
        let id = req.params.id
        let itinerary = req.body
        let actualizado
        try{
            actualizado = await Itinerary.findOneAndUpdate({_id:id},itinerary,{new:true})
        }catch(error){
            console.log(error)
        }
        res.json({success:actualizado ? true : false})
}
}
module.exports = itinerariesControllers;
