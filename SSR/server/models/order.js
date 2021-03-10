let mongoose = require('mongoose');
let Schema = mongoose.Schema;


// se define el esquema o la estructura de la entidad
let OrdenSchema = new Schema({
    numOrder:{type:String, required:true},
    date:{ type:String, required:true},
    productName:{type:String, required:true},
    userName:{type:String, required:true}
});


//luevo se crea el modelo a partir del esquema
let Orden = mongoose.model('orden', OrdenSchema);

module.exports= Orden;
