import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {Text, IconButton} from '@components/common';
import {useTheme} from '@config/theme';

const styles = StyleSheet.create({
  textInput: {
    fontFamily: 'Demi',
    fontSize: 18,
  },
  field: {
    borderWidth: 1,
    borderRadius: 5,
  },
  fieldFooter: {
    borderTopWidth: 1,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  rounded: {
    fontFamily: 'Medium',
    fontSize: 14,
  },
});

export default function Input({placeholder, ...textInputProps}) {
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
      {...textInputProps}
    />
  );
}

export function TextField({label, ...textInputProps}) {
  const theme = useTheme();
  return (
    <View>
      <Text variant="label">{label}</Text>
      <View
        style={[
          styles.field,
          {
            borderColor: theme.palatte.textInput.borderColor,
            marginTop: theme.spacing.m,
          },
        ]}>
        <TextInput
          maxHeight={200}
          numberOfLines={2}
          multiline
          {...textInputProps}
          style={styles.textInput}
        />
        <View
          style={[
            styles.fieldFooter,
            {
              backgroundColor: theme.colors.gray10,
              borderColor: theme.palatte.textInput.borderColor,
            },
          ]}>
          <IconButton name="clip" color={theme.colors.gray7} />
        </View>
      </View>
    </View>
  );
}

export function RoundedInput({label, placeholder, ...textInputProps}) {
  const theme = useTheme();
  return (
    <View style={[styles.row]}>
      <Text variant="label">{label}</Text>
      <TextInput
        placeholder={placeholder}
        style={[
          styles.rounded,
          styles.textInput,
          {
            height: theme.spacing.space(6),
            backgroundColor: theme.palatte.textInput.background,
            marginHorizontal: theme.spacing.l,
            borderRadius: theme.spacing.xl,
            paddingHorizontal: theme.spacing.l,
          },
        ]}
        {...textInputProps}
      />
    </View>
  );
}
