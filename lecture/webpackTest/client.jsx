// const React = require('react'); // * react element
// const ReactDom = require('react-dom'); // * react Dom create
// const { hot } = require('react-hot-loader/root'); // * 실시간 반영

// const WordRelayClass = require('./WordRelayClass');

// const Hot = hot(WordRelayClass); // hoc

// ReactDom.render(<Hot />, document.querySelector('#root'));

import React from 'react'; // * react element
import { render } from 'react-dom'; // * react Dom create
import { hot } from 'react-hot-loader/root'; // * 실시간 반영

// import WordRelayClass from './WordRelayClass';
import WordRelay from './WordRelay'; // * hooks

// const Hot = hot(WordRelayClass); // hoc
const Hot = hot(WordRelay); // hoc

render(<Hot />, document.querySelector('#root'));