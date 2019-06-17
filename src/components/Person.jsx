import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// DISPATCH is a prop "connected" components get
// and allows to dispatch "actions" that might trigger a state change
class Person extends React.Component {
  slipOnBanana = () => {
    this.props.dispatch({ type: 'SLIP_ON_BANANA' });
  }

  watchNews = () => {
    this.props.dispatch({ type: 'WATCH_THE_NEWS' });
  }

  winLottery = () => {
    this.props.dispatch({ type: 'WIN_LOTTERY' });
  }

  render() {
    return (
      <div>
        <div>physical health: {this.props.physicalHealth}</div>
        <div>mental health: {this.props.mentalHealth}</div>

        <button onClick={this.slipOnBanana}>Slip on banana peel</button>
        <button onClick={this.watchNews}>Watch the news</button>
        <button onClick={this.winLottery}>Win the Lottery</button>
      </div>
    );
  }
}

// STEP 1: WE NEED TO DEFAULT EXPORT THE "CONNECTED" VERSION
// when we invoke connect WE GET A HOC BACK
export default connect(
  state => state, // first arg is something that filters out the slices we don't need FUNCTION
)(Person);
