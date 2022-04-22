import styled from 'styled-components';

export const ContainerLogin = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  border: 1px solid pink;
  width: 100%;
  padding: 70px 0px;

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
    margin-bottom: 40px;
    height: 45px;
    border-width: 2px;
  };
`;