import styled from 'styled-components';

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid red;
`;

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  border: 1px solid green;
  padding: 20px;
  width: 100%;
  text-align: center;
`;

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid yellow;
  width: 50%;
  padding: 0px 30px;

  p {
    text-align: justify;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid pink;
  width: 80%;

  input {
    padding: 10px 0px;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    height: 20px;
  };

  button {
    padding: 10px 0px;
    width: 100%;
    text-align: center;
    background-color:brown;
    color: white;
  }

  textarea {
    padding: 10px 0px;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    height: 70px;
  }
`;