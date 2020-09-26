import styled from "styled-components";

export const Container = styled.div`
  background: #e5e5e5;

  .middle {
    max-width: 1200px;
    margin: 0 auto;
    background: #e5e5e5;
    height: 90vh;
    display: grid;
    grid-template-columns: 280px 1fr 1fr;
    grid-template-rows: repeat(5, 1fr);

    .box {
      .card {
        height: 90%;
        border-radius: 10px;
        margin: 5%;
        background: #fff;
        box-shadow: -2px 3px 2px rgba(0, 0, 0, 0.1);
      }
    }

    .box01 {
      grid-column: 1/2;
      grid-row: 1/3;

      .card {
        .black-part {
          background: #000;
          height: 60px;
          display: flex;
          justify-content: center;
          position: relative;
          border-radius: 10px 10px 0 0;

          .icon {
            position: absolute;
            top: 21px;
            left: 17px;
            font-size: 1.3em;
            color: #fff;
          }

          img {
            position: absolute;
            width: 80px;
            height: 80px;
            margin-top: 20px;
            border-radius: 50px;
          }
        }

        .white-part {
          width: 80%;
          margin: 0 auto;

          h2 {
            margin: 47px 0 0;
            font-weight: 700;
          }

          p {
            margin-bottom: 0;
          }

          .data-info {
            display: flex;
            justify-content: space-between;

            span {
              font-weight: 700;
            }
          }

          .username {
            margin-bottom: 15px;
            color: #7e7e7e;
          }
        }
      }
    }

    .box02 {
      grid-column: 1/2;
      grid-row: 3/5;

      .contents {
        width: 80%;
        margin: 0 auto;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: space-evenly;

        h3 {
          font-weight: 700;
          margin: 0;
        }

        p {
          margin: 0;
        }

        .info-container {
          .data-info {
            display: flex;
            align-items: center;
            margin-bottom: 5px;

            p {
              margin: 0 0 0 10px;
            }
          }
        }
      }
    }

    .box03 {
      grid-column: 1/2;
      grid-row: 5/6;

      .card {
        height: 80%;

        .contents {
          width: 80%;
          margin: 0 auto;
          height: 100%;
          display: flex;
          flex-direction: column;
          justify-content: space-evenly;

          h3 {
            font-weight: 700;
            margin: 0;
          }

          .data-info {
            display: flex;
            align-items: center;
            margin-bottom: 5px;

            p {
              margin: 0 0 0 10px;
            }
          }
        }
      }
    }

    .box04 {
      grid-column: 2/4;
      grid-row: 1/6;
      padding: 15px 0;

      .card {
        height: 96%;
        margin: 1.5%;
      }

      .input-container {
        display: flex;
        justify-content: space-between;
        padding: 0 15px;

        .ant-input-affix-wrapper:nth-child(1) {
          margin: 0 10px 15px 0;
          padding: 10px;
          border: none;
          border-radius: 5px;
          box-shadow: -2px 3px 2px rgba(0, 0, 0, 0.1);
        }

        .ant-input-affix-wrapper:nth-child(2) {
          margin: 0 0 15px 10px;
          padding: 10px;
          border: none;
          border-radius: 5px;
          box-shadow: -2px 3px 2px rgba(0, 0, 0, 0.1);
        }
      }
    }
  }
`;
