// const React = require('react');
import React, { Component } from 'react';

class WordRelay extends Component {
  state = { // class field
    word: 'start',
    value: '',
    result: ''
  };

  input = null; // this.input을 생성

  onSubmitForm = (e) => {
    const {word, value} = this.state;
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      this.setState({
        result: 'success',
        word: value,
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
    const { onSubmitForm, onRefInput, onChangeInput } = this;
    const { word, value, result } = this.state;
    return (
      <>
        <div>{word}</div>
        <form onSubmit={onSubmitForm}>
          <input ref={onRefInput} value={value} onChange={onChangeInput} />
          <button>check!!!</button>
        </form>
        <div>{result}</div>
      </>
    );
  }
}
// module.exports = WordRelay;
export default WordRelay;