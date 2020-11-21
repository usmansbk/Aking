const colors = {
  white: '#fff',
  red: '#f96060',
  blue: '#6074f9',
  darkBlue: '#292e4e',
  black: '#313131',
  green: '#5ABB56',
  pink: '#E42B6A',
  yellow: '#F4CA8F',
};

const theme = {
  colors,
  palatte: {
    primary: {
      main: colors.red,
    },
    secondary: {
      main: colors.blue,
      dark: colors.darkBlue,
    },
    text: {
      black: colors.black,
      contrast: colors.white,
    },
  },
  spacing: {
    xs: 2,
    s: 4,
    m: 8,
    l: 16,
    xl: 32,
  },
  shape: {
    radius: 6,
  },
};
