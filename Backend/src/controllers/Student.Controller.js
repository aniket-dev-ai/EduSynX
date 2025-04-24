import UserModel from "../models/UserModel.js";
import Institute from "../models/Institute/InstitueModel.js";
import Course from "../models/Institute/CourseModel.js";

export const LinkWithInstitute = async (req, res) => {
  const { InstituteId } = req.params;
  const { UserId } = req.body;

  console.log(`Linking user with Institute: ${InstituteId} 
    and User: ${UserId}`);

  if (!InstituteId || !UserId) {
    return res
      .status(400)
      .json({ message: "Institute ID and User ID are required" });
  }

  try {
    const user = await UserModel.findById(UserId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const institute = await Institute.findById(InstituteId);
    if (!institute) {
      return res.status(404).json({ message: "Institute not found" });
    }

    await institute.updateOne({
      $addToSet: { Students: UserId },
      $inc: { TotalStudents: 1 },
    });

    return res.status(200).json({
      message: "User linked with institute successfully",
      institute: {
        id: institute._id,
        name: institute.InstituteName,
        email: institute.Email,
        totalStudents: institute.TotalStudents,
        Students: institute.Students,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};

export const buyCourse = async (req, res) => {
  const { CourseId } = req.params;
  const { UserId } = req.body;

  console.log(`User ${UserId} is buying course ${CourseId}`);

  if (!CourseId || !UserId) {
    return res
      .status(400)
      .json({ message: "Course ID and User ID are required" });
  }

  try {
    const user = await UserModel.findById(UserId);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Assuming you have a Course model to find the course
    const course = await Course.findById(CourseId);
    if (!course) {
      return res.status(404).json({ message: "Course not found" });
    }

    // Add the course to the user's purchased courses
    user.Course.push(CourseId);
    await user.save();

    await Course.findByIdAndUpdate(
      CourseId,
      {
        $addToSet: { Students: UserId },
        $inc: { TotalStudents: 1 },
      },
      { new: true }
    );

    return res.status(200).json({
      message: "Course purchased successfully",
      user: {
        id: user._id,
        name: `${user.FirstName} ${user.LastName}`,
        email: user.Email,
        purchasedCourses: user.PurchasedCourses,
      },
      course: {
        id: course._id,
        name: course.CourseName,
        totalStudents: course.TotalStudents,
      },
    });
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
};
