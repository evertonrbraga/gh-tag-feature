import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  margin: 0 15px 15px;
  padding: 15px;
  background: #fff;
  box-shadow: -2px 3px 2px rgba(0, 0, 0, 0.1);

  .left-side {
    display: flex;
    flex-direction: column;
    width: 500px;

    .top {
      display: flex;
      align-items: center;

      img {
        border-radius: 50px;
        margin-right: 15px;
        width: 100px;
        height: 100px;
      }

      .infos {
        .main-name {
          display: flex;
          align-items: center;

          h3 {
            display: inline-block;
            font-weight: 700;
          }
        }

        .icon {
          font-size: 1.6em;
        }

        p {
          margin-top: 5px;
        }

        .tag {
          cursor: pointer;
          color: #0017ff;
          padding: 5px 10px;
          background: #ebedff;
          border-radius: 25px;
          display: flex;
          align-items: center;
          width: fit-content;
          margin: 10px 0;

          p {
            margin: 0 5px 0 0;
          }

          .icon-container {
            background: #0017ff;
            position: relative;
            width: 20px;
            height: 20px;
            border-radius: 25px;

            .icon {
              position: absolute;
              color: #fff;
              font-size: 0.7em;
              top: 5px;
              left: 5px;
            }
          }
        }
      }
    }

    .bottom {
      display: flex;
      margin: 0 10px 0;

      span {
        display: flex;
        align-items: center;

        p {
          margin: 0 15px 0 5px;
          font-size: 12px;
        }
      }
    }
  }

  .right-side {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 130px;

    .icon-container {
      background: #f9f1d1;
      width: 40px;
      height: 40px;
      position: relative;
      border-radius: 25px;

      .icon {
        position: absolute;
        top: 7px;
        left: 9px;
        font-size: 1.4em;
        color: #ffc700;
      }
    }
  }
`;
