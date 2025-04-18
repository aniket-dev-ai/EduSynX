import React from "react";

const CreateCourseForm = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const bg = isDark ? "bg-darkBg" : "bg-lightBg";
  const card = isDark ? "bg-darkCard" : "bg-lightCard";
  const text = isDark ? "text-darkText" : "text-lightText";
  const primary = isDark ? "text-darkPrimary" : "text-lightPrimary";
  const inputBg = isDark ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]";

  return (
    <div className={`${bg} min-h-screen flex items-center justify-center px-4`}>
      <form
        className={`${card} p-8 rounded-xl shadow-lg w-full max-w-2xl ${text} font-poppins space-y-6`}
      >
        <h2 className={`text-2xl font-bold mb-2 ${primary}`}>Create New Course 🎓</h2>
        <p className="text-sm">Fill the course details below 📋</p>

        <Input label="Course Name" name="CourseName" inputBg={inputBg} text={text} />
        <Input label="Course Code" name="CourseCode" inputBg={inputBg} text={text} />
        <Input label="Description" name="Description" inputBg={inputBg} text={text} />
        <Input label="Duration (in weeks)" name="Duration" inputBg={inputBg} text={text} />
        <Input label="Fees" name="Fees" type="number" inputBg={inputBg} text={text} />

        <div className="flex flex-col">
          <label htmlFor="Teacher" className={`mb-1 text-sm font-medium ${text}`}>
            Assign Teacher
          </label>
          <select
            name="Teacher"
            id="Teacher"
            className={`px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary ${inputBg} ${text}`}
          >
            <option value="" disabled>Select a Teacher</option>
            <option value="teacher1">Teacher 1</option>
            <option value="teacher2">Teacher 2</option>
            <option value="teacher3">Teacher 3</option>
            {/* You can dynamically generate teacher options from backend data */}
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

const Input = ({ label, name, type = "text", inputBg, text }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className={`mb-1 text-sm font-medium ${text}`}>
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={label}
      className={`px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary ${inputBg} ${text}`}
    />
  </div>
);

export default CreateCourseForm;
