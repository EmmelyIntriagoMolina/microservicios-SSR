const mongoose = require("mongoose");
const { Schema  } =  mongoose;


const OrderSchema= new Schema({
        
        numOrder: { type:Number, required:true },
        productName: {type:String, required:true},
        userName: {type:String, required:true}
});



module.exports = mongoose.model("order", OrderSchema);