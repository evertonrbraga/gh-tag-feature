import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  background: white;
  width: fit-content;
  padding: 2px 0 2px 9px;
  border-radius: 15px;
  background: ${({ bgColor }) => bgColor};

  p {
    margin: 0;
  }

  .icon {
    margin: 4px 8px 4px 4px;
    color: ${({ icon }) => (icon === "plus" ? "gray" : "black")};
  }
`;
