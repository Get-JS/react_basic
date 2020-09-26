import React, { useContext } from 'react';
import '../assets/scss/selectColorBox/SelectColorBox.scss';
import ColorContext from '../lib/contexts/color';
import { MdCheckBox } from 'react-icons/md';

function SelectColors() {
  const { state, actions } = useContext(ColorContext);
  return (
    <div className="SelectColorBox">
      <h2>background colors select</h2>
      <div className="selectBox">
        {COLORS.map((color) => (
          <div
            key={color}
            style={{ background: color }}
            className={'item'}
            onClick={() => actions.setColor(color)}
          >
            {state.color === color ? <MdCheckBox /> : ''}
          </div>
        ))}
      </div>
    </div>
  );
}

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
export default SelectColors;
