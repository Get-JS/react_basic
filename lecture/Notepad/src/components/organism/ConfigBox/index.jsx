import React from 'react';
import { ConfigBoxBlock, ConfigBoxGroup, SelectBox, ColorBox } from './style-modules/ConfigBox';
import { MdCheck } from 'react-icons/md';
import { AiFillFormatPainter } from 'react-icons/ai';

function ConfigBox(props) {
  const { bgColor, setBgColor } = props;

  return (
    <ConfigBoxBlock>
      <ConfigBoxGroup>
        <AiFillFormatPainter size={20} color={bgColor} />
        <h4>Background color select</h4>
        <SelectBox>
          {COLORS.map((color) => (
            <ColorBox key={color} style={{ background: color }} onClick={() => setBgColor(color)}>
              {bgColor === color && <MdCheck />}
            </ColorBox>
          ))}
        </SelectBox>
      </ConfigBoxGroup>
    </ConfigBoxBlock>
  );
}

const COLORS = ['#e9ecef', '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22', '#e74c3c'];
export default ConfigBox;
