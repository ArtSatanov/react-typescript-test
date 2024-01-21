import {
  ThemeProvider as MUIThemeProvider,
  createTheme,
  StyledEngineProvider,
} from '@mui/material/styles';
import { useEffect, useMemo, useState } from 'react';
import { CustomTheme } from './themeInterfaces';
import { breakpoints } from './breakpoints/breakpoints';
import { otherOverrides } from './otherOverrides';
import { getDesignTokens } from './palette/palette';
import { CssBaseline, PaletteMode } from '@mui/material';
import { useSelector } from 'react-redux';

import { selectTheme } from 'services/redux/selectors/selectors';

const ThemeProvider = ({ children }: { children?: React.ReactNode }) => {
  const darkMode = useSelector(selectTheme);
  const [mode, setMode] = useState('light');

  useEffect(() => {
    if (darkMode) {
      setMode('dark');
    } else {
      setMode('light');
    }
  }, [darkMode]);

  const themeOptions = useMemo(
    () => ({
      ...getDesignTokens(mode as PaletteMode),
      breakpoints,
    }),
    [mode]
  );

  const theme = createTheme(themeOptions) as CustomTheme;
  theme.components = otherOverrides(theme);

  return (
    <MUIThemeProvider theme={theme}>
      <CssBaseline />
      {children}
    </MUIThemeProvider>
  );
};

export default ThemeProvider;
