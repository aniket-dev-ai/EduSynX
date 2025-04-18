import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import ThemeChanger from "./Utils/ThemeChanger";
import UserForm from "./Pages/Auth/User.SignUp";
import LoginForm from "./Pages/Auth/User.Login";
import InstituteForm from "./Pages/Institute/CreateInstitute";
import CreateTeacherForm from "./Pages/Institute/CreateTeacher";
import CreateCourseForm from "./Pages/Institute/CreateCourse";

function App() {
  const theme = useSelector((state) => state.theme.theme);
  useEffect(() => {
    console.log(theme);
  }, [theme]);

  return (
    <div
      className={`  
    ${theme === "dark" ? "bg-gray-900 text-white" : "bg-white text-black"}
    `}
    >
      <ThemeChanger />
      <UserForm theme={theme} />
      <LoginForm theme={theme} />
      <InstituteForm theme={theme} />
      <CreateTeacherForm theme={theme} />
      <CreateCourseForm theme={theme}/>
    </div>
  );
}

export default App;
