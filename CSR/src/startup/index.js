const express = require('express');

let _config=null;
let _express= null;

class Server
{

    constructor({config, router})
    {
        _config= config;
        _express = express().use(router) ;
    }
    start()
    {
        return new Promise(  resolve=>{
            _express.listen( _config.PORT, ()=>{
                console.log( `${_config.APPLICATION_NAME} esta corriendo en el puerto ${_config.PORT}   ` );
            });
            resolve();

        } )
    }

}
module.exports= Server;

