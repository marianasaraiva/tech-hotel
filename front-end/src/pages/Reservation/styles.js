import styled from 'styled-components';
import Picture from '../../images/amsterda.jpg';

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  background-image: url(${ Picture  });
  background-size: cover;
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  color: white;
  font-weight: 600;
  min-height: 250px;
  position: relative;
  z-index: 0;

  &:before {
    background: rgba(0, 0, 0, 0.5);
    content: "";
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    width: 100%;
    z-index: -1;
  }

  h1 {
    text-transform: uppercase;
    margin-bottom: 0px;
  }
`;
  
  export const ContainerForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  padding: 40px;
  font-family: 'Montserrat', sans-serif;
  width: 20%;
  
  
  input {
    margin: 20px 0px;
    width: 300px;
    text-align: center;
    height: 40px;
    };

  button {
    margin: 20px 0px;
    padding: 10px;
    height: 40px;
    width: 300px;
    background-color: brown;
    color: white;
    padding-bottom: 20px;
  };

  select {
    margin: 20px 0px;
    width: 300px;
    text-align: center;
    height: 40px;
    margin-right: 10px;
  }

  button:hover {
    background-color: orange;
  }

  a {
    color: brown;
    font-weight: 600;
  }
`;

export const Teste = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;


