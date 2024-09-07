// config/database.js
require('dotenv').config(); // Load environment variables from .env
/* 
const mysql = require('mysql2/promise'); */
const mysql = require('mysql2/promise');
/* const pool = mysql.createPool({
  
   host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,  */
  /* ost:'localhost',
  user:'root',
  password:'sa@123',
  database:'test',
  waitForConnections:10,
  connectionLimit:10, */

/* }); */
const dbConfig={
  host:'localhost',
  user:'root',
  password:'sa@123',
  database:'test',
  waitForConnections:10,
  connectionLimit:10,

}

async function connectToDatabase() {
  try {
    const connection = await mysql.createConnection(dbConfig);
    return connection;
  } catch (error) {
    console.error('Database connection error:', error);
    throw error;
  }
}
module.exports = {
    jwtSecret: process.env.JWT_SECRET,
    /* pool, */ connectToDatabase,
  };
