import mongoose from "mongoose";

const assignmentSchema = new mongoose.Schema({
    AssignmentName: {
        type: String,
        required: true,
    },
    AssignmentDescription: {
        type: String,
        required: true,
    },
    AssignmentFile: {
        type: String,
        required: true,
    },
    DueDate: {
        type: Date,
        required: true,
    },
    ModuleId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Module",
        required: true,
    },
    CourseId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Course",
        required: true,
    },
})

const Assignment = mongoose.model("Assignment", assignmentSchema);
export default Assignment;