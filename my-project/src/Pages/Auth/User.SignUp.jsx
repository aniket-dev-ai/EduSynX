import React, { useState } from "react";
import { useDispatch } from "react-redux"; 

import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { register } from "../../Redux/Slice/UserSlice";

const UserForm = ({ theme = "light" }) => {
  const dispatch = useDispatch();
  const isDark = theme === "dark";

  const bg = isDark ? "bg-darkBg" : "bg-lightBg";
  const card = isDark ? "bg-darkCard" : "bg-lightCard";
  const text = isDark ? "text-darkText" : "text-lightText";
  const inputBg = isDark ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]";
  const primary = isDark ? "text-darkPrimary" : "text-lightPrimary";

  // 🌼 Form State variables
  const [FirstName, setFirstName] = useState("Aniket");
  const [LastName, setLastName] = useState("Srivastava");
  const [Email, setEmail] = useState("aniket.srivastava.id@gmail.com");
  const [Phone, setPhone] = useState("9336934124");
  const [Address, setAddress] = useState("a-116 barra 8");
  const [City, setCity] = useState("Kanpur");
  const [State, setState] = useState("Uttar Pradesh");
  const [Zip, setZip] = useState("208027");
  const [Country, setCountry] = useState("India");
  const [Role, setRole] = useState("");
  const [Password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      FirstName,
      LastName,
      Email,
      Phone,
      Address,
      City,
      State,
      Zip,
      Country,
      Role,
      Password,
    };

    try {
      const res = await dispatch(register(userData));
      toast.success("User created successfully! 🥳");
      console.log("Created User:", res);
    } catch (error) {
      toast.error("Failed to create user 😢");
      console.error(error);
    }
  };

  return (
    <div className={`${bg} min-h-screen flex items-center justify-center p-6`}>
      <form
        onSubmit={handleSubmit}
        className={`${card} p-8 rounded-xl shadow-lg w-full max-w-2xl ${text} font-poppins space-y-4`}
      >
        <h2 className={`text-2xl font-semibold mb-4 ${primary}`}>
          Register Now ✨
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className={`p-3 rounded-md border ${inputBg}`}
            type="text"
            placeholder="First Name"
            value={FirstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
          <input
            className={`p-3 rounded-md border ${inputBg}`}
            type="text"
            placeholder="Last Name"
            value={LastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className={`p-3 rounded-md border ${inputBg}`}
            type="Email"
            placeholder="Email"
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            className={`p-3 rounded-md border ${inputBg}`}
            type="text"
            placeholder="Phone"
            value={Phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>

        <input
          className={`p-3 rounded-md border w-full ${inputBg}`}
          type="text"
          placeholder="Address"
          value={Address}
          onChange={(e) => setAddress(e.target.value)}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <input
            className={`p-3 rounded-md border ${inputBg}`}
            type="text"
            placeholder="City"
            value={City}
            onChange={(e) => setCity(e.target.value)}
          />
          <input
            className={`p-3 rounded-md border ${inputBg}`}
            type="text"
            placeholder="State"
            value={State}
            onChange={(e) => setState(e.target.value)}
          />
          <input
            className={`p-3 rounded-md border ${inputBg}`}
            type="text"
            placeholder="Zip"
            value={Zip}
            onChange={(e) => setZip(e.target.value)}
          />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            className={`p-3 rounded-md border ${inputBg}`}
            type="text"
            placeholder="Country"
            value={Country}
            onChange={(e) => setCountry(e.target.value)}
          />

          <select
            className={`p-3 rounded-md border ${inputBg}`}
            value={Role}
            onChange={(e) => setRole(e.target.value)}
          >
            <option value="">Select Role</option>
            <option value="Student">Student</option>
            <option value="Teacher">Teacher</option>
            <option value="Institute">Institute</option>
            <option value="Parents">Parents</option>
          </select>
        </div>

        <input
          className={`p-3 rounded-md border w-full ${inputBg}`}
          type="Password"
          placeholder="Password"
          value={Password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className={`w-full py-3 mt-4 rounded-md font-semibold ${
            isDark ? "bg-darkPrimary text-black" : "bg-lightPrimary text-white"
          } hover:opaCity-90 transition`}
        >
          Create Account 💖
        </button>
      </form>
    </div>
  );
};

export default UserForm;
