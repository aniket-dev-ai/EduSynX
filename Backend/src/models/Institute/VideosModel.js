import mongoose from "mongoose";

const videoSchema = new mongoose.Schema(
  {
    VideoName: {
      type: String,
      required: true,
    },
    VideoUrl: {
      type: String,
      required: true,
    },
    Duration: {
      type: String,
      required: true,
    },
    ModuleId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Module",
      required: true,
    }, 
    Thumbnail: {
      type: String,
      
    },
    Description: {
      type: String,
      
    },
  },
  { timestamps: true }
);

export default mongoose.model("Video", videoSchema);