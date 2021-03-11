const express = require('express');
const app = express();

const response =
{
    data: [],
    services: "Monolithic service",
    architecture: "Monolithic"
}

//get      api/v1/
app.use((req,res,next)=>{
    response.data=[];
    next();
})

//get usuarios http://localhost:3000/api/v1/users
app.get('/api/v1/users', (req,res)=>{
    response.data.push('Administrador','Invitado', 'Emmely');
    return res.send(response)
})

//get products api/v1/products
app.get('/api/v1/products',(req,res)=>{
    response.data.push(
        "Manzana",
        "Pera",
        "Uva"
    );
    return res.send(response);
})

//get order api/v1/order
app.get('/api/v1/order',(req,res)=>{
    response.data.push(
        "order 1",
        "order 2",
        "order 3"
    );
    return res.send(response);
})

module.exports = app;