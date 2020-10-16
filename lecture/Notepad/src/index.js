import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'assets/css/reset.css';
import 'assets/css/index.css';
import { ColorProvider } from 'contexts/color';
import store from 'store';
import Router from 'Router';
import * as serviceWorker from 'serviceWorker';

ReactDom.render(
  <Provider store={store}>
    <ColorProvider>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ColorProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
