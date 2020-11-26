import styled from 'styled-components';

export const Container = styled.div`
  height: 100vh;
`;

export const InputRadio = styled.div`
  color: #e4a5a5;
  margin: 15px auto;
  text-align: center;
  border-radius: 15px;
  background-color: #fff;
  height: 28px;
  display: flex;
  width: fit-content;

  label {
    height: 100%;
    padding: 5px 25px;
    line-height: 18px;
  }

  input {
    display: none;
  }

  input:checked + label {
    background-color: #e4a5a5;
    color: #fff;
    border-radius: 15px;
  }

  input:checked + label:nth-of-type(1) {
    box-shadow: 2px 0px 5px rgba(0, 0, 0, 0.5);
  }
  input:checked + label:nth-of-type(2) {
    box-shadow: -2px 0px 5px rgba(0, 0, 0, 0.5);
  }
`;

export const Content = styled.main`
  height: calc(100vh - 60px);
  display: flex;

  padding: 10px;
`;

export const SectionTerritory = styled.section`
  flex: 1;
  height: 100%;
`;

export const SectionReport = styled.section`
  flex: 1;
  height: 100%;
`;

export const Title = styled.h2`
  background-color: #e4a5a5;
  width: 78%;

  padding: 3px 0;
  margin: auto;
  border-radius: 39px;

  text-align: center;
`;

export const Squares = styled.div`
  /* background-color: #f60; */
  height: 50%;
`;

export const Errors = styled.div`
  /* background-color: #f69; */
  height: 50%;
`;
