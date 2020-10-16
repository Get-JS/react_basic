import React, { useContext } from 'react';
import { BasedTemplateBlock } from './styled-modules/BasedTemplate';
import Header from './container/Header';
import ColorContext from 'contexts/color';

function BasedTemplate(props) {
  const { children } = props;
  const { state } = useContext(ColorContext);

  return (
    <BasedTemplateBlock>
      <Header />
      <div className="content" style={{ backgroundColor: state.color }}>
        {children}
      </div>
    </BasedTemplateBlock>
  );
}

export default BasedTemplate;
