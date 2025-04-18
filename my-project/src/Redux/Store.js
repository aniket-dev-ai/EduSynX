import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./Slice/ThemeSlice";
import AuthSlice from "./Slice/UserSlice";
import InstituteSlice from "./Slice/InstituteSlice";
import TeacherSlice from "./Slice/TeacherSLice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    Auth: AuthSlice,
    Institute: InstituteSlice,
    Teacher: TeacherSlice,
  },
});

export default store;
