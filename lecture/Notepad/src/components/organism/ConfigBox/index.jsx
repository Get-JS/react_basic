import React, { useContext } from 'react';
import { ConfigBoxContainer, ConfigBoxWrapper, ColorSelectWrapper, ColorGroup } from './styled';
import { MdCheck } from 'react-icons/md';
import { GiPaintRoller } from 'react-icons/gi';
import ColorContext from 'utils/contexts/color';

function ConfigBox() {
  const { colorState, colorActions } = useContext(ColorContext);

  return (
    <ConfigBoxContainer>
      <ConfigBoxWrapper>
        <GiPaintRoller size={20} color={colorState.bgColor} />
        <h4>Background color select</h4>
        <ColorSelectWrapper>
          {COLORS.map((color) => (
            <ColorGroup key={color} style={{ background: color }} onClick={() => colorActions.setBgColor(color)}>
              {colorState.bgColor === color && <MdCheck />}
            </ColorGroup>
          ))}
        </ColorSelectWrapper>
      </ConfigBoxWrapper>
    </ConfigBoxContainer>
  );
}

const COLORS = ['white', '#bfb9b9', '#1abc9c', '#2ecc71', '#3498db', '#9b59b6', '#f1c40f', '#e67e22'];
export default ConfigBox;
