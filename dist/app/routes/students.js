"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default.Router();
const students_1 = require("../controllers/students");
router.get("/", students_1.getAllStudents);
router.get("/:id", students_1.getStudentById);
router.post("/", students_1.createStudent);
router.put("/:id", students_1.updateStudent);
router.delete("/:id", students_1.deleteStudent);
exports.default = router;
