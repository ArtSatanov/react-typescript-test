import { CustomTheme } from '../themeInterfaces';
import { AppBar } from './AppBar/AppBar';
import { CssBaseline } from './cssBaseLine/CssBaseline';
import { OutlinedInput } from './OutlinedInput/OutlinedInput';

export const otherOverrides = (theme: CustomTheme) => {
  return Object.assign(CssBaseline(theme), OutlinedInput(theme), AppBar(theme));
};
