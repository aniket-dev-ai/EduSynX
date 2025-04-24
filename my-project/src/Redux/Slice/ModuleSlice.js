// src/redux/slices/moduleSlice.js
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'; 
import { createModule } from '../Auth/ModuleApi';

export const addModule = createAsyncThunk(
  'module/create',
  async (data, thunkAPI) => {
    console.log('Adding module:', data);
    const { courseId, ModuleName } = data;
    console.log('Adding module:', { courseId, ModuleName });
    try {
      return await createModule(courseId, ModuleName);
    } catch (err) {
      return thunkAPI.rejectWithValue(err.response?.data || 'Error');
    }
  }
);

// 💅 Slice
const moduleSlice = createSlice({
  name: 'module',
  initialState: {
    modules: [],
    loading: false,
    error: null,
  },
  reducers: {
    clearModules: (state) => {
      state.modules = [];
      state.error = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(addModule.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addModule.fulfilled, (state, action) => {
        state.loading = false;
        state.modules.push(action.payload);
      })
      .addCase(addModule.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message || 'Failed to create module';
      });
  }
});

export const { clearModules } = moduleSlice.actions;

export default moduleSlice.reducer;
