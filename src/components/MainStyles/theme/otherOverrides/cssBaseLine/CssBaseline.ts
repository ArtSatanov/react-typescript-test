import { CustomTheme } from '../../themeInterfaces';

export const CssBaseline = (theme: CustomTheme | undefined) => {
  return {
    MuiCssBaseline: {
      styleOverrides: {
        '*': {
          margin: 0,
          padding: 0,
          boxSizing: 'border-box',
        },
        html: {
          width: '100%',
          height: '100%',
          WebkitOverflowScrolling: 'touch',
        },
        body: {
          width: '100%',
          height: '100%',
          backgroundColor: theme?.palette.background.default,
          backgroundAttachment: 'fixed',
        },
        '#root': {
          width: '100%',
          height: '100%',
        },
        img: {
          display: 'block',
          maxWidth: '100%',
        },
        h1: {
          padding: '0',
          margin: '0',
        },
        h2: {
          padding: '0',
          margin: '0',
        },
        h3: {
          padding: '0',
          margin: '0',
        },
        h4: {
          padding: '0',
          margin: '0',
        },
        h5: {
          padding: '0',
          margin: '0',
        },
        h6: {
          padding: '0',
          margin: '0',
        },
        p: {
          listStyle: 'none',
          padding: '0',
          margin: '0',
        },
        ul: {
          listStyle: 'none',
          padding: '0',
          margin: '0',
        },
        a: {
          textDecoration: 'none',
          padding: '0',
          margin: '0',
        },
      },
    },
  };
};
