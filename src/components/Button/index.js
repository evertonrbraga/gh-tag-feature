import React from "react";

import { Container } from "./styles";

export const Button = ({ text, width, margin, click }) => {
  return (
    <Container onClick={click} width={width} margin={margin}>
      <p>{text}</p>
    </Container>
  );
};

export default Button;
