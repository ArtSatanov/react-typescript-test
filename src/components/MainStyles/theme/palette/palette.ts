import { PaletteMode } from '@mui/material';
export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // palette values for light mode
          primary: {
            main: '#FFFFFF',
          },
          divider: '#038532',
          background: {
            default: '#FFFFFF',
            paper: '#1E1E1E',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
          },
        }
      : {
          // palette values for dark mode
          primary: {
            main: '#1E1E1E',
          },
          divider: '#038532',
          background: {
            default: '#1E1E1E',
            paper: '#969696',
          },
          text: {
            primary: '#FFFFFF',
            secondary: '#FFFFFF',
          },
        }),
  },
});
