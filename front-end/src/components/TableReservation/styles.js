import styled from 'styled-components';

export const Table = styled.table`
  justify-context: space-evenly;
  align-self: flex-start;
  table-layout: auto;
  width: 100%;
  border-collapse: collapse;
  text-align: center;
  border: 1px solid black;  
  
  thead {
    background-color: brown;
    color: white;
    height: 4em;
    font-weight: 600;
  } 
  
  td {
    font-size: 1.0em;
    padding: 1em;
  }
  
  th {
    font-size: 1.0em;
    padding: 1em;
  }

  tbody tr:nth-child(even) {
    background-color: gray;
    color: white;
  }

  @media screen and (max-width: 1200px) {
    font-size: 1em;

    td {
      padding: 0.9em; 
      font-size: 1em;
    }
    
    th {
      padding: 0.9em;
      font-size: 1em;
    }
  }

  @media screen and (max-width: 900px) {
    font-size: 0.9em;
    height: 0px;

    td {
      padding: 0.8em; 
      font-size: 1em;
    }
    
    th {
      padding: 0.8em; 
      font-size: 1em;
    }

    button {
      padding: 0;
      height: 2em;
      width: 100px;
    }
  }

  @media screen and (max-width: 500px) {
    td {
      padding: 0.6em; 
      font-size: 0.8em;
    }
    
    th {
      padding: 0.6em; 
      font-size: 0.8em;
    }

    button {
      font-size:0.8em;
      padding: 0;
      height: 2em;
      width: 50px;
    }
  }
`;
