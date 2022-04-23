import styled from 'styled-components';

export const ContainerLogin = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-self: flex-start;
  text-align: center;
  
  img {
    position: relative;
    width: 100%;
    height: 100vh;   
  }
`;
  
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50%;

  form {
    padding: 100px;
  }

  h1 {
    padding-bottom: 60px;
    text-transform: uppercase;
  }

  input {
    padding: 10px 0px;
      width: 100%;
      text-align: center;
      margin-bottom: 40px;
      height: 20px;
    };

  button {
    width: 100%;
    text-align: center;
    background-color: brown;
    color: white;
    height: 45px;
  };

  button:hover {
    background-color: orange;
  }
  `;

// a:nth-child(4) {
//   color: brown;
// }