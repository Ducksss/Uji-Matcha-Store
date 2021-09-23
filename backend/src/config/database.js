const mysql = require('mysql');
const config = require('./config');

const pool = mysql.createPool({
    connectionLimit: 100,
    host: 'localhost',
    user: config.databaseUserName,
    password: config.databasePassword,
    database: config.databaseName,
});

module.exports = pool;