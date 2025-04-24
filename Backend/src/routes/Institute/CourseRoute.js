import express from 'express';
import { auth, isInstitute } from '../../Middleware/Auth.js';
import { createCourse , getAllCourses } from '../../controllers/CourseController.js';

const router = express.Router();

router.post('/create/:InstituteId', auth, isInstitute, createCourse);
router.get('/getAllCourses/:InstituteId', auth, getAllCourses);

export default router;
