import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useTheme} from '@config/theme';

const styles = StyleSheet.create({
  title: {
    fontFamily: 'Demi',
    fontSize: 24,
    letterSpacing: 0,
  },
  subtitle: {
    fontFamily: 'Medium',
    fontSize: 18,
  },
});

export default function AkingText({
  children,
  variant = 'body',
  color = 'text',
  style = {},
}) {
  const theme = useTheme();
  return (
    <Text style={[styles[variant], {color: theme.palatte[color].main}, style]}>
      {children}
    </Text>
  );
}
