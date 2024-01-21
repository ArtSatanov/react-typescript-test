import { Breakpoints, PaletteMode } from '@mui/material';
import {
  CommonColors,
  PaletteAugmentColorOptions,
  PaletteColor,
  PaletteTonalOffset,
  TypeAction,
  TypeBackground,
  TypeDivider,
  TypeText,
} from '@mui/material/styles/createPalette';
import { Theme as SystemTheme } from '@mui/system/createTheme/createTheme';
import { Transitions } from '@mui/material/styles/createTransitions';
import { Typography } from '@mui/material/styles/createTypography';

export interface CustomPalette {
  common: CommonColors;
  mode: PaletteMode;
  contrastThreshold: number;
  tonalOffset: PaletteTonalOffset;
  primary: PaletteColor;
  secondary: PaletteColor;
  error: PaletteColor;
  warning: PaletteColor;
  info: PaletteColor;
  success: PaletteColor;
  text: TypeText;
  divider: TypeDivider;
  action: TypeAction;
  background: TypeBackground;
  getContrastText: (background: string) => string;
  augmentColor: (options: PaletteAugmentColorOptions) => PaletteColor;
}

export interface CustomTheme extends SystemTheme {
  palette: CustomPalette;
  transitions: Transitions;
  typography: Typography;
  breakpoints: Breakpoints;
}
