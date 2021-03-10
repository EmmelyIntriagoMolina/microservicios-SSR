const mongoose = require('mongoose');
const {Schema} = mongoose;

const OrdenSchema= new Schema({
        
    numOrder: { type:Number, required:true },
    date: { type:Date, required:true },
    userName: {type:String, required:true},
    productName: {type:String, required:true},
    codigo: {type:String, required:true},
    cantidad: {type:Number, required:true}
   
});



module.exports = mongoose.model("order", OrdenSchema);