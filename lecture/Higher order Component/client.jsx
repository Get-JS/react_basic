import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

import Parent from './Parent';

const Hot = hot(Parent);

ReactDOM.render(<Hot />, document.querySelector('#root'));