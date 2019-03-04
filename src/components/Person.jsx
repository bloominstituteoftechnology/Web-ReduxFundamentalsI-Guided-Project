import React from 'react';
// import { connect } from 'react-redux';
// import { bindActionCreators } from 'redux';


export default class Person extends React.Component {
  state = {
    mentalHealth: 100,
    physicalHealth: 100,
  }

  slipOnBananaPeel = () => {
    this.setState(st => ({
      physicalHealth: st.physicalHealth - 20,
    }));
  }

  watchTheNews = () => {
    this.setState(st => ({
      mentalHealth: st.mentalHealth - 20,
    }));
  }

  winTheLottery = () => {
    this.setState(st => ({
      mentalHealth: st.mentalHealth + 30,
      physicalHealth: st.physicalHealth + 10,
    }));
  }

  render() {
    return (
      <div>
        <div>physical health: {this.state.physicalHealth}</div>
        <div>mental health: {this.state.mentalHealth}</div>

        <button onClick={this.slipOnBananaPeel}>Slip on banana peel</button>
        <button onClick={this.watchTheNews}>Watch the news</button>
        <button onClick={this.winTheLottery}>Win the Lottery</button>
      </div>
    );
  }
}
