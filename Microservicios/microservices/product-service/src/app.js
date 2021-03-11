const express = require('express') ;
const app = express();


const response =
{
    data:[],
    services:"Product services",
    architecture:"Microservices"
}

const logger = message=> console.log(`Mensaje desde Product service:  ${message}`)

app.use((req,res,next)=>{
    response.data=[];
    next();
})

//url http://localhost:3000/api/v2/product

app.get("/api/v2/product", (req,res)=>{
    response.data.push(
        "Manzana",
        "Pera",
        "Uva"
    );
    logger("Get data product");
    return res.send(response);
})

module.exports= app;