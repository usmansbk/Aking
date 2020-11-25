import React from 'react';
import {TextInput, StyleSheet, View} from 'react-native';
import {Text, IconButton, Avatar} from '@components/common';
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
  roundedInput: {
    fontFamily: 'Medium',
    fontSize: 14,
  },
  roundedText: {
    width: 65,
  },
  chip: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 130,
  },
});

export function RoundedInput({
  label,
  placeholder,
  leftImage,
  item,
  ...textInputProps
}) {
  const theme = useTheme();
  return (
    <View style={styles.row}>
      <Text
        variant="label"
        style={{
          marginRight: theme.spacing.m,
        }}>
        {label}
      </Text>
      {item ? (
        <View
          style={[
            styles.chip,
            {
              height: theme.spacing.space(6),
              borderRadius: theme.spacing.space(3),
              backgroundColor: theme.palatte.textInput.background,
            },
          ]}>
          <Avatar size={theme.spacing.space(6)} />
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={[
              styles.roundedText,
              {
                marginLeft: theme.spacing.s,
              },
            ]}>
            {item.title}
          </Text>
        </View>
      ) : (
        <TextInput
          style={[
            styles.roundedInput,
            {
              height: theme.spacing.space(6),
              padding: theme.spacing.l,
              borderRadius: theme.spacing.space(3),
              backgroundColor: theme.palatte.textInput.background,
            },
          ]}
          placeholder={placeholder}
          {...textInputProps}
        />
      )}
    </View>
  );
}

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
