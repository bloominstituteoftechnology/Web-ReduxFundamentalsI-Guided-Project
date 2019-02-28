import React from 'react';
import { connect } from 'react-redux';


export class Person extends React.Component {
  // state = {
  //   mentalHealth: 100,
  //   physicalHealth: 100,
  // }

  slipOnBananaPeel = () => {
    this.props.dispatch({ type: 'SLIP_ON_BANANA_PEEL' });
    // this.setState(st => ({
    //   physicalHealth: st.physicalHealth - 10,
    // }));
  }

  watchTheNews = () => {
    this.props.dispatch({ type: 'WATCH_THE_NEWS' });
    // this.setState(st => ({
    //   mentalHealth: st.mentalHealth - 20,
    // }));
  }

  winLottery = () => {
    this.props.dispatch({ type: 'WIN_LOTTERY' });
    // this.setState(st => ({
    //   mentalHealth: st.mentalHealth + 20,
    //   physicalHealth: st.physicalHealth + 10,
    // }));
  }

  render() {
    return (
      <div>
        <div>physical health: {this.props.physicalHealth}</div>
        <div>mental health: {this.props.mentalHealth}</div>

        <button onClick={this.slipOnBananaPeel}>Slip on banana</button>
        <button onClick={this.watchTheNews}>Screw up test</button>
        <button onClick={this.winLottery}>Win Lottery</button>
      </div>
    );
  }
}

export default connect(st => st)(Person);
