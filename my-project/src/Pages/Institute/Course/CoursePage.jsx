import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";

const CoursePage = ({ theme = "light" }) => {
  // Dummy data for course details
  const courseDetails = {
    title: "React Development Bootcamp",
    description: "A comprehensive bootcamp covering React.js from basics to advanced concepts.",
    instructor: "John Doe",
    startDate: "2025-05-01",
    duration: "6 months",
    totalModules: 10,
    price: "₹20,000",
  };

  // Dummy data for modules
  const initialModules = [
    { title: "Introduction to React", duration: "2 hours" },
    { title: "State Management with Redux", duration: "3 hours" },
    { title: "React Router for Navigation", duration: "2.5 hours" },
  ];

  const [modules, setModules] = useState(initialModules);
  const [showAddModuleForm, setShowAddModuleForm] = useState(false);
  const [newModuleTitle, setNewModuleTitle] = useState("");
  const [newModuleDuration, setNewModuleDuration] = useState("");

  // Handle adding a new module
  const handleAddModule = () => {
    if (newModuleTitle && newModuleDuration) {
      const newModule = { title: newModuleTitle, duration: newModuleDuration };
      setModules([...modules, newModule]);
      setNewModuleTitle("");
      setNewModuleDuration("");
      setShowAddModuleForm(false);
    }
  };

  // Color Scheme for Light and Dark Themes
  const isDark = theme === "dark";
  const bg = isDark ? "bg-darkBg" : "bg-lightBg";
  const card = isDark ? "bg-darkCard" : "bg-lightCard";
  const text = isDark ? "text-darkText" : "text-lightText";
  const primary = isDark ? "text-darkPrimary" : "text-lightPrimary";

  return (
    <div className={`${bg} min-h-screen p-8`}>
      {/* Course Details Section */}
      <div className={`${card} p-8 rounded-2xl shadow-xl mb-12 max-w-4xl mx-auto`}>
        <h1 className={`${primary} text-4xl font-extrabold mb-4`}>{courseDetails.title}</h1>
        <p className={`${text} text-lg mb-6`}>{courseDetails.description}</p>
        <div className="text-sm text-gray-500 space-y-2">
          <p><strong>Instructor:</strong> {courseDetails.instructor}</p>
          <p><strong>Start Date:</strong> {courseDetails.startDate}</p>
          <p><strong>Duration:</strong> {courseDetails.duration}</p>
          <p><strong>Price:</strong> {courseDetails.price}</p>
        </div>
      </div>

      {/* Modules List Section */}
      <div className={`${card} p-8 rounded-2xl shadow-xl mb-12 max-w-4xl mx-auto`}>
        <h2 className={`${primary} text-3xl font-semibold mb-6`}>Modules</h2>
        <ul className="space-y-6">
          {modules.map((module, index) => (
            <li
              key={index}
              className={`flex justify-between items-center ${isDark ? "bg-gray-700" : "bg-gray-50"} p-6 rounded-xl shadow-lg hover:${isDark ? "bg-gray-600" : "bg-gray-100"} transition duration-300`}
            >
              <div>
                <p className={`${isDark ? "text-white" : "text-gray-700"} font-semibold`}>{module.title}</p>
                <p className="text-sm text-gray-500">{module.duration}</p>
              </div>
            </li>
          ))}
        </ul>

        {/* Add Module Button */}
        <button
          onClick={() => setShowAddModuleForm(true)}
          className={`${isDark ? "bg-darkPrimary" : "bg-lightPrimary"} w-full py-3 px-6 text-white rounded-lg hover:opacity-80 transition duration-300 flex items-center justify-center`}
        >
          <FaPlus className="mr-2" /> Add Module
        </button>
      </div>

      {/* Glassmorphism Modal for Adding Module */}
      {showAddModuleForm && (
        <div
          className="fixed top-0 left-0 right-0 bottom-0 z-50 bg-black bg-opacity-50 backdrop-blur-md flex justify-center items-center"
          onClick={() => setShowAddModuleForm(false)}
        >
          <div
            className={`p-8 rounded-2xl shadow-xl max-w-xl w-full ${card} relative`}
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className={`${primary} text-3xl font-semibold mb-6`}>Add New Module</h3>
            <div className="mb-4">
              <label className="block text-sm font-medium text-gray-700">Module Title</label>
              <input
                type="text"
                value={newModuleTitle}
                onChange={(e) => setNewModuleTitle(e.target.value)}
                className={`p-4 w-full border ${isDark ? "border-gray-700" : "border-gray-300"} rounded-xl focus:outline-none focus:ring-2 focus:ring-${isDark ? "blue-500" : "blue-700"}`}
                placeholder="Enter module title"
              />
            </div>
            <div className="mb-6">
              <label className="block text-sm font-medium text-gray-700">Duration</label>
              <input
                type="text"
                value={newModuleDuration}
                onChange={(e) => setNewModuleDuration(e.target.value)}
                className={`p-4 w-full border ${isDark ? "border-gray-700" : "border-gray-300"} rounded-xl focus:outline-none focus:ring-2 focus:ring-${isDark ? "blue-500" : "blue-700"}`}
                placeholder="Enter duration (e.g., 2 hours)"
              />
            </div>
            <button
              onClick={handleAddModule}
              className={`w-full py-3 px-6 ${isDark ? "bg-darkSecondary" : "bg-lightSecondary"} text-white rounded-lg hover:opacity-80 transition duration-300`}
            >
              Add Module
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CoursePage;
