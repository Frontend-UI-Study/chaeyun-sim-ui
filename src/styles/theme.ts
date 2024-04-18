interface ColorItems {
  main: string;
  dark: string;
}

export interface Colors {
  primary: ColorItems;
  secondary: ColorItems;
  default: ColorItems;
  error: ColorItems;
  success: ColorItems;
}

const colors: Colors = {
  primary: {
    main: '#FE5027',
    dark: 'orange',
  },
  secondary: {
    main: '#414141',
    dark: 'black',
  },
  default: {
    main: '#D6D6D6',
    dark: '#BDBDBD',
  },
  error: {
    main: '#D32F2F',
    dark: '#C62828',
  },
  success: {
    main: '#2E7D32',
    dark: '#1B5E20',
  },
};

const theme = {
  colors,
};

export default theme;
