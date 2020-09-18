import React, { useContext } from 'react';
import ColorContext from '../lib/contexts/color';

const COLORS = [
  '#e9ecef',
  'red',
  'orange',
  'yellow',
  'green',
  'blue',
  'indigo',
  'violet',
];

function SelectColors() {
  const { actions } = useContext(ColorContext);
  return (
    <div style={{ position: 'absolute', right: '0px', top: '0px' }}>
      <h2>background colors select</h2>
      <div style={{ display: 'flex' }}>
        {COLORS.map((color) => (
          <div
            key={color}
            style={{
              background: color,
              border: '1px solid',
              width: '24px',
              height: '24px',
              cursor: 'pointer',
            }}
            onClick={() => actions.setColor(color)}
          />
        ))}
      </div>
    </div>
  );
}

export default SelectColors;
