const mongoose = require('mongoose');

const userStructure = {
  name: {
    type: String,
    required: true,
  },
};

// Define User schema
const userSchema = new mongoose.Schema(userStructure);

// Define User model
const User = mongoose.model('User', userSchema);

module.exports = User;