import styled from 'styled-components';

export const Table = styled.table`
  align-self: flex-start;
  table-layout: fixed;
  width: 95%;
  border-collapse: collapse;
  text-align: center;
  border: 1px solid black;  
  
  thead {
    background-color: brown;
    color: white;
    text-align: center;
    font-weight: 600;
  } 
  
  tbody {
    text-align: center;
  }
  
  td {
    padding: 6px;
  }
  
  th {
    padding:10px;
    font-size: 1.1em;
  }

  tbody tr:nth-child(even) {
    background-color: gray;
    color: white;
  }
  
`;
