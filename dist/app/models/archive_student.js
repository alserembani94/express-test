"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.createStudent = exports.getStudentById = exports.getStudents = void 0;
let students = [];
const getStudents = () => students;
exports.getStudents = getStudents;
const getStudentById = (id) => students.find((student) => student.id === id);
exports.getStudentById = getStudentById;
const createStudent = (student) => students.push(Object.assign(Object.assign({}, student), { id: students.length + 1 }));
exports.createStudent = createStudent;
const updateStudent = (id, updatedStudent) => {
    let existingFlag = false;
    const updatedStudentList = students.map((student) => {
        if (student.id !== id) {
            return student;
        }
        existingFlag = true;
        console.log(updatedStudent);
        console.log(Object.assign(Object.assign({}, student), updatedStudent));
        return Object.assign(Object.assign({}, student), updatedStudent);
    });
    if (existingFlag === false) {
        throw new Error("Student not exist");
    }
    students = updatedStudentList;
};
exports.updateStudent = updateStudent;
const deleteStudent = (id) => {
    const isStudentExist = students.some((student) => student.id === id);
    if (!isStudentExist) {
        throw new Error("Student not exist");
    }
    const filteredStudent = students.filter((student) => student.id !== id);
    students = filteredStudent;
};
exports.deleteStudent = deleteStudent;
