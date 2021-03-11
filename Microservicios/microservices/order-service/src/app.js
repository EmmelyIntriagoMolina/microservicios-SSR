const express = require('express') ;
const app = express();


const response =
{
    data:[],
    services:"Order services",
    architecture:"Microservices"
}

const logger = message=> console.log(`Mensaje desde Order service:  ${message}`)

app.use((req,res,next)=>{
    response.data=[];
    next();
})

//url http://localhost:3000/api/v2/order

app.get("/api/v2/order", (req,res)=>{
    response.data.push(
        "order 1",
        "order 2",
        "order 3"
    );
    logger("Get data order");
    return res.send(response);
})

module.exports= app;