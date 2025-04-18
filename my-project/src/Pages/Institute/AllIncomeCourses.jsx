import React from "react";

const TotalIncomeCourses = ({ totalCourses, totalIncome }) => {
  return (
    <div>
      <h3 className="text-xl font-bold mb-4">Total Stats</h3>
      <div className="bg-gray-100 p-6 rounded-md shadow-md">
        <p className="mb-2">Total Courses: {totalCourses}</p>
        <p>Total Income: ₹{totalIncome}</p>
      </div>
    </div>
  );
};

export default TotalIncomeCourses;
