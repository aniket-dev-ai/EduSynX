import mongoose from "mongoose";

const courseSchema = new mongoose.Schema(
  {
    CourseName: {
      type: String,
      required: true,
    },
    CourseCode: {
      type: String,
      required: true,
      unique: true,
    },
    Description: {
      type: String,
      required: true,
    },
    Duration: {
      type: String,
      required: true,
    },
    Fees: {
      type: Number,
      required: true,
    },
    InstituteId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Institute",
      required: true,
    },
    Teacher: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
      required: true,
    },
    Students: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
      },
    ],
    TotalStudents: {
      type: Number,
      default: 0,
    },
    Exams: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam",
      },
    ],
    TotalExams: {
      type: Number,
      default: 0,
    },
    Module: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module",
      },
    ],
  },
  { timestamps: true }
);

const Course = mongoose.model("Course", courseSchema);
export default Course;
