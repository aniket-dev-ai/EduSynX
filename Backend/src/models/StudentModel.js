import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
  User: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  Institute: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Institute",
  },
  Course: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  EnrolledAt: {
    type: Date,
    default: Date.now,
  },
});

const Student = mongoose.model("Student", studentSchema);
export default Student;
