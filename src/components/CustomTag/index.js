import React from "react";
import { MdAddCircle, MdCancel } from "react-icons/md";

import { Container } from "./styles";

const CustomTag = ({ icon, bgColor }) => {
  return (
    <Container icon={icon} bgColor={bgColor}>
      <p>React</p>
      {icon === "plus" ? (
        <MdAddCircle className="icon" />
      ) : (
        <MdCancel className="icon" />
      )}
    </Container>
  );
};

export default CustomTag;
