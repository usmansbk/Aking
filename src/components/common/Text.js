import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {useTheme} from '@config/theme';

const styles = StyleSheet.create({
  text: {},
});

export default function AkingText({children, style = {}}) {
  const theme = useTheme();
  return (
    <Text style={[styles.text, theme.fonts.regular, style]}>{children}</Text>
  );
}
