let students: Array<any> = [];

const getStudents = () => students;
const getStudentById = (id: string) =>
  students.find((student) => student.id === id);
const createStudent = (student: Object) =>
  students.push({ ...student, id: students.length + 1 });
const updateStudent = (id: string, updatedStudent: Object) => {
  let existingFlag = false;
  const updatedStudentList = students.map((student) => {
    if (student.id !== id) {
      return student;
    }

    existingFlag = true;
    console.log(updatedStudent);
    console.log({ ...student, ...updatedStudent });
    return { ...student, ...updatedStudent };
  });

  if (existingFlag === false) {
    throw new Error("Student not exist");
  }

  students = updatedStudentList;
};

const deleteStudent = (id: string) => {
  const isStudentExist = students.some((student) => student.id === id);
  if (!isStudentExist) {
    throw new Error("Student not exist");
  }

  const filteredStudent = students.filter((student) => student.id !== id);

  students = filteredStudent;
};

export {
  getStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
