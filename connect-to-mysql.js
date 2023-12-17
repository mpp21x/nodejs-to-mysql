import mysql from 'mysql2/promise';
import 'dotenv/config';

// create the connection to database
const connection = await mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// simple query
const result = await connection.execute(
  'SELECT * FROM `user` LIMIT 1 ',
);
console.log(result[0]);
process.exit(0);