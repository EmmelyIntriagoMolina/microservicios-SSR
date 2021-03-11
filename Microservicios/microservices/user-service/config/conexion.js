let mongoose = require('mongoose');


mongoose.connect("mongodb+srv://db_test:Dayanara1814@cluster0.sepah.mongodb.net/sextoA?retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology:true});

module.exports = mongoose;
