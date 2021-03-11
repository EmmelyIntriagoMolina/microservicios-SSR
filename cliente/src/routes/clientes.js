const express = require('express');
const router = express.Router();
const Cliente = require('../models/Cliente');

//crear cliente  http://localhost:4000/api/clientes
router.get('/', async (req, res)=>{
   const clientes= await Cliente.find();
   res.json(clientes);
});

//editar orden
router.get('/:id', async (req, res) => {
   const cliente =  await Cliente.findById(req.params.id);
    res.json(cliente);
});

//almacena cliente  http://localhost:4000/api/clientes
router.post('/', async (req, res)=>{
    const cliente = new Cliente(req.body);
    await cliente.save();
    res.json({
        status: 'Cliente Saved'
    });
    
 });

//actualizar cliente  http://localhost:4000/api/clientes
router.put('/:id', async (req, res) => {
    await Cliente.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: 'Cliente Updated'
    });
  });

//eliminar
router.delete('/:id', async (req, res) => {
    await Cliente.findByIdAndRemove(req.params.id);
    res.json({
      status: 'Cliente deleted'
    });
  });
module.exports = router;