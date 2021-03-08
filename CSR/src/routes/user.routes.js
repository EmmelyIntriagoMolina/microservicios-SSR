const { Router } = require('express');

module.exports = function({UserController}){
   const router = Router();
   router.get('/:userId',  UserController.get ); //consultar un usuario por ID
   router.get('/' , UserController.getAll ); //consultar todos los usuarios
   router.post('/',  UserController.create ); //recibe body para crear un nuevo usuario
   router.patch('/:userId',  UserController.update ); // recibe body para actualizar segUn ID un usuario
   router.delete('/:userId',  UserController.delete ); // recibe ID para eliminar un usuario
   return router;
}
