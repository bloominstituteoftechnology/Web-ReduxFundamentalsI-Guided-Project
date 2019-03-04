import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

// ACTION CREATORS (should probably live on their own file)
// DO NOT USE THEM DIRECTLY!!! THEY MUST BE MAPPED TO PROPS
// USING A mapDispatchToProps FUNCTION !!!
// returns an action with a type
const slipOnBananaPeel = () => ({
  type: 'SLIP_ON_BANANA_PEEL',
});

// returns an action with a type
const watchTheNews = () => ({
  type: 'WATCH_THE_NEWS',
});

// returns an action with a type and a payload
const winTheLottery = howMuch => ({
  type: 'WIN_THE_LOTTERY',
  howMuch,
});

// Person can assume all slices of state and all action creators
// come from props. The non-connected Person is totally reusable (can also be used without redux).
export class Person extends React.Component {
  render() {
    return (
      <div>
        <div>physical health: {this.props.physicalHealth}</div>
        <div>mental health: {this.props.mentalHealth}</div>
        {/* children would get slices of state, and methods to change state */}

        <button onClick={this.props.slipOnBananaPeel}>Slip on banana peel</button>
        <button onClick={this.props.watchTheNews}>Watch the news</button>
        <button onClick={() => this.props.winTheLottery(15)}>Win the Lottery</button>
      </div>
    );
  }
}

// Want to alias the slice of state?
// Want to plug some calculation before handing the data to the component?
// Do it here!
function mapStateToProps(state) {
  return {
    physicalHealth: state.physicalHealth,
    mentalHealth: state.mentalHealth,
  };
}

// Here we "plug" the action creators
// So redux knows about them, and so they are available
// from props, and helps us avoid having
// to use "this.props.dispatch" within the component
function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    slipOnBananaPeel,
    watchTheNews,
    winTheLottery,
  }, dispatch);
}

// connect returns a HOC, which in turn returs a given component "enriched"
// with the props selected in mapStateToProps, and the action creators
// selected in mapDispatchToProps
export default connect(mapStateToProps, mapDispatchToProps)(Person);
