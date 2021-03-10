let express = require('express');
let router = express.Router();
let mongoose = require('../config/conexion');
let Product = require('../models/product');

router.post('/productoForm/producto/operar', (req,res,next)=>{
    if (req.body._id === "")
    {
        let material = new  Product({
            name: req.body.name,
            description:req.body.description,
            category:req.body.category,
            price:req.body.price,
            existence:req.body.existence,
            img:req.body.img
        });
        material.save();
    }
    //caso contrario modificamos
    else
    {
        Product.findByIdAndUpdate(req.body._id,{$set:req.body},{new:true}, (err,model)=>{
            if(err) throw err;
        })
    };
    res.redirect('/products');
})

module.exports = router;