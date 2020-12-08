import React from 'react';
import ReactDom from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'assets/css/reset.css';
import 'assets/css/index.css';
import { HelmetProvider } from 'react-helmet-async';
import { ColorProvider } from 'utils/contexts/color';
import { getAccessToken } from 'utils/http/auth';
import store from 'store';
import App from 'App';
import * as serviceWorker from 'serviceWorker';
import { userAction } from 'redux/user';
const { userLoad, checkThunk } = userAction;

const loadUser = async () => {
  const token = getAccessToken();
  if (!!token) {
    try {
      await store.dispatch(checkThunk({ token }));
      store.dispatch(userLoad());
    } catch (error) {}
  }
};

loadUser();

ReactDom.render(
  <Provider store={store}>
    <ColorProvider>
      <BrowserRouter>
        <HelmetProvider>
          <App />
          <ToastContainer />
        </HelmetProvider>
      </BrowserRouter>
    </ColorProvider>
  </Provider>,
  document.getElementById('root'),
);

serviceWorker.unregister();
