import React from "react";

const UserForm = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const bg = isDark ? "bg-darkBg" : "bg-lightBg";
  const card = isDark ? "bg-darkCard" : "bg-lightCard";
  const text = isDark ? "text-darkText" : "text-lightText";
  const subText = isDark ? "text-darkSubText" : "text-lightSubText";
  const primary = isDark ? "text-darkPrimary" : "text-lightPrimary";
  const inputBg = isDark ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]";

  return (
    <div className={`${bg} min-h-screen flex items-center justify-center p-6`}>
      <form
        className={`${card} p-8 rounded-xl shadow-lg w-full max-w-2xl ${text} font-poppins space-y-6`}
      >
        <h2 className={`text-2xl font-semibold mb-4 ${primary}`}>
          Create Your Account 🚀
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="First Name" name="FirstName" inputBg={inputBg} text={text} />
          <Input label="Last Name" name="LastName" inputBg={inputBg} text={text} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Email" name="Email" type="email" inputBg={inputBg} text={text} />
          <Input label="Phone" name="Phone" inputBg={inputBg} text={text} />
        </div>

        <Input label="Address" name="Address" inputBg={inputBg} text={text} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input label="City" name="City" inputBg={inputBg} text={text} />
          <Input label="State" name="State" inputBg={inputBg} text={text} />
          <Input label="Zip" name="Zip" inputBg={inputBg} text={text} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <Input label="Country" name="Country" inputBg={inputBg} text={text} />
          <Input
            label="Role"
            name="Role"
            type="select"
            options={["Institute", "Student", "Parents", "Teacher"]}
            inputBg={inputBg}
            text={text}
          />
        </div>

        <Input
          label="Password"
          name="Password"
          type="password"
          inputBg={inputBg}
          text={text}
        />

        <button
          type="submit"
          className={`w-full py-3 mt-4 rounded-md font-semibold ${
            isDark ? "bg-darkPrimary text-black" : "bg-lightPrimary text-white"
          } hover:opacity-90 transition`}
        >
          Submit 💌
        </button>
      </form>
    </div>
  );
};

// 🎯 Updated Input component to handle text & select
const Input = ({ label, name, type = "text", inputBg, text, options }) => (
  <div className="flex flex-col">
    <label htmlFor={name} className={`mb-1 text-sm font-medium ${text}`}>
      {label}
    </label>

    {type === "select" ? (
      <select
        name={name}
        id={name}
        className={`px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary ${inputBg} ${text}`}
        defaultValue=""
      >
        <option value="" disabled>
          Select {label}
        </option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    ) : (
      <input
        type={type}
        name={name}
        id={name}
        className={`px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary ${inputBg} ${text}`}
      />
    )}
  </div>
);

export default UserForm;
