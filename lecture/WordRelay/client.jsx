// const React = require('react'); // * react element
// const ReactDom = require('react-dom'); // * react Dom create
// const { hot } = require('react-hot-loader/root'); // * 실시간 반영

// const WordRelayClass = require('./WordRelayClass');
// const Hot = hot(WordRelayClass); // * class Component

// ReactDom.render(<Hot />, document.querySelector('#root'));

import React from 'react';
import { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';

import WordRelayClass from './WordRelayClass';
import WordRelay from './WordRelay'; // * hook

// const Hot = hot(WordRelayClass); // * class Component
const Hot = hot(WordRelay); // * hook

render(<Hot />, document.querySelector('#root'));