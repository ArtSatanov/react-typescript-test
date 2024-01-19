import { createTheme } from '@mui/material';

// __palette

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

// __breakpoints

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

const breakpoints = {
  values: { mobile: 0, tablet: 768, laptop: 1024, desktop: 1200 },
};

// __ theme

export const theme = createTheme({
  palette,
  breakpoints,
});
