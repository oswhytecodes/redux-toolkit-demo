const { cakeActions } = require("../cake/cakeSlice");

const createSlice = require("@reduxjs/toolkit").createSlice;

const initialState = {
  numOfIcecream: 15,
};
const icecreamSlice = createSlice({
  name: "icecream",
  initialState: initialState,
  reducers: {
    ordered: (state, action) => {
      state.numOfIcecream -= action.payload;
    },
    restocked: (state, action) => {
      state.numOfIcecream += action.payload;
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
    builder.addCase(cakeActions.ordered, (state) => {
      state.numOfIcecream--;
    });
  },
});

// export reducer
module.exports = icecreamSlice.reducer;
// export actions
module.exports.icecreamActions = icecreamSlice.actions;
