import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./Slice/ThemeSlice";
import AuthSlice from "./Slice/UserSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
    Auth: AuthSlice,
  },
});

export default store;
