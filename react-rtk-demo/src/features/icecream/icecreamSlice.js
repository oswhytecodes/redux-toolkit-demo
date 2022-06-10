import { createSlice } from "@reduxjs/toolkit";
// const createSlice = require("@reduxjs/toolkit").createSlice;
// const { cakeActions } = require("../cake/cakeSlice");
import { ordered as CakeOrdered } from "../cake/cakeSlice";

const initialState = {
  numOfIcecream: 15,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState: initialState,
  reducers: {
    ordered: (state) => {
      state.numOfIcecream-- ;
    },
    restocked: (state, action) => {
      state.numOfIcecream = state.numOfIcecream + action.payload;
    },
  },
  //  adding a action that will decrease the number of icecreams by 1
  //  each time a cake is ordered from the store
  //   extraReducers: {
  //       ['cake/ordered']: (state) => {
  //         state.numOfIcecream--
  //       }
  //   }
  //   using a builder instead
  extraReducers: (builder) => {
    // CakeActions.ordered in now CakeOrdered as it was imported from the CakeSlice
    builder.addCase(CakeOrdered, (state) => {
      state.numOfIcecream--;
    });
  },
});

// export reducer
export default icecreamSlice.reducer;
// module.exports = icecreamSlice.reducer;
// export actions
// module.exports.icecreamActions = icecreamSlice.actions;
export const { ordered, restocked } = icecreamSlice.actions;
