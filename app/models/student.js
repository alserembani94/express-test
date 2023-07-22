const mongoose = require('mongoose');

const studentStructure = {
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    required: true,
  },
  class: {
    type: String,
    required: false,
  },
};

// Define User schema
const studentSchema = new mongoose.Schema(studentStructure);

// Define User model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;