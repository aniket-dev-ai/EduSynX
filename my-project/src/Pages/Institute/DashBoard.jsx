import React, { useState } from "react";
import { FaUsers, FaBook, FaChalkboardTeacher, FaMoneyBillWave, FaTachometerAlt, FaBars } from "react-icons/fa";
import CreateTeacherForm from "./CreateTeacher";
import CreateCourseForm from "./CreateCourse";

const Dashboard = ({ theme = "light" }) => {
  const [activeTab, setActiveTab] = useState("teachers");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isDark = theme === "dark";

  const bg = isDark ? "bg-darkBg" : "bg-lightBg";
  const card = isDark ? "bg-darkCard" : "bg-lightCard";
  const text = isDark ? "text-darkText" : "text-lightText";
  const primary = isDark ? "text-darkPrimary" : "text-lightPrimary";
  const inputBg = isDark ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]";

  const totalTeachers = 12;
  const totalStudents = 120;
  const totalParents = 80;
  const totalCourses = 5;
  const totalIncome = 120000; // Just a dummy calculation (can use real data)

  // Dummy data display for teachers
  const AllTeachers = () => {
    const teachers = [
      { name: "Teacher 1", email: "teacher1@edu.com" },
      { name: "Teacher 2", email: "teacher2@edu.com" },
      { name: "Teacher 3", email: "teacher3@edu.com" },
    ];

    return (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4">All Teachers</h3>
        <ul className="space-y-2">
          {teachers.map((teacher, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
              <p className="text-lg font-semibold">{teacher.name}</p>
              <p className="text-sm text-gray-500">{teacher.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Dummy data display for students
  const AllStudents = () => {
    const students = [
      { name: "Student 1", email: "student1@edu.com" },
      { name: "Student 2", email: "student2@edu.com" },
      { name: "Student 3", email: "student3@edu.com" },
    ];

    return (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4">All Students</h3>
        <ul className="space-y-2">
          {students.map((student, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
              <p className="text-lg font-semibold">{student.name}</p>
              <p className="text-sm text-gray-500">{student.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Dummy data display for parents
  const AllParents = () => {
    const parents = [
      { name: "Parent 1", email: "parent1@edu.com" },
      { name: "Parent 2", email: "parent2@edu.com" },
      { name: "Parent 3", email: "parent3@edu.com" },
    ];

    return (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4">All Parents</h3>
        <ul className="space-y-2">
          {parents.map((parent, index) => (
            <li key={index} className="bg-gray-100 p-4 rounded-lg shadow-md hover:bg-gray-200 transition duration-300">
              <p className="text-lg font-semibold">{parent.name}</p>
              <p className="text-sm text-gray-500">{parent.email}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  };

  // Dummy total income & course stats
  const TotalIncomeCourses = ({ totalCourses, totalIncome }) => {
    return (
      <div className="space-y-4">
        <h3 className="text-xl font-bold mb-4">Total Stats</h3>
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200 space-y-4">
          <p className="text-lg font-semibold">Total Courses: {totalCourses}</p>
          <p className="text-lg font-semibold">Total Income: ₹{totalIncome}</p>
        </div>
      </div>
    );
  };

  return (
    <div className={`${bg} min-h-screen flex`}>
      {/* Sidebar */}
      <div className={`w-1/4 p-6 bg-gray-800 text-white ${sidebarOpen ? "block" : "hidden"} md:block`}>
        <h2 className="text-3xl font-bold text-center mb-6">Institute Dashboard</h2>
        <nav className="space-y-4">
          <button
            className={`w-full text-left py-3 px-4 rounded-md hover:bg-gray-700 ${activeTab === "teachers" && "bg-gray-700"}`}
            onClick={() => setActiveTab("teachers")}
          >
            <FaChalkboardTeacher className="inline mr-2" /> Add Teacher
          </button>
          <button
            className={`w-full text-left py-3 px-4 rounded-md hover:bg-gray-700 ${activeTab === "courses" && "bg-gray-700"}`}
            onClick={() => setActiveTab("courses")}
          >
            <FaBook className="inline mr-2" /> Create Course
          </button>
          <button
            className={`w-full text-left py-3 px-4 rounded-md hover:bg-gray-700 ${activeTab === "allTeachers" && "bg-gray-700"}`}
            onClick={() => setActiveTab("allTeachers")}
          >
            <FaChalkboardTeacher className="inline mr-2" /> Show All Teachers
          </button>
          <button
            className={`w-full text-left py-3 px-4 rounded-md hover:bg-gray-700 ${activeTab === "students" && "bg-gray-700"}`}
            onClick={() => setActiveTab("students")}
          >
            <FaUsers className="inline mr-2" /> Show All Students
          </button>
          <button
            className={`w-full text-left py-3 px-4 rounded-md hover:bg-gray-700 ${activeTab === "parents" && "bg-gray-700"}`}
            onClick={() => setActiveTab("parents")}
          >
            <FaUsers className="inline mr-2" /> Show All Parents
          </button>
          <button
            className={`w-full text-left py-3 px-4 rounded-md hover:bg-gray-700 ${activeTab === "total" && "bg-gray-700"}`}
            onClick={() => setActiveTab("total")}
          >
            <FaMoneyBillWave className="inline mr-2" /> Total Income & Courses
          </button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <button
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="md:hidden text-white p-3 absolute top-6 left-6 z-50 bg-gray-800 rounded-full"
        >
          <FaBars />
        </button>

        {activeTab === "teachers" && <CreateTeacherForm theme={theme} />}
        {activeTab === "courses" && <CreateCourseForm theme={theme} />}
        {activeTab === "allTeachers" && <AllTeachers />}
        {activeTab === "students" && <AllStudents />}
        {activeTab === "parents" && <AllParents />}
        {activeTab === "total" && <TotalIncomeCourses totalCourses={totalCourses} totalIncome={totalIncome} />}
      </div>
    </div>
  );
};

export default Dashboard;
