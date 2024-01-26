import { styled } from '@mui/material/styles';
import { Box, TextField } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  justifyContent: 'center',
  maxWidth: '300px',
  border: '1px solid rgba(46, 47, 66, 0.1)',
  borderRadius: '2%',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  color: theme.palette.divider,
  margin: '10px auto 50px',
  paddingTop: '20px',
  boxShadow: '0 0 10px #c6cccced',
}));
export const StyledTextField = styled(TextField)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: '20px',
  justifyContent: 'center',
  maxWidth: '300px',
  border: '1px solid rgba(46, 47, 66, 0.1)',
  borderRadius: '2%',
  overflow: 'hidden',
  backgroundColor: theme.palette.background.paper,
  margin: '10px auto 50px',
  paddingTop: '20px',
  boxShadow: '0 0 10px #c6cccced',
}));

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  width: '100%',
  color: theme.palette.divider,
}));

// export const AppBarStyled = styled(AppBar)(({ theme }) => ({
//   backgroundColor: theme.palette.background.paper,
//   color: theme.palette.primary.main,
// }));
