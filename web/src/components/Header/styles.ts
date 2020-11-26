import styled from 'styled-components';

export const Container = styled.header`
  background-color: #ac6a6a;
  height: 55px;
  position: sticky;
  top: 0;

  display: flex;
  align-items: center;
  justify-content: space-between;

  padding: 10px 15px;
  margin-bottom: 3px;

  z-index: 1001;

  div {
    display: flex;
    justify-content: space-between;

    span > span {
      background-color: #fff;

      margin-left: 5px;
      margin-right: 25px;
      padding: 5px 10px;
      border-radius: 8px;

      color: #ac6a6a;
    }
  }
`;
