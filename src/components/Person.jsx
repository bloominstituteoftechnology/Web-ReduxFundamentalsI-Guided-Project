import React from 'react';
import { connect } from 'react-redux';
import * as actions from '../actionCreators';


export class Person extends React.Component {
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

export default connect(state => state, actions)(Person);
