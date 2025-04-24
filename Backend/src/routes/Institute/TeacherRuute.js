import express from "express";
import { auth , isInstitute } from "../../Middleware/Auth.js";
import { createTeacher ,getAllTeachers } from "../../controllers/TeacherController.js";

const router = express.Router();

router.post("/create", auth, isInstitute, createTeacher);
router.get("/getAllTeachers", auth, getAllTeachers);

export default router;

