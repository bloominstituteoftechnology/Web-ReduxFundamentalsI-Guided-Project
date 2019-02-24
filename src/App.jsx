import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers } from 'redux';
import { Provider } from 'react-redux';
import Container from './components/Container';


function physicalHealth(state = 100, action) {
  return state;
}

function mentalHealth(state = 100, action) {
  return state;
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
