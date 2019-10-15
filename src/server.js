const express = require ('express');
const mongoose = require ('mongoose');
const routes = require('./routes');
const cors = require ('cors');
const path = require ('path');

const app = express();

mongoose.connect('mongodb+srv://appstack:appstack@cluster0-4kyl7.gcp.mongodb.net/estudos?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

// GET (buscar), POST (criar), PUT (atualizar), DELETE (excluir)

//Aqui nós colocamos o endereço que a nossa api/frontend possa acessar!!!
//app.use(cors({origin: 'http://localhost:3333'}));
app.use(cors());
app.use(express.json());
//O método static do expres serve para retornar arquivos pdf, imagens, etc..
app.use('/files', express.static(path.resolve(__dirname, '..', 'uploads')));
app.use(routes);
app.listen(3333);

// req.query -> Acessar query params (para filtros)
// req.params -> Acessar route params (para edição, delete)
// req.body -> Acessar o corpo da requisição (para criação, edição)
// req.file -> Acessar o arquivo da requisição
// req.headers -> Obter informação do usuário autenticado na sessão