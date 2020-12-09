import styled from 'styled-components';

export const Container = styled.div`
  width: 512px;
  border-radius: 4px;
  .loading {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px;
  }
`;

export const TodoTitle = styled.div`
  background: #22b8cf;
  color: white;
  height: 4rem;
  font-size: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TodoContent = styled.div`
  background: white;
`;
