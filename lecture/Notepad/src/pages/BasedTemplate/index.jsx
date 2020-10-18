import React, { useState, useContext } from 'react';
import ColorContext from 'utils/contexts/color';

import { BasedTemplateBlock, NavLayout, MainLayout, Content, ConfigButtonGroup } from './styled-modules/BasedTemplate';

import Header from './container/Header';
import NavBar from 'components/organism/NavBar/index';
import ConfigBox from 'components/organism/ConfigBox/';

import Button from 'components/atoms/Button/';
import Rotate from 'components/animation/Rotate/';
import Popover from 'components/animation/Popover/';
import { MdSettings } from 'react-icons/md';

function BasedTemplate(props) {
  const { children } = props;

  const [configBoxVisable, setConfigBoxVisable] = useState(false);
  const { colorState, colorActions } = useContext(ColorContext);

  return (
    <BasedTemplateBlock bgcolor={colorState.bgColor}>
      <NavLayout>
        <NavBar />
      </NavLayout>

      <MainLayout>
        <Header />
        <Content>{children}</Content>
      </MainLayout>

      <ConfigButtonGroup>
        <Button
          cyan
          onClick={() => {
            setConfigBoxVisable((configBoxVisable) => !configBoxVisable);
          }}
        >
          <Rotate rotate={configBoxVisable ? 35 : 0}>
            <MdSettings size={20} />
          </Rotate>
        </Button>
        <Popover visiable={configBoxVisable}>
          <ConfigBox {...colorState} {...colorActions} />
        </Popover>
      </ConfigButtonGroup>
    </BasedTemplateBlock>
  );
}

export default BasedTemplate;
