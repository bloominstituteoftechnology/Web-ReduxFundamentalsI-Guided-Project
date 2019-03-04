import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Container from './components/Container';

// 1- function that returns state
function combinedState() {
  return {
    mentalHealthGaga: 100,
    physicalHealthGaga: 100,
  };
}

// 2- let's actually make that state object
const store = createStore(
  combinedState, // becomes a function that takes state object, and a yell, and returns new state
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

// 3- we need to wrap container in a provider
ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector('#target'),
);
