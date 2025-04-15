import userSchema from "../models/UserModel.js";
  
export const createUser = async (req, res) => {
  try {
    const {
      FirstName,
      LastName,
      Email,
      Password,
      Phone,
      Address,
      City,
      State,
      Zip,
      Country,
      Role,
    } = req.body;

    // ✅ Field validation
    if (
      !FirstName ||
      !LastName ||
      !Email ||
      !Password ||
      !Phone ||
      !Address ||
      !City ||
      !State ||
      !Zip ||
      !Country ||
      !Role
    ) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // ✅ Check if user already exists
    const existingUser = await userSchema.findOne({ Email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }
 
    const hashedPassword = await userSchema.generatePasswordHash(Password);
    if (!hashedPassword) {
      return res.status(500).json({ message: "Error hashing password" });
    }

    // ✅ Generate profile image using initials
    const profileImageUrl = `https://ui-avatars.com/api/?name=${encodeURIComponent(
      FirstName + " " + LastName
    )}&size=512&rounded=true&bold=true&format=svg&background=F3F4F6&color=4B5563`;

    // ✅ Create user
    const newUser = new userSchema({
      FirstName,
      LastName,
      Email,
      Password: hashedPassword,
      Phone,
      Address,
      City,
      State,
      Zip,
      Country,
      Role,
      ProfileImage: profileImageUrl,
    });

    // ✅ Save user to DB
    await newUser.save();

    res.status(201).json({
      message: "User created successfully",
      user: {
        id: newUser._id,
        name: `${newUser.FirstName} ${newUser.LastName}`,
        email: newUser.Email,
        role: newUser.Role,
        profileImage: newUser.ProfileImage,
      },
    });
  } catch (error) {
    console.error("🔥 Error creating user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};


export const LoginUser = async (req, res) => {
  try {
    const { Email, Password } = req.body;
    console.log(`${Email} ${Password}`);
    if (!Email || !Password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const existingUser = await userSchema.findOne({ Email });
    if (!existingUser) {
      return res.status(400).json({ message: "User does not exist" });
    }
    const isPasswordValid = await userSchema.comparePassword(
      Password,
      existingUser.Password
    );
    if (!isPasswordValid) {
      return res.status(400).json({ message: "Invalid credentials" });
    }
    const token = existingUser.generateAuthToken();
    console.log(`Token: ${token}`);
    if (!token) {
      return res.status(500).json({ message: "Error generating token" });
    }
    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
    });
    res.status(200).json({
      message: "Login successful",
      user: existingUser,
      token: token,
    });
  } catch (error) {
    console.error("Error logging in user:", error);
    res.status(500).json({ message: "Internal Server Error" });
  }
};

