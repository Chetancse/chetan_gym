// controllers/registerController.js
const { validationResult } = require('express-validator');
const { connectToDatabase }= require('../config/database');
const mysql = require('mysql2/promise');
exports.registerUser = async (req, res) => {
  const { firstName, lastName, email, address, phoneno, gender } = req.body;

  try {
    // Input validation
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    const connection = await connectToDatabase();
    /* const connection = await mysql.createConnection(dbConfig); */
    /* const connection = await pool.getConnection(); */
    const query = `
      INSERT INTO gymusers (first_name, last_name, email, address, phone_no, gender)
      VALUES (?, ?, ?, ?, ?, ?)
    `;
    await connection.execute(query, [firstName, lastName, email, address, phoneno, gender]);
    await connection.end();

    console.log('Record inserted successfully');
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ message: 'Registration failed' });
  }
};