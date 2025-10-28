// server.js
require('dotenv').config();
const express = require('express');
const connectDB = require('./config/db');
const authRoutes = require('./routes/auth');

const app = express();
const PORT = process.env.PORT || 5000;

// connect db
connectDB();

// middleware
app.use(express.json());

// basic health route
// app.get('/', (req, res) => res.send({ message: 'API is running' }));
app.get('/', (req, res) => {
  res.send(`
    <h2>✅ User Authentication API with JWT</h2>
    <p>Base URL: <code>https://userauthwithjwt.onrender.com/</code></p>
    <h3>Available Endpoints:</h3>
    <ul>
      <li>POST /api/auth/register</li>
      <li>POST /api/auth/login</li>
      <li>GET /api/auth/profile (Protected - requires Bearer Token)</li>
    </ul>
    <p>Use Postman to test the routes.</p>
  `);
});


// routes
app.use('/api/auth', authRoutes);

// global error handler (simple)
app.use((err, req, res, next) => {
  console.error('Unhandled error:', err);
  res.status(500).json({ message: 'Internal server error' });
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
