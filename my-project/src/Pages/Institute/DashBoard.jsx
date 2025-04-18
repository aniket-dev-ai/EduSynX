import React, { useEffect, useState } from "react";
import {
  FaUsers,
  FaBook,
  FaChalkboardTeacher,
  FaMoneyBillWave,
  FaBars,
  FaTachometerAlt,
} from "react-icons/fa";
import CreateTeacherForm from "./CreateTeacher";
import CreateCourseForm from "./CreateCourse";
import { useDispatch } from "react-redux";
import { FetchInstitute } from "../../Redux/Slice/InstituteSlice";

const Dashboard = ({ theme = "light" }) => {
  const [activeTab, setActiveTab] = useState("teachers");
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const isDark = theme === "dark";
  const bg = isDark ? "bg-darkBg" : "bg-lightBg";
  const text = isDark ? "text-darkText" : "text-lightText";
  const primary = isDark ? "text-darkPrimary" : "text-lightPrimary";

  const dispatch = useDispatch();
  const [instituteData, setInstituteData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetching institute data inside useEffect
  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await dispatch(FetchInstitute());
        console.log(data.payload); //frontend me show ho rha hai
        if (data) {
          setInstituteData(data.payload); 
        } else {
          setError("Institute data not found");
        }
      } catch (err) {
        console.error("Failed to fetch institute data:", err);
        setError("Failed to fetch data.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  const Summary = () => {
    // Conditional rendering based on loading or error state
    if (loading) return <p className={`${text}`}>Loading... ⏳</p>;
    if (error) return <p className={`${text}`}>Error: {error} 😢</p>;

    return (
      <div
        className={`p-6 rounded-xl shadow-lg ${
          isDark ? "bg-darkCard" : "bg-white"
        } ${text} space-y-4`}
      >
        <h2 className={`text-2xl font-bold mb-2 ${primary}`}>
          🏫 Institute Info
        </h2>
        {instituteData ? (
          <>
            <img
              src={instituteData.ProfileImage}
              alt="Institute Logo"
              className="w-24 h-24 rounded-full"
            />
            <p>
              <strong>Name:</strong> {instituteData.InstituteName}
            </p>
            <p>
              <strong>Email:</strong> {instituteData.Email}
            </p>
            <p>
              <strong>Phone:</strong> {instituteData.Phone}
            </p>
            <p>
              <strong>Address:</strong> {instituteData.Address},{" "}
              {instituteData.City}, {instituteData.State} - {instituteData.Zip}
            </p>
            <p>
              <strong>Country:</strong> {instituteData.Country}
            </p>
            <p>
              <strong>Website:</strong> {instituteData.Website}
            </p>
            <p>
              <strong>KYC Verified:</strong>{" "}
              {instituteData.KYCVerified ? "✅" : "❌"}
            </p>
            <div className="grid grid-cols-2 gap-4 mt-4">
              <Stat label="Students" value={instituteData.TotalStudents} />
              <Stat label="Teachers" value={instituteData.TotalTeachers} />
              <Stat label="Parents" value={instituteData.TotalParents} />
              <Stat label="Courses" value={instituteData.TotalCourses} />
            </div>
          </>
        ) : (
          <p>No Institute data available yet 😔</p>
        )}
      </div>
    );
  };

  const Stat = ({ label, value }) => (
    <div
      className={`p-4 rounded-md shadow ${
        isDark ? "bg-darkCard" : "bg-gray-100"
      } text-center`}
    >
      <p className="text-lg font-semibold">{value}</p>
      <p className="text-sm">{label}</p>
    </div>
  );

  return (
    <div className={`${bg} min-h-screen flex`}>
      {/* Sidebar */}
      <div
        className={`w-1/4 p-6 bg-gray-800 text-white ${
          sidebarOpen ? "block" : "hidden"
        } md:block`}
      >
        <h2 className="text-3xl font-bold text-center mb-6">
          Institute Dashboard
        </h2>
        <nav className="space-y-4">
          <SidebarBtn
            label="Add Teacher"
            icon={<FaChalkboardTeacher />}
            tab="teachers"
          />
          <SidebarBtn label="Create Course" icon={<FaBook />} tab="courses" />
          <SidebarBtn
            label="Show All Teachers"
            icon={<FaChalkboardTeacher />}
            tab="allTeachers"
          />
          <SidebarBtn
            label="Show All Students"
            icon={<FaUsers />}
            tab="students"
          />
          <SidebarBtn
            label="Show All Parents"
            icon={<FaUsers />}
            tab="parents"
          />
          <SidebarBtn
            label="Total Income & Courses"
            icon={<FaMoneyBillWave />}
            tab="total"
          />
          <SidebarBtn
            label="Institute Info"
            icon={<FaTachometerAlt />}
            tab="summary"
          />
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
        {activeTab === "total" && <TotalIncomeCourses />}
        {activeTab === "summary" && <Summary />}
      </div>
    </div>
  );

  function SidebarBtn({ label, icon, tab }) {
    return (
      <button
        className={`w-full text-left py-3 px-4 rounded-md hover:bg-gray-700 ${
          activeTab === tab ? "bg-gray-700" : ""
        }`}
        onClick={() => setActiveTab(tab)}
      >
        {icon} <span className="ml-2">{label}</span>
      </button>
    );
  }

  function AllTeachers() {
    return <p className={`${text}`}>Showing all teachers (dummy)...</p>;
  }

  function AllStudents() {
    return <p className={`${text}`}>Showing all students (dummy)...</p>;
  }

  function AllParents() {
    return <p className={`${text}`}>Showing all parents (dummy)...</p>;
  }

  function TotalIncomeCourses() {
    return (
      <div
        className={`p-6 rounded-xl shadow-lg ${
          isDark ? "bg-darkCard" : "bg-white"
        } ${text}`}
      >
        <h2 className={`text-xl font-bold mb-4 ${primary}`}>📊 Stats</h2>
        <p>Total Income: ₹1,20,000</p>
        <p>Total Courses: 5</p>
      </div>
    );
  }
};

export default Dashboard;
