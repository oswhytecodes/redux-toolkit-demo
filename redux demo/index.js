const redux = require("redux");
const createStore = redux.createStore;
const combineReducers = redux.combineReducers;

const bindActionCreators = redux.bindActionCreators;
// extend redux with additional functionalities
const applyMiddleware = redux.applyMiddleware;
// reduxlogger, a middleware, logs information about redux state inside your application
const reduxLogger = require("redux-logger");
const logger = reduxLogger.createLogger();

// An action creator is a function that creates a action,
// by returning an object with a type property

const orderCake = (num = 1) => {
  return { type: "cake_ordered", payload: num };
};
const restockCake = (num) => {
  return { type: "cake_restocked", payload: num };
};

//  adding another "shop-keeper" to handle another product for sale
const orderIceCream = (num) => {
  return { type: "icecream_ordered", payload: num };
};
const restockIceCream = (num) => {
  return { type: "icecream_restocked", payload: num };
};

// reducers
// these specify how the state changes in response to actions sent to the store
// instructions on how to change the state

// application state should be represented by an object
// const initialState = {
//   numOfCakes: 10,
//   numOfIceCream: 13,
// };

// separate the state so each reducer will run when necessary rather than all together
const cakeState = {
  numOfCakes: 10,
};
const icecreamState = {
  numOfIceCream: 13,
};

// (previousState, action) => newState
const cakeReducer = (state = cakeState, action) => {
  switch (action.type) {
    case "cake_ordered":
      return {
        //   spread operator returns the other pieces of state not being affected
        ...state,
        numOfCakes: state.numOfCakes - action.payload,
      };
    case "cake_restocked":
      return {
        ...state,
        numOfCakes: state.numOfCakes + action.payload,
      };
    default:
      return state;
  }
};

const iceCreamReducer = (state = icecreamState, action) => {
  switch (action.type) {
    case "icecream_ordered":
      return {
        ...state,
        numOfIceCream: state.numOfIceCream - action.payload,
      };
      break;
    case "icecream_restocked":
      return {
        ...state,
        numOfIceCream: state.numOfIceCream + action.payload,
      };
      break;
    default:
      return state;
  }
};
//  combine the reducers to pass to the store
const reducers = combineReducers({
  cakes: cakeReducer,
  iceCream: iceCreamReducer,
});
// there is only ONE store for the application
//  it holds the applications's state by passing in the reducer
// apply your middleware to the store function
const store = createStore(reducers, applyMiddleware(logger));

// logs the current state
store.getState();

// subscribe to the changes in the store
//  it accepts a function
// store.subscribe(() => console.log("Updated state", store.getState()));

// unsubscribe the store


// const unsubscribe = store.subscribe(() =>
//   console.log("Updated state", store.getState())
// );
// with the logger passed to the middlewar we do not need a console.log
const unsubscribe = store.subscribe(() => {});

// update the state with dispatch by passing in the action creator
// store.dispatch(orderCake(2));
// store.dispatch(restockCake(3));

const actions = bindActionCreators(
  { orderCake, restockCake, orderIceCream, restockIceCream },
  store.dispatch
);
actions.orderCake(3);
actions.orderIceCream(2);
actions.restockCake(6);
actions.restockIceCream(5);
unsubscribe();
