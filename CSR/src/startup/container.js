const { createContainer, asClass, asFunction, asValue } = require('awilix');

// config
const config = require('../config');
//startup
const app =  require('.')

//models

const { User } = require('../models')
const { Product } = require('../models')
const { Order } = require('../models')

//repositorys

const { UserRepository } = require('../repositories')
const { ProductRepository } = require('../repositories')
const { OrderRepository } = require('../repositories')


//services

const { HomeService } = require('../services');
const { UserService } = require('../services');
const { ProductService } = require('../services');
const { OrderService } = require('../services');


//controllers

const { HomeController } = require('../controllers');
const { UserController } = require('../controllers');
const { ProductController } = require('../controllers');
const { OrderController } = require('../controllers');


//routes

const { HomeRoutes} = require('../routes/index.routes');
const { UserRoutes} = require('../routes/index.routes');
const { ProductRoutes} = require('../routes/index.routes');
const { OrderRoutes} = require('../routes/index.routes');
const Routes =  require('../routes')




const container = createContainer();


container.register(
    {
        app: asClass(app).singleton(),
        router: asFunction(Routes).singleton(),
        config: asValue(config)
    }
).register(
    {
        HomeService: asClass(HomeService).singleton(),
        UserService: asClass(UserService).singleton(),
        ProductService: asClass(ProductService).singleton(),
        OrderService: asClass(OrderService).singleton()
    }
).register(
    {
        HomeController: asClass(HomeController.bind(HomeController)).singleton(),
        UserController: asClass(UserController.bind(UserController)).singleton(),
        ProductController: asClass(ProductController.bind(UserController)).singleton(),
        OrderController: asClass(OrderController.bind(OrderController)).singleton(),
    }
).register(
    {
        HomeRoutes: asFunction(HomeRoutes).singleton(),
        UserRoutes: asFunction(UserRoutes).singleton(),
        ProductRoutes: asFunction(ProductRoutes).singleton(),
        OrderRoutes: asFunction(OrderRoutes).singleton(),
    }
).register(
    {
        User: asValue(User),
        Product: asValue(Product),
        Order: asValue(Order)
    }
).register(
    {
        UserRepository: asClass(UserRepository).singleton(),
        ProductRepository: asClass(ProductRepository).singleton(),
        OrderRepository: asClass(OrderRepository).singleton()
    }
)



module.exports = container;