import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  height: 100vh;

  .ant-input-affix-wrapper {
    padding: 10px;
    border-radius: 5px;
  }

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
          margin: 70px 0 0;
          font-weight: 700;
        }

        .description {
          color: #7e7e7e;
          font-size: 0.9em;
        }

        .icon {
          color: #e5e5e5;
          font-size: 1.6em;
        }

        .button-component {
          margin-top: 25px;
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
