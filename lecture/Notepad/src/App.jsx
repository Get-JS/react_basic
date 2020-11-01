import React from 'react';
import Router from './Router';
import useAuthCheck from 'utils/hooks/useAuthCheck';

function App() {
  useAuthCheck();

  return <Router />;
}

export default App;
