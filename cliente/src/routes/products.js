const express = require('express');
const router = express.Router();
const Product = require('../models/Product');

// product  http://localhost:4000/api/products
router.get('/', async (req, res)=>{
   const products= await Product.find();
   res.json(products);
});

//editar orden
router.get('/:id', async (req, res) => {
   const product =  await Product.findById(req.params.id);
    res.json(product);
});

//almacena product  http://localhost:4000/api/products
router.post('/', async (req, res)=>{
    const product = new Product(req.body);
    await product.save();
    res.json({
        status: 'Product Saved'
    });
    
 });

//actualizar product  http://localhost:4000/api/products
router.put('/:id', async (req, res) => {
    await Product.findByIdAndUpdate(req.params.id, req.body);
    res.json({
      status: 'Product Updated'
    });
  });

//eliminar
router.delete('/:id', async (req, res) => {
    await Product.findByIdAndRemove(req.params.id);
    res.json({
      status: 'Product deleted'
    });
  });
module.exports = router;