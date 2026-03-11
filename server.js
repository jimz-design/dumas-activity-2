//server js
require ('dotenv').config();
const express = require ('express');
const app = express ();
const connectDB = require('./src/config/db');

connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//middleware
app.use (express.json());

//Load Config
const PORT = process.env. PORT || 3000;
const BASE_URI = process.env. BASE_URI || '/api/v1';

const apiRoutes = require ('./src/routes/apiRoutes');
app.use (BASE_URI, apiRoutes);

const authRoutes = require ('./src/routes/authRoutes');
app.use (BASE_URI, authRoutes);

app.listen (PORT, () => {
    console.log ('Server running on port ${PORT}');
    console.log (`Base URI: http://localhost:${PORT}${BASE_URI}`);
});




