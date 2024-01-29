import { styled } from '@mui/material/styles';
import { Box, Button } from '@mui/material';

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
}));

export const StyledForm = styled('form')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center',
  gap: '20px',
  padding: '0 5px',
  width: '100%',
  color: theme.palette.divider,
}));

export const StyledBtn = styled(Button)(({ theme }) => ({
  color: theme.palette.divider,
  fontSize: '18px',
  fontWeight: 600,
  borderRadius: '30px',
  padding: '5px 30px',
  marginBottom: '10px',
  transition:
    'opacity 250ms cubic-bezier(0.4, 0, 0.2, 1),transform 250ms cubic-bezier(0.4, 0, 0.2, 1)',
  ':hover': {
    opacity: 1,
    transform: 'scale(1.02)',
  },
}));
