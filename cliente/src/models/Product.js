const mongoose = require('mongoose');
const {Schema} = mongoose;



const ProductSchema= new Schema({
    name: { type:String, required:true },
    description: {type:String, required:true},
    category: {type:String, required:true},
    price: {type:Number, required:true},
    existence: {type:Number, required:true},
    
});



module.exports = mongoose.model("product", ProductSchema);