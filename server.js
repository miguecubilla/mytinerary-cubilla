const express=require('express')
const cors=require('cors')
const Router=require('./routes/routes')

const app= express()
 app.use(cors())
 app.use(express.json())

app.get("/prueba/datos", (req,res)=>{
    console.log("me llego un pedido get")
    res.json({respuesta:"ola k ace"})
})

app.use('/api',Router)

app.listen(4000, ()=>{console.log("hello, listening on port 4000")})