// // 1. import two things
// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

// // 2. create the initial state or the state that you hacve to make the global
// const initailState = {
//   posts: [],
//   postSuccess: false,
//   postError: false,
//   postMessage: "",
//   postLoading: false,
// };

// // 3. create slice

// export const postSLice = createSlice({
//   name: "mashq",
//   intitialState,
//   reducers: {}, // those functions that change the state are written inside reducers and here are the functions that are written in inital state
//   extraReducers: () => {}, // this is the leader of the states
// });

// // 4. export it to make it global

// export default postSLice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";

const initialState = {
  posts: [],
  postError: false,
  postMessage: "",
  postLoading: false,
  postSuccess: false,
};

export const postSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
  extraReducers: () => {},
});

export default postSlice.reducer;
