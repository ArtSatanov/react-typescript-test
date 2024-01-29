import { styled } from '@mui/material/styles';
import { Toolbar } from '@mui/material';

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
  backgroundColor: theme.palette.text.primary,
  padding: '0 10px',
  width: '40%',
  borderRadius: '2%',
}));
