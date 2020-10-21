import styled from 'styled-components';

export const BasedTemplateBlock = styled.div`
  background: ${(props) => props.bgcolor || 'white'};
`;

export const NavLayout = styled.div`
  position: fixed;
  background: rgb(247, 246, 243);
  width: 12rem;
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainLayout = styled.div`
  padding-left: 12rem;
  display: flex;
  flex-flow: column;
  width: 100%;
  @media (max-width: 768px) {
    padding-left: 0rem;
  }
`;

export const Content = styled.div`
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  border-radius: 4px;
  overflow: hidden;
  width: 100%;
  height: 100rem;
`;

export const ConfigButtonGroup = styled.div`
  position: fixed;
  top: 8rem;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 1rem;
`;
