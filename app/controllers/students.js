const Student = require('../models/student');

// 1. Get all
const getAllStudents = async (_request, response) => {
  try {
    // const students = Student.getStudents();
    const students = await Student.find();
    response.json(students);
  }
  catch (error) { }
}

// 2. Get one from id
const getStudentById = async (request, response) => {
  try {
    const id = request.params.id;
    const student = await Student.findById(id);
    if (!student) {
      return response.status(404).json({ message: 'Student not found' });
    }
    // const student = Student.getStudentById(id);

    response.json(student);
  }
  catch (error) {
    response.status(500).json({ message: 'Internal Server Error' });
  }
}

// 3. Create one
const createStudent = async (request, response) => {
  try {
    const data = request.body;
    // Student.createStudent(data);
    const newStudent = await Student.create(data);
    response.status(201).json(newStudent);
  }
  catch (error) {
    response.status(500).json({ message: 'Internal Server Error' });
  }
}

// 4. Update one
const updateStudent = async (request, response) => {
  try {
    const id = request.params.id;
    const data = request.body;
    // console.log(request.body);
    // Student.updateStudent(id, data);

    // response.send(`Student #${id} updated`);

    const updatedStudent = await Student.findByIdAndUpdate(id, data, { new: true });
    if (!updatedStudent) {
      return response.status(404).json({ message: 'Student not found' });
    }
    response.json(updatedStudent);
  }
  catch (error) {
    response.status(500).json({ message: 'Internal Server Error' });
  }
}

// 5. Delete one
const deleteStudent = async (request, response) => {
  try {
    const id = request.params.id;
    // Student.deleteStudent(id);

    // response.send(`Student #${id} deleted`);

    const deletedStudent = await Student.findByIdAndDelete(req.params.id);
    if (!deletedStudent) {
      return response.status(404).json({ message: 'Student not found' });
    }
    response.sendStatus(204);
  }
  catch (error) {
    response.status(500).json({ message: 'Internal Server Error' });
  }
}

// // Handler functions
// const getAllUsers = async (req, res) => {
//   try {
//     const users = await User.find();
//     res.json(users);
//   } catch (error) {
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const getUserById = async (req, res) => {
//   try {
//     const user = await User.findById(req.params.id);
//     if (!user) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(user);
//   } catch (error) {
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const createUser = async (req, res) => {
//   try {
//     const newUser = await User.create(req.body);
//     res.status(201).json(newUser);
//   } catch (error) {
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const updateUser = async (req, res) => {
//   try {
//     const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
//     if (!updatedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.json(updatedUser);
//   } catch (error) {
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

// const deleteUser = async (req, res) => {
//   try {
//     const deletedUser = await User.findByIdAndDelete(req.params.id);
//     if (!deletedUser) {
//       return res.status(404).json({ message: 'User not found' });
//     }
//     res.sendStatus(204);
//   } catch (error) {
//     res.status(500).json({ message: 'Internal Server Error' });
//   }
// };

module.exports = {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};