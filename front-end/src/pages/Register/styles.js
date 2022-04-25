import styled from 'styled-components';

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: center;

  align-self: flex-start;
  text-align: center;
  
  img {
    width: 100%;
    height: 100vh;   
  }

  @media screen and (max-width: 800px) {
    align-items: center;
    width: 100%;
  }
`;
  
export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  width: 50%;

  form {
    padding: 100px 0px;
  }

  h1 {
    padding-bottom: 60px;
    text-transform: uppercase;
  }

  input {
    padding: 10px 0px;
    width: 55%;
    text-align: center;
    margin-bottom: 40px;
    height: 20px;
    };

  button {
    width: 55%;
    text-align: center;
    background-color: brown;
    color: white;
    height: 45px;
  };

  button:hover {
    background-color: orange;
  }
  
  @media screen and (max-width: 1000px) {
    width: 100%;

    form {
      padding: 50px 0px;
    }
  }
  
  @media screen and (max-width: 400px) {
    width: 100%;

    form {
      padding: 30px 0px;
    }

    h1 {
      padding-bottom: 30px;
    }

    input {
      width: 90%;
      margin-bottom: 20px;
    }

    button {
      width: 90%;
    }
  }
`;
  
export const ContainerImage = styled.div`
  width: 50%;

  @media screen and (max-width: 1000px) {
    display: none;
  }
`;
  
  // a:nth-child(4) {
  //   color: brown;
  // }