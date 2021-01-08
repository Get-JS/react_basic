import React, { Component } from "react";

class LifeCycle extends Component {
  state = {
    count: 1,
  };

  static getDerivedStateFromProps(nextProps, nextState) {
    console.log("getDerivedStateFromProps");
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    if (nextProps.btnCount >= 2) return { isBtnUpdate: true };
    return null;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("shouldComponentUpdate");
    console.log("nextProps", nextProps);
    console.log("nextState", nextState);
    console.log("this.props", this.props);
    console.log("this.state", this.state);
    return true;
  }

  componentDidMount() {
    console.log("componentDidMount");
    console.log("this.state", this.state);
    console.log("this.props", this.props);
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("this.props", this.props);
    console.log("this.state", this.state);
    return false;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("componentDidUpdate");
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("snapshot", snapshot);
    console.log("this.props", this.props);
    console.log("this.state", this.state);
  }

  componentWillUnmount() {
    console.log("componentWillUnmount");
    console.log("this.state", this.state);
    console.log("this.props", this.props);
  }

  render() {
    console.log("render");
    const { count } = this.state;
    return (
      <div>
        LifeCycle render Count =&gt; {count}
        <button onClick={() => this.setState({ count: count + 1 })}>
          update
        </button>
      </div>
    );
  }
}

export default LifeCycle;
