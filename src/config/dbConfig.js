const mongoose = require('mongoose');
require('dotenv').config();

const dbconfig = process.env.URI_bd;
const connection = mongoose.connect(dbconfig);

module.exports = connection;

