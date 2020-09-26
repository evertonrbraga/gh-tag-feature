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
            margin-bottom: 0;
          }
        }

        .icon {
          font-size: 1.6em;
        }

        p {
          margin: 0 5px 0 0;
        }

        .tag {
          cursor: pointer;
          color: #0017ff;
          padding: 2px 7px 2px 9px;
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
            width: 14px;
            height: 14px;
            border-radius: 25px;

            .icon {
              position: absolute;
              color: #fff;
              font-size: 0.6em;
              top: 3px;
              left: 3px;
            }
          }
        }
      }
    }

    .bottom {
      display: flex;
      margin: 0 10px 0;
      color: #7e7e7e;

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
      width: 30px;
      height: 30px;
      position: relative;
      border-radius: 25px;

      .icon {
        position: absolute;
        top: 5px;
        left: 5px;
        font-size: 1.4em;
        color: #ffc700;
      }
    }
  }
`;
