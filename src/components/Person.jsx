import React from 'react';

export default class Person extends React.Component {
  render() {
    return (
      <div>
        <div>physical health: {this.props.physicalHealth}</div>
        <div>mental health: {this.props.mentalHealth}</div>

        <button onClick={this.props.slipOnBanana}>
          Slip on banana peel
        </button>

        <button onClick={this.props.watchTheNews}>
          Watch the news
        </button>

        <button onClick={this.props.winTheLottery}>
          Win the Lottery
        </button>
      </div>
    );
  }
}
