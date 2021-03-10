//servidor express
var express = require('express');
var router = express.Router();


//conexiOn a la base de datos
let mongoose = require('./../config/conexion');

//modelos
let Orden = require('./../models/order');

//ruta /
router.get('/', (req,res, next)=>{
    Orden.find((err, ordenes)=>{
    if (err) throw err;
    res.render('order', {ordenes: ordenes});
  })
})
//ruta orden/nuevo
router.get('/orden/nuevo',(req,res,next)=>{
  res.render('ordenForm', {});
})
//ruta orden/modificar
router.get('/orden/modificar/:id', (req,res,next)=>{
  let idOrden= req.params.id;
  Orden.findOne({_id: idOrden }, (err,orden)=>{
    if (err) throw err;
    res.render('ordenForm', {orden: orden});
  })
})
//ruta orden/eliminar
router.get('/orden/eliminar/:id', (req,res,next)=>{
  let idOrden= req.params.id;
  Orden.remove({_id:idOrden}, (err)=>{
    if (err) throw err;
    res.redirect('/orders');
  })
})



module.exports= router;