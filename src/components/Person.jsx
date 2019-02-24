import React from 'react';
import { connect } from 'react-redux';


export class Person extends React.Component {
  // state = {
  //   mentalHealth: 100,
  //   physicalHealth: 100,
  // }

  slipOnBanana = () => {
    this.props.dispatch({ type: 'SLIP_BANANA' });
    // this.setState(st => ({
    //   physicalHealth: st.physicalHealth - 10,
    // }));
  }

  screwUpTest = () => {
    this.props.dispatch({ type: 'SCREW_UP_TEST' });
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

        <button onClick={this.slipOnBanana}>Slip on banana</button>
        <button onClick={this.screwUpTest}>Screw up test</button>
        <button onClick={this.winLottery}>Win Lottery</button>
      </div>
    );
  }
}

export default connect(st => st)(Person);
