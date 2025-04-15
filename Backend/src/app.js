import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import connectDB from "./database/db.js";

const app = express();

dotenv.config();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

connectDB();

import userRoute from "./routes/Userroute.js";
import instituteRoute from "./routes/IntituteRoute.js";
import teacherroute from "./routes/TeacherRuute.js";
import courseRoute from "./routes/CourseRoute.js";
import ModuleRoute from "./routes/ModuleRoute.js";
import VideoRoute from "./routes/VideoRoute.js";
import AssignmentRoute from "./routes/AssignmentRoute.js";

app.use("/api/user", userRoute);
app.use("/api/institute", instituteRoute);
app.use("/api/teacher", teacherroute);
app.use("/api/course", courseRoute);
app.use("/api/module", ModuleRoute);
app.use("/api/video", VideoRoute);
app.use("/api/assignment", AssignmentRoute);

export default app;
