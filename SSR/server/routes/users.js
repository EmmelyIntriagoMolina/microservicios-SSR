//servidor express
var express = require('express');
var router = express.Router();


//conexiOn a la base de datos
let mongoose = require('./../config/conexion');

//modelos
let Usuario = require('./../models/user');

//ruta /
router.get('/', (req,res, next)=>{
  Usuario.find((err, usuarios)=>{
  if (err) throw err;
    res.render('user', {usuarios: usuarios});
  })
})
//ruta usuario/nuevo
router.get('/usuario/nuevo',(req,res,next)=>{
  res.render('usuarioForm', {});
})
//ruta usuario/modificar
router.get('/usuario/modificar/:id', (req,res,next)=>{
  let idUsuario= req.params.id;
  Usuario.findOne({_id: idUsuario }, (err,usuario)=>{
    if (err) throw err;
    res.render('usuarioForm', {usuario: usuario});
  })
})
//ruta usuario/eliminar
router.get('/usuario/eliminar/:id', (req,res,next)=>{
  let idUsuario= req.params.id;
  Usuario.remove({_id:idUsuario}, (err)=>{
    if (err) throw err;
    res.redirect('/users');
  })
})



module.exports= router;
