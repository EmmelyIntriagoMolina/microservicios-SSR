const express = require('express') ;
const app = express();
const Usuario = require('../models/user');
const Product = require('../models/product');
const Usuario = require('../models/user')

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

app.post("/api/v1/producto", (req,res)=>{
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

//Orden
app.post("/api/v1/orden", (req,res)=>{
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