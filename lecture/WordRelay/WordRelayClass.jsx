// const React = require('react');
import React from 'react';
const { Component } = React;

class WordRelay extends Component {
  state = { // class field
    word: 'start',
    value: '',
    result: ''
  };
  input; // this.input을 생성

  onSubmitForm = (e) => {
    e.preventDefault();
    if (this.state.word[this.state.word.length - 1] === this.state.value[0]) {
      this.setState({
        result: 'success',
        word: this.state.value,
        value: ''
      });
      this.input.focus();
    } else {
      this.setState({
        result: 'fail',
        value: ''
      });
      this.input.focus();
    }
  };

  onChangeInput = (e) => {
    this.setState({ value: e.target.value });
  };

  onRefInput = (ref) => {
    this.input = ref;
  };

  render() {
    return (
      <>
        <div>{this.state.word}</div>
        <form onSubmit={this.onSubmitForm}>
          <input ref={this.onRefInput} value={this.state.value} onChange={this.onChangeInput} />
          <button>check!!!</button>
        </form>
        <div>{this.state.result}</div>
      </>
    );
  }
}
// module.exports = WordRelay;
export default WordRelay;