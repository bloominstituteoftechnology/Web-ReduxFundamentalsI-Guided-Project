import React from 'react';
import Person from './Person';


export default class Container extends React.Component {
  state = {
    mentalHealth: 100,
    physicalHealth: 100,
  }

  render() {
    return (
      <div className='container'>
        <Person
          mentalHealth={this.state.mentalHealth}
          physicalHealth={this.state.physicalHealth}
        />
      </div>
    );
  }
}
