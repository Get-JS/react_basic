import React from "react";
import styled from "styled-components";

export const BlueBox = styled.div`
  background: red;
  font-size: 1.5rem;
  color: white;
  width: 128px;
  height: 128px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

function Blue() {
  return <BlueBox>Blue</BlueBox>;
}

export default Blue;
