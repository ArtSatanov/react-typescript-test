import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSelector } from 'react-redux';
import { selectUser } from 'services/redux/selectors/selectors';

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

export const UserData = () => {
  const user = useSelector(selectUser);

  let rows: any[] = [];
  rows.push(user);

  return (
    <>
      <TableContainer component={Paper} sx={{ marginTop: '30px' }}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>User</StyledTableCell>
              <StyledTableCell align="right">Email</StyledTableCell>
              <StyledTableCell align="right">Password</StyledTableCell>
              <StyledTableCell align="right">Name</StyledTableCell>
              <StyledTableCell align="right">Lastname</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map(row => (
              <StyledTableRow key={row.email}>
                <StyledTableCell component="th" scope="row">
                  {`${row.name} ${row.lastname}`}
                </StyledTableCell>
                <StyledTableCell align="right">{row.email}</StyledTableCell>
                <StyledTableCell align="right">{row.password}</StyledTableCell>
                <StyledTableCell align="right">{row.name}</StyledTableCell>
                <StyledTableCell align="right">{row.lastname}</StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
};
