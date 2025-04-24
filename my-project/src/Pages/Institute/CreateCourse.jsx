import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchAllTeachers } from "../../Redux/Slice/TeacherSLice";
import { addCourse } from "../../Redux/Slice/CourseSlice";

const CreateCourseForm = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const bg = isDark ? "bg-darkBg" : "bg-lightBg";
  const card = isDark ? "bg-darkCard" : "bg-lightCard";
  const text = isDark ? "text-darkText" : "text-lightText";
  const primary = isDark ? "text-darkPrimary" : "text-lightPrimary";
  const inputBg = isDark ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]";

  const dispatch = useDispatch();
  const [teachers, setteachers] = useState([]);

  const [formData, setFormData] = useState({
    CourseName: "",
    CourseCode: "",
    Description: "",
    Duration: "",
    Fees: "",
    Teacher: "",
  });

  useEffect(
    () => async () => {
      const data = await dispatch(fetchAllTeachers());
      console.log(data.payload.teachers);
      setteachers(data.payload.teachers);
    },
    [dispatch]
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const instituteId = useSelector((state) => state.Institute.data._id);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const courseData = formData;

    console.log("Course Form Submitted:", { instituteId, ...formData });
    await dispatch(addCourse({ instituteId, courseData }))
      .unwrap()
      .then((res) => {
        console.log("Course added successfully:", res);
      })
      .catch((error) => {
        console.error("Failed to add course:", error);
      });
  };

  return (
    <div className={`${bg} min-h-screen flex items-center justify-center px-4`}>
      <form
        onSubmit={handleSubmit}
        className={`${card} p-8 rounded-xl shadow-lg w-full max-w-2xl ${text} font-poppins space-y-6`}
      >
        <h2 className={`text-2xl font-bold mb-2 ${primary}`}>
          Create New Course 🎓
        </h2>
        <p className="text-sm">Fill the course details below 📋</p>

        <Input
          label="Course Name"
          name="CourseName"
          value={formData.CourseName}
          onChange={handleChange}
          inputBg={inputBg}
          text={text}
        />
        <Input
          label="Course Code"
          name="CourseCode"
          value={formData.CourseCode}
          onChange={handleChange}
          inputBg={inputBg}
          text={text}
        />
        <Input
          label="Description"
          name="Description"
          value={formData.Description}
          onChange={handleChange}
          inputBg={inputBg}
          text={text}
        />
        <Input
          label="Duration (in weeks)"
          name="Duration"
          value={formData.Duration}
          onChange={handleChange}
          inputBg={inputBg}
          text={text}
        />
        <Input
          label="Fees"
          name="Fees"
          type="number"
          value={formData.Fees}
          onChange={handleChange}
          inputBg={inputBg}
          text={text}
        />

        <div className="flex flex-col">
          <label
            htmlFor="Teacher"
            className={`mb-1 text-sm font-medium ${text}`}
          >
            Assign Teacher
          </label>
          <select
            name="Teacher"
            id="Teacher"
            value={formData.Teacher}
            onChange={handleChange}
            className={`px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary ${inputBg} ${text}`}
          >
            <option value="">Select a Teacher</option>
            {teachers?.map((teacher) => (
              <option key={teacher._id} value={teacher._id}>
                {teacher.FirstName} {teacher.LastName}
              </option>
            ))}
          </select>
        </div>

        <button
          type="submit"
          className={`w-full py-3 mt-2 rounded-md font-semibold ${
            isDark ? "bg-darkPrimary text-black" : "bg-lightPrimary text-white"
          } hover:opacity-90 transition`}
        >
          Create Course 📚
        </button>
      </form>
    </div>
  );
};

const Input = ({
  label,
  name,
  type = "text",
  value,
  onChange,
  inputBg,
  text,
}) => (
  <div className="flex flex-col">
    <label htmlFor={name} className={`mb-1 text-sm font-medium ${text}`}>
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className={`px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary ${inputBg} ${text}`}
    />
  </div>
);

export default CreateCourseForm;
