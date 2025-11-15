// steps
//1. import two things
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// 2. create the initial/global state
const initialState = {
  posts: [],
  postSuccess: false,
  postError: false,
  postMessage: "",
  postLoading: false,
};

// 3. create slice
export const postSLice = createSlice({
  name: "daak",
  initialState,
  reducers: {}, // those functions that change the state are written inside reducers
  extraReducers: () => {},
});

// 4. export it to make it global

export default postSLice.reducer;
