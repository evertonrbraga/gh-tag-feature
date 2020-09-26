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
          height: 70px;
          display: flex;
          justify-content: center;
          position: relative;
          border-radius: 10px 10px 0 0;

          .icon {
            position: absolute;
            top: 25px;
            left: 25px;
            font-size: 1.3em;
            color: #fff;
          }

          img {
            position: absolute;
            width: 90px;
            height: 90px;
            margin-top: 20px;
            border-radius: 50px;
          }
        }

        .white-part {
          width: 80%;
          margin: 0 auto;

          h2 {
            margin: 50px 0 3px;
          }

          p {
            margin-bottom: 2px;
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

        .info-container {
          .data-info {
            display: flex;
            align-items: center;
            margin-bottom: 5px;

            p {
              margin-left: 10px;
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

          .data-info {
            display: flex;
            align-items: center;
            margin-bottom: 5px;

            p {
              margin-left: 10px;
            }
          }
        }
      }
    }

    .box04 {
      grid-column: 2/4;
      grid-row: 1/6;
      padding: 15px;

      .card {
        height: 96%;
        margin: 1.5%;
      }

      .input-container {
        display: flex;
        justify-content: space-between;
        padding: 0 15px;

        /* input {
          margin: 25px 0;
          padding: 15px;
          border: 2px solid #e5e5e5;
          border-radius: 5px;
          width: 48%;
          border: none;
          box-shadow: -2px 3px 2px rgba(0, 0, 0, 0.1);
        } */
      }
    }
  }
`;
