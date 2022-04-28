import styled from 'styled-components';

export const ContainerError = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;

  margin-bottom: 10%;
  background: rgba(0, 0, 0, 0.7);
  box-shadow: 8px 8px 5px #c3c3c3;

  color: white;
  padding: 5%;
  border: 1px solid gray;
  border-radius: 3px;

  h3 {
    font-weight: 600;
  }

  button {
    font-weight: 600;
    width: 30%;
  }

  @media screen and (max-width: 400px) {
    padding: 1%;
    margin-bottom: 5%;
  }
`;