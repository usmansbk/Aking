import React from 'react';
import {TextInput, StyleSheet} from 'react-native';
import {useTheme} from '@config/theme';

const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'Demi',
    fontSize: 18,
  },
});

export default function TextField({placeholder}) {
  const theme = useTheme();
  return (
    <TextInput
      placeholder={placeholder}
      style={[
        styles.textInput,
        {
          color: theme.palatte.text.main,
          backgroundColor: theme.palatte.textInput.background,
          height: theme.spacing.space(8),
          paddingHorizontal: theme.spacing.l,
        },
      ]}
    />
  );
}
