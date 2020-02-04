const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const requireDir = require('require-dir');

//Iniciando App
const app = express();

app.use(express.json())
app.use(cors())

//Iniciando DB
mongoose.connect(
    'mongodb+srv://omnistack:omnistack@semanaomnistack-ostz9.mongodb.net/Cadastros?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

requireDir('./src/models');

//Rotas
app.use('/api', require('./src/routes'))

//Porta utilizada;
var port = process.env.PORT || 3000;

app.listen(port, function () {
    console.log('Umbler listening on port %s', port);
});