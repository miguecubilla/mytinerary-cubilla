const Itinerary = require('../models/Itinerary')

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
},
likeDislikeItinerary:(req,res) =>{
  Itinerary.findOne({_id: req.params.id})
  .then((itinerary) =>{
      if(itinerary.likes.includes(req.user._id)){
         Itinerary.findOneAndUpdate({_id:req.params.id}, {$pull:{likes:req.user.id}},{new:true})
         .then((newItinerary)=> res.json({success:true, response:newItinerary.likes}))
         .catch((error) => console.log(error))
      }else{
          Itinerary.findOneAndUpdate({_id: req.params.id}, {$push:{likes:req.user.id}},{new:true})
          .then((newItinerary) => res.json({success:true, response:newItinerary.likes}))
          .catch((error) => console.log(error))
      }
  })
  .catch((error) => res.json({success:false, response:error}))
},
controlComment: async (req, res) => {
switch(req.body.type){
    case "addComment":
        try {
            const newComment = await Itinerary.findOneAndUpdate({_id: req.params.id}, {$push: {comments: {comment: req.body.comment, userId: req.user._id,urlImage:req.body.urlImage,name:req.body.name}}}, {new: true}).populate("comments.userId")
            if (newComment) {
                res.json({success: true, response: newComment.comments})
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({success: false, response: error.message})
        }
        break

    case "editComment": 
        try {
            let editedComment = await Itinerary.findOneAndUpdate({"comments._id": req.params.id}, {$set: {"comments.$.comment": req.body.comment}}, {new: true})
            if (editedComment) {
                res.json({success: true, response: editedComment.comments})
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({success: false, response: error.message})
        }
        break

    case "deleteComment":
        try {
            let deletedComment = await Itinerary.findOneAndUpdate({"comments._id": req.body.commentId}, {$pull: {comments: {_id: req.body.commentId}}}, {new: true})
            if (deletedComment) {
                res.json({success: true})
            } else {
                throw new Error()
            }
        } catch (error) {
            res.json({success: false, response: error.message})
        }
        break  
}
},

};

module.exports = itinerariesControllers;
