import express from "express";

import {
  createInstitute,
  getInstituteByCode,
} from "../controllers/InstituteController.js";
import { auth } from "../Middleware/Auth.js";

const router = express.Router();

router.post("/create",auth, createInstitute);
router.get("/getInstitute/:code", auth, getInstituteByCode);



export default router;