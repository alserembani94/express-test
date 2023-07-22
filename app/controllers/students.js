const Student = require('../models/student');

// 1. Get all
const getAllStudents = async (request, response) => {
  try {
    // const students = Student.getStudents();
    const students = await Student.find();
    response.json(students);
  }
  catch (error) { }
}

// 2. Get one from id
const getStudentById = (request, response) => {
  try {
    const id = Number(request.params.id);
    // const student = Student.getStudentById(id);

    if (!student) {
      throw new Error("Student not exist");
    }

    response.json(student);
  }
  catch (error) {
    response.status(404).send(error.message);
  }
}

// 3. Create one
const createStudent = (request, response) => {
  try {
    const data = request.body;
    // Student.createStudent(data);

    response.status(201).send("Student created!");
  }
  catch (error) { }
}

// 4. Update one
const updateStudent = (request, response) => {
  try {
    const id = Number(request.params.id);
    const data = request.body;
    // console.log(request.body);
    // Student.updateStudent(id, data);

    response.send(`Student #${id} updated`);
  }
  catch (error) { }
}

// 5. Delete one
const deleteStudent = (request, response) => {
  try {
    const id = Number(request.params.id);
    // Student.deleteStudent(id);

    response.send(`Student #${id} deleted`);
  }
  catch (error) { }
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