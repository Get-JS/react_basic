import React, { useContext } from 'react';
import Router from './Router';
import ColorContext from './lib/contexts/color';
import SelectColors from './components/SelectColors';

function Client() {
  const { state } = useContext(ColorContext);
  return (
    <>
      <SelectColors />
      <div style={{ backgroundColor: state.color }}>
        <Router />
      </div>
    </>
  );
}

export default Client;
