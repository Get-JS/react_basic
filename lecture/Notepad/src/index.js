import React from 'react';
import ReactDom from 'react-dom';
import { Provider } from 'react-redux';
import store from './modules'
import './assets/css/reset.css';
import './assets/css/index.css';
import Client from './Client';
import { ColorProvider } from './lib/contexts/color';
import * as serviceWorker from './serviceWorker';

ReactDom.render(
  <Provider store={store}>
    <ColorProvider>
      <Client />
    </ColorProvider>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
