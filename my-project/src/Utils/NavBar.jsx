import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../Redux/Slice/ThemeSlice";
import ThemeChanger from "./ThemeChanger";

const Navbar = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  // State for managing mobile menu
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Toggle theme
  const changeTheme = () => {
    dispatch(setTheme());
  };

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 ${
        theme === "dark"
          ? "bg-darkBg text-darkText"
          : "bg-lightBg text-lightText"
      }`}
    >
      <div className="max-w-7xl mx-auto p-4 flex items-center justify-between">
        {/* Logo Section */}
        <div className="text-xl font-bold">EduSynX</div>

        {/* Desktop Navbar */}
        <div className="hidden md:flex space-x-8">
          <a href="#dashboard" className="hover:text-primary">
            Dashboard
          </a>
          <a href="#courses" className="hover:text-primary">
            Courses
          </a>
          <a href="#auth" className="hover:text-primary">
            Auth
          </a>
          <a href="#attendance" className="hover:text-primary">
            Attendance
          </a>
          <a href="#assignments" className="hover:text-primary">
            Assignments
          </a>
          <a href="#homework" className="hover:text-primary">
            Homework
          </a>

          {/* Theme Toggle Button */}
          <button 
            className={`px-4 py-2 rounded-lg ${
              theme === "dark" ? "bg-darkSecondary" : "bg-lightPrimary"
            } hover:bg-opacity-80`}
          >
            <ThemeChanger />
          </button>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={toggleMobileMenu} className="text-2xl">
            ☰
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-darkBg text-darkText absolute top-16 left-0 w-full p-4 space-y-4">
          <a href="#dashboard" className="block hover:text-primary">
            Dashboard
          </a>
          <a href="#courses" className="block hover:text-primary">
            Courses
          </a>
          <a href="#auth" className="block hover:text-primary">
            Auth
          </a>
          <a href="#attendance" className="block hover:text-primary">
            Attendance
          </a>
          <a href="#assignments" className="block hover:text-primary">
            Assignments
          </a>
          <a href="#homework" className="block hover:text-primary">
            Homework
          </a>

          {/* Theme Toggle Button for Mobile */}
          <button
            
            className={`w-full py-2 mt-4 rounded-lg ${
              theme === "dark" ? "bg-darkSecondary" : "bg-lightPrimary"
            } hover:bg-opacity-80`}
          >
            <ThemeChanger />
          </button>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
