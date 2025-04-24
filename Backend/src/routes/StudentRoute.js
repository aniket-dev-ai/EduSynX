import express from 'express';
 
import {LinkWithInstitute,buyCourse } from "../controllers/Student.Controller.js";

const router = express.Router();

router.post("/link/:InstituteId", LinkWithInstitute);
router.post("/buy/:CourseId", buyCourse);

export default router;