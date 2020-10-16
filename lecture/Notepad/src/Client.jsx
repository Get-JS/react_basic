import React, { useContext } from 'react';
import Router from 'Router';
import ColorContext from 'contexts/color';
import SelectColors from 'components/common/SelectColors';
import MainHeader from 'components/common/MainHeader';

function Client() {
  const { state } = useContext(ColorContext);
  return (
    <>
      <SelectColors />
      <div style={{ backgroundColor: state.color }}>
        <MainHeader />
        <Router />
      </div>
    </>
  );
}

export default Client;
