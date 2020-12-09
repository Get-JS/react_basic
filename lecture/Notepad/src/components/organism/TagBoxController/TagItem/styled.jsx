import styled from 'styled-components';
import palette from 'utils/styles/palette';

export const TagItem = styled.div`
  margin-right: 0.5rem;
  color: ${palette.gray[6]};
  cursor: pointer;
  &:hover {
    opacity: 0.5;
  }
`;
