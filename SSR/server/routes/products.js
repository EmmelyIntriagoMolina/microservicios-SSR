//servidor express
var express = require('express');
var router = express.Router();


//conexiOn a la base de datos
let mongoose = require('./../config/conexion');

//modelos
let Product = require('./../models/product');

//ruta /
router.get('/', (req,res, next)=>{
    Product.find((err, productos)=>{
    if (err) throw err;
    res.render('product', {productos: productos});
  })
})
//ruta producto/nuevo
router.get('/producto/nuevo',(req,res,next)=>{
  res.render('productoForm', {});
})
//ruta producto/modificar
router.get('/producto/modificar/:id', (req,res,next)=>{
  let idProducto= req.params.id;
  Product.findOne({_id: idProducto }, (err,producto)=>{
    if (err) throw err;
    res.render('productoForm', {producto: producto});
  })
})
//ruta producto/eliminar
router.get('/producto/eliminar/:id', (req,res,next)=>{
  let idProducto= req.params.id;
  Product.remove({_id:idProducto}, (err)=>{
    if (err) throw err;
    res.redirect('/products');
  })
})



module.exports= router;
