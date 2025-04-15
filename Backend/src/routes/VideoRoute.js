import express from "express";
import { auth, isInstitute } from "../Middleware/Auth.js";
import { createVideo } from "../controllers/VideosController.js";

const router = express.Router();

router.post("/create/:ModuleId", auth, isInstitute, createVideo);

export default router;
