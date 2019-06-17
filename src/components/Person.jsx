import React from 'react';
import { connect } from 'react-redux';
import { slipOnBanana, watchNews, winLottery, addFriend } from '../App';
// import { bindActionCreators } from 'redux'; // alternative means for plugging in the action creators

// DISPATCH is a prop "connected" components get
// and allows to dispatch "actions" that might trigger a state change
class Person extends React.Component {
  render() {
    return (
      <div>
        <div>physical health: {this.props.physicalHealth}</div>
        <div>mental health: {this.props.mentalHealth}</div>

        <button onClick={this.props.slipOnBanana}>Slip on banana peel</button>
        <button onClick={this.props.watchNews}>Watch the news</button>
        <button onClick={this.props.winLottery}>Win the Lottery</button>
        <button onClick={() => this.props.addFriend('Jakub')}>add friend</button>
      </div>
    );
  }
}

// STEP 7: WE NEED TO DEFAULT EXPORT THE "CONNECTED" VERSION
// when we invoke connect WE GET A HOC BACK
// STEP 8: LET'S CREATE REUSABLE FUNCTION FOR SLIPPING ON BANANA ETC
export default connect(
  // map state to props (use `state => state` if too confusing)
  state => ({
    // on the left of the colon goes the desired name for the prop
    // on the right, the slice we are going to map to that prop
    mentalHealth: state.mentalHealth,
    physicalHealth: state.physicalHealth,
  }),
  // an object with the action creators imported from app
  { slipOnBanana, watchNews, winLottery, addFriend },
)(Person);
