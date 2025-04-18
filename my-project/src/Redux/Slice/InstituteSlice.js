import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  createInstitute,
  getInstituteByCode,
  getInstitute,
} from "../Auth/InstituteApi";

// 🎯 Async thunk: Create a new institute
export const createNewInstitute = createAsyncThunk(
  "institute/create",
  async (data, thunkAPI) => {
    try {
      const response = await createInstitute(data);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data || { message: "Unexpected error occurred" }
      );
    }
  }
);

// 🎯 Async thunk: Fetch current institute
export const FetchInstitute = createAsyncThunk(
  "institute/get",
  async (_, thunkAPI) => {
    try {
      const response = await getInstitute(); 
    //   console.log("response.data in SLice");
        // console.log(response.institute);
      return response.institute;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data || { message: "Failed to fetch institute" }
      );
    }
  }
);

// 🎯 Async thunk: Fetch institute by code
export const fetchInstituteByCode = createAsyncThunk(
  "institute/fetchByCode",
  async (code, thunkAPI) => {
    try {
      const response = await getInstituteByCode(code);
      return response.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(
        error?.response?.data || { message: "Failed to fetch by code" }
      );
    }
  }
);

const loadInstituteFromStorage = () => {
  try {
    const data = localStorage.getItem("institute");
    return data ? JSON.parse(data) : null;
  } catch (error) {
    console.warn("❌ Failed to parse institute from localStorage:", error);
    localStorage.removeItem("institute"); // Clean up bad data
    return null;
  }
};

// 🍃 Initial state

const initialState = {
  data: loadInstituteFromStorage(),
  loading: false,
  error: null,
};

// 🧠 The main slice
const instituteSlice = createSlice({
  name: "institute",
  initialState,
  reducers: {
    clearInstitute: (state) => {
      state.data = null;
      state.error = null;
      localStorage.removeItem("institute");
    },
  },
  extraReducers: (builder) => {
    builder
      // Create Institute
      .addCase(createNewInstitute.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(createNewInstitute.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        localStorage.setItem("institute", JSON.stringify(action.payload));
      })
      .addCase(createNewInstitute.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Fetch by Code
      .addCase(fetchInstituteByCode.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchInstituteByCode.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        localStorage.setItem("institute", JSON.stringify(action.payload));
      })
      .addCase(fetchInstituteByCode.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      })

      // Fetch Logged-in Institute
      .addCase(FetchInstitute.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(FetchInstitute.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
        localStorage.setItem("institute", JSON.stringify(action.payload));
        // console.log("✅ Institute fetched:", )
        // console.log(action.payload);
      })
      .addCase(FetchInstitute.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload?.message;
      });
  },
});

// 📤 Export actions and reducer
export const { clearInstitute } = instituteSlice.actions;
export default instituteSlice.reducer;
