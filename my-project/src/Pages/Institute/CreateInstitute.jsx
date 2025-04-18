import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createNewInstitute } from "../../Redux/Slice/InstituteSlice";
import { toast } from "react-toastify";

  const InstituteForm = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const bg = isDark ? "bg-darkBg" : "bg-lightBg";
  const card = isDark ? "bg-darkCard" : "bg-lightCard";
  const text = isDark ? "text-darkText" : "text-lightText";
  const primary = isDark ? "text-darkPrimary" : "text-lightPrimary";
  const inputBg = isDark ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]";

  const dispatch = useDispatch(); 

  const [formData, setFormData] = useState({
    InstituteName: "",
    Email: "",
    Phone: "",
    Address: "",
    City: "",
    State: "",
    Zip: "",
    Country: "",
    Website: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    await dispatch(createNewInstitute(formData))
      .unwrap()
      .then((res) => {
        toast.success("Institute created successfully! 🎉");
        console.log("Created Institute:", res);
      })
      .catch((error) => {
        toast.error("Failed to create institute. Please try again. 😢");
        console.error("Institute Creation Error:", error);
      });
    
  };

  return (
    <div className={`${bg} min-h-screen flex items-center justify-center px-4`}>
      <form
        onSubmit={handleSubmit}
        className={`${card} p-8 rounded-xl shadow-lg w-full max-w-2xl ${text} font-poppins space-y-6`}
      >
        <h2 className={`text-2xl font-bold mb-2 ${primary}`}>
          Institute Registration 🏫
        </h2>
        <p className="text-sm">Register your institution with Edusynx 🎓</p>

        <Input label="Institute Name" name="InstituteName" value={formData.InstituteName} onChange={handleChange} inputBg={inputBg} text={text} />
        <Input label="Email" name="Email" value={formData.Email} onChange={handleChange} inputBg={inputBg} text={text} />
        <Input label="Phone" name="Phone" value={formData.Phone} onChange={handleChange} inputBg={inputBg} text={text} />
        <Input label="Address" name="Address" value={formData.Address} onChange={handleChange} inputBg={inputBg} text={text} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="City" name="City" value={formData.City} onChange={handleChange} inputBg={inputBg} text={text} />
          <Input label="State" name="State" value={formData.State} onChange={handleChange} inputBg={inputBg} text={text} />
          <Input label="Zip" name="Zip" value={formData.Zip} onChange={handleChange} inputBg={inputBg} text={text} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Country" name="Country" value={formData.Country} onChange={handleChange} inputBg={inputBg} text={text} />
          <Input label="Website" name="Website" value={formData.Website} onChange={handleChange} inputBg={inputBg} text={text} />
        </div>

        <button
          type="submit"
          className={`w-full py-3 mt-2 rounded-md font-semibold ${
            isDark ? "bg-darkPrimary text-black" : "bg-lightPrimary text-white"
          } hover:opacity-90 transition`}
        >
          Register Now 📥
        </button>
      </form>
    </div>
  );
};

const Input = ({ label, name, value, onChange, inputBg, text }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className={`mb-1 text-sm font-medium ${text}`}>
      {label}
    </label>
    <input
      type="text"
      name={name}
      id={name}
      placeholder={label}
      value={value}
      onChange={onChange}
      className={`px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary ${inputBg} ${text}`}
    />
  </div>
);

export default InstituteForm;
