const User = require('../models/users');
const bcryptjs = require('bcryptjs');
const jwt = require('jsonwebtoken');

const authControllers = {

    newUser: async(req, res) => {
        let {name,lastName,country, email, password,urlImage,google} = req.body;    
        
        try {

            const usuarioExiste = await User.findOne({email})
            if (usuarioExiste){
                res.json({success: false, error:"The email user is already in use", response:null})
            }else{

                password= bcryptjs.hashSync(password, 10)

                const nuevoUsuario = new User({
                    name,
                    lastName,
                    country,
                    email, 
                    password,
                    urlImage,
                    google
                })

                const token = jwt.sign({ ...nuevoUsuario }, process.env.SECRET_KEY);
               
                await nuevoUsuario.save()
                res.json({success: true, response: {token,nuevoUsuario}, error: null})
            }
        
        }catch(error){
            res.json({success: false, response: null, error: error})
        }
    },
    loginAccount: async(req,res) =>{
        const {email,password,google} = req.body
        
        try{
            const usuarioExiste = await User.findOne({email})
            if (!usuarioExiste){
                res.json({success: false, errores:[{messages:"The email user is already in use"}], response:null})
            }else{
                let contraseñaCoincide = bcryptjs.compareSync(password, usuarioExiste.password)
                if (contraseñaCoincide) {
                    const token = jwt.sign({ ...usuarioExiste }, process.env.SECRET_KEY);
                    console.log(token)
                    res.json({success:true, response:{token,email, urlImage:usuarioExiste.urlImage} ,error:null})
                }else{
                    res.json({success: true, error:"El usuario y/o contraseña incorrectos"});
                }
                if (usuarioExiste.google && !google) throw new Error ("Invalid email");
            }
        }catch(error){
            res.json({success: false, response: null, error: error})
        }
    },
    tokenVerification: (req, res) => {
        res.json({name: req.user.name, urlImage: req.user.urlImage, _id: req.user._id})
    }
};
module.exports = authControllers;