import React from 'react';
import Router from './Router';
import useAuthCheck from 'utils/hooks/useAuthCheck';
import useAlert from 'utils/hooks/useAlert';

function App() {
  useAuthCheck();
  useAlert();
  return <Router />;
}

export default App;
