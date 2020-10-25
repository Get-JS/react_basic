import styled, { css } from 'styled-components';

export const TodoItemContainer = styled.div`
  padding: 1rem;
  display: flex;
  align-items: center;
  & + & {
    border-top: 1px solid #dee2e6;
  }

  &:nth-child(even) {
    background: #f8f9fa;
  }
`;

export const TodoWrapper = styled.div`
  cursor: pointer;
  flex: 1;
  display: flex;
  align-items: center;
`;

export const TodoText = styled.div`
  margin-left: 0.5rem;
  ${(props) =>
    props.checked &&
    css`
      color: #adb5bd;
      text-decoration: line-through;
    `}
`;
