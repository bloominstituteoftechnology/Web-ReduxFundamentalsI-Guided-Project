import React from 'react';
import ReactDOM from 'react-dom';
// import { createStore, combineReducers } from 'redux';
// import { Provider } from 'react-redux';
import Container from './components/Container';


// const store = createStore(
//   combinedState,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
// );

ReactDOM.render(
  <Container />,
  document.querySelector('#target'),
);
