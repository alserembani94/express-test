const mongoose = require('mongoose');
const env = require('./env');

const connectDB = async () => {
  try {
    console.log(env.dbUrl);
    await mongoose.connect(env.dbUrl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log('Connected to the database.');
  } catch (error) {
    console.error('Failed to connect to the database:', error);
    process.exit(1); // Exit the process with a failure code
  }
};

module.exports = connectDB;