import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import 'assets/css/reset.css';
import 'assets/css/index.css';
import { ColorProvider } from 'lib/contexts/color';
import store from 'store';
import Client from 'Client';
import * as serviceWorker from 'serviceWorker';

ReactDom.render(
  <Provider store={store}>
    <ColorProvider>
      <BrowserRouter>
        <Client />
      </BrowserRouter>
    </ColorProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
