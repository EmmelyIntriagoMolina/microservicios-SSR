const mongoose = require("mongoose");
const { Schema  } =  mongoose;


const UserSchema= new Schema({
        name: { type:String, required:true },
        username: {type:String, required:true},
        password: {type:String, required:true}
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


module.exports = mongoose.model("user", UserSchema);