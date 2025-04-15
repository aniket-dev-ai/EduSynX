import mongoose from "mongoose";

const testSchema = new mongoose.Schema({
    TestName: {
        type: String,
        required: true,
    },
    TestDescription: {
        type: String,
        required: true,
    },
    Questions:[
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Question",
            required: true,
        }
    ],
    Duration: {
        type: String,
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

const Test = mongoose.model("Test", testSchema);
export default Test;