import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  border-radius: 10px;
  margin: 25px;
  padding: 10px;
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

          h2 {
            display: inline-block;
            margin-right: 15px;
          }
        }

        .icon {
          font-size: 1.6em;
        }

        p {
          margin-top: 5px;
        }
      }
    }

    .bottom {
      display: flex;
      margin: 10px 10px 5px;

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
      background: gray;
      width: 40px;
      height: 40px;
      position: relative;
      background: #e8e8e8;
      border-radius: 25px;

      .icon {
        position: absolute;
        top: 7px;
        left: 9px;
        font-size: 1.4em;
      }
    }
  }
`;
