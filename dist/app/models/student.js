"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = __importDefault(require("mongoose"));
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
const studentSchema = new mongoose_1.default.Schema(studentStructure);
// Define User model
const Student = mongoose_1.default.model("Student", studentSchema);
exports.default = Student;
