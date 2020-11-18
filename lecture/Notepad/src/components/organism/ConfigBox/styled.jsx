import styled from 'styled-components';

export const ConfigBoxContainer = styled.div`
  background: rgba(142, 68, 173, 0.3);
  width: 25rem;
  height: 100%;
  min-height: 10rem;
  padding: 1rem;
`;

export const ConfigBoxWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const ColorSelectWrapper = styled.div`
  display: flex;
`;

export const ColorGroup = styled.div`
  display: flex;
  border: 1px solid #2c3e50;
  width: 24px;
  height: 24px;
  font-size: 1.5rem;
  text-align: center;
  cursor: pointer;
`;