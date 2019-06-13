# How to Run this App
  * Clone repository.
  * Run `npm install` or `yarn install`.
  * Run `npm run dev` or `yarn dev`.
  * Run `npm test` or `yarn test`.
  * Serve `index.html` using `live-server` or similar.

# Objectives
  * Learn the fundamentals of Redux.

# Requirements
We need `node` & `npm`. VSCode's `eslint` extension is recommended. Command line commands are run inside the project folder. This guide uses npm but should work the same using yarn.

# Steps
  * Install the project and install redux devtools.
  * React docs: lifting state up.
  * Limitations and problems when lifting state up.
  * Flesh out example using react component state:
  * A `Person` component has `physicalHealth` and `mentalHealth` slices of state.
  * There is a `winLottery` method that improves both slices of state.
  * There is a `slipOnBananaPeel` method that worsens `physicalHealth`.
  * There is a `watchTheNews` method that worsens `mentalHealth`.
  * Start a redux store in `App.jsx` initializing hard-coded `physicalHealth` and `mentalHealth`.
  * Wrap `Container` inside `App.jsx` with the `Provider` given by `react-redux`, passing the store.
  * See redux devtools working with the hard-coded slices.
  * Create reducing functions for each slice of state explaining requisites for reducers.
  * Refactor `App.jsx` to use `combineReducers` and the new functions.
  * Refactor `Person` to delete local state and `this.setState` logic.
  * Connect the `Person` component to have access to the store.
  * Refactor `Person` to dispatch `SLIP_ON_BANANA` etc using `this.props.dispatch`.
  * Refactor `Person` to use mapDispatchToProps.
  * Explain `mapStateToProps`.
