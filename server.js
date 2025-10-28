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
app.get('/', (req, res) => res.send({ message: 'API is running' }));

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
