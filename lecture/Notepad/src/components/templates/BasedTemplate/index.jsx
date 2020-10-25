import React, { useState, useContext } from 'react';
import { BasedTemplateContainer, NavWrapper, MainWrapper, ContentWrapper, ConfigBoxWrapper } from './styled';
import Rotate from 'components/animation/Rotate';
import Popover from 'components/animation/Popover';
import Button from 'components/atoms/Button';
import NavBar from 'components/organism/NavBar';
import Header from 'components/organism/Header';
import ConfigBox from 'components/organism/ConfigBox';
import { MdSettings } from 'react-icons/md';
import ColorContext from 'utils/contexts/color';

function BasedTemplate({ contentTitle, children }) {
  const [configBoxVisable, setConfigBoxVisable] = useState(false);
  const { colorState } = useContext(ColorContext);

  return (
    <BasedTemplateContainer bgcolor={colorState.bgColor}>
      <NavWrapper>
        <NavBar />
      </NavWrapper>

      <MainWrapper>
        <Header />
        <ContentWrapper>
          <h1>{contentTitle}</h1>
          {children}
        </ContentWrapper>
      </MainWrapper>

      <ConfigBoxWrapper>
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
          <ConfigBox />
        </Popover>
      </ConfigBoxWrapper>
    </BasedTemplateContainer>
  );
}

export default BasedTemplate;
