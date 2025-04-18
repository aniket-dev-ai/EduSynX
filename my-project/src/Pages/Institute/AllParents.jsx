import React from "react";

const AllParents = () => {
  const parents = [
    { name: "Parent 1", email: "parent1@edu.com", studentName: "Student 1", phone: "123-456-7890" },
    { name: "Parent 2", email: "parent2@edu.com", studentName: "Student 2", phone: "234-567-8901" },
    { name: "Parent 3", email: "parent3@edu.com", studentName: "Student 3", phone: "345-678-9012" },
    { name: "Parent 4", email: "parent4@edu.com", studentName: "Student 4", phone: "456-789-0123" },
  ];

  return (
    <div>
      <h3 className="text-xl font-bold mb-4">All Parents</h3>
      <table className="min-w-full bg-white border border-gray-300 rounded-md shadow-md">
        <thead className="bg-gray-100">
          <tr>
            <th className="py-2 px-4 text-left">Name</th>
            <th className="py-2 px-4 text-left">Email</th>
            <th className="py-2 px-4 text-left">Student</th>
            <th className="py-2 px-4 text-left">Phone</th>
          </tr>
        </thead>
        <tbody>
          {parents.map((parent, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="py-2 px-4">{parent.name}</td>
              <td className="py-2 px-4">{parent.email}</td>
              <td className="py-2 px-4">{parent.studentName}</td>
              <td className="py-2 px-4">{parent.phone}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllParents;
