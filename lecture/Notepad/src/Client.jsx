import React, { useContext } from 'react';
import App from './App';
import ColorContext from './lib/contexts/color';
import SelectColors from './components/common/SelectColors';
import MainHeader from './components/common/MainHeader';

function Client() {
  const { state } = useContext(ColorContext);
  return (
    <>
      <SelectColors />
      <div style={{ backgroundColor: state.color }}>
        <MainHeader />
        <App />
      </div>
    </>
  );
}

export default Client;
