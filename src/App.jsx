import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Container from './components/Container';


function physicalHealth(state = 100, action) {
  switch (action.type) {
    case 'SLIP_BANANA':
      return state - 10;
    case 'WIN_LOTTERY':
      return state + 10;
    default:
      return state;
  }
}

function mentalHealth(state = 100, action) {
  switch (action.type) {
    case 'SCREW_UP_TEST':
      return state - 20;
    case 'WIN_LOTTERY':
      return state + 20;
    default:
      return state;
  }
}

const combinedState = combineReducers(
  { physicalHealth, mentalHealth },
);

const store = createStore(
  combinedState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>, document.querySelector('#target'),
);
