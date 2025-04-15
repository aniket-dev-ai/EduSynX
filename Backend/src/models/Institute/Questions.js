import mongoose from "mongoose";

const questionSchema = new mongoose.Schema({
  Question: {
    type: String,
    required: true,
  },
  OptionA: {
    type: String,
    required: true,
  },
  OptionB: {
    type: String,
    required: true,
  },
  OptionC: {
    type: String,
    required: true,
  },
  OptionD: {
    type: String,
    required: true,
  },
  Answer: {
    type: String,
    required: true,
  },
  Marks: {
    type: Number,
    required: true,
  },
  TestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Test",
    required: true,
  },
});

const Question = mongoose.model("Question", questionSchema);
export default Question;
