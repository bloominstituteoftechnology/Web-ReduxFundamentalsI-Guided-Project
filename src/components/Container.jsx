import React from 'react';
import Person from './Person';


export default class Container extends React.Component {
  render() {
    return (
      <div className='container'>
        <Person />
      </div>
    );
  }
}
