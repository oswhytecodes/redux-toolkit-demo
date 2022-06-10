const redux = require("redux");
const createStore = redux.createStore;
// apple the middle ware in order to use redux thunk
const applyMiddleware = redux.applyMiddleware;
// add axios and redux thunk

const thunkMiddleware = require("redux-thunk").default;
const axios = require("axios");

const initialState = {
  loading: false,
  data: [],
  error: "",
};

const fetchUsersRequest = () => {
  return {
    type: "fetchUsers_requested",
  };
};
// this is where the data is successful,
// the action creator takes a "users" parameter which is simply our returned data
const fetchUsersSucceed = (users) => {
  return {
    type: "fetchUsers_succeeded",
    payload: users,
  };
};
const fetchUsersFail = (error) => {
  return {
    type: "fetchUsers_failed",
    paylaod: error,
  };
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "fetchUsers_requested":
      return {
        ...state,
        loading: true,
      };
      break;
    case "fetchUsers_succeeded":
      return {
        loading: false,
        data: action.payload,
        error: "",
      };
      break;
    case "fetchUsers_failed":
      return {
        loading: false,
        data: [],
        error: action.payload,
      };
      break;
    default:
      return state;
  }
};
//  our api call is an action creator, and
//  action creators return an action
//  thunk allows an action creator to return a function of an action object
// the funtion has side effects and is not pure(synchronous)
// receives the dispatch method as an argument
const fetchUsers = () => {
  return (dispatch) => {
    // dispatch the action creator dedicated to loading data
    dispatch(fetchUsersRequest());
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // res.data = the list of users returned
        const users = res.data.map((user) => user.name);
        // dipatch the action creator dedicated to a successful return
        // take in the users as a parameter
        dispatch(fetchUsersSucceed(users));
      })
      .catch((error) => {
        // error message returned
        //  dispacth the action creator dedicated to errors
        dispatch(fetchUsersFail(error.message));
      });
  };
};
// create your store
// pass your reducer AND thunk middleware to the store
const store = createStore(userReducer, applyMiddleware(thunkMiddleware));

// subscribe to the store
store.subscribe(() => console.log(store.getState()));
store.dispatch(fetchUsers());
