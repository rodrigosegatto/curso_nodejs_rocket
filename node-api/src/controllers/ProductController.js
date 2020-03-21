const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    //Método index
    async index(req, res) { 
        //Busca produtos
        const products = await Product.find();
        
        return res.json(products);
    }
};