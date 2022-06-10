import { configureStore } from "@reduxjs/toolkit";
// const configureStore = require("@reduxjs/toolkit").configureStore;
// adding the logger middleware
// const reduxLogger = require("redux-logger");

import cakeReducer from "../features/cake/cakeSlice";
import iceCreamReducer from "../features/icecream/icecreamSlice";
import userReducer from "../features/user/userSlice";
// const cakeReducer = require("../features/cake/cakeSlice");
// const iceCreamReducer = require("../features/icecream/icecreamSlice");
// const userReducer = require("../features/user/userSlice");

// const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    cake: cakeReducer,
    icecream: iceCreamReducer,
    user: userReducer,
  },
  //   add the loggger middleware to the store
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
export default store;
