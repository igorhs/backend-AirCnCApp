const multer = require ('multer');
const path = require ('path');

module.exports = {
    //armazenamento no próprio disco
    storage: multer.diskStorage({
        //desta forma, ele começa a busca dentro da pasta config, volta dois diretórios e encontra a pasta upload
        destination: path.resolve(__dirname, '..', '..', 'uploads'),
        //para chamar o arquivo, passamos estes 3 parâmetros
        filename: (req, file, cb) => {
            //prestar atenção nesta sintaxe!!
            const ext = path.extname(file.originalname);
            const name = path.basename(file.originalname, ext);

            //o Date.now vai nos garantir que uma imagem seja diferente da outra
            cb(null, `${name}-${Date.now()}${ext}`);
        }
    })
};