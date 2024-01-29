import { styled } from '@mui/material/styles';

export const Search = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'left',
  gap: '2%',
  backgroundColor: theme.palette.text.primary,
  padding: '0 10px',
  width: '50%',
  borderRadius: '20px',
}));
