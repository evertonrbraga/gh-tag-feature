import styled from "styled-components";

export const Container = styled.button`
  width: ${({ width }) => width};
  padding: 10px;
  margin: ${({ margin }) => margin};
  border-radius: 35px;
  font-size: 1.3em;
  background: #000;
  color: #fff;
  border: none;

  p {
    font-size: 14px;
    margin: 0;
    color: #fff;
  }
`;
