import React, {useContext} from 'react';
import {StyleSheet} from 'react-native';

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

const fonts = StyleSheet.create({
  title: {
    fontFamily: 'Demi',
    fontSize: 24,
    letterSpacing: 0,
  },
  body: {
    fontFamily: 'Regular',
    fontSize: 20,
  },
});

export const theme = {
  colors: colors,
  palatte: {
    primary: {
      main: colors.red,
    },
    secondary: {
      main: colors.blue,
      dark: colors.darkBlue,
    },
    text: {
      main: colors.black,
      contrast: colors.white,
    },
  },
  fonts: fonts,
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

const ThemeContext = React.createContext(theme);

export function useTheme() {
  return useContext(ThemeContext);
}

export default ThemeContext.Provider;
