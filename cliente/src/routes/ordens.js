const express = require('express');
const router = express.Router();
const Orden = require('../models/Orden');

//crear orden  http://localhost:4000/ordens
router.get('/', async (req, res)=>{
   const ordens= await Orden.find();
   res.json(ordens);
});

//editar orden
router.get('/:id', async (req, res) => {
   const orden =  await Orden.findById(req.params.id);
    res.json(orden);
});

//almacena ordenes  http://localhost:4000/ordens
router.post('/', async (req, res)=>{
    const orden = new Orden(req.body);
    await orden.save();
    res.json({
        status: 'Orden Saved'
    });
    
 });

//actualizar orden  http://localhost:4000/ordens
router.put('/:id', async (req, res) => {
    await Orden.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: 'Orden Updated'
    });
  });

//eliminar
router.delete('/:id', async (req, res) => {
    await Orden.findByIdAndRemove(req.params.id);
    res.json({
      status: 'Orden deleted'
    });
  });
module.exports = router;