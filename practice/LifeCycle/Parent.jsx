import React, { Component } from "react";
import LifeCycle from "./LifeCycle";

class Parent extends Component {
  state = {
    parent: 1,
    count: 1,
  };

  render() {
    const { count, parent } = this.state;
    return (
      <>
        <button
          onClick={() => {
            this.setState({ parent: parent + 1 });
          }}
        >
          only parent update
        </button>
        <div>{parent}</div>
        <button
          onClick={() => {
            this.setState({ count: count + 1 });
          }}
        >
          parent btn count plus
        </button>
        <LifeCycle btnCount={count} />
      </>
    );
  }
}

export default Parent;
