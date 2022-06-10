// import creatSlice and then invoke it
const createSlice = require("@reduxjs/toolkit").createSlice;
const createAsyncThunk = require("@reduxjs/toolkit").createAsyncThunk;
const axios = require("axios");

//  create state
const initialState = {
  loading: false,
  users: [],
  error: "",
};
// call api
//  createasyncthunk automatically dispatch lifecycles based on the returned [promise]
//  generates pending, fulfilled and rejected action types
const fetchUsers = createAsyncThunk("user/fetchUsers", () => {
  return axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => res.data.map((user) => user.name));
});

//  create Slice
const userSlice = createSlice({
  name: "user",
  initialState: initialState,
  extraReducers: (builder) => {
    builder.addCase(fetchUsers.pending, (state) => {
      state.loading = true;
    }),
      builder.addCase(fetchUsers.fulfilled, (state, action) => {
        state.loading = false;
        state.users = action.payload;
        state.error = "";
      }),
      builder.addCase(fetchUsers.rejected, (state, action) => {
        state.loading = false;
        state.users = [];
        state.error = action.error.message;
      });
  },
});
// export the userSlice reducer
module.exports = userSlice.reducer;
// export the api call
module.exports.fetchUsers = fetchUsers;
