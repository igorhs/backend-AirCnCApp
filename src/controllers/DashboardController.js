const Spot = require('../models/Spot');

module.exports = {
    async show (req, res){
        const { user_id } = req.headers;

        const spots = await Spot.find({ user: user_id });//agora ir até rotas e adicionar uma rota get para esta listagem

        return res.json(spots);
    }
}