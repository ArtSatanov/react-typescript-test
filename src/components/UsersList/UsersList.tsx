import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  styled,
  tableCellClasses,
} from '@mui/material';
import { Loader } from 'components/Loader/Loader';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsersList } from 'services/redux/operations/operations';
import {
  selectErrorUsers,
  selectIsLoadingUsers,
  selectVisUsers,
} from 'services/redux/selectors/selectors';
import { AppDispatch } from 'services/redux/store';
import HotelIcon from '@mui/icons-material/Hotel';
import AccessibilityNewIcon from '@mui/icons-material/AccessibilityNew';

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

export const UsersList = () => {
  const users = useSelector(selectVisUsers);
  const isLoading = useSelector(selectIsLoadingUsers);
  const error = useSelector(selectErrorUsers);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    const controller = new AbortController();
    dispatch(fetchUsersList(controller.signal));
    return () => {
      controller.abort();
    };
  }, [dispatch]);

  return (
    <>
      {isLoading && <Loader />}
      {!isLoading && error === 'canceled' && users.length !== 0 && (
        <TableContainer component={Paper} sx={{ marginTop: '30px' }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>User</StyledTableCell>
                <StyledTableCell align="right">Email</StyledTableCell>
                <StyledTableCell align="right">Password</StyledTableCell>
                <StyledTableCell align="right">ID</StyledTableCell>
                <StyledTableCell align="right">Status</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {users.map((user: any) => (
                <StyledTableRow key={user.createdAt}>
                  <StyledTableCell component="th" scope="row">
                    {`${user.name} ${user.lastname}`}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.email}</StyledTableCell>
                  <StyledTableCell align="right">
                    {user.password}
                  </StyledTableCell>
                  <StyledTableCell align="right">{user.id}</StyledTableCell>
                  <StyledTableCell align="right">
                    {!user.status ? (
                      <HotelIcon sx={{ color: 'tomato' }} />
                    ) : (
                      <AccessibilityNewIcon sx={{ color: 'green' }} />
                    )}
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </>
  );
};
