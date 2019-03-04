import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


export default class Person extends React.Component {
  state = {
    mentalHealth: 100,
    physicalHealth: 100,
  }

  render() {
    return (
      <div>
        <div>physical health: {this.state.physicalHealth}</div>
        <div>mental health: {this.state.mentalHealth}</div>

        <button>Slip on banana peel</button>
        <button>Watch the news</button>
        <button>Win the Lottery</button>
      </div>
    );
  }
}
