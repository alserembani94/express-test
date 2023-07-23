import { Request, Response } from "express";
import {
  getStudents,
  getStudentById as getById,
  createStudent as create,
  updateStudent as update,
  deleteStudent as deleteStud,
} from "../models/archive_student";

// 1. Get all
const getAllStudents = (_request: Request, response: Response) => {
  try {
    const students = getStudents();
    response.json(students);
  } catch (error) {}
};

// 2. Get one from id
const getStudentById = (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const student = getById(id);

    response.json(student);
  } catch (error) {
    response.status(500).json({ message: "Internal Server Error" });
  }
};

// 3. Create one
const createStudent = (request: Request, response: Response) => {
  try {
    const data = request.body;
    create(data);
    response.status(201).send("Student created");
  } catch (error) {
    response.status(500).json({ message: "Internal Server Error" });
  }
};

// 4. Update one
const updateStudent = (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    const data = request.body;
    update(id, data);

    response.send(`Student #${id} updated`);
  } catch (error) {
    response.status(500).json({ message: "Internal Server Error" });
  }
};

// 5. Delete one
const deleteStudent = (request: Request, response: Response) => {
  try {
    const id = request.params.id;
    deleteStud(id);

    response.send(`Student #${id} deleted`);
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
