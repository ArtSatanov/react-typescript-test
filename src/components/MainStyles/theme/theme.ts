import { Palette } from '@mui/icons-material';
import { PaletteMode, createTheme } from '@mui/material';

// __palette

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#fffbeb',
          },
          divider: '#fde68a',
          background: {
            default: '#fbbf24',
            paper: '#fbbf24',
          },
          text: {
            primary: '#000',
            secondary: '#27272a',
        },
          
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#dbf4ff',
          },
          divider: '#004282',
          background: {
            default: '#000e21',
            paper: '#000e21',
          },
          text: {
            primary: '#fff',
            secondary: '#71717a',
          },
        }),
  },
});

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
  breakpoints,
    components: {
    MuiCssBaseline: {
      styleOverrides: {
      html: {
        margin: '0',
        overscrollBehavior: 'none',
      },
      body: {
        height: '100%',
        margin: '0',
        backgroundColor: 'tomato',
        fontFamily: 'Play, sans-serif',
        fontWeight: '400',
        webkitFontSmoothing: 'antialiased',
        mozOsxFontSmoothing: 'grayscale',
      },
      ul: {
        listStyle: 'none',
        padding: '0',
        margin: '0',
      },
      h1: {
        margin: '0',
      },
      h2: {
        margin: '0',
      },
      h3: {
        margin: '0',
      },
      h4: {
        margin: '0',
      },
      h5: {
        margin: '0',
      },
      h6: {
        margin: '0',
      },
      p: {
        margin: '0',
      },
      img: {
        display: 'block',
        maxWidth: '100%',
        height: 'auto',
      },
        },
      },
    },
  },
);

