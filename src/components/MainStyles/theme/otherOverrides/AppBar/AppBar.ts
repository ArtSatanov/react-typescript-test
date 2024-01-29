import { CustomTheme } from '../../themeInterfaces';

export const AppBar = (theme: CustomTheme | undefined) => {
  return {
    MuiAppBar: {
      styleOverrides: {
        root: {
          backgroundColor: theme?.palette.background.paper,
          color: theme?.palette.primary.main,
          padding: 0,
        },
      },
    },
  };
};
