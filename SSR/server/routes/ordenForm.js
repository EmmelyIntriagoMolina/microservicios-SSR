let express = require('express');
let router = express.Router();
let mongoose = require('../config/conexion');
let Orden = require('../models/order');

router.post('/ordenForm/orden/operar', (req,res,next)=>{
    if (req.body._id === "")
    {
        let pedido = new  Orden({
            numOrder: req.body.numOrder,
            date:req.body.date,
            productName:req.body.productName,
            userName:req.body.userName
        });
        pedido.save();
    }
    //caso contrario modificamos
    else
    {
        Orden.findByIdAndUpdate(req.body._id,{$set:req.body},{new:true}, (err,model)=>{
            if(err) throw err;
        })
    };
    res.redirect('/orders');
})

module.exports = router;