import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { addTeacher } from "../../Redux/Slice/TeacherSLice";

const CreateTeacherForm = () => {
  const [formData, setFormData] = useState({
    FirstName: "",
    LastName: "",
    Email: "",
    Phone: "",
    Address: "",
    City: "",
    State: "",
    Zip: "",
    Country: "",
    InstituteId: "",
  });

  const id = useSelector((state) => state.Institute.data._id);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const dispatch = useDispatch(); 
  
  useEffect(()=>{
    setFormData((prev) => ({
      ...prev,
      InstituteId: id,
    }));
  },[id])

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log("Form Submitted:", formData);
    
    await dispatch(addTeacher(formData))
      .unwrap()
      .then((res) => {
        console.log("Teacher added successfully:", res);
      })
      .catch((error) => {
        console.error("Failed to add teacher:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 rounded-md shadow-md w-full max-w-2xl space-y-6"
      >
        <h2 className="text-2xl font-bold mb-2 text-gray-800">Add Teacher</h2>
        <p className="text-sm text-gray-600">Enter teacher details below</p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="First Name"
            name="FirstName"
            value={formData.FirstName}
            onChange={handleChange}
          />
          <Input
            label="Last Name"
            name="LastName"
            value={formData.LastName}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Email"
            name="Email"
            type="email"
            value={formData.Email}
            onChange={handleChange}
          />
          <Input
            label="Phone"
            name="Phone"
            value={formData.Phone}
            onChange={handleChange}
          />
        </div>

        <Input
          label="Address"
          name="Address"
          value={formData.Address}
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input
            label="City"
            name="City"
            value={formData.City}
            onChange={handleChange}
          />
          <Input
            label="State"
            name="State"
            value={formData.State}
            onChange={handleChange}
          />
          <Input
            label="Zip"
            name="Zip"
            value={formData.Zip}
            onChange={handleChange}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input
            label="Country"
            name="Country"
            value={formData.Country}
            onChange={handleChange}
          />
          <Input
            label="Institute ID"
            name="InstituteId"
            value={formData.InstituteId}
            onChange={handleChange}
          />
        </div>

        <button
          type="submit"
          className="w-full py-3 mt-2 bg-blue-600 text-white rounded-md font-semibold hover:bg-blue-700 transition"
        >
          Create Teacher
        </button>
      </form>
    </div>
  );
};

const Input = ({ label, name, type = "text", value, onChange }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className="mb-1 text-sm font-medium text-gray-700">
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      value={value}
      onChange={onChange}
      placeholder={label}
      className="px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
    />
  </div>
);

export default CreateTeacherForm;
