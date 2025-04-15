import express from "express";

import {createUser, LoginUser , } from "../controllers/Usercontroller.js";

const router = express.Router();

router.post("/create", createUser);
router.post("/login", LoginUser);

export default router;