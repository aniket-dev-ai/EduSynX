import TeacherModel from "../../models/Institute/TeacherModel.js";
import Institute from "../../models/Institute/InstitueModel.js";
import asyncHandler from "express-async-handler";

export const createTeacher = asyncHandler(async (req, res) => {
  const {
    FirstName,
    LastName,
    Email,
    Phone,
    Address,
    City,
    State,
    Zip,
    Country,
    InstituteId,
  } = req.body;

  console.log(`Missing required fields:
    FirstName: ${FirstName}
    LastName: ${LastName}
    Email: ${Email}
    Phone: ${Phone}
    Address: ${Address}
    City: ${City}
    State: ${State}
    Zip: ${Zip}
    Country: ${Country}
    InstituteId: ${InstituteId}`);
  // 🛡️ Validate required fields
  if (
    !FirstName?.trim() ||
    !LastName?.trim() ||
    !Email?.trim() ||
    !Phone?.trim() ||
    !Address?.trim() ||
    !City?.trim() ||
    !State?.trim() ||
    !Zip?.trim() ||
    !Country?.trim()
  ) {
    res.status(400);
    throw new Error("All required fields must be provided");
  }

  // 🔍 Check if teacher with same email already exists
  const existingTeacher = await TeacherModel.findOne({
    Email: Email.toLowerCase().trim(),
  });
  if (existingTeacher) {
    res.status(400);
    throw new Error("Teacher with this email already exists");
  }

  // 🏫 Validate Institute
  const institute = await Institute.findById(InstituteId);
  if (!institute) {
    res.status(404);
    throw new Error("Institute not found");
  }

  // 🎨 Generate Profile Avatar
  const ProfileImage = `https://ui-avatars.com/api/?name=${encodeURIComponent(
    `${FirstName} ${LastName}`
  )}&size=512&rounded=true&bold=true&format=svg&background=F3F4F6&color=4B5563`;

  // ✅ Create and Save Teacher
  const newTeacher = new TeacherModel({
    FirstName: FirstName.trim(),
    LastName: LastName.trim(),
    Email: Email.toLowerCase().trim(),
    Phone: Phone.trim(),
    Address: Address.trim(),
    City: City.trim(),
    State: State.trim(),
    Zip: Zip.trim(),
    Country: Country.trim(),
    ProfileImage,
    Institute: institute._id,
  });

  const savedTeacher = await newTeacher.save();

  // 🔗 Push teacher into Institute's list (if needed)
  await Institute.findByIdAndUpdate(
    institute._id,
    { $push: { Teachers: savedTeacher._id }, $inc: { TotalTeachers: 1 } },
    {
      new: true,
      runValidators: true,
    }
  );

  // 🎉 Send Response
  res.status(201).json({
    success: true,
    message: "Teacher created successfully",
    teacher: savedTeacher,
  });
});

export const getAllTeachers = asyncHandler(async (req, res) => {
  const teachers = await TeacherModel.find({}).populate(
    "Institute",
    "InstituteName"
  );
  res.status(200).json({
    success: true,
    message: "Teachers fetched successfully",
    teachers,
  });
});
