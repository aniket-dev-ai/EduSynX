import { configureStore } from "@reduxjs/toolkit";
import themeSlice from "./Slice/ThemeSlice";

export const store = configureStore({
  reducer: {
    theme: themeSlice,
  },
});

export default store;
