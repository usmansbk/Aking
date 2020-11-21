import React, {useContext} from 'react';

const colors = {
  white: '#fff',
  red: '#f96060',
  blue: '#6074f9',
  darkBlue: '#292e4e',
  black: '#313131',
  green: '#5ABB56',
  pink: '#E42B6A',
  yellow: '#F4CA8F',
  gray: '#9E9E9E',
};

export const theme = {
  colors: colors,
  palatte: {
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
    radius: 4,
    elevation: 4,
  },
};

const ThemeContext = React.createContext(theme);

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext.Provider;
