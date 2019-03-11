import React from 'react';
import Person from './Person';


export default class Container extends React.Component {
  state = {
    mentalHealth: 100,
    physicalHealth: 100,
  }

  slipOnBanana = () => {
    console.log('slip on banana');
  }

  watchTheNews = () => {
    console.log('watching the news');
  }

  winTheLottery = () => {
    console.log('winning the lottery');
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
