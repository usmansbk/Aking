import React, {useContext} from 'react';

const colors = {
  white: '#fff',
  red: '#f96060',
  blue: '#6074f9',
  darkBlue: '#292e4e',
  black: '#313131',
  darkest: '#000',
  green: '#5ABB56',
  pink: '#E42B6A',
  yellow: '#F4CA8F',
  gray: '#9B9B9B',
  gray2: '#D8D8D8',
  gray3: '#C6C6C6',
};

export const theme = {
  colors: colors,
  palatte: {
    background: {
      main: colors.white,
    },
    primary: {
      main: colors.red,
      contrast: colors.white,
    },
    secondary: {
      main: colors.blue,
      dark: colors.darkBlue,
      contrast: colors.white,
    },
    accent: {
      main: colors.white,
      dark: colors.gray,
      contrast: colors.black,
    },
    text: {
      main: colors.black,
      contrast: colors.white,
      primary: colors.red,
      secondary: colors.blue,
      gray: colors.gray,
    },
    textInput: {
      underlineColor: colors.gray2,
      placeholderColor: colors.gray3,
    },
  },
  spacing: {
    xs: 2,
    s: 4,
    m: 8,
    l: 16,
    xl: 32,
    space: (size) => size * 2,
  },
  shape: {
    radius: 4,
    elevation: 4,
  },
};

const ThemeContext = React.createContext(theme);

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext.Provider;
