const Student = require('../models/archive_student');

// 1. Get all
const getAllStudents = (_request, response) => {
  try {
    const students = Student.getStudents();
    response.json(students);
  }
  catch (error) { }
}

// 2. Get one from id
const getStudentById = (request, response) => {
  try {
    const id = request.params.id;
    const student = Student.getStudentById(id);

    response.json(student);
  }
  catch (error) {
    response.status(500).json({ message: 'Internal Server Error' });
  }
}

// 3. Create one
const createStudent = (request, response) => {
  try {
    const data = request.body;
    Student.createStudent(data);
    response.status(201).send("Student created");
  }
  catch (error) {
    response.status(500).json({ message: 'Internal Server Error' });
  }
}

// 4. Update one
const updateStudent = (request, response) => {
  try {
    const id = request.params.id;
    const data = request.body;
    Student.updateStudent(id, data);

    response.send(`Student #${id} updated`);
  }
  catch (error) {
    response.status(500).json({ message: 'Internal Server Error' });
  }
}

// 5. Delete one
const deleteStudent = (request, response) => {
  try {
    Student.deleteStudent(id);

    response.send(`Student #${id} deleted`);
  }
  catch (error) {
    response.status(500).json({ message: 'Internal Server Error' });
  }
}

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};