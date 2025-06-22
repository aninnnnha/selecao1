import mysql from 'mysql2/promise';
import dotenv from 'dotenv';

dotenv.config();

let connection;

async function connect() {
  if (!connection) {
    connection = await mysql.createConnection({
      host: process.env.MYSQL_HOST,
      port: process.env.PORT,
      user: process.env.MYSQL_USER,
      password: process.env.MYSQL_PASSWORD,
      database: process.env.MYSQL_DATABASE
    });
    console.log("Conectado ao banco!");
  }
  return connection;
}

export default { getConnection: connect };
