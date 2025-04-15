import InstituteModel from "../models/Institute/InstitueModel.js";
import asyncHandler from "express-async-handler"; // Best practice
import generateRandomString from "../Utils/GeberateCode.js";

export const createInstitute = asyncHandler(async (req, res) => {
  const {
    InstituteName,
    Email,
    Phone,
    Address,
    City,
    State,
    Zip,
    Country,
    Website,
  } = req.body;

  console.log(`
    🏫 Institute Name: ${InstituteName}
    📧 Email: ${Email}
    📞 Phone: ${Phone}
    🏠 Address: ${Address}, ${City}, ${State}, ${Zip}, ${Country}
    🌐 Website: ${Website || "N/A"}
  `);

  // Validate required fields
  if (
    !InstituteName?.trim() ||
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

  // Check if Institute already exists by email
  const existingInstitute = await InstituteModel.findOne({
    Email: Email.toLowerCase().trim(),
  });
  if (existingInstitute) {
    res.status(400);
    throw new Error("Institute with this email already exists");
  }

  // Generate unique institute code
  const instituteCode = await generateRandomString();
  if (!instituteCode) {
    res.status(500);
    throw new Error("Failed to generate institute code");
  }

  // Create new institute
  const newInstitute = new InstituteModel({
    InstituteName: InstituteName.trim(),
    Email: Email.toLowerCase().trim(),
    Phone: Phone.trim(),
    Address: Address.trim(),
    City: City.trim(),
    State: State.trim(),
    Zip: Zip.trim(),
    Country: Country.trim(),
    Website: Website?.trim() || null,
    InstituteCode: instituteCode,
    Owner: req.user?._id,
    ProfileImage: `https://ui-avatars.com/api/?name=${encodeURIComponent(
      InstituteName
    )}&size=512&rounded=true&bold=true&format=svg&background=F3F4F6&color=4B5563`,
  });

  await newInstitute.save();

  console.log("✅ Institute Created:", newInstitute);

  res.status(201).json({
    message: "Institute created successfully 🎓",
    institute: newInstitute,
  });
});

export const getInstituteByCode = asyncHandler(async (req, res) => {
  const { code } = req.params;
  console.log(`Fetching institute with code: ${code}`);
  if (!code?.trim()) {
    res.status(400);
    throw new Error("Institute code is required");
  }

  const InstituteCode = code.trim().toUpperCase(); // sanitize input
  console.log(`Institute code: ${InstituteCode}`);
  const institute = await InstituteModel.findOne({
    InstituteCode: new RegExp(`^${InstituteCode}$`, "i"), // 👈 case-insensitive
  });

  console.log("Institute found:", institute);

  if (!institute) {
    res.status(404);
    throw new Error("Institute not found with provided code");
  }

  console.log("🎯 Institute found:", institute);

  res.status(200).json({
    message: "Institute fetched successfully ✅",
    institute,
  });
});
 

