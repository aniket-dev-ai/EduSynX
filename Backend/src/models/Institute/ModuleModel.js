import mongoose from "mongoose";

const moduleSchema = new mongoose.Schema({
  ModuleName: {
    type: String,
    required: true,
  },
  Lectures: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Lecture",
    },
  ],
  TotalLectures: {
    type: Number,
    default: 0,
  },
  CourseId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Course",
    required: true,
  },
  Videos: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Video",
    },
  ],
  TotalVideos: {
    type: Number,
    default: 0,
  },
  Notes: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Notes",
    },
  ],
  TotalNotes: {
    type: Number,
    default: 0,
  },
  Assignments: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Assignment",
    },
  ],
  totalAssignments: {
    type: Number,
    default: 0,
  },
  Test: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
  },
});

const Module = mongoose.model("Module", moduleSchema);
export default Module;