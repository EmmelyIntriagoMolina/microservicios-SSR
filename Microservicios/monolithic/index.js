const server = require('./src/app');

server.listen(process.env.PORT || 3000, function(){
    console.log(`Esta ejecutando correctamente por el puerto 3000`)
});
