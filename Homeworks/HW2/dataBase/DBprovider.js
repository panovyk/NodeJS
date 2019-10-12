const pgp = require("pg-promise")();

const cn = {
    host: 'localhost',
    port: 5432,
    database: 'lun',
    user: 'postgres',
    password: 'root'
};


const db = pgp(cn);

module.exports = db;

