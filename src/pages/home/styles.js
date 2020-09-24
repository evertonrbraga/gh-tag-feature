import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  .infos {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 40vw;
    background: #fff;

    .contents {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      .form-contents {
        display: flex;
        flex-direction: column;

        h2 {
          margin-top: 70px;
        }

        p {
          color: #7e7e7e;
          font-size: 0.9em;
        }

        input {
          margin: 25px 0;
          padding: 15px;
          border: 2px solid #e5e5e5;
          border-radius: 5px;
          width: 470px;
        }
      }
    }
  }

  .image {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60vw;
    background: #000;

    img {
      height: 60vh;
      margin-top: 90px;
    }

    h2 {
      margin: 90px auto;
      width: 50%;
      text-align: center;
      font-size: 1.6em;
      color: #fff;

      .bold {
        font-weight: 700;
      }
    }
  }
`;
