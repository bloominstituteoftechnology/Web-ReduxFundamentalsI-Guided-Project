import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
import Container from './components/Container';

// STEP 1 --> find out what the state of the app should look like
// { mentalHealth, physicalHealth }

// STEP 2 --> think of the actions that might happen to alter these slices
// and save them as constants (these are STRINGS we'll be using often)
const SLIP_ON_BANANA = 'SLIP_ON_BANANA';
const WATCH_THE_NEWS = 'WATCH_THE_NEWS';
const WIN_LOTTERY = 'WIN_LOTTERY';


// const store = createStore(
//   combinedState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

ReactDOM.render(
  <Container />,
  document.querySelector('#target'),
);
