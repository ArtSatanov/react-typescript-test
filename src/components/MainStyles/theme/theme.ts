import { createTheme } from '@mui/material';

const PRIMARY = { main: '#F6F6F6', dark: '#050505' };
const SECONDARY = { main: '#1760a5', light: 'skyblue' };
const ERROR = { main: '#1760a5', light: 'skyblue' };
const INFO = { main: '#1760a5', light: 'skyblue' };

const palette = {
  primary: { ...PRIMARY },
  secondary: { ...SECONDARY },
  error: { ...ERROR },
  info: { ...INFO },
};

export const theme = createTheme({
  palette,
});
