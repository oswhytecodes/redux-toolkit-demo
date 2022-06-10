const configureStore = require("@reduxjs/toolkit").configureStore;
// adding the logger middleware
const reduxLogger = require("redux-logger");

const cakeReducer = require("../features/cake/cakeSlice");
const iceCreamReducer = require("../features/icecream/icecreamSlice");
const userReducer = require("../features/user/userSlice");

const logger = reduxLogger.createLogger();

const store = configureStore({
  reducer: {
    // cake: cakeReducer,
    // icecream: iceCreamReducer,
    user: userReducer,
  },
  //   add the loggger middleware to the store
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});
module.exports = store;
