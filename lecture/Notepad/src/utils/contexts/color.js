import React, { createContext, useState } from 'react';

const ColorContext = createContext({
  colorState: { bgColor: 'white' },
  colorActions: {
    setBgColor: () => {},
  },
});

const ColorProvider = ({ children }) => {
  const [bgColor, setBgColor] = useState('white');

  const value = {
    colorState: { bgColor },
    colorActions: { setBgColor },
  };

  return <ColorContext.Provider value={value}>{children}</ColorContext.Provider>;
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;
