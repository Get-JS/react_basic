import styled from 'styled-components';
import Responsive from 'components/animation/Responsive';

export const Container = styled(Responsive)`
  width: 500px;
  @media (max-width: 768px) {
    width: 300px;
  }
  .center {
    display: flex;
    justify-content: center;
  }
`;
