import styled from 'styled-components';
import Picture from '../../images/amsterda.jpg';

export const ContainerPage = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
`;

export const ContainerMain = styled.main`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  padding: 1em;;
  width: 100%;

  @media screen and (max-width: 1100px) {
    flex-direction: column;
    width: 60%;
  }

  @media screen and (max-width: 550px) {
    flex-direction: column;
    width: 100%;
  }
`;


export const ContainerTitle = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;

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
    padding-right: 1em;
    min-height: 450px;
    width: 20%;

    input {
      width: 300px;
      text-align: center;
      height: 40px;
      };

    select {
      width: 300px;
      text-align: center;
      height: 45px;
    }

    button {
      width: 300px;
      height: 45px;
      text-align: center;
      background-color: brown;
      color: white;
    };
    
    button:hover {
      background-color: orange;
    }
  
    @media screen and (max-width: 900px) {
      min-height: 320px;

      input {
        width: 250px;
        text-align: center;
        height: 30px;
        };
  
      select {
        width: 250px;
        text-align: center;
        height: 35px;
      }
  
      button {
        width: 250px;
        height: 35px;
        margin-top: 10px;
      };
    }
  `;
  
  export const ContainerReservation = styled.div`
    align-self: flex-start;
    align-items: center;
    justify-content: center;
    text-align: center;
    text-transform: uppercase;

    @media screen and (max-width: 600 px) {
      h3 {
        font-size: 0.8em;
      }
    }
  `;

  
