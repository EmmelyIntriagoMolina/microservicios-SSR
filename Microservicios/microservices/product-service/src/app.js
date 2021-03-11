const express = require('express') ;
const app = express();
const Product = require('../models/product')


const logger = message=> console.log(`Mensaje desde Book service:  ${message}`)

app.get((req,res,next)=>{
  Product.find((err,productos)=>{
    if(err) return res.status(500).send({message:`Error al realizar la consulta ${err}`}) 
    res.status(200).send({productos})
  });  
})

//url http://localhost:3000/api/v2/product

app.post("/api/v2/producto", (req,res)=>{
      let producto = new Product ({
        name: req.body.name,
        description:req.body.description,
        category:req.body.category,
        price:req.body.price,
        existence:req.body.existence,
        img:req.body.img
    });
    producto.save(()=>{
          
      res.json({"Mensaje":"Producto almacenado sin problemas!"});
      //if(error) return res.json({ok:false,msg:"Hubo un error"})
  })
 
});

module.exports= app;