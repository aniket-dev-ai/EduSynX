// src/redux/slices/courseSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"; 
import { createCourse, getAllCourses } from "../../../../Backend/src/controllers/Institute/CourseController";

// 🔧 Create course thunk
export const addCourse = createAsyncThunk(
  "course/create",
  async ({ instituteId, courseData }, thunkAPI) => {
    try {
      return await createCourse(instituteId, courseData);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || "Error");
    }
  }
);

// 📥 Get all courses thunk
export const fetchCourses = createAsyncThunk(
  "course/fetchAll",
  async (instituteId, thunkAPI) => {
    try {
      return await getAllCourses(instituteId);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || "Error");
    }
  }
);

const courseSlice = createSlice({
  name: "course",
  initialState: {
    courses: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearCourses: (state) => {
      state.courses = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addCourse.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addCourse.fulfilled, (state, action) => {
        state.loading = false;
        state.courses.push(action.payload);
      })
      .addCase(addCourse.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to create course";
      })

      .addCase(fetchCourses.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchCourses.fulfilled, (state, action) => {
        state.loading = false;
        state.courses = action.payload;
      })
      .addCase(fetchCourses.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || "Failed to fetch courses";
      });
  },
});

export const { clearCourses } = courseSlice.actions;

export default courseSlice.reducer;
