const express = require('express');
const app = express();
const connectDB = require('./config/database');

// Initiate connection to DB
connectDB();

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Routes
const studentRoutes = require('./app/routes/students');

app.use('/students', studentRoutes);

// Start the server
const port = process.env.PORT || 6969;
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});