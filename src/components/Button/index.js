import React from "react";

import { Container } from "./styles";

export const Button = ({ text, width, bottom = "15px" }) => {
  return (
    <Container width={width} bottom={bottom}>
      {text}
    </Container>
  );
};

export default Button;
