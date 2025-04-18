import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setTheme } from "../Redux/Slice/ThemeSlice";

function ThemeChanger() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.theme.theme);

  const changeTheme = () => {
    dispatch(setTheme());
  };

  return (
    <div className="flex flex-col fixed items-center justify-center ">
      <div
        onClick={changeTheme}
        className={`w-16 h-8 flex items-center rounded-full p-1 cursor-pointer transition-all duration-500 ${
          theme === "dark" ? "bg-gray-700" : "bg-gray-300"
        }`}
      >
        <div
          className={`bg-white w-6 h-6  rounded-full shadow-md transform duration-500 ease-in-out ${
            theme === "dark"
              ? "translate-x-8 rotate-[360deg]"
              : "translate-x-0 rotate-0"
          }`}
        >
            {theme === "dark" ? "🌙" : "☀️"}
        </div>
      </div>
      
    </div>
  );
}

export default ThemeChanger;
