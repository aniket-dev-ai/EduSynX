import mongoose from "mongoose";

import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();

const userSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
    },
    LastName: {
      type: String,
      required: true,
    },
    Email: {
      type: String,
      required: true,
      unique: true,
    },
    Password: {
      type: String,
      required: true,
    },
    Phone: {
      type: String,
      required: true,
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
    Role: {
      type: String,
      enum: ["Admin", "Student", "Parents", "Teacher"],
      default: "user",
    },
    ProfileImage: {
      type: String,
    },
    KYCVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

userSchema.statics.generatePasswordHash = async function (password) {
  try {
    const salt = await bcrypt.genSalt(10);
    return await bcrypt.hash(password, salt);
  } catch (error) {
    console.log("Error generating password hash:", error);
  }
};

userSchema.statics.comparePassword = async function (password, hash) {
  try {
    return await bcrypt.compare(password, hash);
  } catch (error) {
    console.log("Error comparing password:", error);
  }
};

userSchema.statics.generateAuthToken = function (user) {
  try {
    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1d",
    });
    return token;
  } catch (error) {
    console.log("Error generating auth token:", error);
  }
}

userSchema.statics.verifyAuthToken = function (token) {
  try {
    return jwt.verify(token, process.env.JWT_SECRET);
  } catch (error) {
    console.log("Error verifying auth token:", error);
  }
};

export default mongoose.model("User", userSchema);