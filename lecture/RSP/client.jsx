import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

// import RSPClass from './RSPClass.jsx';
import RSP from './RSP.jsx';

// const Hot = hot(RSPClass);
const Hot = hot(RSP);

ReactDOM.render(<Hot />, document.querySelector('#root'));