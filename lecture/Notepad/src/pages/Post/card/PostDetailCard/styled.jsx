import styled from 'styled-components';
import Responsive from 'components/animation/Responsive';
import palette from 'utils/styles/palette';

export const Container = styled(Responsive)`
  width: 680px;
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 2rem;
  margin-top: -1.5rem;
`;

export const ActionButton = styled.button`
  padding: 0.25rem 0.5rem;
  border-radius: 4px;
  color: ${palette.gray[6]};
  font-weight: bold;
  border: none;
  outline: none;
  font-size: 0.875rem;
  cursor: pointer;
  &:hover {
    background: ${palette.gray[1]};
    color: ${palette.cyan[7]};
  }
  & + & {
    margin-left: 0.25rem;
  }
`;
