import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Container from './components/Container';


// The return value of combineReducers
// is a monster function that takes old state and an action,
// and returns new state.
const rootReducer = combineReducers({ mentalHealth, physicalHealth });

// Reducing function
// Takes old slice of state and an action,
// and returns the new slice of state.
// This function probably lives in its own file.
function mentalHealth(state = 100, action) {
  switch (action.type) {
    case 'WATCH_THE_NEWS':
      return state - 20;
    case 'WIN_THE_LOTTERY':
      return state + 30;
    default:
      return state;
  }
}

// Reducing function
// Takes old slice of state and an action,
// and returns the new slice of state.
// This function probably lives in its own file.
function physicalHealth(state = 100, action) {
  switch (action.type) {
    case 'SLIP_ON_BANANA_PEEL':
      return state - 20;
    case 'WIN_THE_LOTTERY':
      return state + action.howMuch;
    default:
      return state;
  }
}

const store = createStore(
  rootReducer, // function that takes state and an action, and returns new state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// We need to wrap container in a provider
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector('#target'),
);
