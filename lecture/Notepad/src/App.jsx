import React from 'react';
import Router from './Router';
import useAlert from 'utils/hooks/useAlert';

function App() {
  useAlert();
  return <Router />;
}

export default App;
