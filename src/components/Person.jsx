import React from 'react';


export default class Person extends React.Component {
  state = {
    mentalHealth: 100,
    physicalHealth: 100,
  }

  slipOnBanana = () => {
    this.setState(st => ({
      physicalHealth: st.physicalHealth - 10,
    }));
  }

  screwUpTest = () => {
    this.setState(st => ({
      mentalHealth: st.mentalHealth - 20,
    }));
  }

  winLottery = () => {
    this.setState(st => ({
      mentalHealth: st.mentalHealth + 20,
      physicalHealth: st.physicalHealth + 10,
    }));
  }

  render() {
    return (
      <div>
        <div>mental health: {this.state.mentalHealth}</div>
        <div>physical health: {this.state.physicalHealth}</div>

        <button onClick={this.askPersonOut}>Ask other person out</button>
        <button onClick={this.slipOnBanana}>Slip on banana</button>

      </div>
    );
  }
}
