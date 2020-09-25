import styled from "styled-components";

export const Container = styled.button`
  width: ${({ width }) => width};
  padding: 20px;
  margin-bottom: ${({ bottom }) => bottom};
  border-radius: 35px;
  font-size: 1.3em;
  background: #000;
  color: #fff;
  border: none;
`;
