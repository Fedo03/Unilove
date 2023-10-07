var mysql = require('mysql2/promise')


var con = mysql.createPool(
    {
        host : 'localhost',
        user : 'root',
        password : '12345',
        database: "unilove",
        waitForConnections: true,
        connectionLimit: 10
    }
)


module.exports = con