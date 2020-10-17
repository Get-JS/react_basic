import styled from 'styled-components';

export const ConfigBoxBlock = styled.div`
  background: rgba(142, 68, 173, 0.3);
  width: 25rem;
  height: 100%;
  min-height: 10rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1000;
  padding: 1rem;

  transform: translate(0, 30px);
  transition: all 1s cubic-bezier(0.75, -0.02, 0.2, 0.97);
  visibility: hidden;
`;

export const ConfigBoxGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
`;

export const SelectBox = styled.div`
  display: flex;
`;

export const ColorBox = styled.div`
  border: 1px solid #2c3e50;
  width: 24px;
  height: 24px;
  cursor: pointer;
  font-size: 1.5rem;
  text-align: center;
`;
