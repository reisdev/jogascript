import React from "react";

import styled from "styled-components";

const Visualization = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default function (props: any) {
  return (
    <Visualization>
      <img src="./sprite.png" alt="personagem em pixel art"></img>
    </Visualization>
  );
}
