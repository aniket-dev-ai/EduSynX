import express from "express";
import { auth, isInstitute } from "../Middleware/Auth.js";
import { createAssignment } from "../controllers/AssignmentController.js";

const router = express.Router();

router.post("/create/:ModuleId", auth, isInstitute, createAssignment);

export default router;