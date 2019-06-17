import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Container from './components/Container';

// STEP 1 --> find out what the state of the app should look like
// { mentalHealth, physicalHealth, friends }

// STEP 2 --> think of the actions that might happen to alter these slices
// and save them as constants (these are STRINGS we'll be using often)
export const SLIP_ON_BANANA = 'SLIP_ON_BANANA';
export const WATCH_THE_NEWS = 'WATCH_THE_NEWS';
export const WIN_LOTTERY = 'WIN_LOTTERY';
export const ADD_FRIEND = 'ADD_FRIEND';
// import { SLIP_ON_BANANA } from './actionTypes'; // from someplace else
// import * as actionTypes from './actionTypes'; // from someplace else

// STEP 3 --> create ONE function per SLICE of state (2)
// explaining how each of those 3 action types affect the given slice

// - takes slice of state (with a default/initial)
// - takes an action (with a type property)
// - RETURNS NEW STATE (SLICE) depending on the type of action
function mentalHealthReducer(slice = 100, action) {
  if (action.type === WATCH_THE_NEWS) {
    return slice - 30;
  }
  if (action.type === WIN_LOTTERY) {
    return slice + 50;
  }
  return slice;
}

function physicalHealthReducer(slice = 150, action) {
  if (action.type === SLIP_ON_BANANA) {
    return slice - 30;
  }
  if (action.type === WIN_LOTTERY) {
    return slice + 20;
  }
  return slice;
}

// THE NEW FRIEND OBJECT COMES INSIDE OF action.payload
const friendsReducer = (slice = [], action) => {
  switch (action.type) {
    case ADD_FRIEND:
      return [...slice, action.payload];
    default:
      return slice;
  }
};

// function friendsReducer(slice = [], action) {
//   if (action.type === ADD_FRIEND) {
//     return slice.concat(action.payload)
//   }
//   return slice;
// }

// STEP 4 COMBINE THOSE REDUCERS INTO ONE REDUCER
const combinedReducer = combineReducers({
  mentalHealth: mentalHealthReducer,
  physicalHealth: physicalHealthReducer,
  friends: friendsReducer,
});

// STEP 5 CREATE THE REDUX STORE!!!!!!!!!
const store = createStore(
  combinedReducer, // IS THE RESULT OF USING combineReducers
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// STEP 6 INJECT THE STORE INTO THE APP
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector('#target'),
);
