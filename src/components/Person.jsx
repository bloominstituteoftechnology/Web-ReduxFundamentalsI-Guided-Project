import React from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';


const slipOnBananaPeel = () => ({ type: 'SLIP_ON_BANANA_PEEL' });
const watchTheNews = () => ({ type: 'WATCH_THE_NEWS' });
const winLottery = () => ({ type: 'WIN_LOTTERY' });

export class Person extends React.Component {
  // state = {
  //   mentalHealth: 100,
  //   physicalHealth: 100,
  // }

  // slipOnBananaPeel = () => {
  //   this.props.dispatch({ type: 'SLIP_ON_BANANA_PEEL' });
  //   // this.setState(st => ({
  //   //   physicalHealth: st.physicalHealth - 10,
  //   // }));
  // }

  // watchTheNews = () => {
  //   this.props.dispatch({ type: 'WATCH_THE_NEWS' });
  //   // this.setState(st => ({
  //   //   mentalHealth: st.mentalHealth - 20,
  //   // }));
  // }

  // winLottery = () => {
  //   this.props.dispatch({ type: 'WIN_LOTTERY' });
  //   // this.setState(st => ({
  //   //   mentalHealth: st.mentalHealth + 20,
  //   //   physicalHealth: st.physicalHealth + 10,
  //   // }));
  // }

  render() {
    return (
      <div>
        <div>physical health: {this.props.physicalHealth}</div>
        <div>mental health: {this.props.mentalHealth}</div>

        <button onClick={this.props.slipOnBananaPeel}>Slip on banana peel</button>
        <button onClick={this.props.watchTheNews}>Watch the news</button>
        <button onClick={this.props.winLottery}>Win the Lottery</button>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    slipOnBananaPeel,
    watchTheNews,
    winLottery,
  }, dispatch);
}

function mapStateToProps(state) {
  return {
    mentalHealth: state.stats.mentalHealth,
    physicalHealth: state.stats.physicalHealth,
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Person);
