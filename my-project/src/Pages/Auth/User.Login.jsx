import React from "react";

const LoginForm = ({ theme = "light" }) => {
  const isDark = theme === "dark";

  const bg = isDark ? "bg-darkBg" : "bg-lightBg";
  const card = isDark ? "bg-darkCard" : "bg-lightCard";
  const text = isDark ? "text-darkText" : "text-lightText";
  const primary = isDark ? "text-darkPrimary" : "text-lightPrimary";
  const inputBg = isDark ? "bg-[#1A1A1A]" : "bg-[#FAFAFA]";

  return (
    <div className={`${bg} min-h-screen flex items-center justify-center px-4`}>
      <form className={`${card} p-8 rounded-xl shadow-xl w-full max-w-md ${text} font-poppins space-y-6`}>
        <h2 className={`text-2xl font-bold mb-2 ${primary}`}>Welcome Back 👋</h2>
        <p className="text-sm">Login to continue to Edusynx 🚀</p>

        <div className="flex flex-col">
          <label htmlFor="email" className={`mb-1 text-sm font-medium ${text}`}>
            Email
          </label>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="you@example.com"
            className={`px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary ${inputBg} ${text}`}
          />
        </div>

        <div className="flex flex-col">
          <label htmlFor="password" className={`mb-1 text-sm font-medium ${text}`}>
            Password
          </label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="••••••••"
            className={`px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary ${inputBg} ${text}`}
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
