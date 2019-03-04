# How to Run this App
  * Clone repository.
  * Run `npm install` or `yarn install`.
  * Run `npm run dev` or `yarn run dev`.
  * Run `npm test` or `yarn test`.
  * Serve `index.html` using `live-server` or similar.

# Objectives
  * Learn the fundamentals of Redux.

# Requirements
We need `node` & `npm`, as well as packages `live-server` and `eslint` installed _globally_. VSCode's `eslint` extension is recommended. Command line commands are run inside the project folder. This guide uses npm but should work the same using yarn.

# Steps
  * Install the project and install redux devtools.
  * React docs: lifting state up.
  * Limitations and problems when lifting state up.
  * Flesh out example using react state (see working demo).
  * Start a redux store.
  * Create reducing functions.
  * Connect the Person component and have access to the store.
  * Refactor Person's methods so they dispatch an action.
  * Refactor Person to use mapDispatchToProps.
  * Refactor the rootReducer so nesting of state is different.
  * Introduce mapStateToProps to deal with the new structure of state.
