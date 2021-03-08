const { Router } = require('express');

module.exports = function({ProductController}){
   const router = Router();
   router.get('/:productId',  ProductController.get ); //consultar un producto por ID
   router.get('/' , ProductController.getAll ); //consultar todos los productos
   router.post('/',  ProductController.create ); //recibe body para crear un nuevo producto
   router.patch('/:productId',  ProductController.update ); // recibe body para actualizar segUn ID un producto
   router.delete('/:productId',  ProductController.delete ); // recibe ID para eliminar un producto
   return router;
}