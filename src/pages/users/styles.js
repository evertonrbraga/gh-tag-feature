import styled from "styled-components";

export const Container = styled.div`
  background: #e5e5e5;

  header {
    background: #fff;
    height: 10vh;

    .contents {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      width: 90%;
      margin: 0 auto;
    }
  }

  section {
    background: #e5e5e5;
    height: 90vh;
  }
`;
