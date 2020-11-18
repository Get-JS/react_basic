import styled from 'styled-components';
import Responsive from 'components/animation/Responsive';

export const PostListSection = styled(Responsive)`
  width: 500px;
  padding-top: 5rem;
  padding-bottom: 5rem;
  @media (max-width: 768px) {
    width: 300px;
  }
`;

export const WritePostButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 3rem;
`;
