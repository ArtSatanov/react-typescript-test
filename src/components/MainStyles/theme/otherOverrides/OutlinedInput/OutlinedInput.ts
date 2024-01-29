import { CustomTheme } from '../../themeInterfaces';

export const OutlinedInput = (theme: CustomTheme | undefined) => {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: theme?.palette.divider,
          fontSize: '20px',
        },
      },
    },
  };
};
