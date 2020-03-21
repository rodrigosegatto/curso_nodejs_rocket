const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Roda raiz
routes.get('/',(req, res) => {
    res.send('Hello Segatto');
});

//Rota raiz de produtos
routes.get('/products',ProductController.index);

//Exportar as rotas
module.exports = routes;