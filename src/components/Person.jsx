import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


export default class Person extends React.Component {
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
