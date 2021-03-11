let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// se define el esquema o la estructura de la entidad
let UserSchema = new Schema({
    name:{type:String, required:true},
    username:{ type:String, required:true},
    password:{type:String, required:true}
});

//hook (middleware)
UserSchema.pre("save", async function(next){
    const user= this;

    if (!user.isModified("password"))
    {
        next();
    }
    user.password= "passwordAplicandoBcrypt";
})

//luevo se crea el modelo a partir del esquema
let Usuario = mongoose.model('usuario', UserSchema);

module.exports= Usuario;
