// index (quando queremos acessar/listar), show (mostrar), store (armazenar), update (editar), destroy (excluir)

const Spot = require('../models/Spot');
const User = require('../models/User');

module.exports = {
    async index(req, res){
        //Aqui vamos separar a listagem por tecnologia utilizando req.query
        const { tech } = req.query;

        //Para listagem no Mobile
        const spot = await Spot.find({ techs: tech })

        return res.json(spot);//agora ir até rotas e adicionar uma rota get para esta listagem
    },

    //determinando que a funçao é assincrona, pois vai executar em paralelo
    async store (req, res){
        const { filename } = req.file;
        const { company, techs, price } = req.body;
        const { user_id } = req.headers;

        //Verificação simples para validar o usuário que está inserindo as informações
        const user = await User.findById(user_id);

        if (!user){
            return res.status(400).json({error: 'Usuario nao existe'});
        }

        //Criando e enviando o spot para nosso DB
        const spot = await Spot.create({
            user: user_id,
            thumbnail: filename,
            company,
            //.split(',') para separar as tecnologias por ,
            //.map() para buscar lacunas no array e .trim() para remover as lacunas encontradas
            techs: techs.split (',').map(tech => tech.trim()),
            price
        })

        return res.json(spot);
    }
}