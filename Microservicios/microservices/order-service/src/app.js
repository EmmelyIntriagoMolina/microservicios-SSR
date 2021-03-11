const express = require('express') ;
const app = express();
const Orden = require('../models/order')


const logger = message=> console.log(`Mensaje desde Book service:  ${message}`)

app.get((req,res,next)=>{
  Orden.find((err,ordenes)=>{
    if(err) return res.status(500).send({message:`Error al realizar la consulta ${err}`}) 
    res.status(200).send({ordenes})
  });  
})

//url http://localhost:3000/api/v2/orden

app.post("/api/v2/orden", (req,res)=>{
      let orden = new Orden ({
        numOrder: req.body.numOrder,
        date:req.body.date,
        productName:req.body.productName,
        userName:req.body.userName
    });
    orden.save(()=>{
          
      res.json({"Mensaje":"Orden almacenado sin problemas!"});
      //if(error) return res.json({ok:false,msg:"Hubo un error"})
  })
 
});

module.exports= app;