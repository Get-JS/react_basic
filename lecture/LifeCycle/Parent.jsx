import React, { Component } from 'react';
import LifeCycle from './LifeCycle';

class Parent extends Component {
  state = {
    count : 1
  };

  render() {
    const {count} = this.state;
    return (
      <>
        <button onClick={() => {this.setState({count : count + 1})}}>parent btn count plus</button>
        <LifeCycle btnCount={count}/>
      </>
    )
  }
}

export default Parent;