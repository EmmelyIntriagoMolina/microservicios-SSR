const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const compression = require('compression');
require('express-async-errors');

module.exports= function({ HomeRoutes, UserRoutes, ProductRoutes, OrderRoutes }){
    const router = express.Router();
    const apiRouter = express.Router();

    apiRouter.use(express.json())
    .use(cors())
    .use(helmet())
    .use(compression());

    apiRouter.use('/home', HomeRoutes);
    apiRouter.use('/user', UserRoutes);
    apiRouter.use('/product', ProductRoutes);
    apiRouter.use('/order', OrderRoutes);



    router.use('/v1/api', apiRouter );

    //ruta estatica
    router.use('/public', express.static('public'))

    // http://localhost:3000/v1/api/home/

    return router;

}