const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const config = require("../config/database");
const mysql = require("mysql2/promise");
const { connectToDatabase }= require('../config/database');

async function regis(req,res){
    const { username, password } = req.body;
    const connection = await connectToDatabase();
    try {
      // Check if the username already exists
      const [rows] = await connection.execute('SELECT * FROM login WHERE username = ?', [username]);
  
      if (rows.length > 0) {
        return res.status(400).json({ error: 'Username already exists' });
      }
  
      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 10);
  
      // Insert the new user into the database
      await connection.execute('INSERT INTO login (username, password) VALUES (?, ?)', [username, hashedPassword]);
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Registration failed' });
    }
}
async function login(req, res) {
  const { username, password } = req.body;

    try {
    
      const connection = await connectToDatabase();
 /*  const connection = await pool.getConnection(); */
  const [rows] = await connection.execute(
    "SELECT * FROM login WHERE username = ?",
    [username]
  );
 
  if (rows.length === 0) {
    return res.status(401).json({ error: "Authentication failed" });
  }

  const user = rows[0];

  const passwordMatch = await bcrypt.compare(password, user.password);

  if (!passwordMatch) {
    return res.status(401).json({ error: "Authentication failed" });
  }

  const token = jwt.sign({ username: user.username }, config.jwtSecret, {
    expiresIn: "1h",
  });

  res.status(200).json({ token });

  
}  
 catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Authentication failed' });
  } 
}

module.exports = { login,regis };
