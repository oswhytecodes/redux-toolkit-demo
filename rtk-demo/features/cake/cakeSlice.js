const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfCakes: 10,
 
};
//  the slice takes care of
// the action types, the action creators,  the reducers and immutable updates
const cakeSlice = createSlice({
  name: "cake",
  initialState: initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfCakes -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfCakes += action.payload;
    },
  },
});
// export reducer
module.exports = cakeSlice.reducer;
// export actions
module.exports.cakeActions = cakeSlice.actions;
