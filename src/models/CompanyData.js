const mongoose = require('mongoose');

//definindo o modelo do schema
const CompanyDataSchema = new mongoose.Schema({
    ColSigla: {type: String},
    ColTE: {type: String},
    ColTUSD: {type: String}
});

module.exports = mongoose.model('datas', CompanyDataSchema); //('data' é o nome da coleção no BD)