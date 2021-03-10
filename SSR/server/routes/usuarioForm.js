let express = require('express');
let router = express.Router();
let mongoose = require('../config/conexion');
let Usuario = require('../models/user');

router.post('/usuarioForm/usuario/operar', (req,res,next)=>{
    if (req.body._id === "")
    {
        let persona = new  Usuario({
            name: req.body.name,
            username: req.body.username,
            password: req.body.password
        });
        persona.save();
    }
    //caso contrario modificamos
    else
    {
        Usuario.findByIdAndUpdate(req.body._id,{$set:req.body},{new:true}, (err,model)=>{
            if(err) throw err;
        })
    };
    res.redirect('/users');
})

module.exports = router;