import VideosModel from "../models/Institute/VideosModel.js";
import Module from "../models/Institute/ModuleModel.js";
import asyncHandler from "express-async-handler";

export const createVideo = asyncHandler(async (req, res) => {
  const { VideoName, VideoUrl, Thumbnail, Description } = req.body;
  const { ModuleId } = req.params;

  // 💥 Validations
  if (!VideoName?.trim()) {
    res.status(400);
    throw new Error("Video name is required");
  }
  if (!VideoUrl?.trim()) {
    res.status(400);
    throw new Error("Video URL is required");
  }
  if (!ModuleId?.trim()) {
    res.status(400);
    throw new Error("Module ID is required");
  }

  // 🔍 Check module existence
  const module = await Module.findById(ModuleId);
  if (!module) {
    res.status(404);
    throw new Error("Module not found");
  }

  // 🧠 Prevent duplicate video name in same module
  const existingVideo = await VideosModel.findOne({ VideoName, ModuleId });
  if (existingVideo) {
    res.status(400);
    throw new Error("Video with this name already exists in this module");
  }

  // 🎬 Create new video
  const newVideo = new VideosModel({
    VideoName: VideoName.trim(),
    VideoUrl: VideoUrl.trim(),
    ModuleId,
    Duration: 0,
    Thumbnail: Thumbnail || "https://example.com/default-thumbnail.jpg",
    Description: Description?.trim() || "No description provided",
  });

  await newVideo.save();

  console.log(`Video created: ${newVideo}`);
  // 🔗 Update module: push video + increment count
  await Module.findByIdAndUpdate(
    ModuleId,
    {
      $push: { Video: newVideo._id },
      $inc: { TotalVideos: 1 },
    },
    { new: true }
  );

  // 🎉 Response
  res.status(201).json({
    success: true,
    message: "Video created successfully",
    Video: newVideo,
  });
});
