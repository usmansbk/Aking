import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useTheme} from '@config/theme';

const styles = StyleSheet.create({
  text: {},
});

export default function AkingText({
  children,
  variant = 'body',
  color = 'text',
  style = {},
}) {
  const theme = useTheme();
  return (
    <Text
      style={[
        styles.text,
        theme.fonts[variant],
        {color: theme.palatte[color].main},
        style,
      ]}>
      {children}
    </Text>
  );
}
