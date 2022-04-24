import styled from 'styled-components';
import Picture from '../../images/amsterdam.jpg';

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  width:100%;

  background-size: cover;
  background-image: url(${ Picture  });
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  font-weight: 600;
  min-height: 100vh;
  position: relative;
  z-index: 0;
  font-size: 1.5em;
  
  &:before {
    background: rgba(0, 0, 0, 0.6);
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
    background-color: white;
    width:100%;
    color: black;
  }

  p {
    color: black;
    background-color: white;
    margin: 10px;
    width:100%;
  }

  span {
    color: brown;
  }

  @media screen and (max-width: 800px) {
    font-size: 0.9em;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8em;
  }
`;