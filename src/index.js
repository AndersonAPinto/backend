const express = require('express');
const cors = require('cors');
const routes = require('./routes');
require('./config/dbConfig');

const app = express();
const port = process.env.PORT || 3333;

app.use(express.json());
app.use(cors());
app.use(routes);

app.listen(port, ()=>{
    console.log('Servidor rodando na porta ',{port})
});


