import React from 'react';
import ReactDOM , { render } from 'react-dom';
import { hot } from 'react-hot-loader/root';

import NumberBaseballClass from './NumberBaseballClass';
import NumberBaseball from './NumberBaseball';

// const Hot = hot(NumberBaseballClass); // * class component
const Hot = hot(NumberBaseball); // * hoook

render(<Hot />, document.querySelector('#root'));