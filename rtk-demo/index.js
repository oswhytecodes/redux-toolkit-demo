const store = require("./app/store");
const cakeActions = require("./features/cake/cakeSlice").cakeActions;
const icecreamActions =
  require("./features/icecream/iceCreamSlice").icecreamActions;
const fetchUsers = require("./features/user/userSlice").fetchUsers;

// console.log("Initial state", store.getState());
// subscribe to store
// store.subscribe(() => {
//   console.log("Updated state", store.getState());
// });
// with logger middleware added to the store, we can remove the console.log
store.subscribe(() => {});

// dispatch
store.dispatch(fetchUsers());

// store.dispatch(cakeActions.ordered(5));

// store.dispatch(cakeActions.restocked(2));

// store.dispatch(icecreamActions.ordered(3));
