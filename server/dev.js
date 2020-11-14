var mysql = require('mysql');

var connection = mysql.createConnection({
    host : '115.85.182.144',
    user : 'filminguser',
    password : 'ajou1234',
    port : 3306,
    database : 'filming',
    insecureAuth: true
});

module.exports = connection;