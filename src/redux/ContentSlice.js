import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const initialState = {
  content: [],
  isLoading: false,
  isError: false,
  error: {},
};

export const fetchContent = createAsyncThunk(
  "content/fetchContent",
  async () => {
    
    const res = await axios.get("https://node5.onrender.com/user/user");
    const data = await res.data.data;
    console.log("data.....",data);
    return data;
  }
);

const contentSlice = createSlice({
  name: "content",
  reducers: {},
  initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchContent.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchContent.fulfilled, (state, action) => {
      state.isLoading = false;
      state.content = action.payload;
    });
    builder.addCase(fetchContent.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      state.error = action.error;
    });
  },
});

export default contentSlice.reducer;
