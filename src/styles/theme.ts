interface ColorSet {
  main: string;
  light: string;
  dark: string;
}

export interface ThemeColors {
  primary: ColorSet;
  secondary: ColorSet;
  default: ColorSet;
  error: ColorSet;
  success: ColorSet;
  [key: string]: ColorSet;
}

const colors: ThemeColors = {
  primary: {
    main: '#1976D2',
    light: '#42A5F5',
    dark: '#1565C0',
  },
  secondary: {
    main: '#9C27B0',
    light: '#BA68C8',
    dark: '#7B1FA2',
  },
  default: {
    main: '#D6D6D6',
    light: '#E0E0E0',
    dark: '#BDBDBD',
  },
  error: {
    main: '#D32F2F',
    light: '#EF5350',
    dark: '#C62828',
  },
  success: {
    main: '#2E7D32',
    light: '#4CAF50',
    dark: '#1B5E20',
  },
  black: {
    main: '#242424',
    light: '#242424',
    dark: '#242424',
  },
};

const theme = {
  colors,
};

export default theme;
