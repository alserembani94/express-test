import { Request, Response } from "express";
import Student from "../models/student";

// 1. Get all
const getAllStudents = async (_request: Request, response: Response) => {
  try {
    const students = await Student.find();
    response.json(students);
  } catch (error) {
    response.status(500).json({ message: "Internal Server Error" });
  }
};

// 2. Get one from id
const getStudentById = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const student = await Student.findById(id);
    if (!student) {
      return response.status(404).json({ message: "Student not found" });
    }

    response.json(student);
  } catch (error) {
    response.status(500).json({ message: "Internal Server Error" });
  }
};

// 3. Create one
const createStudent = async (request: Request, response: Response) => {
  try {
    const data = request.body;
    const newStudent = await Student.create(data);
    response.status(201).json(newStudent);
  } catch (error) {
    response.status(500).json({ message: "Internal Server Error" });
  }
};

// 4. Update one
const updateStudent = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const data = request.body;

    const updatedStudent = await Student.findByIdAndUpdate(id, data, {
      new: true,
    });
    if (!updatedStudent) {
      return response.status(404).json({ message: "Student not found" });
    }
    response.json(updatedStudent);
  } catch (error) {
    response.status(500).json({ message: "Internal Server Error" });
  }
};

// 5. Delete one
const deleteStudent = async (request: Request, response: Response) => {
  try {
    const id = request.params.id;

    const deletedStudent = await Student.findByIdAndDelete(id);
    if (!deletedStudent) {
      return response.status(404).json({ message: "Student not found" });
    }
    response.sendStatus(204);
  } catch (error) {
    response.status(500).json({ message: "Internal Server Error" });
  }
};

export {
  getAllStudents,
  getStudentById,
  createStudent,
  updateStudent,
  deleteStudent,
};
