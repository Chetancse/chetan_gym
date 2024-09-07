// index.js
const express = require('express');
const cors = require('cors');
const app = express();
app.use(cors());
const dbConfig = require('./config/database');
const registerRoutes = require('./routes/RegistrationRoutes');
const loginRoutes = require('./routes/LoginRoutes');
const mysql = require('mysql2/promise');
require('dotenv').config();


// Middleware to parse JSON
app.use(express.json());

// Routes
app.use('/api', loginRoutes); 
app.use('/api', registerRoutes);

app.use('/api',loginRoutes) 
// Registration Endpoint


// Start the server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
