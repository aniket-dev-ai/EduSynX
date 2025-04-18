import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify"; // 👈 for notifications
import { login } from "../../Redux/Slice/UserSlice";

const LoginForm = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const bg = isDark ? "bg-darkBg" : "bg-lightBg";
  const card = isDark ? "bg-darkCard" : "bg-lightCard";
  const text = isDark ? "text-darkText" : "text-lightText";
  const primary = isDark ? "text-darkPrimary" : "text-lightPrimary";
  const inputBg = isDark ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]";

  // 🔐 State for login input
  const [Email, setEmail] = useState("");
  const [Password, setPassword] = useState("");
  const dispatch = useDispatch(); 

  const handleLogin = async (e) => {
    e.preventDefault();

    if (!Email || !Password) {
      toast.error("Email and Password are required babe! 😩");
      return;
    }

    await dispatch(login({ Email, Password }))
      .unwrap()
        .then((res) => {
            toast.success("Login successful! 🎉");
            console.log("Login Response:", res);
        })
        .catch((error) => {
            toast.error("Login failed! Please check your credentials. 😢");
            console.error("Login Error:", error);
        });

  };

  return (
    <div className={`${bg} min-h-screen flex items-center justify-center px-4`}>
      <form
        onSubmit={handleLogin}
        className={`${card} p-8 rounded-xl shadow-xl w-full max-w-md ${text} font-poppins space-y-6`}
      >
        <h2 className={`text-2xl font-bold mb-2 ${primary}`}>Welcome Back 👋</h2>
        <p className="text-sm">Login to continue to Edusynx 🚀</p>

        <div className="flex flex-col">
          <label htmlFor="Email" className={`mb-1 text-sm font-medium ${text}`}>
            Email
          </label>
          <input
            type="Email"
            id="Email"
            placeholder="you@example.com"
            className={`px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary ${inputBg} ${text}`}
            value={Email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="Password" className={`mb-1 text-sm font-medium ${text}`}>
            Password
          </label>
          <input
            type="Password"
            id="Password"
            placeholder="••••••••"
            className={`px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary ${inputBg} ${text}`}
            value={Password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button
          type="submit"
          className={`w-full py-3 mt-2 rounded-md font-semibold ${
            isDark ? "bg-darkPrimary text-black" : "bg-lightPrimary text-white"
          } hover:opacity-90 transition`}
        >
          Log In 🔐
        </button>

        <p className={`text-sm text-center mt-4 ${text}`}>
          Don’t have an account?{" "}
          <a href="/signup" className={`${primary} font-medium hover:underline`}>
            Sign Up ❤️
          </a>
        </p>
      </form>
    </div>
  );
};

export default LoginForm;
