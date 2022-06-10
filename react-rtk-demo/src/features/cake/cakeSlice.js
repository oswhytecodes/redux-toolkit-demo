import { createSlice } from "@reduxjs/toolkit";

// const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
};
//  the slice takes care of
// the action types, the action creators,  the reducers and immutable updates
const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfCakes--;
    },
    restocked: (state, action) => {
      state.numOfCakes = state.numOfCakes + action.payload;
    },
  },
});
// export reducer
// module.exports = cakeSlice.reducer;
export default cakeSlice.reducer;
// export actions
// module.exports.cakeActions = cakeSlice.actions;
//  deconstruct the two actions and save them to the slice.actions
export const { ordered, restocked } = cakeSlice.actions;
