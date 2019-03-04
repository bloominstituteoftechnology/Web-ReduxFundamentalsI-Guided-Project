import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


export class Person extends React.Component {
  slipOnBananaPeel = () => {
    this.props.dispatch({ type: 'SLIP_ON_BANANA_PEEL' });
  }

  watchTheNews = () => {
    this.props.dispatch({ type: 'WATCH_THE_NEWS' });
  }

  winTheLottery = () => {
    this.props.dispatch({ type: 'WIN_THE_LOTTERY' });
  }

  render() {
    console.log(this.props);

    return (
      <div>
        <div>physical health: {this.props.physicalHealth}</div>
        <div>mental health: {this.props.mentalHealth}</div>
        {/* children would get slices of state, and methods to change state */}
        <button onClick={this.slipOnBananaPeel}>Slip on banana peel</button>
        <button onClick={this.watchTheNews}>Watch the news</button>
        <button onClick={this.winTheLottery}>Win the Lottery</button>
      </div>
    );
  }
}

export default connect(st => st)(Person);
