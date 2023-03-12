import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import PortionList from '../PortionsList/PortionsList';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.action.hover,
    fontSize: 16,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 16,
    fontWeight: 500,
  },
}));

function createData(recipePercent, materialAmount, weight, allPortions, basicPortions, generatedPortions, cansAmount) {
  return { recipePercent, materialAmount, weight, allPortions, basicPortions, generatedPortions, cansAmount};
}

const row = createData(23, 456, 400, 5, 4, 1, 4955);

const CalcTable = () => {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Receptura</StyledTableCell>
            <StyledTableCell align="right">Ilość surowca</StyledTableCell>
            <StyledTableCell align="right">Grammatura</StyledTableCell>
            <StyledTableCell align="right">Ogólna ilość porcji</StyledTableCell>
            <StyledTableCell align="right">Porcji po 410&nbsp;(kg)</StyledTableCell>
            <StyledTableCell align="right">Porcji po 320&nbsp;(kg)</StyledTableCell>
            <StyledTableCell align="right">Ilość puszek dla wygenerowanych por.&nbsp;(szt)</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow 
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <StyledTableCell align="center">{`${row.recipePercent} %`}</StyledTableCell>
              <StyledTableCell align="right">{`${row.materialAmount} kg`}</StyledTableCell>
              <StyledTableCell align="right">{`${row.weight} g`}</StyledTableCell>
              <StyledTableCell align="right">{`${row.allPortions} szt`}</StyledTableCell>
              <StyledTableCell align="right">{`${row.basicPortions} szt`}</StyledTableCell>
              {/* <StyledTableCell align="right">{`${row.generatedPortions} szt`}</StyledTableCell> */}
              <StyledTableCell align="right">{<PortionList generatedPortions={row.generatedPortions}/>}</StyledTableCell>
              <StyledTableCell align="right">{`${row.cansAmount} szt`}</StyledTableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default CalcTable;