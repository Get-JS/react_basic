// const React = require('react');
// const { useState } = require('react');
import React, { useState ,useRef } from 'react';

const WordRelay = () => {
  const [word, setWord] = useState('start');
  const [value, setValue] = useState('');
  const [result, setResult] = useState('');
  const inputEl = useRef(null);

  const onSubmitForm = (e) => {
    e.preventDefault();
    if (word[word.length - 1] === value[0]) {
      setResult('success');
      setWord(value);
      setValue('');
      inputEl.current.focus();
    } else {
      setResult('fail');
      setValue('');
      inputEl.current.focus();
    }
  };

  const onChangeInput = (e) => {
    setValue(e.currentTarget.value)
  }

  return (
    <>
      <div>{word}</div>
      <form onSubmit={onSubmitForm}>
        <input ref={inputEl} value={value} onChange={onChangeInput} />
        <button>start!!!</button>
      </form>
      <div>{result}</div>
    </>
  );
};
// module.exports = WordRelay;
export default WordRelay;