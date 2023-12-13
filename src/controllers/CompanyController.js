const { response } = require('express');
const Companies = require('../models/CompanyData');


module.exports = {

    async read(req, response) {
        const companiesList = await Companies.find().select('ColSigla'); // separar no select com espaços
        return response.json(companiesList);

    }
}