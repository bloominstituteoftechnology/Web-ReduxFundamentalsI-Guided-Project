import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Container from './components/Container';

const WATCH_NEWS = 'WATCH_NEWS';
const WIN_LOTTERY = 'WIN_LOTTERY';
const SLIP_ON_BANANA = 'SLIP_ON_BANANA';

const appState = combineReducers({ mentalHealth, physicalHealth });

function mentalHealth(state = 101, action) {
  if (action.type === WATCH_NEWS) {
    return state - 20;
  }
  if (action.type === WIN_LOTTERY) {
    return state + 30;
  }
  return state;
}

function physicalHealth(state = 99, action) {
  switch (action.type) {
    case SLIP_ON_BANANA:
      return state - 20;
    case WIN_LOTTERY:
      return state + 10;
    default:
      return state;
  }
}

const store = createStore(
  appState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

ReactDOM.render(
  <Provider store={store}>
    <Container />
  </Provider>,
  document.querySelector('#target'),
);
