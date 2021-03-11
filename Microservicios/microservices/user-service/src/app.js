const express = require('express') ;
const app = express();
const Usuario = require('../models/user')

app.get((req,res,next)=>{
  Usuario.find((err,usuarios)=>{
    if(err) return res.status(500).send({message:`Error al realizar la consulta ${err}`}) 
    res.status(200).send({usuarios})
  });  
})

//url http://localhost:3000/api/v2/usuario

app.post("/api/v2/usuario", (req,res)=>{
      let usuario = new Usuario ({
        name: req.body.name,
        username: req.body.username,
        password: req.body.password
    });
    usuario.save(()=>{
          
      res.json({"Mensaje":"Usuario almacenado sin problemas!"});
      //if(error) return res.json({ok:false,msg:"Hubo un error"})
  })
 
});

module.exports= app;