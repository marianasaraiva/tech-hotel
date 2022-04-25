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
  min-height: 350px;
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

  @media screen and (max-width: 550px) {
    text-align: center;

    h1 {
      font-size: 1.4em;
    }
  }
`;

export const ContainerSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: start;
  width: 100%;
  text-align: center;

  h1 {
    text-transform: uppercase;
  }

  @media screen and (max-width: 850px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const ContainerDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: left;
  width: 50%;
  padding: 0px 40px;
  padding-top: 20px;

  h3 {
    text-align: left;
    text-transform: uppercase;
  }

  p {
    text-align: justify;
  }

  @media screen and (max-width: 850px) {
    align-items: center;
    width: 70%;
    padding: 0px;

    h3 {
      text-align: center;
      font-size: 0.9em;
    }
  }

  @media screen and (max-width: 450px) {
    width: 90%;
    padding-top: 0px;
  }
`;

export const ContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  width: 100%;
  font-family: 'Montserrat', sans-serif;

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
    background-color: brown;
    color: white;
  }

  button:hover {
    background-color: orange;
  }

  textarea {
    padding: 10px 0px;
    width: 100%;
    text-align: center;
    margin-bottom: 20px;
    height: 70px;
  }

  textarea:focus {
    font-family: 'Montserrat', sans-serif;
  }
`;