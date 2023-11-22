import styled from 'styled-components';

export const TableWrapper = styled.div`
  font-family: 'Poppins', sans-serif;
  margin: 50px auto;
  max-width: 1200px;
  border-radius: 8px;
`;

export const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  table-layout: fixed;
  font-weight: 500;
`;

export const TableData = styled.td`
  padding: 10px;
  border-bottom: 1px solid #ddd;

  text-align: left;

  p {
    margin: 10px 0;
  }
`;
