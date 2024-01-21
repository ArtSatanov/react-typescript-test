import { CustomTheme } from '../themeInterfaces';
import { CssBaseline } from './cssBaseLine/CssBaseline';

export const otherOverrides = (theme: CustomTheme) => {
  return Object.assign(CssBaseline(theme));
};
