const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');

const app = express();
mongoose.connect('mongodb+srv://db_test:Dayanara1814@cluster0.sepah.mongodb.net/sextoA?retryWrites=true&w=majority')
    .then(db => console.log('DB is connectd '))
    .catch(err => console.error(err));


//----Setting
app.set('port', process.env.PORT || 4000);

//----Niddlewares funciones 
app.use(morgan('dev'));
app.use(express.json());

//----Routes
app.use('/api/ordens', require ('./routes/ordens'));
app.use('/api/products', require ('./routes/products'));
app.use('/api/clientes', require ('./routes/clientes'));


//----Static file
app.use(express.static(__dirname + '/public'));

//----Server is listening
app.listen(app.get('port'), () => {
    console.log(`server on port ${app.get('port')}`);
});