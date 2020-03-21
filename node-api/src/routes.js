const express = require('express');
const routes = express.Router();

const ProductController = require('./controllers/ProductController');

//Roda raiz
routes.get('/',(req, res) => {
    res.send('Hello Segatto');
});

//Rota raiz de produtos
routes.get('/products',ProductController.index);
routes.get('/products/:id',ProductController.view);
routes.post('/products',ProductController.create);
routes.put('/products/:id',ProductController.update);
routes.delete('/products/:id',ProductController.delete);

//Exportar as rotas
module.exports = routes;