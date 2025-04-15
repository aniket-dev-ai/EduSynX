import mongoose from "mongoose";

const notesSchema = new mongoose.Schema({
    NotesName: {
        type: String,
        required: true,
    },
    NotesUrl: {
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

const Notes = mongoose.model("Notes", notesSchema);
export default Notes;