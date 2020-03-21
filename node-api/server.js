const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//Iniciando o App
const app = express();
app.use(express.json());
app.use(cors());

//Iniciando o Banco de Dados
mongoose.connect(
    'mongodb+srv://admin:admin@cluster0-nsbr3.mongodb.net/nodeapi?retryWrites=true&w=majority',
    {
        useNewUrlParser: true,
        useUnifiedTopology: true
    }
);

//Carregando Modelos
requireDir('./src/models');

// o Use é como um coringa que irá receber as requisições
//Não é necessario o uso do 'api', somente se quisermos que usuário acesse /api/Products por exemplo.
app.use('/api',require('./src/routes'));

//Básicamente dizendo para a aplicação ouvir na porta 3001
app.listen(3001);