import styled from 'styled-components';

export const NavBar = styled.header`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  padding: 20px;

  a {
    text-decoration: none;
    color: black;
    font-weight: 600;
  }

  a:hover {
    color: brown;
  }

  a:nth-child(1) {
    color: red;
  }

  a:nth-child(1):hover {
    color: orange;
  }
`;
