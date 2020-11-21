import React from 'react';
import {TextInput, View, StyleSheet} from 'react-native';
import {useTheme} from '@config/theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    borderBottomWidth: 1,
  },
  label: {
    fontFamily: 'Medium',
    fontSize: 20,
  },
  textInput: {
    fontFamily: 'Regular',
    fontSize: 16,
    paddingHorizontal: 0,
  },
});

export default function AkingTextInput({
  label,
  placeholder,
  style,
  secureTextEntry,
  ...textInputProps
}) {
  const theme = useTheme();
  return (
    <View
      style={[
        styles.container,
        {
          borderBottomColor: theme.palatte.textInput.underlineColor,
        },
        style,
      ]}>
      <Text style={styles.label}>{label}</Text>
      <TextInput
        placeholder={placeholder}
        secureTextEntry={secureTextEntry}
        underlineColorAndroid="transparent"
        placeholderTextColor={theme.palatte.textInput.placeholderColor}
        style={[
          styles.textInput,
          {
            color: theme.palatte.text.main,
          },
        ]}
        {...textInputProps}
      />
    </View>
  );
}
