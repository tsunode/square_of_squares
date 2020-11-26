import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  background-color: #ac6a6a;

  border-radius: 25px;

  margin: 10px auto;
`;

export const Content = styled.div`
  height: 100px;
  display: flex;
  align-items: center;
`;

export const ContentLeft = styled.div`
  background-color: #d46767;
  width: 40%;
  height: 100%;

  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.5);

  border-radius: 25px;
  padding: 10px;

  > div {
    display: flex;
  }

  > div:nth-child(1) {
    align-items: center;

    font-size: 22px;

    svg {
      width: 32px;
      height: 32px;

      margin-right: 5px;
    }
  }

  > div:nth-child(2) {
    flex-direction: column;

    margin-top: 5px;

    > span {
      display: flex;
      justify-content: space-between;

      margin-right: 15px;
    }
  }
`;

export const ContentRight = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  justify-content: space-around;
  align-items: center;
  position: relative;

  > div {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    span:nth-of-type(1) {
      background-color: #d46767;
      box-shadow: 2px 3px 10px rgba(0, 0, 0, 0.5);

      border-radius: 5px;
      padding: 2px 14px;
      margin-bottom: 10px;
      z-index: 1000;
    }

    span:nth-of-type(2) {
      font-size: 36px;
    }
  }

  svg {
    position: absolute;
    width: 96px;
    height: 96px;

    opacity: 0.1;
  }
`;
