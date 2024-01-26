import { styled } from '@mui/material/styles';
import { AppBar, Toolbar } from '@mui/material';

export const StyledTB = styled(Toolbar)({
  display: 'flex',
  justifyContent: 'space-between',
  cursor: 'pointer',
});

export const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  gap: '2%',
  backgroundColor: 'white',
  padding: '0 10px',
  width: '40%',
  borderRadius: '2%',
}));

export const AppBarStyled = styled(AppBar)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.primary.main,
}));
