const mongoose = require("mongoose");
const { Schema  } =  mongoose;


const ClienteSchema= new Schema({
        cedula: {type:String, required:true},
        nombre: { type:String, required:true },
        apellido: { type:String, required:true },
        correo: {type:String, required:true}
        
});




module.exports = mongoose.model("user", ClienteSchema);