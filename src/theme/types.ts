export type Breakpoints = string[];

export type MediaQueries = {
  xs: string;
  sm: string;
  md: string;
  lg: string;
  xl: string;
  nav: string;
};

export type Spacing = number[];

export type Radii = {
  small: string;
  default: string;
  card: string;
  circle: string;
};

export type Shadows = {
  level1: string;
  active: string;
  success: string;
  warning: string;
  focus: string;
  inset: string;
};

export type Gradients = {
  cardHeader: string;
  inverseCardHeader: string;
  bubblegum: string;
  inverseBubblegum: string;
  blue: string;
  violet: string;
  violetAlt: string;
  gold: string;
  newTrees: string;
  rainforest: string;
  wildLife: string;
};

export type Colors = {
  primary: string;
  primaryBright: string;
  primaryDark: string;
  secondary: string;
  tertiary: string;
  success: string;
  failure: string;
  warning: string;
  cardBorder: string;
  contrast: string;
  dropdown: string;
  dropdownDeep: string;
  invertedContrast: string;
  input: string;
  inputSecondary: string;
  background: string;
  backgroundDisabled: string;
  backgroundAlt: string;
  text: string;
  textDisabled: string;
  textSubtle: string;
  disabled: string;

  // Gradients
  gradients: Gradients;

  // Additional colors
  binance: string;
  plantswap: string;
  goose: string;
  cafeswap: string;
  overlay: string;
  gold: string;
  silver: string;
  bronze: string;
};

export type ZIndices = {
  dropdown: number;
  modal: number;
};
