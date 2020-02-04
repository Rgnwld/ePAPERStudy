const mongoose = require('mongoose')
const Cadastro = mongoose.model('cadastro');

module.exports = {
    async index (req, res){
        const { page = 1 } = req.query;
        console.log(req.query);
        const cads = await Cadastro.paginate({}, { page, limit: 50 });
        return res.json(cads);
    },

    async show (req, res){
        const cad = await Cadastro.findOne(req.params.name)
        return res.json(cad);
    },

    async update (req, res){
        const cad = await Cadastro.findByIdAndUpdate(req.params.id, req.body, { new: true })
        return res.json(cad);
    },

    async destroy (req, res){
        await Cadastro.findByIdAndRemove(req.params.id)
        return res.send('Sucesso!')
    },

    async store (req, res){
        const cad = await Cadastro.create(req.body)
        return res.json(cad);
    },
}