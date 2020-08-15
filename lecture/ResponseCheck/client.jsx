import React from 'react';
import ReactDOM from 'react-dom';
import { hot } from 'react-hot-loader/root';

// import ResponseCheckClass from './ResponseCheckClass.jsx';
import ResponseCheck from './ResponseCheck.jsx';

// const Hot = hot(ResponseCheckClass);
const Hot = hot(ResponseCheck);

ReactDOM.render(<Hot />, document.querySelector('#root'));