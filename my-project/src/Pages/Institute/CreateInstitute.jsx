import React from "react";

const InstituteForm = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const bg = isDark ? "bg-darkBg" : "bg-lightBg";
  const card = isDark ? "bg-darkCard" : "bg-lightCard";
  const text = isDark ? "text-darkText" : "text-lightText";
  const primary = isDark ? "text-darkPrimary" : "text-lightPrimary";
  const inputBg = isDark ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]";

  return (
    <div className={`${bg} min-h-screen flex items-center justify-center px-4`}>
      <form
        className={`${card} p-8 rounded-xl shadow-lg w-full max-w-2xl ${text} font-poppins space-y-6`}
      >
        <h2 className={`text-2xl font-bold mb-2 ${primary}`}>
          Institute Registration 🏫
        </h2>
        <p className="text-sm">Register your institution with Edusynx 🎓</p>

        <Input label="Institute Name" name="InstituteName" inputBg={inputBg} text={text} />
        <Input label="Email" name="Email" type="email" inputBg={inputBg} text={text} />
        <Input label="Phone" name="Phone" type="tel" inputBg={inputBg} text={text} />
        <Input label="Address" name="Address" inputBg={inputBg} text={text} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="City" name="City" inputBg={inputBg} text={text} />
          <Input label="State" name="State" inputBg={inputBg} text={text} />
          <Input label="Zip" name="Zip" inputBg={inputBg} text={text} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Country" name="Country" inputBg={inputBg} text={text} />
          <Input label="Website" name="Website" type="url" inputBg={inputBg} text={text} />
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

const Input = ({ label, name, type = "text", inputBg, text }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className={`mb-1 text-sm font-medium ${text}`}>
      {label}
    </label>
    <input
      type={type}
      name={name}
      id={name}
      placeholder={label}
      className={`px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary ${inputBg} ${text}`}
    />
  </div>
);

export default InstituteForm;
