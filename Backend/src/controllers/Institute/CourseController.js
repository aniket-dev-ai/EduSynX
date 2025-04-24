import Course from "../../models/Institute/CourseModel.js";
import Institute from "../../models/Institute/InstitueModel.js";
import asyncHandler from "express-async-handler";

// 🎓 Create a New Course
export const createCourse = asyncHandler(async (req, res) => {
  console.log("Creating a new course...");
  console.log("Request Body:", req.body);
  console.log("Request Params:", req.params);
  const { CourseName, CourseCode, Description, Duration, Fees, Teacher } =
    req.body;

  console.log(`
    📚 Course Name: ${CourseName}
    📜 Course Code: ${CourseCode}
    📖 Description: ${Description}
    ⏳ Duration: ${Duration}
    💰 Fees: ${Fees}
    👨‍🏫 Teacher: ${Teacher}`);
  if (
    !CourseName?.trim() ||
    !CourseCode?.trim() ||
    !Description?.trim() ||
    !Duration?.trim() ||
    !Fees ||
    !Teacher
  ) {
    res.status(400);
    throw new Error("All fields are required");
  }

  // 📌 Get Institute ID
  const { InstituteId } = req.params;
  console.log(`Institute ID: ${InstituteId}`);
  if (!InstituteId?.trim()) {
    res.status(400);
    throw new Error("Institute ID is required");
  }

  // 🔍 Check if Institute Exists
  const instituteExists = await Institute.findById(InstituteId);
  console.log(`Institute Exists: ${instituteExists}`);
  if (!instituteExists) {
    res.status(404);
    throw new Error("Institute not found");
  }

  // 🔍 Check Duplicate Course Code
  const courseExists = await Course.findOne({ CourseCode });
  if (courseExists) {
    res.status(400);
    throw new Error("Course with this code already exists");
  }

  // 🧠 Create Course
  const course = await Course.create({
    CourseName: CourseName.trim(),
    CourseCode: CourseCode.trim(),
    Description: Description.trim(),
    Duration: Duration.trim(),
    Fees,
    Teacher,
    InstituteId: instituteExists._id,
  });

  console.log(`Course Created: ${course}`);

  if (!course) {
    res.status(500);
    throw new Error("Failed to create course");
  }

  // 📈 Update Institute
  await Institute.findByIdAndUpdate(
    InstituteId,
    {
      $push: { Cousres: course._id },
      $inc: { TotalCourses: 1 },
    },
    { new: true }
  );

  // 🥳 Respond
  res.status(201).json({
    success: true,
    message: "Course created successfully",
    course,
  });
});

export const getAllCourses = asyncHandler(async (req, res) => {
  const { InstituteId } = req.params;
  console.log(`Fetching all courses for Institute ID: ${InstituteId}`);
  if (!InstituteId?.trim()) {
    res.status(400);
    throw new Error("Institute ID is required");
  }

  // 🔍 Check if Institute Exists
  const instituteExists = await Institute.findById(InstituteId);
  console.log(`Institute Exists: ${instituteExists}`);
  if (!instituteExists) {
    res.status(404);
    throw new Error("Institute not found");
  }

  // 📚 Fetch Courses
  const courses = await Course.find({ InstituteId })
    .populate("Teacher", "FirstName LastName Email")
    .populate(
      "InstituteId",
      "InstituteName Email Phone Address City State Zip Country Website ProfileImage"
    );

  // 🥳 Respond
  res.status(200).json({
    success: true,
    message: "Courses fetched successfully",
    courses,
  });
});
