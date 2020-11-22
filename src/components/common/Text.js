import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useTheme} from '@config/theme';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Demi',
    fontSize: 24,
    letterSpacing: 0,
    marginBottom: 10,
  },
  subtitle: {
    fontFamily: 'Medium',
    fontSize: 18,
  },
  headline: {
    fontFamily: 'Demi',
    fontSize: 32,
    lineHeight: 60,
  },
  subheading: {
    fontFamily: 'Medium',
    fontSize: 16,
    lineHeight: 21,
  },
  button: {
    fontFamily: 'Demi',
    fontSize: 18,
  },
  tabLabel: {
    fontFamily: 'Demi',
    fontSize: 12,
    letterSpacing: 0.14,
  },
  headerTitle: {
    fontFamily: 'Demi',
    fontSize: 20,
    lineHeight: 41,
  },
});

export default function AkingText({
  children,
  variant = 'body',
  color = 'main',
  style = {},
}) {
  const theme = useTheme();
  return (
    <Text style={[styles[variant], {color: theme.palatte.text[color]}, style]}>
      {children}
    </Text>
  );
}
