import mongoose from "mongoose";
 

const instituteSchema = new mongoose.Schema({
  InstituteName: {
    type: String,
    required: true,
  },
  Owner:{
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  InstituteCode: {
    type: String,
    required: true,
    unique: true,
  },
  BannerImage:{
    type: String,
  },
  Address: {
    type: String,
    required: true,
  },
  City: {
    type: String,
    required: true,
  },
  State: {
    type: String,
    required: true,
  },
  Zip: {
    type: String,
    required: true,
  },
  Country: {
    type: String,
    required: true,
  },
  Phone: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Website: {
    type: String,
  },
  ProfileImage: {
    type: String,
  },
  KYCVerified: {
    type: Boolean,
    default: false,
  },
  CreatedAt: {
    type: Date,
    default: Date.now,
  },
  UpdatedAt: {
    type: Date,
    default: Date.now,
  },
  IsDeleted: {
    type: Boolean,
    default: false,
  },
  DeletedAt: {
    type: Date,
  },
  Cousres: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Course",
    },
  ],
  TotalCourses: {
    type: Number,
    default: 0,
  },
  Students: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
    },
  ],
  TotalStudents: {
    type: Number,
    default: 0,
  },
  Teachers: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Teacher",
    },
  ],
  TotalTeachers: {
    type: Number,
    default: 0,
  },
  Parents: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Parents",
    },
  ],
  TotalParents: {
    type: Number,
    default: 0,
  },
    
  
});

const Institute = mongoose.model("Institute", instituteSchema);
export default Institute;
