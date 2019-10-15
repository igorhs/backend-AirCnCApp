// index (quando queremos acessar), show (mostrar), store (armazenar), update (editar), destroy (excluir)

const User = require('../models/User');

module.exports = {
    //determinando que a funçao é assincrona, pois vai executar em paralelo
    async store (req, res){
        const { email } = req.body;
        // { variável } -> reestruturação de variável: buscando informação dentro a própria variável
        //await faz com que a instrução execute após a busca pela informaçao na variável e-mail
        //const user = await User.create({ email });

        let user = await User.findOne({ email });

        //Se NÃO encontrar, crie um novo usuário:
        if (!user){
            user = await User.create({ email });
        }

        return res.json(user);
    }
}