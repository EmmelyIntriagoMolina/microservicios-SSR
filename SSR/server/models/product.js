let mongoose = require('mongoose');
let Schema = mongoose.Schema;


// se define el esquema o la estructura de la entidad
let ProductSchema = new Schema({
    name: { type:String, required:true },
        description: {type:String, required:true},
        category: {type:String, required:true},
        price: {type:Number, required:true},
        existence: {type:Number, required:true},
        img: {type:String, required:true}
});


//luevo se crea el modelo a partir del esquema
let Product = mongoose.model('producto', ProductSchema);

module.exports= Product;