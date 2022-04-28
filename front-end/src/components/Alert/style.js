import styled from 'styled-components';

export const ContainerError = styled.div`
  position: fixed; 
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgba(128,128,128,0.5); 

  div {
    position: fixed; 
    top: 50vh;
    left: 50vw;
    transform: translate(-50%,-50%);
    height: 300px;
    width: 600px;
    background-color: white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  button {
    width: 250px;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8em;

    div {
      height: 200px;
      width: 200px;
    }

    button {
      padding: 0;
      height: 2em;
      width: 100px;
    }
  }
`;
