// src/redux/slices/teacherSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import { createTeacher, getAllTeachers } from '../Auth/teacherApi';

// 💥 Async Thunks
export const addTeacher = createAsyncThunk(
  'teacher/create',
  async (data, thunkAPI) => {
    try {
      return await createTeacher(data);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || "Error");
    }
  }
);

export const fetchAllTeachers = createAsyncThunk(
  'teacher/getAll',
  async (_, thunkAPI) => {
    try {
      return await getAllTeachers();
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || "Error");
    }
  }
);

// 💖 Teacher Slice
const teacherSlice = createSlice({
  name: 'teacher',
  initialState: {
    teachers: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearTeachers: (state) => {
      state.teachers = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addTeacher.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addTeacher.fulfilled, (state, action) => {
        state.loading = false;
        state.teachers.push(action.payload); // Add the newly created teacher
      })
      .addCase(addTeacher.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to create teacher';
      })

      .addCase(fetchAllTeachers.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAllTeachers.fulfilled, (state, action) => {
        state.loading = false;
        state.teachers = action.payload;
      })
      .addCase(fetchAllTeachers.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to fetch teachers';
      });
  },
});

export const { clearTeachers } = teacherSlice.actions;

export default teacherSlice.reducer;
