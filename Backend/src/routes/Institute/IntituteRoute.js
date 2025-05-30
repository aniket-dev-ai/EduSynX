import express from "express";

import {
  createInstitute,
  getInstituteByCode,
  getInstitute
} from "../../controllers/Institute/InstituteController.js";
import { auth } from "../../Middleware/Auth.js";

const router = express.Router();

router.post("/create",auth, createInstitute);
router.get("/getInstitute", auth, getInstitute);
router.get("/getInstitute/:code", auth, getInstituteByCode);



export default router;