import React from "react";

const AllTeachers = () => {
  const teachers = [
    { name: "Teacher 1", email: "teacher1@edu.com", phone: "123-456-7890", subject: "Math" },
    { name: "Teacher 2", email: "teacher2@edu.com", phone: "234-567-8901", subject: "Science" },
    { name: "Teacher 3", email: "teacher3@edu.com", phone: "345-678-9012", subject: "English" },
    { name: "Teacher 4", email: "teacher4@edu.com", phone: "456-789-0123", subject: "History" },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">All Teachers</h3>
      <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Phone</th>
            <th className="py-2 px-4 text-left">Subject</th>
          </tr>
        </thead>
        <tbody>
          {teachers.map((teacher, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4">{teacher.name}</td>
              <td className="py-2 px-4">{teacher.email}</td>
              <td className="py-2 px-4">{teacher.phone}</td>
              <td className="py-2 px-4">{teacher.subject}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllTeachers;
