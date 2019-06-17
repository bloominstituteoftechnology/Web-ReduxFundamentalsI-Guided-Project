import React from 'react';
import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';

// STEP 1: WE NEED TO DEFAULT EXPORT THE "CONNECTED" VERSION
class Person extends React.Component {
  render() {
    return (
      <div>
        <div>physical health: {this.props.physicalHealth}</div>
        <div>mental health: {this.props.mentalHealth}</div>

        <button onClick={this.props.slipOnBanana}>Slip on banana peel</button>
        <button>Watch the news</button>
        <button>Win the Lottery</button>
      </div>
    );
  }
}

// when we invoke connect WE GET A HOC BACK
export default connect(
  state => state, // first arg is something that filters out the slices we don't need FUNCTION
)(Person);
