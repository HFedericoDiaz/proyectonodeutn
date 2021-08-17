//TIPOS DE CONSULTAS
//consultas en crudo: SELECT*FROM usuarios (proyectos chicos)
//query builder knexjs bd ('usuarios').select(*) (proyectos medianos)
//ORM Eloquent (proyectos grandes)

const mysql = require('mysql');
const util = require('util');

let pool = mysql.createPool({
    host : process.env.DB_HOST || 'localhost',
    user : process.env.DB_USER || 'root',
    password : process.env.DB_PASSWORD || '',
    port : process.env.DB_PORT || 3306, 
    database: process.env.DB_DATABASE || 'proyectobdd',
   // connectionLimit : 10, maximas consultas en simultaneo
});

pool.query = util.promisify(pool.query); //convierte la consulta en promesa
module.exports = pool;