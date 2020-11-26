import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  background-color: #ac6a6a;

  border-radius: 25px;

  margin: 10px auto;
`;

export const Content = styled.div`
  height: 50px;
  display: flex;
  align-items: center;
`;

export const ContentLeft = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;

  svg {
    width: 32px;
    height: 32px;

    margin: 5px 15px;
  }
  > div {
    display: flex;
    flex-direction: column;

    > span {
      display: flex;
      justify-content: space-between;

      span {
        margin-left: 15px;
      }
    }
  }
`;

export const ContentRight = styled.div`
  height: 100%;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #d46767;

  box-shadow: 2px 0px 10px rgba(0, 0, 0, 0.5);
  border-radius: 54px 24px 24px 0px;

  span {
    text-align: center;
    font-size: 12px;
  }
  span:nth-of-type(1) {
  }

  span:nth-of-type(2) {
  }
`;
