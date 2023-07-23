"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteStudent = exports.updateStudent = exports.createStudent = exports.getStudentById = exports.getAllStudents = void 0;
const student_1 = __importDefault(require("../models/student"));
// 1. Get all
const getAllStudents = (_request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const students = yield student_1.default.find();
        response.json(students);
    }
    catch (error) {
        response.status(500).json({ message: "Internal Server Error" });
    }
});
exports.getAllStudents = getAllStudents;
// 2. Get one from id
const getStudentById = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params.id;
        const student = yield student_1.default.findById(id);
        if (!student) {
            return response.status(404).json({ message: "Student not found" });
        }
        response.json(student);
    }
    catch (error) {
        response.status(500).json({ message: "Internal Server Error" });
    }
});
exports.getStudentById = getStudentById;
// 3. Create one
const createStudent = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const data = request.body;
        const newStudent = yield student_1.default.create(data);
        response.status(201).json(newStudent);
    }
    catch (error) {
        response.status(500).json({ message: "Internal Server Error" });
    }
});
exports.createStudent = createStudent;
// 4. Update one
const updateStudent = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params.id;
        const data = request.body;
        const updatedStudent = yield student_1.default.findByIdAndUpdate(id, data, {
            new: true,
        });
        if (!updatedStudent) {
            return response.status(404).json({ message: "Student not found" });
        }
        response.json(updatedStudent);
    }
    catch (error) {
        response.status(500).json({ message: "Internal Server Error" });
    }
});
exports.updateStudent = updateStudent;
// 5. Delete one
const deleteStudent = (request, response) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = request.params.id;
        const deletedStudent = yield student_1.default.findByIdAndDelete(id);
        if (!deletedStudent) {
            return response.status(404).json({ message: "Student not found" });
        }
        response.sendStatus(204);
    }
    catch (error) {
        response.status(500).json({ message: "Internal Server Error" });
    }
});
exports.deleteStudent = deleteStudent;
