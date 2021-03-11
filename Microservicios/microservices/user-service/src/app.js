const express = require('express') ;
const app = express();


const response =
{
    data:[],
    services:"User services",
    architecture:"Microservices"
}

const logger = message=> console.log(`Mensaje desde User service:  ${message}`)

app.use((req,res,next)=>{
    response.data=[];
    next();
})

//url http://localhost:3000/api/v2/user

app.get("/api/v2/user", (req,res)=>{
    response.data.push('Administrador','Invitado', 'Emmely');
    logger("Get data user");
    return res.send(response);
})

module.exports= app;