import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

// Carrega as variáveis do .env
dotenv.config();

const connection = await mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE
});

console.log("Conectado ao banco de dados com sucesso!");

export default { connection };