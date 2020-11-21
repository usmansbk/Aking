import React from 'react';
import {StyleSheet, View, TouchableOpacity} from 'react-native';
import Text from './Text';
import {useTheme} from '@config/theme';

const BUTTON_HEIGHT = 48;

const styles = StyleSheet.create({
  container: {
    height: BUTTON_HEIGHT,
    justifyContent: 'center',
    alignItems: 'center',
  },
  contained: {},
  text: {
    elevation: 0,
    borderRadius: 0,
    backgroundColor: 'transparent',
  },
  fullWidth: {
    alignSelf: 'auto',
  },
  small: {
    alignSelf: 'center',
  },
});

export default function AkingButton({
  children,
  onPress,
  variant = 'contained',
  color = 'accent',
  textColor,
  fullWidth = true,
}) {
  const theme = useTheme();
  const colors = theme.palatte[color];

  return (
    <TouchableOpacity
      onPress={onPress}
      style={[
        styles.container,
        {
          marginVertical: theme.spacing.m,
          elevation: theme.shape.elevation,
          backgroundColor: colors.main,
          borderRadius: theme.shape.radius,
        },
        styles[variant],
        fullWidth ? styles.fullWidth : styles.small,
      ]}>
      <View style={styles.button}>
        <Text
          variant="button"
          color={textColor}
          style={{color: textColor || colors.contrast}}>
          {children}
        </Text>
      </View>
    </TouchableOpacity>
  );
}
