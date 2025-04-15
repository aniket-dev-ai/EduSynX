import Assignment from "../models/Institute/AssignmentModel.js";
import Module from "../models/Institute/ModuleModel.js";
import asyncHandler from "express-async-handler";

export const createAssignment = asyncHandler(async (req, res) => {
  const { AssignmentName, AssignmentDescription, AssignmentFile, DueDate } =
    req.body;

  const { ModuleId } = req.params;

  if (
    !AssignmentName ||
    !AssignmentDescription ||
    !AssignmentFile ||
    !DueDate ||
    !ModuleId
  ) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const module = await Module.findById(ModuleId);

  if (!module) {
    res.status(404);
    throw new Error("Module not found");
  }

  const assignment = await Assignment.create({
    AssignmentName,
    AssignmentDescription,
    AssignmentFile,
    DueDate,
    ModuleId: ModuleId,
    CourseId: module.CourseId,
  });

  if (!assignment) {
    res.status(500);
    throw new Error("Failed to create assignment");
  }

  await Module.findByIdAndUpdate(
    ModuleId,
    { $push: { Assignments: assignment._id }, $inc: { TotalAssignments: 1 } },
    { new: true }
  );

  res.status(201).json(assignment);
});
