import styled from 'styled-components';
import Responsive from 'components/animation/Responsive/';

export const BasedTemplateContainer = styled.div`
  background: ${(props) => props.bgcolor || 'white'};
`;

export const NavWrapper = styled.div`
  position: fixed;
  background: rgb(247, 246, 243);
  width: 12rem;
  height: 100vh;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainWrapper = styled.div`
  padding-left: 12rem;
  display: flex;
  flex-flow: column;
  width: 100%;
  @media (max-width: 768px) {
    padding-left: 0rem;
  }
`;

export const ContentWrapper = styled(Responsive)`
  margin-left: auto;
  margin-right: auto;
  margin-top: 3rem;
  padding: 3rem;
  overflow: hidden;
  height: 100rem;
  border: 1px solid black;
  border-radius: 30px;
`;

export const ConfigBoxWrapper = styled.div`
  position: fixed;
  top: 8rem;
  right: 0;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-right: 1rem;
`;
