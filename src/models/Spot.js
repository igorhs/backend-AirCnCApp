const mongoose = require('mongoose');

const SpotSchema = new mongoose.Schema({
    thumbnail: String,
    company: String,
    price: Number,
    techs: [String],
    //Agora vamos criar o usuário que cadastrou a empresa:
    user: {
        type: mongoose.Schema.Types.ObjectId,
        //Agora vamos declarar que nos referimos ao model -> User.js
        ref: 'User'
    }
}, {
    //Toda vez que um spot for convertido em JSON, coloque todos os virtuals juntos
    toJSON: {
        virtuals: true,
    },
});

SpotSchema.virtual('thumbnail_url').get(function() {
    //NÃO PODE SER NO FORMATO ARROW FUNCTION =>
    //Prestar atenção na SINTAXE!!
    return `http://192.168.100.108:3333/files/${this.thumbnail}`
})

module.exports = mongoose.model('Spot', SpotSchema);