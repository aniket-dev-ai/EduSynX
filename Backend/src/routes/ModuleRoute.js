import express from 'express';
import { auth, isInstitute } from '../Middleware/Auth.js';
import { createModule } from '../controllers/ModuleController.js';

const router = express.Router();

router.post('/create/:CourseId', auth, isInstitute, createModule);


export default router;