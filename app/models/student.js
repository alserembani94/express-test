const mongoose = require('mongoose');

const studentModel = {
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
const studentSchema = new mongoose.Schema(studentModel);

// Define User model
const Student = mongoose.model('Student', studentSchema);

module.exports = Student;



// let students = [];

// const getStudents = () => students;
// const getStudentById = (id) => students.find((student) => student.id === id);
// const createStudent = (student) => students.push({ ...student, id: students.length + 1 });
// const updateStudent = (id, updatedStudent) => {
//   let existingFlag = false;
//   const updatedStudentList = students.map(student => {
//     if (student.id !== id) {
//       return student;
//     }

//     existingFlag = true;
//     console.log(updatedStudent);
//     console.log({ ...student, ...updatedStudent });
//     return { ...student, ...updatedStudent };
//   });

//   if (existingFlag === false) {
//     throw new Error("Student not exist");
//   }

//   students = updatedStudentList;
// };

// const deleteStudent = (id) => {
//   const isStudentExist = students.some(student => student.id === id);
//   if (!isStudentExist) {
//     throw new Error("Student not exist");
//   }

//   const filteredStudent = students.filter(student => student.id !== id);

//   students = filteredStudent;
// };

// module.exports = {
//   getStudents,
//   getStudentById,
//   createStudent,
//   updateStudent,
//   deleteStudent,
// };