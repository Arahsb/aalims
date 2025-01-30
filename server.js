require('dotenv').config(); // Load environment variables

// Import the Express module
const express = require('express');

// Import the cors module
const cors = require('cors');

// Import the mongoose module for MongoDB connection
const mongoose = require('mongoose');

// Import routes
const userRoutes = require('./routes/userRoutes');

// Create a new Express application
const app = express();

// Middleware to parse JSON
app.use(express.json());

// Enable CORS "Cross-Origin Resource Sharing" for all routes
app.use(cors());

// Serve static files from the public directory
app.use(express.static('public'));

// Use the user routes
app.use('/users', userRoutes);

// Connect to MongoDB
const dbUser = process.env.DB_USER;
const dbPass = process.env.DB_PASS;
const dbName = process.env.DB_NAME;
const dbHost = process.env.DB_HOST || 'localhost';
const dbPort = process.env.DB_PORT || 27017;
const authDb = process.env.AUTH_DB || dbName;

const uri = `mongodb://${dbUser}:${dbPass}@${dbHost}:${dbPort}/${dbName}?authSource=${authDb}`;

mongoose.connect(uri, {})
  .then(() => console.log('🔥 Connected to MongoDB successfully'))
  .catch((err) => console.error('❌ MongoDB connection error:', err));

// Define a simple route for testing
app.get('/', (req, res) => {
  res.send('Welcome to the Express.js server with MongoDB!');
});

// Define the port number
const port = process.env.PORT || 3000;

// Start the express server
app.listen(port, () => {
  console.log(`🚀 Server is running on http://localhost:${port}`);
});
