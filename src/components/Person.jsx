import React from 'react';


export default class Person extends React.Component {
  state = {
    mentalHealth: 100,
    physicalHealth: 100,
  }

  askPersonOut = () => {
    const success = (Math.floor(Math.random() * 2) % 2) === 0;

    if (success) {
      this.setState(st => ({
        mentalHealth: st.mentalHealth + 30,
        physicalHealth: st.physicalHealth + 10,
      }));
    } else {
      this.setState(st => ({
        mentalHealth: st.mentalHealth - 40,
        physicalHealth: st.physicalHealth - 5,
      }));
    }
  }

  slipOnBanana = () => {
    this.setState(st => ({
      physicalHealth: st.physicalHealth - 10,
    }));
  }

  screwUpTest = () => {
    this.setState(st => ({
      physicalHealth: st.physicalHealth - 20,
    }));
  }

  winLottery = () => {
    this.setState(st => ({
      mentalHealth: st.mentalHealth + 20,
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
