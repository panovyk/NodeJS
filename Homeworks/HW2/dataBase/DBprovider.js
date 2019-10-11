let mysql2 = require('mysql2');

const pool = mysql2.createPool ({
    connectionLimit: 10,
    host: 'localhost',
    user: 'postgres',
    password: 'root',
    database: 'lun',
    port: '5432'
});

module.exports = pool;