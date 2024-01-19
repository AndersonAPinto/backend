const express = require('express');
const routes = express.Router();

const CompanyController = require('./controllers/CompanyController');
const PriorityController = require('./controllers/PriorityController');
const CalcCompany = require('./controllers/CalcCompany');



// rota para captar empresas
routes.get('/datas', CompanyController.read);

//rota para captar uma empresa
routes.get('/priorities',  PriorityController.read);

routes.get('/findData', CalcCompany.calcCompany);

// rota para receber o valor de potencia
routes.post('/receive', (CalcCompany.calcCompany));


module.exports = routes;