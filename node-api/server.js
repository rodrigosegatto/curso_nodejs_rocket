const express = require('express');
const mongoose = require('mongoose');

//Iniciando o App
const app = express();

//Iniciando o Banco de Dados
mongoose.connect(
    'mongodb+srv://admin:admin@cluster0-nsbr3.mongodb.net/nodeapi?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//Primeira Rota
app.get('/',(req, res) => {
    res.send('Hello Segatto');
});

//Básicamente dizendo para a aplicação ouvir na porta 3001
app.listen(3001);