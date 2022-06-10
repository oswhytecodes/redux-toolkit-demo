// import creatSlice and then invoke it
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// const createSlice = require("@reduxjs/toolkit").createSlice;
// const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
import axios from "axios";
// const axios = require("axios");

//  create state
const initialState = {
  loading: false,
  users: [],
  error: "",
};
// call api
//  createasyncthunk automatically dispatch lifecycles based on the returned [promise]
//  generates pending, fulfilled and rejected action types
export const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data);
  // .then((res) => res.data.map((user) => user.name));
});

//  create Slice
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: {
    [fetchUsers.pending]: (state) => {
      state.loading = true;
    },
    [fetchUsers.fulfilled]: (state, action) => {
      state.loading = false;
      state.users = action.payload;
      state.error = "";
    },
    [fetchUsers.rejected]: (state, action) => {
      state.loading = false;
      state.users = [];
      state.error = action.error.message;
    },
  },
});
// export the userSlice reducer
// module.exports = userSlice.reducer;
export default userSlice.reducer;
// export the api call
// module.exports.fetchUsers = fetchUsers;

// extraReducers: (builder) => {
//   builder.addCase(fetchUsers.pending, (state) => {
//     state.loading = true;
//   }),
//     builder.addCase(fetchUsers.fulfilled, (state, action) => {
//       state.loading = false;
//       state.users = action.payload;
//       state.error = "";
//     }),
//     builder.addCase(fetchUsers.rejected, (state, action) => {
//       state.loading = false;
//       state.users = [];
//       state.error = action.error.message;
//     });
// },


//  fetch with async await
/*
export const fetchUsers = createAsyncThunk(
  'user/fetchUsers',
  async () => {
    const data = await fetch("https://jsonplaceholder.typicode.com/users")
    const json = await data.json()
    return json
  }
)
*/