import styled from 'styled-components';
import Responsive from 'components/animation/Responsive';
import palette from 'utils/styles/palette';

export const PostSection = styled(Responsive)`
  width: 680px;
  padding-top: 5rem;
  padding-bottom: 5rem;
`;

export const PostHead = styled.div`
  border-bottom: 1px solid ${palette.gray[2]};
  padding-bottom: 3rem;
  margin-bottom: 3rem;
  h1 {
    font-size: 3rem;
    line-height: 1.5;
    margin: 0;
  }
`;

export const PostContent = styled.div`
  font-size: 1.3125rem;
  color: ${palette.gray[8]};
`;
