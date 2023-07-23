"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.createStudent = exports.getStudentById = exports.getAllStudents = void 0;
const archive_student_1 = require("../models/archive_student");
// 1. Get all
const getAllStudents = (_request, response) => {
    try {
        const students = (0, archive_student_1.getStudents)();
        response.json(students);
    }
    catch (error) { }
};
exports.getAllStudents = getAllStudents;
// 2. Get one from id
const getStudentById = (request, response) => {
    try {
        const id = request.params.id;
        const student = (0, archive_student_1.getStudentById)(id);
        response.json(student);
    }
    catch (error) {
        response.status(500).json({ message: "Internal Server Error" });
    }
};
exports.getStudentById = getStudentById;
// 3. Create one
const createStudent = (request, response) => {
    try {
        const data = request.body;
        (0, archive_student_1.createStudent)(data);
        response.status(201).send("Student created");
    }
    catch (error) {
        response.status(500).json({ message: "Internal Server Error" });
    }
};
exports.createStudent = createStudent;
// 4. Update one
const updateStudent = (request, response) => {
    try {
        const id = request.params.id;
        const data = request.body;
        (0, archive_student_1.updateStudent)(id, data);
        response.send(`Student #${id} updated`);
    }
    catch (error) {
        response.status(500).json({ message: "Internal Server Error" });
    }
};
exports.updateStudent = updateStudent;
// 5. Delete one
const deleteStudent = (request, response) => {
    try {
        const id = request.params.id;
        (0, archive_student_1.deleteStudent)(id);
        response.send(`Student #${id} deleted`);
    }
    catch (error) {
        response.status(500).json({ message: "Internal Server Error" });
    }
};
exports.deleteStudent = deleteStudent;
