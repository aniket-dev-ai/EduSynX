import Module from "../../models/Institute/ModuleModel.js";
import Course from "../../models/Institute/CourseModel.js";
import asyncHandler from "express-async-handler";

export const createModule = asyncHandler(async (req, res) => {
  console.log("Creating a new module...");
  console.log("Request Body:", req.body);
    console.log("Request Params:", req.params);
  const { ModuleName } = req.body;
  const { CourseId } = req.params;
  if (!ModuleName?.trim()) {
    res.status(400);
    throw new Error("Module name is required");
  }
  if (!CourseId?.trim()) {
    res.status(400);
    throw new Error("Course ID is required");
  }
  // Check if course exists
  const course = await Course.findById(CourseId);
  if (!course) {
    res.status(404);
    throw new Error("Course not found");
  }
  // Check if module already exists
  const existingModule = await Module.findOne({ ModuleName, CourseId });
  if (existingModule) {
    res.status(400);
    throw new Error("Module with this name already exists in this course");
  }
  // Create new module
  const newModule = new Module({
    ModuleName: ModuleName.trim(),
    CourseId: CourseId,
  });
  await newModule.save();

  await Course.findByIdAndUpdate(
    CourseId,
    { $push: { Module: newModule._id } },
    { new: true }
  );
  res.status(201).json({
    success: true,
    message: "Module created successfully",
    Module: newModule,
  });
});
