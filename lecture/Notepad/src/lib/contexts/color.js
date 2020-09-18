import React, { createContext, useState } from 'react';

const ColorContext = createContext({
  state: { color: '#e9ecef' },
  actions: {
    setColor: () => { }
  }
});

const ColorProvider = ({ children }) => {
  const [color, setColor] = useState('#e9ecef');

  const value = {
    state: { color },
    actions: { setColor }
  };

  return (
    <ColorContext.Provider value={value}>{children}</ColorContext.Provider>
  );
};

const { Consumer: ColorConsumer } = ColorContext;

export { ColorProvider, ColorConsumer };

export default ColorContext;