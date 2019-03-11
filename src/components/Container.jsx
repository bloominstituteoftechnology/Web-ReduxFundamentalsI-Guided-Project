import React from 'react';
import Person from './Person';


export default class Container extends React.Component {
  state = {
    mentalHealth: 100,
    physicalHealth: 100,
  }

  slipOnBanana = () => {
    this.setState(
      st => ({ physicalHealth: st.physicalHealth - 20 }),
    );
  }

  watchTheNews = () => {
    this.setState(
      st => ({ mentalHealth: st.mentalHealth - 20 }),
    );
  }

  winTheLottery = () => {
    this.setState(
      st => ({
        mentalHealth: st.mentalHealth + 30,
        physicalHealth: st.physicalHealth + 10,
      }),
    );
  }

  render() {
    return (
      <div className='container'>
        <Person
          mentalHealth={this.state.mentalHealth}
          physicalHealth={this.state.physicalHealth}
          slipOnBanana={this.slipOnBanana}
          watchTheNews={this.watchTheNews}
          winTheLottery={this.winTheLottery}
        />
      </div>
    );
  }
}
