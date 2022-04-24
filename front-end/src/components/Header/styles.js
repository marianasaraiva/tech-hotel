import styled from 'styled-components';

export const NavBar = styled.header`
  display: flex;
  justify-content: space-evenly;
  padding: 20px 0px;
  text-transform: uppercase;
  font-weight: 600;
  width: 100%;
  
  a {
    text-decoration: none;
    color: black;
    font-weight: 600;
  }

  a:hover {
    color: brown;
  }

  a:nth-child(1) {
    color: brown;
  }

  a:nth-child(1):hover {
    color: orange;
  }

  @media screen and (max-width: 400px) {
    font-size: 0.8em;
  }
`;
