const mongoose = require('mongoose');
const Product = mongoose.model('Product');

module.exports = {
    //Método index
    async index(req, res) { 
        //Busca produtos
        const products = await Product.find();
        
        return res.json(products);
    },

    //Método View
    async view(req,res){
        const product = await Product.findById(req.params.id);
        return res.json(product);
    },

    //Método Create
    async create(req, res){
        //Cria o produto recebido via JSON
        const product = await Product.create(req.body);
        //Retorna um JSON com o produto criado
        return res.json(product);
    },

    //Método update - atualizar produto
    async update(req,res){
        //Atualiza produto pelo ID e os dados recebidos no Body. New é para retornar novo produto atualizado
        const product = await Product.findByIdAndUpdate(req.params.id, req.body, {new: true});
        return res.json(product);
    },

    async delete(req,res){
        //Remove produto pelo ID 
        await Product.findByIdAndRemove(req.params.id);
        return res.send();
    }
};