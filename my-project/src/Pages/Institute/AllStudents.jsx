import React from "react";

const AllStudents = () => {
  const students = [
    { name: "Student 1", email: "student1@edu.com", course: "Math 101", enrollmentDate: "01-01-2023" },
    { name: "Student 2", email: "student2@edu.com", course: "Science 101", enrollmentDate: "02-01-2023" },
    { name: "Student 3", email: "student3@edu.com", course: "English 101", enrollmentDate: "03-01-2023" },
    { name: "Student 4", email: "student4@edu.com", course: "History 101", enrollmentDate: "04-01-2023" },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">All Students</h3>
      <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Course</th>
            <th className="py-2 px-4 text-left">Enrollment Date</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4">{student.name}</td>
              <td className="py-2 px-4">{student.email}</td>
              <td className="py-2 px-4">{student.course}</td>
              <td className="py-2 px-4">{student.enrollmentDate}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllStudents;
