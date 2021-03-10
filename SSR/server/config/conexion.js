let mongoose = require('mongoose');


mongoose.connect("mongodb://emmely:emmely123@cluster0-shard-00-00.08xxn.mongodb.net:27017,cluster0-shard-00-01.08xxn.mongodb.net:27017,cluster0-shard-00-02.08xxn.mongodb.net:27017/prueba?ssl=true&replicaSet=atlas-csl3sb-shard-0&authSource=admin&retryWrites=true&w=majority", {useNewUrlParser: true, useUnifiedTopology:true});

module.exports = mongoose;
