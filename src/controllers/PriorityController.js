const { request } = require('express');
const Companies = require('../models/CompanyData');

module.exports = {


    async read(req, response){
        const companyNames = req.query;
        // const usada para retornar somente o nome da empresa de energia
        const priorityName = await Companies.find(companyNames).select('ColSigla ColTE ColTUSD');
        return response.json(priorityName);
    }
   
}