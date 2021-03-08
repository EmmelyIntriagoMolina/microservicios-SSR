const { Router } = require('express');

module.exports = function({OrderController}){
   const router = Router();
   router.get('/:orderId',  OrderController.get ); //consultar un producto por ID
   router.get('/' , OrderController.getAll ); //consultar todos los productos
   router.post('/',  OrderController.create ); //recibe body para crear un nuevo producto
   router.patch('/:orderId',  OrderController.update ); // recibe body para actualizar segUn ID un producto
   router.delete('/:orderId',  OrderController.delete ); // recibe ID para eliminar un producto
   return router;
}