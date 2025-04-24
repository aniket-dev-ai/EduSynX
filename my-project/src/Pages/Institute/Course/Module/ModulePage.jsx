import React, { useState } from "react";
import {
  FaVideo,
  FaBook,
  FaClipboardList,
  FaClipboard,
  FaPlus,
} from "react-icons/fa";

const ModulePage = ({ theme = "light" }) => {
  // Dummy data for module details
  const moduleDetails = {
    ModuleName: "React State Management",
    TotalVideos: 5,
    TotalNotes: 3,
    totalAssignments: 2,
    Test: "React Quiz",
    CourseId: "React Development Bootcamp",
  };

  // Dummy data for videos, notes, and assignments
  const videos = [
    { title: "Introduction to State", duration: "5 minutes" },
    { title: "State Management in React", duration: "10 minutes" },
    { title: "Redux Basics", duration: "15 minutes" },
  ];

  const notes = [
    { title: "State in React", content: "State management in React..." },
    { title: "Redux Overview", content: "Redux is a state management..." },
  ];

  const assignments = [
    {
      title: "Assignment 1: Build a Counter App",
      description: "Create a simple counter app using React state",
    },
    {
      title: "Assignment 2: Manage State with Redux",
      description: "Use Redux to manage state in a React app",
    },
  ];

  const [activeTab, setActiveTab] = useState("videos");
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Color Scheme for Light and Dark Themes
  const isDark = theme === "dark";
  const bg = isDark ? "bg-darkBg" : "bg-lightBg";
  const card = isDark ? "bg-darkCard" : "bg-lightCard";
  const text = isDark ? "text-darkText" : "text-lightText";
  const primary = isDark ? "text-darkPrimary" : "text-lightPrimary";

  // Handle Button Clicks
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className={`${bg} min-h-screen p-8`}>
      {/* Module Details Section */}
      <div
        className={`${card} p-8 rounded-2xl shadow-xl mb-12 max-w-4xl mx-auto`}
      >
        <div className="flex justify-between items-center mb-6">
          <h1 className={`${primary} text-4xl font-extrabold`}>
            {moduleDetails.ModuleName}
          </h1>
        </div>
        <div className="text-sm text-gray-500 space-y-2">
          <p>
            <strong>Course:</strong> {moduleDetails.CourseId}
          </p>
          <p>
            <strong>Total Videos:</strong> {moduleDetails.TotalVideos}
          </p>
          <p>
            <strong>Total Notes:</strong> {moduleDetails.TotalNotes}
          </p>
          <p>
            <strong>Total Assignments:</strong> {moduleDetails.totalAssignments}
          </p>
          <p>
            <strong>Test:</strong> {moduleDetails.Test}
          </p>
        </div>
      </div>

      {/* Section Buttons */}
      <div className="flex space-x-6 mb-8">
        <button
          onClick={() => handleTabClick("videos")}
          className={`${primary} py-3 px-6 rounded-lg bg-blue-600 hover:opacity-80 transition duration-300 flex items-center`}
        >
          <FaVideo className="mr-2" /> Videos
        </button>
        <button
          onClick={() => handleTabClick("notes")}
          className={`${primary} py-3 px-6 rounded-lg bg-green-600 hover:opacity-80 transition duration-300 flex items-center`}
        >
          <FaBook className="mr-2" /> Notes
        </button>
        <button
          onClick={() => handleTabClick("assignments")}
          className={`${primary} py-3 px-6 rounded-lg bg-purple-600 hover:opacity-80 transition duration-300 flex items-center`}
        >
          <FaClipboardList className="mr-2" /> Assignments
        </button>
        <button
          onClick={() => handleTabClick("test")}
          className={`${primary} py-3 px-6 rounded-lg bg-orange-600 hover:opacity-80 transition duration-300 flex items-center`}
        >
          <FaClipboard className="mr-2" /> Test
        </button>
      </div>

      {/* Active Tab Content */}
      {activeTab === "videos" && (
        <div className={`${card} p-8 rounded-2xl shadow-xl`}>
          <h2 className={`${primary} text-3xl font-semibold mb-6`}>Videos</h2>
          <ul className="space-y-4">
            {videos.map((video, index) => (
              <li
                key={index}
                className={`${
                  isDark ? "bg-gray-700" : "bg-gray-50"
                } p-6 rounded-xl shadow-lg`}
              >
                <p
                  className={`${
                    isDark ? "text-white" : "text-gray-700"
                  } font-semibold`}
                >
                  {video.title}
                </p>
                <p className="text-sm text-gray-500">{video.duration}</p>
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600">
            <FaPlus className="mr-2" /> Add Video
          </button>
        </div>
      )}

      {activeTab === "notes" && (
        <div className={`${card} p-8 rounded-2xl shadow-xl`}>
          <h2 className={`${primary} text-3xl font-semibold mb-6`}>Notes</h2>
          <ul className="space-y-4">
            {notes.map((note, index) => (
              <li
                key={index}
                className={`${
                  isDark ? "bg-gray-700" : "bg-gray-50"
                } p-6 rounded-xl shadow-lg`}
              >
                <p
                  className={`${
                    isDark ? "text-white" : "text-gray-700"
                  } font-semibold`}
                >
                  {note.title}
                </p>
                <p className="text-sm text-gray-500">{note.content}</p>
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600">
            <FaPlus className="mr-2" /> Add Note
          </button>
        </div>
      )}

      {activeTab === "assignments" && (
        <div className={`${card} p-8 rounded-2xl shadow-xl`}>
          <h2 className={`${primary} text-3xl font-semibold mb-6`}>
            Assignments
          </h2>
          <ul className="space-y-4">
            {assignments.map((assignment, index) => (
              <li
                key={index}
                className={`${
                  isDark ? "bg-gray-700" : "bg-gray-50"
                } p-6 rounded-xl shadow-lg`}
              >
                <p
                  className={`${
                    isDark ? "text-white" : "text-gray-700"
                  } font-semibold`}
                >
                  {assignment.title}
                </p>
                <p className="text-sm text-gray-500">
                  {assignment.description}
                </p>
              </li>
            ))}
          </ul>
          <button className="mt-6 bg-purple-500 text-white py-2 px-4 rounded-md hover:bg-purple-600">
            <FaPlus className="mr-2" /> Add Assignment
          </button>
        </div>
      )}

      {activeTab === "test" && (
        <div className={`${card} p-8 rounded-2xl shadow-xl`}>
          <h2 className={`${primary} text-3xl font-semibold mb-6`}>Test</h2>
          <p className="text-lg text-gray-500">Test: {moduleDetails.Test}</p>
          <button className="mt-6 bg-orange-500 text-white py-2 px-4 rounded-md hover:bg-orange-600">
            <FaPlus className="mr-2" /> Add Test
          </button>
        </div>
      )}
    </div>
  );
};

export default ModulePage;
