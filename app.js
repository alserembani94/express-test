const express = require('express');
const app = express();
const connectDB = require('./config/database');
const env = require('./config/env');

// Initiate connection to DB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const studentRoutes = require('./app/routes/students');

app.use('/students', studentRoutes);

// Start the server
const port = env.PORT;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});